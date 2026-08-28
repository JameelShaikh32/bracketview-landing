import { DESKTOP_LOCAL_FILE_LABEL, DESKTOP_VERSION } from "@/app/data/desktop";
import { PRODUCT_SHOTS, UI_LANGUAGE_LIST } from "@/app/data/workspaceCopy";
import PageHeader from "@/components/motion/PageHeader";
import Reveal from "@/components/motion/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import {
    APP_URL,
    buildWebPageSchema,
    createPageMetadata,
} from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = createPageMetadata({
    path: "/changelog",
    title: "Changelog — August 2026 | BracketView",
    description:
        `August 2026: Node and Table views (free), nine UI languages, Windows ${DESKTOP_VERSION}, and workspace polish. Pro is power and persistence — not extra viewer tabs.`,
    keywords: [
        "BracketView changelog",
        "JSON node view",
        "JSON table view",
        "BracketView Windows",
    ],
});

const polish = [
    "Workspace settings in the header gear: theme, editor font, and language (moved off profile).",
    "Account menu on the profile photo: Manage Profile, Sign out — no separate header Sign out.",
    "Tree search on the tree toolbar, before Expand all.",
    "AI panel slides in from the right, next to keyboard shortcuts.",
    "Route loading uses layout skeletons instead of a blank screen.",
    "JSON history (signed-in): custom date filter and one-click copy of an entry’s JSON.",
] as const;

export default function ChangelogPage() {
    const schema = buildWebPageSchema(
        "/changelog",
        "BracketView changelog",
        "Product notes for BracketView, starting with the August 2026 workspace release.",
    );

    return (
        <main className="w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
            <JsonLd data={schema} />
            <div className="mx-auto max-w-7xl">
                <PageHeader
                    badge="Changelog"
                    title="What’s new in BracketView"
                    description="Honest product notes. Viewer tabs stay free. Pro is for huge files, longer snapshot links, and AI that shouldn’t run out."
                    cta={{
                        label: "Open the workspace",
                        href: APP_URL,
                        external: true,
                    }}
                />

                <Reveal className="mx-auto mt-14 max-w-7xl">
                    <article className="rounded-4xl bg-white p-8 sm:p-12 dark:bg-muted">
                        <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent-dark dark:text-accent">
                            August 2026
                        </p>
                        <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                            Node, Table, nine languages, Windows {DESKTOP_VERSION}
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-black/75 dark:text-foreground/75">
                            The workspace now has seven tabs. Five of them are
                            ways to look at JSON: Text, Tree, Graph, Node, and
                            Table. Stats and JQ Filter sit beside those views.
                            Node and Table are free — not Pro.
                        </p>

                        <div className="mt-6 overflow-hidden rounded-2xl border border-black/8 dark:border-foreground/10">
                            <Image
                                src={PRODUCT_SHOTS.tabs.src}
                                alt={PRODUCT_SHOTS.tabs.alt}
                                width={PRODUCT_SHOTS.tabs.width}
                                height={PRODUCT_SHOTS.tabs.height}
                                className="h-auto w-full"
                                sizes="(max-width: 768px) 100vw, 720px"
                            />
                        </div>

                        <h3 className="mt-10 text-lg font-bold">
                            Node view (Free)
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-black/75 dark:text-foreground/75">
                            JSON Crack–style canvas: object cards, bezier edges,
                            arrays of objects as table-shaped nodes, zoom/fit/lock,
                            and search. Nested objects stay inside the parent
                            until they need their own card.
                        </p>

                        <h3 className="mt-8 text-lg font-bold">
                            Table view (Free)
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-black/75 dark:text-foreground/75">
                            Nested spreadsheet: objects as Key/Value, arrays of
                            objects as columns, expand/collapse, virtualized
                            long lists.
                        </p>

                        <h3 className="mt-8 text-lg font-bold">
                            Nine UI languages (Free)
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-black/75 dark:text-foreground/75">
                            Switch language in Workspace settings (header gear),
                            not on the profile page: {UI_LANGUAGE_LIST}. This is
                            the product UI — separate from the type generator’s
                            TypeScript, Python, Go, and Rust export.
                        </p>
                        <div className="mt-4 overflow-hidden rounded-2xl border border-black/8 dark:border-foreground/10">
                            <Image
                                src={PRODUCT_SHOTS.settings.src}
                                alt={PRODUCT_SHOTS.settings.alt}
                                width={PRODUCT_SHOTS.settings.width}
                                height={PRODUCT_SHOTS.settings.height}
                                className="h-auto w-full"
                                sizes="(max-width: 768px) 100vw, 720px"
                            />
                        </div>

                        <h3 className="mt-8 text-lg font-bold">
                            Windows app {DESKTOP_VERSION}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-black/75 dark:text-foreground/75">
                            Local JSON workspace: text, tree, graph, node, table,
                            stats, jq, diff, schema, types, encoder/decoder, and
                            text compare. Native View and Tools menus. Local
                            files up to {DESKTOP_LOCAL_FILE_LABEL} (not the web
                            Free 5 MB cap). No sign-in, AI, snapshots, or
                            webhook tester. Unsigned builds may show SmartScreen.
                            Linux is still coming soon — no macOS bundle.
                        </p>
                        <p className="mt-3">
                            <Link
                                href="/downloads"
                                className="text-sm font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                            >
                                Download for Windows
                            </Link>
                        </p>

                        <h3 className="mt-8 text-lg font-bold">UX polish</h3>
                        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-black/75 dark:text-foreground/75">
                            {polish.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>

                        <h3 className="mt-8 text-lg font-bold">What Pro is</h3>
                        <p className="mt-2 text-sm leading-relaxed text-black/75 dark:text-foreground/75">
                            Free to see the JSON. Pro when the file is huge, the
                            link has to last, or AI shouldn’t run out: 50 MB
                            uploads + Performance Mode, unlimited snapshot links
                            up to 2 hours, AI without a monthly cap (Fix,
                            Explain, Types), and higher Webhook Tester caps.
                            Node, Table, languages, and the desktop viewer do
                            not require Pro.
                        </p>

                        <Link
                            href={APP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-10 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                        >
                            Open the workspace
                            <ArrowUpRight size={16} aria-hidden />
                        </Link>
                    </article>
                </Reveal>
            </div>
        </main>
    );
}
