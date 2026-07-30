# Webovy vyvoj, SaaS a marketing bez datove kocoviny

Cesky prakticky e-book od Codyho pro lidi, kteri chteji stavet weby a SaaS produkty rozumne: rychle, meritelne, obchodne pouzitelne a privacy-first. Dreamind pohled: navrzeno, postaveno a provozovano v Evrope neni nalepka na paticku, ale architektonicke rozhodnuti.

> Pravni poznamka: tato kniha neni pravni poradenstvi. U pravnich povinnosti odkazuji na primarni zdroje a doporucuji validaci s pravnikem, hlavne u produktu s citlivymi daty, zdravotnictvim, financemi nebo detmi.

## Pro koho to je

- Pro zakladatele SaaS, kteri nechteji stravit prvni rok stavbou interniho vesmirneho programu.
- Pro marketery, kteri chteji merit kampane bez slepe zavislosti na reklamnim pixelu.
- Pro vyvojare, kteri chteji dodat produkt, ne jen hezky repozitar.
- Pro evropske firmy, ktere berou kontrolu nad daty jako vyhodu, ne jako brzdu.

## Jak e-book cist

Kazda kapitola ma mit prakticky vystup: rozhodovaci pravidlo, priklad, checklist nebo konkretni sablonu. Pokud je neco Codyho nazor, bude to oznacene jako "Codyho komentar". Pokud uvadim aktualni data, pravni tvrzeni, nastroje nebo bezpecnostni doporuceni, pridavam zdroj.

## Osnova

1. Privacy-first zaklad SaaS webu
2. Produktova strategie: od napadu k prvnim platicim zakaznikum
3. Webova architektura pro male tymy
4. Landing page, ktera prodava bez manipulace
5. Obsahovy marketing, SEO a distribuce pres primarni kanaly
6. Analytika bez zbytecneho sledovani
7. Onboarding, aktivace a retence v SaaS
8. Cenotvorba a balicky bez zmatku
9. Produktivita zakladatele: system prace, ne dalsi aplikace
10. Provoz v Evrope: hosting, zalohy, incidenty a dodavatele
11. Checklist pred verejnym spustenim
12. Prilohy: sablony, metriky, auditni otazky

---

## 1. Privacy-first zaklad SaaS webu

Prvni verze SaaS webu nema byt dokonaly system. Ma byt dostatecne jasna, rychla, bezpecna a provozne udrzitelna, aby si clovek mohl rict: "Tady vim, co nabizim, komu to pomaha, jak se mi ozve zajemce a kde konci jeho data." To posledni je dulezitejsi, nez vypada. U maleho produktu je nejlevnejsi soukromi to, ktere navrhnes uz na zacatku.

### 1.1 Minimalni architektura, ktera neudela ostudu

Pro prvni verejnou verzi vetsinou staci:

- staticky nebo server-renderovany web,
- jednoduchy formular pro kontakt nebo cekaci listinu,
- zakladni analytika bez cross-site sledovani,
- monitoring dostupnosti,
- jasne stranky "Ochrana osobnich udaju" a "Cookies",
- automatizovane zalohy, pokud ukladas data,
- TLS, HSTS a zakladni bezpecnostni HTTP hlavicky.

Neni nutne mit hned mikroservisy, datovy sklad a marketingovou automatizaci s peti integracemi. Nutne je vedet, ktera data sbiras, proc je sbiras, kde lezi, komu je posilas a kdy je smazes.

GDPR stoji mimo jine na principech zakonosti, ferovosti, transparentnosti, uceloveho omezeni, minimalizace dat, presnosti, omezeni ulozeni, integrity a duvernosti. To neni jen pravni rec. Je to docela dobry produktovy checklist: kdyz nejake pole ve formulari neumis obhajit, nejspis ho nepotrebujes. Primarni text je v narizeni GDPR, zejmena v clanku 5 o zasadach zpracovani osobnich udaju: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng

**Priklad spatneho startu:**

Mas landing page pro B2B SaaS a ve formulari se ptas na jmeno, prijmeni, email, telefon, firmu, obrat, pocet zamestnancu, odvetvi, roli, rozpocet a zpravu. Realne pritom odpovidas rucne a prvni call si domlouvas emailem. To je moc dat na malo uzitku.

**Priklad lepsiho startu:**

Formular chce jen pracovni email a volitelnou vetu "Co resite?". Po odeslani prijde potvrzeni a ty mas ve sve interni evidenci jen to, co potrebujes pro odpoved. Dalsi data doplnis az ve chvili, kdy jsou potreba pro obchodni nebo smluvni vztah.

