import type { LegalDocument as LegalDocumentType } from "@/app/data/legal";
import { supportEmail } from "@/app/data/legal";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const LegalDocument = ({
    title,
    intro,
    sections,
    contactLine,
    lastUpdated = "2026-06-10",
}: LegalDocumentType) => {
    return (
        <main className="w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <Link
                    href="/"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-black/70 transition-opacity hover:opacity-100 dark:text-foreground/70"
                >
                    <ArrowLeft size={16} aria-hidden />
                    Back to home
                </Link>

                <article className="rounded-4xl bg-white p-8 sm:p-12 dark:bg-muted">
                    <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl dark:text-foreground">
                        {title}
                    </h1>

                    <p className="mt-6 text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75">
                        {intro}
                    </p>

                    <p className="mt-4 text-sm text-black/60 dark:text-foreground/60">
                        <time dateTime={lastUpdated} itemProp="dateModified">
                            Updated{" "}
                            {new Date(lastUpdated).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </time>
                    </p>

                    <div className="mt-10 space-y-10">
                        {sections.map((section) => (
                            <section key={section.title}>
                                <h2 className="text-xl font-bold text-black dark:text-foreground">
                                    {section.title}
                                </h2>
                                <div className="mt-3 space-y-3">
                                    {section.paragraphs.map((paragraph) => (
                                        <p
                                            key={paragraph}
                                            className="text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    <section className="mt-10 border-t border-black/10 pt-8 dark:border-foreground/10">
                        <h2 className="text-xl font-bold text-black dark:text-foreground">
                            Contact
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75">
                            {contactLine}{" "}
                            <a
                                href={`mailto:${supportEmail}`}
                                className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                            >
                                {supportEmail}
                            </a>
                            .
                        </p>
                    </section>
                </article>
            </div>
        </main>
    );
};

export default LegalDocument;
