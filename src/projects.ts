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
  receipts: string[];
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
  title: "UK School AI Policy Operating System",
  eyebrow: "Flagship build",
  purpose:
    "A public school AI policy site connected to private operating surfaces for sources, workstreams, outreach, business state, and human-reviewed AI work.",
  accent: "#2563eb",
  stack: ["Static HTML", "Netlify", "Formspree", "Attio", "Apollo", "AI agents", "Markdown"],
  receipts: [
    "Live public website at schoolaipolicy.co.uk.",
    "Private dashboard, business overview, call console, architecture view, and source-review workflow.",
    "Workspace designed so AI agents recover business context, rules, and source boundaries before producing work.",
  ],
  story: {
    why:
      "I built this to turn the anxiety around AI use in UK schools into a concrete operating workflow: sources, claims, decisions, follow-up, and delivery all visible in one system.",
    built:
      "A public-facing site plus private operating views for workstreams, school outreach, call preparation, source discipline, business state, and agent-assisted drafting.",
    proves:
      "I can structure a regulated, ambiguous domain into a usable operating system with AI support and human review built into the process.",
  },
  buildDetails: [
    "Public website for the offer and lead capture.",
    "Dashboard and business overview for workstream state.",
    "Call console and source-review workflow for practical execution.",
  ],
  proofPoints: [
    "Real public website plus private console surfaces.",
    "Source and claim review treated as first-class workflow objects.",
    "AI agents guided by workspace context before producing output.",
  ],
  galleryFocus: "Public website, private dashboard, business overview, call console, and architecture view.",
  walkthroughNotes: [
    "Start with the public site to understand the offer.",
    "Move into dashboard/call-console screens to see how the work is executed.",
    "Use the source-review and architecture screenshots to show how claims move toward human sign-off.",
  ],
  privacyNote: "Private school/prospect data is not included. Screenshots are selected operating surfaces only.",
  links: [
    {
      label: "Open live website",
      href: "https://www.schoolaipolicy.co.uk",
    },
  ],
  images: [
    {
      src: "/proof/school-policy-site.png",
      alt: "Public School AI Policy website homepage",
      caption: "Live public website",
    },
    {
      src: "/proof/school-policy-dashboard-actual.png",
      alt: "UK School AI Policy private dashboard surface",
      caption: "Private dashboard",
    },
    {
      src: "/proof/school-policy-business-overview-actual.png",
      alt: "UK School AI Policy business overview surface",
      caption: "Business overview",
    },
    {
      src: "/proof/school-policy-call-console-actual.png",
      alt: "UK School AI Policy call console surface",
      caption: "Call console",
    },
    {
      src: "/proof/school-policy-architecture-actual.png",
      alt: "UK School AI Policy architecture view",
      caption: "Architecture view",
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
      "A local React/Vite console for daily actions, role queues, CV lanes, outreach prompts, portfolio assets, and application notes.",
    accent: "#0f766e",
    stack: ["React", "Vite", "TypeScript", "CSS", "CSV parsing", "Markdown"],
    receipts: [
      "Runs locally as a daily job-search operating surface.",
      "Uses source Markdown/CSV files without editing them from the UI.",
      "Turns scattered applications, links, and CV variants into one execution queue.",
    ],
    story: {
      why:
        "I needed a calmer way to run a serious job search without scattering context across tabs, notes, spreadsheets, and one-off AI chats.",
      built:
        "A local React/Vite control room for daily actions, application queues, CV lanes, research prompts, outreach, and portfolio assets.",
      proves:
        "I build tools around my own workflows quickly, then use them to make repeated execution easier and less chaotic.",
    },
    buildDetails: [
      "CSV and Markdown-backed read-only display surfaces.",
      "Daily action queue and role-priority views.",
      "CV/version guidance and outreach prompts in one console.",
    ],
    proofPoints: [
      "Local working app, not a static mockup.",
      "Workflow constraints prevent endless overbuilding.",
      "Useful example of product thinking applied to operations.",
    ],
    galleryFocus: "Today view, priority lane, CV lanes, action queue, and follow-up prompts.",
    walkthroughNotes: [
      "Show how the Today view turns the search into a short action list.",
      "Use the screenshots to show how the console keeps application work visible.",
    ],
    privacyNote: "Real applications, contacts, and private CV content are excluded.",
    images: [
      {
        src: "/proof/job-search-control-room-today.png",
        alt: "Job Search Control Room Today dashboard",
        caption: "Today dashboard",
      },
      {
        src: "/proof/job-search-control-room-intelligence.png",
        alt: "Job Search Control Room priority lane dashboard",
        caption: "Priority lane",
      },
    ],
    workflow: ["research", "triage", "tailor", "apply", "track", "follow up"],
  },
  {
    slug: "command-centre",
    title: "Command Centre: Agent Workspace Architecture",
    eyebrow: "Workspace system",
    purpose:
      "A thin personal operating layer that keeps profile context, priorities, tooling defaults, tracking, decisions, and workspace routing explicit.",
    accent: "#7c3aed",
    stack: ["Markdown", "AGENTS.md", "Context files", "Decision logs", "Workspace routing"],
    receipts: [
      "Uses AGENTS.md as the canonical operating policy.",
      "Separates durable personal context from business/project workspaces.",
      "Defines how agents read context, clarify output, execute, verify, and update state.",
    ],
    story: {
      why:
        "I wanted my AI-assisted work to have memory, boundaries, and routing instead of every session starting from scratch.",
      built:
        "A workspace architecture around operating rules, profile context, priorities, tooling defaults, tracking, decisions, and project-specific workspaces.",
      proves:
        "I think about AI as an operating environment: context design, rules, routing, review, and handoff matter as much as the prompt.",
    },
    buildDetails: [
      "Agent operating instructions and context files.",
      "Separate durable context from project workspaces.",
      "Routing rules for risky changes, new ideas, and execution tasks.",
    ],
    proofPoints: [
      "Shows AI-native workspace architecture rather than isolated prompting.",
      "Makes review and verification part of the working loop.",
      "Useful for multi-project continuity and safer agent collaboration.",
    ],
    galleryFocus: "Agent routing map and workspace-context flow.",
    walkthroughNotes: [
      "Use this as the architecture proof for how the other projects stay understandable to agents.",
      "The workflow strip shows how incoming work is routed before execution starts.",
    ],
    privacyNote: "Sensitive personal context, private decisions, and raw logs are not shown.",
    images: [],
    workspaceMap: [
      "AGENTS.md",
      "context/profile",
      "context/priorities",
      "context/tooling",
      "context/tracking",
      "context/decisions",
      "workspaces/",
    ],
    workflow: ["read context", "clarify deliverable", "work in right workspace", "verify", "update context"],
  },
  {
    slug: "events-console",
    title: "Events / Research Console",
    eyebrow: "Research surface",
    purpose:
      "A local browser console that ranks events and research leads with filters, score rings, map context, public source links, and action cues.",
    accent: "#ea580c",
    stack: ["HTML", "CSS", "JavaScript", "Leaflet", "Public event sources"],
    receipts: [
      "Complete single-file local app with ranked cards, filters, map, and source links.",
      "Turns public research into a shortlist instead of another pile of tabs.",
      "Shows ranking, location, urgency, and actionability in one surface.",
    ],
    story: {
      why:
        "Research gets wasted when useful opportunities sit in a pile of tabs. I built a console that makes event and lead research easier to compare.",
      built:
        "A local map-and-card interface with filters, scoring, location context, source links, and visible action cues.",
      proves:
        "I can turn research into an operational surface: ranking, filtering, and decision support instead of passive notes.",
    },
    buildDetails: [
      "Map-led browser interface using Leaflet.",
      "Ranked cards with filters and source links.",
      "Single-file local app for fast iteration and portability.",
    ],
    proofPoints: [
      "Strong visual proof through map, cards, and filters.",
      "Transforms public-source research into a decision queue.",
      "Good example of lightweight tooling for messy discovery work.",
    ],
    galleryFocus: "Map view, ranked event cards, filters, and source/action cues.",
    walkthroughNotes: [
      "Open the screenshot first because it is the most visual project surface.",
      "Use the screenshot to show filtering and score-based triage.",
    ],
    privacyNote: "Only public-style event examples are represented in the portfolio.",
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
      "A private Next.js/Supabase product prototype with shared planning, deck flows, ideas, memories, notes, profile settings, and motion-heavy interaction surfaces.",
    accent: "#db2777",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind", "Motion", "Netlify"],
    receipts: [
      "Full Next.js App Router project with real routes, components, hooks, and deployment config.",
      "Supabase schema/storage model for ideas, memories, ratings, bucket items, and photos.",
      "Private because the content is personal; walkthrough available without exposing the repo.",
    ],
    story: {
      why:
        "I wanted to build a product prototype that was more emotional and interaction-heavy than an ops dashboard, while still using a real app architecture.",
      built:
        "A private Next.js/Supabase app with shared planning routes, idea/deck flows, memories, notes, profile settings, storage, and motion-led UI.",
      proves:
        "I can build beyond internal tools: routed product surfaces, database-backed features, and polished interaction loops.",
    },
    buildDetails: [
      "Next.js App Router structure with multiple product routes.",
      "Supabase-backed schema for ideas, memories, ratings, bucket items, and photos.",
      "Motion-heavy product UI with private content removed from portfolio captures.",
    ],
    proofPoints: [
      "Shows product execution and full-stack structure.",
      "Demonstrates a different visual style from the ops consoles.",
      "Private app can be walked through without exposing personal data.",
    ],
    galleryFocus: "Home and tonight-picker product surfaces, plus route/component architecture.",
    walkthroughNotes: [
      "Use the screenshots to show the real product direction.",
      "Use the screenshots to show the product direction and interaction loop.",
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
    workspaceMap: [
      "app/home",
      "app/tonight",
      "app/together",
      "app/deck",
      "app/memories",
      "components/",
      "supabase/schema",
    ],
    workflow: ["identity", "home", "tonight picker", "shared deck", "memories", "storage"],
  },
];

export const aiWorkingPrinciples = [
  {
    title: "Context first",
    body:
      "I make the workspace legible before asking an agent to act: rules, current state, business context, source boundaries, and handoff notes live where the agent can recover them.",
  },
  {
    title: "Operating surfaces",
    body:
      "The output is usually a dashboard, queue, console, or review surface. I want the next action to be visible without opening ten tabs.",
  },
  {
    title: "Human review loop",
    body:
      "AI can draft, structure, inspect, and accelerate work. Claims, policy language, outreach decisions, and sensitive actions still pass through deliberate human review.",
  },
  {
    title: "Persistent memory",
    body:
      "I keep decisions, priorities, source assumptions, and project state in durable files so long-running work does not reset every time a new agent session starts.",
  },
];
