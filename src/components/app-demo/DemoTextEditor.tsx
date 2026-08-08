"use client";

/**
 * Monaco-faithful chrome from app/src/components/TextEditor.tsx
 * Dark pane uses #1e1e1e (VS Code), light uses white — without bundling Monaco.
 */

type DemoTextEditorProps = {
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  errorLine?: number | null;
  className?: string;
};

function highlightJsonLine(line: string): string {
  return line
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(
      /("(?:\\.|[^"\\])*")\s*:/g,
      '<span class="text-[#9cdcfe]">$1</span>:',
    )
    .replace(
      /:\s*("(?:\\.|[^"\\])*")/g,
      ': <span class="text-[#ce9178]">$1</span>',
    )
    .replace(
      /:\s*(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,
      ': <span class="text-[#b5cea8]">$1</span>',
    )
    .replace(
      /:\s*(true|false|null)\b/g,
      ': <span class="text-[#569cd6]">$1</span>',
    );
}

const DemoTextEditor = ({
  value,
  onChange,
  readOnly = false,
  errorLine = null,
  className = "",
}: DemoTextEditorProps) => {
  const lines = value.split("\n");

  if (!readOnly && onChange) {
    return (
      <div
        className={`flex h-full w-full overflow-hidden bg-white dark:bg-[#1e1e1e] ${className}`}
      >
        <div
          aria-hidden
          className="viewer-scrollbar select-none border-r border-gray-200 bg-gray-50 px-2 py-3 text-right font-mono text-[12px] leading-5 text-gray-400 dark:border-[#2d2d2d] dark:bg-[#1e1e1e] dark:text-[#858585]"
        >
          {lines.map((_, index) => (
            <div
              key={index}
              className={
                errorLine === index + 1
                  ? "bg-red-500/20 text-red-500"
                  : undefined
              }
            >
              {index + 1}
            </div>
          ))}
        </div>
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          spellCheck={false}
          className="viewer-scrollbar h-full w-full resize-none bg-transparent p-3 font-mono text-[12px] leading-5 text-gray-900 outline-none dark:text-[#d4d4d4]"
          aria-label="JSON editor"
          style={{ tabSize: 2 }}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex h-full w-full overflow-hidden bg-white dark:bg-[#1e1e1e] ${className}`}
    >
      <div
        aria-hidden
        className="viewer-scrollbar select-none border-r border-gray-200 bg-gray-50 px-2 py-3 text-right font-mono text-[12px] leading-5 text-gray-400 dark:border-[#2d2d2d] dark:bg-[#1e1e1e] dark:text-[#858585]"
      >
        {lines.map((_, index) => (
          <div
            key={index}
            className={
              errorLine === index + 1 ? "bg-red-500/20 text-red-500" : undefined
            }
          >
            {index + 1}
          </div>
        ))}
      </div>
      <pre className="viewer-scrollbar h-full w-full overflow-auto p-3 font-mono text-[12px] leading-5 text-gray-900 dark:text-[#d4d4d4]">
        {lines.map((line, index) => (
          <div
            key={index}
            className={
              errorLine === index + 1 ? "bg-red-500/15 dark:bg-red-500/20" : ""
            }
            dangerouslySetInnerHTML={{ __html: highlightJsonLine(line) || " " }}
          />
        ))}
      </pre>
    </div>
  );
};

export default DemoTextEditor;
