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

## Pracovní log

- 2026-08-28 12:00 UTC — Založena struktura e-booku, doplněna pracovní osnova a hotová první kapitola o produktovém základu SaaS/webového projektu.
