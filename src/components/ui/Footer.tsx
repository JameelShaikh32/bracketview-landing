import { footerLinks, socialLinks } from "@/app/data/constant";
import { supportEmail } from "@/app/data/legal";
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

type FooterLink = { label: string; href: string; rel?: string };

const FooterLinkItem = ({ link }: { link: FooterLink }) => (
  <li>
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
);

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) => (
  <div>
    <h3 className="text-sm font-bold text-black dark:text-foreground">
      {title}
    </h3>
    <ul className="mt-2">
      {links.map((link) => (
        <FooterLinkItem key={link.label} link={link} />
      ))}
    </ul>
  </div>
);

const CORE_TOOL_HREFS = new Set([
  "/json-viewer",
  "/json-formatter",
  "/json-validator",
  "/json-diff",
  "/jsonpath-query",
  "/jq-playground",
]);

const ToolsColumns = ({ links }: { links: FooterLink[] }) => {
  const coreTools = links.filter((link) => CORE_TOOL_HREFS.has(link.href));
  const advancedTools = links.filter((link) => !CORE_TOOL_HREFS.has(link.href));

  return (
    <div className="grid grid-cols-2 gap-x-6 sm:col-span-2 lg:col-span-2">
      <FooterColumn title="Core Tools" links={coreTools} />
      <FooterColumn title="Advanced Tools" links={advancedTools} />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="mt-auto w-full px-4 pb-8 pt-8 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-4xl bg-white p-8 sm:p-10 lg:p-12 dark:bg-muted">
        <p
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-16 z-0 hidden select-none text-center font-sans text-[clamp(4.25rem,22vw,11rem)] font-bold italic leading-none tracking-tight text-black/5.5 sm:bottom-12 md:block dark:text-foreground/7.5"
        >
          BRACKETVIEW
        </p>

        <div className="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-7 lg:gap-8">
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
          <ToolsColumns links={footerLinks.tools} />
          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>

        <div className="relative z-10 mt-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
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
