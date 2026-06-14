"use client";

import { useAdsConsent } from "@/hooks/useAdsConsent";
import Link from "next/link";

const CookieConsent = () => {
    const { needsPrompt, accept, reject, adsEnabled } = useAdsConsent();

    if (!adsEnabled || !needsPrompt) {
        return null;
    }

    return (
        <div
            role="dialog"
            aria-labelledby="cookie-consent-title"
            aria-describedby="cookie-consent-description"
            className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-3xl border border-black/10 bg-white p-5 shadow-lg sm:inset-x-6 sm:p-6 dark:border-foreground/15 dark:bg-muted"
        >
            <h2
                id="cookie-consent-title"
                className="text-base font-bold text-black dark:text-foreground"
            >
                Cookie preferences
            </h2>
            <p
                id="cookie-consent-description"
                className="mt-2 text-sm leading-relaxed text-black/75 dark:text-foreground/75"
            >
                This marketing site may use cookies for Google AdSense
                advertising to help support free core BracketView tools. The
                JSON workspace at app.bracketview.in does not show ads. See our{" "}
                <Link
                    href="/privacy"
                    className="font-medium underline-offset-2 hover:underline"
                >
                    Privacy Policy
                </Link>
                .
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
                <button
                    type="button"
                    onClick={accept}
                    className="cursor-pointer rounded-2xl bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
                >
                    Accept ads
                </button>
                <button
                    type="button"
                    onClick={reject}
                    className="cursor-pointer rounded-2xl border border-black/15 px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black/5 dark:border-foreground/20 dark:text-foreground dark:hover:bg-foreground/5"
                >
                    Decline
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
