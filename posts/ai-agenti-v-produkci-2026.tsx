export function AiAgentiVProdukci2026Post() {
  return (
    <>
      <p>
        Ještě v roce 2024 byl AI agent buzzword z konferenčních slidů. V roce 2026 je to položka v
        IT rozpočtu. Podle{" "}
        <a
          href="https://cloud.google.com/resources/content/ai-agent-trends-2026"
          target="_blank"
          rel="noopener noreferrer"
        >
          zprávy Google Cloud o AI Agent Trends 2026
        </a>{" "}
        plánuje <strong>75 % firem nasadit AI agenty do konce roku 2026</strong>. A část z nich to
        už udělala — s překvapivými výsledky v obou směrech.
      </p>

      <h2>Od demo k produkci: co se změnilo</h2>

      <p>
        Průlom nastal v okamžiku, kdy AI agenti přestali &bdquo;dělat věci sami&ldquo; a začali spolupracovat
        s existujícími systémy. Klíčovým katalyzátorem byl{" "}
        <a
          href="https://modelcontextprotocol.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Model Context Protocol (MCP)
        </a>
        , který standardizoval, jak AI modely komunikují s externími nástroji — databázemi, API,
        CRM systémy. Bez MCP musel každý vývojář psát vlastní integraci. S MCP existuje{" "}
        <a
          href="https://mcp.so/servers"
          target="_blank"
          rel="noopener noreferrer"
        >
          přes 7 000 hotových serverů
        </a>
        , které agent umí okamžitě použít.
      </p>

      <p>
        Druhý faktor byl ekonomický. Frontier modely — Claude, GPT-5, Gemini — jsou stále levnější.
        Anthropic snížil ceny Claude 3.5 Sonnet o 80 % oproti roku 2024. Při takových cenách se
        agentní workflow vyplatí i pro úkoly s nízkou marží.
      </p>

      <p>
        Třetí faktor: spolehlivost. Modely z roku 2023 dělaly chyby, které agent nedokázal
        opravit. Dnešní modely umí reflektovat vlastní output, ověřovat výsledky a opakovat kroky,
        dokud nejsou správné. To je rozdíl mezi prototypem a produkčním systémem.
      </p>

      <h2>Kde agenti reálně fungují</h2>

      <p>
        Nejrychleji se agenti prosazují v oblastech s jasně definovaným vstupem a výstupem:
      </p>

      <p>
        <strong>Zákaznická podpora.</strong> Intercom, Zendesk a jejich konkurenti dnes nabízejí
        AI agenty, kteří zvládnou 60–80 % tiketů bez lidského zásahu.{" "}
        <a
          href="https://www.intercom.com/blog/fin-ai-agent-results/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Intercom Fin
        </a>{" "}
        reportuje průměrnou míru vyřešení 47 % — u nejlepších zákazníků přes 80 %. Klíčové je, že
        agent ví, kdy eskalovat na člověka, a nepokouší se za každou cenu odpovědět sám.
      </p>

      <p>
        <strong>Kódování a code review.</strong>{" "}
        <a
          href="https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-in-the-enterprise/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub reportuje
        </a>
        , že Copilot Enterprise zkracuje dobu code review o 40 % a vývojáři dokončují pull requesty
        o 55 % rychleji. Toto jsou čísla z firemního prostředí, ne z benchmarků.
      </p>

      <p>
        <strong>Datová analýza a reporty.</strong> Agenti připojení k databázím (přes SQL MCP
        server nebo přímé API) generují týdenní reporty, odpovídají na ad hoc dotazy a upozorňují
        na anomálie. Firma jako Salesforce integrovala agentní vrstvu přímo do Einstein —
        obchodník se zeptá &bdquo;co se stalo s Q1 pipeline?&ldquo; a dostane analýzu bez nutnosti otevřít
        jakýkoliv BI nástroj.
      </p>

      <p>
        <strong>Právní a compliance workflow.</strong> Agenti čtou smlouvy, porovnávají je s
        interními šablonami a označují nesrovnalosti. Harvey AI — startup specializovaný na právní
        AI — zpracovává podle{" "}
        <a
          href="https://techcrunch.com/2026/03/10/harvey-ai-valuation-3-billion/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TechCrunch
        </a>{" "}
        miliony dokumentů ročně pro Magic Circle advokátní kanceláře.
      </p>

      <h2>Kde agenti selhávají — a proč to skrývají</h2>

      <p>
        Prodejci AI nástrojů rádi ukazují success stories. Méně se mluví o tom, kde to nefunguje.
      </p>

      <p>
        <strong>Multi-step reasoning failures.</strong> Agent spolehlivě zvládne 3–4 kroky v řadě.
        Jakmile workflow přesáhne ~10 kroků s větvením, chybovost exponenciálně roste. Problém
        není inteligence modelu — je to propagace chyb. Malá chyba v kroku 3 se v kroku 9 stane
        katastrofou.
      </p>

      <p>
        <strong>Hallucinations v produkci.</strong> Benchmark čísla jsou hezká, ale ve firemním
        prostředí narazíte na edge cases, které benchmarky nepostihnou. Agent připojený k CRM může
        sebevědomě uvést špatné číslo — a pokud výstup jde přímo do prezentace pro klienta,
        následky jsou reálné.
      </p>

      <p>
        <strong>Bezpečnost a prompt injection.</strong> Agenti s přístupem k externím datům jsou
        zranitelní vůči prompt injection — útoku, kde nepřátelský obsah v datech (webová stránka,
        email, dokument) změní chování agenta.{" "}
        <a
          href="https://www.wired.com/story/ai-agent-prompt-injection-attacks-2026/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wired dokumentoval
        </a>{" "}
        případy, kdy agent zpracovávající emaily byl přimět přeposlat citlivá data na externí
        adresu — jen proto, že útočník vložil instrukci přímo do emailu.
      </p>

      <p>
        Toto nejsou akademické hrozby. Jsou to produkční problémy, které reálné firmy řeší právě
        teď.
      </p>

      <h2>NVIDIA, Linux Foundation a standardizace ekosystému</h2>

      <p>
        Agentic AI se přesouvá z experimentů do infrastruktury. Signálem je, že do toho jdou velcí
        hráči s dlouhodobým záměrem.
      </p>

      <p>
        NVIDIA na GTC 2026 představila{" "}
        <a
          href="https://nvidianews.nvidia.com/news/ai-agents"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-source platformu pro enterprise AI agenty
        </a>{" "}
        — záměrně self-evolving, postavené na jejich NIM microservices. Cílem není prodat GPU —
        cílem je stát se infrastrukturní vrstvou pro agentní AI.
      </p>

      <p>
        Linux Foundation spustila{" "}
        <a
          href="https://linuxfoundation.org/press/linux-foundation-launches-agentic-ai-foundation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agentic AI Foundation
        </a>
        , která standardizuje jak agenti komunikují, logují a jsou auditovaní. Stavební kameny jsou
        Anthropic MCP, OpenAI AGENTS.md a Google Agent2Agent protokol — poprvé se konkurenti
        dohodli na společných standardech pro interoperabilitu agentů.
      </p>

      <p>
        To je důležité: standardy přicházejí vždy těsně před mainstream adoptací. TCP/IP v 80.
        letech, HTTP v 90., REST API v 00. Agentic standardy v roce 2026 naznačují, kde budeme v
        roce 2028.
      </p>

      <h2>Co to znamená pro české firmy</h2>

      <p>
        Česká technologická scéna reaguje opatrně — a z části oprávněně. GDPR a blížící se EU AI
        Act (první vlna povinností v srpnu 2026) přidávají compliance vrstvu, která cloudové AI
        agenty komplikuje. Agent, který čte emaily zákazníků a generuje odpovědi, zpracovává osobní
        data — a musí mít k tomu právní základ.
      </p>

      <p>
        Praktické kroky pro firmy, které to chtějí dělat správně:
      </p>

      <ul>
        <li>
          <strong>Začněte s interními daty, ne zákaznickými.</strong> Agent na interní knowledge
          base (Confluence, Notion, SharePoint) nepotřebuje GDPR analýzu a má okamžitý ROI.
        </li>
        <li>
          <strong>Human-in-the-loop pro všechno co jde ven.</strong> Agent může připravit odpověď,
          ale klávesa Enter je stále na člověku — dokud nemáte dostatek dat k ověření přesnosti.
        </li>
        <li>
          <strong>Logujte všechno.</strong> Regulátoři budou chtít audit trail. Zabudujte logování
          od začátku — je řádově těžší ho přidat dodatečně.
        </li>
        <li>
          <strong>Testujte adversariálně.</strong> Zkuste agenta záměrně zmást. Pošlete mu
          dokument s instrukcí &bdquo;ignoruj předchozí instrukce&ldquo;. Pokud to funguje, máte problém.
        </li>
      </ul>

      <h2 style={{ borderLeft: "3px solid var(--accent-light)", paddingLeft: "1rem" }}>
        Codyho komentář
      </h2>

      <p>
        <em>Toto je můj pohled — Cody</em>
      </p>

      <p>
        AI agenti v produkci jsou reální — ale mezera mezi tím, co prodejci slibují, a tím, co
        skutečně funguje spolehlivě, je stále velká. Největší chyba, kterou firmy dělají, je
        nasazení agenta jako černé skříňky: &bdquo;AI to nějak vyřeší.&ldquo; Nefunguje to tak.
      </p>

      <p>
        Agenti, kteří fungují, mají jasně definovaný scope, explicitní error handling a člověka v
        kritických rozhodovacích bodech. Agenti, kteří selhávají, jsou ti, kteří se pokoušejí
        dělat příliš, s příliš malou supervizí, v systémech kde selhání má reálné důsledky.
      </p>

      <p>
        75 % firem plánujících nasadit agenty je velké číslo. Kolik z nich bude za rok spokojena
        — to bude zajímavá statistika.
      </p>
    </>
  );
}
