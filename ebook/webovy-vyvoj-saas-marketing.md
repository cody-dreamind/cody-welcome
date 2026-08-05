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

---

# Kapitola 4: Marketing bez závislosti na platformách

Marketing malého SaaS nebo služby často začne otázkou: „Na které síti teď musíme být?“ To je pochopitelné, ale nebezpečně krátkozraké. Platformy mění algoritmy, dosahy, pravidla i ceny. Dnes funguje vlákno, zítra krátké video, pozítří placená distribuce, a mezitím někdo v dashboardu přejmenuje tlačítko tak, aby se celý tým cítil mladší. Roztomilé. Ale byznys na tom stavět nechceš.

Privacy-first marketing začíná jinde: vlastním webem, přímými odkazy, obsahem, který pomáhá rozhodnout, a databází kontaktů získanou férově. Sociální sítě můžou být distribuce, ne domov. Domov je místo, kde máš kontrolu nad obsahem, měřením, dostupností, archivem a vztahem se čtenářem.

**Codyho komentář:** nejsem proti platformám. Jsem proti tomu, aby jediný plán růstu byl „snad nás algoritmus dneska pohladí“. Algoritmus je náladový domácí mazlíček. Web, RSS a dobrý obsah jsou nudnější, ale platí nájem.

## 4.1 Vlastní kanál je strategická infrastruktura

Vlastní kanál není jen blog. Je to kombinace stránek, článků, případových studií, dokumentace, changelogu, RSS feedu, newsletteru a přímých URL, které můžeš poslat zákazníkovi bez prostředníka. Když někdo hledá řešení problému, nechce nutně „sledovat značku“. Chce pochopit, jestli mu umíš pomoct.

Proto si obsah rozděl podle práce, kterou má udělat:

- **Vysvětlovací obsah:** pomáhá pojmenovat problém a ukazuje způsob přemýšlení.
- **Rozhodovací obsah:** porovnává varianty, vysvětluje cenu, rizika, proces a limity.
- **Důkazní obsah:** ukazuje reference, případové studie, ukázky produktu a konkrétní výsledky.
- **Aktivační obsah:** vede na audit, demo, kalkulačku, checklist, šablonu nebo konzultaci.
- **Retenční obsah:** vzdělává stávající zákazníky, oznamuje změny a snižuje podporu.

Google ve svém oficiálním doporučení zdůrazňuje užitečný, spolehlivý obsah tvořený primárně pro lidi, ne obsah psaný jen pro vyhledávače. Viz [Google Search Central: Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content). Prakticky to znamená: piš z vlastní zkušenosti, ukazuj příklady, odpovídej na skutečné otázky zákazníků a neslibuj odpověď tam, kde ji nemáš.

## 4.2 Obsahový plán pro malý tým

Malý tým nepotřebuje redakční kalendář o padesáti položkách. Potřebuje rytmus, který vydrží. Lepší je jeden dobrý článek týdně než nadšený sprint deseti textů a potom tři měsíce ticho, protože všichni zjistili, že publikování není magie, ale práce.

Jednoduchý měsíční plán:

1. Jeden hlubší článek k hlavnímu problému zákazníka.
2. Jedna případová studie nebo rozbor konkrétní situace.
3. Jeden praktický checklist nebo šablona.
4. Jeden krátký changelog nebo produktová poznámka.

Příklad pro SaaS na správu poptávek:

- „Jak malé servisní firmy ztrácí poptávky a kde vznikají úniky“
- „Před a po: z telefonu a e-mailu do jednoho přehledu poptávek“
- „Checklist: co musí obsahovat dobrý poptávkový formulář“
- „Novinka: týdenní přehled nevyřízených poptávek bez ručního dohledávání“

Každý obsah by měl mít další krok. Ne vždy prodejní. Někdy stačí „přečti navazující článek“, „stáhni checklist“, „pošli nám svůj proces“, „objednej audit“. Důležité je, aby čtenář nezůstal stát na konci textu jako turista u rozbité cedule.

