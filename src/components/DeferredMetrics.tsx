"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const VercelAnalytics = dynamic(
    () => import("@vercel/analytics/next").then((mod) => mod.Analytics),
    { ssr: false },
);

const SpeedInsights = dynamic(
    () =>
        import("@vercel/speed-insights/next").then((mod) => mod.SpeedInsights),
    { ssr: false },
);

const DeferredMetrics = () => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const enable = () => setReady(true);
        const idleId = window.requestIdleCallback?.(enable, { timeout: 4000 });
        const timeoutId = window.setTimeout(enable, 4000);

        return () => {
            if (idleId !== undefined) {
                window.cancelIdleCallback?.(idleId);
            }
            window.clearTimeout(timeoutId);
        };
    }, []);

    if (!ready) return null;

    return (
        <>
            <SpeedInsights />
            <VercelAnalytics />
        </>
    );
};

export default DeferredMetrics;
