"use client";

import {
    ADS_CONSENT_KEY,
    ADSENSE_ENABLED,
    type AdsConsent,
} from "@/lib/ads";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";

const CONSENT_CHANGE_EVENT = "bracketview-ads-consent-change";

function readConsent(): AdsConsent | null {
    try {
        const value = localStorage.getItem(ADS_CONSENT_KEY);
        if (value === "granted" || value === "denied") return value;
    } catch {
        // Storage may be blocked in private browsing or strict privacy modes.
    }
    return null;
}

function writeConsent(value: AdsConsent) {
    try {
        localStorage.setItem(ADS_CONSENT_KEY, value);
    } catch {
        // Keep in-memory consent even when persistence fails.
    }
    window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT));
}

type AdsConsentContextValue = {
    consent: AdsConsent | null;
    needsPrompt: boolean;
    ready: boolean;
    accept: () => void;
    reject: () => void;
    adsEnabled: boolean;
};

const AdsConsentContext = createContext<AdsConsentContextValue | null>(null);

function AdsConsentProvider({ children }: { children: ReactNode }) {
    const [ready, setReady] = useState(false);
    const [consent, setConsent] = useState<AdsConsent | null>(null);
    const [needsPrompt, setNeedsPrompt] = useState(false);

    useEffect(() => {
        if (!ADSENSE_ENABLED) {
            setReady(true);
            return;
        }

        const stored = readConsent();
        setConsent(stored);
        setNeedsPrompt(stored === null);
        setReady(true);

        const onChange = () => {
            const next = readConsent();
            setConsent(next);
            setNeedsPrompt(next === null);
        };

        window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
        return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
    }, []);

    const accept = useCallback(() => {
        setConsent("granted");
        setNeedsPrompt(false);
        writeConsent("granted");
    }, []);

    const reject = useCallback(() => {
        setConsent("denied");
        setNeedsPrompt(false);
        writeConsent("denied");
    }, []);

    const value = useMemo(
        () => ({
            consent,
            needsPrompt,
            ready,
            accept,
            reject,
            adsEnabled: ADSENSE_ENABLED,
        }),
        [consent, needsPrompt, ready, accept, reject],
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

export { AdsConsentProvider, CONSENT_CHANGE_EVENT, useAdsConsent };
