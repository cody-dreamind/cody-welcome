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

## 3. Webova architektura pro male tymy

Architektura pro maly SaaS tym nema byt sbirka modernich slov. Ma byt dohoda, ktera drzi produkt rychly, srozumitelny a provozovatelny i ve chvili, kdy se neco rozbije v patek odpoledne. Dobry navrh poznas podle toho, ze se da vysvetlit novemu cloveku za dvacet minut a incident se da ladit bez archeologicke expedice.

Zakladni pravidlo: dokud nemas jasny duvod pro slozitost, vyber jednodussi variantu. Jedna aplikace, jedna databaze, jeden primarni deploy proces a par dobre popsanych integraci casto vydrzi dele, nez se zda. Slozitost pridavej az ve chvili, kdy resi skutecny tlak: vykon, izolaci dat, bezpecnostni hranici, tymovou odpovednost nebo rozdilny release rytmus.

### 3.1 Vychozi stack: nudny je kompliment

Pro prvni verze SaaS produktu vetsinou dobre funguje:

- marketingovy web jako staticky nebo server-renderovany frontend,
- aplikace jako jeden hlavni backend,
- jedna primarni relacni databaze,
- objektove uloziste pro soubory, pokud jsou potreba,
- emailova sluzba pro transakcni zpravy,
- fronta jen pro praci, ktera opravdu nemusi probehnout v requestu,
- jednoduchy monitoring dostupnosti, chyb a zakladnich metrik.

Tohle neni obhajoba technologicke nudy z lenosti. Je to obhajoba provozni citelnosti. Kdyz maly tym rozbije monolit, obvykle vi, kde hledat. Kdyz rozbije pet sluzeb, tri queue workery a dva serverless experimenty, muze se debugging rychle zmenit v cestopis.

**Codyho komentar:** Framework si vybiram podle toho, jestli zmensuje pocet rozhodnuti, ktera musi tym denne delat. Ne podle toho, jestli zrovna vypada dobre na konferencnim slidu.

Prakticky rozhodovaci filtr:

| Otazka | Pokud ano | Pokud ne |
| --- | --- | --- |
| Ma tym s technologii realnou zkusenost? | Je to kandidat. | Pocitej cenu uceni a provoznich chyb. |
| Umi framework server-side rendering nebo staticky vystup pro verejne stranky? | Lepsi pro SEO a rychlost. | Budes vic hlidat vykon a indexaci. |
| Je jednoduche nasadit ho v EU prostredi mimo uzavreny hosting? | Drzi privacy-first hodnotu. | Hrozi vendor lock-in. |
| Existuje jasna cesta k testum a migracim? | Produkt pujde menit s mensim stresem. | Dluh prijde rychle. |
| Umi tym vysvetlit deploy a rollback? | Provoz je realny. | Je to demo, ne system. |

### 3.2 Oddel marketingovy web od aplikacnich dat

Marketingovy web a SaaS aplikace maji jiny rytmus. Web casto meni texty, CTA, landing pages a obsah. Aplikace meni prihlaseni, billing, uzivatelska data a produktove funkce. Nemusi to hned byt dva repozitare, ale musi byt jasne, kde konci verejna vrstva a kde zacina prace s osobnimi nebo zakaznickymi daty.

Dobry vzor:

- Verejne stranky jsou cacheovatelne, rychle a bez prihlaseni.
- Formular pro leady posila jen minimalni data do jednoho kontrolovaneho endpointu.
- Aplikacni API nepouziva stejne endpointy pro verejne kampanove experimenty.
- Admin rozhrani neni schovane jen "tajnou URL", ale ma vlastni autentizaci a prava.
- Produktove eventy nejsou automaticky marketingove eventy.

**Priklad hranice:**

Landing page ma formular "Chci konzultaci". Endpoint prijme email, volitelnou zpravu, timestamp, zdroj kampane a souhlas se zpracovanim, pokud je potreba. Neposila kompletni fingerprint prohlizece do reklamni site, neuklada vsechny hlavicky requestu a nevytvari uzivatelsky profil pred tim, nez se clovek opravdu stane uzivatelem.

Kdyz pozdeji pridas aplikaci, lead se muze preklopit do zakaznicke evidence az ve chvili, kdy vznikne obchodni vztah nebo jasny follow-up. Je to drobnost, ale chrani to pred stavem, kdy se kazdy navstevnik webu tvari jako potencialni zaznam v CRM.

### 3.3 Vykonnostni rozpocet misto pozdejsi paniky

Rychlost webu je produktova vlastnost. Pomaha SEO, konverzim i duvere. Zakladni metriky Core Web Vitals sleduji hlavni nacteni obsahu, odezvu na interakci a vizualni stabilitu. Oficialni web.dev uvadi prahy pro dobry zazitek: LCP do 2,5 s, INP do 200 ms a CLS do 0,1, merene typicky na 75. percentilu navstev: https://web.dev/articles/vitals

Maly tym si z toho muze udelat jednoduchy vykonnostni rozpocet:

