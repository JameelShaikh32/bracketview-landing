import type { ToolPage } from "@/app/data/toolPages";
import AdPlacement from "@/components/ads/AdPlacement";
import InteractiveToolDemo from "@/components/marketing/InteractiveToolDemo";
import StickyCtaBar from "@/components/marketing/StickyCtaBar";
import RelatedTools from "@/components/RelatedTools";
import ToolDemoVideo from "@/components/ToolDemoVideo";
import PageHeader from "@/components/motion/PageHeader";
import Reveal from "@/components/motion/Reveal";
import StepsSection from "@/components/StepsSection";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import {
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
  buildHowToSchema,
  buildItemListSchema,
  buildToolSoftwareApplicationSchema,
  SITE_URL,
} from "@/lib/seo";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

type ToolLandingPageProps = {
  page: ToolPage;
};

const ToolLandingPage = ({ page }: ToolLandingPageProps) => {
  const pageUrl = `${SITE_URL}/${page.slug}`;
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/features" },
    { name: page.h1, path: `/${page.slug}` },
  ];

  const schemas = [
    buildToolSoftwareApplicationSchema(page.h1, page.intro, pageUrl),
    buildHowToSchema(page.howToName, page.howToDescription, page.howToSteps),
    buildFaqPageSchema(page.faqs),
    buildItemListSchema(
      `${page.h1} Features`,
      page.features.map((feature) => ({ name: feature })),
    ),
    buildBreadcrumbListSchema(breadcrumbItems),
  ];

  return (
    <main className="w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <JsonLd data={schemas} />
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />
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

        {page.problem ? (
          <Reveal className="mt-12">
            <section
              aria-labelledby={`${page.slug}-problem`}
              className="rounded-4xl bg-white p-6 sm:p-10 dark:bg-muted"
            >
              <h2
                id={`${page.slug}-problem`}
                className="text-2xl font-bold sm:text-3xl"
              >
                The problem
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75">
                {page.problem}
              </p>
            </section>
          </Reveal>
        ) : null}

        {page.useCases?.length ? (
          <section
            aria-labelledby={`${page.slug}-usecases`}
            className="mt-16"
          >
            <Reveal>
              <h2
                id={`${page.slug}-usecases`}
                className="text-2xl font-bold sm:text-3xl"
              >
                Use cases
              </h2>
            </Reveal>
            <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {page.useCases.map((useCase) => (
                <li
                  key={useCase.title}
                  className="rounded-4xl bg-white p-6 dark:bg-muted"
                >
                  <h3 className="font-bold">{useCase.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/70 dark:text-foreground/70">
                    {useCase.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <Reveal className="mt-12">
          <div className="rounded-4xl bg-white p-6 sm:p-10 lg:p-12 dark:bg-muted">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <p className="text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75">
                  {page.intro}
                </p>
                <Link
                  href={page.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex h-11 items-center gap-2 rounded-2xl bg-accent px-5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
                >
                  {page.ctaLabel}
                  <ArrowUpRight size={16} aria-hidden />
                </Link>
              </div>
              {page.interactiveDemo ? (
                <InteractiveToolDemo kind={page.interactiveDemo} />
              ) : (
                <ToolDemoVideo
                  src={page.demoVideo?.src}
                  poster={page.demoVideo?.poster}
                  label={page.demoVideo?.label ?? page.badge}
                />
              )}
            </div>
            {page.interactiveDemo && page.demoVideo ? (
              <div className="mt-8">
                <ToolDemoVideo
                  src={page.demoVideo.src}
                  poster={page.demoVideo.poster}
                  label={page.demoVideo.label ?? page.badge}
                />
              </div>
            ) : null}
          </div>
        </Reveal>

        {page.codeExamples?.length ? (
          <section
            aria-labelledby={`${page.slug}-examples`}
            className="mt-16"
          >
            <Reveal>
              <h2
                id={`${page.slug}-examples`}
                className="text-2xl font-bold sm:text-3xl"
              >
                Code examples
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
              {page.codeExamples.map((example) => (
                <div
                  key={example.title}
                  className="rounded-4xl bg-white p-6 dark:bg-muted"
                >
                  <h3 className="text-sm font-bold">{example.title}</h3>
                  <pre className="mt-3 overflow-x-auto rounded-2xl bg-background/80 p-4 font-mono text-xs text-black/85 dark:text-foreground/85">
                    {example.code}
                  </pre>
                </div>
              ))}
            </div>
          </section>
        ) : null}

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
                <span className="text-sm leading-relaxed">{feature}</span>
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

        <section aria-labelledby={`${page.slug}-faq`} className="mt-16">
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

        <Reveal className="mt-16">
          <section
            aria-labelledby={`${page.slug}-privacy`}
            className="rounded-4xl bg-white p-6 sm:p-10 dark:bg-muted"
          >
            <h2
              id={`${page.slug}-privacy`}
              className="text-2xl font-bold sm:text-3xl"
            >
              Privacy and security
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75">
              Core viewing, formatting, validation, JSONPath, and jq run in your
              browser. Optional AI features, encrypted snapshots, and Webhook
              Tester send or store data when you use them. Review the{" "}
              <Link
                href="/privacy"
                className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
              >
                privacy policy
              </Link>{" "}
              before pasting sensitive payloads into optional cloud features.
            </p>
          </section>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/pricing"
            className="inline-flex h-11 items-center rounded-2xl border-2 border-black/10 px-5 text-sm font-medium dark:border-foreground/15"
          >
            View pricing
          </Link>
          <Link
            href="/learn"
            className="inline-flex h-11 items-center rounded-2xl border-2 border-black/10 px-5 text-sm font-medium dark:border-foreground/15"
          >
            Learn guides
          </Link>
        </div>

        <AdPlacement variant="content" className="mt-16" />
      </div>

      <RelatedTools currentSlug={page.slug} />
      <StickyCtaBar />
    </main>
  );
};

export default ToolLandingPage;
