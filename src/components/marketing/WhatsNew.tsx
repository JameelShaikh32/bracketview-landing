import { DESKTOP_VERSION } from "@/app/data/desktop";
import Reveal from "@/components/motion/Reveal";
import Link from "next/link";

const items = [
  {
    title: "Workspace settings",
    detail: "Theme, editor font, and UI language live in the header gear — moved off the profile page.",
  },
  {
    title: "Account menu",
    detail: "Manage Profile and Sign out sit on the profile photo. There is no separate header Sign out.",
  },
  {
    title: "Tree search",
    detail: "Search is on the tree toolbar, before Expand all.",
  },
  {
    title: "AI panel",
    detail: "Slides in from the right, next to keyboard shortcuts.",
  },
  {
    title: "Route loading",
    detail: "Layout skeletons instead of a blank screen.",
  },
  {
    title: "JSON history",
    detail: "Signed-in history gets a custom date filter and one-click copy of an entry’s JSON.",
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
                  August 2026
                </p>
                <h2
                  id="whats-new-heading"
                  className="mt-2 text-2xl font-bold sm:text-3xl"
                >
                  What’s new
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/70 dark:text-foreground/70">
                  Node and Table views, nine UI languages, and Windows {DESKTOP_VERSION} —
                  plus a few workspace polish items. None of these require Pro.
                </p>
              </div>
              <Link
                href="/changelog"
                className="inline-flex min-h-11 shrink-0 items-center text-sm font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
              >
                Full changelog
              </Link>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
