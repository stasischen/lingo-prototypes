const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const prototypeRoot = path.join(repoRoot, 'a1-friend-reigns-pilot');
const manifestPath = path.join(prototypeRoot, 'scenario_manifest.v1.json');
const outputRoot = path.join(prototypeRoot, 'review_exports', 'current_flow_dialogue_text');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content.replace(/\n/g, '\r\n'), 'utf8');
}

function clean(value) {
  if (value === null || value === undefined) return '';
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value).replace(/\r?\n/g, ' ').trim();
}

function md(value) {
  return clean(value).replace(/\|/g, '\\|');
}

function choiceLine(choice, index) {
  const bits = [
    `${index + 1}. ${clean(choice.surface)}`,
    choice.translation ? `(${clean(choice.translation)})` : '',
    choice.contrast_type ? `[${clean(choice.contrast_type)}]` : '',
    choice.feedback ? `- feedback: ${clean(choice.feedback)}` : '',
  ].filter(Boolean);
  return bits.join(' ');
}

function renderScenario(entry, pack) {
  const lines = [];
  lines.push(`## ${entry.entry_id} - ${clean(pack.title || entry.label)}`);
  lines.push('');
  lines.push(`- Level: ${entry.level.toUpperCase()}`);
  lines.push(`- Language: ${entry.language_label || entry.language} (${entry.language})`);
  lines.push(`- Scenario ID: ${entry.scenario_id}`);
  lines.push(`- Setting: ${clean(pack.setting_label || entry.setting_label)}`);
  lines.push(`- Source status: ${clean(pack.source_status || entry.source_status)}`);
  lines.push(`- Review state: ${clean(pack.review_state || '')}`);
  lines.push(`- Native review: ${clean(pack.native_review_state || '')}`);
  if (pack.scenario) lines.push(`- Scenario brief: ${clean(pack.scenario)}`);
  if (pack.learner_goal) lines.push(`- Learner goal: ${clean(pack.learner_goal)}`);
  if (pack.support_text) lines.push(`- Support text: ${clean(pack.support_text)}`);
  lines.push('');

  lines.push('### Clean Dialogue Path');
  lines.push('');
  const npc = pack.roles?.npc?.label || 'NPC';
  const learner = pack.roles?.learner?.label || 'Learner';
  for (const message of pack.opening_messages || []) {
    const role = message.speaker === 'learner' ? learner : message.speaker === 'friend' ? 'Friend' : npc;
    lines.push(`- ${role}: ${clean(message.surface)}${message.translation ? ` (${clean(message.translation)})` : ''}`);
  }
  for (const turn of pack.turns || []) {
    const correct = (turn.reply_set?.choices || []).find((choice) => choice.id === turn.reply_set?.correct);
    lines.push(`- ${npc}: ${clean(turn.surface)}${turn.translation ? ` (${clean(turn.translation)})` : ''}`);
    if (correct) {
      lines.push(`- ${learner}: ${clean(correct.surface)}${correct.translation ? ` (${clean(correct.translation)})` : ''}`);
    } else {
      lines.push(`- ${learner}: [MISSING CORRECT CHOICE ${clean(turn.reply_set?.correct)}]`);
    }
    if (turn.closing) {
      lines.push(`- ${npc}: ${clean(turn.closing.surface)}${turn.closing.translation ? ` (${clean(turn.closing.translation)})` : ''}`);
    }
  }
  lines.push('');

  lines.push('### Turn Review');
  lines.push('');
  lines.push('| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |');
  lines.push('| :--- | :--- | :--- | :--- | :--- | :--- |');
  for (const turn of pack.turns || []) {
    const choices = turn.reply_set?.choices || [];
    const correct = choices.find((choice) => choice.id === turn.reply_set?.correct);
    const distractors = choices
      .filter((choice) => choice.id !== turn.reply_set?.correct)
      .map(choiceLine)
      .join('<br>');
    const formula = turn.inline_explain
      ? [
          clean(turn.inline_explain.title || turn.inline_explain.pattern_id),
          clean(turn.inline_explain.explain || ''),
          ...(turn.inline_explain.items || []).map((item) => `${clean(item.surface)} = ${clean(item.translation)}`),
        ].filter(Boolean).join('<br>')
      : '';
    lines.push([
      md(turn.turn_id),
      md(`${turn.surface}${turn.translation ? ` (${turn.translation})` : ''}`),
      md(correct ? `${correct.surface}${correct.translation ? ` (${correct.translation})` : ''}` : `[missing ${turn.reply_set?.correct}]`),
      md(distractors),
      md(turn.friend?.hint || ''),
      md(formula),
    ].join(' | ').replace(/^/, '| ').replace(/$/, ' |'));
  }
  lines.push('');
  lines.push('---');
  lines.push('');
  return lines.join('\n');
}

function renderGroup(level, language, entries) {
  const lines = [];
  lines.push(`# ${level.toUpperCase()} ${entries[0]?.language_label || language} Dialogue Review Text`);
  lines.push('');
  lines.push(`Generated from \`a1-friend-reigns-pilot/scenario_manifest.v1.json\`.`);
  lines.push(`Scenario count: ${entries.length}`);
  lines.push('');
  lines.push('This export is for language/content review. It intentionally removes the interactive UI and shows the clean successful path plus distractors and feedback.');
  lines.push('');
  for (const entry of entries) {
    const pack = readJson(path.join(prototypeRoot, entry.path));
    lines.push(renderScenario(entry, pack));
  }
  return lines.join('\n');
}

function main() {
  const manifest = readJson(manifestPath);
  fs.rmSync(outputRoot, { recursive: true, force: true });
  ensureDir(outputRoot);

  const groups = new Map();
  for (const entry of manifest.scenarios) {
    const key = `${entry.level}/${entry.language}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(entry);
  }

  const indexLines = [];
  indexLines.push('# Current Flow Dialogue Text Review Exports');
  indexLines.push('');
  indexLines.push(`Total scenarios: ${manifest.summary?.total || manifest.scenarios.length}`);
  indexLines.push('');
  indexLines.push('| Level | Language | Count | File |');
  indexLines.push('| :--- | :--- | ---: | :--- |');

  for (const [key, entries] of [...groups.entries()].sort()) {
    const [level, language] = key.split('/');
    const fileName = `${level}_${language}_dialogue_review.md`;
    const content = renderGroup(level, language, entries);
    writeFile(path.join(outputRoot, fileName), content);
    indexLines.push(`| ${level.toUpperCase()} | ${entries[0]?.language_label || language} (${language}) | ${entries.length} | [${fileName}](${fileName}) |`);
  }

  writeFile(path.join(outputRoot, 'README.md'), `${indexLines.join('\n')}\n`);
  console.log(JSON.stringify({ outputRoot, files: groups.size + 1, scenarios: manifest.scenarios.length }, null, 2));
}

main();
