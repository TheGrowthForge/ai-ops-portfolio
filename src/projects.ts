export type Project = {
  title: string;
  summary: string;
  problem: string;
  whatIBuilt: string[];
  tools: string[];
  evidence: string[];
  sensitiveDetailsRemoved: string;
  bestFor: string[];
};

export const projects: Project[] = [
  {
    title: "UK School AI Policy Operating System",
    summary:
      "A source-disciplined operating system for turning a regulated AI policy problem into structured workflows, review loops, and user-facing guidance.",
    problem:
      "Schools need practical ways to understand AI governance, acceptable-use expectations, policy risk, and implementation decisions without relying on unsupported claims.",
    whatIBuilt: [
      "Source and claims registers to keep statements traceable.",
      "Monitoring routines across education, data protection, exam, safeguarding-related, and government guidance sources.",
      "Dashboard views for policy assets, source coverage, outreach, delivery readiness, and next actions.",
      "Call preparation, close-page, delivery, and review workflows for a productised advisory offer.",
    ],
    tools: ["AI agents", "LLM research workflows", "Markdown", "Google Workspace", "Netlify", "Formspree", "Attio", "Apollo"],
    evidence: [
      "Shows source discipline in a high-trust workflow.",
      "Shows how AI can speed up drafting and research while human review stays explicit.",
      "Shows ability to turn a fragmented domain into a usable operating surface.",
    ],
    sensitiveDetailsRemoved:
      "Private source notes, commercial strategy, outreach data, prospect details, and internal fulfilment material are not public.",
    bestFor: ["AI deployment", "Regulated workflows", "Trust and safety", "Public-sector technology"],
  },
  {
    title: "Job Application Control Room",
    summary:
      "A local command centre for managing role priorities, application state, CV variants, outreach queues, and daily job-search actions.",
    problem:
      "A complex job search can quickly become scattered across links, CVs, notes, applications, and follow-ups. The useful question becomes: what should happen today?",
    whatIBuilt: [
      "React/Vite dashboard with application queues, lane guidance, daily actions, and portfolio assets.",
      "CSV and Markdown-driven display layer for trackers, notes, role targets, and search terms.",
      "Local checklist state for daily execution without changing source tracker files.",
      "A calmer visual operating surface for prioritising work under pressure.",
    ],
    tools: ["React", "Vite", "TypeScript", "CSS", "CSV parsing", "Markdown source files", "localStorage"],
    evidence: [
      "Shows practical internal-tool building around a live workflow.",
      "Shows AI-assisted research and human-reviewed prioritisation.",
      "Shows comfort building decision surfaces rather than only static documents.",
    ],
    sensitiveDetailsRemoved:
      "No live hiring-process state, personal context, private notes, CV packages, tracker data, or role materials are published.",
    bestFor: ["AI-native operations", "Internal tooling", "Workflow triage", "Founder/operator roles"],
  },
  {
    title: "Personal Command Console",
    summary:
      "A private operating console for turning priorities, project context, and daily execution loops into a single decision surface.",
    problem:
      "When multiple projects compete for attention, the hard part is not just task capture; it is keeping context, next actions, and decision points visible enough to act.",
    whatIBuilt: [
      "A personal command surface for project state, execution loops, and daily priorities.",
      "Workflow sections for reducing context switching between planning, building, and follow-up.",
      "A local-first system designed around actual behaviour rather than generic productivity categories.",
    ],
    tools: ["Local web UI", "Structured notes", "AI-assisted planning", "Workflow mapping"],
    evidence: [
      "Shows command-centre thinking applied to personal execution.",
      "Shows ability to design systems around messy human workflows.",
      "Shows preference for useful operating surfaces over decorative dashboards.",
    ],
    sensitiveDetailsRemoved:
      "Private life context, financial details, personal notes, and business-sensitive planning are not public.",
    bestFor: ["Operations roles", "Chief of staff style work", "Workflow design", "Execution systems"],
  },
  {
    title: "Events / Research Console",
    summary:
      "A local events console that ranks AI, founder, networking, and local events by relevance, location, urgency, and actionability.",
    problem:
      "Finding the right events is noisy. Useful events are spread across Meetup, Eventbrite, community pages, and local sources, with no single view for deciding what is worth attending.",
    whatIBuilt: [
      "A ranked event interface with filters for AI/tech, founders, networking, local events, and free events.",
      "Priority event links and lightweight relevance scoring.",
      "Map-based location context for London, Kent, and nearby opportunities.",
      "A practical research surface for deciding where to spend time.",
    ],
    tools: ["HTML", "CSS", "JavaScript", "Leaflet", "public event sources", "research synthesis"],
    evidence: [
      "Shows public-information synthesis into an action-oriented interface.",
      "Shows location-aware workflow design.",
      "Shows how research can become a reusable decision surface.",
    ],
    sensitiveDetailsRemoved:
      "No account data, private browsing data, or personal attendance notes are included.",
    bestFor: ["Research workflows", "Geospatial decision support", "Community building", "Ops tooling"],
  },
  {
    title: "Date App / Private GitHub Project",
    summary:
      "A private TypeScript application showing product execution, app structure, and hands-on implementation beyond workflow documents.",
    problem:
      "Some product ideas need enough implementation depth to test interaction, structure, and user flow before they can be judged properly.",
    whatIBuilt: [
      "A TypeScript web application in a private GitHub repository.",
      "Application structure, component work, styling, and local development workflow.",
      "A working product surface that can be discussed or walked through when appropriate.",
    ],
    tools: ["TypeScript", "React-style web development", "CSS", "GitHub", "local development"],
    evidence: [
      "Shows willingness to build working software, not just plans.",
      "Shows modern web-stack familiarity.",
      "Shows private-repo project discipline that can be shared selectively.",
    ],
    sensitiveDetailsRemoved:
      "Repository internals remain private unless a walkthrough or access is specifically appropriate.",
    bestFor: ["Product execution", "Frontend implementation", "Private project walkthroughs"],
  },
];
