import Reveal from "@/components/motion/Reveal";
import StaggerGroup from "@/components/motion/StaggerGroup";
import Link from "next/link";

const benefits = [
  {
    title: "Interactive tree view",
    description:
      "Expand nested objects and arrays, copy paths, and inspect types without drowning in minified text.",
  },
  {
    title: "Format and validate",
    description:
      "Beautify or minify JSON and catch syntax errors with line and column feedback as you type.",
  },
  {
    title: "Search nested data",
    description:
      "Find keys and values inside large documents, then jump to the matching node.",
  },
  {
    title: "Handle large payloads",
    description:
      "Worker-based parsing and virtualized tree rendering keep the editor responsive on heavy files.",
  },
  {
    title: "Compare JSON documents",
    description:
      "Diff two payloads side by side to spot structural and value changes in API responses.",
  },
  {
    title: "Browser-first privacy",
    description:
      "Core tools stay local. Optional AI, snapshots, and webhooks are explicit choices — not silent uploads.",
  },
] as const;

const CoreBenefits = () => {
  return (
    <section
      id="benefits"
      aria-labelledby="benefits-heading"
      className="relative w-full px-4 pb-16 pt-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="rounded-full border border-black px-5 py-1.5 text-sm font-medium text-black dark:border-foreground dark:text-foreground">
            Core benefits
          </span>
          <h2
            id="benefits-heading"
            className="mt-8 max-w-3xl text-3xl font-bold leading-normal tracking-tight text-black sm:mt-10 sm:text-4xl dark:text-foreground"
          >
            View, format, validate, query, and compare JSON
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/70">
            A clean browser-based workspace built for API debugging, configs, and
            nested payloads — without making AI the product.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-4xl bg-white p-6 sm:p-8 dark:bg-muted"
            >
              <h3 className="text-xl font-bold">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/70 dark:text-foreground/70">
                {benefit.description}
              </p>
            </article>
          ))}
        </StaggerGroup>

        <p className="mt-10 text-center text-sm text-black/60 dark:text-foreground/60">
          Need a specific tool?{" "}
          <Link
            href="/json-viewer"
            className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
          >
            JSON viewer
          </Link>
          ,{" "}
          <Link
            href="/json-formatter"
            className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
          >
            formatter
          </Link>
          ,{" "}
          <Link
            href="/json-validator"
            className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
          >
            validator
          </Link>
          , or{" "}
          <Link
            href="/json-diff"
            className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
          >
            JSON diff
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default CoreBenefits;
