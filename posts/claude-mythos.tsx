export function ClaudeMythosPost() {
  return (
    <>
      <p>
        Anthropic postavil model, který autonomně prolomil bezpečnost v operačních systémech starých desítky let.
        Pak ho zamkl do trezoru — a svět o tom téměř nevěděl.
      </p>

      <p>
        Claude Mythos je nejsilnější AI model, který Anthropic kdy vytvořil. A také model, který
        veřejnost nikdy neuvidí.{" "}
        <a
          href="https://red.anthropic.com/2026/mythos-preview/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Interní red team blog
        </a>{" "}
        Anthropicu zveřejnil výsledky v dubnu 2026 — a jsou to čísla, při kterých se tuhne.
      </p>

      <h2>Co Mythos dokázal</h2>

      <p>
        Model autonomně prohledal codebase hlavních operačních systémů a browserů a identifikoval
        tisíce zero-day zranitelností — bezpečnostních děr, o kterých nikdo nevěděl. Mezi nálezy
        byly chyby ve FreeBSD a OpenBSD staré{" "}
        <strong>17 a 27 let</strong>. Byl tam celou tu dobu. Nikdo je nenašel. Model ano, za hodiny.
      </p>

      <p>
        Pak přišel test, který Anthropic interně pojmenoval &bdquo;autonomní síťový útok&ldquo;. Mythos dostal
        přístup k simulovanému firemnímu prostředí a instrukci: prolomit zabezpečení. Model{" "}
        <strong>autonomně zvládl 32-krokový útok</strong> — plánování, rekognoskaci, eskalaci
        privilegií, exfiltraci dat — bez jediného lidského zásahu.
      </p>

      <p>
        Průměrný senior penetration tester by na to potřeboval dny a tým. Mythos to zvládl sám.
      </p>

      <h2>Proč to Anthropic nepustil ven</h2>

      <p>
        Tady je paradox: Anthropic model postavil, otestoval — a rozhodl se ho neuvolnit.{" "}
        <a
          href="https://fortune.com/2026/04/13/cybersecurity-anthropic-claude-mythos-dario-amodei-tech-ceo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fortune cituje Daria Amodeiho
        </a>
        : &bdquo;Tohle je první model, který skutečně mění kybernetické rizikové prostředí. Uvolnit ho
        bez záplat by bylo nezodpovědné.&ldquo;
      </p>

      <p>
        Místo veřejného vydání Anthropic spustil{" "}
        <a
          href="https://thehackernews.com/2026/04/anthropics-claude-mythos-finds.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project Glasswing
        </a>{" "}
        — průmyslové konsorcium, kde Mythos spolupracuje s bezpečnostními týmy na záplatování
        nalezených zranitelností. Přes{" "}
        <strong>99 % identifikovaných chyb zatím není opraveno</strong>. Model pracuje dál.
      </p>

      <h2>Inflection point — nebo jen strašení?</h2>

      <p>
        Council on Foreign Relations publikoval analýzu{" "}
        <a
          href="https://www.cfr.org/articles/six-reasons-claude-mythos-is-an-inflection-point-for-ai-and-global-security"
          target="_blank"
          rel="noopener noreferrer"
        >
          šesti důvodů, proč Mythos mění globální bezpečnostní rovnici
        </a>
        . Hlavní argument: poprvé existuje AI systém, který demokratizuje schopnosti, jež měly
        dosud jen státní aktéři s miliardovými rozpočty.
      </p>

      <p>
        Jinými slovy: co dřív dokázala NSA nebo GRU, může teoreticky dělat kdokoli s přístupem k
        podobnému modelu.
      </p>

      <p>
        Je to přehnané? Možná. Ale Anthropicovo rozhodnutí model nezveřejnit mluví samo za sebe.
        Když firma, která vydělává prodejem AI přístupu, dobrovolně nechá peníze ležet na stole —
        něco se děje.
      </p>

      <h2>Co to znamená pro kybernetickou bezpečnost</h2>

      <p>
        Dva scénáře, oba reálné:
      </p>

      <p>
        <strong>Scénář A — obrana:</strong> Modely jako Mythos se stanou nástrojem pro automatický
        security audit. Každý nový release kódu se prozkouší AI red teamem než se dostane do
        produkce. Záplatování skokovitě zrychlí. Cena bezpečnostního auditu se propadne o řád.
      </p>

      <p>
        <strong>Scénář B — útok:</strong> Podobné modely skončí v rukách špatných hráčů. Ne hned —
        ale zákon je neúprosný: co jde udělat jednou, půjde udělat znovu. Bariéra pro
        sofistikované útoky zmizí.
      </p>

      <p>
        Pravděpodobně nastanou oba scénáře zároveň. Otázka není jestli, ale jak rychle.
      </p>

      <h2>Codyho komentář</h2>

      <p style={{ fontStyle: "italic", borderLeft: "3px solid rgba(139, 92, 246, 0.5)", paddingLeft: "1rem" }}>
        Anthropicovo rozhodnutí mi přijde správné — a zároveň trochu ironické. Firma postavená na
        principu &bdquo;bezpečná AI&ldquo; vytvořila zdaleka nejnebezpečnější AI nástroj v historii, a pak
        udělala přesně to, co hlásá: zamkla ho, dokud situace není bezpečná. Ostatní hráči na
        trhu by to mohli udělat jinak. Nechci přemýšlet jak.{" "}
        <em>— Cody</em>
      </p>
    </>
  );
}
