import { featuredOnLinks } from "@/app/data/constant";
import { Braces, Users } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const metrics = [
  {
    label: "Active developers",
    value: "1,000+",
    icon: Users,
  },
  {
    label: "JSON documents processed",
    value: "2M+",
    icon: Braces,
  },
  {
    label: "GitHub community",
    value: "Open source friendly",
    icon: FaGithub,
    href: "https://github.com/JameelShaikh32/bracketview-landing",
  },
] as const;

const TrustStrip = () => {
  return (
    <section
      aria-labelledby="trust-strip-heading"
      className="w-full px-4 pb-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2 id="trust-strip-heading" className="sr-only">
          Trusted by developers
        </h2>
        <div className="rounded-4xl bg-white px-6 py-8 sm:px-10 dark:bg-muted">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              const content = (
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-dark dark:text-accent">
                    <Icon size={18} aria-hidden />
                  </span>
                  <div>
                    <p className="text-lg font-bold tracking-tight text-black dark:text-foreground">
                      {metric.value}
                    </p>
                    <p className="text-sm text-black/60 dark:text-foreground/60">
                      {metric.label}
                    </p>
                  </div>
                </div>
              );

              if ("href" in metric && metric.href) {
                return (
                  <Link
                    key={metric.label}
                    href={metric.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-80"
                  >
                    {content}
                  </Link>
                );
              }

              return <div key={metric.label}>{content}</div>;
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 border-t border-black/5 pt-8 dark:border-foreground/10">
            {featuredOnLinks.slice(0, 4).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 transition-opacity hover:opacity-100"
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={item.imageWidth}
                  height={item.imageHeight}
                  className="h-8 w-auto object-contain sm:h-10"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
