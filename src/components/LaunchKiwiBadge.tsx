const LAUNCHKIWI_LISTING_URL = "https://launchkiwi.com/p/bracketview";

type LaunchKiwiBadgeProps = {
    className?: string;
};

const LaunchKiwiBadge = ({ className = "" }: LaunchKiwiBadgeProps) => {
    return (
        <a
            href={LAUNCHKIWI_LISTING_URL}
            target="_blank"
            rel="noopener"
            className={`inline-flex min-h-11 items-center ${className}`}
        >
            <img
                src="https://launchkiwi.com/badge-light.svg"
                alt="Featured on LaunchKiwi"
                width={198}
                height={62}
                className="h-10 w-auto dark:hidden"
            />
            <img
                src="https://launchkiwi.com/badge-dark.svg"
                alt="Featured on LaunchKiwi"
                width={198}
                height={62}
                className="hidden h-10 w-auto dark:inline"
            />
        </a>
    );
};

export { LAUNCHKIWI_LISTING_URL };
export default LaunchKiwiBadge;
