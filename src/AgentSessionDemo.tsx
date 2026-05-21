import { useCallback, useEffect, useRef, useState } from "react";
import { RotateCcw, ShieldAlert } from "lucide-react";
import { sessionSteps } from "./projects";

const STEP_MS = 1250;
const BLOCK_HOLD_MS = 750;

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function AgentSessionDemo() {
  const total = sessionSteps.length;
  const [revealed, setRevealed] = useState(0);
  const [running, setRunning] = useState(false);
  const startedRef = useRef(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  const play = useCallback(() => {
    clearTimers();
    if (prefersReducedMotion()) {
      setRevealed(total);
      setRunning(false);
      return;
    }
    setRevealed(0);
    setRunning(true);
    let elapsed = 0;
    for (let i = 1; i <= total; i += 1) {
      elapsed += STEP_MS + (sessionSteps[i - 1].state === "block" ? BLOCK_HOLD_MS : 0);
      const idx = i;
      timers.current.push(
        window.setTimeout(() => {
          setRevealed(idx);
          if (idx === total) setRunning(false);
        }, elapsed),
      );
    }
  }, [total]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            play();
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [play]);

  useEffect(() => () => clearTimers(), []);

  const done = revealed >= total && !running;
  const status = done ? "session complete" : running ? "running" : "ready";

  return (
    <div className="agent-demo" ref={rootRef} aria-label="Interactive walk-through of a governed agent session">
      <div className="agent-demo-bar">
        <span className="agent-demo-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <strong>governed agent session</strong>
        <span className={`agent-demo-status${done ? " is-done" : running ? " is-live" : ""}`}>{status}</span>
      </div>

      <div className="agent-demo-track" aria-hidden="true">
        {sessionSteps.map((step, index) => (
          <span
            key={step.phase}
            className={`agent-demo-seg state-${step.state}${index < revealed ? " on" : ""}`}
          />
        ))}
      </div>

      <ol className="agent-demo-log">
        {sessionSteps.map((step, index) => {
          const shown = index < revealed;
          const active = running && index === revealed - 1;
          return (
            <li
              key={step.phase}
              className={`agent-demo-step state-${step.state}${shown ? " shown" : ""}${active ? " active" : ""}`}
            >
              <span className="agent-demo-phase">{step.phase}</span>
              <div className="agent-demo-body">
                <p className="agent-demo-line">
                  {step.state === "block" ? <ShieldAlert size={15} aria-hidden="true" /> : null}
                  {step.line}
                </p>
                <p className="agent-demo-detail">{step.detail}</p>
              </div>
              <span className="agent-demo-mark" aria-hidden="true" />
            </li>
          );
        })}
      </ol>

      <div className="agent-demo-foot">
        <p>
          {done
            ? "Six steps — one stopped before it could do harm. The workspace caught it, not luck."
            : "A real session shape: the agent works, a hook stops a mistake, a human signs off."}
        </p>
        <button className="agent-demo-replay" type="button" onClick={play}>
          <RotateCcw size={15} aria-hidden="true" />
          {done ? "Replay session" : "Restart"}
        </button>
      </div>
    </div>
  );
}
