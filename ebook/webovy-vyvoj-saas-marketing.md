# Webový vývoj, SaaS a marketing po česku

_Praktický e-book od Codyho pro podnikatele, freelancery a malé týmy, které chtějí stavět digitální produkty chytře, udržitelně a privacy-first v Evropě._

## Pro koho je tenhle e-book

Tenhle text je pro lidi, kteří nechtějí jen „mít web“, ale chtějí z webu, aplikace nebo SaaS udělat funkční obchodní nástroj. Není to akademická učebnice ani katalog buzzwordů. Je to pracovní průvodce: co si rozmyslet, co postavit, co neměřit zbytečně, kde se nespálit a jak si nenechat vlastní data odnést na druhý konec světa jen proto, že někdo řekl „tohle používají všichni“.

*Codyho komentář:* Nejlepší digitální produkt není ten, který má nejvíc funkcí. Je to ten, který má nejjasnější důvod existovat, nejkratší cestu k hodnotě a nejméně skrytých dluhů — technických, obchodních i datových.

## Pracovní osnova

1. **Základ produktu** — komu sloužíš, jaký problém řešíš a proč by za to měl někdo platit.
2. **Web jako prodejní systém** — homepage, nabídka, landing pages, SEO, důvěryhodnost a konverze.
3. **SaaS od nápadu k MVP** — minimum funkcí, onboarding, pricing, billing, support a první zákazníci.
4. **Technický stack bez cirkusu** — architektura, hosting, databáze, monitoring, zálohy a rozumná automatizace.
5. **Marketing bez šmírování** — obsah, přímé kanály, RSS, referral, komunitní růst a analytika s respektem.
6. **Produktivita zakladatele** — rozhodování, prioritizace, dokumentace, rutiny a delegování bez chaosu.
7. **Privacy-first provoz v Evropě** — data minimization, evropské nástroje, bezpečnostní návyky a důvěra jako výhoda.
8. **Checklisty a šablony** — praktické otázky před startem, launch checklist, audit webu a měření.

---

## 1. Základ produktu: než začneš kreslit logo

Spousta webů a SaaS projektů nezačne špatným kódem. Začne mlhavou větou typu: „Chceme moderní platformu pro firmy.“ To zní hezky, ale nedá se podle toho navrhnout homepage, pricing ani první verze produktu. Než se řeší framework, barvy a formulář na demo, potřebuješ ostrý produktový základ.

### 1.1 Jedna věta, která ušetří měsíce práce

Začni větou:

> Pomáháme **[konkrétní skupině lidí]** dosáhnout **[měřitelný výsledek]** bez **[hlavní bolest nebo riziko]**.

Příklady:

- Pomáháme menším účetním firmám zpracovat klientské požadavky rychleji bez ztrácení e-mailů v inboxu.
- Pomáháme lokálním výrobcům získávat poptávky z webu bez závislosti na placené reklamě.
- Pomáháme SaaS týmům provozovat zákaznickou analytiku v Evropě bez zbytečného sběru osobních dat.

Dobrá věta není slogan. Je to filtr. Když se objeví nápad na novou funkci, stránku nebo integraci, zeptáš se: pomáhá to přesně téhle skupině dosáhnout přesně tohohle výsledku? Pokud ne, patří to do pozdějšího backlogu nebo rovnou do koše. Koš je mimochodem nejlevnější projektový manažer.

### 1.2 Problém musí bolet častěji než jednou za rok

Produkt má větší šanci uspět, když řeší problém, který je:

- **Častý** — zákazník na něj naráží opakovaně, ne jednou za sezónu.
- **Drahý** — stojí čas, peníze, reputaci nebo obchodní příležitosti.
- **Konkrétní** — dá se ukázat na příkladu z běžného dne.
- **Rozpoznatelný** — zákazník ho umí popsat vlastními slovy.
- **Řešitelný jednodušeji** — tvoje řešení odstraní tření, ne přidá další systém na hlídání.

Špatný signál: zákazník říká „to je zajímavé“. Dobrý signál: zákazník říká „tohle řešíme každý týden, ukaž mi to“. Nejlepší signál: zákazník se ptá, kolik to stojí, ještě než máš hotovou druhou obrazovku.

### 1.3 Nekupuje se software, kupuje se posun

U SaaS i webových služeb lidé nekupují seznam funkcí. Kupují posun z bodu A do bodu B:

- z chaosu v poptávkách do přehledného pipeline,
- z ručního reportingu do automatického přehledu,
- z anonymního webu do důvěryhodného prodejního kanálu,
- z datového rizika do kontrolovaného evropského provozu.

Proto si pro každou hlavní funkci napiš dvojici:

- **Funkce:** Co systém dělá.
- **Výsledek:** Co díky tomu zákazník získá.

Příklad:

- Funkce: Export leadů do CSV.
- Výsledek: Obchodník může jednou týdně projít nové poptávky bez kopírování z e-mailů.

- Funkce: Privacy-first analytika bez osobních profilů.
- Výsledek: Zakladatel vidí, které stránky fungují, aniž by z webu dělal sledovací vánoční stromeček.

*Codyho komentář:* Funkce bez výsledku je jako tlačítko ve výtahu, které jen hezky svítí. Uživatel ho zmáčkne, ale nikam nejede.

### 1.4 První nabídka má být úzká

Když začínáš, neprodávej všechno všem. Široká nabídka působí bezpečně, ale ve skutečnosti rozmazává důvod ke koupi. Úzká nabídka říká: „Rozumíme přesně tobě.“

Místo:

> Děláme weby, aplikace, marketing a automatizace pro firmy všech velikostí.

Zkus:

> Stavíme privacy-first weby a jednoduché SaaS nástroje pro evropské B2B firmy, které chtějí získávat poptávky bez závislosti na reklamních platformách.

Úzká nabídka neznamená, že odmítneš všechny ostatní zakázky. Znamená, že tvůj web, obsah a prodejní argumenty mají jasný střed gravitace.

### 1.5 Mini validace před vývojem

Než se pustíš do první verze, udělej malý validační sprint. Cílem není mít statistickou jistotu. Cílem je zjistit, jestli mluvíš o problému, který lidé opravdu poznávají.

Postup:

1. Napiš jednu produktovou větu podle šablony výše.
2. Sepiš tři konkrétní situace, kdy problém nastává.
3. Najdi pět lidí nebo firem, kterých se problém může týkat.
4. Zeptej se na jejich současný postup, ne na názor na tvůj nápad.
5. Zapiš přesné fráze, které používají.
6. Uprav nabídku podle slov zákazníků, ne podle slovníku startupového LinkedInu.

Otázky do rozhovoru:

- „Kdy jste tohle řešili naposledy?“
- „Co se stane, když se to nevyřeší?“
- „Jak to řešíte dnes?“
- „Co je na současném řešení nejotravnější?“
- „Kdo o tom rozhoduje a kdo s tím denně pracuje?“

Vyhni se otázce „Líbilo by se vám, kdybychom udělali aplikaci na…?“ Lidé jsou milí. Řeknou ano, aby tě nezranili. Peněženka takhle zdvořilá nebývá.

### 1.6 Checklist: produktový základ

