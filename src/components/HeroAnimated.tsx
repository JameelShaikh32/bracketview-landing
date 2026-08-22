"use client";

import HeroProductDemo from "@/components/marketing/HeroProductDemo";
import { useHydratedReducedMotion } from "@/components/motion/useHydratedReducedMotion";
import {
  getFadeUpVariant,
  heroStaggerContainer,
} from "@/components/motion/variants";
import CircularText from "@/components/ui/CircularText";
import ClientSidePrivacyBadge from "@/components/ui/ClientSidePrivacyBadge";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const APP_URL = "https://app.bracketview.in";

const HeroAnimated = () => {
  const reducedMotion = useHydratedReducedMotion();
  const itemVariant = getFadeUpVariant(reducedMotion);

  return (
    <section className="relative w-full px-4 pb-12 pt-2 sm:px-6 lg:px-8">
      <div className="relative mx-auto grid grid-cols-1 gap-4 lg:min-h-[calc(100vh-12rem)] lg:grid-cols-2 lg:gap-5">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroStaggerContainer}
          className="hero-left-panel relative flex flex-col justify-start gap-2 rounded-4xl bg-white px-4 py-10 sm:px-10 sm:py-12 md:rounded-t-4xl md:rounded-bl-4xl md:rounded-br-none lg:px-12 lg:py-14 dark:bg-muted"
        >
          <div className="flex flex-col gap-6">
            <motion.p
              variants={itemVariant}
              className="text-xs font-medium uppercase tracking-[0.14em] text-accent-dark dark:text-accent"
            >
              BracketView
            </motion.p>
            <motion.h1
              variants={itemVariant}
              className="max-w-xl text-3xl font-bold leading-normal text-black md:text-5xl md:leading-normal dark:text-foreground"
            >
              Free Online JSON Viewer
            </motion.h1>
            <motion.p
              variants={itemVariant}
              className="hero-description max-w-md text-base leading-relaxed text-black/70 dark:text-foreground/70"
            >
              View JSON in a clean interactive tree, format and validate it,
              search nested data, and inspect large payloads in your browser.
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
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-accent px-5 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:px-6 dark:bg-accent-dark"
              >
                Open JSON Viewer
                <ArrowUpRight size={18} aria-hidden />
              </Link>

              <Link
                href="/downloads"
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-black/60 dark:border-background bg-white px-2 text-sm font-medium text-black transition-colors hover:bg-dark-bg hover:text-white sm:px-6 dark:text-black"
              >
                <Download size={18} aria-hidden />
                Download
              </Link>
            </div>
          </motion.div>

          <div className="absolute bottom-0 right-0 hidden h-22 w-16 rounded-tl-3xl bg-background md:block" />
        </motion.div>

        <div className="hero-right-panel relative min-h-88 overflow-hidden rounded-[1.75rem] bg-[#e5e0de] sm:min-h-104 md:rounded-tl-4xl md:rounded-tr-4xl md:rounded-br-none md:rounded-bl-none lg:min-h-0 dark:bg-dark-card">
          <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl p-3 sm:p-4 md:rounded-tl-2xl md:rounded-tr-2xl md:rounded-br-none md:rounded-bl-none">
            <HeroProductDemo />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute bottom-0 right-0 z-20 hidden h-18 w-38 items-center justify-center rounded-tl-4xl bg-background px-4 md:flex md:h-24 md:w-44 sm:h-16 sm:w-48 sm:rounded-tl-6xl"
          >
            <p className="text-center text-sm font-medium uppercase leading-snug tracking-[0.12em] text-black dark:text-foreground">
              Understand APIs
              <br />
              Instantly
            </p>
          </motion.div>

          <div className="absolute bottom-0 left-0 hidden h-22 w-16 rounded-tr-3xl bg-background md:block" />
          <div
            className="absolute bottom-18 right-0 hidden h-10 w-10 rounded-full bg-transparent md:bottom-24 md:block"
            style={{ boxShadow: "14px 14px 0 var(--background)" }}
          />
          <div
            className="absolute bottom-0 right-38 hidden h-10 w-10 rounded-full bg-transparent md:right-44 md:block"
            style={{ boxShadow: "14px 14px 0 var(--background)" }}
          />
        </div>

        <motion.a
          href="#what-is-bracketview"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="absolute bottom-0 left-1/2 z-30 hidden -translate-x-1/2 translate-y-[38%] lg:flex"
          aria-label="Learn more about BracketView"
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
