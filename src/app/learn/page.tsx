import { learnClusters, learnPageList } from "@/app/data/learnPages";
import Badge from "@/components/ui/Badge";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = createPageMetadata({
  path: "/learn",
  title: "Learn JSON — Tutorials, Guides & AEO Answers | BracketView",
  description:
    "Developer learning hub for JSON, JSONPath, jq, validation, diffs, and API debugging — answer-first guides optimized for search and AI retrieval.",
});

export default function LearnHubPage() {
  return (
    <main className="w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Badge>Developer learning center</Badge>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
          Learn JSON tooling the answer-first way
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base dark:text-foreground/70">
          Direct answers, steps, examples, and FAQs — built for developers and
          optimized for ChatGPT, Claude, Gemini, and Perplexity retrieval.
        </p>

        <div className="mt-12 space-y-10">
          {learnClusters.map((cluster) => {
            const pages = learnPageList.filter(
              (page) => page.cluster === cluster.id,
            );
            if (!pages.length) return null;
            return (
              <section
                key={cluster.id}
                aria-labelledby={`cluster-${cluster.id}`}
              >
                <h2
                  id={`cluster-${cluster.id}`}
                  className="text-2xl font-bold"
                >
                  {cluster.title}
                </h2>
                <p className="mt-2 text-sm text-black/65 dark:text-foreground/65">
                  {cluster.description}
                </p>
                <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {pages.map((page) => (
                    <li key={page.slug}>
                      <Link
                        href={`/learn/${page.slug}`}
                        className="block rounded-3xl bg-white p-5 transition-colors hover:bg-accent/10 dark:bg-muted dark:hover:bg-accent-dark/20"
                      >
                        <p className="font-bold">{page.title}</p>
                        <p className="mt-2 line-clamp-2 text-sm text-black/65 dark:text-foreground/65">
                          {page.answerFirst}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
