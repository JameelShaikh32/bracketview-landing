"use client";

/** Extracted from app/src/components/viewer/NodeStatsBar.tsx */

type NodeStatsBarProps = {
  path: string;
  nodeCount: number;
  depth: number;
  typeLabel: string;
};

const NodeStatsBar = ({
  path,
  nodeCount,
  depth,
  typeLabel,
}: NodeStatsBarProps) => {
  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-gray-200 px-3 py-1.5 text-[11px] text-gray-600 dark:border-dark-border dark:text-dark-text-secondary">
      <span>
        Path:{" "}
        <code className="rounded bg-gray-100 px-1 py-0.5 text-gray-800 dark:bg-dark-hover dark:text-dark-text">
          {path}
        </code>
      </span>
      <span>Type: {typeLabel}</span>
      <span>Nodes: {nodeCount.toLocaleString()}</span>
      <span>Depth: {depth}</span>
    </div>
  );
};

export default NodeStatsBar;
