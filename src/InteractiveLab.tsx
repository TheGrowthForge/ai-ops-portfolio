import { useMemo, useState } from "react";
import { Check, MapPin, RotateCcw } from "lucide-react";

type LabKey = "sources" | "queue" | "triage";

const LAB_TABS: Array<{
  key: LabKey;
  label: string;
  sub: string;
  project: string;
  explain: string;
}> = [
  {
    key: "sources",
    label: "Source review",
    sub: "claims don't ship unverified",
    project: "UK School AI Policy",
    explain:
      "Every claim in a policy pack is pinned to named sources. Nothing reaches a customer — or even a human reviewer — until each source behind it checks out. This is the discipline that makes the work defensible.",
  },
  {
    key: "queue",
    label: "Action queue",
    sub: "scattered work becomes one list",
    project: "Job Search Control Room",
    explain:
      "A real search sprawls across tabs, spreadsheets and chats. The console collapses it into one Today list with a visible finish line — the same shape as the operations dashboards I build for the business.",
  },
  {
    key: "triage",
    label: "Research triage",
    sub: "research becomes a ranked queue",
    project: "Events / Research Console",
    explain:
      "Public research is only useful if you can compare it. Score it, filter it, rank it — and forty open tabs become a shortlist you can actually act on.",
  },
];

/* ---------- 1. source review ---------- */

const SOURCES = [
  { id: "dfe", name: "DfE — Generative AI in education", ref: "policy paper" },
  { id: "jcq", name: "JCQ — AI use in assessments", ref: "centre guidance" },
  { id: "ico", name: "ICO — AI and data protection", ref: "regulator guidance" },
  { id: "ofsted", name: "Ofsted — approach to AI", ref: "published statement" },
];

function SourceReviewLab() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const count = SOURCES.filter((s) => checked[s.id]).length;
  const cleared = count === SOURCES.length;

  return (
    <div className="lab-build">
      <div className="lab-toolbar">
        <span>source review</span>
        <strong className={cleared ? "is-ok" : ""}>{cleared ? "cleared for review" : "draft — unverified"}</strong>
        <button className="lab-reset" onClick={() => setChecked({})} type="button" aria-label="Reset">
          <RotateCcw size={13} aria-hidden="true" />
        </button>
      </div>
      <div className="lab-body">
        <p className="lab-claim">
          “Schools should adopt an AI policy aligned with current DfE, JCQ and ICO guidance.”
        </p>
        <p className="lab-hint">Tap each source to verify it — a claim only clears once everything behind it checks out.</p>
        <div className="lab-rows">
          {SOURCES.map((source) => (
            <button
              key={source.id}
              className={`lab-row${checked[source.id] ? " on" : ""}`}
              onClick={() => setChecked((c) => ({ ...c, [source.id]: !c[source.id] }))}
              type="button"
              aria-pressed={Boolean(checked[source.id])}
            >
              <span className="lab-mark">{checked[source.id] ? <Check size={13} aria-hidden="true" /> : null}</span>
              <span className="lab-row-name">{source.name}</span>
              <span className="lab-row-ref">{source.ref}</span>
            </button>
          ))}
        </div>
        <div className={`lab-result${cleared ? " is-ok" : ""}`}>
          {cleared
            ? "All four sources verified — the claim can go to a human reviewer."
            : `${count} / ${SOURCES.length} sources verified — the claim is held.`}
        </div>
      </div>
    </div>
  );
}

/* ---------- 2. action queue ---------- */

const TASKS = [
  "Tailor the CV for the AI-ops role",
  "Send three follow-up emails",
  "Research two target companies",
  "Update the application tracker",
  "Prep answers for Thursday's call",
];

function ActionQueueLab() {
  const [done, setDone] = useState<boolean[]>(() => TASKS.map(() => false));
  const count = done.filter(Boolean).length;
  const clear = count === TASKS.length;

  return (
    <div className="lab-build">
      <div className="lab-toolbar">
        <span>today — action queue</span>
        <strong className={clear ? "is-ok" : ""}>
          {count} / {TASKS.length} done
        </strong>
        <button className="lab-reset" onClick={() => setDone(TASKS.map(() => false))} type="button" aria-label="Reset">
          <RotateCcw size={13} aria-hidden="true" />
        </button>
      </div>
      <div className="lab-body">
        <div className="lab-progress" aria-hidden="true">
          <span style={{ width: `${(count / TASKS.length) * 100}%` }} />
        </div>
        <p className="lab-hint">Tick items off — the whole search collapses into one short list you can finish.</p>
        <div className="lab-rows">
          {TASKS.map((task, index) => (
            <button
              key={task}
              className={`lab-row${done[index] ? " on" : ""}`}
              onClick={() => setDone((d) => d.map((v, i) => (i === index ? !v : v)))}
              type="button"
              aria-pressed={done[index]}
            >
              <span className="lab-mark">{done[index] ? <Check size={13} aria-hidden="true" /> : null}</span>
              <span className={`lab-row-name${done[index] ? " struck" : ""}`}>{task}</span>
            </button>
          ))}
        </div>
        <div className={`lab-result${clear ? " is-ok" : ""}`}>
          {clear
            ? "Queue clear — that's the day. Nothing scattered, nothing forgotten."
            : `${TASKS.length - count} left — one surface, no lost threads.`}
        </div>
      </div>
    </div>
  );
}

