import Reveal from "@/components/motion/Reveal";
import Link from "next/link";

const tools = [
  { href: "/json-viewer", label: "JSON Viewer" },
  { href: "/json-formatter", label: "JSON Formatter" },
  { href: "/json-validator", label: "JSON Validator" },
  { href: "/json-diff", label: "JSON Diff" },
  { href: "/jsonpath-query", label: "JSONPath Tester" },
  { href: "/jq-playground", label: "jq Playground" },
  { href: "/json-schema-validator", label: "JSON Schema Validator" },
  { href: "/json-type-generator", label: "JSON to TypeScript" },
  { href: "/ai-json-fixer", label: "AI JSON Fixer" },
  { href: "/webhook-tester", label: "Webhook Tester" },
  { href: "/learn", label: "Learn guides" },
  { href: "/blog", label: "Blog" },
] as const;

const ToolsDirectory = () => {
  return (
    <section
      id="tools"
      aria-labelledby="tools-heading"
      className="relative w-full px-4 pb-16 pt-8 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rounded-4xl bg-white p-8 sm:p-12 dark:bg-muted">
            <h2
              id="tools-heading"
              className="text-3xl font-bold text-black sm:text-4xl dark:text-foreground"
            >
              Advanced tools and docs
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/75 sm:text-base dark:text-foreground/75">
              Dedicated landing pages for each workflow, plus learn guides and
              blog tutorials. Start with the viewer, then open the specialist
              tool you need.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className="inline-flex text-sm font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                  >
                    {tool.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ToolsDirectory;
