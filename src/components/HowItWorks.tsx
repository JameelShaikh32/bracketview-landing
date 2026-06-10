"use client";

import { howItWorksSteps } from "@/app/data/constant";
import StepsSection from "@/components/StepsSection";
import Link from "next/link";

const HowItWorks = () => {
    return (
        <StepsSection
            id="how-it-works"
            ariaLabel="How it works"
            badge="How it works"
            title="From raw JSON to insight in three steps"
            description={
                <>
                    Open BracketView, paste your payload, and start{" "}
                    <Link
                        href="/json-formatter"
                        className="font-medium underline-offset-2 hover:underline"
                    >
                        formatting
                    </Link>
                    ,{" "}
                    <Link
                        href="/json-validator"
                        className="font-medium underline-offset-2 hover:underline"
                    >
                        validating
                    </Link>
                    , or{" "}
                    <Link
                        href="/jsonpath-query"
                        className="font-medium underline-offset-2 hover:underline"
                    >
                        querying
                    </Link>{" "}
                    structured data in seconds.
                </>
            }
            steps={howItWorksSteps}
            cta={{
                label: "Open BracketView",
                href: "https://app.bracketview.in",
                external: true,
            }}
            className="px-4 pb-16 pt-16 sm:px-6 lg:px-8"
        />
    );
};

export default HowItWorks;
