import type { Variants } from "motion/react";

export const defaultTransition = {
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1] as const,
};

export const springTransition = {
    type: "spring" as const,
    stiffness: 400,
    damping: 25,
};

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: defaultTransition,
    },
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 },
    },
};

export const fadeUpReduced: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 },
    },
};

export const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: defaultTransition,
    },
};

export const fadeRight: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: defaultTransition,
    },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: defaultTransition,
    },
};

export const scaleInReduced: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 },
    },
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

export const heroStaggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.15,
        },
    },
};

export const getFadeUpVariant = (reducedMotion: boolean | null): Variants =>
    reducedMotion ? fadeUpReduced : fadeUp;

export const getScaleInVariant = (reducedMotion: boolean | null): Variants =>
    reducedMotion ? scaleInReduced : scaleIn;

export const getDirectionalVariant = (
    direction: "left" | "right",
    reducedMotion: boolean | null,
): Variants => {
    if (reducedMotion) return fadeUpReduced;
    return direction === "left" ? fadeLeft : fadeRight;
};
