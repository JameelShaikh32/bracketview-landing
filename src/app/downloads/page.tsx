import {
    DESKTOP_VERSION,
    DOWNLOADS_PAGE_PATH,
    LINUX_STATUS,
    WINDOWS_ARCH_LABEL,
    WINDOWS_EXE_URL,
    WINDOWS_MSI_URL,
} from "@/app/data/desktop";
import PageHeader from "@/components/motion/PageHeader";
import Reveal from "@/components/motion/Reveal";
import StaggerGroup from "@/components/motion/StaggerGroup";
import JsonLd from "@/components/seo/JsonLd";
import Badge from "@/components/ui/Badge";
import {
    APP_URL,
    buildWebPageSchema,
    createPageMetadata,
} from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const DOWNLOAD_TITLE = "Download BracketView for Windows | BracketView";
const DOWNLOAD_DESCRIPTION =
    `Download BracketView ${DESKTOP_VERSION} for Windows x64. Open JSON files locally — offline, no account. Linux coming soon.`;

export const metadata = {
    ...createPageMetadata({
        path: DOWNLOADS_PAGE_PATH,
        title: DOWNLOAD_TITLE,
        description: DOWNLOAD_DESCRIPTION,
        keywords: [
            "BracketView download",
            "JSON viewer Windows",
            "open JSON file",
            "desktop JSON editor",
            "offline JSON tools",
        ],
    }),
    other: {
        "buildmole-verification": "4988e15d-b28e-45f2-b28f-25aede7f324e",
    },
};

const desktopBenefits = [
    {
        title: "Open JSON files directly",
        description:
            "Open any .json file with BracketView from File Explorer — double-click or choose Open with. No copy-paste into a browser tab.",
    },
    {
        title: "Full local workspace",
        description:
            "Viewer, editor, tree and graph, stats, jq and JSONPath, diff, schema, and types — running on your machine.",
    },
    {
        title: "Works offline",
        description:
            "After install, you do not need a connection. Files stay on the device.",
    },
    {
        title: "No account, no cloud",
        description:
            "No sign-in, AI, or cloud on desktop. JSON never leaves your computer.",
    },
] as const;

export default function DownloadsPage() {
    const schema = buildWebPageSchema(
        DOWNLOADS_PAGE_PATH,
        "Download BracketView for desktop",
        DOWNLOAD_DESCRIPTION,
    );

    return (
        <main className="w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
            <JsonLd data={schema} />
            <div className="mx-auto max-w-7xl">
                <PageHeader
                    badge="Desktop"
                    title="Download BracketView for desktop"
                    description="A local JSON workspace. Open JSON files directly with BracketView — viewer, editor, tree/graph, stats, jq/JSONPath, diff, schema, and types. No sign-in, AI, or cloud."
                />

                <Reveal className="mx-auto mt-14 max-w-3xl">
                    <section className="rounded-4xl bg-white p-8 sm:p-12 dark:bg-muted">
                        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
                            <div>
                                <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent-dark dark:text-accent">
                                    Windows
                                </p>
                                <p className="mt-2 text-sm text-black/70 dark:text-foreground/70">
                                    {DESKTOP_VERSION} for {WINDOWS_ARCH_LABEL}
                                </p>
                                <a
                                    href={WINDOWS_MSI_URL}
                                    className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-accent px-5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
                                >
                                    Download for Windows
                                </a>
                                <p className="mt-4 text-sm">
                                    <a
                                        href={WINDOWS_EXE_URL}
                                        className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                                    >
                                        Setup (.exe)
                                    </a>
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-medium uppercase tracking-[0.14em] text-black/50 dark:text-foreground/50">
                                    Linux
                                </p>
                                <div className="mt-6">
                                    <Badge className="cursor-default opacity-70">
                                        {LINUX_STATUS}
                                    </Badge>
                                </div>
                            </div>
                        </div>

                        <p className="mt-10 border-t border-black/8 pt-8 text-sm leading-relaxed text-black/70 dark:border-foreground/10 dark:text-foreground/70">
                            Requires Windows 10 or 11. SmartScreen may warn because
                            this build is unsigned — choose{" "}
                            <span className="font-medium text-black dark:text-foreground">
                                More info
                            </span>{" "}
                            then{" "}
                            <span className="font-medium text-black dark:text-foreground">
                                Run anyway
                            </span>
                            . JSON stays on the device.
                        </p>

                        <Link
                            href={APP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                        >
                            Open in browser
                            <ArrowUpRight size={16} aria-hidden />
                        </Link>
                    </section>
                </Reveal>

                <section
                    aria-labelledby="desktop-benefits-heading"
                    className="mt-16 sm:mt-20"
                >
                    <Reveal className="mx-auto max-w-3xl text-center">
                        <h2
                            id="desktop-benefits-heading"
                            className="text-2xl font-bold text-black sm:text-3xl dark:text-foreground"
                        >
                            Why use the desktop app
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-black/70 sm:text-base dark:text-foreground/70">
                            Same core JSON tools, installed locally — built for files
                            on your machine.
                        </p>
                    </Reveal>

                    <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
                        {desktopBenefits.map((benefit) => (
                            <article
                                key={benefit.title}
                                className="rounded-4xl bg-white p-6 sm:p-8 dark:bg-muted"
                            >
                                <h3 className="text-xl font-bold">{benefit.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-black/70 dark:text-foreground/70">
                                    {benefit.description}
                                </p>
                            </article>
                        ))}
                    </StaggerGroup>
                </section>
            </div>
        </main>
    );
}
