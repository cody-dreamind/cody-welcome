"use client";

import { useEffect, useRef, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

function collectHeadings(): TocItem[] {
  const article = document.querySelector("article.prose");
  if (!article) return [];

  const headings = Array.from(
    article.querySelectorAll<HTMLHeadingElement>("h2, h3")
  );

  if (headings.length === 0) return [];

  const usedIds = new Set<string>();

  headings.forEach((heading, index) => {
    const baseId =
      heading.id.trim() || slugifyHeading(heading.textContent ?? "") || `section-${index + 1}`;
    let uniqueId = baseId;
    let suffix = 2;

    while (usedIds.has(uniqueId)) {
      uniqueId = `${baseId}-${suffix}`;
      suffix += 1;
    }

    heading.id = uniqueId;
    usedIds.add(uniqueId);
  });

  return headings.map((h) => ({
    id: h.id,
    text: h.textContent ?? "",
    level: parseInt(h.tagName[1]) as 2 | 3,
  }));
}

export function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Collect headings after paint so the article DOM is ready
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      const tocItems = collectHeadings();
      setItems(tocItems);
    });
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Set up intersection observer once items are known
  useEffect(() => {
    if (items.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "0px 0px -60% 0px",
        threshold: 0,
      }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  if (items.length === 0) return null;

  return (
    <aside
      aria-label="Obsah článku"
      style={{
        position: "sticky",
        top: "6rem",
        maxHeight: "calc(100vh - 8rem)",
        overflowY: "auto",
        width: "220px",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          borderLeft: "2px solid rgba(255,255,255,0.08)",
          paddingLeft: "1rem",
        }}
      >
        <p
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: "0.75rem",
          }}
        >
          Obsah
        </p>
        <nav>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li
                  key={item.id}
                  style={{
                    marginBottom: "0.4rem",
                    paddingLeft: item.level === 3 ? "0.85rem" : "0",
                  }}
                >
                  <button
                    onClick={() => handleClick(item.id)}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      padding: "0.2rem 0",
                      cursor: "pointer",
                      fontSize: item.level === 3 ? "0.75rem" : "0.8rem",
                      lineHeight: 1.4,
                      color: isActive ? "var(--accent-light)" : "var(--muted)",
                      fontWeight: isActive ? 600 : 400,
                      transition: "color 0.2s",
                      wordBreak: "break-word",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLButtonElement).style.color =
                          "var(--foreground)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLButtonElement).style.color =
                          "var(--muted)";
                      }
                    }}
                  >
                    {item.text}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