### 1.2 Cookies: nejlepsi lista je ta, kterou nepotrebujes

Technicke cookies, ktere jsou potreba pro zakladni fungovani webu, typicky nepotrebuji souhlas k ulozeni. Pokud ale cookies nebo podobne identifikatory pouzivas pro jine ucely, napriklad marketing nebo analytiku mimo nezbytne fungovani, musis resit souhlas a GDPR kontext. Cesky UOOU to shrnuje v Q&A ke cookies: https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies

EDPB ve svych pokynech k souhlasu zduraznuje, ze souhlas musi byt svobodny, konkretni, informovany a jednoznacny. Prakticky preklad: tlacitko "Prijmout vse" nemuze byt obri zelena brana a "Odmitnout" schovane v podzemnim menu. Pokyny EDPB 05/2020 jsou zde: https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_en

Privacy-first pristup pro maly SaaS:

- Nepoustej marketingove a analyticke skripty pred souhlasem.
- Pokud umis merit bez cookies a bez osobnich profilu, zacni tam.
- Neposilej IP adresy, user-agenty a eventy do peti nastroju jen proto, ze se to "tak dela".
- Cookie listu zobraz jen pokud ji opravdu potrebujes.
- Souhlas i odmitnuti udelej stejne jednoduche.

**Codyho komentar:** Cookie lista neni dekorace. Je to priznak, ze produkt dela neco, co uzivatel nemusi ocekavat. Nekdy je to legitimni, ale neni to zdarma. Plati se tim slozitosti, neduverou a udrzbou.

### 1.3 Analytika: mer to, podle ceho se rozhodujes

Zakladni web nepotrebuje vedet, ze Franta z Brna klikl trikrat na pricing a pak si o pulnoci cetl blog. Potrebujes vedet:

- odkud prichazi relevantni navstevnost,
- ktere stranky vedou ke kontaktu nebo registraci,
- kde lide odpadaji,
- zda kampan privedla kvalitni leady,
- zda web nema technicky problem.

Minimalni sada eventu pro prvni SaaS web:

| Oblast | Event | Proc existuje |
| --- | --- | --- |
| Akvizice | `page_view` s refererem | Vidis, ktere kanaly maji smysl. |
| Zajem | klik na hlavni CTA | Poznas, jestli nabidka probouzi akci. |
| Konverze | odeslani formulare | Meris realny obchodni vystup. |
| Produkt | registrace nebo request demo | Oddelis zvedavost od poptavky. |
| Provoz | chyba formulare | Zachytis rozbity tok drive nez zakaznik napise. |

Pravidlo: pokud z metriky neplyne rozhodnuti, nejspis ji zatim nesbirej. Pokud rozhodnuti plyne, zapis si ho predem. Napriklad: "Kdyz ma pricing page pod 1 % proklik na demo z organicke navstevnosti, upravime nabidku nebo CTA." Bez takove vety je analytika casto jen akvarium s cisly. Hezky se na to kouka, ale nevari to obed.

### 1.4 Bezpecnostni minimum pro prvni release

I maly web potrebuje bezpecnostni zaklad. OWASP dlouhodobe upozornuje na rizika kolem access control a ma prakticke checklisty pro HTTP bezpecnostni hlavicky. Pro prehled pouzij:

- OWASP Top 10 k access control: https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/
- OWASP HTTP Headers Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html
- MDN vysvetleni HSTS: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security

Prakticky zaklad:

- Vynut HTTPS a nastav HSTS az po overeni, ze TLS funguje na cele domene.
- Pro admin cast oddel autentizaci od bezneho webu.
- Nevracej citlive informace v chybach.
- Formular chran proti spamu, ale ne tak, ze kazdeho uzivatele posles pres invazivni treti stranu.
- Secret hodnoty drz mimo repozitar.
- Logy nastav tak, aby nepohlcovaly cele requesty vcetne osobnich udaju.
- Pro uploady pouzij whitelist typu souboru, limit velikosti a antivirovou kontrolu, pokud to dava smysl.

**Priklad provozniho rozhodnuti:**

Kdyz mas kontakni formular, nepotrebujes logovat cele telo requestu. Staci stav `sent`, `failed_validation`, `failed_delivery`, cas, technicky request ID a pripadne hash emailu pro deduplikaci. Obsah zpravy patri do mailboxu nebo CRM, ne do aplikacnich logu na vecnost.

### 1.5 Dodavatele: ptej se driv, nez integrujes

Kazdy externi nastroj je produktove rozhodnuti. U SaaS webu typicky resis hosting, emaily, analytiku, CRM, platby, monitoring a podporu. Privacy-first otazky pred integraci:

- Kde jsou data fyzicky ulozena?
- Je mozne zvolit EU region?
- Kdo je spravce a kdo zpracovatel?
- Existuje DPA nebo jina smlouva o zpracovani?
- Jake osobni udaje do nastroje posilame?
- Lze data mazat a exportovat?
- Je nastroj nutny pro uzivatele, nebo jen pohodlny pro nas?
- Co se stane, kdyz integraci vypneme?

U maleho tymu je casto nejlepsi zacit s mene nastroji a lepsim procesem. Jeden dobre popsany mailbox, jeden CRM pipeline a jedna privacy-first analytika jsou lepsi nez pet dashboardu, ktere si preposilaji data jako na firemnim vecirku po treti kave.

### Checklist: prvni privacy-first release

- [ ] Vim, komu produkt pomaha a jakou jednu akci ma web vyvolat.
- [ ] Formular sbira jen data, ktera potrebuji pro odpoved nebo dalsi krok.
- [ ] Mam sepsane ucely zpracovani dat bez prazdnych frazi.
- [ ] Technicke cookies jsou oddelene od analytickych a marketingovych.
- [ ] Netechnicke cookies ani marketingove skripty se nespousti pred souhlasem.
- [ ] Odmitnuti souhlasu je stejne jednoduche jako prijeti.
- [ ] Analytika meri jen metriky, podle kterych budu delat rozhodnuti.
- [ ] Web bezi pres HTTPS a ma nastavene zakladni bezpecnostni hlavicky.
- [ ] Logy neukladaji zbytecne osobni udaje.
- [ ] U kazdeho dodavatele vim, kde jsou data a jak je smazu.
- [ ] Mam plan zaloh a obnovy, pokud ukladam zakaznicka data.
- [ ] V paticce jsou primarni kontakty, privacy dokumenty, RSS nebo prime odkazy misto sledovacich share widgetu.

---

## 2. Produktova strategie: od napadu k prvnim platicim zakaznikum

Produktova strategie pro maly SaaS neni tricetistrankovy dokument s grafy, ktere nikdo necte. Je to sada rozhodnuti: komu slouzime, jaky bolestivy problem resime, proc tomu zakaznik veri, jak rychle dokazeme dodat hodnotu a za co nam nekdo zaplati. Dokud tyhle odpovedi nejsou ostre, kazda dalsi funkce jen zvetsuje mlhu.

YC ve svych zakladnich startup radach opakuje veci jako "launch now", "build something people want", "do things that don't scale" a hledani prvnich 10 az 100 zakazniku, kteri produkt opravdu miluji: https://www.ycombinator.com/library/4D-yc-s-essential-startup-advice. Paul Graham stejny princip rozebira v eseji "Do Things that Don't Scale": https://www.paulgraham.com/ds.html. Prakticky preklad pro evropsky privacy-first SaaS: nejdrive najdi maly segment s akutni potrebou, vyres ho rucne a teprve potom automatizuj.

### 2.1 Vyber problem, ne kategorii

"Delame CRM pro male firmy" je kategorie. "Pomahame malym B2B studiim neztratit poptavky mezi emailem, Telegramem a poznamkami po callu" je problem. Kategorie se spatne overuje, protoze lide obvykle nekupuji kategorii. Kupuji posun: mene chaosu, rychlejsi odpoved, mensi riziko, vic obchodu, min rucni prace.

Dobry problem ma pet vlastnosti:

- Je konkretni: da se popsat jednou situaci ze zivota zakaznika.
- Je casty: deje se opakovane, ne jednou za uhersky rok.
- Je drahy: stoji cas, penize, duveru, energii nebo prilezitosti.
- Ma vlastnika: existuje clovek, ktery za nej citi odpovednost.
- Ma stavajici workaround: zakaznik uz dnes neco dela, i kdyz neohrabane.

**Priklad slabe formulace:**

"Firmy potrebuji lepsi produktivitu."

**Priklad ostre formulace:**

"Majitel male agentury kazde rano rucne prochazi email, fakturacni system a task manager, aby zjistil, ktere placene prace stoji kvuli chybejicimu schvaleni od klienta."

Ta druha veta uz napovida, s kym mluvit, co sledovat, jakou hodnotu slibit a jake integrace opravdu davaji smysl.

### 2.2 Rozhovory pred kodem: hledej dukaz chovani

Prvni rozhovory nejsou prodejni pitch. Jsou to detektivni schuzky. Neptas se "Libil by se vam muj produkt?", protoze slusni lide umi z lasky ke klidu odkyvat i veci, ktere nikdy nekoupi. Ptej se na minulost, rozhodnuti a konkretni situace.

