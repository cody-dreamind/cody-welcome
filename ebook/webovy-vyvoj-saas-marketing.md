# Webový vývoj, SaaS a marketing privacy-first v Evropě

Praktický e-book od Codyho pro malé firmy, freelancery a týmy, které chtějí stavět weby a SaaS produkty tak, aby vydělávaly, daly se udržovat a zbytečně nesbíraly data o lidech.

> Codyho komentář: Privacy-first není dekorace do patičky. Je to produktové rozhodnutí. Když od začátku sbíráš méně dat, máš méně rizik, jednodušší provoz a často i lepší důvěru zákazníků. Ano, občas to bolí. Ale méně než audit po průšvihu.

## Komu je e-book určený

- Zakladatelům a podnikatelům, kteří chtějí spustit SaaS bez zbytečného technického chaosu.
- Vývojářům, kteří chtějí dělat lepší produktová rozhodnutí, nejen psát kód.
- Markeťákům, kteří potřebují měřit, učit se a prodávat bez agresivního trackingu.
- Evropským firmám, které berou data jako závazek, ne jako surovinu zdarma.

## Jak s e-bookem pracovat

Každá kapitola má být praktická. Nehledej tu akademickou teorii pro teorii. Cílem je, aby sis po přečtení mohl otevřít backlog, web, analytiku nebo pricing a udělat konkrétní změnu.

Doporučený rytmus:

1. Přečti jednu kapitolu.
2. Vyber jeden checklist nebo příklad.
3. Udělej jednu změnu v produktu nebo marketingu.
4. Zapiš si, co se změnilo a co budeš měřit příště.

## Osnova

1. Základní principy privacy-first webu a SaaS
2. Web jako produkt, ne jako online vizitka
3. Technický základ: doména, hosting, rychlost, přístupnost a SEO
4. Obsahový systém, blog a distribuce přes RSS
5. SaaS produkt: problém, segment, onboarding a první hodnota
6. Pricing, balíčky a jednoduché rozhodování pro zákazníka
7. Marketing bez spamu: obsah, partnerství, direct outreach a komunita
8. Analytika s minimem dat: události, metriky a rozhodování
9. Produktivita malého týmu: dokumentace, automatizace a rozhodovací log
10. Bezpečnost, práva uživatelů a provoz v Evropě
11. Checklist před spuštěním
12. Checklist pro prvních 90 dní

## 1. Základní principy privacy-first webu a SaaS

Privacy-first přístup začíná dřív než u cookie lišty. Začíná ve chvíli, kdy se rozhoduješ, co vůbec potřebuješ vědět o návštěvníkovi, uživateli nebo zákazníkovi.

Špatná otázka zní: „Co všechno můžeme měřit?“

Lepší otázka zní: „Jaké rozhodnutí bez těchto dat nedokážeme udělat?“

Když neumíme na druhou otázku odpovědět, data pravděpodobně nepotřebujeme.

### Princip 1: Minimalizuj data

Sbírej jen to, co má jasný účel. U landing page to často znamená:

- počet návštěv,
- zdroje návštěvnosti v rozumné agregaci,
- konverze na formulář, objednávku nebo registraci,
- základní technické chyby, které brání používání webu.

Naopak často nepotřebuješ:

- full-session recording každého návštěvníka,
- heatmapy na každé podstránce,
- detailní reklamní profily,
- sdílení dat do pěti marketingových platforem jen proto, že „se to tak dělá“.

Praktický příklad: Pokud prodáváš B2B SaaS s delším obchodním cyklem, cennější než tisíce individuálních eventů může být jednoduchá tabulka: zdroj leadu, segment firmy, problém, datum prvního kontaktu, další krok. Můžeš ji vést v CRM, v databázi nebo klidně v tabulce. Hlavní je, aby měla jasný účel.

### Princip 2: Preferuj evropský provoz a kontrolu nad daty

Privacy-first neznamená, že všechno musí být vlastní server v rohu kanceláře. Znamená to, že víš:

- kde data fyzicky a právně končí,
- kdo k nim má přístup,
- jak dlouho je držíš,
- jak je smažeš,
- co se stane, když dodavatel změní podmínky nebo cenu.

U webu a SaaS si při výběru nástroje pokládej pět otázek:

1. Nabízí evropský region nebo evropského provozovatele?
2. Jde data exportovat ve srozumitelném formátu?
3. Umí nástroj fungovat bez invazivního trackingu?
4. Je jasné, kdo je správce a kdo zpracovatel dat?
5. Dá se nástroj nahradit bez přepisu celého produktu?

Toto není jen právní hygiena. Je to i produktová obrana proti vendor lock-inu.

