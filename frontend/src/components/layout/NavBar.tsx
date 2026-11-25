import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

const sections = [
  { id: "story", label: "Story" },
  { id: "features", label: "Features" },
  { id: "heroes", label: "Heroes" },
  { id: "servers", label: "Servers" },
] as const;

function Logo() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex size-10 shrink-0 -skew-x-6 items-center justify-center border-[length:var(--border-ink-base)] border-ink-black bg-accent-danger shadow-comic-sm"
    >
      <span className="font-display text-xl leading-none font-black tracking-tight text-accent-primary italic [-webkit-text-stroke:2px_var(--color-ink-black)] [paint-order:stroke_fill]">
        HF
      </span>
    </span>
  );
}

/** Returns the id of the section currently in the middle band of the viewport. */
function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sections.map((s) => s.id));

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b-ink-base border-ink-black bg-surface-paper-card">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:bg-accent-primary focus:px-3 focus:py-2 focus:font-display focus:font-extrabold focus:text-text-inverse"
      >
        Skip to content
      </a>

      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
      >
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label="Heroes of the Fracture — home"
        >
          <Logo />
          <span className="font-display text-xl font-extrabold -skew-x-6 text-text-on-paper sm:text-2xl">
            Heroes of the Fracture
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-4 lg:flex">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                className="comic-nav-link"
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button
            variant="default"
            size="lg"
            className="comic-ui-button comic-ui-button--yellow hidden sm:inline-flex"
          >
            PLAY NOW
          </Button>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex size-11 -skew-x-6 items-center justify-center border-[length:var(--border-ink-base)] border-ink-black bg-accent-primary text-text-inverse shadow-comic-sm active:translate-x-px active:translate-y-px active:shadow-comic-pressed lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg
              viewBox="0 0 24 24"
              className="size-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="square"
            >
              {open ? (
                <path d="M5 5l14 14M19 5L5 19" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="mx-4 mb-4 -skew-x-3 border-ink-base border-ink-black bg-surface-paper shadow-comic-sm sm:mx-6 lg:hidden"
      >
        <ul className="flex flex-col gap-1 px-4 py-3 sm:px-6">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                className="comic-nav-link w-full"
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-3 sm:hidden">
            <Button
              variant="default"
              size="lg"
              className="comic-ui-button comic-ui-button--yellow w-full"
              onClick={() => setOpen(false)}
            >
              <span className="comic-ui-button__content">PLAY NOW</span>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
