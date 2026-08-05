# Webový vývoj, SaaS a marketing privacy-first v Evropě

*Praktický e-book od Codyho pro malé týmy, zakladatele a podnikatele, kteří chtějí stavět digitální produkty chytře, udržitelně a bez datového cirkusu.*

## Jak s tímto e-bookem pracovat

Tahle kniha není akademická příručka. Je to pracovní manuál: vezmi kapitolu, projdi checklist, udělej jednu změnu v produktu nebo marketingu a pokračuj dál. Budu psát česky, prakticky a bez předstírání, že každý SaaS potřebuje hned Kubernetes, tři CRM systémy a deset pixelů v patičce. Nepotřebuje. Většinou potřebuje jasnou nabídku, rychlý web, spolehlivý onboarding, kontrolu nad daty a pravidelnou distribuci obsahu.

**Codyho komentář:** privacy-first není „brzda růstu“. Je to disciplína. Nutí tě sbírat méně balastu, lépe vysvětlovat hodnotu a nespoléhat na reklamní magie, které vypadají hezky v dashboardu, ale často nepřinášejí zdravý byznys.

## Osnova

1. **Základ digitálního produktu** — komu sloužíš, jaký problém řešíš a proč má někdo platit právě tobě.
2. **Web jako obchodník, ne vizitka** — struktura homepage, nabídka, důvěra, rychlost, SEO a měření bez šmírování.
3. **SaaS od nápadu k první platbě** — MVP, pricing, onboarding, support, churn a produktová analytika.
4. **Marketing bez závislosti na platformách** — obsah, přímé odkazy, RSS, newsletter s respektem, komunita a partnerství.
5. **Produktivita malého týmu** — rozhodovací rytmus, dokumentace, automatizace a práce s AI asistenty.
6. **Privacy-first provoz v Evropě** — data minimization, EU infrastruktura, logování, analytika, souhlasy a vendor audit.
7. **Růst bez chaosu** — škálování procesů, incidenty, bezpečnost, obchodní metriky a zdravé experimenty.

---

# Kapitola 1: Začni problémem, ne technologií

Nejčastější chyba u webů a SaaS produktů není špatný framework. Je to špatně pojmenovaný problém. Tým začne řešit stack, design systém, logo, doménu a automatizace, ale neumí jednou větou říct, proč by měl zákazník změnit svoje chování. A změna chování je přesně to, co prodáváš: někdo má přestat používat tabulku, agenturu, starý plugin, papír, telefon nebo „nějak to děláme ručně“.

Dobrá první otázka proto není „v čem to napíšeme?“. Dobrá první otázka je:

> Který drahý, častý nebo bolestivý problém umíme zákazníkovi odstranit tak jasně, že nám za to rád zaplatí?

## 1.1 Problém musí být konkrétní

Slabé zadání zní: „Chceme moderní web pro řemeslníky.“ To je mlha. Lepší zadání zní: „Instalatérům v menších městech chodí poptávky chaoticky přes telefon, Messenger a e-mail, takže ztrácí zakázky a večer ručně dohledávají, komu slíbit termín.“

V druhém zadání už vidíš produkt:

- jednoduchý formulář poptávky,
- automatické potvrzení zákazníkovi,
- přehled poptávek podle stavu,
- možnost rychle navrhnout termín,
- týdenní souhrn nevyřízených zakázek.

A hlavně vidíš marketing. Homepage nemusí křičet „digitální transformace služeb“. Může říct: „Už neztraťte zakázku jen proto, že přišla ve špatnou chvíli.“ To je věta, které živnostník rozumí.

## 1.2 Mini průzkum před první verzí

Před psaním kódu si udělej malý, ale poctivý průzkum. Nečekej na statisticky dokonalý vzorek. Potřebuješ zjistit, jestli problém existuje mimo tvoji hlavu.

Praktický postup:

1. Vyber 10 lidí z cílové skupiny.
2. Napiš jim krátce a bez prodejního tlaku.
3. Ptej se na poslední konkrétní situaci, ne na hypotetický zájem.
4. Zapiš přesné věty, které používají.
5. Hledej opakující se bolest, ne komplimenty.

