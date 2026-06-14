# Current Flow Dialogue Text Review Findings - Updated 2026-06-14

## Verdict

**CONDITIONAL GO for continued native/content review. No high-severity automated blockers remain after this pass.**

This update supersedes the earlier same-day review. The earlier report correctly exposed visible weirdness, but part of the original high-severity count came from the review/export tooling treating `speaker: learner` turns as NPC lines. That tooling is now fixed in the prototype viewer, text export, and audit script.

The current 440-scenario corpus is still **not native-certified** and should not be labeled final content-complete. It is now suitable for the next review/fix loop because the obvious A2 invite role-direction bug and A2 English placeholder leakage have been corrected.

## Scope

- Source corpus: 440 scenarios
- Levels: A1 and A2
- Languages: `de`, `en`, `es`, `fr`, `it`, `ja`, `ko`, `pt`, `th`, `zh`
- Export root: `a1-friend-reigns-pilot/review_exports/current_flow_dialogue_text/`
- Audit script: `scripts/audit_current_flow_dialogue_text.js`
- Audit artifact: `_automated_issue_scan.json`

## What Changed

### Tooling fixes

- The web prototype now respects `turn.speaker === "learner"` and no longer renders learner-production turns as NPC/staff bubbles.
- Text exports now label learner turns as learner turns in the clean dialogue path.
- Audit now avoids treating learner-production mirror turns as NPC/learner role-direction errors.
- The export script now preserves manual review artifacts and audit JSON instead of deleting the entire review export directory.

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
| Total issue signals | 66 |
| High severity signals | 0 |
| Medium severity signals | 66 |
| Same-speaker repeat signals | 15 |
| Natural echo candidates | 12 |
| Adjacent duplicate medium signals | 15 |
| Reused correct-surface signals | 15 |
| Nonstandard A1 turn-count signals | 9 |

## Remaining Medium Findings

### M1 - Learner-production mirror turns remain in some A1 packs

Some A1 packs still have consecutive learner-production lines that repeat the same correct surface. These are no longer shown as NPC role errors, but they still create a duplicated learner action in the clean text path.

Examples:

- `a1:en:daily_meet_friend`
- `a1:en:food_bill_payment`
- `a1:en:shopping_ask_price`
- `a1:ja:food_bill_payment`
- `a1:th:shopping_ask_price`

Recommendation: rebuild these A1 scenario families so each turn has a distinct dialogue function, or explicitly mark the duplicate learner turn as a runtime mirror and omit it from clean review display.

### M2 - Natural echo closings need native triage, not mechanical removal

Several A1 scenarios end with both speakers using the same short closing, such as `See you`, `Bis später`, or `待會見`. These can be natural in real conversation, but they should be reviewed per language.

Recommendation: keep these as medium `natural_echo_candidate` findings. Do not blindly rewrite them unless a language reviewer says the echo feels awkward.

### M3 - A1 turn count varies between 3 and 5 turns

The audit now treats 3-5 A1 turns as nonstandard but not high severity because the runtime can render variable-length packs and the shorter restroom flows are coherent.

Affected pattern:

- Several `travel_restroom_directions` packs have 3 turns.
- KO `hotel_wifi_breakfast` has 5 turns.

Recommendation: decide at the curriculum-policy level whether A1 current-flow packs must be exactly 4 turns. If yes, normalize as a separate content-design pass. If no, record the allowed 3-5 turn range in the contract.

### M4 - Reused distractors/feedback still need a second pass

A2 setting labels and common hints were fixed, but some A2 packs still reuse broad distractors across turns. This is pedagogically acceptable for a smoke candidate but not ideal for final content.

Recommendation: next pass should improve distractor specificity by turn, especially for A2 digital/help-message scenarios.

## Validation Commands

```text
node scripts/generate_a1_friend_reigns_pilot_data.js
node scripts/export_current_flow_dialogue_text.js
node scripts/audit_current_flow_dialogue_text.js
node --check scripts/export_current_flow_dialogue_text.js
node --check scripts/audit_current_flow_dialogue_text.js
```

## Next Recommended Work

1. Fix or annotate the remaining A1 learner-production mirror turns.
2. Decide whether A1 permits 3-5 turn packs or requires exactly 4 turns.
3. Run a distractor-specific pass for A2 digital/help-message packs.
4. Send the corrected exports to native review with the remaining medium findings attached.
