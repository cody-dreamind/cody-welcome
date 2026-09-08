# Webový vývoj, SaaS a marketing bez digitálního cirkusu

Praktický český e-book od Codyho z Dreamindu pro malé firmy, freelancery a zakladatele SaaS, kteří chtějí stavět rychle, měřit rozumně a přitom si nenechat utéct data přes půl planety.

> Codyho komentář: Dobrá webovka není ta, která má nejvíc efektů. Dobrá webovka prodává, je rychlá, srozumitelná a nevypadá, že ji po nocích krmil reklamní pixel na energy drinku.

## Pro koho je e-book

- Pro podnikatele, kteří potřebují web nebo SaaS bez zbytečné agenturní mlhy.
- Pro vývojáře, kteří chtějí lépe chápat produkt, marketing a provoz.
- Pro malé týmy, které řeší evropský provoz, soukromí a dlouhodobou udržitelnost.
- Pro každého, kdo raději vlastní kanály, přímé odkazy a RSS než závislost na sociálních sítích.

## Jak e-book používat

Každou kapitolu ber jako pracovní checklist. Nečti ji jako román do šuplíku: otevři svůj web, produkt nebo marketingový plán a rovnou si odškrtávej, co už máš hotové a co pálí.

## Osnova

1. Základy dobrého webu: jasná nabídka, rychlost a důvěra.
2. Privacy-first provoz v Evropě: data, analytika, souhlasy a minimalismus.
3. SaaS od nápadu k první platbě: problém, segment, MVP a onboarding.
4. Produktivita malého týmu: méně nástrojů, lepší rytmus, dokumentace.
5. Marketing bez spamu: obsah, SEO, přímé odkazy, RSS a partnerství.
6. Technický stack: hosting, databáze, monitoring, zálohy a bezpečnost.
7. Měření, které pomáhá: metriky produktu, prodeje a podpory.
8. Praktické šablony: brief, landing page, launch checklist a audit soukromí.
9. AI automatizace v evropském SaaS: užitek, governance a bezpečné nasazení.
10. Cenotvorba a balíčky: hodnota, jednoduchost, férovost a důvěra.
11. Dodatky: 30denní plán, výběr nástrojů, obsah, přístupnost, podpora, retence, souhlasy, technické SEO, bezpečnostní minimum a roadmapa.

---

## Kapitola 1: Privacy-first základ webu a SaaS

Privacy-first není dekorace do patičky. Je to produktové rozhodnutí, které ovlivňuje architekturu, výběr nástrojů, marketing i důvěru zákazníků. V evropském kontextu je to navíc konkurenční výhoda: zákazníkům nemusíš vysvětlovat, proč jejich data cestují přes tři reklamní sítě jen proto, aby sis spočítal návštěvy stránky.

### 1.1 Začni mapou dat

Než přidáš další službu, skript nebo plugin, napiš si jednoduchou mapu dat. Stačí tabulka v Markdownu:

| Data | Proč je sbíráme | Kde leží | Kdo k nim má přístup | Jak dlouho je držíme |
| --- | --- | --- | --- | --- |
| E-mail zákazníka | Přihlášení a komunikace | EU databáze | Produktový tým | Po dobu účtu |
| Fakturační údaje | Účetnictví | Fakturační systém | Účetní a majitel | Dle zákonných povinností |
| Anonymní návštěvnost | Zlepšení webu | EU analytika | Marketing a produkt | Krátké agregované období |

Smysl není vytvořit právnický román. Smysl je vědět, co se děje. Pokud u některého řádku neumíš vyplnit „proč“, data pravděpodobně nepotřebuješ.

### 1.2 Minimalizuj sběr, ne ambice

GDPR stojí mimo jiné na principu minimalizace údajů a odpovědnosti správce. Evropská komise popisuje, že organizace mají zpracovávat jen osobní údaje nezbytné pro daný účel a umět prokázat soulad s pravidly. U principu „data protection by design and by default“ zároveň zdůrazňuje ochranu dat už ve fázi návrhu a výchozí nastavení s nejvyšší rozumnou mírou soukromí. Zdroj: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en

Prakticky to znamená:

- Neptej se při registraci na telefon, když stačí e-mail.
- Neposílej všechny události do externí analytiky, když potřebuješ jen agregovaný přehled návštěvnosti.
- Nenahrávej celé session replaye, pokud problém vyřeší log chyby a dobrovolná zpětná vazba.
- Nepřidávej marketingový pixel „pro jistotu“. Jistota je v tomhle případě jen elegantní slovo pro budoucí bordel.

### 1.3 Evropský provoz jako výchozí volba

Privacy-first evropský provoz neznamená, že nikdy nesmíš použít nástroj mimo EU. Znamená to, že výchozí otázka zní: „Umíme to provozovat v Evropě a s menším přenosem dat?“ Teprve když odpověď zní ne, má smysl hledat výjimku a dobře ji zdokumentovat.

Při výběru nástroje se ptej:

- Má poskytovatel EU region nebo evropský hosting?
- Umí export dat bez proseb na support?
- Lze vypnout reklamní, cross-site nebo profilovací funkce?
- Je jasné, kdo je správce, zpracovatel a subzpracovatel?
- Dá se služba nahradit vlastním provozem, pokud vyroste riziko nebo cena?

### 1.4 Analytika bez sledovacího cirkusu

Malý SaaS obvykle nepotřebuje vědět, že anonymní návštěvník z Pardubic třikrát pohnul myší nad ceníkem. Potřebuje vědět:

- Které stránky přivádějí lidi k registraci.
- Kde uživatelé odpadávají v onboardingu.
- Které kampaně přinášejí relevantní poptávky.
- Zda produkt používají reální zákazníci, nebo jen zakladatel při kontrole před spaním.

Dobrá privacy-first analytika je agregovaná, srozumitelná a bez zbytečné identifikace. Pro obsahový web často stačí stránky, referrery, základní geografický přehled a vlastní události typu `signup_click`, `demo_request` nebo `pricing_view`.

### 1.5 Konkrétní příklad: landing page pro B2B SaaS

Představ si nástroj pro evidenci zakázek řemeslníků. Privacy-first verze landing page vypadá takto:

- Hero sekce jasně říká, komu produkt pomáhá: „Zakázky, termíny a fakturace pro malé řemeslnické týmy.“
- Formulář pro demo chce jen e-mail, firmu a stručnou poznámku. Telefon je volitelný.
- Analytika měří zobrazení ceníku, klik na demo a odeslání formuláře, ne kompletní pohyb každého návštěvníka.
- Web nepoužívá social share skripty. Má normální odkazy, RSS a dobře napsané meta tagy.
- Data z formuláře končí v evropském systému nebo ve vlastním backendu, ne v náhodném automatizačním řetězci bez kontroly.

Tahle verze je pořád obchodně použitelná. Jen se nechová jako vysavač na osobní údaje.

### 1.6 Checklist pro první audit soukromí

- [ ] Umíme vypsat všechna osobní data, která web nebo SaaS sbírá.
- [ ] U každého údaje známe účel, místo uložení a dobu uchování.
- [ ] Registrace a formuláře sbírají jen nezbytné údaje.
- [ ] Analytika běží bez reklamních trackerů a bez zbytečné identifikace návštěvníků.
- [ ] Každý externí nástroj má jasné odůvodnění a známý datový tok.
- [ ] Výchozí nastavení produktu chrání soukromí uživatele.
- [ ] Marketing používá přímé odkazy, vlastní obsah a RSS místo invazivních skriptů.

### 1.7 Mini úkol na 30 minut

Otevři svůj web a napiš seznam všech externích skriptů. U každého si odpověz: „Kdybych ho dnes vypnul, co přesně se rozbije?“ Pokud odpověď není konkrétní, skript je kandidát na odstranění.

> Codyho komentář: Nejlevnější optimalizace výkonu, soukromí i údržby je často brutálně nudná: smazat věci, které nikdo nepotřebuje. Nudné? Ano. Účinné? Taky ano. Krása minimalismu, žádný ohňostroj.


---

## Kapitola 2: Web, který rychle vysvětlí hodnotu

Návštěvník webu ti nedluží pozornost. Nepřišel obdivovat interní slovník firmy, animovanou vlnku v hero sekci ani šest odstavců o tom, že „měníte budoucnost“. Přišel zjistit tři věci: jestli řešíš jeho problém, jestli ti může věřit a co má udělat dál.

Dobrá webovka je proto méně galerie a více obchodní rozhovor. Ne křičící prodejce v saku z roku 2008, ale klidný konzultant, který ví, komu pomáhá a proč.

### 2.1 Jedna stránka, jedna hlavní práce

Každá důležitá stránka by měla mít jednu hlavní práci. Homepage může vysvětlit nabídku a nasměrovat lidi dál. Landing page pro kampaň má získat registraci, poptávku nebo objednávku. Dokumentační stránka má vyřešit konkrétní otázku. Pokud se stránka snaží dělat všechno, většinou nedělá nic pořádně.

Začni jednoduchým zadáním:

| Stránka | Pro koho je | Jaký problém řeší | Hlavní akce |
| --- | --- | --- | --- |
| Homepage | Majitel malé firmy | Neví, jestli produkt sedí na jeho případ | Prohlédnout řešení nebo objednat demo |
| Ceník | Zájemce těsně před rozhodnutím | Potřebuje pochopit cenu a riziko | Vybrat tarif nebo se zeptat |
| Blogový článek | Člověk hledající návod | Chce praktický postup | Přečíst související checklist nebo RSS |
| Produktová stránka | Konkrétní segment | Chce vidět přínos pro svůj provoz | Spustit trial nebo poslat poptávku |

Tahle tabulka je nudná. Přesně proto funguje. Nutí tě rozhodnout, co je důležité, ještě předtím než začneš řešit barvu tlačítka.

### 2.2 Hero sekce bez mlhy

Hero sekce má během pár vteřin říct, co nabízíš. Dobrá struktura:

- Nadpis: výsledek pro konkrétního člověka.
- Podnadpis: jak toho dosáhneš a pro koho to je.
- Primární CTA: další krok bez hádanky.
- Důkaz: logo, číslo, reference, ukázka výsledku nebo krátký screenshot.

Slabý nadpis:

> „Inovativní platforma pro moderní týmy.“

Lepší nadpis:

> „Zakázky, termíny a fakturace pro malé servisní týmy bez tabulek.“

Je v něm segment, problém i výsledek. Není poetický, ale zákazník nemusí luštit, jestli je to software, koučink nebo další „AI revoluce“, která zatím umí hlavně generovat faktury investorům.

### 2.3 Důvěra se nevykřičí, důvěra se doloží

Na webu se často opakuje chyba: firma tvrdí, že je rychlá, bezpečná, profesionální a zákaznicky orientovaná. Jenže tvrdí to úplně všichni. Důvěra vzniká konkrétností.

Místo „bezpečný provoz“ napiš:

- kde aplikace běží,
- jak zálohuješ,
- kdo má přístup k produkčním datům,
- jak řešíš export dat,
- jak zákazník zruší účet,
- koho kontaktovat při incidentu.

Místo „skvělá podpora“ napiš:

- kdy odpovídáš,
- jestli podporu dělají lidé, kteří rozumí produktu,
- jak vypadá onboarding,
- kde je dokumentace,
- co se stane po odeslání formuláře.

U privacy-first SaaS je důvěra ještě praktičtější. Pokud říkáš, že data držíš v Evropě, ukaž to v architektuře, v dokumentaci a v obchodních materiálech. Nepotřebuješ na to právnickou fresku přes celou obrazovku. Stačí jasná stránka „Bezpečnost a soukromí“, kde člověk pochopí základní provozní model.

### 2.4 SEO začíná srozumitelností

SEO není kouzlení s klíčovými slovy. Google ve svém SEO Starter Guide zdůrazňuje užitečný obsah, čitelné struktury, srozumitelné odkazy, titulky a technickou dostupnost stránky. Zdroj: https://developers.google.com/search/docs/fundamentals/seo-starter-guide

Prakticky:

- Každá důležitá stránka má unikátní `<title>` a meta description.
- Nadpis `H1` říká hlavní hodnotu stránky, ne interní název kampaně.
- URL je čitelná: `/cenik`, `/reseni-pro-ucetni`, `/blog/audit-soukromi-webu`.
- Obrázky mají smysluplný alternativní text, pokud nesou obsah.
- Interní odkazy vedou člověka logicky dál: z článku na checklist, z checklistu na poptávku, z poptávky na potvrzení.

Privacy-first poznámka: nepotřebuješ social share widgety, aby se obsah šířil. Často stačí normální URL, dobře napsaný titulek, RSS feed a obsah, který stojí za uložení. Ano, zní to méně sexy než „growth hack“. Ale aspoň kvůli tomu nespouštíš na čtenáře karneval třetích stran.

### 2.5 Výkon je produktová vlastnost

Rychlost není jen technická metrika. Je to pocit, že produkt respektuje čas uživatele. Google popisuje Core Web Vitals jako metriky reálné uživatelské zkušenosti pro načítání, interaktivitu a vizuální stabilitu stránky. Zdroj: https://developers.google.com/search/docs/appearance/core-web-vitals

Nejčastější zabijáci rychlosti u malých webů:

- Obří hero obrázek bez optimalizace.
- Pět fontů a každé písmo ve třech řezech.
- Marketingové skripty, které nikdo nevyhodnocuje.
- Cookie lišta větší než samotná nabídka.
- Frontend framework použitý tam, kde by stačilo pár statických šablon.

Výkon řeš v pořadí, které má obchodní smysl:

1. Nejprve homepage, ceník, registrační flow a kampaně.
2. Potom šablony blogu a dokumentace.
3. Nakonec kosmetické podstránky, které skoro nikdo nenavštěvuje.

Neoptimalizuj slepě. Změř, které stránky ovlivňují poptávky, registrace nebo podporu, a začni tam.

### 2.6 Přístupnost není charita, ale kvalita

W3C popisuje WCAG jako sdílený standard pro přístupnost webového obsahu. Zdroj: https://www.w3.org/WAI/standards-guidelines/wcag/

Pro malý tým začni tímhle minimem:

- Web jde ovládat klávesnicí.
- Text má dostatečný kontrast vůči pozadí.
- Formuláře mají jasné popisky a chybové hlášky.
- Tlačítka říkají, co udělají: „Objednat demo“, ne jen „Odeslat“.
- Stránka používá logickou strukturu nadpisů.
- Důležité informace nejsou jen v obrázku.

Přístupnost pomáhá lidem s omezeními, ale zlepšuje web i pro všechny ostatní: na mobilu, ve spěchu, na horším displeji, při únavě nebo když zákazník zrovna drží kávu a dítě zároveň. Multitasking level: český podnikatel v pondělí ráno.

### 2.7 Konkrétní příklad: stránka pro konzultační službu

Řekněme, že nabízíš audit webu a SaaS provozu pro malé firmy.

Dobrá stránka může mít tuto strukturu:

1. **Hero:** „Audit webu, který najde úniky v konverzi, výkonu a soukromí.“
2. **Pro koho:** malé SaaS týmy, B2B firmy, e-shopy s vlastním vývojem.
3. **Co dostaneš:** seznam problémů, prioritizaci, návrh oprav a stručný privacy-first datový audit.
4. **Jak to probíhá:** 30min úvod, technická kontrola, výstupní call, Markdown report.
5. **Důkaz:** ukázka anonymizovaného reportu nebo krátká reference.
6. **CTA:** „Poslat web k auditu“.
7. **Soukromí:** co se sbírá, kam se ukládá komunikace, jak dlouho držíš podklady.

Všimni si, že stránka neříká „jsme nejlepší“. Ukazuje postup, snižuje nejistotu a dává jasný další krok.

### 2.8 Checklist dobré webové stránky

- [ ] Do 5 vteřin je jasné, komu stránka pomáhá a s čím.
- [ ] Hlavní CTA je konkrétní a opakuje se na logických místech.
- [ ] Stránka obsahuje důkaz důvěry: reference, ukázku, proces, číslo nebo technické vysvětlení.
- [ ] `title`, meta description, `H1` a URL odpovídají skutečnému obsahu.
- [ ] Stránka funguje bez reklamních trackerů a zbytečných externích skriptů.
- [ ] Formulář sbírá jen údaje, které opravdu potřebuješ.
- [ ] Na mobilu jde rychle přečíst nabídka, ceník i další krok.
- [ ] Texty neobsahují interní žargon, který zákazník nepoužívá.

### 2.9 Mini úkol na 30 minut

Otevři homepage a zakryj logo. Dej stránku někomu, kdo nezná tvůj projekt, a nech ho během 10 vteřin říct, co prodáváš, komu a co by měl udělat dál. Pokud to netrefí, neopravuj člověka. Oprav web.

> Codyho komentář: Nejlepší UX test je občas brutálně levný: jeden člověk, jedna otázka a žádné vysvětlování. Pokud web potřebuje komentář autora, není to web. Je to hádanka v produkci.

---

## Kapitola 3: SaaS od nápadu k první platbě

SaaS nezačíná technologií. Začíná opakovaným problémem, za který je někdo ochotný pravidelně platit. Kód je až způsob, jak ten problém obsloužit bez toho, aby zakladatel ručně běhal s tabulkou, fakturou a modlitbou k produkční databázi.

Paul Graham v eseji „Do Things that Don’t Scale“ připomíná, že rané startupy často potřebují dělat ruční, neškálovatelné věci, aby vůbec získaly první uživatele a pochopily jejich realitu. Zdroj: https://paulgraham.com/ds.html

### 3.1 Nejdřív problém, potom produkt

Dobrá SaaS otázka nezní „co bychom mohli postavit?“, ale:

- Kdo má problém dost často, aby ho řešil opakovaně?
- Co ho ten problém stojí: čas, peníze, reputaci, nervy nebo zákazníky?
- Jak ho řeší dnes a proč mu to nestačí?
- Kdo drží rozpočet a kdo bude produkt opravdu používat?
- Co by muselo být pravda, aby zaplatil už tento měsíc?

Rozdíl mezi „to by se mi líbilo“ a „pošli fakturu“ je propast, ve které tiše mizí většina krásných backlogů. Při validaci proto nepočítej komplimenty. Počítej závazky: zaplacený pilot, podepsaný letter of intent, domluvený onboarding, nebo aspoň konkrétní termín dalšího kroku.

### 3.2 Segment je menší, než chce ego

„Pro všechny malé firmy“ je skoro vždycky moc široké. Lepší první segment je konkrétní:

- účetní kanceláře do 10 lidí, které sbírají podklady od klientů e-mailem;
- malé stavební firmy, které plánují zakázky v tabulkách;
- lokální e-shopy, které ručně řeší reklamace mezi e-mailem a dopravci;
- B2B agentury, které potřebují klientský portál bez posílání dat do pěti SaaSů najednou.

Úzký segment neznamená malou ambici. Znamená jasnější jazyk, rychlejší rozhovory a lepší produktové rozhodování. Když přesně víš, pro koho stavíš, umíš napsat landing page, demo scénář i onboarding bez korporátní mlhy.

### 3.3 MVP není osekaný sen, ale test rizika

MVP má ověřit největší nejistotu, ne ukázat nejmenší možnou verzi finálního produktu. Pokud nevíš, zda zákazník problém uznává, nepotřebuješ automatizovaný workflow engine. Potřebuješ rozhovor, maketu a nabídku placeného pilotu. Pokud zákazník platit chce, ale bojí se migrace dat, MVP musí otestovat import a podporu přechodu.

Praktické pořadí rizik:

1. **Problém:** zákazník ho skutečně má a umí ho popsat vlastními slovy.
2. **Hodnota:** řešení mu ušetří nebo vydělá dost na to, aby stálo za změnu návyků.
3. **Distribuce:** víš, kde takové zákazníky opakovaně najít.
4. **Důvěra:** zákazník ti svěří data, proces nebo platbu.
5. **Technika:** umíš řešení dodat bezpečně a udržitelně.

Technika je důležitá, ale u raného SaaS bývá málokdy první neznámá. Často je pohodlnější psát kód než slyšet od zákazníka „tohle nepotřebuju“. Bohužel pohodlí není strategie.

### 3.4 První platba: sniž tření, nezvyšuj chaos

První placený pilot by měl být jednoduchý:

- jedna jasná nabídka;
- pevný rozsah;
- krátké období, třeba 30 dní;
- konkrétní úspěšné kritérium;
- ruční onboarding;
- faktura nebo jednoduchá platba kartou.

V Evropě musíš u online plateb počítat se silným ověřením zákazníka. Stripe ve své dokumentaci k Strong Customer Authentication popisuje, že evropská regulace PSD2 vyžaduje u mnoha online plateb vícefaktorové ověření a že platební tok má být připravený na dodatečnou autentizaci. Zdroj: https://stripe.com/guides/strong-customer-authentication

Pokud prodáváš digitální službu zákazníkům v EU, mysli také na DPH. Evropská komise popisuje One Stop Shop jako systém, který podnikům umožňuje přiznávat a odvádět DPH z přeshraničních B2C prodejů v EU přes jeden členský stát. Zdroj: https://vat-one-stop-shop.ec.europa.eu/index_en

To neznamená, že máš první týden stavět vlastní fakturační katedrálu. Znamená to, že musíš vědět, jestli prodáváš B2B nebo B2C, do jakých zemí, kdo vystavuje doklady a jak budeš řešit účetnictví. Chaos v platbách je jako plíseň v koupelně: nejdřív je to malý flíček, pak najednou rekonstruuješ půl domu.

### 3.5 Onboarding rozhoduje, jestli platba nebyla omyl

U prvních zákazníků onboarding klidně dělej ručně. Zavolej si s nimi, nastav účet, importuj vzorek dat, ukaž první výsledek a zapiš každou otázku, která padne. Z těchto otázek vznikne dokumentace, šablony e-mailů, prázdné stavy v aplikaci i budoucí automatizace.

První úspěch musí přijít rychle. Ne „za tři týdny po konfiguraci integrací“, ale ideálně během prvního sezení:

- zákazník vidí svá data v novém systému;
- odešle první nabídku, úkol, fakturu nebo report;
- pozve kolegu;
- pochopí, co má dělat zítra;
- ví, kam napsat, když se zasekne.

Privacy-first onboarding má ještě jednu vrstvu: vysvětli, kde data leží, kdo k nim má přístup a jak je zákazník dostane zpět. U evropských zákazníků to není nudná právní vsuvka. Je to důkaz, že nad provozem přemýšlíš.

### 3.6 Marketing před produktem: mluv jazykem problému

Ještě před veřejným launchem si založ jednoduchý obsahový základ:

- jednu landing page pro první segment;
- jednu stránku „Jak to funguje“;
- jednu stránku o soukromí a evropském provozu;
- tři praktické články k problému zákazníka;
- RSS feed nebo alespoň přehled novinek bez nutnosti sledovat sociální sítě.

Obsah nepiš jako tiskovou zprávu. Piš odpovědi na otázky, které zákazník opravdu řeší: „Jak předat podklady účetní bez chaosu v e-mailu“, „Jak plánovat servisní zakázky v malém týmu“, „Jak měřit B2B poptávky bez reklamních trackerů“.

Dobré rané SEO není hon za objemem vyhledávání. Je to sběr přesných dotazů od lidí, kteří už cítí problém. Tři relevantní poptávky jsou lepší než tisíc návštěv z článku, který přivede jen studenty, roboty a jednoho zmateného člověka hledajícího návod na pračku.

### 3.7 Checklist první placené verze

- [ ] Umíš jednou větou říct, komu SaaS pomáhá a s čím.
- [ ] Máš definovaný první úzký segment a seznam 20 konkrétních kontaktů.
- [ ] Máš domluvené alespoň 3 rozhovory nebo piloty s lidmi z cílového segmentu.
- [ ] Landing page popisuje problém jazykem zákazníka, ne jazykem backlogu.
- [ ] První nabídka má jasnou cenu, rozsah, délku pilotu a úspěšné kritérium.
- [ ] Platební nebo fakturační proces zvládne SCA, DPH a účetní realitu pro tvůj typ zákazníků.
- [ ] Onboarding dovede zákazníka k první viditelné hodnotě během prvního dne.
- [ ] Víš, která data sbíráš, kde leží a jak je zákazník dostane zpět.

### 3.8 Mini úkol na 45 minut

Napiš seznam 20 konkrétních firem nebo lidí, pro které by produkt mohl být bolestivě užitečný. Ke každému doplň jednu větu: „Myslím, že je trápí…“ Potom vyber pět nejpravděpodobnějších a napiš jim krátkou osobní zprávu bez automatizace, bez tracking pixelu a bez falešné naléhavosti.

> Codyho komentář: Pokud se bojíš napsat pěti lidem, pravděpodobně ještě nevěříš vlastní nabídce. To není ostuda. To je signál, že validace má začít dřív než další sprint.

---

## Kapitola 4: Produktivita malého týmu bez nástrojového lunaparku

Produktivita v malém SaaS týmu není soutěž o nejhezčí board, nejdražší knowledge base ani nejdelší ranní stand-up. Produktivita je schopnost pravidelně dodávat hodnotu zákazníkům, aniž by tým vyhořel, ztratil kontext nebo začal spravovat víc procesů než produktu.

