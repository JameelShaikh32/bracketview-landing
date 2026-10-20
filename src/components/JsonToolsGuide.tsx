import Reveal from "@/components/motion/Reveal";
import Link from "next/link";

const linkClass =
  "whitespace-nowrap font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark";

const JsonToolsGuide = () => {
  return (
    <section
      id="json-tools-guide"
      aria-labelledby="json-tools-guide-heading"
      className="relative w-full px-4 pb-8 pt-0 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="rounded-4xl bg-white p-8 sm:p-12 lg:p-14 dark:bg-muted">
            <h2
              id="json-tools-guide-heading"
              className="max-w-5xl text-3xl font-bold leading-normal text-black sm:text-4xl dark:text-foreground"
            >
              How to view, format, and validate JSON online
            </h2>
            <div className="mt-6 max-w-5xl space-y-4 text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75">
              <p>
                A JSON viewer turns a raw payload into something you can read.
                Paste a response from an API, a config file, or a webhook body
                into BracketView and open it as text, a tree, a graph, node
                cards, or a nested table. The{" "}
                <Link href="/json-viewer" className={linkClass}>
                  JSON viewer
                </Link>{" "}
                keeps the structure intact, so you can expand objects, follow
                arrays, and jump to a key without reformatting the file by
                hand.
              </p>
              <p>
                When the payload is minified or inconsistent, use the{" "}
                <Link href="/json-formatter" className={linkClass}>
                  JSON formatter
                </Link>
                . One pass adds indentation and spacing so nested objects line
                up. You can minify the same document again when you need a
                compact body for a request. Formatting does not change values.
                It only changes how the JSON is written, which makes reviews
                and later comparisons easier to follow.
              </p>
              <p>
                A{" "}
                <Link href="/json-validator" className={linkClass}>
                  JSON validator
                </Link>{" "}
                checks that the document is actually valid JSON. BracketView
                highlights bracket mismatches, trailing commas, and unquoted
                keys as you type, with the line and column of the first
                problem. That is enough for most API responses. If you also
                need to confirm a shape, the schema validator compares the
                document to a JSON Schema or an OpenAPI definition before you
                ship the change.
              </p>
              <p>
                Two other checks sit next to the viewer.{" "}
                <Link href="/json-diff" className={linkClass}>
                  JSON diff
                </Link>{" "}
                places two documents side by side so you can see added,
                removed, and changed values.{" "}
                <Link href="/jsonpath-query" className={linkClass}>
                  JSONPath
                </Link>{" "}
                runs a query such as $.store.book[*].author and returns the
                matching nodes, which helps when the file is too large to scan
                by eye. These core tools run in the browser. You do not install
                anything to view, format, or validate JSON, and the free
                workspace does not require an account.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default JsonToolsGuide;
