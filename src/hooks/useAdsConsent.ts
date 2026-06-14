"use client";

import {
    ADS_CONSENT_KEY,
    ADSENSE_ENABLED,
    type AdsConsent,
} from "@/lib/ads";
import { useCallback, useEffect, useState } from "react";

const CONSENT_CHANGE_EVENT = "bracketview-ads-consent-change";

function readConsent(): AdsConsent | null {
    if (typeof window === "undefined") return null;
    const value = localStorage.getItem(ADS_CONSENT_KEY);
    if (value === "granted" || value === "denied") return value;
    return null;
}

function writeConsent(value: AdsConsent) {
    localStorage.setItem(ADS_CONSENT_KEY, value);
    window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT));
}

function useAdsConsent() {
    const [consent, setConsent] = useState<AdsConsent | null>(() =>
        ADSENSE_ENABLED ? readConsent() : null,
    );
    const [needsPrompt, setNeedsPrompt] = useState(
        () => ADSENSE_ENABLED && readConsent() === null,
    );

    useEffect(() => {
        if (!ADSENSE_ENABLED) return;

        const onChange = () => {
            const next = readConsent();
            setConsent(next);
            setNeedsPrompt(next === null);
        };

        window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
        return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
    }, []);

    const accept = useCallback(() => {
        writeConsent("granted");
        setConsent("granted");
        setNeedsPrompt(false);
    }, []);

    const reject = useCallback(() => {
        writeConsent("denied");
        setConsent("denied");
        setNeedsPrompt(false);
    }, []);

    return {
        consent,
        needsPrompt,
        accept,
        reject,
        adsEnabled: ADSENSE_ENABLED,
    };
}

export { CONSENT_CHANGE_EVENT, useAdsConsent };
