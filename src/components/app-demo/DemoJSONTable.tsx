"use client";

/**
 * Visual extraction of app/src/components/JSONTableView.tsx
 * Nested key/value and columnar tables, without list virtualization.
 */

import {
  childCount,
  collectObjectKeys,
  formatPrimitive,
  getValueColorClass,
  isArrayOfObjects,
  isNested,
  isPlainObject,
} from "@/components/app-demo/jsonView";
import { ChevronRight } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";

const AUTO_EXPAND_DEPTH = 1;

type DemoJSONTableProps = {
  data: unknown;
  className?: string;
};

function ExpandToggle({
  expanded,
  onToggle,
  label,
}: {
  expanded: boolean;
  onToggle: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex items-center gap-1 rounded px-1 py-0.5 text-left text-xs text-gray-500 hover:bg-gray-100 dark:text-dark-text-secondary dark:hover:bg-dark-hover"
    >
      <ChevronRight
        className={`h-3.5 w-3.5 shrink-0 transition-transform ${
          expanded ? "rotate-90" : ""
        }`}
      />
      <span className="font-mono">{label}</span>
    </button>
  );
}

function PrimitiveValue({ value }: { value: unknown }) {
  const primitive =
    value === null ||
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
      ? value
      : null;
  const isLongString = typeof primitive === "string" && primitive.length > 48;
  return (
    <span
      className={`min-w-0 font-mono text-xs wrap-anywhere ${
        isLongString ? "line-clamp-2" : ""
      } ${getValueColorClass(primitive)}`}
      title={isLongString ? primitive : undefined}
    >
      {formatPrimitive(primitive)}
    </span>
  );
}

function NestedValue({
  value,
  path,
  depth,
  expandedPaths,
  onToggle,
}: {
  value: unknown;
  path: string;
  depth: number;
  expandedPaths: Set<string>;
  onToggle: (path: string) => void;
}) {
  if (!isNested(value)) {
    return <PrimitiveValue value={value} />;
  }

  const defaultExpanded = depth <= AUTO_EXPAND_DEPTH;
  const expanded = expandedPaths.has(path)
    ? true
    : expandedPaths.has(`!${path}`)
      ? false
      : defaultExpanded;
  const count = childCount(value);
  const label = Array.isArray(value) ? `[${count}]` : `{${count}}`;

  if (!expanded) {
    return (
      <ExpandToggle
        expanded={false}
        onToggle={() => onToggle(path)}
        label={label}
      />
    );
  }

  return (
    <div className="min-w-0">
      <ExpandToggle expanded onToggle={() => onToggle(path)} label={label} />
      <div className="mt-1">
        <JsonTable
          value={value}
          path={path}
          depth={depth + 1}
          expandedPaths={expandedPaths}
          onToggle={onToggle}
        />
      </div>
    </div>
  );
}

function TableShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-auto viewer-scrollbar rounded-md border border-gray-200 dark:border-dark-border ${className}`}
    >
      <table className="w-full border-collapse text-left text-xs">
        {children}
      </table>
    </div>
  );
}

function JsonTable({
  value,
  path,
  depth,
  expandedPaths,
  onToggle,
}: {
  value: unknown;
  path: string;
  depth: number;
  expandedPaths: Set<string>;
  onToggle: (path: string) => void;
}) {
  if (isArrayOfObjects(value)) {
    return (
      <ColumnarTable
        items={value}
        path={path}
        depth={depth}
        expandedPaths={expandedPaths}
        onToggle={onToggle}
      />
    );
  }

  if (Array.isArray(value)) {
    return (
      <IndexedTable
        items={value}
        path={path}
        depth={depth}
        expandedPaths={expandedPaths}
        onToggle={onToggle}
      />
    );
  }

  if (isPlainObject(value)) {
    const entries = Object.entries(value);
    return (
      <TableShell>
        <thead>
          <tr className="bg-gray-50 text-[11px] font-semibold text-gray-500 dark:bg-dark-hover dark:text-dark-text-secondary">
            <th className="w-40 border-b border-gray-200 px-2.5 py-1.5 dark:border-dark-border">
              Key
            </th>
            <th className="border-b border-gray-200 px-2.5 py-1.5 dark:border-dark-border">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {entries.map(([key, child]) => (
            <tr
              key={key}
              className="border-b border-gray-100 last:border-b-0 dark:border-dark-border-light"
            >
              <td className="min-w-0 px-2.5 py-1.5 align-top font-mono text-gray-700 dark:text-dark-text">
                {key}
              </td>
              <td className="min-w-0 overflow-hidden px-2.5 py-1.5 align-top">
                <NestedValue
                  value={child}
                  path={`${path}.${key}`}
                  depth={depth}
                  expandedPaths={expandedPaths}
                  onToggle={onToggle}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </TableShell>
    );
  }

  return <PrimitiveValue value={value} />;
}

function ColumnarTable({
  items,
  path,
  depth,
  expandedPaths,
  onToggle,
}: {
  items: Record<string, unknown>[];
  path: string;
  depth: number;
  expandedPaths: Set<string>;
  onToggle: (path: string) => void;
}) {
  const columns = useMemo(() => collectObjectKeys(items), [items]);

  return (
    <TableShell>
      <thead>
        <tr className="bg-gray-50 text-[11px] font-semibold text-gray-500 dark:bg-dark-hover dark:text-dark-text-secondary">
          <th className="w-12 border-b border-gray-200 px-2.5 py-1.5 dark:border-dark-border">
            #
          </th>
          {columns.map((column) => (
            <th
              key={column}
              className="min-w-0 truncate border-b border-gray-200 px-2.5 py-1.5 font-mono dark:border-dark-border"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr
            key={index}
            className="border-b border-gray-100 last:border-b-0 dark:border-dark-border-light"
          >
            <td className="px-2.5 py-1.5 align-top font-mono text-gray-400 dark:text-dark-text-secondary">
              {index}
            </td>
            {columns.map((column) => (
              <td
                key={column}
                className="min-w-0 overflow-hidden px-2.5 py-1.5 align-top"
              >
                {Object.prototype.hasOwnProperty.call(item, column) ? (
                  <NestedValue
                    value={item[column]}
                    path={`${path}[${index}].${column}`}
                    depth={depth}
                    expandedPaths={expandedPaths}
                    onToggle={onToggle}
                  />
                ) : (
                  <span className="text-gray-300 dark:text-dark-text-secondary">
                    —
                  </span>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableShell>
  );
}

function IndexedTable({
  items,
  path,
  depth,
  expandedPaths,
  onToggle,
}: {
  items: unknown[];
  path: string;
  depth: number;
  expandedPaths: Set<string>;
  onToggle: (path: string) => void;
}) {
  return (
    <TableShell>
      <thead>
        <tr className="bg-gray-50 text-[11px] font-semibold text-gray-500 dark:bg-dark-hover dark:text-dark-text-secondary">
          <th className="w-12 border-b border-gray-200 px-2.5 py-1.5 dark:border-dark-border">
            #
          </th>
          <th className="border-b border-gray-200 px-2.5 py-1.5 dark:border-dark-border">
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr
            key={index}
            className="border-b border-gray-100 last:border-b-0 dark:border-dark-border-light"
          >
            <td className="px-2.5 py-1.5 align-top font-mono text-gray-400 dark:text-dark-text-secondary">
              {index}
            </td>
            <td className="min-w-0 overflow-hidden px-2.5 py-1.5 align-top">
              <NestedValue
                value={item}
                path={`${path}[${index}]`}
                depth={depth}
                expandedPaths={expandedPaths}
                onToggle={onToggle}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </TableShell>
  );
}

const DemoJSONTable = ({ data, className = "" }: DemoJSONTableProps) => {
  const [expandedPaths, setExpandedPaths] = useState<Set<string>>(
    () => new Set(),
  );

  const onToggle = (path: string) => {
    setExpandedPaths((current) => {
      const next = new Set(current);
      const collapsedKey = `!${path}`;
      const defaultExpanded =
        path.split(/\.|\[/).length - 1 <= AUTO_EXPAND_DEPTH;

      if (next.has(path)) {
        next.delete(path);
        next.add(collapsedKey);
      } else if (next.has(collapsedKey)) {
        next.delete(collapsedKey);
        if (!defaultExpanded) next.add(path);
      } else if (defaultExpanded) {
        next.add(collapsedKey);
      } else {
        next.add(path);
      }
      return next;
    });
  };

  return (
    <div
      className={`h-full overflow-auto viewer-scrollbar bg-white p-4 dark:bg-dark-surface ${className}`}
      style={{ fontFamily: "var(--font-fira-code), monospace" }}
      aria-label="JSON table view"
    >
      <JsonTable
        value={data}
        path="$"
        depth={0}
        expandedPaths={expandedPaths}
        onToggle={onToggle}
      />
    </div>
  );
};

export default DemoJSONTable;