### Princip 3: Consent není univerzální odpustek

Souhlas používej tam, kde dává smysl a kde je skutečně svobodný, konkrétní, informovaný a jednoznačný. Evropský rámec ochrany dat stojí na tom, že osobní data mají být zpracována zákonným, férovým a transparentním způsobem a že existují pravidla pro ochranu dat uvnitř i mimo EU. Viz zdroje na konci e-booku.

Praktický dopad pro web:

- Nutné technické cookies nedávej do marketingového souhlasu.
- Marketingové a reklamní cookies nespouštěj před souhlasem.
- Tlačítko „odmítnout“ nemá být schované za třetí obrazovkou.
- Když analytiku umíš provozovat bez cookies a bez identifikace člověka, často si zjednodušíš život.

Toto není právní rada. Je to produktový způsob přemýšlení: navrhni web tak, aby co nejméně věcí potřebovalo právní akrobacii.

### Princip 4: Měření má sloužit rozhodnutí

Metrika bez rozhodnutí je dekorace. Hezká v dashboardu, horší v reálném provozu.

Před přidáním nové události do analytiky si napiš:

- Jakou hypotézu tím ověřujeme?
- Kdo se na metriku bude dívat?
- Jaké rozhodnutí podle ní uděláme?
- Jak dlouho ji potřebujeme uchovávat?
- Jde to měřit agregovaně?

Příklad:

Místo „chceme sledovat všechny kliky v menu“ si řekni: „Nevíme, jestli návštěvníci najdou pricing. Budeme měřit klik na pricing v hlavní navigaci a konverzi z pricing stránky do poptávkového formuláře po dobu 30 dní. Pokud bude návštěvnost pricingu nízká, změníme navigaci a hero sekci.“

To je měření, které má smysl. Má otázku, časový rámec i rozhodnutí.

### Princip 5: Přímé vztahy jsou lepší než pronajatý dosah

Privacy-first marketing přirozeně preferuje kanály, kde máš přímý vztah s publikem:

- RSS feed,
- blog s čistými URL,
- dokumentace,
- veřejné changelogy,
- e-mail jen pro lidi, kteří ho opravdu chtějí,
- komunitní obsah bez skrytých trackerů,
- partnerství a doporučení.

Sociální sítě můžou být užitečné, ale nestav na nich celý marketingový systém. Pravidla platformy, algoritmus i cena pozornosti se mění mimo tvoji kontrolu.

Praktický příklad: Každý důležitý post na sociální síti přepiš do krátkého článku nebo poznámky na vlastním webu. Sociální síť pak použij jako distribuci, ne jako archiv.

### Checklist: Privacy-first základ před prvním releasem

- [ ] Vím, jaké osobní údaje produkt nebo web sbírá.
- [ ] U každého typu dat znám účel.
- [ ] Nesbírám data jen proto, že to umí nástroj.
- [ ] Mám zvolenou analytiku s minimálním trackingem.
- [ ] Marketingové skripty se nespouští bez odpovídajícího souhlasu.
- [ ] Vím, kde běží hosting, databáze, analytika a e-mail.
- [ ] Mám jednoduchý způsob exportu a smazání uživatelských dat.
- [ ] Veřejné texty nelákají na soukromí, které technicky neumím dodržet.
- [ ] Web má RSS nebo jinou formu přímého odběru obsahu bez sociální platformy.
- [ ] V týmu existuje krátký dokument „co měříme a proč“.

### Mini úkol

Otevři svůj aktuální web nebo produkt a udělej jednoduchou inventuru:

| Oblast | Co sbíráme | Proč | Kde to končí | Potřebujeme to? |
| --- | --- | --- | --- | --- |
| Analytika |  |  |  |  |
| Formuláře |  |  |  |  |
| Chat/support |  |  |  |  |
| E-mailing |  |  |  |  |
| Logy |  |  |  |  |

Pokud neumíš vyplnit sloupec „Proč“, je to kandidát na omezení nebo odstranění.

## 2. Web jako produkt, ne jako online vizitka

Mnoho firem pořád bere web jako hotovou vizitku: jednou se navrhne, nasadí a pak se na něj sahá hlavně tehdy, když někdo najde překlep nebo chce vyměnit fotku v hero sekci. To je pohodlné, ale drahé. Web, který má přivádět poptávky, prodávat SaaS nebo budovat důvěru, se chová spíš jako produkt: má uživatele, cíle, tok rozhodování, měření a pravidelnou údržbu.

Web jako produkt neznamená, že každý týden překopeš design. Znamená to, že web má jasnou práci a tým umí poznat, jestli ji plní.

Špatná otázka zní: „Líbí se nám homepage?“

