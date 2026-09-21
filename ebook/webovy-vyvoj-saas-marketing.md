# Webový vývoj, SaaS a marketing privacy-first v Evropě

Praktický český e-book od Codyho z Dreamindu pro malé týmy, freelancery a zakladatele, kteří chtějí stavět weby a SaaS produkty chytře, měřitelně a bez toho, aby z uživatelů dělali chodící reklamní cookies.

*Codyho komentář:* dobrý web není jen hezká homepage. Je to systém: jasná nabídka, rychlé doručení hodnoty, rozumná technická architektura, marketing bez šmírování a provoz, který přežije první úspěch i první průšvih.

## Jak s e-bookem pracovat

- Čti kapitoly postupně, pokud stavíš nový produkt od nuly.
- Pokud už produkt máš, skoč rovnou na checklisty a hledej slabá místa.
- Doporučení ber jako praktický výchozí bod, ne právní radu ani univerzální dogma.
- Vše, co se týká aktuálních pravidel, nástrojů nebo trhu, musí mít zdroj. Když zdroj chybí, je to Codyho zkušenost nebo názor, ne „pravda z hory SaaSaj“.

## Pracovní osnova

1. **Strategie webu a produktu**
   - Pro koho produkt je a proč má existovat
   - Jak popsat hodnotu bez buzzwordové mlhy
   - MVP rozsah: co musí být hotové a co jen láká k prokrastinaci
2. **Technický základ moderního webu**
   - Informační architektura, výkon, přístupnost a SEO
   - Statický web, headless CMS, full-stack framework nebo vlastní SaaS
   - Bezpečné formuláře, e-mailové notifikace a základní monitoring
3. **SaaS v praxi**
   - Onboarding, trial, pricing a metriky aktivace
   - Admin rozhraní, role, audit log a zákaznická podpora
   - Jak navrhovat produkt tak, aby šel provozovat v malém týmu
4. **Marketing bez invazivního trackingu**
   - Obsah, SEO, landing pages a distribuce
   - RSS, přímé odkazy, UTM disciplína a newsletter jen se souhlasem
   - Jak měřit užitečně i bez reklamního panoptika
5. **Privacy-first provoz v Evropě**
   - Datová mapa, minimalizace a evropský hosting
   - Cookie lišta jako poslední možnost, ne jako výmluva
   - Dodavatelé, zpracovatelské smlouvy a export dat
6. **Produktivita pro malé týmy**
   - Rozhodovací log, backlog, týdenní rytmus a automatizace
   - Jak nepřepálit procesy dřív než má produkt zákazníky
   - Checklista před spuštěním a po spuštění
7. **Zdroje a pracovní log**
   - Ověřené odkazy
   - Průběžný log změn e-booku

---

## 1. Strategie webu a produktu

### 1.1 Začni problémem, ne šablonou

Spousta webů vzniká takhle: někdo otevře oblíbený builder, vybere pěknou šablonu, napíše „inovativní řešení pro moderní firmy“ a doufá, že zákazník pochopí, co se vlastně prodává. Zákazník to většinou nepochopí. A není to jeho chyba.

První úkol webu je odpovědět na tři otázky během pár sekund:

1. **Co to je?**
2. **Pro koho to je?**
3. **Proč tomu mám věřit natolik, abych udělal další krok?**

Pokud návštěvník musí dekódovat generický text, prohráváš ještě před prvním kliknutím. Dobrá homepage není literární soutěž. Je to rozcestník k rozhodnutí.

#### Praktický rámec: jedna věta hodnoty

Zkus si napsat větu podle šablony:

> Pomáháme **[konkrétní skupině]** dosáhnout **[měřitelný nebo jasně poznatelný výsledek]** bez **[typická bolest, riziko nebo náklad]**.

Příklady:

- Pomáháme malým e-shopům spustit zákaznický portál bez vlastního vývojového týmu.
- Pomáháme B2B firmám sbírat poptávky z webu bez reklamních trackerů a zbytečných cookies.
- Pomáháme účetním kancelářím automatizovat onboarding klientů bez chaosu v e-mailech.

Špatný příklad:

- „Jsme digitální partner pro vaši transformaci.“

To zní jako věta, která prošla pěti meetingy a žádným zákazníkem.

*Codyho komentář:* pokud hodnotovou větu nedokážeš říct nahlas člověku u kávy, nejspíš není hotová. Web pak jen elegantně publikuje zmatek.

### 1.2 Rozděl web podle rozhodnutí, která má návštěvník udělat

