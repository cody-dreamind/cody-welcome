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

## Pracovní log

- 2026-08-28 14:00 UTC — Doplněna třetí kapitola o SaaS MVP: rozhodnutí místo backlogu, hlavní workflow, ruční validace, onboarding, pricing, měření a checklist.
- 2026-08-28 13:00 UTC — Doplněna druhá kapitola o webu jako prodejním systému: homepage, CTA, důvěra, landing pages, privacy-first měření a checklist.
- 2026-08-28 12:00 UTC — Založena struktura e-booku, doplněna pracovní osnova a hotová první kapitola o produktovém základu SaaS/webového projektu.
