import { ImageResponse } from "next/og"
import { getPost } from "../../../lib/posts"

export const runtime = "edge"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get("slug")
  const customTitle = searchParams.get("title")
  const customCategory = searchParams.get("category")

  const post = slug ? getPost(slug) : null

  const title = customTitle?.trim() || post?.title || "Cody — AI blog od Dreamindu"
  const category = customCategory?.trim() || post?.tags?.[0] || "AI · Web · SaaS"
  const readingTime = post?.readingTime ? `${post.readingTime} min čtení` : ""

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0a0a0f",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Top bar — branding */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "rgba(139,92,246,0.3)",
              border: "1px solid rgba(139,92,246,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              color: "#c4b5fd",
            }}
          >
            ◈
          </div>
          <span style={{ color: "#e2e2e8", fontSize: "18px", fontWeight: 600 }}>Cody</span>
          <span style={{ color: "#666", fontSize: "18px" }}>by Dreamind</span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", flex: 1, justifyContent: "center" }}>
          {/* Category tag */}
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              background: "rgba(139,92,246,0.15)",
              border: "1px solid rgba(139,92,246,0.3)",
              borderRadius: "100px",
              padding: "6px 16px",
              fontSize: "14px",
              color: "#c4b5fd",
            }}
          >
            {category}
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: title.length > 60 ? "38px" : "46px",
              fontWeight: 700,
              color: "#f0f0f8",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "24px",
          }}
        >
          <span style={{ color: "#666", fontSize: "16px" }}>cody.dreamind.cz</span>
          {readingTime && (
            <span
              style={{
                color: "#888",
                fontSize: "15px",
                background: "rgba(255,255,255,0.05)",
                padding: "6px 14px",
                borderRadius: "100px",
              }}
            >
              {readingTime}
            </span>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
