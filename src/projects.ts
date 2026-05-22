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
    "A public site plus private operating surfaces: dashboard, business overview, call console, architecture map, and source-review workflow.",
  accent: "#0ea5e9",
  stack: ["Static HTML", "Netlify", "Formspree", "Attio", "Apollo", "AI agents", "Markdown"],
  story: {
    why:
      "UK school AI guidance is scattered across regulators. The system turns that ambiguity into visible sources, claims, decisions, outreach, and delivery.",
    built:
      "A public-facing site plus private surfaces for workstream state, source discipline, call preparation, business overview, and agent-assisted drafting.",
    proves:
      "A regulated domain turned into a working operating system: public site, internal surfaces, source discipline, and human review.",
  },
  buildDetails: [
    "Public marketing site for the offer and lead capture.",
    "Dashboard and business overview for live workstream state.",
    "Call console and source-review workflow for day-to-day execution.",
  ],
  proofPoints: [
    "One public site plus five private operating surfaces.",
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
    {
      src: "/proof/school-policy-architecture-public.png",
      alt: "School policy workspace architecture map",
      caption: "Architecture map",
    },
    {
      src: "/proof/school-policy-call-ritual-actual.png",
      alt: "Call ritual prompt surface",
      caption: "Call ritual",
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
    slug: "date-app",
    title: "Date App Prototype",
    eyebrow: "Product prototype",
  purpose:
      "A private Next.js/Supabase product prototype for shared planning, ideas, memories, notes, and motion-led interaction surfaces.",
    accent: "#e11d48",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind", "Motion", "Netlify"],
    story: {
      why:
        "Shared plans, memories, notes, and date ideas usually live across chats, lists, and photo rolls.",
      built:
        "A private Next.js/Supabase app with planning routes, idea and deck flows, memories, notes, profile settings, storage, and motion-led UI.",
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
    galleryFocus: "Home, tonight, together, deck, and shared planning surfaces.",
    walkthroughNotes: [
      "Start with the home and tonight surfaces to see the product direction.",
      "Move into Together and Deck to see the routed interaction model.",
    ],
    privacyNote: "Screenshots are selected product surfaces. Private notes, media, credentials, and database values are not included.",
    images: [
      {
        src: "/proof/date-app-home-experience.png",
        alt: "Date App home product surface",
        caption: "Home surface",
      },
      {
        src: "/proof/date-app-tonight-experience.png",
        alt: "Date App tonight picker product surface",
        caption: "Tonight picker",
      },
      {
        src: "/proof/date-app-together-experience.png",
        alt: "Date App together planning surface",
        caption: "Together surface",
      },
      {
        src: "/proof/date-app-deck-experience.png",
        alt: "Date App deck interaction surface",
        caption: "Deck surface",
      },
    ],
    workflow: ["identity", "home", "tonight picker", "shared deck", "memories", "storage"],
  },
  {
    slug: "command-centre",
    title: "Personal Command Centre",
    eyebrow: "Operating system",
    purpose:
      "A hosted personal operating layer for goals, notes, reference material, routines, review, and action.",
    accent: "#22c55e",
    stack: ["Next.js", "Supabase", "React", "TypeScript", "Tailwind", "Hosted beta"],
    story: {
      why:
        "Productivity systems break when context, decisions, review queues, and action surfaces live in different places.",
      built:
        "A hosted command centre with personal/business shells, goal stacks, notes, reference surfaces, routines, and review queues.",
      proves:
        "It shows I treat my own life and work like a designed operating system: persistent context, routed surfaces, and clean action loops.",
    },
    buildDetails: [
      "Hosted daily layer that pulls goals, review, action, notes, and reference into one interface.",
      "Separate personal and business command contexts without mixing the underlying operating surfaces.",
      "Built as a live tool rather than a portfolio mockup.",
    ],
    proofPoints: [
      "Real hosted interface with desktop and mobile surfaces.",
      "Shows the same system-building instinct applied to personal operations.",
      "Connects goals, notes, reference material, and review queues into one action layer.",
    ],
    galleryFocus: "Hosted command shell, personal dashboard, routine module, and mobile view.",
    walkthroughNotes: [
      "Start with the command shell to see the high-level operating layer.",
      "Move into the personal surface to see how review, notes, goals, and reference come together.",
    ],
    privacyNote: "Screenshots show the interface shape. Sensitive personal details and raw decision logs are not included.",
    images: [
      {
        src: "/proof/command-centre-live.png",
        alt: "Command Centre landing surface",
        caption: "Command shell",
      },
      {
        src: "/proof/command-centre-personal.png",
        alt: "Personal Command Centre review surface",
        caption: "Personal surface",
      },
    ],
    workflow: ["orient", "review", "prioritise", "route context", "act", "capture"],
  },
  {
    slug: "opportunity-pipeline-console",
    title: "Opportunity Pipeline Console",
    eyebrow: "Workflow console",
    purpose:
      "A private React/Vite console pattern for multi-source pipeline work: actions, priority lanes, research prompts, and follow-up loops.",
    accent: "#f59e0b",
    stack: ["React", "Vite", "TypeScript", "CSS", "CSV parsing", "Markdown"],
    story: {
      why:
        "High-context pipeline work scatters across tabs, notes, spreadsheets, and AI chats.",
      built:
        "A local React/Vite console for daily actions, queue state, research notes, prompts, and follow-up cadence backed by CSV and Markdown.",
      proves:
        "A reusable console pattern with source files close to the interface.",
    },
    buildDetails: [
      "Reads source CSV and Markdown files directly as display surfaces.",
      "Daily action queue, priority lanes, and follow-up prompts in one local interface.",
      "Kept private because the underlying data is live and personal to the workflow.",
    ],
    proofPoints: [
      "A working local app, not a static mockup.",
      "No separate database — it reads source files directly, so the interface can't quietly drift.",
      "Reusable console pattern for research, operations, and delivery pipelines.",
    ],
    galleryFocus: "Private console pattern; public portfolio shows the architecture rather than the live data surface.",
    walkthroughNotes: [
      "The underlying data is intentionally not shown publicly.",
      "The reusable pattern is the important part: source files, priority queue, follow-up loop, and daily operating surface.",
    ],
    privacyNote: "The live console screenshots are not published because they expose current pipeline structure and private action data.",
    images: [],
    workspaceMap: [
      "source CSV",
      "Markdown notes",
      "priority lanes",
      "daily queue",
      "research prompts",
      "follow-up loop",
    ],
    workflow: ["source files", "triage", "prioritise", "action queue", "follow up", "review"],
  },
  {
    slug: "events-console",
    title: "Events / Research Console",
    eyebrow: "Research surface",
    purpose:
      "A single-file local console for ranked research, filters, map context, source links, and action cues.",
    accent: "#06b6d4",
    stack: ["HTML", "CSS", "JavaScript", "Leaflet", "Public event sources"],
    story: {
      why:
        "Event and research work gets wasted when useful opportunities sit in a pile of tabs.",
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
