import { checkRateLimit } from "@/lib/rate-limit";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BLOCKED_METHODS = new Set(["TRACE", "TRACK", "CONNECT"]);

const CONTACT_RATE_LIMIT = 5;
const CONTACT_RATE_WINDOW_MS = 15 * 60 * 1000;

export function proxy(request: NextRequest) {
    if (BLOCKED_METHODS.has(request.method)) {
        return new NextResponse(null, { status: 405 });
    }

    if (request.nextUrl.pathname.startsWith("/api/contact")) {
        const ip =
            request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
            request.headers.get("x-real-ip") ??
            "unknown";

        const { allowed, retryAfterSeconds } = checkRateLimit(
            `contact:${ip}`,
            CONTACT_RATE_LIMIT,
            CONTACT_RATE_WINDOW_MS,
        );

        if (!allowed) {
            return NextResponse.json(
                {
                    error: "Too many requests. Please wait before trying again.",
                },
                {
                    status: 429,
                    headers: {
                        "Retry-After": String(retryAfterSeconds),
                    },
                },
            );
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/api/:path*"],
};
