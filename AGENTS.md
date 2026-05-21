# Portfolio Agent Rules

This repo is Luke Thomas's public AI/Ops portfolio. Treat it as a project in its own right: a polished, inspectable evidence lab for systems built with AI, context, and code.

## Operating Rules

- Keep the portfolio project-first. Show what each project is, what it solves, what was built, and the proof surface.
- Do not turn the site into a sales page or role-targeting page.
- Do not invent metrics, revenue, customers, users, traffic, employees, or commercial traction. The UK School AI Policy business is pre-revenue unless Luke says otherwise.
- Do not publish private source repos, raw job-search trackers, CV variants, application statuses, salary notes, private notes, env vars, local paths, or personal relationship context.
- Screenshots may show real project surfaces, but anything public-bound needs manual review for names, email addresses, phone numbers, school/prospect data, strategy notes, and private app content.
- Do not push to GitHub or deploy to Netlify without explicit approval in the current conversation.
- If another agent has edited files, inspect the working tree before changing anything. Work with existing edits; do not revert them.

## Commands

- Install: `npm install`
- Local dev: `npm run dev`
- Build: `npm run build`
- Preview built output: `npm run preview`

## Visual Direction

- Current direction: editorial + console hybrid.
- The portfolio should feel like a premium project lab, not a template.
- Lead with real screenshots and project receipts.
- Keep the Operating Method section focused on governed AI workspaces: context files, agent rules, source discipline, review loops, and persistent project memory.

## Local Skills

Project-local skills live in `.agents/skills`.

- Use `.agents/skills/workspace-audit/SKILL.md` when Luke asks to audit, scan, sanity-check, check drift, review what is stale, or verify the portfolio before publishing.
- Use `.agents/skills/session-wrap/SKILL.md` when Luke says `/session-wrap`, asks to wrap up, save progress, hand over, or prepare the next session.

These skills are adapted for the portfolio repo. Do not copy Date App or UK School AI Policy assumptions into this project unless the files here prove they apply.
Session handover notes live in local `context/` files and are intentionally not public portfolio artifacts.
