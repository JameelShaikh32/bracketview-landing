/** Extracted from app/src/components/JSONTreeViewer.tsx */

export function joinPath(
  parent: string,
  key: string,
  isArrayIndex: boolean,
): string {
  if (parent === "$" || parent === "") {
    return isArrayIndex ? `$[${key}]` : `$.${key}`;
  }
  if (isArrayIndex) return `${parent}[${key}]`;
  if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(key)) return `${parent}.${key}`;
  return `${parent}['${key.replace(/'/g, "\\'")}']`;
}

export function getValueType(val: unknown): string {
  if (val === null) return "null";
  if (Array.isArray(val)) return "array";
  return typeof val;
}

export function getValueColor(val: unknown): string {
  if (val === null) return "text-red-600 dark:text-red-400";
  if (typeof val === "string") return "text-blue-600 dark:text-blue-400";
  if (typeof val === "number") return "text-green-600 dark:text-green-400";
  if (typeof val === "boolean") return "text-yellow-600 dark:text-yellow-400";
  return "text-gray-900 dark:text-dark-text";
}

export function formatValue(val: unknown): string {
  if (val === null) return "null";
  if (typeof val === "string") return `"${val}"`;
  if (typeof val === "boolean") return val ? "true" : "false";
  return String(val);
}

export function countNodes(value: unknown, depth = 0, max = 50000): number {
  let count = 1;
  if (depth > 40 || count >= max) return count;
  if (value && typeof value === "object") {
    const entries = Array.isArray(value)
      ? value
      : Object.values(value as Record<string, unknown>);
    for (const child of entries) {
      count += countNodes(child, depth + 1, max);
      if (count >= max) break;
    }
  }
  return count;
}

export function maxDepthOf(value: unknown, depth = 0): number {
  if (!value || typeof value !== "object") return depth;
  const children = Array.isArray(value)
    ? value
    : Object.values(value as Record<string, unknown>);
  if (children.length === 0) return depth;
  return Math.max(...children.map((child) => maxDepthOf(child, depth + 1)));
}

export type FlatRow = {
  id: string;
  keyName: string;
  value: unknown;
  path: string;
  level: number;
  isComplex: boolean;
  isExpanded: boolean;
  childCount: number;
};

export function buildFlatRows(
  data: unknown,
  expanded: Set<string>,
  maxDepth = 8,
): FlatRow[] {
  const rows: FlatRow[] = [];

  const walk = (
    keyName: string,
    value: unknown,
    path: string,
    level: number,
    isArrayIndex: boolean,
  ) => {
    const type = getValueType(value);
    const isComplex = type === "object" || type === "array";
    const truncated = isComplex && level >= maxDepth;
    const isExpanded = expanded.has(path) && !truncated;
    const childCount = isComplex
      ? Array.isArray(value)
        ? value.length
        : Object.keys(value as object).length
      : 0;

    rows.push({
      id: path,
      keyName,
      value,
      path,
      level,
      isComplex,
      isExpanded,
      childCount,
    });

    if (!isComplex || !isExpanded || truncated) return;

    const entries = Array.isArray(value)
      ? value.map((v, i) => ({ key: String(i), value: v, arr: true }))
      : Object.entries(value as Record<string, unknown>).map(([k, v]) => ({
          key: k,
          value: v,
          arr: false,
        }));

    for (const entry of entries.slice(0, 50)) {
      walk(
        entry.key,
        entry.value,
        joinPath(path, entry.key, entry.arr),
        level + 1,
        entry.arr,
      );
    }
  };

  walk("root", data, "$", 0, false);
  return rows;
}