- HTML prvni obrazovky se ma vratit rychle; klientskou logiku pridej jen tam, kde ma jasny duvod.
- Hlavni obrazek nebo hero prvek ma mit definovane rozmery.
- JavaScript na verejnych strankach ma byt vyjimka, ne defaultni skladska hala.
- Fonty nacitej stridme a s fallbackem.
- Treti strany poustej jen pokud prinaseji jasnou hodnotu.
- Kazda nova integrace musi odpovedet na otazku: kolik pridava requestu, dat a rizika?

**Priklad pravidla do pull requestu:**

"Verejna landing page nesmi pridat novy externi skript bez popisu ucelu, dat, regionu zpracovani a dopadu na rychlost. Pokud jde jen o mereni zvedavosti, nepoustime ho."

Tohle zni prisne, ale je to velmi prakticke. Vykonnostni dluh se malokdy objevi jednim velkym rozhodnutim. Vetsinou prijde po malych "jen tenhle widget" vyjimkach.

### 3.4 Cache: levny vykon, kdyz znas pravidla

HTTP cache je jedna z nejlevnejsich optimalizaci, protoze umozni znovu pouzit uz stazene odpovedi. MDN popisuje, ze cache uklada odpoved k requestu a pri dalsim requestu ji muze znovu pouzit misto dotazu na puvodni server: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching. Hlavnim ridicim mechanismem je hlavicka `Cache-Control`, ktera urcuje, jak a jak dlouho mohou prohlizece nebo sdilene cache odpoved drzet: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control

Prakticka pravidla:

- Hashovane staticke assety (`app.a1b2c3.js`, `style.d4e5f6.css`) mohou mit dlouhou cache.
- HTML dokumenty verejnych stranek cacheuj opatrne, aby slo rychle vydat opravu textu nebo pravni informace.
- Prihlasene stranky s osobnimi daty nastav tak, aby se neukladaly ve sdilenych cache.
- API odpovedi rozdel podle citlivosti: verejny katalog je jiny pripad nez fakturacni udaje.
- Po deployi over, ze se nova verze opravdu dostane k uzivatelum.

Jednoducha sablona uvazovani:

| Typ odpovedi | Typicke cache chovani |
| --- | --- |
| Hashovane CSS/JS/obrazky | Dlouha cache, protoze zmena vytvori novy soubor. |
| Verejne HTML | Kratka cache nebo revalidace podle release procesu. |
| Prihlasene HTML | Soukrome nebo bez ulozeni podle citlivosti. |
| Osobni API data | Bez sdilene cache, opatrne s prohlizecem. |
| Verejne API pro obsah | Cache s jasnou invalidaci. |

Cache neni jen vykon. Je to i spravnost a soukromi. Spatne nastaveny cache header muze ukazat stare ceny, starou verzi pravnich dokumentu nebo v horsim pripade citliva data tam, kde nemaji byt.

### 3.5 Prostredi a data: produkce neni hriste

Kazdy SaaS by mel mit jasne oddelene prostredi:

- local pro vyvoj,
- staging nebo preview pro kontrolu zmen,
- production pro skutecne uzivatele.

Nejdulezitejsi pravidlo: produkcni osobni data se netahaji do lokalniho vyvoje jen proto, ze je to pohodlne. Kdyz potrebujes realisticka data, vytvor anonymizovany nebo synteticky dataset. Kdyz potrebujes debug konkretniho problemu, pracuj s minimalnim vyrezem, jasnym ucelem, logem pristupu a casovym omezenim.

Pro male tymy staci jednoduchy provozni protokol:

- Kdo ma pristup do produkce?
- Kdy byl pristup naposledy zkontrolovan?
- Jak se vytvari a rotuji tajemstvi?
- Kde jsou zalohy a jak se zkousi obnova?
- Jak se oznaci incident?
- Kdo muze pustit migraci databaze?
- Jak se vraci posledni dobry deploy?

Tohle neni byrokracie. Je to zkratka pro situace, kdy nemas cas premyslet. Kdyz spadne aplikace, nechces vymyslet proces. Chces ho pouzit.

### 3.6 Zavislosti a supply chain: mene balicku, mene prekvapeni

Kazdy balicek v projektu je kod, kteremu davame duveru. U maleho produktu je lakave pridat knihovnu na kazdou drobnost, ale zavislosti maji cenu: aktualizace, zranitelnosti, licence, transitive dependencies a pripadne opustene balicky.

OWASP Software Component Verification Standard resi rizika softwaroveho dodavatelskeho retezce a komponent: https://owasp.org/www-project-software-component-verification-standard/. OWASP ASVS zase poskytuje kontrolni ramec pro overovani bezpecnostnich pozadavku webovych aplikaci: https://owasp.org/www-project-application-security-verification-standard/

Minimalni pravidla pro zavislosti:

- Nepridavej balicek kvuli peti radkum jednoduche logiky.
- Pred pridanim zkontroluj licenci, aktivitu projektu a velikost transitive stromu.
- Automaticky sleduj zranitelnosti a aktualizace.
- Kriticke balicky aktualizuj v malych davkach, ne jednou za rok v panice.
- U autentizace, kryptografie a plateb pouzij proverene reseni, ale rozumnej jeho hranicim.
- Zapis, proc byla zavislost vybrana, pokud je pro produkt kriticka.

**Priklad maleho pravidla do tymu:**

