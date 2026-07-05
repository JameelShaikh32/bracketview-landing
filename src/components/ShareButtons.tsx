"use client";

import { Link2 } from "lucide-react";
import { useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";

type ShareButtonsProps = {
    url: string;
    title: string;
};

type ShareLink = {
    label: string;
    icon: typeof FaXTwitter;
    className: string;
    href?: string;
    copyUrl?: boolean;
};

const shareLinks = (
    encodedUrl: string,
    encodedTitle: string,
): ShareLink[] => [
    {
        label: "Share on X",
        icon: FaXTwitter,
        href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
        className:
            "bg-black text-white hover:bg-black/85 dark:bg-black dark:hover:bg-black/85",
    },
    {
        label: "Share on LinkedIn",
        icon: FaLinkedinIn,
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        className:
            "bg-[#0077B5] text-white hover:bg-[#006399] dark:bg-[#0077B5] dark:hover:bg-[#006399]",
    },
    {
        label: "Share on Facebook",
        icon: FaFacebookF,
        href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        className:
            "bg-[#1877F2] text-white hover:bg-[#1464d0] dark:bg-[#1877F2] dark:hover:bg-[#1464d0]",
    },
    {
        label: "Copy link to share on Instagram",
        icon: FaInstagram,
        copyUrl: true,
        className:
            "bg-[#E4405F] text-white hover:bg-[#d63252] dark:bg-[#E4405F] dark:hover:bg-[#d63252]",
    },
];

const ShareButtons = ({ url, title }: ShareButtonsProps) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const links = shareLinks(encodedUrl, encodedTitle);
    const [copied, setCopied] = useState(false);

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            window.prompt("Copy this link:", url);
        }
    };

    const buttonClassName = (className: string) =>
        `inline-flex size-11 cursor-pointer items-center justify-center rounded-xl transition-colors ${className}`;

    return (
        <div
            className="mt-8 flex flex-wrap items-center gap-3 border-t border-black/10 pt-8 dark:border-foreground/10"
            aria-label="Share this article"
        >
            <span className="text-sm font-medium text-black/70 dark:text-foreground/70">
                Share this article:
            </span>
            {links.map((link) => {
                const Icon = link.icon;

                if (link.copyUrl) {
                    return (
                        <button
                            key={link.label}
                            type="button"
                            onClick={copyLink}
                            aria-label={link.label}
                            title={copied ? "Link copied!" : link.label}
                            className={buttonClassName(link.className)}
                        >
                            <Icon size={16} aria-hidden />
                        </button>
                    );
                }

                return (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className={buttonClassName(link.className)}
                    >
                        <Icon size={16} aria-hidden />
                    </a>
                );
            })}
            <button
                type="button"
                onClick={copyLink}
                aria-label="Copy link"
                title={copied ? "Link copied!" : "Copy link to share anywhere"}
                className={buttonClassName(
                    "border border-black/15 bg-white text-black hover:bg-black/5 dark:border-foreground/20 dark:bg-muted dark:text-foreground dark:hover:bg-foreground/10",
                )}
            >
                <Link2 size={16} aria-hidden />
            </button>
            <span
                role="status"
                aria-live="polite"
                className={`text-xs text-black/60 dark:text-foreground/60 ${copied ? "visible" : "sr-only"}`}
            >
                Link copied to clipboard.
            </span>
        </div>
    );
};

export default ShareButtons;
