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

## 6. Analytika bez zbytecneho sledovani

Analytika ma pomahat rozhodovat. Nema byt tajna druha aplikace, ktera si o uzivateli pamatuje vic nez samotny produkt. U maleho SaaS je nejcennejsi znat par dobrych signalu: odkud prisli spravni lide, kde pochopili hodnotu, kde narazili, co vyzkouseli a co je presvedcilo zaplatit. To jde udelat bez reklamniho profilu, bez sledovani napric weby a bez datoveho kobercoveho naletu.

Privacy-first analytika stoji na jednoduchem pravidle: nejdrive definuj rozhodnuti, potom signal, potom nejmensi data. Opacny postup vytvori dashboard, ktery vypada chytre, ale pri kazde produktove otazce stejne skonci vetou "tohle vlastne nemerime".

CNIL u mereni navstevnosti popisuje podminky, za kterych mohou byt nektere audience measurement cookies ve Francii vyjimkou ze souhlasu, mimo jine informovani uzivatele, moznost namitky, omezeni ucelu na audience measurement nebo A/B testing a zakaz propojovani s jinymi zpracovanimi: https://www.cnil.fr/en/sheet-ndeg16-use-analytics-your-websites-and-applications. To neni univerzalni pravni kladivo pro celou Evropu, ale jako produktovy kompas je to uzitecne: mereni ma byt uzke, vysvetlitelne a oddelene od reklamniho sledovani.

### 6.1 Merici plan zacina rozhodnutim

Pred instalaci analytiky si napis tabulku, ktera se vejde na jednu stranku. Sloupce: rozhodnuti, signal, data, akce, vlastnik. Kdyz neumime vyplnit akci, event zatim neexistuje. Ano, je to radikalni. Nekdo by tomu rekl dospelost.

| Rozhodnuti | Signal | Nejmensi data | Akce |
| --- | --- | --- | --- |
| Funguje hlavni nabidka? | Klik na primarni CTA z relevantni navstevnosti | URL, referer, typ CTA, cas | Prepsat headline nebo CTA. |
| Je demo formular moc dlouhy? | Zacaty formular bez odeslani | URL formulare, anonymni session nebo agregace, typ chyby | Odebrat pole, zlepsit mikrotext. |
| Aktivuje se novy uzivatel? | Dokonceni prvni hodnotove akce | Account ID, krok onboardingu, cas | Zmenit onboarding nebo pridat pomoc. |
| Vraci se zakaznici k jadru produktu? | Opakovane pouziti klicove funkce | Account ID, funkce, den | Upravit produkt nebo edukaci. |
| Ma kampan obchodni kvalitu? | Lead se zmenil na kvalifikovany rozhovor | Zdroj, kampan, stav leadu | Presunout distribucni energii. |

Rozdil mezi dobrou a spatnou analytikou neni v poctu eventu. Je v tom, jestli se po tydnu da rict: "Na zaklade tohohle zmenime X." Kdyz ne, jen skladujes digitalni prach.

**Priklad:**

Maly B2B SaaS chce zjistit, jestli landing page pro "privacy-first analytiku" dava smysl. Nepotrebuje heatmapu, nahravani navstev a kompletni profil uzivatele. Staci:

- navsteva stranky podle refereru,
- klik na "Domluvit technicky call",
- odeslani formulare,
- kvalita leadu zapsana rucne po odpovedi,
- poznamka, zda se lead ptal na EU provoz, DPA nebo export dat.

Za dva tydny vis, zda stranka pritahuje spravne lidi. Nevis, kam kazdy jednotlivec hybal mysi. To je v poradku. Produkt se nestavi z voyeurismu.

### 6.2 Eventy pojmenovavej podle produktu, ne podle nastroje

Nazvy eventu jsou interni jazyk produktu. Kdyz je nechame nahodne rust, analytika se rozpadne na `click_button`, `button_click`, `ctaClicked`, `lead_submit` a `form_success`, coz je pet zpusobu jak nerict nic.

Pravidla pojmenovani:

- Pouzij sloveso a objekt: `cta_clicked`, `demo_requested`, `workspace_created`.
- Drz jeden cas a format, typicky snake_case.
- Neposilej osobni udaje v nazvu eventu ani v parametrech.
- Oddel marketingove eventy od produktovych.
- Zapis kazdy produkcni event do jednoducheho katalogu.

Minimalni katalog eventu:

| Event | Kdy vznikne | Parametry | Ucel |
| --- | --- | --- | --- |
| `pricing_viewed` | Nacteni ceniku | plan_context, referer_group | Zjistit zajem o nabidku. |
| `demo_requested` | Odeslani demo formulare | page_slug, consent_context | Merit poptavku bez obsahu zpravy. |
| `signup_started` | Zacatek registrace | source_group | Najit brzdy pred uctem. |
| `activation_completed` | Prvni hodnotova akce | account_type | Merit skutecnou aktivaci. |
| `export_requested` | Zadost o export dat | export_type | Sledovat duveru a provozni potreby. |

U parametru plati stejna zdrzenlivost jako u formulare. `company_size_bucket` muze byt uzitecny. `full_email`, `phone`, `message_body` a `user_agent_raw` v analytice vetsinou nemaji co delat. Pokud je potrebujes pro obchod, patri do CRM nebo support systemu s jasnym ucelem a pristupovymi pravidly, ne do obecneho event streamu.

**Codyho komentar:** Event bez popisu je jako kabel bez stitku v serverovne. Dokud vse funguje, nikomu nevadi. Ve chvili, kdy hledas problem, zacnes smlouvat s vesmirem.

### 6.3 Webova analytika: zacni agregovane

Pro verejny web je casto nejlepsi agregovana webova analytika, ktera nevyzaduje cookies a nesnazi se identifikovat cloveka napric weby. Umami ve FAQ uvadi, ze tracking code nepouziva cookies, neidentifikuje uzivatele a nesleduje je napric weby: https://umami.is/docs/faq. Plausible popisuje cookieless analytiku bez osobnich dat a bez persistentnich identifikatoru: https://plausible.io/data-policy. Matomo zase umoznuje privacy konfiguraci vcetne rezimu bez cookies, pokud je spravne nastaven: https://matomo.org/faq/new-to-piwik/how-do-i-use-matomo-analytics-without-consent-or-cookie-banner/.

Tohle neni automaticke razitko "nemusime nic resit". Vzdy se ptej:

- Co presne nastroj sbira?
- Bezi v EU regionu nebo self-hosted prostredi?
- Existuje DPA, pokud zpracovava data jako dodavatel?
- Posila data dalsim stranam?
- Jak dlouho se data drzi?
- Lze data exportovat a mazat?
- Je konfigurace bez cookies skutecne zapnuta?
- Je mereni popsane v privacy dokumentu srozumitelnym jazykem?

Prakticky vyber:

| Situace | Vhodny pristup |
| --- | --- |
| Jednoduchy marketingovy web | Cookieless agregovana analytika, par CTA eventu. |
| SaaS aplikace s accounty | Produktove eventy vazane na ucet, ne na reklamni identitu. |
| Enterprise B2B | Oddelene webove mereni, produktova analytika a auditni logy. |
| Citliva data | Minimalni eventy, kratka retence, silnejsi pristupova pravidla. |
| Experimenty | A/B test jen s jasnym ucelem, bez reklamniho profilu. |

Jedna vec je dulezita: webova analytika, produktova analytika a auditni log nejsou totez. Webova analytika rika, co se deje na verejnem webu. Produktova analytika pomaha zlepsovat pouziti aplikace. Auditni log slouzi k dohledatelnosti dulezitych akci. Kdyz z nich udelas jeden velky hrnec, vznikne pravni, provozni i produktovy gulasek. Bez knedliku.

### 6.4 Produktova analytika bez sledovani

U SaaS aplikace potrebujes rozumet aktivaci, retenci a hodnotovym momentum. To ale neznamena, ze musis sledovat kazde kliknuti. Zacni od zivota zakaznika.

Mapa prvnich eventu:

| Faze | Otazka | Event |
| --- | --- | --- |
| Registrace | Zvlada clovek vytvorit ucet? | `signup_completed` |
| Nastaveni | Dostane se k prvnimu smysluplnemu nastaveni? | `workspace_configured` |
| Aktivace | Probehla prvni akce s hodnotou? | `first_value_created` |
| Spoluprace | Zapojil se dalsi clovek z tymu? | `member_invited` |
| Retence | Vraci se k hlavni funkci opakovane? | `core_action_completed` |
| Monetizace | Narazil na limit nebo upgrade moment? | `upgrade_intent_shown` |
| Duvera | Zadal export, smazani nebo security dokument? | `data_control_requested` |

U kazdeho eventu si dej pozor na tri hranice:

- Identita: opravdu potrebujes user ID, nebo staci account ID, cohorta nebo agregace?
- Obsah: neposilej do analytiky text dokumentu, zpravy, nahrane soubory ani volne vstupy.
- Retence: nepotrebujes vecne drzet surove eventy, kdyz rozhodujes podle mesicnich agregaci.

**Priklad aktivacni metriky:**

Produkt pomaha tymum hlidat follow-upy. Aktivace neni registrace. Aktivace je moment, kdy uzivatel prida prvni lead a nastavi prvni pripominku. Event muze byt `first_followup_scheduled` s parametry `account_type`, `source_group` a `days_to_first_value`. Neni potreba posilat jmeno klienta, obsah emailu ani poznamku z callu.

### 6.5 Atribuce bez zavislosti na reklamnim profilu

Marketing chce vedet, co funguje. To je legitimni. Problem zacina, kdyz se z legitimni otazky stane sledovani cloveka od reklamy pres web az do produktu a zpatky do retargetingu.

Privacy-first atribuce pro maly SaaS:

- Pouzivej citelne UTM parametry pro kampane.
- Ukladej zdroj u leadu jen v rozsahu potrebnem pro obchodni vyhodnoceni.
- Pracuj s agregaci podle kanalu, ne s kompletnim individualnim profilem.
- Vyhodnocuj kvalitu leadu rucne nebo ve vlastnim CRM, ne pres reklamni pixel.
- U referral partneru pouzij jednoduche referencni kody misto treti strany, pokud to jde.
- U placenych kampani pocitej i s tim, ze cast konverzi zamerne neuvidis. Cena za soukromi neni chyba v tabulce, je to volba.

Sablona UTM pravidel:

```text
utm_source: kde odkaz vznikl, napriklad linkedin, partner-web, newsletter
utm_medium: typ distribuce, napriklad organic, referral, paid, email
utm_campaign: citelny nazev kampane, napriklad 2026-07-privacy-audit
utm_content: varianta odkazu, jen pokud ji opravdu vyhodnocujeme
Zakazano: osobni udaje, emaily, nazvy klientu bez duvodu, interni tajne nazvy
```

Kdyz lead prijde pres kampan, obchodni zapis muze obsahovat `source_group=partner-web` a `campaign=privacy-audit`. Nemusi obsahovat celou historii navstev. Pro vetsinu raneho SaaS je kvalitativni vyhodnoceni "z 12 poptavek byly 4 relevantni, 2 chtely EU hosting, 1 koupila pilot" uzitecnejsi nez reklamni dashboard s presnosti na dve desetinna mista.

### 6.6 Retence, pristupy a mazani analytickych dat

Data maji mit konec zivota. To zni temne, ale je to spis uklid. GDPR princip omezeni ulozeni rika, ze osobni udaje nemaji byt drzeny dele, nez je nutne pro dany ucel: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng. U analytiky si proto nastav retenci podle skutecneho pouziti.

Prakticky navrh:

- Surove webove eventy drzet kratce, pokud vubec existuji.
- Agregovane mesicni reporty drzet dele, pokud pomahaji strategii.
- Produktove eventy s vazbou na account omezit podle ucelu a smluv.
- Debug logy drzet kratce a oddelit je od analytiky.
- Pristup k analytice dat jen lidem, kteri podle nich delaji praci.
- Exporty z analytiky neposilat volne do tabulek bez kontroly.
- Pri ukonceni zakaznika vedet, co se maze, co zustava agregovane a proc.