Špatná otázka: „Používali byste aplikaci na správu poptávek?“

Lepší otázky:

- „Kdy naposledy jste ztratil poptávku, protože jste nestihl odpovědět?“
- „Kde dnes evidujete nové zakázky?“
- „Kolik času týdně trávíte dohledáváním zpráv a termínů?“
- „Co se stane, když na poptávku odpovíte až druhý den?“

Když v odpovědích slyšíš „to by bylo fajn“, ještě nic nemáš. Když slyšíš „kvůli tomu jsem minulý měsíc přišel o zakázku za 30 tisíc“, zbystři. Tam začíná byznys.

## 1.3 Nabídka v jedné větě

Každý produkt by měl projít testem jedné věty:

> Pomáháme **[komu]** dosáhnout **[výsledek]** bez **[bolest / riziko / zbytečná práce]**.

Příklady:

- Pomáháme malým servisním firmám vyřídit poptávky rychleji bez ztracených zpráv v telefonu.
- Pomáháme B2B SaaS týmům psát dokumentaci bez rozházených poznámek v pěti nástrojích.
- Pomáháme e-shopům v Evropě měřit obsahový marketing bez reklamních trackerů třetích stran.

Tahle věta není slogan. Je to interní kompas. Když později řešíš feature request, landing page nebo pricing, vracíš se k ní: pomáhá to slíbenému zákazníkovi dosáhnout slíbeného výsledku? Pokud ne, je to možná pěkný nápad, ale teď nepatří do první verze.

## 1.4 Privacy-first už od zadání

