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


## 2. Privacy-first základy

### 2.1 Začni mapou dat, ne cookie lištou

Cookie lišta je až viditelný vršek ledovce. Skutečná práce začíná tím, že si sepíšeš, jaká data web nebo SaaS sbírá, kde vznikají, kam tečou a kdy mizí. Bez téhle mapy se z privacy-first přístupu rychle stane divadlo: hezké tlačítko „Odmítnout vše“, ale za ním integrace, o kterých nikdo neví.

Pro malý web nebo SaaS stačí jednoduchá tabulka:

| Oblast | Příklad dat | Účel | Kde se ukládá | Jak dlouho | Kdo má přístup |
| --- | --- | --- | --- | --- | --- |
| Kontaktní formulář | jméno, e-mail, zpráva | odpověď na poptávku | e-mail / CRM | do vyřízení + rozumná evidence | obchod, podpora |
| Analytika | agregované návštěvy, stránky, referrery | zlepšení webu | EU analytika | podle nastavení retence | marketing, produkt |
| SaaS účet | e-mail, role, organizace | poskytování služby | aplikační databáze | po dobu účtu + zákonné lhůty | podpora, admin |
| Fakturace | fakturační údaje, objednávky | účetnictví | fakturační systém | podle právních povinností | finance |
| Support | dotazy, technické logy | řešení incidentů | helpdesk / logy | krátce a účelově | support, vývoj |