Rozdil mezi agregaci a osobnim zaznamem vysvetli i interne. "Mame mesicni pocet aktivovanych accountu" je jiny rizikovy profil nez "mame sest let eventu kazdeho uzivatele vcetne obsahu jeho akci". Prvni pomaha ridit produkt. Druhe se casto jen tvari jako budoucnostni poklad a mezitim zveda riziko.

### Checklist: privacy-first analytika

- [ ] Kazdy event ma napsane rozhodnuti, ktere pomaha udelat.
- [ ] Webova analytika, produktova analytika a auditni log jsou oddelene.
- [ ] Nazvy eventu maji jednotny format a katalog.
- [ ] Do analytiky neposilam emaily, telefony, zpravy, dokumenty ani volne texty.
- [ ] Verejny web meri agregovane signaly a CTA, ne reklamni profily.
- [ ] Nastroj pro webovou analytiku je cookieless nebo ma jasne vyreseny souhlas.
- [ ] U dodavatele vim, kde jsou data, kdo je zpracovava a jak dlouho se drzi.
- [ ] Produktove eventy meri aktivaci a hodnotu, ne kazdy nahodny klik.
- [ ] UTM pravidla nepovoluje osobni udaje ani interni citlive nazvy.
- [ ] Kvalitu kampani hodnotim podle leadu a obchodu, ne jen podle page views.
- [ ] Surova data maji retenci, agregace maji jasny ucel.
- [ ] Pristup k analytice je omezeny podle role.
- [ ] Privacy dokumenty lidsky vysvetluji, co merime a proc.

---

## 7. Onboarding, aktivace a retence v SaaS

Onboarding neni prohlidka aplikace. Je to cesta od prvniho slibu k prvnimu skutecnemu vysledku. Kdyz se uzivatel zaregistruje, jeste nic nevyhral. Jen ti venoval trochu duvery, casu a casto i osobnich nebo firemnich dat. Tvoje prace je tu duveru rychle promenit v hodnotu.

Aktivace je okamzik, kdy uzivatel poprve udela neco, co mu ukaze smysl produktu. Retence je dukaz, ze se k tomu smyslu vraci. Maly SaaS tym proto nepotrebuje nekonecny onboarding checklist s konfeti. Potrebuje vedet, jaka jedna akce vede k hodnote, co uzivateli brani ji udelat a jak ho provest bez zbytecneho sledovani.

Privacy-first princip je jednoduchy: onboarding ma sbirat jen data, ktera jsou nutna pro dodani hodnoty, bezpecnost nebo smluvni vztah. GDPR mluvi o data protection by design and by default v clanku 25: system ma byt navrzen tak, aby se zpracovavaly jen osobni udaje potrebne pro konkretni ucel: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng. To je presne spravny produktovy standard pro prvni dny uzivatele.

### 7.1 Aktivacni moment: najdi prvni dukaz hodnoty

Aktivacni moment neni nutne registrace, login ani dokonceny profil. To jsou jen mechanicke kroky. Aktivace nastane, kdyz uzivatel poprve uvidi, ze produkt resi jeho problem.

Priklady:

| Typ produktu | Slaba aktivacni metrika | Lepsi aktivacni moment |
| --- | --- | --- |
| CRM pro male studio | Vytvoren ucet | Prvni lead ma nastaveny dalsi krok a datum follow-upu. |
| Analytika | Vlozen tracking kod | Uzivatel vidi prvni relevantni konverzni signal. |
| Znalostni portal | Vytvoren workspace | Prvni odpoved je publikovana a poslana klientovi. |
| Fakturacni SaaS | Vyplnen profil firmy | Prvni faktura je odeslana nebo pripravena k odeslani. |
| Monitoring | Pridan endpoint | Prvni upozorneni nebo zeleny uptime report dorazi spravne osobe. |

Dobry onboarding se navrhuje pozpatku:

1. Co je prvni konkretni vysledek, kvuli kteremu zakaznik prisel?
2. Jake minimalni informace potrebuji, abych ho k vysledku dostal?
3. Ktery krok lze odstranit, odlozit nebo predvyplnit?
4. Kde muze vzniknout chyba, strach nebo pochybnost?
5. Jak uzivatel pozna, ze se posunul?

**Priklad:**

Produkt slibuje, ze majitel agentury nezapomene na follow-up po odeslane nabidce. Aktivacni moment neni "pridal integraci emailu". Lepsi moment je "Cody nasel tri otevrene nabidky bez odpovedi a navrhl komu dnes napsat". Pokud plna emailova integrace vyzaduje prilis dat a duvery, prvni verze muze fungovat rucnim importem nebo preposlanim vybranych emailu do kontrolovane schranky.

**Codyho komentar:** Kdyz aktivaci meris podle toho, ze uzivatel klikl na pet tlacitek, pravdepodobne meris, jak dobre snasi administrativu. Aktivace ma byt signal hodnoty, ne endurance test.

### 7.2 Registrace: ber jen to, co potrebujes ted

Registracni formular je prvni provozni slib. Rika: "Tolik dat po tobe chceme, abychom ti dodali hodnotu." Pokud chce produkt pri prvnim kroku jmeno, prijmeni, telefon, firmu, obrat, roli, velikost tymu a marketingovy souhlas, mel by umet velmi dobre vysvetlit proc.

Minimalni varianty podle situace:

| Situace | Rozumny zacatek |
| --- | --- |
| Trial pro jeden ucet | Email, heslo nebo magic link, prijeti podminek. |
| B2B demo | Pracovni email a kratky popis problemu. |
| Placeny pilot | Fakturacni udaje az pri objednavce, ne pri prvnim zajmu. |
| Produkt s tymy | Nejdrive zakladatel workspace, pozvanky az pozdeji. |
| Citliva data | Jasne vysvetleni ucelu, pristupu, retence a bezpecnostnich opatreni. |

EDPB pokyny k transparentnosti zduraznuji, ze informace pro subjekt udaju maji byt srozumitelne, pristupne a podane jasnym jazykem: https://www.edpb.europa.eu/documents/guideline/article-29-working-party-guidelines-on-transparency-under-regulation-2016679_en. V onboarding praxi to znamena: nedavej pravni dulezitost jen do dlouhe stranky v paticce. Kriticky mikrotext patri primo ke kroku, kde uzivatel data predava.

**Priklad mikrotextu u pozvani clena tymu:**

"Pozvany clovek dostane email s odkazem do vaseho workspace. Jeho email pouzijeme jen pro pozvani, prihlaseni a bezpecnostni udalosti k tomuto uctu."

To je lepsi nez obecne "Souhlasite se zpracovanim osobnich udaju", ktere casto nerika nic uzitecneho.

### 7.3 Bezpecne prihlaseni bez zbytecne bolesti

Onboarding a bezpecnost se nesmi brat jako nepratele. Spatne zabezpeceni znici duveru. Prehnane treneni zase znici aktivaci. Cilem je primerene riziku.

OWASP Authentication Cheat Sheet shrnuje dobre praxe pro prihlasovani, praci s hesly, chybove hlasky a ochranu proti utokum na ucty: https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html. Pro zapomenute heslo pouzij OWASP Forgot Password Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html. NIST SP 800-63-4 je aktualni sada digital identity guidelines a cast SP 800-63B-4 resi autentizaci a spravu autentizatoru: https://pages.nist.gov/800-63-4/ a https://csrc.nist.gov/pubs/sp/800/63/b/4/final.

Prakticka pravidla pro maly SaaS:

- Podporuj password manager: dovol dlouha hesla a vkladani do pole.
- Nevyzaduj nesmyslne skladani hesel typu "jedno velke pismeno, jeden symbol a zakaz kopirovani"; radeji kontroluj slaba nebo kompromitovana hesla.
- MFA nabidni minimalne pro adminy a ucty s citlivymi daty.
- Magic link muze byt dobry start, ale mysli na bezpecnost emailove schranky a expiraci odkazu.
- Chybove hlasky u loginu nedavej tak, aby prozrazovaly existenci uctu.
- Reset hesla musi mit kratkou platnost tokenu, jednorazove pouziti a jasny audit.
- Pozvanky do tymu musi byt omezene casem a idealne roli.

Bezpecnostni mikrotext ma byt konkretni:

> "Odkaz pro prihlaseni plati 15 minut a lze ho pouzit jen jednou."

To je pro uzivatele uzitecnejsi nez strasit slovem "bezpecnost" bez detailu.

### 7.4 Onboarding checklist ma mizet, ne rust

Checklist v aplikaci je dobry sluha a spatny pan. Ma uzivateli ukazat cestu k prvni hodnote, ne mu pripominat, ze jeste nesplnil interni prani produktoveho tymu.

Dobry aktivacni checklist:

- ma 3 az 5 kroku,
- zacina nejmensim krokem k vysledku,
- ukazuje stav a dalsi akci,
- dovoluje preskocit veci, ktere nejsou nutne,
- nevyzaduje data jen kvuli "kompletaci profilu",
- po dokonceni zmizi nebo se zmeni na uzitecny stav.

**Priklad pro monitoring endpointu:**

1. Pridej prvni URL.
2. Vyber, kam poslat upozorneni.
3. Over testovaci alert.
4. Nastav tiche hodiny nebo eskalaci.

Tohle je cesta k hodnote. Kroky jako "nahraj logo firmy" nebo "vypln pozici" mohou pockat, pokud nemaji bezprostredni praci.

Empty states jsou soucast onboardingu. Prazdna obrazovka nema rikat jen "Nic tu neni". Ma nabidnout dalsi akci a ukazat tvar budouci hodnoty.

**Priklad:**

"Zatim nesledujes zadnou URL. Pridej prvni endpoint a Cody behem minuty overi, jestli odpovida."

Kratke, akcni, bez teatralniho vysvetlovani produktu.

### 7.5 Aktivacni emaily a notifikace: servis, ne honicka

Email muze pomoct aktivaci, ale snadno se zmeni v otravny buben. Privacy-first SaaS by mel rozlisovat transakcni a marketingovou komunikaci.

Transakcni emaily jsou napriklad:

- potvrzeni registrace,
- magic link,
- pozvanka do workspace,
- faktura,
- upozorneni na bezpecnostni udalost,
- alert z produktu,
- potvrzeni exportu nebo smazani dat.

Marketingove nebo produktove nurture emaily jsou jiny rezim. Potrebuji jasne nastaveni preferenci, odhlaseni a rozumnou frekvenci. Pokud si nejsi jisty pravnim rezimem, over ho pred spustenim kampane. U B2B SaaS je prakticky lepsi zacit s malo emaily, ktere maji jasny servisni ucel.

Minimalni aktivacni sekvence pro trial:

| Cas | Email | Ucel |
| --- | --- | --- |
| Ihned | Potvrzeni a dalsi krok | Dostat uzivatele k prvni hodnote. |
| Po 24 h bez aktivace | Jedna konkretni pomoc | Odstranit nejcastejsi blokaci. |
| Po prvnim uspechu | Shrnut vysledek | Ukazat, co se povedlo a co dal. |
| Pred koncem trialu | Stav a moznosti | Ferove rict, co skonci a jak pokracovat. |

**Priklad emailu po 24 hodinach bez aktivace:**

Predmet: "Chybi prvni URL k monitoringu"

Text: "Zatim neni co hlidat. Pridej jednu URL a Cody posle testovaci vysledek. Pokud monitoring zatim jen vyhodnocujes, odpovez na tento email a poslu kratky postup bez nastavovani dalsich dat."

Tady neni manipulace ani falesna nalehavost. Jen kontext a pomoc.

### 7.6 Retence: navrat k hodnote, ne zavislost na triku

Retence neni umele drzeni uzivatele v aplikaci. Je to opakovany navrat k uzitku. Pokud uzivatel nemusi byt v produktu kazdy den, nenut ho. U fakturace muze byt zdrava retence mesicni. U monitoringu muze byt zdrave, ze uzivatel aplikaci neotevira, dokud nedorazi alert nebo report.

Rozlis tri typy retence:

| Typ | Co znamena | Priklad |
| --- | --- | --- |
| Akcni retence | Uzivatel opakovane dela klicovou akci. | Kazdy tyden uzavre follow-upy. |
| Vysledkova retence | Produkt pravidelne doda hodnotu i bez klikani. | Monitoring posle mesicni uptime report. |
| Tymova retence | Produkt se stane soucasti procesu vice lidi. | Obchod a delivery sdili stejny stav zakazky. |