"Nova produkcni zavislost musi mit duvod v pull requestu. Pokud nahrazuje trivialni kod, neprijmeme ji. Pokud resi bezpecnostne citlivou oblast, musi byt zkontrolovana podle dokumentace a mit vlastnika."

### Checklist: architektura prvniho SaaS releasu

- [ ] Umim jednou vetou popsat hlavni runtime architekturu.
- [ ] Verejny web a aplikacni data maji jasnou hranici.
- [ ] Formular sbira jen minimalni data a posila je do kontrolovaneho endpointu.
- [ ] Admin cast ma skutecnou autentizaci a prava.
- [ ] Mam vykonnostni rozpocet pro verejne stranky.
- [ ] Sleduji LCP, INP a CLS aspon pri dulezitych zmenach.
- [ ] Staticke assety maji promyslenou cache a invalidaci.
- [ ] Osobni nebo prihlasena data se neukladaji ve sdilene cache.
- [ ] Produkcni data se nepouzivaji volne v lokalnim vyvoji.
- [ ] Mam popsany rollback, zalohy a obnovu.
- [ ] Tajemstvi nejsou v repozitari a maji jasny zpusob rotace.
- [ ] Nove zavislosti maji duvod, vlastnika a zakladni bezpecnostni kontrolu.
- [ ] Kriticke integrace lze vypnout nebo obejit bez kolapsu celeho produktu.

---

## 4. Landing page, ktera prodava bez manipulace

Landing page neni plakatek pro interni ego. Je to rozhodovaci stranka pro cloveka, ktery ma problem, malo casu a otevrenych deset dalsich tabu. Dobry web mu rychle rekne, jestli je na spravnem miste, co se zmeni po pouziti produktu, proc tomu ma verit a jaky je dalsi krok.

Privacy-first landing page ma jeste jednu povinnost navic: nesmi prodavat tak, ze si duveru vezme zkratkou. Zadny tlak pres falesnou urgentnost, zadne schovane podminky, zadne reklamni pixely pred souhlasem a zadne formulare, ktere si rikaji o data jen proto, ze se jednou mozna budou hodit.

Evropska pravidla proti nekalym obchodnim praktikam resi mimo jine klamava a agresivni jednani vuci spotrebitelum: https://commission.europa.eu/law/law-topic/consumer-protection-law/unfair-commercial-practices-and-price-indication/unfair-commercial-practices-directive_en. EDPB ve svych pokynech k deceptive design patterns ukazuje, jak muze rozhrani znejasnovat data, volby a prava uzivatelu v GDPR kontextu: https://www.edpb.europa.eu/documents/guideline/guidelines-032022-on-deceptive-design-patterns-in-social-media-platform_en. I kdyz SaaS prodavas B2B, prakticky princip je stejny: dobra konverze neni vyjimka z ferovosti.

### 4.1 Prvni obrazovka: jedna veta, jeden dukaz, jedna akce

Prvni viewport nema vysvetlit celou firmu. Ma potvrdit relevanci.

Minimalni skladba:

- headline s kategorii nebo vysledkem,
- podnadpis s konkretni cilovou skupinou a problemem,
- primarni CTA,
- jeden dukaz duvery,
- jasny privacy-first signal, pokud je pro zakaznika dulezity.

**Slaby priklad:**

> Revolucni platforma pro chytrejsi rust vaseho podnikani.

To je univerzalni mlha. Muze to byt CRM, kurz vareni, nebo krabice se samolepkami.

**Lepsi priklad:**

> Prehled neodpovezenych B2B poptavek pro mala studia.
>
> Cody hlida emailove leady, pripomene follow-up a drzi zakaznicka data v evropskem provozu bez reklamniho sledovani.

Tahle verze rika komu, co, proc a s jakym omezenim. Nemusi byt dokonala. Musi byt testovatelna.

Kontrola prvni obrazovky:

- Je do peti sekund jasne, pro koho produkt je?
- Je z textu poznat konkretni problem?
- Je CTA sloveso, ne dekorace?
- Je videt aspon jeden dukaz duvery?
- Nezakryva design hlavni sdeleni?
- Nepotrebuje stranka treti stranu jen proto, aby se zobrazila?

**Codyho komentar:** Kdyz headline potrebuje tri odstavce vysvetleni, neni hluboky. Je rozbity. Hluboke veci se daji rict jednoduse, jen to boli pri psani.

### 4.2 Slabsi sliby, silnejsi dukazy

Landing page casto prohrava tim, ze slibuje moc a dokazuje malo. "Usetrete cas", "zvyste produktivitu", "ziskejte kontrolu" jsou validni smer, ale samy o sobe nejsou dukaz. Clovek potrebuje videt, jak se produkt dotyka jeho reality.

Pouzij dukazy podle vyspelosti produktu:

| Faze | Co ukazat |
| --- | --- |
| Pred produktem | Popis problemu, konkretni workflow, nabidku pilotu, zakladatelskou expertizu. |
| Po prvnich pilotech | Anonymizovane priklady vysledku, citace se souhlasem, screenshoty bez osobnich dat. |
| Po prvnich zakaznicich | Pripadove studie, metriky z realneho pouziti, integrace a provozni garance. |
| U zraleho SaaS | Segmentove use-cases, bezpecnostni dokumenty, SLA, reference a migracni plan. |

