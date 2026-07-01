import { ArrowUpRight } from "lucide-react";

type AppTool = {
    label: string;
    url: string;
};

type BlogAppCtaProps = {
    tools: AppTool[];
};

const BlogAppCta = ({ tools }: BlogAppCtaProps) => {
    return (
        <section
            aria-label="Try in BracketView"
            className="mt-12 rounded-3xl bg-gray p-6 dark:bg-background"
        >
            <h2 className="text-lg font-bold">Try this in BracketView</h2>
            <p className="mt-2 text-sm text-black/70 dark:text-foreground/70">
                Open the BracketView workspace — core tools run in your browser.
            </p>
            <ul className="mt-4 flex flex-wrap gap-3">
                {tools.map((tool) => (
                    <li key={tool.url}>
                        <a
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
                        >
                            {tool.label}
                            <ArrowUpRight size={14} aria-hidden />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default BlogAppCta;
