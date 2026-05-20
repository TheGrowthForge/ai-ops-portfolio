# Evidence Lab Portfolio Redesign

Date: 2026-05-20

## Goal

Redesign the portfolio so the first impression is: "this person is a talented AI-native builder who ships real systems."

The portfolio should feel like an explorable project lab, not a sales page, job-targeting page, or static CV. It should lead with real project evidence, show taste and product judgement, and make the interactive demos feel like supporting proof rather than novelty.

## Design Direction

Use the approved **Evidence Lab** direction:

- Real project surfaces first.
- Interactive demos second.
- Short project stories and walkthrough drawers for depth.
- No role-fit strip, no salesy positioning blocks, no `Private / Active` badges.
- Keep the page single-page for now.
- Keep source repositories private.
- Keep publishing local-only until explicit approval to push or deploy.

## Desired First Impression

Within 10 seconds, a hiring manager should understand:

- Luke builds real workflow systems, not toy demos.
- The systems are AI-native: context files, agent rules, review loops, source discipline, and operating surfaces.
- The work has visual and product craft.
- The projects are private where appropriate, but enough evidence is shown to inspect capability.

The tone should be confident but not hypey. The copy should sound like a builder explaining evidence, not a candidate trying to map each project to a target company.

## Page Structure

### 1. Hero / Evidence Board

The hero should become more visual and less declarative.

Content:

- Short identity line: `Luke Thomas / AI-native systems builder`
- Strong headline focused on proof, for example: `Systems I built with AI, context, and code.`
- One short paragraph explaining that this is a portfolio of project surfaces and walkthroughs.
- Visible links in the top nav and hero: GitHub, LinkedIn, Email, CV/case study.
- A compact evidence board using the best project screenshots.

Visual requirements:

- The flagship screenshot should have the largest visual weight.
- Supporting screenshots should feel curated, not dumped.
- Avoid large empty text blocks.
- Avoid marketing-style hero language.

### 2. Featured System: UK School AI Policy Operating System

This remains the flagship proof piece.

Content:

- A concise project story:
  - Why it was built.
  - What was built.
  - What it proves.
- A large screenshot carousel or gallery using approved screenshots:
  - Public website.
  - Private dashboard.
  - Call console.
  - Business overview or architecture.
- Architecture strip:
  - `context files -> agent rules -> source register -> AI-assisted work -> human review -> public/delivery output`
- Mini fake-data workflow demo:
  - Source item enters review.
  - AI-assisted summary/check.
  - Human review state.
  - Output/action.

Visual requirements:

- Project 1 should be clearly more important than every other project.
- The screenshots must be large enough to inspect.
- Architecture should support the screenshots, not replace them.

### 3. Supporting Project Grid

Projects:

- Job Search Control Room
- Command Centre: Agent Workspace Architecture
- Events / Research Console
- Date App Prototype

Each project card should include:

- Accurate project name.
- One-line purpose.
- One strong screenshot or designed artifact.
- Three concise build/proof points.
- Stack line.
- `Open walkthrough` action.

Rules:

- No file-list visuals as the primary proof.
- No `Private / Active` badges.
- No role/company fit language.
- Each card should have enough visual evidence to feel real before opening the drawer.

### 4. Project Walkthrough Drawer

Each drawer should feel like opening a project folder.

Drawer content:

- Project title and purpose.
- Larger image gallery.
- Story blocks:
  - Why I built it.
  - What I built.
  - What it proves.
- Build details.
- Proof points.
- Workflow/architecture strip.
- Optional playable mini demo when available.
- Short privacy note only where it prevents confusion.

Interaction:

- Drawer opens from project cards and featured project.
- Drawer closes cleanly.
- Drawer itself scrolls on mobile and desktop.
- Base page scroll must remain normal when drawer is closed.

### 5. Interactive Lab

The interactive demo section should feel like "try the system pattern," not random widgets.

Requirements:

- Tabs should look like project modules.
- Demo surfaces should include fake counters, state changes, queues, and review outcomes.
- Each demo should tie back to a real project.
- Demo data must be fake/sanitized.

Demo modules:

- Policy workflow.
- Job/application workflow.
- Command/context workflow.
- Events/research workflow.
- Date app/product flow.

### 6. How I Work With AI

This section should explain Luke's actual AI working method.

Content themes:

- Context-rich workspaces.
- Agent-readable project memory.
- Rules before execution.
- Source discipline and human review.
- Persistent operating surfaces.
- Workspace architecture that keeps AI aligned with the project.

Avoid:

- Generic claims about AI.
- "AI transformation" language.
- Company-targeting language.

## Visual System

The page should feel more premium and less chunky.

Design rules:

- Smaller, sharper typography in lower sections.
- Fewer huge blocks of text.
- More image-led cards.
- Strong screenshot framing.
- Compact labels and annotation tags.
- Use accent color sparingly.
- Keep cards visually distinct without clutter.
- Preserve the light project-lab feel unless a specific section benefits from a dark console frame.

Avoid:

- Stock imagery.
- Decorative gradients/orbs.
- Sales-style feature grids.
- Too many badges.
- Tiny screenshots that cannot be inspected.

## Data / Asset Rules

Allowed:

- Approved screenshots in `public/proof/`.
- Recreated or fake-data demos.
- Sanitized architecture diagrams.
- Public website screenshots.
- Screenshots of local tools if reviewed before publish.

Not allowed:

- Secrets or environment values.
- Raw source code from private repos.
- Application tracker data.
- Real salary notes.
- Private personal context.
- Relationship/personal-life content.
- Local filesystem paths in public copy.
- Unreviewed private screenshots.

## Technical Design

Keep React/Vite/TypeScript.

Likely components:

- `HeroEvidenceBoard`
- `FeaturedSystem`
- `ProjectGalleryCard`
- `ProjectDetailDrawer`
- `ScreenshotStrip`
- `ProjectLightbox`
- `InteractiveLab`
- `WorkspaceArchitecture`

Project data should remain centralized in `src/projects.ts`.

Interactive demo behavior should remain centralized in `src/InteractiveLab.tsx`, with each project referencing a `demoId`.

No new routes in this pass. Use in-page drawers and anchors.

## Testing Requirements

Before handoff:

- Run `npm run build`.
- Browser QA at `http://127.0.0.1:5174/`.
- Verify:
  - first viewport communicates project evidence quickly.
  - top social links are visible.
  - base page scroll works.
  - project cards are image-led.
  - every drawer opens/closes.
  - screenshot lightbox works.
  - interactive demos update state.
  - mobile layout works around 390px.
- Privacy scan across `src`, `public`, and `dist`.

No GitHub push or Netlify deploy without explicit approval.

## Final Hero Decision

Use the stronger first viewport.

The hero should be rebuilt around one large flagship screenshot plus a compact proof grid. A conservative polish pass would not be enough to create the intended "talented builder" first impression.