Privacy-first produkt nezačíná cookie lištou. Začíná otázkou: „Která data opravdu potřebujeme?“ Evropský sbor pro ochranu osobních údajů shrnuje privacy by design a by default jako přístup, kdy se ochrana dat staví do systémů od začátku a výchozí nastavení chrání jednotlivce co nejvíc. Viz EDPB: [Privacy by design and by default](https://www.edpb.europa.eu/topics/ai-and-technology/privacy-by-design-and-by-default_en) a české pokyny k článku 25 GDPR: [Pokyny 4/2019](https://www.edpb.europa.eu/documents/guideline/guidelines-42019-on-article-25-data-protection-by-design-and-by-default_cs).

V praxi to znamená:

- nesbírej datum narození, když stačí e-mail,
- neposílej data do pěti marketingových nástrojů jen proto, že mají hezké grafy,
- nastav analytiku tak, aby měřila trend a konverzi, ne identitu každého návštěvníka,
- loguj technické chyby, ale dávej pozor na osobní údaje v URL, payloadu a hlavičkách,
- preferuj evropský hosting a nástroje, kde víš, kdo má k datům přístup.

**Codyho komentář:** nejlepší ochrana dat je data vůbec nemít. Druhá nejlepší je mít jich málo, dobře popsaných a pod kontrolou. Nejhorší je mít „někde v integracích“ všechno a pak doufat, že se to v auditu tváří nenápadně. Nebude. Data mají paměť jako slon a compliance oddělení má detektivní sklony.

## 1.5 Checklist první kapitoly

Než začneš navrhovat homepage nebo psát MVP, odpověz si:

- Umím popsat cílového zákazníka konkrétněji než „firmy“ nebo „lidé“?
- Znám poslední reálnou situaci, kdy zákazník problém řešil?
- Vím, kolik ho problém stojí času, peněz, reputace nebo nervů?
- Mám nabídku ve větě „Pomáháme komu dosáhnout čeho bez čeho“?
- Vím, která data jsou nutná pro první verzi a která jsou jen zvědavost?
- Dokážu vysvětlit, proč je moje řešení důvěryhodnější než ruční práce, tabulka nebo konkurence?

Pokud máš u více než dvou bodů odpověď „asi“, nepiš ještě kód. Udělej tři rozhovory, projdi pět konkurenčních webů a přepiš nabídku. Je to levnější než refaktorovat produkt, který nikdo nechce.

---

# Kapitola 2: Web jako obchodník, ne vizitka

Firemní web nemá být digitální nástěnka s logem, fotkou kanceláře a větou „poskytujeme komplexní řešení“. Web má odvést práci obchodníka: rychle vysvětlit hodnotu, získat důvěru, odstranit pochybnosti a nabídnout jasný další krok. Když návštěvník nepochopí do pár vteřin, pro koho web je a co má udělat, nečekej, že bude meditovat nad navigací jako archeolog nad vykopávkou. Odejde.

Dobrá homepage odpovídá na čtyři otázky:

1. Jsem tady správně?
2. Co přesně získám?
3. Proč mám věřit právě vám?
4. Co mám udělat teď?

Všechno ostatní je podpora. Animace, ilustrace, přechody a efektní scroll sekce jsou fajn jen tehdy, když těmto odpovědím pomáhají. Pokud je zakrývají, je to drahá mlha.

## 2.1 Hero sekce: slib, důkaz, akce

Hero sekce je první obchodní rozhovor. Nepatří sem vágní slogan, ale konkrétní slib. Použij strukturu:

> **Výsledek pro konkrétní publikum** + **bez hlavní bolesti** + **jasná akce**.

Slabé:

> Moderní platforma pro efektivnější spolupráci.

Lepší:

> Pomůžeme servisním firmám vyřídit poptávky do 10 minut bez ztracených zpráv v telefonu.

Pod hlavní větu dej krátké vysvětlení, ideálně jednou až dvěma větami. Pak přidej hlavní tlačítko. Ne tři stejně důležitá tlačítka. Jedno hlavní. Druhé může být méně výrazné, třeba „Ukázat demo“ nebo „Přečíst případovou studii“.

Praktická šablona hero sekce:

- Nadpis: „[Výsledek] pro [cílová skupina] bez [bolest].“
- Podnadpis: „[Jak to funguje] za [čas / úsilí / jasný rámec].“
- CTA: „Domluvit konzultaci“, „Vyzkoušet zdarma“, „Získat audit“.
- Důkaz: logo zákazníka, číslo z praxe, krátká citace nebo ukázka produktu.

**Codyho komentář:** když musíš vysvětlovat hero sekci na poradě, na webu nebude fungovat. Návštěvník nemá kontext z interního Notionu. Má jen obrazovku, vlastní problém a omezenou trpělivost.

## 2.2 Důvěra není dekorace

Důvěra na webu nevzniká z ikonky štítu ani z věty „jsme profesionálové“. Vzniká z konkrétnosti. Čím dražší nebo citlivější rozhodnutí po návštěvníkovi chceš, tím víc musíš ukázat, že víš, co děláš.

U B2B webu fungují hlavně tyto typy důkazů:

- konkrétní reference s problémem, řešením a výsledkem,
- ukázka produktu nebo procesu,
- jasně popsané kroky spolupráce,
- jména, role a odpovědnosti lidí za projektem,
- bezpečnostní a provozní informace bez právnické mlhy,
- férově pojmenované limity služby.

Příklad místo obecné reference:

> „Dreamind nám nenasadil jen chatbota. Nejdřív zmapoval, kde zákazníci nejčastěji čekají na odpověď, a až potom automatizoval první reakci. Díky tomu support tým neřeší opakované dotazy ručně.“

Tohle je silnější než „skvělá spolupráce“. Ukazuje situaci, proces i výsledek. Pokud nemáš reference, použij zatím jiné důkazy: veřejný checklist, ukázku auditu, anonymizovaný příklad, krátké video s produktem nebo technický rozbor.

## 2.3 Struktura stránky, která vede k akci

Homepage nemusí být dlouhá jako diplomka. Musí být seřazená podle rozhodování zákazníka. Doporučený pořádek pro menší SaaS nebo službu:

1. **Hero:** komu pomáháš, s čím a jaký je další krok.
2. **Bolest:** pojmenuj problém slovy zákazníka.
3. **Řešení:** ukaž, jak produkt nebo služba problém odstraňuje.
4. **Důkazy:** reference, ukázky, čísla, zkušenosti, proces.
5. **Jak to funguje:** tři až pět kroků od prvního kontaktu po výsledek.
6. **Privacy-first provoz:** kde běží data, co neměříš, jak chráníš zákazníka.
7. **FAQ:** odpovědi na námitky, cenu, bezpečnost, integrace a čas.
8. **Finální CTA:** zopakuj hlavní akci bez nátlaku.

Každá sekce má mít jednu práci. Pokud sekce zároveň vysvětluje produkt, prodává konzultaci, chlubí se historií firmy a láká na newsletter, je to švédský stůl chaosu. Rozděl ji.

## 2.4 Rychlost, přístupnost a SEO jsou součást prodeje

Technická kvalita webu není oddělená od marketingu. Když je web pomalý, rozbitý na mobilu nebo nepřístupný pro část uživatelů, obchodník právě zakopl o vlastní tkaničky. Google popisuje Core Web Vitals jako sadu metrik pro uživatelský zážitek, například načtení hlavního obsahu, odezvu na interakci a vizuální stabilitu stránky. Viz [web.dev: Core Web Vitals](https://web.dev/articles/vitals).

Přístupnost ber jako normální kvalitu, ne speciální režim. WCAG 2.2 stojí na principech, že obsah má být vnímatelný, ovladatelný, srozumitelný a robustní. Viz [W3C: WCAG 2.2](https://www.w3.org/TR/WCAG22/). V praxi to znamená čitelné kontrasty, funkční klávesnici, popsané formuláře, srozumitelné chyby a žádné tlačítko „Klikněte zde“ bez kontextu.

SEO nezačíná trikem, ale srozumitelnou stránkou. Google ve svém průvodci SEO doporučuje mimo jiné vytvářet užitečný obsah pro lidi, používat popisné titulky a pomáhat vyhledávačům stránku pochopit. Viz [Google Search Central: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).

Praktický technický základ:

- každá důležitá stránka má jedinečný `<title>` a meta description,
- nadpisy tvoří logickou hierarchii,
- obrázky mají rozumnou velikost a smysluplný alternativní text,
- formuláře mají popisky, chybové hlášky a potvrzení o odeslání,
- stránka funguje bez invazivních skriptů třetích stran,
- měření sleduje události, které pomáhají zlepšit produkt, ne identitu návštěvníka.

## 2.5 Měření bez šmírování

Privacy-first web pořád může měřit výkon. Jen nepotřebuje vědět, že Franta z Brna ve 22:14 třikrát zaváhal nad ceníkem a pak šel vařit čaj. Potřebuje vědět, jestli lidé rozumí nabídce, odkud přichází kvalitní návštěvnost a kde se ztrácí zájem.

Měř raději:

- návštěvnost podle stránky a zdroje,
- kliknutí na hlavní CTA,
- odeslané formuláře,
- stažení materiálu,
- přechod z článku na nabídku,
- chyby formulářů a technické 404.

Neměř, pokud to nepotřebuješ:

- detailní profilování uživatele napříč weby,
- reklamní identifikátory třetích stran,
- session replay u citlivých formulářů,
- osobní údaje v analytických eventech,
- data, která neumíš vysvětlit zákazníkovi jednou větou.

Privacy-first otázka pro každý měřicí event zní: „Pomůže nám to zlepšit službu nebo rozhodnutí, aniž bychom zbytečně zasahovali do soukromí?“ Pokud ne, event smaž. Dashboard bude menší, ale mozek klidnější.

## 2.6 Checklist druhé kapitoly

Projdi svůj web jako obchodník, ne jako autor webu:

- Je do pěti vteřin jasné, pro koho web je a jaký výsledek slibuje?
- Má homepage jedno hlavní CTA a nepere se s dalšími akcemi?
- Používá text slova zákazníků, ne interní terminologii týmu?
- Obsahuje web konkrétní důkazy důvěry, ne jen obecné fráze?
- Vysvětluje stránka, jak spolupráce nebo produkt funguje krok za krokem?
- Funguje web dobře na mobilu, klávesnici a pomalejším připojení?
- Má každá důležitá stránka jasný titulek, popis a logické nadpisy?
- Měříš jen události, které umíš obhájit z pohledu hodnoty a soukromí?

Pokud chceš rychlou iteraci, neřeš hned redesign. Přepiš hero sekci, přidej jeden konkrétní důkaz a zjednoduš hlavní CTA. To je práce na hodinu, ne rebranding na čtvrtletí. A často to udělá víc než nová animace, která jen elegantně schová nejasnou nabídku.

---

# Kapitola 3: SaaS od nápadu k první platbě

SaaS není aplikace s přihlašováním. SaaS je opakovatelný způsob, jak zákazníkovi pravidelně doručovat hodnotu tak jasně, že za ni platí bez neustálého přemlouvání. Technicky může první verze vypadat skromně. Obchodně ale musí umět tři věci: vyřešit konkrétní problém, dovést člověka k prvnímu výsledku a dát mu férový důvod pokračovat.

První platba není konec validace. Je to začátek ostřejší otázky: „Dostává zákazník hodnotu dost často na to, aby zůstal?“ Pokud ne, máš jen hezky zabalený jednorázový projekt s měsíční fakturou. To není zločin, jen tomu neříkej zdravý SaaS. Slova mají význam, i když marketing občas dělá, že ne.

## 3.1 MVP není ořezaný produkt, ale nejkratší cesta k hodnotě

MVP se často pokazí ve chvíli, kdy tým začne škrtat funkce z vysněného produktu. Výsledek je pak malý, ale pořád zmatený. Lepší otázka zní:

> Jaký nejmenší pracovní tok dovede zákazníka od problému k měřitelnému výsledku?

U nástroje pro správu poptávek to nemusí být CRM, kalendář, automatické nabídky, integrace účetnictví a mobilní aplikace. První užitečný tok může být:

1. zákazník pošle poptávku přes jednoduchý formulář,
2. firma ji vidí v přehledu podle stavu,
3. jedním kliknutím odešle potvrzení nebo návrh dalšího kroku,
4. na konci týdne vidí nevyřízené poptávky.

To je malé, ale má to hodnotu. Neřeší celý život firmy, ale odstraňuje konkrétní ztracené zprávy. MVP má mít ostré hrany na správných místech. Může chybět export do pěti formátů, ale nesmí chybět spolehlivost hlavního toku. Může mít jednoduchý design, ale nesmí být nejasné, co má uživatel udělat.

Praktický test MVP:

- Umí uživatel dokončit hlavní úkol bez školení?
- Vznikne po použití výsledek, který jde ukázat nebo změřit?
- Je jasné, proč je řešení lepší než tabulka, e-mail nebo ruční práce?
- Dá se hodnota doručit bez ruční magie schované za produktem?
- Víme, co musíme měřit, abychom poznali úspěch toku?

Pokud odpověď zní „ještě ne, ale až doděláme modul X“, pozor. Možná nestavíš MVP, ale čekárnu na produkt.

## 3.2 První platba má ověřit závazek, ne jen zájem

Zájem je levný. Platba je dražší, proto je užitečná. Když někdo řekne „to se mi líbí“, dostal jsi kompliment. Když vytáhne kartu, objedná pilot nebo podepíše jednoduchou smlouvu, dostal jsi signál.

U B2B SaaS může první platba vypadat různě:

- měsíční předplatné pro malý tým,
- placený pilot s jasným rozsahem,
- jednorázové nastavení plus následný paušál,
- concierge MVP, kde část práce děláš ručně, ale zákazník platí za výsledek,
- omezený roční závazek s možností výpovědi po ověření hodnoty.

Důležité je nepředstírat, že zdarma znamená validováno. Free trial je užitečný, když přesně víš, jak se člověk dostane k hodnotě a proč potom zaplatí. Pokud trial jen rozdává přístup do prázdné aplikace, měříš hlavně zvědavost. A zvědavost bývá v SaaS metrika typu „hezké, ale nájem to nezaplatí“.

Před první platbou si napiš jednoduchou obchodní hypotézu:

> Zákazník typu **[segment]** zaplatí **[částka / model]**, protože mu produkt pomůže **[výsledek]** do **[čas]** bez **[bolest]**.

Příklad:

> Menší servisní firma zaplatí měsíční paušál za přehled poptávek, protože jí pomůže odpovědět rychleji a snížit počet zapomenutých zpráv během prvního týdne používání.

Když hypotéza neobsahuje segment, výsledek a čas, je příliš měkká. Měkké hypotézy vypadají bezpečně, ale špatně se vyhodnocují. Jsou jako želé v tabulce.

## 3.3 Onboarding: první výsledek dřív než prohlídka funkcí

Onboarding není produktová exkurze. Uživatel nechce poznat všechny záložky. Chce vyřešit důvod, kvůli kterému přišel. Proto navrhuj onboarding kolem prvního výsledku, ne kolem seznamu funkcí.

Dobrý onboarding odpoví:

1. Co mám udělat jako první?
2. Proč to dělám?
3. Kolik kroků zbývá?
4. Kdy uvidím hodnotu?
5. Kde získám pomoc, když se zaseknu?

U B2B produktu často pomáhá ruční asistence v prvních týdnech. Není to ostuda. Je to výzkum v montérkách. Když zákazník ručně importuje data, ptá se na integrace nebo nerozumí názvům polí, dostáváš lepší zpětnou vazbu než z anonymního grafu. Jen si pohlídej, aby ruční práce nebyla trvale nezisková součást produktu.

Praktická onboardingová mapa:

- **Aktivace:** uživatel vytvoří účet, chápe další krok a dokončí základní nastavení.
- **První hodnota:** udělá akci, která řeší jeho problém, třeba založí první poptávku nebo odešle první report.
- **Návyk:** vrátí se v přirozeném rytmu práce, například další den nebo další týden.
- **Důkaz hodnoty:** vidí výsledek, který může obhájit před sebou, týmem nebo šéfem.
- **Rozšíření:** pozve kolegu, přidá další projekt nebo zapne placený plán.

**Codyho komentář:** pokud onboarding potřebuje patnáct e-mailů, čtyři modály a video „jak začít“, možná není problém v nedostatku vysvětlování. Možná produkt ještě neumí podat ruku. Někdy je nejlepší onboarding jedno dobré tlačítko na správném místě.

## 3.4 Metriky, které malý SaaS opravdu potřebuje

Produktová analytika má pomáhat rozhodovat, ne vyrábět pocit kontroly. U první verze nepotřebuješ dvacet dashboardů. Potřebuješ pár metrik, které ukážou, jestli zákazník nachází hodnotu a jestli produkt funguje jako byznys.

Začni těmito otázkami:

- Kolik lidí dorazí na web a kolik jich udělá hlavní akci?
- Kolik nových účtů dokončí první hodnotný krok?
- Jak často se aktivní zákazníci vrací?
- Kolik zákazníků přejde na placený plán nebo zaplatí pilot?
- Proč lidé odchází, ruší nebo přestávají používat produkt?
- Který krok hlavního toku nejčastěji selže?

Privacy-first analytika k tomu nepotřebuje identitu každého návštěvníka. Potřebuje smysluplné události a datovou střídmost. GDPR mezi principy zpracování osobních údajů řadí mimo jiné minimalizaci dat: osobní údaje mají být přiměřené, relevantní a omezené na to, co je nezbytné pro daný účel. Viz oficiální text na [EUR-Lex: GDPR, článek 5](https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=CELEX%3A32016R0679). Privacy by design a by default pak řeší článek 25, tedy ochranu dat zabudovanou do návrhu a výchozího nastavení. Viz [EUR-Lex: GDPR, článek 25](https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=CELEX%3A32016R0679).

Prakticky:

- neposílej do analytiky e-mail, jméno, telefon ani obsah formuláře,
- místo „user_123 koupil plán“ měř agregovaně „trial_to_paid_completed“,
- odděl produktové logy od marketingové analytiky,
- nastav retenci logů podle potřeby, ne podle lenosti,
- dokumentuj účel každého eventu,
- pravidelně maž eventy, které už nikdo nepoužívá.

Méně dat znamená méně rizika, jednodušší vysvětlování zákazníkům a menší šanci, že se z analytiky stane digitální půda plná krabic s nápisem „možná se bude hodit“.

## 3.5 Bezpečnostní minimum před tím, než pustíš zákazníky dovnitř

Jakmile SaaS ukládá zákaznická data, bezpečnost není „až později“. Nemusíš mít hned enterprise bezpečnostní tým, ale musíš mít rozumné minimum. OWASP ASVS popisuje ověřitelné požadavky pro bezpečný vývoj webových aplikací a dá se použít jako praktický kontrolní rámec. Viz [OWASP Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/).

Pro malý SaaS začni tímto minimem:

- přihlašování má bezpečné session, ochranu proti CSRF tam, kde dává smysl, a žádné heslo v logu,
- hesla se ukládají pouze přes vhodné hashování, nikdy jako prostý text,
- role a oprávnění se kontrolují na serveru, ne jen schováním tlačítka v UI,
- každý zákazník vidí jen svá data; multi-tenant izolace je testovaná, ne odhadnutá,
- vstupy se validují na serveru a výstupy se bezpečně escapují,
- zálohy existují a obnova je vyzkoušená,
- chyby se logují tak, aby pomohly vývoji, ale nevyzrazovaly citlivé údaje,
- tajné klíče nejsou v repozitáři a pravidelně se dají rotovat.

Bezpečnostní checklist nepiš jako rituální dokument pro šuplík. Napoj ho na release proces. Před každým větším nasazením si projdi změny v autentizaci, oprávněních, datech, logování a integracích. Pokud přibyl nový vendor, zeptej se znovu: kde budou data, kdo k nim má přístup a jak je smažeme?

## 3.6 Checklist třetí kapitoly

Než budeš první SaaS verzi považovat za hotovou, projdi si:

- Je hlavní pracovní tok kratší než seznam funkcí v prezentaci?
- Dovede MVP zákazníka k měřitelnému výsledku bez ručního vysvětlování?
- Máš obchodní hypotézu se segmentem, cenovým modelem, výsledkem a časem?
- Ověřuje první platba závazek, ne jen sympatie ke slidu?
- Onboarding vede k první hodnotě, ne k prohlídce celé aplikace?
- Měříš aktivaci, návratnost, konverzi a odchod bez zbytečných osobních údajů?
- Máš popsané bezpečnostní minimum pro účty, oprávnění, logy, zálohy a tajné klíče?
- Umíš zákazníkovi česky vysvětlit, kde běží jeho data a proč je to bezpečné?

První verze SaaS má být malá, ale dospělá. Malá v rozsahu, dospělá v odpovědnosti. Když zákazník svěří produktu data, čas a peníze, není to beta hračka. Je to slib. A sliby se v dobrém SaaS neřeší až ve verzi 2.0.

## Zdroje

- EUR-Lex: [Nařízení GDPR 2016/679, článek 5 a 25](https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=CELEX%3A32016R0679)
- OWASP Foundation: [Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/)
- European Data Protection Board: [Privacy by design and by default](https://www.edpb.europa.eu/topics/ai-and-technology/privacy-by-design-and-by-default_en)
- European Data Protection Board: [Pokyny 4/2019 k článku 25 — záměrná a standardní ochrana osobních údajů](https://www.edpb.europa.eu/documents/guideline/guidelines-42019-on-article-25-data-protection-by-design-and-by-default_cs)
- web.dev: [Core Web Vitals](https://web.dev/articles/vitals)
- W3C: [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)
- Google Search Central: [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

## Pracovní log

- 2026-08-05: Dopsána kapitola 3 o SaaS cestě k první platbě: MVP, validace platbou, onboarding, privacy-first metriky, bezpečnostní minimum a checklist.
- 2026-08-05: Dopsána kapitola 2 o webu jako obchodníkovi: hero sekce, důvěra, struktura homepage, technická kvalita, privacy-first měření a checklist.
- 2026-08-05: Vytvořena základní struktura e-booku, úvod, osnova a dokončená kapitola 1 o definici problému, nabídce a privacy-first zadání produktu.
