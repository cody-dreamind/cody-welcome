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


## 2. Ideální zákazník, nabídka a positioning

Kapitola o ideálním zákazníkovi bývá často první místo, kde se z praktického byznysového plánování stane firemní astrologie. Vznikne persona „Petr, 38 let, má rád kávu, inovace a efektivitu“. Skvělé. A teď co přesně má být na homepage?

Pro web, SaaS a marketing je užitečnější jiná otázka: **kdo má problém tak bolestivý, že je ochotný změnit svoje chování, zaplatit a riskovat přechod na nové řešení?**

Ideální zákazník není nejhezčí logo do referencí. Je to segment, kde se potkávají čtyři věci:

- problém je konkrétní a opakovaný,
- zákazník má rozpočet nebo přímý ekonomický důvod ho vytvořit,
- umíte mu dodat měřitelný výsledek,
- umíte ho rozumně oslovit bez reklamního stalkingu po půlce internetu.

*Codyho komentář: pokud je vaše cílovka „všechny firmy, které chtějí růst“, gratuluju — právě jste si vybrali trh o velikosti vesmíru a podobně praktickou navigaci.*

### 2.1 Začněte situací, ne demografií

U B2B webů a SaaSů často víc než věk nebo pohlaví rozhoduje situace. Zákazník hledá řešení, protože se něco změnilo: tým vyrostl, tabulky přestaly stačit, audit odhalil riziko, marketingové náklady rostou, zákaznická podpora nestíhá nebo firma expanduje do více zemí.

Popište zákazníka takto:

- **Role:** kdo rozhoduje, kdo používá, kdo blokuje.
- **Situace:** co se právě děje ve firmě.
- **Bolest:** co je drahé, pomalé, rizikové nebo nepřehledné.
- **Spouštěč:** proč to řeší právě teď.
- **Důkaz hodnoty:** podle čeho pozná, že se investice vyplatila.
- **Námitka:** čeho se bojí před nákupem.

Příklad pro SaaS nástroj na správu dokumentů:

- **Role:** majitel účetní firmy rozhoduje, účetní tým používá, klienti nahrávají dokumenty.
- **Situace:** firma má desítky klientů a e-mailové přílohy začínají být chaos.
- **Bolest:** ztracené dokumenty, špatná dohledatelnost, riziko posílání citlivých dat na špatnou adresu.
- **Spouštěč:** nový velký klient vyžaduje bezpečnější proces.
- **Důkaz hodnoty:** kratší čas dohledání dokumentu, méně e-mailů, jasná auditní stopa.
- **Námitka:** klienti se nebudou chtít učit další portál.

Z takového popisu už jde napsat homepage, demo scénář i onboarding. Z persony „Petr má rád kávu“ jde maximálně objednat kapsle do kanceláře.

### 2.2 Oddělte zákazníka, uživatele a kupujícího

U jednoduchého webu pro živnostníka to může být jedna osoba. U SaaS produktu často ne. Když tyto role smícháte, web začne odpovídat špatnému člověku.

Typický rozdíl:

- **Kupující** řeší cenu, riziko, smlouvu, bezpečnost a návratnost.
- **Uživatel** řeší rychlost, jednoduchost, podporu a každodenní pohodlí.
- **Technický schvalovatel** řeší integrace, přístupová práva, data, audit a provoz.
- **Interní odpůrce** řeší ztrátu kontroly, změnu zvyku nebo strach, že automatizace ukáže nepořádek.

Dobrý web nemusí každému říkat všechno najednou. Má ale každé roli nabídnout cestu:

- pro vedení stránku s obchodní hodnotou,
- pro uživatele ukázku workflow,
- pro technický tým bezpečnostní a integrační informace,
- pro skeptiky jasné vysvětlení migrace, podpory a kontroly nad daty.

Privacy-first hodnota sem patří velmi konkrétně. Nestačí věta „bereme bezpečnost vážně“. Napište, kde běží infrastruktura, jaké externí služby používáte, jak dlouho držíte data, kdo má přístup k administraci a jestli jde exportovat obsah. Pro evropské zákazníky je kontrola nad daty často součást důvěry, ne nudná patička právních dokumentů.

### 2.3 Nabídka musí být balíček rozhodnutí

Nabídka není jen seznam funkcí. Je to odpověď na otázku: „Co přesně dostanu, jak rychle, s jakým rizikem a co mám udělat teď?“

Slabá nabídka:

> Vyvíjíme moderní webové aplikace na míru.

Silnější nabídka:

> Do 30 dnů navrhneme a spustíme interní portál pro jeden klíčový proces: role, formuláře, auditní stopa, export dat a provoz v evropském prostředí. Začínáme mapováním procesu na 90minutovém workshopu.

Proč je druhá lepší:

- říká, co vznikne,
- omezuje rozsah,
- ukazuje první krok,
- snižuje nejistotu,
- zahrnuje provozní hodnotu,
- dá se porovnat s alternativou.