Návštěvník málokdy přijde na web s čistou hlavou a půlhodinou času. Často je mezi schůzkami, porovnává několik dodavatelů nebo jen ověřuje, jestli nejsi podezřelý experiment z roku 2009. Stránky proto navrhuj podle rozhodovacích momentů, ne podle interní organizační struktury.

Základní rozhodovací trasa pro malý SaaS nebo službu:

1. **Rozumím nabídce** — homepage a jasný hero blok.
2. **Poznávám se v problému** — sekce s typickými scénáři nebo segmenty.
3. **Vidím, jak to funguje** — krátký postup, screenshoty, demo nebo ukázka výstupu.
4. **Věřím, že to zvládnete** — reference, konkrétní čísla, případová studie, ukázky práce.
5. **Vím, co mám udělat dál** — CTA: poptávka, demo, trial, objednávka, audit.

Pro menší produkt často stačí tyto stránky:

- `Home` — krátce vysvětlí hodnotu a nasměruje dál.
- `Řešení` nebo `Use cases` — ukáže konkrétní situace zákazníků.
- `Ceník` — nemusí mít vždy veřejné částky, ale musí vysvětlit model a další krok.
- `Blog` nebo `Zdroje` — buduje důvěru a organickou návštěvnost.
- `Kontakt` nebo `Demo` — minimalizuje tření při poptávce.
- `Soukromí` — srozumitelně vysvětlí, co sbíráš, proč a kde data běží.

Privacy-first detail: stránka o soukromí nemá být jen právnický text v patičce. Pro evropský SaaS může být konkurenční výhoda. Napiš normální lidskou verzí, kde data zpracováváš, jaké nástroje používáš a proč nepoužíváš invazivní tracking.

### 1.3 MVP: co má být hotové před spuštěním

MVP webu není „osekaná verze snu“. Je to nejmenší verze, která dokáže bezpečně ověřit, jestli nabídka dává trhu smysl.

Pro první spuštění potřebuješ:

- **Jasnou hodnotovou větu** na první obrazovce.
- **Jedno hlavní CTA**, ne pět rovnocenných tlačítek.
- **Důkaz důvěryhodnosti** — reference, ukázka práce, screenshot, zakladatelský příběh nebo konkrétní demo.
- **Funkční kontaktní cestu** — formulář, e-mail, kalendář nebo objednávkový flow.
- **Základní měření** — návštěvnost, top stránky, referrery a konverzní události bez zbytečného sběru osobních dat.
- **Srozumitelnou privacy stránku** — co sbíráš, proč, jak dlouho a přes koho.

Co naopak často počká:

- Animace každého druhého prvku.
- Komplexní CMS pro tři stránky.
- Vícejazyčnost, pokud ještě nemáš návštěvnost nebo prodej v daném jazyce.
- Automatizovaný affiliate program před prvními deseti zákazníky.
- Přehnaně detailní design systém dřív, než víš, co lidé skutečně používají.

### 1.4 Privacy-first jako produktové rozhodnutí

Evropský provoz a kontrola nad daty nejsou jen „compliance věc“. Ovlivňují architekturu, marketing i důvěru. GDPR stojí na principech jako zákonnost, férovost, transparentnost, omezení účelu, minimalizace dat, přesnost, omezení uložení, integrita a důvěrnost — Evropská komise je shrnuje ve svém přehledu principů GDPR: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en

Prakticky to znamená:

- Nesbírej data „kdyby se někdy hodila“. To není strategie, to je digitální křečkování.
- Neinstaluj marketingové pixely jen proto, že jsou v návodu reklamní platformy.
- Vybírej dodavatele podle toho, kde data běží, kdo k nim má přístup a jak je umíš smazat nebo exportovat.
- Preferuj server-side logiku, agregovanou analytiku a data, která přímo pomáhají zlepšit produkt.
- Pokud potřebuješ souhlas, udělej ho svobodný, konkrétní, informovaný a odvolatelný. EDPB má k souhlasu samostatné pokyny: https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_en

U cookies a podobných technologií platí jednoduchá produktová poučka: nejlepší cookie lišta je ta, kterou nepotřebuješ, protože nepoužíváš zbytečné trackery. Evropská komise zároveň upozorňuje, že lidé mají mít kontrolu nad cookies a online soukromím: https://commission.europa.eu/digital-life/protecting-your-data-and-privacy_en

*Codyho komentář:* privacy-first není asketismus. Neznamená to „neměř nic“. Znamená to měřit to, co opravdu potřebuješ, a umět se zákazníkovi podívat do očí, když se zeptá: „Co o mně víte?“

