"use client";

import { useEffect, useState } from "react";

const resumeUrl =
  "https://drive.google.com/file/d/1iYzlP6K69ux5QUUhsLpn3-au-nWkFrF4/view?usp=sharing";

const metrics = ["2+ Years Experience", "BSc (Hons) Computing", "Backend Engineer"];

export function ResumeWidget() {
  const [status, setStatus] = useState<"idle" | "loading" | "ready">("idle");

  useEffect(() => {
    if (status !== "loading") {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setStatus("ready");
    }, 900);

    return () => window.clearTimeout(timeoutId);
  }, [status]);

  const handleFetch = () => {
    setStatus("loading");
  };

  return (
    <div
      style={{
        width: "100%",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "24px",
        padding: "1.25rem",
        background: "linear-gradient(135deg, rgba(10, 15, 24, 0.96), rgba(22, 29, 42, 0.94))",
        boxShadow: "0 18px 48px rgba(0, 0, 0, 0.16)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "0.9rem",
          color: "#9ca3af",
          fontSize: "0.85rem",
        }}
      >
        <span style={{ display: "inline-flex", gap: "0.35rem" }}>
          <span style={{ width: "0.6rem", height: "0.6rem", borderRadius: "999px", background: "#fb7185" }} />
          <span style={{ width: "0.6rem", height: "0.6rem", borderRadius: "999px", background: "#fbbf24" }} />
          <span style={{ width: "0.6rem", height: "0.6rem", borderRadius: "999px", background: "#34d399" }} />
        </span>
        <span style={{ fontWeight: 600, color: "#e2e8f0" }}>Get Professional CV</span>
      </div>

      <div
        style={{
          borderRadius: "16px",
          padding: "1rem",
          background: "rgba(2, 6, 23, 0.7)",
          border: "1px solid rgba(148, 163, 184, 0.16)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#7dd3fc", marginBottom: "0.75rem" }}>
          <span style={{ fontWeight: 700 }}>$</span>
          <code style={{ fontSize: "0.95rem", fontFamily: "ui-monospace, SFMono-Regular, monospace" }}>
            {status === "idle"
              ? "curl -X GET https://api.chanuka.dev/v1/resume"
              : status === "loading"
                ? "Fetching payload..."
                : "Resume ready to download"}
          </code>
        </div>

        {status !== "ready" && (
          <button
            onClick={handleFetch}
            disabled={status === "loading"}
            style={{
              border: "none",
              borderRadius: "999px",
              padding: "0.7rem 1rem",
              background: status === "loading" ? "#3b82f6" : "#2563eb",
              color: "#f8fafc",
              cursor: status === "loading" ? "wait" : "pointer",
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
          >
            {status === "loading" ? "Fetching..." : "Fetch CV"}
          </button>
        )}

        {status === "ready" && (
          <div style={{ display: "grid", gap: "0.9rem" }}>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "999px",
                padding: "0.8rem 1rem",
                background: "#0f766e",
                color: "#ecfeff",
                textDecoration: "none",
                fontWeight: 700,
                width: "fit-content",
              }}
            >
              Download CV
            </a>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {metrics.map((metric) => (
                <span
                  key={metric}
                  style={{
                    padding: "0.45rem 0.7rem",
                    borderRadius: "999px",
                    background: "rgba(59, 130, 246, 0.16)",
                    color: "#bfdbfe",
                    fontSize: "0.85rem",
                    border: "1px solid rgba(59, 130, 246, 0.24)",
                  }}
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