Před dalším krokem si odškrtni:

- [ ] Umím jednou větou říct, komu pomáhám a s čím.
- [ ] Znám konkrétní situace, kdy problém vzniká.
- [ ] Vím, jak zákazník problém řeší dnes.
- [ ] Umím popsat výsledek, ne jen funkce.
- [ ] Mám úzkou první cílovou skupinu.
- [ ] Mám seznam frází, které používají skuteční zákazníci.
- [ ] Vím, co do první verze nepatří.

Pokud máš u poloviny bodů mlhu, nevadí. To není selhání, to je mapa práce. Jen zatím nestav produkt jako by už bylo jasno. Nejdřív zostři problém, pak teprve řeš design a kód.

---

## 2. Web jako prodejní systém: ne digitální vizitka

Web malé firmy nebo SaaS produktu často vznikne jako kompromis mezi tím, co se líbí zakladateli, co umí šablona a co se zrovna vejde do rozpočtu. Výsledek pak sice existuje, ale nepracuje. Lidé přijdou, chvíli koukají, nepochopí nabídku, odejdou — a analytika jen smutně mává kapesníčkem.

Prodejní web má jiný úkol: co nejrychleji propojit správného návštěvníka se správnou akcí. Nemusí být agresivní. Nemusí blikat. Nemusí mít deset popupů, které vypadají jako zoufalý stánek na pouti. Musí být jasný, důvěryhodný a měřitelný.

### 2.1 Homepage musí odpovědět do pěti vteřin

První obrazovka webu není místo pro poetickou mlhu. Návštěvník si má během pár vteřin odpovědět na tři otázky:

- **Co nabízíš?** Produkt, službu nebo výsledek pojmenuj lidsky.
- **Pro koho to je?** Dej jasný signál, jestli je návštěvník na správném místě.
- **Co mám udělat dál?** Nabídni jednu hlavní akci a jednu bezpečnou alternativu.

Slabý hero text:

> Inovativní digitální řešení pro moderní firmy.

Lepší hero text:

> Stavíme rychlé privacy-first weby pro B2B firmy, které chtějí získávat poptávky bez reklamního sledování.

Pod tím může následovat krátké vysvětlení:

> Od strategie přes design po provoz v EU. Pomůžeme vám zpřehlednit nabídku, spustit měření bez cookies chaosu a udělat z webu obchodní kanál.

Hlavní tlačítko: „Domluvit konzultaci“. Vedlejší odkaz: „Podívat se na postup“ nebo „Přečíst případový příklad“.

*Codyho komentář:* Jestli návštěvník po první obrazovce neví, co děláš, není to jeho chyba. Web není hádanka z únikové hry. I když uznávám, že některé homepage by si zasloužily vlastní escape room soundtrack.

### 2.2 Jedna stránka, jedna hlavní akce

Každá důležitá stránka má mít jeden primární cíl. Ne pět rovnocenných cílů, protože „třeba si někdo vybere“. Když dáš návštěvníkovi moc možností, často neudělá žádnou.

Příklady cílů:

- Homepage: poslat správné lidi na konzultaci, demo nebo detail služby.
- Landing page: vysvětlit jednu konkrétní nabídku a získat poptávku.
- Pricing: pomoct vybrat tarif a snížit nejistotu před platbou.
- Blogový článek: vybudovat důvěru a nabídnout další relevantní krok.
- Dokumentace: snížit počet dotazů na podporu a zrychlit aktivaci uživatele.

U každé stránky si napiš:

1. Kdo na stránku přichází?
2. Co už pravděpodobně ví?
3. Co potřebuje pochopit?
4. Jaká je jedna hlavní akce?
5. Co je bezpečná alternativa pro člověka, který ještě není připravený?

Bezpečná alternativa není slabost. U dražších B2B služeb nebo nového SaaS produktu lidé často nekoupí hned. Můžeš jim nabídnout ukázku procesu, technický článek, auditní checklist, RSS odběr nebo možnost položit otázku přímo. Důležité je nehonit je přes remarketingové laso, ale dát jim důvod se vrátit.

### 2.3 Důvěra se skládá z detailů

Design může udělat první dojem, ale důvěru vytváří konkrétní důkazy. Čím větší riziko zákazník vnímá, tím víc potřebuje vidět, že víš, co děláš.

Na web přidej hlavně:

- **Konkrétní výsledky:** „Zkrátili jsme načítání homepage z 4,8 s na 1,2 s“ je lepší než „optimalizujeme výkon“.
- **Proces:** Ukaž kroky spolupráce, aby zákazník věděl, co se bude dít po odeslání formuláře.
- **Ukázky práce:** Screenshoty, krátké rozbory, veřejné reference nebo anonymizované příklady.
- **Technické hranice:** Napiš, co neděláš. Paradoxně to zvyšuje důvěru, protože nepůsobíš jako agentura na všechno.
- **Kontakt na člověka:** Firma bez tváře působí levně, i když má drahý gradient.

Pro privacy-first značku je důvěra i otázka provozu. Vysvětli jednoduše:

- kde běží hosting,
- jaké analytické nástroje používáš,
- jestli používáš cookies a proč,
- jak dlouho držíš poptávková data,
- komu data neposíláš.

Nemusí z toho být právnický román. Stačí stránka „Soukromí stručně“, která mluví lidsky a odkazuje na plné zásady zpracování. U evropských zákazníků je to obchodní argument, ne jen povinnost schovaná v patičce.

### 2.4 Landing page není zmenšená homepage

Landing page má řešit jednu konkrétní nabídku, segment nebo problém. Když člověk klikne z článku o rychlosti webu, nemá dopadnout na obecnou stránku „Služby“, kde jsou weby, aplikace, SEO, automatizace a trochu brandingu navrch. Má dopadnout na stránku o zrychlení webu.

Dobrá struktura landing page:

1. **Nadpis:** pojmenuje výsledek pro konkrétní cílovku.
2. **Problém:** ukáže situace, které návštěvník poznává.
3. **Řešení:** vysvětlí, jak pomáháš a co je součástí.
4. **Důkaz:** reference, čísla, screenshoty, postup nebo mini případovka.
5. **Námitky:** cena, čas, migrace, bezpečnost, vlastnictví dat.
6. **Akce:** jasné CTA s očekáváním, co se stane po kliknutí.

Příklad pro SaaS:

- Nadpis: „Jednoduchý zákaznický portál pro servisní firmy v EU.“
- Problém: „Požadavky mizí v e-mailech, klienti se ptají na stav a tým přepisuje data ručně.“
- Řešení: „Portál pro zadání požadavku, stav řešení, interní poznámky a měsíční report.“
- Důkaz: „První verze do 4 týdnů, provoz na evropské infrastruktuře, export dat bez vendor lock-inu.“
- Akce: „Probrat portál na 30 minut.“

Landing page nemusí být dlouhá. Musí být přesná. Dlouhá stránka s vatou je horší než krátká stránka, která trefí bolest a vysvětlí další krok.

### 2.5 Měř jen to, podle čeho budeš rozhodovat

Měření má pomáhat rozhodování, ne uspokojovat zvědavost. Privacy-first přístup neznamená, že budeš web řídit poslepu. Znamená, že nebudeš sbírat víc dat, než potřebuješ.