### 1.5 Checklist: první strategická verze webu

Před designem a vývojem si odškrtni:

- [ ] Umím jednou větou říct, komu pomáháme a s čím.
- [ ] Vím, jaký hlavní krok má návštěvník udělat.
- [ ] Mám seznam 3–5 nejčastějších bolestí zákazníka.
- [ ] Mám alespoň jeden důkaz důvěry: reference, ukázka, demo, číslo nebo jasný příběh.
- [ ] Vím, jaké údaje potřebuji sbírat a proč.
- [ ] Vím, které nástroje budou mít přístup k datům návštěvníků nebo zákazníků.
- [ ] Mám rozhodnuto, jak budu měřit úspěch bez invazivního trackingu.
- [ ] Mám připravenou jednoduchou privacy stránku s lidským vysvětlením.

Mini-cvičení na 20 minut:

1. Napiš současnou hodnotovou větu.
2. Škrtněte všechna slova, která by mohla použít libovolná agentura nebo SaaS na světě.
3. Doplň konkrétní cílovku, konkrétní výsledek a konkrétní bolest.
4. Přečti větu nahlas. Pokud zní trapně, gratuluji — právě začíná užitečná práce.

---


## 2. Technický základ moderního webu

### 2.1 Informační architektura: web jako mapa rozhodnutí

Technický základ nezačíná frameworkem. Začíná tím, že návštěvník ví, kde je, co může udělat a proč by ho to mělo zajímat. Informační architektura je nudný název pro velmi praktickou věc: jak uspořádat obsah tak, aby člověk nemusel přemýšlet víc, než je nutné.

U malého firemního webu nebo SaaS landing page si nejdřív napiš seznam rozhodnutí, která má návštěvník udělat. Ne seznam komponent. Ne seznam animací. Rozhodnutí.

Typická rozhodnutí:

- „Je to pro mě?“
- „Řeší to problém, který opravdu mám?“
- „Rozumím tomu, jak služba funguje?“
- „Věřím tomu dost na demo, trial nebo poptávku?“
- „Najdu rychle cenu, kontakt, dokumentaci nebo privacy informace?“

Z toho vznikne navigace. Ne opačně. Pokud máš v menu sedm položek, ale žádná neodpovídá na rozhodnutí zákazníka, máš hezký seznam interních ambicí, ne navigaci.

Praktický vzor pro první verzi:

- **Homepage:** nabídka, důkaz, hlavní CTA.
- **Řešení / Use cases:** konkrétní scénáře podle cílovek nebo problémů.
- **Produkt / Jak to funguje:** workflow, screenshoty, ukázka výsledku.
- **Ceník:** model, co je zahrnuto, pro koho je který plán.
- **Zdroje / Blog:** návody, případovky, odpovědi na časté otázky.
- **Soukromí:** data, dodavatelé, cookies, kontakt pro práva subjektů údajů.

Privacy-first poznámka: stránka „Soukromí“ má být dostupná z patičky i z míst, kde sbíráš údaje. Pokud máš formulář, napiš u něj krátce, co se s údaji stane. Ne až v PDF zakopaném pod třemi kliky. To už není transparentnost, to je právnický escape room.

### 2.2 Výkon: rychlost není dekorace

Výkon webu není jen skóre v nástroji. Je to součást prodeje. Pomalá stránka zvyšuje tření přesně ve chvíli, kdy se návštěvník rozhoduje. Google pro Core Web Vitals uvádí tři hlavní metriky uživatelské zkušenosti: LCP pro načtení hlavního obsahu, INP pro odezvu na interakce a CLS pro vizuální stabilitu. Orientační hranice „good“ jsou LCP do 2,5 s, INP do 200 ms a CLS do 0,1 na 75. percentilu návštěv: https://web.dev/articles/defining-core-web-vitals-thresholds

Pro malý tým z toho plyne jednoduché pořadí práce:

1. **Nejdřív odstraň zbytečnosti.** Každý skript třetí strany je kandidát na audit.
2. **Optimalizuj hlavní obsah.** Hero obrázek, fonty, CSS a serverová odezva často rozhodují o LCP.
3. **Zkrať dlouhé JavaScript úlohy.** INP trpí, když prohlížeč nemůže reagovat na kliknutí, protože počítá něco pro marketingový widget.
4. **Rezervuj místo pro média.** Obrázky, embed prvky a bannery bez rozměrů jsou klasická CLS past.
5. **Měř reálné stránky, ne jen homepage.** Ceník, detail článku a registrační flow bývají důležitější než perfektní úvodní stránka.

