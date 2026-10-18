const DANG_AI_URL = "https://dang.ai";

type DangAiBadgeProps = {
    className?: string;
    tabIndex?: number;
};

const DangAiBadge = ({ className = "", tabIndex }: DangAiBadgeProps) => {
    return (
        <a
            href={DANG_AI_URL}
            target="_blank"
            rel="dofollow noopener"
            tabIndex={tabIndex}
            className={`inline-flex min-h-11 items-center ${className}`}
        >
            <img
                src="https://assets.dang.ai/badges/dang-verified-dark.png"
                alt="Verified on DANG!"
                width={260}
                height={94}
                className="h-10 w-auto"
            />
        </a>
    );
};

export { DANG_AI_URL };
export default DangAiBadge;