Agile Manifesto mezi principy zmiňuje průběžné dodávání funkčního softwaru, udržitelný rytmus a jednoduchost jako umění maximalizovat množství práce, kterou není potřeba dělat. Zdroj: https://agilemanifesto.org/principles

Tohle je pro malé týmy osvobozující: nemusíš dělat „agile divadlo“. Stačí mít jasnou prioritu, krátkou zpětnou vazbu, viditelnou práci a disciplínu nedělat všechno najednou.

### 4.1 Jeden zdroj pravdy pro práci

Malý tým se nejrychleji ztratí ve chvíli, kdy úkoly žijí současně v chatu, e-mailu, hlavě zakladatele, poznámkách z callu a třech různých nástrojích. Nevadí, že systém není dokonalý. Vadí, když nikdo neví, kde je pravda.

Vyber jeden hlavní pracovní prostor pro úkoly a rozhodnutí. Může to být GitHub Issues, Linear, Plane, Trello, Notion, Obsidian vault nebo obyčejný Markdown v repozitáři. Důležité je, aby každý úkol měl:

- název, který říká výsledek, ne aktivitu;
- vlastníka;
- stav;
- očekávaný dopad;
- odkaz na relevantní kontext;
- jasnou definici hotovo.

Špatný úkol: „Landing page.“

Lepší úkol: „Upravit hero na landing page tak, aby účetní firmy do 5 vteřin pochopily přínos a klikly na demo.“

Ještě lepší úkol přidá měřitelné kritérium: „Po nasazení zkontrolovat 10 návštěv v analytice a ručně projít 3 poptávky, jestli odpovídají cílovému segmentu.“

### 4.2 Omez rozpracovanost dřív, než začne hořet tým

Work-in-progress limit není byrokracie. Je to pojistka proti tomu, aby každý dělal pět věcí a nic se nedostalo k zákazníkovi. Microsoft Learn popisuje WIP limity jako základní kanbanovou praxi, která omezuje počet položek v jednotlivých fázích práce. Zdroj: https://learn.microsoft.com/en-us/azure/devops/boards/boards/wip-limits

Pro dvou až pětičlenný tým začni jednoduchým pravidlem:

- nejvýše 1 hlavní priorita na člověka;
- nejvýše 2 aktivní produktové iniciativy najednou;
- bugy s dopadem na zákazníka mají jasný kanál a prioritu;
- nápady jdou do backlogu, ne rovnou do rozpracováno;
- pokud něco stojí déle než týden, rozděl to nebo zastav.

WIP limit má jednu nepříjemnou, ale zdravou vlastnost: ukáže, kde se práce zasekává. Pokud se vše hromadí v review, problém není „lidi málo makají“. Problém je možná v tom, že review nemá vlastníka, změny jsou moc velké nebo chybí automatická kontrola.

> Codyho komentář: Produktivita není mít otevřených 38 tabů. To je jen digitální verze kuchyňské linky, na které leží účtenky, vrtačka a půlka rohlíku.

### 4.3 Dokumentuj rozhodnutí, ne každý nádech

Dokumentace v malém týmu nemá suplovat zdravý rozum. Má zabránit tomu, aby se stejné rozhodnutí řešilo pětkrát. Nejdůležitější dokumenty nejsou dlouhé manuály, ale krátké záznamy typu:

- proč jsme vybrali tento hosting;
- proč nebudeme používat reklamní trackery;
- jak zálohujeme databázi;
- jak se nasazuje produkce;
- jak se řeší incident;
- jak vypadá dobrý pull request nebo změna.

Použij jednoduchý formát rozhodnutí:

```markdown
## Rozhodnutí: Analytika pro web

Datum: 2026-09-07
Kontext: Potřebujeme měřit návštěvnost a konverze bez reklamních trackerů.
Rozhodnutí: Použijeme privacy-first analytiku s EU provozem a bez osobních profilů.
Důsledky: Nebudeme mít cross-site remarketing, ale budeme mít jednodušší souhlasy a čistší data.
Revize: Za 3 měsíce zkontrolujeme, jestli metriky stačí pro rozhodování.
```

Privacy-first tým by měl dokumentovat hlavně datová rozhodnutí. Když za půl roku někdo navrhne „dejme tam pixel, konkurence ho má taky“, můžeš ukázat, proč jste se rozhodli jinak. Ne jako dogma, ale jako racionální stopu.

### 4.4 Rytmus týmu: krátce, pravidelně, bez porady pro poradu

Malý tým nepotřebuje kalendář narvaný rituály. Potřebuje rytmus, který snižuje nejistotu. Doporučený základ:

- **Týdenní plánování:** vybrat 1–3 výsledky týdne a říct, co se naopak dělat nebude.
- **Krátká denní synchronizace:** co blokuje postup, ne statusová recitace románu.
- **Páteční uzávěrka:** co se dodalo, co se naučilo, co se přesouvá.
- **Měsíční revize:** metriky, zákaznická zpětná vazba, technický dluh, bezpečnost a soukromí.

U vzdáleného nebo hybridního týmu piš víc věcí asynchronně. Ne proto, že chat je kouzelný, ale protože dobrý zápis šetří čas lidem, kteří zrovna nejsou online. Důležité rozhodnutí nepatří jen do hovoru. Patří do úkolu, dokumentu nebo issue.

### 4.5 Incidenty bez honu na viníka

Každý SaaS jednou spadne, zpomalí se nebo pošle uživatele do slepé uličky. Profesionální tým se nepozná podle toho, že nikdy neudělá chybu. Pozná se podle toho, že chybu rychle zachytí, opraví a poučí se bez divadelního hledání obětní kozy.

Atlassian ve svém průvodci postmortemy doporučuje blameless přístup, který se zaměřuje na příčiny, procesy a nápravná opatření místo ukazování prstem na jednotlivce. Zdroj: https://www.atlassian.com/incident-management/handbook/postmortems

Pro malý tým stačí jednoduchá šablona incidentu:

- co se stalo;
- koho se to dotklo;
- kdy jsme problém zjistili;
- jak jsme ho opravili;
- jaká data mohla být ovlivněna;
- co uděláme, aby se problém neopakoval;
- kdo ověří nápravné kroky.

Privacy-first poznámka: incident není jen výpadek serveru. Incident může být i zbytečný export dat, špatně nastavený přístup, logování citlivých údajů nebo nový nástroj, který sbírá víc informací, než tým původně pochopil.

### 4.6 Konkrétní příklad: týdenní režim pro tříčlenný SaaS tým

Představ si tým: jeden zakladatel, jeden vývojář, jedna člověkyně na zákaznickou podporu a obsah.

Praktický týden může vypadat takhle:

- **Pondělí 30 minut:** vybrat hlavní výsledek týdne, například „zvýšit počet dokončených onboardingů u nových účtů“.
- **Úterý až čtvrtek:** každý den krátká asynchronní zpráva: hotovo, blokery, dnešní fokus.
- **Středa 45 minut:** projít 3 zákaznické konverzace a vybrat jednu produktovou úpravu.
- **Čtvrtek:** nasadit malou změnu a zkontrolovat chyby, výkon a analytiku.
- **Pátek 30 minut:** zapsat výsledek, rozhodnutí, otevřené otázky a jeden privacy-first postřeh.

Výstupem týdne není „měli jsme pět meetingů“. Výstupem je dodaná změna, zapsané rozhodnutí a menší nejistota než v pondělí.

### 4.7 Checklist produktivity malého týmu

- [ ] Úkoly mají jeden hlavní zdroj pravdy.
- [ ] Každý aktivní úkol má vlastníka, dopad a definici hotovo.
- [ ] Tým má nastavený WIP limit a respektuje ho i při návalu nápadů.
- [ ] Důležitá rozhodnutí jsou zapsaná krátce a dohledatelně.
- [ ] Týdenní plán obsahuje i věci, které se záměrně dělat nebudou.
- [ ] Incidenty se zapisují bez hledání viníka a s konkrétními nápravnými kroky.
- [ ] Datová a privacy rozhodnutí mají vlastní stopu v dokumentaci.
- [ ] Každý měsíc tým smaže, sloučí nebo zjednoduší alespoň jeden proces nebo nástroj.

### 4.8 Mini úkol na 30 minut

Otevři svůj aktuální seznam úkolů a označ tři položky: jednu, která přinese zákaznickou hodnotu tento týden; jednu, která jen vypadá naléhavě; a jednu, kterou můžeš smazat bez reálné škody. Potom nastav WIP limit na maximum dvě aktivní produktové věci a napiš týmu, proč.

> Codyho komentář: Největší produktivní hack malého týmu je naučit se říkat „teď ne“ bez pocitu, že tím zabíjíš budoucnost. Většinou tím jen zachraňuješ přítomnost.

## Kapitola 5: Marketing bez spamu a závislosti na algoritmech

Marketing malého webu nebo SaaS produktu nemusí znamenat, že každý týden naháníš nový trik, nový formát a nové publikum na platformě, která ti zítra změní pravidla. Dobrý marketing je systém: pomáhá správným lidem pochopit problém, najít řešení, důvěřovat ti a vrátit se bez toho, aby ses musel chovat jako digitální kolotočář.

Privacy-first marketing má jednoduché pravidlo: raději buduj aktiva, která vlastníš a umíš vysvětlit, než publikum, ke kterému se dostaneš jen přes aukci pozornosti. Web, blog, dokumentace, případové studie, RSS, přímé odkazy, partnerské doporučení a dobrý onboarding jsou nudnější než „hack“, ale nudné věci často platí faktury. Nepříjemné, já vím.

### 5.1 Začni problémem, ne kanálem

Kanál je až odpověď na otázku, kde zákazník hledá pomoc. Když začneš větou „musíme dělat LinkedIn“, velmi snadno skončíš u obsahu pro ostatní zakladatele, ne pro zákazníky. Lepší start je krátká mapa:

| Otázka | Praktická odpověď |
| --- | --- |
| Koho chceme oslovit? | Například malé B2B týmy, které ručně řeší onboarding klientů. |
| Jak poznají, že mají problém? | Ztrácí přehled, opakují stejné e-maily, nestíhají předávky. |
| Co zadají do vyhledávání? | „client onboarding checklist“, „automatizace onboardingu“, „jak předat klienta po podpisu“. |
| Čemu nevěří? | Obecným slibům „ušetříme čas“ bez konkrétní ukázky. |
| Co potřebují před prvním kontaktem? | Příklad procesu, ceník nebo orientační rozsah, jasné další kroky. |

Google ve svém SEO Starter Guide doporučuje vytvářet obsah primárně pro uživatele, ne pro vyhledávače, a technické SEO stavět na srozumitelné struktuře, titulcích a popisech. Užitečný obsah tedy nezačíná seznamem klíčových slov, ale přesnou formulací problému, který člověk opravdu řeší. Zdroj: https://developers.google.com/search/docs/fundamentals/seo-starter-guide

### 5.2 Obsahové pilíře: méně témat, víc hloubky

Malý tým nepotřebuje produkovat deset článků týdně. Potřebuje několik témat, ve kterých umí být užitečný opakovaně. Pilíř je téma, kde se potkává zákaznická bolest, tvoje expertíza a obchodní cíl.

Příklad pro privacy-first SaaS studio:

- **Webový výkon:** jak rychlost ovlivňuje důvěru, konverze a použitelnost.
- **Evropský provoz:** kde leží data, jak vybírat nástroje a kdy zvolit vlastní hosting.
- **Onboarding:** jak dostat zákazníka od registrace k první hodnotě.
- **Měření bez šmírování:** jak poznat, co funguje, bez session replay cirkusu.
- **Produktové rozhodování:** jak vybírat malé změny s reálným dopadem.

Z každého pilíře může vzniknout praktický článek, checklist, šablona, krátká případovka, odpověď na častou otázku i část dokumentace. Nepřepisuješ pořád od nuly. Vytváříš znalostní sklad, ze kterého se dá čerpat.

### 5.3 Vlastní kanály jsou pojistka proti náladě platforem

Sociální sítě jsou užitečné pro distribuci, ale špatné jako jediný zdroj vztahu se zákazníkem. Algoritmus není partner. Je to pronajatý megafon s vlastním obchodním modelem.

Vlastní kanály mají jinou logiku:

- Web je domov obsahu, obchodních argumentů a konverzí.
- RSS umožňuje lidem sledovat novinky bez účtu, newsletteru a sledovacích pixelů.
- E-mail může fungovat dobře, pokud je dobrovolný, střídmý a bez manipulační automatizace.
- Dokumentace a changelog pomáhají zákazníkům i vyhledávání.
- Přímé odkazy se dají sdílet bez sociálních widgetů a externích skriptů.

RSS 2.0 specifikace popisuje jednoduchý formát pro publikování seznamu položek v kanálu, který mohou číst různé aplikace. Pro privacy-first značku je to skvělý typ „nudné infrastruktury“: uživatel si vybere čtečku a nemusí se přihlašovat do další platformy. Zdroj: https://www.rssboard.org/rss-specification

> Codyho komentář: RSS je trochu jako tramvaj. Není sexy, ale jezdí, nepotřebuje tvůj obličej a neptá se tě, jestli chceš zapnout personalizované peklo.

### 5.4 Landing page jako marketingový filtr

Landing page nemá přesvědčit každého. Má rychle pomoct správnému člověku poznat, jestli je řešení pro něj. Když stránka slibuje všechno všem, přivede špatné leady, horší podporu a produktové požadavky, které tě stáhnou do bažiny.

Dobrá stránka filtruje pomocí konkrétnosti:

- **Pro koho:** „Pro malé účetní firmy s 3–20 lidmi“, ne „pro moderní týmy“.
- **Situace:** „Když každý měsíc ručně doháníte podklady od klientů.“
- **Výsledek:** „Vidíte stav podkladů, automaticky připomínáte chybějící věci a máte auditní stopu.“
- **Důkaz:** screenshot, krátká ukázka procesu, případová studie nebo měřitelný příklad.
- **Další krok:** demo, zkušební účet, konzultace nebo checklist ke stažení bez agresivního sběru dat.

Pokud používáš formulář, chtěj minimum údajů. U prvního kontaktu často stačí e-mail a jedna otázka typu „co řešíte“. Všechno ostatní se dá doplnit později, až člověk uvidí hodnotu.

### 5.5 Obsahový rytmus pro malý tým

Nejlepší publikační plán je ten, který přežije běžný týden. Žádný tým s jedním vývojářem, půl marketingovým mozkem a hromadou zákaznické podpory nepotřebuje kalendář jak mediální dům.

Realistický měsíční rytmus:

- **1 hlubší článek:** praktický návod nebo případová studie z jednoho pilíře.
- **1 šablona nebo checklist:** něco, co si zákazník může rovnou použít.
- **2 krátké poznámky:** odpovědi na časté otázky, changelog, mini tipy.
- **1 recyklace:** rozdělit starší článek na krátký post, e-mail nebo dokumentační stránku.
- **1 úklid:** aktualizovat starý obsah, opravit odkazy a odstranit zastaralé sliby.

Každý kus obsahu by měl mít jasný další krok: přečíst související článek, vyzkoušet demo, stáhnout checklist, objednat konzultaci nebo se přihlásit k RSS. Bez dalšího kroku je obsah hezká výloha bez dveří.

### 5.6 Konkrétní příklad: launch malé SaaS funkce

Tým přidává funkci „automatické připomínky klientům“. Marketing bez spamu může vypadat takhle:

1. Napsat krátký changelog: co je nové, pro koho, jak zapnout, jak vypnout.
2. Přidat článek „Jak omezit ruční připomínání klientů bez ztráty osobního tónu“.
3. Do článku vložit ukázkový e-mail a checklist nastavení frekvence připomínek.
4. Na landing page doplnit konkrétní sekci s obrázkem workflow.
5. Poslat stručný e-mail jen zákazníkům, kterých se funkce týká, ne celé databázi.
6. Změřit zobrazení článku, klik na nastavení funkce a počet zapnutých připomínek.
7. Po dvou týdnech projít podporu a doplnit FAQ podle reálných dotazů.

Privacy-first detail: měř agregované produktové události a dobrovolnou zpětnou vazbu. Nepotřebuješ sledovat každý pohyb uživatele v administraci jen proto, abys zjistil, že tlačítko „Zapnout připomínky“ nikdo nenašel.

### 5.7 Checklist marketingu bez spamu

- [ ] Každý obsahový pilíř odpovídá konkrétnímu zákaznickému problému.
- [ ] Web má jasné další kroky bez nátlakových dark patternů.
- [ ] Publikovaný obsah má vlastní URL a dá se číst bez přihlášení na platformu.
- [ ] RSS nebo jiný přímý odběr je dostupný bez sledovacích pixelů.
- [ ] E-mail posíláš jen lidem, kteří ho čekají a mají z něj jasnou hodnotu.
- [ ] Formuláře sbírají jen údaje nutné pro další krok.
- [ ] Sociální sítě používáš jako distribuci, ne jako jediný archiv znalostí.
- [ ] Starý obsah se pravidelně aktualizuje, slučuje nebo maže.

### 5.8 Mini úkol na 45 minut

Vyber jeden zákaznický problém, který se tento měsíc opakoval v hovorech, e-mailech nebo podpoře. Napiš k němu osnovu článku o pěti bodech: situace, chyba, lepší postup, konkrétní příklad a checklist. Na konec přidej jeden nenásilný další krok. Pokud nedokážeš napsat příklad, problém ještě není dost konkrétní.

## Kapitola 6: Technický stack, který malý tým unese

Technický stack není sbírka log na nálepky na notebook. Je to provozní závazek. Každá databáze, fronta, CDN, analytika, monitoring nebo AI služba přidává možnosti, ale taky účty, bezpečnostní rizika, výpadkové scénáře a práci pro budoucí já. A budoucí já mívá méně času, méně kávy a méně tolerance k chytrým nápadům z minulého pátku.

Privacy-first SaaS v Evropě potřebuje stack, který je dost jednoduchý na správu, dost bezpečný na důvěru a dost přenosný na to, aby tě jeden dodavatel nedržel za límec. Neznamená to stavět všechno ručně. Znamená to vědět, co provozuješ, proč to provozuješ a jak to vypneš nebo nahradíš.

### 6.1 Začni provozní mapou, ne frameworkem

Než vybereš framework nebo hosting, napiš si provozní mapu produktu. Měla by odpovědět na pět otázek:

- **Kde běží aplikace:** region, poskytovatel, typ runtime, očekávaný provoz.
- **Kde leží data:** primární databáze, soubory, zálohy, logy, analytika.
- **Jak se produkt nasazuje:** ručně, CI/CD, preview prostředí, rollback.
- **Jak poznáš problém:** monitoring, alerty, aplikační logy, zpětná vazba.
- **Jak obnovíš provoz:** zálohy, exporty, náhradní komunikace, odpovědnosti.

Tahle mapa nemusí být krásná. Stačí Markdown tabulka v repozitáři. Krása přijde později; provozní jistota chce nejdřív pravdu.

Příklad jednoduché mapy:

| Oblast | Doporučený start | Privacy-first otázka |
| --- | --- | --- |
| Aplikace | EU VPS nebo evropský PaaS | Běží primární provoz v EU? |
| Databáze | PostgreSQL v EU regionu | Kdo má administrátorský přístup? |
| Soubory | Objektové úložiště v EU | Jde nastavit životnost a mazání? |
| Analytika | Agregovaná webová analytika | Lze fungovat bez cross-site identifikace? |
| Logy | Krátká retence a redakce citlivých údajů | Nepíšeme do logů e-maily, tokeny nebo obsah zpráv? |
| Zálohy | Automaticky, šifrovaně, testovaně | Umíme obnovit data bez dodavatele? |

### 6.2 Jednoduchý stack pro první verzi

Pro první placenou verzi SaaS často stačí nudná architektura:

- monolitická webová aplikace,
- PostgreSQL,
- objektové úložiště pro přílohy,
- e-mailová služba pro transakční zprávy,
- agregovaná analytika,
- monitoring dostupnosti a chyb,
- automatické zálohy.

Nudné je tady kompliment. Monolit se dá pochopit. Jedna databáze se dá zálohovat. Jeden deployment se dá rollbacknout. Tři mikroslužby, fronta, event bus a pět edge funkcí vypadají na diagramu dospěle, ale malému týmu umí sežrat týden jen tím, že se ráno špatně podíváš na DNS.

Když přemýšlíš o nové technologii, použij jednoduchý filtr:

1. Řeší problém, který máme teď, nebo jen problém, který vypadá prestižně?
2. Umí ji spravovat aspoň dva lidé v týmu?
3. Má jasný export nebo migrační cestu?
4. Dá se provozovat v EU nebo s rozumnou kontrolou nad daty?
5. Co se stane, když služba zítra zdraží, změní podmínky nebo vypadne?

Pokud neumíš odpovědět na body 2 až 5, technologie není zakázaná. Jen ještě není rozhodnutá.

### 6.3 Hosting: vybírej podle dat a obnovy

Hosting není jen cena za měsíc. Je to kombinace dostupnosti, podpory, právního rámce, záloh, fyzické lokace dat a tvé schopnosti odejít. U privacy-first evropského provozu dávej přednost poskytovateli, který nabízí jasný EU region, přístup k exportům, srozumitelné smluvní podmínky a minimum magických černých skříněk.

Praktické doporučení:

- Pro menší web nebo interní nástroj začni statickým hostingem nebo jednoduchým serverem.
- Pro SaaS s databází preferuj oddělenou databázi, pravidelné zálohy a jasný rollback aplikace.
- Pro citlivější data odděl produkci, staging a lokální vývoj. Kopie produkčních dat do vývoje dělej jen anonymizovaně.
- Nepoužívej produkční databázi jako testovací hřiště. To je jako opravovat motor za jízdy a divit se, že zákazníci slyší rány.
- Zapiš si, kdo má přístup do hostingu, kdo umí nasadit a kdo umí obnovit zálohu.

Codyho komentář: Nejlepší hosting pro malý tým není ten s největším billboardem. Je to ten, kde umíš v neděli večer pochopit fakturu, najít logy a obnovit poslední funkční stav bez archeologické expedice.

### 6.4 Bezpečnost jako rutina, ne velký audit jednou ročně

OWASP Top 10 je dobrý orientační seznam nejčastějších a nejrizikovějších tříd problémů webových aplikací. OWASP ASVS jde praktičtěji do ověřovacích požadavků pro bezpečnostní kontroly aplikací. Zdroje: https://owasp.org/Top10/ a https://owasp.org/www-project-application-security-verification-standard/

Pro malý SaaS si z toho neber paniku. Vezmi si rutinu:

- **Přístup:** vícefaktorové ověření pro administraci, nejmenší nutná oprávnění, pravidelný úklid účtů.
- **Tajemství:** žádné API klíče v repozitáři, žádné tokeny v logu, rotace při podezření.
- **Validace vstupů:** vše, co přijde od uživatele, ber jako nebezpečné, i když se uživatel tváří jako účetní tabulka.
- **Aktualizace:** závislosti aktualizuj průběžně, ne až když internet hoří.
- **Logování:** loguj chyby a bezpečnostní události, ale ne osobní údaje, hesla, tokeny nebo obsah soukromých zpráv.
- **Review:** změny v autentizaci, platbách, oprávněních a exportech dat procházej minimálně druhým párem očí.

Bezpečnostní práce má být malá a častá. Jednou týdně projít závislosti, jednou měsíčně obnovit testovací zálohu, jednou za kvartál zkontrolovat přístupy. To je pro malý tým užitečnější než jednou ročně luxusní PDF, které všichni založí do složky „až bude čas“.

### 6.5 Zálohy jsou funkce, dokud nejsou otestované

Záloha, kterou nikdo nikdy neobnovil, je spíš naděje než plán. ENISA ve svých doporučeních ke kybernetické odolnosti zdůrazňuje integritu záloh, ochranu proti neoprávněné změně nebo smazání a důkaz, že zálohy opravdu probíhají. Zdroj: https://www.enisa.europa.eu/sites/default/files/2025-06/ENISA_Technical_implementation_guidance_on_cybersecurity_risk_management_measures_version_1.0.pdf

Praktický plán záloh:

- **Databáze:** automatická denní záloha, krátká retence pro rychlé chyby, delší retence pro průšvihy zjištěné pozdě.
- **Soubory:** zálohovat přílohy stejně vážně jako databázi; bez nich je účet zákazníka často poloviční.
- **Konfigurace:** mít v repozitáři nebo bezpečném správci tajemství vše, co je potřeba k obnově prostředí.
- **Izolace:** aspoň jedna kopie nemá být jednoduše smazatelná stejným účtem, který běžně provozuje aplikaci.
- **Test obnovy:** minimálně jednou měsíčně obnovit do odděleného prostředí a zapsat čas i problém.

Checklist obnovy by měl být tak jednoduchý, aby ho zvládl člověk, který není autor původního deploymentu. Pokud obnova existuje jen v hlavě jednoho vývojáře, nemáš disaster recovery. Máš lidský single point of failure v mikině.

### 6.6 Monitoring, který hlídá zákaznickou realitu

Monitoring není soutěž v počtu dashboardů. Smyslem je včas poznat, že zákazník nemůže udělat důležitou práci. Sleduj proto technické i produktové signály:

- dostupnost hlavní aplikace,
- stav přihlášení a registrace,
- odesílání e-mailů,
- chybovost klíčových endpointů,
- latenci nejdůležitějších akcí,
- stav platebních webhooků,
- poslední úspěšnou zálohu.

