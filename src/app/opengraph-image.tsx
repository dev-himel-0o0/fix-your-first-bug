import { ImageResponse } from "next/og";

export const alt =
  "Fix Your First Bug — an open-source playground for your first contribution";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f8fafc",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "68px",
              height: "68px",
              borderRadius: "18px",
              background: "#0f172a",
              color: "#ffffff",
              fontSize: "30px",
              fontFamily: "monospace",
            }}
          >
            {"</>"}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "30px",
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            Fix Your First Bug
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "78px",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#0f172a",
              lineHeight: 1.05,
            }}
          >
            Fix your first bug.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "32px",
              color: "#475569",
              maxWidth: "920px",
              lineHeight: 1.3,
            }}
          >
            Three intentionally broken TypeScript functions. One friendly first
            pull request.
          </div>
        </div>

        <div style={{ display: "flex", gap: "14px" }}>
          {["Next.js 16", "TypeScript", "Tailwind CSS"].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                borderRadius: "999px",
                background: "#e2e8f0",
                color: "#334155",
                padding: "10px 20px",
                fontSize: "22px",
                fontWeight: 600,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