Konkrétní technická doporučení:

- Používej statické generování nebo server-side rendering tam, kde dává smysl pro rychlý první render.
- Posílej obrázky ve správné velikosti a moderním formátu, ale měj rozumný fallback.
- Fonty načítej střídmě; dvě řezy často stačí. Design přežije, uživatel taky.
- Třetí strany přidávej až po otázce: „Co přesně získáme a jaká data za to platíme?“
- Analytiku drž agregovanou a jednoduchou. Privacy-friendly měření je často rychlejší i čistší.

*Codyho komentář:* nejlevnější optimalizace je nenainstalovat věc, kterou nepotřebuješ. Odstranit pět zbytečných skriptů je elegantnější než statečně ladit jejich následky.

### 2.3 Přístupnost: kvalita pro všechny, nejen checkbox

Přístupnost není speciální režim pro „někoho jiného“. Je to dobré rozhraní pro lidi v reálném světě: na mobilu, ve stresu, s horším zrakem, s klávesnicí, se čtečkou, na pomalém připojení nebo po třetí kávě, kdy už mozek renderuje v beta verzi.

W3C doporučuje používat WCAG 2.2 jako aktuální stabilní standard pro webovou přístupnost: https://www.w3.org/TR/wcag/ Přístupnost staví na čtyřech principech: obsah má být vnímatelný, ovladatelný, srozumitelný a robustní.

Praktické minimum pro SaaS a marketingový web:

- **Sémantické HTML:** tlačítko je `button`, odkaz je `a`, nadpisy tvoří logickou osnovu.
- **Klávesnice:** všechny interaktivní prvky jdou ovládat bez myši a focus je vidět.
- **Kontrast:** text a tlačítka musí být čitelná i na horším displeji.
- **Formuláře:** každý input má label, jasnou chybu a popis, co se má opravit.
- **Alt texty:** obrázky, které nesou informaci, ji mají popsanou; dekorace se netváří jako obsah.
- **Žádné pasti:** modaly, menu a cookie dialogy nesmí uzamknout člověka ani čtečku.

Přístupnost testuj ručně i automaticky. Automatický audit najde část problémů, ale nepozná, jestli text dává smysl, jestli CTA odpovídá kontextu nebo jestli formulář člověka neurazí pasivně-agresivní hláškou „invalid input“.

### 2.4 SEO technický základ bez magie

SEO není kouzelná vrstva, kterou naliješ na hotový web. Je to kombinace srozumitelného obsahu, technicky čitelné struktury a důvěryhodných signálů. Google ve svém SEO Starter Guide zdůrazňuje, že cílem je pomoci vyhledávačům web najít, procházet, indexovat a pochopit: https://developers.google.com/search/docs/fundamentals/seo-starter-guide

Pro první verzi webu si pohlídej:

- Jednu jasnou `h1` na stránku a logickou hierarchii nadpisů.
- Unikátní `<title>` a meta description pro důležité stránky.
- Kanonické URL, aby nevznikaly duplicity přes parametry nebo varianty adres.
- `sitemap.xml` a `robots.txt`, ale bez víry, že opraví špatnou architekturu.
- Interní odkazy mezi souvisejícími stránkami a články.
- Strukturovaná data tam, kde opravdu odpovídají obsahu.
- Čitelné URL bez interních kódů, datumu jen tam, kde má význam.

Privacy-first marketingový detail: sociální sdílecí skripty, reklamní pixely a agresivní remarketing nejsou podmínkou SEO. Pro obsahový web často stačí kvalitní text, rychlé načítání, RSS feed, přímé odkazy a konzistentní distribuce. Méně šmírování, víc užitečnosti. Radikální koncept, já vím.

### 2.5 Checklist technického základu

Před spuštěním technické první verze si odškrtni:

- [ ] Navigace odpovídá rozhodnutím návštěvníka, ne interním oddělením.
- [ ] Každá klíčová stránka má jasný účel a jedno primární CTA.
- [ ] Web má měřitelný výkonový rozpočet: obrázky, fonty, JS a třetí strany.
- [ ] Core Web Vitals kontroluješ na důležitých šablonách, ne jen na homepage.
- [ ] Základní ovládání funguje klávesnicí.
- [ ] Formuláře mají labely, jasné chyby a lidské mikrotexty.
- [ ] Každá důležitá stránka má unikátní title, description a kanonickou URL.
- [ ] `sitemap.xml`, `robots.txt` a RSS feed jsou v repozitáři nebo generované buildem.
- [ ] Privacy stránka vysvětluje nástroje, účely zpracování a kontakt pro dotazy.
- [ ] Každý externí skript má vlastníka, důvod a datum posledního přezkoumání.

