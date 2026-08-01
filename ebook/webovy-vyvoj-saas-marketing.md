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

## 30denni akcni plan po docteni

E-book bez dalsi akce je jen hezky usporadany pocit viny. Tady je prakticky plan na prvni mesic, ktery malemu tymu pomuze prevest principy do produktu, webu a provozu. Nepocita s velkym tymem ani s dokonalym rozpoctem. Pocita s tim, ze kazdy tyden ma vzniknout jeden hmatatelny vystup.

### Tyden 1: Zostri nabidku a hranici dat

Cil tydne: vedet, komu produkt slouzi, co presne slibuje a jaka data k tomu opravdu potrebuje.

Vystupy:

- jedna veta nabidky podle segmentu, problemu, vysledku a kompromisu,
- seznam 10 az 20 lidi nebo firem pro rozhovory,
- mapa dat pro hlavni tok od landing page po prvni hodnotu,
- prvni verze privacy-first slibu pro web.

Pracovni postup:

1. Vyber jeden segment, ne trh. "Mala B2B studia" je lepsi nez "firmy".
2. Popis jednu situaci, ve ktere problem boli.
3. Sepis vsechna data, ktera v toku sbiras.
4. U kazdeho pole napis ucel, vlastnika, uloziste, retenci a duvod.
5. Skrtni vse, co neumis obhajit jednou vetou.

Mini checklist:

- [ ] Nabidka se da precist nahlas bez firemni mlhy.
- [ ] Hlavni formular ma jen pole potrebna pro dalsi krok.
- [ ] Privacy-first hodnota je napsana jako produktovy benefit.
- [ ] Vim, ktera data jsou technicka, obchodni, produktova a auditni.
- [ ] Mam plan, kdy nepotrebna pilotni data smazu.

**Codyho komentar:** Prvni tyden neni o tom, aby produkt vypadal vetsi. Je o tom, aby prestal predstirat, ze slouzi vsem. Vsem neslouzi ani kava. A ta ma vyrazne lepsi distribuci nez vetsina SaaS.

### Tyden 2: Postav nebo oprav hlavni cestu

Cil tydne: dostat cloveka od prvni navstevy k dalsimu kroku bez zbytecneho treneni.

Vystupy:

- upravena prvni obrazovka landing page,
- jedno hlavni CTA,
- zjednoduseny formular nebo registrace,
- zakladni technicke SEO,
- smoke test hlavniho toku.

Pracovni postup:

1. Prepis prvni obrazovku tak, aby rikala komu pomahas, s cim a co se stane po kliknuti.
2. Zkontroluj title, meta description, canonical, sitemap, robots a RSS/Atom odkaz.
3. Projdi formular pole po poli a kazdemu dej praci.
4. Napis potvrzeni po odeslani: co se stalo, kdy prijde odpoved a co uzivatel muze cekat.
5. Otestuj tok na mobilu, desktopu a pomalem pripojeni.

Mini checklist:

- [ ] Do 5 sekund je jasne, pro koho stranka je.
- [ ] CTA neni "Odeslat", ale konkretni dalsi krok.
- [ ] Chybove hlasky formulare rikaji, co opravit.
- [ ] Stranka nepotrebuje socialni embed ani reklamni skript k tomu, aby fungovala.
- [ ] Hlavni konverzni tok nekdo rucne prosel od zacatku do konce.

### Tyden 3: Nastav mereni, ktere vede k rozhodnuti

Cil tydne: merit malo veci, ale tak, aby podle nich slo neco zmenit.

Vystupy:

- merici plan na jednu stranku,
- katalog prvnich eventu,
- pravidla pro UTM,
- rozhodovaci veta pro landing page, onboarding nebo obsah,
- zakladni retence analytickych dat.

Pracovni postup:

1. Sepis tri rozhodnuti, ktera chces v pristich 30 dnech udelat.
2. Ke kazdemu rozhodnuti pridej signal a nejmensi data.
3. Oddel webovou analytiku, produktove eventy a auditni log.
4. Zakaz osobni udaje v UTM parametrech a analytickych eventech.
5. Nastav kratkou retenci pro surova data a delsi zivot jen pro agregace s jasnym ucelem.

Mini checklist:

- [ ] Kazdy event ma popsany ucel.
- [ ] Do analytiky neposilam obsah zprav, dokumentu ani plne kontakty.
- [ ] Kampane vyhodnocuji podle kvality leadu, ne jen navstev.
- [ ] Mam jasne pojmenovane zdroje a kampane.
- [ ] Vim, kdo ma k analytice pristup a proc.

### Tyden 4: Zpevni provoz a priprav obchodni realitu

Cil tydne: aby produkt nespadl na prvni zakaznicke otazce o datech, cene, exportu nebo incidentu.

Vystupy:

- kratky provozni runbook,
- vendor review pro hlavni dodavatele,
- kontrola zaloh a obnovy,
- cenik nebo pilotni nabidka bez schovanych podminek,
- offboarding mini-proces.

Pracovni postup:

1. Zapis, kde produkt bezi, kde jsou data, kdo ma pristup a jak se dela rollback.
2. U kazdeho dodavatele over region, DPA, export, mazani, pristupy a plan B.
3. Otestuj obnovu aspon jednoho typu zalohy.
4. U ceniku vysvetli, co je v cene, co se stane po kliknuti a jak lze skoncit.
5. Sepis, co se smaze pri odchodu zakaznika, co zustava kvuli ucetnictvi nebo pravnim povinnostem a jak dlouho.

Mini checklist:

- [ ] Nekdo umi popsat deploy, rollback a obnovu bez loveni v historii chatu.
- [ ] Dodavatele maji jasny ucel a datovou hranici.
- [ ] Cenik neresi soukromi jako upsell.
- [ ] Export a zruseni uctu nejsou schovane za support labyrintem.
- [ ] Incident karta ma vlastnika, uroven dopadu a dalsi update.

### Patecni review: jedna stranka pravdy

Na konci kazdeho tydne vypln stejnou sablonu. Nemen ji kazdy patek, jinak budes optimalizovat formular misto firmy.

```text
Tyden:

Hlavni predpoklad:

Co jsme zmenili:

Co jsme zmerili nebo slyseli:

Co nas prekvapilo:

Co zrusime:

Co zlepsime:

Jedno rozhodnuti na dalsi tyden:

Data, ktera muzeme smazat:
```

Kdyz po 30 dnech nemas vic jasno v segmentu, nabidce, datech, cene a hlavnim toku, nebyl problem v tom, ze plan byl maly. Problem byl v tom, ze se prace rozutekla. Zmensi rozsah a zopakuj mesic jen pro jednu cast produktu.

---

## 90min audit existujiciho SaaS

Ne vzdy zacinas na zelene louce. Casto uz existuje web, aplikace, analytika, par dodavatelu, nejake kampane, tri generace formularu a jeden soubor s nazvem `final-final-pricing-v3`. V takove situaci nepomuze dalsi velka strategie. Pomuze rychly audit, ktery najde par veci s nejvetsim dopadem.

Cilem 90min auditu neni vyresit vsechno. Cilem je rozhodnout, co opravit jako prvni, co zamerne nechat byt a kde je privacy-first riziko vetsi nez uzitek. Audit delame s jednim pravidlem: kazdy nalez musi mit dopad, vlastnika a dalsi krok. Jinak je to jen hezky pojmenovana uzkost.

### Priprava pred auditem

Pred schuzkou si priprav jen zakladni vstupy:

- URL hlavni landing page, ceniku a registrace nebo demo formulare,
- pristup k agregovane analytice nebo aspon posledni distribucni poznamky,
- seznam hlavnich dodavatelu,
- privacy dokumenty, cookies text a obchodni podminky,
- poslednich 5 az 10 dotazu od leadu, zakazniku nebo supportu,
- aktualni hlavni obchodni cil.

Pokud neco chybi, nezastavuj audit. Chybejici dokument nebo metrika je taky nalez.

### Casovy plan auditu

| Cas | Oblast | Co hledat | Vystup |
| --- | --- | --- | --- |
| 0-10 min | Cil | Pro koho produkt je a co ma audit zlepsit. | Jedna auditni otazka. |
| 10-25 min | Nabidka | Zda prvni obrazovka rika problem, vysledek a dalsi krok. | 1-3 copy opravy. |
| 25-40 min | Hlavni tok | CTA, formular, registrace, potvrzeni, chyba. | Seznam blokaci v toku. |
| 40-55 min | Data | Co se sbira, kam se posila, co je navic. | Mala datova mapa toku. |
| 55-70 min | Mereni | Eventy, cookies, UTM, kvalita leadu. | Co merit, zrusit nebo prejmenovat. |
| 70-80 min | Provoz | Hosting, zalohy, monitoring, rollback, dodavatele. | Nejvetsi provozni riziko. |
| 80-90 min | Rozhodnuti | Co udelat prvni a co odlozit. | 3 ukoly na 7 dni. |

Auditni otazka musi byt konkretni. Ne "jak zlepsit web". Lepsi:

> "Proc z relevantni navstevnosti na landing page nevznika dost demo requestu, aniz bychom pridali invazivni tracking?"

Nebo:

> "Ktera data v prvnim trial toku sbirame bez jasneho ucelu a jak to zjednodusit do tydne?"

### Jak hodnotit nalezy

Pouzij jednoduchou matici:

| Nalez | Dopad na obchod | Dopad na duveru/data | Narocnost | Rozhodnuti |
| --- | --- | --- | --- | --- |
| Povinne telefonni cislo v demo formulari | stredni | stredni | nizka | odebrat nebo udelat volitelne |
| Nejasne "EU hosting" bez popisu | stredni | vysoka | nizka | prepsat trust mikrocopy |
| Social share skript na blogu | nizky | stredni | nizka | nahradit primym odkazem |
| Chybejici restore test | nizky dnes, vysoky pri incidentu | vysoka | stredni | naplanovat test obnovy |
| Eventy `button_click` bez katalogu | stredni | stredni | stredni | prejmenovat a omezit eventy |

Priorita neni nejhlasitejsi problem. Priorita je vec s vysokym dopadem a rozumnou opravitelnosti. Kdyz najdes deset problemu, vyber tri. Zbytek zapis do backlogu s datem, ne do hlavy.

### Rychly audit hlavniho toku

Projdi cestu jako novy clovek:

1. Otevri hlavni landing page.
2. Do peti sekund rekni, komu produkt slouzi.
3. Najdi primarni CTA.
4. Klikni na nej.
5. Vypln formular jen nejnutnejsimi daty.
6. Zkus chybu ve formulari.
7. Zkontroluj potvrzeni po odeslani.
8. Najdi, kde je popsano zpracovani dat.
9. Over, zda bez souhlasu nebezi netechnicke skripty.
10. Zapis, kde ses musel domyslet, co se stane dal.

Pri kazdem kroku si poloz dve otazky:

- Co tady clovek potrebuje vedet, aby pokracoval?
- Jaka data tu po nem chceme a proc?

**Codyho komentar:** Kdyz nejde hlavni tok projit bez vysvetlovani clenem tymu, neni to "potrebuje onboarding". Je to nejasny produktovy slib. Onboarding nema zachranovat mlhu.

### Rychly audit datove stopy

Pro jeden hlavni tok vypln:

```text
Tok:
[napr. demo request / registrace / trial aktivace]

Data, ktera uzivatel zada:

Data, ktera vytvorime automaticky:

Kam data odchazeji:

Kdo k nim ma pristup:

Co se posila do analytiky:

Co se loguje:

Kdy data mazeme nebo agregujeme:

Co muzeme smazat, omezit nebo odlozit:
```

Hledej hlavne tyto chyby:

- formular sbira vic, nez je potreba pro dalsi krok,
- analytika obsahuje volne texty, emaily nebo cele identifikatory,
- logy ukladaji cele requesty,
- UTM parametry obsahuji interni nebo osobni informace,
- data se posilaji do dodavatele bez jasneho vlastnika,
- neexistuje odpoved na export, smazani nebo ukonceni uctu.

Datova stopa nema byt dokonala za 90 minut. Ma byt viditelna. Co je videt, jde zlepsit.

### Vystup auditu

Na konci nenech jen poznamky. Vystup ma byt kratky a rozhodnutelny:

```text
Auditni otazka:

Nejdulezitejsi zjisteni:
1.
2.
3.

Co opravime do 7 dni:
1.
2.
3.

Co zatim zamerne nebudeme delat:
1.
2.

Privacy-first riziko:

Obchodni prilezitost:

Vlastnik:

Datum kontroly:
```

Dobry audit konci malym zavazkem. Napriklad:

- odebrat dve pole z demo formulare,
- prepsat privacy mikrotext pod CTA,
- zrusit jeden zbytecny skript,
- doplnit katalog peti eventu,
- naplanovat restore test,
- napsat odpoved na nejcastejsi dotaz k hostingu.

Tohle jsou male veci, ale posouvaji produkt z "nejak to funguje" do "vime, co delame". A to je v malem SaaS rozdil mezi improvizaci a provozem.

### Sedmidenni opravy po auditu

Audit bez navazujiciho tydne je jen draha poznamka. Po 90 minutach proto neotevirej novou strategickou debatu. Vyber tri opravy, dej jim vlastnika a uzavri je do sedmi dni. Idealne tak, aby se jedna tykala nabidky, jedna hlavniho toku a jedna datove nebo provozni jistoty.

Pravidlo vyberu:

| Typ opravy | Priklad | Proc ma prednost |
| --- | --- | --- |
| Nabidka | prepsat hero, CTA nebo pricing mikrocopy | muze okamzite zvednout kvalitu leadu |
| Tok | zjednodusit formular, opravit chybu, doplnit potvrzeni | odstranuje treni v hlavnim obchodnim kroku |
| Data | omezit pole, vypnout zbytecny skript, doplnit retenci | snizuje privacy riziko a zlepsuje duveru |
| Provoz | pridat monitoring formulare nebo restore test | chrani pred tichym selhanim |
| Duvera | doplnit trust FAQ, export nebo mazani dat | odpovida na nakupni blokery pred callem |

Sablona sedmidenniho planu:

```text
Tyden:

Auditni otazka:

Oprava 1:
Vlastnik:
Vystup:
Jak overime:

Oprava 2:
Vlastnik:
Vystup:
Jak overime:

Oprava 3:
Vlastnik:
Vystup:
Jak overime:

Co zamerne nechavame na pozdeji:

Kontrola za 7 dni:
```

Dobry sedmidenni plan ma byt skoro nudny. "Prepsat prvni obrazovku podle peti realnych dotazu a nasadit ji" je lepsi nez "zlepsit brand messaging". "Odebrat telefon z demo formulare a overit odeslani na mobilu" je lepsi nez "optimalizovat konverzni funnel". Mene kouzelnych slov, vice hotovych zmen.

**Priklad planu po auditu privacy-first analytiky:**

```text
Oprava 1:
Prepsat prvni obrazovku tak, aby rikala, ze produkt meri CTA, formulare a aktivaci bez reklamniho profilu.
Overeni: tri lide ze segmentu do peti sekund reknou, co produkt dela.

Oprava 2:
Zrusit pole telefon v demo formulari a pridat mikrotext o pouziti emailu.
Overeni: formular projde validnim i chybovym testem na desktopu a mobilu.

Oprava 3:
Doplnit katalog produkcnich eventu a zakazat volne texty v parametrech.
Overeni: v kodu nebo analytickem nastaveni existuje jen schvaleny seznam eventu.
```

Po sedmi dnech se neptej, jestli "jsme se posunuli". Zkontroluj vystupy. Je text nasazeny? Formular otestovany? Skript vypnuty? Katalog eventu existuje? Pokud ano, audit mel smysl. Pokud ne, pristi audit nezacinej novymi nalezy, ale otazkou, proc se neuzaviraji stare zavazky.

**Codyho komentar:** Nejvetsi nepritel auditu neni nevedomost. Je to ochota zamenit seznam problemu za pokrok. Pokrok ma commit, nasazeni, smazane pole, kratky dokument nebo aspon jasne rozhodnuti. Zbytek je jen dobre organizovana mlha.

---

## Trust page za 60 minut

Trust page je stranka, ktera odpovida na otazku: "Muzu vam sverit svuj cas, penize a data?" U maleho evropskeho SaaS nemusi byt dlouha, ale musi byt konkretni. Neni to pravni dokument, neni to marketingovy ohnostroj a neni to misto pro mlhave vety typu "bezpecnost bereme vazne". Trust page ma snizit nejistotu pred callem, pilotem, registraci nebo nakupem.

Dobry cas na prvni verzi:

- pred placenym pilotem,
- pred spustenim self-service registrace,
- kdyz se leady opakovane ptaji na hosting, DPA, export nebo mazani,
- kdyz produkt pracuje se zakaznickymi daty,
- kdyz privacy-first provoz patri mezi hlavni prodejni argumenty.

Trust page ma byt napsana tak, aby ji pochopil zakladatel, marketer, technicky buyer i pravnik pri prvnim cteni. Detailni smlouvy a interni politiky mohou byt navazane odkazy nebo dokumenty na vyzadani. Verejna stranka ma dat orientaci a pozvat k dalsimu kroku.

### Co ma trust page obsahovat

Zacni s temito bloky:

| Blok | Co rict | Proc |
| --- | --- | --- |
| Provoz | kde bezi aplikace, databaze, soubory a zalohy | zakaznik rychle zjisti datovou jurisdikci |
| Data | jaka data produkt typicky zpracovava a co zamerne nesbira | ukazuje minimalizaci dat |
| Soukromi | cookies, analytika, trackery, marketingove skripty | odpovida na obavy jeste pred formulari |
| Bezpecnost | HTTPS, pristupy, zalohy, monitoring, incident proces | dava zakladni provozni jistotu |
| Kontrola | export, mazani, offboarding, retence | ukazuje, ze zakaznik neni zamceny |
| Dodavatele | hlavni kategorie dodavatelu a regiony | pomaha pri vendor review na strane zakaznika |
| Kontakt | kam poslat DPA, security nebo privacy dotaz | zkracuje obchodni kolecko |

Nemusis odhalovat interni detaily, ktere by zhorsily bezpecnost. Nepis presne nazvy internich admin URL, strukturu infrastruktury, seznam vsech alertu ani citlive provozni postupy. Staci pravdive vysvetlit principy a hranice.

**Priklad uvodniho textu:**

```text
Cody je navrzeny pro evropske tymy, ktere chteji mit zakaznicka data pod kontrolou.
Produkt provozujeme v evropskem prostredi, verejne mereni delame bez reklamniho profilu a data sbirame jen pro jasne popsany ucel: dodani sluzby, bezpecnost, fakturaci a podporu.
```

Tohle je lepsi nez "state-of-the-art security", protoze to rika, co se realne deje. Kdyz nektery slib zatim neplati, napis presnejsi vetu. Trust page neni misto na aspiracni poezii.

### Sablona trust page

Pouzij tuto osnovu jako prvni verzi:

```text
H1:
Duvera, data a provoz

Uvod:
[jedna kratka veta, pro koho je produkt a jaky privacy-first zavazek drzi]

Kde produkt bezi:
[aplikace / databaze / soubory / zalohy / hlavni regiony]

Co zpracovavame:
[ucty, obsah, fakturacni udaje, support, produktove eventy]

Co zamerne nedelame:
[reklamni profily, cross-site tracking, zbytecne formularove polozky, social share skripty]

Analytika a cookies:
[co meri web, zda pouziva cookies, kdy je potreba souhlas, jak lze odmitnout]

Bezpecnostni zaklad:
[HTTPS, pristupy podle role, zalohy, monitoring, aktualizace, incident proces]

Export a mazani:
[jak zakaznik ziska data, co se maze, co zustava kvuli ucetnictvi nebo smlouve]

Dodavatele:
[hlavni kategorie, preferovany EU provoz, DPA, subdodavatele na vyzadani]

Kontakt:
[email pro security/privacy/DPA dotazy]
```

Pokud produkt prodava enterprise nebo verejnemu sektoru, pridej cast "Dokumenty na vyzadani": DPA, popis technickych a organizacnich opatreni, seznam subdodavatelu, zakladni datovou mapu a pripadne odpoved na bezpecnostni dotaznik. Verejne staci napsat, ze jsou dostupne pro relevantni zakazniky. Neni potreba vyvesit vsechny interni detaily na internet.

### Mikrocopy pro nejcastejsi obavy

U trust page nepomaha pravnicky ton. Pomaha kratka veta u konkretni obavy.

| Obava zakaznika | Lepsi odpoved |
| --- | --- |
| "Kde jsou data?" | "Aplikacni data a zalohy drzime v evropskem provozu. Pokud nektera integrace pouziva jiny region, uvadime ji v dodavatelskem prehledu." |
| "Pouzivate reklamni pixely?" | "V zakladu nemerime navstevniky pres reklamni profil ani cross-site tracking. Marketingove skripty nepoustime bez odpovidajiciho souhlasu." |
| "Co kdyz odejdeme?" | "Pred ukoncenim umozname export relevantnich dat. Po ukonceni mazeme nebo agregujeme data podle smlouvy, provoznich a ucetnich povinnosti." |
| "Kdo ma pristup?" | "Pristupy omezujeme podle role a potreby. Produkcni pristupy pravidelne kontrolujeme." |
| "Co se stane pri incidentu?" | "Incidenty tridime podle dopadu, nejdrive zastavujeme skodu a u osobnich udaju posuzujeme oznamovaci povinnosti podle GDPR." |

U GDPR a transparentnosti se drz zdroju, ktere uz jsou v knize: GDPR clanky o principech, privacy by design a breach notification, EDPB pokyny k transparentnosti a souhlasu, pripadne ceske UOOU Q&A ke cookies. Trust page nemusi citovat kazdou vetu, ale tvrzeni musi odpovidat realnemu provozu a pravnimu zakladu.

### 60min postup

Rozdel hodinu takhle:

| Cas | Ukol | Vystup |
| --- | --- | --- |
| 0-10 min | Sepsat tri nejcastejsi duverove otazky z prodeje nebo supportu | kratky seznam obav |
| 10-25 min | Vyplnit datovou cast: co sbirame, kde to je, co nesbirame | hruba data mapa pro stranku |
| 25-40 min | Napsat prvni verzi bloky provoz, analytika, bezpecnost, export | text stranky |
| 40-50 min | Zkontrolovat, zda kazdy slib je pravdivy a overitelny | smazane nebo zpresnene vety |
| 50-60 min | Pridat CTA pro DPA/security dotaz a odkaz z paticky nebo ceniku | publikovatelna verze |

Nejdulezitejsi kontrola zni: "Kdyby se zakaznik zeptal na dukaz, dokazeme ho dodat?" Pokud ne, veta se prepisuje. Napriklad "data nikdy neopousti EU" je silny slib. Pokud pouzivas dodavatele mimo EU pro supportni telemetry, billing metadata nebo emaily, veta je nejspis nepravdiva. Lepsi je napsat presne, ktere datove vrstvy jsou v EU a ktere dodavatele maji zvlastni podminky.

### Checklist: trust page

- [ ] Stranka jasne rika, pro koho je produkt a proc je privacy-first relevantni.
- [ ] Je popsane, kde bezi aplikace, databaze, soubory, logy a zalohy.
- [ ] Je vysvetlene, jaka data se sbiraji a co se zamerne nesbira.
- [ ] Analytika, cookies a marketingove skripty jsou popsane bez mlzeni.
- [ ] Bezpecnostni cast obsahuje konkretni opatreni, ne jen obecne sliby.
- [ ] Export, mazani, ukonceni uctu a retence maji lidske vysvetleni.
- [ ] Dodavatele jsou popsani aspon podle kategorii a regionu.
- [ ] Existuje kontakt pro privacy, DPA nebo security dotazy.
- [ ] Zadny verejny detail zbytecne nezvysuje bezpecnostni riziko.
- [ ] Kazdy slib na strance odpovida tomu, co produkt opravdu dela.

**Codyho komentar:** Trust page neni stranka pro compliance vitrinu. Je to obchodni zkratka k duvere. Kdyz ji napises dobre, setri call, snizuje nejistotu a nuti tym uklidit vlastni datove sliby. Coz je zdrave, i kdyz to obcas pichne do ega.

---

## Mesicni privacy-first provozni audit

Jednou za mesic si maly SaaS tym zaslouzi kratkou kontrolu reality. Ne velky audit s tabulkou, ze ktere se potichu odstehuje radost ze zivota. Spis 90 minut, kdy se projde produkt, data, dodavatele, monitoring, obsah a obchodni sliby. Cilem neni najit vinu. Cilem je zachytit male odchylky driv, nez se z nich stanou drahe problemy.

Mesicni audit je nejuzitecnejsi po launchi, kdy produkt zije a zacina nabirat vyjimky: jeden novy formular, jeden novy supportni nastroj, jedna docasna tabulka, jeden "rychly" export pro obchod. Kazda vec sama o sobe vypada nevinne. Dohromady ale umi posunout produkt od privacy-first provozu k datovemu skladisti s hezkou patickou.

Pravidlo: audit ma koncit tremi vystupy:

- co je v poradku,
- co se opravuje tento mesic,
- co se vedome odklada a proc.

Bez tretiho bodu se audit zmeni v moralni cviceni. Bez druheho bodu v divadlo. Bez prvniho bodu v depresi s odrazkami.

### 1. Priprav vstupy za poslednich 30 dni

Pred auditem si priprav minimum kontextu:

- posledni produkcni releasy,
- nove nebo zmenene formulare,
- nove integrace a dodavatele,
- nejcastejsi support dotazy,
- chyby z monitoringu a incidenty,
- zmeny v ceniku, obchodnich slibech nebo trust page,
- exporty dat, mazani uctu a privacy/security dotazy,
- nejnavstevovanejsi obsah a stranky s hlavnim CTA.

Nepotrebujes vsechno otevrit najednou. Staci vedet, kde jsou zdroje pravdy. Pokud tym nema zdroj pravdy, prvni nalez auditu je prave tohle.

Sablona pripravy:

```text
Auditni obdobi:
[od - do]

Hlavni zmeny:
[releasy, nove funkce, kampane, dodavatele]

Zakaznicke signaly:
[support, obchod, churn, privacy/security dotazy]

Provozni signaly:
[incidenty, downtime, zalohy, chyby, alerty]

Datove zmeny:
[nova pole, nove eventy, exporty, retence, mazani]
```

### 2. Projdi hlavni uzivatelskou cestu

Vyber jednu hlavni cestu. Ne vsechny. Typicky:

- navstevnik prijde na landing page a posle poptavku,
- uzivatel se registruje a dosahne aktivacniho momentu,
- zakaznik exportuje data,
- admin prida clena tymu,
- zakaznik meni plan nebo rusi ucet.

U kazdeho kroku si napis:

| Otazka | Co hledat |
| --- | --- |
| Je dalsi akce jasna? | Tlacitko, mikrotext, potvrzeni, chyba. |
| Sbira se jen nutne minimum dat? | Pole formulare, telemetry, logy, eventy. |
| Je vysvetlen ucel zpracovani? | Mikrotext, privacy link, trust page. |
| Funguje cesta technicky? | Smoke test, email, redirect, ulozeni. |
| Da se cesta opustit ferove? | Zruseni, zpet, export, odhlaseni. |

**Priklad nalezu:**

"Demo formular nove vyzaduje telefon, ale obchod odpovida primarne emailem. Telefon neni potreba pro prvni krok. Akce: zmenit telefon na volitelne pole nebo ho odstranit, upravit mikrotext a zkontrolovat, zda se neposila do analytiky."

Tohle je maly nalez s velkym dopadem. Snizuje treneni, rozsah dat i pravni vysvetlovani.

### 3. Zkontroluj datovou mapu a eventy

Datova mapa nemusi byt dokonala, ale musi odpovidat realite. Jednou mesicne zkontroluj:

- nepribyla nova osobni data,
- nepribyl novy dodavatel,
- nezmenil se region zpracovani,
- nevznikl novy export mimo hlavni system,
- nejsou v logach cele zpravy, tokeny nebo volne vstupy,
- eventy porad odpovidaji mericimu planu,
- retence odpovida ucelu.

Rychla tabulka zmen:

| Zmena | Proc vznikla | Data | System | Retence | Rozhodnuti |
| --- | --- | --- | --- | --- | --- |
| nove pole ve formulari | trideni poptavek | tema dotazu | aplikace | po dobu obchodniho kontaktu | ponechat |
| export supportu do tabulky | rucni analyza chyb | email + obsah zpravy | lokalni soubor | nejasna | smazat a nahradit anonymnim souhrnem |
| novy event | mereni aktivace | account_id + krok | analytika | 12 mesicu | ponechat, dopsat do katalogu |

Kdyz neumis u radku vyplnit ucel nebo retenci, je to kandidat na odstraneni. Data, ktera nikdo neumi obhajit, nejsou budoucnostni poklad. Jsou neuklizeny sklep.

### 4. Over dodavatele a pristupy

Dodavatele se meni tise. Nekdo prida trial, propoji formular, zapne novou funkci v analytice nebo pozve kolegu do adminu. Mesicni audit ma zachytit hlavne drift.

Kontrolni otazky:

- Kteri dodavatele dostali za posledni mesic nova data?
- Ma kazdy dodavatel jasny ucel a vlastnika?
- Je porad pravda, co o dodavatelich rikame v trust page nebo privacy dokumentu?
- Ma kazdy pristup duvod?
- Odesli lide maji odebrane pristupy?
- Jsou admin ucty chranene MFA, pokud to dava smysl podle rizika?
- Existuje exportni nebo vypinaci plan pro kriticke dodavatele?

Vendor review nemusi byt roman. Pro mensi nastroj staci ctyri vety:

```text
Dodavatel:
Proc ho pouzivame:
Jaka data tam jdou:
Kde jsou data / jaky je smluvni ramec:
Jak ho vypneme:
```

**Codyho komentar:** "Pouzivame to jen interne" neni odpoved na datovou otazku. Interni nastroj muze mit nejcitlivejsi data v cele firme, protoze se do nej v dobre vire kopiruje vsechno, co zrovna hori.

### 5. Zkontroluj verejne sliby

Verejny web, cenik, trust page, privacy dokumenty a obchodni deck musi mluvit stejnou reci. Pokud produkt slibuje "provoz v EU", ale nova emailova automatizace posila metadata jinam, neni problem jen pravni. Je to problem duvery.

Projdi hlavne:

- headline a CTA na hlavni landing page,
- cenik a popis planu,
- trust page,
- privacy/cookies dokumenty,
- onboarding mikrotexty,
- obchodni sablony,
- FAQ a dokumentaci.

U kazde vety si poloz:

- Je porad pravdiva?
- Je dost konkretni?
- Mame pro ni interni dukaz?
- Neprozrazuje zbytecne citlive provozni detaily?
- Nepusobi jako slib, ktery zatim neumime splnit?

**Priklad opravy slibu:**

Misto:

> "Vsechna data zustavaji v EU."

Lepe, pokud realita je slozitejsi:

> "Aplikacni data, databaze a zalohy provozujeme v EU. U podpurnych dodavatelu evidujeme ucel, region a smluvni podminky v dodavatelskem prehledu."

Presnost je lepsi nez maximalisticka veta, ktera se rozbije pri prvnim security dotazniku.

### 6. Vyber tri opravy, zbytek odloz

Audit bez priorit je jen dalsi backlog. Na konci vyber maximalne tri opravy:

- jednu rychlou opravu duvery nebo textu,
- jednu opravu datove stopy,
- jednu provozni nebo technickou opravu.

Sablona vystupu:

```text
Mesicni audit:
[datum]

Co je v poradku:
[3 kratke body]

Oprava 1 - duvera/text:
[co, vlastnik, termin, dukaz hotovo]

Oprava 2 - data:
[co, vlastnik, termin, dukaz hotovo]

Oprava 3 - provoz:
[co, vlastnik, termin, dukaz hotovo]

Vedome odkladame:
[co a proc]

Znovu otevreme, kdyz:
[signal]
```

Priklad:

```text
Oprava 1 - duvera/text:
Trust page tvrdi, ze analytika je bez cookies, ale privacy dokument to rika jen obecne.
Vlastnik: produkt
Termin: patek
Dukaz hotovo: trust page a privacy dokument maji stejnou formulaci a odkaz na merici plan.

Oprava 2 - data:
Lead formular posila obsah zpravy do obecne analytiky.
Vlastnik: vyvoj
Termin: streda
Dukaz hotovo: event obsahuje jen page_slug a form_status, zprava zustava jen v CRM/mailboxu.

Oprava 3 - provoz:
Restore test databaze nebyl spusten posledni dva mesice.
Vlastnik: provoz
Termin: ctvrtek
Dukaz hotovo: zapis restore drillu s casem obnovy a problemem, pokud nastal.
```

### Checklist: mesicni audit

- [ ] Audit ma jasne obdobi a vlastnika.
- [ ] Jsou zkontrolovane hlavni zmeny produktu, obsahu, dodavatelu a dat.
- [ ] Jedna hlavni uzivatelska cesta byla projita rucne.
- [ ] Formularova pole maji aktualni ucel.
- [ ] Eventy odpovidaji mericimu planu a neposilaji volne osobni udaje.
- [ ] Logy a exporty nemaji zbytecne citlivy obsah.
- [ ] Datova mapa odpovida realnym systemum.
- [ ] Dodavatele maji ucel, region, pristupy a vypinaci plan.
- [ ] Verejne sliby odpovidaji skutecnemu provozu.
- [ ] Vybrane jsou maximalne tri opravy pro dalsi mesic.
- [ ] Odlozene problemy maji duvod a signal pro znovuotevreni.
- [ ] Vysledek auditu je ulozeny tam, kde ho tym priste najde.

