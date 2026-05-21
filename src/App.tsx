import { useCallback, useEffect, useState } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  Download,
  Github,
  Images,
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
import { InteractiveLab } from "./InteractiveLab";
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
      <HeroEvidenceBoard onOpenImage={setLightboxImage} />
      <AISystemsStudio />
      <FeaturedSystem project={featuredProject} onOpenImage={setLightboxImage} onOpenProject={setSelectedProject} />
      <ProjectGallery projects={projects} onOpenImage={setLightboxImage} onOpenProject={setSelectedProject} />
      <InteractiveLab />
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
        <a href="#studio">Studio</a>
        <a href="#projects">Projects</a>
        <a href="#lab">Lab</a>
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

function HeroEvidenceBoard({ onOpenImage }: { onOpenImage: (image: ProjectImage) => void }) {
  const proofWallImages = [
    featuredProject.images[0],
    ...projects.flatMap((project) => project.images.slice(0, 1)).slice(0, 3),
  ].filter((image): image is ProjectImage => Boolean(image));
  const capabilityLabels = ["context architecture", "source review", "operating consoles", "product surfaces"];

  return (
    <section className="hero evidence-hero" id="top">
      <div className="hero-copy">
        <div>
          <p className="eyebrow">Luke Thomas — AI operations &amp; workflow builder</p>
          <h1>Systems I built with AI, context, and code.</h1>
          <p>
            I help teams turn AI from scattered experiments into working business processes — by
            engineering the systems, not just the prompts. This is a lab of real, working surfaces,
            built to be inspected rather than described.
          </p>
          <p className="availability-chip">
            Open to AI operations, workflow &amp; applied-AI roles · Kent / London / remote
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
              See the flagship build
              <MoveRight size={17} aria-hidden="true" />
            </a>
            <a className="secondary-action" href={emailHref}>
              <Mail size={17} aria-hidden="true" />
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <div className="hero-evidence-panel" aria-label="Evidence lab preview">
        <div className="lab-board compact-lab-board">
          <FactTile label="Live website" value="schoolaipolicy.co.uk" href="https://www.schoolaipolicy.co.uk" />
          <FactTile label="Regulated domain" value="DfE · JCQ · ICO aligned" />
          {proofWallImages.map((image) => (
            <button className="proof-wall-shot evidence-button" key={image.src} onClick={() => onOpenImage(image)} type="button">
              <img alt={image.alt} src={image.src} />
              <span>{image.caption}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function FactTile({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <>
      <span className="fact-label">{label}</span>
      <strong className="fact-value">{value}</strong>
    </>
  );

  if (href) {
    return (
      <a className="evidence-tile fact-tile fact-link" href={href} target="_blank" rel="noreferrer">
        {content}
        <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    );
  }

  return <article className="evidence-tile fact-tile">{content}</article>;
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
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = project.images[activeIndex] ?? project.images[0];

  return (
    <section className="featured-section" id="featured">
      <div className="section-heading">
        <span className="eyebrow">{project.eyebrow}</span>
        <h2>{project.title}</h2>
        <p>
          The flagship system: public website, private dashboard, source-review workflow, call console, business
          overview, and AI-aware workspace architecture.
        </p>
      </div>

      <div className="featured-layout" style={{ "--project-accent": project.accent } as React.CSSProperties}>
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
            {project.links?.map((link) => (
              <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
                {link.label}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
            <button className="project-link-button" onClick={() => onOpenProject(project)} type="button">
              Open walkthrough
              <MoveRight size={15} aria-hidden="true" />
            </button>
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
  const columns = [
    galleryProjects.filter((_, index) => index % 2 === 0),
    galleryProjects.filter((_, index) => index % 2 === 1),
  ];

  return (
    <section className="project-section" id="projects">
      <div className="section-heading compact">
        <span className="eyebrow">Selected project evidence</span>
        <h2>Actual surfaces first. Architecture second.</h2>
        <p>Each card leads with a real surface, then explains what the project does and what problem it solves.</p>
      </div>
      <div className="project-grid">
        {columns.map((column, index) => (
          <div className="project-column" key={index}>
            {column.map((project) => (
              <ProjectGalleryCard
                key={project.slug}
                project={project}
                onOpenImage={onOpenImage}
                onOpenProject={onOpenProject}
              />
            ))}
          </div>
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
      <div className="project-card-header">
        <span className="eyebrow">{project.eyebrow}</span>
        <h3>{project.title}</h3>
        <p>{project.purpose}</p>
      </div>

      <div className="project-card-visual">
        {primaryImage ? (
          <button className="image-button" onClick={() => onOpenImage(primaryImage)} type="button">
            <BrowserFrame image={primaryImage} />
          </button>
        ) : (
          <WorkspaceMapPreview project={project} />
        )}
      </div>

      <ProjectQuickRead project={project} compact />

      <div className="receipt-list">
        {project.proofPoints.slice(0, 3).map((receipt) => (
          <span key={receipt}>{receipt}</span>
        ))}
      </div>

      {project.images.length > 1 ? <ScreenshotStrip images={project.images.slice(1, 4)} onOpenImage={onOpenImage} /> : null}
      <div className="gallery-focus">
        <Images size={16} aria-hidden="true" />
        <span>{project.galleryFocus}</span>
      </div>
      <button className="walkthrough-button" onClick={() => onOpenProject(project)} type="button">
        Inspect project
        <MoveRight size={16} aria-hidden="true" />
      </button>
      <div className="stack-line">{project.stack.join(" / ")}</div>
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
        <span className="eyebrow">Get in touch</span>
        <h2>Luke Thomas — AI operations &amp; workflow builder.</h2>
        <p>
          Open to AI operations, workflow, and applied-AI roles — Kent, London, or remote. The work above
          is built to be inspected; project walkthroughs are available without exposing private repos.
        </p>
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