Dukaz nemusi byt logo velke firmy. U maleho produktu je casto lepsi screenshot pred/po, kratky anonymizovany zapis nebo presny popis procesu.

**Priklad dukazu pro privacy-first analytiku:**

"Ukazeme, ktere landing pages vedou k poptavce. Nemodelujeme reklamni profil navstevnika a neposilame eventy do cross-site reklamni site. V zakladu meri stranka jen navstevu, zdroj, CTA klik a odeslani formulare."

Tohle neni jen eticky odstavec. Je to prodejni argument pro firmu, ktera nechce vysvetlovat marketingovy stack pravnikovi az po spusteni kampane.

### 4.3 CTA a formular: kazde pole musi mit praci

CTA ma byt rozhodnuti, ne hadanka. "Odeslat" je technicky popis tlacitka. "Domluvit 20min call", "Ziskat audit webu" nebo "Vyzkouset demo" popisuje vysledek pro uzivatele.

Formular je misto, kde se duvera rychle rozbije. W3C WCAG 2.2 pozaduje, aby formulare poskytovaly stitky nebo instrukce tam, kde uzivatel zadava vstup, a aby automaticky detekovane chyby byly popsane textem: https://www.w3.org/TR/WCAG22/. Prakticky to znamena, ze pole musi byt srozumitelna, povinna pole poznatelna a chyba ma rict, co se stalo a jak to opravit.

Minimalni lead formular:

- email,
- volitelna zprava,
- volitelny vyber tematu, pokud opravdu pomaha trideni,
- jasne vysvetleni, co se stane po odeslani,
- odkaz na ochranu osobnich udaju.

Co do prvniho formulare typicky nepatri:

- telefon jako povinne pole, pokud nejdriv odpovidas emailem,
- velikost firmy, pokud podle ni nic nedelas,
- rozpocet, pokud nemas varianty nabidky,
- osobni udaje "pro jistotu",
- predzaskrtnute marketingove souhlasy.

**Priklad mikrotextu pod formularem:**

"Odpovime emailem. Data pouzijeme jen pro vyrizeni dotazu a pripadny navazujici obchodni kontakt. Neposilame je do reklamniho pixelu."

Je to kratke, konkretni a pro evropskeho zakaznika mnohem uzitecnejsi nez obecne "Vase soukromi je pro nas dulezite".

### 4.4 Cena a riziko: neschovavej nepohodlne casti

Pokud produkt prodavas pres landing page, cena nemusi byt vzdy verejna do posledni koruny. Ale dalsi krok musi byt poctivy. "Od 990 Kc mesicne" je v poradku, pokud zakaznik rychle zjisti, co v tom je a co neni. "Kontaktujte nas" je v poradku u komplexniho B2B prodeje, pokud jasne popises, proc je potreba call a jak vypada proces.

Co ma byt jasne pred konverzi:

- zda jde o trial, pilot, demo, audit nebo placenou objednavku,
- jestli clovek dostane automaticky pristup, nebo ho nekdo kontaktuje,
- zda bude potreba smlouva, DPA nebo technicka integrace,
- jake jsou minimalni zavazky,
- jak se da spoluprace ukoncit,
- kde se budou zpracovavat data.

**Priklad feroveho pilotu:**

"Placeny pilot na 30 dni. Spolecne vybereme jeden workflow, nastavime ho pro vas tym a po 30 dnech rozhodnete, jestli pokracujeme. Behem pilotu sbirame jen data potrebna pro nastavene workflow a po ukonceni je na zadost smazeme nebo exportujeme."

Tady se prodava vysledek, ale bez mlhy kolem zavazku. To je u B2B casto silnejsi nez agresivni sleva s odpoctem.

### 4.5 Persvaze neni totez co past

Landing page muze presvedcovat. Ma ukazat hodnotu, snizit nejistotu a pomoct cloveku rozhodnout se. Problem zacina ve chvili, kdy design tlaci cloveka k volbe, kterou by pri jasnych informacich neudelal.

Prakticke hranice:

| Ferovy vzor | Manipulativni vzor |
| --- | --- |
| "Domluvit demo" a "Zatim ne" jsou oba citelne. | Odmitnuti je schovane nebo zahanbujici. |
| Sleva ma jasne podminky a konec. | Odpocty se resetuji pri kazde navsteve. |
| Social proof je overitelny nebo anonymizovany poctive. | Falesne notifikace tvrdi, ze si produkt prave nekdo koupil. |
| Cookie volby jsou srozumitelne. | Souhlas je vyrazny a odmitnuti slozite. |
| Form rika, proc chce data. | Form vyzaduje data bez zjevneho duvodu. |

EDPB u deceptive design patterns popisuje mimo jine vzory, ktere uzivatele nechavaji v nejasnosti, ztezuji orientaci nebo skryvaji informace a kontrolni prvky nad daty. Pro SaaS landing page si z toho vezmi jednoduche pravidlo: kdyz bys musel trik obhajovat slovy "vsak oni si toho nevsimnou", ven s tim.

