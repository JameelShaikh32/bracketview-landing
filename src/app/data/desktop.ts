const DESKTOP_VERSION = "0.1.4";

const DOWNLOADS_PAGE_PATH = "/downloads";

const DOWNLOADS_ORIGIN = "https://downloads.bracketview.in";

const WINDOWS_MSI_URL =
    `${DOWNLOADS_ORIGIN}/releases/${DESKTOP_VERSION}/BracketView_${DESKTOP_VERSION}_x64_en-US.msi`;

const WINDOWS_EXE_URL =
    `${DOWNLOADS_ORIGIN}/releases/${DESKTOP_VERSION}/BracketView_${DESKTOP_VERSION}_x64-setup.exe`;

const WINDOWS_ARCH_LABEL = "Windows x64";

const LINUX_APPIMAGE_URL =
    `${DOWNLOADS_ORIGIN}/releases/${DESKTOP_VERSION}/BracketView_${DESKTOP_VERSION}_amd64.AppImage`;

const LINUX_DEB_URL =
    `${DOWNLOADS_ORIGIN}/releases/${DESKTOP_VERSION}/BracketView_${DESKTOP_VERSION}_amd64.deb`;

const LINUX_ARCH_LABEL = "Linux x86_64";

/** Local file size cap in the desktop app — not the web Free 5 MB limit. */
const DESKTOP_LOCAL_FILE_MAX_MB = 200;
const DESKTOP_LOCAL_FILE_LABEL = `${DESKTOP_LOCAL_FILE_MAX_MB} MB`;

export {
    DESKTOP_LOCAL_FILE_LABEL,
    DESKTOP_LOCAL_FILE_MAX_MB,
    DESKTOP_VERSION,
    DOWNLOADS_ORIGIN,
    DOWNLOADS_PAGE_PATH,
    LINUX_APPIMAGE_URL,
    LINUX_ARCH_LABEL,
    LINUX_DEB_URL,
    WINDOWS_ARCH_LABEL,
    WINDOWS_EXE_URL,
    WINDOWS_MSI_URL,
};
