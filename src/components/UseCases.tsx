"use client";

import type { UseCaseItem } from "@/app/data/constant";
import { useCases } from "@/app/data/constant";
import Reveal from "@/components/motion/Reveal";
import StaggerGroup from "@/components/motion/StaggerGroup";
import { springTransition } from "@/components/motion/variants";
import { motion } from "motion/react";
import Link from "next/link";

const UseCaseCard = ({
    icon: Icon,
    title,
    description,
    relatedLinks,
}: UseCaseItem) => {
    return (
        <motion.article
            whileHover={{ y: -4 }}
            transition={springTransition}
            className="group flex h-full min-h-56 flex-col rounded-4xl bg-white p-6 text-black transition-colors duration-300 hover:bg-accent sm:min-h-64 sm:p-8 dark:bg-muted dark:text-foreground dark:hover:bg-accent-dark dark:hover:text-white"
        >
            <div className="mb-6 flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gray text-black transition-colors duration-300 group-hover:bg-white sm:mb-8 sm:size-14 dark:bg-background dark:text-foreground dark:group-hover:bg-white dark:group-hover:text-black">
                <Icon size={22} strokeWidth={1.75} aria-hidden />
            </div>

            <h3 className="text-xl font-bold leading-snug sm:text-2xl">{title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed opacity-80">
                {description}
            </p>
            {relatedLinks && relatedLinks.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-3">
                    {relatedLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-xs font-medium underline-offset-2 hover:underline"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            ) : null}
        </motion.article>
    );
};

const UseCases = () => {
    return (
        <section
            id="use-cases"
            aria-label="Use cases"
            className="relative w-full px-4 pb-24 pt-16 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">
                <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    <span className="rounded-full border border-black px-5 py-1.5 text-sm font-medium text-black dark:border-foreground dark:text-foreground">
                        Use cases
                    </span>

                    <h2 className="mt-8 max-w-3xl text-3xl font-bold leading-snug tracking-tight text-black sm:mt-10 sm:text-4xl md:text-[2.75rem] dark:text-foreground">
                        Built for the JSON work you do every day
                    </h2>

                    <p className="mt-6 max-w-xl text-sm leading-relaxed text-black/75 sm:mt-8 sm:text-base dark:text-foreground/70">
                        Whether you are shipping APIs, reviewing webhooks, or cleaning
                        up configs, BracketView fits into your daily workflow.
                    </p>
                </Reveal>

                <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    {useCases.map((useCase) => (
                        <UseCaseCard key={useCase.title} {...useCase} />
                    ))}
                </StaggerGroup>
            </div>
        </section>
    );
};

export default UseCases;