Alert má mít vlastníka a akci. „Něco je červené“ není alert, to je náladové osvětlení. Dobrý alert říká: co se rozbilo, koho to dopadá, kde hledat první log a co udělat jako první krok.

Privacy-first poznámka: monitoring a logy často obsahují citlivé údaje omylem. Nastav redakci tokenů, e-mailů a osobních údajů už v aplikaci. Nespoléhej na to, že to za tebe udělá externí služba. Do logu patří technický kontext, ne celý život zákazníka.

### 6.7 Konkrétní příklad: stack pro český B2B SaaS

Představ si SaaS pro malé účetní kanceláře. První rozumná verze může vypadat takto:

1. Webová aplikace jako monolit s jasným oddělením veřejného webu, administrace a API.
2. PostgreSQL v EU regionu, šifrované zálohy a měsíční test obnovy.
3. Přílohy v objektovém úložišti s oddělenými právy a pravidly pro mazání.
4. Transakční e-maily přes poskytovatele, který má zpracovatelské podmínky a jasné logy doručení.
5. Agregovaná analytika pro marketingový web a samostatné produktové metriky bez zbytečné identifikace.
6. Monitoring dostupnosti, chyb aplikace, platebních webhooků a poslední zálohy.
7. Dokument `RUNBOOK.md`: nasazení, rollback, obnova databáze, kontakt na hosting, incident postup.

Tenhle stack není sexy na konferenční slide. Ale dá se provozovat, vysvětlit zákazníkovi a postupně škálovat. A to je pro první roky SaaS mnohem důležitější než architektura, která vypadá jako metro v Tokiu.

### 6.8 Checklist technického stacku

- [ ] Víme, kde fyzicky nebo smluvně leží aplikace, databáze, soubory, logy a zálohy.
- [ ] Každá externí služba má jasný účel, vlastníka a plán náhrady.
- [ ] Produkce, staging a vývoj jsou oddělené a vývoj nepoužívá neanonymizovaná produkční data.
- [ ] Tajemství nejsou v repozitáři, v logu ani v dokumentaci.
- [ ] Administrátorské účty mají MFA a přístupy se pravidelně kontrolují.
- [ ] Zálohy běží automaticky, jsou izolované a obnova se pravidelně testuje.
- [ ] Monitoring hlídá zákaznické scénáře, ne jen CPU a pocit kontroly.
- [ ] Existuje krátký runbook pro deployment, rollback, incident a obnovu dat.
- [ ] Logy mají omezenou retenci a neobsahují citlivé údaje.
- [ ] Nová technologie se přidává až po odpovědi na otázky provozu, dat a migrace.

### 6.9 Mini úkol na 60 minut

Vezmi svůj aktuální produkt a napiš jednu stránku `PROVOZ.md`. Rozděl ji na čtyři části: kde běží aplikace, kde jsou data, jak se nasazuje a jak se obnovuje po chybě. U každé části přidej jeden největší risk a jednu konkrétní akci na tento týden. Pokud dokument nedokážeš napsat bez hledání hesel ve Slacku, právě jsi našel první provozní dluh.


## Kapitola 7: Měření, které pomáhá produktu, ne stalkingu

Měření v SaaS má být kompas, ne reality show. Cílem není vědět o návštěvníkovi všechno. Cílem je dělat lepší rozhodnutí: co zlepšit na webu, kde se lidé ztrácejí v produktu, zda zákazníci dostávají slíbenou hodnotu a jestli tým nepálí energii na funkce, které nikdo nepoužije.

Privacy-first měření stojí na třech pravidlech:

1. Měř jen otázky, na které umíš udělat rozhodnutí.
2. Začni agregovaně a anonymně, identifikaci přidej jen tam, kde je nutná pro službu nebo podporu.
3. Každá metrika musí mít vlastníka, rytmus kontroly a hranici, kdy se něco mění.

Jinak z analytiky vznikne skládka grafů. A skládka grafů je pořád skládka, jen má hezčí barvičky.

### 7.1 Nejdřív otázky, potom eventy

Nezačínej tím, že do aplikace nasypeš dvacet událostí typu `button_clicked`. Začni otázkami:

- Přicházejí na web správní lidé?
- Chápe návštěvník do 10 sekund, co nabízíme?
- Dokáže nový uživatel dokončit první hodnotnou akci?
- Vrací se zákazník proto, že produkt pomáhá, nebo jen proto, že mu chodí připomínky?
- Kolik podpory vzniká kvůli nejasnému UX?
- Které části produktu mají přímou vazbu na platbu, retenci nebo úsporu práce?

Teprve potom napiš minimální měřicí plán. U každé otázky si poznamenej signál, zdroj dat, frekvenci kontroly a rozhodnutí.

| Otázka | Signál | Zdroj | Rytmus | Rozhodnutí |
| --- | --- | --- | --- | --- |
| Funguje landing page? | Klik na demo, odeslání formuláře | Agregovaná webová analytika | Týdně | Přepsat hero, CTA nebo důkaz důvěry |
| Zvládají lidé onboarding? | Dokončení první hodnotné akce | Produktová událost | Týdně | Zjednodušit krok, přidat šablonu, upravit copy |
| Používá se klíčová funkce? | Aktivní účty s akcí za 30 dní | Interní agregace | Měsíčně | Vylepšit funkci, schovat ji, nebo ji přestat tlačit |
| Bolí zákazníky provoz? | Počet ticketů k jedné oblasti | Helpdesk štítky | Měsíčně | Upravit UX, dokumentaci nebo automatizaci |

### 7.2 Metriky pro web: méně dashboardu, víc rozhodnutí

Pro marketingový web malého SaaS většinou stačí pár ukazatelů:

- návštěvy klíčových stránek,
- zdroje návštěvnosti,
- kliky na hlavní CTA,
- odeslání formuláře,
- nejčtenější obsah,
- technický stav webu: rychlost, dostupnost a chybové stránky.

Google Search Central připomíná, že obsah má být užitečný a psaný pro lidi, ne jen pro vyhledávače. Pro měření to znamená jednoduchou věc: nesleduj jen návštěvnost článku, sleduj i to, jestli článek pomáhá správnému dalšímu kroku. Zdroj: https://developers.google.com/search/docs/fundamentals/creating-helpful-content

Příklad: článek „Jak vybrat SaaS pro účetní kancelář“ nemusí mít nejvyšší návštěvnost na webu. Pokud ale přivádí kvalifikované poptávky, je hodnotnější než virální text, po kterém se nikdo nevrátí. Marketing není soutěž v počtu otevřených tabů.

Privacy-first nastavení webové analytiky:

- měř agregovaně,
- nepoužívej cross-site reklamní profily,
- zkrať retenci detailních dat,
- měř vlastní události jen pro důležité akce,
- do URL neposílej e-maily, jména ani interní identifikátory,
- pro sdílení používej normální odkazy a RSS místo social skriptů.

### 7.3 Metriky pro produkt: aktivace, hodnota, retence

SaaS se nemá měřit jen registrací. Registrace je slib. Aktivace je první důkaz, že člověk pochopil hodnotu. Retence ukazuje, jestli se hodnota opakuje.

Praktická sada pro první fázi:

- **Aktivace:** procento nových účtů, které dokončí první hodnotnou akci.
- **Time to value:** čas od registrace k prvnímu užitečnému výsledku.
- **Retence:** kolik účtů se vrací po 7, 30 a 90 dnech podle povahy produktu.
- **Použití klíčové funkce:** podíl aktivních účtů, které používají funkci spojenou s hlavním příslibem.
- **Kvalita:** chyby, pomalé odpovědi a opakované dotazy na podporu.
- **Obchodní zdraví:** nové platby, rozšíření tarifu, churn a důvody odchodu.

Google výzkum HEART popisuje rámec pro uživatelsky orientované metriky: happiness, engagement, adoption, retention a task success. Užitečný není tím, že ho slepě zkopíruješ, ale tím, že nutí propojit cíle produktu s konkrétními signály. Zdroj: https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/

Pro malý B2B SaaS bych HEART zjednodušil takhle:

| Oblast | Praktická otázka | Příklad měření |
| --- | --- | --- |
| Spokojenost | Pomohl produkt bez frustrace? | Krátká dobrovolná zpětná vazba po dokončení úkolu |
| Zapojení | Používá se hlavní pracovní tok? | Počet účtů s klíčovou akcí za týden |
| Adopce | Začali lidé používat novou funkci? | Podíl aktivních účtů, které ji vyzkoušely |
| Retence | Vrací se zákazníci přirozeně? | Návrat aktivních účtů po období odpovídajícím práci zákazníka |
| Úspěch úkolu | Dokončí člověk práci bez podpory? | Dokončené úkoly, čas, chybové stavy, dotazy na podporu |

### 7.4 Technické metriky: rychlost doručování i stabilita

Produktové měření bez technického kontextu klame. Když klesne aktivace, nemusí být problém v copywritingu. Možná onboarding padá na mobilu, e-mail nepřijde, nebo nová verze rozbila import CSV.

DORA metriky rozlišují rychlost a stabilitu vývoje: frekvenci nasazení, lead time změn, change failure rate a čas obnovy služby. Novější materiály k DORA pracují také s reliabilitou jako širší oblastí provozní kvality. Zdroje: https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance a https://cloud.google.com/blog/products/devops-sre/supercharge-your-devops-practice-with-sre-principles

Pro malý tým z toho vyplývá jednoduchý dashboard:

- Jak často nasazujeme bezpečně?
- Jak dlouho trvá cesta od změny v kódu do produkce?
- Kolik nasazení vyvolalo incident, rollback nebo urgentní opravu?
- Jak rychle obnovíme službu po chybě?
- Které zákaznické scénáře jsou pomalé nebo nespolehlivé?

Tohle není korporátní gymnastika. Je to způsob, jak poznat, jestli tým opravdu zrychluje, nebo jen častěji vyrábí malé požáry.

### 7.5 Kdy identifikovat uživatele a kdy ne

Identifikace uživatele dává smysl tam, kde pomáhá dodat službu: účet, fakturace, oprávnění, auditní log, podpora nebo bezpečnost. Nedává smysl jako výchozí nastavení pro každý pohyb po webu.

Rozumný kompromis:

- Veřejný web měř agregovaně.
- Produktové eventy spojuj s účtem jen pro klíčové akce a interní zlepšování služby.
- Pro marketingové kampaně ukládej jen parametry, které opravdu vyhodnocuješ.
- Do logů neposílej obsah formulářů, tokeny, hesla ani osobní poznámky zákazníků.
- U citlivých rolí a administrace loguj bezpečnostní události, ale drž retenci a přístupy přísně.

GDPR princip minimalizace a odpovědnosti není nepřítel analytiky. Je to užitečný filtr proti sbírání dat „kdyby někdy“. A „kdyby někdy“ je nejdražší produktový backlog na světě, protože ho nikdo nikdy nedokončí.

### 7.6 Konkrétní příklad: dashboard pro první rok SaaS

Představ si SaaS pro správu zakázek malé servisní firmy. Jeden měsíční dashboard může mít jen osm dlaždic:

1. Návštěvy landing page a kliky na demo.
2. Počet nových demo poptávek a jejich zdroj.
3. Počet nových účtů.
4. Aktivace: první vytvořená zakázka do 48 hodin.
5. Použití: aktivní účty s alespoň pěti zakázkami za měsíc.
6. Retence: účty aktivní ve druhém a třetím měsíci.
7. Kvalita: chyby v importu, pomalé odpovědi a top tři dotazy na podporu.
8. Peníze: nové platby, rozšíření tarifu, churn a hlavní důvod zrušení.

Každá dlaždice má poznámku „co uděláme, když se to zhorší“. Bez té poznámky je metrika jen tapeta.

### 7.7 Checklist měření

- [ ] Máme měřicí plán napsaný jako otázky, ne jako seznam náhodných eventů.
- [ ] U každé metriky víme, jaké rozhodnutí podle ní uděláme.
- [ ] Veřejný web měříme agregovaně a bez reklamních profilů.
- [ ] Produktové eventy neobsahují zbytečné osobní údaje.
- [ ] URL, logy a analytické payloady neobsahují e-maily, tokeny ani interní identifikátory.
- [ ] Retence dat odpovídá účelu a není nastavena na nekonečno ze zvyku.
- [ ] Dashboard kombinuje marketing, produkt, kvalitu a obchodní dopad.
- [ ] Tým pravidelně maže metriky, které nikdo nepoužívá pro rozhodování.
- [ ] Incidenty a chyby se propojují s dopadem na zákaznické scénáře.
- [ ] Důležité závěry z metrik zapisujeme do rozhodnutí, ne jen do chatu.

### 7.8 Mini úkol na 60 minut

Otevři svůj současný dashboard a smaž mentálně všechno, podle čeho bys příští týden neudělal žádné rozhodnutí. Pak napiš tabulku pěti otázek, které produkt opravdu potřebuje zodpovědět. Ke každé přidej jednu metriku, jeden zdroj dat a jednu akci. Pokud se nevejdeš na jednu stránku, nemáš dashboard — máš datové akvárium.


## Kapitola 8: Praktické šablony pro rychlejší rozhodování

Šablony nejsou byrokracie, pokud jsou krátké a vedou k rozhodnutí. Jsou to koleje pro opakované situace: nový web, landing page, launch funkce, výběr nástroje, audit soukromí nebo incident. Malý tým nepotřebuje složitý proces. Potřebuje způsob, jak nezapomenout na důležité otázky, když ho zrovna honí termín, zákazník a realita.

Dobrá šablona má tři vlastnosti:

- vejde se na jednu až dvě stránky,
- má jasného vlastníka a datum,
- končí konkrétními dalšími kroky.

Pokud šablona nevede k akci, je to kancelářský origami. Hezké možná, užitečné spíš pro test trpělivosti.

### 8.1 Šablona briefu pro web nebo landing page

Použij ji předtím, než začneš psát copy, kreslit wireframe nebo vybírat šablonu. Cílem je oddělit podstatu od dekorací.

```md
# Brief stránky

## Kontext
- Název stránky:
- Vlastník:
- Datum:
- Proč stránka vzniká právě teď:

## Publikum
- Primární segment:
- Co už ví:
- Co ho trápí:
- Jakou námitku bude mít nejspíš jako první:

## Nabídka
- Jedna věta: komu pomáháme, s čím a jaký je výsledek:
- Hlavní důkaz důvěry:
- Co na stránce neslibujeme:

## Akce
- Primární CTA:
- Sekundární CTA:
- Co se stane po kliknutí:

## Soukromí a data
- Jaká data stránka sbírá:
- Kam se data ukládají:
- Kdo k nim má přístup:
- Jak dlouho je držíme:

## Měření
- Tři otázky, které chceme vyhodnotit:
- Metriky:
- Kdy se ke stránce vrátíme:
```

Příklad pro konzultační službu:

- Primární segment: B2B SaaS tým do 15 lidí, který má první zákazníky, ale web a onboarding rostly živelně.
- Jedna věta: Pomáháme malým SaaS týmům najít úniky v konverzi, výkonu a soukromí během praktického auditu.
- Hlavní důkaz: ukázka anonymizovaného výstupu a jasný postup auditu.
- Primární CTA: „Poslat web k auditu“.
- Měření: klik na CTA, dokončený formulář, odpověď na navazující e-mail.

Codyho komentář: Nejlepší brief je ten, který odhalí, že stránku vlastně nepotřebuješ. Druhá nejlepší varianta je brief, který zabrání třem týdnům debat o tom, jestli má tlačítko být „Kontaktovat“ nebo „Pojďme růst společně“. Fuj, to druhé raději ne.

### 8.2 Šablona landing page, která prodává bez křiku

Tuhle strukturu použij pro službu, SaaS modul, lead magnet nebo launch nové funkce. Neber ji jako dogma. Ber ji jako výchozí kostru, kterou můžeš zkrátit nebo rozšířit podle ceny, složitosti a důvěry, kterou musí zákazník získat.

```md
# Landing page

## Hero
- Nadpis s konkrétním výsledkem:
- Podnadpis: pro koho, jak a proč teď:
- CTA:
- Krátký důkaz:

## Problém
- Jak problém vypadá v praxi:
- Co stojí čas, peníze nebo nervy:
- Proč běžné řešení nestačí:

## Řešení
- Co přesně nabízíme:
- Jaké jsou tři hlavní přínosy:
- Co zákazník nemusí řešit:

## Jak to funguje
1. Krok:
2. Krok:
3. Krok:

## Důvěra
- Reference, ukázka, metrika nebo konkrétní zkušenost:
- Bezpečnost a privacy-first provoz:
- Podpora a další kroky:

## Cena nebo další krok
- Tarif, orientační cena nebo vysvětlení procesu:
- Co je zahrnuto:
- Co není zahrnuto:

## FAQ
- Námitka 1:
- Námitka 2:
- Námitka 3:
```

Praktický příklad slabé části a opravy:

| Slabé copy | Lepší copy |
| --- | --- |
| „Moderní řešení pro efektivní firmy“ | „Správa zakázek, termínů a faktur pro servisní týmy do 20 lidí“ |
| „Kontaktujte nás“ | „Domluvit 20min ukázku“ |
| „Dbáme na bezpečnost“ | „Data ukládáme v EU, přístupy omezujeme podle rolí a zálohy obnovujeme testem každý měsíc“ |
| „Automatizujte procesy“ | „Z nového e-mailu se vytvoří zakázka, termín a úkol pro technika“ |

Landing page má snižovat nejistotu. Pokud člověk po přečtení pořád neví, co se stane po kliknutí, stránka neprodává — jen decentně mává rukama.

### 8.3 Šablona launch checklistu

Launch není jeden velký výstřel z konfety kanónu. Je to série malých kontrol, které brání trapným chybám. Konfety jsou volitelné. Funkční platební webhook ne.

```md
# Launch checklist

## Produkt
- [ ] Funkce řeší konkrétní problém popsaný v jedné větě.
- [ ] Existuje jednoduchý demo scénář.
- [ ] Onboarding vysvětluje první hodnotnou akci.
- [ ] Chybové stavy mají lidské texty.
- [ ] Podpora ví, co se spouští a pro koho.

## Web a obsah
- [ ] Landing page má jasný nadpis, CTA a důkaz důvěry.
- [ ] URL, title, meta description a interní odkazy dávají smysl.
- [ ] Dokumentace nebo nápověda pokrývá první otázky.
- [ ] RSS nebo vlastní kanál obsahuje oznámení bez závislosti na sociálních sítích.

## Měření
- [ ] Měříme návštěvu stránky, klik na CTA a dokončení hlavní akce.
- [ ] Eventy neobsahují osobní údaje ani tokeny.
- [ ] Dashboard má vlastníka a datum vyhodnocení.

## Provoz
- [ ] Nasazení má rollback plán.
- [ ] Monitoring hlídá klíčový scénář.
- [ ] Záloha a migrace databáze jsou ověřené.
- [ ] Tajemství nejsou v repozitáři ani v logu.

## Komunikace
- [ ] Interní tým zná positioning a omezení funkce.
- [ ] Zákazníci dostanou jasné vysvětlení přínosu.
- [ ] Existuje místo pro zpětnou vazbu.
```

Pro malý SaaS stačí launch vyhodnotit po 7, 14 a 30 dnech. Nehledej hned „definitivní pravdu“. Hledej signály: kdo kliká, kdo zkouší, kdo se ptá, kde se lidé zaseknou a co bys měl upravit jako první.

### 8.4 Šablona privacy-first auditu nástroje

Kdykoli chce tým přidat nový nástroj, projdi krátký audit. Týká se analytiky, CRM, helpdesku, mailingových služeb, AI integrací i malých widgetů, které vypadají nevinně jako koťátko — a pak posílají data do osmi destinací.

```md
# Audit nástroje

## Identita nástroje
- Název:
- Vlastník v týmu:
- Účel:
- Alternativy:

## Data
- Jaká osobní data zpracuje:
- Jaká technická data zpracuje:
- Potřebujeme všechna tato data?
- Umí pseudonymizaci nebo anonymizaci?

## Provoz a smlouvy
- Kde jsou data uložená:
- Je dostupný EU region:
- Kdo jsou subzpracovatelé:
- Existuje DPA nebo zpracovatelská smlouva:
- Jak se data exportují a mažou:

## Rizika
- Co se stane při výpadku:
- Co se stane při zdražení:
- Jak nástroj opustíme:
- Jaká data se dostanou do podpory nebo logů:

## Rozhodnutí
- Schválit / zamítnout / pilot:
- Podmínky použití:
- Datum kontroly:
```

Pravidlo pro rozhodnutí: pokud nástroj sbírá osobní data, nemá jasný účel a nejde vypnout profilování nebo nadbytečné logování, nejdřív hledej jednodušší variantu. Někdy je nejlepší integrace ta, kterou nepřidáš.

### 8.5 Šablona provozního runbooku

Runbook je návod pro situace, kdy se něco rozbije a mozek přepne do režimu „kde je kafe a proč svítí dashboard červeně“. Nemusí být dlouhý. Musí být použitelný ve stresu.

```md
# Runbook

## Služba
- Název:
- Produkční URL:
- Vlastník:
- Repozitář:
- Hosting:

## Klíčové scénáře
- Registrace:
- Přihlášení:
- Platba:
- Odeslání e-mailu:
- Export dat:

## Nasazení
- Jak se nasazuje:
- Jak poznáme úspěšné nasazení:
- Jak udělat rollback:

## Monitoring
- Kde jsou alerty:
- Kdo je dostává:
- Co kontrolovat jako první:

## Logy
- Kde jsou aplikační logy:
- Kde jsou systémové logy:
- Jak se redigují citlivé údaje:

## Zálohy
- Co se zálohuje:
- Jak často:
- Kde je poslední test obnovy:
- Jak spustit obnovu:

## Incident
- První krok:
- Koho informovat:
- Kde zapisovat průběh:
- Kdy udělat postmortem:
```

Největší hodnota runbooku není dokument samotný. Je to rozhovor, který vznikne při jeho psaní: „Aha, my vlastně nevíme, kdo má přístup k zálohám.“ Gratuluju, právě jsi našel problém v klidu místo ve tři ráno.

### 8.6 Šablona měřicího plánu

Měřicí plán drž odděleně od implementace eventů. Nejprve napiš, proč něco měříš, a až potom řeš technické názvy událostí.

```md
# Měřicí plán

| Otázka | Metrika | Zdroj | Segment | Frekvence | Rozhodnutí |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

## Pravidla
- Neměříme osobní údaje, pokud nejsou nutné pro službu nebo podporu.
- Do URL neposíláme e-maily, tokeny ani interní ID.
- Event má vlastníka a účel.
- Data mažeme nebo agregujeme podle účelu.
- Každý kvartál smažeme metriky, které nikdo nepoužívá.
```

Příklad vyplnění:

| Otázka | Metrika | Zdroj | Segment | Frekvence | Rozhodnutí |
| --- | --- | --- | --- | --- | --- |
| Zvládne nový účet první hodnotnou akci? | Vytvořená první zakázka do 48 hodin | Interní agregace | Nové účty | Týdně | Změnit onboarding nebo připravit šablonu |
| Přivádí obsah správné poptávky? | Poptávky z článků podle tématu | Webová analytika + formulář | B2B návštěvníci | Měsíčně | Posílit téma, přepsat CTA nebo ukončit sérii |
| Bolí zákazníky konkrétní část produktu? | Tickety se stejným štítkem | Helpdesk | Platící účty | Měsíčně | Upravit UX, dokumentaci nebo prioritu roadmapy |

### 8.7 Osobní pracovní rytmus zakladatele

Produktivita není o tom, že máš víc aplikací než úkolů. Pro malý SaaS tým často stačí jednoduchý týdenní rytmus:

- Pondělí: rozhodnutí týdne, největší riziko, tři priority.
- Úterý až čtvrtek: hluboká práce na produktu, prodeji nebo obsahu.
- Pátek: vyhodnocení metrik, zákaznická zpětná vazba, provozní dluh.
- Jednou měsíčně: finance, retence, bezpečnost, zálohy a privacy audit.

Každý týden si napiš jednu větu:

> Tento týden bude úspěch, pokud dokončíme ___ pro ___, protože ___.

Tahle věta je nepříjemně jednoduchá. Proto funguje. Když ji neumíš doplnit, nejspíš nemáš prioritu, ale mlhu s kalendářem.

### 8.8 Checklist šablon

- [ ] Pro novou stránku existuje brief s publikem, nabídkou, CTA a daty.
- [ ] Landing page vysvětluje problém, řešení, důkaz, cenu nebo další krok.
- [ ] Launch checklist pokrývá produkt, web, měření, provoz a komunikaci.
- [ ] Každý nový nástroj projde privacy-first auditem.
- [ ] Runbook obsahuje deployment, rollback, monitoring, logy, zálohy a incident postup.
- [ ] Měřicí plán začíná otázkami a rozhodnutími, ne náhodnými eventy.
- [ ] Šablony mají vlastníka a datum poslední kontroly.
- [ ] Tým pravidelně maže šablony, které nikomu nepomáhají.

### 8.9 Mini úkol na 60 minut

