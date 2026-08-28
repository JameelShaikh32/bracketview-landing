/** Extracted from app/src/lib/jsonView.ts — demo-only, no virtualization. */

export type JsonPrimitive = string | number | boolean | null;
export type JsonValueType =
  | "string"
  | "number"
  | "boolean"
  | "null"
  | "object"
  | "array";

export function isPlainObject(
  value: unknown,
): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

export function isNested(value: unknown): boolean {
  return value !== null && typeof value === "object";
}

export function getJsonValueType(value: unknown): JsonValueType {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  if (typeof value === "object") return "object";
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  if (typeof value === "boolean") return "boolean";
  return "null";
}

export function isArrayOfObjects(
  value: unknown,
): value is Record<string, unknown>[] {
  if (!Array.isArray(value) || value.length === 0) return false;
  return value.every((item) => isPlainObject(item));
}

export function isObjectOfObjects(
  value: unknown,
): value is Record<string, Record<string, unknown>> {
  if (!isPlainObject(value)) return false;
  const entries = Object.values(value);
  return entries.length >= 2 && entries.every((item) => isPlainObject(item));
}

export function collectObjectKeys(items: Record<string, unknown>[]): string[] {
  const keys: string[] = [];
  const seen = new Set<string>();
  for (const item of items) {
    for (const key of Object.keys(item)) {
      if (seen.has(key)) continue;
      seen.add(key);
      keys.push(key);
    }
  }
  return keys;
}

export function childCount(value: unknown): number {
  if (Array.isArray(value)) return value.length;
  if (isPlainObject(value)) return Object.keys(value).length;
  return 0;
}

export function formatPrimitive(value: JsonPrimitive): string {
  if (value === null) return "null";
  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "boolean") return value ? "true" : "false";
  return String(value);
}

export function getValueColorClass(value: unknown): string {
  if (value === null) return "text-red-600 dark:text-red-400";
  if (typeof value === "string") return "text-blue-600 dark:text-blue-400";
  if (typeof value === "number") return "text-green-600 dark:text-green-400";
  if (typeof value === "boolean") return "text-yellow-600 dark:text-yellow-400";
  return "text-gray-900 dark:text-dark-text";
}

export function truncateText(text: string, max = 48): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1)}…`;
}
