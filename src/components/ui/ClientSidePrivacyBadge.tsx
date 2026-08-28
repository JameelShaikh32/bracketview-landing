import { Lock } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";

type ClientSidePrivacyBadgeProps = ComponentPropsWithoutRef<"div"> & {
  /** Icon-only on narrow viewports; full copy from `sm` upward */
  compact?: boolean;
};

const ClientSidePrivacyBadge = ({
  compact = false,
  className = "",
  ...props
}: ClientSidePrivacyBadgeProps) => {
  const label =
    "Viewing, formatting, and querying run in your browser. Optional AI, snapshot links, and Webhook Tester use the server only when you choose them.";

  return (
    <div
      role="status"
      aria-label={label}
      title={label}
      className={[
        "inline-flex max-w-full items-center gap-1.5 rounded-md border",
        "border-foreground/[0.07] bg-foreground/3 px-2 py-1",
        "text-xs font-medium leading-snug tracking-wide text-foreground/45 sm:text-sm",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm",
        "select-none transition-colors duration-200",
        "hover:border-emerald-500/20 hover:text-foreground/60",
        "dark:border-white/8 dark:bg-white/4 dark:text-foreground/50",
        "dark:hover:border-emerald-400/25 dark:hover:text-foreground/70",
        className,
      ].join(" ")}
      {...props}
    >
      <span
        className="flex size-6 md:size-4 shrink-0 items-center justify-center rounded-sm bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400/90"
        aria-hidden
      >
        <Lock size={10} strokeWidth={2.25} />
      </span>

      {compact ? (
        <>
          {/* <span className="truncate sm:hidden">Client-side</span> */}
          <span className="leading-snug">{label}</span>
        </>
      ) : (
        <span className="truncate">{label}</span>
      )}
    </div>
  );
};

export default ClientSidePrivacyBadge;
