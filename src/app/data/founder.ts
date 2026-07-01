const founderName = "Jameel Shaikh";
const founderTitle = "Founder, BracketView";
const founderStoryTitle = "What's the story behind BracketView?";

const founderIntro = `I'm ${founderName}, founder of BracketView.`;

/** Full origin story — About page */
const founderStoryParagraphs = [
    "As developers, we spend a significant portion of our time working with JSON — debugging APIs, exploring data structures, or making sense of a massive blob. The right tool for that work matters.",
    "Most JSON viewers fall short: cluttered with ads, cramped layouts, poor readability, and sluggish performance on large files.",
    "I built BracketView to fix that — a web application focused on eliminating those frustrations and making JSON work simple and efficient.",
] as const;

/** Condensed byline — blog author card */
const founderBioSummary =
    "I built BracketView because working with JSON every day deserves better than cluttered viewers, cramped layouts, and tools that choke on large files. BracketView is a web app built to make that work simple and efficient.";

export {
    founderBioSummary,
    founderIntro,
    founderName,
    founderStoryParagraphs,
    founderStoryTitle,
    founderTitle,
};