Mini-cvičení na 30 minut:

1. Otevři web v anonymním okně na mobilní šířce.
2. Bez scrollování napiš, co produkt dělá a jaký je další krok.
3. Projdi hlavní CTA jen klávesnicí.
4. Vypiš všechny skripty třetích stran a u každého napiš, proč existuje.
5. Jeden skript smaž nebo odlož. Pokud žádný nejde smazat, pravděpodobně právě lžeš sám sobě. Jemně, ale lžeš.


---

## 3. SaaS v praxi

### 3.1 Onboarding: první hodnota dřív než první frustrace

SaaS onboarding není prohlídka všech tlačítek. Je to krátká cesta od „nevím, jestli mi to pomůže“ k „aha, tohle řeší můj problém“. Čím menší tým produkt provozuje, tím důležitější je onboarding navrhnout jednoduše: méně ruční podpory, méně vysvětlování po e-mailu a méně zákazníků, kteří odejdou jen proto, že se zasekli na třetím kroku.

Dobrá první zkušenost má tři vlastnosti:

1. **Je konkrétní:** uživatel ví, co má udělat jako první.
2. **Je krátká:** první užitečný výsledek přijde během minut, ne po víkendu konfigurace.
3. **Je vratná:** uživatel se nebojí kliknout, protože chyby jdou opravit.

Typická chyba je začít registrací, potom zobrazit prázdný dashboard a říct: „Tak tady to máte.“ Prázdný stav ale není neutrální. Je to moment, kdy člověk přemýšlí, jestli má zavřít tab. Každý prázdný stav proto potřebuje ukázat další krok, příklad dat nebo bezpečné demo.

Praktický onboarding pro malý SaaS může vypadat takhle:

- **Krok 1:** vytvoř první projekt, workspace nebo účet zákazníka.
- **Krok 2:** vyber jeden hlavní cíl, například „sbírat poptávky“, „pozvat klienta“ nebo „nahrát katalog“.
- **Krok 3:** ukaž hotový příklad, aby uživatel viděl, jak má vypadat výsledek.
- **Krok 4:** nabídni import nebo ruční vložení minimální sady dat.
- **Krok 5:** potvrď úspěch a doporuč jednu navazující akci.

Neptej se na všechno předem. Pokud údaj nepotřebuješ k první hodnotě, odlož ho. Fakturační adresa, velikost firmy, interní role nebo „jak jste se o nás dozvěděli“ můžou počkat. Onboarding není formulářová zpovědnice.

*Codyho komentář:* když se uživatel poprvé přihlásí, nemá náladu vyplňovat tvůj CRM sen. Chce zjistit, jestli produkt funguje. Pomoz mu vyhrát malou první bitvu.

### 3.2 Aktivace: jedna metrika, kterou poznáš i bez datového cirkusu

Aktivace znamená, že uživatel udělal akci, po které má výrazně větší šanci produkt dál používat. Není to totéž co registrace. Registrace říká „někdo zkusil dveře“. Aktivace říká „někdo vešel dovnitř a našel první důvod zůstat“.

Příklady aktivačních momentů:

- Nástroj pro poptávky: uživatel vytvoří formulář a přijme první odeslanou poptávku.
- Projektový SaaS: uživatel založí projekt, přidá úkol a pozve kolegu nebo klienta.
- Newsletter nástroj: uživatel vytvoří seznam, připraví první koncept a pošle testovací e-mail.
- Klientský portál: agentura pozve prvního klienta a klient otevře sdílený dokument.

Vyber jednu aktivační metriku pro první verzi. Ne deset. Jedna stačí k tomu, aby tým věděl, co zlepšovat. Můžeš ji měřit i privacy-first způsobem: uložit událost na serveru k internímu účtu, agregovat počty za období a nepoužívat reklamní identifikátory ani cross-site sledování.

U každé aktivační metriky si napiš:

- **Co přesně se stalo:** konkrétní akce, ne pocit.
- **Kdy se to má stát:** například do 24 hodin od registrace nebo během prvního týdne.
- **Proč to znamená hodnotu:** jaký problém uživatel vyřešil.
- **Jak tomu pomáhá onboarding:** který krok uživatele dovede k výsledku.
- **Co uděláš, když se to neděje:** změna textu, ukázková data, lepší prázdný stav, kratší formulář.

Tady je jednoduchý pracovní zápis:

> Uživatel je aktivovaný, když do 48 hodin od registrace vytvoří první projekt a pozve alespoň jednoho spolupracovníka. Znamená to, že pochopil základní hodnotu sdíleného pracovního prostoru. Pokud se to neděje, zkrátíme registraci a přidáme ukázkový projekt.

Tohle není vědecký článek, ale rozhodovací nástroj. Jakmile máš první zákazníky, metriku zpřesníš podle reálného chování a rozhovorů.

### 3.3 Trial a pricing bez divadla

Trial má zákazníkovi pomoct ověřit hodnotu. Nemá být labyrint, kde se musí zadat karta, odkliknout tři checkboxy a doufat, že se za čtrnáct dní nezapomene zrušit předplatné. Krátkodobě tím možná zvedneš konverzi. Dlouhodobě si pěstuješ nedůvěru, support tikety a reputaci produktu, který se prodává pastičkou. Gratuluju, growth hacking objevil lepidlo na myši.

Pro malé SaaS dávají smysl tři jednoduché modely:

- **Free trial bez karty:** nejlepší pro produkty, kde hodnota vznikne rychle a chceš snížit tření.
- **Demo nebo audit před trialem:** vhodné pro dražší B2B produkt, kde je potřeba kontext.
- **Freemium s limity:** použitelné jen tehdy, když umíš náklady držet pod kontrolou a free uživatelé nejsou support peklo.

Ceník má odpovědět na praktické otázky:

- Pro koho je který tarif?
- Co je v ceně a co už je doplněk?
- Jaké jsou limity: uživatelé, projekty, úložiště, odeslané e-maily, API volání?
- Dá se odejít a exportovat data?
- Jak se řeší DPH, faktury a evropský provoz?
- Co se stane po skončení trialu?

Privacy-first detail: už v ceníku a onboardingových textech vysvětli, že zákazník může exportovat svá data, smazat účet a zjistit, kde data běží. Není to jen právní hygiene. Je to prodejní argument pro evropské firmy, které nechtějí vysvětlovat každou integraci svému DPO, účetnímu a internímu skeptikovi jménem Petr.

### 3.4 Checklist pro SaaS první zkušenost

Před spuštěním trialu nebo první veřejné bety si projdi:

- [ ] Uživatel po registraci vidí jasný další krok, ne prázdnou nástěnku.
- [ ] První hodnota je dosažitelná bez podpory a bez čtení dlouhé dokumentace.
- [ ] Každý prázdný stav ukazuje příklad, akci nebo vysvětlení.
- [ ] Aktivační metrika je jedna konkrétní událost, kterou tým chápe stejně.
- [ ] Trial jasně říká, kdy končí a co se stane potom.
- [ ] Ceník vysvětluje limity, doplňky, fakturaci a export dat.
- [ ] Produkt má bezpečný způsob, jak pozvat kolegu nebo klienta bez odhalení zbytečných údajů.
- [ ] Zákazník umí stáhnout nebo smazat svá data bez detektivní práce.
- [ ] Support kontakt je viditelný v okamžicích, kde se uživatel může zaseknout.
- [ ] Interně víš, kdo sleduje onboardingové chyby a jak rychle se opravují.

Mini-cvičení na 45 minut:

1. Vytvoř nový testovací účet a nahraj si obrazovku prvních deseti minut.
2. Zapiš každý moment, kdy nevíš, co dál.
3. U každého prázdného stavu doplň jednu ukázku nebo jednu jasnou akci.
4. Zkrať registrační formulář o jedno pole.
5. Napiš jednovětou definici aktivace a dej ji do produktového backlogu.


---

## 4. Marketing bez invazivního trackingu

### 4.1 Obsahová strategie: piš pro rozhodnutí, ne pro algoritmus

Marketing privacy-first neznamená marketing potmě. Znamená, že místo sledování lidí napříč internetem postavíš systém, který jim pomáhá udělat lepší rozhodnutí. To je pomalejší než koupit reklamní pixel, ale dlouhodobě zdravější: obsah zůstává tvůj, odkazy zůstávají funkční a důvěra se neprodává po dávkách dat brokerům.

Google ve své dokumentaci k užitečnému obsahu doporučuje tvořit obsah primárně pro lidi, ne pro získání pozic ve vyhledávání: https://developers.google.com/search/docs/fundamentals/creating-helpful-content Pro malý evropský SaaS je to praktické pravidlo, ne morální plakát. Pokud článek opravdu odpovídá na otázku zákazníka, může fungovat v organickém vyhledávání, v přímém odkazu, v obchodním e-mailu, v dokumentaci i jako odpověď supportu.

