import argparse
import json
import re
from pathlib import Path


CHECKS = {
    "payment": (
        re.compile(r"card|karte|tarjeta|carte|carta|cartão|カード|카드|บัตร|刷卡|卡", re.I),
        re.compile(r"cash|bar\b|efectivo|esp[eè]ces|contanti|dinheiro|現金|付現|现金|현금|เงินสด", re.I),
    ),
    "here_to_go": (
        re.compile(r"for here|sur place|tomar aquí|qui\b|店内|드시고|ทานที่ร้าน|內用|内用", re.I),
        re.compile(r"to go|emporter|llevar|portare via|持ち帰り|가져|กลับบ้าน|外帶|外带", re.I),
    ),
    "wait_bus": (
        re.compile(r"wait|warte|espero|attends|aspetto|待ち|기다|รอ|等", re.I),
        re.compile(r"bus|autobus|ônibus|バス|버스|รถบัส|公車", re.I),
    ),
}


def text_for(item):
    return " ".join(str(item.get(key, "") or "") for key in ("surface", "translation", "speak"))


def scan(root):
    issues = []
    for path in sorted(root.rglob("*.json")):
        data = json.loads(path.read_text(encoding="utf-8"))
        if "core_repair_repeat_slowly" in str(path):
            continue
        for turn in data.get("turns", []):
            prompt = text_for(turn)
            reply_set = turn.get("reply_set") or {}
            choices = reply_set.get("choices") or []
            accepted = {reply_set.get("correct"), *(reply_set.get("accepted") or [])}
            accepted.discard(None)
            for check_name, (left_re, right_re) in CHECKS.items():
                if not (left_re.search(prompt) and right_re.search(prompt)):
                    continue
                left_choices = [choice for choice in choices if left_re.search(text_for(choice))]
                right_choices = [choice for choice in choices if right_re.search(text_for(choice))]
                accepted_left = [choice for choice in left_choices if choice.get("id") in accepted]
                accepted_right = [choice for choice in right_choices if choice.get("id") in accepted]
                if not left_choices or not right_choices or not (accepted_left and accepted_right):
                    issues.append({
                        "check": check_name,
                        "issue": "not_multi_accepted",
                        "file": str(path),
                        "turn_id": turn.get("turn_id"),
                        "prompt": turn.get("surface"),
                        "accepted": sorted(accepted),
                    })
                    continue
                for choice in accepted_left + accepted_right:
                    if choice.get("id") != reply_set.get("correct") and not choice.get("ends_dialogue"):
                        issues.append({
                            "check": check_name,
                            "issue": "alternate_missing_end_branch",
                            "file": str(path),
                            "turn_id": turn.get("turn_id"),
                            "choice_id": choice.get("id"),
                            "choice": choice.get("surface"),
                        })
    return issues


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--root",
        default=Path(__file__).resolve().parents[1] / "scenario_packs" / "current_flow",
        type=Path,
    )
    args = parser.parse_args()
    issues = scan(args.root)
    print(json.dumps({"issue_count": len(issues), "issues": issues}, ensure_ascii=False, indent=2))
    return 1 if issues else 0


if __name__ == "__main__":
    raise SystemExit(main())
