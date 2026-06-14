const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const prototypeRoot = path.join(repoRoot, 'a1-friend-reigns-pilot');
const manifestPath = path.join(prototypeRoot, 'scenario_manifest.v1.json');
const outputPath = path.join(
  prototypeRoot,
  'review_exports',
  'current_flow_dialogue_text',
  '_runtime_walk_scan.json',
);

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function clean(value) {
  if (value === null || value === undefined) return '';
  return String(value).replace(/\s+/g, ' ').trim();
}

function normalize(text) {
  return String(text ?? '').normalize('NFC').replace(/[.,!?，。！？\s]/g, '').trim();
}

function correctChoice(turn) {
  const correctId = turn.reply_set?.correct;
  return (turn.reply_set?.choices || []).find((choice) => choice.id === correctId);
}

function isRedundantLearnerMirror(turn, previousTurn) {
  if (!previousTurn || turn.speaker !== 'learner') return false;
  const currentCorrect = correctChoice(turn);
  const previousCorrect = correctChoice(previousTurn);
  return currentCorrect && previousCorrect && normalize(currentCorrect.surface) === normalize(previousCorrect.surface);
}

function buildRounds(pack) {
  return (pack.turns || [])
    .filter((turn, index) => !isRedundantLearnerMirror(turn, pack.turns[index - 1]))
    .map((turn) => {
      const correctId = turn.reply_set?.correct;
      const choices = turn.reply_set?.choices || [];
      const speaker = turn.speaker || (turn.learning_role === 'production_target' ? 'learner' : 'npc');
      const showClosing = turn.closing && normalize(turn.closing.surface) !== normalize(turn.surface);
      return {
        id: turn.turn_id,
        speaker,
        staffText: clean(turn.surface),
        choices: choices.map((choice) => ({
          id: choice.id,
          text: clean(choice.surface),
          good: choice.id === correctId,
          feedback: clean(choice.feedback),
        })),
        correctId,
        closing: showClosing ? clean(turn.closing.surface) : '',
      };
    });
}

function issue(entry, type, where, detail) {
  return {
    entry_id: entry.entry_id,
    level: entry.level,
    lang: entry.language,
    scenario_id: entry.scenario_id,
    type,
    where,
    detail,
  };
}

function walkEntry(entry) {
  const pack = readJson(path.join(prototypeRoot, entry.path));
  const issues = [];
  const rounds = buildRounds(pack);
  const transcript = [];
  let roundIndex = 0;
  let awaitingAdvanceTap = false;
  let dialogueComplete = false;

  if (!rounds.length) {
    issues.push(issue(entry, 'no_runtime_rounds', 'turns', 'buildRounds returned no rounds'));
    return { rounds: 0, issues };
  }

  for (const [openingIndex, message] of (pack.opening_messages || []).entries()) {
    if (!clean(message.surface)) {
      issues.push(issue(entry, 'blank_opening_message', `opening_messages[${openingIndex}]`, 'surface is blank'));
    }
    transcript.push({ round: -1, kind: message.speaker === 'learner' ? 'learner' : 'staff' });
  }

  while (!dialogueComplete && roundIndex < rounds.length) {
    const round = rounds[roundIndex];
    if (!round.id) {
      issues.push(issue(entry, 'missing_round_id', `rounds[${roundIndex}]`, 'turn_id is blank'));
    }
    if (round.speaker !== 'learner' && !round.staffText) {
      issues.push(issue(entry, 'blank_staff_surface', `rounds[${roundIndex}].surface`, 'staff surface is blank'));
    }
    if (!round.choices.length) {
      issues.push(issue(entry, 'missing_choices', `rounds[${roundIndex}].choices`, 'choice list is empty'));
      break;
    }

    const goodChoices = round.choices.filter((choice) => choice.good);
    if (goodChoices.length !== 1) {
      issues.push(
        issue(
          entry,
          'wrong_correct_choice_count',
          `rounds[${roundIndex}].choices`,
          `expected 1 correct choice for ${round.correctId}, got ${goodChoices.length}`,
        ),
      );
      break;
    }

    const selectedResponse = goodChoices[0];
    if (!selectedResponse.text) {
      issues.push(issue(entry, 'blank_correct_surface', `rounds[${roundIndex}].correct`, 'correct surface is blank'));
    }

    if (round.speaker !== 'learner') {
      transcript.push({ round: roundIndex, kind: 'staff' });
    }
    transcript.push({ round: roundIndex, kind: 'learner' });
    if (round.closing) {
      transcript.push({ round: roundIndex, kind: 'staff' });
    }

    if (roundIndex < rounds.length - 1) {
      roundIndex += 1;
      awaitingAdvanceTap = true;
      if (!awaitingAdvanceTap) {
        issues.push(issue(entry, 'advance_not_enabled', `rounds[${roundIndex}]`, 'next round was not reachable'));
        break;
      }
      awaitingAdvanceTap = false;
    } else {
      dialogueComplete = true;
    }
  }

  if (!dialogueComplete) {
    issues.push(issue(entry, 'dialogue_not_completed', 'dialogueComplete', `stopped at round ${roundIndex + 1} / ${rounds.length}`));
  }

  return { rounds: rounds.length, transcriptMessages: transcript.length, issues };
}

function main() {
  const manifest = readJson(manifestPath);
  const results = [];
  const issues = [];
  let totalRounds = 0;
  let totalTranscriptMessages = 0;

  for (const entry of manifest.scenarios || []) {
    const result = walkEntry(entry);
    totalRounds += result.rounds;
    totalTranscriptMessages += result.transcriptMessages || 0;
    if (result.issues.length) issues.push(...result.issues);
    results.push({
      entry_id: entry.entry_id,
      rounds: result.rounds,
      transcript_messages: result.transcriptMessages || 0,
      passed: result.issues.length === 0,
    });
  }

  const payload = {
    generated_at: new Date().toISOString(),
    scope: 'a1-friend-reigns-pilot current_flow',
    scenarios: results.length,
    total_rounds: totalRounds,
    total_transcript_messages: totalTranscriptMessages,
    issues,
    by_type: issues.reduce((acc, item) => {
      acc[item.type] = (acc[item.type] || 0) + 1;
      return acc;
    }, {}),
    results,
  };

  fs.writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  console.log(JSON.stringify({
    scenarios: payload.scenarios,
    total_rounds: payload.total_rounds,
    total_transcript_messages: payload.total_transcript_messages,
    issues: payload.issues.length,
    by_type: payload.by_type,
    outputPath,
  }, null, 2));

  if (issues.length) process.exitCode = 1;
}

main();