Metriky vybir podle hodnoty:

- aktivovane ucty po 7 dnech,
- pocet uctu s prvnim hodnotovym vystupem,
- navrat ke klicove akci po tydnu nebo mesici,
- pocet zakazniku, kteri pouzili export, report nebo sdileni,
- churn duvody z realnych rozhovoru,
- pomer support dotazu k aktivovanym uctum.

Privacy-first retence se nepokousi nahradit hodnotu sledovanim. Nepotrebuje vedet kazdy pohyb mysi. Potrebuje poznat, jestli zakaznik dosahl vysledku. Nekdy to zjistis eventem. Nekdy kratkym emailem. Nekdy obchodnim rozhovorem.

**Priklad rozhodnuti:**

"Po trech tydnech vidime, ze 60 % novych workspace zalozi projekt, ale jen 20 % pozve druheho clena. Rozhovory ukazaly, ze se boji poslat kolegum nehotovy stav. Pristi iterace nebude dalsi notifikace. Pridame soukromy draft workspace a preview pozvanky."

To je retencni prace. Ne spam. Ne dark pattern. Produktove zmenseni strachu.

### 7.7 Offboarding je soucast duvery

Dobry SaaS mysli i na odchod. Zni to proti obchodnimu pudu, ale u B2B produktu je ferovy offboarding cast duvery. Zakaznik ma vedet, jak exportovat data, zrusit trial, zmenit plan, odebrat clena tymu nebo smazat account.

Zaklad:

- Export dat je dostupny bez support detektivky.
- Zruseni trialu nebo planu nema byt navrzene jako labyrint.
- Mazani dat vysvetluje, co se smaze hned, co zustava kvuli ucetnictvi nebo pravnim povinnostem a jak dlouho.
- Odebrani clena tymu resi vlastnictvi jeho obsahu.
- Po ukonceni pristupu se uzivateli neposilaji dalsi produktove nurture emaily, pokud k tomu neni jasny duvod a pravni zaklad.

Offboarding patri do onboarding kapitoly zamerne. Kdyz od zacatku vis, jak data opusti system, navrhnes cistsi datovy model, lepsi role a mensi zavislost na dodavatelich.

### Checklist: onboarding, aktivace a retence

- [ ] Mam definovany jeden hlavni aktivacni moment.
- [ ] Registrace sbira jen data potrebna pro prvni hodnotu, bezpecnost nebo smlouvu.
- [ ] Kriticke zpracovani dat vysvetluje mikrotext primo v toku.
- [ ] Login, reset hesla a pozvanky maji zakladni bezpecnostni pravidla.
- [ ] Admini a citlive ucty maji MFA nebo jasny plan jeho zavedeni.
- [ ] Aktivacni checklist ma 3 az 5 kroku a vede k vysledku.
- [ ] Empty states nabizeji konkretni dalsi akci.
- [ ] Transakcni emaily jsou oddelene od marketingovych.
- [ ] Aktivacni komunikace pomaha odstranit blokaci, ne vyvolat paniku.
- [ ] Retencni metriky meri navrat k hodnote, ne jen pocet loginu.
- [ ] Churn duvody sbiram kvalitativne a bez zbytecneho profilovani.
- [ ] Export, zruseni uctu a mazani dat jsou popsane uz pred vetsim provozem.
- [ ] Vim, ktera data zustavaji po ukonceni zakaznika a proc.

---

## 8. Cenotvorba a balicky bez zmatku

Cena neni jen cislo v tabulce. Je to signal, komu produkt slouzi, jakou hodnotu slibuje, jake zakaznik nese riziko a kolik prace bude mit tym se supportem, billingem a provozem. Spatna cenotvorba dokaze znicit dobry produkt dvojim zpusobem: bud ho podstreli tak, ze se neuzivi, nebo ho zabali tak slozite, ze zakaznik utece driv, nez pochopi rozdil mezi planem Pro, Plus, Growth a "Business Advanced Lite". To posledni zni jako prichut energy drinku, ne jako strategie.

Privacy-first SaaS ma u cen jeste jednu vyhodu: muze prodavat klid. Evropsky provoz, kontrola nad daty, jednoduche exporty, zadne reklamni sledovani a jasne smluvni podminky nejsou dekorace. Pro cast zakazniku jsou to nakupni duvody. Proto je neschovavej az do FAQ.

U cen pro spotrebitele v EU pocitej s tim, ze transparentnost neni jen dobry mrav. Evropska komise popisuje Price Indication Directive jako pravidla pro jasne uvadeni prodejni ceny a jednotkove ceny u spotrebitelskych produktu: https://commission.europa.eu/law/law-topic/consumer-protection-law/unfair-commercial-practices-and-price-indication/price-indication-directive_en. Consumer Rights Directive resi mimo jine informace pred nakupem a pravo zrusit online nakup v EU kontextu: https://commission.europa.eu/law/law-topic/consumer-protection-law/consumer-contract-law/consumer-rights-directive_en. U B2B SaaS se detaily budou lisit podle smluv, zeme a typu zakaznika, ale produktove pravidlo je stejne: cena ma byt citelna pred rozhodnutim, ne az po fakture.

### 8.1 Zacni hodnotovou metrikou

Hodnotova metrika je jednotka, podle ktere zakaznik prirozene chape rust hodnoty. Neni to vzdy pocet uzivatelu. U nekterych produktu dava smysl pocet projektu, sledovanych endpointu, odeslanych faktur, aktivnich klientu, ulozenych dokumentu nebo automatizovanych workflow.

Dobry pricing se pta:

- Kdy zakaznik z produktu dostava vic hodnoty?
- Kdy nam roste realny naklad na provoz?
- Kdy je dalsi jednotka jednoduse pochopitelna?
- Kdy by limit pusobil ferove, a kdy jako past?
- Da se metrika zmerit bez zbytecneho profilovani lidi?

Priklady:

| Produkt | Slaba metrika | Lepsi kandidat |
| --- | --- | --- |
| Monitoring webu | Pocet prihlasenych uzivatelu | Pocet sledovanych endpointu a frekvence kontroly. |
| CRM pro mala studia | Pocet sedadel od prvniho dne | Pocet aktivnich obchodnich pipeline nebo kontaktu v rozumnych pasmech. |
| Znalostni portal | Pocet clanku | Pocet internich clenu plus verejne portaly. |
| Analytika | Pocet dashboardu | Objem agregovanych udalosti nebo pocet webu. |
| Automatizace follow-upu | Pocet kliknuti | Pocet aktivnich workflow nebo klientskych procesu. |

Pozor na metriky, ktere trestaji uspech spatnym smerem. Kdyz nastroj slibuje tymovou spolupraci, ale kazdy novy clen okamzite zvysi cenu, zakaznik muze produkt drzet v jednom sdilenem uctu. To je spatne pro bezpecnost, audit i retenci. Nekdy je lepsi zakladni pocet clenu zahrnout do balicku a zpoplatnit az hodnotovy objem.

**Codyho komentar:** Cena ma zakaznika ucit, co je v produktu dulezite. Kdyz uctujes podle nahodne technicke promenne, ucis ho optimalizovat proti tobe. Pak se oba divite, proc je vztah divny.

### 8.2 Tri balicky staci casteji, nez si myslis

Pro prvni verejnou verzi obvykle staci tri urovne:

- Start: zakaznik si overi hodnotu s malym rizikem.
- Team: hlavni plan pro segment, na kterem chces stavet.
- Business: vyssi limity, tymove prvky, smluvni nebo bezpecnostni potreby.

Balicky nemaji byt sklad funkcni pyrotechniky. Maji vyjadrit rozdil v situaci zakaznika.

| Balicek | Pro koho | Co typicky obsahuje |
| --- | --- | --- |
| Start | Jednotlivec nebo maly tym testuje workflow. | Zakladni hodnota, nizke limity, samoobsluzny setup. |
| Team | Cilovy zakaznik pouziva produkt pravidelne. | Vyssi limity, spoluprace, export, normalni support. |
| Business | Firma potrebuje jistotu a kontrolu. | Role, audit log, DPA proces, priorita supportu, individualni nastaveni. |

U privacy-first SaaS dava smysl nedavat zakladni kontrolu nad daty jen do nejdrazsiho planu. Export dat, zruseni uctu, jasne mazani a zakladni privacy dokumentace nejsou luxusni doplnky. Jsou soucast duvery. Do vyssich planu patri spis rozsahlejsi audit logy, SSO, vlastni DPA workflow, vyssi retence logu podle smlouvy nebo dedikovane provozni nastaveni.

**Priklad spatneho rozdeleni:**

- Free: bez exportu, bez smazani dat, bez jasne podpory.
- Pro: konecne normalni funkcnost.
- Enterprise: pravo vedet, kde jsou data.

**Lepsi rozdeleni:**

- Start: zakladni produkt, export dat a jednoduche zruseni.
- Team: spoluprace, vyssi limity, historie a lepsi support.
- Business: pokrocile role, audit, smluvni dokumenty a provozni garance.

Cena tim rika: "Soukromi neni upsell. Kontrola je zaklad. Vyssi plan plati za slozitejsi provoz a organizacni potreby."

### 8.3 Trial, freemium nebo placeny pilot

Ne kazdy SaaS potrebuje free plan. Ne kazdy potrebuje trial. A ne kazdy B2B produkt se dobre prodava samoobsluzne. Vyber podle toho, kolik prace stoji dodat prvni hodnotu a jak velkou duveru musi zakaznik predat.

| Model | Kdy dava smysl | Hlavni riziko |
| --- | --- | --- |
| Free plan | Produkt ma nizky marginalni naklad a samostatnou viralitu. | Support pro neplatice sezere tym. |
| Casove omezeny trial | Hodnota se da ukazat rychle bez slozite integrace. | Uzivatel nestihne aktivaci a trial jen protece. |
| Placeny pilot | B2B problem je drahy, setup potrebuje spolupraci. | Pilot se stane zakazkovou praci bez produktu. |
| Demo request | Nakup potrebuje vysvetleni, smlouvu nebo security kontext. | Formular sbira leady, ale nevaliduje ochotu platit. |
| Usage-based | Hodnota i naklad rostou s pouzitim. | Zakaznik se boji nepredvidatelne faktury. |

Pro evropsky B2B SaaS casto funguje placeny pilot lepe nez nekonecny free plan. Zakaznik ukaze vazny zajem, ty omezis rozsah a oba vite, co se ma za 30 dni stat. Pilot ale musi mit jasny vystup.

Sablona pilotu:

```text
Delka: 30 dni
Cil: [jeden konkretni vysledek]
Rozsah: [jeden workflow / jeden tym / jeden web]
Data: [co presne se zpracuje, kde a proc]
Cena: [castka nebo kreditovatelna castka]
Na konci: pokracovani / export / smazani
```

U usage-based modelu pridej stropy a varovani. "Zaplatite podle pouziti" zni ferove, dokud zakaznik nevi, jestli ho chyba v integraci bude stat trojnasobek. Nastav limit, upozorneni pred prekrocenim a jednoduchy prehled spotreby.

### 8.4 Sleva neni strategie

Slevy umi pomoct, ale nesmi nahrazovat hodnotu. Nejhorsi sleva je ta, ktera zakaznika nauci cekat. Druha nejhorsi je ta, ktera vytvori chaos v tom, kdo plati kolik a proc.

Ferove slevy:

- maji jasny duvod,
- maji jasny konec,
- nemeni podminky potichu,
- nevyzaduji klamavou urgentnost,
- jdou vysvetlit i stavajicim zakaznikum.

U spotrebitelskych cen v EU si dej pozor na prezentaci slev a predchozich cen. Primarni smernik je opet transparentnost a neklamani; Price Indication Directive a pravidla proti nekalym obchodnim praktikam k tomu davaji pravni ramec. U B2B je prostor smluvnejsi, ale reputacni logika zustava: falesna "sleva do pulnoci", ktera se obnovuje kazdy den, je levny trik a drahy signal neduvery.

Lepsi nez obecna sleva:

- pilot s omezenym rozsahem,
- rocni platba za jasne nizsi cenu,
- startup nebo neziskovy plan s podminkami,
- migracni kredit za realnou praci,
- garance vraceni penez v dobre definovanem pripade.

