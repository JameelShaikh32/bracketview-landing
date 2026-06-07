type ContactEmailPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const brand = {
  accent: "#ff9c1c",
  accentDark: "#be7009",
  text: "#191314",
  muted: "#5c5658",
  background: "#f4f4f4",
  white: "#ffffff",
};

const getSiteUrl = () =>
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://bracketview.in";

const getLogoUrl = () => `${getSiteUrl()}/logo.webp`;

const emailLayout = ({
  previewText,
  body,
}: {
  previewText: string;
  body: string;
}) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>BracketView</title>
</head>
<body style="margin:0;padding:0;background-color:${brand.background};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${brand.text};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${previewText}</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:${brand.background};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background-color:${brand.white};border-radius:24px;overflow:hidden;box-shadow:0 12px 40px rgba(25,19,20,0.08);">
          <tr>
            <td style="background-color:${brand.accentDark};padding:28px 32px;text-align:center;">
              <img src="${getLogoUrl()}" alt="BracketView" width="40" height="40" style="display:inline-block;border-radius:10px;vertical-align:middle;" />
              <span style="display:inline-block;margin-left:12px;font-size:22px;font-weight:700;color:${brand.white};vertical-align:middle;letter-spacing:-0.02em;">BracketView</span>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              ${body}
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 28px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="border-top:1px solid #ececec;padding-top:20px;font-size:12px;line-height:1.6;color:${brand.muted};text-align:center;">
                    <p style="margin:0 0 8px;">JSON viewer, formatter &amp; validator for modern developers.</p>
                    <p style="margin:0;">
                      <a href="${getSiteUrl()}" style="color:${brand.accentDark};text-decoration:none;font-weight:600;">bracketview.in</a>
                      &nbsp;·&nbsp;
                      <a href="mailto:support@bracketview.in" style="color:${brand.accentDark};text-decoration:none;">support@bracketview.in</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

const thankYouEmail = ({ name }: { name: string }) => {
  const firstName = name.trim().split(/\s+/)[0] || "there";

  const body = `
      <h1 style="margin:0 0 12px;font-size:24px;line-height:1.3;color:${brand.text};">Thank you for contacting us</h1>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:${brand.muted};">
        Hi ${escapeHtml(firstName)},
      </p>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:${brand.muted};">
        Thank you for reaching out to BracketView. We have received your message and will get in touch with you shortly.
      </p>
      <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:${brand.muted};">
        Our team typically responds within 1–2 business days. If your request is urgent, you can also email us directly at
        <a href="mailto:support@bracketview.in" style="color:${brand.accentDark};text-decoration:none;font-weight:600;">support@bracketview.in</a>.
      </p>
      <table role="presentation" cellspacing="0" cellpadding="0">
        <tr>
          <td style="border-radius:14px;background-color:${brand.accent};">
            <a href="${getSiteUrl()}" style="display:inline-block;padding:12px 22px;font-size:14px;font-weight:600;color:${brand.white};text-decoration:none;">
              Open BracketView
            </a>
          </td>
        </tr>
      </table>
    `;

  return {
    subject: "Thank you for contacting BracketView",
    html: emailLayout({
      previewText:
        "Thank you for contacting BracketView. We will get in touch with you shortly.",
      body,
    }),
  };
};

const supportNotificationEmail = (payload: ContactEmailPayload) => {
  const body = `
      <h1 style="margin:0 0 12px;font-size:22px;line-height:1.3;color:${brand.text};">New contact form submission</h1>
      <p style="margin:0 0 20px;font-size:14px;line-height:1.6;color:${brand.muted};">
        A visitor submitted the contact form on the BracketView landing site.
      </p>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #ececec;border-radius:16px;overflow:hidden;">
        <tr>
          <td style="padding:14px 16px;background-color:#fafafa;font-size:12px;font-weight:700;color:${brand.muted};width:120px;">Name</td>
          <td style="padding:14px 16px;font-size:14px;color:${brand.text};">${escapeHtml(payload.name)}</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;background-color:#fafafa;font-size:12px;font-weight:700;color:${brand.muted};">Email</td>
          <td style="padding:14px 16px;font-size:14px;color:${brand.text};">
            <a href="mailto:${escapeHtml(payload.email)}" style="color:${brand.accentDark};text-decoration:none;">${escapeHtml(payload.email)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:14px 16px;background-color:#fafafa;font-size:12px;font-weight:700;color:${brand.muted};">Subject</td>
          <td style="padding:14px 16px;font-size:14px;color:${brand.text};">${escapeHtml(payload.subject)}</td>
        </tr>
        <tr>
          <td colspan="2" style="padding:16px;border-top:1px solid #ececec;">
            <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:${brand.muted};">Message</p>
            <p style="margin:0;font-size:14px;line-height:1.7;color:${brand.text};white-space:pre-wrap;">${escapeHtml(payload.message)}</p>
          </td>
        </tr>
      </table>
    `;

  return {
    subject: `[Contact] ${payload.subject} — ${payload.name}`,
    html: emailLayout({
      previewText: `New contact from ${payload.name} (${payload.email})`,
      body,
    }),
  };
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export { supportNotificationEmail, thankYouEmail };
export type { ContactEmailPayload };

