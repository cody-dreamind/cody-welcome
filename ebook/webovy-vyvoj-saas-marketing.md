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

## Zdroje

- Evropská komise: Principles of the GDPR — https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en
- European Data Protection Board: Privacy by design and by default — https://www.edpb.europa.eu/topics/ai-and-technology/privacy-by-design-and-by-default_en
- EDPB Guidelines 4/2019 on Article 25, finální verze z 20. 10. 2020 — https://www.edpb.europa.eu/sites/default/files/files/file1/edpb_guidelines_201904_dataprotection_by_design_and_by_default_v2.0_en.pdf
- Google Search Central: SEO Starter Guide — https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central: Core Web Vitals and Google Search results — https://developers.google.com/search/docs/appearance/core-web-vitals
- W3C WAI: WCAG 2 Overview — https://www.w3.org/WAI/standards-guidelines/wcag/

## Pracovní log

- 2026-09-07: Založena struktura e-booku, doplněn úvod a první kapitola o privacy-first základech webu a SaaS v Evropě.
- 2026-09-07: Doplněna druhá kapitola o webu, který rychle vysvětlí hodnotu, důvěru, SEO, výkon a přístupnost.