**Priklad ferove rocni nabidky:**

"Rocni platba ma dva mesice zdarma, protoze nam snizuje fakturacni administrativu a dava produktu stabilnejsi planovani. Mesicni plan lze ukoncit kazdy mesic."

To je citelne. Zakaznik vi, co ziska a co dava na oplatku.

### 8.5 Billing, DPH a smluvni realita

Cenik na webu je jen viditelna cast. Pod nim musi fungovat billing, fakturace, dane, pristupy, zruseni a refundy. Jakmile prodavas pres hranice, hlavne B2C v EU, res DPH a fakturacni pravidla s ucetnim nebo danovym poradcem. Evropsky VAT One Stop Shop popisuje OSS jako zjednoduseni pro podniky prodavajici zbozi a dodavajici sluzby koncovym spotrebitelum v EU: https://vat-one-stop-shop.ec.europa.eu/index_en. Pro SaaS je prakticke mit to vyresene driv, nez prvni nemecky zakaznik klikne na "Buy" a fakturacni system se zacne tvarit prekvapene.

Minimalni billing checklist:

- Ceny jasne rikaji, zda jsou bez DPH nebo vcetne DPH.
- Faktura obsahuje spravne identifikacni udaje.
- System umi pracovat s B2B a B2C rozdilem, pokud prodavas obema.
- Zmena planu ma jasny dopad na cenu a limity.
- Zruseni predplatneho je dostupne a potvrzene emailem.
- Refundy maji pravidla, ktera support umi vysvetlit.
- Pristup po nezaplaceni faktury ma lidsky rozumnou grace period.
- Export dat je mozny pred definitivnim ukoncenim pristupu.

Nepouzivej billing jako past. Kdyz zakaznik odchazi, nech ho odejit ciste. U B2B se velmi casto vrati pozdeji, pokud odchod nebyl drama. Pokud ho zamknes pres skryte zruseni, mozna vyhrajes jednu fakturu a prohrajes doporuceni.

### 8.6 Cenik jako produktova stranka

Cenik neni ucetni tabulka. Je to jedna z nejdulezitejsich produktovych stranek. Ma pomoct cloveku vybrat, snizit nejistotu a jasne ukazat, co se stane po kliknuti.

Dobry SaaS cenik obsahuje:

- jednu vetu, pro koho je kazdy plan,
- hlavni rozdily mezi plany,
- limity napsane lidsky,
- jasne CTA pro kazdy plan,
- odpovedi na nakupni obavy,
- privacy a provozni signal,
- informaci o DPH, fakturaci a zruseni,
- odkaz na podminky a ochranu osobnich udaju.

**Priklad mikrocopy pod cenikem:**

"Ceny jsou uvedene bez DPH pro firemni zakazniky. Data provozujeme v evropskem prostredi, nepouzivame reklamni pixely a export je dostupny ve vsech placenych planech."

To neni dlouhe. Ale odpovida na tri realne otazky: kolik to stoji, kde jsou data a jestli se zakaznik muze dostat ven.

Kontrola ceniku:

| Otazka | Proc je dulezita |
| --- | --- |
| Pozna cilovy zakaznik doporuceny plan do 10 sekund? | Snizuje rozhodovaci treneni. |
| Je videt, co se stane po kliknuti? | Omezuje strach z pasti. |
| Jsou limity spojene s hodnotou? | Cena pusobi feroveji. |
| Jsou privacy prvky konkretni? | Duvera neni jen slogan. |
| Je dostupne zruseni, export a kontakt? | Zakaznik vidi kontrolu. |

**Codyho komentar:** Cenik je dobra zkouska toho, jestli produktu sam rozumis. Kdyz neumim vysvetlit rozdil mezi plany jednou vetou, mozna nemam pricing problem. Mozna mam produktovy problem v kostymu pricingu.

### Checklist: cenotvorba a balicky

- [ ] Mam vybranou hodnotovou metriku, ktera odpovida uzitku i nakladum.
- [ ] Zakaznik neplati vic jen proto, ze produkt pouziva bezpecneji nebo tymoveji.
- [ ] Balicky jsou postavene podle situace zakaznika, ne podle interniho seznamu funkci.
- [ ] Zakladni export, zruseni a kontrola nad daty nejsou luxusni upsell.
- [ ] Trial, freemium nebo pilot odpovida narocnosti aktivace.
- [ ] Usage-based cena ma stropy, upozorneni a citelny prehled spotreby.
- [ ] Slevy maji jasny duvod, konec a pravidla.
- [ ] Cenik rika, zda ceny jsou bez DPH nebo vcetne DPH.
- [ ] U preshranicniho prodeje mam overeny billing, DPH a OSS dopady s odbornikem.
- [ ] Zmena planu, refund, zruseni a nezaplacena faktura maji popsany proces.
- [ ] Cenik obsahuje privacy-first signal, pokud je soucast hodnoty produktu.
- [ ] Po kliknuti na CTA je jasne, zda jde o trial, pilot, demo nebo objednavku.

---

## 9. Produktivita zakladatele: system prace, ne dalsi aplikace

Zakladatel maleho SaaS tymu ma zvlastni druh problemu: vsechno je dulezite a skoro nic neni hotove. Produkt chce funkce, web chce texty, zakaznici chteji odpovedi, ucetni chce doklady, monitoring chce pozornost a hlava chce obcas predstirat, ze je normalni organ, ne zalozni server pro vsechny poznamky sveta.

Produktivita proto neni o tom najit kouzelnou aplikaci. Je to o tom mit system, ktery opakovane rozhoduje, co se dnes neudela. Bez toho se prace meni v nekonecne prepinani kontextu: rano produkt, dopoledne support, po obede pricing, vecer bug, v noci "jen rychle" novy nastroj. Vysledek je spousta pohybu a malo tahu.

Privacy-first pohled sem patri vic, nez se zda. Kdyz mas system prace zalozeny na nahodnych SaaS nastrojich, kopirovani zakaznickych dat do AI chatu a sdilenych tabulkach bez pravidel, nevyrabis jen chaos. Vyrabis datove riziko. Dobry pracovni system ma drzet rozhodnuti, kontext a zakaznicka data pod kontrolou.

### 9.1 Jedna hlavni fronta prace

Maly tym nepotrebuje deset boardu. Potrebuje jednu pravdivou frontu prace. Pravdivou znamena, ze kdyz se na ni podivas, vidis realitu: co je rozpracovane, co ceka, co blokuje prodej, co blokuje zakaznika a co je jen sympaticky napad pro nekdy.

Minimalni sloupce:

| Sloupec | Co v nem smi byt |
| --- | --- |
| Inbox | Nove veci bez rozhodnuti. |
| Pristi | Veci, ktere maji realnou sanci prijit na radu. |
| Tento tyden | Zavazek tymu na aktualni tyden. |
| Dnes | Prace, ktera ma skutecne probehnout dnes. |
| Ceka | Blokovane veci s jasnym dalsim clovekem nebo datem. |
| Hotovo | Uzavrene veci vcetne odkazu na vystup. |

Pravidlo pro zakladatele: `Dnes` neni druha verze backlogu. Ma obsahovat malo veci. Idealne jednu az tri dulezite polozky, ktere posunou produkt nebo obchod. Kdyz je tam dvanact ukolu, neni to plan. Je to prosba vesmiru, aby porusil fyziku.

Kazda polozka ve fronte ma mit:

- jedno sloveso,
- jasny vystup,
- vlastnika,
- dalsi krok,
- odkaz na kontext,
- rozhodnuti, jestli obsahuje zakaznicka nebo interni data.

**Priklad slabe polozky:**

"Pricing"

**Lepsi polozka:**

"Prepsat pricing page pro Team plan tak, aby do 10 sekund vysvetlila limit projektu, export dat a DPH. Vystup: PR s textem a screenshotem."

Tohle uz jde udelat, zkontrolovat a dokoncit.

### 9.2 Tydenni rozhodovaci rytmus

Produktivita bez rytmu se rozpadne pri prvnim incidentu. Rytmus neni byrokracie. Je to predem domluvena chvile, kdy se rozhoduje misto improvizuje.

Jednoduchy rytmus pro prvni SaaS:

| Kdy | Otazka | Vystup |
| --- | --- | --- |
| Pondeli rano | Co je jedna vec, ktera tento tyden nejvic posune produkt nebo prodej? | Tydenni priorita. |
| Kazdy den rano | Co dnes dokonci hodnotu, ne jen aktivitu? | 1 az 3 ukoly v `Dnes`. |
| Kazdy den konec prace | Co zustalo otevrene a proc? | Aktualizovana fronta, zadne tajemne rozpracovano. |
| Patek | Co jsme se naucili od zakazniku, dat a provozu? | 3 poznatky a jedno rozhodnuti. |
| Mesicne | Co musime prestat delat? | Smazane nebo odlozene iniciativy. |

Tydenni priorita ma byt konkretni. "Zlepsit aktivaci" je tema. "Zkratit cestu od registrace k prvnimu importu kontaktu z 5 kroku na 3 a otestovat s 3 zakazniky" je priorita.

Pouzij sablonu:

```text
Tento tyden vyhrajeme, pokud:
[konkretni vysledek]

Nejvetsi riziko:
[co muze vysledek zablokovat]

Nebudeme delat:
[1 az 3 veci, ktere by lakaly pozornost]

Dukaz hotovo:
[odkaz, screenshot, metrika, odpoved zakaznika, commit]
```

Nejcennejsi radek je "Nebudeme delat". Zakladatel bez seznamu odmitnutych veci ma jen delsi seznam viny.

### 9.3 Chran hlubokou praci jako produkcni databazi

Hluboka prace je cas, kdy vznikaji veci, ktere nejdou vyresit mezi dvema notifikacemi: architektura, text hlavni nabidky, refaktor kritickeho toku, cenotvorba, rozhovorovy synthesis, rozhodnuti o segmentu. Kdyz tenhle cas rozsekas, nevznikne mensi verze kvalitni prace. Vznikne hromada polotovaru.

Minimalni ochrana:

- Dve az tri bloky tydne po 90 az 120 minutach.
- Pred blokem napsany jeden vystup.
- Zavrene inboxy a chaty, pokud nejsi v incident rezimu.
- Poznamka "kam se vratit", kdyz blok prerusi neco duleziteho.
- Po bloku kratky zapis vysledku do fronty prace.

**Priklad dobreho hlubokeho bloku:**

```text
Blok: Utery 9:00-10:30
Vystup: Navrh noveho onboarding checklistu pro import prvnich dat.
Vstupy: 5 poslednich support dotazu, aktualni flow, aktivacni metrika.
Hotovo znamena: Markdown navrh s kroky, mikrocopy a jednim merenym eventem.
```

To je pracovni jednotka. "Promyslet onboarding" je mlha v kabate.

Kdyz delas s citlivym kontextem, dej si jeste jedno pravidlo: do externich AI nastroju neposilej cele exporty zakaznickych dat, interni smlouvy ani logy s osobnimi udaji. Pokud chces pomoc s formulaci nebo analyzou, anonymizuj vstup, zmensi ho na relevantni cast a zapis si, co kam odchazi. Produktivita, ktera zvysi datove riziko, neni produktivita. Je to dluh v peknem kabate.

**Codyho komentar:** Nejrychlejsi zpusob, jak vypadat zaneprazdnene, je odpovidat na vsechno hned. Nejrychlejsi zpusob, jak neco postavit, je nektere veci nechat chvili cekat. Ano, ego si odfrkne. Produkt podekuje.

### 9.4 Inboxy, meetingy a rozhodnuti

Zakladatel ma obvykle moc inboxu: email, chat, kalendar, GitHub, support, fakturace, monitoring, poznamky, hlasovky, dokumenty. Problem neni existence inboxu. Problem je, kdyz kazdy inbox muze kdykoli rozhodovat o tvem dni.

Rozdel komunikaci na tri rezimy:

| Rezim | Co sem patri | Reakce |
| --- | --- | --- |
| Incident | Produkce nejde, platby nejdou, bezpecnostni problem. | Hned. |
| Provozni tok | Zakaznicke odpovedi, review, faktury, planovane blokace. | V urcenych kontrolach. |
| Asynchronni kontext | Napady, odkazy, poznamky, "nekdy by se melo". | Do inboxu, rozhodnout pozdeji. |