Pouzij tento scenar pro 20 az 30 minut:

1. "Kdy jste tohle naposledy resil?"
2. "Co tomu predchazelo?"
3. "Jak jste to vyresil dnes?"
4. "Co na tom bylo nejotravnejsi nebo nejdrazsi?"
5. "Kdo dalsi do toho vstupoval?"
6. "Co se stane, kdyz se to nevyresi?"
7. "Za co uz dnes platite, aby se problem zmensil?"
8. "Kdybyste si mohl nechat jednu cast zautomatizovat, ktera by to byla?"

Zapisuj doslovne vyrazy zakaznika. Ne kvuli teatralnimu copywritingu, ale protoze jejich jazyk je casto presnejsi nez tvoje interni nazvy. Kdyz pet lidi rekne "honim schvaleni", nepremenuj to v produktu na "approval lifecycle orchestration". To zni jako nemoc firemniho intranetu.

Framework Jobs-to-be-Done se pouziva prave k pochopeni realneho posunu, ktery zakaznik hleda. Intercom popisuje, ze u softwaru pomaha zkouset, proc firmy "najimaji" a "vyhazuji" produkty a kde vznikaji prilezitosti pro inovaci: https://www.intercom.com/blog/mattresses-using-jobs-done-research-software/. Strategyzer Value Proposition Canvas podobne oddeluje zakaznicke prace, bolesti a zisky od samotnych vlastnosti produktu: https://www.strategyzer.com/library/the-value-proposition-canvas.

**Codyho komentar:** Nejhorsi validace je formular, kde se lide prihlasi k "zajmu", protoze je to zadarmo a nic to po nich nechce. Lepsi je jeden clovek, ktery rekne: "Tohle bych chtel pouzit pristi tyden, kam poslu fakturacni udaje?"

### 2.3 Nabidka pro prvnich pet platicich zakazniku

Prvnich pet zakazniku nekupuje hotovy stroj. Kupuji duveru, rychlost a jasny vysledek. Proto nabidka nemusi byt siroka, ale musi byt konkretni.

Sablona nabidky:

> Pomahame [konkretni segment] vyresit [konkretni problem] tak, aby [meritelny nebo pozorovatelny vysledek] bez [neprijemny kompromis].

Priklady:

- Pomahame malym B2B studiim sledovat rozpracovane poptavky tak, aby do 24 hodin vedely, komu maji napsat, bez sdileni celeho mailboxu s americkym CRM.
- Pomahame evropskym SaaS firmam sbirat produktovou analytiku tak, aby videly aktivaci a retenci, bez reklamniho sledovani uzivatelu napric webem.
- Pomahame odbornym konzultantum premenit opakovane dotazy klientu na znalostni portal tak, aby usetrili support cas, bez uzavreni obsahu do socialni platformy.

Pro prvni prodej staci i concierge verze: cast reseni delas rucne za kulisami. Kdyz zakaznik zaplati za vysledek, mas signal. Kdyz zaplati jen za slib dashboardu, mas spis test designu.

Minimalni obchodni balicek pro prvni zakazniky:

- Jedna cilova persona a jeji hlavni problem.
- Jedna stranka s vysvetlenim vysledku, ne vsech funkci.
- Jedna cena nebo pilotni podminky, ktere se daji rict nahlas bez kalkulacky.
- Jedna jasna dalsi akce: call, audit, demo nebo objednavka.
- Jeden interni zapis, co presne se zakaznikovi slibuje.

Privacy-first hodnota patri primo do nabidky, ne az do paticky. Jestli je evropsky provoz, minimalizace dat a zadne reklamni pixely skutecna vyhoda, rekni to jednoduse: "Produkt je navrzeny pro evropske firmy, ktere chteji mit zakaznicka data pod kontrolou."

### 2.4 MVP neni mala verze vseho

MVP neni produkt, kde ma kazda budouci funkce smutnou polovicni variantu. Je to nejmensi spolehliva cesta k overeni jednoho rizika.

Typicka rizika:

- Problemove riziko: opravdu to lidi boli?
- Segmentove riziko: boli to prave tento typ zakaznika?
- Hodnotove riziko: dava navrzene reseni citelny vysledek?
- Platebni riziko: zaplati za to nekdo ted, ne "az bude cas"?
- Provozni riziko: umime to dodat bez chaosu a bez zbytecneho sbirani dat?

Vyber jedno hlavni riziko pro dalsi tyden a navrhni experiment. Ne pet experimentu. Jeden.

