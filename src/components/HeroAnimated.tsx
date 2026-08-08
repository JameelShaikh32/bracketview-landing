"use client";

import { useTheme } from "@/app/hooks/useTheme";
import {
  getFadeUpVariant,
  heroStaggerContainer,
} from "@/components/motion/variants";
import CircularText from "@/components/ui/CircularText";
import ClientSidePrivacyBadge from "@/components/ui/ClientSidePrivacyBadge";
import { ArrowDown, ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";

const hoverMediaQuery = "(hover: hover)";

const subscribeHoverCapability = (onStoreChange: () => void) => {
  const mediaQuery = window.matchMedia(hoverMediaQuery);
  mediaQuery.addEventListener("change", onStoreChange);
  return () => mediaQuery.removeEventListener("change", onStoreChange);
};

const getCanHover = () => window.matchMedia(hoverMediaQuery).matches;
const getServerCanHover = () => false;

const HeroAnimated = () => {
  const theme = useTheme();
  const reducedMotion = useReducedMotion();
  const itemVariant = getFadeUpVariant(reducedMotion);
  const canHover = useSyncExternalStore(
    subscribeHoverCapability,
    getCanHover,
    getServerCanHover,
  );
  const heroImageSrc =
    theme === "dark" ? "/images/hero-dark.webp" : "/images/hero-light.webp";
  const heroImageHeight = theme === "dark" ? 977 : 976;

  return (
    <section className="relative w-full px-4 pb-20 pt-2 sm:px-6 lg:px-8">
      <div className="relative mx-auto grid grid-cols-1 gap-4 lg:min-h-[calc(100vh-12rem)] lg:grid-cols-2 lg:gap-5">
        {/* Left panel */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroStaggerContainer}
          className="hero-left-panel relative flex flex-col justify-start gap-2 rounded-t-4xl rounded-bl-4xl bg-white px-4 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 dark:bg-muted"
        >
          <div className="flex flex-col gap-6">
            <motion.h1
              variants={itemVariant}
              className="max-w-xl text-3xl font-bold leading-snug text-black md:text-5xl dark:text-foreground"
            >
              AI-Powered JSON Viewer, Formatter &amp; Validator
            </motion.h1>
            <motion.p
              variants={itemVariant}
              className="hero-description max-w-md text-base leading-relaxed text-black/70 dark:text-foreground/70"
            >
              A fast, privacy-first JSON workspace with AI-powered syntax repair
              and a WebAssembly-powered JQ playground — format, validate &amp;
              query JSON without your data ever leaving the browser.
            </motion.p>

            <motion.div variants={itemVariant}>
              <ClientSidePrivacyBadge compact className="max-w-lg" />
            </motion.div>
          </div>

          <motion.div
            variants={itemVariant}
            className="mt-10 flex flex-col gap-3 sm:mt-12"
          >
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="https://app.bracketview.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-2xl bg-accent px-5 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:px-6 dark:bg-accent-dark"
              >
                <span className="sm:hidden">Open App</span>
                <span className="hidden sm:inline">Get Started</span>
                <ArrowUpRight size={18} aria-hidden />
              </Link>

              <Link
                href="/blog"
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 bg-transparent px-5 text-sm font-medium text-black transition-colors duration-300 hover:bg-gray-100 sm:px-6 dark:border-background dark:text-foreground dark:hover:bg-background"
              >
                JSON Guides
                <ArrowDownRight size={18} aria-hidden />
              </Link>

              <Link
                href="#features"
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 bg-transparent px-5 text-sm font-medium text-black transition-colors duration-300 hover:bg-gray-100 sm:px-6 dark:border-background dark:text-foreground dark:hover:bg-background"
              >
                Explore Features
                <ArrowDownRight size={18} aria-hidden />
              </Link>
            </div>
          </motion.div>

          <div className="absolute bottom-0 right-0 h-22 w-16 rounded-tl-3xl bg-background" />
        </motion.div>

        {/* Right panel */}
        <div className="hero-right-panel relative min-h-88 overflow-hidden rounded-t-4xl bg-accent sm:min-h-104 lg:min-h-0 dark:bg-accent-dark">
          {/* Floating stats card */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute left-5 top-6 z-10 max-w-38 sm:left-8 sm:top-8 sm:max-w-44"
          >
            <motion.div
              animate={
                reducedMotion || !canHover ? undefined : { y: [0, -6, 0] }
              }
              transition={
                reducedMotion || !canHover
                  ? undefined
                  : {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }
              }
              className="rounded-xl bg-white/45 p-2.5 shadow-[0_8px_32px_rgba(25,19,20,0.12)] backdrop-blur-md sm:p-3"
            >
              <p className="text-[0.65rem] font-medium uppercase tracking-wider text-black/60 sm:text-xs">
                Sample parse
              </p>
              <p className="mt-0.5 text-base font-bold tracking-tight text-black sm:text-lg">
                1,024 nodes
              </p>
              <p className="mt-0.5 text-[0.65rem] text-black/70 sm:text-xs">
                Formatted in 7ms
              </p>
            </motion.div>
          </motion.div>

          {/* App preview */}
          <motion.div
            initial={
              reducedMotion
                ? { opacity: 0 }
                : { opacity: 0, x: 40, scale: 0.98 }
            }
            animate={
              reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0, scale: 1 }
            }
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute bottom-8 left-8 z-0 sm:left-28 scale-115"
          >
            <Image
              src={heroImageSrc}
              alt="BracketView dark-mode JSON viewer showing AI-powered syntax repair and the WebAssembly JQ playground"
              width={1919}
              height={heroImageHeight}
              sizes="(max-width: 640px) 672px, (max-width: 1024px) 768px, 1024px"
              priority
              className="h-auto w-full max-w-2xl rounded-t-2xl object-contain object-top-left sm:max-w-none sm:w-3xl lg:w-5xl"
            />
          </motion.div>

          {/* Bottom-right cutout tagline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute bottom-0 right-0 z-20 flex h-18 w-38 items-center justify-center rounded-tl-4xl bg-background px-4 md:h-24 md:w-44 sm:h-16 sm:w-48 sm:rounded-tl-6xl"
          >
            <p className="text-center text-sm font-medium uppercase leading-snug tracking-[0.12em] text-black dark:text-foreground">
              Format JSON
              <br />
              With Ease
            </p>
          </motion.div>

          <div className="absolute bottom-0 left-0 h-22 w-16 rounded-tr-3xl bg-background" />
          <div
            className="absolute bottom-18 right-0 h-10 w-10 rounded-full bg-transparent md:bottom-24"
            style={{ boxShadow: "14px 14px 0 var(--background)" }}
          />
          <div
            className="absolute bottom-0 right-38 h-10 w-10 rounded-full bg-transparent md:right-44"
            style={{ boxShadow: "14px 14px 0 var(--background)" }}
          />
        </div>

        {/* Learn more — panel junction */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="absolute bottom-0 left-1/2 z-30 hidden -translate-x-1/2 translate-y-[38%] lg:flex"
          aria-label="Learn more about features"
        >
          <div className="relative flex items-center justify-center rounded-full bg-gray p-2 dark:bg-background">
            <CircularText
              text="Learn more • Learn more • Learn more • "
              spinDuration={18}
              onHover="slowDown"
              size={128}
              className="font-light text-black dark:text-foreground"
            />
            <span
              className="pointer-events-none absolute inset-0 flex items-center justify-center text-black dark:text-foreground"
              aria-hidden
            >
              <ArrowDown size={20} strokeWidth={2} />
            </span>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroAnimated;
