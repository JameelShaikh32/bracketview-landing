/**
 * Visual extraction of app/src/lib/jsonToFlow.ts
 * Same card types and left-to-right ranks; dagre replaced with a compact stack.
 */

import {
  childCount,
  collectObjectKeys,
  formatPrimitive,
  getJsonValueType,
  isArrayOfObjects,
  isNested,
  isObjectOfObjects,
  isPlainObject,
  truncateText,
  type JsonPrimitive,
  type JsonValueType,
} from "@/components/app-demo/jsonView";

export const FLOW_LAYOUT = {
  objectWidth: 220,
  objectRowHeight: 28,
  objectPadY: 0,
  tableRowLabelWidth: 72,
  tableCellWidth: 88,
  tableHeaderHeight: 32,
  tableRowHeight: 30,
  tablePadY: 0,
} as const;

const MAX_TABLE_COLUMNS = 8;
const MAX_TABLE_ROWS = 24;
const MAX_OBJECT_ROWS = 40;

type FlowPrimitiveType = Exclude<JsonValueType, "object" | "array">;

export type FlowObjectRow = {
  key: string;
  kind: "primitive" | "nested";
  value?: JsonPrimitive;
  valueType?: FlowPrimitiveType;
  childCount?: number;
  sourceOffsetY?: number;
};

export type FlowTableCell = {
  kind: "primitive" | "nested" | "empty";
  value?: JsonPrimitive;
  valueType?: FlowPrimitiveType;
  childCount?: number;
  sourceOffsetY?: number;
};

export type FlowTableRow = {
  rowKey: string;
  cells: FlowTableCell[];
};

export type FlowNodeData = {
  path: string;
  kind: "object" | "table";
  rows?: FlowObjectRow[];
  columns?: string[];
  extraColumns?: number;
  extraRows?: number;
  tableRows?: FlowTableRow[];
};

export type DemoFlowNode = {
  id: string;
  type: "object" | "table";
  x: number;
  y: number;
  width: number;
  height: number;
  data: FlowNodeData;
};

export type DemoFlowEdge = {
  id: string;
  source: string;
  target: string;
  sourceOffsetY: number;
};

type PendingChild = {
  value: unknown;
  path: string;
  sourceId: string;
  sourceOffsetY: number;
};

function shouldBeTable(value: unknown, isRoot: boolean): boolean {
  if (isArrayOfObjects(value)) return true;
  if (isRoot) return false;
  return isObjectOfObjects(value);
}

function getTableItems(
  value: unknown,
): { rowKey: string; item: Record<string, unknown> }[] {
  if (Array.isArray(value)) {
    return (value as Record<string, unknown>[]).map((item, index) => ({
      rowKey: String(index),
      item,
    }));
  }
  if (isPlainObject(value)) {
    return Object.entries(value).map(([rowKey, item]) => ({
      rowKey,
      item: item as Record<string, unknown>,
    }));
  }
  return [];
}

function getListEntries(
  value: unknown,
): { key: string; child: unknown }[] {
  if (Array.isArray(value)) {
    return value.map((child, index) => ({ key: String(index), child }));
  }
  if (isPlainObject(value)) {
    return Object.entries(value).map(([key, child]) => ({ key, child }));
  }
  return [];
}

function primitivePayload(value: unknown): {
  value: JsonPrimitive;
  valueType: FlowPrimitiveType;
} {
  const valueType = getJsonValueType(value);
  if (valueType === "object" || valueType === "array") {
    return { value: null, valueType: "null" };
  }
  if (typeof value === "string") {
    return { value: truncateText(value, 64), valueType: "string" };
  }
  return { value: value as JsonPrimitive, valueType };
}

function objectNodeSize(rowCount: number): { width: number; height: number } {
  const rows = Math.max(rowCount, 1);
  return {
    width: FLOW_LAYOUT.objectWidth,
    height:
      FLOW_LAYOUT.objectPadY * 2 + rows * FLOW_LAYOUT.objectRowHeight,
  };
}