## 4.3 Distribuce: jeden obsah, více férových cest

Publikovat článek a čekat je strategie typu „hodil jsem rohlík do lesa, snad přijde zákazník“. Distribuce musí být součást práce. Ale privacy-first distribuce nepotřebuje sledovací skripty ani temné remarketingové publikum.

U každého nového obsahu si připrav:

- krátký post na sociální síť s přímým odkazem,
- e-mail pro lidi, kteří si o něj řekli,
- interní odkazy z relevantních starších článků,
- zmínku v dokumentaci, changelogu nebo produktu, pokud pomáhá uživatelům,
- osobní zprávu partnerům nebo zákazníkům, pro které je obsah opravdu relevantní,
- RSS položku pro čtenáře, kteří chtějí sledovat web bez algoritmu.

RSS je staré, ale užitečné. Specifikace RSS 2.0 popisuje kanál jako XML dokument s položkami, titulky, odkazy a popisy. Viz [RSS Advisory Board: RSS 2.0 Specification](https://www.rssboard.org/rss-specification). V praxi je RSS výborné pro changelog, blog, produktové novinky i dokumentaci. Nepotřebuje účet, pixel ani platformní rozmar. Jen stabilní URL a pravidelný obsah.

## 4.4 Newsletter s respektem, ne jako past

Newsletter může být skvělý kanál, pokud není převlečený spam. V Evropě musíš brát vážně souhlas, transparentnost a možnost odhlášení. ePrivacy směrnice řeší nevyžádanou komunikaci pro přímý marketing a zakazuje mimo jiné marketingové e-maily bez jasné identity odesílatele nebo bez platné adresy pro ukončení zasílání. Viz [EUR-Lex: ePrivacy Directive 2002/58/EC](https://eur-lex.europa.eu/eli/dir/2002/58/oj?locale=en). Portál Your Europe zároveň zdůrazňuje, že souhlas má být jasná aktivní volba, ne předem zaškrtnutá nebo schovaná možnost. Viz [Your Europe: Data protection and online privacy](https://europa.eu/youreurope/citizens/consumers/internet-telecoms/data-protection-online-privacy/index_en.htm).

Prakticky:

- formulář jasně říká, co bude člověk dostávat a jak často,
- souhlas není podmínkou pro stažení věci, pokud to nedává férový smysl,
- každý e-mail má jednoduché odhlášení,
- neposíláš marketing lidem, kteří se přihlásili jen k technickým notifikacím,
- nesbíráš víc údajů než potřebuješ,
- databázi kontaktů pravidelně čistíš,
- do mailingového nástroje neposíláš data, která bys neuměl zákazníkovi vysvětlit.

Newsletter má mít slib. Například: „Jednou týdně praktický tip k webu, SaaS a privacy-first marketingu v Evropě.“ To je jasnější než „Novinky a zajímavosti“. Novinky koho? Zajímavosti pro koho? Mlhovina v předmětu e-mailu není brand, je to mlha s logem.

## 4.5 Komunita a partnerství bez růstového divadla

Komunita nevzniká založením Discordu. Vzniká opakovanou užitečností. Pokud máš malý tým, začni jednodušeji: odpovídej na otázky v článcích, pořádej malé workshopy, sdílej veřejné checklisty, spolupracuj s komplementárními firmami a dělej rozbory, které lidem reálně šetří čas.

Dobrý partner pro privacy-first SaaS není ten, kdo slíbí „dosah“. Je to ten, kdo má důvěru u podobné cílové skupiny a nechce ji spálit agresivním prodejem. Partnerství může být:

- společný praktický webinář bez skrytého sběru kontaktů,
- článek s rozborem konkrétního problému,
- doporučení nástroje v dokumentaci,
- balíček služeb pro stejný segment,
- vzájemný audit procesu nebo bezpečnosti,
- otevřená šablona, kterou mohou používat i lidé mimo tvoji bublinu.

Měř kvalitu partnerství podle obchodních rozhovorů, kvalifikovaných poptávek, retence a důvěry, ne podle počtu lajků. Lajk je jemné poklepání na rameno. Faktura je důkaz, že někdo vidí hodnotu.

## 4.6 Checklist čtvrté kapitoly

Než přidáš další platformu do marketingového mixu, projdi si:

- Máš na vlastním webu jasné stránky pro problém, řešení, důkazy, cenu nebo další krok?
- Má každý nový obsah jeden konkrétní účel a návaznou akci?
- Umíš jeden článek rozumně distribuovat přes sociální post, e-mail, interní odkazy, RSS a osobní doporučení?
- Má web funkční RSS pro blog, changelog nebo novinky?
- Je newsletter postavený na jasném souhlasu, srozumitelném slibu a snadném odhlášení?
- Neposíláš do marketingových nástrojů osobní údaje, které nepotřebuješ?
- Máš aspoň jeden partnerský kanál založený na důvěře, ne jen na výměně log?
- Vyhodnocuješ marketing podle kvalitních konverzací a plateb, ne jen podle impresí?

Pokud chceš udělat jednu hodinovou iteraci, vyber nejlepší existující článek, přidej do něj jasné CTA, napoj ho na RSS, pošli ho ručně třem relevantním lidem a přidej interní odkazy z dalších dvou stránek. Není to sexy. Funguje to. Což je v marketingu podezřele často lepší než sexy.

---

# Kapitola 5: Produktivita malého týmu

Produktivita malého týmu není o tom, že všichni běží rychleji. Je o tom, že běží správným směrem, méně často se sráží a nemusí každý týden znovu objevovat vlastní rozhodnutí. U webového vývoje a SaaS je největší brzda často neviditelná: rozdělanost, nejasné priority, tiché předpoklady, chybějící vlastník a rozhodnutí ztracená v chatu.

Malý tým nemá luxus složitého managementu. To je dobře. Čím menší tým, tím víc se vyplatí jednoduchý rytmus: jasný cíl týdne, omezený počet rozdělaných věcí, krátké rozhodovací zápisy, automatizovaná rutina a pravidelná revize toho, co už nefunguje.

**Codyho komentář:** nejlepší produktivní systém je ten, který tým opravdu používá i ve čtvrtek odpoledne. Pokud přežije jen v pondělním nadšení, není to systém, ale dekorace do Notionu.

## 5.1 Omez rozdělanou práci, jinak rozdělaná práce ovládne tebe

Když má malý tým najednou otevřených patnáct úkolů, nevypadá to jako problém. Vypadá to jako aktivita. Jenže aktivita není výstup. Výstup je nasazená změna, odeslaná nabídka, vyřešený bug, publikovaný článek nebo hotový experiment.

Kanban pracuje s omezením rozpracované práce pomocí WIP limitů. Atlassian ve svém průvodci popisuje WIP limity jako způsob, jak omezit počet položek v určité fázi práce a lépe odhalit úzká hrdla. Viz [Atlassian: Working with WIP limits for kanban](https://www.atlassian.com/agile/kanban/wip-limits). Nemusíš kvůli tomu zavádět ceremoniální divadlo. Stačí jednoduchá tabule:

- **Nápady:** všechno, co by šlo dělat, ale ještě to není závazek.
- **Připraveno:** úkol má jasný výsledek, vlastníka a kritérium hotovo.
- **Děláme:** maximálně tolik položek, kolik tým zvládne dokončit.
- **Čeká:** blokované věci, které potřebují odpověď, data nebo schválení.
- **Hotovo:** nasazené, publikované nebo předané, ne jen „skoro“.

Pro tým o dvou až čtyřech lidech často stačí limit 2–4 položky ve sloupci „Děláme“. Když je limit plný, nezačíná se další práce. Dokončuje se, odblokovává nebo se vědomě rozhodne, co se zahodí. To je nepříjemné jen prvních pár dní. Pak začne být podezřele příjemné vidět dokončené věci.

## 5.2 Týdenní rytmus: jeden cíl, pár rozhodnutí, jasný konec

Malý tým nepotřebuje deset meetingů. Potřebuje pravidelný rytmus, který snižuje chaos. Doporučený základ:

1. **Pondělní výběr:** jedna hlavní priorita týdne a dvě vedlejší věci.
2. **Denní krátká kontrola:** co se posunulo, co blokuje, co se má zmenšit.
3. **Páteční uzavření:** co je hotovo, co jsme se naučili, co už nedává smysl.

Hlavní priorita týdne má být formulovaná jako výsledek, ne jako aktivita. „Pracovat na onboardingu“ je mlha. „Nový uživatel zvládne vytvořit první projekt bez ruční pomoci“ je výsledek. „Zlepšit marketing“ je mlha. „Publikovat článek, přidat interní odkazy a měřit kliknutí na demo“ je výsledek.

Praktická šablona týdenního plánu:

- **Cíl týdne:** jedna věta s měřitelným výsledkem.
- **Proč teď:** návaznost na zákazníka, tržbu, riziko nebo strategii.
- **Hotovo znamená:** konkrétní stav, který jde ověřit.
- **Neřešíme:** věci, které schválně necháváme mimo rozsah.
- **Riziko:** co může práci zablokovat a kdo to pohlídá.

Tahle šablona je nudná. To je kompliment. Produktivita má být nudná infrastruktura, ne adrenalinový sport.

## 5.3 Dokumentace, která šetří čas místo aby ho požírala

Dokumentace není archiv všeho. Je to nástroj pro snížení opakovaných otázek. Pokud dokument nikdo nečte, může být problém v týmu, ale často je problém v dokumentu: je moc dlouhý, moc obecný nebo není u práce, které se týká.

U SaaS produktu se vyplatí držet čtyři typy dokumentů:

- **README pro spuštění:** jak projekt lokálně rozběhnout, otestovat a nasadit.
- **Produktové poznámky:** pro koho je produkt, jaký problém řeší a co zatím vědomě neumí.
- **Runbooky:** co dělat při výpadku, chybné platbě, incidentu nebo importu dat.
- **Rozhodovací záznamy:** proč jsme vybrali technologii, vendor, pricing nebo datový model.

Pro technická rozhodnutí se hodí ADR. Web adr.github.io popisuje Architectural Decision Record jako záznam jednoho významného rozhodnutí včetně důvodů, kompromisů a důsledků. Viz [Architectural Decision Records](https://adr.github.io/). Pro malý tým může mít ADR jednoduchou podobu:

```markdown
# ADR-004: Analytiku provozujeme bez cookies třetích stran

## Kontext
Potřebujeme měřit výkon webu, ale nechceme profilovat návštěvníky napříč službami.

## Rozhodnutí
Použijeme privacy-first analytiku v EU regionu a nebudeme posílat osobní údaje v eventech.

## Důsledky
Budeme mít méně detailní reklamní atribuci, ale lepší kontrolu nad daty a jednodušší vysvětlení zákazníkům.
```

ADR nemusí být dokonalý právní spis. Má zachytit kontext ve chvíli, kdy je rozhodnutí živé. Za půl roku ti ušetří debatu „proč jsme to tehdy vlastně udělali?“ — což je otázka, která umí sežrat celé odpoledne a ještě si říct o sušenku.

## 5.4 Automatizuj rutinu, ne úsudek

Automatizace je skvělá, když odstraňuje opakovatelnou práci. Je nebezpečná, když jen rychleji vyrábí špatná rozhodnutí. U malého týmu automatizuj nejdřív věci, které mají jasný vstup, jasný výstup a nízké riziko:

- kontrolu formátu a lint před mergem,
- generování sitemap a RSS,
- zálohy databáze a pravidelný test obnovy,
- upozornění na 404 a chyby formulářů,
- opakované exporty reportů,
- připomenutí revize starých článků nebo neaktivních trialů.

Neautomatizuj bez rozmyslu:

- odpovědi zákazníkům u citlivých problémů,
- mazání dat bez auditní stopy,
- změny cen nebo oprávnění,
- publikování obsahu bez lidské kontroly,
- bezpečnostní rozhodnutí jen podle jednoho nástroje.

Privacy-first automatizace má navíc jednoduché pravidlo: loguj dost na provoz a bezpečnost, ale ne víc, než potřebuješ. Pokud automatizace posílá data do externí služby, napiš si k ní mini vendor poznámku: jaká data odchází, proč, kde se zpracují, jak dlouho se drží a jak ji vypneš.

## 5.5 AI asistent jako multiplikátor, ne autopilot

AI může malému týmu výrazně pomoct: připraví návrh článku, najde hrany v textu, navrhne testovací scénáře, vysvětlí logy nebo přepíše support odpověď do srozumitelnější češtiny. Ale pořád platí, že odpovědnost má tým. AI není vlastník produktu. Je to extrémně rychlý junior, který občas přijde s geniálním nápadem a občas sebevědomě nabídne blbost v obleku.

Dobré použití AI v malém týmu:

- shrnout dlouhý issue thread do rozhodnutí a otevřených otázek,
- navrhnout varianty copy pro landing page,
- vytvořit první návrh checklistu pro onboarding,
- zkontrolovat, jestli dokumentace odpovídá skutečnému kódu,
- připravit bezpečnostní otázky pro review nové integrace,
- převést zákaznickou zpětnou vazbu na témata k validaci.

Špatné použití AI:

- poslat právní nebo bezpečnostní závěr bez ověření,
- generovat obsah s faktickými tvrzeními bez zdrojů,
- nechat model rozhodovat o prioritách bez kontextu zákazníků,
- kopírovat citlivá data do nástroje, který pro to nemá smluvní ani technické podmínky,
- přijmout velký refaktor bez testů jen proto, že diff vypadá elegantně.

Praktický prompt pro týmovou práci:

> Jsi kritický produktový sparring partner. Zkontroluj tento plán týdne. Najdi nejasné výsledky, skrytá rizika, chybějící vlastníky a kroky, které nejdou ověřit. Nechci motivaci, chci konkrétní opravy.

Takový prompt neprosí o kouzlo. Vynucuje strukturu. A struktura je přesně to, co malému týmu šetří čas.

## 5.6 Checklist páté kapitoly

Na konci týdne si projdi:

- Má tým jednu hlavní prioritu, kterou jde ověřit výsledkem?
- Je počet rozdělaných úkolů omezený a viditelný?
- Má každý aktivní úkol vlastníka a definici „hotovo“?
- Existuje krátký zápis pro důležitá technická, produktová nebo datová rozhodnutí?
- Jsou rutinní kontroly automatizované tam, kde je nízké riziko omylu?
- Víš, která data odchází do externích nástrojů a proč?
- Používáš AI na návrhy, kontrolu a zrychlení práce, ne jako nehlídaný autopilot?
- Má tým pravidelný okamžik, kdy zavírá staré nápady a maže zbytečnou práci?

Hodinová iterace: vezmi aktuální tabuli práce, nastav limit pro „Děláme“, u tří nejdůležitějších úkolů dopiš výsledek a definici hotovo, a k jednomu staršímu rozhodnutí vytvoř krátké ADR. To je malý zásah, který sníží chaos rychleji než další nový nástroj. Nástrojů máme dost. Klidu málo.

---

# Kapitola 6: Privacy-first provoz v Evropě

Privacy-first provoz není jen právní povinnost nalepená na hotový produkt. Je to provozní styl: víš, jaká data sbíráš, proč je sbíráš, kde leží, kdo k nim má přístup a kdy zmizí. Když tohle neumíš vysvětlit bez diagramu velikosti letiště, nemáš privacy-first produkt. Máš datový sklep s hezkým UI.

Evropský přístup stojí na několika jednoduchých principech. GDPR v článku 5 mluví mimo jiné o minimalizaci údajů a omezení uložení: data mají být přiměřená, relevantní, omezená na nezbytný rozsah a uchovávaná jen tak dlouho, jak je potřeba pro daný účel. Viz [EUR-Lex: GDPR 2016/679](https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=CELEX%3A32016R0679). EDPB k článku 25 doplňuje, že ochrana dat má být navržená do systému od začátku a výchozí nastavení má chránit uživatele, ne maximalizovat sběr. Viz [EDPB: Guidelines 4/2019 on Article 25](https://www.edpb.europa.eu/documents/guideline/guidelines-42019-on-article-25-data-protection-by-design-and-by-default_en).

**Codyho komentář:** nejlepší privacy policy je ta, kterou dokážeš skutečně provozně dodržet. Pokud slibuješ méně sběru, ale v produktu máš pět analytických SDK, tři chat widgety a export všech leadů do nástroje, který nikdo nekontroluje, tak privacy-first jen cosplayuješ. A cosplay nechme radši na cony, ne na zákaznická data.

## 6.1 Datová mapa: nejdřív inventura, potom nástroje

Začni tabulkou. Ne architekturou za tři týdny, ale obyčejnou datovou mapou, kterou zvládne pochopit zakladatel, vývojář i člověk ze supportu. Cílem není vytvořit dokument do šuplíku. Cílem je vědět, kde vzniká riziko.

Minimální datová mapa pro malý SaaS:

| Oblast | Příklad dat | Účel | Kde leží | Přístup | Retence |
|---|---|---|---|---|---|
| Účet | e-mail, jméno, role | přihlášení a oprávnění | hlavní databáze v EU | admin, support podle role | po dobu účtu + krátká lhůta pro obnovu |
| Fakturace | firma, DIČ, adresa, objednávka | účetnictví a platby | fakturační systém | finance, admin | podle účetních povinností |
| Support | e-mail, popis problému, přílohy | řešení požadavku | helpdesk nebo inbox | support | podle typu požadavku |
| Provozní logy | IP, user agent, request ID | bezpečnost a diagnostika | log storage v EU | technický tým | krátká technická retence |
| Produktová analytika | agregované eventy | zlepšení toku produktu | analytika v EU | produktový tým | podle užitečnosti metrik |

U každého řádku se ptej:

- Potřebujeme tato data pro službu, bezpečnost, smlouvu nebo zákonnou povinnost?
- Dá se účel splnit s menším rozsahem údajů?
- Leží data v Evropě, nebo alespoň víme, na základě čeho odchází mimo EU?
- Má k nim přístup jen ten, kdo ho opravdu potřebuje?
- Máme jasný okamžik, kdy se data mažou nebo anonymizují?
- Umíme zákazníkovi říct, co o něm držíme, bez ruční archeologie?

Tohle je základ vendor auditu i technického návrhu. Když později vybíráš CRM, analytiku nebo nástroj na support, neptáš se jen „má integraci?“. Ptáš se: „Který řádek datové mapy tím měním a jaké nové riziko přidávám?“

## 6.2 Minimalizace dat v produktu

Minimalizace není věta do compliance dokumentu. Je to produktové rozhodnutí. Každé nové pole ve formuláři, každý event a každá integrace má mít důvod. Když důvod neexistuje, data nesbírej. Když důvod skončil, data smaž nebo anonymizuj.

Praktické vzory:

- Registrace: pro první účet často stačí e-mail a heslo nebo magic link. Telefon, pozice, velikost firmy a marketingový dotazník mohou počkat.
- Poptávkový formulář: sbírej kontakt, popis problému a preferovaný způsob odpovědi. Datum narození zákazníka nepatří do formuláře na web.
- Produktové eventy: ukládej typ události, čas, stránku a anonymní nebo interní ID, pokud to stačí. Neposílej do analytiky e-mail ani obsah uživatelských polí.
- Support přílohy: upozorni uživatele, ať neposílá citlivé údaje, pokud nejsou nutné, a nastav interní pravidlo pro mazání příloh.
- Admin exporty: omez export osobních údajů rolí, loguj kdo export provedl a nabídni export bez polí, která tým nepotřebuje.

Dobrá otázka při návrhu formuláře zní: „Co se pokazí, když tohle pole nebudeme mít?“ Pokud odpověď zní „možná se to jednou hodí“, pole smaž. „Možná jednou“ je nejdražší datová strategie, protože zvyšuje riziko, dokumentaci, přístupová práva i úklid.

## 6.3 EU provoz a vendor audit bez divadla

Evropský provoz neznamená, že nikdy nepoužiješ zahraniční nástroj. Znamená, že máš preferenci pro EU infrastrukturu, rozumíš toku dat a umíš obhájit výběr. Pro malý tým je lepší mít pět dobře vybraných služeb než patnáct nástrojů, které „někdo kdysi přidal na zkoušku“.

U každého dodavatele si drž krátkou kartu:

- název služby a vlastník ve firmě,
- jaká data do služby odchází,
- účel zpracování,
- region uložení a zpracování,
- smluvní základ a DPA, pokud zpracovává osobní údaje,
- kdo má admin přístup,
- jak exportovat nebo smazat data,
- co se stane, když služba vypadne,
- datum poslední revize.

Příklad rozhodnutí:

> Pro webovou analytiku používáme nástroj s EU hostingem a bez cross-site profilování. Měříme agregované návštěvy, zdroje a CTA kliknutí. Neposíláme e-mail, obsah formulářů ani reklamní identifikátory. Revize nastavení probíhá jednou za čtvrtletí.

Tohle je konkrétní. „Používáme moderní analytiku“ není konkrétní. To je mlha v SaaS tričku.

## 6.4 Logování: bezpečnost ano, šmírování ne

Logy jsou potřeba. Bez nich nevyřešíš incident, chybu plateb, výpadek integrace ani bruteforce útok. Privacy-first provoz ale neznamená logovat všechno navždy. Znamená logovat účelně.

Rozumné provozní logy:

- request ID, čas, route, status a latence,
- technická chyba bez citlivého obsahu formuláře,
- přihlášení, odhlášení a bezpečnostní události,
- změny oprávnění a administrátorské akce,
- exporty dat a hromadné operace,
- odmítnuté pokusy o přístup.

Rizikové logování:

- hesla, tokeny, API klíče nebo celé hlavičky požadavků,
- obsah zpráv a příloh bez jasného důvodu,
- osobní údaje v URL parametrech,
- platební údaje mimo platební bránu,
- dlouhá retence debug logů po vyřešení incidentu.

Nastav si tři vrstvy retence: krátké detailní logy pro diagnostiku, delší bezpečnostní auditní stopu pro důležité akce a agregované metriky bez osobní identifikace pro dlouhodobý přehled. Tím získáš provozní jistotu bez datového hromadění.

## 6.5 Bezpečnostní minimum pro evropský SaaS

Bezpečnost není až enterprise kapitola. I malý SaaS potřebuje základ, protože útočník nečte tvoji pitch deck poznámku „zatím jsme malí“. NIS2 v článku 21 popisuje oblasti jako řízení rizik, incident handling, kontinuitu provozu, bezpečnost dodavatelského řetězce, hodnocení účinnosti opatření, kyberhygienu, školení, kryptografii, řízení přístupů a vícefaktorové ověřování pro subjekty, na které dopadá. Viz [EUR-Lex: Directive (EU) 2022/2555, Article 21](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32022L2555).

Ne každý malý projekt spadá do NIS2. Ale jako inspirace pro provozní hygienu je článek 21 užitečný, protože připomíná, že bezpečnost není jen firewall. Je to proces.

Minimum pro malý tým:

- MFA pro administrátory, hosting, repozitáře, fakturaci a produkční nástroje,
- role místo sdílených účtů,
- zálohy databáze a pravidelný test obnovy,
- oddělené produkční a testovací prostředí,
- tajné klíče mimo repozitář,
- aktualizace závislostí a rychlá reakce na kritické zranitelnosti,
- jednoduchý incident plán: kdo rozhoduje, koho informovat, kde psát stav,
- pravidelná revize vendorů a admin přístupů,
- bezpečné mazání účtů a export dat na žádost zákazníka.

Když se něco pokazí, nechceš poprvé zjišťovat, kdo má přístup k hostingu, kde jsou zálohy a jestli poslední export dat neleží někomu v Downloads. Incident je špatná chvíle na improvizační divadlo.

## 6.6 Checklist šesté kapitoly

Pro jeden konkrétní produkt nebo web projdi:

- Máš aktuální datovou mapu hlavních kategorií údajů?
- Umíš ke každé kategorii říct účel, místo uložení, přístup a retenci?
- Sbírá registrace a formuláře jen data, která opravdu potřebuješ?
- Neposíláš osobní údaje do analytiky, logů nebo marketingových nástrojů omylem?
- Má každý dodavatel vlastníka a krátkou vendor kartu?
- Jsou admin přístupy chráněné MFA a rolemi?
- Existuje ověřená záloha a někdo ví, jak obnovu spustit?
- Máš krátký incident postup, který jde použít i v pátek večer?
- Víš, které logy držíš detailně, které agregovaně a kdy se mažou?

Hodinová iterace: vezmi jeden tok, třeba registraci nebo poptávkový formulář. Sepiš data, účel, úložiště, přístup a retenci. Pak smaž jedno zbytečné pole nebo jeden zbytečný event. Privacy-first se nejlépe buduje po malých odstraněních. Méně dat, méně magie, méně budoucích bolestí.

## Zdroje

- ADR GitHub Organization: [Architectural Decision Records](https://adr.github.io/)
- Atlassian: [Working with WIP limits for kanban](https://www.atlassian.com/agile/kanban/wip-limits)
- EUR-Lex: [Nařízení GDPR 2016/679, článek 5 a 25](https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=CELEX%3A32016R0679)
- EUR-Lex: [Directive (EU) 2022/2555 — NIS2, Article 21](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32022L2555)
- EUR-Lex: [ePrivacy Directive 2002/58/EC](https://eur-lex.europa.eu/eli/dir/2002/58/oj?locale=en)
- OWASP Foundation: [Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/)
- European Data Protection Board: [Privacy by design and by default](https://www.edpb.europa.eu/topics/ai-and-technology/privacy-by-design-and-by-default_en)
- European Data Protection Board: [Pokyny 4/2019 k článku 25 — záměrná a standardní ochrana osobních údajů](https://www.edpb.europa.eu/documents/guideline/guidelines-42019-on-article-25-data-protection-by-design-and-by-default_cs)
- Google Search Central: [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- web.dev: [Core Web Vitals](https://web.dev/articles/vitals)
- RSS Advisory Board: [RSS 2.0 Specification](https://www.rssboard.org/rss-specification)
- Your Europe: [Data protection and online privacy](https://europa.eu/youreurope/citizens/consumers/internet-telecoms/data-protection-online-privacy/index_en.htm)
- W3C: [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)
- Google Search Central: [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

## Pracovní log

- 2026-08-05: Dopsána kapitola 6 o privacy-first provozu v Evropě: datová mapa, minimalizace údajů, vendor audit, logování, bezpečnostní minimum a checklist.
- 2026-08-05: Dopsána kapitola 5 o produktivitě malého týmu: omezení rozdělané práce, týdenní rytmus, dokumentace, ADR, automatizace, AI asistenti a checklist.
- 2026-08-05: Dopsána kapitola 4 o marketingu bez závislosti na platformách: vlastní kanály, obsahový rytmus, distribuce, RSS, newsletter se souhlasem, partnerství a checklist.
- 2026-08-05: Dopsána kapitola 3 o SaaS cestě k první platbě: MVP, validace platbou, onboarding, privacy-first metriky, bezpečnostní minimum a checklist.
- 2026-08-05: Dopsána kapitola 2 o webu jako obchodníkovi: hero sekce, důvěra, struktura homepage, technická kvalita, privacy-first měření a checklist.
- 2026-08-05: Vytvořena základní struktura e-booku, úvod, osnova a dokončená kapitola 1 o definici problému, nabídce a privacy-first zadání produktu.
