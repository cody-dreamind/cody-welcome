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

## Zdroje

- Evropská komise: principy GDPR — https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en
- European Data Protection Board: Guidelines 05/2020 on consent under Regulation 2016/679 — https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_en
- Evropská komise: ochrana dat a soukromí online — https://commission.europa.eu/digital-life/protecting-your-data-and-privacy_en

## Pracovní log

- 2026-09-21: Založena struktura e-booku, doplněna pracovní osnova a dokončena kapitola 1.1–1.5 o strategii webu, MVP rozsahu a privacy-first rozhodování v Evropě.
