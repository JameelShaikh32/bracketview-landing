"use client";

import {
    ADSENSE_SLOT_BLOG,
    ADSENSE_SLOT_CONTENT,
    isAdSlotConfigured,
} from "@/lib/ads";
import AdUnit from "@/components/ads/AdUnit";

type AdPlacementVariant = "blog" | "content";

type AdPlacementProps = {
    variant?: AdPlacementVariant;
    className?: string;
};

const AdPlacement = ({
    variant = "content",
    className = "mt-12",
}: AdPlacementProps) => {
    const slot =
        variant === "blog" ? ADSENSE_SLOT_BLOG : ADSENSE_SLOT_CONTENT;

    if (!isAdSlotConfigured(slot)) {
        return null;
    }

    return <AdUnit slot={slot} className={className} />;
};

export default AdPlacement;
