import { featuredOnLinks, footerLinks, socialLinks } from "@/app/data/constant";
import Image from "next/image";
import Link from "next/link";
import {
    FaInstagram,
    FaLinkedinIn,
    FaMedium,
    FaXTwitter,
    FaYoutube,
} from "react-icons/fa6";
const socialIcons = {
    LinkedIn: FaLinkedinIn,
    Twitter: FaXTwitter,
    Instagram: FaInstagram,
    YouTube: FaYoutube,
    Medium: FaMedium,
} as const;

const FeaturedOnBadge = ({
    label,
    href,
    imageSrc,
    imageAlt,
    imageWidth,
    imageHeight,
    imageMaxWidth,
}: {
    type: "producthunt" | "saashub";
    label: string;
    href: string;
    imageSrc?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    imageMaxWidth?: number;
}) => {
    if (!imageSrc) return null;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-opacity hover:opacity-85"
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={imageSrc}
                alt={imageAlt ?? label}
                width={imageWidth}
                height={imageHeight}
                loading="lazy"
                style={
                    imageMaxWidth
                        ? { maxWidth: `${imageMaxWidth}px` }
                        : undefined
                }
                className={
                    imageWidth && imageHeight
                        ? "h-[54px] w-[250px] max-w-full"
                        : "max-w-full"
                }
            />
        </a>
    );
};

const FooterColumn = ({
    title,
    links,
}: {
    title: string;
    links: { label: string; href: string }[];
}) => (
    <div>
        <h3 className="text-sm font-bold text-black dark:text-foreground">
            {title}
        </h3>
        <ul className="mt-4 space-y-3">
            {links.map((link) => (
                <li key={link.label}>
                    <Link
                        href={link.href}
                        className="text-sm text-black/65 transition-opacity hover:opacity-100 dark:text-foreground/65"
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
    return (
        <footer className="mt-auto w-full px-4 pb-8 pt-8 sm:px-6 lg:px-8">
            <div className="rounded-4xl bg-white p-8 sm:p-10 lg:p-12 dark:bg-muted">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
                    <div className="lg:col-span-2">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2.5 text-foreground transition-opacity hover:opacity-80"
                        >
                            <Image src="/logo.png" alt="BracketView logo" width={32} height={32} />
                            <span className="text-lg font-medium">BracketView</span>
                        </Link>
                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-black/65 dark:text-foreground/65">
                            A fast online JSON viewer, formatter, validator, and query
                            tool for modern developers.
                        </p>

                        <div className="mt-5 flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const Icon =
                                    socialIcons[
                                    social.label as keyof typeof socialIcons
                                    ];

                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="flex size-10 items-center justify-center rounded-xl bg-gray text-black transition-colors duration-300 hover:bg-accent hover:text-white dark:bg-background dark:text-foreground dark:hover:bg-accent-dark dark:hover:text-white"
                                    >
                                        <Icon size={18} aria-hidden />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <FooterColumn title="Product" links={footerLinks.product} />
                    <FooterColumn title="Company" links={footerLinks.company} />
                    <FooterColumn title="Legal" links={footerLinks.legal} />

                    <div>
                        <h3 className="text-sm font-bold text-black dark:text-foreground">
                            Featured On
                        </h3>
                        <div className="mt-4 flex flex-col gap-3">
                            {featuredOnLinks.map((item) => (
                                <FeaturedOnBadge key={item.label} {...item} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-8 sm:flex-row dark:border-foreground/10">
                    <p className="text-sm text-black/55 dark:text-foreground/55">
                        © {new Date().getFullYear()} BracketView. All rights reserved.
                    </p>
                    <p className="text-sm text-black/55 dark:text-foreground/55">
                        Built for developers who work with JSON every day.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
