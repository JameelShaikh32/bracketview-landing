import type { HowItWorksStep } from "@/app/data/constant";
import { howItWorksSteps } from "@/app/data/constant";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const StepCard = ({ step, title, description }: HowItWorksStep) => {
    return (
        <article className="group flex min-h-64 flex-1 flex-col rounded-4xl bg-white p-6 text-black transition-colors duration-300 hover:bg-accent sm:min-h-72 sm:p-8 dark:bg-muted dark:text-foreground dark:hover:bg-accent-dark dark:hover:text-white">
            <div className="mb-8 flex size-12 items-center justify-center rounded-2xl bg-gray text-black transition-colors duration-300 group-hover:bg-white sm:size-14 dark:bg-background dark:text-foreground dark:group-hover:bg-white dark:group-hover:text-black">
                <span className="text-base font-bold tracking-tight sm:text-lg">
                    {step}
                </span>
            </div>

            <h3 className="text-xl font-bold leading-snug sm:text-2xl">{title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed opacity-80">
                {description}
            </p>
        </article>
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
                <path
                    d={path}
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeDasharray="6 8"
                    strokeLinecap="round"
                />
                <circle cx="0" cy="40" r="3.5" fill="currentColor" />
                <circle cx="56" cy="40" r="3.5" fill="currentColor" />
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
            <path
                d="M 16 0 C 4 16, 28 32, 16 48"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="6 8"
                strokeLinecap="round"
            />
            <circle cx="16" cy="0" r="3.5" fill="currentColor" />
            <circle cx="16" cy="48" r="3.5" fill="currentColor" />
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
                <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
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
                </div>

                {/* Mobile — stacked with vertical connectors */}
                <div className="mt-14 flex flex-col sm:mt-16 md:hidden">
                    {howItWorksSteps.map((item, index) => (
                        <div key={item.step}>
                            <StepCard {...item} />
                            {index < howItWorksSteps.length - 1 && <VerticalConnector />}
                        </div>
                    ))}
                </div>

                {/* Desktop — cards with wavy connectors in the gaps */}
                <div className="mt-14 hidden items-stretch sm:mt-16 md:flex">
                    <StepCard {...howItWorksSteps[0]} />
                    <WavyConnector direction="up" />
                    <StepCard {...howItWorksSteps[1]} />
                    <WavyConnector direction="down" />
                    <StepCard {...howItWorksSteps[2]} />
                </div>

                <div className="mt-14 flex justify-center sm:mt-16">
                    <Link
                        href="https://app.bracketview.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl bg-accent px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
                    >
                        Open BracketView
                        <ArrowUpRight size={18} aria-hidden />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
