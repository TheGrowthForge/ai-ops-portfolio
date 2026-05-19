import {
  ArrowUpRight,
  BookOpenCheck,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Map,
  PanelTop,
  ShieldCheck,
} from "lucide-react";
import { projects, type Project } from "./projects";

const githubUrl = "https://github.com/TheGrowthForge";
const linkedinUrl = "https://www.linkedin.com/in/luke-thegrowthforge/";
const caseStudyUrl = "/case-studies/CASE_STUDY_AI_WORKFLOW_OPERATING_SYSTEM.pdf";

const projectIcons = [ShieldCheck, PanelTop, BrainCircuit, Map, Boxes];
const flowSteps = [
  "Messy inputs",
  "AI workflow",
  "Human review",
  "Operating surface",
  "Action loop",
];

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Luke Thomas portfolio home">
          <span className="brand-mark">LT</span>
          <span>Luke Thomas</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#principles">Principles</a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="role-line">AI-native operations and workflow builder</p>
          <h1>I build practical operating systems for ambiguous workflows.</h1>
          <p className="hero-text">
            Selected project examples across dashboards, consoles, CRM processes, source registers, research systems, and
            human-reviewed AI workflows.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#projects">
              View selected projects
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="secondary-action" href={caseStudyUrl}>
              <Download size={17} aria-hidden="true" />
              Download case study
            </a>
          </div>
        </div>

        <ArchitectureFlow />
      </section>

      <section className="links-band" aria-label="Profile links">
        <a href={githubUrl} target="_blank" rel="noreferrer">
          <Github size={18} aria-hidden="true" />
          github.com/TheGrowthForge
          <ExternalLink size={15} aria-hidden="true" />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noreferrer">
          <Linkedin size={18} aria-hidden="true" />
          linkedin.com/in/luke-thegrowthforge
          <ExternalLink size={15} aria-hidden="true" />
        </a>
      </section>

      <section className="visual-note" aria-label="How to read the visuals">
        <div>
          <CheckCircle2 size={19} aria-hidden="true" />
          <strong>How to read the visuals:</strong>
        </div>
        <p>
          Mockups are recreated with fake labels and sanitized data. They show architecture and workflow judgement, not
          private dashboards, live records, or internal project files.
        </p>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <h2>Selected Project Evidence</h2>
          <p>
            These are sanitized summaries. Private repositories, internal project details, and sensitive operating data are
            intentionally excluded.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="case-study-section">
        <div>
          <BookOpenCheck size={24} aria-hidden="true" />
          <h2>One-page case study</h2>
          <p>
            A short example of how I turn a messy AI workflow into a structured operating system with source discipline,
            review loops, and practical adoption.
          </p>
        </div>
        <a className="primary-action compact" href={caseStudyUrl}>
          <Download size={17} aria-hidden="true" />
          Download PDF
        </a>
      </section>

      <section className="section principles" id="principles">
        <div className="section-heading">
          <h2>How I Approach This Work</h2>
          <p>My strongest work sits between operations, AI tools, commercial execution, and human judgement.</p>
        </div>
        <div className="principle-list">
          <article>
            <h3>Make the workflow visible</h3>
            <p>Dashboards and consoles should clarify decisions, state, owners, and next actions.</p>
          </article>
          <article>
            <h3>Keep review explicit</h3>
            <p>AI can accelerate work, but source checks, caveats, and escalation paths need to stay clear.</p>
          </article>
          <article>
            <h3>Build for action</h3>
            <p>The output should help a person decide, respond, follow up, or improve the process.</p>
          </article>
        </div>
      </section>

      <footer className="footer">
        <p>Selected project portfolio. Sensitive details removed before publication.</p>
        <div>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = projectIcons[index] ?? Boxes;

  return (
    <article className="project-card">
      <div className="project-top">
        <div className="project-icon">
          <Icon size={21} aria-hidden="true" />
        </div>
        <div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
        </div>
      </div>

      {project.visualType && <ProjectVisual project={project} />}

      <div className="project-section">
        <h4>Problem</h4>
        <p>{project.problem}</p>
      </div>

      <div className="project-section">
        <h4>What I built</h4>
        <ul>
          {project.whatIBuilt.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="project-section">
        <h4>Evidence</h4>
        <ul>
          {project.evidence.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="tool-row" aria-label={`Tools used for ${project.title}`}>
        {project.tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>

      <div className="privacy-note">
        <strong>Sanitized:</strong> {project.sensitiveDetailsRemoved}
      </div>

      <div className="best-for">
        {project.bestFor.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
}

function ArchitectureFlow() {
  return (
    <aside className="architecture-panel" aria-label="Sanitized workflow architecture diagram">
      <div className="architecture-header">
        <span>Operating system pattern</span>
        <strong>Recreated visual</strong>
      </div>
      <div className="flow-list">
        {flowSteps.map((step, index) => (
          <div className="flow-step" key={step}>
            <div className="flow-node">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
            {index < flowSteps.length - 1 && <div className="flow-arrow" aria-hidden="true" />}
          </div>
        ))}
      </div>
      <div className="architecture-surface">
        <div className="surface-toolbar">
          <span />
          <span />
          <span />
          <strong>decision surface</strong>
        </div>
        <div className="surface-grid">
          <div>
            <small>Source register</small>
            <strong>Traceable notes</strong>
          </div>
          <div>
            <small>Review queue</small>
            <strong>Human checks</strong>
          </div>
          <div>
            <small>Next action</small>
            <strong>Follow-up loop</strong>
          </div>
        </div>
      </div>
    </aside>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.visualType === "policy-system") {
    return <SystemMockup project={project} variant="policy" />;
  }

  if (project.visualType === "job-control") {
    return <SystemMockup project={project} variant="job" />;
  }

  return <MiniDashboardPreview project={project} />;
}

function SystemMockup({ project, variant }: { project: Project; variant: "policy" | "job" }) {
  const isPolicy = variant === "policy";
  const primaryRows = isPolicy
    ? [
        ["Source register", "Referenced", "Ready"],
        ["Policy update", "Review", "Today"],
        ["Claim note", "Needs caveat", "Check"],
      ]
    : [
        ["Role queue", "Prioritise", "Today"],
        ["CV lane", "Tailor", "Next"],
        ["Follow-up needed", "Draft", "Ready"],
      ];
  const sideItems = isPolicy
    ? ["Monitoring", "Review queue", "Delivery workflow"]
    : ["Daily actions", "Outreach prompt", "Portfolio asset"];

  return (
    <div className={`system-mockup ${isPolicy ? "policy-mockup" : "job-mockup"}`}>
      <div className="mockup-copy">
        <h4>{project.visualTitle}</h4>
        <p>{project.visualSummary}</p>
      </div>
      <div className="mockup-window" aria-label={`${project.title} sanitized visual mockup`}>
        <div className="mockup-bar">
          <span />
          <span />
          <span />
          <strong>{isPolicy ? "policy ops" : "workflow ops"}</strong>
        </div>
        <div className="mockup-body">
          <div className="mockup-main">
            {primaryRows.map(([label, status, action]) => (
              <div className="mockup-row" key={label}>
                <div>
                  <strong>{label}</strong>
                  <small>{status}</small>
                </div>
                <span>{action}</span>
              </div>
            ))}
          </div>
          <div className="mockup-side">
            {sideItems.map((item) => (
              <div key={item}>
                <small>{item}</small>
                <span />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniDashboardPreview({ project }: { project: Project }) {
  return (
    <div className="mini-preview" aria-label={`${project.title} sanitized visual summary`}>
      <div>
        <h4>{project.visualTitle}</h4>
        <p>{project.visualSummary}</p>
      </div>
      <div className="mini-tiles">
        {project.visualPoints?.map((point) => (
          <span key={point}>{point}</span>
        ))}
      </div>
    </div>
  );
}

export default App;
