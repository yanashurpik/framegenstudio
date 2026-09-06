#!/usr/bin/env python3
"""
framegen.py — folder scaffolding and health checks for the FrameGen content pipeline.

    python3 framegen.py init  ~/"Google Drive/My Drive/FrameGen Content"
    python3 framegen.py new   "Sunglasses — summer drop"
    python3 framegen.py status
    python3 framegen.py check

`init` remembers the root in ~/.framegen.json, so every later command runs
without arguments. Override any time with --root.

Nothing is ever deleted or overwritten. Re-running a command is always safe.
"""

import argparse
import csv
import json
import os
import re
import sys
import unicodedata
from datetime import date
from pathlib import Path

CONFIG = Path.home() / ".framegen.json"
ROOT_NAME = "FrameGen Content"

STAGES = [
    ("00_brief",        "DNA sheet, hooks, prompts. Read before touching anything else."),
    ("01_product-refs", "Source photos from the brand. Never edit in place."),
    ("02_generated",    "Raw Higgsfield output. Yana fills this."),
    ("03_edited",       "Editor's exports. Version with _v2, _v3 — never overwrite."),
    ("04_approved",     "Signed off. Copy to 02_READY-TO-POST when captioned."),
]

TOP = [
    ("00_BRAND",          "Never changes. Logo, fonts, LUT, music beds, avatar refs."),
    ("01_THEMES",         "One folder per theme block. Use: framegen.py new \"<name>\""),
    ("02_READY-TO-POST",  "SACRED. Everything in here is finished, approved and captioned."),
    ("03_ARCHIVE",        "Posted spots, foldered by month (YYYY-MM)."),
]

BRAND_SUB = ["logo", "fonts", "luts", "music", "avatar-refs", "caption-templates"]

VALID_NAME = re.compile(r"^T\d{2,3}_\d{2}_[a-z0-9-]+_(9x16|1x1|4x5|16x9)(_v\d+)?\.[a-z0-9]+$")

MEDIA_EXT = {".mp4", ".mov", ".m4v", ".webm", ".png", ".jpg", ".jpeg", ".heic", ".gif"}

C = {
    "r": "\033[0m", "b": "\033[1m", "dim": "\033[2m",
    "red": "\033[31m", "grn": "\033[32m", "yel": "\033[33m",
}
if not sys.stdout.isatty() or os.environ.get("NO_COLOR"):
    C = {k: "" for k in C}


# ---------------------------------------------------------------- helpers
def slugify(text):
    text = unicodedata.normalize("NFKD", text)
    text = text.encode("ascii", "ignore").decode("ascii")
    text = re.sub(r"[^a-zA-Z0-9]+", "-", text).strip("-").lower()
    return re.sub(r"-{2,}", "-", text)


def load_cfg():
    if CONFIG.exists():
        try:
            return json.loads(CONFIG.read_text())
        except json.JSONDecodeError:
            return {}
    return {}


def save_cfg(cfg):
    CONFIG.write_text(json.dumps(cfg, indent=2))


def resolve_root(args, must_exist=True):
    if getattr(args, "root", None):
        root = Path(os.path.expanduser(args.root)).resolve()
    else:
        cfg = load_cfg()
        if not cfg.get("root"):
            sys.exit(f"{C['red']}No root set.{C['r']} Run:  framegen.py init \"<path to your FrameGen Content folder>\"")
        root = Path(cfg["root"])
    if must_exist and not root.exists():
        sys.exit(f"{C['red']}Root not found:{C['r']} {root}\nRun init again with the right path.")
    return root


def write_if_absent(path, text):
    if path.exists():
        return False
    path.write_text(text, encoding="utf-8")
    return True


def readme(title, body):
    return f"{title}\n{'=' * len(title)}\n\n{body}\n\nManaged by framegen.py — don't rename this folder.\n"


def themes_dir(root):
    return root / "01_THEMES"


