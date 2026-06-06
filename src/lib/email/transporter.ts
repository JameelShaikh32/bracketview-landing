import nodemailer from "nodemailer";

const getSmtpConfig = () => {
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
        return null;
    }

    return {
        host,
        port,
        secure: process.env.SMTP_SECURE === "true" || port === 465,
        auth: { user, pass },
    };
};

const getFromAddress = () =>
    process.env.SMTP_FROM ?? `BracketView <${process.env.SMTP_USER}>`;

const getContactInbox = () =>
    process.env.CONTACT_INBOX ?? "support@bracketview.in";

const createTransporter = () => {
    const config = getSmtpConfig();

    if (!config) {
        throw new Error("SMTP is not configured");
    }

    return nodemailer.createTransport(config);
};

export { createTransporter, getContactInbox, getFromAddress, getSmtpConfig };
