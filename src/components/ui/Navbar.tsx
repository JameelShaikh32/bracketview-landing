"use client";

import { navLinks } from "@/app/data/constant";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";

const SCROLL_THRESHOLD = 24;

const subscribeToClient = () => () => { };
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

const iconButtonClasses =
  "flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-black text-white transition-colors duration-300 hover:bg-black/10 hover:text-foreground dark:bg-gray dark:text-black dark:hover:bg-gray/30 dark:hover:text-gray";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isClient = useSyncExternalStore(
    subscribeToClient,
    getClientSnapshot,
    getServerSnapshot,
  );
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [menuTop, setMenuTop] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const updateMenuPosition = () => {
    if (!navRef.current) return;
    setMenuTop(navRef.current.getBoundingClientRect().bottom + 8);
  };

  useLayoutEffect(() => {
    if (!menuOpen) return;
    updateMenuPosition();
  }, [menuOpen, scrolled]);

  useEffect(() => {
    if (!menuOpen) return;

    window.addEventListener("resize", updateMenuPosition);
    window.addEventListener("scroll", updateMenuPosition, { passive: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (menuRef.current?.contains(target)) return;
      if (menuButtonRef.current?.contains(target)) return;

      setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      window.removeEventListener("resize", updateMenuPosition);
      window.removeEventListener("scroll", updateMenuPosition);
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  const mobileMenu = (
    <AnimatePresence>
      {menuOpen ? (
        <motion.div
          ref={menuRef}
          id="mobile-nav-menu"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-x-4 z-45 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_8px_32px_rgba(25,19,20,0.12)] dark:border-white/10 dark:bg-[#1a1718] dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)] sm:inset-x-6 md:hidden"
          style={{ top: menuTop }}
        >
          <ul className="flex flex-col px-2 py-2">
            {navLinks.map((link: { label: string; href: string }) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between border-t border-black/5 px-4 py-3 dark:border-white/10">
            <span className="text-sm font-medium text-foreground/70">
              Theme
            </span>
            <ThemeToggle />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-2 sm:px-6">
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className={`relative mx-auto flex w-full min-w-0 items-center gap-3 transition-all duration-300 ease-out ${scrolled
          ? "max-w-7xl rounded-full bg-white/70 px-3 py-2 shadow-[0_8px_32px_rgba(25,19,20,0.08)] backdrop-blur-md dark:bg-black/60 dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)] sm:px-4 sm:py-2.5 md:px-6"
          : "bg-transparent px-1 py-3 sm:px-2"
          }`}
      >
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-2 text-foreground transition-opacity hover:opacity-80"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.webp"
            alt="BracketView logo"
            width={32}
            height={32}
            sizes="32px"
            className="size-8 shrink-0"
          />
          <span className="truncate text-lg font-medium tracking-tight md:text-xl">
            BracketView
          </span>
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navLinks.map((link: { label: string; href: string }) => (
            <Link key={link.label} href={link.href} className="text-sm cursor-pointer rounded-xl bg-transparent px-3 py-1 transition-colors duration-300 hover:bg-black/10 dark:hover:bg-gray dark:hover:text-black">
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="https://app.bracketview.in"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="hidden rounded-2xl bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-85 md:inline-flex dark:bg-accent-dark"
          >
            Open App
          </Link>

          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className={`${iconButtonClasses} md:hidden`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  <X size={20} aria-hidden />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  <Menu size={20} aria-hidden />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {isClient ? createPortal(mobileMenu, document.body) : null}
    </header>
  );
};

export default Navbar;