Praktické minimum:

- návštěvy klíčových stránek,
- zdroje návštěvnosti na rozumné úrovni,
- kliknutí na hlavní CTA,
- odeslané formuláře,
- nejčtenější články,
- chyby formulářů a technické problémy.

Co většinou nepotřebuješ na začátku:

- nahrávání každého pohybu myši,
- agresivní fingerprinting,
- reklamní pixely na všech stránkách,
- deset nástrojů, které se navzájem měří a navzájem si překážejí,
- osobní profily návštěvníků bez jasného důvodu.

Místo otázky „Co všechno můžeme měřit?“ použij lepší otázku:

> Jaké rozhodnutí uděláme jinak, když tu metriku uvidíme?

Pokud odpověď neexistuje, metriku zatím nepotřebuješ. Ušetříš výkon, právní riziko i mentální prostor. A možná i pár meetingů, což je nejčistší forma produktivity.

### 2.6 Checklist: web jako obchodní nástroj

Před spuštěním nebo redesignem webu si projdi:

- [ ] První obrazovka jasně říká, co nabízím, komu a proč.
- [ ] Každá klíčová stránka má jednu hlavní akci.
- [ ] CTA říká konkrétně, co se stane dál.
- [ ] Nabídka je napsaná jazykem zákazníka, ne interním žargonem.
- [ ] Web obsahuje důkazy: výsledky, proces, ukázky nebo reference.
- [ ] Stránka soukromí vysvětluje měření a práci s daty lidsky.
- [ ] Nepoužívám zbytečné trackery ani reklamní skripty jen ze zvyku.
- [ ] Měřím jen metriky, podle kterých budu opravdu rozhodovat.
- [ ] Formuláře jsou krátké a ptají se jen na nutná data.
- [ ] Existuje bezpečný další krok pro lidi, kteří ještě nejsou připraveni koupit.

Web není hotový ve chvíli, kdy se nasadí. Je hotový až ve chvíli, kdy víš, co na něm funguje, co návštěvníky mate a co budeš zlepšovat příště. Spuštění je začátek učení, ne cílová páska.

---

## 3. SaaS od nápadu k MVP: méně funkcí, víc důkazů

SaaS projekt svádí k tomu, aby člověk začal architekturou, dashboardem, nastavením rolí, billingem, notifikacemi, integracemi a krásným prázdným stavem pro každou obrazovku. To všechno může být jednou důležité. Jenže první otázka nezní „kolik toho umíme postavit?“. První otázka zní: „Dokážeme opakovaně doručit jednu konkrétní hodnotu lidem, kteří za ni mají důvod platit?“

MVP není ošizený produkt. MVP je nejmenší důvěryhodný experiment, který ověří, jestli se kolem problému dá postavit byznys. Má být dost malý na rychlé spuštění, dost užitečný na reálné použití a dost měřitelný na jasné rozhodnutí, co dál.

### 3.1 MVP začíná rozhodnutím, ne backlogem

Než napíšeš první user story, napiš si rozhodnutí, které má MVP umožnit:

> Po první verzi budeme vědět, jestli **[cílovka]** použije **[hlavní workflow]** k dosažení **[výsledku]** a jestli má smysl do produktu investovat další měsíc.

Příklady:

- Servisní firma zadá a uzavře aspoň deset zákaznických požadavků bez e-mailového chaosu.
- B2B konzultant vytvoří tři nabídky z šablony a pošle je klientům bez ručního kopírování.
- Malý SaaS tým uvidí, které onboardingové kroky lidé dokončí, bez nasazení agresivní analytiky.

Tahle věta chrání produkt před „ještě přidáme“ epidemií. Když se objeví nápad na štítky, exporty, barevné motivy nebo veřejné API, zeptej se: pomůže nám to udělat výše uvedené rozhodnutí? Pokud ne, počká to. Backlog není skládka úzkostí.

### 3.2 Vyber jedno hlavní workflow

SaaS produkt obvykle není jedna funkce, ale řetěz kroků. MVP má ověřit hlavně ten řetěz, který nese hodnotu.

Příklad zákaznického portálu pro servisní firmu:

1. Klient zadá požadavek.
2. Tým ho přiřadí odpovědné osobě.
3. Řešitel změní stav a doplní poznámku.
4. Klient vidí aktuální stav.
5. Manažer na konci týdne vidí přehled otevřených věcí.

Tohle je hlavní workflow. V MVP nepotřebuješ složitý editor oprávnění, barevné štítky podle oddělení ani sedm typů notifikací. Potřebuješ, aby požadavek bezpečně prošel systémem a všichni zúčastnění pochopili, co se děje.

Dobré hlavní workflow má tři vlastnosti:

- **Začíná reálnou situací:** uživatel má problém teď, ne hypoteticky v budoucnu.
- **Končí viditelnou hodnotou:** někdo něco ušetřil, získal, vyřešil nebo pochopil.
- **Dá se sledovat bez šmírování:** stačí stav, čas, počet dokončení nebo jednoduchá zpětná vazba.

Privacy-first poznámka: už v MVP odděl provozní data od analytiky. Provozní data jsou to, co uživatel do produktu vložil, aby služba fungovala. Analytika je to, co sleduješ kvůli zlepšování. Když tyhle dvě věci smícháš, později se špatně vysvětluje, proč vlastně existují.

### 3.3 Manuální práce není ostuda

Zakladatelé se často bojí, že MVP musí být plně automatizované. Nemusí. Pokud zákazník dostane hodnotu, část procesu může být zpočátku ruční. Důležité je vědět, co je produktový slib a co je interní provizorium.

Příklady rozumného ručního MVP:

- Report se generuje jednou denně ručně z databáze, dokud nevíš, jaký formát lidé opravdu chtějí.
- Import zákaznických dat dělá tým přes skript, než postavíš samoobslužný importér.
- Onboarding probíhá přes krátký call, protože tím získáš lepší otázky než z anonymního formuláře.
- Fakturace běží zpočátku mimo produkt, pokud potřebuješ ověřit hlavně používání, ne komplexní billing.

Ručně ale nedělej věci, které ohrožují důvěru: bezpečnost, zálohy, přístupy, auditní stopu u citlivých dat nebo mazání dat na žádost zákazníka. Tam provizorium rychle smrdí průšvihem, a ne tím romantickým startupovým způsobem.

*Codyho komentář:* Manuální MVP je jako stánek s kávou před kavárnou. Ověříš, jestli lidé chodí, co si objednávají a kolik jsou ochotní zaplatit. Jen do toho stánku nedávej papírovou krabici místo trezoru.

### 3.4 Onboarding je součást produktu

První verze SaaS často selže ne proto, že neumí dost funkcí, ale protože uživatel nepochopí první krok. Onboarding není jen uvítací obrazovka. Je to cesta od „mám účet“ k „aha, už mi to pomohlo“.

Pro MVP si definuj aktivační moment:

- U portálu: první založený a uzavřený požadavek.
- U nástroje na nabídky: první odeslaná nabídka klientovi.
- U analytiky: první dashboard s reálnými návštěvami a jedním sledovaným cílem.
- U interní automatizace: první úspěšně dokončený proces bez ručního předávání.

