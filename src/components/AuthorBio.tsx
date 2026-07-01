import {
    founderBioSummary,
    founderName,
    founderTitle,
} from "@/app/data/founder";
import Link from "next/link";

type AuthorBioProps = {
    authorName?: string;
};

const AuthorBio = ({ authorName = founderName }: AuthorBioProps) => {
    return (
        <aside
            itemScope
            itemType="https://schema.org/Person"
            className="mt-12 rounded-4xl bg-white p-6 sm:p-8 dark:bg-muted"
            aria-label="About the author"
        >
            <h2 className="text-lg font-bold">About the author</h2>
            <div className="mt-4">
                <span itemProp="name" className="block text-base font-bold">
                    {authorName}
                </span>
                <span
                    itemProp="jobTitle"
                    className="mt-1 block text-sm text-black/70 dark:text-foreground/70"
                >
                    {founderTitle}
                </span>
                <p
                    itemProp="description"
                    className="mt-3 text-sm leading-relaxed text-black/75 dark:text-foreground/75"
                >
                    {founderBioSummary}
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                    <Link
                        href="/about"
                        className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                    >
                        Why I built BracketView
                    </Link>
                    <a
                        itemProp="sameAs"
                        href="https://www.linkedin.com/in/dev-jameel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                    >
                        LinkedIn
                    </a>
                    <a
                        itemProp="sameAs"
                        href="https://medium.com/@dev-jameel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                    >
                        Medium
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default AuthorBio;
