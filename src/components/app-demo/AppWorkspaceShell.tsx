"use client";

/**
 * Extracted app chrome from:
 * - app/src/components/AppHeader.tsx (view tabs)
 * - app/src/components/JSONViewer.tsx (action bar)
 * - app/src/components/JSONViewerClient.tsx (surface colors)
 */

import {
  BarChart3,
  ClipboardIcon,
  ClipboardPaste,
  EyeIcon,
  ListX,
  Loader2,
  TextIcon,
  TextWrap,
  Terminal,
  Wand2,
} from "lucide-react";
import type { ReactNode } from "react";

export type AppDemoTab = "viewer" | "text" | "stats" | "jq";

type ActionId =
  | "paste"
  | "copy"
  | "beautify"
  | "minify"
  | "fix"
  | "clear";

type AppWorkspaceShellProps = {
  activeTab: AppDemoTab;
  onTabChange?: (tab: AppDemoTab) => void;
  showActionBar?: boolean;
  fixing?: boolean;
  onAction?: (action: ActionId) => void;
  children: ReactNode;
  className?: string;
  footer?: ReactNode;
};

const tabBtn = (active: boolean) =>
  `flex items-center gap-1 px-2.5 py-2 text-xs font-semibold rounded-xl transition-colors cursor-pointer ${
    active
      ? "bg-gray-100 text-gray-900 dark:bg-dark-active dark:text-dark-text"
      : "text-gray-600 dark:text-dark-text-secondary hover:text-gray-900 dark:hover:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-hover"
  }`;

const actionBtn =
  "px-2 py-1.5 text-xs text-gray-700 dark:text-dark-text rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap";

const AppWorkspaceShell = ({
  activeTab,
  onTabChange,
  showActionBar = true,
  fixing = false,
  onAction,
  children,
  className = "",
  footer,
}: AppWorkspaceShellProps) => {
  return (
    <div
      className={`flex h-full min-h-0 w-full flex-col overflow-hidden bg-white dark:bg-dark-surface ${className}`}
    >
      {/* View tabs — AppHeader pattern */}
      <div className="flex items-center gap-1 border-b border-gray-300 px-2 py-1.5 dark:border-dark-border">
        <div
          className="flex items-center gap-1"
          role="tablist"
          aria-label="Workspace views"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "viewer"}
            className={tabBtn(activeTab === "viewer")}
            onClick={() => onTabChange?.("viewer")}
          >
            <EyeIcon className="h-3.5 w-3.5" />
            <span>Tree View</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "text"}
            className={tabBtn(activeTab === "text")}
            onClick={() => onTabChange?.("text")}
          >
            <TextIcon className="h-3.5 w-3.5" />
            <span>Text</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "stats"}
            className={tabBtn(activeTab === "stats")}
            onClick={() => onTabChange?.("stats")}
          >
            <BarChart3 className="h-3.5 w-3.5" />
            <span>Stats</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "jq"}
            className={tabBtn(activeTab === "jq")}
            onClick={() => onTabChange?.("jq")}
          >
            <Terminal className="h-3.5 w-3.5" />
            <span>JQ</span>
          </button>
        </div>
      </div>

      {/* Action bar — JSONViewer pattern */}
      {showActionBar && activeTab !== "stats" && activeTab !== "jq" ? (
        <div className="relative z-10 flex items-center gap-1 overflow-x-auto border-b border-gray-200 px-2 py-1.5 dark:border-dark-border">
          <button
            type="button"
            className={`${actionBtn} bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/80 dark:hover:bg-blue-900/50`}
            onClick={() => onAction?.("paste")}
          >
            <ClipboardPaste className="h-3.5 w-3.5" />
            Paste
          </button>
          <button
            type="button"
            className={`${actionBtn} bg-green-100 hover:bg-green-200 dark:bg-green-900/80 dark:hover:bg-green-900/50`}
            onClick={() => onAction?.("copy")}
          >
            <ClipboardIcon className="h-3.5 w-3.5" />
            Copy
          </button>
          <button
            type="button"
            className={`${actionBtn} bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/80 dark:hover:bg-purple-900/50`}
            onClick={() => onAction?.("beautify")}
          >
            <TextWrap className="h-3.5 w-3.5" />
            Beautify
          </button>
          <button
            type="button"
            className={`${actionBtn} bg-orange-100 hover:bg-orange-200 dark:bg-orange-900/80 dark:hover:bg-orange-900/50`}
            onClick={() => onAction?.("minify")}
          >
            <ListX className="h-3.5 w-3.5" />
            Minify
          </button>
          <button
            type="button"
            className={`${actionBtn} bg-amber-100 hover:bg-amber-200 dark:bg-amber-900/80 dark:hover:bg-amber-900/50 disabled:opacity-60`}
            onClick={() => onAction?.("fix")}
            disabled={fixing}
          >
            {fixing ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Wand2 className="h-3.5 w-3.5" />
            )}
            {fixing ? "Fixing..." : "Fix JSON"}
          </button>
        </div>
      ) : null}

      <div className="min-h-0 flex-1 overflow-hidden">{children}</div>

      {footer ? (
        <div className="border-t border-gray-200 px-3 py-1 text-xs text-gray-500 dark:border-dark-border dark:text-dark-text-secondary">
          {footer}
        </div>
      ) : null}
    </div>
  );
};

export default AppWorkspaceShell;