function tableNodeSize(
  columnCount: number,
  rowCount: number,
): { width: number; height: number } {
  const cols = Math.max(columnCount, 1);
  const rows = Math.max(rowCount, 1);
  return {
    width:
      FLOW_LAYOUT.tableRowLabelWidth +
      cols * FLOW_LAYOUT.tableCellWidth +
      16,
    height:
      FLOW_LAYOUT.tablePadY * 2 +
      FLOW_LAYOUT.tableHeaderHeight +
      rows * FLOW_LAYOUT.tableRowHeight,
  };
}

function layoutRanks(nodes: DemoFlowNode[], edges: DemoFlowEdge[]): void {
  const children = new Map<string, string[]>();
  const hasParent = new Set<string>();
  for (const edge of edges) {
    const list = children.get(edge.source) ?? [];
    list.push(edge.target);
    children.set(edge.source, list);
    hasParent.add(edge.target);
  }

  const root = nodes.find((node) => !hasParent.has(node.id)) ?? nodes[0];
  if (!root) return;

  const rank = new Map<string, number>([[root.id, 0]]);
  const queue = [root.id];
  while (queue.length > 0) {
    const id = queue.shift()!;
    for (const child of children.get(id) ?? []) {
      if (rank.has(child)) continue;
      rank.set(child, (rank.get(id) ?? 0) + 1);
      queue.push(child);
    }
  }

  const byRank = new Map<number, DemoFlowNode[]>();
  for (const node of nodes) {
    const r = rank.get(node.id) ?? 0;
    const col = byRank.get(r) ?? [];
    col.push(node);
    byRank.set(r, col);
  }

  const maxRank = Math.max(0, ...byRank.keys());
  const rankSep = 72;
  const nodeSep = 28;
  const margin = 20;
  let x = margin;

  for (let r = 0; r <= maxRank; r += 1) {
    const col = byRank.get(r) ?? [];
    const colWidth = Math.max(...col.map((node) => node.width), 0);
    let y = margin;
    for (const node of col) {
      node.x = x;
      node.y = y;
      y += node.height + nodeSep;
    }
    x += colWidth + rankSep;
  }
}