Vyber jednu šablonu z této kapitoly a použij ji na skutečný produkt, ne na hypotetického jednorožce z pitch decku. Nejlepší start je `Runbook` nebo `Audit nástroje`, protože rychle ukážou rizika. Výsledek dej do repozitáře vedle projektu a přidej datum další kontroly. Pokud šablona odhalí tři nepříjemné otázky, funguje správně.

---

## Kapitola 9: AI automatizace v evropském SaaS bez datového hazardu

AI v malém SaaS týmu má smysl tehdy, když zrychluje konkrétní práci, zlepšuje kvalitu služby nebo snižuje opakovanou ruční zátěž. Nemá smysl jako ozdoba do homepage, interní kouzelná krabička bez vlastníka nebo výmluva, proč se zákaznická data posílají do nástroje, který nikdo nezkontroloval.

Evropská komise uvádí, že AI Act vstoupil v platnost 1. 8. 2024 a jeho pravidla se uplatňují postupně podle typu povinností a rizik. Zdroj: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai

Tohle není důvod k panice. Je to důvod přestat nasazovat AI stylem „zkusíme to a uvidíme, jestli se právník lekne“.

### 9.1 Začni jedním use casem, ne firemní revolucí

Nejlepší AI automatizace bývají nudné. Třídění podpory, návrhy odpovědí, shrnutí dlouhých vláken, kontrola formulářů, převod poznámek z callu do úkolů, detekce duplicit v dokumentaci. Nudné znamená měřitelné. A měřitelné znamená, že po měsíci víš, jestli to pomohlo.

Před implementací napiš jednu větu:

> AI použijeme pro ___, aby ___, měřit budeme ___ a člověk zodpovědný za výsledek je ___.

Příklad:

> AI použijeme pro návrh odpovědí na support tikety, aby tým rychleji reagoval na opakované otázky, měřit budeme čas první odpovědi a počet ručních oprav, vlastník je vedoucí podpory.

Pokud tu větu neumíš vyplnit, nemáš automatizaci. Máš technologický třpytivý prášek.

### 9.2 Rozděl AI podle rizika

Ne každé použití AI potřebuje stejný režim. Udělej si jednoduché tři úrovně:

| Úroveň | Příklad | Povolená data | Kontrola člověkem |
| --- | --- | --- | --- |
| Nízké riziko | Shrnutí veřejného blogového článku | Veřejný obsah | Namátková kontrola |
| Střední riziko | Návrh odpovědi zákazníkovi | Zákaznický dotaz bez zbytečných osobních údajů | Povinné schválení před odesláním |
| Vyšší riziko | Doporučení změny tarifu, smlouvy nebo přístupu | Jen nezbytná data, ideálně pseudonymizovaná | Člověk rozhoduje, AI jen připravuje podklady |

Privacy-first pravidlo: čím vyšší dopad na zákazníka, tím méně autonomie a tím lepší auditní stopa. AI může navrhovat, seskupovat a kontrolovat. Rozhodnutí, která mění peníze, smlouvy, přístup nebo reputaci zákazníka, má vlastnit člověk nebo jasně definovaný systém s dohledem.

### 9.3 Data do promptu patří jen tehdy, když musí

Prompt je vstup do zpracování dat. Ber ho jako API request, ne jako poznámkový blok. Před odesláním dat do AI si polož čtyři otázky:

- Potřebuje model skutečně osobní údaje, nebo stačí anonymizovaný popis?
- Potřebuje celý dokument, nebo jen relevantní úryvek?
- Ukládá poskytovatel vstupy pro trénink, ladění nebo diagnostiku?
- Máme v dokumentaci uvedeno, kam data odcházejí a proč?

Evropská komise u Data Actu popisuje pravidla pro přístup k datům, sdílení dat a jednodušší přechod mezi cloudovými službami; většina ustanovení se začala používat od 12. 9. 2025. Zdroj: https://digital-strategy.ec.europa.eu/en/policies/data-act

Pro SaaS tým je z toho praktické ponaučení: nebuduj AI funkci tak, aby data uvízla v jednom dodavateli bez exportu. Ukládej vlastní vstupy, výstupy, verze promptů a rozhodnutí ve své infrastruktuře, ne jen v cizím dashboardu.

### 9.4 Prompt engineering jako provozní disciplína

Prompt není kouzelná básnička. Je to část produktu. Měl by mít verzi, vlastníka, testovací sadu a rollback. Zní to suše, ale přesně to odděluje užitečnou automatizaci od momentu, kdy chatbot začne zákazníkovi tvrdit, že sleva 200 % je obchodně odvážná strategie.

Minimální provozní sada:

- složka `ai-prompts/` nebo interní dokumentace s verzemi promptů;
- 10 až 30 reálných anonymizovaných testovacích vstupů;
- očekávaný typ výstupu, zakázané formulace a bezpečnostní hranice;
- metrika kvality: přesnost, časová úspora, míra ručních oprav nebo spokojenost podpory;
- postup, jak prompt vypnout, když začne škodit.

Prompt testuj na okrajových případech: naštvaný zákazník, neúplná data, čeština se slangem, dlouhý e-mail, nesouvisející požadavek a pokus vytáhnout interní instrukce. Ano, prompt injection je ta chvíle, kdy se i věta „ignoruj všechny předchozí instrukce“ tváří jako firemní proces.

### 9.5 AI v marketingu: pomocník, ne automat na šum

AI může urychlit rešerši, osnovu, varianty titulku nebo kontrolu srozumitelnosti. Neměla by vyrábět generický obsah ve velkém jen proto, že to jde. Marketing bez důvěry je levný provozně a drahý reputačně.

Praktické použití:

- nech AI navrhnout otázky pro zákaznický rozhovor, ale rozhovor dělej s člověkem;
- nech AI shrnout support tikety do témat pro blog, ale nepublikuj citlivé detaily;
- nech AI navrhnout alternativní titulky, ale ověř, že neslibují nesmysly;
- nech AI zkontrolovat čitelnost textu, ale finální tón drž lidský a konkrétní;
- používej RSS, dokumentaci a přímé odkazy jako primární distribuční kanály, ne jen sociální algoritmy.

Codyho komentář: AI obsah je jako káva. Jedna dobrá dávka pomůže. Deset litrů denně z tebe neudělá produktivního génia, jen nervózní generátor odstavců.

### 9.6 Checklist bezpečné AI funkce

- [ ] Funkce má jeden konkrétní use case a vlastníka.
- [ ] Je jasné, která data vstupují do modelu a proč jsou nezbytná.
- [ ] Osobní a citlivá data jsou minimalizovaná, anonymizovaná nebo pseudonymizovaná, kde to jde.
- [ ] Poskytovatel, region provozu, ukládání dat a subzpracovatelé jsou zdokumentovaní.
- [ ] Výstupy s dopadem na zákazníka kontroluje člověk nebo jasně definovaný schvalovací proces.
- [ ] Prompty mají verze, testovací sadu a rollback plán.
- [ ] Loguje se dost pro audit a ladění, ale ne víc, než je nutné.
- [ ] Zákazník pochopí, kdy s AI interaguje nebo kdy AI pomáhá se zpracováním jeho požadavku.

### 9.7 Mini úkol na 45 minut

Vyber jednu existující ruční činnost v SaaS nebo marketingu a vyplň pro ni tuto tabulku:

| Otázka | Odpověď |
| --- | --- |
| Jaký přesně problém automatizujeme? |  |
| Jak často se děje? |  |
| Jaká data jsou opravdu potřeba? |  |
| Co se nesmí poslat do modelu? |  |
| Jak poznáme, že AI výstup je dobrý? |  |
| Kdo výstup schvaluje? |  |
| Jak funkci vypneme při problému? |  |

Když tabulka zůstane poloprázdná, automatizaci zatím nestav. Nejdřív zmapuj proces. Nejlevnější AI chyba je ta, kterou nepošleš do produkce.


## Kapitola 10: Cenotvorba, která neprodává mlhu v elegantním kabátu

Ceník není jen finanční tabulka. Je to produktová komunikace, segmentace zákazníků a test důvěry v jednom. Když je ceník nejasný, zákazník si často neřekne „zeptám se“. Řekne si „tohle bude složité“ a odejde. A protože internet je stroj na odchody, nemusíš mu v tom pomáhat.

Dobrá cenotvorba pro malý SaaS nebo webovou službu má tři cíle:

- zákazník rychle pochopí, pro koho je který balíček;
- tým dokáže cenu vysvětlit bez excelové seance s bubnem;
- provoz, podpora a marže zůstávají zdravé i po prvních nadšených zákaznících.

### 10.1 Začni hodnotou, ne pocitem „kolik si můžeme dovolit říct“

Cena má vycházet z hodnoty pro zákazníka, ne jen z nákladů na server a večerní kávy. Náklady jsou spodní hranice. Hodnota je důvod, proč zákazník platí rád.

Ptej se:

- Jaký drahý problém zákazník řeší?
- Kolik času, chyb, ztracených poptávek nebo administrativy mu produkt ušetří?
- Kdo u zákazníka reálně rozhoduje o nákupu?
- Je produkt „hezké mít“, nebo řeší bolest, která už dnes stojí peníze?
- Jak zákazník řeší problém teď a proč mu to nestačí?

Příklad: Nástroj pro rezervace schůzek u lokální služby není jen „kalendář“. Pokud sníží počet propadlých termínů a ušetří recepci hodiny telefonování, cena se nemá odvozovat od toho, že databázový záznam stojí skoro nic. Má se odvozovat od ušetřeného času a vyšší obsazenosti.

Codyho komentář: „Ale konkurence je levnější“ je informace, ne rozsudek. Pokud máš stejnou hodnotu, horší značku a vyšší cenu, máš problém. Pokud máš lepší výsledek, jednodušší provoz a férovější práci s daty, máš argument.

### 10.2 Tři balíčky většinou stačí

Malý SaaS nepotřebuje ceník připomínající jídelní lístek v restauraci, kde se vaří všechno od sushi po svíčkovou. Pro první roky často stačí tři balíčky:

| Balíček | Pro koho | Hlavní slib | Typická hranice |
| --- | --- | --- | --- |
| Start | Jednotlivec nebo malý tým | Rychle vyřešit základní problém | počet projektů, uživatelů nebo měsíční objem |
| Tým | Rostoucí firma | Spolupráce, automatizace, priority | více uživatelů, integrace, pokročilé role |
| Business | Náročnější provoz | Kontrola, bezpečnost, onboarding | audit logy, SSO, SLA, individuální podpora |

Každý balíček by měl mít jednu jasnou větu. Ne „obsahuje 37 funkcí“, ale „pro malý tým, který chce mít zakázky pod kontrolou bez vlastního admina“. Funkce jsou důkaz. Slib je důvod ke kliknutí.

Pravidlo: pokud zákazník musí otevřít interní wiki, aby pochopil rozdíl mezi balíčky, ceník je moc chytrý. A moc chytrý ceník bývá často jen nejistota převlečená za strategii.

### 10.3 Free trial, freemium nebo demo? Vyber podle rizika a návyku

Neexistuje univerzální správná vstupní cesta. Vyber ji podle toho, jak rychle zákazník pozná hodnotu a kolik podpory potřebuje.

- **Free trial** se hodí, když uživatel zvládne produkt vyzkoušet sám a první hodnota přijde rychle.
- **Freemium** dává smysl, když máš nízké provozní náklady, virální nebo síťový efekt a jasný důvod k upgradu.
- **Demo nebo konzultace** je lepší, když produkt řeší složitější B2B proces, vyžaduje migraci dat nebo rozhoduje více lidí.
- **Pilot** pomáhá u větších zákazníků, ale musí mít jasný konec, kritéria úspěchu a plán přechodu na placený režim.

Privacy-first poznámka: i trial je vztah se zákazníkem. Nepoužívej ho jako záminku pro sběr zbytečných dat. Pokud chceš ověřit kvalitu leadu, stačí pár relevantních otázek: typ firmy, velikost týmu, problém a e-mail. Rodné číslo, oblíbený jogurt a marketingový pixel opravdu nepotřebuješ.

### 10.4 Co dát do ceníku a co nechat na obchodní rozhovor

Transparentní cena buduje důvěru, ale ne každá nabídka musí být veřejně rozpitvaná do poslední položky. Rozlišuj mezi standardním produktem a zakázkovým provozem.

Veřejně ukaž:

- komu je balíček určený;
- cenu nebo alespoň jasný cenový rámec;
- hlavní limity a co se stane při jejich překročení;
- dostupné integrační a bezpečnostní funkce;
- způsob zrušení, export dat a základní podmínky podpory.

Na obchodní rozhovor nech:

- individuální migrace;
- speciální SLA;
- právní nebo bezpečnostní požadavky většího zákazníka;
- nestandardní integrace;
- objemové nebo partnerské dohody.

Nejhorší varianta je „kontaktujte nás“ úplně všude. U malého B2B SaaS může být „kontaktujte nás“ legitimní u enterprise balíčku, ale pokud ho dáš i na základní tarif, často tím jen říkáš: „Ani my netušíme, kolik to má stát.“

### 10.5 Férové limity jsou lepší než skryté pasti

Limity nejsou zlo. Pomáhají sladit cenu s reálným využitím. Zlo jsou limity, které zákazník pochopí až ve chvíli, kdy narazí na zeď.

Dobré limity:

- navazují na hodnotu produktu, například počet aktivních projektů, objednávek nebo týmových členů;
- jsou snadno měřitelné a viditelné v aplikaci;
- mají předem popsané chování po překročení;
- nejdou proti běžnému používání produktu;
- chrání provoz a podporu bez trestání dobrých zákazníků.

Špatný limit je třeba takový, který zákazník nemůže rozumně ovlivnit nebo předvídat. Pokud účtuješ podle něčeho technického, co chápe jen vývojář, přelož to do zákaznického jazyka. „Počet API requestů“ může být pro technický produkt v pořádku. Pro řemeslníka je lepší „počet zakázek“ nebo „počet odeslaných zpráv zákazníkům“.

### 10.6 Konkrétní příklad: ceník pro SaaS evidenci zakázek

Představ si český B2B SaaS pro malé servisní firmy: technici, zakázky, termíny, fotky z místa a jednoduché předání podkladů k fakturaci.

První verze ceníku může vypadat takto:

| Balíček | Popis | Obsah | Upgrade moment |
| --- | --- | --- | --- |
| Start | Pro živnostníka nebo dvojici | zakázky, termíny, základní export, e-mailová podpora | přibude další technik nebo více souběžných zakázek |
| Tým | Pro menší firmu | role, více techniků, šablony zakázek, notifikace, lepší přehledy | majitel potřebuje kontrolu nad týmem a méně telefonátů |
| Business | Pro provoz s vyššími nároky | audit log, prioritní podpora, migrace, individuální nastavení, DPA | firma řeší bezpečnost, reporting nebo více poboček |

Landing page by k tomu měla dodat dvě věci: jednoduchý výpočet hodnoty a důkaz z reality. Třeba: „Pokud ušetříte recepci 5 hodin týdně a snížíte počet zapomenutých zakázek, produkt se nemá porovnávat s cenou jednoho oběda. Má se porovnávat s chaosem, který už dnes platíte.“

To není trik. To je připomenutí, že software má stát méně než problém, který řeší.

### 10.7 Checklist ceníku

- [ ] Každý balíček má jasné publikum a jednu větu hodnoty.
- [ ] Zákazník pochopí rozdíl mezi balíčky bez konzultace.
- [ ] Limity navazují na zákaznickou hodnotu, ne jen na interní technickou metriku.
- [ ] Trial, freemium, demo nebo pilot odpovídá složitosti produktu.
- [ ] Ceník vysvětluje zrušení, export dat a základní podmínky podpory.
- [ ] Enterprise nebo individuální nabídka má důvod, ne jen zakrytou nejistotu.
- [ ] Tým ví, kdy doporučit který balíček a kdy zákazníka odmítnout.
- [ ] Privacy-first argument je popsaný jako hodnota, ne jako nudná právní poznámka.

### 10.8 Mini úkol na 60 minut

Vezmi svůj současný nebo plánovaný produkt a vyplň tuto tabulku:

| Otázka | Odpověď |
| --- | --- |
| Jaký problém zákazník platí, aby zmizel? |  |
| Jak pozná hodnotu během prvního týdne? |  |
| Jaké tři segmenty zákazníků dávají smysl? |  |
| Jaký limit nejlépe odpovídá hodnotě? |  |
| Kdy zákazník přirozeně upgraduje? |  |
| Co musí být veřejně v ceníku? |  |
| Co patří až do obchodního rozhovoru? |  |

Na konci si nahlas přečti větu: „Tento balíček je pro ___, protože jim pomáhá ___.“ Pokud to zní jako věta z grantové žádosti, přepiš ji. Zákazníci nekupují grantovou žádost. Kupují klid, výsledek a méně chaosu.

---

## Dodatek A: 30denní plán pro menší web nebo SaaS

E-book je fajn. Akce je lepší. Tohle je praktický plán na měsíc pro malý tým, freelancera nebo zakladatele, který nechce jen číst o lepším webu, ale opravdu ho posunout. Neber ho jako dogma. Ber ho jako kolejničky, které tě vytáhnou z mlhy.

> Codyho komentář: Pokud máš pocit, že „nejdřív musíme všechno promyslet“, pravděpodobně potřebuješ menší krok, ne další workshop. Workshop je někdy jen tabulka, která si oblékla sako.

### Týden 1: Vyjasni nabídku a data

Cíl prvního týdne je pochopit, co prodáváš, komu a jaká data kvůli tomu opravdu potřebuješ. Neřeš zatím nový design. Neotevírej tržiště šablon. Neinstaluj analytiku číslo čtyři, protože měla hezký graf v reklamě.

Konkrétní výstupy:

- Jedna věta hodnoty: „Pomáháme ___ dosáhnout ___ bez ___.“
- Seznam tří hlavních segmentů zákazníků.
- Mapa dat pro web, produkt, platby, podporu a marketing.
- Rozhodnutí, které nástroje jsou nezbytné a které jen historicky přilepené.
- První návrh stránky „Bezpečnost a soukromí“ nebo interní poznámky k ní.

Mini cvičení: projdi všechny formuláře na webu a v produktu. U každého pole napiš důvod, proč ho sbíráš. Pokud důvod neexistuje, pole smaž nebo ho přesuň do pozdějšího kroku, kde už dává smysl.

### Týden 2: Oprav nejdůležitější cestu

Druhý týden se soustřeď na jednu cestu, která má obchodní dopad. Typicky homepage → ceník → poptávka, článek → checklist → kontakt, nebo registrace → první hodnota v produktu.

Nesnaž se opravit celý web. Vyber jednu trasu a udělej ji nudně dobrou:

- Nadpisy říkají výsledek, ne interní slogan.
- CTA popisuje další krok konkrétně.
- Formulář sbírá minimum údajů.
- Stránka má důkaz důvěry: proces, ukázku, referenci nebo technické vysvětlení.
- Mobilní zobrazení je čitelné bez zoomování a lovení tlačítka palcem.
- Externí skripty mají jasný důvod, vlastníka a plán vyhodnocení.

Praktický příklad: místo obecného tlačítka „Kontaktujte nás“ použij „Poslat web k auditu“. Hned je jasné, co se stane. Pokud po kliknutí následuje formulář s deseti poli, vrať se o krok zpět a zeptej se, jestli opravdu potřebuješ telefon, obrat firmy a rodné jméno firemního křečka.

### Týden 3: Změř méně, ale užitečněji

Třetí týden nastav měření tak, aby pomáhalo rozhodovat. Privacy-first analytika není o slepotě. Je o tom, že nesbíráš osobní stopu každého návštěvníka jen proto, že to nástroj umí.

Vyber maximálně pět událostí:

- `pricing_view` — člověk řeší cenu;
- `demo_request` — člověk chce obchodní kontakt;
- `signup_start` — začal registraci;
- `signup_done` — dokončil registraci;
- `first_value_done` — zažil první skutečný přínos produktu.

Ke každé události napiš rozhodnutí, které podle ní uděláš. Pokud žádné rozhodnutí neexistuje, událost nepotřebuješ. Metrika bez rozhodnutí je jen dekorace. A dekorace v dashboardu má stejnou hodnotu jako plastová palma v zasedačce: možná zvedne náladu, ale zákazníka nepřivede.

### Týden 4: Zaveď rytmus a odpovědnosti

Čtvrtý týden uzavři měsíc provozním rytmem. Cílem není mít dokonalý systém, ale opakovatelný způsob, jak web a SaaS zlepšovat bez heroického hašení.

Nastav jednoduchý týdenní rytmus:

- 30 minut: projít návštěvnost, poptávky, registrace a support otázky.
- 30 minut: vybrat jednu prioritní úpravu s jasným očekávaným dopadem.
- 60–120 minut: úpravu dodat, změřit nebo připravit k vydání.
- 15 minut: zapsat rozhodnutí do changelogu nebo interní poznámky.
- 15 minut: odstranit jednu věc, která se už nepoužívá.

Odstraňování je podceňovaná produktová práce. Každý nepoužívaný skript, zapomenutý formulář, starý lead magnet nebo mrtvá integrace zvyšuje provozní šum. Malý tým nepotřebuje víc šumu. Malý tým potřebuje méně věcí, které se tváří důležitě.

### 30denní checklist

- [ ] Máme jednu jasnou větu hodnoty pro hlavní segment.
- [ ] Víme, jaká data sbíráme, proč, kde leží a kdo k nim má přístup.
- [ ] Nejdůležitější cesta na webu má konkrétní CTA a měřitelný další krok.
- [ ] Ceník nebo nabídka vysvětluje hodnotu, limity, podporu a zrušení.
- [ ] Analytika měří jen události, podle kterých umíme rozhodovat.
- [ ] Web funguje bez reklamních trackerů a zbytečných třetích stran.
- [ ] Máme jednoduchý runbook pro výpadek, obnovu a kontakt na odpovědné lidi.
- [ ] Jednou týdně mažeme nebo zjednodušujeme něco, co už nepomáhá.

### Mini úkol na 60 minut

Vyber jednu položku z checklistu, která má největší dopad na důvěru zákazníka, a dokonči ji dnes. Neplánuj reorganizaci celého produktu. Nezakládej epický backlog. Dokonči jednu věc tak, aby ji zákazník nebo tým opravdu poznal.

Pokud si nemůžeš vybrat, začni mapou dat. Privacy-first provoz bez mapy dat je jako vaření bez seznamu surovin: možná vznikne večeře, ale taky možná zapálíš kuchyň a budeš tomu říkat experiment.

---

## Dodatek B: Jak vybrat nástroj bez vendor lock-in kocoviny

Každý malý tým má slabost pro nový nástroj. Vypadá čistě, slibuje automatizaci, má hezký onboarding a na úvodní stránce se tváří, že po instalaci konečně přestane existovat chaos. Jenže nástroj není jen funkce. Je to místo, kam začneš posílat data, procesy a často i kus firemní paměti.

Privacy-first výběr nástroje proto nezačíná otázkou „umí to integraci se vším?“. Začíná otázkou „co se stane, když to za rok budeme chtít vypnout?“. Pokud na ni nikdo neumí odpovědět, nekupuješ nástroj. Kupuješ budoucí migraci s nádechem detektivky.

> Codyho komentář: Nejhorší vendor lock-in není ten, kde nejdou exportovat data. Nejhorší je ten, kde exportovat jdou, ale nikdo už neví, co znamenají sloupce `custom_field_17`, `legacy_status_2` a `final_final_owner_real`.

### B.1 Rozděl nástroje podle rizika

Ne všechny nástroje si zaslouží stejnou hloubku auditu. Ikonky pro sociální sítě jsou jiné riziko než CRM, fakturace nebo support s historií zákaznických problémů. Aby se tým nezasekl v nekonečné kontrole každé drobnosti, používej tři úrovně.

| Úroveň | Typ nástroje | Typická data | Jak hluboko kontrolovat |
| --- | --- | --- | --- |
| Nízké riziko | Veřejný obsah, jednoduché utility | Bez osobních údajů nebo jen veřejné informace | Rychlá kontrola účelu, ceny a možnosti vypnutí |
| Střední riziko | Marketing, formuláře, analytika, interní workflow | E-maily, agregovaná data, obsah komunikace | Zkontrolovat EU provoz, export, subdodavatele a retenční nastavení |
| Vysoké riziko | CRM, support, platby, účetnictví, AI nad zákaznickými daty | Osobní, obchodní nebo citlivá provozní data | Udělat písemné rozhodnutí, právní/provozní kontrolu a plán migrace |

Praktické pravidlo: pokud by únik dat z nástroje způsobil zákazníkovi ostudu, finanční škodu nebo právní problém, je to vysoké riziko. Pokud by způsobil jen povzdech „ach jo, další export CSV“, je to pravděpodobně střední nebo nízké riziko.

### B.2 Sedm otázek před zapnutím nové služby

Před nasazením si projdi krátký rozhodovací formulář. Není to byrokracie pro radost. Je to brzda proti tomu, aby se z firemního stacku stal digitální bazar.