def existing_themes(root):
    d = themes_dir(root)
    if not d.exists():
        return []
    out = []
    for p in sorted(d.iterdir()):
        if p.is_dir() and re.match(r"^T\d{2,3}_", p.name):
            out.append(p)
    return out


def next_code(root):
    nums = []
    for p in existing_themes(root):
        m = re.match(r"^T(\d{2,3})_", p.name)
        if m:
            nums.append(int(m.group(1)))
    return f"T{(max(nums) + 1) if nums else 1:02d}"


def count_media(path):
    if not path.exists():
        return 0
    return sum(1 for p in path.rglob("*")
               if p.is_file() and p.suffix.lower() in MEDIA_EXT and not p.name.startswith("."))


# ---------------------------------------------------------------- init
def cmd_init(args):
    raw = args.path or str(Path.home() / ROOT_NAME)
    root = Path(os.path.expanduser(raw)).resolve()
    if root.name != ROOT_NAME and not (root / "01_THEMES").exists():
        # user pointed at the parent — create the container inside it
        if root.exists() and root.is_dir():
            root = root / ROOT_NAME

    made = []
    root.mkdir(parents=True, exist_ok=True)
    for name, desc in TOP:
        d = root / name
        d.mkdir(exist_ok=True)
        if write_if_absent(d / "README.txt", readme(name, desc)):
            made.append(name)
    for sub in BRAND_SUB:
        (root / "00_BRAND" / sub).mkdir(exist_ok=True)

    write_if_absent(root / "README.txt", readme(
        ROOT_NAME,
        "Pipeline:\n"
        "  01_THEMES/<block>/02_generated  raw output\n"
        "  01_THEMES/<block>/03_edited     editor works here\n"
        "  01_THEMES/<block>/04_approved   you signed off\n"
        "  02_READY-TO-POST                captioned and publishable — nothing else\n"
        "  03_ARCHIVE/YYYY-MM              after posting\n\n"
        "File names:  T07_03_my-editor-quit_9x16.mp4\n"
        "             theme_spot_slug_ratio(_version).ext\n\n"
        "New block:   python3 framegen.py new \"Product name\"\n"
        "Health:      python3 framegen.py status   /   framegen.py check"))

    cfg = load_cfg()
    cfg["root"] = str(root)
    save_cfg(cfg)

    print(f"{C['grn']}✓{C['r']} root ready  {C['b']}{root}{C['r']}")
    print(f"  {'created' if made else 'already present'}: " + ", ".join(n for n, _ in TOP))
    print(f"  remembered in {CONFIG}")
    print(f"\nNext:  python3 framegen.py new \"Sunglasses — summer drop\"")


# ---------------------------------------------------------------- new
BRIEF_TEMPLATE = """# {code} · {title}

Created {today} · {spots} spots planned

Nothing gets generated until every section below is filled in. That rule is the
whole point — it's what stops the editor waiting on you.

---

## 1 · The angle

One sentence on what this block argues. Not the product — the argument.

> …

Segment this speaks to: e-commerce / DTC founders / media buyers
Pain point it hits:

---

## 2 · Avatar DNA — locked

Paste this block verbatim into every single prompt in this theme. Do not
paraphrase it, do not shorten it. Verbatim is what keeps the face the same
person across all {spots} spots.

```
AVATAR DNA — {code}
Age / build:
Skin:            (tone, texture, freckles, pores — be specific, imperfection is the point)
Hair:            (exact colour, length, texture, how it falls)
Eyes:            (colour, shape, brows)
Face:            (jaw, nose, lips, any asymmetry)
Wardrobe:        (unbranded, simple, era-neutral)
Voice match:     ElevenLabs voice ID —
```

Reference images live in `01_product-refs/avatar/` — generate the angle set
first (front, 3/4 left, 3/4 right, profile) and lock the best one.

---

## 3 · Lighting rule for this block

Default for all UGC spots: **plain natural daylight, slightly cool, a little
boring.** Warm light is the single biggest reason AI footage reads as fake.
Push golden hour, amber, orange, tungsten, ring light, glow and plastic into the
negative list every time.

Editorial product shots are the exception — see the showcase prompts below.

---

## 4 · Product prompts

`01_product-refs/` holds the source photos. Prompts go here.

---

## 5 · The {spots} spots

See `spots.csv` in this folder. Its columns are columns A–L of the Spots tab,
in order, so you can paste the whole block into A5 (or the first empty row) in
one go. It stops at column L on purpose — M, N and O fill themselves and
pasting over them would wipe the formulas.

---

## 6 · Notes

"""

