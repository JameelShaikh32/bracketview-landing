type RateLimitEntry = {
    count: number;
    resetAt: number;
};

const store = new Map<string, RateLimitEntry>();

const pruneExpired = (now: number) => {
    for (const [key, entry] of store) {
        if (entry.resetAt <= now) {
            store.delete(key);
        }
    }
};

const checkRateLimit = (
    key: string,
    limit: number,
    windowMs: number,
): { allowed: boolean; retryAfterSeconds: number } => {
    const now = Date.now();

    if (store.size > 10_000) {
        pruneExpired(now);
    }

    const entry = store.get(key);

    if (!entry || entry.resetAt <= now) {
        store.set(key, { count: 1, resetAt: now + windowMs });
        return { allowed: true, retryAfterSeconds: 0 };
    }

    if (entry.count >= limit) {
        return {
            allowed: false,
            retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000),
        };
    }

    entry.count += 1;
    return { allowed: true, retryAfterSeconds: 0 };
};

export { checkRateLimit };
