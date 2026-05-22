import { useCallback, useEffect, useState } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  Download,
  Github,
  Linkedin,
  Mail,
  MoveRight,
  Sparkles,
  X,
} from "lucide-react";
import {
  featuredProject,
  projects,
  type Project,
  type ProjectImage,
} from "./projects";
import { AISystemsStudio } from "./AISystemsStudio";
import { useModal } from "./useModal";

const githubUrl = "https://github.com/TheGrowthForge";
const linkedinUrl = "https://www.linkedin.com/in/luke-thegrowthforge/";
const caseStudyUrl = "/case-studies/CASE_STUDY_AI_WORKFLOW_OPERATING_SYSTEM.pdf";
const emailHref = "mailto:lukejthomas412@gmail.com";

function App() {
  const [lightboxImage, setLightboxImage] = useState<ProjectImage | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeLightbox = useCallback(() => setLightboxImage(null), []);
  const closeProject = useCallback(() => setSelectedProject(null), []);

  useEffect(() => {
    document.documentElement.style.overflowY = "auto";
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";

    return () => {
      document.documentElement.style.overflowY = "";
      document.body.style.overflowY = "";
      document.body.style.overflowX = "";
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    document.documentElement.classList.add("reveal-on");
    const targets = document.querySelectorAll(
      ".section-heading, .featured-layout, .agent-demo, .project-card, .contact-intro",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -7% 0px" },
    );
    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-on");
    };
  }, []);

  return (
    <main>
      <SiteHeader />
      <HeroEvidenceBoard />
      <FeaturedSystem project={featuredProject} onOpenImage={setLightboxImage} onOpenProject={setSelectedProject} />
      <ProjectGallery projects={projects} onOpenImage={setLightboxImage} onOpenProject={setSelectedProject} />
      <AISystemsStudio />
      <StackMetaSection />
      <ContactSection />
      {selectedProject ? (
        <ProjectDetailDrawer
          project={selectedProject}
          onClose={closeProject}
          onOpenImage={setLightboxImage}
        />
      ) : null}
      {lightboxImage ? <ProjectLightbox image={lightboxImage} onClose={closeLightbox} /> : null}
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Luke Thomas portfolio home">
        <span className="brand-mark">LT</span>
        <span>Luke Thomas</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#featured">Featured</a>
        <a href="#projects">Projects</a>
        <a href="#studio">Studio</a>
        <a href="#stack">Stack</a>
        <a href={githubUrl} target="_blank" rel="noreferrer">
          <Github size={16} aria-hidden="true" />
          GitHub
        </a>
        <a href={linkedinUrl} target="_blank" rel="noreferrer">
          <Linkedin size={16} aria-hidden="true" />
          LinkedIn
        </a>
        <a href={emailHref}>
          <Mail size={16} aria-hidden="true" />
          Email
        </a>
        <a href={caseStudyUrl}>
          <Download size={16} aria-hidden="true" />
          Case study
        </a>
      </nav>
    </header>
  );
}

