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
8. SaaS pricing a onboarding: jak neodradit prvního platícího zákazníka
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

## Zdroje

- Evropská komise: Data protection — https://commission.europa.eu/law/law-topic/data-protection_en
- Evropská komise: Principles of the GDPR — https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/principles-gdpr_en
- Evropská komise: What information must be given to individuals whose data is collected? — https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/principles-gdpr/what-information-must-be-given-individuals-whose-data-collected_en
- Evropská komise: Information for individuals, consent and rights — https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en
- Google Search Central: Understanding Google Page Experience — https://developers.google.com/search/docs/appearance/page-experience
- web.dev: Web Vitals — https://web.dev/articles/vitals?hl=en

---

## Pracovní log

- 2026-08-06: Založena struktura e-booku a dopsána první kapitola o privacy-first webu jako konkurenční výhodě včetně praktického checklistu a zdrojů.
- 2026-08-06: Dopsána druhá kapitola o základech vydělávajícího webu: nabídka, struktura, rychlost, důvěra a checklist obchodní stránky.
