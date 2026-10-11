# Webový vývoj, SaaS a marketing privacy-first v Evropě

Praktický český e-book od Codyho z Dreamindu pro malé firmy, zakladatele SaaS produktů, marketéry a vývojáře, kteří chtějí stavět moderní weby bez zbytečného šmírování lidí.

> **Codyho komentář:** Privacy-first není brzda růstu. Je to filtr na špatné nápady, zbytečné trackery a vendor lock-in. Když víš, proč sbíráš data, často zjistíš, že jich potřebuješ míň — a produkt je díky tomu čistší.

## Jak e-book používat

- Čti kapitoly postupně, pokud začínáš nový web nebo SaaS od nuly.
- Vracej se ke checklistům při redesignu, migraci analytiky nebo přípravě marketingové kampaně.
- Odkazy ber jako výchozí body pro ověření; právní část vždy konzultuj podle konkrétní situace.
- Kde píšu názor, označuji ho jako **Codyho komentář**.

## Osnova

1. **Strategie webu a produktu** — pro koho stavíme, jak měřit hodnotu a kde nezačít technologií.
2. **Privacy-first základy** — data minimization, evropský provoz, cookies, consent a dokumentace.
3. **Technický stack pro malé týmy** — frontend, backend, hosting, databáze, monitoring a zálohy.
4. **SaaS produkt od nápadu po první platící zákazníky** — pricing, onboarding, aktivace, retence.
5. **Marketing bez invazivního trackingu** — SEO, obsah, RSS, newslettery, UTM disciplína a analytika.
6. **Produktivita zakladatele a týmu** — rozhodovací systémy, automatizace, AI asistenti a provozní rytmus.
7. **Provoz v Evropě** — dodavatelé, smlouvy, incidenty, bezpečnost a exit plán.
8. **Checklisty a šablony** — audit webu, launch checklist, privacy review, marketingový plán.

---

## 1. Strategie webu a produktu

### 1.1 Nezačínej designem. Začni slibem.

Většina webů nezačíná špatně proto, že mají špatnou barvu tlačítka. Začínají špatně proto, že nikdo přesně neví, jaký slib návštěvníkovi dávají. Web má během pár vteřin odpovědět na tři otázky:

1. **Co pro mě řešíš?**
2. **Proč bych měl věřit zrovna tobě?**
3. **Co mám udělat dál?**

Pokud odpovědi nejsou jasné, nepomůže ani nový hero obrázek, animace nebo „AI-powered“ nálepka nalepená na produkt jako cenovka v hobbymarketu.

#### Praktický příklad

Slabý slib:

> „Pomáháme firmám s digitální transformací.“

Lepší slib:

> „Do 30 dnů vám postavíme evropský B2B web, který sbírá poptávky bez Google Analytics, reklamních pixelů a zbytečných cookie bannerů.“

Ten druhý slib je konkrétní. Říká výsledek, časový rámec, cílovku i hodnotu. Zároveň nenutí firmu slibovat něco, co nemůže splnit — třeba „navýšíme tržby o 300 %“, což zní krásně, ale často patří spíš do oddělení pohádek s tabulkou CAC/LTV.

### 1.2 Jedna stránka, jeden primární cíl

Každá důležitá stránka má mít jeden hlavní úkol. Ne pět. Ne „ať si každý vybere“. Jeden.

Příklady:

- Homepage má vysvětlit pozici firmy a poslat návštěvníka na kontakt, demo nebo klíčovou službu.
- Landing page kampaně má převést konkrétní návštěvnost na jednu akci.
- Pricing page má snížit nejistotu a pomoct vybrat tarif.
- Blogový článek má odpovědět na konkrétní otázku a nabídnout další krok.

Sekundární akce jsou v pořádku, ale nesmí soupeřit s hlavní akcí. Pokud má stránka tři stejně výrazná tlačítka, obvykle to znamená, že tým neudělal rozhodnutí a delegoval ho na uživatele. To není personalizace, to je chaos s kulatými rohy.

### 1.3 Metriky: měř méně věcí, ale měř je poctivě

Privacy-first přístup neznamená „neměřit nic“. Znamená měřit tak, aby sběr dat odpovídal účelu, byl vysvětlitelný a nelezl lidem do kapsy.

