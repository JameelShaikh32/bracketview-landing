import { DESKTOP_VERSION } from "@/app/data/desktop";
import Reveal from "@/components/motion/Reveal";
import Link from "next/link";

const items = [
  {
    title: "Dual mode",
    detail:
      "Turn on Dual mode in Workspace settings to keep the text editor on the left and Tree, Graph, Node, or Table on the right. The header tabs choose the right pane.",
  },
  {
    title: "Page zoom is separate from font size",
    detail:
      "Ctrl+Shift++ and Ctrl+Shift+- change the editor font. Ctrl++ and Ctrl+- zoom the page again.",
  },
  {
    title: "Tree search shows the whole node",
    detail:
      "When a search hits a field, the tree keeps every sibling on that object or array item, not only the matching row.",
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
                  BracketView {DESKTOP_VERSION} — Dual mode beside the editor,
                  page zoom separate from font size, and tree search that keeps
                  the whole node.
                </p>
              </div>
              <Link
                href="/changelog"
                className="inline-flex min-h-11 shrink-0 items-center text-sm font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
              >
                Full changelog
              </Link>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
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
