import type { FeaturePageItem } from "@/app/data/featuresPage";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const FeatureCard = ({ icon: Icon, title, description, href }: FeaturePageItem) => {
    return (
        <article className="group flex min-h-64 flex-col rounded-4xl bg-white p-6 text-black transition-colors duration-300 hover:bg-accent sm:min-h-72 sm:p-8 dark:bg-muted dark:text-foreground dark:hover:bg-accent-dark dark:hover:text-white">
            <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-gray text-black transition-colors duration-300 group-hover:bg-white sm:mb-8 sm:size-14 dark:bg-background dark:text-foreground dark:group-hover:bg-white dark:group-hover:text-black">
                <Icon size={22} strokeWidth={1.75} aria-hidden />
            </div>

            <h3 className="text-xl font-bold leading-snug sm:text-2xl">{title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed opacity-80">
                {description}
            </p>

            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-2xl bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 group-hover:bg-black dark:bg-accent-dark dark:group-hover:bg-foreground dark:group-hover:text-background sm:mt-12"
            >
                Try in app
                <ArrowUpRight size={16} aria-hidden />
            </Link>
        </article>
    );
};

export default FeatureCard;
