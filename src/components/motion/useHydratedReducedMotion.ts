"use client";

import { useEffect, useState } from "react";

/**
 * Hydration-safe reduced-motion flag.
 *
 * Motion's `useReducedMotion()` reads `prefers-reduced-motion` during the
 * client's first render (`true`) while SSR assumed `null`/`false`, which
 * mismatches initial styles. This hook stays `false` until after mount.
 */
function useHydratedReducedMotion(): boolean {
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setReducedMotion(media.matches);

        update();
        media.addEventListener("change", update);
        return () => media.removeEventListener("change", update);
    }, []);

    return reducedMotion;
}

export { useHydratedReducedMotion };
