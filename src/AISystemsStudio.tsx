import { useMemo, useState } from "react";
import {
  Braces,
  CheckCircle2,
  CircleSlash,
  FileText,
  GitBranch,
  Layers3,
  LockKeyhole,
  Play,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";

type StudioStepKey = "brief" | "context" | "rules" | "build" | "review" | "ship";

const comparisonRows = [
  ["Blank chat", "Project context"],
  ["Prompt tricks", "Rules + decisions"],
  ["One-off output", "Operating surface"],
  ["Copy / paste", "Tool-connected loop"],
  ["Lost history", "Session handover"],
  ["Hope", "Source review"],
];

const studioSteps: Array<{
  key: StudioStepKey;
  label: string;
  title: string;
  body: string;
  log: string[];
}> = [
  {
    key: "brief",
    label: "scope",
    title: "Define the system first.",
    body:
      "Set the boundary: what the workspace knows, what it can touch, what stays private, and what counts as done.",
    log: ["define public / private boundary", "map current project state", "set output and review criteria"],
  },
  {
    key: "context",
    label: "context",
    title: "Give the agent project memory.",
    body:
      "The workspace carries the architecture, decisions, proof assets, and current state before the next instruction is written.",
    log: ["read AGENTS.md", "read context/handover.md", "load project rules", "map src + public/proof"],
  },
  {
    key: "rules",
    label: "rules",
    title: "Make judgement reusable.",
    body:
      "Constraints that matter more than once become workspace rules: audit proof assets, preserve parallel work, wrap the session.",
    log: ["load /workspace-audit", "load /session-wrap", "enforce no-deploy-without-approval"],
  },
  {
    key: "build",
    label: "build",
    title: "Build the surface.",
    body:
      "Components, data models, screenshots, CSS systems, browser QA, privacy scans, and deployment discipline.",
    log: ["implement scoped component", "preserve parallel edits", "test rendered interface"],
  },
  {
    key: "review",
    label: "review",
    title: "Hold the review gate.",
    body:
      "Source review, visual QA, build checks, privacy scanning, and human sign-off before public output.",
    log: ["npm run build", "asset references exist", "privacy scan", "manual screenshot review"],
  },
  {
    key: "ship",
    label: "ship",
    title: "Ship with memory.",
    body:
      "The next session inherits context, constraints, tools, and review memory instead of starting again.",
    log: ["commit intentionally", "push after approval", "deploy after approval", "record handover"],
  },
];

const architectureNodes = [
  { label: "AGENTS.md", body: "how the agent should behave in this workspace", icon: FileText },
  { label: "context files", body: "business logic, current state, decisions, handover", icon: GitBranch },
  { label: "skills + hooks", body: "repeatable audit, wrap, review, and safety routines", icon: Terminal },
  { label: "source register", body: "evidence layer for claims, policy, and decisions", icon: Layers3 },
  { label: "working code", body: "React surfaces, data flows, screenshots, deploy config", icon: Braces },
  { label: "review gate", body: "human QA before public output or deployment", icon: ShieldCheck },
];

const capabilityCards = [
  {
    label: "Persistent context",
    text: "The agent starts with the business, codebase, visual direction, and current handover already loaded.",
  },
  {
    label: "Operational memory",
    text: "Important decisions and constraints survive the current chat, so the next session does not restart from zero.",
  },
  {
    label: "Review discipline",
    text: "AI accelerates the work, but source checks, privacy scans, and visual QA decide what gets published.",
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
          <span className="eyebrow">Beyond prompting</span>
          <h2>The workspace is the prompt.</h2>
          <p>
            The strongest AI work happens inside project folders with context, rules, decisions,
            source files, proof assets, and review gates already in place.
          </p>
          <p>
            This portfolio is built the same way: real project surfaces, private source boundaries,
            agent rules, local skills, and public proof assets.
          </p>
          <div className="studio-receipts" aria-label="AI systems studio receipts">
            <span>persistent context</span>
            <span>agent rules</span>
            <span>tool-connected workflows</span>
            <span>human review gates</span>
          </div>
          <blockquote>Prompts are inputs. Workspaces are systems.</blockquote>
        </div>

        <div className="studio-console" aria-label="AI-native build loop">
          <div className="studio-console-bar">
            <span />
            <span />
            <span />
            <strong>chat box versus workspace</strong>
          </div>

          <div className="studio-comparison" aria-label="Transactional AI compared with AI-native workspaces">
            <div className="studio-compare-col is-weak">
              <div className="studio-compare-head">
                <CircleSlash size={15} aria-hidden="true" />
                <strong>transactional AI</strong>
              </div>
              {comparisonRows.map(([weak]) => (
                <span key={weak}>{weak}</span>
              ))}
            </div>
            <div className="studio-compare-col is-strong">
              <div className="studio-compare-head">
                <Sparkles size={15} aria-hidden="true" />
                <strong>AI-native workspace</strong>
              </div>
              {comparisonRows.map(([, strong]) => (
                <span key={strong}>{strong}</span>
              ))}
            </div>
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
            <strong>agent-ready workspace</strong>
            <span>context, rules, tools, source discipline, memory, review</span>
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
              <h3>Architecture around AI.</h3>
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
    </section>
  );
}