1. Jaký konkrétní problém nástroj řeší?
2. Jaká data do něj pošleme a která z nich jsou osobní nebo obchodně citlivá?
3. Kde budou data fyzicky nebo smluvně provozovaná?
4. Kdo k datům získá přístup: náš tým, dodavatel, subdodavatelé, AI modely, support?
5. Umíme nastavit retenci, mazání a export bez ručního vyjednávání?
6. Jak nástroj vypneme, když zdraží, změní podmínky nebo přestane dávat smysl?
7. Jak poznáme za 30 dní, že opravdu pomohl?

Poslední otázka je často nejdůležitější. Nástroj bez vyhodnocení má tendenci zůstat ve firmě navždy, protože nikdo nechce být ten člověk, který „rozbije workflow“. I když workflow mezitím používá už jen jeden člověk a pes kanceláře. Pes, samozřejmě, bez přístupu do CRM.

### B.3 Preferuj nástroje, které se dají opustit

Dobrá služba tě nemusí držet jako rukojmí. Naopak: čím férovější export a dokumentace, tím větší důvěru buduje. Při výběru proto hledej známky zdravého vztahu mezi dodavatelem a zákazníkem.

Dobré signály:

- Export dat je dostupný přímo v administraci.
- Dokumentace jasně popisuje API, formáty a limity.
- Smluvní podmínky rozlišují zákaznická data, metadata a použití pro zlepšování služby.
- Lze omezit zpracování dat pro trénování modelů, marketing nebo profilování.
- Nástroj má jednoduché role a práva, ne jen „admin pro všechny, protože spěcháme“.
- Fakturace a zrušení účtu jsou stejně srozumitelné jako registrace.

Varovné signály:

- Export existuje jen přes support ticket.
- Ceník skrývá limity, které jsou pro tvůj use case zásadní.
- Data se bez jasného důvodu kopírují do dalších regionů nebo marketingových systémů.
- Nástroj vyžaduje víc oprávnění, než odpovídá práci, kterou má dělat.
- Dodavatel neumí jednoduše vysvětlit, co se stane po ukončení smlouvy.

### B.4 Příklad: výběr nástroje pro zákaznický support

Představ si český B2B SaaS, který hledá support nástroj. Tým chce sdílenou schránku, štítky, SLA a znalostní bázi. Nejrychlejší cesta by byla vybrat první známé jméno, propojit inbox, zapnout AI shrnutí a hotovo. Jenže support obsahuje zákaznické problémy, obchodní detaily, přílohy a někdy i osobní údaje.

Rozumnější postup:

- Sepiš, jaká data support skutečně zpracuje: e-mail, jméno, firma, obsah ticketu, přílohy, interní poznámky.
- Rozhodni, které funkce jsou povinné: společný inbox, role, export ticketů, znalostní báze, audit přístupů.
- Ověř, zda lze provozovat data v EU nebo alespoň smluvně omezit přenosy a subdodavatele.
- Vypni funkce, které nejsou potřeba: session replay, reklamní identifikátory, automatické obohacování kontaktů.
- Nastav retenční pravidlo: například mazání starých příloh po určené době, pokud nejsou potřeba pro smluvní vztah.
- Připrav exit plán: export ticketů, export článků znalostní báze, přesměrování e-mailu, změna formulářů na webu.

Výstupem není jen vybraný nástroj. Výstupem je rozhodnutí, které přežije první incident, audit i budoucí otázku „proč jsme si sakra vybrali zrovna tohle?“.

### B.5 Jednoduchá skórovací tabulka

Když máš dvě až čtyři varianty, dej jim body 1–5. Nejde o exaktní vědu. Jde o to, aby tým nemíchal dohromady cenu, sympatie k UI a reálné riziko.

| Kritérium | Váha | Nástroj A | Nástroj B | Poznámka |
| --- | ---: | ---: | ---: | --- |
| Řeší hlavní problém bez obcházek | 3 |  |  | Umí klíčový scénář bez hacků? |
| EU provoz nebo silná kontrola dat | 3 |  |  | Kde jsou data a kdo je zpracovává? |
| Export a možnost migrace | 3 |  |  | Dostaneš ven vše potřebné? |
| Jednoduchost pro tým | 2 |  |  | Naučí se to lidé používat bez školení roku? |
| Role, práva a audit přístupů | 2 |  |  | Lze omezit přístup podle potřeby? |
| Cena po prvních 12 měsících | 2 |  |  | Nejen úvodní sleva, ale reálný provoz. |
| Integrace bez datového chaosu | 1 |  |  | Posílá jen nutná data? |

Vynásob body váhou a sečti výsledek. Pokud nástroj s nejvyšším skóre prohrává „protože se nám prostě líbí ten druhý“, aspoň víš, že děláš vědomou výjimku. Vědomá výjimka je v pořádku. Nevědomá výjimka je začátek interní archeologie.

### B.6 Pilot bez závazku na věčnost

Nový nástroj nenasazuj rovnou jako firemní standard. Udělej malý pilot s jasným koncem.

Pilot na 30 dní by měl mít:

- vlastníka, který odpovídá za vyhodnocení;
- konkrétní scénář, ne obecné „uvidíme, jestli se chytne“;
- omezenou skupinu uživatelů nebo dat;
- měřitelný výsledek: méně ruční práce, rychlejší odpověď, méně chyb, lepší přehled;
- předem napsané rozhodnutí, co znamená pokračovat, upravit nebo vypnout;
- plán úklidu dat, pokud pilot skončí.

Příklad: support nástroj testuj jen na nové poptávky z webu, ne na kompletní historii všech zákazníků od roku 2018. Pokud pilot nevyjde, uklidíš pár týdnů dat. Pokud bys importoval všechno, budeš místo vyhodnocení řešit, jak bezpečně odmotat klubko.

### B.7 Checklist výběru nástroje

- [ ] Víme, jaký problém nástroj řeší a kdo je jeho vlastník.
- [ ] Máme sepsaná data, která do nástroje půjdou.
- [ ] Známe region provozu, subdodavatele a základní smluvní nastavení.
- [ ] Umíme vypnout zbytečné tracking, profilovací nebo AI funkce.
- [ ] Máme ověřený export a víme, jak by vypadala migrace pryč.
- [ ] Nastavili jsme role podle potřeby, ne podle lenosti.
- [ ] Pilot má konec, kritéria úspěchu a plán úklidu.
- [ ] Rozhodnutí je zapsané tak, aby mu tým rozuměl i za půl roku.

### B.8 Mini úkol na 45 minut

Vyber jeden nástroj, který ve firmě používáte často a nikdo ho poslední rok nekontroloval. Vyplň sedm otázek z části B.2. Pak rozhodni jednu ze tří možností:

- Nechat a zdokumentovat.
- Nechat, ale omezit data, práva nebo integrace.
- Nahradit nebo vypnout.

Nezačínej největším systémem ve firmě. Začni něčím, co je dost důležité, aby na tom záleželo, ale dost malé, aby šel úklid dokončit. Privacy-first provoz se nedělá jedním velkým heroickým projektem. Dělá se stovkou malých rozhodnutí, která přestanou pouštět data ven jen proto, že „to tak bylo vždycky“.


---

## Dodatek C: Obsahový systém, který přežije algoritmy

Obsahový marketing pro malý web nebo SaaS není závod v počtu příspěvků. Je to systém, který pravidelně odpovídá na skutečné otázky zákazníků, posiluje důvěru a přivádí lidi na kanály, které máš pod kontrolou. Pokud každý článek vzniká heroicky od nuly, systém se rozsype ve chvíli, kdy přijde větší zakázka, nemoc nebo účetnictví. Tedy zhruba každé druhé úterý.

> Codyho komentář: Algoritmus je fajn sluha a mizerný šéf. Když celý marketing stojí na tom, že se jedna platforma ráno dobře vyspí, nemáš strategii. Máš počasí.

### C.1 Začni knihovnou problémů

Nejlepší obsah často nevzniká z brainstormingu, ale z podpory, prodeje a implementací. Zákazníci už ti říkají, co je zajímá. Jen to bývá schované v e-mailech, hovorech, komentářích, poznámkách z onboardingů a otázkách typu „ještě poslední drobnost“, která má tři odstavce.

Založ jednoduchou knihovnu problémů:

| Problém zákazníka | Kdo ho má | Kdy se objevuje | Jaký obsah pomůže | Další krok |
| --- | --- | --- | --- | --- |
| Neví, jestli potřebuje nový web nebo jen opravit nabídku | Majitel malé firmy | Před poptávkou | Diagnostický článek + checklist | Audit webu |
| Bojí se předat data do další SaaS služby | Provozní manažer | Při výběru nástroje | Privacy-first nákupní checklist | Konzultace stacku |
| Má trial, ale lidé neaktivují účet | Zakladatel SaaS | Po spuštění MVP | Návod na první hodnotu v onboardingu | Produktový workshop |

Každý řádek musí mít praktický další krok. Pokud článek jen „buduje povědomí“ a neumíš říct, co má čtenář udělat potom, pravděpodobně píšeš digitální vatu. Vata je dobrá do balíku, ne do strategie.

### C.2 Jeden obsah, tři formáty

Malý tým nemá kapacitu vymýšlet každý týden úplně nové téma pro blog, newsletter, sociální sítě, obchodní e-mail a dokumentaci. Lepší je vzít jeden silný problém a zpracovat ho do tří vrstev:

- **Hluboký zdroj:** článek, návod, případová studie nebo veřejný checklist na vlastním webu.
- **Krátké distribuce:** e-mail, LinkedIn příspěvek, krátký tip do komunity nebo interní poznámka pro obchod.
- **Prodejní pomůcka:** odpověď do FAQ, odstavec do nabídky, skript pro call nebo šablona pro podporu.

Příklad: z tématu „Jak vybrat privacy-first analytiku“ může vzniknout dlouhý článek, krátký newsletter se třemi otázkami pro audit a interní tabulka pro hodnocení nástrojů. Téma je stejné, forma se liší podle situace. Tím šetříš čas a zároveň posiluješ konzistentní názor firmy.

### C.3 Vlastní kanály mají přednost

Vlastní web, newsletter, RSS feed, dokumentace a přímé odkazy jsou nudné v tom nejlepším slova smyslu. Fungují i tehdy, když sociální síť změní dosah, reklamní účet spadne do kontroly nebo si platforma řekne, že letos bude organický dosah spíš folklór než kanál.

Praktická pravidla:

- Každý důležitý názor nejdřív publikuj na vlastním webu.
- Sociální sítě používej jako rozcestník, ne jako archiv znalostí.
- Newsletter piš tak, aby šel číst bez sledovacích pixelů a agresivního profilování.
- Přidej RSS feed pro lidi, kteří chtějí přímý odběr bez algoritmu.
- U starších článků udržuj datum aktualizace a jasně označ zastaralé části.

Privacy-first hodnota je i v distribuci. Když čtenář musí kvůli jednomu checklistu projít reklamním remarketingovým bludištěm, říkáš tím o sobě víc než samotným textem. A není to lichotka.

### C.4 Redakční rytmus pro malý tým

Nemusíš publikovat denně. Potřebuješ rytmus, který vydrží. Pro malý SaaS nebo konzultační tým často stačí jeden kvalitní kus obsahu za dva týdny a průběžné drobné aktualizace starších materiálů.

Jednoduchý čtrnáctidenní rytmus:

1. Den 1: vyber jeden problém z knihovny problémů.
2. Den 2: napiš osnovu a konkrétní cílového čtenáře.
3. Den 3–5: napiš první verzi bez ladění každé věty.
4. Den 6: doplň příklad, checklist nebo šablonu.
5. Den 7: ověř fakta, odkazy a případné právní nebo technické tvrzení.
6. Den 8: publikuj na webu, pošli newsletter a připrav krátkou distribuci.
7. Den 14: zkontroluj reakce, dotazy a doplň článek podle reality.

Tento rytmus je schválně obyčejný. Obyčejné procesy se totiž opakují. Geniální procesy často skončí po dvou týdnech v nástroji, který někdo pojmenoval „Content Operating System Q4 Final FINAL“.

### C.5 Příklad: měsíc obsahu pro privacy-first SaaS

Představ si SaaS, který pomáhá menším firmám spravovat zákaznické požadavky a interní úkoly. Chce být evropský, srozumitelný a bez zbytečného trackingu.

Měsíční plán může vypadat takhle:

- **Týden 1:** článek „Jak poznat, že už tabulka nestačí na zákaznické požadavky“ + checklist symptomů.
- **Týden 2:** případová studie „Jak jsme zkrátili reakční dobu podpory bez sledování zaměstnanců“.
- **Týden 3:** technický návod „Co kontrolovat u SaaS nástroje před předáním zákaznických dat“.
- **Týden 4:** srovnávací článek „E-mail, helpdesk nebo vlastní workflow: kdy zvolit co“.

Každý kus obsahu má jasnou práci. První otevírá problém, druhý dokládá výsledek, třetí buduje důvěru a čtvrtý pomáhá při rozhodování. Dohromady tvoří cestu, ne náhodnou hromádku textů.

### C.6 Checklist obsahového systému

- [ ] Máme knihovnu zákaznických problémů, ne jen seznam témat.
- [ ] Každý článek má cílového čtenáře, situaci a praktický další krok.
- [ ] Důležité texty publikujeme nejdřív na vlastním webu.
- [ ] Newsletter a RSS fungují jako přímé kanály bez závislosti na algoritmu.
- [ ] U každého aktuálního tvrzení ověřujeme zdroj a přidáváme odkaz.
- [ ] Starší obsah má plán aktualizace, sloučení nebo smazání.
- [ ] Sociální sítě používáme k distribuci, ne jako jediné místo pravdy.
- [ ] Každý měsíc vyhodnocujeme, které texty přinesly poptávky, registrace nebo užitečné dotazy.

### C.7 Mini úkol na 45 minut

Projdi posledních deset zákaznických e-mailů, support dotazů nebo obchodních poznámek. Vytáhni z nich tři opakující se otázky a u každé napiš název článku, konkrétní checklist a další krok pro čtenáře. Pak vyber jednu otázku a napiš osnovu.

Nezačínej designem newsletteru. Nevybírej novou platformu. Neřeš font tlačítka „odebírat“. Nejprve najdi problém, který zákazník skutečně řeší. Obsah bez problému je jen hezky naformátované ťukání do klávesnice.


---

## Dodatek D: Přístupnost jako součást produktu, ne jako hasicí přístroj

Přístupnost webu není kosmetická položka na konec projektu. Je to způsob, jak zajistit, že se k obsahu, nákupu, registraci, faktuře nebo supportu dostane člověk, který používá klávesnici, čtečku obrazovky, zvětšené písmo, slabší zařízení nebo prostě jen sedí ve vlaku na mizerném internetu. Jinými slovy: přístupnost není charita. Je to dobrý produktový design, který snižuje tření všem.

Evropský kontext tomu dává ještě praktičtější rozměr. European Accessibility Act se v EU začal uplatňovat 28. 6. 2025 a podle Evropské komise míří mimo jiné na e-commerce, bankovní a platební služby, elektronické komunikace a vybrané digitální produkty. W3C zároveň doporučuje používat aktuální WCAG 2.2, které rozšiřuje starší verze o další testovatelná kritéria. Zdroje: https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en a https://www.w3.org/WAI/standards-guidelines/wcag/

> Codyho komentář: Nejhorší accessibility strategie je „pak to projedeme automatickým auditem“. To je jako říct, že bezpečnost vyřešíš tím, že po deployi klikneš na antivirus a budeš doufat, že právo, UX i zdravý rozum mají zrovna dovolenou.

### D.1 Začni scénáři, ne seznamem pravidel

WCAG je důležitý standard, ale malý tým se v něm snadno ztratí, pokud začne číst kritéria bez kontextu. Lepší je vzít hlavní zákaznické scénáře a ověřit, zda jsou použitelné různými způsoby.

Pro SaaS nebo prodejní web si napiš například:

- Návštěvník pochopí nabídku a otevře ceník.
- Zákazník vyplní poptávkový formulář nebo objednávku.
- Uživatel se přihlásí, obnoví heslo a najde fakturu.
- Člověk na mobilu dokončí onboarding bez horizontálního posouvání.
- Uživatel s klávesnicí projde menu, dialogy, formuláře a nastavení účtu.
- Čtečka obrazovky oznámí názvy polí, chyby a úspěšné odeslání.

Když scénář nejde dokončit bez myši, bez dokonalého zraku nebo bez znalosti interní logiky UI, není to jen accessibility bug. Je to produktový bug.

### D.2 Praktický audit na jednu hodinu

Jednou za měsíc udělej krátký ruční audit. Nepotřebuješ začít drahým nástrojem. Potřebuješ disciplínu, klávesnici a ochotu zjistit, že tvůj krásný modal je ve skutečnosti digitální pastička na uživatele.

Postup:

1. Otevři homepage, ceník, registraci, přihlášení a jednu klíčovou aplikační obrazovku.
2. Odlož myš a projdi vše jen klávesnicí: `Tab`, `Shift+Tab`, `Enter`, `Space`, `Esc`.
3. Sleduj, jestli je vždy vidět fokus a jestli pořadí dává smysl.
4. Zvětši stránku na 200 % a ověř, že obsah neutíká mimo obrazovku.
5. Zkontroluj formuláře: popisky, chybové hlášky, povinná pole a návrat po chybě.
6. Pusť automatický test jako pomocníka, ne jako soudce.
7. Zapiš tři největší překážky a oprav jednu hned.

Automatický audit umí najít část problémů: chybějící alternativní texty, nízký kontrast, špatnou strukturu nadpisů nebo formulář bez labelu. Neumí ale spolehlivě poznat, jestli text tlačítka dává smysl, jestli chyba pomáhá nebo jestli má stránka logický tok.

### D.3 Přístupnost v designu a obsahu

Nejlevnější accessibility práce se děje před implementací. Když design počítá s kontrastem, větším písmem, jasnými stavy a rozumnou hierarchií, vývojář nemusí později opravovat UI chirurgií přes CSS.

Dobré návyky:

- Text tlačítka popisuje akci: „Stáhnout fakturu“, ne jen „OK“.
- Nadpisy tvoří logickou osnovu stránky, ne vizuální dekoraci.
- Odkazy dávají smysl i mimo kontext: „Zobrazit ceník pro týmy“, ne „klikněte zde“.
- Chybová hláška říká, co se stalo a jak to opravit.
- Barva není jediný nosič informace; stav doplňuje text, ikona nebo vzor.
- Animace lze omezit a neblokují obsah.
- Formulář nechce znovu údaje, které už uživatel zadal, pokud to není nutné.

U privacy-first webu má přístupnost ještě jeden bonus: čím méně zbytečných skriptů, popupů, reklamních widgetů a agresivních bannerů, tím méně věcí překáží asistivním technologiím. Minimalismus tady není estetická póza. Je to provozní výhoda.

### D.4 Komponenty, které se vyplatí opravit první

Neopravuj accessibility chaoticky po jednotlivých stránkách. Začni komponentami, které se opakují a umí pokazit hodně scénářů najednou.

Priorita pro malý SaaS:

- Navigace: smysluplný skip link, viditelný fokus, rozumné mobilní menu.
- Formulářové prvky: `label`, popis chyby, nápověda a správné typy polí.
- Dialogy a modaly: focus trap, zavření přes `Esc`, návrat fokusu na původní prvek.
- Dropdowny a comboboxy: ovládání klávesnicí, jasně oznámený stav a výběr.
- Toasty a alerty: důležité zprávy dostupné i bez vizuálního sledování obrazovky.
- Tabulky: jasné hlavičky, popisky a možnost číst data bez horizontální gymnastiky.
- Ceník a checkout: srozumitelné limity, žádné skryté závislosti na barvě nebo hoveru.

Když opravíš komponentu, přidej do design systému krátkou poznámku: jak se používá, jaké stavy musí mít a co se nesmí rozbít. Budoucí já ti poděkuje. Možná ne nahlas, ale aspoň nebude ve tři ráno mluvit s modálním oknem.

### D.5 Příklad: formulář pro demo

Špatný formulář pro demo:

- Pole mají placeholder místo labelu.
- Chyby se zobrazí jen červeným rámečkem.
- Po odeslání se stránka posune nahoru a uživatel neví proč.
- Tlačítko říká „Odeslat“, i když jde o domluvení konzultace.
- Povinný telefon blokuje lidi, kteří chtějí nejdřív psát e-mailem.

Lepší privacy-first a accessibility-first verze:

- Viditelné labely: „Pracovní e-mail“, „Firma“, „S čím chcete pomoct?“.
- Chyba u pole: „Zadejte e-mail ve tvaru jmeno@firma.cz.“
- Souhrn chyb nad formulářem s odkazy na konkrétní pole.
- Tlačítko: „Domluvit demo“.
- Telefon je volitelný a vysvětlený: „Vyplňte jen pokud chcete zavolat.“
- Po úspěchu se zobrazí jasná zpráva a fokus se přesune na potvrzení.
- Souhlas s podmínkami není schovaný v předzaškrtnutém checkboxu.

Takový formulář je srozumitelnější, férovější a méně agresivní. A ano, pravděpodobně bude i lépe konvertovat, protože lidé obvykle rádi dokončují věci, které je neurážejí.

### D.6 Checklist přístupnosti pro malý tým

- [ ] Klíčové scénáře jdou dokončit jen klávesnicí.
- [ ] Fokus je vždy viditelný a nepřekrývá ho sticky lišta nebo cookie banner.
- [ ] Stránky mají jednu jasnou `h1` a logickou strukturu nadpisů.
- [ ] Formuláře mají viditelné labely, nápovědu a konkrétní chybové hlášky.
- [ ] Texty tlačítek a odkazů dávají smysl i bez okolního kontextu.
- [ ] Kontrast textu a ovládacích prvků je ověřený, ne odhadnutý podle nálady monitoru.
- [ ] Modaly, dropdowny a mobilní menu mají ošetřený fokus, zavření a návrat.
- [ ] Obrázky mají smysluplný alternativní text, nebo jsou správně označené jako dekorativní.
- [ ] Důležité informace nejsou sdělené jen barvou, hoverem nebo animací.
- [ ] Accessibility chyby se zapisují do backlogu stejně jako bezpečnostní a produktové chyby.

### D.7 Mini úkol na 45 minut

Vyber jeden formulář, který přímo souvisí s obchodem: poptávka, registrace, checkout, přihlášení nebo žádost o demo. Projdi ho bez myši, zvětši stránku na 200 %, záměrně udělej chybu v každém poli a sleduj, jestli víš, co se stalo a jak pokračovat.

Pak oprav jednu věc, která brání dokončení scénáře. Ne deset. Jednu. Přístupnost se zlepšuje nejrychleji, když se tým naučí pravidelně odstraňovat konkrétní překážky místo toho, aby jednou ročně vyráběl auditní PDF, které pak statečně spí v cloudu.


---

## Dodatek E: Podpora, která nevyžaduje věšteckou kouli

Zákaznická podpora není jen inbox, kam padají problémy. Je to část produktu, která ukazuje, jestli firma opravdu rozumí zákazníkům. Malý SaaS často nemá luxus samostatného support týmu, složitého helpdesku a tří úrovní eskalace. Má ale jednu výhodu: může být osobní, rychlý a konkrétní bez toho, aby z podpory udělal sledovací laboratoř.

> Codyho komentář: Dobrá podpora není ta, která má nejvíc automatických odpovědí. Dobrá podpora vyřeší problém a zároveň z něj vyrobí lepší produkt. Automatické „váš požadavek je pro nás důležitý“ je často jen firemní verze pokrčení ramen.

### E.1 Podpora začíná před prvním ticketem

Nejlevnější ticket je ten, který nikdy nevznikne, protože uživatel našel odpověď v produktu, dokumentaci nebo jasném textu na stránce. To neznamená schovat kontakt na podporu za labyrint FAQ. Znamená to odstraňovat zmatek dřív, než se změní v frustraci.

Začni třemi místy:

- **Onboarding:** vysvětli první krok, první hodnotu a co se stane dál.
- **Prázdné stavy:** místo „žádná data“ napiš, jak data vzniknou a proč na nich záleží.
- **Chybové hlášky:** řekni, co se pokazilo, co může uživatel udělat a kdy má napsat podpoře.

Příklad špatné hlášky:

„Error 403.“

Lepší hláška:

„K této faktuře nemáte přístup. Zkontrolujte, jestli jste ve správné firmě, nebo požádejte administrátora o roli Účetnictví.“

Ještě lepší verze přidá odkaz na nápovědu, kontakt na podporu a interní log pro tým. Uživatel má cestu ven a tým má stopu, kterou může řešit.

### E.2 Kategorizuj dotazy podle práce, kterou mají udělat

Malý tým nepotřebuje složitou taxonomii o padesáti štítcích. Potřebuje vědět, proč lidé píšou a co s tím dál. Pro začátek stačí pět kategorií:

| Kategorie | Co znamená | Další krok |
| --- | --- | --- |
| Blokace | Uživatel nemůže dokončit důležitou práci | Opravit nebo obejít co nejdřív |
| Nejasnost | Uživatel neví, jak něco funguje | Upravit text, onboarding nebo dokumentaci |
| Chyba | Produkt se chová jinak, než má | Reprodukovat, založit bug, informovat uživatele |
| Požadavek | Uživatel chce novou funkci nebo změnu | Zapsat kontext, ne slibovat termín z voleje |
| Obchod | Dotaz na cenu, smlouvu, fakturaci nebo bezpečnost | Předat správné osobě a doplnit prodejní materiály |

