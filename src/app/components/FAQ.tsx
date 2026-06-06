"use client";

import { faqItems } from "@/app/data/constant";
import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number>(1);

    return (
        <section
            id="faq"
            className="relative w-full px-4 pb-14 pt-16 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center sm:mb-14">
                    <h2 className="text-3xl font-bold leading-snug text-black sm:text-4xl md:text-[2.75rem] dark:text-foreground">
                        Frequently asked questions
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-black/70 sm:text-base dark:text-foreground/70">
                        We have given answers to the most popular questions below
                    </p>
                </div>

                <div className="rounded-4xl bg-white p-6 sm:p-10 lg:p-12 dark:bg-muted">
                    <ul className="divide-y divide-black/10 dark:divide-foreground/10">
                        {faqItems.map((item, index) => {
                            const isOpen = openIndex === index;
                            const step = String(index + 1).padStart(2, "0");
                            const panelId = `faq-panel-${index}`;

                            return (
                                <li key={item.question}>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenIndex(isOpen ? -1 : index)
                                        }
                                        className="flex w-full cursor-pointer items-start gap-4 py-6 text-left sm:gap-6 sm:py-8"
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                    >
                                        <motion.span
                                            layout
                                            className={`flex size-10 shrink-0 items-center justify-center text-sm font-bold sm:size-11 ${isOpen
                                                ? "rounded-full bg-black text-white dark:bg-foreground dark:text-background"
                                                : "text-black dark:text-foreground"
                                                }`}
                                            transition={{
                                                duration: 0.25,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            {step}
                                        </motion.span>

                                        <span className="min-w-0 flex-1 pt-1">
                                            <span className="block text-base font-bold leading-snug text-black sm:text-lg dark:text-foreground">
                                                {item.question}
                                            </span>
                                        </span>

                                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-black dark:bg-accent-dark dark:text-white sm:size-11">
                                            <AnimatePresence mode="wait" initial={false}>
                                                {isOpen ? (
                                                    <motion.span
                                                        key="minus"
                                                        initial={{
                                                            opacity: 0,
                                                            rotate: -90,
                                                            scale: 0.8,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            rotate: 0,
                                                            scale: 1,
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            rotate: 90,
                                                            scale: 0.8,
                                                        }}
                                                        transition={{
                                                            duration: 0.2,
                                                        }}
                                                        className="flex items-center justify-center"
                                                    >
                                                        <Minus
                                                            size={18}
                                                            strokeWidth={2.5}
                                                            aria-hidden
                                                        />
                                                    </motion.span>
                                                ) : (
                                                    <motion.span
                                                        key="plus"
                                                        initial={{
                                                            opacity: 0,
                                                            rotate: -90,
                                                            scale: 0.8,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            rotate: 0,
                                                            scale: 1,
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            rotate: 90,
                                                            scale: 0.8,
                                                        }}
                                                        transition={{
                                                            duration: 0.2,
                                                        }}
                                                        className="flex items-center justify-center"
                                                    >
                                                        <Plus
                                                            size={18}
                                                            strokeWidth={2.5}
                                                            aria-hidden
                                                        />
                                                    </motion.span>
                                                )}
                                            </AnimatePresence>
                                        </span>
                                    </button>

                                    <div
                                        id={panelId}
                                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${isOpen
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                            }`}
                                        aria-hidden={!isOpen}
                                    >
                                        <div className="overflow-hidden">
                                            <motion.p
                                                initial={false}
                                                animate={{
                                                    opacity: isOpen ? 1 : 0,
                                                    y: isOpen ? 0 : -8,
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: "easeOut",
                                                }}
                                                className="pb-6 pl-14 pr-14 text-sm leading-relaxed text-black/75 sm:pb-8 sm:pl-19 sm:pr-16 dark:text-foreground/75"
                                            >
                                                {item.answer}
                                            </motion.p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
