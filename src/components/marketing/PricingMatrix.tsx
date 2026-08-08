import Reveal from "@/components/motion/Reveal";
import { Check, Minus } from "lucide-react";

const rows = [
  {
    feature: "JSON viewer, formatter, validator",
    free: true,
    pro: true,
    team: true,
    enterprise: true,
  },
  {
    feature: "Tree, graph, JSONPath, JQ",
    free: true,
    pro: true,
    team: true,
    enterprise: true,
  },
  {
    feature: "Schema validate / generate",
    free: true,
    pro: true,
    team: true,
    enterprise: true,
  },
  {
    feature: "Webhook Tester",
    free: "Limited",
    pro: "Higher caps",
    team: "Shared endpoints*",
    enterprise: "Custom",
  },
  {
    feature: "AI actions / month",
    free: "20",
    pro: "Unlimited†",
    team: "Pooled†",
    enterprise: "Custom",
  },
  {
    feature: "Encrypted snapshots",
    free: "Limited",
    pro: "Unlimited",
    team: "Shared collections*",
    enterprise: "Custom retention",
  },
  {
    feature: "Performance Mode (large JSON)",
    free: false,
    pro: true,
    team: true,
    enterprise: true,
  },
  {
    feature: "Team workspaces & version history",
    free: false,
    pro: false,
    team: "Coming soon",
    enterprise: true,
  },
  {
    feature: "SSO / audit logs",
    free: false,
    pro: false,
    team: false,
    enterprise: "Coming soon",
  },
  {
    feature: "Priority support",
    free: false,
    pro: "Email",
    team: "Priority",
    enterprise: "Dedicated",
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
        <Minus size={12} aria-hidden />
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
          Core tools stay free. Upgrade when you need higher limits, Performance
          Mode, or team workflows.
        </p>
      </Reveal>

      <div className="mt-8 overflow-x-auto rounded-4xl bg-white dark:bg-muted">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-black/8 dark:border-foreground/10">
              <th className="px-4 py-4 font-bold sm:px-6">Capability</th>
              <th className="px-3 py-4 font-bold">Free</th>
              <th className="px-3 py-4 font-bold">Pro</th>
              <th className="px-3 py-4 font-bold">Team</th>
              <th className="px-3 py-4 font-bold sm:px-6">Enterprise</th>
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
                <td className="px-3 py-3.5">
                  <Cell value={row.pro} />
                </td>
                <td className="px-3 py-3.5">
                  <Cell value={row.team} />
                </td>
                <td className="px-3 py-3.5 sm:px-6">
                  <Cell value={row.enterprise} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-black/50 dark:text-foreground/45">
        * Team shared collections and endpoints roll out with workspaces. † Fair
        use applies to unlimited AI.
      </p>
    </section>
  );
};

export default PricingMatrix;
