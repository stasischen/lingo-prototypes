# Current Flow Dialogue Text Review Findings - Updated 2026-06-14

## Verdict

**GO for continued native/content review. The automated dialogue text review
gate now reports zero findings.**

This update supersedes the earlier same-day review. The earlier report correctly exposed visible weirdness, but part of the original high-severity count came from the review/export tooling treating `speaker: learner` turns as NPC lines. That tooling is now fixed in the prototype viewer, text export, and audit script.

The current 440-scenario corpus is still **not native-certified** and should not
be labeled native-reviewed. It is now suitable for the next content-review loop
because the text-only export/audit gate has no unresolved findings and the
browserless full-walk runtime simulator reaches completion for every scenario.

## Scope

- Source corpus: 440 scenarios
- Levels: A1 and A2
- Languages: `de`, `en`, `es`, `fr`, `it`, `ja`, `ko`, `pt`, `th`, `zh`
- Export root: `a1-friend-reigns-pilot/review_exports/current_flow_dialogue_text/`
- Audit script: `scripts/audit_current_flow_dialogue_text.js`
- Audit artifact: `_automated_issue_scan.json`

## What Changed

### Tooling fixes

- Scenario manifest and text exports now separate source status from prototype
  text-review state, prototype runtime-walk state, and native review state.
- The web prototype now respects `turn.speaker === "learner"` and no longer renders learner-production turns as NPC/staff bubbles.
- Text exports now label learner turns as learner turns in the clean dialogue path.
- Audit now avoids treating learner-production mirror turns as NPC/learner role-direction errors.
- The export script now preserves manual review artifacts and audit JSON instead of deleting the entire review export directory.
- Redundant learner mirror turns are omitted from UI rounds, clean dialogue
  exports, and automated audit.
- Duplicate support closings that repeat the same NPC surface are omitted from
  UI rounds, clean dialogue exports, and automated audit.
- Natural echo closings and coherent A1 3-5 turn packs are treated as accepted
  policy cases, not review findings.

### Content fixes

- Rebuilt `a2_invite_friend_activity` across all 10 languages so the learner accepts/responds to the friend invitation instead of repeating the invitation.
- Localized A2 invite hints across all 10 languages.
- Replaced generic A2 setting labels such as `friend chat` and `low-risk help message` with localized setting labels.
- Localized common English friend hints such as `Respond naturally to the friend plan.` and `Keep the plan to two simple steps.`
- Fixed targeted duplicate closings in:
  - `a2:de:a2_reschedule_meeting_time`
  - `a2:zh:a2_make_simple_plan_sequence`
  - `a1:ja:food_bill_payment`

## Current Audit Summary

| Metric | Count |
| :--- | ---: |
| Total issue signals | 0 |
| High severity signals | 0 |
| Medium severity signals | 0 |
| Same-speaker repeat signals | 0 |
| Natural echo candidates | 0 |
| Adjacent duplicate medium signals | 0 |
| Reused correct-surface signals | 0 |
| Nonstandard A1 turn-count signals | 0 |

## Runtime Walk Summary

The browserless runtime-walk gate simulates the current prototype's dialogue
progression logic after the same learner-mirror and duplicate-closing
normalization used by the viewer, text export, and audit script.

| Metric | Count |
| :--- | ---: |
| Scenarios walked | 440 |
| Runtime rounds walked | 1738 |
| Transcript messages simulated | 3582 |
| Runtime-walk issues | 0 |

Artifact: `_runtime_walk_scan.json`

This is stronger than the earlier turn-1 smoke evidence because it walks every
runtime round through correct-choice selection and completion. It is still not a
browser rendering smoke, TTS smoke, or native-speaker review.

## Remaining Policy Notes

### P1 - Learner-production mirror turns are display/runtime-normalized

Some A1 source packs still contain learner-production mirror turns used by an
older runtime shape. The current prototype, text export, and audit now omit
redundant mirror rounds when the learner target is identical to the prior
correct learner response.

Recommendation: future schema cleanup should remove or explicitly annotate
these source-level mirror turns, but they no longer affect current review,
runtime display, or audit output.

### P2 - Natural echo closings are accepted policy cases

Several A1 scenarios end with both speakers using the same short closing, such
as `See you`, `Bis später`, or `待會見`. These are plausible natural conversation
echoes and are not treated as defects by the current audit.

Recommendation: native reviewers may still polish individual closings, but the
automation should not force unnatural alternates solely to avoid repetition.

### P3 - A1 current-flow runtime accepts 3-5 review turns

The audit accepts coherent A1 packs with 3-5 review turns. This keeps concise
restroom-direction flows and the longer KO hotel Wi-Fi/breakfast flow from being
treated as defects when they are runtime-renderable and dialogue-coherent.

Recommendation: if future curriculum policy requires exactly 4 turns, handle it
as a separate content-design normalization pass.

### P4 - Distractor quality remains a native/content review dimension

A2 setting labels and common hints were fixed in the previous pass. The current
automated text audit does not flag any remaining generic placeholder leakage.

Recommendation: native/content review should still inspect distractor quality
for pedagogical richness, but there is no current automated finding blocking
the review gate.

## Validation Commands

```text
node scripts/generate_a1_friend_reigns_pilot_data.js
node scripts/export_current_flow_dialogue_text.js
node scripts/audit_current_flow_dialogue_text.js
node scripts/runtime_walk_current_flow.js
node --check scripts/export_current_flow_dialogue_text.js
node --check scripts/audit_current_flow_dialogue_text.js
node --check scripts/runtime_walk_current_flow.js
```

## Next Recommended Work

1. Send the corrected exports to native/content review.
2. Keep `native_review_state: native_pending` until tracked native evidence
   exists.
3. For future schema cleanup, remove or explicitly annotate source-level
   learner mirror turns.
4. For future curriculum cleanup, decide whether A1 should keep the accepted
   3-5 review-turn range or normalize to exactly 4.
