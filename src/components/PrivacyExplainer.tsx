import Reveal from "@/components/motion/Reveal";
import { Lock, MonitorSmartphone, Server } from "lucide-react";
import Link from "next/link";

const PrivacyVisual = () => {
  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-black/8 bg-gray p-6 sm:p-8 dark:border-foreground/10 dark:bg-background"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,156,28,0.12),_transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_right,_rgba(255,156,28,0.08),_transparent_55%)]" />

      <div className="relative space-y-4">
        <div className="rounded-2xl border border-emerald-500/25 bg-white p-4 dark:border-emerald-400/20 dark:bg-muted">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
              <MonitorSmartphone size={20} strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-sm font-bold text-black dark:text-foreground">
                In your browser
              </p>
              <p className="mt-1 text-xs leading-relaxed text-black/60 dark:text-foreground/60">
                View · Format · Validate · JSONPath · jq
              </p>
            </div>
            <Lock
              size={16}
              className="ml-auto text-emerald-600 dark:text-emerald-400"
              strokeWidth={2}
            />
          </div>
          <div className="mt-4 rounded-xl bg-background/80 p-3 font-mono text-[11px] leading-relaxed text-black/70 dark:text-foreground/70">
            <span className="text-emerald-700 dark:text-emerald-400">$</span>{" "}
            parse → tree → search
            <br />
            <span className="text-black/40 dark:text-foreground/40">
              // stays on this device
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 px-2">
          <div className="h-px flex-1 border-t border-dashed border-black/15 dark:border-foreground/20" />
          <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-black/45 dark:text-foreground/45">
            Only when you choose
          </span>
          <div className="h-px flex-1 border-t border-dashed border-black/15 dark:border-foreground/20" />
        </div>

        <div className="rounded-2xl border border-black/8 bg-white/80 p-4 dark:border-foreground/10 dark:bg-muted/80">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-accent/15 text-accent-dark dark:text-accent">
              <Server size={20} strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-sm font-bold text-black dark:text-foreground">
                Optional cloud paths
              </p>
              <p className="mt-1 text-xs leading-relaxed text-black/60 dark:text-foreground/60">
                AI repair · Snapshots · Webhooks · History
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PrivacyExplainer = () => {
  return (
    <section
      id="privacy"
      aria-labelledby="privacy-heading"
      className="relative w-full px-4 pb-16 pt-8 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rounded-4xl bg-white p-8 sm:p-12 dark:bg-muted">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="order-2 lg:order-1">
                <PrivacyVisual />
              </div>

              <div className="order-1 lg:order-2">
                <h2
                  id="privacy-heading"
                  className="text-3xl font-bold leading-normal text-black sm:text-4xl dark:text-foreground"
                >
                  Privacy and security
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75">
                  Core viewing, formatting, validation, JSONPath, and jq run in
                  your browser. Optional AI repair and conversion, encrypted
                  snapshot links, Webhook Tester, and signed-in history previews
                  use BracketView servers (and AI providers for AI features)
                  when you choose them. Do not paste secrets into optional cloud
                  features unless you accept that risk.
                </p>
                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75">
                  <li>Local-first for everyday JSON inspection and editing</li>
                  <li>Clear prompts before sharing or sending data to AI</li>
                  <li>App workspace is ad-free</li>
                </ul>
                <p className="mt-6 text-sm">
                  <Link
                    href="/privacy"
                    className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                  >
                    Read the privacy policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PrivacyExplainer;
