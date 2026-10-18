import { DESKTOP_VERSION } from "@/app/data/desktop";
import Reveal from "@/components/motion/Reveal";
import Link from "next/link";

const items = [
  {
    title: "Inspect truncated table cells",
    detail:
      "Long strings in Table view stay clamped for readability. Reveal the full value on hover, click, or keyboard focus — including on touch screens. The truncated badge hides while the value is open.",
  },
  {
    title: "Clearer Node view limits",
    detail:
      "Large graphs show a visible n of m count when capped at 250 nodes, so you know you’re looking at a projection, not the entire document. Use Text or Tree for everything.",
  },
] as const;

const WhatsNew = () => {
  return (
    <section
      id="whats-new"
      aria-labelledby="whats-new-heading"
      className="w-full px-4 pb-8 pt-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rounded-4xl bg-white p-6 sm:p-10 dark:bg-muted">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent-dark dark:text-accent">
                  October 2026
                </p>
                <h2
                  id="whats-new-heading"
                  className="mt-2 text-2xl font-bold sm:text-3xl"
                >
                  What’s new
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/70 dark:text-foreground/70">
                  BracketView {DESKTOP_VERSION} — clearer Table cell inspection and
                  honest Node view limits in the workspace and desktop app.
                </p>
              </div>
              <Link
                href="/changelog"
                className="inline-flex min-h-11 shrink-0 items-center text-sm font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
              >
                Full changelog
              </Link>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {items.map((item) => (
                <li key={item.title}>
                  <p className="text-sm font-bold">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-black/70 dark:text-foreground/70">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WhatsNew;
