export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  purpose: string;
  accent: string;
  stack: string[];
  story: {
    why: string;
    built: string;
    proves: string;
  };
  buildDetails: string[];
  proofPoints: string[];
  images: ProjectImage[];
  galleryFocus: string;
  walkthroughNotes?: string[];
  privacyNote?: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
  workspaceMap?: string[];
  workflow?: string[];
};

export const featuredProject: Project = {
  slug: "school-policy",
  title: "UK School AI Policy — Operating System",
  eyebrow: "Flagship build",
  purpose:
    "A public marketing site wired to five private operating surfaces — dashboard, business overview, call console, architecture map, and a source-review workflow — for a regulated advisory business.",
  accent: "#ad3f17",
  stack: ["Static HTML", "Netlify", "Formspree", "Attio", "Apollo", "AI agents", "Markdown"],
  story: {
    why:
      "AI guidance for UK schools is scattered across several regulators and changes often. I built an operating system that turns that ambiguity into repeatable work: sources, claims, decisions, outreach, and delivery all visible in one place.",
    built:
      "A public-facing site for the offer, plus private surfaces for workstream state, source discipline, call preparation, business overview, and agent-assisted drafting.",
    proves:
      "It shows I can take a regulated, ambiguous domain and stand up the whole operating system — public site, internal surfaces, source discipline, human review — not just a single document.",
  },
  buildDetails: [
    "Public marketing site for the offer and lead capture.",
    "Dashboard and business overview for live workstream state.",
    "Call console and source-review workflow for day-to-day execution.",
  ],
  proofPoints: [
    "One public marketing site plus five private operating surfaces, all live.",
    "Every regulatory claim tracked in a source register and a claims register.",
    "AI agents draft and structure; claims and policy language clear human review before release.",
  ],
  galleryFocus: "Public website, dashboard, business overview, call console, and industry map.",
  walkthroughNotes: [
    "Start with the public site to see the offer.",
    "Move into the dashboard and call console to see how the work is executed.",
    "Use the source-review and map surfaces to see how claims move toward human sign-off.",
  ],
  privacyNote: "No private school or prospect data is shown. Screenshots are selected operating surfaces only; some content is redacted.",
  links: [
    {
      label: "Open live website",
      href: "https://www.schoolaipolicy.co.uk",
    },
  ],
  images: [
    {
      src: "/proof/school-policy-site.png",
      alt: "Public School AI Policy marketing website homepage",
      caption: "Live public website",
    },
    {
      src: "/proof/school-policy-business-overview-actual.png",
      alt: "Business overview operating surface",
      caption: "Business overview",
    },
    {
      src: "/proof/school-policy-industry-map-actual.png",
      alt: "Industry and regulator map operating surface",
      caption: "Industry map",
    },
    {
      src: "/proof/school-policy-dashboard-public.png",
      alt: "Private operating dashboard surface",
      caption: "Operating dashboard",
    },
    {
      src: "/proof/school-policy-call-console-public.png",
      alt: "Call console operating surface",
      caption: "Call console",
    },
  ],
  workflow: [
    "context files",
    "agent rules",
    "source register",
    "AI-assisted drafting",
    "human review",
    "public / delivery output",
  ],
};