---

## Retencni politika a mazani dat za 60 minut

Retencni politika zni jako dokument, ktery se pise az ve firme s pravnim oddelenim a klicovou kartou od zasedacky. Ve skutecnosti je to jedna z nejpraktictejsich veci, kterou muze maly SaaS udelat brzy. Rika, jak dlouho drzis jednotlive typy dat, proc je drzis, kdo o tom rozhoduje a jak je smazes.

GDPR v clanku 5 pracuje mimo jine s principem omezeni ulozeni: osobni udaje maji byt uchovavane ve forme umoznujici identifikaci subjektu udaju jen po dobu nezbytnou pro dane ucely: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng. Prakticky preklad pro zakladatele: "jednou se to muze hodit" neni retencni duvod. Je to pozvanka k budoucimu uklidu v panice.

**Codyho komentar:** Retence neni jen pravni hygiena. Je to produktovy design. Produkt, ktery umi data smazat, umi lip vysvetlit, co vlastne dela.

### 1. Sepis datove kategorie, ne vsechny sloupce

Za 60 minut nechces kreslit dokonaly datovy model. Chces mit rozhodnutelny seznam kategorii. Zacni tabulkou:

| Kategorie dat | Priklad | Proc existuje | Kde lezi | Kdo vlastni rozhodnuti |
| --- | --- | --- | --- | --- |
| Ucet | email, role, tym | prihlaseni a sprava pristupu | aplikacni DB | produkt |
| Billing | fakturacni udaje, objednavky | smlouva, ucetnictvi, platby | fakturacni system | finance |
| Support | dotazy, prilohy, odpovedi | vyrizeni pozadavku | helpdesk nebo mailbox | support |
| Analytika | page view, CTA klik, aktivacni event | produktove rozhodovani | analyticky nastroj | produkt |
| Logy | request ID, chyba, cas | provoz a bezpecnost | logging | vyvoj |
| Marketingove leady | email, zprava, zdroj | navazujici obchodni kontakt | CRM nebo mailbox | obchod |

Nevadilo by, kdyby v prvni verzi chybel detail. Vadilo by, kdyby tym vubec nevedel, ze stejny email lezi v aplikaci, CRM, exportu z kampane a starem spreadsheetu po pilotu.

### 2. Vyber retencni pravidlo podle ucelu

Kazda kategorie potrebuje jasne pravidlo. Nepis "uchovavame po nezbytne dlouhou dobu" jako interni instrukci, protoze podle toho nikdo nic neudela. Pro verejny privacy dokument muze byt formulace obecnejsi, ale interni provozni pravidlo musi byt konkretni.

Pouzij tri typy pravidel:

| Typ pravidla | Kdy se hodi | Priklad |
| --- | --- | --- |
| Casove | data ztraci uzitek po pevne dobe | neodeslane lead formulare s chybou mazeme po 30 dnech |
| Udalostni | data se vazi k ukonceni vztahu | po zruseni uctu smazeme produktova data po exportnim okne |
| Pravni/provozni | data musis drzet kvuli smlouve, ucetnictvi nebo bezpecnosti | fakturacni doklady drzi finance podle ucetnich pravidel |

U pravnich a ucetnich lhuty si nenechavej radit od genericke sablony z internetu. Zapis odpovednou roli a zdroj rozhodnuti. E-book neni pravni poradce, jen drzi latku vys nez "nekdo to nekdy nastavi".

### 3. Navrhni mazani jako tok, ne jako tlacitko

Mazani neni jedno tlacitko v adminu. Je to tok pres systemy. Typicky obsahuje:

- prijeti pozadavku nebo interni udalost,
- overeni identity a opravneni,
- export dat, pokud ho slibujes,
- smazani nebo anonymizaci v primarni aplikaci,
- propagaci do navazanych systemu,
- vyjimky pro data, ktera musis dal drzet,
- zaznam o provedeni bez zbytecneho obsahu.

**Priklad pro B2B SaaS ucet:**

Zakaznik zrusi workspace. Aplikace oznaci workspace jako `pending_deletion`, okamzite vypne prihlaseni beznych uzivatelu, nabidne export dat spravci, po 30 dnech smaze produktova data, odpoji integrace a v auditu ponecha jen minimalni zaznam: workspace ID, datum pozadavku, datum provedeni, zodpovedny proces a stav. Faktury zustanou ve fakturacnim systemu podle samostatneho pravidla.

Tohle je mnohem lepsi nez neurcite "data smazeme na zadost". Zakaznik vi, co se stane, a tym vi, co ma udelat.

### 4. Pozor na stiny: exporty, logy a testovaci data

Retencni politika casto selze mimo hlavni databazi. Nejvetsi bordel byva tady:

- CSV exporty v pocitacich a sdilenych discich,
- screenshoty v ticketech,
- obsah formulare v aplikacnich logach,
- kopie produkcni databaze pro vyvoj,
- testovaci ucty vytvorene z realnych dat,
- nahravky callu a automaticke prepisy,
- stare kampanove seznamy v marketingovem nastroji.

Pro maly tym staci pravidlo: co nejde automaticky spravovat, musi mit vlastnika a datum uklidu. Export bez vlastnika je datovy odpad. Hezky nazev slozky z nej nedela proces.

### 5. 60min postup

```text
00-10 min: Vyber rozsah.
Jeden produkt, jedna hlavni uzivatelska cesta, jeden tym.

10-25 min: Sepis datove kategorie.
Ucet, billing, support, analytika, logy, leady, exporty.

25-40 min: Prirad ucel a retencni pravidlo.
U kazde kategorie napis proc existuje a kdy konci jeji uzitek.

40-50 min: Najdi stiny.
Exporty, logy, testy, nahravky, integrace, zalohy.

50-60 min: Vyber tri opravy.
Jedna rychla technicka, jedna dokumentacni, jedna procesni.
```

Vysledkem nemusi byt dokonala politika. Vysledkem ma byt prvni verze, podle ktere jde zacit mazat, ne jen o mazani mluvit.

### Sablona interni retencni tabulky

```text
Kategorie:
[napr. support zpravy]

Ucel:
[proc data potrebujeme]

Systemy:
[kde data lezi]

Retencni pravidlo:
[konkretni lhuta nebo udalost]

Vyjimky:
[co zustava a proc]

Mazaci mechanismus:
[automaticky job, manualni postup, dodavatel]

Vlastnik:
[role, ne nahodne jmeno]

Jak overime:
[log, auditni zaznam, kontrolni dotaz]

Verejny slib:
[co o tom rikame v privacy dokumentu nebo trust page]
```

### Checklist: retence a mazani

- [ ] Datove kategorie jsou popsane lidskym jazykem.
- [ ] Kazda kategorie ma ucel a vlastnika.
- [ ] Retencni pravidlo je konkretni, ne jen "nezbytna doba".
- [ ] Mazani pokryva primarni aplikaci i navazane systemy.
- [ ] Exporty a testovaci data maji vlastnika a datum uklidu.
- [ ] Logy neobsahuji cele zpravy, tokeny ani zbytecne osobni udaje.
- [ ] Zruseni uctu ma jasny tok vcetne exportu, pokud ho slibujes.
- [ ] Data, ktera zustavaji kvuli pravnim nebo smluvnim duvodum, jsou oddelena a vysvetlena.
- [ ] Verejny privacy dokument nelze vyvratit jednim pohledem do realneho provozu.
- [ ] Tym umi ukazat dukaz, ze mazani probehlo, bez ukladani dalsich zbytecnych dat.

---

## Recyklace obsahu bez platformni pasti za 45 minut

Dobry obsah si zaslouzi vic nez jeden den zivota na socialni siti. Kdyz maly SaaS napise prakticky clanek, case study, release note nebo technicke vysvetleni, muze z nej vzniknout nekolik mensich vystupu: kratky post pro komunitu, odpoved do obchodniho emailu, FAQ blok, interni checklist, cast dokumentace nebo tema pro dalsi landing page.

Recyklace obsahu ale nesmi znamenat, ze vezmes jeden text, bez premysleni ho nakopirujes do peti platforem a pak se divis, proc nikdo nereaguje. Cilem je vytvorit vic vstupu k jednomu primarnimu zdroji na vlastni domene. Platformy maji byt distribuce, ne archiv. Archiv patri tam, kde mas kontrolu nad URL, formatem, analytikou, exportem a dlouhodobou dostupnosti.

Privacy-first pravidlo je jednoduche: kazdy odvozeny vystup ma vest zpet na primarni URL a nemel by pridavat sledovaci skripty, social embed nebo zbytecne osobni identifikatory. Kdyz odkaz posilas konkretni osobe, posli normalni URL a kratky kontext. Neni nutne delat z kazdeho ctenare marketingovy exemplar ve vitrince.

**Codyho komentar:** Recyklace obsahu neni lenost. Lenost je napsat dobry clanek, nechat ho zapadnout a za mesic znovu vymyslet stejnou myslenku od nuly. To je produktivita podle Sysifa, jen s lepsim fontem.

### 1. Vyber obsah, ktery uz prokazal uzitek

Nerecykluj vsechno. Vyber text, ktery uz ma signal:

- nekdo na nej reagoval,
- pomohl v obchodnim rozhovoru,
- odpovedel na opakovany support dotaz,
- vysvetluje dulezitou produktovou hranici,
- obsahuje checklist nebo sablonu,
- resi nakupni obavu kolem ceny, dat, hostingu, exportu nebo provozu.

Spatny kandidat je text, ktery vznikl jen proto, aby "neco vyslo". Pokud clanek nema jasnou pointu, nejdrive ho oprav. Recyklace zmatku vyrobi jen zmatek v mensich davkach.

Rychla kontrola kandidata:

| Otazka | Dobry signal |
| --- | --- |
| Komu text pomaha? | Umim rict konkretni segment. |
| Jake rozhodnuti podporuje? | Ctenar vi, co udelat dal. |
| Co je nejsilnejsi cast? | Priklad, tabulka, checklist nebo jasna veta. |
| Kam ma vest pozornost? | Na primarni URL, demo, audit, dokumentaci nebo odpoved. |
| Je text porad pravdivy? | Neobsahuje zastaraly slib, cenu nebo nastroj. |

### 2. Rozrez obsah podle zameru, ne podle delky

Jedna kapitola muze mit pet ruznych pouziti. Nerozhoduje pocet odstavcu, ale zamer ctenare.

| Vystup | Zamer | Jak ho napsat |
| --- | --- | --- |
| Kratky post | zaujmout spravny segment | jedna bolest, jedna veta reseni, primarni odkaz |
| Obchodni odpoved | odstranit namitku | odpoved na konkretni otazku + odkaz na detail |
| FAQ blok | snizit opakovane dotazy | kratka odpoved bez pravnicke mlhy |
| Checklist | pomoct s akci | 7 az 12 bodu, ktere lze odskrtnout |
| Interni poznamka | sjednotit tym | rozhodnuti, duvod, dopad, signal pro zmenu |
| Dokumentace | pomoct uzivateli | krokovy postup s ocekavanym vysledkem |

**Priklad:**

Z clanku o privacy-first formularich vznikne:

- LinkedIn post: "Proc povinne telefonni cislo zabiji duveru u demo requestu."
- FAQ: "Proc po vas nechceme telefon pri prvnim kontaktu?"
- Obchodni odpoved: "Data z demo formulare pouzijeme jen pro odpoved a navazujici kontakt."
- Checklist: "7 veci pred spustenim B2B formulare."
- Dokumentace: "Jak nastavit lead formular bez posilani obsahu zpravy do analytiky."

Vsechny vystupy maji stejny zdroj pravdy: puvodni clanek nebo kapitolu na vlastni domene. Kdyz se zmeni pravidlo, opravujes primarni text a odvozene vystupy jen tam, kde je to potreba.

### 3. 45min postup

Pouzij kratky blok. Kdyz se recyklace obsahu protahne na pul dne, pravdepodobne znovu pises clanek.

```text
00-05 min: Vyber primarni text.
Ma jasny segment, pointu a dalsi krok.

05-15 min: Oznac tri nejsilnejsi casti.
Veta, priklad, tabulka, checklist, namitka.

15-25 min: Vytvor tri odvozene vystupy.
Jeden kratky post, jedna obchodni odpoved, jeden FAQ nebo checklist.

25-35 min: Zkontroluj privacy stopu.
Zadne sledovaci odkazy, zadne osobni udaje v UTM, zadne social embed skripty.

35-45 min: Publikuj nebo uloz do systemu.
Primarni URL, interni odkaz, vlastnik, datum kontroly.
```

Pokud mas jen 15 minut, udelej jednu vec: vytahni z clanku nejlepsi checklist a pridej ho na relevantni landing page, dokumentaci nebo obchodni sablonu. Checklist ma casto vyssi obchodni uzitek nez dalsi obecny post.

### 4. Prime odkazy misto sledovacich zkratek

Distribuce nepotrebuje byt slepa, ale nemusi byt invazivni. Pro male SaaS casto staci:

- agregovana navstevnost podle refereru,
- citelne UTM parametry bez osobnich udaju,
- rucni zapis, komu byl clanek poslan,
- kvalita odpovedi a leadu,
- interni poznamka, kde text pomohl v obchodu nebo supportu.

Nepouzivej:

- zkracovace odkazu bez jasneho duvodu,
- UTM s emailem, jmenem firmy nebo internim tajnym nazvem,
- social share widgety se skripty treti strany,
- automaticke nahravani ctenaru do reklamniho publika,
- kopirovani celeho obsahu do platformy, ktera se stane skutecnym archivem.

Sablona bezpecneho odkazu:

```text
URL:
https://example.com/blog/privacy-first-formular

Volitelne UTM:
?utm_source=linkedin&utm_medium=organic&utm_campaign=privacy-formular

Zakazano:
?utm_content=ondrej-novak-firma-abc
```

Kdyz posilas odkaz primo leadovi, casto nepotrebujes UTM vubec. Obchodni kvalitu poznas podle odpovedi. Ne vsechno musi byt ve grafu. Nektere veci staci vedet, protoze jsi cloveku napsal jako clovek. Civilizace to prezila prekvapive dlouho.

### 5. Mini knihovna odpovedi

Nejcennejsi recyklovany obsah casto neni verejny post, ale kratka odpoved, kterou tym pouzije desetkrat mesicne.

Vytvor interni knihovnu ve stylu:

```text
Tema:
[napr. EU provoz]

Kdy pouzit:
[lead se pta, kde jsou data]

Kratka odpoved:
[2 az 4 vety]

Primarni odkaz:
[trust page / clanek / dokumentace]

Co neslibovat:
[maximalisticke nebo neoverene formulace]

Vlastnik:
[kdo udrzuje pravdivost]
```

Priklady temat:

- kde bezi data,
- proc nepouzivame reklamni pixely,
- jak funguje export,
- co se maze po ukonceni,
- jak vypada placeny pilot,
- proc je telefon ve formulari volitelny,
- co znamena cookieless mereni.

Tahle knihovna zlepsi rychlost odpovedi a snizi riziko, ze kazdy clovek ve firme vysvetluje privacy-first provoz trochu jinak. U duvery je konzistence stejne dulezita jako ton.

### Checklist: recyklace obsahu

- [ ] Recykluji jen obsah s jasnym uzitkem, ne vypln kalendare.
- [ ] Primarni zdroj zustava na vlastni domene nebo v kontrolovane dokumentaci.
- [ ] Kazdy odvozeny vystup ma vlastni zamer a ciloveho ctenare.
- [ ] Odkazy vedou zpet na stabilni URL.
- [ ] UTM parametry neobsahuji osobni ani interni citlive informace.
- [ ] Nepouzivam social share skripty ani zbytecne embed trackery.
- [ ] Obchodni a support odpovedi maji vlastnika pravdivosti.
- [ ] Privacy-first tvrzeni odpovidaji realnemu provozu.
- [ ] Po recyklaci vim, kde byl obsah publikovan nebo pouzit.
- [ ] Pokud se primarni text zmeni, vim, ktere odvozene vystupy zkontrolovat.

---

## Lead magnet bez datove pasti za 60 minut

Lead magnet je uzitecny jen tehdy, kdyz pomaha spravnemu cloveku udelat dalsi krok. Neni to trik na sbirani emailu do krabice "nekdy jim neco posleme". U privacy-first SaaS ma lead magnet tri role: ukazat odbornost, pomoct zakaznikovi pojmenovat problem a vytvorit dobrovolny kontakt bez zbytecneho sledovani.

Nejlepsi lead magnet pro maly B2B SaaS neni obecny e-book o vsem. Casto je to kratky audit, checklist, kalkulacka, sablona nebo rozhodovaci strom, ktery clovek pouzije jeste dnes. Kdyz je vystup konkretni, nepotrebujes nafukovat formular ani slibovat "tajne know-how", ktere ve skutecnosti obsahuje tri obecne odstavce a screenshot z prezentace.

Privacy-first varianta zacina jednoduchym pravidlem: hodnotu dej pred formular. Kdyz je to mozne, nech checklist nebo sablonu dostupnou primo na strance a email nabidni jen pro poslani kopie, aktualizace nebo navazujici konzultaci. Clovek pak neplati osobnimi udaji za obsah, ktery ma byt duverovy vstup do vztahu.

**Codyho komentar:** "Stahni si PDF po zadani firemniho telefonu" je marketingovy ekvivalent zamcene lednicky v kancelari. Technicky to jde. Spolecensky to rika vic o tobe nez o navstevnikovi.

### 1. Vyber format podle rozhodnuti zakaznika

Lead magnet ma podporit konkretni rozhodnuti. Nejdrive si napis vetu:

```text
Po pouziti tohoto materialu ma ctenar vedet, zda [konkretni rozhodnuti].
```

Priklady:

- zda je jeho SaaS pripraveny na verejny launch,
- zda demo formular sbira zbytecna data,
- zda potrebuje trust page,
- zda jeho pricing vysvetluje hodnotu dostatecne jasne,
- zda muze zjednodusit onboarding bez ztraty obchodnich informaci.

Pak vyber format:

| Rozhodnuti | Vhodny format | Proc funguje |
| --- | --- | --- |
| "Mame spustit?" | launch checklist | dava jasne ano/ne signaly |
| "Kde ztracime leady?" | 15min audit formulare | ukaze konkretni trenici plochy |
| "Je cena pochopitelna?" | pricing scorecard | prevede dojem na body |
| "Co rict o datech?" | trust page osnova | zrychli formulaci duvery |
| "Co merit?" | merici plan | oddeli rozhodovaci metriky od sumu |
| "Co smazat?" | datova mapa | najde zbytecne kopie a exporty |

Slaby lead magnet slibuje "kompletni pruvodce". Silny lead magnet resi jednu situaci. U maleho SaaS je lepsi, kdyz deset spravnych lidi pouzije maly audit, nez kdyz tisic nahodnych lidi stahne obecny soubor a zmizi do mlhy.

### 2. Navrhni datovy kontrakt

Pred formularem si odpovez na pet otazek:

- Co ctenar dostane i bez zadani emailu?
- Proc pripadne potrebujeme email?
- Budeme posilat jednorazovy material, nebo pravidelny obsah?
- Kde kontakt skonci a kdo k nemu ma pristup?
- Kdy kontakt smazeme, pokud nevznikne obchodni vztah?

Minimalni privacy-first formulare:

| Scenar | Pole | Mikrotext |
| --- | --- | --- |
| Poslat kopii checklistu | email | "Email pouzijeme jen pro poslani checklistu." |
| Nabidnout audit | pracovni email, volitelny popis problemu | "Odpovime k auditu. Zpravu neposilame do analytiky." |
| Prihlasit k odberu | email, volitelne tema zajmu | "Odber lze kdykoli odhlasit. Nepouzivame reklamni profily." |
| Domluvit konzultaci | email, volitelna firma, terminovy kontext | "Data pouzijeme pro domluvu konzultace a navazujici obchodni kontakt." |

Nektere souhlasy a informacni povinnosti nejsou kreativni copywriting, ale normalni soucast feroveho vztahu. GDPR stoji na transparentnosti a ucelovem omezeni; prakticky to znamena, ze u formulare ma byt jasne, co se stane po odeslani a proc se dana data sbiraji. Primarni text GDPR je ve zdrojich na konci e-booku.

Pokud chces material poslat emailem a zaroven cloveka prihlasit k pravidelnemu marketingovemu odberu, neschovej to do jedne vety. Oddel jednorazove poslani od odberu. Jedna akce muze byt "poslat checklist", druha dobrovolna volba "posilat mi dalsi prakticke tipy". Mene kouzel, vice duvery. Ano, marketing to prezije.

### 3. Postav landing cast bez manipulace

Lead magnet nepotrebuje dlouhou landing page. Potrebuje rychle odpovedet:

- Pro koho je material?
- Jakou situaci resi?
- Co ctenar ziska po 10 az 30 minutach pouziti?
- Co po nem chces za data?
- Co se s daty stane?
- Jaky je dalsi krok, kdyz chce pomoc?

Sablona sekce:

```text
Nadpis:
[Konkretni vystup] pro [konkretni segment]

Podnadpis:
Za [cas] zjistite, zda [rozhodnuti / problem], bez [neprijemny kompromis].

Co obsahuje:
- [bod 1]
- [bod 2]
- [bod 3]

Formular:
[email nebo primarni CTA]

Privacy mikrotext:
[jedna lidska veta o pouziti dat]

Sekundarni akce:
Zobrazit verejnou verzi / otevrit clanek / sledovat RSS
```

Priklad:

```text
Nadpis:
Checklist demo formulare pro B2B SaaS

Podnadpis:
Za 15 minut zjistite, ktera pole odrazuji leady a ktera data sbirate zbytecne.

Co obsahuje:
- kontrolu povinnych poli,
- privacy mikrocopy k odeslani,
- mereni konverze bez obsahu zprav v analytice.

Formular:
Poslat checklist na email

Privacy mikrotext:
Email pouzijeme jen pro poslani checklistu. Pokud zaskrtnete odber, poslali bychom vam i dalsi prakticke texty; jinak ne.

Sekundarni akce:
Otevrit verejnou verzi checklistu bez emailu
```

Tahle struktura neni akademicka. Je to obrana proti marketingove mlze. Kdyz neumim rict, co clovek po pouziti ziska, nemam lead magnet. Mam soubor.

### 4. Distribuuj pres vlastni zdroje

Privacy-first distribuce neznamena sedet potichu v koutku. Znamena mit primarni zdroj pod kontrolou a socialni site pouzivat jako cesty k nemu.

Zakladni distribucni plan:

- Publikuj verejnou HTML verzi na vlastni domene.
- Pridej PDF jen pokud lidem opravdu pomuze pri sdileni nebo tisku.
- Odkaz pridej do relevantnich blogovych clanku, dokumentace a trust page.
- Posli ho rucne lidem, kterym resi konkretni problem.
- Vytvor kratky post pro komunitu, ale nedelej z platformy hlavni archiv.
- Pridej odkaz do RSS/changelog kontextu, pokud je to pro ctenare relevantni.

Mer jen to, co umis pouzit:

| Otazka | Metrika | Rozhodnuti |
| --- | --- | --- |
| Navstevuji ho spravni lide? | referer a source group | kde dal distribuovat |
| Pouziji material? | otevreni stranky, klik na checklist, stazeni PDF | zda je format dostatecne pristupny |
| Vede ke konverzaci? | odpoved, demo request, audit request | zda je nabidka navazujici pomoci jasna |
| Nezatezuje soukromi? | pocet poli, eventy bez volnych textu | zda zjednodusit sbirani dat |

Do analytiky neposilej odpovedi z formularu, emaily, nazvy firem, telefonni cisla ani volne texty. Pokud potrebujes vedet, ze lead magnet privedl obchodni rozhovor, uloz zdroj v CRM nebo obchodni evidenci. Obecna analytika nema byt vysavac na osobni udaje.

### 5. 60min postup

```text
00-10 min: Vyber jedno rozhodnuti ctenare.
Napr. "Je nas demo formular pripraveny?"

10-25 min: Napis prakticky material.
Checklist, scorecard, kratka sablona nebo mini audit.

25-35 min: Navrhni datovy kontrakt.
Co je verejne, co vyzaduje email, jaky je ucel, kde data skonci.

35-45 min: Postav landing cast.
Nadpis, vysledek, obsah, formular, privacy mikrotext, sekundarni odkaz.

45-55 min: Priprav distribuci.
Tri prime odkazy: blog, rucni outreach, komunita nebo RSS.

55-60 min: Zkontroluj rizika.
Zadne skryte prihlaseni, zadne social embed skripty, zadne osobni UTM.
```

Pokud nestihas, vyhod PDF. HTML stranka s checklistem je casto lepsi: da se aktualizovat, indexovat, prolinkovat, citovat a cist bez stahovani. PDF pridej az tehdy, kdyz ma material realny tiskovy nebo sdileci duvod.

### Checklist: privacy-first lead magnet

- [ ] Lead magnet resi jedno konkretni rozhodnuti nebo problem.
- [ ] Cast hodnoty je dostupna bez formulare, pokud to dava smysl.
- [ ] Email neni povinny jen proto, ze "tak se dela marketing".
- [ ] Jednorazove poslani materialu je oddelene od pravidelneho odberu.
- [ ] Formular sbira minimum dat pro dany ucel.
- [ ] Mikrotext rika lidsky, co se s daty stane.
- [ ] Data nejdou do reklamniho pixelu ani obecne analytiky.
- [ ] Primarni verze lezi na vlastni domene se stabilni URL.
- [ ] Distribuce pouziva prime odkazy a RSS, ne sledovaci widgety.
- [ ] UTM parametry neobsahuji osobni ani interni citlive informace.
- [ ] Existuje vlastnik pravdivosti a datum dalsi kontroly.
- [ ] Navazujici obchodni krok je jasny, ale ne manipulative natlaceny.

---

## Prakticka priloha: Incidentove cviceni za 45 minut

Incident runbook, ktery nikdo nikdy nezkusil, je prani s nadpisem. Nemusis cekat na velkou certifikaci ani drahy audit. Jednou za mesic si vezmi 45 minut a projdi jeden realisticky scenar: nedostupny web, chybna migrace, unik pristupoveho tokenu, rozbite odesilani emailu, podezrely export dat nebo spatne nastavena cache u prihlasene casti.

Cil cviceni neni dramatizovat. Cil je zjistit, jestli tym vi, kdo rozhoduje, kde jsou logy, jak se vypina skodliva zmena, koho informovat a kdy uz nejde jen o technicky problem. U incidentu s osobnimi udaji mysli na GDPR clanek 33 a interni pravidlo: nejdrive zjistit fakta, omezit dopad, zachovat dukazy a rychle eskalovat pravni nebo bezpecnostni posouzeni.

**Codyho komentar:** Incidentove cviceni je jako test zalohy. Nejspis se ukaze, ze neco chybi. To neni ostuda. Ostuda je zjistit to az pri realnem incidentu a delat ze Slacku improvizovane ridici centrum.

### 1. Vyber jeden scenar

Nepouzivej abstraktni "mame incident". Vyber konkretni situaci:

| Scenar | Co overuje |
| --- | --- |
| Web neodpovida 20 minut | Monitoring, eskalaci, rollback, komunikaci se zakazniky. |
| Migrace pokazila cast dat | Zalohy, obnovu, vlastnictvi databaze, audit zmen. |
| Unikl API token dodavatele | Rotaci tajemstvi, vendor kontakt, rozsah dopadu. |
| Emailova integrace poslala spatnou zpravu | Logy, vypnuti integrace, opravu dat, omluvu. |
| Cache ukazala cizi obsah | Bezpecnostni hranice, purge cache, pravni posouzeni. |

Scenar zapis jednou vetou:

```text
V 10:15 monitoring hlasi, ze produkcni web vraci 500 na hlavni landing page a demo formular neodesila leady.
```

### 2. Projdi prvnich 15 minut

Prvnich 15 minut rozhoduje, jestli se incident zmensi, nebo rozleze.

Checklist:

- [ ] Kdo je incident owner?
- [ ] Kdo zapisuje casovou osu?
- [ ] Ktery system je dotceny?
- [ ] Je dopad na dostupnost, data, platby, nebo bezpecnost?
- [ ] Kde jsou aktualni logy a metriky?
- [ ] Lze problem omezit vypnutim feature flagu, rollbackem nebo zastavenim integrace?
- [ ] Je potreba chranit dukazy pred premazanim?

Nepreskakuj zapis casu. Minimalni timeline muze vypadat takto:

```text
10:15 monitoring hlasi chybu
10:17 incident owner potvrzen
10:20 zjisteno: chyba po deployi verze abc123
10:25 spusten rollback na predchozi verzi
10:31 formular znovu odesila testovaci lead
10:38 kontrola logu: zatim bez zjevneho pristupu k cizim datum
```

### 3. Rozhodni, koho informovat

Ne kazdy incident patri hned do verejneho status page. Ale kazdy incident potrebuje jasne rozhodnuti o komunikaci.

Rozdel prijemce:

| Skupina | Kdy informovat |
| --- | --- |
| Interni tym | Hned, pokud muze pomoct nebo musi prestat delat zmeny. |
| Zakaznici | Kdyz je dotcena dostupnost, data, platby nebo jejich prace. |
| Dodavatel | Kdyz incident muze byt na jeho strane nebo vyzaduje jeho logy. |
| Pravni/bezpecnostni odpovednost | Kdyz muze jit o osobni udaje, smluvni dopad nebo breach. |
| Dozorovy urad | Az po posouzeni podle GDPR/NIS2 a relevantnich povinnosti. |

Sablona interni zpravy:

```text
Incident: [kratky nazev]
Stav: vysetrujeme / omezeno / obnoveno
Dopad: [co zatim vime]
Owner: [jmeno]
Zakaz zmen: [ano/ne, ktere systemy]
Dalsi update: [cas]
```

Sablona zakaznicke zpravy:

```text
Od [cas] resime problem s [sluzba/funkce].
Dopad: [konkretne a bez spekulaci].
Aktualni stav: [co jsme udelali].
Dalsi update posleme do [cas].
```

Rikej mene, ale presne. "Nekteri uzivatele mohli zaznamenat problem" je horsi nez "Demo formular mezi 10:15 a 10:31 neodesilal zpravy". Prvni veta je mlha, druha je informace.

### 4. Po cviceni zapis tri opravy

Cviceni bez oprav je divadlo. Na konci vyber maximalne tri veci, ktere zmensi pristi riziko.

Priklady oprav:

- pridat odkaz na hosting konzoli do provozni dokumentace,
- zkratit pristup k produkcnim logum jen na potrebne role,
- doplnit runbook pro rollback migrace,
- nastavit test obnovy zalohy jednou mesicne,
- pridat alert na chyby demo formulare,
- dopsat vendor kontakt a DPA odkaz,
- zmenit logovani tak, aby neukladalo obsah formularu.

Sablona vystupu:

```text
Scenar:
[co jsme cvicili]

Co fungovalo:
[3 body]

Co chybelo:
[3 body]

Opravy do 7 dni:
1. [vystup, vlastnik, datum]
2. [vystup, vlastnik, datum]
3. [vystup, vlastnik, datum]

Kdy cviceni zopakujeme:
[datum nebo spoustec]
```

### Checklist: incidentove cviceni

- [ ] Scenar je konkretni a realisticky.
- [ ] Je urceny incident owner a zapisovatel timeline.
- [ ] Tym vi, kde jsou logy, metriky, deploye, zalohy a kontakty na dodavatele.
- [ ] Je jasne, kdy pouzit rollback, feature flag nebo vypnuti integrace.
- [ ] U scenare se posoudi dopad na osobni udaje a smluvni zavazky.
- [ ] Komunikace rozlisuje fakta, odhady a dalsi update.
- [ ] Po cviceni vzniknou maximalne tri opravy s vlastnikem.
- [ ] Opravy se kontroluji do 7 dni.
- [ ] Runbook se aktualizuje podle toho, co cviceni odhalilo.
- [ ] Zakaznicka data se pri cviceni nepouzivaji zbytecne; staci testovaci nebo anonymizovany scenar.

---

## Security a DPA dotaznik bez paniky za 60 minut

Jakmile SaaS zacne prodavat B2B zakaznikum, driv nebo pozdeji prijde security dotaznik, DPA pozadavek nebo tabulka od nakupu. Nekdy ma dvacet otazek, nekdy dve ste. Nektere otazky jsou rozumne, jine vypadaji, jako by je nekdo vytahl z enterprise hradu a poslal male firme pro radost. Cilem neni vyplnit vse za kazdou cenu. Cilem je odpovedet pravdive, rychle a tak, aby se z odpovedi nestal slib, ktery produkt realne neumi splnit.

Privacy-first SaaS ma vyhodu, pokud si pripravi odpovedi dopredu: kde jsou data, kdo k nim ma pristup, jak funguje export, mazani, zalohy, incidenty, subdodavatele a logy. To jsou stejne otazky, ktere se opakuji v prodeji, trust page i provozu. Security dotaznik tedy neni jen administrativni otrava. Je to zrcadlo provozni dospelosti.

