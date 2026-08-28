"use client";

import AnimatedPath from "@/components/motion/AnimatedPath";
import Reveal from "@/components/motion/Reveal";
import {
    getScaleInVariant,
    staggerContainer,
} from "@/components/motion/variants";
import { useHydratedReducedMotion } from "@/components/motion/useHydratedReducedMotion";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const avatarColors = [
    "bg-orange-300",
    "bg-amber-400",
    "bg-yellow-500",
    "bg-lime-500",
    "bg-emerald-400",
    "bg-sky-400",
    "bg-violet-400",
];

const chartDots = [
    { left: "15%", top: "57%", delay: 0.9 },
    { left: "48%", top: "40%", delay: 1.1 },
    { left: "76%", top: "30%", delay: 1.3 },
];

const statBadges = [
    { text: "↑ 8.1k nodes", className: "left-10 top-10", delay: 1.0 },
    {
        text: "↓ 2.6ms",
        className: "left-1/2 top-16 -translate-x-1/2",
        delay: 1.2,
    },
    { text: "↑ 99.9%", className: "right-10 top-8", delay: 1.4 },
];

const CtaSection = () => {
    const reducedMotion = useHydratedReducedMotion();
    const scaleVariant = getScaleInVariant(reducedMotion);

    return (
        <section className="relative w-full px-4 pb-4 pt-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl bg-transparent">
                <div className="grid grid-cols-1 lg:grid-cols-3 overflow-hidden rounded-4xl">
                    {/* Left */}
                    <Reveal
                        variant="fadeLeft"
                        className="flex flex-col justify-between gap-10 overflow-hidden bg-white dark:bg-muted rounded-l-4xl p-8 sm:p-10 lg:p-12"
                    >
                        <div>
                            <span className="inline-flex rounded-full border border-black px-4 py-1.5 text-sm font-medium text-black dark:border-foreground dark:text-foreground">
                                Let&apos;s start now
                            </span>
                            <h3 className="mt-8 text-3xl font-bold leading-snug text-black sm:text-4xl dark:text-foreground">
                                Start working with JSON faster today!
                            </h3>
                        </div>

                        <Link
                            href="https://app.bracketview.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-fit items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
                        >
                            Open the workspace
                            <ArrowUpRight size={18} aria-hidden />
                        </Link>
                    </Reveal>

                    {/* Middle — accent chart panel */}
                    <div className="relative min-h-64 overflow-hidden bg-accent p-8 dark:bg-accent-dark lg:min-h-0">
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage:
                                    "linear-gradient(var(--black) 1px, transparent 1px), linear-gradient(90deg, var(--black) 1px, transparent 1px)",
                                backgroundSize: "48px 48px",
                            }}
                        />
                        <div className="relative z-10 h-full min-h-48 w-full">
                            <svg
                                viewBox="0 0 400 160"
                                className="absolute inset-0 h-full w-full text-black/80 dark:text-white/90"
                                preserveAspectRatio="none"
                                aria-hidden
                            >
                                <AnimatedPath
                                    d="M 0 120 C 60 40, 120 160, 180 80 S 300 40, 400 100"
                                    strokeWidth={3}
                                    strokeLinecap="round"
                                />
                            </svg>
                            {chartDots.map((dot) => (
                                <motion.span
                                    key={`${dot.left}-${dot.top}`}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-80px" }}
                                    variants={scaleVariant}
                                    transition={{ delay: dot.delay }}
                                    className="absolute size-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                                    style={{ left: dot.left, top: dot.top }}
                                />
                            ))}
                        </div>

                        {statBadges.map((badge) => (
                            <motion.div
                                key={badge.text}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-80px" }}
                                variants={scaleVariant}
                                transition={{
                                    delay: badge.delay,
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 20,
                                }}
                                className={`absolute z-20 rounded-full bg-white px-3 py-1 text-xs font-medium text-black ${badge.className}`}
                            >
                                {badge.text}
                            </motion.div>
                        ))}
                    </div>

                    {/* Right */}
                    <Reveal
                        variant="fadeRight"
                        className="flex flex-col justify-center gap-10 overflow-hidden bg-accent p-8 dark:bg-accent-dark sm:p-10 lg:p-12"
                    >
                        <p className="max-w-sm text-sm leading-relaxed text-black/80 sm:text-base dark:text-white/85">
                            Developers already use BracketView to inspect APIs, validate
                            configs, and ship faster. Try it too!
                        </p>

                        <div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-80px" }}
                                variants={staggerContainer}
                                className="flex flex-nowrap items-center"
                            >
                                {avatarColors.map((color, index) => (
                                    <motion.span
                                        key={color}
                                        variants={scaleVariant}
                                        className={`${color} -ml-1.5 first:ml-0 flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-accent text-xs font-bold text-black sm:-ml-2 sm:size-10 dark:border-accent-dark`}
                                        style={{ zIndex: avatarColors.length - index }}
                                    >
                                        {String.fromCharCode(65 + index)}
                                    </motion.span>
                                ))}
                                <motion.span
                                    variants={scaleVariant}
                                    className="-ml-1.5 flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-white text-xs font-bold text-black sm:-ml-2 sm:size-10 dark:border-accent-dark"
                                >
                                    +1k
                                </motion.span>
                            </motion.div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
