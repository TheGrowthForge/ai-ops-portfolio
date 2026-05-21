---
name: workspace-audit
description: Audit the public portfolio repo for drift before publishing or continuing work. Use when the user asks to audit, scan, sanity-check, check what is stale, review portfolio quality, verify before deploy, inspect privacy risk, or ask whether anything is broken or out of place.
---

# Workspace Audit

Run a read-only audit of the portfolio. Report findings and wait for the user to choose fixes. Do not edit, delete, push, or deploy during the audit.

## Deterministic Checks

Run these first:

```bash
npm run build
git status --short
git diff --stat

# Referenced public assets must exist.
rg -o '"/(proof|case-studies)/[^"]+"' src index.html \
  | sed 's/.*"\\(.*\\)"/public\\1/' \
  | sort -u \
  | while read -r f; do [ -f "$f" ] || echo "MISSING ASSET: $f"; done

# Proof assets that are not referenced by source files.
find public/proof -maxdepth 1 -type f | sort > /tmp/portfolio-proof-files.txt
rg -o '"/proof/[^"]+"' src index.html \
  | sed 's/.*"\\/proof\\/\\([^"]*\\)"/public\\/proof\\/\\1/' \
  | sort -u > /tmp/portfolio-proof-used.txt
comm -23 /tmp/portfolio-proof-files.txt /tmp/portfolio-proof-used.txt

# Text privacy scan.
rg -n --hidden --glob '!node_modules/**' --glob '!dist/**' \
  'localhost|127\\.0\\.0\\.1|/Users/luke|\\.env|OPENAI_API|SUPABASE|salary|rejected|applied|interview|phone|linkedin\\.com/in/[^"]*private|@gmail\\.com|relationship|breakup' .

# Code hygiene.
git grep -nE '\\bconsole\\.log\\b|\\bTODO\\b|\\bFIXME\\b|@ts-ignore|\\bdebugger\\b|\\.only\\(' -- src public index.html netlify.toml 2>/dev/null
```

Interpret false positives. For example, public contact links may intentionally include email/LinkedIn, and `localhost` may appear in generated docs only if not public-bound.

## Judgment Checks

Read enough context to answer:

- Does the first viewport show real project evidence quickly?
- Does every project explain what it is, what it solves, and what was built?
- Are any screenshots too tiny, repetitive, misleading, or obviously private?
- Are project names accurate?
- Is the UK School AI Policy business framed as pre-revenue/no invented traction?
- Is the Operating Method section about workspace architecture rather than generic AI enthusiasm?
- Are the public links correct: GitHub, LinkedIn, email, case study, live School AI Policy site?
- Is `AGENTS.md` still accurate for current repo behaviour?
- Is `context/handover.md` stale or contradicted by the working tree?
- Did another agent leave untracked files, generated assets, or deleted screenshots that need review?

## Output Format

```md
## Workspace Audit

**Summary:** ...

### Deterministic findings
- **Build:** pass/fail with first error if failing.
- **Working tree:** modified/deleted/untracked summary.
- **Assets:** missing referenced assets and unused proof assets.
- **Privacy scan:** true findings or false positives.
- **Code hygiene:** true findings or false positives.

### Portfolio quality
- Findings about visual proof, project clarity, copy, screenshot quality, mobile risk, or interaction issues.

### Agent/workspace drift
- AGENTS.md/handover/other-agent drift.

### Proposed actions
1. ...
```

Stop after the report. Wait for the user to choose what to fix.
