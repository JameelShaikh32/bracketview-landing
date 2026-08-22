"use client";

import AnimatedPath from "@/components/motion/AnimatedPath";
import Reveal from "@/components/motion/Reveal";
import { springTransition } from "@/components/motion/variants";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";

type StepItem = {
    step: string;
    title: string;
    description: string;
};

type StepsSectionProps = {
    id?: string;
    ariaLabel?: string;
    badge?: string;
    title: string;
    description?: ReactNode;
    steps: StepItem[];
    cta?: {
        label: string;
        href: string;
        external?: boolean;
    };
    className?: string;
};

const StepCard = ({ step, title, description }: StepItem) => {
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
    <div className="flex h-10 items-center pl-12 sm:pl-15 md:hidden" aria-hidden>
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

const StepsSection = ({
    id,
    ariaLabel,
    badge = "How to",
    title,
    description,
    steps,
    cta,
    className = "",
}: StepsSectionProps) => {
    return (
        <section
            id={id}
            aria-label={ariaLabel ?? title}
            className={`relative w-full ${className}`}
        >
            <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
                <span className="rounded-full border border-black px-5 py-1.5 text-sm font-medium text-black dark:border-foreground dark:text-foreground">
                    {badge}
                </span>

                <h2 className="mt-8 max-w-3xl text-3xl font-bold leading-normal tracking-tight text-black sm:mt-10 sm:text-4xl md:text-[2.75rem] dark:text-foreground">
                    {title}
                </h2>

                {description ? (
                    <p className="mt-6 max-w-xl text-sm leading-relaxed text-black/75 sm:mt-8 sm:text-base dark:text-foreground/70">
                        {description}
                    </p>
                ) : null}
            </Reveal>

            <div className="mt-14 flex flex-col sm:mt-16 md:flex-row md:items-stretch">
                {steps.map((item, index) => (
                    <Fragment key={item.step}>
                        <Reveal className="flex-1">
                            <StepCard {...item} />
                        </Reveal>
                        {index < steps.length - 1 ? (
                            <>
                                <VerticalConnector />
                                <WavyConnector
                                    direction={index === 0 ? "up" : "down"}
                                />
                            </>
                        ) : null}
                    </Fragment>
                ))}
            </div>

            {cta ? (
                <Reveal className="mt-14 flex justify-center sm:mt-16">
                    <Link
                        href={cta.href}
                        {...(cta.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
                    >
                        {cta.label}
                        <ArrowUpRight size={18} aria-hidden />
                    </Link>
                </Reveal>
            ) : null}
        </section>
    );
};

export default StepsSection;
export type { StepItem, StepsSectionProps };
