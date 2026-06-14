"use client";

import { ADSENSE_CLIENT_ID } from "@/lib/ads";
import { useAdsConsent } from "@/hooks/useAdsConsent";
import { useEffect } from "react";

const AdSenseScript = () => {
    const { consent, adsEnabled } = useAdsConsent();

    useEffect(() => {
        if (!adsEnabled || consent !== "granted" || !ADSENSE_CLIENT_ID) return;

        const src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
        if (document.querySelector(`script[data-adsense="true"]`)) return;

        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.crossOrigin = "anonymous";
        script.dataset.adsense = "true";
        document.head.appendChild(script);
    }, [adsEnabled, consent]);

    return null;
};

export default AdSenseScript;
