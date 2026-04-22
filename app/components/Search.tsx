"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { posts } from "../../lib/posts";
import { getCategory } from "../../lib/categories";

function usePlatform() {
  const [isMac] = useState(
    () => typeof navigator !== "undefined" && navigator.platform.toUpperCase().includes("MAC")
  );
  return isMac;
}

export function SearchTrigger() {
  const [open, setOpen] = useState(false);
  const isMac = usePlatform();

  const openSearch = useCallback(() => setOpen(true), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={openSearch}
        aria-label="Otevřít vyhledávání v článcích"
        aria-haspopup="dialog"
        aria-expanded={open}
        className="flex items-center justify-center gap-2 text-xs px-2.5 sm:px-3 py-1.5 rounded-lg border transition-colors hover:border-purple-500/40"
        style={{
          color: "var(--muted)",
          borderColor: "var(--border)",
          background: "rgba(255,255,255,0.03)",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <span className="hidden md:inline">Hledat</span>
        <kbd
          className="ml-1 hidden lg:inline-flex px-1 py-0.5 rounded text-xs border"
          style={{ borderColor: "var(--border)", opacity: 0.6, fontSize: "10px" }}
        >
          {isMac ? "⌘K" : "Ctrl+K"}
        </kbd>
      </button>

      {open && <SearchModal onClose={() => setOpen(false)} />}
    </>
  );
}

function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const titleId = "search-modal-title";
  const descriptionId = "search-modal-description";

  const results =
    query.trim().length > 0
      ? posts
          .filter(
            (p) =>
              p.title.toLowerCase().includes(query.toLowerCase()) ||
              p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
              p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
          )
          .slice(0, 7)
      : posts.slice(0, 6);
  const lastResultIndex = results.length - 1;

  useEffect(() => {
    const timeoutId = window.setTimeout(() => inputRef.current?.focus(), 30);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (lastResultIndex < 0) return;
        setSelected((s) => Math.min(s + 1, lastResultIndex));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (lastResultIndex < 0) return;
        setSelected((s) => Math.max(s - 1, 0));
      }
      if (e.key === "Enter" && results[selected]) {
        router.push(`/blog/${results[selected].slug}`);
        onClose();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [lastResultIndex, results, selected, router, onClose]);

  return (
    <div
      className="fixed inset-0 flex items-start justify-center px-4"
      style={{
        zIndex: 200,
        paddingTop: "72px",
        background: "var(--search-overlay)",
        backdropFilter: "blur(10px)",
      }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-xl border overflow-hidden shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        style={{
          background: "var(--search-surface)",
          borderColor: "rgba(139, 92, 246, 0.35)",
          boxShadow: "0 24px 80px rgba(10, 10, 15, 0.32)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sr-only">
          <h2 id={titleId}>Vyhledávání v článcích</h2>
          <p id={descriptionId}>
            Vyhledejte článek podle názvu, perexu nebo tagu. Šipkami vyberete výsledek a Enterem ho otevřete.
          </p>
        </div>

        {/* Input row */}
        <div
          className="flex items-center gap-3 px-4 py-3.5 border-b"
          style={{
            borderColor: "var(--border)",
            background: "var(--search-section)",
          }}
        >
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            style={{ color: "var(--muted)", flexShrink: 0 }}
          >
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelected(0); }}
            placeholder="Hledat v článcích…"
            aria-label="Hledat v článcích"
            className="flex-1 bg-transparent text-sm outline-none placeholder:opacity-40"
            style={{ color: "var(--foreground)" }}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Vymazat vyhledávací dotaz"
              className="text-xs px-1.5 py-0.5 rounded"
              style={{ color: "var(--muted)", opacity: 0.6 }}
            >
              ✕
            </button>
          )}
          <kbd
            className="text-xs px-1.5 py-0.5 rounded border shrink-0"
            style={{ color: "var(--muted)", borderColor: "var(--border)", opacity: 0.5, fontSize: "11px" }}
          >
            Esc
          </kbd>
        </div>

        {/* Results */}
        <div className="overflow-y-auto" style={{ maxHeight: "min(360px, 60vh)" }}>
          {results.length === 0 && (
            <p className="px-4 py-8 text-sm text-center" style={{ color: "var(--muted)", opacity: 0.5 }}>
              Žádné výsledky pro &bdquo;{query}&ldquo;
            </p>
          )}
          {results.map((post, i) => {
            const cat = getCategory(post.tags);
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                onClick={onClose}
                className="flex flex-col gap-1 px-4 py-3 cursor-pointer transition-colors"
                style={{
                  background: i === selected ? "rgba(139, 92, 246, 0.1)" : "transparent",
                  borderLeft: i === selected ? "2px solid var(--accent)" : "2px solid transparent",
                }}
                onMouseEnter={() => setSelected(i)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium leading-snug" style={{ color: "var(--foreground)" }}>
                    {post.title}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {cat && (
                    <span
                      className="text-xs px-1.5 py-0.5 rounded-full shrink-0"
                      style={{ background: "rgba(139,92,246,0.12)", color: "var(--accent-light)" }}
                    >
                      {cat}
                    </span>
                  )}
                  <span className="text-xs truncate" style={{ color: "var(--muted)", opacity: 0.6 }}>
                    {post.excerpt.slice(0, 90)}…
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer hint */}
        <div
          className="px-4 py-2 flex items-center gap-4 border-t"
          style={{
            borderColor: "var(--border)",
            background: "var(--search-section)",
          }}
        >
          {[
            { key: "↑↓", label: "navigovat" },
            { key: "↵", label: "otevřít" },
            { key: "Esc", label: "zavřít" },
          ].map(({ key, label }) => (
            <span key={key} className="flex items-center gap-1">
              <kbd
                className="text-xs px-1 py-0.5 rounded border"
                style={{ color: "var(--muted)", borderColor: "var(--border)", fontSize: "10px" }}
              >
                {key}
              </kbd>
              <span className="text-xs" style={{ color: "var(--muted)", opacity: 0.5 }}>
                {label}
              </span>
            </span>
          ))}
          {query.trim() === "" && (
            <span className="ml-auto text-xs" style={{ color: "var(--muted)", opacity: 0.4 }}>
              Nejnovější
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