# Matches columns A–L of the Spots tab exactly — the block you fill in.
# The auto columns (M–O) are deliberately not here; pasting over them would
# wipe their formulas.
SPOT_HEADERS = ["Theme", "Spot #", "Hook ID", "Slug", "Format", "Status",
                "Prompt", "Editor notes", "Drive file", "Publish date",
                "Views", "Saves"]

FORMAT_CYCLE = ["Product review", "Unboxing", "ASMR", "Street interview", "UGC entertainment"]


def cmd_new(args):
    root = resolve_root(args)
    code = args.code or next_code(root)
    if not re.match(r"^T\d{2,3}$", code):
        sys.exit(f"{C['red']}Theme code must look like T07.{C['r']}")
    slug = slugify(args.title)
    if not slug:
        sys.exit(f"{C['red']}Give the block a name.{C['r']}")

    block = themes_dir(root) / f"{code}_{slug}"
    if block.exists():
        print(f"{C['yel']}!{C['r']} {block.name} already exists — filling in anything missing.")
    block.mkdir(parents=True, exist_ok=True)

    for name, desc in STAGES:
        d = block / name
        d.mkdir(exist_ok=True)
        write_if_absent(d / "README.txt", readme(name, desc))
    (block / "01_product-refs" / "avatar").mkdir(exist_ok=True)

    brief = block / "00_brief" / "brief.md"
    fresh = write_if_absent(brief, BRIEF_TEMPLATE.format(
        code=code, title=args.title, today=date.today().isoformat(), spots=args.spots))

    csv_path = block / "00_brief" / "spots.csv"
    if not csv_path.exists():
        with csv_path.open("w", newline="", encoding="utf-8") as f:
            w = csv.writer(f)
            w.writerow(SPOT_HEADERS)
            for i in range(1, args.spots + 1):
                w.writerow([code, i, "", "",
                            FORMAT_CYCLE[(i - 1) % len(FORMAT_CYCLE)],
                            "Idea", "", "", "", "", "", ""])

    print(f"{C['grn']}✓{C['r']} {C['b']}{code}{C['r']}  {block}")
    for name, _ in STAGES:
        print(f"    {name}/")
    print(f"\n  brief:  {C['dim']}{brief}{C['r']}  {'(new)' if fresh else '(kept)'}")
    print(f"  csv:    {C['dim']}{csv_path}{C['r']}  → paste into the Spots tab")
    print(f"\n  Fill in the brief before anything gets generated.")


# ---------------------------------------------------------------- status
def cmd_status(args):
    root = resolve_root(args)
    buffer_n = count_media(root / "02_READY-TO-POST")
    blocks = existing_themes(root)

    print(f"\n{C['b']}{root.name}{C['r']}  {C['dim']}{root.parent}{C['r']}\n")

    flag = C["red"] if buffer_n < 6 else (C["yel"] if buffer_n < 8 else C["grn"])
    label = "LOW — brief a block" if buffer_n < 6 else ("thin" if buffer_n < 8 else "healthy")
    print(f"  {C['b']}Ready to post{C['r']}   {flag}{C['b']}{buffer_n}{C['r']}   {flag}{label}{C['r']}")
    print(f"  {C['dim']}target 8, alarm under 6{C['r']}\n")

    if not blocks:
        print(f"  {C['dim']}No theme blocks yet — framegen.py new \"<name>\"{C['r']}\n")
        return

    w = max(len(b.name) for b in blocks)
    hdr = f"  {'BLOCK'.ljust(w)}   gen  edit  appr"
    print(f"{C['dim']}{hdr}{C['r']}")
    for b in blocks:
        g = count_media(b / "02_generated")
        e = count_media(b / "03_edited")
        a = count_media(b / "04_approved")
        bar = C["dim"] if (g + e + a) == 0 else ""
        print(f"  {bar}{b.name.ljust(w)}{C['r']}  {g:>4} {e:>5} {a:>5}")
    print()


