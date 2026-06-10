import { socialLinks } from "@/app/data/constant";
import { supportEmail } from "@/app/data/legal";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/motion/PageHeader";
import Reveal from "@/components/motion/Reveal";
import StaggerGroup from "@/components/motion/StaggerGroup";
import { ArrowUpRight, Clock3, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
    return (
        <main className="w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <PageHeader
                    badge="Contact"
                    title="Get in touch with BracketView"
                    description="Have a question about your account, billing, privacy, or the product? Send us a message and we will get back to you within 1–2 business days."
                />

                <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                    <Reveal variant="fadeLeft">
                        <ContactForm />
                    </Reveal>

                    <StaggerGroup className="flex flex-col gap-5">
                        <div className="rounded-4xl bg-white p-6 sm:p-8 dark:bg-muted">
                            <div className="flex size-12 items-center justify-center rounded-2xl bg-gray dark:bg-background">
                                <Mail size={22} strokeWidth={1.75} aria-hidden />
                            </div>

                            <h2 className="mt-6 text-xl font-bold text-black dark:text-foreground">
                                Direct email
                            </h2>
                            <p className="mt-2 text-sm leading-relaxed text-black/75 dark:text-foreground/75">
                                You can also reach us directly for urgent requests.
                            </p>
                            <a
                                href={`mailto:${supportEmail}`}
                                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent transition-opacity hover:opacity-80 dark:text-accent-dark"
                            >
                                {supportEmail}
                                <ArrowUpRight size={16} aria-hidden />
                            </a>
                        </div>

                        <div className="rounded-4xl bg-white p-6 sm:p-8 dark:bg-muted">
                            <div className="flex size-12 items-center justify-center rounded-2xl bg-gray dark:bg-background">
                                <Clock3 size={22} strokeWidth={1.75} aria-hidden />
                            </div>

                            <h2 className="mt-6 text-xl font-bold text-black dark:text-foreground">
                                Response time
                            </h2>
                            <p className="mt-2 text-sm leading-relaxed text-black/75 dark:text-foreground/75">
                                Include your account email, screenshots, and any error
                                messages so we can help you faster.
                            </p>
                        </div>

                        <div className="rounded-4xl bg-white p-6 sm:p-8 dark:bg-muted">
                            <div className="flex size-12 items-center justify-center rounded-2xl bg-gray dark:bg-background">
                                <MessageCircle
                                    size={22}
                                    strokeWidth={1.75}
                                    aria-hidden
                                />
                            </div>

                            <h2 className="mt-6 text-xl font-bold text-black dark:text-foreground">
                                Follow us
                            </h2>

                            <ul className="mt-5 flex flex-wrap gap-3">
                                {socialLinks.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-2xl border border-black/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white dark:border-foreground/15 dark:hover:bg-foreground dark:hover:text-background"
                                        >
                                            {link.label}
                                            <ArrowUpRight size={14} aria-hidden />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </StaggerGroup>
                </div>
            </div>
        </main>
    );
};

export default Contact;
