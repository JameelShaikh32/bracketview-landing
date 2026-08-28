"use client";

import AppWorkspaceShell, {
  type AppDemoTab,
} from "@/components/app-demo/AppWorkspaceShell";
import DemoJSONNode from "@/components/app-demo/DemoJSONNode";
import DemoJSONTable from "@/components/app-demo/DemoJSONTable";
import DemoJSONTree from "@/components/app-demo/DemoJSONTree";
import DemoTextEditor from "@/components/app-demo/DemoTextEditor";
import {
  DEMO_NESTED,
  FIXED_JSON,
} from "@/components/app-demo/samples";
import { useHydratedReducedMotion } from "@/components/motion/useHydratedReducedMotion";
import { useEffect, useState } from "react";

type SceneId = "tree" | "node" | "table" | "fix";

const SCENES: { id: SceneId; label: string; tab: AppDemoTab }[] = [
  { id: "tree", label: "Tree", tab: "viewer" },
  { id: "node", label: "Node", tab: "node" },
  { id: "table", label: "Table", tab: "table" },
  { id: "fix", label: "AI Fix", tab: "text" },
];

const HeroProductDemo = () => {
  const reducedMotion = useHydratedReducedMotion();
  const [scene, setScene] = useState<SceneId>("tree");

  useEffect(() => {
    if (reducedMotion) return;
    const order: SceneId[] = ["tree", "node", "table", "fix"];
    let index = 0;
    const id = window.setInterval(() => {
      index = (index + 1) % order.length;
      setScene(order[index]);
    }, 4800);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const active = SCENES.find((item) => item.id === scene) ?? SCENES[0];

  return (
    <div className="flex h-full min-h-80 flex-col overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(25,19,20,0.18)] md:rounded-t-2xl md:rounded-b-none">
      <div
        className="flex gap-1 overflow-x-auto bg-[#ededed] px-2 py-1.5 dark:bg-dark-bg"
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
          fixing={false}
          onTabChange={(tab) => {
            if (tab === "viewer") setScene("tree");
            if (tab === "node") setScene("node");
            if (tab === "table") setScene("table");
            if (tab === "text") setScene("fix");
          }}
          onAction={(action) => {
            if (action === "fix") setScene("fix");
            if (action === "beautify") setScene("tree");
          }}
          footer={
            scene === "tree"
              ? "Last parse duration: 7ms"
              : scene === "node"
                ? "Node view · free"
                : scene === "table"
                  ? "Table view · free"
                  : "JSON fixed successfully by AI!"
          }
        >
          {scene === "tree" ? (
            <DemoJSONTree data={DEMO_NESTED} autoExpand={!reducedMotion} />
          ) : null}

          {scene === "node" ? <DemoJSONNode data={DEMO_NESTED} /> : null}

          {scene === "table" ? <DemoJSONTable data={DEMO_NESTED} /> : null}

          {scene === "fix" ? (
            <DemoTextEditor
              value={FIXED_JSON}
              readOnly
            />
          ) : null}
        </AppWorkspaceShell>
      </div>
    </div>
  );
};

export default HeroProductDemo;
