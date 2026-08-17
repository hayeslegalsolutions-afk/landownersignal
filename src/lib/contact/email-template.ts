import { contactFields } from "@/lib/contact/fields";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const TOPIC_LABELS: Record<string, string> = {
  "oil-gas": "Oil & Gas",
  "data-centers": "Data Centers",
  solar: "Solar",
  shop: "Shop / order question",
  other: "Other",
};

export function buildContactEmail({
  data,
}: {
  data: Record<string, string>;
}): { subject: string; html: string; text: string } {
  const senderName = data.name?.trim() || "Unknown";
  const topicLabel = TOPIC_LABELS[data.topic] ?? data.topic ?? "Unknown";
  const subject = `New contact form message — ${senderName} (${topicLabel})`;

  const rows = contactFields.filter((f) => f.name !== "message");

  const htmlRows = rows
    .map((field) => {
      const raw = data[field.name]?.trim();
      const value = field.name === "topic" ? topicLabel : raw;
      return `
        <tr>
          <td style="padding:8px 16px 8px 0; font-weight:600; vertical-align:top; width:160px; border-bottom:1px solid #DDD5C7; color:#101E2B;">${escapeHtml(field.label)}</td>
          <td style="padding:8px 0; vertical-align:top; border-bottom:1px solid #DDD5C7; color:#101E2B;">${value ? escapeHtml(value) : "—"}</td>
        </tr>`;
    })
    .join("");

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width:600px; margin:0 auto;">
      <div style="background:#101E2B; padding:20px 24px;">
        <span style="display:inline-block; background:#B4502A; color:#ffffff; font-size:12px; font-weight:600; padding:4px 10px; border-radius:999px; text-transform:uppercase; letter-spacing:0.03em;">Contact Form</span>
        <h1 style="color:#ffffff; font-size:20px; margin:12px 0 0;">New message from ${escapeHtml(senderName)}</h1>
      </div>
      <div style="padding:24px; background:#F7F5F0;">
        <table style="width:100%; border-collapse:collapse; font-size:14px;">
          ${htmlRows}
        </table>
        <p style="margin-top:20px; font-size:13px; font-weight:600; color:#101E2B;">Message</p>
        <p style="margin-top:6px; font-size:14px; white-space:pre-wrap; color:#101E2B;">${escapeHtml(data.message?.trim() || "—")}</p>
      </div>
    </div>
  `;

  const text = [
    `New contact form message`,
    "",
    ...rows.map((field) => `${field.label}: ${field.name === "topic" ? topicLabel : data[field.name]?.trim() || "—"}`),
    "",
    "Message:",
    data.message?.trim() || "—",
  ].join("\n");

  return { subject, html, text };
}
