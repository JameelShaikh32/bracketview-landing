const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "";

const ADSENSE_SLOT_BLOG =
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT ??
    "";

const ADSENSE_SLOT_CONTENT =
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_CONTENT ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT ??
    "";

type AdsConsent = "granted" | "denied";

const ADSENSE_ENABLED = Boolean(ADSENSE_CLIENT_ID);

function isAdSlotConfigured(slot: string): boolean {
    return Boolean(ADSENSE_CLIENT_ID && slot);
}

export {
    ADSENSE_CLIENT_ID,
    ADSENSE_ENABLED,
    ADSENSE_SLOT_BLOG,
    ADSENSE_SLOT_CONTENT,
    isAdSlotConfigured,
};
export type { AdsConsent };
