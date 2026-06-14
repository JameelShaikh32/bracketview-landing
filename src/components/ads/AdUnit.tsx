"use client";

import { ADSENSE_CLIENT_ID } from "@/lib/ads";
import { useAdsConsent } from "@/hooks/useAdsConsent";
import Link from "next/link";
import { useEffect, useRef } from "react";

type AdUnitProps = {
    slot: string;
    className?: string;
};

const AdUnit = ({ slot, className = "" }: AdUnitProps) => {
    const { consent, adsEnabled } = useAdsConsent();
    const pushed = useRef(false);

    useEffect(() => {
        if (!adsEnabled || consent !== "granted" || !slot || pushed.current) {
            return;
        }

        const pushAd = () => {
            if (pushed.current) return;
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                pushed.current = true;
            } catch {
                // AdSense not ready yet
            }
        };

        if (window.adsbygoogle) {
            pushAd();
            return;
        }

        const interval = window.setInterval(() => {
            if (window.adsbygoogle) {
                window.clearInterval(interval);
                pushAd();
            }
        }, 150);

        const timeout = window.setTimeout(() => {
            window.clearInterval(interval);
        }, 10_000);

        return () => {
            window.clearInterval(interval);
            window.clearTimeout(timeout);
        };
    }, [adsEnabled, consent, slot]);

    if (!adsEnabled || consent !== "granted" || !slot) {
        return null;
    }

    return (
        <aside
            className={`mx-auto w-full max-w-4xl ${className}`}
            aria-label="Advertisement"
        >
            <p className="mb-2 text-center text-xs text-black/50 dark:text-foreground/50">
                Ad ·{" "}
                <Link
                    href="/privacy"
                    className="underline-offset-2 hover:underline"
                >
                    The BracketView app workspace stays ad-free
                </Link>
            </p>
            <ins
                className="adsbygoogle block min-h-[90px] overflow-hidden rounded-2xl bg-black/[0.03] dark:bg-white/[0.03]"
                style={{ display: "block" }}
                data-ad-client={ADSENSE_CLIENT_ID}
                data-ad-slot={slot}
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </aside>
    );
};

export default AdUnit;
