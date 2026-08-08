import { testimonials } from "@/app/data/constant";
import Reveal from "@/components/motion/Reveal";
import StaggerGroup from "@/components/motion/StaggerGroup";
import { Quote, Star } from "lucide-react";
import Link from "next/link";

const TestimonialGrid = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="w-full px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2
            id="testimonials-heading"
            className="text-2xl font-bold sm:text-3xl"
          >
            Developers trust BracketView
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base dark:text-foreground/70">
            Verified reviews from{" "}
            <Link
              href="https://www.softwareadvice.com/product/560735-BracketView/#reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent-dark underline-offset-4 hover:underline dark:text-accent"
            >
              Software Advice
            </Link>{" "}
            — 4.8 overall rating.
          </p>
        </Reveal>

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.slice(0, 3).map((item) => (
            <article
              key={item.name}
              className="flex h-full flex-col rounded-4xl bg-white p-6 sm:p-8 dark:bg-muted"
            >
              <div className="flex items-start justify-between gap-3">
                <Quote
                  size={20}
                  className="shrink-0 text-accent dark:text-accent"
                  aria-hidden
                />
                {item.rating ? (
                  <div
                    className="flex items-center gap-0.5"
                    aria-label={`${item.rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        size={14}
                        className={
                          index < item.rating!
                            ? "fill-accent text-accent"
                            : "text-black/15 dark:text-foreground/20"
                        }
                        aria-hidden
                      />
                    ))}
                  </div>
                ) : null}
              </div>
              {item.title ? (
                <h3 className="mt-4 text-sm font-bold text-black dark:text-foreground">
                  {item.title}
                </h3>
              ) : null}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-black/80 dark:text-foreground/80">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-black/5 pt-4 dark:border-foreground/10">
                <p className="text-sm font-bold text-black dark:text-foreground">
                  {item.name}
                </p>
                <p className="text-xs text-black/60 dark:text-foreground/60">
                  {item.role}
                </p>
                {item.source && item.sourceUrl ? (
                  <Link
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs font-medium text-accent-dark underline-offset-2 hover:underline dark:text-accent"
                  >
                    Verified on {item.source}
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};

export default TestimonialGrid;
