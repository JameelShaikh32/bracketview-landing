"use client";

import { useHydratedReducedMotion } from "@/components/motion/useHydratedReducedMotion";
import {
    getFadeUpVariant,
    heroStaggerContainer,
} from "@/components/motion/variants";
import { motion } from "motion/react";

const DownloadsHero = () => {
    const reducedMotion = useHydratedReducedMotion();
    const itemVariant = getFadeUpVariant(reducedMotion);

    return (
        <section className="relative w-full">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={heroStaggerContainer}
                className="mx-auto flex max-w-4xl flex-col items-center text-center"
            >
                <motion.p
                    variants={itemVariant}
                    className="text-xs font-medium uppercase tracking-[0.14em] text-accent-dark dark:text-accent"
                >
                    Download
                </motion.p>
                <motion.h1
                    variants={itemVariant}
                    className="mt-4 text-3xl font-bold leading-normal text-black md:text-5xl md:leading-normal dark:text-foreground"
                >
                    Use BracketView on desktop or in the browser
                </motion.h1>
                <motion.p
                    variants={itemVariant}
                    className="mt-6 max-w-2xl text-base leading-relaxed text-black/70 dark:text-foreground/70"
                >
                    A privacy-first JSON workspace. Windows and Linux run locally,
                    offline, with no sign-in. The web app stays at app.bracketview.in.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default DownloadsHero;
