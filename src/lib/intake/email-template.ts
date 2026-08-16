import { getAllFields, type StepConfig } from "./schema";
import { TRACK_META, type TrackKey } from "./track-fields";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function buildIntakeEmail({
  track,
  steps,
  data,
  attachmentName,
}: {
  track: TrackKey;
  steps: StepConfig[];
  data: Record<string, string>;
  attachmentName: string | null;
}): { subject: string; html: string; text: string } {
  const meta = TRACK_META[track];
  const submitterName = data.name?.trim() || "Unknown";
  const subject = `New ${meta.label} intake — ${submitterName}`;

  const rows = getAllFields(steps).filter((field) => field.type !== "file");

  const htmlRows = rows
    .map((field) => {
      const value = data[field.name]?.trim();
      return `
        <tr>
          <td style="padding:8px 16px 8px 0; font-weight:600; vertical-align:top; width:220px; border-bottom:1px solid #DDD5C7; color:#101E2B;">${escapeHtml(field.label)}</td>
          <td style="padding:8px 0; vertical-align:top; border-bottom:1px solid #DDD5C7; white-space:pre-wrap; color:#101E2B;">${value ? escapeHtml(value) : "—"}</td>
        </tr>`;
    })
    .join("");

  const attachmentHtml = attachmentName
    ? `<p style="margin-top:20px; font-size:13px; color:#5B6B7A;">📎 Attached: ${escapeHtml(attachmentName)}</p>`
    : "";

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width:600px; margin:0 auto;">
      <div style="background:#101E2B; padding:20px 24px;">
        <span style="display:inline-block; background:${meta.color}; color:#ffffff; font-size:12px; font-weight:600; padding:4px 10px; border-radius:999px; text-transform:uppercase; letter-spacing:0.03em;">${escapeHtml(meta.label)}</span>
        <h1 style="color:#ffffff; font-size:20px; margin:12px 0 0;">New intake submission</h1>
      </div>
      <div style="padding:24px; background:#F7F5F0;">
        <table style="width:100%; border-collapse:collapse; font-size:14px;">
          ${htmlRows}
        </table>
        ${attachmentHtml}
      </div>
    </div>
  `;

  const text = [
    `New ${meta.label} intake`,
    "",
    ...rows.map((field) => `${field.label}: ${data[field.name]?.trim() || "—"}`),
    attachmentName ? `\nAttached: ${attachmentName}` : "",
  ].join("\n");

  return { subject, html, text };
}
