"use client";

import { springTransition } from "@/app/components/motion/variants";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface HoverArticleProps {
    children: ReactNode;
    className?: string;
}

const HoverArticle = ({ children, className }: HoverArticleProps) => {
    return (
        <motion.article
            whileHover={{ y: -4 }}
            transition={springTransition}
            className={className}
        >
            {children}
        </motion.article>
    );
};

export default HoverArticle;
