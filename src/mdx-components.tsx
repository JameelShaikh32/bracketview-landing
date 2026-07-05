import Link from "next/link";
import type { ComponentProps } from "react";

const mdxComponents = {
    h1: (props: ComponentProps<"h1">) => (
        <h1
            className="mt-10 text-2xl font-bold first:mt-0 sm:text-3xl"
            {...props}
        />
    ),
    h2: (props: ComponentProps<"h2">) => (
        <h2
            className="mt-10 text-xl font-bold first:mt-0 sm:text-2xl"
            {...props}
        />
    ),
    h3: (props: ComponentProps<"h3">) => (
        <h3 className="mt-6 text-lg font-bold" {...props} />
    ),
    p: (props: ComponentProps<"p">) => (
        <p
            className="mt-4 text-base leading-relaxed text-black/75 dark:text-foreground/75"
            {...props}
        />
    ),
    ul: (props: ComponentProps<"ul">) => (
        <ul
            className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-black/75 dark:text-foreground/75"
            {...props}
        />
    ),
    ol: (props: ComponentProps<"ol">) => (
        <ol
            className="mt-4 list-decimal space-y-2 pl-6 text-base leading-relaxed text-black/75 dark:text-foreground/75"
            {...props}
        />
    ),
    li: (props: ComponentProps<"li">) => <li className="pl-1" {...props} />,
    code: (props: ComponentProps<"code">) => (
        <code
            className="rounded bg-gray px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-background"
            {...props}
        />
    ),
    pre: (props: ComponentProps<"pre">) => (
        <pre
            className="mt-4 overflow-x-auto rounded-2xl bg-gray p-4 font-mono text-sm dark:bg-background"
            {...props}
        />
    ),
    a: ({ href, children, ...props }: ComponentProps<"a">) => {
        const isExternal = href?.startsWith("http");
        if (isExternal) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                    {...props}
                >
                    {children}
                </a>
            );
        }
        return (
            <Link
                href={href ?? "#"}
                className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                {...props}
            >
                {children}
            </Link>
        );
    },
};

export default mdxComponents;
