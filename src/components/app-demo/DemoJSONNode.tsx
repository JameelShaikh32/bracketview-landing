"use client";

/**
 * Visual extraction of app/src/components/JSONNodeView.tsx
 * Object/table cards and bezier edges, without React Flow.
 */

import {
  FLOW_LAYOUT,
  flowNodeMatchesQuery,
  jsonToDemoFlow,
  type DemoFlowNode,
  type FlowTableCell,
} from "@/components/app-demo/demoJsonToFlow";
import {
  formatPrimitive,
  getValueColorClass,
  truncateText,
} from "@/components/app-demo/jsonView";
import { Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type DemoJSONNodeProps = {
  data: unknown;
  className?: string;
};

function bezierPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): string {
  const dx = Math.max(36, Math.abs(x2 - x1) * 0.45);
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

function TableCellContent({ cell }: { cell: FlowTableCell }) {
  if (cell.kind === "empty") {
    return (
      <span className="text-gray-300 dark:text-dark-text-secondary">—</span>
    );
  }
  if (cell.kind === "nested") {
    return (
      <span className="text-[10px] text-gray-400 dark:text-dark-text-secondary">
        {`{${cell.childCount ?? 0}}`}
      </span>
    );
  }
  return (
    <span className={`truncate ${getValueColorClass(cell.value ?? null)}`}>
      {formatPrimitive(cell.value ?? null)}
    </span>
  );
}

function ObjectCard({
  node,
  highlighted,
}: {
  node: DemoFlowNode;
  highlighted: boolean;
}) {
  const rows = node.data.rows ?? [];
  return (
    <div
      className={`absolute rounded-md border bg-white text-xs shadow-sm dark:bg-dark-card ${
        highlighted
          ? "border-amber-400 ring-2 ring-amber-400/60 dark:border-amber-300"
          : "border-gray-200 dark:border-dark-border"
      }`}
      style={{
        left: node.x,
        top: node.y,
        width: node.width,
      }}
    >
      <span className="absolute top-1/2 -left-1.5 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-gray-800 dark:bg-gray-200" />
      {rows.length === 0 ? (
        <div className="px-2.5 py-2 font-mono text-gray-400 dark:text-dark-text-secondary">
          {"{ }"}
        </div>
      ) : (
        rows.map((row, index) => (
          <div
            key={`${row.key}-${index}`}
            className="relative flex h-7 items-center justify-between gap-3 border-b border-gray-100 px-2.5 font-mono last:border-b-0 dark:border-dark-border-light"
          >
            {row.key ? (
              <span className="min-w-0 truncate text-gray-700 dark:text-dark-text">
                {truncateText(row.key, 28)}
              </span>
            ) : null}
            {row.kind === "primitive" ? (
              <span
                className={`min-w-0 truncate ${getValueColorClass(row.value ?? null)}`}
              >
                {formatPrimitive(row.value ?? null)}
              </span>
            ) : (
              <span className="shrink-0 text-[10px] text-gray-400 dark:text-dark-text-secondary">
                {`{${row.childCount ?? 0}}`}
              </span>
            )}
            {row.kind === "nested" ? (
              <span className="absolute top-1/2 -right-1.5 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-gray-800 dark:bg-gray-200" />
            ) : null}
          </div>
        ))
      )}
      {node.data.extraRows ? (
        <div className="px-2.5 py-1 text-[10px] text-gray-400 dark:text-dark-text-secondary">
          +{node.data.extraRows} more
        </div>
      ) : null}
    </div>
  );
}

function TableCard({
  node,
  highlighted,
}: {
  node: DemoFlowNode;
  highlighted: boolean;
}) {
  const columns = node.data.columns ?? [];
  const tableRows = node.data.tableRows ?? [];
  const gridTemplateColumns = `${FLOW_LAYOUT.tableRowLabelWidth}px repeat(${Math.max(columns.length, 1)}, ${FLOW_LAYOUT.tableCellWidth}px)`;

  return (
    <div
      className={`absolute rounded-md border bg-white text-[11px] shadow-sm dark:bg-dark-card ${
        highlighted
          ? "border-amber-400 ring-2 ring-amber-400/60 dark:border-amber-300"
          : "border-gray-200 dark:border-dark-border"
      }`}
      style={{
        left: node.x,
        top: node.y,
        width: node.width,
      }}
    >
      <span className="absolute top-1/2 -left-1.5 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-gray-800 dark:bg-gray-200" />
      <div
        className="grid border-b border-gray-200 bg-gray-50 font-semibold text-gray-600 dark:border-dark-border dark:bg-dark-hover dark:text-dark-text-secondary"
        style={{ gridTemplateColumns }}
      >
        <div className="px-2 py-1.5" />
        {columns.map((column) => (
          <div key={column} className="truncate px-2 py-1.5 font-mono">
            {truncateText(column, 16)}
          </div>
        ))}
      </div>
      {tableRows.map((row, rowIndex) => (
        <div
          key={`${row.rowKey}-${rowIndex}`}
          className="grid border-b border-gray-100 last:border-b-0 dark:border-dark-border-light"
          style={{ gridTemplateColumns }}
        >
          <div className="truncate px-2 py-1.5 font-mono text-gray-700 dark:text-dark-text">
            {truncateText(row.rowKey, 14)}
          </div>
          {row.cells.map((cell, colIndex) => (
            <div
              key={`${row.rowKey}-${colIndex}`}
              className="relative truncate px-2 py-1.5 font-mono"
            >
              <TableCellContent cell={cell} />
              {cell.kind === "nested" ? (
                <span className="absolute top-1/2 -right-1.5 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-gray-800 dark:bg-gray-200" />
              ) : null}
            </div>
          ))}
        </div>
      ))}
      {node.data.extraRows || node.data.extraColumns ? (
        <div className="px-2 py-1 text-[10px] text-gray-400 dark:text-dark-text-secondary">
          {node.data.extraRows ? `+${node.data.extraRows} rows` : null}
          {node.data.extraRows && node.data.extraColumns ? " · " : null}
          {node.data.extraColumns ? `+${node.data.extraColumns} cols` : null}
        </div>
      ) : null}
    </div>
  );
}

const DemoJSONNode = ({ data, className = "" }: DemoJSONNodeProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [frame, setFrame] = useState({ width: 0, height: 0 });
  const graph = useMemo(() => jsonToDemoFlow(data), [data]);

  const bounds = useMemo(() => {
    if (graph.nodes.length === 0) {
      return { width: 320, height: 200 };
    }
    const maxX = Math.max(...graph.nodes.map((node) => node.x + node.width));
    const maxY = Math.max(...graph.nodes.map((node) => node.y + node.height));
    return { width: maxX + 24, height: maxY + 24 };
  }, [graph.nodes]);

  const nodeById = useMemo(() => {
    const map = new Map<string, DemoFlowNode>();
    for (const node of graph.nodes) map.set(node.id, node);
    return map;
  }, [graph.nodes]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (!rect) return;
      setFrame({ width: rect.width, height: rect.height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scale =
    frame.width > 0 && frame.height > 0
      ? Math.min(
          1,
          (frame.width - 24) / bounds.width,
          (frame.height - 56) / bounds.height,
        )
      : 1;

  return (
    <div
      ref={wrapRef}
      className={`relative h-full w-full overflow-hidden bg-white dark:bg-dark-surface ${className}`}
      style={{ fontFamily: "var(--font-fira-code), monospace" }}
    >
      <div className="absolute inset-0 bg-size-[18px_18px] bg-[radial-gradient(circle,#d1d5db_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(circle,#30363d_1.2px,transparent_1.2px)]" />

      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pt-8">
        <div
          className="relative"
          style={{
            width: bounds.width * scale,
            height: bounds.height * scale,
          }}
        >
          <div
            className="absolute top-0 left-0 origin-top-left"
            style={{
              width: bounds.width,
              height: bounds.height,
              transform: `scale(${scale})`,
            }}
            role="img"
            aria-label="JSON node view"
          >
          <svg
            className="pointer-events-none absolute inset-0 text-gray-400 dark:text-dark-border"
            width={bounds.width}
            height={bounds.height}
            aria-hidden
          >
            {graph.edges.map((edge) => {
              const source = nodeById.get(edge.source);
              const target = nodeById.get(edge.target);
              if (!source || !target) return null;
              const x1 = source.x + source.width;
              const y1 = source.y + edge.sourceOffsetY;
              const x2 = target.x;
              const y2 = target.y + target.height / 2;
              return (
                <path
                  key={edge.id}
                  d={bezierPath(x1, y1, x2, y2)}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
              );
            })}
          </svg>

          {graph.nodes.map((node) => {
            const highlighted = flowNodeMatchesQuery(node.data, searchQuery);
            return node.type === "table" ? (
              <TableCard
                key={node.id}
                node={node}
                highlighted={highlighted}
              />
            ) : (
              <ObjectCard
                key={node.id}
                node={node}
                highlighted={highlighted}
              />
            );
          })}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-3 z-10 flex justify-end px-3">
        <label className="pointer-events-auto relative block">
          <Search className="pointer-events-none absolute top-1/2 left-2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search JSON"
            aria-label="Search JSON"
            className="h-8 w-44 rounded-md border border-gray-200 bg-white/95 pr-2 pl-7 text-xs text-gray-800 shadow-sm outline-none placeholder:text-gray-400 focus:border-gray-400 dark:border-dark-border dark:bg-dark-card/95 dark:text-dark-text dark:focus:border-dark-text-secondary"
          />
        </label>
      </div>
    </div>
  );
};

export default DemoJSONNode;
