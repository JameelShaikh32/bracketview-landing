import {
    DESKTOP_VERSION,
    DOWNLOADS_PAGE_PATH,
} from "@/app/data/desktop";
import DownloadsHero from "@/components/downloads/DownloadsHero";
import DownloadsInstallers from "@/components/downloads/DownloadsInstallers";
import DownloadsSurface from "@/components/downloads/DownloadsSurface";
import JsonLd from "@/components/seo/JsonLd";
import {
    buildWebPageSchema,
    createPageMetadata,
} from "@/lib/seo";

const DOWNLOAD_TITLE =
    "Download BracketView: Windows & Linux | BracketView";
const DOWNLOAD_DESCRIPTION =
    `Download BracketView ${DESKTOP_VERSION} for Windows and Linux. Local JSON workspace: text, tree, graph, node, table, encoder, and compare. Files up to 200 MB. No account.`;

export const metadata = {
    ...createPageMetadata({
        path: DOWNLOADS_PAGE_PATH,
        title: DOWNLOAD_TITLE,
        description: DOWNLOAD_DESCRIPTION,
        keywords: [
            "BracketView download",
            "JSON viewer Windows",
            "JSON viewer Linux",
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

export default function DownloadsPage() {
    const schema = buildWebPageSchema(
        DOWNLOADS_PAGE_PATH,
        "Download BracketView for Windows and Linux",
        DOWNLOAD_DESCRIPTION,
    );

    return (
        <main className="w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
            <JsonLd data={schema} />
            <div className="mx-auto max-w-7xl">
                <DownloadsHero />
                <DownloadsSurface />
                <DownloadsInstallers />
            </div>
        </main>
    );
}