# ---------------------------------------------------------------- check
def cmd_check(args):
    root = resolve_root(args)
    problems = []

    ready = root / "02_READY-TO-POST"
    approved_names = set()
    for b in existing_themes(root):
        for p in (b / "04_approved").glob("*"):
            if p.is_file() and p.suffix.lower() in MEDIA_EXT:
                approved_names.add(p.name)

    ready_names = {p.name for p in ready.glob("*")
                   if p.is_file() and p.suffix.lower() in MEDIA_EXT} if ready.exists() else set()

    for n in sorted(approved_names - ready_names):
        problems.append(("waiting", f"approved but not in 02_READY-TO-POST: {n}"))

    for p in sorted(root.rglob("*")):
        if not p.is_file() or p.suffix.lower() not in MEDIA_EXT or p.name.startswith("."):
            continue
        if "00_BRAND" in p.parts or "01_product-refs" in p.parts:
            continue
        if not VALID_NAME.match(p.name):
            problems.append(("naming", f"{p.relative_to(root)}"))

    for b in existing_themes(root):
        brief = b / "00_brief" / "brief.md"
        if brief.exists() and "…" in brief.read_text(encoding="utf-8", errors="ignore"):
            problems.append(("brief", f"{b.name} — brief still has placeholders"))
        total = count_media(b / "03_edited") + count_media(b / "04_approved")
        if 0 < total < 10:
            problems.append(("thin", f"{b.name} — only {total} spots edited or approved (target 12)"))

    if not problems:
        print(f"\n  {C['grn']}✓ clean{C['r']}  nothing misplaced, nothing misnamed\n")
        return

    print()
    for kind in ["naming", "waiting", "brief", "thin"]:
        rows = [m for k, m in problems if k == kind]
        if not rows:
            continue
        title = {"naming": "Names that don't match T07_03_slug_9x16.mp4",
                 "waiting": "Approved, not yet in the buffer",
                 "brief": "Briefs not finished",
                 "thin": "Blocks under 10 spots"}[kind]
        print(f"  {C['yel']}{title}{C['r']}")
        for m in rows[:25]:
            print(f"    {m}")
        if len(rows) > 25:
            print(f"    {C['dim']}…and {len(rows) - 25} more{C['r']}")
        print()


# ---------------------------------------------------------------- cli
def main():
    ap = argparse.ArgumentParser(
        prog="framegen.py",
        description="Folder scaffolding and health checks for the FrameGen content pipeline.")
    sub = ap.add_subparsers(dest="cmd", required=True)

    p = sub.add_parser("init", help="create the FrameGen Content tree and remember where it is")
    p.add_argument("path", nargs="?", help="where to create it (defaults to ~/FrameGen Content)")
    p.set_defaults(func=cmd_init)

    p = sub.add_parser("new", help="scaffold a new theme block")
    p.add_argument("title", help='e.g. "Sunglasses — summer drop"')
    p.add_argument("--code", help="force a theme code like T07 (default: next free)")
    p.add_argument("--spots", type=int, default=12, help="spots planned (default 12)")
    p.add_argument("--root")
    p.set_defaults(func=cmd_new)

    p = sub.add_parser("status", help="buffer count and per-block progress")
    p.add_argument("--root")
    p.set_defaults(func=cmd_status)

    p = sub.add_parser("check", help="find misnamed files and stalled blocks")
    p.add_argument("--root")
    p.set_defaults(func=cmd_check)

    args = ap.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
