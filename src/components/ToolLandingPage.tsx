import type { ToolPage } from "@/app/data/toolPages";
import AdPlacement from "@/components/ads/AdPlacement";
import RelatedTools from "@/components/RelatedTools";
import ToolDemoVideo from "@/components/ToolDemoVideo";
import PageHeader from "@/components/motion/PageHeader";
import Reveal from "@/components/motion/Reveal";
import StepsSection from "@/components/StepsSection";
import JsonLd from "@/components/seo/JsonLd";
import {
    buildFaqPageSchema,
    buildHowToSchema,
    buildItemListSchema,
    buildToolSoftwareApplicationSchema,
    SITE_URL,
} from "@/lib/seo";
import { Check } from "lucide-react";

type ToolLandingPageProps = {
    page: ToolPage;
};

const ToolLandingPage = ({ page }: ToolLandingPageProps) => {
    const pageUrl = `${SITE_URL}/${page.slug}`;

    const schemas = [
        buildToolSoftwareApplicationSchema(page.h1, page.intro, pageUrl),
        buildHowToSchema(page.howToName, page.howToDescription, page.howToSteps),
        buildFaqPageSchema(page.faqs),
        buildItemListSchema(
            `${page.h1} Features`,
            page.features.map((feature) => ({ name: feature })),
        ),
    ];

    return (
        <main className="w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
            <JsonLd data={schemas} />
            <div className="mx-auto max-w-7xl">
                <PageHeader
                    badge={page.badge}
                    title={page.h1}
                    description={page.metaDescription}
                    cta={{
                        label: page.ctaLabel,
                        href: page.appUrl,
                        external: true,
                    }}
                />

                <Reveal className="mt-12">
                    <div className="rounded-4xl bg-white p-6 sm:p-10 lg:p-12 dark:bg-muted">
                        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
                            <p className="text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75">
                                {page.intro}
                            </p>
                            <ToolDemoVideo
                                src={page.demoVideo?.src}
                                poster={page.demoVideo?.poster}
                                label={page.demoVideo?.label ?? page.badge}
                            />
                        </div>
                    </div>
                </Reveal>

                <section
                    aria-labelledby={`${page.slug}-features`}
                    className="mt-16"
                >
                    <Reveal>
                        <h2
                            id={`${page.slug}-features`}
                            className="text-2xl font-bold sm:text-3xl"
                        >
                            Key features
                        </h2>
                    </Reveal>
                    <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {page.features.map((feature) => (
                            <li
                                key={feature}
                                className="flex items-start gap-3 rounded-2xl bg-white p-4 dark:bg-muted"
                            >
                                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                                    <Check size={12} strokeWidth={3} aria-hidden />
                                </span>
                                <span className="text-sm leading-relaxed">
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>

                <StepsSection
                    id={`${page.slug}-howto`}
                    badge="How to"
                    title={page.howToName}
                    description={page.howToDescription}
                    steps={page.howToSteps.map((step) => ({
                        step: String(step.position).padStart(2, "0"),
                        title: step.name,
                        description: step.text,
                    }))}
                    cta={{
                        label: page.ctaLabel,
                        href: page.appUrl,
                        external: true,
                    }}
                    className="mt-16"
                />

                <section
                    aria-labelledby={`${page.slug}-faq`}
                    className="mt-16"
                >
                    <Reveal>
                        <h2
                            id={`${page.slug}-faq`}
                            className="text-2xl font-bold sm:text-3xl"
                        >
                            Frequently asked questions
                        </h2>
                    </Reveal>
                    <div className="mt-8 space-y-4">
                        {page.faqs.map((faq) => (
                            <div
                                key={faq.question}
                                className="rounded-4xl bg-white p-6 sm:p-8 dark:bg-muted"
                            >
                                <h3 className="text-base font-bold sm:text-lg">
                                    {faq.question}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-black/75 dark:text-foreground/75">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <AdPlacement variant="content" className="mt-16" />

            </div>

            <RelatedTools currentSlug={page.slug} />
        </main>
    );
};

export default ToolLandingPage;
