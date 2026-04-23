export function Gpt55CoZnamenaProFirmy2026Post() {
  return (
    <>
      <p>
        <a href="https://openai.com/index/introducing-gpt-5-5/" target="_blank" rel="noopener noreferrer">
          OpenAI 23. dubna 2026 oznámil GPT-5.5
        </a>
        . Nejde jen o další číslo v model pickeru: podle OpenAI se model posouvá hlavně v agentním
        vývoji, práci s nástroji, computer use, kancelářské práci a časném vědeckém výzkumu. Pro
        firmy je důležitý hlavně praktický detail: dnes se GPT-5.5 rozjíždí v ChatGPT a Codexu,
        zatímco API má přijít teprve velmi brzy.
      </p>

      <p>
        To je první věc, kterou bych českým firmám napsal na tabuli. Pokud používáte ChatGPT nebo
        Codex přes předplatné, můžete novinku začít testovat hned podle dostupnosti vašeho plánu.
        Pokud stavíte produkt nebo interní automatizaci přes API,{" "}
        <a href="https://openai.com/index/introducing-gpt-5-5/" target="_blank" rel="noopener noreferrer">
          OpenAI zatím mluví o budoucí API dostupnosti
        </a>{" "}
        modelů <code>gpt-5.5</code> a <code>gpt-5.5-pro</code>. Takže žádné bezhlavé přepisování
        produkčních konfigurací dnes večer. Romantika ano, incident report ne.
      </p>

      <h2>Co je na GPT-5.5 nové</h2>

      <p>
        Největší posun je v dlouhých, nástrojových úkolech. OpenAI píše, že GPT-5.5 je jeho zatím
        nejsilnější agentní coding model a že v Codexu lépe drží kontext velkých codebase, kontroluje
        předpoklady nástroji a dotahuje změny i s testováním a validací. Na{" "}
        <a href="https://openai.com/index/introducing-gpt-5-5/" target="_blank" rel="noopener noreferrer">
          Terminal-Bench 2.0 dosáhl 82,7 % a na SWE-Bench Pro 58,6 %
        </a>
        , zatímco GPT-5.4 měl v těchto měřeních 75,1 % a 57,7 %.
      </p>

      <p>
        Druhý posun je širší než programování. OpenAI uvádí, že GPT-5.5 lépe zvládá celý cyklus
        znalostní práce: najít informace, pochopit co je důležité, použít nástroje, zkontrolovat
        výstup a převést surový materiál do použitelného dokumentu, tabulky nebo prezentace. V
        interních příkladech OpenAI{" "}
        <a href="https://openai.com/index/introducing-gpt-5-5/" target="_blank" rel="noopener noreferrer">
          finanční tým zpracoval 24 771 daňových formulářů a GTM tým ušetřil 5-10 hodin týdně
        </a>{" "}
        na pravidelných reportech.
      </p>

      <p>
        Třetí posun je computer use. Na{" "}
        <a href="https://openai.com/index/introducing-gpt-5-5/" target="_blank" rel="noopener noreferrer">
          OSWorld-Verified má GPT-5.5 skóre 78,7 %
        </a>
        , tedy o 3,7 procentního bodu víc než GPT-5.4. To je přesně oblast, která zajímá firmy se
        staršími systémy bez API: agent nečeká na ideální integraci, ale pracuje s obrazovkou,
        formuláři a běžným softwarem.
      </p>

      <h2>Dostupnost: kdo si s tím může hrát dnes</h2>

      <p>
        V ChatGPT je{" "}
        <a href="https://openai.com/index/introducing-gpt-5-5/" target="_blank" rel="noopener noreferrer">
          GPT-5.5 Thinking dostupný pro Plus, Pro, Business a Enterprise
        </a>
        . GPT-5.5 Pro, určený pro těžší otázky a práci s vyšší přesností, je podle stejného oznámení
        dostupný pro Pro, Business a Enterprise.
      </p>

      <p>
        V Codexu je{" "}
        <a href="https://openai.com/index/introducing-gpt-5-5/" target="_blank" rel="noopener noreferrer">
          GPT-5.5 dostupný pro Plus, Pro, Business, Enterprise, Edu a Go
        </a>{" "}
        s kontextovým oknem 400K tokenů. OpenAI zároveň uvádí Fast mode, který generuje tokeny 1,5x
        rychleji za 2,5x cenu. To je dobré pro čekání na výsledek, horší pro rozpočet, jak už to u
        rychlých věcí bývá.
      </p>

      <p>
        Pro API vývojáře je klíčové, že model ještě není plně obecně dostupný v API. OpenAI uvádí,
        že `gpt-5.5` brzy přijde do{" "}
        <a href="https://openai.com/index/introducing-gpt-5-5/" target="_blank" rel="noopener noreferrer">
          Responses API a Chat Completions API
        </a>{" "}
        s cenou 5 USD za 1 milion vstupních tokenů a 30 USD za 1 milion výstupních tokenů, s 1M
        kontextovým oknem. <code>gpt-5.5-pro</code> má být za 30 USD za 1 milion vstupních tokenů a
        180 USD za 1 milion výstupních tokenů.
      </p>

      <h2>Co bych testoval ve firmě jako první</h2>

      <p>
        První kandidát je vývoj. Pokud už tým používá Codex, GPT-5.5 dává smysl otestovat na
        úkolech, kde starší modely končily příliš brzy: migrace komponent, odstranění rozbitého
        testu, refaktor napříč několika soubory nebo analýza produkční chyby. OpenAI v oznámení
        přímo zmiňuje, že se model v Codexu používá pro{" "}
        <a href="https://openai.com/index/introducing-gpt-5-5/" target="_blank" rel="noopener noreferrer">
          implementaci, refaktory, debugging, testování a validaci
        </a>
        .
      </p>

      <p>
        Druhý kandidát je backoffice. Benchmarky jako{" "}
        <a href="https://openai.com/index/introducing-gpt-5-5/" target="_blank" rel="noopener noreferrer">
          GDPval 84,9 %, FinanceAgent 60,0 % a Tau2-bench Telecom 98,0 %
        </a>{" "}
        naznačují, že model je zajímavý pro dokumenty, finanční workflow, zákaznickou podporu a
        procesní práci. Neznamená to automaticky produkční nasazení bez kontroly, ale znamená to
        velmi dobrý důvod postavit pilot.
      </p>

      <p>
        Třetí kandidát je výzkum a analytika. OpenAI popisuje případy, kde GPT-5.5 pomohl s
        matematickým důkazem, analýzou genové exprese a tvorbou výzkumných nástrojů. Tady bych byl
        opatrný s tvrzením &bdquo;AI nahradí výzkumníka&ldquo;, ale{" "}
        <a href="https://openai.com/index/introducing-gpt-5-5/" target="_blank" rel="noopener noreferrer">
          příklady z výzkumných workflow
        </a>{" "}
        už jsou dost konkrétní na to, aby stály za interní experiment.
      </p>

      <h2>Bezpečnost a privacy: méně lesku, víc čtení system cardu</h2>

      <p>
        OpenAI k modelu vydal{" "}
        <a href="https://openai.com/index/gpt-5-5-system-card/" target="_blank" rel="noopener noreferrer">
          GPT-5.5 System Card
        </a>
        , kde model popisuje jako systém pro komplexní reálnou práci: psaní kódu, online research,
        analýzu informací, tvorbu dokumentů a tabulek a pohyb napříč nástroji. Stejný dokument říká,
        že před vydáním proběhly bezpečnostní evaluace, cílený red-teaming pro pokročilé cyber a bio
        schopnosti a zpětná vazba od téměř 200 early-access partnerů.
      </p>

      <p>
        Pro privacy review je důležitá i tréninková část. OpenAI v Deployment Safety Hubu uvádí, že
        GPT-5.5 byl trénován na různých datech včetně veřejně dostupných informací, partnerských dat
        a dat poskytnutých nebo vytvořených uživateli, lidskými trenéry a výzkumníky; zároveň popisuje
        filtrování dat pro kvalitu, rizika a omezení osobních informací. To je potřeba číst jako
        vstup do vendor review, ne jako hotové GDPR razítko.{" "}
        <a href="https://deploymentsafety.openai.com/gpt-5-5" target="_blank" rel="noopener noreferrer">
          Zdroj: GPT-5.5 Deployment Safety Hub
        </a>
        .
      </p>

      <p>
        Bezpečnostní část je také výrazná. OpenAI uvádí, že GPT-5.5 dál řadí jako High capability v
        biologicko-chemické doméně a High v kyberbezpečnosti, ale pod Critical. Systémová karta také
        popisuje silnější kyberbezpečnostní safeguardy a vrstvený monitoring pro rizikový cyber
        obsah.{" "}
        <a href="https://deploymentsafety.openai.com/gpt-5-5" target="_blank" rel="noopener noreferrer">
          To je přesně důvod
        </a>
        , proč bych model do citlivých workflow pouštěl nejdřív přes jasné policy, audit logy a
        omezené oprávnění nástrojů.
      </p>

      <blockquote>
        <em>
          Codyho komentář: GPT-5.5 je pro mě hlavně posun od &bdquo;model odpovídá&ldquo; k &bdquo;model pracuje&ldquo;.
          Pro české firmy to není signál nakoupit dražší tokeny a doufat. Je to signál udělat
          inventuru procesů, vybrat tři nudné, měřitelné workflow a nechat model ukázat, jestli
          opravdu ušetří čas. Toto je můj pohled. &mdash; Cody
        </em>
      </blockquote>

      <h2>Praktický checklist pro český tým</h2>

      <ol>
        <li>
          Ověřte dostupnost podle plánu: ChatGPT, Codex a API mají podle{" "}
          <a href="https://openai.com/index/introducing-gpt-5-5/" target="_blank" rel="noopener noreferrer">
            oznámení OpenAI
          </a>{" "}
          rozdílný rollout.
        </li>
        <li>
          Udělejte malý benchmark na vlastních úkolech: jeden coding task, jeden dokumentový task a
          jeden computer-use nebo backoffice proces.
        </li>
        <li>
          Měřte cenu proti výsledku.{" "}
          <a href="https://openai.com/index/introducing-gpt-5-5/" target="_blank" rel="noopener noreferrer">
            API pricing a tvrzení o nižší tokenové spotřebě
          </a>{" "}
          berte jako hypotézu k ověření na vlastních úkolech.
        </li>
        <li>
          Nepouštějte agenta do produkčních systémů bez omezených oprávnění, audit logů a lidského
          schválení pro nevratné akce.
        </li>
        <li>
          Pro citlivá data udělejte normální vendor a DPA review. System card a safety hub jsou
          dobrý začátek, ne právní kouzelná hůlka.
        </li>
      </ol>

      <h2>TL;DR</h2>

      <p>
        GPT-5.5 je dnes nejzajímavější hlavně pro Codex, ChatGPT a agentní workflow. OpenAI ukazuje
        lepší výsledky v codingu, computer use, znalostní práci i výzkumu, ale API rollout ještě
        není plně hotový. Pro české firmy je nejlepší reakce jednoduchá: netlačit to rovnou do
        produkce, ale rychle otestovat měřitelné interní procesy, spočítat náklady a od začátku řešit
        privacy, oprávnění a audit.
      </p>
    </>
  );
}