Pro malý firemní web často stačí:

- počet návštěv a unikátních návštěvníků,
- nejnavštěvovanější stránky,
- zdroje návštěvnosti na agregované úrovni,
- konverze kontaktního formuláře nebo kliknutí na e-mail/telefon,
- výkon obsahu: které články dlouhodobě přivádějí relevantní návštěvy.

U SaaS produktu přidej produktové metriky, ale pořád s rozumem:

- aktivace: kolik lidí udělá první hodnotnou akci,
- retence: kolik se vrací po týdnu, měsíci a po konci trialu,
- revenue: MRR, churn a expanze,
- support signály: opakované dotazy, blokující chyby, místa odpadnutí v onboardingu.

### 1.4 Privacy-first jako součást strategie

Evropský web nebo SaaS by měl privacy řešit už při návrhu, ne až ve chvíli, kdy se někdo zeptá „máme vlastně cookie lištu?“. GDPR pracuje s principem ochrany osobních údajů už od návrhu a ve výchozím nastavení; EDPB to shrnuje jako zabudování ochrany do systémů a procesů od začátku, ne jako kosmetickou úpravu na konci ([EDPB: Privacy by design and by default](https://www.edpb.europa.eu/topics/ai-and-technology/privacy-by-design-and-by-default_en)). Evropská komise podobně zdůrazňuje, že výchozí nastavení má zpracovávat jen data nezbytná pro daný účel a držet je jen po potřebnou dobu ([European Commission: Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en)).

Pro praxi to znamená:

- Nejdřív napiš, jaká data potřebuješ a proč.
- Pak vyber nástroje, které ten účel zvládnou s nejmenším zásahem do soukromí.
- Až potom řeš implementaci, bannery a texty v zásadách ochrany osobních údajů.

Když provozuješ web v Evropě, dává smysl preferovat evropský hosting, evropskou analytiku, přímé odkazy místo social-share skriptů a RSS místo závislosti na algoritmických feedů. Ne proto, že „EU je magická ochranná bublina“, ale proto, že menší datová stopa a kratší dodavatelský řetězec se líp vysvětlují zákazníkům i sobě samému ve dvě ráno po incidentu.

### 1.5 Mini framework: Slib → Důkaz → Akce

Použij ho pro každou důležitou stránku.

#### Slib

Jednou větou řekni výsledek pro konkrétní skupinu.

Příklad:

> „Pomáháme českým B2B firmám spouštět rychlé weby a interní SaaS nástroje provozované v Evropě.“

#### Důkaz

Vyber 2–4 důkazy, které podporují slib:

- reference nebo případová studie,
- screenshot produktu,
- veřejná dokumentace,
- technické parametry,
- auditní checklist,
- ukázka procesu.

#### Akce

Návštěvník musí vědět, co dál:

- objednat konzultaci,
- vyzkoušet demo,
- stáhnout checklist,
- napsat e-mail,
- přečíst navazující článek.

Akce má být konkrétní. „Zjistit více“ je často líné tlačítko. „Domluvit 30min konzultaci“ je jasnější. „Poslat technický audit webu“ je ještě lepší, pokud to odpovídá nabídce.

### Checklist pro první strategický audit webu

- [ ] Umím jednou větou říct, komu web pomáhá a s čím.
- [ ] Homepage má jeden primární cíl a jedno hlavní CTA.
- [ ] Každá hlavní stránka odpovídá na otázky: co, proč věřit, co dál.
- [ ] Měřím jen metriky, které vedou k rozhodnutí.
- [ ] Vím, kde se ukládají data z formulářů, analytiky a podpory.
- [ ] Nepoužívám třetí strany jen proto, že „to tak dělají všichni“.
- [ ] Privacy-first hodnota je vidět v textu, architektuře i výběru nástrojů.

---

## Zdroje

- European Data Protection Board: [Privacy by design and by default](https://www.edpb.europa.eu/topics/ai-and-technology/privacy-by-design-and-by-default_en)
- European Commission: [Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en)

---

## Pracovní log

- **2026-10-11:** Založena struktura e-booku, přidána osnova a dokončena kapitola 1.1–1.5 o strategii webu, metrikách a privacy-first přístupu včetně checklistu a ověřených zdrojů.
