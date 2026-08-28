import { features } from "@/app/data/constant";
import FeatureCard from "@/components/FeatureCard";
import Reveal from "@/components/motion/Reveal";
import StaggerGroup from "@/components/motion/StaggerGroup";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Features = () => {
    return (
        <section
            id="features"
            aria-label="Features"
            className="relative w-full px-4 pb-16 pt-16 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">
                <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    <span className="rounded-full border border-black px-5 py-1.5 text-sm font-medium text-black dark:border-foreground dark:text-foreground">
                        Features
                    </span>

                    <h2 className="mt-8 max-w-3xl text-3xl font-bold leading-normal tracking-tight text-black sm:mt-10 sm:text-4xl md:text-[2.75rem] dark:text-foreground">
                        A clean, ad-free JSON workspace for developers
                    </h2>

                    <p className="mt-6 max-w-xl text-sm leading-relaxed text-black/75 sm:mt-8 sm:text-base dark:text-foreground/70">
                        Five ways to look at JSON — text, tree, graph, node, and
                        table — plus JSONPath, jq, and optional AI. UI in nine
                        languages. Node and Table are free.
                    </p>
                </Reveal>

                <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} {...feature} />
                    ))}
                </StaggerGroup>

                <Reveal className="mt-12 flex justify-center sm:mt-14">
                    <Link
                        href="/features"
                        className="inline-flex items-center gap-2 rounded-xl border-2 border-black/15 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white dark:border-foreground/20 dark:text-foreground dark:hover:bg-foreground dark:hover:text-background"
                    >
                        View all features
                        <ArrowUpRight size={16} aria-hidden />
                    </Link>
                </Reveal>
            </div>
        </section>
    );
};

export default Features;
