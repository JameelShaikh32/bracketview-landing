/** Public plan limits — keep in sync with app.bracketview.in enforcement. */
const PLAN_LIMITS = {
    free: {
        uploadMb: 5,
        snapshotsPerMonth: 5,
        aiActionsPerMonth: 20,
        snapshotMaxExpiryMinutes: 10,
        webhookEndpoints: 3,
        webhookRequestsPerEndpoint: 25,
        webhookMaxRetentionDays: 2,
        webhookDefaultRetentionDays: 2,
        webhookMaxBodyKb: 256,
    },
    pro: {
        uploadMb: 50,
        snapshotMaxExpiryMinutes: 120,
        webhookEndpoints: 25,
        webhookRequestsPerEndpoint: 5_000,
        webhookMaxRetentionDays: 30,
        webhookDefaultRetentionDays: 7,
        webhookMaxBodyMb: 1,
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

function formatCount(n: number): string {
    return n.toLocaleString("en-US");
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
const PRO_AI_LABEL = "AI without a monthly cap (Fix, Explain, Types)";

const PRO_PERFORMANCE_MODE_LABEL =
    "Performance Mode for large JSON payloads (up to 50 MB)";

const PRO_UPLOAD_AND_PERF_LABEL = `${PRO_UPLOAD_LABEL} uploads + Performance Mode for large payloads`;

const FREE_SNAPSHOT_EXPIRY_LABEL = `Snapshot links up to ${formatExpiryMinutes(PLAN_LIMITS.free.snapshotMaxExpiryMinutes)} expiry`;
const PRO_SNAPSHOT_EXPIRY_LABEL = `Snapshot links up to ${formatExpiryMinutes(PLAN_LIMITS.pro.snapshotMaxExpiryMinutes)} expiry`;

const FREE_SNAPSHOTS_COMBINED_LABEL = `Encrypted snapshots: ${PLAN_LIMITS.free.snapshotsPerMonth} / month, ${PLAN_LIMITS.free.snapshotMaxExpiryMinutes} min expiry`;
const PRO_SNAPSHOTS_COMBINED_LABEL =
    "Unlimited snapshot links, up to 2 hours (not 10 minutes)";

const FREE_WEBHOOK_LABEL = `Webhook Tester: ${PLAN_LIMITS.free.webhookEndpoints} endpoints, ${formatCount(PLAN_LIMITS.free.webhookRequestsPerEndpoint)} requests each, ${PLAN_LIMITS.free.webhookMaxRetentionDays}-day retention`;
const PRO_WEBHOOK_LABEL = `Webhook Tester: ${PLAN_LIMITS.pro.webhookEndpoints} endpoints, ${formatCount(PLAN_LIMITS.pro.webhookRequestsPerEndpoint)} captures each, ${PLAN_LIMITS.pro.webhookMaxRetentionDays}-day history`;
const PRO_WEBHOOK_SHARE_LABEL =
    "Share captured webhook requests via encrypted snapshot links";

const PRO_VALUE_SUMMARY =
    "Pro is power, persistence, and AI — larger files, longer snapshot links, and AI without a monthly cap. Viewer tabs stay free.";

const FREE_TIER_SUMMARY =
    "Core JSON tools stay free. Paid limits apply to uploads, snapshots, AI, and Webhook Tester caps.";

const FREE_VIEWER_TOOLS_LABEL =
    "Tree, graph, node, table, JSONPath, JQ, diff, schema, types, compare, utilities";

const APP_BASE_URL = "https://app.bracketview.in";
const APP_PRICING_URL = `${APP_BASE_URL}/pricing`;
const APP_WEBHOOKS_URL = `${APP_BASE_URL}/webhooks`;

type ProCheckoutPlan = "monthly" | "yearly";

/** Deep link — app.bracketview.in reads ?plan=&checkout=1 to start Razorpay checkout. */
function appPricingCheckoutUrl(plan: ProCheckoutPlan): string {
    return `${APP_PRICING_URL}?plan=${plan}&checkout=1`;
}

const APP_PRICING_MONTHLY_CHECKOUT_URL = appPricingCheckoutUrl("monthly");
const APP_PRICING_YEARLY_CHECKOUT_URL = appPricingCheckoutUrl("yearly");

export {
    APP_BASE_URL,
    APP_PRICING_MONTHLY_CHECKOUT_URL,
    APP_PRICING_URL,
    APP_PRICING_YEARLY_CHECKOUT_URL,
    APP_WEBHOOKS_URL,
    appPricingCheckoutUrl,
    formatCount,
    formatExpiryMinutes,
    formatUsd,
    FREE_AI_LABEL,
    FREE_SNAPSHOT_EXPIRY_LABEL,
    FREE_SNAPSHOTS_COMBINED_LABEL,
    FREE_SNAPSHOTS_LABEL,
    FREE_TIER_SUMMARY,
    FREE_UPLOAD_LABEL,
    FREE_VIEWER_TOOLS_LABEL,
    FREE_WEBHOOK_LABEL,
    PLAN_LIMITS,
    PRICING,
    PRO_AI_LABEL,
    PRO_MONTHLY_PRICE_LABEL,
    PRO_PERFORMANCE_MODE_LABEL,
    PRO_PRICING_FAQ_DETAIL,
    PRO_SNAPSHOTS_COMBINED_LABEL,
    PRO_PRICING_SUMMARY,
    PRO_SNAPSHOT_EXPIRY_LABEL,
    PRO_SNAPSHOTS_LABEL,
    PRO_WEBHOOK_LABEL,
    PRO_WEBHOOK_SHARE_LABEL,
    PRO_YEARLY_BILL_LABEL,
    PRO_YEARLY_MONTHLY_LABEL,
    PRO_UPLOAD_AND_PERF_LABEL,
    PRO_UPLOAD_LABEL,
    PRO_VALUE_SUMMARY,
};
