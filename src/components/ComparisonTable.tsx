import { HOMEPAGE_LEARN_COMPARISON } from "@/app/data/jsonToolComparison";
import JsonToolComparisonTable from "@/components/JsonToolComparisonTable";
import Reveal from "@/components/motion/Reveal";
import Link from "next/link";

const ComparisonTable = () => {
  return (
    <section
      id="comparison"
      aria-label="BracketView compared to JSONLint, JSON Editor Online, and JSONCrack"
      className="relative w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full border border-black px-5 py-1.5 text-sm font-medium dark:border-foreground">
              Comparison
            </span>
            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-bold leading-snug sm:text-4xl md:text-[2.75rem]">
              How BracketView compares to JSONLint, JSON Editor Online, and JSONCrack
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base dark:text-foreground/70">
              Incumbents win on a single job: lint, classic tree edit, or a graph map.
              BracketView is a free online JSON viewer that keeps those jobs next to
              query, diff, schema, and an ad-free workspace.{" "}
              <Link
                href="/learn/best-json-viewer"
                className="font-medium text-accent-dark underline-offset-4 hover:underline dark:text-accent"
              >
                See the full roundup
              </Link>
              .
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-4xl bg-white p-4 sm:p-8 dark:bg-muted">
            <JsonToolComparisonTable
              columns={HOMEPAGE_LEARN_COMPARISON.columns}
              rows={HOMEPAGE_LEARN_COMPARISON.rows}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ComparisonTable;
