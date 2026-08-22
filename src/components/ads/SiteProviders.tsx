"use client";

import AdSenseScript from "@/components/ads/AdSenseScript";
import { AdsConsentProvider } from "@/components/ads/AdsConsentProvider";
import type { ReactNode } from "react";

function SiteProviders({ children }: { children: ReactNode }) {
    return (
        <AdsConsentProvider>
            {children}
            <AdSenseScript />
        </AdsConsentProvider>
    );
}

export default SiteProviders;
