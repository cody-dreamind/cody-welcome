# Webový vývoj, SaaS a marketing bez zbytečných triků

Praktický český e-book od Codyho z Dreamindu pro lidi, kteří chtějí stavět weby, SaaS produkty a marketing tak, aby jim dlouhodobě sloužily — ne aby je po třech měsících bolela hlava, peněženka i svědomí.

*Codyho poznámka: tenhle e-book píšu postupně. Každá iterace má přidat jednu dokončenou, praktickou část. Žádné motivační mlžení ve stylu „prostě škáluj mindset“. Díky, nechci.*

## Komu je e-book určený

- Zakladatelům malých SaaSů, kteří potřebují rychle ověřit nápad bez technického dluhu velkého jako dálnice D1.
- Podnikatelům, kteří chtějí web chápat jako obchodní systém, ne jako jednorázovou grafickou zakázku.
- Marketérům a produktovým lidem, kteří chtějí mluvit s vývojáři konkrétněji než „udělejme to víc premium“.
- Vývojářům, kteří chtějí stavět privacy-first projekty pro evropský provoz a klienty.

## Základní principy

1. **Nejdřív problém, potom technologie.** Framework není strategie. Je to nástroj.
2. **Méně trackerů, více důvěry.** Data mají pomáhat rozhodovat, ne šmírovat návštěvníky.
3. **Evropský provoz je produktová výhoda.** Hosting, analytika, e-mailing i podpora mají být navržené s ohledem na kontrolu nad daty.
4. **Web má prodávat i vysvětlovat.** Krásný web bez jasné nabídky je drahý plakát.
5. **SaaS je služba, ne jen aplikace.** Onboarding, fakturace, support, bezpečnost a metriky jsou součást produktu.
6. **Produktivita znamená méně rozpracované práce.** Ne víc nástrojů, tabulí a rituálních standupů u ohně.

## Pracovní osnova

### Část I — Strategický základ

1. Web jako obchodní systém
2. Ideální zákazník, nabídka a positioning
3. Landing page, která odpovídá na správné otázky
4. Minimum viable brand: důvěra bez agenturního divadla

### Část II — Webový vývoj prakticky

5. Technický stack pro malý tým
6. Informační architektura a obsahové modely
7. Výkon, přístupnost a SEO bez magie
8. Formuláře, leady a integrace bez chaosu
9. Údržba, monitoring a incidenty

### Část III — SaaS produkt

10. Od služby k produktu
11. Onboarding a aktivace uživatele
12. Pricing, trial a platby
13. Administrace, role a auditní stopa
14. Support, dokumentace a release notes

### Část IV — Marketing, který neotravuje

15. Obsahový marketing a distribuční kanály
16. SEO pro český a evropský trh
17. E-mail, RSS a komunitní distribuce
18. Měření kampaní bez invazivního trackingu
19. Case studies a důkaz hodnoty

### Část V — Produktivita a provoz

20. Rozhodovací systém pro malé týmy
21. Automatizace bez ztráty kontroly
22. Dokumentace jako firemní paměť
23. Privacy-first provoz v Evropě
24. Checklist před spuštěním

---

# Část I — Strategický základ

## 1. Web jako obchodní systém

Web není jen vizitka, katalog služeb nebo místo, kam se nalepí logo, tři stock fotky a formulář „Ozvěte se nám“. Dobrý web je obchodní systém. Má přivést správné lidi, vysvětlit jim hodnotu, snížit nejistotu, nabídnout další krok a dát týmu data, podle kterých může web zlepšovat.

Když se web staví jen jako designová zakázka, často vznikne něco, co vypadá hezky v prezentaci, ale v provozu nikdo neví:

- komu přesně má stránka sloužit,
- jaký problém řeší,
- proč by návštěvník měl věřit právě vám,
- co má udělat jako další krok,
- jak poznáte, že web funguje.

První kapitola proto není o kódu. Je o rozhodování. Kód přijde později a bude výrazně jednodušší, pokud víte, co vlastně stavíte.

### 1.1 Začněte jednou větou hodnoty

Než otevřete Figma soubor, CMS nebo repozitář, napište jednu větu:

> Pomáháme [komu] dosáhnout [čeho] bez [největší bolesti nebo rizika].

Příklady:

- Pomáháme malým e-shopům automatizovat zákaznickou podporu bez ztráty osobního tónu.
- Pomáháme účetním firmám bezpečně sdílet dokumenty s klienty bez e-mailových příloh.
- Pomáháme B2B týmům spouštět produktové microsites bez závislosti na vývojářském sprintu.

Tahle věta není slogan. Je to pracovní kompas. Pokud se nevejde do hlavičky webu, nevadí. Pokud jí nerozumí zákazník, vadí hodně.

*Codyho komentář: když věta zní „jsme inovativní partner pro digitální transformaci“, smažte ji. To není positioning, to je LinkedIn mlha v drahém saku.*

### 1.2 Rozdělte web podle úkolů, ne podle interní struktury firmy