export const projects: Project[] = [
  {
    slug: "job-search-control-room",
    title: "Job Search Control Room",
    eyebrow: "Workflow console",
    purpose:
      "A local React/Vite console that turns a multi-lane job search into one daily action queue — role priorities, CV variants, outreach prompts, and application notes in a single surface.",
    accent: "#75702c",
    stack: ["React", "Vite", "TypeScript", "CSS", "CSV parsing", "Markdown"],
    story: {
      why:
        "A serious job search scatters context across tabs, notes, spreadsheets, and one-off AI chats. The console turns that sprawl into one visible operating rhythm.",
      built:
        "A local React/Vite control room for daily actions, application queues, CV lanes, research prompts, and outreach — backed directly by source CSV and Markdown files.",
      proves:
        "It shows I build a tool around a real workflow in days, then actually run on it.",
    },
    buildDetails: [
      "Reads source CSV and Markdown files directly as display surfaces.",
      "Daily action queue and role-priority lanes.",
      "CV-variant guidance and outreach prompts in one console.",
    ],
    proofPoints: [
      "A working local app, not a static mockup.",
      "No separate database — it reads the source files directly, so it can't drift.",
      "Built fast, then used every day to run the search.",
    ],
    galleryFocus: "Today view, priority lane, CV lanes, action queue, and follow-up prompts.",
    walkthroughNotes: [
      "The Today view turns the whole search into a short action list.",
      "The screenshots show how application work stays visible instead of scattered.",
    ],
    privacyNote: "Real applications, contacts, and private CV content are excluded.",
    images: [
      {
        src: "/proof/job-search-control-room-public.png",
        alt: "Job Search Control Room Today dashboard",
        caption: "Today view",
      },
      {
        src: "/proof/job-search-control-room-priority-public.png",
        alt: "Job Search Control Room priority lane dashboard",
        caption: "Priority lane",
      },
    ],
    workflow: ["research", "triage", "tailor", "apply", "track", "follow up"],
  },
  {
    slug: "events-console",
    title: "Events / Research Console",
    eyebrow: "Research surface",
    purpose:
      "A single-file local console that ranks events and research leads with filters, score rings, map context, public source links, and clear action cues.",
    accent: "#b06a1e",
    stack: ["HTML", "CSS", "JavaScript", "Leaflet", "Public event sources"],
    story: {
      why:
        "Event and lead research gets wasted when useful opportunities sit in a pile of tabs. This console turns public-source research into a ranked queue that can be compared and acted on.",
      built:
        "A local map-and-card interface with filters, scoring, location context, source links, and visible action cues — all in one portable file.",
      proves:
        "It shows I turn raw research into a ranked decision queue, not another pile of notes.",
    },
    buildDetails: [
      "Map-led browser interface built with Leaflet.",
      "Ranked cards with filters and public source links.",
      "Single-file local app for fast iteration and portability.",
    ],
    proofPoints: [
      "Strong visual surface: map, ranked cards, and filters together.",
      "Turns public-source research into a triaged shortlist.",
      "Lightweight tooling sized to messy discovery work.",
    ],
    galleryFocus: "Map view, ranked event cards, filters, and source/action cues.",
    walkthroughNotes: [
      "Open the screenshot first — it is the most visual surface in the set.",
      "It shows filtering and score-based triage in one view.",
    ],
    privacyNote: "Only public-style event examples are represented here.",
    images: [
      {
        src: "/proof/events-console-actual.png",
        alt: "Events and research console with ranked cards and map",
        caption: "Actual local console",
      },
    ],
    workflow: ["public sources", "score", "filter", "map", "shortlist", "act"],
  },
  {
    slug: "date-app",
    title: "Date App Prototype",
    eyebrow: "Product prototype",
    purpose:
      "A private Next.js/Supabase product prototype with shared planning, deck flows, ideas, memories, notes, and motion-led interaction surfaces — a deliberately different style from the ops consoles.",
    accent: "#a14b54",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind", "Motion", "Netlify"],
    story: {
      why:
        "Shared plans, memories, notes, and date ideas usually live across chats, lists, and photo rolls. The prototype explores what a more intentional shared product surface could feel like.",
      built:
        "A private Next.js/Supabase app with shared planning routes, idea and deck flows, memories, notes, profile settings, storage, and motion-led UI.",
      proves:
        "It shows range: routed product surfaces and database-backed features, not only internal tools.",
    },
    buildDetails: [
      "Next.js App Router structure with multiple product routes.",
      "Supabase-backed schema for ideas, memories, ratings, bucket items, and photos.",
      "Motion-heavy product UI, with private content removed from portfolio captures.",
    ],
    proofPoints: [
      "Real full-stack structure: routes, components, hooks, and deployment config.",
      "A different visual register from the ops consoles.",
      "Private app, walkable without exposing personal data.",
    ],
    galleryFocus: "Home and tonight-picker product surfaces, plus route/component architecture.",
    walkthroughNotes: [
      "The screenshots show the real product direction and interaction loop.",
    ],
    privacyNote: "Screenshots are sanitized. Personal names, media, notes, and database values are not included.",
    images: [
      {
        src: "/proof/date-app-home-actual.png",
        alt: "Sanitized Date App home screen",
        caption: "Home surface",
      },
      {
        src: "/proof/date-app-tonight-actual.png",
        alt: "Sanitized Date App tonight picker screen",
        caption: "Tonight picker",
      },
    ],
    workflow: ["identity", "home", "tonight picker", "shared deck", "memories", "storage"],
  },
];

