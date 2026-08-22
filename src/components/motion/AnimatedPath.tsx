"use client";

import { motion } from "motion/react";
import { useHydratedReducedMotion } from "./useHydratedReducedMotion";

interface AnimatedPathProps {
    d: string;
    className?: string;
    strokeWidth?: number;
    strokeDasharray?: string;
    strokeLinecap?: "round" | "butt" | "square";
    delay?: number;
}

const AnimatedPath = ({
    d,
    className,
    strokeWidth = 2.5,
    strokeDasharray,
    strokeLinecap = "round",
    delay = 0,
}: AnimatedPathProps) => {
    const reducedMotion = useHydratedReducedMotion();

    return (
        <motion.path
            d={d}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeLinecap={strokeLinecap}
            className={className}
            initial={{ pathLength: reducedMotion ? 1 : 0, opacity: reducedMotion ? 1 : 0.5 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                pathLength: { duration: reducedMotion ? 0 : 0.8, ease: "easeInOut", delay },
                opacity: { duration: 0.3, delay },
            }}
        />
    );
};

export default AnimatedPath;
