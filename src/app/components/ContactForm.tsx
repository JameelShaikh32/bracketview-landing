"use client";

import SubjectDropdown from "@/app/components/ui/SubjectDropdown";
import { supportEmail } from "@/app/data/legal";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const inputClassName =
    "w-full rounded-2xl border border-black/10 bg-gray px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-black/40 focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-foreground/15 dark:bg-background dark:text-foreground dark:placeholder:text-foreground/40 dark:focus:border-accent-dark dark:focus:ring-accent-dark/20";

const ContactForm = () => {
    const [formState, setFormState] = useState<FormState>("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [subject, setSubject] = useState("");
    const reducedMotion = useReducedMotion();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage("");

        if (!subject) {
            setFormState("error");
            setErrorMessage("Please select a subject.");
            return;
        }

        setFormState("submitting");

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: String(formData.get("name") ?? ""),
            email: String(formData.get("email") ?? ""),
            subject: String(formData.get("subject") ?? ""),
            message: String(formData.get("message") ?? ""),
            company: String(formData.get("company") ?? ""),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = (await response.json()) as {
                success?: boolean;
                error?: string;
            };

            if (!response.ok) {
                throw new Error(data.error ?? "Something went wrong.");
            }

            form.reset();
            setSubject("");
            setFormState("success");
        } catch (error) {
            setFormState("error");
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Unable to send your message. Please try again.",
            );
        }
    };

    if (formState === "success") {
        return (
            <div className="flex min-h-[420px] flex-col items-center justify-center rounded-4xl bg-white p-8 text-center sm:p-12 dark:bg-muted">
                <div className="flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent dark:bg-accent-dark/20 dark:text-accent-dark">
                    <CheckCircle2 size={28} aria-hidden />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-black dark:text-foreground">
                    Message sent
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-black/75 dark:text-foreground/75">
                    Thank you for contacting BracketView. We have sent a confirmation
                    to your inbox and will get in touch with you shortly.
                </p>
                <button
                    type="button"
                    onClick={() => {
                        setSubject("");
                        setFormState("idle");
                    }}
                    className="mt-8 rounded-2xl bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-accent-dark cursor-pointer"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <motion.form
            onSubmit={handleSubmit}
            animate={
                formState === "error" && !reducedMotion
                    ? { x: [0, -8, 8, -6, 6, 0] }
                    : { x: 0 }
            }
            transition={{ duration: 0.4 }}
            className="rounded-4xl bg-white p-6 sm:p-8 dark:bg-muted"
        >
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-black dark:text-foreground">
                    Send us a message
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-black/75 dark:text-foreground/75">
                    Fill out the form and we will reply within 1–2 business days. A
                    confirmation email will be sent to your inbox.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                    <label
                        htmlFor="contact-name"
                        className="mb-2 block text-sm font-medium text-black dark:text-foreground"
                    >
                        Full name
                    </label>
                    <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        maxLength={120}
                        autoComplete="name"
                        className={inputClassName}
                        placeholder="Jane Developer"
                    />
                </div>

                <div className="sm:col-span-1">
                    <label
                        htmlFor="contact-email"
                        className="mb-2 block text-sm font-medium text-black dark:text-foreground"
                    >
                        Email address
                    </label>
                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        maxLength={254}
                        autoComplete="email"
                        className={inputClassName}
                        placeholder="you@company.com"
                    />
                </div>

                <div className="sm:col-span-2">
                    <label
                        htmlFor="contact-subject"
                        className="mb-2 block text-sm font-medium text-black dark:text-foreground"
                    >
                        Subject
                    </label>
                    <input type="hidden" name="subject" value={subject} />
                    <SubjectDropdown value={subject} onChange={setSubject} />
                </div>

                <div className="sm:col-span-2">
                    <label
                        htmlFor="contact-message"
                        className="mb-2 block text-sm font-medium text-black dark:text-foreground"
                    >
                        Message
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        required
                        minLength={10}
                        maxLength={5000}
                        rows={6}
                        className={`${inputClassName} resize-y`}
                        placeholder="Tell us how we can help. Include your account email or error details if relevant."
                    />
                </div>

                <div className="hidden" aria-hidden>
                    <label htmlFor="contact-company">Company</label>
                    <input
                        id="contact-company"
                        name="company"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                    />
                </div>
            </div>

            {formState === "error" && errorMessage ? (
                <p
                    role="alert"
                    className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-300"
                >
                    {errorMessage}
                </p>
            ) : null}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-relaxed text-black/60 dark:text-foreground/60">
                    Prefer email? Write to{" "}
                    <a
                        href={`mailto:${supportEmail}`}
                        className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-dark"
                    >
                        {supportEmail}
                    </a>
                </p>

                <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-accent-dark"
                >
                    {formState === "submitting" ? (
                        <>
                            <Loader2 size={16} className="animate-spin" aria-hidden />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send message
                            <ArrowUpRight size={16} aria-hidden />
                        </>
                    )}
                </button>
            </div>
        </motion.form>
    );
};

export default ContactForm;
