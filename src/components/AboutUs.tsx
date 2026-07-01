import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import StaggerGroup from "@/components/motion/StaggerGroup";
import { ArrowRight } from "lucide-react";

const aboutHighlights = [
    {
        title: "Privacy-first",
        description: "Core tools run locally in your browser whenever possible.",
    },
    {
        title: "Freemium model",
        description:
            "Core viewer, formatter, validator, and query tools stay free. Pro unlocks larger uploads, Performance Mode, unlimited snapshots, and unlimited AI.",
    },
    {
        title: "Built for builders",
        description: "Designed for developers, analysts, and students every day.",
    },
];

const AboutUs = () => {
    return (
        <section
            id="about"
            className="relative w-full px-4 pb-8 pt-16 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">
                <Reveal variant="scaleIn" className="rounded-4xl bg-white p-8 sm:p-12 lg:p-16 dark:bg-muted">
                    <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                        <span className="rounded-full border border-black px-5 py-1.5 text-sm font-medium text-black dark:border-foreground dark:text-foreground">
                            About us
                        </span>

                        <h2 className="mt-8 max-w-6xl text-3xl font-bold leading-snug tracking-tight text-black sm:mt-10 sm:text-4xl md:text-[2.75rem] dark:text-foreground">
                            What is BracketView?
                        </h2>

                        <p className="mt-6 max-w-6xl text-sm leading-relaxed text-black/75 sm:mt-8 sm:text-base dark:text-foreground/70">
                            BracketView is a freemium online JSON viewer and formatter
                            for developers. It lets you format, validate, query, and
                            share JSON directly in your browser — no installation
                            required. Core tools including the formatter, validator,
                            tree view, JSONPath query, JQ filters, and JSON diff run
                            100% client-side, meaning your data never leaves your
                            device.
                        </p>

                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/70">
                            We believe every developer deserves powerful tools to inspect,
                            format, and validate JSON with full clarity — without installing
                            desktop software or uploading sensitive data unnecessarily.
                        </p>

                        <Link
                            href="/about"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-opacity hover:opacity-80 dark:text-accent-dark"
                        >
                            Read more about BracketView
                            <ArrowRight size={16} aria-hidden />
                        </Link>
                    </div>

                    <StaggerGroup className="mt-12 grid grid-cols-1 items-stretch gap-4 sm:mt-14 md:grid-cols-3 lg:gap-5">
                        {aboutHighlights.map((item) => (
                            <div
                                key={item.title}
                                className="flex h-full flex-col rounded-3xl bg-gray p-6 dark:bg-background"
                            >
                                <h3 className="text-lg font-bold text-black dark:text-foreground">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-black/70 dark:text-foreground/70">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </StaggerGroup>
                </Reveal>
            </div>
        </section>
    );
};

export default AboutUs;