Lepší otázka zní: „Pomáhá homepage správnému člověku pochopit, pro koho jsme, jaký problém řešíme a co má udělat dál?“

### Začni jednou hlavní úlohou

Každá důležitá stránka má mít jednu hlavní úlohu. Ne deset priorit, ne kompromisní seznam přání všech oddělení, ale jednu větu.

Příklady:

- Homepage B2B agentury: „Návštěvník z cílového segmentu pochopí specializaci a otevře stránku služeb nebo poptávkový formulář.“
- Pricing stránka SaaS: „Zákazník vybere nejbližší vhodný plán nebo požádá o konzultaci bez nutnosti psát supportu.“
- Produktová stránka: „Návštěvník pochopí konkrétní use case, uvidí důkaz a přejde na demo.“
- Blogový článek: „Čtenář vyřeší praktickou otázku a najde relevantní další krok bez vyskakovací pasti.“

Jedna hlavní úloha neznamená, že stránka nemůže mít sekundární odkazy. Znamená to, že když se rozhoduje mezi dvěma prvky, vítězí ten, který pomáhá hlavní úloze. Najednou je jednodušší odmítnout třetí CTA, druhý banner a interní nápad, který je sice milý, ale návštěvníkovi nepomáhá. Kruté? Trochu. Užitečné? Hodně.

### Navrhuj podle rozhodnutí zákazníka

Návštěvník webu se většinou neptá „jakou máte strukturu menu“. V hlavě řeší praktičtější otázky:

- Je to pro mě?
- Řeší to můj problém?
- Vypadá to důvěryhodně?
- Kolik mě to bude stát v penězích, čase nebo riziku?
- Co se stane, když kliknu?

Stránka má tyto otázky zodpovídat v pořadí, ve kterém přirozeně vznikají. Pokud hned nahoře mluvíš o interní technologii, ale návštěvník ještě neví, jaký problém řešíš, začínáš moc hluboko. Pokud naopak slibuješ obecnou „digitální transformaci“ a konkrétní důkazy schováš až dolů, začínáš moc vysoko.

Praktický rámec pro důležitou stránku:

1. Kontext: Pro koho je stránka a jaký problém řeší.
2. Hodnota: Jaký výsledek člověk získá.
3. Důkaz: Reference, ukázka, číslo z vlastního provozu, screenshot nebo konkrétní scénář.
4. Riziko: Co se stane při objednávce, registraci nebo poptávce; jak dlouho to trvá; co návštěvník musí dodat.
5. Další krok: Jedno primární CTA a rozumná sekundární cesta pro člověka, který ještě není připravený.

Tento rámec funguje i bez agresivního trackingu. Stačí sledovat několik agregovaných signálů: návštěvy stránky, klik na hlavní CTA, dokončené formuláře, kvalitu poptávek a časté otázky ze sales nebo supportu.

### Obsah má být součást produktu

U SaaS a odborných služeb není obsah jen marketingová návnada. Je to součást zákaznické zkušenosti. Dobrý článek, dokumentace nebo porovnání může ušetřit obchodní schůzku, snížit nejistotu a přivést lepší leady.

Rozdíl mezi obsahovou položkou a produktovou položkou je často jen v tom, jestli má vlastníka a účel. Článek „co je CRM“ může být generická SEO vata. Článek „jak vybrat CRM pro servisní firmu s 10 techniky“ už může být produktový nástroj: kvalifikuje segment, ukazuje znalost problému a připravuje půdu pro demo.

Při plánování obsahu si proto ke každému tématu napiš:

- Komu přesně pomáhá?
- Jaké rozhodnutí má čtenář po přečtení udělat?
- Jaký další krok je férový, ne manipulativní?
- Jak se téma propojí s produktem, službou nebo dokumentací?
- Dá se obsah udržovat, nebo za půl roku zestárne a bude dělat ostudu?

Privacy-first poznámka: Pokud obsah funguje jako produktový průvodce, nemusíš čtenáře honit přes tři reklamní pixely. Dej mu čistou URL, RSS, interní odkazy, přímý formulář a možnost ozvat se bez toho, aby se cítil jako položka ve sledovacím experimentu.

### Backlog webu místo velkého redesignu

Velký redesign má zvláštní kouzlo. Všichni si slíbí nový začátek, vznikne pár krásných obrazovek a pak se zjistí, že půlka obsahu nemá vlastníka, formuláře nikdo neotestoval a analytika měří staré události. Web jako produkt dává přednost menším iteracím.

Místo jednoho obřího projektu si veď jednoduchý webový backlog:

| Položka | Problém | Dopad | Důkaz | Nejmenší další krok | Vlastník |
| --- | --- | --- | --- | --- | --- |
| Pricing není jasný | Lidé píšou dotazy na rozdíl mezi plány | Zdržuje sales | 6 dotazů za měsíc | Přepsat srovnávací tabulku |  |
| Formulář chce moc údajů | Málo dokončených poptávek | Nižší konverze | Agregované měření odeslání | Odebrat nepovinné pole telefon |  |
| Chybí důkaz pro segment | Návštěvník nevidí podobný use case | Slabší důvěra | Dotazy na reference | Přidat krátkou mini case study |  |

Každá položka má popisovat problém, ne jen řešení. „Přidat video“ je návrh. „Návštěvník nepochopí, jak produkt funguje v prvních 30 sekundách“ je problém. Video může být řešení, ale také nemusí. Někdy stačí screenshot, ukázkový scénář nebo lepší mezititulek. Ano, občas je nudný mezititulek lepší než drahé video. Web umí být krutě praktický.

### Jak měřit web bez zbytečného slídění

Produktové řízení webu nepotřebuje znát identitu každého člověka. Často stačí kombinace čtyř zdrojů:

- agregovaná analytika bez osobního profilování,
- data z formulářů a CRM, která už reálně potřebuješ pro obchod,
- kvalitativní poznámky ze sales, supportu nebo onboardingu,
- pravidelný ruční audit klíčových stránek.

Dobrá otázka pro každý měsíc:

„Která jedna stránka nejvíc brzdí důvěru, pochopení nebo další krok?“

Odpověď nemusí přijít z dashboardu. Může přijít z pěti opakovaných dotazů ve schůzkách, z toho, že lidé nepoznají rozdíl mezi plány, nebo z faktu, že každý nový zákazník potřebuje stejnou ruční navigaci. To jsou produktová data, i když nevypadají jako efektní graf.

### Checklist: Přepnutí webu do produktového režimu

- [ ] Každá klíčová stránka má jednu hlavní úlohu napsanou jednou větou.
- [ ] Homepage do pár sekund říká pro koho jste, co řešíte a kam pokračovat.
- [ ] Primární CTA vede na konkrétní další krok, ne na mlhavé „kontaktujte nás“ bez kontextu.
- [ ] Důležité stránky obsahují důkaz: referenci, ukázku, screenshot, scénář nebo veřejný výsledek.
- [ ] Formuláře sbírají jen údaje, které skutečně potřebujete pro další krok.
- [ ] Existuje jednoduchý backlog webu s vlastníkem a prioritou.
- [ ] Obsah má jasný účel v zákaznické cestě, ne jen SEO naději.
- [ ] Web má RSS nebo jiný přímý odběr obsahu bez závislosti na sociálních sítích.
- [ ] Měříte několik rozhodovacích signálů, ne všechno, co jde technicky zachytit.
- [ ] Jednou měsíčně proběhne krátký audit jedné stránky a uzavře se jedna konkrétní úprava.

### Mini úkol

Vyber jednu stránku, která má největší vliv na obchod nebo aktivaci produktu. Vyplň tuto tabulku:

| Otázka | Odpověď |
| --- | --- |
| Pro koho stránka je? |  |
| Jaký problém má řešit? |  |
| Jaký je jeden hlavní další krok? |  |
| Jaký důkaz stránka ukazuje? |  |
| Které pole, skript nebo prvek lze odstranit? |  |
| Jak poznáme za 30 dní, že změna pomohla? |  |

Potom udělej jednu malou změnu: přepiš první obrazovku, zkrať formulář, přidej konkrétní důkaz nebo odstraň rušivý prvek. Nečekej na dokonalý redesign. Web jako produkt se zlepšuje pravidelným zavíráním malých rozhodnutí.

## Zdroje

- European Commission: Data protection - pravidla ochrany osobních dat v EU a mimo EU: https://commission.europa.eu/law/law-topic/data-protection_en
- European Commission: Legal framework of EU data protection - přehled právního rámce včetně GDPR: https://commission.europa.eu/law/law-topic/data-protection/legal-framework-eu-data-protection_en
- European Data Protection Board: Guidelines 05/2020 on consent under Regulation 2016/679 - pokyny k platnému souhlasu podle GDPR: https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_en

## Pracovní log

- 2026-07-10: Obnoven smysluplný obsah po placeholderu a doplněna kapitola 2 o webu jako produktu, včetně rámce pro stránky, webového backlogu, privacy-first měření, checklistu a mini úkolu.
- 2026-07-10: Založena první verze e-booku: název, cíl, osnova a kapitola 1 o privacy-first základech včetně checklistu, mini úkolu a zdrojů.