Pravni cast vzdy validuj podle konkretni situace. DPA a role spravce/zpracovatele se odviji od toho, co produkt dela a pro koho. GDPR dava zakladni ramec pro zpracovatelske smlouvy v clanku 28 a pro technicka a organizacni opatreni v clanku 32: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng. Bezpecnostni checklisty ber jako praktickou pomucku, ne jako nahrazku pravnika.

**Codyho komentar:** Nejhorsi odpoved na security dotaznik je sebevedome "ano" u vseho. Druha nejhorsi je tricetistrankovy dokument, ve kterem nikdo nepozna, co produkt opravdu dela. Pravda byva kratsi a mnohem uzitecnejsi.

### 1. Rozdel otazky podle vlastnika

Security dotaznik nevyrizuj jako jeden velky blob. Rozdel ho podle oblasti a vlastnika:

| Oblast | Typicke otazky | Vlastnik |
| --- | --- | --- |
| Data a role | jaka data zpracovavate, jste spravce nebo zpracovatel, kde jsou data | founder / produkt / legal |
| Hosting a infrastruktura | region, zalohy, sifrovani, dostupnost, SLA | provoz / vyvoj |
| Pristupy | kdo ma admin pristup, MFA, revize pristupu, offboarding lidi | provoz / security |
| Aplikacni bezpecnost | autentizace, logovani, zranitelnosti, testovani | vyvoj |
| Incidenty | detekce, reakce, breach proces, komunikace | provoz / legal |
| Dodavatele | subprocesori, DPA, regiony, export, mazani | founder / provoz |
| Retence a mazani | jak dlouho drzis data, export, smazani, zalohy | produkt / provoz |

U kazde otazky si pridej stav:

- `odpoved mame`,
- `odpoved mame, ale musi se zpresnit`,
- `neumime splnit`,
- `potrebujeme pravni validaci`,
- `potrebujeme technickou zmenu`.

Tohle zni banalne, ale zabrani tomu, aby tym omylem slibil funkci, ktera neexistuje. Kdyz dotaznik chce SSO a produkt ho nema, odpoved neni "ano, casem". Odpoved je: "SSO aktualne neni soucasti standardniho planu; pro Business plan je na roadmap nebo individualni domluvu." Pokud to neni pravda ani na roadmap, napis to jeste presneji.

### 2. Priprav zakladni odpovedni balicek

Nemusis pri kazdem leadu psat vse znovu. Udrzuj kratky balicek odpovedi, ktery se da poslat nebo pouzit pri vyplnovani tabulek.

Minimalni balicek:

- trust page nebo security overview,
- datova mapa hlavniho toku,
- seznam hlavnich dodavatelu a regionu,
- DPA nebo postup pro uzavreni DPA,
- popis technickych a organizacnich opatreni,
- postup pro export, mazani a offboarding,
- incidentovy proces a kontakt,
- informace o tom, co zamerne neslibujete verejne.

Sablona interniho security overview:

```text
Produkt:

Typ zakazniku:

Role v GDPR:
[typicky spravce / zpracovatel / kombinace podle scenare]

Hlavni data:
[ucty, obsah, billing, support, logy, analytika]

Region:
[aplikace, databaze, soubory, zalohy, logy]

Pristupy:
[role, MFA, revize, produkcni pristupy]

Bezpecnostni zaklad:
[HTTPS, sifrovani, zalohy, monitoring, patching, logging]

Incidenty:
[detekce, owner, komunikace, breach posouzeni]

Subdodavatele:
[kategorie, region, DPA, export/mazani]

Omezeni:
[co zatim neumime: SSO, vlastni region, pen test, certifikace]

Kontakt:
[security / privacy / DPA]
```

Omezeni jsou dulezita. Pokud nejsou v dokumentu, prodej nebo zakaznik si je domysli. A domyslene sliby maji zvyk vratit se v nejhorsim moznem okamziku.

### 3. Odpovidej presne, ne maximalisticky

Bezpecnostni dotazniky casto svadi k odpovedim typu "ano, pravidelne" nebo "data jsou sifrovana". Jenze dobry zakaznik se zepta dal: jak pravidelne, ktera data, kde, kdo ma klice, co je mimo rozsah?

Lepsi vzory:

| Mlhava odpoved | Presnejsi odpoved |
| --- | --- |
| "Data jsou v EU." | "Aplikacni databaze a primarni zalohy jsou v EU regionu. Subdodavatele evidujeme v dodavatelskem prehledu." |
| "Pristupy kontrolujeme." | "Admin pristupy revidujeme mesicne a pri odchodu clena tymu je rusime v offboarding checklistu." |
| "Mame zalohy." | "Databaze ma automaticke zalohy; restore test zapisujeme podle provozniho rytmu." |
| "Incidenty resime rychle." | "Incidenty tridime P1/P2/P3, vedeme timeline a u osobnich udaju posuzujeme GDPR breach povinnosti." |
| "Nepouzivame trackery." | "Verejny web nemeri navstevniky pres reklamni profil; netechnicke skripty nepoustime bez odpovidajiciho souhlasu." |

Kdyz odpoved neznas, nenahrazuj ji optimismem. Napis "overujeme" a dej termin. Pokud dotaznik nepovoluje text a chce jen ano/ne, pridej komentar do pruvodniho emailu nebo prilohy. Bezpecnost neni test s hadanim spravne odpovedi.

### 4. Kdy rict ne nebo "zatim ne"

Ne kazdy pozadavek ma maly SaaS splnit hned. Nektere veci patri do vetsiho planu, nektere do enterprise varianty a nektere jsou mimo rozumny rozsah produktu.

Typicke pozadavky a realisticka reakce:

| Pozadavek | Reakce maleho SaaS |
| --- | --- |
| Vlastni dedikovany region | Jen pokud je to obchodne a provozne udrzitelne. Jinak popsat aktualni EU region. |
| SSO/SAML | Business/enterprise kandidat, ne nutne pro prvni self-service plan. |
| Penetracni test kazdy kvartal | Mozna pozdeji; ted popsat aktualni testovani, dependency kontrolu a plan. |
| Kompletni seznam subdodavatelu verejne | Verejne kategorie, detail na vyzadani pod rozumnym procesem. |
| Neomezena retence logu | Casto spatny napad; vysvetlit kratkou technickou retenci a agregace. |
| Poslani internich runbooku | Sdilet prehled procesu, ne citlive provozni detaily. |

Rict "zatim ne" je profesionalni, pokud k tomu pridas alternativu:

```text
Tuto schopnost aktualne nenabizime ve standardnim planu. Pro vase posouzeni muzeme dodat popis soucasneho nastaveni, datovou mapu a DPA. Pokud je [pozadavek] nakupni podminka, muzeme ho vyhodnotit jako soucast Business varianty.
```

Tohle je ferove. Nepredstira to hotovou enterprise zralost, ale nezavira to obchodni rozhovor.

### 5. 60min postup

```text
00-10 min: Sesbirej posledni security, DPA a privacy otazky od leadu.

10-20 min: Rozdel je podle oblasti: data, hosting, pristupy, aplikace, incidenty, dodavatele, retence.

20-35 min: Vypln security overview z existujici datove mapy, trust page a runbooku.

35-45 min: Oznac mezery: co neumime splnit, co nevim, co musi validovat pravnik nebo provoz.

45-55 min: Napis 5 az 10 opakovatelnych odpovedi pro obchod a support.

55-60 min: Vyber tri opravy: jedna verejna veta, jedna interni tabulka, jedna technicka/procesni mezera.
```

Priklad tri oprav:

- doplnit na trust page presnejsi vetu o regionu zaloh,
- vytvorit tabulku subdodavatelu s ucelem, regionem a DPA stavem,
- pridat mesicni revizi admin pristupu do provozniho rytmu.

To jsou male zmeny, ktere zrychli dalsi prodej a snizi riziko, ze se security odpovedi budou vyrabet improvizovane v inboxu.

### Checklist: security a DPA pripravenost

- [ ] Existuje kratke security overview s pravdivymi odpovedmi.
- [ ] Je jasne, zda produkt v dane situaci vystupuje jako spravce, zpracovatel nebo oboji.
- [ ] Datova mapa pokryva hlavni data, systemy, regiony, pristupy, retenci a mazani.
- [ ] Hlavni dodavatele maji ucel, region, DPA stav, export a mazani.
- [ ] Trust page, privacy dokument a obchodni odpovedi si neodporuji.
- [ ] U pristupu je popsana role, MFA tam, kde dava smysl, a revize.
- [ ] Zalohy, restore testy a incident runbook maji realny proces, ne jen vetu v prezentaci.
- [ ] Je jasne, ktere pozadavky zatim neumime nebo nechceme slibit.
- [ ] Citlive interni detaily se nesdili verejne bez duvodu.
- [ ] Opakovane odpovedi maji vlastnika pravdivosti a datum dalsi kontroly.

---

## Zakaznicka podpora bez datove pasti za 60 minut

Support je u maleho SaaS casto prvni skutecny datovy sklad. Zakaznici do nej posilaji screenshoty, exporty, fakturacni udaje, interni kontext, chybove hlasky, nahravky obrazovky a nekdy i tajemstvi, ktera tam nikdy nemela byt. Pokud podpora zacina jako jeden sdileny inbox, neni to problem. Problem je, kdyz nikdo nerekne, co do nej patri, kdo to vidi, jak dlouho se to drzi a jak se z toho dela produktove uceni bez kopirovani osobnich dat do dalsich nastroju.

Privacy-first support neni o tom, ze odpovedi budou pomale a sterilni. Je o tom, ze zakaznik dostane pomoc bez zbytecne datove sklizne a tym se z kazdeho ticketu uci bez toho, aby si rozsiril stopu dat do peti mist.

### 1. Support neni jen inbox

Rozdel podporu na ctyri vrstvy:

| Vrstva | Co obsahuje | Typicke riziko |
| --- | --- | --- |
| Prijem | email, formular, chat, telefonicka poznamka | prilis mnoho povinnych poli |
| Reseni | ticket, interni komentar, diagnostika, logy | kopirovani citlivych dat do komentaru |
| Uceni | tagy, pryciny, castost, dopad | mereni lidi misto problemu |
| Znalost | help clanky, sablony odpovedi, changelog | verejne prozrazeni interniho nebo zakaznickeho detailu |

Kazda vrstva ma mit vlastni pravidlo. Do prijmu patri jen to, co je potreba pro odpoved. Do reseni patri technicky kontext, ale ne cele exporty "pro jistotu". Do uceni patri agregovane poznatky. Do znalostni baze patri zobecnene reseni bez identifikace zakaznika.

**Codyho komentar:** Nejrychlejsi support neni ten, ktery vidi vsechno. Nejrychlejsi support je ten, ktery vidi spravne minimum a umi se zeptat na chybejici kontext az ve chvili, kdy je opravdu potreba.

### 2. Navrhni prijem jako datovy kontrakt

Support formular nebo emailova sablona ma rict zakaznikovi, co poslat a co neposilat. Tim snizis riziko i cas reseni.

Minimalni pole pro prvni B2B SaaS:

- pracovni email,
- organizace nebo workspace ID, pokud existuje,
- typ problemu,
- kratky popis,
- dopad na praci,
- volitelny screenshot bez citlivych udaju,
- souhlas s tim, ze support muze pro reseni nahlednout na zakladni technicky kontext uctu, pokud je to soucast podminek produktu.

Co do prvniho formulare typicky nepatri:

- rodne cislo, cislo dokladu nebo jine statni identifikatory,
- heslo nebo API klice,
- platebni karta,
- cele databazove exporty,
- screenshoty s osobnimi udaji tretich osob,
- "prihlasovaci udaje pro test" poslane volnym textem.

Kratka veta nad formularem:

```text
Neposilejte nam hesla, API klice, platebni karty ani exporty s osobnimi udaji. Pokud budeme potrebovat citlivejsi podklady, domluvime bezpecnejsi zpusob predani.
```

Tohle neni pravnicka poezie. Je to provozni brzda proti spatnym datovym tokum.

### 3. Triage podle dopadu, ne podle hluku

Bez triage se z podpory stane fronta podle toho, kdo pise nejhlasiteji. Maly tym potrebuje jednoduchou klasifikaci:

| Priorita | Definice | Prvni reakce |
| --- | --- | --- |
| P1 | produkt je nedostupny nebo zakaznik nemuze delat kritickou praci | potvrdit prijem, otevrit incident, priradit ownera |
| P2 | dulezita funkce selhava, existuje workaround | potvrdit dopad, dat orientacni dalsi krok |
| P3 | chyba nebo nejasnost s omezenym dopadem | vyresit ve standardni fronte |
| P4 | napad, dotaz, kosmetika | zaznamenat, propojit s roadmap nebo knowledge base |

Ke kazdemu ticketu staci pet internich poli:

- `impact`: co zakaznik nemuze udelat,
- `scope`: jeden uzivatel, tym, vice zakazniku,
- `data_sensitivity`: bez osobnich dat / osobni data / citlive nebo zakaznicke dokumenty,
- `owner`: kdo resi dalsi krok,
- `next_update_at`: kdy se zakaznik dozvi dalsi stav.

Pole `data_sensitivity` je dulezite. Kdyz ticket obsahuje screenshot s osobnimi udaji, nechovej se k nemu jako k beznemu bug reportu. Omez kopirovani, neposilej ho do verejnych kanalu, neukladej ho do nahodneho projektoveho boardu a po vyreseni zkontroluj retenci.

### 4. Z odpovedi delej znalost bez kopirovani dat

Kazdy opakovany dotaz by mel zanechat neco lepsiho nez dalsi dlouhy email. Vyber jednu z techto stop:

- uprav help clanek,
- pridej odpoved do interni knihovny sablon,
- zaloz produktovy nalez s agregovanou pricinou,
- zlepsi text v UI,
- pridej validaci nebo prazdny stav,
- dopln monitoring pro chybu, kterou support odhalil rucne.

Zakaznicka zprava:

```text
Nemuzu pozvat kolegu, tlacitko je sede a nevim proc.
```

Spatny interni prepis:

```text
Klient Novakovi s.r.o. ma admina jana@... a nejde mu pozvat petra@...
```

Lepsi produktovy nalez:

```text
Invite flow: uzivatel s roli Editor vidi disabled tlacitko Pozvat clena bez vysvetleni. Dopad: nejmene 3 support dotazy za 14 dni. Navrh: zobrazit tooltip "Pozvat cleny muze jen Admin" a odkaz na zadost adminovi.
```

Ucis se z problemu, ne z identity cloveka. To je rozdil mezi produktovym rizenim a support archeologii.

### 5. 60min postup

```text
00-10 min: Vypis vsechny kanaly, kudy dnes prichazi support: email, formular, chat, socialni site, osobni zpravy.

10-20 min: U kazdeho kanalu zapis, jaka data prijima, kdo k nim ma pristup a kde se ukladaji.

20-30 min: Napis datovy kontrakt pro zakaznika: co posilat, co neposilat, kdy si vyzadate citlivejsi podklady.

30-40 min: Nastav ctyri priority P1-P4 a pet internich poli: impact, scope, data_sensitivity, owner, next_update_at.

40-50 min: Vyber deset poslednich dotazu a oznac, ktere patri do help clanku, UI textu, monitoringu nebo roadmapy.

50-60 min: Smaz nebo omez jedno zbytecne misto, kam se support data kopiruji, a pridej pravidlo do interniho manualu.
```

Vystup po hodine nema byt novy helpdesk system. Ma to byt jasny support provozni list:

- kanaly,
- prijimana data,
- pristupy,
- priority,
- citlivost dat,
- pravidla pro screenshoty a exporty,
- tri opakovatelne sablony odpovedi,
- jedna zmena, ktera snizi pocet budoucich ticketu.

### Sablony odpovedi

Kdyz zakaznik posle citlive udaje:

```text
Diky, vidim, ze zprava obsahuje citlive udaje. Kvuli bezpecnosti je nebudeme dal kopirovat do internich poznamek. Pro dalsi diagnostiku prosim neposilejte hesla, API klice ani cele exporty. Pokud budeme potrebovat dalsi podklady, navrhneme bezpecnejsi zpusob predani.
```

Kdyz problem patri do incidentu:

```text
Diky za nahlaseni. Dopad bereme jako kriticky a predavam ho do incident procesu. Dalsi stav poslu nejpozdeji v [cas]. Pokud se mezitim zmeni rozsah dopadu, odpovezte prosim do tohoto vlakna.
```

Kdyz jde o produktovy navrh:

```text
Diky, tohle eviduji jako produktovy navrh. Nechci slibovat termin bez overeni dopadu, ale pridavam ho k souvisejicim pozadavkum a pokud se dostane do planu, dame vedet v changelogu nebo primo ve vlakne.
```

### Checklist: privacy-first support

- [ ] Vime, kudy vsemi kanaly prichazi support.
- [ ] Formular a sablony rikaji, co zakaznik nema posilat.
- [ ] Povinna pole odpovidaji realne potrebe pro prvni odpoved.
- [ ] Tickety maji prioritu podle dopadu, ne podle nalady pisatele.
- [ ] U ticketu se oznacuje citlivost dat.
- [ ] Screenshoty, exporty a logy se nekopiruji do zbytecnych nastroju.
- [ ] Help clanky a produktove nalezy neobsahuji identifikaci zakaznika bez duvodu.
- [ ] Existuje pravidlo retence pro uzavrene tickety a prilohy.
- [ ] Support umi eskalovat incident bez improvizace.
- [ ] Opakovane dotazy se prevadi na UI opravy, help clanky nebo monitoring.

---

## Subprocesori a zmeny dodavatelu za 60 minut

Subprocesor neni pravni detail, ktery se resi az ve chvili, kdy velky zakaznik posle DPA dotaznik. Je to soucast architektury duvery. Kdyz SaaS pouziva hosting, emailovou sluzbu, monitoring, support desk, platebni branu nebo analytiku, cast datoveho toku casto opousti hlavni aplikaci. Privacy-first provoz neznamena, ze nikdy nepouzijes externi nastroj. Znamena, ze vis, co kam tece, proc, kdo za to odpovida a jak se zmena komunikuje.

GDPR v clanku 28 popisuje pravidla pro zpracovatele a dalsi zpracovatele vcetne pozadavku na predchozi konkretni nebo obecne pisemne povereni a informovani spravce o zamyslenych zmenach, aby mel moznost namitky: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng. EDPB Guidelines 07/2020 vysvetluji role spravce a zpracovatele a proc je spravne urceni odpovednosti prakticky dulezite: https://www.edpb.europa.eu/system/files/2023-10/EDPB_guidelines_202007_controllerprocessor_final_en.pdf.

Prakticky preklad pro maly SaaS: pokud zakaznik sveruje data tobe a ty je posilas dalsimu dodavateli, musi byt tahle cast retezce viditelna, smluvne pokryta a provozne zvladnutelna. Ne maximalne slozita. Viditelna.

### 1. Rozlis dodavatele podle datoveho dopadu

Ne kazdy dodavatel patri na verejny seznam subprocesoru. Firma na kancelarske zidle nejspis nepracuje se zakaznickymi daty v produktu. Emailova sluzba pro transakcni zpravy uz ano. Cilem prvni hodiny neni vyrobit pravni encyklopedii, ale rozdelit nastroje podle realne datove stopy.

Pouzij ctyri skupiny:

| Skupina | Priklad | Co resit |
| --- | --- | --- |
| Kriticky subprocesor | hosting, databaze, objektove uloziste | region, DPA, pristupy, zalohy, incidenty, exit plan |
| Datovy provozni nastroj | transakcni email, support desk, monitoring chyb | typy dat, retence, maskovani, pristupy |
| Marketingovy nastroj | analytika, kampanove formulare, newsletter | souhlas, minimalizace, oddeleni od produktovych dat |
| Bez dat nebo s verejnymi daty | staticky asset hosting bez logu, dokumentacni nastroj pro verejne texty | overit, ze do nej netecou osobni nebo interni data |

Prvni chyba je mit seznam "dodavatelu". Lepsi je mit seznam "dodavatelu podle dat". Stejny nastroj muze byt nevinny u verejne dokumentace a citlivy, kdyz do nej zacnes posilat screenshoty z produkcni administrace.

**Codyho komentar:** Vendor list bez datovych kategorii je dekorace. Hezka do auditu, k nicemu pri incidentu. Pri realnem problemu se nikdo nepta "kolik mame log". Pta se "kde presne jsou data a kdo je muze videt".

### 2. Vytvor verejny seznam, ktery se da udrzovat

Verejny seznam subprocesoru ma byt citelny pro zakaznika i udrzitelny pro tym. U maleho SaaS staci jednoducha stranka v trust centru, dokumentaci nebo privacy sekci. Nemusi odhalovat citlive detaily infrastruktury, ale mela by rict dost na to, aby zakaznik pochopil datovou stopu.

Minimalni sloupce:

| Dodavatel | Ucel | Typ dat | Region | Role | Poznamka |
| --- | --- | --- | --- | --- | --- |
| [nazev] | hosting aplikace | zakaznicka a technicka data | EU | subprocesor | DPA uzavrena |
| [nazev] | transakcni emaily | email, obsah systemovych zprav | EU nebo EHP | subprocesor | marketing oddelen |
| [nazev] | monitoring chyb | technicke logy, stack trace | EU | subprocesor | osobni data maskovana |

Do verejne verze nedavej zbytecne interni nazvy serveru, IP rozsahy, konkretni admin uzivatele nebo technicke detaily, ktere zvysuji bezpecnostni riziko. Verejna stranka ma budovat duveru, ne slouzit jako mapa k provozu.

Dobry mikrotext nad tabulkou:

```text
Tento seznam ukazuje hlavni dodavatele, kteri nam pomahaji provozovat produkt a mohou zpracovavat zakaznicka nebo technicka data. Nastroje vybirame s preferenci evropskeho provozu, minimalizace dat a jasnych smluvnich pravidel.
```

Dobry mikrotext pod tabulkou:

```text
Pokud planujeme pridat nebo nahradit dodavatele, ktery muze ovlivnit zpracovani zakaznickych dat, informujeme zakazniky podle smlouvy nebo DPA. Pro privacy a DPA dotazy piste na [kontakt].
```

Tahle formulace neni nahrada smlouvy. Je to verejny orientacni bod. Smlouva a DPA maji rict presny mechanismus souhlasu, oznameni a namitek.

### 3. Nastav proces zmeny dodavatele

Nejvetsi riziko nevznika pri prvnim sepsani seznamu. Vznika o tri mesice pozdeji, kdy nekdo prida "jen maly nastroj" na onboarding, support nebo mereni. Proto musi mit zmena dodavatele maly, rychly a povinny proces.

Minimalni zmena dodavatele:

1. Popsat ucel: proc nastroj potrebujeme a co se bez nej neda rozumne delat.
2. Popsat data: jake kategorie dat do nej pujdou a co do nej nesmi.
3. Overit region: kde se data ukladaji a kde je muze dodavatel zpracovavat.
4. Overit smlouvu: DPA, podminky, subprocesori dodavatele, export, mazani.
5. Overit pristupy: kdo v tymu bude mit ucet a jak se pristup zrusi.
6. Overit vypnuti: jak nastroj vypneme, kdyz nefunguje nebo prestane byt vhodny.
7. Aktualizovat verejny seznam, interni datovou mapu a privacy dokumenty, pokud je to potreba.

Rozhodovaci pravidlo:

> Dodavatel se nepridava do produkce, dokud nema vlastnika, ucel, datove hranice, smluvni stav a vypinaci plan.

Tohle pravidlo je kratke schvalovaci rizeni pro male tymy. Nezabije rychlost, ale zachyti presne ty chyby, ktere se pozdeji spatne vysvetluji zakaznikovi.

### 4. Oznameni zmeny: vecne, kratke, bez marketingu

Kdyz se meni subprocesor, zakaznik nepotrebuje roman o tom, jak nova integrace posune synergii. Potrebuje vedet, co se meni, proc, jakych dat se to tyka, od kdy a co muze udelat, pokud ma otazky nebo namitku podle smlouvy.

Sablona oznameni:

```text
Predmet: Zmena v seznamu subprocesoru od [datum]

Dobry den,

od [datum] planujeme pridat/nahradit dodavatele [nazev] pro [ucel].

Dotcena data: [kategorie dat]
Region zpracovani: [region]
Duvod zmeny: [strucny prakticky duvod]
Dopad na produkt: [zadny / popis dopadu]
Dokumentace: [odkaz na aktualizovany seznam subprocesoru]

Pokud mate ke zmene dotaz nebo chcete uplatnit postup podle nasi smlouvy/DPA, napiste do [datum nebo lhuta podle smlouvy] na [kontakt].

Cody / Dreamind
```

Upozorneni: lhuty, mechanismus namitek a pravni ucinky se musi ridit skutecnou smlouvou. Tohle je komunikacni sablona, ne univerzalni pravni klauzule. Ano, pravni texty jsou casto nudne. Presne proto ma byt produktova komunikace vecna a cista.

### 5. 60min postup

Casovy plan pro prvni verzi:

| Cas | Vystup |
| --- | --- |
| 0-10 min | Seznam vsech nastroju, ktere se dotykaji produktu, webu, supportu, emailu, analytiky, plateb a monitoringu. |
| 10-25 min | Rozdeleni podle toho, zda zpracovavaji zakaznicka, osobni, technicka, obchodni nebo jen verejna data. |
| 25-40 min | Vyplneni verejne tabulky pro hlavni subprocesory vcetne ucelu, typu dat a regionu. |
| 40-50 min | Zapis procesu pro pridani nebo nahrazeni dodavatele. |
| 50-60 min | Kontrola, jestli verejna stranka, DPA odpovedi, datova mapa a privacy dokumenty nerikaji kazdy neco jineho. |

Kdyz narazis na nejasnost, nevyres ji kouzelnou vetou "data mohou byt zpracovana kdekoliv". Zapis ji jako riziko:

```text
Nejasnost: nevim, zda [dodavatel] uklada support prilohy v EU.
Dopad: mohou obsahovat screenshoty se zakaznickymi daty.
Vlastnik: [jmeno]
Dalsi krok: overit dokumentaci a DPA do [datum], do te doby neposilat prilohy s osobnimi daty.
```

Takhle vypada dospela prace s nejistotou. Ne predstirani jistoty.

### Checklist: subprocesori a zmeny dodavatelu

- [ ] Mam seznam nastroju, ktere se dotykaji produktu, webu, supportu, emailu, analytiky, plateb a monitoringu.
- [ ] U kazdeho nastroje vim, zda zpracovava osobni, zakaznicka, technicka, obchodni nebo jen verejna data.
- [ ] Kriticti dodavatele maji ucel, region, DPA stav, pristupy, retenci a exit plan.
- [ ] Verejny seznam subprocesoru je citelny a neprozrazuje zbytecne citlive technicke detaily.
- [ ] Smlouva nebo DPA rika, jak se resi pridani nebo nahrada subprocesoru.
- [ ] Zmena dodavatele ma vlastnika, duvod, datove hranice a vypinaci plan.
- [ ] Privacy dokumenty, trust page, datova mapa a obchodni odpovedi si neodporuji.
- [ ] Marketingove a support nastroje nejsou automaticky napojene na produktova data.
- [ ] Pristupy k dodavatelskym nastrojum se pravidelne kontroluji a po odchodu cloveka rusi.
- [ ] Nejasnosti jsou zapsane jako rizika s vlastnikem a terminem overeni.

---

## Exit plan dodavatele za 45 minut

Dodavatele se casto vybiraji podle toho, jak rychle pomohou dnes. To je pochopitelne. Problem je, kdyz se nikdo nezepta, jak se od nich odejde zitra. Exit plan neni pesimisticka fantazie. Je to kratka odpoved na otazku: "Co udelame, kdyz dodavatel zdrazi, prestane vyhovovat privacy-first hodnotam, zmeni region zpracovani, ma vypadek, nebo ho musime vypnout kvuli incidentu?"

U maleho SaaS nemusi mit kazdy nastroj dvacetistrankovy kontinuitni plan. Ale kazdy nastroj, ktery drzi zakaznicka data, prihlaseni, platby, emaily, logy nebo hlavni provozni tok, ma mit aspon minimalni vystupni dvere. Bez nich se z integrace stava klec s peknym onboardingem.

**Codyho komentar:** Vendor lock-in nevznikne ve chvili, kdy podepises smlouvu. Vznikne ve chvili, kdy prestanes vedet, kde je export, co by se rozbilo po vypnuti a kdo by to vubec resil. To neni strategie. To je Stockholm syndrom s API klicem.

### 1. Rozdel dodavatele podle bolesti pri odchodu

Nejdrive si nepis dlouhy plan pro vsechny nastroje. Vyber ty, jejichz vypnuti by bolelo produkt, zakazniky nebo data.

| Typ dodavatele | Co se stane pri problemu | Minimalni exit myslenka |
| --- | --- | --- |
| Hosting a databaze | produkt muze byt nedostupny, obnova muze byt slozita | export dat, infrastruktura jako kod, restore postup |
| Transakcni email | neodchazi registrace, faktury, alerty nebo reset hesla | zalozni poskytovatel nebo rucni nouzovy proces |
| Platby a billing | nejde zaplatit, fakturovat nebo zmenit plan | export faktur, seznam aktivnich predplatnych, manualni fallback |
| Support desk | ztrati se komunikace se zakazniky | export ticketu, mailbox fallback, pravidla pro prilohy |
| Analytika | tym ztrati historicke signaly | agregovane reporty, katalog eventu mimo nastroj |
| Monitoring | tym nevidi vypadky nebo chyby | druhy jednoduchy uptime check, manualni kontrola kritickych toku |

Prakticke pravidlo: cim vic dodavatel drzi produkcni data nebo kriticky tok, tim konkretnejsi exit plan potrebuje. Nastroj na kresleni verejnych diagramu muze pockat. Databaze, emaily a billing ne.

### 2. Vypln jednu kartu pro kritickeho dodavatele

Pro kazdeho kritickeho dodavatele staci prvni verze na jednu obrazovku:

```text
Dodavatel:

Kriticky ucel:
[proc bez nej produkt nefunguje nebo ztraci duveru]

Data v dodavateli:
[kategorie dat, ne vsechny sloupce]

Co by se rozbilo pri vypnuti:
[uzivatelsky tok, interni proces, reporting, billing]

Jak exportujeme data:
[format, postup, kdo ma pristup, jak casto testujeme]

Jak dlouho by trval prechod:
[hodiny / dny / tydny + hlavni omezeni]

Nouzovy fallback:
[manualni proces nebo jednodussi nahrada]

Co musime smazat po odchodu:
[data, exporty, tokeny, webhooky, pristupy]

Vlastnik:
[role]

Posledni kontrola:
[datum]
```

Kdyz u polozky "Jak exportujeme data" napises "nevim", neni to selhani. Je to nalez. Selhani by bylo nechat to tak a doufat, ze exportni tlacitko existuje presne ve chvili, kdy ho budes potrebovat.

### 3. Otestuj export pred krizi

Export, ktery nikdo nikdy nezkusil, je podobny zaloze bez restore testu. Na papire uklidnuje, v realite muze zklamat.

U kritickych dodavatelu si aspon jednou vyzkousej:

- vytvorit export,
- otevrit ho bez specialniho nastroje, pokud to jde,
- zkontrolovat, zda obsahuje data, ktera bys potreboval pri migraci,
- zkontrolovat, zda neobsahuje zbytecne osobni nebo citlive informace,
- ulozit ho jen do kontrolovaneho mista,
- smazat testovaci export podle pravidla retence.

**Priklad:**

Support desk umi exportovat tickety jako CSV. Test ukaze, ze prilohy se exportuji zvlast a odkazy expiruji po par dnech. To je dulezite vedet pred odchodem. Exit plan se upravi: pred migraci se exportuji tickety i prilohy, citlive prilohy se prenesou jen tam, kde maji pokracujici ucel, a zbytek se smaze po potvrzeni migrace.

### 4. Navrhni nouzovy fallback

Fallback nemusi byt elegantni. Ma drzet nejdulezitejsi slib po omezenou dobu.

| Tok | Nouzovy fallback |
| --- | --- |
| Demo request | formular docasne posila email primo do kontrolovane schranky |
| Registrace pres magic link | docasne vypnout self-service a prijimat manualni pozvanky |
| Transakcni emaily | druhy poskytovatel pro kriticke sablony nebo rucni odeslani pres mailbox |
| Billing | export aktivnich zakazniku a manualni fakturacni proces |
| Monitoring | externi uptime check plus rucni smoke test hlavniho toku |
| Analytika | agregovany server-side log hlavni konverze bez osobnich detailu |

Nouzovy fallback ma mit jasne omezeni:

```text
Fallback pouzijeme maximalne [doba], jen pro [kriticky tok].
Po dobu fallbacku nesbirame [data navic].
Zakaznikum komunikujeme [dopad a dalsi update].
Po obnoveni zkontrolujeme [data, emaily, faktury, logy].
```

Tahle veta zabrani tomu, aby se "docasne" reseni stalo trvalym provozem, ktery nikdo nikdy nenavrhl.

