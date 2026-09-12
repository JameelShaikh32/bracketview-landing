"use client";

import {
    INSTALLERS_SECTION_ID,
    LINUX_APPIMAGE_URL,
    WINDOWS_EXE_URL,
} from "@/app/data/desktop";
import OsBrandIcon from "@/components/downloads/OsBrandIcon";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

type DetectedPlatform = "windows" | "linux" | "other";

const getServerSnapshot = (): DetectedPlatform => "other";

const getClientSnapshot = (): DetectedPlatform => {
    const ua = navigator.userAgent.toLowerCase();
    const platform = navigator.platform?.toLowerCase() ?? "";

    if (ua.includes("windows") || platform.startsWith("win")) {
        return "windows";
    }

    if (
        (ua.includes("linux") || platform.includes("linux")) &&
        !ua.includes("android")
    ) {
        return "linux";
    }

    return "other";
};

const primaryButtonClasses =
    "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-center text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-accent-dark";

const PlatformDownloadButton = () => {
    const detected = useSyncExternalStore(
        subscribe,
        getClientSnapshot,
        getServerSnapshot,
    );

    if (detected === "windows") {
        return (
            <a href={WINDOWS_EXE_URL} className={primaryButtonClasses}>
                <OsBrandIcon os="windows" size={18} />
                Download for Windows
            </a>
        );
    }

    if (detected === "linux") {
        return (
            <a href={LINUX_APPIMAGE_URL} className={primaryButtonClasses}>
                <OsBrandIcon os="linux" size={18} />
                Download for Linux
            </a>
        );
    }

    return (
        <a href={`#${INSTALLERS_SECTION_ID}`} className={primaryButtonClasses}>
            <OsBrandIcon os="windows" size={16} />
            <OsBrandIcon os="linux" size={16} />
            See Windows and Linux downloads
        </a>
    );
};

export default PlatformDownloadButton;
