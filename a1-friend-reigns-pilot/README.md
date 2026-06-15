# A1 Friend + Reigns Pilot

Static prototype for reviewing the Friend Persona + Reigns challenge flow on mobile.

The prototype now includes a scenario browser backed by generated current-flow packs:

- A1: 20 scenarios x 10 languages
- A2: 24 scenarios x 10 languages
- Total: 440 scenario packs

Regenerate the static data after content repo updates:

```bash
node scripts/generate_a1_friend_reigns_pilot_data.js
```

Regenerate plain-text dialogue review exports:

```bash
node scripts/export_current_flow_dialogue_text.js
```

Regenerate A1 10x10 learner-projection review data from the control-tower
artifacts:

```bash
python scripts/export_a1_learner_projection_viewer_data.py
```

Open `index.html`, then use **Learner Review** to inspect a learner-language /
target-language pair. The panel renders static `native_pending` review data from
`data/a1_learner_projection_20260615.json`: 90 cross-language reviewed pairs and
10 same-language diagonal exclusions.

## Publish

This folder is safe to publish separately from the private/control-tower repository.

Recommended public repo:

```text
lingo-prototypes
```

Recommended GitHub Pages URL shape:

```text
https://<owner>.github.io/lingo-prototypes/a1-friend-reigns-pilot/
```

## Contents

- `index.html`
- generated `scenario_manifest.v1.json`
- generated `scenario_packs/current_flow/`
- generated `review_exports/current_flow_dialogue_text/`
- no control-tower docs
- no worklogs
- no task files
- no repo paths
- no internal handoffs
