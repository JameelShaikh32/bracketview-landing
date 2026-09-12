import {
    DESKTOP_LOCAL_FILE_LABEL,
    DESKTOP_VERSION,
    INSTALLERS_SECTION_ID,
} from "@/app/data/desktop";
import { PRODUCT_SHOTS } from "@/app/data/workspaceCopy";
import PlatformDownloadButton from "@/components/downloads/PlatformDownloadButton";
import OsBrandIcon from "@/components/downloads/OsBrandIcon";
import HeroProductDemo from "@/components/marketing/HeroProductDemo";
import StaggerGroup from "@/components/motion/StaggerGroup";
import { APP_URL } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cardClass =
    "flex h-full min-h-0 flex-col overflow-hidden rounded-4xl bg-white dark:bg-muted";

const DownloadsSurface = () => {
    return (
        <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 lg:grid-cols-3 lg:gap-5">
            <article
                aria-labelledby="downloads-workspace-heading"
                className={cardClass}
            >
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h2
                        id="downloads-workspace-heading"
                        className="text-2xl font-bold text-black dark:text-foreground"
                    >
                        Workspace
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-black/70 dark:text-foreground/70">
                        See JSON as text, a tree, a graph, node cards, or a
                        nested table — then query with jq and JSONPath.
                    </p>
                    <div className="mt-6 min-h-56 flex-1 overflow-hidden rounded-2xl bg-[#e5e0de] p-2 dark:bg-dark-card">
                        <HeroProductDemo />
                    </div>
                </div>
            </article>

            <article
                aria-labelledby="downloads-desktop-heading"
                className={cardClass}
            >
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h2
                        id="downloads-desktop-heading"
                        className="flex items-center gap-2.5 text-2xl font-bold text-black dark:text-foreground"
                    >
                        Desktop
                        <span className="inline-flex items-center gap-1.5 text-black/70 dark:text-foreground/70">
                            <OsBrandIcon os="windows" size={20} />
                            <OsBrandIcon os="linux" size={20} />
                        </span>
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-black/70 dark:text-foreground/70">
                        Local core tools on Windows and Linux ({DESKTOP_VERSION}
                        ). Files up to {DESKTOP_LOCAL_FILE_LABEL}. No sign-in,
                        AI, or cloud.
                    </p>
                    <div className="mt-6 flex flex-col gap-3">
                        <PlatformDownloadButton />
                        <a
                            href={`#${INSTALLERS_SECTION_ID}`}
                            className="inline-flex min-h-11 items-center text-sm font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                        >
                            All downloads
                        </a>
                    </div>
                    <div className="mt-6 min-h-56 flex-1 overflow-hidden rounded-2xl border border-black/8 bg-gray dark:border-foreground/10 dark:bg-background">
                        <Image
                            src={PRODUCT_SHOTS.tabs.src}
                            alt={PRODUCT_SHOTS.tabs.alt}
                            width={PRODUCT_SHOTS.tabs.width}
                            height={PRODUCT_SHOTS.tabs.height}
                            className="h-full w-full object-cover object-top"
                            sizes="(max-width: 1024px) 100vw, 360px"
                        />
                    </div>
                </div>
            </article>

            <article
                aria-labelledby="downloads-web-heading"
                className={cardClass}
            >
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h2
                        id="downloads-web-heading"
                        className="text-2xl font-bold text-black dark:text-foreground"
                    >
                        Web
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-black/70 dark:text-foreground/70">
                        The full workspace at app.bracketview.in. Optional AI,
                        snapshots, and Webhook Tester use the server when you
                        choose them.
                    </p>
                    <div className="mt-6">
                        <Link
                            href={APP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
                        >
                            Open the workspace
                            <ArrowUpRight size={18} aria-hidden />
                        </Link>
                    </div>
                    <div className="mt-6 min-h-56 flex-1 overflow-hidden rounded-2xl border border-black/8 bg-gray dark:border-foreground/10 dark:bg-background">
                        <Image
                            src="/images/what-is-bracketview-light.webp"
                            alt="BracketView JSON workspace with Tree, Graph, Node, Table, and Text tabs"
                            width={1200}
                            height={900}
                            className="h-full w-full object-cover object-top dark:hidden"
                            sizes="(max-width: 1024px) 100vw, 360px"
                        />
                        <Image
                            src="/images/what-is-bracketview-dark.webp"
                            alt="BracketView JSON workspace with Tree, Graph, Node, Table, and Text tabs"
                            width={1200}
                            height={900}
                            className="hidden h-full w-full object-cover object-top dark:block"
                            sizes="(max-width: 1024px) 100vw, 360px"
                        />
                    </div>
                </div>
            </article>
        </StaggerGroup>
    );
};

export default DownloadsSurface;
