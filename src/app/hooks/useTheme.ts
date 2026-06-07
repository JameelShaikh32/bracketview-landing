"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const getTheme = (): Theme =>
    document.documentElement.classList.contains("dark") ? "dark" : "light";

const getServerTheme = (): Theme => "light";

const subscribe = (onStoreChange: () => void) => {
    const observer = new MutationObserver(onStoreChange);
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
    });
    return () => observer.disconnect();
};

function useTheme(): Theme {
    return useSyncExternalStore(subscribe, getTheme, getServerTheme);
}

export { useTheme };
export type { Theme };
