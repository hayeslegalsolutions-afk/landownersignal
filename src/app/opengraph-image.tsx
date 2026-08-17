import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default share-card image for every page that doesn't define its own. Built
// from the same signal-mark logomark and palette as the header/footer — swap
// for a designed asset once the real brand mark exists.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#101e2b",
          color: "#f7f5f0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
            <line x1="2" y1="25" x2="29" y2="25" stroke="#f7f5f0" strokeWidth="2" strokeLinecap="round" />
            <path
              d="M11.17 21.79 A5 5 0 0 1 19.83 23.71"
              stroke="#f7f5f0"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M8.11 19.21 A9 9 0 0 1 23.69 22.67"
              stroke="#f7f5f0"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M5.04 16.64 A13 13 0 0 1 27.56 21.63"
              stroke="#f7f5f0"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="15" cy="25" r="1.9" fill="#b4502a" />
          </svg>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 600 }}>{siteConfig.name}</div>
        </div>
        <div style={{ display: "flex", marginTop: 48, fontSize: 52, fontWeight: 600, lineHeight: 1.15, maxWidth: 980 }}>
          Know the deal before you&apos;re in it.
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 26, color: "#a9b4bd", maxWidth: 900 }}>
          Lease &amp; offer review for Texas &amp; Oklahoma landowners.
        </div>
      </div>
    ),
    { ...size }
  );
}
