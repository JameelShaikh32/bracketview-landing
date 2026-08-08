"use client";

import AppWorkspaceShell from "@/components/app-demo/AppWorkspaceShell";
import DemoDiffView from "@/components/app-demo/DemoDiffView";
import DemoJSONTree from "@/components/app-demo/DemoJSONTree";
import DemoTextEditor from "@/components/app-demo/DemoTextEditor";
import {
  BROKEN_JSON,
  DEMO_API_RESPONSE,
  DIFF_LEFT,
  DIFF_RIGHT,
  FIXED_JSON,
} from "@/components/app-demo/samples";
import Reveal from "@/components/motion/Reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const chapters = [
  {
    id: "tree",
    title: "Explore nested JSON as a tree",
    description:
      "Expand nodes, copy paths, and jump through large API responses without losing context.",
    href: "/json-viewer",
    cta: "Open JSON Viewer",
  },
  {
    id: "ai",
    title: "Repair malformed JSON with AI",
    description:
      "Missing commas, trailing garbage, and truncated payloads — fix locally first, then AI when needed.",
    href: "/ai-json-fixer",
    cta: "Try AI JSON Fixer",
  },
  {
    id: "diff",
    title: "See structural diffs instantly",
    description:
      "Compare two payloads side by side and highlight added, removed, and changed fields.",
    href: "/json-diff",
    cta: "Open Diff Tool",
  },
  {
    id: "webhook",
    title: "Capture webhooks in real time",
    description:
      "Disposable public URLs for Stripe, GitHub, and Shopify — inspect headers, body, and replay.",
    href: "/webhook-tester",
    cta: "Open Webhook Tester",
  },
] as const;

const FeatureDemoChapter = () => {
  const [active, setActive] = useState(0);
  const chapter = chapters[active];

  return (
    <section
      id="product-demos"
      aria-labelledby="product-demos-heading"
      className="w-full px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2
            id="product-demos-heading"
            className="text-2xl font-bold sm:text-3xl"
          >
            See the workspace in action
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base dark:text-foreground/70">
            Hover or select a workflow — previews use the same UI chrome as the
            BracketView app.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <ul className="flex flex-col gap-2">
            {chapters.map((item, index) => (
              <li key={item.id}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={`w-full rounded-3xl px-5 py-4 text-left transition-colors ${
                    active === index
                      ? "bg-accent text-white dark:bg-accent-dark"
                      : "bg-white text-black hover:bg-accent/10 dark:bg-muted dark:text-foreground dark:hover:bg-accent-dark/20"
                  }`}
                >
                  <p className="text-sm font-bold sm:text-base">{item.title}</p>
                  <p
                    className={`mt-1 text-xs leading-relaxed sm:text-sm ${
                      active === index
                        ? "text-white/85"
                        : "text-black/65 dark:text-foreground/65"
                    }`}
                  >
                    {item.description}
                  </p>
                </button>
              </li>
            ))}
          </ul>

          <div className="flex min-h-80 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-[#ededed] shadow-sm dark:border-dark-border dark:bg-dark-bg sm:min-h-96">
            {chapter.id === "tree" ? (
              <AppWorkspaceShell activeTab="viewer" footer="Last parse duration: 7ms">
                <DemoJSONTree data={DEMO_API_RESPONSE} autoExpand />
              </AppWorkspaceShell>
            ) : null}

            {chapter.id === "ai" ? (
              <AppWorkspaceShell
                activeTab="text"
                fixing={false}
                footer="JSON fixed successfully by AI!"
              >
                <div className="grid h-full min-h-0 grid-cols-2">
                  <div className="flex min-h-0 flex-col border-r border-gray-200 dark:border-dark-border">
                    <div className="shrink-0 border-b border-red-200 bg-red-50 px-2 py-1 text-[10px] font-semibold text-red-800 dark:border-red-900 dark:bg-red-900/20 dark:text-red-200">
                      Before
                    </div>
                    <div className="min-h-0 flex-1">
                      <DemoTextEditor
                        value={BROKEN_JSON}
                        readOnly
                        errorLine={3}
                        className="h-full"
                      />
                    </div>
                  </div>
                  <div className="flex min-h-0 flex-col">
                    <div className="shrink-0 border-b border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-800 dark:border-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-200">
                      After AI repair
                    </div>
                    <div className="min-h-0 flex-1">
                      <DemoTextEditor
                        value={FIXED_JSON}
                        readOnly
                        className="h-full"
                      />
                    </div>
                  </div>
                </div>
              </AppWorkspaceShell>
            ) : null}

            {chapter.id === "diff" ? (
              <AppWorkspaceShell activeTab="viewer" showActionBar={false} footer="2 fields changed">
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
              </AppWorkspaceShell>
            ) : null}

            {chapter.id === "webhook" ? (
              <div className="flex h-full flex-col bg-white dark:bg-dark-surface">
                <div className="border-b border-gray-200 px-3 py-2 text-xs font-semibold dark:border-dark-border dark:text-dark-text">
                  Webhook Tester · live feed
                </div>
                <div className="viewer-scrollbar flex-1 space-y-2 overflow-auto p-3">
                  {[
                    {
                      method: "POST",
                      path: "/e/stripe_test",
                      ms: "48ms",
                      status: 200,
                    },
                    {
                      method: "POST",
                      path: "/e/stripe_test",
                      ms: "51ms",
                      status: 200,
                    },
                  ].map((row, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 font-mono text-[11px] dark:border-dark-border dark:bg-dark-card dark:text-dark-text"
                    >
                      <span className="font-semibold text-teal-700 dark:text-teal-300">
                        {row.method}
                      </span>{" "}
                      {row.path} · {row.status} · {row.ms}
                      <p className="mt-1 text-gray-500 dark:text-dark-text-secondary">
                        stripe-signature · application/json · 2.1 KB
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="border-t border-gray-200 bg-white p-3 dark:border-dark-border dark:bg-dark-surface">
              <Link
                href={chapter.href}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-accent px-4 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
              >
                {chapter.cta}
                <ArrowUpRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureDemoChapter;
