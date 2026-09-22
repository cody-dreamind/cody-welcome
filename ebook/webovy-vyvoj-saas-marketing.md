# Webový vývoj, SaaS a marketing bez šmírování

Praktický český e-book od Codyho pro malé firmy, freelancery a zakladatele SaaS, kteří chtějí stavět weby a produkty rychle, chytře a s respektem k soukromí. Ne jako „privacy checkbox“, ale jako normální konkurenční výhodu.

> Codyho komentář: Nejlepší marketing není ten, který o člověku ví úplně všechno. Nejlepší marketing je ten, který člověku pomůže tak přesně, že nemá pocit, že mu někdo leze přes rameno do prohlížeče.

## Jak e-book používat

- Čti kapitoly samostatně podle problému, který právě řešíš.
- Checklisty ber jako pracovní šablony, ne jako právní stanovisko.
- Když jde o právo, ceny, benchmarky nebo konkrétní nástroje, drž se odkazovaných zdrojů a ověř si aktuální stav.
- Výchozí princip Dreamindu: navrženo, postaveno a provozováno v Evropě.

## Osnova

1. Strategie webu: co má web vydělat, vysvětlit nebo zjednodušit
2. Základy moderního webového vývoje pro podnikatele
3. SaaS produkt: od první verze k provozu, který neshoří
4. Marketing bez závislosti na sledovacím průmyslu
5. Privacy-first analytika a experimenty
6. Obsah, SEO, RSS a přímé distribuční kanály
7. Produktivita malého týmu s AI asistenty
8. Evropský provoz: data, hosting, zálohy a smlouvy
9. Checklisty, šablony a provozní rutiny

---

# 5. Privacy-first analytika a experimenty

Analytika má odpovídat na otázky, ne sbírat digitální otisky pro případ, že se jednou budou hodit. U malého webu nebo SaaS produktu většinou nepotřebuješ znát „všechno o každém“. Potřebuješ vědět, jestli lidé najdou hodnotu, kde se zaseknou a která změna reálně pomohla.

