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
import { AgentSessionDemo } from "./AgentSessionDemo";

type StudioStepKey = "brief" | "context" | "rules" | "build" | "review" | "ship";

const comparisonRows = [
  ["Blank chat box", "Project folder with working context"],
  ["Repeated prompt tricks", "Persistent rules, docs, and decisions"],
  ["One-off outputs", "Operating surfaces that keep state"],
  ["Copy/paste workflow", "Tool-connected execution loop"],
  ["Lost history", "Session wrap and handover memory"],
  ["Hope the answer is right", "Source discipline and human review"],
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
    title: "Define the system before asking the model to work.",
    body:
      "The first job is not writing the perfect prompt. It is setting the boundary: what the workspace is, what it knows, what it can touch, and what must stay private.",
    log: ["define public / private boundary", "map current project state", "set output and review criteria"],
  },
  {
    key: "context",
    label: "context",
    title: "Give the agent persistent project memory.",
    body:
      "The model becomes much stronger when the workspace carries the business logic, architecture, prior decisions, proof assets, and current state before the next instruction is even written.",
    log: ["read AGENTS.md", "read context/handover.md", "load project rules", "map src + public/proof"],
  },
  {
    key: "rules",
    label: "rules",
    title: "Turn repeated judgement into workspace rules.",
    body:
      "If a constraint matters more than once, it should live in the workspace: no deploy without review, preserve other agents' work, audit proof assets, wrap the session for continuity.",
    log: ["load /workspace-audit", "load /session-wrap", "enforce no-deploy-without-approval"],
  },
  {
    key: "build",
    label: "build",
    title: "Use agents as builders, not chat boxes.",
    body:
      "The work then becomes normal engineering: components, data models, screenshots, CSS systems, browser QA, privacy scans, and deployment discipline.",
    log: ["implement scoped component", "preserve parallel edits", "test rendered interface"],
  },
  {
    key: "review",
    label: "review",
    title: "Put a gate between model output and reality.",
    body:
      "The point is not autonomous chaos. The point is leverage with control: source review, visual QA, build checks, privacy scanning, and human sign-off before public output.",
    log: ["npm run build", "asset references exist", "privacy scan", "manual screenshot review"],
  },
  {
    key: "ship",
    label: "ship",
    title: "Ship from an understood workspace.",
    body:
      "The output is not a lucky answer from a clever prompt. It is a shipped surface produced by a workspace that holds context, constraints, tools, and review memory.",
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
            Most people still use AI transactionally: blank box, clever prompt, isolated output, reset.
            My approach is to build persistent AI workspaces where the model has project context before
            it acts.
          </p>
          <p>
            The portfolio itself is part of that proof: real project surfaces, agent rules, source
            discipline, local skills, review gates, and a public/private boundary designed into the
            workspace.
          </p>
          <div className="studio-receipts" aria-label="AI systems studio receipts">
            <span>persistent context</span>
            <span>agent rules</span>
            <span>tool-connected workflows</span>
            <span>human review gates</span>
          </div>
          <blockquote>AI should not be used like a slot machine.</blockquote>
        </div>

        <div className="studio-console" aria-label="AI-native build loop">
          <div className="studio-console-bar">
            <span />
            <span />
            <span />
            <strong>prompting versus workspace architecture</strong>
          </div>

          <div className="studio-comparison" aria-label="Transactional AI compared with AI-native workspaces">
            <div className="studio-compare-col is-weak">
              <div className="studio-compare-head">
                <CircleSlash size={15} aria-hidden="true" />
                <strong>prompt slot machine</strong>
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
              <h3>Architecture around AI, not prompt collection.</h3>
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
