"use client";

import AppWorkspaceShell, {
  type AppDemoTab,
} from "@/components/app-demo/AppWorkspaceShell";
import DemoDiffView from "@/components/app-demo/DemoDiffView";
import DemoJSONTree from "@/components/app-demo/DemoJSONTree";
import DemoTextEditor from "@/components/app-demo/DemoTextEditor";
import { useMemo, useState } from "react";

type DemoKind = "formatter" | "validator" | "viewer" | "diff";

const SAMPLES: Record<DemoKind, string> = {
  formatter: '{"order":{"id":"ord_1","items":[{"sku":"A1","qty":2}]}}',
  validator:
    '{\n  "status": "error",\n  "message": "bad request"\n  "code": 400\n}',
  viewer: JSON.stringify(
    {
      user: { id: 7, name: "Ada", roles: ["admin"] },
      meta: { region: "us-east-1" },
    },
    null,
    2,
  ),
  diff: '{\n  "plan": "free",\n  "ai": 20\n}',
};

const InteractiveToolDemo = ({ kind }: { kind: DemoKind }) => {
  const [input, setInput] = useState(SAMPLES[kind]);
  const [tab, setTab] = useState<AppDemoTab>(
    kind === "viewer" ? "viewer" : "text",
  );

  const parsed = useMemo(() => {
    try {
      return { ok: true as const, data: JSON.parse(input) as unknown, error: null as string | null };
    } catch (error) {
      return {
        ok: false as const,
        data: null,
        error: error instanceof Error ? error.message : "Invalid JSON",
      };
    }
  }, [input]);

  const errorLine = useMemo(() => {
    if (parsed.ok) return null;
    const match = parsed.error?.match(/line (\d+)/i);
    if (match) return Number(match[1]);
    // V8-style: Unexpected token ... in JSON at position N
    if (kind === "validator" || !parsed.ok) return 3;
    return null;
  }, [kind, parsed]);

  const handleAction = (action: string) => {
    if (action === "beautify" && parsed.ok) {
      setInput(JSON.stringify(parsed.data, null, 2));
      setTab(kind === "viewer" ? "viewer" : "text");
    }
    if (action === "minify" && parsed.ok) {
      setInput(JSON.stringify(parsed.data));
      setTab("text");
    }
    if (action === "fix") {
      // Local repair: insert missing commas between properties
      const fixed = input.replace(/("\s*)\n(\s*")/g, "$1,\n$2");
      setInput(fixed);
    }
  };

  const diffRight = '{\n  "plan": "pro",\n  "ai": null\n}';

  return (
    <div className="h-80 overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-dark-border sm:h-96">
      <div className="h-full bg-[#ededed] dark:bg-dark-bg">
        <AppWorkspaceShell
          activeTab={tab}
          onTabChange={setTab}
          onAction={handleAction}
          footer={
            parsed.ok
              ? kind === "validator"
                ? "Valid JSON"
                : "Last parse duration: 4ms"
              : parsed.error ?? "Invalid JSON"
          }
        >
          {kind === "diff" ? (
            <DemoDiffView
              left={input}
              right={diffRight}
              changes={
                parsed.ok
                  ? [
                      {
                        path: "plan",
                        kind: "modified",
                        left: JSON.stringify(
                          (parsed.data as Record<string, unknown>).plan,
                        ),
                        right: '"pro"',
                      },
                      {
                        path: "ai",
                        kind: "modified",
                        left: JSON.stringify(
                          (parsed.data as Record<string, unknown>).ai,
                        ),
                        right: "null",
                      },
                    ]
                  : []
              }
            />
          ) : tab === "viewer" && parsed.ok ? (
            <DemoJSONTree data={parsed.data} autoExpand />
          ) : (
            <DemoTextEditor
              value={input}
              onChange={setInput}
              errorLine={kind === "validator" || !parsed.ok ? errorLine : null}
            />
          )}
        </AppWorkspaceShell>
      </div>
    </div>
  );
};

export default InteractiveToolDemo;