**Codyho komentar:** Nejlepsi konverzni optimalizace je nabidka, ktera sedi na realny problem. Druha nejlepsi je odstranit zbytecne treneni. Triky jsou az mnohem dal a vetsinou smrdi v logach, supportu i reputaci.

### 4.6 Mereni landing page bez datoveho prejedeni

Landing page nepotrebuje maximalni sledovani. Potrebuje odpovedet na par produktovych otazek:

- Ktere zdroje privadeji relevantni lidi?
- Rozumi lide prvnimu sdeleni?
- Klika nekdo na hlavni CTA?
- Dokonci lide formular?
- Jake otazky prichazeji po odeslani?

Minimalni privacy-first plan mereni:

| Otazka | Signal | Akce |
| --- | --- | --- |
| Funguje headline? | Nizky klik na CTA pri relevantni navstevnosti | Prepsat prvni obrazovku podle jazyka zakazniku. |
| Je CTA srozumitelne? | Kliky na sekundarni odkazy, malo primarnich kliknuti | Zpresnit sloveso a vysledek CTA. |
| Je formular prilis tezky? | Zacaty formular bez odeslani | Odebrat pole nebo zlepsit mikrotext. |
| Prichazi spravni lide? | Kvalita poptavek podle zdroje | Presmerovat distribuci, ne pridat sledovani. |
| Brzdi privacy obavy? | Dotazy na data, hosting, DPA | Pridat jasnou sekci o provozu a zpracovani dat. |

Do interniho zapisu pridej i kvalitativni poznatky. Napriklad: "Tri lide se ptali, jestli data odchazi do USA" je pro privacy-first SaaS stejne dulezity signal jako konverzni pomer. Mozna nepotrebujes dalsi pixel. Mozna potrebujes jednu srozumitelnou vetu o architekture.

### Checklist: landing page pred spustenim

- [ ] Prvni obrazovka rika komu produkt pomaha, s cim a jaky je dalsi krok.
- [ ] Hlavni CTA popisuje uzivatelsky vysledek.
- [ ] Stranka obsahuje konkretni dukaz primereny fazi produktu.
- [ ] Privacy-first provoz je viditelny tam, kde ovlivnuje rozhodnuti.
- [ ] Formular sbira jen data potrebna pro dalsi krok.
- [ ] Povinna pole, chyby a potvrzeni odeslani jsou srozumitelne.
- [ ] Cena, pilot nebo demo proces nemaji schovane podminky.
- [ ] Zadny souhlas, odmitnuti ani zruseni neni navrzene jako past.
- [ ] Mereni odpovida na konkretni rozhodovaci otazky.
- [ ] Marketingove skripty a netechnicke cookies se nespousti pred souhlasem.
- [ ] Stranka funguje i bez socialnich embeddu a sledovacich widgetu.
- [ ] Po kazde kampani se vyhodnoti kvalita leadu, ne jen pocet navstev.

---

## 5. Obsahovy marketing, SEO a distribuce pres primarni kanaly

Obsahovy marketing pro SaaS neni zavod v poctu clanku. Je to system, ktery pomaha spravnym lidem pochopit problem, ziskat duveru a udelat dalsi krok. Dobry obsah nehonis po internetu jako letak po namesti. Postavis ho na vlastni domene, das mu trvalou URL, pridas RSS a distribuci pouzijes jako cestu k navratu zpet na primarni zdroj.

Privacy-first pristup tady neni brzda. Naopak. Kdyz nejsi zavisly na socialnich algoritmech, reklamnim retargetingu a cizich newsletter platformach, mas vic kontroly nad vztahem se ctenarem. Mene sledujes, vic vysvetlujes. Prekvapive radikalni koncept, ja vim.

Google ve svem SEO Starter Guide zduraznuje hlavne uzitecny obsah, srozumitelnou strukturu webu, popisne titulky, kvalitni odkazy a technickou dostupnost stranky: https://developers.google.com/search/docs/fundamentals/seo-starter-guide. Pro maly SaaS z toho plyne jednoduche pravidlo: SEO neni trik pro vyhledavac, ale disciplina jasneho publikovani.

### 5.1 Zacni od otazek, ne od klicovych slov

Klicova slova jsou uzitecna, ale spatny zacatek. Kdyz zacnes tabulkou hledanosti, snadno skoncis u clanku, ktery vypada jako kazdy druhy vysledek ve vyhledavaci. Zacni otazkami, ktere realne slychas od zakazniku, leadu, partneru nebo sam od sebe pri vyvoji produktu.

Pro SaaS se dobre osvedcuji ctyri obsahove zdroje:

- prodejni hovory: namitky, nejasnosti, porovnavani alternativ,
- support: opakovane dotazy, chyby, mista frustrace,
- produktovy vyvoj: rozhodnuti, architektura, limity a kompromisy,
- oborove know-how: navody, checklisty, sablony, vysvetleni pojmu.

Z kazde otazky udelej obsahovy zaznam:

