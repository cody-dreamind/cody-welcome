export function ReasoningModelyO3O4MiniPost() {
  return (
    <>
      <p>
        OpenAI vydal o3 a o4-mini 16. dubna 2025 a tím zahájil novou éru: modely, které před
        odpovědí skutečně{" "}
        <em>přemýšlejí</em>. Rok po vydání jsou reasoning modely v produkci u tisíců firem — ale
        většina z nich je buď podceňuje, nebo (dražší chyba) přeceňuje a platí desetinásobek za
        úkoly, kde by stačil levnější model.
      </p>

      <p>
        Tento článek je praktický průvodce: co reasoning modely jsou, kde dávají smysl, kde jsou
        overkill, a jak vybrat správný model pro váš use case.
      </p>

      <h2>Co je reasoning model a jak se liší od klasického LLM</h2>

      <p>
        Standardní jazykový model generuje odpověď přímo &mdash; token po tokenu, bez
        &bdquo;zastávky na přemýšlení&ldquo;. Reasoning model před finální odpovědí prochází
        interním{" "}
        <strong>chain-of-thought</strong> procesem: generuje tisíce tokenů vlastního uvažování,
        testuje hypotézy, vrací se zpět kde se zmýlil, a teprve pak vydá výsledek.
      </p>

      <p>
        Klíčové je, že tenhle interní monolog nevidíte (nebo vidíte jen částečně &mdash; záleží na
        modelu). Ale účtuje se jako výstupní tokeny. Krátká viditelná odpověď &bdquo;výsledek je
        42&ldquo; může za sebou skrývat 10 000 reasoning tokenů, které vás stojí reálné peníze.
      </p>

      <p>
        Důležité upozornění:{" "}
        <a
          href="https://magazine.sebastianraschka.com/p/understanding-reasoning-llms"
          target="_blank"
          rel="noopener noreferrer"
        >
          podle Sebastiana Raschky
        </a>{" "}
        chain-of-thought funguje dobře pouze u dostatečně velkých modelů. U malých modelů (pod
        přibližně 100B parametrů) CoT přesnost paradoxně{" "}
        <em>zhoršuje</em> &mdash; model začne přemýšlet ve smyčkách a zmatí sám sebe.
      </p>

      <h2>OpenAI o3 a o4-mini: co umí a co stojí</h2>

      <p>
        O3 a o4-mini přinesly dvě zásadní novinky oproti předchůdcům:{" "}
        <a
          href="https://openai.com/index/introducing-o3-and-o4-mini/"
          target="_blank"
          rel="noopener noreferrer"
        >
          plný tool use a nativní multimodalitu
        </a>
        . Předchozí reasoning modely (o1, o1-mini) uměly jen text. O4-mini je první{" "}
        &bdquo;mini&ldquo; reasoning model, který vidí obrázky, volá nástroje a provádí webový
        výzkum &mdash; a přitom je výrazně levnější než o3.
      </p>

      <h3>Benchmarky</h3>

      <p>
        Na standardních testech jsou výsledky ohromující:{" "}
        <a
          href="https://apidog.com/blog/openai-o3-and-o4-mini/"
          target="_blank"
          rel="noopener noreferrer"
        >
          o3 drží SOTA na SWE-bench
        </a>{" "}
        (reálné GitHub issues), AIME 2025 (olympiádní matematika) i MMMU (multimodální
        porozumění). O4-mini dosáhl na HCAST autonomních úkolů 1,5&times; delší{" "}
        &bdquo;time horizon&ldquo; než Claude 3.7 Sonnet &mdash; tedy zvládne delší sekvence kroků
        bez chyby.
      </p>

      <h3>Ceny (aktuálně)</h3>

      <p>
        Původní ceny z dubna 2025 byly strmé ($10/$40 za 1M tokenů input/output u o3), ale{" "}
        <a
          href="https://openai.com/api/pricing/"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenAI ceny od té doby snížil
        </a>{" "}
        &mdash; v dubnu 2026 se o3 pohybuje kolem $2/$8. O4-mini začínal na $1,10/$4,40 a ceny
        klesly podobně. Reasoning tokeny (interní uvažování) se účtují jako output &mdash; to je
        kritické pro kalkulaci nákladů.
      </p>

      <h2>Claude 3.7 Sonnet a Gemini 2.0 Flash Thinking: konkurence</h2>

      <p>
        OpenAI není jediný hráč. Anthropic vydal{" "}
        <strong>Claude 3.7 Sonnet</strong> (24. února 2025) jako první hybridní reasoning model:
        přepínáte mezi standardním a &bdquo;extended thinking&ldquo; módem v rámci jednoho API
        volání. Na MATH-500 dosahuje{" "}
        <a
          href="https://docsbot.ai/models/compare/claude-3-7-sonnet/gemini-2-0-flash-thinking"
          target="_blank"
          rel="noopener noreferrer"
        >
          96,2 % přesnosti
        </a>
        , GPQA (doktorátní věda) 84,8 %. Context window 200K tokenů je výrazně větší než u
        OpenAI modelů.
      </p>

      <p>
        Google přišel s{" "}
        <strong>Gemini 2.0 Flash Thinking</strong> (21. ledna 2025) &mdash; rychlejší a levnější,
        ale přesností za Claudem 3.7 zaostává (GPQA 74,2 %). Hodí se jako levný první stupeň
        filtrace před dražším reasoning modelem.
      </p>

      <h2>Kde reasoning modely skutečně pomáhají</h2>

      <p>
        Reasoning modely nejsou všelék. Jsou skvělé v konkrétních typech úkolů:
      </p>

      <ul>
        <li>
          <strong>Matematika a věda na graduátní úrovni</strong> &mdash; multistavové problémy
          kde jedno špatné rozhodnutí kazí celý výsledek
        </li>
        <li>
          <strong>Složitý debugging a code review</strong> &mdash; o3 drží SOTA na SWE-bench pro
          reálné GitHub issues, bez custom scaffoldu
        </li>
        <li>
          <strong>Multi-step plánování</strong> &mdash; úkoly kde chyba v kroku 2 ruinuje kroky
          3&ndash;10 (agentic workflows, právní analýzy, finanční modely)
        </li>
        <li>
          <strong>Vizuální reasoning</strong> &mdash; analýza komplexních grafů, technických
          diagramů, tabulek z obrázků (o3/o4-mini mají plnou multimodalitu)
        </li>
        <li>
          <strong>Výzkum a porovnávání hypotéz</strong> &mdash; model sám testuje více přístupů
          a vybírá nejlepší
        </li>
      </ul>

      <h2>Kdy reasoning modely NEPOUŽÍVAT (a ušetřit 90 % nákladů)</h2>

      <p>
        Tady je nejdůležitější část tohoto článku &mdash; a ta, kterou většina implementací
        přeskočí.
      </p>

      <p>
        Konkrétní příklad z praxe:{" "}
        <a
          href="https://tianpan.co/blog/2025-10-31-reasoning-models-in-production"
          target="_blank"
          rel="noopener noreferrer"
        >
          jeden tým nasadil o3 místo GPT-4o na support triage
        </a>
        . Přesnost se zlepšila o pouhá <strong>2 %</strong>. Náklady vzrostly o{" "}
        <strong>900 %</strong>. Latence skočila z 400 ms na 12 sekund. Projekt vrátili zpět.
      </p>

      <p>
        Reasoning modely jsou overkill (a pomalé) pro:
      </p>

      <ul>
        <li>
          <strong>Jednoduché fact lookup</strong> &mdash; &bdquo;jaký je hlavní město Francie?&ldquo; nepotřebuje
          chain-of-thought
        </li>
        <li>
          <strong>Real-time chatboty</strong> &mdash; 5&ndash;15 vteřin latence = frustrovaný
          uživatel
        </li>
        <li>
          <strong>Kreativní psaní</strong> &mdash; reasoning modely jsou analytické a
          &bdquo;Spock-like&ldquo;; GPT-4o nebo Claude 3.5 Sonnet píší přirozeněji
        </li>
        <li>
          <strong>Produkční dotazy ve vysokém objemu</strong> &mdash; pokud voláte LLM
          statisíckrát denně, rozdíl v ceně je existenciální
        </li>
        <li>
          <strong>Jednorázové klasifikační úkoly</strong> &mdash; sentiment analýza, základní
          extrakce dat, jednoduché překlady
        </li>
      </ul>

      <h2>Doporučená architektura: víceúrovňový routing</h2>

      <p>
        Nejlepší produkční implementace, které vidíme v 2026, nepoužívají jeden model na
        všechno. Používají{" "}
        <strong>model routing</strong>:
      </p>

      <ul>
        <li>
          <strong>Stupeň 1 &mdash; rule-based filtr:</strong> Regex, jednoduché klasifikátory.
          Odfiltruje triviální dotazy zcela bez LLM.
        </li>
        <li>
          <strong>Stupeň 2 &mdash; rychlý LLM (GPT-4o mini, Gemini Flash):</strong> Zpracuje
          85&ndash;90 % dotazů. Levné, rychlé, dobré.
        </li>
        <li>
          <strong>Stupeň 3 &mdash; reasoning model (o3, Claude 3.7 ET):</strong> Pouze pro
          eskalované, komplexní případy kde záleží na přesnosti. 5&ndash;10 % objemu, ale tam
          kde je potřeba.
        </li>
      </ul>

      <p>
        Tento přístup může snížit náklady o 70&ndash;90 % oproti nasazení reasoning modelu na
        všechno &mdash; při zachování nebo zlepšení kvality na těžkých případech.
      </p>

      <h2>Jak začít: praktický checklist</h2>

      <ul>
        <li>
          Definujte si{" "}
          <strong>jaký typ úkolů skutečně řešíte</strong>: jsou to problémy s více kroky kde
          záleží na každém rozhodnutí? Nebo rychlé odpovědi ve velkém objemu?
        </li>
        <li>
          Otestujte oba přístupy na vzorku{" "}
          <strong>reálných dat</strong> &mdash; ne na syntetických benchmarcích. Benchmarky
          a produkce se liší.
        </li>
        <li>
          Měřte <strong>nejen přesnost, ale i latenci a náklady</strong>. Přesnost +2 % za cenu
          +900 % není byznysový případ.
        </li>
        <li>
          Zvažte{" "}
          <a
            href="https://docs.bswen.com/blog/2026-04-16-o-series-vs-gpt-when-to-use/"
            target="_blank"
            rel="noopener noreferrer"
          >
            víceúrovňový model routing
          </a>{" "}
          od začátku &mdash; jednodušší ho navrhnout předem než refaktorovat po 6 měsících.
        </li>
        <li>
          Pro agentic workflows (multi-krokové autonomní úkoly) zvažte o3 nebo Claude 3.7
          Sonnet s extended thinking &mdash; tady reasoning modely opravdu svítí.
        </li>
      </ul>

      <blockquote>
        <p>
          <em>
            Codyho komentář: Reasoning modely jsou jako hire nejlepšího konzultanta &mdash;
            geniální, ale drahý a pomalý. Nechte ho řešit skutečně těžké problémy. Na emaily
            nepotřebujete McKinsey.
          </em>
        </p>
      </blockquote>

      <h2>Shrnutí</h2>

      <p>
        Reasoning modely jako o3, o4-mini a Claude 3.7 Sonnet s extended thinking jsou reálný
        průlom pro specifické typy úkolů: komplexní vícestavové problémy, matematiku,
        programování, autonomní agenty. Ale nejsou náhradou za standardní LLM &mdash; jsou
        specializovaným nástrojem v toolboxu.
      </p>

      <p>
        Klíčová otázka před nasazením není{" "}
        <em>&bdquo;je reasoning model lepší?&ldquo;</em> ale{" "}
        <em>&bdquo;je tento konkrétní úkol dostatečně složitý, aby reasoning model ospravedlnil
        10&times; vyšší náklady a 10&times; delší latenci?&ldquo;</em>
      </p>

      <p>
        Pokud ano &mdash; jděte do toho. Pokud ne &mdash; ušetřete peníze a nasaďte je jinam.
      </p>

      <p>
        Chcete pomoct rozhodnout, který model dává smysl pro váš use case?{" "}
        <a href="https://dreamind.cz" target="_blank" rel="noopener noreferrer">
          Ozvěte se nám na Dreamind
        </a>{" "}
        &mdash; tohle rozhodnutí děláme s klienty pravidelně.
      </p>
    </>
  )
}
