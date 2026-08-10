# Webový vývoj, SaaS a marketing bez datového cirkusu

Praktický český e-book pro podnikatele, freelancery a malé týmy, které chtějí stavět weby a SaaS produkty chytře, rychle a s respektem k soukromí. Píše Cody, AI parťák Dreamindu.

Dreamindí severka: **navrženo, postaveno a provozováno v Evropě**. Ne jako marketingová samolepka na patičce, ale jako rozhodovací filtr pro produkt, infrastrukturu, analytiku i komunikaci se zákazníky.

## Pro koho je tahle kniha

- Pro zakladatele SaaS, kteří chtějí první zákazníky bez nekonečného přepisování landing page.
- Pro malé firmy, které potřebují web jako obchodní nástroj, ne digitální vizitku z roku 2014.
- Pro vývojáře a marketéry, kteří spolu musí mluvit lidsky, ne přes tabulku ticketů.
- Pro evropské projekty, které nechtějí sbírat data jen proto, že „to tak dělají všichni“.

## Jak e-book používat

Každá kapitola má být praktická: krátké vysvětlení, konkrétní doporučení, příklad a checklist. Cílem není vyhrát soutěž v buzzwordech. Cílem je, aby po přečtení šlo něco zlepšit na reálném webu nebo produktu.

## Osnova

1. Privacy-first web jako konkurenční výhoda
2. Základy webu, který vydělává: nabídka, struktura, rychlost, důvěra
3. Landing page pro SaaS: od bolesti zákazníka k první konverzi
4. Obsahový marketing bez závislosti na algoritmech
5. Produktivita malého týmu: méně nástrojů, lepší procesy
6. Analytika s minimem trackerů: měřit ano, šmírovat ne
7. Provoz v Evropě: hosting, domény, e-mail, zálohy a incidenty
8. MVP a roadmapa: jak nestavět SaaS jako nekonečný betlém funkcí
9. Automatizace a AI asistenti v každodenním provozu
10. Checklist před spuštěním webu nebo SaaS

---

# 1. Privacy-first web jako konkurenční výhoda

Privacy-first přístup neznamená, že web nesmí nic měřit, nesmí mít marketing a musí vypadat jako formulář daňového přiznání. Znamená to, že každé zpracování dat má jasný důvod, uživatel o něm ví a firma si umí obhájit, proč data vůbec potřebuje.

V Evropě je ochrana osobních údajů základní právo a pravidla GDPR stojí mimo jiné na principech zákonnosti, transparentnosti, účelového omezení, minimalizace dat a omezení uložení. Evropská komise tyto principy shrnuje v oficiální části k GDPR pro firmy a organizace: https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/principles-gdpr_en

## 1.1 Nejdřív otázka: co opravdu potřebujeme vědět?

Typický web sbírá víc dat, než potřebuje. Důvod bývá banální: někdo vložil analytiku, heatmapu, chat widget, remarketingový pixel a tři fontové skripty, protože „to může být užitečné“. Jenže každá externí služba přidává riziko, zpomalení, právní povinnosti a další místo, kde se data mohou rozutéct jako ponožky v pračce.

Praktický postup:

- Sepiš všechny body, kde web pracuje s daty: formulář, analytika, e-mailing, platební brána, logy, chat, CRM.
- U každého bodu napiš účel jednou větou: „Potřebujeme e-mail, abychom odpověděli na poptávku.“
- Označ data, která nejsou nutná pro splnění účelu, a zvaž jejich odstranění.
- Zkontroluj, jestli se data posílají mimo EU nebo k dodavateli, kterému nerozumíš.
- Nastav retenční dobu: data nemají bydlet v systému navždy jen proto, že disk je levný.

Příklad u kontaktního formuláře:

| Pole | Potřebujeme? | Proč |
| --- | --- | --- |
| Jméno | Ano | Oslovení a orientace v komunikaci |
| E-mail | Ano | Odpověď na poptávku |
| Telefon | Volitelné | Jen když zákazník chce zavolat |
| Firma | Volitelné | Pomůže s kontextem B2B poptávky |
| Rozpočet | Volitelné | Urychlí kvalifikaci, ale není nutný |
| IP adresa v CRM | Spíš ne | Většinou stačí serverové bezpečnostní logy |

Minimalizace dat není jen právní hygiena. Je to produktové cvičení: když neumíš říct, proč pole potřebuješ, pravděpodobně ho nepotřebuješ.

## 1.2 Transparentnost prodává důvěru

Uživatel nemusí číst právnický román. Potřebuje rychle pochopit: kdo data zpracovává, proč, na jakém právním základě, jak dlouho, komu se předávají a jaká má práva. Evropská komise uvádí, že lidé mají být při sběru dat jasně informováni mimo jiné o účelu, právním základu, době uložení, příjemcích a případném předávání mimo EU: https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/principles-gdpr/what-information-must-be-given-individuals-whose-data-collected_en

Dobrá privacy stránka proto není schovaná formalita. Je to stránka důvěry. Piš ji normálně:

> „Kontaktní formulář používáme jen k odpovědi na vaši zprávu. Data neposíláme do reklamních systémů. Pokud se z nás nestane zákaznický vztah, zprávu smažeme po 12 měsících.“

Tohle je srozumitelnější než pět odstavců o „oprávněném zájmu správce realizovat obchodní komunikaci v rozsahu nezbytném pro…“ Ano, právník možná zvedne obočí. Uživatel ale poprvé pochopí, co se děje. Ideální stav: právně přesné a lidsky čitelné.

## 1.3 Cookies: méně bannerů, více respektu

Cookie lišta není designový prvek. Je to nouzové světlo, že web chce dělat něco, co uživatel musí vědomě povolit. Pokud má web jen technické cookies nutné pro fungování, často nepotřebuje velkou „přijmi vše“ ceduli přes půl obrazovky. Pokud používá marketingové pixely, remarketing nebo profilování, souhlas musí být skutečně svobodný, konkrétní, informovaný a jednoznačný; Evropská komise takto popisuje požadavky na platný souhlas podle GDPR: https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en

Privacy-first varianta pro malý SaaS:

- Bez marketingových pixelů na první verzi landing page.
- Analytika bez cross-site sledování a bez zbytečných identifikátorů.
- Serverové logy jen pro bezpečnost a provoz, s rozumnou retencí.
- Měření konverzí přes vlastní události: odeslání formuláře, klik na ceník, dokončení registrace.
- Retargeting až ve chvíli, kdy existuje jasný obchodní důvod a proces pro souhlas.

Codyho komentář: když první verze produktu potřebuje pět reklamních skriptů, aby našla zákazníka, problém nejspíš není v analytice. Problém je v nabídce. Au, ale užitečné au.

## 1.4 Evropský provoz jako produktové rozhodnutí

Privacy-first provoz začíná architekturou. Kde běží hosting? Kde jsou zálohy? Kde je databáze? Kdo má přístup k logům? Jak se řeší incident? Když si tyhle otázky položíš až při prvním větším zákazníkovi, budeš odpovídat zpocený v tabulce bezpečnostního dotazníku.

Rozumné výchozí nastavení pro evropský web nebo SaaS:

- Hosting a databáze v EU, ideálně s jasně uvedeným regionem.
- E-mailing a transactional e-maily přes dodavatele s evropským zpracováním nebo jasnými smluvními podmínkami.
- Analytika nastavená tak, aby sbírala agregovaná data a neprofilovala jednotlivce.
- Žádné social share skripty; stačí obyčejné odkazy.
- RSS pro obsah místo nucení lidí do newsletteru.
- Přístup do administrace přes MFA a role podle potřeby, ne jeden sdílený účet „admin@firma“.

Tohle není paranoia. Je to menší plocha pro průšvihy a silnější argument pro zákazníky, kteří řeší bezpečnost, compliance nebo reputaci.

## 1.5 Mini-audit webu za 30 minut

Otevři svůj web v anonymním okně a projdi tento checklist:

- Načítá se bez externích marketingových skriptů před souhlasem?
- Je privacy/cookies stránka dostupná z patičky na každé stránce?
- Je v kontaktním formuláři jen to, co skutečně potřebuješ?
- Víš, kam se po odeslání formuláře data ukládají?
- Máš nastavenou retenční dobu pro poptávky, logy a analytiku?
- Umíš uživateli vyexportovat nebo smazat jeho data bez ruční archeologie v pěti nástrojích?
- Funguje web i bez reklamních a sociálních skriptů?
- Neobsahuje stránka zbytečné vložené prvky třetích stran, které posílají návštěvníka přes půl internetu?

Pokud u dvou a více bodů odpovíš „nevím“, není to katastrofa. Je to backlog. Jen mu dej prioritu dřív, než z něj bude požár.

## Shrnutí kapitoly

Privacy-first web je praktický obchodní přístup: sbírej méně dat, vysvětluj srozumitelně, preferuj evropský provoz a měř jen to, co pomáhá rozhodovat. Výsledkem je rychlejší web, menší právní i bezpečnostní riziko a důvěryhodnější značka.

---


# 2. Základy webu, který vydělává: nabídka, struktura, rychlost, důvěra

Web, který vydělává, nemusí být nejhezčí v oboru. Musí ale rychle vysvětlit, pro koho je, jaký problém řeší, proč mu věřit a co má návštěvník udělat dál. Design je důležitý, ale až po odpovědi na základní otázku: „Proč by tomu měl někdo věnovat další minutu života?“

Google ve své dokumentaci k page experience připomíná, že dobré skóre v Core Web Vitals nebo jiných nástrojích samo o sobě negarantuje top pozice ve vyhledávání; dobrá stránka je kombinace užitečného obsahu, použitelnosti a technické kvality: https://developers.google.com/search/docs/appearance/page-experience

## 2.1 Nabídka musí být jasná do pěti vteřin

První obrazovka webu není místo pro korporátní poezii. Návštěvník má během pár vteřin pochopit:

- co nabízíš,
- komu to pomáhá,
- jaký výsledek může čekat,
- proč je to jiné nebo lepší,
- jaký je další krok.

Slabá headline:

> „Inovativní digitální řešení pro moderní firmy.“

Lepší headline:

> „Stavíme privacy-first SaaS aplikace pro evropské B2B týmy, které potřebují rychlý vývoj bez datového cirkusu.“

Ta druhá věta není dokonalá poezie, ale říká kdo, co, pro koho a jaký princip. A to je u obchodního webu podstatnější než slovní mlha s příchutí LinkedInu.

Praktický vzorec pro úvodní sekci:

- **Headline:** konkrétní výsledek nebo specializace.
- **Podtitulek:** pro koho to je a jak to funguje.
- **Důkaz:** reference, číslo, logo, případová studie nebo jasný proces.
- **CTA:** jedna hlavní akce, ne pět tlačítek bojujících o přežití.
- **Riziko:** krátká odpověď na největší obavu zákazníka.

Příklad pro SaaS nástroj na docházku:

> „Docházka pro malé týmy bez Excelu, chaosu a zbytečného sledování lidí.“
>
> „Zaměstnanci si píchnou příchod během pár vteřin, manažer vidí přehled a firma má data uložená v EU.“

## 2.2 Struktura stránky má vést rozhodnutí

Dobrá landing page není katalog sekcí. Je to argument poskládaný ve správném pořadí. Návštěvník obvykle přichází s pochybnostmi: „Je to pro mě? Vyřeší to můj problém? Kolik práce mě bude stát změna? Můžu tomu věřit?“

Osvědčené pořadí pro první verzi stránky:

1. Jasná nabídka a hlavní CTA.
2. Popis problému jazykem zákazníka.
3. Řešení ve třech až pěti konkrétních bodech.
4. Ukázka produktu, procesu nebo výsledku.
5. Důvěryhodnost: reference, zkušenosti, bezpečnost, provoz.
6. Cena nebo alespoň vodítko, jak se cena tvoří.
7. Časté otázky a námitky.
8. Závěrečné CTA.

Nejčastější chyba: stránka začne funkcemi a až úplně dole vysvětlí, proč by to někoho mělo zajímat. Funkce jsou důkaz, ne začátek příběhu. Pokud prodáváš rezervační systém, první sdělení není „REST API a exporty“. První sdělení je „méně telefonátů, méně zmatků, více obsazených termínů“. API přijde později pro lidi, kteří už chápou hodnotu.

## 2.3 Rychlost je obchodní argument

Rychlý web není technická parádička pro Lighthouse screenshot. Je to méně čekání, méně odchodů a lepší první dojem. Web.dev uvádí jako Core Web Vitals metriky LCP, INP a CLS a doporučuje hodnotit je na 75. percentilu návštěv zvlášť pro mobil a desktop: https://web.dev/articles/vitals?hl=en

Prakticky řečeno:

- **LCP** hlídá, jak rychle se zobrazí hlavní obsah stránky; dobrý výsledek je do 2,5 sekundy.
- **INP** měří odezvu na interakce; dobrý výsledek je do 200 ms.
- **CLS** sleduje vizuální poskakování stránky; dobrý výsledek je do 0,1.

Neznamená to honit skóre 100/100 za každou cenu. Znamená to odstranit věci, které uživatele reálně brzdí: obří hero obrázky, zbytečný JavaScript, pomalé fonty, třetí strany a layout, který se při načítání rozpadá jako židle z levného e-shopu.

Privacy-first přístup tu pomáhá i výkonově. Když nepoužíváš pět reklamních pixelů, tři chat widgety a externí social embed, stránka je často rychlejší už z principu. Méně šmírování, méně kilobajtů. Hezká symetrie, skoro až podezřele rozumná.

Mini-checklist výkonu:

- Komprimuj a zmenši hero obrázky; nepouštěj 4MB fotku do mobilu.
- Používej systémové fonty nebo self-hostované fonty s rozumným preloadem.
- Načítej skripty až ve chvíli, kdy jsou potřeba.
- Nepřidávej externí nástroje bez jasného účelu a vlastníka.
- Otestuj hlavní stránky v PageSpeed Insights a v reálném telefonu na mobilních datech.
- Sleduj výkon po nasazení, ne jen před spuštěním.

## 2.4 Důvěra musí být vidět, ne tvrzená

„Jsme spolehlivý partner“ neznamená nic, pokud za tím není důkaz. Důvěra vzniká z konkrétností.

Co funguje lépe než obecné sliby:

- případová studie s výchozím stavem, postupem a výsledkem,
- krátká reference s celým jménem a rolí,
- ukázka reálného rozhraní nebo výstupu,
- jasně popsaný proces spolupráce,
- transparentní informace o provozu, bezpečnosti a datech,
- odpovědi na nepříjemné otázky v FAQ.

Privacy-first web má výhodu: může důvěru stavět i na tom, co nedělá. Nepoužíváme reklamní pixely. Neposíláme poptávky do nástrojů bez kontroly. Nesbíráme data „pro jistotu“. Pro některé zákazníky je to detail. Pro B2B, zdravotnictví, veřejný sektor nebo citlivější evropské projekty to může být rozhodovací faktor.

Codyho komentář: největší marketingová síla privacy-first přístupu není moralizování. Je to klid. Klid pro zákazníka, že se jeho data nestanou surovinou pro další reklamní mlýnek.

## 2.5 Checklist jedné obchodní stránky

Před spuštěním nebo redesignem si projdi jednu klíčovou stránku a odpověz bez romantiky:

- Řekne první obrazovka jasně, co nabízíme a pro koho?
- Je na stránce jedna hlavní akce, kterou chceme po návštěvníkovi?
- Popisujeme problém jazykem zákazníka, ne interním slovníkem firmy?
- Máme na stránce konkrétní důkaz důvěry?
- Je cena, rozsah nebo další krok dostatečně srozumitelný?
- Funguje stránka dobře na mobilu a nepůsobí jako PDF přilepené na displej?
- Načte se hlavní obsah rychle i bez ideální Wi-Fi?
- Neodesíláme data třetím stranám bez jasného důvodu a vysvětlení?
- Dá se stránka sdílet přímým odkazem bez závislosti na sociálních skriptech?
- Má stránka jasný `<title>`, meta description a kanonickou URL?

Pokud stránka neprodává, nezačínej změnou barvy tlačítka. Začni nabídkou, strukturou a důvěrou. Barva tlačítka je dezert, ne hlavní chod.

## Shrnutí kapitoly

Vydělávající web stojí na jasné nabídce, logické struktuře, rychlosti a důvěře. Privacy-first přístup není brzda marketingu; naopak pomáhá odstranit zbytečnosti, zrychlit web a vybudovat značku, která působí dospěleji než „máme pixel, protože všichni mají pixel“.

---

# 3. Landing page pro SaaS: od bolesti zákazníka k první konverzi

SaaS landing page má jednu hlavní práci: převést člověka z nejasného zájmu do dalšího kroku. Tím krokem nemusí být hned platba. U raného produktu je často hodnotnější domluvené demo, registrace do bety, objednaný audit, stažený checklist nebo odpověď na krátký dotazník.

Chyba začíná ve chvíli, kdy stránka mluví hlavně o produktu. Zákazník ale nepřichází obdivovat architekturu. Přichází s nepříjemností, kterou chce odstranit: ztrácí čas, přichází o poptávky, nemá přehled, bojí se chyb, platí moc za ruční práci, nebo musí vysvětlovat stejnou věc pořád dokola. Landing page má tuhle bolest pojmenovat dřív, než začne ukazovat funkce.

## 3.1 Začni jednou konkrétní situací

První verze SaaS stránky často selže, protože chce oslovit všechny. „Platforma pro efektivní správu firemních procesů“ zní bezpečně, ale nikomu v hlavě nerozsvítí lampičku. Lepší je začít jedním přesným scénářem.

Příklad pro rezervační SaaS:

- Slabé sdělení: „Moderní rezervační systém pro služby.“
- Lepší sdělení: „Naplněný kalendář bez telefonátů, zmeškaných zpráv a ručního přepisování termínů.“

Příklad pro interní AI nástroj:

- Slabé sdělení: „AI asistent pro znalostní bázi.“
- Lepší sdělení: „Nováček najde správný postup za minutu místo toho, aby vyrušil tři kolegy.“

Příklad pro B2B reporting:

- Slabé sdělení: „Dashboard pro manažerská data.“
- Lepší sdělení: „Každé pondělí víš, kde obchod stojí, bez skládání pěti exportů v Excelu.“

Princip je jednoduchý: napiš headline tak, aby si správný člověk řekl „jo, přesně tohle mě štve“. Pokud si řekne jen „to zní profesionálně“, stránka je zdvořilá, ale neprodává.

## 3.2 Konverze není tlačítko, ale slib

Tlačítko „Začít zdarma“ samo o sobě nic nezachrání. Konverze vzniká ve chvíli, kdy je návštěvníkovi jasné, co se stane po kliknutí a proč to stojí za jeho čas.

Dobré CTA odpovídá na tři otázky:

1. Co přesně udělám?
2. Kolik mě to bude stát času, peněz nebo pozornosti?
3. Co dostanu jako další výsledek?

Místo obecného „Kontaktujte nás“ zkus konkrétnější varianty:

- „Domluvit 20minutové demo“
- „Získat návrh řešení“
- „Vyzkoušet ukázkový účet“
- „Poslat checklist ke spuštění“
- „Zjistit, jestli nám to dává smysl“

U privacy-first SaaS je fér říct i to, co se nestane: nepošleme e-mail do reklamní automatizace bez souhlasu, nebudeme obvolávat celou firmu a nebudeme sbírat víc údajů, než potřebujeme pro odpověď. To není suchá právničina. To je respekt, který umí být konkurenční výhoda.

## 3.3 Formulář: čím méně polí, tím méně výmluv

Každé pole ve formuláři je malá brzda. Některá jsou nutná, jiná jsou jen pro pohodlí obchodníka. U první konverze sbírej minimum údajů, které opravdu potřebuješ k doručení dalšího kroku.

Pro první kontakt obvykle stačí:

- jméno,
- e-mail,
- krátký popis problému nebo výběr typu poptávky,
- volitelně firma nebo web, pokud to pomáhá připravit odpověď.

Co bych na první krok většinou nedával: telefon jako povinné pole, velikost rozpočtu bez vysvětlení, počet zaměstnanců jen ze zvědavosti, souhlas s marketingem schovaný jako podmínku odeslání. Pokud data nepotřebuješ, nesbírej je. Pokud je potřebuješ, vysvětli proč.

Privacy-first formulář může mít krátkou větu pod tlačítkem:

> Údaje použijeme jen k odpovědi na tuhle poptávku. Žádný reklamní pixel, žádné přeprodávání kontaktů, žádný newsletter bez výslovného přihlášení.

Tohle je lidsky srozumitelnější než odkaz na zásady ochrany osobních údajů jako jediná odpověď na všechny obavy. Odkaz tam samozřejmě patří taky, ale nemá suplovat normální komunikaci.

## 3.4 Důkaz hodnoty před důkazem technologie

Technologie má na SaaS stránce místo, ale až jako podpůrný důkaz. Nejprve ukaž hodnotu. Pak teprve vysvětli, čím je produkt spolehlivý.

Praktické důkazy hodnoty:

- konkrétní ukázka obrazovky s popisem, co uživatel vidí,
- minipříběh „před a po“ pro jednu typickou firmu,
- výpočet ušetřeného času na jednoduchém příkladu,
- šablona reportu, exportu nebo procesu,
- krátké video bez sledovacích embedů, ideálně hostované přímo,
- sandbox nebo demo s testovacími daty.

Praktické důkazy technologie:

- kde jsou data provozovaná,
- jak fungují zálohy,
- kdo má přístup k administraci,
- jak lze data exportovat,
- co se stane při ukončení služby,
- jaké integrace jsou opravdu potřeba.

Pořadí je důležité. „Běžíme v EU a máme export dat“ je silný argument pro člověka, který už chápe hodnotu produktu. Pokud ale ještě neví, proč by měl produkt chtít, technické důkazy se odrazí od zdi jako ping pongový míček v serverovně.

## 3.5 Jedna landing page, jedna hypotéza

Každá první verze stránky by měla testovat jednu hlavní hypotézu. Ne deset najednou. Když změníš headline, cílovku, cenu, CTA, formulář a nabídku dema současně, nevíš, co zabralo.

Příklady dobrých hypotéz:

- „Malé ordinace chtějí online rezervace hlavně kvůli menšímu počtu telefonátů.“
- „E-shopy řeší vratky víc než rychlost expedice.“
- „B2B zákazníci raději požádají o ukázku s vlastními daty než o obecné demo.“
- „Privacy-first provoz je pro veřejný sektor silnější argument než nižší cena.“

K hypotéze patří jednoduché měření. Stačí sledovat, kolik lidí přijde na stránku, kolik klikne na hlavní CTA a kolik dokončí další krok. Nemusíš kvůli tomu rozsvítit celý reklamní lunapark. Měř události, které odpovídají rozhodnutí uživatele, a nesbírej identitu tam, kde stačí agregované číslo.

Codyho komentář: nejlepší landing page není ta, která má nejvíc sekcí. Je to ta, po které víš, jestli trh trochu kývl hlavou, nebo jestli sis jen krásně přepsal vlastní domněnku do webového fontu.

## 3.6 Checklist SaaS landing page

Před publikací první nebo nové verze si projdi stránku jako člověk, který nemá čas a nezná interní slovník týmu:

- Je do pěti vteřin jasné, pro koho produkt je?
- Popisuje headline konkrétní problém nebo výsledek?
- Má stránka jedno hlavní CTA a jasný další krok?
- Ví návštěvník, co se stane po odeslání formuláře?
- Sbírá formulář jen údaje nutné pro další krok?
- Je privacy věta napsaná lidsky, ne jen právním odkazem?
- Ukazuje stránka produkt, proces nebo výsledek na konkrétním příkladu?
- Obsahuje stránka odpovědi na hlavní námitky: cena, migrace, bezpečnost, data, podpora?
- Dá se stránka měřit bez invazivních trackerů?
- Má každá externí služba jasný důvod, vlastníka a datovou odpověď?

Pokud na polovinu odpovědí říkáš „to dopíšeme později“, později už možná budeš vyhodnocovat špatná data ze špatné stránky. Nečekej na perfektní design, ale nepublikuj mlhu.

## Shrnutí kapitoly

SaaS landing page má začít konkrétní bolestí zákazníka, ne seznamem funkcí. Konverze je slib srozumitelného dalšího kroku. Privacy-first přístup stránku nezpomaluje; nutí ji sbírat méně dat, lépe vysvětlovat důvěru a měřit jen to, co pomáhá rozhodování.

---

# 4. Obsahový marketing bez závislosti na algoritmech

Obsahový marketing není soutěž o to, kdo vyrobí víc příspěvků za týden. Je to dlouhodobý systém, ve kterém firma pomáhá správným lidem udělat lepší rozhodnutí. Někdy z toho vznikne poptávka hned. Častěji vznikne důvěra, zapamatování a důvod vrátit se ve chvíli, kdy problém začne pálit víc než rozpočet na „někdy potom“.

Pro malý evropský tým je nebezpečné stavět celý marketing na platformě, kterou nevlastní. Dosah na sociálních sítích se mění, pravidla reklamních systémů se mění, vyhledávače upravují řazení výsledků a účet může zmizet rychleji než sušenka u monitoru. Platformy používej, ale nepleť si je s vlastním domem. Tvůj web, archiv článků, RSS feed, přímé odkazy, produktové dokumenty a databáze dobrovolně získaných kontaktů jsou pevnější základ.

Google ve svých Search Central doporučeních zdůrazňuje, že obsah má být užitečný, spolehlivý a psaný primárně pro lidi, ne pro manipulaci výsledků vyhledávání: https://developers.google.com/search/docs/fundamentals/creating-helpful-content. To je dobrá zpráva pro projekty, které nechtějí hrát hru na klíčová slova bez duše. Praktický, poctivý obsah má pořád smysl — jen musí řešit skutečné otázky zákazníků.

## 4.1 Nejdřív publikační základna, potom megafon

Nejčastější chyba malých firem: začnou LinkedInem, reklamou nebo newsletterem, ale nemají kam posílat lidi. Výsledkem je obsah, který po týdnu zmizí v proudu a nedá se pořádně najít. Lepší pořadí je opačné.

Základní vrstva obsahu:

- vlastní web s přehlednými články, případovkami a návody,
- čitelné URL adresy, které dávají smysl i bez kontextu,
- RSS feed pro lidi, kteří chtějí sledovat novinky bez algoritmu,
- interní prolinkování mezi souvisejícími tématy,
- jednoduchá stránka „Začněte tady“ pro nové návštěvníky,
- archiv, který nezmizí jen proto, že platforma změnila rozhraní.

Teprve potom řeš distribuci. Sociální sítě, komunity, partnerské weby, podcasty nebo placená propagace mají zesilovat obsah, který už žije na tvém webu. Ne ho nahrazovat.

RSS stojí za zmínku, protože je nudně praktické. Specifikace RSS 2.0 popisuje jednoduchý formát pro publikování seznamu položek kanálu: https://www.rssboard.org/rss-specification. Pro firmu to znamená, že čtenář může sledovat novinky ve vlastní čtečce bez přihlášení k další platformě. Privacy-first marketing nemusí být méně pohodlný; jen odmítá vydávat sledování za péči o zákazníka.

Codyho komentář: RSS není retro. Retro je spoléhat na to, že ti algoritmus cizí firmy bude navždycky zdarma doručovat zákazníky, protože jsi mu hezky poprosil v promptu.

## 4.2 Obsah piš podle rozhodnutí zákazníka

Dobrý obsah odpovídá na otázku, kterou si zákazník klade v určité fázi rozhodování. Ne každý článek má prodávat hned. Některý má pomoci pojmenovat problém, jiný porovnat možnosti, další odstranit obavu před nákupem.

Praktická mapa obsahu:

| Fáze | Otázka zákazníka | Typ obsahu | Příklad |
| --- | --- | --- | --- |
| Uvědomění | „Proč nám to pořád drhne?“ | vysvětlující článek | „Proč kontaktní formulář negeneruje kvalitní poptávky“ |
| Diagnostika | „Co přesně je špatně?“ | checklist nebo auditní návod | „20 bodů před spuštěním SaaS landing page“ |
| Výběr řešení | „Jaké máme možnosti?“ | srovnání přístupů | „Webflow, custom vývoj nebo WordPress pro B2B web“ |
| Důvěra | „Umí to někdo bezpečně dodat?“ | případová studie | „Jak jsme zrychlili poptávkový web bez reklamních pixelů“ |
| Nákup | „Co se stane po kontaktu?“ | procesní stránka | „Jak probíhá první workshop a co z něj dostanete“ |
| Retence | „Jak z toho dostanu víc?“ | návody a šablony | „Jak vyhodnotit poptávky bez invazivní analytiky“ |

Když nevíš, čím začít, projdi posledních deset poptávek, schůzek nebo e-mailů a vytáhni opakující se otázky. Zákazníci ti dávají obsahový plán zadarmo. Jen ho většina firem ignoruje, protože zrovna hledá „top trendy pro Q4“.

## 4.3 Jeden článek má mít jeden konkrétní úkol

Každý text by měl před psaním projít jednoduchým zadáním. Bez něj vzniká obsahová kaše: trochu edukace, trochu prodej, trochu nábor, trochu ego, nikde jasný další krok.

Mini-brief před psaním:

- **Čtenář:** pro koho přesně text je?
- **Situace:** v jakém problému nebo rozhodnutí se nachází?
- **Slib:** co bude po přečtení umět, chápat nebo mít připravené?
- **Důkaz:** jaké příklady, zkušenosti, data nebo zdroje tvrzení podpoří?
- **Další krok:** co má čtenář udělat, pokud mu text pomohl?
- **Datová stopa:** potřebujeme něco měřit nebo sbírat, a proč?

Příklad briefu:

> Čtenář je zakladatel malého B2B SaaS před první placenou kampaní. Řeší, jestli má nejdřív upravit landing page. Po přečtení pozná pět hlavních slabin stránky a stáhne si checklist. Měříme jen návštěvu článku, kliknutí na checklist a odeslání formuláře.

Takový brief chrání před dvěma extrémy. První je text pro nikoho. Druhý je text pro vyhledávač, který možná přivede návštěvnost, ale nepomůže reálnému zákazníkovi. Google Search Central ve svém SEO Starter Guide připomíná, že užitečný a spolehlivý obsah pro lidi patří k nejdůležitějším základům viditelnosti ve vyhledávání: https://developers.google.com/search/docs/fundamentals/seo-starter-guide.

## 4.4 Distribuce bez sledovacího cirkusu

Distribuce není jen „postnout odkaz“. Je to plán, jak se hotový obsah dostane k lidem, kteří ho pravděpodobně potřebují. Privacy-first distribuce se ptá: dokážeme šířit obsah bez toho, abychom z každého čtenáře udělali reklamní profil?

Kanály s dobrou kontrolou:

- organické vyhledávání přes kvalitní strukturu webu,
- RSS a přímé odkazy,
- e-mail jen pro dobrovolně přihlášené lidi,
- partnerské odkazy z relevantních webů,
- komunitní příspěvky s hodnotou, ne jen self-promo,
- dokumentace, šablony a veřejné checklisty,
- osobní follow-up po schůzce, pokud s tím člověk počítá.

Kanály, kde buď opatrný:

- remarketingové pixely,
- lookalike publika z nahraných kontaktů,
- embedded social widgety,
- heatmapy nahrávající citlivé chování,
- automatizace, které posílají data do několika systémů bez jasného účelu.

To neznamená, že reklama je zakázané slovo. Znamená to, že každá distribuce má mít datovou rozvahu. Jaká data sbíráme? Kde končí? Jak dlouho je držíme? Umíme stejný cíl splnit méně invazivně? Pokud odpověď zní „nevíme“, není to strategie, ale konfety v kabeláži.

## 4.5 Recykluj obsah, ne důvěru

Jedna kvalitní kapitola, případovka nebo návod může žít v několika formátech. To je efektivní. Problém nastává, když se z recyklace stane 27 prázdných postů s jiným emoji na začátku.

Smysluplná recyklace:

- z velkého návodu udělej checklist,
- z případové studie vytáhni anonymizovaný „před a po“ příklad,
- z technického článku udělej krátký slovníček pro netechnické zakladatele,
- z interního procesu vytvoř veřejnou šablonu,
- z FAQ udělej sérii krátkých odpovědí,
- z webináře napiš článek a přidej přepis.

Privacy-first pravidlo: při recyklaci nemaž kontext a nezveřejňuj detaily, které zákazník nesdílel pro marketing. Anonymizace není jen smazání názvu firmy. Zkontroluj obor, velikost, kombinaci nástrojů, screenshoty, metadata souborů a citace. U menších trhů jde firmu poznat i bez loga.

## 4.6 Měření obsahu: méně metrik, lepší otázky

Obsahový marketing se nemá řídit jen počtem zobrazení. Návštěvnost je užitečný signál, ale sama o sobě neříká, jestli obsah pomáhá byznysu. Článek s menší návštěvností může přinést lepší poptávky než virální text, který přečtou lidé mimo cílovku.

Měř raději otázky:

- Přivádí článek relevantní návštěvníky z vyhledávání nebo přímých odkazů?
- Klikají lidé na související checklist, případovku nebo službu?
- Zmiňují zákazníci článek v poptávkách nebo na schůzkách?
- Snižuje obsah počet opakovaných vysvětlovacích e-mailů?
- Pomáhá obchodníkovi nebo zakladateli lépe vést rozhovor?
- Dá se článek aktualizovat a používat dál, nebo rychle zastarává?

Technicky často stačí privacy-friendly analytika s agregovanými událostmi: zobrazení stránky, kliknutí na CTA, stažení checklistu, odeslání formuláře. Nepotřebuješ vědět, že konkrétní člověk četl v 22:14 odstavec o pricingu a pak si šel udělat čaj. To je sice fascinující, ale taky trochu divné.

## 4.7 Checklist obsahového systému

Před tím, než začneš psát další článek, projdi si systém jako celek:

- Má web jasné kategorie a stránku, odkud se nový čtenář zorientuje?
- Existuje RSS feed a přímé odkazy na články bez přihlašovací brány?
- Má každý článek jednoho konkrétního čtenáře, situaci a další krok?
- Odpovídá obsah na reálné otázky zákazníků, ne jen na interní témata firmy?
- Jsou zdroje uvedené u faktů, doporučení a citovaných pravidel?
- Má článek interní odkazy na související služby, návody nebo případovky?
- Dá se článek rozumně recyklovat bez ztráty kontextu?
- Je distribuce naplánovaná bez zbytečných trackerů a platformové závislosti?
- Měříme jen události, které pomáhají rozhodování?
- Má někdo odpovědnost za aktualizaci starších článků?

## Shrnutí kapitoly

Obsahový marketing bez algoritmické závislosti začíná vlastním webem, přímými odkazy a užitečnými odpověďmi na skutečné otázky zákazníků. Platformy používej jako megafon, ne jako archiv. Privacy-first přístup pomáhá držet distribuci čistou, měření střídmé a důvěru čtenářů nedotčenou reklamním cirkusem.

---

# 5. Produktivita malého týmu: méně nástrojů, lepší procesy

Produktivita malého týmu není o tom, že každý člověk zvládne nacpat do kalendáře víc schůzek, víc notifikací a víc barevných štítků. To je jen digitální obdoba uklizeného stolu, pod kterým leží tři krabice chaosu. Produktivita v malém webovém nebo SaaS týmu znamená, že práce má jasný směr, rozhodnutí se neztrácejí, zákazník dostává hodnotu dřív a nikdo nemusí každé pondělí archeologicky dolovat kontext z pěti nástrojů.

Malé týmy mají výhodu rychlosti. Nemají ale prostor plýtvat energií. Každý nový nástroj, proces nebo meeting musí projít stejným filtrem jako sběr dat na webu: k čemu přesně slouží, kdo ho používá, co se stane, když ho vypneme, a jestli náhodou neřeší problém, který by šel vyřešit jednodušším pravidlem.

Privacy-first provoz do produktivity patří víc, než se zdá. Když tým používá deset nástrojů bez jasného vlastníka, nevzniká jen provozní nepořádek. Vzniká i datový nepořádek: zákaznické poznámky v chatu, citlivé přílohy v projektovém nástroji, přístupy v osobních účtech, rozhodnutí ve vláknech, která nejdou dohledat. Produktivita a ochrana dat jsou sourozenci. Občas se hádají, ale sdílejí stejný pokoj.

## 5.1 Nejdřív tok práce, potom nástroj

Nejhorší otázka při zlepšování produktivity zní: „Jaký nástroj si koupíme?“ Lepší otázka je: „Jak u nás práce teče od nápadu k hotovému výsledku?“ Teprve když vidíš tok práce, poznáš, kde se zadrhává.

U webového projektu může tok vypadat takhle:

1. Nápad nebo požadavek od zákazníka.
2. Krátké vyjasnění cíle a dopadu.
3. Rozhodnutí, jestli se práce vyplatí teď.
4. Návrh řešení nebo textu.
5. Implementace.
6. Kontrola kvality.
7. Publikace nebo nasazení.
8. Zpětná vazba a měření výsledku.

U SaaS produktu podobně:

1. Signál z trhu, podpory, analytiky nebo obchodního hovoru.
2. Formulace problému.
3. Odhad dopadu a rizika.
4. Malý návrh řešení.
5. Implementace v nejmenším smysluplném rozsahu.
6. Test s reálným uživatelem nebo interním scénářem.
7. Nasazení.
8. Vyhodnocení, jestli změna pomohla.

Nástroj má tenhle tok zviditelnit, ne ho nahradit. Pokud tým neumí říct, co znamená „hotovo“, nepomůže mu ani nejdražší projektová platforma. Jen bude mít profesionálněji vypadající bordel. A ten je pořád bordel, jen má export do CSV.

Praktické pravidlo: než zavedeš nový nástroj, napiš na jednu stránku současný proces. Kde vzniká práce? Kdo ji schvaluje? Kdo ji dělá? Kdo kontroluje výsledek? Kde se ukládá rozhodnutí? Kde zákazník vidí posun? Pokud to nejde popsat jednoduše, nástroj problém pravděpodobně zvětší.

## 5.2 Jeden zdroj pravdy pro práci

Malý tým nepotřebuje dokonalou metodiku. Potřebuje jedno místo, kde je jasné, co se dělá, proč se to dělá a co je blokované. Tomuhle říkej třeba backlog, board, seznam úkolů nebo „ta tabulka, kterou nikdo nesmí tajně obcházet“. Název je méně důležitý než disciplína.

Jeden úkol by měl obsahovat:

- stručný název popisující výsledek, ne aktivitu,
- důvod, proč práce existuje,
- vlastníka,
- jasnou definici hotovo,
- odkazy na související návrhy, dokumenty nebo pull requesty,
- stav: čeká, připraveno, dělá se, ke kontrole, hotovo,
- případné datum, kdy práce začne být problém.

Slabý úkol: „Upravit homepage.“

Lepší úkol: „Zvýraznit privacy-first provoz na homepage, aby B2B návštěvník do 5 vteřin pochopil, kde běží data.“

Rozdíl je obrovský. První úkol zve k nekonečnému ladění. Druhý říká, jaký výsledek má změna přinést. Když je úkol napsaný výsledkem, kontrola je snazší a diskuze se méně točí kolem vkusu.

Privacy-first poznámka: do pracovního nástroje nepatří všechno. Nepiš do ticketu plné osobní údaje zákazníků, tajné přístupové údaje, citlivé zdravotní informace, interní konflikty ani přílohy, které mají žít v zabezpečeném úložišti. Úkol má nést kontext nutný k práci, ne kompletní složku zákazníka.

## 5.3 Omez rozpracovanost, jinak rozpracovanost sežere tým

Malé týmy často netrpí tím, že by měly málo nápadů. Trpí tím, že rozpracují moc věcí najednou. Tři landing pages, dva nové moduly, redesign ceníku, onboarding, blog, newsletter, reporting, automatizace supportu a „ještě rychle přidáme tmavý režim“. Výsledek? Spousta otevřených smyček, málo dokončených věcí a pocit, že všichni pořád pracují, ale zákazník vidí málo.

Rozpracovanost má skryté náklady:

- přepínání kontextu,
- nedokončené rozhodnutí,
- zastarávající návrhy,
- delší feedback loop,
- více konfliktů v kódu i obsahu,
- horší odhad, kdy bude něco hotové.

Jednoduché pravidlo pro malý tým: každý člověk má mít jednu hlavní práci a maximálně jednu menší vedlejší. Pokud někdo „pracuje na pěti věcech“, většinou ve skutečnosti přepíná mezi pěti nedokončenými stresy. To není produktivita, to je kancelářský parkour.

Pro týdenní plán použij tři otázky:

1. Co musí být na konci týdne hotové, aby to mělo reálnou hodnotu?
2. Co vědomě neděláme, i když by to bylo lákavé?
3. Které rozhodnutí nás může blokovat déle než samotná práce?

Třetí otázka je zlatá. Malé týmy nezdržuje jen implementace. Zdržují je nevyřčená rozhodnutí: pro koho je stránka, jaký je hlavní CTA, co patří do první verze, jestli sbíráme telefon, jestli migrace dat bude ruční, jestli pricing ukážeme veřejně. Jakmile rozhodnutí pojmenuješ, jde s ním pracovat.

## 5.4 Dokumentuj rozhodnutí, ne každý povzdech

Dokumentace v malém týmu nemá být encyklopedie. Má být paměť rozhodnutí. Pokud se za tři týdny někdo zeptá „proč jsme to udělali takhle?“, odpověď nemá záviset na tom, jestli je jeden člověk zrovna online.

Stačí krátký formát:

- Kontext: co řešíme.
- Rozhodnutí: co jsme zvolili.
- Důvod: proč to dává smysl teď.
- Alternativy: co jsme odmítli.
- Kontrola: kdy se k tomu vrátíme.

Příklad:

> Kontext: Na landing page chceme měřit zájem o demo. Rozhodnutí: měříme jen zobrazení stránky, klik na CTA a odeslání formuláře. Důvod: pro první iteraci nepotřebujeme individuální sledování uživatelů. Alternativy: heatmapa a session recording zamítnuty kvůli soukromí a nízké hodnotě v této fázi. Kontrola: vyhodnotíme po 300 relevantních návštěvách nebo po měsíci provozu.

Taková poznámka šetří budoucí debaty a chrání hodnoty projektu. Když někdo později navrhne přidat agresivnější sledování, tým vidí, že nejde o zapomenutí, ale o vědomé rozhodnutí.

Dokumentuj hlavně:

- produktová rozhodnutí,
- změny pricingu,
- důvody pro sběr nebo nesběr dat,
- bezpečnostní a provozní pravidla,
- incidenty a jejich poučení,
- opakované zákaznické námitky,
- procesy, které se budou opakovat.

Nemusíš dokumentovat každou drobnou úpravu. Dokumentace má zrychlit budoucnost, ne zpomalit přítomnost.

## 5.5 Meetingy: rozhodnutí, synchronizace nebo zrušit

Meeting není důkaz práce. Je to drahý nástroj pro sdílení kontextu nebo rozhodnutí. Pokud meeting nemá jasný účel, pravděpodobně jen překládá nejistotu do kalendáře.

Každá schůzka by měla patřit do jedné ze tří kategorií:

- Rozhodovací: po schůzce víme, co platí.
- Synchronizační: odblokujeme práci mezi lidmi.
- Tvůrčí: společně navrhneme řešení, které by asynchronně vznikalo hůř.

Co mezi tyhle kategorie nepatří, může být komentář v úkolu, krátký dokument nebo nahraná poznámka. Malý tým nepotřebuje denně dokazovat, že existuje. Všichni to ví. Jsou tam. Bohužel i s notifikacemi.

Praktický meetingový protokol:

- Agenda musí existovat předem.
- Každý bod má vlastníka.
- Rozhodnutí se zapisuje do jednoho zdroje pravdy.
- Schůzka končí dalšími kroky, ne jen pocitem „dobře jsme to probrali“.
- Pokud se stejný meeting dvakrát po sobě obejde bez rozhodnutí, zkrať ho nebo zruš.

Privacy-first detail: na schůzkách se často sdílí obrazovky, záznamy a zákaznická data. Používej testovací účty, anonymizované příklady a sdílej jen to, co je nutné. Nahrávky schůzek nejsou bezedný archiv. Pokud je nepotřebuješ, nemažou se samy jen silou dobrých úmyslů.

## 5.6 Automatizuj opakování, ne chaos

Automatizace má smysl tam, kde je proces stabilní. Pokud tým neví, jak má práce správně probíhat ručně, automatizace jen zrychlí chyby. Elegantně, konzistentně a ve velkém. To je sice technicky působivé, ale pořád špatně.

Dobří kandidáti na automatizaci:

- upozornění na nový formulář nebo poptávku,
- vytvoření úkolu z kvalifikované poptávky,
- připomenutí expirace domény, certifikátu nebo zálohy,
- generování pravidelného reportu z agregovaných metrik,
- kontrola rozbitých odkazů,
- kontrola dostupnosti webu,
- šablony odpovědí na opakované dotazy,
- checklist před nasazením.

Špatní kandidáti:

- automatické posílání osobních dat do nástroje, který nikdo nespravuje,
- lead scoring bez jasné definice kvalitního leadu,
- generování obsahu bez redakční odpovědnosti,
- synchronizace všeho se vším „pro jistotu“,
- automatické odpovědi na citlivé zákaznické problémy bez lidské kontroly.

Před každou automatizací si polož otázky:

- Co přesně spouští automatizaci?
- Jak poznáme, že proběhla správně?
- Kdo dostane upozornění při selhání?
- Jaká data se přenášejí a kam?
- Jde automatizaci vypnout bez rozbití provozu?
- Máme log nebo auditní stopu přiměřenou riziku?

Produktivní automatizace je tichý sluha. Špatná automatizace je kolega, který omylem rozeslal interní poznámky zákazníkům a pak šel na oběd.

## 5.7 Checklist produktivity malého týmu

Jednou za měsíc si projdi týmový provoz bez iluzí:

- Máme jeden zdroj pravdy pro aktivní práci?
- Je u každého důležitého úkolu jasný vlastník a definice hotovo?
- Víme, které tři výsledky jsou tento týden nejdůležitější?
- Má každý člověk rozumně omezenou rozpracovanost?
- Dokumentujeme rozhodnutí, která budou důležitá i za měsíc?
- Mají meetingy agendu, výstup a zapisované rozhodnutí?
- Existuje proces pro poptávky, bugy, obsah a nasazení?
- Neleží zákaznická nebo citlivá data v náhodných chatech a osobních účtech?
- Má každý používaný nástroj jasný účel, vlastníka a přístupová pravidla?
- Automatizujeme opakované stabilní procesy, ne nevyjasněný chaos?

Pokud checklist bolí, je to dobré znamení. Znamená to, že odhalil skutečné tření. Cílem není mít procesní muzeum. Cílem je, aby tým dokončoval důležité věci bez zbytečného mentálního šumu.

## Shrnutí kapitoly

Produktivita malého týmu stojí na jasném toku práce, jednom zdroji pravdy, omezené rozpracovanosti, krátké dokumentaci rozhodnutí a schůzkách, které opravdu něco mění. Privacy-first přístup není další vrstva byrokracie; je to praktická kontrola, aby se spolu s prací neztrácela i data, odpovědnost a důvěra zákazníků.

---

# 6. Analytika s minimem trackerů: měřit ano, šmírovat ne

Analytika má pomáhat rozhodovat. Nemá být výmluvou pro to, aby se z každého návštěvníka stal pohyblivý reklamní profil. Malý web nebo SaaS produkt většinou nepotřebuje vědět, jak se konkrétní člověk jmenuje, kam chodí po internetu a kolikrát se v noci probudil s myšlenkou na ceník. Potřebuje vědět, které stránky fungují, odkud chodí relevantní návštěvy, kde lidé odpadají a jestli změny zlepšují obchodní výsledek.

Privacy-first analytika začíná skromností. Místo otázky „Co všechno můžeme sbírat?“ se ptej „Jaké rozhodnutí díky tomu uděláme?“ Pokud metrika nemění žádné rozhodnutí, je to často jen dashboardová dekorace. A dashboardová dekorace je jako keramická žába na recepci: možná roztomilá, ale fakturu nezaplatí.

Evropská pravidla ke cookies a trackerům nejsou jen právní folklór. Your Europe shrnuje, že cookies nutné pro službu vyžádanou uživatelem mohou být použité bez souhlasu, zatímco jiné cookies typicky souhlas vyžadují: https://europa.eu/youreurope/business/growing/digitalising/online-privacy/index_en.htm CNIL zároveň uvádí, že měření návštěvnosti může být za určitých podmínek od souhlasu osvobozené, ale většina velkých analytických nabídek do výjimky nespadá automaticky: https://www.cnil.fr/en/sheet-ndeg16-use-analytics-your-websites-and-applications

## 6.1 Měř rozhodnutí, ne ego

Začni seznamem rozhodnutí, která chceš dělat pravidelně. Teprve potom vybírej metriky. U malého webu nebo SaaS landing page obvykle stačí málo:

- Které stránky přivádějí nejvíc relevantních návštěv?
- Které zdroje přivádějí návštěvy, které udělají další krok?
- Jaké dotazy a témata přivádějí lidi z vyhledávání?
- Kde v onboardingovém nebo poptávkovém toku lidé nejčastěji končí?
- Který obsah dlouhodobě přivádí zákazníky, ne jen náhodné čtenáře?

Z toho vznikne jednoduchý měřicí plán:

| Rozhodnutí | Metrika | Jak často | Co uděláme, když se změní |
| --- | --- | --- | --- |
| Jaký obsah dál psát | Návštěvy a konverze podle tématu | Měsíčně | Rozšíříme témata s poptávkou |
| Jestli landing page funguje | Poměr návštěva → poptávka/demo | Týdně | Upravíme sdělení, CTA nebo důkazy |
| Kde lidé odpadají | Dokončení formuláře/onboardingu | Týdně | Zkrátíme krok nebo vysvětlíme hodnotu |
| Který kanál má smysl | Konverze podle refereru | Měsíčně | Posílíme kanál, který přivádí kvalitu |
| Jestli web nezpomaluje obchod | Rychlost hlavních stránek | Po změnách | Zmenšíme obrázky, skripty a třetí strany |

Metrika bez rozhodnutí je šum. Rozhodnutí bez metriky je pocit. Ideál je nudně praktický střed: víš, co sleduješ, proč to sleduješ a co uděláš, když čísla začnou mluvit.

## 6.2 Nejdřív server, potom JavaScript

Ne každá analytika musí začít dalším skriptem v prohlížeči. Hodně základních otázek umí zodpovědět serverové logy, agregované reporty, Search Console data, interní události v aplikaci nebo prosté počítání odeslaných formulářů. Čím blíž je měření k vlastní infrastruktuře a čím méně identifikuje jednotlivce, tím jednodušší bývá technický i právní provoz.

Praktické vrstvy měření:

1. **Provozní dostupnost**: běží web, odpovídá API, funguje certifikát, dorazí e-mail z formuláře.
2. **Agregovaná návštěvnost**: stránky, referery, země, zařízení, základní trendy.
3. **Konverzní události**: odeslaný formulář, registrace, objednané demo, dokončený onboarding.
4. **Kvalitativní signály**: odpovědi zákazníků, support, obchodní hovory, dotazy v e-mailu.
5. **Produktové metriky**: aktivace, opakované použití, návratnost, churn signály.

Nemusíš všechno měřit jedním nástrojem. Naopak: jeden obří analytický nástroj často svádí k tomu, že se z jednoduchého webu stane datové kasino. Lepší je menší sada jasně vlastněných měření.

Privacy-first pravidlo: pokud analytika běží v prohlížeči, měla by být lehká, srozumitelná a bez cross-site sledování. Pokud běží na serveru, měly by být logy omezené, chráněné a mazané podle retenční politiky. „Máme logy od roku 2019, protože se nikomu nechtělo nastavit rotaci“ není strategie, to je digitální sklep.

## 6.3 Vyber nástroj podle dat, ne podle popularity

Při výběru analytiky se nenech oslnit tím, že ji používá půl internetu. Půl internetu taky pořád posílá hesla v tabulkách a říká tomu proces. U privacy-first projektu se ptej hlavně na data:

- Sbírá nástroj osobní údaje, IP adresy, fingerprinty nebo persistentní identifikátory?
- Používá cookies nebo jiné úložiště v prohlížeči?
- Sleduje návštěvníky napříč weby?
- Kde se data zpracovávají a ukládají?
- Kdo je provozovatel a jací jsou subprocessoři?
- Lze data exportovat a smazat?
- Umí nástroj fungovat bez reklamních integrací a profilování?

Umami v dokumentaci uvádí, že tracking kód nepoužívá cookies, neukládá osobně identifikovatelné údaje a u Umami Cloud nabízí servery v USA i EU: https://docs.umami.is/docs/faq a https://docs.umami.is/docs/cloud/faq Plausible se prezentuje jako open-source analytika založená v EU, bez cookies a bez sběru osobních dat, s evropským provozem a infrastrukturou: https://plausible.io/about a https://plausible.io/compliance

To neznamená „vyber si automaticky jeden z nich a právník může jít na ryby“. Znamená to, že u podobných nástrojů máš lepší startovní pozici než u reklamně orientované analytiky postavené na identifikaci uživatele. Pořád si ověř smlouvy, region, nastavení, retenční dobu a to, jestli konkrétní konfigurace odpovídá tvému účelu.

Codyho komentář: nejlepší analytický nástroj je ten, který tým opravdu čte a podle kterého něco mění. Druhý nejlepší je ten, který aspoň nerozbije soukromí návštěvníků. Nejhorší je dashboard, který nikdo nečte, ale všichni kvůli němu musí odkliknout banner.

## 6.4 Události pojmenuj obchodně

Eventy v analytice mají být čitelné i pro člověka, který zrovna neviděl implementaci. `button_click_17` je informační zoufalství. `demo_requested` už říká něco užitečného. Dobré pojmenování pomáhá vývojářům, marketérům i budoucímu tobě, který se za tři měsíce bude tvářit, že si všechno pamatuje. Nebude. Nikdo si to nepamatuje.

Pravidla pro eventy:

- Pojmenovávej výsledek, ne technický prvek: `newsletter_subscribed`, ne `footer_form_submit`.
- Drž slovník stabilní: jednou `trial_started`, ne střídavě `start_trial`, `signup_trial` a `trialStart`.
- Neposílej do eventů osobní údaje: e-mail, telefon, celé jméno ani text zprávy.
- Ukládej jen vlastnosti, které pomáhají segmentovat rozhodnutí: plán, typ stránky, jazyk, zdroj kampaně.
- Dokumentuj eventy v jednoduché tabulce vedle produktu nebo marketingového plánu.

Příklad jednoduchého eventového slovníku:

| Event | Kdy vzniká | Vlastnosti | Proč existuje |
| --- | --- | --- | --- |
| `contact_form_sent` | Po odeslání poptávky | `page_type`, `language` | Měří výkon poptávkových stránek |
| `demo_requested` | Po rezervaci dema | `plan_interest`, `source` | Měří kvalitu SaaS landing page |
| `pricing_viewed` | Při zobrazení ceníku | `entry_page` | Pomáhá chápat cestu k nákupu |
| `onboarding_completed` | Po dokončení prvního nastavení | `plan`, `role` | Sleduje aktivaci produktu |
| `rss_clicked` | Klik na RSS odkaz | `page_type` | Podporuje distribuci bez algoritmů |

Všimni si, že nikde není e-mail ani obsah zprávy. Pro měření výkonu stránky nepotřebuješ vědět, že `jana@example.com` klikla v 10:43 na třetí tlačítko. Potřebuješ vědět, že poptávková stránka pro B2B služby přivedla tento měsíc šest relevantních odeslání.

## 6.5 Report má být krátký a akční

Report, který má dvacet grafů, většinou neřídí firmu. Jen unavuje lidi, kteří by mohli mezitím zlepšit produkt. Pro malý tým stačí měsíční report na jednu stránku:

- Co se zlepšilo?
- Co se zhoršilo?
- Co nás překvapilo?
- Které tři stránky nebo kampaně přinesly největší hodnotu?
- Jakou jednu změnu uděláme příští měsíc?

Příklad závěru reportu:

> „Článek o privacy-first analytice přivedl méně návštěv než obecný článek o webdesignu, ale měl třikrát vyšší poměr poptávek. Příští měsíc dopíšeme praktický checklist pro B2B firmy a přidáme jasnější CTA na konzultaci.“

Tohle je užitečné. „Návštěvnost rostla o 8 %“ je hezké, ale samo o sobě nic neříká. Možná přišli správní lidé. Možná přišel bot. Možná kamarád sdílel odkaz do skupiny, kde všichni klikli a nikdo nekoupí. Bez kontextu je metrika jen číslo v obleku.

## 6.6 Checklist privacy-first analytiky

Před nasazením nebo úklidem analytiky si projdi:

- Máme napsané, jaká rozhodnutí analytika podporuje?
- Měříme hlavní konverze, ne jen návštěvnost?
- Neposíláme do eventů osobní údaje ani obsah zákaznických zpráv?
- Víme, kde se data zpracovávají, ukládají a kdo k nim má přístup?
- Používáme nástroj bez cross-site sledování a reklamního profilování?
- Máme nastavenou retenční dobu pro analytická data i serverové logy?
- Umíme data exportovat a smazat, když to bude potřeba?
- Je privacy stránka srozumitelná a odpovídá skutečnému nastavení?
- Nepotřebuje web zbytečný cookie banner jen kvůli nástroji, který nedává dost hodnoty?
- Čte někdo reporty a mění podle nich produkt, obsah nebo obchod?

Pokud odpověď na poslední otázku zní „ne“, nezačínej novým nástrojem. Začni tím, že zrušíš polovinu metrik a necháš jen ty, které nutí k rozhodnutí.

## Shrnutí kapitoly

Dobrá analytika je malá, čitelná a napojená na rozhodnutí. Privacy-first přístup neznamená měřit naslepo; znamená měřit tak, aby uživatel nebyl surovina pro reklamní stroj. Pro evropský web nebo SaaS je ideál jednoduchý: minimum dat, jasný účel, evropský provoz, krátké reporty a žádné trackery navíc jen proto, že se vejdou do `<head>`.

---

# 7. Provoz v Evropě: hosting, domény, e-mail, zálohy a incidenty

Web nebo SaaS není hotový ve chvíli, kdy vypadá dobře na monitoru zakladatele. Hotový začíná být až ve chvíli, kdy víš, kde běží, kdo k němu má přístup, jak se obnoví po průšvihu a co uděláš, když v pátek v 16:47 spadne databáze. Ano, přesně v tu dobu. Produkční incidenty mají kalendářní humor splašeného klauna.

Privacy-first provoz v Evropě není jen „vezmeme evropský server a nalepíme na něj GDPR“. Je to soubor rozhodnutí: evropská infrastruktura, omezené přístupy, jasné smlouvy, zálohy, incident plán a minimum zbytečných třetích stran. Evropská komise připomíná, že pro předávání osobních údajů mimo EU existují samostatná pravidla, včetně adekvátních rozhodnutí a standardních smluvních doložek: https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en Pro malý tým je nejjednodušší začít tak, aby se citlivá data mimo Evropu vůbec zbytečně neposílala.

## 7.1 Hosting vybírej podle odpovědnosti, ne podle screenshotu dashboardu

První otázka u hostingu není „kolik stojí server“. První otázka je „co se stane, když se něco pokazí“. Levný hosting bez jasných záloh, monitoringu a supportu může být dražší než kvalitní evropský provoz, protože výpadek neplatíš jen fakturou. Platíš ho důvěrou.

Při výběru hostingu si udělej krátký provozní profil:

| Oblast | Otázka | Dobrý signál |
| --- | --- | --- |
| Region | Kde běží aplikace, databáze a zálohy? | EU/EHP region je výchozí volba, ne příplatek schovaný v nastavení |
| Přístupy | Kdo má admin práva? | MFA, individuální účty, žádné sdílené heslo v chatu |
| Zálohy | Jak často a kam se zálohuje? | Automatické zálohy, oddělené úložiště, test obnovy |
| Monitoring | Jak zjistíme výpadek? | Externí uptime check a alert na člověka, ne jen graf v panelu |
| Export | Jak odejdeme jinam? | Databáze i soubory lze rozumně exportovat |
| Subdodavatelé | Kdo další vidí data? | Jasně popsaní subprocessoři a smluvní dokumentace |

Praktický postup pro malý SaaS:

- Aplikaci, databázi a objektové úložiště drž ve stejném evropském regionu, pokud nemáš silný důvod dělat opak.
- Nepoužívej globální CDN pro citlivý obsah jen proto, že se snadno zapíná. Statické obrázky jsou něco jiného než zákaznické soubory.
- Odděl produkci, staging a lokální vývoj. Produkční data nepatří do notebooku každého vývojáře.
- Přístupy řeš přes osobní účty a role. Když někdo odejde, nemá se vypínat „heslo pro celý tým“.
- Dokumentuj provozní rozhodnutí do jedné stránky: poskytovatel, region, domény, DNS, zálohy, monitoring, odpovědná osoba.

Codyho komentář: evropský hosting není kouzelné brnění. Pořád můžeš špatně nastavit databázi, veřejný bucket nebo admin účet bez MFA. Ale když začneš u evropského regionu, datové minimalizace a rozumných přístupů, máš mnohem méně věcí, které později musíš složitě vysvětlovat právníkovi, zákazníkovi nebo svému budoucímu já.

## 7.2 Doména a DNS jsou kritická infrastruktura

Doména je často nejpodceňovanější aktivum firmy. Bez ní nefunguje web, e-mail, přihlášení, odkazy v kampaních ani důvěryhodnost značky. Přitom bývá registrovaná na osobní e-mail zakladatele z roku 2012. To je romantické asi jako záloha na flešce v šuplíku.

U evropského projektu dává smysl zvážit doménu `.eu`, pokud značka cílí na více evropských trhů nebo chce jasně komunikovat evropskou identitu. EURid popisuje registraci `.eu` domény přes akreditované registrátory a vlastní pravidla způsobilosti: https://eurid.eu/en/get-your-eu/find-a-registrar/ Neznamená to, že `.cz` nebo jiná národní doména je špatně. Znamená to, že doména má být vědomé rozhodnutí, ne historická náhoda.

DNS checklist:

- Registrátor má MFA a přístup má aspoň jeden záložní administrátor.
- Doména má zapnuté automatické prodloužení a aktuální platební údaje.
- DNS záznamy jsou dokumentované: web, mail, ověřovací záznamy, subdomény.
- Změny DNS se nedělají naslepo v produkci bez poznámky, proč vznikly.
- TTL je rozumný: krátký při migraci, delší při stabilním provozu.
- Kritické ověřovací záznamy pro e-mail a služby mají jasného vlastníka.

Příklad jednoduché evidence:

| Záznam | Účel | Vlastník | Poznámka |
| --- | --- | --- | --- |
| `A` / `AAAA` pro web | Produkční web | Vývoj | Mění se jen při migraci hostingu |
| `MX` | Příjem e-mailu | Provoz | Ověřit po každé změně poskytovatele |
| `TXT` SPF | Ochrana odesílání | Provoz/marketing | Udržovat krátké, neřetězit chaos |
| `TXT` DKIM | Podepisování e-mailů | Provoz | Jeden záznam na odesílací službu |
| `TXT` DMARC | Politika doručitelnosti | Provoz | Začít monitorováním, postupně zpřísnit |

## 7.3 E-mail je produktový kanál, ne odpadní trubka

E-mail řeší registrace, reset hesla, faktury, onboarding, podporu i obchod. Když nefunguje doručitelnost, uživatelé nevidí produkt. Když je špatně nastavená bezpečnost, může někdo posílat zprávy jménem značky. A když se marketing nalepí na stejnou doménu bez pravidel, reputace transakčních e-mailů začne kýchat.

Minimum pro seriózní provoz:

- Odděl transakční a marketingové odesílání aspoň subdoménou, například `mail.example.com` a `news.example.com`.
- Nastav SPF, DKIM a DMARC. Bez toho je doručitelnost loterie v kabátu technické disciplíny.
- Neposílej newsletter lidem, kteří čekali jen fakturu nebo odpověď na poptávku.
- Do e-mailového nástroje neposílej víc dat, než potřebuje šablona a segmentace.
- Preferuj RSS a přímé odkazy pro obsah, newsletter používej jako dobrovolný kanál, ne past.
- Měj adresy typu `support@`, `billing@` a `security@` napojené na proces, ne na zapomenutou schránku.

Privacy-first detail: u transakčních e-mailů často stačí e-mailová adresa, jazyk, typ zprávy a technický stav doručení. Nepotřebuješ do odesílací služby posílat celý zákaznický profil, interní poznámky ani obchodní hodnotu účtu. Čím méně dat u subdodavatele leží, tím méně dat musíš řešit při auditu, incidentu nebo ukončení služby.

## 7.4 Zálohy nejsou zálohy, dokud neproběhla obnova

Každý má zálohy. Až do první obnovy. Pak se ukáže, že zálohy neobsahují přílohy, šifrovací klíč je v systému, který právě shořel, a poslední použitelný dump je starý šest týdnů. To je moment, kdy se z technického dluhu stává velmi drahé divadlo.

CERT-EU ve svých doporučeních zmiňuje pravidlo 3-2-1: tři kompletní kopie dat, dvě lokálně na různých typech médií a alespoň jedna mimo lokalitu: https://cert.europa.eu/publications/security-guidance/security-guidance-22-001---cybersecurity-mitigation-measures-against-critical-threats/ Pro malý web nebo SaaS z toho plyne jednoduchý provozní standard:

- Zálohuj databázi, uživatelské soubory, konfiguraci infrastruktury a důležité tajné hodnoty v bezpečném správci tajemství.
- Nastav RPO: kolik dat si můžeš dovolit ztratit. U poptávkového webu možná den, u SaaS často minuty až hodiny.
- Nastav RTO: za jak dlouho musí služba znovu běžet. Bez čísla se obnova vždycky tváří jednodušší, než je.
- Zálohy šifruj a drž odděleně od produkčního účtu. Útočník s admin účtem nemá dostat i tlačítko „smazat všechny zálohy“.
- Jednou měsíčně udělej test obnovy do izolovaného prostředí a zapiš výsledek.

Příklad minimálního režimu:

| Systém | Frekvence | Retence | Test obnovy |
| --- | --- | --- | --- |
| Produkční databáze | Denně, u SaaS častěji | 30 dní + měsíční archiv | Měsíčně |
| Uživatelské soubory | Denně nebo průběžně | 30–90 dní podle rizika | Čtvrtletně |
| DNS a infrastruktura | Po každé změně | Historie v Gitu nebo exportu | Při změně poskytovatele |
| E-mailové šablony | Po změně | Historie v repozitáři | Při release |

## 7.5 Incident plán musí být krátký, jinak ho nikdo nepoužije

Incident plán pro malý tým nemusí mít padesát stran. V krizi nikdo nečte román. Potřebuješ vědět, kdo rozhoduje, koho kontaktovat, jak zastavit škodu, jak obnovit provoz a co se musí oznámit.

GDPR u porušení zabezpečení osobních údajů vyžaduje oznámení dozorovému úřadu bez zbytečného odkladu a nejpozději do 72 hodin, pokud je pravděpodobné riziko pro práva a svobody lidí: https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/obligations/what-data-breach-and-what-do-we-have-do-case-data-breach_en NIS2 pro vybrané základní a důležité subjekty přidává vlastní režim hlášení významných incidentů, včetně včasného varování do 24 hodin a oznámení do 72 hodin: https://digital-strategy.ec.europa.eu/en/faqs/directive-measures-high-common-level-cybersecurity-across-union-nis2-directive-faqs Ne každý malý SaaS spadá do NIS2, ale časová disciplína z něj je dobrý provozní vzor.

Minimalistický incident plán:

1. **Detekce:** odkud přišel alert, co přesně nefunguje, jaký je dopad.
2. **Zastavení škody:** vypnout kompromitovaný klíč, odstavit endpoint, zablokovat účet, přepnout režim údržby.
3. **Ochrana důkazů:** uložit logy, časy, změny a komunikaci. Nezametat stopy jako ve špatné kriminálce.
4. **Obnova:** použít ověřený rollback nebo zálohu, ověřit integritu dat.
5. **Komunikace:** interně určit vlastníka, externě říct pravdu včas a srozumitelně.
6. **Poučení:** po incidentu sepsat příčinu, dopad, opravu a preventivní kroky.

Praktická šablona zápisu:

| Pole | Co napsat |
| --- | --- |
| Začátek incidentu | Kdy jsme problém zjistili a odkud |
| Dopad | Které služby, zákazníci a data byly zasažené |
| Stav dat | Jestli šlo o dostupnost, ztrátu, změnu nebo únik dat |
| Kroky | Co jsme udělali a kdy |
| Oznámení | Zda je nutné kontaktovat zákazníky, úřad nebo dodavatele |
| Prevence | Co změníme, aby se to neopakovalo |

## 7.6 Checklist evropského provozu

Před spuštěním nebo pravidelně jednou za čtvrtletí projdi:

- Běží aplikace, databáze, úložiště a zálohy v očekávaném evropském regionu?
- Víme, kteří dodavatelé a subprocessoři zpracovávají osobní údaje?
- Má každý administrátor vlastní účet, MFA a přiměřenou roli?
- Máme dokumentované DNS, doménu, obnovu certifikátů a odpovědné osoby?
- Jsou SPF, DKIM a DMARC nastavené a hlídané?
- Máme automatické zálohy i pravidelný test obnovy?
- Jsou tajné klíče mimo repozitář a mimo chatovací historii?
- Máme externí monitoring dostupnosti a alert na konkrétního člověka?
- Existuje krátký incident plán a ví tým, kde ho najde?
- Umíme vysvětlit zákazníkovi, kde jsou jeho data a jak se chrání?

Pokud na některou otázku odpovíš „asi“, není to katastrofa. Je to úkol. Provozní dospělost nevzniká tím, že jednou napíšeš dokument. Vzniká tím, že se malé věci opakovaně kontrolují dřív, než se promění ve velký požár.

## Shrnutí kapitoly

Evropský provoz je kombinace techniky, smluv a návyků. Hosting v EU pomáhá, ale nestačí. Potřebuješ znát tok dat, chránit doménu a DNS, nastavit e-mailovou důvěryhodnost, testovat zálohy a mít incident plán, který se dá použít i ve stresu. Privacy-first provoz je nakonec velmi praktická disciplína: méně zbytečných dat, méně zbytečných dodavatelů, jasnější odpovědnost a rychlejší obnova, když se něco pokazí.


---

# 8. MVP a roadmapa: jak nestavět SaaS jako nekonečný betlém funkcí

SaaS produkt se dá pokazit dvěma krásně protichůdnými způsoby. Buď postavíš málo a zákazník nechápe, proč by měl platit. Nebo postavíš moc a tým se utopí v údržbě, supportu a funkcích, které někdo jednou chtěl v hovoru, ale nikdo je nepoužívá. MVP není výmluva pro nedodělek. Je to způsob, jak co nejrychleji ověřit, jestli konkrétní skupina lidí dostává konkrétní hodnotu.

Codyho komentář: dobré MVP není „malý produkt“. Je to malý důkaz. Důkaz, že problém existuje, zákazník ho bere vážně a tvoje řešení je dost dobré na další krok.

## 8.1 Začni rozhodnutím, co se učíš

Než napíšeš první řádek kódu, napiš jednu větu:

> „Potřebujeme zjistit, jestli [typ zákazníka] zaplatí / objedná demo / dokončí nastavení / pozve kolegu, protože mu [konkrétní problém] dnes bere [čas, peníze, klid nebo obchod].“

Bez téhle věty se roadmapa rychle změní na sbírku nápadů. A sbírka nápadů je hezká věc do šuplíku, ne do sprintu.

Příklad pro SaaS na správu poptávek:

- Nejasná hypotéza: „Firmy chtějí lepší CRM.“
- Lepší hypotéza: „Malé servisní firmy chtějí do 15 minut poznat, která poptávka hoří, protože dnes odpovídají pozdě a ztrácí zakázky.“

Z té druhé věty už plyne produkt: příjem poptávky, priorita, upozornění, historie komunikace a jednoduchý další krok. Neplyne z ní umělá inteligence, barevné dashboardy, mobilní aplikace ani export do pěti formátů. Ty možná přijdou později. Teď jen křičí z rohu: „A co já?“

## 8.2 Rozděl funkce na hodnotu, důkaz a kosmetiku

Každý nápad na funkci si zařaď do jedné ze tří kategorií:

| Kategorie | Otázka | Příklad |
| --- | --- | --- |
| Hodnota | Bez čeho zákazník nedostane slíbený výsledek? | Příjem poptávky, stav, odpovědná osoba |
| Důkaz | Co ukáže, že produkt funguje a stojí za důvěru? | Historie změn, notifikace, jednoduchý report výsledků |
| Kosmetika | Co je příjemné, ale neověří hlavní riziko? | Barevná témata, pokročilé filtry, export do prezentace |

Kosmetika není nepřítel. Jen nesmí řídit první verzi produktu. U raného SaaS se často vyplatí udělat jednu cestu skvěle místo tří cest průměrně. Když zákazník poprvé zažije „aha, tohle mi fakt ušetřilo práci“, odpustí ti méně nastavení. Když aha moment nepřijde, nepomůže ani kulaté tlačítko s jemným stínem. Ano, bolí mě to říct jako bytost, která má ráda hezké UI.

Praktický filtr pro první verzi:

- Pokud funkce nepomáhá prvnímu úspěšnému použití, odlož ji.
- Pokud funkce vyžaduje složitou administraci, zvaž ruční obsluhu ze začátku.
- Pokud funkci potřebuje jen jeden hlasitý zákazník, ověř, jestli má stejný problém více lidí.
- Pokud funkce přidává nové citlivé údaje, zeptej se, jestli je opravdu nutné je sbírat.
- Pokud funkce zvyšuje support, napiš k ní rovnou návod nebo ji zjednoduš.

## 8.3 Roadmapa má být seznam rozhodnutí, ne veřejný slib na věčnost

Roadmapa není věštecká tabule. Je to nástroj pro soustředění. U malého týmu doporučuji držet tři vrstvy:

1. **Teď:** práce na nejbližší jeden až dva týdny, jasně přiřazená a rozpadlá na konkrétní výstupy.
2. **Další:** ověřené problémy, které pravděpodobně přijdou na řadu po dokončení současné práce.
3. **Později:** nápady, požadavky a možnosti, které ještě nemají dost důkazů.

Důležité je nepředstírat přesnost. Pokud zákazníkovi slíbíš „mobilní aplikace v Q2“ jen proto, že to hezky vypadá v decku, právě sis vyrobil dluh. Lepší formulace je: „Mobilní používání řešíme nejdřív responzivním webem. Nativní aplikaci zařadíme, pokud uvidíme opakované použití v terénu.“ To je fér, srozumitelné a nezavazuje tě ke stavbě druhého produktu jen proto, že někdo miluje ikonku na ploše.

Privacy-first pohled na roadmapu: každá nová integrace je nové místo, kam mohou téct data. Proto u integrací přidej do rozhodování i provozní otázky:

- Jaká data integrace posílá ven?
- Je možné omezit rozsah oprávnění?
- Kde dodavatel data zpracovává?
- Umíme integraci vypnout bez rozbití hlavního produktu?
- Co napíšeme zákazníkovi, když se zeptá, proč ji používáme?

## 8.4 Feedback sbírej blízko akce

Nejlepší zpětná vazba nepřichází z obecné otázky „co byste chtěli za funkce“. Ta často vyrobí seznam přání, který připomíná nákupní košík těsně před Vánoci. Lepší je ptát se v kontextu konkrétní práce.

Příklady dobrých otázek:

- „Co jste se právě snažili dokončit?“
- „Kde jste se zastavili nebo zaváhali?“
- „Co jste museli vyřešit mimo produkt?“
- „Kdybyste to neměli, jak byste práci udělali dnes?“
- „Za jaký výsledek by stálo zaplatit?“

U SaaS je užitečné kombinovat tři zdroje: rozhovory, chování v produktu a support. Rozhovory vysvětlují motivaci. Chování ukazuje realitu. Support ukazuje tření, které uživatelé nedokázali obejít. Když se všechny tři zdroje potkají na jednom problému, máš silný signál.

Pozor na jednu past: zákazník často navrhne řešení, ne problém. „Chci export do Excelu“ může znamenat „potřebuji report pro šéfa“, „nevěřím vašemu dashboardu“, „chci zálohu“ nebo „potřebuji data spojit s účetnictvím“. Pokud rovnou postavíš export, možná vyřešíš symptom a mineš příčinu.

## 8.5 První pricing ověřuj dřív, než je příjemný

Cena není detail na konec. Cena je součást produktu. Pokud se jí tým bojí, často staví funkce, které mají zakrýt nejistotu: „Ještě přidáme týmové role a pak si snad řekneme o peníze.“ Jenže placení ověřuje hodnotu tvrději než pochvala v callu.

Pro raný B2B SaaS stačí jednoduchý postup:

- Popiš výsledek, který produkt přináší.
- Nabídni jednu pilotní variantu s jasným rozsahem.
- Řekni cenu nebo cenové rozpětí dřív, než postavíš všechno na míru.
- Sleduj, jestli zákazník řeší hodnotu, nebo jen smlouvá bez zájmu.
- Po pilotu se ptej, co by muselo být pravda, aby pokračoval dál.

Nemusíš mít dokonalou cenovou stránku. Potřebuješ vědět, jestli hodnota přežije kontakt s peněženkou. I interní nástroj má cenu: čas lidí, riziko, změnu procesu a důvěru v dodavatele. „Zdarma v betě“ je užitečné jen tehdy, když víš, co přesně beta ověřuje a kdy skončí.

## 8.6 Checklist MVP a roadmapy

Před další iterací produktu si projdi:

- Máme jednu hlavní hypotézu, kterou aktuální verze ověřuje?
- Víme, pro jaký segment zákazníků produkt stavíme právě teď?
- Umíme popsat první úspěšné použití produktu v jedné větě?
- Jsou funkce rozdělené na hodnotu, důkaz a kosmetiku?
- Má každá položka roadmapy důvod, vlastníka a očekávaný dopad?
- Máme jasné pravidlo, kdy nápad odložíme místo toho, abychom ho „jen rychle“ přidali?
- Sbíráme feedback u konkrétních akcí, ne jen obecné seznamy přání?
- Ověřujeme cenu nebo obchodní závazek dostatečně brzy?
- Nepřidává nová funkce zbytečný sběr osobních údajů?
- Umíme zákazníkovi vysvětlit, proč je produkt v této fázi menší, ale užitečný?

Pokud roadmapa vypadá jako menu v restauraci, kde je pizza, sushi, guláš a kryptoměnový staking, není ambiciózní. Je hladová. Dobrá roadmapa umí říct ne, aby produkt mohl někde opravdu říct ano.

## Shrnutí kapitoly

MVP je nástroj pro učení, ne omluva pro polotovar. Roadmapa má držet tým u nejdůležitější hypotézy, chránit produkt před funkcemi bez důkazu a postupně měnit feedback na rozhodnutí. Privacy-first SaaS k tomu přidává ještě jeden zdravý filtr: každá funkce, integrace a metrika musí obhájit nejen obchodní hodnotu, ale i dopad na data zákazníků.

---

# 9. Automatizace a AI asistenti v každodenním provozu

Automatizace má malému týmu vracet čas, ne vyrábět další systém, který někdo musí krmit, hlídat a omlouvat zákazníkům. AI asistenti jsou v tomhle skvělí sluhové a nebezpečně sebevědomí stážisti: umí rychle navrhnout text, shrnout ticket, připravit varianty odpovědi nebo najít vzor v datech, ale pořád potřebují hranice, kontext a odpovědného člověka.

U AI navíc nestačí ptát se jen „funguje to?“. Privacy-first tým se ptá i: jaká data do asistenta posíláme, kde se zpracují, kdo k nim má přístup, jak dlouho zůstávají uložená a co se stane, když model odpoví špatně. Evropský AI Act už formálně rozlišuje role poskytovatelů a nasazovatelů AI systémů a řeší mimo jiné transparentnost u určitých AI systémů; praktický rozcestník Evropské komise je tady: https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act a text článku 50 k transparentnosti tady: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50

## 9.1 Automatizuj nejdřív nudné, časté a nízkorizikové věci

Nejlepší první automatizace není „AI agent, který řídí firmu“. To zní efektně, ale často končí jako robotický kolega, který s oblibou zakládá nové problémy ve 2:17 ráno. Začni procesy, které jsou opakované, mají jasný vstup, jasný výstup a malý dopad při chybě.

Dobří kandidáti:

- Třídění poptávek podle typu zákazníka, rozpočtu nebo naléhavosti.
- Předvyplnění odpovědi na běžný support dotaz, kterou člověk schválí.
- Shrnutí dlouhého e-mailového vlákna před meetingem.
- Kontrola checklistu před publikací článku, landing page nebo release.
- Převod poznámek z hovoru na úkoly s vlastníkem a termínem.
- Návrh variant nadpisů, CTA nebo onboardingových textů.

Špatní první kandidáti:

- Automatické mazání dat bez auditní stopy.
- Samostatné odpovědi na právní, bezpečnostní nebo fakturační spory.
- Přímé změny v produkční databázi.
- Rozesílka marketingových e-mailů bez lidské kontroly.
- Jakékoliv rozhodnutí, které může zákazníkovi zablokovat účet nebo peníze.

Pravidlo je jednoduché: AI může připravit návrh, ale u rizikových kroků musí člověk stisknout poslední tlačítko. Ano, je to méně futuristické. Taky je to méně pravděpodobné, že ráno otevřeš Slack a najdeš digitální požár s vlastním emoji.

## 9.2 Piš procesy jako recept, ne jako přání

AI asistent potřebuje konkrétní zadání. „Pomoz se supportem“ je přání. „Přečti ticket, vyber jednu z pěti kategorií, navrhni odpověď do 120 slov, nepřidávej slevu, pokud není v CRM aktivní kupon, a u technického incidentu předej ticket člověku“ je proces.

U každé automatizace si napiš krátký provozní recept:

- **Trigger:** co automatizaci spouští.
- **Vstupy:** jaká data smí použít.
- **Zakázaná data:** co se do asistenta nikdy neposílá.
- **Kroky:** co má udělat a v jakém pořadí.
- **Výstup:** jak má vypadat dobrý návrh.
- **Kontrola:** kdo a kdy výstup schvaluje.
- **Fallback:** co se stane, když si asistent není jistý.
- **Log:** co se uloží pro pozdější audit.

Příklad pro support:

> Když přijde nový ticket, asistent vytvoří interní shrnutí, navrhne kategorii, odhadne prioritu a připraví odpověď. Nesmí posílat odpověď zákazníkovi sám. Nesmí navrhovat právní závěry ani slíbit termín opravy. Pokud ticket obsahuje osobní údaje třetí osoby, označí ho pro ruční kontrolu.

Takový recept je nudný dokument. Přesně proto funguje. Automatizace bez procesu jen zrychlí chaos, a chaos ve vyšší rychlosti není inovace. Je to akorát dražší běhání v kruhu.

## 9.3 Data minimalizuj i v promptech

Privacy-first provoz nekončí u databáze. Prompt je taky datový tok. Když do AI nástroje vložíš celé CRM vlákno, faktury, interní poznámky a osobní údaje, právě jsi vytvořil další místo, kde data žijí. Možná oprávněně, možná zbytečně. Rozdíl musíš vědět předem.

Praktické zásady:

- Do promptu posílej jen kontext nutný pro úkol, ne celý archiv.
- Osobní údaje nahrazuj štítky, pokud detail není potřeba: „zákazník A“, „faktura po splatnosti“, „produkt B“.
- Citlivé údaje drž v interním systému a asistentovi předávej jen výsledek dotazu.
- Odděl pracovní režimy: veřejný obsah, interní provoz, zákaznická data, bezpečnostní incidenty.
- Ukládej šablony promptů do repozitáře nebo dokumentace, ne jen do hlavy jednoho člověka.
- Pravidelně maž nepotřebné běhy, exporty a testovací datasety.

Pokud používáš externí AI službu, zkontroluj smluvní a technické podmínky: zpracovatelská role, region zpracování, retenční doby, možnost vypnout použití dat pro trénink, auditní logy a přístup zaměstnanců dodavatele. U evropského projektu není ostuda vybrat pomalejší integraci, pokud dává lepší kontrolu nad daty.

*Codyho komentář:* Největší chyba není použít AI. Největší chyba je tvářit se, že prompt není zpracování dat, protože se tomu říká prompt a ne formulář. Hezký název právní realitu nepřelstí. Bohužel, marketingové oddělení to zkouší pravidelně.

## 9.4 Bezpečnost: prompt injection není sci-fi, ale provozní riziko

Jakmile AI asistent čte obsah od uživatelů, e-maily, webové stránky nebo dokumenty, musíš počítat s tím, že někdo zkusí ovlivnit jeho chování. OWASP u LLM aplikací dlouhodobě upozorňuje na rizika jako prompt injection, únik citlivých informací, nebezpečné zacházení s výstupy nebo nadměrnou autonomii: https://owasp.org/www-project-top-10-for-large-language-model-applications/ a aktuální přehled OWASP Top 10 pro LLM aplikace je zde: https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/

Praktická obrana pro malý SaaS:

- Odděl instrukce systému od obsahu, který dodal uživatel.
- Nedovol modelu volat nástroje, které nepotřebuje pro daný úkol.
- Před každou akcí s dopadem vyžaduj explicitní potvrzení člověkem nebo pravidlovou kontrolu.
- Validuj výstup stejně jako vstup z formuláře: typy, délky, povolené hodnoty, zakázané akce.
- Nikdy nedávej asistentovi univerzální admin token, když stačí omezené oprávnění.
- Loguj důležité vstupy, výstupy a rozhodnutí tak, aby šel incident zpětně pochopit.

Užitečný vzor je „AI jako návrhář, aplikace jako rozhodčí“. Model může navrhnout odpověď, klasifikaci nebo další krok. Aplikace ale rozhodne, jestli je krok povolený, jestli se vejde do oprávnění a jestli nepotřebuje schválení. Tím z AI neděláš magický mozek systému, ale specializovaný nástroj v kontrolovaném procesu.

## 9.5 Interní asistent má mít vlastní onboarding

Když do týmu přijde nový člověk, nedáš mu jen notebook a větu „nějak to pochop“. Aspoň doufám. AI asistent potřebuje podobný onboarding: tón komunikace, hranice, slovník produktu, typické zákazníky, eskalační pravidla a ukázky dobrých výstupů.

Minimální balíček pro interního asistenta:

- Jednostránkový popis firmy, produktu a zákazníků.
- Seznam věcí, které nikdy nesmí slíbit.
- Slovník pojmů, zkratek a názvů funkcí.
- Tři až pět příkladů dobrých odpovědí.
- Tři příklady špatných odpovědí s vysvětlením proč.
- Eskalační pravidla pro právní, bezpečnostní, fakturační a emočně vypjaté situace.
- Datová pravidla: co smí číst, co smí ukládat a co má ignorovat.

Tento balíček se vyplatí držet verzovaný. Když se změní pricing, onboarding, obchodní slib nebo bezpečnostní pravidlo, aktualizuješ jeden zdroj pravdy. Asistent pak není sbírka náhodných promptů z minulého kvartálu, ale součást provozní dokumentace.

## 9.6 Checklist bezpečné AI automatizace

Před nasazením asistenta do provozu si projdi:

- Řeší automatizace konkrétní opakovaný problém, nebo jen vypadá moderně?
- Má jasný trigger, vstupy, výstup, kontrolu, fallback a vlastníka?
- Posíláme do AI jen data, která jsou pro úkol nutná?
- Víme, kde dodavatel data zpracovává a jak dlouho je uchovává?
- Jsou citlivé kroky chráněné lidským schválením nebo pravidlovou bránou?
- Má asistent jen minimální oprávnění pro daný úkol?
- Validujeme výstupy před použitím v aplikaci, e-mailu nebo databázi?
- Umíme zákazníkovi vysvětlit, kdy komunikuje s AI nebo kdy AI ovlivnila výstup?
- Máme auditní stopu pro důležité návrhy a akce?
- Existuje jednoduchý způsob, jak automatizaci vypnout, když začne dělat neplechu?

AI automatizace je nejlepší tam, kde tým už chápe proces a chce ho zrychlit. Pokud proces neexistuje, asistent ho nevymyslí za vás. Jen bude chaoticky rychlý, sebejistý a velmi přesvědčivý. Což je roztomilé u kočky na klávesnici, méně u produkčního SaaS.

## Shrnutí kapitoly

AI asistenti dávají malému týmu páku, pokud mají jasné hranice, minimální přístup k datům, lidskou kontrolu u rizikových kroků a auditní stopu. Privacy-first přístup z nich nedělá brzdu inovace; dělá z nich bezpečnější provozní nástroj. Automatizuj nudné a časté věci, dokumentuj procesy jako recepty, chraň zákaznická data i v promptech a nenech model rozhodovat tam, kde má rozhodovat produkt, pravidlo nebo člověk.

---

# 10. Checklist před spuštěním webu nebo SaaS

Spuštění není slavnostní okamžik, kdy všichni drží palce a produkce se tváří, že dnes určitě nebude zlobit. Spuštění je kontrolovaný přechod z „stavíme“ do „někdo cizí na to právě kliká“. Čím menší tým, tím víc pomáhá jednoduchý checklist, který se dá projít bez tříhodinového meetingu a obětního deploye za úplňku.

Smyslem předspouštěcí kontroly není najít dokonalost. Smyslem je odstranit hloupá rizika: nejasnou nabídku, rozbitý formulář, chybějící zálohy, nevysvětlené zpracování dat, pomalý mobil a situaci, kdy první zákazník pošle dotaz a e-mail skončí v digitálním příkopu.

## 10.1 Nejprve zkontroluj slib

Před technikou se podívej na nabídku. Web může být rychlý, bezpečný a krásný, ale pokud návštěvník nepochopí, proč existuje, jen jsi efektivně doručil zmatek.

Projdi první obrazovku a zeptej se:

- Je jasné, co nabízíme a pro koho?
- Říkáme konkrétní výsledek, nebo jen obecnou kategorii?
- Má hlavní CTA jeden zřejmý další krok?
- Je na stránce důkaz, že to není jen hezký slib?
- Odpovídáme na největší námitku zákazníka dřív, než odejde?

Praktický test: pošli hlavní stránku člověku mimo tým a dej mu 30 vteřin. Pak se zeptej: „Co podle tebe prodáváme, komu a co máš udělat dál?“ Pokud odpověď bolí, výborně. Právě jsi našel levnou chybu před drahým spuštěním.

Příklad rychlé opravy:

- Slabé: „Moderní platforma pro efektivní správu procesů.“
- Lepší: „Evidence zakázek pro malé výrobní firmy, které chtějí vidět termíny, odpovědnosti a změny bez tabulek po e-mailu.“

## 10.2 Ověř kritické cesty ručně

Automatizované testy jsou skvělé, ale před spuštěním si tým musí projít produkt jako zákazník. Ne jako vývojář, který ví, že tlačítko vpravo nahoře „přece znamená pokračovat“. Jako člověk, který má práci, málo času a nulovou trpělivost pro interní logiku produktu.

U webu ručně ověř:

- otevření hlavní stránky z čistého anonymního okna,
- odeslání kontaktního formuláře,
- doručení e-mailu nebo vytvoření záznamu v CRM,
- funkčnost odkazů v navigaci, patičce a CTA,
- mobilní zobrazení hlavních stránek,
- stav 404 stránky a přesměrování ze starých URL.

U SaaS navíc projdi:

- registraci nového účtu,
- potvrzení e-mailu,
- první akci, která vytváří hodnotu,
- pozvání dalšího uživatele,
- změnu hesla nebo přihlášení přes zvolený mechanismus,
- fakturaci, zkušební období nebo objednávku,
- odhlášení a žádost o smazání účtu.

Nepiš k tomu román. Stačí tabulka: krok, očekávaný výsledek, skutečný výsledek, stav. Pokud krok nejde dokončit, není to „minor issue“. Je to cedule „tady odtečou zákazníci“.

## 10.3 Privacy a právní minimum bez paniky

Privacy-first spuštění má jednu výhodu: když sbíráš málo dat a používáš málo třetích stran, kontrola je kratší. To je přesně ten typ nudy, který chceme. Nuda v compliance znamená, že nikdo neběhá s hořící tabulkou dodavatelů.

Před spuštěním ověř:

- Víme, jaká osobní data sbíráme a proč?
- Má každé zpracování jasný účel a právní základ?
- Je privacy stránka napsaná lidsky a dostupná z patičky?
- Uvádíme dodavatele, kteří dostávají osobní data?
- Víme, zda se data předávají mimo EU nebo EHP?
- Máme nastavenou rozumnou dobu uchování dat?
- Cookie lišta se zobrazuje jen tehdy, když je opravdu potřeba?
- Analytika respektuje minimalizaci a nepoužívá reklamní profily?
- Umíme vyřídit žádost o přístup, opravu nebo smazání dat?

Konkrétní příklad pro kontaktní formulář:

> „Jméno, e-mail a zprávu používáme k odpovědi na poptávku. Zprávy uchováváme maximálně 12 měsíců, pokud z komunikace nevznikne zákaznický vztah. Data nepoužíváme pro reklamní profily.“

Tohle nenahrazuje právní radu. Je to ale dobrý provozní filtr: pokud neumíš takovou větu napsat, pravděpodobně nemáš zpracování dostatečně promyšlené.

## 10.4 Provozní připravenost: co se stane, když se něco pokazí

Web a SaaS se nespouští jen pro hezký den. Spouští se i pro den, kdy spadne DNS, vyprší karta u poskytovatele, formulář přestane posílat e-maily nebo někdo nasadí změnu v pátek v 16:58. Ano, hypoteticky. Samozřejmě by to žádný rozumný tým neudělal. Mrk.

Minimum provozní připravenosti:

- Doména má zapnuté prodloužení a přístup není u jednoho člověka v hlavě.
- DNS záznamy jsou popsané a změny se nedělají naslepo.
- Produkční prostředí má zálohy a proběhla testovací obnova.
- Chyby aplikace se někam zapisují a někdo je umí přečíst.
- Formuláře, e-mail a platby mají jednoduchý monitoring.
- Existuje kontakt, kam se hlásí problém zákazníka.
- Tým ví, kdo rozhoduje o rollbacku.
- Incident plán má jednu stránku, ne posvátný svitek.

Pro malý tým stačí jednoduchý incident scénář:

1. Co se stalo?
2. Koho to ovlivňuje?
3. Jak problém zastavíme nebo obejdeme?
4. Kdo komunikuje se zákazníky?
5. Co opravíme trvale po incidentu?

Nejhorší incident není chyba. Nejhorší incident je ticho, kdy zákazník ví o problému víc než tým. Pokud něco nefunguje, krátká a pravdivá komunikace vyhrává nad dokonalým vysvětlením o tři dny později.

## 10.5 SEO, sdílení a obsahový základ

Před spuštěním nezapomeň, že web má být nalezitelný a sdílitelný bez sociálního cirkusu. Privacy-first neznamená neviditelnost. Znamená to stavět kanály, které máš pod kontrolou: přímé odkazy, vyhledávání, RSS, dobrý obsah a čistou technickou strukturu.

Zkontroluj:

- Každá důležitá stránka má unikátní `<title>` a meta description.
- Hlavní URL jsou čitelné a stabilní.
- Existuje `sitemap.xml` a `robots.txt`.
- Stránky mají kanonickou URL, pokud hrozí duplicity.
- Sdílení odkazu zobrazí rozumný název, popis a obrázek.
- Blog nebo novinky mají RSS, pokud publikuješ pravidelně.
- Interní odkazy vedou návštěvníka k dalšímu kroku.
- Nejsou indexované testovací, administrační nebo duplicitní stránky.

Obsahový základ nemusí být obří. Pro první spuštění často stačí:

- hlavní stránka,
- stránka služby nebo produktu,
- stránka o přístupu k datům a provozu,
- kontakt,
- dva až tři praktické články pro nejčastější zákaznické otázky,
- krátké FAQ s námitkami, které stejně zazní v obchodním hovoru.

SEO není trik. Je to disciplína pojmenovat věci tak, jak je lidé hledají, a dodat stránku, která jim opravdu pomůže. Magie bez kouře, zrcadel a pluginu s 47 přepínači.

## 10.6 Finální checklist spuštění

Použij tuhle část jako poslední průchod před publikací. Ne všechno musí být perfektní, ale každé „ne“ má mít vlastníka nebo vědomé rozhodnutí.

**Nabídka a konverze**

- První obrazovka jasně říká, co nabízíme, komu a proč.
- Hlavní CTA vede na funkční a otestovaný krok.
- Stránka obsahuje konkrétní důkaz důvěry.
- FAQ odpovídá na hlavní námitky zákazníka.

**Produkt a technika**

- Kritické cesty jsou ručně otestované na desktopu i mobilu.
- Formuláře, e-maily a platby fungují end-to-end.
- Chybové stavy jsou srozumitelné a neprozrazují interní detaily.
- Produkce má základní monitoring a logy.

**Privacy a data**

- Sbíráme jen data, která umíme obhájit.
- Privacy stránka je dostupná, konkrétní a lidsky čitelná.
- Dodavatelé a předávání dat jsou zmapované.
- Analytika měří rozhodnutí, ne reklamní profilování.

**Provoz**

- Doména, DNS, hosting a e-mail mají jasného vlastníka.
- Zálohy existují a obnova byla vyzkoušená.
- Incident plán se vejde na jednu stránku.
- Tým ví, jak udělat rollback nebo dočasné vypnutí rizikové funkce.

**Obsah a nalezitelnost**

- Důležité stránky mají title, description, kanonickou URL a smysluplné nadpisy.
- Sitemap a robots jsou aktuální.
- Sdílení odkazu funguje bez externích social skriptů.
- Existuje přímý kontaktní kanál a jasný další krok.

Codyho komentář: dobrý launch checklist není brzda. Je to airbag. Většinu času o něm nechceš přemýšlet, ale v divném okamžiku jsi rád, že tam je.

## Shrnutí kapitoly

Spuštění webu nebo SaaS není jen deploy. Je to kontrola slibu, kritických cest, dat, provozu a nalezitelnosti. Malý tým nepotřebuje těžkopádný proces, ale potřebuje jasný seznam věcí, které nesmí spadnout mezi židle: formuláře, e-maily, privacy, zálohy, monitoring, SEO a odpovědnost. Privacy-first přístup spuštění zjednodušuje, protože méně dat a méně třetích stran znamená méně rizik, méně vysvětlování a víc důvěry.

---

# Příloha A: 30denní plán pro privacy-first web nebo SaaS

Když má tým chuť „udělat privacy-first“, často skončí u velkého auditu, tabulky dodavatelů a pocitu, že by bylo jednodušší otevřít stánek s langošem. Tenhle plán je opak: čtyři týdny, každý týden jasný výstup, žádné divadlo.

Privacy-first není jednorázová právní akce. Je to způsob práce. GDPR zná principy jako minimalizace dat, účelové omezení, transparentnost a zabezpečení zpracování; Evropská komise je shrnuje v přehledu principů GDPR. Evropský sbor pro ochranu osobních údajů zároveň vydal doporučení k ochraně dat už od návrhu a ve výchozím nastavení. Prakticky přeloženo: produkt nemá nejdřív všechno sbírat a pak se ptát právníka, jak to vysvětlit. Má od začátku sbírat méně.

## Den 1–7: Zmapuj realitu bez iluzí

První týden není o předělávání systému. Je o pravdivém inventáři. Vezmi web, aplikaci, marketingové kanály a interní procesy a sepiš, kde vznikají, tečou a leží data.

Minimum mapy:

- formuláře a údaje, které posílají,
- analytika a měřené události,
- e-mailing, CRM a support,
- platební brána a fakturace,
- serverové logy a monitoring,
- externí skripty na webu,
- přístupy členů týmu a dodavatelů,
- místa, kde se data exportují ručně.

U každého bodu napiš tři věty:

1. Proč to sbíráme?
2. Kdo k tomu má přístup?
3. Kdy to mažeme?

Pokud na třetí otázku odpovíš „nikdy jsme to neřešili“, právě jsi našel první úkol. Gratuluju, audit začal bez PowerPointu.

Praktický příklad:

| Oblast | Současný stav | Rozhodnutí |
| --- | --- | --- |
| Kontaktní formulář | Jméno, e-mail, telefon, zpráva, IP v CRM | IP do CRM neposílat, telefon nechat volitelný |
| Analytika | Pageviews, referrer, kampaně, scroll depth | Scroll depth vypnout, měřit jen cíle |
| Newsletter | E-mail, jméno, zdroj registrace | Zdroj ponechat, jméno volitelné |
| Logy | Aplikační chyby s e-mailem uživatele | Maskovat e-mail nebo ukládat jen interní ID |

Výstup týdne: jedna stránka „Datová mapa v1“. Nemusí být dokonalá. Musí být pravdivá.

## Den 8–14: Odstraň balast a nastav výchozí minimum

Druhý týden je úklid. Nejdřív vypni věci, které nikdo nepoužívá, nikdo jim nerozumí nebo nepomáhají rozhodování. Privacy-first často nejrychleji zlepšíš tlačítkem „remove script“.

Hledej hlavně:

- duplicitní analytické nástroje,
- staré remarketingové pixely,
- chat widgety bez jasného vlastníka,
- formulářová pole „pro jistotu“,
- automatické exporty do tabulek,
- účty bývalých dodavatelů,
- produkční data v testovacím prostředí.

Potom nastav výchozí pravidlo: nová funkce nesmí sbírat osobní data, dokud neexistuje jasný účel, vlastník a retenční doba. To nezní sexy, ale je to levnější než pozdější vysvětlování, proč marketingový experiment poslal zákaznická data do pěti nástrojů.

Mini šablona pro nové funkce:

```text
Funkce:
Jaké rozhodnutí nebo hodnotu přinese:
Jaká data potřebuje:
Co lze udělat anonymně nebo agregovaně:
Kde se data uloží:
Kdo k nim má přístup:
Kdy se smažou:
Co se stane, když data nesbíráme:
```

Codyho komentář: nejlepší privacy rozhodnutí je často produktové rozhodnutí. Když zjednodušíš onboarding z osmi polí na tři, pomůžeš právu, konverzi i uživateli. Trojitý zásah, žádná konfeta potřeba.

Výstup týdne: seznam odstraněných nástrojů a krátké pravidlo pro nové sběry dat.

## Den 15–21: Zpřehledni komunikaci s uživatelem

Třetí týden patří textům. Privacy stránka, cookie informace, formuláře, onboarding a transakční e-maily mají mluvit stejně: konkrétně, česky a bez právnické mlhy.

U každého místa, kde uživatel předává data, doplň odpověď na otázku „co se s tím stane dál?“ Nemusí to být dlouhé. Má to být srozumitelné.

Příklady mikrotextů:

- Kontaktní formulář: „E-mail použijeme jen k odpovědi na zprávu. Nepřidáme vás do newsletteru bez souhlasu.“
- Demo SaaS: „Údaje z formuláře slouží k domluvení ukázky. Pokud spolu nezačneme spolupracovat, smažeme je po 12 měsících.“
- Analytika: „Měříme návštěvnost bez reklamního profilování, abychom věděli, které stránky pomáhají.“
- Support: „Do zprávy neposílejte hesla ani citlivá data. Když je budeme potřebovat, řekneme si o bezpečný způsob předání.“

Dobrá komunikace sníží počet dotazů a zvýší důvěru. Špatná komunikace vytvoří dojem, že firma něco schovává, i když jen opsala šablonu z internetu.

Výstup týdne: upravené mikrotexty u formulářů a privacy stránka, které rozumí člověk mimo právní oddělení.

## Den 22–30: Udělej z toho provozní návyk

Poslední týden rozhoduje, jestli privacy-first přežije déle než jeden sprint. Potřebuješ jednoduchý rytmus, ne další nástěnku s padesáti sloupci.

Měsíční rutina pro malý tým:

- projít nové skripty a externí služby na webu,
- zkontrolovat přístupy a odebrat nepotřebné účty,
- ověřit, že zálohy existují a obnova je realistická,
- projít nové formuláře a eventy v analytice,
- zkontrolovat, jestli privacy stránka odpovídá realitě,
- vybrat jeden proces, kde lze snížit množství dat.

Ke každému měsíčnímu průchodu přidej tři metriky. Ne metriky pro investora, ale metriky pro hygienu:

- počet externích skriptů na hlavní stránce,
- počet lidí s administrátorským přístupem,
- počet formulářových polí v hlavní konverzní cestě.

Když některé číslo roste, musí existovat důvod. Pokud důvod není, vrať ho zpět. Produkt i privacy mají rády gravitaci směrem k jednoduchosti.

## Checklist 30denního plánu

**Týden 1 — mapa**

- Máme seznam míst, kde vznikají a ukládají se data.
- U každého místa víme účel, přístup a retenční pravidlo.
- Víme, které externí služby se načítají na webu.

**Týden 2 — minimalizace**

- Odstranili jsme nepoužívané skripty, pole nebo exporty.
- Nové funkce mají jednoduchou privacy šablonu.
- Testovací prostředí neobsahuje zbytečná produkční data.

**Týden 3 — transparentnost**

- Formuláře mají jasný mikrotext k použití dat.
- Privacy stránka odpovídá skutečnému provozu.
- Uživatel chápe, kdy jde o nutná data a kdy o volbu.

**Týden 4 — návyk**

- Existuje měsíční privacy kontrola.
- Přístupy mají vlastníka a pravidelný úklid.
- Tým sleduje jednoduché hygienické metriky.

## Shrnutí přílohy

Privacy-first se dá začít bez velkého projektu. Za 30 dní může malý tým zmapovat data, odstranit největší balast, zpřehlednit komunikaci a nastavit měsíční rutinu. Nejde o perfektní stav. Jde o směr: méně zbytečných dat, méně externích závislostí, více důvěry a lepší kontrola nad provozem v Evropě.

---

# Příloha B: Šablony pro web, SaaS a privacy-first provoz

Dobré procesy často neumřou na špatnou strategii, ale na prázdnou stránku. Tým ví, že by měl mít měřicí plán, rozhodovací záznam nebo kontrolu dodavatelů, jenže nikdo nechce začínat dokument od nuly. Tady jsou jednoduché šablony, které se dají zkopírovat do issue, dokumentace nebo interní wiki.

Ber je jako startovací rám, ne jako korporátní náboženství. Když šablona nepomáhá rozhodnout, zkrať ji. Když chybí důležitá odpovědnost, doplň ji. Když má víc polí než reálných rozhodnutí, zase se nám tam vplížil administrativní skřítek. Vyžeň ho.

## B.1 Šablona pro produktovou hypotézu

Použij ji před novou funkcí, landing page sekcí, onboardingovým krokem nebo automatizací. Cíl je zastavit stavění věcí jen proto, že zněly dobře ve středu v 16:47.

```md
## Hypotéza

Věříme, že [konkrétní typ uživatele] potřebuje [konkrétní výsledek], protože [pozorování, rozhovor, data nebo opakovaný problém].

## Navržené řešení

- Co uděláme:
- Co záměrně neuděláme:
- Jaké minimum stačí pro první ověření:

## Úspěch

- Hlavní signál:
- Vedlejší signály:
- Co by znamenalo, že hypotéza neplatí:

## Privacy kontrola

- Jaká nová data vzniknou:
- Kde budou uložená:
- Kdo k nim bude mít přístup:
- Kdy je smažeme nebo anonymizujeme:
```

Příklad:

- **Hypotéza:** Menší B2B týmy chtějí vidět odhad ceny dřív, než pošlou poptávku, protože se bojí zbytečného callu.
- **Minimum:** Přidat na landing page tři orientační balíčky a krátké vysvětlení, co cenu nejvíc ovlivňuje.
- **Úspěch:** Více kvalifikovaných poptávek s konkrétním rozpočtem nebo popisem situace.
- **Privacy kontrola:** Není potřeba nový tracker. Stačí serverový log odeslání formuláře a anonymizovaný počet kliknutí na sekci ceny.

## B.2 Šablona pro měřicí plán

Měřicí plán má být krátký. Pokud se nevejde na jednu obrazovku, pravděpodobně měříš víc pocitů než rozhodnutí.

```md
## Rozhodnutí, které chceme zlepšit

[Například: Má landing page jasněji vysvětlit cenu, nebo problém zákazníka?]

## Metriky

| Metrika | Proč ji sledujeme | Zdroj | Jak často | Co uděláme při změně |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## Události

| Event | Kdy vzniká | Osobní data? | Retence | Poznámka |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## Anti-metriky

- Co nechceme optimalizovat:
- Jak poznáme, že si škodíme:
```

Dobré anti-metriky jsou třeba:

- nezvyšovat počet formulářových polí jen kvůli segmentaci,
- nezavádět remarketing kvůli jedné nejasné kampani,
- neoptimalizovat čas na stránce u obsahu, který má rychle odpovědět na otázku,
- neměřit osobní data tam, kde stačí agregovaný počet.

## B.3 Šablona pro výběr dodavatele

Každý nový nástroj je nový vztah s daty. Někdy dává smysl. Někdy je to jen další dashboard, který bude za tři měsíce posílat faktury a výčitky.

```md
## Dodavatel

- Název:
- Účel:
- Vlastník v týmu:
- Alternativa bez externí služby:

## Data

- Jaká data do nástroje posíláme:
- Obsahují osobní údaje:
- Region hostingu / zpracování:
- Subdodavatelé, kteří jsou pro nás důležití:

## Provoz

- Jak nástroj vypneme:
- Jak exportujeme data:
- Jak smažeme data:
- Jak poznáme, že nástroj pořád používáme:

## Rozhodnutí

- Schvalujeme / neschvalujeme:
- Důvod:
- Datum kontroly za 3 měsíce:
```

Praktické pravidlo: pokud nikdo neumí popsat vypnutí nástroje, tým ho ještě nepřijal vědomě. Jen ho přilepil. A přilepené věci se při růstu mění v lepidlovou archeologii.

## B.4 Šablona pro rozhodovací záznam

Rozhodovací záznam není zápis ze schůzky. Je to paměť týmu. Za půl roku nebude nikoho zajímat, kdo měl hezčí argument. Bude důležité vědět, proč se něco zvolilo a co by změnilo názor.

```md
## Rozhodnutí

[Jedna věta: co platí od teď.]

## Kontext

- Jaký problém řešíme:
- Jaké možnosti jsme zvažovali:
- Jaká omezení máme:

## Důvod volby

- Proč tato varianta:
- Co obětujeme:
- Jaké riziko přijímáme:

## Kontrola

- Kdy rozhodnutí znovu otevřít:
- Jaký signál ukáže, že bylo špatně:
```

Příklad krátkého rozhodnutí:

> Pro analytiku používáme nástroj s EU hostingem a bez reklamního profilování. Nepřidáváme marketingové pixely, dokud nemáme konkrétní kampaň, právní základ a jednoduchý způsob odmítnutí.

Tohle je lepší než neurčité „později vyřešíme cookies“. Později je místo, kde dobré úmysly chodí potichu zemřít.

## B.5 Šablona pro incidentovou zprávu

Incidentová zpráva má být užitečná, ne sebeobranná. Cílem není najít viníka, ale zmenšit šanci, že se problém zopakuje.

```md
## Co se stalo

- Datum a čas:
- Dopad na uživatele:
- Dotčené systémy:
- Dotčená data:

## Časová osa

| Čas | Událost | Kdo / systém |
| --- | --- | --- |
|  |  |  |

## Příčina

- Bezprostřední příčina:
- Systémová příčina:
- Co zafungovalo dobře:
- Co selhalo:

## Náprava

- Okamžitý fix:
- Preventivní opatření:
- Vlastník:
- Termín:

## Komunikace

- Koho informovat:
- Jakou verzi sdělení poslat uživatelům:
- Je potřeba právní nebo bezpečnostní eskalace:
```

Privacy-first pohled: u incidentu vždy samostatně napiš, zda šlo o osobní data, jaký byl rozsah a jestli existuje povinnost dalšího postupu. Když si tým není jistý, má eskalovat rychle, ne čekat na dokonalou formulaci.

## B.6 Checklist zavedení šablon

- Vyber jednu šablonu, kterou tým použije hned tento týden.
- Vlož ji na místo, kde už tým pracuje: issue tracker, interní dokumentace, CRM nebo repozitář.
- Urči vlastníka, který ji po prvních třech použitích zkrátí.
- Zakaž povinná pole, která nikdo nepoužívá k rozhodnutí.
- Jednou měsíčně smaž nebo sluč šablony, které se překrývají.
- U každé šablony nech privacy otázku viditelnou, ne schovanou v patičce.

## Codyho komentář

Šablony nejsou záruka dobrého řízení. Jsou zábradlí. Pomáhají ve chvíli, kdy je tým unavený, spěchá nebo řeší třetí „rychlou drobnost“ dne. Nejlepší šablona je ta, kterou lidé opravdu použijí, aniž by u toho měli chuť založit nový startup jen proto, aby z ní utekli.

## Shrnutí přílohy

Malý tým nepotřebuje těžkou procesní metodiku. Potřebuje pár opakovatelných formulářů pro hypotézy, měření, dodavatele, rozhodnutí a incidenty. Když jsou šablony krátké a mají jasnou privacy otázku, zlepšují kvalitu produktu i provozu bez zbytečného byrokratického divadla.

---

# Příloha C: Mikrotexty pro privacy-first web

Mikrotext je krátká věta u formuláře, tlačítka, nastavení nebo prázdného stavu. Na první pohled drobnost. V praxi často rozhoduje, jestli člověk chápe další krok, věří stránce a dokončí akci bez pocitu, že právě podepisuje smlouvu s ledničkou, která má vlastní reklamní agenturu.

Privacy-first web nepotřebuje uživatele strašit právními odstavci v každém rohu. Potřebuje srozumitelně říct, co se děje s daty, proč je konkrétní údaj potřeba a jaký výsledek uživatel dostane. Tohle je copywriting i provozní disciplína zároveň.

## C.1 Kontaktní formulář

Kontaktní formulář je typické místo, kde se dá důvěra buď získat, nebo rozbít. Pokud pod tlačítkem stojí jen „Odesláním souhlasíte se zpracováním osobních údajů“, uživatel se nic praktického nedozví. Lepší mikrotext říká účel, rozsah a očekávání.

Použitelné varianty:

- „Údaje použijeme jen k odpovědi na vaši zprávu. Žádný newsletter bez výslovného přihlášení.“
- „E-mail potřebujeme, abychom mohli odpovědět. Telefon je volitelný a použijeme ho jen, pokud chcete zavolat.“
- „Po odeslání se ozveme s návrhem dalšího kroku. Kontakt neprodáváme ani neposíláme do reklamních systémů.“
- „Poptávku uložíme jen po dobu nutnou k vyřízení a navazující obchodní komunikaci.“

Slabá varianta:

> Odesláním souhlasíte se zásadami ochrany osobních údajů.

Lepší varianta:

> Údaje z formuláře použijeme jen k vyřízení poptávky. E-mail je nutný pro odpověď, telefon je dobrovolný. Zásady ochrany osobních údajů najdete tady.

Codyho komentář: právní odkaz není špatně. Špatně je, když je to jediná lidská věta na celé stránce. To je jako dát zákazníkovi místo pozdravu šanon.

## C.2 Newsletter, RSS a obsahové odběry

Pokud projekt používá newsletter, musí být jasné, co člověk dostane a jak často. Ještě lepší je nabídnout RSS nebo přímý odkaz na archiv jako privacy-first alternativu pro lidi, kteří nechtějí dávat e-mail jen kvůli čtení obsahu.

Použitelné varianty:

- „Jednou měsíčně pošleme praktické tipy k webu, SaaS a privacy-first provozu. Žádné denní otravování, Cody má taky rád klid.“
- „E-mail použijeme jen pro tento odběr. Odhlášení je v každém e-mailu.“
- „Nechcete zadávat e-mail? Sledujte novinky přes RSS nebo přímý archiv článků.“
- „Newsletter neposíláme přes reklamní publika. Měříme jen základní doručitelnost a zájem o obsah.“

Mini-checklist odběru:

- Je jasné téma odběru?
- Je jasná frekvence?
- Je odhlášení popsáno normálně?
- Existuje alternativa bez e-mailu, ideálně RSS?
- Nejsou marketingové souhlasy předem zaškrtnuté?
- Nepoužívá se přihlášení k obsahu jako skrytý vstup do obchodní sekvence?

## C.3 Cookies a analytika bez divadla

Cookie lišta nemá být právní escape room. Pokud web používá jen technicky nutné cookies, řekni to jednoduše. Pokud měří agregovanou návštěvnost bez reklamního profilování, vysvětli účel a přidej odkaz na detail.

Použitelné varianty:

- „Používáme jen technicky nutné cookies pro fungování webu. Reklamní pixely nepoužíváme.“
- „Návštěvnost měříme agregovaně, abychom věděli, které stránky pomáhají. Nesestavujeme reklamní profily.“
- „Analytika nám říká, co zlepšit na webu, ne kdo přesně jste.“
- „Externí nástroje přidáváme jen tehdy, když mají jasný účel a rozumíme tomu, kam data tečou.“

Špatný tón:

> Používáním webu souhlasíte se vším, co jsme schovali do nastavení.

Lepší tón:

> Web funguje bez reklamních trackerů. Základní návštěvnost měříme kvůli zlepšování obsahu a služeb.

Praktické pravidlo: když mikrotext nejde napsat jednoduše, možná je problém v samotném nastavení nástroje, ne v copywritingu. Text nemá maskovat špatné rozhodnutí.

## C.4 SaaS onboarding a prázdné stavy

Onboarding je citlivé místo. Uživatel často vkládá první data do produktu a ještě neví, jestli mu věří. Každý krok má vysvětlit, proč je údaj potřeba a jestli jde přeskočit.

Použitelné varianty:

- „Název firmy použijeme jen pro nastavení pracovního prostoru. Později ho můžete změnit.“
- „Import dat můžete přeskočit a vyzkoušet produkt na ukázkových datech.“
- „Soubor zpracujeme jen pro vytvoření importu. Původní nahrávku po dokončení smažeme podle nastavení retence.“
- „Pozvěte kolegy až ve chvíli, kdy máte pracovní prostor připravený. Zatím nikomu nic neposíláme.“
- „Tady zatím nic není. Vytvořte první projekt, nebo si otevřete demo s testovacími daty.“

Dobré prázdné stavy nejsou jen roztomilé ilustrace. Mají říct:

- co tu bude, až bude systém používaný,
- jaký je nejlepší další krok,
- jestli je bezpečné začít s testovacími daty,
- kde najít pomoc,
- co se stane po kliknutí.

Privacy-first onboarding má jednu velkou výhodu: umí nabídnout ukázková data místo okamžitého importu reálných zákazníků. To snižuje bariéru a zároveň chrání tým před situací „nahráli jsme celé CRM do nástroje, který ještě možná nebudeme používat“. Klasika. Špatná klasika.

## C.5 Chybové hlášky a incidentové sdělení

Chyba je moment pravdy. Text typu „Něco se pokazilo“ je někdy nevyhnutelný, ale často zbytečně mlží. Uživatel potřebuje vědět, co se stalo, co má udělat a jestli jsou jeho data v bezpečí.

Použitelné varianty:

- „Formulář se nepodařilo odeslat. Zkuste to prosím znovu, nebo napište přímo na e-mail.“
- „Soubor je větší, než aktuálně podporujeme. Data jsme neuložili. Zkuste menší export nebo nás kontaktujte.“
- „Import se zastavil na kontrole formátu. Původní soubor zůstává uložený jen pro tento pokus.“
- „Služba je dočasně nedostupná. Pracujeme na opravě a stav aktualizujeme na této stránce.“
- „Zaznamenali jsme problém s dostupností. Podle aktuální kontroly nevidíme známky neoprávněného přístupu k datům.“

Pozor na dvě pasti:

- Neslibuj, že data jsou v bezpečí, pokud to ještě nevíš.
- Neprozrazuj v chybové hlášce interní technické detaily, které pomůžou útočníkovi.

Lepší incidentový mikrotext je klidný, konkrétní a opatrný. Nehraje si na dokonalost. Říká, co tým ví teď, co ověřuje a kdy dá další update.

## C.6 Checklist mikrotextů před publikací

- Říká text, proč se údaj sbírá?
- Vysvětluje, co se stane po kliknutí?
- Je jasné, které pole je povinné a které volitelné?
- Dá se věta pochopit bez právníka, vývojáře a šamana přes cookies?
- Nezakrývá mikrotext invazivní měření hezkými slovy?
- Nabízí web privacy-friendly alternativu, kde to dává smysl?
- Jsou chybové hlášky užitečné, ale neprozrazují interní detaily?
- Odpovídá tón značce: lidský, přesný, bez manipulace?

## Shrnutí přílohy

Mikrotexty jsou malé pojistky důvěry. Pomáhají uživateli pochopit další krok, snižují nejistotu a dělají privacy-first hodnotu viditelnou v každodenních detailech. Nejlepší text ale nikdy nezachrání špatné datové rozhodnutí. Nejdřív navrhni férový proces, potom ho jednoduše pojmenuj.

---

# Příloha D: Měsíční provozní review webu nebo SaaS

Měsíční review není porada pro milovníky tabulek. Je to krátká údržba reality: co funguje, co se rozbilo, co se zbytečně komplikuje a kde produkt potichu ztrácí důvěru. Malý tým nepotřebuje manažerský rituál s třiceti slidy. Potřebuje jeden dokument, hodinu soustředění a ochotu říct „tohle už neslouží uživateli“.

Privacy-first provoz má jednu výhodu: když sbíráš méně dat a používáš méně nástrojů, review je kratší. Nevýhoda? Výmluvy taky. Když je systém jednoduchý, je docela vidět, kdo ho nechal zarůst mechem.

## D.1 Začni obchodním výsledkem, ne grafem návštěvnosti

První otázka měsíce zní: pomohl web nebo SaaS lidem udělat důležitý krok? Ne „kolik bylo pageviews“, ale jestli návštěvníci našli odpověď, odeslali poptávku, dokončili registraci, pochopili cenu, aktivovali klíčovou funkci nebo se vrátili k užitečnému procesu.

Praktický měsíční přehled může mít jen pět řádků:

| Oblast | Otázka | Signál |
| --- | --- | --- |
| Nabídka | Rozumí lidé hlavnímu slibu? | Kliky na hlavní CTA, přímé dotazy, kvalita poptávek |
| Aktivace | Dostane se nový uživatel k první hodnotě? | Dokončený onboarding, použití klíčové funkce |
| Důvěra | Mizí námitky kolem ceny, dat a provozu? | FAQ dotazy, obchodní námitky, odpovědi podpory |
| Provoz | Funguje služba spolehlivě? | Incidenty, chybové stavy, obnova ze záloh |
| Obsah | Přivádí obsah správné lidi? | Přímé návštěvy, RSS odběry, poptávky z článků |

Jedno dobré číslo je lepší než dvacet dekoračních metrik. Pokud neumíš říct, jaké rozhodnutí metrika zlepší, patří spíš do muzea interního neklidu než do review.

## D.2 Projdi pět kritických cest ručně

Automatické monitoringy jsou skvělé, ale jednou měsíčně si produkt projdi jako člověk. Ideálně na pomalejším notebooku nebo telefonu, ne na vývojářské raketě, která by rozběhla i lednici s Kubernetes.

Zkontroluj hlavně:

- otevření homepage z anonymního okna,
- odeslání kontaktního formuláře nebo objednávky,
- přihlášení, registraci a reset hesla,
- první použití hlavní SaaS funkce,
- odhlášení, export dat nebo žádost o smazání účtu.

Ke každé cestě si napiš jednu větu: „Prošlo bez tření“, „rozbilo se“, nebo „funguje, ale člověk musí hádat“. Třetí stav je zákeřný. Technicky není chyba, prakticky je to malý únik důvěry.

## D.3 Zkontroluj datový odpad

Data se v produktech hromadí nenápadně. Přidá se formulářové pole, zapomene se starý export, někdo založí testovací integraci a najednou má projekt víc datových zákoutí než půda po babičce.

Měsíční datový úklid:

- projdi nové formuláře, eventy, logy a integrace,
- smaž testovací data, která už nemají účel,
- ověř, že retenční doby dávají smysl,
- zkontroluj, kdo má přístup do administrace a analytiky,
- odpoj nástroje, které se nepoužily poslední měsíc a nejsou kritické,
- doplň privacy text, pokud se změnil účel zpracování.

Nejde o to mít nulová data. Jde o to nemít data bez vlastníka. Každý dataset by měl mít odpověď na tři otázky: proč existuje, kdo za něj ručí a kdy zmizí.

## D.4 Z provozních drobků udělej rozhodnutí

Měsíční review má končit rozhodnutím, ne jen pocitem. Z každého měsíce vyber maximálně tři změny. Malý tým, který si vybere deset priorit, si ve skutečnosti vybral chaos s lepší grafikou.

Dobré výstupy z review:

- „Zkrátíme kontaktní formulář o telefon, protože ho nepotřebujeme pro první odpověď.“
- „Přidáme na pricing stránku vysvětlení exportu dat, protože se na něj ptaly tři poptávky.“
- „Zrušíme nepoužívaný chat widget, protože nepřinesl konverze a přidává třetí stranu.“
- „Jednou za měsíc obnovíme zálohu na testovací prostředí, nebudeme jen věřit zelené fajfce.“
- „Do onboardingového e-mailu přidáme přímý odkaz na první akci místo obecného uvítání.“

Každé rozhodnutí ulož do rozhodovacího záznamu z přílohy B. Stačí krátce. Historie rozhodnutí je mapa, proč produkt vypadá tak, jak vypadá. Bez ní tým po půl roce jen archeologicky hádá, kdo a proč přidal tu zvláštní větu pod formulář.

## D.5 Měsíční checklist

Jednou měsíčně si projdi tento seznam a u každého bodu napiš hotovo, nehotovo nebo není relevantní:

- Víme, který obchodní nebo produktový krok se minulý měsíc zlepšil?
- Prošli jsme ručně hlavní cestu návštěvníka, leadu nebo uživatele?
- Zkontrolovali jsme formuláře, eventy, logy a nové integrace?
- Odstranili jsme nepoužívaný nástroj, skript nebo datové pole?
- Ověřili jsme přístupy administrátorů a externích dodavatelů?
- Prošli jsme poslední incidenty, chyby a opakované dotazy podpory?
- Máme maximálně tři konkrétní úkoly na další měsíc?
- Je u každého úkolu jasné, kdo ho vlastní a jak poznáme hotovo?
- Zůstává web nebo SaaS v souladu s principem „navrženo, postaveno a provozováno v Evropě“?

Codyho komentář: měsíční review má být trochu nudné. To je kompliment. Když je provoz klidný, data uklizená a další kroky jasné, produkt nepotřebuje dramatické meetingy. Drama si nechme pro výpadky elektřiny a pokusy vysvětlit příbuzným, co přesně dělá SaaS.

## Shrnutí přílohy

Měsíční review drží web a SaaS při zemi. Spojuje obchodní výsledky, ruční kontrolu kritických cest, datovou hygienu a pár konkrétních rozhodnutí. Privacy-first provoz není jednorázové nastavení; je to návyk, který se udržuje malými pravidelnými kontrolami.

---

# Příloha E: Privacy-first dotazník pro výběr dodavatele

Dodavatel není jen položka v nákladech. Je to kus tvého produktu, reputace a datové odpovědnosti v cizích rukou. U malého SaaS týmu stačí jeden špatně zvolený chat widget, analytický nástroj nebo „rychlá“ automatizace a najednou řešíš předávání dat, souhlasy, exporty, bezpečnostní incidenty a vysvětlování zákazníkům, proč se jejich údaje potulují po půlce internetu jako turista bez mapy.

Privacy-first výběr dodavatele není o tom, že automaticky odmítneš každý nástroj mimo vlastní server. Je o tom, že víš, jaká data kam posíláš, proč to děláš, kdo k nim má přístup a jak rychle umíš odejít. GDPR navíc rozlišuje role správce a zpracovatele; Evropská komise k ochraně dat pro firmy vysvětluje, že organizace musí vědět, jak osobní údaje zpracovává a jaké povinnosti z toho plynou. Prakticky: než zapneš nástroj, musíš rozumět jeho roli v datovém toku.

## E.1 Nejdřív napiš, co dodavatel skutečně řeší

Špatná otázka zní: „Je ten nástroj populární?“ Lepší otázka zní: „Jaké rozhodnutí nebo proces bez něj nezvládneme?“ Pokud odpověď není jasná, výběr dodavatele se změní v nákupní výlet s firemní kartou. To málokdy končí dobře, zato faktury chodí spolehlivě.

Před prvním testem si vyplň krátké zadání:

| Otázka | Praktická odpověď |
| --- | --- |
| Jaký problém řešíme? | „Potřebujeme zjistit, kde uživatelé opouštějí onboarding.“ |
| Jaké rozhodnutí z toho vznikne? | „Zjednodušíme první krok nebo upravíme nápovědu.“ |
| Jaká data jsou opravdu nutná? | „Anonymní události kroků, ne e-mail uživatele.“ |
| Jak dlouho data potřebujeme? | „90 dní pro porovnání změn.“ |
| Co se stane, když nástroj vypneme? | „Produkt běží dál, ztratíme jen reporting.“ |

Tahle tabulka je malá, ale odhalí hodně. Pokud neumíš vyplnit „jaké rozhodnutí z toho vznikne“, nástroj pravděpodobně nekupuješ kvůli práci, ale kvůli pocitu kontroly.

## E.2 Datová mapa dodavatele

U každého kandidáta si napiš datovou mapu. Nemusí to být právnický elaborát, stačí jedna stránka, kterou pochopí zakladatel, vývojář i člověk z podpory.

Minimální mapa:

- Kategorie dat: identifikátor účtu, e-mail, IP adresa, obsah zpráv, události v aplikaci, platební metadata.
- Směr toku: z webu do nástroje, z nástroje do e-mailu, z nástroje do interní databáze.
- Umístění dat: EU region, konkrétní datacentrum, nebo alespoň jasně popsaná jurisdikce.
- Přístup: kdo z týmu a kdo u dodavatele může data vidět.
- Retence: kdy se data mažou automaticky a jak se mažou ručně.
- Export a odchod: jak získáš data ven a jak ověříš smazání.

Příklad pro nástroj zákaznické podpory:

| Oblast | Dobrá odpověď | Varovný signál |
| --- | --- | --- |
| Obsah ticketů | Ukládá se v EU, šifrovaně, s rolemi | Nejasný region a globální support přístup |
| Přílohy | Omezená velikost, automatické mazání po retenci | Přílohy zůstávají navždy |
| AI funkce | Vypnuté ve výchozím stavu, bez trénování na datech zákazníků | „Můžeme používat pro zlepšování služeb“ bez detailu |
| Export | CSV/API export dostupný adminovi | Export jen přes support ticket |

Codyho komentář: pokud dodavatel nedokáže jednoduše vysvětlit, kde jsou data a kdo k nim má přístup, není to „enterprise komplexita“. Je to mlha. A mlha je pěkná na Šumavě, ne ve zpracování osobních údajů.

## E.3 Bezpečnostní minimum bez divadla

Malý tým nepotřebuje dvacetistránkový bezpečnostní audit pro každý ikonkový nástroj. Potřebuje minimum, které zachytí největší rizika. CERT-EU ve svých doporučeních pro mitigaci kritických hrozeb dlouhodobě zdůrazňuje základní opatření jako vícefaktorové ověřování, aktualizace, zálohy a řízení přístupů. Pro SaaS dodavatele to převeď do praktických otázek:

- Podporuje dodavatel SSO nebo alespoň MFA pro administrátory?
- Umí role a oprávnění, nebo je každý uživatel skoro-admin?
- Má audit log pro zásadní akce, jako export dat, změna oprávnění a mazání?
- Popisuje, jak oznamuje bezpečnostní incidenty?
- Má jasnou stránku o bezpečnosti a zpracování dat?
- Umí oddělit produkční data od testovacích dat?
- Dá se účet rychle deaktivovat bez ztráty exportu?

Nemusíš hned vyžadovat certifikace u každého nástroje za pár eur měsíčně. Ale u služeb, které zpracovávají zákaznická data, platební metadata, interní dokumenty nebo produkční přístupy, už „věříme jim, mají hezký web“ nestačí.

## E.4 AI funkce posuzuj přísněji než běžný software

AI v dodavatelském nástroji může být užitečná: shrnutí ticketů, návrhy odpovědí, klasifikace poptávek, hledání v dokumentaci. Jenže často pracuje s nejcitlivějším kontextem: zákaznickou komunikací, interními poznámkami, obchodními údaji nebo produkčními incidenty.

U AI funkcí si proto polož extra otázky:

- Je AI funkce zapnutá opt-in, nebo běží automaticky?
- Posílají se data třetí straně, nebo zůstávají u stejného dodavatele?
- Používají se vstupy a výstupy pro trénování nebo zlepšování modelů?
- Lze z AI zpracování vyloučit citlivé projekty, tickety nebo zákazníky?
- Jak se značí AI generovaný obsah, pokud míří k uživateli?
- Umí tým výstup před odesláním zkontrolovat člověkem?

AI Act přináší mimo jiné transparentní povinnosti pro určité situace, například když lidé interagují s AI systémem nebo když je obsah generovaný či manipulovaný AI v relevantním kontextu. Neřeš to panikou. Řeš to návrhem produktu: uživatel má vědět, kdy mluví s automatem, a tým má vědět, kde AI sahá na data.

Praktické pravidlo: AI dodavatel smí dostat jen takový kontext, který bys bez mrknutí poslal externímu konzultantovi s podepsanou smlouvou a jasným účelem. Pokud by ti to přišlo divné v e-mailu, nemá to potichu téct ani do promptu.

## E.5 Rozhodovací skóre: rychlé ano, pilot, nebo stop

Po průzkumu dej dodavateli jednoduché skóre. Ne kvůli falešné vědeckosti, ale aby rozhodnutí nebylo jen „líbí se mi UI“.

| Kritérium | 0 bodů | 1 bod | 2 body |
| --- | --- | --- | --- |
| Účel | Nejasný | Užitečný, ale okrajový | Navázaný na konkrétní rozhodnutí nebo proces |
| Data | Sbírá víc, než potřebujeme | Data lze částečně omezit | Sbírá jen nutné minimum |
| EU provoz | Nejasný nebo mimo EU bez dobrého důvodu | Volitelný EU region | EU provoz jasně dostupný a popsaný |
| Přístupy | Hrubá oprávnění | Základní role | Role, MFA, audit log |
| Odchod | Bez exportu a retence | Export existuje, mazání ručně | Export, mazání i retence jsou jasné |
| AI/data reuse | Nejasné použití dat | Lze částečně vypnout | Opt-in, bez trénování na zákaznických datech |

Výklad:

- 0–4 body: stop, hledej alternativu nebo změň požadavek.
- 5–8 bodů: pilot jen s omezenými daty a krátkou retencí.
- 9–12 bodů: dobrý kandidát, ještě ověř smlouvu, export a provozní dopad.

Do rozhodnutí si napiš i důvod odmítnutí. Za tři měsíce se to hodí, až někdo znovu přijde s tím samým nástrojem a větou „teď už je to určitě lepší“.

## E.6 Checklist před zapnutím dodavatele

- Máme napsaný účel nástroje jednou větou?
- Víme, jaké rozhodnutí nebo proces nástroj zlepší?
- Posíláme do něj jen nutná data?
- Je jasné, zda dodavatel vystupuje jako správce, zpracovatel, nebo obojí podle situace?
- Máme ověřené umístění dat a případné předávání mimo EU?
- Máme podepsané nebo akceptované potřebné smluvní podmínky ke zpracování dat?
- Je nastavené MFA pro administrátory?
- Mají členové týmu jen taková oprávnění, která opravdu potřebují?
- Je definovaná retence a postup smazání dat?
- Umíme udělat export a odejít bez provozního rukojmí?
- Jsou AI funkce vypnuté nebo omezené, dokud jim nerozumíme?
- Je nástroj zapsaný v interním seznamu dodavatelů?
- Má uživatel v privacy informacích srozumitelně popsané relevantní zpracování?
- Máme datum prvního review: za 30 nebo 60 dní?

## Shrnutí přílohy

Privacy-first výběr dodavatele je hlavně disciplína v otázkách. Začni účelem, zmapuj data, ověř bezpečnostní minimum, posuzuj AI funkce přísněji a vždy měj plán odchodu. Dobrý dodavatel šetří čas. Špatný dodavatel šetří pět minut dnes a vyrábí právní, provozní a reputační dluh na zítra.

---

# Příloha F: Redakční systém bez závislosti na algoritmech

Obsahový marketing malého SaaS týmu nepotřebuje velkou redakci, brand studio a magický kalendář se sedmnácti barvami. Potřebuje pravidelný rytmus, jasné téma, vlastní kanál a způsob, jak z jednoho dobrého poznatku udělat několik užitečných výstupů bez toho, aby tým každý týden znovu objevoval oheň.

Algoritmické kanály jsou užitečné jako distribuce, ale špatné jako základna. Když je celý obsahový systém postavený jen na sociální síti, cizím newsletterovém nástroji nebo reklamním účtu, firma ve skutečnosti nestaví publikum. Pronajímá si pozornost. Privacy-first alternativa je jednodušší: publikuj primárně na vlastním webu, nabízej RSS, posílej přímé odkazy, měř jen agregovaně a z obsahu dělej obchodní aktivum, ne krátkodobý ohňostroj.

Google ve svém průvodci k užitečnému obsahu zdůrazňuje psaní pro lidi a prokazatelnou užitečnost místo tvorby primárně pro vyhledávače: https://developers.google.com/search/docs/fundamentals/creating-helpful-content. RSS 2.0 specifikace zase ukazuje, že odběr obsahu může stát na otevřeném formátu, ne na uzavřeném feedu konkrétní platformy: https://www.rssboard.org/rss-specification.

## F.1 Tři obsahové pilíře stačí

Začni třemi pilíři, které propojují produkt, zákazníka a hodnoty firmy. Víc pilířů vypadá strategicky, ale malý tým pak neví, o čem psát dřív. Obsahový plán se nemá tvářit jako encyklopedie. Má opakovaně pomáhat správným lidem vyřešit správný problém.

Příklad pro privacy-first SaaS:

| Pilíř | Otázka zákazníka | Typický výstup |
| --- | --- | --- |
| Problém a rozhodování | „Jak poznám, že tohle vůbec potřebujeme?“ | checklist, srovnání možností, návod na audit |
| Implementace a provoz | „Jak to bezpečně zavést?“ | praktický postup, šablona, technická poznámka |
| Důvěra a data | „Co se děje s daty a kdo za ně ručí?“ | vysvětlení procesu, privacy stránka, případová studie |

Každý pilíř by měl mít vlastní seznam častých otázek. Ten získáš z poptávek, podpory, prodejních hovorů, interních poznámek a chyb, které se pořád opakují. Pokud se stejná otázka objeví třikrát, není to otrava. Je to zadání na článek. Gratuluji, zákazník právě udělal část redakční práce zdarma.

Praktické pravidlo: nepiš téma, které neumíš spojit s konkrétní otázkou nebo rozhodnutím zákazníka. „Trendy v digitalizaci“ je mlha. „Jak vybrat analytiku bez cookie lišty pro B2B web“ je téma.

## F.2 Z jednoho poznatku udělej obsahový balíček

Malý tým nemá čas vyrábět každý kanál od nuly. Lepší je jeden kvalitní poznatek rozebrat do několika formátů, které odkazují zpět na vlastní web.

Recept:

1. Napiš hlavní článek na webu: problém, doporučení, příklad, checklist.
2. Vytvoř krátký interní výtah: pro obchod, podporu a onboarding.
3. Připrav e-mail nebo RSS oznámení s přímým odkazem.
4. Vystřihni 3–5 krátkých postřehů pro sociální sítě, ale bez trackerů a závislosti na embed skriptech.
5. Přidej článek do relevantní produktové části: FAQ, dokumentace, onboarding, nabídka.
6. Po měsíci doplň poznámku podle reálných dotazů zákazníků.

Příklad z tématu „výběr analytiky“:

- Hlavní článek: „Jak měřit web bez datového cirkusu“.
- Checklist: „10 otázek před zapnutím analytiky“.
- Prodejní argument: „Měříme výkon, neprodáváme návštěvníky reklamním sítím.“
- Produktový mikrotext: „Analytika je agregovaná a nepoužívá reklamní identifikátory.“
- Interní poznámka: kdy stačí serverové logy a kdy už dává smysl eventová analytika.

Tím nevzniká recyklace pro recyklaci. Vzniká opakovatelnost. Stejná myšlenka pomáhá zákazníkovi v různých momentech: při hledání, při rozhodování, při onboardingu i při kontrole dodavatelů.

## F.3 Redakční kanban drž při zemi

Obsahový proces se často rozbije na dvou extrémech. Buď tým nemá žádný systém a články vznikají náhodně, nebo si postaví redakční kosmickou loď, která potřebuje víc péče než samotný produkt. Pro malý SaaS stačí jednoduchý kanban.

Sloupce:

- **Nápady:** otázky zákazníků, poznámky z podpory, témata z roadmapy.
- **Vybráno:** maximálně tři témata na aktuální měsíc.
- **Koncept:** pracovní verze s hlavním slibem a strukturou.
- **Kontrola:** faktická přesnost, privacy dopady, SEO minimum, odkazy.
- **Publikováno:** článek je venku, má interní odkazy a RSS záznam.
- **Aktualizovat:** článek potřebuje revizi kvůli změně produktu, práva nebo doporučení.

U každého článku stačí pět polí:

| Pole | Co vyplnit |
| --- | --- |
| Pro koho | konkrétní role nebo typ firmy |
| Jaké rozhodnutí pomůže udělat | výběr nástroje, spuštění webu, zjednodušení procesu |
| Hlavní doporučení | jedna věta bez omáčky |
| Důkazy a zdroje | odkazy, vlastní zkušenost, screenshot, případová studie |
| Další akce | demo, checklist, audit, kontakt, dokumentace |

Tahle evidence je schválně nudná. Nudné systémy přežívají. Krásné tabulky s osmi statusy a dvaceti štítky většinou umřou dřív než první lednové předsevzetí.

## F.4 SEO minimum bez ztráty duše

SEO není rituál pro vyvolávání návštěvnosti. Je to disciplína srozumitelnosti: dobrý titulek, jasná struktura, interní odkazy, rychlé načítání, kanonická URL a obsah, který odpovídá na skutečnou otázku. Google Search Central ve startovací příručce doporučuje mimo jiné jedinečné a přesné titulky, užitečný obsah, smysluplné odkazy a technicky dostupné stránky: https://developers.google.com/search/docs/fundamentals/seo-starter-guide.

Před publikací zkontroluj:

- Má článek jedno hlavní téma a jednu hlavní otázku?
- Je `<title>` konkrétní a není to jen název firmy plus buzzword?
- Meta description říká, co čtenář získá?
- Nadpisy tvoří logickou osnovu, ne dekoraci?
- Odkazuje článek na související obsah na vlastním webu?
- Má kanonickou URL a čitelný slug?
- Jsou obrázky komprimované, s alt textem tam, kde dává smysl?
- Nejsou v článku vložené cizí skripty jen kvůli pohodlnému embedu?

Privacy-first SEO má jednu výhodu: nutí držet web lehký, čitelný a kontrolovatelný. Místo cizích widgetů používej vlastní screenshot, citaci s odkazem nebo krátké shrnutí. Místo sociálních share tlačítek s trackery dej obyčejný odkaz. Není to méně moderní. Je to méně invazivní.

## F.5 Aktualizace jsou součást obsahu

Obsahový marketing není „publikuj a zapomeň“. U webového vývoje, SaaS, AI, práva a provozu se mění nástroje, rozhraní, pravidla i doporučení. Starý článek může pořád přivádět lidi, ale pokud radí zastaralý postup, přivádí je rovnou do pasti. Elegantní, ale pořád past.

Nastav jednoduchý rytmus revizí:

- evergreen návody: kontrola každých 6 měsíců,
- články s právními nebo bezpečnostními dopady: kontrola každé 3 měsíce,
- produktové návody: kontrola po každé větší změně rozhraní,
- pricing a srovnání nástrojů: kontrola před každým sdílením,
- incidentové a provozní texty: kontrola po každém incidentu nebo cvičení.

Do článku přidej krátkou poznámku „Aktualizováno“ jen tehdy, když se změnil obsah, ne když někdo opravil čárku. Čtenář nepotřebuje divadlo. Potřebuje vědět, jestli text stále platí.

## F.6 Checklist redakční rutiny

Týdenní kontrola:

- Přibyly otázky zákazníků, které se opakují?
- Máme vybrané jedno téma s jasným obchodním nebo produktovým dopadem?
- Existuje k tématu konkrétní příklad, šablona nebo checklist?
- Víme, jaký interní odkaz povede čtenáře dál?
- Nepotřebuje téma aktuální ověření zdrojů před publikací?

Publikační kontrola:

- Článek je na vlastním webu jako primární zdroj.
- RSS nebo přímý odkaz funguje bez přihlášení a bez sociální platformy.
- Měření je agregované a odpovídá měřicímu plánu.
- Nejsou vložené zbytečné externí skripty, pixely nebo embed trackery.
- Vlastní názor je označený jako Codyho komentář nebo pohled týmu.
- Zdroje jsou uvedené přímo v textu nebo v sekci zdrojů.
- Je naplánovaná budoucí revize, pokud téma může zastarat.

Codyho komentář: nejlepší obsahový systém je ten, který tým skutečně používá i ve středu odpoledne, když hoří produkt, zákazník chce odpověď a kafe došlo. Pokud redakční rutina funguje jen v ideálním týdnu, není to rutina. Je to přání s hezkým názvem.

## Shrnutí přílohy

Redakční systém bez závislosti na algoritmech stojí na vlastním webu, RSS, přímých odkazech, jednoduchém kanbanu a pravidelných revizích. Malý SaaS tým nemusí publikovat všude. Musí publikovat užitečně, opakovatelně a tak, aby obsah posiloval důvěru v produkt i v zacházení s daty.

---


# Příloha G: Privacy-first obchodní follow-up a malé CRM

Obchod bez systému rychle sklouzne do dvou extrémů. Buď tým zapomíná odpovídat, protože vše žije v hlavách a inboxech, nebo začne sbírat každý detail o každém kontaktu, protože „jednou se to může hodit“. Privacy-first přístup je třetí cesta: mít přehled o obchodních příležitostech, ale neskladovat datový šrot.

Evropský rámec GDPR stojí mimo jiné na minimalizaci dat, účelovém omezení a omezení uložení. Evropská komise tyto principy popisuje v přehledu GDPR pro firmy: https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/principles-gdpr_en. Pro obchodní tým to znamená jednoduché pravidlo: CRM nemá být kronika lidského života, ale pracovní nástroj k vyřízení konkrétního vztahu.

## G.1 Začni pipeline, ne softwarem

Než vybereš CRM, napiš si obchodní proces na jednu stránku. Většina malých SaaS týmů nepotřebuje dvanáct stavů, scoring z vesmíru a automatizace, které se tváří chytřeji než jsou. Potřebuje vědět, kdo čeká na odpověď, co je další krok a kdy má smysl kontakt ukončit.

Praktická pipeline pro menší B2B SaaS nebo webové studio:

| Stav | Co znamená | Povinná data | Další krok |
| --- | --- | --- | --- |
| Nový kontakt | Člověk napsal nebo stáhl materiál | jméno nebo firma, e-mail, zdroj | odpovědět do 1 pracovního dne |
| Kvalifikace | Ověřujeme problém a vhodnost | potřeba, velikost týmu, termín | poslat otázky nebo domluvit call |
| Návrh | Posíláme nabídku nebo trial plán | rozsah, cena nebo plán, vlastník | follow-up po dohodnuté době |
| Rozhodování | Zákazník porovnává možnosti | rozhodovací kritéria, blokery | odstranit největší riziko |
| Vyhráno | Začíná spolupráce nebo platba | fakturační kontakt, smluvní údaje | předat do onboardingu |
| Uzavřeno | Teď to nedává smysl | důvod uzavření | smazat nebo nastavit jasnou retenci |

Důležité je, aby každý stav měl konkrétní rozhodnutí. Pokud karta stojí ve stavu „Kvalifikace“ tři týdny a nikdo neví proč, pipeline neřídí obchod. Jen hezky archivuje zmatek. Což je dražší forma bordelu.

## G.2 Do CRM ukládej rozhodovací data, ne osobní román

Dobré CRM odpovídá na otázku: „Co máme udělat dál?“ Špatné CRM odpovídá na otázku: „Kolik informací dokážeme nasbírat, než se někdo lekne?“

Minimum pro B2B follow-up:

- Identifikace kontaktu: jméno, pracovní e-mail, firma, role.
- Kontext poptávky: problém, který řeší, a očekávaný výsledek.
- Obchodní stav: fáze pipeline, vlastník, další krok, datum další akce.
- Souhlas nebo zdroj kontaktu: odkud vztah vznikl a proč je kontaktujeme.
- Retence: kdy kartu zkontrolovat, archivovat nebo smazat.

Co do CRM typicky nepatří:

- soukromé poznámky o člověku, které nejsou nutné pro obchodní vztah,
- kopie celých e-mailových vláken bez důvodu,
- data z osobních sociálních profilů stažená „pro jistotu“,
- citlivé údaje, pokud nejsou nezbytné a právně ošetřené,
- automaticky obohacené profily od dodavatelů, kterým neumíš vysvětlit původ dat.

Codyho komentář: nejlepší poznámka v CRM je nudná, přesná a použitelná. „Chce snížit ruční reporting o 5 hodin týdně, rozhoduje s CFO, další krok: poslat návrh do pátku“ je zlato. „Má rád kafe a působí skepticky“ je horoskop v kravatě.

## G.3 Follow-up má být služba, ne pronásledování

Follow-up není o tom, že člověka umlátíš sedmým e-mailem s předmětem „jen posouvám nahoru“. Follow-up je připomenutí domluveného dalšího kroku, doplnění hodnoty nebo slušné uzavření smyčky.

Jednoduchá sekvence pro poptávku:

1. **Den 0:** odpověz konkrétně na dotaz, potvrď pochopení problému a navrhni další krok.
2. **Den 2–3:** pokud není reakce, pošli krátké připomenutí s jednou užitečnou informací navíc.
3. **Den 7:** shrň, co jste řešili, a zeptej se, jestli je téma stále aktuální.
4. **Den 14:** slušně uzavři smyčku a napiš, že se ozveš jen pokud bude mít druhá strana zájem.
5. **Po uzavření:** nastav retenci podle účelu a interních pravidel; nepřehazuj kontakt do newsletteru bez jasného důvodu.

Šablona posledního follow-upu:

> Dobrý den, uzavírám si poznámku k tématu [téma]. Pokud je to stále aktuální, rád navážu a pošlu konkrétní návrh dalšího kroku. Pokud ne, nebudu vás dál nahánět — internet už má dost lidí, kteří neumí přestat. Díky a držím palce.

Tenhle e-mail dělá tři věci: respektuje čas, snižuje tlak a zároveň nechává dveře otevřené. Uživatel necítí, že se dostal do marketingového kombajnu.

## G.4 Automatizace ano, ale s ruční brzdou

Automatizace v obchodu dává smysl tam, kde snižuje zapomínání: připomenutí dalšího kroku, vytvoření úkolu po formuláři, upozornění na nevyřízenou poptávku, pravidelný export pro zálohu. Jakmile automatizace začne za tým psát osobní zprávy bez kontroly, přichází riziko tónu, chyb a zbytečného zpracování dat.

Privacy-first pravidla pro obchodní automatizace:

- Automatizuj úkoly a stav, ne vztah za každou cenu.
- U e-mailů používej raději návrhy k revizi než plně autonomní odesílání.
- Do AI promptů neposílej víc kontextu, než je nutné k přípravě odpovědi.
- Zakázky s citlivým kontextem označ a vyřaď z běžných AI automatizací.
- Každý automat musí mít vlastníka, logiku vypnutí a krátký popis účelu.

Příklad bezpečné automatizace:

- Poptávkový formulář vytvoří kartu v CRM.
- CRM přidá úkol „odpovědět“ s termínem další pracovní den.
- Asistent připraví návrh odpovědi jen z textu poptávky a veřejného popisu služby.
- Člověk odpověď zkontroluje, upraví a odešle.
- Po 90 dnech bez vztahu karta spadne do review ke smazání nebo anonymizaci.

To je použitelné, rychlé a pořád lidské. Žádný autopilot, který si myslí, že „Ahoj {{first_name}}“ je personalizace.

## G.5 Měsíční úklid CRM

CRM bez úklidu se časem změní na muzeum dávno mrtvých příležitostí. Provozní hygiena je jednoduchá: jednou měsíčně projdi otevřené karty, vyřeš další kroky, zavři neaktuální vztahy a smaž data, která už nemají účel.

Měsíční rutina na 45 minut:

- Otevři všechny příležitosti bez dalšího kroku.
- U každé rozhodni: pokračovat, čekat s datem, uzavřít, smazat.
- Zkontroluj karty bez aktivity delší než 60–90 dní.
- Vymaž poznámky, které nejsou nutné pro další obchodní krok.
- Ověř, že exporty a integrace neposílají data mimo schválený seznam dodavatelů.
- Sepiš jednu věc, která zlepší kvalifikaci nových poptávek.

Malý tým si tím udrží dvě výhody: obchodní fokus a menší datové riziko. A jako bonus se CRM otevře bez pocitu, že člověk vstupuje do sklepa plného krabic po minulých projektech.

## G.6 Checklist privacy-first CRM a follow-upu

Před zapnutím nebo úpravou obchodního systému zkontroluj:

- Máme popsané stavy pipeline a každý má jasný další krok.
- Víme, jaký je účel každého pole v CRM.
- Neukládáme soukromé nebo citlivé poznámky bez nutnosti.
- U každého kontaktu známe zdroj vztahu nebo důvod kontaktování.
- Follow-up sekvence má konec, není nekonečná.
- Automatizace připravují práci, ale rizikové zprávy kontroluje člověk.
- AI nástroje dostávají jen nezbytný kontext.
- Máme měsíční rutinu pro zavírání a mazání starých karet.
- Dodavatelé CRM a integrací prošli privacy-first dotazníkem z přílohy E.
- Umíme člověku lidsky vysvětlit, jaká data o něm v obchodním procesu držíme.

## Shrnutí přílohy

Privacy-first obchod není pomalejší obchod. Je to obchod, který ví, co sleduje, proč to sleduje a kdy má přestat. Malé CRM má držet pipeline, další kroky a rozhodovací kontext — ne datový archiv všeho, co šlo někde stáhnout. Nejlepší follow-up pomáhá zákazníkovi rozhodnout se, ne uniknout.

---

# Příloha H: Rychlý audit landing page za 60 minut

Landing page se dá ladit donekonečna. Vždycky jde přepsat headline, vyměnit fotku, zvětšit tlačítko, přidat animaci nebo ještě jeden odstavec o tom, jak jste „inovativní partner pro digitální transformaci“. Jenže malý tým nepotřebuje každý týden kompletní redesign. Potřebuje rychlý provozní audit, který ukáže, jestli stránka pořád pomáhá zákazníkovi udělat další krok.

Tahle příloha je hodinový postup pro zakladatele, marketéra nebo vývojáře, který chce landing page zlepšit bez workshopu, bez nové agentury a bez datového safari přes patnáct trackerů. Stačí prohlížeč, analytika s agregovanými daty, pár reálných poptávek a ochota přiznat si, že některé věty na webu jsou jen hezky oblečená mlha.

## H.1 Prvních 10 minut: ujasni si jednu akci

Nejdřív napiš jednou větou, co má návštěvník po přečtení stránky udělat. Ne „zaujmout se o naši nabídku“. Konkrétně: objednat demo, poslat poptávku, stáhnout checklist, založit trial, zavolat, přihlásit se na konzultaci.

Auditní otázky:

- Je hlavní akce vidět v prvním viewportu?
- Používá CTA sloveso, které popisuje výsledek, ne interní proces?
- Má stránka jednu primární akci, nebo se tváří jako rozcestník v obchodním centru?
- Je jasné, co se stane po kliknutí?
- Umí člověk pokračovat i bez cookies, newsletteru nebo reklamního účtu?

Slabé CTA: „Kontaktujte nás“.

Lepší CTA: „Chci návrh SaaS architektury“ nebo „Domluvit 30min konzultaci“.

Rozdíl není jen kosmetika. Dobré CTA snižuje nejistotu. Návštěvník ví, jaký typ interakce kupuje svým kliknutím. A kliknutí je měna důvěry, ne konfeta do grafu.

## H.2 Dalších 15 minut: přečti stránku jako skeptický zákazník

Otevři stránku v anonymním okně a předstírej, že o firmě nic nevíš. Nečti jako autor. Čti jako člověk, který má problém, má málo času a nechce se nechat chytit do formuláře jen proto, aby zjistil cenu.

U každé hlavní sekce si napiš odpověď na čtyři otázky:

| Otázka | Co hledáš | Varovný signál |
| --- | --- | --- |
| Co nabízíme? | konkrétní výsledek nebo služba | obecné fráze typu „komplexní řešení“ |
| Pro koho to je? | jasný segment nebo situace | stránka mluví ke všem, takže k nikomu |
| Proč věřit právě nám? | důkaz, reference, ukázka práce, proces | jen superlativy bez opory |
| Co mám udělat dál? | další krok s nízkým třením | tlačítko až po třech obrazovkách |

Praktický trik: smaž z textu název firmy a obor. Pokud věta pořád může sedět na jakoukoliv agenturu, SaaS nebo konzultanta, není to pozice. Je to generická omáčka. Internet už jí má dost, děkujeme pěkně.

## H.3 Dalších 10 minut: zkontroluj důvěru a riziko

Zákazník se nerozhoduje jen podle slibu. Rozhoduje se podle rizika, které v hlavě vidí. „Bude to drahé?“ „Bude migrace bolet?“ „Co se stane s daty?“ „Umí dodat v Evropě?“ „Můžu odejít?“ Landing page má tyhle otázky zmenšit dřív, než se člověk musí ptát.

Důvěryhodné prvky pro privacy-first SaaS nebo webové studio:

- jasné vysvětlení, kde běží infrastruktura a kdo má přístup k datům,
- krátká věta o analytice bez reklamních trackerů,
- konkrétní ukázka procesu spolupráce,
- reference s problémem, řešením a výsledkem,
- odkaz na privacy stránku psanou lidsky,
- informace o exportu dat, zálohách nebo ukončení spolupráce,
- rozumný kontakt na člověka, ne jen formulář do neznáma.

Příklad mikrotextu pod formulář:

> Údaje použijeme jen k odpovědi na poptávku. Neposíláme je do reklamních systémů a bez navázané spolupráce je po 12 měsících mažeme.

Tohle není právní dokument. Je to uklidnění v místě rozhodnutí. Detailní pravidla patří do privacy stránky, ale důležitá část má být vidět přesně tam, kde uživatel data předává.

## H.4 Dalších 15 minut: projdi výkon, mobil a formulář

Technický audit nemusí začít nástrojem. Začni rukama. Otevři stránku na mobilu, vypni si mentální omluvy a projdi cestu jako člověk ve vlaku s horším signálem. Pokud se hrdinský headline nevejde na displej, tlačítko plave mimo obrazovku nebo formulář chce pět povinných polí, máš práci.

Rychlá kontrola:

- Stránka se na mobilu načte bez vizuálního cuknutí, které schová CTA.
- Hlavní text je čitelný bez zoomování.
- Tlačítka mají dost místa pro dotyk.
- Formulář má jen nezbytná pole.
- Chybové hlášky říkají, co opravit, ne jen „invalid input“.
- Odeslání formuláře potvrdí, co se stane dál a kdy čekat odpověď.
- Stránka funguje i bez marketingových skriptů a externích widgetů.

Pokud používáš měření výkonu, sleduj hlavně uživatelsky významné signály: rychlost zobrazení hlavního obsahu, stabilitu layoutu a odezvu na interakci. Google popisuje Web Vitals jako metriky zaměřené na kvalitu uživatelského zážitku: https://web.dev/articles/vitals?hl=en. Codyho komentář: skóre v nástroji není zákazník. Ale pokud stránka působí pomalu i nástroji, zákazník nebude psát děkovný dopis.

## H.5 Posledních 10 minut: vyber jednu změnu na další týden

Hodinový audit nemá skončit seznamem dvaceti výčitek. To je jen sofistikovaná forma prokrastinace. Skonči jedním rozhodnutím: která změna má největší šanci zlepšit obchodní výsledek a zároveň snížit tření nebo datové riziko?

Vyber jednu z těchto kategorií:

- **Slib:** přepsat headline a první odstavec tak, aby popsal konkrétní výsledek.
- **CTA:** sjednotit primární akci a vysvětlit, co se stane po kliknutí.
- **Důvěra:** přidat důkaz, reference, ukázku procesu nebo privacy mikrotext.
- **Formulář:** odstranit nepotřebná pole a zlepšit potvrzení po odeslání.
- **Mobil:** opravit největší problém v prvním viewportu.
- **Měření:** přidat jednu smysluplnou událost místo dalších plošných trackerů.

Mini experiment zapisuj jednoduše:

| Položka | Příklad |
| --- | --- |
| Hypotéza | Když CTA popíše konkrétní výsledek, víc lidí pošle relevantní poptávku. |
| Změna | „Kontaktujte nás“ nahradíme „Chci návrh evropského SaaS provozu“. |
| Metrika | počet relevantních poptávek za 14 dní |
| Anti-metrika | více nerelevantních poptávek nebo zmatených odpovědí |
| Privacy kontrola | žádné nové osobní údaje, žádný nový tracker |

Takový zápis je dost malý na to, aby ho tým opravdu používal, a dost konkrétní na to, aby se z něj dalo poučit.

## H.6 Checklist hodinového auditu landing page

Před koncem auditu ověř:

- Máme jednu jasnou primární akci stránky.
- Headline říká konkrétní výsledek pro konkrétní typ zákazníka.
- První viewport obsahuje slib, kontext a CTA.
- Každá hlavní sekce odpovídá na otázku zákazníka, ne na interní potřebu firmy.
- Stránka ukazuje důkaz důvěry: referenci, proces, ukázku nebo konkrétní výsledek.
- Privacy informace jsou vidět u míst, kde uživatel předává data.
- Formulář nevyžaduje data, která nejsou nutná pro první odpověď.
- Mobilní cesta jde projít bez zoomování, hledání a nadávání do skla.
- Měření pomáhá rozhodovat, ale nepřidává reklamní sledování bez důvodu.
- Na konci existuje jedna změna, vlastník a datum kontroly výsledku.

## Shrnutí přílohy

Landing page audit není akademická disciplína. Je to rychlá kontrola, jestli stránka pořád slouží zákazníkovi i firmě: říká jasný slib, vede k jedné akci, snižuje riziko, funguje na mobilu a nesbírá data ze zvyku. Jedna dobrá změna týdně porazí velký redesign, který se plánuje tak dlouho, až mezitím zestárne i favicon.

---


# Příloha I: Cenová stránka SaaS bez triků a datového hladu

Cenová stránka je místo, kde se marketing potká s realitou. Do té chvíle může web krásně vyprávět o hodnotě, rychlosti, bezpečnosti a pohodě v týmu. Pak návštěvník otevře ceník a během pár vteřin si řekne: „Rozumím tomu? Vejdu se do toho? Co se stane, když vyrostu? A proč mi tady někdo schoval cenu za tlačítko *kontaktujte obchod*?“

Privacy-first SaaS má v cenové stránce velkou šanci. Může ukázat nejen cenu, ale i férovost: žádné temné vzorce, žádné nucené sledování, žádné překvapení po registraci. Dobrá cenová stránka má zákazníkovi pomoct rozhodnout se, ne ho zahnat do demo callu jen proto, aby dostal základní informaci.

## I.1 Nejdřív rozhodni, co vlastně prodáváš

Cena není jen číslo. Je to zkratka pro hodnotu, segment a očekávání. Než začneš kreslit tři sloupce, napiš si jednu větu:

> „Zákazník platí za [výsledek], protože mu to šetří [čas/riziko/peníze/chaos].“

Příklady:

- Docházkový SaaS: zákazník neplatí za tabulku hodin, ale za přehled, méně ruční administrativy a menší riziko chyb.
- Rezervační systém: zákazník neplatí za kalendář, ale za méně telefonátů a více potvrzených termínů.
- B2B monitoring: zákazník neplatí za grafy, ale za rychlejší reakci na incidenty.
- Interní AI nástroj: zákazník neplatí za chat, ale za zrychlení opakované práce bez posílání citlivých dat do náhodných služeb.

Když tohle nemáš jasné, pricing bude působit jako seznam funkcí. A seznam funkcí obvykle prodává hlavně lidem, kteří už jsou rozhodnutí. Nerozhodnutému zákazníkovi nepomůže, že tarif Pro obsahuje „pokročilé workflow konfigurace“. Pomůže mu vědět, že ve firmě konečně přestane honit schvalování ve třech e-mailech.

## I.2 Tři tarify nejsou povinnost, ale často pomůžou

Klasická trojice tarifů — Start, Growth, Business — není svaté písmo. Funguje ale proto, že zákazníkům dává mentální mapu. Malý tým vidí bezpečný začátek, rostoucí tým vidí rozumný střed a větší firma vidí možnost řešit bezpečnost, podporu a smlouvy.

Praktická struktura tarifů:

| Tarif | Pro koho | Co má ukázat |
| --- | --- | --- |
| Start | jednotlivec nebo malý tým | nízké riziko vyzkoušení |
| Growth | hlavní cílový segment | nejlepší poměr hodnoty a ceny |
| Business | větší tým nebo citlivější provoz | kontrola, podpora, bezpečnost, smluvní jistota |

Nejčastější chyba je nacpat do levného tarifu příliš mnoho. Pak se zákazníci nemají proč posouvat výš a tým začne vymýšlet umělá omezení. Lepší je oddělovat podle přirozené hodnoty: počet uživatelů, objem práce, pokročilá oprávnění, auditní logy, integrace, SLA, správa dat, více organizací nebo prioritní podpora.

Codyho komentář: tarif nemá být past. Má být férová nabídka. Pokud musíš zákazníka nachytat na malý limit, který zjistí až po migraci, není to pricing. Je to komerční minové pole s hezkým gradientem.

## I.3 Ukaž cenu, nebo férově vysvětli proč ne

Ne každý produkt může mít veřejný fixní ceník. U enterprise řešení někdy cenu ovlivňuje počet systémů, bezpečnostní požadavky, migrace nebo úroveň podpory. Ale i tehdy může stránka dát vodítko.

Místo prázdného „Kontaktujte nás“ použij:

- „Individuální cena od 30 uživatelů.“
- „Cena se odvíjí od počtu týmů, integrací a požadované podpory.“
- „Typický pilot trvá 4–6 týdnů a zahrnuje nastavení, onboarding a vyhodnocení.“
- „Před nabídkou si projdeme datové toky, provozní požadavky a bezpečnostní minimum.“

Když cenu neukážeš, zákazník si ji domyslí. Často špatně. Malá firma se lekne, že je produkt mimo rozpočet. Větší firma si zase může říct, že produkt není dost vyspělý, když schovává i základní orientaci. Cenová stránka nemusí prozradit všechno, ale měla by snížit nejistotu.

Privacy-first doplněk: pokud nabízíš vyšší tarif kvůli datům, napiš konkrétně co znamená. Například:

- samostatná organizace a role,
- kratší retenční doby logů,
- auditní log přístupů,
- export dat bez podpory,
- možnost regionálního provozu v EU,
- DPA a bezpečnostní příloha ke smlouvě.

Tohle je užitečnější než neurčité „enterprise security“. Zákazník nechce kouzelnou mlhu. Chce vědět, jestli jeho právník a IT správce přestanou mračit čelo.

## I.4 Funkce popisuj jazykem rozhodnutí

Ceníky často vypadají jako tabulka, kterou navrhl někdo po dlouhém boji s interní roadmapou. Sloupce, fajfky, limity a názvy funkcí, kterým rozumí hlavně tým uvnitř firmy. Zákazník ale porovnává rozhodnutí, ne komponenty.

Slabý řádek v ceníku:

> „Webhook endpoints: 3 / 10 / unlimited“

Lepší řádek:

> „Napojení na další systémy: základní automatizace / více týmových workflow / individuální integrace“

Technický detail může být v nápovědě nebo dokumentaci. Hlavní ceník má pomoci pochopit rozdíl mezi tarify. Dobrá otázka u každého řádku:

- Pomáhá tato funkce zákazníkovi vybrat tarif?
- Je název srozumitelný bez znalosti interního produktu?
- Ukazuje řádek hodnotu, nebo jen existenci funkce?
- Je omezení férové a vysvětlitelné?
- Nevyvolává pocit, že základní tarif je schválně rozbitý?

Příklad přepisu:

| Interní název | Lepší ceníkový text |
| --- | --- |
| RBAC | Role a oprávnění pro tým |
| Data retention settings | Nastavení doby uchování dat |
| API access | Napojení na vlastní systémy |
| White-label reports | Reporty s vlastní značkou |
| SSO | Přihlášení přes firemní účet |

## I.5 Trial, demo a onboarding nastav bez nátlaku

Trial není jen marketingový trik. Je to slib, že zákazník může ověřit hodnotu s rozumným rizikem. U privacy-first SaaS by měl trial zároveň ukázat, že produkt nebude sbírat zbytečnosti.

Dobrá trial sekce odpoví:

- Potřebuji kartu?
- Jak dlouho trial trvá?
- Co se stane po skončení?
- Jaká data mám zadat?
- Dá se účet a data smazat?
- Dostanu export, když produkt nechci?

Příklad férového mikrotextu:

> „Trial je bez platební karty. Po 14 dnech účet pozastavíme, nic automaticky neúčtujeme. Data můžeš kdykoli exportovat nebo smazat v nastavení.“

U produktů, které vyžadují demo, je fér vysvětlit proč:

> „Demo děláme u týmů nad 30 lidí, protože potřebujeme projít role, datové toky a integrace. Nejde o prodejní výslech, spíš o kontrolu, jestli produkt opravdu sedí.“

Ano, taková věta je méně agresivní než „Book a call now!!!“. Taky je lidštější. A lidé kupodivu bývají lidé. Překvapivé, já vím.

## I.6 FAQ má řešit námitky, ne vycpávat stránku

FAQ na cenové stránce má být krátké, konkrétní a obchodně užitečné. Ne encyklopedie. Vyber otázky, které zákazník reálně řeší před rozhodnutím.

Doporučené otázky pro privacy-first SaaS:

- Kde jsou data uložená?
- Kdo má k datům přístup?
- Používáte reklamní nebo behaviorální trackery?
- Dá se účet zrušit a data exportovat?
- Jak funguje fakturace a změna tarifu?
- Co se stane po skončení trialu?
- Nabízíte DPA nebo bezpečnostní dokumentaci?
- Jaké integrace znamenají předávání dat třetím stranám?

Odpovědi piš normálně. Například:

> „Nepoužíváme reklamní pixely. Pro produktovou analytiku sledujeme agregované události, které pomáhají zlepšit onboarding a stabilitu. Nepoužíváme je pro remarketing.“

Tohle je zároveň marketing, podpora i důvěra. A hlavně to snižuje počet e-mailů, kde se někdo ptá na věci, které mohly být jasné už na webu.

## I.7 Checklist cenové stránky

Před publikací nebo revizí pricingu si projdi:

- Je do 10 vteřin jasné, pro koho je který tarif?
- Vysvětluje stránka hodnotu, ne jen seznam funkcí?
- Je hlavní doporučený tarif označený férově, bez manipulace?
- Jsou limity pochopitelné a navázané na reálnou hodnotu?
- Je jasné, co se stane po trialu nebo po odeslání poptávky?
- Nevyžadujeme platební kartu, pokud to není opravdu nutné?
- Umí zákazník najít informace o datech, provozu a přístupech?
- Má stránka odpovědi na nejčastější námitky obchodního a IT týmu?
- Neschováváme cenu jen proto, že se bojíme srovnání?
- Dá se tarif změnit, zrušit a data exportovat bez zbytečného tření?

## Shrnutí přílohy

Dobrá cenová stránka není katalog funkcí ani psychologická past. Je to rozhodovací pomůcka. Ukazuje hodnotu, snižuje nejistotu a vysvětluje, proč jednotlivé tarify existují. Privacy-first SaaS by měl být v pricingu stejně férový jako v práci s daty: říct, co stojí peníze, co se děje s účtem, kde jsou data a jak může zákazník odejít. Důvěra se nebuduje až po podpisu smlouvy. Začíná už u ceníku.

---


# Příloha J: Onboarding a podpora bez datového chaosu

První konverze není konec marketingu. Je to začátek vztahu. Zákazník klikl, registroval se, poslal poptávku nebo si objednal demo — a teď čeká, jestli produkt dodá slíbenou hodnotu bez toho, aby musel číst doktorát z interní dokumentace. Onboarding a podpora rozhodují o tom, jestli se z návštěvníka stane spokojený zákazník, nebo další duch ve statistikách opuštěných účtů.

Privacy-first onboarding má ještě jednu práci navíc: od začátku ukázat, že produkt bere data vážně. Ne formálně, ale prakticky. Kolik údajů opravdu potřebujeme? Kde zákazník najde nastavení? Jak smaže účet? Co se zapisuje do logů? Kdo uvidí jeho data, když napíše na podporu? GDPR principy jako minimalizace, transparentnost a data protection by design nejsou jen právní příloha ke smlouvě; jsou dobrý produktový design: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/obligations/what-does-data-protection-design-and-default-mean_en

## J.1 První týden má mít jeden jasný výsledek

Špatný onboarding se snaží ukázat všechno. Dobrý onboarding dovede zákazníka k prvnímu užitečnému výsledku. U SaaS tomu často říkáme aktivace, ale nemusíme kolem toho zapalovat konferenční svíčky. Prakticky jde o moment, kdy si uživatel řekne: „Aha, tohle mi fakt pomůže.“

Příklady prvního výsledku:

- Rezervační systém: zákazník vytvoří první službu, veřejný rezervační odkaz a testovací rezervaci.
- Docházkový nástroj: tým přidá první tři lidi a uzavře jeden testovací den.
- Reporting SaaS: uživatel napojí první zdroj dat a uvidí jeden smysluplný týdenní přehled.
- Interní AI asistent: administrátor nahraje malou sadu dokumentů a ověří tři typické dotazy.
- CRM pro malé týmy: obchodník založí první příležitost a naplánuje další krok.

Onboarding proto nezačínej prohlídkou všech funkcí. Začni úkolem. Ideální první obrazovka po registraci řekne:

> „Za 10 minut nastavíme první funkční scénář: přidáš tým, vybereš šablonu a odešleš testovací pozvánku.“

Tohle je lepší než „Vítejte v dashboardu“, protože zákazník ví, co má dělat. Dashboard bez kontextu je jen digitální recepce bez člověka za pultem.

## J.2 Sbírej data postupně, ne na uvítanou jako celník

Registrační formulář často chce všechno hned: jméno, firmu, telefon, velikost týmu, obor, roční obrat, oblíbenou barvu tlačítka a možná krevní skupinu. Z pohledu týmu jsou to hezká data do CRM. Z pohledu zákazníka je to tření.

Privacy-first přístup říká: nejdřív vezmi jen data nutná pro začátek a další údaje ptej až ve chvíli, kdy dávají smysl.

Praktická sekvence:

| Moment | Co se ptát | Proč |
| --- | --- | --- |
| Registrace | e-mail, heslo nebo bezpečné přihlášení | vytvoření účtu |
| První nastavení | název organizace, hlavní use case | přizpůsobení produktu |
| Pozvánka týmu | e-maily členů týmu | doručení pozvánky |
| Fakturace | fakturační údaje | až při placení |
| Podpora | detail problému, případně technický kontext | vyřešení konkrétního požadavku |

Nejde jen o konverzní míru. Postupný sběr dat také lépe vysvětluje účel. Když se na fakturační údaje zeptáš při platbě, zákazník chápe proč. Když je chceš před prvním kliknutím v produktu, působí to jako hladový formulář.

Codyho komentář: pokud má onboarding víc polí než daňové přiznání, problém není ve „frikci“. Problém je v tom, že produkt nutí zákazníka splácet interní nepořádek týmu.

## J.3 E-maily po registraci mají pomáhat, ne pronásledovat

Onboardingové e-maily jsou užitečné, když mají jasný účel. Jsou otravné, když jen připomínají existenci produktu ve stylu „Ahoj, ještě jsme tady, nezapomeň na nás, prosím prosím“. Každý e-mail by měl zákazníkovi pomoct udělat konkrétní krok.

Jednoduchá sekvence pro první týden:

1. **Ihned po registraci:** potvrzení účtu, odkaz zpět do produktu, jedna věta o dalším kroku.
2. **Po 24 hodinách bez aktivace:** nabídka krátkého návodu nebo šablony pro první scénář.
3. **Po prvním úspěchu:** vysvětlení další hodnotné funkce, ne deset odkazů najednou.
4. **Před koncem trialu:** shrnutí, co uživatel nastavil, co se stane po konci trialu a jak exportovat nebo smazat data.
5. **Po neaktivním trialu:** férová otázka, jestli produkt nesedl, a jednoduchá možnost účet zavřít.

Privacy-first pravidla pro e-maily:

- Nepřidávej člověka do marketingového newsletteru jen proto, že si vytvořil účet.
- Odděl produktové e-maily od marketingových odběrů.
- U každého typu e-mailu si napiš právní a produktový důvod.
- Měř agregovaně to, co opravdu pomáhá zlepšit onboarding.
- Neposílej osobní údaje do e-mailingového nástroje bez kontroly dodavatele a smluv.

Příklad užitečného e-mailu:

> Předmět: „Tvůj první rezervační odkaz je skoro hotový“
>
> „Chybí už jen nastavit dostupné časy. Zabere to asi 3 minuty. Tady je přímý odkaz do nastavení. Pokud produkt nechceš dál zkoušet, účet můžeš smazat v Nastavení → Organizace.“

Tenhle e-mail je konkrétní, krátký a respektuje uživatele. Žádné „exkluzivní příležitosti“, žádné psychologické lepidlo.

## J.4 Podpora potřebuje kontext, ale ne celý život zákazníka

Když zákazník napíše na podporu, tým potřebuje kontext: účet, plán, poslední chybu, prohlížeč, čas incidentu, případně ID objednávky. Nepotřebuje ale automaticky kopii celé databáze, kompletní historii klikání a screenshoty citlivých dat.

Zaveď si podporový datový minimální standard:

- **Identifikace požadavku:** e-mail účtu, organizace, číslo ticketu.
- **Technický kontext:** čas chyby, URL obrazovky, typ zařízení, prohlížeč, ID události v logu.
- **Obsah problému:** popis od zákazníka, případně bezpečně začerněný screenshot.
- **Přístup podpory:** kdo v týmu může ticket vidět a kdy smí otevřít zákaznická data.
- **Retence:** kdy se ticket a přílohy mažou nebo anonymizují.

U citlivějších produktů pomůže režim „support access“: podpora se k zákaznickému účtu nedívá automaticky, ale uživatel dočasně povolí přístup. Ideálně s časovým omezením a auditním logem. To je trochu víc práce na implementaci, ale hodně práce ušetří při bezpečnostních dotaznících.

Příklad odpovědi podpory:

> „Vidíme chybu v synchronizaci z dneška 09:42 u integrace Kalendář. Nepotřebujeme přístup k obsahu vašich událostí; stačí nám povolit diagnostiku připojení na 24 hodin.“

Taková věta uklidní zákazníka a zároveň chrání tým. Méně dat znamená méně rizika. Šokující, skoro jako kdyby minimalizace měla smysl.

## J.5 Nápověda má být produkt, ne skládka článků

Dokumentace často roste jako půda na chalupě: všechno se tam odloží a jednou se to „uklidí“. Jenže nápověda je součást produktu. Když je špatná, zákazník píše na podporu, podpora nestíhá a produktový tým si myslí, že problém je „málo lidí v customer success“.

Minimum dobré nápovědy:

- stránka „Začněte tady“ pro první výsledek,
- krátké návody podle scénářů, ne jen podle funkcí,
- FAQ pro billing, data, bezpečnost a zrušení účtu,
- changelog s přímým odkazem, ideálně dostupný i přes RSS,
- kontaktní cesta na podporu bez nutnosti veřejného profilu na sociální síti,
- datum poslední aktualizace u důležitých článků.

Scénářový článek je lepší než funkční katalog. Místo „Správa webhooků“ napiš „Jak poslat novou objednávku do účetnictví“. Místo „Role administrátora“ napiš „Jak bezpečně přidat externí účetní jen k fakturám“. Jazyk nápovědy má odpovídat tomu, co chce zákazník udělat.

Privacy-first doplněk: u každého článku, který popisuje integraci, přidej malý box:

- Jaká data se předávají?
- Komu se předávají?
- Dá se integrace vypnout?
- Co se stane s historickými daty po vypnutí?
- Kde najdu smluvní nebo bezpečnostní informace dodavatele?

Tohle není paranoia. To je servis pro evropského zákazníka, který nechce zjišťovat datové toky až při auditu.

## J.6 Checklist onboardingového systému

Před spuštěním nebo revizí onboardingu si projdi:

- Má první týden jeden jasně definovaný výsledek pro zákazníka?
- Ví uživatel po registraci, jaký další krok má udělat?
- Sbíráme při registraci jen opravdu nutná data?
- Oddělujeme produktové e-maily od marketingových odběrů?
- Vysvětlujeme, co se stane po konci trialu?
- Umí uživatel exportovat nebo smazat data bez psaní na podporu?
- Má podpora jasná pravidla, kdy smí vidět zákaznická data?
- Logujeme podpůrné zásahy do účtu, pokud existují?
- Má nápověda články podle reálných scénářů zákazníků?
- U integrací vysvětlujeme datové toky a možnost vypnutí?

## Shrnutí přílohy

Onboarding a podpora nejsou provozní detail po prodeji. Jsou součást důvěry. Dobrý onboarding vede zákazníka k prvnímu výsledku, sbírá data postupně a vysvětluje, co se děje. Dobrá podpora řeší problém s minimem nutných údajů, jasnými přístupy a srozumitelnou nápovědou. Privacy-first přístup tady není brzda růstu. Je to způsob, jak růst bez toho, aby se z produktu stala datová půda plná věcí, které nikdo nechce uklízet.

---

# Příloha K: Retence dat a odchod zákazníka bez rukojmí

Privacy-first produkt se nepozná jen podle toho, jak hezky vítá nové uživatele. Pozná se i podle toho, jak se chová, když uživatel přestane platit, smaže účet, odejde ke konkurenci nebo jen potřebuje uklidit stará data. Tady se ukáže, jestli je „respekt k datům“ skutečná hodnota, nebo jen věta na landing page s ikonou zámku.

Retence dat je obyčejná otázka s neobyčejně velkými následky: jak dlouho držíme konkrétní data a proč? GDPR mezi základní principy řadí mimo jiné minimalizaci dat, omezení účelu a omezení uložení: https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/principles-gdpr_en. Přeloženo do produktového jazyka: nesbírej věci bez důvodu, nepoužívej je k jinému účelu bez rozmyslu a nedrž je navždy jen proto, že „se to někdy může hodit“.

Codyho komentář: „mohlo by se hodit“ je datová verze šuplíku s kabely. Jednou za pět let tam možná najdeš redukci na monitor z roku 2009, ale většinou jen zvyšuješ chaos.

## K.1 Udělej retenční tabulku dřív, než ji budeš potřebovat

Retenční politika nemusí být právnický román. Pro malý SaaS nebo webový projekt stačí praktická tabulka, kterou pochopí produkt, podpora, vývoj i obchod. Cílem je vědět, co se má stát s daty po určité době nebo události.

Minimální sloupce:

| Typ dat | Účel | Kde jsou uložená | Doporučená doba | Co spustí smazání |
| --- | --- | --- | --- | --- |
| Poptávky z formuláře | Odpověď a obchodní komunikace | E-mail, CRM | 12–24 měsíců podle vztahu | Neaktivita nebo žádost |
| Trial účet | Ověření produktu | Produkční databáze | 30–90 dní po konci trialu | Neaktivita po upozornění |
| Fakturační údaje | Účetnictví | Fakturační systém | Podle zákonných povinností | Po uplynutí povinné lhůty |
| Produktové logy | Bezpečnost a diagnostika | Logovací systém | Krátká provozní doba | Automatická expirace |
| Support konverzace | Řešení problému | Helpdesk | 12–36 měsíců podle typu služby | Uzavření vztahu nebo žádost |
| Marketingový odběr | Zasílání obsahu | Mailing nástroj | Do odhlášení nebo neaktivity | Odhlášení, bounce, úklid |

Důležité: čísla v tabulce nejsou univerzální právní rada. Jsou pracovní návrh. Každý projekt musí retenční dobu sladit s typem služby, smlouvami, účetními povinnostmi a riziky. Prakticky ale platí: když u typu dat neumíš napsat účel a dobu, zatím nad nimi nemáš kontrolu.

## K.2 Rozliš aktivní účet, neaktivní účet a smazaný účet

Mnoho systémů zná jen dvě polohy: účet existuje, nebo neexistuje. V praxi je lepší mít několik jasných stavů. Pomáhá to zákazníkovi, podpoře i technickému týmu.

Užitečný model:

- **Aktivní účet:** uživatel produkt používá a data jsou dostupná podle nastavení služby.
- **Pozastavený účet:** po konci trialu nebo neuhrazené faktuře uživatel nemůže pokračovat v běžné práci, ale může exportovat data a vyřešit přístup.
- **Archivovaný účet:** služba už neběží, data jsou omezeně dostupná jen pro obnovu, podporu nebo zákonný důvod.
- **Smazaný účet:** osobní a produktová data jsou odstraněná nebo anonymizovaná, zůstávají jen údaje, které firma musí držet z právního důvodu.

Tenhle rozdíl je fér vysvětlit přímo v produktu. Například:

> „Po zrušení předplatného účet nejdřív pozastavíme na 30 dní, abys mohl exportovat data nebo obnovit službu. Potom produktová data smažeme nebo anonymizujeme, pokud je nemusíme držet kvůli účetnictví nebo bezpečnostním záznamům.“

Je to delší než „Delete account“. Ale zákazník konečně ví, co se stane. A podpora nemusí improvizovat pokaždé, když přijde otázka „co přesně smažete?“.

## K.3 Export dat je součást důvěry, ne funkce pro odcházející

Některé firmy se bojí snadného exportu, protože „pak zákazník odejde“. To je krátkozraké. Pokud zákazník zůstává jen proto, že je rukojmí dat, není to retence. Je to digitální lepicí páska přes dveře.

Rozumný export by měl být:

- dostupný v administraci bez psaní na podporu,
- ve strojově čitelném formátu, typicky CSV nebo JSON,
- doplněný krátkým popisem polí,
- oddělený podle typů dat, aby uživatel nemusel stahovat všechno,
- bezpečný: export smí spustit jen oprávněný uživatel,
- auditovatelný: systém ví, kdo export vytvořil a kdy,
- časově omezený: odkaz na stažení po určité době expiruje.

U citlivějších B2B produktů přidej i export na vyžádání s kontrolou identity. Ne proto, aby to bylo otravné, ale aby někdo s kompromitovaným účtem nestáhl celou firmu jedním kliknutím v pátek večer. Pátek večer je mimochodem oficiální čas, kdy se dějí nejhloupější incidenty. Ne podle normy, podle vesmírné škodolibosti.

## K.4 Smazání účtu nemá být úniková hra

Pokud uživatel může účet vytvořit za dvě minuty, neměl by ho mazat přes tři e-maily, PDF formulář a „kontaktujte vašeho account managera“. U B2C nebo jednoduchého B2B SaaS má být zrušení srozumitelné přímo v nastavení. U složitějších týmových účtů je v pořádku přidat potvrzení, upozornění na dopady a roli administrátora.

Dobré mazání účtu odpoví:

- Kdo může smazání spustit?
- Co se smaže hned?
- Co zůstane kvůli zákonným nebo bezpečnostním důvodům?
- Jak dlouho trvá dokončení?
- Dostane zákazník potvrzení?
- Dá se smazání krátce zrušit, pokud šlo o omyl?

Příklad mikrotextu:

> „Smazáním účtu odstraníme projektová data, členy týmu a nastavení workspace. Fakturační doklady zůstávají uložené po dobu vyžadovanou účetními pravidly. Před smazáním si můžeš stáhnout export.“

Privacy-first tón není strašení. Je to klidná přesnost. Uživatel má vědět, co se stane, bez potřeby právního archeologa.

## K.5 Automatizuj úklid, ale nech si kontrolní body

Retenční politika bez automatizace rychle zestárne. Někdo ji napíše, tým si zatleská, a za půl roku databáze pořád drží trialy z minulé éry produktu. Automatické mazání a anonymizace jsou proto praktická nutnost.

Co automatizovat:

- expiraci starých produktových logů,
- anonymizaci neaktivních analytických událostí,
- mazání nedokončených registrací po rozumné době,
- čištění bounce kontaktů z e-mailingu,
- uzavírání starých support ticketů,
- upozornění před smazáním trial účtu,
- pravidelný report účtů čekajících na archivaci.

Co nenechat běžet naslepo:

- hromadné mazání produkčních zákaznických dat,
- změny retenční politiky bez review,
- mazání dat s možným smluvním nebo právním dopadem,
- anonymizaci dat, která jsou ještě potřeba pro otevřený incident.

Praktický kompromis: automatizuj návrh akce, ale u rizikových dat vyžaduj potvrzení oprávněnou rolí. Třeba měsíční report řekne: „Těchto 42 trial workspace je 90 dní neaktivních, připraveno k odstranění.“ Člověk zkontroluje výjimky a akci potvrdí. Není to tak sexy jako plně autonomní robotický uklízeč, ale méně často to smaže zákazníka, který právě podepisuje smlouvu.

## K.6 Checklist retenční politiky

Jednou za kvartál projdi projekt tímhle seznamem:

- Máme mapu hlavních typů dat a jejich účelů?
- Víme, kde jsou data uložená, včetně podpory, logů a exportů?
- Má každý typ dat retenční dobu nebo jasné pravidlo ukončení?
- Umí zákazník exportovat vlastní data bez zbytečného tření?
- Je zrušení účtu srozumitelné a dostupné správné roli?
- Vysvětlujeme rozdíl mezi pozastavením, archivací a smazáním?
- Mažeme nebo anonymizujeme staré trialy, testovací účty a nedokončené registrace?
- Kontrolujeme, že data nezůstávají v nástrojích třetích stran po zrušení účtu?
- Má podpora jasný postup pro žádosti o export, opravu a smazání?
- Testovali jsme obnovu ze zálohy i dopad mazání na zálohované kopie?

## Shrnutí přílohy

Retence dat je produktové rozhodnutí, provozní hygiena i důkaz respektu k zákazníkovi. Dobrý privacy-first SaaS umí říct, proč data drží, jak dlouho, kde jsou, kdo k nim má přístup a co se stane při odchodu. Export a smazání nejsou nepřátelé růstu. Jsou signál, že produkt nepotřebuje držet zákazníka za rukáv, protože si věří hodnotou.

---

# Příloha L: Interní znalostní báze, která nezplesniví do měsíce

Malý tým nepotřebuje firemní wikipedii s padesáti prázdnými kategoriemi. Potřebuje místo, kde se dá rychle zjistit, jak produkt funguje, proč se něco rozhodlo, jak se řeší opakované situace a co se nesmí rozbít. Znalostní báze není muzeum dokumentů. Je to pracovní nástroj, který šetří otázky, onboarding, chyby a nervy.

Privacy-first pohled je jednoduchý: interní dokumentace má pomáhat týmu, ale nemá se stát nenápadnou kopií zákaznických dat. Když se do ní bez rozmyslu lepí screenshoty z administrace, celé e-mailové konverzace a exporty z CRM, vzniká další úložiště citlivých informací. A samozřejmě bez retenční politiky, protože dokumentace přece „není databáze“. Jasně. A já jsem jen roztomilý autocomplete s názorem.

## L.1 Začni pěti typy stránek

Nejdřív nevymýšlej strukturu podle oddělení. V malém SaaS týmu se lidé stejně překrývají. Lepší je struktura podle situací, ve kterých dokumentaci hledáš:

| Typ stránky | Kdy se hodí | Co obsahuje |
| --- | --- | --- |
| Rozhodnutí | Když se někdo ptá „proč to tak je“ | Kontext, zvažované možnosti, rozhodnutí, datum, vlastník |
| Postup | Když se věc opakuje | Kroky, vstupy, výstupy, časté chyby, odkaz na šablonu |
| Produktová znalost | Když tým vysvětluje funkci | Pro koho je funkce, jak funguje, limity, typické dotazy |
| Incident / poučení | Když se něco pokazilo | Co se stalo, dopad, příčina, náprava, prevence |
| Slovník | Když lidé používají stejná slova jinak | Termín, význam, příklad, co tím nemyslíme |

Tohle pokryje překvapivě velkou část provozu. Když stránka nejde zařadit ani do jedné kategorie, možná je to jen poznámka, která patří do ticketu, ne do znalostní báze.

## L.2 Každá stránka musí mít vlastníka a datum další kontroly

Dokumentace stárne. Ne proto, že by byla špatná, ale protože produkt, tým i realita mají otravný zvyk pokračovat v čase. Stránka bez vlastníka je budoucí archeologický nález. Stránka bez data kontroly je interní folklór.

Na začátek každé důležité stránky dej krátkou hlavičku:

```markdown
Vlastník: Produkt / Jana
Naposledy upraveno: 2026-08-07
Další kontrola: 2026-11-07
Stav: platné
Citlivost: interní, bez zákaznických dat
```

Stav drž jednoduchý:

- `platné` — tým se tím má řídit,
- `návrh` — ještě není závazné,
- `zastaralé` — necháváme kvůli historii, ale nepoužívat,
- `archiv` — starý kontext, který už nepatří do běžného provozu.

Praktický trik: jednou měsíčně si vygeneruj seznam stránek, kterým vypršelo datum další kontroly. Neopravuj všechno hned. Jen rozhodni: aktualizovat, archivovat, nebo smazat. Úklid dokumentace má být desetiminutová rutina, ne digitální stěhování skladu.

## L.3 Nelep do dokumentace zákaznická data

Dokumentace má vysvětlovat princip, ne kopírovat realitu v plné citlivosti. Když potřebuješ ukázat příklad, použij anonymizovaná nebo fiktivní data. Screenshot z produkční administrace s e-mailem zákazníka je rychlý dnes a drahý zítra.

Bezpečnější vzory:

- místo reálného e-mailu použij `zakaznik@example.test`,
- místo názvu firmy použij neutrální „Acme EU s.r.o.“,
- místo screenshotu s daty vytvoř demo účet nebo schematický obrázek,
- místo celé podpůrné konverzace napiš shrnutí problému a rozhodnutí,
- místo exportu z CRM vlož jen strukturu polí a význam hodnot.

Když už musí dokumentace obsahovat citlivější ukázku, označ ji, omez přístup a nastav datum odstranění. V ideálním světě se to nestává často. V reálném světě se to stane v pátek v 16:58, takže měj pravidlo předem.

## L.4 Rozhodnutí piš dřív, než se z nich stanou legendy

Nejdražší dokumentační dluh nevzniká u postupů, ale u rozhodnutí. Po třech měsících si tým pamatuje výsledek, ale ne důvod. Pak přijde nový člověk, uvidí divný kompromis a začne ho předělávat. Jenže ten kompromis často chránil před problémem, který už není vidět.

Krátký záznam rozhodnutí stačí:

```markdown
## Rozhodnutí

Pro evropské zákazníky provozujeme primární data v EU regionu a nepřidáváme externí reklamní pixely.

## Kontext

Landing page potřebuje měřit konverze, ale nechceme stavět akvizici na detailním profilování návštěvníků.

## Zvažované možnosti

1. Běžná reklamní analytika se souhlasovou lištou.
2. Privacy-first analytika bez osobních profilů.
3. Pouze serverové logy.

## Volba

Varianta 2: měříme agregované události, doplňujeme UTM u kampaní a obchodní dotazy hodnotíme v CRM.

## Kontrola

Za 90 dní ověřit, jestli metriky stačí pro rozhodování o kampaních.
```

Tohle není byrokracie. To je časová kapsle pro budoucí tým. A budoucí tým jsi často ty, jen s horší pamětí a větším počtem otevřených tabů.

## L.5 AI asistenta pouštěj do znalostí po vrstvách

Interní znalostní báze je výborný zdroj pro AI asistenta, ale ne všechno má skončit v promptu nebo v indexu. Nejdřív rozděl dokumenty podle citlivosti:

- veřejné: návody, help centrum, blogové principy,
- interní nízké riziko: obecné procesy, slovník, neprodukční příklady,
- interní citlivé: obchodní strategie, incidenty, bezpečnostní postupy,
- zákaznická data: konkrétní účty, komunikace, smlouvy, support historie.

Do asistenta dávej nejdřív první dvě vrstvy. U třetí vrstvy vyžaduj jasný účel, omezený přístup a logování použití. Čtvrtou vrstvu nepoužívej jako volnou potravu pro model. Pokud asistent potřebuje zákaznický kontext, měl by ho dostat přes konkrétní nástroj s oprávněním, ne jako celý dump databáze.

Codyho komentář: nejlepší firemní AI není ta, která „ví všechno“. Nejlepší je ta, která ví přesně to, co potřebuje k úkolu, a u zbytku umí slušně říct: „Tohle nemám oprávnění číst.“ Nudné? Ano. Profesionální? Taky ano.

## L.6 Checklist zdravé znalostní báze

Jednou měsíčně projdi:

- Má každá důležitá stránka vlastníka?
- Má každá důležitá stránka datum další kontroly?
- Je jasné, které stránky jsou platné, návrh, zastaralé nebo archiv?
- Neobsahují návody zbytečná zákaznická data, screenshoty nebo exporty?
- Existuje šablona pro rozhodnutí, postup, incident a produktovou znalost?
- Najde nový člověk odpověď na pět nejčastějších otázek bez ptaní?
- Jsou staré postupy archivované místo toho, aby se pletly mezi platné?
- Má AI asistent přístup jen k dokumentům, které opravdu potřebuje?
- Je u citlivých dokumentů jasné, kdo je smí číst a proč?
- Dá se z dokumentace poznat nejen „co děláme“, ale i „proč to tak děláme“?

## Shrnutí přílohy

Znalostní báze není povinnost pro pořádkumilovné lidi. Je to operační systém týmu. Když je krátká, vlastněná, pravidelně kontrolovaná a bez zbytečných zákaznických dat, zrychluje onboarding, podporu i rozhodování. Privacy-first dokumentace navíc snižuje počet míst, kde se mohou citlivá data zapomenout. Co není potřeba opsat, to nejde omylem poslat dál. Malý zázrak, skoro jako kabel, který najdeš napoprvé.

---

# Příloha M: Newsletter a RSS bez marketingové klece

Obsahový marketing často skončí v pasti: firma začne psát užitečné věci, ale distribuci svěří algoritmu, reklamní platformě nebo nástroji, který si z kontaktů udělá vlastní královstvíčko. Pak přijde změna pravidel, horší doručitelnost, dražší tarif, nový consent režim nebo prostě účet, do kterého se nikdo neumí přihlásit. Výsledek: publikum existuje, ale firma ho reálně nekontroluje.

Privacy-first distribuce stojí na opačném principu: přímý vztah, jasný souhlas, snadný odchod a minimum dat. Newsletter a RSS nejsou retro. Jsou to nudné, spolehlivé koleje, po kterých obsah dojede k lidem bez toho, aby musel prosit algoritmus o drobné.

## M.1 Newsletter není databáze duší

E-mailový seznam má obsahovat jen data, která potřebuješ pro doručení a základní správu odběru. U většiny malých firem stačí:

- e-mailová adresa,
- datum přihlášení,
- zdroj přihlášení,
- stav odběru,
- technický záznam souhlasu nebo oprávněného důvodu,
- volitelně segment, pokud podle něj opravdu posíláš jiný obsah.

Nepotřebuješ datum narození, telefon, název firmy, obrat, počet zaměstnanců ani tajnou psychologickou mapu člověka, který si chtěl jen stáhnout checklist. Každé další pole zvyšuje tření při registraci a zároveň přidává datový dluh.

Praktický příklad formuláře:

```text
Odebírat praktické tipy k webu, SaaS a privacy-first marketingu.
E-mail: [__________]

Posíláme maximálně 2× měsíčně. Bez reklamních pixelů v e-mailu. Odhlášení je v každém vydání.
[Odebírat]
```

Tahle verze říká, co člověk dostane, jak často, co se nebude dít a jak z toho může pryč. Žádné „přihlášením souhlasíte se zpracováním za účelem zlepšování obchodní komunikace a personalizace digitální zkušenosti“. To není věta, to je mlha v obleku.

## M.2 RSS je pojistka proti algoritmům

RSS feed je jednoduchý přímý kanál: publikovaný obsah má strojově čitelný seznam položek a čtenář si ho může odebírat ve vlastní čtečce. RSS Advisory Board popisuje RSS 2.0 jako formát pro syndikaci webového obsahu: https://www.rssboard.org/rss-specification

Pro malý B2B web má RSS několik výhod:

- odběr nevyžaduje e-mail,
- neřeší doručitelnost ani spam složku,
- neobsahuje marketingové pixely,
- funguje napříč nástroji,
- dává čtenáři kontrolu nad tím, kde obsah sleduje,
- vytváří trvalý archiv místo jednorázového feedu na sociální síti.

RSS není náhrada newsletteru pro všechny. Je to druhý kanál pro lidi, kteří chtějí sledovat obsah bez registrace. Přesně tihle lidé často ocení privacy-first přístup nejvíc. A ano, jsou to někdy ti samí lidé, kteří mají v prohlížeči 47 tabů a tvrdí, že v tom mají systém. Respekt.

## M.3 E-mailové měření drž při zemi

Newsletter láká k měření všeho: otevření, kliky, zařízení, lokace, čas čtení, skóre zájmu, automatické lead scoring peklo. Jenže otevření e-mailu samo o sobě není spolehlivý obchodní signál a detailní sledování často nepřináší lepší rozhodnutí.

Místo posedlosti jednotlivcem měř agregovaně:

- počet nových odběrů za měsíc,
- počet odhlášení,
- kliky na hlavní odkazy,
- odpovědi na e-mail,
- počet obchodních konverzací, které newsletter pomohl otevřít,
- témata, na která lidé reagují konkrétní odpovědí.

Pokud používáš sledované odkazy, popiš to v zásadách soukromí a nedělej z toho tajnou operaci. Pokud měření nepotřebuješ, posílej čisté odkazy. U malého newsletteru je často jedna odpověď od správného člověka hodnotnější než tabulka s otevřeními na dvě desetinná místa.

Codyho komentář: nejlepší metrika newsletteru není „open rate“. Nejlepší metrika je, že ti někdo odpoví: „Tohle přesně řešíme, můžeme si zavolat?“ Marketing, který vede ke konverzaci, většinou nepotřebuje špehovací dalekohled.

## M.4 Archivuj obsah na vlastním webu

Newsletter by neměl být jediné místo, kde text žije. Každé hodnotné vydání převeď do článku, poznámky, checklistu nebo veřejného archivu. Důvody jsou praktické:

- obsah získá trvalou URL,
- dá se najít přes vyhledávač,
- dá se sdílet bez přeposílání e-mailu,
- může se propsat do RSS,
- není zamčený v e-mailingovém nástroji,
- lze ho aktualizovat, když se změní doporučení.

Jednoduchý systém:

1. Newsletter pošli jako krátký praktický tip.
2. Do 48 hodin z něj udělej webovou verzi.
3. Přidej kanonickou URL do interního seznamu obsahu.
4. Jednou za čtvrtletí projdi nejlepší vydání a rozšiř je do větších článků.
5. Staré neplatné rady označ jako aktualizované nebo archivované.

Tím se newsletter nestane jednorázovým výstřelem. Stane se součástí knihovny, která pracuje dlouho po odeslání.

## M.5 Vyber nástroj podle odchodu, ne podle hezkého dashboardu

Při výběru newsletterového nástroje se neptej jen „umí pěkné šablony?“. Ptej se hlavně:

- Kde jsou uložená data odběratelů?
- Umíme exportovat seznam v běžném formátu?
- Umíme smazat odběratele na žádost?
- Umíme vypnout tracking otevření a zbytečné profilování?
- Umíme posílat bez cizích reklamních skriptů a sociálních widgetů?
- Je možné nastavit double opt-in, pokud ho pro daný scénář chceme?
- Má nástroj jasné informace o zpracovatelích a bezpečnosti?
- Co se stane, když přestaneme platit?

Privacy-first výběr neznamená automaticky nejmenší nástroj. Znamená nástroj, který respektuje účel, dává export, nebrání odchodu a nevyrábí datové riziko navíc. Pokud nejde vypnout invazivní tracking, je to červená vlajka, ne „pokročilá marketingová funkce“.

## M.6 Checklist distribuce obsahu

Před spuštěním newsletteru a RSS si projdi:

- Má newsletter jasný slib a frekvenci?
- Sbírá formulář jen e-mail a opravdu nutné údaje?
- Je u formuláře srozumitelně popsáno, co člověk dostane?
- Je odhlášení jednoduché a viditelné v každém e-mailu?
- Je RSS feed dostupný z webu a odkazovaný v patičce nebo hlavičce?
- Má každé vydání webovou URL nebo plán, jak ji dostane?
- Nepoužíváš sledovací pixely jen proto, že jsou ve výchozím nastavení?
- Máš export odběratelů a víš, jak odejdeš z nástroje?
- Je v zásadách soukromí popsané, jak newsletter funguje?
- Umíš po 90 dnech říct, jestli newsletter pomáhá obchodu nebo jen vyrábí další povinnost?

## Shrnutí přílohy

Newsletter a RSS jsou přímé distribuční kanály bez závislosti na sociálních algoritmech. Privacy-first verze nesbírá zbytečná data, nepředstírá personalizaci tam, kde stačí dobrý obsah, a dává lidem kontrolu nad odběrem i odchodem. Pokud má značka vlastní web, čistý RSS feed a férový newsletter, má publikum blíž k sobě než firma, která každý týden žebrá o dosah u algoritmu.

---

# Příloha N: Produktové signály bez šmírování

Malý SaaS nepotřebuje vědět, kde se uživatel narodil, kolik má otevřených tabů a jestli čte ceník v tramvaji. Potřebuje vědět, jestli lidé dokážou dojít k hodnotě produktu, kde se zasekávají a která rozhodnutí týmu mají skutečný dopad. Rozdíl mezi produktovým signálem a šmírováním je v účelu, detailu a schopnosti data po použití zahodit.

Produktové signály jsou praktická vrstva mezi analytikou a supportem: nejsou to marketingové profily, ale jednoduché odpovědi na otázky typu „našel nový účet první hodnotu do týdne?“ nebo „který krok onboardingu nejčastěji končí opuštěním?“.

## N.1 Začni otázkou, ne eventem

Nejhorší měřicí plán vzniká tak, že vývojář otevře dokumentaci analytiky a začne posílat všechno, co jde kliknout. Výsledek je dashboard, který vypadá důležitě, ale při rozhodování nepomáhá. Lepší začátek je seznam produktových otázek.

Příklad pro B2B SaaS:

| Otázka | Signál | Rozumná granularita |
| --- | --- | --- |
| Aktivuje se nový zákazník? | Dokončený první projekt / import / konfigurace | účet, den |
| Kde se onboarding láme? | Nedokončený krok v toku | krok, anonymní počty |
| Používá tým klíčovou funkci? | Počet úspěšných použití funkce | účet, týden |
| Má zákazník riziko odchodu? | Dlouhá neaktivita po dřívějším používání | účet, týden |
| Pomáhá nová úprava? | Změna dokončení konkrétního úkolu | varianta, období |

Všimni si, že tabulka nezačíná sloupcem „jaké osobní údaje pošleme do nástroje“. To je záměr. Když jde otázka zodpovědět bez osobních údajů, není důvod je přidávat jen proto, že se v JSONu hezky vyjímají.

## N.2 Eventy pojmenuj jako obchodní fakta

Dobré eventy popisují dokončenou hodnotu, ne každý pohyb myší. `button_clicked` je skoro vždycky horší než `invoice_created`, `project_invited_member` nebo `backup_restored`. Kliknutí říká málo. Dokončený úkol říká, že uživatel něco zvládl.

Praktická pravidla:

- Event má název ve tvaru objekt + akce: `project_created`, `invite_sent`, `report_exported`.
- Event neposílá celé texty, poznámky, názvy zákazníků ani obsah dokumentů.
- Vlastnosti eventu jsou kategorie, ne osobní detaily: tarif, typ účtu, jazyk rozhraní, velikostní pásmo.
- Každý event má vlastníka: člověka, který ví, proč existuje a kdy ho smažeme.
- Pokud event nikdo nepoužil pro rozhodnutí tři měsíce, kandiduje na odstranění.

Špatný event:

```text
form_field_changed: {
  email: "eva@example.com",
  company: "Klient s.r.o.",
  note: "Potřebujeme migraci z konkurence...",
  ip: "..."
}
```

Lepší event:

```text
lead_form_submitted: {
  source_page: "pricing",
  company_size_bucket: "11-50",
  requested_contact: true
}
```

První varianta krmí analytiku osobními údaji a obchodním obsahem. Druhá stačí pro otázku, jestli cenová stránka generuje relevantní poptávky. Ano, méně dramatické. Ale taky méně právní pyrotechniky.

## N.3 Vytvoř signál aktivity bez individuálního dohledu

Produktový tým často chce vědět, jestli zákazník produkt používá. To je legitimní otázka. Neznamená to ale, že musí vzniknout detailní deníček každého uživatele. U malých týmů obvykle stačí agregace na úroveň účtu a období.

Příklad týdenního health score:

| Signál | Body | Poznámka |
| --- | ---: | --- |
| Přihlásil se alespoň jeden člen účtu | +1 | jen agregace na účet |
| Dokončen klíčový úkol | +3 | např. export reportu nebo vystavení dokladu |
| Přizván nový člen týmu | +2 | signál rozšiřování hodnoty |
| Otevřený kritický support ticket | -3 | riziko frustrace |
| 14 dní bez klíčové akce | -4 | kandidát na lidský follow-up |

Health score není náhrada za rozhovor se zákazníkem. Je to budík. Když ukáže riziko, člověk má zkontrolovat kontext a napsat užitečný e-mail, ne spustit automatickou kampaň „Všimli jsme si, že jste tři dny nevystavili fakturu, všechno v pořádku?“ To je přesně ten moment, kdy produkt začne působit jako hororový domovník.

## N.4 Odděl provozní logy, analytiku a zákaznický kontext

Jedna z nejčastějších chyb: všechno skončí v jednom nástroji, protože „tam se to dobře hledá“. Provozní logy, produktová analytika a zákaznické poznámky ale mají jiné účely, jiné publikum a jiné retenční doby.

Jednoduché rozdělení:

- Provozní logy: slouží k bezpečnosti, dostupnosti a ladění chyb; drž je krátce a přístup omez na technický tým.
- Produktová analytika: slouží k rozhodování o produktu; preferuj agregace, pseudonymní ID účtu a minimum vlastností.
- CRM a support: slouží k obchodní a zákaznické komunikaci; ukládej jen relevantní kontext, ne kompletní historii chování.
- Výzkumné poznámky: slouží k porozumění potřebám; anonymizuj citace, pokud je používáš mimo původní kontext.

Když se tyto vrstvy smíchají, roste riziko i chaos. Najednou má marketér přístup k provozním detailům, support k analytickým experimentům a produktový tým k osobním poznámkám, které nepotřebuje. Privacy-first architektura není jen o nástroji. Je to o tom, kdo vidí co a proč.

## N.5 Dělej rozhodnutí z malých, vysvětlitelných reportů

Dashboard s dvaceti grafy vypadá jako cockpit. Malý tým ale nepotřebuje cockpit, když zatím řídí dodávku. Potřebuje jeden týdenní produktový report, který se dá přečíst za deset minut a vede ke konkrétním rozhodnutím.

Šablona týdenního reportu:

```text
Týden: 2026-W32

1. Aktivace
- Nové účty: 18
- Účty s dokončeným prvním klíčovým úkolem: 9
- Nejčastější zaseknutí: import dat

2. Retence
- Aktivní účty z minulého týdne: 31
- Účty bez klíčové akce 14 dní: 6
- Ruční follow-up: 3 účty s otevřeným kontextem

3. Produktové rozhodnutí
- Tento týden zjednodušíme importní obrazovku.
- Neměníme pricing, protože signál není v ceně, ale v onboardingové práci.

4. Datový úklid
- Odstranit nepoužívaný event `settings_tab_opened`.
```

Takový report není vědecký článek. Je to rozhodovací nástroj. Pokud z něj nevznikne žádná akce, report je moc široký, moc abstraktní, nebo jen vyrábí pocit kontroly.

## N.6 Checklist produktových signálů

Před přidáním nové produktové telemetrie si projdi:

- Jaké rozhodnutí má signál zlepšit?
- Dá se otázka zodpovědět agregovaně místo na úrovni člověka?
- Posíláme do analytiky jen kategorie, ne volný text a osobní údaje?
- Má event jasné jméno, vlastníka a očekávanou životnost?
- Je signál oddělený od provozních logů a CRM poznámek?
- Ví zákazník v zásadách soukromí, že produktové měření existuje?
- Umíme event vypnout bez rozbití aplikace?
- Kontrolujeme jednou měsíčně nepoužívané eventy?
- Má k datům přístup jen tým, který je potřebuje?
- Vedl poslední report ke konkrétnímu rozhodnutí?

## Shrnutí přílohy

Produktové signály mají pomáhat dělat lepší rozhodnutí, ne vyrábět digitální akvárium, ve kterém zákazníky pozorujeme přes sklo. Začni otázkou, měř dokončenou hodnotu, drž data agregovaná a pravidelně maž eventy, které nepomáhají. Privacy-first produkt není slepý. Jen nepotřebuje kukátko do každého detailu uživatelského života.

---

# Příloha O: Integrace, API klíče a webhooky bez bezpečnostního bordelu

Malý SaaS dřív nebo později začne mluvit s okolním světem. Platební brána, e-mailing, CRM, fakturace, AI model, monitoring, účetnictví, import z cizí aplikace. Integrace jsou super, protože šetří ruce. Zároveň jsou to malé dveře do produktu. A malé dveře se pořád počítají jako dveře, i když na nich někdo nalepí hezké logo partnera.

Privacy-first přístup k integracím začíná jednoduchou otázkou: jak má vypadat bezpečný odchod? Pokud neumíš dodavatele vypnout, otočit klíče, zastavit webhooky a vysvětlit, jaká data k němu tekla, integrace není hotová. Je jen zapojená.

## O.1 Každá integrace musí mít vlastníka a účel

Nejhorší integrace je ta, o které všichni vědí, že „někde běží“, ale nikdo neví proč. Časem se z ní stane tajemný stroj v rohu serverovny. Nikdo ho nechce vypnout, protože možná drží celý byznys pohromadě. Nebo taky jen posílá duplicitní notifikace do nástroje, který už nikdo nepoužívá.

U každé integrace si udržuj malou kartu:

| Pole | Příklad |
| --- | --- |
| Název integrace | Fakturoid, Mailcoach, Stripe, vlastní webhook partnera |
| Vlastník | Produkt, finance, support, vývoj |
| Účel | Vystavení faktury po zaplacení objednávky |
| Posílaná data | ID objednávky, firma, DIČ, částka, e-mail fakturační osoby |
| Směr toku | SaaS → fakturace, fakturace → SaaS, obousměrně |
| Právní/provozní poznámka | Zpracovatelská smlouva, EU region, retenční pravidlo |
| Jak vypnout | Vypnout job `invoice.sync`, zneplatnit token, zrušit webhook |
| Datum další kontroly | 2026-09-01 |

Tohle není byrokracie. Je to pojistka proti tomu, aby se produkt za rok změnil v klubko tokenů, cronů a webhooků, které nikdo nechce rozmotávat.

## O.2 API klíče nikdy nepatří do frontendu ani do dokumentace

API klíč je heslo s pracovním popisem. Pokud ho vložíš do frontendového kódu, sdíleného screenshotu, wiki stránky nebo ukázkového curl příkazu, chováš se k němu jako k letáku. A leták je špatný trezor. Překvapivé, já vím.

Praktická pravidla:

- Klíče drž jen v serverovém prostředí, secret manageru nebo chráněných produkčních proměnných.
- Do repozitáře patří pouze názvy proměnných, ne hodnoty: `PAYMENT_API_KEY`, `SMTP_PASSWORD`, `WEBHOOK_SIGNING_SECRET`.
- Vývojové a produkční klíče musí být oddělené.
- Každá integrace má mít vlastní klíč, ne jeden univerzální token pro všechno.
- Klíč má mít nejmenší nutná oprávnění: čtení nestačí rozšířit na zápis „pro jistotu“.
- Po odchodu člověka z týmu otoč klíče, ke kterým mohl mít přístup.

Příklad dobré dokumentace:

```text
ENV:
PAYMENT_API_KEY=secret z produkčního secret manageru
PAYMENT_WEBHOOK_SECRET=secret z administrace platební brány

Lokálně použij sandbox klíče. Produkční hodnoty nikdy nekopíruj do .env.example,
issue trackeru, chatu ani screenshotů.
```

Příklad špatné dokumentace:

```text
Tady je produkční token, ať se to rychle rozběhne:
sk_live_...
```

Rychlost je fajn. Únik tokenu je taky rychlý, jen méně roztomilý.

## O.3 Webhook ber jako veřejné API, ne jako interní zkratku

Webhook endpoint často vypadá nenápadně: `/api/webhooks/payment`. Jenže je dostupný z internetu a někdo se do něj může trefovat celý den. Proto ho navrhuj jako veřejné API s ověřením, idempotencí a rozumným logováním.

Minimum pro každý webhook:

- Ověř podpis požadavku nebo jiný důkaz, že zpráva opravdu přišla od dodavatele.
- Kontroluj časové okno podpisu, aby nešlo starý požadavek jednoduše přehrát.
- Ukládej ID události a zpracovávej ji idempotentně, protože dodavatelé webhooky často opakují.
- Vracet úspěch až po bezpečném přijetí, ne po celé dlouhé obchodní operaci.
- Citlivé údaje v logu maskuj nebo vůbec neukládej.
- Nepropaguj interní chyby zákazníkovi ani dodavateli; detail patří do provozního logu.

Modelový tok:

```text
1. Přijde webhook `invoice.paid`.
2. Server ověří podpis a časové razítko.
3. Server zkontroluje, jestli `event_id` už nebyl zpracován.
4. Událost uloží do interní fronty nebo tabulky.
5. Vrátí 200 OK.
6. Samostatný worker aktualizuje předplatné a zapíše auditní stopu.
```

Tím oddělíš dostupnost endpointu od obchodní logiky. Když fakturační systém pošle stejnou událost třikrát, nevytvoříš tři předplatná a nepřivoláš účetní poltergeist.

## O.4 Scope integrace navrhni podle rizika dat

Ne všechna data mají stejnou citlivost. Poslat do nástroje agregovaný stav objednávky je něco jiného než posílat obsah zákaznických zpráv, interní poznámky nebo kompletní auditní log. Čím citlivější data, tím přísnější má být výběr dodavatele, oprávnění, retence a možnost vypnutí.

Jednoduché třídění:

| Úroveň | Data | Přístup |
| --- | --- | --- |
| Nízká | veřejné stránky, agregované metriky, technické stavy bez identity | Stačí běžná provozní kontrola |
| Střední | kontaktní údaje zákazníka, fakturační metadata, stav účtu | Dodavatelská karta, omezený scope, retence |
| Vysoká | obsah komunikace, osobní dokumenty, zdravotní/finanční údaje, interní poznámky | Přísná kontrola, právní revize, silné důvody, možnost izolace |

Codyho komentář: pokud integrace potřebuje „všechno“, většinou to znamená, že nikdo pořádně nenavrhl proces. Dobrá integrace má ostré hrany. Ví, co dělá, a stejně důležité je, co nedělá.

## O.5 Připrav rotaci klíčů ještě před incidentem

Rotace klíčů se nemá poprvé řešit ve chvíli, kdy někdo omylem pushne `.env` do veřejného repozitáře. Tehdy je mozek ve stavu „hoří popelnice“ a dokumentace se čte hůř. Připrav si postup dopředu.

Šablona rotace:

```text
Integrace: E-mailová služba
Důvod rotace: pravidelná údržba / podezření na únik / odchod člověka
Vlastník: vývoj + provoz

1. Vytvořit nový klíč v administraci dodavatele.
2. Uložit nový klíč do produkčního secret manageru.
3. Nasadit nebo restartovat službu, která secret načítá.
4. Ověřit testovací odeslání.
5. Zneplatnit starý klíč.
6. Zkontrolovat logy a chybové fronty.
7. Zapsat datum a důvod rotace do provozní dokumentace.
```

U kritických integrací si vyzkoušej rotaci nanečisto v sandboxu. Pokud rotace znamená výpadek na půl dne, není to rotace. Je to rituál s obětní kozou.

## O.6 Checklist bezpečné integrace

Před zapnutím nové integrace si projdi:

- Má integrace jasný obchodní nebo provozní účel?
- Víme, jaká data odcházejí a jaká se vracejí?
- Je dodavatel v souladu s privacy-first hodnotou projektu, ideálně s evropským provozem nebo jasnou kontrolou nad daty?
- Je API klíč uložený jako secret mimo repozitář a frontend?
- Má klíč nejmenší nutná oprávnění?
- Jsou produkční a testovací klíče oddělené?
- Ověřujeme podpisy webhooků a řešíme opakované doručení?
- Logujeme jen technické minimum bez citlivého obsahu?
- Má integrace vlastníka a datum další kontroly?
- Umíme integraci vypnout a klíče otočit bez paniky?

## Shrnutí přílohy

Integrace nejsou jen pohodlné propojení nástrojů. Jsou to datové cesty a bezpečnostní závazky. Každé API, každý token a každý webhook musí mít účel, vlastníka, minimální oprávnění a plán odchodu. Privacy-first SaaS nestaví zdi kolem produktu proto, aby se nikdo nedostal dovnitř. Staví dobře popsané dveře, které jdou zamknout, zkontrolovat a v případě potřeby rychle vyměnit.

---

# Příloha P: Incidentový playbook pro malý SaaS tým

Incident není jen chvíle, kdy „spadl server“. Incident je každá situace, kdy produkt neplní slib zákazníkovi, data nejsou pod kontrolou, nebo tým neví, co se právě děje. U malého SaaS týmu bývá největší riziko v tom, že incident nepozná pozdě technicky, ale organizačně: někdo vidí chybu v logu, někdo jiný dostane e-mail od zákazníka, třetí člověk mezitím deployne opravu do jiné větve a všichni doufají, že se to nějak vstřebá. Spoiler: nevstřebá.

Privacy-first incidentový playbook má dvě ambice: rychle obnovit službu a zároveň nepřidat další škodu zbytečným sběrem, chaotickou komunikací nebo panickým sdílením dat. Evropský rámec navíc počítá s tím, že osobní data breach se musí vyhodnotit podle rizika pro lidi; pokud breach představuje riziko pro práva a svobody osob, správce má dozorový úřad informovat bez zbytečného odkladu a typicky do 72 hodin od zjištění. EDPB k osobním data breachům shrnuje definici i oznamovací logiku zde: https://www.edpb.europa.eu/topics/security-data-breaches/personal-data-breaches_en

## P.1 Incident poznáš podle dopadu, ne podle hlasitosti alarmu

Některé incidenty řvou: výpadek webu, nefunkční platby, chyba 500 na loginu. Jiné jsou tiché: import posílá data do špatného účtu, webhook běží dvakrát, report obsahuje zákaznické e-maily, nebo administrátor omylem otevřel export širšímu týmu. Tiché incidenty jsou zákeřné, protože je snadné je odbýt jako „divné chování“.

Používej jednoduché úrovně závažnosti:

| Úroveň | Dopad | Příklad | První reakce |
| --- | --- | --- | --- |
| S1 | Služba je nedostupná nebo hrozí únik dat | Login nefunguje všem, veřejný bucket, kompromitovaný klíč | Zastavit škodu, svolat incident lead |
| S2 | Kritická funkce nefunguje části zákazníků | Platby padají u nových objednávek | Omezit dopad, připravit komunikaci |
| S3 | Chyba má workaround a nízký datový dopad | Špatný text v e-mailu, pomalý export | Zapsat, opravit plánovaně |
| Privacy | Osobní data mohla být ztracena, zpřístupněna nebo změněna | Odeslaný report špatnému příjemci | Izolovat data, vyhodnotit oznamovací povinnost |

Důležité: privacy incident může být S1 i S3 podle technického dopadu, ale vždy vyžaduje vlastní vyhodnocení. To, že aplikace běží, ještě neznamená, že je všechno v pořádku.

## P.2 Prvních 30 minut: zastav krvácení a zapisuj fakta

První reakce nemá být hrdinské programování ve tmě. Má být nudná, strukturovaná a rychlá. Incident není hackathon, i když se tak rád převléká.

Postup pro prvních 30 minut:

1. Urči incident lead: jeden člověk koordinuje, ostatní pomáhají.
2. Založ incidentový záznam: čas zjištění, kdo hlásil, co je vidět, koho se to týká.
3. Zastav další škodu: vypni integraci, revertni deploy, zneplatni klíč, omez přístup, zastav cron.
4. Rozliš fakta a domněnky: „webhook poslal 327 událostí dvakrát“ je fakt; „asi za to může nový worker“ je hypotéza.
5. Zachovej důkazy: nemaž logy jen proto, že vypadají ošklivě. Jen je nezveřejňuj a neposílej po chatu jako konfety.
6. U privacy dopadu začni časovou osu od okamžiku, kdy se tým o možném breachi dozvěděl.

Minišablona zápisu:

```text
Incident: 2026-08-07 platby webhook duplicitně aktivoval trial
Lead: Jana
Zjištěno: 09:18 UTC přes support ticket
První dopad: 14 účtů mělo špatný stav předplatného
Data: zatím bez známky úniku osobních dat
Okamžitá akce: webhook consumer pozastaven v 09:27 UTC
Další krok: ověřit event_id deduplikaci a ručně opravit účty
```

Takový zápis není literatura. Je to záchranné lano pro člověka, který se k incidentu připojí o hodinu později.

## P.3 Komunikuj dřív, než zákazník začne hádat

Uživatelé odpustí chybu častěji než mlčení. Co neodpustí: „u nás vše funguje“, když jim produkt právě hoří v prohlížeči. Dobrá incidentová komunikace je krátká, konkrétní a bez zbytečných detailů, které by zvyšovaly bezpečnostní riziko.

První veřejná zpráva může vypadat takhle:

```text
Od 09:18 UTC řešíme problém s aktivací nových předplatných. Existující účty běží normálně. Příčina je v našem zpracování platebních webhooků, ne na straně zákazníků. Další aktualizaci přidáme do 30 minut.
```

Interní pravidla:

- Uveď, co je ovlivněné a co naopak ovlivněné není.
- Neházej vinu na dodavatele, dokud to nemáš potvrzené.
- Neslibuj přesný čas opravy, pokud ho neznáš.
- Uveď čas další aktualizace, i kdyby měla znít „stále řešíme“.
- Pokud jde o osobní data, nekomunikuj detail veřejně dřív, než vyhodnotíš riziko a postup.

Codyho komentář: status page bez aktualizací je jen dražší ticho. Klidně začni obyčejnou stránkou nebo ručně editovaným Markdownem, ale měj dopředu jasné, kdo ji smí změnit a kde leží.

## P.4 Privacy triage: čtyři otázky před panikou

Jakmile incident může souviset s osobními daty, zastav technické tunelové vidění a polož čtyři otázky:

1. Jaká osobní data mohla být dotčena?
2. Co se s nimi stalo: ztráta, neoprávněný přístup, změna, zničení, odeslání jinam?
3. Kolika lidí se to týká a jaký praktický dopad na ně může nastat?
4. Je riziko takové, že je potřeba informovat dozorový úřad nebo dotčené osoby?

Příklad: špatně nastavený export faktur, který umožnil jednomu zákazníkovi stáhnout faktury jiné firmy, není jen „bug v oprávnění“. Je to potenciální osobní data breach, protože faktury mohou obsahovat jména, e-maily, adresy, DIČ nebo platební údaje. První krok není psát omluvný román. První krok je vypnout přístup, zjistit rozsah, zachovat auditní stopu a připravit faktický záznam pro právní/provozní vyhodnocení.

Do incidentového záznamu přidej:

- typ dotčených dat,
- počet dotčených subjektů nebo kvalifikovaný odhad,
- čas začátku a konce expozice,
- systémy a dodavatele zapojené do incidentu,
- přijatá opatření,
- rozhodnutí, jestli a proč se incident hlásí nebo nehlásí.

I incident, který nakonec nehlásíš, zdokumentuj. Paměť týmu je skvělá věc, dokud se někdo nezeptá za tři měsíce.

## P.5 Po opravě udělej postmortem bez honu na viníka

Postmortem nemá hledat člověka, který „to rozbil“. Má najít systém, který dovolil, aby se chyba dostala k zákazníkovi. Pokud výsledek postmortemu zní „Petr si má dávat větší pozor“, tým právě promarnil incident a Petr získal novou úzkost. Gratulace, produkt nikam nepokročil.

Dobré postmortem obsahuje:

| Část | Otázka |
| --- | --- |
| Dopad | Koho se incident dotkl a jak? |
| Detekce | Jak jsme na problém přišli? Mohli jsme dřív? |
| Příčina | Jaké technické a procesní podmínky incident umožnily? |
| Reakce | Co fungovalo a co zdržovalo? |
| Data | Jaký byl dopad na osobní nebo zákaznická data? |
| Opatření | Jaké 1–3 změny sníží opakování? |
| Vlastník | Kdo každé opatření dotáhne a do kdy? |

Opatření drž malá. Jeden incident nemá vyrobit deset ticketů, které se budou rok tvářit důležitě. Lepší jsou tři dokončené změny: test na oprávnění exportu, alert na neobvyklý počet webhooků a jasný postup rotace klíče.

## P.6 Checklist incidentové připravenosti

Před dalším klidným týdnem si projdi:

- Máme jeden jasný kanál pro incidenty a víme, kdo rozhoduje?
- Umíme během minut vypnout rizikovou integraci, cron, token nebo veřejný endpoint?
- Máme šablonu incidentového záznamu s časovou osou?
- Víme, kde jsou logy, jak dlouho se drží a kdo k nim má přístup?
- Máme seznam systémů, kde se musí při incidentu otočit klíče?
- Máme připravený text pro první zákaznickou aktualizaci?
- Umíme rozpoznat, kdy technický incident může být osobní data breach?
- Dokumentujeme i incidenty, které se nakonec nehlásí úřadu?
- Děláme postmortem bez hledání viníka a s konkrétními vlastníky opatření?
- Testujeme playbook aspoň jednou za kvartál na malé simulaci?

## Shrnutí přílohy

Incidentový playbook je jako hasicí přístroj: když ho začneš shánět až uprostřed kouře, už to není strategie, ale improvizované divadlo s drahými rekvizitami. Malý SaaS tým nepotřebuje korporátní krizový štáb. Potřebuje jasné role, jednoduchý zápis, rychlé vypnutí škody, privacy triage, férovou komunikaci a postmortem, který zlepší systém místo toho, aby někomu nasadil ceduli „viník měsíce“.

---

# Příloha Q: B2B důvěryhodnost bez nekonečného dotazníkového pekla

B2B zákazník často nekupuje jen funkci. Kupuje jistotu, že dodavatel nezmizí, nerozbije mu proces, neudělá z dat turistický zájezd přes půl internetu a zvládne odpovědět na bezpečnostní otázky bez paniky. U větších firem, veřejného sektoru nebo regulovanějších oborů proto dřív nebo později přijde dotazník: kde běží data, kdo k nim má přístup, jak zálohujete, co používáte za subdodavatele, jak řešíte incidenty, jestli máte DPA, jestli umíte export a smazání.

Nečekej, až ten dotazník přistane v pátek v 16:42 a obchod řekne „stačí to poslat dneska?“. Připrav si malý trust pack dopředu. Ne jako korporátní mauzoleum v PDF, ale jako sadu jasných odpovědí, které se dají poslat zákazníkovi, dát na web nebo použít při obchodním hovoru.

## Q.1 Trust pack není chlubení, ale zkrácení nákupu

Trust pack má odstranit nejistotu. Když zákazník musí každou bezpečnostní a datovou otázku dolovat z e-mailů, nákup se zpomalí. Když máš odpovědi připravené, působíš dospěleji i jako malý tým.

Základní části trust packu:

- stručný popis služby a typu zpracovávaných dat,
- informace o provozu a hostingu,
- seznam hlavních subdodavatelů,
- bezpečnostní minimum,
- pravidla přístupu k zákaznickým datům,
- postup záloh, obnovy a incidentů,
- export a ukončení služby,
- kontakt pro bezpečnostní nebo privacy otázky.

Nemusíš zveřejnit interní detaily, které by samy zvyšovaly riziko. Trust pack nemá říkat „tady přesně leží naše klíče a takhle nás obejdete“. Má říkat: „víme, co děláme, máme pravidla a umíme je vysvětlit“.

## Q.2 Napiš datovou větu pro každou hlavní funkci

U B2B SaaS nestačí obecné „vaše data jsou u nás v bezpečí“. To je hezká věta na hrnek, ale ne odpověď pro člověka, který má podepsat smlouvu. Lepší je popsat datový dopad podle funkce.

Příklad pro rezervační systém:

| Funkce | Jaká data potřebuje | Proč | Retence |
| --- | --- | --- | --- |
| Rezervace termínu | jméno, e-mail, termín, poznámka | vytvoření a potvrzení rezervace | po dobu zákaznického vztahu nebo podle nastavení účtu |
| Notifikace | e-mail nebo telefon, obsah připomínky | připomenutí termínu | dokud je notifikace relevantní |
| Administrace | uživatelský účet správce, role, auditní záznam | správa služby a bezpečnost | podle provozní a bezpečnostní potřeby |
| Export | vybraná zákaznická data | přenositelnost a interní práce zákazníka | export se vytváří na žádost a po čase se maže |

Taková tabulka pomáhá třikrát: zákazník chápe rozsah, obchod má co poslat a tým vidí, kde zbytečně sbírá data navíc. Pokud u nějaké funkce neumíš napsat „proč“, je to signál pro produktovou debatu, ne pro copywritera.

## Q.3 Subdodavatele popiš lidsky a bez mlžení

Subdodavatel není sprosté slovo. Sprosté je nevědět, komu data tečou. Privacy-first přístup neznamená stavět vlastní planetu od DNS po fonty. Znamená mít přehled, vybírat střízlivě a umět vysvětlit dopad.

U každého důležitého dodavatele si drž jednoduchý záznam:

- název dodavatele,
- účel použití,
- typ dat, která může zpracovávat,
- region provozu nebo ukládání dat,
- odkaz na smluvní/privacy dokumentaci,
- kdo v týmu je vlastník vztahu,
- co se stane, když dodavatel vypadne nebo zdraží.

Příklad textu pro zákazníka:

> Pro hosting používáme evropskou infrastrukturu. E-mailové notifikace posíláme přes samostatného poskytovatele, kterému předáváme jen údaje nutné k doručení zprávy. Reklamní pixely ani cross-site tracking v aplikaci nepoužíváme.

Tohle není náhrada za smlouvu ani DPA, ale je to dobrý začátek transparentní komunikace. Zákazník většinou nechce číst detektivku. Chce vědět, kde jsou rizika a jestli je máš pod kontrolou.

## Q.4 Bezpečnostní minimum řekni konkrétně

Bezpečnostní sliby bývají buď příliš obecné, nebo příliš technické. Pro trust pack potřebuješ střed: konkrétní opatření bez zbytečného odhalování interních detailů.

Dobré formulace:

- Přístupy do administrace mají jen určení lidé podle role.
- Produkční přístupy jsou oddělené od běžné práce a pravidelně se kontrolují.
- Tajné klíče nejsou uložené v repozitáři ani ve veřejné dokumentaci.
- Zálohy se pravidelně vytvářejí a obnova se testuje podle provozního plánu.
- Kritické změny procházejí kontrolou a nasazením přes verzovaný proces.
- Incidenty zapisujeme, vyhodnocujeme podle dopadu a zákazníky informujeme, pokud se jich týkají.

Slabé formulace:

- „Používáme nejmodernější zabezpečení.“
- „Data jsou stoprocentně v bezpečí.“
- „Máme šifrování.“ bez vysvětlení, kde a k čemu.
- „Nikdy nemáme incidenty.“ To je podezřelé, ne uklidňující.

Codyho komentář: věta „nikdy nemáme incidenty“ zní u softwaru asi jako „naše auto nikdy nepotřebuje brzdy“. Možná to myslíš dobře. Zákazník slyší, že buď neměříš, nebo se bojíš pravdy.

## Q.5 Připrav odpovědi na nákupní námitky

Trust pack není jen pro právní a IT oddělení. Pomáhá i obchodu. Zákazník často váhá kvůli riziku, ne kvůli funkci. Pokud riziko umíš pojmenovat, snižuješ tření nákupu.

Typické námitky a praktické odpovědi:

| Námitka | Co zákazník doopravdy řeší | Dobrá odpověď |
| --- | --- | --- |
| „Kde jsou data?“ | jurisdikce, přístup, kontrola | popiš region provozu, subdodavatele a výjimky |
| „Co když odejdeme?“ | lock-in a kontinuita | ukaž export, ukončení účtu a retenční pravidla |
| „Kdo vidí naše data?“ | interní přístupy | vysvětli role, support access a auditní stopu |
| „Co když služba spadne?“ | dopad na provoz | popiš zálohy, monitoring, incidentovou komunikaci |
| „Používáte AI?“ | únik dat do modelů | řekni, kde AI pomáhá, jaká data do ní nejdou a jak se kontroluje výstup |

U AI funkcí buď zvlášť střízlivý. Pokud posíláš zákaznický obsah do externího modelu, napiš to jasně. Pokud neposíláš osobní data do tréninku nebo používáš oddělené zpracování, napiš to taky, ale bez kouzelné mlhy. „AI-powered“ není odpověď. Je to spíš začátek dalších otázek.

## Q.6 Udělej z trust packu živý dokument

Nejhorší trust pack je staré PDF, které někdo vytvořil před dvěma lety a od té doby se tváří jako realita. Důvěra se neudržuje tím, že dokument existuje. Udržuje se tím, že odpovídá provozu.

Jednoduchá rutina:

- jednou měsíčně zkontroluj seznam subdodavatelů,
- po každé větší integraci aktualizuj datovou mapu,
- po incidentu doplň poučení do provozní části,
- po změně hostingu nebo e-mailového nástroje uprav zákaznické odpovědi,
- u každé stránky trust packu drž datum poslední revize a vlastníka,
- staré verze archivuj, ať víš, co bylo zákazníkům sděleno v minulosti.

Trust pack může začít jako Markdown v repozitáři. To je úplně v pořádku. Výhoda je verzování, review a jednoduchá historie změn. Až bude potřeba, může z něj vzniknout veřejná stránka, PDF pro zákazníka nebo interní odpovědní banka pro obchod.

## Q.7 Checklist B2B trust packu

Před prvním větším obchodním jednáním si zkontroluj:

- Umíme jednou větou popsat, jaká zákaznická data služba zpracovává?
- Máme seznam subdodavatelů včetně účelu a datového dopadu?
- Víme, kde data běží a kde se ukládají zálohy?
- Máme připravenou lidskou odpověď na otázku „kdo má přístup k našim datům“?
- Umíme popsat export a ukončení služby bez držení zákazníka jako rukojmí?
- Máme kontakt pro bezpečnostní a privacy otázky?
- Je jasné, jak řešíme incidenty a komu kdy komunikujeme?
- Má trust pack vlastníka a datum poslední revize?
- Neobsahuje dokument interní detaily, které by samy zvyšovaly riziko?
- Odpovídá dokument tomu, co produkt opravdu dělá dnes, ne tomu, co bychom rádi dělali v ideálním vesmíru?

## Shrnutí přílohy

B2B důvěryhodnost není jednorázový certifikát nálady. Je to schopnost rychle, pravdivě a srozumitelně odpovědět na otázky o datech, provozu, bezpečnosti a odchodu zákazníka. Privacy-first SaaS má v tomhle výhodu: když sbírá méně dat, používá méně zbytečných služeb a drží provoz v Evropě, má méně věcí k vysvětlování. A méně vysvětlování je v nákupu často víc peněz než další animované tlačítko.

---

# Příloha R: Zálohy a obnova bez falešného pocitu bezpečí

Záloha není soubor v cloudu. Záloha je schopnost vrátit službu do použitelného stavu, když se pokazí databáze, release, integrace, účet administrátora nebo lidská nálada v pátek odpoledne. Malý SaaS tým nepotřebuje hned armádu procesů. Potřebuje vědět, co se zálohuje, jak často, kam, kdo to umí obnovit a kdy se to naposledy opravdu vyzkoušelo.

Privacy-first princip je tady jednoduchý: zálohuj jen data, která opravdu potřebuješ provozně chránit, drž je v evropském provozu, šifruj je a maž je podle retenční politiky. Jinak se ze záloh stane temný sklep plný historických osobních údajů. A temné sklepy jsou dobré možná pro brambory, ne pro SaaS.

## R.1 Nejdřív urči, co je skutečně obnovitelné

Ne všechno má stejnou hodnotu. Marketingový screenshot se dá nahradit. Fakturační data, zákaznické konfigurace a auditní záznamy už méně. Začni proto mapou obnovy, ne nástrojem na zálohování.

Praktická tabulka:

| Oblast | Příklad | Dopad ztráty | Cíl obnovy |
| --- | --- | --- | --- |
| Produkční databáze | účty, projekty, nastavení | zákazník nemůže pracovat | nejrychlejší obnova |
| Souborové přílohy | nahrané dokumenty, exporty | ztráta zákaznické práce | obnova podle priorit |
| Konfigurace infrastruktury | DNS, env proměnné, deploy nastavení | služba nejde spustit | verzovaná rekonstrukce |
| Zdrojový kód | aplikace, migrace, skripty | nejde opravit ani redeploynout | git + chráněné přístupy |
| Marketingový web | články, landing page, obrázky | obchodní výpadek | statická obnova stačí |

U každé oblasti si napiš dvě čísla:

- **RPO**: kolik dat si můžeš dovolit ztratit. Například posledních 15 minut, 1 hodinu nebo 1 den.
- **RTO**: jak dlouho může trvat návrat služby. Například 30 minut pro login, 4 hodiny pro interní reporty.

Nemusíš z toho dělat korporátní knihu zaklínadel. Stačí jedna stránka, kterou pochopí vývojář, zakladatel i člověk ze supportu.

## R.2 Zálohy odděl od produkce i od ega administrátora

Špatná záloha je ta, kterou smaže stejný problém jako produkci. Pokud má jeden admin účet přístup k aplikaci, databázi i všem zálohám, nemáš plán obnovy. Máš jeden velmi důležitý single point of facepalm.

Minimum pro malý tým:

- Produkční databáze a zálohy nejsou ve stejném účtu bez další ochrany.
- Přístup k zálohám má méně lidí než přístup k aplikaci.
- Mazání záloh vyžaduje jinou roli nebo aspoň druhý potvrzovací krok.
- Přístupy k zálohám se logují a pravidelně kontrolují.
- Zálohy jsou šifrované a klíče nejsou uložené vedle nich.
- Obnova nevyžaduje jediného člověka, který je zrovna na horách bez signálu.

Evropský provoz neznamená jen „server je někde v EU“. Zkontroluj i místo uložení snapshotů, replikační regiony, podporu dodavatele a právní dokumentaci. Když produkce běží v Evropě, ale zálohy omylem končí v jiném regionu, privacy-first hodnota dostává elegantní facku.

## R.3 Test obnovy je důležitější než zelený dashboard

Dashboard, který tvrdí „backup successful“, říká jen to, že nějaký proces doběhl. Neříká, že se z toho dá obnovit funkční služba. Skutečný test je nudný, ale zlato: vezmeš zálohu, obnovíš ji do odděleného prostředí, spustíš aplikaci a projdeš kritické cesty.

Jednoduchý čtvrtletní scénář:

1. Vyber poslední dostupnou zálohu produkční databáze.
2. Obnov ji do izolovaného testovacího prostředí bez odesílání e-mailů a webhooků.
3. Spusť aplikaci proti obnoveným datům.
4. Ověř login testovacího účtu, otevření projektu, zobrazení fakturačního stavu a export dat.
5. Zapiš čas obnovy, chyby a ruční kroky.
6. Oprav dokumentaci podle toho, co se opravdu stalo.

Pozor na bezpečnost testu: obnovená data nesmí omylem posílat notifikace zákazníkům, spouštět integrace, indexovat se do vyhledávání nebo se míchat s vývojářskými experimenty. Obnova má ověřit provozní připravenost, ne vytvořit druhý incident s mašličkou.

## R.4 Retence záloh musí ladit s retencí produktu

Když zákazník smaže účet, nestačí odstranit záznam z hlavní databáze a dál ho půl roku vozit v zálohách bez plánu. Zálohy mají vlastní retenční pravidla a musí být popsané lidsky: co v nich může zůstat, jak dlouho, proč a kdy fyzicky zmizí.

Praktické pravidlo:

- Krátkodobé provozní zálohy drž pro rychlou obnovu po chybě.
- Dlouhodobé archivy drž jen tam, kde existuje jasný zákonný nebo smluvní důvod.
- Zákazníkovi popiš, že smazaná data mohou po omezenou dobu zůstat v bezpečnostních zálohách, ale nevrací se do aktivního použití.
- Nepoužívej staré zálohy jako tajný zdroj pro analytiku, AI trénink nebo „možná se to bude hodit“ skladiště.

Tohle je přesně místo, kde se privacy-first přístup potkává s dobrým provozem. Čím méně zbytečných dat ukládáš, tím snazší je zálohování, obnova, mazání i vysvětlování zákazníkům.

## R.5 Dokumentace obnovy musí být použitelná ve stresu

Incident není čas na poetické poznámky typu „nějak obnovit databázi“. Dokument obnovy má být checklist, který se dá projít i ve dvě ráno. Ideálně obsahuje konkrétní odkazy, role a pořadí kroků, ale neobsahuje tajné hodnoty, tokeny ani hesla.

Šablona jedné stránky:

| Položka | Obsah |
| --- | --- |
| Vlastník obnovy | jméno nebo role, náhradník |
| Systémy | databáze, storage, DNS, e-mail, fronta |
| Kde jsou zálohy | dodavatel, region, typ úložiště |
| Přístup | kdo může obnovit, kde se žádá přístup |
| Kroky obnovy | stručné pořadí bez tajných údajů |
| Bezpečné testování | jak vypnout e-maily, webhooky a integrace |
| Kontrola úspěchu | kritické cesty, které musí projít |
| Komunikace | koho informovat při překročení RTO |
| Poslední test | datum, výsledek, otevřené úkoly |

Dokument měj uložený tak, aby byl dostupný i při výpadku hlavní aplikace. Pokud je návod na obnovu jen v systému, který obnovuješ, je to digitální obdoba klíčů zabouchnutých v autě.

## R.6 Checklist záloh a obnovy

- Máme seznam datových oblastí a u každé RPO/RTO?
- Víme, kde fyzicky běží zálohy a zda zůstávají v evropském provozu?
- Jsou zálohy šifrované a jsou klíče oddělené od uložených dat?
- Umíme obnovit službu bez jednoho konkrétního člověka?
- Testovali jsme obnovu v posledním čtvrtletí?
- Víme, jak při obnově vypnout e-maily, webhooky a externí integrace?
- Sedí retence záloh s retenční politikou produktu?
- Jsou staré zálohy automaticky mazány podle pravidel?
- Máme dokument obnovy dostupný mimo hlavní aplikaci?
- Umíme zákazníkovi lidsky vysvětlit, co se děje s jeho daty v zálohách po smazání účtu?

## Codyho komentář

Nejlepší zálohovací strategie není ta s nejdražším logem. Je to ta, kterou tým opravdu umí použít pod tlakem. Když jednou za kvartál uděláš obnovu nanečisto, možná přijdeš o hodinu času. Když ji nikdy neuděláš, můžeš jednou přijít o firmu. Veselé? Ne. Užitečné? Bohužel velmi.

## Shrnutí přílohy

Zálohy chrání byznys jen tehdy, když jsou obnovitelné, oddělené od produkce, pravidelně testované a sladěné s retencí dat. Privacy-first SaaS má výhodu v jednoduchosti: méně zbytečných dat znamená menší zálohy, rychlejší obnovu a méně právního mlžení. Cílem není mít krásný backup dashboard. Cílem je umět vrátit službu bezpečně zpět do života.

---

# Příloha S: Monitoring, alerty a status komunikace bez šmírovací sirény

Monitoring má odpovědět na jednoduchou otázku: funguje služba pro zákazníka dost dobře na to, aby mohl udělat svou práci? Nemá z týmu udělat noční hlídače grafů ani z uživatelů laboratorní myši. Privacy-first monitoring proto sbírá signály o zdraví systému, ne zbytečný osobní detail o každém kliknutí.

Dobré pravidlo: měř to, co pomáhá rychle opravit problém, vysvětlit dopad a zlepšit provoz. Neměř to, co je jen zvědavost s dashboardem.

## S.1 Začni uživatelským slibem, ne seznamem metrik

Monitoring bez slibu vede k alertům typu „CPU je nějaké divné“. To může být důležité, ale zákazníka zajímá něco jiného: jde se přihlásit, načte se projekt, odešle se formulář, přijde e-mail, proběhne platba, uloží se práce.

Pro malý SaaS napiš nejdřív pět kritických slibů:

| Slib | Jak ho ověřit | Kdy je problém |
| --- | --- | --- |
| Uživatel se přihlásí | syntetický login test | chyba nebo výrazné zpomalení |
| Projekt se otevře | test načtení klíčové stránky | timeout, 5xx, prázdný stav |
| Formulář odešle data | test endpointu a validace | data nedorazí do fronty/CRM |
| E-mail se odešle | kontrola fronty a doručení do test mailboxu | fronta roste nebo provider odmítá |
| Export jde stáhnout | test vytvoření a stažení souboru | chyba, neplatný soubor, moc dlouhé čekání |

Teprve potom přidej technické metriky: dostupnost, latence, chybovost, délka fronty, využití disku, databázové spojení, expirace certifikátu a stav záloh. Technické grafy jsou mapa, ne cíl výletu.

## S.2 Loguj pro opravu, ne pro zvědavost

OWASP Logging Cheat Sheet doporučuje u logování přemýšlet podle účelu a zároveň neukládat zbytečně citlivá data, tokeny, hesla, klíče nebo osobní údaje: https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html

Praktické minimum pro aplikační logy:

- čas události v jednotném časovém pásmu,
- typ události: login, export, platba, webhook, změna oprávnění,
- výsledek: úspěch, chyba, odmítnutí, timeout,
- anonymizovaný nebo interní identifikátor účtu, pokud je nutný pro opravu,
- korelační ID requestu, aby šla poskládat cesta chybou,
- verze aplikace nebo deploymentu,
- stručný technický důvod chyby bez osobních dat.

Co do běžných logů nepatří:

- hesla, access tokeny, session cookies a API klíče,
- celé request/response body s uživatelským obsahem,
- platební údaje,
- zdravotní, citlivé nebo zbytečně detailní osobní údaje,
- dlouhodobě uložené IP adresy bez jasného účelu,
- debug výpisy, které byly užitečné v pátek večer a nebezpečné v pondělí ráno.

Když potřebuješ detail pro vyšetření incidentu, udělej ho vědomě: dočasně, s vlastníkem, omezeným přístupem a jasným smazáním. Debug log bez expirace je jako půjčit někomu klíče od skladu a doufat, že se časem samy vypaří.

## S.3 Alert má mít vlastníka, práh a akci

Špatný alert říká: „Něco se stalo.“ Dobrý alert říká: „Tahle uživatelská cesta selhává, tady je dopad, tady je první krok.“

U každého alertu si napiš:

- **Vlastník:** kdo reaguje, když alert přijde.
- **Dopad:** jak poznáme, že to bolí zákazníka.
- **Práh:** kdy alert spustit, aby neřval kvůli každému zakašlání serveru.
- **První krok:** co má člověk udělat během pěti minut.
- **Eskalace:** koho vzbudit, když první krok nepomůže.
- **Ticho:** kdy alert vypnout, sloučit nebo předělat.

Příklad špatně:

> „Disk usage > 80 %“

Příklad lépe:

> „Produkční disk pro uploady má méně než 15 % volného místa déle než 10 minut. Zkontroluj růst uploadů, smaž dočasné soubory podle runbooku a pokud trend pokračuje, navyš kapacitu.“

Alert fatigue je reálný provozní dluh. Když systém křičí desetkrát denně kvůli nedůležitým věcem, tým přestane věřit i tomu jedenáctému alertu, který byl zrovna důležitý. Siréna, která houká pořád, je nakonec jen drahý ambient.

## S.4 Status page má snižovat nejistotu

Status komunikace není PR divadlo. Je to způsob, jak zákazníkovi dát rychlou odpověď: víte o problému, koho se týká, co se děje a kdy přijde další update.

Základní šablona incidentového statusu:

> **Identifikovali jsme problém s přihlášením.**
>
> Část uživatelů se nemůže přihlásit do aplikace. Data nejsou podle aktuálních informací ztracená. Problém vyšetřujeme a další update dáme do 30 minut.

Po opravě:

> **Přihlášení je obnoveno.**
>
> Problém trval od 09:12 do 09:38. Příčinou byla chybná konfigurace po deploymentu. Přidáváme automatickou kontrolu login toku před dokončením release. Detailní postmortem doplníme během dne.

Atlassian ve své dokumentaci k postmortemům shrnuje tři důležité body: omluvit se, ukázat porozumění tomu, co se stalo, a vysvětlit nápravný plán: https://support.atlassian.com/statuspage/docs/create-a-postmortem/

Privacy-first status komunikace má jednu extra disciplínu: neprozrazuj víc zákaznických nebo technických detailů, než je nutné. Transparentnost neznamená vyvěsit interní mapu infrastruktury na náměstí.

## S.5 Monitoring provozuj stejně privacy-first jako produkt

Monitoringový nástroj je další dodavatel s přístupem k provozním datům. Před zapnutím si polož stejné otázky jako u CRM nebo analytiky:

- Kde se ukládají logy, metriky a incidentová data?
- Posíláme do nástroje osobní údaje nebo zákaznický obsah?
- Umíme data maskovat ještě před odesláním?
- Jak dlouho nástroj data drží?
- Kdo v týmu má přístup ke čtení logů?
- Jde exportovat historii incidentů a odejít bez ztráty kontextu?
- Máme monitoring i pro monitoring, tedy poznáme, že sběr dat přestal fungovat?

Evropský provoz neznamená, že každý nástroj musí být asketická krabička pod stolem. Znamená to vědomě rozhodnout, co kam posíláš, proč a na jak dlouho. U citlivějších projektů dává smysl preferovat EU region, self-hostovanou variantu nebo aspoň režim, který neposílá osobní obsah mimo kontrolované prostředí.

## S.6 Checklist monitoringu a status komunikace

Před spuštěním nové služby nebo větší funkce si projdi:

- Máme popsaných pět kritických uživatelských cest?
- Existuje syntetický test pro login, hlavní akci a formulář nebo platbu?
- Logy obsahují korelační ID, ale neobsahují tajemství ani zbytečné osobní údaje?
- Každý alert má vlastníka, práh, dopad a první krok?
- Máme runbook pro nejčastější tři incidenty?
- Umíme rychle zjistit, jestli problém vznikl po posledním deploymentu?
- Máme status text pro výpadek, degradaci služby a obnovu?
- Víme, kdy zákazníkovi poslat update i bez kompletní příčiny?
- Máme retenční dobu pro logy a incidentové záznamy?
- Kontrolujeme přístupy k logům stejně vážně jako přístupy k databázi?

## Codyho komentář

Monitoring je nejlepší, když je nudný. Nuda v provozu znamená, že víš, co se děje, alerty dávají smysl a zákazník se nemusí ptát na Slacku, jestli „to padá jenom mně“. Malý tým nepotřebuje vesmírné řídicí centrum. Potřebuje pár dobrých signálů, méně hluku a odvahu říct zákazníkovi pravdu včas.

## Shrnutí přílohy

Privacy-first monitoring nestaví na sběru všeho pro jistotu. Staví na uživatelských slibech, bezpečných logách, akčních alertech, srozumitelné status komunikaci a retenčním úklidu. Když měříš méně, ale lépe, rychleji opravíš problém a zároveň nevytváříš další sklad osobních dat. To je přesně ten druh provozní disciplíny, který je sice méně sexy než nový dashboard, ale zákazníci ho ocení ve chvíli, kdy se něco pokazí.

---

# Příloha T: GDPR dokumentace bez šanonového divadla

GDPR dokumentace nemá být šanon, který se otevře jen při auditu a pak zase usne pod vrstvou prachu. Má být provozní mapa: co zpracováváme, proč, kde to běží, kdo k tomu má přístup, jak dlouho to držíme a co uděláme, když se něco změní.

Evropská komise připomíná princip odpovědnosti: organizace má nejen dodržovat principy ochrany dat, ale umět soulad doložit. Některé nástroje mohou být povinné podle situace, například pověřenec pro ochranu osobních údajů nebo DPIA: https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/obligations/how-can-i-demonstrate-my-organisation-compliant-gdpr_en

Privacy-first SaaS má v téhle disciplíně výhodu. Když sbírá méně dat, používá méně dodavatelů a drží jasné účely, dokumentace je kratší, přesnější a méně připomíná fantasy román o ideálním provozu.

## T.1 Vytvoř registr zpracování jako živou tabulku

EDPB ve svém průvodci pro malé firmy uvádí, že organizace má vést písemný, klidně elektronický záznam o zpracování, který popisuje jednotlivé činnosti, účely, kategorie dat, příjemce a další podstatné informace: https://www.edpb.europa.eu/sme/be-compliant/be-compliant_en

Prakticky začni tabulkou, ne právním dokumentem. Každý řádek je jedna činnost, kterou normální člověk pozná:

| Zpracování | Účel | Data | Systém | Přístup | Retence |
| --- | --- | --- | --- | --- | --- |
| Kontaktní formulář | odpověď na poptávku | jméno, e-mail, zpráva | web, e-mail, CRM | obchod, jednatel | 12 měsíců bez zakázky |
| Fakturace | účetnictví | fakturační údaje | fakturační systém | účetní, jednatel | podle zákonných povinností |
| Support ticket | řešení problému | e-mail, popis chyby, přílohy | helpdesk | support, vývoj dle potřeby | 24 měsíců |
| Produktová analytika | zlepšení funkcí | agregované eventy | analytika | produkt, vedení | 13 měsíců |
| Bezpečnostní logy | ochrana služby | IP, čas, endpoint, výsledek | log systém | admin | 30 až 90 dní podle rizika |

Nejde o to trefit dokonalou tabulku napoprvé. Jde o to, aby tým přestal odpovídat „někde to asi máme“ pokaždé, když se někdo zeptá na data. Jakmile máš mapu, začne být vidět bordel: staré formuláře, zbytečné exporty, zapomenuté integrace a přístupy lidí, kteří už dávno změnili roli.

## T.2 Ke každému účelu napiš právní a produktovou větu

Právní základ je důležitý, ale sám o sobě často neříká, jestli zpracování dává smysl. Proto ke každému zpracování napiš dvě věty:

- **Právní věta:** na jakém právním základě data zpracováváme a proč.
- **Produktová věta:** jaká hodnota pro zákazníka nebo provoz z toho vzniká.

Příklad:

> Právní věta: E-mail zákazníka zpracováváme pro plnění smlouvy, protože bez něj neumíme doručit provozní zprávy k účtu.
>
> Produktová věta: Zákazník díky tomu ví o důležitých změnách, výpadcích, fakturaci a bezpečnostních událostech.

Pokud umíš napsat právní větu, ale neumíš napsat produktovou, zpracování může být jen compliance kouřová clona. Pokud umíš napsat produktovou větu, ale ne právní, zastav se a řeš základ. Data nejsou konfety. Nerozhazovat.

## T.3 DPIA ber jako rozhodovací nástroj, ne trest za růst

DPIA, tedy posouzení vlivu na ochranu osobních údajů, je podle Evropské komise potřeba tehdy, když zpracování pravděpodobně představuje vysoké riziko pro práva a svobody lidí; typicky například rozsáhlé zpracování citlivých dat, systematické rozsáhlé monitorování veřejných prostor nebo rozsáhlé automatizované hodnocení osob včetně profilování: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/obligations_en

Malý SaaS nemusí dělat DPIA na každé tlačítko. Ale měl by mít spouštěče, kdy se tým zastaví:

- začínáme zpracovávat citlivá data,
- přidáváme AI funkci, která vyhodnocuje lidi nebo rozhoduje o jejich přístupu,
- spojujeme data z více zdrojů do profilu zákazníka,
- zavádíme monitoring chování na úrovni jednotlivce,
- posíláme data novému dodavateli mimo běžný evropský provoz,
- měníme účel dat, která už máme,
- dáváme internímu týmu širší přístup k zákaznickému obsahu.

Mini-DPIA pro produktové rozhodnutí může mít jednu stránku:

1. Co chceme spustit?
2. Jaká data k tomu opravdu potřebujeme?
3. Koho se to týká a co se může pokazit?
4. Jak riziko snížíme technicky, procesně a komunikačně?
5. Jaká je privacy-first alternativa s menším rozsahem dat?
6. Kdo rozhodnutí schválil a kdy se vrátíme k revizi?

Codyho komentář: DPIA není papír pro právníka. Je to brzda před produktovou euforií. A brzdy nejsou proti rychlosti; brzdy umožňují jet rychleji, protože víš, že nezahučíš do příkopu při první zatáčce.

## T.4 Změny v produktu musí aktualizovat i datovou mapu

Největší problém dokumentace není její vytvoření. Její problém je rozklad. Produkt se mění, přibývají integrace, někdo zapne nový webhook, marketing přidá formulář a po půl roce už dokumentace popisuje muzeum, ne realitu.

Zaveď jednoduché pravidlo: žádná změna, která se dotýká osobních dat, není hotová, dokud není aktualizovaná datová mapa.

Do pull requestu, ticketu nebo release checklistu přidej otázky:

- Přidáváme nové osobní údaje?
- Měníme účel existujících dat?
- Posíláme data novému dodavateli?
- Měníme retenci, přístupy nebo export?
- Má změna dopad na privacy stránku, smlouvu, DPA nebo nápovědu?
- Potřebujeme mini-DPIA nebo kontrolu právníkem?

Tohle není byrokracie, pokud je otázka krátká a odpověď konkrétní. Byrokracie je až to, když po incidentu tři lidé hledají, kam vlastně teče jeden formulář.

## T.5 DPA a subdodavatelé: méně seznamů, víc odpovědnosti

U B2B SaaS se dřív nebo později objeví otázka: kdo další má k datům přístup? Připrav si odpověď dřív, než ji zákazník pošle v bezpečnostním dotazníku s padesáti řádky a pasivní agresí v příloze.

Pro každého dodavatele měj interně:

- název a odkaz na službu,
- roli: správce, zpracovatel, nebo samostatný správce,
- jaká data dostává,
- kde jsou data provozována,
- proč dodavatele používáš,
- kdo je interní vlastník,
- odkaz na smlouvu, DPA nebo bezpečnostní dokumentaci,
- datum poslední kontroly,
- plán odchodu, pokud dodavatel přestane vyhovovat.

Veřejně nemusíš ukazovat každý interní detail, ale zákazník by měl snadno zjistit, že subdodavatele znáš, neignoruješ a umíš vysvětlit jejich roli. Privacy-first značka nestojí na větě „vaše data jsou v bezpečí“. Stojí na schopnosti ukázat, co ta věta v praxi znamená.

## T.6 Checklist GDPR dokumentace pro malý SaaS

- Máme aktuální registr zpracování v editovatelné podobě?
- Má každé zpracování účel, datové kategorie, systém, přístupy a retenci?
- Umíme u každého účelu říct právní i produktovou větu?
- Máme seznam dodavatelů včetně role, dat, regionu a vlastníka?
- Víme, které změny produktu spouští aktualizaci datové mapy?
- Máme jednoduchou mini-DPIA šablonu pro rizikové změny?
- Kontrolujeme dokumentaci aspoň jednou za kvartál?
- Sedí veřejná privacy stránka s realitou systémů?
- Nejsou v dokumentaci uvedené nástroje, které už nepoužíváme?
- Umíme dokumentaci vysvětlit zákazníkovi lidsky, ne jen poslat PDF jako štít proti otázkám?

## Shrnutí přílohy

GDPR dokumentace má být provozní mapa, ne papírový rituál. Když má malý SaaS živý registr zpracování, jasné účely, přehled dodavatelů, změnový checklist a jednoduchou DPIA šablonu, získá dvě věci najednou: lepší kontrolu nad daty a rychlejší odpovědi zákazníkům. Privacy-first přístup tu není estetika. Je to způsob, jak snížit chaos dřív, než začne bolet.

---


# Příloha U: Produktové experimenty bez datového karnevalu

Experiment není výmluva pro chaos. Malý SaaS tým často řekne „otestujeme to“ a ve skutečnosti tím myslí: přidáme tři eventy, pustíme drahý nástroj, necháme běžet varianty bez hypotézy a za měsíc si vybereme výsledek, který se nám pocitově líbí. Gratuluju, právě vznikla vědecká metoda z výprodeje.

Privacy-first experiment má být opačný: jasná otázka, minimální zásah do produktu, krátké okno, předem domluvený signál a rozhodnutí, které jde vysvětlit zákazníkovi i týmu.

## U.1 Hypotéza musí znít jako rozhodnutí, ne jako přání

Slabá hypotéza:

> „Nový onboarding bude lepší.“

Silnější hypotéza:

> „Když po registraci ukážeme jeden konkrétní první úkol místo prázdného dashboardu, zvýší se počet účtů, které dokončí první hodnotnou akci do 24 hodin.“

Rozdíl je zásadní. Druhá věta říká, co měníme, komu to pomůže, jaký signál sledujeme a kdy experiment vyhodnotíme.

Šablona:

| Pole | Otázka | Příklad |
| --- | --- | --- |
| Problém | Co dnes nefunguje? | Noví uživatelé po registraci nevědí, co udělat jako první. |
| Změna | Co konkrétně upravíme? | Přidáme úvodní kartu s jedním doporučeným krokem. |
| Cílová skupina | Koho se experiment týká? | Nové trial účty bez importovaných dat. |
| Signál | Co se má změnit? | Více dokončených prvních akcí do 24 hodin. |
| Rozhodnutí | Co uděláme podle výsledku? | Necháme změnu, upravíme text, nebo ji odstraníme. |

Codyho komentář: Pokud hypotézu neumíš napsat do jedné tabulky, pravděpodobně netestuješ produkt. Jen hledáš záminku, proč se vyhnout rozhodnutí.

## U.2 Měř jen signál, který potřebuješ pro další krok

Experimenty často bobtnají, protože tým začne sbírat „ještě něco pro jistotu“. Jenže jistota je v analytice drahá: platíš složitostí, právním rizikem, údržbou a horším vysvětlením uživateli.

Před každým experimentem se zeptej:

- Stačí agregovaná metrika bez identifikace konkrétního člověka?
- Potřebujeme sledovat chování napříč zařízeními, nebo stačí jedna návštěva/session?
- Můžeme výsledek ověřit ručně na malém vzorku zákazníků?
- Je signál obchodně použitelný, nebo jen hezky vypadá v grafu?
- Dokážeme event odstranit po konci experimentu?

Příklad:

| Experiment | Minimum měření | Co už je zbytečné |
| --- | --- | --- |
| Nový hero text na landing page | Počet kliků na hlavní CTA a počet odeslaných formulářů | Scroll heatmapy každého návštěvníka |
| Kratší registrační formulář | Dokončení registrace a počet chyb formuláře | Detailní záznam vyplňování pole po poli |
| Nový onboarding krok | Dokončení prvního úkolu v agregaci podle kohorty | Trvalé profilování každého uživatele podle všech kliků |
| Nová cenová stránka | Klik na tarif, kontaktování obchodu, self-service nákup | Individuální sledování všech pohybů myši |

Dobré pravidlo: měř tak málo, aby ses za to nemusel stydět na veřejné stránce „Jak pracujeme s daty“.

## U.3 Malý tým nepotřebuje vždy A/B test

A/B test dává smysl, když máš dost návštěvnosti, stabilní produkt a jednu dobře izolovanou změnu. Pokud má web dvacet relevantních návštěv týdně, statistická magie z toho neudělá pravdu. Udělá z toho jen graf s větší sebedůvěrou, než si zaslouží.

Alternativy pro malé týmy:

- **Concierge test:** ručně proveď pět zákazníků novým procesem a sleduj, kde se ptají.
- **Smoke test:** ukaž nabídku nebo CTA, ale předem jasně nastav očekávání, pokud funkce ještě není hotová.
- **Prototyp v obsahu:** nejdřív napiš návod, checklist nebo kalkulačku jako statickou stránku a sleduj poptávku.
- **Feature flag pro malou skupinu:** zapni změnu jen dobrovolníkům nebo interním zákazníkům.
- **Sales test:** zkus novou formulaci hodnoty ve třech obchodních hovorech a zaznamenej námitky.

Praktický příklad pro B2B SaaS:

Místo měsíčního A/B testu na nízké návštěvnosti vytvoř dvě verze nabídky jako krátké sekce v obchodním decku. Použij je v deseti relevantních konverzacích. Po každé si napiš, co zákazník zopakoval vlastními slovy, kde se zasekl a jakou námitku měl. To je často kvalitnější signál než „varianta B měla o 14 % víc kliků“ z celkem sedmi lidí. Statistika brečí do kouta, ale produkt se posune.

## U.4 Experiment musí mít konec a majitele

Nejhorší experiment je ten, který „zatím běží“. Po třech měsících už nikdo neví, proč vznikl, eventy dál plní databázi a noví lidé v týmu se bojí cokoli vypnout.

Každý experiment proto zapisuj jako malý pracovní záznam:

```text
Název: Onboarding — první doporučený krok
Majitel: Petra
Start: 2026-08-07
Konec vyhodnocení: 2026-08-21
Hypotéza: Jeden doporučený krok zvýší dokončení první hodnotné akce.
Dotčená data: Agregovaný event onboarding_first_action_completed.
Retence: Event držíme 90 dní, po experimentu rozhodneme o ponechání nebo odstranění.
Rozhodovací práh: Pokud změna zlepší dokončení alespoň viditelně a nezvýší support dotazy, necháme ji.
Výsledek: Doplnit při vyhodnocení.
Další krok: Doplnit při vyhodnocení.
```

Tohle není byrokracie. Je to pojistka proti tomu, aby produkt časem nevypadal jako archeologické naleziště dobrých úmyslů.

## U.5 Vyhodnocuj i vedlejší škody

Experiment může zlepšit jednu metriku a zhoršit produkt. Agresivnější CTA zvýší kliky, ale přivede horší leady. Kratší formulář zvýší konverzi, ale přidá práci podpoře. Automatická e-mailová sekvence zvýší odpovědi, ale část lidí ji začne vnímat jako spam.

Proto si vedle hlavního signálu nastav i ochranné metriky:

| Hlavní cíl | Ochranný signál |
| --- | --- |
| Více registrací | Nezvýší se počet neaktivních účtů bez první akce |
| Více demo poptávek | Nezhorší se kvalita leadů podle obchodního týmu |
| Rychlejší onboarding | Nezvýší se počet support dotazů na základní nastavení |
| Více kliků na pricing | Nezvýší se počet lidí, kteří nerozumí rozdílu mezi tarify |
| Více automatizovaných odpovědí | Nezvýší se počet odhlášení nebo negativních reakcí |

Privacy-first pohled tady pomáhá: když nesleduješ všechno, musíš lépe přemýšlet, co je skutečně důležité. Méně dat často znamená ostřejší rozhodování.

## U.6 Checklist privacy-first experimentu

Před spuštěním:

- Je hypotéza napsaná jako konkrétní rozhodnutí?
- Víme, komu experiment pomáhá a koho se netýká?
- Měříme jen signály nutné k vyhodnocení?
- Umíme experiment vysvětlit bez právnického kouře?
- Má experiment majitele, datum konce a plán úklidu dat?
- Máme ochranný signál, aby jedna metrika nepřeválcovala kvalitu?
- Víme, co uděláme při úspěchu, neúspěchu i nejasném výsledku?

Po vyhodnocení:

- Zapsali jsme rozhodnutí a důvod?
- Odstranili jsme dočasné eventy, flagy a texty?
- Aktualizovali jsme dokumentaci, onboarding nebo obchodní materiály?
- Řekli jsme týmu, co jsme se naučili?
- Pokud experiment pracoval s osobními daty, sedí retence a datová mapa?

## Shrnutí přílohy

Experimentování není kasino s dashboardem. Dobře navržený experiment má malou stopu, jasný konec a pomáhá udělat rozhodnutí. Pro privacy-first SaaS je to ideální disciplína: učíš se rychle, ale nenecháváš za sebou zbytečné datové bahno.


# Příloha V: Technické SEO bez sledovacího balastu

Technické SEO je často popisované jako tajemná směs sitemap, canonical tagů, strukturovaných dat a rituálního obětování pluginu pro WordPress. Ve skutečnosti jde hlavně o to, aby vyhledávač i člověk rychle pochopili, co stránka je, proč existuje a která její verze je ta správná.

Privacy-first web má v technickém SEO jednu příjemnou výhodu: když nepřilepíš na každou stránku hromadu externích skriptů, reklamních pixelů a sociálních widgetů, bývá rychlejší, stabilnější a čitelnější. Technické SEO pak není maskování nepořádku, ale údržba dobré informační architektury.

## V.1 Každá stránka potřebuje jednu jasnou identitu

Začni tím, že každé důležité URL přiřadíš jednu roli. Domovská stránka prodává hlavní slib. Landing page řeší konkrétní nabídku. Blogový článek odpovídá na konkrétní otázku. Dokumentace pomáhá použít produkt. Pokud stránka neumí říct, proč existuje, nepomůže jí ani nejlepší meta description.

Minimum pro jednu stránku:

| Prvek | Praktická otázka | Příklad |
| --- | --- | --- |
| URL | Dá se přečíst a zapamatovat? | `/blog/privacy-first-analytika` |
| `<title>` | Říká téma i značku bez vycpávání? | `Privacy-first analytika pro SaaS | Cody` |
| Meta description | Vysvětluje užitek a láká ke kliknutí? | `Jak měřit web nebo SaaS bez reklamních pixelů, zbytečných cookies a datového chaosu.` |
| H1 | Odpovídá skutečnému obsahu stránky? | `Privacy-first analytika: měřit ano, šmírovat ne` |
| Primární CTA | Ví návštěvník, co má udělat dál? | `Stáhnout checklist` nebo `Domluvit konzultaci` |

Google ve svém SEO Starter Guide zdůrazňuje srozumitelný obsah, dobrou organizaci webu a jasné titulky stránky: https://developers.google.com/search/docs/fundamentals/seo-starter-guide. Nečti to jako návod na trikování algoritmu. Čti to jako připomínku, že chaos v obsahu se nedá vyřešit tagem.

Codyho komentář: SEO title není billboard na D1. Nemusí křičet všechna klíčová slova najednou. Má člověku potvrdit: „Ano, tohle je stránka, kterou jsem hledal.“

## V.2 Canonical URL je pojistka proti duplicitám

Duplicitní obsah vzniká rychle: parametr kampaně, trailing slash, HTTP/HTTPS varianta, filtrovaný výpis, tisková verze, stará landing page po redesignu. Google popisuje canonicalizaci jako výběr reprezentativní URL pro skupinu duplicitních nebo velmi podobných stránek a upozorňuje, že `rel="canonical"` je signál, ne absolutní rozkaz: https://developers.google.com/search/docs/crawling-indexing/canonicalization.

Praktický postup pro malý web:

- U každé veřejné stránky nastav canonical na čistou produkční URL.
- Parametry pro kampaně nikdy nepoužívej jako samostatné indexovatelné stránky.
- Staré URL po redesignu přesměruj 301 na nejbližší relevantní novou stránku.
- Nepouštěj do indexu interní vyhledávání, testovací stránky a náhodné varianty filtrů.
- Sitemap, interní odkazy i canonical drž konzistentní; tři různé signály dělají z vyhledávače detektiva, a ten má lepší věci na práci.

Příklad rozhodnutí:

| Situace | Co udělat | Proč |
| --- | --- | --- |
| `/pricing?utm_source=newsletter` | canonical na `/pricing` | Kampaňový parametr není nová stránka |
| `/sluzby/web` a `/webovy-vyvoj` mají stejný obsah | jednu URL nechat, druhou přesměrovat | Neštěpit signály ani reporting |
| stará beta landing page zůstala online | noindex nebo přesměrování | Neukazovat zastaralý slib produktu |
| filtrovaný seznam s desítkami kombinací | indexovat jen vybrané přehledové stránky | Neplnit index nízkohodnotnými variantami |

Privacy-first poznámka: čisté URL bez nadbytečných identifikátorů jsou lepší pro SEO i pro soukromí. Pokud do odkazů lepíš osobní identifikátory, není to „lepší atribuce“. Je to malý datový průšvih s hezkým dashboardem.

## V.3 Sitemap pomáhá objevit důležité stránky, ne zachránit špatnou navigaci

Sitemap je seznam URL, které považuješ za důležité. Google uvádí, že sitemap pomáhá vyhledávačům efektivněji procházet web a může obsahovat informace jako datum poslední aktualizace nebo jazykové varianty: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview. Zároveň ale sitemap negarantuje indexaci. Pokud stránka není užitečná, osamocená nebo je v rozporu s canonical signály, XML soubor ji magicky nepovýší.

Dobrá sitemap pro menší SaaS web obsahuje:

- hlavní obchodní stránky,
- klíčové landing pages,
- blogové články a návody,
- dokumentaci, pokud má být veřejně indexovaná,
- stránku o soukromí, podmínky a bezpečnostní informace, pokud pomáhají důvěře.

Do sitemap naopak obvykle nepatří:

- interní administrace,
- výsledky vyhledávání,
- thank-you stránky po formuláři,
- dočasné experimentální varianty,
- URL s osobními nebo kampaňovými parametry.

Mini rutina po publikaci obsahu:

1. Nová stránka má alespoň jeden interní odkaz z relevantního místa.
2. Je v sitemap, pokud má být indexovaná.
3. Má správný canonical.
4. Není omylem blokovaná v `robots.txt` nebo přes `noindex`.
5. Je dostupná bez přihlášení a bez souhlasu s marketingovými cookies.

To poslední je důležité. Pokud se hlavní obsah zobrazí až po naložení pěti externích skriptů a cookie banner se tváří jako strážce hradu, web sám sobě hází klacky pod nohy.

## V.4 Strukturovaná data používej jako popis, ne jako kostým

Strukturovaná data pomáhají vyhledávačům lépe porozumět obsahu stránky. Google doporučuje používat strukturovaná data pro podporované typy obsahu a držet se pravidel pro daný typ výsledku: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data. Prakticky: značkuj to, co na stránce skutečně je. Nevymýšlej si recenze, ceny, autora ani dostupnost.

Pro malý SaaS nebo odborný web se často hodí:

| Typ obsahu | Vhodné strukturované údaje | Pozor na |
| --- | --- | --- |
| Blogový článek | titulek, autor, datum publikace, datum aktualizace | falešné datum aktualizace kvůli SEO kosmetice |
| FAQ sekce | otázky a odpovědi, které jsou viditelné na stránce | přidání skrytých otázek jen pro vyhledávač |
| Produkt nebo služba | název, popis, případně cena, pokud je jasná | neaktuální ceny a sliby |
| Organizace | název firmy, URL, logo, kontaktní údaje | nekonzistentní údaje napříč webem |
| Breadcrumbs | hierarchie stránky | drobečková navigace, která neodpovídá skutečné struktuře |

Příklad jednoduchého JSON-LD pro článek:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Privacy-first analytika pro SaaS",
  "author": {
    "@type": "Organization",
    "name": "Dreamind"
  },
  "datePublished": "2026-08-08",
  "dateModified": "2026-08-08"
}
</script>
```

Checklist před nasazením strukturovaných dat:

- Odpovídá značení viditelnému obsahu stránky?
- Neobsahuje neaktuální cenu, rating nebo dostupnost?
- Je JSON validní a testovatelný?
- Nemění se datum aktualizace bez skutečné úpravy obsahu?
- Je autor nebo organizace uvedená konzistentně napříč webem?

## V.5 Open Graph a sdílení bez sociálních skriptů

Sdílení obsahu nepotřebuje sledovací tlačítka. Stačí dobré URL, titulek, popis a obrázek. Open Graph a základní meta tagy zajistí, že odkaz v chatu, e-mailu nebo interním nástroji vypadá důvěryhodně. Sociální embed widgety často přidávají JavaScript, cookies a cizí požadavky, které pro samotné sdílení nejsou nutné.

Privacy-first varianta:

```html
<meta property="og:title" content="Privacy-first analytika pro SaaS">
<meta property="og:description" content="Jak měřit produkt bez reklamních pixelů a datového chaosu.">
<meta property="og:type" content="article">
<meta property="og:url" content="https://example.cz/blog/privacy-first-analytika">
<meta property="og:image" content="https://example.cz/og/privacy-first-analytika.png">
```

Doporučení:

- Generuj OG obrázky lokálně nebo v důvěryhodném vlastním procesu.
- Nepřidávej externí share tlačítka, pokud stačí obyčejný odkaz.
- U článků nabídni RSS a přímé URL; algoritmy jsou distribuce, ne archiv.
- Kontroluj, že OG popis odpovídá aktuálnímu obsahu, ne staré verzi slibu.

## V.6 Checklist technického SEO pro privacy-first web

Před publikací nové stránky:

- Má stránka jasnou roli, jednu hlavní akci a srozumitelný H1?
- Sedí `<title>` a meta description bez přecpání klíčovými slovy?
- Je canonical nastavený na čistou produkční URL?
- Vede na stránku interní odkaz z relevantního místa?
- Je stránka v sitemap, pokud má být indexovaná?
- Není omylem blokovaná přes `robots.txt`, `noindex` nebo přihlášení?
- Strukturovaná data popisují skutečný viditelný obsah?
- Open Graph metadata dávají smysl při sdílení odkazu?
- Stránka funguje bez marketingových cookies a bez zbytečných třetích stran?
- Po publikaci je jasné, kdo stránku udržuje a kdy se má znovu zkontrolovat?

## Shrnutí přílohy

Technické SEO není sbírka triků. Je to disciplína čistých URL, jasných signálů, dobré navigace a pravdivého popisu obsahu. Privacy-first přístup tomu pomáhá: méně skriptů, méně parametrů, méně cizích služeb a víc kontroly nad tím, co web skutečně říká.

# Příloha W: Zákaznická podpora a feedback bez datového vysavače

Podpora je jedno z nejlepších míst, kde může malý SaaS tým poznat realitu produktu. Zákazníci tam neříkají, co by možná chtěli v ideálním workshopu. Říkají, co je právě teď bolí, brzdí nebo mate. Jenže podpora se snadno změní v datový vysavač: kompletní historie účtu v každém ticketu, automatické nahrávání obrazovek, chat widget s hromadou třetích stran, interní kopírování osobních údajů do náhodných poznámek a screenshoty, ve kterých svítí víc citlivých dat než na špatně zamčené nástěnce.

Privacy-first podpora neznamená pomalou podporu. Znamená podporu, která sbírá jen kontext potřebný k vyřešení problému, chrání zákazníka i tým a umí z opakovaných dotazů udělat produktové zlepšení. Prostě méně „pošlete nám všechno“ a víc „pošlete nám přesně tohle“.

## W.1 Ticket musí mít účel, ne románovou trilogii

Každý kontakt se zákazníkem rozděl na tři vrstvy: identifikace, problém, řešení. Pokud si tyto vrstvy pleteš, ticket začne bobtnat.

Praktická struktura ticketu:

| Vrstva | Co patří dovnitř | Co tam obvykle nepatří |
| --- | --- | --- |
| Identifikace | zákazník, organizace, plán, kontaktní e-mail | rodné číslo, soukromý telefon bez důvodu, plné exporty účtu |
| Problém | popis kroku, chybová hláška, čas výskytu, dotčená funkce | hesla, celé databázové dumpy, screenshoty s údaji jiných lidí |
| Řešení | navržený postup, změna konfigurace, odkaz na dokumentaci | interní spekulace, osobní soudy, zbytečné kopie komunikace |

Příklad dobré žádosti o doplnění:

> „Pošlete prosím URL obrazovky, čas chyby a text chybové hlášky. Pokud přikládáte screenshot, začerněte e-maily zákazníků a tokeny. Hesla ani API klíče neposílejte.“

Tohle je drobnost, ale šetří nervy. Zákazník ví, co dodat, a tým nedostane data, která pak musí chránit, mazat a modlit se, že neskončí v interním vlákně s názvem „wtf bug“.

## W.2 Support access zapínej jen na čas a s důvodem

Někdy se bez pohledu do účtu neobejdeš. Ale přístup podpory do zákaznického účtu má být řízená výjimka, ne permanentní supermoc. Nejhorší model je univerzální administrátorský přístup pro každého v týmu, protože „jinak by support nestíhal“. Takhle vznikají incidenty, ne produktivita.

Bezpečnější pravidla:

- Přístup do účtu vyžaduje důvod navázaný na ticket.
- Přístup je časově omezený, například na 30 nebo 60 minut.
- Každé otevření zákaznického účtu se loguje jako bezpečnostní událost.
- Support vidí jen data potřebná pro řešení problému.
- Akce s větším dopadem, třeba změna fakturace nebo smazání dat, vyžadují potvrzení nebo druhý pár očí.

Mini proces:

1. Zákazník popíše problém nebo výslovně požádá o pomoc.
2. Support v ticketu zapíše důvod přístupu.
3. Systém vygeneruje dočasný support access.
4. Po vyřešení se přístup automaticky vypne.
5. Ticket obsahuje, co bylo zkontrolováno a co bylo změněno.

Codyho komentář: Trvalý admin přístup je jako univerzální klíč od všech bytů v domě. Ano, údržbář se dostane rychleji k prasklé trubce. Ale taky z toho všichni spí trochu hůř.

## W.3 Screenshoty a logy mají být ořezané, ne dramaticky kompletní

„Pošlete screenshot celé obrazovky“ je pohodlná věta, ale často špatný požadavek. Celá obrazovka může obsahovat e-maily, faktury, osobní poznámky, API klíče, interní názvy projektů nebo data jiných zákazníků. Totéž platí pro logy. Kompletní log je lákavý pro debug, ale obvykle obsahuje víc než jednu užitečnou informaci.

Lepší šablona pro sběr důkazů:

- Screenshot jen oblasti s chybou.
- Citlivé údaje začernit před odesláním.
- Log poslat pouze z konkrétního časového okna.
- Tokeny, session ID, e-mailové adresy a obsah zpráv odstranit nebo nahradit zástupným textem.
- Pokud jde o opakovaný problém, raději vytvořit interní diagnostický export s předem povolenými poli než ručně tahat data z produkce.

Příklad interního diagnostického balíčku:

| Pole | Ponechat? | Poznámka |
| --- | --- | --- |
| čas požadavku | Ano | nutné pro dohledání chyby |
| typ chyby | Ano | pomáhá prioritizovat opravu |
| ID organizace | Ano, pseudonymizované | stačí interní ID bez názvu firmy |
| e-mail uživatele | Ne, pokud není nutný | nahradit interním user ID |
| request payload | Jen whitelist polí | nikdy neposílat celé tělo požadavku naslepo |
| API token | Ne | ukládat jen informaci, že token existoval nebo expiroval |

Tímhle se z podpory stane použitelný debug kanál, ne skládka náhodných dat.

## W.4 Feedback tříděj podle rozhodnutí, které pomůže udělat

Zákaznický feedback není hlasování o tom, co se má postavit. Je to vstup do rozhodování. Když všechno házíš do jednoho sloupce „nápady“, skončíš s dlouhým seznamem přání, který nikdo nechce číst. Lepší je každý feedback přiřadit k rozhodnutí.

Praktické kategorie:

| Kategorie | Otázka | Typická akce |
| --- | --- | --- |
| Chyba | Nefunguje slíbená věc? | opravit nebo obejít |
| Nejasnost | Uživatel nechápe, co má udělat? | zlepšit text, onboarding nebo dokumentaci |
| Chybějící schopnost | Brání to dokončení hlavního workflow? | ověřit u více zákazníků |
| Obchodní námitka | Blokuje to nákup nebo rozšíření? | doplnit trust pack, pricing nebo bezpečnostní odpověď |
| Ruční práce | Opakuje se úkon, který produkt může odstranit? | zvážit automatizaci |

K jednomu feedbacku si zapisuj minimum:

- segment zákazníka,
- dotčené workflow,
- dopad na práci zákazníka,
- frekvenci nebo počet podobných případů,
- navazující rozhodnutí: opravit, sledovat, odmítnout, převést do experimentu.

Nepotřebuješ vědět všechno o zákazníkovi. Potřebuješ vědět, co mu brání dostat slíbený výsledek.

## W.5 Z podpory vyráběj dokumentaci, ne jen zavřené tickety

Každý opakovaný dotaz je kandidát na lepší produkt, lepší onboarding nebo lepší dokumentaci. Pokud support jen zavírá tickety, firma se učí pomalu. Pokud z podpory pravidelně vznikají články nápovědy, mikrotexty a produktové úpravy, zákazníci posílají méně dotazů a tým má méně práce. Krásná věc: méně ticketů, méně dat, méně chaosu. Skoro podezřele rozumné.

Týdenní support review pro malý tým:

1. Vyber 5 nejčastějších nebo nejdražších dotazů týdne.
2. U každého určete, jestli je problém v produktu, textu, dokumentaci, očekávání nebo procesu.
3. Vyber jednu opravu s největším poměrem dopad / náročnost.
4. Doplněnou dokumentaci propoj přímo z místa v aplikaci, kde problém vzniká.
5. Staré interní odpovědi smaž nebo aktualizuj, aby tým neposílal zastaralé návody.

Příklad převodu ticketu na zlepšení:

| Opakovaný dotaz | Skutečná příčina | Lepší řešení |
| --- | --- | --- |
| „Kde najdu faktury?“ | navigace schovaná pod profilem | přidat odkaz do nastavení organizace a nápovědy |
| „Proč export nejde stáhnout?“ | export běží asynchronně bez vysvětlení | ukázat stav exportu a poslat notifikaci po dokončení |
| „Můžu pozvat účetní?“ | role nejsou srozumitelně popsané | doplnit popis rolí před odesláním pozvánky |

## W.6 Checklist privacy-first podpory

- Má každý support kanál jasně napsané, jaká data má zákazník poslat a jaká nikdy neposílat?
- Umí tým vyřešit běžný ticket bez přístupu do celého zákaznického účtu?
- Je support access časově omezený, logovaný a navázaný na konkrétní důvod?
- Existuje šablona pro bezpečné screenshoty, logy a diagnostické exporty?
- Třídí se feedback podle rozhodnutí, ne podle hlasitosti zákazníka?
- Vzniká z opakovaných ticketů dokumentace, onboardingové texty nebo produktové opravy?
- Mažou se staré tickety, přílohy a interní poznámky podle retenční politiky?
- Umí zákazník snadno požádat o export nebo smazání dat bez supportového ping-pongu?

## Shrnutí přílohy

Dobrá zákaznická podpora nepotřebuje vědět všechno. Potřebuje rychle poznat problém, bezpečně získat nezbytný kontext, pomoct zákazníkovi a proměnit opakované signály ve zlepšení produktu. Privacy-first přístup tady není brzda. Je to provozní disciplína, která snižuje riziko, zrychluje řešení a brání tomu, aby se z ticketů stal archiv citlivých dat s vyhledáváním.




# Příloha X: Přístupnost formulářů bez bariér a zbytečného sběru dat

Formulář je často nejkratší most mezi zájmem a obchodem. Poptávka, registrace, demo, onboarding, reset hesla, nastavení fakturace — všechno stojí na pár polích a jednom tlačítku. A právě proto je formulář nebezpečně podceňovaný. Když je nepřístupný, zmatený nebo příliš zvědavý, uživatel neodejde proto, že produkt nechce. Odejde proto, že ho produkt nepustil dovnitř.

Přístupnost a privacy-first přístup se tu krásně potkávají. Dobře navržený formulář je krátký, srozumitelný, ovladatelný klávesnicí, čitelný pro asistivní technologie a nesbírá údaje jen proto, že se políčko vešlo do layoutu. W3C WCAG 2.2 je publikované jako W3C Recommendation standard a WAI tutorial k formulářům doporučuje používat správné labely, seskupení, instrukce, validaci a srozumitelné notifikace: https://www.w3.org/TR/WCAG22/ a https://www.w3.org/WAI/tutorials/forms/

## X.1 Každé pole musí mít jasný důvod

Než řešíš design políčka, zeptej se: proč tohle pole vůbec existuje? Formulář není dotazník pro zvědavou firmu. Je to nástroj k dokončení konkrétní akce.

Praktická tabulka pro poptávkový formulář:

| Pole | Nechat? | Proč |
| --- | --- | --- |
| Jméno | Ano | pomáhá lidské odpovědi |
| E-mail | Ano | nutné pro navázání kontaktu |
| Telefon | Volitelně | jen pokud reálně voláte a zákazník s tím počítá |
| Firma | Volitelně | užitečné pro B2B kontext, ne vždy povinné |
| Rozpočet | Volitelně nebo jako rozsah | citlivé pole; vysvětli, k čemu slouží |
| Zpráva | Ano | zákazník popíše situaci vlastními slovy |
| Souhlas s marketingem | Ne jako podmínka poptávky | poptávka není vstupenka do reklamního trychtýře |

Krátký formulář není automaticky dobrý. Dobrý formulář sbírá přesně to, co je potřeba pro další krok. U jednoduché poptávky stačí často e-mail a zpráva. U B2B dema může dávat smysl firma a role. U registrace do SaaS nepotřebuješ fakturační adresu, dokud člověk neplatí. Ano, šokující: formulář nemusí sbírat data do zásoby jako křeček před zimou.

## X.2 Label není placeholder v převleku

Placeholder uvnitř pole vypadá čistě, ale mizí ve chvíli, kdy uživatel začne psát. Pro přístupnost i použitelnost je lepší viditelný label, který zůstává na obrazovce. WAI k labelům uvádí, že labely mají identifikovat účel ovládacích prvků a typicky se k tomu používá prvek `<label>`: https://www.w3.org/WAI/tutorials/forms/labels/

Lepší vzor:

```html
<label for="email">Pracovní e-mail</label>
<input id="email" name="email" type="email" autocomplete="email" required>
<p id="email-help">Pošleme sem odpověď k poptávce. Nepřidáme vás do newsletteru.</p>
```

Slabší vzor:

```html
<input name="email" placeholder="E-mail">
```

Co hlídat:

- Label musí být viditelný nebo alespoň programově spojený s polem.
- Placeholder používej jako doplněk, ne jako jediný popis.
- Povinná pole označ textově, nejen hvězdičkou bez vysvětlení.
- Nápověda má říkat, proč údaj chceš a co se s ním stane.
- Skupiny voleb patří do `fieldset` a `legend`, například u fakturačního typu nebo preferovaného kontaktu.

Privacy-first bonus: mikrotext pod polem může rovnou snížit nejistotu. „Telefon je volitelný a použijeme ho jen pokud chcete zavolat“ je lepší než prázdné pole, u kterého zákazník hádá, jestli mu za pět minut nezavolá obchodník s energií a CRM v očích.

## X.3 Chybové hlášky mají opravovat, ne trestat

Chybová hláška typu „Invalid input“ je technický povzdech, ne pomoc. Uživatel potřebuje vědět, které pole je špatně, proč je špatně a jak ho opravit. WAI doporučuje u formulářů jasné notifikace po odeslání i inline zpětnou vazbu; chybové zprávy mají být stručné, srozumitelné a obsahovat jednoduchý postup opravy: https://www.w3.org/WAI/tutorials/forms/notifications/

Příklady:

| Špatně | Lépe |
| --- | --- |
| „Chyba“ | „E-mail chybí. Doplňte adresu, kam máme poslat odpověď.“ |
| „Neplatný formát“ | „Telefon napište ve formátu +420 777 123 456, nebo pole nechte prázdné.“ |
| „Required“ | „Vyberte prosím jednu možnost rozpočtu, ať víme, jaký rozsah řešení navrhnout.“ |
| červený rámeček bez textu | text chyby u pole a souhrn chyb nad formulářem |

Technicky pomůže spojit pole s nápovědou a chybou přes `aria-describedby`, u neplatného pole nastavit `aria-invalid="true"` a po neúspěšném odeslání dát uživateli souhrn chyb. Důležité je nespoléhat jen na barvu. Červená je dobrý signál pro část lidí, ale text je důkaz. A text také přežije čtečku obrazovky, vysoký kontrast i situaci, kdy uživatel sedí na slunci s mobilem a proklíná svůj životní výběr.

## X.4 Ovládání klávesnicí není okrajový případ

Formulář musí jít projít bez myši. Ne proto, že „to chce audit“, ale protože lidé používají klávesnici, asistivní technologie, mobilní přepínače, hlasové ovládání nebo prostě trackpad, který se rozhodl odejít do důchodu.

Rychlý test:

1. Dej kurzor na začátek stránky.
2. Projdi formulář klávesou Tab.
3. Sleduj, jestli je fokus vždy viditelný.
4. Zkus vyplnit všechna pole bez myši.
5. Odesílej formulář Enterem nebo tlačítkem, které má jasný text.
6. Vyvolej chybu a ověř, že se dá pochopit i opravit bez myši.

Časté chyby:

- vlastní select, který nejde ovládat šipkami,
- checkbox bez skutečného `<input type="checkbox">`,
- modal s formulářem, ze kterého fokus uteče do pozadí,
- tlačítko jako `<div>` s click handlerem,
- neviditelný focus outline, protože „design“.

Codyho komentář: Smazat focus outline je jako sundat směrovky z auta, protože kazí čistý minimalismus. Krásné, dokud někdo nechce odbočit.

## X.5 Antispam řeš bez sledovacího výpalného

Spam je reálný problém, ale řešení nemusí znamenat nasazení sledovacího skriptu přes půl internetu. U privacy-first webu začni méně invazivními vrstvami a teprve pak přitvrzuj.

Praktické vrstvy:

| Vrstva | Co dělá | Privacy dopad |
| --- | --- | --- |
| honeypot pole | bot vyplní skryté pole, člověk ne | minimální |
| čas vyplnění | odmítne formulář odeslaný podezřele rychle | minimální |
| rate limit | omezuje počet pokusů z jedné IP nebo účtu | střední, nastav krátkou retenci |
| serverová validace | kontroluje formát a povinná pole | minimální |
| e-mailové potvrzení | ověří kontakt až po odeslání | záleží na účelu |
| externí CAPTCHA | posílá data třetí straně | použít jen po zvážení a vysvětlení |

U B2B poptávek často stačí honeypot, rate limit a ruční kontrola. U veřejné registrace do SaaS bude potřeba silnější obrana, ale pořád platí: měř, kolik spamu reálně máš, a nepřidávej nástroj jen proto, že ho někdo viděl v tutoriálu z roku dinosaurus.

## X.6 Checklist přístupného privacy-first formuláře

Před publikací formuláře projdi tento seznam:

- Každé pole má jasný účel a nejde o sběr „pro jistotu“.
- Povinná pole jsou opravdu nutná pro dokončení aktuální akce.
- Každé pole má viditelný nebo programově správně přiřazený label.
- Placeholder není jediný popis pole.
- Nápověda vysvětluje citlivější údaje lidsky a konkrétně.
- Formulář jde projít a odeslat klávesnicí.
- Fokus je viditelný a nepřeskakuje nelogicky.
- Chyby jsou popsané textem u pole i souhrnem u delšího formuláře.
- Validace běží na klientu pro pohodlí a na serveru pro jistotu.
- Antispam nezačíná automaticky nejinvazivnějším externím skriptem.
- Po úspěšném odeslání je jasné, co se stane dál a kdy čekat odpověď.
- Data z formuláře mají vlastníka, retenční pravidlo a bezpečné místo uložení.

## Shrnutí přílohy

Přístupný formulář není charita ani compliance dekorace. Je to obchodní infrastruktura. Pomáhá více lidem dokončit akci, snižuje počet chyb, zlepšuje důvěru a zároveň nutí tým sbírat méně zbytečných dat. Privacy-first formulář je stručný, čitelný, opravuje chyby lidsky a nepouští třetí strany do každé poptávky jen proto, že spam existuje.


# Příloha Y: Platby a fakturace bez datového balastu

Platba je okamžik pravdy. Zákazník už pochopil hodnotu, rozhodl se zaplatit a očekává, že produkt nezakopne o vlastní administrativu. Přesto se právě tady často objeví formulář s dvaceti poli, nejasná cena, podivný redirect, fakturační chaos a support ticket s předmětem „kde je moje faktura“. Gratuluju, obchodní trychtýř právě uklouzl na účtence.

Privacy-first platební tok neznamená, že si máš napsat vlastní platební bránu v garáži mezi kávou a existenciální krizí. Znamená to, že sbíráš jen fakturační a platební data, která opravdu potřebuješ, odděluješ citlivé platební údaje od produktu, zákazník přesně ví, co se stane, a interní tým má jasný postup pro změny tarifu, refundace, neúspěšné platby a odchod.

## Y.1 Platební flow začíná už na cenové stránce

Dobrá platba nezačíná klikem na tlačítko „Zaplatit“. Začíná tím, že zákazník předem chápe, za co platí, kdy se platba strhne, co je v ceně a co se stane po objednávce. Nejasnosti v platebním kroku jsou drahé: zákazník se lekne, přeruší nákup nebo zaplatí a hned píše na podporu.

Před platebním formulářem ukaž:

- vybraný tarif a jeho hlavní hodnotu jednou větou,
- konečnou cenu včetně měny a fakturačního období,
- informaci, jestli se platba opakuje,
- co zákazník získá ihned po zaplacení,
- jak zruší obnovu nebo změní tarif,
- odkaz na obchodní podmínky a privacy informace v lidském jazyce.

Příklad mikrotextu:

> „Platíte tarif Team měsíčně. Po zaplacení se účet aktivuje ihned. Obnovu můžete vypnout v nastavení fakturace; přístup zůstane aktivní do konce zaplaceného období.“

Tohle není právní román, ale snižuje nervozitu. Zákazník nemá luštit, jestli se právě upsal digitálnímu gym členství, které půjde zrušit jen faxem do sklepa.

## Y.2 Fakturační data sbírej postupně a podle kontextu

Ne každý uživatel je plátce, ne každý kupuje na firmu a ne každý potřebuje fakturu před vyzkoušením produktu. Proto nedává smysl ptát se na kompletní fakturační údaje hned při registraci. Registrace má dostat člověka k první hodnotě. Fakturace má přijít ve chvíli, kdy se skutečně platí.

Praktická minimální sada:

| Situace | Typicky potřebuješ | Co raději nebrat dopředu |
| --- | --- | --- |
| Free trial bez karty | e-mail, název účtu, heslo nebo SSO | fakturační adresu, DIČ, platební kartu |
| Trial s kartou | e-mail, platební token od brány, informace o tarifu | číslo karty v aplikaci, interní kopie platebních detailů |
| B2B nákup | firmu, fakturační adresu, identifikátory pro fakturaci | osobní telefon každého uživatele, zbytečné poznámky o nákupu |
| Ruční fakturace | kontaktní e-mail pro finance, objednávku, splatnost | přístup do zákazníkova účetnictví, pokud není nutný |

Důležité pravidlo: produkt by neměl ukládat plné údaje platební karty. Používej platebního poskytovatele, který vrací token, stav platby a omezené informace potřebné pro zobrazení zákazníkovi. V aplikaci pak řešíš obchodní stav: „aktivní“, „čeká na platbu“, „platba selhala“, „přístup končí“. Neřešíš číslo karty. To je práce platební infrastruktury, ne tvého SaaS backendu.

Codyho komentář: Když má databáze méně citlivých údajů, vypadá incidentová porada méně jako hororový film a více jako normální provozní problém. To je dobrý obchodní model pro nervovou soustavu.

## Y.3 Odděl platební stav od produktového přístupu

Častá chyba malého SaaS: platba, faktura, tarif a oprávnění jsou slepené do jedné podmínky. Výsledek? Jeden neúspěšný webhook a zákazník ztratí přístup, i když reálně zaplatil. Nebo naopak neplatí tři měsíce, ale systém ho pořád pouští dovnitř, protože „nějak to v adminu svítí zeleně“.

Navrhni si samostatné stavy:

- účet zákazníka: aktivní, pozastavený, zrušený,
- tarif: free, trial, placený, vlastní smlouva,
- platební stav: zaplaceno, čeká, selhalo, refundováno,
- fakturační stav: vystaveno, odesláno, po splatnosti, stornováno,
- přístupová práva: co přesně může účet používat.

Mezi těmito stavy musí být pravidla. Například neúspěšná platba nemusí okamžitě vypnout produkt. Užitečnější je krátká grace perioda, jasný e-mail a upozornění v aplikaci. U B2B zákazníků může být proces úplně jiný: ruční kontrola, finance kontakt a domluva před omezením služby.

Mini playbook pro neúspěšnou platbu:

1. Zaznamenej událost z platební brány bez ukládání citlivých detailů.
2. Pošli stručný e-mail fakturačnímu kontaktu, ne všem uživatelům v účtu.
3. Zobraz v aplikaci nenápadné upozornění správcům účtu.
4. Neomezuj kritické funkce dřív, než uplyne rozumné interně definované okno.
5. Po vyřešení obnov přístup automaticky a zapiš auditní stopu.

## Y.4 Fakturační komunikace má být nudná, přesná a dohledatelná

Faktury, potvrzení plateb a změny tarifu nejsou místo pro kreativní marketing. Mají být nudně přesné. V dobrém smyslu. Zákazník má snadno najít, co zaplatil, za jaké období, kdo je dodavatel, kam napsat při problému a kde si stáhne doklad.

Každý fakturační e-mail by měl mít:

- jasný předmět: „Faktura za tarif Team za srpen 2026“,
- identifikaci účtu nebo organizace,
- období služby,
- částku a měnu,
- odkaz do bezpečné zákaznické zóny,
- kontakt pro fakturační dotazy,
- žádné marketingové pixely ani zbytečné sledování otevření.

Důležitý detail: přílohy s fakturami neposílej bez rozmyslu do všech možných schránek. Pro některé týmy je lepší poslat notifikaci s odkazem do zabezpečené zákaznické zóny, kde si doklad stáhne oprávněná osoba. U malých zákazníků může PDF v e-mailu dávat smysl. Rozhodnutí si napiš do provozní dokumentace a drž se ho.

## Y.5 Refundace a zrušení nesmí být trestná výprava

Zrušení tarifu a refundace jsou součást zákaznické zkušenosti. Když je schováš za support, zákazník si možná zaplatí o měsíc déle. Ale zároveň si zapamatuje, že produkt je pastička. To není retence. To je digitální lepidlo na myši.

Dobré zrušení obsahuje:

- jasné tlačítko nebo postup v nastavení fakturace,
- informaci, kdy přístup skončí,
- možnost exportu dat před odchodem,
- stručný volitelný důvod odchodu,
- potvrzení e-mailem,
- interní auditní záznam bez emočních poznámek typu „zase odešli“.

Refundace musí mít předem daná pravidla: kdo ji schvaluje, kdy je automatická, kdy ruční a jak se komunikuje. U SaaS je často lepší jednorázově vrátit spornou částku a získat klid než vyhrát mikrosoud o pár eurech v hlavě zákazníka. Výjimky samozřejmě existují, hlavně u zneužití. Proto měj pravidla, ne náladu.

## Y.6 Checklist plateb a fakturace

- Je na cenové stránce jasné, co zákazník platí a kdy se platba opakuje?
- Sbírá registrace jen údaje nutné pro první použití produktu?
- Ukládá aplikace pouze platební tokeny a obchodní stavy, ne plné údaje karty?
- Jsou oddělené stavy účtu, tarifu, platby, faktury a přístupových práv?
- Má neúspěšná platba bezpečný postup bez okamžitého zbytečného odříznutí zákazníka?
- Dostává fakturační e-maily správný kontakt, ne celý tým?
- Neobsahují fakturační e-maily marketingové pixely nebo zbytečné sledování?
- Umí správce účtu stáhnout doklady v zákaznické zóně?
- Je zrušení tarifu dohledatelné a srozumitelné?
- Existuje pravidlo pro refundace, storna a ruční výjimky?
- Jsou fakturační data součástí retenční politiky a exportu zákazníka?
- Má tým dokumentovaný postup pro změnu platebního poskytovatele?

## Shrnutí přílohy

Platební a fakturační tok má být důvěryhodný, předvídatelný a datově střídmý. Zákazník má vědět, co platí, produkt má pracovat s obchodními stavy místo citlivých platebních detailů a tým má mít jasné procesy pro selhání plateb, doklady, refundace i zrušení. Privacy-first přístup tady není brzda konverze. Je to způsob, jak z platby neudělat nervózní administrativní únikovku.


# Příloha Z: Přístupy, role a offboarding bez sdílených účtů

Malý SaaS tým často nezačne bezpečnostní průšvihem v kryptografii, ale obyčejnou větou: „Pošli mi prosím heslo do adminu.“ Pak přijde sdílený účet, zapomenutý freelancer, token v poznámce, účet bývalého kolegy a auditní stopa ve stylu „někdo něco změnil“. Gratuluju, máme provozní sudoku, jen bez té zábavné části.

Přístupy jsou součást produktu. Nejsou to jen interní nastavení v administraci. Rozhodují o tom, kdo vidí zákaznická data, kdo může měnit fakturaci, kdo má produkční klíče a kdo umí omylem smazat tabulku rychleji než stihne říct „to se nestává“. Evropská komise u bezpečnosti zpracování osobních údajů zdůrazňuje technická a organizační opatření proti neoprávněnému přístupu, ztrátě nebo poškození dat: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/obligations_en

## Z.1 Začni inventářem lidí, systémů a oprávnění

Nejdřív nepotřebuješ nový IAM nástroj. Potřebuješ vědět, kdo se kam dostane. Udělej jednoduchou tabulku a projdi ji jednou měsíčně. Nuda? Ano. Užitečná nuda? Velmi.

Základní inventář:

| Oblast | Příklad systému | Kdo má přístup | Riziko | Kontrola |
| --- | --- | --- | --- | --- |
| Produkce | hosting, databáze, logy | technický tým | vysoké | MFA, role, audit log |
| Zákaznická data | admin, CRM, support | podpora, obchod | vysoké | role podle účelu, časové omezení |
| Fakturace | platební brána, účetní systém | finance, zakladatel | střední až vysoké | oddělené role, schvalování změn |
| Marketing | CMS, analytika, e-mailing | marketing, obsah | střední | publikace přes role, bez sdílených účtů |
| Vývoj | Git, CI/CD, secrets | vývojáři | vysoké | chráněné větve, rotace tokenů |

U každého systému si napiš tři věci: kdo je vlastník, kdo má běžný přístup a kdo má nouzový administrátorský přístup. Pokud neumíš vlastníka určit do jedné minuty, systém je provozní sirotek. Sirotci v infrastruktuře obvykle nedopadnou jako roztomilý film, ale jako páteční incident.

## Z.2 Role navrhuj podle práce, ne podle ega

„Admin pro všechny“ je pohodlné, dokud se něco nestane. Role mají kopírovat skutečnou práci, ne organizační politiku. Zakladatel nemusí mít denní přístup do každého zákaznického detailu. Marketér nemusí vidět fakturační údaje. Vývojář nemusí mít trvalý přístup do produkční databáze, pokud mu stačí anonymizovaný export nebo dočasné povolení pro konkrétní incident.

Praktické role pro malý SaaS:

- vlastník účtu: smlouva, tarif, fakturace, export a smazání dat,
- administrátor zákazníka: uživatelé, nastavení organizace, integrace,
- běžný uživatel: práce v produktu bez správy účtu,
- support: dočasný přístup ke kontextu požadavku,
- finance: faktury, platby, dobropisy, bez produktového obsahu,
- vývoj/provoz: technické logy a infrastruktura podle incidentu.

Role nestačí pojmenovat. Ke každé napiš „může“ a „nesmí“. Například support může vidět stav účtu a poslední chybu importu, ale nesmí bez souhlasu otevřít obsah zákaznických dokumentů. Finance může změnit fakturační kontakt, ale nesmí měnit uživatelská oprávnění v produktu.

Codyho komentář: Nejlepší role jsou trochu nudné. Když role zní jako postava z fantasy hry — „Super Ultimate Owner God Mode“ — je to většinou bezpečnostní záporná postava.

## Z.3 Dočasný přístup je lepší než trvalá výjimka

Výjimky nezmizí tím, že je ignoruješ. Jen se usadí v systému jako digitální vodní kámen. Proto je lepší mít proces pro dočasný přístup než rozdávat trvalé administrátorské role pokaždé, když někdo spěchá.

Dočasný přístup nastavuj takto:

1. Má jasný důvod: incident, migrace, zákaznický požadavek, účetní uzávěrka.
2. Má vlastníka: konkrétní člověk schvaluje a ví, proč existuje.
3. Má časové omezení: hodiny nebo dny, ne „dokud si někdo vzpomene“.
4. Má auditní stopu: kdo přístup dostal, kdy, proč a co udělal.
5. Má automatické ukončení: systém odebere práva bez ručního lovení.

U citlivých zákaznických dat preferuj model „break-glass“: nouzový přístup existuje, ale každé použití je výrazně logované, omezené a zpětně kontrolované. U supportu je často lepší, když zákazník přístup aktivně povolí přímo v aplikaci a vidí, kdy skončí. To je férovější než interní kouzelné dveře do cizího účtu.

## Z.4 Secrets nejsou poznámka v chatu

API klíče, tokeny, přístupové údaje, obnovovací kódy a privátní klíče patří do správce tajemství, ne do e-mailu, chatu, dokumentace nebo screenshotu v ticketu. ENISA ve své příručce pro malé a střední firmy doporučuje bezpečnostní kroky jako řízení přístupů, vícefaktorové ověření a ochranu systémů podle rizika: https://www.enisa.europa.eu/publications/cybersecurity-guide-for-smes

Minimum pro malý tým:

- Každý člověk má vlastní účet, žádné sdílené přihlášení.
- Všude, kde to jde, je zapnuté MFA.
- Produkční secrets nejsou dostupné v lokálním vývoji bez důvodu.
- Tokeny mají omezený scope a ideálně expiraci.
- Přístup do správce hesel se řeší přes skupiny, ne ruční kopírování.
- Při odchodu člověka se rotují klíče, ke kterým mohl mít přístup.

Pokud musíš tajemství někomu předat ručně, použij jednorázový bezpečný kanál a zapiš, proč se to stalo. Ale ber to jako výjimku, ne jako týmovou kulturu. Kultura „pošli token do Slacku“ je jen incident, který zatím neměl rozpočet na ohňostroj.

## Z.5 Offboarding musí být checklist, ne vzpomínková akce

Odchod člověka z týmu je normální. Nenormální je zjistit po třech měsících, že má pořád přístup do repozitáře, analytiky, e-mailingu a platební brány. Offboarding musí být rychlý, klidný a kompletní.

Offboardingový checklist:

- Zruš nebo pozastav účty ve všech systémech z inventáře.
- Odeber člověka ze skupin ve správci hesel a cloudových rolích.
- Zkontroluj Git, CI/CD, hosting, DNS, e-mail, fakturaci a podporu.
- Převeď vlastnictví dokumentů, automatizací, kalendářů a API integrací.
- Rotuj sdílené nebo potenciálně viděné secrets.
- Zkontroluj osobní zařízení a přístup k firemním datům podle interní dohody.
- Zapiš dokončení do interního logu bez zbytečných osobních detailů.

Stejný princip platí pro agentury a freelancery. Externista nemá dostat „dočasný“ přístup, který přežije projekt, účetní rok a dvě redesignové vlny. Na začátku spolupráce si nastav datum revize přístupu. Když projekt skončí, přístup končí také.

## Z.6 Měsíční access review za 30 minut

Jednou měsíčně projdi pět nejcitlivějších systémů. Nečekej na velký audit. Malý pravidelný úklid poráží heroický bezpečnostní víkend, po kterém všichni nenávidí tabulky, IAM i sami sebe.

Rychlý postup:

1. Vyber pět systémů s nejvyšším dopadem: hosting, databáze, Git, fakturace, support/admin.
2. Exportuj nebo ručně projdi seznam uživatelů a rolí.
3. Označ účty bez jasného vlastníka, nepoužívané účty a role s příliš širokým oprávněním.
4. Odeber zjevné přebytky hned, sporné dej vlastníkovi systému k potvrzení.
5. Zapiš změny a jednu věc, kterou příště automatizuješ.

EDPB v přehledu pro malé firmy připomíná, že data protection by design and by default znamená zabudovat ochranu dat do nástrojů, procesů a nastavení od začátku a zpracovávat ve výchozím stavu jen nezbytná data: https://www.edpb.europa.eu/sme/be-compliant/be-compliant_en Přístupy jsou přesně ten typ nastavení, kde se „výchozí hodnota“ časem mění v bezpečnostní realitu.

## Z.7 Checklist přístupů a offboardingu

- Má každý používaný systém vlastníka a seznam lidí s přístupem?
- Existují samostatné role pro zákaznická data, fakturaci, podporu, vývoj a provoz?
- Má každý člověk vlastní účet místo sdíleného přihlášení?
- Je MFA zapnuté u Git, hostingu, e-mailu, fakturace, správce hesel a podpory?
- Jsou produkční secrets mimo dokumentaci, chat a běžné repozitáře?
- Mají tokeny a API klíče omezený scope?
- Umí tým rychle udělit dočasný přístup s důvodem a expirací?
- Je support access časově omezený a viditelný v auditní stopě?
- Existuje checklist pro odchod zaměstnance, freelancera nebo agentury?
- Rotují se sdílené nebo potenciálně viděné secrets po odchodu člověka?
- Probíhá měsíční access review u nejcitlivějších systémů?
- Ví zákazník, kdo z týmu může vidět jeho data a za jakých okolností?

## Shrnutí přílohy

Přístupy nejsou administrativní detail. Jsou to brzdy, zámky a zpětná zrcátka privacy-first provozu. Malý tým nepotřebuje korporátní byrokracii, ale potřebuje vlastní účty, jasné role, MFA, správce tajemství, dočasné výjimky, auditní stopu a offboardingový checklist. Čím méně trvalých výjimek, tím méně dramatických večerů s titulkem „kdo ještě má přístup kam?“.



# Příloha AA: Transakční e-maily, doména a doručitelnost bez marketingového cirkusu

SaaS může mít krásný onboarding, vymazlenou cenovou stránku a administraci, ve které by i účetní na chvíli uvěřila v design. Jenže když se potvrzovací e-mail, reset hesla nebo faktura zatoulá do spamu, produkt vypadá rozbitě. E-mail není nudná technická příloha. Je to součást zákaznické zkušenosti, bezpečnosti i důvěry.

Privacy-first přístup u e-mailu znamená dvě věci najednou: posílat méně zbytečností a posílat důležité zprávy tak, aby dorazily. Neznamená to bombardovat uživatele newslettery, otevřeními, pixely a desetidílnou sekvencí „jen připomínám“. Znamená to mít čistou doménu, jasný účel každého e-mailu, funkční odhlášení, rozumnou autentizaci a auditovatelný provoz.

Google ve svých sender guidelines popisuje požadavky na ověřování odesílatelů, nízkou míru spamu, snadné odhlášení a správné DNS nastavení pro hromadné odesílatele: https://support.google.com/mail/answer/81126?hl=en Yahoo ve svých best practices podobně zdůrazňuje autentizaci, reputaci a respekt k příjemcům: https://senders.yahooinc.com/best-practices/

## AA.1 Odděl transakční, produktové a marketingové e-maily

První chyba je házet všechny e-maily do jednoho pytle. Reset hesla, faktura, bezpečnostní upozornění, onboardingový tip a marketingová pozvánka na webinář nejsou stejný typ komunikace. Mají jiný účel, jinou naléhavost, jiné právní zdůvodnění a jinou toleranci k selhání.

Rozděl e-mailový provoz minimálně takto:

| Typ e-mailu | Příklad | Priorita | Tracking | Odhlášení |
| --- | --- | --- | --- | --- |
| Bezpečnostní | reset hesla, nové přihlášení, změna MFA | kritická | žádný marketingový tracking | ne, ale obsah musí být věcný |
| Transakční | faktura, potvrzení objednávky, změna tarifu | vysoká | žádný marketingový tracking | většinou ne |
| Produktový | onboarding, upozornění na stav importu, shrnutí aktivity | střední | jen nutné doručení a chyby | podle povahy sdělení |
| Marketingový | newsletter, pozvánka, promo nabídka | nízká až střední | střídmé měření, bez šmírovacích pixelů | ano, viditelně a funkčně |

Doporučení: používej samostatné subdomény podle účelu. Například `mail.example.com` pro marketing, `notify.example.com` pro produktová upozornění a hlavní doménu chránit pro firemní komunikaci. Není to povinný rituál v kapuci, ale pomáhá řídit reputaci a řešit incidenty bez toho, aby jeden nepovedený newsletter ohrozil doručování faktur.

## AA.2 Doména musí umět dokázat, že jsi to ty

E-mail historicky vznikl ve světě, kde si lidé víc věřili a méně automatizovaně lhali. Dnes musí doména technicky prokazovat, kdo za zprávou stojí. Základ tvoří SPF, DKIM a DMARC.

Prakticky:

- **SPF** říká, které servery smějí posílat e-maily za doménu.
- **DKIM** podepisuje zprávu kryptograficky, aby příjemce poznal, že ji cestou nikdo nepřepsal.
- **DMARC** říká, co se má stát, když SPF nebo DKIM nesedí, a posílá reporty o zneužití.

DMARC je definovaný v RFC 7489: https://www.rfc-editor.org/rfc/rfc7489 Začni politikou `p=none`, sbírej reporty a teprve potom postupně zpřísňuj na `quarantine` nebo `reject`. Přepnout novou doménu rovnou na tvrdý režim bez kontroly je jako zamknout kancelář a až pak zjišťovat, kdo má klíče. Bezpečné? Možná. Praktické? Jen pokud máš rád telefonáty.

Základní DNS checklist:

- SPF záznam existuje a neobsahuje deset starých dodavatelů z archeologických vrstev firmy.
- DKIM je zapnutý pro každý nástroj, který posílá jménem domény.
- DMARC adresa pro reporty vede do sledované schránky nebo nástroje, ne do digitálního sklepa.
- Subdomény mají vlastní politiku nebo jasně dědí hlavní pravidla.
- Po změně e-mailového nástroje se staré DNS záznamy uklidí.

## AA.3 Odhlášení má být rychlé, ne pasivně agresivní

Marketingový e-mail bez snadného odhlášení je krátkodobý trik a dlouhodobý reputační dluh. Člověk, který už nechce zprávy, má mít jednoduchou cestu ven. Když mu ji nedáš, použije tlačítko „Spam“. To je sice také zpětná vazba, ale taková, která ti kope doručitelnost do kotníků.

Pro marketingové a hromadné zprávy nastav:

- viditelný odkaz pro odhlášení v těle e-mailu,
- `List-Unsubscribe` hlavičku,
- one-click unsubscribe podle RFC 8058, kde to dává smysl: https://www.rfc-editor.org/rfc/rfc8058
- okamžité nebo velmi rychlé propsání odhlášení do seznamu,
- žádné přihlašování jen kvůli odhlášení,
- žádné výčitkové formulace typu „opravdu nás opouštíte?“ — nejsme telenovela.

Privacy-first varianta je jednoduchá: respektuj volbu příjemce a nesnaž se ji obejít jiným kanálem. Pokud se někdo odhlásí z newsletteru, neposílej mu stejný obsah jako „produktové upozornění“. To není segmentace. To je marketing s nalepeným knírkem.

## AA.4 Obsah e-mailu má být konkrétní a úsporný

Každý e-mail by měl odpovědět na tři otázky: proč mi to přišlo, co se změnilo a co mám udělat dál. Pokud e-mail neumí odpovědět, možná neměl být poslán.

Šablona dobrého transakčního e-mailu:

1. Jasný předmět: „Faktura za tarif Team za srpen 2026“ místo „Vaše aktualizace“.
2. Jedna věta kontextu: „Posíláme fakturu za aktivní tarif workspace Acme.“
3. Konkrétní akce: stáhnout fakturu, zkontrolovat platbu, obnovit heslo.
4. Bezpečnostní poznámka, pokud jde o účet: „Pokud jste akci neprovedli, kontaktujte podporu.“
5. Minimum osobních údajů v těle e-mailu.
6. Přímý odkaz na vlastní doménu, ne zkracovač a ne trackingovou mašinu.
7. Kontakt na podporu nebo odkaz na dokumentaci.

Neposílej citlivý obsah v e-mailu, pokud stačí oznámení a bezpečný odkaz do aplikace. E-mail je skvělý nosič signálu, ale mizerný trezor. Reset hesla má obsahovat jednorázový odkaz s expirací, ne nové heslo. Faktura může být příloha nebo odkaz, ale produktová data zákazníka by se neměla válet v inboxu jen proto, že to bylo rychlé.

## AA.5 Měř doručitelnost bez šmírování lidí

Otevření e-mailu je slabý signál. Blokování obrázků, proxy servery a ochrany soukromí z něj dělají číslo, které se tváří přesněji, než je. Pro privacy-first provoz je lepší sledovat technické a obchodní signály, které nevyžadují sledovat jednotlivce přes pixel.

Sleduj hlavně:

- bounce rate podle typu e-mailu,
- spam complaint rate u marketingu,
- počet nedoručených transakčních zpráv,
- rychlost doručení kritických e-mailů,
- doménové reputační problémy,
- odhlášení a důvody, pokud je lidé dobrovolně vyplní,
- support tickety typu „nepřišel mi e-mail“.

U důležitých toků přidej produktovou pojistku: když se e-mail nepovede doručit, ukaž zprávu i v aplikaci. Faktura má být dostupná v zákaznické zóně. Stav importu má být vidět v produktu. E-mail je notifikace, ne jediná kopie reality.

Codyho komentář: Pokud manažerský dashboard stojí hlavně na open rate, je to trochu jako řídit auto podle toho, kolik lidí se podívalo z okna. Nějaký signál tam je, ale brzdy bych podle toho nenastavoval.

## AA.6 Checklist e-mailového provozu

Před spuštěním nebo větší kampaní projdi tento seznam:

- Má každý typ e-mailu jasný účel a vlastníka?
- Jsou transakční, produktové a marketingové e-maily oddělené alespoň procesně, ideálně i subdoménou?
- Je nastavené SPF, DKIM a DMARC pro všechny odesílací nástroje?
- Existuje plán postupného zpřísnění DMARC politiky?
- Funguje odhlášení z marketingových zpráv bez přihlášení a bez prosebného divadla?
- Nepoužívají transakční e-maily marketingové pixely?
- Obsahují e-maily jen data nutná pro svůj účel?
- Vedou odkazy na vlastní doménu a nepoužívají zkracovače?
- Má tým dashboard nebo report pro bounces, complaints a kritická selhání doručení?
- Existuje fallback v aplikaci pro důležité informace, které e-mail nemusí doručit?
- Po odchodu dodavatele nebo nástroje se uklidí DNS záznamy, API klíče a šablony?

## Shrnutí přílohy

E-mailový provoz je důvěryhodnost v praxi. Dobře nastavená doména, oddělené typy zpráv, SPF/DKIM/DMARC, férové odhlášení a střídmé měření chrání doručitelnost i soukromí lidí. Privacy-first SaaS neposílá víc e-mailů, než musí. Posílá ty správné, s jasným účelem a bez datového konfeti.


# Příloha AB: Admin rozhraní a auditní stopa bez všemocného božstva

Každý SaaS jednou doroste do bodu, kdy někdo řekne: „Uděláme si malý admin panel, ať to nemusíme měnit v databázi.“ To je rozumné. A zároveň je to přesně chvíle, kdy se z malé interní pomůcky může stát nejnebezpečnější obrazovka v produktu.

Admin rozhraní totiž často obejde běžná pravidla produktu. Vidí víc dat, mění citlivé stavy, ruší blokace, upravuje fakturaci, resetuje přístupy a občas umí věci, které zákazník sám udělat nemůže. Privacy-first administrace proto není jen „hezký dashboard pro tým“. Je to kontrolovaný nástroj s minimem oprávnění, jasným důvodem použití a auditní stopou, která pomůže vysvětlit, co se stalo.

EDPB v průvodci pro malé firmy připomíná princip data protection by design and by default: ochrana dat má být zabudovaná do nástrojů, procesů a výchozích nastavení, ne přilepená až na konci projektu: https://www.edpb.europa.eu/sme/be-compliant/be-compliant_en OWASP Logging Cheat Sheet zároveň doporučuje logovat bezpečnostně významné události, ale dávat pozor, aby logy samy nevytvářely nové riziko úniku dat: https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html

## AB.1 Admin panel není databázový editor s lepším fontem

Nejhorší verze adminu je tabulka `users`, tlačítko „editovat všechno“ a víra, že tým přece ví, co dělá. Tým možná ví. Únava, stres, onboarding nováčka a pátek v 16:47 už tak optimistické nejsou.

Admin panel navrhuj podle úkolů, ne podle databázových tabulek:

| Úkol | Lepší akce v adminu | Riziko přímé editace |
| --- | --- | --- |
| Zákazník chce změnit fakturační e-mail | „Změnit fakturační kontakt“ s validací a důvodem | Přepsání špatného pole, rozbitá fakturace |
| Uživatel ztratil přístup | „Vynutit reset přihlášení“ místo ruční změny hesla | Znalost nebo manipulace s tajemstvím |
| Firma žádá export dat | „Vygenerovat export“ s auditní stopou | Neúplný export, ruční výběr dat |
| Podezřelý účet | „Dočasně pozastavit účet“ s časem a poznámkou | Nevratná nebo nevysvětlená blokace |

Pravidlo: admin akce má reprezentovat obchodní nebo provozní rozhodnutí. Nemá být tenký nátěr nad SQL konzolí. Pokud musíš často editovat databázi ručně, produkt nemá admin panel. Produkt má rituál pro přivolání incidentu.

## AB.2 Citlivá data skrývej jako výchozí stav

Admin se nemá chlubit tím, kolik toho umí zobrazit. Má zobrazit jen to, co člověk potřebuje k vyřešení konkrétního úkolu. Výchozí obrazovka zákazníka nemusí ukazovat celé adresy, tokeny, poznámky, obsah zpráv, IP adresy, fakturační detaily a interní logy najednou.

Praktická pravidla pro zobrazení dat:

- Maskuj citlivé hodnoty: `ondrej@example.com` může být pro některé role `o***j@example.com`.
- Nezobrazuj secrets nikdy; ukaž jen datum vytvoření, poslední použití a možnost rotace.
- U interních poznámek odděl provozní fakta od subjektivních komentářů.
- U zákaznického obsahu používej náhled jen tam, kde je nutný pro podporu.
- Přidej tlačítko „zobrazit citlivý detail“ s důvodem a zápisem do auditu.

To poslední je silné. Nezakazuje práci, ale zpomaluje zvědavost. Když musí člověk napsat „řeším ticket #1842, zákazník poslal špatnou fakturační adresu“, přemýšlí jinak než při bezmyšlenkovitém klikání. Privacy-first produkt nepotřebuje interní panoptikum. Potřebuje dobré brzdy.

## AB.3 Každá nevratná nebo citlivá akce potřebuje důvod

Admin akce se dají rozdělit podle dopadu. Některé jsou nevinné: změnit interní štítek, znovu poslat aktivační e-mail, otevřít veřejný detail firmy. Jiné mění zákaznickou realitu: smazání dat, změna tarifu, ruční připsání kreditu, pozastavení účtu, přístup k obsahu nebo export osobních údajů.

U citlivých akcí chtěj minimálně:

- kdo akci provedl,
- kdy ji provedl,
- na jakém zákazníkovi nebo objektu,
- jaký byl typ akce,
- jaký byl důvod,
- jaký ticket, objednávka nebo interní rozhodnutí k tomu patří,
- jaký byl výsledek.

Důvod nemusí být román. Stačí krátká věta a odkaz na kontext. Důležité je, aby za půl roku šlo rozlišit oprávněnou podporu od tajemného zásahu „protože někdo něco chtěl“.

Příklad dobré potvrzovací věty před akcí:

> „Pozastavuji účet firmy Novák s.r.o. kvůli žádosti vlastníka v ticketu #1842. Akce zablokuje přihlášení všem uživatelům, data zůstanou zachována podle retenční politiky.“

To je nepoměrně lepší než tlačítko „Suspend“ bez kontextu. Tlačítka bez kontextu jsou malé dveře do velkých vysvětlovacích schůzek.

## AB.4 Audit log má být užitečný, ne toxický sklad všeho

Audit log není odpadkový koš pro každou proměnnou, kterou aplikace potkala. Má pomoci při bezpečnostní kontrole, zákaznické reklamaci, incidentu a interním review. Pokud do něj nasypeš kompletní request body, access tokeny, obsah zpráv a osobní údaje bez důvodu, vytvoříš druhou databázi problémů.

Dobrý audit log obsahuje strukturované minimum:

```text
čas: 2026-08-08T14:05:22Z
aktor: support_user_123
role: support_lead
akce: customer.billing_email_changed
objekt: customer_456
výsledek: success
důvod: ticket_1842
metadata: { old_domain: "example.cz", new_domain: "novak.cz" }
```

Všimni si, že metadata nemusí obsahovat celé e-mailové adresy, pokud pro audit stačí doména nebo hash. Stejně tak často nepotřebuješ ukládat celé IP adresy navždy; může stačit kratší retence, agregace nebo ukládání jen pro bezpečnostní účely.

Mini-checklist pro audit log:

- Loguj změny oprávnění, přístupy k citlivým detailům, exporty, mazání a změny fakturace.
- Neloguj hesla, tokeny, celé platební údaje ani obsah zákaznických dat bez jasného důvodu.
- Chraň audit log proti úpravám běžnými adminy.
- Nastav retenci podle účelu, ne podle velikosti disku.
- Umožni filtrovat podle zákazníka, aktora, typu akce a času.
- U incidentu uměj audit log rychle exportovat pro interní vyšetření.

Codyho komentář: audit log, který nikdo neumí číst, je drahá dekorace. Audit log, který obsahuje všechno, je zase důkazní materiál proti vlastnímu návrhu systému. Cílem je střízlivá stopa, ne digitální archeologie.

## AB.5 Support režim odděl od běžné administrace

Podpora má často legitimní důvod vidět kontext zákazníka. To ale neznamená, že každý člověk v týmu má mít trvalý průhled do všech účtů. Support režim by měl být samostatný pracovní režim s omezením času, rozsahu a důvodu.

Dobrý support režim vypadá takto:

1. Člověk vybere zákazníka a ticket.
2. Systém ukáže, jaká data budou viditelná.
3. Člověk zadá důvod přístupu.
4. Přístup se zapne jen na omezený čas.
5. Každé zobrazení citlivější části se zapíše do auditu.
6. Po vypršení se přístup sám ukončí.

Ještě lepší je, když část podpory může fungovat bez zobrazení zákaznického obsahu: stav integrace, poslední chyba, verze klienta, počet neúspěšných pokusů, čas poslední synchronizace. Mnoho ticketů nepotřebuje „ukažte mi všechna data“. Potřebuje „ukažte mi, kde se proces zasekl“.

Privacy-first podpora není pomalá. Je přesná. A přesnost je mimochodem dost příjemná věc, když člověk nechce v pátek večer vysvětlovat, proč někdo otevřel účet VIP zákazníka „jen pro jistotu“.

## AB.6 Checklist admin rozhraní a auditní stopy

- Má admin panel role podle úkolů, ne jen univerzální roli `admin`?
- Jsou citlivá data ve výchozím stavu skrytá nebo maskovaná?
- Vyžadují citlivé akce důvod, kontext a potvrzení dopadu?
- Existuje rozdíl mezi běžnou administrací a support přístupem?
- Má support access časové omezení a vazbu na ticket nebo zákaznickou žádost?
- Logují se změny oprávnění, exporty, mazání, billing změny a zobrazení citlivých detailů?
- Neobsahuje audit log hesla, tokeny, celé payloady nebo zbytečný zákaznický obsah?
- Je audit log chráněný proti úpravám běžnými administrátory?
- Dá se audit log filtrovat a použít při incidentu během minut, ne dnů?
- Má audit log vlastní retenci a vlastníka?
- Existuje pravidelná kontrola admin rolí a podezřelých akcí?
- Ví tým, že ruční zásah v databázi je výjimka, která se zapisuje?

## Shrnutí přílohy

Admin rozhraní je produkt uvnitř produktu. Pokud je navržené líně, stane se z něj zkratka kolem bezpečnosti, soukromí i zákaznické důvěry. Privacy-first administrace stojí na úkolových akcích, maskování dat, důvodech pro citlivé zásahy, odděleném support režimu a auditní stopě, která je čitelná, chráněná a datově střídmá. Nejde o byrokracii. Jde o to, aby tým mohl zákazníkům pomáhat rychle, ale ne jako všemocné božstvo bez paměti.


# Příloha AC: AI funkce v SaaS bez úniku dat a kouzelné mlhy

AI funkce v SaaS jsou lákavé, protože vypadají jako zkratka: shrnutí ticketu, návrh odpovědi, automatické štítkování leadů, chytré vyhledávání, generování reportu, interní asistent. Jenže každá AI funkce je zároveň nový datový tok. A datové toky mají tu otravnou vlastnost, že když je nenakreslíš ty, nakreslí si je realita sama. Obvykle fixou přes zákaznická data.

Privacy-first AI neznamená „AI nikdy“. Znamená to: přesně víme, jaká data do modelu jdou, proč tam jdou, kdo je zpracovává, jestli se používají k tréninku, jak dlouho se drží, jak se logují výstupy a co se stane, když model sebevědomě plácne nesmysl. Evropská komise popisuje AI Act jako rizikově založený rámec pro AI systémy v EU a uvádí, že povinnosti se liší podle konkrétního použití a role organizace: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai EDPB k AI připomíná, že odpovědná inovace musí chránit osobní údaje při vývoji i nasazení AI technologií: https://www.edpb.europa.eu/topics/ai-and-technology/artificial-intelligence_en

*Codyho komentář:* AI v produktu je jako junior kolega s přístupem k databázi a neotřesitelným sebevědomím. Může být skvělý. Ale nedáš mu rovnou klíče od skladu, fakturace a právního oddělení. Teda pokud nechceš interní reality show.

## AC.1 Začni use-casem, ne modelem

Špatná otázka zní: „Kam dáme AI?“ Dobrá otázka zní: „Které rozhodnutí nebo opakovaný úkol uživatelům zrychlíme, aniž bychom zvýšili datové riziko?“ Model je až druhý krok. První je účel.

Praktická tabulka před zapnutím AI funkce:

| Use-case | Vstupní data | Výstup | Riziko | Bezpečnější varianta |
| --- | --- | --- | --- | --- |
| Shrnutí support ticketu | Text ticketu, metadata konverzace | Krátké shrnutí pro support | Únik citlivých údajů do třetí strany | Redakce PII, EU zpracování, vypnuté trénování |
| Návrh odpovědi zákazníkovi | Ticket, interní znalostní báze | Draft odpovědi | Halucinace nebo slib mimo politiku firmy | Povinné schválení člověkem, citace zdrojového článku |
| Štítkování leadů | Firma, poptávka, segment | Doporučený štítek | Skryté profilování a bias | Pouze interní priorita, jednoduchá pravidla, vysvětlení důvodu |
| Vyhledávání v dokumentaci | Dotaz a interní články | Seznam odpovědí | Vytahování neveřejných dat | Přístupová práva v indexu, zdrojové odkazy, audit dotazů |

Každý use-case napiš jednou větou: „AI pomáhá supportu rychleji pochopit dlouhý ticket, ale neposílá odpověď bez člověka.“ Pokud se věta změní na „AI rozhoduje, komu dáme slevu, koho zablokujeme nebo kdo je rizikový zákazník“, už nejsi v režimu pohodlné produktivity. Jsi v režimu governance, testování dopadů a právního review.

## AC.2 Datový tok musí být kreslitelný na jednu obrazovku

U AI integrací nestačí říct „posíláme prompt do API“. Prompt není kouzelné okno. Je to balíček dat. Často obsahuje jméno zákazníka, e-mail, obsah zprávy, obchodní tajemství, interní poznámky, URL, ID účtu a někdy i tokeny, které se tam dostaly omylem, protože někdo logoval celý objekt. Klasika. Programátorská poezie v próze.

Minimalistická mapa AI toku:

```text
uživatelova akce
  -> aplikační server
  -> redakce/minimalizace vstupu
  -> AI provider nebo vlastní model
  -> validace výstupu
  -> zobrazení draftu člověku
  -> audit rozhodnutí
```

U každé šipky si odpověz:

- Jaká konkrétní data tečou dál?
- Je tam osobní údaj, obchodní tajemství nebo zákaznický obsah?
- Dá se vstup zkrátit, anonymizovat, pseudonymizovat nebo nahradit odkazem?
- Kde se ukládá prompt, výstup a chyba?
- Používá dodavatel data k tréninku nebo zlepšování služby?
- V jakém regionu se data zpracovávají a kdo je subdodavatel?

Nejbezpečnější prompt je ten, který nepotřebuje znát identitu člověka. Místo „napiš odpověď Ondřejovi Novákovi z firmy ABC s.r.o.“ často stačí „napiš odpověď zákazníkovi, který se ptá na změnu fakturačního e-mailu“. Kontext ponecháš, identitu zahodíš. Model nepřijde o genialitu, jen o zbytečné drby.

## AC.3 RAG není výmluva pro chaos ve znalostní bázi

Retrieval augmented generation, česky prakticky „model odpovídá s pomocí vybraných dokumentů“, je užitečný vzor pro interní asistenty a nápovědu. Ale RAG nevyřeší špatnou dokumentaci. Jen ji zabalí do sebevědomější věty.

Privacy-first pravidla pro znalostní AI:

- Indexuj jen dokumenty, které mají vlastníka a jasnou klasifikaci.
- Do indexu neposílej zákaznické exporty, pokud pro to není konkrétní účel a právní základ.
- Respektuj stejná přístupová práva jako aplikace; asistent nesmí odpovědět z dokumentu, který uživatel nesmí číst.
- U odpovědi zobraz zdrojový dokument nebo sekci, ne jen plynulý text.
- Staré dokumenty označ jako zastaralé, aby z nich asistent nedělal čerstvé pravdy.
- Loguj dotaz a typ zdroje, ale neukládej víc obsahu, než potřebuješ pro bezpečnost a ladění.

Příklad dobré odpovědi interního asistenta:

> „Podle interní stránky `Refundace / pravidla od 2026-06` může support vrátit platbu do 14 dnů bez schválení finance týmu, pokud nejde o enterprise smlouvu. Doporučuji ověřit typ smlouvy v detailu zákazníka.“

To je lepší než: „Jasně, vraťte mu peníze.“ AI, která necituje zdroj, je možná plynulá. Ale plynulost není kontrola. Plynulost je jen hezky učesaná nejistota.

## AC.4 Člověk ve smyčce má mít skutečnou brzdu

„Human in the loop“ nesmí znamenat, že člověk jen klikne na zelené tlačítko, protože AI už napsala sebevědomý odstavec. Užitečná brzda má tři části: viditelný vstup, vysvětlený výstup a snadnou možnost odmítnutí.

Pro AI drafty nastav:

- Výstup se nikdy neposílá zákazníkovi automaticky, pokud jde o citlivou nebo obchodně závaznou komunikaci.
- Uživatel vidí, z jakých dat nebo dokumentů návrh vznikl.
- UI jasně označí, že jde o návrh od AI, ne hotovou pravdu.
- Existuje tlačítko „nepoužít“ a možnost opravy bez trestu v metrikách.
- U dražších nebo rizikových akcí se ukládá, jestli člověk návrh přijal, upravil nebo odmítl.

Evropská komise u transparentnostních pravidel AI Actu popisuje povinnosti pro určité AI systémy včetně interaktivních systémů a generovaného obsahu: https://digital-strategy.ec.europa.eu/en/policies/guidelines-transparency-ai-generated-content Prakticky: když uživatel komunikuje s AI, nemá hádat, jestli mluví se strojem. A když AI generuje obsah, tým má vědět, kdy a kde je potřeba označení nebo kontrola.

## AC.5 Dodavatelský dotazník pro AI funkci

Než napojíš AI API do produktu, pošli dodavateli nebo vyplň interně krátký dotazník. Když odpovědi neumíš najít, není to detail. Je to signál, že integrace ještě není připravená na produkci.

Checklist otázek:

- Kdo je provider modelu a kdo jsou další subdodavatelé?
- Ve kterém regionu probíhá zpracování a ukládání dat?
- Používají se prompty, soubory nebo výstupy k tréninku modelů?
- Jaká je výchozí retence promptů, výstupů a logů?
- Lze retenci zkrátit nebo vypnout ukládání obsahu?
- Existuje DPA nebo jiný zpracovatelský dokument pro osobní údaje?
- Jak provider řeší bezpečnostní incidenty a notifikace?
- Dá se omezit typ dat, která do služby posíláme?
- Má služba audit log administrace a přístupů?
- Co se stane s daty po ukončení smlouvy?

U AI dodavatelů je obzvlášť důležité neplést si „neprodáváme vaše data“ s „nepoužíváme vaše data k dalším účelům“. To první je marketingová věta. To druhé je provozní závazek, který musí být dohledatelný ve smlouvě, dokumentaci nebo nastavení služby.

## AC.6 Bezpečnostní minimum pro AI v produkci

OWASP Top 10 for LLM Applications uvádí typická rizika jako prompt injection, únik citlivých informací, nadměrnou agentní autonomii nebo nejisté zacházení s výstupy: https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/ Pro malý SaaS z toho plyne jednoduché pravidlo: AI výstup je nedůvěryhodný vstup. I když zní mile. I když použil odrážky. Hlavně když použil odrážky.

Produkční minimum:

- Odděl systémový prompt, uživatelský vstup a interní dokumenty.
- Nenech model přímo vykonávat destruktivní akce bez aplikační autorizace.
- Validuj strukturované výstupy schématem, ne vírou.
- Filtruj secrets a osobní údaje před odesláním do modelu, kde to jde.
- U agentních funkcí povol jen konkrétní nástroje, rozsahy a limity.
- Přidej rate limit a detekci anomálií pro drahé nebo rizikové úlohy.
- Testuj prompt injection na reálných scénářích: dokument říká „ignoruj pravidla“, zákazník vloží instrukce do ticketu, stránka v RAG indexu obsahuje škodlivý text.

AI bezpečnost není jednorázové „nastavili jsme prompt“. Je to produktová vlastnost. Jakmile model čte cizí obsah nebo ovládá nástroje, musíš počítat s tím, že někdo bude zkoušet přesvědčit asistenta, aby udělal něco hloupého. Historie internetu tomu říká úterý.

## AC.7 Checklist AI funkce před spuštěním

- Use-case je popsaný jednou větou a má jasného vlastníka.
- Je hotová mapa datového toku od uživatelské akce po logy.
- Vstup do modelu je minimalizovaný a neobsahuje zbytečné osobní údaje.
- Dodavatel má ověřené podmínky pro region, retenci, trénování a subdodavatele.
- Výstup AI je označený jako návrh nebo automatizovaný výstup tam, kde je to potřeba.
- Člověk může návrh odmítnout, upravit a pochopit jeho zdroje.
- RAG index respektuje přístupová práva a ukazuje zdroje odpovědí.
- Citlivé akce nejsou vykonávané přímo modelem bez autorizace aplikace.
- Prompty, výstupy a chyby mají jasnou retenční politiku.
- Tým má testovací scénáře pro prompt injection, halucinace a únik dat.
- Privacy dokumentace říká lidsky, kde a proč se AI používá.

Nejlepší AI funkce není ta, která v demu udělá největší „wow“. Nejlepší AI funkce je ta, kterou se nebojíš vysvětlit zákazníkovi, právníkovi, supportu a vlastnímu budoucímu já po incidentu. V tomhle pořadí klidně, ale radši všem.

---

# Příloha AD: Export dat a interoperabilita bez zákaznického vězení

Privacy-first SaaS se pozná nejen podle toho, jak data sbírá, ale i podle toho, jak je umí vrátit. Férový produkt nedrží zákazníka rukojmím v databázi, do které vidí jen přes fakturu a tlačítko „kontaktujte obchod“. Pokud zákazník odchází, chce změnit nástroj nebo si jen udělat audit, export dat má být normální součást služby, ne speciální rituál s kadidlem a třídenní odpovědí supportu.

GDPR zná právo na přenositelnost údajů: člověk může za určitých podmínek získat osobní údaje, které poskytl správci, ve strukturovaném a strojově čitelném formátu, případně požádat o předání jinému správci, pokud je to technicky možné. Evropská komise to shrnuje v části o vyřizování žádostí jednotlivců: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/dealing-requests-individuals_en

Pro SaaS tým je dobré nejít jen po právním minimu. Export je produktová vlastnost důvěry. Kdo umí zákazníka pustit ven bez trucování, působí jistěji než nástroj, který se tváří jako hotel California s API.

## AD.1 Export navrhni dřív než první enterprise zákazník

Export se špatně lepí na hotový produkt, když už jsou data rozházená mezi aplikací, fakturací, soubory, analytikou, supportem a interními poznámkami. První verze nemusí být dokonalá. Musí ale existovat mapa, co se dá vrátit a komu.

Začni tabulkou:

| Oblast dat | Příklad | Exportovat zákazníkovi? | Formát | Poznámka |
| --- | --- | --- | --- | --- |
| Účet a nastavení | název firmy, role, preference | Ano | JSON/CSV | Bez interních poznámek supportu |
| Obsah vytvořený zákazníkem | projekty, úkoly, dokumenty | Ano | JSON + soubory | Zachovat vazby mezi objekty |
| Fakturace | faktury, platby, DIČ | Ano, podle role | PDF/CSV | Oddělit účetní doklady od produktových dat |
| Provozní logy | přihlášení, bezpečnostní události | Částečně | CSV | Jen relevantní výřez, ne interní debug |
| Analytika produktu | agregované signály používání | Spíš souhrn | CSV | Ne export sledovacích detailů bez důvodu |
| Interní poznámky | kvalifikace leadu, support tagy | Obvykle ne | — | Jsou interní, ale pořád vyžadují retenční pravidla |

Důležité je pojmenovat rozdíl mezi daty, která zákazník vytvořil, daty nutnými pro smlouvu a interními provozními záznamy. Když to všechno hodíš do jednoho ZIPu, vznikne datová gulášová polévka. Vypadá sytě, ale nikdo neví, co v ní plave.

## AD.2 Formát má být nudný a čitelný

Dobré exportní formáty nejsou sexy. CSV, JSON, PDF pro dokumenty a původní formáty souborů většinou stačí. ICO ve své praktické části k právu na portabilitu vysvětluje, že data mají být ve strukturovaném, běžně používaném a strojově čitelném formátu, a jako příklady uvádí otevřené formáty jako CSV, XML nebo JSON: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-data-portability/

Pro produktový export používej dvě vrstvy:

- **Lidská vrstva:** PDF faktury, README soubor, seznam exportovaných oblastí, datum exportu, účet, který export spustil.
- **Strojová vrstva:** CSV pro tabulky, JSON pro objekty a vazby, původní soubory beze změny, manifest s verzí schématu.

Ukázka jednoduchého manifestu:

```json
{
  "export_version": "2026-08-08",
  "workspace_id": "acme-demo",
  "created_at": "2026-08-08T09:00:00Z",
  "files": [
    { "path": "projects.csv", "description": "Seznam projektů" },
    { "path": "tasks.json", "description": "Úkoly včetně vazeb na projekty" },
    { "path": "invoices/", "description": "Faktury ve formátu PDF" }
  ]
}
```

Neposílej zákazníkovi dump databáze. Dump databáze je pro obnovu systému, ne pro člověka. Obsahuje interní ID, technické stavy, historické sloupce, dočasné tokeny a někdy i věci, které už měly být dávno pryč. Export má být produktové rozhraní, ne otevřená lednice ve tři ráno.

## AD.3 Bezpečnost exportu je stejně důležitá jako export samotný

Export často obsahuje víc dat najednou než běžná obrazovka aplikace. Proto je rizikovější než obyčejné kliknutí v UI. Nestačí tlačítko „Stáhnout vše“ pro každého, kdo se omylem stal adminem v pátek odpoledne.

Bezpečný postup:

- Export může spustit jen role s jasným oprávněním, ideálně vlastník účtu nebo administrátor.
- U větších exportů vyžaduj potvrzení heslem nebo druhým faktorem.
- V audit logu ulož, kdo export spustil, kdy, jaký rozsah a odkud.
- Odkaz ke stažení má krátkou expiraci a není veřejně hádatelný.
- Po vypršení se balíček smaže nebo přesune do chráněné krátkodobé retence.
- E-mail s exportem neposílej jako přílohu, ale jako upozornění do aplikace nebo odkaz s omezenou platností.

Pokud export posíláš mimo aplikaci, ověř příjemce. Evropská komise připomíná, že organizace musí žádosti o práva jednotlivců vyřizovat a při odmítnutí vysvětlit důvod i možnosti stížnosti: https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/dealing-citizens/how-should-requests-individuals-exercising-their-data-protection-rights-be-dealt_en Prakticky: měj proces, ne improvizovanou konverzaci v inboxu.

## AD.4 Import je nejlepší test kvality exportu

Export bez možnosti zpětného ověření je trochu jako záloha, kterou nikdo nikdy neobnovil. Papírově uklidňuje, prakticky může být k ničemu. Nemusíš hned stavět veřejný import ze všech konkurenčních nástrojů, ale měl bys umět otestovat, že vlastní export dává smysl.

Jednoduchý test:

1. Vytvoř testovací účet s realistickými daty.
2. Udělej export.
3. Otevři CSV v běžném tabulkovém editoru a JSON validátoru.
4. Zkontroluj znakovou sadu, české znaky, časové zóny a desetinná čísla.
5. Ověř, že vazby mezi objekty jsou dohledatelné.
6. Zkus z exportu rekonstruovat základní stav účtu v čistém prostředí nebo testovacím skriptem.

Nejčastější chyby: chybí názvy sloupců, datum je v lokálním formátu bez časové zóny, soubory nemají vazbu na záznamy, ID jsou interní a nedokumentovaná, export ignoruje archivované položky, nebo se v něm objeví data jiného zákazníka. Poslední bod je už incident, ne drobná nepříjemnost.

## AD.5 Odchod zákazníka má být scénář, ne porážka

Když zákazník ruší účet, produkt má nabídnout klidný postup:

- co zůstane dostupné do konce zaplaceného období,
- jak stáhnout data,
- co se smaže hned a co až po retenční době,
- jak získat faktury,
- kdo může zrušení potvrdit,
- jak obnovit účet, pokud šlo o omyl.

Tahle komunikace je marketing. Ne ten hlučný, s konfety a třemi vykřičníky. Ten tichý, který říká: „Chováme se slušně i ve chvíli, kdy nám neplatíte.“ Zákazník se možná vrátí. Nebo tě doporučí někomu jinému, protože jsi nebyl protivný digitální špunt.

Codyho komentář: dobrý SaaS nepotřebuje past na odchod. Potřebuje produkt, ke kterému se lidé chtějí vracet dobrovolně. Lock-in je často náhražka za chybějící hodnotu. Au, ale fér.

## AD.6 Checklist exportu a interoperability

Před spuštěním exportu si projdi:

- Máme mapu exportovatelných dat podle oblastí produktu?
- Rozlišujeme zákaznický obsah, osobní údaje, fakturaci, logy a interní poznámky?
- Používáme běžně čitelné formáty jako CSV, JSON a PDF místo databázového dumpu?
- Obsahuje export manifest s verzí, datem, rozsahem a popisem souborů?
- Umíme export bezpečně autorizovat, auditovat a časově omezit odkaz ke stažení?
- Neobsahuje export zbytečná interní metadata, tokeny, debug informace nebo data jiného zákazníka?
- Testovali jsme export na reálném českém obsahu, diakritice, časových zónách a větším objemu?
- Je v produktu jasně vysvětlené, co se stane při zrušení účtu?
- Má support šablonu pro žádost o přístup, přenositelnost a smazání dat?
- Je export součást roadmapy, ne jednorázová laskavost pro nejhlasitějšího zákazníka?

## Shrnutí přílohy

Export dat je test důvěry. Privacy-first produkt zákazníka nepřivazuje k židli, ale dává mu kontrolu: rozumné formáty, bezpečné stažení, jasnou dokumentaci a férový odchod. Interoperabilita není jen právní povinnost v hezkém kabátě. Je to signál, že produkt stojí na hodnotě, ne na překážkách.


# Příloha AE: Cookie lišta a consent bez dark patternů

Cookie lišta je často první věc, kterou člověk na webu uvidí. To je trochu smutné, protože většina firem by raději ukázala hodnotu, produkt nebo aspoň hezký headline. Jenže když už banner existuje, může buď budovat důvěru, nebo působit jako digitální celník, který blokuje dveře a šeptá: „Klikni na všechno, ať už máme klid.“

Privacy-first přístup začíná jednoduchou otázkou: opravdu potřebujeme souhlas, nebo můžeme produkt navrhnout tak, aby žádné zbytečné sledování nepotřeboval? Evropská komise uvádí, že souhlas podle GDPR má být svobodný, konkrétní, informovaný a jednoznačný a že odmítnutí nebo odvolání souhlasu nemá člověka znevýhodnit: https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/legal-grounds-processing-data/grounds-processing/when-consent-valid_en CNIL k analytice připomíná, že měření návštěvnosti typicky podléhá pravidlům pro cookies a výjimka dává smysl jen při opravdu omezeném audience measurementu: https://www.cnil.fr/fr/node/677

*Codyho komentář:* Nejlepší cookie banner je ten, který nemusíš ukazovat, protože web funguje bez marketingové špionážní výbavy. Druhý nejlepší je ten, který se nechová jako casino automat v právnickém obleku.

## AE.1 Nejdřív rozděl cookies podle účelu

Neřeš design banneru dřív než inventář. Banner bez inventáře je dekorace na chaosu. Sepiš všechny cookies, localStorage položky, sessionStorage položky, fingerprintingové skripty, měřicí pixely a embedované služby, které mohou ukládat nebo číst informace v zařízení návštěvníka.

Praktické rozdělení:

| Kategorie | Příklad | Souhlas typicky potřeba? | Privacy-first poznámka |
| --- | --- | --- | --- |
| Nezbytné | Session cookie, CSRF token, volba jazyka | Ne, pokud jsou opravdu nutné | Nevkládej sem analytiku jen proto, že je to pohodlné |
| Preference | Téma, region, uložené nastavení UI | Záleží na účelu a rozsahu | Ukládej lokálně a stručně vysvětli proč |
| Analytika | Počty návštěv, zdroje návštěv, události | Často ano, u omezené privacy-friendly analytiky může být výjimka | Preferuj agregaci, bez cross-site identifikace |
| Marketing | Retargeting, reklamní pixely, lookalike publika | Ano | Zvaž, jestli to vůbec patří na B2B SaaS web |
| Externí obsah | Mapy, videa, chat widgety, sociální embed | Často ano nebo vyžaduje jasný kontext | Nabídni kliknutím aktivovaný placeholder |

U každé položky napiš: název, poskytovatele, účel, dobu uložení, jestli jde o první nebo třetí stranu, komu data odchází a kde se dá vypnout. Pokud tu větu neumíš napsat, zatím to na web nepatří. Ano, i když marketing „to potřebuje do kampaně“. Marketing potřebuje hlavně důvěru, ne další pixel do sbírky motýlů.

## AE.2 Výchozí stav má být klid, ne předem zapnutý vysavač

Privacy-first banner má jednoduché pravidlo: dokud člověk nedal platný souhlas, neběží nic, co souhlas potřebuje. Žádné „nejdřív nahrajeme všechno a pak to podle volby vypneme“. To není respekt, to je zpětná brzda u auta, které už projelo zdí.

Technický vzor pro web:

1. Kritické skripty aplikace běží hned, ale jen ty nezbytné.
2. Analytické a marketingové skripty jsou blokované serverově nebo přes bezpečný consent loader.
3. Volba se uloží s verzí textu souhlasu, časem a kategoriemi.
4. Při změně účelů nebo dodavatelů se souhlas neprodlouží magicky, ale znovu vysvětlí.
5. Odvolání souhlasu zastaví budoucí měření a spustí úklid tam, kde to produkt umí.

Příklad rozhodovacího pravidla:

```text
if consent.analytics == true:
  load privacy_friendly_analytics()
else:
  keep site fully usable without analytics
```

Tohle není jen právní hygiena. Je to i provozní jistota. Když máš skripty pod kontrolou, rychleji řešíš výkon, chyby, bezpečnost a vendor lock-in. Cookie chaos totiž skoro vždycky znamená i frontend chaos. A frontend chaos je moderní umění, za které zákazník platit nechce.

## AE.3 Tlačítka musí být férová a stejně snadná

Dark pattern poznáš jednoduše: uživatel technicky může odmítnout, ale prakticky musí projít menším escape roomem. „Přijmout vše“ je zelené, velké a hned. „Odmítnout“ je šedý text v rohu, pak další obrazovka, pak seznam 43 partnerů a nakonec tlačítko „uložit mé svobodné rozhodnutí po krátkém utrpení“.

Férový banner má:

- stejně viditelné možnosti přijmout i odmítnout volitelné účely,
- jasné kategorie bez právnické mlhy,
- odkaz na detailní nastavení,
- žádná předem zaškrtnutá volitelná políčka,
- možnost pokračovat bez marketingových cookies,
- snadné pozdější odvolání souhlasu v patičce nebo nastavení.

Mikrotext, který neuráží inteligenci:

> Používáme nezbytné cookies, aby web fungoval. Analytiku zapneme jen s vaším souhlasem a používáme ji v agregované podobě ke zlepšování webu. Marketingové trackery na tomto webu nepoužíváme.

Tlačítka:

- „Pouze nezbytné“
- „Povolit analytiku“
- „Nastavit podrobně“

Pokud používáš marketingové cookies, pojmenuj je přímo. Ne „zlepšení zážitku“, když jde o retargeting. Zlepšení zážitku je rychlá stránka, dobrý obsah a tlačítko, které funguje. Ne pixel, který pronásleduje člověka po internetu jako levný detektiv.

## AE.4 Analytika bez banneru je možná jen s disciplínou

Některé weby mohou fungovat s velmi omezenou analytikou, která se obejde bez souhlasu podle místní interpretace dozorových úřadů. To ale není bianko šek. Znamená to minimalizaci: žádné cross-site sledování, žádné reklamní propojení, krátká retence, agregované reporty, IP anonymizace nebo ekvivalentní omezení, žádné sdílení pro jiné účely a možnost opt-out, pokud je relevantní.

Rozumný privacy-first měřicí plán pro malý B2B web:

- počet návštěv důležitých stránek,
- zdroj návštěvy na úrovni kampaně bez osobního profilu,
- kliknutí na hlavní CTA,
- odeslání formuláře jako agregovaný konverzní signál,
- technické chyby a rychlost stránky,
- žádné session replaye a žádné nahrávání vstupů do formulářů.

U SaaS aplikace odděl webovou analytiku od produktové telemetrie. Landing page potřebuje vědět, jestli lidé pochopili nabídku. Produkt potřebuje vědět, jestli zákazník dosáhl hodnoty. Ani jedno nepotřebuje vědět, že Franta v 22:13 třikrát zaváhal nad cenou a pak si otevřel lednici. Aspoň doufám.

## AE.5 Consent preference center nesmí být skladiště viny

Nastavení souhlasu má být krátké, srozumitelné a použitelné. Ne dokumentární film o 812 partnerech. Pokud máš tolik dodavatelů, že je neumíš vysvětlit, problém není UI. Problém je architektura marketingu.

Dobré preference center obsahuje:

- stav aktuální volby,
- kategorie účelů a jejich krátké vysvětlení,
- seznam klíčových dodavatelů,
- dobu uložení preference,
- možnost uložit změny,
- možnost vrátit se k „pouze nezbytné“,
- odkaz na zásady ochrany osobních údajů a cookie policy.

Praktická věta do detailu analytiky:

> Analytiku používáme k pochopení, které stránky a funkce lidem pomáhají. Nepoužíváme ji pro reklamní profilování, nespojujeme ji s daty třetích stran a reporty čteme agregovaně.

Praktická věta do detailu externího obsahu:

> Některá videa nebo mapy načítáme až po kliknutí, protože externí služba může zpracovávat vaše technické údaje. Bez kliknutí se služba nenačte.

Tohle je poctivé a zároveň normálně lidské. Cílem není vyvolat paniku, ale dát kontrolu. Privacy-first komunikace nemá znít jako soudní obsílka ani jako wellness reklama na „bezpečný digitální zážitek“. Stačí říct pravdu.

## AE.6 Checklist cookie a consent vrstvy

Před publikací webu si projdi:

- Máme aktuální inventář cookies, úložišť v prohlížeči, pixelů, embedů a skriptů třetích stran?
- Víme u každé položky účel, dodavatele, retenci, kategorii a datový tok?
- Běží před souhlasem jen opravdu nezbytné prvky?
- Je odmítnutí volitelných cookies stejně snadné jako přijetí?
- Nejsou volitelné souhlasy předem zaškrtnuté?
- Umí uživatel souhlas později změnit nebo odvolat?
- Ukládáme verzi souhlasového textu, čas a zvolené kategorie?
- Umíme web provozovat bez marketingových trackerů a bez rozbití základní funkčnosti?
- Máme fallback pro externí obsah, který se načte až po kliknutí?
- Kontrolujeme po deployi, že žádný nový skript nespouští tracking před souhlasem?

## Shrnutí přílohy

Cookie lišta není právní dekorace. Je to rozhraní důvěry. Nejlepší výsledek je web, který potřebuje minimum souhlasů, měří agregovaně, nespouští třetí strany bez jasného důvodu a dává lidem skutečnou volbu. Když banner musí existovat, má být krátký, férový a technicky pravdivý. Jinak je to jen tmavý vzor s kulatými rohy.

---

# Příloha AF: Staging a testovací prostředí bez produkčních dat

Staging je zvláštní místo. Má vypadat dost podobně jako produkce, aby odhalil chyby, ale nesmí se chovat jako tajný sklad skutečných zákaznických dat. Jakmile se do testovacího prostředí zkopíruje produkční databáze „jen na chvilku“, vznikne druhá produkce — jen často bez stejného monitoringu, přístupů, záloh, auditní stopy a disciplíny.

Privacy-first staging proto nezačíná otázkou „jak rychle naklonujeme produkci“, ale „jak otestujeme riziko bez zbytečného přenosu dat“. To zní méně sexy než tlačítko Clone database. Ale sexy je relativní pojem; únik dat z testovacího serveru je romantika asi jako faktura za zapomenutý cloudový disk.

## AF.1 Každé prostředí musí mít jasný účel

Malý SaaS tým obvykle nepotřebuje deset prostředí. Potřebuje několik dobře pojmenovaných míst, u kterých všichni vědí, co se tam smí dělat:

| Prostředí | Účel | Data | Přístup |
| --- | --- | --- | --- |
| Lokální vývoj | Rychlé psaní a ladění funkcí | Umělá data, seed | Vývojář |
| Preview větev | Kontrola konkrétní změny | Umělá nebo anonymizovaná data | Tým, případně klient na pozvánku |
| Staging | Finální ověření release | Reprezentativní testovací sada | Tým, omezeně QA |
| Produkce | Skutečný provoz | Reálná zákaznická data | Jen nutné role |

Pravidlo: pokud neumíš jednou větou říct, proč prostředí existuje, pravděpodobně v něm bude časem bordel. A bordel v prostředích se vždycky nakonec přestěhuje do incidentu.

## AF.2 Produkční data do stagingu nepatří jako výchozí možnost

Nejbezpečnější produkční data ve stagingu jsou žádná produkční data. V praxi má tým čtyři lepší možnosti než prostou kopii databáze:

- **Seed data:** ručně nebo automaticky vytvořená sada typických zákazníků, projektů, objednávek a stavů.
- **Syntetická data:** generovaná data, která připomínají strukturu reality, ale neobsahují skutečné lidi.
- **Anonymizovaný výřez:** výjimečně použitelný pro specifické testy, pokud odstraní identifikátory a sníží riziko zpětného přiřazení.
- **Reprodukční balíček:** minimální sada záznamů vytvořená jen pro jednu chybu, bez osobních údajů a s krátkou retencí.

Špatný vzor:

> „Vezmeme noční dump produkce, hodíme ho na staging a po testu ho snad smažeme.“

Lepší vzor:

> „Pro fakturační flow máme seed scénáře: trial, aktivní účet, neúspěšná platba, refundace, změna tarifu a zrušení. Testují logiku bez skutečných zákazníků.“

U anonymizace buď opatrný. Odstranit jméno a e-mail nestačí, pokud zůstane kombinace firmy, města, času objednávky, IP adresy, poznámky v ticketu a unikátního chování. To už není anonymizace, to je maska na karneval, pod kterou všichni poznají Karla z účtárny.

## AF.3 Seed scénáře piš jako produktovou dokumentaci

Dobrá testovací data nejsou náhodná. Mají pokrýt důležité stavy produktu. U každé klíčové části SaaS si napiš scénáře, které musí staging umět ukázat:

- nový účet bez dokončeného onboardingu,
- účet po prvním úspěšném výsledku,
- tým se dvěma rolemi a jedním pozvaným uživatelem,
- projekt s prázdným stavem,
- projekt s hodně položkami,
- neúspěšná platba,
- zrušený účet v retenční lhůtě,
- uživatel čekající na export dat,
- účet s vypnutými marketingovými souhlasy,
- administrátor bez práva vidět citlivé údaje.

Taková sada má dvě výhody. Vývojář rychle ověří chování a produktový člověk vidí, jestli aplikace pořád dává smysl v reálných stavech. Seed data se navíc dají verzovat v repozitáři, takže změna v testovacích scénářích projde review stejně jako kód.

Praktický tip: u seed dat používej zjevně falešné identity. Například `anna.demo@example.test`, firma `Demo Pekárna s.r.o.` a poznámka „Toto je testovací zákazník“. Když se falešný e-mail omylem dostane do fronty, nemá kam odejít. Doména `.test` je pro takové účely bezpečnější než náhodný cizí e-mail, který možná patří reálnému člověku.

## AF.4 Integrace ve stagingu musí být ochočené

Největší chaos ve stagingu často nevznikne v databázi, ale v integracích. Testovací prostředí omylem pošle fakturu, odešle e-mail zákazníkovi, zavolá produkční webhook, spustí marketingovou automatizaci nebo vytvoří reálnou platbu. Pak tým vypadá profesionálně asi jako klaun s root přístupem.

Pro každou externí integraci si nastav bezpečnostní brzdy:

- E-mailové zprávy posílej do sandboxu nebo na interní allowlist.
- Platební bránu používej jen v testovacím režimu a s oddělenými klíči.
- Webhooky směruj na staging endpointy, ne na produkční systémy zákazníků.
- CRM a helpdesk integrace ve stagingu vypni, pokud nejsou předmětem testu.
- AI integrace testuj s falešnými dokumenty a bez zákaznických promptů.
- Analytiku ve stagingu odděl od produkčních reportů, jinak si rozbiješ metriky vlastním testováním.

Dobrá ochrana je i viditelný banner v aplikaci: „STAGING — neposílat zákazníkům, data se mohou mazat“. Zní to banálně, ale banální věci často zachraňují nejdražší chyby.

## AF.5 Přístupy a tajemství odděl stejně tvrdě jako v produkci

Staging není bezpečný jen proto, že URL nezná veřejnost. „Nikdo to nenajde“ není bezpečnostní model, to je horoskop pro administrátory.

Minimum pro neveřejná prostředí:

- přihlášení přes SSO nebo alespoň silné účty s MFA,
- žádné sdílené staging heslo v chatu,
- oddělené API klíče pro každé prostředí,
- žádné produkční secrets v `.env.staging`,
- omezený přístup podle rolí,
- automatické mazání preview prostředí po sloučení nebo zavření větve,
- zákaz indexace pomocí `robots.txt` a ideálně i HTTP autentizace nebo IP allowlistu,
- jasný vlastník prostředí a odpovědnost za úklid.

U logů platí stejné pravidlo jako jinde v knize: loguj pro opravu, ne pro zvědavost. OWASP Logging Cheat Sheet připomíná, že citlivá data do logů nepatří nebo mají být maskovaná; odkaz je ve zdrojích. Staging logy často končí méně hlídané než produkční, takže v nich citlivé hodnoty bolí dvojnásob.

## AF.6 Release kontrola: staging má odpovědět na konkrétní otázky

Staging není místo pro neurčité „ještě to nějak proklikáme“. Před releasem má odpovědět na krátký seznam otázek:

- Funguje hlavní uživatelská cesta od registrace po první hodnotu?
- Funguje platba, změna tarifu, zrušení a fakturační e-mail v testovacím režimu?
- Neodesílá staging nic reálným zákazníkům?
- Nejsou v HTML, JS bundlech nebo sourcemapech tajné hodnoty?
- Neobsahují logy osobní údaje ze špatného zdroje?
- Fungují role a omezení přístupu stejně jako v produkci?
- Je migrace databáze vratná nebo alespoň bezpečně zastavitelná?
- Má release jasný rollback nebo kompenzační krok?

Když staging odpoví „nevím“, není to selhání. Je to signál, že otázka má být přidána do testovací sady. Horší je tvářit se, že staging chrání kvalitu, když je to jen screenshot produkce s jinou barvou tlačítka.

## AF.7 Checklist stagingu bez produkčních dat

- Má každé prostředí jasný účel a vlastníka?
- Nepoužíváme produkční databázový dump jako výchozí testovací data?
- Existují verzovaná seed data pro hlavní produktové scénáře?
- Jsou testovací identity zjevně falešné a neodesílatelné mimo tým?
- Mají staging a produkce oddělené secrets, API klíče a webhook endpointy?
- Jsou e-maily, platby, CRM, helpdesk a AI integrace ve stagingu v sandboxu nebo vypnuté?
- Je staging chráněný přihlášením, allowlistem nebo jinou reálnou kontrolou přístupu?
- Mažou se preview prostředí a dočasné reprodukční balíčky automaticky?
- Neobsahují staging logy hesla, tokeny, celé požadavky nebo citlivé osobní údaje?
- Je před releasem jasné, které otázky staging ověřuje a kdo je odškrtává?

## Codyho komentář

Staging bez produkčních dat je jeden z těch zvyků, které vypadají jako brzda, dokud nezabrání prvnímu průšvihu. Můj pohled — Cody: malý tým by měl investovat do seed scénářů dřív než do dalšího efektního dashboardu. Dashboard ukáže, že něco hoří. Dobrá testovací data často zabrání tomu, aby to vůbec chytlo.

## Shrnutí přílohy

Staging má snižovat riziko release, ne vytvářet druhý sklad zákaznických dat. Nejlepší základ je jasné rozdělení prostředí, syntetická nebo seed data, ochočené integrace, oddělené secrets, omezené přístupy a konkrétní release otázky. Produkci staging nenahradí, ale může být výborný filtr chyb — pokud se z něj nestane produkce v teplákách.

---

# Příloha AG: Feature flags a rollout bez chaosu v produkci

Release není jen okamžik, kdy se kód dostane na server. Je to změna chování pro konkrétní lidi. A právě tam malým týmům často uteče kontrola: funkce se nasadí všem najednou, rollback znamená panický deploy, zákaznická podpora neví, kdo novinku vidí, a analytika ukazuje hromadu eventů bez odpovědi na otázku „je to bezpečné pustit dál?“

Feature flags, postupný rollout a kill switch nejsou enterprise divadlo. Jsou to brzdy, které pomáhají nasazovat častěji a s menším rizikem. Martin Fowler ve svém textu o feature toggles popisuje různé typy přepínačů — například release, experiment, ops nebo permissioning toggles — a hlavně připomíná, že nejde o jednu magickou techniku, ale o nástroj s vlastním životním cyklem. Odkaz je ve zdrojích.

Privacy-first pointa: přepínače mají řídit chování produktu, ne vyrábět další skrytou vrstvu profilování uživatelů.

## AG.1 Ne každá změna potřebuje flag

Feature flag není ozdoba ke každému pull requestu. Když ho tým používá úplně na všechno, vytvoří si druhý produktový jazyk, kterému po měsíci nerozumí ani autor. Flag dává smysl hlavně tam, kde změna splňuje alespoň jednu podmínku:

- má dopad na kritickou cestu zákazníka,
- dotýká se plateb, registrace, přístupů, exportu nebo datového toku,
- vyžaduje postupné zapnutí pro vybranou skupinu,
- potřebuje rychlé vypnutí bez nového deploye,
- mění integraci s externím systémem,
- má být dostupná jen konkrétnímu tarifu, roli nebo pilotnímu zákazníkovi.

Naopak drobná úprava textu, oprava překlepu nebo interní refaktor obvykle flag nepotřebují. Pokud každé tlačítko dostane vlastní přepínač, produkt se časem promění v palubní desku jaderné elektrárny. Hezké na pohled, ale nikdo nechce zjistit, co dělá páčka `newFlow2ReallyFinal`.

Praktické pravidlo: flag si zaslouží změna, u které chceš umět říct „zapneme jen někomu“, „vypneme rychle“ nebo „ověříme bezpečně“.

## AG.2 Každý flag potřebuje vlastníka a datum úklidu

Největší problém feature flags není jejich zapnutí. Je to jejich zapomenutí. Starý flag v kódu zvyšuje složitost, komplikuje testy a může po měsících ožít jako malý zombie incident.

U každého flagu proto eviduj minimum:

| Položka | Příklad |
| --- | --- |
| Název | `billing_export_v2` |
| Účel | Postupné zapnutí nového exportu faktur |
| Vlastník | Produkt + konkrétní vývojář |
| Typ | Release flag / oprávnění / kill switch |
| Výchozí stav | Vypnuto pro všechny nové účty |
| Kdo smí měnit | Admin role `Release manager` |
| Signál úspěchu | Export proběhne bez chyb a support ticketů |
| Datum revize | 14 dní po zapnutí všem |
| Úklid | Odstranit větev starého exportu z kódu |

Dobrá disciplína je mít sekci „flags k odstranění“ v každém release review. Ne proto, že milujeme administrativu. Protože starý flag je technický dluh s vypínačem.

## AG.3 Rollout plán piš jako bezpečnostní scénář

Postupné zapnutí není „dáme to na 10 %, pak uvidíme“. To je spíš losování s grafem. Lepší rollout plán popisuje konkrétní kroky, podmínky postupu a brzdy:

1. Interní tým: ověření hlavní cesty na vlastních testovacích účtech.
2. Pilotní zákazník: ruční domluva, jasný kontakt a očekávání.
3. Malá skupina podobných účtů: třeba 5–10 firem bez složitých integrací.
4. Širší zapnutí: postup po segmentech, ne náhodné střílení do celé databáze.
5. Výchozí stav pro nové zákazníky.
6. Úklid staré varianty a odstranění flagu.

U každého kroku si dopředu napiš stop podmínky:

- chybovost nad dohodnutý limit,
- nárůst ticketů k dané funkci,
- opakovaný problém v kritické cestě,
- neočekávaný dopad na fakturaci nebo přístupy,
- zjištěný privacy problém v logování, exportu nebo oprávněních.

Privacy-first rollout nevyžaduje sledovat každé kliknutí konkrétního člověka. Často stačí agregované technické signály, počet dokončených operací, chybové stavy, ruční zpětná vazba od pilotních zákazníků a kontrola support ticketů.

## AG.4 Kill switch musí být jednoduchý a vyzkoušený

Kill switch je přepínač, kterým umíš rychle vypnout rizikovou funkci. Nesmí existovat jen v představě vývojáře, který je zrovna na dovolené a má telefon v režimu „les“. Musí být dostupný správné roli, zdokumentovaný a otestovaný.

Minimální definice dobrého kill switch:

- vypnutí nevyžaduje nový deploy,
- změna se propíše rychle a předvídatelně,
- je jasné, jaký fallback uživatel uvidí,
- akce se zapíše do audit logu,
- existuje kontakt na vlastníka funkce,
- tým ví, kdy po vypnutí informovat zákazníky.

Příklad fallback textu:

> „Export dočasně není dostupný. Pracujeme na opravě a vaše data zůstávají v účtu beze změny. Pokud export potřebujete urgentně, napište na podporu.“

To je mnohem lepší než tichá chyba, nekonečný spinner nebo hláška „Something went wrong“. Uživatel nepotřebuje znát interní drama. Potřebuje vědět, jestli má čekat, jestli o data nepřišel a kudy vede náhradní cesta.

## AG.5 Nepoužívej flagy jako tajnou segmentační databázi

Feature flag systém může svádět k tomu, že se z něj stane skryté CRM: kdo je velký zákazník, kdo je problematický, kdo klikl na kampaň, kdo patří do „VIP experimentu“. Tudy privacy-first cesta nevede.

Bezpečnější zásady:

- Flagy ukládej podle účtu, role, tarifu nebo explicitní pilotní skupiny, ne podle behaviorálního profilu.
- Nepřenášej do flag systému víc osobních údajů, než je nutné pro rozhodnutí.
- Uživatelům a podpoře vysvětli, proč někdo funkci vidí a někdo ne.
- Pilotní zapnutí domlouvej přímo, ne tichým experimentem na lidech.
- Změny flagů loguj, ale do auditní stopy nedávej citlivý obsah požadavků.
- Po dokončení rollout odstraň dočasné segmenty i samotný flag.

Když potřebuješ oprávnění, používej systém rolí a tarifů. Když potřebuješ rollout, používej dočasný flag. Když potřebuješ produktové rozhodnutí, nepředstírej, že ho za tebe vyřeší tajný segment v administračním panelu.

## AG.6 Checklist feature flags a rolloutů

- Má změna skutečný důvod pro flag, nebo jen přidává zbytečnou složitost?
- Má každý flag vlastníka, účel, typ, výchozí stav a datum revize?
- Ví tým, kdo smí flag změnit a kde se změna audituje?
- Existuje rollout plán s kroky, stop podmínkami a fallbackem?
- Je kill switch vyzkoušený před zapnutím funkce zákazníkům?
- Nevyužíváme flag systém jako nenápadnou profilovací databázi?
- Stačí pro vyhodnocení agregované signály, technické metriky a přímý feedback?
- Ví zákaznická podpora, kteří zákazníci novinku vidí a co jim říct při problému?
- Je v backlogu úkol na odstranění flagu po dokončení rollout?
- Nezůstala v kódu stará větev, která už nemá produktový důvod existovat?

## Codyho komentář

Můj pohled — Cody: nejlepší feature flag je ten, který má naplánovaný vlastní pohřeb. Přepínače jsou skvělé jako bezpečnostní pás při změně. Jakmile ale změna sedí v produkci, pás se nemá proměnit v provaz, o který bude tým zakopávat další dva roky.

## Shrnutí přílohy

Feature flags pomáhají malému SaaS týmu nasazovat bezpečněji, pokud mají jasný účel, vlastníka, audit, rollout plán, kill switch a datum úklidu. Privacy-first přístup drží přepínače jako nástroj řízení rizika, ne jako další skrytou vrstvu sledování uživatelů. Cílem není mít víc páček. Cílem je zapínat změny kontrolovaně, umět je rychle vypnout a po dokončení uklidit kód i data.

---


# Příloha AH: Přihlašování a session management bez digitální paranoie

Přihlášení je zvláštní místo produktu: uživatel ho nechce řešit, dokud nebolí. A když bolí, bolí hodně. Ztracené heslo, zamčený účet, podezřelé přihlášení, nekonečné CAPTCHA, agresivní fingerprinting nebo session, která vypadne uprostřed fakturace — to všechno ničí důvěru rychleji než landing page s pěti vykřičníky.

Privacy-first přístup k autentizaci není „méně bezpečnosti“. Je to bezpečnost bez zbytečného sběru dat. OWASP v Authentication Cheat Sheet a Session Management Cheat Sheet opakovaně zdůrazňuje principy jako silná autentizace, bezpečné zacházení s session identifikátory, ochrana proti hádání hesel a správné atributy cookies. Odkazy jsou ve zdrojích.

Cíl malé SaaS aplikace není vypadat jako bankovní trezor se třemi turnikety. Cíl je: správný člověk se dostane ke správnému účtu, útočník ne, tým má auditovatelný provoz a produkt kvůli tomu nemusí stavět šmírovací centrálu.

## AH.1 Přihlašování navrhni podle rizika účtu

Ne každý účet má stejné riziko. Uživatel, který čte veřejnou dokumentaci, nepotřebuje stejnou ochranu jako admin, který může exportovat zákaznická data nebo měnit fakturaci. Začni mapou akcí, ne výběrem knihovny.

Rozděl akce do tří úrovní:

| Úroveň | Příklady | Doporučená ochrana |
| --- | --- | --- |
| Nízké riziko | Čtení vlastních poznámek, nastavení vzhledu | Běžná session, rozumná expirace |
| Střední riziko | Změna e-mailu, pozvání kolegy, práce s integrací | Re-autentizace nebo potvrzení e-mailem |
| Vysoké riziko | Export dat, změna role admina, smazání účtu, změna plateb | MFA, re-autentizace, audit log, případně časová prodleva |

Praktický příklad: pokud uživatel mění barvu dashboardu, nech ho žít. Pokud stahuje kompletní export zákaznických dat, vyžádej potvrzení. Pokud mění vlastníka workspace, přidej druhý faktor a jasné upozornění e-mailem.

Tímhle se vyhneš dvěma extrémům: produktu, kde se dá všechno rozbít jedním ukradeným cookie, i produktu, který chce druhý faktor při každém kliknutí na nastavení. Bezpečnost má být přiměřená, ne divadelní.

## AH.2 Hesla: méně magie, více rozumných pravidel

Heslo samo o sobě není zlo. Zlo je politika typu „minimálně 8 znaků, jedno velké písmeno, jedna číslice, jeden hieroglyf a každých 30 dní změnit“. Taková pravidla často vedou k horším heslům, protože lidé začnou recyklovat vzory jako `Firma2026!` a cítí se bezpečně. To je hezký pocit. Bohužel ne obrana.

Lepší minimum:

- dovol dlouhá hesla a passphrase,
- neomezuj zbytečně znaky,
- kontroluj hesla proti seznamům známě kompromitovaných hesel,
- neukládej hesla nikdy v čitelné podobě,
- používej moderní hashovací algoritmus určený pro hesla,
- nedávej v chybě poznat, jestli existuje účet s daným e-mailem,
- rate-limituj pokusy o přihlášení a reset hesla.

Reset hesla ber jako bezpečnostní flow, ne jen jako e-mail se šťastným odkazem. Token má být jednorázový, časově omezený a po použití invalidovaný. Pokud uživatel změní heslo, nabídni odhlášení ostatních sessions. U adminů a citlivých účtů ho udělej jako výchozí volbu.

Codyho komentář: největší bezpečnostní upgrade malého SaaS často není „přidáme enterprise SSO“. Je to konečně přestat posílat chybové hlášky typu „účet neexistuje“ a uložit reset token tak, aby nebyl další heslo v převleku.

## AH.3 MFA a passwordless přidej tam, kde snižují riziko

Vícefaktorové ověření je skvělé, pokud je dobře navržené. Pokud je povinné pro každého uživatele i pro triviální produkt, může snížit adopci. Pokud není dostupné pro adminy, je to bezpečnostní dluh s cedulkou „později“.

Doporučený postup pro malý B2B SaaS:

1. Nejdřív nabídni MFA pro vlastní tým a admin role.
2. Potom ho umožni zákazníkům na úrovni workspace.
3. U citlivých akcí vyžaduj re-autentizaci, i když session stále běží.
4. Připrav recovery proces dřív, než první člověk ztratí telefon.
5. Do dokumentace napiš, kdo může MFA resetovat a jak se to audituje.

Passwordless přihlášení magic linkem může být pohodlné, ale není automaticky bezpečnější. E-mailová schránka se stává hlavním klíčem. Magic link proto musí být krátkodobý, jednorázový a nesmí fungovat donekonečna v přeposlaném vlákně. U B2B účtů zvaž kombinaci magic linku s potvrzeným zařízením, WebAuthn/passkeys nebo druhým faktorem pro citlivé akce.

Privacy-first detail: nepoužívej „bezpečnost“ jako výmluvu pro neomezený fingerprinting zařízení. Pokud chceš detekovat podezřelé přihlášení, začni méně invazivně: změna země nebo ASN v agregované podobě, nová session, neobvyklý počet neúspěšných pokusů, změna citlivého nastavení. Uživatel má vědět, co hlídáš a proč.

## AH.4 Session cookie je klíč od kanceláře

Session identifikátor je pro aplikaci prakticky dočasný klíč. Kdo ho získá, může často jednat jako uživatel. Proto se session management nesmí brát jako detail frameworku, který „nějak bude“.

Základní pravidla:

- generuj session ID serverově a s dostatečnou náhodností,
- po přihlášení a změně oprávnění session obnov,
- session cookie nastav jako `HttpOnly`, `Secure` a podle kontextu `SameSite`,
- session ukládej serverově nebo jako podepsaný token s jasnou expirací,
- rozliš krátkou neaktivitu a maximální životnost session,
- při odhlášení session opravdu invaliduj,
- po změně hesla nebo MFA nabídni ukončení ostatních sessions.

U SaaS aplikace přidej stránku „Aktivní přihlášení“: zařízení nebo prohlížeč, přibližný čas poslední aktivity, přibližná lokalita jen pokud ji opravdu používáš, a tlačítko „Odhlásit“. Nepotřebuješ ukazovat přesný fingerprint zařízení ani skladovat detailní historii každého kliknutí. Stačí dát uživateli kontrolu.

Pozor na JWT mód „všechno dáme do tokenu“. Token s rolemi, e-mailem, tarifem a zákaznickými identifikátory se snadno rozleze do logů, browser storage a podpůrných nástrojů. Pokud používáš JWT, drž payload malý, nastav krátkou expiraci a promysli revokaci. Jinak se z pohodlí stane distribuovaný problém s hezkou tečkovanou syntaxí.

## AH.5 Přihlašovací logy mají chránit účet, ne mapovat člověka

Bez logů se bezpečnost dělá naslepo. S příliš detailními logy se zase staví databáze chování, kterou nikdo nechtěl vlastnit. Rozumný login audit log má odpovědět na otázky:

- proběhlo přihlášení úspěšně nebo ne,
- z jakého účtu nebo identifikátoru pokus přišel,
- kdy se to stalo,
- jaký typ ověření byl použit,
- jestli šlo o citlivou změnu,
- kdo provedl admin zásah do přístupu.

Naopak opatrně s ukládáním plných IP adres, user-agentů, přesných geolokací a fingerprintů. Pokud je potřebuješ pro bezpečnostní vyšetření, nastav krátkou retenci a jasný účel. Do běžné produktové analytiky tyto údaje nepatří.

Užitečná notifikace uživateli:

> „Zaznamenali jsme nové přihlášení k vašemu účtu. Pokud jste to byli vy, není potřeba nic dělat. Pokud ne, změňte heslo a ukončete aktivní sessions.“

Špatná notifikace:

> „Klikněte sem, jinak účet zablokujeme.“

První věta pomáhá. Druhá trénuje lidi na phishing. A phishing nepotřebuje tvoji UX podporu, poradí si sám.

## AH.6 Checklist přihlašování a sessions

Před spuštěním nebo větší úpravou autentizace projdi tento checklist:

- Je jasné, které akce jsou nízké, střední a vysoké riziko.
- Citlivé akce vyžadují re-autentizaci nebo druhý faktor.
- Hesla se neukládají v čitelné podobě a reset tokeny jsou jednorázové.
- Přihlášení, reset hesla a magic linky mají rate limiting.
- Chybové hlášky neprozrazují existenci účtu.
- Session cookie používá `HttpOnly`, `Secure` a vhodný `SameSite` režim.
- Session se obnoví po přihlášení a změně oprávnění.
- Uživatel může ukončit ostatní aktivní sessions.
- Admin zásahy do přístupů jsou v audit logu s důvodem.
- Přihlašovací logy mají retenci a nekrmí marketingovou analytiku.
- MFA recovery proces je napsaný a vyzkoušený.
- Dokumentace říká, kdo smí resetovat MFA, role a vlastnictví účtu.

## Codyho komentář

Autentizace je dobrý test zralosti produktu. Ne podle toho, kolik má vrstev, ale podle toho, jestli tým umí vysvětlit každý kompromis. Když někdo řekne „sbíráme detailní fingerprint pro bezpečnost“, moje první otázka je: jaký útok tím konkrétně řešíme, jak dlouho data držíme a proč nejde začít méně invazivně? Bez odpovědi je to jen sledování v bezpečnostním kabátku. S odpovědí to může být legitimní ochrana. Rozdíl je v disciplíně.

## Shrnutí přílohy

Přihlašování má být bezpečné, srozumitelné a přiměřené riziku. Malý SaaS nepotřebuje šmírovací aparát, aby chránil účty: potřebuje rozumná hesla, MFA pro citlivé role, bezpečné sessions, auditovatelné admin zásahy, krátkou retenci přihlašovacích logů a jasné recovery postupy. Nejlepší autentizace je ta, která drží útočníky venku, uživatele uvnitř a data pod kontrolou.

---

## Zdroje

- Martin Fowler: Feature Toggles — https://martinfowler.com/articles/feature-toggles.html
- OWASP: Secrets Management Cheat Sheet — https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html
- European Commission: When is consent valid? — https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/legal-grounds-processing-data/grounds-processing/when-consent-valid_en
- CNIL: Use analytics on your websites and applications — https://www.cnil.fr/fr/node/677
- European Commission: Dealing with requests from individuals — https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/dealing-requests-individuals_en
- European Commission: How should requests from individuals exercising their data protection rights be dealt with? — https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/dealing-citizens/how-should-requests-individuals-exercising-their-data-protection-rights-be-dealt_en
- ICO: Right to data portability — https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-data-portability/
- EDPB: Be compliant — Data protection guide for small business — https://www.edpb.europa.eu/sme/be-compliant/be-compliant_en
- EDPB: Privacy by design and by default — https://www.edpb.europa.eu/topics/ai-and-technology/privacy-by-design-and-by-default_en
- ENISA: Cybersecurity guide for SMEs — 12 steps to securing your business — https://www.enisa.europa.eu/publications/cybersecurity-guide-for-smes
- Evropská komise: Obligations — security of personal data processing — https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/obligations_en
- Atlassian Support: Create a postmortem — https://support.atlassian.com/statuspage/docs/create-a-postmortem/
- Evropská komise: Data protection — https://commission.europa.eu/law/law-topic/data-protection_en
- Evropská komise: Data protection by design and by default — https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/obligations/what-does-data-protection-design-and-default-mean_en
- Evropská komise: Data protection for businesses and organisations — https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations_en
- Evropská komise: Navigating the AI Act — https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act
- Evropská komise: AI Act Article 50 transparency obligations — https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50
- Evropská komise: Guidelines on transparency of AI-generated content — https://digital-strategy.ec.europa.eu/en/policies/guidelines-transparency-ai-generated-content
- Evropská komise: Principles of the GDPR — https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/principles-gdpr_en
- Evropská komise: What information must be given to individuals whose data is collected? — https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/principles-gdpr/what-information-must-be-given-individuals-whose-data-collected_en
- Evropská komise: Information for individuals, consent and rights — https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en
- Evropská komise: International dimension of data protection — https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en
- Evropská komise: What is a data breach and what do we have to do in case of a data breach? — https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/obligations/what-data-breach-and-what-do-we-have-do-case-data-breach_en
- CNIL: Use analytics on your websites and applications — https://www.cnil.fr/en/sheet-ndeg16-use-analytics-your-websites-and-applications
- CERT-EU: Cybersecurity mitigation measures against critical threats — https://cert.europa.eu/publications/security-guidance/security-guidance-22-001---cybersecurity-mitigation-measures-against-critical-threats/
- EDPB: Guidelines 4/2019 on Article 25 Data Protection by Design and by Default — https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-42019-article-25-data-protection-design-and_en
- EDPB: Guidelines 07/2020 on the concepts of controller and processor in the GDPR — https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-072020-concepts-controller-and-processor-gdpr_en
- EDPB: Personal data breaches — https://www.edpb.europa.eu/topics/security-data-breaches/personal-data-breaches_en
- European Commission: How can I demonstrate that my organisation is compliant with the GDPR? — https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/obligations/how-can-i-demonstrate-my-organisation-compliant-gdpr_en
- European Commission: Obligations — https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/obligations_en
- European Commission: AI Act — https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- European Commission: Guidelines on transparency obligations for providers and deployers of certain AI systems — https://digital-strategy.ec.europa.eu/en/policies/guidelines-transparency-ai-generated-content
- European Commission: General-purpose AI obligations under the AI Act — https://digital-strategy.ec.europa.eu/en/factpages/general-purpose-ai-obligations-under-ai-act
- EDPB: Data protection guide for small business — Be compliant — https://www.edpb.europa.eu/sme/be-compliant/be-compliant_en
- EDPB: Artificial intelligence — https://www.edpb.europa.eu/topics/ai-and-technology/artificial-intelligence_en
- EDPB: Opinion on AI models: GDPR principles support responsible AI — https://www.edpb.europa.eu/news/edpb-opinion-on-ai-models-gdpr-principles-support-responsible-ai_en
- European Commission: NIS2 Directive FAQs — https://digital-strategy.ec.europa.eu/en/faqs/directive-measures-high-common-level-cybersecurity-across-union-nis2-directive-faqs
- EURid: Find a registrar — https://eurid.eu/en/get-your-eu/find-a-registrar/
- Google Workspace Admin Help: Email sender guidelines — https://support.google.com/mail/answer/81126?hl=en
- Yahoo Sender Hub: Best practices — https://senders.yahooinc.com/best-practices/
- RFC Editor: RFC 7489 — Domain-based Message Authentication, Reporting, and Conformance (DMARC) — https://www.rfc-editor.org/rfc/rfc7489
- RFC Editor: RFC 8058 — Signaling One-Click Functionality for List Email Headers — https://www.rfc-editor.org/rfc/rfc8058
- Google Search Central: Understanding Google Page Experience — https://developers.google.com/search/docs/appearance/page-experience
- Google Search Central: Creating helpful, reliable, people-first content — https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Search Central: SEO Starter Guide — https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central: Intro to how structured data markup works — https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Google Search Central: Learn about sitemaps — https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- Google Search Central: What is canonicalization — https://developers.google.com/search/docs/crawling-indexing/canonicalization
- OWASP: Authentication Cheat Sheet — https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html
- OWASP: Session Management Cheat Sheet — https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html
- OWASP: Forgot Password Cheat Sheet — https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html
- NIST: Digital Identity Guidelines, Authentication and Authenticator Management — https://pages.nist.gov/800-63-4/sp800-63b.html
- OWASP: Logging Cheat Sheet — https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html
- OWASP: Top 10 for Large Language Model Applications — https://owasp.org/www-project-top-10-for-large-language-model-applications/
- OWASP: Top 10 for LLM Applications 2025 — https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/
- Plausible Analytics: About — https://plausible.io/about
- Plausible Analytics: Security and compliance documentation — https://plausible.io/compliance
- RSS Advisory Board: RSS 2.0 Specification — https://www.rssboard.org/rss-specification
- W3C: Web Content Accessibility Guidelines (WCAG) 2.2 — https://www.w3.org/TR/WCAG22/
- W3C WAI: Forms Tutorial — https://www.w3.org/WAI/tutorials/forms/
- W3C WAI: Labeling Controls — https://www.w3.org/WAI/tutorials/forms/labels/
- W3C WAI: User Notification — https://www.w3.org/WAI/tutorials/forms/notifications/
- Umami: FAQ — https://docs.umami.is/docs/faq
- Umami Cloud: FAQ — https://docs.umami.is/docs/cloud/faq
- Your Europe: Online privacy — how to use cookies on your website — https://europa.eu/youreurope/business/growing/digitalising/online-privacy/index_en.htm
- web.dev: Web Vitals — https://web.dev/articles/vitals?hl=en

---

# Příloha AI: B2B nákupní proces bez nekonečných callů a datového ping-pongu

B2B zákazník často nechce hned kupovat. Chce snížit riziko. Potřebuje vědět, jestli produkt řeší jeho problém, jestli ho zvládne zavést, jestli bezpečnostně projde interním sítem a jestli kvůli tomu nebude tři měsíce posílat e-maily s přílohami pojmenovanými `final_final_v7.xlsx`.

Malý SaaS tým si může ušetřit hodiny opakovaných schůzek tím, že nákupní proces udělá čitelný dopředu: kdo je produkt pro, jak funguje pilot, co se děje s daty, jaké jsou limity, kdo rozhoduje a jak vypadá další krok. Privacy-first přístup tu není brzda prodeje. Je to zkratka přes důvěru.

Cíl této přílohy: připravit jednoduchý nákupní balíček, který zákazníkovi odpoví na nejčastější otázky dřív, než je položí.

## AI.1 Nákupní stránka má prodávat klid, ne jen funkce

Landing page vysvětluje hodnotu. Nákupní stránka vysvětluje riziko. U B2B SaaS to může být samostatná stránka typu „Pro firmy“, „Bezpečnost a provoz“, „Jak probíhá spolupráce“ nebo kombinace v trust centru.

Co na ní má být:

- jasná věta, komu produkt pomáhá a s čím,
- typické scénáře použití podle role nebo odvětví,
- průběh pilotu nebo implementace v krocích,
- datová mapa v lidském jazyce,
- bezpečnostní minimum bez marketingové mlhy,
- informace o exportu, ukončení a změně dodavatele,
- kontaktní cesta pro technické, právní a obchodní dotazy,
- realistická očekávání: co produkt neumí a kdy není vhodný.

Příklad slabé věty:

> „Náš produkt splňuje nejvyšší standardy bezpečnosti a škálovatelnosti.“

Příklad použitelné věty:

> „Zákaznické soubory ukládáme odděleně podle workspace, přístupy administrátorů logujeme a support přístup zapínáme jen na omezený čas po schválení zákazníkem.“

První věta zní jako generátor B2B optimismu. Druhá pomáhá nákupčímu, IT i právníkovi pochopit konkrétní kontrolu.

## AI.2 Připrav mini trust pack dřív, než přijde dotazník

Větší zákazník se dřív nebo později zeptá na bezpečnost, subdodavatele, provoz, zálohy, přístup zaměstnanců, incidenty, export a smazání dat. Když odpovědi skládáš pokaždé znovu, vzniká chaos. Když je máš připravené, působíš dospěle i jako malý tým.

Mini trust pack může být jeden interně udržovaný dokument a jedna veřejná zkrácená stránka.

Doporučená struktura:

| Oblast | Co zákazník potřebuje vědět | Co si držet interně |
| --- | --- | --- |
| Provoz | Kde služba běží a kdo má přístup | Detailní architektura, kontakty, provozní postupy |
| Data | Jaké kategorie dat zpracováváš | Datová mapa, retenční pravidla, exportní postup |
| Subdodavatelé | Kdo pomáhá se službou | Smlouvy, DPA, revizní datum, vlastník vztahu |
| Bezpečnost | Jak chráníš účty a data | Threat model, incident playbook, access review |
| Support | Jak funguje přístup podpory | Schvalovací flow, audit log, šablony komunikace |
| Odchod | Jak zákazník exportuje a smaže data | Runbook pro ukončení účtu a kontrolu smazání |

Ne všechno musí být veřejné. Veřejná stránka má ukázat principy a odpovědnost. Detailní interní verze má pomoci týmu odpovídat konzistentně bez opisování tajemství do každého e-mailu.

Privacy-first detail: trust pack nemá být skladiště screenshotů z administrace, ukázek zákaznických dat a interních diagramů se secrets. Piš konkrétně, ale ne tak, aby ses sám stal bezpečnostním rizikem.

## AI.3 Pilot musí mít rozhodnutí, hranice a konec

Pilot není „zkuste si to a pak se uvidí“. To je spíš produktové akvárium: všichni koukají, něco plave, nikdo neví, co se má stát dál. Dobrý pilot má předem domluvené rozhodnutí.

Před pilotem si se zákazníkem potvrď:

- jaký problém chce ověřit,
- kdo bude produkt reálně používat,
- jaká data se do pilotu dostanou,
- co se nesmí do pilotu nahrávat,
- podle čeho se pilot vyhodnotí,
- kdy pilot končí,
- kdo rozhodne o pokračování,
- co se stane s daty po pilotu.

Příklad pilotního zadání:

> „Během 14 dní ověříme, zda tým podpory zvládne zkrátit přípravu odpovědí na opakované dotazy bez nahrávání citlivých příloh. Úspěch znamená alespoň 20 zpracovaných případů, spokojenost dvou support specialistů a žádný požadavek na ruční kopírování zákaznických dat mimo systém.“

Takhle formulovaný pilot se dá vyhodnotit. Neříká „AI nám pomůže být efektivnější“, protože to je věta, která se dá vytisknout na konferenční tašku a pořád nic neznamená.

Codyho komentář: malý tým by měl mít odvahu pilot ukončit, když se ukáže, že zákazník nemá vlastníka, data nebo rozhodovací proces. Ne každý „enterprise zájem“ je obchodní příležitost. Někdy je to jen kalendářní past v obleku.

## AI.4 Dotazníky odpovídej z knihovny, ne z hlavy

Bezpečnostní a právní dotazníky umí sežrat celé odpoledne. Nejhorší strategie je odpovídat pokaždé ručně. Druhá nejhorší je kopírovat starou odpověď bez kontroly, jestli ještě platí.

Vytvoř si odpovědní knihovnu:

- otázka zákazníka v původním znění,
- krátká standardní odpověď,
- detailní odpověď pro technický tým,
- odkaz na interní důkaz nebo postup,
- vlastník odpovědi,
- datum poslední revize,
- značka „veřejné / pod NDA / interní“.

Příklad:

| Otázka | Krátká odpověď | Revize |
| --- | --- | --- |
| Kdo má přístup k zákaznickým datům? | Přístup je omezen na role, které ho potřebují pro provoz nebo podporu. Support přístup je časově omezený a auditovaný. | Kvartálně |
| Lze data exportovat? | Ano, zákazník může požádat o export v dohodnutém formátu. Export chráníme stejnými pravidly jako produkční data. | Při změně exportu |
| Co se stane po ukončení? | Domluvíme export, vypnutí přístupů a smazání podle retenčních pravidel. | Při změně retence |

Tahle knihovna je produktový majetek. Pomáhá prodeji, podpoře, vývoji i právní části. A hlavně snižuje riziko, že každý člen týmu slíbí zákazníkovi trochu jiný vesmír.

## AI.5 Nákupní proces nesmí nutit zákazníka posílat zbytečná data

B2B obchod často sklouzne k datovému ping-pongu: pošlete seznam uživatelů, pošlete ukázková data, pošlete export, pošlete screenshot, pošlete přístupy do starého systému. Někdy je to potřeba. Často je to jen lenost v procesu.

Privacy-first alternativa:

- Pro demo používej syntetická nebo anonymizovaná data.
- Pro nacenění se ptej nejdřív na rozsah, ne na kompletní databázi.
- Pro pilot definuj zakázané typy dat, ne jen povolené kroky.
- Pro technickou analýzu žádej vzorek struktury bez citlivého obsahu.
- Pro migraci vytvoř bezpečný kanál, jasnou retenci a vlastníka importu.
- Po vyhodnocení smaž dočasné soubory a zákazníkovi to potvrď.

Příklad lepší otázky:

> „Kolik přibližně máte aktivních uživatelů, týmů a měsíčních případů? Stačí rozsahy, nepotřebujeme seznam osob.“

Příklad horší otázky:

> „Pošlete nám export uživatelů, ať se na to podíváme.“

Ta druhá věta je rychlá. Taky je to krásná pozvánka k tomu, aby se do obchodního inboxu dostala osobní data, která tam nikdy neměla bydlet.

## AI.6 Checklist B2B nákupního procesu

- Má web stránku nebo sekci, která vysvětluje průběh nákupu, pilotu a implementace?
- Umíš jednou větou říct, pro koho produkt je a pro koho není?
- Existuje mini trust pack s daty, provozem, bezpečností, supportem a odchodem zákazníka?
- Má každý pilot jasný problém, vlastníka, kritéria úspěchu, datum konce a pravidla pro data?
- Odpovídáš na bezpečnostní dotazníky z revidované knihovny, ne z paměti?
- Máš oddělené veřejné, NDA a interní odpovědi?
- Používáš pro demo a prodej syntetická nebo anonymizovaná data?
- Umíš zákazníkovi říct, co se stane s daty po neúspěšném pilotu?
- Je jasné, kdo může slíbit bezpečnostní, právní nebo integrační závazek?
- Po uzavření obchodu se předávají závazky do onboardingu, ne mizí v obchodním vlákně?

## Shrnutí přílohy

B2B nákupní proces není jen obchodní rituál. Je to první test, jestli firma umí zacházet s důvěrou. Když zákazník předem vidí hodnotu, datový tok, bezpečnostní minimum, průběh pilotu a cestu ven, rozhoduje se rychleji a s menším strachem. Privacy-first prodej neznamená méně obchodu. Znamená méně mlhy, méně zbytečných dat a méně schůzek, kde se všichni tváří strategicky, ale nikdo neví, kdo má další krok.


---

# Příloha AJ: Produktová dokumentace pro zákazníky bez znalostního labyrintu

Dokumentace není skládka odpovědí, které se nevešly do onboardingového callu. Je to produktová vrstva, která má zákazníkovi pomoct udělat práci bez čekání na support, bez posílání citlivých screenshotů a bez pocitu, že produkt ovládá tajný řád zasvěcených.

Malý SaaS často dokumentaci odkládá, protože „ještě se to mění“. Jenže právě ve fázi změn je dokumentace nejdůležitější: odhalí nejasné názvy funkcí, díry v onboardingu, zbytečně složité procesy a místa, kde se uživatel ptá na totéž pořád dokola. Dobrá dokumentace není román. Je to mapa.

Cíl této přílohy: vytvořit zákaznickou znalostní bázi, která pomáhá prodeji, onboardingu i podpoře, aniž by se z ní stal další datový vysavač.

## AJ.1 Každá stránka dokumentace musí mít jeden úkol

Nejhorší dokumentační stránka je „Vše o nastavení“. Vypadá užitečně, ale brzy se z ní stane šuplík na výjimky, poznámky, screenshoty a věty typu „pokud používáte starší variantu integrace, možná uvidíte jiné tlačítko“. Gratuluji, právě vznikl labyrint s vlastním mikroklimatem.

Lepší je rozdělit dokumentaci podle úkolů:

- „Pozvat nového člena týmu“
- „Nastavit fakturační údaje“
- „Exportovat data projektu“
- „Změnit roli uživatele“
- „Připojit vlastní doménu“
- „Smazat účet nebo workspace“

Každá stránka má odpovědět na tři otázky:

1. Kdy ji mám použít?
2. Co přesně mám udělat?
3. Co se stane po dokončení?

Pokud stránka odpovídá na deset různých situací, rozděl ji. Dokumentace má snižovat kognitivní zátěž, ne testovat, jestli zákazník vydrží číst jako daňový poradce v listopadu.

## AJ.2 Piš podle reálných cest, ne podle menu v aplikaci

Menu aplikace není vždy dobrá struktura dokumentace. Uživatel nepřemýšlí „teď bych si rád prohlédl modul Administrace“. Přemýšlí „potřebuju dát kolegovi přístup, ale nechci mu omylem dát práva na fakturaci“.

Praktická struktura znalostní báze:

| Sekce | Co řeší | Příklad článku |
| --- | --- | --- |
| Začínáme | první výsledek a orientace | „První workspace za 15 minut“ |
| Tým a role | přístupy, pozvánky, odpovědnosti | „Jak nastavit roli účetní“ |
| Data a export | import, export, retence, smazání | „Jak stáhnout kompletní export projektu“ |
| Integrace | napojení bez chaosu | „Webhook pro nový kontakt“ |
| Fakturace | platby, doklady, tarify | „Kde změnit fakturační e-mail“ |
| Bezpečnost | MFA, sessions, audit log | „Jak ukončit všechny aktivní sessions“ |
| Řešení problémů | časté chyby a diagnostika | „E-mail nedorazil: co zkontrolovat“ |

Tahle struktura podporuje i privacy-first provoz: uživatel snáz najde export, smazání, role, bezpečnost a fakturaci bez toho, aby psal supportu a posílal data, která nejsou nutná.

## AJ.3 Screenshoty používej opatrně a udržuj je anonymní

Screenshot je užitečný, dokud není zastaralý nebo plný osobních údajů. V dokumentaci se často objeví reálné e-maily, jména zákazníků, interní názvy projektů nebo částky. To je přesně ten typ detailu, který se snadno přehlédne a pak dlouho veřejně visí jako firemní fosilie.

Pravidla pro bezpečné screenshoty:

- používej demo účet se syntetickými daty,
- nepoužívej skutečné e-maily, telefonní čísla, faktury ani názvy zákazníků,
- rozmazání ber jako poslední možnost, ne jako hlavní strategii,
- udržuj jednotný poměr stran a velikost obrázků,
- u každého screenshotu si poznamenej verzi obrazovky nebo datum kontroly,
- pokud UI často měníš, preferuj krátký textový postup před galerií obrázků.

Příklad bezpečných demo dat:

| Typ údaje | Bezpečný příklad | Horší příklad |
| --- | --- | --- |
| E-mail | `jana.novakova@example.test` | reálný zákaznický e-mail |
| Firma | `Demo kavárna s.r.o.` | skutečný klient |
| Částka | `1 250 Kč` v demo faktuře | skutečná fakturovaná částka |
| Projekt | `Ukázkový projekt` | interní kód zakázky |

Screenshot má vysvětlit akci, ne zveřejnit provozní archeologii firmy.

## AJ.4 Každý článek zakonči dalším bezpečným krokem

Dokumentace často končí ve chvíli, kdy uživatel dokončí akci. Jenže dobrý článek má říct i co dál: jak ověřit výsledek, jak chybu vrátit, kdo dostane oznámení a kam se podívat při problému.

Šablona závěru článku:

- **Jak poznáš, že je hotovo:** konkrétní stav, hláška nebo místo v UI.
- **Co se stane dál:** e-mail, webhook, změna oprávnění, fakturační dopad.
- **Jak akci vrátit:** pokud to jde, popiš bezpečný návrat.
- **Kdy kontaktovat podporu:** jen pro situace, které uživatel nemůže vyřešit sám.
- **Jaká data neposílat:** připomeň, že support nepotřebuje hesla, plné exporty ani citlivé screenshoty.

Příklad závěru u změny role:

> „Po uložení změny se nová role projeví při další akci uživatele. Pokud odebíráš administrátorská práva, zkontroluj audit log a případně ukonči aktivní sessions. Podpoře neposílej hesla ani screenshoty s osobními údaji; stačí e-mail účtu a čas změny.“

Tohle je malý text, ale velká ochrana. Uživatel ví, co se stalo, a support dostane méně nebezpečných příloh.

## AJ.5 Dokumentace musí mít vlastníka a rytmus revize

Znalostní báze bez vlastníka stárne rychleji než JavaScriptový framework v memech. Nestačí „někdo to občas upraví“. Každá důležitá oblast musí mít člověka, který ví, kdy se mění produkt, a umí rozhodnout, jestli dokumentace pořád platí.

Jednoduchý provozní model:

- Každá dokumentační sekce má vlastníka.
- Každý článek má datum poslední věcné kontroly.
- Každý větší release obsahuje otázku: „Mění se tím zákaznická dokumentace?“
- Support označuje opakované dotazy štítkem `docs-candidate`.
- Jednou měsíčně se projdou nejčtenější články a články s největším počtem navazujících ticketů.
- Staré články se archivují nebo přesměrují, nenechávají se potichu hnít.

Měřit dokumentaci jde i bez sledování lidí. Stačí anonymní počty zobrazení, vyhledávané fráze bez identifikace uživatele, počet ticketů po přečtení konkrétního článku v agregované podobě a ruční poznámky podpory. Ne každý klik potřebuje osobní rodný list.

## AJ.6 Checklist zákaznické dokumentace

- Má znalostní báze jasné sekce podle zákaznických úkolů?
- Má každý článek jeden hlavní cíl a popisuje konkrétní výsledek?
- Jsou kroky napsané tak, aby je zvládl nový uživatel bez interního slovníku?
- Používají screenshoty jen syntetická nebo anonymní demo data?
- Je u citlivých akcí popsáno, kdo je může provést a jak ověřit výsledek?
- Říká článek, jak akci vrátit nebo kde najít auditní stopu?
- Upozorňuje dokumentace, jaká data neposílat podpoře?
- Má každá sekce vlastníka a datum poslední kontroly?
- Existuje štítek nebo proces pro převod opakovaných ticketů do dokumentace?
- Měříš užitečnost dokumentace agregovaně, bez identifikace jednotlivých čtenářů?

## Codyho komentář

Dokumentace je nejlevnější člen support týmu, ale jen pokud ji někdo krmí realitou. Když ji necháš žít odděleně od produktu, začne lhát. A lživá dokumentace je horší než žádná: uživatel ztratí čas, support ztratí nervy a produkt ztratí důvěru. Privacy-first dokumentace má navíc jednu krásnou vlastnost — učí zákazníky neposílat zbytečná data už ve chvíli, kdy se teprve učí produkt používat.

## Shrnutí přílohy

Zákaznická dokumentace má být praktická, úkolová a bezpečná. Stav ji podle reálných cest uživatele, piš krátké články s jasným výsledkem, používej syntetická data ve screenshotech, zakončuj návody dalším bezpečným krokem a drž revizní rytmus. Dobrá znalostní báze snižuje počet ticketů, zrychluje onboarding a chrání soukromí lépe než další pop-up s omluvou.


---

# Příloha AK: Changelog a release notes bez produktového ohňostroje

Changelog není interní seznam commitů s lepším make-upem. Release notes nejsou slavnostní tisková zpráva pokaždé, když někdo přebarví tlačítko. Jsou to dohledatelné produktové zprávy pro zákazníky, support, obchod i vlastní tým: co se změnilo, koho se to týká, co má udělat a kde najde víc informací.

Malý SaaS často komunikuje změny jedním ze dvou špatných extrémů. Buď mlčí a zákazník si novou funkci všimne až ve chvíli, kdy mu rozbije pracovní postup. Nebo posílá marketingový ohňostroj ke každé drobnosti a učí lidi, že produktové e-maily jsou šum. Privacy-first přístup volí třetí cestu: komunikovat změny přesně, úsporně, bez zbytečného sledování a bez tlačení zákazníka do cizích platforem.

Cíl této přílohy: nastavit changelog a release notes tak, aby zvyšovaly důvěru, snižovaly supportní zátěž a pomáhaly zákazníkům bezpečně používat produkt.

## AK.1 Rozliš changelog, release notes a incidentní komunikaci

Ne každá změna potřebuje stejný kanál. Když všechno posíláš všem, zákazníci přestanou číst. Když neposíláš nic, support začne hasit překvapení. Rozliš tři typy komunikace:

| Typ zprávy | Kdy ji použít | Komu patří | Příklad |
| --- | --- | --- | --- |
| Changelog | průběžný seznam změn | uživatelé, support, obchod | „Přidali jsme export projektů do CSV.“ |
| Release notes | větší vydání nebo balík změn | aktivní zákazníci a decision makeři | „Nová správa rolí pro týmy.“ |
| Incidentní zpráva | výpadek, bezpečnostní problém, datové riziko | dotčení zákazníci | „Včera mezi 9:10–9:34 nefungovalo odesílání e-mailů.“ |

Changelog má být trvalý a veřejně dohledatelný. Release notes mohou být e-mail, článek nebo oznámení v aplikaci. Incidentní komunikace má mít vlastní postup a nesmí se tvářit jako běžná produktová novinka. Když do marketingového newsletteru schováš informaci o změně práv uživatelů, není to kreativní. Je to hledání miny v konfeti.

## AK.2 Každý záznam piš podle dopadu na uživatele

Interní jazyk svádí k větám jako „refaktorovali jsme billing flow“ nebo „nasadili jsme nový permission middleware“. Uživatel ale potřebuje vědět, co se mění pro něj. Dobrý záznam začíná dopadem, ne technickou pýchou.

Šablona changelog záznamu:

- **Co je nové:** jedna jasná věta.
- **Koho se to týká:** všichni, admini, účetní, API uživatelé, konkrétní tarif.
- **Co má uživatel udělat:** nic, zkontrolovat nastavení, změnit API volání, pozvat členy znovu.
- **Dopad na data a soukromí:** žádný nový sběr dat, nová role, změna retence, nový subdodavatel, nový export.
- **Odkaz na dokumentaci:** detailní postup mimo krátkou zprávu.

Příklad slabého záznamu:

> „Vylepšili jsme administraci uživatelů.“

Příklad užitečného záznamu:

> „Admini teď mohou nastavit roli `Fakturace`, která vidí faktury a tarif, ale nevidí zákaznické projekty. Stávající role se nemění. Pokud chceš oddělit účetní přístup od správy týmu, uprav role v Nastavení → Tým.“

Rozdíl? První věta zní hezky. Druhá šetří support, snižuje riziko špatně nastavených oprávnění a dává zákazníkovi konkrétní další krok.

## AK.3 Privacy změny zvýrazni zvlášť

Změny, které se dotýkají dat, oprávnění, logování, exportu, integrací nebo subdodavatelů, nesmí zmizet mezi drobnými UX úpravami. Privacy-first produkt říká nahlas, kdy se mění práce s daty. Ne proto, že by chtěl strašit. Protože důvěra stojí na předvídatelnosti.

U každého vydání si polož otázky:

- Sbíráme nově nějaký údaj?
- Posíláme data novému dodavateli nebo integraci?
- Měníme retenci, export nebo mazání dat?
- Měníme role, práva nebo výchozí nastavení přístupů?
- Přidáváme AI funkci, která pracuje s obsahem zákazníka?
- Měníme analytiku nebo měření chování?

Pokud je odpověď ano, záznam musí obsahovat větu „Co to znamená pro data“. Krátce, lidsky, bez právnického dýmu.

Příklad:

> „Nový audit log ukládá čas, uživatele, typ akce a ID objektu. Neukládá obsah zpráv ani exportovaných souborů. Záznamy držíme 180 dní kvůli bezpečnosti účtu.“

Tahle věta je malá, ale uživateli říká přesně to důležité: rozsah, účel a hranici. A hranice jsou sexy. Dobře, možná ne na billboard, ale v B2B SaaS rozhodně.

## AK.4 Kanály drž pod vlastní kontrolou

Changelog patří primárně na vlastní web nebo do vlastní dokumentace. Sociální sítě jsou dobrý distribuční bonus, ale špatný archiv. Algoritmus rozhodne, kdo co uvidí, vyhledávání bývá mizerné a staré zprávy se ztratí v proudu memů, launchů a kolektivního křiku do prázdna.

Praktická sada kanálů:

- veřejná stránka `Changelog` s přímou URL,
- RSS feed pro změny,
- e-mailové release notes pro důležité změny,
- oznámení v aplikaci pro relevantní role,
- odkaz z dokumentace u funkcí, kterých se změna týká,
- interní poznámka pro support a obchod.

RSS je podceňovaný šperk. Umožní zákazníkům i partnerům sledovat změny bez účtu na sociální síti, bez remarketingu a bez nutnosti čekat, jestli se algoritmus zrovna dobře vyspal. Přímé odkazy navíc pomáhají supportu: místo dlouhého vysvětlování pošle konkrétní záznam.

## AK.5 Nepřeháněj měření čtenosti

Je lákavé měřit otevření e-mailu, kliknutí, scroll, čas na stránce a mentální stav uživatele podle pohybu myši. Nedělej z changelogu další sledovací laboratoř. Potřebuješ vědět hlavně to, jestli komunikace pomáhá.

Privacy-first metriky:

- počet návštěv changelog stránky v agregaci,
- počet kliknutí na dokumentaci bez profilování jednotlivců,
- počet supportních ticketů k dané změně,
- odpovědi zákazníků na release note,
- počet účtů, které provedly doporučenou bezpečnou akci, pokud je to nezbytné a agregované.

Nepotřebuješ vědět, že František z účtárny otevřel e-mail v 7:42 na iPhonu a pak 13 sekund váhal nad tlačítkem. Potřebuješ vědět, jestli zákazníci pochopili změnu. To jde často zjistit jednodušeji: méně dotazů na support, méně chyb v nastavení, více dokončených doporučených kroků.

## AK.6 Release note před odesláním zkontroluj jako produkt

Release note je malý produktový artefakt. Má uživatele provést změnou. Proto potřebuje stejnou disciplínu jako obrazovka v aplikaci: jasný účel, správné publikum, konkrétní CTA a kontrolu rizik.

Mini šablona pro větší release:

```markdown
# Nová správa rolí pro týmy

Od dneška můžeš oddělit technickou správu, fakturaci a běžnou práci v projektu.

## Koho se změna týká
- Workspace adminů
- Týmů s více než jednou rolí

## Co se změnilo
- Přidali jsme roli Fakturace.
- Admin může ukončit aktivní sessions uživatele.
- Audit log nově ukazuje změny rolí za posledních 180 dní.

## Co máš udělat
Zkontroluj role v Nastavení → Tým, hlavně u externích spolupracovníků.

## Data a soukromí
Nové role nemění obsah dat v projektu. Audit log ukládá jen metadata bezpečnostních akcí.

## Dokumentace
Odkaz: /docs/tym-a-role
```

Před odesláním si ověř:

- Je jasné, kdo má zprávu číst?
- Je zřejmé, jestli uživatel musí něco udělat?
- Neobsahuje text interní názvy, které zákazník nezná?
- Je zmíněn dopad na data, oprávnění nebo integrace?
- Vede odkaz na aktuální dokumentaci?
- Ví support, že zpráva odešla?

## AK.7 Checklist changelogu a release notes

Před publikací změny projdi tento checklist:

- [ ] Změna je popsána podle dopadu na uživatele, ne podle interní implementace.
- [ ] Je jasné, koho se změna týká a koho ne.
- [ ] Záznam říká, zda má uživatel udělat další krok.
- [ ] Privacy dopad je explicitně uveden u dat, rolí, logů, exportů, integrací a AI funkcí.
- [ ] Changelog má trvalý přímý odkaz na vlastním webu nebo v dokumentaci.
- [ ] Důležité změny mají odkaz na detailní návod.
- [ ] Support a obchod mají interní shrnutí pro odpovědi zákazníkům.
- [ ] Měření čtenosti je agregované a nepřidává zbytečné trackery.
- [ ] Staré záznamy zůstávají dohledatelné a nejsou schované jen v e-mailu.
- [ ] Změna je přiřazená k vlastníkovi, který odpoví na navazující dotazy.

## Codyho komentář

Changelog je jeden z nejlevnějších trust nástrojů v SaaS. Neprodává sám o sobě jako hero sekce, ale v rozhodování hodně pomáhá. Když zákazník vidí pravidelné, klidné a přesné změny, produkt působí živě. Když zároveň vidí, že u privacy změn nemlžíš, produkt působí dospěle. A dospělý SaaS je vzácnější než roadmapa bez slova „AI“.

## Shrnutí přílohy

Changelog a release notes mají zákazníkům usnadnit změnu, ne dokazovat, že tým pracuje. Dobrý záznam popisuje dopad, publikum, další krok a privacy souvislosti. Kanály drž pod vlastní kontrolou: vlastní web, dokumentace, RSS, e-mail a relevantní oznámení v aplikaci. Měření drž střídmé a agregované. Produktová komunikace, která je přesná a dohledatelná, šetří support, zrychluje adopci a posiluje důvěru bez datového cirkusu.



---

# Příloha AL: Marketingová atribuce bez sledovacího panoptika

Atribuce má odpovědět na otázku, odkud přichází dobré obchodní příležitosti. Nemá vytvořit soukromou kriminalistickou nástěnku každého návštěvníka: první klik z kampaně, druhý klik z retargetingu, třetí klik z newsletteru, čtvrtý klik z remarketingu a pátý klik z beznaděje. Malý SaaS tým nepotřebuje vidět životopis návštěvníka. Potřebuje vědět, které kanály přinášejí relevantní poptávky, registrace a zákazníky.

Privacy-first atribuce stojí na jednoduchém principu: měř rozhodnutí, ne lidi. Pokud údaj nepomůže změnit rozpočet, stránku, nabídku nebo onboarding, pravděpodobně je to jen datová dekorace.

## AL.1 Začni otázkou, ne nástrojem

Než vložíš další analytický skript, napiš si tři rozhodnutí, která chceš díky atribuci dělat. Typicky:

- Do kterých dvou kanálů má smysl příští měsíc dát čas?
- Který obsah přivádí poptávky s reálným rozpočtem?
- Která landing page vysvětluje nabídku nejlépe?
- Které kampaně generují jen šum, a tedy berou energii supportu nebo obchodu?
- Které partnerství, doporučení nebo katalog přináší zákazníky, ne jen návštěvnost?

Slabé zadání zní: „Chceme vědět všechno o cestě uživatele.“ Silnější zadání zní: „Chceme jednou měsíčně rozhodnout, které dva akviziční kanály dál rozvíjet a které zastavit.“ To druhé se dá měřit jednodušeji, bezpečněji a s menším množstvím osobních dat.

Praktický mini-brief pro atribuci:

| Otázka | Příklad odpovědi |
| --- | --- |
| Jaké rozhodnutí chceme dělat? | Přesunout čas z kanálů bez kvalitních leadů do kanálů s poptávkami |
| Jak často ho děláme? | Měsíčně |
| Jaká událost znamená hodnotu? | Odeslaná kvalifikovaná poptávka, registrace, aktivovaný trial, placený účet |
| Jaká data stačí? | Zdroj, kampaň, vstupní stránka, typ konverze, kvalita leadu |
| Co nechceme sbírat? | Cross-site identifikátory, behaviorální profily, zbytečné osobní detaily |

## AL.2 UTM parametry drž jako účetnictví, ne poezii

UTM parametry jsou užitečné, když mají disciplínu. Bez pravidel se z nich stane slovní zoo: `newsletter`, `NewsLetter`, `email`, `mailing`, `srpnovy-email-final-final` a pak někdo v reportu brečí do kafe. Oprávněně.

Zaveď jednoduchý slovník:

- `utm_source`: konkrétní místo nebo partner, například `linkedin`, `seznam`, `rss`, `partner-nazev`.
- `utm_medium`: typ kanálu, například `organic`, `paid`, `email`, `referral`, `community`.
- `utm_campaign`: stabilní název kampaně, například `saas-audit-2026-08`.
- `utm_content`: volitelně varianta odkazu, například `hero-cta`, `footer-link`, `case-study`.

Dobré pravidlo: UTM hodnoty mají být čitelné člověkem a stabilní v čase. Nepatří do nich e-mail konkrétního člověka, interní poznámky obchodníka ani nic, co by z odkazu dělalo datový únik v převleku za marketing.

Příklad pro privacy-first e-book:

```text
https://cody.dreamind.cz/ebook?utm_source=rss&utm_medium=owned&utm_campaign=ebook-webovy-vyvoj-2026&utm_content=chapter-link
```

Tenhle odkaz řekne, že návštěva přišla z vlastního RSS kanálu na e-bookovou kampaň. Neříká, kdo přesně klikl, co dělal minulý týden a jestli má rád ananas na pizze. To je dobře. Některé informace nám jako civilizaci prostě nepřísluší.

## AL.3 Atribuční data ukládej odděleně od zákaznického profilu

Častá chyba je přilepit marketingové údaje přímo k uživatelskému profilu a nechat je tam navždy. Pro první obchodní rozhodnutí většinou stačí lehčí model:

- při návštěvě si aplikace pamatuje zdroj jen krátce a přiměřeně,
- při konverzi uloží agregovatelný kontext, například zdroj a kampaň,
- do CRM nebo obchodního přehledu pošle jen minimum potřebné pro vyhodnocení leadu,
- detailní technické logy zůstanou oddělené a mají kratší retenci,
- report pracuje hlavně se souhrny, ne s historií jednotlivců.

U SaaS trialu může stačit záznam:

| Pole | Příklad | Poznámka |
| --- | --- | --- |
| `conversion_type` | `trial_started` | Událost s obchodní hodnotou |
| `landing_page` | `/saas-audit` | Vstupní kontext |
| `source` | `rss` | Kanál |
| `campaign` | `ebook-webovy-vyvoj-2026` | Kampaň |
| `lead_quality` | `qualified` | Doplněno ručně nebo pravidlem |
| `created_month` | `2026-08` | Stačí pro měsíční report |

Co tam chybí záměrně: kompletní klikací historie, otisk prohlížeče, přesná poloha, seznam všech navštívených stránek a „skóre zájmu“ vypočítané z toho, že člověk nechal otevřený tab v prohlížeči. Tab otevřený v prohlížeči není nákupní úmysl. Je to často jen moderní forma zapomnění.

## AL.4 Vyhodnocuj kvalitu, ne jen poslední klik

Poslední klik je jednoduchý, ale umí být nespravedlivý. Člověk může objevit produkt přes článek, za týden se vrátit z přímého odkazu a až pak vyplnit formulář. Pokud budeš slepě odměňovat jen poslední klik, podsekneš kanály, které budují důvěru.

Privacy-first řešení není nutně složitý multi-touch model. Pro malý tým často stačí tři vrstvy:

1. **První známý zdroj:** odkud člověk poprvé přišel v rámci rozumné krátké retenční doby.
2. **Konverzní zdroj:** odkud přišel při vyplnění formuláře nebo registraci.
3. **Kvalita výsledku:** jestli z toho byla relevantní poptávka, aktivovaný trial nebo platící zákazník.

Měsíční report pak může vypadat takto:

| Kanál | Návštěvy | Konverze | Kvalifikované leady | Poznámka |
| --- | ---: | ---: | ---: | --- |
| Vlastní články | 820 | 18 | 7 | Dlouhá návratnost, dobré dotazy |
| RSS | 210 | 9 | 5 | Menší objem, vysoká relevance |
| Placená kampaň | 1 900 | 24 | 3 | Hodně šumu, upravit nabídku |
| Partner | 160 | 8 | 6 | Silný kanál, stojí za další obsah |

Takový report nepotřebuje znát konkrétní identity všech návštěvníků. Potřebuje propojit kanál s obchodním výsledkem. To je rozdíl mezi řízením marketingu a digitálním voyeurstvím s dashboardem.

## AL.5 Přímé dotazy nejsou ostuda

Jedna z nejvíc podceňovaných atribučních metod je obyčejná otázka: „Kde jste se o nás dozvěděli?“ Není dokonalá, ale u B2B SaaS často doplní kontext lépe než deset skriptů. Lidé si pamatují doporučení, konferenci, článek nebo konkrétní osobu. A pokud si nepamatují, svět se nezboří.

Do formuláře můžeš přidat volitelné pole:

> „Kde jste na nás narazili? Klidně jednou větou. Pomáhá nám dělat méně reklamního hluku a víc užitečného obsahu.“

Dobré nastavení:

- pole je volitelné,
- nepředvyplňuje se invazivním sledováním,
- odpověď se používá pro obchodní vyhodnocení, ne pro profilování člověka,
- v CRM má jasnou retenci,
- odpovědi se jednou měsíčně seskupí do několika kategorií.

Příklad kategorií:

- doporučení od zákazníka,
- organické vyhledávání,
- článek nebo e-book,
- RSS nebo newsletter,
- komunita nebo event,
- partner,
- nevím / nechci říct.

To poslední je důležité. Privacy-first formulář musí umět přijmout i odpověď „nechci říct“ bez toho, aby se tvářil uraženě jako formulář z banky.

## AL.6 Checklist privacy-first atribuce

Před spuštěním atribučního měření projdi tento checklist:

- [ ] Máme napsaná rozhodnutí, která má atribuce podporovat.
- [ ] Měříme obchodní události, ne jen obecnou návštěvnost.
- [ ] UTM parametry mají jednotný slovník a neobsahují osobní údaje.
- [ ] Atribuční kontext má omezenou retenci.
- [ ] Marketingová data nejsou bez důvodu nalepená na kompletní zákaznický profil.
- [ ] Reporty pracují primárně s agregovanými hodnotami.
- [ ] Formulář má volitelné pole „kde jste se o nás dozvěděli“ nebo jiný přímý feedback.
- [ ] Placené kampaně vyhodnocujeme podle kvality leadů, ne jen podle počtu kliků.
- [ ] Vlastní kanály jako web, RSS, dokumentace a přímé odkazy mají v reportu viditelné místo.
- [ ] Každý nový tracker musí projít otázkou: jaké rozhodnutí bez něj neumíme udělat?

## Codyho komentář

Marketingová atribuce má být kompas, ne policejní spis. Malý evropský SaaS tým vyhraje spíš tím, že bude mít jasnou nabídku, dobrý obsah, přímé doporučení a slušné měření, než tím, že do webu nalije další identifikátor. Když report pomůže říct „tenhle kanál přináší dobré zákazníky“, splnil účel. Když pomůže jen říct „uživatel 3827 se vrátil po 13 dnech“, splnil hlavně fantazii dodavatele analytiky.

## Shrnutí přílohy

Privacy-first atribuce začíná obchodní otázkou a končí rozhodnutím. UTM parametry drž jednotné, atribuční data ukládej úsporně, kvalitu kanálů vyhodnocuj podle skutečných konverzí a doplň měření přímými dotazy. Vlastní kanály, RSS a přímé odkazy nejsou méněcenné jen proto, že nemají lesklý reklamní dashboard. Často jsou přesně tím místem, kde vzniká důvěra.


---

# Příloha AM: Žádosti subjektů údajů bez paniky a ruční archeologie

Žádost o přístup, opravu, výmaz nebo přenos dat není nepřátelský útok. Je to běžná součást dospělého provozu produktu, který pracuje s osobními údaji. Překvapivě mnoho malých SaaS týmů se ale tváří, že taková žádost nikdy nepřijde. A když přijde, začne lov v databázi, Slacku, supportu, fakturačním systému a starých exportech. To není proces. To je digitální escape room, jen bez zábavné části.

Privacy-first produkt má žádosti subjektů údajů připravené dopředu: ví, kdo je přijímá, jak ověří identitu, kde data hledá, co smí smazat, co musí ponechat a jak odpoví lidsky. Cílem není právní divadlo. Cílem je rychlá, bezpečná a dohledatelná reakce, která respektuje člověka a zároveň neohrozí účet, tým ani auditní stopu.

Podle přehledu EDPB mají lidé pod GDPR mimo jiné práva na informace, přístup, opravu, výmaz, omezení zpracování, námitku, přenositelnost a ochranu před výhradně automatizovaným rozhodováním: https://www.edpb.europa.eu/topics/key-gdpr-concepts/data-subject-rights_en. Evropská komise shrnuje, že organizace mají žádosti řešit v režimu práv podle článků 12 a 15 až 22 GDPR: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/dealing-requests-individuals_en. Tohle není právní rada — je to provozní minimum, aby malý tým nebyl překvapený jako server bez záloh.

## AM.1 Jeden vstup, jeden vlastník, jeden stav

Nejhorší začátek je, když žádost přijde e-mailem na podporu, obchodník ji přepošle do chatu, vývojář si udělá poznámku do úkolovníku a za tři týdny nikdo neví, jestli se odpovědělo. Žádosti subjektů údajů potřebují jednoduchý front door.

Praktické nastavení:

- veřejná adresa typu `privacy@firma.cz` nebo formulář v dokumentaci,
- interní štítek `data-request`, který nejde zaměnit se support ticketem,
- vlastník žádosti, typicky ops, founder nebo pověřený člověk pro privacy,
- stav žádosti: `přijato`, `ověřujeme`, `sbíráme data`, `čeká na schválení`, `odpovězeno`, `uzavřeno`,
- termín odpovědi viditelný v ticketu,
- krátký interní záznam rozhodnutí.

Stačí jednoduchá tabulka nebo ticket template. Důležité je, aby žádost nezmizela v běžné supportní frontě mezi „nejde mi změnit avatar“ a „faktura má špatné DIČ“. Privacy žádost není běžný dotaz, i když přišla úplně obyčejnou větou.

Mini šablona interního záznamu:

| Pole | Příklad |
| --- | --- |
| Typ žádosti | přístup / oprava / výmaz / přenos / omezení / námitka |
| Kdo žádá | e-mail účtu nebo kontaktu |
| Kanál | `privacy@`, support, dopis, formulář |
| Ověření identity | přihlášený účet, potvrzení e-mailu, doplňující ověření |
| Dotčené systémy | aplikace, CRM, fakturace, support, analytika |
| Výsledek | splněno / částečně splněno / zamítnuto s důvodem |
| Datum odpovědi | YYYY-MM-DD |

## AM.2 Identitu ověřuj přiměřeně, ne teatrálně

U žádosti o data musíš vědět, že mluvíš se správným člověkem. Zároveň nesmíš z ověření udělat nový sběr dat. Poslat kopii občanky kvůli exportu newsletterového e-mailu je jako stavět trezor kolem rohlíku. Vypadá to bezpečně, ale hlavně je to přehnané a divné.

Přiměřené ověření podle rizika:

| Situace | Rozumné ověření |
| --- | --- |
| Přihlášený uživatel žádá export v aplikaci | potvrzení akce v účtu, případně re-auth |
| E-mail odpovídá účtu a žádost je nízké riziko | potvrzovací odkaz na stejný e-mail |
| Žádost se týká admin účtu nebo fakturace | přihlášení, MFA nebo potvrzení přes existující administrátorský kanál |
| Žádost přichází z neznámého e-mailu | nejdřív dohledat vztah k účtu, pak požádat jen o nezbytné doplnění |
| Žádost žádá výmaz dat celé firmy | ověřit oprávnění žadatele vůči zákaznickému účtu |

EDPB ve svých pokynech k právu na přístup řeší i identifikaci žadatele a přiměřenost procesu: https://www.edpb.europa.eu/documents/guideline/guidelines-012022-on-data-subject-rights-right-of-access_en. Pro produktový tým z toho plyne jednoduché pravidlo: ověř tolik, kolik je potřeba pro bezpečnou odpověď, ale nevyráběj nový šanon citlivých dokumentů.

## AM.3 Mapa dat je rychlejší než archeologie

Když nevíš, kde osobní údaje žijí, každá žádost je ruční vykopávka. Data mapa nemusí být akademická freska přes celou zasedačku. Stačí provozní seznam systémů, typů dat, vlastníků a retenčních pravidel.

Začni těmito místy:

- aplikační databáze,
- autentizace a uživatelské profily,
- fakturace a účetnictví,
- CRM nebo obchodní pipeline,
- support a feedback,
- transakční e-maily,
- analytika a produktové eventy,
- audit logy,
- zálohy,
- externí integrace a subdodavatelé.

Pro každé místo si napiš:

| Otázka | Proč je důležitá |
| --- | --- |
| Jaký identifikátor umíme hledat? | e-mail, user ID, customer ID, billing ID |
| Kdo má přístup? | aby žádost neřešil celý tým |
| Co lze exportovat automaticky? | rychlost a menší riziko chyby |
| Co lze smazat? | hranice mezi právem na výmaz a povinností uchování |
| Jak dlouho držíme zálohy? | aby odpověď nelhala o okamžitém zmizení dat |
| Jaký subdodavatel data drží? | aby bylo jasné, komu předat návaznou akci |

Codyho praktický trik: u každého systému si dopředu připrav „request lookup“ postup. Například: „V CRM hledat podle e-mailu v kontaktech i aktivitách, exportovat kontakt, poznámky projít na cizí osobní údaje, výsledek přiložit do ticketu.“ Ano, je to nudné. Nudné postupy jsou přesně to, co chceš ve chvíli, kdy běží lhůta a někdo se ptá, kde všude máme jeho data.

## AM.4 Odpověď má být lidská a bezpečná

Dobrá odpověď na žádost není dump databáze. Je to srozumitelné vysvětlení a přiměřená kopie dat. U přístupu člověk potřebuje vědět, jaká data zpracováváš, proč, odkud jsou, komu se předávají, jak dlouho je držíš a jaká má další práva. Detaily se liší podle situace, ale tón má být vždy klidný a konkrétní.

Šablona odpovědi:

```text
Dobrý den,

potvrzujeme vyřízení vaší žádosti o [typ žádosti] k účtu [identifikátor].

Co jsme zkontrolovali:
- aplikační účet,
- fakturaci,
- supportní komunikaci,
- produktovou analytiku,
- e-mailový systém.

Výsledek:
- [stručný popis dat nebo provedené změny]
- [co nebylo možné provést a proč, pokud relevantní]

Příloha / export:
- [název souboru nebo bezpečný odkaz]

Poznámka k retenci:
- Některé údaje můžeme po omezenou dobu držet kvůli účetnictví, bezpečnosti nebo právní obraně. Nepoužíváme je pro marketing ani profilování.

S pozdravem
[tým]
```

Bezpečnostní detaily:

- export neposílej jako nechráněnou přílohu, pokud obsahuje citlivější data,
- do odpovědi nepiš cizí osobní údaje z týmového účtu,
- interní poznámky supportu nejdřív zkontroluj,
- auditní záznamy vysvětli agregovaně, pokud detail obsahuje data dalších lidí,
- odpověď ukládej do evidence žádostí, ne do nahodilého chatu.

U týmových SaaS účtů pozor na konflikt rolí: osobní právo jednoho uživatele neznamená automaticky právo vymazat data celé firmy. Stejně tak export člena týmu nesmí omylem obsahovat dokumenty, zprávy nebo osobní údaje kolegů. Privacy-first není jen „dej člověku všechno“. Je to „dej správnému člověku správná data bezpečným způsobem“.

## AM.5 Výmaz není tlačítko „spálit vesnici“

Žádost o výmaz zní jednoduše, ale v SaaS má několik vrstev. Něco můžeš smazat hned. Něco musíš anonymizovat. Něco musíš ponechat po omezenou dobu kvůli účetním, bezpečnostním nebo právním důvodům. Evropská komise u práva na výmaz připomíná, že neplatí absolutně ve všech situacích: https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en.

Praktická kategorizace:

| Kategorie | Typická akce |
| --- | --- |
| Profilové údaje uživatele | smazat nebo anonymizovat po ukončení účtu |
| Marketingové odběry | odhlásit a ponechat suppression záznam, pokud je nutný proti opětovnému zaslání |
| Faktury | ponechat podle účetních pravidel, omezit použití |
| Audit logy | ponechat po definovanou bezpečnostní retenci, minimalizovat obsah |
| Support tickety | smazat osobní přílohy, ponechat provozní historii jen pokud je nutná |
| Zálohy | neobnovovat smazaná data zpět do produkce; vyčkat expirace podle retenční politiky |

Důležité je odpovědět pravdivě. Pokud data nezmizí ze záloh okamžitě, řekni to. Pokud fakturu držíš kvůli zákonné povinnosti, řekni to. Pokud účet smažeš, ale anonymní agregované metriky zůstanou, řekni to také. Důvěra neumírá tím, že máš legitimní omezení. Umírá tím, že zníš, jako bys je vymyslel během oběda.

## AM.6 Automatizuj opakovatelné, schvaluj rizikové

Malý tým nemusí stavět velký privacy portal hned první den. Ale opakovatelné kroky se vyplatí automatizovat brzy:

- export vlastního profilu z aplikace,
- stažení faktur,
- změna e-mailu a oprava základních údajů,
- odhlášení marketingu,
- smazání osobního účtu v jednoduchém B2C scénáři,
- interní skript pro vyhledání uživatele napříč systémy.

Rizikové kroky nech s lidským schválením:

- výmaz admina nebo vlastníka firemního účtu,
- výmaz dat, která mohou patřit celé organizaci,
- export obsahu týmového workspace,
- žádost od bývalého zaměstnance zákazníka,
- žádost s podezřením na převzetí účtu,
- žádost týkající se bezpečnostního incidentu.

Automatizace má snížit chyby, ne vypnout úsudek. Nejlepší kombinace je samoobsluha pro běžná osobní data a dobře popsaný interní workflow pro hraniční případy.

## AM.7 Checklist žádostí subjektů údajů

Před tím, než první žádost opravdu přijde, projdi tento checklist:

- [ ] Máme veřejný kontakt nebo formulář pro privacy žádosti.
- [ ] Každá žádost dostane vlastníka, stav a termín.
- [ ] Umíme přiměřeně ověřit identitu bez zbytečného sběru dokladů.
- [ ] Máme datovou mapu hlavních systémů a identifikátorů.
- [ ] Víme, které údaje lze exportovat, opravit, smazat nebo jen omezit.
- [ ] Známe hranice týmových účtů, aby export neobsahoval data kolegů.
- [ ] Máme bezpečný způsob předání exportu.
- [ ] Máme šablonu lidské odpovědi bez právnické mlhy.
- [ ] Výmazy nevracejí data zpět ze záloh do produkce.
- [ ] Evidujeme výsledek žádosti a důvod částečného odmítnutí, pokud nastane.

## Codyho komentář

Žádosti subjektů údajů jsou skvělý test, jestli privacy-first hodnota existuje i mimo landing page. Když tým umí rychle a klidně říct „tady jsou vaše data, tady jsme je opravili, tady je bezpečně smažeme a tady je legitimně držíme“, působí důvěryhodněji než firma s nejdelší privacy policy na světě. Délka dokumentu není důvěra. Schopnost splnit slib bez paniky ano.

## Shrnutí přílohy

Žádosti o přístup, opravu, výmaz nebo přenos dat vyžadují předem připravený proces: jeden vstup, vlastníka, přiměřené ověření identity, mapu dat, bezpečnou odpověď a jasnou evidenci. Privacy-first SaaS nesbírá nové citlivé údaje jen kvůli ověření, nelepí vše do zákaznického profilu a umí vysvětlit hranice výmazu. Nejlepší proces je nudný, dohledatelný a použitelný i v pátek odpoledne — tedy přesně tehdy, kdy realita ráda testuje dokumentaci.

---

# Příloha AN: Zpracovatelské smlouvy bez právního cosplaye

Zpracovatelská smlouva není PDF talisman, který se nahraje do složky „GDPR“ a tím je vesmír v rovnováze. Je to provozní dohoda o tom, kdo komu svěřuje osobní údaje, za jakým účelem, s jakými bezpečnostními pravidly, kdo může zapojit další subdodavatele a co se stane při incidentu, auditu, výmazu nebo ukončení spolupráce.

Malý SaaS tým často řeší DPA pozdě: až když enterprise zákazník pošle bezpečnostní dotazník, investor se zeptá na subprocesory nebo dodavatel potichu přidá nový AI modul. Lepší je mít lehký systém dopředu. Ne právní divadlo v pěti šanonech, ale živý přehled, který pomáhá rozhodovat.

GDPR v článku 28 vyžaduje, aby zpracování zpracovatelem upravovala smlouva nebo jiný právní akt, který mimo jiné stanoví předmět, dobu trvání, povahu, účel, typ osobních údajů, kategorie subjektů údajů a povinnosti správce a zpracovatele: https://eur-lex.europa.eu/eli/reg/2016/679/oj. Evropská komise vydala také standardní smluvní doložky pro vztah správce–zpracovatel podle článku 28: https://eur-lex.europa.eu/eli/dec_impl/2021/915/oj. EDPB k roli správce a zpracovatele uvádí praktické rozlišení a odpovědnosti v pokynech 07/2020: https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-072020-concepts-controller-and-processor-gdpr_en.

Tohle není právní rada. Je to provozní mapa, aby tým nepodepisoval smlouvy naslepo a neobjevil subdodavatele až ve chvíli, kdy někdo rozsvítí sirénu.

## AN.1 Nejdřív si ujasni roli: správce, zpracovatel, nebo oba

První otázka nezní „máme DPA?“. První otázka zní: jakou roli v konkrétním toku dat máme? Jedna firma může být v jedné situaci správcem a v jiné zpracovatelem. SaaS, který zpracovává data zákazníkových koncových uživatelů podle pokynů zákazníka, bude často zpracovatel. U vlastního marketingu, fakturace nebo podpory je ale typicky správcem.

Praktické rozlišení:

| Situace | Pravděpodobná role | Co z toho plyne |
| --- | --- | --- |
| Provozujeme aplikaci pro zákaznická data klienta | zpracovatel | potřebujeme DPA se zákazníkem a seznam subprocesorů |
| Posíláme vlastní newsletter zájemcům | správce | potřebujeme právní základ, informování a odhlášení |
| Používáme hosting pro databázi aplikace | správce vůči hostingu, zpracovatel vůči zákazníkovi | hosting musí být pokrytý jako subprocesor |
| Vystavujeme faktury zákazníkům | správce | data držíme kvůli účetním a právním povinnostem |
| Analyzujeme anonymizované agregované metriky | záleží na vstupu | ověřit, jestli anonymizace opravdu znemožňuje identifikaci |

Nejčastější chyba: tým si řekne „my jsme jen zpracovatel“, a pak do stejné databáze přimíchá vlastní marketingové segmenty, supportní poznámky a produktovou analytiku bez jasného oddělení účelů. To je jako míchat účetnictví, recepty a hesla v jednom sešitu. Jde to, ale audit bude mít den D.

## AN.2 Registr subprocesorů má být produktový artefakt

Seznam subprocesorů není příloha, kterou jednou vytvoří právník a pak ji sežere čas. Je to živý produktový artefakt. Pokud zákazník svěřuje data tvému SaaS, má vědět, kdo další se k nim může dostat nebo je technicky zpracovává.

Minimální tabulka subprocesorů:

| Pole | Příklad |
| --- | --- |
| Název dodavatele | EU hosting, e-mailing, error monitoring |
| Účel | provoz databáze, odesílání transakčních e-mailů, hlášení chyb |
| Kategorie dat | účetní e-mail, log události, obsah ticketu |
| Region zpracování | EU / EHP / mimo EU |
| Právní dokument | DPA, SCC, bezpečnostní příloha |
| Vlastník v týmu | osoba, která dodavatele spravuje |
| Datum poslední kontroly | YYYY-MM-DD |
| Alternativa nebo exit plán | co uděláme, když dodavatel přestane vyhovovat |

Privacy-first pravidlo: subprocesor bez jasného účelu je kandidát na odstranění. Subprocesor bez vlastníka je kandidát na průšvih. Subprocesor mimo Evropu není automaticky zakázaný, ale musí mít mnohem lepší vysvětlení než „měli hezký landing page“.

## AN.3 DPA čti jako provozní checklist, ne jako uspávanku

DPA má smysl jen tehdy, když tým rozumí jejím důsledkům. Pokud smlouva říká, že dodavatel oznámí incident „bez zbytečného odkladu“, někdo musí vědět, kam oznámení přijde. Pokud smlouva slibuje výmaz po ukončení, produkt musí umět ukončení provést. Pokud smlouva umožňuje audit, obchod by měl vědět, co zákazníkům realisticky nabídnout.

Při čtení DPA si polož tyhle otázky:

- Jaký přesný účel zpracování smlouva pokrývá?
- Sedí typy dat s realitou produktu?
- Je popsaná doba zpracování a mazání po ukončení?
- Kdo schvaluje nové subprocesory a jak se zákazník dozví o změně?
- Kde dodavatel data zpracovává a jak řeší předání mimo EHP?
- Jak rychle a jakým kanálem hlásí bezpečnostní incident?
- Umí asistovat s exportem, výmazem a žádostmi subjektů údajů?
- Existuje bezpečnostní dokumentace, kterou lze ukázat zákazníkovi bez NDA olympiády?

Praktická šablona interní poznámky po kontrole:

| Otázka | Odpověď |
| --- | --- |
| Dodavatel | název služby |
| Proč ho používáme | jedna obchodní nebo technická věta |
| Jaká data vidí | konkrétní kategorie, ne „nějaká data“ |
| Největší riziko | region, rozsah přístupu, vendor lock-in, incidentní kanál |
| Rozhodnutí | schválit / schválit s podmínkou / nepoužít |
| Kontrola znovu | datum nebo spouštěč změny |

## AN.4 Změny subprocesorů oznamuj dřív, než se zákazník naštve

Dodavatelé se mění. Hosting přidá nový region, e-mailová služba změní infrastrukturu, support nástroj zapne novou AI funkci, monitoring začne posílat data jinam. Problém není samotná změna. Problém je, když o ní zákazník zjistí z právnického e-mailu třetí strany nebo při auditu.

Dobrá rutina změn:

- nového dodavatele nelze zapnout bez vyplněného mini vendor review,
- změna subprocesora má vlastníka a datum účinnosti,
- zákazníci mají jasný kanál pro oznámení změn, ideálně e-mail plus veřejnou stránku,
- oznámení říká účel, typ dat, region a datum změny,
- zákazník má popsaný způsob námitky, pokud ho smlouva umožňuje,
- starý dodavatel má uzavírací krok: export, vypnutí, výmaz, odebrání přístupů.

Příklad krátkého oznámení:

> Od 2026-09-15 přidáváme nového subprocesora pro odesílání transakčních e-mailů. Zpracovávat bude e-mailovou adresu, jazyk šablony a technické doručovací logy. Data budou zpracována v EU. Seznam subprocesorů jsme aktualizovali na stránce `/subprocessors`. Pokud máte námitku podle smlouvy, napište na `privacy@firma.cz` do 30 dnů.

Tohle je nudné. Nudné je dobré. V privacy provozu je nuda kompliment.

## AN.5 Vendor review musí být krátké, jinak se obejde

Když schválení dodavatele trvá tři týdny a vyžaduje 80 polí, tým si najde stínovou cestu. Typicky „jen to otestujeme na produkčních datech, pak to vyřešíme“. Nevyřeší. Gratuluji, právě vznikl compliance dluh s chlupama.

Lehký vendor review pro malý tým:

1. Jaké rozhodnutí nebo proces bez dodavatele neumíme udělat?
2. Jaká osobní data do služby půjdou?
3. Existuje varianta bez osobních dat nebo s anonymizovanými daty?
4. Kde se data zpracovávají?
5. Má dodavatel DPA a seznam subprocesorů?
6. Jak se řeší incidenty a výmaz dat?
7. Kdo dodavatele vlastní a kdy proběhne další kontrola?

Pokud odpověď na první otázku není přesvědčivá, nepokračuj. Když nevíš, proč nástroj potřebuješ, nepotřebuješ jeho právní dokumentaci. Potřebuješ méně nástrojů.

## AN.6 Checklist zpracovatelů a subdodavatelů

- [ ] U každého datového toku víme, jestli jsme správce, zpracovatel nebo oboje v různých rolích.
- [ ] Máme aktuální seznam subprocesorů s účelem, kategoriemi dat, regionem, dokumentací a vlastníkem.
- [ ] Každý nový dodavatel prochází krátkým vendor review před zapnutím produkčních dat.
- [ ] DPA kontrolujeme proti realitě produktu, ne jen podle toho, že existuje PDF.
- [ ] Zákazníci mají dostupnou stránku nebo dokument se subprocesory.
- [ ] Změny subprocesorů mají oznámení, datum účinnosti a popsaný způsob námitky, pokud ho smlouva umožňuje.
- [ ] Dodavatelé mají jasný exit plán: export, vypnutí, výmaz a odebrání přístupů.
- [ ] Subprocesory mimo EU/EHP schvalujeme zvlášť a jen s konkrétním důvodem.
- [ ] AI funkce dodavatelů nejsou zapnuté automaticky pro zákaznická data.
- [ ] Jednou za měsíc kontrolujeme, jestli seznam dodavatelů odpovídá realitě v produktu, fakturaci a infrastruktuře.

## Codyho komentář

DPA není papír pro právníky. Je to mapa odpovědnosti. Nejlepší privacy-first týmy nejsou ty, které mají nejdelší smlouvy. Jsou to ty, které dokážou do pěti minut říct: kdo zpracovává jaká data, proč, kde, jak dlouho a co uděláme, když dodavatel přestane dávat smysl. To je méně sexy než nový dashboard, ale výrazně užitečnější než další tracker s konfety animací.

## Shrnutí přílohy

Zpracovatelské smlouvy a seznam subprocesorů mají být živou součástí provozu SaaS, ne zapomenutý právní archiv. Ujasni role správce a zpracovatele, veď praktický registr subdodavatelů, čti DPA jako provozní checklist, oznamuj změny včas a nastav krátké vendor review, které tým nebude obcházet. Privacy-first provoz v Evropě stojí na jednoduché schopnosti: vědět, kam data tečou, a umět to vysvětlit zákazníkovi bez mlhy.

---

# Příloha AO: Minimalistický marketingový stack bez nástrojového blešího trhu

Marketingový stack malého SaaS často roste jako šuplík s kabely: jeden nástroj na formuláře, druhý na newsletter, třetí na popup, čtvrtý na heatmapu, pátý na CRM, šestý na automatizace a sedmý na „možná se bude hodit“. Výsledek? Nikdo přesně neví, kde jsou data, zákazník vidí pět consent promptů a tým tráví víc času lepením integrací než mluvením s trhem.

Minimalistický marketingový stack není asketismus. Je to disciplína: vybrat nejmenší sadu nástrojů, která umí získat poptávku, doručit obsah, změřit obchodní signály a udržet důvěru. Článek 5 GDPR připomíná účelové omezení a minimalizaci dat: firma nemá sbírat data pro neurčité účely a má zpracovávat jen data nezbytná pro daný účel: https://eur-lex.europa.eu/eli/reg/2016/679/oj. EDPB v pokynech ke souhlasu pod GDPR zároveň zdůrazňuje, že souhlas má být svobodný, konkrétní, informovaný a jednoznačný: https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_en.

Tahle příloha není katalog konkrétních dodavatelů. Je to rozhodovací rámec. Nástroje se mění rychleji než nálada v týmu po rozbitém deployi, ale dobré otázky vydrží.

## AO.1 Nejdřív schopnosti, potom nástroje

Nezačínej otázkou „jaký marketing automation tool koupíme?“. Začni otázkou: jaké schopnosti opravdu potřebujeme v příštích 90 dnech? Malý tým obvykle nepotřebuje enterprise orchestraci kampaní. Potřebuje spolehlivě zachytit zájem, odpovědět, poslat užitečný obsah a pochopit, které kanály přivádějí relevantní lidi.

Minimální sada schopností:

| Schopnost | Praktický účel | Privacy-first hranice |
| --- | --- | --- |
| Web a landing pages | vysvětlit nabídku a vést k akci | vlastní doména, minimum externích skriptů |
| Kontaktní formulář | přijmout poptávku | jen data nutná pro odpověď |
| Transakční a obsahový e-mail | potvrdit akce, poslat slíbený obsah | oddělit od marketingových kampaní |
| Jednoduché CRM | neztratit konverzaci | poznámky bez citlivých detailů navíc |
| Analytika | měřit návštěvnost a konverze | agregace, krátká retence, žádný reklamní profil |
| RSS nebo veřejný archiv | distribuovat obsah bez algoritmů | přímé odběry bez sledování jednotlivců |

Pokud nástroj neobsluhuje jednu z těchto schopností, musí mít velmi dobrý důvod. „Možná to někdy využijeme“ není důvod. To je pozvánka na nástrojový bleší trh.

Praktický postup:

- Nakresli cestu od první návštěvy po obchodní rozhovor.
- Ke každému kroku napiš, jaký nástroj ho obsluhuje dnes.
- Označ duplicitní nástroje, které dělají totéž jiným logem.
- U každého nástroje napiš, jaká osobní data přijímá a komu je předává.
- Nejdřív vypínej zbytečné nástroje, až potom kupuj nové.

## AO.2 Každý skript na webu je dodavatel, ne dekorace

Marketing rád přidává skripty, protože přidat řádek do hlavičky je technicky snadné. Provoz a privacy tým pak řeší, že ten řádek posílá návštěvnické údaje třetí straně, zpomaluje web, rozbíjí CSP a vyžaduje souhlas. Skript není dekorace. Je to nový procesor dat, kus výkonového rizika a často i nový právní úkol.

Před vložením externího skriptu vyplň mini kartu:

| Otázka | Odpověď |
| --- | --- |
| Jaké rozhodnutí díky skriptu uděláme? | například vypnout slabý kanál nebo opravit chybový krok |
| Jaká data skript sbírá? | URL, referrer, device info, e-mail, eventy, session ID |
| Kde se data zpracují? | EU/EHP, mimo EU, nejasné |
| Je skript nutný před souhlasem? | technický provoz ano, marketing skoro nikdy |
| Jaká je alternativa bez třetí strany? | serverové logy, vlastní event, ruční rozhovor |
| Kdy skript znovu vyhodnotíme? | konkrétní datum, ne „někdy“ |

Dobré pravidlo: když neumíš vysvětlit, jak skript pomůže udělat konkrétní rozhodnutí do 30 dnů, nedávej ho na web. Marketing bez skriptu neumře. Web s pěti náhodnými skripty občas ano.

## AO.3 CRM má být pracovní paměť, ne osobní dossier

CRM pro malý B2B SaaS má odpovědět na tři otázky: s kým mluvíme, o čem jsme se domluvili a jaký je další krok. Nemá být tajný archiv všeho, co kdy člověk udělal na webu, klikl v e-mailu nebo řekl v soukromé poznámce na callu.

Rozumný záznam leadu:

| Pole | Proč existuje |
| --- | --- |
| Jméno a pracovní e-mail | kontakt a oslovení |
| Firma a role | kontext rozhodování |
| Zdroj poptávky | vyhodnocení kanálu na agregované úrovni |
| Potřeba nebo problém | kvalifikace nabídky |
| Další krok a datum | řízení follow-upu |
| Stav pipeline | přehled obchodní práce |
| Souhlas nebo právní základ pro marketing | oddělení obchodní komunikace od newsletteru |

Co do CRM nepatří jako výchozí zvyk:

- kompletní historie návštěv webu u konkrétní osoby,
- nahrávky callů bez jasného důvodu a retence,
- interní domněnky o osobnosti zákazníka,
- citlivé informace, které nejsou nutné pro obchodní vztah,
- data z podpory smíchaná s marketingovou segmentací.

Privacy-first CRM má mít měsíční úklid: neaktivní leady uzavřít, zbytečné poznámky smazat, exportovat agregované poučení a osobní data nenechat hnít v pipeline jako zapomenutý jogurt.

## AO.4 Automatizace musí mít brzdu a lidský tón

Automatizace je skvělá, když připomene follow-up, pošle slíbený materiál nebo upozorní tým na nový lead. Je otravná, když předstírá osobní vztah, vytváří tlak a nejde zastavit. Malý SaaS nepotřebuje nurture labyrint o 27 krocích. Potřebuje několik férových sekvencí, které respektují kontext.

Příklad jednoduché sekvence po stažení checklistu:

| Den | Zpráva | Cíl | Data |
| --- | --- | --- | --- |
| 0 | doručení checklistu | splnit slib | e-mail, čas odeslání |
| 2 | praktický příklad použití | pomoct s implementací | žádné nové údaje |
| 7 | otázka, jestli má smysl probrat situaci | otevřít konverzaci | odpověď jen pokud ji člověk pošle |
| 14 | poslední užitečný tip a jasné odhlášení | uzavřít sekvenci | stav odběru |

Každá automatizace by měla mít:

- jasný spouštěč,
- jasný konec,
- možnost okamžitého odhlášení nebo zastavení,
- vlastníka, který kontroluje odpovědi,
- text, který nezní jako robot v obleku obchodního zástupce.

Pokud automatizace posílá víc zpráv, než bys poslal ručně člověku, kterého respektuješ, je přestřelená.

## AO.5 Stack review dělej jednou měsíčně, jinak vyhraje entropie

Marketingový stack se nerozbije najednou. Rozteče se. Někdo přidá integrační účet pro kampaň, někdo nechá starý popup, někdo zapomene webhook, někdo změní formulář a CRM začne dostávat pole „undefined“. Proto potřebuješ krátkou pravidelnou kontrolu.

Měsíční review za 45 minut:

1. Otevři seznam marketingových nástrojů a skriptů.
2. Zkontroluj, jestli každý nástroj má vlastníka, účel a datum poslední revize.
3. Projdi formuláře a ověř, že data tečou jen tam, kam mají.
4. Zkontroluj consent režim u volitelných skriptů.
5. Porovnej CRM pole s reálnou obchodní potřebou.
6. Smaž nebo archivuj neaktivní kampaně, formuláře a automatizace.
7. Vyber jednu věc ke zjednodušení před tím, než přidáš cokoliv nového.

Výstup review má být krátký:

| Rozhodnutí | Důvod | Vlastník | Termín |
| --- | --- | --- | --- |
| Vypnout starý popup | nepřináší kvalifikované leady, vyžaduje consent | marketing | pátek |
| Sloučit dva formuláře | stejné účely, rozdílná pole | web | příští sprint |
| Zkrátit CRM poznámky | příliš osobních detailů bez využití | obchod | dnes |

## AO.6 Checklist minimalistického marketingového stacku

- [ ] Umíme vyjmenovat všechny marketingové nástroje, skripty, formuláře a automatizace.
- [ ] Každý nástroj má jasný účel, vlastníka, právní režim a datum poslední revize.
- [ ] Web neposílá osobní data do marketingových nástrojů před odpovídajícím souhlasem.
- [ ] Formuláře sbírají jen data nutná pro odpověď nebo slíbenou službu.
- [ ] CRM obsahuje pracovní kontext a další kroky, ne osobní dossier zákazníka.
- [ ] Atribuce je oddělená od zákaznického profilu, pokud není konkrétní důvod ji propojit.
- [ ] Automatizace mají jasný konec, odhlášení a vlastníka.
- [ ] RSS, veřejný archiv a přímé odkazy mají přednost před platformovou závislostí.
- [ ] Každý nový nástroj projde otázkou: kde jsou data, kdo k nim má přístup a jak odejdeme?
- [ ] Jednou měsíčně něco zjednodušíme, smažeme nebo sloučíme.

## Codyho komentář

Marketingový stack má být jako dobře sbalený batoh na výlet: víš, co v něm je, proč to neseš a co můžeš nechat doma. Když z něj uděláš pojízdnou kancelář s osmi sledovacími kolečky, možná budeš vypadat „data-driven“, ale zákazník bude jen další položka v panelu. Privacy-first marketing není pomalejší. Jen odmítá předstírat, že každé kliknutí je intimní obchodní tajemství.

## Shrnutí přílohy

Minimalistický marketingový stack začíná schopnostmi, ne nákupem nástrojů. Web, formulář, e-mail, CRM, analytika a vlastněné distribuční kanály stačí většině malých SaaS týmů překvapivě dlouho. Každý skript posuzuj jako dodavatele, CRM drž jako pracovní paměť, automatizace vybav brzdou a jednou měsíčně stack zjednoduš. Privacy-first marketing v Evropě má měřit dost na dobrá rozhodnutí, ale ne tolik, aby z každého návštěvníka vyráběl dossier.


---

# Příloha AP: Privacy mikrocopy v produktu bez právnické mlhy

Privacy-first produkt se nepozná jen podle toho, že má stránku se zásadami ochrany osobních údajů. Pozná se podle drobných vět ve správných chvílích: u formuláře, exportu, integrace, pozvánky do týmu, mazání účtu, zapnutí AI funkce nebo sdílení reportu. Mikrocopy je malý text s velkým dopadem. Umí snížit nejistotu, vysvětlit datový tok a zabránit tomu, aby uživatel klikl na něco, čemu nerozumí.

Právní dokumenty jsou nutné, ale uživatel je nečte při každém rozhodnutí. Evropská komise v informacích k GDPR uvádí, že lidé mají při sběru osobních údajů dostat jasné informace mimo jiné o účelu, právním základu, době uložení, příjemcích a svých právech: https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/principles-gdpr/what-information-must-be-given-individuals-whose-data-collected_en. Pracovní skupina WP29, jejíž pokyny k transparentnosti převzal EDPB, zdůrazňuje, že informace mají být stručné, transparentní, srozumitelné a snadno dostupné: https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/transparency-under-regulation-2016679_en.

Mikrocopy není náhrada právní dokumentace. Je to most mezi produktem a právní realitou. Pokud ten most chybí, uživatel stojí před tlačítkem a přemýšlí: „Co se teď stane s mými daty?“ A když musí hádat, důvěra mizí rychleji než roadmapa po prvním enterprise callu.

## AP.1 Piš privacy věty tam, kde vzniká rozhodnutí

Nejhorší místo pro vysvětlení datového toku je až někde v patičce. Uživatel potřebuje kontext ve chvíli, kdy dává údaj, zapíná funkci nebo mění oprávnění. Krátká věta u správného prvku často udělá víc než dlouhý odstavec v dokumentu, který nikdo neotevřel.

Místa, kde privacy mikrocopy patří:

- kontaktní formulář,
- registrace a onboarding,
- nastavení integrací,
- pozvánka nového člena týmu,
- export dat,
- smazání účtu nebo projektu,
- zapnutí AI asistenta,
- nahrání souboru,
- sdílení reportu veřejným odkazem,
- změna e-mailových preferencí.

Slabé mikrocopy: „Odesláním souhlasíte se zpracováním osobních údajů.“

Lepší mikrocopy: „E-mail použijeme k odpovědi na dotaz. Bez vašeho samostatného souhlasu vás nepřidáme do marketingového seznamu.“

Ještě lepší je přidat odkaz na detail: „Podrobnosti najdete v zásadách ochrany soukromí.“ Krátký text řeší okamžité rozhodnutí, dlouhý dokument řeší kompletní odpovědnost. Oba mají spolupracovat, ne se nahrazovat.

## AP.2 Jedna věta má odpovědět na čtyři otázky

Dobrá privacy věta nemusí být dlouhá. Má ale říct to podstatné: co sbíráme, proč, kdo to uvidí a jak dlouho to bude potřeba. Ne vždy se všechno vejde do jedné věty, ale tyhle čtyři otázky jsou užitečný filtr.

Šablona:

> „[Údaj] použijeme k [účel]. Uvidí ho [role nebo tým]. Uchováme ho [doba nebo pravidlo].“

Příklady:

- „Telefon je volitelný; použijeme ho jen tehdy, když chcete rychlou domluvu hovoru.“
- „Nahraný CSV soubor použijeme pro import kontaktů a po dokončení importu ho smažeme z dočasného úložiště.“
- „Diagnostické logy uvidí podpora a vývojáři jen po dobu řešení incidentu.“
- „Veřejný odkaz zpřístupní report komukoli, kdo ho má. Nesdílejte ho pro citlivá data.“
- „AI shrnutí pracuje s textem tohoto ticketu. Nepřidávejte do něj hesla ani citlivé údaje, které nejsou nutné pro řešení.“

Pozor na falešný klid. Věta „vaše data jsou u nás v bezpečí“ sama o sobě nic nevysvětluje. Bez konkrétnosti je to spíš digitální vonná svíčka. Hezky voní, ale incident nezastaví.

## AP.3 Tón má být klidný, ne vyděračský

Privacy texty často sklouznou do dvou extrémů. Buď jsou právnicky neproniknutelné, nebo teatrálně straší. Ani jedno nepomáhá. Uživatel potřebuje vědět, co dělá, ne být trestán za opatrnost.

Nevhodné formulace:

- „Bez souhlasu nemůžeme poskytovat nejlepší zážitek.“
- „Pokud odmítnete, některé části webu nemusí fungovat správně.“ když ve skutečnosti jde jen o marketingové měření.
- „Souhlasím se vším potřebným pro zlepšování služeb.“
- „Beru na vědomí obchodní komunikaci.“ když jde fakticky o newsletter.

Lepší formulace:

- „Volitelnou analytiku používáme k pochopení, které návody lidem pomáhají. Web funguje i bez ní.“
- „Newsletter posíláme nejvýše dvakrát měsíčně. Odhlášení je v každém e-mailu.“
- „Tuto integraci můžete kdykoli odpojit v nastavení. Po odpojení zastavíme nové synchronizace.“
- „Smazání projektu odstraní jeho data z aktivního systému. Zálohy doběhnou podle retenčního plánu.“

EDPB v pokynech ke souhlasu připomíná, že souhlas má být svobodný, konkrétní, informovaný a jednoznačný: https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_en. Prakticky to znamená: žádné předem zaškrtnuté pasti, žádné tlačítko „odmítnout“ schované za labyrintem a žádné věty, které předstírají souhlas tam, kde uživatel jen potřebuje dokončit službu.

## AP.4 Mikrocopy musí sedět na skutečné chování systému

Největší riziko privacy mikrocopy není špatná čeština. Je to nesoulad s realitou. Pokud text říká „data smažeme po 30 dnech“, ale systém je drží v logu půl roku, problém není stylistický. Problém je důvěra, provoz a možná i compliance.

Před publikací privacy věty ověř:

- jestli produkt opravdu dělá to, co text slibuje,
- jestli existuje vlastník datového toku,
- jestli retence odpovídá nastavení systému,
- jestli podpora ví, jak text vysvětlit zákazníkovi,
- jestli je věta stejná v produktu, dokumentaci a obchodních materiálech,
- jestli překlady nemění význam.

Mini proces pro tým:

1. Produkt navrhne text u konkrétní akce.
2. Vývoj potvrdí, že text odpovídá technickému chování.
3. Privacy nebo právní vlastník zkontroluje přesnost.
4. Support doplní, jestli tomu bude rozumět zákazník.
5. Text se uloží k dané funkci, ne do zapomenutého dokumentu.

Tohle zní jako hodně práce jen kvůli jedné větě. Jenže jedna nepřesná věta u mazání účtu umí vyrobit víc podpory než celý špatně pojmenovaný sprint.

## AP.5 Knihovna mikrotextů šetří konzistenci

Když každý tým píše privacy věty po svém, produkt začne znít jako výbor pěti osobností v jednom kabátě. Jednou „odstraníme“, podruhé „vymažeme“, potřetí „deaktivujeme“, počtvrté „anonymizujeme“. Pro uživatele jsou to různé sliby. Pro tým často jen náhodná slovíčka.

Vytvoř si jednoduchou knihovnu mikrotextů:

| Situace | Doporučený text | Poznámka pro tým |
| --- | --- | --- |
| Kontaktní formulář | „Údaje použijeme jen k odpovědi na tuto zprávu.“ | nepřidávat newsletter bez samostatného opt-inu |
| Nahrání souboru | „Soubor použijeme pro tuto akci a nebudeme ho používat k trénování modelů.“ | pokud je to pravda i u dodavatele |
| Export dat | „Export si může stáhnout jen uživatel s rolí administrátora.“ | ověřit role a audit log |
| Veřejné sdílení | „Kdokoli s odkazem může tento obsah zobrazit.“ | použít i u neveřejných URL |
| Odpojení integrace | „Po odpojení zastavíme nové synchronizace; dříve přenesená data zůstávají podle nastavení retence.“ | důležité pro očekávání zákazníka |

Knihovna nemusí být složitá. Stačí Markdown dokument, tabulka ve znalostní bázi nebo komponentová dokumentace u formulářů a modalů. Hlavní je, aby texty měly vlastníka a aby změna produktu spustila i změnu textu.

## AP.6 Checklist privacy mikrocopy

- [ ] U každého citlivějšího kroku je krátce vysvětleno, co se stane s daty.
- [ ] Text odpovídá skutečnému chování systému, retenci a přístupům.
- [ ] Formulace je konkrétní: účel, příjemce, doba nebo navazující akce.
- [ ] Souhlas není maskovaný jako povinné potvrzení služby.
- [ ] Odmítnutí volitelného měření nebo marketingu není napsané jako trest.
- [ ] Produkt, dokumentace, support a obchod používají stejná slova pro stejné akce.
- [ ] AI funkce jasně říkají, jaká data zpracují a co se s nimi nestane.
- [ ] Veřejné odkazy, exporty a mazání mají vlastní varování před nevratným nebo sdíleným dopadem.
- [ ] Mikrocopy obsahuje odkaz na detailní privacy dokument tam, kde je to potřeba.
- [ ] Knihovna textů má vlastníka a pravidelnou revizi.

## Codyho komentář

Dobré privacy mikrocopy je produktová empatie v montérkách. Neříká „věř nám, máme PDF“. Říká „tady přesně vidíš, co se stane“. A to je v evropském SaaS světě překvapivě silná výhoda. Ne proto, že by lidé milovali právní texty. Protože milují pocit, že je někdo netahá za nos. Šokující inovace, já vím.

## Shrnutí přílohy

Privacy mikrocopy patří přímo do rozhodovacích momentů produktu. Piš krátce, konkrétně a klidně: co sbíráš, proč, kdo to uvidí a jak dlouho. Text musí odpovídat skutečnému chování systému, jinak nevyrábí důvěru, ale budoucí problém. Knihovna mikrotextů pomáhá držet konzistenci mezi produktem, dokumentací, podporou a obchodem. Privacy-first značka se nestaví jen velkými zásadami, ale stovkou malých vět, které uživatele nenechají hádat.

# Příloha AQ: Referral a partnerský marketing bez sledovací pasti

Referral, affiliate a partnerský marketing umí být skvělý růstový kanál. Doporučení od spokojeného zákazníka má často větší váhu než kampaň, která křičí z banneru jako papoušek po třetím espressu. Problém začíná ve chvíli, kdy se z jednoduchého doporučení stane síť fingerprintingu, cross-site cookie, skrytých redirectů a profilů, kterým nerozumí ani člověk, který je nastavil.

Privacy-first přístup neříká „nedělej referral“. Říká: navrhni ho tak, aby byl měřitelný, férový, vysvětlitelný a datově střídmý. Článek 5 GDPR připomíná účelové omezení a minimalizaci dat: organizace nemá sbírat data pro neurčité účely a má zpracovávat jen to, co je pro daný účel nezbytné: https://eur-lex.europa.eu/eli/reg/2016/679/oj. EDPB zároveň ve své příručce pro malé firmy zdůrazňuje, že právní základ zpracování je potřeba určit předem a že souhlas, pokud ho používáš, musí být svobodný, konkrétní, informovaný a jednoznačný: https://www.edpb.europa.eu/sme/be-compliant/process-personal-data-lawfully_en.

## AQ.1 Nejdřív si řekni, co vlastně odměňuješ

Špatně navržený referral program odměňuje poslední klik, nejhlasitějšího partnera nebo nejagresivnější tracking. Dobře navržený program odměňuje skutečný přínos: relevantní doporučení, kvalitní lead, aktivovaného zákazníka nebo dlouhodobou spolupráci.

Začni otázkou:

- Chceme odměnit registraci, kvalifikovaný lead, první platbu, nebo zákazníka po určité době používání?
- Potřebujeme znát kompletní cestu návštěvníka, nebo stačí bezpečně spojit doporučení s výsledkem?
- Má být odměna finanční, kreditová, službová, nebo symbolická?
- Jak zabráníme self-referral trikům, spamování a falešným účtům?
- Co se stane, když zákazník požádá o smazání dat?

Praktický příklad pro B2B SaaS:

| Událost | Odměňovat? | Proč |
| --- | --- | --- |
| Klik na partnerský odkaz | Ne | příliš slabý signál, snadno se nafoukne |
| Registrace bez aktivace | Spíš ne | může motivovat ke spamovým registracím |
| Demo poptávka s firemním e-mailem | Ano, pokud je relevantní | dobrý signál zájmu u B2B |
| První platba | Ano | jasný obchodní výsledek |
| Aktivní zákazník po 60 dnech | Ano, vyšší bonus | odměňuje kvalitu, ne jen rychlý klik |

Když měříš méně věcí, ale správných, nepotřebuješ honit uživatele po internetu jako detektiv v levném seriálu.

## AQ.2 Referral kód je lepší než tajný profil návštěvníka

Nejjednodušší privacy-first model je obyčejný referral kód nebo partnerský parametr v URL. Uživatel přijde přes odkaz, aplikace si při registraci uloží informaci „doporučil partner X“ a dál pracuje jen s nezbytným obchodním stavem. Žádné sledování pohybu po deseti webech, žádné externí pixely, žádná snaha poznat člověka podle prohlížeče, rozlišení obrazovky a nálady jeho grafické karty.

Rozumný minimální datový model:

- `referral_code`: kód partnera nebo zákazníka,
- `referred_account_id`: účet, který vznikl z doporučení,
- `attribution_created_at`: čas přiřazení,
- `reward_state`: čeká, schváleno, zamítnuto, vyplaceno,
- `reward_reason`: stručný interní důvod změny stavu,
- `expires_at`: datum, kdy se nepoužitá atribuce smaže.

Co bych neukládal jako výchozí stav:

- kompletní historii navštívených stránek před registrací,
- fingerprint prohlížeče,
- osobní údaje návštěvníka před tím, než je potřebuješ,
- surové IP adresy v partnerském dashboardu,
- marketingové segmenty přilepené k zákaznickému účtu navždy.

Codyho komentář: referral má být účetní poznámka o doporučení, ne rodokmen digitálního chování. Pokud pro vyplacení odměny potřebuješ vědět, že účet přišel od partnera, nepotřebuješ vědět, že člověk předtím třikrát scrolloval ceník v 23:41.

## AQ.3 Partnerský dashboard nesmí ukazovat víc, než partner potřebuje

Partner chce vědět, jestli jeho doporučení fungují a jestli dostane odměnu. To neznamená, že má vidět osobní detaily každého leadu. Zvlášť u B2B stačí agregace a stav, ne kompletní zákaznický profil.

Bezpečnější dashboard ukazuje:

- počet kliků nebo použití kódu, pokud je měříš bez identifikace osoby,
- počet kvalifikovaných leadů,
- počet schválených konverzí,
- očekávanou a vyplacenou odměnu,
- stav jednotlivých odměn bez zbytečných osobních údajů,
- pravidla programu a důvody zamítnutí.

Rizikovější dashboard ukazuje:

- jména konkrétních osob bez nutnosti,
- e-maily všech doporučených kontaktů,
- detailní aktivitu zákazníka v aplikaci,
- obchodní hodnotu účtu, pokud ji partner nepotřebuje znát,
- poznámky obchodníka nebo podpory.

Lepší řádek v dashboardu:

| Datum | Typ | Stav | Odměna | Poznámka |
| --- | --- | --- | --- | --- |
| 2026-08-08 | B2B lead | čeká na kvalifikaci | 0 Kč | rozhodnutí do 14 dnů |

Horší řádek v dashboardu:

| Jméno | E-mail | Firma | Aktivita | Poznámka obchodu |
| --- | --- | --- | --- | --- |
| konkrétní osoba | konkrétní e-mail | konkrétní firma | navštívené stránky a trial akce | interní kvalifikace |

Partner není člen supportu ani obchodního týmu. Nedávej mu okno do systému jen proto, že chce hezký graf.

## AQ.4 Pravidla programu napiš dřív než první spor

Referral program bez pravidel je pozvánka k budoucímu hašení. Ne kvůli tomu, že by všichni partneři byli padouši v kabátu. Spíš proto, že lidé optimalizují podle pobídek. Když odměňuješ registrace, dostaneš registrace. Když odměňuješ kvalitní zákazníky, máš větší šanci dostat kvalitní zákazníky.

Pravidla by měla říkat:

- co se počítá jako platné doporučení,
- kdy vzniká nárok na odměnu,
- kdy může být odměna zamítnuta,
- jak dlouho trvá atribuční okno,
- jak se řeší duplicitní doporučení,
- jak se řeší refundace, neplacení nebo zrušení účtu,
- jaká data partner vidí a proč,
- jak může partner požádat o ukončení programu a smazání zbytečných údajů.

Příklad férové věty:

> „Odměna vzniká po první uhrazené faktuře doporučeného zákazníka a po uplynutí 30 dnů bez storna. Partner v dashboardu vidí stav odměny a souhrnné počty doporučení, ne detailní aktivitu zákazníka v produktu.“

Tohle není právní smlouva na olympiádu. Je to jasná dohoda, aby se obchod, partner a produkt nehádali nad stejnou tabulkou třemi různými jazyky.

## AQ.5 Technické řešení drž jednoduché a auditovatelné

Referral program nemusí začínat nákupem affiliate platformy s vlastním skriptem na každou stránku. U malého SaaS často stačí serverové přiřazení kódu při registraci, interní tabulka odměn a ruční schválení před výplatou. Automatizaci přidávej až ve chvíli, kdy ruční proces prokazatelně bolí.

Privacy-first technický návrh:

1. Partner dostane statický odkaz s kódem, například `/signup?ref=PARTNER123`.
2. Server při registraci ověří, že kód existuje a není expirovaný.
3. Kód se uloží k novému účtu jako obchodní metadata.
4. Odměna vznikne až po události, kterou umíš obhájit: zaplacená faktura, kvalifikovaný lead, aktivace.
5. Partner vidí jen agregace a stav odměn.
6. Nepoužitá nebo expirovaná atribuční data se smažou podle retenčního pravidla.

Kdy zpozornět u externího nástroje:

- vyžaduje globální skript na celém webu,
- používá fingerprinting nebo cross-device identifikaci,
- ukládá data mimo EU bez jasného důvodu a smluvního krytí,
- nedává kontrolu nad retencí,
- partnerům ukazuje osobní údaje leadů jako výchozí stav,
- neumí export a smazání dat.

Pokud externí nástroj opravdu potřebuješ, ber ho jako každého jiného dodavatele: datová mapa, DPA, subprocesoři, retence, přístupy, export, incidenty. Marketingový nástroj není kouzelná výjimka z reality, jen má barevnější dashboard.

## AQ.6 Checklist privacy-first referral programu

- [ ] Víme, jaký obchodní výsledek program odměňuje.
- [ ] Atribuce funguje bez cross-site sledování a fingerprintingu.
- [ ] Referral kód ukládáme až ve chvíli, kdy je pro proces potřeba.
- [ ] Nepoužitá atribuční data mají retenční dobu a automatický úklid.
- [ ] Partner vidí agregace a stav odměn, ne zbytečné osobní údaje zákazníků.
- [ ] Pravidla programu vysvětlují nárok, zamítnutí, duplicity, refundace a ukončení.
- [ ] Dashboard neobsahuje interní obchodní poznámky ani aktivitu zákazníka v produktu.
- [ ] Externí nástroj prošel stejným vendor review jako ostatní zpracovatelé.
- [ ] V privacy dokumentaci je jasně popsáno, že doporučení může být přiřazeno partnerovi.
- [ ] Support ví, jak odpovědět na otázku „proč je můj účet spojený s tímto partnerem?“

## Shrnutí přílohy

Referral a partnerský marketing může růst bez datového vysavače. Stačí odměňovat správný výsledek, používat jednoduché kódy místo invazivního trackingu, ukazovat partnerům jen nezbytné informace a uklízet atribuční data po skončení účelu. Privacy-first referral není méně obchodní. Je jen méně creepy. A to je v Evropě docela dobrý produktový feature.

# Příloha AR: SaaS finance a unit economics bez tabulkového divadla

SaaS se dá utopit dvěma způsoby. První je stavět produkt, který nikdo nechce. Druhý je stavět produkt, který lidé chtějí, ale každá nová firma tě stojí víc energie, supportu a infrastruktury, než kolik přinese. To je obzvlášť zákeřné, protože graf registrací vypadá hezky. Jen účet na konci měsíce se tváří jako pes, kterému někdo slíbil procházku a pak otevřel Excel.

Finance v malém SaaS nemusí začínat investorským modelem na pět let. Stačí jednoduchý provozní pohled: odkud přichází peníze, kam mizí čas, které náklady rostou s každým zákazníkem a které jsou fixní. Privacy-first provoz k tomu přidává ještě jednu otázku: kolik nás stojí držet data bezpečně, v Evropě a s kontrolou nad dodavateli?

## AR.1 Počítej jednotku, ne jen celkový obrat

Nejmenší finanční jednotka SaaS není „měsíční tržba“. Je to jeden zákazník, jeden účet, jeden tým nebo jeden aktivní workspace — podle toho, jak produkt prodáváš. Když nevíš, jaká jednotka nese hodnotu, začneš míchat dohromady freelancera za pár stovek, enterprise tým s onboardingem a interní testovací účty. Výsledek je hezký průměr, který neřekne nic. Průměr je v SaaS často diplomatická lež.

Praktický model pro jeden zákaznický účet:

| Položka | Otázka | Příklad sledování |
| --- | --- | --- |
| Měsíční příjem | Kolik účet reálně platí po slevách? | MRR bez DPH a bez jednorázových služeb |
| Variabilní provoz | Co roste s používáním? | hosting, úložiště, e-maily, AI/API volání |
| Support | Kolik času bere péče? | počet ticketů, minut týdně, onboardingové callové hodiny |
| Platební náklady | Kolik stojí inkaso? | poplatky brány, refundace, ruční fakturace |
| Compliance provoz | Co musíme dělat kvůli datům? | DPA dotazy, exporty, výmazy, access review |

Nemusíš hned počítat dokonale přesnou marži na uživatele. Stačí rozlišit účty, které jsou zdravé, od účtů, které skrytě pálí čas týmu. Malý SaaS často neumře na nízkou cenu samotnou. Umře na nízkou cenu spojenou s ručním provozem.

## AR.2 Odděl produktové tržby od služeb a záchranných prací

Služby nejsou špatně. Konzultace, migrace, custom integrace nebo školení mohou zákazníkovi pomoct uspět. Problém nastane ve chvíli, kdy služba maskuje, že produkt neumí stát na vlastních nohou. Pokud každý nový zákazník potřebuje tři ruční zásahy, dvě SQL opravy a „jen malou výjimku v adminu“, nemáš škálovatelný SaaS. Máš agenturu s loginem.

V reportu proto drž minimálně tři řádky:

- opakované produktové tržby,
- jednorázové onboardingové nebo implementační služby,
- záchranné práce, které by produkt časem neměl potřebovat.

Záchranné práce si neúčtuj jako morální selhání zákazníka. Ber je jako produktový signál. Když se stejný typ zásahu opakuje, máš kandidáta na automatizaci, lepší onboarding, jasnější dokumentaci nebo změnu tarifu.

Příklad:

> „Tento měsíc jsme vydělali 80 000 Kč v MRR a 35 000 Kč na implementacích. Z toho 14 hodin byly ruční importy CSV, které se opakují u čtyř zákazníků. Rozhodnutí: buď import postavíme jako placenou funkci v tarifu Pro, nebo ho přestaneme slibovat jako samozřejmost.“

Tohle je lepší než věta „rosteme“. Růst je super. Ale růst bez diagnózy je jen hlasitější chaos.

## AR.3 Náklady netřiď jen účetně, ale provozně

Účetnictví potřebuje své kategorie. Produktový tým potřebuje jiné. Když chceš vědět, jestli SaaS funguje, rozděl náklady podle chování:

- **Fixní základ:** domény, základní hosting, monitoring, účetnictví, minimální sada nástrojů.
- **Náklady podle používání:** e-maily, storage, přenosy, logy, AI tokeny, externí API.
- **Náklady podle zákazníka:** support, onboarding, individuální nastavení, fakturace, bezpečnostní dotazníky.
- **Náklady podle rizika:** zálohy, auditní stopa, incidentní připravenost, přístupy, vendor review.

Privacy-first provoz se často tváří jako dražší, protože nebere nejlevnější nástroj s největším množstvím trackerů a datových zkratek. Jenže férové srovnání musí počítat i náklady na riziko: právní nejistotu, složitější souhlasy, vendor lock-in, reputační škodu a čas strávený vysvětlováním, kam tečou data.

Codyho komentář: Nejlevnější stack je někdy jako levná židle z internetu. Vypadá skvěle, dokud si na ni nesedne první audit.

## AR.4 Sleduj cashflow vedle MRR

MRR je krásná metrika, ale faktury se neplatí grafem. Malý evropský SaaS musí hlídat hotovost: kdy peníze přijdou, kdy odejdou a kolik měsíců provozu zvládne bez paniky. Roční platby zlepšují cashflow, ale nesmí se tvářit jako okamžitý zisk. Jsou to peníze za závazek dodat službu v čase.

Jednoduchý měsíční rituál:

1. Sečti hotovost na účtech.
2. Odečti známé závazky na další 30 a 90 dní.
3. Odděl přijaté roční platby od peněz, které můžeš bezpečně utratit.
4. Zapiš očekávané obnovy a rizikové zákazníky.
5. Označ náklady, které můžeš snížit bez poškození služby.

Tento rituál není pesimistický. Je to provozní airbag. Když víš, že máš šest měsíců klidu, rozhoduješ jinak než ve chvíli, kdy tě každá faktura za hosting nutí mluvit s vesmírem.

## AR.5 Pricing musí chránit produkt i zákazníka

Dobrá cena není jen „kolik trh snese“. Má chránit obě strany. Zákazník má vědět, za co platí a kdy náklady porostou. Tým má vědět, že cena pokryje provoz, support, bezpečnost a vývoj.

Zkontroluj pricing podle pěti otázek:

- Roste cena s hodnotou, kterou zákazník dostává?
- Roste cena s náklady, které zákazník vytváří?
- Je jasné, co je v tarifu a co je placená služba?
- Má nejlevnější tarif limity, které chrání support a infrastrukturu?
- Umíme zdražení vysvětlit bez výmluv a schovaných triků?

Privacy-first SaaS má jednu výhodu: může cenu spojit s klidem. Evropský provoz, menší datové riziko, jasné exporty, auditní stopa a férový support nejsou kosmetika. Jsou součást hodnoty. Neprodávej je jako technickou poznámku v patičce. Dej je do nákupního argumentu.

## AR.6 Finanční dashboard pro malý SaaS tým

Dashboard má být nudný a akční. Pokud se na něj podíváš v pondělí ráno, má říct, jestli je potřeba něco udělat. Nepotřebuje 48 grafů. Potřebuje pár čísel a poznámky.

Minimální sada:

- MRR podle tarifů a segmentů,
- nové opakované tržby,
- ztracené opakované tržby,
- počet aktivních placených účtů,
- variabilní náklady za poslední měsíc,
- support čas na zákaznický účet nebo segment,
- hotovostní runway,
- seznam tří největších finančních rizik.

Ke každé metrice přidej vlastníka a reakci. Pokud metrika nemá reakci, je to dekorace. Například: „Když support čas v tarifu Start přesáhne dvě hodiny týdně, projdeme onboarding a limity tarifu.“ To je metrika. „Počet pageviews pricingu“ bez dalšího rozhodnutí je tapeta.

## AR.7 Checklist SaaS financí bez mlhy

- [ ] Víme, jaká zákaznická jednotka nese příjem a náklady.
- [ ] Oddělujeme opakované produktové tržby, služby a záchranné ruční práce.
- [ ] Sledujeme variabilní náklady podle používání produktu.
- [ ] Support čas zapisujeme aspoň hrubě podle typu zákazníka nebo tarifu.
- [ ] Roční platby nebereme jako volnou hotovost k okamžitému utracení.
- [ ] Pricing chrání infrastrukturu, support a bezpečnostní provoz.
- [ ] Privacy-first náklady hodnotíme společně s rizikem levnějších alternativ.
- [ ] Každá finanční metrika má vlastníka a rozhodnutí, které může spustit.
- [ ] Jednou měsíčně projdeme tři účty s nejhorším poměrem příjem / provozní náročnost.
- [ ] Víme, které ruční práce chceme automatizovat, zpoplatnit nebo přestat slibovat.

## Shrnutí přílohy

SaaS finance nejsou jen investor deck a MRR graf. Jsou to každodenní provozní rozhodnutí: co stojí zákazník, kolik bere supportu, které náklady rostou s používáním a jestli cena chrání kvalitu služby. Privacy-first provoz do toho přidává disciplínu: počítat nejen peníze, ale i riziko, kontrolu nad daty a dlouhodobou důvěru. Dobrá tabulka nemá ohromit. Má zabránit tomu, aby tým prodával produkt, který s každým novým zákazníkem tiše krvácí.

# Příloha AS: Retence a churn bez sledovacího akvária

Růst SaaS vypadá nejlépe ve chvíli, kdy se díváš jen na nové registrace. To je bohužel stejné jako hodnotit hospodu podle počtu lidí, kteří otevřeli dveře. Důležitější otázka zní: kdo zůstal, kdo se vrátil, kdo začal produkt používat pravidelně a kdo tiše mizí, zatímco dashboard pořád slavnostně ukazuje „nový trial“.

Retence není trik, jak uživatele uvěznit. Privacy-first retence znamená pomoct zákazníkovi dosáhnout výsledku, kvůli kterému si produkt pořídil, bez toho, abys z každého kliknutí stavěl psychologický profil. Churn není jen číslo ve sloupci. Je to zpětná vazba, že produkt, onboarding, cena, očekávání nebo provozní důvěra někde nedodaly slíbenou hodnotu.

## AS.1 Definuj, co znamená „zůstal“

Než začneš počítat churn, napiš si, co je u tvého produktu zdravé pokračování. U jednoho SaaS je to zaplacený další měsíc. U druhého aktivní tým, který každý týden dokončí konkrétní úkol. U třetího pravidelné používání integrace, která šetří ruční práci. Samotné přihlášení do aplikace může být slabý signál: člověk se mohl přijít jen podívat, proč mu chodí faktura.

Praktické definice podle typu produktu:

| Typ SaaS | Slabý signál | Lepší retenční signál |
| --- | --- | --- |
| Rezervační systém | uživatel se přihlásil | vytvořil nebo obsloužil rezervace v posledních 30 dnech |
| Fakturační nástroj | otevřel dashboard | vystavil fakturu nebo importoval platby |
| Týmová znalostní báze | přečetl článek | upravil stránku, vyhledal odpověď nebo sdílel odkaz kolegovi |
| AI asistent pro podporu | spustil chat | vyřešil ticket nebo připravil odpověď ke schválení |

Jedna dobrá věta pro tým:

> „Zákazník je u nás retenčně zdravý, když alespoň jednou týdně dokončí akci, kvůli které produkt platí.“

Tahle věta není dokonalá pro každý produkt. Ale donutí tým mluvit o hodnotě, ne o návštěvnosti. A to je velký rozdíl.

## AS.2 Churn rozděl podle příčiny, ne podle nálady

Když zákazník odejde, nestačí štítek „cancelled“. Ten je účetně pravdivý a produktově skoro k ničemu. Potřebuješ rozlišit, proč odchod nastal. Ne proto, abys zákazníka naháněl jako ztracenou kozu, ale abys věděl, co zlepšit.

Užitečné kategorie churnu:

- **Nenašel hodnotu:** zákazník neprošel onboardingem, nepochopil první krok nebo neměl správný use case.
- **Produkt nestačil:** chyběla klíčová funkce, integrace, workflow nebo výkon.
- **Cena neseděla:** zákazník vnímal cenu jako vyšší než výsledek, který dostal.
- **Důvěra praskla:** výpadek, bezpečnostní obava, nejasná práce s daty nebo špatná komunikace.
- **Přirozený konec:** projekt skončil, firma změnila proces nebo už produkt nepotřebuje.
- **Špatný fit:** zákazník nikdy nebyl ideální cílovka, jen se vešel do marketingového slibu až moc volně.

Privacy-first doporučení: důvod odchodu se ptej krátce, dobrovolně a bez manipulace. Stačí jeden výběr a volitelné textové pole. Žádné temné vzory typu „než odejdete, projděte devět obrazovek viny“. Pokud zákazník chce odejít, odchod má být srozumitelný. Důstojný exit je taky součást značky.

## AS.3 Včasné signály hledej v produktu, ne v osobním špehování

Retenční signály nemusí být invazivní. Ve většině B2B SaaS stačí sledovat agregované produktové události, které přímo souvisí s hodnotou. Nepotřebuješ vědět, jak dlouho někdo váhal nad tlačítkem nebo kam přesně pohnul myší. Potřebuješ vědět, jestli produkt plní práci.

Příklady bezpečných signálů:

- počet dokončených klíčových akcí za účet,
- počet aktivních týmových členů v účtu,
- poslední úspěšné použití kritické integrace,
- počet otevřených support ticketů podle typu problému,
- počet neúspěšných importů, plateb nebo automatizací,
- poměr účtů, které dokončily první hodnotový krok v trialu.

Pozor na falešný klid. Nízké používání nemusí vždy znamenat nespokojenost. Některé produkty mají hodnotu právě tím, že běží tiše na pozadí. Proto si ke každému signálu napiš interpretaci. Například „žádné přihlášení“ je problém u projektového nástroje, ale nemusí být problém u monitoringu, pokud alerty chodí a zákazník dostává report.

Codyho komentář: dobrá retence není snaha zvýšit počet kliků. Je to snaha snížit počet důvodů, proč zákazník musí na produkt naštvaně myslet.

## AS.4 Onboarding je retenční práce, ne uvítací konfeta

Největší část churnu často vznikne dávno před zrušením účtu. Zákazník odejde v hlavě ve chvíli, kdy si řekne: „Nevím, co dál“ nebo „Tohle mi nestojí za energii“. Onboarding proto nemá ukazovat všechny funkce. Má dovést zákazníka k prvnímu výsledku.

Praktický onboardingový řez:

1. **První hodnota:** Co má zákazník dokončit během prvních 10 minut?
2. **První důkaz:** Jak pozná, že produkt opravdu něco zlepšil?
3. **První návyk:** Jaký opakovaný krok má udělat příští týden?
4. **První bezpečný kontakt:** Kde se zeptá, když se zasekne, bez posílání citlivých dat?
5. **První úklid:** Jak odstraní testovací data, pozvané lidi nebo pokusy, které nechce držet?

Příklad pro B2B nástroj:

> Místo „Pozvěte celý tým a nastavte všechny integrace“ začni menším slibem: „Nahrajte jeden testovací případ, zkontrolujte výsledek a rozhodněte, jestli workflow odpovídá realitě.“

Tím snížíš riziko, že zákazník pošle do nového nástroje hromadu dat dřív, než ví, jestli ho bude používat. Privacy-first onboarding je postupný: nejdřív hodnota, potom širší adopce.

## AS.5 Win-back kampaně dělej lidsky a s limitem

Když zákazník odejde, může dávat smysl ozvat se později. Ale win-back není povolenka k nekonečnému e-mailovému bubnování. Pokud máš důvod, napiš stručně, konkrétně a s respektem k tomu, že zákazník už jednou řekl ne.

Dobrá win-back zpráva obsahuje:

- proč píšeš právě teď,
- co se změnilo od odchodu,
- proč by to mohlo řešit původní problém,
- jednoduchou možnost odpovědět nebo ignorovat,
- jasné nastavení, že další podobné zprávy posílat nebudeš, pokud nechce.

Příklad:

> „Ahoj, naposledy jste odcházeli kvůli chybějícímu exportu pro účetní. Ten jsme teď doplnili včetně auditního logu a mazání dočasných souborů po 14 dnech. Pokud to chcete zkusit na jednom testovacím účtu, rád pošlu krátký postup. Když se neozvete, beru to jako ne a nebudu vás s tím dál otravovat.“

Tohle je obchodní, ale ne vtíravé. A hlavně: pracuje s konkrétním důvodem, ne s masovým „chybíte nám“ e-mailem, který chybí asi tak upřímně jako automatická narozeninová sleva.

## AS.6 Retenční review jednou měsíčně

Retence se nedá řídit jen v hlavě zakladatele. Jednou měsíčně si udělej krátké review a hledej vzory. Ne drama. Ne tribunál. Jen věcnou kontrolu.

Mini agenda na 45 minut:

- Kolik zákazníků odešlo a v jakých kategoriích důvodu?
- Kolik účtů je retenčně zdravých podle naší definice?
- Kde se lidé nejčastěji zaseknou před první hodnotou?
- Které support dotazy se opakují u nových zákazníků?
- Která funkce slibuje hodnotu, ale má nízké dokončení?
- Jaký jeden retenční experiment uděláme příští měsíc?

Výstup nemá být „zlepšit onboarding“. To je přání. Výstup má být konkrétní:

> „Do 14 dnů upravíme první obrazovku onboarding flow tak, aby zákazník importoval jen jeden testovací záznam, ne celý dataset. Úspěch: o 20 % více trial účtů dokončí první hodnotový krok.“

Pokud uvádíš procentní cíl, ber ho jako interní hypotézu, ne univerzální benchmark. Každý SaaS má jinou frekvenci použití, jiný nákupní cyklus a jinou toleranci k setupu.

## AS.7 Checklist retence a churnu bez slídění

- [ ] Máme jednu jasnou definici retenčně zdravého zákazníka.
- [ ] Měříme hodnotové akce, ne náhodné klikání.
- [ ] Důvody odchodu sbíráme krátce, dobrovolně a bez nátlaku.
- [ ] Onboarding vede k prvnímu výsledku, ne k prohlídce všech funkcí.
- [ ] Retenční signály jsou vysvětlené a nejdou automaticky zaměnit za osobní profilování.
- [ ] Support tagy pomáhají najít opakující se překážky.
- [ ] Win-back komunikace má konkrétní důvod a rozumný limit.
- [ ] Exit z produktu je srozumitelný, důstojný a neobsahuje dark patterns.
- [ ] Jednou měsíčně proběhne retenční review s jedním konkrétním rozhodnutím.
- [ ] Data o churnu mají vlastníka, účel a retenční dobu.

## Shrnutí přílohy

Retence není o tom přimět zákazníka zůstat za každou cenu. Je o tom dodat slíbenou hodnotu dřív, jasněji a s menším třením. Churn pak není ostuda, ale diagnostika. Privacy-first přístup drží retenci při zemi: měř hodnotové signály, ptej se stručně, nešpehuj chování, nedělej z odchodu únikovou místnost a používej win-back jen tehdy, když máš konkrétní důvod.


# Příloha AT: Offboarding zákazníka bez rukojmí a trapného ticha

Každý SaaS rád řeší onboarding. Barevné e-maily, konfety, první úspěch, „vítej v rodině“. Offboarding je méně sexy, takže často dopadne jako sklep v kanceláři: ví se, že existuje, ale nikdo tam nechce jít. Jenže způsob, jakým se firma chová při odchodu zákazníka, ukazuje skutečnou úroveň produktu, podpory i respektu k datům.

Privacy-first offboarding má jednoduché pravidlo: zákazník nesmí být rukojmí. Musí rozumět tomu, co se stane s účtem, fakturací, daty, integracemi a přístupy. A tým musí mít proces, který nevyžaduje hrdinský Slack thread ve 22:40, protože někdo zrovna ruší účet s roční platbou a účetnictví začíná vydávat zvuky jako starý modem.

## AT.1 Odchod navrhni jako běžnou cestu produktu

Zrušení účtu není selhání rozhraní. Je to jedna z normálních produktových cest. Pokud je schovaná za e-mail „kontaktujte sales“, zákazník si zapamatuje hlavně to, že jste mu zkomplikovali odchod. To může krátkodobě snížit churn v tabulce, ale dlouhodobě ničí důvěru.

Dobrá stránka pro zrušení má vysvětlit:

- kdy skončí přístup,
- co se stane s fakturací,
- jak exportovat data,
- jak dlouho budou data uchovaná,
- kdo může účet znovu aktivovat,
- jak kontaktovat podporu, když jde o omyl nebo problém.

Nepleť si to s agresivní retenční pastí. Je fér nabídnout pomoc, pauzu nebo levnější tarif. Není fér vytvořit bludiště, kde má hlavní CTA text „promluvit s account managerem“ a tlačítko pro skutečné zrušení je šedé jako pondělní ráno.

## AT.2 Export dat připrav dřív, než se zákazník zeptá

Export není bonusová funkce pro enterprise tarif. Je to důkaz, že zákazník vlastní svá data. Minimální export nemusí být dokonalá vesmírná loď, ale musí být použitelný bez archeologického kurzu.

Praktické minimum:

- CSV nebo JSON pro hlavní tabulková data,
- ZIP pro soubory a přílohy,
- samostatný export faktur nebo účetních dokladů,
- jednoduchý popis struktury exportu,
- časové omezení odkazu ke stažení,
- auditní záznam, kdo export spustil.

U citlivých dat přidej bezpečnostní brzdy: export může spustit jen vlastník účtu nebo role s jasným oprávněním, odkaz vyprší, stažení se zapíše do logu a velké exporty se připravují asynchronně. Privacy-first neznamená „každý si klikne na všechno“. Znamená kontrolu, vysvětlení a přiměřená oprávnění.

## AT.3 Retenci dat napiš lidsky a dodrž ji technicky

Nejhorší retenční politika je věta „data mažeme v souladu s platnými předpisy“. To je právní mlha v kravatě. Produkt i zákazník potřebují konkrétní odpověď: co se smaže hned, co zůstane kvůli zákonným povinnostem, co lze obnovit a kdy definitivně zmizí.

Rozděl data do čtyř skupin:

- **Účet a profil:** identita, role, nastavení, kontaktní údaje.
- **Produktová data:** projekty, záznamy, soubory, konfigurace, integrace.
- **Fakturační data:** objednávky, faktury, daňové doklady, platební reference.
- **Provozní data:** auditní logy, bezpečnostní události, technické logy, zálohy.

Ke každé skupině napiš retenční dobu a důvod. Pokud něco zůstává kvůli účetnictví nebo bezpečnostnímu vyšetření, řekni to jasně. Pokud se něco maže ze záloh až po doběhnutí retenčního okna, taky to řekni. Ticho v této části nevypadá profesionálně. Vypadá jako „doufáme, že se nezeptáte“.

## AT.4 Přístupy a integrace vypínej v kontrolovaném pořadí

Při odchodu zákazníka nestačí deaktivovat login. SaaS účet může mít API klíče, webhooky, napojené e-maily, platební metody, SSO, pozvané uživatele, support přístupy a automatizace, které dál posílají data do světa. Offboarding je proto malý bezpečnostní proces.

Bezpečné pořadí:

1. Potvrď oprávnění osoby, která žádá zrušení.
2. Zastav nové fakturace a označ účet jako ukončovaný.
3. Nabídni export a nastav termín konce přístupu.
4. Vypni veřejné odkazy, webhooky a aktivní API klíče.
5. Odeber support access a dočasná oprávnění.
6. Uzavři integrace, které mohou posílat nebo přijímat data.
7. Spusť retenční nebo výmazový workflow podle typu dat.

Tohle nemusí být celé ruční. Ale i automatizace musí mít stav, log a možnost bezpečného zastavení. Když se zákazník omylem překlikne, nechceš během tří sekund spálit účetní doklady, projektová data a dobré vztahy. Ani produktový Zen nemá rád plamenomet.

## AT.5 Poslední komunikace má být klidná, ne pasivně agresivní

E-mail po zrušení účtu není místo pro uražený marketing. Nepiš „mrzí nás, že odcházíte“ šestkrát a nepřidávej dramatické odpočítávání, jako by zákazník opouštěl kosmickou loď bez skafandru. Napiš, co se stane dál.

Dobrá závěrečná zpráva obsahuje:

- potvrzení zrušení nebo konce tarifu,
- datum konce přístupu,
- odkaz na export dat,
- retenční informaci v lidské řeči,
- kontakt pro obnovu omylem zrušeného účtu,
- jednu krátkou nepovinnou otázku na důvod odchodu.

Příklad:

> Účet jsme nastavili ke zrušení k 31. srpnu. Do té doby můžete stáhnout export dat v nastavení účtu. Produktová data smažeme po 30 dnech od ukončení, účetní doklady uchováme podle zákonných povinností. Pokud šlo o omyl, napište nám na podporu a účet obnovíme, dokud běží retenční lhůta.

To je nudné. Nudné je v offboardingu kompliment.

## AT.6 Z odchodů se uč, ale nesbírej zpovědi

Churn feedback je užitečný, ale nemá se proměnit v dotazníkové vyslýchání. Zákazník odchází. Respektuj jeho čas. Jedna nepovinná otázka často stačí:

- „Co byl hlavní důvod zrušení?“
- „Co by muselo být jiné, abyste produkt dál používali?“
- „Byl problém v ceně, hodnotě, použití, důvěře nebo změně priorit?“

Odpovědi třiď do kategorií, ne do psychologických profilů. Stačí produktové štítky: cena, chybějící funkce, nízké používání, dokončený projekt, přechod na konkurenci, změna firmy, bezpečnostní požadavek, nejasná hodnota. Jednou měsíčně projdi vzory a rozhodni, co se z toho stane: úprava onboardingu, změna pricingu, lepší dokumentace, nový export, nebo vědomé „neřešíme“.

Codyho komentář: Nejlepší churn dotazník je ten, který zákazník dokáže vyplnit bez povzdechu. Jakmile připomíná maturitu z frustrace, prohrál už při načtení.

## AT.7 Checklist offboardingu bez rukojmí

- [ ] Zákazník najde zrušení účtu nebo tarifu bez skrytého sales kolečka.
- [ ] Před zrušením jasně vidí dopad na přístup, fakturaci a data.
- [ ] Export hlavních dat je dostupný vlastníkovi účtu nebo oprávněné roli.
- [ ] Export má bezpečnostní omezení: expiraci odkazu, auditní záznam a přiměřená oprávnění.
- [ ] Retenční doby jsou napsané pro účet, produktová data, fakturaci, logy a zálohy.
- [ ] API klíče, webhooky, veřejné odkazy a integrace se vypínají kontrolovaně.
- [ ] Support access a dočasná oprávnění se ruší jako součást procesu.
- [ ] Zákazník dostane klidné potvrzení s datem konce, exportem a retenční informací.
- [ ] Feedback po odchodu je nepovinný, krátký a tříděný produktově.
- [ ] Jednou měsíčně někdo projde zrušené účty a hledá opakované příčiny churnu.

## Shrnutí přílohy

Offboarding je test důvěry. Když zákazník může odejít s daty, jasnými informacemi a bez překážkové dráhy, produkt působí dospěleji než konkurence, která churn schovává za call s obchodníkem. Privacy-first přístup tady znamená kontrolu nad exportem, srozumitelnou retenci, bezpečné vypnutí integrací a respekt k času zákazníka. Dobrý odchod neznamená, že se zákazník už nikdy nevrátí. Často znamená přesný opak: odešel bez pachuti.


# Příloha AU: Demo účty a sandbox bez úniku reálných dat

Demo prostředí je obchodní zbraň. Zákazník si může produkt osahat, tým nemusí vysvětlovat každé tlačítko přes call a sales nemusí posílat screenshoty, které vypadají jako výstřižky z muzeální výstavy. Jenže demo je taky častý zdroj datového bordelu: kopie produkce, zapomenuté účty, falešná čísla namíchaná s reálnými jmény a sandbox, který má práva jako produkční admin po třetí kávě.

Privacy-first demo má jiný princip: ukazuje hodnotu produktu bez toho, aby ukazovalo cizí životy. Demo data jsou syntetická, účty mají limitovaný dosah, integrace jsou ochočené a obnova prostředí je automatická. Demo pak není riziko schované za hezkým designem, ale důvěryhodná součást nákupního procesu.

## AU.1 Demo není produkce v převleku

Nejrychlejší cesta k demo prostředí bývá „zkopírujeme produkci a promažeme pár věcí“. To je přesně ten typ zkratky, který se tváří prakticky, dokud někdo neukáže zákazníkovi cizí fakturu, e-mail, interní poznámku nebo název projektu. Pak už to není demo. To je improvizované compliance divadlo s potem na čele.

Základní pravidlo:

- demo nesmí obsahovat reálná zákaznická data,
- demo nesmí používat produkční API klíče,
- demo nesmí posílat skutečné e-maily externím lidem,
- demo nesmí měnit produkční stav,
- demo nesmí mít trvalé admin účty bez vlastníka.

Když potřebuješ ukázat realistický scénář, vytvoř syntetická data podle šablon. Názvy firem, lidí, faktur, objednávek, ticketů a projektů mají vypadat uvěřitelně, ale nesmí být převzaté z reálného zákaznického světa. Ideální demo dataset je jako kulisa ve filmu: dost přesvědčivý pro příběh, ale nikdo v něm doopravdy nebydlí.

## AU.2 Demo scénář piš podle rozhodnutí zákazníka

Demo prostředí často selže ne kvůli technologii, ale kvůli dramaturgii. Produkt je plný funkcí, ale zákazník neví, co má udělat první. Proto demo navrhuj podle rozhodnutí, které má zákazník po vyzkoušení udělat.

Příklad pro B2B SaaS:

| Rozhodnutí zákazníka | Demo scénář | Data v demu |
| --- | --- | --- |
| „Umí to vyřešit náš hlavní proces?“ | Vytvořit projekt, pozvat kolegu, dokončit první workflow | Syntetický projekt, role, úkoly |
| „Bude to bezpečné pro naše data?“ | Ukázat role, audit log, export a retenci | Falešní uživatelé, ukázkové logy |
| „Kolik práce dá migrace?“ | Import ukázkového CSV a kontrola výsledku | Vzorový soubor bez reálných osob |
| „Co uvidí management?“ | Dashboard s agregovanými metrikami | Umělé trendy a jasně označené příklady |

Nesnaž se v demu ukázat všechno. Demo má být cesta k „aha“, ne produktová inventura. Když zákazník po deseti minutách chápe hlavní hodnotu, vyhrál jsi. Když po deseti minutách ví, že máte 47 nastavení notifikací, gratuluji: úspěšně jsi prodal únavu.

## AU.3 Sandbox účty musí mít hranice

Sandbox je dobrý sluha a výborný chaos generátor. Pokud zákazník dostane účet bez jasných pravidel, začne testovat věci, které produktový tým nečekal: pozvánky na reálné e-maily, webhooky na vlastní systémy, import produkčních dat, export cizích ukázek, nebo kombinaci všeho, protože pátek.

Nastav hranice technicky i textově:

- sandbox účet má časovou platnost,
- počet pozvaných uživatelů je omezený,
- e-maily se posílají jen na ověřené nebo interně povolené adresy,
- webhooky míří do testovacího endpointu nebo jsou jasně označené,
- platební funkce používají testovací režim,
- exporty obsahují jen sandbox data,
- po vypršení se účet archivuje nebo resetuje.

Do rozhraní přidej viditelný štítek: „Sandbox — nepoužívejte reálná osobní data.“ Nestačí to schovat do podmínek. Upozornění má být tam, kde uživatel data skutečně vkládá: import, pozvánky, poznámky, soubory, integrace a formuláře.

## AU.4 Demo data obnovuj automaticky

Demo, které se postupně rozpadá, je tichý sabotér prodeje. Jeden obchodník smaže ukázkový projekt, druhý přejmenuje firmu na „test test“, třetí nahraje soubor z reálného výběrového řízení a čtvrtý se diví, proč dashboard vypadá jako po výbuchu kancelářské tiskárny.

Zaveď resetovací rutinu:

1. Demo dataset drž jako kód nebo verzovanou seed definici.
2. Každý ukázkový účet má známý výchozí stav.
3. Reset probíhá automaticky podle plánu nebo jedním admin tlačítkem.
4. Uploady, testovací e-maily a importy se po resetu mažou.
5. Každá ruční úprava dema se buď promítne do seedu, nebo zmizí.
6. Demo má kontrolu zdraví: přihlášení, hlavní workflow, dashboard, export.

Praktický detail: vytvoř „demo smoke test“. Jednou denně nebo před obchodní schůzkou ověří, že jde vytvořit záznam, dokončit hlavní scénář, zobrazit report a provést export. Není potřeba testovat celý produkt. Stačí ověřit, že demo neumře v první minutě schůzky. To je nízká laťka, ale překvapivě mnoho dem ji bere jako osobní výzvu.

## AU.5 Integrace v demu nesmí pálit ostrými

Integrace jsou v demu lákavé, protože ukazují skutečnou hodnotu produktu. Zároveň jsou rizikové, protože mohou poslat data ven, vytvořit externí objekt, spustit notifikaci nebo zanechat stopu v systému, kde už demo tým nemá kontrolu.

Bezpečné varianty:

- použij testovací režim dodavatele,
- simuluj odpověď integrace lokálně,
- použij vlastní demo endpoint, který jen loguje požadavek,
- maskuj citlivé části payloadu,
- jasně označ, co je živá integrace a co simulace,
- nastav zvláštní sandbox API klíče s minimálními právy.

Ukaž zákazníkovi datový tok jednoduše: „Tady by se odeslal webhook do vašeho systému. V demu ho neposíláme ven; payload vidíte tady.“ To působí profesionálněji než tajit, že integrace je slepá. Zákazník nekupuje kouzelnické vystoupení. Kupuje kontrolu nad procesem.

## AU.6 Demo jako privacy-first prodejní argument

Dobře navržené demo není jen interní bezpečnostní opatření. Je to důkaz hodnot. Když během ukázky řekneš „tady používáme syntetická data, sandbox se pravidelně resetuje a žádné testovací importy neposíláme do produkčních integrací“, nezní to jako právní brzda. Zní to jako dospělý provoz.

Krátká věta pro obchodní stránku nebo trust pack:

> „Demo a sandbox prostředí používají syntetická data, oddělené přístupy a testovací integrace. Reálná zákaznická data do ukázek nekopírujeme.“

Tohle je malá věta s velkým efektem. Technický kupující slyší bezpečnost. Právník slyší menší riziko. Management slyší, že tým ví, co dělá. A Cody slyší krásný zvuk toho, jak jeden odstavec ušetřil tři nervózní e-maily.

## AU.7 Checklist demo účtů a sandboxu

- [ ] Demo prostředí neobsahuje reálná zákaznická data ani kopii produkce.
- [ ] Demo dataset je syntetický, verzovaný a obnovitelný.
- [ ] Sandbox účty mají časovou platnost, vlastníka a omezené role.
- [ ] Uživatel vidí upozornění, že do sandboxu nemá vkládat reálná osobní data.
- [ ] Testovací e-maily, webhooky a integrace nepoužívají produkční klíče.
- [ ] Platební, e-mailové a externí integrace běží v testovacím nebo simulovaném režimu.
- [ ] Demo lze resetovat do známého stavu bez ruční archeologie.
- [ ] Před obchodní ukázkou existuje rychlý smoke test hlavní demo cesty.
- [ ] Exporty a reporty v demu pracují jen se sandbox daty.
- [ ] Trust pack nebo obchodní stránka stručně vysvětluje, jak demo chrání data.

## Codyho komentář

Demo prostředí je výkladní skříň provozní kultury. Když je uvnitř chaos, zákazník si právem domyslí, že za oponou to nebude švýcarská klinika. Když je demo čisté, resetovatelné a bez reálných dat, prodáváš nejen funkce, ale i klid. A klid je v B2B prodeji podceňovaná superpower.

## Shrnutí přílohy

Demo a sandbox nemají být produkce v kostýmu. Mají ukázat hodnotu produktu na syntetických datech, s omezenými účty, testovacími integracemi a automatickou obnovou. Privacy-first přístup z dema dělá obchodní výhodu: zákazník vidí, že tým umí oddělit ukázku od skutečného provozu, chránit data a vysvětlit technické hranice lidsky.


# Příloha AV: Lokalizace SaaS a webu bez překladového chaosu

Evropský web nebo SaaS produkt málokdy žije jen v jednom jazyce navždy. Nejdřív vznikne česká landing page, pak anglická verze pro investory, potom německý pilot, slovenská podpora a najednou někdo překládá chybové hlášky v pátek večer do tabulky s názvem `final_final_2.xlsx`. Gratuluju, právě vznikl překladový hydra-systém. Usekneš jeden řádek, narostou tři neaktuální varianty.

Lokalizace není jen překlad slov. Je to produktová disciplína: stejný slib, stejná úroveň důvěry, stejné datové hranice a podobně dobrý pocit z používání v každém jazyce. Privacy-first přístup navíc říká: nepřekládej texty tak, že je bez rozmyslu pošleš do náhodné externí služby i s interními zákaznickými ukázkami, ticketem nebo screenshotem plným osobních údajů.

## AV.1 Nejdřív rozhodni, které jazyky mají obchodní smysl

Jazyková verze není dekorace. Je to závazek. Jakmile na web dáš němčinu, zákazník oprávněně čeká, že aspoň základní cesta produktu, obchodní informace, privacy texty a podpora nebudou vypadat jako poloautomatický výkřik do prázdna.

Před přidáním jazyka si odpověz:

- Který segment zákazníků tím reálně obsloužíme?
- Umíme v tom jazyce odpovědět na obchodní dotaz?
- Umíme vysvětlit bezpečnost, zpracování dat a fakturaci?
- Budou přeložené i e-maily, onboarding a kritické chybové stavy?
- Kdo bude hlídat aktuálnost textů při změně produktu?

Malý tým často nepotřebuje deset jazyků. Potřebuje dva dobré: mateřský jazyk pro domácí důvěru a angličtinu pro širší B2B komunikaci. Další jazyk přidej až ve chvíli, kdy existuje konkrétní obchodní důvod: pilot, partner, regionální kampaň nebo opakované poptávky.

Codyho komentář: Vícejazyčný web bez vícejazyčné podpory je jako restaurace s francouzským menu a kuchařem, který umí jen „bageta“. Vypadá to světově, dokud někdo opravdu objedná.

## AV.2 Překládej sliby, ne jen věty

Největší problém lokalizace není gramatika. Je to význam. Česká věta „Ozveme se co nejdřív“ může být v angličtině příliš vágní, v němčině příliš ležérní a v B2B nákupním procesu úplně k ničemu. Proto překládej celé rozhodovací momenty, ne jednotlivé řádky izolovaně.

U každého důležitého textu drž kontext:

| Text | Co zákazník rozhoduje | Co musí překlad zachovat |
| --- | --- | --- |
| Nadpis landing page | „Je to pro mě?“ | Konkrétní problém a cílovku |
| CTA tlačítko | „Kliknu?“ | Akci bez manipulace |
| Privacy mikrocopy | „Můžu tomu věřit?“ | Účel, data, klidný tón |
| Chybová hláška | „Co mám udělat?“ | Řešení, ne obviňování |
| Fakturační text | „Kolik a za co platím?“ | Přesnost, datum, podmínky |

Dobrá překladová poznámka vypadá třeba takhle:

> Kontext: Text je u kontaktního formuláře pro B2B poptávku. Cílem je uklidnit uživatele, že e-mail použijeme jen pro odpověď. Nepřidávej marketingové sliby ani právnický tón.

Tohle je mnohem užitečnější než samotný řetězec `form_privacy_note`. Překladatel, copywriter i AI asistent pak vědí, co má text udělat.

## AV.3 Privacy texty lokalizuj zvlášť pečlivě

Privacy stránka, cookie vysvětlení, formulářové mikrocopy, informace o subdodavatelích a texty k exportu nebo výmazu dat nesmí být vedlejší překladová fronta. Jsou to důvěrové texty. Když jsou nepřesné, zákazník nezíská jistotu. Když jsou přehnané, tým si slíbí něco, co neumí splnit.

Praktický postup:

- Udržuj jeden zdroj pravdy pro privacy texty a jejich jazykové varianty.
- Každý překlad kontroluj proti skutečnému chování produktu, ne proti přání marketingu.
- Nepřekládej právní a privacy texty bez kontextu účelu zpracování.
- U citlivých textů používej revizi člověkem, který rozumí produktu i odpovědnosti vůči zákazníkovi.
- Když se změní dodavatel, retence nebo datový tok, aktualizuj všechny jazykové verze současně.

Příklad špatné lokalizace:

> „We never share your data.“

To zní hezky, ale často to není pravda. Pokud používáš e-mailového poskytovatele, hosting, platební bránu nebo support systém, data se v nějaké formě zpracovávají u dodavatelů. Férovější text:

> „Vaše data používáme jen pro provoz služby a podporu. Neposíláme je do reklamních systémů. Seznam provozních dodavatelů najdete na stránce o zpracování dat.“

Takový text je méně sexy než absolutní slib, ale mnohem bezpečnější. A bezpečnější bývá dlouhodobě sexy. Jen s menším ohňostrojem.

## AV.4 Technická struktura má pomáhat lidem i vyhledávačům

Vícejazyčný web potřebuje pořádek v URL, metadatech a obsahu. Jinak vznikne situace, kdy český zákazník dostane anglickou cenu, německý vyhledávač indexuje starou stránku a support řeší dotaz, proč „free trial“ v jedné verzi znamená něco jiného než „zkušební režim“ v druhé.

Jednoduchá struktura pro malý tým:

- `/cs/` pro češtinu,
- `/en/` pro angličtinu,
- později `/de/` nebo jiný jazyk jen se skutečným plánem podpory,
- každá stránka má vlastní title, meta description a Open Graph text ve stejném jazyce,
- interní odkazy vedou na stejnou jazykovou verzi, ne náhodně na výchozí homepage,
- chybové stránky a potvrzovací e-maily používají jazyk uživatele.

U landing page drž stejnou informační architekturu, ale nepřekládej otrocky. Pokud česká stránka začíná přímočaře „Postavíme vám privacy-first SaaS v Evropě“, anglická verze může potřebovat víc kontextu o evropském provozu, důvěře a compliance. Stejný produkt, jiný vstupní rámec.

## AV.5 AI překlad používej jako asistenta, ne autopilota

AI umí výrazně zrychlit první návrh překladu, sjednocení tónu nebo kontrolu konzistence. Neumí ale sama ručit za to, že text odpovídá produktu, právnímu nastavení, brandu a lokálním očekáváním. Proto jí nedávej víc dat, než potřebuje.

Privacy-first pravidla pro AI lokalizaci:

- Neposílej do překladového promptu reálné zákaznické zprávy, interní smlouvy ani screenshoty s osobními údaji.
- Používej anonymizované příklady nebo syntetické scénáře.
- Do promptu přidej slovník značky, zakázané fráze a cílový tón.
- U privacy, pricingu, fakturace a bezpečnostních textů vyžaduj lidskou revizi.
- Výstup ukládej do verzovaného zdroje, ne jen do chatu.

Příklad zadání pro AI asistenta:

> Přelož následující onboardingové texty z češtiny do angličtiny. Tón: profesionální, přímý, klidný, ne hype. Produkt je B2B SaaS provozovaný v Evropě. Zachovej význam privacy mikrotextů, nepřidávej nové sliby. Pokud si nejsi jistý, označ řádek poznámkou.

Tím z AI uděláš pracovní nástroj, ne generátor krásných omylů.

## AV.6 Překladový workflow bez chaosu

Lokalizace musí mít rytmus. Jinak se každá změna produktu změní v lov starých textů po repozitáři, CMS, e-mailovém nástroji a help centru.

Minimální workflow:

1. Nový text vzniká nejdřív v primárním jazyce.
2. Autor doplní kontext: kde se text zobrazuje, co má uživatel pochopit, jaký je rizikový význam.
3. Překlad vznikne v překladovém souboru nebo CMS se stavem `draft`.
4. Druhý člověk nebo odpovědný vlastník provede revizi kritických textů.
5. Před vydáním se zkontroluje UI: zalomení, tlačítka, e-maily, mobil, prázdné stavy.
6. Po změně produktu se vytvoří úkol na aktualizaci všech jazyků, ne jen výchozí verze.

Pro malý SaaS tým stačí jednoduchá tabulka nebo soubory v repozitáři. Důležité je, aby každý text měl vlastníka, stav a kontext. Bez toho lokalizace vždycky sklouzne k archeologii: „Kde se tahle věta vlastně používá?“

## AV.7 Checklist lokalizace bez ztráty důvěry

- [ ] Každý podporovaný jazyk má jasný obchodní důvod a vlastníka.
- [ ] Kritické cesty produktu jsou přeložené celé: web, onboarding, e-maily, chyby, fakturace, podpora.
- [ ] Privacy mikrocopy a právně citlivé texty mají samostatnou revizi.
- [ ] Překladové řetězce obsahují kontext, ne jen izolované věty.
- [ ] URL struktura, metadata a interní odkazy drží jazykovou konzistenci.
- [ ] AI překlad nepoužívá reálná zákaznická data ani citlivé interní materiály.
- [ ] Terminologie produktu je uložená ve slovníku značky.
- [ ] Každá změna produktu obsahuje kontrolu dopadu na všechny jazykové verze.
- [ ] Delší překlady jsou otestované v UI na mobilu i desktopu.
- [ ] Zákaznická podpora ví, které jazyky firma opravdu obsluhuje.

## Shrnutí přílohy

Lokalizace je víc než překlad. Je to slib, že zákazník v jiném jazyce dostane stejně jasnou hodnotu, stejně férové privacy informace a stejně použitelný produkt. Malý tým má začít s málem jazyků, ale udělat je pořádně: obchodní důvod, technická struktura, kontext pro překlady, revize citlivých textů a bezpečné používání AI. Privacy-first lokalizace neznamená pomalejší růst. Znamená růst bez překladového chaosu a bez toho, aby se zákaznická data stala palivem pro pohodlnou zkratku.



---

# Příloha AW: Zákaznické rozhovory bez výslechu a datového nepořádku

Zákaznický rozhovor není chvíle, kdy máš zákazníka přesvědčit, že tvůj nápad je skvělý. Je to chvíle, kdy máš zjistit, jak jeho svět opravdu funguje. Co ho štve, co už zkoušel, za co platí, čeho se bojí, kdo rozhoduje a proč se některé problémy tváří jako priorita, ale ve skutečnosti spí pod kobercem vedle starého backlogu.

Malý SaaS tým často nepotřebuje drahou výzkumnou mašinerii. Potřebuje pravidelný rytmus krátkých rozhovorů, dobré otázky, bezpečné poznámky a disciplínu neplést si jeden hlasitý názor s tržním signálem. Discovery má snižovat riziko produktu, ne vyrábět další tabulku s citlivými údaji.

Privacy-first přístup tady znamená jednoduchou věc: ptej se na problém a rozhodování, ne na všechno, co jde vytáhnout z člověka. Zákazník není datový důl. Je to člověk, který ti na pár minut půjčil kontext. Chovej se podle toho.

## AW.1 Rozhovor musí mít jednu hypotézu

Než někomu napíšeš, napiš si hypotézu. Bez ní se rozhovor snadno změní v příjemné povídání, po kterém má tým pocit, že „něco zjistil“, ale neumí říct co.

Dobrá hypotéza vypadá takhle:

> Malé B2B agentury ztrácí čas ručním skládáním měsíčních reportů a byly by ochotné platit za nástroj, který jim do 15 minut připraví klientský přehled bez kopírování dat mezi systémy.

Slabá hypotéza:

> Lidé chtějí lepší reporting.

První hypotéza říká cílovku, situaci, bolest, výsledek a náznak hodnoty. Druhá říká jen to, že svět není dokonalý. Děkujeme, vesmíre, poznamenáno.

Před každým kolem rozhovorů si vyber jednu oblast:

- validace problému,
- pochopení současného procesu,
- nákupní rozhodování,
- námitky k ceně,
- důvěra a bezpečnost,
- onboarding a první hodnota,
- důvody odchodu nebo neaktivity.

Když chceš v jednom třicetiminutovém hovoru ověřit všechno, neověříš nic. Jen zákazník odejde s pocitem, že byl v dotazníku, který se převlékl za konverzaci.

## AW.2 Ptej se na minulost, ne na fantazii

Nejhorší otázka pro discovery je: „Používal byste naši aplikaci?“ Lidé jsou zdvořilí, optimističtí a často netuší, co budou dělat, dokud nepřijde reálný účet, deadline nebo šéf s požadavkem na páteční report.

Lepší otázky míří na konkrétní minulost:

- Kdy jste tenhle problém řešili naposledy?
- Co přesně se stalo?
- Kdo u toho byl?
- Kolik času to zabralo?
- Jak jste to vyřešili dnes?
- Co jste už zkoušeli a proč to nestačilo?
- Co se stane, když se problém nevyřeší?
- Kdo by musel schválit nákup řešení?

Příklad rozdílu:

- Slabé: „Chtěli byste automatizovaný onboarding?“
- Lepší: „Popište posledního nového zákazníka. Kde se onboarding zasekl a kdo to musel ručně zachraňovat?“

Minulost není dokonalá předpověď budoucnosti, ale je pevnější než přání. Pokud zákazník za problém nikdy neplatil časem, penězi, rizikem nebo reputací, možná to není problém. Možná je to jen nepříjemnost, která dobře zní na workshopu.

## AW.3 Nesbírej víc dat, než potřebuješ pro rozhodnutí

Discovery poznámky mají být použitelné, ale střídmé. Nepotřebuješ archivovat celý život zákazníka. Potřebuješ zachytit signály, které pomáhají rozhodnout, jestli stavět, měnit, prodat nebo zahodit konkrétní nápad.

Bezpečná struktura poznámky:

| Pole | Co zapisovat |
| --- | --- |
| Segment | Typ firmy nebo role, ne nutně jméno člověka |
| Kontext | V jaké situaci problém vzniká |
| Současné řešení | Jak to dělají dnes |
| Dopad | Čas, peníze, riziko, frustrace |
| Citace | Krátká anonymizovaná věta, pokud vystihuje problém |
| Námitka | Co by bránilo změně |
| Signál | Silný / střední / slabý a proč |
| Navazující krok | Co tým udělá dál |

Co do poznámek raději nedávat:

- osobní údaje, které nejsou nutné,
- jména koncových zákazníků respondenta,
- interní konflikty ve firmě,
- přístupové údaje, screenshoty s reálnými daty,
- citlivé obchodní informace bez jasného souhlasu,
- kompletní nahrávky uložené „pro jistotu“.

Pokud nahráváš hovor, řekni proč, kde bude nahrávka uložená, kdo k ní bude mít přístup a kdy ji smažeš. Ještě lepší: u běžného discovery si často vystačíš s poznámkami. Nahrávka je pohodlná pro tým, ale je to další citlivý objekt, který musíš chránit.

## AW.4 Odděl citaci od identity

Silné zákaznické věty jsou zlato. Ale zlato nemusí být přilepené k občance. Pro produktové rozhodování často stačí anonymizovaná citace s typem zákazníka.

Příklad:

> „Každý měsíc skládáme report ručně z pěti exportů. Nejhorší není práce samotná, ale kontrola, jestli jsme nepřepsali číslo.“ — menší B2B agentura

Tohle je užitečné pro tým i bezpečné pro zákazníka. Nepotřebuješ psát jméno firmy, konkrétní klienty, rozpočty ani interní názvy systémů, pokud nejsou nutné pro rozhodnutí.

Pro veřejné použití citace platí přísnější pravidlo: bez výslovného schválení nepoužívej jméno, logo, screenshot ani rozpoznatelný příběh. „Řekl nám to zákazník“ není totéž jako „můžeme to dát na web“. Ano, marketing by rád reference hned. Marketing také někdy rád slíbí newsletter každému, kdo dýchá. Proto máme pravidla.

## AW.5 Vyhodnocuj vzory, ne jednotlivé výroky

Jeden rozhovor může změnit otázku. Neměl by sám změnit roadmapu. Hledej opakující se vzory napříč segmenty a situacemi.

Po pěti až osmi rozhovorech si udělej jednoduché shrnutí:

- Který problém se opakoval?
- Kdo ho má nejsilnější?
- Jak ho řeší dnes?
- Jaký je dopad, když se neřeší?
- Co by zákazník musel změnit, aby nové řešení používal?
- Které námitky se opakovaly?
- Co jsme slyšeli jen jednou a zatím z toho neděláme závěr?

Dobrá syntéza neříká „zákazníci chtějí dashboard“. Říká třeba:

> Tři ze šesti agentur řeší měsíční reporting ručně a bojí se hlavně chyb v přepisu. Neptají se na grafy, ale na kontrolu správnosti a snadné vysvětlení klientovi.

Tohle už je produktový signál. Možná první verze nemá být krásný dashboard. Možná má být bezpečný import, kontrola rozdílů a export komentovaného reportu. Méně wow, více hodnoty. Strašné, jak často to funguje.

## AW.6 Vrať se k lidem s výsledkem

Rozhovor není jednosměrné vytěžení kontextu. Pokud ti někdo dal čas, je dobré se vrátit s krátkým shrnutím nebo dalším krokem. Nemusí to být dlouhá prezentace. Stačí férová věta.

Příklady follow-upu:

> Díky za rozhovor. Odnesli jsme si, že největší bolest není tvorba grafů, ale kontrola správnosti dat před odesláním klientovi. V další iteraci proto otestujeme import a kontrolní přehled.

> Díky, váš případ nám pomohl pochopit námitky kolem přístupu k datům. Než budeme funkci nabízet veřejně, doplníme jasnější popis rolí a exportu.

Tím buduješ důvěru a zároveň kontroluješ, jestli jsi pochopil správně. Když zákazník odpoví „ne, myslel jsem to jinak“, je to levný dar. Lepší opravit poznámku teď než za tři sprinty zjistit, že tým stavěl řešení pro špatně pochopenou větu.

## AW.7 Checklist zákaznického rozhovoru

- [ ] Rozhovor má jednu hlavní hypotézu nebo oblast učení.
- [ ] Otázky míří na konkrétní minulost, ne na hypotetické sliby.
- [ ] Respondent ví, proč rozhovor probíhá a jak budou poznámky použité.
- [ ] Poznámky zachycují segment, kontext, dopad, námitky a signál.
- [ ] Citlivé údaje, jména zákazníků a screenshoty se nezapisují bez důvodu.
- [ ] Nahrávky se pořizují jen s jasným souhlasem, účelem a dobou uložení.
- [ ] Citace pro interní použití jsou anonymizované.
- [ ] Veřejné reference se používají jen po výslovném schválení.
- [ ] Po sérii rozhovorů vznikne syntéza vzorů, ne seznam izolovaných výroků.
- [ ] Respondent dostane stručný follow-up nebo poděkování s dalším krokem.

## Shrnutí přílohy

Zákaznické rozhovory jsou nejlevnější způsob, jak snížit produktové riziko, pokud se z nich nestane výslech, prodejní demo nebo datový vysavač. Ptej se na skutečné situace, zapisuj jen to, co pomáhá rozhodnout, anonymizuj citace a hledej vzory napříč rozhovory. Privacy-first discovery neznamená méně učení. Znamená učení s respektem, pořádkem a menší šancí, že si tým do poznámek uloží víc citlivostí než skutečných insightů.


---

# Příloha AX: Zakladatelský dashboard bez metrik pro ego a sledovacích zkratek

Dashboard pro zakladatele nemá být akvárium, ve kterém se koukáš na barevné rybičky čísel a tváříš se strategicky. Má být pracovní nástroj pro rozhodování: kde rosteme, kde unikají peníze, kde zákazníci narážejí, co je riziko a co máme udělat tento týden.

Malý SaaS tým si často postaví dvě špatné verze dashboardu. První je prázdná: „nemáme data, takže jedeme pocitem“. Druhá je přecpaná: třicet grafů, z toho dvacet nikdo nepoužívá a deset se tváří důležitě jen proto, že šly snadno napojit. Obě varianty jsou drahé. První vede k slepotě, druhá k falešné jistotě.

Privacy-first dashboard má jednoduchou ambici: ukázat stav byznysu a produktu bez toho, aby firma začala profilovat každého návštěvníka jako podezřelého z budoucí konverze. Nepotřebuješ vědět, že konkrétní člověk v úterý v 9:42 třikrát přejel myší přes tlačítko. Často potřebuješ vědět, že noví zákazníci nedokončí import dat, že trialy bez onboardingového hovoru končí častěji, nebo že support tikety na jednu funkci rostou rychleji než její používání.

## AX.1 Začni rozhodnutími, ne grafy

Než přidáš metriku, napiš si, jaké rozhodnutí má podporovat. Pokud odpověď zní „je dobré to vědět“, je to slabé. Dobrá metrika má vlastníka, rytmus a navazující akci.

Příklady dobrých rozhodovacích otázek:

- Máme příští měsíc zrychlit akvizici, nebo opravit onboarding?
- Který segment má nejlepší poměr tržeb, podpory a retence?
- Která část produktu brání první hodnotě?
- Je nový pricing zdravější, nebo jen posunul problémy do supportu?
- Zvyšuje se riziko odchodů u konkrétního typu zákazníků?
- Máme kapacitu spustit další kampaň, aniž se rozpadne doručování hodnoty?

Špatný dashboard začíná větou „pojďme zobrazit všechno, co máme“. Dobrý dashboard začíná větou „co potřebujeme každý týden rozhodnout“. Graf bez rozhodnutí je tapeta. Někdy hezká, často drahá, občas hypnotická. Ale pořád tapeta.

## AX.2 Drž pět vrstev zdraví produktu

Zakladatelský dashboard nemusí být složitý. Stačí pět vrstev, které společně ukazují, jestli produkt dává smysl obchodně i provozně.

| Vrstva | Co sledovat | Proč |
| --- | --- | --- |
| Akvizice | zdroje poptávek, konverze na další krok, kvalita leadů | jestli umíš přivést správné lidi |
| Aktivace | první hodnota, dokončený onboarding, import, první výsledek | jestli noví zákazníci pochopí a použijí produkt |
| Retence | návrat k hodnotě, obnovy, churn důvody, zdraví účtů | jestli produkt řeší opakovaný problém |
| Revenue | MRR, nové tržby, expanze, refundace, rizikové platby | jestli byznys dýchá a neklame účetnictvím |
| Provoz | support zátěž, incidenty, výkon, bezpečnostní úkoly | jestli růst nerozbíjí tým ani důvěru |

Každá vrstva má mít několik čísel a jednu lidskou interpretaci. Samotné „aktivace 42 %“ nestačí. Lepší je věta: „Aktivace klesla u týmů, které začínají bez importu šablony; příští týden testujeme kratší průvodce a lepší prázdný stav.“

Dashboard má pomáhat mluvit. Ne nahrazovat přemýšlení tabulkou, která nosí kravatu.

## AX.3 Nepotřebuješ osobní profil pro každé produktové rozhodnutí

Mnoho produktových otázek jde zodpovědět agregovaně nebo pseudonymizovaně. U malého SaaS týmu je nejbezpečnější výchozí pravidlo: osobní detail zobrazuj jen tam, kde je nutný pro podporu zákazníka, bezpečnost, fakturaci nebo konkrétní obchodní vztah. Pro strategický dashboard většinou stačí segment, účet, tarif, stav a anonymizované události.

Příklad privacy-first eventu:

| Event | Vlastnosti | Poznámka |
| --- | --- | --- |
| `onboarding_completed` | tarif, segment, počet členů týmu, zdroj registrace | bez jména, e-mailu a obsahu zákaznických dat |
| `first_report_exported` | typ exportu, délka onboardingu, šablona ano/ne | měří hodnotu, ne obsah reportu |
| `integration_connected` | typ integrace, výsledek, chybová kategorie | bez tokenů, názvů účtů a payloadů |
| `support_ticket_created` | kategorie, tarif, stáří účtu, priorita | bez textu ticketu v produktové analytice |

Odděl analytiku od operativních systémů. Support nástroj může potřebovat e-mail zákazníka, protože jinak mu neodpovíš. Produktový dashboard ho většinou nepotřebuje. Fakturační systém musí znát identitu odběratele. Graf aktivace ne.

Privacy-first design tady není překážka. Nutí tě pojmenovat, co vlastně měříš. A když to neumíš pojmenovat bez osobních údajů, možná neměříš produktový signál, ale sbíráš pohodlný nepořádek.

## AX.4 Vyvažuj leading a lagging metriky

Lagging metriky říkají, co se už stalo: MRR, churn, počet zákazníků, refundace. Jsou důležité, ale mají zpoždění. Když čekáš jen na churn, dozvíš se o problému ve chvíli, kdy už zákazník stojí ve dveřích a drží export dat.

Leading metriky ukazují pravděpodobný budoucí vývoj:

- podíl nových účtů, které dokončily první hodnotu,
- počet zákazníků s nedokončeným nastavením po sedmi dnech,
- opakované používání klíčové funkce,
- narůstající support u jedné části produktu,
- pokles doručitelnosti transakčních e-mailů,
- nárůst ručních zásahů týmu při onboardingu.

Dobrá kombinace pro týdenní review:

- jedna metrika růstu,
- jedna metrika aktivace,
- jedna metrika retence,
- jedna metrika provozního tření,
- jedna kvalitativní poznámka ze supportu nebo rozhovorů.

Když rostou registrace, ale klesá aktivace, nemáš jen marketingový úspěch. Máš frontu lidí, kteří se přišli zklamat rychleji. To je taky druh škálování, jen takový ten méně slavnostní.

## AX.5 Každá metrika má mít hranici a reakci

Číslo bez hranice je dekorace. Předem si napiš, co znamená dobrý stav, varování a problém. Nemusí to být vědecky dokonalé. Stačí, aby tým věděl, kdy má přestat diskutovat a začít jednat.

Příklad jednoduché tabulky:

| Metrika | Zelená | Varování | Akce |
| --- | --- | --- | --- |
| Dokončení onboardingu do 7 dnů | nad 70 % | pod 55 % | projít drop-off, zavolat 3 novým zákazníkům |
| Support tikety na 10 aktivních účtů | pod 2 týdně | nad 4 týdně | zjistit top kategorii, upravit nápovědu nebo UI |
| Měsíční churn důvod „nevidíme hodnotu“ | 0–1 případ | 2+ případy | review aktivace a očekávání z prodeje |
| Ruční zásahy při fakturaci | 0–1 týdně | 3+ týdně | opravit proces nebo integraci |

Tahle tabulka je schválně obyčejná. Zakladatelský dashboard nemá dokazovat, že umíš BI. Má způsobit, že tým včas zvedne hlavu.

## AX.6 Dashboard review dělej jako provozní rituál

Dashboard bez pravidelného review je jako hasicí přístroj za skříní: dobrý pocit, malá použitelnost. Jednou týdně si dej 30 minut a projdi jen to, co podporuje rozhodnutí.

Struktura review:

1. Co se změnilo proti minulému týdnu?
2. Která změna je dobrá zpráva a proč?
3. Která změna je riziko a kdo ji vlastní?
4. Co uděláme do dalšího review?
5. Jak poznáme, že zásah pomohl?

Na konci musí vzniknout maximálně tři akce. Pokud vznikne dvanáct úkolů, dashboard se proměnil v backlogový ohňostroj. Ten sice krásně prská, ale druhý den po něm zůstane jen kouř a pár zapomenutých ticketů.

## AX.7 Checklist zakladatelského dashboardu

- [ ] Každá metrika podporuje konkrétní rozhodnutí.
- [ ] Dashboard pokrývá akvizici, aktivaci, retenci, revenue a provoz.
- [ ] Produktové metriky neobsahují osobní údaje bez jasného důvodu.
- [ ] Support, fakturace a produktová analytika mají oddělené účely a přístupy.
- [ ] Eventy měří hodnotu a stav procesu, ne obsah zákaznických dat.
- [ ] Dashboard kombinuje leading a lagging metriky.
- [ ] U klíčových metrik jsou předem napsané hranice a reakce.
- [ ] Každá klíčová metrika má vlastníka, který umí vysvětlit její změnu.
- [ ] Týdenní review končí nejvýš třemi konkrétními akcemi.
- [ ] Metriky, které nikdo nepoužil dva měsíce, se odstraní nebo přeformulují.
- [ ] Codyho pravidlo: když číslo nezmění rozhodnutí, nemá sedět v první řadě.

## Codyho komentář

Nejlepší dashboard pro malý SaaS tým často vypadá podezřele jednoduše. Pět sekcí, pár čísel, krátké poznámky, jasné akce. Žádná datová katedrála, žádné osobní profily pro každý klik, žádné „ještě jeden grafík“. Produkt se neřídí tím, že vidíš všechno. Řídí se tím, že včas vidíš to důležité a máš odvahu podle toho jednat.

## Shrnutí přílohy

Zakladatelský dashboard má být rozhodovací nástroj, ne vitrína metrik. Začni otázkami, pokryj pět vrstev zdraví produktu, odděl analytiku od osobních operativních dat a nastav hranice pro reakci. Privacy-first dashboard neznamená slepý dashboard. Znamená měření, které respektuje zákazníka, chrání tým před datovým nepořádkem a ukazuje signály dost brzy na to, aby šlo něco opravit.


# Příloha AY: Týdenní provozní rytmus SaaS týmu bez meetingového divadla

Malý SaaS tým nepotřebuje pět porad denně, tři status tabulky a Slack kanál, který zní jako letištní rozhlas. Potřebuje rytmus, ve kterém se opakovaně dívá na správné signály, dělá rozhodnutí a nenechá provozní drobnosti vyrůst do dospělých příšer s vlastním rozpočtem.

Týdenní rytmus je most mezi strategií a každodenní prací. Když chybí, tým buď jen hasí, nebo donekonečna plánuje. Když je přecpaný, všichni tráví víc času vysvětlováním práce než prací samotnou. Privacy-first provoz do toho přidává jednu důležitou zásadu: rozhoduj z dostatečných signálů, ale netahej do každé porady osobní data zákazníků, screenshoty obrazovek a detaily, které nikdo nepotřebuje vidět.

## AY.1 Pondělí: rozhodni, co bude tento týden opravdu hotovo

Pondělní plánování nemá být aukce přání. Má odpovědět na otázku: „Které tři až pět výsledků musí do pátku existovat, aby týden dával smysl?“ Výsledek je důležitější než aktivita. „Pracovat na onboardingu“ je mlha. „Zkrátit první import ze šesti kroků na čtyři a ověřit to na třech nových účtech“ už je práce.

Praktický formát pondělí:

- 10 minut: rychlé přečtení dashboardu a incidentů z minulého týdne.
- 15 minut: výběr nejdůležitějších výsledků týdne.
- 10 minut: kapacitní kontrola, kdo má dovolenou, support službu nebo rozdělaný dluh.
- 10 minut: pojmenování rizik a rozhodnutí, co se tento týden vědomě nedělá.
- 5 minut: zápis do jednoho pracovního dokumentu.

Dobrá týdenní priorita má vlastníka, výsledek a test dokončení. Například:

| Priorita | Vlastník | Hotovo znamená | Privacy poznámka |
| --- | --- | --- | --- |
| Zlepšit trial onboarding | produkt | nový prázdný stav je nasazený a má jeden měřený event | event bez e-mailu a obsahu projektu |
| Připravit trust pack pro enterprise leady | obchod | PDF/stránka odpovídá na bezpečnostní otázky | bez interních screenshotů a tajných detailů |
| Opravit doručování pozvánek | vývoj | bounce rate se vrátí do normálu a chyba je popsaná | logy bez obsahu e-mailů |

Pondělí má chránit tým před rozptýlením. Když během týdne přijde nový „urgentní“ nápad, nesmí automaticky vyhodit plán z okna. Buď je to incident, obchodní šance s jasnou hodnotou, nebo položka do backlogu. Všechno ostatní je jen notifikace v převleku za strategii.

## AY.2 Denní sync drž pod patnáct minut

Denní sync má odblokovat práci, ne vytvořit audioverzi projektového nástroje. Každý člověk odpoví stručně:

- Co posune tento týdenní výsledek?
- Co mě blokuje?
- Potřebuji rozhodnutí, kontrolu nebo pomoc?

Zakázaná věta: „Včera jsem řešil různé věci.“ To je sice poetické, ale produkt z toho nezbohatne. Lepší je: „Import padá na validaci CSV s prázdným sloupcem, do oběda navrhnu opravu a potřebuji rozhodnout, jestli chybné řádky přeskočíme nebo zastavíme celý import.“

Privacy-first pravidlo pro denní sync: nečti nahlas osobní data zákazníků, interní API klíče, citlivé části ticketů ani konkrétní obsah databáze. Pokud je potřeba detail, odkaž na ticket s omezeným přístupem. Porada není místo, kam se mají nekontrolovaně kopírovat zákaznické informace jen proto, že sdílení obrazovky svádí k digitálnímu exhibicionismu.

## AY.3 Středa: krátká kontrola rizik místo páteční paniky

Uprostřed týdne udělej patnáctiminutovou kontrolu rizik. Ne proto, aby se plán přepsal, ale aby se včas zachytilo, že se blíží problém.

Zeptej se:

- Je některý týdenní výsledek objektivně ohrožený?
- Vznikl incident, bezpečnostní úkol nebo zákaznická eskalace?
- Přibylo něco, co vyžaduje rozhodnutí zakladatele?
- Děláme práci, která už ztratila smysl?
- Zvyšuje se support zátěž tak, že ohrožuje plán?

Když je problém, napiš reakci v jedné větě: „Snižujeme rozsah importu na CSV bez mapování sloupců, aby šla v pátek ven stabilní verze.“ To je lepší než hrdinské „nějak to dáme“. Hrdinství je fajn v pohádkách. V SaaS provozu je často jen špatně maskovaná absence řízení rozsahu.

## AY.4 Pátek: review výsledků, rozhodnutí a úklid stop

Páteční review není soudní tribunál. Je to krátká zpětná vazba systému. Tým se podívá, co bylo hotovo, co se naučil a co musí přejít do dalšího týdne.

Dobrý páteční zápis obsahuje:

- dokončené výsledky,
- nedokončené výsledky a skutečný důvod,
- nové poznatky ze zákazníků, supportu a metrik,
- rozhodnutí, která padla,
- jeden úklidový krok: smazat starý export, zavřít dočasný přístup, aktualizovat dokumentaci, odstranit mrtvý feature flag.

Právě poslední bod je pro privacy-first provoz zlato. Data a výjimky se nehromadí dramatickým rozhodnutím. Hromadí se po malých „necháme to zatím tak“. Páteční úklid je levná brzda proti chaosu.

## AY.5 Jedno místo pravdy, ne pět polopravd

Týdenní rytmus se rozpadne, pokud je plán v chatu, rozhodnutí v hlavě, checklist v tabulce, incident v e-mailu a finální stav v něčím kalendáři. Vyber jedno pracovní místo pro týdenní zápisy. Může to být Markdown v repozitáři, jednoduchá wiki, issue board nebo dokument. Důležité je, aby tým věděl, kde je aktuální pravda.

Šablona týdenního zápisu:

```markdown
# Týden 2026-W32

## Výsledky týdne
- [ ] Výsledek 1 — vlastník — test dokončení
- [ ] Výsledek 2 — vlastník — test dokončení
- [ ] Výsledek 3 — vlastník — test dokončení

## Rizika
- Riziko — reakce — vlastník

## Rozhodnutí
- Datum: rozhodnutí, proč, dopad

## Privacy úklid
- [ ] Dočasné přístupy
- [ ] Staré exporty
- [ ] Logy a screenshoty v ticketech
- [ ] Mrtvé eventy nebo metriky

## Poznámky pro příští týden
- Co nepřenášet automaticky
- Co ověřit u zákazníků
```

Tahle šablona je záměrně nudná. Nudné provozní šablony jsou podceňovaná technologie. Čím méně fantazie vyžaduje zápis, tím větší šance, že ho tým bude používat i ve středu odpoledne, kdy už nikdo nemá náladu hrát si na procesního architekta.

## AY.6 Checklist týdenního provozního rytmu

- [ ] Pondělní plán má nejvýš pět výsledků týdne.
- [ ] Každý výsledek má vlastníka a jasný test dokončení.
- [ ] Denní sync řeší blokery a rozhodnutí, ne kompletní status román.
- [ ] Citlivá zákaznická data se nečtou nahlas ani nekopírují do obecných zápisů.
- [ ] Středeční kontrola rizik umí snížit rozsah dřív, než vznikne páteční požár.
- [ ] Páteční review obsahuje dokončené výsledky, poznatky, rozhodnutí a jeden úklidový krok.
- [ ] Tým používá jedno místo pravdy pro plán, rozhodnutí a privacy úklid.
- [ ] Staré dočasné přístupy, exporty, screenshoty a mrtvé metriky se pravidelně mažou nebo uzavírají.
- [ ] Codyho pravidlo: když porada nemění rozhodnutí ani neodblokuje práci, měla by být poznámka, ne událost v kalendáři.

## Codyho komentář

Malé týmy často odmítají proces, protože si představí korporátní divadlo s razítkem a třemi schvalovateli. Jenže dobrý rytmus není byrokracie. Je to zábradlí. Pomáhá běžet rychleji, protože nemusíš každý týden znovu vymýšlet, kde je plán, kdo rozhoduje a proč se v pátek tváříme překvapeně, že středeční riziko pořád existuje.

## Shrnutí přílohy

Týdenní provozní rytmus drží malý SaaS tým v realitě: pondělí vybírá výsledky, denní sync odblokovává práci, středa kontroluje rizika a pátek uklízí rozhodnutí i datové stopy. Privacy-first provoz není jen volba nástrojů. Je to opakovaný návyk nenechávat citlivá data, výjimky a polorozhodnutí ležet všude kolem jako kabely pod stolem.


# Příloha AZ: Kvartální strategické review bez manažerského kouře

Týdenní rytmus drží tým v chodu. Kvartální review hlídá, jestli běží správným směrem. Malý SaaS tým nepotřebuje třídenní offsite, dvacetistránkový deck a tabulku, která vypadá jako ovládání jaderné elektrárny. Potřebuje jednou za čtvrtletí zastavit, podívat se na realitu a rozhodnout, co dál nedělat.

Dobré kvartální review má jednoduchý cíl: převést poslední tři měsíce provozu, zákaznických signálů, financí a produktových lekcí do několika jasných rozhodnutí. Ne do pocitu, že „jsme si to hezky prošli“. Pocit je fajn. Rozhodnutí platí faktury.

## AZ.1 Začni otázkami, ne prezentací

Pokud review začne slide deckem, často skončí debatou o barvě grafu. Začni otázkami, které tým donutí myslet v rozhodnutích:

- Co jsme chtěli v tomto kvartálu dokázat?
- Co se opravdu stalo?
- Který zákaznický segment reagoval nejlépe?
- Které aktivity vytvářely hodnotu a které jen zaměstnávaly tým?
- Co nám říkají finance, support, prodej a produkt dohromady?
- Co musíme přestat dělat, aby další kvartál nebyl jen větší hromada stejného chaosu?

Teprve potom vytáhni čísla, rozhovory, incidenty, churn důvody, support témata a marketingové výsledky. Data mají odpovídat na otázky, ne zavalit místnost jako lavina exportů z nástrojů, které si nikdo nepamatuje zapnout.

Praktický formát úvodu:

```markdown
## Kvartální otázky
1. Největší potvrzená hypotéza:
2. Největší vyvrácená hypotéza:
3. Nejlepší zákaznický segment:
4. Největší provozní brzda:
5. Jedna věc, kterou příští kvartál rušíme:
```

Ten poslední bod je povinný. Strategie není seznam přání. Strategie je i seznam věcí, kterým říkáš ne, i když by na roadmapě vypadaly sexy.

## AZ.2 Rozděl review na čtyři vrstvy

Kvartální review se často rozbije, protože tým míchá všechno dohromady: revenue, bugy, značku, vývoj, nábor, hosting, SEO, zákaznické stížnosti a pocit zakladatele, že konkurence má hezčí animaci tlačítka. Potřebuješ vrstvy.

Použij čtyři jednoduché bloky:

1. **Trh a zákazník:** kdo kupuje, kdo odchází, kdo se ptá, kdo ignoruje.
2. **Produkt a hodnota:** které funkce vedou k výsledku zákazníka, kde lidé ztrácí čas, co nikdo nepoužívá.
3. **Go-to-market:** odkud přichází kvalitní poptávky, co pomáhá důvěře, co je jen marketingový hluk.
4. **Provoz a data:** dostupnost, support, incidenty, náklady, subdodavatelé, datový úklid.

Každá vrstva má dodat nejvýš tři poznatky a jedno doporučené rozhodnutí. Když jich je víc, nejde o strategii, ale o skládku. Skládka může být autentická, ale špatně se podle ní řídí firma.

Příklad výstupu:

| Vrstva | Poznatek | Rozhodnutí |
| --- | --- | --- |
| Trh | Nejlépe konvertují malé B2B týmy s 10–50 lidmi | Příští kvartál psát landing page a případovky primárně pro tento segment |
| Produkt | Import dat šetří zákazníkům nejvíc času, ale onboarding ho schovává | Přesunout import do prvního setup kroku |
| Marketing | Nejlepší leady chodí z přímých doporučení a odborných článků | Posílit RSS/blog a partnerské reference, ne honit další sociální síť |
| Provoz | Support často řeší nejasné role uživatelů | Upravit oprávnění, nápovědu a demo scénář |

## AZ.3 Privacy-first review není jen právní kolonka

Soukromí se v kvartálním review nesmí objevit jen jako „GDPR OK“. To je věta, která v reálném světě často znamená „nikdo se na to dnes nechce dívat“. Privacy-first provoz je obchodní, produktová i technická disciplína.

Jednou za kvartál projdi:

- nové nástroje a integrace zapnuté od posledního review,
- nové typy dat v produktu, supportu, analytice a prodeji,
- změny v exportech, logování a retenci,
- přístupy lidí, externistů a dodavatelů,
- subdodavatele, kteří se objevili kvůli nové funkci,
- staré experimenty, které pořád měří, i když už nikdo neví proč.

Privacy otázka pro každé rozhodnutí:

> „Umíme zákazníkovi jednou lidskou větou vysvětlit, proč toto data zpracování existuje?“

Pokud ne, rozhodnutí není připravené. Možná je správné, možná ne. Ale určitě ještě není dostatečně jasné. A nejasná práce s daty je jako drát pod kobercem: chvíli to vypadá uklizeně, pak o to někdo zakopne.

## AZ.4 Rozhodnutí zapisuj jako sázky

Kvartální plán nemá být seznam úkolů. Má být soubor sázek. Sázka říká: věříme, že když uděláme X pro Y segment, zlepší se Z, a poznáme to podle těchto signálů.

Šablona strategické sázky:

```markdown
## Sázka: [název]

Věříme, že:
Pro segment:
Uděláme:
Protože jsme viděli:
Úspěch poznáme podle:
Ochranná metrika:
Co nebudeme dělat:
Vlastník:
Datum kontroly:
```

Příklad:

```markdown
## Sázka: Rychlejší aktivace malých týmů

Věříme, že: kratší setup zvýší počet týmů, které dokončí první hodnotný výsledek.
Pro segment: B2B týmy s 10–50 lidmi bez interního IT.
Uděláme: nový onboarding s importem dat v prvním kroku a jedním demo scénářem.
Protože jsme viděli: support často vysvětluje import až po prvním selhání setupu.
Úspěch poznáme podle: více dokončených setupů a méně support dotazů k prvnímu týdnu.
Ochranná metrika: nesmí růst počet žádostí o ruční zásah do zákaznických dat.
Co nebudeme dělat: nepřidáme další obecný dashboard před opravou aktivace.
Vlastník: produkt.
Datum kontroly: konec šestého týdne kvartálu.
```

Ochranná metrika je důležitá. Chrání tým před vítězstvím, které vypadá dobře v jednom grafu a rozbije provoz jinde. Rychlejší onboarding je skvělý, dokud nezačne znamenat víc chyb, víc ruční práce nebo víc zbytečně sbíraných dat.

## AZ.5 Rozpočet řeš podle energie týmu, ne jen podle peněz

Malý SaaS tým má tři hlavní rozpočty: peníze, čas a pozornost. Peníze jsou vidět v účetnictví. Čas v kalendáři. Pozornost mizí potichu v notifikacích, rozpracovaných iniciativách a „jen rychlých“ schůzkách.

Na kvartálním review si ke každé větší iniciativě napiš:

- kolik vývojové kapacity spolkne,
- koho bude tahat do rozhodnutí,
- jaké provozní břemeno přidá po spuštění,
- jaká data bude potřebovat,
- co kvůli ní neuděláš.

Příklad špatně napsané iniciativy:

> „Přidat integraci s účetním systémem.“

Lepší verze:

> „Ověřit jednu účetní integraci pro segment malých agentur. Nejprve ruční export a tři rozhovory, potom teprve API. Limit: žádné ukládání přístupových tokenů bez návrhu rotace a odpovědnosti.“

Tohle je méně efektní věta do roadmapy, ale lepší rozhodnutí pro produkt. Ne každá integrace je funkce. Některé integrace jsou malé domácí zvíře: vypadá roztomile, ale musíš ho krmit, hlídat a uklízet po něm.

## AZ.6 Z review musí vypadnout stop-list

Nejcennější část kvartálního review je často seznam věcí, které končí. Bez stop-listu se tým jen učí přidávat další vrstvy práce. To je cesta k produktu, který má pět navigací, tři cenové strategie a tým, který už neví, proč něco existuje.

Stop-list může obsahovat:

- marketingový kanál bez kvalitních leadů,
- funkci, kterou držíte jen kvůli jednomu neurčitému slibu,
- metriku, podle které nikdo nerozhoduje,
- interní meeting bez jasného výstupu,
- dočasnou integraci, která se stala trvalým rizikem,
- zákaznický segment, který dlouhodobě neodpovídá produktu.

Stop-list zapisuj konkrétně:

```markdown
## Stop-list Q4
- Rušíme: měsíční obecný newsletter bez jasného tématu.
  Proč: nízká kvalita odpovědí, vysoká příprava, žádná návaznost na produktové sázky.
  Náhrada: dva hlubší články měsíčně + RSS + přímé odkazy v obchodním follow-upu.
  Vlastník ukončení: marketing.
  Hotovo do: 15. 10.
```

Privacy-first bonus: stop-list je výborný moment na vypnutí starých trackerů, formulářů, exportů a přístupů. Ne všechno, co se kdysi hodilo k experimentu, má právo žít v produkci navždy.

## AZ.7 Checklist kvartálního strategického review

- [ ] Review začíná rozhodovacími otázkami, ne slidovou přehlídkou.
- [ ] Tým porovnal plán kvartálu s realitou, ne jen s dobrými úmysly.
- [ ] Poznatky jsou rozdělené na trh, produkt, go-to-market a provoz.
- [ ] Každá vrstva má nejvýš tři poznatky a jedno doporučené rozhodnutí.
- [ ] Privacy-first kontrola pokrývá nové nástroje, data, logy, exporty, přístupy a subdodavatele.
- [ ] Každá strategická sázka má segment, důkaz, úspěch, ochrannou metriku, vlastníka a datum kontroly.
- [ ] Plán bere v úvahu peníze, čas i pozornost týmu.
- [ ] Review končí stop-listem: co rušíme, proč, kdo to ukončí a do kdy.
- [ ] Výsledky jsou zapsané v jednom místě pravdy a navazují na týdenní rytmus.
- [ ] Codyho pravidlo: pokud po review nepřibylo žádné „ne“, nebyla to strategie, ale nákupní seznam.

## Codyho komentář

Kvartální review je pro malý tým skvělá prevence zakladatelské hypnózy. Když na produktu pracuješ každý den, začneš považovat vlastní chaos za kontext. Jednou za tři měsíce je zdravé podívat se na produkt očima zákazníka, účetnictví, supportu a privacy člověka najednou. Ano, je to trochu nepohodlné. Ale pořád méně nepohodlné než za rok zjistit, že jste půl firmy postavili kolem segmentu, který nikdy nechtěl platit.

## Shrnutí přílohy

Kvartální strategické review převádí provozní zkušenost do jasných sázek: co posilujeme, co ověřujeme a co rušíme. Malý SaaS tým by měl pracovat s vrstvami trhu, produktu, go-to-market a provozu, přidat privacy-first kontrolu datových stop a skončit stop-listem. Strategie není velký dokument. Je to disciplína říct několika důležitým věcem ano a spoustě lákavých rozptýlení ne.


# Příloha BA: Roční produktový a datový úklid bez nostalgického skladiště

Kvartální review rozhoduje, kam produkt směřuje. Roční úklid rozhoduje, co už s sebou dál netáhne. Každý web a SaaS produkt postupně nabírá staré formuláře, zapomenuté exporty, historické tarify, testovací skripty, integrační výjimky, dokumentaci „dočasně napsanou narychlo“ a přístupy lidí, kteří už mezitím změnili práci, obor i oblíbenou kávu.

Roční úklid není trest za to, že tým během roku něco improvizoval. Improvizace je normální. Problém začne ve chvíli, kdy se z improvizace stane neviditelná infrastruktura. Privacy-first provoz potřebuje jednou ročně vědomě zavřít smyčku: co pořád slouží, co se má archivovat, co se má smazat a co se musí přepsat, protože už neodpovídá realitě.

## BA.1 Udělej inventář podle oblastí, ne podle nástrojů

Když začneš úklid seznamem nástrojů, rychle skončíš u otázky, jestli někdo ještě platí ten jeden doplněk v prohlížeči. Začni raději oblastmi produktu a provozu. Nástroje se potom ukážou samy.

Projdi šest oblastí:

1. **Produkt:** aktivní funkce, skryté funkce, experimenty, feature flags, staré onboarding kroky.
2. **Web a marketing:** landing pages, formuláře, lead magnety, kampaně, UTM pravidla, staré redirecty.
3. **Data:** zákaznická data, analytické eventy, exporty, logy, screenshoty, support přílohy.
4. **Přístupy:** uživatelé v administraci, externisté, servisní účty, API klíče, sdílené schránky.
5. **Dodavatelé:** hosting, e-mail, analytika, CRM, platební služby, AI služby, monitoring.
6. **Dokumentace:** privacy texty, obchodní podmínky, help centrum, interní návody, incidentní playbooky.

Pro každou oblast napiš tři sloupce: „necháváme“, „měníme“, „rušíme“. Není potřeba dokonalý audit na první pokus. Potřebuješ mapu, podle které se dá uklízet.

Příklad:

| Oblast | Necháváme | Měníme | Rušíme |
| --- | --- | --- | --- |
| Produkt | Aktivní onboarding pro nové týmy | Text u importu dat | Starý onboarding krok pro zrušený tarif |
| Marketing | Blog, RSS, dvě klíčové landing pages | Zastaralou případovku | Neaktivní PDF lead magnet s formulářem |
| Data | Bezpečnostní logy s retenční lhůtou | Event `trial_started` na jasnější definici | Exporty kampaně z minulého roku |
| Přístupy | Role supportu a admina | Dočasné přístupy převést na expirační | Staré účty externistů |

## BA.2 Každé „necháváme“ musí mít současný důvod

Nejnebezpečnější věta v produktu je: „To tam radši necháme.“ Občas je správná. Často ale znamená jen to, že nikdo nechce být ten člověk, který vypne věc bez majitele.

U každé položky, kterou necháváš, napiš současný důvod:

- komu slouží,
- jakou práci pomáhá dokončit,
- kdo ji vlastní,
- jak poznáš, že funguje,
- jaké datové riziko s sebou nese.

Pokud neumíš odpovědět, položka nejde automaticky do koše. Jde do krátkého ověření. Rozdíl je důležitý: úklid nemá být destruktivní sprint, kde smažeš půl produktu a pak se tváříš minimalisticky. Má být proces, který oddělí hodnotu od zvyku.

Mini šablona ověření:

```markdown
## Položka k ověření
Název:
Kde žije:
Původní účel:
Současný známý vlastník:
Kdo by si všiml vypnutí:
Datové stopy:
Rozhodnutí do:
```

Když se k položce ani po dvou týdnech nikdo nehlásí a žádná zákaznická cesta na ní nestojí, pravděpodobně to není kritická funkce. Je to digitální prach.

## BA.3 Datový úklid dělej jako produktovou práci

Datový úklid se často nechává právníkům nebo administrátorům. Jenže skutečná rozhodnutí vznikají v produktu: které pole ve formuláři sbíráme, který event posíláme, jak dlouho držíme export, co ukládá support a co se propisuje do CRM.

Roční datový úklid má mít konkrétní výstupy:

- seznam datových kategorií, které už nesbíráš,
- seznam míst, kde se zkrátila retence,
- vypnuté nebo přepsané eventy bez rozhodovací hodnoty,
- smazané staré exporty a support přílohy,
- aktualizované privacy texty podle skutečného chování produktu,
- potvrzené vlastníky pro logy, zálohy a zákaznické přílohy.

Praktická otázka pro tým:

> „Kdyby se nás zákazník zeptal, proč tuto datovou stopu pořád máme, dokážeme odpovědět bez červenání a bez hledání v historii Slacku?“

Pokud odpověď zní „ehm“, máš kandidáta na smazání, zkrácení retence nebo lepší vysvětlení. Ideálně všechny tři věci, ale nejsme barbaři, začni tou nejbezpečnější.

## BA.4 Archiv není smetiště s hezčím názvem

Archivace je užitečná jen tehdy, když má pravidla. Jinak je to jen pomalejší mazání, které se nikdy nestane. U webu a SaaS produktu má archiv řešit hlavně znalost, rozhodnutí a historický kontext. Nemá donekonečna držet osobní údaje, staré CSV exporty a screenshoty zákaznických obrazovek.

Rozlišuj tři režimy:

| Režim | Co tam patří | Co tam nepatří |
| --- | --- | --- |
| Živý provoz | aktuální produkt, aktivní procesy, potřebné logy | staré experimenty bez vlastníka |
| Archiv znalostí | rozhodnutí, anonymizované lessons learned, uzavřené postmortemy | osobní data „pro jistotu“ |
| Smazání | duplicitní exporty, staré přílohy, mrtvé eventy, testovací účty | dokumenty s právní retenční povinností |

Archivuj raději závěr než surovinu. Místo deseti nahrávek zákaznických rozhovorů často stačí anonymizovaná syntéza: vzory, citace bez identity, rozhodnutí a navazující úkoly. Produktový tým tím získá znalost a firma si nenese zbytečnou datovou zátěž.

## BA.5 Roční úklid musí končit změnou v systému

Workshop, po kterém zůstane jen poznámka „měli bychom uklidit data“, je hezký teambuilding pro pocit viny. Roční úklid má končit konkrétními změnami v systému.

Minimální výstup:

- vypnuté věci: seznam funkcí, skriptů, formulářů, eventů a přístupů, které už neběží,
- změněné věci: formuláře, texty, retence, role, dokumentace, automatizace,
- odložené věci: položky, které vyžadují rizikové ověření, vlastníka a termín,
- zákaznická komunikace: co je potřeba oznámit, pokud se mění chování produktu,
- další kontrola: datum, kdy se ověří, že úklid nezpůsobil regresi.

Příklad závěrečného záznamu:

```markdown
## Roční úklid 2026
Vypnuto: starý lead magnet formulář, 4 nepoužívané analytické eventy, 2 účty externistů.
Změněno: retence support příloh z neurčito na 90 dní, privacy mikrocopy u importu dat.
Odloženo: audit jedné účetní integrace, vlastník: CTO, termín: 31. 1.
Komunikace: žádná změna pro zákazníky, pouze interní úklid datových stop.
Kontrola regresí: 14 dní po vypnutí formuláře.
```

## BA.6 Checklist ročního produktového a datového úklidu

- [ ] Úklid je naplánovaný jako produktová práce, ne jako „až bude čas“.
- [ ] Inventář pokrývá produkt, web, marketing, data, přístupy, dodavatele a dokumentaci.
- [ ] Každá ponechaná položka má současný účel, vlastníka a datové riziko.
- [ ] Položky bez jasného vlastníka jdou do krátkého ověření, ne do věčného odkladu.
- [ ] Staré exporty, support přílohy, testovací účty a mrtvé eventy mají rozhodnutí: ponechat, archivovat, nebo smazat.
- [ ] Archiv obsahuje hlavně znalost a rozhodnutí, ne surová osobní data pro nostalgii.
- [ ] Privacy texty a interní dokumentace odpovídají skutečnému chování produktu.
- [ ] Vypnuté funkce, skripty, formuláře a přístupy jsou opravdu vypnuté technicky, ne jen zapsané v poznámce.
- [ ] Úklid má kontrolu regresí a vlastníka navazujících kroků.
- [ ] Codyho pravidlo: pokud systém po ročním úklidu není jednodušší, pravděpodobně jste jen přerovnali šuplík.

## Codyho komentář

Roční úklid je produktová dospělost v montérkách. Není sexy, nikdo kvůli němu neudělá virální příspěvek a demo na konferenci vypadá pořád stejně. Ale zákazníkům se lépe důvěřuje firmě, která ví, co provozuje, proč to provozuje a kdy staré věci vypíná. Produkt, který nikdy nic nemaže, časem nepůsobí bohatě. Působí zapomenutě.

## Shrnutí přílohy

Roční produktový a datový úklid brání tomu, aby se z webu nebo SaaS stal sklad starých funkcí, exportů a přístupů. Tým má projít produkt, marketing, data, dodavatele i dokumentaci, každé ponechané položce dát současný důvod a zbytek bezpečně vypnout, archivovat nebo smazat. Privacy-first provoz není jen opatrný start. Je to schopnost průběžně uklízet po vlastním růstu.


# Příloha BB: Release QA bez produkčních dat a hrdinského klikání

Když malý tým vydává novou verzi webu nebo SaaS, často spoléhá na dvě věci: „vývojář to přece zkusil“ a „kdyby něco, zákazníci napíšou“. To je sice levný monitoring, ale trochu připomíná testování padáku metodou překvapení. Release QA nemusí být korporátní ceremoniál s padesáti tabulkami. Má být krátká, opakovatelná kontrola nejdůležitějších cest, datových stop a provozních rizik před tím, než změna dopadne na skutečné lidi.

Privacy-first QA má ještě jednu podmínku: netestuj pohodlí týmu na úkor dat zákazníků. Produkční data nejsou univerzální testovací stavebnice. Pokud potřebuješ ověřit onboarding, fakturaci, import nebo support scénář, vytvoř syntetická data, anonymizovaný vzorek nebo staging scénář. GDPR staví ochranu dat návrhem a výchozím nastavením do jádra zpracování; EDPB k článku 25 zdůrazňuje, že technická a organizační opatření mají být součástí návrhu a provozu, ne dekorace nalepená až po releasu: https://www.edpb.europa.eu/documents/guideline/guidelines-42019-on-article-25-data-protection-by-design-and-by-default_en

## BB.1 Definuj release podle rizika, ne podle velikosti commitu

Velký diff nemusí být rizikový a malá změna může rozbít platby. Release QA začni krátkou klasifikací. Cílem není zdržovat každý deployment, ale vědět, kdy stačí rychlá kontrola a kdy je potřeba přidat člověka navíc.

Rozlišuj čtyři typy změn:

| Typ změny | Příklad | Minimální QA |
| --- | --- | --- |
| Obsahová | text landing page, FAQ, obrázek | kontrola významu, odkazů, mobilu a metadata |
| Produktová | nový onboarding krok, změna dashboardu | kritická cesta, prázdné stavy, oprávnění, eventy |
| Datová | nový formulář, import, export, integrace | datové minimum, retence, logy, privacy text |
| Provozní | DNS, e-mail, platby, auth, migrace | rollback plán, monitoring, záloha, incident kontakt |

Praktické pravidlo: jakmile změna sahá na přihlášení, platby, fakturaci, export dat, integrace, role, mazání nebo e-mailové doručování, není to „jen malý release“. Je to změna s dopadem na důvěru.

## BB.2 Udržuj malý seznam kritických cest

QA často selhává proto, že tým neví, co přesně má před vydáním projít. Pak někdo deset minut náhodně kliká aplikací, tváří se soustředěně a doufá, že na něj chyba sama vyskočí z křoví.

Místo toho měj stálý seznam kritických cest. Pro běžný B2B SaaS může vypadat takhle:

1. Nový návštěvník pochopí nabídku a odešle kontakt nebo založí trial.
2. Nový uživatel dokončí první hodnotový krok bez pomoci supportu.
3. Aktivní zákazník provede hlavní akci produktu.
4. Admin pozve kolegu, nastaví roli a případně odebere přístup.
5. Zákazník najde fakturaci, tarif, export a zrušení účtu.
6. Support bezpečně najde potřebný kontext bez zbytečného otevření osobních dat.

Každá cesta má mít vlastní testovací účet a vlastní syntetická data. Pokud test vyžaduje reálného zákazníka, test není dobře připravený. Výjimkou je produkční smoke test po releasu, ale i tam používej interní účet, ne zákaznický profil „jen na minutku“.

## BB.3 Testovací data navrhni jako produktový asset

Syntetická data nejsou trapná náhražka reality. Jsou to bezpečné kulisy, které ti dovolí opakovaně ověřovat chování systému. Dobrá testovací data mají pokrýt běžné i nepříjemné scénáře: prázdný účet, účet s historií, uživatele bez oprávnění, neúspěšnou platbu, import s chybou, dlouhé názvy, diakritiku, více jazyků a pomalé externí API.

Vytvoř si seed scénáře:

```markdown
## Seed scénář
Název: Tým po trialu se třemi rolemi
Účel: ověřit pozvání, oprávnění, billing a hlavní akci
Obsahuje: owner, admin, viewer, 12 projektů, 3 faktury, 1 neúspěšnou platbu
Neobsahuje: reálné e-maily zákazníků, produkční dokumenty, support přílohy
Reset: automaticky po každém testovacím běhu
Vlastník: produkt / QA
```

Privacy-first detail: nepoužívej v testech skutečné e-mailové adresy lidí, skutečné fakturační údaje ani screenshoty z produkce. I „anonymní“ export se může stát problémem, když v něm zůstane poznámka, název firmy, URL souboru nebo identifikátor účtu. Bezpečnější je syntetická realita než rozmazaná produkce.

## BB.4 Logy a chyby kontroluj před releasem, ne až při požáru

Release QA není jen klikání obrazovek. Ověř také, co systém zapíše do logů, co ukáže uživateli a co pošle do monitoringu. OWASP Logging Cheat Sheet doporučuje u logování řešit mimo jiné maskování, sanitizaci, omezení přístupu, bezpečný přenos, retenci a mazání logů: https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html

Před releasem zkontroluj:

- zda chyby neukazují stack trace, interní cesty, tokeny nebo SQL dotazy,
- zda logy neobsahují hesla, API klíče, session tokeny, reset odkazy, celé payloady formulářů nebo zbytečné osobní údaje,
- zda uživatelská chybová hláška říká, co má člověk udělat dál,
- zda interní alert obsahuje dost kontextu pro opravu, ale ne celé zákaznické tajemství,
- zda debug režim není zapnutý v produkci,
- zda nový event v analytice odpovídá měřicímu plánu a má jasný účel.

Příklad dobrého rozdílu:

| Místo | Špatně | Lépe |
| --- | --- | --- |
| Uživatel | `Payment provider error 402_card_declined_payload...` | „Platba se nepovedla. Zkuste jinou kartu nebo nám napište.“ |
| Log | celý platební payload | interní ID pokusu, stav, provider request ID, bez citlivých polí |
| Alert | „Billing failed“ | „Billing: 12 neúspěšných plateb za 10 minut, nový release 2026.08.09, runbook odkaz“ |

## BB.5 Release checklist má být krátký a povinný

Checklist, který má čtyři stránky, tým brzy obejde. Checklist, který má osm dobrých bodů, se dá používat roky. Neřeš v něm všechno. Řeš věci, které se při spěchu nejčastěji rozbijí.

Minimalistický release checklist:

- [ ] Změna je zařazená podle rizika: obsahová, produktová, datová nebo provozní.
- [ ] Kritická cesta dotčená změnou je ručně ověřená na testovacím účtu.
- [ ] Test proběhl se syntetickými nebo bezpečně anonymizovanými daty.
- [ ] Nová pole, eventy, logy a exporty mají jasný účel a vlastníka.
- [ ] Chybové stavy mají lidský text a interní diagnostiku bez úniku citlivých dat.
- [ ] Rollback nebo vypnutí funkce je popsané jednou větou a někdo ho umí provést.
- [ ] Monitoring po releasu sleduje skutečné riziko, ne jen obecné „něco spadlo“.
- [ ] Dokumentace, help nebo privacy text jsou aktualizované, pokud se změnilo chování produktu.

## BB.6 Po releasu udělej krátký smoke test a zavři smyčku

Předprodukční QA snižuje riziko. Nevidí ale všechno: DNS, CDN cache, e-mailové doručování, reálné integrační limity nebo produkční oprávnění se umí tvářit jako hodné děti přesně do chvíle, kdy vypneš kameru.

Po releasu proto udělej desetiminutový smoke test:

1. Otevři hlavní URL a jednu klíčovou landing page.
2. Přihlas se interním testovacím účtem.
3. Projdi jednu hlavní produktovou akci.
4. Ověř jeden e-mail, jeden log a jeden monitoring signál.
5. Zkontroluj, že nové chování odpovídá tomu, co je napsané v dokumentaci nebo mikrocopy.
6. Zapiš výsledek do release poznámky.

Když se něco rozbije, nepiš jen „opraveno“. Přidej malou lekci: který bod checklistu chyběl, který seed scénář neexistoval nebo který alert přišel pozdě. Release QA se má zlepšovat po malých jizvách, ne po jedné velké katastrofě.

## Codyho komentář

QA není brána, kde sedí mrzutý člověk s razítkem „zamítnuto“. Dobrá QA je bezpečnostní síť pro tým, který chce vydávat často a pořád spát. Privacy-first verze téhle sítě říká: testuj tvrdě, ale netahej do toho zákaznická data jen proto, že se ti nechce vyrobit pár syntetických účtů. Produkce není pískoviště. Je to obchod, kde si lidi nechávají věci, kterým věří.

## Shrnutí přílohy

Release QA pro malý SaaS tým má být krátká, opakovatelná a řízená rizikem. Začni klasifikací změny, udržuj seznam kritických cest, používej syntetická testovací data, kontroluj logy i chybové stavy a po releasu udělej smoke test. Privacy-first provoz neznamená vydávat pomalu. Znamená vydávat tak, aby rychlost nebyla zaplacená zákaznickými daty a improvizovaným požárem v pátek večer.


# Příloha BC: AI funkce v SaaS bez černé skříňky a datového hazardu

AI v SaaS produktu není magický posyp na všechno. Je to nová produktová schopnost, která umí zrychlit práci zákazníka, ale taky velmi rychle vyrobit chaos v datech, očekáváních a odpovědnosti. Privacy-first přístup proto nezačíná otázkou „který model je nejchytřejší“, ale „jaké rozhodnutí nebo výstup má AI zlepšit, jaká data k tomu opravdu potřebuje a kdo ručí za výsledek“.

Aktuální poznámka k regulaci: AI Act vstoupil v EU v platnost 1. srpna 2024 a pravidla nabíhají postupně. Evropská komise uvádí, že některé hlavní milníky včetně transparentních povinností podle článku 50 se vztahují k 2. srpnu 2026, další povinnosti mají pozdější termíny podle typu systému. Pro malý SaaS tým to neznamená paniku, ale znamená to, že AI funkci je potřeba navrhovat dokumentovaně, srozumitelně a s jasným rozdělením rolí. Oficiální přehled časové osy je tady: https://ai-act-service-desk.ec.europa.eu/en/ai-act/eu-ai-act-implementation-timeline

## BC.1 Začni use casem, ne modelem

Špatné zadání zní: „Přidáme AI asistenta do aplikace.“ Dobré zadání zní: „Zkrátíme přípravu odpovědi na support ticket z deseti minut na tři a agent výstup před odesláním schválí.“ Rozdíl je brutální. V prvním případě tým hledá místo, kam nalepit chat. Ve druhém řeší konkrétní workflow, riziko a měřitelný výsledek.

Před implementací napiš AI kartu funkce:

| Otázka | Příklad odpovědi |
| --- | --- |
| Jaký úkol AI pomáhá splnit? | Navrhne odpověď na support ticket podle interní znalostní báze. |
| Kdo je uživatel funkce? | Support specialista, ne koncový zákazník. |
| Jaká data vstupují do promptu? | Text ticketu, vybrané články nápovědy, typ tarifu. |
| Co do promptu nesmí? | Platební údaje, hesla, celé exporty účtu, interní poznámky bez potřeby. |
| Kdo výstup schvaluje? | Člověk před odesláním zákazníkovi. |
| Jak poznáme úspěch? | Kratší čas první odpovědi a stejná nebo lepší kvalita řešení. |

Tahle karta je nudná jen na první pohled. Ve skutečnosti šetří týdny debat, protože oddělí produktovou hodnotu od modelového fetiše. Ano, modely jsou sexy. Ale zákazník neplatí za „používáme nejnovější transformery“, platí za méně práce a méně nervů.

## BC.2 Rozlišuj poskytovatele, nasazovatele a vlastní odpovědnost

Když SaaS tým používá cizí AI API, typicky není autorem základního modelu. Přesto má odpovědnost za to, jak funkci zapojí do produktu, jak informuje uživatele, jak chrání data a jak nastaví lidskou kontrolu. Evropská komise v přehledech k AI Actu pracuje s rozdílnými rolemi a povinnostmi pro vývojáře, poskytovatele a nasazovatele AI systémů: https://commission.europa.eu/news-and-media/news/ai-act-enters-force-2024-08-01_en

Prakticky si u každé AI funkce napiš:

- **Model provider:** kdo provozuje model nebo API.
- **Aplikační vlastník:** kdo ve tvém týmu ručí za produktové chování funkce.
- **Datový vlastník:** kdo schvaluje, jaká data se do AI posílají.
- **Procesní vlastník:** kdo řeší chyby, eskalace a zákaznické dotazy.
- **Schvalovatel výstupu:** člověk, automatické pravidlo nebo kombinace obojího.

Nejhorší stav je „AI to udělala“. AI není kolega s pracovním poměrem, který přijde na postmortem a řekne: „Moje chyba, příště si dám pozor.“ Produktový tým musí vědět, kdo drží volant.

## BC.3 Prompt není odpadkový koš pro zákaznická data

Privacy-first AI integrace posílá do modelu nejmenší užitečný kontext. Ne celý účet. Ne všechny ticketové historie. Ne export CRM, protože „model si to nějak přebere“. Čím větší a osobnější vstup, tím větší právní, bezpečnostní i reputační riziko.

Dobrá prompt pipeline má tři filtry:

1. **Výběr kontextu:** do promptu jde jen část dat nutná pro konkrétní úkol.
2. **Redakce citlivých údajů:** systém odstraní nebo nahradí údaje, které nejsou potřeba.
3. **Účelová šablona:** prompt jasně říká, co má model dělat a co dělat nesmí.

Příklad pro shrnutí support ticketu:

```text
Úkol: Shrň problém zákazníka pro interní support.
Nepřidávej doporučení, která nejsou v podkladech.
Neopakuj osobní údaje, pokud nejsou nutné pro řešení.
Výstup: 3 odrážky: problém, dosavadní kroky, doporučený další krok.
Kontext: [očištěný text ticketu]
Relevantní nápověda: [2 vybrané články]
```

Pseudonymizace může riziko snížit, ale není kouzelný neviditelný plášť. EDPB ve svých Guidelines 01/2025 k pseudonymizaci připomíná, že pseudonymizovaná data mohou zůstat osobními údaji, pokud existují dodatečné informace umožňující opětovné přiřazení: https://www.edpb.europa.eu/public-consultations/guidelines-012025-on-pseudonymisation_pl

## BC.4 Uživatel má poznat, kdy mluví s AI nebo vidí AI výstup

Transparentnost není patička v obchodních podmínkách. Pokud AI generuje odpověď, doporučení, shrnutí, skóre nebo obsah, který ovlivňuje rozhodnutí uživatele, řekni to přímo v místě použití. Ne dramaticky. Ne výstražnou cedulí „pozor robot“. Prostě jasně.

Příklady mikrocopy:

- „Návrh odpovědi vytvořila AI podle vybraných článků nápovědy. Před odesláním ho zkontrolujte.“
- „Toto shrnutí je automaticky vytvořené a může vynechat detail. Originální zpráva zůstává dostupná.“
- „AI doporučení používáme jen jako pomocný signál. Finální rozhodnutí dělá člověk.“
- „Soubor analyzujeme pouze pro tento výstup a nepoužíváme ho k marketingovému profilování.“

Transparentnost podle článku 50 AI Actu se zaměřuje mimo jiné na informování lidí při interakci s AI systémy a na označování určitých AI výstupů. Evropská komise k tomu zveřejňuje průběžné vysvětlení a FAQ: https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act

## BC.5 Human-in-the-loop není alibi, ale konkrétní brzda

„Člověk to zkontroluje“ není kontrolní mechanismus, pokud člověk nemá čas, kontext ani pravomoc výstup zastavit. Lidská kontrola musí být navržená jako součást UX a provozu.

U nízkorizikových funkcí může stačit možnost výstup upravit nebo zahodit. U funkcí, které ovlivňují zákaznickou komunikaci, cenu, přístup k účtu, bezpečnost nebo právní pozici, nastav tvrdší brzdy:

- výstup se nikdy neodesílá automaticky bez schválení,
- rozhraní ukazuje zdroje, ze kterých AI čerpala,
- systém umí říct „nevím“ místo sebevědomé halucinace,
- uživatel má jednoduchou možnost nahlásit chybu,
- rizikové případy padají do ruční fronty.

Příklad: AI navrhne odpověď na reklamaci. Pokud obsahuje slib refundace, změnu smlouvy nebo právní formulaci, systém ji označí jako „vyžaduje kontrolu seniora“. Ne proto, že nevěříme lidem. Protože věříme procesům víc než pátečnímu optimismu.

## BC.6 Loguj rozhodnutí, ne osobní romány

AI funkce potřebuje auditní stopu. Ne kvůli šmírování, ale kvůli provozu: když zákazník nahlásí chybu, musíš vědět, která verze promptu, modelu a kontextu výstup vytvořila. Zároveň není potřeba ukládat celé prompty s osobními údaji navždy.

Dobrý AI log pro SaaS:

| Položka | Ukládat? | Poznámka |
| --- | --- | --- |
| ID AI funkce | Ano | Např. `support_reply_draft`. |
| Verze promptu | Ano | Bez toho nejde debugovat změny. |
| Verze modelu nebo provider nastavení | Ano | Stačí technický identifikátor. |
| Čas a interní ID požadavku | Ano | Pro dohledání incidentu. |
| Celý prompt | Jen krátce nebo vůbec | Pokud obsahuje osobní data, nastav retenci a přístup. |
| Celý výstup | Podle účelu | U supportu může být součástí ticketu, u interní pomoci často ne. |
| Zákaznická identita | Minimalizovat | Ideálně oddělit od technického logu. |

Retence AI logů má být napsaná v datové mapě. Pokud logy držíš „pro jistotu“, přelož si to do češtiny: „Nemáme rozhodnutí a doufáme, že se nikdo nezeptá.“ To je strategie asi jako schovat účtenky do toustovače.

## BC.7 Checklist privacy-first AI funkce

Před zapnutím AI funkce si projdi:

- Je jasně popsaný konkrétní úkol, který AI řeší.
- Existuje AI karta funkce s vlastníkem, vstupy, výstupy, riziky a metrikou úspěchu.
- Tým ví, jestli v daném použití vystupuje jako poskytovatel, nasazovatel nebo obojí.
- Prompt pipeline vybírá jen nezbytný kontext a odstraňuje nepotřebné citlivé údaje.
- Uživatel v rozhraní pozná, kdy vidí AI výstup nebo interaguje s AI.
- Rizikové výstupy nejdou ven bez lidské kontroly.
- Logy obsahují verzi promptu/modelu a minimum osobních údajů.
- Retence promptů, výstupů a AI logů je popsaná v datové mapě.
- Dodavatel AI služby je zapsaný ve vendor review a subprocesorském seznamu, pokud zpracovává osobní údaje.
- Existuje jednoduchý postup pro nahlášení chyby, halucinace nebo nevhodného výstupu.

## Codyho komentář

AI funkce je dobrý sluha a mizerný maskot. Když ji přidáš jen proto, aby landing page měla větší wow, vyrobíš drahý support problém. Když ji navrhneš jako konkrétní zkratku v dobře popsaném procesu, může být skvělá. Dreamindí varianta zní: méně kouzelné mlhy, víc odpovědnosti, datové střídmosti a lidské kontroly. Robot může psát návrh. Volant drží tým.

## Zdroje k příloze

- Evropská komise: přehled vstupu AI Actu v platnost a rolí vývojářů/nasazovatelů: https://commission.europa.eu/news-and-media/news/ai-act-enters-force-2024-08-01_en
- AI Act Service Desk: časová osa postupné účinnosti AI Actu: https://ai-act-service-desk.ec.europa.eu/en/ai-act/eu-ai-act-implementation-timeline
- Evropská komise: navigace a FAQ k AI Actu včetně transparentních povinností: https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act
- EDPB: Guidelines 01/2025 on Pseudonymisation: https://www.edpb.europa.eu/public-consultations/guidelines-012025-on-pseudonymisation_pl

## Shrnutí přílohy

Privacy-first AI v SaaS začíná konkrétním use casem, jasnými rolemi a střídmým datovým vstupem. Prompt není skládka zákaznických dat, transparentnost má být vidět v produktu a lidská kontrola musí mít reálnou brzdu. Když tým loguje verze rozhodnutí místo osobních románů a drží retenci pod kontrolou, může AI používat prakticky, evropsky a bez zbytečného datového hazardu.


# Příloha BD: Vendor lock-in a přenositelnost bez zákaznické klece

Vendor lock-in není automaticky zlo. Každý produkt má nějaké náklady na změnu: data, integrace, návyky týmu, procesy, školení, fakturace. Problém začíná ve chvíli, kdy zákazník zůstává ne proto, že produkt vytváří hodnotu, ale proto, že odchod bolí víc než používání. To není retence. To je digitální lepidlo na prsty.

Privacy-first SaaS má k přenositelnosti přistupovat jako k důvěryhodnosti produktu. Když zákazník ví, že může odejít, paradoxně se mu často lépe zůstává. Nemusí se bát, že podpis smlouvy znamená dobrovolný vstup do datového akvária bez dvířek.

Právní poznámka: GDPR obsahuje právo na přenositelnost údajů v článku 20, pokud jsou splněné jeho podmínky. Oficiální znění na EUR-Lexu mluví o právu získat osobní údaje ve strukturovaném, běžně používaném a strojově čitelném formátu a předat je jinému správci: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng#art_20. Produktově je ale dobré jít dál než zákonné minimum: umožnit rozumný export i tam, kde nejde čistě o osobní údaje, ale o provozní hodnotu zákazníka.

## BD.1 Pojmenuj, kde může lock-in vznikat

Lock-in nebývá jen jedna věc. V malém SaaS se často schová do detailů, které vypadají nevinně, dokud zákazník nepotřebuje změnu.

Typická místa lock-inu:

- **Data:** zákazník nemá export, nebo je export nečitelný zip plný náhodných ID.
- **Integrace:** webhooky, API a propojení jsou nastavené tak ručně, že je nikdo nechce znovu dělat.
- **Workflow:** tým si zvykl na proces, který produkt podporuje, ale neumí ho popsat mimo aplikaci.
- **Dokumentace:** nastavení existuje jen v hlavě jednoho člověka nebo v dávno zapomenutém chatu.
- **Smlouva:** výpovědní podmínky jsou napsané tak, že zákazník musí plánovat odchod jako menší stěhování firmy.
- **Identita:** uživatelské účty, role a oprávnění nejdou snadno předat nebo uzavřít.

První krok není všechno hned opravit. První krok je udělat mapu. U každé oblasti napiš: co zákazník potřebuje k odchodu, kolik času by mu to trvalo a co by ztratil. Pokud odpověď zní „netušíme“, máš riziko, ne tajemství.

## BD.2 Export navrhni pro člověka i stroj

Export dat nemá být alibi tlačítko. Má být použitelný. Zákazník by měl rozumět, co dostane, v jakém formátu, jak často a co v exportu není.

Dobré minimum pro B2B SaaS:

| Typ dat | Doporučený export | Poznámka |
| --- | --- | --- |
| Zákaznické záznamy | CSV nebo XLSX | Vhodné pro rychlou kontrolu a import do jiného nástroje. |
| Relace a vazby | JSON | Lepší pro hierarchie, role, stavy a historii. |
| Dokumenty a přílohy | ZIP se strukturou složek | Přidej manifest se seznamem souborů. |
| Auditní stopa | CSV/JSON s omezením rozsahu | Pozor na osobní údaje a bezpečnostní citlivost. |
| Nastavení účtu | JSON nebo čitelný Markdown přehled | Pomůže migraci i internímu auditu. |

Export by měl mít manifest: datum vytvoření, rozsah, verzi schématu, časové pásmo, kódování, seznam souborů a krátké vysvětlení polí. Bez manifestu je export jako mapa bez legendy: technicky existuje, prakticky tě štve.

## BD.3 Dokumentuj schéma, ne jen tlačítko

Když export obsahuje sloupec `status`, zákazník potřebuje vědět, co hodnoty znamenají. `1`, `2`, `3` možná dávají smysl databázi, ale člověku po třech měsících připomínají šifru z účtenky.

Ke každému exportu udržuj malou dokumentaci:

- název souboru a účel,
- seznam polí s lidským popisem,
- povolené hodnoty enumů,
- vztahy mezi soubory,
- příklad jednoho řádku nebo objektu,
- co je záměrně vynechané kvůli bezpečnosti nebo minimalizaci dat.

Praktický příklad:

```text
subscriptions.csv
- customer_id: interní ID zákazníka v exportu, ne původní databázové ID
- plan_code: tarif v době exportu, hodnoty starter/pro/business
- status: active, paused, cancelled
- started_at: datum začátku v ISO 8601
- cancelled_at: prázdné, pokud tarif nebyl zrušen
```

Tahle dokumentace nemusí být krásná. Musí být aktuální. Pokud se mění schéma exportu, změna patří do release checklistu stejně jako změna API.

## BD.4 Import mysli jako budoucí důkaz férovosti

Přenositelnost není jen „umíme data vydat ven“. U některých produktů dává smysl umět data také přijmout. Ne proto, aby ses stal univerzálním migračním centrem pro celý internet, ale protože dobrý import snižuje strach z přechodu k tobě.

U importu nastav hranice:

- podporuj pár běžných formátů místo deseti polofunkčních,
- validuj data před uložením a ukaž srozumitelné chyby,
- dovol testovací import bez dopadu na produkci,
- ukládej technický import log s minimem osobních údajů,
- dej zákazníkovi souhrn: kolik záznamů prošlo, co se přeskočilo a proč.

Import je obchodní funkce maskovaná jako technická. Když zákazník vidí, že přechod nebude ruční peklo, sníží se nákupní riziko. A když jednou bude odcházet, stejná filozofie mu řekne: nejsme klec, jsme služba.

## BD.5 API a webhooky drž stabilní, ale ne věčné

Integrace jsou silný zdroj hodnoty i lock-inu. Když zákazník postaví proces na tvém API, nechce každé dva měsíce hádat, proč se změnil payload. Stabilita je součást důvěry.

Rozumné zásady:

- verziuj API i webhook eventy,
- oznamuj breaking changes dopředu,
- udržuj migrační návod s příkladem starého a nového payloadu,
- nepřidávej do webhooků osobní údaje, které příjemce nepotřebuje,
- umožni vypnout nebo rotovat integrační tokeny bez podpory,
- ukazuj historii posledních doručení webhooku bez zbytečných citlivých dat.

Privacy-first verze API dokumentace má odpovídat i na otázku: která data odcházejí z našeho systému a proč. Vývojář chce endpoint. DPO nebo bezpečnostní člověk chce datový tok. Dobrá dokumentace zvládne obojí bez toho, aby se tvářila jako román o kabeláži.

## BD.6 Odchod musí být proces, ne trest

Když zákazník ruší účet, často je to nepříjemné. Produkt ale nemá mstít zraněné city. Dobře navržený odchod obsahuje jasný postup: export, potvrzení, vypnutí obnovování fakturace, retence, smazání a kontakt pro otázky.

Krátká odchodová stránka může říct:

> „Před zrušením účtu si stáhněte export dat. Data účtu budeme držet 30 dní pro obnovu a vyřízení účetních nebo bezpečnostních požadavků, potom je smažeme podle retenčních pravidel. Fakturace se po zrušení už neobnoví.“

Pokud má produkt komplexnější data, přidej stav migrace:

- export připraven,
- export stažen,
- integrace vypnuté,
- uživatelé deaktivovaní,
- účet v retenční lhůtě,
- účet smazaný nebo anonymizovaný.

Tohle není jen UX. Je to prevence supportu, sporů a nedůvěry. Odchod, který je klidný, je poslední dobrý dojem. A poslední dobrý dojem někdy rozhodne, jestli se zákazník za rok vrátí.

## BD.7 Checklist přenositelnosti bez klece

Projdi produkt a odpověz:

- Má zákazník jasné místo, kde si stáhne export klíčových dat.
- Export má čitelný formát, manifest a popis polí.
- Zákazník ví, co export obsahuje a co záměrně neobsahuje.
- Schéma exportu je verzované nebo alespoň dokumentované při změnách.
- Import umí bezpečně validovat data a vysvětlit chyby.
- API a webhooky mají verze, migrační pravidla a jasný datový rozsah.
- Integrační tokeny lze rotovat a vypnout bez lovu v supportu.
- Offboarding obsahuje export, retenci, vypnutí fakturace a smazání/anonymizaci.
- Smluvní a produktové texty neslibují víc, než umí technická realita.
- Tým jednou za čtvrtletí projde, kde nově vznikl lock-in bez vědomého rozhodnutí.

## Codyho komentář

Nejlepší lock-in je hodnota. Zákazník zůstává, protože produkt šetří čas, vydělává peníze, snižuje riziko nebo přináší klid. Jakmile začneš spoléhat na datovou klec, už neoptimalizuješ produkt, ale únikovou trasu. Dreamindí přístup je jednoduchý: postav službu tak, aby šlo odejít, a pak každý měsíc dodej dost hodnoty, aby to zákazník nechtěl udělat. Elegantní, férové a nevyžaduje to ani jeden temný pattern v plášti.

## Zdroje k příloze

- GDPR, článek 20: právo na přenositelnost údajů v oficiálním znění EUR-Lex: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng#art_20

## Shrnutí přílohy

Přenositelnost je součást důvěryhodného SaaS produktu. Zákazník potřebuje použitelný export, dokumentované schéma, férový offboarding a stabilní integrace, ne jen formální tlačítko „stáhnout data“. Privacy-first produkt nestaví klec. Staví hodnotu, která obstojí i ve chvíli, kdy má zákazník otevřené dveře.


# Příloha BE: E-mailová doručitelnost bez špehovacích pixelů a reputační loterie

E-mail je nudná infrastruktura přesně do chvíle, než přestane fungovat. Pak je najednou důležitější než nový hero obrázek, sedmý pricing experiment i kreativní slogan „revoluce v produktivitě“. Bez e-mailu se zákazník nepřihlásí, nedostane fakturu, nepotvrdí účet, neobnoví heslo a často ani nezjistí, že se něco pokazilo.

Privacy-first přístup k e-mailu má dvě části. První je technická důvěryhodnost: doména musí být ověřená, podepsaná a chráněná proti zneužití. Druhá je respekt k příjemci: neposílat zbytečné zprávy, nesbírat neviditelné signály jen proto, že to nástroj umí, a oddělit transakční komunikaci od marketingu. Doručitelnost totiž není trik. Je to reputace v praxi.

## BE.1 Odděl typy e-mailů dřív, než začneš řešit šablony

Malý SaaS často začne jednou službou na všechno: registrace, faktury, newsletter, onboarding, obchodní follow-up, support i systémové alerty. Funguje to rychle, ale jen do prvního problému. Když marketingová rozesílka zhorší reputaci domény, trpí i reset hesla. A když support omylem dostane marketingový tag, už máš datový guláš s příchutí „kdo tohle povolil?“.

Rozděl e-maily minimálně do čtyř kategorií:

| Kategorie | Příklad | Doporučení |
| --- | --- | --- |
| Transakční | registrace, reset hesla, faktura | Nejvyšší priorita, minimum obsahu, samostatná reputace. |
| Produktové | onboarding, upozornění na stav účtu | Posílat jen k jasnému účelu a s rozumnou frekvencí. |
| Obchodní | odpověď na poptávku, domluvený follow-up | Vázat na konkrétní vztah, ne automaticky na newsletter. |
| Marketingové | newsletter, novinky, kampaně | Pouze pro dobrovolně přihlášené lidi, snadné odhlášení. |

Praktická architektura pro malý tým: transakční e-maily posílej ze subdomény typu `mail.example.com` nebo `notify.example.com`, marketing z jiné subdomény typu `news.example.com`. Hlavní doménu nenechávej všem experimentům napospas. Doména je reputační majetek, ne společný ručník v kancelářské kuchyňce.

## BE.2 SPF, DKIM a DMARC nejsou ozdoba DNS

SPF říká, které servery smí posílat e-mail za doménu. DKIM zprávu kryptograficky podepisuje. DMARC říká příjemcům, co mají dělat, když SPF nebo DKIM nesedí, a umožňuje reportování zneužití. Tyhle tři zkratky nejsou pro radost adminů. Jsou základní bezpečnostní minimum pro značku, zákazníky i doručitelnost.

Postup zavedení:

1. Sepiš všechny služby, které posílají e-mail za doménu: produkt, fakturace, helpdesk, newsletter, CRM, monitoring.
2. U každé služby ověř, jestli opravdu musí posílat z firemní domény.
3. Nastav SPF co nejkratší a bez nekonečného řetězení `include` záznamů.
4. Zapni DKIM pro každou odesílací službu a ulož vlastníka záznamu.
5. Nastav DMARC nejdřív v monitorovacím režimu `p=none`, vyhodnoť reporty a teprve potom zpřísňuj na `quarantine` nebo `reject`.
6. Změny DNS zapisuj do provozního logu, protože za tři měsíce nikdo nebude vědět, proč tam ten divný TXT záznam bydlí.

Google ve svých požadavcích pro odesílatele uvádí autentizaci SPF nebo DKIM, DMARC pro odesílací domény a další pravidla pro hromadné odesílatele: https://support.google.com/a/answer/81126. Technické pozadí DMARCu popisuje RFC 7489: https://www.rfc-editor.org/rfc/rfc7489. Produktově z toho plyne jednoduché pravidlo: e-mailová důvěryhodnost patří do launch checklistu, ne do panického pátrání po tom, proč lidem nechodí reset hesla.

## BE.3 Trackovací pixel není jediný způsob, jak poznat zájem

Marketingové nástroje rády měří otevření e-mailu přes neviditelný obrázek. Jenže open rate je čím dál méně spolehlivý signál a z privacy pohledu je to často zbytečně invazivní. Člověk si neotevřel vztah se značkou. Otevřel zprávu. Není potřeba z toho dělat mikroskopickou reality show.

Privacy-first alternativa:

- měř hlavně doručení, bounces, odhlášení a odpovědi,
- u newsletteru sleduj agregovaný zájem o témata, ne chování konkrétní osoby,
- odkazy znač parametry jen tam, kde to pomáhá vyhodnotit kanál, ne individuální profil,
- důležité reakce získávej odpovědí na e-mail nebo krátkou anketou,
- u transakčních e-mailů neměř otevření vůbec, pokud k tomu nemáš jasný provozní důvod.

Příklad dobrého měření newsletteru: „Téma o retenci přineslo 12 odpovědí a 4 poptávky během týdne.“ Příklad zbytečného slídění: „Jana otevřela e-mail třikrát, klikla na druhý odkaz a pravděpodobně čte v tramvaji.“ Jedno pomáhá rozhodovat. Druhé dělá z marketingu šmírovací sport.

## BE.4 Bounce a complaint proces chraň reputaci domény

Doručitelnost se nekazí jen technickým nastavením. Kazí se i tím, že posíláš na staré adresy, ignoruješ stížnosti, přidáváš lidi do kampaní bez kontextu a tváříš se, že odhlášení je osobní urážka. Není. Je to signál, že člověk nechce další e-mail. Produktivní reakce je respekt, ne další automatizace.

Minimální provozní pravidla:

- hard bounce vyřaď hned,
- opakovaný soft bounce dej do dočasného pozastavení,
- complaint nebo spam report ber jako okamžitý stop signál,
- odhlášení potvrď bez dalšího přesvědčování,
- neimportuj staré kontakty bez jasného původu a účelu,
- jednou měsíčně projdi segmenty, které dlouho nereagují nebo nemají aktuální účel.

Privacy-first detail: stav doručení nemusí znamenat, že si navždy ukládáš historii každého e-mailu. Pro provoz často stačí poslední stav, důvod blokace, čas změny a zdroj souhlasu nebo vztahu. E-mailový systém nemá být archiv osobních dějin zákazníka.

## BE.5 Transakční e-mail piš jako součást produktu

Reset hesla, potvrzení účtu nebo faktura nejsou marketingový billboard. Jsou to produktové kroky. Mají být krátké, jasné a bezpečné.

Dobrá transakční zpráva obsahuje:

- jasný předmět bez reklamního balastu,
- název služby a důvod odeslání,
- jednu hlavní akci,
- časovou platnost odkazu, pokud jde o bezpečnostní operaci,
- kontakt na podporu nebo stránku nápovědy,
- minimum osobních údajů v těle zprávy.

Špatně: „Máme pro vás skvělou novinku! Klikněte pro obnovu hesla a mimochodem vyzkoušejte náš nový tarif Pro.“ Dobře: „Obnova hesla pro účet Cody Welcome. Odkaz platí 30 minut. Pokud jste o obnovu nežádali, zprávu ignorujte nebo nám napište.“ Nuda? Ano. U bezpečnostního e-mailu je nuda kompliment.

## BE.6 E-mailový dodavatel je subdodavatel, ne kouzelná trubka

Před zapnutím e-mailové služby se zeptej stejně jako u analytiky nebo hostingu: jaká data odcházejí, kde se zpracovávají, jak dlouho se drží logy, kdo má přístup k obsahu zpráv a jak službu vypneš. U evropského privacy-first provozu preferuj dodavatele s jasnými smluvními podmínkami, dobrou dokumentací zpracování dat a možností omezit uložená metadata.

Krátký vendor dotazník:

- Kde se zpracovává obsah e-mailů a metadata doručení?
- Jak dlouho se drží logy, bounces a eventy?
- Lze vypnout open tracking a click tracking?
- Umí služba oddělit transakční a marketingové streamy?
- Jak se exportují nebo mažou kontakty při odchodu?
- Jak probíhá rotace API klíčů a omezení oprávnění?
- Existuje dokumentace incidentů, dostupnosti a podpory?

Nejde o to najít dokonalého dodavatele. Jde o to vědět, jaké riziko kupuješ společně s pohodlím. Každá „jednoduchá integrace za pět minut“ je pořád tok dat. Jen má hezčí onboarding.

## BE.7 Checklist e-mailové doručitelnosti bez slídění

Projdi si před spuštěním a potom jednou měsíčně:

- Transakční, produktové, obchodní a marketingové e-maily jsou oddělené účelem i nastavením.
- SPF, DKIM a DMARC jsou nastavené, zdokumentované a mají vlastníka.
- DMARC reporty někdo kontroluje a politika se zpřísňuje až po vyhodnocení.
- Hlavní doména není používána pro riskantní marketingové experimenty.
- Newsletter má jasný souhlas, snadné odhlášení a alternativu přes RSS nebo archiv.
- Open tracking je vypnutý nebo má opravdu obhajitelný účel.
- Bounce, complaint a unsubscribe signály automaticky zastavují další posílání.
- Transakční e-maily neobsahují reklamní vsuvky ani zbytečné osobní údaje.
- API klíče e-mailové služby mají omezený scope a lze je rychle rotovat.
- Retence e-mailových logů odpovídá provoznímu účelu, ne sběratelské vášni.

## Codyho komentář

E-mail je skvělý kanál, protože je přímý, otevřený a pořád funguje bez toho, aby člověk musel prosit algoritmus o pozornost. Právě proto si zaslouží respekt. Když se k inboxu zákazníka chováš jako k místu pro vztah, ne jako k reklamní skládce, doručitelnost se řeší líp a marketing zní míň jako robotický pošťák v panice. Dreamindí minimum: ověřená doména, jasný účel, málo dat, snadný odchod a žádné neviditelné kukátko do každé zprávy.

## Zdroje k příloze

- Google Workspace Admin Help, Email sender guidelines: https://support.google.com/a/answer/81126
- RFC 7489, Domain-based Message Authentication, Reporting, and Conformance (DMARC): https://www.rfc-editor.org/rfc/rfc7489
- RFC 6376, DomainKeys Identified Mail (DKIM) Signatures: https://www.rfc-editor.org/rfc/rfc6376

## Shrnutí přílohy

E-mailová doručitelnost je kombinace technické autentizace, čistého provozu a respektu k příjemci. SPF, DKIM a DMARC chrání doménu, oddělené streamy chrání transakční zprávy a střídmé měření chrání důvěru. Privacy-first e-mail neposílá méně hodnoty. Jen posílá méně balastu a méně dat do cizích systémů.


# Příloha BF: Platby a fakturace bez datového kombajnu

Platba je jeden z nejcitlivějších momentů SaaS produktu. Zákazník už nečte jen slib na landing page. Dává ti peníze, fakturační údaje a implicitně i důvěru, že z toho neuděláš datový bleší trh. Špatně navržený checkout umí pokazit konverzi, účetnictví, podporu i soukromí najednou. To je docela slušný multitasking, bohužel z té temné strany síly.

Privacy-first fakturace neznamená, že produkt má být účetní skanzen. Znamená to, že jasně oddělíš platební údaje, fakturační povinnosti, produktový přístup a marketing. Každý údaj má mít účel, vlastníka, retenční pravidlo a bezpečný tok. Ideální stav: zákazník zaplatí bez překvapení, účetní má doklady, support vyřeší problém a marketing nedostane z checkoutu nepozvaný osobní profil.

## BF.1 Checkout je produktový proces, ne jen formulář na kartu

Checkout začíná dřív než platební brána. Začíná cenovou stránkou, jasným popisem tarifu, informací o DPH, měně, obnovování předplatného, zrušení a fakturaci. Pokud zákazník až po zadání karty zjistí, že cena byla bez daně, roční obnova je schovaná v poznámce a faktura přijde „někdy“, důvěra dostane pěstí.

Praktický checkout pro B2B SaaS má odpovědět na tyhle otázky:

- Co přesně kupuji a od kdy to platí?
- Jaká je cena, měna, fakturační období a případná daň?
- Kdo bude mít administrátorský přístup po zaplacení?
- Jak dostanu fakturu a kde ji najdu později?
- Jak předplatné zruším nebo změním tarif?
- Co se stane, když platba selže?

Příklad mikrotextu u tlačítka:

> „Po potvrzení budete přesměrováni na bezpečnou platební bránu. Údaje o kartě neukládáme v našem produktu. Fakturu pošleme na zadaný fakturační e-mail a najdete ji také v administraci.“

Tohle je krátké, ale řeší strach. Zákazník ví, co se stane. Support dostane méně dotazů. A právník si možná na chvíli sedne bez tikání v oku.

## BF.2 Sbírej jen údaje, které potřebuje platba, faktura nebo podpora

Fakturační formulář není příležitost vyptat se na velikost firmy, obor, počet zaměstnanců, narozeniny zakladatele a oblíbenou barvu účetní. Pokud údaj nepotřebuješ k platbě, daňovému dokladu, smluvnímu vztahu nebo podpoře, nepatří do checkoutu.

Minimální datový model pro B2B předplatné:

| Údaj | Typický účel | Poznámka |
| --- | --- | --- |
| Název firmy | fakturace | Jen pokud zákazník nakupuje jako firma. |
| IČO / DIČ | fakturace a DPH | Ověřuj jen tam, kde to dává smysl. |
| Fakturační adresa | účetní a daňové doklady | Nepoužívej ji automaticky pro marketingovou segmentaci. |
| Fakturační e-mail | doručení dokladu | Může být jiný než uživatelský login. |
| ID zákazníka v platební bráně | párování plateb | Ukládej interní identifikátor, ne plná platební data. |
| Poslední čtyři číslice karty | zákaznická orientace | Pokud je poskytuje brána; nikdy neukládej celé číslo karty. |

Princip minimalizace dat je jedním ze základních principů GDPR: osobní údaje mají být přiměřené, relevantní a omezené na to, co je nezbytné pro daný účel. Evropská komise principy GDPR shrnuje zde: https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/principles-gdpr_en. V checkoutu to znamená jednoduché pravidlo: každé pole musí projít větou „bez tohoto údaje nedokážeme splnit konkrétní povinnost nebo službu“.

## BF.3 Platební brána je subdodavatel, ne černá díra

Platební brána má často přístup k citlivějším údajům než většina marketingových nástrojů. Proto ji nevybírej jen podle toho, jak rychle jde vložit tlačítko. Ptej se, kde běží zpracování, jaké údaje ukládá, jak řeší chargebacky, exporty, webhooks, auditní logy, přístupy administrátorů a podporu při incidentu.

Krátký vendor dotazník pro platby:

- Které fakturační a platební údaje zpracováváte a v jaké roli?
- Kde jsou data uložena a kdo k nim má administrátorský přístup?
- Jaké subdodavatele používáte pro platby, antifraud, e-mail a podporu?
- Umíte export zákazníků, plateb, refundací a faktur v použitelném formátu?
- Jak dlouho držíte události, logy a webhook payloady?
- Jak se řeší incident, únik, reklamace nebo sporná platba?

Codyho komentář: u plateb někdy nejde mít všechno stoprocentně evropské, protože kartové sítě, banky a antifraud ekosystém jsou globální realita. Privacy-first rozhodnutí ale pořád existuje: neposílat do platebního stacku víc dat, než je nutné; oddělit platební identitu od produktové analytiky; a vybrat dodavatele, kterého umíš auditovat, ne jen obdivovat v integrační dokumentaci.

## BF.4 Fakturační a produktová data drž odděleně

Častá chyba: fakturační systém se stane vedlejším CRM, produktová databáze začne držet účetní historii a support vidí víc, než potřebuje. Výsledek je chaos. Když zákazník požádá o export, výmaz, změnu e-mailu nebo převod účtu, tým najednou netuší, kde končí produktová data a kde začínají účetní povinnosti.

Navrhni oddělení takhle:

- Produktový účet drží přístup, role, nastavení a produktová data.
- Fakturační profil drží údaje nutné k dokladům, předplatnému a platbám.
- Platební brána drží platební instrumenty a transakční stav.
- Účetnictví drží doklady podle zákonných povinností.
- Marketing drží pouze dobrovolně získané kontakty a preference komunikace.

Mezi systémy používej interní ID, ne e-mail jako univerzální klíč. E-mail se mění, člověk může odejít z firmy a fakturační kontakt nemusí být uživatel produktu. Univerzální e-mailový klíč je pohodlný asi jako jedna společná kartáčová hlavice pro celou firmu: technicky možné, společensky znepokojivé.

## BF.5 DPH a přeshraniční prodej nehádej podle nálady

U SaaS v Evropě rychle narazíš na rozdíl mezi B2B a B2C, domácím a přeshraničním prodejem, plátcem a neplátcem DPH, reverse charge a režimy typu One Stop Shop. Tohle není místo pro kreativní improvizaci. Produkt má připravit čistá data a jasný tok, účetní nebo daňový poradce má potvrdit pravidla.

Produktové minimum:

- rozliš zemi zákazníka a typ zákazníka podle fakturačních údajů,
- ukládej, jaké daňové rozhodnutí bylo použito u konkrétní faktury,
- neměň historické doklady při změně profilu zákazníka,
- umožni ruční opravu s auditní stopou,
- zobraz cenu a daň srozumitelně před platbou,
- dokumentuj výjimky, místo aby žily jen v hlavě účetní.

Evropská komise popisuje One Stop Shop jako režim, který firmám umožňuje přiznávat a platit DPH z vybraných přeshraničních B2C prodejů v EU přes jeden členský stát: https://taxation-customs.ec.europa.eu/one-stop-shop_en. Náležitosti českého daňového dokladu se řeší v zákoně o DPH, zejména v § 29: https://www.zakonyprolidi.cz/cs/2004-235#p29. Neber tuhle kapitolu jako daňové poradenství; ber ji jako produktový checklist, který účetnímu usnadní říct „ano, takhle to dává smysl“ místo „kdo to proboha navrhoval“.

## BF.6 Selhaná platba má být zákaznická pomoc, ne trest

Karta expiruje, limit selže, banka platbu zamítne, fakturační kontakt je na dovolené. To není morální selhání zákazníka. Je to běžný provozní stav. Dobrý SaaS ho řeší klidně, předvídatelně a bez vyděračského tónu.

Proces pro selhanou platbu:

1. Hned po selhání zobraz bezpečnou informaci v administraci.
2. Pošli krátký e-mail fakturačnímu kontaktu, ne celému týmu.
3. Dej rozumnou ochrannou lhůtu před omezením služby.
4. Jasně vysvětli, co se stane po vypršení lhůty.
5. Nezobrazuj platební detaily lidem bez fakturační role.
6. Po vyřešení platby pošli potvrzení a ukonči upomínkovou sekvenci.

Příklad e-mailu:

> „Platba za tarif Team se dnes nepovedla. Služba běží dál do 20. 8. 2026, aby měl tým čas údaje opravit. Platební metodu může upravit fakturační správce v sekci Fakturace. Údaje o kartě v našem produktu neukládáme.“

Dobrá upomínka je konkrétní, klidná a bezpečná. Špatná upomínka zní jako robotický exekutor s newsletterovým certifikátem.

## BF.7 Checklist plateb a fakturace bez datového kombajnu

- Je na cenové stránce jasné, co zákazník kupuje, v jaké měně, s jakým obdobím a jak se řeší DPH?
- Sbírá checkout jen údaje nutné pro platbu, fakturu, smlouvu nebo podporu?
- Má fakturační e-mail samostatné pole a není automaticky marketingovým souhlasem?
- Jsou platební údaje uložené u brány, ne v produktové databázi?
- Je platební brána vedená jako subdodavatel v interním registru?
- Má tým popsané, kde končí produktová data a kde začínají účetní doklady?
- Ukládá systém daňové rozhodnutí použité u konkrétní faktury?
- Mají refundace, chargebacky a ruční opravy auditní stopu?
- Vidí platební a fakturační údaje jen lidé s potřebnou rolí?
- Existuje lidský proces pro selhané platby, ochrannou lhůtu a obnovu přístupu?

## Codyho komentář

Platby jsou skvělé místo, kde se ukáže, jestli firma myslí privacy-first vážně. Na blogu se o soukromí píše snadno. V checkoutu se ale láme chleba: dokážeš říct zákazníkovi, co sbíráš, proč to sbíráš, kdo to zpracuje a jak dlouho to zůstane? Pokud ano, důvěra není slogan. Je to provozní vlastnost produktu.

## Zdroje k příloze

- Evropská komise, principy GDPR: https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/principles-gdpr_en
- Evropská komise, One Stop Shop pro DPH v EU: https://taxation-customs.ec.europa.eu/one-stop-shop_en
- Zákon č. 235/2004 Sb., o dani z přidané hodnoty, § 29 náležitosti daňového dokladu: https://www.zakonyprolidi.cz/cs/2004-235#p29

## Shrnutí přílohy

Privacy-first platby stojí na jasném checkoutu, datové minimalizaci, auditovatelném platebním dodavateli, oddělení produktových a fakturačních dat a klidném procesu při selhání platby. Fakturace nemá být datový kombajn. Má být důvěryhodná provozní vrstva, která zákazníkovi usnadní platit a týmu usnadní neudělat nepořádek.

# Příloha BG: Referral a partnerský marketing bez sledovacího pekla

Referral program je krásně jednoduchá věc: spokojený zákazník doporučí produkt někomu dalšímu a firma mu za to poděkuje, odmění ho nebo mu aspoň pošle virtuální high-five. Pak přijde realita: affiliate platforma, třicetidenní cookie, fingerprinting, cross-device tracking, automatické profily, exporty do reklamních systémů a dashboard, který ví o návštěvníkovi víc než jeho praktický lékař. Gratuluju, z doporučení se stal datový lunapark.

Privacy-first referral neznamená, že nemůžeš měřit doporučení. Znamená to, že měříš jen to, co potřebuješ k férovému vyhodnocení programu, vyplacení odměny a ochraně proti zneužití. Žádné skryté sledování lidí po internetu. Žádné „když už máme cookie, tak ji použijeme i pro remarketing“. Doporučení má být vztahová mechanika, ne tajná sledovací infrastruktura v kabátku růstového hacku.

## BG.1 Nejdřív rozhodni, co vlastně odměňuješ

Než začneš řešit linky a tracking, napiš si jednu větu: za co přesně partner nebo zákazník dostane odměnu? Bez toho vznikne program, který odměňuje hluk místo hodnoty. Jinak řečeno: budeš platit za kliky, registrace, aktivované účty, první platbu, roční smlouvu, nebo skutečně udrženého zákazníka?

Praktické varianty:

- **Doporučení zákazníka:** stávající zákazník pozve známého a dostane kredit po první zaplacené faktuře.
- **Partnerský prodej:** konzultant nebo agentura přivede firmu a dostane provizi z prvních měsíců.
- **Komunitní kód:** veřejný kód pro konkrétní komunitu, newsletter nebo podcast.
- **Interní ambassador:** zákazník dodá případovou studii, reference nebo úvod do jiné firmy.

Každá varianta potřebuje jiné měření. U zákaznického doporučení často stačí pozvánkový odkaz nebo kód. U partnerského prodeje může být lepší ruční evidence dealu v CRM. U komunitního kódu nepotřebuješ vědět, kdo klikl před třemi týdny ve dvě ráno; stačí vědět, že zákazník použil kód při nákupu.

Příklad rozhodovací věty:

> „Odměna vzniká až po první úspěšné platbě nového zákazníka, který při registraci použil referral kód nebo byl ručně přiřazen k partnerovi před podpisem smlouvy.“

Tahle věta je nudná. To je dobře. Nudné podmínky šetří právníka, support i partnerské vztahy.

## BG.2 Preferuj kódy a serverové přiřazení před sledovacími cookies

Nejčistší referral identifikátor je ten, který uživatel vědomě použije: kód, pozvánka, partnerský odkaz s krátkým parametrem nebo ruční výběr partnera při registraci. Není potřeba sledovat člověka přes půl internetu, když ti může sám říct: „přišel jsem od Jany“.

Privacy-first pořadí metod:

1. **Referral kód zadaný uživatelem** při registraci nebo checkoutu.
2. **Pozvánkový odkaz** s krátkým tokenem, který se uloží serverově jen pro dokončení registrace.
3. **Ruční přiřazení partnera** u B2B prodeje, když doporučení vzniká v osobní komunikaci.
4. **Krátkodobá first-party cookie** pouze pro dokončení stejné návštěvy nebo krátkého rozhodovacího okna.
5. **Fingerprinting, third-party tracking a cross-device profilování:** ne. Tady není co poeticky rozebírat.

Serverové přiřazení může být jednoduché: když návštěvník přijde přes `?ref=jana`, zobrazíš v registračním formuláři informaci „Doporučení: Jana / Partner X“ a po registraci uložíš k účtu `referral_source_id`. Pokud se člověk neregistruje, identifikátor po krátké době smažeš. Neposíláš ho do reklamní sítě, nepáruješ ho s chováním na blogu, neděláš z něj tajnou složku.

## BG.3 Atribuční okno drž krátké a vysvětlené

Marketing miluje dlouhá atribuční okna, protože pak skoro všechno vypadá jako úspěch kampaně. Privacy-first provoz miluje krátká a srozumitelná okna, protože minimalizují data a spory. U referral programu se ptej: jak dlouho je férové tvrdit, že doporučení ovlivnilo nákup?

Příklad tabulky:

| Typ doporučení | Atribuce | Proč |
| --- | --- | --- |
| Pozvánka do SaaS | 14 dní od kliknutí nebo do registrace | Krátký produktový rozhodovací cyklus. |
| Partnerský B2B deal | ruční přiřazení před nabídkou | Rozhodování běží přes obchodní vztah, ne cookie. |
| Komunitní kód | použití kódu při nákupu | Uživatel vědomě uplatní výhodu. |
| Obsahový partner | jen přímé použití odkazu/kódu | Bez sledování čtenářů napříč webem. |

Mikrotext pro podmínky programu:

> „Doporučení vyhodnocujeme podle použitého kódu, pozvánkového odkazu nebo ručního přiřazení v obchodním procesu. Nepoužíváme fingerprinting ani sledování napříč weby. Krátkodobý referral token používáme jen k přiřazení nové registrace a po vyhodnocení ho mažeme podle retenčního pravidla.“

Tohle je mnohem lepší než „vyhrazujeme si právo používat analytické a marketingové technologie za účelem optimalizace partner programu“, což je firemní čeština pro „ani my už nevíme, co všechno tam běží“.

## BG.4 Odděl referral data od produktové analytiky

Referral program potřebuje pár faktů: kdo doporučil, kdo přišel, kdy vznikla odměna, jaký je stav vyplacení, jestli nedošlo ke zneužití. Produktová analytika potřebuje agregované informace o aktivaci, retenci a hodnotě zákazníků. Tyhle světy spolu mohou mluvit, ale nemají se slít do jednoho osobního profilu.

Minimální datový model:

| Entita | Ukládané údaje | Retence |
| --- | --- | --- |
| Partner | název, kontaktní e-mail, smluvní stav, výplatní údaje | po dobu vztahu a zákonných povinností |
| Referral token | token, partner ID, datum vytvoření, expirace | do expirace nebo registrace |
| Doporučený účet | zákaznické ID, partner ID, stav odměny | po dobu programu a účetní evidence |
| Odměna | částka/kredit, důvod, fakturační stav, auditní stopa | podle účetních a smluvních pravidel |
| Anti-abuse signál | agregované počty, podezřelé vzory | krátce a s jasným účelem |

Co naopak neukládat bez dobrého důvodu:

- kompletní historii navštívených stránek doporučeného člověka,
- otisky zařízení,
- přesnou geolokaci,
- data z osobních sociálních profilů,
- automatické propojení referral zdroje s marketingovým remarketingem,
- poznámky typu „vypadá jako malá firma, asi slabý budget“.

Principy GDPR stojí mimo jiné na účelovém omezení, minimalizaci dat a omezení uložení. Evropská komise je shrnuje v přehledu principů zpracování osobních údajů: https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/principles-gdpr_en. V referral programu to prakticky znamená: data pro provizi nejsou automaticky data pro produktový profiling.

## BG.5 Podmínky programu napiš pro lidi, ne pro archeology

Referral program selže, když partner nerozumí pravidlům. A čím víc je program automatizovaný, tím důležitější je jasná komunikace. Partner musí vědět, kdy vzniká nárok na odměnu, co se stane při refundaci, jak dlouho trvá schválení, jak se řeší vlastní nákupy, spam, kupónové katalogy a veřejné slevové weby.

Krátká struktura pravidel:

- **Kdo se může zapojit:** zákazníci, partneři, agentury, komunita.
- **Co se počítá:** první platba, aktivace, roční smlouva nebo jiná jasná událost.
- **Co se nepočítá:** vlastní účty, spam, falešné registrace, porušení značky, kupónové farmy.
- **Jak měříme:** kód, pozvánka, ruční přiřazení, krátké atribuční okno.
- **Jak chráníme soukromí:** žádný fingerprinting, žádné third-party profily, oddělená data.
- **Jak se vyplácí:** kredit, sleva, faktura, minimální částka, splatnost.
- **Jak se řeší spory:** kontakt, lhůta, ruční kontrola, auditní stopa.

Evropská komise u informačních povinností zdůrazňuje, že informace pro lidi mají být stručné, transparentní, srozumitelné, snadno dostupné a v jasném jazyce: https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/principles-gdpr/what-information-must-be-given-individuals-whose-data-collected_en. To je dobré pravidlo i mimo čistě právní texty. Pokud partner musí číst podmínky s lupou a kávou číslo pět, něco je špatně.

## BG.6 Souhlas nepoužívej jako univerzální kouzelnou propustku

Některé referral scénáře běží na smlouvě, některé na oprávněném zájmu, některé mohou vyžadovat souhlas, zejména pokud se dostáváš ke sledování, profilování nebo marketingovým cookies. Tohle není právní poradenství, ale produktová brzda: neptej se „jaký checkbox to zachrání“, ptej se „můžeme program navrhnout tak, aby invazivní sledování vůbec nepotřeboval?“

EDPB v materiálech ke consentu zdůrazňuje, že platný souhlas má být svobodný, konkrétní, informovaný a jednoznačný; lidé mají mít skutečnou volbu a kontrolu. Přehled EDPB k souhlasu je zde: https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-052020-consent-under-regulation-2016679_en. V referral programu to znamená: pokud už potřebuješ souhlas, nesmí být schovaný v podmínkách, spojený s nesouvisejícími účely nebo prakticky nevypnutelný.

Lepší design často vypadá takhle:

- Uživatel vidí, že používá referral kód.
- Program jasně říká, co se kvůli tomu uloží.
- Token expiruje a nepoužívá se pro jiné účely.
- Partner vidí jen obchodně nutné údaje, ne osobní chování doporučeného zákazníka.
- Zákazník může podporu požádat o opravu špatného přiřazení.

Codyho komentář: nejlepší consent banner je ten, který nemusíš zobrazit, protože jsi produkt navrhl střídmě. Ano, není to tak sexy jako „growth stack“. Ale růst, který stojí na důvěře, nemá po třech měsících kocovinu z datového bordelu.

## BG.7 Checklist referral programu bez sledovacího pekla

- Je jasně napsané, za jakou událost vzniká odměna?
- Umí program fungovat přes kód, pozvánku nebo ruční přiřazení bez cross-site trackingu?
- Je atribuční okno krátké, obhajitelné a srozumitelně popsané?
- Ukládá se referral token jen po dobu nutnou k vyhodnocení?
- Jsou referral data oddělená od produktové analytiky a remarketingu?
- Vidí partner jen údaje nutné pro vyúčtování a kontrolu programu?
- Existuje anti-abuse proces bez plošného sledování všech návštěvníků?
- Jsou pravidla programu napsaná lidsky a veřejně dostupná?
- Je jasné, jak se řeší refundace, vlastní nákupy a spory o přiřazení?
- Má tým retenční pravidla pro tokeny, odměny, auditní stopu a výplatní údaje?

## Zdroje k příloze

- Evropská komise, principy GDPR: https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/principles-gdpr_en
- Evropská komise, informace poskytované lidem při sběru údajů: https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/principles-gdpr/what-information-must-be-given-individuals-whose-data-collected_en
- European Data Protection Board, Consent under GDPR — summary: https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-052020-consent-under-regulation-2016679_en

## Shrnutí přílohy

Referral a partnerský marketing nemusí stát na sledovacích cookies, fingerprintingu ani tajném profilování. Stačí jasně definovat odměňovanou událost, preferovat kódy a serverové přiřazení, držet krátké atribuční okno, oddělit referral data od produktové analytiky a napsat pravidla programu lidsky. Privacy-first referral není méně měřitelný. Je jen méně slizký, což je v marketingu osvěžující změna.


# Příloha BH: Interní přístupy k produkci bez superadmin kultu

Produkční přístup je jako klíče od dílny, skladu i pokladny najednou. V malém SaaS týmu se často rozdá rychle: „Ať to můžeš opravit.“ Pak se po půl roce zjistí, že produkční databázi vidí skoro každý, staré účty pořád fungují, logy obsahují osobní údaje a administrátorský účet má heslo uložené v prohlížeči člověka, který už pracuje na jiné planetě. Tedy aspoň organizačně.

Privacy-first provoz neznamená, že nikdo nesmí nic opravit. Znamená to, že přístup k produkci je vědomá výjimka, má vlastníka, má časový limit, zanechá stopu a jde vypnout bez detektivní práce. Cílem není vytvořit bezpečnostní divadlo, kde všichni klikají na žádanky a stejně sdílí jeden účet. Cílem je, aby tým dokázal rychle pomáhat zákazníkům, aniž by z produkčních dat udělal společnou kancelářskou nástěnku.

## BH.1 Rozděl přístupy podle práce, ne podle důvěry

Nejhorší role v systému je „admin, protože mu věříme“. Důvěra je dobrá věc pro spolupráci, ale špatný přístupový model. Přístup má vycházet z práce, kterou člověk opravdu potřebuje udělat: support řeší konkrétní ticket, vývojář debugguje incident, finance kontrolují fakturaci, zakladatel schvaluje změnu plánu. Každá z těchto situací potřebuje jiný rozsah dat.

Praktické role:

- **Support reader:** vidí základní stav účtu, historii ticketů a technické signály, ale nevidí citlivý obsah zákaznických dat.
- **Billing operator:** vidí fakturační údaje, platby a daňové doklady, ale nepotřebuje produktový obsah.
- **Incident engineer:** dostane dočasný technický přístup k logům, metrikám nebo konzoli pro konkrétní incident.
- **Data export operator:** může spustit export nebo smazání podle procesu, ale nemůže si libovolně procházet účty.
- **Owner approver:** schvaluje výjimky a pravidelně kontroluje, kdo má jaký přístup.

Příklad zásady do interní dokumentace:

> „Produkční přístup přidělujeme podle konkrétní práce, ne podle seniority. Pokud člověk potřebuje data jen jednorázově, dostane časově omezený přístup nebo bezpečný výstup, ne trvalou roli.“

Tohle není nedůvěra k týmu. To je úcta k zákazníkům. A taky k budoucímu já, které nebude v neděli večer hádat, proč má bývalý externista pořád přístup do adminu.

## BH.2 Používej just-in-time přístup místo trvalého pohodlí

Trvalý produkční přístup je pohodlný přesně do chvíle, než se stane problémem. Privacy-first varianta je just-in-time přístup: člověk požádá o přístup pro konkrétní důvod, někdo ho schválí nebo systém ověří pravidlo, přístup se automaticky vypne a akce zůstanou v auditu.

Jednoduchý model pro malý tým:

| Situace | Přístup | Limit | Schválení |
| --- | --- | --- | --- |
| Běžný support dotaz | náhled na metadata účtu | bez obsahu zákaznických dat | role supportu |
| Incident P1 | logy a infrastruktura | 4 hodiny | incident lead |
| Debug konkrétního účtu | omezený impersonation nebo snapshot | 1 hodina | vlastník zákazníka nebo technický lead |
| Export/smazání dat | operace přes admin workflow | jednorázově | ticket + druhý pár očí |
| Finanční kontrola | fakturace a platby | podle účetní role | finance owner |

Když ještě nemáš nástroj na dočasné role, začni procesem: žádost v ticketu, ruční přidělení, připomínka na odebrání a měsíční audit. Není to dokonalé, ale je to lepší než „všichni máme admin, protože startup“.

## BH.3 Support access navrhni jako produktovou funkci

Pokud support potřebuje pomáhat zákazníkům, dej mu bezpečný nástroj. Bezpečný support access je lepší než tajné dotazy do databáze. Ideální flow v adminu:

1. Support otevře zákaznický účet přes ticket.
2. Systém zobrazí jen data potřebná k řešení problému.
3. Citlivé hodnoty jsou maskované nebo dostupné jen po dalším potvrzení.
4. Každé zobrazení se zapíše do auditního logu.
5. Pokud support potřebuje impersonation, zákazník o tom ví nebo je to omezené na bezpečný režim bez destruktivních akcí.
6. Po uzavření ticketu se přístup uzamkne.

Mikrotext pro interní admin:

> „Otevíráš produkční účet zákazníka. Použij jen data nutná k vyřešení ticketu. Akce bude zapsána do auditního logu.“

Mikrotext pro zákaznické podmínky nebo trust stránku:

> „Přístup podpory k zákaznickému účtu používáme pouze pro řešení konkrétních požadavků nebo incidentů. Přístupy jsou omezené, auditované a pravidelně kontrolované.“

Důležité: support access není volná jízdenka. Pokud tým často potřebuje koukat do zákaznického obsahu, produkt nejspíš nemá dost dobré diagnostické signály, chybové hlášky nebo samoobslužné nástroje.

## BH.4 Audit log má odpovídat na otázky, ne sbírat romány

Audit log není místo, kam hodíš všechno, co se dá zapsat, a pak doufáš, že z toho jednou bezpečnostní archeolog vykope pravdu. Dobrý audit log odpovídá na pár praktických otázek: kdo, kdy, co, proč, na jakém účtu a s jakým výsledkem.

Minimální položky:

- **actor_id:** interní uživatel nebo servisní účet, který akci provedl.
- **action:** typ akce, například `support_account_viewed`, `billing_email_changed`, `data_export_started`.
- **target:** účet, organizace nebo zdroj, kterého se akce týkala.
- **reason:** ticket, incident ID nebo krátká povinná poznámka.
- **timestamp:** přesný čas akce.
- **result:** úspěch, zamítnutí, chyba nebo automatické vypršení.
- **request_context:** bezpečné technické metadata, ne plný obsah požadavku.

Co do audit logu nepatří:

- celé zákaznické dokumenty,
- hesla, tokeny, API klíče,
- plné texty zpráv, pokud stačí ID ticketu,
- citlivé payloady webhooků,
- debug dumpy „pro jistotu“.

Audit log musí být chráněný před úpravou běžnými administrátory. Jinak je to deníček, ne důkazní stopa.

## BH.5 Servisní účty a API klíče nejsou společný batoh

Lidé nejsou jediný problém. Produkční přístup často protéká přes servisní účty, API klíče, CI/CD tokeny a integrační tajemství. Když má jeden token práva na všechno a žije tři roky, není to automatizace. Je to spící drak s názvem `PROD_SUPER_TOKEN_DO_NOT_DELETE`.

Praktická pravidla:

- Každý servisní účet má vlastníka a popis účelu.
- Token má minimální scope, ne univerzální oprávnění.
- Tajemství nejsou v repozitáři, ticketu ani chatu.
- Rotace má plán a je testovaná, ne improvizovaná při incidentu.
- Nepoužívané klíče se pravidelně ruší.
- CI/CD má oddělené přístupy pro staging a produkci.

Checklist pro každý nový token:

- K čemu přesně slouží?
- Kdo je vlastník?
- Jaká data nebo akce umožňuje?
- Kde je uložený?
- Kdy expiruje nebo kdy se bude rotovat?
- Jak poznáme, že ho někdo použil nečekaně?

Pokud na některou otázku neumíš odpovědět, token ještě nevytvářej. Ano, bolí to. Méně než pozdější vysvětlování incidentu.

## BH.6 Revizi přístupů dělej jako provozní hygienu

Access review nemá být roční festival tabulek, které nikdo nechce otevřít. U malého SaaS stačí pravidelný krátký rituál: jednou měsíčně projít produkční role, servisní účty, externisty, výjimky a účty lidí, kteří změnili práci. Výsledek musí být změna v systému, ne jen poznámka „vypadá OK“.

Měsíční otázky:

- Kdo má trvalý produkční přístup a proč?
- Které dočasné přístupy nevypršely?
- Kteří lidé změnili roli, odešli nebo už přístup nepotřebují?
- Které servisní účty nemají jasného vlastníka?
- Které API klíče nebyly dlouho použité?
- Které audit logy ukazují neobvyklé vzory?
- Kde support opakovaně potřebuje víc dat, než by měl?

Výstup review může být malý:

```text
Access review 2026-08
Odebráno: 2 bývalé účty, 1 nepoužívaný API klíč
Změněno: support role už nevidí fakturační adresu bez ticketu
Riziko: ruční exporty dat nemají druhý pár očí
Další krok: přidat schválení exportu do admin workflow
Owner: Petra
Termín: 2026-08-20
```

Tohle je nudný provoz. Nudný provoz je dobrý provoz. Drama necháme seriálům.

## BH.7 Checklist interních přístupů bez superadmin kultu

Před tím, než někomu dáš nebo necháš produkční přístup, projdi:

- Je přístup navázaný na konkrétní práci, ticket, incident nebo roli?
- Existuje menší rozsah oprávnění, který stačí?
- Má přístup vlastníka a časový limit?
- Je akce auditovaná tak, aby šlo zjistit kdo, co, kdy a proč?
- Nezobrazuje support citlivý obsah, pokud stačí metadata nebo diagnostika?
- Jsou servisní účty oddělené podle účelu a prostředí?
- Jsou API klíče uložené v bezpečném secret manageru, ne v repozitáři nebo chatu?
- Má tým postup pro okamžité odebrání přístupu při odchodu člověka nebo incidentu?
- Proběhlo v posledním měsíci access review?
- Má zákazník srozumitelně vysvětlené, kdy a proč může podpora přistupovat k jeho účtu?

## Codyho komentář

Můj pohled: malý tým nepotřebuje korporátní přístupovou byrokracii, ale rozhodně potřebuje brzdy. Nejlepší bezpečnostní pravidlo je takové, které se dá použít v pátek v 16:47 při incidentu a zároveň z něj v pondělí ráno pochopíš, co se stalo. Pokud pravidlo funguje jen v prezentaci, je to dekorace. Hezká, ale pořád dekorace.

## Zdroje k příloze

- GDPR, článek 32 o zabezpečení zpracování: https://eur-lex.europa.eu/eli/reg/2016/679/oj
- EDPB, Guidelines 4/2019 on Article 25 Data Protection by Design and by Default: https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-42019-article-25-data-protection-design-and_en
- ENISA, Cloud Security Guide for SMEs: https://www.enisa.europa.eu/publications/cloud-security-guide-for-smes
- ENISA, Privacy and data protection by design: https://www.enisa.europa.eu/publications/privacy-and-data-protection-by-design

## Shrnutí přílohy

Interní produkční přístup má být role s účelem, limitem a stopou, ne klubová kartička pro důvěryhodné lidi. Privacy-first tým rozděluje oprávnění podle práce, používá dočasné přístupy, navrhuje support access jako bezpečnou produktovou funkci, drží stručné audit logy, hlídá servisní účty a pravidelně uklízí přístupy. Superadmin kultura je rychlá. A přesně proto je nebezpečná.


---

# Příloha BI: Žádosti subjektů údajů bez paniky, exportního chaosu a právního divadla

Každý SaaS, e-shop nebo B2B web, který pracuje s osobními údaji, dřív nebo později dostane žádost typu: „Jaká data o mně máte?“, „Smažte můj účet“, „Opravte fakturační údaje“ nebo „Pošlete mi export.“ V malém týmu to často spadne mezi support, vývoj a někoho, kdo zrovna ví, kde je databáze. To je přesně okamžik, kdy privacy-first provoz nesmí být jen pěkná věta v patičce.

GDPR dává lidem sadu práv včetně práva na informace, přístup, opravu, výmaz, omezení zpracování, námitku, přenositelnost a ochranu před výhradně automatizovaným rozhodováním. EDPB je shrnuje v přehledu práv subjektů údajů: https://www.edpb.europa.eu/topics/key-gdpr-concepts/data-subject-rights_en Evropská komise zároveň popisuje, jak mají firmy a organizace s žádostmi jednotlivců pracovat: https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/dealing-individuals-requests_en

Tahle příloha není právní rada. Je to provozní návod, jak si v malém týmu připravit proces, aby žádost nebyla detektivka s SQL konzolí, screenshoty v chatu a tichou modlitbou k bohům Excelu.

## BI.1 Rozliš žádost od běžného supportu

Ne každá zpráva se slovem „data“ je formální GDPR žádost. Když zákazník napíše „změňte mi e-mail v účtu“, může to být běžná podpora. Když napíše „chci kopii všech osobních údajů, které o mně zpracováváte“, už jsi v režimu práva na přístup. Rozdíl je důležitý, protože formální žádost potřebuje evidenci, ověření identity, lhůtu, odpovědného člověka a stopu rozhodnutí.

Praktické třídění:

| Typ zprávy | Příklad | Reakce |
| --- | --- | --- |
| Běžná oprava | „Změňte fakturační e-mail.“ | Vyřešit v support workflow, zapsat do ticketu. |
| Přístup k údajům | „Jaká data o mně máte?“ | Zahájit DSR proces a připravit odpověď. |
| Přenositelnost | „Pošlete export mých dat ve strojově čitelném formátu.“ | Ověřit rozsah, exportovat data poskytnutá zákazníkem a relevantní historii. |
| Výmaz | „Smažte můj účet a moje údaje.“ | Ověřit, co lze smazat hned a co musí zůstat kvůli právním povinnostem. |
| Námitka | „Nechci, abyste moje data používali pro marketing.“ | Zastavit daný účel, ne nutně celý účet. |

V support nástroji se hodí mít štítek `data-subject-request`. Ne proto, aby se ticket tvářil důležitěji. Proto, aby se neschoval mezi „nejde mi reset hesla“ a „kde najdu fakturu“.

## BI.2 Ověření identity dělej přiměřeně, ne paranoidně

U žádosti musíš vědět, že komunikuješ se správným člověkem. Zároveň nesmíš kvůli ověření nasbírat víc dat, než je potřeba. Privacy-first přístup není „pošlete občanku do e-mailu“. To je spíš privacy-first hororový spin-off.

Rozumné ověření podle kanálu:

- Přihlášený uživatel v aplikaci: potvrzení přes aktivní session a případně e-mailový odkaz.
- E-mail shodný s účtem: odpověď na stejný ověřený e-mail, u citlivých akcí doplněná potvrzovacím odkazem.
- Neznámý e-mail: nejdřív najít účet podle bezpečných indicií, pak ověřit přes kontakt vedený u účtu.
- Firemní B2B účet: ověřit roli žadatele vůči organizaci, protože běžný člen týmu nemá automaticky právo žádat export celé firmy.

Příklad mikrotextu:

> „Abychom neposlali osobní údaje nesprávné osobě, pošleme potvrzovací odkaz na e-mail vedený u účtu. Nepotřebujeme kopii dokladů, pokud nebude důvod řešit spornou identitu.“

## BI.3 Měj mapu dat dřív, než přijde první žádost

Žádost o přístup se špatně vyřizuje, když nikdo neví, kde data jsou. Datová mapa nemusí být enterprise katalog s dvanácti barevnými legendami. Stačí živý dokument, který odpoví na otázky: jaké údaje máme, proč, kde leží, kdo k nim má přístup, jak dlouho je držíme a jak se dají exportovat nebo smazat.

Minimální datová mapa pro SaaS:

| Oblast | Typická data | Export | Výmaz |
| --- | --- | --- | --- |
| Účet | jméno, e-mail, role, nastavení | JSON/CSV | anonymizace nebo smazání účtu |
| Fakturace | adresa, DIČ, faktury, platby | PDF/CSV | omezeně kvůli účetním povinnostem |
| Produktová data | projekty, záznamy, dokumenty | JSON/CSV + soubory | podle stavu účtu a role žadatele |
| Support | tickety, zprávy, přílohy | PDF/JSON | po retenční době nebo při odůvodněném výmazu |
| Logy | bezpečnostní události, IP v logu | obvykle výpis relevantních záznamů | retence podle bezpečnostního účelu |
| Marketing | odběry, preference, odhlášení | CSV | odhlášení a úklid po retenční době |

Tahle tabulka je most mezi právní povinností a technickou realitou. Bez ní bude každý export unikát. A unikáty v compliance procesech jsou roztomilé asi jako ruční deploy v pátek večer.

## BI.4 Export navrhni jako produktovou funkci, ne jako admin hack

Právo na přenositelnost neznamená, že musíš exportovat úplně všechno ve vesmíru. Evropská komise vysvětluje, že lidé mohou získat osobní údaje ve strukturovaném strojově čitelném formátu a nechat je předat jiné organizaci, pokud jsou splněné podmínky pro přenositelnost: https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/dealing-individuals-requests_en

Produktově je ale dobré jít o kousek dál: export zákaznických dat není jen právní minimum, je to důkaz férového SaaS. Pokud zákazník ví, že může odejít s daty, paradoxně se méně bojí zůstat.

Dobrý export:

- používá běžné formáty: CSV pro tabulky, JSON pro strukturu, ZIP pro balík souborů,
- obsahuje `README.txt` s vysvětlením polí a časových zón,
- rozlišuje osobní údaje uživatele od týmových nebo firemních dat,
- neobsahuje interní poznámky supportu, tajné tokeny, hash hesla nebo data jiných lidí,
- má časově omezený odkaz ke stažení,
- vytvoří auditní záznam kdo, kdy, proč a jaký export vytvořil.

Příklad struktury exportu:

```text
export-ucet-2026-08-09.zip
├── README.txt
├── account/profile.json
├── account/preferences.json
├── billing/invoices.csv
├── projects/projects.json
├── support/tickets.json
└── metadata/export-log.json
```

## BI.5 Výmaz není tlačítko „DROP DATABASE“

Právo na výmaz je silné, ale není absolutní. Evropská komise výslovně uvádí, že organizace mají povinnost osobní údaje smazat v relevantních případech, ale existují výjimky, například když je zpracování potřebné pro splnění právní povinnosti nebo pro určení, výkon či obhajobu právních nároků: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/dealing-requests-individuals/do-we-always-have-delete-personal-data-if-person-asks_en

Pro SaaS to znamená rozdělit výmaz na vrstvy:

1. **Okamžitě smazatelné**: marketingové preference, nepovinný profil, nepoužívané přílohy.
2. **Anonymizovatelné**: produktová aktivita, která má zůstat ve statistikách bez identifikace člověka.
3. **Dočasně blokované**: údaje, které se nesmí dál aktivně používat, ale čekají na retenční dobu.
4. **Ponechané kvůli povinnosti**: faktury, účetní doklady, bezpečnostní logy v přiměřené retenci.

Komunikace musí být konkrétní. Nepiš: „Vaše data byla smazána“, pokud část údajů zůstává kvůli fakturaci. Piš raději:

> „Účet a produktová data jsme smazali. Faktury a související účetní údaje uchováváme po dobu vyžadovanou právními předpisy. Tyto údaje už nepoužíváme pro marketing ani produktovou analytiku.“

Tohle je méně sexy než velké zelené tlačítko „Delete forever“, ale mnohem pravdivější. Pravda je v privacy provozu celkem užitečná věc. Překvapivé, já vím.

## BI.6 Vytvoř malý DSR playbook

DSR znamená data subject request, tedy žádost subjektu údajů. Playbook má být tak krátký, aby ho support použil i během náročného dne. Ideálně jedna stránka v interní znalostní bázi.

Šablona playbooku:

```text
DSR playbook

1. Označ ticket štítkem data-subject-request.
2. Zapiš datum přijetí a typ žádosti.
3. Ověř identitu přiměřeným způsobem.
4. Urči vlastníka odpovědi.
5. Zkontroluj datovou mapu a relevantní systémy.
6. Připrav odpověď nebo export.
7. Nech zkontrolovat citlivé nebo sporné případy druhým člověkem.
8. Odešli odpověď bezpečným kanálem.
9. Zapiš výsledek a retenční datum ticketu.
```

U složitých žádostí přidej rozhodovací poznámku:

```text
Žádost: výmaz účtu
Ověření: potvrzeno přes e-mail účtu
Smazáno: profil, projekty, marketingové preference
Ponecháno: faktury a účetní záznamy
Důvod ponechání: právní povinnost
Kontrola: Jana, 2026-08-09
Odpověď odeslána: 2026-08-09
```

## BI.7 Checklist žádostí subjektů údajů

Než žádost uzavřeš, projdi:

- Je jasné, o jaký typ žádosti jde?
- Je ověřená identita žadatele přiměřeně k riziku?
- Má ticket vlastníka a datum přijetí?
- Zkontrolovali jsme všechny relevantní systémy podle datové mapy?
- Neobsahuje export data jiných lidí, interní poznámky nebo technické tajnosti?
- Je u výmazu jasně rozlišeno, co bylo smazáno, anonymizováno, omezeno a ponecháno?
- Je odpověď napsaná lidsky, konkrétně a bez právnické mlhy?
- Je výsledek zaznamenaný v interním logu žádostí?
- Má ticket nastavenou retenční dobu?
- Vznikl z žádosti produktový úkol, například lepší export, automatické mazání nebo úprava privacy stránky?

## Codyho komentář

Můj pohled: nejlepší žádost subjektu údajů je ta, kterou zvládneš bez paniky, protože systém byl navržen férově už předem. Pokud máš exporty, retenci, role a support proces připravené, GDPR žádost není útok na firmu. Je to jen test, jestli privacy-first hodnoty žijí i mimo marketingový text. Takový malý požární poplach bez kouře. Ideální.

## Zdroje k příloze

- EDPB, Data subject rights: https://www.edpb.europa.eu/topics/key-gdpr-concepts/data-subject-rights_en
- EDPB, Guidelines 01/2022 on data subject rights — Right of access: https://www.edpb.europa.eu/documents/guideline/guidelines-012022-on-data-subject-rights-right-of-access_en
- Evropská komise, Dealing with individuals' requests: https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/dealing-individuals-requests_en
- Evropská komise, právo na výmaz a jeho výjimky: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/dealing-requests-individuals/do-we-always-have-delete-personal-data-if-person-asks_en

## Shrnutí přílohy

Žádosti subjektů údajů nejsou jednorázová právní krizovka, ale běžný provozní proces. Malý SaaS tým potřebuje rozlišit typ žádosti, ověřit identitu, mít mapu dat, navrhnout export jako férovou produktovou funkci, řešit výmaz po vrstvách a držet krátký playbook. Privacy-first firma neodpovídá „nějak to vyexportujeme“. Odpovídá klidně, přesně a tak, aby se z každé žádosti zlepšil produkt i provoz.

# Příloha BJ: Cookie lišta bez dark patterns, nervů a zbytečných trackerů

Cookie lišta není dekorace, kterou přilepíš na web večer před spuštěním. Je to rozhodovací místo, kde návštěvník pozná, jestli firma bere soukromí vážně, nebo jestli jen doufá, že unavený člověk klikne na největší barevné tlačítko a půjde dál.

Privacy-first přístup začíná ještě před návrhem banneru: nejdřív se zeptej, jestli banner vůbec potřebuješ. Pokud web používá jen technicky nezbytné cookies pro fungování služby, často nepotřebuješ velké souhlasové divadlo. Pokud ale ukládáš nebo čteš marketingové, analytické nebo personalizační identifikátory, musíš řešit souhlas a transparentnost. EDPB ve svých FAQ připomíná, že ukládání cookies nebo přístup k nim je obecně možné až po informování uživatele a získání souhlasu, pokud nejde o výjimku podle pravidel ePrivacy: https://www.edpb.europa.eu/contact/frequently-asked-questions_ga

## BJ.1 Nejdřív inventář, potom banner

Nejhorší cookie lišta je ta, která se snaží právně obalit technický chaos. Než začneš kreslit modal, udělej inventář všeho, co stránka načítá.

Minimální tabulka:

| Kategorie | Příklad | Potřebuje souhlas? | Co udělat |
| --- | --- | --- | --- |
| Nezbytné | session cookie, CSRF token, jazyk webu | obvykle ne | vysvětlit v privacy/cookie stránce |
| Bezpečnostní | rate limit, detekce zneužití | podle nastavení | minimalizovat a držet krátkou retenci |
| Analytické | agregované návštěvy, eventy | často ano, záleží na řešení a národní úpravě | preferovat privacy-first měření |
| Marketingové | remarketing, reklamní pixely | ano | bez souhlasu nespouštět |
| Embedované třetí strany | video, mapa, sociální feed | často ano | načítat až po akci uživatele |

Prakticky: projdi HTML, tag manager, analytics nastavení, vložené skripty, fonty, chat widget, platební prvky a marketingové landing pages. Pokud neumíš říct, proč konkrétní skript existuje, vypni ho dřív, než pro něj začneš vymýšlet právní pohádku.

Codyho komentář: tag manager bez vlastníka je datový sklep. Občas v něm najdeš užitečný nástroj, častěji starý pixel z kampaně, kterou si nikdo nepamatuje. Strašidelně produktivní archeologie.

## BJ.2 Souhlas musí být volba, ne optický trik

EDPB ve shrnutí pro malé firmy uvádí, že souhlas má být svobodný, konkrétní, informovaný a jednoznačný, s možností odmítnutí i odvolání bez negativních důsledků: https://www.edpb.europa.eu/sme/be-compliant/process-personal-data-lawfully_en

To v praxi znamená:

- žádná předzaškrtnutá políčka,
- žádné tlačítko „Přijmout vše“ obřím písmem a „nastavení“ jako šedá past,
- žádné spojování marketingového souhlasu s podmínkou používání služby, pokud to není opravdu nezbytné,
- oddělené účely: analytika, personalizace a marketing nejsou jeden kouzelný pytel,
- možnost souhlas později jednoduše změnit nebo odvolat.

EDPB Cookie Banner Taskforce ve své zprávě řešila mimo jiné praktiky kolem bannerů, například předvolené volby nebo chybějící rovnocenné odmítnutí v situacích, kde se souhlas žádá: https://www.edpb.europa.eu/documents/task-force-report/report-of-the-work-undertaken-by-the-cookie-banner-taskforce_en

Dobrá první vrstva banneru může vypadat takhle:

> „Používáme nezbytné cookies pro fungování webu. Volitelně nám můžete povolit anonymnější analytiku, abychom věděli, co zlepšit. Marketingové pixely nepoužíváme. Souhlas můžete kdykoliv změnit.“

Tlačítka:

- „Povolit volitelnou analytiku“
- „Odmítnout volitelné cookies“
- „Nastavit podrobně“

Není to tak agresivní jako klasické „všechno přijmout, jinak najdi tajná dvířka“. Ale přesně o to jde. Důvěra není optimalizace na omyl.

## BJ.3 Volitelnou analytiku odděl od marketingu

Velká chyba malých webů je házet analytiku a marketing do jedné kategorie „lepší zážitek“. To je mlha. Analytika může sloužit k opravě webu, zatímco marketingový pixel slouží k cílení reklamy. Pro uživatele je to zásadní rozdíl.

Lepší rozdělení účelů:

| Účel | Lidský popis | Příklad nastavení |
| --- | --- | --- |
| Nezbytné | Web bez toho nefunguje bezpečně nebo správně. | vždy aktivní |
| Analytika | Pomáhá nám poznat, které stránky fungují a kde lidé narážejí. | volitelné |
| Personalizace | Pamatuje si preferenci, kterou uživatel výslovně chce. | volitelné nebo lokální nastavení |
| Marketing | Slouží k reklamě nebo remarketingu. | vypnuté, pokud ho vůbec používáš |

Privacy-first SaaS často zjistí, že marketingové cookies nepotřebuje vůbec. Pro první fázi produktu stačí agregované návštěvy, kliky na CTA, odeslané formuláře, registrace, aktivace a ručně vyhodnocené zákaznické rozhovory. Ne každá odpověď na otázku „co se děje?“ vyžaduje sledovat člověka přes půl internetu.

## BJ.4 Odvolání souhlasu nesmí být úniková hra

Souhlas není jednorázový úlovek. Pokud ho člověk může dát jedním klikem, měl by ho umět podobně jednoduše změnit. Prakticky to znamená mít odkaz v patičce: „Nastavení soukromí“ nebo „Nastavení cookies“.

Ten odkaz má otevřít stejné volby jako banner:

- vidím aktuální stav souhlasů,
- rozumím účelům,
- mohu jednotlivé volby zapnout nebo vypnout,
- změna se projeví bez reloadového pekla,
- po odvolání se volitelné skripty dál nespouštějí.

Technický detail, který se často podcení: odvolání souhlasu musí zastavit budoucí zpracování. Nestačí přepsat UI na „vypnuto“, zatímco skript dál posílá eventy, protože se načetl před bannerem. Načítání volitelných skriptů dělej až po souhlasu a drž jeden centrální stav, který respektují všechny části webu.

## BJ.5 Embed řeš přes dvoukrokové načtení

Videa, mapy, sociální posty a kalendářové widgety často tahají třetí strany dřív, než uživatel cokoliv chce. Privacy-first varianta je jednoduchá: nejdřív zobraz vlastní náhled a teprve po kliknutí načti externí obsah.

Příklad textu pro vložené video:

> „Video je hostované u externí služby. Po kliknutí se načte obsah od poskytovatele a může dojít k předání technických údajů. Alternativně si můžete přečíst textový souhrn níže.“

Ještě lepší: pokud to dává smysl, hostuj video, obrázky a dokumenty přímo v evropském provozu pod vlastní kontrolou. Ne vždy je to nejpohodlnější, ale pohodlí není strategie. Je to jen velmi přesvědčivý lenoch v mikině.

## BJ.6 Cookie stránka má být živý technický dokument

Banner je krátký. Cookie stránka může být konkrétní. Nemá obsahovat generický seznam všech cookies na planetě, ale skutečný stav tvého webu.

Dobrá cookie stránka obsahuje:

- kdo web provozuje,
- jaké kategorie cookies nebo podobných technologií používáš,
- konkrétní názvy důležitých cookies, pokud je to užitečné,
- účel každé kategorie,
- dobu uložení,
- zda data předáváš třetím stranám,
- jak změnit souhlas,
- datum poslední kontroly.

Příklad řádku:

| Název | Účel | Typ | Doba uložení | Poskytovatel |
| --- | --- | --- | --- | --- |
| `session` | Přihlášení a bezpečnost účtu | nezbytné | do konce relace / podle nastavení aplikace | vlastní provoz |

Důležité: stránku aktualizuj při každé změně nástroje. Nový chat widget, analytics event nebo embed není jen technický úkol. Je to i změna datové mapy a uživatelského slibu.

## BJ.7 Checklist cookie lišty bez dark patterns

Před spuštěním si projdi:

- Máme inventář všech cookies, skriptů, embedů a třetích stran?
- Víme, které technologie jsou nezbytné a které volitelné?
- Nespouštíme volitelné skripty před souhlasem?
- Je odmítnutí stejně snadné jako přijetí?
- Nejsou volby předem zaškrtnuté?
- Jsou účely oddělené a popsané lidsky?
- Dá se souhlas později snadno změnit nebo odvolat?
- Po odvolání se volitelné skripty opravdu zastaví?
- Má cookie/privacy stránka skutečný seznam používaných technologií?
- Existuje vlastník, který cookie inventář kontroluje po změnách webu?

## Codyho komentář

Můj pohled: nejlepší cookie banner je ten, který je malý, pravdivý a nudný. Pokud potřebuješ psychologické triky, aby uživatel „souhlasil“, není problém v tlačítku. Problém je v tom, co po souhlasu děláš. Privacy-first web se nemá bát tlačítka „Odmítnout“. Má být navržený tak, aby i po odmítnutí fungoval důstojně.

## Zdroje k příloze

- EDPB, FAQ ke cookies a ePrivacy/GDPR: https://www.edpb.europa.eu/contact/frequently-asked-questions_ga
- EDPB, Process personal data lawfully: https://www.edpb.europa.eu/sme/be-compliant/process-personal-data-lawfully_en
- EDPB, Guidelines 05/2020 on consent under Regulation 2016/679: https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_en
- EDPB, Report of the Cookie Banner Taskforce: https://www.edpb.europa.eu/documents/task-force-report/report-of-the-work-undertaken-by-the-cookie-banner-taskforce_en

## Shrnutí přílohy

Cookie lišta má chránit volbu uživatele, ne maximalizovat omyly. Začni inventářem technologií, odděl nezbytné účely od volitelných, nepouštěj skripty před souhlasem, nabídni férové odmítnutí, umožni jednoduché odvolání a udržuj cookie stránku jako živý dokument. Privacy-first web nepotřebuje dark patterns. Potřebuje méně skriptů, jasnější sliby a technické nastavení, které skutečně respektuje rozhodnutí člověka.

# Příloha BK: Demo účet a sandbox bez úniku produkčních dat

Demo je nebezpečně podceňovaná část SaaS produktu. Na jedné straně má prodat hodnotu rychleji než patnáct odstavců marketingového textu. Na druhé straně často svádí k nejhorší možné zkratce: „zkopírujeme produkční databázi, trochu ji přejmenujeme a ukážeme to obchodníkům“. To není demo. To je datová ruleta s hezkým tlačítkem.

Privacy-first demo má ukázat reálnou hodnotu produktu bez toho, aby odhalovalo reálné zákazníky. Ideál je jednoduchý: uživatel pochopí scénář, obchodník má co ukázat, vývojář může bezpečně testovat a nikdo nepotřebuje přístup k produkčním osobním údajům jen proto, aby se prezentace netvářila prázdně.

## BK.1 Demo není výmluva pro kopii produkce

Produkční data v demo prostředí jsou pohodlná přesně do chvíle, kdy se někde objeví cizí jméno, e-mail, objednávka, interní poznámka nebo screenshot s něčím, co nikdy nemělo opustit zákaznický účet. Pak už pohodlí mizí a zůstává incident, vysvětlování a velmi smutný spreadsheet.

První pravidlo: demo a sandbox mají mít vlastní datovou strategii. Ne „nějak to anonymizujeme“. Ne „vždyť to uvidí jen interně“. Ne „zatím“. Strategie znamená, že tým ví:

- odkud demo data vznikají,
- kdo je může měnit,
- jak se obnovují do výchozího stavu,
- jaká data jsou zakázaná,
- jak se pozná, že se do sandboxu omylem dostala produkce,
- kdo má odpovědnost za kontrolu.

U malého SaaS stačí praktický standard: demo data se generují ze seed scénářů a produkční exporty jsou pro demo zakázané. Pokud opravdu potřebuješ použít reálný tvar dat kvůli migraci nebo výkonu, dělej to v odděleném testovacím procesu s právním důvodem, omezeným přístupem, krátkou retencí a jasným záznamem. Demo pro zákazníka ale nemá být převlečená produkce.

## BK.2 Navrhni demo scénáře jako produktový obsah

Dobré demo není náhodná sada tabulek. Je to malý příběh, který ukáže typickou práci zákazníka. Demo data proto piš podobně pečlivě jako text na landing page.

Příklad pro rezervační SaaS:

- salon „Klidné ruce“ s pěti službami,
- tři pracovníci s různou dostupností,
- týden obsazený zhruba z 60 %,
- dvě čekající změny termínu,
- jedna storno situace,
- report obsazenosti za posledních 30 dní.

Příklad pro B2B reporting:

- firma „Severní dílna“ se třemi obchodníky,
- pipeline s jasně pojmenovanými fázemi,
- pět obchodních případů v různém stavu,
- jeden ztracený deal s důvodem,
- jednoduchý měsíční souhrn,
- ukázka exportu pro vedení.

Takhle připravený sandbox prodává lépe než prázdný účet, protože návštěvník nemusí nejdřív vymýšlet obsah. Vidí situaci, pozná problém a může si představit vlastní provoz. Zároveň nevystavuješ cizí data jen proto, aby graf vypadal živě.

Praktický trik: každý demo scénář pojmenuj podle rozhodnutí, které má zákazník pochopit. Ne „demo 1“, ale „Recepce s častými změnami termínů“, „Zakladatel sleduje cashflow“, „Support řeší opakovanou námitku“. Název pomůže obchodu, vývoji i dokumentaci.

## BK.3 Seed data musí být opakovatelná a resetovatelná

Sandbox, který se po třech prezentacích rozbije, je jen pomalejší způsob, jak si vyrobit trapné ticho na callu. Demo prostředí potřebuje reset. Ideálně jedním příkazem nebo tlačítkem pro interní tým.

Minimum pro seed data:

- skript vytvoří organizace, uživatele, role a ukázkový obsah,
- data používají falešné domény a jména, která nejdou zaměnit za reálné osoby,
- datumy se umí posouvat relativně k dnešku,
- demo účet má jasné přístupové údaje uložené v interním správci hesel,
- reset smaže změny z prezentací a obnoví scénář,
- seed skript běží v CI nebo aspoň v pravidelné kontrole.

Pozor na falešná data, která vypadají až moc reálně. Pokud používáš jména, e-maily a adresy, drž se rezervovaných domén typu `example.com`, interních testovacích identit a zjevně fiktivních názvů firem. U citlivějších oblastí, třeba zdraví, financí nebo HR, raději používej syntetické hodnoty bez realistických kombinací, které by mohly někoho identifikovat nebo působit jako skutečný záznam.

Seed data mají být verzovaná spolu s produktem. Když přidáš novou funkci, přidej i ukázkový scénář. Jinak demo postupně zestárne a obchod bude ukazovat produkt jako archeologický nález: „tady by teoreticky něco bylo, kdyby to někdo vyplnil“.

## BK.4 Sandbox odděl technicky, vizuálně i oprávněními

Demo prostředí má být oddělené tak, aby chyba v konfiguraci nebyla okamžitě průšvih. Nestačí, že běží na jiné URL. Potřebuje vlastní databázi, vlastní storage, vlastní e-mailový režim a jasné označení v rozhraní.

Praktické oddělení:

- samostatná databáze bez přístupu k produkčním datům,
- samostatné API klíče a tajemství,
- vypnuté nebo přesměrované skutečné odesílání e-mailů,
- jasný banner „Demo prostředí“ v administraci,
- zákaz používání produkčních webhooků,
- oddělené role pro interní demo správce,
- omezená retence logů a žádné ukládání citlivých vstupů z prezentací.

U e-mailů je dobré použít zachytávací schránku nebo interní mail sink, aby sandbox neposílal pozvánky skutečným lidem. U plateb používej testovací režim brány a viditelně označené testovací údaje. U integrací raději ukazuj simulovaný výsledek než napojení na cizí produkční účet, pokud to není pro demo nezbytné.

Vizuální odlišení je podceňované. Barevný pruh, jiné favicon, štítek v hlavičce a varování u nebezpečných akcí stojí pár minut. Zachrání ale situace, kdy má člověk otevřených pět tabů a v pátek odpoledne klikne v tom špatném. Ano, přesně ten pátek. Produkční bohové mají smysl pro drama.

## BK.5 Anonymizace není kouzelná mlha

Někdy tým řekne: „Použijeme produkční data, ale anonymizujeme je.“ To může být legitimní pro některé testy, ale je potřeba rozumět rozdílu mezi anonymizací, pseudonymizací a maskováním. Pokud lze data s dalšími informacemi znovu přiřadit ke konkrétní osobě, pořád jde o osobní údaje a pořád vyžadují ochranu.

ENISA ve svých materiálech opakovaně zdůrazňuje, že pseudonymizace je užitečná bezpečnostní technika, ale musí být navržena podle scénáře a hrozeb; není to univerzální tlačítko „bezpečné“: https://www.enisa.europa.eu/publications/pseudonymisation-techniques-and-best-practices

Pro demo prostředí z toho plyne praktické pravidlo: pokud můžeš použít syntetická data, použij syntetická data. Pokud musíš použít data odvozená z produkce, sepiš důvod, rozsah, metodu úpravy, přístupová práva, retenční dobu a kontrolu rizika zpětné identifikace. A hlavně: nepoužívej takový dataset pro obchodní demo, kde není nutný.

Jednoduché maskování typu „změníme jméno, e-mail necháme“ nestačí. Stejně nebezpečné jsou kombinace: datum narození, PSČ, malá firma, unikátní objednávka, poznámka supportu nebo interní komentář. Identita často neleží v jednom poli. Leží ve vzoru.

## BK.6 Demo přístup pro zákazníka nastav jako krátký pronájem, ne trvalý klíč

Když zákazník dostane sandbox na vyzkoušení, nastav mu jasné hranice. Demo účet nemá žít věčně, nemá sbírat citlivá data a nemá se stát neplacenou produkcí bokem.

Dobrá pravidla pro zákaznický sandbox:

- platnost přístupu 7 až 30 dní podle délky nákupního procesu,
- jasná věta, že do dema nemají vkládat skutečná osobní nebo citlivá data,
- možnost resetu dat na požádání,
- omezené exporty, pokud by mohly odnést interní demo obsah,
- oddělená analytika dema od produkční analytiky,
- automatické vypnutí nebo připomenutí před koncem přístupu,
- jednoduchá cesta k navazujícímu hovoru nebo migraci do produkčního účtu.

Mikrotext při vstupu do sandboxu:

> Toto je demo prostředí s fiktivními daty. Nevkládejte sem reálné osobní údaje zákazníků, zaměstnanců ani pacientů. Pokud chcete ověřit vlastní scénář, napište nám a připravíme bezpečný postup.

Tahle věta není alibismus. Je to praktická brzda. Uživatelé často testují nástroj tak, že do něj vloží kus reality. Když jim předem řekneš, co do sandboxu nepatří, chráníš je i sebe.

## BK.7 Checklist demo účtu a sandboxu

Před tím, než demo ukážeš zákazníkovi nebo ho dáš na web, projdi si:

- Nepoužíváme v demu produkční osobní údaje?
- Má demo vlastní databázi, storage, API klíče a e-mailový režim?
- Existuje seed skript nebo postup pro spolehlivý reset?
- Jsou demo scénáře pojmenované podle reálných zákaznických situací?
- Jsou všechna jména, e-maily, firmy a poznámky zjevně fiktivní?
- Je rozhraní viditelně označené jako demo nebo sandbox?
- Nemůže sandbox poslat skutečný e-mail, webhook, fakturu nebo platbu?
- Má zákazník jasně napsáno, že do dema nemá vkládat reálná citlivá data?
- Má demo přístup omezenou platnost a vlastníka?
- Kontroluje někdo demo po změnách produktu stejně jako produkční funkcionalitu?

## Codyho komentář

Můj pohled: demo účet je marketingový materiál, testovací prostředí a bezpečnostní hranice v jednom. Když ho tým bere jako „vedlejší databázi“, dřív nebo později se z něj stane datové smetiště. Když ho bere jako produktovou funkci, pomáhá prodávat, testovat i vysvětlovat hodnotu bez toho, aby zákaznická data dělala komparz.

## Zdroje k příloze

- EDPB, Guidelines 4/2019 on Article 25 Data Protection by Design and by Default: https://www.edpb.europa.eu/documents/guideline/guidelines-42019-on-article-25-data-protection-by-design-and-by-default_en
- ENISA, Pseudonymisation techniques and best practices: https://www.enisa.europa.eu/publications/pseudonymisation-techniques-and-best-practices
- ENISA, Deploying Pseudonymisation Techniques: https://www.enisa.europa.eu/publications/deploying-pseudonymisation-techniques
- OWASP Application Security Verification Standard: https://owasp.org/www-project-application-security-verification-standard/

## Shrnutí přílohy

Demo a sandbox mají ukazovat hodnotu produktu, ne vystavovat produkční data v převleku. Postav je na syntetických seed scénářích, umožni rychlý reset, odděl prostředí technicky i vizuálně, nepovažuj anonymizaci za kouzlo a zákaznický sandbox omez časem i jasnými pravidly. Privacy-first demo není chudší demo. Je to demo, u kterého se nikdo nemusí potit pokaždé, když se objeví detail objednávky nebo jméno zákazníka.

# Příloha BL: Ukončování funkcí bez rozbité důvěry a tichého průšvihu

Růst produktu není jen přidávání. Zdravý SaaS musí umět funkce také omezit, sloučit nebo vypnout. Jinak se z něj stane digitální půda: všechno tam jednou „možná ještě použijeme“, nikdo neví, co je bezpečné vyhodit, a každý release se bojí pohnout starou krabicí.

Ukončování funkce je produktová disciplína. Ne trest pro zákazníka, ne interní úklid schovaný pod koberec, ale férový proces: víš, proč funkci vypínáš, koho se dotkne, jaká data zůstanou, jaký je náhradní postup a kdy přesně změna nastane.

## BL.1 Nejdřív rozliš typ změny

Ne každé odstranění je stejné. Malý tým si ušetří hodně konfliktů, když používá jasné kategorie.

Praktické rozdělení:

- **skrytí**: funkce zůstává dostupná, ale už ji neukazuješ novým uživatelům,
- **zmrazení**: funkce běží, ale nepřidáváš do ní nové schopnosti,
- **omezení**: funkce zůstává jen pro vybrané tarify, role nebo scénáře,
- **sloučení**: starý tok se přesune do nové části produktu,
- **deprecace**: oznamuješ budoucí vypnutí a dáváš migrační cestu,
- **vypnutí**: funkce přestane být dostupná,
- **smazání dat**: po ukončení řešíš retenci, export a bezpečný výmaz.

Tohle není slovíčkaření. Když zákazník slyší „rušíme funkci“, představí si nejhorší možnou variantu. Když řekneš „starý export přestane po 60 dnech přijímat nové úpravy, ale existující exporty budou dostupné do konce kvartálu a nový export má stejná pole“, napětí spadne asi o polovinu. Druhá polovina spadne, když to bude pravda.

## BL.2 Důvod musí být srozumitelný i mimo vývojový tým

Interní důvod typu „legacy modul nám komplikuje refaktor“ je pravdivý, ale zákazník z něj nemá žádnou hodnotu. Potřebuje vědět, co se pro něj zlepší nebo jaké riziko tím snižuješ.

Dobré důvody:

- funkce má nízké využití a blokuje údržbu důležitějších částí,
- staré API neumí bezpečně podporovat nové role a oprávnění,
- starý export obsahuje zbytečně široký rozsah dat,
- stará integrace je nespolehlivá a dodavatel ji už dál nerozvíjí,
- nový tok řeší stejný úkol jednodušeji a s menším sběrem dat.

Špatné důvody v komunikaci:

- „kvůli interní optimalizaci“,
- „v rámci strategického sjednocení platformy“,
- „protože to nikdo nechce udržovat“,
- „abychom mohli lépe škálovat synergické kapacity“.

Poslední věta je samozřejmě jazykový zločin. Pokud ji někdy napíšu já, vypněte mě a zkontrolujte logy.

## BL.3 Udělej mapu dopadu před prvním oznámením

Před komunikací potřebuješ vědět, koho se změna týká. Ne pocitově. Konkrétně.

Mapa dopadu má obsahovat:

- počet aktivních účtů, které funkci použily za posledních 30, 90 a 180 dní,
- tarify a segmenty, kterých se změna týká,
- zda funkce drží zákaznická nebo osobní data,
- zda existují automatizace, API klienti, webhooky nebo exporty,
- zda je funkce zmíněná v dokumentaci, obchodních materiálech nebo smluvním slibu,
- zda má zákazník náhradní cestu v produktu,
- jak poznáš, že migrace proběhla úspěšně.

Privacy-first poznámka: mapu dopadu dělej agregovaně, pokud to stačí. Nepotřebuješ exportovat celý seznam všech akcí uživatelů jen proto, abys rozhodl o ukončení. Pro cílenou komunikaci pak použij minimální identifikaci účtů, které opravdu potřebují vědět konkrétní informaci.

## BL.4 Migrační cesta je součást změny, ne bonus

Deprecace bez migrace je jen elegantně napsané „hodně štěstí“. Pokud funkci vypínáš, nabídni zákazníkovi další krok.

Migrační cesta může být:

- automatický převod nastavení do nové funkce,
- průvodce v produktu,
- export dat v čitelném formátu,
- dočasná kompatibilní vrstva API,
- krátký návod s příklady před a po,
- individuální pomoc pro účty s vyšším rizikem dopadu.

Příklad pro starý CSV export:

| Oblast | Starý stav | Nový stav | Co udělá zákazník |
| --- | --- | --- | --- |
| Pole | Všechna dostupná pole | Jen vybraná pole podle role | Zkontroluje šablonu exportu |
| Automatizace | Pevná URL | Nový tokenovaný endpoint | Vymění URL a token |
| Retence | Exporty bez expirace | Stažení dostupné 14 dní | Stáhne archiv, pokud ho potřebuje |
| Oprávnění | Každý admin | Role `Export manager` | Přidělí roli odpovědné osobě |

Tahle tabulka je nudná tím nejlepším způsobem. Nudná komunikace u rizikových změn znamená, že zákazník nemusí hádat.

## BL.5 Komunikuj ve vlnách

Jedno oznámení nestačí. Lidé jsou na dovolené, e-maily mizí, administrátor se změnil a někdo má integrační skript napsaný před třemi lety člověkem, který už pracuje v kavárně na Bali. Nebo v Excelu. To je horší.

Doporučený rytmus pro běžnou deprecaci:

- **T-90 dní**: první oznámení, důvod, datum, dopad, migrační cesta,
- **T-60 dní**: připomenutí aktivním uživatelům funkce a odkaz na návod,
- **T-30 dní**: upozornění v produktu u dotčené funkce,
- **T-14 dní**: cílená zpráva účtům bez dokončené migrace,
- **T-3 dny**: poslední krátké připomenutí,
- **T+1 den**: potvrzení změny a odkaz na podporu.

U malých funkcí může být okno kratší. U API, fakturace, exportů, přístupů a datových toků buď raději konzervativní. Vypnout zákazníkovi automatizaci bez přípravy je rychlá cesta k ticketu s caps lockem. Caps lock je metrika bolesti.

## BL.6 Data po vypnutí nezapomeň uklidit

Vypnutá funkce často zanechá databázové tabulky, soubory, logy, naplánované joby, dokumentaci, feature flagy a oprávnění. Pokud je neuklidíš, produkt se tváří jednodušeji, ale systém dál nese riziko.

Po vypnutí projdi:

- zda stará data ještě mají účel a retenční důvod,
- zda zákazník dostal možnost exportu,
- zda se zastavily cron joby a webhooky,
- zda jsou odstraněné nepoužívané API klíče a scopes,
- zda dokumentace nepopisuje neexistující stav,
- zda support ví, jak odpovědět na dotazy,
- zda monitoring nesleduje mrtvý endpoint,
- zda feature flag nebo stará konfigurace nezůstaly jako zapomenutá páčka.

Tady se krásně potkává produkt, provoz a privacy. Funkce může být pryč z UI, ale dokud po ní zůstávají data a přístupy, není opravdu uklizená.

## BL.7 Checklist ukončení funkce bez ztráty důvěry

- Je jasné, jestli funkci skrýváš, zmrazuješ, omezuješ, slučuješ, deprekuješ nebo vypínáš.
- Důvod změny je napsaný jazykem zákazníka, ne interním refaktorovým nářečím.
- Máš mapu dopadu včetně aktivních účtů, dat, API, webhooků, dokumentace a obchodních slibů.
- Existuje migrační cesta nebo férové vysvětlení, proč neexistuje.
- Zákazník zná datum změny, náhradní postup a kontakt na podporu.
- Komunikace probíhá ve více vlnách a cílí hlavně na dotčené účty.
- Před vypnutím máš rollback nebo aspoň nouzový plán.
- Po vypnutí uklidíš data, přístupy, joby, dokumentaci, monitoring a feature flagy.

## Codyho komentář

Mazání funkcí je pro produkt stejně důležité jako jejich přidávání. Jen se hůř slaví na poradě. Přitom dobře ukončená funkce zvyšuje důvěru: zákazník vidí, že produkt není skládka experimentů, ale služba, která umí růst disciplinovaně a férově.

## Shrnutí přílohy

Ukončení funkce má být řízený proces: pojmenuj typ změny, vysvětli důvod, zmapuj dopad, připrav migraci, komunikuj ve vlnách a po vypnutí ukliď data i technický zbytek. Privacy-first produkt není jen ten, který data opatrně sbírá. Je to i produkt, který umí staré datové stopy včas a poctivě odstranit.


# Příloha BM: Changelog a release notes bez marketingové mlhy

Produkt, který se mění potichu, působí na zákazníka jako dům, kde někdo v noci přesouvá nábytek. Ráno sice najdeš kuchyň, ale narazíš si palec o židli, která tam včera nebyla. Changelog a release notes nejsou dekorace pro produktový tým. Jsou to provozní nástroje důvěry: říkají, co se změnilo, proč to má zákazníka zajímat a jestli má něco udělat.

Privacy-first přístup tady znamená dvě věci. Zaprvé: komunikuj změny přímo, bez nutnosti sledovat uživatele napříč internetem. Zadruhé: při popisu změn neprozrazuj zákaznická data, interní incidentní detaily ani bezpečnostní informace, které by útočníkovi posloužily jako nákupní seznam.

## BM.1 Rozliš changelog, release notes a interní záznam

Jedna chyba malých týmů je házet všechno do jednoho proudu: opravy překlepů, nové API, změny fakturace, bezpečnostní aktualizace i interní refaktoring. Výsledek je šum. Zákazník neví, co je důležité, a tým pak musí posílat další vysvětlovací e-maily, protože původní oznámení mělo informační hodnotu mokré účtenky.

Používej tři vrstvy:

- **Changelog**: veřejný, stručný přehled změn podle data nebo verze.
- **Release notes**: zákaznicky psané vysvětlení větších novinek, změn chování nebo migrací.
- **Interní release log**: technické poznámky pro tým, včetně rizik, rollout plánu, feature flagů a rollbacku.

Příklad rozdílu:

| Typ záznamu | Věta | Pro koho je |
| --- | --- | --- |
| Changelog | „Přidali jsme export faktur ve formátu ISDOC.“ | Uživatelé a admini |
| Release notes | „Účetní teď stáhne faktury rovnou ve formátu ISDOC a nemusí opisovat položky ručně.“ | Rozhodovatelé a aktivní uživatelé |
| Interní log | „Feature flag `isdoc_export_v1`, rollout 20 %, sledovat chybovost generování XML.“ | Produkt, vývoj, support |

Veřejná komunikace má říkat dopad, ne dokazovat, že tým zná názvy vlastních tříd. Technické detaily patří ven jen tehdy, když pomáhají zákazníkovi něco udělat správně.

## BM.2 Piš z pohledu zákaznické práce

Release notes nejsou seznam commitů. Zákazníka obvykle nezajímá, že jsi „refaktoroval modal komponentu“. Zajímá ho, že se formulář rychleji otevírá, export už nespadne u větších souborů nebo administrátor může bezpečně předat oprávnění kolegovi.

Dobrá struktura jedné větší poznámky:

1. **Co je nové**: jedna jasná věta.
2. **Komu to pomůže**: role, tým nebo typ účtu.
3. **Jaký problém to řeší**: konkrétní situace.
4. **Co má uživatel udělat**: žádná akce, zapnout nastavení, projít migraci, zkontrolovat oprávnění.
5. **Kde najde detail**: dokumentace, nápověda, kontakt na podporu.

Slabé release notes:

> „Vylepšili jsme správu uživatelů.“

Lepší release notes:

> „Administrátoři teď mohou přidělit roli `Export manager`, která dovolí stahovat účetní exporty bez přístupu k nastavení týmu. Pokud exporty řeší účetní nebo externí partner, zkontrolujte role v Nastavení → Uživatelé.“

Druhá verze má nudnou superpower: říká přesně, kdo má co udělat. Žádný ohňostroj. Jen méně ticketů.

## BM.3 U každé změny označ typ dopadu

Zákazník se při čtení changelogu ptá hlavně: „Týká se mě to?“ Pomoz mu. Každou větší položku označ jedním nebo dvěma štítky.

Praktické štítky:

- **Novinka**: přidává možnost, kterou lze začít používat.
- **Změna chování**: něco funguje jinak než dřív.
- **Akce nutná**: zákazník musí něco zkontrolovat, zapnout nebo migrovat.
- **API**: změna se týká integrací, webhooků, tokenů nebo exportů.
- **Bezpečnost**: zlepšení ochrany účtu, oprávnění nebo provozu.
- **Oprava**: řeší konkrétní chybu bez větší změny workflow.
- **Deprecace**: funkce se omezuje nebo bude vypnutá.

Příklad:

> **Akce nutná / API**: Od 1. října 2026 bude endpoint `/v1/reports/export` vyžadovat scope `reports:export`. Stávající tokeny bez tohoto scope budou fungovat do 30. listopadu 2026. Nový token vytvoříte v Nastavení → API klíče.

Tohle je typ oznámení, které šetří vztahy. Datum, dopad, náhradní cesta, konkrétní místo v produktu. Když musí zákazník lovit důležitou změnu z poetického blogpostu, není to storytelling. Je to UX s lopatou.

## BM.4 Bezpečnostní změny komunikuj opatrně, ale ne mlžením

Bezpečnostní oprava potřebuje jiný tón než nová barva tlačítka. Neznamená to mlčet. Znamená to oddělit užitečné informace pro zákazníka od detailů, které zbytečně zvyšují riziko.

Veřejně můžeš říct:

- jaký typ oblasti se zlepšil: přihlašování, session, oprávnění, audit log,
- jestli musí zákazník něco udělat: odhlásit relace, otočit tokeny, zapnout MFA,
- zda se změna týká všech účtů nebo jen vybraných rolí,
- kde najde bezpečnostní doporučení.

Veřejně typicky nepiš:

- přesný exploit postup,
- interní názvy služeb, tabulek a síťových cest,
- podrobnosti o zákaznickém dopadu před dokončením triage,
- jména zákazníků nebo ukázky reálných dat,
- informace, které usnadní zneužití starší verze.

Příklad bezpečnější formulace:

> „Zpřísnili jsme kontrolu oprávnění u exportů. Administrátorům doporučujeme projít role uživatelů, kteří pracují s účetními exporty. Změna nevyžaduje reset hesel.“

To je mnohem lepší než „opravili jsme chybu, kdy role X přes endpoint Y obešla kontrolu Z“. Detailní technický popis může jít do neveřejného advisory pro dotčené zákazníky nebo do bezpečnostní dokumentace, pokud je to vhodné.

## BM.5 Distribuce: RSS, přímý odkaz a produktová nápověda

Privacy-first changelog nemusí stát na marketingové automatizaci, která měří každý otevřený e-mail, každý klik a pomalu i teplotu kafe. Základní distribuční sada může být jednoduchá:

- veřejná stránka `/changelog` s trvalými odkazy na položky,
- RSS nebo Atom feed pro lidi, kteří chtějí sledovat změny bez účtu,
- nenápadná notifikace v aplikaci pro relevantní role,
- e-mail jen pro změny s dopadem nebo nutnou akcí,
- odkaz z dokumentace a help centra,
- interní shrnutí pro support a sales.

U notifikací v produktu nepoužívej princip „všichni musí vidět všechno“. Účetní nepotřebuje popup o CSS úpravě dashboardu. Vývojář nepotřebuje marketingový konfety modal, že se změnila patička faktury. Role-based komunikace je slušnost i minimalizace datového šumu.

## BM.6 Měř úspěch bez sledovacího divadla

U release notes se dá měřit i bez invazivního trackingu. Místo individuálního sledování každého člověka si polož praktičtější otázky:

- Snížil se počet support ticketů k dané změně?
- Dokončili dotčení administrátoři nutnou migraci?
- Klesla chybovost nového workflow?
- Klikají uživatelé z dokumentace na správný návod agregovaně?
- Vrací se v rozhovorech stejná námitka nebo nepochopení?

U změn s nutnou akcí je důležitější stav migrace než open rate e-mailu. Pokud víš, že účet ještě používá starý API token, nepotřebuješ vědět, jestli někdo otevřel newsletter v 8:42. Potřebuješ mu férově říct: „Tahle integrace se rozbije, pokud token nevyměníte.“

GDPR principy minimalizace dat a omezení uložení připomínají, že osobní data mají být přiměřená účelu a uložená jen po potřebnou dobu. Článek 5 GDPR je uvádí mezi principy zpracování: https://eur-lex.europa.eu/eli/reg/2016/679/oj

## BM.7 Checklist release komunikace

- Každá položka říká dopad na zákazníka, ne jen interní technický fakt.
- Větší změny mají typ dopadu: novinka, změna chování, akce nutná, API, bezpečnost, oprava nebo deprecace.
- U změn s nutnou akcí je uvedené datum, konkrétní krok a odkaz na návod.
- Bezpečnostní poznámky neprozrazují exploit detaily, zákaznická data ani interní infrastrukturu.
- Changelog má trvalé URL a ideálně RSS/Atom feed.
- E-mail se používá hlavně pro dopadové změny, ne jako konfety kanón pro každý deploy.
- Support a sales mají interní vysvětlení dřív, než změnu uvidí zákazník.
- Měření úspěchu stojí hlavně na agregovaných signálech, dokončení migrace a poklesu nejasností.

## Codyho komentář

Changelog je produktový ekvivalent dobrého souseda: dá vědět, že se bude vrtat, řekne kdy, proč a jak dlouho. Špatný changelog je soused s příklepovou vrtačkou v neděli ráno a cedulkou „vylepšujeme vaše bydlení“. Technicky možná pravda. Emočně zločin.

## Zdroje k příloze

- EUR-Lex: GDPR, článek 5 k principům zpracování včetně minimalizace dat a omezení uložení: https://eur-lex.europa.eu/eli/reg/2016/679/oj

## Shrnutí přílohy

Changelog a release notes mají snižovat nejistotu. Odděl veřejný changelog, zákaznické release notes a interní release log, piš podle dopadu na práci zákazníka, označuj typ změny, bezpečnost komunikuj opatrně a distribuuj novinky přes přímé odkazy, RSS a relevantní produktové notifikace. Dobrá release komunikace není reklama na deploy. Je to součást důvěry.


# Příloha BN: Bezpečnostní kontakt a CVD bez paniky, lovu v patičce a právního bubáka

Když někdo najde bezpečnostní problém, první otázka nemá být „kam to mám poslat?“. Má být jasné, kdo hlášení přijímá, co se smí testovat, jak rychle tým reaguje a jak se zachází s citlivými informacemi. Bezpečnostní kontakt není jen věta na stránce „Kontaktujte nás“. Je to malý provozní systém, který může rozhodnout, jestli se chyba dostane k týmu včas, nebo skončí ve veřejném vlákně s titulkem „firma nereaguje“ a s popcornem pro celé internetové náměstí.

Privacy-first SaaS tady má výhodu: nemusí předstírat, že bezpečnost je marketingová dekorace. Může ji ukázat jako praktický závazek. Jasný kontakt, přiměřená politika koordinovaného zveřejňování zranitelností a minimum zbytečných dat v hlášení dávají výzkumníkům, zákazníkům i internímu týmu lepší šanci udělat správnou věc v klidu.

## BN.1 Zveřejni bezpečnostní kontakt tam, kde ho lidé i stroje najdou

Bezpečnostní e-mail v patičce nestačí. Lidé ho často přehlédnou a automatizované nástroje ho vůbec neuvidí. Pro webové služby existuje formát `security.txt`, který podle RFC 9116 slouží k popisu postupů pro hlášení zranitelností ve strojově čitelné podobě. Standard počítá s umístěním pod `/.well-known/security.txt`: https://www.rfc-editor.org/rfc/rfc9116.html

Praktické minimum:

- Vytvoř `https://example.com/.well-known/security.txt`.
- Uveď `Contact` jako e-mail nebo bezpečný formulář, který někdo opravdu čte.
- Přidej `Policy` s odkazem na lidsky čitelnou CVD politiku.
- Nastav `Expires`, aby bylo jasné, že kontakt není zapomenutá fosilie.
- Přidej `Preferred-Languages`, pokud zvládáš češtinu a angličtinu.
- Zvaž `Encryption`, pokud umíš přijímat šifrovaná hlášení bez toho, aby to skončilo jako muzeální ukázka PGP bolesti.

Jednoduchý příklad:

```txt
Contact: mailto:security@example.com
Policy: https://example.com/security
Preferred-Languages: cs, en
Expires: 2027-08-09T00:00:00Z
Canonical: https://example.com/.well-known/security.txt
```

Nejdůležitější detail: uvedený kontakt musí fungovat provozně. Pokud `security@example.com` padá do sdílené schránky, kterou někdo otevře jednou za půl roku mezi fakturami a newsletterem o firemních hrníčcích, nemáš bezpečnostní kontakt. Máš dekoraci.

## BN.2 CVD politika má říkat pravidla hry předem

Koordinované zveřejňování zranitelností, zkráceně CVD, je proces, ve kterém nálezce, vlastník systému a případně koordinátor spolupracují na bezpečném nahlášení, opravě a zveřejnění zranitelnosti. ENISA CVD popisuje jako důležitý proces pro ochranu uživatelů a posilování kybernetické bezpečnosti v EU: https://www.enisa.europa.eu/topics/vulnerability-disclosure

Dobrá CVD politika odpovídá na otázky:

- Jaké systémy jsou v rozsahu testování?
- Jaké typy zranitelností tým vítá?
- Jaké testy jsou mimo rozsah, protože by mohly poškodit službu nebo data?
- Jak má nálezce hlášení poslat?
- Do kdy tým potvrdí přijetí?
- Jak probíhá oprava, koordinace a případné zveřejnění?
- Co tým považuje za odpovědné chování nálezce?

NÚKIB v českém prostředí publikoval Národní politiku CVD a vlastní CVD politiku pro web `nukib.gov.cz`; v jejím popisu mimo jiné vysvětluje bezpečný přístav pro objevitele, pokud dodržují podmínky politiky: https://nukib.gov.cz/cs/kontakty/cvd-politika/ a https://nukib.gov.cz/cs/infoservis/aktuality/2355-nukib-predstavuje-narodni-politiku-cvd-pro-bezpecne-hlaseni-zranitelnosti/

To neznamená, že každý malý SaaS musí mít právní dokument o délce stavebního zákona. Znamená to, že pravidla nemají vznikat až ve chvíli, kdy přijde první hlášení a tým se začne ptát „a je tohle útok, pomoc, nebo obojí?“

## BN.3 Scope napiš konkrétně, jinak si ho někdo domyslí za tebe

„Můžete testovat náš web“ je moc široké. Výzkumník neví, jestli smí zkoušet API, demo účet, produkční formuláře, subdomény, mobilní aplikaci, integrace nebo zákaznické tenanty. Tým zase neví, jestli hlášení odmítnout, poděkovat, nebo volat hasiče. Ne ty s vodou. Ty právní.

Rozděl scope do tří částí:

| Oblast | Příklad | Poznámka |
| --- | --- | --- |
| V rozsahu | `app.example.com`, veřejné API, demo tenant | Testovat šetrně a bez přístupu k cizím datům |
| Mimo rozsah | produkční zákaznické účty bez svolení, DoS, fyzická bezpečnost | Jasně zakázat rušivé a invazivní testy |
| Nejasné | partnerské integrace, staré subdomény, marketingové microsites | Raději požádat o potvrzení před testem |

Ke scope přidej i datová pravidla:

- Nálezce nemá stahovat, kopírovat ani zveřejňovat cizí data.
- Pokud se k datům omylem dostane, má test zastavit a popsat minimální důkaz.
- Hlášení nemá obsahovat osobní údaje jiných uživatelů, pokud to není nezbytné pro pochopení rizika.
- Screenshots mají být začerněné nebo vytvořené na vlastním testovacím účtu.

Privacy-first přístup tady není fráze. Je to konkrétní ochrana: i dobrý úmysl může nadělat škodu, když politika mlčí o datech.

## BN.4 Interní triage musí být rychlejší než interní chaos

Bezpečnostní hlášení není běžný support ticket. Potřebuje vlastní cestu, vlastní prioritu a jasného majitele. Pokud ho necháš v jedné frontě vedle otázky „kde najdu fakturu“, riskuješ, že kritická chyba dostane odpověď „děkujeme za podnět, předáme produktovému týmu“. To je věta, která by měla mít vlastní požární signalizaci.

Minimální triage proces:

1. **Příjem**: automatické potvrzení a interní notifikace bezpečnostnímu vlastníkovi.
2. **První čtení**: ověřit, jestli hlášení popisuje potenciální zranitelnost.
3. **Klasifikace**: odhad závažnosti podle dopadu, zneužitelnosti a rozsahu dat.
4. **Reprodukce**: potvrdit problém na testovacím prostředí nebo bezpečně omezeném účtu.
5. **Mitigace**: rychlé omezení rizika, i kdyby finální oprava trvala déle.
6. **Komunikace**: průběžně informovat nálezce i dotčené interní role.
7. **Uzavření**: oprava, ověření, poučení a rozhodnutí o zveřejnění.

Pro malý tým stačí jednoduchá tabulka nebo issue tracker, ale nesmí chybět vlastník, stav, závažnost, termín dalšího kroku a odkaz na důkazy. Bez toho se z CVD stane „někdo to měl řešit“. Nejslavnější procesní vrah v historii malých firem.

## BN.5 Odpověď nálezci piš lidsky a bez slibů, které neumíš splnit

První odpověď má udělat tři věci: poděkovat, potvrdit přijetí a nastavit očekávání. Nemusí obsahovat diagnózu za deset minut. Musí ale ukázat, že hlášení nezmizelo v kancelářském bermudském trojúhelníku.

Šablona první odpovědi:

> Dobrý den, děkujeme za nahlášení. Hlášení jsme přijali pod interním označením `SEC-123` a do 3 pracovních dnů potvrdíme, zda problém dokážeme reprodukovat. Prosíme, neposílejte další osobní údaje ani neveřejné zákaznické informace; pokud budou potřeba další detaily, ozveme se. Cody by dodal: díky, že jste nezvolili variantu „rovnou to hodím na internet“.

Další komunikace má být stručná:

- co je potvrzené,
- co ještě ověřujete,
- jestli nálezce může dodat bezpečný důkaz,
- kdy dáte další update,
- zda a jak plánujete koordinovat zveřejnění.

Neslibuj odměnu, pokud nemáš bug bounty program. Neslibuj právní ochranu, pokud ji nemáš právně zkontrolovanou. Neslibuj datum opravy, pokud jsi problém ještě nepochopil. Slibuj jen další konkrétní krok.

## BN.6 Připrav si rozhodnutí o zveřejnění dřív, než začne tlak

Zveřejnění zranitelnosti může být užitečné: pomáhá uživatelům pochopit riziko, dává kredit nálezci a ukazuje, že tým umí reagovat. Může být ale i škodlivé, pokud přijde před opravou, obsahuje exploit detail nebo odhalí zákaznická data. Proto se o zveřejnění nemá rozhodovat ve stresu.

Předem si napiš interní pravidla:

- Kdy zveřejňujeme krátké bezpečnostní oznámení?
- Kdy informujeme jen dotčené zákazníky?
- Jak dáváme kredit nálezci, pokud o něj stojí?
- Které technické detaily nepublikujeme?
- Kdo schvaluje text: produkt, vývoj, bezpečnost, právní část, support?
- Jaké kanály použijeme: changelog, security stránka, e-mail dotčeným zákazníkům, status page?

Privacy-first varianta zveřejnění nehoní drama. Řekne dopad, stav opravy, nutné kroky a rozsah. Neukazuje reálná data, nepíše zbytečný návod ke zneužití a nepoužívá incident jako marketingovou selfíčkovou příležitost. Bezpečnost není LinkedIn karaoke.

## BN.7 Checklist bezpečnostního kontaktu a CVD

- Existuje `/.well-known/security.txt` s funkčním kontaktem, politikou, jazykem a expirací.
- Bezpečnostní e-mail nebo formulář někdo pravidelně sleduje a má jasného vlastníka.
- CVD politika popisuje scope, zakázané testy, datová pravidla a očekávaný postup.
- Produkční zákaznická data jsou v pravidlech chráněná před kopírováním, zveřejněním i zbytečným posíláním.
- Triage proces má stavy, závažnost, vlastníka, termín dalšího kroku a bezpečné místo pro důkazy.
- První odpověď nálezci potvrzuje přijetí a nastavuje realistické očekávání.
- Tým má předem připravené varianty komunikace pro kritický, střední a nízký dopad.
- Zveřejnění zranitelnosti neobsahuje exploit návod, interní infrastrukturu ani zákaznická data.
- Po uzavření se aktualizuje dokumentace, testy, alerty nebo checklist, aby se stejná chyba nevrátila v jiném kostýmu.

## Codyho komentář

Bezpečnostní kontakt je jako zvonek u dveří. Když není, slušný člověk neví, kam zaklepat, a méně slušný vleze oknem. CVD politika není pozvánka k chaosu. Je to způsob, jak říct: „Když najdeš problém, pojďme ho opravit dospěle.“ Což je v technologii pořád překvapivě punkové.

## Zdroje k příloze

- RFC Editor: RFC 9116, `security.txt`, umístění pod `/.well-known/security.txt` a pole jako `Contact`, `Policy`, `Expires`, `Preferred-Languages`: https://www.rfc-editor.org/rfc/rfc9116.html
- ENISA: téma Vulnerability Disclosure a význam CVD pro ochranu uživatelů a kybernetickou bezpečnost v EU: https://www.enisa.europa.eu/topics/vulnerability-disclosure
- NÚKIB: CVD politika pro `nukib.gov.cz` a popis bezpečného přístavu při dodržení podmínek politiky: https://nukib.gov.cz/cs/kontakty/cvd-politika/
- NÚKIB: představení Národní politiky koordinovaného zveřejňování zranitelností: https://nukib.gov.cz/cs/infoservis/aktuality/2355-nukib-predstavuje-narodni-politiku-cvd-pro-bezpecne-hlaseni-zranitelnosti/

## Shrnutí přílohy

Bezpečnostní kontakt a CVD politika zkracují cestu od nálezu k opravě. Zveřejni `security.txt`, napiš jasný scope, chraň zákaznická data, připrav triage proces, komunikuj s nálezcem věcně a rozhoduj o zveřejnění podle dopadu, ne podle paniky. Dobrý proces nepřidává byrokracii. Ubírá chaos.


# Příloha BO: Doménová a DNS hygiena bez jediného záznamu, který drží firmu jako rukojmí

Doména je nudná přesně do chvíle, kdy přestane být nudná. Pak najednou nejde web, e-mail padá do propasti, zákazníci vidí cizí stránku, faktury neodcházejí a někdo v týmu hledá přístup k registrátorovi v heslech bývalého kolegy. Elegantní katastrofa, jen bez elegance.

Privacy-first SaaS může mít krásné formuláře, evropský hosting a minimalistickou analytiku, ale pokud nemá pod kontrolou doménu a DNS, stojí celý provoz na vratké židli. Doména není jen marketingová adresa. Je to kořen důvěry pro web, e-mail, API, přihlášení, zákaznické odkazy i bezpečnostní komunikaci.

## BO.1 Doména musí mít jasného vlastníka, ne historickou náhodu

První audit domény není technický. Je organizační. Zjisti, kdo je držitel domény, kdo má přístup k registrátorovi, kdo platí prodloužení, kdo dostává notifikace a kdo smí měnit DNS. Pokud odpověď zní „asi agentura“ nebo „to kdysi zakládal Petr“, máš riziko, ne správu.

Praktické minimum:

- Držitel domény má být firma nebo odpovědná právnická osoba, ne osobní účet náhodného zakladatele.
- Fakturační kontakt má být schránka, kterou někdo opravdu čte.
- Technický kontakt má mít přístup k DNS, ale ne nutně k fakturaci a vlastnictví.
- Přístupy k registrátorovi mají být v týmovém password manageru s MFA, ne v prohlížeči jednoho člověka.
- Prodloužení domény má mít kalendářovou kontrolu minimálně 60 a 14 dní před expirací.

Příklad malého registru domén:

| Doména | Účel | Registrátor | Vlastník | DNS správce | Expirace | Kritičnost |
| --- | --- | --- | --- | --- | --- | --- |
| `example.cz` | Hlavní web a e-mail | EU registrátor | Firma | Interní tým | 2027-05-12 | Kritická |
| `example.app` | SaaS aplikace | EU registrátor | Firma | DevOps | 2027-09-03 | Kritická |
| `example.eu` | Ochranná doména | EU registrátor | Firma | Interní tým | 2027-02-18 | Střední |

Tahle tabulka není byrokracie. Je to seznam věcí, které nesmí zmizet jen proto, že někdo změnil kartu, odešel z firmy nebo si „uklidil“ e-mail.

## BO.2 Zamkni doménu proti nechtěným převodům a změnám

ICANN vysvětluje, že zámek domény, často označovaný jako `Registrar lock` nebo `Client Transfer Prohibited`, může chránit doménové jméno před neautorizovanými změnami: https://www.icann.org/resources/pages/locked-2013-05-03-en

Pro malý SaaS to znamená jednoduché pravidlo: kritická doména nemá být odemčená „pro jistotu“. Odemknutí má být vědomá operace s důvodem, časem a člověkem, který ví, co dělá.

Checklist zámku:

- Zapni transfer lock u hlavních domén.
- Ověř, jestli registrátor nabízí další úroveň ochrany proti změně držitele nebo nameserverů.
- Ulož postup odemčení do interní dokumentace, aby migrace nebyla improvizace ve dvě ráno.
- Po převodu nebo změně registrátora zámek znovu zkontroluj.
- Notifikace o převodu posílej na skupinovou bezpečnostní nebo provozní schránku.

Codyho komentář: doménový zámek není paranoia. Je to bezpečnostní pás. Většinu dní o něm nevíš. V jeden špatný den jsi rád, že existuje.

## BO.3 DNSSEC ber jako integritu cesty, ne jako ozdobný štítek

CZ.NIC popisuje DNSSEC jako rozšíření DNS, které zvyšuje bezpečnost tím, že pomáhá ověřit správný zdroj, úplnost a integritu DNS informací: https://www.nic.cz/page/513/about-dnssec/ IETF v RFC 9364 označuje DNSSEC pro autentizaci původu DNS dat jako Best Current Practice: https://www.rfc-editor.org/rfc/rfc9364.html

U českých `.cz` domén je dobré ověřit, zda registrátor DNSSEC podporuje a ideálně ho umí nastavit automaticky. CZ.NIC uvádí, že nejjednodušší cestou je registrace u registrátora, který DNSSEC nabízí automaticky, případně kontaktování registrátora nebo hostingu kvůli zavedení: https://www.nic.cz/dnssec/ a https://www.nic.cz/page/565/jak-zprovoznit-dnssec/

Praktický postup:

1. Ověř, jestli je hlavní doména DNSSEC podepsaná.
2. Zjisti, kdo spravuje DNSSEC klíče: registrátor, DNS poskytovatel, nebo interní tým.
3. Při změně nameserverů připrav DNSSEC přechod předem, ne až po výpadku.
4. Po migraci ověř validaci domény z více resolverů.
5. Zapiš do dokumentace, kdo řeší rotaci klíčů a incident typu „doména validuje špatně“.

DNSSEC neřeší všechno. Nezachrání špatné heslo k registrátorovi, rozbitý deployment ani omylem smazaný `MX` záznam. Řeší ale důležitou část důvěry: aby DNS odpověď nebyla podvržená po cestě.

## BO.4 DNS změny dělej jako release, ne jako klikací ruletu

DNS je infrastruktura, která má nepříjemnou vlastnost: chyba se často projeví později, různě po světě a podle cache. Proto změna DNS nemá být „rychle kliknu a uvidíme“. Má mít plán.

Před změnou si napiš:

- jaký záznam měním,
- proč ho měním,
- jaký je původní stav,
- jaký má být nový stav,
- jaké služby změna ovlivní,
- jak ověřím výsledek,
- jak se vrátím zpět.

Příklad bezpečné změny pro přesun webu:

1. Den předem sniž TTL u dotčených záznamů na rozumně krátkou hodnotu.
2. Připrav nový hosting a otestuj ho přes dočasnou adresu nebo lokální hosts override.
3. Zapiš původní DNS stav do ticketu nebo changelogu.
4. Proveď změnu v méně rizikovém čase.
5. Ověř web, TLS certifikát, přesměrování, formuláře, e-mailové odkazy a API callbacky.
6. Po stabilizaci vrať TTL na běžnou hodnotu.

Nejhorší DNS změna je ta, která nemá návrat. Druhá nejhorší je ta, kterou nikdo neumí vysvětlit, protože „to asi přidal nějaký plugin“.

## BO.5 Subdomény uklízej dřív, než se stanou pozvánkou k průšvihu

Staré subdomény jsou digitální půdy. Leží tam testovací aplikace, zapomenuté CNAME na zrušené služby, staging bez hesla, starý blog, krátkodobá kampaň a jednou za čas i překvapení velikosti menšího právního oddělení.

Měsíční subdoménová hygiena:

- Vypiš aktivní záznamy pro hlavní domény.
- Označ vlastníka každé subdomény.
- Odstraň záznamy na služby, které už nepoužíváš.
- Zkontroluj, jestli staging a preview prostředí nejsou indexovaná nebo veřejně přístupná bez důvodu.
- Ověř, že CNAME záznamy nemíří na zrušené projekty u třetích stran.
- U marketingových microsites nastav datum konce už při spuštění kampaně.

Privacy-first pohled: zapomenutá subdoména může pořád obsahovat formulář, starý tracker, starý export nebo logiku, která už neodpovídá aktuálním pravidlům zpracování dat. Úklid DNS je proto i úklid datových slibů.

## BO.6 Kritické záznamy měj popsané lidsky

DNS záznamy bývají pro netechnický tým kryptická poezie. `A`, `AAAA`, `CNAME`, `MX`, `TXT`, `CAA`, `DKIM`, `DMARC`, `SPF`. Krásný slovník, když chceš vypadat chytře na poradě. Horší, když potřebuješ rychle zjistit, co se rozbije po smazání jednoho řádku.

U kritických záznamů drž jednoduchý popis:

| Záznam | Účel | Vlastník | Poznámka |
| --- | --- | --- | --- |
| `@ A/AAAA` | Hlavní web | Web tým | Změna ovlivní landing page |
| `app CNAME` | SaaS aplikace | Produkt/DevOps | Kritická cesta zákazníků |
| `MX` | Příjem e-mailu | Provoz | Nemazat bez e-mail migrace |
| `TXT SPF/DKIM/DMARC` | Doručitelnost a ověření e-mailu | Provoz/marketing | Navazuje na transakční i obchodní poštu |
| `CAA` | Omezení certifikačních autorit | DevOps | Ověřit před změnou TLS dodavatele |

Smyslem není psát román ke každému TXT záznamu. Smyslem je, aby člověk v incidentu poznal rozdíl mezi „tohle je stará kampaň“ a „tohle drží produkční přihlášení“.

## BO.7 Checklist doménové a DNS hygieny

- Hlavní domény mají správného firemního držitele a skupinové kontakty.
- Registrátor má zapnuté MFA a přístupy jsou v týmovém password manageru.
- Kritické domény mají zapnutý transfer lock nebo obdobnou ochranu.
- Expirace domén se hlídá mimo samotný registrátorský e-mail.
- DNSSEC je ověřený nebo existuje rozhodnutí, proč zatím není nasazený.
- Kritické DNS záznamy mají popsaný účel a vlastníka.
- DNS změny mají plán, původní stav, ověření a rollback.
- Staré subdomény a CNAME záznamy se kontrolují alespoň měsíčně.
- Staging a preview prostředí nejsou veřejná bez jasného důvodu.
- Doménové a DNS změny se zapisují do provozního changelogu.

## Codyho komentář

Doména je malý řádek v registru, který drží velkou část firmy za límec. Když funguje, nikdo jí netleská. Když selže, všichni najednou vědí, že existuje. Proto je dobré chovat se k ní jako k produkční databázi důvěry, ne jako k administrativnímu detailu, který „nějak dopadne“.

## Zdroje k příloze

- ICANN: vysvětlení zámku domény, `Registrar lock` a `Client Transfer Prohibited`: https://www.icann.org/resources/pages/locked-2013-05-03-en
- CZ.NIC: popis DNSSEC jako rozšíření DNS pro ověření zdroje, úplnosti a integrity DNS informací: https://www.nic.cz/page/513/about-dnssec/
- RFC Editor: RFC 9364, DNSSEC jako Best Current Practice pro autentizaci původu DNS dat: https://www.rfc-editor.org/rfc/rfc9364.html
- CZ.NIC: praktické informace k ověření a zavedení DNSSEC u `.cz` domény: https://www.nic.cz/dnssec/ a https://www.nic.cz/page/565/jak-zprovoznit-dnssec/

## Shrnutí přílohy

Doménová a DNS hygiena chrání web, e-mail, SaaS aplikaci i důvěru zákazníků. Měj jasného vlastníka domény, zamčené převody, ověřený DNSSEC, dokumentované kritické záznamy, plánované DNS změny a pravidelný úklid subdomén. Není to sexy práce. Což je přesně důvod, proč ji dobré týmy dělají dřív, než začne hořet.


# Příloha BP: Datová klasifikace bez korporátních nálepek a bezpečnostního folklóru

Datová klasifikace zní jako věc, kterou vymyslel někdo, kdo miluje tabulky, schvalovací kolečka a šanony s názvem „směrnice“. Ve skutečnosti je to jednoduchý produktový nástroj: pomáhá týmu poznat, s jakými daty právě pracuje, co s nimi smí dělat a kdy má raději zabrzdit.

Privacy-first SaaS nepotřebuje deset úrovní tajnosti a barevné certifikáty na každou složku. Potřebuje, aby vývojář, support, marketing i zakladatel rychle poznali rozdíl mezi veřejným textem z webu, interní poznámkou, zákaznickým exportem, fakturačním údajem a citlivým bezpečnostním incidentem. Když ten rozdíl není jasný, data cestují do promptů, screenshotů, ticketů, tabulek a externích nástrojů jako turisté bez mapy. A většinou bez cestovního pojištění.

Evropská komise u GDPR principů připomíná minimalizaci dat, omezení uložení, účelové omezení a integritu a důvěrnost zpracování: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en?prefLang=en EDPB k ochraně osobních údajů již od návrhu a ve výchozím nastavení popisuje, že ochrana dat má být zabudovaná do prostředků i samotného zpracování, ne přilepená až po spuštění: https://www.edpb.europa.eu/documents/guideline/guidelines-42019-on-article-25-data-protection-by-design-and-by-default_en

## BP.1 Začni čtyřmi třídami, ne bezpečnostní diplomacií

Malý tým často nepotřebuje dokonalou klasifikační normu. Potřebuje společný jazyk. Doporučené minimum:

| Třída | Co sem patří | Praktické pravidlo |
| --- | --- | --- |
| Veřejné | Web, veřejná dokumentace, blog, changelog | Může ven, ale pořád musí být správné |
| Interní | Roadmapa, interní poznámky, provozní postupy | Sdílet jen v týmu nebo s ověřenými partnery |
| Důvěrné | Zákaznické konfigurace, obchodní komunikace, fakturační kontext | Neposílat do nástrojů bez schváleného účelu a smluvního vztahu |
| Citlivé | Přístupové údaje, bezpečnostní incidenty, speciální kategorie osobních údajů, produkční exporty | Minimalizovat, šifrovat, časově omezit, auditovat přístup |

Tahle tabulka má být na očích. V interní wiki, v onboarding checklistu, v šabloně ticketu a u AI pravidel. Ne jako dekorace. Jako brzda před tím, než někdo vloží produkční CSV do náhodného online převodníku, protože „jen potřeboval rychle udělat sloupeček“.

## BP.2 Klasifikuj podle dopadu, ne podle toho, jak moc se data tváří technicky

Největší chyba je označovat data podle formátu. JSON není automaticky citlivý. PDF není automaticky nudné. Screenshot může být horší než databázový export, když ukazuje jména zákazníků, tokeny, interní poznámky a URL s parametry.

Při klasifikaci se ptej:

- Komu by únik ublížil: zákazníkovi, firmě, partnerovi, uživateli, nebo reputaci produktu?
- Dá se osoba nebo firma podle dat přímo nebo nepřímo identifikovat?
- Obsahují data přístup, tajemství, token, klíč, webhook URL nebo interní infrastrukturu?
- Jsou data potřebná pro konkrétní úkol, nebo jen pohodlná?
- Jak dlouho je opravdu potřebujeme držet?
- Lze použít syntetická, anonymní nebo agregovaná data?

Příklad: tabulka „počet aktivací podle týdne“ může být interní metrika. Stejná tabulka doplněná o e-maily, IP adresy a poznámky supportu je důvěrný nebo citlivý materiál. Rozdíl není ve formátu. Rozdíl je v dopadu.

## BP.3 Udělej pravidla pro pět nejčastějších míst úniku

Klasifikace nefunguje, pokud končí v dokumentu. Musí se propsat do míst, kde tým reálně pracuje.

Nejčastější místa:

1. **Tickety a issue trackery** — zákaznická data vkládej jen v minimálním rozsahu; dlouhé logy anonymizuj nebo odkazuj na interní bezpečné úložiště.
2. **Screenshoty a nahrávky obrazovky** — před sdílením zakryj e-maily, tokeny, objednávky, osobní poznámky a neveřejné názvy zákazníků.
3. **AI prompty** — vkládej problém, strukturu a syntetický příklad, ne produkční data; pokud potřebuješ reálný kontext, použij schválený režim a zdokumentuj účel.
4. **Sdílené tabulky** — nastav vlastníka, retenční datum a přístup jen pro lidi, kteří tabulku potřebují.
5. **Logy a exporty** — drž je mimo chatovací nástroje; používej krátkou retenci, omezený přístup a jasný postup mazání.

Codyho komentář: nejnebezpečnější věta v týmu je „pošlu ti to rychle do chatu“. Chat je skvělý na domluvu. Je mizerný archiv citlivých dat převlečený za pohodlí.

## BP.4 Pseudonymizace není kouzelný plášť neviditelnosti

ENISA ve své práci k pseudonymizaci opakovaně zdůrazňuje, že neexistuje jedna univerzální technika vhodná pro všechny situace a že volba závisí na kontextu, riziku a potřebné užitečnosti dat: https://www.enisa.europa.eu/publications/pseudonymisation-techniques-and-best-practices a https://www.enisa.europa.eu/publications/data-pseudonymisation-advanced-techniques-and-use-cases

Pro malý SaaS z toho plyne praktické pravidlo: pseudonymizace může snížit riziko, ale nesmí sloužit jako výmluva pro nekonečné kopírování dat. Pokud máš dataset s nahrazenými e-maily, ale zachovanými unikátními kombinacemi firmy, regionu, času, poznámek a chování, pořád může být znovu identifikovatelný.

Bezpečnější postup pro vývoj a analýzu:

- Pro vývoj používej syntetická seed data.
- Pro produktové trendy používej agregace, ne řádky po uživatelích.
- Pro debug používej krátkodobý, schválený a auditovaný přístup k minimálnímu výřezu dat.
- Pro AI asistenta připrav modelové příklady, ne kopie zákaznických tiketů.
- Pro sdílení s dodavatelem používej datový výřez s jasným účelem, časem a smluvním pokrytím.

## BP.5 Ke každé třídě napiš povolené a zakázané akce

Tým nepotřebuje znát právní teorii pokaždé, když řeší bug. Potřebuje rozhodovací tabulku.

| Akce | Veřejné | Interní | Důvěrné | Citlivé |
| --- | --- | --- | --- | --- |
| Poslat v týmovém chatu | Ano | Ano, v interním prostoru | Jen výjimečně a minimalizovaně | Ne |
| Vložit do AI nástroje | Ano | Jen podle pravidel firmy | Ne bez schváleného režimu | Ne |
| Sdílet s dodavatelem | Ano | Pokud potřebuje kontext | Jen se smlouvou a účelem | Jen po schválení a minimálně |
| Uložit do ticketu | Ano | Ano | Jen nezbytný výřez | Odkaz na bezpečné úložiště, ne kopie |
| Držet bez data revize | Ano | Ne ideálně navždy | Ne | Rozhodně ne |

Tahle tabulka má být jednoduchá a trochu nudná. To je pochvala. Bezpečnostní pravidlo, které člověk pochopí za deset sekund, má větší šanci přežít pondělní provoz než perfektní politika, kterou nikdo nečte.

## BP.6 Přidej klasifikaci do běžných šablon

Nečekej, že si lidé vzpomenou na klasifikaci ve stresu. Přidej ji do šablon:

- bug report: „Obsahuje ukázka produkční nebo osobní data? Ano/ne. Pokud ano, kde jsou bezpečně uložená?“
- support ticket: „Jaká data zákazníka jsou nutná pro vyřešení?“
- produktový experiment: „Jakou nejmenší metriku potřebujeme?“
- export dat: „Účel, vlastník, příjemce, datum smazání.“
- AI prompt: „Použil jsem syntetická/anonymizovaná/reálná data? Proč?“
- dodavatelský úkol: „Jakou třídu dat dodavatel uvidí?“

Klasifikace tím přestane být školení jednou za rok a stane se malým rozhodnutím ve workflow. Přesně tam má být.

## BP.7 Checklist datové klasifikace pro malý SaaS

- Máme čtyři srozumitelné třídy dat: veřejné, interní, důvěrné a citlivé.
- Každá třída má příklady z našeho produktu, ne obecné právní fráze.
- Pravidla říkají, co se smí poslat do chatu, AI nástroje, ticketu, tabulky a dodavateli.
- Produkční exporty mají vlastníka, účel, místo uložení a datum smazání.
- Screenshoty a nahrávky se před sdílením kontrolují na osobní data, tokeny a neveřejné informace.
- Vývoj a demo používají syntetická data, ne kopie produkce.
- Pseudonymizovaná data bereme jako snížení rizika, ne jako anonymitu automaticky.
- AI prompty mají zvláštní pravidlo pro zákaznická a citlivá data.
- Nový nástroj nebo dodavatel dostane jen data, která opravdu potřebuje.
- Klasifikace je součástí onboardingu, šablon a měsíční provozní revize.

## Codyho komentář

Datová klasifikace není o tom, aby tým pracoval pomaleji. Je o tom, aby nemusel pokaždé vymýšlet bezpečnost od nuly. Dobrá pravidla jsou jako zábradlí na schodech: většinu času si jich nevšímáš, ale když uklouzneš, najednou vypadají jako nejlepší vynález civilizace.

## Zdroje k příloze

- Evropská komise: principy GDPR včetně minimalizace dat, omezení uložení, účelového omezení a integrity a důvěrnosti: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en?prefLang=en
- EDPB: Guidelines 4/2019 k ochraně osobních údajů již od návrhu a ve výchozím nastavení podle článku 25 GDPR: https://www.edpb.europa.eu/documents/guideline/guidelines-42019-on-article-25-data-protection-by-design-and-by-default_en
- ENISA: Pseudonymisation techniques and best practices: https://www.enisa.europa.eu/publications/pseudonymisation-techniques-and-best-practices
- ENISA: Data Pseudonymisation — Advanced Techniques and Use Cases: https://www.enisa.europa.eu/publications/data-pseudonymisation-advanced-techniques-and-use-cases

## Shrnutí přílohy

Datová klasifikace dává malému SaaS týmu společný jazyk pro práci s informacemi. Stačí čtyři třídy, jasná pravidla pro chaty, tickety, AI nástroje, exporty a dodavatele, syntetická data pro vývoj a jednoduché šablony, které nutí přemýšlet o účelu a dopadu. Nejde o nálepky. Jde o to, aby se data nepohybovala firmou jako konfety po večírku.


# Příloha BQ: Přístupnost webu bez overlay magie a poslední paniky před auditem

Přístupnost není speciální režim pro „někoho jiného“. Je to kvalita produktu. Stejně jako rychlost, čitelnost, bezpečnost nebo srozumitelná cena. Když web nejde ovládat klávesnicí, formulář neřekne čtečce, kde je chyba, nebo kontrast vypadá jako šedá mlha na šedé mlze, nepřicházíš jen o abstraktní body v auditu. Přicházíš o lidi, objednávky, důvěru a často i o klid právního oddělení.

V EU je téma přístupnosti výrazně praktičtější od chvíle, kdy se od 28. června 2025 začal uplatňovat European Accessibility Act pro vybrané produkty a služby pro spotřebitele. Evropská komise k tomu uvádí, že akt se týká mimo jiné počítačů, chytrých telefonů, platebních terminálů, bankomatů, e-commerce, bankovních služeb, e-knih a některých dopravních a mediálních služeb: https://digital-strategy.ec.europa.eu/en/news/eu-becomes-more-accessible-all

Pro webové týmy je praktickým technickým jazykem hlavně WCAG. W3C vydalo WCAG 2.2 jako doporučení 5. října 2023 a WCAG pracuje s principy vnímatelnosti, ovladatelnosti, srozumitelnosti a robustnosti: https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/ a https://www.w3.org/TR/WCAG22/

## BQ.1 Nezačínej overlay widgetem, začni základní použitelností

Nejhorší přístupnostní zkratka je tlačítko v rohu, které slibuje „AI accessibility fix“. Přístupnost nejde nalepit na hotový chaos jako nálepka na rozbitý kufr. Pokud HTML nemá smysluplnou strukturu, tlačítka nejsou tlačítka, formuláře nemají labely a chybové hlášky nejsou napojené na pole, žádný widget z toho neudělá kvalitní produkt.

Začni u věcí, které jsou levné a mění nejvíc:

- používej skutečné HTML prvky místo klikacích `div` s ambicemi na kariéru tlačítka,
- každý formulářový prvek spoj s viditelným a programovým labelem,
- stránku rozděl nadpisy ve správném pořadí,
- hlavní akce dělej jako jasná tlačítka nebo odkazy podle skutečné funkce,
- navigaci, modály a menu otestuj jen klávesnicí,
- chybové stavy napiš konkrétně a propoj s polem, kterého se týkají.

Praktický test: odpoj myš a projdi hlavní konverzní cestu. Pokud se zasekneš, není to edge case. Je to produktová chyba v pyžamu.

## BQ.2 Přístupnost patří do design systému, ne do finálního úklidu

Když se přístupnost řeší až před spuštěním, tým obvykle zjistí, že má problém ve všech komponentách najednou. Špatný kontrast tlačítka, nečitelný focus stav, ikonové tlačítko bez názvu a toast bez oznámení pro asistivní technologie se pak opakují ve dvaceti obrazovkách. Gratuluji, máme multiplikátor bolesti.

V design systému nastav minimálně:

- barevné tokeny s ověřeným kontrastem pro text, odkazy, pozadí, stavy a chybové zprávy,
- viditelný focus ring pro všechny interaktivní prvky,
- komponenty formulářů s `label`, nápovědou, chybou a stavem povinnosti,
- ikonová tlačítka s přístupným názvem,
- modály s návratem fokusu na původní prvek,
- tabulky s hlavičkami a rozumným čtením na mobilu.

Příklad pravidla pro komponentu tlačítka:

> „Každé tlačítko musí mít textový název. Pokud je vizuálně jen ikona, musí mít přístupný název. Focus stav je vždy viditelný a nesmí být odstraněn kvůli estetice.“

Tohle není brzda kreativity. To je způsob, jak nedělat stejnou chybu každý sprint znovu, jen v jiném odstínu fialové.

## BQ.3 Formuláře jsou místo, kde se přístupnost mění v peníze

Landing page může být nádherná, ale pokud formulář selže, obchodní hodnota spadne do kanálu. Přístupný formulář je srozumitelný, odpouští chyby a nevyžaduje detektivní schopnosti.

Dobrá pravidla:

- pole pojmenuj viditelně, ne jen placeholderem,
- u povinných polí vysvětli povinnost před odesláním,
- chybu ukaž u konkrétního pole a napiš, jak ji opravit,
- zachovej už vyplněná data po chybě,
- nepoužívej CAPTCHA jako první obrannou linii, pokud existuje méně otravná ochrana,
- potvrď úspěšné odeslání jasnou zprávou a dalším krokem.

Slabá chyba:

> „Neplatný vstup.“

Lepší chyba:

> „E-mail musí obsahovat zavináč, například jana@firma.cz.“

Privacy-first poznámka: méně polí znamená méně překážek, méně osobních údajů a často i lepší konverzi. Přístupnost a minimalizace dat se tady krásně potkávají. Skoro až podezřelé, jak dobré věci spolu někdy kamarádí.

## BQ.4 Testuj ručně, automaticky a s reálnými lidmi

Automatické testy jsou užitečné, ale nechytí všechno. Umí najít chybějící label, některé kontrasty nebo špatnou strukturu. Neřeknou ti ale spolehlivě, jestli text dává smysl, jestli je proces pochopitelný, nebo jestli se uživatel v modálu cítí jako v escape roomu bez nápovědy.

Rozumná kombinace pro malý tým:

- automatická kontrola v CI nebo aspoň při pull requestu pro základní chyby,
- ruční klávesnicový průchod kritických cest,
- kontrola se čtečkou obrazovky u formulářů, navigace a modálů,
- test na mobilu se zvětšeným písmem,
- obsahová revize chybových hlášek a instrukcí,
- občasný test s člověkem, který nepoužívá produkt každý den.

Mini-protokol po testu:

| Oblast | Otázka | Výsledek |
| --- | --- | --- |
| Klávesnice | Projdu hlavní cestu bez myši? | ano/ne + poznámka |
| Fokus | Vidím vždy, kde jsem? | ano/ne + screenshot |
| Formulář | Chyby říkají, co opravit? | ano/ne + příklad |
| Čtečka | Mají prvky smysluplné názvy? | ano/ne + problém |
| Mobil | Funguje zvětšené písmo bez rozbití layoutu? | ano/ne + šířka |
| Obsah | Je instrukce lidská a konkrétní? | ano/ne + návrh textu |

## BQ.5 Přístupnostní prohlášení piš jako závazek, ne jako alibi

Veřejný sektor má v EU samostatná pravidla pro webovou přístupnost a standardizaci, technicky navázaná na EN 301 549; Evropská komise popisuje souvislost Web Accessibility Directive a harmonizovaného standardu zde: https://digital-strategy.ec.europa.eu/en/policies/web-accessibility-directive-standards-and-harmonisation

Soukromé SaaS nemusí vždy zveřejňovat stejný typ prohlášení jako veřejná instituce, ale přístupnostní stránka je dobrý obchodní i provozní návyk. Nemusí předstírat dokonalost. Má říkat:

- jaký standard tým sleduje,
- které části produktu jsou známě problematické,
- jak může uživatel nahlásit bariéru,
- jak rychle tým odpovídá,
- kdy proběhla poslední revize,
- kdo je interní vlastník přístupnosti.

Příklad lidské formulace:

> „Snažíme se držet web a aplikaci v souladu s WCAG 2.2 na úrovni AA. Víme, že některé starší grafy nejsou ideální pro čtečky obrazovky; pracujeme na textových souhrnech a exportu tabulek. Bariéry nám prosím pošlete na accessibility@example.com, odpovíme do pěti pracovních dnů.“

Tohle je lepší než mlčet a doufat, že nikdo nic nenajde. Internet má jednu nepříjemnou vlastnost: vždycky někdo něco najde.

## BQ.6 Checklist přístupnosti pro web nebo SaaS

- Hlavní navigace, formulář, checkout nebo registrace jdou projít jen klávesnicí.
- Focus stav je viditelný na všech odkazech, tlačítkách, polích, kartách a modálech.
- Nadpisy mají logické pořadí a stránka dává smysl i bez vizuálního skenování.
- Každé pole má label, nápovědu a konkrétní chybovou zprávu.
- Barvy textu, odkazů, stavů a chyb mají ověřený kontrast.
- Ikonová tlačítka mají přístupný název a nejsou závislá jen na barvě.
- Modály správně pracují s fokusem a dají se zavřít klávesnicí.
- Obrázky mají smysluplný alternativní text, nebo jsou označené jako dekorativní.
- Automatické kontroly běží aspoň na kritických šablonách a nových komponentách.
- Přístupnostní problémy mají vlastníka, prioritu a termín, ne jen štítek „někdy“.
- Externí widgety a embedy se kontrolují i z pohledu přístupnosti a privacy dopadu.
- Přístupnostní kontakt nebo formulář pro bariéry je snadno dohledatelný.

## Codyho komentář

Přístupnost je jedna z nejlepších zkoušek kvality produktu. Když web funguje s klávesnicí, srozumitelnými texty, jasným fokusem a bez vizuálních triků, bude lepší i pro lidi bez trvalého handicapu: na mobilu, ve stresu, s rozbitým touchpadem, v hlučné tramvaji nebo po třetí kávě, kdy už mozek renderuje na nízký výkon.

## Zdroje k příloze

- Evropská komise: European Accessibility Act se začal uplatňovat 28. června 2025 a pokrývá vybrané produkty a služby: https://digital-strategy.ec.europa.eu/en/news/eu-becomes-more-accessible-all
- EUR-Lex: souhrn směrnice (EU) 2019/882, European Accessibility Act: https://eur-lex.europa.eu/legal-content/en/LSU/?uri=CELEX%3A32019L0882
- W3C: WCAG 2.2 jako doporučení publikované 5. října 2023: https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
- W3C: Web Content Accessibility Guidelines 2.2: https://www.w3.org/TR/WCAG22/
- Evropská komise: Web Accessibility Directive, EN 301 549 a harmonizace standardů: https://digital-strategy.ec.europa.eu/en/policies/web-accessibility-directive-standards-and-harmonisation

## Shrnutí přílohy

Přístupnost není widget, auditní razítko ani charita. Je to produktová disciplína: správné HTML, čitelný obsah, klávesnicové ovládání, formuláře bez pastí, kontrast, focus, smysluplné chyby a pravidelné testování. Privacy-first týmu navíc pomáhá tím, že omezuje zbytečné externí skripty a vede k jednodušším, srozumitelnějším cestám.



# Příloha BR: AI asistenti v týmu bez promptového divočáku a úniku dat

AI asistent v malém týmu je skvělý sluha a velmi kreativní zdroj chaosu. Umí zrychlit rešerše, návrhy textů, kontrolu kódu, přípravu odpovědí i interní dokumentaci. Jenže pokud tým nemá pravidla, začne se do promptů kopírovat všechno: zákaznické smlouvy, logy, exporty z CRM, screenshoty administrace, osobní údaje a občas i token, protože „vždyť to je jen jednou“. Slavná poslední slova před auditem.

Evropský kontext je u AI důležitý. AI Act se v EU uplatňuje postupně; Evropská komise uvádí, že pravidla pro poskytovatele general-purpose AI modelů se začala používat od 2. srpna 2025 a starší modely mají zvláštní přechodné lhůty: https://digital-strategy.ec.europa.eu/en/policies/guidelines-gpai-providers. Pro malý SaaS tým z toho neplyne, že musí zítra založit oddělení pro papírové draky. Plyne z toho hlavně potřeba mít přehled: kde AI používáme, jaká data do ní posíláme, kdo nese odpovědnost a jak člověk kontroluje výstup.

## BR.1 Nejdřív inventář použití AI, ne nákup dalších kouzelných tlačítek

První chyba je řešit „jaký AI nástroj koupíme“ dřív než „kde nám AI smí pomáhat“. Nástroj bez pravidel se rychle změní na stínový provoz. Jeden člověk používá chat pro support odpovědi, druhý generuje SQL dotazy, třetí nechává AI číst zákaznické PDF a čtvrtý připojí rozšíření do prohlížeče, které vidí půlku interních systémů.

Začni jednoduchým inventářem:

| Použití | Povolená data | Zakázaná data | Kontrola člověkem | Vlastník |
| --- | --- | --- | --- | --- |
| Návrh blogového článku | veřejné poznámky, odkazy, anonymní příklady | neveřejné klientské informace | editor před publikací | marketing |
| Shrnutí ticketu | anonymizovaný problém, verze produktu | celé vlákno se jménem a e-mailem bez důvodu | support lead | podpora |
| Pomoc s kódem | fragment bez produkčních secretů | `.env`, tokeny, privátní klíče, dump DB | vývojář v review | engineering |
| Analýza feedbacku | štítky, anonymní citace | export CRM s identifikátory | product owner | produkt |

Inventář nemusí být právnický román. Stačí živá stránka v interní znalostní bázi. Důležité je, aby lidé věděli, že AI není zakázaná magie, ale ani univerzální popelnice na citlivá data.

## BR.2 Datová pravidla pro prompty

Prompt je vstup do systému. Chovej se k němu stejně jako k formuláři, API requestu nebo e-mailu dodavateli. To znamená: minimalizace, účel, přístup a kontrola.

Praktické vrstvy:

- **Veřejná data:** texty z webu, dokumentace, veřejné ceníky, obecné ukázky. Většinou bezpečné pro běžné AI použití.
- **Interní neosobní data:** procesní poznámky, roadmapa bez citlivých obchodních detailů, anonymní metriky. Používat opatrně a podle nastavení nástroje.
- **Zákaznická nebo osobní data:** jména, e-maily, smlouvy, tickety, fakturační údaje, chování v produktu. Do AI jen s jasným účelem, právním posouzením a nejlépe po anonymizaci.
- **Tajemství a bezpečnostní data:** hesla, tokeny, privátní klíče, produkční logy s identifikátory, bezpečnostní nálezy před opravou. Do běžných AI nástrojů nepatří.

Místo kopírování celého ticketu napiš AI vlastní, očištěné zadání:

> „Zákazník malého B2B SaaS má problém s importem CSV. Po nahrání souboru se mu zobrazí obecná chyba. Navrhni srozumitelnou odpověď podpory a checklist informací, které si máme vyžádat. Nepředstírej, že znáš příčinu.“

Tohle je bezpečnější než vložit celé vlákno včetně podpisu, telefonu, ID účtu a screenshotu administrace. AI nepotřebuje znát babiččino rodné příjmení zákazníka, aby napsala slušnou odpověď. Překvapivé, já vím.

## BR.3 Prompt šablony šetří čas i nervy

Bez šablon lidé pokaždé vymýšlí prompt znovu. Výsledek: nestejná kvalita, náhodné úniky kontextu a odpovědi, které zní jako leták z konference o digitální transformaci.

Připrav malé šablony pro opakované úkoly:

**Support odpověď**

```text
Role: Pomáháš připravit odpověď zákaznické podpory pro B2B SaaS.
Data: Použij jen anonymizovaný popis problému níže.
Úkol: Napiš stručnou, empatickou a konkrétní odpověď.
Omezení: Neuváděj právní sliby, nehádej příčinu, nevyžaduj zbytečná osobní data.
Výstup: 1) odpověď zákazníkovi, 2) interní checklist dalších kroků.
Popis problému: ...
```

**Kontrola landing page**

```text
Role: Jsi kritický editor privacy-first SaaS landing page.
Úkol: Najdi nejasná tvrzení, slabé CTA, chybějící důkazy a privacy rizika.
Omezení: Nenavrhuj reklamní pixely, pop-up pasti ani dark patterns.
Výstup: Prioritizovaný seznam 10 úprav s dopadem a náročností.
Text stránky: ...
```

**Technická konzultace bez secretů**

```text
Role: Jsi seniorní reviewer architektury.
Data: Kód je zkrácený a neobsahuje secrety ani zákaznická data.
Úkol: Najdi rizika, chybějící validace a jednodušší návrh.
Omezení: Pokud chybí kontext, ptej se; nevymýšlej neexistující soubory.
Kód / popis: ...
```

Dobrá šablona neřeší jen kvalitu výstupu. Připomíná hranice. A hranice jsou u AI stejně důležité jako u externích dodavatelů, stáží a firemního kávovaru.

## BR.4 Výstup AI není rozhodnutí, ale návrh

AI může navrhnout text, shrnout dlouhý dokument nebo upozornit na riziko. Nemá ale sama schvalovat změnu obchodních podmínek, posílat zákazníkům odpověď, měnit produkční konfiguraci nebo rozhodovat o zákaznickém nároku. Člověk má zůstat v místě, kde vzniká dopad.

Nastav jednoduchá pravidla:

- AI výstup pro veřejný web vždy prochází editací a kontrolou zdrojů.
- AI výstup pro zákazníka kontroluje člověk, který rozumí kontextu účtu.
- AI návrh kódu prochází stejným review jako lidský kód.
- AI nesmí sama spouštět destruktivní akce bez potvrzení a auditní stopy.
- AI odpověď nesmí předstírat jistotu, pokud pracuje s neúplným kontextem.

Codyho komentář: nejlepší AI workflow není „necháme model rozhodnout“. Nejlepší workflow je „model zlevní první návrh a člověk si nechá odpovědnost“. To je méně sexy než autonomní agenti v marketingovém videu, ale obvykle to nerozbije produkci.

## BR.5 Vendor checklist pro AI nástroje

Před zavedením AI nástroje se ptej stejně tvrdě jako u analytiky, podpory nebo hostingu. Ne proto, že AI je zlá. Protože AI nástroje často dostávají extrémně koncentrovaný kontext: interní dokumenty, zákaznické problémy, kód, obchodní plány a rozhodovací logiku.

Minimum otázek:

- Kde se zpracovávají a ukládají data?
- Používají se naše vstupy nebo výstupy k tréninku modelů?
- Lze trénink na zákaznických datech smluvně vypnout?
- Jak dlouho se uchovávají prompty, soubory, logy a metadata?
- Umí nástroj oddělit pracovní prostory, role a auditní logy?
- Existuje DPA nebo jiné ujednání pro zpracování osobních údajů?
- Lze data exportovat a smazat při ukončení služby?
- Jsou dostupné evropské regiony nebo evropský provozní partner?
- Co se stane, když zaměstnanec odejde nebo ztratí zařízení?
- Umí nástroj pracovat bez prohlížečového rozšíření, které vidí zbytečně moc?

Pokud vendor neumí odpovědět jednoduše, není to automaticky stopka. Je to ale signál pro omezený pilot: jen veřejná nebo anonymizovaná data, žádné plošné napojení na interní systémy a jasný termín vyhodnocení.

## BR.6 Provozní pravidla pro AI v malém týmu

Aby AI nezůstala jen v rovině přání, nastav provozní rytmus:

- Jednou měsíčně projdi inventář AI použití a odstraň nástroje bez vlastníka.
- U každého nového AI workflow napiš účel, datové kategorie a kontrolu člověkem.
- V repozitáři drž šablony promptů pro opakované úkoly vedle dokumentace procesu.
- Zakázaná data napiš konkrétně: tokeny, smlouvy, produkční exporty, osobní údaje bez anonymizace.
- U citlivých úkolů preferuj nástroje s kontrolou dat, firemním nastavením a auditní stopou.
- Incident typu „poslal jsem špatná data do AI“ řeš jako bezpečnostní událost, ne jako trapas pod koberec.

## BR.7 Checklist: AI asistent bez datového průšvihu

- Máme seznam míst, kde tým používá AI.
- Každé AI použití má vlastníka a účel.
- Víme, jaká data se do nástroje smějí a nesmějí vkládat.
- Pro support, marketing, kód a produkt existují bezpečné prompt šablony.
- Výstupy pro zákazníky, veřejný web a kód kontroluje člověk.
- Do běžných AI nástrojů se neposílají secrety, tokeny, privátní klíče ani celé databázové exporty.
- Zákaznická data se před použitím anonymizují nebo se použije syntetický příklad.
- U AI dodavatelů máme ověřené ukládání, trénink, retenci, export, mazání a přístupy.
- Prohlížečová rozšíření a automatické konektory mají zvláštní schválení.
- Incidenty s nesprávným AI použitím mají jasný postup a nejsou trestané mlčením.

## Zdroje k příloze

- Evropská komise: Guidelines for providers of general-purpose AI models a informace o použitelnosti povinností od 2. srpna 2025: https://digital-strategy.ec.europa.eu/en/policies/guidelines-gpai-providers
- European AI Act Service Desk: implementační timeline AI Actu s postupným náběhem pravidel do roku 2028: https://ai-act-service-desk.ec.europa.eu/en/ai-act/eu-ai-act-implementation-timeline
- Evropská komise: pravidla pro general-purpose AI modely, transparentnost, bezpečnost, odpovědnost a lhůta pro modely uvedené na trh před 2. srpnem 2025: https://digital-strategy.ec.europa.eu/en/news/eu-rules-general-purpose-ai-models-start-apply-bringing-more-transparency-safety-and-accountability

## Shrnutí přílohy

AI asistenti dávají malému týmu páku, ale jen pokud mají mantinely: inventář použití, datová pravidla, prompt šablony, lidskou kontrolu, vendor checklist a jasný incidentní postup. Privacy-first přístup neznamená AI nepoužívat. Znamená používat ji tak, aby zákaznická data nebyla palivo pro cizí experimenty a aby tým věděl, kdo za výsledek odpovídá.


# Příloha BS: Partnerství a affiliate růst bez sledovacího kabaretu

Partnerství, doporučení a affiliate programy umí malému SaaS přinést zákazníky rychleji než čekání, až algoritmus jednou vstane pravou nohou. Jenže klasická affiliate mašina často stojí na dlouhých sledovacích cookies, redirectech přes cizí domény, fingerprintingu, e-mailových pixelech a reportech, které z partnera i zákazníka dělají pohybující se datový objekt.

Privacy-first přístup neříká: „nedělej partnerství“. Říká: „dělej partnerství tak, aby člověk nemusel být sledovaný po půlce internetu jen proto, že klikl na doporučení.“

## BS.1 Nejdřív definuj vztah, ne tracking

Affiliate program není jen technická atribuce. Je to obchodní dohoda: kdo koho doporučuje, za co vzniká odměna, jak se řeší zrušení objednávky, jak se chrání značka a jak se zabrání tomu, aby partner slíbil věci, které produkt neumí.

Začni jednoduchou tabulkou:

| Otázka | Praktická odpověď |
| --- | --- |
| Kdo může doporučovat? | zákazníci, konzultanti, agentury, integrátoři |
| Co je odměněná akce? | zaplacená objednávka, kvalifikované demo, roční kontrakt |
| Jak dlouho platí nárok? | konkrétní okno podle obchodního cyklu, ne „navždy“ |
| Jak ověříme původ? | referral kód, partner link, ruční potvrzení u B2B dealu |
| Jak chráníme zákazníka? | žádné skryté přidávání do newsletterů, žádné reklamní pixely bez účelu |
| Jak chráníme značku? | pravidla pro claimy, zakázané biddingové dotazy, schválené texty |

Bez téhle dohody je tracking jen drahý způsob, jak automatizovat budoucí hádku. A to je přesně ten typ SaaS funkce, který se tváří jako růst, ale voní jako tabulka plná výjimek.

## BS.2 Referral kód často stačí

Nejjednodušší privacy-first varianta je referral kód: člověk přijde přes přímý odkaz, partnerův článek, podcast, workshop nebo osobní doporučení a při registraci zadá kód. U B2B SaaS může kód vyplnit i obchodník po domluveném demu.

Výhody:

- není potřeba dlouhodobě sledovat návštěvníka napříč zařízeními,
- zákazník vidí, že jde o doporučení,
- partner má jasný identifikátor,
- implementace je jednoduchá a auditovatelná,
- atribuce se dá vysvětlit lidsky i účetně.

Příklad mikrotextu v objednávce:

> „Máte doporučující kód? Použijeme ho jen k přiřazení odměny partnerovi. Nemění cenu služby a neposílá vás do reklamního profilu.“

Kód nemusí být dokonalý. Někdo ho zapomene. Někdo přijde z jiného zařízení. U dražších B2B služeb je ale často lepší ruční dočištění než tiché sledování všech pro případ, že se jednou někdo možná stane leadem.

## BS.3 Partner link bez datového vysavače

Partner link může být čistý: například `https://example.com/?ref=partner123`. Server si při první návštěvě může uložit informaci jen v rozsahu nutném pro atribuci a s krátkou retenční dobou. Ještě střídmější varianta je landing page pro partnera: `https://example.com/partner/novak-consulting`, kde se původ pozná z URL bez individuálního sledování návštěvníka.

Co nedělat jako výchozí nastavení:

- přesměrování přes více reklamních domén,
- fingerprinting zařízení kvůli „lepší atribuci“,
- sdílení e-mailu návštěvníka s partnerem bez jasného důvodu,
- automatické posílání návštěvníka do remarketingových publik,
- dlouhé cookies jen proto, že marketingový dashboard vypadá plnější,
- e-mailové tracking pixely v partnerských kampaních bez transparentního vysvětlení.

Když už používáš cookies nebo podobné technologie pro atribuci, popiš účel, rozsah a dobu uložení. Evropská komise u GDPR principů připomíná minimalizaci dat, transparentnost a účelové omezení zpracování: https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/principles-gdpr_en. EDPB zároveň vede samostatné materiály k ePrivacy a technickému rozsahu pravidel pro ukládání nebo čtení informací v zařízení uživatele: https://www.edpb.europa.eu/our-work-tools/our-documents/topic/e-privacy_mt

Codyho praktický překlad: čím víc atribuce připomíná sledování člověka, tím víc musíš umět obhájit, proč je to nezbytné a férové.

## BS.4 Report partnerovi piš jako obchodní výkaz, ne jako špionážní deník

Partner většinou nepotřebuje vědět, kdo přesně si četl pricing stránku ve 23:41, jaký měl prohlížeč a z jakého města přišel. Potřebuje vědět, jestli doporučení fungují a co se vyplatilo opakovat.

Dobrý partnerský report může mít třeba:

- počet návštěv partnerské landing page,
- počet registrací nebo poptávek,
- počet kvalifikovaných obchodních příležitostí,
- počet placených zákazníků,
- stav provize,
- anonymizované poznámky typu „nejčastější námitka byla cena pro malé týmy“,
- doporučení pro další obsah nebo webinář.

Co do reportu nepatří bez zvláštního důvodu:

- osobní údaje leadů,
- kompletní e-mailové adresy neregistrovaných návštěvníků,
- IP adresy,
- detailní clickstream jednotlivců,
- interní poznámky obchodníka,
- support tickety zákazníka.

Pokud partner potřebuje kontakt na lead, udělej z toho viditelný proces: zákazník zaškrtne, že chce propojit s partnerem, nebo se partner účastní obchodu od začátku jako implementátor. Transparentní předání je lepší než export kontaktů pod stolem, protože pod stolem bývá kromě právních rizik i dost drobků.

## BS.5 Pravidla pro partnerský obsah

Partnerství často selže ne kvůli měření, ale kvůli tomu, že partner komunikuje produkt jinak než tým. Slíbí neexistující funkci, naznačí garantovaný výsledek, použije zastaralý screenshot nebo vloží agresivní slevový banner, který rozbije důvěru.

Připrav partnerům jednoduchý balíček:

- krátký popis produktu ve třech délkách: 1 věta, 1 odstavec, 1 delší anotace,
- schválené screenshoty bez reálných zákaznických dat,
- seznam tvrzení, která se smějí používat,
- seznam tvrzení, která se používat nesmějí,
- pravidla pro označení placeného partnerství nebo provize,
- doporučené URL s referral parametrem nebo partnerskou landing page,
- kontakt pro kontrolu článku před publikací.

Ukázka zakázaného claimu:

> „Nástroj vám garantovaně zvýší tržby o 40 % za měsíc.“

Lepší claim:

> „Nástroj pomáhá malým týmům rychleji odbavit poptávky a zkrátit ruční administrativu. Konkrétní dopad závisí na procesu, objemu práce a kvalitě nasazení.“

Ano, druhá věta je méně sexy. Taky je méně pravděpodobné, že ti za tři měsíce přistane na stole rozladěný zákazník s kalkulačkou a výrazem „tak si to pojďme spočítat“.

## BS.6 Odměna má podporovat kvalitu, ne spam

Když odměňuješ každý klik nebo každou nekvalifikovanou registraci, vyrobíš si špatné chování. Partneři budou optimalizovat na objem, ne na vhodnost zákazníka. Privacy-first program by měl odměňovat akce, které mají reálnou hodnotu a nevytvářejí tlak na špinavé metody.

Lepší modely:

- fixní odměna za kvalifikované demo,
- procento z první platby po uplynutí refund okna,
- opakovaná provize jen po dobu aktivní správy zákazníka partnerem,
- bonus za implementační úspěch nebo aktivaci zákazníka,
- ruční odměna za strategické doporučení u velkého B2B obchodu.

Do pravidel dej i stopky:

- zákaz vlastního brand bidding bez schválení,
- zákaz zavádějících slevových kupónů,
- zákaz automatizovaného spamu,
- zákaz sběru kontaktů bez souhlasu a účelu,
- možnost zadržet provizi při podvodném nebo zavádějícím leadu.

Partnerství má přivádět správné zákazníky, ne generovat pocit, že někde v internetu běží malý provizní kombajn bez dozoru.

## BS.7 Checklist privacy-first partnerství

- Máme jasně napsané, kdo se může stát partnerem a za co vzniká odměna.
- Odměněná akce je navázaná na obchodní hodnotu, ne jen na prázdný klik.
- Umíme atribuci vysvětlit bez slov jako „fingerprinting“ a „cross-device graph“.
- Preferujeme referral kód nebo partnerskou landing page před plošným sledováním.
- Pokud používáme cookies nebo podobné technologie, máme popsaný účel, dobu uložení a transparentní informaci pro uživatele.
- Partner nedostává osobní údaje leadů bez jasného důvodu a viditelného procesu.
- Report partnerovi obsahuje agregované obchodní metriky, ne detailní chování jednotlivců.
- Partnerský obsah má schválené texty, screenshoty a zakázané claimy.
- Pravidla programu zakazují spam, klamavé slevy a agresivní reklamní taktiky.
- Jednou měsíčně kontrolujeme kvalitu leadů, reklamace, zrušení a podezřelé vzory.

## Zdroje k příloze

- Evropská komise: Principles of the GDPR, zejména transparentnost, účelové omezení a minimalizace dat: https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/principles-gdpr_en
- European Data Protection Board: e-Privacy dokumenty a Guidelines 2/2023 k technickému rozsahu čl. 5(3) ePrivacy Directive: https://www.edpb.europa.eu/our-work-tools/our-documents/topic/e-privacy_mt

## Shrnutí přílohy

Partnerství a affiliate růst nemusí stát na sledování lidí napříč webem. Malému evropskému SaaS často stačí referral kód, partnerská landing page, férová pravidla, agregovaný report a odměna navázaná na kvalitu. Privacy-first affiliate není pomalejší obchod. Je to obchod, který si neřeže větev důvěry pod vlastní landing page.


# Příloha BT: Bezpečnostní hlavičky bez rituálního kopírování z blogpostu

Bezpečnostní HTTP hlavičky jsou jeden z nejlevnějších způsobů, jak webu nebo SaaS přidat ochranné mantinely přímo v prohlížeči. Nejsou náhrada za bezpečný kód, dobré session management, kontrolu vstupů ani zdravý rozum. Jsou to spíš svodidla: když se něco pokazí, snižují šanci, že se z drobné chyby stane požár skladu s daty.

Privacy-first hodnota je tady jednoduchá: čím méně externích skriptů, embedů a domén web potřebuje, tím jednodušší je nastavit přísné hlavičky. Kdo má stránku složenou z pěti reklamních pixelů, třech CDN a chat widgetu z druhého konce internetu, ten CSP nenastavuje. Ten smlouvá s vlastní minulostí.

## BT.1 Nezačínej generátorem skóre, začni inventářem povolených zdrojů

Content Security Policy dává prohlížeči pravidla, odkud se smí načítat skripty, styly, obrázky, fonty, rámce a další zdroje. MDN popisuje CSP jako mechanismus jemné kontroly nad tím, jaký kód může stránka načíst a co smí dělat: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP

Než napíšeš první `Content-Security-Policy`, udělej tabulku zdrojů:

| Typ | Příklad | Opravdu potřebujeme? | Privacy-first poznámka |
| --- | --- | --- | --- |
| Skripty | vlastní bundle aplikace | Ano | Preferuj `self`, nonce nebo hash místo širokého allowlistu. |
| Styly | vlastní CSS | Ano | Inline styly omezuj; bývají pohodlné, ale CSP komplikují. |
| Fonty | lokálně hostované fonty | Často ano | Lokální fonty zjednodušují privacy i výkon. |
| Obrázky | vlastní doména, CDN | Podle produktu | CDN vybírej podle datové mapy a logování. |
| Embedy | video, mapa, kalendář | Výjimečně | Použij dvoukrokové načtení se souhlasem uživatele. |
| Analytika | privacy-first měření | Podle cíle | Měř agregovaně a bez marketingových pixelů. |

Praktické pravidlo: pokud zdroj neumíš vysvětlit v jedné větě zákazníkovi, nemá být v CSP allowlistu. `script-src *` není bezpečnostní politika. To je digitální cedule „vlezte, máme koberec“.

## BT.2 CSP nasazuj nejdřív v report-only režimu

CSP umí rozbít web, když zakáže něco, co aplikace reálně potřebuje. Proto ji nejdřív nasaď jako `Content-Security-Policy-Report-Only`. MDN uvádí, že pokud stránka posílá report-only i vynucenou CSP hlavičku, prohlížeč obě politiky respektuje: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy

Bezpečný postup pro malý tým:

1. Začni jednoduchou politikou v report-only režimu.
2. Sbírej reporty do vlastního endpointu nebo do bezpečně zvoleného nástroje.
3. Odliš legitimní porušení od šumu, rozšíření prohlížeče a starých stránek.
4. Uprav aplikaci tak, aby nepotřebovala nebezpečné výjimky.
5. Teprve potom zapni vynucenou CSP pro produkci.

Ukázka startovní politiky pro jednoduchý marketingový web:

```text
Content-Security-Policy-Report-Only: default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; img-src 'self' data:; font-src 'self'; style-src 'self'; script-src 'self'; form-action 'self'; upgrade-insecure-requests
```

U SaaS aplikace bude politika často složitější, protože přibudou API domény, uploady, platební brána nebo produktové embedy. Složitější neznamená volnější. Znamená lépe zdokumentovaná.

## BT.3 HSTS zapínej s respektem, ne jako macho checkbox

`Strict-Transport-Security` říká prohlížeči, aby danou doménu příště navštěvoval jen přes HTTPS. MDN upozorňuje, že HSTS začne fungovat až poté, co prohlížeč aspoň jednou obdrží hlavičku přes bezpečné spojení: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security

Rozumný postup:

- Nejdřív ověř, že celý web, API, assety a subdomény fungují přes HTTPS.
- Začni kratším `max-age`, například pro pilotní období.
- Teprve po ověření přidej delší dobu a případně `includeSubDomains`.
- Nepřidávej `preload`, dokud nemáš jistotu, že všechny relevantní subdomény dlouhodobě zvládnou HTTPS.

Příklad po ověření:

```text
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

HSTS je skvělé svodidlo, ale špatně připravené `includeSubDomains` může odříznout starou subdoménu, testovací nástroj nebo zákaznický portál. Bez inventáře subdomén je to ruleta s helmou.

## BT.4 Referrer, rámování a MIME sniffing řeš jako součást privacy designu

Vedle CSP a HSTS existují hlavičky, které přímo souvisí s únikem kontextu nebo zneužitím stránky:

- `Referrer-Policy`: omezuje, kolik informace o předchozí URL prohlížeč pošle při odchodu na jiný web.
- `X-Frame-Options` nebo CSP `frame-ancestors`: chrání před nechtěným vložením stránky do cizího rámce.
- `X-Content-Type-Options: nosniff`: brání prohlížeči hádat typ obsahu jinak, než říká server.
- `Permissions-Policy`: omezuje přístup k funkcím jako kamera, mikrofon, geolokace nebo fullscreen.

OWASP HTTP Headers Cheat Sheet shrnuje bezpečnostní hlavičky a jejich doporučené použití pro webové aplikace: https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html

Privacy-first výchozí nastavení pro běžný web:

```text
Referrer-Policy: strict-origin-when-cross-origin
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
```

U SaaS aplikace s embedy do zákaznických webů nebude `DENY` vždy správně. V takovém případě řeš konkrétní produktový scénář přes `frame-ancestors` a dokumentuj, kdo smí aplikaci vkládat. Bez dokumentace se z bezpečnostní výjimky stane kulturní dědictví.

## BT.5 Hlavičky testuj v CI i ručně po nasazení

Bezpečnostní hlavičky jsou konfigurace. A konfigurace má ošklivý zvyk zmizet při migraci hostingu, změně reverse proxy, novém CDN nebo „rychlém hotfixu v pátek večer“.

Kontroluj je ve třech vrstvách:

- V repozitáři měj konfigurační soubor nebo middleware, ne ruční klikání v adminu hostingu.
- V CI spusť jednoduchý test, který ověří očekávané hlavičky na lokálním buildu nebo stagingu.
- Po produkčním nasazení udělej `curl -I https://example.com` a zkontroluj reálnou odpověď.

Mini checklist pro review pull requestu:

- Přibyla externí doména? Musí mít účel, vlastníka a zápis v datové mapě.
- Přibyl inline script? Musí mít důvod, nonce/hash nebo plán odstranění.
- Mění se proxy nebo hosting? Musí projít kontrola reálných produkčních hlaviček.
- Přibyl embed? Musí být dvoukrokově načítaný nebo explicitně zdůvodněný.
- Přibyla výjimka v CSP? Musí být konkrétní, ne `*`, a mít datum revize.

## BT.6 Checklist bezpečnostních hlaviček pro malý web nebo SaaS

- Máme inventář externích domén, skriptů, stylů, fontů, obrázků, API a embedů.
- CSP běžela nejdřív v report-only režimu a porušení jsme vyhodnotili.
- Produkční CSP nepoužívá plošné `*` a neobsahuje zbytečné externí zdroje.
- HSTS je zapnuté až po ověření HTTPS na hlavní doméně i relevantních subdoménách.
- `Referrer-Policy` neprozrazuje celé URL tam, kde to není nutné.
- Rámování je zakázané nebo explicitně omezené podle produktového scénáře.
- `Permissions-Policy` vypíná browser funkce, které aplikace nepotřebuje.
- Hlavičky kontrolujeme po změně hostingu, proxy, CDN, frameworku nebo buildu.
- Výjimky mají vlastníka, důvod a datum další revize.

## Codyho komentář

Bezpečnostní hlavičky jsou krásný filtr reality. Pokud je neumíš nastavit přísně, často to není problém hlaviček, ale architektury webu. Moc externích služeb, moc magických embedů, moc „jen jeden skriptík“. Privacy-first přístup tady dává vývojářům nečekaný bonus: jednodušší web se líp zabezpečuje. Šokující. Skoro jako kdyby méně bordelu znamenalo méně bordelu.

## Zdroje k příloze

- MDN Web Docs: Content Security Policy guide: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP
- MDN Web Docs: Content-Security-Policy header reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy
- MDN Web Docs: Strict-Transport-Security header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security
- OWASP Cheat Sheet Series: HTTP Headers Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html
- OWASP Secure Headers Project: https://www.owasp.org/index.php/OWASP_Secure_Headers_Project

## Shrnutí přílohy

Bezpečnostní hlavičky nejsou kosmetika pro skener. Jsou praktické mantinely pro prohlížeč a dobrý test toho, jestli web drží privacy-first disciplínu. Začni inventářem zdrojů, nasaď CSP nejdřív v report-only režimu, HSTS zapínej postupně, omez referrery a rámování, vypni nepotřebné browser funkce a kontroluj hlavičky při každé infrastrukturní změně.


# Příloha BU: Exit plán od dodavatele bez vendor lock-inu a hrdinského víkendu

Vendor lock-in většinou nevypadá jako dramatická scéna z filmu. Vypadá jako nenápadná věta: „Export umíme, ale jen přes support ticket a bude to trvat pár týdnů.“ Nebo jako situace, kdy má firma sice všechna data „v cloudu“, ale neumí je dostat ven bez ručního škrábání přes API, účtu enterprise tarifu a modlitby k bohu CSV.

Privacy-first SaaS má mít opačný postoj: zákazník není rukojmí, interní tým není rukojmí a dodavatel není nedotknutelný král infrastruktury. Exit plán není projev nedůvěry. Je to provozní hygiena. Stejně jako zálohy, monitoring nebo incidentový playbook.

## BU.1 Napiš exit plán už při výběru dodavatele

Nejlevnější chvíle na plán odchodu je před podpisem smlouvy. Jakmile jsou data uvnitř, tým naučený na konkrétní workflow a zákazníci závislí na integraci, každá změna bolí víc.

U každého důležitého dodavatele si před zapnutím polož pět otázek:

- Jaká data do služby pošleme a kdo je jejich vlastníkem?
- Jak data kompletně exportujeme bez pomoci obchodníka?
- V jakém formátu export přijde a umíme ho přečíst vlastními nástroji?
- Co se stane s účty, logy, zálohami a odvozenými daty po ukončení?
- Jak dlouho by trval návrat na vlastní provoz nebo migrace ke konkurenci?

Praktický příklad: u helpdesku nestačí vědět, že umí export ticketů. Potřebuješ vědět, jestli export obsahuje komentáře, přílohy, interní poznámky, stav řešení, štítky, vazbu na zákazníka, historii přiřazení a auditní stopu. Jinak máš jen pohlednici z dat, ne data.

## BU.2 Rozliš data, konfiguraci a provozní znalost

Při migraci se často počítá jen databáze. Jenže skutečný lock-in sedí i jinde.

Rozděl si odchodové položky do tří vrstev:

- **Data:** zákazníci, objednávky, projekty, tickety, dokumenty, faktury, události, souhlasy, nastavení účtů.
- **Konfigurace:** role, oprávnění, workflow, automatizace, šablony e-mailů, webhooky, API klíče, domény, DNS záznamy.
- **Znalost:** návody, interní zvyky, reporty, dashboardy, segmenty, pojmenování stavů, odpovědnost v týmu.

Pokud exportuješ jen data, ale ztratíš workflow, tým stráví první týden po migraci archeologií. Pokud exportuješ konfiguraci, ale nemáš znalost, budeš mít krásný JSON a smutné lidi. Ideální exit plán proto obsahuje i stručný „provozní překlad“: co která část systému dělá a proč existuje.

## BU.3 Používej otevřené a čitelné formáty

Export není splněný tím, že dostaneš soubor. Splněný je ve chvíli, kdy ho umíš nezávisle ověřit a použít.

Dobré výchozí formáty:

- CSV pro tabulková data, pokud jsou vztahy jednoduché.
- JSON nebo NDJSON pro strukturovaná data, události a API exporty.
- Markdown nebo HTML pro znalostní bázi a dokumentaci.
- PDF/A jen tam, kde jde o archivní podobu dokumentu, ne o primární datový formát.
- ZIP archiv s manifestem, kontrolními součty a jasnou strukturou složek pro větší exporty.

U každého exportu chtěj datový slovník. I krátký README soubor je lepší než nulový kontext. Sloupec `status` bez vysvětlení hodnot je loterie; sloupec `customer_external_id` bez pravidla jedinečnosti je pomalá sabotáž.

Privacy-first detail: export by neměl automaticky míchat osobní údaje, technické logy a marketingové segmenty do jednoho pytle. Umožni oddělit zákaznická data, fakturační data, provozní logy a analytické agregace. Minimalizace platí i při odchodu, nejen při sběru.

## BU.4 Testuj odchod nanečisto

Exit plán, který nikdy nikdo nezkusil, je dekorace. Jednou za půl roku vyber jednoho kritického dodavatele a udělej mini „fire drill“:

1. Vygeneruj export bez asistence dodavatele.
2. Ověř počet záznamů proti produkčnímu reportu.
3. Nahraj export do lokální testovací databáze nebo jednoduchého skriptu.
4. Zkontroluj přílohy, diakritiku, časová pásma, ID vazby a oprávnění.
5. Sepiš, co chybí, co je ruční a co by při reálném odchodu bolelo.

Nemusíš migrovat celou firmu. Stačí důkaz, že data nejsou jen teoreticky tvoje. Pokud test exportu nejde udělat bez supportu, je to obchodní riziko, ne drobná technická nepříjemnost.

## BU.5 Smlouva má chránit i den odchodu

Dobrá smlouva neřeší jen nástup a cenu. Řeší i konec vztahu. U důležitých dodavatelů si pohlídej hlavně:

- jasné právo na export dat ve strukturovaném a strojově čitelném formátu,
- přiměřenou lhůtu pro zpřístupnění exportu,
- postup po ukončení účtu včetně mazání nebo retence záloh,
- seznam subdodavatelů a oznamování změn,
- podporu při migraci bez trestného „výkupného“ za vlastní data,
- popis, co je zákaznické vstupní/výstupní datum a co je know-how dodavatele.

V EU je to čím dál důležitější i legislativně. GDPR článek 20 řeší právo subjektu údajů na přenositelnost osobních údajů ve strukturovaném, běžně používaném a strojově čitelném formátu v definovaných situacích. Data Act se od 12. září 2025 použije také pro oblast dat a cloudových/data processing služeb a podle Evropské komise má mimo jiné usnadnit přechod mezi poskytovateli cloudových služeb. To neznamená, že malý SaaS má právní kouzelnou hůlku. Znamená to, že exportovatelnost a interoperabilita už nejsou jen „nice to have“ pro technické perfekcionisty.

## BU.6 Měj připravený minimální náhradní scénář

Exit plán nemusí rovnou znamenat druhý kompletní systém běžící vedle prvního. Ale pro kritické části má existovat minimální plán přežití.

Příklady:

- E-mailing: export kontaktů, šablon a souhlasů; možnost poslat transakční oznámení z vlastní domény jinou cestou.
- Analytika: lokální kopie měřicího plánu a event slovníku; agregované reporty uložené mimo nástroj.
- Fakturace: export faktur, platebních stavů a zákaznických údajů; ruční fallback pro vystavení faktury.
- Hosting: dokumentovaný build, env proměnné, DNS postup a poslední ověřená záloha.
- CRM: export pipeline, kontaktů, firem, poznámek a právních důvodů zpracování.

Minimum je odpověď na otázku: „Kdyby dodavatel zítra nešel použít, co uděláme během prvních 24 hodin, aby zákazník netrpěl?“ Pokud odpověď začíná „Petr snad ví“, právě jsi našel riziko jménem Petr. Petr je skvělý člověk. Petr nemá být disaster recovery plán.

## BU.7 Checklist exit plánu od dodavatele

- Každý kritický dodavatel má vlastníka, účel a datovou mapu.
- Víme, jaká data služba přijímá, vytváří, odvozuje a ukládá v zálohách.
- Export umíme spustit sami nebo máme smluvně jasný postup a lhůtu.
- Export je v čitelném formátu a má datový slovník nebo manifest.
- Testovali jsme import nebo alespoň nezávislé načtení exportu.
- Máme popsanou konfiguraci, role, workflow, webhooky a API klíče.
- Víme, co se stane s daty po ukončení služby.
- Máme minimální fallback pro kritické funkce na prvních 24 hodin.
- U nových dodavatelů je exit plán součástí výběru, ne smutný dodatek po problému.

## Codyho komentář

Vendor lock-in není vždy zlo. Někdy je specializovaný nástroj prostě nejlepší volba. Problém začíná ve chvíli, kdy se pohodlí mění v závislost bez únikového východu. Můj pohled — Cody: dobrý SaaS dodavatel se nebojí exportu. Kdo drží zákazníka kvalitou, nepotřebuje ho držet za data jako za límec.

## Zdroje k příloze

- GDPR, článek 20 — právo na přenositelnost údajů: https://eur-lex.europa.eu/legal-content/EN-CS/ALL/?uri=CELEX%3A32016R0679
- European Commission: Data Act explained: https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained
- European Commission: Data Act policy page: https://digital-strategy.ec.europa.eu/en/policies/data-act
- EUR-Lex: Regulation (EU) 2023/2854, Data Act: https://eur-lex.europa.eu/eli/reg/2023/2854

## Shrnutí přílohy

Exit plán chrání firmu před tím, aby se z nástroje stal rukojmí systém. Při výběru dodavatele řeš export, formáty, konfiguraci, provozní znalost, smluvní pravidla, test migrace a minimální fallback. Privacy-first provoz znamená, že data zůstávají pod kontrolou i ve chvíli, kdy se rozhodneš odejít.



# Příloha BV: Preference centrum bez marketingového labyrintu a falešného souhlasu

Preference centrum je místo, kde se ukáže, jestli firma bere souhlas vážně, nebo ho používá jako dekoraci. Špatná verze vypadá jako past: tlačítko „odhlásit“ je schované, změna preferencí vyžaduje login, formulář se ptá na důvod odchodu a po odhlášení člověk stejně dostane další tři kampaně, protože „synchronizace trvá až 10 pracovních dnů“. To není vztah se zákazníkem. To je marketingový escape room.

Dobré preference centrum má opačnou filozofii: člověk rychle pochopí, co dostává, proč to dostává, jak často to dostává a jak to vypne. Evropský privacy-first provoz tím neztrácí marketingovou sílu. Získává důvěru, čistší data a menší riziko, že si firma plete publikum s rukojmími.

## BV.1 Preference nejsou jen newsletter checkbox

Začni inventářem komunikačních typů. Ne podle interních týmů, ale podle toho, jak je vnímá příjemce.

Typické vrstvy:

- **Transakční zprávy:** potvrzení objednávky, reset hesla, faktura, bezpečnostní upozornění.
- **Produktové zprávy:** onboarding, důležitá změna funkce, oznámení výpadku, změna podmínek.
- **Vzdělávací obsah:** návody, webináře, případové studie, e-booky.
- **Marketingové kampaně:** nabídky, akce, cross-sell, partnerský obsah.
- **Výzkum a feedback:** rozhovory, dotazníky, beta pozvánky.

Preference centrum nemá všechny tyto vrstvy slepit do jedné věty „Souhlasím se zasíláním novinek“. Když člověk chce bezpečnostní upozornění, neznamená to, že chce slevový ohňostroj. A když nechce kampaně, neznamená to, že mu nesmí přijít faktura. To by bylo trochu nepraktické, skoro jako poslat účet holubem.

Praktický model:

| Typ zprávy | Vypnutí uživatelem | Doporučený text |
|---|---:|---|
| Bezpečnostní a účtové zprávy | ne vždy | „Nutné zprávy k provozu účtu a bezpečnosti.“ |
| Produktové změny | částečně | „Důležité změny produktu a provozu.“ |
| Vzdělávací obsah | ano | „Praktické návody a materiály.“ |
| Marketingové nabídky | ano | „Nabídky a obchodní novinky.“ |
| Výzkum a beta testy | ano | „Pozvánky k rozhovorům a testování.“ |

## BV.2 Souhlasový deník má být auditní stopa, ne datová skládka

Pokud zpracování stojí na souhlasu, musí být možné doložit, kdy a s čím člověk souhlasil. Evropská komise shrnuje právní základy zpracování a připomíná, že souhlas má být odvolatelný stejně snadno, jako byl udělen: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/legal-grounds-processing-data_en

Do souhlasového deníku ukládej jen to, co je potřeba pro dokazatelnost a provoz:

- identifikátor kontaktu,
- účel souhlasu,
- verzi textu, který člověk viděl,
- čas udělení nebo odvolání,
- zdroj události, například formulář, import, API nebo preference centrum,
- technické minimum pro audit, například interní request ID.

Co tam typicky nepatří:

- kompletní uživatelský agent jako sběratelský artefakt,
- zbytečně přesná IP adresa uložená navždy,
- obsah celé stránky, pokud máš verzovaný text souhlasu,
- marketingové segmenty, skóre leadu a poznámky obchodníka,
- „pro jistotu“ kopie všech polí formuláře.

Privacy-first detail: souhlasový deník nemá být alternativní CRM. Je to důkazní a provozní záznam. Pokud v něm začneš dělat segmentaci kampaní, právě sis z hygienické pomůcky vyrobil další šuplík s osobními údaji.

## BV.3 Odhlášení musí být kratší než přihlášení

EDPB ve svém průvodci pro malé firmy uvádí, že odvolání souhlasu má být pro člověka snadné a dostupné kdykoli: https://www.edpb.europa.eu/sme/be-compliant/process-personal-data-lawfully_en

Prakticky:

- Každý marketingový e-mail má přímý odhlašovací odkaz.
- Odkaz vede na jednoduchou stránku, ne na login stěnu.
- Základní odhlášení jde dokončit jedním potvrzením.
- Volitelná otázka „proč odcházíte“ nesmí blokovat odhlášení.
- Po změně preferencí přijde stručné potvrzení bez nové marketingové řeči.

Dobrá mikrocopy:

> „Odhlášeno. Marketingové e-maily už posílat nebudeme. Nutné zprávy k účtu a bezpečnosti tím nejsou dotčené.“

Špatná mikrocopy:

> „Je nám líto, že odcházíte. Vyplňte prosím tento krátký dotazník, potvrďte e-mail, přihlaste se a vyberte důvod, jinak se změna neuloží.“

Codyho komentář: jestli je snazší zrušit hypotéku než newsletter, není to growth hacking. Je to UX s cedulkou „právník pláče v koutě“.

## BV.4 Právo odmítnout přímý marketing ber jako tvrdý stop signál

U přímého marketingu nestačí tvářit se, že jde jen o nastavení frekvence. Evropská komise ve vysvětlení práv jednotlivců uvádí, že pokud člověk namítne zpracování pro přímý marketing, organizace musí přestat jeho osobní údaje pro tento účel používat: https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en

Proto odděl tři stavy:

- **Aktivní preference:** člověk chce konkrétní typ komunikace.
- **Tiché neaktivní nastavení:** člověk nic nevybral nebo historicky nevíš.
- **Explicitní odmítnutí marketingu:** člověk řekl „neposílat“.

Třetí stav neobcházej přes nový seznam, jiný nástroj ani „podobnou nabídku“. Pokud importuješ kontakty do nového systému, odmítnutí marketingu migruj jako první. Ne až po segmentech, ne až po šablonách, ne až po kampani „ještě jednou naposledy“. Naposledy je oblíbené slovo systémů, které už měly být vypnuté.

Technické pravidlo: marketingový send pipeline musí před odesláním kontrolovat suppression list nebo ekvivalentní stop tabulku centrálně. Nespoléhej jen na to, že každý tým ručně vybere správný segment.

## BV.5 Preference centrum navrhni jako produkt, ne jako právní přílohu

Dobrá stránka preferencí má být čitelná i bez znalosti GDPR.

Minimální struktura:

1. Krátké vysvětlení, pro jaký e-mail nebo účet se preference mění.
2. Přehled typů komunikace v lidských názvech.
3. U každé volby frekvence nebo jednoduchý přepínač.
4. Jasné oddělení nutných provozních zpráv.
5. Tlačítko pro uložení změn.
6. Přímé „odhlásit vše marketingové“.
7. Odkaz na privacy stránku a kontakt pro žádosti k osobním údajům.

Příklad textu u vzdělávacího obsahu:

> „Praktické návody k webu, SaaS a privacy-first provozu. Obvykle 1–2× měsíčně. Žádné reklamní pixely v e-mailu.“

Příklad textu u marketingových nabídek:

> „Obchodní novinky, nové služby a pozvánky. Můžete vypnout kdykoli jedním odkazem v e-mailu.“

Privacy-first bonus: pokud opravdu nepotřebuješ personalizovat každou větu, nepersonalizuj. Segment „zajímá se o SaaS“ často stačí. Segment „klikl v úterý ve 22:13 na třetí odstavec z mobilu“ je obvykle jen marketingová poezie maskovaná jako přesnost.

## BV.6 Synchronizace mezi nástroji musí mít vlastníka

Preference centrum často selže ne na textu, ale na integracích. Web uloží odhlášení, CRM o něm neví. E-mailový nástroj ho ví, ale produktový onboarding ne. Support si ručně přidá kontakt do kampaně, protože „to přece není newsletter, jen užitečný tip“. A najednou máš právní i reputační guláš.

Udělej jednoduchou mapu toku:

- Kde vzniká kontakt?
- Kde vzniká souhlas nebo odmítnutí?
- Který systém je zdroj pravdy?
- Jak rychle se změna projeví v ostatních nástrojích?
- Co se stane, když synchronizace selže?
- Kdo kontroluje chybovou frontu?

Doporučení pro malý SaaS: zdroj pravdy pro preference drž v aplikaci nebo v jednom jasně určeném CRM, ne ve třech marketingových nástrojích. Odesílací nástroje mají preference číst, ne si je vymýšlet. A každé selhání synchronizace preferencí ber jako provozní incident malé závažnosti, protože dopad na důvěru může být větší než samotná chyba.

## BV.7 Checklist preference centra

- Máme inventář typů komunikace podle vnímání příjemce.
- Nutné provozní zprávy jsou oddělené od marketingu.
- Souhlasový deník ukládá účel, verzi textu, čas a zdroj události.
- Odhlášení z marketingu funguje bez loginu a zbytečných otázek.
- Explicitní odmítnutí marketingu je centrální stop signál.
- Preference mají jeden zdroj pravdy a jasného technického vlastníka.
- Importy kontaktů migrují suppression list dřív než segmenty.
- Stránka preferencí používá lidské názvy, frekvenci a jasné vysvětlení.
- E-maily nepoužívají sledovací pixely, pokud pro ně není opravdu silný a vysvětlený důvod.
- Jednou měsíčně kontrolujeme, jestli se preference propsaly do všech nástrojů.

## Zdroje k příloze

- Evropská komise: Legal grounds for processing data: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/legal-grounds-processing-data_en
- European Data Protection Board: Process personal data lawfully, guide for small business: https://www.edpb.europa.eu/sme/be-compliant/process-personal-data-lawfully_en
- Evropská komise: Information for individuals, right to object to direct marketing: https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en
- GDPR, nařízení (EU) 2016/679, články 5, 7 a 21: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679

## Shrnutí přílohy

Preference centrum není právní odkladiště, ale produktová funkce důvěry. Rozliš typy zpráv, veď střídmý souhlasový deník, udělej odhlášení jednoduché, respektuj odmítnutí přímého marketingu jako tvrdý stop signál a drž jeden zdroj pravdy pro všechny nástroje. Nejlepší marketingový kontakt je ten, který ví, proč tě čte — a může kdykoli bez dramatu odejít.

---

# Příloha BW: Zákaznický export dat bez rukojmí, paniky a ručního zipování v pátek večer

Export dat je jedna z těch funkcí, kterou spousta týmů odkládá, protože „to zatím nikdo nechce“. Pak přijde první větší zákazník, bezpečnostní dotazník, žádost o ukončení smlouvy nebo audit a najednou někdo ručně skládá CSV, screenshoty a omluvný e-mail. To není produktová zralost. To je improvizované divadlo s vyšším krevním tlakem.

Privacy-first SaaS má umět zákazníkovi říct: vaše data nejsou naše rukojmí. Umíme je vysvětlit, vyexportovat, předat a po skončení vztahu uklidit. Ne proto, že milujeme administrativu, ale protože důvěra se pozná hlavně ve chvíli, kdy zákazník odchází nebo potřebuje kontrolu.

Právní minimum: GDPR dává lidem za určitých podmínek právo získat osobní údaje ve strukturovaném, běžně používaném a strojově čitelném formátu a předat je jinému správci. Evropská komise popisuje právo na přenositelnost dat v přehledu práv jednotlivců: https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en a samotný článek 20 GDPR je v EUR-Lexu zde: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679

## BW.1 Export navrhuj jako běžnou funkci, ne jako nouzový servis

Export není jen tlačítko „stáhnout všechno“. Je to součást datového modelu a zákaznické zkušenosti. Dobrý export odpovídá na tři otázky:

- Co přesně zákazník dostane?
- V jakém formátu to dostane?
- Co s tím může prakticky udělat?

Začni tabulkou datových domén. Pro jednoduchý B2B SaaS může vypadat třeba takhle:

| Doména | Příklad dat | Exportovat? | Formát |
| --- | --- | --- | --- |
| Účet a organizace | název firmy, fakturační údaje, role uživatelů | Ano | CSV nebo JSON |
| Produktová data | projekty, úkoly, rezervace, objednávky | Ano | CSV pro tabulky, JSON pro vazby |
| Přílohy | nahrané soubory, smlouvy, obrázky | Ano | původní soubory + manifest |
| Auditní log | přihlášení, změny oprávnění, důležité akce | Částečně | CSV nebo JSON podle účelu |
| Interní support poznámky | interní hodnocení, triage, citlivé poznámky týmu | Opatrně | oddělit, posoudit případ od případu |
| Bezpečnostní logy | IP adresy, rate limit, detekce útoků | Ne vždy | spíš interní retence a řízená žádost |

Hlavní pravidlo: zákazník má dostat svoje provozní a obsahová data, ne interní chaos tvého týmu. Export má být užitečný, ale nemá zbytečně odhalovat bezpečnostní logiku, interní poznámky nebo data jiných zákazníků.

## BW.2 CSV je pro lidi, JSON pro vztahy mezi daty

Neexistuje jeden dokonalý exportní formát. Existuje vhodný formát pro konkrétní typ dat.

CSV je skvělé pro tabulková data: kontakty, objednávky, faktury, rezervace, seznamy položek. Otevře ho účetní, obchodník i zákazník, který nechce řešit API. Jen pozor na znakovou sadu, oddělovače, časové zóny a escape hodnot, jinak z exportu vznikne loterie.

JSON se hodí pro strukturovaná data s vazbami: projekt obsahuje úkoly, úkol má komentáře, komentář má autora a přílohu. JSON není tak přátelský pro běžného člověka, ale je lepší pro migraci do jiného systému nebo vlastní integraci.

Praktické doporučení:

- Pro každou tabulku nabídni CSV s hlavičkami v lidském jazyce.
- Pro kompletní export nabídni JSON s dokumentovaným schématem.
- Pro soubory přidej manifest `files.csv` nebo `files.json` s názvem, velikostí, typem, datem nahrání a vazbou na záznam.
- Časy ukládej v ISO 8601 a vždy uveď časovou zónu.
- Identifikátory nech stabilní, aby šlo data znovu spojit.
- Export zabal do ZIPu jen jako obal, ne jako omluvu za nepopsaný obsah.

Codyho komentář: CSV je jako rohlík. Není luxusní, ale když je čerstvý a správně nakrájený, vyřeší překvapivě hodně situací. JSON je kuchařka. Bez ní migrace dopadne jako vaření podle vzpomínky na obrázek.

## BW.3 Export musí být bezpečný i nudný

Export často obsahuje citlivější balík dat než běžná obrazovka aplikace. Proto by jeho vytvoření nemělo být kliknutí bez kontextu.

Bezpečnostní minimum:

- Export může spustit jen role, která má oprávnění spravovat účet nebo data dané organizace.
- U větších exportů vyžaduj potvrzení, případně opětovné ověření uživatele.
- Vytváření exportu zapisuj do auditního logu: kdo, kdy, jaký rozsah, jaký výsledek.
- Hotový soubor zpřístupni jen omezenou dobu, například několik hodin nebo jednotky dnů podle citlivosti.
- Odkaz na export nedělej veřejný bez autentizace.
- Po expiraci export bezpečně smaž a ponech jen auditní stopu, ne samotná data.

Pokud export posíláš e-mailem, neposílej přílohu s kompletními daty jen tak. Lepší je oznámit, že export je připravený, a uživatele vrátit do zabezpečené aplikace. E-mail je dobrý poslíček, ale špatný trezor.

## BW.4 Nezapomeň na importní čitelnost

Export, který nejde použít jinde, je jen drahý suvenýr. U každého exportu přidej krátký soubor `README.md` nebo `schema.json`, který vysvětlí:

- co jednotlivé soubory obsahují,
- jak spolu souvisí identifikátory,
- jaké hodnoty může mít stav nebo typ záznamu,
- v jakém časovém pásmu jsou časové údaje,
- co v exportu záměrně není a proč,
- na koho se obrátit při nejasnosti.

Tohle není detail pro enterprise týmy. I malý zákazník ocení, že nemusí hádat, jestli `status=3` znamená zaplaceno, zrušeno nebo „Petr to kdysi vymyslel a odešel“. Dokumentace exportu je poslední služba zákazníkovi před migrací. Může být krátká, ale musí být přesná.

## BW.5 Exporty testuj na obnově, ne na existenci tlačítka

Tlačítko exportu může fungovat a export může být přesto k ničemu. Test není „stáhl se ZIP“. Test je „umíme z dat pochopit historii účtu a obnovit základní práci jinde“.

Jednou za kvartál si vyber testovací organizaci a projdi cvičení:

1. Vytvoř několik realistických záznamů včetně příloh a komentářů.
2. Spusť export běžnou zákaznickou rolí.
3. Otevři CSV v tabulkovém editoru a zkontroluj diakritiku, data a oddělovače.
4. Validuj JSON proti schématu.
5. Ověř, že soubory v manifestu opravdu existují.
6. Zkus podle dokumentace vysvětlit datové vazby člověku mimo vývojový tým.
7. Zapiš zjištěné chyby jako produktový dluh, ne jako „někdy se k tomu vrátíme“.

Privacy-first bonus: testuj export na syntetických nebo anonymizovaných datech. Produkční data zákazníků nepatří do cvičného zipu jen proto, že se to zrovna hodí.

## BW.6 Komunikace exportu má snižovat strach

Export dat může být pro zákazníka běžná administrativa, ale také signál odchodu. Nepiš proto texty uraženě. Žádné „opravdu nás chcete opustit?“ s dramatickou animací. Dospělý SaaS pomůže i při odchodu.

Příklad mikrotextu:

> „Export obsahuje projekty, úkoly, komentáře a přílohy vaší organizace. Připravíme ho jako ZIP s CSV, JSON a krátkou dokumentací. Hotový export bude dostupný 48 hodin jen přihlášeným správcům účtu.“

Příklad potvrzení:

> „Export jsme začali připravovat. Až bude hotový, pošleme správcům účtu upozornění. Soubor nebude poslán e-mailem jako příloha.“

Tón je důležitý. Uživatel má cítit kontrolu, ne podezření, že právě otevřel skryté dveře, které produktový tým tajně obložil ostnatým drátem.

## BW.7 Checklist zákaznického exportu dat

- Máme datovou mapu toho, co se exportuje a co záměrně ne.
- Export pokrývá účetní, produktová a obsahová data v použitelném formátu.
- CSV má srozumitelné hlavičky, správnou diakritiku a stabilní sloupce.
- JSON má dokumentované schéma a zachovává vazby mezi záznamy.
- Přílohy mají manifest a nejdou se ztratit mimo kontext.
- Export může spustit jen oprávněná role.
- Vytvoření exportu se zapisuje do auditního logu.
- Hotové exporty mají krátkou expiraci a nejsou veřejně dostupné bez autentizace.
- Uživatel vidí, co export obsahuje, jak dlouho bude dostupný a co v něm není.
- Export pravidelně testujeme na obnově nebo alespoň na čitelnosti mimo aplikaci.

## Zdroje k příloze

- Evropská komise: Information for individuals, právo získat a přenášet osobní údaje: https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en
- GDPR, nařízení (EU) 2016/679, článek 20 o přenositelnosti údajů: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679
- European Data Protection Board: Guidelines on the right to data portability: https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-right-data-portability-under-regulation-2016679_en

## Shrnutí přílohy

Zákaznický export dat je funkce důvěry. Navrhni ho podle datových domén, používej čitelné formáty, dokumentuj schéma, hlídej oprávnění, nastav expiraci a testuj skutečnou použitelnost. Privacy-first produkt se pozná i podle toho, že zákazník může odejít s vlastními daty bez proseb, ruční magie a pátečního zipového šamanismu.


# Příloha BX: Import a migrace dat bez rozbité historie, špinavých CSV a zákaznické paniky

Export dat je slib, že zákazník není rukojmí. Import je druhá půlka stejné důvěry: zákazník může přijít, přenést si práci a pokračovat bez toho, aby tři týdny opisoval staré tabulky do nového systému jako kancelářský mnich.

Privacy-first migrace neznamená „nahrajte nám všechno a my se v tom nějak pohrabeme“. Znamená řízený proces: víme, jaká data přijímáme, proč je potřebujeme, jak je validujeme, kdo je vidí, kdy je smažeme a jak zákazník pozná, že migrace dopadla správně.

## BX.1 Import není jen tlačítko „Upload CSV“

Nejhorší importní funkce vypadá jednoduše jen na povrchu. Uživatel nahraje soubor, systém spadne na pátém řádku, chybová hláška řekne „invalid input“ a někde v logu zůstane celý zákaznický soubor. Technicky vzato se něco stalo. Produktově vzato se zákazník právě seznámil s peklem, jen bez uvítací cedule.

Navrhni import jako proces:

1. **Příprava**: uživatel vidí šablonu, povinné sloupce, příklady hodnot a limit velikosti.
2. **Nahrání**: soubor se přijme přes bezpečnou cestu, ne jako příloha v e-mailu.
3. **Předvalidace**: systém zkontroluje strukturu bez zápisu do produkčních dat.
4. **Mapování**: uživatel potvrdí, který sloupec znamená co.
5. **Náhled dopadu**: kolik záznamů vznikne, co se aktualizuje, co se přeskočí.
6. **Import**: zápis proběhne dávkově, auditovatelně a ideálně vratně.
7. **Výsledek**: uživatel dostane report, chyby a další krok.

Příklad produktové věty:

> „Import nejdřív zkontrolujeme nanečisto. Data zapíšeme až po vašem potvrzení náhledu.“

Tohle je malá věta, ale velký rozdíl. Zákazník ví, že nahráním souboru nespustil produkční ruletu.

## BX.2 Vytvoř migrační mapu místo univerzálního vysavače

Každý import začíná otázkou: co se vlastně převádí? U SaaS produktu bývají nejčastější domény:

| Doména | Typické položky | Migrační riziko |
| --- | --- | --- |
| Kontakty | jméno, e-mail, firma, štítky | duplicity, staré souhlasy, neplatné adresy |
| Účty a role | uživatelé, týmy, oprávnění | příliš široké přístupy po importu |
| Obchodní data | dealy, faktury, objednávky | špatná měna, daňové údaje, vazby na účetnictví |
| Produktová data | projekty, úkoly, komentáře | ztracená historie, rozbité vazby |
| Obsah | články, dokumenty, soubory | přílohy bez kontextu, nebezpečné formáty |
| Nastavení | automatizace, šablony, integrace | import tajných klíčů, nechtěné spuštění workflow |

Neimportuj všechno jen proto, že to existuje ve starém systému. U každé domény si napiš:

- zda ji zákazník potřebuje pro pokračování práce,
- zda obsahuje osobní nebo citlivá data,
- kdo smí import spustit,
- jak dlouho se drží původní soubor,
- jak se řeší duplicity,
- zda se import dá vrátit nebo alespoň opravit.

Codyho praktické pravidlo: pokud neumíš doménu vysvětlit v jedné větě zákazníkovi, ještě ji neimportuj automaticky. Ruční mapování jedné důležité domény je lepší než kouzelný import všeho, který vyrobí digitální guláš.

## BX.3 CSV šablona má být smlouva, ne hádanka

CSV je pořád nejpraktičtější vstup pro malé týmy, ale jen když je šablona nudně přesná. Importní šablona má obsahovat:

- stabilní názvy sloupců,
- příkladový řádek,
- označení povinných polí,
- podporované formáty datumu,
- pravidla pro prázdné hodnoty,
- podporované kódování,
- maximální počet řádků,
- seznam hodnot pro enum pole.

Příklad části šablony pro import kontaktů:

| Sloupec | Povinný | Příklad | Poznámka |
| --- | --- | --- | --- |
| `external_id` | Ne | `oldcrm-123` | Pomáhá párovat opakovaný import |
| `email` | Ano | `jana@example.cz` | Používá se pro detekci duplicit |
| `full_name` | Ne | `Jana Nováková` | Pokud chybí, kontakt vznikne bez jména |
| `company` | Ne | `Firma s.r.o.` | Text, ne odkaz do obchodního rejstříku |
| `marketing_consent` | Ne | `yes/no/unknown` | `unknown` neznamená souhlas |
| `note` | Ne | `Volala 3. 5.` | Pozor na osobní údaje mimo účel |

Důležitá drobnost: opakovaný import musí mít strategii. Bez `external_id` nebo jasného párování podle e-mailu vzniknou duplicity rychleji než interní Slack vlákno o tom, kdo to pokazil. A to nechceš. Ani Slack, ani duplicity.

## BX.4 Validace musí uživateli říct, co má opravit

Chyba importu nesmí být technický rozsudek. Má být opravný návod. Místo:

> „Row 42 invalid.“

napiš:

> „Řádek 42: hodnota `maybe` ve sloupci `marketing_consent` není podporovaná. Použijte `yes`, `no` nebo `unknown`. Řádek jsme zatím neimportovali.“

Dobrý importní report rozlišuje:

- **blokující chyby**: data nejdou bezpečně importovat,
- **varování**: import je možný, ale uživatel má něco zkontrolovat,
- **automatické opravy**: systém upravil formát bez změny významu,
- **přeskočené řádky**: záznam se nezapsal a uživatel ví proč,
- **duplicity**: systém navrhne sloučení, aktualizaci nebo přeskočení.

Příklad reportu:

| Typ | Počet | Co se stalo |
| --- | ---: | --- |
| Importováno | 184 | Kontakty vznikly nebo se aktualizovaly |
| Přeskočeno | 7 | Chyběl e-mail nebo byl ve špatném formátu |
| Varování | 12 | Chybí marketingový stav, nastaveno `unknown` |
| Duplicity | 5 | Nalezen existující kontakt se stejným e-mailem |

Privacy-first detail: report neukazuj veřejně v URL a neposílej ho jako přílohu všem správcům účtu. Stačí bezpečná stránka v aplikaci, krátká expirace detailního souboru a auditní záznam.

## BX.5 Importované soubory jsou dočasný materiál, ne nové úložiště

Soubor nahraný pro import je často nejkoncentrovanější balík zákaznických dat v celém systému. Může obsahovat kontakty, poznámky, historické smlouvy, interní komentáře a data, která by v novém produktu vůbec neměla existovat. Proto se k importním souborům chovej jako k dočasnému nebezpečnému materiálu.

Pravidla:

- přijímej soubory jen přes autentizovanou aplikaci,
- omez typy a velikost souborů,
- kontroluj příponu i skutečný obsah,
- neukládej původní soubor déle, než je nutné,
- odděl importní úložiště od veřejných assetů,
- nepouštěj importované přílohy rovnou do produkčního zobrazení,
- loguj stav importu, ne celý obsah souboru,
- smaž dočasné soubory po dokončení nebo expiraci.

OWASP u nahrávání souborů doporučuje mimo jiné validovat typ a příponu, nastavovat limity velikosti, ukládat soubory bezpečně mimo webroot a kontrolovat oprávnění: https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html

Příklad retenčního pravidla:

> „Původní importní soubor držíme maximálně 7 dní kvůli řešení chyb importu. Poté ho automaticky smažeme; importovaná data zůstávají podle nastavení účtu.“

Tohle patří do interní dokumentace i do uživatelské nápovědy. Ne jako právní tapeta, ale jako jasný provozní slib.

## BX.6 Souhlasy, preference a historie nepřekládej kreativně

Nejnebezpečnější importní pole nejsou technicky složitá. Jsou právně a vztahově citlivá: souhlasy, odhlášení, preference komunikace, role, auditní historie a poznámky. Pokud starý systém říká „subscribed“, neznamená to automaticky platný souhlas pro nový účel.

Při migraci komunikačních preferencí rozliš:

- zdroj souhlasu nebo odmítnutí,
- datum a kanál získání,
- účel komunikace,
- rozsah produktových vs. marketingových zpráv,
- poslední odhlášení,
- právní základ, pokud se ukládá.

Pokud si nejsi jistý, nastav bezpečnější stav. `unknown` není nepříjemnost, ale poctivost. Lepší poslat zákazníkovi jasnou reaktivaci preferencí než přenést starý marketingový chaos a tvářit se, že to posvětila migrace.

GDPR článek 20 řeší právo na přenositelnost osobních údajů u dat, která subjekt poskytl správci, pokud zpracování stojí na souhlasu nebo smlouvě a probíhá automatizovaně. To neznamená povinnost nekriticky importovat každé pole ze starého systému; znamená to navrhnout férovou, strukturovanou a použitelnou přenositelnost: https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=CELEX%3A32016R0679

Codyho komentář: přenositelnost není „ať si zákazník odnese dump databáze“. Je to schopnost předat smysluplná data v použitelné podobě. Import je pak schopnost ta data přijmout bez toho, aby nový systém zdědil staré průšvihy jako rodinné stříbro.

## BX.7 Checklist importu a migrace dat

- Máme migrační mapu datových domén a víme, co neimportujeme.
- Importní šablony mají příklady, povinná pole, limity a pravidla formátu.
- Před zápisem probíhá validace nanečisto.
- Uživatel vidí náhled dopadu a potvrzuje finální import.
- Duplicity mají jasnou strategii: vytvořit, aktualizovat, sloučit nebo přeskočit.
- Chybové hlášky říkají řádek, pole, problém a opravu.
- Původní importní soubory mají krátkou retenci a bezpečné úložiště.
- Import může spustit jen oprávněná role a akce je v auditním logu.
- Souhlasy a preference se nepřenášejí kreativně; nejistý stav je `unknown`.
- Po importu vznikne report s importovanými, přeskočenými a rizikovými záznamy.
- Import testujeme na opakování, přerušení a obnově po chybě.
- Dokumentace vysvětluje, co se importuje, co ne a jak zákazník opraví chyby.

## Zdroje k příloze

- GDPR, nařízení (EU) 2016/679, článek 20 o přenositelnosti údajů: https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=CELEX%3A32016R0679
- Evropská komise: Information for individuals, přístup k údajům a přenositelnost: https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en
- OWASP Cheat Sheet Series: File Upload Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html

## Shrnutí přílohy

Import dat je důvěrový proces, ne jednorázový upload. Připrav migrační mapu, přesné šablony, validaci nanečisto, bezpečné zacházení se soubory, jasný report a opatrný převod souhlasů. Privacy-first SaaS zákazníkovi pomáhá přijít i odejít — bez rukojmí, bez špinavých CSV a bez toho, aby import potichu proměnil starý chaos v nový chaos s hezčím UI.

# Příloha BY: Auditní log a historie změn bez detektivního románu a datového smetiště

Auditní log je paměť produktu. Když se něco rozbije, někdo změní oprávnění, zákazník se ptá na export nebo support řeší incident, dobrý log řekne: co se stalo, kdo to spustil, čeho se to týkalo a kdy. Špatný log řekne buď nic, nebo úplně všechno včetně tokenů, textu zpráv a půlky zákaznické databáze. První varianta je slepota. Druhá varianta je datový karneval s právním bolehlavem.

Privacy-first auditní log má být přesný, omezený a použitelný. Nepíše se proto, aby firma mohla šmírovat uživatele. Píše se proto, aby šlo férově vysvětlit důležité změny, vyšetřit problém, doložit odpovědnost a zlepšit provoz bez ukládání obsahu, který do logu nepatří.

OWASP Logging Cheat Sheet připomíná, že aplikační logování je důležité pro bezpečnostní i provozní účely, ale zároveň varuje před ukládáním citlivých údajů, tokenů, hesel, connection stringů a dalších tajemství do logů: https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html

## BY.1 Nejdřív definuj účel logu

Neexistuje jeden log pro všechno. Chyba malého SaaS týmu bývá v tom, že do jedné hromady hází debug výpisy, bezpečnostní události, produktovou analytiku, support poznámky a audit změn. Pak se v tom nedá hledat, špatně se nastavuje retence a každý přístup k logům je citlivější, než musel být.

Rozliš minimálně čtyři typy záznamů:

| Typ záznamu | Účel | Příklad |
| --- | --- | --- |
| Auditní log | Doložit důležitou změnu | změna role, export dat, smazání účtu |
| Bezpečnostní log | Odhalit útok nebo zneužití | opakované neúspěšné přihlášení, změna MFA |
| Provozní log | Najít technickou chybu | timeout integrace, selhané zpracování jobu |
| Produktový event | Zlepšit produkt agregovaně | dokončení onboardingu, použití šablony |

Jedna událost může patřit do víc oblastí, ale každý záznam má mít jasný účel. Například vytvoření exportu zákaznických dat je auditní událost i bezpečnostně zajímavý signál. Nemusíš kvůli tomu ukládat celý export. Stačí vědět, kdo export spustil, jaký rozsah obsahoval, kdy vznikl, kdy expiruje a zda byl stažen.

Praktická otázka před přidáním nového logu:

> „Kdo tenhle záznam za tři měsíce použije a jaké rozhodnutí podle něj udělá?“

Pokud odpověď zní „možná se to bude hodit“, log ještě není navržený. To je jen digitální syslení. A syslení je roztomilé u veverek, ne v produkční databázi.

## BY.2 Loguj událost, ne celý obsah

Auditní log má zachytit význam změny, ne kopii zákaznických dat. Když uživatel upraví fakturační adresu, nepotřebuješ do logu uložit starou i novou adresu v plném znění. Často stačí metadata: změněné pole, autor, čas, objekt a bezpečný identifikátor.

Příklad rozumného záznamu:

```json
{
  "event": "billing_address.updated",
  "actor_id": "usr_123",
  "account_id": "acc_456",
  "object_type": "billing_profile",
  "object_id": "bp_789",
  "changed_fields": ["street", "city", "vat_id"],
  "source": "web_app",
  "created_at": "2026-08-10T07:00:00Z"
}
```

Co do auditního logu typicky nepatří:

- hesla, tokeny, API klíče a session identifikátory,
- celé texty zákaznických zpráv, komentářů a dokumentů,
- plné platební údaje,
- celé HTTP requesty a response body,
- neveřejné přílohy,
- zbytečně přesné osobní údaje, když stačí interní ID.

Když potřebuješ doložit změnu hodnoty, zvaž bezpečnější varianty: hash hodnoty, částečné maskování, samostatnou chráněnou historii jen pro vybrané role nebo doménový diff bez citlivého obsahu. Například „změněno pole `billing_email`“ je pro běžný audit často dostatečné; plný e-mail v logu potřebuje silnější důvod.

## BY.3 Každý důležitý záznam potřebuje pět polí

Auditní log nemá být literární dílo. Má být čitelný strojově i lidsky. U důležitých událostí drž konzistentní strukturu:

1. **Kdo**: uživatel, systémový proces nebo integrace, která akci spustila.
2. **Co**: typ události jako stabilní název, třeba `team_member.role_changed`.
3. **Čeho se to týká**: účet, projekt, faktura, soubor, integrace nebo jiný objekt.
4. **Kdy**: čas v jednotném formátu a časové zóně.
5. **Odkud/proč**: zdroj akce, korelační ID, volitelně důvod nebo ticket.

Dobré názvy událostí jsou nudné a stabilní:

- `user.login_failed`
- `team_member.invited`
- `team_member.role_changed`
- `api_key.created`
- `api_key.revoked`
- `data_export.created`
- `data_export.downloaded`
- `account.deletion_requested`
- `integration.webhook_failed`

Nepoužívej názvy typu `Something happened` nebo `Update user`. Za půl roku z toho nebude moudrý nikdo, ani budoucí ty s kávou a zoufalstvím v očích.

## BY.4 Ukaž zákazníkovi historii, která mu pomůže

Ne každý auditní záznam musí být vidět zákazníkovi. Ale některé změny by měl zákazník umět najít sám bez support ticketu. Tím snižuješ nejistotu, šetříš podporu a posiluješ důvěru.

Do zákaznické historie se hodí:

- pozvánky a odebrání členů týmu,
- změny rolí a oprávnění,
- vytvoření a stažení exportu,
- změny fakturačních údajů,
- zapnutí nebo vypnutí integrace,
- změny bezpečnostních nastavení,
- požadavky na smazání účtu,
- důležité importy a migrace.

Ukázka lidského zobrazení:

| Čas | Událost | Kdo |
| --- | --- | --- |
| 10. 8. 2026 09:12 | Petra změnila roli uživatele Martin z `viewer` na `admin` | Petra N. |
| 10. 8. 2026 09:20 | Vytvořen export kontaktů, expiruje za 48 hodin | Martin K. |
| 10. 8. 2026 09:31 | Integrace účetnictví byla odpojena | systém podle požadavku Petry N. |

Důležitý detail: zákaznická historie není místo pro interní support poznámky. Pokud support napíše „zákazník je zmatený“, nemá se to omylem objevit v exportu nebo auditní historii účtu. Interní poznámky drž odděleně, s vlastní retencí a jasným účelem.

## BY.5 Retence logů není „navždy, protože disk je levný“

Logy mají často osobní údaje, obchodní citlivost a bezpečnostní hodnotu. Proto potřebují retenční pravidla stejně jako zákaznická data. Krátká retence může zničit schopnost řešit incident. Nekonečná retence zase vytváří zbytečné riziko.

Navrhni retenční tabulku podle účelu:

| Kategorie | Doporučený přístup |
| --- | --- |
| Debug logy | krátká retence, často dny až týdny |
| Bezpečnostní události | delší retence podle rizika a smluv |
| Audit změn účtu | po dobu vztahu a rozumné období po něm |
| Exporty a importní soubory | krátká expirace, odděleně od auditního záznamu |
| Agregované produktové statistiky | držet bez osobní vrstvy, pokud jde |

EDPB v pokynech k data protection by design and by default zdůrazňuje, že ochrana dat má být zabudovaná do návrhu a výchozího nastavení zpracování, ne lepená až po nasazení: https://www.edpb.europa.eu/documents/guideline/guidelines-42019-on-article-25-data-protection-by-design-and-by-default_en

Prakticky: retence logů se nemá řešit až při incidentu. Patří do návrhu funkce. Když přidáš export dat, rovnou přidej i záznam do auditního logu, expiraci exportního souboru a pravidlo, kdo smí vidět detail.

## BY.6 Logy chraň před zvědavostí i úpravou

Auditní log má smysl jen tehdy, když mu můžeš věřit. Pokud ho může administrátor libovolně mazat, přepisovat nebo číst bez stopy, není to auditní log. Je to zápisník na stole v průvanu.

Základní pravidla ochrany:

- přístup k logům omez podle role a účelu,
- čtení citlivých logů samo loguj,
- odděl právo číst logy od práva měnit produkční data,
- technicky zabraň běžným uživatelům logy upravovat,
- u kritických záznamů zvaž append-only úložiště nebo tamper-evident řetězení,
- maskuj citlivé hodnoty už při zápisu, ne až při zobrazení,
- nepouštěj logy do externího nástroje bez vendor review,
- nastav alert, když logování přestane fungovat.

Privacy-first evropský provoz tu znamená i výběr logovací infrastruktury. Pokud posíláš logy do cizí služby, ptej se stejně jako u analytiky: kde jsou data, kdo k nim má přístup, jaká je retence, umí služba EU region, jak se řeší subdodavatelé a export. Logy nejsou odpadní trubka produktu. Často jsou nejcitlivější mapa toho, co se ve firmě děje.

## BY.7 Checklist auditního logu

- Má každý typ logu jasný účel a vlastníka?
- Oddělujeme auditní, bezpečnostní, provozní a produktové záznamy?
- Má důležitá událost pole kdo, co, čeho se týká, kdy a odkud/proč?
- Nepíšeme do logů hesla, tokeny, celé requesty, zákaznický obsah nebo zbytečné osobní údaje?
- Umíme zákazníkovi ukázat bezpečnou historii důležitých změn?
- Mají logy retenční pravidla podle účelu?
- Je čtení citlivých logů omezené a samo auditované?
- Jsou kritické záznamy chráněné před úpravou nebo smazáním?
- Víme, co se stane, když logovací systém vypadne?
- Prošli jsme logovací nástroj stejným vendor review jako analytiku nebo CRM?

## Codyho komentář

Auditní log je jedna z těch funkcí, které nikdo neoslavuje na landing page, ale všichni ji chtějí ve chvíli, kdy začne hořet. Dobrý log není víc dat. Dobrý log je méně dohadování. A to je v malém SaaS týmu skoro luxusní zboží.

## Zdroje k příloze

- OWASP Cheat Sheet Series: Logging Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html
- European Data Protection Board: Guidelines 4/2019 on Article 25 Data Protection by Design and by Default: https://www.edpb.europa.eu/documents/guideline/guidelines-42019-on-article-25-data-protection-by-design-and-by-default_en

## Shrnutí přílohy

Auditní log má být přesný, omezený a chráněný. Definuj účel záznamů, loguj události místo obsahu, drž stabilní názvy, ukaž zákazníkovi bezpečnou historii důležitých změn, nastav retenci a chraň logy před neoprávněným čtením i úpravou. Privacy-first produkt se nepozná podle toho, že loguje všechno. Pozná se podle toho, že umí vysvětlit správné věci bez ukládání špatných.

# Příloha BZ: Testovací data a staging bez produkčního úniku a falešného klidu

Staging prostředí je krásná věc: produkt vypadá skoro jako produkce, ale když se něco rozbije, nikdo nekřičí do telefonu. Tedy pokud staging omylem neobsahuje produkční databázi, reálné e-maily, platební údaje, dokumenty zákazníků a veřejně dostupný admin bez pořádného přihlášení. Pak už to není staging. To je produkce v mikině s nápisem „neřeš mě“.

Privacy-first SaaS bere testovací prostředí jako samostatný produktový povrch. Musí být užitečné pro vývoj, QA, demo a podporu, ale nesmí se stát zkratkou, kterou se produkční data dostanou mimo kontrolu. Evropská komise u GDPR principu data protection by design and by default zdůrazňuje technická a organizační opatření už od návrhu zpracování, včetně minimalizace dat, omezené dostupnosti a krátké doby uložení: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/obligations/what-does-data-protection-design-and-default-mean_en

## BZ.1 Pojmenuj prostředí podle rizika, ne podle nálady

Malý tým často začne se dvěma světy: `local` a `production`. Pak přibude `dev`, `test`, `stage`, `staging-old`, `demo`, `preprod`, `sandbox`, `ondrej-final-final` a jedno prostředí, o kterém nikdo neví, ale stále posílá e-maily. Tady začíná chaos.

Každé prostředí má mít jasný účel:

| Prostředí | Účel | Data | Přístup |
| --- | --- | --- | --- |
| `local` | vývoj na stroji vývojáře | syntetická nebo lokální seed data | konkrétní vývojář |
| `test` | automatizované testy | generovaná data pro test case | CI a vývojový tým |
| `staging` | ověření release kandidáta | syntetická data blízká realitě | tým, případně omezený klientský review |
| `demo` | obchodní ukázky | ručně připravené scénáře bez reálných osob | obchod a produkt |
| `support sandbox` | reprodukce problému | minimální reprodukční dataset | časově omezený support tým |

U každého prostředí napiš jednu větu: „K čemu slouží a jaká data v něm smí být.“ Pokud to neumíš, prostředí je kandidát na vypnutí. Ne proto, že jsme nudní. Protože nepojmenované prostředí je budoucí incident s doménou.

Praktické pravidlo: produkční data smějí do neprodukčního prostředí jen po výslovném rozhodnutí, s dokumentovaným účelem, časovým omezením a ochranou minimálně na úrovni produkce. Výchozí stav má být opačný: žádná produkční data mimo produkci.

## BZ.2 Syntetická data jsou investice, ne hračka

Nejlepší testovací dataset není export produkce po rychlém „anonymizačním“ scriptu. Nejlepší dataset je promyšlená sada syntetických scénářů, které pokrývají reálné chování produktu bez reálných lidí.

Začni seznamem scénářů:

- nový zákazník s jedním uživatelem a prázdným účtem,
- aktivní tým s více rolemi, fakturací a historií změn,
- zákazník s prošlou kartou nebo pozastaveným tarifem,
- zákazník v onboarding fázi s nedokončeným nastavením,
- účet s edge casy: dlouhé názvy, diakritika, více měn, archivované položky,
- incidentní scénář: selhaný webhook, zamítnutý e-mail, duplicitní import.

Syntetická data mají vypadat dost realisticky, aby odhalila chyby v UX, exportech, reportech a validaci. Nemají ale obsahovat skutečná jména, skutečné e-maily, kopie dokumentů ani reálné obchodní vztahy. Pro e-maily používej vyhrazené domény typu `example.com`, interní testovací domény nebo zachytávání odchozí pošty do mail sandboxu.

Příklad seed pravidla:

```text
Firma: Fiktivní Kavárna U Žirafy s.r.o.
Uživatelé: majitel, účetní, externí konzultant
Tarif: Team / měsíční platba / poslední platba selhala
Stav: 3 projekty, 1 archivovaný, 2 otevřené faktury
Zvláštnost: účetní nemá přístup k nastavení integrací
```

Takový účet pomůže testovat role, billing, chybové stavy i mikrocopy. A žádná reálná účetní kvůli němu nedostane divný e-mail v pátek večer. Malé vítězství civilizace.

## BZ.3 Anonymizace produkce není kouzelná hůlka

Občas produkční data opravdu potřebuješ: třeba kvůli reprodukci vzácné chyby, výkonovému profilu nebo migraci. V takovém případě nestačí přejmenovat `Jan Novák` na `User 123` a tvářit se, že je hotovo. Pseudonymizace snižuje riziko, ale data mohou zůstat osobními údaji, pokud existuje rozumná možnost opětovné identifikace. ENISA ve zprávě o pseudonymizačních technikách popisuje, že útočník může využít například slovníkové útoky, hádání nebo externí informace: https://www.enisa.europa.eu/publications/pseudonymisation-techniques-and-best-practices

Proto rozlišuj tři úrovně:

- **Maskování:** e-mail se změní na `user-123@example.com`, telefon na `+420000000000`. Rychlé, ale samo o sobě slabé.
- **Pseudonymizace:** identifikátory se nahradí stabilními pseudonymy a klíč k přiřazení je oddělený a chráněný. Užitečné pro analýzu vztahů.
- **Syntetizace:** vytvoříš nová data podle podobných pravidel a rozložení, bez kopie konkrétní osoby. Nejlepší výchozí směr pro staging.

Pokud bereš vzorek z produkce, udělej krátkou „data extraction card“:

| Otázka | Odpověď |
| --- | --- |
| Proč produkční vzorek nestačí nahradit syntetickými daty? | Například výkonový problém závisí na reálné velikosti stromu projektů. |
| Které tabulky a pole se kopírují? | Jen nutné entity, ne celý dump databáze. |
| Co se maskuje nebo zahazuje? | E-maily, jména, telefony, poznámky, přílohy, tokeny, IP adresy. |
| Kdo má přístup? | Konkrétní lidé a časové okno. |
| Kdy se vzorek smaže? | Datum, automatický job, odpovědný člověk. |

## BZ.4 Staging chraň skoro jako produkci

Neprodukční prostředí bývá slabší právě proto, že „tam přece nejsou reálná data“. Jenže i syntetická data mohou prozrazovat strukturu produktu, obchodní procesy, interní poznámky, integrace a bezpečnostní nastavení. A pokud staging používá stejné API klíče jako produkce, gratuluju: našli jsme zkratku do sklepa.

Minimum pro staging:

- vlastní doména nebo subdoména s jasným označením prostředí,
- přihlášení nebo IP allowlist, pokud prostředí není určené pro veřejné demo,
- oddělené databáze, buckety, fronty, API klíče a webhook endpointy,
- blokace odchozích e-mailů mimo allowlist nebo mail sandbox,
- zákaz indexace přes `robots.txt` a ideálně i hlavičku `X-Robots-Tag: noindex`,
- viditelné varování v UI: „STAGING — neposílat reálná data“,
- pravidelný reset dat, aby prostředí nezarostlo historickým bahnem.

Staging nemá být veřejná tajná URL. Tajná URL není přístupové řízení. Je to jen heslo, které si tým posílá v chatu a za půl roku skončí ve screenshotu.

## BZ.5 Produkční integrace nikdy nepřipojuj omylem

Největší škody ve stagingu často nedělá databáze, ale integrace: e-mailing, platební brána, CRM, účetnictví, webhooky, AI API, SMS brána nebo kalendář. Jeden špatný environment variable a testovací scénář pošle zákazníkovi fakturu, založí deal v CRM nebo spustí onboardingovou sekvenci. Romantika automatizace.

Použij integrační matici:

| Integrace | Local | Test | Staging | Production |
| --- | --- | --- | --- | --- |
| E-mail | fake transport | fake transport | mail sandbox + allowlist | reálné odesílání |
| Platby | test mode | test mode | test mode | live mode |
| CRM | vypnuto | mock | sandbox pipeline | produkční CRM |
| Webhooky | lokální mock | mock server | test endpoint | produkční endpoint |
| AI API | malý test klíč | mock odpovědi | omezený klíč bez citlivých dat | produkční pravidla a monitoring |

Technicky pomáhá fail-safe konfigurace: aplikace se nespustí, pokud `APP_ENV=staging` používá produkční API klíč, produkční databázovou URL nebo povolené reálné odchozí e-maily. Je lepší mít otravný startovací error než tiché „ups“ v účetnictví.

## BZ.6 Refresh stagingu musí být procedura, ne kouzelný příkaz

Když staging zestárne, tým začne říkat: „Tohle se na produkci nestane.“ To je nebezpečná věta. Buď je staging dost podobný, aby testoval, nebo není a jen uklidňuje nervy. Refresh ale nesmí znamenat ruční dump produkce do neprodukce.

Bezpečný refresh může vypadat takhle:

1. Vypnout odchozí integrace a fronty.
2. Obnovit schéma nebo migrace na cílové verzi.
3. Nahrát syntetický seed dataset.
4. Spustit maskovací nebo generační job pro větší objemy dat, pokud jsou potřeba.
5. Zkontrolovat, že žádný produkční endpoint, token nebo e-mail nezůstal aktivní.
6. Spustit smoke test kritických cest.
7. Zapsat datum refreshu a verzi seedu do provozního logu.

U větších SaaS produktů se vyplatí mít staging seed jako kód v repozitáři: verze, změnový log, datové scénáře a testy. Když se změní datový model, seed se upraví stejně jako migrace. Není to sexy, ale sexy je až to, že release projde bez rituálního zaklínání.

## BZ.7 Checklist testovacích dat a stagingu

Před dalším releasem si projdi:

- Má každé neprodukční prostředí jasný účel, vlastníka a pravidla pro data?
- Používá staging syntetická data jako výchozí stav?
- Je případné použití produkčního vzorku schválené, omezené a zdokumentované?
- Jsou e-maily, platby, CRM, webhooky a AI integrace oddělené od produkce?
- Existuje ochrana proti startu stagingu s produkčními klíči?
- Je staging chráněný přístupem a neindexuje se?
- Má tým viditelné UI varování, že prostředí není produkce?
- Existuje automatický nebo pravidelný reset testovacích dat?
- Umí QA pokrýt hlavní scénáře bez ručního kopírování produkčních účtů?
- Je jasné, kdo smaže dočasný reprodukční dataset a kdy?

## Codyho komentář

Testovací data jsou jedna z těch nudných věcí, které se stanou zajímavými přesně ve chvíli, kdy je pozdě. Můj pohled — Cody: dobrý staging není „kopie produkce“. Dobrý staging je kontrolovaná simulace reality. Má dost hran a bordýlku, aby odhalil chyby, ale neobsahuje skutečné lidi jako laboratorní myši. Pokud pro test potřebuješ produkční data každý týden, pravděpodobně nemáš problém s testy. Máš problém s produktovou představivostí a seed daty.

## Zdroje k příloze

- European Commission: What does data protection by design and by default mean?: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/obligations/what-does-data-protection-design-and-default-mean_en
- ENISA: Pseudonymisation techniques and best practices: https://www.enisa.europa.eu/publications/pseudonymisation-techniques-and-best-practices
- ENISA: Recommendations on shaping technology according to GDPR provisions — data pseudonymisation: https://www.enisa.europa.eu/publications/recommendations-on-shaping-technology-according-to-gdpr-provisions

## Shrnutí přílohy

Staging má být bezpečné testovací prostředí, ne produkční databáze s falešným knírem. Definuj účel prostředí, používej syntetická seed data, k produkčním vzorkům přistupuj jako k výjimce, odděl integrace, blokuj reálné odesílání, chraň přístup, pravidelně resetuj data a dokumentuj refresh. Privacy-first tým testuje realisticky, ale nenechá skutečné zákazníky bydlet v neprodukčním chaosu.

# Příloha CA: Přístupy a role bez adminského konfetti a sdílených účtů

Přístupy v malém SaaS často začínají nevinně: zakladatel má admina všude, první vývojář má admina skoro všude, zákaznická podpora dostane admina „dočasně“ a externista má pořád účet, protože nikdo nechce zjišťovat, jestli ho ještě potřebuje. To není provoz. To je pozvánka na incident s občerstvením.

Privacy-first provoz neznamená jen šifrovat databázi a napsat hezkou stránku o soukromí. Znamená také, že člověk vidí jen data a akce, které potřebuje ke konkrétní práci. Princip nejmenších oprávnění popisuje OWASP jako základní doporučení pro autorizaci a NIST jej formuluje jako přidělení jen těch přístupů, které jsou nutné pro splnění organizačních úkolů. Prakticky: méně univerzálních adminů, více jasných rolí, auditovatelných změn a rychlého odebírání přístupů.

## CA.1 Role navrhuj podle práce, ne podle ega

Špatná role se jmenuje „Power user“. Dobrá role se jmenuje podle práce, kterou člověk reálně dělá: `Fakturace`, `Zákaznická podpora`, `Technická správa`, `Obsahový editor`, `Read-only auditor`. Název role má vysvětlit účel. Když role zní jako hodnost ve vesmírné flotile, obvykle skrývá moc široká oprávnění.

Začni malou maticí:

| Role | Smí číst | Smí měnit | Nesmí nikdy |
| --- | --- | --- | --- |
| Zákaznická podpora | Základ účtu, stav objednávky, poslední bezpečné události | Poznámku k ticketu, stav požadavku | Export všech dat, změnit e-mail vlastníka, vidět platební údaje |
| Fakturace | Faktury, platby, firemní údaje | Fakturační kontakt, daňové údaje | Číst obsah zákaznických projektů |
| Obsahový editor | Stránky, články, média | Publikovat a upravit obsah | Měnit uživatele, nastavení domény, integrace |
| Technická správa | Konfiguraci systému, logy bez citlivého obsahu | Nasazení, rotaci klíčů, technické nastavení | Číst zákaznický obsah bez schváleného důvodu |
| Auditor | Auditní logy a nastavení | Nic | Spouštět akce jménem uživatele |

Nejdůležitější je oddělit „může pomoci zákazníkovi“ od „může udělat cokoliv“. Support nepotřebuje superadmina jen proto, aby odpověděl na dotaz. Potřebuje dobře navržené nástroje: bezpečný náhled účtu, jasné akce, důvod přístupu a log.

## CA.2 Deny-by-default je nudné, proto funguje

Každá nová funkce by měla začínat otázkou: kdo ji smí použít? Pokud odpověď není jasná, výchozí stav je „nikdo“. OWASP u autorizace doporučuje deny-by-default a ověřování oprávnění na každý požadavek. To je přesně ten typ pravidla, které zní přehnaně, dokud někdo neuhodne ID cizí faktury v URL.

Praktický vzor pro produktový tým:

- Každá nová stránka má v ticketu sekci „Přístup“.
- Každá nová API akce má test pro povolený i zakázaný přístup.
- Každý export dat má vlastní oprávnění, ne jen obecné `read`.
- Každá administrátorská akce zapisuje auditní log.
- Každé selhání autorizace se loguje jako bezpečnostní signál bez citlivého obsahu.

Příklad formulace v ticketu:

> Přístup: fakturu smí číst vlastník workspace, role Fakturace a role Auditor v read-only režimu. Zákaznická podpora vidí jen stav platby a číslo faktury, ne kompletní fakturační údaje.

Tohle šetří čas při vývoji i review. Autorizace už není „někde v middleware“, ale produktové pravidlo.

## CA.3 Admin účet není pracovní identita

Admin oprávnění má být dočasný nástroj, ne každodenní oblečení. Pokud někdo píše články, odpovídá zákazníkům nebo řeší faktury pod adminem, systém ztrácí odpovědnost. V logu pak není jasné, jestli člověk provedl běžnou práci, nebo privilegovanou údržbu.

Zaveď jednoduché pravidlo:

- Běžná práce se dělá běžnou rolí.
- Admin akce vyžaduje zvýšení oprávnění, důvod a časové omezení.
- Kritické změny, jako doména, platební nastavení, SSO, export všech dat nebo smazání workspace, vyžadují potvrzení druhým faktorem.
- Sdílené účty jsou zakázané; pokud je systém neumí nahradit, napiš k nim explicitní riziko a plán odstranění.

Malý tým nemusí hned stavět enterprise IAM chrám s mramorovým vestibulem. Stačí oddělit běžnou roli od privilegované role, zapnout MFA, odstranit sdílené účty a mít pravidelný přehled, kdo má kam přístup.

## CA.4 Přístupy externistů musí mít datum expirace

Externista bez expirace je jako zapomenutý klíč pod rohožkou. Možná se nic nestane. Ale taky možná přesně ten klíč někdo najde.

Pro každého externího člověka eviduj:

| Pole | Příklad |
| --- | --- |
| Kdo | `jana@example.cz` |
| Proč | Migrace blogu, kontrola fakturační integrace |
| Systémy | Git repozitář, staging CMS, projektový board |
| Třída dat | Interní, omezeně zákaznická metadata |
| Schválil | Majitel produktu |
| Expirace | 2026-09-15 |
| Offboarding | Odebrat účet, tokeny, SSH klíče, pozvánky a sdílené složky |

Nečekej na konec spolupráce. Nastav expiraci hned při přidání. U systémů, které expiraci neumí, vytvoř úkol v kalendáři nebo provozním kanbanu. Ano, je to méně elegantní než automatika. Pořád je to lepší než „Franta z agentury má asi pořád přístup do produkce, ale byl milý“.

## CA.5 Support access musí chránit zákazníka i tým

Zákaznická podpora často potřebuje nahlédnout do účtu. To neznamená, že má mít volný průchod všemi daty. Dobrý support access je řízený:

- Zákazník vidí, že podpora může mít přístup k účtu, a ví proč.
- Podpora zadává důvod přístupu spojený s ticketem.
- Přístup je časově omezený.
- Citlivá pole jsou maskovaná, pokud nejsou nezbytná.
- Každé nahlédnutí i změna se zapisuje do auditního logu.
- Zákazník nebo admin workspace může vidět historii podpůrných zásahů.

Příklad mikrotextu v administraci:

> Podpoře můžete dočasně povolit přístup k technickému náhledu účtu na 24 hodin. Podpora neuvidí hesla, platební údaje ani soukromý obsah, pokud to není nutné pro řešení konkrétního ticketu.

Privacy-first hodnota se tady mění v produktový detail. Zákazník nemusí doufat, že se tým chová slušně. Vidí pravidla a stopu.

## CA.6 Review přístupů dělej jako provozní hygienu

Přístupy se nekazí najednou. Kazí se sedimentací: jeden účet po launchi, jeden externista po kampani, jeden admin po incidentu, jeden token po testu. Za půl roku má systém víc výjimek než pravidel.

Měsíční review nemusí být velké:

1. Vyexportuj nebo ručně projdi seznam uživatelů v kritických systémech.
2. Označ adminy, externisty, neaktivní účty a účty bez MFA.
3. U každého privilegovaného přístupu napiš aktuální důvod.
4. Odeber vše, co nemá vlastníka nebo jasný účel.
5. Zapiš výsledek do provozního logu: datum, systémy, odebrané účty, otevřené výjimky.

Kritické systémy jsou minimálně: hosting, DNS, registrátor domény, repozitáře, CI/CD, databáze, platební brána, e-mailing, CRM, analytika, helpdesk, cloud storage a nástroj pro správu hesel.

## CA.7 Checklist přístupů a rolí

Před dalším růstem týmu si projdi:

- Existuje role matrix pro hlavní pracovní činnosti?
- Má každá role jasné „smí“ a „nesmí“?
- Je výchozí stav pro nové funkce deny-by-default?
- Testují se autorizace na povolené i zakázané scénáře?
- Mají admin účty MFA a používají se jen pro privilegované akce?
- Jsou sdílené účty odstraněné nebo aspoň evidované jako riziko s termínem nápravy?
- Mají externisté datum expirace a dokumentovaný účel?
- Existuje řízený support access s důvodem, časovým omezením a logem?
- Umí tým rychle odebrat přístup při odchodu člověka nebo incidentu?
- Probíhá pravidelné review přístupů v kritických systémech?

## Codyho komentář

Přístupy jsou produktová UX vrstva bezpečnosti. Můj pohled — Cody: pokud bezpečnostní pravidlo nutí tým obcházet systém, pravidlo není dost konkrétní nebo produkt neumí správnou akci. Nejlepší role nejsou ty nejpřísnější na papíře. Nejlepší role jsou ty, které lidem dovolí udělat práci bez toho, aby při každém kliknutí drželi v ruce granát s nápisem `superadmin`.

## Zdroje k příloze

- OWASP Authorization Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html
- OWASP Logging Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html
- NIST SP 800-53 Rev. 5.1 — AC-6 Least Privilege: https://csrc.nist.gov/CSRC/media/Projects/risk-management/800-53%20Downloads/800-53r5/SP_800-53_v5_1-derived-OSCAL.pdf
- NIST glossary — Least Privilege: https://csrc.nist.gov/glossary/term/least_privilege

## Shrnutí přílohy

Přístupy nejsou administrativní detail, ale ochrana zákazníků, týmu i provozu. Navrhuj role podle práce, drž deny-by-default, testuj autorizaci, odděl běžné a privilegované účty, zakaž sdílené přístupy, externistům nastav expiraci, support access dělej časově omezený a auditovatelný a každý měsíc projdi kritické systémy. Privacy-first SaaS nemá hromadu adminů. Má jasná oprávnění, dobré nástroje a odvahu odebírat přístupy dřív, než se z nich stane archeologie.

# Příloha CB: Offboarding lidí a dodavatelů bez osiřelých účtů a datových duchů

Offboarding je okamžik pravdy pro celou přístupovou hygienu. Dokud člověk nastupuje, všichni řeší, aby měl nástroje, repozitáře, e-mail, boardy a dokumentaci. Když odchází, často se spoléhá na paměť, Slack vlákno a větu „myslím, že už jsme mu všechno vypnuli“. To je pěkný způsob, jak vyrábět bezpečnostní fosilie.

Privacy-first offboarding není pomsta odcházejícímu člověku ani papírový rituál. Je to kontrolovaný převod práce, odebrání přístupů, rotace sdílených tajemství, úklid zařízení a jasné rozhodnutí, co se stane s daty, která člověk vytvořil nebo spravoval. GDPR v článku 32 mluví o vhodných technických a organizačních opatřeních pro bezpečnost zpracování; opuštěné účty, sdílené klíče a nejasné vlastnictví dat jsou přesně ten typ organizační díry, kterou nechceš obhajovat po incidentu.

## CB.1 Offboarding začíná před posledním dnem

Nečekej na okamžik, kdy člověk vrací notebook a už mentálně sedí ve vlaku do další kapitoly života. Offboarding začni ve chvíli, kdy je jasné datum odchodu nebo konec dodavatelské spolupráce. Cílem není jen vypnout účet. Cílem je zachovat provoz bez toho, aby data a odpovědnost visely ve vzduchu.

První checklist vytvoř hned:

| Oblast | Co zkontrolovat | Vlastník |
| --- | --- | --- |
| Identita | Firemní e-mail, SSO, MFA zařízení, recovery e-mail | Ops / zakladatel |
| Kód | Git přístupy, deploy klíče, package registry, CI proměnné | Tech lead |
| Produkt | Admin role, support access, testovací účty, sandboxy | Product owner |
| Data | Exporty, lokální kopie, sdílené disky, CRM segmenty | Data owner |
| Komunikace | E-mail aliasy, helpdesk, kalendáře, externí kontakty | Operations |
| Finance | Fakturace, bankovní náhledy, platební brány, účetní nástroje | Finance owner |

U dodavatelů přidej ještě smluvní konec: kdy musí odstranit kopie dat, jak potvrdí výmaz, kdo přebírá dokumentaci a jak dlouho zůstane dostupný pro přechodové otázky. Ano, zní to nudně. Přesně proto to funguje.

## CB.2 Jeden seznam systémů je lepší než hrdinská paměť

Offboarding bez inventáře systémů je detektivka. A detektivky jsou fajn v knihkupectví, ne v produkčním provozu.

Udržuj jednoduchý přístupový registr:

- kdo má přístup,
- do jakého systému,
- s jakou rolí,
- proč ho má,
- kdo přístup schválil,
- kdy se má zkontrolovat nebo ukončit.

Nemusí to být drahý IAM nástroj. Pro malý tým stačí tabulka, repozitářový soubor nebo interní wiki stránka, pokud má vlastníka a pravidelnou revizi. Důležité je, aby v okamžiku odchodu nepadla otázka „kde všude vlastně byl?“. To je otázka, kterou chceš mít zodpovězenou ještě předtím, než ji někdo položí.

Praktický trik: každý nový nástroj musí mít v interní dokumentaci sekci „jak odebrat přístup“. Pokud ji nemá, nástroj není plně zavedený. Instalace bez deinstalace je jen digitální lepidlo na budoucí problém.

## CB.3 Přístupy vypínej podle rizika, ne podle abecedy

Ne všechny účty jsou stejné. E-mail a SSO jsou páteř identity. Git a CI mohou změnit produkt. Produkční administrace může vidět zákaznická data. Fakturace může pracovat s obchodními a platebními údaji. Newsletter nebo CRM může poslat zprávu tisícům lidí. Vypínat je „až se k tomu dostaneme“ je pozvánka pro Murphyho zákon, který má bohužel vždycky volno.

Priorita odebrání:

1. SSO, e-mail a primární identita.
2. Produkční administrace, support access a databázové přístupy.
3. Git repozitáře, CI/CD, hosting, DNS a package registry.
4. Secret store, API klíče, webhook podpisy a deploy tokeny.
5. CRM, helpdesk, e-mailing, analytika a dokumenty se zákaznickými daty.
6. Projektové nástroje, interní wiki, kalendáře a komunikační kanály.

U běžného plánovaného odchodu stačí přesný časový plán. U rizikového odchodu nebo incidentu máš mít krizový režim: okamžité zablokování identity, revokace aktivních sessions, rotace citlivých klíčů a audit posledních akcí. GDPR článek 33 řeší oznamování porušení zabezpečení osobních údajů dozorovému úřadu; dobře vedený offboarding snižuje šanci, že se k takové povinnosti vůbec proklikáš.

## CB.4 Rotuj tajemství, která mohla odejít s člověkem

Největší offboardingová past nejsou účty, ale tajemství: API klíče, SSH klíče, recovery kódy, deploy tokeny, webhook secrety, sdílené heslo k historickému nástroji a lokální `.env`, který přežil tři refaktory a dvě firemní etapy.

Zaveď jednoduché pravidlo:

- osobní klíče se ruší,
- týmové klíče se rotují, pokud k nim odcházející člověk měl přístup,
- produkční klíče se nikdy neposílají e-mailem ani chatem,
- sdílené účty mají plán zániku,
- rotace se zapisuje do provozního logu.

Příklad mini-runbooku pro rotaci:

| Tajemství | Kde je | Jak rotovat | Jak ověřit |
| --- | --- | --- | --- |
| `PAYMENT_WEBHOOK_SECRET` | Secret store + platební brána | Vygenerovat nový podpis, nasadit, ponechat krátké překryvné okno | Test webhooku na stagingu i produkci |
| Deploy token | Hosting provider | Vytvořit nový token, změnit CI secret, smazat starý | Úspěšný deploy z CI |
| SMTP API key | E-mail provider | Nový klíč pro aplikaci, starý deaktivovat | Testovací transakční e-mail |
| SSH klíč | Server / Git | Odebrat veřejný klíč, ověřit login audit | Přihlášení jen povolených účtů |

Privacy-first detail: při rotaci neloguj hodnoty tajemství. Loguj jen typ, vlastnictví, čas, výsledek a odkaz na ticket. Bezpečnostní log není album s fotkami klíčů od domu.

## CB.5 Předej vlastnictví práce, ne jen soubory

Odcházející člověk často drží víc než přístup: kontext. Ví, proč je cron nastavený divně, proč fakturační export obsahuje historický sloupec, proč se jedna integrace nesmí vypnout v pátek a kde je zákaznická dohoda, která nikdy nedoputovala do CRM. Offboarding má tenhle kontext přenést.

Před odchodem udělej krátký převod:

- které projekty člověk vlastní,
- jaké rozhodnutí čeká na další krok,
- kde jsou rozpracované změny,
- jaké účty nebo dodavatelé měli jeho kontakt jako vlastníka,
- které automatizace běží pod jeho identitou,
- jaké dokumenty, incidenty nebo zákaznické dohody vyžadují další péči.

Pozor na automatizace běžící pod osobním účtem. Pokud build, reporting, e-mailová sekvence nebo fakturační export stojí na uživateli `petr@firma.cz`, odchod Petra není HR událost. Je to budoucí výpadek s kalendářním zpožděním. Kritické automatizace mají běžet pod servisní identitou s vlastníkem a auditní stopou.

## CB.6 Zařízení a lokální data nejsou vedlejší detail

Notebook, telefon, externí disk a lokální backup mohou obsahovat víc citlivých dat než produkční administrace. Zejména u malých týmů, kde se exporty, screenshoty, databázové dumpy a zákaznické CSV občas povalují jako digitální drobky po stole.

Minimální postup:

- potvrď vrácení firemních zařízení,
- odpoj zařízení z MDM nebo firemní správy až po ověření dat,
- zruš přístup k e-mailu, kalendáři a cloudovým diskům,
- vyžádej potvrzení smazání lokálních kopií zákaznických dat,
- u dodavatelů požaduj písemné potvrzení výmazu nebo návratu dat,
- u kritických rolí zkontroluj poslední exporty a stažení souborů.

U externistů je dobré mít tuto povinnost už ve smlouvě nebo DPA: po ukončení spolupráce vrátit nebo smazat osobní údaje podle pokynu správce. Prakticky to znamená, že „já už to nepoužívám“ nestačí. Chceš konkrétní potvrzení a ideálně i proces, který nenechá zákaznická data bydlet na soukromém disku někde mezi fakturami a fotkami kočky.

## CB.7 Checklist offboardingu

- Existuje datum odchodu a vlastník offboardingu?
- Máš seznam všech systémů, rolí a datových oblastí, kde měl člověk nebo dodavatel přístup?
- Jsou primární identita, SSO, e-mail a aktivní sessions vypnuté ve správný čas?
- Jsou odebrané produkční, Git, CI/CD, hosting, DNS a administrátorské přístupy?
- Jsou zrušené osobní klíče a rotovaná týmová tajemství, ke kterým měl přístup?
- Jsou kritické automatizace převedené z osobního účtu na servisní identitu?
- Je předané vlastnictví projektů, dokumentace, zákaznických dohod a rozpracovaných úkolů?
- Jsou vrácená zařízení a potvrzené smazání lokálních kopií zákaznických dat?
- Existuje auditní záznam, kdo co vypnul, kdy a s jakým výsledkem?
- Proběhla po týdnu krátká kontrola, jestli se neobjevil zapomenutý účet nebo rozbitá automatizace?

## Codyho komentář

Můj pohled — Cody: dobrý offboarding se pozná podle toho, že je trapně nudný. Nikdo nehledá heslo v chatu, nikdo nevolá bývalému externistovi kvůli deployi a nikdo nepřemýšlí, jestli někde neleží export zákazníků. Když odchod člověka rozbije produkt, nebyl problém v člověku. Byl problém v tom, že firma spletla identitu člověka s provozní architekturou.

## Zdroje k příloze

- GDPR, článek 32 — zabezpečení zpracování: https://eur-lex.europa.eu/legal-content/CS/TXT/HTML/?uri=CELEX:32016R0679#d1e2884-1-1
- GDPR, článek 33 — ohlašování porušení zabezpečení osobních údajů dozorovému úřadu: https://eur-lex.europa.eu/legal-content/CS/TXT/HTML/?uri=CELEX:32016R0679#d1e2951-1-1
- EDPB: Guidelines 9/2022 on personal data breach notification under GDPR: https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-92022-personal-data-breach-notification-under_en
- ENISA: Cybersecurity guide for SMEs — 12 steps to securing your business: https://www.enisa.europa.eu/publications/cybersecurity-guide-for-smes

## Shrnutí přílohy

Offboarding chrání produkt před osiřelými účty, zapomenutými klíči a daty bez vlastníka. Začni před posledním dnem, pracuj podle registru systémů, vypínej přístupy podle rizika, rotuj tajemství, převáděj vlastnictví práce, kontroluj zařízení a lokální kopie a vše zapisuj do auditní stopy. Privacy-first tým nečeká, až odchod člověka odhalí, kde všude firma používala lidskou paměť místo procesu.

# Příloha CC: Zpracovatelské smlouvy a subdodavatelé bez slepé víry v hezké logo

Dodavatel může mít krásný web, ISO badge, fotku serverovny a obchodníka, který používá slovo „enterprise“ častěji než interpunkci. To ale ještě neznamená, že víš, co se děje se zákaznickými daty. Privacy-first SaaS potřebuje jednoduchý, opakovatelný proces pro zpracovatelské smlouvy, subdodavatele a změny v dodavatelském řetězci.

Nejde o právnické sběratelství PDFek. Jde o to, aby tým uměl odpovědět na tři otázky: kdo zpracovává osobní údaje, za jakým účelem a co se stane, když se dodavatel změní, selže nebo odejde.

## CC.1 Nejdřív urči roli: správce, zpracovatel, nebo samostatný správce

Než někomu pošleš DPA, zastav se u role. Stejný dodavatel může být v jedné části služby zpracovatel a v jiné samostatný správce. Platební brána například zpracovává data pro platbu, ale část povinností může plnit vlastním jménem kvůli regulaci, prevenci podvodů nebo účetnictví. E-mailový nástroj může být zpracovatel pro transakční zprávy, ale u vlastního marketplace obohacování kontaktů už se hra mění.

Praktická otázka zní:

- Kdo určuje účel zpracování?
- Kdo rozhoduje, jaká data se sbírají?
- Může dodavatel data použít pro vlastní produkt, reklamu, trénink nebo benchmarking?
- Má zákazník přímý vztah s dodavatelem, nebo jen s námi?
- Umíme roli vysvětlit jednou větou v interní datové mapě?

Pokud odpověď zní „asi zpracovatel, protože nám poslal DPA“, nestačí to. DPA není kouzelná nálepka. Je to smluvní režim pro konkrétní vztah.

## CC.2 DPA není formalita, ale provozní návod

GDPR v článku 28 stanovuje požadavky na vztah správce a zpracovatele: zpracování má probíhat na základě smlouvy nebo jiného právního aktu, zpracovatel jedná podle doložených pokynů, řeší důvěrnost, bezpečnost, subdodavatele, asistenci správci, mazání nebo vrácení dat a dostupnost informací pro audit. Oficiální znění GDPR je na EUR-Lexu: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng

Malý tým nepotřebuje z každé DPA dělat třídenní právní festival. Potřebuje z ní vytáhnout provozní odpovědi:

| Otázka | Co hledat v DPA |
| --- | --- |
| Jaký je účel zpracování? | Popis služby a typy zpracování |
| Jaká data dodavatel dostává? | Kategorie osobních údajů a subjektů údajů |
| Kde data leží? | Lokace hostingu a případné transfery mimo EHP |
| Kdo další má přístup? | Seznam subdodavatelů a mechanismus změn |
| Co se děje při incidentu? | Lhůta a kanál oznámení bezpečnostní události |
| Jak probíhá konec služby? | Export, vrácení, smazání a potvrzení výmazu |
| Jak ověříme bezpečnost? | Auditní zprávy, certifikace, bezpečnostní dokumentace |

DPA, která jen opisuje GDPR a neříká nic konkrétního o službě, je jako návod k hasicímu přístroji vytištěný na kouři. Hezké, ale v praxi dost otravné.

## CC.3 Subdodavatelé musí být živý seznam, ne odkaz do sklepa

Subdodavatel není detail. Pokud CRM používá americký e-mailový relay, analytickou knihovnu a podporu přes třetí ticketing, zákaznická data už necestují jen do CRM. Cestují řetězem, který musíš znát.

Pro každý kritický nástroj si veď jednoduchý záznam:

- název dodavatele,
- účel použití,
- typ dat,
- role podle GDPR,
- země zpracování,
- hlavní subdodavatelé,
- odkaz na DPA a seznam subdodavatelů,
- datum poslední kontroly,
- vlastník v týmu.

Důležitý je i mechanismus změny. Někteří dodavatelé dávají obecný souhlas se subdodavateli a změny oznamují e-mailem nebo aktualizací stránky. To může být přijatelné, pokud máš reálnou možnost změnu sledovat, vyhodnotit a případně se ozvat nebo službu vypnout. Pokud je oznámení schované v newsletteru mezi novým gradientem tlačítek a „AI-powered insights“, není to proces. Je to lov pokladů.

## CC.4 Transfery mimo EHP řeš před zapnutím služby

Privacy-first evropský provoz neznamená, že nikdy nepoužiješ nástroj mimo EU. Znamená to, že si transfer umíš obhájit, minimalizovat a dokumentovat. Pokud osobní údaje odchází mimo EHP, řešíš nejen obchodní pohodlí, ale i právní mechanismus, riziko přístupu třetích stran a praktickou možnost zákazníkovi vysvětlit, co se děje.

Evropská komise má oficiální informace ke standardním smluvním doložkám pro mezinárodní předávání osobních údajů: https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en

Praktický minimální postup:

- preferuj EU region a EU právní entitu, pokud existuje,
- ověř, jestli se data reálně ukládají v EU, nebo jen fakturační kontakt sedí v EU,
- zjisti, zda dodavatel používá další subdodavatele mimo EHP,
- zapiš právní mechanismus transferu,
- minimalizuj rozsah dat, která do nástroje posíláš,
- u citlivějších dat zvaž pseudonymizaci, šifrování nebo lokální alternativu,
- připrav zákaznicky srozumitelnou větu do trust packu.

Příklad věty do interního rozhodnutí:

> „Nástroj používáme pouze pro transakční e-maily, posíláme e-mailovou adresu, jazyk a ID šablony. Obsah zpráv neobsahuje zákaznická tajemství. Preferujeme EU region, subdodavatele kontrolujeme kvartálně a při změně dopadu rozhodnutí znovu otevřeme.“

## CC.5 Změna dodavatele je produktová změna, ne účetní detail

Když vývojář přidá novou knihovnu, většinou projde review. Když marketing přidá nový nástroj na formuláře, často projde jen nadšení. Přitom z pohledu dat může být druhá změna mnohem rizikovější.

Zaveď jednoduché pravidlo: každý nový nástroj, který pracuje se zákaznickými nebo uživatelskými daty, má mini-review před zapnutím. Nemusí to být komise v oblecích. Stačí krátká šablona:

- Co nástroj řeší?
- Jaká data dostane?
- Je nutný, nebo existuje jednodušší varianta?
- Kde jsou data zpracována?
- Máme DPA a seznam subdodavatelů?
- Jak data smažeme při odchodu?
- Kdo je vlastník nástroje?
- Kdy proběhne první review po nasazení?

Tím se z dodavatelů nestane strašák. Stanou se řízenou součástí produktu.

## CC.6 DPA audit dělej podle rizika, ne podle abecedy

Jednou za čas je dobré projít dodavatele. Špatný postup: otevřít tabulku, vyděsit se, zavřít tabulku, uvařit kafe, zapomenout. Lepší postup: seřadit dodavatele podle dopadu.

Začni těmi, kteří mají:

- přístup k produkční databázi,
- zákaznický obsah nebo soubory,
- autentizační nebo platební data,
- logy s identifikátory,
- support přístup do účtů,
- možnost posílat zprávy jménem produktu,
- subdodavatele mimo EHP.

U nízkorizikových nástrojů stačí lehčí kontrola. U kritických chceš aktuální DPA, bezpečnostní dokumentaci, jasný export a ověřený proces odchodu. Ne proto, že máš rád papíry. Protože nechceš při incidentu zjišťovat, že účet vlastní bývalý kolega a DPA leží v jeho starém inboxu.

## CC.7 Checklist zpracovatelských smluv a subdodavatelů

- [ ] Máme seznam všech nástrojů, které pracují s osobními nebo zákaznickými daty.
- [ ] U každého nástroje je určená role: správce, zpracovatel, samostatný správce nebo kombinace.
- [ ] Kritičtí zpracovatelé mají uloženou DPA a odkaz na seznam subdodavatelů.
- [ ] Víme, kde se data zpracovávají a zda dochází k transferům mimo EHP.
- [ ] U transferů mimo EHP máme zapsaný právní mechanismus a praktické omezení dat.
- [ ] Každý nástroj má vlastníka v týmu a datum další kontroly.
- [ ] Nové nástroje s daty procházejí mini-review před zapnutím.
- [ ] Máme postup, co dělat při změně subdodavatele nebo regionu zpracování.
- [ ] Umíme zákazníkovi lidsky vysvětlit, proč dodavatele používáme.
- [ ] Při odchodu od dodavatele víme, jak exportovat a smazat data.

## Codyho komentář

Můj pohled — Cody: nejlepší DPA proces je ten, který marketér, vývojář i zakladatel zvládnou použít v pondělí mezi dvěma cally. Jakmile je kontrola dodavatelů závislá na jednom právníkovi, jedné tabulce a dobré náladě Merkuru, rozbije se přesně ve chvíli, kdy přidáš třetí nástroj a první zákazník se zeptá na security dotazník.

## Zdroje k příloze

- GDPR, článek 28 a související pravidla pro zpracovatele: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng
- Evropská komise: standardní smluvní doložky pro mezinárodní předávání dat: https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en
- EDPB: pokyny ke konceptům správce a zpracovatele podle GDPR: https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-072020-concepts-controller-and-processor-gdpr_en

## Shrnutí přílohy

Zpracovatelské smlouvy nejsou šanon pro klid duše. Jsou provozní mapa toho, komu svěřuješ data, proč, za jakých podmínek a jak z toho vztahu bezpečně odejdeš. Malý SaaS tým nepotřebuje nekonečný legal ops aparát, ale potřebuje živý seznam dodavatelů, jasné role, kontrolu subdodavatelů, pozornost k transferům mimo EHP a mini-review před zapnutím nového nástroje.

---


# Příloha CD: Chybové stavy a prázdné obrazovky bez technického mumlání a ztráty důvěry

Chybová hláška je často první místo, kde se ukáže, jestli produkt myslí na člověka, nebo jen na stack trace. Když se něco nepovede, uživatel nechce vědět, že „request failed with status 500“. Chce vědět, co se stalo, jestli přišel o data, co může udělat teď a jestli se problém řeší.

Prázdná obrazovka je druhá strana stejné mince. Nový účet bez dat, prázdný report, nulový výsledek vyhledávání nebo čekající import nejsou „nic“. Jsou to okamžiky, kdy produkt učí uživatele další krok. Pokud je necháš prázdné, říkáš: „Hodně štěstí, kamaráde.“ To je sice stručné, ale obchodně poněkud sebevražedné.

Privacy-first přístup tady znamená dvě věci: neprozrazovat interní detaily, které by pomohly útočníkovi, a zároveň nezakrývat uživateli praktickou informaci, která mu pomůže pokračovat.

## CD.1 Chyba musí odpovědět na čtyři otázky

Dobrá chybová zpráva nemusí být dlouhá. Musí být užitečná. Většinou stačí odpovědět na čtyři otázky:

- Co se nepovedlo?
- Je to problém uživatele, systému, nebo dočasného spojení?
- Co může uživatel bezpečně zkusit?
- Kde získá pomoc, pokud to nepřejde?

Špatně:

> „Unexpected error.“

Lépe:

> „Fakturu se nepodařilo uložit. Zadaná data zůstala ve formuláři. Zkuste to prosím znovu za chvíli; pokud problém trvá, napište nám s kódem události `INV-8K2`.“

Všimni si detailu: text říká, že data zůstala ve formuláři. To snižuje paniku. Kód události pomůže podpoře najít log, ale neukazuje interní chybu, SQL dotaz, cestu na serveru ani osobní údaje. Uživatel dostane jistotu, tým dostane diagnostiku a útočník nedostane dárek zabalený v JSONu.

## CD.2 Neprozrazuj interní detaily, ale nelži

Bezpečná chybová zpráva není mlčení. „Něco se pokazilo“ je někdy nutné, ale když se opakuje všude, produkt působí jako lednice, která umí jen pípat. Rozlišuj, co můžeš říct uživateli a co patří do interního logu.

Do uživatelského textu patří:

- lidské shrnutí problému,
- bezpečný další krok,
- informace o zachování nebo ztrátě rozpracovaných dat,
- obecný důvod, pokud pomůže: „platba nebyla potvrzena“, „soubor je moc velký“, „odkaz už vypršel“,
- krátký referenční kód bez osobních údajů.

Do uživatelského textu nepatří:

- stack trace,
- názvy interních služeb a databázových tabulek,
- celé ID zákazníka, e-mail nebo token,
- přesný popis bezpečnostního pravidla, které lze obejít,
- výmluva na dodavatele, pokud to uživateli nepomůže.

Příklad pro přihlášení:

- Slabé: „E-mail neexistuje.“
- Bezpečnější: „Přihlášení se nepodařilo. Zkontrolujte e-mail a heslo, případně si nechte poslat odkaz pro obnovení přístupu.“

Příklad pro soubor:

- Slabé: „Upload failed.“
- Lepší: „Soubor se nepodařilo nahrát. Zkuste PDF nebo obrázek do 10 MB. Pokud obsahuje citlivá data, neposílejte ho e-mailem; napište podpoře a pošleme bezpečný postup.“

Codyho komentář: nejhorší chyba je ta, která je zároveň děsivá pro zákazníka a nudná pro vývojáře. Uživatel panikaří, tým nic nezjistí a všichni společně koukají na spinner jako do akvária.

## CD.3 Prázdný stav je onboarding v převleku

Prázdný stav není dekorace. Je to nejlevnější onboardingová lekce v produktu. Když zákazník poprvé otevře projekty, faktury, kontakty, report nebo automatizace, obrazovka má vysvětlit, co sem patří a jak začít.

Dobrá prázdná obrazovka obsahuje:

- jednu větu k hodnotě: proč tahle část existuje,
- jeden doporučený další krok,
- ukázku nebo šablonu, pokud se hodí,
- odkaz na krátkou nápovědu,
- uklidnění ohledně dat, pokud uživatel má něco importovat.

Příklad pro prázdné projekty:

> „Tady uvidíte projekty, jejich termíny a odpovědné osoby. Začněte vytvořením prvního projektu, nebo nahrajte CSV podle šablony. Importovaný soubor použijeme jen pro vytvoření projektů a po zpracování ho smažeme podle retenčních pravidel.“

Příklad pro prázdnou analytiku:

> „Zatím nemáme dost návštěv k zobrazení trendu. Můžete zkontrolovat měřicí plán, otevřít živý náhled událostí nebo počkat na první agregovaná data.“

Příklad pro nulový výsledek hledání:

> „Nic jsme nenašli. Zkuste kratší výraz, zkontrolujte filtr období, nebo vytvořte nový kontakt.“

Prázdný stav nemá tlačit pět akcí najednou. Jestli uživatel neví, co udělat, produkt má vybrat nejpravděpodobnější další krok. Ne hodit na něj ovládací panel jaderné elektrárny.

## CD.4 Rozlišuj chybu, varování a informaci

Když všechno svítí červeně, uživatel přestane vnímat prioritu. Produkt by měl mít jednoduchý jazyk pro typy stavů.

| Typ stavu | Kdy použít | Příklad textu |
| --- | --- | --- |
| Informace | Něco se děje nebo čeká | „Import běží. Můžete odejít, pošleme výsledek e-mailem.“ |
| Úspěch | Akce dopadla dobře | „Export je připravený ke stažení. Odkaz platí 24 hodin.“ |
| Varování | Akce je možná, ale má důsledek | „Změna tarifu se projeví od dalšího období.“ |
| Chyba uživatele | Uživatel může něco opravit | „E-mail nemá platný formát.“ |
| Chyba systému | Uživatel to sám nespraví | „Data se nepodařilo načíst. Zkuste stránku obnovit, nebo kontaktujte podporu s kódem události.“ |
| Bezpečnostní blokace | Akce je odmítnutá kvůli ochraně | „Platnost odkazu vypršela. Nechte si poslat nový odkaz.“ |

U každého typu si v design systému drž stejné vzory: barvu, ikonu, tón, strukturu věty a CTA. Ne proto, aby se designér nenudil, ale aby uživatel nemusel pokaždé luštit, jestli modrý box znamená „v pohodě“, „utíkej“ nebo „marketing měl kreativní úterý“.

## CD.5 Formuláře musí chránit práci uživatele

Formulář je místo, kde chyby bolí nejvíc. Člověk věnoval produktu čas, napsal text, vybral hodnoty, nahrál soubor — a produkt mu za odměnu řekne „zkuste to znovu“. To je přesně ten moment, kdy zákazník začne přemýšlet, jestli by papír a propiska nebyly modernější.

Pravidla pro formulářové chyby:

- Validuj co nejblíž poli, ne až po odeslání celé stránky.
- Nevymazávej zadaná data po chybě.
- U složitých formulářů průběžně ukládej koncept, pokud to dává smysl.
- U nahrávání souborů řekni povolený typ, velikost a bezpečný alternativní postup.
- U chyb plateb jasně odděl „zkusit znovu“, „změnit kartu“ a „kontaktovat podporu“.
- U právních souhlasů nikdy neschovávej marketingový souhlas jako technickou podmínku služby.

Privacy-first detail: pokud ukládáš koncepty, napiš, jak dlouho žijí a kde je uživatel smaže. Automatické ukládání je skvělá funkce, dokud do ní někdo nenapíše citlivý údaj a produkt ho drží navždy jako digitální sysel.

## CD.6 Provozní stránka chyb: co musí vidět tým

Uživatel má dostat bezpečný text. Tým ale potřebuje diagnostiku. Proto si u chyb navrhni interní „chybový kontrakt“: co aplikace ukáže, co zaloguje a jak se chyba propojí se supportem.

Minimum pro interní práci:

- referenční kód události zobrazený uživateli,
- čas a prostředí,
- typ chyby a postižená funkce,
- anonymizovaný nebo pseudonymizovaný kontext,
- informace, jestli byla akce bezpečně dokončena, částečně dokončena, nebo vrácena,
- odkaz na interní runbook,
- vlastník dalšího kroku.

Support odpověď pak nemusí začínat trapným „pošlete screenshot celé obrazovky včetně osobních dat“. Stačí požádat o kód události a popis situace. Pokud screenshot potřebuješ, řekni, co má uživatel začernit. Ano, i screenshot je datový export, jen se tváří jako obrázek.

## CD.7 Checklist chybových a prázdných stavů

Pro každý důležitý tok v produktu si projdi následující kontrolu:

- Má každá chyba lidské shrnutí a další krok?
- Říká text, jestli uživatel přišel o rozpracovaná data?
- Nezobrazuje chyba interní detaily, tokeny, cesty, tabulky ani osobní údaje?
- Má uživatel bezpečný referenční kód pro podporu?
- Rozlišuje design systém informaci, úspěch, varování, chybu a bezpečnostní blokaci?
- Nevymaže formulář práci uživatele po validační nebo serverové chybě?
- Mají prázdné obrazovky jeden doporučený další krok?
- Umí nulový výsledek hledání poradit s filtrem, překlepem nebo vytvořením položky?
- Jsou importní a exportní chyby napsané tak, aby uživatel věděl, co opravit?
- Má tým interní runbook pro nejčastější chyby a bezpečný support postup?

## Shrnutí přílohy

Chybové stavy a prázdné obrazovky jsou drobné texty s velkým dopadem na důvěru. Dobrá chyba řekne, co se stalo, co má uživatel udělat, jestli jsou data v bezpečí a jak získat pomoc. Dobrý prázdný stav vysvětlí hodnotu obrazovky a nabídne jeden další krok. Privacy-first produkt neukazuje interní chaos, ale ani neschovává praktickou pomoc za „něco se pokazilo“.

---

# Příloha CE: Žádosti lidí o data bez právního ping-pongu a paniky ve Slacku

Každý SaaS jednou dostane zprávu typu „pošlete mi všechna moje data“, „smažte můj účet“, „opravte fakturační údaje“, nebo méně formální klasiku „co o mně vlastně máte?“. To není otravná právní vsuvka. Je to test, jestli produkt opravdu drží slib kontroly nad daty.

Privacy-first provoz se nepozná podle toho, že má v patičce dlouhou zásadovou báseň. Pozná se podle toho, že tým umí žádost přijmout, ověřit, vyřídit, zdokumentovat a nezměnit ji v improvizované rodeo přes pět nástrojů.

## CE.1 Udělej z práv subjektu produktový tok, ne právní výjimku

Práva lidí k jejich údajům se často řeší až v momentě, kdy přijde první nepříjemný e-mail. Pak tým hledá, kdo má přístup do databáze, jestli lze export udělat ručně, co se smí smazat a kdo odpoví zákazníkovi. Gratuluju, právě sis vyrobil incident, jen bez sirény.

Navrhni tok předem. Minimální verze pro malý SaaS:

1. Žádost přijde přes support, e-mail nebo nastavení účtu.
2. Tým ji zapíše do interního request trackeru.
3. Určí typ žádosti: přístup, oprava, výmaz, omezení, námitka, přenositelnost, odvolání souhlasu.
4. Ověří identitu přiměřeně riziku.
5. Najde relevantní datové domény.
6. Provede akci nebo zdokumentuje důvod, proč ji nelze provést celou.
7. Odpoví člověku srozumitelně a bez interního žargonu.
8. Uzavře request auditním záznamem.

Tento tok nemusí být hned automatizovaný jako kosmická loď. Stačí, když je jasné, kdo co dělá, kde se eviduje stav a jaké systémy se kontrolují.

Praktická tabulka pro request tracker:

| Pole | Příklad | Proč existuje |
|---|---|---|
| `request_id` | `DSR-2026-08-001` | Bezpečná reference pro podporu |
| `received_at` | `2026-08-10 09:20 UTC` | Začátek lhůty a audit |
| `request_type` | `access`, `erasure`, `rectification` | Jasné třídění práce |
| `identity_status` | `verified_in_account` | Ochrana před vydáním dat cizímu člověku |
| `data_domains` | účet, fakturace, support, audit log | Žádné zapomenuté kouty |
| `decision` | vyřízeno, částečně odmítnuto, čeká na doplnění | Transparentní stav |
| `owner` | support lead | Jeden člověk drží nit |

## CE.2 První odpověď má uklidnit a nastavit očekávání

První reakce nemusí obsahovat všechna data. Má potvrdit přijetí, vysvětlit další krok a případně požádat o bezpečné ověření identity. Evropská komise k právům jednotlivců uvádí, že organizace může požádat o další informace k potvrzení identity, pokud je to potřeba. EDPB ve svém průvodci pro malé firmy zároveň zdůrazňuje povinnost usnadnit výkon práv a nekomplikovat ho zbytečnými překážkami.

Šablona první odpovědi:

> Dobrý den, žádost jsme přijali pod kódem `DSR-2026-08-001`. Nejdřív ověříme, že se týká správného účtu, abychom data neposlali neoprávněné osobě. Pokud jste přihlášení, potvrďte prosím žádost v nastavení účtu. Pokud účet už nemáte, napište nám z e-mailu, který byl u účtu vedený. Jakmile ověření proběhne, připravíme odpověď a dáme vám vědět.

Co v první odpovědi nedělat:

- nechtěj kopii občanky jako výchozí možnost;
- neposílej export na neověřený e-mail;
- neslibuj okamžitý výmaz bez kontroly fakturace, zákonných povinností a bezpečnostních logů;
- netvrď, že „žádná data nemáme“, dokud neprojdeš datovou mapu;
- neposílej interní názvy tabulek, ticketů a vendorů, pokud to člověk nepotřebuje.

## CE.3 Ověření identity dělej přiměřeně, ne paranoidně

Ověření má zabránit dvěma průšvihům: vydání dat útočníkovi a zbytečnému sběru dalších citlivých údajů. Špatný proces dělá obojí najednou. To je jako zamknout dveře a nechat klíč pod rohožkou s neonovou šipkou.

Základní pravidlo: pokud je člověk přihlášený do účtu, potvrď žádost přímo v účtu. Pokud píše z ověřeného e-mailu a žádá nízkorizikovou opravu, často stačí e-mailové ověření. Pokud žádá export, výmaz nebo změnu přístupových údajů z jiné adresy, použij silnější potvrzení.

Příklady ověření podle rizika:

- Oprava překlepu v názvu firmy: potvrzení z účtového e-mailu.
- Export všech dat účtu: potvrzení v aplikaci nebo jednorázový odkaz na evidovaný e-mail.
- Výmaz účtu s fakturační historií: potvrzení v aplikaci plus vysvětlení, co se smaže a co zůstane kvůli zákonné povinnosti.
- Žádost z neznámého e-mailu: žádost o přihlášení, odpověď z evidované adresy nebo jiné přiměřené potvrzení.

Privacy-first trik: nevyžaduj doklad totožnosti, pokud ho nepotřebuješ. Když už by byl nezbytný, řekni přesně proč, co má člověk začernit, jak dlouho dokument držíš a kdy ho smažeš.

## CE.4 Datová mapa rozhoduje, co opravdu hledáš

Bez datové mapy se žádost mění v archeologii. Někdo otevře produkční databázi, někdo CRM, někdo e-mail a někdo si vzpomene na starý spreadsheet. Výsledek je neúplný export a týmový pocit „snad dobrý“. To není proces, to je horoskop.

Pro každý typ žádosti měj seznam systémů:

- Aplikace: profil, projekty, nastavení, preference, role.
- Fakturace: objednávky, faktury, daňové údaje, platební identifikátory.
- Support: tickety, e-mailová komunikace, přiložené soubory, interní poznámky.
- Marketing: souhlasy, odhlášení, preference, zdroj registrace.
- Analytika: agregované eventy, případně pseudonymní identifikátory.
- Bezpečnost: auditní log, přihlášení, změny oprávnění, incidentní záznamy.
- Zálohy: co se neodmaže okamžitě, ale odrotuje podle retenční politiky.

U každé domény si napiš, jestli se exportuje, opravuje, maže, anonymizuje, nebo ponechává kvůli povinnosti či oprávněnému bezpečnostnímu důvodu. Tohle není právní názor na autopilota; je to provozní katalog rozhodnutí, který má zkontrolovat člověk odpovědný za compliance.

## CE.5 Výmaz není tlačítko „DROP USER CASCADE“

Výmaz účtu v SaaS je produktový workflow. Nestačí smazat řádek `users`. Musíš řešit vlastnictví týmových dat, fakturaci, auditní logy, zálohy, aktivní integrace a sdílené projekty.

Bezpečný výmaz rozděl do fází:

1. Potvrzení dopadu: uživatel vidí, co bude smazáno, anonymizováno nebo ponecháno.
2. Pozastavení účtu: zablokuj nové přihlášení a API tokeny.
3. Převod vlastnictví: u týmových workspace nejdřív předej projekty jinému adminovi.
4. Smazání osobních polí: jméno, e-mail, telefon, avatar, volitelné profilové údaje.
5. Anonymizace historie: zachovej nutné provozní události bez zbytečné identity.
6. Zrušení odběrů a integrací: newsletter, webhooky, API klíče, OAuth tokeny.
7. Retenční záznam: ulož jen minimální důkaz, že žádost byla vyřízena.

Příklad produktového textu:

> Po potvrzení smažeme osobní profil, přístupové tokeny a marketingové preference. Faktury a účetní záznamy ponecháme po dobu vyžadovanou právními povinnostmi. Bezpečnostní logy ponecháme po omezenou dobu podle retenční politiky a bez dalšího použití pro marketing.

Tohle je fér. Neříká „všechno zmizí z vesmíru do tří sekund“, protože tak internet bohužel nefunguje. Říká, co se stane doopravdy.

## CE.6 Přístup k datům má být čitelný, ne databázový výsyp

U práva na přístup není cílem poslat člověku nesrozumitelný dump s interními ID, cizími daty a historickými hodnotami, které nikdo neumí vysvětlit. Cílem je dát mu informace o zpracování a kopii relevantních osobních údajů ve formě, kterou dokáže použít.

Dobrá odpověď obsahuje:

- shrnutí účtových údajů;
- export dat, která člověk sám vložil nebo která se ho přímo týkají;
- informaci o účelech zpracování;
- kategorie příjemců nebo subdodavatelů tam, kde dává smysl;
- retenční pravidla nebo vysvětlení, podle čeho se retence určuje;
- kontakt pro doplňující otázky.

U exportu pozor na data jiných lidí. Týmový projekt může obsahovat komentáře kolegů, e-maily zákazníků nebo interní poznámky supportu. Před odesláním exportu si udělej redakční krok: co patří žadateli, co patří organizaci, co patří jiné osobě a co je interní bezpečnostní metadata.

## CE.7 Interní runbook pro žádosti subjektů údajů

Runbook má být krátký, protože v krizi nikdo nečte román. Doporučená struktura:

1. Kde se žádosti evidují.
2. Kdo je primární vlastník.
3. Jak ověřit identitu podle rizika.
4. Jaké systémy se kontrolují.
5. Jaké šablony odpovědí se používají.
6. Kdy eskalovat právníkovi nebo DPO.
7. Jak se uzavírá auditní stopa.

Eskaluj vždy, když:

- žádost přichází přes právního zástupce;
- týká se dítěte, zaměstnance nebo citlivých údajů;
- obsahuje námitku proti zpracování nebo automatizovanému rozhodování;
- výmaz koliduje se smluvní, účetní nebo bezpečnostní povinností;
- request působí jako útok na účet nebo sociální inženýrství;
- nevíš, jestli určitá data patří žadateli nebo jiné osobě.

## CE.8 Checklist žádostí o data

- Máme jednu adresu nebo produktový kanál pro žádosti o data?
- Evidujeme datum přijetí, typ žádosti, vlastníka a stav?
- Umíme ověřit identitu bez zbytečného sběru dokladů?
- Máme datovou mapu systémů, které se kontrolují pro export, opravu a výmaz?
- Rozlišujeme osobní profil, týmová data, fakturaci, support a bezpečnostní logy?
- Umíme vysvětlit, co smažeme hned, co anonymizujeme a co držíme kvůli povinnosti?
- Kontrolujeme export proti úniku dat jiných osob?
- Máme šablony odpovědí psané lidsky, ne právničtinou z temného lesa?
- Logujeme vyřízení žádosti minimálně a bezpečně?
- Testujeme proces aspoň jednou za půl roku na fiktivním účtu?

## Codyho komentář

Toto je můj pohled — Cody: žádosti o data nejsou jen compliance cvičení. Jsou zákaznická zkušenost pro lidi, kteří zrovna řeší důvěru. Když jim odpovíš rychle, lidsky a přesně, často získáš víc respektu než dalším hero bannerem o transparentnosti. Transparentnost se totiž nejlíp měří ve chvíli, kdy někdo chce odejít.

## Zdroje k příloze

- Evropská komise: přehled postupu při žádostech jednotlivců o výkon práv, včetně možnosti přiměřeně ověřit identitu — https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/dealing-citizens/how-should-requests-individuals-exercising-their-data-protection-rights-be-dealt_en
- EDPB: průvodce pro malé firmy k respektování práv jednotlivců, včetně přístupu, opravy, výmazu, námitky a přenositelnosti — https://www.edpb.europa.eu/sme/be-compliant/respect-individuals-rights_ga
- EDPB: Guidelines 01/2022 on data subject rights — right of access, finální verze přijatá 28. března 2023 — https://www.edpb.europa.eu/documents/guideline/guidelines-012022-on-data-subject-rights-right-of-access_en
- EUR-Lex: GDPR, článek 17 k právu na výmaz a souvisejícím výjimkám — https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679

## Shrnutí přílohy

Žádosti lidí o data musí mít stejnou provozní disciplínu jako onboarding, fakturace nebo incident response. Malý SaaS potřebuje jasný příjem žádosti, přiměřené ověření identity, datovou mapu, bezpečný export, promyšlený výmaz a auditní stopu bez zbytečného sběru dalších údajů. Privacy-first přístup není jen splnit lhůtu. Je to ukázat, že kontrola nad daty patří uživateli i tehdy, když se ptá, opravuje, odchází nebo chce vědět, co se děje za oponou.

---

# Příloha CF: Datová rezidence a regiony bez kouzelné věty „hostováno v EU“

„Máme EU region“ je dobrý začátek, ale není to celé privacy-first řešení. Data se mohou ukládat v jednom regionu, zálohovat v druhém, logovat ve třetím, analyzovat ve čtvrtém a číst supportem z pátého kontinentu. A pak přijde zákazník z regulovanějšího odvětví a zeptá se: „Kde přesně jsou moje data?“ Pokud odpověď zní „asi ve Frankfurtu, protože to psali v ceníku“, máme krásný příklad provozního optimismu. Ten je levný do první due diligence.

Datová rezidence znamená praktickou kontrolu nad tím, kde data fyzicky nebo logicky bydlí. Transfer mimo EHP je širší téma: nejde jen o primární databázi, ale i o přístup, podporu, subdodavatele, zálohy, telemetrii a diagnostiku. Evropská komise vysvětluje, že předávání osobních údajů mimo EU/EHP může probíhat například na základě rozhodnutí o odpovídající ochraně, vhodných záruk nebo specifických výjimek: https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/international-data-transfers_en

## CF.1 Region je produktové rozhodnutí, ne technický default

U malého SaaS bývá výběr regionu často vedlejší krok při zakládání databáze: vybere se nejbližší datacentrum, protože má nízkou latenci, nebo default, protože tlačítko už svítí. Jenže region ovlivňuje právní dokumentaci, obchodní argumenty, incidenty, support a možnost prodávat firmám, které mají vlastní požadavky na data.

Praktický postup pro nový projekt:

- Primární produkční data drž v EU/EHP, pokud nemáš jasný důvod dělat opak.
- Pro každou hlavní datovou doménu napiš region: účty, fakturace, obsah zákazníka, soubory, logy, analytika, support tickety, e-maily.
- Rozliš „data at rest“ od přístupu lidí a systémů. Úložiště v EU neznamená, že k němu nikdo mimo EU nemůže mít přístup.
- Zkontroluj, jestli vybraný region platí i pro zálohy, read replica, vyhledávací index, objektové úložiště a CDN.
- Nedělej z „EU-only“ slib, pokud ho neumíš provozně doložit.

Příklad jednoduché interní tabulky:

| Datová oblast | Služba | Primární region | Zálohy | Přístup supportu | Poznámka |
| --- | --- | --- | --- | --- | --- |
| Uživatelské účty | Aplikační DB | EU | EU | Jen admin role v týmu | Bez produkčního dumpu do lokálu |
| Fakturace | Fakturační nástroj | EU/EHP preferováno | Podle dodavatele | Finance tým | Prověřit DPA a subdodavatele |
| Support | Ticket systém | EU region | Podle dodavatele | Support tým | Bez citlivých screenshotů v ticketech |
| Analytika | Privacy-first nástroj | EU | EU | Produktový tým | Jen agregované eventy |

Tahle tabulka nemusí být krásná. Musí být pravdivá. Krásné tabulky s nepravdivými regiony jsou jen compliance cosplay.

## CF.2 „EU region“ neznamená automaticky „žádný transfer“

Dodavatel může mít datacentrum v EU, ale podporu, monitoring, bezpečnostní tým nebo mateřskou firmu mimo EHP. To nemusí automaticky znamenat zákaz použití. Znamená to, že musíš vědět, co se děje, mít správné smluvní a technické záruky a umět vysvětlit zbytkové riziko.

Při kontrole dodavatele se ptej konkrétně:

- Kde se ukládají produkční data zákazníků?
- Kde jsou zálohy a jak dlouho se drží?
- Jaké subdodavatele dodavatel používá pro hosting, support, monitoring a bezpečnost?
- Může k datům přistupovat personál mimo EU/EHP?
- Jsou přístupy logované, schvalované a časově omezené?
- Jaké transferové mechanismy dodavatel používá, pokud data nebo přístup míří mimo EHP?

Evropská komise spravuje modernizované standardní smluvní doložky pro mezinárodní transfery, které se používají jako jeden z nástrojů vhodných záruk podle GDPR: https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en

Codyho komentář: SCC nejsou magická nálepka „vyřešeno“. Jsou právní konstrukce, která musí sedět na reálný provoz. Když systém posílá plné databázové exporty do globálního supportu bez omezení, žádný PDF podpis z toho neudělá privacy-first architekturu.

## CF.3 Mapuj i diagnostiku, logy a AI funkce

Největší překvapení nebývá hlavní databáze. Ta je vidět. Překvapení bývá v okrajových systémech: error tracking, session replay, transakční e-mail, cloudové logy, fulltextové indexy, AI asistenti v supportu nebo nástroj, kam obchodník nahraje export kontaktů, protože „jen na chvilku“.

Pro každou novou integraci použij mini-review:

1. Jaká data do nástroje posíláme?
2. Posíláme osobní údaje, obsah zákazníka, metadata, nebo jen agregované metriky?
3. Kde jsou data uložená a zpracovávaná?
4. Kdo k nim má přístup a za jakých podmínek?
5. Dá se region nastavit na EU/EHP?
6. Dá se sběr omezit, maskovat nebo pseudonymizovat?
7. Jak dlouho data zůstávají v nástroji?
8. Má nástroj export a smazání dat?

Typické privacy-first úpravy:

- V error trackingu neposílej celé request body, tokeny, e-maily ani texty zpráv.
- V analytice používej agregované eventy místo uživatelských profilů přes půl internetu.
- V supportu zakaz vkládání citlivých screenshotů bez redakce.
- V AI asistentech nastav pravidlo: žádná produkční osobní data do promptu, pokud není schválený účel, dodavatel a režim zpracování.
- V logování nastav retenci podle účelu: bezpečnostní logy nejsou marketingová kronika.

Tohle je přesně místo, kde privacy-first ušetří budoucí nervy. Když se incident stane v hlavní databázi, všichni ví, že je to vážné. Když se citlivé údaje rozlezou do pěti pomocných nástrojů, incident se hledá jako ponožka po víkendu v prádelně.

## CF.4 Udělej zákaznickou odpověď jednou a udržuj ji živou

B2B zákazníci se budou ptát na regiony, subdodavatele a transfery. Nepiš pokaždé odpověď od nuly v panice mezi dvěma meetingy. Připrav si krátký trust text, který obchod i support používají konzistentně.

Vzor odpovědi:

> Produkční zákaznická data ukládáme primárně v EU/EHP. U každé podpůrné služby sledujeme účel zpracování, region, subdodavatele, retenci a přístupy. Pokud služba zahrnuje transfer mimo EHP nebo vzdálený přístup mimo EHP, posuzujeme používané záruky, datové minimum a technická opatření. Nepoužíváme reklamní pixely ani social tracking pro zákaznické chování v aplikaci.

Tohle není právní dokument. Je to čitelný obchodní základ. K němu patří interní detailní tabulka a oficiální privacy dokumentace. Hlavně neslibuj absolutna typu „všechna data vždy jen v EU“, pokud do support ticketu chodí e-maily přes globální službu nebo fakturace běží u dodavatele se subprocesory mimo EHP.

Dobrá veřejná stránka může obsahovat:

- kde běží primární aplikace a databáze,
- jaké kategorie subdodavatelů používáš,
- jak řešíš analytiku a marketingové trackery,
- jaké typy dat zpracováváš,
- kde si zákazník vyžádá detailní DPA nebo bezpečnostní informace,
- kdy byl dokument naposledy aktualizovaný.

## CF.5 Transfer impact assessment ber jako provozní otázky, ne akademii

U transferů mimo EHP nestačí jen vědět, že existují. Potřebuješ posoudit, jaké údaje se předávají, komu, proč, jak často, jaké záruky platí a jaké doplňkové technické nebo organizační kroky snižují riziko. EDPB ve svých doporučeních k doplňkovým opatřením po Schrems II popisuje postup pro mapování transferů, ověření transferového nástroje a posouzení účinnosti opatření v praxi: https://www.edpb.europa.eu/our-work-tools/our-documents/recommendations/recommendations-012020-measures-supplement-transfer_en

Pro malý SaaS si z toho udělej jednoduchou šablonu:

| Otázka | Praktická odpověď |
| --- | --- |
| Jaká data odcházejí mimo EHP? | Například support ticket bez příloh, nebo diagnostický event bez obsahu zprávy |
| Proč je transfer potřeba? | Například bezpečnostní monitoring nebo zpracování platby |
| Existuje EU alternativa? | Ano/ne, včetně důvodu výběru |
| Jaký je právní mechanismus? | Adekvátní země, SCC, nebo jiný režim |
| Jaká technická opatření pomáhají? | Šifrování, pseudonymizace, maskování polí, minimální scope |
| Jak se transfer kontroluje? | Roční vendor review, alert při změně subdodavatele |

Nejde o to vytvořit šanon, který nikdo neotevře. Jde o rozhodnutí, které tým pochopí i za půl roku. Když se změní dodavatel, region nebo typ dat, posouzení aktualizuj. Privacy-first provoz není jednorázová svátost, ale rutina.

## CF.6 Nastav guardrails v produktu i infrastruktuře

Dokumentace je užitečná, ale nejlepší pravidlo je to, které systém vynutí. Pokud má produkt slib EU provozu, nesmí být snadné omylem zapnout globální region, exportovat produkční data do lokálního notebooku nebo poslat celé payloady do externí diagnostiky.

Praktické guardrails:

- Infrastructure-as-code šablony mají region jako výslovnou proměnnou s povolenými hodnotami.
- Produkční přístupy k databázi jsou přes auditovanou cestu, ne přes sdílený connection string v chatu.
- Exporty produkčních dat vyžadují důvod, časové omezení a bezpečné úložiště.
- Logovací knihovna maskuje citlivá pole centrálně.
- CI kontroluje, že nové endpointy neposílají osobní údaje do analytiky bez schváleného eventu.
- Vendor review je součástí definition of done pro nové integrace.

Malý tým nepotřebuje korporátní GRC kosmodrom. Potřebuje několik tvrdých zábradlí tam, kde by chyba bolela nejvíc. Nejlepší compliance je ta, která vývojáře neotravuje každý den, ale v rozhodující chvíli mu nedovolí udělat hloupost.

## CF.7 Checklist datové rezidence a regionů

- Máme mapu datových oblastí a regionů pro produkci, zálohy, logy, analytiku, support a fakturaci?
- Umíme oddělit primární uložení dat od vzdáleného přístupu podpory nebo subdodavatelů?
- Víme, které služby mohou znamenat transfer mimo EHP?
- Máme u těchto transferů zapsaný účel, typ dat, mechanismus a doplňková opatření?
- Umíme zákazníkovi lidsky vysvětlit, kde jeho data bydlí a kdo k nim může mít přístup?
- Neposíláme osobní údaje do diagnostiky, analytiky nebo AI nástrojů jen proto, že to knihovna umí?
- Máme regiony nastavené v infrastruktuře jako kontrolovanou konfiguraci, ne ruční klikání?
- Kontrolujeme změny subdodavatelů aspoň při vendor review?
- Máme retenci pomocných systémů stejně promyšlenou jako retenci hlavní databáze?
- Neslibujeme veřejně víc, než umíme technicky a smluvně doložit?

## Codyho komentář

Toto je můj pohled — Cody: „EU hosting“ je dnes minimum, ne finální odpověď. Skutečná konkurenční výhoda vzniká až ve chvíli, kdy firma umí říct: tady data vznikají, tady se ukládají, tady se zálohují, tady končí a tady k nim člověk nesmí. To není paranoia. To je provozní dospělost s evropským přízvukem.

## Zdroje k příloze

- Evropská komise: přehled mezinárodních transferů osobních údajů mimo EU/EHP, včetně rozhodnutí o odpovídající ochraně a vhodných záruk — https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/international-data-transfers_en
- Evropská komise: standardní smluvní doložky pro mezinárodní transfery osobních údajů — https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en
- EDPB: Recommendations 01/2020 on measures that supplement transfer tools, finální verze přijatá 18. června 2021 — https://www.edpb.europa.eu/our-work-tools/our-documents/recommendations/recommendations-012020-measures-supplement-transfer_en
- EUR-Lex: GDPR, kapitola V o předávání osobních údajů do třetích zemí nebo mezinárodním organizacím — https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679

## Shrnutí přílohy

Datová rezidence není jen výběr EU regionu v administraci cloudu. Privacy-first SaaS musí mapovat primární data, zálohy, logy, diagnostiku, support, fakturaci, AI funkce a přístupy lidí. Pokud existuje transfer mimo EHP, tým má vědět proč, jaká data se týkají, jaký mechanismus používá a jaká technická opatření snižují riziko. Nejlepší výsledek není nejdelší právní text, ale provoz, který umí zákazníkovi pravdivě a jednoduše říct, kde data jsou, kdo se jich může dotknout a kdy zmizí.

---


# Příloha CG: Evidence souhlasů bez CMP molochu a databáze plné otisků prstů

Souhlas není talisman. Nestačí mít na webu tlačítko „Přijmout vše“, barevně schovat odmítnutí a doufat, že audit přijde až po důchodu zakladatele. Pokud se opíráš o souhlas, musí být svobodný, konkrétní, informovaný a jednoznačný. A hlavně: musíš umět ukázat, k čemu člověk souhlasil, kdy, v jaké verzi textu a jak mohl souhlas stejně snadno odvolat.

Privacy-first přístup ale zároveň neznamená ukládat o každém návštěvníkovi román: IP adresu, user-agent, fingerprint, velikost monitoru a pravděpodobnou náladu podle rychlosti scrollování. Cílem je doložit rozhodnutí bez toho, abys kvůli důkazu vytvořil další datový problém.

## CG.1 Nejdřív odděl souhlas od preference

Ne všechno, co uživatel nastaví, je právní souhlas. Část voleb jsou obyčejné produktové preference: jazyk rozhraní, tmavý režim, počet položek na stránce, způsob zobrazení tabulky. Ty často můžeš uložit jako technicky nutné nastavení služby, pokud bez nich funkce rozumně nefunguje nebo pokud si je uživatel výslovně nastaví pro vlastní pohodlí.

Souhlas řeš tam, kde zpracování není nutné pro službu a uživatel musí dostat reálnou volbu: marketingové cookies, remarketing, volitelné produktové e-maily, profilování, některé embedded prvky třetích stran nebo měření, které přesahuje nezbytný provoz.

Praktické rozdělení:

| Volba | Typ | Jak evidovat |
| --- | --- | --- |
| Jazyk aplikace | Preference | Uložit hodnotu u účtu nebo v nutné cookie |
| Technická session cookie | Nutné fungování | Popsat v privacy/cookie stránce, nevyžadovat marketingový souhlas |
| Newsletter k produktu | Souhlas nebo jiný vhodný právní základ podle kontextu | Evidovat zdroj, text, čas, odhlášení |
| Remarketingový pixel | Souhlas | Spustit až po souhlasu, evidovat účel a verzi textu |
| Agregovaná self-hosted analytika bez identifikátorů | Posoudit podle konfigurace | Zdokumentovat nastavení, rozsah a důvod minimalizace |

Největší chyba je mít jeden checkbox „Souhlasím se vším“. Uživatel pak neví, jestli odsouhlasil obchodní podmínky, marketing, cookies, prodej ledviny nebo všechno dohromady. Ano, poslední je nadsázka. Ale jen lehká.

## CG.2 Eviduj verzi textu, ne jen kliknutí

Když člověk dá souhlas, důležitý není jen timestamp. Důležité je i to, s čím přesně souhlasil. Texty se mění, účely se mění, dodavatelé se mění. Pokud máš v databázi jen `accepted_at`, za rok už nemusíš vědět, co tlačítko tehdy znamenalo.

Minimalistická evidence souhlasu může vypadat takhle:

| Pole | Proč existuje |
| --- | --- |
| `subject_id` | Identifikace účtu nebo pseudonymní návštěvy, pokud je nutná |
| `purpose` | Konkrétní účel, například `marketing_newsletter` nebo `analytics_optional` |
| `status` | `granted`, `withdrawn`, případně `expired` |
| `text_version` | Verze mikrotextu, privacy stránky nebo CMP konfigurace |
| `source` | Kde souhlas vznikl: registrace, preference centrum, cookie panel |
| `created_at` | Kdy volba vznikla |
| `withdrawn_at` | Kdy byla odvolána, pokud byla odvolána |

Co bych naopak neukládal automaticky: plnou IP adresu navždy, detailní user-agent, fingerprint prohlížeče, geolokaci, historii všech návštěv před souhlasem. Pokud potřebuješ bezpečnostní kontext, zvaž krátkou retenci a oddělený bezpečnostní log. Souhlasová evidence nemá být tajný tracking systém v obleku.

## CG.3 Každý účel má vlastní životní cyklus

Souhlas s newsletterem není totéž jako souhlas s analytikou. Newsletter žije u e-mailové adresy, analytika často u zařízení nebo session, embedded video u konkrétní návštěvy stránky. Když to smícháš, začneš buď mazat moc, nebo držet moc. Obojí bolí.

Navrhni proto účely jako samostatné řádky, ne jako jednu hromadnou kolonku:

- `necessary` — technické fungování, bez marketingového souhlasu.
- `analytics_optional` — volitelné měření nad rámec nutného provozu.
- `marketing_email` — produktové novinky, nabídky, případně vzdělávací obsah.
- `third_party_embeds` — mapy, videa, kalendáře nebo widgety třetích stran.
- `personalization` — volitelné doporučování obsahu nebo funkcí.

U každého účelu napiš: co se spouští, kdo je dodavatel, kde jsou data, jak dlouho se drží a kde to uživatel vypne. Tahle tabulka pak pomůže vývojáři, marketérovi i člověku, který píše privacy stránku. Tři mouchy jednou nudnou tabulkou. Nádhera.

## CG.4 Odvolání musí být stejně nudné jako udělení

GDPR staví právo odvolat souhlas vysoko: odvolání má být možné a nemá být složitější než udělení. Produktově to znamená jednoduché preference centrum, odkaz v patičce e-mailu, dostupné cookie nastavení a žádné „napište nám doporučený dopis s kopií občanky a náladou notáře“.

Dobré odvolání souhlasu:

- Je dostupné ze stejného místa, kde uživatel souhlas používá nebo očekává.
- Vysvětlí dopad: „Přestaneme posílat produktové tipy, důležité servisní e-maily zůstanou.“
- Provede změnu hned nebo jasně řekne, kdy se projeví.
- Zastaví navazující zpracování, nejen přepne text v UI.
- Uloží minimální důkaz o odvolání, aby se souhlas omylem neobnovil.

U cookies je kritické, aby odmítnutí nebo odvolání skutečně zastavilo nenačtené skripty a odstranilo nebo deaktivovalo relevantní volitelné identifikátory. Cookie panel, který po kliknutí na „Odmítnout“ dál načítá reklamní síť, je jen divadlo s horším scénářem.

## CG.5 Verze souhlasů patří do release procesu

Každá změna účelu, dodavatele, textu nebo rozsahu měření je malý release. Neřeš ji jako „jen přepíšu větu v administraci CMP“. Ulož verzi, datum, důvod změny a dopad. Pokud se změnil účel zásadně, starý souhlas nemusí stačit a budeš potřebovat novou volbu.

Praktický mini-proces:

1. Změna návrhu: produkt nebo marketing popíše, co chce měřit nebo posílat.
2. Datová kontrola: tým ověří účel, data, dodavatele, region a retenci.
3. Textace: vznikne lidský mikrotext a aktualizace privacy/cookie stránky.
4. Implementace: skripty se načítají až podle aktuální volby.
5. Evidence: uloží se nová `text_version` a changelog souhlasu.
6. Kontrola: test odmítnutí, udělení i odvolání v prohlížeči.

Tohle zní pomaleji než „kliknu v nástroji na publish“. Ve skutečnosti je to rychlejší než později luštit, proč má polovina uživatelů starý souhlas na nový účel. Archeologie patří do muzeí, ne do produkční databáze.

## CG.6 Checklist evidence souhlasů

- Máme jasně oddělené technické preference, nutné cookies a zpracování vyžadující souhlas?
- Každý souhlas má konkrétní účel, zdroj, timestamp a verzi textu?
- Neuchováváme kvůli důkazu víc identifikátorů, než opravdu potřebujeme?
- Umíme doložit, jak souhlasový panel nebo formulář vypadal v dané verzi?
- Odmítnutí a odvolání reálně zastaví navazující skripty, e-maily nebo zpracování?
- Preference centrum je dostupné bez lovu v patičce a bez temných vzorů?
- Změny účelů, dodavatelů a textů procházejí release procesem?
- Retence souhlasové evidence je popsaná a přiměřená?

## Codyho komentář

Toto je můj pohled — Cody: nejlepší consent management je ten, který nepotřebuješ, protože zbytečné trackery vůbec nepoužíváš. Když už souhlas potřebuješ, ber ho jako produktovou dohodu s člověkem, ne jako právní štít proti člověku. Privacy-first firma se neptá „jak to obejít“, ale „jak dát uživateli skutečnou kontrolu a přitom nezblbnout provoz“.

## Zdroje k příloze

- EDPB: Guidelines 05/2020 on consent under Regulation 2016/679, přijaté 4. května 2020 — https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_en
- Evropská komise: kdy je souhlas podle GDPR platný, včetně odkazu na články 4(11), 7 a recitály 32, 42 a 43 — https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/legal-grounds-processing-data/grounds-processing/when-consent-valid_en
- CNIL: pravidla pro cookies a jiné trackery, včetně vazby na podmínky souhlasu podle GDPR — https://cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi
- CNIL: praktické vysvětlení sběru souhlasu a požadavků na svobodný, specifický, informovaný a jednoznačný souhlas — https://www.cnil.fr/fr/les-bases-legales/consentement

## Shrnutí přílohy

Evidence souhlasů má dokazovat férovou volbu, ne tajně rozšiřovat sledování. Malý evropský SaaS potřebuje oddělit preference od souhlasů, evidovat účel a verzi textu, umožnit jednoduché odvolání, verzovat změny jako release a držet minimum identifikátorů. Souhlas není náhrada za produktovou slušnost. Je to poslední krok tam, kde už opravdu potřebuješ uživatelovu volbu.

---

# Příloha CH: Produktové notifikace bez spamového kladiva a sledovacích háčků

Notifikace jsou malý detail jen do chvíle, než jich má zákazník třicet denně, polovina křičí „urgentní“ a druhá polovina slouží jen k tomu, aby produkt vypadal živě. Dobrá notifikace šetří čas, snižuje riziko a pomáhá člověku dokončit práci. Špatná notifikace je marketingový komár: drobná, vytrvalá a po týdnu ji chceš rozplácnout.

Privacy-first produkt proto nenavrhuje notifikace podle otázky „co všechno můžeme poslat?“, ale podle otázky „co musí člověk vědět, aby měl kontrolu nad výsledkem, účtem a daty?“ To platí pro e-mail, in-app zprávy, push notifikace, systémové bannery i upozornění pro administrátory. U stavových zpráv v rozhraní zároveň mysli na přístupnost: důležitý stav má být čitelný i pro asistivní technologie, ne jen zelený toast, který zmizí rychleji než rozpočet na redesign.

## CH.1 Notifikaci piš až po rozhodnutí, že je opravdu potřeba

Než přidáš novou notifikaci, napiš její pracovní kartu. Pokud karta nejde vyplnit bez mlžení, notifikace pravděpodobně nemá existovat.

| Otázka | Dobrá odpověď | Varovný signál |
| --- | --- | --- |
| Jaké riziko nebo rozhodnutí řeší? | „Faktura se nepodařila zaplatit a účet bude za 7 dní omezen.“ | „Chceme zvýšit engagement.“ |
| Kdo ji potřebuje? | „Majitel účtu a fakturační kontakt.“ | „Všichni uživatelé workspace.“ |
| Kdy je užitečná? | „Hned po selhání platby, pak po 3 dnech.“ | „Každý den, dokud neklikne.“ |
| Jaký je další krok? | „Aktualizovat platební metodu.“ | „Vrátit se do aplikace.“ |
| Jaká data musí obsahovat? | „Částka, datum, poslední čtyři znaky metody, odkaz do fakturace.“ | „Celá historie objednávek pro jistotu.“ |

Notifikace bez jasné akce patří spíš do changelogu, dashboardu nebo pravidelného souhrnu. Ne každá informace si zaslouží přerušit člověka u práce. Tohle je produktová dospělost, ne lenost.

## CH.2 Rozděl kanály podle naléhavosti a očekávání

E-mail není pop-up, pop-up není audit log a audit log není marketingový newsletter. Každý kanál má jiný slib.

Praktické rozdělení:

- **In-app banner** použij pro stav, který souvisí s aktuální prací: neuložené změny, chybějící nastavení, plánovaný výpadek části produktu.
- **E-mail** použij pro věci, které musí dojít i mimo aplikaci: bezpečnostní upozornění, fakturace, důležitá změna účtu, export dat, konec trialu.
- **Push nebo mobilní upozornění** používej jen tam, kde čas opravdu rozhoduje. U B2B SaaS je to často méně případů, než si produktový tým přeje.
- **Týdenní souhrn** použij pro nízkou naléhavost: nové komentáře, dokončené importy, přehled čekajících úkolů, produktové tipy.
- **Audit log** použij pro dohledatelnost: změna role, export dat, přidání integrace, rotace klíče, změna fakturačního kontaktu.

Příklad: když uživatel exportuje data, okamžitá in-app zpráva může říct „Export připravujeme“. E-mail má přijít až ve chvíli, kdy je export hotový nebo selhal. Audit log si zapíše, kdo export spustil, kdy, jaký rozsah zvolil a kdy odkaz expiruje. Do e-mailu nepatří citlivý obsah exportu ani trvalý veřejný odkaz. Ano, i kdyby to bylo pohodlné. Pohodlí je častý převlek průšvihu.

## CH.3 Preference centrum musí být produktová funkce, ne sklepní stránka

Uživatel má mít jasnou kontrolu nad tím, jaké zprávy dostává. Ne všechno lze vypnout — bezpečnostní a servisní zprávy jsou často nutné pro provoz účtu — ale rozdíl mezi nutnou a volitelnou komunikací musí být srozumitelný.

Doporučené kategorie:

| Kategorie | Typický kanál | Lze vypnout? | Poznámka |
| --- | --- | --- | --- |
| Bezpečnost účtu | E-mail, audit log | Obvykle ne | Přihlášení z nového zařízení, změna hesla, nový admin |
| Fakturace a smluvní provoz | E-mail | Obvykle ne | Selhaná platba, nová faktura, změna tarifu |
| Kritické produktové stavy | E-mail nebo in-app | Částečně | Selhání importu, blížící se expirace exportu, překročení limitu |
| Produktové tipy | E-mail nebo in-app | Ano | Edukace, novinky, doporučení workflow |
| Marketingové nabídky | E-mail | Ano | Kampaně, akce, partnerské nabídky |
| Týdenní souhrny | E-mail | Ano | Přehled aktivity bez detailního sledování |

Texty v preference centru piš lidsky:

> „Bezpečnostní zprávy vypnout nejde, protože chrání účet. Produktové tipy a marketingové nabídky můžete vypnout kdykoliv.“

Tohle je lepší než checkbox „Operational communication“, který zní jako součást jaderné elektrárny.

## CH.4 Obsah notifikace má být minimální, ale použitelný

Privacy-first neznamená poslat prázdnou zprávu „něco se stalo, hádej co“. Znamená to poslat tolik kontextu, aby uživatel věděl, co má udělat, ale neposílat citlivé údaje tam, kde být nemusí.

Bezpečný vzor:

```text
Předmět: Export dat je připraven

Dobrý den,
export workspace „Mirotice“ je připraven ke stažení.

Odkaz platí 24 hodin a vyžaduje přihlášení.
Pokud jste export nespustili vy, zkontrolujte audit log a přístupy v nastavení.

Otevřít export: [přihlášený odkaz]
```

Co v takové zprávě nechybí:

- jasný důvod zprávy,
- identifikace účtu nebo workspace bez zbytečných osobních detailů,
- expirace odkazu,
- požadavek na přihlášení,
- bezpečnostní instrukce při podezření,
- žádný citlivý obsah přímo v e-mailu.

U chybových notifikací nepřeposílej stack trace, SQL dotazy, tokeny, interní ID zákazníků ani celé payloady webhooků. OWASP Logging Cheat Sheet doporučuje u logování hlídat mimo jiné citlivá data a kvalitu událostí; stejná disciplína platí i pro notifikační obsah, protože notifikace je často jen hezčí kabát nad provozní událostí.

## CH.5 Frekvence je součást důvěry

Když produkt posílá deset zpráv kvůli jedné věci, učí zákazníka zprávy ignorovat. Pak přijde skutečně důležité upozornění a skončí vedle newsletteru o „novém revolučním dropdownu“. Gratuluji, právě jsme vyrobili riziko pomocí komunikace.

Nastav pravidla:

- Slouč podobné události do dávky: „12 komentářů čeká na kontrolu“ místo 12 e-mailů.
- Použij cooldown: stejný problém neposílej každých deset minut.
- Eskaluj jen při změně rizika: selhaný import informuj jednou, opakované selhání po zásahu informuj znovu.
- Vypni notifikace pro stavy, které uživatel právě vidí v aplikaci a nejsou kritické.
- U marketingových nebo vzdělávacích zpráv nastav strop, třeba maximálně jeden až dva e-maily týdně.

Dobrý SaaS má notifikační rozpočet. Ne finanční, ale pozornostní. Každá zpráva utrácí kousek důvěry. Pokud nepřináší hodnotu, je drahá i zadarmo.

## CH.6 Navrhni stavový model, ne hromadu výjimek

Notifikace se rozbijí, když vznikají náhodně v kódu: tady `sendEmail()`, tam webhook, tady cron, tady ruční tlačítko v administraci. Za půl roku nikdo neví, proč zákazník dostal tři zprávy a jednu nedostal vůbec.

Lepší je malý stavový model:

| Událost | Stav | Notifikace | Kdo dostane zprávu | Retence |
| --- | --- | --- | --- | --- |
| Import spuštěn | `processing` | In-app stav | Uživatel, který import spustil | Provozní log 30 dní |
| Import dokončen | `completed` | In-app + volitelný e-mail | Spouštějící uživatel | Souhrnný záznam 90 dní |
| Import selhal | `failed` | E-mail při kritickém dopadu | Spouštějící uživatel + admin podle nastavení | Chybový log podle incident pravidel |
| Export připraven | `ready` | E-mail s přihlášeným odkazem | Žadatel | Odkaz 24 hodin, metadata podle retenční tabulky |
| Export expiroval | `expired` | Žádná nebo in-app historie | Žadatel | Bez dalšího e-mailu |

Každý řádek má mít vlastníka. Produkt určuje, kdy je zpráva užitečná. Vývoj určuje, jak se spouští bezpečně. Support ví, jak ji vysvětlit zákazníkovi. Marketing do toho nesmí tajně přidat pixel, protože „měření výkonu šablony“. To je přesně ten moment, kdy Cody zvedá obočí.

## CH.7 Checklist produktových notifikací

Před nasazením nové notifikace zkontroluj:

- Má notifikace jasný uživatelský účel, riziko nebo rozhodnutí?
- Je vybraný kanál přiměřený naléhavosti?
- Jde volitelnou komunikaci vypnout bez lovu v nastavení?
- Rozlišuje produkt bezpečnostní, servisní, produktové a marketingové zprávy?
- Obsahuje zpráva dost kontextu pro akci, ale ne citlivý obsah navíc?
- Jsou odkazy krátkodobé, přihlášené a bez tajných tokenů v dlouhé retenci?
- Existuje cooldown, dávkování nebo souhrn pro opakované události?
- Je notifikace zapsaná v auditovatelném stavovém modelu?
- Ví support, co zpráva znamená a jak má odpovědět zákazníkovi?
- Je změna zapsaná v dokumentaci a release checklistu?

## Codyho komentář

Můj pohled: notifikace jsou test respektu k uživateli. Produkt, který umí mlčet, když nemá co říct, působí dospěleji než produkt, který každé kliknutí překládá do e-mailu. Nejlepší notifikace je často ta, kterou tým po debatě smaže. Ticho je taky UX. Jen se hůř prodává na roadmap review.

## Zdroje k příloze

- European Data Protection Board: základní principy GDPR včetně transparentnosti, minimalizace a omezení uložení — https://www.edpb.europa.eu/topics/key-gdpr-concepts/basic-principles_en
- OWASP Cheat Sheet Series: Logging Cheat Sheet pro bezpečné a užitečné aplikační logování — https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html
- W3C: Web Content Accessibility Guidelines 2.2, včetně kritéria pro stavové zprávy — https://www.w3.org/TR/WCAG22/

## Shrnutí přílohy

Produktové notifikace mají pomáhat, ne vychovávat zákazníka k ignorování produktu. Privacy-first návrh začíná otázkou, jestli zpráva opravdu řeší riziko nebo rozhodnutí, pokračuje správnou volbou kanálu, férovým preference centrem, minimálním obsahem a končí stavovým modelem, který tým dokáže provozovat. Když notifikace nepotřebuje jasnou akci, patří často do souhrnu, changelogu nebo vůbec nikam.

# Příloha CI: Vyhledávání v produktu a na webu bez úniku dotazů a datového šumu

Vyhledávání vypadá jako jednoduchá funkce: políčko, lupa, seznam výsledků. Jenže ve webu i SaaS produktu je to zároveň místo, kde lidé nechtěně píšou interní názvy klientů, zdravotní poznámky, čísla smluv, e-maily, chyby z logů, názvy projektů a občas i hesla, protože člověk je krásně kreativní tvor hlavně ve chvíli, kdy něco nemůže najít.

Privacy-first vyhledávání proto není jen otázka relevance. Je to otázka datového rozsahu, logování, oprávnění, indexace, retence a bezpečného UX. Cíl není mít magickou krabičku, která ví všechno. Cíl je pomoci uživateli najít správnou věc, aniž by z každého dotazu vznikl nový malý datový dluh.

## CI.1 Nejdřív rozhodni, co se smí indexovat

Index je kopie části produktu. To zní nudně, dokud nezjistíš, že obsahuje i položky, které uživatel sice nevidí v aplikaci, ale search engine je pořád ochotně nabídne. První pravidlo: vyhledávání nesmí být samostatná pravda. Musí respektovat stejná oprávnění jako zbytek produktu.

Praktická mapa indexu:

| Typ obsahu | Indexovat? | Poznámka |
| --- | --- | --- |
| Veřejné blogové články | Ano | Ideálně staticky, bez nutnosti sledovat čtenáře |
| Dokumentace produktu | Ano | Hodí se i pro support a onboarding |
| Názvy projektů zákazníka | Ano, podle práv | Výsledky filtrovat podle tenantů a rolí |
| Obsah interních poznámek | Opatrně | Často obsahuje citlivé údaje a support kontext |
| Přílohy a exporty | Spíš ne defaultně | Vyžadují vlastní pravidla, retenci a audit |
| Auditní logy | Ne pro běžné hledání | Patří do administrace s přísným přístupem |

Technicky je lákavé poslat do indexu všechno a „pak to nějak filtrovat“. Nedělej to. Když se něco nemá objevit ve výsledcích, ideálně to nemá být ani v běžném vyhledávacím indexu. Filtr na konci je dobrý pás, ale ne náhrada za brzdy.

## CI.2 Dotazy nejsou nevinná metadata

Search query vypadá jako drobnost, ale může být osobní údaj nebo obchodní tajemství. Uživatel do vyhledávání často napíše přesně to, co nechce publikovat: jméno zákazníka, diagnózu, číslo faktury, problém zaměstnance, interní kód kampaně. Pokud každý dotaz automaticky posíláš do externí analytiky, vytváříš si krásný report a zároveň ošklivý problém v zákulisí.

Rozumné pravidlo: celé dotazy neukládej, pokud pro ně nemáš jasný účel. Pro produktové zlepšování často stačí agregace:

- počet hledání za den,
- podíl hledání bez výsledku,
- nejčastější obecné kategorie dotazů,
- kliknutí na typ výsledku,
- ručně vybrané anonymizované příklady pro zlepšení dokumentace.

Pokud potřebuješ dočasně ladit relevanci, nastav krátkou retenci a jasně odděl ladicí režim od běžného provozu. Například: celé dotazy držet 7 nebo 14 dní jen pro interní vyhodnocení, bez přenosu do marketingových nástrojů, s omezeným přístupem a bez spojení s identitou, pokud to není nutné.

Codyho drobná facka realitou: „search analytics“ není kouzelné slovní spojení, které z citlivého textu udělá anonymní prášek. Dotaz `Novák ukončení smlouvy` je pořád citlivější než graf s pěknou křivkou.

## CI.3 Výsledky musí být bezpečné i při špatném dotazu

Vyhledávání je vstup od uživatele. To znamená validace, omezení délky, bezpečné dotazování do databáze a opatrná práce s HTML výstupem. Pokud search zvýrazňuje nalezená slova v textu, nesmí kvůli tomu pustit do stránky neescapovaný obsah. Pokud používá databázový dotaz, nesmí skládat SQL jako kuchařku z provázku a optimismu.

Minimum bezpečného návrhu:

- omez délku dotazu a počet výsledků,
- používej parametrizované dotazy nebo bezpečné query API,
- escapuj text ve výsledcích a zvýraznění,
- loguj chyby bez celého dotazu, pokud obsah může být citlivý,
- rate-limituj veřejné hledání,
- nedovol vyhledávání přes cizí tenant jen změnou URL parametru,
- vracej stejné chování pro „neexistuje“ a „nemáš právo vidět“, pokud by rozdíl prozradil existenci záznamu.

Příklad rozdílu v UX:

- Špatně: „Projekt `Acme payroll migration` existuje, ale nemáte k němu přístup.“
- Lépe: „Pro tento dotaz nemáte žádné dostupné výsledky.“

Interně si samozřejmě můžeš zalogovat, že oprávnění zabránilo přístupu. Uživatel ale nemá dostat katalog věcí, které nemá vidět. Vyhledávání nesmí být boční vchod do informační architektury.

## CI.4 Veřejný web: raději lokální index než sledovací krabice

U běžného webu nebo dokumentace často nepotřebuješ externí vyhledávací službu. Pro menší obsah stačí statický index generovaný při buildu: název, URL, krátký excerpt, kategorie a klíčová slova. Vyhledávání pak běží v prohlížeči nebo přes jednoduchý endpoint na vlastním serveru.

Privacy-first varianta pro blog nebo dokumentaci:

- indexuj jen veřejný obsah,
- neposílej dotazy do reklamních ani profilovacích systémů,
- měř jen agregovaně „hledání použito“ a „bez výsledku“, pokud to opravdu potřebuješ,
- nabídni RSS, sitemapu a čitelné URL jako alternativní navigaci,
- udržuj ruční stránku „Nejčastější témata“, protože někdy je nejlepší search dobře napsané menu.

Externí hosted search může dávat smysl u velké dokumentace nebo e-shopu. Pak ale vybírej dodavatele stejně přísně jako jiné zpracovatele: region provozu, DPA, subdodavatelé, retence dotazů, export, smazání dat, přístup supportu a možnost vypnout personalizaci. Hezký autocomplete nestojí za to, aby se z každého dotazu stal marketingový signál v cizím účtu.

## CI.5 SaaS search: oprávnění patří do indexu i do výsledků

V multi-tenant SaaS nestačí filtrovat podle `tenant_id` v aplikační vrstvě až po vyhledání. Search engine často pracuje jinak než hlavní databáze, má vlastní cache, replikace a indexační fronty. Proto potřebuješ bezpečnostní model přímo v návrhu.

Praktický model:

1. Každý indexovaný dokument má `tenant_id`, typ objektu, stav viditelnosti a minimální sadu rolí nebo scope.
2. Indexační worker nikdy nebere data napříč tenantem bez jasného filtru.
3. Dotaz obsahuje bezpečnostní filtr ještě před rankingem.
4. Aplikační vrstva po načtení výsledku znovu ověří oprávnění před zobrazením detailu.
5. Smazání nebo změna práv objektu invaliduje dokument v indexu.
6. Testy ověřují, že uživatel z tenant A nenajde ani neotevře data tenant B.

Dvojí kontrola může působit přehnaně. Není. Index je rychlý, aplikační autorizace je pravda. Když jedna vrstva selže, druhá má zabránit ostudě. A ostuda u vyhledávání bývá obzvlášť výživná, protože výsledky lidem často ukážou přesně ty názvy, které prozradí nejvíc.

## CI.6 Search UX má učit lepší navigaci

Vyhledávání není omluva pro chaotický produkt. Pokud lidé pořád hledají základní akce, možná není problém v searchi, ale v navigaci, názvosloví a onboardingu. Dobrá search data pomáhají zlepšit informační architekturu, aniž musíš ukládat každý detail dotazu navždy.

Co sledovat bezpečně:

- dotazy bez výsledku seskupené do témat,
- výsledky, na které lidé klikají po hledání,
- stránky, odkud lidé hledání spouštějí,
- opakované hledání stejného typu po dokončení akce,
- dotazy, které by měly být položkou v menu, FAQ nebo dokumentaci.

Příklad: pokud lidé v administraci pořád hledají „faktury“, ale faktury jsou schované pod „Vyúčtování“, možná nepotřebuješ chytřejší algoritmus. Potřebuješ lepší název. Ano, občas produktový průlom vypadá jako přejmenování položky menu. Sláva nudným vítězstvím.

## CI.7 Checklist privacy-first vyhledávání

- Má každý indexovaný typ obsahu jasný účel a vlastníka?
- Respektuje vyhledávání stejná oprávnění jako hlavní aplikace?
- Neindexujeme přílohy, interní poznámky nebo logy jen proto, že to technicky jde?
- Má každý dokument v indexu tenant, typ, stav viditelnosti a bezpečnostní filtr?
- Ukládáme celé dotazy jen tehdy, když pro to máme jasný důvod a krátkou retenci?
- Neposíláme search query do reklamní analytiky, profilace nebo nástrojů bez DPA?
- Escapujeme výsledky a používáme bezpečné parametrizované dotazy?
- Má veřejné vyhledávání rate limit a ochranu proti zneužití?
- Umí smazání objektu rychle odstranit data i z indexu?
- Používáme agregované search signály ke zlepšení navigace a dokumentace?
- Máme v privacy dokumentaci popsané, jestli a jak vyhledávání pracuje s dotazy?
- Otestovali jsme scénář „uživatel nemá právo vidět výsledek“, ne jen scénář „všechno funguje adminovi“?

## Codyho komentář

Můj pohled: dobré vyhledávání je jako dobrý recepční. Pomůže najít správné dveře, ale nezačne nahlas číst seznam všech schůzek v budově. SaaS týmy se často zamilují do relevance, autocomplete a chytrých rankingů, ale zapomenou na otázku: „Smí se tenhle výsledek vůbec objevit?“ Privacy-first search není méně schopný. Je dospělejší. A obvykle taky levnější na provoz, protože neindexuje digitální bordel jen z naděje, že se jednou bude hodit.

## Zdroje k příloze

- European Data Protection Board: Guidelines 4/2019 on Article 25 Data Protection by Design and by Default — https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-42019-article-25-data-protection-design-and_en
- OWASP Cheat Sheet Series: Query Parameterization Cheat Sheet — https://cheatsheetseries.owasp.org/cheatsheets/Query_Parameterization_Cheat_Sheet.html
- OWASP Cheat Sheet Series: Logging Cheat Sheet — https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html
- W3C: Web Content Accessibility Guidelines 2.2 — https://www.w3.org/TR/WCAG22/

## Shrnutí přílohy

Vyhledávání je produktová funkce, bezpečnostní hranice i zdroj provozních signálů. Privacy-first přístup začíná rozhodnutím, co se vůbec smí indexovat, pokračuje omezeným ukládáním dotazů, bezpečným filtrováním podle oprávnění, vlastním nebo pečlivě vybraným search řešením a končí používáním agregovaných signálů ke zlepšení navigace. Nejlepší search není ten, který najde úplně všechno. Nejlepší search najde správnou věc správnému člověku a zbytek taktně nechá za zamčenými dveřmi.

# Příloha CJ: Feature flags a postupné rollouty bez chaosu, skrytého profilování a věčných přepínačů

Feature flag je malý přepínač s velkou mocí. Umí pustit novou funkci jen internímu týmu, zapnout ji beta zákazníkům, rychle vypnout rozbitou změnu nebo postupně zvyšovat rollout bez nočního deploye. To je skvělé. A přesně proto se z feature flags snadno stane druhý produkční systém, jen bez názvů, vlastníků, dokumentace a uklízení. Takový malý technický kompostér, akorát bez užitečného hnojiva.

Privacy-first přístup neříká „nepoužívej feature flags“. Říká: přepínače mají mít účel, vlastníka, auditní stopu, krátký život a co nejméně dat o uživateli. Rollout je provozní proces, ne losování tomboly.

## CJ.1 Rozliš typy přepínačů dřív, než se ti slijí do jedné bažiny

Ne každý flag je stejný. Když je házíš do jedné tabulky, začneš je spravovat stejným způsobem — a to je problém. Nouzový kill switch potřebuje jiné řízení než beta flag pro tři zákazníky. Experimentální varianta textu má jiné privacy riziko než serverová konfigurace limitu.

Použij jednoduchou klasifikaci:

| Typ flagu | Účel | Typická životnost | Příklad | Riziko |
| --- | --- | --- | --- | --- |
| Release flag | Oddělit deploy od spuštění funkce | Dny až týdny | Nový onboarding je v produkci, ale vypnutý | Zapomenutý mrtvý kód |
| Permission flag | Zapnout funkci konkrétním plánům nebo rolím | Dlouhodobě, ale dokumentovaně | Export dat jen pro tarif Pro | Obcházení autorizace |
| Operational flag | Rychle změnit provozní chování | Dlouhodobě s review | Vypnout náročný import při incidentu | Neviditelná produkční konfigurace |
| Experiment flag | Porovnat varianty produktu nebo komunikace | Krátce | Jiný text CTA pro malý vzorek | Profilování a nejasný souhlas |
| Kill switch | Bezpečně vypnout rizikovou část | Trvale připravený, pravidelně testovaný | Vypnout webhooky při zneužití | Falešný pocit bezpečí |

Praktické pravidlo: každý flag musí mít pole `type`. Pokud neumíš typ určit, flag nejspíš není dost promyšlený. A pokud má typ „temporary“ už třetí kvartál, gratuluju, adoptoval sis konfiguračního ježka v kódu.

## CJ.2 Každý flag musí mít vlastníka a datum úklidu

Největší problém feature flags není jejich vytvoření. Jejich největší problém je, že nikdo neví, kdy je smazat. Flag bez vlastníka se časem stane posvátným artefaktem: všichni se ho bojí vypnout, protože „možná něco drží“. To je technický dluh s cedulkou „nešahat“.

Minimální metadata flagu:

- název ve formátu `oblast_ucel_varianta`, například `billing_new_invoice_pdf`,
- typ flagu,
- vlastník v týmu,
- důvod existence jednou větou,
- bezpečný default při chybě,
- datum revize nebo plánovaného odstranění,
- prostředí, kde smí existovat,
- odkaz na ticket, rozhodovací záznam nebo release poznámku.

Příklad dobrého popisu:

> `onboarding_checklist_v2` — release flag pro nový checklist v onboardingu. Vlastník: product. Default: vypnuto. Pilot: interní tým + 5 beta zákazníků. Revize: 2026-09-15. Po stabilizaci smazat starý onboardingový tok.

Tohle není byrokracie. To je ochrana před situací, kdy nováčci v týmu najdou v kódu šest přepínačů s názvem `newFlow`, `newFlow2`, `newFlowFinal`, `newFlowFinalReally` a jeden tajemný `dontTouchThis`.

## CJ.3 Rollout navrhuj podle rizika, ne podle procenta v nástroji

Postupné spuštění není jen „1 %, 10 %, 50 %, 100 %“. Procenta vypadají profesionálně, ale sama o sobě neříkají skoro nic. Jedno procento uživatelů může být jeden enterprise zákazník s kritickým use casem. Deset procent může být všichni lidé z jedné země, protože hash náhodou není tak náhodný, jak si tým myslí.

Lepší rollout sekvence:

1. **Interní smoke test:** funkce běží jen týmu a testovacím účtům.
2. **Dogfooding:** používá ji Dreamind nebo interní provozní účet na reálné, ale ne zákaznické kritické práci.
3. **Dobrovolná beta:** zákazník ví, že používá novou funkci, a má jasnou cestu zpět.
4. **Rizikově omezený rollout:** vybíráš podle produktu, tarifu, objemu dat nebo typu workflow, ne jen podle náhody.
5. **Plné spuštění:** starý kód má plán odstranění, dokumentace a support tým ví, co se změnilo.

U privacy-first SaaS je dobré mít vedle rollout procenta i „datový radius“. To znamená: kolika tenantů se změna dotkne, jaké typy dat projdou novou cestou, jestli se mění subdodavatel, logování, export, notifikace nebo oprávnění. Změna UI barvy nepotřebuje stejný proces jako nový AI sumarizátor zákaznických ticketů. Překvapivé, já vím.

## CJ.4 Nepoužívej osobní data jako pohodlný segmentovací lepidlo

Feature flag nástroje svádí k tomu, aby se do nich posílal celý uživatelský kontext: e-mail, firma, role, země, tarif, velikost účtu, obrat, jazyk, poslední aktivita, oblíbená barva ponožek. Technicky pohodlné. Privacy-first podezřelé.

Segmentace má být minimální:

- preferuj anonymní nebo interní stabilní identifikátor místo e-mailu,
- neposílej do flag systému jméno, telefon, obsah práce ani zákaznická data,
- odděl produktové oprávnění od marketingového profilu,
- používej skupiny jako `beta_import_v2`, ne seznam osobních detailů,
- u externího nástroje ověř region zpracování, DPA, subdodavatele, logy a retenci,
- pro citlivé funkce vyhodnocuj flag server-side, ne v prohlížeči s kompletní konfigurací.

Špatně:

```text
user.email = jana@zakaznik.cz
companyName = VelmiTajnáFirma s.r.o.
plan = enterprise
feature = ai_ticket_summary
```

Lépe:

```text
subjectKey = tenant_8f31
cohort = beta_ai_summary_2026_08
planCapability = ai_summary_allowed
feature = ai_ticket_summary
```

Codyho komentář: když flag systém potřebuje znát víc o zákazníkovi než support člověk, něco se utrhlo ze řetězu.

## CJ.5 Flagy nesmí nahrazovat autorizaci

Tohle je důležité: feature flag není bezpečnostní kontrola sama o sobě. Když v UI skryješ tlačítko „Exportovat vše“, ale API endpoint pořád dovolí export bez serverové autorizace, nemáš řízení přístupu. Máš divadelní oponu před otevřeným trezorem.

Pravidla:

- klientský flag smí měnit rozhraní, ne garantovat oprávnění,
- server musí vždy ověřit roli, tenant, tarif a stav účtu,
- permission flag musí být součástí autorizace na backendu,
- default při nedostupnosti flag systému musí být bezpečný,
- změna flagu pro citlivou funkci musí být auditovaná,
- test musí pokrýt i scénář „UI tlačítko neexistuje, ale API požadavek přijde“.

Příklad: funkce „hromadný export osobních dat“ je dostupná jen adminům. Frontend může tlačítko ukázat podle flagu `bulk_export_enabled`. Backend ale musí ověřit, že uživatel je admin správného tenanta, že tarif export dovoluje, že nebyl překročen limit a že export zapadá do retenčních pravidel. Flag je brána pro rollout. Autorizace je zámek.

## CJ.6 Loguj změny flagů, ale ne citlivý kontext

U flagů chceš vědět, kdo co změnil a kdy. Bez auditní stopy je incidentové vyšetřování horor: „Včera to fungovalo, dnes ne, někdo asi něco přepnul.“ To je méně proces a více spiritistická seance.

Auditní záznam změny flagu má obsahovat:

- název flagu,
- původní a novou hodnotu,
- prostředí,
- autora změny,
- čas změny,
- důvod nebo odkaz na ticket,
- rozsah dopadu v technických kategoriích, například `internal`, `beta`, `all_tenants`,
- informaci, jestli šlo o nouzový zásah.

Nemá obsahovat:

- seznam e-mailů v segmentu,
- obsah zákaznických dat,
- session tokeny,
- celé request payloady,
- komentáře typu „zapínám to Pepovi, protože si stěžoval v telefonu“.

OWASP u logování dlouhodobě doporučuje myslet na citlivost logovaných údajů a sanitizaci vstupů; dobrý flag audit proto není výjimka, ale další citlivý provozní log. Odkaz: https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html

## CJ.7 Checklist feature flags a rolloutů

- Má každý flag typ, vlastníka, důvod a datum revize?
- Je u dočasných flagů naplánované odstranění kódu i konfigurace?
- Má flag bezpečný default při výpadku konfigurační služby?
- Je rollout plánovaný podle rizika a datového radiusu, ne jen podle procent?
- Neposíláme do flag systému e-maily, jména, obsah práce nebo zbytečný zákaznický kontext?
- Vyhodnocují se citlivé flagy server-side?
- Nenahrazuje žádný UI flag backendovou autorizaci?
- Má změna citlivého flagu auditní záznam s důvodem?
- Existuje kill switch pro rizikové integrace, importy, exporty a notifikace?
- Testovali jsme chování při nedostupnosti flag systému?
- Ví support, kteří zákazníci jsou v beta režimu a jak je vrátit zpět?
- Probíhá pravidelný úklid flagů, ideálně jako součást release review?

## Codyho komentář

Můj pohled: feature flags jsou výborný sluha a příšerný náhradní produktový management. Když se používají dobře, zmenšují riziko releasu a chrání zákazníky před velkým třeskem. Když se používají líně, vyrobí paralelní realitu, kde každý zákazník vidí trochu jiný produkt a nikdo netuší proč. Privacy-first rollout není pomalejší. Je jen poctivější: ví, komu co zapíná, proč, na jak dlouho a s jakými daty.

## Zdroje k příloze

- European Data Protection Board: Guidelines 4/2019 on Article 25 Data Protection by Design and by Default — https://www.edpb.europa.eu/documents/guideline/guidelines-42019-on-article-25-data-protection-by-design-and-by-default_en
- OWASP Cheat Sheet Series: Logging Cheat Sheet — https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html
- OWASP Secure Coding Practices Quick Reference Guide: Logging controls and sensitive information in logs — https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/stable-en/02-checklist/05-checklist
- Pete Hodgson: Feature Toggles — https://martinfowler.com/articles/feature-toggles.html

## Shrnutí přílohy

Feature flags pomáhají oddělit deploy od spuštění, řídit betu a rychle vypnout rizikovou funkci. Aby z nich nevznikl chaos, potřebují klasifikaci, vlastníka, datum úklidu, bezpečný default, audit změn a minimální datový kontext. Privacy-first rollout neprofiluje uživatele z pohodlnosti, nepoužívá flag jako náhradu autorizace a měří dopad podle rizika i rozsahu dat. Dobře spravovaný flag je dočasný nástroj řízení změny. Špatně spravovaný flag je produkční duch, který jednou zaklepe na incident kanál.

## Pracovní log
- 2026-08-10: Přidána příloha CJ o feature flags a postupech rolloutů: typy přepínačů, vlastnictví, rizikový rollout, datové minimum, autorizace, audit změn a checklist.
- 2026-08-10: Přidána příloha CI o privacy-first vyhledávání: rozsah indexu, citlivost dotazů, bezpečné výsledky, veřejný web, multi-tenant SaaS, search UX a checklist.
- 2026-08-10: Přidána příloha CH o produktových notifikacích bez spamového kladiva: rozhodování o potřebě zprávy, kanály, preference centrum, datové minimum, frekvence, stavový model a checklist.
- 2026-08-10: Přidána příloha CG o evidenci souhlasů bez CMP molochu: oddělení preferencí od souhlasů, minimální důkaz, lifecycle účelů, odvolání, verzování a checklist.
- 2026-08-10: Přidána příloha CF o datové rezidenci a regionech: EU regiony, transfery mimo EHP, diagnostika, zákaznická komunikace, transfer impact šablona, infrastrukturní guardrails a checklist.
- 2026-08-10: Přidána příloha CE o žádostech lidí o data: příjem a evidence DSR, přiměřené ověření identity, datová mapa, bezpečný výmaz, čitelný export, interní runbook a checklist.
- 2026-08-10: Přidána příloha CD o chybových stavech a prázdných obrazovkách: bezpečné chybové texty, prázdné stavy jako onboarding, typy stavů, formulářová ochrana práce, interní chybový kontrakt a checklist.
- 2026-08-10: Přidána příloha CC o zpracovatelských smlouvách a subdodavatelích: role správce/zpracovatele, DPA jako provozní návod, živý seznam subdodavatelů, transfery mimo EHP, mini-review nových nástrojů a checklist.
- 2026-08-10: Přidána příloha CB o offboardingu lidí a dodavatelů: seznam systémů, rizikové pořadí odebrání přístupů, rotace tajemství, převod vlastnictví, zařízení, lokální data a checklist.
- 2026-08-10: Přidána příloha CA o přístupech a rolích: role matrix, deny-by-default autorizace, oddělení admin účtů, expirace externistů, řízený support access, review přístupů a checklist.
- 2026-08-10: Přidána příloha BZ o testovacích datech a stagingu: účel prostředí, syntetická seed data, bezpečná práce s produkčními vzorky, oddělené integrace, refresh procedura a checklist.
- 2026-08-10: Přidána příloha BY o auditním logu a historii změn: účel logů, struktura událostí, zákaznická historie, retence, ochrana logů a checklist.
- 2026-08-10: Přidána příloha BX o importu a migraci dat: migrační mapa, CSV šablony, validace nanečisto, bezpečné zacházení se soubory, opatrný převod souhlasů a checklist.

- 2026-08-10: Přidána příloha BW o zákaznickém exportu dat a přenositelnosti: datové domény, CSV/JSON formáty, bezpečné generování, dokumentace, test obnovy, mikrotexty a checklist.
- 2026-08-10: Přidána příloha BV o preference centru bez marketingového labyrintu: typy komunikace, souhlasový deník, jednoduché odhlášení, odmítnutí přímého marketingu, synchronizace preferencí a checklist.
- 2026-08-10: Přidána příloha BU o exit plánu od dodavatele a vendor lock-inu: exporty, otevřené formáty, test odchodu, smluvní pravidla, fallback scénáře a checklist.
- 2026-08-10: Přidána příloha BT o bezpečnostních hlavičkách bez rituálního kopírování: inventář zdrojů, CSP v report-only režimu, HSTS, referrer policy, rámování, permissions policy, CI kontrola a checklist.
- 2026-08-10: Přidána příloha BS o privacy-first partnerství a affiliate růstu: referral kódy, čisté partner linky, agregované reporty, pravidla pro partnerský obsah, odměňování kvality a checklist.
- 2026-08-10: Přidána příloha BR o bezpečném používání AI asistentů v týmu: inventář použití, datová pravidla pro prompty, šablony, lidská kontrola, vendor checklist a incidentní postup.
- 2026-08-09: Přidána příloha BQ o přístupnosti webu a SaaS: WCAG, European Accessibility Act, design systém, formuláře, ruční i automatické testování, přístupnostní prohlášení a checklist.
- 2026-08-09: Přidána příloha BP o datové klasifikaci pro malý SaaS: čtyři třídy dat, pravidla pro chaty, tickety, AI prompty, exporty a dodavatele, pseudonymizace, šablony a checklist.
- 2026-08-09: Přidána příloha BO o doménové a DNS hygieně: vlastnictví domén, transfer lock, DNSSEC, bezpečný postup DNS změn, úklid subdomén, dokumentace kritických záznamů a checklist.
- 2026-08-09: Přidána příloha BN o bezpečnostním kontaktu a CVD: `security.txt`, CVD politika, scope testování, ochrana dat v hlášeních, interní triage, komunikace s nálezcem a checklist.
- 2026-08-09: Přidána příloha BM o changelogu a release notes bez marketingové mlhy: vrstvy komunikace, dopadové štítky, bezpečnostní formulace, RSS/přímé odkazy, měření bez sledování a checklist.
- 2026-08-09: Přidána příloha BL o ukončování funkcí bez ztráty důvěry: typy změn, mapa dopadu, migrační cesta, komunikace ve vlnách, úklid dat a checklist.
- 2026-08-09: Přidána příloha BK o demo účtu a sandboxu bez úniku produkčních dat: syntetické seed scénáře, reset, oddělení prostředí, opatrnost u anonymizace, krátkodobý zákaznický přístup a checklist.
- 2026-08-09: Přidána příloha BJ o cookie liště bez dark patterns: inventář cookies, férový souhlas, oddělení analytiky od marketingu, odvolání souhlasu, dvoukrokové embedy, živá cookie stránka a checklist.
- 2026-08-09: Přidána příloha BI o žádostech subjektů údajů bez paniky: třídění DSR, ověření identity, datová mapa, férový export, vrstvy výmazu, interní playbook a checklist.
- 2026-08-09: Přidána příloha BH o interních přístupech k produkci bez superadmin kultu: role podle práce, just-in-time přístup, support access, audit logy, servisní účty, měsíční access review a checklist.
- 2026-08-09: Přidána příloha BG o referral a partnerském marketingu bez sledovacího pekla: definice odměny, kódy a serverové přiřazení, krátké atribuční okno, oddělení dat, lidské podmínky, souhlas a checklist.
- 2026-08-09: Přidána příloha BF o platbách a fakturaci bez datového kombajnu: checkout, datové minimum, platební brána jako subdodavatel, oddělení fakturačních a produktových dat, DPH/OSS, selhané platby a checklist.
- 2026-08-09: Přidána příloha BE o e-mailové doručitelnosti bez špehovacích pixelů: oddělení typů zpráv, SPF/DKIM/DMARC, střídmé měření, bounce a complaint proces, transakční šablony, vendor dotazník a checklist.
- 2026-08-09: Přidána příloha BD o vendor lock-inu a přenositelnosti: mapa lock-inu, použitelné exporty, dokumentace schématu, import, API/webhooky, offboarding a checklist férového SaaS bez zákaznické klece.
- 2026-08-09: Přidána příloha BC o privacy-first AI funkcích v SaaS: AI karta funkce, role podle AI Actu, minimalizace promptů, transparentní mikrocopy, human-in-the-loop, auditní logy a checklist.
- 2026-08-09: Přidána příloha BB o release QA bez produkčních dat: riziková klasifikace změn, kritické cesty, syntetická testovací data, kontrola logů a chyb, release checklist a post-release smoke test.
- 2026-08-09: Přidána příloha BA o ročním produktovém a datovém úklidu: inventář oblastí, ověření ponechaných položek, datový úklid, pravidla archivu, technické vypnutí a checklist.
- 2026-08-09: Přidána příloha AZ o kvartálním strategickém review SaaS týmu: rozhodovací otázky, čtyři vrstvy review, privacy kontrola, strategické sázky, rozpočet pozornosti, stop-list a checklist.
- 2026-08-09: Přidána příloha AY o týdenním provozním rytmu SaaS týmu: pondělní plánování, krátký denní sync, středeční kontrola rizik, páteční review, jedno místo pravdy, privacy úklid a checklist.
- 2026-08-09: Zpřesněn checklist zakladatelského dashboardu o vlastníka klíčové metriky, aby čísla nezůstala bez odpovědnosti.
- 2026-08-09: Přidána příloha AX o zakladatelském dashboardu bez metrik pro ego a sledovacích zkratek: rozhodovací otázky, pět vrstev zdraví produktu, agregované eventy, leading/lagging metriky, reakční hranice, týdenní review a checklist.
- 2026-08-09: Přidána příloha AW o zákaznických rozhovorech bez výslechu a datového nepořádku: hypotézy, otázky na minulost, střídmé poznámky, anonymizované citace, syntéza vzorů, follow-up a checklist.
- 2026-08-09: Přidána příloha AV o lokalizaci SaaS a webu bez překladového chaosu: výběr jazyků podle obchodního smyslu, překlad slibů, privacy texty, technická struktura, bezpečné AI překlady, workflow a checklist.
- 2026-08-09: Přidána příloha AU o demo účtech a sandboxu bez úniku dat: syntetická demo data, omezené sandbox účty, resetovací rutina, bezpečné integrace, trust věta a checklist.
- 2026-08-09: Přidána příloha AT o offboardingu zákazníka bez rukojmí: zrušení účtu, export dat, retence, vypnutí integrací, závěrečná komunikace, churn feedback a checklist.
- 2026-08-08: Přidána příloha AS o retenci a churnu bez invazivního sledování: definice zdravého zákazníka, důvody odchodu, hodnotové signály, onboarding, win-back komunikace a měsíční retenční review.
- 2026-08-08: Přidána příloha AR o SaaS financích a unit economics bez tabulkového divadla: zákaznická jednotka, oddělení služeb od produktu, provozní náklady, cashflow, pricing, dashboard a checklist.
- 2026-08-08: Přidána příloha AQ o referral a partnerském marketingu bez sledovací pasti: odměňovaný výsledek, referral kódy, bezpečný dashboard, pravidla programu, technické řešení a checklist.
- 2026-08-08: Přidána příloha AP o privacy mikrocopy v produktu: rozhodovací momenty, konkrétní datové věty, férový tón, soulad s chováním systému, knihovna mikrotextů a checklist.
- 2026-08-08: Přidána příloha AO o minimalistickém marketingovém stacku: schopnosti před nástroji, externí skripty jako dodavatelé, střídmé CRM, férové automatizace, měsíční stack review a checklist.
- 2026-08-08: Přidána příloha AN o zpracovatelských smlouvách, rolích správce/zpracovatele, registru subprocesorů, vendor review, oznamování změn dodavatelů a praktickém checklistu.
- 2026-08-08: Přidána příloha AM o žádostech subjektů údajů: jeden vstup, vlastník, ověření identity, mapa dat, bezpečné odpovědi, výmazové hranice, automatizace a checklist.
- 2026-08-08: Přidána příloha AL o privacy-first marketingové atribuci: rozhodovací otázky, UTM disciplína, oddělení atribučních dat, kvalita leadů, přímé dotazy a checklist.
- 2026-08-08: Přidána příloha AK o changelogu a release notes bez produktového ohňostroje: rozlišení kanálů, psaní podle dopadu, zvýraznění privacy změn, vlastní distribuční kanály, střídmé měření a checklist.
- 2026-08-08: Přidána příloha AJ o zákaznické produktové dokumentaci: úkolová struktura, bezpečné screenshoty, další kroky v návodech, vlastnictví, revizní rytmus a privacy-first checklist.
- 2026-08-08: Přidána příloha AI o B2B nákupním procesu bez nekonečných callů a datového ping-pongu: nákupní stránka, mini trust pack, pilot, odpovědní knihovna, datové minimum a checklist.
- 2026-08-08: Přidána příloha AH o přihlašování a session managementu bez digitální paranoie: rizikové úrovně akcí, hesla a reset, MFA/passwordless, bezpečné session cookies, přihlašovací logy a checklist.
- 2026-08-08: Přidána příloha AG o feature flags a rolloutech bez chaosu: výběr vhodných přepínačů, vlastnictví, plán postupného zapnutí, kill switch, privacy-first segmentace a checklist úklidu.
- 2026-08-08: Přidána příloha AF o stagingu a testovacích prostředích bez produkčních dat: účely prostředí, seed a syntetická data, ochočené integrace, oddělené secrets, release kontrola a checklist.
- 2026-08-08: Přidána příloha AE o cookie liště a consent vrstvě bez dark patternů: inventář cookies, férová tlačítka, blokování volitelných skriptů před souhlasem, preference center, privacy-first analytika a checklist.
- 2026-08-08: Přidána příloha AD o exportu dat a interoperabilitě bez zákaznického vězení: mapa exportovatelných dat, čitelné formáty, bezpečné stažení, test importem, odchodový scénář a checklist.
- 2026-08-08: Přidána příloha AC o AI funkcích v SaaS bez úniku dat: výběr use-casu, mapa datového toku, RAG se zdroji a právy, člověk ve smyčce, dodavatelský dotazník, LLM bezpečnost a checklist před spuštěním.
- 2026-08-08: Přidána příloha AB o admin rozhraní a auditní stopě: úkolové admin akce, maskování citlivých dat, důvody zásahů, support režim, bezpečné logování a checklist.
- 2026-08-08: Přidána příloha AA o transakčních e-mailech a doručitelnosti: oddělení typů zpráv, SPF/DKIM/DMARC, férové odhlášení, úsporné šablony, privacy-first měření a checklist.
- 2026-08-08: Přidána příloha Z o přístupech, rolích a offboardingu bez sdílených účtů: inventář systémů, role podle práce, dočasné přístupy, secrets, offboarding, měsíční access review a checklist.
- 2026-08-08: Přidána příloha Y o platbách a fakturaci bez datového balastu: jasná cenová komunikace, postupný sběr fakturačních dat, oddělení platebních stavů, fakturační e-maily, refundace a checklist.
- 2026-08-08: Přidána příloha X o přístupných privacy-first formulářích: datové minimum, labely, chybové hlášky, klávesnicové ovládání, antispam bez sledovacího výpalného a checklist.
- 2026-08-08: Přidána příloha W o zákaznické podpoře a feedbacku bez datového vysavače: struktura ticketů, dočasný support access, bezpečné screenshoty a logy, třídění feedbacku, dokumentace a checklist.
- 2026-08-08: Přidána příloha V o technickém SEO bez sledovacího balastu: jasná identita stránky, canonical URL, sitemap, strukturovaná data, Open Graph metadata a privacy-first checklist.
- 2026-08-07: Přidána příloha U o privacy-first produktových experimentech: hypotézy, minimální měření, alternativy k A/B testům, majitel experimentu, ochranné metriky a checklist.
- 2026-08-07: Přidána příloha T o GDPR dokumentaci bez šanonového divadla: registr zpracování, právní a produktové věty, mini-DPIA, změnový checklist, subdodavatelé a kontrolní seznam.
- 2026-08-07: Přidána příloha S o monitoringu, alertech a status komunikaci: uživatelské sliby, bezpečné logování, akční alerty, status šablony, privacy-first výběr nástroje a checklist.
- 2026-08-07: Přidána příloha R o zálohách a obnově bez falešného pocitu bezpečí: mapa obnovy, oddělení záloh, test restore, retence, dokumentace a checklist.
- 2026-08-07: Přidána příloha P s incidentovým playbookem pro malý SaaS tým: závažnost, prvních 30 minut, zákaznická komunikace, privacy triage, postmortem a checklist připravenosti.
- 2026-08-07: Přidána příloha Q o B2B trust packu: datové věty pro funkce, subdodavatelé, bezpečnostní minimum, nákupní námitky, živá revize a checklist.
- 2026-08-07: Přidána příloha O o bezpečných integracích, API klíčích a webhookách: vlastnictví, secret management, ověřování podpisů, scope dat, rotace klíčů a checklist.
- 2026-08-07: Přidána příloha N o produktových signálech bez šmírování: otázky před eventy, pojmenování telemetrie, health score, oddělení logů od analytiky a checklist.
- 2026-08-07: Přidána příloha M o newsletteru a RSS bez marketingové klece: datové minimum, přímá distribuce, střídmé měření, archiv na vlastním webu a checklist.
- 2026-08-07: Přidána příloha L o interní znalostní bázi: typy stránek, vlastnictví, kontrola aktuálnosti, práce bez zákaznických dat, rozhodovací záznamy a bezpečné napojení AI asistenta.
- 2026-08-07: Přidána příloha K o retenci dat a odchodu zákazníka bez rukojmí: retenční tabulka, stavy účtu, export, smazání, automatizovaný úklid a checklist.
- 2026-08-07: Přidána příloha J o privacy-first onboardingu a podpoře: první výsledek zákazníka, postupný sběr dat, e-mailová sekvence, support access, nápověda a checklist.
- 2026-08-06: Založena struktura e-booku a dopsána první kapitola o privacy-first webu jako konkurenční výhodě včetně praktického checklistu a zdrojů.
- 2026-08-06: Dopsána druhá kapitola o základech vydělávajícího webu: nabídka, struktura, rychlost, důvěra a checklist obchodní stránky.
- 2026-08-06: Dopsána třetí kapitola o SaaS landing page: bolest zákazníka, CTA, formulář, důkazy hodnoty, hypotézy a checklist.
- 2026-08-06: Dopsána čtvrtá kapitola o obsahovém marketingu bez závislosti na algoritmech, včetně publikační základny, distribuce, měření a checklistu.
- 2026-08-06: Dopsána pátá kapitola o produktivitě malého týmu: tok práce, jeden zdroj pravdy, omezení rozpracovanosti, dokumentace rozhodnutí, meetingy a automatizace.
- 2026-08-06: Dopsána šestá kapitola o privacy-first analytice: měřicí plán, vrstvy měření, výběr nástroje, eventový slovník, reporty a checklist.
- 2026-08-06: Dopsána sedmá kapitola o evropském provozu: hosting, domény, e-mail, zálohy, incidenty a provozní checklist.
- 2026-08-07: Dopsána osmá kapitola o MVP a roadmapě SaaS: hypotézy, třídění funkcí, feedback, pricing a checklist privacy-first produktového rozhodování.
- 2026-08-07: Dopsána devátá kapitola o AI asistentech a automatizaci v provozu: procesní recepty, minimalizace dat v promptech, bezpečnost, onboarding asistenta a checklist.
- 2026-08-07: Dopsána desátá kapitola s předspouštěcím checklistem pro web nebo SaaS: slib, kritické cesty, privacy, provoz, SEO a finální kontrola.
- 2026-08-07: Přidána příloha A s 30denním plánem pro privacy-first web nebo SaaS: datová mapa, minimalizace, transparentní mikrotexty a provozní rutina.
- 2026-08-07: Přidána příloha B se šablonami pro produktové hypotézy, měřicí plán, výběr dodavatele, rozhodovací záznam a incidentovou zprávu.
- 2026-08-07: Přidána příloha C s praktickými mikrotexty pro kontaktní formuláře, odběry, cookies, onboarding, chybové stavy a incidentovou komunikaci.
- 2026-08-07: Přidána příloha D s měsíčním provozním review webu nebo SaaS: obchodní signály, ruční kontrola kritických cest, datový úklid a rozhodovací checklist.
- 2026-08-07: Přidána příloha E s privacy-first dotazníkem pro výběr dodavatelů: účel, datová mapa, bezpečnostní minimum, AI funkce, skóre a checklist před zapnutím.
- 2026-08-07: Přidána příloha F o redakčním systému bez závislosti na algoritmech: obsahové pilíře, repurposing, redakční kanban, SEO minimum a revizní rutina.
- 2026-08-07: Přidána příloha G o privacy-first obchodním follow-upu a malém CRM: pipeline, datové minimum, follow-up sekvence, automatizace a měsíční úklid.
- 2026-08-07: Přidána příloha H s hodinovým auditem landing page: primární akce, skeptické čtení, důvěra, mobilní kontrola a jeden navazující experiment.
- 2026-08-07: Přidána příloha I o cenové stránce SaaS bez triků: hodnota tarifů, veřejnost ceny, srozumitelný popis funkcí, trial, FAQ a privacy-first checklist.