Pak odstraň všechno, co stojí mezi registrací a tímto momentem:

- neptej se na zbytečné údaje,
- nevysvětluj pět modulů najednou,
- nepouštěj uživatele do prázdného dashboardu bez příkladu,
- nabídni ukázková data, šablonu nebo průvodce,
- pošli krátký e-mail s jedním dalším krokem, ne román s patnácti odkazy.

Privacy-first onboarding znamená, že uživateli férově řekneš, jaká data potřebuješ a proč. „Potřebujeme název firmy, aby se zobrazil na nabídce“ je lepší než formulář, který se ptá na telefon, obrat a velikost týmu jen proto, že marketing má hlad.

### 3.5 Pricing testuj dřív, než je pohodlné

Cena není dekorace, která se přidá na konec webu. Je to součást produktu. Pokud se o ceně bojíš mluvit, často to znamená, že ještě nemáš dost jasně pojmenovanou hodnotu.

V MVP nemusíš mít dokonalý ceník. Potřebuješ ale otestovat, jestli zákazník chápe jednotku hodnoty:

- platí za uživatele,
- za firmu,
- za počet požadavků,
- za objem dat,
- za projekt,
- za úsporu času nebo provozní jistotu.

U menších B2B SaaS projektů bývá lepší začít jednoduše:

- jeden pilotní tarif,
- jasný rozsah,
- férový limit,
- možnost ukončit spolupráci,
- export dat bez vydírání.

Do první verze nedávej cenové triky, kterým nerozumíš ani ty po druhé kávě. Transparentní cena buduje důvěru. A pokud produkt stojí na evropském provozu, podpoře a kontrole nad daty, klidně to v ceně pojmenuj. Není to náklad navíc. Je to část hodnoty.

### 3.6 Co měřit po spuštění MVP

Po spuštění první verze si neotevírej dvacet grafů. Vyber pár signálů, které odpovídají hlavnímu workflow.

Užitečné MVP metriky:

- **Aktivace:** kolik lidí dokončí první hodnotný krok.
- **Dokončení workflow:** kolik rozběhnutých procesů dojde do konce.
- **Frekvence použití:** jestli se uživatelé vrací v rytmu, který odpovídá problému.
- **Ruční zásahy:** co tým musí pořád zachraňovat nebo vysvětlovat.
- **Kvalitativní zpětná vazba:** co uživatelé popisují vlastními slovy jako přínos nebo tření.
- **Ochota platit:** jestli se rozhovor posouvá od „zajímavé“ k „pošli fakturu“.

Technicky často stačí kombinace aplikačních událostí, serverových logů, jednoduché privacy-first analytiky a rozhovorů. Nepotřebuješ identifikovat každý pohyb člověka. Potřebuješ pochopit, kde se láme hodnota.

### 3.7 Checklist: SaaS MVP bez přepálení

Před tím, než začneš stavět první verzi, projdi si:

- [ ] Umím jednou větou říct, jaké rozhodnutí má MVP umožnit.
- [ ] Mám vybranou jednu cílovku a jeden hlavní problém.
- [ ] Znám hlavní workflow od vstupu po viditelnou hodnotu.
- [ ] Vím, které části mohou být zpočátku ruční a které musí být robustní hned.
- [ ] Mám definovaný aktivační moment uživatele.
- [ ] Onboarding vede k jednomu konkrétnímu prvnímu výsledku.
- [ ] Pricing testuje jednotku hodnoty, ne jen náhodnou částku.
- [ ] Uživatel může získat svá data ven bez vendor lock-inu.
- [ ] Sbírám jen analytiku, podle které udělám rozhodnutí.
- [ ] Vím, co po pilotu znamená pokračovat, změnit směr nebo projekt zastavit.

MVP má být konec dohadů, ne začátek nekonečného vývoje. Když první verze ukáže, že lidé workflow používají, chápou hodnotu a jsou ochotní platit, máš důvod přidávat další vrstvu. Když to neukáže, získal jsi levnou lekci. A levná lekce je pořád lepší než drahý dashboard, do kterého se nikdo nepřihlásí.


---

## 4. Technický stack bez cirkusu

Technický stack není náboženství. Je to sada rozhodnutí, která má pomáhat produktu růst, týmu pracovat rychleji a zákazníkům věřit, že jejich data neskončí někde v temném datovém sklepě. Začínající projekty se často zaseknou na debatě, jestli použít ten nejnovější framework, databázi s kosmickým maskotem nebo deployment platformu, která má hezčí landing page než jejich vlastní produkt. To je lákavé, ale nebezpečné.

Dobrá technologie je ta, kterou tým umí provozovat, vysvětlit a v krizové situaci opravit. Pokud stack vyžaduje tři seniorní specialisty, aby se změnil text v patičce, možná nestavíš SaaS, ale malý chrám úzkosti.

### 4.1 Začni provozním slibem

Než vybereš technologie, napiš si provozní slib. Ten říká, co musí být pravda, aby zákazník mohl produktu důvěřovat.

Příklad pro B2B SaaS v Evropě:

> Produkt běží na evropské infrastruktuře, ukládá jen nutná data, má pravidelné zálohy, jednoduchý export, monitoring dostupnosti a jasný postup při incidentu.

Z takového slibu se stack vybírá snáz. Nepotřebuješ „nejlepší“ databázi obecně. Potřebuješ databázi, kterou umíš zálohovat, obnovit, škálovat v rozumném rozsahu a provozovat tam, kde dávají smysl tvoje datové závazky.

Minimum provozního slibu:

- **Region:** kde fyzicky běží aplikace, databáze, soubory a zálohy.
- **Vlastnictví dat:** kdo má přístup k zákaznickým datům a jak se data exportují.
- **Dostupnost:** jak rychle poznáš výpadek a kdo ho řeší.
- **Obnova:** jak často zálohuješ a jak rychle dokážeš obnovit službu.
- **Změny:** jak nasazuješ nové verze bez zbytečného rizika.

Privacy-first přístup začíná už tady. Když si region, zálohy a přístupy necháš „vyřešit později“, později zjistíš, že jsou zapletené do každé části systému. A rozmotávání datových špaget není zrovna disciplína, kterou chceš dělat v pátek večer.

### 4.2 Vyber nudné technologie pro důležité části

Nudné technologie nejsou urážka. Jsou výhoda. U kritických částí produktu chceš věci, které mají dokumentaci, komunitu, nástroje pro debugování a dost lidí na trhu, kteří jim rozumí.

Typický rozumný základ pro malý web nebo SaaS:

- **Frontend:** jeden hlavní framework, který tým opravdu zná.
- **Backend:** jednoduché API, jasná autentizace a minimum magických vrstev.
- **Databáze:** relační databáze pro obchodní data, pokud nemáš dobrý důvod pro něco jiného.
- **Úložiště souborů:** oddělené od aplikace, s jasnými pravidly přístupu.
- **E-mail:** transakční e-maily přes službu, která umožňuje rozumné doručování a správu domény.
- **Monitoring:** dostupnost, chyby a základní výkon, ne špionážní panel každého kliknutí.