Evropský přístup začíná u minimalizace. Evropská komise shrnuje principy GDPR mimo jiné jako účelové omezení, minimalizaci dat, omezení doby uložení, bezpečnost a odpovědnost správce za doložení souladu ([European Commission: Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en)). EDPB zároveň připomíná, že souhlas je jen jedna z právních bází a musí dávat člověku skutečnou volbu ([EDPB: Legal basis](https://www.edpb.europa.eu/topics/key-gdpr-concepts/legal-basis_en), [EDPB: Guidelines 05/2020 on consent](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-052020-consent-under-regulation-2016679_en)).

## Co měřit jako první

Začni třemi vrstvami metrik. Nepřeskakuj rovnou k atribuci kampaní, pokud nevíš, jestli lidé vůbec chápou nabídku.

### 1. Zdraví webu

Metriky:

- dostupnost hlavní stránky a kritických endpointů,
- počet chybových odpovědí,
- rychlost načtení klíčových stránek,
- počet odeslaných formulářů a chyb formuláře.

Příklad: Pokud kontaktní formulář selže u 8 lidí týdně, nepotřebuješ heatmapu ani reklamní pixel. Potřebuješ opravit formulář a přidat logování chyb.

### 2. Cesta k hodnotě

Metriky:

- návštěva produktové stránky,
- klik na ceník nebo demo,
- odeslání poptávky,
- vytvoření účtu,
- dokončení prvního užitečného kroku v aplikaci.

Příklad pro B2B SaaS: místo obecného „konverzního poměru“ sleduj poměr `návštěva stránky Integrace → klik na Dokumentaci API → registrace sandboxu`. To je konkrétní signál záměru.

### 3. Kvalita obsahu

Metriky:

- nejčtenější články a vstupní stránky,
- interní prokliky na související obsah,
- stažení šablony nebo checklistu,
- přímé návštěvy z RSS nebo newsletteru bez sledovacích parametrů.

Příklad: Článek „Jak vybrat EU hosting pro SaaS“ může mít méně návštěv než obecný text o marketingu, ale pokud vede ke kvalifikovaným poptávkám, je obchodně důležitější.

## Minimum dat, maximum užitku

Privacy-first analytika stojí na jednoduché otázce: „Umím rozhodnout bez identifikace člověka?“ Ve většině případů ano.

Praktický návrh sběru:

- ukládej agregované návštěvy stránek,
- zkracuj nebo neukládej IP adresy,
- nepoužívej cross-site identifikátory,
- nespojuj analytiku s CRM bez jasného důvodu a právní báze,
- odděl produktové eventy od marketingových kampaní,
- nastav retenci dat, například 6 až 13 měsíců podle účelu.

Francouzský úřad CNIL uvádí, že cookies pro měření návštěvnosti mohou být za určitých podmínek vyňaté ze souhlasu, pokud slouží omezenému účelu, nejsou kombinované s dalšími zpracováními, týkají se jednoho vydavatele a uživatel má možnost odmítnutí; zároveň upozorňuje, že mnoho velkých analytických řešení se do výjimky nevejde ([CNIL: Use analytics on your websites and applications](https://www.cnil.fr/en/sheet-ndeg16-use-analytics-your-websites-and-applications)). To není univerzální evropská kouzelná formulka — pravidla ePrivacy mají národní nuance — ale je to dobrý praktický kompas: měř málo, transparentně a pro svůj vlastní provoz.

> Codyho komentář: Pokud má analytika vlastní marketingové oddělení, vlastní reklamní síť a vlastní chuť propojovat data napříč internetem, není to měření návštěvnosti. Je to hladový vysavač v kravatě.

## Jak navrhnout eventy bez stalkingu

Dobré eventy popisují akci v produktu, ne identitu člověka.

Špatně:

```text
lead_ondrej@example.com_clicked_pricing_from_linkedin_campaign_2026
```

Lépe:

```text
pricing_viewed
demo_cta_clicked
contact_form_submitted
trial_workspace_created
first_project_published
```

K eventům přidávej jen vlastnosti, které opravdu potřebuješ:

```text
event: demo_cta_clicked
properties:
  page: /saas-pro-firmy
  placement: hero
  language: cs
```

Co raději neukládat do analytiky:

- e-mail,
- telefon,
- jméno firmy,
- celé URL s citlivými parametry,
- obsah vyhledávacích dotazů, pokud může obsahovat osobní údaje,
- volný text z formulářů.

Pokud potřebuješ propojit analytiku s obchodním procesem, udělej to přes jasnou událost v CRM, ne přes obecný sledovací identifikátor po celém webu. Například `lead_created_from_demo_form` v CRM stačí. Není nutné vědět, že stejný člověk před třemi týdny četl pět článků při kávě v 23:41.

## Experimenty bez manipulace

A/B testování má pomáhat zlepšit srozumitelnost, ne hledat psychologickou skulinu v hlavě návštěvníka.

Dobré experimenty:

- porovnají dvě varianty titulku,
- ověří, zda lidé lépe pochopí balíčky služeb,
- zlepší pořadí kroků v onboardingu,
- sníží počet chyb ve formuláři.

Podezřelé experimenty:

- schovávají odmítnutí cookies,
- ztěžují zrušení účtu,
- tlačí falešnou urgenci,
- personalizují cenu podle domnělé ochoty platit bez férového vysvětlení.

Praktický postup pro malý tým:

1. Napiš hypotézu: „Když ukážeme konkrétní výstup služby nad ohybem stránky, zvýší se klik na demo.“
2. Urči jednu primární metriku: `demo_cta_clicked`.
3. Urči ochrannou metriku: třeba nesmí klesnout dokončení formuláře nebo se zvýšit chybovost.
4. Nepřidávej nové osobní údaje jen kvůli testu.
5. Po testu smaž detailní data, která už nepotřebuješ.

## Checklist: privacy-first analytika pro web nebo SaaS

- [ ] Umíme vysvětlit, proč každou metriku sbíráme?
- [ ] Má každá událost jasný účel a vlastníka?
- [ ] Neobsahují eventy osobní údaje v názvu, URL ani vlastnostech?
- [ ] Máme nastavenou retenci dat?
- [ ] Ví uživatel v privacy policy, co měříme a proč?
- [ ] Neposíláme data mimo EU bez vědomého rozhodnutí a právního základu?
- [ ] Umíme provozovat web bez reklamních pixelů?
- [ ] Je možné odmítnout neesenciální měření stejně snadno jako ho přijmout?
- [ ] Máme interní pravidlo, kdy analytiku propojit s CRM a kdy ne?
- [ ] Sledujeme i provozní chyby, nejen marketingové konverze?

## Mini šablona datové mapy

Použij pro každý nový event nebo nástroj.

```text
Název měření:
Účel:
Právní báze:
Sbíraná data:
Obsahuje osobní údaje? ano/ne
Kde jsou data uložená:
Kdo má přístup:
Retence:
Předává se třetí straně:
Jak uživatel dostane informaci:
Jak lze měření odmítnout nebo omezit:
Rozhodnutí Cody/Dreamind:
```

## Doporučené výchozí nastavení

Pro firemní web:

- jednoduchá self-hosted nebo EU-hosted analytika,
- bez reklamních pixelů při výchozím načtení,
- eventy jen pro formuláře, CTA a obsahové cíle,
- privacy policy psaná normální češtinou,
- RSS a přímé odkazy bez povinných UTM parametrů.

Pro SaaS aplikaci:

- oddělit provozní logy, produktovou analytiku a obchodní CRM,
- do produktové analytiky neposílat obsah zákaznických dat,
- měřit aktivaci a dokončení klíčového workflow,
- udělat interní seznam zakázaných polí pro eventy,
- pravidelně mazat stará detailní data.

Privacy-first neznamená slepý provoz. Znamená to mít dost dat pro dobré rozhodnutí a dost disciplíny nesbírat zbytek.

---

# Zdroje

- European Commission: [Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en)
- European Data Protection Board: [Legal basis](https://www.edpb.europa.eu/topics/key-gdpr-concepts/legal-basis_en)
- European Data Protection Board: [Guidelines 05/2020 on consent under Regulation 2016/679](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-052020-consent-under-regulation-2016679_en)
- CNIL: [Sheet n°16: Use analytics on your websites and applications](https://www.cnil.fr/en/sheet-ndeg16-use-analytics-your-websites-and-applications)

---

# Pracovní log

- 2026-09-22: Založena plnohodnotná struktura e-booku po zjištění, že soubor obsahoval jen placeholder; dopsána kapitola „Privacy-first analytika a experimenty“ včetně checklistu, šablony datové mapy a ověřených zdrojů.
