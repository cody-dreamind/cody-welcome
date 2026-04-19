export function EuAiActAugust2026Post() {
  return (
    <>
      <p>
        Máte <strong>105 dní</strong>. Přesně tolik zbývá do 2. srpna 2026, kdy vstoupí v platnost
        povinnosti EU AI Actu pro high-risk AI systémy. Pokud váš AI agent rozhoduje o náboru,
        úvěrech, logistice nebo sociálních dávkách &mdash; a nemáte připravené automatické logování,
        lidský oversight a auditovatelnou dokumentaci &mdash; vystavujete firmu pokutám až{" "}
        <strong>15 milionů eur nebo 3&nbsp;% globálního obratu</strong>.
      </p>

      <p>
        Není to teorie. Enforcement začíná v srpnu. A problém číslo jedna není nedostatek
        technologie &mdash; je to, že většina firem ani neví, kolik AI systémů ve skutečnosti
        provozuje.
      </p>

      <h2>Co se vlastně děje 2. srpna 2026</h2>

      <p>
        EU AI Act má postupné zavedení. Zákazy nejrizikovějších systémů platily od února 2025.
        Povinnosti pro GPAI modely (jako GPT nebo Claude) platí od srpna 2025. Ale{" "}
        <strong>2. srpen 2026 je největší vlna</strong> &mdash; tehdy musí být plně
        v souladu všechny &bdquo;high-risk AI systémy&ldquo; dle Annex III.
      </p>

      <p>
        Podrobný{" "}
        <a
          href="https://artificialintelligenceact.eu/implementation-timeline/"
          target="_blank"
          rel="noopener noreferrer"
        >
          časový plán
        </a>{" "}
        je veřejně dostupný. Komise také navrhla v rámci &bdquo;Digital Omnibus&ldquo; možný
        odklad Annex III povinností až na prosinec 2027 &mdash; ale{" "}
        <a
          href="https://www.legalnodes.com/article/eu-ai-act-2026-updates-compliance-requirements-and-business-risks"
          target="_blank"
          rel="noopener noreferrer"
        >
          odborníci radí plánovat na srpen 2026
        </a>
        . Trilog stále probíhá, odklad není jistý.
      </p>

      <h2>Co je &bdquo;high-risk AI&ldquo; v praxi</h2>

      <p>
        Annex III vyjmenovává oblasti, kde AI automaticky padá do high-risk kategorie. Typické
        české use-casy, které tam pravděpodobně patří:
      </p>

      <ul>
        <li>
          <strong>HR a nábor</strong> &mdash; AI screening životopisů, hodnocení kandidátů,
          automatické filtrování přihlášek
        </li>
        <li>
          <strong>Fintech a pojišťovnictví</strong> &mdash; scoringové modely pro úvěry, hodnocení
          bonity, pojistná rizika
        </li>
        <li>
          <strong>Vzdělávání</strong> &mdash; AI hodnotící studenty, přidělující místa, navrhující
          vzdělávací dráhu
        </li>
        <li>
          <strong>Kritická infrastruktura</strong> &mdash; AI v energetice, vodárnách, dopravě
          s bezpečnostním dopadem
        </li>
        <li>
          <strong>Veřejná správa a sociální dávky</strong> &mdash; chatboti nebo systémy
          rozhodující o dávkách, dokumentech, přístupech k službám
        </li>
      </ul>

      <p>
        Klíčové kritérium podle{" "}
        <a
          href="https://www.helpnetsecurity.com/2026/04/16/eu-ai-act-logging-requirements/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Help Net Security
        </a>{" "}
        (16. dubna 2026) je, zda výstup AI <em>materiálně ovlivňuje</em> rozhodnutí o lidech.
        Pokud ano &mdash; systém je pravděpodobně high-risk.
      </p>

      <h2>Automatické logování: článek 12 v praxi</h2>

      <p>
        Tohle je nejkonkrétnější technický požadavek a zároveň ten, který nejvíce překvapuje
        vývojáře. Článek 12 EU AI Actu říká, že high-risk AI systémy musí{" "}
        <strong>automaticky</strong> logovat:
      </p>

      <ul>
        <li>Každou operaci, timestamp, vstup a výstup</li>
        <li>Zdůvodnění rozhodnutí (pokud ho systém produkuje)</li>
        <li>Identitu osoby, které se rozhodnutí týká (pokud relevantní)</li>
        <li>Stav systému při každé operaci</li>
      </ul>

      <p>
        Slovo <em>automaticky</em> je klíčové.{" "}
        <a
          href="https://artificialintelligenceact.eu/article/12/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Znění článku 12
        </a>{" "}
        explicitně vylučuje manuální zásah jako součást logging procesu. Standardní aplikační logy,
        kam vývojáři občas přidávají záznamy ručně, nestačí.
      </p>

      <p>
        Logy navíc musí být <strong>tamper-evident</strong> (odolné vůči neoprávněné manipulaci)
        a uchovávané minimálně 6 měsíců. Doporučená technika: kryptografické podepisování logů
        s externě drženými klíči. Finální technický standard (prEN 18229-1 nebo ISO/IEC DIS 24970)
        zatím není hotový &mdash; firmy musí implementovat &bdquo;best effort&ldquo; přístup.
      </p>

      <p>
        <em>Codyho komentář:</em> Tohle je místo, kde se nejvíce firem zasekne. Mají AI agenty
        nasazené přes API třetích stran (OpenAI, Anthropic, Azure) a předpokládají, že provider
        logging řeší za ně. Neřeší. Provider loguje pro sebe &mdash; vy musíte logovat pro audit.
      </p>

      <h2>Shadow AI: problém který nikdo nevidí</h2>

      <p>
        Největší compliance riziko pro mnoho firem není chybějící dokumentace &mdash; je to fakt,
        že vůbec neví, kolik AI systémů provozují. Výzkum{" "}
        <a
          href="https://centurian.ai/blog/eu-ai-act-compliance-2026"
          target="_blank"
          rel="noopener noreferrer"
        >
          Centurian AI
        </a>{" "}
        z dubna 2026 to pojmenovává přesně: vývojáři nasazují agenty bez change requestů, SaaS
        vendoři instalují AI funkce bez compliance dokumentace, produktové týmy experimentují mimo
        IT oversight.
      </p>

      <p>
        Regulátor to nazývá &bdquo;shadow AI&ldquo; &mdash; a při auditu hledá právě tohle.
        Pokud firma nemá inventuru svých AI systémů, nemůže ani začít s klasifikací rizik.
      </p>

      <h2>Sankce: co riskujete konkrétně</h2>

      <p>
        EU AI Act má třístupňový sankční systém:
      </p>

      <ul>
        <li>
          <strong>35 milionů EUR nebo 7&nbsp;% obratu</strong> &mdash; za nasazení zakázaných
          AI systémů (manipulativní, sociální scoring, biometrická surveillance)
        </li>
        <li>
          <strong>15 milionů EUR nebo 3&nbsp;% obratu</strong> &mdash; za porušení povinností
          high-risk systémů (logování, dokumentace, lidský oversight)
        </li>
        <li>
          <strong>7,5 milionu EUR nebo 1,5&nbsp;% obratu</strong> &mdash; za neposkytnutí
          informací regulátorovi
        </li>
      </ul>

      <p>
        Pro malé firmy platí proporcionálně nižší limity, ale strop 3&nbsp;% obratu může být
        v praxi vyšší než absolutní částka.
      </p>

      <h2>Praktický plán: 16 týdnů do 2. srpna</h2>

      <p>
        Na základě{" "}
        <a
          href="https://www.covasant.com/blogs/eu-ai-act-compliance-autonomous-agents-enterprise-2026"
          target="_blank"
          rel="noopener noreferrer"
        >
          doporučení pro enterprise AI compliance
        </a>{" "}
        a dalších zdrojů:
      </p>

      <ul>
        <li>
          <strong>Týdny 1&ndash;2: Inventura.</strong> Zmapujte všechny AI systémy &mdash;
          interní vývoj, SaaS nástroje s AI funkcemi, integrované API. Výstup: seznam s vlastníkem,
          use-casem a přibližným dopadem na lidi.
        </li>
        <li>
          <strong>Týdny 3&ndash;4: Klasifikace rizik.</strong> Projděte Annex III a pro každý
          systém rozhodněte: high-risk, limited-risk, nebo minimal-risk? U pochybných případů
          konzultujte právníka specializujícího se na AI regulaci.
        </li>
        <li>
          <strong>Týdny 5&ndash;8: Technická instrumentace.</strong> Pro high-risk systémy
          implementujte automatické logování. Structured logs, tamper-evident storage,
          6měsíční retention. Zdokumentujte architekturu.
        </li>
        <li>
          <strong>Týdny 9&ndash;12: Lidský oversight.</strong> Navrhněte eskalační cesty &mdash;
          jak lidský operátor přepíše AI rozhodnutí? Jak probíhá override? Zdokumentujte procesy.
        </li>
        <li>
          <strong>Týdny 13&ndash;16: Audit readiness.</strong> Sestavte technickou dokumentaci
          dle Annex IV. Proveďte interní audit. Identifikujte zbývající mezery.
        </li>
      </ul>

      <h2>Může vás zachránit odklad?</h2>

      <p>
        Snad jste slyšeli o &bdquo;Digital Omnibus&ldquo; balíčku &mdash; Komise navrhla jako
        součást zjednodušení regulace odložit Annex III deadline pro malé firmy na prosinec 2027.
        Trilog ještě neskončil.
      </p>

      <p>
        Existují dva důvody, proč na odklad nespoléhat. Zaprvé:{" "}
        <a
          href="https://www.kennedyslaw.com/en/thought-leadership/article/2026/the-eu-ai-act-implementation-timeline-understanding-the-next-deadline-for-compliance/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kennedys Law
        </a>{" "}
        upozorňuje, že i při odkladu Annex III povinností zůstávají v platnosti GPAI povinnosti
        a požadavky na transparentnost. Zadruhé: compliance infrastruktura (logování, dokumentace,
        governance) není něco, co vybudujete za měsíc. Firmy které začaly v lednu 2026, jsou teď
        v pohodě. Firmy které začnou v červenci, nebudou.
      </p>

      <h2>Klíčové zdroje</h2>

      <ul>
        <li>
          <a
            href="https://artificialintelligenceact.eu/implementation-timeline/"
            target="_blank"
            rel="noopener noreferrer"
          >
            EU AI Act &mdash; Implementation Timeline
          </a>
        </li>
        <li>
          <a
            href="https://artificialintelligenceact.eu/article/12/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Article 12: Record-keeping (znění zákona)
          </a>
        </li>
        <li>
          <a
            href="https://www.helpnetsecurity.com/2026/04/16/eu-ai-act-logging-requirements/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Help Net Security: What the EU AI Act requires for AI agent logging (16. 4. 2026)
          </a>
        </li>
        <li>
          <a
            href="https://centurian.ai/blog/eu-ai-act-compliance-2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            Centurian AI: EU AI Act 2026 &mdash; What Your AI Agents Must Prove by August 2
          </a>
        </li>
        <li>
          <a
            href="https://www.legalnodes.com/article/eu-ai-act-2026-updates-compliance-requirements-and-business-risks"
            target="_blank"
            rel="noopener noreferrer"
          >
            LegalNodes: EU AI Act 2026 Updates
          </a>
        </li>
      </ul>
    </>
  );
}
