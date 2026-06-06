import {
    supportNotificationEmail,
    thankYouEmail,
    type ContactEmailPayload,
} from "@/lib/email/templates";
import {
    createTransporter,
    getContactInbox,
    getFromAddress,
} from "@/lib/email/transporter";

const sendContactEmails = async (payload: ContactEmailPayload) => {
    const transporter = createTransporter();
    const from = getFromAddress();
    const inbox = getContactInbox();

    const thankYou = thankYouEmail({ name: payload.name });
    const supportMail = supportNotificationEmail(payload);

    await Promise.all([
        transporter.sendMail({
            from,
            to: payload.email,
            subject: thankYou.subject,
            html: thankYou.html,
        }),
        transporter.sendMail({
            from,
            to: inbox,
            replyTo: payload.email,
            subject: supportMail.subject,
            html: supportMail.html,
        }),
    ]);
};

export { sendContactEmails };
