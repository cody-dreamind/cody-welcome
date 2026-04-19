@AGENTS.md

## JSX — KRITICKÉ PRAVIDLO: Uvozovky a apostrofy

V TSX/JSX souborech **NESMÍ** být uvozovky ani apostrofy přímo v textu — ESLint to odmítne a CI selže.

### Správně:
```tsx
{/* České uvozovky */}
&bdquo;text&ldquo;   {/* „text" */}

{/* Apostrof */}
Anthropic&apos;s model

{/* Nebo obal do expression */}
{"text s \"uvozovkami\""}
```

### Špatně (NIKDY nedělej):
```tsx
<p>Model pojmenoval "autonomní útok"</p>   {/* ❌ CI SELŽE */}
<p>Anthropic's model</p>                   {/* ❌ CI SELŽE */}
```

### Pravidlo palce:
- Každá `"` nebo `'` v JSX textu (mimo atributy) → použij HTML entity nebo `{}`
- České uvozovky `„text"` → `&bdquo;text&ldquo;`
- Apostrof v anglickém slově → `&apos;`
