"use client";

import { useEffect } from "react";

/**
 * Fires a homepage_view event once when GTM/gtag is available.
 * Does not send page content or JSON payloads.
 */
export default function HomepageViewTracker() {
  useEffect(() => {
    const w = window as Window & {
      gtag?: (...args: unknown[]) => void;
      dataLayer?: unknown[];
    };
    if (typeof w.gtag === "function") {
      w.gtag("event", "homepage_view", {
        event_category: "marketing",
        event_label: "landing_home",
      });
      return;
    }
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: "homepage_view",
      event_category: "marketing",
      event_label: "landing_home",
    });
  }, []);

  return null;
}