| Riziko | Lepsi experiment nez stavet cely produkt |
| --- | --- |
| Nevim, jestli problem existuje | 10 rozhovoru podle konkretniho scenare |
| Nevim, jestli lide zaplati | Nabidka placeneho pilotu se skutecnou cenou |
| Nevim, co ma byt prvni funkce | Rucni concierge sluzba pro 2 zakazniky |
| Nevim, zda zprava rezonuje | 3 verze landing page textu poslane primo relevantnim lidem |
| Nevim, zda privacy-first vadi nebo pomaha | Rozhovor o nakupnich blokerech, DPA, hostingu a internich pravidlech |

U privacy-first SaaS si dej pozor na "docasne" nastroje. Docasny americky CRM export se umi stat trvalou integraci rychleji, nez stihnes rict vendor lock-in. Kdyz testujes rucne, drz data v minimalni evidenci, omez pristupy a predem si rekni, kdy pilotni data smazes.

### 2.5 Rozhodovaci rytmus na prvni mesic

Produktova strategie neni jednorazova porada. Je to rytmus. Prvni mesic nepotrebujes dokonaly roadmap software. Potrebujes pravidelne rozhodovat podle toho, co ses naucil.

Navrh rytmu:

- Pondeli: vyber jeden hlavni predpoklad tydne.
- Utery az ctvrtek: rozhovory, prodej, prototyp nebo concierge dodani.
- Patek: zapis poznatky, rozhodni "pokracovat, zmenit, zahodit".
- Kazdy tyden: oslov 10 konkretnich lidi, ne anonymni publikum.
- Kazde dva tydny: zkontroluj, zda produkt nesbira vic dat, nez potrebuje.

Zapis pro kazdy tyden by se mel vejit na jednu stranku:

- Co jsme si mysleli?
- Co jsme udelali?
- Co jsme slyseli nebo videli?
- Co nas prekvapilo?
- Co ted prestaneme delat?
- Co udelame priste?

**Priklad rozhodnuti:**

"Mysleli jsme si, ze zakaznici chteji prehled vsech leadu. Po osmi rozhovorech se ukazalo, ze akutni bolest je jen pripominani neodpovezenych nabidek po trech dnech. Tento tyden nestavime CRM. Stavime jednoduchy signal 'komu se ozvat dnes'."

Tohle je dobra strategie. Neni sexy, ale setri mesice prace.

### Checklist: od napadu k prvnim platbam

- [ ] Problem umim popsat jednou konkretni situaci.
- [ ] Mam seznam alespon 20 lidi nebo firem, ktere tento problem mohou mit.
- [ ] Vedl jsem rozhovory o minulem chovani, ne o hypotetickem zajmu.
- [ ] Zapsal jsem presna slova zakazniku.
- [ ] Vim, jake workaroundy pouzivaji dnes.
- [ ] Mam jednu vetu nabidky podle segmentu, problemu, vysledku a kompromisu.
- [ ] Prvni verze overuje jedno hlavni riziko.
- [ ] Nabidka obsahuje skutecnou dalsi akci a cenu nebo pilotni podminky.
- [ ] Privacy-first provoz je soucast hodnoty, ne jen pravni dokument.
- [ ] Pilotni data maji jasny ucel, pristupova pravidla a datum smazani.
- [ ] Kazdy tyden rozhodnu, co pokracuje, co se meni a co konci.

---

## Zdroje

- GDPR, Regulation (EU) 2016/679, EUR-Lex: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng
- EDPB Guidelines 05/2020 on consent under Regulation 2016/679: https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_en
- UOOU, Cookies - otazky a odpovedi: https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies
- OWASP Top 10 2025, A01 Broken Access Control: https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/
- OWASP HTTP Headers Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html
- MDN, Strict-Transport-Security header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security
- Y Combinator, YC's essential startup advice: https://www.ycombinator.com/library/4D-yc-s-essential-startup-advice
- Paul Graham, Do Things that Don't Scale: https://www.paulgraham.com/ds.html
- Strategyzer, Value Proposition Canvas: https://www.strategyzer.com/library/the-value-proposition-canvas
- Intercom, More than mattresses: using Jobs-to-be-Done research for software: https://www.intercom.com/blog/mattresses-using-jobs-done-research-software/

---

## Pracovni log

- 2026-07-30: Zalozena struktura e-booku, doplnen uvod, osnova a hotova prvni kapitola o privacy-first zakladu SaaS webu vcetne praktickych prikladu, checklistu a zdroju.
- 2026-07-30: Dopsana druha kapitola o produktove strategii od vyberu problemu pres rozhovory a placene piloty po prvni mesic rozhodovaciho rytmu.
