"use client";

/** Extracted from app/src/components/viewer/PathBreadcrumbs.tsx */

type PathBreadcrumbsProps = {
  path: string;
  onNavigate?: (path: string) => void;
};

function splitPath(path: string): { label: string; path: string }[] {
  if (!path || path === "$") return [{ label: "$", path: "$" }];
  const parts: { label: string; path: string }[] = [{ label: "$", path: "$" }];
  const re = /\['([^']+)'\]|\[(\d+)\]|\.([^.\[\]]+)/g;
  let match: RegExpExecArray | null;
  let current = "$";
  while ((match = re.exec(path)) !== null) {
    if (match[1] != null) {
      current = `${current}['${match[1]}']`;
      parts.push({ label: match[1], path: current });
    } else if (match[2] != null) {
      current = `${current}[${match[2]}]`;
      parts.push({ label: `[${match[2]}]`, path: current });
    } else if (match[3] != null) {
      current = current === "$" ? `$.${match[3]}` : `${current}.${match[3]}`;
      parts.push({ label: match[3], path: current });
    }
  }
  return parts;
}

const PathBreadcrumbs = ({ path, onNavigate }: PathBreadcrumbsProps) => {
  const crumbs = splitPath(path);

  return (
    <nav
      aria-label="JSON path"
      className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto text-xs"
    >
      {crumbs.map((crumb, index) => (
        <span key={crumb.path} className="flex shrink-0 items-center gap-1">
          {index > 0 ? (
            <span className="text-gray-400 dark:text-dark-text-secondary">/</span>
          ) : null}
          <button
            type="button"
            onClick={() => onNavigate?.(crumb.path)}
            className={`rounded px-1.5 py-0.5 font-medium transition-colors ${
              index === crumbs.length - 1
                ? "bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200"
                : "text-gray-600 hover:bg-gray-100 dark:text-dark-text-secondary dark:hover:bg-dark-hover"
            }`}
          >
            {crumb.label}
          </button>
        </span>
      ))}
    </nav>
  );
};

export default PathBreadcrumbs;
