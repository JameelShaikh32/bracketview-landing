"use client";

import { ADSENSE_ENABLED, type AdsConsent } from "@/lib/ads";
import {
    createContext,
    useContext,
    useMemo,
    type ReactNode,
} from "react";

type AdsConsentContextValue = {
    consent: AdsConsent | null;
    adsEnabled: boolean;
};

const AdsConsentContext = createContext<AdsConsentContextValue | null>(null);

function AdsConsentProvider({ children }: { children: ReactNode }) {
    const value = useMemo(
        () => ({
            consent: ADSENSE_ENABLED ? ("granted" as const) : null,
            adsEnabled: ADSENSE_ENABLED,
        }),
        [],
    );

    return (
        <AdsConsentContext.Provider value={value}>
            {children}
        </AdsConsentContext.Provider>
    );
}

function useAdsConsent() {
    const context = useContext(AdsConsentContext);
    if (!context) {
        throw new Error("useAdsConsent must be used within AdsConsentProvider");
    }
    return context;
}

export { AdsConsentProvider, useAdsConsent };
