import {
    INSTALLERS_SECTION_ID,
    LATEST_RELEASE,
} from "@/app/data/desktop";
import OsBrandIcon from "@/components/downloads/OsBrandIcon";
import Reveal from "@/components/motion/Reveal";
import { Download } from "lucide-react";

const DownloadsInstallers = () => {
    return (
        <Reveal className="mt-16 sm:mt-20">
            <section
                id={INSTALLERS_SECTION_ID}
                aria-labelledby="downloads-installers-heading"
                className="scroll-mt-28 rounded-4xl bg-white p-8 sm:p-12 dark:bg-muted"
            >
                <h2
                    id="downloads-installers-heading"
                    className="text-2xl font-bold leading-snug text-black sm:text-3xl dark:text-foreground"
                >
                    The BracketView desktop app is available for Windows and
                    Linux.
                </h2>

                <div className="mt-10 border-t border-black/8 pt-8 dark:border-foreground/10">
                    <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="text-xl font-bold text-black dark:text-foreground">
                            {LATEST_RELEASE.version}
                        </span>
                        <span className="text-xs font-medium uppercase tracking-[0.14em] text-accent-dark dark:text-accent">
                            {LATEST_RELEASE.label}
                        </span>
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12">
                        {LATEST_RELEASE.platforms.map((platform) => (
                            <div key={platform.id}>
                                <h3 className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-black/50 dark:text-foreground/50">
                                    <OsBrandIcon os={platform.id} size={16} />
                                    {platform.heading}
                                </h3>
                                <ul className="mt-4 space-y-3">
                                    {platform.installers.map((installer) => (
                                        <li key={installer.href}>
                                            <a
                                                href={installer.href}
                                                className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-black underline-offset-4 hover:underline dark:text-foreground"
                                            >
                                                {installer.label}
                                                <Download
                                                    size={16}
                                                    aria-hidden
                                                />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="mt-10 border-t border-black/8 pt-8 text-sm leading-relaxed text-black/70 dark:border-foreground/10 dark:text-foreground/70">
                    Windows 10 or 11 (x64). SmartScreen may warn because this
                    build is unsigned — choose{" "}
                    <span className="font-medium text-black dark:text-foreground">
                        More info
                    </span>{" "}
                    then{" "}
                    <span className="font-medium text-black dark:text-foreground">
                        Run anyway
                    </span>
                    . Linux x86_64 needs WebKitGTK 4.1 (Ubuntu 22.04+ / Debian
                    12+).
                </p>
            </section>
        </Reveal>
    );
};

export default DownloadsInstallers;
