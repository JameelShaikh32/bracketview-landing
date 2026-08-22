"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";
import { useHydratedReducedMotion } from "./useHydratedReducedMotion";
import {
    fadeUp,
    fadeUpReduced,
    getDirectionalVariant,
    getScaleInVariant,
    scaleIn,
} from "./variants";

type RevealVariant = "fadeUp" | "fadeIn" | "scaleIn" | "fadeLeft" | "fadeRight";

interface RevealProps extends HTMLMotionProps<"div"> {
    variant?: RevealVariant;
    /** Animate on mount instead of on scroll into view */
    animateOnMount?: boolean;
}

const Reveal = ({
    children,
    variant = "fadeUp",
    animateOnMount = false,
    className,
    ...props
}: RevealProps) => {
    const reducedMotion = useHydratedReducedMotion();

    const variants = (() => {
        if (variant === "fadeLeft") return getDirectionalVariant("left", reducedMotion);
        if (variant === "fadeRight") return getDirectionalVariant("right", reducedMotion);
        if (variant === "scaleIn") return getScaleInVariant(reducedMotion);
        if (variant === "fadeIn" || reducedMotion) return fadeUpReduced;
        if (variant === "fadeUp") return fadeUp;
        return scaleIn;
    })();

    if (reducedMotion) {
        return <div className={className}>{children as ReactNode}</div>;
    }

    return (
        <motion.div
            initial="hidden"
            {...(animateOnMount
                ? { animate: "visible" }
                : { whileInView: "visible", viewport: { once: true, margin: "-80px" } })}
            variants={variants}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
