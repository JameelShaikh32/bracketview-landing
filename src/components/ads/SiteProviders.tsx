"use client";

import AdSenseScript from "@/components/ads/AdSenseScript";
import { AdsConsentProvider } from "@/components/ads/AdsConsentProvider";
import CookieConsent from "@/components/ads/CookieConsent";
import type { ReactNode } from "react";

function SiteProviders({ children }: { children: ReactNode }) {
    return (
        <AdsConsentProvider>
            {children}
            <AdSenseScript />
            <CookieConsent />
        </AdsConsentProvider>
    );
}

export default SiteProviders;
