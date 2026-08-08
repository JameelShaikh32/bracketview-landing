import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:opacity-90 dark:bg-accent-dark",
  secondary:
    "border-2 border-black/10 bg-transparent text-black hover:bg-black/5 dark:border-foreground/15 dark:text-foreground dark:hover:bg-foreground/10",
  ghost:
    "bg-transparent text-black/80 hover:bg-black/5 dark:text-foreground/80 dark:hover:bg-foreground/10",
};

type ButtonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
} & Omit<ComponentProps<"button">, "className">;

const base =
  "inline-flex h-11 items-center justify-center gap-2 rounded-2xl px-5 text-sm font-medium transition-colors";

const Button = ({
  variant = "primary",
  children,
  className = "",
  href,
  external,
  ...props
}: ButtonProps) => {
  const classes = `${base} ${variantClasses[variant]} ${className}`;
  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