Meeting ma mit vlastnika a jeden ze tri ucelu:

- rozhodnout,
- synchronizovat blokaci,
- naucit se neco od zakaznika nebo trhu.

Kdyz meeting nema vystup, patri do asynchronni zpravy. Kdyz se na meetingu jen cte dokument, mel byt dokument poslany predem. Kdyz se na meetingu opakuje stejna debata potreti, chybi rozhodovaci pravidlo.

Sablona rozhodnuti:

```text
Rozhodnuti:
[co plati]

Proc:
[2 az 4 vety]

Alternativy:
[co jsme zvazili]

Dopad:
[produkt / obchod / provoz / data]

Znovu otevreme, kdyz:
[konkretni signal]
```

Posledni radek je dulezity. Bez nej se tym vraci ke starym debatam pokazde, kdyz nekdo najde novy clanek nebo ma po kave silnejsi nazor.

Privacy-first doplnek: rozhodnuti o nastrojich zapisuj stejne peclive jako produktova rozhodnuti. Kdyz zavades novy CRM, podporu, analytiku nebo AI asistenta, zapis data flow: jaka data tam jdou, proc, kdo ma pristup, jak se exportuji a jak se smazou. Neni to brzda. Je to ochrana pred budoucim "kdo to tam vlastne posilal?"

### 9.5 Automatizuj opakovane, ne nepochopene

Automatizace je skvela sluha a docela drahy chaos generator. Neautomatizuj proces, ktery jeste neumite udelat rucne konzistentne. Nejdrive ho popis, zjednodus, over a teprve pak automatizuj.

Dobri kandidati:

- kontrola dostupnosti webu,
- zalozeni standardniho projektu,
- generovani fakturacniho exportu,
- publikacni checklist,
- zaloha databaze,
- vytvoreni release poznamky z uzavrenych polozek,
- pravidelny report metrik bez osobnich detailu.

Spatni kandidati:

- automaticke posilani marketingu bez jasneho souhlasu,
- automaticke skore leadu z nahodne poskladanych osobnich dat,
- automaticke mazani produkcnich dat bez obnovitelne zalohy,
- automaticke odpovedi zakaznikum bez kontroly tonu a faktu,
- slozity workflow, ktery nikdo neumi vysvetlit jednou vetou.

Pred kazdou automatizaci odpovez:

- Kolikrat tydne se to deje?
- Kolik casu to realne bere?
- Co se stane, kdyz automatizace selze?
- Jaka data zpracuje?
- Lze ji vypnout bez dopadu na zakaznika?
- Kdo dostane upozorneni pri chybe?

**Priklad dobre male automatizace:**

Kazdou hodinu se zkontroluje dostupnost marketingoveho webu. Kdyz web odpovi, nic se nedeje. Kdyz neodpovi, system spusti diagnostiku a zapise vysledek. Clovek dostane zpravu az ve chvili, kdy je potreba rozhodnuti nebo rucni zasah.

Tohle setri pozornost a neposila zbytecna data nikam ven. Presne tak ma automatizace vypadat: malo hluku, jasny ucel, kontrolovatelny dopad.

### 9.6 Osobni provozni manual zakladatele

Zakladatel je taky soucast systemu. Kdyz vsechno stoji na tom, co si zrovna pamatuje, firma je krehka. Osobni provozni manual neni ezoterika. Je to kratky dokument, ktery rika, jak pracujes, kdy jsi dostupny, jak eskalovat problem a jak poznat, ze uz je toho moc.

Minimalni obsah:

- Kdy kontroluji inboxy.
- Co je incident a co pocka.
- Jak planuji tyden.
- Kde je pravdiva fronta prace.
- Kde jsou rozhodnuti a provozni dokumentace.
- Jake typy dat nikdy nekopiruji do externich nastroju.
- Jak vypada dobry pozadavek na me.
- Co delam, kdyz mam vic ukolu nez kapacity.

Sablona pozadavku:

```text
Co potrebujes:
[konkretni vystup]

Proc ted:
[dopad nebo deadline]

Kontext:
[odkazy, zakaznik, souvislosti]

Data:
[obsahuje osobni / citliva / interni data?]

Hotovo znamena:
[jak poznas, ze je prace dokoncena]
```

Tahle sablona vypada obycejne, ale snizi pulku nedorozumeni. Hlavne u maleho tymu, kde jeden clovek strida role podle toho, odkud zrovna hori.

### Checklist: produktivita zakladatele

- [ ] Existuje jedna pravdiva fronta prace, ne deset soubeznych seznamu.
- [ ] Polozky maji sloveso, vystup, vlastnika a odkaz na kontext.
- [ ] `Dnes` obsahuje jen realne dokoncitelne prace.
- [ ] Tyden ma jednu hlavni prioritu a jasne receno, co se delat nebude.
- [ ] Kazdy den konci aktualizaci otevrenych veci.
- [ ] Hluboka prace ma bloky v kalendari a predem definovany vystup.
- [ ] Inboxy maji rezim kontroly; jen incidenty maji pravo prerusit den.
- [ ] Meetingy slouzi k rozhodnuti, odstraneni blokace nebo uceni od zakaznika.
- [ ] Rozhodnuti jsou zapsana vcetne duvodu, dopadu a signalu pro znovuotevreni.
- [ ] Nove nastroje maji popsanou datovou stopu: co tam jde, proc, pristupy, export a mazani.
- [ ] Automatizuji jen procesy, ktere umime rucne delat konzistentne.
- [ ] Automatizace maji monitoring selhani a jdou vypnout.
- [ ] Zakaznicka a interni data nekopiruji do externich nastroju bez duvodu, minimalizace a kontroly.
- [ ] Existuje kratky osobni provozni manual zakladatele.

---

## 10. Provoz v Evrope: hosting, zalohy, incidenty a dodavatele

Provoz neni to, co zacne az po launchi. Provoz je vsechno, co rozhoduje, jestli produkt zustane dostupny, obnovitelny, vysvetlitelny a pravne obhajitelny, kdyz se veci pokazi. U maleho SaaS se casto resi hlavne rychlost vyvoje, ale zakaznik si nekupuje jen funkce. Kupuje i duveru, ze jeho data nezmizi, nebudou putovat po svete bez duvodu a ze v pripade problemu neuslysi jen "zkousime zjistit, co se stalo".

Privacy-first evropsky provoz stoji na ctyrech rozhodnutich:

- kde produkt bezi,
- jak jsou data zalohovana a obnovovana,
- jak se zachazi s incidenty,
- kteri dodavatele se smi dotknout dat.

GDPR u osobnich udaju vyzaduje mimo jine integritu, duvernost a schopnost spravce dolozit soulad. Pri poruseni zabezpeceni osobnich udaju muze vzniknout povinnost oznamit incident dozorovemu uradu bez zbytecneho odkladu a, pokud je to mozne, do 72 hodin podle clanku 33 GDPR: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng. EDPB k tomu vydal prakticke pokyny k oznamovani data breach: https://www.edpb.europa.eu/documents/guideline/guidelines-92022-on-personal-data-breach-notification-under-gdpr_en.

NIS2 pridava evropsky ramec kyberbezpecnosti pro vybrane sektory a typy organizaci. Ne kazdy maly SaaS do nej spadne, ale jeho logika je uzitecna i pro firmy mimo primou pusobnost: rizikove rizeni, incident reporting, odpovednost vedeni, bezpecnost dodavatelskeho retezce a kontinuita provozu. Oficialni text smernice je zde: https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng.

**Codyho komentar:** Nejlepsi provozni dokumentace neni slozka s nazvem "compliance". Je to par kratkych souboru, podle kterych dokazes ve tri rano obnovit sluzbu, najit vlastnika systemu a rict zakaznikovi pravdu bez improvizovane poezie.

### 10.1 Hosting: EU region neni detail v objednavce

Hosting je prvni velke privacy-first rozhodnuti. Vyber poskytovatele neurcuje jen cenu serveru, ale i jurisdikci, logovani, supportni pristupy, zalohy, dostupnost regionu a to, jak slozite bude pozdeji vysvetlit datove toky zakaznikum.

Minimalni otazky pred vyberem hostingu:

- Nabizi poskytovatel EU datove centrum a lze ho vynutit pro vsechny relevantni sluzby?
- Kde konci zalohy, snapshoty, logy a supportni dumpy?
- Kdo ma pristup k produkcnim datum a jak se pristupy audituji?
- Existuje DPA nebo podobna smlouva pro zpracovani osobnich udaju?
- Lze data rozumne exportovat pri odchodu?
- Ma poskytovatel status page, incident history a jasne SLA?
- Jak se resi smazani dat po ukonceni sluzby?

Pro maly SaaS obvykle dava smysl zacit jednoduse:

| Vrstva | Konzervativni volba | Proc |
| --- | --- | --- |
| Marketingovy web | staticky build nebo server-renderovana aplikace v EU | malo pohyblivych casti, snazsi cache, mensi riziko vypadku |
| Aplikace | jeden primarni EU region | mensi latence pro evropske zakazniky, jednodussi compliance |
| Databaze | spravovana databaze s EU regionem a sifrovanymi zalohami | mene provozniho rizika nez vlastni ruce na kazdem detailu |
| Soubory | objektove uloziste v EU s lifecycle pravidly | oddeleni uploadu od aplikace, snazsi retence |
| Monitoring | uptime a chybove logy s minimalnimi osobnimi daty | rychla detekce bez zbytecneho sledovani uzivatelu |

Pozor na "EU region" jako marketingovy slib. U nekterych nastroju bezi hlavni data v EU, ale telemetry, billing metadata, supportni logy nebo AI funkce mohou odchazet jinam. To nemusi byt automaticky zakazane, ale musi to byt vedome rozhodnuti, ne prekvapeni po prvnim enterprise dotazniku.

Prakticke pravidlo: pokud nedokazes jednou vetou vysvetlit, kde jsou produkcni data a zalohy, hosting jeste neni pripraveny na vazne zakazniky.

### 10.2 Datova mapa: mala tabulka, velka uspora nervu

Datova mapa je provozni mapa toho, co v produktu existuje. Nemusi to byt obri diagram. Staci tabulka, ktera odpovi na zakladni otazky pri prodeji, incidentu, auditu i migraci.

Minimalni sablona:

| Data | Ucel | System | Region | Pristup | Retence | Mazani |
| --- | --- | --- | --- | --- | --- | --- |
| Ucet uzivatele | prihlaseni a sprava sluzby | aplikacni databaze | EU | backend + admin role | po dobu smlouvy | automaticky po offboardingu |
| Fakturacni udaje | vystaveni dokladu | fakturace | EU / dle dodavatele | finance | dle ucetnich povinnosti | po uplynuti lhuty |
| Produktove eventy | aktivace a retence | analytika | EU | produktovy tym | 6-12 mesicu | agregace nebo smazani |
| Support zpravy | pomoc zakaznikovi | helpdesk / email | EU preferovane | support | dle SLA | na zadost nebo po uzavreni |
| Logy | diagnostika chyb | logging | EU | vyvoj/provoz | kratka technicka retence | rotace |

U kazdeho radku si poloz tri doplnujici otazky:

- Je tam osobni udaj?
- Je tam interni nebo obchodne citliva informace?
- Lze ucel splnit s mensim detailem?

**Priklad privacy-first zjednoduseni:**

Misto ukladani cele IP adresy v produktove analytice pouzij agregaci, kratkou retenci nebo anonymizaci podle schopnosti zvoleneho nastroje. Misto logovani celeho request body loguj typ chyby, request ID a technicky kontext. Misto kopirovani zakaznickych dat do chatu s dodavatelem posli reprodukcni kroky na anonymnim prikladu.

Datova mapa se hodi i obchodne. Kdyz se zakaznik zepta "kde jsou nase data?", neodpovidas dojmem. Otevres tabulku a reknes pravdu.

### 10.3 Zalohy: zaloha, kterou nikdo netestoval, je prani

Zalohy nejsou hotove ve chvili, kdy cloud ukazuje zelenou ikonku. Zaloha je hotova az tehdy, kdyz umis obnovit konkretni system v rozumnem case a vis, kolik dat muzes ztratit.

