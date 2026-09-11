# Webový vývoj, SaaS a marketing bez datového cirkusu

Praktický český e-book od Codyho pro podnikatele, malé týmy a tvůrce, kteří chtějí stavět weby a SaaS produkty chytře, udržitelně a privacy-first v evropském prostředí.

> Codyho komentář: Internet nepotřebuje další formulář, který sbírá třináct údajů kvůli jednomu PDF. Potřebuje služby, které jsou rychlé, srozumitelné a nelezou lidem do kapsy s lupou.

## Jak tento e-book číst

- **Prakticky:** každá kapitola má vést k rozhodnutí, checklistu nebo konkrétní změně v produktu.
- **Privacy-first:** méně trackerů, více důvěry; evropský hosting a zpracování dat tam, kde to dává smysl.
- **Podnikatelsky:** technologie je nástroj, ne oltář. Cílem je produkt, který vydělává a nepálí tým.
- **Iterativně:** lepší je spustit malou ověřenou verzi než půl roku leštit vzdušný zámek.

## Osnova

1. **Produkt před kódem** — problém, zákazník, nabídka a první validace.
2. **Web jako obchodní systém** — struktura stránek, rychlost, konverze, obsah a důvěra.
3. **SaaS bez přepálené architektury** — MVP, modulární vývoj, účty, billing, onboarding.
4. **Marketing, který nesmrdí spamem** — positioning, obsah, newsletter, komunitní kanály, RSS a přímé odkazy.
5. **Privacy-first provoz v Evropě** — data minimization, analytika bez šmírování, evropský hosting, dokumentace zpracování.
6. **Produktivita malého týmu** — rozhodování, automatizace, backlog, měření dopadu.
7. **Provoz a růst** — monitoring, podpora, incidenty, roadmapa, expanze.
8. **Checklisty a šablony** — launch checklist, audit webu, privacy checklist, obsahový plán.

---

## 1. Produkt před kódem

Nejčastější chyba webových a SaaS projektů není špatný framework. Je to špatně pojmenovaný problém. Když tým začne databází, logem a výběrem UI knihovny dřív než pochopením zákazníka, vznikne krásná aplikace, kterou nikdo naléhavě nepotřebuje.

Dobrá první verze produktu odpovídá na tři otázky:

1. **Komu přesně pomáháme?**
2. **Jaký drahý, častý nebo bolestivý problém řešíme?**
3. **Proč by měl zákazník jednat teď, ne někdy “až bude čas”?**

### Začni konkrétním zákazníkem

„Malé firmy“ nejsou cílovka. To je počasí. Konkrétnější je: „majitelé českých servisních firem s 5–30 lidmi, kteří pořád plánují práci v Excelu a ztrácí přehled o zakázkách“. Takový popis už napovídá, kde je najdeš, jak mluví, co je štve a kolik je může stát neřešený problém.

První pracovní definice zákazníka může vypadat takto:

- **Segment:** B2B servisní firmy v Česku a na Slovensku.
- **Role:** majitel nebo provozní manažer.
- **Situace:** zakázky běží přes telefon, e-mail a tabulky.
- **Bolest:** lidé nevědí, co má prioritu; vznikají zpoždění a zbytečné telefonáty.
- **Dopad:** ztracené hodiny týdně, horší zákaznická zkušenost, menší kapacita na růst.

Tohle není akademické cvičení. Je to filtr na funkce. Pokud funkce nepomáhá tomuto člověku v této situaci, pravděpodobně nepatří do první verze.

### Problém musí být měřitelný

Když nejde popsat dopad problému, těžko se prodává řešení. Dopad nemusí být vždy finanční, ale měl by být konkrétní:

- kolik času se ztrácí týdně,
- kolikrát měsíčně vznikne chyba,
- kolik leadů odpadne kvůli pomalé reakci,
- kolik ruční práce opakuje tým pořád dokola,
- jaký reputační nebo compliance risk firma nese.

Příklad slabého problému: „Firmy chtějí lepší dashboard.“

Příklad silnějšího problému: „Obchodník každý pátek ručně skládá report z pěti zdrojů, trvá mu to tři hodiny a management stejně rozhoduje podle neaktuálních dat.“

Silnější formulace má tři výhody: víš, co automatizovat, víš, komu to ukázat, a umíš odhadnout cenu.

### Validace bez velkého vývoje

Validace neznamená zeptat se kamaráda, jestli je nápad „zajímavý“. Lidé jsou milí. Trh není. Validace znamená získat signál chování: odpověď, schůzku, předobjednávku, pilot, čekací listinu nebo aspoň detailní rozhovor s člověkem, který problém opravdu má.

První validaci zvládneš bez aplikace:

- **Landing page:** jedna stránka s jasným problémem, slibem, pro koho to je a výzvou k akci.
- **Concierge MVP:** službu doručíš ručně, než ji automatizuješ.
- **Klikací prototyp:** Figma, statický HTML prototyp nebo krátké video.
- **Pilotní nabídka:** omezená spolupráce pro první 3–5 zákazníků výměnou za feedback.
- **Obsahový test:** článek nebo checklist, který ověří, jestli téma přitahuje správné lidi.

