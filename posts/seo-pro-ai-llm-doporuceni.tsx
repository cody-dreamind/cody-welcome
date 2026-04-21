export function SeoProAiLlmDoporuceniPost() {
  return (
    <>
      <p>
        Klasické SEO se nemění v popel. Jen se nad ním staví nová vrstva. Google ve své oficiální
        dokumentaci píše, že pro AI Overviews a AI Mode neexistují žádné speciální technické
        požadavky navíc a že dál platí stejné SEO základy jako pro běžné vyhledávání.{" "}
        <a
          href="https://developers.google.com/search/docs/appearance/ai-features"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Search Central
        </a>{" "}
        zároveň upřesňuje, že stránka musí být indexovaná a způsobilá pro zobrazení snippetu, pokud
        se má objevit jako podpůrný odkaz v AI výsledcích.
      </p>

      <p>
        Zároveň ale nestačí staré &bdquo;buď první na keywordu&ldquo;. Microsoft v únoru 2026 spustil{" "}
        <a
          href="https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI Performance v Bing Webmaster Tools
        </a>{" "}
        a tím de facto potvrdil, že nová disciplína už existuje: nejde jen o modré odkazy, ale i o
        to, jestli je váš obsah citovaný v odpovědích Microsoft Copilotu a AI souhrnech Bingu.
        OpenAI říká totéž jinými slovy: ChatGPT Search odpovídá s{" "}
        <a
          href="https://openai.com/index/introducing-chatgpt-search/"
          target="_blank"
          rel="noopener noreferrer"
        >
          odkazy na relevantní webové zdroje
        </a>
        .
      </p>

      <p>
        Praktický problém je v tom, že AI odpovědi ukusují kliky. Ahrefs ve studii nad 300 000
        keywordy zjistil, že přítomnost Google AI Overview korelovala s{" "}
        <a
          href="https://ahrefs.com/blog/ai-overviews-reduce-clicks/"
          target="_blank"
          rel="noopener noreferrer"
        >
          o 34,5 % nižším CTR pro první organický výsledek
        </a>
        . Jinými slovy: pokud chcete růst organickou návštěvnost, nestačí řešit jen rank. Musíte
        řešit i to, jestli vás modely vytahují jako zdroj a doporučení.
      </p>

      <h2>Co je vlastně &bdquo;SEO pro AI&ldquo;</h2>

      <p>
        Nejlepší pracovní definice je tahle: nejde o nový meta tag ani tajný prompt pro roboty.
        Je to kombinace klasického SEO, silných entitních signálů, citovatelného formátu obsahu a
        opakovaného potvrzení vašeho brandu napříč webem. Microsoft to ve svém AI Performance
        článku popisuje velmi prakticky: citovaným stránkám pomáhá{" "}
        <a
          href="https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview"
          target="_blank"
          rel="noopener noreferrer"
        >
          hloubka, jasná struktura, FAQ, tabulky, důkazy a čerstvost
        </a>
        .
      </p>

      <p>
        Podobně Semrush ve své případové studii uvádí, že LLM viditelnost roste tam, kde informace o
        značce existují{" "}
        <a
          href="https://www.semrush.com/blog/llm-seeding/"
          target="_blank"
          rel="noopener noreferrer"
        >
          napříč více důvěryhodnými zdroji a v dobře parsovatelném formátu
        </a>
        . Samotný ranking podle nich nestačí. Důležitá je struktura, kontext a opakování stejného
        významu napříč webem.
      </p>

      <h2>1. Základ: být vůbec způsobilý pro citaci</h2>

      <h3>Crawl a indexace</h3>

      <p>
        Pokud stránka není dobře procházená a indexovaná, model ji těžko vytáhne jako zdroj. Google
        přímo píše, že pro AI features musí být stránka{" "}
        <a
          href="https://developers.google.com/search/docs/appearance/ai-features"
          target="_blank"
          rel="noopener noreferrer"
        >
          indexovaná a způsobilá pro snippet
        </a>
        . Základ tedy není sexy: `200 OK`, fungující `robots.txt`, sitemapa, interní prolinkování,
        canonical URL, textový obsah přístupný bez JS magie.
      </p>

      <p>
        Pro ChatGPT Search je navíc dobré explicitně povolit{" "}
        <a
          href="https://developers.openai.com/api/docs/bots"
          target="_blank"
          rel="noopener noreferrer"
        >
          `OAI-SearchBot`
        </a>
        . OpenAI v dokumentaci uvádí, že weby blokující `OAI-SearchBot` se nebudou zobrazovat v
        odpovědích ChatGPT Search, i když se ještě mohou objevit jako navigační odkazy. Zároveň je
        každé nastavení nezávislé: můžete povolit `OAI-SearchBot` a zároveň blokovat `GPTBot`, pokud
        nechcete tréninkové použití obsahu.
      </p>

      <h3>Snippet controls a extractability</h3>

      <p>
        Google také připomíná, že přístup AI features je navázaný na snippet controls. Pokud si
        příliš agresivně useknete preview pomocí `nosnippet` nebo `max-snippet:0`, omezujete tím i
        to, co může být použito v AI vrstvách vyhledávání. Detailně je to popsané v{" "}
        <a
          href="https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag"
          target="_blank"
          rel="noopener noreferrer"
        >
          dokumentaci robots meta tagů
        </a>
        .
      </p>

      <p>
        Tohle je častý omyl: firmy chtějí být &bdquo;v AI&ldquo;, ale zároveň omezí strojově
        čitelný obsah. U produktových a servisních stránek je lepší chránit citlivé části selektivně
        přes{" "}
        <a
          href="https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag"
          target="_blank"
          rel="noopener noreferrer"
        >
          `data-nosnippet`
        </a>
        , ne zabetonovat celý dokument.
      </p>

      <h3>Strukturovaná data a jasná identita stránky</h3>

      <p>
        Google sice říká, že pro AI Overviews není potřeba žádné speciální AI schema, ale zároveň
        doporučuje dál používat standardní{" "}
        <a
          href="https://developers.google.com/search/docs/appearance/structured-data/article"
          target="_blank"
          rel="noopener noreferrer"
        >
          `Article` / `BlogPosting`
        </a>{" "}
        a další relevantní structured data, protože pomáhají lépe pochopit titulek, obrázek,
        datum i autora. U článků Google silně doporučuje `author`, `author.url`, `datePublished`,
        `dateModified`, `headline` a reprezentativní obrázky.
      </p>

      <p>
        Pro LLM doporučení je to důležité hlavně proto, že modely potřebují rozlišit tři věci: kdo
        mluví, o čem stránka je a kdy byla naposledy aktualizovaná. Bez toho zůstáváte jen anonymní
        textová plocha.
      </p>

      <h2>2. Nejdůležitější signál: obsah, který se dá citovat</h2>

      <p>
        Google v dokumentaci k helpful content zdůrazňuje &bdquo;Who, How, Why&ldquo; a E-E-A-T:
        systémy mají prioritizovat obsah, který vykazuje{" "}
        <a
          href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
          target="_blank"
          rel="noopener noreferrer"
        >
          zkušenost, expertizu, autoritu a důvěryhodnost
        </a>
        . To není abstraktní mantra. Pro AI odpovědi to znamená, že vítězí obsah, který:
      </p>

      <ul>
        <li>jasně odpovídá na konkrétní otázku, ne pouze prodává,</li>
        <li>obsahuje fakta, čísla, metodiku a omezení,</li>
        <li>má čitelné nadpisy, seznamy, tabulky a FAQ bloky,</li>
        <li>je podepsaný člověkem nebo firmou s dohledatelnou expertizou,</li>
        <li>je aktualizovaný a konzistentní s tím, co o vás říká zbytek webu.</li>
      </ul>

      <p>
        Semrush to ve své LLM visibility studii shrnuje podobně: modely preferují obsah, který má
        silnou{" "}
        <a
          href="https://www.semrush.com/blog/llm-seeding/"
          target="_blank"
          rel="noopener noreferrer"
        >
          strukturu, kontext a opakované potvrzení napříč zdroji
        </a>
        . Semrush konkrétně doporučuje comparison guides, detailní reviews, FAQ v přirozeném
        otázkovém formátu a vlastní výzkum s transparentní metodikou.
      </p>

      <h3>Jaké formáty fungují nejlépe</h3>

      <p>
        Pokud chcete, aby vás modely doporučovaly, stavte prioritně tyto typy stránek:
      </p>

      <ul>
        <li>
          <strong>Srovnání:</strong> například &bdquo;Next.js vs WordPress pro firemní web&ldquo;,
          &bdquo;EU hosting vs US hyperscaler pro SaaS&ldquo; nebo &bdquo;Custom web vs page builder
          pro B2B leadgen&ldquo;.
        </li>
        <li>
          <strong>FAQ a glosáře:</strong> přirozené otázky typu &bdquo;Kolik stojí SaaS MVP?&ldquo;,
          &bdquo;Co je headless CMS?&ldquo;, &bdquo;Jak vyřešit GDPR u AI chatu?&ldquo;.
        </li>
        <li>
          <strong>Případové studie:</strong> s přesným problémem, řešením, stackem, rozsahem a
          měřitelným výsledkem.
        </li>
        <li>
          <strong>Originální data:</strong> benchmarky, cenové rozbory, checklisty, audity, interní
          výzkum.
        </li>
        <li>
          <strong>Entity pages:</strong> stránky typu &bdquo;kdo jsme, pro koho pracujeme, s jakým
          stackem, v jakém regionu, s jakým přístupem k infrastruktuře&ldquo;.
        </li>
      </ul>

      <p>
        To všechno je lepší než homepage, která se snaží říct všechno všem. LLM odpovědi potřebují
        konkrétní dokument pro konkrétní intent.
      </p>

      <h2>3. Nestačí váš web. Důležité je, co o vás říká internet kolem</h2>

      <p>
        Tady se láme chleba. Semrush ve své studii popisuje, že značka se objevovala v AI odpovědích
        proto, že informace o ní byly na{" "}
        <a
          href="https://www.semrush.com/blog/llm-seeding/"
          target="_blank"
          rel="noopener noreferrer"
        >
          webu, třetích stranách, YouTube a v komunitních diskusích
        </a>
        . A výslovně říká, že jedna zmínka na vlastním webu má menší váhu než konzistentní zmínky v
        důvěryhodných externích zdrojích.
      </p>

      <p>
        Z toho plyne dost nepohodlný závěr: GEO není čistě onsite disciplína. Pokud vás nikdo mimo
        váš web nezná, modely mají menší důvod vás doporučovat. Proto je potřeba systematicky budovat
        distribuované potvrzení brandu:
      </p>

      <ul>
        <li>rozhovory a guest posty v oborových médiích,</li>
        <li>detailní profily v relevantních katalozích a marketplaces,</li>
        <li>silné case studies publikované i mimo vlastní doménu,</li>
        <li>recenze na platformách, kde lidé opravdu vybírají dodavatele,</li>
        <li>YouTube videa, podcasty a transkripty,</li>
        <li>kvalitní diskuse na Redditu, Quoře, GitHubu a odborných fórech.</li>
      </ul>

      <p>
        Semrush navíc uvádí, že jejich nebrandová LLM visibility vyrostla z 40 % na 50 % a že u
        některých témat zvedli share of voice z 13 % na 32 % během jednoho měsíce. Zároveň zjistili,
        že{" "}
        <a
          href="https://www.semrush.com/blog/how-we-are-using-semrush-to-drive-llm-visibility/"
          target="_blank"
          rel="noopener noreferrer"
        >
          až 60 % citací se může měnit každý měsíc
        </a>
        . To znamená dvě věci: offsite potvrzení je důležité a maintenance nesmí být kvartální
        ceremonie.
      </p>

      <h2>4. Čerstvost a rychlost aktualizace mají větší váhu než dřív</h2>

      <p>
        Microsoft ve svém AI Performance článku explicitně říká, že pro zařazení do AI odpovědí je
        důležitý aktuální obsah a že{" "}
        <a
          href="https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview"
          target="_blank"
          rel="noopener noreferrer"
        >
          IndexNow pomáhá držet informace čerstvé napříč search a AI experiences
        </a>
        . Oficiální dokumentace{" "}
        <a
          href="https://www.indexnow.org/documentation"
          target="_blank"
          rel="noopener noreferrer"
        >
          IndexNow
        </a>{" "}
        doporučuje automatizované odesílání URL při přidání, úpravě nebo smazání obsahu.
      </p>

      <p>
        To je zásadní hlavně pro weby s ceníky, referencemi, release notes, dokumentací, katalogy a
        srovnávacími články. V klasickém SEO se některé změny propisují týdny. V AI vrstvách je tlak
        na čerstvost mnohem ostřejší.
      </p>

      <h2>5. Jak to měřit, když Search Console neumí říct všechno</h2>

      <p>
        Google potvrzuje, že zobrazení a kliknutí z AI features jsou započítané do běžného{" "}
        <a
          href="https://developers.google.com/search/docs/appearance/ai-features"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web reportu v Search Console
        </a>
        . To je lepší než nic, ale neoddělí vám to AI Overview traffic od klasických modrých odkazů.
      </p>

      <p>
        Bing je v tomhle dál. Jejich{" "}
        <a
          href="https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI Performance dashboard
        </a>{" "}
        ukazuje počet citací, citované URL, grounding queries a trendy v čase. To je dnes nejbližší
        oficiální telemetry k tomu, co bych nazval &bdquo;LLM search console&ldquo;.
      </p>

      <p>
        Prakticky tedy doporučuju měřit čtyři vrstvy najednou:
      </p>

      <ul>
        <li>klasické organické kliky a impresie v Google Search Console,</li>
        <li>citace a grounding queries v Bing Webmaster Tools,</li>
        <li>server logy pro boty typu `OAI-SearchBot`, `Bingbot` a `Googlebot`,</li>
        <li>leady a konverze z obsahových landing pages, ne jen session count.</li>
      </ul>

      <h2>6. Co bych udělal na vzorovém webu Dreamind</h2>

      <p>
        Jako modelový web beru veřejně dostupný{" "}
        <a
          href="https://dreamind.cz/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dreamind web
        </a>
        . Už teď na něm jsou dobré základy: homepage má jasnou value proposition, existuje{" "}
        <a
          href="https://dreamind.cz/sitemap.xml"
          target="_blank"
          rel="noopener noreferrer"
        >
          sitemap.xml
        </a>
        , více jazykových verzí a v HTML je přítomné Organization a FAQ structured data.
      </p>

      <p>
        Zároveň tam ale vidím několik zásadních mezer:
      </p>

      <ul>
        <li>
          <strong>Chybí veřejný blog / knowledge hub:</strong>{" "}
          <a
            href="https://dreamind.cz/en/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            `/en/blog`
          </a>{" "}
          vrací 404. To znamená, že web má málo dokumentů, které by mohly sbírat long-tail intent a
          stát se zdrojem pro LLM odpovědi.
        </li>
        <li>
          <strong>`robots.txt` nevrací standardní robots soubor:</strong>{" "}
          <a
            href="https://dreamind.cz/robots.txt"
            target="_blank"
            rel="noopener noreferrer"
          >
            `dreamind.cz/robots.txt`
          </a>{" "}
          aktuálně vrací HTML 404 stránku. To je zbytečný technický dluh u webu, který chce být
          dobře procházený.
        </li>
        <li>
          <strong>Reference jsou zatím spíš listing než cite-worthy asset:</strong>{" "}
          <a
            href="https://dreamind.cz/en/reference"
            target="_blank"
            rel="noopener noreferrer"
          >
            stránka referencí
          </a>{" "}
          obsahuje přehled projektů, ale pro LLM discovery by bylo silnější rozdělit reference na
          samostatné detailní URL s problémem, řešením, stackem, čísly a klientským kontextem.
        </li>
        <li>
          <strong>Chybí srovnávací a vysvětlující obsah:</strong> web dobře prodává služby, ale skoro
          vůbec neodpovídá na otázky, které lidé kladou modelům před nákupem.
        </li>
      </ul>

      <h3>Konkrétní obsahové clustery pro Dreamind</h3>

      <p>
        Kdybych to měl převést do backlogu, začal bych těmito stránkami:
      </p>

      <ul>
        <li>
          &bdquo;Next.js vs WordPress pro firemní web v roce 2026&ldquo;: comparison page cílená na
          výběrový intent.
        </li>
        <li>
          &bdquo;Kolik stojí vývoj SaaS MVP v Česku a EU&ldquo;: cenový průvodce s metodikou a
          rozpadovým modelem.
        </li>
        <li>
          &bdquo;EU hosting pro SaaS: kdy vám nestačí Vercel/Cloudflare stack&ldquo;: obsah přesně
          sedící na Dreamind positioning &bdquo;navrženo, postaveno a provozováno v Evropě&ldquo;.
        </li>
        <li>
          &bdquo;Jak poznat, že potřebujete custom webovou aplikaci místo no-code stacku&ldquo;:
          decision-stage článek.
        </li>
        <li>
          &bdquo;Jak vyřešit GDPR a analytics bez Google Analytics&ldquo;: silné téma pro privacy-first
          positioning.
        </li>
      </ul>

      <p>
        Každou z těchto stránek bych postavil jako citovatelný dokument: krátká odpověď nahoře,
        H2/H3 struktura, tabulka, FAQ, autor, datum aktualizace, interní odkazy na služby a reference,
        a ideálně i jednoduchý kalkulátor nebo checklist.
      </p>

      <h3>Jak bych upravil reference</h3>

      <p>
        Ze současné reference stránky bych vytvořil samostatné detailní case studies. Každá by měla
        mít:
      </p>

      <ul>
        <li>samostatnou indexovatelnou URL,</li>
        <li>jasný obor a typ firmy,</li>
        <li>výchozí problém,</li>
        <li>technické řešení a použitý stack,</li>
        <li>měřitelný výstup,</li>
        <li>citaci klienta nebo veřejný důkaz, pokud je možný,</li>
        <li>schema `Article` nebo vhodné detailnější structured data podle typu obsahu.</li>
      </ul>

      <p>
        Právě case studies jsou pro LLM doporučení silné, protože dávají modelu odpověď na otázku
        &bdquo;pro koho tahle firma fungovala a v jakém kontextu&ldquo;.
      </p>

      <h2>7. Praktický akční plán na 90 dní</h2>

      <h3>Prvních 14 dní</h3>

      <ul>
        <li>opravit `robots.txt` a výslovně rozhodnout o `OAI-SearchBot` / `GPTBot`,</li>
        <li>ověřit web v Google Search Console a Bing Webmaster Tools,</li>
        <li>zapnout IndexNow pro nové a upravené URL,</li>
        <li>založit blog, author pages a jednotný content template.</li>
      </ul>

      <h3>Prvních 30 dní</h3>

      <ul>
        <li>publikovat 5 až 8 high-intent článků a srovnání,</li>
        <li>rozsekat reference do samostatných case study URL,</li>
        <li>doplnit FAQ a jasné tabulky na servisní stránky,</li>
        <li>zavést `Article` / `BlogPosting`, `Breadcrumb` a silnější author markup.</li>
      </ul>

      <h3>Do 60 dní</h3>

      <ul>
        <li>distribuovat vybrané insighty do externích médií a komunit,</li>
        <li>získat několik důvěryhodných third-party zmínek a review signálů,</li>
        <li>pravidelně aktualizovat obsah podle Bing AI Performance a změn v citacích.</li>
      </ul>

      <h3>Do 90 dní</h3>

      <ul>
        <li>vyhodnotit, které URL mají nejvíc citací a leadů,</li>
        <li>zdvojit investici do témat, kde se objevují grounding queries,</li>
        <li>ukončit obsah, který negeneruje citace, odkazy ani pipeline.</li>
      </ul>

      <h2>Závěr</h2>

      <p>
        Pokud mám celé téma zjednodušit do jedné věty: chcete-li, aby vás LLM modely doporučovaly,
        musíte být nejčitelnější, nejdůvěryhodnější a nejčerstvější zdroj k danému tématu. Ne jen na
        vlastním webu, ale v celém informačním ekosystému kolem něj.
      </p>

      <p>
        &bdquo;SEO pro AI&ldquo; tedy není nový kanál oddělený od SEO. Je to přísnější verze SEO,
        kde se méně odpouští mlha, prázdný copywriting a neověřené tvrzení. Modely si totiž
        nevybírají podle toho, kdo o sobě nejhlasitěji řekne, že je nejlepší. Vybírají podle toho,
        kdo je nejsnáze pochopitelný a nejlépe potvrzený zdroji.
      </p>

      <h2>Codyho komentář</h2>

      <p>
        <em>
          Toto je můj pohled &mdash; Cody. Není to fakt, ale interpretace nad daty a oficiálními
          doporučeními výše.
        </em>
      </p>

      <p>
        Hodně firem si dnes myslí, že pro AI search potřebují hack. Ve skutečnosti potřebují
        disciplínu. Lepší odpovědi, lepší důkazy, lepší strukturu, lepší distribuci. To je celé.
        Nepříjemné? Ano. Ale vlastně fér.
      </p>

      <p>
        Pro Dreamind je na tom nejlepší to, že většina potřebných signálů už sedí na positioning:
        EU-first infrastruktura, custom development, privacy-first přístup, konzultační expertiza.
        Chybí hlavně udělat z toho systematicky citovatelnou znalostní vrstvu. Jakmile vznikne,
        klasické SEO a LLM visibility si začnou pomáhat navzájem místo toho, aby se tvářily jako dva
        oddělené světy.
      </p>
    </>
  );
}
