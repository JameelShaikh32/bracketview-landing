"use client";

import { ADSENSE_CLIENT_ID } from "@/lib/ads";
import { useAdsConsent } from "@/components/ads/AdsConsentProvider";
import { useEffect } from "react";

const ADSENSE_READY_EVENT = "adsense-ready";

const AdSenseScript = () => {
    const { consent, adsEnabled } = useAdsConsent();

    useEffect(() => {
        if (!adsEnabled || consent !== "granted" || !ADSENSE_CLIENT_ID) return;

        const src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
        if (document.querySelector(`script[data-adsense="true"]`)) {
            if (window.adsbygoogle) {
                window.dispatchEvent(new CustomEvent(ADSENSE_READY_EVENT));
            }
            return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.crossOrigin = "anonymous";
        script.dataset.adsense = "true";
        script.onload = () => {
            window.dispatchEvent(new CustomEvent(ADSENSE_READY_EVENT));
        };
        document.head.appendChild(script);
    }, [adsEnabled, consent]);

    return null;
};

export { ADSENSE_READY_EVENT };
export default AdSenseScript;