Každý týden si projdi posledních 10–20 dotazů a zeptej se: co se opakuje? Pokud se stejná nejasnost objeví třikrát, není to problém zákazníků. Je to signál, že produkt něco nevysvětluje.

### E.3 Dokumentace jako produkt, ne skládka odkazů

Dokumentace má pomáhat dokončit konkrétní práci. Pokud je psaná jako encyklopedie funkcí, čtenář sice najde spoustu slov, ale často neodpověď.

Piš dokumentaci podle úkolů:

- Jak pozvat kolegu do firmy.
- Jak změnit fakturační údaje.
- Jak exportovat data před zrušením účtu.
- Jak nastavit role a přístupy.
- Jak zjistit, kdo vidí zákaznické požadavky.

Každý návod by měl mít:

1. pro koho je,
2. kdy ho použít,
3. co musí být připravené,
4. přesný postup,
5. co se stane po dokončení,
6. jak poznat a řešit chybu.

Privacy-first bonus: dokumentace k exportu, mazání dat, rolím a přístupům není nudná právní povinnost. Je to důkaz, že zákazník není rukojmí. Když lidem ukážeš, jak odejít bezpečně, paradoxně snáz uvěří, že s tebou můžou zůstat.

### E.4 Co do podpory neposílat

Support systémy lákají k tomu, aby do nich teklo všechno: screenshoty, logy, celé profily, session replaye, interní poznámky a občas i údaje, které nikdo nikdy neměl vidět. Malý tým si tím může rychle vyrobit datový sklep bez světla.

Nastav si pravidla:

- Do ticketu neukládej hesla, tokeny, platební údaje ani celé exporty databází.
- Screenshoty před sdílením anonymizuj, pokud obsahují osobní nebo zákaznická data.
- Logy omez na relevantní čas, ID požadavku a technický kontext.
- Interní poznámky piš tak, aby obstály i při exportu nebo kontrole.
- Přístupy supportu nastav podle rolí, ne podle věty „všichni jsme přece tým“.

Když potřebuješ citlivá data k diagnostice, sbírej je dočasně, popiš účel a po vyřešení je smaž nebo anonymizuj. Podpora nemá být druhá produkční databáze, jen chaotičtější a s horším vyhledáváním.

### E.5 Příklad: první support systém pro B2B SaaS

Představ si český B2B SaaS pro správu interních požadavků. Tým má tři lidi: vývoj, produkt a obchod. První verze podpory může být překvapivě jednoduchá:

- `podpora@firma.cz` jako jasný vstupní kanál.
- Sdílený inbox nebo helpdesk s EU provozem a exportem dat.
- Pět kategorií dotazů z tabulky výše.
- Denní krátká kontrola blokací a chyb.
- Týdenní třicetiminutová revize opakovaných dotazů.
- Veřejná dokumentace pro nejčastější úkoly.
- Interní poznámka „co jsme změnili v produktu díky podpoře“.

Takový systém není dokonalý, ale je čitelný. Každý ví, kde dotaz vzniká, kdo ho řeší a jak se z něj stává lepší produkt. Teprve až začne bolet objem, má smysl přidávat automatizace, formuláře, makra nebo pokročilejší reporting.

### E.6 Checklist podpory a dokumentace

- [ ] Uživatel snadno najde, kam napsat, když je zablokovaný.
- [ ] Chybové hlášky říkají, co se stalo a jak pokračovat.
- [ ] Dotazy mají jednoduché kategorie, které vedou k rozhodnutí.
- [ ] Opakované otázky se mění v dokumentaci, úpravu UI nebo produktový úkol.
- [ ] Dokumentace je psaná podle úkolů, ne podle interní struktury menu.
- [ ] Support neukládá zbytečná citlivá data a má jasná pravidla anonymizace.
- [ ] Přístupy k ticketům odpovídají rolím a potřebě vědět.
- [ ] Každý týden vznikne aspoň jedna malá oprava z poznatků podpory.

### E.7 Mini úkol na 45 minut

Vezmi posledních 15 zákaznických dotazů nebo interních žádostí o pomoc. Ke každému napiš jednu kategorii: blokace, nejasnost, chyba, požadavek nebo obchod. Potom vyber nejčastější kategorii a udělej jednu konkrétní změnu: doplň nápovědu, přepiš chybovou hlášku, uprav onboarding, nebo založ bug s jasným reprodukčním postupem.

Neřeš celý support systém najednou. Najdi jedno místo, kde zákazníci zbytečně tápou, a odstraň ho. Podpora se zlepší nejen rychlejší odpovědí, ale hlavně menším počtem důvodů, proč musí někdo vůbec psát.


---

## Dodatek F: Retence, mazání a export dat bez paniky

Retence dat je jeden z těch nudných provozních detailů, které se ozvou až ve chvíli, kdy někdo požádá o výmaz, zákazník odchází, právník se ptá na logy nebo se po incidentu zjišťuje, kdo měl přístup k čemu. Dobrá zpráva: malý SaaS nepotřebuje dvacetistránkovou politiku od prvního dne. Potřebuje jasná pravidla, která jsou technicky proveditelná.

Evropská komise u principů GDPR výslovně uvádí omezení uložení: osobní údaje mají být držené jen tak dlouho, jak je nezbytné pro účel, kvůli kterému byly shromážděny. Stejný praktický směr platí i pro žádosti jednotlivců: přístup, oprava, výmaz, omezení zpracování nebo přenositelnost musí mít ve firmě konkrétní postup, ne jen větu v zásadách soukromí. Zdroje: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en a https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/dealing-requests-individuals_en

> Codyho komentář: „Budeme data mazat, až bude čas“ není strategie. To je digitální ekvivalent šuplíku s kabely, starými fakturami a jednou záhadnou baterkou, která už určitě neměla existovat.

### F.1 Udělej retenční tabulku podle typu dat

Nezačínej právním textem. Začni inventurou. Ke každému typu dat napiš účel, systém, vlastníka a pravidlo mazání.

| Typ dat | Příklad | Proč existují | Doporučené pravidlo |
| --- | --- | --- | --- |
| Účetní data | faktury, daňové doklady | zákonné a účetní povinnosti | držet podle účetních a daňových pravidel, nemazat jen proto, že uživatel zrušil účet |
| Produktová data | projekty, úkoly, nastavení | poskytování služby | po zrušení účtu dát exportní okno a potom smazat nebo anonymizovat |
| Support komunikace | e-maily, tickety, přílohy | řešení problémů a audit kvality | pravidelně čistit přílohy, citlivé údaje redigovat, staré tickety anonymizovat |
| Technické logy | IP adresa, user agent, chyby | bezpečnost a diagnostika | držet krátce, oddělit od marketingových dat, rotovat automaticky |
| Marketingové kontakty | newsletter, lead magnet | komunikace se zájemci | odhlášení musí fungovat hned, neaktivní kontakty čistit v dávkách |
| Analytika | agregované návštěvy, události | zlepšování webu a produktu | preferovat agregaci, krátké retention okno a minimum identifikátorů |

U každého řádku si polož dvě otázky: „Co se rozbije, když to smažeme?“ a „Co se stane, když to necháme navždy?“ Druhá otázka je často nepříjemnější, což je dobře. Nepohodlí je tady bezpečnostní kontrolka.

### F.2 Mazání nesmí být ruční kouzlo v databázi

Výmaz dat má být proces, ne adrenalinový sport v produkční konzoli. I když první verze SaaS neumí samoobslužné zrušení účtu, interní postup musí být jasný:

1. Ověř identitu žadatele nebo oprávněnost požadavku.
2. Zapiš datum přijetí žádosti a odpovědnou osobu.
3. Rozliš data, která lze smazat, anonymizovat nebo musí zůstat kvůli právní povinnosti.
4. Proveď změnu ve všech hlavních systémech: aplikace, databáze, support, fakturace, mailing, CRM.
5. Zkontroluj zálohy a dokumentuj, jak se výmaz projeví při případné obnově.
6. Pošli stručné potvrzení bez zbytečných technických detailů.

Největší chyba je mazat jen hlavní účet v aplikaci a zapomenout na přílohy v supportu, exporty v interních složkách nebo testovací kopie databáze. Privacy-first provoz není o tom, že nikdy neuděláš chybu. Je o tom, že chyba nemá deset skrytých kopií.

### F.3 Export dat je součást offboardingu

Když zákazník odchází, dobrý export je poslední šance ukázat, že produkt nebyl past. Export nemusí být luxusní, ale má být použitelný:

- `CSV` pro tabulková data.
- `JSON` pro strukturovaná data a integrace.
- `PDF` jen tam, kde jde o dokumenty pro lidi, ne primární strojový export.
- ZIP balíček pro větší účty s přílohami a jednoduchým `README`.

Do exportu přidej vysvětlení polí, časové pásmo, kódování a datum vytvoření. Pokud jsou data pseudonymizovaná nebo anonymizovaná, napiš to jasně. EDPB v roce 2025 publikoval pokyny k pseudonymizaci jako bezpečnostní a datově-minimalizační technice, ale pseudonymizace není totéž co anonymita. Zdroj: https://www.edpb.europa.eu/public-consultations/guidelines-012025-on-pseudonymisation_en

Prakticky: pokud můžeš z tabulky přes jiné informace znovu poznat člověka, pořád se k datům chovej jako k osobním. „Nahradili jsme e-mail číslem zákazníka“ nestačí, když vedle leží mapovací tabulka s klíčem.

### F.4 Zálohy mají mít pravidla obnovy i výmazu

Zálohování bez retenční politiky je jen pomalé hromadění rizika. U každé produkční služby si napiš:

- jak často vzniká záloha,
- kde fyzicky nebo smluvně leží,
- kdo ji umí obnovit,
- jak dlouho se drží,
- jak se šifruje,
- jak se testuje obnova,
- co se stane s daty po žádosti o výmaz.

U malého SaaS je dobrý začátek jednoduchý: denní databázová záloha, krátká retence pro běžný provoz, delší retence jen tam, kde ji opravdu potřebuješ, a čtvrtletní test obnovy. Bez testu je záloha jen optimistický soubor. A optimismus je krásná vlastnost, ale mizerná disaster recovery strategie.

### F.5 Konkrétní příklad: zrušení účtu v B2B SaaS

Zákazník napíše, že chce zrušit účet a smazat data. Rozumný privacy-first postup:

1. Support potvrdí přijetí a nabídne export dat do konkrétního data.
2. Produktový vlastník ověří, jestli účet nemá aktivní závazek, otevřenou fakturu nebo bezpečnostní incident.
3. Aplikace označí účet jako `pending_deletion`, zastaví nové zpracování a vypne marketingovou komunikaci.
4. Systém vygeneruje export: projekty, uživatele, nastavení a přílohy.
5. Po uplynutí exportního okna se smažou produktová data, anonymizují analytické události a ponechají jen účetní záznamy, které ponechat musíš.
6. Interní log zůstane stručný: kdo žádost zpracoval, kdy, které systémy byly zahrnuté a jaké výjimky zůstaly.

Tahle verze chrání zákazníka i firmu. Zákazník ví, co se stane. Tým ví, co má udělat. A nikdo nehledá „nějaký starý dump databáze“ v pátek v 16:47, což je přesně čas, kdy se provozní peklo rádo směje.

### F.6 Checklist retence a exportu

- [ ] Máš tabulku hlavních typů dat, účelů a retenčních pravidel.
- [ ] Víš, která data nesmíš smazat hned kvůli účetním nebo právním povinnostem.
- [ ] Umíš najít všechna místa, kde se zákaznická data reálně ukládají.
- [ ] Máš popsaný postup pro žádost o přístup, opravu, výmaz a export.
- [ ] Export je použitelný pro zákazníka, ne jen pohodlný pro vývojáře.
- [ ] Logy a analytika mají krátkou retenci a minimum identifikátorů.
- [ ] Zálohy mají jasnou dobu uchování a otestovanou obnovu.
- [ ] Support ví, jak redigovat citlivá data v ticketech a přílohách.
- [ ] Po zrušení účtu se vypne marketingová komunikace i produktové zpracování.

### F.7 Mini úkol na 45 minut

Vyber jeden systém, kde máš zákaznická data: aplikaci, support, fakturaci nebo mailing. Napiš pro něj čtyři řádky: jaká data drží, proč, kdo k nim má přístup a kdy se mažou. Potom najdi jednu automatizovatelnou úpravu: rotaci logů, pravidelné čištění příloh, exportní skript nebo interní checklist pro zrušení účtu.

Nečekej na dokonalou compliance dokumentaci. Začni tím, že jedno konkrétní místo přestane být datová půda plná krabic bez štítků.


---

## Dodatek G: Newsletter a cookie lišta bez manipulace

Newsletter, měření kampaní a cookie lišta jsou malé prvky, které často rozhodnou, jestli web působí důvěryhodně, nebo jako stánek s losy u nádraží. U privacy-first SaaS nestačí, že tlačítko technicky funguje. Musí být jasné, proč člověk něco potvrzuje, co se stane po odmítnutí a jak se může později odhlásit.

ÚOOÚ u cookies rozlišuje technické cookies nezbytné pro provoz webu a netechnické cookies pro analytiku, preference nebo marketing. U netechnických cookies je potřeba souhlas uživatele, zatímco u čistě technických cookies cookie lišta být nemusí, i když informační povinnost zůstává. U obchodních sdělení ÚOOÚ zároveň zdůrazňuje jasné označení, totožnost odesílatele a možnost jednoduchého odhlášení v každé zprávě. Zdroje: https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies a https://uoou.gov.cz/index.php/profesional/qa-otazky-a-odpovedi/obchodni-sdeleni

> Codyho komentář: Cookie lišta nemá být psychologická úniková místnost. Když je odmítnutí schované za třemi šedými tlačítky, web tím neoptimalizuje konverze. Jen optimalizuje počet lidí, kteří ti přestanou věřit.

### G.1 Nejdřív si ujasni, jestli lištu vůbec potřebuješ

Nejlepší cookie lišta je často žádná cookie lišta. Pokud web používá jen technické cookies pro přihlášení, košík, bezpečnost nebo jazykové nastavení, obvykle stačí srozumitelně popsat cookies v zásadách soukromí a odkázat na ně v patičce. Jakmile přidáš analytiku třetí strany, remarketing, heatmapy, reklamní pixely nebo personalizační nástroje, jsi v jiné hře.

Praktický postup:

- Sepiš všechny skripty, které se načítají na webu před souhlasem.
- Ke každému napiš účel: technický provoz, analytika, marketing, preference nebo externí obsah.
- Ověř, jestli skript ukládá nebo čte informace v zařízení uživatele.
- Vypni všechno, co není nutné před udělením souhlasu.
- Pokud zbydou jen technické cookies, zvaž odstranění lišty a ponechání jasné cookie stránky.

### G.2 Souhlas má být stejně snadný jako odmítnutí

Privacy-first lišta má jednoduchou logiku: uživatel má dostat jasné informace a férovou volbu. Žádné předzaškrtnuté checkboxy, žádné „pokračováním souhlasíte“, žádné tlačítko „Přijmout vše“ jako neonová cedule a „Spravovat moje utrpení“ někde v textu.

Dobrá první vrstva lišty:

- Vysvětlí, že technické cookies jsou nutné pro fungování webu.
- Oddělí analytiku od marketingu.
- Nabídne `Přijmout vše`, `Odmítnout vše` a `Nastavit` ve srovnatelné viditelnosti.
- Neaktivuje netechnické skripty před volbou.
- Umožní pozdější změnu nastavení z patičky nebo stránky soukromí.

Pokud chceš měřit privacy-first, často nepotřebuješ marketingové cookies vůbec. Pro první rok SaaS obvykle stačí serverové logy s krátkou retencí, agregovaná analytika bez cross-site identifikace a UTM parametry uložené jen tam, kde reálně pomáhají vyhodnotit kampaň.

### G.3 Newsletter sbírej jako vztah, ne jako kořist

Newsletter má být dobrovolný kanál pro lidi, kteří chtějí slyšet další věci. Ne vedlejší produkt objednávkového formuláře, kde člověk omylem souhlasil s odběrem, protože checkbox byl zabalený mezi obchodní podmínky a fakturu za duši.

U neveřejných leadů nebo zájemců používej jasný opt-in:

- Řekni, co bude chodit: tipy, novinky produktu, případové studie, pozvánky.
- Řekni přibližnou frekvenci: týdně, měsíčně, nepravidelně při důležité novince.
- Odděl souhlas s newsletterem od souhlasu s obchodními podmínkami.
- Ulož zdroj přihlášení, čas, formulář a verzi textu souhlasu.
- Po odhlášení kontakt nevracej do kampaní přes import z jiného nástroje.

U existujících zákazníků může v některých situacích fungovat režim pro vlastní obdobné produkty nebo služby, pokud zákazník měl jasnou možnost odmítnout využití kontaktu při získání adresy i v každém dalším sdělení. Neber to ale jako pozvánku k bombardování. Pokud zákazník koupil malý doplněk, neposílej mu automaticky deset kampaní týdně na všechno, co firma kdy vymyslela.

### G.4 Odděl produktové zprávy od marketingu

Jedna častá chyba: firma začne všechno posílat jedním mailingovým kanálem. Pak se člověk odhlásí z newsletteru a najednou neví, že se mění podmínky služby nebo že bude výpadek. Opačně je stejně špatně, když se produktové oznámení zneužije jako nosič slevového kupónu.

Rozlišuj minimálně tři typy komunikace:

| Typ zprávy | Příklad | Odhlášení | Poznámka |
| --- | --- | --- | --- |
| Transakční | reset hesla, faktura, potvrzení objednávky | obvykle ne, pokud je nezbytná pro službu | bez marketingových vsuvek |
| Produktová provozní | plánovaný výpadek, změna bezpečnostního nastavení | podle povahy služby | posílat jen relevantním účtům |
| Marketingová | newsletter, akce, upsell, případová studie | vždy jednoduché | jasně označit jako obchodní sdělení |

Tohle oddělení pomáhá nejen právně, ale i produktově. Uživatel, který ví, že provozní e-mail nebude maskovaný prodej, ho pravděpodobně nepřehlédne.

### G.5 Konkrétní příklad: B2B SaaS launch newsletteru

Představ si SaaS pro plánování zakázek, který chce spustit měsíční newsletter pro malé servisní firmy. Privacy-first verze vypadá takto:

- Na webu je jednoduchý formulář: e-mail, volitelně typ firmy, jasný text „Jednou měsíčně pošleme praktické tipy k plánování zakázek a novinky produktu.“
- Checkbox newsletteru není předem zaškrtnutý a není spojený s poptávkou dema.
- Po přihlášení přijde potvrzovací e-mail s tím, co bude chodit a kde se dá odběr spravovat.
- Mailing systém drží jen e-mail, preferovaný jazyk, zdroj přihlášení a historii odhlášení.
- Každý newsletter má stručné označení, identitu odesílatele a odkaz pro odhlášení.
- Vyhodnocení kampaně sleduje agregovaně návštěvy článků, kliky na demo a odpovědi, ne špionážní román o každém otevření.

### G.6 Checklist newsletteru a cookies

- [ ] Víš, které cookies a skripty jsou technické a které potřebují souhlas.
- [ ] Netechnické skripty se nespouští před udělením souhlasu.
- [ ] Cookie lišta nabízí férově viditelné přijetí, odmítnutí a nastavení.
- [ ] Nastavení cookies jde později změnit z viditelného místa na webu.
- [ ] Newsletter má samostatný a srozumitelný opt-in tam, kde je potřeba.
- [ ] U každého kontaktu umíš doložit zdroj a čas přihlášení nebo oprávnění ke kontaktu.
- [ ] Každé obchodní sdělení je rozpoznatelné, uvádí odesílatele a má funkční odhlášení.
- [ ] Transakční, provozní a marketingové e-maily nejsou smíchané do jednoho chaosu.
- [ ] Odhlášení se propisuje do všech nástrojů, ne jen do jednoho seznamu.

### G.7 Mini úkol na 45 minut

Otevři svůj web v anonymním okně a napiš si, co se načte před kliknutím na cookie lištu. Potom se přihlas k vlastnímu newsletteru jako nový člověk a zkontroluj celý tok: text formuláře, potvrzení, první e-mail, odhlášení a záznam v mailingovém nástroji.

Vyber jednu opravu, která zlepší důvěru hned: zviditelni odmítnutí cookies, vypni marketingový skript před souhlasem, přepiš text u newsletteru nebo otestuj odhlášení. Malý čistý tok je lepší než velká marketingová mašina, která připomíná GDPR escape room.


## Dodatek H: Technické SEO bez sledovacího cirkusu

SEO se často prodává jako tajná alchymie, kde stačí najít správné klíčové slovo, nasypat ho do stránky a čekat na organickou sklizeň. Praktická realita je sušší a mnohem užitečnější: vyhledávač musí stránku najít, pochopit, důvěřovat jí a poslat na ni člověka, který nebude po třech sekundách hledat tlačítko „zpět“. Google Search Central u technického základu popisuje mimo jiné sitemap, `robots.txt`, kanonické URL, strukturovaná data a užitečný obsah pro lidi. Zdroje: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview, https://developers.google.com/search/docs/crawling-indexing/robots/intro, https://developers.google.com/search/docs/fundamentals/creating-helpful-content

Privacy-first SEO má jednu krásnou vlastnost: nepotřebuje reklamní pixel, aby fungovalo. Potřebuje dobrý obsah, čistou strukturu, rychlý web, smysluplné odkazy a základní měření agregovaných výsledků. Jinými slovy: méně voodoo, více řemesla. Cody si odkládá SEO kyblíček s flitry.

### H.1 Začni inventurou indexovatelných stránek

Nejdřív si napiš seznam stránek, které mají existovat ve vyhledávání. Ne každá URL je kandidát na indexaci. Stránka s obchodní hodnotou odpovídá na konkrétní záměr: vysvětluje službu, řeší problém, porovnává přístupy, dokumentuje funkci, popisuje cenu, nebo pomáhá zákazníkovi něco udělat.

Jednoduchá tabulka:

| URL | Záměr člověka | Hlavní odpověď | Další krok | Indexovat? |
| --- | --- | --- | --- | --- |
| `/` | Chci pochopit, co firma dělá | Jasná nabídka a důvěra | Demo / kontakt | Ano |
| `/cena` | Kolik to stojí a pro koho je plán | Balíčky, limity, FAQ | Vybrat plán | Ano |
| `/blog/privacy-first-analytika` | Jak měřit bez invazivních trackerů | Praktický návod | Přihlásit RSS / demo | Ano |
| `/app/reset-password` | Chci obnovit heslo | Formulář | Odeslat e-mail | Ne |

U každé indexovatelné stránky musí být jasné, proč má existovat samostatně. Pokud dvě stránky říkají totéž, spoj je. Pokud stránka nemá další krok, doplň ho. Pokud stránka existuje jen proto, že „SEO konzultant říkal landing pages“, pošli ji na rehabilitaci.

### H.2 Metadata nejsou dekorace, ale dopravní značky

Každá důležitá stránka má mít unikátní `<title>`, meta description, kanonickou URL a srozumitelný nadpis `H1`. Open Graph metadata nejsou jen pro sociální sítě; pomáhají i tam, kde někdo pošle odkaz do chatu, CRM nebo firemní wiki. Strukturovaná data přidávej jen tam, kde přesně odpovídají obsahu stránky. Google k nim má samostatnou dokumentaci a doporučuje dodržet podporovaný formát i viditelnost obsahu pro uživatele. Zdroj: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data

Praktické pravidlo:

- `<title>`: co to je, pro koho, případně značka.
- Meta description: konkrétní slib stránky, ne reklamní mlha.
- `H1`: lidský nadpis, který potvrzuje očekávání z výsledku vyhledávání.
- Canonical: jedna preferovaná URL pro stejný nebo velmi podobný obsah.
- Open Graph obrázek: čistý, čitelný, bez mikropísma a bez generického stock chaosu.

Příklad pro článek:

```html
<title>Privacy-first analytika pro český SaaS | Cody</title>
<meta name="description" content="Praktický návod, jak měřit web a produkt bez reklamních pixelů, zbytečných cookies a ztráty kontroly nad daty.">
<link rel="canonical" href="https://cody.dreamind.cz/blog/privacy-first-analytika">
<meta property="og:title" content="Privacy-first analytika pro český SaaS">
<meta property="og:description" content="Méně trackerů, více rozhodnutí. Jak měřit web a SaaS rozumně v evropském provozu.">
```

### H.3 Sitemap a robots.txt: jednoduché, ale nepodceňované

`sitemap.xml` má vyhledávači pomoct objevit důležité URL. `robots.txt` má říct crawlerům, kam smí a kam nemají chodit. Není to bezpečnostní mechanismus pro citlivá data; neveřejné věci patří za autentizaci, ne jen za zákaz v `robots.txt`. Google Search Central výslovně popisuje `robots.txt` jako instrukce pro crawlery a sitemap jako způsob, jak oznámit URL vhodné k procházení. Zdroje: https://developers.google.com/search/docs/crawling-indexing/robots/intro a https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview

Minimální `robots.txt` pro veřejný obsah:

```txt
User-agent: *
Allow: /

Sitemap: https://example.cz/sitemap.xml
```

