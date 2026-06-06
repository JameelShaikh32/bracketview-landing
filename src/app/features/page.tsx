import FeatureCard from "@/app/components/FeatureCard";
import { featureCategories } from "@/app/data/featuresPage";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Features | BracketView",
    description:
        "Explore every BracketView feature — JSON viewer, formatter, validator, JQ, JSONPath, AI fixer, diff, schema tools, sharing, and more.",
};

export default function FeaturesPage() {
    return (
        <main className="w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    <span className="rounded-full border border-black px-5 py-1.5 text-sm font-medium text-black dark:border-foreground dark:text-foreground">
                        Features
                    </span>

                    <h1 className="mt-8 text-3xl font-bold leading-[1.15] tracking-tight text-black sm:text-4xl md:text-[2.75rem] dark:text-foreground">
                        Everything in one JSON workspace
                    </h1>

                    <p className="mt-6 max-w-2xl text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/70">
                        BracketView combines viewing, formatting, validation, querying,
                        AI repair, schema tools, diffing, and sharing — all in your
                        browser with no install required.
                    </p>

                    <Link
                        href="https://app.bracketview.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-accent px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
                    >
                        Open BracketView
                        <ArrowUpRight size={18} aria-hidden />
                    </Link>
                </div>

                <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20">
                    {featureCategories.map((category) => (
                        <section key={category.title}>
                            <div className="mb-8 max-w-3xl">
                                <h2 className="text-2xl font-bold text-black sm:text-3xl dark:text-foreground">
                                    {category.title}
                                </h2>
                                <p className="mt-3 text-sm leading-relaxed text-black/70 sm:text-base dark:text-foreground/70">
                                    {category.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                                {category.features.map((feature) => (
                                    <FeatureCard
                                        key={feature.title}
                                        {...feature}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}