Není ostuda začít monolitem. Naopak: monolit je často nejlepší volba pro tým, který ještě hledá product-market fit. Mikroslužby řeší organizační problémy velkých týmů. Když jsi dva lidé a jeden pes v kanceláři, mikroslužby ti spíš přidají síťové chyby, deployment orchestrace a existenciální bolest.

*Codyho komentář:* Nový framework může být skvělý. Ale pokud ho vybíráš hlavně proto, že má hezké demo na konferenci, dej si sklenici vody, projdi se a vrať se k problému zákazníka. Konference nejsou backlog.

### 4.3 Architektura má chránit změnu

Dobrá architektura není ta, která vypadá nejchytřeji v diagramu. Je to ta, která dovolí měnit produkt bez rozbití všeho okolo.

U malého SaaS se vyplatí držet několik hranic:

- **Doménová logika mimo UI:** pravidla jako „kdo může uzavřít požadavek“ nepatří jen do komponenty tlačítka.
- **Databázové operace na jednom místě:** ať víš, kde se čtou a mění citlivá data.
- **Integrace izolovaně:** platební brána, e-mailing nebo analytika nemají prorůst do celého kódu.
- **Konfigurace přes prostředí:** tajné klíče, regiony a URL nepatří do repozitáře.
- **Export dat jako produktová funkce:** ne až jako panická reakce na odcházejícího zákazníka.

Příklad: pokud stavíš zákaznický portál, odděl „požadavek“ jako obchodní objekt od toho, jak se zrovna zobrazuje v tabulce. Dnes má požadavek stav, prioritu a komentář. Zítra může mít SLA, interní poznámky, auditní záznam nebo zákaznické hodnocení. Když je všechno slepené v jedné stránce, každá změna bolí.

Privacy-first architektura navíc potřebuje jasně vědět, kde vznikají osobní údaje. Kontaktní formulář, uživatelský účet, fakturace, support a analytika mají různé účely. Když je oddělíš technicky i dokumentačně, snáz nastavíš přístupy, retenci a mazání dat.

### 4.4 Nasazení má být opakovatelné

Nasazení nesmí být rituál, který funguje jen na notebooku člověka jménem „ten, co to kdysi nastavil“. Každý projekt potřebuje jednoduchý, opakovatelný postup od změny v kódu po běžící produkci.

Praktické minimum:

1. Kód je ve verzovacím systému.
2. Každá změna jde přes pull request nebo aspoň jasný commit.
3. Build a základní testy běží automaticky nebo jedním příkazem.
4. Produkční proměnné jsou mimo repozitář.
5. Nasazení má log, stav a možnost návratu k předchozí verzi.
6. Po deployi se ověří homepage, hlavní workflow a formuláře.

U menších projektů stačí jednoduchý pipeline. Důležité je, aby byl popsaný. Soubor `README`, interní poznámka nebo runbook ušetří hodiny, až budeš po třech měsících řešit, proč se e-mail neposílá, i když „se přece nic neměnilo“.

Do runbooku napiš:

- jak spustit projekt lokálně,
- jak spustit testy,
- jak nasadit produkci,
- kde najít logy,
- jak obnovit databázi ze zálohy,
- koho kontaktovat při výpadku externí služby.

Runbook nemusí být krásný. Musí existovat. Krása přijde později, pravděpodobně nikdy, ale existence stačí.

### 4.5 Monitoring bez paniky a bez šmírování

Monitoring má odpovědět na otázku: funguje služba a kde se láme uživatelská hodnota? Nemá z tvého produktu udělat sledovací laboratoř.

Sleduj hlavně:

- **Dostupnost:** jestli web a API odpovídají.
- **Chyby:** výjimky, pády, neúspěšné formuláře, chyby plateb nebo e-mailů.
- **Výkon:** pomalé stránky, pomalé dotazy, dlouhé fronty úloh.
- **Kapacitu:** místo na disku, velikost databáze, fronty, limity služeb.
- **Produktové signály:** dokončení hlavního workflow a aktivační momenty.

U privacy-first provozu si dej pozor na nástroje, které automaticky sbírají celé URL s tokeny, obsah formulářů, session replay nebo detailní fingerprinting. Pokud něco nepotřebuješ pro provoz, podporu nebo konkrétní rozhodnutí, nesbírej to. Méně dat znamená méně rizika, méně vysvětlování a často i méně hluku v grafech.

Dobrý incident proces může být jednoduchý:

1. Detekuj problém automaticky.
2. Ověř dopad na zákazníky.
3. Stabilizuj službu.
4. Zapiš příčinu a nápravu.
5. Pošlete zákazníkům stručnou informaci, pokud se jich incident dotkl.

Transparentnost není slabost. Pokud zákazník vidí, že problém umíš přiznat, vysvětlit a opravit, důvěra často utrpí méně než při tichém mlžení.

### 4.6 Zálohy testuj, ne jen nastavuj

Záloha, kterou nikdo nikdy neobnovil, je spíš talisman než bezpečnostní opatření. Může fungovat. Taky nemusí. A zjistit to až v den havárie je disciplína pro lidi, kteří mají rádi adrenalin a špatný spánek.

U databází a souborů si stanov:

- jak často se zálohuje,
- kam se zálohy ukládají,
- kdo k nim má přístup,
- jak dlouho se drží,
- jak se šifrují,
- jak se ověřuje obnova.

Jednou za čas proveď test obnovy do odděleného prostředí. Ne do produkce, ne na ostrá data v náhodném dumpu na ploše, ale do bezpečného prostoru, kde ověříš, že data skutečně dostaneš zpět. Výsledek zapiš: datum, kdo test dělal, co se obnovilo a jak dlouho to trvalo.

Pro zákazníky je dobré umět jednoduše říct: „Zálohujeme pravidelně, obnovu testujeme a přístup k zálohám má omezený počet lidí.“ Nemusíš ukazovat interní detaily, ale musíš vědět, že to není jen věta do obchodní prezentace.

### 4.7 Checklist: stack, který přežije realitu

Než označíš technický základ za hotový, projdi si:

- [ ] Víme, kde běží aplikace, databáze, soubory a zálohy.
- [ ] Umíme vysvětlit, proč jsme vybrali hlavní části stacku.
- [ ] Kritická obchodní logika není schovaná jen v UI.
- [ ] Integrace jsou izolované a dají se vyměnit bez přepisování celého produktu.
- [ ] Tajné klíče a produkční konfigurace nejsou v repozitáři.
- [ ] Nasazení je opakovatelné a má popsaný rollback.
- [ ] Monitoring hlídá dostupnost, chyby, výkon a hlavní workflow.
- [ ] Analytika nesbírá víc dat, než potřebujeme pro rozhodování.
- [ ] Zálohy existují, jsou chráněné a obnova byla prakticky otestovaná.
- [ ] Máme krátký runbook pro výpadek, deploy a obnovu dat.

Technický stack má být tichý společník. Když funguje, nikdo o něm moc nemluví. Když nefunguje, sežere produkt, roadmapu i náladu v týmu. Proto vybírej technologie podle provozní reality, ne podle toho, co zrovna vypadá nejlépe na screenshotu z prezentace.


## 5. Marketing bez šmírování: růst, který neničí důvěru

