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

---

# Kapitola 7: Růst bez chaosu

Růst je krásný problém, ale pořád problém. V malém týmu se často tváří jako dobrá zpráva: víc návštěv, víc trialů, víc klientů, víc integrací, víc nápadů. Jenže pokud nemáš základní provozní disciplínu, růst ti jen zvětší všechno, co už bylo křivé. Pomalý onboarding bude pomalejší, support bude hlučnější, backlog bude tlustší a každý incident dostane publikum. Gratulujeme, právě jsi škáloval chaos.

Zdravý růst není jen „víc“. Je to schopnost doručovat hodnotu častěji, spolehlivěji a s menším stresem na jednotku zákazníka. DORA používá pro výkon softwarové dodávky metriky jako frekvenci nasazení, lead time změn, change fail rate a dobu zotavení po neúspěšném nasazení. Viz [DORA: software delivery performance metrics](https://dora.dev/guides/dora-metrics/). Google SRE zase doporučuje definovat cíle spolehlivosti podle toho, co vnímá uživatel, a pracovat s error budgetem místo nekonečného přetahování mezi vývojem a provozem. Viz [Google SRE: Service Level Objectives](https://sre.google/sre-book/service-level-objectives/) a [Google SRE: Production Services Best Practices](https://sre.google/sre-book/service-best-practices/).

**Codyho komentář:** růst bez provozních pravidel je jako dát silnější motor do auta, kterému nefungují brzdy. Chvíli je to vzrušující. Pak už jen drahé.

## 7.1 Škáluj nejdřív úzké hrdlo, ne organigram

Když produkt začne růst, první reakce bývá „potřebujeme víc lidí“ nebo „potřebujeme nový nástroj“. Někdy ano. Často ale nejdřív potřebuješ zjistit, kde přesně vzniká tření. Růst není jeden problém. Je to soubor úzkých hrdel.

Typická úzká hrdla:

- zákazníci nechápou hodnotu před registrací,
- uživatelé nedokončí první nastavení,
- support odpovídá pořád na stejné otázky,
- obchod neumí kvalifikovat leady,
- vývoj tráví moc času ručním releasem,
- incidenty nemají vlastníka,
- data jsou rozházená mezi nástroji a nikdo neví, čemu věřit.

Ke každému hrdlu si napiš dvě věty: jak poznáme, že existuje, a jak poznáme, že jsme ho zlepšili. Například: „Uživatelé nedokončí onboarding, protože neví, co udělat po registraci. Zlepšíme to, když se podíl účtů s první dokončenou akcí zvýší z 35 % na 55 %.“ To je konkrétní. „Zlepšit onboarding“ je jen hezké přání v tričku startupu.

Privacy-first pohled: nehledej úzké hrdlo sběrem všeho. Začni agregovanými metrikami a kvalitativní zpětnou vazbou. U citlivých toků raději použij dobrovolný rozhovor, krátký formulář nebo anonymizovaný event než session replay, který zaznamenává každý pohyb myši jako malý digitální drb.

## 7.2 Nastav metriky, které vedou k rozhodnutí

Dobrá metrika má vlastníka, rytmus a rozhodnutí. Pokud se na ni jen koukáš, je to dekorace dashboardu. Pro malý SaaS stačí několik vrstev:

| Oblast | Praktická metrika | Rozhodnutí |
|---|---|---|
| Akvizice | kvalifikované návštěvy a konverze na lead/trial | kam dát obsah a distribuci |
| Aktivace | první dokončená hodnota v produktu | co zjednodušit v onboardingu |
| Retence | aktivní účty a opakované použití klíčové funkce | co zlepšit v produktu |
| Revenue | MRR, nové platby, expanze, churn | kde upravit cenu a nabídku |
| Provoz | chybovost, latence, dostupnost hlavního toku | kdy zastavit feature práci |
| Dodávka | lead time změn a change fail rate | jak zlepšit release proces |

Metriku si vždy přelož do otázky. Ne „máme 2 000 návštěv“. Ale „přivádí tento kanál lidi, kteří udělají první hodnotnou akci?“ Ne „nasazujeme často“. Ale „umíme nasadit malou změnu rychle bez zbytečného rizika?“

S DORA metrikami nezačínej jako s benchmarkingovou soutěží. Nepotřebuješ si dokazovat, že jsi elite performer, když máš pět zákazníků a jeden deploy týdně. Použij je jako diagnostiku toku práce: jak dlouho trvá změna, jak často nasazuješ, kolik nasazení bolí a jak rychle se zotavíš. To jsou otázky, které zlepšují produkt i spánek.

## 7.3 Release proces má být nudný

Čím víc zákazníků, tím méně heroismu chceš při nasazování. Ideální release je skoro nudný: malý diff, automatické kontroly, jasný rollback, viditelné metriky a krátká poznámka, co se změnilo. Drama patří do seriálů, ne do produkce.

Praktické minimum release procesu:

- změny jsou malé a popsané,
- testy a lint běží před mergem,
- migrace databáze mají plán návratu nebo bezpečný přechod,
- konfigurace a tajné klíče nejsou v repozitáři,
- po nasazení sleduješ chyby, latenci a hlavní business event,
- existuje jednoduchý rollback postup,
- zákaznicky viditelné změny mají poznámku v changelogu.

Když release bolí, nezvyšuj schvalovací divadlo. Zmenši změny. Přidej automatické kontroly. Odděl rizikové migrace od UI úprav. Použij feature flag jen tam, kde skutečně snižuje riziko, ne jako temný les přepínačů, kterému rozumí jeden vývojář a jeho kávovar.

Privacy-first poznámka: release checklist má obsahovat i datovou otázku. Přidává změna nové osobní údaje, nový event, nový vendor nebo delší retenci? Pokud ano, aktualizuj datovou mapu a text pro uživatele dřív, než to pustíš ven.

## 7.4 Incident není ostuda, ale zkouška systému

Incidenty se stanou. Rozdíl mezi zralým a nezralým týmem není v tom, že zralý tým nikdy nespadne. Rozdíl je v tom, že ví, kdo velí, kde se komunikuje, jak se chrání zákazník a co se po incidentu změní. Google SRE v kapitole o incident managementu zdůrazňuje, že bez předem promyšlené reakce se principy v reálném stresu rychle rozpadnou. Viz [Google SRE: Managing Incidents](https://sre.google/sre-book/managing-incidents/).

Lehký incident postup pro malý tým:

1. **Urči incident commandera:** jedna osoba koordinuje, ostatní neimprovizují bokem.
2. **Zapiš časovou osu:** co se stalo, kdy, kdo co udělal.
3. **Chraň zákazníka:** obnov hlavní tok, omez škodu, zastav rizikové změny.
4. **Komunikuj stručně:** co je rozbité, koho se to týká, kdy bude další update.
5. **Po incidentu napiš postmortem:** příčina, dopad, co fungovalo, co opravíš.

Postmortem nemá hledat viníka. Má hledat podmínky, které incident umožnily. Špatná věta: „Petr zapomněl nastavit proměnnou.“ Lepší věta: „Release proces umožnil nasadit konfiguraci bez automatické kontroly povinných proměnných.“ První věta vyrobí strach. Druhá vyrobí opravu.

## 7.5 Bezpečnost a privacy jako brzdy špatného růstu

Růst často přinese tlak na nové integrace: CRM, chat, reklamní platforma, enrichment leadů, automatický scoring, support nástroje. Každá integrace může být užitečná. Každá také otevírá další cestu pro data. Proto potřebuješ jednoduchý vendor gate, ne nekonečný právní román.

Před přidáním nástroje si polož:

- Jaký konkrétní problém řeší a jak poznáme, že pomohl?
- Jaká osobní nebo obchodně citlivá data do něj pošleme?
- Kde se data zpracují a kdo k nim má přístup?
- Jaká je minimální konfigurace bez zbytečných trackerů a enrichmentu?
- Jak nástroj vypneme a jak data exportujeme nebo smažeme?
- Existuje evropská nebo self-hosted alternativa s menším datovým dopadem?

OWASP ASVS slouží jako praktický standard pro ověřování bezpečnostních kontrol webových aplikací a vývojářům dává seznam požadavků pro bezpečný vývoj. Viz [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/). Nemusíš hned zavést celý enterprise audit. Vyber požadavky relevantní pro přihlášení, autorizaci, validaci vstupů, správu relací, logování a API. Udělej z nich opakovatelný review checklist.

## 7.6 Checklist sedmé kapitoly

Před dalším kolem růstu si projdi:

- Víš, které úzké hrdlo teď nejvíc brzdí zákaznickou hodnotu?
- Má každá hlavní metrika vlastníka, rytmus kontroly a navázané rozhodnutí?
- Umíš nasadit malou změnu bez ručního rituálu a bez paniky?
- Sleduješ po releasu uživatelský dopad, chyby a hlavní business event?
- Existuje rollback postup, který zvládne i člověk bez magických znalostí?
- Má tým incident roli, komunikační místo a jednoduchou šablonu postmortemu?
- Prochází nové nástroje vendor gate se zaměřením na data a EU provoz?
- Máš bezpečnostní checklist podle skutečných rizik produktu, ne podle módy?

Hodinová iterace: vyber jedno úzké hrdlo růstu a napiš k němu metriku, vlastníka a jednu změnu na příštích sedm dní. Pokud žádné hrdlo neumíš vybrat, začni onboardingem nebo release procesem. Tam se malé týmy pálí nejčastěji a nejtišeji.


---

# Příloha A: Privacy-first vendor audit na jednu stránku

Nový nástroj v malém týmu často nezačíná bezpečnostním rizikem. Začíná větou: „Tohle nám ušetří čas, přidejme to.“ A někdy je to pravda. Jenže každý externí nástroj je zároveň nová kopie dat, nový přístupový bod, nový účet, nová faktura a nová položka v tom mentálním šuplíku, kde jednoho dne někdo hledá: „Kam jsme vlastně posílali e-maily zákazníků?“

Vendor audit nemusí být korporátní peklo se sedmnácti přílohami. Pro malý evropský SaaS stačí krátký, opakovatelný záznam. Důležité je udělat ho před integrací, ne až ve chvíli, kdy už nástroj posílá data přes půl internetu a tým se tváří, že to byl experiment. Experiment ano, ale s brzdami.

## A.1 Kdy audit spustit

Audit udělej pokaždé, když chceš přidat nástroj, který bude mít přístup k některé z těchto kategorií:

- osobní údaje zákazníků, leadů, zaměstnanců nebo uživatelů,
- obsah zpráv, tiketů, formulářů, dokumentů nebo nahrávek,
- provozní logy, IP adresy, identifikátory zařízení nebo analytické eventy,
- platební, účetní nebo smluvní metadata,
- přístup do produkce, repozitáře, CRM, e-mailu nebo administrace.

Pokud nástroj pracuje jen s veřejným obsahem a nemá žádné účty ani tracking, může stačit lehký záznam. Pokud se dotýká zákaznických dat nebo infrastruktury, potřebuje plný audit. GDPR v článku 28 řeší vztah správce a zpracovatele a vyžaduje smluvní rámec pro zpracování osobních údajů zpracovatelem. Viz [EUR-Lex: GDPR, Article 28](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679) a praktické shrnutí Evropské komise: [Can someone else process the data on my organisation’s behalf?](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/obligations/controllerprocessor/can-someone-else-process-data-my-organisations-behalf_en).

**Codyho komentář:** největší riziko není, že tým udělá špatné rozhodnutí. Největší riziko je, že žádné rozhodnutí neexistuje. Jen historická náhoda, která se po roce tváří jako architektura.

## A.2 Jednostránková šablona

Zkopíruj si tuhle šablonu do interní dokumentace pro každý nový nástroj:

```md
# Vendor audit: [název nástroje]

## 1. Proč ho chceme
- Problém:
- Očekávaný výsledek:
- Vlastník nástroje:
- Datum review:

## 2. Jaká data do něj půjdou
- Kategorie dat:
- Osobní údaje: ano/ne
- Citlivá nebo obchodně důvěrná data: ano/ne
- Data dětí nebo zvláštní kategorie údajů: ano/ne
- Minimální možné nastavení:

## 3. Kde a jak se data zpracují
- Země/region zpracování:
- Subdodavatelé:
- DPA / zpracovatelská smlouva:
- Retence a mazání:
- Export dat:

## 4. Bezpečnost a přístup
- SSO / MFA:
- Role a oprávnění:
- Audit log:
- Incident reporting:
- Záloha nebo plán ukončení:

## 5. Rozhodnutí
- Schváleno / zamítnuto / pilot:
- Podmínky použití:
- Co nesmíme posílat:
- Kdy rozhodnutí znovu otevřeme:
```

Nejde o krásu dokumentu. Jde o to, aby se o nástroji dalo rozhodnout i za půl roku, kdy si už nikdo nepamatuje nadšení z demo callu. U každého pole piš konkrétně. „Data v EU“ nestačí. Lepší je „primární zpracování ve Frankfurtu, subdodavatelé uvedení zde, zálohy podle dokumentace X“. Když vendor neumí odpovědět, je to odpověď.

## A.3 Rychlé skóre rizika

Pro menší tým se hodí jednoduché skóre 0–2. Není to právní posudek, ale pomůže zastavit impulzivní integrace.

| Otázka | 0 bodů | 1 bod | 2 body |
|---|---|---|---|
| Jaká data nástroj dostane? | veřejná | běžná osobní | citlivá / obchodně kritická |
| Kde běží zpracování? | EU / EHP | kombinace regionů | nejasné nebo mimo EU bez dobrého důvodu |
| Jak důležitý je pro provoz? | doplněk | užitečný proces | kritická část produktu |
| Jak snadno odejdeme? | export a alternativa | ruční migrace | lock-in bez jasného exportu |
| Jaké má přístupy? | read-only | zápis do nástroje | produkce, kód, identita nebo billing |

Vyhodnocení:

- **0–3 body:** lehký audit, vlastník, roční review.
- **4–6 bodů:** pilot s omezenými daty, kontrola nastavení, review za 30 dní.
- **7+ bodů:** schválení zakladatelem nebo vedením, bezpečnostní kontrola, jasný exit plán.

NIS2 posiluje důraz na řízení kybernetických rizik a dodavatelský řetězec u relevantních subjektů. I když se na tvůj malý SaaS nemusí přímo vztahovat, princip je užitečný: dodavatel není jen „nástroj“, ale součást rizikového modelu. Viz [European Commission: NIS2 Directive](https://digital-strategy.ec.europa.eu/en/policies/nis2-directive) a [EUR-Lex: Directive (EU) 2022/2555](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32022L2555).

## A.4 Pilot bez datového bordelu

Nejbezpečnější integrace je ta, která nezačne plným přístupem. Když testuješ nový nástroj, nastav pilot takto:

1. **Použij anonymizovaná nebo testovací data.** Demo nepotřebuje reálné zákaznické e-maily.
2. **Omez účty.** Přístup dostanou jen lidé, kteří pilot opravdu vyhodnocují.
3. **Vypni zbytečné funkce.** Tracking, enrichment, AI trénování na datech, veřejné sdílení a automatické importy nech vypnuté, pokud je výslovně nepotřebuješ.
4. **Napiš podmínky úspěchu.** Například „zkrátí zpracování support tiketů o 25 % bez exportu osobních dat mimo EU“.
5. **Naplánuj konec pilotu.** Buď nástroj schválíš, nebo smažeš účet a data. Žádné zombie SaaS účty, prosím. I zombie mají city, ale faktury taky.

Privacy by design a by default podle EDPB znamená řešit ochranu dat už při návrhu a držet výchozí nastavení co nejšetrnější. To je přesně důvod, proč pilot začíná minimem dat a minimem přístupů. Viz [EDPB: Guidelines 4/2019 on Article 25](https://www.edpb.europa.eu/documents/guideline/guidelines-42019-on-article-25-data-protection-by-design-and-by-default_en).

## A.5 Checklist přílohy

Před zapojením nového nástroje si odškrtni:

- Má nástroj jasný business důvod a vlastníka?
- Víš přesně, jaká data do něj půjdou a co do něj posílat nesmíš?
- Je zpracování v EU/EHP, nebo máš zdokumentovaný důvod a právní rámec pro jiný region?
- Existuje DPA nebo jiný odpovídající smluvní rámec, pokud jde o zpracování osobních údajů?
- Umíš nastavit minimální přístupy, MFA a rozumnou retenci?
- Máš exit plán: export, smazání dat, vypnutí integrace?
- Proběhl pilot s omezenými daty místo okamžitého plošného nasazení?
- Je audit uložený tam, kde ho najde i člověk, který nástroj nevybíral?

Hodinová iterace: vyber jeden nástroj, který už používáš, a doplň k němu šablonu zpětně. Pokud narazíš na nejasné zpracování dat, nezačínej právní panikou. Začni tím, že omezíš posílaná data, zkontroluješ nastavení a připravíš alternativu.

---

# Příloha B: Obsahový systém pro malé týmy

Marketing malého SaaS týmu nesmí stát na náhodném záblesku inspirace. Inspirace je fajn, ale má pracovní morálku kočky: přijde, když se jí chce, sedne si na klávesnici a pak zmizí. Potřebuješ jednoduchý systém, který každý týden promění zákaznické otázky, produktové změny a zkušenosti z provozu v užitečný obsah.

Privacy-first obsahový systém má tři cíle:

1. budovat důvěru na vlastním webu,
2. učit trh konkrétní věci, které souvisejí s produktem,
3. distribuovat obsah bez závislosti na reklamních pixelech a sociálních algoritmech.

Google ve svém doporučení k helpful content zdůrazňuje obsah psaný pro lidi, který ukazuje zkušenost, odbornost a jasnou hodnotu pro čtenáře. Viz [Google Search Central: Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content). To je dobrý směr i mimo SEO: nejlepší marketing často jen poctivě odpovídá na otázky, které zákazník stejně řeší před nákupem.

## B.1 Jedna obsahová banka

Začni jedním souborem nebo tabulkou. Ne pěti nástroji. Ne „content hubem“ za víc peněz než první hosting. Jedna obsahová banka stačí, pokud je pravidelně používaná.

Zapisuj do ní:

- otázky ze sales callů,
- námitky z e-mailů,
- opakované chyby při onboardingu,
- produktové změny a proč vznikly,
- interní rozhodnutí, která by mohla pomoct zákazníkům,
- malé případové studie z praxe,
- pojmy, které zákazníci hledají, ale nerozumí jim.

Ke každému nápadu přidej tři pole:

| Pole | Co napsat | Příklad |
|---|---|---|
| Pro koho | konkrétní čtenář | zakladatel B2B SaaS do 10 lidí |
| Problém | otázka nebo bolest | neví, jestli potřebuje cookie lištu |
| Další krok | co má po přečtení udělat | projít datovou mapu a vyhodit zbytečné trackery |

Tím se vyhneš obsahu typu „5 trendů digitální transformace“. To je věta, ze které i vyhledávač potichu zívne. Lepší je článek „Kdy malý SaaS opravdu potřebuje cookie lištu a kdy jen zbytečně sbírá data“. Ten má čtenáře, problém i akci.

## B.2 Týdenní rytmus 60–90 minut

Obsahový systém nemusí sežrat pátek. Stačí krátký rytmus:

1. **10 minut — vyber téma.** Vezmi jednu otázku z obsahové banky.
2. **15 minut — napiš osnovu.** Nadpis, slib, tři až pět bodů, závěrečný checklist.
3. **30–45 minut — napiš první verzi.** Nelešti každou větu. Cody povoluje lidský text, nikoli muzeální exponát.
4. **15 minut — doplň důkazy.** Odkazy na dokumentaci, standardy, vlastní příklady nebo screenshoty.
5. **10 minut — připrav distribuci.** RSS, krátký příspěvek na LinkedIn, přímý odkaz do komunity, e-mail zákazníkům, pokud k tomu máš souhlas.

Výsledek nemusí být pokaždé velký článek. Střídej formáty:

- krátký praktický návod,
- checklist,
- rozhodovací strom,
- případová studie,
- vysvětlení pojmu,
- „co jsme změnili a proč“.

Vlastní web je základní archiv. Sociální síť je distribuční kanál, ne místo, kde tvůj obsah bydlí. Pokud platforma změní algoritmus, zpoplatní dosah nebo zítra dostane chuť na další „engagement optimalizaci“, tvůj archiv zůstává doma. Elegantní, nudné a velmi zdravé.

## B.3 Privacy-first distribuce

Distribuce bez šmírování není slabší. Jen je méně líná. Místo plošného sledování lidí napříč webem pracuješ s kontextem, kvalitou a přímým vztahem.

Používej:

- **RSS** pro lidi, kteří chtějí sledovat obsah bez algoritmů; specifikace RSS 2.0 je jednoduchá a stabilní, viz [RSS Advisory Board: RSS 2.0 Specification](https://www.rssboard.org/rss-specification),
- **přímé odkazy** v komunitách a partnerských vztazích,
- **newsletter jen se souhlasem** a jasným odhlášením,
- **produktové e-maily** pouze tam, kde dávají kontext a respektují očekávání zákazníka,
- **server-side agregované metriky** bez osobních údajů v eventech.

Nepoužívej jako výchozí režim:

- reklamní pixely na každé stránce,
- social share widgety, které načítají skripty třetích stran,
- UTM chaos bez pravidel,
- lead magnety, které slibují hodnotu a doručí PDF plné vaty,
- automatické enrichment nástroje, které sbírají profily lidí bez jasného důvodu.

GDPR staví mimo jiné na zásadách minimalizace údajů, účelového omezení a transparentnosti. Viz [EUR-Lex: GDPR článek 5](https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=CELEX%3A32016R0679). V marketingu to přelož jednoduše: nesbírej data jen proto, že můžeš. Sbírej jen to, co umíš férově vysvětlit a použít k lepší službě.

## B.4 Recyklace bez spamování

Jeden dobrý článek může žít dlouho. Recyklace není ostuda, pokud nepřeposíláš stejný odstavec do všech kanálů jako robot s megafonem.

Z jednoho článku udělej:

- checklist do dokumentace,
- krátký post s jedním konkrétním doporučením,
- odpověď na častou otázku v supportu,
- interní onboarding materiál,
- malou sekci na landing page,
- aktualizovaný úryvek do sales e-mailu.

Příklad: článek o vendor auditu můžeš rozdělit na LinkedIn post o exit plánu, checklist do znalostní báze, šablonu pro zákazníky a sekci „Jak vybíráme dodavatele“ na webu. Pořád je to stejná expertiza, jen přeložená do různých situací.

**Codyho komentář:** nejlepší obsahový marketing není továrna na články. Je to systém, který zachycuje, co se firma učí, a balí to tak, aby z toho měl zákazník užitek dřív, než musí mluvit s obchodem. Méně „brand awareness“, více „aha, tihle lidé chápou můj problém“.

## B.5 Checklist přílohy

Každý týden si odškrtni:

- Přibyl do obsahové banky alespoň jeden reálný zákaznický dotaz?
- Vybral jsi téma podle problému zákazníka, ne podle interní potřeby něco publikovat?
- Má text konkrétní další krok, checklist nebo příklad?
- Jsou faktická tvrzení podložená zdrojem nebo jasně označená jako názor?
- Bydlí finální obsah na vlastním webu, ne jen na sociální síti?
- Má článek čisté URL, titulek, meta description a interní odkazy?
- Distribuuješ přes kanály, které respektují souhlas a minimum trackerů?
- Víš, podle jaké jednoduché metriky poznáš, jestli obsah pomohl?

Hodinová iterace: otevři posledních deset zákaznických e-mailů, ticketů nebo poznámek z callů. Vyber jednu opakovanou otázku a napiš na ni praktickou odpověď do 800–1200 slov. Na konec dej checklist. Publikuj na vlastním webu, do RSS a pošli přímý odkaz tam, kde se otázka opravdu řeší. Žádné růstové šamanství, jen užitečná práce.



---

# Příloha C: Produktová analytika bez datového cirkusu

Produktová analytika má malému SaaS týmu pomoct rozhodovat, ne vyrábět nekonečný seriál dashboardů, na který se všichni dívají a nikdo podle něj nic nezmění. Privacy-first přístup neznamená, že zavřeš oči a budeš doufat, že produkt funguje. Znamená, že měříš méně věcí, ale lépe: události navržené kolem hodnoty pro zákazníka, bez reklamních identifikátorů, bez profilování napříč weby a bez sběru osobních údajů jen proto, že „by se to jednou mohlo hodit“.

Základní právní a produktová logika je jednoduchá: GDPR v článku 5 pracuje s principy jako minimalizace údajů, účelové omezení a omezení uložení. Viz [GDPR článek 5](https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=CELEX%3A32016R0679). ePrivacy pravidla zase řeší ukládání nebo čtení informací ze zařízení uživatele, což je důležité u cookies a podobných technologií. Viz [ePrivacy Directive](https://eur-lex.europa.eu/eli/dir/2002/58/oj?locale=en). Nejsem právník, jsem Cody; ale jako pracovní pravidlo pro produkt je to krásně střízlivé: nejdřív si napiš, proč něco měříš, a teprve potom řeš nástroj.

## C.1 Začni rozhodnutím, ne eventem

Špatný analytický plán začíná větou: „Budeme trackovat všechno a pak se uvidí.“ To je jako nahrát všechny porady, e-maily a kávové pauzy a tvrdit, že tím vznikne strategie. Nevznikne. Vznikne drahý nepořádek.

Lepší postup začíná rozhodnutím:

- Chceme vědět, jestli nový onboarding vede k prvnímu výsledku.
- Chceme zjistit, kde lidé opouštějí objednávku.
- Chceme porovnat, jestli obsahové články přivádějí relevantní trialy.
- Chceme odhalit, které funkce používají platící zákazníci opakovaně.
- Chceme najít místa, kde uživatel narazí na chybu nebo nepochopení.

Teprve k rozhodnutí přidáš metriky a eventy. Pokud neumíš říct, jaké rozhodnutí z metriky vznikne, event zatím nepotřebuješ. Možná je zajímavý, ale zajímavost není strategie. Zajímavost je věc, kterou si marketing vytiskne do prezentace, když nemá číslo, které bolí.

Praktická šablona pro každý event:

| Pole | Otázka | Příklad |
| --- | --- | --- |
| Rozhodnutí | Co podle toho změníme? | Zjednodušíme onboarding, pokud méně než 40 % trialů dokončí první projekt. |
| Event | Co přesně nastalo? | `project_created` |
| Kontext | Jaké neosobní vlastnosti potřebujeme? | typ šablony, plán, jazyk rozhraní |
| Riziko | Může obsahovat osobní údaje? | název projektu může obsahovat jméno klienta, proto ho neposíláme |
| Retence | Jak dlouho data držíme? | agregace po 90 dnech, surové eventy kratší dobu |
| Vlastník | Kdo event udržuje? | produktový člověk + vývojář |

## C.2 Navrhni malý slovník událostí

Malý SaaS nepotřebuje dvě stě eventů. Potřebuje stabilní slovník, kterému rozumí produkt, vývoj i marketing. Začni hlavní cestou zákazníka a přidej jen body, které ukazují postup k hodnotě.

Příklad pro B2B SaaS s trialem:

| Fáze | Událost | Proč ji měřit |
| --- | --- | --- |
| Akvizice | `signup_started` | Lidé začali registraci z webu nebo pozvánky. |
| Aktivace | `signup_completed` | Účet vznikl a lze navázat onboarding. |
| První hodnota | `first_workspace_created` | Uživatel udělal první krok k reálnému použití. |
| První výsledek | `first_report_exported` | Produkt doručil konkrétní výstup. |
| Spolupráce | `teammate_invited` | Produkt se dostává do týmu, ne jen k jednomu testujícímu. |
| Retence | `weekly_key_action_completed` | Zákazník se vrací k hlavní hodnotě. |
| Monetizace | `subscription_started` | Trial se změnil v placený závazek. |

Dobré názvy eventů jsou nudné, konzistentní a čitelné. Nepoužívej `click_button_blue_hero_v3_final`, protože za měsíc nebude modré tlačítko, hero bude jiná a „final“ bude lež, jak už to u souborů s final bývá. Používej události podle významu: `demo_requested`, `invoice_paid`, `integration_connected`.

Vlastnosti eventů drž skromně. U `subscription_started` možná potřebuješ plán, zemi fakturace na úrovni země a zdroj akvizice. Nepotřebuješ celé jméno, e-mail, IP adresu, text poznámky ani název firmy, pokud rozhodnutí umíš udělat bez nich.

## C.3 Odděl produktová data od osobních údajů

Nejčistší analytika vzniká ve chvíli, kdy produktová událost nese minimální kontext a citlivější údaje zůstávají v systému, kam patří. Analytický event nemá být druhá zákaznická databáze. Má být signál.

Praktická pravidla:

- Do eventů neposílej e-mail, telefon, jméno, adresu ani volný text od uživatele.
- ID uživatele nebo účtu používej jen pokud je opravdu nutné pro produktovou analýzu, ideálně pseudonymizovaně.
- U volných polí počítej s tím, že uživatel napíše osobní údaj i tam, kde ho nečekáš.
- Ukládej vlastnosti jako kategorie, ne jako syrový obsah: `template_type: "invoice"` je lepší než `template_name: "Faktura pro Nováka"`.
- Agreguj starší data, pokud pro rozhodování nepotřebuješ detail jednotlivých eventů.
- Přístupy k analytice dávej podle role, ne automaticky celé firmě.

Codyho komentář: nejlevnější osobní údaj je ten, který vůbec nesbíráš. Nemusíš ho šifrovat, exportovat, mazat na žádost, vysvětlovat v auditu ani se modlit, že neskončí v logu. Krásná technologie: neexistence.

## C.4 Měř kvalitu onboardingu

Onboarding je ideální místo pro malou, užitečnou analytiku. Nechceš vědět, kam uživatel pohnul myší. Chceš vědět, jestli se dostal k prvnímu výsledku dřív, než mu došla trpělivost.

Navrhni onboarding jako cestu:

1. registrace dokončena,
2. workspace nebo projekt vytvořen,
3. první důležitá konfigurace hotová,
4. první výstup vytvořen,
5. uživatel pozval kolegu nebo se vrátil další den.

Ke každému kroku doplň otázku:

- Kde uživatel neví, co má udělat?
- Kde žádáme moc informací příliš brzy?
- Kde čeká na ruční zásah týmu?
- Kde chybí ukázková data nebo šablona?
- Kde produkt slibuje hodnotu, ale doručí jen prázdnou obrazovku?

Pak si nastav týdenní rituál: podívej se na průchod onboardingem a vyber jednu překážku. Ne deset. Jednu. Uprav text, pořadí kroků, výchozí šablonu nebo chybovou hlášku. Za týden zkontroluj, jestli se metrika pohnula. Takhle vzniká produktová práce. Ne tím, že si koupíš další analytický nástroj a nazveš to „insights“.

## C.5 Dashboard na jednu obrazovku

Dashboard má být nástroj pro rozhodnutí během pár minut. Pokud k jeho pochopení potřebuješ archeologický tým, zjednoduš ho.

Pro malý SaaS stačí jedna obrazovka:

- **Akvizice:** návštěvy klíčových stránek, zdroje trialů, odeslané demo poptávky.
- **Aktivace:** dokončené registrace, vytvořené první projekty, čas k první hodnotě.
- **Retence:** týdenní návraty k hlavní akci, aktivní účty, účty bez aktivity.
- **Monetizace:** nové platby, zrušení, rozšíření plánu, neúspěšné platby.
- **Kvalita:** chyby formulářů, 404, incidenty, support témata z posledního týdne.

Ke každé části napiš vlastníkovi jednu rozhodovací otázku. Například: „Který krok aktivace tento týden zlepšíme?“ nebo „Který zdroj přivádí trialy, které opravdu dokončí první výsledek?“ Dashboard bez otázky je dekorace. A dekorace ať si klidně zůstane v obýváku, produktový tým potřebuje kompas.

## C.6 Checklist přílohy

Před zavedením nebo úpravou analytiky projdi:

- Má každý event jasné rozhodnutí, které podle něj uděláš?
- Je slovník událostí krátký, stabilní a srozumitelný i mimo vývojový tým?
- Neposíláš do analytiky e-maily, jména, volný text nebo jiné zbytečné osobní údaje?
- Má každá vlastnost eventu definovaný účel a vlastníka?
- Víš, jak dlouho držíš surové eventy a kdy je agreguješ nebo mažeš?
- Umíš vysvětlit zákazníkovi jednou větou, co měříš a proč?
- Kontroluješ onboarding podle výsledku, ne podle počtu kliknutí?
- Má dashboard otázky pro rozhodnutí, ne jen hezké grafy?

Hodinová iterace: vyber jeden kritický tok, třeba registraci nebo první vytvoření projektu. Sepiš pět až sedm eventů, u každého napiš rozhodnutí, vlastnosti, rizika a retenci. Pak jeden event škrtni. Pokud nejde škrtnout žádný, pravděpodobně jsi ještě nezačal dost přísně.


# Příloha D: Cenotvorba SaaS bez slevového cirkusu

Cena není jen číslo v tabulce. Je to produktové rozhodnutí, marketingové sdělení, filtr na zákazníky a slib úrovně služby. U malého SaaS týmu navíc určuje, kolik supportu si můžeš dovolit, jak rychle musíš růst a jestli budeš stavět zdravý byznys, nebo jen dotovat uživatele vlastním spánkem. Což je sice oblíbený startupový sport, ale medaili za něj většinou nedostaneš.

Privacy-first cenotvorba má ještě jednu vrstvu: neprodáváš levnou iluzi výměnou za data. Prodáváš jasnou hodnotu, rozumné podmínky a férový provoz v Evropě. Cena má zákazníkovi vysvětlit, co dostane, proč to stojí právě tolik a kde jsou hranice služby.

## D.1 Začni výsledkem, ne funkcí

Slabý pricing říká: „Basic má 3 projekty, Pro má 10 projektů, Business má 50 projektů.“ To může být technicky pravda, ale zákazník obvykle nekupuje projekty. Kupuje klid, rychlost, méně ruční práce, lepší reporting nebo nižší riziko.

Silnější pricing proto začíná otázkou:

> Který výsledek zákazník získá a jak pozná, že se mu cena vyplatila?

Příklad pro B2B SaaS na správu poptávek:

- **Solo:** „Mám všechny poptávky na jednom místě a nezapomenu odpovědět.“
- **Tým:** „Více lidí vyřizuje zakázky bez chaosu a duplicit.“
- **Provoz:** „Majitel vidí vytížení, zpoždění a kvalitu reakce bez ručního reportu.“

Funkce pak jen podporují tenhle výsledek. Pokud neumíš u tarifu napsat jednu větu hodnoty, pravděpodobně máš jen balík limitů. A balík limitů se prodává hůř než jasný posun v životě zákazníka.

## D.2 Tři tarify stačí, pokud každý má práci

Pro první verzi většinou stačí tři tarify. Ne proto, že to dělají všichni, ale protože tři jasné volby pomáhají zákazníkovi i týmu:

- **Startovací tarif** ověřuje, že malý zákazník chápe hodnotu a zvládne zaplatit bez prodejního hovoru.
- **Hlavní tarif** je doporučená volba pro zákazníka, kterého chceš získávat nejčastěji.
- **Vyšší tarif** chrání support, bezpečnostní nároky a pokročilejší provozní potřeby.

U každého tarifu si napiš interní pravidlo: „Tenhle tarif existuje pro koho?“ Pokud odpověď zní „pro všechny, kdo nechtějí platit víc“, tarif nemá strategii. Hlavní tarif by měl být nejlépe popsaný, nejméně matoucí a nejvíc napojený na hlavní use case. Nechceš, aby zákazník při výběru tarifu řešil sudoku. Chceš, aby si řekl: „Jo, tohle je pro mě.“

Praktická šablona:

| Tarif | Pro koho | Hlavní výsledek | Hranice tarifu | Signál pro upgrade |
| --- | --- | --- | --- | --- |
| Start | jednotlivec nebo mikro tým | pořádek v jedné agendě | málo členů, základní historie | uživatel řeší spolupráci |
| Tým | běžný zákazník | sdílený proces bez chaosu | standardní integrace a reporty | potřebuje řízení práv nebo SLA |
| Provoz | náročnější tým | kontrola, bezpečnost, odpovědnost | individuální onboarding | vyžaduje smlouvu, audit, SSO |

## D.3 Neprodávej slevu, prodávej rozhodnutí

Slevy jsou návykové. Krátkodobě zvednou konverzi, dlouhodobě učí zákazníky čekat. Pro malý SaaS je nebezpečné, když se pricing změní v tržnici: každý platí něco jiného, nikdo neví proč a support pak obsluhuje i zákazníky, kteří nikdy neměli být profitabilní.

Lepší je používat slevy jen tam, kde mají jasný důvod:

- roční platba výměnou za nižší churn a lepší cash flow,
- pilot s omezeným rozsahem a pevně daným koncem,
- neziskový nebo vzdělávací program s veřejnými pravidly,
- migrační nabídka pro konkrétní segment, ne věčná sleva pro každého.

Pokud prodáváš spotřebitelům v EU, dávej pozor na komunikaci slev. Pravidla EU k cenovým redukcím vyžadují, aby při oznámení slevy byla uvedena nejnižší cena použitá alespoň během předchozích 30 dnů; přehled uvádí Your Europe v části [Unfair pricing](https://europa.eu/youreurope/citizens/consumers/unfair-treatment/unfair-pricing/index_en.htm). U B2B SaaS je právní režim jiný podle konkrétní situace, ale férové pravidlo zůstává: neříkej „sleva“, pokud je to ve skutečnosti normální cena s divadelním přeškrtnutím.

**Codyho komentář:** sleva je jako pálivá omáčka. Trocha pomůže, ale když ji liješ na všechno, už nepoznáš, jak chutná produkt.

## D.4 Cena musí počítat s provozem v Evropě

Privacy-first provoz něco stojí. Evropský hosting, zálohy, bezpečnostní monitoring, audit dodavatelů, podpora v češtině nebo angličtině, dokumentace, DPA a rozumná retence dat nejsou ozdoby. Jsou součást služby.

Do ceny proto zahrň minimálně:

- infrastrukturu včetně záloh, logů a testovacího prostředí,
- čas na support a onboarding,
- bezpečnostní údržbu a aktualizace závislostí,
- administrativu kolem fakturace, daní a smluv,
- čas na dokumentaci, návody a interní provozní postupy,
- rezervu na incidenty a pomalejší měsíce.

Když cena nepokrývá reálný provoz, tým začne šetřit na věcech, které zákazník nevidí hned: monitoring, zálohy, revize přístupů, mazání starých dat. Přesně tam ale privacy-first produkt buď získává důvěru, nebo potichu rezne.

U přeshraničního prodeje v EU nezapomeň řešit DPH podle typu zákazníka a služby. Pro B2C přeshraniční prodeje v EU může být relevantní režim One Stop Shop, který Evropská komise popisuje jako portál pro plnění DPH povinností u vybraných přeshraničních prodejů a služeb; viz [EU VAT One Stop Shop](https://europa.eu/youreurope/business/taxation/vat/one-stop-shop/index_en.htm). Místo zdanění služeb se liší podle B2B/B2C a konkrétní služby; Evropská komise k tomu má přehled [Place of taxation](https://taxation-customs.ec.europa.eu/taxation/vat/vat-directive/place-taxation_en). Tohle není místo pro hrdinství: jakmile prodáváš do více zemí, zapoj účetní nebo daňového poradce.

## D.5 Pricing stránka má odpovědět na strachy

Dobrá pricing stránka není jen tabulka. Je to nákupní rozhovor bez obchodníka. Zákazník na ní řeší otázky, které často nevysloví nahlas:

- „Bude to pro mě moc složité?“
- „Co když vyberu špatný tarif?“
- „Můžu odejít a dostat svoje data?“
- „Kde se data zpracovávají?“
- „Je cena konečná, nebo mě čeká překvapení?“
- „Co se stane, když překročím limit?“

Privacy-first SaaS by měl mít na pricing stránce malý blok důvěry. Ne marketingovou mlhu, ale konkrétní věty:

- Data provozujeme v EU.
- Nepoužíváme reklamní trackery třetích stran.
- Zákazník může exportovat svá data.
- Retenci provozních logů držíme omezenou a popsanou.
- Smlouvu o zpracování osobních údajů poskytujeme u tarifů, kde dává smysl.

Tohle může snížit počet leadů, kteří chtějí jen nejlevnější řešení. Výborně. Cena má filtrovat. Špatný zákazník není „růstová příležitost“, ale budoucí support ticket s fakturou po splatnosti.

## D.6 Checklist přílohy

Před zveřejněním nebo úpravou pricingu projdi:

- Umíš u každého tarifu jednou větou popsat výsledek pro zákazníka?
- Je hlavní tarif zřetelně doporučený a odpovídá ideálnímu zákazníkovi?
- Jsou limity navázané na náklady nebo hodnotu, ne jen náhodně rozsekané funkce?
- Máš jasné pravidlo pro roční platby, piloty a výjimky?
- Nepoužíváš falešné slevy, časový nátlak nebo skryté poplatky?
- Počítá cena s evropským provozem, podporou, zálohami, bezpečností a administrativou?
- Ví zákazník, kde jsou data, jak odejde a co se stane při překročení limitu?
- Máš ověřené DPH a fakturační povinnosti pro země, kam skutečně prodáváš?

Hodinová iterace: vezmi existující pricing nebo návrh nabídky a přepiš ho do tabulky „tarif — pro koho — výsledek — hranice — signál pro upgrade“. Pak vyber jednu matoucí funkci nebo limit a nahraď ji zákaznickým výsledkem. Pokud to nejde, problém není v copywritingu, ale v balíčkování.


# Příloha E: Lifecycle e-maily bez spamování

Lifecycle e-mail není newsletter s falešným knírkem. Je to provozní a produktová komunikace, která uživateli pomáhá udělat další smysluplný krok: dokončit registraci, pochopit první hodnotu, pozvat kolegu, obnovit fakturaci, vyřešit problém nebo se férově rozloučit. Když se povede, zákazník má pocit, že produkt myslí dopředu. Když se nepovede, má pocit, že ho pronásleduje automat s kávou, který se naučil psát předměty e-mailů.

Privacy-first přístup znamená dvě věci. Zaprvé: neposílej zprávu jen proto, že umíš změřit segment. Zadruhé: u každé automatizace si napiš účel, právní základ, zdroj dat, retenci a jednoduchou možnost odmítnutí tam, kde jde o obchodní sdělení. ÚOOÚ u obchodních sdělení připomíná, že zpráva má být jasně označená, odesílatel nesmí být skrytý a adresát musí mít platnou adresu nebo jiný přímý a účinný způsob odmítnutí; viz [Obchodní sdělení](https://uoou.gov.cz/index.php/profesional/qa-otazky-a-odpovedi/obchodni-sdeleni) a přehled k [GDPR a přímému elektronickému marketingu](https://uoou.gov.cz/novinky/obchodni-sdeleni/gdpr-a-primy-elektronicky-marketing). Tohle není právní poradenství, ale produktový kompas: e-mail má být užitečný i obhajitelný.

## E.1 Rozděl zprávy podle účelu

Nejdřív si odděl typy komunikace. Tím zabráníš tomu, aby se každý e-mail tvářil jako „servisní“, i když ve skutečnosti prodává další tarif.

Praktické rozdělení:

- **Transakční zprávy:** potvrzení registrace, reset hesla, faktura, bezpečnostní upozornění, změna podmínek služby.
- **Produktové zprávy:** připomenutí nedokončeného onboardingu, tip k používané funkci, upozornění na limit, shrnutí aktivity.
- **Marketingové zprávy:** newsletter, akce, upsell, pozvánka na webinář, případová studie, reaktivační nabídka.
- **Support zprávy:** odpověď na ticket, stav incidentu, žádost o doplnění informací, uzavření problému.

U každého typu si napiš pravidlo: „Kdy je legitimní zprávu poslat?“ Například bezpečnostní upozornění pošleš vždy, protože chrání účet. Newsletter pošleš jen lidem, kteří splňují podmínky pro obchodní sdělení a mají snadný opt-out. Produktový tip pošleš jen tehdy, když uživatel opravdu používá související funkci nebo je uprostřed konkrétního toku.

Špatný příklad: „Všem neaktivním uživatelům pošleme pět e-mailů, ať se vrátí.“

Lepší příklad: „Uživatelům, kteří vytvořili projekt, ale nepozvali kolegu, pošleme po třech dnech jeden e-mail s konkrétním přínosem spolupráce a možností vypnout produktové tipy.“

## E.2 Onboardingová sekvence má vést k výsledku

Onboardingové e-maily nemají popisovat produkt od sklepa po střechu. Mají dovést uživatele k prvnímu výsledku. Pokud SaaS slibuje pořádek v poptávkách, první e-mail nemá vyjmenovat integrace. Má pomoct dostat první poptávku do systému a odpovědět na ni.

Jednoduchá sekvence pro B2B SaaS:

| Den | Spouštěč | Cíl e-mailu | Příklad obsahu |
| --- | --- | --- | --- |
| 0 | registrace | potvrdit další krok | „Vytvoř první projekt a pošli si testovací poptávku.“ |
| 1 | projekt existuje, bez dat | odstranit prázdnou obrazovku | „Tady je CSV šablona nebo ruční příklad první položky.“ |
| 3 | data existují, bez spolupráce | ukázat týmovou hodnotu | „Pozvi kolegu, ať neřešíte duplicitní odpovědi.“ |
| 7 | žádný klíčový výsledek | nabídnout pomoc | „Pošli mi odpověď, kde ses zasekl, nebo si vyber 15min call.“ |
| 14 | výsledek dosažen | posílit návyk | „Tady je týdenní souhrn a jeden tip na zrychlení.“ |

Každý e-mail by měl mít jednu akci. Ne tři tlačítka, dvě sekundární nabídky a P. S. s webinářem. Jedna zpráva, jeden krok. Když chceš přidat druhou akci, většinou potřebuješ druhý e-mail nebo lepší produkt.

**Codyho komentář:** onboardingový e-mail je jako dobrý průvodce v muzeu. Ukáže ti jednu důležitou věc a nechá tě ji pochopit. Nezačne recitovat inventární čísla všech exponátů, protože má zrovna mikrofon.

## E.3 Minimalizuj segmentaci

Segmentace je užitečná, ale rychle se z ní stane datový bufet. Malý tým nepotřebuje stovky segmentů podle každého kliknutí. Potřebuje pár stavů, které odpovídají hodnotě produktu.

Začni těmito stavy:

- **Nový účet:** uživatel se registroval, ale ještě nedosáhl první hodnoty.
- **Aktivovaný účet:** uživatel dokončil první klíčový výsledek.
- **Rizikový účet:** dříve aktivní účet přestal dělat klíčovou akci.
- **Rostoucí účet:** účet naráží na limit, zve další lidi nebo používá pokročilé funkce.
- **Odcházející účet:** uživatel ruší tarif, exportuje data nebo žádá o výmaz.

Pro každý stav definuj jen minimum údajů: ID účtu, jazyk, tarif, poslední klíčová akce, souhlas nebo opt-out pro marketing, technický stav doručitelnosti. Nepotřebuješ ukládat volný text z poznámek, osobní profilování ani „skóre zájmu“ podle každého otevření e-mailu. Otevření e-mailu je navíc slabý signál: může ho ovlivnit ochrana soukromí v klientovi, náhledy nebo bezpečnostní proxy. Rozhodnutí raději stav na produktových akcích, které souvisejí s hodnotou.

## E.4 Odhlášení a preference nejsou porážka

Když se člověk odhlásí, neprohrál marketing. Vyhrála důvěra. Raději mít menší seznam lidí, kteří chtějí číst, než velkou databázi otrávených adresátů. U obchodních sdělení počítej s viditelným odhlašovacím odkazem v těle zprávy a s technickou podporou hlaviček pro odhlášení tam, kde to dává smysl. RFC 2369 popisuje hlavičku [List-Unsubscribe](https://datatracker.ietf.org/doc/html/rfc2369) a RFC 8058 doplňuje [one-click unsubscribe](https://datatracker.ietf.org/doc/html/rfc8058) přes `List-Unsubscribe-Post`.

Preference centrum nemusí být monstrum. Pro první verzi stačí:

- produktové tipy,
- newsletter a obsah,
- obchodní nabídky,
- incidenty a bezpečnostní upozornění,
- fakturace a povinné servisní zprávy.

U posledních dvou kategorií jasně vysvětli, že nejde o běžný marketingový odběr. Uživatel se může odhlásit z obchodních sdělení, ale nemůže rozumně vypnout reset hesla, faktury nebo bezpečnostní upozornění k vlastnímu účtu. Tohle napiš lidsky, ne právničtinou: „Tyto zprávy posíláme, aby služba fungovala a účet zůstal bezpečný.“

## E.5 Šablona lifecycle mapy

Použij tuhle jednoduchou tabulku dřív, než nastavíš automatizaci v nástroji:

| Pole | Otázka | Příklad |
| --- | --- | --- |
| Název zprávy | Jak se automatizace jmenuje? | „První projekt bez dat“ |
| Účel | Jakému výsledku pomáhá? | Uživatel vloží první poptávku |
| Spouštěč | Co přesně zprávu spustí? | Projekt existuje 24 hodin a nemá položku |
| Publikum | Koho zahrnuje a koho vylučuje? | Jen trial účty, ne odhlášení z produktových tipů |
| Data | Jaká data použiješ? | Account ID, jazyk, datum vytvoření projektu |
| Právní režim | Servisní, produktové, nebo obchodní sdělení? | Produktový tip, bez upsellu |
| Retence | Jak dlouho držíš log o odeslání? | 90 dnů agregovaně, detaily jen pro support |
| Exit | Jak člověk tok zastaví? | Dokončí akci, odhlásí tipy, kontaktuje support |

Pak si napiš text e-mailu v tomto formátu:

```text
Předmět: [konkrétní výsledek, ne trik]

Ahoj,
[jedna věta kontextu: proč píšeme]

[jeden doporučený krok]

[krátké vysvětlení přínosu]

[odkaz na akci]

Pokud tyhle produktové tipy nechceš, můžeš je vypnout tady: [odkaz].
```

Předmět „Ještě jste nedokončili nastavení“ je slabý. Předmět „Pošlete si první testovací poptávku za 2 minuty“ je lepší, protože říká akci i časový rámec. Jen neslibuj dvě minuty, pokud to běžně trvá deset. Důvěra není A/B testovací proměnná, kterou můžeš obětovat za otevření.

## E.6 Checklist přílohy

Před spuštěním lifecycle komunikace projdi:

- Má každá zpráva jeden jasný účel a jednu hlavní akci?
- Rozlišuješ transakční, produktové, marketingové a support zprávy?
- Máš u obchodních sdělení doložitelný souhlas nebo jiný použitelný režim podle vztahu se zákazníkem?
- Je odesílatel jasný a zpráva neskrývá obchodní povahu?
- Má příjemce jednoduchý opt-out u marketingu a produktových tipů?
- Nepoužíváš segmentaci založenou na zbytečných osobních údajích nebo volném textu?
- Držíš logy o odeslání jen tak dlouho, jak potřebuje support, bezpečnost a dokazatelnost?
- Umíš ručně vysvětlit, proč daný člověk dostal danou zprávu?

Hodinová iterace: vezmi jednu existující nebo plánovanou e-mailovou automatizaci a vyplň lifecycle mapu. Pokud u ní neumíš napsat účel, spouštěč, data, právní režim a exit, automatizaci zatím nespouštěj. Nejlepší e-mail je někdy ten, který produkt nemusí poslat, protože uživatel pochopil další krok přímo v rozhraní.


# Příloha F: Support a dokumentace jako produktová páka

Support není odpadní kanál pro věci, které se nepovedly v produktu. Je to jeden z nejlepších zdrojů poznání, důvěry a obsahu. Malý SaaS tým si často myslí, že support začne řešit „až bude víc zákazníků“. To je past. Když máš první zákazníky a support nemá rytmus, začnou se ti stejné otázky vracet v e-mailu, chatu, telefonu, interních poznámkách a v hlavě zakladatele. Výsledek? Zakladatel se tváří jako CRM systém s kofeinem. Neudržitelné, i když místy poetické.

Dobře navržený support dělá tři věci najednou:

- pomáhá konkrétnímu zákazníkovi dokončit práci,
- ukazuje týmu, kde produkt mate nebo selhává,
- vytváří dokumentaci, která snižuje budoucí zátěž.

Privacy-first support navíc nepředpokládá, že každý tiket smí obsahovat kompletní historii uživatele, nahrávky obrazovky, IP adresy a volný export databáze. Cílem je pochopit problém s nejmenším množstvím dat, které k vyřešení opravdu potřebuješ.

## F.1 Jeden vstup, jasný slib

Na začátku nepotřebuješ enterprise helpdesk s pěti frontami. Potřebuješ jedno jasné místo, kde zákazník ví, jak tě kontaktovat, a jednu interní tabulku nebo jednoduchý nástroj, kde tým vidí stav. Důležité je, aby se podpora nerozpadla mezi osobní inboxy.

Minimální support slib může vypadat takhle:

- „Pište na support@example.com.“
- „Odpovídáme v pracovní dny obvykle do 24 hodin.“
- „U urgentních provozních chyb napište do předmětu `URGENT` a přiložte ID účtu nebo projektu.“

Neslibuj nepřetržitou podporu, pokud ji reálně nemáš. U malého SaaS je férovější říct „pracovní dny do 24 hodin“ a držet to, než předstírat 24/7 support a doufat, že se incidenty budou chovat slušně. Nebudou. Incidenty neumí etiketu.

Interně si u každého požadavku drž jen pár polí:

| Pole | Proč existuje |
| --- | --- |
| Typ | chyba, otázka, billing, feature request, bezpečnost |
| Dopad | blokuje práci, zpomaluje práci, kosmetika, nápad |
| Stav | nové, čeká na tým, čeká na zákazníka, vyřešeno |
| Vlastník | kdo má další krok |
| Odkaz | související issue, dokumentace nebo rozhodnutí |

Tohle stačí překvapivě dlouho. Kouzlo není v nástroji, ale v tom, že každý požadavek má další krok a vlastníka.

## F.2 Z tiketu udělej signál

Každý tiket by měl po vyřešení skončit jednou krátkou klasifikací. Ne kvůli reportingu pro reporting, ale kvůli rozhodování. Když se stejný typ dotazu opakuje, není to „uživatelé nečtou“. Často je to produkt, text nebo onboarding, který neumí vysvětlit další krok.

Praktické kategorie:

- **Nejasný text v rozhraní** — uživatel neví, co znamená pole, stav nebo tlačítko.
- **Chybějící dokumentace** — odpověď existuje v hlavě týmu, ale ne veřejně.
- **Slabý onboarding** — uživatel se zasekne před prvním výsledkem.
- **Skutečná chyba** — produkt slíbil něco, co nefunguje.
- **Nesladěné očekávání** — marketing nebo pricing vyvolal jiný dojem než produkt.

Jednou týdně si projdi posledních 10–20 požadavků a zeptej se:

1. Který dotaz se opakuje?
2. Který dotaz blokoval platbu nebo aktivaci?
3. Který dotaz by nemusel vzniknout, kdybychom změnili jednu větu v produktu?
4. Která odpověď si zaslouží článek v nápovědě?

Tahle retrospektiva může trvat 20 minut. Pokud trvá dvě hodiny, máš moc kategorií, moc procesů, nebo tým tajně staví ministerstvo supportu. Zpátky na zem.

## F.3 Dokumentace má být blízko akce

Dokumentace není knihovna pro lidi, kteří už vědí, co hledají. Nejlepší dokumentace je tam, kde člověk zrovna váhá: u formuláře, v prázdném stavu, vedle importu, v nastavení fakturace, v e-mailu po registraci.

Začni čtyřmi typy článků:

- **Rychlý start** — jak dosáhnout prvního výsledku za jeden krátký průchod.
- **Jak udělat konkrétní úkol** — jeden článek, jedna akce, žádná encyklopedie.
- **Vysvětlení pojmu** — co znamená stav, metrika, role nebo nastavení.
- **Řešení problému** — co zkontrolovat, když něco nefunguje.

Šablona krátkého článku:

```text
# Jak [udělat konkrétní věc]

Kdy to použít: [situace]

Než začneš: [co musí být připravené]

Postup:
1. [krok]
2. [krok]
3. [ověření výsledku]

Časté zádrhely:
- [problém] → [řešení]

Související:
- [odkaz]
```

Piš dokumentaci stejným jazykem, jakým mluví zákazník. Pokud zákazník říká „faktura“, neříkej všude „daňový doklad“, pokud to není nutné kvůli přesnosti. Pokud zákazník říká „člen týmu“, nemusíš mu vnucovat „subjekt spolupráce v pracovním prostoru“. Tohle není fantasy román, nepotřebuješ vlastní mytologii.

## F.4 Privacy-first support v praxi

Support často svádí k tomu, že si tým řekne: „Pošli nám screenshot všeho, export všeho a přístup do účtu.“ Ne. Zkus nejdřív pracovat s minimem.

Dobré zásady:

- Ptej se na ID projektu, objednávky nebo anonymizovaný identifikátor, ne na zbytečné osobní údaje.
- U screenshotů požádej zákazníka, ať začerní osobní údaje, pokud nejsou nutné.
- Nedávej support lidem sdílené účty; každý člen týmu má mít vlastní přístup.
- U citlivých dotazů ověř, že píše oprávněná osoba.
- Do interních poznámek nekopíruj víc osobních dat, než je potřeba pro řešení.
- Po vyřešení incidentu odděl technické poučení od osobních detailů.

Praktická odpověď na problém může znít:

```text
Ahoj,
díky za hlášení. Abychom to našli bez zbytečného sdílení dat, pošli prosím jen ID projektu a přibližný čas, kdy se chyba stala. Screenshot pomůže, ale začerni v něm jména, e-maily nebo obsah zákazníků, pokud nejsou přímo součástí chyby.

Mrkneme na to a dáme vědět další krok.
```

Tím zákazníkovi ukazuješ dvě věci: chceš problém vyřešit a zároveň respektuješ jeho data. To je silnější signál důvěry než další badge „secure“ v patičce.

## F.5 Z odpovědí stav obsah

Support je zlatý důl pro marketing, pokud ho nepoužiješ hloupě. Neznamená to publikovat zákaznické problémy. Znamená to vytahovat obecné vzorce a anonymizovat je do užitečného obsahu.

Příklad transformace:

- Tiket: „Nevím, jestli mám pozvat účetní jako admina.“
- Dokumentace: „Role v týmu: kdy použít admina, editora a účetní přístup.“
- Produkt: Přidat vysvětlení rolí přímo do pozvánky.
- Marketing: Článek „Jak bezpečně sdílet SaaS účet s externí účetní“.
- Sales: Krátká odpověď pro zákazníky, kteří se ptají na řízení přístupů.

Jedna dobrá odpověď tak může zlepšit produkt, dokumentaci, SEO i obchodní komunikaci. To je produktivita, ne jen „víc obsahu“.

## F.6 Checklist přílohy

Před tím, než support začne růst živelně, projdi:

- Má zákazník jedno jasné místo, kam napsat o pomoc?
- Slibuješ jen takovou rychlost odpovědi, kterou umíš dlouhodobě držet?
- Má každý požadavek typ, dopad, stav, vlastníka a další krok?
- Děláš krátkou týdenní retrospektivu opakovaných dotazů?
- Přepisuješ opakované odpovědi do dokumentace nebo přímo do produktu?
- Je dokumentace blízko místům, kde uživatelé váhají?
- Sbírá support jen data nutná k vyřešení konkrétního problému?
- Umíš z tiketu vytvořit anonymizovaný signál pro produkt, obsah nebo sales?

Hodinová iterace: vezmi posledních pět support dotazů, rozděl je do kategorií a vyber jeden, který přepíšeš do krátkého článku nápovědy nebo mikrotextu v produktu. Pokud stejnou odpověď píšeš potřetí, už to není odpověď. Je to backlog položka v převleku.


# Příloha G: Zálohy a obnova bez paniky

Zálohy jsou nudné jen do chvíle, než je opravdu potřebuješ. Pak se z nich během pěti minut stane nejdůležitější feature celého SaaS. A zákazníka v tu chvíli nezajímá, jestli máš krásný dashboard. Zajímá ho, jestli se jeho data vrátí, za jak dlouho a v jakém stavu.

Pro malý evropský SaaS není cílem stavět katastrofický bunkr za miliony. Cílem je mít jednoduchý, pravidelně ověřovaný systém, který zvládne tři běžné situace: omylem smazaná data, rozbitý release a bezpečnostní incident. GDPR navíc v článku 32 výslovně mluví o schopnosti obnovit dostupnost a přístup k osobním údajům včas po fyzickém nebo technickém incidentu. Zálohy tedy nejsou „hezký bonus“. Jsou součást odpovědného provozu.

**Codyho komentář:** pokud plán obnovy existuje jen v hlavě jednoho vývojáře, nemáš plán obnovy. Máš single point of failure s účesem.

## G.1 Nejdřív rozhodni, co se musí obnovit

Začni seznamem systémů, ne nákupem backup nástroje. U každé části produktu napiš, co by se stalo, kdyby zmizela nebo byla poškozená.

Praktické minimum pro SaaS:

- **Databáze:** účty, projekty, fakturace, produktová data, auditní záznamy.
- **Objektové úložiště:** nahrané soubory, exporty, obrázky, dokumenty.
- **Konfigurace:** environment proměnné, DNS, infrastruktura jako kód, cron úlohy.
- **Aplikační kód:** repozitář, tagy releasů, build artefakty, migrační skripty.
- **Provozní znalost:** runbooky, kontakty, přístupové role, postup pro komunikaci se zákazníky.

U každé položky si stanov dvě čísla:

- **RPO:** kolik dat si můžeš dovolit ztratit, například 15 minut, 1 hodinu nebo 1 den.
- **RTO:** za jak dlouho musí služba znovu běžet, například 2 hodiny nebo 1 pracovní den.

Nemusíš hned slibovat enterprise parametry. Musíš ale vědět, co reálně umíš. Lepší je čestně říct „kritická data obnovujeme do 4 hodin“ než mít na webu neurčité „high availability“ a při incidentu hledat heslo k databázi v chatu z loňska. To je takový digitální lov pokladů, akorát poklad hoří.

## G.2 Jedna záloha nestačí

NCSC ve svých doporučeních k zálohám upozorňuje, že ransomware a malware mohou zasáhnout i připojená úložiště. Proto je důležité nemít všechny kopie online a dostupné stejnými přístupovými údaji. Pro malý tým je dobrý cíl jednoduchý: více kopií, oddělené přístupy, pravidelný test obnovy.

Praktický model:

- **Krátké databázové snapshoty:** časté zálohy pro rychlé opravy po lidské chybě.
- **Denní šifrovaná kopie:** mimo primární produkční účet nebo projekt.
- **Týdenní oddělená kopie:** účet s jinými přístupy, ideálně s omezeným zápisem a delší retencí.
- **Konfigurační export:** seznam DNS, proměnných, cronů a externích závislostí.
- **Runbook obnovy:** jeden dokument, podle kterého projde obnovou i někdo jiný než autor systému.

Privacy-first provoz znamená, že zálohy mají stejnou datovou disciplínu jako produkce. Šifruj je, omez přístupy, nastav retenci a nemaž práva jen „až bude čas“. Záloha plná osobních údajů není méně citlivá jen proto, že leží v jiné složce.

## G.3 Test obnovy je důležitější než zelený backup job

Zelený stav „backup completed“ říká jen to, že se něco někam zapsalo. Neříká, že to umíš obnovit. Skutečná kontrola je až obnovení do izolovaného prostředí.

Jednou měsíčně udělej malý restore drill:

1. Vezmi poslední zálohu databáze.
2. Obnov ji do odděleného testovacího prostředí.
3. Spusť migrační kontrolu a základní smoke test.
4. Ověř, že se aplikace přihlásí a načte vzorový projekt.
5. Změř čas od začátku obnovy po první funkční obrazovku.
6. Zapiš výsledek do logu obnovy.

Ukázka logu:

| Datum | Scénář | Výsledek | Čas obnovy | Poznámka |
|---|---|---:|---:|---|
| 2026-08-05 | Obnova databáze do stagingu | OK | 38 min | Chyběl krok pro reindex vyhledávání |

Tahle tabulka je malá, ale cenná. Po třech měsících vidíš, jestli se obnova zrychluje, zpomaluje nebo stojí na ručních krocích. A pokud přijde audit, bezpečnostní dotazník nebo větší zákazník, máš konkrétní důkaz, ne jen větu „zálohujeme pravidelně“.

## G.4 Obnova produktu není jen databáze

Při incidentu se často ukáže, že databáze je v pořádku, ale tým neumí rychle obnovit okolní systém: DNS, proměnné, platební webhooky, e-mailové šablony, fronty, úlohy na pozadí nebo integrace. Proto si k zálohám přidej provozní mapu.

Provozní mapa může být obyčejná Markdown tabulka:

| Oblast | Kde je pravda | Jak obnovit | Kdo má přístup |
|---|---|---|---|
| DNS | EU DNS provider | Export z administrace + screenshot kritických záznamů | Owner + ops |
| Databáze | Managed PostgreSQL v EU regionu | Denní dump + point-in-time restore | Ops |
| Soubory | EU object storage | Replikovaná šifrovaná kopie | Ops |
| E-maily | Transactional provider | Šablony v repozitáři | Product + ops |
| Platby | PSP dashboard | Webhook secret v trezoru | Owner |

Nejde o dokonalost. Jde o to, aby nikdo při výpadku nelovil kritické informace v pěti účtech, dvou hlavách a jednom zapomenutém dokumentu s názvem `final-final-prod-new.md`.

## G.5 Privacy-first obnova po incidentu

Když obnovuješ službu po incidentu, máš dvě povinnosti: dostat produkt bezpečně zpátky do provozu a nezvětšit škodu neuváženou manipulací s daty. To znamená neobnovovat produkční data do prostředí, kam mají přístup lidé nebo nástroje, které je běžně nepotřebují.

Pravidla:

- Obnovuj produkční osobní údaje jen do prostředí se stejnou nebo vyšší úrovní ochrany.
- Pro vývoj a ladění preferuj anonymizovaná nebo syntetická data.
- Po testu obnovy smaž dočasné kopie a zapiš, kdo s nimi pracoval.
- Přístup k zálohám nedávej stejným účtům, které běžně deployují aplikaci.
- Pokud incident mohl zasáhnout osobní údaje, odděl technickou obnovu od posouzení oznamovací povinnosti.

To poslední je důležité: ne každý výpadek je porušení zabezpečení osobních údajů, ale každý podezřelý incident si zaslouží krátký záznam. Kdo ho zjistil, kdy, co bylo zasaženo, jaká data mohla být dotčena, co se udělalo a kdo rozhodl o dalším postupu.

## G.6 Checklist přílohy

Před tím, než si odškrtneš „zálohy máme“, projdi:

- Víš, která data, soubory, konfigurace a externí závislosti musíš obnovit?
- Má každá kritická část stanovené RPO a RTO?
- Existuje aspoň jedna kopie oddělená od běžného produkčního přístupu?
- Jsou zálohy šifrované a mají omezenou retenci?
- Testoval někdo obnovu v posledních 30 dnech?
- Umí obnovu spustit i člověk, který systém původně nestavěl?
- Máš log testů obnovy s datem, výsledkem a časem obnovy?
- Neobnovuješ osobní údaje do vývojového prostředí bez jasného důvodu?
- Máš krátký incident záznam pro případy, kdy mohl být dotčen provoz nebo data?

Hodinová iterace: vyber jednu kritickou databázi nebo úložiště, napiš k ní RPO/RTO, najdi poslední zálohu a ověř aspoň první krok obnovy v izolovaném prostředí. Pokud neumíš říct, kde záloha je, právě jsi našel nejlevnější bezpečnostní audit svého života.


## Zdroje

- ADR GitHub Organization: [Architectural Decision Records](https://adr.github.io/)
- Atlassian: [Working with WIP limits for kanban](https://www.atlassian.com/agile/kanban/wip-limits)
- European Commission: [Can someone else process the data on my organisation’s behalf?](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/obligations/controllerprocessor/can-someone-else-process-data-my-organisations-behalf_en)
- European Commission: [NIS2 Directive: securing network and information systems](https://digital-strategy.ec.europa.eu/en/policies/nis2-directive)
- DORA: [Software delivery performance metrics](https://dora.dev/guides/dora-metrics/)
- EUR-Lex: [Nařízení GDPR 2016/679, článek 5 a 25](https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=CELEX%3A32016R0679)
- EUR-Lex: [Nařízení GDPR 2016/679, článek 32](https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=CELEX%3A32016R0679)
- EUR-Lex: [Nařízení GDPR 2016/679, článek 28](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679)
- EUR-Lex: [Directive (EU) 2022/2555 — NIS2, Article 21](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32022L2555)
- EUR-Lex: [ePrivacy Directive 2002/58/EC](https://eur-lex.europa.eu/eli/dir/2002/58/oj?locale=en)
- European Commission: [Place of taxation — VAT rules](https://taxation-customs.ec.europa.eu/taxation/vat/vat-directive/place-taxation_en)
- Google SRE: [Managing Incidents](https://sre.google/sre-book/managing-incidents/)
- Google SRE: [Production Services Best Practices](https://sre.google/sre-book/service-best-practices/)
- Google SRE: [Service Level Objectives](https://sre.google/sre-book/service-level-objectives/)
- NCSC: [Backing up your data](https://www.ncsc.gov.uk/collection/small-organisations-guide-to-cyber-security/backing-up-your-data)
- NCSC: [Ransomware-resistant backups](https://www.ncsc.gov.uk/collection/ransomware-resistant-backups)
- OWASP Foundation: [Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/)
- European Data Protection Board: [Privacy by design and by default](https://www.edpb.europa.eu/topics/ai-and-technology/privacy-by-design-and-by-default_en)
- European Data Protection Board: [Pokyny 4/2019 k článku 25 — záměrná a standardní ochrana osobních údajů](https://www.edpb.europa.eu/documents/guideline/guidelines-42019-on-article-25-data-protection-by-design-and-by-default_cs)
- Google Search Central: [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- web.dev: [Core Web Vitals](https://web.dev/articles/vitals)
- RSS Advisory Board: [RSS 2.0 Specification](https://www.rssboard.org/rss-specification)
- RFC Editor: [RFC 2369 — The Use of URLs as Meta-Syntax for Core Mail List Commands](https://datatracker.ietf.org/doc/html/rfc2369)
- RFC Editor: [RFC 8058 — Signaling One-Click Functionality for List Email Headers](https://datatracker.ietf.org/doc/html/rfc8058)
- ÚOOÚ: [Obchodní sdělení](https://uoou.gov.cz/index.php/profesional/qa-otazky-a-odpovedi/obchodni-sdeleni)
- ÚOOÚ: [GDPR a přímý elektronický marketing](https://uoou.gov.cz/novinky/obchodni-sdeleni/gdpr-a-primy-elektronicky-marketing)
- Your Europe: [EU VAT One Stop Shop](https://europa.eu/youreurope/business/taxation/vat/one-stop-shop/index_en.htm)
- Your Europe: [Unfair pricing](https://europa.eu/youreurope/citizens/consumers/unfair-treatment/unfair-pricing/index_en.htm)
- Your Europe: [Data protection and online privacy](https://europa.eu/youreurope/citizens/consumers/internet-telecoms/data-protection-online-privacy/index_en.htm)
- W3C: [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)
- Google Search Central: [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

## Pracovní log

- 2026-08-05: Doplněna příloha G o zálohách a obnově SaaS: RPO/RTO, oddělené kopie, test obnovy, provozní mapa, privacy-first incident postup a checklist.
- 2026-08-05: Doplněna příloha F o supportu a dokumentaci jako produktové páce: jasný support slib, třídění tiketů, dokumentace u akce, privacy-first řešení požadavků a checklist.
- 2026-08-05: Doplněna příloha E o lifecycle e-mailech bez spamování: rozdělení zpráv podle účelu, onboardingovou sekvenci, minimalizaci segmentace, preference, odhlášení a checklist.
- 2026-08-05: Doplněna příloha D o cenotvorbě SaaS bez slevového cirkusu: tarify podle výsledku, férové slevy, evropské provozní náklady, DPH upozornění, pricing stránka a checklist.
- 2026-08-05: Doplněna příloha C o privacy-first produktové analytice: rozhodovací eventy, malý slovník událostí, minimalizace osobních údajů, onboardingový dashboard a checklist.
- 2026-08-05: Doplněna příloha A s praktickou jednostránkovou šablonou privacy-first vendor auditu, skórováním rizika, pilotním postupem a checklistem.
- 2026-08-05: Doplněna příloha B s praktickým privacy-first obsahovým systémem pro malé SaaS týmy, týdenním rytmem, distribucí a checklistem.
- 2026-08-05: Dopsána kapitola 7 o růstu bez chaosu: úzká hrdla, rozhodovací metriky, release proces, incidenty, vendor gate, bezpečnost a checklist.
- 2026-08-05: Dopsána kapitola 6 o privacy-first provozu v Evropě: datová mapa, minimalizace údajů, vendor audit, logování, bezpečnostní minimum a checklist.
- 2026-08-05: Dopsána kapitola 5 o produktivitě malého týmu: omezení rozdělané práce, týdenní rytmus, dokumentace, ADR, automatizace, AI asistenti a checklist.
- 2026-08-05: Dopsána kapitola 4 o marketingu bez závislosti na platformách: vlastní kanály, obsahový rytmus, distribuce, RSS, newsletter se souhlasem, partnerství a checklist.
- 2026-08-05: Dopsána kapitola 3 o SaaS cestě k první platbě: MVP, validace platbou, onboarding, privacy-first metriky, bezpečnostní minimum a checklist.
- 2026-08-05: Dopsána kapitola 2 o webu jako obchodníkovi: hero sekce, důvěra, struktura homepage, technická kvalita, privacy-first měření a checklist.
- 2026-08-05: Vytvořena základní struktura e-booku, úvod, osnova a dokončená kapitola 1 o definici problému, nabídce a privacy-first zadání produktu.
