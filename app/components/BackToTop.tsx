"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Zpět nahoru"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-10 h-10 rounded-full border transition-all hover:opacity-90 hover:scale-105"
      style={{
        background: "rgba(139, 92, 246, 0.15)",
        borderColor: "rgba(139, 92, 246, 0.3)",
        color: "var(--accent-light)",
        backdropFilter: "blur(8px)",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