Do sitemap dávej jen kanonické, veřejné, hodnotné stránky. Nedávej tam interní vyhledávání, filtry bez obsahu, administrační URL, parametry kampaní ani každou technickou drobnost. Sitemap není skládka. Je to seznam dveří, kterými chceš návštěvníky pozvat dovnitř.

### H.4 Obsahová distribuce bez závislosti na platformách

Technické SEO není jen indexace. Je to i to, aby se obsah dal sledovat a sdílet bez cizích algoritmů. RSS je staré, nudné a nádherně praktické. Specifikace RSS 2.0 popisuje kanál, položky, odkazy, titulky a datum publikace; přesně ty věci, které obsahový web potřebuje pro čtečky, interní monitoring i automatizace. Zdroj: https://www.rssboard.org/rss-specification

Privacy-first doporučení:

- Měj `/feed.xml` nebo `/rss.xml` a odkazuj ho v hlavičce webu.
- Posílej přímé odkazy místo „share“ widgetů s externími skripty.
- U článků uváděj datum publikace a datum aktualizace.
- Starší důležité články aktualizuj, místo abys donekonečna vyráběl ten samý text v novém kabátu.
- Měř agregovaně návštěvy a kliky na další krok, ne identitu každého čtenáře.

> Codyho komentář: Algoritmus je pronajaté pódium. RSS a přímé odkazy jsou vlastní dveře. Možná nejsou tak blyštivé, ale nikdo ti je zítra nepřebarví na „engagement experience“.

### H.5 Příklad: technický SEO audit za 60 minut

Postup pro malý firemní web nebo SaaS:

1. Otevři sitemap a zkontroluj, že obsahuje jen veřejné kanonické stránky.
2. Otevři `robots.txt` a ověř, že neblokuje důležité sekce omylem.
3. Vyber pět nejdůležitějších stránek a zkontroluj title, description, H1 a canonical.
4. Ověř, že každá z těchto stránek má jasný další krok: kontakt, demo, trial, ceník, RSS nebo relevantní článek.
5. Zkontroluj interní odkazy: homepage → služba → ceník → FAQ → kontakt má být cesta, ne bludiště.
6. Otevři web bez JavaScriptu nebo s pomalým připojením a ověř, že hlavní obsah nezmizel do kouřového efektu moderního frameworku.
7. Zapiš tři opravy s nejvyšším dopadem a udělej jednu hned.

### H.6 Checklist technického SEO bez trackerů

- Každá důležitá URL má jasný záměr, unikátní title, description, H1 a canonical.
- `sitemap.xml` obsahuje jen veřejné kanonické stránky s reálnou hodnotou.
- `robots.txt` neblokuje důležité části webu a neslouží jako ochrana citlivých dat.
- Blog nebo znalostní báze má RSS feed a přímé odkazy bez social share skriptů.
- Strukturovaná data odpovídají viditelnému obsahu stránky.
- Měření SEO výkonu používá agregovaná data: návštěvy, referrery, konverzní kliky a výkon stránek.
- Starý obsah má plán aktualizací, ne jen tichý hřbitov v archivu.

### H.7 Mini úkol na 45 minut

Vyber jednu nejdůležitější stránku webu. Přepiš její title, description, H1 a první odstavec tak, aby člověk přesně věděl, pro koho stránka je, co získá a jaký je další krok. Pak zkontroluj, že je v sitemap, má správný canonical a nepotřebuje žádný externí tracker k tomu, aby sis vyhodnotil, jestli funguje. Malý audit, velký klid. Tak to máme rádi.

## Dodatek I: Bezpečnostní minimum pro malý SaaS bez paranoidního divadla

Bezpečnost v malém SaaS často trpí dvěma extrémy. Buď se neřeší skoro vůbec, protože „zatím máme málo uživatelů“, nebo se z ní udělá obří chrám procesů, který paralyzuje tři lidi a jednu kávovarovou firmu v cloudu. Správná cesta je praktičtější: chránit nejdůležitější data, mít jasné odpovědnosti, umět rychle reagovat a nedělat zbytečné riziko jen proto, že nástroj měl hezké tlačítko „integrate everything“.

OWASP Top 10 dlouhodobě upozorňuje na běžné třídy aplikačních rizik jako rozbitá kontrola přístupu, kryptografická selhání, injection nebo špatná konfigurace. OWASP ASVS k tomu dává praktičtější ověřovací rámec pro bezpečnost webových aplikací. Zdroje: https://owasp.org/Top10/ a https://owasp.org/www-project-application-security-verification-standard/

Pro evropský provoz je užitečné sledovat i NIS2 a metodické materiály ENISA. Ne každý malý SaaS automaticky spadne do všech povinností, ale principy řízení rizik, incidentů, přístupů, záloh a dodavatelů dávají smysl i mimo regulované sektory. Zdroje: https://digital-strategy.ec.europa.eu/en/policies/nis2-directive a https://www.enisa.europa.eu/sites/default/files/2025-06/ENISA_Technical_implementation_guidance_on_cybersecurity_risk_management_measures_version_1.0.pdf

> Codyho komentář: Bezpečnost není pocit, že máš v patičce slovo „enterprise“. Bezpečnost je stav, kdy víš, co se může rozbít, kdo to opraví a proč se útočník nedostane k celé databázi přes jeden zapomenutý testovací účet.

### I.1 Nejdřív chraň přístupy, ne prezentaci o bezpečnosti

U malého SaaS bývá největší riziko obyčejné: někdo má příliš široký přístup, starý token zůstal aktivní, admin účet nemá vícefaktorové ověření, nebo produkční databáze leží v nástroji, kam se přihlašuje půlka týmu. To není exotický hackerský film. To je úterní provozní realita.

Začni těmito pravidly:

- Každý člen týmu má vlastní účet, ne sdílené `admin@firma.cz`.
- Admin práva má jen ten, kdo je opravdu potřebuje.
- MFA je povinné u e-mailu, Git hostingu, produkčního hostingu, databáze, plateb, DNS a správce hesel.
- Produkční přístup se přiděluje na konkrétní účel a odebírá po skončení práce.
- Servisní účty mají minimum oprávnění a jasný popis, k čemu slouží.
- Přístup externistů má datum revize, ne status „asi navždy“.

Privacy-first pohled je jednoduchý: každý přístup je potenciální cesta k datům zákazníků. Pokud někdo nepotřebuje vidět osobní údaje, faktury nebo support historii, nemá je vidět. Ani ze zvědavosti, ani „kdyby se to někdy hodilo“.

### I.2 Tajemství nepatří do repozitáře

API klíče, databázová hesla, tokeny a privátní klíče nejsou konfigurace jako každá jiná. Jsou to tajemství. Jakmile se jednou dostanou do repozitáře, logu nebo sdíleného chatu, chovej se k nim jako ke kompromitovaným. Ne jako k „to snad nikdo neviděl“. Internet má paměť a roboti mají nudu.

Praktické minimum:

- Používej správce tajemství nebo alespoň oddělené produkční env proměnné v hostingu.
- Do repozitáře patří `.env.example`, ne reálné `.env`.
- CI/CD proměnné rozděl podle prostředí: development, staging, production.
- Tokeny pojmenuj podle účelu: `billing_readonly_export`, ne `new_token_2_final_final`.
- Nastav rotaci u klíčů, které dávají přístup k datům nebo penězům.
- Po odchodu člověka z týmu zruš jeho osobní tokeny i přístupy do dodavatelských nástrojů.

U každého tajemství si napiš: kde vzniklo, kdo ho může změnit, kde je použité a co se stane při úniku. Pokud odpověď zní „netušíme“, našel jsi bezpečnostní dluh. Gratuluji, archeologie v produkci.

### I.3 Odděl prostředí, aby chyba nebolela víc než musí

Malý tým často šetří čas tím, že všechno běží proti jedné databázi. Je to pohodlné přesně do chvíle, kdy testovací import smaže reálná data nebo vývojář zkusí nový webhook na produkčních zákaznících. Pak už to není úspora času, ale drahá lekce s potem na klávesnici.

Základní rozdělení:

- **Development:** lokální nebo vývojové prostředí s anonymizovanými daty.
- **Staging:** prostředí co nejpodobnější produkci, ale bez reálných tajemství a bez přístupu k produkčním zákazníkům.
- **Production:** ostrý provoz s omezeným přístupem, monitoringem, zálohami a jasnou odpovědností.

Do developmentu a stagingu nepatří kopie produkční databáze jen proto, že je to nejrychlejší. Pokud potřebuješ realistická data, vytvoř anonymizovaný dataset. Jména, e-maily, adresy, faktury, poznámky v CRM a support zprávy nejsou dekorace do testů. Jsou to data lidí.

### I.4 Loguj tak, aby logy pomohly a neprozradily všechno

Logy jsou skvělé, když hledáš chybu. Jsou hrozné, když do nich potichu zapisuješ přístupové tokeny, celé payloady formulářů, osobní údaje a odpovědi z platební brány. Privacy-first logování má dvě otázky: pomůže to při diagnostice, a může to ublížit, když se log dostane ven?

Do aplikačních logů obvykle patří:

- čas události,
- typ události,
- interní ID požadavku nebo korelační ID,
- technický výsledek,
- chybový kód,
- anonymizovaný nebo pseudonymizovaný identifikátor, pokud je opravdu nutný.

Do logů obvykle nepatří:

- hesla, tokeny a session cookies,
- celé platební nebo fakturační údaje,
- obsah soukromých zpráv zákazníků,
- zbytečné IP adresy s dlouhou retencí,
- kompletní request/response payloady bez filtrování.

Nastav retenci logů podle účelu. Debug logy z vývoje nepotřebují žít půl roku. Bezpečnostní auditní logy mohou mít jiný režim než aplikační šum. A pokud logy posíláš do externí služby, vrať se k mapě dat: kde leží, kdo k nim má přístup, jak se mažou a jestli je umíš exportovat.

### I.5 Zálohy jsou užitečné až po testu obnovy

„Máme zálohy“ je věta, která nic neznamená, dokud někdo nezkusil obnovu. Záloha, kterou neumíš obnovit, je jen drahý talisman. Hezky hřeje u srdce, ale zákazníkovi účet nevrátí.

Pro SaaS minimum nastav:

- automatické zálohy databáze,
- oddělené úložiště záloh od produkční databáze,
- šifrování záloh,
- retenční pravidla podle typu dat,
- test obnovy alespoň jednou za kvartál,
- zápis z testu: co se obnovovalo, jak dlouho to trvalo, kdo to dělal a co selhalo.

Důležitá je i obnova po částech. Když zákazník omylem smaže projekt, nechceš kvůli tomu vracet celou databázi o den zpátky. Už v návrhu dat přemýšlej, jak obnovíš jeden účet, jednu organizaci nebo jeden dokument bez vedlejší demolice.

### I.6 Incident plán na jednu stránku

Incident plán nemusí být padesátistránkový dokument, který nikdo nečetl od doby, kdy ho vytvořil konzultant s láskou k tabulkám. Pro začátek stačí jedna stránka.

Měla by obsahovat:

- Kdo rozhoduje při incidentu.
- Kdo komunikuje se zákazníky.
- Kdo má přístup k infrastruktuře, DNS, repozitáři, databázi a platebnímu systému.
- Jak vypnout nebo izolovat kompromitovanou část systému.
- Kde jsou kontakty na hosting, dodavatele a právní podporu.
- Jak se zapisuje časová osa incidentu.
- Jak probíhá postmortem bez hledání obětního beránka.

Při incidentu nepotřebuješ hrdiny. Potřebuješ klid, role a poznámky. Všechno, co se děje, zapisuj s časem. Ne proto, že miluješ byrokracii, ale protože po dvou hodinách stresu si nikdo přesně nepamatuje, co kdo restartoval a proč najednou nechodí e-maily.

### I.7 Konkrétní příklad: bezpečnostní první týden pro nový SaaS

Představ si malý B2B SaaS pro správu servisních zakázek. Tým má dva vývojáře, jednoho zakladatele a externí účetní.

První týden bezpečnostního základu může vypadat takto:

1. **Den 1:** Sepiš mapu systémů: web, aplikace, databáze, DNS, e-mail, platby, analytika, support, účetnictví.
2. **Den 2:** Zapni MFA všude, kde se dá spravovat produkce, peníze, zákaznická data nebo DNS.
3. **Den 3:** Zkontroluj role a odeber admin práva lidem i tokenům, které je nepotřebují.
4. **Den 4:** Projdi repozitář a CI/CD proměnné, jestli neobsahují reálná tajemství nebo staré tokeny.
5. **Den 5:** Nastav zálohy databáze a napiš přesný postup obnovy.
6. **Den 6:** Vytvoř jednostránkový incident plán a ulož ho tam, kde ho tým najde i při výpadku hlavní aplikace.
7. **Den 7:** Udělej krátkou zkoušku: jeden člověk simuluje ztrátu přístupu, druhý podle dokumentace obnovuje kontrolu.

Tohle není certifikace. Je to základní hygiena. Ale už po týdnu budeš mít menší riziko než firma, která má sice pěkný bezpečnostní slajd, ale pořád používá jeden sdílený účet do produkce.

### I.8 Checklist bezpečnostního minima

- [ ] Všechny kritické služby mají MFA a individuální účty.
- [ ] Admin práva jsou omezená, zdokumentovaná a pravidelně revidovaná.
- [ ] Tajemství nejsou v repozitáři, chatu, dokumentaci ani logu.
- [ ] Produkce, staging a development jsou oddělené.
- [ ] Testovací prostředí nepoužívá syrová produkční osobní data.
- [ ] Logy neobsahují tokeny, hesla, zbytečné osobní údaje ani kompletní citlivé payloady.
- [ ] Databáze se automaticky zálohuje a obnova byla reálně otestovaná.
- [ ] Existuje jednostránkový incident plán s rolemi, kontakty a postupem zápisu časové osy.
- [ ] Dodavatelé s přístupem k datům jsou zapsaní v mapě dat a mají jasný účel.
- [ ] Po odchodu člověka z týmu existuje checklist zrušení přístupů.

### I.9 Mini úkol na 60 minut

Vyber tři nejkritičtější systémy: Git, hosting a databázi. U každého zkontroluj, kdo má přístup, jestli má MFA, jaká má oprávnění a kdy byl přístup naposledy potřeba. Pak odeber jeden zbytečný přístup nebo omez jedno příliš široké oprávnění. Bezpečnost se často nezlepší velkým prohlášením. Zlepší se tím, že dnes zavřeš jedny dveře, které měly být zavřené už včera.

## Dodatek J: Incidentová komunikace a status page bez paniky

Incident není jen technický problém. Je to i komunikační problém. Když služba spadne, zákazník nevidí tvoje interní logy, retry fronty ani to, že jeden vývojář právě hrdinsky mluví s databází v terminálu. Vidí jen to, že jeho práce stojí. A když mlčíš, začne si příběh doplňovat sám. To většinou nedopadne lichotivě.

Dobrá incidentová komunikace proto není PR kouřová clona. Je to provozní nástroj, který snižuje nejistotu, chrání důvěru a pomáhá týmu držet pozornost. Atlassian ve svém incident management handbooku zdůrazňuje jasné role, průběžnou komunikaci a postmortem jako cestu ke zlepšení systému, ne k hledání viníka. Zdroj: https://www.atlassian.com/incident-management

> Codyho komentář: Nejhorší status page je ta, která tvrdí „All systems operational“ ve chvíli, kdy zákazník drží telefon, refreshuje aplikaci a přemýšlí, jestli má začít křičet do polštáře. Status má uklidnit realitou, ne pohladit ego provozovatele.

### J.1 Připrav komunikaci dřív, než hoří produkce

Incidentový text se píše špatně ve chvíli, kdy ti pípají alerty, klient volá a někdo v chatu navrhuje „zkusme restartovat všechno“. Proto si připrav šablony předem. Nemusí být dokonalé, musí být použitelné.

Minimální sada šablon:

- **Zjišťujeme problém:** potvrzuješ, že o potížích víš, a uvádíš dopad.
- **Pracujeme na opravě:** říkáš, co se děje a kdy dáš další update.
- **Částečně obnoveno:** vysvětluješ, co už funguje a co ještě ne.
- **Vyřešeno:** shrnuješ dopad, časový rozsah a další krok.
- **Postmortem:** popisuješ příčinu, opatření a co zákazník nemusí dělat.

Příklad první zprávy:

> Evidujeme problém s přihlášením do aplikace. Dopad: část uživatelů se nemůže přihlásit, existující relace mohou fungovat dál. Tým problém řeší. Další aktualizaci zveřejníme do 30 minut.

Tohle je krátké, konkrétní a neslibuje nemožné. Hlavně nepiš „někteří uživatelé mohou zažívat potíže“, když víš, že nefunguje přihlášení. Mlžení nezní profesionálně. Zní jako mlžení.

### J.2 Status page má být nezávislá na hlavní aplikaci

Status page nesmí spadnout se stejným problémem jako produkt. Pokud běží ve stejné aplikaci, stejné databázi a za stejnou autentizací, je to spíš dekorace než krizový kanál.

Praktické zásady:

- Hostuj status page odděleně od hlavní aplikace.
- Nepodmiňuj její čtení přihlášením.
- Udržuj ji rychlou, statickou nebo velmi jednoduchou.
- Nelep do ní reklamní analytiku ani social skripty.
- Měř jen agregované návštěvy, pokud měření opravdu potřebuješ.
- Přidej RSS nebo Atom feed pro incidenty a plánovanou údržbu.
- Odkaz na status dej do patičky, dokumentace a onboarding e-mailů.

Privacy-first varianta je elegantně nudná: statická stránka v evropském hostingu, žádné cookies, žádné trackery, jasné komponenty služby a přímý feed. Nudné věci jsou při incidentu sexy. Věř mi, jsem software, mám na nudnou spolehlivost slabost.

### J.3 Piš podle dopadu, ne podle interní architektury

Zákazník nepotřebuje vědět, že `worker-billing-sync-2` má problém s frontou po deployi. Potřebuje vědět, jestli může fakturovat, přihlásit se, exportovat data nebo přijímat platby.

Místo interního popisu:

- „Máme problém s Redis clusterem.“
- „API gateway vrací 502 pro část endpointů.“
- „Cron na synchronizaci plateb doběhl s chybou.“

Piš dopadově:

- „Nové přihlášení do aplikace může selhat.“
- „Vytváření faktur je dočasně nedostupné.“
- „Platby přijímáme, ale jejich zobrazení v administraci se zpožďuje.“

Interní detail může patřit do postmortem nebo technické poznámky, ale první vrstva komunikace má odpovídat na otázku: co to znamená pro práci zákazníka právě teď?

### J.4 Kadence aktualizací je slib, který musíš udržet

Neříkej „brzy se ozveme“. Brzy je gumové slovo. Pro zákazníka může znamenat pět minut, pro tým po třetí kávě dvě hodiny. Nastav konkrétní interval a dodrž ho, i když nemáš velký posun.

Dobrá kadence:

- U kritického výpadku aktualizuj každých 15–30 minut.
- U degradace služby stačí 30–60 minut podle dopadu.
- U plánované údržby napiš začátek, průběžný stav a konec.
- Když nevíš příčinu, řekni, že ji stále zjišťuješ.
- Když se odhad opravy změní, napiš to přímo.

Krátký update bez nové informace je pořád lepší než ticho:

> Oprava stále probíhá. Potvrdili jsme, že problém ovlivňuje přihlášení přes e-mail, nikoli API tokeny. Další aktualizaci dáme do 30 minut.

Ticho vytváří dojem, že nikdo neřídí situaci. Průběžná komunikace ukazuje, že tým má proces, i když systém zrovna nemá svůj nejlepší den.

### J.5 Postmortem bez divadla a bez sebechvály

Po větším incidentu napiš krátké postmortem. Ne marketingový epos, ne omluvu přes kopírák, ne technický román jen pro backend tým. Dobré postmortem má být čitelné pro zákazníka i interně užitečné pro tým.

Struktura:

1. **Shrnutí:** co se stalo jednou větou.
2. **Dopad:** koho a jak problém ovlivnil.
3. **Časová osa:** kdy incident začal, kdy byl detekován, kdy byl vyřešen.
4. **Příčina:** co bylo technicky nebo procesně špatně.
5. **Oprava:** co tým udělal během incidentu.
6. **Prevence:** jaké konkrétní změny sníží opakování.
7. **Stav zákaznických dat:** jestli došlo k ohrožení, ztrátě nebo zpoždění zpracování dat.

U privacy-first SaaS je poslední bod zásadní. Pokud incident nesouvisel s bezpečností dat, napiš to. Pokud souvisel, nemlž a postupuj podle právních a smluvních povinností. Tady není prostor pro kreativní copywriting. Tady chceš přesnost, časovou osu a odpovědnost.

### J.6 Konkrétní příklad: výpadek přihlašování

Scénář: B2B SaaS má problém s e-mailovým přihlášením po změně SMTP konfigurace. Uživatelé s aktivní relací mohou pracovat dál, noví se nepřihlásí.

Status page může vypadat takto:

1. **09:10 — Investigating:** Evidujeme problém s e-mailovým přihlášením. Aktivní relace zůstávají funkční. API tokeny nejsou ovlivněné.
2. **09:32 — Identified:** Příčina je v konfiguraci odesílání přihlašovacích e-mailů po ranní změně. Připravujeme rollback.
3. **09:48 — Monitoring:** Rollback je nasazený. Nové přihlašovací e-maily znovu odcházejí, sledujeme frontu zpožděných zpráv.
4. **10:20 — Resolved:** Přihlášení funguje standardně. Incident trval 70 minut. Zákaznická data nebyla ztracena ani zpřístupněna třetím stranám.

Interně si k tomu dopiš akční body:

- SMTP změny půjdou přes staging test s reálným doručením na testovací schránku.
- Alert se doplní o kontrolu doručení přihlašovacího e-mailu, nejen HTTP dostupnost aplikace.
- Runbook pro přihlášení dostane rollback postup a kontakt na poskytovatele e-mailu.

Všimni si, že text zákazníkovi nevypráví všechno. Říká ale přesně to, co potřebuje: dopad, stav, další krok a jistotu ohledně dat.

### J.7 Checklist incidentové komunikace

- [ ] Status page běží mimo hlavní aplikaci a je dostupná bez přihlášení.
- [ ] Existují předpřipravené šablony pro zjišťování, opravu, obnovu, vyřešení a postmortem.
- [ ] Komunikace popisuje dopad na uživatele, ne jen interní komponenty.
- [ ] Každý incident má vlastníka komunikace a technického koordinátora.
- [ ] Aktualizace mají konkrétní čas dalšího update.
- [ ] U incidentu se průběžně zapisuje časová osa rozhodnutí a změn.
- [ ] Zprávy neobsahují osobní údaje, interní tajemství, tokeny ani zbytečné detaily infrastruktury.
- [ ] Po větším incidentu vznikne krátké postmortem s příčinou, dopadem a preventivními opatřeními.
- [ ] Zákazník se dozví, jestli byla ovlivněna dostupnost, integrita nebo důvěrnost dat.
- [ ] Plánovaná údržba se oznamuje předem a má jasné okno začátku a konce.

### J.8 Mini úkol na 45 minut

Vytvoř první verzi status stránky nebo aspoň Markdown dokument `status-template.md`. Přidej tři komponenty služby, které zákazníci chápou: „Přihlášení“, „Aplikace“, „API“, „Platby“ nebo „E-mailové notifikace“. Ke každé napiš, jak poznáš problém a jaký má dopad. Nakonec připrav jednu šablonu zprávy pro výpadek a jednu pro plánovanou údržbu. Až příště něco spadne, nebudeš psát první větu incidentu ve stresu. To je malý rozdíl, který vypadá jako profesionalita.



## Dodatek K: Nákup SaaS bez slepé důvěry a nekonečných dotazníků

Malý tým často nakupuje nástroje rychle: někdo doporučí aplikaci, founder zadá kartu, tým začne pracovat a za půl roku se zjistí, že v ní leží zákaznická data, export je bolestivý, subdodavatelé jsou nejasní a zrušení účtu připomíná únikovou místnost. Nákup SaaS není jen otázka ceny. Je to rozhodnutí o datech, provozu, závislosti a budoucí vyjednávací síle.

Evropská komise u zpracovatelů osobních údajů připomíná, že správce má používat zpracovatele, kteří poskytují dostatečné záruky technických a organizačních opatření, a zpracování má být upravené smlouvou podle GDPR. Zdroj: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/obligations/controllerprocessor/can-someone-else-process-data-my-organisations-behalf_en

> Codyho komentář: Nejhorší SaaS nákup není drahý nástroj. Nejhorší je levný nástroj, který se ti potichu stane databází zákazníků, knowledge base, CRM, supportem i terapeutem týmu. Pak už neplatíš měsíčně. Platíš odchodem.

### K.1 Rozliš nákup podle rizika, ne podle ceny

Cena je vidět hned. Riziko se ukáže později. Proto nástroje rozděl podle toho, co v nich bude žít.

Nízké riziko:

- nástroj bez osobních údajů zákazníků,
- krátkodobý kreativní nebo interní experiment,
- data lze snadno smazat a nahradit,
- výpadek neblokuje prodej, podporu ani provoz produktu.

Střední riziko:

