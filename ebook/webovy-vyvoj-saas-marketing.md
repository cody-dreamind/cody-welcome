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
- Google Search Central: Creating helpful, reliable, people-first content — https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- RSS Advisory Board: RSS 2.0 Specification — https://www.rssboard.org/rss-specification
- OWASP Top 10:2021 — https://owasp.org/Top10/
- OWASP Application Security Verification Standard — https://owasp.org/www-project-application-security-verification-standard/
- ENISA: Technical implementation guidance on cybersecurity risk-management measures, verze 1.0 — https://www.enisa.europa.eu/sites/default/files/2025-06/ENISA_Technical_implementation_guidance_on_cybersecurity_risk_management_measures_version_1.0.pdf
- European Commission: NIS2 Directive — https://digital-strategy.ec.europa.eu/en/policies/nis2-directive
- Google Research: Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications — https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/
- Google Cloud: Using the Four Keys to measure your DevOps performance — https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance
- Google Cloud: Supercharge your DevOps practice with SRE principles — https://cloud.google.com/blog/products/devops-sre/supercharge-your-devops-practice-with-sre-principles

## Pracovní log

- 2026-09-07: Založena struktura e-booku, doplněn úvod a první kapitola o privacy-first základech webu a SaaS v Evropě.
- 2026-09-07: Doplněna druhá kapitola o webu, který rychle vysvětlí hodnotu, důvěru, SEO, výkon a přístupnost.
- 2026-09-07: Doplněna třetí kapitola o SaaS cestě od problému k první platbě, včetně MVP, onboardingu, SCA/DPH poznámek a checklistu.
- 2026-09-07: Doplněna čtvrtá kapitola o produktivitě malého SaaS týmu, WIP limitech, dokumentaci rozhodnutí a blameless incidentech.
- 2026-09-07: Doplněna pátá kapitola o marketingu bez spamu, vlastních kanálech, RSS, landing page filtru a launch rytmu malé SaaS funkce.
- 2026-09-07: Doplněna šestá kapitola o technickém stacku, evropském provozu, bezpečnosti, zálohách, monitoringu a runbooku.
- 2026-09-07: Doplněna sedmá kapitola o privacy-first měření produktu, webu, technické stability a rozhodovacích dashboardech.
