import {
  ArrowUpRight,
  BookOpenCheck,
  Boxes,
  BrainCircuit,
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

        <aside className="proof-panel" aria-label="Portfolio proof points">
          <div className="proof-row">
            <span>5</span>
            <p>sanitized project examples</p>
          </div>
          <div className="proof-row">
            <span>1</span>
            <p>downloadable AI workflow case study</p>
          </div>
          <div className="proof-row">
            <span>0</span>
            <p>private trackers or sensitive workspace files</p>
          </div>
        </aside>
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

export default App;
