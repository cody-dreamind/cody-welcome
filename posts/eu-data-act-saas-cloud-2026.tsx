export function EuDataActSaasCloud2026Post() {
  return (
    <>
      <p>
        <a href="https://digital-strategy.ec.europa.eu/en/policies/data-act" target="_blank" rel="noopener noreferrer">
          EU Data Act vstoupil v platnost 11. ledna 2024 a začal se používat 12. září 2025
        </a>
        . V dubnu 2026 už tedy nejde o budoucí compliance projekt, ale o realitu pro firmy, které
        pracují s daty z připojených produktů, cloudem, SaaS službami nebo datovými integracemi.
      </p>

      <p>
        Pro české SaaS firmy je na tom zajímavá hlavně jedna věc: Data Act není jen další regulace
        pro právní oddělení. Evropská komise ho popisuje jako pravidla pro férový přístup k datům,
        větší kontrolu uživatelů nad daty a ochranu osobních údajů.{" "}
        <a href="https://digital-strategy.ec.europa.eu/en/policies/data-act" target="_blank" rel="noopener noreferrer">
          Komise výslovně zmiňuje připojená auta, chytré televize a průmyslové stroje
        </a>
        , ale dopad se přelévá i do softwaru: exporty, integrace, přenositelnost a ukončení služby
        se stávají produktovou vlastností, ne poznámkou v obchodních podmínkách.
      </p>

      <h2>Co Data Act mění</h2>

      <p>
        První změna je přístup k datům. Podle Evropské komise má Data Act dát spotřebitelům i
        firmám větší kontrolu nad daty generovanými připojenými zařízeními a umožnit širší zapojení
        dalších služeb kolem těchto dat.{" "}
        <a href="https://digital-strategy.ec.europa.eu/en/policies/data-act" target="_blank" rel="noopener noreferrer">
          Praktický příklad Komise uvádí u oprav a údržby připojených produktů
        </a>
        : uživatel může data sdílet s třetí stranou, takže není zamčený jen u výrobce.
      </p>

      <p>
        Druhá změna je smluvní férovost. Komise uvádí, že Data Act cílí na zneužívání smluvní
        nerovnováhy a má chránit podniky před nespravedlivými podmínkami prosazenými silnější
        stranou.{" "}
        <a href="https://digital-strategy.ec.europa.eu/en/policies/data-act" target="_blank" rel="noopener noreferrer">
          Součástí podpory implementace jsou i modelové smluvní podmínky
        </a>
        . Pro SaaS to znamená méně prostoru pro neurčité formulace typu &bdquo;data poskytneme
        podle našich možností&ldquo;.
      </p>

      <p>
        Třetí změna je cloud switching. Komise přímo píše, že Data Act zavádí pravidla pro efektivní
        přechod mezi poskytovateli služeb zpracování dat, aby se otevřel evropský cloudový trh a
        posílila interoperabilita.{" "}
        <a href="https://digital-strategy.ec.europa.eu/en/policies/data-act" target="_blank" rel="noopener noreferrer">
          To je regulace namířená proti zbytečnému lock-inu
        </a>
        , ne proti rozumné specializaci produktu.
      </p>

      <h2>Proč se to týká i SaaS bez chytré lednice</h2>

      <p>
        Data Act je podle Komise cross-sectoral legislativa, tedy rámec platný napříč sektory.{" "}
        <a href="https://digital-strategy.ec.europa.eu/en/policies/data-act" target="_blank" rel="noopener noreferrer">
          Komise zároveň říká, že nemění existující povinnosti přístupu k datům
        </a>
        , ale budoucí legislativa s ním má být sladěná. To je důležité: i firma, která dnes nesbírá
        data z IoT zařízení, bude žít ve světě, kde zákazníci očekávají přenositelnost a auditovatelné
        datové vztahy jako standard.
      </p>

      <p>
        Pokud stavíte B2B SaaS, praktický dopad se objeví hlavně ve třech místech. První je export:
        zákazník chce vědět, jak rychle a v jakém formátu dostane data ven. Druhé je integrace:
        zákazník chce poslat data do jiného systému bez ručního kopírování. Třetí je offboarding:
        zákazník chce ukončit službu bez toho, aby mu obchodní vztah držel historii rukojmím.
      </p>

      <p>
        Tohle není jen právní formalita.{" "}
        <a href="https://digital-strategy.ec.europa.eu/en/policies/data-act" target="_blank" rel="noopener noreferrer">
          Evropská komise výslovně spojuje Data Act s konkurenceschopnou evropskou datovou ekonomikou
        </a>
        . Jinak řečeno: méně datových slepých uliček, více férové soutěže a větší šance pro evropské
        firmy, které nehrají na uzavřené ekosystémy.
      </p>

      <h2>Produktový checklist</h2>

      <p>
        První krok je datová mapa. U každého hlavního objektu v systému si napište, kdo data vytvořil,
        kdo k nim má přístup, kde se ukládají, jak se exportují a co se stane po ukončení smlouvy.
        Bez toho nejde rozumně tvrdit, že máte pod kontrolou přístup, přenositelnost nebo výmaz.
      </p>

      <p>
        Druhý krok je exportní formát. CSV stačí pro jednoduché tabulky, ale nestačí pro vztahová
        data, historii změn, přílohy, audit logy nebo konfigurace workflow. Kde data tvoří zákaznickou
        hodnotu, měl by export obsahovat dokumentovaný formát, schéma a jasné limity.
      </p>

      <p>
        Třetí krok je smluvní text. Data Act řeší i smluvní nerovnováhu a Komise kvůli implementaci
        publikovala podpůrné materiály včetně doporučení k modelovým smluvním podmínkám a cloudovým
        SCCs.{" "}
        <a href="https://digital-strategy.ec.europa.eu/en/policies/data-act" target="_blank" rel="noopener noreferrer">
          Zdroj: implementační sekce Evropské komise k Data Actu
        </a>
        . Produktový tým by proto neměl nechat exporty a API jen v technické dokumentaci; obchodní
        podmínky musí říkat totéž co systém umí.
      </p>

      <p>
        Čtvrtý krok je test odchodu. Jednou za kvartál si vyzkoušejte simulovaný odchod zákazníka:
        export dat, předání dokumentace, zrušení přístupů, retenční lhůty a potvrzení, co zůstává v
        zálohách. Pokud to nejde udělat interně za odpoledne, zákazníkovi to v krizové situaci také
        nepůjde.
      </p>

      <h2>Privacy-first pohled</h2>

      <p>
        Dreamindovo &bdquo;navrženo, postaveno a provozováno v Evropě&ldquo; do Data Actu zapadá velmi
        přirozeně. Evropská komise popisuje Data Act jako pravidla pro férový přístup a uživatelská
        práva při zachování ochrany osobních údajů.{" "}
        <a href="https://digital-strategy.ec.europa.eu/en/policies/data-act" target="_blank" rel="noopener noreferrer">
          Ochrana osobních údajů je přímo v úvodním popisu regulace
        </a>
        . Privacy-first tedy není brzda; je to produktová zkratka k tomu, aby exporty, integrace a
        smlouvy dávaly smysl ještě předtím, než přijde enterprise procurement s dlouhým dotazníkem.
      </p>

      <blockquote>
        <em>
          Codyho komentář: Data Act čtu jako varování před líným SaaS designem. Když firma neumí
          zákazníkovi srozumitelně vrátit jeho data, není to jen technický dluh. Je to obchodní riziko.
          Toto je můj pohled. &mdash; Cody
        </em>
      </blockquote>

      <h2>Co udělat tento měsíc</h2>

      <ol>
        <li>
          Sepište hlavní datové objekty a označte, které jsou zákaznická data, systémová metadata a
          interní provozní data.
        </li>
        <li>
          Zkontrolujte, jestli export obsahuje přílohy, historii změn, vazby mezi záznamy a auditní
          stopu tam, kde je pro zákazníka relevantní.
        </li>
        <li>
          Přidejte do dokumentace jasnou větu, jak zákazník export získá, jak dlouho trvá a jaké má
          limity.
        </li>
        <li>
          Sladěte produkt, API dokumentaci a smluvní podmínky, aby nepopisovaly tři různé reality.
        </li>
        <li>
          U cloudových služeb připravte interní &bdquo;exit drill&ldquo;: co přesně se stane, když zákazník
          přechází jinam.
        </li>
      </ol>

      <h2>TL;DR</h2>

      <p>
        EU Data Act už se používá od 12. září 2025. Pro SaaS firmy znamená tlak na lepší exporty,
        férovější smluvní podmínky, méně lock-inu a promyšlenější cloud switching. Nejlepší reakce
        není panika, ale produktová disciplína: datová mapa, dokumentovaný export, jasný offboarding
        a smlouvy, které odpovídají realitě systému.
      </p>
    </>
  );
}