Marketing má přivádět správné lidi ke správné nabídce. Nemá z každého návštěvníka udělat složku v databázi, kterou nikdo nepotřebuje, ale všichni se jí pak bojí smazat. Privacy-first marketing není marketing bez dat. Je to marketing s menším množstvím lepších dat, jasným účelem a respektem k tomu, že zákazník není chodící reklamní cookie.

U malých firem a SaaS projektů je to často výhoda. Nemáš rozpočet ani tým na nekonečné reklamní experimenty, takže potřebuješ kanály, které staví důvěru dlouhodobě: obsah, doporučení, přímé odkazy, partnerství, komunita, RSS, e-mail na základě souhlasu a produkt, který si lidé pamatují.

*Codyho komentář:* Pokud tvůj marketing funguje jen tehdy, když o uživateli víš skoro všechno, možná nemáš marketingový systém. Možná máš jen velmi drahý dalekohled.

### 5.1 Začni poptávkou, ne kanálem

Častá chyba je začít otázkou: „Máme dělat LinkedIn, SEO, newsletter, reklamy nebo video?“ Správnější otázka zní: „Kde už dnes vzniká poptávka po problému, který řešíme?“ Kanál je až odpověď na chování zákazníka.

Pro každou cílovou skupinu si napiš:

- Kdy si poprvé všimne problému?
- Jak ho pojmenuje vlastními slovy?
- Kde hledá řešení?
- Komu věří?
- Co potřebuje vidět, aby udělal první krok?
- Jaké riziko ho brzdí před poptávkou nebo nákupem?

Příklad pro B2B SaaS:

- Problém: obchodní tým ztrácí poptávky mezi e-mailem, tabulkami a poznámkami.
- Slova zákazníka: „Nemáme přehled, kdo co řeší“ nebo „lead zapadne, když je kolega na dovolené“.
- Místo hledání: doporučení od známých, odborné články, komunitní skupiny, Google dotazy typu „CRM pro malou firmu“.
- Důkaz: krátká ukázka workflow, reference podobné firmy, jasné vysvětlení migrace.

Z toho vyjde lepší marketing než z generického plánu „budeme postovat třikrát týdně“. Frekvence bez jasné poptávky je jen kardio pro obsahový kalendář.

### 5.2 Obsah má odpovídat na nákupní otázky

Dobrý obsah není jen „top 10 trendů“ a motivační moudra. Má pomáhat zákazníkovi projít rozhodnutím. Rozděl si obsah podle fáze:

- **Uvědomění:** zákazník ještě neví, že problém má jméno. Piš o symptomech, chybách a dopadech.
- **Zvažování:** zákazník porovnává přístupy. Piš srovnání, postupy, ukázky řešení a rozhodovací kritéria.
- **Důvěra:** zákazník se bojí rizika. Piš případové studie, bezpečnostní postupy, provozní principy a odpovědi na námitky.
- **Akce:** zákazník chce udělat krok. Dej mu checklist, kalkulačku, audit, demo, konzultaci nebo jednoduchý kontakt.

Praktická sada pro menší web nebo SaaS:

1. Jeden pilířový článek, který vysvětluje problém a možnosti řešení.
2. Tři podpůrné články odpovídající na konkrétní otázky zákazníků.
3. Jedna stránka s příklady použití pro úzký segment.
4. Jedna reference nebo modelový příběh „před a po“.
5. Jedna jednoduchá nabídka dalšího kroku.

Když nevíš, co napsat, otevři posledních deset obchodních konverzací a vypiš otázky, které se opakovaly. Každá opakovaná otázka je kandidát na článek, FAQ nebo část landing page.

### 5.3 Distribuce je práce, ne tlačítko „publikovat“

Publikovat článek a čekat je romantické. Bohužel taky pomalé. Každý kvalitní obsah potřebuje distribuční plán, ideálně bez závislosti na platformách, které mění pravidla podle nálady algoritmu.

U každého většího článku si připrav:

- krátký souhrn pro LinkedIn nebo komunitu,
- přímý odkaz pro zákazníky a partnery,
- interní odkazy z relevantních starších článků,
- položku do RSS feedu,
- stručnou verzi pro e-mail lidem, kteří si komunikaci vyžádali,
- jednu praktickou ukázku nebo checklist, který se dá sdílet samostatně.

Privacy-first distribuce znamená, že nesázíš všechno na skryté sledovací pixely. UTM parametry používej střídmě a čitelně. Nepřidávej do URL osobní identifikátory, e-mailové adresy ani interní ID kontaktů. Pokud potřebuješ měřit zdroj návštěvnosti, většinou stačí rozlišit kampaň, kanál a obsah.

Příklad rozumného odkazu:

`/clanky/privacy-first-analytika?utm_source=newsletter&utm_medium=email&utm_campaign=saas-audit`

Příklad, který si koleduje o datový problém:

`/clanky/privacy-first-analytika?email=jana@example.com&customer_id=12345`

To druhé nedělej. Internet má dlouhou paměť a logy mají ještě delší.

### 5.4 Měř méně věcí, ale rozhoduj podle nich

Marketingová analytika má pomoct rozhodnout, co zlepšit. Pokud jen vyrábí grafy, které nikdo nepoužívá, je to dekorace. Začni několika otázkami:

- Které stránky přivádějí relevantní návštěvníky?
- Kde lidé přecházejí na kontakt, demo nebo registraci?
- Který obsah pomáhá obchodním konverzacím?
- Které zdroje přivádějí návštěvy s vysokým záměrem?
- Které formuláře nebo CTA lidé ignorují?

Pro menší firmu často stačí měřit:

- návštěvy klíčových stránek,
- zdroj návštěvy na úrovni referreru nebo kampaně,
- kliknutí na hlavní CTA,
- odeslané formuláře,
- registrace nebo objednávky,
- technické chyby bránící konverzi.

Nepotřebuješ nahrávat obrazovku každého návštěvníka, sbírat otisky zařízení ani lepit na web pět reklamních skriptů. Pokud neumíš vysvětlit, jak konkrétní údaj použiješ k rozhodnutí, pravděpodobně ho nemáš sbírat.

*Codyho komentář:* Nejlepší metrika je ta, po které někdo změní rozhodnutí. Nejhorší metrika je ta, která jen uklidňuje ego, že graf míří nahoru.

### 5.5 Důvěra je marketingový kanál

V evropském privacy-first provozu není soukromí jen právní povinnost. Je to součást značky. Když zákazník vybírá dodavatele pro web, SaaS nebo interní nástroj, často řeší i riziko: kdo uvidí data, kde poběží aplikace, co se stane při incidentu a jestli bude možné službu opustit bez rukojmí v podobě exportu.

Na webu proto jasně vysvětli:

- kde služba běží,
- jaká data sbíráš a proč,
- jak dlouho je držíš,
- jak fungují zálohy a přístupy,
- jak lze data exportovat nebo smazat,
- jaké externí služby používáš.

Nemusí to být nudná právničina schovaná v patičce. Udělej z toho čitelnou stránku „Jak chráníme vaše data“ nebo část v nabídce. Pro B2B zákazníka to může být důvod, proč se ozve právě tobě.

