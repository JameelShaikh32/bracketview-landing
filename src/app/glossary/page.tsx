import { glossaryTerms } from "@/app/data/glossary";
import AdPlacement from "@/components/ads/AdPlacement";
import PageHeader from "@/components/motion/PageHeader";
import Reveal from "@/components/motion/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import {
    buildDefinedTermSetSchema,
    buildWebPageSchema,
    createPageMetadata,
} from "@/lib/seo";
import Link from "next/link";

export const metadata = createPageMetadata({
    path: "/glossary",
    title: "JSON Developer Glossary | BracketView",
    description:
        "Definitions for JSON, JSONPath, JQ, JSON Schema, JSON formatter, validator, diff, and more — the JSON developer glossary by BracketView.",
});

const LAST_UPDATED = "2026-06-10";

export default function GlossaryPage() {
    const schemas = [
        buildDefinedTermSetSchema(glossaryTerms),
        buildWebPageSchema(
            "/glossary",
            "JSON Developer Glossary",
            "Comprehensive glossary of JSON terms for developers.",
        ),
    ];

    return (
        <main className="w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
            <JsonLd data={schemas} />
            <div className="mx-auto max-w-7xl">
                <PageHeader
                    badge="Glossary"
                    title="JSON Developer Glossary"
                    description="Clear definitions for JSON tooling terms — JSONPath, JQ, schema validation, formatters, and more."
                />

                <p className="mt-6 text-sm text-black/60 dark:text-foreground/60">
                    <time dateTime={LAST_UPDATED}>
                        Updated{" "}
                        {new Date(LAST_UPDATED).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                        })}
                    </time>
                </p>

                <AdPlacement variant="content" className="mt-10" />

                <div className="mt-12 space-y-8">
                    {glossaryTerms.map((term) => (
                        <section
                            key={term.slug}
                            id={term.slug}
                            aria-labelledby={`term-${term.slug}`}
                            className="rounded-4xl bg-white p-6 sm:p-8 dark:bg-muted"
                        >
                            <Reveal>
                                <h2
                                    id={`term-${term.slug}`}
                                    className="text-xl font-bold sm:text-2xl"
                                >
                                    {term.name}
                                </h2>
                                <p className="mt-4 text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75">
                                    {term.description}
                                </p>
                                {term.relatedLink ? (
                                    <Link
                                        href={term.relatedLink.href}
                                        className="mt-4 inline-block text-sm font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                                    >
                                        {term.relatedLink.label} →
                                    </Link>
                                ) : null}
                            </Reveal>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}
