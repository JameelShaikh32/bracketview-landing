"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const APP_URL = "https://app.bracketview.in";

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
      className={`fixed inset-x-0 bottom-0 z-40 hidden px-3 pb-3 transition-all duration-300 md:block sm:px-4 sm:pb-4 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      role="region"
      aria-label="Quick actions"
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md dark:border-foreground/10 dark:bg-muted/95">
        <p className="hidden text-sm font-medium text-black sm:block dark:text-foreground">
          Debug JSON faster — five views, nine languages
        </p>
        <div className="flex w-full items-center justify-end gap-2 sm:w-auto">
          <Link
            href="/downloads"
            className="inline-flex h-11 items-center justify-center gap-1.5 rounded-xl border border-black/60 bg-white px-3 text-sm font-medium text-black transition-colors hover:bg-black/5 sm:px-4 dark:border-background dark:bg-white dark:text-black"
          >
            <Image
              src="/logo.webp"
              alt="BracketView logo"
              width={16}
              height={16}
              sizes="16px"
              className="size-4"
            />
            Download
          </Link>
          <Link
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-1.5 rounded-xl bg-accent px-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:px-4 dark:bg-accent-dark"
          >
            Open the workspace
            <ArrowUpRight size={14} aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StickyCtaBar;
