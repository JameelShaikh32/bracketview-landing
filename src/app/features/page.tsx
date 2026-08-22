import { featureCategories } from "@/app/data/featuresPage";
import AdPlacement from "@/components/ads/AdPlacement";
import FeatureCard from "@/components/FeatureCard";
import PageHeader from "@/components/motion/PageHeader";
import Reveal from "@/components/motion/Reveal";
import StaggerGroup from "@/components/motion/StaggerGroup";
import JsonLd from "@/components/seo/JsonLd";
import {
    buildItemListSchema,
    buildWebPageSchema,
    createPageMetadata,
    SITE_URL,
} from "@/lib/seo";
import Link from "next/link";

export const metadata = createPageMetadata({
    path: "/features",
    title: "Features | BracketView",
    description:
        "JSON workspace for developers. Format, validate, and query JSON in the browser — JQ filters, AI repair, schema tools, diff, and sharing.",
});

export default function FeaturesPage() {
    const featureItems = featureCategories.flatMap((category) =>
        category.features.map((feature) => ({
            name: feature.title,
            description: feature.description,
            url: feature.href.startsWith("http")
                ? feature.href
                : `${SITE_URL}${feature.href}`,
        })),
    );

    const schemas = [
        buildWebPageSchema(
            "/features",
            "BracketView Features",
            "Explore every BracketView feature — JSON viewer, formatter, validator, JQ, JSONPath, AI fixer, diff, schema tools, sharing, and more.",
        ),
        buildItemListSchema("BracketView Features", featureItems),
    ];

    return (
        <main className="w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
            <JsonLd data={schemas} />
            <div className="mx-auto max-w-7xl">
                <PageHeader
                    badge="Features"
                    title="Everything in one JSON workspace"
                    description="BracketView combines viewing, formatting, validation, querying, AI repair, schema tools, diffing, and sharing — all in your browser with no install required. BracketView is also a Windows desktop app. Linux coming soon."
                    cta={{
                        label: "Open BracketView",
                        href: "https://app.bracketview.in",
                        external: true,
                    }}
                />

                <div className="mt-6 text-center">
                    <Link
                        href="/downloads"
                        className="inline-flex min-h-11 items-center text-sm font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                    >
                        Download the Windows app
                    </Link>
                </div>

                <AdPlacement variant="content" className="mt-10" />

                <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20">
                    {featureCategories.map((category) => {
                        const categoryId = category.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace(/[^a-z0-9-]/g, "");

                        return (
                            <section
                                key={category.title}
                                aria-labelledby={categoryId}
                            >
                                <Reveal className="mb-8 max-w-3xl">
                                    <h2
                                        id={categoryId}
                                        className="text-2xl font-bold text-black sm:text-3xl dark:text-foreground"
                                    >
                                        {category.title}
                                    </h2>
                                    <p className="mt-3 text-sm leading-relaxed text-black/70 sm:text-base dark:text-foreground/70">
                                        {category.description}
                                    </p>
                                </Reveal>

                                <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                                    {category.features.map((feature) => (
                                        <FeatureCard
                                            key={feature.title}
                                            {...feature}
                                        />
                                    ))}
                                </StaggerGroup>
                            </section>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
