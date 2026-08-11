import Reveal from "@/components/motion/Reveal";
import Image from "next/image";
import Link from "next/link";

const WhatIsBracketView = () => {
  return (
    <section
      id="what-is-bracketview"
      aria-label="What is BracketView"
      className="relative w-full px-4 pb-16 pt-8 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="overflow-hidden rounded-4xl bg-white dark:bg-muted">
            <div className="grid grid-cols-1 items-center gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:gap-12 lg:p-14">
              <div>
                <h2 className="text-3xl font-bold leading-normal text-black sm:text-4xl dark:text-foreground">
                  What is BracketView?
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75">
                  BracketView is a free online JSON viewer and workspace for
                  developers. View, format, validate, query, and compare JSON in
                  a clean browser-based workspace — no installation required.
                  Core tools (viewer, formatter, validator, tree, JSONPath, jq,
                  and diff) run in your browser. Optional AI, encrypted
                  snapshots, and Webhook Tester use the server when you choose
                  them.
                </p>
                <Link
                  href="https://app.bracketview.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex min-h-11 items-center text-sm font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                >
                  Open the JSON workspace
                </Link>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-black/8 bg-gray shadow-[0_24px_60px_-28px_rgba(25,19,20,0.35)] dark:border-foreground/10 dark:bg-background dark:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.55)]">
                  <Image
                    src="/images/what-is-bracketview-light.webp"
                    alt="BracketView JSON viewer workspace showing tree and editor"
                    width={1200}
                    height={900}
                    className="h-auto w-full dark:hidden"
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                  <Image
                    src="/images/what-is-bracketview-dark.webp"
                    alt="BracketView JSON viewer workspace showing tree and editor"
                    width={1200}
                    height={900}
                    className="hidden h-auto w-full dark:block"
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WhatIsBracketView;
