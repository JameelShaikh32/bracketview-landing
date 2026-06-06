import FeatureCard from "@/app/components/FeatureCard";
import PageHeader from "@/app/components/motion/PageHeader";
import Reveal from "@/app/components/motion/Reveal";
import StaggerGroup from "@/app/components/motion/StaggerGroup";
import { featureCategories } from "@/app/data/featuresPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Features | BracketView",
    description:
        "Explore every BracketView feature — JSON viewer, formatter, validator, JQ, JSONPath, AI fixer, diff, schema tools, sharing, and more.",
};

export default function FeaturesPage() {
    return (
        <main className="w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <PageHeader
                    badge="Features"
                    title="Everything in one JSON workspace"
                    description="BracketView combines viewing, formatting, validation, querying, AI repair, schema tools, diffing, and sharing — all in your browser with no install required."
                    cta={{
                        label: "Open BracketView",
                        href: "https://app.bracketview.in",
                        external: true,
                    }}
                />

                <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20">
                    {featureCategories.map((category) => (
                        <section key={category.title}>
                            <Reveal className="mb-8 max-w-3xl">
                                <h2 className="text-2xl font-bold text-black sm:text-3xl dark:text-foreground">
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
                    ))}
                </div>
            </div>
        </main>
    );
}
