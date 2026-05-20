import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BookOpenCheck,
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
import { aiWorkingPrinciples, featuredProject, projects, type Project, type ProjectImage } from "./projects";

const githubUrl = "https://github.com/TheGrowthForge";
const linkedinUrl = "https://www.linkedin.com/in/luke-thegrowthforge/";
const caseStudyUrl = "/case-studies/CASE_STUDY_AI_WORKFLOW_OPERATING_SYSTEM.pdf";
const emailHref = "mailto:lukejthomas412@gmail.com";

function App() {
  const [lightboxImage, setLightboxImage] = useState<ProjectImage | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  return (
    <main>
      <SiteHeader />
      <HeroEvidenceBoard onOpenImage={setLightboxImage} />
      <FeaturedSystem project={featuredProject} onOpenImage={setLightboxImage} onOpenProject={setSelectedProject} />
      <ProjectGallery projects={projects} onOpenImage={setLightboxImage} onOpenProject={setSelectedProject} />
      <WalkthroughIndex onOpenImage={setLightboxImage} onOpenProject={setSelectedProject} />
      <WorkspaceArchitecture />
      <ContactSection />
      {selectedProject ? (
        <ProjectDetailDrawer
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenImage={setLightboxImage}
        />
      ) : null}
      {lightboxImage ? <ProjectLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} /> : null}
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Luke Thomas portfolio home">
        <span className="brand-mark">LT</span>
        <span>Project Lab</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#featured">Featured</a>
        <a href="#projects">Projects</a>
        <a href="#play">Walkthroughs</a>
        <a href="#ai-workflow">AI workflow</a>
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
          CV / Case study
        </a>
      </nav>
    </header>
  );
}

