# Current Flow Dialogue Text Full Review Findings - 2026-06-14

## Verdict

**NOT READY for content-complete / native-review promotion.**

The 440 exported A1/A2 scenario packs are useful as a review corpus, but the current set still has blocking content-quality defects. The most serious issues are role-direction errors where the NPC/staff line is identical to the learner target, plus a small number of turn-count contract mismatches. A2 is more coherent overall than A1, but it still has repeated social-plan responses, generic English settings, and non-localized support hints.

This review is a full text-export review, not a native-speaker certification. It combines automated structural scans with manual spot checks of representative affected scenarios.

## Scope

- Export root: `a1-friend-reigns-pilot/review_exports/current_flow_dialogue_text/`
- Source manifest: `a1-friend-reigns-pilot/scenario_manifest.v1.json`
- Total scenarios reviewed: 440
- Levels: A1, A2
- Languages: `de`, `en`, `es`, `fr`, `it`, `ja`, `ko`, `pt`, `th`, `zh`
- Per-language coverage: 20 A1 + 24 A2 scenarios
- Automated scan artifact: `_automated_issue_scan.json`
- Re-runnable scan script: `scripts/audit_current_flow_dialogue_text.js`

## Automated Scan Summary

| Metric | Count |
| :--- | ---: |
| Total issue signals | 183 |
| High severity signals | 78 |
| Medium severity signals | 105 |
| Unique entries with high-severity signals | 49 |
| Adjacent clean-path duplicate signals | 69 |
| Unique entries with adjacent duplicate signals | 40 |
| Turn-count mismatch entries | 9 |
| Generic/English setting-label entries | 60 |
| Reused correct-surface entries | 15 |
| Same-speaker repeat entries | 27 |

The scan is intentionally conservative. Some medium findings are acceptable repair or echo patterns, especially repeat-and-clarify scenarios. The high findings are not all equally severe, but enough of them are real content defects to block content-complete status.

## Findings

### F1 - High - NPC/staff lines often duplicate learner target lines

**File/Section:** `a1_*_dialogue_review.md`, `a2_*_dialogue_review.md` / Clean Dialogue Path and Turn Review

**Finding:** Multiple scenarios have adjacent NPC and learner lines with identical surfaces. In many cases this is a true role-direction error: the staff/friend says the learner's intended answer, then the learner repeats it.

**Examples manually confirmed:**

- `a1:en:food_bill_payment`: Server says `Can I get the check, please?`; learner correct line is the same. Later the server says `Card, please.` and learner repeats it.
- `a1:en:shopping_ask_price`: Shop staff says `How much is this?`; learner correct line is the same. Later shop staff says `Okay, I'll take it.` and learner repeats it.
- `a1:ja:food_bill_payment`: Staff says `お会計をお願いします。` and learner correct line is identical.
- `a1:ja:shopping_ask_price`: Staff says `これはいくらですか。` and learner correct line is identical.
- `a2:zh:a2_invite_friend_activity`: Friend asks `等一下要不要一起喝咖啡？`; learner correct line is identical.

**Risk:** The learner is trained to repeat the other speaker instead of responding naturally. This breaks the core dialogue contract and makes the scenario feel machine-generated.

**Recommendation:** Rewrite the affected turns by scenario family, not by isolated line edits. For each affected scenario, reassign speaker intent first, then regenerate staff/NPC prompt, learner target, distractors, feedback, and support hints together.

### F2 - High - Turn-count contract mismatch remains in 9 packs

**File/Section:** `_automated_issue_scan.json` / `turn_count`

**Finding:** 9 entries do not match the current expected 4-turn scenario contract.

**Affected entries:**

- `a1:en:travel_restroom_directions`
- `a1:es:travel_restroom_directions`
- `a1:fr:travel_restroom_directions`
- `a1:it:travel_restroom_directions`
- `a1:ja:travel_restroom_directions`
- `a1:ko:hotel_wifi_breakfast`
- `a1:ko:travel_restroom_directions`
- `a1:pt:travel_restroom_directions`
- `a1:th:travel_restroom_directions`

**Risk:** Runtime smoke and static validators may disagree about what a complete scenario is. Some 3-turn restroom flows read coherently, but they do not satisfy the same pack contract as the rest of the current flow.

**Recommendation:** Decide whether these are approved shorter/longer variants. If not, normalize them to 4 turns before promoting any full A1 completion claim.

### F3 - High - A2 friend-invite flow repeats the invitation instead of answering it

**File/Section:** `a2_*_dialogue_review.md` / `a2_invite_friend_activity`

**Finding:** `a2_invite_friend_activity` is high-risk across all 10 languages. The friend often makes an invitation and the learner repeats the invitation rather than accepting, suggesting a time, or confirming the plan.

**Affected entries:** `a2:{de,en,es,fr,it,ja,ko,pt,th,zh}:a2_invite_friend_activity`

**Risk:** This weakens the A2 social-planning blueprint. The user sees fluent text, but the dialogue act is wrong.

**Recommendation:** Rebuild this scenario family across all 10 languages from a language-neutral brief: invite, accept/soften, propose time, confirm meeting point, close. Each language should have native-specific register and natural acceptance patterns.

### F4 - Medium - A2 has generic English setting labels and support text leakage

**File/Section:** `a2_*_dialogue_review.md` / metadata and Turn Review

**Finding:** 60 entries still use generic or English setting labels such as `low-risk help message` or `friend chat`. Manual checks also found English friend hints inside non-English packs, for example Traditional Chinese A2 rows with `Respond naturally to the friend plan.` and `Keep the plan to two simple steps.`

