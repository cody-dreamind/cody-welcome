"use client";

import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";
const THEME_CHANGE_EVENT = "cody-theme-change";

function getCurrentTheme(): Theme {
  if (typeof document === "undefined") return "dark";

  const current = document.documentElement.getAttribute("data-theme");
  if (current === "light" || current === "dark") return current;

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};

  const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  mediaQuery.addEventListener("change", onStoreChange);

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
    mediaQuery.removeEventListener("change", onStoreChange);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore<Theme | null>(
    subscribe,
    getCurrentTheme,
    () => null
  );

  function toggle() {
    const current = theme ?? getCurrentTheme();
    const next: Theme = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }

  const nextThemeLabel =
    theme === null
      ? "Přepnout režim"
      : theme === "light"
        ? "Přepnout na tmavý režim"
        : "Přepnout na světlý režim";
  const buttonTitle =
    theme === null ? "Přepnout režim" : theme === "light" ? "Tmavý režim" : "Světlý režim";

  return (
    <button
      onClick={toggle}
      aria-label={nextThemeLabel}
      className="w-7 h-7 flex items-center justify-center rounded-md transition-colors hover:opacity-70"
      style={{ color: "var(--muted)" }}
      title={buttonTitle}
    >
      {theme === "light" ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : theme === null ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18" />
          <path d="M12 5a7 7 0 1 0 0 14 7 7 0 0 1 0-14Z" />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )}
    </button>
  );
}
