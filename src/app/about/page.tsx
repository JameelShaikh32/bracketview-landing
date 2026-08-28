import {
    founderName,
    founderStoryParagraphs,
    founderStoryTitle,
    founderTitle
} from "@/app/data/founder";
import PageHeader from "@/components/motion/PageHeader";
import Reveal from "@/components/motion/Reveal";
import StaggerGroup from "@/components/motion/StaggerGroup";
import { createPageMetadata } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = createPageMetadata({
    path: "/about",
    title: "About BracketView — Who We Are & Why We Built It",
    description:
        "Learn who built BracketView, why we created a privacy-first JSON viewer and formatter, and how our browser-based tools help developers work with API data.",
});

const aboutHighlights = [
    {
        title: "Privacy-first",
        description:
            "Core tools — formatter, validator, tree, graph, node, table, JSONPath, JQ, and diff — run locally in your browser whenever possible.",
    },
    {
        title: "Freemium model",
        description:
            "Core tools stay free — including Node, Table, and nine UI languages. Pro is for larger uploads, Performance Mode, longer snapshot links, and AI without a monthly cap.",
    },
    {
        title: "Built for builders",
        description:
            "Designed for developers, API engineers, analysts, and students who inspect JSON responses every day.",
    },
];

const AboutPage = () => {
    return (
        <main className="w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <PageHeader
                    badge="About"
                    title="About BracketView"
                    description="A privacy-first JSON workspace for developers who need to format, validate, query, and compare API data in the browser — as text, tree, graph, node, or table — or as a local Windows app."
                />

                <div className="mx-auto mt-14 max-w-7xl space-y-8">
                    <Reveal variant="fadeUp">
                        <section className="rounded-4xl bg-white p-8 sm:p-12 dark:bg-muted">
                            <h2 className="text-2xl font-bold">What problem we solve</h2>
                            <p className="mt-4 text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75">
                                Developers spend hours debugging API responses, webhook
                                payloads, and config files. Most JSON tools either
                                require a desktop install, upload your data to a
                                server by default, or bury useful features behind
                                cluttered interfaces.
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75">
                                BracketView is a freemium online JSON viewer and
                                formatter that runs in your browser. Paste raw JSON,
                                catch syntax errors in real time, beautify or minify
                                output, run JSONPath or JQ queries, diff two versions,
                                and validate against JSON Schema — without leaving
                                your tab.
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75">
                                The marketing site at bracketview.in explains the
                                product and publishes JSON tooling guides. The
                                workspace lives at{" "}
                                <a
                                    href="https://app.bracketview.in"
                                    className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                                >
                                    app.bracketview.in
                                </a>
                                .
                            </p>
                            <a
                                href="https://app.bracketview.in"
                                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
                            >
                                Open the workspace
                                <ArrowUpRight size={16} aria-hidden />
                            </a>
                        </section>
                    </Reveal>

                    <StaggerGroup className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {aboutHighlights.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-3xl bg-white p-6 dark:bg-muted"
                            >
                                <h3 className="text-lg font-bold">{item.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-black/70 dark:text-foreground/70">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </StaggerGroup>

                    <Reveal variant="fadeUp">
                        <section
                            itemScope
                            itemType="https://schema.org/Person"
                            className="rounded-4xl bg-white p-8 sm:p-12 dark:bg-muted"
                        >
                            <h2 className="text-2xl font-bold">Who built BracketView</h2>
                            <div className="mt-6">
                                <span
                                    itemProp="name"
                                    className="text-lg font-bold"
                                >
                                    {founderName}
                                </span>
                                <span
                                    itemProp="jobTitle"
                                    className="mt-1 block text-sm text-black/70 dark:text-foreground/70"
                                >
                                    {founderTitle}
                                </span>

                                <h3 className="mt-8 text-lg font-bold">
                                    {founderStoryTitle}
                                </h3>
                                <div itemProp="description">
                                    {founderStoryParagraphs.map((paragraph, index) => (
                                        <p
                                            key={index}
                                            className="mt-4 text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                                <a
                                    href="https://app.bracketview.in"
                                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
                                >
                                    Try BracketView
                                    <ArrowUpRight size={16} aria-hidden />
                                </a>
                                <div className="mt-6 flex flex-wrap gap-4 border-t border-black/10 pt-6 text-sm dark:border-foreground/10">
                                    <a
                                        itemProp="sameAs"
                                        href="https://www.linkedin.com/in/dev-jameel"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                                    >
                                        LinkedIn
                                    </a>
                                    <a
                                        itemProp="sameAs"
                                        href="https://medium.com/@dev-jameel"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                                    >
                                        Medium
                                    </a>
                                </div>
                            </div>
                        </section>
                    </Reveal>

                    <Reveal variant="fadeUp">
                        <section className="rounded-4xl bg-white p-8 sm:p-12 dark:bg-muted">
                            <h2 className="text-2xl font-bold">Get in touch</h2>
                            <p className="mt-4 text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75">
                                Questions about the product, billing, or privacy?
                                Visit our{" "}
                                <Link
                                    href="/contact"
                                    className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                                >
                                    contact page
                                </Link>{" "}
                                or read the{" "}
                                <Link
                                    href="/privacy"
                                    className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                                >
                                    privacy policy
                                </Link>
                                .
                            </p>
                        </section>
                    </Reveal>
                </div>
            </div>
        </main>
    );
};

export default AboutPage;
