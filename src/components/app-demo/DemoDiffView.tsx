"use client";

/**
 * Visual extraction of app JSON Diff chrome
 * (blue/green headers + tinted change rows).
 */

type DiffChange = {
  path: string;
  kind: "added" | "removed" | "modified";
  left?: string;
  right?: string;
};

type DemoDiffViewProps = {
  left: string;
  right: string;
  changes: DiffChange[];
  className?: string;
};

const DemoDiffView = ({
  left,
  right,
  changes,
  className = "",
}: DemoDiffViewProps) => {
  return (
    <div
      className={`flex h-full w-full flex-col bg-white dark:bg-dark-surface ${className}`}
    >
      <div className="grid min-h-0 flex-1 grid-cols-2 border-b border-gray-200 dark:border-dark-border">
        <div className="flex min-h-0 flex-col border-r border-gray-200 dark:border-dark-border">
          <div className="border-b border-gray-200 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-900 dark:border-dark-border dark:bg-blue-900/20 dark:text-blue-200">
            JSON 1
          </div>
          <pre className="viewer-scrollbar flex-1 overflow-auto p-3 font-mono text-[11px] leading-5 text-gray-800 dark:text-dark-text">
            {left}
          </pre>
        </div>
        <div className="flex min-h-0 flex-col">
          <div className="border-b border-gray-200 bg-green-50 px-3 py-2 text-xs font-semibold text-green-900 dark:border-dark-border dark:bg-green-900/20 dark:text-green-200">
            JSON 2
          </div>
          <pre className="viewer-scrollbar flex-1 overflow-auto p-3 font-mono text-[11px] leading-5 text-gray-800 dark:text-dark-text">
            {right}
          </pre>
        </div>
      </div>
      <div className="max-h-28 overflow-auto bg-gray-100 p-2 dark:bg-dark-card">
        <p className="mb-1 px-1 text-[11px] font-semibold text-gray-600 dark:text-dark-text-secondary">
          Diff summary
        </p>
        <ul className="space-y-1">
          {changes.map((change) => (
            <li
              key={`${change.kind}-${change.path}`}
              className={`rounded px-2 py-1 font-mono text-[11px] border-l-2 ${
                change.kind === "added"
                  ? "border-green-500 bg-green-100 dark:bg-green-900/20"
                  : change.kind === "removed"
                    ? "border-red-500 bg-red-100 dark:bg-red-900/20"
                    : "border-yellow-500 bg-yellow-100 dark:bg-yellow-900/20"
              }`}
            >
              <span className="font-semibold">{change.path}</span>
              {change.kind === "modified" ? (
                <span>
                  :{" "}
                  <span className="text-red-600 dark:text-red-400">
                    {change.left}
                  </span>{" "}
                  →{" "}
                  <span className="text-green-600 dark:text-green-400">
                    {change.right}
                  </span>
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DemoDiffView;
