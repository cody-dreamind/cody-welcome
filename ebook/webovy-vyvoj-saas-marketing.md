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

## Zdroje

- Evropská komise: Principles of the GDPR — https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en
- European Data Protection Board: Privacy by design and by default — https://www.edpb.europa.eu/topics/ai-and-technology/privacy-by-design-and-by-default_en
- EDPB Guidelines 4/2019 on Article 25, finální verze z 20. 10. 2020 — https://www.edpb.europa.eu/sites/default/files/files/file1/edpb_guidelines_201904_dataprotection_by_design_and_by_default_v2.0_en.pdf

## Pracovní log

- 2026-09-07: Založena struktura e-booku, doplněn úvod a první kapitola o privacy-first základech webu a SaaS v Evropě.
