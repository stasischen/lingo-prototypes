const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const prototypeRoot = path.join(repoRoot, 'a1-friend-reigns-pilot');
const manifestPath = path.join(prototypeRoot, 'scenario_manifest.v1.json');
const outputPath = path.join(
  prototypeRoot,
  'review_exports',
  'current_flow_dialogue_text',
  '_automated_issue_scan.json',
);

const expectedTurns = {
  a1: 4,
  a2: 4,
};

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function clean(value) {
  if (value === null || value === undefined) return '';
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value).replace(/\s+/g, ' ').trim();
}

function norm(value) {
  return clean(value)
    .toLocaleLowerCase()
    .replace(/[.!?。！？…]+$/g, '')
    .trim();
}

function issue(entry, severity, type, where, detail) {
  return {
    severity,
    entry_id: entry.entry_id,
    level: entry.level,
    lang: entry.language,
    scenario_id: entry.scenario_id,
    type,
    where,
    detail,
  };
}

function hasGenericSetting(value) {
  const setting = clean(value);
  return [
    'friend chat',
    'low-risk help message',
    'public transit',
    'appointment desk',
  ].includes(setting);
}

function scanEntry(entry) {
  const pack = readJson(path.join(prototypeRoot, entry.path));
  const issues = [];
  const turns = pack.turns || [];
  const expected = expectedTurns[entry.level];

  if (expected && turns.length !== expected) {
    issues.push(
      issue(
        entry,
        'high',
        'turn_count',
        'turns',
        `expected ${expected}, got ${turns.length}`,
      ),
    );
  }

  if (hasGenericSetting(pack.setting_label || entry.setting_label)) {
    issues.push(
      issue(
        entry,
        'medium',
        'generic_or_english_setting_label',
        'setting_label',
        clean(pack.setting_label || entry.setting_label),
      ),
    );
  }

  const cleanPath = [];
  for (const message of pack.opening_messages || []) {
    cleanPath.push({
      speaker: message.speaker === 'learner' ? 'learner' : 'npc',
      value: clean(message.surface),
      where: 'opening',
    });
  }

  turns.forEach((turn, index) => {
    const correct = (turn.reply_set?.choices || []).find(
      (choice) => choice.id === turn.reply_set?.correct,
    );
    cleanPath.push({ speaker: 'npc', value: clean(turn.surface), where: `turn[${index}].npc` });
    if (correct) {
      cleanPath.push({
        speaker: 'learner',
        value: clean(correct.surface),
        where: `turn[${index}].correct`,
      });
    }
    if (turn.closing?.surface) {
      cleanPath.push({
        speaker: 'npc',
        value: clean(turn.closing.surface),
        where: `turn[${index}].closing`,
      });
    }
  });

  for (let index = 1; index < cleanPath.length; index += 1) {
    const prev = cleanPath[index - 1];
    const current = cleanPath[index];
    if (norm(prev.value) && norm(prev.value) === norm(current.value)) {
      issues.push(
        issue(
          entry,
          prev.speaker === current.speaker ? 'medium' : 'high',
          'adjacent_clean_path_duplicate',
          current.where,
          `${prev.where}: ${prev.value} / ${current.where}: ${current.value}`,
        ),
      );
    }
  }

  for (let index = 2; index < cleanPath.length; index += 1) {
    const prev = cleanPath[index - 2];
    const current = cleanPath[index];
    if (
      prev.speaker === current.speaker &&
      norm(prev.value) &&
      norm(prev.value) === norm(current.value)
    ) {
      issues.push(
        issue(
          entry,
          'medium',
          'same_speaker_repeats_with_one_turn_gap',
          current.where,
          `${prev.where} and ${current.where}: ${current.value}`,
        ),
      );
    }
  }

  turns.forEach((turn, index) => {
    const correct = (turn.reply_set?.choices || []).find(
      (choice) => choice.id === turn.reply_set?.correct,
    );
    if (turn.closing?.surface && correct && norm(turn.closing.surface) === norm(correct.surface)) {
      issues.push(
        issue(
          entry,
          'medium',
          'closing_duplicates_same_turn_npc',
          `turn[${index}].closing`,
          clean(turn.closing.surface),
        ),
      );
    }
  });

  const correctLines = turns
    .map((turn) => {
      const correct = (turn.reply_set?.choices || []).find(
        (choice) => choice.id === turn.reply_set?.correct,
      );
      return correct ? clean(correct.surface) : '';
    })
    .filter(Boolean);
  const seenCorrect = new Map();
  correctLines.forEach((line, index) => {
    const key = norm(line);
    if (!key) return;
    if (seenCorrect.has(key)) {
      issues.push(
        issue(
          entry,
          'medium',
          'reused_correct_surface_within_scenario',
          `turn[${index}].correct`,
          `${seenCorrect.get(key)} and ${index}: ${line}`,
        ),
      );
    } else {
      seenCorrect.set(key, index);
    }
  });

  return issues;
}

function summarize(issues) {
  const summary = {
    totalIssues: issues.length,
    bySeverity: {},
    byType: {},
  };

  for (const item of issues) {
    summary.bySeverity[item.severity] = (summary.bySeverity[item.severity] || 0) + 1;
    summary.byType[item.type] = (summary.byType[item.type] || 0) + 1;
  }

  return summary;
}

function main() {
  const manifest = readJson(manifestPath);
  const issues = manifest.scenarios.flatMap(scanEntry);
  const payload = {
    generated_at: new Date().toISOString(),
    manifest: path.relative(repoRoot, manifestPath).replace(/\\/g, '/'),
    scope: {
      scenarios: manifest.scenarios.length,
      levels: ['a1', 'a2'],
      languages: [...new Set(manifest.scenarios.map((entry) => entry.language))].sort(),
    },
    summary: summarize(issues),
    issues,
  };

  fs.writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  console.log(JSON.stringify(payload.summary, null, 2));
}

main();
