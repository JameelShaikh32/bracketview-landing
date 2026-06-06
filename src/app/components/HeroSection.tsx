import CircularText from "@/app/components/ui/CircularText";
import { ArrowDown, ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="relative w-full px-4 pb-20 pt-2 sm:px-6 lg:px-8">
            <div className="relative mx-auto grid grid-cols-1 gap-4 lg:min-h-[calc(100vh-12rem)] lg:grid-cols-2 lg:gap-5">
                {/* Left panel */}
                <div className="hero-left-panel relative flex flex-col justify-start gap-2 rounded-t-4xl rounded-bl-4xl bg-white px-4 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 dark:bg-muted">
                    <div className="flex flex-col gap-6">
                        <h1 className="max-w-xl text-3xl font-bold leading-snug text-black md:text-5xl dark:text-foreground">
                            JSON Viewer, Formatter &amp; Validator for Modern Developers
                        </h1>
                        <p className="max-w-md text-sm leading-relaxed text-black/70 sm:text-base dark:text-foreground/70">
                            A fast online JSON viewer, formatter, validator, &amp; query tool designed to help developers inspect &amp; work with JSON more efficiently.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-12">
                        <Link
                            href="https://app.bracketview.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-fit items-center gap-2 rounded-2xl bg-accent dark:bg-accent-dark px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                        >
                            <span className="sm:hidden">Open App</span>
                            <span className="hidden sm:inline">Get Started</span>
                            <ArrowUpRight size={18} aria-hidden />
                        </Link>

                        <Link
                            href="#features"
                            className="inline-flex w-fit items-center gap-2 rounded-2xl border-2 border-gray-200 bg-transparent px-7 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-gray-200 dark:border-background dark:text-foreground dark:hover:bg-background"
                        >
                            Explore Features
                            <ArrowDownRight size={18} aria-hidden />
                        </Link>
                    </div>

                    <div className="absolute bottom-0 right-0 w-16 h-22 bg-background rounded-tl-3xl" />
                </div>

                {/* Right panel */}
                <div className="hero-right-panel relative min-h-88 overflow-hidden rounded-t-4xl bg-accent dark:bg-accent-dark sm:min-h-104 lg:min-h-0">
                    {/* Floating stats card */}
                    <div className="absolute left-5 top-6 z-10 max-w-lg rounded-2xl bg-white/45 p-4 shadow-[0_8px_32px_rgba(25,19,20,0.12)] backdrop-blur-md sm:left-8 sm:top-8 sm:max-w-xl">
                        <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-black/60">
                            Sample parse
                        </p>
                        <p className="mt-1 text-xl sm:text-3xl font-bold tracking-tight text-black">
                            1,024 nodes
                        </p>
                        <p className="mt-1 text-xs sm:text-sm text-black/70">Formatted in 7ms</p>
                    </div>

                    {/* App preview — oversized, clipped on the right */}
                    <div className="absolute -bottom-4 left-24 z-0">
                        <Image
                            src="/images/hero-light.png"
                            alt="BracketView JSON editor preview"
                            width={1200}
                            height={800}
                            priority
                            className="h-auto w-2xl max-w-none rounded-t-2xl object-cover object-top-left dark:hidden sm:w-3xl lg:w-5xl"
                        />
                        <Image
                            src="/images/hero-dark.png"
                            alt="BracketView JSON editor preview"
                            width={1200}
                            height={800}
                            priority
                            className="hidden h-auto w-2xl max-w-none rounded-t-2xl object-cover object-top-left sm:w-3xl lg:w-5xl dark:block"
                        />
                    </div>

                    {/* Bottom-right cutout tagline */}
                    <div className="absolute bottom-0 right-0 z-20 flex h-18 md:h-24 w-38 md:w-44 items-center justify-center rounded-tl-4xl bg-background px-4 sm:h-16 sm:w-48 sm:rounded-tl-6xl">
                        <p className="text-center text-xs md:text-sm font-medium uppercase leading-snug tracking-[0.12em] text-black sm:text-xs dark:text-foreground">
                            Format JSON
                            <br />
                            With Ease
                        </p>
                    </div>

                    <div className="absolute bottom-0 left-0 w-16 h-22 bg-background rounded-tr-3xl" />
                    <div className="absolute bottom-18 md:bottom-24 right-0 w-10 h-10 bg-transparent rounded-full"
                        style={{
                            boxShadow: "14px 14px 0 var(--background)",
                        }} />
                    <div className="absolute bottom-0 right-38 md:right-44 w-10 h-10 bg-transparent rounded-full"
                        style={{
                            boxShadow: "14px 14px 0 var(--background)",
                        }} />
                </div>
                {/* Learn more — panel junction */}
                <a
                    href="#features"
                    className="absolute bottom-0 left-1/2 z-30 hidden -translate-x-1/2 translate-y-[38%] lg:flex"
                    aria-label="Learn more about features"
                >
                    <div className="relative flex items-center justify-center rounded-full bg-gray p-2 dark:bg-background">
                        <CircularText
                            text="Learn more • Learn more • Learn more • "
                            spinDuration={18}
                            onHover="slowDown"
                            size={128}
                            className="font-light text-black dark:text-foreground"
                        />
                        <span
                            className="pointer-events-none absolute inset-0 flex items-center justify-center text-black dark:text-foreground"
                            aria-hidden
                        >
                            <ArrowDown size={20} strokeWidth={2} />
                        </span>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
