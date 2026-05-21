import { useMemo, useState } from "react";
import {
  Braces,
  CheckCircle2,
  FileText,
  GitBranch,
  Layers3,
  LockKeyhole,
  Play,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import { AgentSessionDemo } from "./AgentSessionDemo";

type StudioStepKey = "brief" | "context" | "rules" | "build" | "review" | "ship";

const studioSteps: Array<{
  key: StudioStepKey;
  label: string;
  title: string;
  body: string;
  log: string[];
}> = [
  {
    key: "brief",
    label: "brief",
    title: "Turn a loose idea into a system boundary.",
    body:
      "Start by defining what the project is allowed to become: public portfolio, private source repos, no invented metrics, screenshot review before deploy.",
    log: ["scope: public evidence lab", "boundary: source repos stay private", "output: inspectable project surface"],
  },
  {
    key: "context",
    label: "context",
    title: "Give the agent persistent project memory.",
    body:
      "Context files make the workspace legible before any model starts editing: project rules, handover state, proof assets, current visual direction.",
    log: ["read AGENTS.md", "read context/handover.md", "map src + public/proof", "detect dirty working tree"],
  },
  {
    key: "rules",
    label: "rules",
    title: "Install rules that survive the session.",
    body:
      "Local skills turn repeated judgement into reusable operating procedure: audit the workspace, wrap the session, preserve the public/private boundary.",
    log: ["load .agents/skills/workspace-audit", "load .agents/skills/session-wrap", "apply no-deploy-without-approval rule"],
  },
  {
    key: "build",
    label: "build",
    title: "Use agents as builders, not chat boxes.",
    body:
      "The portfolio itself is a composed system: React components, screenshot curation, CSS visual language, browser QA, and Netlify deployment discipline.",
    log: ["implement isolated component", "preserve Claude edits", "append scoped CSS", "keep app single-page"],
  },
  {
    key: "review",
    label: "review",
    title: "Put a gate between AI output and public proof.",
    body:
      "Every useful build still needs human review. The audit gate checks build output, missing assets, privacy terms, stale handover, and visual quality.",
    log: ["npm run build", "asset references exist", "privacy scan", "manual screenshot review"],
  },
  {
    key: "ship",
    label: "ship",
    title: "Only publish after the workspace says it is ready.",
    body:
      "The deployment boundary is explicit. Local experiments can move quickly; GitHub and Netlify only happen after review and direct approval.",
    log: ["commit intentionally", "push only on approval", "deploy Netlify only on approval", "record handover"],
  },
];

const architectureNodes = [
  { label: "AGENTS.md", body: "shared rules for Codex and Claude", icon: FileText },
  { label: "context/handover.md", body: "persistent session memory", icon: GitBranch },
  { label: ".agents/skills", body: "repeatable audit and wrap workflows", icon: Terminal },
  { label: "public/proof", body: "curated project evidence layer", icon: Layers3 },
  { label: "src components", body: "portfolio-as-product interface", icon: Braces },
  { label: "review gate", body: "privacy, build, and visual QA before deploy", icon: ShieldCheck },
];

const capabilityCards = [
  {
    label: "Workspace audit",
    text: "Runs build, checks proof assets, scans for private terms, and reports visual drift before publishing.",
  },
  {
    label: "Session wrap",
    text: "Captures what changed, what is still risky, and where the next agent should start.",
  },
  {
    label: "Proof curation",
    text: "Turns real private builds into public-safe evidence without exposing the source workspace.",
  },
];

export function AISystemsStudio() {
  const [activeKey, setActiveKey] = useState<StudioStepKey>("context");
  const active = useMemo(
    () => studioSteps.find((step) => step.key === activeKey) ?? studioSteps[0],
    [activeKey],
  );

  return (
    <section className="studio-section" id="studio">
      <div className="studio-shell">
        <div className="studio-intro">
          <span className="eyebrow">AI systems studio</span>
          <h2>The portfolio is part of the proof.</h2>
          <p>
            This site is not just a gallery. It is a working example of how I now build: context-rich
            workspaces, explicit agent rules, local skills, proof assets, review gates, and a clear
            public/private boundary.
          </p>
          <div className="studio-receipts" aria-label="AI systems studio receipts">
            <span>React/Vite interface</span>
            <span>Local agent skills</span>
            <span>Screenshot proof layer</span>
            <span>Review-before-deploy gate</span>
          </div>
        </div>

        <div className="studio-console" aria-label="AI-native build loop">
          <div className="studio-console-bar">
            <span />
            <span />
            <span />
            <strong>ai-native build loop</strong>
          </div>

          <div className="studio-loop" role="tablist" aria-label="AI systems build loop">
            {studioSteps.map((step, index) => (
              <button
                key={step.key}
                className={step.key === activeKey ? "active" : ""}
                onClick={() => setActiveKey(step.key)}
                role="tab"
                aria-selected={step.key === activeKey}
                type="button"
              >
                <small>{String(index + 1).padStart(2, "0")}</small>
                <span>{step.label}</span>
              </button>
            ))}
          </div>

          <div className="studio-output" role="tabpanel" aria-label={`${active.label} system step`}>
            <div className="studio-output-copy">
              <span className="eyebrow">{active.label}</span>
              <h3>{active.title}</h3>
              <p>{active.body}</p>
            </div>
            <div className="studio-log" aria-label="Representative agent log">
              <div className="studio-log-head">
                <Play size={13} aria-hidden="true" />
                <span>agent run</span>
              </div>
              {active.log.map((line) => (
                <code key={line}>
                  <CheckCircle2 size={13} aria-hidden="true" />
                  {line}
                </code>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="studio-architecture">
        <div className="studio-map" aria-label="Portfolio workspace architecture">
          <div className="studio-core">
            <Sparkles size={18} aria-hidden="true" />
            <strong>portfolio workspace</strong>
            <span>agent-ready, review-gated, public-safe</span>
          </div>
          {architectureNodes.map((node) => {
            const Icon = node.icon;
            return (
              <article key={node.label}>
                <Icon size={17} aria-hidden="true" />
                <div>
                  <strong>{node.label}</strong>
                  <span>{node.body}</span>
                </div>
              </article>
            );
          })}
        </div>

        <aside className="studio-capabilities">
          <div className="studio-capability-head">
            <LockKeyhole size={18} aria-hidden="true" />
            <div>
              <span className="eyebrow">What this demonstrates</span>
              <h3>Architecture around AI, not just AI usage.</h3>
            </div>
          </div>
          {capabilityCards.map((card) => (
            <article key={card.label}>
              <strong>{card.label}</strong>
              <p>{card.text}</p>
            </article>
          ))}
        </aside>
      </div>

      <div className="studio-session-demo">
        <div className="studio-session-copy">
          <span className="eyebrow">Governed agent session</span>
          <h3>What the working loop looks like in practice.</h3>
          <p>
            The build loop above is the architecture. This is the session behaviour: context read,
            rule check, blocked risky action, human review, and handover.
          </p>
        </div>
        <AgentSessionDemo />
      </div>
    </section>
  );
}
