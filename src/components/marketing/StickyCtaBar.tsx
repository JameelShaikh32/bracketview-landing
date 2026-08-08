"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const APP_URL = "https://app.bracketview.in";
const PLAYGROUND_URL = "https://app.bracketview.in/?sample=api-error";

const StickyCtaBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 480);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-3 transition-all duration-300 sm:px-4 sm:pb-4 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      role="region"
      aria-label="Quick actions"
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md dark:border-foreground/10 dark:bg-muted/95">
        <p className="hidden text-sm font-medium text-black sm:block dark:text-foreground">
          Debug JSON faster — free in your browser
        </p>
        <div className="flex w-full items-center justify-end gap-2 sm:w-auto">
          <Link
            href={PLAYGROUND_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-black/15 px-3 text-xs font-medium text-black transition-colors hover:bg-black/5 sm:px-4 sm:text-sm dark:border-foreground/20 dark:text-foreground dark:hover:bg-foreground/10"
          >
            Open Playground
          </Link>
          <Link
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl bg-accent px-3 text-xs font-medium text-white transition-opacity hover:opacity-90 sm:px-4 sm:text-sm dark:bg-accent-dark"
          >
            Try Free
            <ArrowUpRight size={14} aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StickyCtaBar;
