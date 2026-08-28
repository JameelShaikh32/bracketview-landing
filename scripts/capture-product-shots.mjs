/**
 * Capture product screenshots from app.bracketview.in for marketing.
 */
import { chromium } from "playwright";
import { mkdir, copyFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "product");
const whatIsDir = path.join(__dirname, "..", "public", "images");

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function stripOverlay(page) {
    await page.evaluate(() => {
        document.querySelectorAll(".driver-overlay").forEach((el) => el.remove());
        document.querySelectorAll(".driver-popover").forEach((el) => el.remove());
    });
}

async function clickLabel(page, name) {
    await stripOverlay(page);
    const loc = page.locator(`button:has-text("${name}")`).first();
    await loc.click({ force: true, timeout: 12000 });
}

async function shot(page, file) {
    await stripOverlay(page);
    await wait(400);
    await page.screenshot({ path: path.join(outDir, file), type: "png" });
    console.log("saved", file);
}

async function main() {
    await mkdir(outDir, { recursive: true });
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
        viewport: { width: 1440, height: 900 },
        colorScheme: "dark",
        deviceScaleFactor: 1,
        permissions: ["clipboard-read", "clipboard-write"],
    });
    await context.addInitScript(() => {
        try {
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } catch {
            /* ignore */
        }
    });

    const page = await context.newPage();
    await page.goto("https://app.bracketview.in/", {
        waitUntil: "domcontentloaded",
        timeout: 60000,
    });
    await page.getByRole("tab", { name: "Tree" }).first().waitFor({
        state: "attached",
        timeout: 30000,
    });
    await wait(2000);
    await stripOverlay(page);

    const close = page.locator("button", { hasText: "×" }).first();
    if (await close.count()) {
        await close.click({ force: true }).catch(() => {});
        await wait(300);
        await stripOverlay(page);
    }

    await stripOverlay(page);

    const gotIt = page.getByRole("button", { name: /got it/i });
    if (await gotIt.count()) {
        await gotIt.first().click({ force: true });
        await wait(500);
    }
    await stripOverlay(page);

    const sampleJson = JSON.stringify(
        {
            order: {
                id: "ord_1842",
                status: "shipped",
                customer: {
                    name: "Ada Lovelace",
                    email: "ada@example.com",
                    address: { city: "London", country: "UK" },
                },
                items: [
                    { sku: "A-100", name: "Notebook", qty: 2, price: 12.5 },
                    { sku: "B-200", name: "Pen set", qty: 1, price: 8 },
                    { sku: "C-300", name: "Sticker pack", qty: 4, price: 3.25 },
                ],
            },
        },
        null,
        2,
    );

    await page.locator("#tour-tab-text").click({ force: true }).catch(() => {});
    await wait(400);
    const monaco = page.locator(".monaco-editor textarea").first();
    if (await monaco.count()) {
        await monaco.click({ force: true });
        await page.keyboard.insertText(sampleJson);
        await wait(800);
        await page.getByRole("button", { name: /Beautify|Parse/i }).first().click({ force: true }).catch(() => {});
        await wait(1200);
    } else {
        await page.getByRole("button", { name: /^Sample$/i }).first().click({ force: true });
        await wait(2000);
    }
    await stripOverlay(page);

    await page.locator("#tour-tab-tree").click({ force: true });
    await wait(1000);
    await shot(page, "workspace-tabs-dark.png");

    await page.locator("#tour-tab-node").click({ force: true });
    await wait(2800);
    await shot(page, "node-view-dark.png");

    await page.locator("#tour-tab-table").click({ force: true });
    await wait(1800);
    await shot(page, "table-view-dark.png");

    await page.locator("#tour-tab-graph").click({ force: true });
    await wait(2500);
    await shot(page, "graph-view-dark.png");

    await page.evaluate(() => {
        const buttons = [...document.querySelectorAll("button")];
        const match = buttons.find((b) =>
            /setting|workspace settings/i.test(
                `${b.getAttribute("aria-label") || ""} ${b.getAttribute("title") || ""} ${b.textContent || ""}`,
            ),
        );
        match?.click();
    });
    await wait(900);
    await shot(page, "workspace-settings-dark.png");
    await page.keyboard.press("Escape").catch(() => {});
    await wait(300);

    await page.evaluate(() => {
        const buttons = [...document.querySelectorAll("button")];
        buttons.find((b) => /^\s*AI\s*$/.test(b.textContent || ""))?.click();
    });
    await wait(1200);
    await shot(page, "ai-panel-dark.png");
    await page.keyboard.press("Escape").catch(() => {});
    await wait(300);

    await page.evaluate(() => {
        const buttons = [...document.querySelectorAll("button")];
        buttons.find((b) => /^\s*More\s*$/.test(b.textContent || ""))?.click();
    });
    await wait(800);
    await shot(page, "windows-download-more-dark.png");

    await copyFile(
        path.join(outDir, "node-view-dark.png"),
        path.join(whatIsDir, "what-is-bracketview-dark.png"),
    );
    await copyFile(
        path.join(outDir, "workspace-tabs-dark.png"),
        path.join(whatIsDir, "what-is-bracketview-light.png"),
    );

    await browser.close();
    console.log("done");
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
