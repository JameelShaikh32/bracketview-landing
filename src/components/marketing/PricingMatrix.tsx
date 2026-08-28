import Reveal from "@/components/motion/Reveal";
import { DESKTOP_LOCAL_FILE_LABEL } from "@/app/data/desktop";
import { FREE_UPLOAD_LABEL, PLAN_LIMITS } from "@/app/data/planLimits";
import { Check, Minus } from "lucide-react";

const rows = [
  {
    feature: "JSON viewer, formatter, validator",
    free: true,
    pro: true,
  },
  {
    feature: "Tree, graph, node, table, JSONPath, JQ",
    free: true,
    pro: true,
  },
  {
    feature: "Nine UI languages",
    free: true,
    pro: true,
  },
  {
    feature: "Schema validate / generate, types, compare",
    free: true,
    pro: true,
  },
  {
    feature: "Webhook Tester",
    free: "Limited",
    pro: "Higher caps",
  },
  {
    feature: "AI actions / month",
    free: String(PLAN_LIMITS.free.aiActionsPerMonth),
    pro: "Unlimited†",
  },
  {
    feature: "Encrypted snapshots",
    free: "Limited",
    pro: "Unlimited",
  },
  {
    feature: "Performance Mode (large JSON)",
    free: false,
    pro: true,
  },
] as const;

const Cell = ({ value }: { value: boolean | string }) => {
  if (value === true) {
    return (
      <span className="inline-flex size-6 items-center justify-center rounded-full bg-emerald-500 text-white">
        <Check size={12} strokeWidth={3} aria-hidden />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex size-6 items-center justify-center rounded-full bg-black/10 text-black/40 dark:bg-foreground/10 dark:text-foreground/40">
        <Minus size={12} strokeWidth={3} aria-hidden />
      </span>
    );
  }
  return (
    <span className="text-xs font-medium text-black/80 dark:text-foreground/80">
      {value}
    </span>
  );
};

const PricingMatrix = () => {
  return (
    <section
      aria-labelledby="pricing-matrix-heading"
      className="mt-20"
    >
      <Reveal>
        <h2
          id="pricing-matrix-heading"
          className="text-2xl font-bold sm:text-3xl"
        >
          Feature comparison
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-black/70 dark:text-foreground/70">
          Core tools stay free — including Node, Table, and languages. Upgrade
          to Pro for higher limits and Performance Mode.
        </p>
      </Reveal>

      <div className="mt-8 overflow-x-auto rounded-4xl bg-white dark:bg-muted">
        <table className="w-full min-w-120 border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-black/8 dark:border-foreground/10">
              <th className="px-4 py-4 font-bold sm:px-6">Capability</th>
              <th className="px-3 py-4 font-bold">Free</th>
              <th className="px-3 py-4 font-bold sm:px-6">Pro</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.feature}
                className="border-b border-black/5 last:border-0 dark:border-foreground/8"
              >
                <td className="px-4 py-3.5 text-black/85 sm:px-6 dark:text-foreground/85">
                  {row.feature}
                </td>
                <td className="px-3 py-3.5">
                  <Cell value={row.free} />
                </td>
                <td className="px-3 py-3.5 sm:px-6">
                  <Cell value={row.pro} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-black/50 dark:text-foreground/45">
        † Fair use applies to unlimited AI. Web Free uploads are{" "}
        {FREE_UPLOAD_LABEL}; the Windows app opens local files up to{" "}
        {DESKTOP_LOCAL_FILE_LABEL}.
      </p>
    </section>
  );
};

export default PricingMatrix;
