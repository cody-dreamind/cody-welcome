export function GitHubCopilotEuDataResidency2026Post() {
  return (
    <>
      <p>
        <a
          href="https://github.blog/changelog/2026-04-13-copilot-data-residency-in-us-eu-and-fedramp-compliance-now-available/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub 13. dubna 2026 oznámil
        </a>{" "}
        podporu data residency pro GitHub Copilot v USA a Evropské unii. Pro enterprise zákazníky na{" "}
        <a
          href="https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/github-copilot-with-data-residency"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Enterprise Cloud with data residency
        </a>{" "}
        to znamená, že inference processing a související data mohou zůstat v určeném regionu i při
        použití Copilotu.
      </p>

      <p>
        To není kosmetická změna. GitHub v dokumentaci popisuje, že při zapnuté enforcement policy
        směřuje autentizaci, routing i model endpoints do regionu organizace a že v regionálně
        odpovídajícím úložišti zůstávají i{" "}
        <a
          href="https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/github-copilot-with-data-residency"
          target="_blank"
          rel="noopener noreferrer"
        >
          logs a telemetry
        </a>
        . Pro české firmy, které řeší GDPR, interní bezpečnostní pravidla a tlak na evropskou
        digitální suverenitu, je to konečně praktická odpověď na otázku, kam Copilot posílá kód a
        prompty.
      </p>

      <h2>Co přesně data residency v Copilotu pokrývá</h2>

      <p>
        GitHub uvádí, že s regionální enforcement policy fungují{" "}
        <a
          href="https://github.blog/changelog/2026-04-13-copilot-data-residency-in-us-eu-and-fedramp-compliance-now-available/"
          target="_blank"
          rel="noopener noreferrer"
        >
          všechny obecně dostupné Copilot funkce
        </a>
        : agent mode, inline suggestions, chat, Copilot cloud agent, code review, PR summaries i
        Copilot CLI. Prakticky řečeno: nechráníte jen autocomplete v editoru, ale i modernější
        agentní workflow, která sahají dál do development procesu.
      </p>

      <p>
        Dokumentace zároveň říká, že při zapnutém omezení Copilot zobrazí jen modely certifikované
        pro daný region a že vývojář nemůže přepnout na endpoint mimo svou geografii. To je důležité
        hlavně pro větší týmy, kde se bez centrální politiky rychle rozjedou různé lokální výjimky.
      </p>

      <h2>Kde jsou limity hned na začátku</h2>

      <p>
        První limit je licenční a architektonický: podle{" "}
        <a
          href="https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/github-copilot-with-data-residency"
          target="_blank"
          rel="noopener noreferrer"
        >
          oficiálních docs
        </a>{" "}
        je tahle funkce určená pro GitHub Enterprise Cloud with data residency. Není to univerzální
        přepínač pro každého uživatele Copilotu a navíc je policy ve výchozím stavu vypnutá, takže
        admin ji musí zapnout vědomě.
      </p>

      <p>
        Druhý limit je klientský. GitHub píše, že enforcement vyžaduje kompatibilní Copilot
        extension nebo CLI, přičemž obecně platí verze vydané{" "}
        <a
          href="https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/github-copilot-with-data-residency"
          target="_blank"
          rel="noopener noreferrer"
        >
          v roce 2025 nebo později
        </a>
        . Starší klienti budou uživatele nutit k update, což je drobnost jen do chvíle, než máte
        desítky vývojářských workstationů a několik interních image template.
      </p>

      <p>
        Třetí limit je ve výběru modelů. V EU regionu jsou dnes dostupné například{" "}
        <a
          href="https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/github-copilot-with-data-residency"
          target="_blank"
          rel="noopener noreferrer"
        >
          GPT-4.1, GPT-5 mini, GPT-5.2, GPT-5.4, Claude Sonnet 4.6 a Claude Opus 4.6
        </a>
        , ale chybí tam třeba GPT-4o, GPT-5.2-Codex nebo GPT-5.3-Codex, které jsou v americkém
        regionu. A{" "}
        <a
          href="https://github.blog/changelog/2026-04-13-copilot-data-residency-in-us-eu-and-fedramp-compliance-now-available/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gemini modely zatím dostupné nejsou
        </a>
        , protože Google zatím nenabízí data-resident inference endpoints pro tenhle use case.
      </p>

      <h2>Kolik to stojí</h2>

      <p>
        GitHub uvádí, že data-resident requesty mají{" "}
        <a
          href="https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/github-copilot-with-data-residency"
          target="_blank"
          rel="noopener noreferrer"
        >
          10% navýšení model multiplieru
        </a>
        . Jestli tedy nějaký model normálně stojí 1 premium request, se zapnutou EU residency se
        počítá jako 1.1. Není to dramatické, ale už je to dost na to, aby finance tým chtěl vědět,
        které modely jsou opravdu potřeba a které jsou jen hezká hračka.
      </p>

      <h2>Proč to samo o sobě neznamená hotové GDPR</h2>

      <p>
        Největší praktický háček přišel o pár týdnů dřív. GitHub 25. března 2026 oznámil, že od{" "}
        <a
          href="https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          24. dubna 2026
        </a>{" "}
        začne používat interaction data z Copilot Free, Pro a Pro+ pro trénink a zlepšování modelů,
        pokud se uživatel neodhlásí v privacy nastavení. Copilot Business a Copilot Enterprise podle
        stejného oznámení touto změnou dotčené nejsou.
      </p>

      <p>
        To je pro firmy zásadní rozdíl. Jestli vývojáři používají osobní Pro účty bokem místo
        firemního Business nebo Enterprise setupu, nevzniká vám jen licenční chaos, ale i odlišný
        datový režim. EU data residency proto dává smysl jen jako součást řízeného firemního
        nasazení, ne jako náplast na shadow AI.
      </p>

      <p>
        Další nuance je na úrovni model hostingu. GitHub v referenční dokumentaci uvádí, že OpenAI
        modely pro Copilot běží na{" "}
        <a
          href="https://docs.github.com/en/copilot/reference/ai-models/model-hosting"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenAI a GitHub Azure infrastruktuře
        </a>
        , přičemž OpenAI podle citované enterprise privacy commitment netrénuje na customer business
        datech a GitHub má s OpenAI zero data retention agreement. U Anthropic modelů GitHub píše,
        že pro generally available funkce má také zero data retention agreement, ale některé beta a
        public preview funkce pod tuto garanci{" "}
        <a
          href="https://docs.github.com/en/copilot/reference/ai-models/model-hosting"
          target="_blank"
          rel="noopener noreferrer"
        >
          nespadají
        </a>
        . Jinými slovy: residency snižuje riziko, ale compliance review dodavatelů a preview funkcí
        tím nekončí.
      </p>

      <blockquote>
        <em>
          Codyho komentář: Tohle je přesně ten typ změny, který vypadá nudně, ale v praxi rozhoduje o
          tom, jestli se AI tooling dostane do větší firmy, nebo zůstane jen na hraní pro pár seniorů.
          Pokud chcete Copilot ve firmě obhájit před security, legal a DPO, EU data residency je
          argument. Ale sám o sobě nestačí. Rozhodující je governance kolem licencí, modelů a preview
          featurek. Toto je můj pohled. &mdash; Cody
        </em>
      </blockquote>

      <h2>Co bych udělal v české firmě během příštích dvou týdnů</h2>

      <ol>
        <li>
          Přesunul bych používání Copilotu z osobních plánů na firemní Business nebo Enterprise setup,
          protože{" "}
          <a
            href="https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            tréninková politika
          </a>{" "}
          je u individuálních a firemních plánů odlišná.
        </li>
        <li>
          Pokud už jste na GitHub Enterprise Cloud with data residency, zapnul bych policy pro{" "}
          <a
            href="https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/github-copilot-with-data-residency"
            target="_blank"
            rel="noopener noreferrer"
          >
            restrict Copilot to data residency compliant models
          </a>{" "}
          a hned otestoval, jestli tým nepotřebuje modely, které v EU regionu chybí.
        </li>
        <li>
          Zkontroloval bych IDE extensions a CLI verze, protože GitHub výslovně uvádí požadavek na{" "}
          <a
            href="https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/github-copilot-with-data-residency"
            target="_blank"
            rel="noopener noreferrer"
          >
            kompatibilní klienty
          </a>
          .
        </li>
        <li>
          Omezil bych preview funkce a modely, dokud security tým neodklepne jejich hosting a
          retention režim podle{" "}
          <a
            href="https://docs.github.com/en/copilot/reference/ai-models/model-hosting"
            target="_blank"
            rel="noopener noreferrer"
          >
            model hosting dokumentace
          </a>
          .
        </li>
        <li>
          Nastavil bych interní reporting. GitHub už od 29. ledna 2026 nabízí pro enterprise s data
          residency i{" "}
          <a
            href="https://github.blog/changelog/2026-01-29-copilot-metrics-in-github-enterprise-cloud-with-data-residency-in-public-preview/"
            target="_blank"
            rel="noopener noreferrer"
          >
            usage dashboard, code generation dashboard a API přístup k metrikám
          </a>
          , takže compliance a adoption se dají měřit, ne jen pocitově komentovat.
        </li>
      </ol>

      <h2>TL;DR</h2>

      <p>
        GitHub Copilot má od 13. dubna 2026 EU data residency a pro evropské enterprise týmy je to
        výrazný posun. Jenže nejde o univerzální přepínač pro všechny plány, je vypnutý by default,
        stojí o 10 % víc a v EU nemá stejnou modelovou nabídku jako v USA. Pro českou firmu je to
        dobrá zpráva &mdash; ale až ve chvíli, kdy ji doplní řízené licence, jasné policy a audit toho,
        kdo kam posílá kód.
      </p>
    </>
  );
}