Začni mapou rozhodnutí zákazníka:

1. **Problém:** „Proč se mi tohle děje a jak to pojmenovat?“
2. **Možnosti:** „Jaké jsou cesty řešení a kdy která dává smysl?“
3. **Rizika:** „Na co si dát pozor technicky, právně, finančně nebo provozně?“
4. **Výběr:** „Jak porovnat dodavatele, nástroje nebo architekturu?“
5. **Implementace:** „Jak to zavést bez chaosu a zbytečných nákladů?“

Z takové mapy vzniknou lepší témata než z generického seznamu klíčových slov. Místo „SaaS onboarding“ napiš třeba „Jak navrhnout první 10 minut v B2B SaaS, aby uživatel našel hodnotu“. Místo „GDPR web“ napiš „Jak vysvětlit privacy-first provoz na landing page bez právnické mlhy“. Konkrétnost prodává, protože snižuje nejistotu.

Praktické formáty pro malý tým:

- **Návod:** konkrétní postup krok za krokem, ideálně s checklistem.
- **Rozhodovací článek:** kdy použít variantu A, B nebo C.
- **Případová studie:** problém, omezení, řešení, výsledek, poučení.
- **Rozbor chyby:** co se nepovedlo, proč a jak tomu příště předejít.
- **Šablona:** brief, auditní seznam, otázky pro dodavatele nebo plán spuštění.

Každý text by měl mít jeden jasný další krok. Ne deset výzev k akci jako tržiště na pouti. U technického článku může být CTA „stáhnout checklist“, u případovky „domluvit konzultaci“, u produktového návodu „vyzkoušet demo“. Když nevíš, co má čtenář udělat potom, článek není hotový.

*Codyho komentář:* obsah není levnější reklama. Je to veřejně viditelný důkaz, jak přemýšlíš. Pokud je text plytký, škáluješ plytkost. To je sice výkon, ale ne výhra.

### 4.2 Distribuce bez závislosti na platformách

Největší chyba obsahového marketingu je napsat dobrý text a pak ho hodit jen na sociální síť, kde za dva dny zmizí v algoritmické polévce. Sociální kanály můžou být užitečné, ale nesmí být jediným místem, kde obsah žije. Domov obsahu má být web, který vlastníš a umíš exportovat.

Privacy-first distribuční minimum:

- **Vlastní URL:** každý článek, případovka a checklist má stabilní adresu.
- **RSS feed:** lidé můžou sledovat novinky bez účtu u platformy a bez newsletterového nátlaku.
- **Přímé odkazy:** sdílej normální odkazy, ne embed widgety a share skripty.
- **E-mail jen se souhlasem:** newsletter má jasné přihlášení, jednoduché odhlášení a žádné schované účely.
- **Recyklace obsahu:** z jednoho článku udělej krátký post, odpověď do FAQ, slide do obchodní prezentace nebo část dokumentace.

Evropská komise u GDPR připomíná, že lidé mají právo vznést námitku proti použití osobních údajů pro přímý marketing a že firmy musí respektovat pravidla pro přímý marketing i podle ePrivacy pravidel: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/application-gdpr_en a https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/dealing-requests-individuals_en Praktický dopad: neposílej marketingové e-maily lidem jen proto, že máš jejich adresu z vizitky, poptávky nebo starého exportu. Souhlas, očekávání a možnost odhlášení nejsou administrativní šikana. Jsou základní údržba důvěry.

U newsletteru si pohlídej:

- přihlašovací formulář říká, co bude chodit a jak často;
- souhlas není schovaný v obchodních podmínkách;
- odhlášení je v každém e-mailu a funguje bez přihlášení;
- seznam nepředáváš nástrojům mimo EU bez jasného důvodu a dokumentace;
- neměříš otevření přes sledovací pixel, pokud to není nutné a právně ošetřené;
- neimportuješ kontakty „pro jistotu“, protože jistota se pak často jmenuje spam.

### 4.3 UTM disciplína a jednoduché měření

Měřit se dá i bez sledování člověka přes půl internetu. Pro malé týmy je často užitečnější vědět, které kanály přivádějí kvalitní poptávky, než stavět detailní psychologický profil každého návštěvníka. Začni s tím, co opravdu potřebuješ k rozhodování.

Základní sada metrik:

- **Návštěvy klíčových stránek:** homepage, ceník, demo, kontakt, privacy stránka.
- **Konverze:** odeslaná poptávka, registrace, rezervované demo, stažený checklist.
- **Zdroj návštěvy:** přímý odkaz, organické vyhledávání, partnerský web, newsletter, kampaň.
- **Kvalita leadu:** jestli poptávka odpovídá cílovce a má reálný obchodní potenciál.
- **Obsahový přínos:** které články podporují obchodní rozhovory, ne jen které měly nejvíc zobrazení.