| Otazka zakaznika | Typ obsahu | Dalsi krok |
| --- | --- | --- |
| "Kde budou lezet nase data?" | Vysvetlovaci clanek nebo trust page | Kontakt na security/DPA dotaz |
| "Jak poznam, ze landing page funguje?" | Prakticky checklist | Audit landing page |
| "Proc nepouzivate reklamni pixel?" | Nazorovy clanek s argumenty | Privacy-first analytika |
| "Kolik prace zabere migrace?" | Implementacni navod | Technicky call |
| "Jak zacit bez velkeho rozpoctu?" | Starter guide | Pilotni balicek |

Takovy seznam je lepsi nez anonymni "content calendar". Kazda polozka ma puvod v realnem obchodnim nebo produktovem kontextu. Kdyz clanek nikomu nepomuze s rozhodnutim, je to jen dekorace pro blog.

**Codyho komentar:** Nejlepsi SEO vyzkum je casto obycejny zapis z callu. Vyhledavac se meni, ale zakaznik porad nejak mluvi, neco nechape a neceho se boji. Tam je zlato. Bohuzel bez konfetu.

### 5.2 Vlastni domena je zakladni marketingova infrastruktura

Primarni kanal je misto, ktere ovladas: vlastni web, blog, dokumentace, changelog, RSS feed, prime odkazy, pripadne vlastni emailovy seznam se slusnym souhlasem. Socialni site, komunity a katalogy jsou distribucni vrstvy, ne archiv firmy.

Minimalni publikacni stack:

- clanky na vlastni domene,
- stabilni URL bez zbytecnych parametru,
- kanonicke adresy pro duplicity a varianty,
- `sitemap.xml` pro objevitelnost,
- `robots.txt` pro zakladni pokyny crawlerum,
- RSS nebo Atom feed pro odber bez platformniho zameceni,
- interni odkazy mezi souvisejicimi clanky, produktem a dokumentaci.

Google dokumentuje canonical URL jako zpusob, jak u podobnych nebo duplicitnich stranek naznacit preferovanou adresu: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls. Sitemap pomaha vyhledavacum objevovat URL na webu, hlavne kdyz je web novy, rozsahly nebo ma stranky bez dobrych internich odkazu: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview. `robots.txt` je standardizovany v RFC 9309 a slouzi k pravidlum pro crawlovani, ne jako bezpecnostni zamek: https://www.rfc-editor.org/rfc/rfc9309.

RSS 2.0 specifikace je verejne popsana RSS Advisory Boardem: https://www.rssboard.org/rss-specification. Atom ma standard v RFC 4287: https://www.rfc-editor.org/rfc/rfc4287. Prakticky vyber je jednoduchy: pokud uz framework umi RSS, pouzij RSS. Pokud umi Atom, pouzij Atom. Dulezitejsi nez formatova estetika je, aby feed existoval, byl validni a mel odkaz v hlavicce webu i v patice.

**Priklad hlavicky pro blogovy clanek:**

```html
<title>Jak merit landing page bez reklamniho sledovani | Cody</title>
<meta name="description" content="Prakticky postup pro privacy-first mereni landing page: co merit, co nesbirat a jak vyhodnocovat leady bez invazivnich pixelu.">
<link rel="canonical" href="https://cody.dreamind.cz/blog/mereni-landing-page-bez-trackeru">
<link rel="alternate" type="application/rss+xml" title="Cody RSS" href="https://cody.dreamind.cz/rss.xml">
```

Tohle neni kouzlo. Je to uklid pro roboty, prohlizece i lidi. A uklid je v marketingu podcenovana superschopnost.

### 5.3 Clanek musi mit praci v nakupni ceste

Ne kazdy clanek ma hned prodavat demo. Cast obsahu ma vysvetlit problem, cast ma pomoct vybrat pristup a cast ma odstranit nakupni riziko. Kdyz vsechny clanky tlaci na stejne CTA, zacne web pusobit jako automat na poptavky v saku.

Pouzij mapu zameru:

| Zamer ctenare | Priklad obsahu | Vhodne CTA |
| --- | --- | --- |
| Chce pochopit problem | "Proc SaaS weby sbiraji moc dat" | Precist privacy-first checklist |
| Hleda postup | "Jak navrhnout lead formular pro B2B SaaS" | Stahnout sablonu nebo audit |
| Porovnava reseni | "Cookie-less analytika vs. reklamni pixely" | Domluvit technicky call |
| Resi duveru | "Kde provozujeme data a jak mazeme logy" | Poslat DPA/security dotaz |
| Je pripraven koupit | "Pilot privacy-first analytiky za 30 dni" | Objednat pilot |

Sablona praktickeho clanku:

1. Popsat situaci, kterou ctenar pozna.
2. Vysvetlit, proc na ni zalezi obchodne nebo provozne.
3. Ukazat konkretni postup krok za krokem.
4. Pridat priklad, sablonu, tabulku nebo checklist.
5. Rict, pro koho postup neni vhodny.
6. Nabidnout dalsi logicky krok.
7. Pridat zdroje, pokud clanek tvrdi fakta, prava, trendy, benchmarky nebo nastroje.

**Priklad kratke osnovy clanku:**

Tema: "Jak napsat privacy-first formular pro SaaS demo"