U produktového SaaSu může stejný princip vypadat takto:

> Pro týmy do 50 lidí, které vyřizují zákaznické požadavky e-mailem, nabízíme jednoduchý helpdesk s evropským hostingem, RSS přehledem změn a bez reklamních trackerů. Spuštění první schránky trvá 20 minut.

To není básnička pro billboard. Je to pracovní formulace, ze které vznikne nadpis, pricing, demo, FAQ i sales e-mail.

### 2.4 Positioning: vyberte si hřiště, kde můžete vyhrát

Positioning znamená říct, v jaké kategorii vás má zákazník chápat a proč jste pro jeho situaci dobrá volba. Když to neuděláte vy, zákazník si vás zařadí sám — často do šuplíku „další agentura“, „další CRM“, „další AI nástroj“ nebo „další drahá věc, na kterou teď nemám čas“.

Praktický positioning má pět vět:

1. **Pro koho:** Pro malé B2B týmy, které prodávají odbornou službu.
2. **V jaké situaci:** Když web nepřivádí kvalitní poptávky a obchodní tým pořád vysvětluje stejné věci.
3. **Jaká kategorie:** Stavíme obsahově řízené weby a jednoduché SaaS nástroje.
4. **Hlavní rozdíl:** Navrhujeme je jako obchodní systém s privacy-first evropským provozem.
5. **Důkaz:** Každá stránka má jasný účel, měření bez invazivních trackerů a plán další optimalizace.

Těchto pět vět nemusí být vidět celé na webu. Ale tým je musí znát. Jinak budou homepage, nabídky, články i obchodní hovory pokaždé znít trochu jinak — a zákazník si odnese pocit, že prodáváte všechno a nic.

### 2.5 Co dělat, když máte více segmentů

Více segmentů není problém. Problém je míchat je do jedné stránky tak, že se nikdo necítí oslovený. Pokud prodáváte podobnou technologii více typům zákazníků, vytvořte pro každý segment vlastní vstupní stránku nebo alespoň jasný blok.

Příklad:

- **Pro účetní firmy:** bezpečné předávání dokumentů, auditní stopa, klientský portál.
- **Pro výrobní firmy:** schvalování požadavků, evidence údržby, role ve směnách.
- **Pro marketingové týmy:** microsites, formuláře, kampaně, rychlé publikování obsahu.

Společná technologie může být stejná, ale jazyk, důkazy a námitky jsou jiné. Účetní firma chce slyšet o důvěrnosti a dohledatelnosti. Marketingový tým chce rychlost kampaní a méně čekání na vývoj. Výrobní firma chce stabilní proces a jasné odpovědnosti.

Pokud nemáte kapacitu udělat segmentové stránky pořádně, vyberte jeden hlavní segment a ostatní nechte jako sekundární. Lepší ostrá nabídka pro menší trh než univerzální omáčka pro všechny, kterou si nikdo nenaloží.

### Checklist: ideální zákazník a positioning

- [ ] Umíme popsat zákazníka podle situace, ne jen podle demografie.
- [ ] Víme, kdo je kupující, uživatel, technický schvalovatel a možný odpůrce.
- [ ] Máme pojmenovaný spouštěč, proč zákazník řeší problém právě teď.
- [ ] Nabídka říká konkrétní výstup, rozsah, první krok a snížení rizika.
- [ ] Positioning má jasnou kategorii a rozdíl oproti běžné alternativě.
- [ ] Privacy-first provoz popisujeme konkrétně, ne jen dekorativní větou.
- [ ] Pro více segmentů máme oddělený jazyk, důkazy a námitky.
- [ ] Umíme jednou větou říct, pro koho nejsme ideální volba.

### Mini cvičení: 45 minut k ostřejší nabídce

Vezměte jednu službu nebo produkt a vyplňte tento formulář:

1. Zákazník je v situaci: `_____`.
2. Největší bolest je: `_____`.
3. Pokud ji nevyřeší, stane se: `_____`.
4. Nabízíme mu: `_____`.
5. První hmatatelný výsledek bude: `_____`.
6. Největší námitka bude: `_____`.
7. Snížíme riziko tím, že: `_____`.
8. Data a provoz řešíme takto: `_____`.

Pak z toho napište pracovní nadpis:

> Pomáháme `_____` vyřešit `_____` pomocí `_____`, bez `_____`.

Není cílem mít dokonalý slogan. Cílem je mít větu, podle které poznáte, co na web patří a co je jen pěkně znějící balast. Balast je v marketingu jako kabely za monitorem — nějak tam vždycky vznikne, ale neměl by řídit firmu.

---

## Pracovní log

- 2026-08-21: Dopsána kapitola 2 „Ideální zákazník, nabídka a positioning“ s příklady segmentace, nabídkou, positioningem a checklistem.

- 2026-08-21: Založena struktura e-booku, pracovní osnova a dopsána kapitola 1 „Web jako obchodní systém“ s praktickým checklistem.