export type OperatingPillar = { title: string; body: string };

export const operatingPillars: OperatingPillar[] = [
  {
    title: "A written constitution",
    body:
      "A root operating file sets the principles, an authority model, and a strict source-of-truth order. When two files disagree, resolution is deterministic — not a guess.",
  },
  {
    title: "Guardrails, not good intentions",
    body:
      "Pre-action hooks block whole classes of mistake before they happen: committing secrets, destructive database or file operations, edits to protected files, and language that breaks domain rules.",
  },
  {
    title: "Layered, single-source state",
    body:
      "Context is organised into layers with one rule each. Underneath them all: the agent can find exactly one answer per question, so it never acts on a stale copy.",
  },
  {
    title: "Derived, not authored",
    body:
      "Facts live once in canonical files. Every dashboard and console is rendered from them, so the tooling can't quietly drift away from the truth.",
  },
  {
    title: "Built for the long run",
    body:
      "An append-only decision log, cross-session memory, and a handover file mean session two hundred starts with the same context as session two.",
  },
  {
    title: "Right tool for each job",
    body:
      "Deterministic checks run as scripts. Judgement work runs as custom commands the agent invokes — a workspace audit that catches drift, an end-of-session review that updates state. Each does what it's good at.",
  },
];

export const workspaceTree: Array<{ name: string; note: string }> = [
  { name: "CONSTITUTION.md", note: "operating rules · authority model · source-of-truth order" },
  { name: "context/", note: "canonical state — one fact, one home" },
  { name: "decisions/", note: "append-only log — every change carries its rationale" },
  { name: "queues/", note: "active · blocked · backlog — the single task home" },
  { name: "knowledge/", note: "durable references and repeatable procedures" },
  { name: "hooks/", note: "guardrails that run before and after every action" },
];

export const enforcementHooks: Array<{ event: string; rule: string }> = [
  { event: "PreToolUse", rule: "block edits to protected files" },
  { event: "PreToolUse", rule: "block secret leaks before they reach a commit" },
  { event: "PreToolUse", rule: "block destructive database / file operations" },
  { event: "PostToolUse", rule: "flag language that breaks domain rules" },
  { event: "Stop", rule: "require a state update when outputs changed" },
];

export const customSkills: Array<{ name: string; rule: string }> = [
  { name: "/workspace-audit", rule: "scan for broken references, naming drift, and decision conflicts" },
  { name: "/session-wrap", rule: "review the session, update canonical state, catch what drifted" },
];

export type SessionStep = {
  phase: string;
  line: string;
  detail: string;
  state: "read" | "work" | "block" | "gate" | "ship";
};

export const sessionSteps: SessionStep[] = [
  {
    phase: "context",
    line: "Agent loads the constitution and canonical state",
    detail: "operating rules · current state · open decisions · task queues",
    state: "read",
  },
  {
    phase: "propose",
    line: "Drafts a change to a policy document",
    detail: "edit prepared in memory — nothing written yet",
    state: "work",
  },
  {
    phase: "guard",
    line: "Attempts to stage every file, including .env",
    detail: "blocked — a pre-commit hook fires before the secret can leak",
    state: "block",
  },
  {
    phase: "adjust",
    line: "Agent re-routes and stages only the intended files",
    detail: "the secret never reaches version control",
    state: "work",
  },
  {
    phase: "review",
    line: "Change held at the human-review gate",
    detail: "claims and policy language need a person to sign off",
    state: "gate",
  },
  {
    phase: "ship",
    line: "Approved, shipped, state updated",
    detail: "decision log and memory written for the next session",
    state: "ship",
  },
];
