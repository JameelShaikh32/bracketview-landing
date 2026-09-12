import { FaLinux, FaWindows } from "react-icons/fa6";

type OsBrandIconProps = {
    os: "windows" | "linux";
    size?: number;
    className?: string;
};

const OsBrandIcon = ({ os, size = 18, className = "" }: OsBrandIconProps) => {
    const Icon = os === "windows" ? FaWindows : FaLinux;

    return (
        <span
            aria-hidden
            className={`inline-flex shrink-0 items-center justify-center ${className}`}
        >
            <Icon size={size} />
        </span>
    );
};

export default OsBrandIcon;