function HeroEvidenceBoard({ onOpenImage }: { onOpenImage: (image: ProjectImage) => void }) {
  const flagshipImage = featuredProject.images[1] ?? featuredProject.images[0];
  const proofWallImages = [
    featuredProject.images[0],
    projects[0].images[0],
    projects[2].images[0],
    projects[3].images[0],
  ].filter((image): image is ProjectImage => Boolean(image));
  const capabilityLabels = ["context architecture", "source review", "operating consoles", "product surfaces"];

  return (
    <section className="hero evidence-hero" id="top">
      <div className="hero-copy">
        <div>
          <p className="eyebrow">Luke Thomas / AI-native systems builder</p>
          <h1>Systems I built with AI, context, and code.</h1>
          <p>
            A project lab of real surfaces, private workflow consoles, source-led operating systems, and project
            walkthroughs. The work is built to be inspected, not just described.
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
              View flagship
              <MoveRight size={17} aria-hidden="true" />
            </a>
            <a className="tertiary-action" href="#play">
              View walkthroughs
              <MoveRight size={17} aria-hidden="true" />
            </a>
            <a className="secondary-action" href={caseStudyUrl}>
              <BookOpenCheck size={17} aria-hidden="true" />
              Case study PDF
            </a>
          </div>
        </div>
      </div>

      <div className="hero-evidence-panel" aria-label="Evidence lab preview">
        <button className="hero-flagship-shot" onClick={() => onOpenImage(flagshipImage)} type="button">
          <BrowserFrame image={flagshipImage} large />
        </button>
        <div className="lab-board compact-lab-board">
          <EvidenceTile label="systems built" value="5" />
          <EvidenceTile label="live public site" value="1" />
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

function ProofWallShot({ image, wide = false }: { image: ProjectImage; wide?: boolean }) {
  return (
    <article className={`proof-wall-shot ${wide ? "wide" : ""}`}>
      <img alt={image.alt} src={image.src} />
      <span>{image.caption}</span>
    </article>
  );
}

function EvidenceTile({ label, value }: { label: string; value: string }) {
  return (
    <article className="evidence-tile">
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
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
  const [activeIndex, setActiveIndex] = useState(1);
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
          <div>
            <h3>Why it matters</h3>
            <p className="note-lede">{project.story.proves}</p>
          </div>
          <div>
            <h3>What this proves</h3>
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
        <span className="eyebrow">More project receipts</span>
        <h2>Actual surfaces first. Architecture second.</h2>
        <p>Each project card leads with something visible: a screenshot, a workspace map, or a product-system preview.</p>
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

  return (
    <article className={`project-card project-card-${project.slug}`} style={{ "--project-accent": project.accent } as React.CSSProperties}>
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

      <div className="receipt-list">
        {project.proofPoints.slice(0, 3).map((receipt) => (
          <span key={receipt}>{receipt}</span>
        ))}
      </div>

      {project.images.length > 1 ? <ScreenshotStrip images={project.images} onOpenImage={onOpenImage} /> : null}
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

function WorkspaceMap({ project }: { project: Project }) {
  return <WorkspaceMapPreview project={project} />;
}

function WorkspaceMapPreview({ project }: { project: Project }) {
  const mapItems = project.workspaceMap ?? [];

  return (
    <div className="workspace-map-preview">
      <div className="map-core">
        <BrainCircuit size={22} aria-hidden="true" />
        <strong>{project.slug === "command-centre" ? "agent reads context first" : "system map"}</strong>
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

function WalkthroughIndex({
  onOpenImage,
  onOpenProject,
}: {
  onOpenImage: (image: ProjectImage) => void;
  onOpenProject: (project: Project) => void;
}) {
  const walkthroughProjects = [featuredProject, ...projects];

  return (
    <section className="walkthrough-index-section" id="play">
      <div className="section-heading compact">
        <span className="eyebrow">Project walkthroughs</span>
        <h2>Walkthrough paths for the real systems.</h2>
        <p>
          Each walkthrough points to actual project evidence: screenshots, architecture, workflow notes, build details,
          and the strongest thing to inspect first.
        </p>
      </div>

      <div className="walkthrough-grid">
        {walkthroughProjects.map((project) => {
          const image = project.images[0];
          const steps = project.walkthroughNotes?.length ? project.walkthroughNotes : project.proofPoints;

          return (
            <article className="walkthrough-card" key={project.slug} style={{ "--project-accent": project.accent } as React.CSSProperties}>
              <div className="walkthrough-visual">
                {image ? (
                  <button className="image-button" onClick={() => onOpenImage(image)} type="button">
                    <img alt={image.alt} src={image.src} />
                  </button>
                ) : (
                  <WorkspaceMapPreview project={project} />
                )}
              </div>
              <div className="walkthrough-copy">
                <span className="eyebrow">{project.eyebrow}</span>
                <h3>{project.title}</h3>
                <p>{project.galleryFocus}</p>
                <ol className="walkthrough-steps">
                  {steps.slice(0, 2).map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <button className="walkthrough-button" onClick={() => onOpenProject(project)} type="button">
                  Open walkthrough
                  <MoveRight size={16} aria-hidden="true" />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
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

function WorkspaceArchitecture() {
  return (
    <section className="architecture-section" id="ai-workflow">
      <div className="section-heading compact">
        <span className="eyebrow">How I work with AI</span>
        <h2>The workspace is part of the system.</h2>
        <p>
          I design the workspace before I ask an agent to act. Durable context, source boundaries, review loops, and
          operating surfaces keep the AI useful across long-running projects.
        </p>
      </div>

      <div className="principle-grid">
        {aiWorkingPrinciples.map((principle, index) => (
          <article key={principle.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{principle.title}</h3>
            <p>{principle.body}</p>
          </article>
        ))}
      </div>

      <div className="architecture-flow">
        {["workspace context", "agent rules", "source evidence", "working surface", "human review", "shipped output"].map(
          (node, index) => (
            <div key={node}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <strong>{node}</strong>
            </div>
          )
        )}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <footer className="contact-section" id="contact">
      <div>
        <span className="eyebrow">Links</span>
        <h2>Project walkthroughs available without exposing private repos.</h2>
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
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={image.caption} onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} type="button">
        Close
      </button>
      <img alt={image.alt} src={image.src} />
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

  return (
    <div className="project-drawer-backdrop" role="dialog" aria-modal="true" aria-label={`${project.title} walkthrough`} onClick={onClose}>
      <aside className="project-drawer" style={{ "--project-accent": project.accent } as React.CSSProperties} onClick={(event) => event.stopPropagation()}>
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
          <StoryBlock label="why" text={project.story.why} />
          <StoryBlock label="built" text={project.story.built} />
          <StoryBlock label="proves" text={project.story.proves} />
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