**Risk:** The main dialogue may be localized, but the review/runtime support layer is still partially English/generic. This is confusing for native review and makes it easy to overstate readiness.

**Recommendation:** Localize or replace all user-visible support labels/hints before native review. Treat setting label, friend hint, feedback, formula text, and segmentation as part of the pack surface, not as optional metadata.

### F5 - Medium - Reused distractors and feedback reduce pedagogical specificity

**File/Section:** A2 digital/help and social-plan scenarios

**Finding:** Several A2 scenarios reuse the same distractor pair and feedback pattern across all turns. Example: `a2:en:a2_app_booking_confirmation` repeatedly offers unrelated password/refund distractors and repeats the same generic friend hint.

**Risk:** The learner can answer by pattern elimination rather than understanding the local turn. It also makes the content feel templated.

**Recommendation:** For each turn, make at least one distractor target the local misunderstanding and one target a plausible register/scenario mistake. Feedback should explain the specific reason the choice fails in that turn.

### F6 - Medium - Some duplicate-line findings are acceptable but need explicit triage

**File/Section:** `_automated_issue_scan.json` / `same_speaker_repeats_with_one_turn_gap`, `reused_correct_surface_within_scenario`

**Finding:** The scan flags some repeated lines that may be intentional. Repair scenarios can legitimately repeat the NPC question after the learner asks for repetition. Some closings such as `See you later` can also be acceptable echo closings depending on the language and context.

**Risk:** Blind automated fixing could damage intentional repair flows. At the same time, leaving all duplicates untouched hides real role-direction bugs.

**Recommendation:** Add a triage field for duplicate findings: `intentional_repair`, `natural_echo`, `role_direction_error`, or `rewrite_needed`. Only the last two should block promotion.

### F7 - Medium - Current `candidate_runtime_verified` token overstates text readiness

**File/Section:** all exports / Source status

**Finding:** Many packs report `candidate_runtime_verified`, but the dialogue-text review shows this does not imply natural dialogue correctness or full scenario readiness. Runtime verification checks rendering/progression behavior; it does not certify speaker role, native naturalness, distractor quality, or metadata localization.

**Risk:** A future agent could mistake runtime-pass status for content-complete status.

**Recommendation:** Split status dimensions in future reports: `runtime_smoke_scope`, `static_contract_state`, `ai_naturalness_state`, `speaker_role_review_state`, and `native_review_state`.

## High-Severity Entry IDs

```text
a1:de:daily_schedule_time
a1:de:social_running_late
a1:en:daily_meet_friend
a1:en:daily_schedule_time
a1:en:food_bill_payment
a1:en:shopping_ask_price
a1:en:social_running_late
a1:en:travel_restroom_directions
a1:es:daily_meet_friend
a1:es:shopping_ask_price
a1:es:travel_restroom_directions
a1:fr:daily_meet_friend
a1:fr:shopping_ask_price
a1:fr:social_running_late
a1:fr:travel_restroom_directions
a1:it:daily_schedule_time
a1:it:social_running_late
a1:it:travel_restroom_directions
a1:ja:daily_meet_friend
a1:ja:daily_schedule_time
a1:ja:food_bill_payment
a1:ja:shopping_ask_price
a1:ja:travel_restroom_directions
a1:ko:hotel_wifi_breakfast
a1:ko:travel_restroom_directions
a1:pt:daily_meet_friend
a1:pt:shopping_ask_price
a1:pt:social_running_late
a1:pt:travel_restroom_directions
a1:th:daily_meet_friend
a1:th:daily_schedule_time
a1:th:food_bill_payment
a1:th:shopping_ask_price
a1:th:travel_restroom_directions
a1:zh:daily_schedule_time
a1:zh:social_running_late
a2:de:a2_invite_friend_activity
a2:de:a2_reschedule_meeting_time
a2:en:a2_invite_friend_activity
a2:es:a2_invite_friend_activity
a2:fr:a2_invite_friend_activity
a2:it:a2_invite_friend_activity
a2:ja:a2_invite_friend_activity
a2:ja:a2_make_simple_plan_sequence
a2:ko:a2_invite_friend_activity
a2:pt:a2_invite_friend_activity
a2:th:a2_invite_friend_activity
a2:zh:a2_invite_friend_activity
a2:zh:a2_make_simple_plan_sequence
```

## Recommended Fix Order

1. Block promotion of the current 440 packs as content-complete. Keep them available as review candidates.
2. Fix high-severity role-direction errors by scenario family:
   - A1 `food_bill_payment`
   - A1 `shopping_ask_price`
   - A1 `daily_meet_friend`
   - A1 `daily_schedule_time`
   - A1 `social_running_late`
   - A2 `a2_invite_friend_activity`
   - A2 `a2_reschedule_meeting_time`
   - A2 `a2_make_simple_plan_sequence`
3. Resolve turn-count policy for the 9 mismatched A1 packs.
4. Localize all A2 setting labels and friend hints.
5. Diversify A2 distractors and feedback by turn.
6. Re-run `node scripts/audit_current_flow_dialogue_text.js`.
7. Re-export text files and send the corrected set to native review.

## Open Questions

- Should A1 restroom-direction packs be allowed as 3-turn micro-scenarios, or should all current-flow packs be forced to 4 turns?
- Should natural echo closings be allowed when NPC and learner use the same short closing phrase?
- Should `candidate_runtime_verified` remain as-is if a separate content-readiness token is introduced?
