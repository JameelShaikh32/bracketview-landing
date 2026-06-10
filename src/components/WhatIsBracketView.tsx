import Reveal from "@/components/motion/Reveal";

const WhatIsBracketView = () => {
    return (
        <section
            id="what-is-bracketview"
            aria-label="What is BracketView"
            className="relative w-full px-4 pb-16 pt-8 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">
                <Reveal>
                    <div className="rounded-4xl bg-white p-8 sm:p-12 dark:bg-muted">
                        <h2 className="text-3xl font-bold text-black sm:text-4xl dark:text-foreground">
                            What is BracketView?
                        </h2>
                        <p className="mt-6 max-w-4xl text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75">
                            BracketView is a free online JSON viewer and workspace
                            for developers. It lets you format, validate, query, and
                            share JSON directly in your browser — no installation
                            required. Core tools including the formatter, validator,
                            tree view, JSONPath query, JQ filters, and JSON diff run
                            100% client-side, meaning your data never leaves your
                            device.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default WhatIsBracketView;
