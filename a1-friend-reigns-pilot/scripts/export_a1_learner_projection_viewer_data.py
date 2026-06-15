#!/usr/bin/env python3
"""Export A1 10x10 learner-projection review data for the static prototype."""
from __future__ import annotations

import json
from pathlib import Path
from typing import Any

LANGUAGES = ["ko", "ja", "en", "th", "es", "fr", "de", "it", "zh", "pt"]
DATE = "20260615"
REPO_ROOT = Path(__file__).resolve().parents[1]
LINGO_ROOT = REPO_ROOT.parents[1]
TASK_DIR = LINGO_ROOT / "release-aggregator" / "docs" / "tasks" / "A1_MULTILINGUAL_KO_B1_PARALLEL_ORCHESTRATION"
OUT_PATH = REPO_ROOT / "data" / f"a1_learner_projection_{DATE}.json"


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8-sig"))


def load_jsonl(path: Path) -> list[dict[str, Any]]:
    if not path.exists():
        return []
    return [json.loads(line) for line in path.read_text(encoding="utf-8-sig").splitlines() if line.strip()]


def public_item(item: dict[str, Any]) -> dict[str, Any]:
    blocked_keys = {"source_asset_path", "source_queue", "source_target_gate"}
    clean = {key: value for key, value in item.items() if key not in blocked_keys}
    if "evidence_refs" in clean:
        clean["evidence_refs"] = [
            {
                "evidence_text": ref.get("evidence_text", ""),
                "json_pointer": ref.get("json_pointer", ""),
            }
            for ref in clean.get("evidence_refs", [])
        ]
    return clean


def sidecar_payload(path: Path) -> dict[str, Any]:
    data = load_json(path)
    return {
        "schema_version": data.get("schema_version"),
        "status": data.get("status"),
        "review_status": data.get("review_status"),
        "target_surface_status": data.get("target_surface_status"),
        "native_status": data.get("native_status"),
        "production_promotion_allowed": data.get("production_promotion_allowed"),
        "items": [public_item(item) for item in data.get("items", [])],
    }


def build_pair(target_language: str, learner_language: str) -> dict[str, Any]:
    ledger_path = TASK_DIR / f"A1_LEARNER_PROJECTION_SIDECARS_{target_language.upper()}_TARGET_LEDGER_{DATE}.jsonl"
    ledger_rows = [
        row for row in load_jsonl(ledger_path)
        if row.get("target_language") == target_language and row.get("learner_language") == learner_language
    ]
    sidecars: dict[str, Any] = {}
    for row in ledger_rows:
        sidecar_type = row.get("sidecar_type", "").replace("learner_", "").replace("_sidecar", "")
        sidecar_path = Path(row.get("sidecar_path", ""))
        if sidecar_path.exists():
            sidecars[sidecar_type] = sidecar_payload(sidecar_path)

    review_path = TASK_DIR / f"A1_LEARNER_PROJECTION_LLM_REVIEW_{target_language.upper()}_TARGET_{DATE}.jsonl"
    review_rows = [
        row for row in load_jsonl(review_path)
        if (row.get("target_language", target_language) or target_language).lower() == target_language
        and (row.get("learner_language", "") or "").lower() == learner_language
    ]
    review = review_rows[0] if review_rows else {}
    verdict = review.get("verdict", "excluded" if learner_language == target_language else "missing_review")
    default_pass_status = "llm_review_pass" if verdict == "pass_native_pending" else None
    return {
        "pair_id": f"{learner_language}->{target_language}",
        "learner_language": learner_language,
        "target_language": target_language,
        "pair_mode": "same_language_excluded" if learner_language == target_language else "cross_language",
        "target_surface_status": "surface_frozen_native_pending",
        "review_verdict": verdict,
        "semantic_status": review.get("semantic_status", default_pass_status),
        "pedagogy_status": review.get("pedagogy_status", default_pass_status),
        "exercise_quality_status": review.get("exercise_quality_status", default_pass_status),
        "blocking_issues": review.get("blocking_issues", []),
        "carried_notes": review.get("carried_notes", review.get("nonblocking_notes", [])),
        "native_status": review.get("native_status", "native_pending"),
        "production_promotion_allowed": False,
        "sidecars": sidecars,
    }


def main() -> int:
    pairs = [
        build_pair(target_language, learner_language)
        for target_language in LANGUAGES
        for learner_language in LANGUAGES
    ]
    payload = {
        "schema_version": "a1_learner_projection_viewer_data.v1",
        "date": DATE,
        "status": "native_pending_review_viewer_data",
        "native_status": "native_pending",
        "production_promotion_allowed": False,
        "languages": LANGUAGES,
        "summary": {
            "pair_count": len(pairs),
            "cross_language_reviewed": sum(pair["review_verdict"] == "pass_native_pending" for pair in pairs),
            "same_language_excluded": sum(pair["pair_mode"] == "same_language_excluded" for pair in pairs),
            "target_surface_frozen": sum(pair["target_surface_status"] == "surface_frozen_native_pending" for pair in pairs),
        },
        "pairs": pairs,
    }
    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(json.dumps(payload, ensure_ascii=False, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    print(json.dumps({"wrote": str(OUT_PATH), "summary": payload["summary"]}, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
