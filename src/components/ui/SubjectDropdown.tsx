"use client";

import { contactSubjects } from "@/app/data/contact";
import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

type SubjectDropdownProps = {
    value: string;
    onChange: (value: string) => void;
};

const SubjectDropdown = ({ value, onChange }: SubjectDropdownProps) => {
    const [open, setOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const listboxId = useId();

    const displayValue = value || "Select a topic";

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
                setHighlightedIndex(-1);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectOption = (option: string) => {
        onChange(option);
        setOpen(false);
        setHighlightedIndex(-1);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (!open) {
            if (
                event.key === "Enter" ||
                event.key === " " ||
                event.key === "ArrowDown"
            ) {
                event.preventDefault();
                setOpen(true);
                setHighlightedIndex(0);
            }
            return;
        }

        switch (event.key) {
            case "Escape":
                event.preventDefault();
                setOpen(false);
                setHighlightedIndex(-1);
                break;
            case "ArrowDown":
                event.preventDefault();
                setHighlightedIndex((current) =>
                    current < contactSubjects.length - 1 ? current + 1 : 0,
                );
                break;
            case "ArrowUp":
                event.preventDefault();
                setHighlightedIndex((current) =>
                    current > 0 ? current - 1 : contactSubjects.length - 1,
                );
                break;
            case "Enter":
            case " ":
                event.preventDefault();
                if (highlightedIndex >= 0) {
                    selectOption(contactSubjects[highlightedIndex]);
                }
                break;
            case "Tab":
                setOpen(false);
                setHighlightedIndex(-1);
                break;
        }
    };

    return (
        <div ref={containerRef} className="relative">
            <button
                type="button"
                id="contact-subject"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-controls={listboxId}
                onClick={() => {
                    setOpen((current) => !current);
                    setHighlightedIndex(
                        value
                            ? contactSubjects.indexOf(
                                  value as (typeof contactSubjects)[number],
                              )
                            : 0,
                    );
                }}
                onKeyDown={handleKeyDown}
                className={`flex w-full items-center justify-between rounded-2xl border bg-gray px-4 py-3 text-left text-sm outline-none transition-colors dark:bg-background ${
                    open
                        ? "border-accent ring-2 ring-accent/20 dark:border-accent-dark dark:ring-accent-dark/20"
                        : "border-black/10 dark:border-foreground/15"
                } ${value ? "text-black dark:text-foreground" : "text-black/50 dark:text-foreground/50"}`}
            >
                <span>{displayValue}</span>
                <ChevronDown
                    size={16}
                    className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    aria-hidden
                />
            </button>

            {open ? (
                <ul
                    id={listboxId}
                    role="listbox"
                    aria-labelledby="contact-subject"
                    className="absolute z-20 mt-2 max-h-64 w-full overflow-auto rounded-2xl border border-black/10 bg-gray py-1 shadow-lg dark:border-foreground/15 dark:bg-background"
                >
                    {contactSubjects.map((subject, index) => {
                        const isSelected = value === subject;
                        const isHighlighted = highlightedIndex === index;

                        return (
                            <li
                                key={subject}
                                role="option"
                                aria-selected={isSelected}
                                onMouseEnter={() => setHighlightedIndex(index)}
                                onClick={() => selectOption(subject)}
                                className={`cursor-pointer px-4 py-2.5 text-sm transition-colors ${
                                    isHighlighted || isSelected
                                        ? "bg-black/10 text-black dark:bg-foreground/10 dark:text-foreground"
                                        : "text-black/80 dark:text-foreground/80"
                                }`}
                            >
                                {subject}
                            </li>
                        );
                    })}
                </ul>
            ) : null}
        </div>
    );
};

export default SubjectDropdown;
