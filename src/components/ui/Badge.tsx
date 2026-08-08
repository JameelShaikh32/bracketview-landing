import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

const Badge = ({ children, className = "" }: BadgeProps) => (
  <span
    className={`inline-flex items-center rounded-full border border-black px-4 py-1 text-xs font-medium uppercase tracking-wider text-black dark:border-foreground dark:text-foreground ${className}`}
  >
    {children}
  </span>
);

export default Badge;