Evropská komise shrnuje principy GDPR tak, že osobní údaje mají být omezené na to, co je pro účel nezbytné, a uchovávané jen po potřebnou dobu ([European Commission: Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en)). EDPB k tomu připomíná základní principy jako zákonnost, férovost, transparentnost, účelové omezení, minimalizaci, přesnost, omezení uložení, důvěrnost a odpovědnost ([EDPB: Basic principles](https://www.edpb.europa.eu/topics/key-gdpr-concepts/basic-principles_en)).

Prakticky: pokud nedokážeš u jednoho pole ve formuláři říct, proč ho potřebuješ, smaž ho. Pokud ho potřebuje jen „možná někdy“, smaž ho taky. „Možná někdy“ je nejdražší právní základ na světě, protože ho obvykle platíš složitostí.

### 2.2 Technické cookies nejsou marketingové cookies

Ne každá cookie je problém. Web může potřebovat technické cookies pro přihlášení, bezpečnost, košík, jazykové nastavení nebo ochranu proti zneužití. Pro cookies nezbytně nutné k provozu služby ÚOOÚ uvádí, že není nutné získat souhlas uživatele; jiné typy, typicky analytické nebo marketingové, už souhlas vyžadovat mohou ([ÚOOÚ: Informace pro e-shopy](https://uoou.gov.cz/profesional/qa-otazky-a-odpovedi/informace-pro-e-shopy)).

Rozdíl je dobré mít napsaný lidsky:

- **Technické cookies:** „Bez nich nejde služba bezpečně provozovat.“
- **Analytické cookies:** „Pomáhají nám měřit používání webu.“
- **Marketingové cookies:** „Používají se pro reklamu, remarketing nebo profilování.“

Privacy-first varianta pro firemní web je jednoduchá: nepoužívej marketingové cookies vůbec, analytiku drž agregovanou a ideálně bez osobních profilů. Pokud se obejdeš bez cookie lišty, protože nemáš netechnické cookies ani invazivní tracking, je to často lepší UX i lepší důkaz disciplíny. Není potřeba návštěvníka vítat právním adventním kalendářem.

### 2.3 Souhlas musí být skutečná volba

Když už souhlas potřebuješ, nesmí být schovaný v temném UX sklepení. ÚOOÚ ve svých odpovědích ke cookies uvádí jako dobrou praxi dát odmítnutí netechnických cookies do první vrstvy lišty, na stejnou úroveň jako souhlas a ve srovnatelném vizuálním provedení. Zároveň upozorňuje, že cookie lišta nemá bránit interakci s webem, když uživatel ještě nevybral možnost ([ÚOOÚ: Cookies — otázky a odpovědi](https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies)).

ÚOOÚ také připomíná, že tvrzení typu „setrváním na webu souhlasíte s cookies“ nelze považovat za souhlas podle GDPR ([ÚOOÚ: Cookies od začátku roku 2022 pouze se souhlasem](https://uoou.gov.cz/novinky/vse/cookies-od-zacatku-roku-2022-pouze-se-souhlasem)). EDPB v pokynech k souhlasu řeší mimo jiné to, že cookie walls a pouhé scrollování nejsou férová zkratka ke svobodnému a jednoznačnému souhlasu ([EDPB: Guidelines 05/2020 on consent](https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_de)).

Dobrá cookie lišta proto vypadá nudně — a to je kompliment:

- jasně říká, kdo data zpracovává a proč,
- nabízí „Přijmout“ i „Odmítnout“ stejně snadno,
- umožňuje podrobné nastavení podle účelů,
- neobsahuje předem zaškrtnuté volby,
- umožňuje souhlas později změnit nebo odvolat,
- neblokuje celý web jen proto, že návštěvník nechce marketingové cookies.

### 2.4 Privacy-first architektura pro malý SaaS

U SaaS produktu se privacy nedá vyřešit jedním dokumentem v patičce. Musí být součástí architektury.

Minimální návrh pro evropský malý tým:

1. **EU hosting a databáze:** primární data drž v evropském regionu a měj to ověřené u dodavatele.
2. **Oddělené role:** zákaznická data nevidí každý admin „protože je to pohodlné“.
3. **Auditní stopa:** důležité administrátorské akce loguj, ale bez přehnaného ukládání obsahu.
4. **Krátká retence logů:** technické logy drž tak dlouho, aby pomohly řešit incidenty, ne aby se z nich stal druhý produktový profil.
5. **Export a smazání:** už při návrhu účtu mysli na export dat a ukončení spolupráce.
6. **Dodavatelský seznam:** u každé služby víš, co zpracovává, kde a proč.

Příklad: pokud SaaS posílá transakční e-maily, nemusí e-mailová služba dostávat celý zákaznický profil. Často jí stačí adresa, šablona a minimální kontext. Pokud support nástroj potřebuje historii konverzací, neznamená to automaticky, že má dostat fakturační data, produktovou analytiku a poznámky obchodníka z prvního callu. Data nejsou konfety. Když je rozházíš všude, úklid bude bolet.

### 2.5 Dokumentace, kterou opravdu používej

Privacy dokumentace nemá být PDF mumie, která se otevře jednou při auditu. Pro malý tým stačí čtyři živé dokumenty:

- **Mapa dat:** co sbíráme, proč, kde, jak dlouho a kdo k tomu má přístup.
- **Seznam dodavatelů:** nástroj, účel, region, typ dat, smlouva/DPA, vlastník v týmu.
- **Retenční pravidla:** kdy se mažou poptávky, logy, trial účty, support exporty a analytická data.
- **Incident runbook:** co dělat při úniku, chybě integrace, špatně poslaném e-mailu nebo kompromitaci účtu.

**Codyho komentář:** Nejlepší privacy dokumentace je ta, která donutí tým udělat produkt jednodušší. Když kvůli jednomu checkboxu musíš přidat tři řádky do mapy dat, dvě retenční pravidla a dalšího dodavatele, možná ten checkbox vůbec nepotřebuješ. Brutální? Trochu. Užitečné? Velmi.

### Checklist pro privacy-first základ webu a SaaS

- [ ] Máme aktuální mapu dat pro formuláře, analytiku, účty, fakturaci, support a logy.
- [ ] Každé osobní pole má jasný účel a vlastníka.
- [ ] Technické cookies jsou oddělené od analytických a marketingových.
- [ ] Pokud používáme souhlas, odmítnutí je stejně snadné jako přijetí.
- [ ] Nepoužíváme cookie wall ani souhlas odvozený ze scrollování nebo setrvání na webu.
- [ ] Dodavatelé jsou vybraní podle účelu, regionu, datového rozsahu a možnosti odchodu.
- [ ] Logy, trial účty a support data mají retenční pravidla.
- [ ] Umíme zákazníkovi srozumitelně vysvětlit, kde jeho data jsou a proč.

---

## Zdroje

- European Data Protection Board: [Privacy by design and by default](https://www.edpb.europa.eu/topics/ai-and-technology/privacy-by-design-and-by-default_en)
- European Data Protection Board: [Basic principles](https://www.edpb.europa.eu/topics/key-gdpr-concepts/basic-principles_en)
- European Data Protection Board: [Guidelines 05/2020 on consent under Regulation 2016/679](https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_de)
- European Commission: [Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en)
- Úřad pro ochranu osobních údajů: [Cookies — otázky a odpovědi](https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies)
- Úřad pro ochranu osobních údajů: [Cookies od začátku roku 2022 pouze se souhlasem](https://uoou.gov.cz/novinky/vse/cookies-od-zacatku-roku-2022-pouze-se-souhlasem)
- Úřad pro ochranu osobních údajů: [Informace pro e-shopy](https://uoou.gov.cz/profesional/qa-otazky-a-odpovedi/informace-pro-e-shopy)

---

## Pracovní log

- **2026-10-11:** Doplněna kapitola 2 o privacy-first základech: mapa dat, cookies, souhlas, SaaS architektura, živá dokumentace a praktický checklist s ověřenými zdroji ÚOOÚ, EDPB a Evropské komise.
- **2026-10-11:** Založena struktura e-booku, přidána osnova a dokončena kapitola 1.1–1.5 o strategii webu, metrikách a privacy-first přístupu včetně checklistu a ověřených zdrojů.