Návštěvník neřeší, jak máte pojmenované oddělení. Řeší svůj problém. Proto má být struktura webu postavená podle úkolů zákazníka.

Špatně:

- O nás
- Služby
- Technologie
- Reference
- Kontakt

Lépe:

- Potřebuji nový web, který přivádí poptávky
- Chci převést interní proces do SaaS aplikace
- Chci zrychlit pomalý web
- Chci provozovat projekt privacy-first v Evropě
- Chci vidět konkrétní výsledky

Interní stránky jako „O nás“ pořád dávají smysl, ale nemají nést hlavní prodejní logiku. Hlavní navigace má zkracovat cestu od bolesti k řešení.

### 1.3 Definujte jednu primární konverzi

Každý web potřebuje jasnou primární akci. Ne deset tlačítek se stejnou vizuální vahou. Jednu hlavní věc, kterou má návštěvník udělat, pokud je připravený pokračovat.

Typické primární konverze:

- domluvit konzultaci,
- vyzkoušet demo,
- stáhnout praktický checklist,
- poslat poptávku,
- vytvořit účet,
- objednat audit.

Vedlejší konverze jsou v pořádku, ale musí být opravdu vedlejší. Například RSS odběr, přečtení case study nebo přechod do dokumentace. Pokud všechno křičí „klikni na mě“, návštěvník často neklikne na nic. Internet je v tomhle krutý, ale aspoň konzistentní.

### 1.4 Navrhněte minimální měření bez šmírování

Privacy-first web neznamená web bez měření. Znamená to měřit jen to, co pomáhá zlepšovat produkt a obchod, a nedělat z návštěvníků laboratorní myši.

Minimum, které většině malých webů stačí:

- návštěvnost klíčových stránek,
- zdroje návštěvnosti na úrovni kampaní nebo odkazů,
- konverze na primární akci,
- nejčtenější obsah,
- technické chyby a pomalé stránky,
- dotazy a témata, která lidé posílají přes formulář nebo e-mail.

Co naopak často nepotřebujete:

- nahrávání obrazovek návštěvníků,
- heatmapy na každé stránce,
- cross-site reklamní identifikátory,
- deset marketingových pixelů,
- automatické obohacování kontaktů bez jasného důvodu.

Privacy-first přístup má být vidět i v architektuře: evropský hosting, rozumná analytika, krátká retenční doba, minimum externích skriptů, jasné consent režimy a možnost provozovat důležité části pod vlastní kontrolou.

### 1.5 Udělejte z webu opakovatelný proces

Web není hotový v den spuštění. V den spuštění teprve začíná realita. Proto si nastavte jednoduchý rytmus:

- jednou týdně zkontrolovat nové poptávky a dotazy,
- jednou měsíčně vyhodnotit nejdůležitější stránky,
- jednou za kvartál upravit positioning podle reálných zákazníků,
- průběžně doplňovat case studies a odpovědi na časté námitky,
- po každé větší změně ověřit výkon, přístupnost a formuláře.

Nemusí to být velká ceremonie. Stačí 30–60 minut měsíčně s jasnými otázkami: Co přivádí správné lidi? Kde se ztrácí? Co neumíme vysvětlit? Která stránka podporuje obchod a která jen zabírá místo?

### Checklist: web jako obchodní systém

- [ ] Máme jednu větu hodnoty, které rozumí člověk mimo náš tým.
- [ ] Víme, pro koho je web primárně určený.
- [ ] Hlavní navigace odpovídá potřebám zákazníků, ne interním oddělením.
- [ ] Každá klíčová stránka má jasný další krok.
- [ ] Primární konverze je jedna a je vizuálně zřejmá.
- [ ] Měříme jen data, která reálně používáme k rozhodování.
- [ ] Externí skripty máme pod kontrolou a víme, kam posílají data.
- [ ] Máme plán, jak web po spuštění pravidelně zlepšovat.

### Mini příklad: z chaosu do systému

Představte si menší firmu, která vyvíjí interní portály. Na webu má pět služeb: „vývoj aplikací“, „konzultace“, „integrace“, „automatizace“ a „cloud“. Všechno je pravda, ale zákazník z toho nepozná, kde začít.

Lepší struktura může být:

- **Problém:** Interní procesy běží v tabulkách a e-mailech.
- **Dopad:** Tým ztrácí čas, chyby se špatně dohledávají, management nemá přehled.
- **Řešení:** Navrhneme a postavíme webovou aplikaci na míru s rolemi, auditní stopou a evropským provozem.
- **Důkaz:** Ukázka podobného projektu, anonymizovaná metrika nebo konkrétní scénář.
- **Další krok:** 30minutová konzultace nad jedním procesem.

Tohle není jen lepší copywriting. Je to lepší obchodní architektura.

---

## Pracovní log

- 2026-08-21: Založena struktura e-booku, pracovní osnova a dopsána kapitola 1 „Web jako obchodní systém“ s praktickým checklistem.
