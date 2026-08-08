import { footerLinks, socialLinks } from "@/app/data/constant";
import { supportEmail } from "@/app/data/legal";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaMedium,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const socialIcons = {
  LinkedIn: FaLinkedinIn,
  Twitter: FaXTwitter,
  Facebook: FaFacebook,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  Medium: FaMedium,
} as const;

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; rel?: string }[];
}) => (
  <div>
    <h3 className="text-sm font-bold text-black dark:text-foreground">
      {title}
    </h3>
    <ul className="mt-2">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.rel ||
              (link.href.startsWith("http") ? "noopener noreferrer" : undefined)
            }
            className="inline-flex min-h-11 items-center py-2 text-sm text-black/65 transition-opacity hover:opacity-100 dark:text-foreground/65"
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
              <Image
                src="/logo.webp"
                alt="BracketView logo"
                width={32}
                height={32}
                sizes="32px"
                loading="eager"
                className="size-8 shrink-0"
              />
              <span className="text-lg font-medium">BracketView</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-black/65 dark:text-foreground/65">
              A fast online JSON viewer, formatter, validator, and query tool
              for modern developers.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon =
                  socialIcons[social.label as keyof typeof socialIcons];

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel={`noopener noreferrer ${social.rel || ""}`}
                    aria-label={social.label}
                    className="flex size-11 items-center justify-center rounded-xl bg-gray text-black transition-colors duration-300 hover:bg-accent hover:text-white dark:bg-background dark:text-foreground dark:hover:bg-accent-dark dark:hover:text-white"
                  >
                    <Icon size={18} aria-hidden />
                  </a>
                );
              })}
            </div>
          </div>

          <FooterColumn title="Product" links={footerLinks.product} />
          <FooterColumn title="Tools" links={footerLinks.tools} />
          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-8 sm:flex-row dark:border-foreground/10">
          <p className="text-sm text-black/55 dark:text-foreground/55">
            © {new Date().getFullYear()} BracketView. All rights reserved.
          </p>
          <p className="text-sm text-black/55 dark:text-foreground/55">
            Built for developers who work with JSON every day.{" "}
            <a
              href={`mailto:${supportEmail}`}
              className="underline-offset-2 hover:underline"
            >
              {supportEmail}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
