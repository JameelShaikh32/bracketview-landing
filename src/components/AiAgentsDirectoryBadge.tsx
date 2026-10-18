const AI_AGENTS_DIRECTORY_URL =
    "https://aiagentsdirectory.com/agent/bracketview";

type AiAgentsDirectoryBadgeProps = {
    className?: string;
    tabIndex?: number;
};

const AiAgentsDirectoryBadge = ({
    className = "",
    tabIndex,
}: AiAgentsDirectoryBadgeProps) => {
    return (
        <a
            href={AI_AGENTS_DIRECTORY_URL}
            target="_blank"
            rel="noopener"
            title="Discover BracketView on AI Agents Directory"
            tabIndex={tabIndex}
            className={`inline-flex min-h-11 items-center ${className}`}
        >
            <img
                src="https://aiagentsdirectory.com/featured-badge.svg?v=2024"
                alt="BracketView - Featured on AI Agents Directory"
                width={200}
                height={50}
                className="h-10 w-auto"
            />
        </a>
    );
};

export { AI_AGENTS_DIRECTORY_URL };
export default AiAgentsDirectoryBadge;
