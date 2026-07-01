import Link from "next/link";
import type { MDXComponents } from "mdx/types";

const mdxComponents: MDXComponents = {
    h1: (props) => (
        <h1
            className="mt-10 text-2xl font-bold first:mt-0 sm:text-3xl"
            {...props}
        />
    ),
    h2: (props) => (
        <h2
            className="mt-10 text-xl font-bold first:mt-0 sm:text-2xl"
            {...props}
        />
    ),
    h3: (props) => (
        <h3 className="mt-6 text-lg font-bold" {...props} />
    ),
    p: (props) => (
        <p
            className="mt-4 text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75"
            {...props}
        />
    ),
    ul: (props) => (
        <ul
            className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75"
            {...props}
        />
    ),
    ol: (props) => (
        <ol
            className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75"
            {...props}
        />
    ),
    li: (props) => <li className="pl-1" {...props} />,
    code: (props) => (
        <code
            className="rounded bg-gray px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-background"
            {...props}
        />
    ),
    pre: (props) => (
        <pre
            className="mt-4 overflow-x-auto rounded-2xl bg-gray p-4 font-mono text-sm dark:bg-background"
            {...props}
        />
    ),
    a: ({ href, children, ...props }) => {
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
