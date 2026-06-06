"use client";

import AnimatedPath from "@/app/components/motion/AnimatedPath";
import Reveal from "@/app/components/motion/Reveal";
import StaggerGroup from "@/app/components/motion/StaggerGroup";
import { springTransition } from "@/app/components/motion/variants";
import type { HowItWorksStep } from "@/app/data/constant";
import { howItWorksSteps } from "@/app/data/constant";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const StepCard = ({ step, title, description }: HowItWorksStep) => {
    return (
        <motion.article
            whileHover={{ y: -4 }}
            transition={springTransition}
            className="group flex min-h-64 flex-1 flex-col rounded-4xl bg-white p-6 text-black transition-colors duration-300 hover:bg-accent sm:min-h-72 sm:p-8 dark:bg-muted dark:text-foreground dark:hover:bg-accent-dark dark:hover:text-white"
        >
            <div className="mb-8 flex size-12 items-center justify-center rounded-2xl bg-gray text-black transition-colors duration-300 group-hover:bg-white sm:size-14 dark:bg-background dark:text-foreground dark:group-hover:bg-white dark:group-hover:text-black">
                <span className="text-base font-bold tracking-tight sm:text-lg">
                    {step}
                </span>
            </div>

            <h3 className="text-xl font-bold leading-snug sm:text-2xl">{title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed opacity-80">
                {description}
            </p>
        </motion.article>
    );
};

const WavyConnector = ({ direction }: { direction: "up" | "down" }) => {
    const path =
        direction === "up"
            ? "M 0 40 C 14 8, 42 72, 56 40"
            : "M 0 40 C 14 72, 42 8, 56 40";

    return (
        <div
            className="hidden shrink-0 items-center justify-center self-center md:flex md:w-12 lg:w-16"
            aria-hidden
        >
            <svg
                viewBox="0 0 56 80"
                className="h-16 w-full text-black/45 dark:text-foreground/55"
                fill="none"
            >
                <AnimatedPath
                    d={path}
                    strokeWidth={2.5}
                    strokeDasharray="6 8"
                    strokeLinecap="round"
                />
                <motion.circle
                    cx="0"
                    cy="40"
                    r="3.5"
                    fill="currentColor"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                />
                <motion.circle
                    cx="56"
                    cy="40"
                    r="3.5"
                    fill="currentColor"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                />
            </svg>
        </div>
    );
};

const VerticalConnector = () => (
    <div
        className="flex h-10 items-center pl-12 sm:pl-15 md:hidden"
        aria-hidden
    >
        <svg
            viewBox="0 0 32 48"
            className="h-full w-8 text-black/45 dark:text-foreground/55"
            fill="none"
        >
            <AnimatedPath
                d="M 16 0 C 4 16, 28 32, 16 48"
                strokeWidth={2.5}
                strokeDasharray="6 8"
                strokeLinecap="round"
            />
            <motion.circle
                cx="16"
                cy="0"
                r="3.5"
                fill="currentColor"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.3, delay: 0.6 }}
            />
            <motion.circle
                cx="16"
                cy="48"
                r="3.5"
                fill="currentColor"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.3, delay: 0.8 }}
            />
        </svg>
    </div>
);

const HowItWorks = () => {
    return (
        <section
            id="how-it-works"
            className="relative w-full px-4 pb-24 pt-16 sm:px-6 lg:px-8 lg:pb-32"
        >
            <div className="mx-auto max-w-7xl">
                <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    <span className="rounded-full border border-black px-5 py-1.5 text-sm font-medium text-black dark:border-foreground dark:text-foreground">
                        How it works
                    </span>

                    <h2 className="mt-8 max-w-3xl text-3xl font-bold leading-snug tracking-tight text-black sm:mt-10 sm:text-4xl md:text-[2.75rem] dark:text-foreground">
                        From raw JSON to insight in three steps
                    </h2>

                    <p className="mt-6 max-w-xl text-sm leading-relaxed text-black/75 sm:mt-8 sm:text-base dark:text-foreground/70">
                        Open BracketView, paste your payload, and start inspecting
                        structured data in seconds.
                    </p>
                </Reveal>

                {/* Mobile — stacked with vertical connectors */}
                <StaggerGroup className="mt-14 flex flex-col sm:mt-16 md:hidden">
                    {howItWorksSteps.map((item, index) => (
                        <div key={item.step}>
                            <StepCard {...item} />
                            {index < howItWorksSteps.length - 1 && <VerticalConnector />}
                        </div>
                    ))}
                </StaggerGroup>

                {/* Desktop — cards with wavy connectors in the gaps */}
                <div className="mt-14 hidden items-stretch sm:mt-16 md:flex">
                    <Reveal className="flex-1">
                        <StepCard {...howItWorksSteps[0]} />
                    </Reveal>
                    <WavyConnector direction="up" />
                    <Reveal className="flex-1">
                        <StepCard {...howItWorksSteps[1]} />
                    </Reveal>
                    <WavyConnector direction="down" />
                    <Reveal className="flex-1">
                        <StepCard {...howItWorksSteps[2]} />
                    </Reveal>
                </div>

                <Reveal className="mt-14 flex justify-center sm:mt-16">
                    <Link
                        href="https://app.bracketview.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl bg-accent px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
                    >
                        Open BracketView
                        <ArrowUpRight size={18} aria-hidden />
                    </Link>
                </Reveal>
            </div>
        </section>
    );
};

export default HowItWorks;
