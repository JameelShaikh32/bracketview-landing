import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const avatarColors = [
    "bg-orange-300",
    "bg-amber-400",
    "bg-yellow-500",
    "bg-lime-500",
    "bg-emerald-400",
    "bg-sky-400",
    "bg-violet-400",
];

const CtaSection = () => {
    return (
        <section className="relative w-full px-4 pb-4 pt-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl rounded-4xl bg-white dark:bg-muted">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Left */}
                    <div className="flex flex-col justify-between gap-10 overflow-hidden rounded-tl-4xl p-8 sm:p-10 lg:rounded-none lg:p-12">
                        <div>
                            <span className="inline-flex rounded-full border border-black px-4 py-1.5 text-sm font-medium text-black dark:border-foreground dark:text-foreground">
                                Let&apos;s start now
                            </span>
                            <h2 className="mt-8 text-3xl font-bold leading-snug text-black sm:text-4xl dark:text-foreground">
                                Start working with JSON faster today!
                            </h2>
                        </div>

                        <Link
                            href="https://app.bracketview.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-fit items-center gap-2 rounded-2xl bg-accent px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
                        >
                            Launch BracketView
                            <ArrowUpRight size={18} aria-hidden />
                        </Link>
                    </div>

                    {/* Middle — accent chart panel */}
                    <div className="relative min-h-64 overflow-hidden bg-accent p-8 dark:bg-accent-dark lg:min-h-0 lg:rounded-none">
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage:
                                    "linear-gradient(var(--black) 1px, transparent 1px), linear-gradient(90deg, var(--black) 1px, transparent 1px)",
                                backgroundSize: "48px 48px",
                            }}
                        />
                        <div className="relative z-10 h-full min-h-48 w-full">
                            <svg
                                viewBox="0 0 400 160"
                                className="absolute inset-0 h-full w-full text-black/80 dark:text-white/90"
                                preserveAspectRatio="none"
                                aria-hidden
                            >
                                <path
                                    d="M 0 120 C 60 40, 120 160, 180 80 S 300 40, 400 100"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <span className="absolute left-[15%] top-[57%] size-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                            <span className="absolute left-[48%] top-[40%] size-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                            <span className="absolute left-[76%] top-[30%] size-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                        </div>

                        <div className="absolute left-10 top-10 z-20 rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
                            ↑ 8.1k nodes
                        </div>
                        <div className="absolute left-1/2 top-16 z-20 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
                            ↓ 2.6ms
                        </div>
                        <div className="absolute right-10 top-8 z-20 rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
                            ↑ 99.9%
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col justify-center gap-10 overflow-hidden rounded-br-4xl bg-accent p-8 dark:bg-accent-dark sm:p-10 lg:rounded-none lg:p-12">
                        <p className="max-w-sm text-sm leading-relaxed text-black/80 sm:text-base dark:text-white/85">
                            Developers already use BracketView to inspect APIs,
                            validate configs, and ship faster. Try it too!
                        </p>

                        <div>
                            <div className="flex flex-nowrap items-center">
                                {avatarColors.map((color, index) => (
                                    <span
                                        key={color}
                                        className={`${color} -ml-1.5 first:ml-0 flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-accent text-xs font-bold text-black sm:-ml-2 sm:size-10 dark:border-accent-dark`}
                                        style={{ zIndex: avatarColors.length - index }}
                                    >
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                ))}
                                <span className="-ml-1.5 flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-white text-xs font-bold text-black sm:-ml-2 sm:size-10 dark:border-accent-dark">
                                    +1k
                                </span>
                            </div>

                            {/* <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="https://bracketview.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
                                >
                                    <Image src="/logo.png" alt="" width={18} height={18} />
                                    Open BracketView
                                </Link>
                                <Link
                                    href="https://bracketview.in/pricing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
                                >
                                    View Pricing
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
