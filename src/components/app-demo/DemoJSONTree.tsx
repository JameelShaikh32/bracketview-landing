"use client";

/**
 * Visual extraction of app/src/components/JSONTreeViewer.tsx
 * Same row chrome, type colors, breadcrumbs, and stats bar.
 */

import NodeStatsBar from "@/components/app-demo/NodeStatsBar";
import PathBreadcrumbs from "@/components/app-demo/PathBreadcrumbs";
import {
  buildFlatRows,
  countNodes,
  formatValue,
  getValueColor,
  getValueType,
  maxDepthOf,
} from "@/components/app-demo/jsonTreeUtils";
import { useEffect, useMemo, useState } from "react";

type DemoJSONTreeProps = {
  data: unknown;
  autoExpand?: boolean;
  className?: string;
};

const DemoJSONTree = ({
  data,
  autoExpand = true,
  className = "",
}: DemoJSONTreeProps) => {
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(["$"]));
  const [selectedPath, setSelectedPath] = useState("$");

  useEffect(() => {
    if (!autoExpand) {
      setExpanded(new Set(["$"]));
      return;
    }
    setExpanded(new Set(["$"]));
    const timer = window.setTimeout(() => {
      setExpanded((prev) => {
        const next = new Set(prev);
        next.add("$.user");
        next.add("$.meta");
        next.add("$.data");
        next.add("$.details");
        return next;
      });
    }, 350);
    return () => window.clearTimeout(timer);
  }, [autoExpand, data]);

  const rows = useMemo(
    () => buildFlatRows(data, expanded, 6),
    [data, expanded],
  );
  const nodeCount = useMemo(() => countNodes(data), [data]);
  const depth = useMemo(() => maxDepthOf(data), [data]);
  const selectedRow = rows.find((row) => row.path === selectedPath) ?? rows[0];

  const toggleExpand = (path: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  };

  return (
    <div
      className={`flex h-full w-full flex-col bg-white dark:bg-dark-surface ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-gray-200 px-3 py-2 dark:border-dark-border">
        <PathBreadcrumbs
          path={selectedPath}
          onNavigate={(path) => {
            setSelectedPath(path);
            setExpanded((prev) => new Set(prev).add(path));
          }}
        />
      </div>
      <NodeStatsBar
        path={selectedPath}
        nodeCount={nodeCount}
        depth={depth}
        typeLabel={getValueType(selectedRow?.value)}
      />
      <div
        className="viewer-scrollbar min-h-0 flex-1 overflow-auto p-2"
        role="tree"
        aria-label="JSON tree"
      >
        <div className="text-sm" style={{ fontFamily: "monospace" }}>
          {rows.map((row) => (
            <div
              key={row.id}
              role="treeitem"
              aria-expanded={row.isComplex ? row.isExpanded : undefined}
              className={`flex w-full cursor-pointer items-center py-0.5 pr-2 select-none hover:bg-gray-50 dark:hover:bg-dark-hover ${
                selectedPath === row.path
                  ? "bg-amber-50 dark:bg-amber-900/20"
                  : ""
              }`}
              style={{ paddingLeft: `${row.level * 16 + 4}px` }}
              onClick={() => {
                setSelectedPath(row.path);
                if (row.isComplex) toggleExpand(row.path);
              }}
            >
              {row.isComplex ? (
                <span
                  className="mr-1 w-4 shrink-0 text-xs text-gray-500 dark:text-gray-400"
                  aria-hidden
                >
                  {row.isExpanded ? "▼" : "▶"}
                </span>
              ) : (
                <span className="mr-1 w-4 shrink-0" />
              )}
              <span className="font-medium text-gray-700 dark:text-dark-text">
                {row.keyName}
                {!row.isComplex ? ":" : ""}
              </span>
              {row.isComplex ? (
                <span className="ml-2 text-xs text-gray-500 dark:text-dark-text-secondary">
                  {Array.isArray(row.value)
                    ? `[${row.childCount}]`
                    : `{${row.childCount}}`}
                </span>
              ) : (
                <span className={`ml-2 ${getValueColor(row.value)}`}>
                  {formatValue(row.value)}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoJSONTree;
