"use client";

import AppWorkspaceShell, {
  type AppDemoTab,
} from "@/components/app-demo/AppWorkspaceShell";
import DemoDiffView from "@/components/app-demo/DemoDiffView";
import DemoJSONTree from "@/components/app-demo/DemoJSONTree";
import DemoTextEditor from "@/components/app-demo/DemoTextEditor";
import {
  BROKEN_JSON,
  DEMO_NESTED,
  DIFF_LEFT,
  DIFF_RIGHT,
  FIXED_JSON,
  SCHEMA_SAMPLE,
} from "@/components/app-demo/samples";
import { useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

type SceneId = "tree" | "fix" | "schema" | "diff";

const SCENES: { id: SceneId; label: string; tab: AppDemoTab }[] = [
  { id: "tree", label: "Tree", tab: "viewer" },
  { id: "fix", label: "AI Fix", tab: "text" },
  { id: "schema", label: "Schema", tab: "text" },
  { id: "diff", label: "Diff", tab: "viewer" },
];

const HeroProductDemo = () => {
  const reducedMotion = useReducedMotion();
  const [scene, setScene] = useState<SceneId>("tree");
  const [fixing, setFixing] = useState(false);
  const [fixText, setFixText] = useState(BROKEN_JSON);

  useEffect(() => {
    if (reducedMotion) return;
    const order: SceneId[] = ["tree", "fix", "schema", "diff"];
    let index = 0;
    const id = window.setInterval(() => {
      index = (index + 1) % order.length;
      setScene(order[index]);
    }, 4800);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  useEffect(() => {
    if (scene !== "fix") {
      setFixText(BROKEN_JSON);
      setFixing(false);
      return;
    }
    setFixText(BROKEN_JSON);
    setFixing(true);
    const t1 = window.setTimeout(() => {
      setFixText(FIXED_JSON);
      setFixing(false);
    }, 1200);
    return () => window.clearTimeout(t1);
  }, [scene]);

  const active = SCENES.find((item) => item.id === scene) ?? SCENES[0];

  const schemaValid = useMemo(() => {
    try {
      JSON.parse(SCHEMA_SAMPLE);
      return true;
    } catch {
      return false;
    }
  }, []);

  const errorLine = scene === "fix" && fixing ? 3 : null;

  return (
    <div className="flex h-full min-h-80 flex-col overflow-hidden rounded-t-2xl shadow-[0_8px_32px_rgba(25,19,20,0.18)]">
      {/* Scene switcher sits above app chrome so demos can rotate */}
      <div
        className="flex gap-1 bg-[#ededed] px-2 py-1.5 dark:bg-dark-bg"
        role="tablist"
        aria-label="Product demo scenes"
      >
        {SCENES.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={scene === item.id}
            onClick={() => setScene(item.id)}
            className={`rounded-lg px-2.5 py-1 text-[11px] font-medium transition-colors ${
              scene === item.id
                ? "bg-white text-gray-900 shadow-sm dark:bg-dark-active dark:text-dark-text"
                : "text-gray-600 hover:bg-white/70 dark:text-dark-text-secondary dark:hover:bg-dark-hover"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="min-h-0 flex-1 bg-[#ededed] dark:bg-dark-bg">
        <AppWorkspaceShell
          activeTab={active.tab}
          fixing={fixing}
          onTabChange={(tab) => {
            if (tab === "viewer") setScene("tree");
            if (tab === "text") setScene("fix");
          }}
          onAction={(action) => {
            if (action === "fix") setScene("fix");
            if (action === "beautify") setScene("tree");
          }}
          footer={
            scene === "tree"
              ? "Last parse duration: 7ms"
              : scene === "fix"
                ? fixing
                  ? "Repairing with AI…"
                  : "JSON fixed successfully by AI!"
                : scene === "schema"
                  ? "Schema validation · 0 errors"
                  : "2 fields changed"
          }
        >
          {scene === "tree" ? (
            <DemoJSONTree data={DEMO_NESTED} autoExpand={!reducedMotion} />
          ) : null}

          {scene === "fix" ? (
            <DemoTextEditor
              value={fixText}
              readOnly
              errorLine={errorLine}
            />
          ) : null}

          {scene === "schema" ? (
            <div className="flex h-full min-h-0 flex-col">
              <div className="min-h-0 flex-1">
                <DemoTextEditor
                  value={SCHEMA_SAMPLE}
                  readOnly
                  className="h-full"
                />
              </div>
              <div
                className={`shrink-0 border-t px-3 py-2 text-xs font-medium ${
                  schemaValid
                    ? "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-200"
                    : "border-red-200 bg-red-50 text-red-800"
                }`}
              >
                {schemaValid
                  ? "✓ Valid against OrderSchema — 0 errors"
                  : "✗ Schema validation failed"}
              </div>
            </div>
          ) : null}

          {scene === "diff" ? (
            <DemoDiffView
              left={DIFF_LEFT}
              right={DIFF_RIGHT}
              changes={[
                {
                  path: "plan",
                  kind: "modified",
                  left: '"free"',
                  right: '"pro"',
                },
                {
                  path: "limit",
                  kind: "modified",
                  left: "20",
                  right: "null",
                },
              ]}
            />
          ) : null}
        </AppWorkspaceShell>
      </div>
    </div>
  );
};

export default HeroProductDemo;