### 5. Ukonceni dodavatele jako checklist

Kdyz dodavatele vypinas, nejde jen prestat platit fakturu. Musis uklidit data, pristupy a integrace.

Checklist ukonceni:

- [ ] Exportovana data jsou ulozena jen tam, kde maji pokracujici ucel.
- [ ] Testovaci exporty a docasne soubory jsou smazane.
- [ ] Produkcni webhooky, API klice a tokeny jsou zrusene.
- [ ] Uzivatelske ucty v dodavatelskem nastroji jsou odebrane.
- [ ] SSO nebo OAuth aplikace je vypnuta, pokud existovala.
- [ ] DNS, emailove zaznamy nebo tracking skripty uz na dodavatele neukazuji.
- [ ] Privacy dokument, trust page a subprocesor seznam jsou aktualizovane.
- [ ] Zakaznici jsou informovani, pokud to vyzaduje smlouva, DPA nebo dopad na sluzbu.
- [ ] Retence u dodavatele je potvrzena nebo je podana zadost o smazani.
- [ ] Interni runbook rika, co nahradilo puvodni nastroj.

Nejdulezitejsi cast je kontrola po vypnuti. Otevri produkt, projdi hlavni tok a over, ze nikde nezustal mrtvy skript, webhook nebo integrace, ktera potichu pada do logu. Stare integrace maji talent delat hluk presne ve chvili, kdy uz na ne nikdo nemysli.

### 6. 45min postup

```text
00-05 min: Vyber jednoho kritickeho dodavatele.
Napr. email, hosting, billing, support nebo analytiku.

05-15 min: Vypln kartu dodavatele.
Ucel, data, rozbite toky, vlastnik, posledni kontrola.

15-25 min: Najdi export a zkus ho popsat.
Format, rozsah, pristup, omezeni, misto ulozeni.

25-35 min: Navrhni nouzovy fallback.
Co bude fungovat, co nebude, jak dlouho a kdo rozhoduje.

35-40 min: Zapis ukoncovaci checklist.
Tokeny, webhooky, pristupy, data, dokumentace, komunikace.

40-45 min: Vyber jednu opravu.
Napr. doplnit exportni postup, otestovat export, odstranit stary API klic nebo aktualizovat datovou mapu.
```

### Checklist: exit plan dodavatele

- [ ] Kriticti dodavatele jsou oznaceni podle dopadu na produkt, data a zakazniky.
- [ ] Kazdy kriticky dodavatel ma vlastnika a kartu s daty, exportem, fallbackem a vypnutim.
- [ ] Export byl aspon jednou vyzkouseny nebo je zapsane riziko s terminem testu.
- [ ] Nouzovy fallback drzi hlavni slib produktu bez sbirani zbytecnych dat.
- [ ] Ukonceni dodavatele zahrnuje data, tokeny, webhooky, pristupy, dokumentaci a komunikaci.
- [ ] Trust page, privacy dokumenty a seznam subprocesoru se aktualizuji pri relevantni zmene.
- [ ] Testovaci exporty a docasne migracni soubory maji pravidlo smazani.
- [ ] Tym vi, co by se rozbilo prvni hodinu po vypnuti dodavatele.
- [ ] Exit plan se kontroluje aspon u kritickych dodavatelu pri mesicnim nebo kvartalnim auditu.

---

## Prakticka priloha: Mini DPIA pred novou funkci za 60 minut

DPIA, tedy posouzeni vlivu na ochranu osobnich udaju, neni kouzelna compliance ceremonie. Je to strukturovany zpusob, jak se predem zeptat: muze tahle zmena lidem ublizit, zbytecne je sledovat, omezit jejich kontrolu nad daty nebo vytvorit riziko, ktere pak budeme draze vysvetlovat?

GDPR v clanku 35 vyzaduje posouzeni vlivu, pokud je pravdepodobne, ze typ zpracovani povede k vysokemu riziku pro prava a svobody fyzickych osob. Primarni text GDPR je zde: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng. WP29/EDPB metodika k DPIA popisuje kriteria vysokeho rizika a prakticky postup pro vyhodnoceni: https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/data-protection-impact-assessment-dpia_en

U maleho SaaS nemusis delat plnou DPIA pro kazde tlacitko. Ale mini DPIA filtr se hodi pred kazdou zmenou, ktera pridava novy typ dat, noveho dodavatele, automaticke rozhodovani, monitoring uzivatelu, integraci s komunikaci nebo praci s citlivejsim obsahem. Kdyz filtr ukaze vysoke riziko, zastav zkratku a udelej plnejsi posouzeni s pravnikem nebo clovekem odpovednym za ochranu dat.

**Codyho komentar:** Mini DPIA je jako technicky design review, jen misto "spadne nam to?" pridava otazku "bude to divne, nefer nebo neobhajitelne, az se zakaznik zepta?" Obvykle je levnejsi odpovedet pred releasem.

### 1. Kdy mini DPIA spustit

Pouzij ji, pokud nova funkce dela aspon jednu z techto veci:

- sbira novou kategorii osobnich udaju,
- meni ucel existujicich dat,
- posila data novemu dodavateli,
- propojuje data z vice systemu,
- zavadi profilovani, scoring nebo automaticke doporuceni,
- zaznamenava chovani uzivatelu detailneji nez driv,
- pracuje s exporty, mazanim, supportem nebo auditnim logem,
- zveda retenci dat,
- pridava AI zpracovani nad zakaznickym nebo internim obsahem,
- meni pristupy k produkcnim datum.

**Priklad:**

Chces pridat "chytre doporuceni leadu k follow-upu". Pokud model vidi jen agregovany stav pipeline, riziko je mensi. Pokud cte cele emaily, poznamky z callu, jmena klientu a historii obchodnika, mini DPIA musi zcervenat. Ne proto, ze AI je zakazana, ale proto, ze datovy dopad uz neni detail v user story.

### 2. Jednostrankova sablona

```text
Nazev zmeny:

Vlastnik:

Proc zmenu delame:
[produktovy nebo obchodni cil]

Koho se tyka:
[uzivatel / admin / zakaznik zakaznika / navstevnik webu]

Jake data zpracujeme:
[kategorie, ne vsechny sloupce]

Je tam citlivy nebo vysoce rizikovy kontext:
[ano/ne + proc]

Novy ucel zpracovani:
[ano/ne + popis]

Novy dodavatel nebo region:
[ano/ne + kde]

Automaticke rozhodovani, scoring nebo profilovani:
[ano/ne + dopad na cloveka]

Retence:
[jak dlouho a proc]

Pristupy:
[kdo data uvidi]

Export a mazani:
[jak lze data dostat ven nebo odstranit]

Rizika pro cloveka:
[ztrata kontroly, nechtene zverejneni, diskriminace, spam, bezpecnost, reputace]

Opatreni:
[minimalizace, agregace, pseudonymizace, pristupy, logy, souhlas, vypnuti]

Rozhodnuti:
[pokracovat / upravit / zastavit / predat na plnou DPIA]
```

Sablona ma byt kratka. Pokud odpovedi bobtnaji na pet stran, pravdepodobne uz nejde o mini posouzeni a stoji za to udelat plnou DPIA.

### 3. Rizikovy filtr v peti otazkach

| Otazka | Zelena odpoved | Cervena odpoved |
| --- | --- | --- |
| Jsou data nutna pro slibenou hodnotu? | Ano, bez nich funkce nejde dodat. | Sbira se to pro "mozna pozdeji". |
| Rozumi uzivatel, co se deje? | Mikrotext a privacy dokument sedi na realny tok. | Data se pouziji zpusobem, ktery by uzivatel necekal. |
| Lze ucel splnit mensim detailem? | Pouzijeme agregaci, kratkou retenci nebo omezeny vyrez. | Posilame kompletni obsah, protoze je to pohodlne. |
| Je dodavatel kontrolovatelny? | Region, DPA, pristupy, export a mazani jsou jasne. | Nevim, kde data skoncila, ale SDK se snadno instaluje. |
| Ma clovek kontrolu? | Existuje export, oprava, zruseni nebo smazani podle situace. | Data zustanou v systemu bez jasneho konce. |

Kdyz mas jednu cervenou odpoved, zkus navrhnout upravu. Kdyz mas vice cervenych odpovedi nebo se zmena tyka citlivych dat, automatickeho rozhodovani s dopadem na cloveka nebo rozsahleho monitoringu, nepretlacuj to silou. Zastav release a udelej hlubsi posouzeni.

### 4. Opatreni, ktera casto staci

Ne kazde riziko se resi pravnim odstavcem. Casto pomuze produktova nebo technicka uprava:

- Odebrat pole z formulare.
- Zmenit volny text na vyber z kategorii.
- Zkratit retenci surovych dat.
- Ukladat agregaci misto historie jednotlivce.
- Oddelit support obsah od produktove analytiky.
- Omezit pristup podle role.
- Pridat auditni log pro admin akce.
- Vypnout export do dodavatele, dokud neni hotova DPA.
- Pridat jasny mikrotext primo do toku.
- Udelat funkci opt-in tam, kde ji uzivatel nemusi ocekavat.

**Priklad upravy:**

Puvodni navrh: "Budeme nahravat vsechny onboarding cally a AI z nich udela profil zakaznika."

Lepsi navrh: "Call se nahraje jen po jasnem potvrzeni, prepis zustane v EU ulozisti, shrnuti obsahuje jen dohodnute potreby a rozhodnuti, surova nahravka se smaze po 30 dnech, pokud neni potreba k zakaznickemu procesu."

To neni jen privacy zlepseni. Je to i lepsi produktovy design: mene dat, jasnejsi ucel, mensi supportni trapeni.

### 5. 60min postup

```text
00-05 min: Popis zmeny jednou vetou.
Co pridavame a proc.

05-15 min: Sepis data a ucel.
Jake kategorie dat, odkud, kam, proc.

15-25 min: Projdi rizikovy filtr.
Nutnost, ocekavani uzivatele, minimalizace, dodavatel, kontrola.

25-40 min: Navrhni opatreni.
Co odebrat, agregovat, zkratit, omezit, vysvetlit nebo oddelit.

40-50 min: Rozhodni.
Pokracovat, upravit, zastavit, nebo predat na plnou DPIA.

50-60 min: Zapis vystup do issue nebo rozhodovaciho logu.
Vlastnik, opatreni, termin, signal pro znovuotevreni.
```

### Checklist: mini DPIA

- [ ] Je jasne, proc zmenu delame a koho se tyka.
- [ ] Jsou popsane kategorie dat, ucel, systemy, dodavatele a regiony.
- [ ] Je overene, zda nejde o novy ucel zpracovani.
- [ ] Je zkontrolovane, zda zmena nepridava profilovani nebo automaticke rozhodovani s dopadem na cloveka.
- [ ] Data jsou minimalizovana na skutecnou potrebu funkce.
- [ ] Retence ma konec a vlastnika.
- [ ] Pristupy jsou omezene podle role.
- [ ] Export, oprava nebo mazani jsou popsane podle typu dat.
- [ ] Mikrotext a privacy dokument odpovidaji realnemu toku.
- [ ] Cervena rizika maji opatreni, termin a vlastnika.
- [ ] Pokud riziko zustava vysoke, zmena nejde ven bez plnejsiho posouzeni.

---

## AI asistenti v SaaS tymu bez vynaseni dat za 60 minut

AI asistent umi malemu SaaS tymu usetrit hodiny: shrne rozhovor, navrhne varianty textu, pomuze s SQL dotazem, najde mezery v checklistu, pripravi odpoved na support nebo zprehledni incidentovou casovou osu. Stejne rychle ale umi z produktu udelat datovy cednik, pokud do nej tym bez premysleni kopiruje zakaznicke exporty, logy, smlouvy, screenshoty adminu a cele mailboxy.

Privacy-first pristup k AI neni "AI nepouzivat". Je to pouzivat ji tak, aby data, ucel, dodavatel, retence a vystup mely stejne jasna pravidla jako u analytiky, supportu nebo CRM. AI asistent je dodavatel nebo interni system podle toho, kde bezi a co zpracovava. V obou pripadech plati: nejdrive minimalizuj vstup, potom se ptej na genialitu modelu.

**Codyho komentar:** Nejrychlejsi cesta k chytre odpovedi je casto poslat AI vsechno. Nejrychlejsi cesta k rozumnemu provozu je poslat ji jen to, co opravdu potrebuje. Ano, je to mene pohodlne. Ale porad mene bolestive nez vysvetlovat zakaznikovi, proc jeho data skoncila v promptu "jen na chvilku".

### 1. Rozdel AI pouziti podle rizika

Ne kazde pouziti AI ma stejny datovy dopad. Preklad anonymniho marketingoveho odstavce je jiny svet nez analyza produkcnich logu s emaily a tokeny.

| Pouziti | Typicke riziko | Rozumny rezim |
| --- | --- | --- |
| Copywriting bez internich dat | nizke | bez osobnich udaju, bez zakaznickych detailu |
| Shrnuty rozhovor s leadem | stredni | souhlas nebo jasny ucel, minimalizace, odstraneni zbytecnych detailu |
| Support odpoved | stredni | anonymizovat vstup, clovek schvaluje vystup |
| Debug logu | vysoke | redakce tokenu, emailu, IP a obsahu requestu |
| Analytika chovani uzivatelu | vysoke | agregace, zadne volne texty, jasna retence |
| Automaticke rozhodovani o zakaznikovi | velmi vysoke | mini DPIA nebo plnejsi posouzeni pred releasem |

Pravidlo: pokud AI vystup muze ovlivnit zakaznika, cenu, pristup, support prioritu, bezpecnostni rozhodnuti nebo zpracovani osobnich udaju, nepatri do rezimu "zkusime a uvidime". Patri do navrhu, posouzeni a testu.

### 2. Vstup minimalizuj pred promptem

Pred kazdym promptem si poloz pet otazek:

- Potrebuji poslat realna data, nebo staci synteticky priklad?
- Potrebuji cele vlakno, nebo jen relevantni vyrez?
- Obsahuje vstup emaily, telefony, tokeny, adresy, faktury nebo volne texty zakazniku?
- Je v promptu interni obchodni nebo technicka informace, ktera nema opustit tym?
- Bude vystup pouzit verejne, zakaznicky nebo jen interne?

Minimalizace v praxi:

| Puvodni vstup | Lepsi vstup |
| --- | --- |
| cely export leadu z CRM | 5 anonymizovanych radku s kategoriemi a stavem |
| produkcni stack trace s tokenem | redigovany stack trace bez secretu a osobnich udaju |
| cele support vlakno | kratke shrnuti problemu bez jmen a priloh |
| nahravka callu | schvaleny prepis jen relevantni casti |
| screenshot adminu | orezany screenshot bez osobnich dat |

Kdyz si nejsi jisty, pouzij synteticka data. Napriklad misto realneho emailu `jana@klient.cz` pouzij `user@example.eu`. Misto nazvu zakaznika pouzij `zakaznik A`. Misto cele smluvni vety popis situaci vlastnimi slovy.

### 3. Zapis pravidla do tymu

AI policy pro maly tym nemusi byt dlouha. Ma byt dost konkretni, aby clovek vedel, co muze udelat bez ptani a co uz vyzaduje kontrolu.

Sablona:

```text
AI nastroje pouzivame pro:
[copy, brainstorming, kontrolu textu, anonymizovane technicke priklady, interni sablony]

Bez schvaleni neposilame:
[zakaznicka data, osobni udaje, smlouvy, produkcni logy, tokeny, exporty, interni roadmapu]

Povoleny rezim pro citlivejsi praci:
[anonymizace, self-hosted / EU provoz, konkretni dodavatel, DPA, retence]

Vystupy, ktere musi schvalit clovek:
[support odpovedi, pravni texty, security odpovedi, verejne clanky, cenove navrhy]

Kam zapisujeme vyjimky:
[rozhodovaci log / vendor review / mini DPIA]
```

Tahle pravidla zmensuji improvizaci. Kdyz novy clovek v tymu nevi, co je povolene, obvykle vyhraje pohodli. A pohodli ma v datove discipline velmi presvedcivy usmev.

### 4. AI vystup neni pravda, ale navrh

U e-booku, blogu nebo marketingu muze AI pomoct s formulaci. U supportu, prava, bezpecnosti a provozu musi byt vystup zkontrolovany clovekem, ktery rozumi realite produktu.

Kontrola vystupu:

- Fakticka tvrzeni maji zdroj nebo interni dukaz.
- Pravne relevantni formulace nejsou vydavane za pravni radu.
- Bezpecnostni navody neprozrazuji zbytecne interni detaily.
- Vystup neslibuje funkce, ktere produkt nema.
- Vystup neobsahuje vlozena osobni data ze vstupu.
- Ton odpovida znacce a situaci.

**Priklad spatne AI odpovedi pro support:**

> "Vase data jsou u nas vzdy 100% bezpecna a nikdy neopusti Evropu."

**Lepsi kontrolovana odpoved:**

> "Aplikacni data provozujeme v EU regionu a pristupy omezujeme podle role. Pokud potrebujete detail pro vlastni vendor review, poslu vam trust page a DPA postup."

Prvni veta je maximalisticky slib. Druha je overitelna a uzitecna.

### 5. 60min postup

```text
00-10 min: Sepis tri nejcastejsi AI pouziti v tymu.
Napr. support odpovedi, copywriting, debug, meeting shrnuti.

10-20 min: U kazdeho pouziti oznac data.
Osobni, zakaznicka, interni, verejna, anonymizovana.

20-35 min: Nastav pravidla vstupu.
Co se smi poslat, co se musi anonymizovat, co je zakazane.

35-45 min: Nastav kontrolu vystupu.
Ktere vystupy schvaluje clovek a podle jakeho checklistu.

45-55 min: Dopln vendor review.
Dodavatel, region, DPA, retence, export, mazani, vypnuti.

55-60 min: Vyber jednu opravu.
Napr. redakce logu pred promptem, sablona support odpovedi, zakaz realnych exportu.
```

### Checklist: AI bez datove pasti

- [ ] Tym vi, k cemu AI pouziva a k cemu ji nepouziva.
- [ ] Citlive vstupy se minimalizuji, anonymizuji nebo zustavaji mimo AI nastroj.
- [ ] Produkcni logy, tokeny, exporty a cele support vlakna se neposilaji bez redakce.
- [ ] Zakaznicke a osobni udaje maji jasny ucel, dodavatele, retenci a pristupova pravidla.
- [ ] AI dodavatel ma vyplneny vendor review, pokud zpracovava interni nebo zakaznicka data.
- [ ] Vystupy pro zakazniky, pravni texty, security odpovedi a verejne clanky kontroluje clovek.
- [ ] AI nevytvari automaticka rozhodnuti s dopadem na cloveka bez posouzeni rizika.
- [ ] Prompty a vystupy se neukladaji dele, nez je potreba.
- [ ] Verejne sliby o AI odpovidaji tomu, co produkt opravdu dela.
- [ ] Existuje jednoduchy postup, jak AI zpracovani vypnout nebo obejit.

---

## Changelog jako duvera, marketing a provoz za 45 minut

Changelog je casto brany jako technicky odpad z releasu. Par odrazek, ktere nekdo rychle zkopiruje z issue trackeru, aby bylo splneno. Jenze u SaaS je dobre vedeny changelog maly duverovy dokument: zakaznik vidi, ze produkt zije, obchodnik ma co poslat po follow-upu, support ma kam odkazat a tym ma verejnou pamet rozhodnuti.

Privacy-first changelog ma jeste jednu vyhodu. Nemusi byt zavisly na socialni siti, newsletterove platforme ani reklamnim pixelu. Staci stabilni URL, RSS/Atom odber, interni odkaz z aplikace a kratka disciplina pri psani. Zmeny produktu pak nejsou zamcene v cizim feedu, kde je zitra sezere algoritmus a pozitra tri reklamy na boty.

Keep a Changelog popisuje changelog jako kuratovany, chronologicky serazeny seznam vyznamnych zmen pro kazdou verzi projektu a doporucuje psat ho pro lidi, ne pro stroje: https://keepachangelog.com/en/1.1.0/. Semantic Versioning zase dava verzim vyznam pres `MAJOR.MINOR.PATCH`, kde major signalizuje nekompatibilni API zmenu, minor zpetne kompatibilni funkcionalitu a patch opravu: https://semver.org/. Pro SaaS aplikaci nemusis slepe verit kazde open-source konvenci, ale princip je uzitecny: uzivatel ma rychle poznat, co se zmenilo a jestli ho to ovlivni.

**Codyho komentar:** Changelog neni misto pro oslavne fanfary typu "vylepsili jsme uzivatelsky zazitek". To je veta, ktera umi nerict vubec nic s nebetycnou sebeduverou. Napis, co se realne zmenilo, koho se to tyka a co ma clovek udelat.

### 1. Rozhodni, pro koho changelog pises

Jeden produkt muze mit vic vrstev zmen:

| Publikum | Co potrebuje vedet | Kde to patri |
| --- | --- | --- |
| Bezni uzivatele | Nova funkce, zmena chovani, oprava bolesti | Verejny changelog nebo novinky v aplikaci |
| Admini zakaznika | Dopad na prava, data, billing, integrace | Release notes, email adminum, trust page |
| Vyvojari | API zmeny, deprecations, breaking changes | Developer changelog, docs, API reference |
| Interni tym | Proc zmena vznikla, rizika, rollback | Interni release karta |
| Bezpecnost a compliance | Incident, oprava zranitelnosti, subprocesor | Trust page, security notes, cilena komunikace |

Nemichej vse do jednoho hluku. Verejny changelog ma byt srozumitelny pro cloveka, ktery produkt pouziva. Developer notes mohou byt detailnejsi. Interni release karta muze obsahovat odkazy na issue, logy a provozni kontext, ale tyhle detaily nepatri automaticky ven.

### 2. Kazda polozka musi odpovedet na tri otazky

Dobry zaznam odpovi:

- Co se zmenilo?
- Koho se to tyka?
- Co ma uzivatel udelat, pokud vubec neco?

Slaby zaznam:

> Vylepsena integrace fakturace.

Lepsi zaznam:

> Fakturacni export ted umi filtrovat doklady podle mesice a stavu zaplaceni. Tyka se adminu v tarifech Team a Business. Stare exporty zustavaji beze zmeny.

U privacy-first produktu pridavej datovy dopad tam, kde je relevantni:

> Nova integrace s helpdeskem posila jen email zakaznika, ID uctu a text ticketu. Neodesila produktove eventy ani interni poznamky. Integraci lze vypnout v nastaveni workspace.

Tahle veta pomaha obchodne i provozne. Zakaznik nemusi hadat, co se deje s daty, a support ma presnou odpoved.

### 3. Pouzij stale kategorie

Drz malou sadu kategorii, aby se changelog dal rychle scanovat:

| Kategorie | Kdy ji pouzit |
| --- | --- |
| `Added` | Nova funkce nebo nova moznost. |
| `Changed` | Zmena existujiciho chovani. |
| `Fixed` | Oprava chyby. |
| `Deprecated` | Vec bude odstranena nebo nahrazena. |
| `Removed` | Vec uz neni dostupna. |
| `Security` | Bezpecnostni oprava nebo dulezite bezpecnostni upozorneni. |
| `Privacy` | Zmena zpracovani dat, retence, exportu, integrace nebo souhlasu. |

Kategorie `Privacy` neni v kazde konvenci, ale pro evropsky SaaS dava smysl. Zakaznik diky ni rychle najde zmeny, ktere ovlivnuji jeho vendor review, DPA dotazy nebo interni schvalovani.

### 4. Sablona verejneho changelogu

```markdown
## 2026-07-31

### Added

- Pridali jsme export seznamu leadu do CSV pro adminy workspace.

### Changed

- Formular pro demo ted ukazuje presnejsi potvrzeni, co se stane po odeslani.

### Fixed

- Opravili jsme chybu, kvuli ktere se u nekterych leadu nezobrazil zdroj kampane.

### Privacy

- Zkratili jsme retenci technickych logu formularu z 30 na 14 dni. Obsah zpravy se do aplikacnich logu neuklada.

### Action needed

- Pokud pouzivate vlastni exportni skript, zkontrolujte novy sloupec `lead_source`.
```

Nemusis pouzit vsechny sekce v kazdem releasu. Prazdne nadpisy jsou jen ceremonialni sum. Dulezite je, aby se vyznamne zmeny neztratily.

### 5. Co do changelogu nepatri

Verejny changelog neni dump interniho vyvoje. Nepatri do nej:

- cele commit messages,
- interni nazvy zakazniku,
- screenshoty s osobnimi daty,
- presne detaily zranitelnosti pred opravou nebo pred informovanim dotcenych zakazniku,
- roadmap sliby bez rozhodnuti,
- "optimalizace" bez vysvetleni dopadu,
- vtipy na ucet uzivatelu, kteri nahlasili chybu.

U bezpecnostnich oprav pis tak, aby byl zakaznik informovany, ale aby text zbytecne nepomahal utocnikovi. Napriklad: "Opravili jsme chybu v kontrole prav u exportu; dotcene zakazniky jsme kontaktovali primo" je lepsi verejna veta nez technicky navod, kudy se do chyby trefit.

### 6. Distribuce bez platformni pasti

Po vydani releasu pouzij tri vrstvy:

- Verejny changelog na vlastni domene.
- RSS/Atom feed pro odber zmen.
- Cilena zprava jen tem zakaznikum, kterych se zmena tyka.

Neposilej vsechno vsem. Kdyz mala oprava copy v nastaveni prijde jako email cele databazi, ucis zakazniky ignorovat dulezite zpravy. Kdyz breaking change API schovas jen do blogu, ucis je neverit releasum. Distribuce je soucast produktu.

Prakticka pravidla:

- Bezny release patri do changelogu a feedu.
- Zmena, ktera vyzaduje akci, patri i do aplikace nebo emailu pro dotcene role.
- Zmena zpracovani dat patri do trust page, privacy dokumentu nebo cilene komunikace podle dopadu.
- Incident nebo security problem ma vlastni postup, ne marketingovy odstavec.
- Socialni site pouzij jen jako kratke oznameni s odkazem na primarni URL.

### 7. 45min postup

```text
00-05 min: Vyber posledni release nebo poslednich 7 dni prace.
Vezmi issue, PR, support tikety a vlastni poznamky.

05-15 min: Odfiltruj sum.
Vyhod interni refaktory bez dopadu, mechanicke zmeny a drobnosti, ktere uzivatele nemusi cist.

15-25 min: Rozdel zmeny do kategorii.
Added, Changed, Fixed, Security, Privacy, Action needed.

25-35 min: Prepis polozky lidsky.
Co se zmenilo, koho se to tyka, co ma clovek udelat.

35-40 min: Zkontroluj datovy a bezpecnostni dopad.
Zadne osobni udaje, zadne interni detaily, zadne maximalisticke sliby.

40-45 min: Publikuj a rozdistribuuj.
Vlastni URL, feed, cilena zprava dotcenym zakaznikum.
```

### Checklist: changelog, ktery neotravuje

- [ ] Changelog je na vlastni domene nebo v dokumentaci, ne jen v socialnim prispevku.
- [ ] Ma stabilni URL a jde odebiran pres RSS/Atom nebo podobny primarni kanal.
- [ ] Kazda polozka rika, co se zmenilo a koho se to tyka.
- [ ] Zmeny jsou rozdelene do stabilnich kategorii.
- [ ] Breaking changes, deprecations a action needed jsou viditelne.
- [ ] Privacy a security dopady nejsou schovane mezi drobnostmi.
- [ ] Text neobsahuje osobni data, interni nazvy zakazniku ani zbytecne detaily zranitelnosti.
- [ ] Zakaznici dotceni dulezitou zmenou dostanou cilene oznameni.
- [ ] Release notes neobsahuji sliby, ktere produkt jeste nedela.
- [ ] Interni tym vi, kdo changelog pise, kontroluje a publikuje.

---

## Vyber AI nastroje pred prvnim promptem za 45 minut

AI nastroj se do maleho SaaS tymu casto dostane neformalne: nekdo ho vyzkousi na text, nekdo na support odpoved, nekdo na kus kodu a najednou v nem lezi interni kontext, cast logu, export z CRM nebo screenshot zakaznicke administrace. To neni adopce. To je datovy unik v pomalem tempu a s hezkym onboardingem.

Privacy-first pravidlo je jednoduche: pred prvnim produkcnim pouzitim AI nastroje si rozhodni, jaka data do nej smi, jaka nesmi a jak poznas, ze vystup vyzaduje lidskou kontrolu. U evropskeho SaaS to neni jen zdravy rozum. AI Act pracuje s rizikovym pristupem, transparentnosti a povinnostmi pro urcite AI systemy; Evropska komise uvadi, ze pravidla pro GPAI se zacala uplatnovat 2. srpna 2025 a pravidla transparentnosti podle clanku 50 od 2. srpna 2026: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai. Prakticky harmonogram shrnuje AI Act Service Desk: https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act.

Tohle neni pravni rozbor. Je to provozni filtr pro tym, ktery nechce resit compliance az ve chvili, kdy se zakaznik zepta: "A kam jste poslali nase data?"

**Codyho komentar:** AI je skvely pomocnik na zkraceni prace. Ale pokud do nej bez rozmyslu sypes zakaznicka data, neni to produktivita. Je to outsourcing uvazovani i odpovednosti. A to je kombinace, ktera vetsinou zraje spatne.

### 1. Zarad nastroj podle rezimu pouziti

Nejdrive neresis vendor logo. Resis rezim. Stejny model muze byt nizke riziko pro generovani obecneho blogoveho outline a vysoke riziko pro analyzu support ticketu se zakaznickymi daty.

| Rezim | Priklad | Zakladni pravidlo |
| --- | --- | --- |
| Verejny obsah | Navrh titulku, osnovy, obecneho checklistu | Bez osobnich a internich dat, zdroje overit. |
| Interni produktova prace | Shrnuty backlog, anonymizovane poznamky z callu | Posilat jen minimalni kontext a odstranit identifikatory. |
| Kod | Refaktor, testy, vysvetleni chyby | Neposilat secrets, produkcni dumpy ani neverejne pristupy. |
| Support | Navrh odpovedi zakaznikovi | Lidska kontrola povinna, minimalizovat obsah ticketu. |
| Rozhodovani o lidech | Hiring, hodnoceni vykonu, prioritizace kandidatu | Bez pravni a eticke kontroly nepoustet. |
| Citliva data | Zdravotni, financni, detska, biometricka nebo security data | Defaultne zakazat, dokud neni jasny pravni a bezpecnostni ramec. |

U kazdeho rezimu si zapis hranici:

- jaka data smi do promptu,
- jaka data nesmi nikdy,
- kdo muze nastroj pouzit,
- kdy je nutna lidska kontrola,
- kde se uklada vystup,
- jak se vystup oznaci, pokud jde ven.

### 2. Zeptej se na data driv nez na funkce

AI nastroj muze vypadat podobne jako bezny SaaS, ale jeho datova stopa je casto citlivejsi. Prompt umi obsahovat zakaznicke problemy, obchodni plany, logy, kod, osobni udaje i interni rozhodnuti v jednom balicku. Proto potrebujes kratkou vendor kartu.

Sablona vendor karty:

```text
Nastroj:
[nazev a URL]

Ucel:
[na co ho tym pouzije]

Data povolena:
[napr. verejne texty, anonymizovane poznamky, ukazky kodu bez secrets]

Data zakazana:
[osobni udaje, zakaznicke exporty, produkcni logy, smlouvy, tajemstvi]

Region a zpracovani:
[kde jsou data, zda lze zvolit EU, kdo je zpracovatel]

Trenovani na vstupech:
[ano/ne/nastaveni/nejiste]

Retence:
[jak dlouho drzi prompt, vystup, logy]

Pristupy:
[kdo v tymu, role, MFA]

Vypnuti:
[export, smazani, ukonceni uctu]

Vlastnik:
[clovek odpovedny za kontrolu]
```

Kdyz vendor neumi odpovedet na zakladni otazky o zpracovani, retenci a pristupech, neni to automaticky konec. Ale znamena to, ze do nej nepatri citlive ani zakaznicke vstupy.

### 3. Nastav prompt policy pro tym

Prompt policy ma byt kratka. Kdyz ma sest stran, nikdo ji nepouzije. Staci pravidla, ktera clovek udrzi v hlave a ktera se daji kontrolovat.

Minimalni pravidla:

- Neposilej do AI cele zakaznicke exporty.
- Neposilej secrets, tokeny, hesla, privatni klice ani `.env` soubory.
- Neposilej produkcni logy bez redakce osobnich udaju a internich identifikatoru.
- U supportu pouzij anonymizovane shrnuti misto cele konverzace, pokud to staci.
- U pravnich, danovych, bezpecnostnich a zdravotnich tvrzeni over primarni zdroje.
- Vystup AI, ktery jde zakaznikovi nebo verejne ven, musi zkontrolovat clovek.
- Pokud je obsah generovany AI a muze pusobit jako realny obraz, audio, video nebo verejna informacni zprava, res transparentni oznaceni podle pouziti.

Priklad povoleneho promptu:

```text
Prepis nasledujici anonymizovanou support odpoved do klidnejsi cestiny.
Zakaznik resi obecne problem s importem CSV, bez osobnich dat.
Zachovej fakt, ze limit je 10 MB a import lze opakovat.
```

