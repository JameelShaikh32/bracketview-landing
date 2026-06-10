const AuthorBio = () => {
    return (
        <aside
            itemScope
            itemType="https://schema.org/Person"
            className="mt-12 rounded-4xl bg-white p-6 sm:p-8 dark:bg-muted"
            aria-label="About the author"
        >
            <h2 className="text-lg font-bold">About the author</h2>
            <div className="mt-4">
                <span
                    itemProp="name"
                    className="block text-base font-bold"
                >
                    Jameel Shaikh
                </span>
                <span
                    itemProp="jobTitle"
                    className="mt-1 block text-sm text-black/70 dark:text-foreground/70"
                >
                    Founder, BracketView
                </span>
                <div className="mt-3 flex flex-wrap gap-4 text-sm">
                    <a
                        itemProp="url"
                        href="https://medium.com/@dev-jameel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                    >
                        Medium
                    </a>
                    <a
                        itemProp="sameAs"
                        href="https://www.linkedin.com/in/dev-jameel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default AuthorBio;
