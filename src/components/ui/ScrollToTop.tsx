"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed right-4 bottom-4 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-accent text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-muted hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:right-6 md:bottom-6 dark:border-foreground/10 dark:bg-accent-dark dark:text-foreground dark:hover:bg-muted dark:hover:text-white cursor-pointer ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp size={18} aria-hidden />
    </button>
  );
};

export default ScrollToTop;