Důvěru posilují i malé věci: rychlý web bez zbytečných skriptů, čitelný kontakt, konkrétní lidé za firmou, otevřené vysvětlení limitů a jednoduché odmítnutí dark patternů. Když formulář slibuje „nezávaznou konzultaci“, nemá po odeslání spustit tři automatické sekvence a honit člověka po internetu reklamou na službu, o které si chtěl jen promluvit.

### 5.6 Marketingový rytmus pro malý tým

Malý tým nepotřebuje redakční impérium. Potřebuje rytmus, který vydrží. Doporučený měsíční cyklus:

1. Vyber jedno obchodní téma podle reálných dotazů zákazníků.
2. Napiš jeden hlubší článek nebo případovou studii.
3. Rozděl ho na tři menší výstupy: post, checklist, krátký e-mail.
4. Přidej interní odkazy na související stránky.
5. Po dvou týdnech zkontroluj, jestli přinesl návštěvy, poptávky nebo lepší konverzace.
6. Uprav nadpis, CTA nebo doplň chybějící odpovědi podle toho, co lidé řešili.

Tento rytmus je méně sexy než „virální růst“. Zato je proveditelný. A proveditelný marketing poráží ambiciózní plán, který po třech týdnech umře v tabulce.

### 5.7 Checklist: privacy-first marketing

Před spuštěním kampaně, článku nebo landing page si projdi:

- [ ] Víme, jakou nákupní otázku obsah řeší.
- [ ] Nadpis používá jazyk zákazníka, ne interní buzzwordy.
- [ ] Stránka má jeden hlavní další krok.
- [ ] Distribuce nespoléhá jen na jeden algoritmický kanál.
- [ ] UTM parametry neobsahují osobní údaje ani interní identifikátory.
- [ ] Analytika měří jen údaje, které umíme použít k rozhodnutí.
- [ ] Web nepoužívá zbytečné reklamní skripty, pixely ani session replay.
- [ ] Máme RSS nebo jiný přímý způsob odběru obsahu.
- [ ] Uživatel chápe, co se stane po odeslání formuláře.
- [ ] Umíme jednoduše vysvětlit, kde jsou data a kdo k nim má přístup.

Marketing bez šmírování není pomalejší marketing. Je to marketing, který se víc opírá o užitečnost, důvěru a přímý vztah. Místo aby ses snažil každého návštěvníka dohnat reklamou, postavíš systém, ve kterém správní lidé snáz pochopí, proč se s tebou mají bavit.


## 6. Produktivita zakladatele: méně sprintů do zdi

Produktivita zakladatele, freelancera nebo malého týmu není soutěž v tom, kdo má barevnější kalendář a víc nástrojů na řízení práce. Skutečná produktivita je schopnost dělat opakovaně správné věci ve správném pořadí, aniž by se z firmy stal permanentní požární sbor. Pokud každý den jen hasíš, možná jsi velmi vytížený. Ale vytíženost není strategie, jen dražší forma chaosu.

V digitálním produktu se práce dělí na čtyři typy:

- **Tvorba hodnoty** — vývoj, design, obsah, prodejní stránka, onboarding, zákaznická podpora.
- **Rozhodování** — prioritizace, pricing, segmentace zákazníků, výběr stacku.
- **Údržba systému** — monitoring, zálohy, aktualizace, dokumentace, účetnictví.
- **Šum** — schůzky bez výsledku, nejasné nápady, metriky bez rozhodnutí, nástroje pro nástroje.

Cíl není odstranit vše kromě tvorby. Cíl je vědět, kdy děláš co. Zakladatel, který neumí rozlišit strategické rozhodnutí od šumu, bude optimalizovat logo ve chvíli, kdy mu padá onboarding.

### 6.1 Jedno rozhodnutí denně, ne dvacet nedokončených debat

Malý tým se často nezasekne proto, že nemá dost nápadů. Zasekne se proto, že žádný nápad nepřejde do jasného rozhodnutí. Každé otevřené rozhodnutí vytváří mentální dluh: lidé nevědí, co platí, práce se větví a komunikace bobtná.

Zaveď jednoduchý formát rozhodnutí:

- **Otázka:** Co přesně rozhodujeme?
- **Možnosti:** Jaké realistické varianty máme?
- **Dopad:** Co se stane, když se spleteme?
- **Termín:** Kdy musí být jasno?
- **Majitel:** Kdo rozhodnutí udělá?
- **Výsledek:** Co platí odteď dál?

Příklad:

- Otázka: Budeme pro MVP podporovat týmové účty?
- Možnosti: Ne; ano jen ručně; ano s plným self-service onboardingem.
- Dopad: Plný self-service zpozdí MVP, ruční režim pomůže validovat poptávku.
- Termín: Pátek 12:00.
- Majitel: zakladatel produktu.
- Výsledek: Pro první tři zákazníky zakládáme týmové účty ručně a měříme, kolik práce to stojí.

Takové rozhodnutí nemusí být dokonalé. Musí být zapsané. Dokonalost bez zápisu se za týden změní v archeologii Slacku.

### 6.2 Týdenní rytmus místo permanentního sprintu

Sprinty jsou užitečné, když má tým jasno, co chce dodat. Jsou škodlivé, když slouží jen jako obřad k přesouvání nejasných úkolů z minulého týdne do dalšího. Pro malý SaaS nebo webový projekt často stačí jednoduchý týdenní rytmus:

1. **Pondělí dopoledne:** vybrat jeden hlavní výsledek týdne.
2. **Pondělí odpoledne:** rozbít výsledek na malé dokončitelné kroky.
3. **Úterý až čtvrtek:** chránit hlubokou práci, vývoj, psaní a obchod.
4. **Pátek dopoledne:** dokončit, otestovat, publikovat nebo předat.
5. **Pátek odpoledne:** krátká retrospektiva: co přineslo hodnotu, co byl šum, co se příště zjednoduší.

Hlavní výsledek týdne má být věta, ne seznam:

- Spustíme novou landing page pro segment účetních firem.
- Zkrátíme registraci z pěti kroků na dva.
- Doplníme export dat a otestujeme ho se dvěma zákazníky.
- Napíšeme a rozešleme článek odpovídající na nejčastější námitku z prodeje.

Když je hlavní výsledek moc velký, rozpadne se. Když je moc malý, nic nezmění. Dobrý týdenní cíl je takový, který jde v pátek ukázat někomu mimo tým.

*Codyho komentář:* Pokud výsledek týdne nejde poznat bez interní prezentace, možná to nebyl výsledek. Možná to byl jen rituální tanec kolem backlogu.

### 6.3 Backlog není skládka nápadů

Backlog má pomáhat vybírat práci. Pokud obsahuje stovky položek bez kontextu, je to skládka s vyhledáváním. Každý nápad by měl mít důvod, zdroj a další krok. Bez toho je levnější ho smazat než ho navždy přenášet.

Použij tři úrovně:

- **Teď:** práce na nejbližší týden, jasný majitel a definice hotovo.
- **Brzy:** důležité věci s ověřeným důvodem, ale bez kapacity právě teď.
- **Možná:** nápady, které zní dobře, ale nemají důkaz ani naléhavost.

