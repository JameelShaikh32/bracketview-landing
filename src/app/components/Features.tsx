import FeatureCard from "@/app/components/FeatureCard";
import Reveal from "@/app/components/motion/Reveal";
import StaggerGroup from "@/app/components/motion/StaggerGroup";
import { features } from "@/app/data/constant";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Features = () => {
    return (
        <section
            id="features"
            className="relative w-full px-4 pb-24 pt-16 sm:px-6 lg:px-8 lg:pb-32 lg:pt-28"
        >
            <div className="mx-auto max-w-7xl">
                <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    <span className="rounded-full border border-black px-5 py-1.5 text-sm font-medium text-black dark:border-foreground dark:text-foreground">
                        Features
                    </span>

                    <h2 className="mt-8 max-w-3xl text-3xl font-bold leading-snug tracking-tight text-black sm:mt-10 sm:text-4xl md:text-[2.75rem] dark:text-foreground">
                        A fast, intuitive, and efficient JSON workspace
                    </h2>

                    <p className="mt-6 max-w-xl text-sm leading-relaxed text-black/75 sm:mt-8 sm:text-base dark:text-foreground/70">
                        Everything you need to inspect, format, validate, and query
                        structured data — all in one browser tab.
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
                        className="inline-flex items-center gap-2 rounded-2xl border-2 border-black/15 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white dark:border-foreground/20 dark:text-foreground dark:hover:bg-foreground dark:hover:text-background"
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
