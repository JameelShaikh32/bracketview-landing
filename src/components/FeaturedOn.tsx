import { featuredOnLinks } from "@/app/data/constant";
import AiAgentsDirectoryBadge from "@/components/AiAgentsDirectoryBadge";
import DangAiBadge from "@/components/DangAiBadge";
import LaunchKiwiBadge from "@/components/LaunchKiwiBadge";
import ToolTrimBadge from "@/components/ToolTrimBadge";
import Reveal from "@/components/motion/Reveal";
import Image from "next/image";

const badgeClassName =
  "opacity-80 transition-opacity hover:opacity-100";

const imageClassName =
  "h-8 w-auto max-w-35 object-contain sm:h-10 sm:max-w-40";

const FeaturedBadgeList = ({ ariaHidden = false }: { ariaHidden?: boolean }) => {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-x-10 px-5 sm:gap-x-12 sm:px-6 md:gap-x-14"
    >
      <li>
        <LaunchKiwiBadge
          className={badgeClassName}
          tabIndex={ariaHidden ? -1 : undefined}
        />
      </li>
      <li>
        <ToolTrimBadge
          className={badgeClassName}
          tabIndex={ariaHidden ? -1 : undefined}
        />
      </li>
      <li>
        <AiAgentsDirectoryBadge
          className={badgeClassName}
          tabIndex={ariaHidden ? -1 : undefined}
        />
      </li>
      <li>
        <DangAiBadge
          className={badgeClassName}
          tabIndex={ariaHidden ? -1 : undefined}
        />
      </li>
      {featuredOnLinks.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={ariaHidden ? -1 : undefined}
            aria-label={item.label}
            className={`inline-flex min-h-11 min-w-11 items-center justify-center ${badgeClassName}`}
          >
            {"imageSrc" in item && item.imageSrc ? (
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                width={item.imageWidth}
                height={item.imageHeight}
                sizes="(max-width: 640px) 120px, 160px"
                loading="lazy"
                decoding="async"
                className={imageClassName}
              />
            ) : (
              <>
                <Image
                  src={item.imgLightSrc!}
                  alt={item.imageAlt}
                  width={item.imageWidth}
                  height={item.imageHeight}
                  sizes="(max-width: 640px) 120px, 160px"
                  loading="lazy"
                  decoding="async"
                  className={`${imageClassName} dark:hidden`}
                />
                <Image
                  src={item.imgDarkSrc!}
                  alt={item.imageAlt}
                  width={item.imageWidth}
                  height={item.imageHeight}
                  sizes="(max-width: 640px) 120px, 160px"
                  loading="lazy"
                  decoding="async"
                  className={`hidden ${imageClassName} dark:inline`}
                />
              </>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

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

          <div className="featured-marquee group/marquee relative mt-6 w-full overflow-hidden sm:mt-8 mask-[linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="featured-marquee-track flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused]">
              <FeaturedBadgeList />
              <FeaturedBadgeList ariaHidden />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FeaturedOn;