function HeroEvidenceBoard() {
  const capabilityLabels = ["school policy OS", "date app", "command centre", "events console"];

  return (
    <section className="hero evidence-hero" id="top">
      <div className="hero-copy">
        <div>
          <p className="eyebrow">Luke Thomas — AI systems portfolio</p>
          <h1>Systems I built with AI, context, and code.</h1>
          <p>
            A project lab of real working surfaces: public sites, private consoles, product
            prototypes, and agent-ready workspaces. Built to be inspected.
          </p>
          <p className="availability-chip">
            persistent context · source review · interface craft · human review
          </p>
        </div>
        <div>
          <div className="capability-strip" aria-label="Portfolio capability highlights">
            {capabilityLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="primary-action" href="#featured">
              Explore projects
              <MoveRight size={17} aria-hidden="true" />
            </a>
            <a className="secondary-action" href="#studio">
              <Sparkles size={17} aria-hidden="true" />
              AI workspace
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedSystem({
  project,
  onOpenImage,
  onOpenProject,
}: {
  project: Project;
  onOpenImage: (image: ProjectImage) => void;
  onOpenProject: (project: Project) => void;
}) {
  const architectureIndex = Math.max(
    project.images.findIndex((image) => image.caption.toLowerCase().includes("architecture")),
    0,
  );
  const [activeIndex, setActiveIndex] = useState(architectureIndex);
  const activeImage = project.images[activeIndex] ?? project.images[0];

  return (
    <section className="featured-section" id="featured">
      <div className="section-heading">
        <span className="eyebrow">{project.eyebrow}</span>
        <h2>{project.title}</h2>
      </div>

      <div className="featured-layout" style={{ "--project-accent": project.accent } as React.CSSProperties}>
        <aside className="case-file-meta" aria-label="Flagship case file metadata">
          <span className="case-file-label">case file</span>
          <h3>Regulated AI operating system</h3>
          <dl>
            <div>
              <dt>Domain</dt>
              <dd>UK education · GDPR · AI policy</dd>
            </div>
            <div>
              <dt>System</dt>
              <dd>Public site + private operating layer</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{project.stack.slice(0, 5).join(" · ")}</dd>
            </div>
          </dl>
          <div className="case-file-actions">
            {project.links?.map((link) => (
              <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
                {link.label}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
            <button className="project-link-button" onClick={() => onOpenProject(project)} type="button">
              Open case file
              <MoveRight size={15} aria-hidden="true" />
            </button>
          </div>
        </aside>

        <div className="featured-stage">
          <button className="image-button" onClick={() => onOpenImage(activeImage)} type="button">
            <BrowserFrame image={activeImage} large />
          </button>
          <div className="thumbnail-strip" aria-label="Project screenshots">
            {project.images.map((image, index) => (
              <button
                className={index === activeIndex ? "active" : undefined}
                key={image.src}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                <img alt="" src={image.src} />
                <span>{image.caption}</span>
              </button>
            ))}
          </div>
        </div>

        <aside className="project-notes flagship-notes">
          <ProjectQuickRead project={project} />
          <div>
            <h3>Receipts</h3>
            <ul>
              {project.proofPoints.map((receipt) => (
                <li key={receipt}>{receipt}</li>
              ))}
            </ul>
          </div>
          <WorkflowRail items={project.workflow ?? []} />
          <div className="stack-line">{project.stack.join(" / ")}</div>
          <div className="project-links">
            <a href={caseStudyUrl}>
              Download case study
              <Download size={15} aria-hidden="true" />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function ProjectGallery({
  projects: galleryProjects,
  onOpenImage,
  onOpenProject,
}: {
  projects: Project[];
  onOpenImage: (image: ProjectImage) => void;
  onOpenProject: (project: Project) => void;
}) {
  return (
    <section className="project-section" id="projects">
      <div className="section-heading compact">
        <span className="eyebrow">Selected project evidence</span>
        <h2>Project surfaces.</h2>
      </div>
      <div className="project-grid">
        {galleryProjects.map((project) => (
          <ProjectGalleryCard
            key={project.slug}
            project={project}
            onOpenImage={onOpenImage}
            onOpenProject={onOpenProject}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectGalleryCard({
  project,
  onOpenImage,
  onOpenProject,
}: {
  project: Project;
  onOpenImage: (image: ProjectImage) => void;
  onOpenProject: (project: Project) => void;
}) {
  const primaryImage = project.images[0];
  const singleVisual = project.images.length <= 1;

  return (
    <article
      className={`project-card project-card-${project.slug}${singleVisual ? " project-card-single-visual" : ""}`}
      style={{ "--project-accent": project.accent } as React.CSSProperties}
    >
      <div className="project-card-visual">
        {primaryImage ? (
          <button className="image-button" onClick={() => onOpenImage(primaryImage)} type="button">
            <BrowserFrame image={primaryImage} />
          </button>
        ) : (
          <WorkspaceMapPreview project={project} />
        )}
      </div>

      <div className="project-card-header">
        <span className="eyebrow">{project.eyebrow}</span>
        <h3>{project.title}</h3>
        <p>{project.purpose}</p>
      </div>

      <div className="receipt-list">
        {project.proofPoints.slice(0, 3).map((receipt) => (
          <span key={receipt}>{receipt}</span>
        ))}
      </div>

      <div className="project-card-footer">
        <div className="stack-line">{project.stack.slice(0, 5).join(" / ")}</div>
        <button className="walkthrough-button" onClick={() => onOpenProject(project)} type="button">
          Inspect
          <MoveRight size={16} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

function ScreenshotStrip({
  images,
  onOpenImage,
}: {
  images: ProjectImage[];
  onOpenImage: (image: ProjectImage) => void;
}) {
  return (
    <div className="mini-strip">
      {images.map((image) => (
        <button key={image.src} onClick={() => onOpenImage(image)} type="button">
          <img alt="" src={image.src} />
          <span>{image.caption}</span>
        </button>
      ))}
    </div>
  );
}

function BrowserFrame({ image, large = false }: { image: ProjectImage; large?: boolean }) {
  return (
    <figure className={`browser-frame ${large ? "large" : ""}`}>
      <div className="browser-bar">
        <span />
        <span />
        <span />
        <strong>{image.caption}</strong>
      </div>
      <img alt={image.alt} loading="lazy" src={image.src} />
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}

function WorkspaceMapPreview({ project }: { project: Project }) {
  const mapItems = project.workspaceMap ?? [];

  return (
    <div className="workspace-map-preview">
      <div className="map-core">
        <BrainCircuit size={22} aria-hidden="true" />
        <strong>system map</strong>
      </div>
      <div className="map-connection" aria-hidden="true" />
      <div className="map-spokes">
        {mapItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="map-caption">
        <strong>Workspace architecture</strong>
        <p>Rules, context, priorities, tracking, and project routing are treated as part of the system.</p>
      </div>
    </div>
  );
}

function ProjectQuickRead({ project, compact = false }: { project: Project; compact?: boolean }) {
  const rows = [
    {
      label: "What it does",
      text: project.story.built,
    },
    {
      label: "What it solves",
      text: project.story.why,
    },
  ];

  return (
    <div className={`project-quick-read ${compact ? "compact" : ""}`}>
      {rows.map((row) => (
        <article key={row.label}>
          <span>{row.label}</span>
          <p>{row.text}</p>
        </article>
      ))}
    </div>
  );
}

function WorkflowRail({ items }: { items: string[] }) {
  if (!items.length) return null;

  return (
    <div className="workflow-rail" aria-label="Workflow">
      {items.map((item, index) => (
        <div key={item}>
          <small>{String(index + 1).padStart(2, "0")}</small>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function ContactSection() {
  return (
    <footer className="contact-section" id="contact">
      <div className="contact-intro">
        <span className="eyebrow">Contact</span>
        <h2>Luke Thomas.</h2>
        <p>Project links, source, case study, and direct contact.</p>
      </div>
      <div className="contact-actions">
        <a href={githubUrl} target="_blank" rel="noreferrer">
          <Github size={18} aria-hidden="true" />
          GitHub
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noreferrer">
          <Linkedin size={18} aria-hidden="true" />
          LinkedIn
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <a href={emailHref}>
          <Mail size={18} aria-hidden="true" />
          Email
        </a>
        <a href={caseStudyUrl}>
          <Download size={18} aria-hidden="true" />
          Case study
        </a>
      </div>
    </footer>
  );
}

function StackMetaSection() {
  const stackRows = [
    {
      label: "orchestration",
      value: "Codex · Claude Code · context files · custom skills · review gates",
    },
    {
      label: "frontend",
      value: "React · Vite · Next.js · TypeScript · CSS systems",
    },
    {
      label: "data",
      value: "Supabase · PostgreSQL · CSV/Markdown sources · source registers",
    },
    {
      label: "deploy",
      value: "GitHub · Netlify · Vercel · build checks · public/private boundaries",
    },
  ];

  const metaRows = [
    "Portfolio source is public.",
    "Project source repositories stay private where the work contains personal or live operating data.",
    "Every public screenshot is selected as an artifact, not a data dump.",
  ];

  return (
    <section className="stack-section" id="stack">
      <div className="stack-panel">
        <div className="stack-copy">
          <span className="eyebrow">Build stack</span>
          <h2>Context first. Interface second.</h2>
          <p>Every project starts with the workspace: rules, source files, decisions, and review gates.</p>
        </div>
        <div className="stack-table" aria-label="Toolchain architecture">
          {stackRows.map((row) => (
            <div key={row.label}>
              <strong>{row.label}</strong>
              <span>{row.value}</span>
            </div>
          ))}
        </div>
        <div className="meta-strip" aria-label="Portfolio project metadata">
          {metaRows.map((row) => (
            <span key={row}>{row}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectLightbox({ image, onClose }: { image: ProjectImage; onClose: () => void }) {
  const ref = useModal<HTMLDivElement>(onClose);

  return (
    <div className="lightbox" ref={ref} role="dialog" aria-modal="true" aria-label={image.caption} onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} type="button">
        Close
      </button>
      <img alt={image.alt} src={image.src} onClick={(event) => event.stopPropagation()} />
      <p>{image.caption}</p>
    </div>
  );
}

function ProjectDetailDrawer({
  project,
  onClose,
  onOpenImage,
}: {
  project: Project;
  onClose: () => void;
  onOpenImage: (image: ProjectImage) => void;
}) {
  const primaryImage = project.images[0];
  const ref = useModal<HTMLElement>(onClose);

  return (
    <div className="project-drawer-backdrop" onClick={onClose}>
      <aside
        className="project-drawer"
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} walkthrough`}
        style={{ "--project-accent": project.accent } as React.CSSProperties}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="drawer-topbar">
          <div>
            <span className="eyebrow">{project.eyebrow}</span>
            <h2>{project.title}</h2>
          </div>
          <button className="drawer-close" onClick={onClose} type="button" aria-label="Close project walkthrough">
            <X size={19} aria-hidden="true" />
          </button>
        </div>

        <p className="drawer-purpose">{project.purpose}</p>

        <div className="drawer-visual-led">
          <div className="drawer-visual">
            {primaryImage ? (
              <button className="image-button" onClick={() => onOpenImage(primaryImage)} type="button">
                <BrowserFrame image={primaryImage} large />
              </button>
            ) : (
              <WorkspaceMapPreview project={project} />
            )}
          </div>
        </div>

        {project.images.length > 1 ? (
          <div className="drawer-gallery">
            <span className="eyebrow">Visual receipts</span>
            <ScreenshotStrip images={project.images} onOpenImage={onOpenImage} />
          </div>
        ) : null}

        <div className="story-panel story-panel-horizontal">
          <StoryBlock label="Problem solved" text={project.story.why} />
          <StoryBlock label="What I built" text={project.story.built} />
          <StoryBlock label="What it proves" text={project.story.proves} />
        </div>

        <div className="drawer-columns">
          <EvidenceList title="Build details" items={project.buildDetails} />
          <EvidenceList title="Proof points" items={project.proofPoints} />
        </div>

        <div className="drawer-workflow">
          <span className="eyebrow">Workflow</span>
          <WorkflowRail items={project.workflow ?? []} />
        </div>

        {project.walkthroughNotes?.length ? <EvidenceList title="Walkthrough path" items={project.walkthroughNotes} /> : null}

        {project.privacyNote ? (
          <div className="drawer-privacy">
            <Sparkles size={16} aria-hidden="true" />
            <span>{project.privacyNote}</span>
          </div>
        ) : null}
      </aside>
    </div>
  );
}

function StoryBlock({ label, text }: { label: string; text: string }) {
  return (
    <article>
      <span>{label}</span>
      <p>{text}</p>
    </article>
  );
}

function EvidenceList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="evidence-list-block">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default App;
