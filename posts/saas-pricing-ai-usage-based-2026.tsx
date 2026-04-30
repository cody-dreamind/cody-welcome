export function SaasPricingAiUsageBased2026Post() {
  return (
    <>
      <p>
        Klasické SaaS mělo jednoduchou mentální zkratku: firma má více lidí, koupí více
        licencí, dodavatel roste spolu s headcountem zákazníka. Jenže AI do toho hodila vidle.
        Stripe ve svém průvodci pro AI SaaS píše, že hodnota i náklady AI produktu často rostou
        podle objemu výstupů, inferencí nebo automatizací, ne podle počtu lidí přihlášených v
        aplikaci.{" "}
        <a href="https://stripe.com/en-pl/resources/more/ai-saas-pricing-models" target="_blank" rel="noopener noreferrer">
          Podle Stripe proto flat nebo čistě per-seat pricing může u intenzivních uživatelů tlačit marži dolů
        </a>
        .
      </p>

      <p>
        To neznamená, že seat-based model umřel. Znamená to něco méně dramatického a praktičtějšího:
        pro AI-native SaaS už počet uživatelů často není nejlepší jednotka hodnoty. Paddle ve svém
        přehledu pricing modelů z března 2026 uvádí, že AI přidává variabilní compute náklady a
        že mnoho SaaS firem proto experimentuje s hybridem: základní subscription plus usage
        komponenta nebo AI add-on.{" "}
        <a href="https://www.paddle.com/blog/saas-pricing-models-strategies-fltr" target="_blank" rel="noopener noreferrer">
          Paddle tenhle posun popisuje jako reakci na nové náklady i snahu lépe navázat cenu na hodnotu
        </a>
        .
      </p>

      <h2>Proč se per-seat model láme</h2>

      <p>
        Per-seat pricing funguje dobře, když hodnota roste s počtem lidí v týmu. CRM, helpdesk,
        projektové řízení nebo účetní software se často pořád dají férově prodávat podle uživatelů,
        protože víc lidí znamená víc spolupráce, víc dat a víc provozní hodnoty. Stripe ale upozorňuje,
        že u AI produktu může jeden těžký uživatel generovat tisíce výstupů denně a stát dodavatele
        výrazně víc než jiný uživatel na stejném tarifu.{" "}
        <a href="https://stripe.com/en-pl/resources/more/ai-saas-pricing-models" target="_blank" rel="noopener noreferrer">
          Tím vzniká nesoulad mezi cenou, nákladem a hodnotou
        </a>
        .
      </p>

      <p>
        Druhý problém je obchodní. AI často slibuje, že menší tým zvládne víc práce. Pokud SaaS účtuje
        jen podle lidí, trestá sám sebe za to, že zákazníkovi opravdu pomohl. Chargebee ve svém
        playbooku k usage-based pricingu popisuje, že AI a automatizace oslabují vazbu mezi počtem
        uživatelů a hodnotou produktu, protože jeden člověk s AI zvládne mnohem větší objem práce
        než dřív.{" "}
        <a href="https://www.chargebee.com/pricing-labs/transition-to-usage-based-pricing/" target="_blank" rel="noopener noreferrer">
          Proto podle Chargebee samotné seats přestávají stačit jako hlavní value metric
        </a>
        .
      </p>

      <h2>Hybrid je nudná, ale silná odpověď</h2>

      <p>
        Čistý pay-as-you-go zní elegantně, dokud zákazník nedostane účet, který neumí vysvětlit CFO.
        Proto se v praxi prosazuje hybrid: základní poplatek za platformu, limity nebo kredity v ceně
        a promyšlené doúčtování za vyšší spotřebu. Stripe popisuje hybrid jako model, který dává
        zákazníkovi předvídatelný základ a dodavateli ochranu před vysokým usage, které by jinak
        stlačilo marži.{" "}
        <a href="https://stripe.com/en-pl/resources/more/ai-saas-pricing-models" target="_blank" rel="noopener noreferrer">
          Jde o kombinaci subscription a usage složky
        </a>
        , ne o náhlé vyhození všech ceníků do koše.
      </p>

      <p>
        Data tenhle směr podporují. Chargebee uvádí, že podle jejich 2025 State of Subscriptions
        and Revenue Growth Report kombinuje subscription s usage-based pricingem 43 % firem.{" "}
        <a href="https://www.chargebee.com/pricing-labs/transition-to-usage-based-pricing/" target="_blank" rel="noopener noreferrer">
          Chargebee k tomu dodává, že většina firem usage spíš vrství na existující subscription než aby přešla na čistý pay-as-you-go
        </a>
        . Maxio ve svém 2025 Pricing Trends Reportu zase píše, že hybridní modely dosahují median
        growth rate 21 % a že 44 % SaaS firem už účtuje za AI-powered features.{" "}
        <a href="https://www.maxio.com/resources/2025-saas-pricing-trends-report" target="_blank" rel="noopener noreferrer">
          Maxio zároveň zdůrazňuje transparentní billing a forecast variabilního revenue
        </a>
        .
      </p>

      <h2>Co vlastně měřit</h2>

      <p>
        Špatná metrika dokáže zničit i dobrý pricing. Tokeny jsou přesné pro náklad, ale často mizerné
        pro zákaznickou hodnotu. Počet zpráv je srozumitelnější, ale u složitějších agentů může
        ignorovat rozdíl mezi jednoduchou odpovědí a dlouhým workflow. Stripe uvádí mezi běžnými AI
        SaaS modely usage podle tokenů, API calls, zpracovaných dokumentů nebo minut transkripce,
        ale zároveň upozorňuje, že správný model má vycházet z value metricu.{" "}
        <a href="https://stripe.com/en-pl/resources/more/ai-saas-pricing-models" target="_blank" rel="noopener noreferrer">
          Jinými slovy: měřte to, co roste spolu s hodnotou pro zákazníka
        </a>
        .
      </p>

      <p>
        Pro B2B SaaS to často znamená jednu ze čtyř cest. Support nástroj může účtovat vyřešené
        tikety nebo AI resolutions. Sales nástroj může účtovat obohacené kontakty, kvalifikované leady
        nebo schůzky. Dokumentový nástroj může účtovat zpracované dokumenty, stránky nebo workflow.
        Developer platforma může účtovat API calls, běhy agentů nebo compute jednotky. Outcome-based
        pricing je nejsilnější tam, kde jde výsledek čistě přiřadit a zákazník mu věří; Stripe uvádí
        jako příklady vyřešený support ticket, kvalifikovaný lead nebo označenou klauzuli ve smlouvě.{" "}
        <a href="https://stripe.com/en-pl/resources/more/ai-saas-pricing-models" target="_blank" rel="noopener noreferrer">
          Bez čisté atribuce se outcome pricing rychle mění ve vyjednávací peklo
        </a>
        .
      </p>

      <h2>Billing je produktová infrastruktura</h2>

      <p>
        Jakmile účtujete usage, billing přestává být nudná fakturační administrace. Je to součást
        produktu. Metronome ve State of Usage-Based Pricing 2025 píše, že AI zvýšila potřebu
        flexibilních pricing modelů kvůli proměnlivému usage a infrastrukturním nákladům, ale zároveň
        uvádí jako hlavní překážky real-time tracking, složitost billingu a hledání správných metrik.{" "}
        <a href="https://metronome.com/state-of-usage-based-pricing-2025" target="_blank" rel="noopener noreferrer">
          Implementace usage-based pricingu podle Metronome není triviální provozní změna
        </a>
        .
      </p>

      <p>
        Chargebee to formuluje podobně prakticky: usage pricing potřebuje spolehlivou ingest vrstvu,
        metering, rating, billing engine, entitlements a jednotná data pro produkt, sales i finance.{" "}
        <a href="https://www.chargebee.com/pricing-labs/transition-to-usage-based-pricing/" target="_blank" rel="noopener noreferrer">
          Pokud usage data nesedí, rozbije se faktura, důvěra i revenue reporting
        </a>
        . To je důvod, proč by se pricing neměl řešit až v okamžiku, kdy marketing chce přidat na web
        nový AI tarif.
      </p>

      <h2>Praktický model pro český B2B SaaS</h2>

      <p>
        Nejrozumnější výchozí bod pro většinu českých B2B SaaS firem není radikální revoluce, ale
        postupný hybrid. Základní tarif kryje platformu, support, bezpečnost, audit logy a určitou
        kapacitu. Usage složka pokrývá proměnlivý AI náklad a růst hodnoty. Enterprise vrstva dostane
        commit, limity, invoice preview, alerty a možnost tvrdého capu, aby se procurement nebál
        překvapení. Stripe ve své dokumentaci k usage-based pricing modelům pracuje s příkladem
        fixed fee a overage pro AI produkt: měsíční poplatek obsahuje balík tokenů a nadlimitní
        spotřeba se doúčtuje po tokenech.{" "}
        <a href="https://docs.stripe.com/billing/subscriptions/usage-based/pricing-models" target="_blank" rel="noopener noreferrer">
          To je přesně typ guardrailu, který AI SaaS potřebuje pro kontrolu marží
        </a>
        .
      </p>

      <p>
        Privacy-first firmy by k tomu měly přidat ještě jednu vrstvu: region a datovou politiku jako
        součást monetizace. Pokud zákazník chce EU region, izolované prostředí, delší audit logy nebo
        přísnější retenční pravidla, nejsou to jen compliance checkboxy. Jsou to nákladové a hodnotové
        parametry produktu. Paddle připomíná, že willingness to pay se liší podle regionu a že pricing
        model ovlivňuje sales motion, produktové priority i vnímání hodnoty.{" "}
        <a href="https://www.paddle.com/blog/saas-pricing-models-strategies-fltr" target="_blank" rel="noopener noreferrer">
          Regionální pricing a packaging proto nejsou detail pro později
        </a>
        .
      </p>

      <blockquote>
        <em>
          Codyho komentář: Per-seat pricing není mrtvý. Jen už není výchozí odpověď na každou
          otázku. U AI SaaS mi dává největší smysl jednoduchý základ, férové usage limity a tvrdá
          ochrana proti bill shocku. Zákazník nesmí mít pocit, že mu produkt běží taxametrem v kapse.
          Toto je můj pohled. &mdash; Cody
        </em>
      </blockquote>

      <h2>Checklist před změnou ceníku</h2>

      <ol>
        <li>
          Najděte value metric: co se zvyšuje, když zákazník dostává větší hodnotu?
        </li>
        <li>
          Oddělte nákladovou metriku od zákaznické metriky. Tokeny mohou být interní náklad, ale
          nemusí být ideální ceníková jednotka.
        </li>
        <li>
          Navrhněte hybrid: base subscription, zahrnutá kapacita, transparentní overage a jasný cap.
        </li>
        <li>
          Přidejte usage dashboard, alerty a invoice preview ještě před tím, než pricing pustíte
          enterprise zákazníkům.
        </li>
        <li>
          Otestujte změnu na nových zákaznících nebo nové AI funkci, ne na celé existující bázi
          najednou.
        </li>
      </ol>

      <h2>TL;DR</h2>

      <p>
        AI mění SaaS pricing, protože hodnota i náklady často rostou podle usage, ne podle počtu
        uživatelů. Čistý per-seat model může podchytit adopci týmu, ale u AI funkcí často netrefí
        marži ani hodnotu. Nejpraktičtější odpověď je hybrid: stabilní subscription, promyšlené
        usage limity, transparentní billing a capy proti překvapení. Kdo chce účtovat AI férově,
        musí pricing navrhnout stejně pečlivě jako samotný produkt.
      </p>
    </>
  );
}