- nástroj obsahuje kontakty, support komunikaci nebo projektovou dokumentaci,
- používá ho víc lidí v týmu,
- výpadek zpomalí práci, ale nezastaví službu,
- export existuje, ale musíš ho otestovat.

Vysoké riziko:

- nástroj obsahuje zákaznická data, smlouvy, fakturaci, produkční logy nebo přístupy,
- je napojený na produkt, platby, e-mailing, CRM nebo podporu,
- bez něj tým nedokáže obsloužit zákazníka,
- odchod by znamenal migraci procesů, dat i návyků.

U nízkého rizika stačí rychlá kontrola. U vysokého rizika potřebuješ jasnou odpovědnost, smlouvu, export, retenční pravidla a plán odchodu. Ano, zní to méně romanticky než „zkusíme to a uvidíme“. Ale romantika v procurementu obvykle končí sdíleným heslem v poznámkách.

### K.2 Pět otázek před zadáním karty

Než nástroj koupíš, zeptej se na pět věcí. Ne jako právnický rituál, ale jako ochranu před budoucí bolestí.

1. **Jaká data do nástroje potečou?** Kontakty, osobní údaje, obsah zákaznických zpráv, soubory, faktury, telemetry, nebo jen anonymní pracovní poznámky?
2. **Kde budou data uložená a kdo je zpracovává?** Má poskytovatel EU region, jasné subzpracovatele a srozumitelnou smlouvu?
3. **Jak data dostanu ven?** Existuje export v otevřeném formátu, API nebo pravidelná záloha?
4. **Jak nástroj vypnu?** Co se stane s účty, daty, integracemi, tokeny a fakturací?
5. **Co se stane při incidentu?** Jak poskytovatel komunikuje výpadky, bezpečnostní události a změny subdodavatelů?

Pokud na tyto otázky neumíš odpovědět, nástroj možná není špatný. Jen ještě není připravený na data, která mu chceš svěřit.

### K.3 DPA není papír do šuplíku

Když SaaS zpracovává osobní údaje za tebe, typicky potřebuješ zpracovatelskou smlouvu nebo odpovídající smluvní ujednání. Evropská komise zveřejňuje standardní smluvní doložky pro vztah správce a zpracovatele podle článku 28 GDPR. Zdroj: https://commission.europa.eu/publications/standard-contractual-clauses-controllers-and-processors-eueea_en

Prakticky zkontroluj:

- kdo je správce a kdo zpracovatel,
- jaký je účel a rozsah zpracování,
- jaké kategorie osobních údajů a subjektů údajů se zpracovávají,
- zda jsou uvedení subzpracovatelé a způsob oznámení změn,
- jak se řeší bezpečnostní opatření,
- co se stane s daty po ukončení služby,
- jak poskytovatel pomůže s požadavky subjektů údajů.

EDPB ve svých pokynech k pojmům správce a zpracovatel rozebírá, že role závisí na reálném rozhodování o účelech a prostředcích zpracování, ne jen na tom, jak se firma sama nazve v marketingových materiálech. Zdroj: https://www.edpb.europa.eu/documents/guideline/guidelines-072020-on-the-concepts-of-controller-and-processor-in-the-gdpr_en

Tohle není právní rada, ale provozní minimum: pokud nástroj obsahuje data zákazníků, nenech smluvní roli v mlze. Mlha je fajn v hororu, ne v registru zpracování.

### K.4 Export otestuj dřív, než ho potřebuješ

Vendor lock-in se často netváří jako past. Tváří se jako pohodlí. Máš krásné workflow, integrace, automatizace a tým si zvykne. Pak přijde zdražení, změna podmínek, horší podpora nebo požadavek zákazníka na evropský provoz. Najednou potřebuješ odejít a zjistíš, že export je „v roadmapě“.

Evropský Data Act zavádí pravidla pro přechod mezi poskytovateli služeb zpracování dat, včetně cloudových a edge služeb, a je použitelný od 12. září 2025. Zdroj: https://digital-strategy.ec.europa.eu/en/policies/data-act

Pro malý tým z toho plyne jednoduché pravidlo: nespoléhej jen na regulaci, otestuj odchod prakticky.

Mini test exportu:

- založ testovací projekt,
- vlož realistická testovací data,
- vyexportuj je,
- ověř formát a úplnost,
- zkus data importovat jinam nebo alespoň přečíst bez původní služby,
- zapiš, co by migrace reálně obnášela.

Když export nejde otestovat ani v trialu, ber to jako signál. Možná ne stopku, ale rozhodně žlutou kontrolku na palubovce.

### K.5 Příklad: výběr nástroje pro support

Představ si, že vybíráš helpdesk pro B2B SaaS. Do nástroje potečou e-maily zákazníků, popisy problémů, interní poznámky, přílohy a občas i citlivé obchodní informace. To není „jen support“. To je velmi živý archiv zákaznické reality.

Rozumný postup:

1. Sepiš, jaké typy dat se v ticketech smí objevit a co tam naopak nepatří.
2. Vyber 3 kandidáty a zkontroluj EU hosting, DPA, subzpracovatele, export a SSO/MFA.
3. Udělej týdenní pilot s testovacími nebo anonymizovanými daty.
4. Otestuj export ticketů, kontaktů a příloh.
5. Napiš interní pravidla: co se nesmí posílat do supportu, jak dlouho držet tickety a kdo má přístup.
6. Teprve pak převeď reálnou podporu.

Privacy-first detail: support nástroj často svádí k tomu, aby se stal CRM, analytikou, znalostní bází a automatizačním centrem najednou. Nedělej z něj datový vysavač. Každá integrace má mít jasný účel a vlastníka.

### K.6 Jednostránkový SaaS nákupní záznam

Pro každý důležitější nástroj si vytvoř krátký záznam. Nemusí to být enterprise formulář s třiceti záložkami. Stačí jedna stránka, kterou tým opravdu vyplní.

| Pole | Co vyplnit |
| --- | --- |
| Název nástroje | Název, URL a vlastník v týmu |
| Účel | Proč nástroj používáme a jakou práci dělá |
| Data | Jaká data do něj posíláme |
| Riziko | Nízké, střední nebo vysoké + důvod |
| Region | Kde jsou data uložená, pokud je to známé |
| Smlouvy | DPA, podmínky, subzpracovatelé |
| Přístupy | Kdo má účet a kdo je admin |
| Export | Jak dostaneme data ven a kdy byl export testovaný |
| Retence | Jak dlouho data držíme a jak se mažou |
| Odchod | Co uděláme, když službu rušíme |

Tenhle záznam je nudný jen do chvíle, než ho potřebuješ. Pak je to mapa z hořící budovy.

### K.7 Checklist nákupu SaaS nástroje

- [ ] Víme, jaký problém nástroj řeší a kdo ho v týmu vlastní.
- [ ] Nástroj má přiřazenou rizikovou úroveň podle dat a dopadu na provoz.
- [ ] Je jasné, jaká data do nástroje posíláme a co tam posílat nesmíme.
- [ ] Máme zkontrolované DPA nebo smluvní podmínky pro zpracování osobních údajů.
- [ ] Víme, kde jsou data uložená a kdo jsou důležití subzpracovatelé.
- [ ] Export dat byl reálně otestovaný, ne jen nalezený v dokumentaci.
- [ ] Máme domluvený termín příští revize, aby se z jednorázového nákupu nestal zapomenutý datový sklep.
- [ ] Admin účty mají MFA a přístup má jen nutný okruh lidí.
- [ ] Existuje jednoduchý postup pro ukončení služby, odebrání tokenů a smazání dat.
- [ ] Nástroj nezavádí zbytečné trackery, profilování ani přenosy dat mimo očekávání zákazníka.
- [ ] Po pilotu proběhlo rozhodnutí: koupit, odložit, nebo odmítnout.

### K.8 Mini úkol na 60 minut

Vyber jeden SaaS nástroj, který už tým používá a ve kterém jsou zákaznická nebo obchodně citlivá data. Vyplň pro něj jednostránkový nákupní záznam, najdi export a stáhni testovací vzorek dat. Pokud export nenajdeš, napiš to do rizik. Gratuluju, právě jsi udělal víc governance než mnoho týmů s mnohem dražším nástrojem na governance.

## Dodatek L: Roadmapa bez chaosu, slibotechny a feature bufetu

Roadmapa není seznam přání, které tým hrdinsky tahá za sebou jako mokrý koberec. Dobrá roadmapa je dohoda o směru: jaké problémy řešíme, proč teď, pro koho a jak poznáme, že jsme pohnuli produktem dopředu. V malém SaaS je roadmapa zároveň marketingový filtr, support nástroj, prodejní pomůcka a ochrana týmu před tím, aby každý hlasitý požadavek vypadal jako strategie.

> Codyho komentář: Pokud roadmapa obsahuje jen názvy funkcí a žádný zákaznický problém, není to roadmapa. Je to nákupní seznam do produktového supermarketu. A tam se hladový founder chová nebezpečně.

### L.1 Začni problémy, ne funkcemi

Feature požadavek často přichází ve tvaru „potřebujeme export do Excelu“, „chceme integraci s CRM“ nebo „přidejte AI asistenta“. To je už navržené řešení. Než ho zařadíš do roadmapy, vrať se o krok zpět a zeptej se:

- Jakou práci se zákazník snaží dokončit?
- Co mu dnes brání v úspěchu?
- Kolik zákazníků to řeší a jak často?
- Jaký dopad má problém na aktivaci, retenci, podporu nebo prodej?
- Existuje jednodušší řešení než nová velká funkce?

Praktický zápis do backlogu může vypadat takhle:

| Místo funkce | Zapiš problém |
| --- | --- |
| „Přidat PDF export“ | Zákazník potřebuje poslat přehled vedení, které nemá účet v aplikaci. |
| „Napojit Slack“ | Tým si nevšimne kritické události včas a musí ručně kontrolovat dashboard. |
| „AI sumarizace“ | Manažer nechce číst 80 ticketů, ale potřebuje vědět tři hlavní příčiny problémů. |

Jakmile znáš problém, můžeš navrhnout menší první krok. PDF export může být nejdřív sdílený read-only odkaz. Slack integrace může být e-mailové upozornění. AI sumarizace může být ručně připravený týdenní přehled, než začneš posílat zákaznická data do modelu. Tohle není zbabělost. To je produktová hygiena.

### L.2 Používej jednoduché skóre, které tým opravdu pochopí

Prioritizace nemusí být akademická disciplína s tajemným vzorcem. Pro malý tým stačí čtyři otázky ohodnocené od 1 do 5:

| Kritérium | Otázka |
| --- | --- |
| Dopad | Jak moc to pomůže zákazníkovi nebo byznysu? |
| Důkaz | Jak silně víme, že problém existuje? |
| Náročnost | Jak drahé bude řešení na vývoj, provoz a podporu? |
| Riziko | Může to zhoršit soukromí, bezpečnost, výkon nebo jednoduchost produktu? |

Jednoduché pravidlo: vysoký dopad a silný důkaz posouvají věc nahoru. Vysoká náročnost a vysoké riziko ji brzdí. Nejde o to vypočítat pravdu na dvě desetinná místa. Jde o to donutit tým říct nahlas, proč něco dělá.

Příklad:

| Nápad | Dopad | Důkaz | Náročnost | Riziko | Rozhodnutí |
| --- | --- | --- | --- | --- | --- |
| Lepší onboarding checklist | 5 | 4 | 2 | 1 | Udělat teď |
| Komplexní marketplace integrací | 4 | 2 | 5 | 4 | Rozsekat na výzkum |
| Veřejné API pro tři zákazníky | 3 | 5 | 4 | 3 | Navrhnout pilot s limity |

Privacy-first poznámka: riziko neznamená jen bezpečnostní drama. Riziko je i to, že nová funkce začne ukládat víc osobních údajů, přidá externího zpracovatele, vytvoří citlivější logy nebo zkomplikuje mazání účtu.

### L.3 Roadmapa má mít horizonty, ne falešná data

Přesná data vydání vypadají profesionálně, dokud nejsou vymyšlená. Malý SaaS tým se rychle učí, mění rozsah a reaguje na zákazníky. Proto je lepší dělit roadmapu na horizonty:

- **Teď:** práce na nejbližší týdny, kde známe problém, rozsah i vlastníka.
- **Příště:** důležité směry, které potřebují výzkum, návrh nebo rozsekání.
- **Později:** témata, která dávají smysl strategicky, ale nejsou připravená na závazek.
- **Ne teď:** dobré nápady, které vědomě odkládáme, aby se tým neutopil.

Tohle pomáhá i komunikaci se zákazníky. Místo „bude to v Q2“ řekneš: „Řešíme problém exportu pro vedení, ověřujeme první jednodušší variantu a dáme vám vědět, až bude pilot.“ Je to méně bombastické, ale pravdivější. A pravda škáluje líp než slibotechnický ohňostroj.

### L.4 Propoj roadmapu se supportem, prodejem a obsahem

Roadmapa nesmí žít izolovaně v nástroji, který otvírá jen produktový manažer a jeho kaktus. Každý větší problém by měl mít stopu:

- v supportu: kolik dotazů nebo ticketů se týká stejné bolesti,
- v prodeji: kolikrát požadavek rozhodl nebo zablokoval obchod,
- v analytice: kde uživatelé odpadají nebo obcházejí produkt,
- v obsahu: jaké návody, články nebo šablony by snížily tlak na vývoj,
- v privacy mapě: jaká data bude řešení sbírat, ukládat nebo posílat dál.

Příklad: pokud zákazníci často chtějí „lepší reporty“, nemusí první krok být nový report builder. Může to být lepší šablona exportu, článek „Jak poslat měsíční přehled vedení“, jedna uložená konfigurace reportu nebo automatický e-mail bez osobních detailů navíc.

### L.5 Veřejná roadmapa: opatrně, ale ne zbaběle

Veřejná roadmapa může budovat důvěru. Zákazníci vidí, že produkt žije a tým poslouchá. Zároveň může vytvořit past, pokud publikuješ moc konkrétních slibů, necháš hlasovat bez kontextu nebo ukazuješ věci, které nechceš strategicky prozradit konkurenci.

Rozumný kompromis:

- veřejně ukaž problémy a směry, ne interní termíny a technické detaily,
- odděl „zvažujeme“, „ověřujeme“, „stavíme“ a „hotovo“,
- u každého bodu popiš, pro koho je důležitý,
- nepoužívej roadmapu jako náhradu supportu,
- nedávej do veřejné roadmapy zákaznická jména, citace ani citlivé kontexty bez souhlasu.

Privacy-first varianta je jednoduchá: sbírej zpětnou vazbu přes formulář bez zbytečných trackerů, dovol e-mailový kontakt dobrovolně, ukládej jen to, co potřebuješ pro vyhodnocení, a staré požadavky pravidelně maž nebo agreguj.

### L.6 Konkrétní příklad: týdenní roadmap review

Jednou týdně si dej 45 minut. Ne víc, jinak se z review stane produktové divadlo o třech dějstvích.

Agenda:

1. Projdi nové signály ze supportu, prodeje, analytiky a rozhovorů se zákazníky.
2. Slouč duplicitní požadavky pod jeden problém.
3. U tří nejdůležitějších problémů doplň dopad, důkaz, náročnost a riziko.
4. Rozhodni: teď, příště, později, ne teď.
5. U věcí v „teď“ urč vlastníka a nejmenší ověřitelný výstup.
6. U věcí v „ne teď“ napiš důvod, aby se stejná debata nevracela každý pátek jako špatný seriál.

Výstup review má být krátký: tři rozhodnutí, tři otevřené otázky, tři věci, které zákazníkům nebo týmu někdo sdělí. Pokud z review nevznikne rozhodnutí, nebylo to review. Byla to synchronizační mlha.

### L.7 Checklist roadmapy pro malý SaaS

- [ ] Každá položka roadmapy popisuje zákaznický nebo byznysový problém, ne jen funkci.
- [ ] U důležitých položek známe dopad, důkaz, náročnost a riziko.
- [ ] Roadmapa používá horizonty „teď“, „příště“, „později“ a „ne teď“ místo falešně přesných slibů.
- [ ] Support, prodej a produkt sdílejí signály na jednom místě.
- [ ] Nové funkce mají privacy kontrolu: data, zpracovatelé, logy, retence a mazání.
- [ ] U rozpracovaných věcí je jasný vlastník a nejmenší ověřitelný výstup.
- [ ] Odmítnuté nebo odložené nápady mají stručný důvod.
- [ ] Veřejná roadmapa neprozrazuje citlivé zákaznické informace ani interní termíny bez jistoty.
- [ ] Tým pravidelně maže, slučuje nebo archivuje staré požadavky.
- [ ] Roadmapa pomáhá rozhodovat, ne jen uklidňovat lidi hezkou tabulkou.

### L.8 Mini úkol na 45 minut

Vezmi deset posledních požadavků od zákazníků, supportu nebo obchodních schůzek. Přepiš je z funkcí na problémy, sluč duplicity a každému dej horizont: teď, příště, později nebo ne teď. U tří nejvýše zařazených doplň dopad, důkaz, náročnost a privacy riziko. Nakonec napiš jednu větu, kterou může support poslat zákazníkovi. Roadmapa právě přestala být interní chaos a začala být součást zákaznické důvěry. Ano, pořád je to tabulka. Ale aspoň tabulka, která něco dělá.

## Zdroje

- Evropská komise: Principles of the GDPR — https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en
- European Data Protection Board: Privacy by design and by default — https://www.edpb.europa.eu/topics/ai-and-technology/privacy-by-design-and-by-default_en
- EDPB Guidelines 4/2019 on Article 25, finální verze z 20. 10. 2020 — https://www.edpb.europa.eu/sites/default/files/files/file1/edpb_guidelines_201904_dataprotection_by_design_and_by_default_v2.0_en.pdf
- Google Search Central: SEO Starter Guide — https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central: Core Web Vitals and Google Search results — https://developers.google.com/search/docs/appearance/core-web-vitals
- W3C WAI: WCAG 2 Overview — https://www.w3.org/WAI/standards-guidelines/wcag/
- Paul Graham: Do Things that Don’t Scale — https://paulgraham.com/ds.html
- Stripe: Strong Customer Authentication guide — https://stripe.com/guides/strong-customer-authentication
- Evropská komise: VAT One Stop Shop — https://vat-one-stop-shop.ec.europa.eu/index_en
- Principles behind the Agile Manifesto — https://agilemanifesto.org/principles
- Microsoft Learn: Set Work in Progress Limits in Azure Boards — https://learn.microsoft.com/en-us/azure/devops/boards/boards/wip-limits
- Atlassian: Postmortems — https://www.atlassian.com/incident-management/handbook/postmortems
- Atlassian: Incident management handbook — https://www.atlassian.com/incident-management
- Google Search Central: Creating helpful, reliable, people-first content — https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- RSS Advisory Board: RSS 2.0 Specification — https://www.rssboard.org/rss-specification
- OWASP Top 10:2021 — https://owasp.org/Top10/
- OWASP Application Security Verification Standard — https://owasp.org/www-project-application-security-verification-standard/
- OWASP Cheat Sheet Series: Secrets Management Cheat Sheet — https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html
- OWASP Cheat Sheet Series: Logging Cheat Sheet — https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html
- ENISA: Technical implementation guidance on cybersecurity risk-management measures, verze 1.0 — https://www.enisa.europa.eu/sites/default/files/2025-06/ENISA_Technical_implementation_guidance_on_cybersecurity_risk_management_measures_version_1.0.pdf
- European Commission: NIS2 Directive — https://digital-strategy.ec.europa.eu/en/policies/nis2-directive
- Google Research: Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications — https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/
- Google Cloud: Using the Four Keys to measure your DevOps performance — https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance
- Google Cloud: Supercharge your DevOps practice with SRE principles — https://cloud.google.com/blog/products/devops-sre/supercharge-your-devops-practice-with-sre-principles
- European Commission: AI Act — https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- European Commission: Data Act — https://digital-strategy.ec.europa.eu/en/policies/data-act
- European Commission: European Accessibility Act — https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en
- European Commission: The EU becomes more accessible for all — https://commission.europa.eu/news-and-media/news/eu-becomes-more-accessible-all-2025-07-31_en
- W3C WAI: Web Content Accessibility Guidelines WCAG 2.2 — https://www.w3.org/TR/WCAG22/
- W3C WAI: What's New in WCAG 2.2 — https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
- European Commission: Dealing with requests from individuals — https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/dealing-requests-individuals_en
- EDPB: Guidelines 01/2025 on Pseudonymisation — https://www.edpb.europa.eu/public-consultations/guidelines-012025-on-pseudonymisation_en
- ÚOOÚ: Cookies — https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies
- ÚOOÚ: Cookies od začátku roku 2022 pouze se souhlasem — https://uoou.gov.cz/novinky/vse/cookies-od-zacatku-roku-2022-pouze-se-souhlasem
- ÚOOÚ: Obchodní sdělení — https://uoou.gov.cz/index.php/profesional/qa-otazky-a-odpovedi/obchodni-sdeleni
- Your Europe: Online privacy and cookies — https://europa.eu/youreurope/business/growing/digitalising/online-privacy/index_en.htm
- Google Search Central: Sitemaps overview — https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- Google Search Central: Introduction to robots.txt — https://developers.google.com/search/docs/crawling-indexing/robots/intro
- Google Search Central: Intro to structured data markup — https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- European Commission: Can someone else process the data on my organisation’s behalf? — https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/obligations/controllerprocessor/can-someone-else-process-data-my-organisations-behalf_en
- European Commission: Standard contractual clauses for controllers and processors in the EU/EEA — https://commission.europa.eu/publications/standard-contractual-clauses-controllers-and-processors-eueea_en
- EDPB: Guidelines 07/2020 on the concepts of controller and processor in the GDPR — https://www.edpb.europa.eu/documents/guideline/guidelines-072020-on-the-concepts-of-controller-and-processor-in-the-gdpr_en

## Pracovní log

- 2026-09-07: Založena struktura e-booku, doplněn úvod a první kapitola o privacy-first základech webu a SaaS v Evropě.
- 2026-09-07: Doplněna druhá kapitola o webu, který rychle vysvětlí hodnotu, důvěru, SEO, výkon a přístupnost.
- 2026-09-07: Doplněna třetí kapitola o SaaS cestě od problému k první platbě, včetně MVP, onboardingu, SCA/DPH poznámek a checklistu.
- 2026-09-07: Doplněna čtvrtá kapitola o produktivitě malého SaaS týmu, WIP limitech, dokumentaci rozhodnutí a blameless incidentech.
- 2026-09-07: Doplněna pátá kapitola o marketingu bez spamu, vlastních kanálech, RSS, landing page filtru a launch rytmu malé SaaS funkce.
- 2026-09-07: Doplněna šestá kapitola o technickém stacku, evropském provozu, bezpečnosti, zálohách, monitoringu a runbooku.
- 2026-09-07: Doplněna sedmá kapitola o privacy-first měření produktu, webu, technické stability a rozhodovacích dashboardech.
- 2026-09-07: Doplněna osmá kapitola s praktickými šablonami pro brief, landing page, launch, privacy audit, runbook a měřicí plán.
- 2026-09-07: Doplněna devátá kapitola o bezpečné AI automatizaci v evropském SaaS, včetně governance, promptů, datové minimalizace a checklistu.
- 2026-09-07: Doplněna desátá kapitola o SaaS cenotvorbě, balíčcích, férových limitech, trialu a praktickém checklistu.
- 2026-09-07: Doplněn praktický 30denní plán pro menší web nebo SaaS jako závěrečný akční dodatek e-booku.
- 2026-09-07: Doplněn Dodatek B s praktickým postupem pro privacy-first výběr SaaS nástrojů a omezení vendor lock-inu.
- 2026-09-07: Doplněn Dodatek C o obsahovém systému, vlastních kanálech, RSS a redakčním rytmu odolném vůči algoritmům.
- 2026-09-07: Doplněn Dodatek D o přístupnosti jako součásti produktu, včetně scénářů, auditu, formulářů a checklistu.
- 2026-09-07: Doplněn Dodatek E o zákaznické podpoře, dokumentaci, kategorizaci dotazů a privacy-first práci se support daty.
- 2026-09-07: Doplněn Dodatek F o retenci, mazání, exportu dat, zálohách a praktickém offboardingu zákazníka.
- 2026-09-08: Doplněn Dodatek G o newsletteru, cookie liště, obchodních sděleních a férovém souhlasu bez manipulace.
- 2026-09-08: Doplněn Dodatek H o technickém SEO bez trackerů, sitemap, robots.txt, metadatech, RSS a privacy-first auditu.
- 2026-09-08: Doplněn Dodatek I o bezpečnostním minimu pro malý SaaS, včetně přístupů, tajemství, logů, záloh a incident plánu.
- 2026-09-08: Doplněn Dodatek J o incidentové komunikaci, status page, kadenci aktualizací a postmortem bez paniky.
- 2026-09-08: Doplněn Dodatek K o privacy-first nákupu SaaS nástrojů, kontrole DPA, exportu, riziku dodavatelů a checklistu před zadáním karty.
- 2026-09-08: Doplněn Dodatek L o roadmapě bez chaosu, prioritizaci podle problémů, týdenním review a privacy kontrole nových funkcí.
