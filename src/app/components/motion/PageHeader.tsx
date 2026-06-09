"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { getFadeUpVariant, heroStaggerContainer } from "./variants";

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
  cta?: {
    label: string;
    href: string;
    external?: boolean;
  };
}

const PageHeader = ({ badge, title, description, cta }: PageHeaderProps) => {
  const reducedMotion = useReducedMotion();
  const itemVariant = getFadeUpVariant(reducedMotion);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={heroStaggerContainer}
      className="mx-auto flex max-w-4xl flex-col items-center text-center"
    >
      <motion.span
        variants={itemVariant}
        className="rounded-full border border-black px-5 py-1.5 text-sm font-medium text-black dark:border-foreground dark:text-foreground"
      >
        {badge}
      </motion.span>

      <motion.h1
        variants={itemVariant}
        className="mt-8 text-3xl font-bold leading-snug tracking-tight text-black sm:text-4xl md:text-[2.75rem] dark:text-foreground"
      >
        {title}
      </motion.h1>

      <motion.p
        variants={itemVariant}
        className="mt-6 max-w-2xl text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/70"
      >
        {description}
      </motion.p>

      {cta && (
        <motion.div variants={itemVariant}>
          <Link
            href={cta.href}
            target={cta.external ? "_blank" : undefined}
            rel={cta.external ? "noopener noreferrer" : undefined}
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-accent px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
          >
            {cta.label}
            <ArrowUpRight size={18} aria-hidden />
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PageHeader;