UTM parametry používej střídmě a konzistentně. Domluv si názvy jednou a drž je. Například:

- `utm_source=rss`, `utm_medium=feed`, `utm_campaign=launch-checklist`
- `utm_source=newsletter`, `utm_medium=email`, `utm_campaign=saas-onboarding`
- `utm_source=partner-web`, `utm_medium=referral`, `utm_campaign=privacy-audit`

Nepřidávej UTM na interní odkazy. Rozbiješ si tím čitelnost dat a analytika začne připomínat archeologii po výbuchu spreadsheetu. Interní cestu sleduj agregovaně přes stránky a události, ne přepisováním zdroje návštěvy.

Privacy-first analytika v praxi:

- agreguj data, kde to stačí;
- anonymizuj nebo vůbec neukládej IP adresy, pokud je nepotřebuješ;
- nastav krátkou retenční dobu pro surové logy;
- dokumentuj, jaké události sbíráš a proč;
- nepoužívej cross-site identifikátory pro běžné produktové otázky;
- u formulářů odděl analytickou událost od obsahu zprávy.

### 4.4 Checklist marketingu bez sledovacího panoptika

Před publikováním kampaně nebo obsahového sprintu si odškrtni:

- [ ] Každý obsahový kus odpovídá na konkrétní rozhodnutí zákazníka.
- [ ] Článek má stabilní URL, title, meta description a jasný další krok.
- [ ] Důležitý obsah je na vlastním webu, ne jen na sociální platformě.
- [ ] Web má RSS nebo jiný přímý způsob sledování novinek bez účtu u platformy.
- [ ] Newsletter má srozumitelný souhlas, očekávanou frekvenci a funkční odhlášení.
- [ ] UTM názvy jsou domluvené a nepoužívají se na interní odkazy.
- [ ] Analytika měří agregované rozhodovací signály, ne zvědavost týmu.
- [ ] Každý marketingový nástroj má popsané, kde běží data a kdo k nim má přístup.
- [ ] Externí skripty nejsou přidané jen proto, že „to tak dělá konkurence“.
- [ ] Před spuštěním kampaně existuje plán, co uděláš podle výsledků.

Mini-cvičení na 60 minut:

1. Vyber jeden článek nebo landing page a napiš, jaké zákaznické rozhodnutí podporuje.
2. Doplň do něj jeden konkrétní příklad, screenshot, šablonu nebo checklist.
3. Přidej jasné CTA, které odpovídá fázi rozhodování.
4. Zkontroluj, jestli se obsah dá sledovat přes RSS nebo přímý odkaz.
5. Vypiš všechny marketingové skripty a jeden z nich odeber, odlož nebo zdokumentuj.


## Zdroje

- Evropská komise: principy GDPR — https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en
- European Data Protection Board: Guidelines 05/2020 on consent under Regulation 2016/679 — https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_en
- Evropská komise: ochrana dat a soukromí online — https://commission.europa.eu/digital-life/protecting-your-data-and-privacy_en
- Evropská komise: application of the GDPR — https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/application-gdpr_en
- Evropská komise: dealing with requests from individuals — https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/dealing-requests-individuals_en
- web.dev: How the Core Web Vitals metrics thresholds were defined — https://web.dev/articles/defining-core-web-vitals-thresholds
- W3C: Web Content Accessibility Guidelines (WCAG) 2.2 — https://www.w3.org/TR/wcag/
- Google Search Central: SEO Starter Guide — https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central: Creating helpful, reliable, people-first content — https://developers.google.com/search/docs/fundamentals/creating-helpful-content

## Pracovní log

- 2026-09-21: Doplněna kapitola 4.1–4.4 o marketingu bez invazivního trackingu, obsahové strategii, distribuci, UTM disciplíně a checklistu kampaně.
- 2026-09-21: Doplněna kapitola 3.1–3.4 o SaaS onboardingu, aktivační metrice, trialu, pricingu a checklistu první zkušenosti.
- 2026-09-21: Doplněna kapitola 2.1–2.5 o informační architektuře, výkonu, přístupnosti, technickém SEO a privacy-first auditu externích skriptů.
- 2026-09-21: Založena struktura e-booku, doplněna pracovní osnova a dokončena kapitola 1.1–1.5 o strategii webu, MVP rozsahu a privacy-first rozhodování v Evropě.
