"use client";

import { Maximize2, Pause, Play, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
    useCallback,
    useEffect,
    useId,
    useRef,
    useState,
    useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";

type ToolDemoVideoProps = {
    src?: string;
    poster?: string;
    label?: string;
};

const iosSpring = {
    type: "spring" as const,
    stiffness: 260,
    damping: 28,
    mass: 0.85,
};

const iosLayoutTransition = {
    layout: iosSpring,
};

const mobileMediaQuery = "(max-width: 767px)";

const emptySubscribe = () => () => {};

const useIsClient = () =>
    useSyncExternalStore(emptySubscribe, () => true, () => false);

const useIsMobileViewport = () =>
    useSyncExternalStore(
        (onStoreChange) => {
            const mediaQuery = window.matchMedia(mobileMediaQuery);
            mediaQuery.addEventListener("change", onStoreChange);
            return () => mediaQuery.removeEventListener("change", onStoreChange);
        },
        () => window.matchMedia(mobileMediaQuery).matches,
        () => false,
    );

const ToolDemoVideo = ({ src, poster, label = "Tool demo" }: ToolDemoVideoProps) => {
    const layoutId = useId();
    const videoRef = useRef<HTMLVideoElement>(null);
    const expandedVideoRef = useRef<HTMLVideoElement>(null);
    const [hasError, setHasError] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const mounted = useIsClient();
    const isMobile = useIsMobileViewport();
    const reducedMotion = useReducedMotion();

    const layoutTransition = reducedMotion
        ? { layout: { duration: 0.15 } }
        : iosLayoutTransition;

    const backdropTransition = reducedMotion
        ? { duration: 0.15 }
        : { duration: 0.32, ease: [0.22, 1, 0.36, 1] as const };

    useEffect(() => {
        const mediaQuery = window.matchMedia(mobileMediaQuery);

        const handleViewportChange = () => {
            if (mediaQuery.matches) return;

            setIsPlaying(false);
            const video = videoRef.current;
            if (!video) return;
            video.pause();
            video.currentTime = 0;
        };

        mediaQuery.addEventListener("change", handleViewportChange);

        return () =>
            mediaQuery.removeEventListener("change", handleViewportChange);
    }, []);

    const pauseInlineVideo = useCallback(() => {
        const video = videoRef.current;
        if (!video) return;
        video.pause();
        video.currentTime = 0;
        setIsHovered(false);
        setIsPlaying(false);
    }, []);

    const handleMouseEnter = () => {
        if (isExpanded || isMobile) return;
        setIsHovered(true);
        const video = videoRef.current;
        if (!video) return;
        void video.play();
    };

    const handleMouseLeave = () => {
        if (isExpanded || isMobile) return;
        setIsHovered(false);
        const video = videoRef.current;
        if (!video) return;
        video.pause();
        video.currentTime = 0;
    };

    const handleMobilePlay = () => {
        if (!isMobile || isExpanded || isPlaying) return;
        const video = videoRef.current;
        if (!video) return;
        void video.play();
    };

    const handleMobilePause = (event: React.MouseEvent) => {
        event.stopPropagation();
        const video = videoRef.current;
        if (!video) return;
        video.pause();
    };

    const handleInlineVideoPlay = () => {
        if (isMobile) setIsPlaying(true);
    };

    const handleInlineVideoPause = () => {
        if (isMobile) setIsPlaying(false);
    };

    const showOverlay = isMobile ? !isPlaying : !isHovered;

    const handleExpand = (event: React.MouseEvent) => {
        event.stopPropagation();
        pauseInlineVideo();
        setIsExpanded(true);
    };

    const handleCloseExpanded = useCallback(() => {
        const video = expandedVideoRef.current;
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
        setIsExpanded(false);
    }, []);

    const handleExpandedAnimationComplete = () => {
        if (!isExpanded) return;
        const video = expandedVideoRef.current;
        if (video) void video.play();
    };

    useEffect(() => {
        if (!isExpanded) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") handleCloseExpanded();
        };

        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isExpanded, handleCloseExpanded]);

    const showPlaceholder = !src || hasError;

    const expandedModal =
        mounted && !showPlaceholder
            ? createPortal(
                <AnimatePresence>
                    {isExpanded ? (
                        <>
                            <motion.button
                                key="backdrop"
                                type="button"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={backdropTransition}
                                className="fixed inset-0 z-50 cursor-default bg-black/70 backdrop-blur-md"
                                aria-label="Close expanded video"
                                onClick={handleCloseExpanded}
                            />

                            <motion.div
                                key="expanded-video"
                                layoutId={layoutId}
                                layout
                                transition={layoutTransition}
                                onLayoutAnimationComplete={
                                    handleExpandedAnimationComplete
                                }
                                className="fixed inset-x-4 top-1/2 z-51 mx-auto w-full max-w-6xl -translate-y-1/2 overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl"
                                style={{ borderRadius: 16 }}
                                onClick={(event) => event.stopPropagation()}
                            >
                                <video
                                    ref={expandedVideoRef}
                                    muted
                                    playsInline
                                    loop
                                    controls={isMobile}
                                    poster={poster}
                                    className="block h-auto max-h-[85vh] w-full object-contain"
                                >
                                    <source src={src} type="video/webm" />
                                    <source
                                        src={src!.replace(/\.webm$/, ".mp4")}
                                        type="video/mp4"
                                    />
                                </video>
                            </motion.div>

                            <motion.button
                                key="close"
                                type="button"
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.85 }}
                                transition={
                                    reducedMotion
                                        ? { duration: 0.1 }
                                        : {
                                            ...iosSpring,
                                            delay: 0.12,
                                        }
                                }
                                onClick={handleCloseExpanded}
                                className="fixed right-4 top-4 z-52 flex size-10 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-md transition-colors hover:bg-white/22 sm:right-6 sm:top-6"
                                aria-label="Close expanded video"
                            >
                                <X size={20} aria-hidden />
                            </motion.button>
                        </>
                    ) : null}
                </AnimatePresence>,
                document.body,
            )
            : null;

    if (showPlaceholder) {
        return (
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-black/10 bg-gray dark:border-foreground/10 dark:bg-background">
                <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-black/50 dark:bg-muted dark:text-foreground/50">
                        <Play size={20} aria-hidden />
                    </span>
                    <p className="text-xs leading-relaxed text-black/50 sm:text-sm dark:text-foreground/50">
                        {src
                            ? "Demo video unavailable"
                            : `Add demo video for ${label}`}
                    </p>
                    {src ? (
                        <p className="font-mono text-[10px] text-black/40 dark:text-foreground/40">
                            {src}
                        </p>
                    ) : null}
                </div>
            </div>
        );
    }

    return (
        <>
            {!isExpanded ? (
                <motion.div
                    layoutId={layoutId}
                    layout
                    transition={layoutTransition}
                    className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-black/10 bg-black dark:border-foreground/10"
                    style={{ borderRadius: 16 }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <video
                        ref={videoRef}
                        muted
                        playsInline
                        loop
                        preload="metadata"
                        poster={poster}
                        aria-label={`${label} demo preview`}
                        onError={() => setHasError(true)}
                        onPlay={handleInlineVideoPlay}
                        onPause={handleInlineVideoPause}
                        className="h-full w-full object-contain"
                    >
                        <source src={src} type="video/webm" />
                        <source
                            src={src.replace(/\.webm$/, ".mp4")}
                            type="video/mp4"
                        />
                    </video>

                    <button
                        type="button"
                        onClick={handleMobilePlay}
                        className={`absolute inset-0 z-1 flex flex-col items-center justify-center gap-2 bg-black/45 transition-opacity duration-300 max-md:cursor-pointer md:pointer-events-none ${showOverlay
                                ? "opacity-100"
                                : "pointer-events-none opacity-0"
                            }`}
                        aria-label={`Play ${label} demo`}
                        aria-hidden={!showOverlay}
                    >
                        <span className="flex size-11 items-center justify-center rounded-full bg-white/90 text-black">
                            <Play size={18} fill="currentColor" aria-hidden />
                        </span>
                        <p className="text-sm font-medium text-white md:hidden">
                            Click to play
                        </p>
                        <p className="hidden text-sm font-medium text-white md:block">
                            Hover to play
                        </p>
                    </button>

                    {isMobile && isPlaying ? (
                        <button
                            type="button"
                            onClick={handleMobilePause}
                            className="absolute bottom-3 left-3 z-10 flex size-9 items-center justify-center rounded-xl bg-black/55 text-white backdrop-blur-sm transition-colors active:bg-black/75 md:hidden"
                            aria-label={`Pause ${label} demo`}
                        >
                            <Pause size={16} fill="currentColor" aria-hidden />
                        </button>
                    ) : null}

                    <button
                        type="button"
                        onClick={handleExpand}
                        className="absolute bottom-3 right-3 z-10 flex size-9 items-center justify-center rounded-xl bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/75 dark:bg-black/65 dark:hover:bg-black/85"
                        aria-label="Expand video"
                    >
                        <Maximize2 size={16} aria-hidden />
                    </button>
                </motion.div>
            ) : null}

            {expandedModal}
        </>
    );
};

export default ToolDemoVideo;
