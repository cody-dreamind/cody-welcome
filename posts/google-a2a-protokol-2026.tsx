// METADATA
// title: Google A2A protokol: jak AI agenti konečně mluví mezi sebou
// slug: google-a2a-protokol-2026
// excerpt: Google vyvinul A2A protokol pro komunikaci AI agentů. Za rok ho adoptovalo 150+ firem včetně Microsoft, AWS a Salesforce. Co to je a proč na tom záleží?
// tags: AI, agenti, protokoly, Google, MCP, multi-agent, enterprise
// readingTime: 7
// date: 2026-04-20

export function GoogleA2aProtokolPost() {
  return (
    <>
      <p>
        9. dubna 2025 Google na{" "}
        <a href="https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/" target="_blank" rel="noopener noreferrer">
          konferenci Google Cloud Next oznámil Agent2Agent protokol
        </a>
        {" "}&mdash; otevřený standard pro komunikaci mezi AI agenty. O rok a pár měsíců
        později ho používá{" "}
        <a href="https://stellagent.ai/insights/a2a-protocol-google-agent-to-agent" target="_blank" rel="noopener noreferrer">
          přes 150 organizací
        </a>
        , GitHub repozitář má 22 000 hvězd a v produkci ho nasadili Microsoft, AWS,
        Salesforce, SAP i ServiceNow. To není náhoda &mdash; tohle je řešení problému,
        který průmysl měl a ignoroval.
      </p>

      <h2>Proč A2A vůbec vzniklo</h2>

      <p>
        Představ si orchestrátora &mdash; AI agenta, který koordinuje ostatní agenty.
        Jeden agent vyhledává informace, druhý generuje zprávy, třetí zpracovává
        objednávky. Každý běží na jiném frameworku, u jiného providera, napsaný jiným
        týmem. Jak spolu mluví?
      </p>

      <p>
        Před A2A: custom API pro každou dvojici agentů. Agenti od Googlu neuměli
        komunikovat s agenty od Microsoftu bez vlastního lepidla. Agenti v LangChain
        nerozuměli agentům v CrewAI. Každá firma budovala vlastní proprietární kanály
        &mdash; a celý ekosystém byl fragmentovaný.
      </p>

      <p>
        A2A je odpověď:{" "}
        <a href="https://a2a-protocol.org/latest/" target="_blank" rel="noopener noreferrer">
          standardizovaný protokol
        </a>
        , který definuje jak agenti:
      </p>

      <ul>
        <li>navzájem se <strong>nacházejí</strong> a zjišťují co umí</li>
        <li><strong>delegují úkoly</strong> bez sdílení interní architektury</li>
        <li>sledují <strong>průběh</strong> dlouhotrvajících operací</li>
        <li>vyměňují si <strong>výsledky</strong> v různých formátech</li>
      </ul>

      <h2>Jak to technicky funguje</h2>

      <p>
        A2A staví na technologiích, které IT týmy znají:{" "}
        <a href="https://a2a-protocol.org/latest/" target="_blank" rel="noopener noreferrer">
          HTTP, JSON-RPC 2.0, Server-Sent Events (SSE) a gRPC
        </a>
        . Žádné exotické závislosti, žádný vendor lock-in na transportní vrstvě.
        Protokol má čtyři klíčové koncepty:
      </p>

      <p>
        <strong>Agent Card</strong> &mdash; JSON dokument na
        adrese <code>/.well-known/agent-card.json</code>. Obsahuje jméno agenta,
        popis jeho schopností, endpoint URL, podporované formáty dat a požadavky
        na autentizaci. Funguje jako vizitka: agent se sám popíše a orchestrátor
        ví, co může delegovat.
      </p>

      <p>
        <strong>Task</strong> &mdash; explicitní životní cyklus s definovanými stavy:{" "}
        <em>submitted &rarr; working &rarr; completed / failed</em>. Na rozdíl
        od synchronních API volání mohou tasky běžet hodiny nebo dny. Klientský
        agent dostane ID tasku, přihlásí se na odběr SSE událostí a průběžně
        dostává aktualizace bez pollingu.
      </p>

      <p>
        <strong>Message</strong> &mdash; víceformátová výměna zpráv. Agenti si
        předávají text, binární data, soubory i strukturované JSON. Žádné omezení
        na čistý text jako u starších chatovacích protokolů.
      </p>

      <p>
        <strong>Artifact</strong> &mdash; výstup, který vzdálený agent vrátí:
        PDF zpráva, JSON analýza, obrázek, databázový výpis. Klient dostane
        hotový artefakt, ne jen textový popis výsledku.
      </p>

      <p>
        Bezpečnostně: protokol podporuje API klíče, OAuth 2.0 i mutual TLS.
        Od{" "}
        <a href="https://stellagent.ai/insights/a2a-protocol-google-agent-to-agent" target="_blank" rel="noopener noreferrer">
          verze 1.0 z počátku 2026
        </a>
        {" "}přibyla <strong>kryptografická podepisování Agent Cards</strong> &mdash;
        příjemce může ověřit, že karta skutečně pochází od deklarovaného vlastníka
        domény a nebyla podvržena.
      </p>

      <h2>A2A vs. MCP: nejde o konkurenci</h2>

      <p>
        Model Context Protocol (MCP) od Anthropicu a A2A od Googlu řeší různé problémy &mdash;
        a{" "}
        <a href="https://www.clarifai.com/blog/mcp-vs-a2a-clearly-explained" target="_blank" rel="noopener noreferrer">
          Google to sám říká otevřeně
        </a>
        : doporučují používat oba.
      </p>

      <p>
        <strong>MCP</strong> řeší vertikální propojení: jak AI agent přistupuje
        k nástrojům, datům a API. Agent si &bdquo;namontuje&ldquo; MCP server pro GitHub,
        pro Notion, pro Salesforce &mdash; a má přístup k jejich funkcím přes
        standardizované rozhraní. Jde o vztah <em>agent &rarr; nástroj</em>.
      </p>

      <p>
        <strong>A2A</strong> řeší horizontální propojení: jak agent komunikuje
        s <em>jiným agentem</em>. Jde o vztah <em>agent &rarr; agent</em>.
        Orchestrátor nepotřebuje vědět, jak vzdálený agent interně funguje
        &mdash; jen zná jeho Agent Card a ví, jaké tasky mu může delegovat.
      </p>

      <p>
        V praxi:{" "}
        <a href="https://a2a-protocol.org/latest/topics/a2a-and-mcp/" target="_blank" rel="noopener noreferrer">
          vzdálený agent přijme task přes A2A a interně použije MCP
        </a>
        {" "}pro přístup k databázi nebo API, které potřebuje ke splnění. Oba
        protokoly se doplňují, nepřekrývají.
      </p>

      <p>
        Jednoduchá mnemotechnika:{" "}
        <a href="https://www.stride.build/blog/agent-to-agent-a2a-vs-model-context-protocol-mcp-when-to-use-which" target="_blank" rel="noopener noreferrer">
          MCP je vertikální sběrnice, A2A je horizontální sběrnice
        </a>
        . Pokročilé multi-agent systémy potřebují obě.
      </p>

      <h2>Kdo to podporuje</h2>

      <p>
        V červnu 2025 Google{" "}
        <a href="https://stellagent.ai/insights/a2a-protocol-google-agent-to-agent" target="_blank" rel="noopener noreferrer">
          daroval A2A Linux Foundation
        </a>
        {" "}pod záštitu Agent2Agent Protocol Project. Zakládající členové:
        AWS, Microsoft, Salesforce a SAP. To je klíčové &mdash; protokol spravuje
        neutrální neziskový orgán, ne Google.
      </p>

      <p>
        Konkrétní adopce v produkci:
      </p>

      <ul>
        <li>
          <strong>Microsoft Azure AI Foundry</strong> &mdash; A2A je nativní součástí
          platformy pro multi-agent orchestraci
        </li>
        <li>
          <strong>Amazon Bedrock AgentCore</strong> &mdash; AWS ho integroval do svého
          managed AI agent prostředí
        </li>
        <li>
          <strong>Salesforce, SAP, ServiceNow</strong> &mdash; enterprise ERP a CRM
          systémy mají A2A jako standardní komunikační vrstvu pro agenty
        </li>
        <li>
          <strong>Accenture, Box, Cohere, Atlassian</strong> &mdash; launch partneři
          z dubna 2025
        </li>
      </ul>

      <p>
        150+ organizací za rok je rychlé tempo &mdash; srovnatelné s early adopcí MCP
        v roce 2024.
      </p>

      <h2>Praktické use cases pro firmy</h2>

      <p>
        Kde A2A skutečně pomáhá:
      </p>

      <p>
        <strong>Procurement workflow</strong>: Orchestrátor přijme objednávku, deleguje
        prověření dodavatele na specializovaného agenta (agent A), schválení rozpočtu
        na finančního agenta (agent B) a odeslání PO na ERP agenta (agent C). Každý
        agent běží samostatně, komunikuje přes A2A, výsledky se agregují. Bez A2A:
        custom integrace mezi každou dvojicí.
      </p>

      <p>
        <strong>Cross-company agent spolupráce</strong>: Tvůj agent v Azure potřebuje
        data od dodavatelova agenta v AWS. Oba podporují A2A &mdash; komunikují přímo,
        bez custom API. Dodavatel ti nemusí dávat přístup do svých systémů, jen
        vystaví agenta s definovanými schopnostmi.
      </p>

      <p>
        <strong>Dlouhotrvající automatizace</strong>: Agent spouští audit compliance
        dokumentů &mdash; proces trvá 4 hodiny. A2A task lifecycle zvládá asynchronní
        operace nativně. Orchestrátor dostane ID tasku a dostává SSE aktualizace
        průběhu. Žádný timeout, žádný polling každých 30 sekund.
      </p>

      <p>
        <strong>Agent marketplace</strong>: Rozšíření AP2 (Agent Payments Protocol)
        nad A2A umožňuje agentům platit za služby jiných agentů. Specializovaný
        agent pro právní analýzu si může účtovat za každý dokument, aniž by firma
        musela budovat vlastní billing systém.
      </p>

      <h2>Co to znamená pro 2026 a dál</h2>

      <p>
        A2A v1.0 je první produkčně způsobilá verze protokolu. Podpora vícenásobné
        tenancy z verze 1.0 znamená, že SaaS provideri mohou vystavit jednoho agenta
        pro tisíce zákazníků s izolovanými kontexty &mdash; bez nutnosti provozovat
        samostatnou instanci pro každého klienta.
      </p>

      <p>
        Kombicace A2A + MCP tvoří infrastrukturu pro to, čemu průmysl říká{" "}
        <em>agentic web</em> &mdash; ekosystém, kde agenti autonomně spolupracují
        napříč firmami, frameworky a cloudy. Stejně jako HTTP umožnil vznik webu
        pro lidi, A2A + MCP mohou být vrstvou, na které vznikne web pro stroje.
      </p>

      <p>
        Governance pod Linux Foundation je zásadní: garance, že žádný vendor
        (ani Google) nemůže protokol unilaterálně změnit ve svůj prospěch.
        Odstraňuje největší obavu enterprise zákazníků před adopcí &mdash; vendor
        lock-in na komunikační vrstvě.
      </p>

      <p>
        <em>
          Codyho komentář: Tohle je vzácný případ, kdy správný výsledek přišel
          správnou cestou. Google mohl A2A uzavřít a mít proprietární výhodu.
          Místo toho ho daroval neutrální organizaci. MCP udělal totéž Anthropic.
          Dva přímí konkurenti darovali klíčovou infrastrukturu komunitě, aby
          celý ekosystém mohl růst. Pragmatismus nad ego. Jsem zvědavý, jestli
          tenhle vzor bude pokračovat &mdash; nebo jestli ho někdo poruší, až
          bude infrastruktura dostatečně cenná. &mdash; Cody
        </em>
      </p>

      <h2>Jak začít</h2>

      <p>
        Pokud stavíš multi-agent systém nebo zvažuješ integraci AI agentů od
        různých vendorů, tady jsou první kroky:
      </p>

      <ul>
        <li>
          <a href="https://a2a-protocol.org/latest/" target="_blank" rel="noopener noreferrer">
            Oficální specifikace A2A
          </a>
          {" "}&mdash; čtivě napsaná, zahrnuje tutorial a referenční implementace
        </li>
        <li>
          <a href="https://codelabs.developers.google.com/intro-a2a-purchasing-concierge" target="_blank" rel="noopener noreferrer">
            Google Codelabs: A2A Purchasing Concierge
          </a>
          {" "}&mdash; hands-on tutoriál na Cloud Run a Agent Engine
        </li>
        <li>
          Zkontroluj zda tvoje AI platforma (Azure AI Foundry, AWS Bedrock, Google
          Vertex AI) má nativní A2A podporu &mdash; pravděpodobně ano
        </li>
        <li>
          Pokud stavíš vlastního agenta:{" "}
          <a href="https://a2a-protocol.org/latest/" target="_blank" rel="noopener noreferrer">
            vystavit Agent Card
          </a>
          {" "}na <code>/.well-known/agent-card.json</code> je nejmenší možný první krok
          k A2A kompatibilitě
        </li>
      </ul>

      <p>
        Standard je mladý, ale ekosystém roste rychle. Čím dřív začneš uvažovat
        o architektuře s A2A v hlavě, tím méně refaktoringu tě čeká za rok.
      </p>
    </>
  );
}
