import { Check, X } from "lucide-react";

export type JsonToolComparisonTableProps = {
    columns: string[];
    rows: { feature: string; values: string[] }[];
    caption?: string;
    compact?: boolean;
};

export const ComparisonCell = ({ value }: { value: string }) => {
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

const JsonToolComparisonTable = ({
    columns,
    rows,
    caption,
    compact = false,
}: JsonToolComparisonTableProps) => {
    return (
        <div>
            {caption ? (
                <p
                    className={`mb-4 text-sm leading-relaxed text-black/70 dark:text-foreground/70 ${compact ? "" : "text-center sm:text-left"}`}
                >
                    {caption}
                </p>
            ) : null}

            <div
                className={
                    compact
                        ? "space-y-3 md:hidden"
                        : "space-y-3 sm:hidden"
                }
            >
                {rows.map((row) => (
                    <div
                        key={row.feature}
                        className="rounded-2xl border border-black/10 p-4 dark:border-foreground/10"
                    >
                        <p className="font-bold">{row.feature}</p>
                        <div className="mt-3 space-y-2 text-sm">
                            {columns.map((column, index) => (
                                <div
                                    key={column}
                                    className="flex items-start justify-between gap-3"
                                >
                                    <span className="shrink-0 font-medium text-black/60 dark:text-foreground/60">
                                        {column}
                                    </span>
                                    <ComparisonCell
                                        value={row.values[index] ?? "—"}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div
                className={
                    compact
                        ? "hidden overflow-x-auto md:block"
                        : "hidden overflow-x-auto sm:block"
                }
            >
                <table className="w-full min-w-xl border-collapse text-left text-sm">
                    <thead>
                        <tr className="border-b border-black/10 dark:border-foreground/10">
                            <th scope="col" className="px-3 py-3 font-bold sm:px-4">
                                Feature
                            </th>
                            {columns.map((column) => (
                                <th
                                    key={column}
                                    scope="col"
                                    className="px-3 py-3 font-bold sm:px-4"
                                >
                                    {column}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr
                                key={row.feature}
                                className="border-b border-black/5 last:border-0 dark:border-foreground/5"
                            >
                                <td className="px-3 py-3 font-medium sm:px-4">
                                    {row.feature}
                                </td>
                                {row.values.map((value, index) => (
                                    <td
                                        key={`${row.feature}-${columns[index] ?? index}`}
                                        className="px-3 py-3 sm:px-4"
                                    >
                                        <ComparisonCell value={value} />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JsonToolComparisonTable;
