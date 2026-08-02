import Reveal from "@/components/motion/Reveal";
import { Check, X } from "lucide-react";

const rows = [
  {
    feature: "Free to use",
    bracketview: "Yes",
    otherTools: "Yes",
  },
  {
    feature: "Ad-free workspace",
    bracketview: "Yes",
    otherTools: "Varies",
  },
  {
    feature: "Large viewing workspace",
    bracketview: "Yes",
    otherTools: "No",
  },
  {
    feature: "JSON Stats",
    bracketview: "Yes",
    otherTools: "No",
  },
  {
    feature: "JQ Filter Playground",
    bracketview: "Yes (WebAssembly)",
    otherTools: "No",
  },
  {
    feature: "AI JSON Repair",
    bracketview: "Yes",
    otherTools: "No",
  },
  {
    feature: "Type generation (TS, Go, Python…)",
    bracketview: "Yes — 9+ languages",
    otherTools: "No",
  },
  {
    feature: "Encrypted shareable links",
    bracketview: "Yes",
    otherTools: "No",
  },
  {
    feature: "Webhook capture & inspect",
    bracketview: "Yes",
    otherTools: "No",
  },
  {
    feature: "JSON Schema Validator + Generator",
    bracketview: "Yes",
    otherTools: "No",
  },
  {
    feature: "Large file uploads (50 MB)",
    bracketview: "Pro",
    otherTools: "Varies",
  },
  {
    feature: "Performance Mode (large JSON)",
    bracketview: "Pro",
    otherTools: "Varies",
  },
  {
    feature: "Unlimited AI & snapshots",
    bracketview: "Pro",
    otherTools: "Varies",
  },
  {
    feature: "100% client-side (privacy-first)",
    bracketview: "Yes",
    otherTools: "Yes",
  },
  {
    feature: "Requires install",
    bracketview: "No",
    otherTools: "Varies",
  },
];

const ComparisonCell = ({ value }: { value: string }) => {
  if (value.startsWith("Yes")) {
    return (
      <span className="inline-flex items-center gap-2">
        <Check
          size={16}
          strokeWidth={2.5}
          className="shrink-0 text-emerald-600 dark:text-emerald-400"
          aria-hidden
        />
        <span>{value}</span>
      </span>
    );
  }

  if (value.startsWith("No")) {
    return (
      <span className="inline-flex items-center gap-2">
        <X
          size={16}
          strokeWidth={2.5}
          className="shrink-0 text-red-600 dark:text-red-400"
          aria-hidden
        />
        <span>{value}</span>
      </span>
    );
  }

  return <span>{value}</span>;
};

const ComparisonTable = () => {
  return (
    <section
      id="comparison"
      aria-label="BracketView compared to alternatives"
      className="relative w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full border border-black px-5 py-1.5 text-sm font-medium dark:border-foreground">
              Comparison
            </span>
            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-bold leading-snug sm:text-4xl md:text-[2.75rem]">
              How BracketView compares to other JSON tools
            </h2>
          </div>
        </Reveal>

        <Reveal>
          {/* Mobile card layout */}
          <div className="space-y-3 rounded-4xl bg-white p-4 sm:hidden dark:bg-muted">
            {rows.map((row) => (
              <div
                key={row.feature}
                className="rounded-2xl border border-black/10 p-4 dark:border-foreground/10"
              >
                <p className="font-bold">{row.feature}</p>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex items-start justify-between gap-3">
                    <span className="shrink-0 font-medium text-black/60 dark:text-foreground/60">
                      BracketView
                    </span>
                    <ComparisonCell value={row.bracketview} />
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="shrink-0 font-medium text-black/60 dark:text-foreground/60">
                      Other tools
                    </span>
                    <ComparisonCell value={row.otherTools} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto rounded-4xl bg-white p-4 sm:block sm:p-8 dark:bg-muted">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-foreground/10">
                  <th scope="col" className="px-4 py-3 font-bold">
                    Feature
                  </th>
                  <th scope="col" className="px-4 py-3 font-bold">
                    BracketView
                  </th>
                  <th scope="col" className="px-4 py-3 font-bold">
                    Other JSON tools
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-black/5 last:border-0 dark:border-foreground/5"
                  >
                    <td className="px-4 py-3 font-medium">{row.feature}</td>
                    <td className="px-4 py-3">
                      <ComparisonCell value={row.bracketview} />
                    </td>
                    <td className="px-4 py-3">
                      <ComparisonCell value={row.otherTools} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ComparisonTable;