Priklad zakazaneho promptu:

```text
Tady je export supportu za posledni mesic vcetne emailu, jmen klientu a internich poznamek.
Najdi nespokojene zakazniky a napis jim odpoved.
```

Rozdil neni v tom, jestli AI umi pomoct. Rozdil je v tom, jestli tym porad kontroluje data a odpovednost.

### 4. Lidska kontrola neni formalita

AI vystup muze byt stylisticky presvedcivy a fakticky krivy. Proto definuj, co znamena review podle typu prace.

| Vystup | Kontrola pred pouzitim |
| --- | --- |
| Blog nebo marketing | Fakta, zdroje, ton, sliby, SEO metadata, privacy tvrzeni. |
| Support odpoved | Fakticka spravnost, empatie, zadne sdileni interniho kontextu. |
| Kod | Testy, security dopad, licence, zadne vlozene secrets. |
| Produktove rozhodnuti | Zda vychazi z realnych dat, ne jen z hezkeho shrnuti. |
| Pravni nebo compliance text | Primarni zdroje a kontrola odbornikem podle rizika. |

U AI asistenta v produktu je kontrola jeste prisnejsi. Pokud uzivatel komunikuje s botem, musi rozumet, ze komunikuje s AI, pokud to kontext vyzaduje. Pokud AI generuje obsah jmenem produktu, potrebujes logiku, kdo za nej odpovida, jak se hlasi chyba a jak se zabrani vynaseni dat mezi ucty.

### 5. 45min postup

```text
00-05 min: Popis pouziti.
Napis jednu vetu, k cemu ma AI nastroj slouzit a kdo ho bude pouzivat.

05-12 min: Zaraz rizikovy rezim.
Verejny obsah, interni prace, kod, support, rozhodovani o lidech, citliva data.

12-22 min: Vypln vendor kartu.
Data, region, retence, trenovani, pristupy, vypnuti, vlastnik.

22-30 min: Napis prompt policy.
Tri povolene priklady, tri zakazane priklady, lidska kontrola.

30-38 min: Otestuj minimalni vstup.
Pouzij anonymizovany nebo verejny priklad a zkontroluj kvalitu vystupu.

38-45 min: Rozhodni.
Povolit / povolit jen pro verejna data / pilot s omezenim / zakazat.
Zapis rozhodnuti a datum dalsi kontroly.
```

### Checklist: AI nastroj pred adopci

- [ ] Vim, k cemu presne AI nastroj slouzi.
- [ ] Pouziti je zarazene do rizikoveho rezimu.
- [ ] Mam seznam dat, ktera do nastroje smi a nesmi.
- [ ] Vim, zda se vstupy pouzivaji pro trenovani nebo zlepsovani sluzby.
- [ ] Vim, kde jsou data zpracovana a jak dlouho se drzi.
- [ ] Pristup ma jen role, ktere nastroj realne potrebuji.
- [ ] MFA je zapnute u adminu nebo citlivejsich uctu.
- [ ] Prompt policy obsahuje povolene a zakazane priklady.
- [ ] AI vystupy pro zakazniky a verejnost kontroluje clovek.
- [ ] Pravni, bezpecnostni a aktualni tvrzeni se overuji z primarnich zdroju.
- [ ] Je jasne, kdy se AI obsah musi oznacit nebo transparentne vysvetlit.
- [ ] Existuje postup pro export, smazani a vypnuti nastroje.
- [ ] Rozhodnuti ma vlastnika a datum dalsi kontroly.

---

## Rozhodovaci zaznamy pro maly SaaS za 45 minut

Male tymy casto nedoplaci na to, ze udelaly spatne rozhodnuti. Doplaci na to, ze po dvou mesicich nikdo nevi, proc ho udelaly. Pak se stane klasika: vraci se stejna debata, novy clovek otevre stare tema, zakaznik se zepta na hosting a tym lovi odpoved v chatu, kde je mezi tim recept na obed a deset memu. Rozhodovaci zaznam je lek proti zbytecne amnezii.

Nemusi to byt tezka architektonicka ceremonie. Pro maly SaaS staci kratky zapis: co resime, co jsme vybrali, proc, jake alternativy jsme odmitli, jaky ma rozhodnuti dopad na data a kdy ho znovu otevreme. Hodnota neni v dokumentu samotnem. Hodnota je v tom, ze dalsi rozhodnuti uz nezacina od nuly.

### 1. Zapisuj rozhodnuti, ktera meni budouci moznosti

Nezapisuj kazdou barvu tlacitka. Zapisuj veci, ktere maji cenu, riziko nebo dlouhy stin.

Typicky patri do rozhodovaciho zaznamu:

- vyber hostingu nebo regionu,
- zavedeni analytiky, CRM, support nastroje nebo AI asistenta,
- zmena autentizace,
- rozhodnuti sbirat novy typ osobnich udaju,
- zavedeni placeneho planu, trialu nebo pilotu,
- zmena hlavni produktove metriky,
- rozhodnuti nedelat cast funkce, i kdyz ji zakaznici chteji,
- vypnuti integrace nebo dodavatele,
- verejny slib na trust page, ceniku nebo v obchodni nabidce.

Pravidlo: kdyz by sis za tri mesice rekl "proc jsme to takhle sakra udelali?", zapis to. Budouci ty ti za to nepodekuje, protoze bude mit plne ruce prace, ale aspon nebude vypadat jako detektiv bez spisu.

### 2. Pouzij jednu sablonu pro produkt, techniku i privacy

Sablona musi byt dost kratka, aby ji clovek vyplnil hned po rozhodnuti, ne "az bude klid". Klid v SaaS prijde presne tri minuty po tom, co se rozbije produkce, takze na nej nespolivej.

```text
# RZ-YYYY-MM-DD-kratky-nazev

Stav:
Navrh / schvaleno / zruseno / nahrazeno

Kontext:
Co resime a proc ted.

Rozhodnuti:
Co presne delame.

Alternativy:
1. [moznost] - proc ne
2. [moznost] - proc ne

Dopad na zakaznika:
Co se zmeni pro uzivatele, support nebo obchod.

Dopad na data:
Jake osobni, firemni nebo technicke udaje pribudou, zmizi nebo se presunou.

Dopad na provoz:
Monitoring, zalohy, incidenty, pristupy, vendor lock-in, naklady.

Otevrene otazky:
Co jeste nevime.

Kontrola:
Kdy a podle ceho rozhodnuti znovu zkontrolujeme.

Vlastnik:
Kdo hlida, ze se rozhodnuti nezmeni v zapomenuty slib.
```

Nazev "RZ" je zamerne nudny. Klidne pouzij "ADR", "decision log" nebo "produktove rozhodnuti". Dulezite je, aby to slo najit. Idealni ulozeni: `docs/decisions/` v repozitari, nebo interni znalostni baze, ktera ma export a neni zamcena za osobni ucet jednoho cloveka.

### 3. Datovy dopad patri do kazdeho vetsiho rozhodnuti

Privacy-first tym se nepta na data az ve chvili, kdy nekdo pise privacy policy. Pta se pri rozhodnuti. Kdyz vyberas support nastroj, menis datovou mapu. Kdyz pridavas onboarding dotaznik, menis rozsah sberu. Kdyz zapinas session replay, menis ocekavani uzivatele. Kdyz do produktu pridas AI asistenta, menis riziko vynaseni vstupu i vystupu.

Minimalni datova cast rozhodovaciho zaznamu:

| Otazka | Dobra odpoved |
| --- | --- |
| Jake nove udaje sbirame? | Konkretni pole nebo eventy, ne "uzivatelska data". |
| Proc je potrebujeme? | Jedna veta navazana na funkci nebo povinnost. |
| Kde budou ulozene? | System, region, vlastnik. |
| Kdo k nim ma pristup? | Role, ne jmena jen podle momentalni nalady. |
| Jak dlouho zustanou? | Retence nebo spoustec mazani. |
| Jak je zakaznik uvidi nebo smaze? | Export, admin, support proces, automaticke mazani. |

Kdyz na nekterou otazku neumite odpovedet, rozhodnuti jeste neni hotove. Mozna je spravne ho i tak udelat, ale riziko musi byt videt. Neviditelne riziko je nejdrazsi druh optimizmu.

### 4. Rozhodnuti nesmi byt soudni rozsudek

Dobry zaznam neni zbran pro vetu "ale tady je napsano, ze...". Je to stav poznani v urcitem case. Proto do nej patri kontrolni bod.

Priklady kontrol:

- "Zkontrolovat po 30 dnech, jestli novy onboarding zvysil aktivaci bez zvyseni support dotazu."
- "Zkontrolovat pri prvnim enterprise zakaznikovi, jestli zvoleny hosting staci pro DPA pozadavky."
- "Zkontrolovat pred spustenim placenych kampani, jestli analytika meri konverze bez reklamniho sledovani."
- "Zkontrolovat po prvnim incidentu, jestli runbook odpovida realite."

Kdyz rozhodnuti prestane platit, nevymyslej historii. Pripoj novy zaznam a puvodni oznac jako nahrazeny. Transparentni stopa je lepsi nez dokonale vypadajici dokument, ktery prelakovava realitu.

### 5. 45min postup

```text
00-05 min: Vyber rozhodnuti.
Zvol jednu vec, ktera ma dopad na produkt, data, provoz nebo obchod.

05-12 min: Popis kontext.
Proc se rozhoduje ted, co je tlak a co by se stalo bez rozhodnuti.

12-20 min: Napis presne rozhodnuti.
Jedna az tri vety. Bez mlhy, bez "budeme se snazit".

20-28 min: Seznam alternativy.
Minimalne dve odmitnute moznosti a proc neprosly.

28-36 min: Dopad na data a provoz.
Nova data, pristupy, retence, monitoring, zalohy, dodavatele.

36-42 min: Nastav kontrolu.
Datum, metrika nebo udalost, kdy se rozhodnuti znovu otevre.

42-45 min: Uloz a odkazuj.
Dej zaznam do rozhodovaci slozky a pridej odkaz do issue, PR nebo interniho ukolu.
```

### Priklad: kratky rozhodovaci zaznam

```text
# RZ-2026-07-31-analytics-without-ads

Stav:
Schvaleno

Kontext:
Potrebujeme vedet, ktere obsahove kanaly vedou k demo poptavkam.
Nechceme spoustet reklamni pixely ani sledovat uzivatele napric weby.

Rozhodnuti:
Pouzijeme privacy-first analytiku bez cross-site profilu a budeme merit jen page_view,
klik na hlavni CTA, odeslani formulare a chybu formulare.

Alternativy:
1. Reklamni pixel - odmitnuto kvuli zbytecnemu sledovani a cookie slozitosti.
2. Vlastni log analyza - odlozeno, protoze tym ted potrebuje rychlejsi vystup.

Dopad na zakaznika:
Web zustane bez marketingoveho sledovani. Cookie lista nebude potreba, pokud nepridame
jine netechnicke cookies.

Dopad na data:
Nesbirame jmena ani emaily v analytice. Formularova data zustavaji oddelene od eventu.
Retence analytickych eventu se kontroluje mesicne.

Dopad na provoz:
Pridat kontrolu dostupnosti mericiho skriptu a otestovat, ze formular funguje i pri vypadku analytiky.

Kontrola:
Po 30 dnech: jestli metriky pomohly rozhodnout o jednom kanalu a jedne uprave landing page.

Vlastnik:
Produkt + provoz.
```

### Checklist: rozhodovaci zaznamy

- [ ] Zapisujeme jen rozhodnuti s realnym dopadem, ne kazdou drobnost.
- [ ] Kazdy zaznam ma kontext, rozhodnuti, alternativy a vlastnika.
- [ ] U produktovych a technickych zmen je popsany dopad na zakaznika.
- [ ] U vsech vetsich rozhodnuti je popsany dopad na data.
- [ ] U dodavatelu je jasne, kde data lezi a jak se da odejit.
- [ ] U verejnych slibu je jasne, kdo je umi splnit a kontrolovat.
- [ ] Rozhodnuti ma kontrolni bod, ne jen datum vytvoreni.
- [ ] Nahrazena rozhodnuti se nemazou, ale oznaci jako nahrazena.
- [ ] Zaznam je odkazany z issue, PR, roadmapy nebo interniho ukolu.
- [ ] Novy clovek v tymu podle zaznamu pochopi proc, nejen co.

---

## Demo call bez slibu navic za 45 minut

Demo call neni divadelni predstaveni produktu. Je to spolecne overeni, jestli konkretni problem, zakaznikuv kontext a tvoje reseni patri k sobe. Spatne demo ukazuje kazde menu, kazdy filtr a kazdou planovanou funkci. Dobre demo ukazuje cestu od bolesti k vysledku a zaroven chrani tym pred sliby, ktere by pozdeji sebraly mesice vyvoje.

Privacy-first demo ma jeste jednu praci navic: nesmi z obchodniho rozhovoru udelat nenapadny datovy vysavac. Neptej se na informace, ktere nepotrebujes pro posouzeni fitu. Neukladej nahravky, prepisy a interni dokumenty bez jasneho duvodu. A kdyz zakaznik rekne neco o datech, hostingu nebo schvalovacim procesu, zapis to jako obchodni signal, ne jako volnou poznamku v deseti nastrojich.

### 1. Pred callem si vyber jednu hypotezu

Na demo nechod s cilem "ukazat produkt". To je moc siroke. Jdi tam s jednou hypotezou.

Priklady:

- Zakaznik ztraci B2B poptavky kvuli chybejicimu follow-upu.
- Zakaznik chce merit landing page, ale nechce reklamni pixel.
- Zakaznik potrebuje support portal, ale nechce kopirovat data do dalsi platformy.
- Zakaznik ma problem s onboardingem, protoze prvni hodnota prijde pozde.
- Zakaznik resi security/DPA dotazy driv, nez vidi samotny produkt.

Sablona pred callem:

```text
Zakaznik:
Segment:
Co si myslime, ze ho boli:
Co chceme overit:
Jak vypada signal fitu:
Jak vypada signal ne-fitu:
Co nesmime slibit:
Jake data na callu nepotrebujeme:
```

Posledni dva radky jsou dulezite. Obchodni tlak umi z rozumneho SaaS udelat zakazkovou dilnu s cizim roadmap kompasem. Kdyz predem vis, co neslibujes, mas na callu mensi sanci sahnout po vete "to samozrejme umime", ktera v prekladu znamena "vyvojari si pozdeji trochu poplacou".

### 2. Prvnich 10 minut patri realite, ne slidum

Zacni kratkym ramcem a pak se ptej na skutecny stav. Demo ma byt relevantni az po tom, co vis, do jake situace ho zasazujes.

Scenar:

1. "Rad bych nejdriv pochopil, jak to resite dnes, a pak ukazu jen casti, ktere na to sedi."
2. "Kdy jste tenhle problem naposledy resil?"
3. "Co presne se stalo?"
4. "Kdo byl do toho zapojeny?"
5. "Co jste udelali rucne nebo mimo system?"
6. "Kde vznikla ztrata casu, penez nebo duvery?"
7. "Co by se muselo zmenit, aby to pro vas stalo za pilot?"

Neptej se "libi se vam tahle funkce?". Ptej se, co se stalo naposledy. Minule chovani je lepsi kompas nez zdvorile pritakani.

### 3. Ukazuj cestu, ne katalog funkci

Demo by melo mit jeden hlavni tok. Pokud produkt resi lead follow-upy, ukaz cestu od prichozi poptavky k dalsi akci. Pokud resi analytiku, ukaz cestu od kampane k rozhodnuti. Pokud resi support, ukaz cestu od dotazu k odpovedi, ktera nevynasi zbytecna data.

Sablona demo toku:

| Cast | Co ukazat | Co neukazovat |
| --- | --- | --- |
| Problem | Konkretni situace zakaznika | Obecny produktovy manifest |
| Vstup | Minimalni data potrebna pro zacatek | Vsechna dostupna nastaveni |
| Prace | 2 az 3 kroky k vysledku | Kazdy filtr a edge-case |
| Vystup | Rozhodnuti, report, follow-up nebo export | Dekorativni dashboard |
| Kontrola | Kde jsou data, kdo je vidi, jak se da odejit | Slova "to je nekde v nastaveni" |

**Priklad:**

U privacy-first analytiky neukazuj deset grafu navstevnosti. Ukaz jednu landing page, jeden CTA event, jedno odeslani formulare a rucni kvalifikaci leadu. Pak rekni: "Tady vidime, ze partner-web privedl tri relevantni poptavky. Nepotrebovali jsme k tomu reklamni profil navstevnika ani obsah formulare v analytice."

To je obchodne silnejsi nez barevny dashboard, ktery neodpovida na zadne rozhodnuti.

### 4. Privacy otazky preved na rozhodnuti

Kdyz se zakaznik pta na data, neber to jako prekazku v prodeji. Je to znamka, ze uz premysli o realnem nasazeni.

Typicke otazky a dobra reakce:

| Otazka | Dobra reakce |
| --- | --- |
| Kde budou nase data? | Rict aktualni stav presne podle systemu a regionu. Pokud neco neni jiste, oznacit to jako otevreny bod. |
| Mate DPA? | Rict, zda je pripravena, kdo ji resi a v jake fazi prijde do procesu. |
| Muzeme data exportovat? | Ukazat nebo popsat realny export, ne jen slibit "nejak to pujde". |
| Co se maze po ukonceni? | Vysvetlit kategorie dat: account, fakturace, logy, agregace. |
| Pouzivate AI nebo dodavatele? | Rict, kde pomahaji, jaka data do nich smi a jaka ne. |

Kdyz odpoved neznas, nepokousej se znit chytre. Rekni:

```text
Tohle nechci odhadovat. Zapisu to jako security/privacy bod a vratim se s presnou odpovedi:
system, region, typ dat, retence a kdo ma pristup.
```

Tohle je lepsi nez improvizovany slib. Zakaznik si presnost pamatuje. A tym za ni jednou neposle fakturu ve forme vikendove migrace.

### 5. Zaver callu musi mit maly dalsi krok

Na konci dema nesmi zustat mlha typu "ozveme se". Domluv jeden dalsi krok, ktery odpovida urovni fitu.

Moznosti:

- Ne-fit: poslat kratke shrnuti, proc to ted neni vhodne.
- Slaby fit: poslat jeden relevantni clanek, checklist nebo auditni otazku.
- Stredni fit: domluvit technicky call k datum, integracim nebo procesu.
- Silny fit: nabidnout placeny pilot s jasnym vystupem.
- Enterprise fit: poslat security/DPA balicek a navrhnout pilotni rozsah.

Sablona zaveru:

```text
Co jsme slyseli:
[tri konkretni body]

Kde vidime fit:
[jedna az dve veci]

Kde zatim fit nevidime nebo co je otevrene:
[rizika, data, integrace, cena]

Dalsi krok:
[konkretni akce, vlastnik, datum]
```

Pokud dalsi krok nema vlastnika a datum, neni to dalsi krok. Je to prani v kalendari bez kalendare.

### 6. Zapis po callu: mene textu, vic rozhodnuti

Po callu napis kratky zaznam do CRM nebo interni evidence. Neopisuj vsechno. Uloz jen to, co pomaha rozhodnout.

Minimalni zapis:

| Pole | Co zapisovat |
| --- | --- |
| Segment | Typ firmy, role, velikost v rozumnem pasmu. |
| Problem | Konkretni situace, kterou zakaznik popsal. |
| Dnesni workaround | Co pouziva ted a proc to nestaci. |
| Hodnota | Co by se muselo zlepsit, aby zaplatil. |
| Privacy/security body | Dotazy na data, hosting, DPA, export, mazani. |
| Fit | silny / mozny / slaby / ne-fit |
| Dalsi krok | Akce, vlastnik, datum. |
| Co neslibovat | Jasna hranice pro dalsi komunikaci. |

Nepatri tam:

- cele interni dokumenty zakaznika,
- osobni poznamky bez obchodniho ucelu,
- nahravka "pro jistotu",
- obsah, ktery patri do supportu nebo pravniho procesu,
- citlive informace sdilene omylem.

**Codyho komentar:** Dobry demo zapis neni roman. Je to mapa dalsiho rozhodnuti. Kdyz z nej nejde poznat, jestli pokracovat, zmenit nabidku nebo rict ne, byl to jen stenograficky sport.

### 7. 45min postup

```text
00-05 min: Ramovani
Rict cil callu, potvrdit cas a domluvit, ze nejdriv pochopime situaci.

05-15 min: Discovery
Ptani na posledni realny pripad, workaround, dopad a rozhodovatele.

15-30 min: Cileny demo tok
Ukazat jen cestu k jednomu vysledku. Prubezne navazovat na slova zakaznika.

30-36 min: Data a provoz
Projit, jaka data jsou potreba, kde jsou hranice, co je otevrene.

36-41 min: Fit a rizika
Rict nahlas, kde fit vidis a kde zatim ne.

41-45 min: Dalsi krok
Domluvit jednu akci, vlastnika a datum. Zadna mlha.
```

### Checklist: demo call bez slibu navic

- [ ] Pred callem mam jednu hypotezu a signal fitu.
- [ ] Vim, co na callu nesmime slibit.
- [ ] Prvnich 10 minut zjistuje realny stav, neukazuje menu.
- [ ] Demo ma jeden hlavni tok k vysledku.
- [ ] Neukazuji funkce, ktere nesouvisi s problemem zakaznika.
- [ ] Privacy a security otazky zapisuji jako rozhodovaci body.
- [ ] Neznamou odpoved neodhaduji, ale vracim se s presnym follow-upem.
- [ ] Dalsi krok ma vlastnika, datum a jasny vystup.
- [ ] Zapis po callu obsahuje problem, workaround, hodnotu, fit a rizika.
- [ ] Do CRM neukladam citlive nebo zbytecne informace.
- [ ] Po trech az peti demech hledam opakovane vzory v namitkach a slibech.

---

## Follow-up po demu bez natlaku za 45 minut

Demo call bez dobreho follow-upu je jako landing page bez CTA: neco se stalo, mozna to bylo i zajimave, ale nikdo nevi, co ma nasledovat. Cilem follow-upu neni zavalit zakaznika materialy, poslat osm priloh a "jen se pripomenout". Cilem je potvrdit, co jste pochopili, co je otevrene, co se stane priste a jaka data nebo pristupy k tomu opravdu potrebujete.

Privacy-first follow-up ma jeste jednu vrstvu navic: nepreposila citlive detaily napric nastroji, nevytvari zbytecnou evidenci a neslibuje vic, nez produkt a provoz unesou.

### 1. Posli shrnuti do 24 hodin

Rychlost follow-upu neni obchodni trik. Je to signal provozni discipliny. Kdyz se zakaznik pta na security, hosting nebo export dat a odpoved dorazi za tyden jako neupravena hromada poznamek, tezko mu vysvetlis, ze v produktu budete peclivi.

Minimalni struktura emailu:

```text
Predmet: Shrnuti dalsiho kroku po demu: [problem / produkt]

Ahoj [jmeno],

diky za dnesni call. Zapsal jsem si tri veci:

1. Resite [konkretni problem].
2. Dnes to obchazite pres [workaround].
3. Hodnota by pro vas byla [vysledek].

Vidim fit hlavne v:
- [fit 1]
- [fit 2]

Otevrene body:
- [privacy/security/integrace/cena]
- [co overime my / co potrebujeme od vas]

Dalsi krok:
[akce], vlastnik [jmeno], do [datum].

Cody
```

Neposilej kompletni prepis callu. Zakaznik nepotrebuje stenografii. Potrebuje videt, ze rozumis problemu a mas konkretni dalsi krok.

### 2. Oddel obchodni shrnuti od security odpovedi

Kdyz na callu padnou dotazy na data, DPA, region, subprocesory nebo mazani, neposilej je jako volnou vetu mezi obchodnimi argumenty. Udelej kratkou sekci "Data a provoz" a drz se faktu.

Priklad:

```text
Data a provoz
- Kontaktni udaje pouzijeme jen pro obchodni navazani a pilot.
- Do analytiky neukladame obsah formularu ani obsah komunikace.
- Otevreny bod: potvrdit retenci aplikacnich logu pro pilotni prostredi.
- Otevreny bod: poslat seznam subprocesoru pred podpisem pilotu.
```

Tohle je lepsi nez veta "vse je GDPR compliant". Ta casto nic neznamena a hlavne neodpovida na praktickou otazku: co se deje s daty?

**Codyho komentar:** Kdyz obchodnik rekne "GDPR mame poresene", slysim v dalkach slabe piskani produkcniho incidentu. Lepsi je rict pet presnych veci, ktere opravdu plati.

### 3. Pracuj s namitkami jako s produktovym signalem

Namitka neni porazka. Je to informace o tom, co musi byt v produktu, dokumentaci nebo nabidce jasnejsi.

| Namitka | Co znamena | Dobra reakce |
| --- | --- | --- |
| "Musim to probrat s IT." | Produkt vstupuje do dat nebo infrastruktury. | Poslat technicke shrnuti, datovou mapu a navrhnout 20min call s IT. |
| "Nevime, jestli na to mame cas." | Hodnota neni dost konkretni nebo onboarding vypada tezce. | Navrhnout maly pilot s jednim tokem a jasnym vystupem. |
| "Mame uz nastroj." | Neresite kategorii, ale migraci nebo doplnek. | Zeptat se, co stavajici nastroj nezvlada a co nesmite rozbit. |
| "Cena je vysoka." | Bud neni jasna hodnota, nebo segment nesedi. | Vratit se k dopadu problemu, ne okamzite ke sleve. |
| "Co s daty po ukonceni?" | Zakaznik premysli realisticky. | Popsat export, mazani, logy a fakturacni data oddelene. |

Po kazdem tydnu si vyber tri nejcastejsi namitky. Pokud se opakuji, nevyresis je jen lepsim emailem. Patri do landing page, trust page, onboarding materialu nebo produktu.

### 4. Nedelej z follow-upu datovy vysavac

Typicka chyba po demu: "Poslete nam prosim export, pristup do systemu, ukazkova data, seznam uzivatelu a idealne vsechny aktualni procesy." To je moc brzo a moc siroke.

Lepsi pristup:

- Ptej se jen na data potrebna pro dalsi krok.
- Pokud potrebujes ukazkova data, nabidni anonymizovanou sablonu.
- Nepozaduj pristupy, pokud staci screenshot nebo popis toku.
- Nastav datum, kdy pilotni podklady smazes.
- U citlivych dat nejdriv domluv kanal, pristupy a ucel.

Sablona zadosti:

```text
Pro dalsi krok nepotrebujeme pristup do vaseho systemu.
Staci nam anonymizovany priklad jednoho toku:

- odkud vstup prichazi,
- kdo ho resi,
- jak vypada hotovy vystup,
- kde dnes vznikne zdrzeni.

Neposilejte prosim osobni udaje koncovych zakazniku ani interni dokumenty, ktere s tim nesouvisi.
```

Tahle veta chrani obe strany. Zakaznik vidi, ze nehonis data jen proto, ze se nekde daji ulozit.

### 5. Nastav tri mozne dalsi kroky

Follow-up se pise snaz, kdyz predem vis, kam muze vest.

| Signal po demu | Dalsi krok |
| --- | --- |
| Silny fit, jasny problem, vlastnik existuje | Placeny pilot s rozsahem, terminem a vystupem. |
| Dobry fit, ale chybi technicke potvrzeni | Technicky/privacy call s rozhodovateli. |
| Zajem bez bolesti | Poslat edukacni obsah a nechat kontakt v lehke evidenci. |
| Slaby fit | Zdvorile uzavrit a pripadne doporucit jinou cestu. |
| Nejasny problem | Navrhnout kratky discovery call misto dalsiho dema. |

Nejvetsi past je "budeme v kontaktu". To zni mile, ale operacne je to prazdna promenna. Bud existuje dalsi akce, nebo kontakt uzavri.

### 6. 45min postup

```text
00-05 min: Prepis realitu do tri bodu
Problem, workaround, pozadovana hodnota.

05-12 min: Rozhodni fit
Silny / mozny / slaby / ne-fit. Neprikrasluj.

12-22 min: Sepis follow-up
Shrnuti, otevrene body, dalsi krok, vlastnik, datum.

22-30 min: Zkontroluj data
Odstran z emailu citlive detaily, ktere nejsou potreba.

30-38 min: Aktualizuj CRM
Uloz jen rozhodovaci informace: problem, fit, namitky, dalsi krok.

38-45 min: Vytvor jednu zpetnou vazbu pro produkt nebo web
Namitka, nejasnost nebo opakovany dotaz se musi nekam propsat.
```

### Checklist: follow-up po demu

- [ ] Follow-up odchazi do 24 hodin.
- [ ] Email ma tri konkretni pozorovani z callu.
- [ ] Fit je pojmenovany vecne, ne optimisticky.
- [ ] Otevrene privacy/security body jsou oddelene od obchodnich slibu.
- [ ] Neznamou odpoved neodhaduji.
- [ ] Dalsi krok ma vlastnika, datum a vystup.
- [ ] Neptam se na data, ktera nejsou nutna pro dalsi krok.
- [ ] Pokud potrebuji priklad, zadam anonymizovanou sablonu.
- [ ] CRM obsahuje jen rozhodovaci informace.
- [ ] Opakujici se namitku prevadim do produktu, webu nebo dokumentace.
- [ ] Kontakt bez jasne bolesti nenechavam strasit v pipeline navzdy.

---

## Pilotni nabidka bez rozsahove exploze za 60 minut

Po dobrem demu casto prijde nejnebezpecnejsi veta: "Poslete nam prosim nabidku." Zni to jako vyhra. Ve skutecnosti je to test, jestli umis prevest zajem do maleho, kontrolovatelneho zavazku. Spatna nabidka slibi cely budouci produkt, prida tri integrace "pro jistotu", necha otevreny uspech a rozmaze datovou odpovednost. Dobra pilotni nabidka je kratka, konkretni a trochu nudna. Nuda je tady kompliment.

Pilot neni levnejsi enterprise implementace. Je to overeni jedne hodnotove hypotezy v realnem provozu s omezenym rozsahem, jasnym vystupem a dohodnutym rozhodnutim na konci.

**Codyho komentar:** Kdyz pilot nema hranici, neni to pilot. Je to neplacena produktova roadmapa v kostymu obchodni prilezitosti.

### 1. Zacni jednou vetou uspechu

Nez napises cenu, napis vetu, podle ktere bude jasne, zda pilot stal za to.

Sablona:

```text
Pilot bude uspesny, pokud [konkretni tym/role] dokaze do [datum/obdobi]
udelat [konkretni cinnost] s vysledkem [pozorovatelny dopad],
bez [neprijatelny kompromis].
```

Priklady:

- Pilot bude uspesny, pokud obchodni tym do 30 dnu uvidi vsechny nove B2B poptavky na jednom miste a dokaze ke kazde priradit dalsi krok bez sdileni celeho mailboxu.
- Pilot bude uspesny, pokud support do dvou tydnu premeni 20 opakovanych odpovedi na verejnou znalostni bazi a snizi pocet rucnich odpovedi na stejne dotazy.
- Pilot bude uspesny, pokud zakladatel kazde pondeli dostane prehled aktivace novych uctu bez exportu osobnich dat do reklamni analytiky.

Slaba veta uspechu:

```text
Cilem je otestovat, jestli by reseni mohlo byt vhodne.
```

To neni uspech. To je mlha v kozenych botach.

### 2. Rozsah popis jako vystupy, ne jako seznam funkci

Zakaznik kupuje posun. Funkce jsou jen zpusob, jak k nemu dojit. Proto nabidka nemuze byt jen:

- dashboard,
- integrace,
- notifikace,
- administrace,
- export.

Lepsi je popsat vystupy:

| Vystup | Co zakaznik dostane | Co je mimo pilot |
| --- | --- | --- |
| Jedna pilotni cesta | Napriklad prijem poptavky, prirazeni vlastnika a dalsi krok. | Vsechny typy poptavek, vsechny pobocky, vsechny historicke importy. |
| Zakladni nastaveni roli | Kdo vidi pilotni data a kdo muze menit stav. | Plny enterprise permission model. |
| Jeden report rozhodnuti | Prehled, zda pilot setri cas nebo snizuje riziko. | Datovy sklad, reklamni atribuce, osobni profily uzivatelu. |
| Predavaci dokument | Jak pilot funguje, kde jsou data, jak se vypne. | Kompletni provozni manual pro celou firmu. |

V nabidce pouzij vetu:

```text
Pilot je zamerne omezeny na jeden tok. Pokud se behem pilotu objevi dalsi
pozadavky, zapiseme je do backlogu a po vyhodnoceni rozhodneme, zda patri do
dalsi faze.
```

Tahle veta setri tydny zivota. A taky kavu, coz je v malem tymu prakticky menova rezerva.

### 3. Datovou hranici dej do nabidky, ne az do DPA

Privacy-first pilot ma uz v obchodni nabidce rict, jaka data potrebujes a jaka nechces. Neschovavej to az do pravni prilohy. Obchodni vlastnik musi pochopit, ze datova minimalizace je soucast implementace.

Minimalni datovy blok:

```text
Pro pilot potrebujeme:
- pracovni kontakt na pilotni vlastniky,
- popis jednoho procesu,
- anonymizovane nebo synteticke priklady vstupu,
- pristup pouze k systemum nutnym pro dohodnuty tok, pokud nestaci export.

Pro pilot nepotrebujeme:
- kompletni historicka data,
- osobni udaje koncovych zakazniku mimo pilotni ucel,
- pristup do celeho mailboxu,
- produkcni prihlaseni bez casoveho omezeni,
- data, ktera nesouvisi s pilotni hypotezou.
```

Pokud zakaznik potrebuje test na realnych datech, napis to presne:

```text
Pouziti realnych dat schvalime samostatne pred importem. Predem urcime ucel,
rozsah, pristupy, retenci, zpusob smazani a kontakt pro incidenty.
```

To neni brzda obchodu. Je to zpusob, jak pozdeji nevysvetlovat, proc v prototypu lezi data, ktera tam nikdy nemela byt.

### 4. Cena ma krmit rozhodnuti, ne nekonecne ladeni

Pilot zdarma vypada snadneji pro prodej, ale casto vyrobi spatny signal. Zakaznik bez zavazku snadno rekne ano, ale neda cas, data ani rozhodovatele. Placeny pilot nemusi byt drahy. Musi byt dost skutecny na to, aby obe strany jednaly vazne.

Jednoducha struktura:

| Cast ceny | Proc existuje |
| --- | --- |
| Fixni cena pilotu | Kryje pripravu, implementaci a vyhodnoceni. |
| Jasne trvani | Brani tomu, aby se pilot natahl do nekonecna. |
| Volitelna dalsi faze | Oddeli overeni od plne implementace. |
| Kredit do dalsi faze jen vyjimecne | Pouzij jen pokud to nerozbije ekonomiku a nesmaze hodnotu pilotu. |

Veta do nabidky:

```text
Pilot trva 30 dni od zahajeni. Po skonceni probehne vyhodnoceni podle
dohodnutych kriterii a rozhodneme: pokracovat, upravit rozsah, nebo pilot
ukoncit a smazat pilotni data podle dohodnute retence.
```

Vyhni se formulacim:

- "Cena se upresni podle narocnosti."
- "Pilot muze trvat podle potreby."
- "Pripadne dalsi pozadavky zahrneme prubezne."
- "Data si nechame pro budouci analyzu."

Kazda z tech vet zni pratelsky. V provozu je to otevreny ucet.

### 5. Vyhodnoceni naplanuj pred startem

Pilot bez vyhodnoceni je demo, ktere se zapomnelo vypnout. Uz v nabidce napis, kdo a kdy rekne, co dal.

Tabulka vyhodnoceni:

| Oblast | Otazka | Dukaz |
| --- | --- | --- |
| Hodnota | Usetrilo to cas, penize, riziko nebo chaos? | Konkretni priklad pred/po, ne jen pocit. |
| Pouzivani | Pouzil to cilovy tym opakovane? | Pocet dokoncenych pilotnich toku nebo kvalitativni zpetna vazba. |
| Provoz | Slo to provozovat bez rucniho hrdinstvi? | Seznam incidentu, podpory a rucnich zasahu. |
| Data | Zustali jsme v dohodnutem rozsahu dat? | Kontrola importu, pristupu, logu a retence. |
| Obchod | Existuje vlastnik dalsi faze a rozpocet? | Jmeno vlastnika, dalsi krok, termin rozhodnuti. |

Sablona zaverecneho rozhodnuti:

```text
Na konci pilotu zvolime jednu ze tri variant:

1. Pokracujeme do placene faze s rozsahem [X].
2. Prodlouzime pilot pouze kvuli overeni [konkretni nejasnost] do [datum].
3. Pilot ukoncime, exportujeme domluvena data a zbytek smazeme do [datum].
```

Varianta "nechame to otevrene" v seznamu neni. Pokud ji nekdo potrebuje, znamena to, ze chybi vlastnik nebo hodnota.

### 6. 60min postup

```text
00-08 min: Napis jednu vetu uspechu
Kdo, co, do kdy, s jakym dopadem a bez jakeho kompromisu.

08-18 min: Omez rozsah
Jeden tok, jeden tym, jeden vystup. Zbytek do backlogu.

18-30 min: Sepis datovou hranici
Co potrebujeme, co nepotrebujeme, jak dlouho data zustanou.

30-40 min: Navrhni cenu a trvani
Fixni pilot, jasny konec, oddelena dalsi faze.

40-50 min: Dopln vyhodnoceni
Kriteria, vlastnik, datum rozhodnuti, tri mozne vysledky.

50-60 min: Zkontroluj sliby
Vyhod vse, co zni jako neomezena implementace, garance bez dukazu nebo
datovy pristup "pro jistotu".
```

### Checklist: pilotni nabidka

- [ ] Nabidka ma jednu vetu uspechu.
- [ ] Pilot overuje jeden tok, ne celou produktovou vizi.
- [ ] Vystupy jsou popsane jazykem zakaznicke hodnoty.
- [ ] Je jasne, co je mimo rozsah.
- [ ] Datova hranice je primo v nabidce.
- [ ] Nepozaduji kompletni historicka data, pokud nejsou nutna.
- [ ] Realna data maji samostatne schvaleni, ucel, pristupy a retenci.
- [ ] Pilot ma pevne trvani a datum vyhodnoceni.
- [ ] Cena nevytvari nekonecny zavazek.
- [ ] Na konci jsou jen tri rozhodnuti: pokracovat, cilene prodlouzit, nebo ukoncit.
- [ ] Ukonceni obsahuje export, smazani a vlastnika.
- [ ] Vsechny nove pozadavky jdou do backlogu, ne rovnou do pilotu.

---

## Demo sandbox bez zakaznickych dat za 45 minut

Demo sandbox je prostredi, kde muze zakaznik pochopit produkt bez toho, aby ti hned predal produkcni data, pristupy do internich systemu nebo exporty, ktere budou za mesic smutne lezet v testovaci databazi. Pro maly SaaS je to jedna z nejlepsich privacy-first investic: zrychluje prodej, chrani duveru a zmensuje provozni riziko.

Sandbox neni jen "testovaci ucet". Je to promysleny pribeh produktu s bezpecnymi daty. Ma ukazat realnou hodnotu, ale nesmi predstirat, ze fiktivni data jsou dukaz produkcni pripravenosti. Zakaznik musi videt, co produkt dela, jaka data by normalne potreboval a kde zacina skutecna implementace.

**Codyho komentar:** Nejhorsi demo je takove, ktere potrebuje realny export zakaznika jen proto, aby vypadalo zajimave. Pokud produkt umi vysvetlit hodnotu, umi ji ukazat i na bezpecnem prikladu. Pokud ne, problem neni v datech.

### 1. Vyber jeden demo scenar

Sandbox nema ukazat vsechny funkce. Ma ukazat jeden typicky posun. Vyber scenar, ktery odpovida hlavni nabidce produktu.

Priklady:

| Produkt | Demo scenar | Co ma zakaznik pochopit |
| --- | --- | --- |
| CRM pro male studio | Nova poptavka, dalsi krok, follow-up po trech dnech. | Produkt brani ztracenym obchodnim prilezitostem. |
| Monitoring | Endpoint spadne, prijde alert, vznikne incident poznamka. | Produkt zkracuje reakci a drzi historii. |
| Znalostni portal | Support dotaz se zmeni na verejnou odpoved. | Opakovane odpovedi se meni na trvalou znalost. |
| Analytika | Landing page vede k demo requestu a kvalifikovanemu leadu. | Mereni pomaha rozhodovat bez reklamniho profilu. |
| Fakturacni workflow | Navrh faktury projde kontrolou a odeslanim. | Produkt zmensuje chyby v pravidelnem procesu. |

Dobry scenar ma zacatek, konflikt a vysledek:

```text
Zacatek: prisel novy vstup nebo problem.
Konflikt: bez produktu by se ztratil, zpozil nebo resil rucne.
Vysledek: produkt ukaze dalsi krok, rozhodnuti nebo hotovy vystup.
```

Nesnaz se v sandboxu ukazat vsechno. Kdyz demo potrebuje petnact minut orientace v menu, neni to demo. Je to prohlidka skladu.

### 2. Vytvor synteticka data jako produktovy material

Synteticka data nejsou nahodny lorem ipsum. Maji pusobit realisticky, ale nesmi patrit skutecnemu zakaznikovi, cloveku ani firme. Cilem je ukazat tvar problemu, ne prenest realitu do testu.

Pravidla:

- Nepouzivej jmena realnych zakazniku, leadu, zamestnancu ani firem.
- Nepouzivej skutecne emaily, telefony, adresy, ICO, faktury ani domeny klientu.
- Nepouzivej exporty z produkce "jen anonymizovane", pokud anonymizaci neumite overit.
- Dej datum realisticke rozdily: ruzne stavy, chyby, opozdene kroky, prazdne hodnoty.
- Oznac demo data jako demo data primo v rozhrani.
- Udrzuj dataset maly. Sandbox neni datovy sklad.

Jednoducha struktura demo datasetu:

| Kategorie | Priklad bezpecneho obsahu |
| --- | --- |
| Kontakty | `anna.demo@example.test`, `Petr z ukazkove agentury` |
| Firmy | `Severni Studio`, `Atlas Demo s.r.o.` |
| Zakazky | `Redesign poptavkove stranky`, `Audit formularu` |
| Udalosti | `Poptavka prisla v pondeli`, `Follow-up ceka 3 dny` |
| Chyby | `Chybi vlastnik`, `Nejasny dalsi krok` |

Pouzij rezervovane nebo testovaci domeny tam, kde to jde. `example.test` nebo `example.com` je lepsi nez domyslet adresu, ktera nahodou patri skutecne firme. Mala vec, velky rozdil. Internet si pamatuje trapasy velmi ochotne.

### 3. Oddel demo rezim od produkce

Sandbox muze byt samostatne prostredi, demo tenant nebo predpripraveny ucet. Dulezite je, aby mel jasne hranice.

Minimalni hranice:

- Demo ucet nema pristup k produkcnim datum jinych zakazniku.
- Demo akce neposilaji skutecne emaily mimo kontrolovane testovaci adresy.
- Integrace jsou vypnute, mockovane nebo pripojene jen na testovaci endpointy.
- Platby, faktury a notifikace maji testovaci rezim.
- Logy ze sandboxu se nedrzi dele, nez je potreba.
- Po kazdem demu lze sandbox resetovat do znameho stavu.

Tabulka rizik:

| Riziko | Opatreni |
| --- | --- |
| Demo omylem posle email realne osobe. | Povolit jen whitelist testovacich adres. |
| Zakaznik nahraje realna data do sandboxu. | Viditelne upozorneni a blokace uploadu, pokud neni potreba. |
| Obchodnik upravi demo data a rozbije dalsi demo. | Resetovatelny seed nebo snapshot. |
| Sandbox ma stejna prava jako produkce. | Samostatne role a omezeny scope. |
| Demo logy obsahuji citlive vstupy. | Kratka retence, maskovani a zakaz volnych textu v logach. |

V rozhrani pouzij jednoduchy banner:

```text
Demo rezim: pracujete se syntetickymi daty. Nevkladejte realna osobni ani zakaznicka data.
```

Tohle neni alibi. Je to provozni brzda proti lidske rychlosti. Lide umi nahrat CSV do cehokoli, co ma tlacitko "Import".

### 4. Ukaz datovou hranici primo v demu

Privacy-first demo nemusi mit dvacetislajdovou vsuvku o GDPR. Staci ukazat datovou hranici ve chvili, kdy na ni zakaznik prirozene narazi.

Priklady mikrotextu:

- U importu: "Pro demo pouzijte jen synteticky soubor. Realny import resime az v pilotu s dohodnutym rozsahem a retenci."
- U integrace: "V demu je integrace simulovana. Produkcni pripojeni vyzaduje schvaleni pristupu a vlastnika dat."
- U reportu: "Report pracuje s agregovanymi demo udaji, ne s osobnimi profily."
- U exportu: "Export ukazuje format dat, ktery lze pouzit pri ukonceni nebo migraci."

Datovou hranici ukaz i obchodne:

```text
V demu nebudeme potrebovat vase produkcni data. Pokud se rozhodnete pro pilot,
spolecne urcime minimalni datovy rozsah, pristupy, retenci a zpusob smazani.
```

Takova veta snizuje treneni u opatrnych firem. Zakaznik nemusi hned resit, zda ti muze poslat interni export. Nejdriv pochopi hodnotu. Pak se bavite o odpovednem provozu.

### 5. Po demu uklid

Sandbox je zdroj duvery jen tehdy, kdyz se udrzuje. Jinak se z nej rychle stane historicke muzeum rozbitych ukazek.

Po kazdem demu udelej kratky uklid:

- Resetuj demo data do vychoziho stavu.
- Smaz pripadne vstupy, ktere zakaznik omylem vlozil.
- Zkontroluj, ze nevznikly skutecne notifikace, pozvanky nebo exporty.
- Zapis otazky zakaznika bez zbytecnych osobnich detailu.
- Pokud se objevila nova namitka, preved ji do webu, FAQ, trust page nebo produktu.
- Pokud demo vyzadovalo improvizaci, rozhodni, zda upravit sandbox nebo prodejni scenar.

Sablona zapisu po demu:

```text
Zakaznik: [firma nebo segment]
Scenar: [ktery demo tok jsme ukazali]
Co pochopil rychle:
Co bylo nejasne:
Privacy/security dotazy:
Data vlozena do sandboxu: zadna / smazano / vyzaduje kontrolu
Dalsi krok:
Uprava sandboxu:
```

Neukladej do zapisu cele citace, screenshoty se zakaznickymi daty ani technicke detaily, ktere nepotrebujes pro dalsi krok. Obchodni pamet ma byt uzitecna, ne hladova.

### 6. 45min postup

```text
00-07 min: Vyber jeden demo scenar
Kdo ma co pochopit a jaky vysledek uvidi.

07-17 min: Navrhni synteticky dataset
5 az 15 polozek, realisticke stavy, zadna realna identita.

17-27 min: Zkontroluj hranice sandboxu
Emaily, integrace, platby, logy, reset, prava.

27-35 min: Dopln mikrotexty
Kde jsou data demo, kde by zacinal pilot, co se nema vkladat.

35-42 min: Projdi demo jako zakaznik
Jedna cesta od problemu k vysledku bez vysvetlovaci mlhy.

42-45 min: Pridej uklidovy checklist
Co se po demu resetuje, maze a zapisuje.
```

### Checklist: demo sandbox

- [ ] Sandbox ukazuje jeden hlavni scenar, ne cely produktovy katalog.
- [ ] Demo data jsou synteticka a nejsou odvozena z produkcnich exportu.
- [ ] Zadna demo hodnota neobsahuje realny email, telefon, adresu nebo klientsky identifikator.
- [ ] Demo ucet nema pristup k produkcnim datum.
- [ ] Emaily, notifikace, platby a integrace jsou v testovacim nebo mock rezimu.
- [ ] V rozhrani je jasne videt, ze jde o demo data.
- [ ] Uzivatel je varovan, aby nevkladal realna data.
- [ ] Sandbox lze resetovat do znameho stavu.
- [ ] Po demu se maze vse, co zakaznik omylem vlozil.
- [ ] Zapis po demu obsahuje rozhodovaci poznatky, ne zbytecna osobni data.
- [ ] Datova hranice pro budouci pilot je vysvetlena pred importem realnych dat.
- [ ] Otazky z dema se vraci do produktu, webu, FAQ nebo trust page.

---

## Kvalifikace leadu bez CRM bordelu za 45 minut

Lead po demu, formulare nebo pilotni poptavce neni trofej do tabulky. Je to nedokoncene rozhodnuti. Bud ma jasny problem, vlastnika, dalsi krok a rozumny fit, nebo jen zabira misto v pipeline a tvari se jako obchodni prilezitost. Maly SaaS nepotrebuje slozity scoring model. Potrebuje rychle poznat, komu pomoct hned, koho edukovat, koho slusne odmitnout a jaka data u toho vubec nema sbirat.

Privacy-first kvalifikace ma jednoduchou vyhodu: kdyz si predem reknes, co potrebujes vedet pro rozhodnuti, CRM se nestane skladistem nahodnych osobnich detailu, prepisu callu a exportu "pro pozdeji". Mene dat, vic jasnosti. Radikalne nenapadne, skoro az podezrele prakticke.

**Codyho komentar:** Nekvalifikovany lead neni pipeline. Je to odkladiste optimismu. Optimismus je fajn do pondelni kavy, horsi je jako prodejni system.

### 1. Kvalifikuj podle rozhodnuti, ne podle dojmu

Zakladni otazka neni "vypada to zajimave?". Zakladni otazka je: "Vime, co ma byt dalsi konkretni krok, a mame duvod ho udelat?"

Pouzij pet poli:

| Pole | Co zjistit | Proc to staci |
| --- | --- | --- |
| Problem | Jakou konkretni situaci chce zakaznik zmenit. | Bez problemu prodavas kategorii, ne vysledek. |
| Dopad | Co se stane, kdyz problem zustane. | Oddeli bolest od zvedavosti. |
| Vlastnik | Kdo muze rozhodnout nebo posunout dalsi krok. | Bez vlastnika se lead rozplyne. |
| Data/provoz | Jaka data, integrace nebo pravidla vstupuji do hry. | Privacy a security nejsou dodatek po prodeji. |
| Dalsi krok | Co se stane, kdo to udela a do kdy. | Bez terminu je to jen mila konverzace. |

Stav leadu drz jednoduchy:

| Stav | Kdy ho pouzit | Dalsi akce |
| --- | --- | --- |
| `new` | Prisla poptavka, jeste neni pochopena. | Do 24 hodin odpovedet nebo naplanovat discovery. |
| `qualified` | Problem, vlastnik a dalsi krok jsou jasne. | Poslat pilot, demo, technicky call nebo nabidku. |
| `educate` | Problem existuje, ale nacasovani nebo vlastnik chybi. | Poslat konkretni obsah a nastavit lehky follow-up. |
| `not_fit` | Segment, potreba nebo datovy pozadavek nesedi. | Slusne uzavrit, pripadne doporucit jinou cestu. |
| `closed` | Zakaznik koupil, odmitl nebo nereaguje po domluvenem limitu. | Uklidit pipeline a dodrzet retenci dat. |

Vyhni se stavum typu `maybe`, `hot`, `super hot`, `call later asi` a dalsim malym pomnickum vnitrni bezradnosti. CRM ma pomahat rozhodovat, ne skladovat naladu obchodnika.

### 2. Lead score udrz lidsky a vysvetlitelny

Skore muze byt uzitecne, pokud se da vysvetlit jednou vetou. Nechces tajemny soucet dvaceti signalu, kteremu nikdo neveri a vsichni ho rucne obchazeji.

Jednoducha matice:

| Signal | 0 bodu | 1 bod | 2 body |
| --- | --- | --- | --- |
| Problem | Obecny zajem | Popsana oblast | Konkretni opakovany pripad |
| Dopad | Nejasny | Cas nebo frustrace | Penize, riziko, ztracene obchody |
| Vlastnik | Neznamy | Influencer | Rozhodovatel nebo jasny sponsor |
| Nacasovani | Nekdy | Tento kvartal | Ted nebo do 30 dnu |
| Privacy/provoz fit | Nejasny | Otevrene otazky | Nase privacy-first hodnota je vyhoda |

Interpretace:

- 8 az 10 bodu: kvalifikovany lead, res dalsi krok rychle.
- 5 az 7 bodu: mozny fit, dopln chybejici odpovedi.
- 0 az 4 body: edukace nebo uzavreni, nehonit za kazdou cenu.

Skore neni pravda. Je to pomucka pro prioritu. Pokud ma lead nizke skore, ale strategicky dava smysl, zapis duvod slovy. Pokud ma vysoke skore jen proto, ze nekdo klikl na pet stranek, brzdi. Kliky nejsou bolest. Bolest je bolest.

### 3. CRM zaznam ma byt maly, ale rozhodovaci

Do CRM patri jen informace, ktere pomahaji obchodu, podpore, implementaci nebo privacy rozhodnuti. Zbytek patri pryc.

Minimalni zaznam:

```text
Firma/segment:
Kontaktni role:
Zdroj:
Problem jednou vetou:
Dnesni workaround:
Dopad:
Vlastnik rozhodnuti:
Privacy/security/provozni otazky:
Fit: qualified / educate / not_fit
Dalsi krok:
Vlastnik u nas:
Datum dalsiho kroku:
Co neslibovat:
Retence / uklid:
```

Co do CRM nepatri:

- cele prepisy callu,
- osobni poznamky bez obchodniho ucelu,
- interni dokumenty zakaznika,
- screenshoty s produkcnimi daty,
- volne kopie emailu, pokud staci shrnuti,
- osobni udaje dalsich lidi, kteri nejsou soucasti rozhodnuti.

Pokud si nejsi jisty, jestli informaci ulozit, zeptej se: "Kdo podle toho udela jakou akci?" Kdyz odpoved neexistuje, neukladej to. CRM neni pamet internetu. Dikybohu.

### 4. Nadefinuj tri rychle reakce

Kvalifikace bez reakce je jen trideni. Pro kazdy vysledek mej pripraveny dalsi krok.

**Kvalifikovany lead**

```text
Ahoj [jmeno],

diky za kontext. Vidim dobry fit v tom, ze resite [problem] a potrebujete
[vysledek] bez [datovy/provozni kompromis].

Navrhuji dalsi krok: [demo / pilotni nabidka / technicky call] do [datum].
Predem nepotrebujeme zadna produkcni data. Pokud bude potreba ukazka procesu,
staci anonymizovany priklad podle sablony.

Cody
```

**Lead k edukaci**

```text
Ahoj [jmeno],

zatim bych to netlacil do pilotu. Z toho, co pisete, je hlavni otevreny bod
[problem / vlastnik / nacasovani].

Posilam konkretni material k [tema]. Pokud se dostanete do situace [signal],
dava smysl navazat 20min callem.

Cody
```

**Ne-fit**

```text
Ahoj [jmeno],

diky za popis. Tady bych byl opatrny: podle toho, co potrebujete, nejsme ted
nejlepsi cesta hlavne kvuli [duvod].

Nechci slibovat reseni, ktere by bylo mimo nas aktualni rozsah. Pokud se zadani
zmeni smerem k [oblast, kde fit existuje], rad se k tomu vratim.

Cody
```

Slusne "ne" je obchodni aktivum. Chrani kapacitu, reputaci i produkt. A obcas se z nej za pul roku vrati mnohem lepsi zakaznik, protoze si pamatuje, ze jsi neprodal blbost.

### 5. Uklid pipeline kazdy tyden

Pipeline starnou rychle. Bez uklidu v nich zustanou kontakty, ktere nemaji vlastnika, datum ani duvod existence.

Tydenni uklid:

- Vsechny `new` leady starsi nez 7 dni musi mit odpoved nebo uzavreni.
- Vsechny `qualified` leady musi mit dalsi krok s datem.
- Vsechny `educate` leady musi mit duvod, proc zustavaji v evidenci.
- Vsechny `not_fit` leady se uzaviraji a nekrmi marketingovym optimismem.
- U starych leadu zkontroluj, zda jeste existuje ucel pro drzeni kontaktu.
- Opakujici se namitky preved do webu, FAQ, trust page nebo produktu.

Sablona tydenniho prehledu:

```text
Nove leady:
Kvalifikovane leady:
Leady k edukaci:
Uzavrene ne-fit:
Nejcastejsi namitka tydne:
Nejcastejsi privacy/security dotaz:
Jedna uprava webu nebo produktu:
Lead data k uklidu:
```

Jedna uprava tydne staci. Kdyz kazdy tyden z jednoho opakovaneho dotazu vznikne lepsi text, sablona nebo produktovy detail, prodej se postupne zjednodusuje. Ne magicky. Proste nudne spravne.

### 6. 45min postup

```text
00-08 min: Vyber leady
Projdi nove poptavky, posledni dema a otevrene follow-upy.

08-18 min: Dopln pet rozhodovacich poli
Problem, dopad, vlastnik, data/provoz, dalsi krok.

18-25 min: Pridej jednoduche skore
Nepocitej klikaci magii. Hodnot realnou bolest, vlastnika a nacasovani.

25-32 min: Rozhodni stav
Qualified, educate, not_fit nebo closed. Zadna mlha.

32-40 min: Odesli dalsi reakci
Pouzij jednu ze tri sablon a uprav ji podle reality.

40-45 min: Uklid CRM
Smaz zbytecne detaily, zapis namitku tydne a jednu zmenu pro web nebo produkt.
```

### Checklist: kvalifikace leadu

- [ ] Kazdy lead ma problem popsan jednou konkretni vetou.
- [ ] Vim, jaky dopad problem ma a proc se ma resit ted.
- [ ] Je jasny vlastnik na strane zakaznika.
- [ ] Je jasny vlastnik dalsi akce u nas.
- [ ] Privacy/security/provozni otazky jsou zapsane oddelene od obchodnich dojmu.
- [ ] CRM neobsahuje cele prepisy, produkcni data ani zbytecne osobni detaily.
- [ ] Lead ma stav `qualified`, `educate`, `not_fit` nebo `closed`.
- [ ] Kvalifikovany lead ma dalsi krok s datem.
- [ ] Lead k edukaci ma duvod, proc zustava v evidenci.
- [ ] Ne-fit lead je slusne uzavreny.
- [ ] Kazdy tyden uklizim pipeline a stare kontakty bez ucelu.
- [ ] Opakovane namitky se vraci do webu, produktu, FAQ nebo trust page.

---

## Predavka z obchodu do onboardingu bez ztraty kontextu za 45 minut

Kdyz lead projde kvalifikaci, demo dopadne dobre a zakaznik rekne ano, prichazi moment, kde male SaaS tymy casto ztraci duveru. Obchodnik slibil vysledek, zakladatel ma v hlave tri detaily z callu, vyvojar vidi jen obecny ukol "nastavit klienta" a zakaznik musi vsechno vysvetlovat znovu. To neni onboarding. To je reset konverzace s horsi naladou.

Dobry handoff neni dlouhy dokument. Je to kratka predavka, ktera prevede obchodni slib do provozni reality: co ma zakaznik ziskat, co bylo opravdu dohodnuto, jaka data jsou potreba, kdo je vlastnik a kde jsou hranice. Privacy-first pristup tady pomaha, protoze nuti oddelit uzitecny kontext od datoveho smeti.

**Codyho komentar:** Zakaznik nema poznat, kde u vas konci prodej a zacina implementace. Ma poznat jen to, ze tym vi, co dela. Interni chaos je funkcni detail, ne zakaznicka zkusenost.

### 1. Handoff zacina poslednim obchodnim slibem

Predavka se nema psat od nuly. Zacina u posledniho slibu, ktery zakaznik slysel nebo dostal emailem. Pokud se v nabidce pise "pilot overi follow-up neodpovezenych poptavek do 30 dnu", onboarding nesmi zacit obecnou vetou "nastavime CRM".

Minimalni handoff karta:

```text
Zakaznik / segment:
Kontaktni vlastnik:
Interni vlastnik:
Slibeny vysledek:
Pilotni nebo prvni tok:
Co je mimo rozsah:
Data potrebna pro start:
Data, ktera nechceme:
Privacy/security otevrene body:
Prvni zakaznicky milnik:
Datum dalsiho rozhodnuti:
```

Tri pole jsou kriticka:

| Pole | Proc je dulezite |
| --- | --- |
| Slibeny vysledek | Brani tomu, aby onboarding sklouzl do seznamu funkci. |
| Co je mimo rozsah | Chrani tym pred tichym rozsirovanim pilotu. |
| Data, ktera nechceme | Pripomina, ze minimalizace dat je aktivni rozhodnuti. |

Slovo "slibeny" ber vazne. Pokud nevis, co bylo slibeno, nepokracuj v implementaci podle dojmu. Nejdriv srovnej realitu s obchodem a zakaznikem. Lepsi je jedna neprijemna upresnujici veta pred startem nez tri tydny dodavat neco, co nikdo nekoupil.

### 2. Preved zajem na prvni milnik

Onboarding neni "nastaveni vseho". Prvni faze ma mit jeden milnik, po kterem zakaznik citelne pozna hodnotu.

Priklady:

| Produkt | Spatny start | Lepsi prvni milnik |
| --- | --- | --- |
| CRM pro male studio | Importovat vsechny kontakty. | Prvni nova poptavka ma vlastnika a follow-up datum. |
| Analytics | Zapnout vsechny eventy. | Vidime navstevu, CTA klik a odeslani formulare bez obsahu formulare. |
| Knowledge base | Prevest cely archiv supportu. | Publikovat 10 odpovedi na nejcastejsi dotazy. |
| Workflow tool | Zmapovat celou firmu. | Jeden schvalovaci tok projde od vstupu k vystupu. |
| Monitoring | Sledovat vsechny systemy. | Jeden kriticky endpoint ma alert, vlastnika a runbook. |

Sablona milniku:

```text
Prvni onboardingovy milnik je hotovy, kdyz [role] dokaze [akce]
na [jednom toku / jednom datasetu / jednom procesu] bez [kompromis]
a tym vi, jak se vysledek overi.
```

Priklad:

```text
Prvni milnik je hotovy, kdyz obchodni vlastnik dokaze u nove poptavky videt
stav, vlastnika a dalsi krok bez toho, aby nam daval pristup do celeho mailboxu.
```

To je lepsi nez "nastaven onboarding", protoze se podle toho da pracovat, testovat i rozhodovat.

### 3. Datovy start udelej jako kontrakt

Nejnebezpecnejsi veta v onboardingu je: "Poslete nam, co mate, nejak se v tom zorientujeme." To je pozvanka k datovemu bahnu. Zakaznik posle exporty, screenshoty, historicke tabulky, pristupy a interni dokumenty. Tym je ulozi na pet mist, cast z toho nepotrebuje a za pul roku nikdo nevi, proc to existuje.

Lepsi je datovy start:

```text
Pro prvni milnik potrebujeme:
- [datova kategorie 1] v rozsahu [konkretni limit],
- [datova kategorie 2] pouze anonymizovane nebo synteticky,
- kontakt na vlastnika procesu,
- potvrzeni, kde smime data drzet a do kdy je uklidime.

Pro prvni milnik nepotrebujeme:
- kompletni historii,
- pristup do celeho systemu,
- osobni data lidi mimo pilotni tok,
- produkcni exporty bez predem schvaleneho ucelu,
- data poslana pres nehlidany kanal.
```

Datovy kontrakt patri do onboardingove zpravy i interni karty. Kdyz zakaznik posle vic, nez bylo dohodnuto, neni to bonus. Je to uklidovy ukol.

Prakticke pravidlo:

- Co neni potreba pro prvni milnik, nevyzaduj.
- Co prislo omylem, smaz nebo vrat do schvaleneho toku.
- Co musi zustat, oznac ucelem, vlastnikem a retenci.
- Co je citlive, neposilej dal pres pohodlne kanaly.

Privacy-first onboarding neni pomalejsi. Jen nedela bordel, ktery se pozdeji tvari jako compliance projekt.

### 4. Udelej internich 15 minut pred prvnim zakaznickym callem

Pred prvnim onboardingovym callem si tym sedne na 15 minut. Ne kvuli ceremonii, ale kvuli tomu, aby nikdo neimprovizoval sliby.

Agenda:

```text
00-03 min: Co zakaznik koupil nebo schvalil?
03-06 min: Jaky je prvni milnik?
06-09 min: Jaka data potrebujeme a jaka nechceme?
09-12 min: Co je mimo rozsah a jak to rekneme?
12-15 min: Kdo vede call, kdo zapisuje, kdo vlastni dalsi krok?
```

Vystup musi byt kratky:

- jedna veta vysledku,
- jeden prvni milnik,
- seznam dat pro start,
- seznam zakazanych slibu,
- vlastnik dalsi akce.

Zakazane sliby zapis nahlas. Napriklad:

```text
Neslibujeme automaticky import historie.
Neslibujeme integraci se vsemi mailboxy.
Neslibujeme, ze pilot vyresi reporting pro cele vedeni.
Neslibujeme retenci dat delsi, nez je dohodnuta.
```

Tohle zni negativne jen na papire. V praxi je to hygienicka pomucka. Tym, ktery vi, co neslibuje, pusobi sebejisteji nez tym, ktery prikyvne vsemu a pak zmizi do "overime interni kapacity".

### 5. Prvni onboardingovy email ma snizit nejistotu

Zakaznik po podpisu nebo potvrzeni nesmi dostat jen kalendarovou pozvanku. Posli kratky email, ktery potvrdi rozsah, prvni milnik a datovy postup.

Sablona:

```text
Predmet: Start onboardingu: [produkt / pilot / prvni milnik]

Ahoj [jmeno],

navazujeme na domluveny pilot pro [problem / vysledek].

Prvni milnik:
[jedna veta, kdy je prvni faze hotova]

Na prvni call pripravime:
- [co pripravime my],
- [co overime],
- [co bude vystupem callu].

Od vas zatim potrebujeme jen:
- [minimalni vstup],
- [kontakt / rozhodnuti],
- [pripadne anonymizovany priklad].

Prosim neposilejte zatim produkcni exporty ani osobni data mimo tento rozsah.
Pokud realna data budou potreba, domluvime predem ucel, kanal, pristupy a retenci.

Dalsi krok:
[call / ukol], vlastnik [jmeno], termin [datum].

Cody
```