Dve zakladni metriky:

- RPO: kolik dat si muzes dovolit ztratit.
- RTO: jak dlouho muze trvat obnova.

Pro prvni SaaS si stanov jednoduchou tabulku:

| System | RPO | RTO | Test obnovy |
| --- | --- | --- | --- |
| Produkcni databaze | 15 minut az 24 hodin podle typu produktu | 2-8 hodin | mesicne nebo pred vetsim releasem |
| Uploady zakazniku | 24 hodin nebo lepe | 8-24 hodin | kvartalne |
| Marketingovy web | git jako zdroj pravdy | 1 hodina | pri zmene deploy procesu |
| Konfigurace a infrastruktura | po kazde zmene | 2-4 hodiny | po vetsim refaktoru infrastruktury |

Prakticke minimum:

- Automaticke databazove zalohy.
- Oddelene ulozeni zaloh od primarniho systemu.
- Sifrovani zaloh.
- Pristup k obnoveni omezeny na male mnozstvi lidi.
- Dokumentovany postup obnovy.
- Pravidelny restore test do izolovaneho prostredi.
- Evidence, co se testovalo a jak dlouho obnova trvala.

ENISA v doporucenich pro male a stredni podniky zduraznuje pripravu na incidenty, zalohy, cloudova rizika a prakticke kroky kyberhygieny: https://www.enisa.europa.eu/publications/cybersecurity-guide-for-smes.

**Priklad restore drillu:**

Jednou mesicne vytvor izolovane testovaci prostredi, obnov posledni databazovou zalohu, spust zakladni smoke test a zapis vysledek:

```text
Datum:
System:
Zaloha z casu:
Obnova trvala:
Overeno:
Problemy:
Dalsi krok:
```

Pokud restore test nikdo nechce delat, zjednodus ho. Lepsi je pet minut realneho testu nez dvacetistrankovy plan, ktery nikdo nikdy nespustil.

### 10.4 Incidenty: nejdrive zastavit skodu, potom psat roman

Incident neni jen hacker v kapuci. Incident muze byt rozbity deploy, unik logu, spatne nastavene pristupy, smazana data, omylem odeslany export, vadna integrace nebo formular, ktery tyden neposila poptavky. Provoz potrebuje jednoduchou klasifikaci, aby tym nepanikaril ani nezaspal.

Navrh tri urovni:

| Uroven | Popis | Reakce |
| --- | --- | --- |
| P1 | vypadek produkce, ztrata dat, mozny unik osobnich udaju | okamzita reakce, incident lead, casova osa |
| P2 | degradace hlavni funkce, problem s platbami, caste chyby | reakce v pracovnim rezimu nebo pohotovosti podle SLA |
| P3 | mensi chyba bez dopadu na data a hlavni tok | bezny backlog s jasnym vlastnikem |

Minimalni incident runbook:

1. Potvrd dopad: co nefunguje, komu, od kdy.
2. Zastav skodu: vypni integraci, vrat deploy, omez pristup, izoluj system.
3. Zachovej dukazy: logy, casy, konfigurace, ale nekopiruj osobni data vic, nez je nutne.
4. Urc vlastnika incidentu: jeden clovek ridi, ostatni resi.
5. Rozhodni o komunikaci: interni, zakaznicka, pravni, regulatorni.
6. Pokud jde o osobni udaje, posud GDPR breach povinnosti.
7. Po obnoveni sepis kratky postmortem s opatrenimi.

Sablona casove osy:

```text
Incident:
Zacatek dopadu:
Detekce:
Prvni reakce:
Mitigace:
Obnoveno:
Dopad na data:
Dopad na zakazniky:
Komunikace:
Preventivni opatreni:
```

U GDPR incidentu neni nejdulezitejsi napsat krasny dokument. Nejdrive musis rychle zjistit, zda doslo k poruseni zabezpeceni osobnich udaju, jake typy dat jsou dotcene, kolika lidi se to tyka, jaka je pravdepodobnost rizika a zda je potreba oznameni uradu nebo dotcenym osobam. U slozitejsich pripadu patri do hry pravnik a poverena osoba, pokud ji organizace ma.

**Codyho komentar:** Incident komunikace ma byt nudna, presna a pravdiva. Kdyz nevis, rekni co vis, co overujes a kdy prijde dalsi update. Marketingova mlha v incidentu nevypada profesionalne. Vypada jako kourovy alarm prelepeny samolepkou "brand voice".

### 10.5 Dodavatele: integrace ma mit vystupni dvere

Dodavatel neni jen firma v seznamu faktur. Je to soucast tveho bezpecnostniho a datoveho modelu. U maleho SaaS se nejcasteji podcenuji nastroje, ktere vypadaji "jen interni": chat, helpdesk, nahravani callu, AI asistenti, projektove rizeni, error tracking a sdilene dokumenty.

Pred zavedenim dodavatele vypln kratke vendor review:

```text
Dodavatel:
Ucel:
Jake data tam posilame:
Obsahuje osobni udaje:
Obsahuje zakaznicka data:
Region ulozeni:
Subdodavatele:
DPA / smluvni opora:
Pristupy v tymu:
Export:
Mazani:
Plan B pri vypadku nebo odchodu:
Vlastnik:
```

Rozhodovaci pravidla:

- Pokud nastroj nepotrebuje osobni data, neposilej je tam.
- Pokud nastroj nema jasny export, nepouzivej ho jako primarni system pravdy.
- Pokud nastroj nema rozumnou kontrolu pristupu, nedavej do nej citliva data.
- Pokud nastroj bezi mimo EU nebo ma nejasne subdodavatele, vyzaduj silnejsi duvod.
- Pokud se bez nastroje neda produkt provozovat, musi mit vlastnika, monitoring a plan nahrady.

Vendor lock-in neni jen technicky problem. Je to i privacy problem. Kdyz nejde rozumne exportovat nebo smazat data, ztracis kontrolu prave ve chvili, kdy ji potrebujes nejvic.

### 10.6 Provozni rytmus pro maly tym

Provoz nemusi byt byrokraticky, kdyz ma rytmus. Staci par opakovanych kontrol, ktere jsou kratke a maji vystup.

Tydenne:

- projit uptime a hlavni chyby,
- zkontrolovat neuspesne joby a formulare,
- projit otevrene bezpecnostni aktualizace,
- overit, ze zalohy bezi,
- zavrit nebo vlastnit otevrene provozni ukoly.

Mesicne:

- restore test vybrane zalohy,
- revize pristupu v admin nastrojich,
- kontrola dodavatelu s novymi datovymi toky,
- kontrola retence logu a analytiky,
- kratky review incidentu a near-miss udalosti.

Kvartalne:

- aktualizace datove mapy,
- revize nejdulezitejsich DPA a subdodavatelu,
- tabletop incident cviceni,
- kontrola RPO/RTO proti realite produktu,
- cisteni starych pristupu, tokenu a integraci.

**Priklad jednoducheho tabletop cviceni:**

"V patek v 16:30 zjistime, ze support omylem poslal export zakaznickych uzivatelu spatnemu prijemci. Co je prvnich 30 minut? Kdo rozhoduje? Kde najdeme seznam dotcenych dat? Kdo komunikuje? Jak poznames, zda jde o GDPR breach?"

Kdyz tym nedokaze odpovedet behem deseti minut, neni to ostuda. Je to levny signal, ze runbook potrebuje doplnit drive, nez ho otestuje realita.

### Checklist: evropsky privacy-first provoz

- [ ] Vim, ve kterem regionu bezi aplikace, databaze, soubory, logy a zalohy.
- [ ] U hostingu a hlavnich dodavatelu mam DPA nebo jinou smluvni oporu, pokud zpracovavaji osobni udaje.
- [ ] Existuje aktualni datova mapa pro hlavni typy dat.
- [ ] Logy neukladaji cele requesty, hesla, tokeny ani zbytecne osobni udaje.
- [ ] Pro kazdy kriticky system mam stanovene RPO a RTO.
- [ ] Zalohy jsou sifrovane a oddelene od primarniho systemu.
- [ ] Restore test probehl a vysledek je zapsany.
- [ ] Incidenty maji urovne P1/P2/P3 a jasny runbook.
- [ ] U osobnich udaju existuje postup pro posouzeni GDPR breach a pripadne oznameni.
- [ ] Dodavatele maji vyplneny vendor review vcetne regionu, pristupu, exportu a mazani.
- [ ] Klicove nastroje maji vlastnika a plan B.
- [ ] Pristupy, tokeny a admin role se pravidelne reviduji.
- [ ] Provozni rytmus ma tydenni, mesicni a kvartalni kontroly.
- [ ] Zakaznicka komunikace pri incidentu je pripravena jako sablona: vecna, presna, bez zbytecneho mlzeni.

---

## 11. Checklist pred verejnym spustenim

Launch neni kouzelny okamzik, kdy produkt prestane byt nedokonaly. Je to kontrolovany prechod z "stavime a ucime se v malem" do "nekdo cizi se na to muze spolehnout". U maleho SaaS je nejhorsi launch ten, ktery se tvari jako slavnost, ale nema pripraveny formular, rollback, pravni texty, supportni odpovedi ani monitoring.

Dobry launch checklist nema byt byrokraticky oltar. Ma zachytit veci, ktere se spatne opravuji pod tlakem: rozbite prvni kroky, nejasne ceny, zbytecne sbirani dat, neexistujici zalohy, chybejici zdroje v obsahu a marketingove skripty, ktere se spusti driv nez souhlas. Jinymi slovy: veci, ktere vypadaji male, dokud kvuli nim neprijde prvni zakaznik o duveru.

Privacy-first launch ma jeste jednu latku: kdyz nevis, proc data sbiras, kde jsou a jak je smazes, nejsi pripraveny. GDPR principy minimalizace, omezeni ulozeni a privacy by design nejsou posledni kontrola pravnika. Jsou produktovy filtr uz pred verejnym tlacitkem: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng.

### 11.1 Launch gate: co musi byt pravda

Pred spustenim si napis jednu stranku s odpovedmi. Ne prezentaci. Ne roadmapu. Jednu stranku, ktera rika, proc launch dava smysl ted.

Sablona:

```text
Produkt spoustime pro:
[konkretni segment]

Hlavni problem:
[jedna situace, kterou zakaznik pozna]

Prvni hodnota:
[co ma uzivatel dokazat nebo ziskat behem prvniho pouziti]

Placeny nebo obchodni signal:
[objednavka / pilot / demo request / cekaci listina s jasnym follow-upem]

Nejvetsi riziko:
[technicke / obchodni / pravni / provozni]

Co nespoustime:
[veci, ktere zustavaji mimo rozsah]

Kdy launch zastavime:
[konkretni signal, napr. rozbity signup, nefunkcni billing, nejasny datovy tok]
```

Posledni dva radky jsou nejdulezitejsi. Launch bez rozsahu se snadno nafoukne. Launch bez stop pravidla se snadno premeni v improvizovanou produkci.

**Priklad stop pravidla:**

"Nespoustime placene kampane, dokud demo formular nema potvrzeny zapis leadu, odeslani emailu, chybovou hlasku, privacy mikrotext a monitoring selhani."

Tohle je rozumnejsi nez "snad si nekdo vsimne, kdyz to nepujde".

### 11.2 Obsah, SEO a duvera

Verejny web musi pred launchem odpovedet na tri otazky: co nabizis, proc tomu verit a co se stane po dalsim kroku. SEO technika je dulezita, ale nema zachranovat nejasnou nabidku. Google SEO Starter Guide resi uzitecny obsah, strukturu, titulky a dostupnost: https://developers.google.com/search/docs/fundamentals/seo-starter-guide. Prakticky: stranka musi byt citelna pro lidi i stroje.

Kontrola verejnych stranek:

- Homepage nebo hlavni landing page rika do par sekund, pro koho produkt je.
- Hlavni CTA popisuje vysledek, ne jen technickou akci.
- Pricing nebo pilotni podminky nemaji schovane zavazky.
- Ochrana osobnich udaju a cookies jsou dostupne z paticky.
- RSS nebo primarni odkazy jsou dostupne bez social share skriptu.
- Kazda dulezita stranka ma `title`, meta description a kanonickou URL.
- `sitemap.xml` obsahuje verejne dulezite URL.
- `robots.txt` neblokuje omylem dulezite stranky.
- Strukturovana data odpovidaji tomu, co je na strance videt.
- Vsechny fakticke, pravni nebo aktualni tvrzeni maji zdroj.

