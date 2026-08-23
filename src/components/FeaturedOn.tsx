import { featuredOnLinks } from "@/app/data/constant";
import LaunchKiwiBadge from "@/components/LaunchKiwiBadge";
import Reveal from "@/components/motion/Reveal";
import Image from "next/image";

const FeaturedOn = () => {
  return (
    <section
      id="featured-on"
      aria-label="Featured On"
      className="relative w-full px-4 pb-8 pt-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col items-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/45 dark:text-foreground/45">
            Featured On
          </p>

          <ul className="mt-6 flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:mt-8 sm:gap-x-10 md:gap-x-12">
            <li>
              <LaunchKiwiBadge className="opacity-90 transition-opacity hover:opacity-100" />
            </li>
            {featuredOnLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center opacity-70 transition-opacity hover:opacity-100"
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={item.imageWidth}
                    height={item.imageHeight}
                    sizes="(max-width: 640px) 120px, 160px"
                    loading="lazy"
                    decoding="async"
                    className="h-8 w-auto max-w-35 object-contain sm:h-10 sm:max-w-40"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default FeaturedOn;