Tento email dela dve veci naraz: zakaznik vi, co se bude dit, a tym ma pisemne potvrzenou datovou brzdu. Krasne nudne. Presne tak to ma byt.

### 6. Po prvnim milniku zavri smycku

Jakmile je prvni milnik hotovy, neprechazej automaticky na dalsi prani. Nejdriv zavri smycku:

- Co jsme dorucili?
- Jak zakaznik pozna hodnotu?
- Co zustava otevrene?
- Jaka data jsme pouzili?
- Co smazeme nebo ponechame a proc?
- Co je dalsi placeny nebo schvaleny krok?

Sablona kratkeho vyhodnoceni:

```text
Milnik:
Stav: hotovo / castecne / blokovano
Dukaz:
Otevrene body:
Data pouzita:
Data k uklidu:
Dalsi krok:
Rozhodnuti zakaznika do:
```

Pokud se pri milniku objevily nove pozadavky, nerozpoustej je do onboardingu. Dej je do backlogu s jednim ze stavu:

| Stav | Vyklad |
| --- | --- |
| `next_phase` | Ma hodnotu, ale patri az po vyhodnoceni milniku. |
| `needs_discovery` | Neni jasny problem nebo vlastnik. |
| `not_now` | Nesedi do aktualniho rozsahu. |
| `privacy_review` | Vyvolava novy datovy, bezpecnostni nebo pravni dopad. |

Tak se onboarding nezmeni v nekonecny proud "jeste jedne drobnosti".

### 7. 45min postup

```text
00-07 min: Prepis posledni slib
Co zakaznik opravdu schvalil, jaky vysledek ceka a co je mimo rozsah.

07-15 min: Definuj prvni milnik
Jedna role, jeden tok, jeden overitelny vysledek.

15-23 min: Sepis datovy kontrakt
Co potrebujeme, co nechceme, kanal, pristupy, retence, uklid.

23-30 min: Udelej interni handoff
Vlastnici, zakazane sliby, otevrene privacy/security body.

30-38 min: Posli onboardingovy email
Potvrdit milnik, vstupy, datovou hranici a dalsi krok.

38-45 min: Priprav vyhodnoceni milniku
Sablona pro stav, dukaz, data k uklidu a rozhodnuti dalsi faze.
```

### Checklist: predavka do onboardingu

- [ ] Handoff vychazi z posledniho obchodniho slibu.
- [ ] Je jasne, co zakaznik schvalil a co neschvalil.
- [ ] Prvni milnik je jeden overitelny vysledek, ne seznam nastaveni.
- [ ] Interni vlastnik a zakaznicky vlastnik jsou pojmenovani.
- [ ] Je zapsane, co je mimo rozsah.
- [ ] Existuje seznam dat potrebnych pro prvni milnik.
- [ ] Existuje seznam dat, ktera nechceme.
- [ ] Produkcni exporty a osobni data maji predem schvaleny ucel, kanal a retenci.
- [ ] Tym si pred prvnim callem projde zakazane sliby.
- [ ] Zakaznik dostal onboardingovy email s milnikem a datovou hranici.
- [ ] Po prvnim milniku se vyhodnoti hodnota, otevrene body a datovy uklid.
- [ ] Nove pozadavky jdou do dalsi faze, discovery, privacy review nebo mimo rozsah.

---

## Status page a incident komunikace za 45 minut

Status page neni verejna nastenka hanby. Je to misto, kde zakaznik rychle zjisti, jestli problem vidi jen on, nebo jestli se neco deje na strane sluzby. U maleho SaaS muze byt prvni verze velmi jednoducha: jedna verejna nebo poloverejna stranka, kratke sablony komunikace, jasne urovne dopadu a pravidlo, kdo smi publikovat update.

Privacy-first pohled je tady dulezity. Pri incidentu je tlak rict hodne veci rychle. Jenze verejna komunikace nesmi vyzradit osobni udaje, konkretni interni konfiguraci, bezpecnostni detaily ani jmena zakazniku bez souhlasu. Dobra status komunikace je presna, ale minimalni. Rika, co se deje, koho se to tyka, co delate a kdy prijde dalsi update.

U incidentu s osobnimi udaji se verejna status page nerovna GDPR oznameni. To je samostatne posouzeni podle dopadu, rizika a povinnosti z clanku 33 a 34 GDPR. Status page muze informovat o dostupnosti nebo funkcnosti, ale pravni komunikaci musi ridit odpovedny clovek podle realnych faktu.

**Codyho komentar:** Nejhorsi status page je ta, ktera mlci, dokud zakaznici sami neudelaji support frontu z vlastni paniky. Druha nejhorsi je ta, ktera v prvnim updatu vyzradi vic internich detailu nez rocni security dotaznik.

### 1. Rozhodni, co bude na status page

Pro prvni verzi nepotrebujes slozity portal. Potrebujes seznam komponent, ktere zakaznik realne vnima.

Typicke komponenty:

| Komponenta | Co znamena pro zakaznika |
| --- | --- |
| Verejny web | Landing page, dokumentace, blog, cenik. |
| Aplikace | Prihlaseni, hlavni produktove rozhrani. |
| API | Integrace a automatizace. |
| Formular / lead tok | Demo request, kontakt, registrace. |
| Emaily | Transakcni emaily, pozvanky, alerty. |
| Billing | Platby, faktury, zmena planu. |
| Export dat | Exporty, offboarding, datove pozadavky. |

Nepublikuj komponenty, ktere by zbytecne prozrazovaly vnitrni architekturu. "Primarni databaze cluster eu-central-1" je pro verejnou stranku prilis konkretni. "Aplikace" nebo "Produktova databaze" obvykle staci. Zakaznik potrebuje dopad, ne mapu infrastruktury.

Minimalni stavy:

- `operational`: funguje normalne,
- `degraded`: funguje pomaleji nebo castecne,
- `partial_outage`: cast sluzby nejde,
- `major_outage`: hlavni tok je nedostupny,
- `maintenance`: planovana udrzba.

U kazdeho stavu si interne napis, kdo ho muze nastavit a kdy se ma vratit na normal. Bez toho status page casem zatuhne v rezimu "degraded", protoze nikdo nechce rozhodnout, ze uz je hotovo.

### 2. Nastav prahy pro komunikaci

Ne kazda chyba patri na status page. Kazda chyba ale potrebuje rozhodnuti, jestli patri do interniho incidentu, support odpovedi nebo verejne komunikace.

Prakticka pravidla:

| Situace | Komunikace |
| --- | --- |
| Kratky vypadek bez zakaznickeho dopadu | Interni zapis, bez verejneho updatu. |
| Hlavni web nebo aplikace nejde vice nez par minut | Status page update a interni incident. |
| Formular neprijima poptavky | Status page nebo cilena komunikace podle dopadu. |
| Transakcni emaily se opozduji | Status update, pokud brzdi prihlaseni, pozvanky nebo billing. |
| Podezreni na dopad na osobni udaje | Interni eskalace a pravni/security posouzeni pred formulaci. |
| Planovana udrzba | Oznameni predem, okno dopadu, po dokonceni uzavreni. |

Prvni update ma jit rychle, ale nemusi mit vsechny odpovedi. Staci potvrdit dopad a dalsi update.

Sablona prvniho updatu:

```text
Vysetrujeme problem s [komponenta].
Dopad: [konkretni pozorovatelny dopad, napr. demo formular muze vracet chybu].
Zacatek: [cas, pokud ho vime].
Pracujeme na omezeni dopadu.
Dalsi update: [cas].
```

Sablona prubezneho updatu:

```text
Stav: [vysetrujeme / omezeno / oprava nasazena / monitorujeme].
Dopad: [co se zmenilo].
Co delame: [jedna vec bez citlivych detailu].
Dalsi update: [cas].
```

Sablona uzavreni:

```text
Problem s [komponenta] je vyresen.
Dopad trval od [cas] do [cas].
Zakladni pricina: [kratce, bez zbytecnych internich detailu].
Preventivni krok: [co menime, pokud uz je rozhodnuto].
```

### 3. Oddel status update od postmortemu

Status update je kratka provozni informace. Postmortem je pozdejsi vysvetleni, co se stalo, proc a co se meni. Nemichej je dohromady v prvnich minutach incidentu.

Status update odpovida:

- co je rozbite,
- koho se to tyka,
- jestli existuje workaround,
- kdy bude dalsi zprava.

Postmortem odpovida:

- jaka byla pricina,
- proc nebyla zachycena drive,
- co snizilo dopad,
- co chybelo,
- jaka opatreni maji vlastnika a termin.

U maleho SaaS staci verejny postmortem pro vetsi incidenty, ktere ovlivnily dostupnost, data, platby nebo duveru. U mensich problemu staci interni zaznam a cilena odpoved zakaznikum, pokud se jich to dotklo.

Sablona kratkeho verejneho postmortemu:

```text
Shrnuti:
[jedna az dve vety]

Casova osa:
[detekce, mitigace, obnova]

Dopad:
[komponenty, zakaznicke akce, cas]

Pricina:
[pravdivy, ale primerene obecny popis]

Co menime:
[1 az 3 opatreni]

Co zustava bez dopadu:
[napr. "Nenasli jsme dopad na zakaznicka data", jen pokud je to overene]
```

Pozor na posledni radek. Nepsat "data jsou v bezpeci", pokud realne jen "zatim nevime o dopadu". Rozdil mezi overenym faktem a aktualnim stavem vysetrovani je v incidentu dost podstatny detail. Takovy maly detail, co umi rozhodnout, jestli vypadate profesionalne, nebo jako kreativni oddeleni pozaru.

### 4. Planovana udrzba bez prekvapeni

Planovana udrzba je taky komunikace duvery. Zakaznik nema zjistit z chybove hlasky, ze prave menis databazi.

Pred udrzbou napis:

- kdy zacne,
- jak dlouho muze trvat,
- ktere casti budou dotcene,
- zda bude produkt nedostupny nebo jen pomalejsi,
- co zakaznik nemusi delat,
- kam se ozvat pri problemu.

Sablona:

```text
Planovana udrzba probehne [datum, cas, casove pasmo].
Dopad: [komponenta] muze byt kratce nedostupna.
Ocekavane okno: [delka].
Duvod: [kratce, napr. databazova udrzba / infrastruktura / bezpecnostni aktualizace].
Po dokonceni pridame update na status page.
```

U privacy-first produktu nepouzivej udrzbu jako vymluvu pro pridani noveho dodavatele bez review. Kdyz se meni datovy tok, patri to i do dodavatelskeho prehledu, privacy dokumentu nebo interni datove mapy podle dopadu.

### 5. 45min postup

```text
00-05 min: Vyber komponenty.
Verejny web, aplikace, API, formulare, emaily, billing, export.

05-15 min: Napis komunikacni prahy.
Kdy staci interni zapis, kdy status update, kdy cilena zakaznicka zprava.

15-25 min: Priprav tri sablony.
Prvni update, prubezny update, uzavreni.

25-35 min: Priprav planovanou udrzbu.
Sablona s casem, dopadem, oknem a kontaktem.

35-45 min: Zkontroluj privacy a security hranice.
Co nikdy nepsat verejne, kdo schvaluje breach komunikaci, kde se uklada timeline.
```

Vysledkem ma byt dokument, ktery lze pouzit pri prvnim realnem problemu bez hledani slov. Incident je spatny cas na literarni improvizaci. Kratka sablona je v tu chvili laskavost k zakaznikum i vlastnimu nervovemu systemu.

### Checklist: status page a incident komunikace

- [ ] Status page obsahuje komponenty podle zakaznickeho dopadu, ne podle vnitrni architektury.
- [ ] Existuji jasne stavy: operational, degraded, partial outage, major outage, maintenance.
- [ ] Je napsane, kdo muze publikovat update.
- [ ] Existuji prahy pro interni zapis, status update a cilene informovani zakazniku.
- [ ] Prvni update potvrzuje dopad a cas dalsi zpravy.
- [ ] Prubezne updaty rozlisuji fakta, odhady a dalsi kroky.
- [ ] Uzavreni incidentu rika cas dopadu a overenou pricinu, pokud je znama.
- [ ] Verejna komunikace neprozrazuje citlive interni detaily.
- [ ] U osobnich udaju existuje oddelene GDPR/security posouzeni.
- [ ] Planovana udrzba se oznamuje predem s casem, dopadem a kontaktem.
- [ ] Postmortem ma vlastnika opatreni a termin.
- [ ] Timeline incidentu se uklada interni, ale bez zbytecneho kopirovani osobnich dat.

---

## Obnova ze zalohy bez paniky za 45 minut

Zaloha neni strategie. Strategie je obnovit produkt do pouzitelneho stavu, vedet, o jaka data prijdes, komu to rict a co zmenit, aby se stejna bolest neopakovala. Maly SaaS tym casto zalohy "ma", ale nikdy nezkousel, jestli z nich opravdu postavi aplikaci. To je krasna forma optimismu, bohuzel dost draha.

Privacy-first provoz k tomu pridava dalsi hranici: obnova nesmi byt vymluva pro kopirovani produkcnich dat do nahodnych laptopu, sdilenych disku a testovacich databazi. Pri incidentu je tlak na rychlost, ale datova disciplina se nema vypinat. Prave tehdy je nejvic potreba.

### 1. Popis zalohu jako produktovou schopnost

Nezacinej technickou vetou "mame snapshot kazdou noc". Zacni tim, co to znamena pro zakaznika a pro tym.

Minimalni karta zalohy:

| Otazka | Odpoved |
| --- | --- |
| Co zalohujeme? | Databaze, nahrane soubory, konfigurace, pripadne vybrane logy. |
| Co nezalohujeme? | Cache, docasne exporty, debug vystupy, data po expiraci retence. |
| Jak casto? | Frekvence podle dopadu ztraty dat, ne podle defaultu hostingu. |
| Jak dlouho drzime? | Retence podle provozni potreby a smluvnich/pravnich hranic. |
| Kde zalohy lezi? | Region, dodavatel, pristupova pravidla. |
| Kdo muze obnovit? | Konkretni role nebo lide, ne "nekdo z vyvoje". |
| Kdy jsme obnovu naposledy testovali? | Datum, vysledek, nalezy. |

Rozlis dve metriky, ktere si tym musi rict lidsky:

- RPO: kolik dat si muzeme dovolit ztratit.
- RTO: jak dlouho muze trvat navrat do pouzitelneho stavu.

Nemusis z toho delat enterprise ceremonii. Staci veta: "U lead formulare si muzeme dovolit ztratit maximalne poslednich 15 minut prijmu a chceme ho obnovit do 60 minut." Takova veta je uz rozhodnuti. "Mame backup" je jen nalepka.

### 2. Obnova ma mit tri rezimy

Ne kazdy problem vyzaduje plnou obnovu produkce. Kdyz mas jen spatne smazany zaznam, plny restore cele databaze muze napachat vic skody nez puvodni chyba.

Prakticke rezimy:

| Rezim | Kdy se hodi | Hlavni riziko |
| --- | --- | --- |
| Selektivni obnova | Jeden zaznam, soubor, konfigurace nebo mensi sada dat. | Omylem obnovis i data, ktera mela zustat smazana. |
| Obnova do izolovaneho prostredi | Potrebujes zjistit stav zalohy nebo vytahnout cast dat. | Produkcni data uniknou do testu nebo lokalniho vyvoje. |
| Plna obnova produkce | Produkcni databaze nebo uloziste je vazne poskozene. | Ztrata novych zmen, nekonzistence a spatna komunikace dopadu. |

U izolovane obnovy si predem nastav pravidla:

- Prostredi je pristupne jen lidem, kteri obnovu resi.
- Data se nepouzivaji pro vyvoj novych funkci.
- Po ukonceni se prostredi smaze.
- Exporty z obnovy maji vlastnika a datum smazani.
- Pokud se obnovuji osobni data, existuje jasny ucel a zapis pristupu.

**Codyho komentar:** Testovaci databaze s nahodnou produkcni kopii je nejrychlejsi cesta, jak z "chteli jsme debugovat" udelat "ted vysvetlujeme, proc to ma pristup cela firma". Nedoporucuji jako firemni sport.

### 3. Runbook musi byt kratky a spustitelny

Runbook pro obnovu nema byt obecny manifest. Ma byt navod, ktery pouzijes ve stresu. Pis ho tak, aby sel projit krok po kroku.

Sablona runbooku:

```text
Nazev: Obnova [komponenta] ze zalohy
Vlastnik: [role/jmeno]
Posledni test: [datum]

Kdy spustit:
- [konkretni stav nebo incident]

Pred obnovou:
- Zastavit zapis / zapnout maintenance, pokud je potreba.
- Ulozit aktualni stav, pokud to dava smysl.
- Zapsat cas incidentu a cas posledni dobre zalohy.
- Informovat interni vlastniky.

Postup:
1. Overit dostupnost zalohy.
2. Obnovit do izolovaneho prostredi nebo primo podle rezimu.
3. Zkontrolovat integritu: pocet klicovych zaznamu, migrace, soubory.
4. Provest smoke test hlavniho toku.
5. Prepnout provoz nebo selektivne prenest data.
6. Monitorovat chyby a zakaznicky dopad.

Po obnoveni:
- Uzavrit status update.
- Zapsat ztraceny cas/datovy dopad.
- Smazat docasne exporty a izolovane prostredi.
- Pridat 1 az 3 preventivni opatreni.
```

Do runbooku nepatri tajemstvi, tokeny ani hesla. Patri tam odkaz na spravce tajemstvi nebo interni proces, jak je ziskat. Dokument s heslem uprostred je jen incident, ktery jeste nema datum.

### 4. Test obnovy delaj jako cviceni, ne jako auditni divadlo

Test obnovy je uspesny jen tehdy, kdyz dokaze odpovedet na tri otazky:

- Dostali jsme se k zaloham?
- Umime z nich obnovit produktove pouzitelny stav?
- Vime, co by zakaznik realne poznal?

45min test nemusi pokryt vsechny katastrofy. Vyber jednu komponentu a jeden scenar.

Priklady scenaru:

| Scenar | Co overuje |
| --- | --- |
| Obnova lead formulare | Prijem poptavek, emailova notifikace, minimalni ztrata leadu. |
| Obnova nahranych souboru | Vazba mezi databazi a objektovym ulozistem. |
| Obnova konfigurace | Tajemstvi, env promenne, deploy proces. |
| Obnova jednoho accountu | Selektivni obnova bez prepisu ostatnich dat. |
| Obnova po chybne migraci | Rollback, kompatibilita schema a aplikace. |

Pri testu mer:

- cas do nalezeni spravne zalohy,
- cas obnovy,
- pocet rucnich kroku,
- chybejici pristupy,
- nejasne casti runbooku,
- data nebo exporty, ktere po testu musis uklidit.

Vystup testu nema byt "probehlo". Vystup ma byt: "Obnova trvala 32 minut, chybel pristup k objektovemu ulozisti, smoke test formulare prosel, docasne prostredi smazano, opravujeme runbook a pristupovou roli."

### 5. Komunikace po obnoveni

Kdyz obnova ovlivnila zakazniky, komunikuj vecne. Neprehanej jistotu a neschovavej dopad za mlhu.

Sablona kratke zpravy:

```text
Obnovili jsme [komponenta] do provozu.
Dopad: [co zakaznici mohli pozorovat].
Obdobi dopadu: [cas od-do].
Data: [overeny stav, napr. "neevidujeme ztratu dat" nebo "mohly chybet zaznamy vytvorene mezi X a Y"].
Co delame dal: [jeden konkretni preventivni krok].
```

Pokud nevis, jestli doslo ke ztrate dat, nerikej, ze nedoslo. Rekni, ze to overujes a kdy prijde dalsi update. Zakaznici snesou neprijemnou pravdu lepe nez sebevedome kouzleni se slovy.

### 6. 45min postup

```text
00-05 min: Vyber jednu kritickou komponentu.
Databaze, soubory, formular, billing, konfigurace nebo export.

05-12 min: Vypln kartu zalohy.
Co zalohujeme, kde to lezi, kdo ma pristup, kdy byl posledni test.

12-22 min: Vyber rezim obnovy.
Selektivni, izolovana, nebo plna obnova. Zapis rizika pro data.

22-35 min: Napis runbook.
Kdy spustit, kroky pred obnovou, obnova, smoke test, uklid.

35-42 min: Projdi komunikaci.
Kdy informovat status page, support, konkretni zakazniky.

42-45 min: Naplanuj prvni test.
Datum, vlastnik, scenar a ocekavany vystup.
```

Po 45 minutach nemas dokonaly disaster recovery program. Mas ale prvni obnovitelny kus provozu. To je lepsi nez dokonaly dokument, ktery nikdo nikdy nepouzil.

### Checklist: obnova ze zalohy

- [ ] Vim, ktere komponenty jsou kriticke pro zakaznicky provoz.
- [ ] U kazde komponenty je jasne, co se zalohuje a co ne.
- [ ] Znam RPO a RTO aspon pro hlavni tok.
- [ ] Zalohy maji region, retenci, pristupy a vlastnika.
- [ ] Existuji tri rezimy obnovy: selektivni, izolovana a plna.
- [ ] Produkcni data se pri testu nekopiruji do volneho vyvoje.
- [ ] Izolovane obnovy maji datum smazani a omezeny pristup.
- [ ] Runbook obsahuje kroky pred obnovou, obnovu, smoke test a uklid.
- [ ] Tajemstvi nejsou ulozena primo v runbooku.
- [ ] Obnova byla testovana a ma zapsany vysledek.
- [ ] Po obnoveni vim, co rict zakaznikum a co zatim nerikat.
- [ ] Po kazdem testu nebo incidentu vzniknou maximalne tri konkretni opravy.

---

## Dokumentacni hub bez firemniho smetiste za 45 minut

Dokumentace maleho SaaS tymu se casto rodi hrdinsky a umira potichu. Nejdriv vznika v chatu, pak v poznamkach po callu, pak v issue, pak ve sdilenem dokumentu, pak v hlavach lidi, kteri zrovna nemaji cas. Vysledek je znamy: zakaznik se zepta na retenci dat, obchodnik najde starou vetu, vyvoj ma jinou realitu a nekdo v provozu tise doufa, ze se nikdo nezepta na restore test.

Dokumentacni hub neni dalsi wiki pro vsechno. Je to jedno primarni misto, kde maly tym drzi rozhodnuti, provozni postupy, datovou mapu, odpovedi pro obchod a opakovatelne sablony. Privacy-first hodnota tady neni jen obsah. Je to zpusob prace: dokumentace ma mit vlastnika, datum kontroly, jasny rozsah a minimum citlivych dat.

**Codyho komentar:** Dokumentace, kterou nikdo neotevre pri realnem problemu, je dekorace. Hezka mozna, ale stejne dekorace. Dobra dokumentace se pozna podle toho, ze ji nekdo pouzije v patek v 16:47 a nezacne u toho prehodnocovat zivotni volby.

### 1. Vyber jedno misto pravdy

Prvni rozhodnuti je nudne a zasadni: kde dokumentace zije. Muze to byt slozka v repozitari, interni wiki nebo znalostni baze. Dulezite je, aby splnovala par pravidel:

- da se vyhledavat,
- ma historii zmen,
- jde exportovat,
- pristupy jsou podle role,
- neni zavisla na osobnim uctu jednoho cloveka,
- je jasne, co je verejne, interni a citlive.

Pro maly technicky tym je casto dobry zacatek slozka `docs/` v repozitari:

```text
docs/
  decisions/
  operations/
  privacy/
  sales/
  support/
  templates/
```

Neni to povinnost. Je to vzor mysleni. Rozhodnuti a runbooky patri blizko produktu. Obchodni odpovedi a trust texty mohou byt v kontrolovane znalostni bazi. Hlavni je, aby existoval index, ktery rika, kde co hledat.

### 2. Rozdel dokumenty podle pouziti

Neptej se "jakou dokumentaci mame napsat?". Ptej se "kdo ji bude pouzivat a v jake situaci?".

| Typ dokumentu | Kdo ho pouzije | Kdy |
| --- | --- | --- |
| Rozhodovaci zaznam | produkt, vyvoj, founder | kdyz se vraci stare tema nebo meni dodavatel |
| Datova mapa | obchod, legal, provoz | pri DPA dotazu, auditu, incidentu nebo nove funkci |
| Runbook | provoz, vyvoj | pri incidentu, obnoveni, deployi nebo rollbacku |
| Trust odpovedi | obchod, support | kdyz se zakaznik pta na hosting, export, mazani nebo AI |
| Support sablony | support, founder | pri opakovanych dotazech |
| Launch checklist | produkt, marketing, vyvoj | pred verejnym spustenim nebo kampani |

Kazdy dokument musi mit jednu vetu ucelu. Pokud ji neumime napsat, dokument nejspis nema jasnou praci.

Sablona hlavicky:

```text
Nazev:

Ucel:
[proc dokument existuje]

Kdy pouzit:
[situace]

Vlastnik:
[role nebo clovek]

Posledni kontrola:
[datum]

Citlivost:
verejne / interni / citlive
```

Hlavicka vypada jako drobnost, ale resi velkou cast chaosu. Kdyz dokument nema vlastnika ani datum, je to historicky artefakt. Muze byt uzitecny, ale nesmi se tvarit jako aktualni pravda.

### 3. Do dokumentace neukladej data, ktera tam nepatri

Dokumentace casto bobtna proto, ze se do ni lepi cele priklady z reality. Screenshot adminu. Export z CRM. Support vlakno. Cast logu. Jmeno zakaznika. Interni cena. Token, ktery "uz stejne neplati". Tohle neni kontext. To je datova stopa bez retence.

Pravidla:

- Pouzivej anonymizovane nebo synteticke priklady.
- U incidentu zapisuj timeline a dopad, ne cele osobni zaznamy.
- U support prikladu popis problemu, ne identitu zakaznika.
- U security dokumentu nesdilej interni detaily, ktere zvysuji riziko.
- U obchodnich odpovedi oddel obecnou sablonu od konkretniho zakaznickeho vlakna.
- Kdyz dokument obsahuje citlive informace, oznac ho a omez pristup.

**Priklad spatne dokumentace:**

```text
Klient Novakovi s.r.o. poslal export se 420 kontakty, chyba byla u jana@...
```

**Lepsi zapis:**

```text
Import kontaktu selhal u radku s chybejicim povinnym polem `email`.
Dopad: import se zastavil bez citelne chyby.
Oprava: validace pred importem a zprava s cislem radku.
```

Produkt se z toho nauci stejne. Data zustanou mensi. Vsichni spi o trochu lip, coz je podcenovana SaaS metrika.

### 4. Udrzuj dokumenty pres rytmus, ne pres hrdinstvi

Dokumentace se neudrzuje tim, ze si jednou rocne nekdo vezme dovolenou a prepise wiki. Udrzuje se malymi navazanymi pravidly:

| Udalost | Co aktualizovat |
| --- | --- |
| Novy dodavatel | vendor review, subprocesori, datova mapa, trust odpovedi |
| Nova funkce s daty | mini DPIA, datova mapa, privacy mikrotext, event katalog |
| Incident | timeline, runbook, postmortem, preventivni opatreni |
| Launch | launch checklist, changelog, status pravidla, support sablony |
| Security dotaz | security overview, FAQ, trust page, rozhodovaci zaznam |
| Ukonceni dodavatele | exit plan, tokeny, dokumentace, subprocesor seznam |

Prakticke pravidlo do pull requestu nebo issue:

```text
Meni tato zmena verejny slib, datovy tok, dodavatele, retenci, pristup nebo provozni postup?
Pokud ano, pridej odkaz na aktualizovany dokument.
```

Tohle neni byrokracie. Je to zpusob, jak zabranit tomu, aby kod a verejna pravda jely kazdy jinym vlakem.

### 5. Vytvor index odpovedi pro obchod a support

Obchod a support nepotrebuji pro kazdy dotaz cist cele runbooky. Potrebuji kratke odpovedi s odkazem na zdroj pravdy.

Sablona knihovny odpovedi:

```text
Otazka:
[napr. Kde bezi vase data?]

Kratka odpoved:
[2 az 4 vety, ktere lze poslat zakaznikovi]

Co neslibovat:
[maximalisticke nebo neoverene vety]

Interni zdroj:
[datova mapa / trust page / rozhodovaci zaznam]

Vlastnik:
[kdo hlida pravdivost]

Posledni kontrola:
[datum]
```

Priklad:

```text
Otazka:
Pouzivate AI nad nasimi daty?

Kratka odpoved:
AI zpracovani pouzivame jen v rozsahu popsane funkce nebo dohodnuteho procesu.
Zakaznicka data neposilame do AI nastroju bez jasneho ucelu, datove hranice a odpovidajiciho dodavatelskeho posouzeni.

Co neslibovat:
"AI nikdy nepouzivame" nebo "vse je automaticky v EU", pokud to neodpovida realite.
```

Tahle knihovna chrani pred improvizaci. Kdyz se odpoved zmeni, upravis jedno misto, ne deset starych emailu v hlavach lidi.

### 6. 45min postup

```text
00-05 min: Vyber misto pravdy.
Repo docs, wiki nebo znalostni baze s exportem a historii.

05-12 min: Vytvor index.
Rozhodnuti, provoz, privacy, obchod, support, sablony.

12-22 min: Vyber pet kritickych dokumentu.
Datova mapa, vendor review, incident runbook, trust odpovedi, launch checklist.

22-32 min: Pridej hlavicky.
Ucel, kdy pouzit, vlastnik, posledni kontrola, citlivost.

32-40 min: Uklid citlive priklady.
Nahrad realna data syntetickymi nebo anonymizovanymi.

40-45 min: Nastav udrzovaci pravidlo.
Ktere udalosti musi aktualizovat dokumentaci a kdo to hlida.
```

Po 45 minutach nema tym encyklopedii. Ma mapu. A mapa je presne to, co potrebujes, kdyz se nekdo zepta na DPA, spadne formular nebo se vrati stare rozhodnuti o analytice.

### Checklist: dokumentacni hub

- [ ] Existuje jedno primarni misto, kde se hledaji rozhodnuti a provozni postupy.
- [ ] Dokumentace ma index a jasne kategorie.
- [ ] Kriticke dokumenty maji vlastnika, ucel, citlivost a datum posledni kontroly.
- [ ] Datova mapa, vendor review, incident runbook a trust odpovedi jsou dohledatelne.
- [ ] Dokumenty nepouzivaji realna zakaznicka data, pokud to neni nezbytne a rizene.
- [ ] Obchod a support maji kratke odpovedi s odkazem na zdroj pravdy.
- [ ] Verejne sliby se daji dohledat k interni realite.
- [ ] Zmena dodavatele, datoveho toku, retence nebo verejneho slibu aktualizuje dokumentaci.
- [ ] Stare dokumenty se oznacuji jako nahrazene, ne potichu prepisuji bez kontextu.
- [ ] Dokumentacni hub jde exportovat nebo prenest, kdyz se meni nastroj.

---

## Feedback loop bez datoveho skladu za 45 minut

Po prvnich zakaznicich zacne SaaS tym slyset vic hlasu najednou: obchod chce funkci pro velky lead, support hlasi opakovany dotaz, zakladatel si pamatuje tri bolestive vety z demo callu a produktova analytika ukazuje propad v jednom kroku. Bez systemu se z toho stane hromada dojmu. S prilis velkym systemem se z toho stane datovy sklad, ktery nikdo necte.

Cil feedback loopu neni sbirat vsechno. Cil je prevadet realne signaly na lepsi rozhodnuti: co opravit, co nestavet, co prepsat na webu, co vysvetlit v onboardingu a co teprve overit.

Privacy-first feedback ma tri pravidla:

- sbirej mene textu a vice rozhodovaciho kontextu,
- oddel osobni udaje od produktoveho poznatku,
- zpetnou vazbu drz u zdroje pravdy, ne v peti nastrojich.

**Codyho komentar:** Feedback neni demokracie funkci. Kdyby byl, kazdy SaaS by skoncil jako excel s loginem, chatem, kalendarem, fakturaci a smutnym zakladatelem. Feedback je material pro premysleni, ne hlasovani.

### 1. Rozlis signal od komentare

Ne kazda veta od zakaznika ma stejnou vahu. "Bylo by hezke mit mobilni aplikaci" je komentar. "Kazdy patek rano schvaluji reporty ve vlaku a bez mobilu to odkladam o dva dny" je signal. Ten druhy obsahuje situaci, frekvenci, dusledek a kontext pouziti.

Pri zapisu zpetne vazby rozdel informaci na tri casti:

```text
Zdroj:
[support / demo / onboarding / churn / produktova metrika / interni pozorovani]

Pozorovana situace:
[co se opravdu stalo, v jakem kontextu, bez domysleni]

Mozne rozhodnuti:
[co z toho plyne pro produkt, onboarding, web, podporu nebo cenu]
```

Priklad spatneho zapisu:

```text
Zakaznik chce exporty.
```

Priklad lepsiho zapisu:

```text
Zdroj:
Support, 3 dotazy za posledni dva tydny.

Pozorovana situace:
Admini potrebuji jednou mesicne predat seznam otevrenych pripadu do interniho reportu.
Aktualne kopiruji tabulku rucne ze screenshotu.

Mozne rozhodnuti:
Overit, jestli staci CSV export filtrovaneho seznamu, nebo jestli je problem ve sdileni reportu.
```

Ten druhy zapis neskace rovnou na reseni. To je dulezite. Zakaznik casto popisuje nastroj, ktery si umi predstavit, ne nejmensi uzitecny posun.

### 2. Vytvor jednu feedback kartu

Feedback karta ma byt tak mala, aby ji obchod, support i produkt vyplnili za dve minuty. Pokud je dlouha, lide ji obejdou pres chat. A chat je misto, kde dobre poznatky odchazeji do mlhy a pak se tvari, ze nikdy nebyly.

Sablona:

```text
Nazev:
[kratky popis problemu]

Segment:
[typ zakaznika nebo role, ne nutne konkretni firma]

Frekvence:
[jednou / opakovane / zatim jeden silny signal / nevim]

Dopad:
[cas / penize / riziko / neduveryhodnost / blokace aktivace / churn]

Situace:
[2 az 5 vet o realnem kontextu]

Citace:
[volitelne, anonymizovana nebo minimalni]

Datova citlivost:
[zadna / obsahuje osobni udaje / obsahuje zakaznicka data / obsahuje citlivy obchodni kontext]

Dalsi krok:
[ignorovat / sloucit s existujicim tematem / overit / opravit text / navrhnout zmenu / pridat do roadmap review]

Vlastnik:
[kdo to posune nebo zavre]
```

U citace bud opatrny. Nepotrebujes do produktoveho boardu kopirovat cele emaily, jmena lidi, interni nazvy projektu nebo screenshoty s daty. Vetsinou staci anonymizovana veta:

```text
"Kazdy tyden to rucne posilame financnimu tymu, jinak nam chybi podklad pro fakturaci."
```

Kdyz je presna citace dulezita, nech ji v puvodnim systemu s pristupovym omezenim a do feedback karty dej odkaz nebo interni ID. Produktovy poznatek nema byt sklad osobnich udaju.

### 3. Trid podle rozhodnuti, ne podle oddeleni

Typicka chyba je mit feedback rozdeleny na "support", "sales", "product" a "founder notes". Jenze zakaznikuv problem se takhle nechova. Stejna bolest muze prijit jako support ticket, namitka v demu i churn duvod.

Lepsi jsou rozhodovaci kose:

| Kos | Co tam patri | Typicky vystup |
| --- | --- | --- |
| Aktivace | Zakaznik nedosahl prvni hodnoty | Uprava onboarding kroku nebo prazdneho stavu |
| Pochopeni hodnoty | Zakaznik nerozumi nabidce | Prepis landing page, pricingu nebo napovedy |
| Manualni workaround | Zakaznik dela opakovanou praci mimo produkt | Overeni workflow, mala automatizace, export |
| Duvera a compliance | Zakaznik se boji dat, hostingu, pravomoci | Trust page, DPA odpoved, nastaveni pristupu |
| Provozni bolest | Chyby, vykon, obnovy, incidenty | Bugfix, monitoring, runbook |
| Cenova nejistota | Zakaznik nechape metriky nebo balicky | Uprava ceniku, limitu, planu nebo pilotni nabidky |

Kazdy tyden projdi jen otevrene karty s jasnym dopadem. Archivuj duplicity. Slucuj podobne signaly. Neudrzuj board kvuli boardu. Kdyz poznatek tri tydny nema vlastnika ani dalsi krok, bud neni dulezity, nebo tym nema odvahu ho zavrit.

### 4. Spoj kvalitativni signal s minimalni metrikou

Kvalitativni feedback rika proc. Metrika rika jak casto nebo kde. Potrebujes oboji, ale ne v maximalisticke podobe.

Priklady spojeni:

| Signal | Minimalni metrika | Rozhodnuti |
| --- | --- | --- |
| Lide nepozvou kolegu, protoze se boji nehotoveho workspace | Pocet workspace bez druheho clena po 7 dnech | Pridat draft pozvanku nebo lepsi vysvetleni pravomoci |
| Lead se pta na EU hosting pred demem | Pocet demo dotazu na data a hosting za mesic | Zviditelnit trust page a kratkou odpoved v follow-upu |
| Admini rucne kopiruji tabulku do reportu | Pocet export dotazu a frekvence opakovani | Overit CSV export nebo sdilitelny report |
| Trial konci bez aktivity po prvnim kroku | Podil uctu bez klicove akce do 48 hodin | Zjednodusit prvni tok, ne pridavat newsletter |

Pozor: metrika nema nahradit rozhovor. Kdyz cislo vypada spatne, nejdrive zjisti, co se deje. Kdyz rozhovor zni silne, zkus zjistit, jestli je to jeden hlas nebo vzorec. Produktova prace je prepinani mezi lupou a mapou.

### 5. Zavirej smycku se zakaznikem

Feedback loop neni hotovy ve chvili, kdy interni tym vytvori kartu. Hotovy je az tehdy, kdyz se stane jedna z techto veci:

- problem byl vyresen,
- problem byl odlozen s jasnym duvodem,
- problem byl preformulovan a ceka na overeni,
- zakaznik dostal ferovou odpoved, ze to ted stavet nebudete.

Sablona odpovedi po opravene veci:

```text
Ahoj,

dik za konkretni popis situace s [problem].
Upravili jsme [co se zmenilo] tak, aby slo [vysledek].

Pokud to budete zkouset v praxi, zajima nas hlavne jestli to snizilo [puvodni bolest].

Codyho poznamka pro tym:
Neptej se na dalsich deset veci. Jedna dobra kontrolni otazka staci.
```

Sablona odpovedi, kdyz to nestavite:

```text
Ahoj,

diky za zpetnou vazbu k [tema].
Rozumime, proc by to pomohlo v [situace]. Ted to ale nebudeme pridavat jako samostatnou funkci, protoze by to produkt posunulo mimo aktualni zamereni na [jadro produktu].

Zapisujeme si to jako signal pro [oblast]. Pokud se rozhodnuti zmeni, ozveme se.
```

Ferove "ne" je lepsi nez tiche "mozna". Tiche mozna vyrabi dluh v duvere.

### 6. 45min postup

```text
00-05 min: Vyber jedno misto pro feedback karty.
Idealne tam, kde uz tym dela rozhodnuti, ne v dalsim izolovanem nastroji.

05-12 min: Zaved jednotnou sablonu.
Nazev, segment, frekvence, dopad, situace, datova citlivost, dalsi krok, vlastnik.

12-20 min: Vytvor rozhodovaci kose.
Aktivace, pochopeni hodnoty, manualni workaround, duvera, provoz, cena.

20-28 min: Prepis poslednich pet poznatku do karet.
Bez kopirovani celych emailu a bez zbytecnych osobnich udaju.

28-35 min: Sluc duplicity a oznac jeden nejdulezitejsi signal.
Hledej dopad, ne hlasitost.

35-42 min: Pri kazdem silnem signalu dopln minimalni metriku.
Ne kvuli dashboardu, ale kvuli rozhodnuti.

42-45 min: Nastav tydenni review.
Tri otazky: co opravime, co overime, co zavreme.
```

### Checklist: feedback loop

- [ ] Zpetna vazba ma jedno primarni misto a jednotnou kartu.
- [ ] Karta oddeluje zdroj, situaci, dopad a dalsi rozhodnuti.
- [ ] Osobni udaje a zakaznicka data se do produktoveho boardu nekopiruji zbytecne.
- [ ] Citace jsou minimalni, anonymizovane nebo odkazovane pres interni ID.
- [ ] Feedback se tridi podle rozhodovacich kosu, ne podle oddeleni.
- [ ] Duplicity se slucuji a stare karty se zaviraji.
- [ ] Silne kvalitativni signaly maji pripojenou minimalni metriku.
- [ ] Kazdy tyden vznikne nejvyse par konkretnich rozhodnuti.
- [ ] Zakaznik dostane odpoved, kdyz jeho feedback vedl k oprave nebo rozhodnuti.
- [ ] Tym umi rict "ted ne" bez rozmazaneho slibu do budoucna.

---

## Roadmapa bez slibotechny za 45 minut

Roadmapa neni verejny seznam prani, ktery ma uklidnit kazdeho leadu na demu. Je to rozhodovaci nastroj: co budeme delat ted, co overujeme, co zatim nedelame a proc. U maleho SaaS je dobra roadmapa kratka, srozumitelna a ochranena pred dvema nemocemi: nafukovanim rozsahu a sliby, ktere vznikly v obchodnim stresu.

Privacy-first produkt ma jeste jednu vrstvu navic. Kazda funkce muze menit datovou stopu. Novy export, integrace, AI sumarizace, audit log nebo pozvanky pro externisty nejsou jen "feature". Jsou to nove toky dat, nove role, nove retention otazky a nove odpovedi pro zakazniky.

### 1. Rozdel roadmapu na tri horizonty

Nepotrebujes presne datum u kazde karty. Potrebujes, aby tym i zakaznik pochopili miru zavazku.

Pouzij tri horizonty:

| Horizont | Vyklad | Co tam patri |
| --- | --- | --- |
| Ted | Aktivne stavime nebo opravujeme | Prace s vlastnikem, jasnym vystupem a ocekavanym overenim |
| Dale | Overeno jako dulezite, ale jeste ne naplanovane | Problemy s dukazem dopadu, cekaji na kapacitu nebo technicke rozhodnuti |
| Zkoumame | Signal existuje, reseni neni jasne | Rozhovory, prototypy, piloty, analyza rizik |

Vse ostatni patri do archivu, ne do roadmapy. Archiv neni hrbitov. Je to misto, kde se drzi odlozene veci bez toho, aby kazdy tyden predstiraly prioritu.

**Codyho komentar:** Datum na karte umi vyrobit falesny pocit presnosti. Kdyz tym nevi rozsah, zavislosti ani datovy dopad, "Q4" neni plan. Je to kostym pro nejistotu.

### 2. Kazda roadmap karta musi mit rozhodovaci jadro

Karta typu "Pridat integraci s X" je slaba. Neodpovida, proc to delat, komu to pomuze ani jak poznas uspech. Lepsi karta popisuje problem a vysledek.

Sablona:

```text
Nazev:
[problem nebo vysledek, ne jen funkce]

Segment:
[komu to pomuze]

Zakaznicky problem:
[konkretni situace, idealne opakovany signal]

Navrhovany vystup:
[co se zmeni v produktu, procesu nebo dokumentaci]

Meritko uspechu:
[co bude po vydani pozorovatelne lepsi]

Datovy dopad:
[nove osobni udaje / nova integrace / novy export / zadna zmena / nevim]

Rozhodnuti:
[stavime ted / overit / rozdelit / odlozit / zavrit]

Vlastnik:
[kdo kartu posune nebo zavre]
```

Priklad:

```text
Nazev:
Export otevrenych pripadu pro mesicni report

Segment:
Admini v B2B tymech s pravidelnym reportingem

Zakaznicky problem:
Admini jednou mesicne rucne kopiruji otevrene pripady do tabulky pro vedeni.

Navrhovany vystup:
CSV export filtrovaneho seznamu s minimalni sadou poli.

Meritko uspechu:
Zakaznik dokaze vytvorit report bez screenshotu a rucniho prepisu.

Datovy dopad:
Export zakaznickych dat. Nutna kontrola poli, pravomoci a audit log.

Rozhodnuti:
Overit rozsah exportu na dvou zakaznickych scenarich.

Vlastnik:
Produkt + technicky lead
```

Takhle napsana karta nezarucuje, ze funkce vznikne. Zarucuje, ze se o ni da rozumne rozhodnout.

### 3. Verejne sliby drz mensi nez interni plan

Verejna roadmapa muze byt uzitecna pro duveru, ale nesmi byt sklad nedokoncenych zavazku. Pokud ji mas, publikuj radsi temata a problemy nez presne slibovane funkce.

Lepsi verejne formulace:

- "Zlepsujeme exporty pro tymovy reporting."
- "Pracujeme na prehlednejsim nastaveni pristupu pro externi spolupracovniky."
- "Zkoumame jednodussi onboarding pro firmy s vice workspace."
- "Pripravujeme podrobnejsi dokumentaci k EU provozu a subprocesorum."

Rizikove formulace:

- "Integrace s kazdym ucetnim systemem do konce mesice."
- "AI bude automaticky cist vsechny zpravy a navrhovat odpovedi."
- "Enterprise security pack pristi kvartal."
- "Brzy podporime vsechny exporty, ktere budete potrebovat."

Kdyz zakaznik pozaduje konkretni slib, odpovez pres problem a hranici:

```text
Rozumim, ze potrebujete [vysledek].
Ted overujeme nejmensi rozsah, ktery to vyresi bez zbytecneho exportu dat a bez nove trvale integrace.
Do [datum interniho rozhodnuti] vam rekneme, jestli to pujde do nejblizsiho planu, nebo jestli nabidneme jine reseni.
```

Tahle odpoved neni vyhybani. Je to dospele zachazeni s nejistotou.

### 4. Privacy review dej pred odhad, ne po nem

Spousta tymu nejdrive odhadne praci a az potom zjisti, ze funkce meni prava, logy, subprocesory nebo retention. Pak je roadmapa plna polovicnich zavazku a technicky tym vypada jako brzda. Oprav to poradi.

Pred odhadem si poloz pet otazek:

- Vznika nove osobni nebo zakaznicke datum?
- Meni se, kdo data vidi, exportuje nebo maze?
- Posilame data do noveho dodavatele nebo regionu?
- Musime zmenit privacy dokumentaci, DPA, seznam subprocesoru nebo napovedu?
- Potrebujeme audit log, pristupove role, retenci nebo offboarding?

Pokud je odpoved "ano" nebo "nevim", karta nejde rovnou do "Ted". Nejdrive potrebuje kratke posouzeni. Nemusi to byt pravni roman. Casto staci deset radku: co se meni, koho se to tyka, jaka data tecou, jak se omezi pristup a co se musi dopsat do dokumentace.

### 5. Roadmap review ma koncit zavrenymi rozhodnutimi

Roadmap meeting bez zavrenych rozhodnuti je jen komentovana prohlidka nejistoty. Nastav si pravidlo: kazde review musi neco posunout do jednoho z peti stavu.

Stavy:

- `stavime`: ma vlastnika, vystup a overeni,
- `overujeme`: chybi dukaz, bezi rozhovor/prototyp/audit,
- `delime`: karta je moc velka, vzniknou mensi rozhodnuti,
- `odkladame`: dulezite, ale ted ne,
- `zavirame`: neodpovida strategii, nema dopad nebo by vytvorilo spatny datovy kompromis.

Sablona zapisu z review:

```text
Datum:
[YYYY-MM-DD]

Rozhodnuti:
[karta] -> [stav]

Proc:
[1 az 3 vety]

Datova poznamka:
[zadna zmena / co je potreba overit / co se nesmi slibit]

Dalsi krok:
[konkretni akce, vlastnik, termin]
```

Nejvetsi hodnota roadmap review casto neni v tom, co pridate. Je v tom, co konecne zavrete.

### 6. 45min postup

```text
00-05 min: Vytvor tri horizonty.
Ted, Dale, Zkoumame. Vse ostatni dej do archivu.

05-12 min: Vyber deset nejviditelnejsich karet.
U kazde prepis na problem, segment a navrhovany vystup.

12-20 min: Dopln datovy dopad.
Oznac nove exporty, integrace, role, logy, AI zpracovani a retenci.

20-28 min: Vyhod rizikove sliby.
Prepis verejne formulace z funkci na problemy a temata.

28-35 min: Rozhodni pet stavu.
Stavime, overujeme, delime, odkladame, zavirame.

35-42 min: U karet v "Ted" dopln vlastnika a overeni.
Bez vlastnika to neni plan. Bez overeni to neni produktova prace.

42-45 min: Zapis zmeny pro tym.
Jedna veta co se stavi, jedna co se overuje, jedna co se zavrelo.
```

### Checklist: roadmapa bez slibotechny

- [ ] Roadmapa ma tri horizonty: Ted, Dale, Zkoumame.
- [ ] Karty popisuji problem a vysledek, ne jen nazev funkce.
- [ ] Kazda aktivni karta ma segment, vlastnika a meritko uspechu.
- [ ] Datovy dopad je videt pred odhadem prace.
- [ ] Verejna roadmapa slibuje temata opatrneji nez interni plan.
- [ ] Obchod nepouziva roadmapu jako nahradu za jasne "ted ne".
- [ ] Privacy zmeny maji predem zapsane dopady na dokumentaci, role a dodavatele.
- [ ] Review konci rozhodnutim: stavime, overujeme, delime, odkladame nebo zavirame.
- [ ] Archiv je povoleny a pouzivany, aby roadmapa nebyla muzeum napadu.
- [ ] Zakaznikum se komunikuje vysledek a hranice, ne neurcite "brzy".

---

## Prakticka priloha: Experimenty a A/B testy bez sledovaciho cirkusu za 60 minut

Experiment v SaaS nema byt omluva pro to, ze zacnes sbirat vsechno o vsech. Ma byt kratke, predem popsane overeni jedne nejistoty. Dobre navrzeny experiment umi zodpovedet produktovou nebo marketingovou otazku bez toho, aby z uzivatelu delal laboratorni mys s identifikatorem pres pul internetu.

Privacy-first experiment ma ctyri pravidla:

- meri jen to, co je potreba pro konkretni rozhodnuti,
- neprekresluje UX do manipulace,
- drzi data co nejbliz produktu a tymu,
- konci rozhodnutim, ne dalsim dashboardem.

EDPB popisuje deceptive design patterns jako rozhrani, ktere lidi vedou k nechtenym, nevedomym nebo pro ne skodlivym rozhodnutim: https://www.edpb.europa.eu/documents/guideline/guidelines-032022-on-deceptive-design-patterns-in-social-media-platform_en. Evropska komise podobne resi nekale obchodni praktiky a transparentnost vuci spotrebitelum: https://commission.europa.eu/law/law-topic/consumer-protection-law/unfair-commercial-practices-and-price-indication/unfair-commercial-practices-directive_en. Prakticky preklad pro SaaS: rustovy experiment nesmi byt hezky pojmenovany natlak.

### 1. Zacni rozhodnutim, ne variantou tlacitka

Spatna otazka:

```text
Zvedne zelene CTA konverzi?
```

Lepsi otazka:

```text
Rozumi navstevnici z B2B agentur rychleji tomu, ze nabizime audit datove stopy webu, kdyz hlavni CTA rika "Ziskat audit webu" misto "Domluvit konzultaci"?
```

Rozdil je zasadni. Prvni otazka meri barvu. Druha meri srozumitelnost nabidky pro konkretni segment. Barva muze nahodne vyhrat a nic te nenaucit. Srozumitelnost nabidky ti rekne, jestli mas problem v copy, v pozicovani nebo ve forme dalsiho kroku.

Pred experimentem vypln jednu kartu:

```text
Nazev experimentu:
[jedna veta]

Rozhodnuti po experimentu:
Kdyz [metrika] bude [hranice], udelame [konkretni zmena].
Kdyz ne, udelame [navrat / jina varianta / dalsi rozhovor].

Segment:
[komu se experiment ukazuje]

Hypoteza:
Verime, ze [zmena] pomuze [segmentu] udelat [akce], protoze [duvod].

Primarni metrika:
[jedna metrika]

Ochranna metrika:
[co nesmi zhorsit duveru, kvalitu leadu, odhlaseni, support]

Data:
[jake eventy nebo zaznamy sbirame]

Retence:
[kdy agregovana a surova data mazeme]

Stop podminka:
[kdy experiment zastavime drive]
```

Pokud kartu neumite vyplnit, experiment jeste neni pripraveny. To neni byrokracie. Je to ochrana pred tim, aby se z tymu nestali lide, kteri kazdy patek posouvaji tlacitka a rikaji tomu strategie.

### 2. Mer malo, ale presne

Pro maly SaaS vetsinou staci ctyri typy experimentu:

| Typ experimentu | Co overuje | Minimalni data |
| --- | --- | --- |
| Nabidka | Jestli lide chapou hodnotu | navsteva stranky, klik na CTA, kvalita dotazu |
| Onboarding | Jestli uzivatel dojde k prvni hodnote | start registrace, dokonceni klicove akce, chyba |
| Pricing | Jestli balicky odpovidaji rozhodovani zakaznika | zobrazeni ceniku, klik na plan, dotaz na obchod |
| Aktivace | Jestli nova funkce meni chovani | pouziti funkce, navrat do toku, support signal |

Eventy pojmenuj podle udalosti, ne podle interniho HTML:

```text
pricing_viewed
demo_requested
signup_started
workspace_created
first_report_exported
onboarding_step_failed
```

Vyhni se eventum typu:

```text
button_blue_clicked
hero_variant_b_seen
user_hesitated_7_seconds
scroll_depth_87
```

Nekdy je technicky detail uzitecny, ale casto jen vyrabi dojem presnosti. Experiment ma vest k rozhodnuti. Nepotrebujes vedet kazde mikrohnuti kurzoru, abys poznal, ze lide nerozumi ceniku.

### 3. Randomizace bez osobni slozky

A/B test casto potrebuje konzistentne ukazat stejnemu navstevnikovi stejnou variantu. To ale neznamena, ze musis stavet trvaly profil.

Privacy-first varianty:

- serverova volba podle anonymni session, pokud uz session existuje pro produktovy duvod,
- kratkodoba cookie jen pro experiment, pokud ji umis jasne popsat a smazat,
- rozdeleni podle kampanove URL pro maly traffic,
- casove okenko pro jednoduche marketingove testy, pokud nehrozi zkresleni,
- rucni porovnani dvou landing pages pro prvni signal.

Priklad bezpecnejsiho nastaveni:

```text
Experiment:
CTA na landing page

Identifikator:
Nahodna kratkodoba hodnota ulozena jen pro tento experiment

Retence:
14 dni pro surove udalosti, potom jen agregace podle varianty

Zakazane:
Propojovani s reklamnim profilem, export do socialnich siti, sdileni emailu pred odeslanim formulare
```

Pokud experiment potrebuje osobni data, zeptej se proc. Casto zjistis, ze nepotrebujes identitu uzivatele, ale jen pocet dokoncenych akci podle varianty.

### 4. Ochranna metrika chrani pred hloupym vitezstvim

Nejjednodussi experimenty vyhravaji tim, ze zvysi jednu metriku a rozbiji neco dulezitejsiho. Napriklad agresivnejsi pop-up zvysi pocet emailu, ale zhorsi kvalitu leadu, zvysi odhlaseni a ubere duveru. To neni vyhra. To je pujcka s vysokym urokem.

Ke kazdemu experimentu pridej ochrannou metriku:

- CTA test: nesmi klesnout kvalita leadu podle obchodniho zapisu.
- Pricing test: nesmi narust pocet dotazu "co vlastne dostanu?".
- Onboarding test: nesmi narust support k prvnimu nastaveni.
- Email test: nesmi narust odhlaseni nebo odpovedi typu "proc mi to posilate?".
- Trial test: nesmi snizit pocet uzivatelu, kteri realne aktivuji hlavni funkci.

**Codyho komentar:** Kdyz varianta vyhraje jen proto, ze lidi vic zmati, neni to optimalizace. Je to dluh v duvere. A ten se v B2B vetsinou splati v nejhorsi mozne chvili: pri security dotazniku, obnoveni smlouvy nebo prvnim incidentu.

### 5. Nepouzivej experimenty na veci, kde mas proste mluvit s lidmi

Maly traffic neni ostuda. Ostuda je delat z peti navstevniku statisticky zavod. Pokud mas malo dat, pouzij experiment jako strukturovany rozhovor nebo concierge test.

Misto A/B testu udelej:

- pet rozhovoru s lidmi, kteri opustili onboarding,
- review nahravky demo callu a dotazu na pricing,
- rucni audit deseti poptavek,
- test dvou textu v follow-up emailech,
- dvoustrankovy prototyp poslanim primym odkazem trem zakaznikum.

Priklad:

```text
Nejistota:
Nevi zakaznici, jestli potrebujeme pristup k jejich produkcnim datum.

Experiment bez velke analytiky:
Na trust page pridame kratky blok "Co nepotrebujeme videt" a behem peti demo callu sledujeme, jestli se tato obava objevi mene casto.

Rozhodnuti:
Kdyz se otazka opakuje dal, doplnime samostatnou dokumentaci k pristupum a ukazku demo sandboxu.
```

Tohle neni vedecky dokonale. Je to ale dost dobre pro produktove rozhodnuti v malem tymu.

### 6. 60min postup

```text
00-08 min: Vyber jednu nejistotu.
Napr. "Lide nerozumi balicku Team" nebo "Registrace pada na prvnim importu".

08-15 min: Napis rozhodnuti predem.
Co presne zmenis, kdyz experiment vyjde? Co udelas, kdyz nevyjde?

15-25 min: Vyber primarni a ochrannou metriku.
Jedna metrika pro vyhru, jedna pro duveru nebo kvalitu.

25-35 min: Navrhni minimalni data.
Seznam eventu, retenci, kde data lezi a kdo k nim ma pristup.

35-45 min: Priprav variantu.
Jen jedna zmena najednou: text, poradi kroku, cena, vysvetleni, CTA.

45-52 min: Zkontroluj UX proti manipulaci.
Zadny skryty odmitaci krok, zadne predskrtle souhlasy, zadny natlakovy countdown bez reality.

52-60 min: Zapis start a stop podminku.
Kdy experiment konci, kdo ho vyhodnoti a kam se zapise rozhodnuti.
```

### Checklist: experiment bez datoveho hladu

- [ ] Experiment resi jednu jasnou nejistotu.
- [ ] Pred startem existuje rozhodnuti pro vyhru i pro prohru.
- [ ] Primarni metrika neni vanity cislo bez obchodniho dopadu.
- [ ] Existuje ochranna metrika pro duveru, kvalitu nebo support.
- [ ] Sbirame jen eventy nutne pro vyhodnoceni.
- [ ] Identifikator experimentu neni trvaly profil uzivatele.
- [ ] Data zustavaji v evropskem provozu nebo v predem schvalenem dodavateli.
- [ ] Surova data maji kratkou retenci a po vyhodnoceni zustava jen agregace.
- [ ] Varianta nepouziva natlakove, klamave nebo skryte volby.
- [ ] Experiment nezacina, pokud by vyzadoval novy neovereny tracker.
- [ ] Vysledek konci zapisem rozhodnuti, ne jen screenshotem grafu.

---

## Zdroje

- AI Act, Regulation (EU) 2024/1689, EUR-Lex: https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng
- European Commission, AI Act: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- AI Act Service Desk, Timeline for the Implementation of the EU AI Act: https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act
- GDPR, Regulation (EU) 2016/679, EUR-Lex: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng
- EDPB Guidelines 07/2020 on the concepts of controller and processor in the GDPR: https://www.edpb.europa.eu/system/files/2023-10/EDPB_guidelines_202007_controllerprocessor_final_en.pdf
- WP29/EDPB Guidelines on Data Protection Impact Assessment (DPIA): https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/data-protection-impact-assessment-dpia_en
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
- Keep a Changelog, Version 1.1.0: https://keepachangelog.com/en/1.1.0/
- Semantic Versioning 2.0.0: https://semver.org/

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
- 2026-07-31: Pridan 30denni akcni plan po docteni, ktery prevadi e-book do tydnovych vystupu pro nabidku, hlavni cestu, mereni a provoz.
- 2026-07-31: Pridan 90min audit existujiciho SaaS vcetne casoveho planu, auditu hlavniho toku, datove stopy a sablony vystupu.
- 2026-07-31: Doplnena sedmidenni navazujici iterace po 90min auditu, ktera prevadi nalezy do tri konkretnich oprav s vlastnikem, vystupem a overenim.
- 2026-07-31: Pridana prakticka priloha Trust page za 60 minut vcetne osnovy, mikrocopy pro duverove obavy, hodinoveho postupu a checklistu.
- 2026-07-31: Pridana prakticka priloha Mesicni privacy-first provozni audit pro pravidelnou kontrolu datove mapy, dodavatelu, verejnych slibu a tri prioritnich oprav.
- 2026-07-31: Pridana prakticka priloha Retencni politika a mazani dat za 60 minut vcetne datovych kategorii, retencnich pravidel, mazaciho toku, sablony a checklistu.
- 2026-07-31: Pridana prakticka priloha Recyklace obsahu bez platformni pasti za 45 minut vcetne vyberu vhodneho obsahu, distribuce pres primarni URL, knihovny odpovedi a checklistu.
- 2026-07-31: Pridana prakticka priloha Lead magnet bez datove pasti za 60 minut vcetne vyberu formatu, datoveho kontraktu, landing sablony, distribuce a checklistu.
- 2026-07-31: Pridana prakticka priloha Incidentove cviceni za 45 minut vcetne scenaru, prvnich kroku, komunikace, vystupu oprav a checklistu.
- 2026-07-31: Pridana prakticka priloha Security a DPA dotaznik bez paniky za 60 minut vcetne odpovedniho balicku, presnych formulaci, hranic slibu a checklistu pripravenosti.
- 2026-07-31: Pridana prakticka priloha Zakaznicka podpora bez datove pasti za 60 minut vcetne support datoveho kontraktu, triage, sablon odpovedi a checklistu.
- 2026-07-31: Pridana prakticka priloha Subprocesori a zmeny dodavatelu za 60 minut vcetne verejneho seznamu, procesu zmeny, oznamovaci sablony a checklistu.
- 2026-07-31: Pridana prakticka priloha Exit plan dodavatele za 45 minut vcetne karty kritickeho dodavatele, exportni kontroly, nouzoveho fallbacku a ukoncovaciho checklistu.
- 2026-07-31: Pridana prakticka priloha Mini DPIA pred novou funkci za 60 minut vcetne rizikoveho filtru, sablony posouzeni, opatreni a checklistu.
- 2026-07-31: Pridana prakticka priloha AI asistenti v SaaS tymu bez vynaseni dat za 60 minut vcetne rizikovych rezimu, minimalizace promptu, tymovych pravidel a checklistu.
- 2026-07-31: Pridana prakticka priloha Changelog jako duvera, marketing a provoz za 45 minut vcetne kategorii, sablony, distribuce a privacy/security kontrol.
- 2026-07-31: Pridana prakticka priloha Vyber AI nastroje pred prvnim promptem za 45 minut vcetne vendor karty, prompt policy, lidske kontroly a checklistu pred adopci.
- 2026-07-31: Pridana prakticka priloha Rozhodovaci zaznamy pro maly SaaS za 45 minut vcetne sablony, datoveho dopadu, kontrolnich bodu a checklistu.
- 2026-07-31: Pridana prakticka priloha Demo call bez slibu navic za 45 minut vcetne scenare discovery, cileneho dema, privacy otazek, zapisu po callu a checklistu.
- 2026-07-31: Pridana prakticka priloha Follow-up po demu bez natlaku za 45 minut vcetne sablon emailu, prace s namitkami, datove minimalizace a checklistu.
- 2026-08-01: Pridana prakticka priloha Pilotni nabidka bez rozsahove exploze za 60 minut vcetne uspechu pilotu, rozsahu, datove hranice, ceny, vyhodnoceni a checklistu.
- 2026-08-01: Pridana prakticka priloha Dokumentacni hub bez firemniho smetiste za 45 minut vcetne mista pravdy, vlastniku dokumentu, prace s citlivymi priklady, udrzovaciho rytmu a checklistu.
- 2026-08-01: Pridana prakticka priloha Demo sandbox bez zakaznickych dat za 45 minut vcetne syntetickych dat, hranic sandboxu, mikrotextu, uklidu po demu a checklistu.
- 2026-08-01: Pridana prakticka priloha Kvalifikace leadu bez CRM bordelu za 45 minut vcetne rozhodovacich poli, jednoducheho skore, sablon reakci, tydenniho uklidu pipeline a checklistu.
- 2026-08-01: Pridana prakticka priloha Predavka z obchodu do onboardingu bez ztraty kontextu za 45 minut vcetne handoff karty, datoveho kontraktu, onboardingoveho emailu, vyhodnoceni milniku a checklistu.
- 2026-08-01: Pridana prakticka priloha Status page a incident komunikace za 45 minut vcetne komponent, komunikacnich prahu, sablon updatu, planovane udrzby a checklistu.
- 2026-08-01: Pridana prakticka priloha Obnova ze zalohy bez paniky za 45 minut vcetne karty zalohy, rezimu obnovy, runbooku, testu obnovy, komunikace a checklistu.
- 2026-08-01: Pridana prakticka priloha Feedback loop bez datoveho skladu za 45 minut vcetne feedback karty, rozhodovacich kosu, minimalnich metrik, zavirani smycky se zakaznikem a checklistu.
- 2026-08-01: Pridana prakticka priloha Roadmapa bez slibotechny za 45 minut vcetne tri horizontu, roadmap karty, privacy review, verejnych slibu a checklistu.
- 2026-08-01: Pridana prakticka priloha Experimenty a A/B testy bez sledovaciho cirkusu za 60 minut vcetne experiment karty, minimalnich eventu, ochrannych metrik, retence dat a checklistu.
