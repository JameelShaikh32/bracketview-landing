"use client";

import Reveal from "@/components/motion/Reveal";
import { SEO_FAQ_ITEMS } from "@/lib/seo";
import { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number>(1);

    return (
        <section
            id="faq"
            aria-label="Frequently asked questions"
            className="relative w-full px-4 pb-14 pt-16 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">
                <Reveal className="mb-12 text-center sm:mb-14">
                    <h2 className="text-3xl font-bold leading-snug text-black sm:text-4xl md:text-[2.75rem] dark:text-foreground">
                        Frequently asked questions
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-black/70 sm:text-base dark:text-foreground/70">
                        We have given answers to the most popular questions below
                    </p>
                </Reveal>

                <div className="rounded-4xl bg-white p-6 sm:p-10 lg:p-12 dark:bg-muted">
                    <ul className="divide-y divide-black/10 dark:divide-foreground/10">
                        {SEO_FAQ_ITEMS.map((item, index) => {
                            const isOpen = openIndex === index;
                            const step = String(index + 1).padStart(2, "0");
                            const panelId = `faq-panel-${index}`;

                            return (
                                <li key={item.question}>
                                    <h3 className="m-0">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenIndex(isOpen ? -1 : index)
                                            }
                                            className="flex w-full cursor-pointer items-start gap-4 py-6 text-left sm:gap-6 sm:py-8"
                                            aria-expanded={isOpen}
                                            aria-controls={panelId}
                                        >
                                            <span
                                                className={`flex size-10 shrink-0 items-center justify-center text-sm font-bold sm:size-11 ${isOpen
                                                    ? "rounded-full bg-black text-white dark:bg-foreground dark:text-background"
                                                    : "text-black dark:text-foreground"
                                                    }`}
                                            >
                                                {step}
                                            </span>

                                            <span className="min-w-0 flex-1 pt-1">
                                                <span className="block text-base font-bold leading-snug text-black sm:text-lg dark:text-foreground">
                                                    {item.question}
                                                </span>
                                            </span>

                                            <span className="relative flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-black dark:bg-accent-dark dark:text-white sm:size-11">
                                                <span
                                                    aria-hidden
                                                    className="absolute h-[2px] w-[16px] rounded-full bg-current"
                                                />
                                                <span
                                                    aria-hidden
                                                    className={`absolute h-[16px] w-[2px] rounded-full bg-current transition-transform duration-200 ease-out motion-reduce:transition-none ${isOpen ? "scale-y-0" : "scale-y-100"
                                                        }`}
                                                />
                                            </span>
                                        </button>
                                    </h3>

                                    {/* Height is toggled instantly (not animated) because animating
                                        grid-template-rows/height forces a layout recalculation on every
                                        frame, which is a major cause of poor INP. Only compositor-only
                                        properties (opacity/transform) are transitioned below. */}
                                    <div
                                        id={panelId}
                                        className={`grid ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                                        aria-hidden={!isOpen}
                                    >
                                        <div className="overflow-hidden">
                                            <p
                                                className={`pb-6 pl-14 pr-14 text-sm leading-relaxed text-black/75 transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none sm:pb-8 sm:pl-19 sm:pr-16 dark:text-foreground/75 ${isOpen
                                                    ? "translate-y-0 opacity-100"
                                                    : "-translate-y-2 opacity-0"
                                                    }`}
                                            >
                                                {item.answer}
                                            </p>
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