- Problem: formular casto sbira data, ktera nikdo nepouzije.
- Dopad: mene duvery, vic povinnosti, horsi dokoncenost.
- Postup: vybrat ucel, omezit pole, napsat mikrotext, resit souhlas oddelene.
- Priklad: minimalisticky formular pro demo request.
- Checklist: povinna pole, chybove hlasky, potvrzeni, mazani dat.
- CTA: "Chcete projit vlastni formular? Poslete URL."

Google podporuje strukturovana data pro ruzne typy obsahu a doporucuje pouzivat je tak, aby odpovidala viditelnemu obsahu stranky: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data. U blogu se casto hodi `BlogPosting` nebo `Article` podle schema.org: https://schema.org/BlogPosting. Nema smysl znackovat veci, ktere na strance realne nejsou. To je SEO ekvivalent nalepeni knirku na fakturu.

### 5.4 Distribuce: z jednoho clanku udelej pet vstupu, ne pet kopii

Dobry clanek nenech lezet jen na blogu. Distribuce ale nema znamenat kopirovani celeho textu do kazde platformy. Cilem je vytvorit vic vstupu k jednomu primarnimu zdroji.

Prakticky postup po vydani clanku:

- RSS: clanek jde automaticky do feedu.
- Prime odkazy: posli URL lidem, kterym realne pomuze.
- LinkedIn nebo jina sit: publikuj kratky vysek s vlastnim komentarem a odkazem.
- Komunita: sdilej jen tam, kde tema resi konkretni otazku.
- Dokumentace nebo produkt: pridej interni odkaz, pokud clanek vysvetluje cast produktu.
- Obchod: pouzij clanek jako odpoved na opakovanou namitku.

Jedna vec je zakazana vlastnim rozumem: automaticke social share skripty, ktere tahaji cizi JavaScript a pridavaji sledovani kvuli tlacitku, na ktere skoro nikdo neklikne. Prime odkazy staci. Kdo chce sdilet, zkopiruje URL. Urcite to zvladne, neni to pilotovani rakety.

**Distribucni sablona pro privacy-first SaaS clanek:**

```text
Publikovano: [URL]
Pro koho: [segment]
Jedna veta: [co si ctenar odnese]
Kde sdilet:
- primarni RSS/feed
- 5 konkretnich kontaktu, kterym tema pomuze
- 1 relevantni komunita nebo vlakno
- interni odkaz z landing page / dokumentace
Co nemerit:
- individualni profil ctenare
- cross-site retargeting
- scroll heatmapy pres treti stranu bez duvodu
Co merit:
- navstevy podle refereru
- klik na dalsi krok
- odpovedi a kvalitativni reakce
```

### 5.5 Mereni obsahu bez sledovaciho cirkusu

Obsah se nemeri jen page views. U SaaS te zajima, jestli clanek privedl spravne lidi, zkratil vysvetlovani, odstranil namitku nebo pomohl uzivateli pouzit produkt.

Minimalni metriky:

| Metrika | Proc ji sledovat | Privacy-first poznamka |
| --- | --- | --- |
| Navstevy podle refereru | Vidis, kde distribuce funguje. | Bez potreby identifikovat osobu. |
| Klik na CTA | Signal zajmu o dalsi krok. | Staci agregovana udalost. |
| Konverze z clanku | Spojis obsah s obchodnim vystupem. | Neposilej formularova data do analytiky. |
| Dotazy po precteni | Zjistis, co clanek nevysvetlil. | Ukladej jen potrebny obchodni kontext. |
| Interni pouziti v prodeji | Poznas, ktere texty setri cas. | Sleduj odkaz v CRM rucne nebo stitkem. |

U kazdeho clanku si predem napis jednu rozhodovaci vetu:

> Kdyz clanek do 60 dni neprinese zadne relevantni odpovedi, odkazy, CTA kliky ani pouziti v obchodnim procesu, prepiseme ho nebo ho spojime s lepsim tematickym clankem.

Tohle je dulezitejsi nez krasny dashboard. Obsahovy marketing casto selze ne proto, ze by chybel nastroj, ale proto, ze nikdo predem nerekl, co bude znamkou uspechu.

### 5.6 Obsahovy provoz pro maly tym

Maly tym nepotrebuje redakcni oddeleni. Potrebuje rytmus, vlastnictvi a kvalitu. Jedna dobra kapitola tydne muze byt obchodne silnejsi nez pet rychlych textu bez pointy.

Navrh tydniho rytmu:

- Pondeli: vyber jednu otazku zakazniku a jeden obchodni cil.
- Utery: sepis osnovu, zdroje a priklady.
- Streda: napis prvni verzi.
- Ctvrtek: zkontroluj technicke SEO, CTA, zdroje a privacy dopady.
- Patek: publikuj, rozesli prime odkazy a zapis distribuci.
- Za 30 az 60 dni: vyhodnot podle predem zvolene rozhodovaci vety.

Redakcni kontrola pred publikaci:

- Titulek rika konkretni slib, ne obecnou kategorii.
- Meta description dava duvod kliknout bez clickbaitu.
- URL je kratka, citelna a stabilni.
- Clanek ma jeden hlavni zamer a jedno hlavni CTA.
- V textu jsou interni odkazy na souvisejici stranky.
- Zdroje jsou pridane u faktickych, pravnich nebo aktualnich tvrzeni.
- Obrazky maji smysluplny alt text, pokud nesou informaci.
- Stranka funguje bez marketingovych embeddu.
- Feed obsahuje novy clanek.
- Analytics meri agregovane signaly, ne osobni profil ctenare.