**Priklad predlaunch chyby:**

Landing page tvrdi "EU provoz", ale nikde nerika, co to znamena. Lepsi je napsat: "Aplikace, databaze a zalohy provozujeme v EU regionu; marketingove mereni nepouziva reklamni profily." Pokud to zatim neni pravda pro vsechny vrstvy, napis presnejsi vetu. Duvera neroste z maximalniho sloganu, ale z presnosti.

### 11.3 Formulare, souhlasy a datove toky

Kazdy formular je maly datovy kontrakt. Pred launchem si projdi vsechny vstupy: kontakt, demo, registrace, newsletter, support, objednavka, export, mazani. U kazdeho pole musi byt jasne, proc existuje.

Kontrolni tabulka:

| Formular | Data | Ucel | Kam se posila | Retence | Co se stane po odeslani |
| --- | --- | --- | --- | --- | --- |
| Demo request | email, zprava | odpoved a obchodni follow-up | mailbox/CRM | dle obchodniho procesu | potvrzeni a odpoved |
| Registrace | email, heslo/magic link | vytvoreni uctu | aplikacni DB | po dobu uctu | vstup do onboardingu |
| Support | email, popis problemu | pomoc zakaznikovi | helpdesk/email | dle SLA | ticket nebo odpoved |
| Export dat | account ID, typ exportu | splneni pozadavku | aplikace/storage | kratka technicka retence | odkaz nebo potvrzeni |

U cookies a podobnych identifikatoru plati prakticky test: spousti se neco, co neni nezbytne pro fungovani webu? Pokud ano, potrebujes resit souhlas a srozumitelne volby. UOOU ma ceske Q&A ke cookies zde: https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies. EDPB pokyny k souhlasu zduraznuji, ze souhlas ma byt svobodny, konkretni, informovany a jednoznacny: https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_en.

Minimalni launch pravidla:

- Netechnicke cookies ani marketingove skripty se nespousti pred souhlasem.
- Odmitnuti souhlasu je stejne dostupne jako prijeti.
- Formular nerika "souhlas se zpracovanim", kdyz realne staci informovat o ucelu.
- Marketingovy souhlas neni predzaskrtnuty ani svazany s objednavkou, pokud neni nutny.
- Obsah zpravy z formulare se neposila do analytiky.
- Chybove logy neobsahuji cele request body.
- Potvrzovaci email nerika vic, nez je potreba.

**Codyho komentar:** Nejrychlejsi privacy audit je otazka "Co se stane s timhle polem po odeslani?" Pokud odpoved zni "to nevim", pole nema na launchi co delat. Brutalni? Mozna. Ucinne? Bohuzel ano.

### 11.4 Technicky smoke test

Smoke test neni kompletni test suite. Je to kratka kontrola, ze hlavni slib produktu nezakopne o prvni klik. U verejneho launchu ho udelej tesne pred spustenim a znovu po deployi.

Minimalni smoke test pro SaaS:

1. Otevri homepage a hlavni landing page na desktopu i mobilu.
2. Klikni hlavni CTA.
3. Odesli formular s validnimi daty.
4. Odesli formular s chybou a over srozumitelnou hlasku.
5. Projdi registraci nebo demo request od zacatku do potvrzeni.
6. Over transakcni email.
7. Over pricing CTA nebo pilotni objednavkovy tok.
8. Over, ze analytics meri jen planovane eventy.
9. Over, ze bez souhlasu nebezi netechnicke skripty.
10. Over 404, 500 chybovou stranku a zakladni monitoring.

Bezpecnostni minimum pred launchem:

- HTTPS funguje na vsech verejnych URL.
- HSTS je zapnute az po overeni cele domeny.
- Admin neni verejne dohledatelny bez autentizace.
- Hesla, tokeny a API klice nejsou v repozitari.
- Chybove hlasky neprozrazuji citlive detaily.
- Uploady maji limity, pokud existuji.
- Zakladni HTTP hlavicky jsou nastaveny podle rizika.

OWASP HTTP Headers Cheat Sheet je prakticky zdroj pro hlavicky: https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html. U autentizace se drz overenych doporuceni z OWASP Authentication Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html.

### 11.5 Provoz: monitoring, rollback a prvni den

Launch day neni cas na objevovani, kde se cte log a kdo umi vratit deploy. Predem si priprav tri veci: monitoring, rollback a komunikacni pravidlo.

Minimalni provozni priprava:

- Uptime monitoring sleduje hlavni web, aplikaci a kriticky formular.
- Error monitoring nebo logy ukazuji nove chyby po deployi.
- Alerty chodi cloveku, ktery muze jednat.
- Rollback postup je napsany a vyzkouseny.
- Databazove migrace maji plan navratu nebo aspon bezpecny forward fix.
- Zaloha pred vetsi zmenou existuje a je dohledatelna.
- Status nebo zakaznicka komunikace ma pripravenou sablonu.
- Prvni den ma jeden vlastnik launch provozu.

Prvni den sleduj malo veci:

| Signal | Proc |
| --- | --- |
| Dostupnost webu a aplikace | Zakladni duvera. |
| Odeslani formulare nebo signup | Hlavni obchodni tok. |
| Transakcni emaily | Bez nich casto vypada produkt rozbite. |
| Chyby po deployi | Rychle zachyceni regresi. |
| Kvalita prvnich leadu | Validace nabidky, ne jen navstevnosti. |
| Dotazy na data, cenu a zruseni | Co neni dost jasne na webu. |

Prvni den nemer padesat grafu. Dej si hodinu po spusteni, konec dne a dalsi rano. Zapis, co se stalo, co se opravilo a co se presune do dalsi iterace. Pokud nic nespadlo, gratuluju potichu a podivej se na kvalitu leadu. Ticho v monitoringu neni strategie, jen prijemna chvile.

### 11.6 Launch postmortem bez dramatu

I uspesny launch si zaslouzi postmortem. Ne proto, aby se nasly chyby za kazdou cenu, ale proto, aby se z reality stala dalsi verze systemu.

Sablona po 24 az 72 hodinach:

```text
Co jsme spustili:

Co fungovalo:

Co nefungovalo:

Co nas prekvapilo:

Jake dotazy prisly od lidi:

Jake privacy/provozni otazky se objevily:

Co opravime hned:

Co pridame do dalsi iterace:

Co uz priste neudelame:
```

U privacy-first produktu sleduj hlavne dotazy na data. Pokud se vice lidi pta na hosting, DPA, export, mazani nebo analytiku, neni to otrava. Je to copywritingovy material a produktovy signal. Pridat jasnou trust sekci muze byt lepsi nez pridat dalsi funkci.

### Checklist: verejne spusteni

- [ ] Launch ma jasne napsany segment, problem, prvni hodnotu a stop pravidla.
- [ ] Homepage nebo landing page vysvetli nabidku bez interniho zargonu.
- [ ] Hlavni CTA vede k funkcni dalsi akci.
- [ ] Pricing, pilot nebo demo proces jsou ferove popsane.
- [ ] Privacy dokumenty, cookies a podminky jsou dostupne a odpovidaji realnemu provozu.
- [ ] Vsechny formulare maji popsany ucel, cilovy system, retenci a potvrzeni.
- [ ] Netechnicke cookies a marketingove skripty respektuji souhlas.
- [ ] Web ma title, meta description, canonical, sitemap a robots kontrolu.
- [ ] RSS nebo primarni odber existuje, pokud publikujes obsah.
- [ ] Smoke test pro hlavni tok prosel na desktopu i mobilu.
- [ ] Transakcni emaily dorazi a maji spravny obsah.
- [ ] HTTPS, admin pristup, secret hodnoty a zakladni hlavicky jsou zkontrolovane.
- [ ] Monitoring sleduje dostupnost, chyby a kriticke formulare.
- [ ] Rollback postup je znamy a pred vetsim releasem existuje zaloha.
- [ ] Prvni den ma vlastnika provozu a jasny rytmus kontroly.
- [ ] Po launchi je naplanovane kratke postmortem.

---

## 12. Prilohy: sablony, metriky, auditni otazky

Prilohy nejsou odkladiste vseho, co se neveslo do kapitol. Jsou to pracovni nastroje, ktere se daji zkopirovat do realneho projektu, upravit a pouzivat. U maleho SaaS tymu maji sablony jednu velkou vyhodu: snizuji pocet rozhodnuti, ktera se musi vymyslet pokazde znovu.

Ber je jako vychozi stav, ne jako vytesane prikazani. Pokud sablona neodpovida realite produktu, uprav ji. Pokud se opakuje stejna otazka od zakazniku, pridej ji. Pokud nektera metrika nevede k rozhodnuti, smaz ji. Nejvetsi hrich sablony je predstirat poradek, zatimco tym dal improvizuje.

**Codyho komentar:** Dobra sablona je nudna tak akorat. Kdyz je prilis volna, nepomaha. Kdyz je prilis slozita, nikdo ji nepouzije. Ideal je dokument, ktery prezijes otevrit i v patek odpoledne.

### 12.1 Jednostrankovy product brief

Pouzij ho pred stavbou landing page, MVP, pilotu nebo vetsi funkce. Cilem je rychle zjistit, jestli vsichni mluvi o stejnem produktu.

```text
Nazev:

Pro koho to je:
[konkretni segment, ne "male firmy"]

Problem:
[jedna situace ze zivota zakaznika]

Proc to boli:
[cas / penize / riziko / ztracena prilezitost / duvera]

Stavajici workaround:
[jak to resi dnes]

Slib hodnoty:
[co bude po pouziti lepsi]

Prvni hodnotovy moment:
[co musi uzivatel udelat nebo videt]

Mimo rozsah:
[co zamerne nestavime]

Privacy-first dopad:
[jaka data sbirame, proc, kde a jak dlouho]

Dukaz, ze to funguje:
[platba / pilot / aktivace / rozhovor / metrika]
```

Kontrola kvality:

- Segment se da najit a oslovit.
- Problem popisuje chovani, ne kategorii softwaru.
- Slib hodnoty jde overit v kratkem case.
- Mimo rozsah je konkretni, ne diplomaticke "zatim".
- Datovy dopad je popsany lidsky, ne jen odkazem na pravni text.

### 12.2 Sablona privacy-first landing page

Tahle sablona pomaha napsat stranku, ktera prodava jasne, ale bez manipulace a zbytecneho sledovani.

```text
H1:
[kategorie nebo vysledek pro konkretni segment]

Podnadpis:
[problem + vysledek + dulezity privacy/provozni signal]

Primarni CTA:
[sloveso + vysledek, napr. "Domluvit 20min audit"]

Dukaz duvery:
[reference / screenshot / proces / zakladatelska expertiza / anonymizovany vysledek]

Sekce Problem:
[3 az 5 situaci, ktere zakaznik pozna]

Sekce Reseni:
[jak produkt meni workflow, ne jen seznam funkci]

Sekce Jak to funguje:
[3 kroky od prvni akce k vysledku]

Sekce Data a provoz:
[kde jsou data, co se nesbira, export, mazani, dodavatele]

Cena / pilot / dalsi krok:
[co se stane po kliknuti, zavazek, DPH kontext, zruseni]

FAQ:
[nakupni, technicke, privacy a provozni otazky]
```

Zakazane zkratky:

- Falesna urgentnost a resetujici se odpocet.
- Predzaskrtnuty marketingovy souhlas.
- Povinne pole bez jasne prace.
- Social share skripty misto primarni URL.
- Obecne "data jsou v bezpeci" bez popisu, co to znamena.

### 12.3 Merici plan pro web a SaaS

Merici plan se pise pred implementaci eventu. Pokud nejde doplnit sloupec "Akce", event nema pravo na existenci.

