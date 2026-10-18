import Image from "next/image";
import Link from "next/link";

const TOOLTRIM_URL =
    "https://tooltrim.com/?utm_source=bracketview&utm_medium=badge&utm_campaign=tool_submission";

type ToolTrimBadgeProps = {
    className?: string;
    tabIndex?: number;
};

const ToolTrimBadge = ({ className = "", tabIndex }: ToolTrimBadgeProps) => {
    return (
        <Link
            href={TOOLTRIM_URL}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={tabIndex}
            className={`inline-flex min-h-11 items-center ${className}`}
        >
            <Image
                src="https://tooltrim.com/tooltrim-badge.svg"
                alt="Discover ToolTrim via BracketView"
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
                className="h-10 w-auto object-contain dark:hidden"
            />
            <Image
                src="https://tooltrim.com/tooltrim-badge-dark.svg"
                alt="Discover ToolTrim via BracketView"
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
                className="hidden h-10 w-auto object-contain dark:inline"
            />
        </Link>
    );
};

export { TOOLTRIM_URL };
export default ToolTrimBadge;