**Codyho komentar:** Obsahovy marketing je pomaly jen tehdy, kdyz se pise bez vztahu k produktu. Kdyz kazdy clanek odpovida na realnou otazku z prodeje, supportu nebo vyvoje, je to dokumentace duvery. A ta se v B2B prodava lip nez triky s blikajicim bannerem.

### Checklist: obsahovy marketing a SEO

- [ ] Mam seznam realnych otazek zakazniku, ne jen seznam klicovych slov.
- [ ] Kazdy clanek ma jasny zamer v nakupni nebo produktove ceste.
- [ ] Publikuji na vlastni domene se stabilni URL.
- [ ] Stranky maji unikatni title, meta description a kanonickou URL.
- [ ] Web ma aktualni `sitemap.xml` a rozumny `robots.txt`.
- [ ] Blog nebo novinky maji RSS/Atom feed a viditelny odkaz na odber.
- [ ] Strukturovana data odpovidaji viditelnemu obsahu.
- [ ] Interni odkazy pomahaji ctenari i vyhledavaci pochopit souvislosti.
- [ ] Distribuce vede zpet na primarni zdroj, ne do platformni pasti.
- [ ] Nepouzivam social share skripty ani trackery bez jasneho duvodu.
- [ ] U obsahu merim agregovane signaly a kvalitu leadu.
- [ ] U faktu, pravnich tvrzeni, nastroju a aktualnich trendu uvadim zdroje.
- [ ] Po publikaci mam plan, kdy text vyhodnotim, zlepsim nebo sloucim.

---

## Zdroje

- GDPR, Regulation (EU) 2016/679, EUR-Lex: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng
- EDPB Guidelines 05/2020 on consent under Regulation 2016/679: https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_en
- EDPB Guidelines 03/2022 on deceptive design patterns in social media platform interfaces: https://www.edpb.europa.eu/documents/guideline/guidelines-032022-on-deceptive-design-patterns-in-social-media-platform_en
- European Commission, Unfair commercial practices directive: https://commission.europa.eu/law/law-topic/consumer-protection-law/unfair-commercial-practices-and-price-indication/unfair-commercial-practices-directive_en
- UOOU, Cookies - otazky a odpovedi: https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies
- OWASP Top 10 2025, A01 Broken Access Control: https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/
- OWASP HTTP Headers Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html
- MDN, Strict-Transport-Security header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security
- Y Combinator, YC's essential startup advice: https://www.ycombinator.com/library/4D-yc-s-essential-startup-advice
- Paul Graham, Do Things that Don't Scale: https://www.paulgraham.com/ds.html
- Strategyzer, Value Proposition Canvas: https://www.strategyzer.com/library/the-value-proposition-canvas
- Intercom, More than mattresses: using Jobs-to-be-Done research for software: https://www.intercom.com/blog/mattresses-using-jobs-done-research-software/
- web.dev, Web Vitals: https://web.dev/articles/vitals
- MDN Web Docs, HTTP caching: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching
- MDN Web Docs, Cache-Control header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control
- OWASP Software Component Verification Standard: https://owasp.org/www-project-software-component-verification-standard/
- OWASP Application Security Verification Standard: https://owasp.org/www-project-application-security-verification-standard/
- W3C, Web Content Accessibility Guidelines 2.2: https://www.w3.org/TR/WCAG22/
- Google Search Central, SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central, How to specify a canonical URL: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Google Search Central, Build and submit a sitemap: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- Google Search Central, Introduction to structured data markup: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- RFC 9309, Robots Exclusion Protocol: https://www.rfc-editor.org/rfc/rfc9309
- RSS Advisory Board, RSS 2.0 Specification: https://www.rssboard.org/rss-specification
- RFC 4287, The Atom Syndication Format: https://www.rfc-editor.org/rfc/rfc4287
- Schema.org, BlogPosting: https://schema.org/BlogPosting

---

## Pracovni log

- 2026-07-30: Zalozena struktura e-booku, doplnen uvod, osnova a hotova prvni kapitola o privacy-first zakladu SaaS webu vcetne praktickych prikladu, checklistu a zdroju.
- 2026-07-30: Dopsana druha kapitola o produktove strategii od vyberu problemu pres rozhovory a placene piloty po prvni mesic rozhodovaciho rytmu.
- 2026-07-30: Dopsana treti kapitola o webove architekture pro male tymy vcetne vykonnostniho rozpoctu, cache pravidel, prace s prostredimi, zavislostmi a checklistu pred prvnim SaaS releasem.
- 2026-07-30: Dopsana ctvrta kapitola o landing page, ktera prodava bez manipulace, vcetne CTA, formularu, ferovych dukazu, pricingu, mereni a checklistu.
- 2026-07-30: Dopsana pata kapitola o obsahovem marketingu, SEO a distribuci pres primarni kanaly vcetne RSS/Atom, technickeho SEO, redakcniho rytmu, privacy-first mereni a checklistu.
