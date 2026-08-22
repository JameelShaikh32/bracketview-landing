import { learnPages, type LearnPage } from "@/app/data/learnPages";
import { toolPages } from "@/app/data/toolPages";
import JsonToolComparisonTable from "@/components/JsonToolComparisonTable";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import {
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
  buildHowToSchema,
  buildItemListSchema,
  SITE_URL,
} from "@/lib/seo";
import Link from "next/link";

type LearnArticleProps = {
  page: LearnPage;
};

const LearnArticle = ({ page }: LearnArticleProps) => {
  const pageUrl = `${SITE_URL}/learn/${page.slug}`;
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Learn", path: "/learn" },
    { name: page.title, path: `/learn/${page.slug}` },
  ];
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.title,
      description: page.metaDescription,
      url: pageUrl,
      author: { "@type": "Organization", name: "BracketView" },
    },
    buildFaqPageSchema(page.faqs),
    buildBreadcrumbListSchema(breadcrumbItems),
    ...(page.steps
      ? [
          buildHowToSchema(
            page.title,
            page.answerFirst,
            page.steps.map((step, index) => ({
              position: index + 1,
              name: step.name,
              text: step.text,
            })),
          ),
        ]
      : []),
    ...(page.listedTools?.length
      ? [
          buildItemListSchema(
            page.title,
            page.listedTools.map((tool) => ({
              name: tool.name,
              description: tool.description,
              url: tool.url,
            })),
          ),
        ]
      : []),
  ];

  return (
    <article className="w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <JsonLd data={schemas} />
      <div className="mx-auto max-w-6xl">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />
        <Badge>Learn</Badge>
        <h1 className="mt-4 text-3xl font-bold leading-snug tracking-tight sm:text-4xl sm:leading-snug">
          {page.title}
        </h1>
        <p className="mt-6 rounded-3xl bg-white p-5 text-sm leading-relaxed text-black/80 sm:text-base sm:leading-relaxed dark:bg-muted dark:text-foreground/85">
          <strong className="font-bold">Direct answer: </strong>
          {page.answerFirst}
        </p>

        {page.sections?.length ? (
          <div className="mt-12 space-y-10">
            {page.sections.map((section) => {
              const headingId = `section-${section.heading
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "")}`;
              return (
                <section key={section.heading} aria-labelledby={headingId}>
                  <h2 id={headingId} className="text-2xl font-bold">
                    {section.heading}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-black/70 sm:text-base dark:text-foreground/70">
                    {section.body}
                  </p>
                </section>
              );
            })}
          </div>
        ) : null}

        {page.comparison ? (
          <section className="mt-12" aria-labelledby="comparison-heading">
            <h2 id="comparison-heading" className="text-2xl font-bold">
              Feature comparison
            </h2>
            <div className="mt-6 rounded-3xl bg-white p-4 sm:p-6 dark:bg-muted">
              <JsonToolComparisonTable
                columns={page.comparison.columns}
                rows={page.comparison.rows}
                caption={page.comparison.caption}
                compact
              />
            </div>
          </section>
        ) : null}

        {page.steps?.length ? (
          <section className="mt-12" aria-labelledby="steps-heading">
            <h2 id="steps-heading" className="text-2xl font-bold">
              Step-by-step
            </h2>
            <ol className="mt-6 space-y-4">
              {page.steps.map((step, index) => (
                <li
                  key={step.name}
                  className="rounded-3xl bg-white p-5 dark:bg-muted"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-accent-dark dark:text-accent">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-1 font-bold leading-snug">{step.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/70 dark:text-foreground/70">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        ) : null}

        {page.examples?.length ? (
          <section className="mt-12" aria-labelledby="examples-heading">
            <h2 id="examples-heading" className="text-2xl font-bold">
              Examples
            </h2>
            <div className="mt-6 space-y-4">
              {page.examples.map((example) => (
                <div
                  key={example.title}
                  className="rounded-3xl bg-white p-5 dark:bg-muted"
                >
                  <h3 className="text-sm font-bold">{example.title}</h3>
                  <pre className="mt-3 overflow-x-auto rounded-2xl bg-background/80 p-4 font-mono text-xs">
                    {example.code}
                  </pre>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-12" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-bold">
            FAQ
          </h2>
          <div className="mt-6 space-y-4">
            {page.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl bg-white p-5 dark:bg-muted"
              >
                <h3 className="font-bold leading-snug">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/70 dark:text-foreground/70">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="tools-heading">
          <h2 id="tools-heading" className="text-2xl font-bold">
            Try it in BracketView
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {page.relatedTools.map((slug) => {
              const tool = toolPages[slug];
              if (!tool) return null;
              return (
                <li key={slug}>
                  <Link
                    href={`/${slug}`}
                    className="inline-flex rounded-xl bg-white px-4 py-2 text-sm font-medium dark:bg-muted"
                  >
                    {tool.badge}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6">
            <Button href="https://app.bracketview.in/?sample=api-error" external>
              Open Playground
            </Button>
          </div>
        </section>

        {page.relatedLearn.length ? (
          <section className="mt-12" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-2xl font-bold">
              Related guides
            </h2>
            <ul className="mt-4 space-y-2">
              {page.relatedLearn.map((slug) => {
                const related = learnPages[slug];
                if (!related) return null;
                return (
                  <li key={slug}>
                    <Link
                      href={`/learn/${slug}`}
                      className="text-sm font-medium text-accent-dark underline-offset-4 hover:underline dark:text-accent"
                    >
                      {related.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}
      </div>
    </article>
  );
};

export default LearnArticle;
