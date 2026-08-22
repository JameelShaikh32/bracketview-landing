"use client";

import type { PricingPlan } from "@/app/data/constant";
import { pricingPlans } from "@/app/data/constant";
import Reveal from "@/components/motion/Reveal";
import StaggerGroup from "@/components/motion/StaggerGroup";
import { springTransition } from "@/components/motion/variants";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const PricingCard = ({
  name,
  price,
  period,
  originalPrice,
  displayPrice,
  billingNote,
  saveTag,
  description,
  features,
  cta,
  ctaHref,
  highlighted = false,
  offerSchema,
}: PricingPlan) => {
  return (
    <motion.article
      itemScope
      itemType="https://schema.org/Offer"
      whileHover={{ y: -4, scale: highlighted ? 1.02 : 1 }}
      transition={springTransition}
      className={`group flex h-full w-full flex-col rounded-4xl p-6 sm:p-8 ${highlighted
          ? "bg-accent text-black dark:bg-accent-dark dark:text-white"
          : "bg-white text-black transition-colors duration-300 hover:bg-accent dark:bg-muted dark:text-foreground dark:hover:bg-accent-dark dark:hover:text-white"
        }`}
    >
      {offerSchema ? (
        <>
          <meta itemProp="price" content={offerSchema.price} />
          <meta itemProp="priceCurrency" content={offerSchema.priceCurrency} />
        </>
      ) : null}
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-2xl font-bold" itemProp="name">
          {name}
        </h3>
        {saveTag && (
          <span className="rounded-lg bg-emerald-100 px-2.5 py-1 text-xs font-bold tracking-wide text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
            {saveTag}
          </span>
        )}
      </div>

      {originalPrice && displayPrice ? (
        <div className="mt-6">
          <div className="flex flex-wrap items-baseline gap-3">
            <span className="text-4xl font-bold tracking-tight line-through decoration-2 sm:text-5xl">
              {originalPrice}
            </span>
            <span className="text-lg font-medium opacity-80 sm:text-xl">
              {displayPrice}
            </span>
          </div>
          {billingNote && (
            <p className="mt-2 text-sm leading-relaxed opacity-70">
              {billingNote}
            </p>
          )}
        </div>
      ) : (
        <div className="mt-6 flex items-end gap-2">
          <span className="text-4xl font-bold tracking-tight sm:text-5xl">
            {price}
          </span>
          <span className="mb-1.5 text-sm opacity-75">{period}</span>
        </div>
      )}

      <p className="mt-4 text-sm leading-relaxed opacity-80">{description}</p>

      <Link
        href={ctaHref}
        {...(ctaHref.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-colors duration-300 ${highlighted
            ? "bg-black text-white hover:opacity-90 dark:bg-foreground dark:text-background"
            : "bg-accent text-white group-hover:bg-black dark:bg-accent-dark dark:group-hover:bg-foreground dark:group-hover:text-background"
          }`}
      >
        {cta}
        <ArrowUpRight size={16} aria-hidden />
      </Link>

      <ul className="mt-8 flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <span
              className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${highlighted
                  ? "bg-black text-white dark:bg-accent"
                  : "bg-emerald-500 text-white transition-all duration-300 group-hover:bg-black dark:bg-emerald-700"
                }`}
            >
              <Check size={12} strokeWidth={3} aria-hidden />
            </span>
            <span className="leading-relaxed opacity-90">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

const Pricing = () => {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="relative w-full px-4 pb-24 pt-16 sm:px-6 lg:px-8 lg:pb-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="rounded-full border border-black px-5 py-1.5 text-sm font-medium text-black dark:border-foreground dark:text-foreground">
            Pricing
          </span>

          <h2 className="mt-8 max-w-3xl text-3xl font-bold leading-normal tracking-tight text-black sm:mt-10 sm:text-4xl md:text-[2.75rem] dark:text-foreground">
            Start free, upgrade when you need more
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-black/75 sm:mt-8 sm:text-base dark:text-foreground/70">
            Core JSON tools stay free forever. Pro raises limits on AI, uploads,
            encrypted snapshots, and Webhook Tester retention — plus Performance
            Mode for large JSON files.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 items-stretch gap-4 sm:mt-16 md:grid-cols-3 lg:gap-5">
          {pricingPlans
            .filter((plan) =>
              ["Free", "Monthly", "Yearly"].includes(plan.name),
            )
            .map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
        </StaggerGroup>

        <Reveal className="mx-auto mt-8 text-center">
          <Link
            href="/pricing"
            className="text-sm font-medium text-accent-dark underline-offset-4 hover:underline dark:text-accent"
          >
            Compare Free and Pro →
          </Link>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-xs leading-relaxed text-black/55 dark:text-foreground/50">
            Payments are processed with Razorpay. Pro includes a fair use policy
            for unlimited AI — normal personal or team usage is always welcome.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Pricing;
