import { useEffect, useRef } from "react";

/**
 * Modal behaviour for the lightbox and project drawer:
 * scroll-lock, Escape-to-close, focus trap, and focus return.
 * Pass a stable onClose (wrap in useCallback) so the effect runs once.
 */
export function useModal<T extends HTMLElement>(onClose: () => void) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    const prevFocus = document.activeElement as HTMLElement | null;
    const docEl = document.documentElement;
    const prevHtmlOverflow = docEl.style.overflowY;
    const prevBodyOverflow = document.body.style.overflowY;
    docEl.style.overflowY = "hidden";
    document.body.style.overflowY = "hidden";

    const focusable = () =>
      node
        ? Array.from(
            node.querySelectorAll<HTMLElement>(
              'a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])',
            ),
          ).filter((el) => el.offsetParent !== null)
        : [];

    focusable()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || !node || !node.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      docEl.style.overflowY = prevHtmlOverflow;
      document.body.style.overflowY = prevBodyOverflow;
      prevFocus?.focus?.();
    };
  }, [onClose]);

  return ref;
}
