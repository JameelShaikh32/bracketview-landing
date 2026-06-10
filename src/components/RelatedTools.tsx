import { relatedToolsMap } from "@/app/data/toolPages";
import Reveal from "@/components/motion/Reveal";
import StaggerGroup from "@/components/motion/StaggerGroup";
import JsonLd from "@/components/seo/JsonLd";
import { buildItemListSchema, SITE_URL } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type RelatedToolsProps = {
    currentSlug: string;
};

const RelatedTools = ({ currentSlug }: RelatedToolsProps) => {
    const tools = relatedToolsMap[currentSlug];

    if (!tools?.length) return null;

    const schema = buildItemListSchema(
        "Related BracketView JSON Tools",
        tools.map((tool) => ({
            name: tool.title,
            description: tool.description,
            url: `${SITE_URL}/${tool.slug}`,
        })),
    );

    return (
        <section
            aria-label="Related tools"
            className="relative w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8"
        >
            <JsonLd data={schema} />
            <div className="mx-auto max-w-7xl">
                <Reveal className="mb-10 text-center">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                        Related tools
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-black/70 dark:text-foreground/70">
                        Explore more JSON tools in the BracketView workspace.
                    </p>
                </Reveal>

                <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-5">
                    {tools.map((tool) => (
                        <Link
                            key={tool.slug}
                            href={`/${tool.slug}`}
                            className="group flex flex-col rounded-4xl bg-white p-6 transition-colors duration-300 hover:bg-accent dark:bg-muted dark:hover:bg-accent-dark dark:hover:text-white"
                        >
                            <h3 className="text-lg font-bold">{tool.title}</h3>
                            <p className="mt-2 flex-1 text-sm opacity-80">
                                {tool.description}
                            </p>
                            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                                Learn more
                                <ArrowUpRight
                                    size={16}
                                    aria-hidden
                                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </span>
                        </Link>
                    ))}
                </StaggerGroup>
            </div>
        </section>
    );
};

export default RelatedTools;
