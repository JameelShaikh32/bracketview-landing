/** Public plan limits — keep in sync with app.bracketview.in enforcement. */
const PLAN_LIMITS = {
    free: {
        uploadMb: 5,
        snapshotsPerMonth: 5,
        aiActionsPerMonth: 20,
        snapshotMaxExpiryMinutes: 10,
    },
    pro: {
        uploadMb: 50,
        snapshotMaxExpiryMinutes: 120,
    },
} as const;

const PRICING = {
    monthlyUsd: 3,
    yearlyUsd: 27,
    yearlyMonthlyUsd: 2.25,
    annualDiscountPercent: 25,
} as const;

function formatUsd(amount: number): string {
    return amount % 1 === 0 ? `$${amount}` : `$${amount.toFixed(2)}`;
}

const PRO_MONTHLY_PRICE_LABEL = formatUsd(PRICING.monthlyUsd);
const PRO_YEARLY_BILL_LABEL = formatUsd(PRICING.yearlyUsd);
const PRO_YEARLY_MONTHLY_LABEL = `${formatUsd(PRICING.yearlyMonthlyUsd)} / mo`;
const PRO_PRICING_SUMMARY = `${PRO_MONTHLY_PRICE_LABEL}/month or ${PRO_YEARLY_BILL_LABEL}/year`;
const PRO_PRICING_FAQ_DETAIL = `${PRO_MONTHLY_PRICE_LABEL}/month or ${formatUsd(PRICING.yearlyMonthlyUsd)}/month billed annually`;

function formatExpiryMinutes(minutes: number): string {
    if (minutes >= 60 && minutes % 60 === 0) {
        const hours = minutes / 60;
        return hours === 1 ? "1-hour" : `${hours}-hour`;
    }
    return `${minutes}-minute`;
}

const FREE_UPLOAD_LABEL = `${PLAN_LIMITS.free.uploadMb} MB`;
const PRO_UPLOAD_LABEL = `${PLAN_LIMITS.pro.uploadMb} MB`;

const FREE_SNAPSHOTS_LABEL = `${PLAN_LIMITS.free.snapshotsPerMonth} encrypted snapshot links per month`;
const PRO_SNAPSHOTS_LABEL = "Unlimited encrypted snapshot links";

const FREE_AI_LABEL = `${PLAN_LIMITS.free.aiActionsPerMonth} AI actions per month`;
const PRO_AI_LABEL = "Unlimited AI (repair, mock data, jq assistant & more)";

const PRO_PERFORMANCE_MODE_LABEL =
    "Performance Mode for large JSON payloads (up to 50 MB)";

const FREE_SNAPSHOT_EXPIRY_LABEL = `Snapshot links up to ${formatExpiryMinutes(PLAN_LIMITS.free.snapshotMaxExpiryMinutes)} expiry`;
const PRO_SNAPSHOT_EXPIRY_LABEL = `Snapshot links up to ${formatExpiryMinutes(PLAN_LIMITS.pro.snapshotMaxExpiryMinutes)} expiry`;

const PRO_VALUE_SUMMARY =
    "Pro is for daily JSON work — larger files, Performance Mode, unlimited sharing, and unlimited AI.";

const FREE_TIER_SUMMARY =
    "Core JSON tools stay free. Paid limits apply to uploads, snapshots, and AI.";

export {
    formatExpiryMinutes,
    formatUsd,
    FREE_AI_LABEL,
    FREE_SNAPSHOT_EXPIRY_LABEL,
    FREE_SNAPSHOTS_LABEL,
    FREE_TIER_SUMMARY,
    FREE_UPLOAD_LABEL,
    PLAN_LIMITS,
    PRICING,
    PRO_AI_LABEL,
    PRO_MONTHLY_PRICE_LABEL,
    PRO_PERFORMANCE_MODE_LABEL,
    PRO_PRICING_FAQ_DETAIL,
    PRO_PRICING_SUMMARY,
    PRO_SNAPSHOT_EXPIRY_LABEL,
    PRO_SNAPSHOTS_LABEL,
    PRO_YEARLY_BILL_LABEL,
    PRO_YEARLY_MONTHLY_LABEL,
    PRO_UPLOAD_LABEL,
    PRO_VALUE_SUMMARY,
};