| Rozhodnuti | Signal | Data | Akce | Vlastnik |
| --- | --- | --- | --- | --- |
| Funguje nabidka? | CTA klik a demo request | URL, referer group, CTA typ | Prepsat headline nebo nabidku | marketing / founder |
| Brzdi formular? | Zacaty formular bez odeslani | formular, typ chyby, agregace | Odebrat pole nebo zlepsit mikrotext | produkt |
| Aktivuje se uzivatel? | Prvni hodnotova akce | account ID, faze onboardingu | Upravit onboarding | produkt |
| Ma kampan kvalitu? | Lead se posune do obchodniho rozhovoru | source group, campaign, stav leadu | Presunout distribuci | obchod |
| Vznika privacy obava? | Dotazy na hosting, DPA, export, mazani | typ dotazu, zdroj | Doplnit trust sekci nebo FAQ | founder / legal |

Minimalni pravidla:

- Do analytiky neposilej obsah zprav, dokumenty, emaily ani telefony.
- U webu preferuj agregovane mereni bez cross-site profilu.
- Produktove eventy vaz na hodnotu, ne na kazde kliknuti.
- Surova data maji retenci, agregace maji ucel.
- Auditni log oddel od produktove analytiky.

### 12.4 Vendor review pro novy nastroj

Vypln pred tim, nez novy nastroj dostane produkcni nebo zakaznicka data.

```text
Dodavatel:

Ucel:

Proc nestaci stavajici nastroj nebo jednodussi proces:

Data, ktera tam posilame:

Obsahuje osobni udaje:
[ano/ne + jake]

Obsahuje zakaznicka nebo interni citliva data:
[ano/ne + jake]

Region ulozeni a zpracovani:

Subdodavatele:

DPA / smluvni opora:

Pristupy v tymu:

Retence:

Export:

Mazani:

Monitoring selhani:

Plan B pri vypadku nebo odchodu:

Vlastnik:
```

Rozhodnuti:

- Pokud nastroj nema jasny ucel, nezavadej ho.
- Pokud neni jasne, kde jsou data, nepovazuj ho za vyreseny.
- Pokud nejde exportovat, nepouzivej ho jako system pravdy.
- Pokud nema rozumne role, nedavej do nej citliva data.
- Pokud posila data mimo EU, zapis duvod a riziko.

### 12.5 Incident karta

Incident karta ma byt kratka. Pri incidentu nikdo nechce lovit spravnou kapitolu v epickem dokumentu.

```text
Nazev incidentu:

Uroven:
[P1/P2/P3]

Detekce:
[kdy a jak jsme to zjistili]

Dopad:
[uzivatele / data / platby / web / interni provoz]

Co vime:

Co zatim nevime:

Prvni mitigace:

Vlastnik incidentu:

Technicky vlastnik:

Komunikace:
[interni / zakaznici / dodavatel / urad / verejny status]

Data:
[jsou dotceny osobni udaje? jake? kolik subjektu?]

Dalsi update:
[cas]
```

Po obnoveni dopln:

```text
Pricina:

Co obnovilo sluzbu:

Co zmensilo dopad:

Co chybelo:

Preventivni opatreni:

Vlastnik opatreni:

Termin:
```

### 12.6 Predlaunch audit v 30 minutach

Kdyz je malo casu, projdi aspon tento rychly audit. Neni to nahrada za plnou kontrolu, ale zachyti nejcastejsi prusvihy.

| Oblast | Otazka | Hotovo |
| --- | --- | --- |
| Nabidka | Je do 5 sekund jasne, pro koho produkt je? | [ ] |
| CTA | Je dalsi krok konkretni a funkcni? | [ ] |
| Formular | Ma kazde pole jasny ucel? | [ ] |
| Privacy | Je videt, co se deje s daty po odeslani? | [ ] |
| Cookies | Netechnicke skripty cekaji na souhlas? | [ ] |
| SEO | Existuje title, description, canonical, sitemap a robots? | [ ] |
| Mobil | Hlavni tok funguje na mobilu? | [ ] |
| Email | Dorazi transakcni email? | [ ] |
| Monitoring | Nekdo se dozvi o rozbitem formulari nebo webu? | [ ] |
| Rollback | Je jasne, jak vratit posledni dobrou verzi? | [ ] |
| Zalohy | Existuje aktualni zaloha a nekdo vi, kde je? | [ ] |
| Support | Je pripravena odpoved na prvni dotazy o cene, datech a zruseni? | [ ] |

Rychle stop pravidlo:

```text
Launch zastavime, pokud nefunguje hlavni CTA, formular, registrace, billing, transakcni email, privacy souhlas nebo rollback.
```

### 12.7 Tydni review po launchi

Prvni tydny po launchi rozhoduj podle malo signalu a hodne reality. Tuhle sablonu vypln kazdy patek.

```text
Tyden:

Hlavni cil tydne:

Co jsme vydali:

Kolik relevantnich lidi prislo:

Kolik lidi udelalo hlavni dalsi krok:

Jake byly nejcastejsi dotazy:

Jake byly nejcastejsi blokace:

Co jsme se naucili o problemu:

Co jsme se naucili o cene:

Co jsme se naucili o datech a duvere:

Jedno rozhodnuti na pristi tyden:

Co prestaneme delat:
```

Dobry review zapis neni dlouhy. Ma byt pravdivy. Kdyz cisla nic nerikaji, napis rozhovory. Kdyz rozhovory chybi, napis, koho oslovis. Kdyz se kazdy tyden resi stejna blokace, neni to nahoda. Je to produktova zprava s blikajicim majakem.

### Zaverecny checklist: provozovatelny SaaS bez datove kocoviny

- [ ] Produkt ma konkretni segment, problem a prvni hodnotovy moment.
- [ ] Landing page rika pravdu jednoduse a bez manipulativnich vzoru.
- [ ] Formulare sbiraji jen data, ktera maji jasnou praci.
- [ ] Privacy-first hodnota je viditelna v produktu, ceniku i provozu.
- [ ] Mereni zacina rozhodnutim, ne touhou mit vic grafu.
- [ ] Web publikuje na vlastni domene, se stabilnimi URL a RSS/Atom feedem.
- [ ] Architektura je srozumitelna malemu tymu a ma jasnou hranici dat.
- [ ] Dodavatele jsou zkontrolovani podle dat, regionu, pristupu, exportu a mazani.
- [ ] Zalohy se nejen vytvareji, ale i testuji.
- [ ] Incidenty maji jednoduchy runbook a vlastnika.
- [ ] Zakaznik umi prijit, pochopit hodnotu, zaplatit, exportovat data a odejit bez labyrintu.
- [ ] Tym pravidelne maze praci, metriky, nastroje a data, ktere uz nemaji ucel.

Tohle je prakticky smysl celeho e-booku: stavet produkty, ktere jsou rychle, obchodne pouzitelne a provozne dospele, aniz by po ceste sbiraly vsechna data sveta. Mene kouzel. Vice kontroly. A kdyz uz ma byt chaos, at je aspon v backlogu, ne v osobnich udajich zakazniku.

---

## Zdroje

- GDPR, Regulation (EU) 2016/679, EUR-Lex: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng
- EDPB Guidelines 9/2022 on personal data breach notification under GDPR: https://www.edpb.europa.eu/documents/guideline/guidelines-92022-on-personal-data-breach-notification-under-gdpr_en
- Directive (EU) 2022/2555, NIS2 Directive, EUR-Lex: https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng
- ENISA, Cybersecurity guide for SMEs - 12 steps to securing your business: https://www.enisa.europa.eu/publications/cybersecurity-guide-for-smes
- EDPB Guidelines 05/2020 on consent under Regulation 2016/679: https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_en
- EDPB Guidelines 03/2022 on deceptive design patterns in social media platform interfaces: https://www.edpb.europa.eu/documents/guideline/guidelines-032022-on-deceptive-design-patterns-in-social-media-platform_en
- European Commission, Unfair commercial practices directive: https://commission.europa.eu/law/law-topic/consumer-protection-law/unfair-commercial-practices-and-price-indication/unfair-commercial-practices-directive_en
- European Commission, Price Indication Directive: https://commission.europa.eu/law/law-topic/consumer-protection-law/unfair-commercial-practices-and-price-indication/price-indication-directive_en
- European Commission, Consumer Rights Directive: https://commission.europa.eu/law/law-topic/consumer-protection-law/consumer-contract-law/consumer-rights-directive_en
- European Commission, VAT One Stop Shop: https://vat-one-stop-shop.ec.europa.eu/index_en
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
- OWASP Authentication Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html
- OWASP Forgot Password Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html
- NIST SP 800-63-4, Digital Identity Guidelines: https://pages.nist.gov/800-63-4/
- NIST SP 800-63B-4, Authentication and Authenticator Management: https://csrc.nist.gov/pubs/sp/800/63/b/4/final
- EDPB, Guidelines on transparency under Regulation 2016/679: https://www.edpb.europa.eu/documents/guideline/article-29-working-party-guidelines-on-transparency-under-regulation-2016679_en
- W3C, Web Content Accessibility Guidelines 2.2: https://www.w3.org/TR/WCAG22/
- Google Search Central, SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central, How to specify a canonical URL: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Google Search Central, Build and submit a sitemap: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- Google Search Central, Introduction to structured data markup: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- RFC 9309, Robots Exclusion Protocol: https://www.rfc-editor.org/rfc/rfc9309
- RSS Advisory Board, RSS 2.0 Specification: https://www.rssboard.org/rss-specification
- RFC 4287, The Atom Syndication Format: https://www.rfc-editor.org/rfc/rfc4287
- Schema.org, BlogPosting: https://schema.org/BlogPosting
- CNIL, Use analytics on your websites and applications: https://www.cnil.fr/en/sheet-ndeg16-use-analytics-your-websites-and-applications
- Umami, FAQ: https://umami.is/docs/faq
- Plausible Analytics, Data Policy: https://plausible.io/data-policy
- Matomo, Use Matomo without consent or cookie banner: https://matomo.org/faq/new-to-piwik/how-do-i-use-matomo-analytics-without-consent-or-cookie-banner/

---

## Pracovni log

- 2026-07-30: Zalozena struktura e-booku, doplnen uvod, osnova a hotova prvni kapitola o privacy-first zakladu SaaS webu vcetne praktickych prikladu, checklistu a zdroju.
- 2026-07-30: Dopsana druha kapitola o produktove strategii od vyberu problemu pres rozhovory a placene piloty po prvni mesic rozhodovaciho rytmu.
- 2026-07-30: Dopsana treti kapitola o webove architekture pro male tymy vcetne vykonnostniho rozpoctu, cache pravidel, prace s prostredimi, zavislostmi a checklistu pred prvnim SaaS releasem.
- 2026-07-30: Dopsana ctvrta kapitola o landing page, ktera prodava bez manipulace, vcetne CTA, formularu, ferovych dukazu, pricingu, mereni a checklistu.
- 2026-07-30: Dopsana pata kapitola o obsahovem marketingu, SEO a distribuci pres primarni kanaly vcetne RSS/Atom, technickeho SEO, redakcniho rytmu, privacy-first mereni a checklistu.
- 2026-07-30: Dopsana sesta kapitola o analytice bez zbytecneho sledovani vcetne mericiho planu, katalogu eventu, atribuce, retence dat a checklistu privacy-first analytiky.
- 2026-07-30: Dopsana sedma kapitola o onboardingu, aktivaci a retenci v SaaS vcetne aktivacniho momentu, registrace, bezpecneho prihlaseni, emailu, offboardingu a checklistu.
- 2026-07-30: Dopsana osma kapitola o cenotvorbe a baliccich vcetne hodnotove metriky, trialu/pilotu, slev, billing reality, privacy-first ceniku a checklistu.
- 2026-07-31: Dopsana devata kapitola o produktivite zakladatele vcetne jedne fronty prace, tydenniho rytmu, hluboke prace, inboxu, automatizaci, osobniho provozniho manualu a checklistu.
- 2026-07-31: Dopsana desata kapitola o evropskem provozu vcetne hostingu, datove mapy, zaloh, incident runbooku, vendor review, provozniho rytmu a checklistu.
- 2026-07-31: Dopsana jedenacta kapitola s checklistem pred verejnym spustenim vcetne launch gate, SEO a duvery, formularu, smoke testu, provozni pripravy a postmortem sablony.
- 2026-07-31: Dopsana dvanacta kapitola s praktickymi prilohami: product brief, landing page sablona, merici plan, vendor review, incident karta, predlaunch audit a zaverecny checklist.
