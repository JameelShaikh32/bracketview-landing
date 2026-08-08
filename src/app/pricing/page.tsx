import { pricingFaqs, pricingPlans } from "@/app/data/constant";
import PricingMatrix from "@/components/marketing/PricingMatrix";
import StickyCtaBar from "@/components/marketing/StickyCtaBar";
import Reveal from "@/components/motion/Reveal";
import StaggerGroup from "@/components/motion/StaggerGroup";
import JsonLd from "@/components/seo/JsonLd";
import {
  buildFaqPageSchema,
  buildProductSchema,
  createPageMetadata,
} from "@/lib/seo";
import { ArrowUpRight, Check, Lock, Shield } from "lucide-react";
import Link from "next/link";

export const metadata = createPageMetadata({
  path: "/pricing",
  title: "Pricing — Free, Pro, Team & Enterprise | BracketView",
  description:
    "Start free with client-side JSON tools. Upgrade to Pro for AI, Performance Mode, and higher limits — or contact us for Team and Enterprise.",
  keywords: [
    "BracketView pricing",
    "JSON viewer pricing",
    "JSON tools free",
    "privacy-first JSON",
  ],
});

const PricingPage = () => {
  const schemas = [buildProductSchema(), buildFaqPageSchema(pricingFaqs)];

  return (
    <main className="w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <JsonLd data={schemas} />
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-black px-5 py-1.5 text-sm font-medium dark:border-foreground">
            Pricing
          </span>
          <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-5xl">
            Start free. Upgrade when JSON is your daily driver.
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-black/70 sm:text-base dark:text-foreground/70">
            Privacy-first core tools stay free forever. Pro raises AI, upload,
            snapshot, and webhook limits — plus Performance Mode for large
            payloads.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-3xl bg-white p-5 dark:bg-muted">
            <Lock className="mt-0.5 shrink-0 text-accent-dark dark:text-accent" size={20} />
            <div>
              <p className="font-bold">Client-side processing</p>
              <p className="mt-1 text-sm text-black/70 dark:text-foreground/70">
                Format, validate, and view JSON in the browser — your data stays
                local for core workflows.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-3xl bg-white p-5 dark:bg-muted">
            <Shield className="mt-0.5 shrink-0 text-accent-dark dark:text-accent" size={20} />
            <div>
              <p className="font-bold">No data selling</p>
              <p className="mt-1 text-sm text-black/70 dark:text-foreground/70">
                We do not sell payloads. Optional cloud features use encryption
                and short retention by design.
              </p>
            </div>
          </div>
        </div>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pricingPlans.map((plan) => {
            const external = plan.ctaHref.startsWith("http");
            return (
              <article
                key={plan.name}
                className={`flex h-full flex-col rounded-4xl p-6 sm:p-8 ${
                  plan.highlighted
                    ? "bg-accent text-black dark:bg-accent-dark dark:text-white"
                    : "bg-white text-black dark:bg-muted dark:text-foreground"
                }`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-2xl font-bold">{plan.name}</h2>
                  {plan.saveTag ? (
                    <span className="rounded-lg bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      {plan.saveTag}
                    </span>
                  ) : null}
                </div>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-4xl font-bold tracking-tight">
                    {plan.displayPrice ?? plan.price}
                  </span>
                  {plan.period ? (
                    <span className="mb-1 text-sm opacity-75">{plan.period}</span>
                  ) : null}
                </div>
                {plan.billingNote ? (
                  <p className="mt-2 text-xs opacity-70">{plan.billingNote}</p>
                ) : null}
                <p className="mt-4 text-sm leading-relaxed opacity-80">
                  {plan.description}
                </p>
                <Link
                  href={plan.ctaHref}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium ${
                    plan.highlighted
                      ? "bg-black text-white dark:bg-foreground dark:text-background"
                      : "bg-accent text-white dark:bg-accent-dark"
                  }`}
                >
                  {plan.cta}
                  <ArrowUpRight size={16} aria-hidden />
                </Link>
                <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-black/10 dark:bg-foreground/15">
                        <Check size={12} strokeWidth={3} aria-hidden />
                      </span>
                      <span className="opacity-90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </StaggerGroup>

        <PricingMatrix />

        <section
          aria-labelledby="pricing-roi-heading"
          className="mt-20 rounded-4xl bg-white p-6 sm:p-10 dark:bg-muted"
        >
          <h2 id="pricing-roi-heading" className="text-2xl font-bold sm:text-3xl">
            ROI for daily JSON work
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-black/70 sm:text-base dark:text-foreground/70">
            Most teams juggle a formatter, a schema tool, a diff viewer, and an
            ad-supported paste site. BracketView consolidates those workflows in
            one privacy-first workspace — free for core use, Pro when AI repair,
            large uploads, and webhook volume become the bottleneck.
          </p>
        </section>

        <section
          aria-labelledby="pricing-security-heading"
          className="mt-16"
        >
          <h2
            id="pricing-security-heading"
            className="text-2xl font-bold sm:text-3xl"
          >
            Security &amp; privacy
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Client-side format, validate, view, and query",
              "No sale of customer JSON payloads",
              "Encrypted snapshot links with TTL",
              "Webhook captures with short retention",
              "OAuth login via Google / GitHub",
              "Enterprise SSO on the roadmap",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white p-4 dark:bg-muted"
              >
                <Check
                  size={16}
                  className="mt-0.5 shrink-0 text-emerald-600"
                  aria-hidden
                />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="pricing-faq-heading" className="mt-16">
          <h2 id="pricing-faq-heading" className="text-2xl font-bold sm:text-3xl">
            Pricing FAQ
          </h2>
          <div className="mt-8 space-y-4">
            {pricingFaqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-4xl bg-white p-6 sm:p-8 dark:bg-muted"
              >
                <h3 className="text-base font-bold sm:text-lg">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/75 dark:text-foreground/75">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <StickyCtaBar />
    </main>
  );
};

export default PricingPage;
