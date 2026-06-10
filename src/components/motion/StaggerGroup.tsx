"use client";

import { Children, isValidElement, type ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { getFadeUpVariant, staggerContainer } from "./variants";

interface StaggerGroupProps extends Omit<HTMLMotionProps<"div">, "children"> {
    children: ReactNode;
    /** Animate on mount instead of on scroll into view */
    animateOnMount?: boolean;
}

const StaggerGroup = ({
    children,
    animateOnMount = false,
    className,
    ...props
}: StaggerGroupProps) => {
    const reducedMotion = useReducedMotion();
    const childVariant = getFadeUpVariant(reducedMotion);

    return (
        <motion.div
            initial="hidden"
            {...(animateOnMount
                ? { animate: "visible" }
                : { whileInView: "visible", viewport: { once: true, margin: "-80px" } })}
            variants={staggerContainer}
            className={className}
            {...props}
        >
            {Children.map(children, (child) => {
                if (!isValidElement(child)) return child;

                return (
                    <motion.div key={child.key} variants={childVariant} className="h-full">
                        {child}
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default StaggerGroup;
