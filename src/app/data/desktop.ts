const DESKTOP_VERSION = "0.1.3";

const DOWNLOADS_PAGE_PATH = "/downloads";

const DOWNLOADS_ORIGIN = "https://downloads.bracketview.in";

const WINDOWS_MSI_URL =
    `${DOWNLOADS_ORIGIN}/releases/${DESKTOP_VERSION}/BracketView_${DESKTOP_VERSION}_x64_en-US.msi`;

const WINDOWS_EXE_URL =
    `${DOWNLOADS_ORIGIN}/releases/${DESKTOP_VERSION}/BracketView_${DESKTOP_VERSION}_x64-setup.exe`;

const WINDOWS_ARCH_LABEL = "Windows x64";

const LINUX_STATUS = "Coming soon";

/** Local file size cap in the Windows app — not the web Free 5 MB limit. */
const DESKTOP_LOCAL_FILE_MAX_MB = 200;
const DESKTOP_LOCAL_FILE_LABEL = `${DESKTOP_LOCAL_FILE_MAX_MB} MB`;

export {
    DESKTOP_LOCAL_FILE_LABEL,
    DESKTOP_LOCAL_FILE_MAX_MB,
    DESKTOP_VERSION,
    DOWNLOADS_ORIGIN,
    DOWNLOADS_PAGE_PATH,
    LINUX_STATUS,
    WINDOWS_ARCH_LABEL,
    WINDOWS_EXE_URL,
    WINDOWS_MSI_URL,
};
