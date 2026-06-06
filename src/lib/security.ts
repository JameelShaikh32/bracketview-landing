const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://bracketview.in";

const ALLOWED_HOSTS = new Set([
    new URL(SITE_URL).host,
    "localhost:3000",
    "127.0.0.1:3000",
]);

const sanitizeText = (value: string, maxLength: number): string =>
    value
        .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
        .replace(/\r\n/g, "\n")
        .trim()
        .slice(0, maxLength);

const isAllowedOrigin = (request: Request): boolean => {
    const origin = request.headers.get("origin");
    const referer = request.headers.get("referer");

    if (origin) {
        try {
            return ALLOWED_HOSTS.has(new URL(origin).host);
        } catch {
            return false;
        }
    }

    if (referer) {
        try {
            return ALLOWED_HOSTS.has(new URL(referer).host);
        } catch {
            return false;
        }
    }

    return process.env.NODE_ENV === "development";
};

const getClientIp = (request: Request): string => {
    const forwarded = request.headers.get("x-forwarded-for");
    if (forwarded) {
        return forwarded.split(",")[0]?.trim() ?? "unknown";
    }

    return request.headers.get("x-real-ip") ?? "unknown";
};

export { getClientIp, isAllowedOrigin, sanitizeText };
