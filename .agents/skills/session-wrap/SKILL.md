---
name: session-wrap
description: End-of-session review for the portfolio repo. Use when the user says /session-wrap, wrap up, save progress, hand over, stop for now, prepare the next session, or asks what changed and what should happen next.
---

# Session Wrap

Capture the exact state of the portfolio so the next agent can continue without losing context. This skill updates only the handover note unless the user explicitly approves other edits.

## Workflow

1. Run `git status --short` and `git diff --stat`.
2. Read `AGENTS.md`, `context/handover.md`, and recent relevant diffs.
3. Identify whether `AGENTS.md` is stale. Propose edits only; do not apply them without user approval.
4. Write `context/handover.md` with the current state.
5. Report the handover path and the immediate next action.

## What To Capture

- Main project work completed this session.
- Files or areas changed.
- Whether `npm run build` was run and the result.
- Whether screenshots/assets still need privacy review.
- Whether anything was pushed or deployed.
- Any blockers, user decisions, or outside work such as Claude Code edits.

## AGENTS.md Drift Check

Only propose updates that future sessions need. Examples:

- New deploy rule or privacy constraint.
- New project section, screenshot policy, or visual direction.
- New command or build gotcha.
- New source-of-truth file.

Do not add ordinary component/file changes to `AGENTS.md`.

## Handover Format

Keep `context/handover.md` under 30 lines:

```md
# Session Handover

**Date:** YYYY-MM-DD

## What happened
- ...

## Where I stopped
...

## Waiting on
...

## Next session should start with
...
```

If no material work happened, write:

```md
# Session Handover

**Date:** YYYY-MM-DD

Short session, no material changes.
```
