import Reveal from "@/components/motion/Reveal";
import { Check, X } from "lucide-react";

const rows = [
    {
        feature: "Free to use",
        bracketview: "Yes",
        jsonViewerStack: "Yes",
        chromeExt: "Yes",
    },
    {
        feature: "Ad-free workspace",
        bracketview: "Yes",
        jsonViewerStack: "Yes",
        chromeExt: "No",
    },
    {
        feature: "Large viewing workspace",
        bracketview: "Yes",
        jsonViewerStack: "No",
        chromeExt: "No",
    },
    {
        feature: "JSON Stats",
        bracketview: "Yes",
        jsonViewerStack: "No",
        chromeExt: "No",
    },
    {
        feature: "JQ Filter Playground",
        bracketview: "Yes (WebAssembly)",
        jsonViewerStack: "No",
        chromeExt: "No",
    },
    {
        feature: "AI JSON Repair",
        bracketview: "Yes",
        jsonViewerStack: "No",
        chromeExt: "No",
    },
    {
        feature: "Type generation (TS, Go, Python…)",
        bracketview: "Yes — 9+ languages",
        jsonViewerStack: "No",
        chromeExt: "No",
    },
    {
        feature: "Encrypted shareable links",
        bracketview: "Yes",
        jsonViewerStack: "No",
        chromeExt: "No",
    },
    {
        feature: "JSON Schema Validator + Generator",
        bracketview: "Yes",
        jsonViewerStack: "No",
        chromeExt: "No",
    },
    {
        feature: "100% client-side (privacy-first)",
        bracketview: "Yes",
        jsonViewerStack: "Yes",
        chromeExt: "Yes",
    },
    {
        feature: "Requires install",
        bracketview: "No",
        jsonViewerStack: "No",
        chromeExt: "Yes (Chrome only)",
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
                    <div className="overflow-x-auto rounded-4xl bg-white p-4 sm:p-8 dark:bg-muted">
                        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                            <thead>
                                <tr className="border-b border-black/10 dark:border-foreground/10">
                                    <th
                                        scope="col"
                                        className="px-4 py-3 font-bold"
                                    >
                                        Feature
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 font-bold"
                                    >
                                        BracketView
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 font-bold"
                                    >
                                        jsonviewer.stack.hu
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 font-bold"
                                    >
                                        JSON Formatter Chrome Extension
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row) => (
                                    <tr
                                        key={row.feature}
                                        className="border-b border-black/5 last:border-0 dark:border-foreground/5"
                                    >
                                        <td className="px-4 py-3 font-medium">
                                            {row.feature}
                                        </td>
                                        <td className="px-4 py-3">
                                            <ComparisonCell
                                                value={row.bracketview}
                                            />
                                        </td>
                                        <td className="px-4 py-3">
                                            <ComparisonCell
                                                value={row.jsonViewerStack}
                                            />
                                        </td>
                                        <td className="px-4 py-3">
                                            <ComparisonCell
                                                value={row.chromeExt}
                                            />
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