export function jsonToDemoFlow(data: unknown): {
  nodes: DemoFlowNode[];
  edges: DemoFlowEdge[];
} {
  const nodes: DemoFlowNode[] = [];
  const edges: DemoFlowEdge[] = [];
  let nextId = 0;
  const createId = () => `n${nextId++}`;

  const visit = (
    value: unknown,
    path: string,
    isRoot: boolean,
  ): string | null => {
    const id = createId();

    if (!isNested(value)) {
      const payload = primitivePayload(value);
      const size = objectNodeSize(1);
      nodes.push({
        id,
        type: "object",
        x: 0,
        y: 0,
        width: size.width,
        height: size.height,
        data: {
          path,
          kind: "object",
          rows: [
            {
              key: "",
              kind: "primitive",
              value: payload.value,
              valueType: payload.valueType,
            },
          ],
        },
      });
      return id;
    }

    const pending: PendingChild[] = [];

    if (shouldBeTable(value, isRoot)) {
      const items = getTableItems(value);
      const allColumns = collectObjectKeys(items.map((entry) => entry.item));
      const columns = allColumns.slice(0, MAX_TABLE_COLUMNS);
      const visibleItems = items.slice(0, MAX_TABLE_ROWS);
      const extraColumns = Math.max(0, allColumns.length - columns.length);
      const extraRows = Math.max(0, items.length - visibleItems.length);

      const tableRows: FlowTableRow[] = visibleItems.map((entry, rowIndex) => {
        const cells: FlowTableCell[] = columns.map((column) => {
          if (!Object.prototype.hasOwnProperty.call(entry.item, column)) {
            return { kind: "empty" };
          }
          const cellValue = entry.item[column];
          if (!isNested(cellValue)) {
            const payload = primitivePayload(cellValue);
            return {
              kind: "primitive",
              value: payload.value,
              valueType: payload.valueType,
            };
          }
          const sourceOffsetY =
            FLOW_LAYOUT.tablePadY +
            FLOW_LAYOUT.tableHeaderHeight +
            rowIndex * FLOW_LAYOUT.tableRowHeight +
            FLOW_LAYOUT.tableRowHeight / 2;
          pending.push({
            value: cellValue,
            path: Array.isArray(value)
              ? `${path}[${entry.rowKey}].${column}`
              : `${path}.${entry.rowKey}.${column}`,
            sourceId: id,
            sourceOffsetY,
          });
          return {
            kind: "nested",
            childCount: childCount(cellValue),
            sourceOffsetY,
          };
        });
        return { rowKey: entry.rowKey, cells };
      });

      const size = tableNodeSize(columns.length, tableRows.length);
      nodes.push({
        id,
        type: "table",
        x: 0,
        y: 0,
        width: size.width,
        height: size.height,
        data: {
          path,
          kind: "table",
          columns,
          extraColumns,
          extraRows,
          tableRows,
        },
      });
    } else {
      const entries = getListEntries(value);
      const visible = entries.slice(0, MAX_OBJECT_ROWS);
      const extraRows = Math.max(0, entries.length - visible.length);
      const rows: FlowObjectRow[] = visible.map((entry, rowIndex) => {
        if (!isNested(entry.child)) {
          const payload = primitivePayload(entry.child);
          return {
            key: entry.key,
            kind: "primitive",
            value: payload.value,
            valueType: payload.valueType,
          };
        }
        const sourceOffsetY =
          FLOW_LAYOUT.objectPadY +
          rowIndex * FLOW_LAYOUT.objectRowHeight +
          FLOW_LAYOUT.objectRowHeight / 2;
        pending.push({
          value: entry.child,
          path: Array.isArray(value)
            ? `${path}[${entry.key}]`
            : `${path}.${entry.key}`,
          sourceId: id,
          sourceOffsetY,
        });
        return {
          key: entry.key,
          kind: "nested",
          childCount: childCount(entry.child),
          sourceOffsetY,
        };
      });

      const size = objectNodeSize(Math.max(rows.length, 1));
      nodes.push({
        id,
        type: "object",
        x: 0,
        y: 0,
        width: size.width,
        height: size.height,
        data: {
          path,
          kind: "object",
          rows,
          extraRows,
        },
      });
    }

    for (const child of pending) {
      const childId = visit(child.value, child.path, false);
      if (!childId) continue;
      edges.push({
        id: `e-${child.sourceId}-${childId}`,
        source: child.sourceId,
        target: childId,
        sourceOffsetY: child.sourceOffsetY,
      });
    }

    return id;
  };

  visit(data, "$", true);
  layoutRanks(nodes, edges);
  return { nodes, edges };
}

export function flowNodeMatchesQuery(
  data: FlowNodeData,
  query: string,
): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return false;
  if (data.path.toLowerCase().includes(q)) return true;
  if (data.rows) {
    for (const row of data.rows) {
      if (row.key.toLowerCase().includes(q)) return true;
      if (
        row.kind === "primitive" &&
        formatPrimitive(row.value ?? null).toLowerCase().includes(q)
      ) {
        return true;
      }
    }
  }
  if (data.columns) {
    for (const column of data.columns) {
      if (column.toLowerCase().includes(q)) return true;
    }
  }
  if (data.tableRows) {
    for (const row of data.tableRows) {
      if (row.rowKey.toLowerCase().includes(q)) return true;
      for (const cell of row.cells) {
        if (
          cell.kind === "primitive" &&
          formatPrimitive(cell.value ?? null).toLowerCase().includes(q)
        ) {
          return true;
        }
      }
    }
  }
  return false;
}