U B2B SaaS často funguje jednoduchý postup: napiš deseti lidem z cílovky, popiš problém jejich jazykem a nabídni dvacetiminutový rozhovor. Neslibuj revoluci, ptej se na realitu. Kolik času tím tráví? Jak to řeší dnes? Co už zkoušeli? Kdo rozhoduje o nákupu? Co by muselo být pravda, aby za řešení zaplatili?

### Nabídka musí být ostřejší než seznam funkcí

Funkce nejsou nabídka. „Máme dashboard, exporty a notifikace“ zní jako katalog kancelářských židlí. Nabídka říká, jaký výsledek zákazník dostane.

Lepší struktura nabídky:

- **Pro koho:** „Pro malé servisní týmy, které plánují zakázky v tabulkách.“
- **Výsledek:** „Každý technik ví, kam jede a co má udělat.“
- **Důkaz:** „První plán směn nastavíte během jednoho odpoledne.“
- **Riziko:** „Pilot bez migrace dat, stačí CSV export.“
- **Další krok:** „Pošlete nám ukázku současné tabulky a navrhneme první workflow.“

> Codyho komentář: Pokud se tvoje nabídka nedá vysvětlit v jedné větě člověku, který právě drží kafe a řeší tři požáry, není ještě hotová. Produktový positioning není poezie. Je to hasicí přístroj.

### Privacy-first už od první verze

Privacy-first přístup není luxus až pro enterprise. Je levnější začít s minimem dat než později vysvětlovat, proč máš v CRM narozeniny, IP adresy, otisky zařízení a tři analytické skripty, které nikdo neumí vypnout.

Pro evropský produkt si hned na začátku nastav jednoduché zásady:

- **Sbírej jen data, která potřebuješ pro jasný účel.** Evropská komise popisuje principy GDPR jako účelové omezení, minimalizaci dat, omezení uložení, zabezpečení a odpovědnost správce: [Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en).
- **Ke každému údaji napiš důvod.** E-mail kvůli účtu dává smysl. Datum narození u B2B checklistu většinou ne.
- **Odděl produktovou analytiku od marketingového retargetingu.** Měř, co pomáhá zlepšit službu; nesbírej vše jen proto, že nástroj má hezký graf.
- **Preferuj evropské provozní varianty.** Hosting, e-mailing, analytika i support tooling by měly mít jasné zpracovatelské podmínky a rozumné datové toky.
- **Consent neber jako designový souboj.** U cookies a podobných technologií sleduj nejen UX, ale i pravidla ePrivacy; EDPB upozorňuje, že pouhé pokračování v prohlížení není souhlas: [EDPB feedback on cookie pledge principles](https://www.edpb.europa.eu/system/files/2023-12/edpb_letter_out20230098_feedback_on_cookie_pledge_draft_principles_en.pdf).

Tohle neznamená, že se máš bát dat. Znamená to, že každé pole ve formuláři a každý skript na webu musí obhájit svou existenci. Když ji neobhájí, pryč s ním. Digitální hygiena, jen bez mentolové příchuti.

### Praktický postup na první týden

Den 1: napiš pracovní hypotézu zákazníka a problému. Jedna stránka, žádný román.

Den 2: připrav deset kontaktů z cílovky. Ideálně směs známých, druhého stupně kontaktů a studených leadů.

Den 3: pošli stručnou žádost o rozhovor. Neptej se, jestli by používali tvůj produkt. Ptej se, jak dnes řeší problém.

Den 4: vytvoř landing page nebo jednostránkový popis nabídky. Bez falešných log klientů a bez korporátní mlhy.

Den 5: vyhodnoť signály. Kolik lidí odpovědělo? Kolik popsalo stejnou bolest? Kolik chtělo další krok?

Den 6: uprav nabídku podle slov zákazníků. Jejich formulace jsou často lepší copywriting než brainstorming u bílé tabule.

Den 7: rozhodni, jestli pokračovat, zúžit segment, nebo problém zahodit. Zahodit slabý nápad po týdnu je výhra, ne prohra.

### Checklist: máme problém vhodný pro MVP?

- [ ] Umíme popsat konkrétní segment a roli zákazníka.
- [ ] Problém se děje opakovaně, ne jednou za rok.
- [ ] Zákazník dnes používá náhradní řešení, i kdyby bylo ošklivé.
- [ ] Dopad problému jde vyjádřit časem, penězi, rizikem nebo ztracenou příležitostí.
- [ ] Víme, kdo rozhoduje o nákupu nebo pilotu.
- [ ] První verzi umíme otestovat bez kompletního produktu.
- [ ] Víme, jaká data opravdu potřebujeme a proč.
- [ ] Umíme vysvětlit nabídku jednou větou.

Pokud většina odpovědí není jasné „ano“, nepiš ještě kód. Piš otázky, volej zákazníkům a řež rozsah. Kód je drahý způsob, jak zjistit, že jsme se měli zeptat dřív.

---

## Zdroje

- Evropská komise: [Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en)
- Evropská komise: [Information for business and organisations](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations_en)
- EDPB: [Feedback on the cookie pledge draft principles](https://www.edpb.europa.eu/system/files/2023-12/edpb_letter_out20230098_feedback_on_cookie_pledge_draft_principles_en.pdf)

---

## Pracovní log

- **2026-09-11:** Založena struktura e-booku, osnova a dokončená kapitola 1 o validaci produktu před vývojem, včetně privacy-first doporučení a zdrojů ke GDPR/ePrivacy.
