import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Renders the same signal-mark logomark used in the header/footer as the
// browser-tab favicon, replacing the stock Next.js icon. Swap this for the
// real exported brand asset once it exists (see signal-mark.tsx).
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#101e2b",
          borderRadius: 6,
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <line x1="2" y1="25" x2="29" y2="25" stroke="#f7f5f0" strokeWidth="2.4" strokeLinecap="round" />
          <path
            d="M11.17 21.79 A5 5 0 0 1 19.83 23.71"
            stroke="#f7f5f0"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M8.11 19.21 A9 9 0 0 1 23.69 22.67"
            stroke="#f7f5f0"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M5.04 16.64 A13 13 0 0 1 27.56 21.63"
            stroke="#f7f5f0"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="15" cy="25" r="2.1" fill="#b4502a" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
