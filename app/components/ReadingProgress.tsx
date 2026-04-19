"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollable = docHeight - winHeight;

      if (scrollable <= 0) {
        setProgress(0);
        return;
      }

      const pct = Math.min(100, Math.max(0, (scrollTop / scrollable) * 100));
      setProgress(pct);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Průběh čtení"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        zIndex: 60,
        background: "transparent",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "var(--accent, #8b5cf6)",
          transition: "width 0.1s linear",
          opacity: progress > 0 ? 1 : 0,
          boxShadow: "0 0 6px var(--accent, #8b5cf6)",
        }}
      />
    </div>
  );
}