Jednou měsíčně projdi „Možná“ a většinu položek smaž. Ne archivuj, opravdu smaž. Nápad, který je důležitý, se vrátí přes zákazníka, obchod nebo provozní bolest. Nápad, který se nikdy nevrátí, pravděpodobně nepotřeboval vlastní životní pojištění v projektovém nástroji.

Každá položka v aktivním backlogu by měla mít:

- proč ji řešíme,
- pro koho je důležitá,
- jak poznáme, že je hotová,
- co se stane, když ji neuděláme,
- nejmenší rozumnou verzi.

Příklad špatné položky:

> Vylepšit dashboard.

Příklad použitelné položky:

> Přidat do dashboardu přehled nových leadů za posledních 7 dní, aby obchodník viděl, komu se má ozvat jako první. Hotovo: karta zobrazuje počet leadů, trend oproti předchozímu týdnu a odkaz na filtrovaný seznam.

### 6.4 Dokumentace jako opora, ne román

Dokumentace má zmenšit závislost na paměti lidí. Nemusí být dlouhá. Musí být dostupná, aktuální a psaná pro konkrétní situaci. Malý tým potřebuje hlavně čtyři typy dokumentů:

- **Rozhodnutí:** proč jsme něco zvolili a co jsme odmítli.
- **Runbooky:** co dělat, když něco spadne nebo se opakuje.
- **Produktové poznámky:** komu slouží funkce, jaký problém řeší a kde jsou limity.
- **Zákaznické poznatky:** opakované otázky, námitky, citace a příklady použití.

Runbook pro incident může být velmi krátký:

1. Zkontroluj stav hostingu a poslední deploy.
2. Podívej se na aplikační logy a monitoring.
3. Ověř, zda problém dopadá na všechny uživatele nebo jen část.
4. Pokud je poslední deploy podezřelý, připrav rollback.
5. Zapiš čas, dopad, příčinu a prevenci.

Privacy-first poznámka: do dokumentace nekopíruj osobní údaje zákazníků, tokeny, celé e-maily ani interní logy se zbytečnými detaily. Dokumentuj vzor problému a rozhodnutí, ne soukromý obsah. I interní wiki je datový systém, ne kouzelná šuplíková dimenze mimo GDPR.

### 6.5 Automatizuj až opakovaný problém

Automatizace je skvělá, když nahrazuje opakovanou ruční práci. Je mizerná, když automatizuje proces, kterému ještě nerozumíš. Nejdřív udělej věc ručně několikrát, zapiš kroky a zjisti, kde vzniká chyba nebo zdržení. Teprve potom automatizuj.

Dobří kandidáti na automatizaci:

- pravidelné zálohy a kontrola obnovitelnosti,
- nasazení aplikace po schváleném merge,
- generování fakturačních podkladů,
- upozornění na selhané formuláře nebo platby,
- publikace RSS položek a interní notifikace o novém obsahu,
- anonymizované produktové reporty bez osobních profilů.

Špatní kandidáti:

- nejasný prodejní proces,
- onboarding, který ještě nikdo nedokončil ručně,
- zákaznická komunikace bez pochopení opakovaných dotazů,
- „AI agent“, který má rozhodovat místo majitele procesu, protože nikdo nechce napsat pravidla.

Automatizace by měla mít vlastníka, log a bezpečné selhání. Když automat posílá e-maily, mění data nebo spouští deploy, musí být jasné, kdo ho kontroluje a jak se zastaví. Robot bez vypínače je jen dražší chaos s API klíčem.

### 6.6 Osobní operační systém zakladatele

Zakladatel potřebuje jednoduchý systém, který unese chaos, ale nevyrábí ho. Základ:

- **Inbox:** jedno místo pro nové nápady, úkoly a poznámky.
- **Kalendář:** chráněné bloky pro hlubokou práci a schůzky dávkované do menšího počtu dnů.
- **Týdenní review:** výběr priorit, zavření rozhodnutí, úklid backlogu.
- **Denní start:** tři nejdůležitější kroky dne, ne dvacet přání.
- **Denní konec:** krátký zápis, co je hotovo, co blokuje další práci a co se nesmí zapomenout.

Praktické pravidlo: pokud se úkol nevejde do jedné věty s výsledkem, není připravený. „Řešit marketing“ není úkol. „Dopsat sekci o evropském hostingu na landing page a přidat CTA na konzultaci“ už úkol je.

Důležité je i říkat ne. Každé „ano“ na vedlejší věc bere čas hlavnímu výsledku. To platí pro funkce, schůzky, nové nástroje i partnerství. Zakladatel nemusí být nedostupný asketa v jeskyni s poznámkovým blokem. Ale musí chránit pozornost jako produkční databázi: zálohovat, omezit přístupy a nepouštět dovnitř náhodné skripty.

### 6.7 Checklist: týden zakladatele bez chaosu

Na začátku týdne si projdi:

- [ ] Máme jeden hlavní výsledek týdne, který jde ukázat zákazníkovi nebo trhu.
- [ ] Každý aktivní úkol má majitele, důvod a definici hotovo.
- [ ] Otevřená rozhodnutí mají termín a člověka, který je zavře.
- [ ] Backlog je rozdělený na Teď, Brzy a Možná.
- [ ] V kalendáři jsou bloky na hlubokou práci bez schůzek.
- [ ] Neautomatizujeme proces, který ještě neumíme popsat ručně.
- [ ] Dokumentujeme rozhodnutí a runbooky, ne soukromý šum.
- [ ] Měříme jen metriky, podle kterých opravdu rozhodujeme.
- [ ] V pátek víme, co se dodalo, co se naučilo a co se příště zjednoduší.
- [ ] Aspoň jedna věc byla vědomě odmítnuta, aby se hlavní práce dokončila.

Produktivita není tlak na to, aby člověk pracoval pořád. Je to design systému, ve kterém správná práce vyhrává nad naléhavým hlukem. A v malém týmu je to často rozdíl mezi firmou, která roste, a firmou, která jen statečně přežívá vlastní seznam úkolů.


## Pracovní log
- 2026-08-28 17:00 UTC — Doplněna šestá kapitola o produktivitě zakladatele: rozhodování, týdenní rytmus, backlog, dokumentace, automatizace, osobní systém a checklist.
- 2026-08-28 16:00 UTC — Doplněna pátá kapitola o privacy-first marketingu: poptávka, obsah, distribuce, měření, důvěra, měsíční rytmus a checklist.
- 2026-08-28 15:00 UTC — Doplněna čtvrtá kapitola o technickém stacku: provozní slib, nudné technologie, architektura, opakovatelné nasazení, monitoring, zálohy a checklist.
- 2026-08-28 14:00 UTC — Doplněna třetí kapitola o SaaS MVP: rozhodnutí místo backlogu, hlavní workflow, ruční validace, onboarding, pricing, měření a checklist.
- 2026-08-28 13:00 UTC — Doplněna druhá kapitola o webu jako prodejním systému: homepage, CTA, důvěra, landing pages, privacy-first měření a checklist.
- 2026-08-28 12:00 UTC — Založena struktura e-booku, doplněna pracovní osnova a hotová první kapitola o produktovém základu SaaS/webového projektu.
