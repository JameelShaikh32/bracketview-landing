"use client";

import { ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "bv-exit-intent-dismissed";
const PLAYGROUND_URL = "https://app.bracketview.in/?sample=api-error";
const APP_URL = "https://app.bracketview.in";

const ExitIntentModal = () => {
  const [open, setOpen] = useState(false);

  const dismiss = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* ignore */
    }

    const isDesktop = () =>
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const onMouseOut = (event: MouseEvent) => {
      if (!isDesktop()) return;
      if (event.clientY > 0) return;
      if (event.relatedTarget != null) return;
      setOpen(true);
    };

    document.addEventListener("mouseout", onMouseOut);
    return () => document.removeEventListener("mouseout", onMouseOut);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, dismiss]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-md rounded-4xl bg-white p-6 shadow-xl sm:p-8 dark:bg-muted"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-4 top-4 rounded-lg p-1 text-black/60 transition-colors hover:bg-black/5 hover:text-black dark:text-foreground/60 dark:hover:bg-foreground/10 dark:hover:text-foreground"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <p className="text-xs font-medium uppercase tracking-wider text-accent-dark dark:text-accent">
          Before you go
        </p>
        <h2
          id="exit-intent-title"
          className="mt-2 text-xl font-bold text-black sm:text-2xl dark:text-foreground"
        >
          Try the playground with a sample API error
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-black/70 dark:text-foreground/70">
          Open BracketView with a realistic malformed payload — repair,
          validate, and explore the tree without signing up.
        </p>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Link
            href={PLAYGROUND_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-4 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
          >
            Open Playground
            <ArrowUpRight size={16} aria-hidden />
          </Link>
          <Link
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="inline-flex h-11 flex-1 items-center justify-center rounded-xl border-2 border-black/10 px-4 text-sm font-medium text-black transition-colors hover:bg-black/5 dark:border-foreground/15 dark:text-foreground dark:hover:bg-foreground/10"
          >
            Open the workspace
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentModal;