/* ---------- 3. research triage ---------- */

const LEADS = [
  { name: "Schools AI procurement forum", score: 92, tag: "nearby", soon: true },
  { name: "EdTech operations roundtable", score: 78, tag: "high fit", soon: false },
  { name: "Trust leaders network — autumn", score: 64, tag: "nearby", soon: false },
  { name: "AI governance webinar", score: 55, tag: "high fit", soon: true },
  { name: "Regional bursars conference", score: 38, tag: "low fit", soon: true },
];

const FILTERS: Array<{ key: string; label: string }> = [
  { key: "all", label: "All" },
  { key: "nearby", label: "Nearby" },
  { key: "fit", label: "High fit" },
  { key: "soon", label: "Soon" },
];

function ResearchTriageLab() {
  const [filter, setFilter] = useState("all");
  const shown = useMemo(
    () =>
      LEADS.filter((lead) => {
        if (filter === "nearby") return lead.tag === "nearby";
        if (filter === "fit") return lead.tag === "high fit";
        if (filter === "soon") return lead.soon;
        return true;
      }).sort((a, b) => b.score - a.score),
    [filter],
  );

  return (
    <div className="lab-build">
      <div className="lab-toolbar">
        <span>research triage</span>
        <strong>
          showing {shown.length} of {LEADS.length}
        </strong>
      </div>
      <div className="lab-body">
        <p className="lab-hint">Filter the pile — public research becomes a ranked shortlist, not forty open tabs.</p>
        <div className="lab-filters">
          {FILTERS.map((option) => (
            <button
              key={option.key}
              className={filter === option.key ? "active" : ""}
              onClick={() => setFilter(option.key)}
              type="button"
              aria-pressed={filter === option.key}
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="lab-leads">
          {shown.map((lead) => {
            const band = lead.score >= 75 ? "high" : lead.score >= 52 ? "mid" : "low";
            return (
              <article key={lead.name}>
                <span className={`lab-score band-${band}`}>{lead.score}</span>
                <div className="lab-lead-body">
                  <strong>{lead.name}</strong>
                  <span className="lab-lead-tag">
                    <MapPin size={11} aria-hidden="true" />
                    {lead.tag}
                    {lead.soon ? " · soon" : ""}
                  </span>
                </div>
              </article>
            );
          })}
          {shown.length === 0 ? <p className="lab-empty">No leads match that filter.</p> : null}
        </div>
      </div>
    </div>
  );
}

/* ---------- shell ---------- */

export function InteractiveLab() {
  const [tab, setTab] = useState<LabKey>("sources");
  const active = LAB_TABS.find((entry) => entry.key === tab) ?? LAB_TABS[0];

  return (
    <section className="lab-section" id="lab">
      <div className="section-heading compact">
        <span className="eyebrow">Interactive lab</span>
        <h2>Don't take my word for it — use the surfaces.</h2>
        <p>Three working miniatures of the real consoles. Synthetic data, but the interaction is the genuine article.</p>
      </div>

      <div className="lab-shell">
        <div className="lab-tabs" role="tablist" aria-label="Interactive lab demos">
          {LAB_TABS.map((entry) => (
            <button
              key={entry.key}
              role="tab"
              aria-selected={entry.key === tab}
              className={`lab-tab${entry.key === tab ? " active" : ""}`}
              onClick={() => setTab(entry.key)}
              type="button"
            >
              <strong>{entry.label}</strong>
              <span>{entry.sub}</span>
            </button>
          ))}
        </div>

        <div className="lab-stage" role="tabpanel" aria-label={`${active.label} demo`}>
          {tab === "sources" ? <SourceReviewLab /> : null}
          {tab === "queue" ? <ActionQueueLab /> : null}
          {tab === "triage" ? <ResearchTriageLab /> : null}
          <aside className="lab-caption">
            <span className="eyebrow">From</span>
            <h3>{active.project}</h3>
            <p>{active.explain}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
