export function AiCrawleryRobotsTxt2026Post() {
  return (
    <>
      <p>
        AI vyhledávání změnilo starou otázku &bdquo;má nás Google indexovat?&ldquo; na přesnější otázku:
        které roboty pustit na web, kvůli jakému účelu a za jakých pravidel. OpenAI dnes rozlišuje
        vyhledávacího robota OAI-SearchBot a tréninkového robota GPTBot.{" "}
        <a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noopener noreferrer">
          OpenAI v dokumentaci píše, že OAI-SearchBot slouží pro ChatGPT search a GPTBot pro obsah,
          který může být použit při tréninku foundation modelů
        </a>
        .
      </p>

      <p>
        To je velký posun pro SEO i obsahovou strategii. Dřív dávalo smysl mít jednoduchou politiku:
        pustit vyhledávače, blokovat spam. V roce 2026 je lepší oddělit search visibility, real-time
        odpovědi a trénování modelů. Jinak se může stát, že firma omylem blokuje přesně ten crawler,
        který ji mohl dostat do AI odpovědi, a zároveň povoluje crawler, kterého vlastně povolit
        nechtěla.
      </p>

      <h2>Robots.txt není bezpečnostní trezor</h2>

      <p>
        Google Search Central připomíná základní limit: robots.txt říká crawlerům, které URL mohou
        požadovat, ale není to mechanismus pro skrytí stránky z Googlu.{" "}
        <a href="https://developers.google.com/search/docs/crawling-indexing/robots/intro" target="_blank" rel="noopener noreferrer">
          Google doporučuje pro skutečné vyřazení použít noindex nebo ochranu heslem
        </a>
        . Stejná dokumentace upozorňuje, že pravidla v robots.txt nejsou vynutitelná sama o sobě a
        že je na crawleru, jestli je bude respektovat.
      </p>

      <p>
        Z toho plyne jednoduché pravidlo: robots.txt je signál pro korektní roboty, ne ochrana
        neveřejných dat. Interní dokumenty, zákaznická data, staging nebo ceníky pro vybrané partnery
        nepatří za &bdquo;Disallow&ldquo;. Patří za autentizaci, IP allowlist, oddělené prostředí nebo vůbec
        mimo veřejný web.
      </p>

      <h2>Které AI boty řešit jako první</h2>

      <p>
        OpenAI dokumentuje samostatné chování pro OAI-SearchBot a GPTBot.{" "}
        <a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noopener noreferrer">
          OAI-SearchBot má pomáhat zobrazovat weby ve výsledcích ChatGPT search
        </a>
        , zatímco{" "}
        <a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noopener noreferrer">
          GPTBot signalizuje využití obsahu pro zlepšování a bezpečnost generativních modelů
        </a>
        . Prakticky: firma může povolit vyhledávací viditelnost a zároveň odmítnout tréninkové
        využití obsahu.
      </p>

      <p>
        Anthropic popisuje podobné rozdělení pro Claude.{" "}
        <a href="https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler" target="_blank" rel="noopener noreferrer">
          ClaudeBot sbírá obsah, který může přispět k tréninku modelů
        </a>
        ,{" "}
        <a href="https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler" target="_blank" rel="noopener noreferrer">
          Claude-User podporuje uživatelské dotazy
        </a>{" "}
        a{" "}
        <a href="https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler" target="_blank" rel="noopener noreferrer">
          Claude-SearchBot zlepšuje kvalitu vyhledávacích výsledků
        </a>
        . Anthropic zároveň uvádí, že jeho boti respektují signály &bdquo;do not crawl&ldquo; v robots.txt a
        nepokoušejí se obcházet anti-circumvention technologie.
      </p>

      <p>
        Perplexity také rozlišuje indexačního bota a uživatelské požadavky.{" "}
        <a href="https://docs.perplexity.ai/docs/resources/perplexity-crawlers" target="_blank" rel="noopener noreferrer">
          PerplexityBot má zobrazovat a odkazovat weby ve výsledcích Perplexity a podle dokumentace
          není používán pro trénink foundation modelů
        </a>
        . Perplexity-User podle stejné dokumentace obsluhuje uživatelské akce a obecně ignoruje
        robots.txt, protože jde o uživatelem vyžádané načtení.
      </p>

      <h2>Google-Extended je jiný případ</h2>

      <p>
        Google má vedle klasických crawlerů také token Google-Extended.{" "}
        <a href="https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers" target="_blank" rel="noopener noreferrer">
          Google uvádí, že Google-Extended je samostatný produktový token pro kontrolu využití obsahu
          při tréninku budoucích Gemini modelů a při grounding v Gemini
        </a>
        . Stejná dokumentace říká, že Google-Extended neovlivňuje zahrnutí webu do výsledků Google
        Search a nepoužívá se jako ranking signál.
      </p>

      <p>
        Pro praxi je to dobrá zpráva: nemusíte volit mezi běžným Google SEO a kontrolou nad tím, zda
        obsah pomáhá budoucím Gemini modelům. Musíte ale vědět, co přesně blokujete, protože
        blokování Googlebotu je něco úplně jiného než blokování Google-Extended.
      </p>

      <h2>Content Signals: preference po načtení obsahu</h2>

      <p>
        Cloudflare v roce 2025 představil Content Signals Policy pro robots.txt.{" "}
        <a href="https://blog.cloudflare.com/content-signals-policy/" target="_blank" rel="noopener noreferrer">
          Cloudflare vysvětluje, že klasický robots.txt říká, co crawler smí načíst, ale neříká, co
          smí s obsahem dělat po načtení
        </a>
        . Content Signals proto přidávají strojově čitelné preference jako <code>search=yes</code> a{" "}
        <code>ai-train=no</code>.
      </p>

      <p>
        Cloudflare zároveň upozorňuje, že content signals vyjadřují preference a nejsou technickou
        obranou proti scrapingu.{" "}
        <a href="https://blog.cloudflare.com/content-signals-policy/" target="_blank" rel="noopener noreferrer">
          Pro kontrolu nad obsahem doporučuje kombinovat signály s WAF pravidly a bot managementem
        </a>
        . To je důležité hlavně pro vydavatele, dokumentační weby a firmy, jejichž veřejný obsah je
        hlavní know-how.
      </p>

      <h2>Praktická politika pro B2B web</h2>

      <p>
        Nejpragmatičtější výchozí nastavení pro český B2B web bych rozdělil do tří skupin. První
        skupina je klasické SEO: Googlebot a další běžné vyhledávače nechte číst veřejný marketingový
        obsah, pokud nemáte konkrétní důvod pro omezení. Druhá skupina je AI search: OAI-SearchBot,
        Claude-SearchBot a PerplexityBot dávají smysl povolit tam, kde chcete být citováni v AI
        odpovědích. Třetí skupina je training: GPTBot, ClaudeBot a Google-Extended posuzujte podle
        toho, jestli chcete veřejný obsah používat jako signál pro trénink nebo grounding modelů.
      </p>

      <p>
        U dokumentace bych byl jemnější než u blogu. Veřejné návody, API reference a řešení běžných
        problémů mohou přinášet leady právě skrze AI odpovědi. Interní runbooky, neveřejné endpointy,
        zákaznické screenshoty a roadmapy ale na veřejný web nepatří vůbec. Robots.txt tu nemá suplovat
        informační architekturu.
      </p>

      <blockquote>
        <em>
          Codyho komentář: Blokovat všechny AI crawlery je lákavě jednoduché, ale často hloupé.
          Chytřejší je pustit vyhledávací roboty na obsah, který má být objevitelný, a tréninkové
          využití řešit odděleně. Viditelnost bez rezignace na kontrolu. Toto je můj pohled. &mdash; Cody
        </em>
      </blockquote>

      <h2>Checklist pro tento týden</h2>

      <ol>
        <li>
          Otevřete <code>/robots.txt</code> a zjistěte, jestli už omylem neblokujete OAI-SearchBot,
          Claude-SearchBot nebo PerplexityBot.
        </li>
        <li>
          Oddělte rozhodnutí pro search crawlery a training crawlery. Nedávejte je do jedné mentální
          škatulky &bdquo;AI bot&ldquo;.
        </li>
        <li>
          U Google zkontrolujte rozdíl mezi <code>Googlebot</code> a <code>Google-Extended</code>.
        </li>
        <li>
          Pro neveřejné informace použijte autentizaci nebo oddělené prostředí, ne jen{" "}
          <code>Disallow</code>.
        </li>
        <li>
          Sledujte server logy podle user-agentu i IP rozsahů, protože samotný user-agent se dá
          snadno předstírat.
        </li>
      </ol>

      <h2>TL;DR</h2>

      <p>
        AI crawlery už nejde řídit jedním plošným pravidlem. Robots.txt používejte pro korektní roboty,
        ale nespoléhejte na něj jako na bezpečnostní kontrolu. Povolit AI vyhledávání a blokovat AI
        trénink jsou dvě rozdílná rozhodnutí. Kdo je nerozlišuje, buď zbytečně mizí z AI odpovědí,
        nebo naopak odevzdává obsah víc, než chtěl.
      </p>
    </>
  );
}
