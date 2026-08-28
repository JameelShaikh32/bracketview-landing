import {
    DESKTOP_LOCAL_FILE_LABEL,
    DESKTOP_VERSION,
    DOWNLOADS_PAGE_PATH,
    LINUX_STATUS,
    WINDOWS_ARCH_LABEL,
    WINDOWS_EXE_URL,
    WINDOWS_MSI_URL,
} from "@/app/data/desktop";
import { FREE_UPLOAD_LABEL } from "@/app/data/planLimits";
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

const DOWNLOAD_TITLE =
    "Download BracketView: Node, Table, 200 MB | BracketView";
const DOWNLOAD_DESCRIPTION =
    `Download BracketView ${DESKTOP_VERSION} for Windows. Local JSON workspace: text, tree, graph, node, table, encoder, and compare. Files up to 200 MB. No account.`;

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
            "JSON node view",
            "JSON table view",
        ],
    }),
    other: {
        "buildmole-verification": "4988e15d-b28e-45f2-b28f-25aede7f324e",
    },
};

const desktopBenefits = [
    {
        title: "Five views plus tools",
        description:
            "Text, tree, graph, node, table, stats, and jq — the same free viewer tabs as the web app, running on your machine.",
    },
    {
        title: "Diff, schema, and types",
        description:
            "Compare payloads, validate schemas, and export types locally. Encoder/decoder and text compare work offline.",
    },
    {
        title: "Native View and Tools menus",
        description:
            "Open files from File Explorer, use the app menus, and stay in a local workspace — no browser tab required.",
    },
    {
        title: `${DESKTOP_LOCAL_FILE_LABEL} local files`,
        description:
            `Open JSON up to ${DESKTOP_LOCAL_FILE_LABEL} on disk. The web Free ${FREE_UPLOAD_LABEL} cap does not apply to the Windows app.`,
    },
    {
        title: "Works offline",
        description:
            "After install, you do not need a connection. Files stay on the device.",
    },
    {
        title: "No account, no cloud",
        description:
            "No sign-in, AI, snapshots, or webhook tester on desktop. JSON never leaves your computer.",
    },
] as const;

export default function DownloadsPage() {
    const schema = buildWebPageSchema(
        DOWNLOADS_PAGE_PATH,
        "Download BracketView for Windows",
        DOWNLOAD_DESCRIPTION,
    );

    return (
        <main className="w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
            <JsonLd data={schema} />
            <div className="mx-auto max-w-7xl">
                <PageHeader
                    badge="Desktop"
                    title="Download BracketView for Windows"
                    description={`A local JSON workspace (${DESKTOP_VERSION}). Text, tree, graph, node, table, stats, jq, diff, schema, types, encoder/decoder, and text compare. Native View and Tools menus. Files up to ${DESKTOP_LOCAL_FILE_LABEL}. No sign-in, AI, snapshots, or webhook tester. Linux coming soon.`}
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
                            . JSON stays on the device. Node, Table, languages, and
                            encoder/compare do not require Pro.
                        </p>

                        <Link
                            href={APP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                        >
                            Open the workspace
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
                            Same core JSON views locally — built for files on your
                            machine, including payloads larger than the web Free
                            cap.
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
