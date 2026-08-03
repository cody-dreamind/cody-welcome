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

## Prakticka priloha: Pristupova prava a offboarding bez zapomenutych uctu za 45 minut

Pristupy jsou nudne jen do chvile, nez byvaly dodavatel porad vidi produkcni administraci, obchodnik ma export vsech leadu v osobnim nastroji nebo sdilene heslo zije dele nez pulka roadmapy. U maleho SaaS tymu se pristupova prava casto resi az ve stresu. Privacy-first provoz to dela obracene: nejdriv jasna pravidla, potom pohodli.

GDPR v clanku 5 pracuje mimo jine s minimalizaci dat, omezenim ulozeni, integritou a duvernosti: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng. OWASP radi broken access control mezi klicova rizika webovych aplikaci: https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/. ENISA ve sve prirucce pro male a stredni firmy doporucuje zakladni kyberbezpecnost stavet na praktickych organizacnich opatrenich, ne jen na technickych nastrojich: https://www.enisa.europa.eu/publications/cybersecurity-guide-for-smes.

Prakticky preklad: kdo nepotrebuje data k praci, nema je videt. Kdo uz pro tym nepracuje, nema pristup vubec. Kdo potrebuje docasny pristup, ma mit konec napsany predem.

### 1. Udelej inventar pristupu, ne lov duchu v nastrojich

Prvni krok neni kupovat dalsi identity platformu. Prvni krok je zjistit, kde vlastne existuji ucty.

Zacni tabulkou:

| System | Kdo ma pristup | Role | Proc | Vlastnik | Kontrola |
| --- | --- | --- | --- | --- | --- |
| Hosting | Ondrej, DevOps dodavatel | admin, deploy | provoz a incidenty | CTO | mesicne |
| Databaze | Backend lead | read/write | migrace a incidenty | CTO | mesicne |
| Analytika | marketing, founder | viewer | kampane a konverze | marketing | kvartalne |
| Emailing | support | operator | odpovedi zakaznikum | support lead | mesicne |
| Billing | finance, founder | admin, viewer | faktury a platby | finance | mesicne |

U kazdeho radku chces vedet:

- co je to za system,
- jaka data v nem jsou,
- kdo ma pristup,
- jestli je pristup osobni nebo sdileny,
- jaka role je prirazena,
- proc pristup existuje,
- kdo ho schvaluje,
- kdy se naposledy kontroloval.

Sdilene ucty oznac jako incident cekajici na vhodnou chvili. Nekdy je docasne nevyhodis hned, protoze nastroj nema lepsi model prav. Ale musis vedet, kde jsou, kdo zna heslo a kdy je nahradis.

**Codyho komentar:** "Mame to v heslovniku" neni odpoved na otazku, kdo muze co udelat. Heslovnik je trezor. Prava jsou provozni rozhodnuti. Kdyz se tyhle dve veci pletou, nekdo driv nebo pozdeji dostane vetsi kladivo, nez potrebuje.

### 2. Role pojmenuj podle prace, ne podle ega

Role `admin` je pohodlna, ale nebezpecne navykova. Pro maly SaaS staci jednoducha sada:

| Role | Kdy ji pouzit | Co typicky nesmi |
| --- | --- | --- |
| Owner | vlastnik systemu, fakturace, kriticke nastaveni | byt sdilena role pro beznou praci |
| Admin | sprava uzivatelu, konfigurace, incidenty | denni rutinni pouziti bez duvodu |
| Editor | uprava obsahu, kampani, sablon | menit prava a exportovat vse |
| Operator | vyrizeni supportu nebo obchodniho toku | menit konfiguraci systemu |
| Viewer | kontrola, reporting, audit | upravy, exporty, mazani |
| Temporary | kratka pomoc dodavatele | zustat bez data expirace |

Pravidlo je jednoduche: clovek ma mit nejmensi roli, se kterou dokonci praci bez obchazeni systemu. Kdyz nekdo potrebuje vyssi roli jednou za mesic, nedelej z ni trvale nastaveni. Udelej docasne zvyseni s duvodem a koncem.

Priklad zadosti:

```text
Kdo:
Jana, marketing

System:
Analytika webu

Pozadovana role:
Editor na 7 dni

Duvod:
Nastaveni cilu pro novou landing page kampan.

Konec:
2026-08-08, potom zpet na Viewer.

Schvalil:
Owner analytiky
```

Tahle karta muze zit v issue, interni poznamce nebo ticketu. Dulezite je, aby existovala mimo chat, ktery za tyden nikdo nenajde.

### 3. Onboarding pristupu delaj jako checklist

Novy clovek nema dostat "vsechno, at muze zacit". Ma dostat to, co potrebuje pro prvni tyden. Zbytek se prida podle realne prace.

Minimalni onboarding karta:

```text
Clovek:
[jmeno / role]

Start:
[datum]

Prvni odpovednost:
[co ma realne delat]

Nutne systemy:
- [system] / [role] / [duvod]
- [system] / [role] / [duvod]

Zakazane zkratky:
- zadne sdilene produkcni prihlaseni
- zadne exporty zakaznickych dat do osobnich nastroju
- zadne kopirovani produkcnich dat do lokalniho vyvoje

Kontrola po 14 dnech:
[kdo zkontroluje, jestli prava sedi]
```

Dobry onboarding pristupu ma tri vystupy:

- clovek vi, kde pracovat,
- vlastnik systemu vi, proc pristup existuje,
- tym vi, kdy se pristup znovu zkontroluje.

U dodavatelu pridej jeste rozsah prace a konec spoluprace. Dodavatel bez data revize je bud trvaly clen tymu, nebo budouci prekvapeni. Vyber si, co z toho je pravda, a podle toho nastav prava.

### 4. Offboarding musi byt rychlejsi nez rozluckovy call

Offboarding neni emocionalni udalost. Je to provozni tok. Ma byt kratky, spustitelny a hotovy ve stejny den, kdy konci pristupova potreba.

Offboarding karta:

```text
Clovek / dodavatel:
[jmeno]

Konec prace:
[datum a cas]

Systemy k odebrani:
- hosting
- repozitare
- analytika
- CRM / lead evidence
- email / support
- billing
- cloud storage
- monitoring
- heslovnik
- komunikacni nastroje

Data k predani:
- rozpracovane ukoly
- dokumentace
- otevrene incidenty
- zakaznicke kontexty

Tajemstvi k rotaci:
- API klice, pokud byly sdilene nebo pristupne
- deploy tokeny
- webhook secrety
- zalozni pristupy

Potvrzeni:
[vlastnik] zkontroloval audit log / seznam uzivatelu.
```

Nejdulezitejsi pravidlo: odebrani pristupu nenechavej jen na cloveku, ktery odchazi. Je to odpovednost vlastnika systemu. Kdyz clovek odchazi v dobrem, je to porad stejne pravidlo. Bezpecnost nema byt zavisla na nalade posledniho dne.

### 5. Pravidelna revize prav ma mit rytmus

Pristupy se nekazi naraz. Kazi se postupne. Jeden docasny admin, jeden zapomenuty dodavatel, jeden export do nastroje "jen na analyzu" a najednou mas datovou stopu, kterou nikdo neumi obhajit.

Navrh rytmu pro maly SaaS:

- tydne: zkontroluj nove a docasne pristupy,
- mesicne: projdi produkcni systemy, billing, hosting, databazi, podporu a analytiku,
- kvartalne: projdi vsechny dodavatele a integrace,
- po incidentu: zkontroluj, jestli pristupy nezvetsily dopad,
- po zmene role: sniz prava driv, nez clovek zacne delat novou praci.

Mesicni revize muze byt kratka:

```text
System:
[nazev]

Zmeny od minule:
[nove ucty / odebrane ucty / role]

Docasne pristupy:
[kdo, proc, konec]

Prebytecna prava:
[co snizit]

Sdilene ucty:
[existuji? plan nahrady]

Exporty:
[kdo muze exportovat data a proc]

Rozhodnuti:
[tri konkretni upravy]
```

U privacy-first SaaS je zvlast dulezite hlidat exporty. Viewer role, ktera umi jednim klikem stahnout vsechny zakazniky, neni jen viewer. Je to exportni role v prevleku.

### 6. 45min postup

```text
00-08 min: Vyber deset nejdulezitejsich systemu.
Hosting, repozitare, databaze, billing, support, analytika, email, storage, monitoring, heslovnik.

08-18 min: Sepis lidi a role.
U kazdeho systemu zapis, kdo ma pristup a proc.

18-25 min: Oznac rizika.
Sdilene ucty, trvali admini, byvali dodavatele, exportni prava, chybejici 2FA.

25-32 min: Sniz jednu zbytecnou roli.
Vyber opravu, kterou muzes udelat hned bez velke migrace.

32-38 min: Vytvor onboarding a offboarding kartu.
Jedna sablona pro nove pristupy, jedna pro odebrani.

38-43 min: Nastav revizni rytmus.
Kdo a kdy kontroluje docasne, produkcni a dodavatelske pristupy.

43-45 min: Zapis vlastnika.
Kazdy kriticky system musi mit cloveka, ktery za prava odpovida.
```

### Checklist: pristupova prava a offboarding

- [ ] Existuje seznam kritickych systemu a vlastniku.
- [ ] U kazdeho pristupu vime, kdo ho ma, proc a v jake roli.
- [ ] Sdilene ucty jsou oznacene a maji plan nahrady.
- [ ] Admin role nejsou pouzivane pro beznou denni praci.
- [ ] Docasne pristupy maji datum konce.
- [ ] Dodavatele maji pristup jen k tomu, co odpovida rozsahu prace.
- [ ] Exportni prava jsou vedena jako samostatne riziko.
- [ ] Onboarding pristupu zacina minimalnim rozsahem pro prvni praci.
- [ ] Offboarding karta pokryva hosting, repo, data, billing, support, analytiku i heslovnik.
- [ ] Po odchodu se podle potreby rotuji sdilena tajemstvi a tokeny.
- [ ] Pristupy se kontroluji pravidelne, ne az po problemu.
- [ ] Vetsi zmeny prav se zapisuji jako provozni rozhodnuti.

---

## Transakcni emaily bez datove pasti za 45 minut

Email je v SaaS porad hlavni provozni kanal. Potvrzuje registraci, obnovuje heslo, zve lidi do tymu, posila faktury, hlasi incidenty a nekdy zachrani onboarding, ktery se v aplikaci zasekl. Prave proto se s nim musi zachazet jako s casti produktu, ne jako s marketingovou odkladaci plochou.

Privacy-first pravidlo je jednoduche: transakcni email ma dorucit konkretni provozni informaci cloveku, ktery ji ocekava. Nema byt nenapadny newsletter, sledovaci senzor ani sklad osobnich dat v hlavickach, odkazech a sablonach.

Technicky zaklad dorucitelnosti stoji hlavne na autentizaci domeny. SPF popisuje RFC 7208: https://datatracker.ietf.org/doc/html/rfc7208. DKIM popisuje RFC 6376: https://datatracker.ietf.org/doc/html/rfc6376. DMARC popisuje RFC 7489: https://datatracker.ietf.org/doc/html/rfc7489. Google ve svych sender guidelines aktualne pozaduje autentizaci emailu a u bulk senderu mimo jine SPF, DKIM a DMARC: https://support.google.com/mail/answer/81126. Prakticky preklad: i maly SaaS si ma dat DNS a odesilani do poradku driv, nez zacne ladit krasu tlacitek v emailu.

### 1. Rozdel emaily podle ucelu

Nejdriv si udelej inventar. Vetsina malych produktu ma emaily promichane podle toho, kdo je napsal jako prvni. To pak vede k tomu, ze reset hesla vypada jako kampan a marketingovy email pouziva stejnou odesilaci identitu jako faktura. Bordel v mailingu je nudny problem, dokud neni prvni blacklist nebo pravni dotaz.

Zakladni kategorie:

| Typ emailu | Priklad | Hlavni pravidlo |
| --- | --- | --- |
| Autentizace | potvrzeni emailu, reset hesla, 2FA kod | Kratke, bez marketingu, vysoka priorita. |
| Ucet a tym | pozvanka, zmena role, export dat | Jasny kontext, kdo akci vyvolal a co se stane. |
| Billing | faktura, neuspesna platba, konec trialu | Presne castky, terminy, zadne mlzeni. |
| Produktovy provoz | limit, import hotov, chyba integrace | Rict dopad a dalsi krok. |
| Bezpecnost | nove prihlaseni, zmena hesla, incident | Minimalni detail, rychla cesta k reakci. |
| Marketing | newsletter, edukacni serie, kampan | Oddeleny souhlas, odhlaseni, jiny rytmus. |

U kazde sablony zapis jednu vetu ucelu:

```text
Tento email existuje proto, aby [prijemce] mohl [konkretni akce nebo rozhodnuti].
```

Kdyz se veta neda napsat, email nejspis nema existovat. Kdyz veta zni "abychom mu pripomneli, ze existujeme", neni to transakcni email. Je to marketing, jen s knirkem.

### 2. Minimalizuj data v sablone i odkazech

Email se casto preposila, indexuje ve firemnim mailboxu, konci v supportu a zustava v archivech dele, nez aplikacni logy. Proto do nej neposilej data, ktera nejsou potreba pro rozhodnuti.

Dobry transakcni email obsahuje:

- kdo akci vyvolal, pokud je to pro prijemce dulezite,
- co se stalo,
- ktery ucet nebo workspace je dotceny,
- jaky je dalsi krok,
- do kdy je potreba reagovat,
- kam napsat, pokud je neco spatne.

Co do emailu typicky nepatri:

- cele zpravy zakazniku,
- osobni data tretich osob bez jasneho duvodu,
- tajne tokeny v citelnem textu,
- dlouhe debug chyby,
- kompletni exporty jako prilohy,
- skryte tracking pixely u provoznich zprav.

U odkazu pouzivej kratkodobe, jednou pouzitelne tokeny tam, kde jde o citlivou akci. Token nedavej do logu jako volny text a po pouziti ho zneplatni. U resetu hesla neposilej nove heslo emailem. Posli odkaz na bezpecny tok, nastav expiraci a po dokonceni posli kratke potvrzeni.

**Priklad reset emailu:**

```text
Predmet: Obnova pristupu k uctu Cody

Dostali jsme zadost o obnovu pristupu k uctu [email].

Odkaz je platny 30 minut:
[obnovit pristup]

Pokud jste o obnovu nezadali, email ignorujte. Heslo zustane beze zmeny.
```

Je to nudne. To je presne cil. Reset hesla nema byt copywritersky festival.

### 3. Odesilaci domena a autentizace jsou soucast produktu

Pro maly SaaS nastav aspon:

- samostatnou odesilaci subdomenu, napriklad `mail.example.com` nebo `notify.example.com`,
- SPF zaznam pro autorizovane odesilatele,
- DKIM podpisy pro odesilane zpravy,
- DMARC politiku nejdriv v rezimu sledovani a potom prisneji podle vysledku,
- oddelene streamy pro transakcni a marketingove emaily,
- monitoring bounce, complaint a delivery problemu.

Minimalni rollout DMARC:

```text
1. Zmapuj, kdo smi posilat za domenu.
2. Nastav SPF a DKIM u kazdeho legitimniho odesilatele.
3. Zapni DMARC s p=none a reporty do kontrolovane schranky nebo nastroje.
4. Oprav legitimni odesilatele, kteri neprochazeji.
5. Postupne prejdi na quarantine nebo reject, pokud vis, co delas.
```

DMARC neni magicke brneni. Pomaha prijemcum poznat, zda email opravdu souvisi s domenou v odesilateli. Kdyz ale posilas pres pet nastroju a nikdo nevi ktere, reporty ti ukazou hlavne mapu vlastniho chaosu. To je neprijemne, ale uzitecne.

### 4. Marketing nepasuj do transakcnich zprav

Transakcni email ma mit jasny provozni ucel. Muze obsahovat drobny kontext produktu, ale nesmi zneuzivat pozornost, kterou prijemce dava dulezite zprave.

Ferove:

- ve fakture kratce pripomenout, kde stahnout smluvni dokumenty,
- v pozvance do tymu vysvetlit, kdo pozvanku poslal,
- po dokonceni exportu dat pridat odkaz na nastaveni retence.

Podezrele:

- do resetu hesla pridat "mimochodem sleva jen dnes",
- do incident emailu vlozit upsell,
- poslat produktovy tip v emailu, ktery se tvari jako bezpecnostni upozorneni,
- pouzit transakcni stream pro lidi, kteri se neodhlasili z marketingu.

U marketingovych a hromadnych emailu res odhlaseni jako prvotridni funkci. RFC 8058 popisuje one-click mechanismus pro `List-Unsubscribe`: https://datatracker.ietf.org/doc/html/rfc8058. I kdyz neposilas velke objemy, prakticke pravidlo je stejne: odhlaseni ma byt snazsi nez stiznost. Skryte odhlaseni neni rustova strategie, je to prosba o reputacni facku.

**Codyho komentar:** Kdyz nekdo otevre email kvuli fakture, neni to pozvanka k tomu, abychom mu prodali tri dalsi veci. Je to faktura. Internet prezije jednu mene chytrou kampan.

### 5. Sablony pis pro stresove situace

Transakcni emaily se casto ctou ve spechu. Clovek nevi, proc platba selhala, proc se nemuze prihlasit, proc ma noveho admina v uctu nebo jestli prisel phishing. Text proto musi byt kratky, konkretni a konzistentni.

Sablona provozniho emailu:

```text
Predmet: [Co se stalo] v [produkt / workspace]

Co se stalo:
[jedna az dve vety]

Co to znamena:
[dopad pro prijemce]

Co muzete udelat:
[primarni akce]

Bezpecnost a data:
[kratka informace, pokud se tyka pristupu, dat nebo soukromi]

Kontakt:
[support email nebo status page]
```

Priklady mikrocopy:

| Situace | Lepsi veta |
| --- | --- |
| Pozvanka do tymu | "Ondrej vas pozval do workspace Dreamind jako editor." |
| Zmena role | "Vase role se zmenila z editor na viewer. Pokud to necekate, odpovezte na tento email." |
| Export hotov | "Export je pripraveny ke stazeni 7 dni. Po teto dobe odkaz zneplatnime." |
| Neuspesna platba | "Platba se nepodarila. Sluzba zustava aktivni do [datum]." |
| Bezpecnostni upozorneni | "Zaznamenali jsme nove prihlaseni. Pokud jste to nebyli vy, obnovte heslo a kontaktujte podporu." |

Kazdy email o datech ma rict, co se stane dal. "Vas export je hotov" je malo. "Export je hotov, odkaz je platny 7 dni a potom soubor smazeme" je uz provozni informace.

### 6. 45min postup

```text
00-07 min: Sepis vsechny emaily.
Registrace, reset hesla, pozvanky, billing, export, incidenty, produktove notifikace, marketing.

07-14 min: Rozdel je do kategorii.
Transakcni, bezpecnostni, billing, produktove, marketingove. Oznac sporne pripady.

14-22 min: U tri nejdulezitejsich sablon sniz data.
Odeber zbytecne osobni udaje, debug texty, tracking pixely a prilohy.

22-30 min: Zkontroluj domenu.
SPF, DKIM, DMARC, odesilaci subdomena, oddeleni transakcnich a marketingovych streamu.

30-36 min: Prepis predmety a prvni odstavec.
Kazdy email musi rict, co se stalo a co ma prijemce udelat.

36-41 min: Nastav odhlaseni a preference.
Marketing musi mit jasne odhlaseni. Produktove notifikace maji mit preference tam, kde to dava smysl.

41-45 min: Zapis vlastnika a test.
Kdo sablony udrzuje, jak se testuje doruceni a kdy se kontroluji bounce/complaint problemy.
```

### Checklist: transakcni emaily

- [ ] Vsechny emaily maji kategorii a vlastnika.
- [ ] Transakcni emaily nejsou pouzivane jako schovany marketing.
- [ ] Reset hesla a citlive odkazy pouzivaji kratkodobe tokeny.
- [ ] Emailove sablony neobsahuji zbytecne osobni udaje ani debug vypisy.
- [ ] Provozni emaily nemaji tracking pixely bez jasneho duvodu.
- [ ] Odesilaci domena ma nastavene SPF, DKIM a DMARC.
- [ ] Transakcni a marketingove emaily maji oddeleny stream nebo aspon jasne oddelenou konfiguraci.
- [ ] Marketingove emaily maji jednoduche odhlaseni.
- [ ] Bounce a complaint signaly nekdo pravidelne kontroluje.
- [ ] Bezpecnostni emaily jsou kratke, jasne a bez upsellu.
- [ ] Exportni a datove emaily rikaji, kdy odkaz nebo soubor prestane platit.
- [ ] Sablony se testuji pred zmenou v produkci.

---

## Export dat pro zakaznika bez improvizace za 60 minut

Export dat je jedna z tech funkci, ktere vypadaji nudne, dokud ji nekdo opravdu nepotrebuje. Zakaznik odchazi, auditor se pta na evidenci, uzivatel chce kopii svych osobnich udaju, nebo firma potrebuje presunout data do jineho systemu. V tu chvili se ukaze, jestli produkt bere kontrolu nad daty vazne, nebo jestli byla "data jsou vase" jen pekna veta na landing page.

Privacy-first SaaS ma mit export jako provozni schopnost, ne jako hrdinsky SQL dotaz napsany ve stresu. Cilem neni exportovat vsechno, co kdy databaze videla. Cilem je dodat spravna data spravnemu prijemci ve spravnem rozsahu, citelnem formatu a s jasnou expiraci.

GDPR rozlisuje mimo jine pravo na pristup podle clanku 15 a pravo na prenositelnost podle clanku 20. Pravo na pristup zahrnuje potvrzeni, zda se osobni udaje zpracovavaji, pristup k nim a souvisejici informace o zpracovani. Pravo na prenositelnost se tyka osobnich udaju, ktere subjekt poskytl spravci, pokud zpracovani stoji na souhlasu nebo smlouve a probiha automatizovane: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng. EDPB k pristupu zduraznuje, ze cil je dat lidem kontrolu nad jejich osobnimi udaji a umoznit jim zpracovani overit: https://www.edpb.europa.eu/system/files/2023-04/edpb_guidelines_202201_data_subject_rights_access_v2_en.pdf. K prenositelnosti existuji samostatne pokyny WP242 endorsovane EDPB: https://www.edpb.europa.eu/documents/guideline/guidelines-on-the-right-to-data-portability-under-regulation-2016679-wp242_en.

Pravni poznamka: ne kazdy zakaznicky export je automaticky GDPR portabilita. B2B export celeho workspace, ucetni export, auditni balicek a odpoved na zadost subjektu udaju mohou mit rozdilny pravni rezim, rozsah a prijemce. Produktovy proces je ale podobny: overit zadost, vymezit rozsah, minimalizovat riziko, predat citelne a zapsat, co se stalo.

### 1. Rozdel typy exportu

Nejdriv si pojmenuj, jake exporty produkt vubec umi. Kdyz se vsechny zadosti resi jednim tlacitkem "Download all", je to pohodlne jen do prvniho incidentu.

| Typ exportu | Kdo ho typicky zada | Co obsahuje | Riziko |
| --- | --- | --- | --- |
| Osobni pristup | konkretni uzivatel | osobni udaje o danem cloveku a informace o zpracovani | zamenena identita, data jinych lidi |
| Portabilita | uzivatel nebo zakaznik v roli subjektu udaju | poskytnuta data ve strukturovanem formatu | prilis siroky rozsah, spatny format |
| Workspace export | admin zakaznika | data uctu, konfigurace, zaznamy tymu | odhaleni dat clenu tymu nebo klientu |
| Ucetni export | finance/admin | faktury, platby, objednavky | danove a smluvni souvislosti |
| Auditni export | security/admin | vybrane logy, pristupy, zmeny | citlive provozni detaily |
| Offboarding export | odchazejici zakaznik | data potrebna pro migraci nebo archivaci | chaos kolem mazani a retence |

U kazdeho typu zapis:

- kdo ho smi vyvolat,
- co presne obsahuje,
- co zamerne neobsahuje,
- v jakem formatu se predava,
- jak dlouho je dostupny,
- kde se zapisuje auditni stopa.

**Codyho komentar:** Export bez definice rozsahu je jako "poslete mi vsechno". Zni jednoduse, dokud nezjistis, ze "vsechno" obsahuje osobni udaje kolegu, interni poznamky, logy, tokeny a historicky bordel z migrace. To pak neni export. To je dobrodruzny sport.

### 2. Format ma byt citelny i prenositelny

Export neni zaloha pro vyvojare. Je to vystup pro cloveka, firmu nebo jiny system. Proto potrebujes format, ktery je bezny, dokumentovany a bez zbytecne zavislosti na jednom dodavateli.

Prakticke formaty:

| Data | Format | Poznamka |
| --- | --- | --- |
| Tabulkove zaznamy | CSV | Dobre pro faktury, leady, seznamy, jednoduche importy. |
| Strukturovana data | JSON | Dobre pro objekty, vztahy, konfiguraci a API migrace. |
| Dokumenty | puvodni soubory + manifest | Zachovej puvodni soubory, pridej seznam a metadata. |
| Auditni zaznamy | JSONL nebo CSV | Radek po radku, s casem, aktorem a akci. |
| Souhrn pro cloveka | PDF nebo HTML | Jen jako doplnek, ne jediny strojove citelny format. |

Ke kazdemu exportu pridej `README` nebo manifest:

```text
export_type: workspace_export
workspace: [nazev nebo ID]
generated_at: [ISO timestamp]
requested_by: [role nebo user ID]
format_version: 1
files:
- leads.csv: seznam obchodnich zaznamu
- users.csv: clenove workspace a role
- settings.json: konfigurace uctu
excluded:
- aplikacni debug logy
- tajemstvi, tokeny a interni systemove identifikatory
- data jinych workspace
retention:
- odkaz platny 7 dni
- exportni soubor bude pote smazan
```

Format verzuj. Jakmile jednou zakaznikovi reknes, ze `leads.csv` ma sloupec `email`, nema se pristi mesic potichu jmenovat `contact_mail`, protoze nekdo "uklidil naming". Stabilita exportu je soucast produktu.

### 3. Over prijemce a omez cestu k souboru

Export je casto koncentrovana hromada dat. Proto ma mit silnejsi pravidla nez bezne zobrazeni v aplikaci.

Minimalni pravidla:

- Export muze zadat jen role, ktera k tomu ma opravneni.
- U citliveho exportu vyzaduj potvrzeni heslem nebo druhym faktorem.
- Pred vygenerovanim ukaz rozsah: co bude uvnitr a co ne.
- Velke exporty generuj asynchronne a posli jen upozorneni, ne soubor jako prilohu.
- Odkaz na stazeni ma byt kratkodoby a navazany na prihlaseneho uzivatele.
- Stazeni exportu zapis do auditniho logu.
- Po expiraci soubor opravdu smaz, ne jen schovej odkaz.

Email o hotovem exportu nema obsahovat samotna data. Staci:

```text
Predmet: Export dat je pripraveny

Export pro workspace [nazev] je pripraveny ke stazeni.

Odkaz je platny do [datum a cas]. Po expiraci soubor smazeme.

Pokud jste export nezadali, kontaktujte podporu.
```

Kdyz export obsahuje data vice lidi, pridej interni brzdu: kdo smi export schvalit a jestli ma prijemce pravo videt vsechny zahrnute zaznamy. Admin zakaznika casto smi exportovat workspace, ale to neznamena, ze ma dostat interni systemovou historii nebo debug data.

### 4. Rozlis export, mazani a retenci

Export neni konec pribehu. Casto souvisi s ukoncenim sluzby, opravou dat nebo zadosti o vymaz. Proto u kazdeho exportu zapis navazujici stav:

| Situace | Co udelat |
| --- | --- |
| Zakaznik chce kopii pred ukoncenim | Export, potvrzeni prevzeti, potom retencni nebo mazaci proces podle smlouvy. |
| Uzivatel chce pristup ke svym osobnim udajum | Overit identitu, dodat relevantni kopii a informace o zpracovani. |
| Zakaznik chce prenos do jineho systemu | Dodat strojove citelny format a popis schematu. |
| Zakaznik chce smazani | Oddelit export pred smazanim, pravni retenci a skutecne vymazani. |
| Auditor chce dukaz | Dodat vybrany rozsah, ne kompletni surova data. |

Nejhorsi je slibit "smazeme vse" a potom zjistit, ze cast dat zustava v zaloze, logu, emailu nebo u dodavatele. Ferovejsi je napsat: "Aktivni data smazeme do X dni, zalohy expiruji podle retencni politiky do Y dni, ucetni doklady drzime podle pravnich povinnosti." Ano, je to mene romanticke. Ale pravdive.

### 5. 60min postup

```text
00-08 min: Sepis existujici exporty.
Tlacitka v aplikaci, rucni SQL exporty, support postupy, billing exporty, auditni balicky.

08-18 min: Rozdel exporty podle typu a prijemce.
Osobni pristup, portabilita, workspace, billing, audit, offboarding.

18-28 min: U jednoho kritickeho exportu popis schema.
Soubory, sloupce, format, co obsahuje a co zamerne neobsahuje.

28-38 min: Nastav pravidla pristupu.
Kdo smi export zadat, kdo ho schvaluje, jak se overuje identita a kdy je potreba 2FA.

38-48 min: Navrhni bezpecne predani.
Asynchronni generovani, kratkodoby odkaz, auditni log, expirace, smazani souboru.

48-55 min: Propoj export s retenci.
Co se deje po offboardingu, jak dlouho zustava export dostupny, co zustava v agregaci nebo zalohach.

55-60 min: Zapis vlastnika a test.
Kdo export udrzuje, jak casto se zkousi obnova/import a kde je dokumentace formatu.
```

### Checklist: export dat

- [ ] Kazdy typ exportu ma definovany ucel, prijemce a rozsah.
- [ ] Exporty maji bezny strojove citelny format, typicky CSV nebo JSON.
- [ ] Kazdy export ma manifest nebo README s popisem souboru.
- [ ] Format exportu je verzovany.
- [ ] Export neobsahuje tajemstvi, tokeny, debug vypisy ani data jinych uctu bez duvodu.
- [ ] Citlive exporty vyzaduji silne overeni a spravnou roli.
- [ ] Exportni odkazy jsou kratkodobe a vazane na autorizovaneho uzivatele.
- [ ] Stazeni a vytvoreni exportu se zapisuje do auditniho logu.
- [ ] Exportni soubory se po expiraci mazou.
- [ ] Email o exportu neposila data jako prilohu.
- [ ] Offboarding rozlisuje export, smazani, pravni retenci a zalohy.
- [ ] Existuje test, ze export jde precist nebo importovat mimo puvodni aplikaci.

---

## Zadosti subjektu udaju bez supportoveho chaosu za 60 minut

Zadost subjektu udaju neni jen pravni email, ktery se preposle "nekam do backofficu". Je to test toho, jestli produkt opravdu vi, jaka data drzi, proc je drzi a kdo je umi bezpecne najit. Kdyz proces nemas, kazda zadost vypada jako incident. Kdyz proces mas, je to normalni provozni ukon: prijmout, overit, vymezit, odpovedet, zapsat.

GDPR v clanku 12 rika, ze odpoved na zadosti podle clanku 15 az 22 ma prijit bez zbytecneho odkladu a nejpozdeji do jednoho mesice od prijeti; u slozitych nebo pocetnych zadosti lze lhutu prodlouzit o dalsi dva mesice, ale subjekt musi byt informovan do jednoho mesice vcetne duvodu: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng. EDPB v pokynech k pravu na pristup zduraznuje, ze spravce ma byt pripraven zadosti prijimat, posuzovat a vyrizovat bezpecne, pritom nesmi zbytecne komplikovat vykon prav subjektu udaju: https://www.edpb.europa.eu/system/files/2023-04/edpb_guidelines_202201_data_subject_rights_access_v2_en.pdf.

Prakticky cil pro maly SaaS: mit jeden viditelny vstup, jednu interni kartu zadosti, jasne overeni identity, mapu systemu, sablony odpovedi a auditni stopu. Nepotrebujes hned pravni workflow platformu. Potrebujes prestat lovit osobni udaje po Slacku, emailech, CRM, logach a zaloznich CSV souborech jako detektiv po pate kave.

### 1. Rozpoznej typ zadosti driv, nez zacnes exportovat

Lide casto nepouziji pravni termin. Napisi "poslete mi, co o mne mate", "smazte muj ucet", "opravte fakturacni email", "odhlaste me", nebo "nechci, abyste me kontaktovali". System ma umet tyhle formulace prevest na typ zadosti, ale ne prechytracene.

| Formulace od cloveka | Pravdepodobny typ | Prvni krok |
| --- | --- | --- |
| "Chci vedet, co o mne mate." | pristup k osobnim udajum | overit identitu a najit relevantni data |
| "Chci kopii svych dat." | pristup nebo portabilita | upresnit rozsah a format |
| "Smazte muj ucet." | vymaz/offboarding | oddelit aktivni data, retenci, zalohy a ucetni povinnosti |
| "Opravte muj email." | oprava | overit vlastnictvi a zmenit v primarnim systemu |
| "Uz mi nepiste." | namitka/odhlaseni | zastavit prislusny kontaktni ucel |
| "Kde jste vzali muj kontakt?" | informace o zdroji a ucelu | dohledat puvod kontaktu a pravni titul |

U kazde zadosti vytvor kartu:

```text
request_id: DSAR-YYYY-###
received_at: [ISO timestamp]
channel: email / formular / support / postovni adresa
requester: [kontakt]
account_or_workspace: [pokud existuje]
request_type: pristup / oprava / vymaz / omezeni / namitka / portabilita / nejasne
deadline: [datum]
owner: [jmeno nebo role]
identity_check: pending / verified / not_needed / failed
systems_to_search:
- app database
- billing
- support
- email/contact list
- logs
status: received / waiting_for_identity / in_progress / answered / closed
```

Datum prijeti nepocitej az od chvile, kdy si toho nekdo vsimne po dovolene. Pokud zadost prijde na oficialni kontaktni kanal, hodiny bezi. EDPB k tomu prakticky doporucuje mechanismy pro presmerovani a zastupy, aby zadosti nezustaly u cloveka, ktery zrovna neni dostupny.

### 2. Over identitu primerene, ne maximalne

Overeni identity ma chranit data, ne vytvaret dalsi datovy problem. Kdyz se prihlaseny uzivatel pta pres aplikaci, cast overeni uz mas. Kdyz nekdo pise z emailu, ktery je v uctu, muzes pouzit potvrzovaci link nebo odpoved do stejne schranky. Kdyz zadost prichazi z cizi adresy a ty mas predat citlive informace, potrebujes silnejsi overeni.

Primerena pravidla:

- Nepozaduj kopii obcanky automaticky u kazde zadosti.
- Pokud doklad opravdu potrebujes, rekni presne proc a jake casti muze clovek zacit.
- Neptej se na vic udaju, nez potrebujes k overeni.
- Doklady a overovaci prilohy neukladej trvale do support nastroje.
- Kdyz identitu neumis overit, vysvetli co chybi a zastav predani dat.

**Codyho komentar:** Nejabsurdnejsi privacy pattern je "abychom chranili vase soukromi, poslete nam scan celeho dokladu do emailu". Nekdy je silne overeni nutne, ale default ma byt proporcionalita, ne datovy hlad v saku.

### 3. Hledej podle datove mapy, ne podle pameti

Zadost nejde vyridit dobre, pokud nikdo nevi, kde data zijou. Proto ma byt soucasti procesu kratka vyhledavaci mapa. Nemusi byt dokonala, ale musi pokryt systemy, kde se osobni udaje realne objevuji.

Minimalni mapa pro SaaS:

| System | Co hledat | Poznamka k riziku |
| --- | --- | --- |
| Aplikacni databaze | ucet, profil, nastaveni, obsah uzivatele | pozor na data jinych clenu workspace |
| Billing | faktury, platby, danove udaje | cast muze mit povinnou retenci |
| Support | tickety, prilohy, interni poznamky | rediguj poznamky a data tretich osob |
| Email marketing | souhlasy, odhlaseni, kampane | oddel transakcni a marketingove ucely |
| Analytika | identifikatory, eventy, agregace | u privacy-first analytiky casto nebude osobni profil |
| Logy | IP, user ID, chyby, auditni stopa | omez rozsah podle ucelu a retence |
| Dokumentace/CRM | obchodni poznamky, demo zapisy | pozor na subjektivni interni poznamky |

U kazdeho systemu si zapis, jestli se prohledava podle emailu, user ID, workspace ID, fakturacniho kontaktu nebo jineho identifikatoru. Kdyz najdes data, ktera do systemu nepatri, nevyrabej z toho tichou vyjimku. Zapis navazujici opravu: retence, minimalizace, presun nebo smazani.

### 4. Odpoved ma byt srozumitelna, ne jen kompletni

U prave na pristup nejde jen o ZIP plny souboru. Clovek ma pochopit, co se zpracovava a proc. Prakticka odpoved by mela mit dve vrstvy:

- kratke shrnuti pro cloveka,
- prilohu nebo export s daty v citelnem formatu.

Sablona odpovedi:

```text
Predmet: Odpoved na vasi zadost o osobni udaje

Dobry den,

potvrzujeme, ze jsme vyridili vasi zadost prijatou dne [datum].

Zpracovavame tyto hlavni kategorie udaju:
- ucetni a kontaktni udaje,
- data spojena s pouzivanim sluzby,
- komunikaci se supportem,
- provozni a bezpecnostni zaznamy v omezenem rozsahu.

Prilozeny export obsahuje [rozsah]. Neobsahuje [co je vylouceno a proc], napriklad data jinych osob, interni bezpecnostni informace nebo udaje, ktere uz nejsou uchovavany.

Odkaz ke stazeni je platny do [datum]. Po expiraci bude exportni soubor smazan.

Pokud s odpovedi nesouhlasite nebo chcete rozsah upresnit, napiste na [kontakt].
```

Do odpovedi nepis "vsechna vase data", pokud si nejsi jisty, ze je to pravda. Lepsi je presne vymezit rozsah: "data z aplikacni databaze, billing systemu a support komunikace k datu X". Presnost je duveryhodnejsi nez velka veta.

### 5. Smazani neni jedno tlacitko

Zadost o smazani je casto nejslozitejsi, protoze se potkavaji prava subjektu, smluvni vztah, ucetnictvi, bezpecnostni logy, zalohy a prava ostatnich lidi ve workspace. Proces proto musi rozlisit:

| Vrstva | Typicka akce |
| --- | --- |
| Aktivni produktova data | smazat, anonymizovat nebo odpojit od identity |
| Workspace obsah | overit, zda nejde o data firmy nebo jinych uzivatelu |
| Billing a ucetnictvi | ponechat podle pravni retence, omezit pristup |
| Marketing | odhlasit a zapsat suppression signal |
| Support | omezit nebo redigovat podle rizika a potreby |
| Bezpecnostni logy | ponechat po definovanou dobu, pokud je legitimni duvod |
| Zalohy | neobnovovat smazana data zpet do aktivniho provozu a nechat expirovat podle politiky |

Zakaznikovi rekni pravdu jednoduse: co smazes hned, co anonymizujes, co musis drzet a kdy zmizi ze zaloh. Neomlouvej to pravnickou mlhou. Pokud si nejsi jisty, eskaluj na pravnika, ale neztrac datum a stav zadosti.

### 6. 60min postup

```text
00-08 min: Vytvor jeden vstup pro zadosti.
Email nebo formular, ktery je uvedeny v privacy dokumentech a nekdo ho opravdu hlida.

08-18 min: Zaloz kartu zadosti.
ID, datum prijeti, kanal, typ, deadline, vlastnik, stav overeni identity.

18-30 min: Projdi datovou mapu.
Aplikace, billing, support, emaily, analytika, logy, CRM, dokumentace.

30-40 min: Navrhni overeni identity.
Co staci pro nizke riziko, co je potreba u citlivych dat, co se nesmi sbirat zbytecne.

40-50 min: Priprav dve sablony odpovedi.
Jednu pro pristup/export, jednu pro smazani nebo castecne smazani s retenci.

50-56 min: Nastav auditni stopu.
Kdo hledal, v jakych systemech, kdy odpovedel, co bylo predano nebo smazano.

56-60 min: Udelej minitest.
Vezmi fiktivniho uzivatele a projdi, jestli bys zadost dokazal vyridit bez improvizace.
```

### Checklist: zadosti subjektu udaju

- [ ] Privacy dokumenty uvadeji jasny kontakt pro zadosti subjektu udaju.
- [ ] Existuje karta zadosti s datumem prijeti, typem, lhutu, vlastnikem a stavem.
- [ ] Zadosti umi zachytit i support a obchod, nejen pravni inbox.
- [ ] Identita se overuje primerene podle rizika.
- [ ] Kopie dokladu se nevyzaduji automaticky a neukladaji se zbytecne.
- [ ] Datova mapa rika, ktere systemy se maji prohledat.
- [ ] Odpoved rozlisuje shrnuti pro cloveka a strojove citelny export.
- [ ] Data tretich osob, tajemstvi a interni bezpecnostni informace se pred predanim posuzuji.
- [ ] Zadost o smazani rozlisuje aktivni data, billing, logy, support, zalohy a pravni retenci.
- [ ] Vsechny kroky jsou zapsane v auditni stope.
- [ ] Lhuta jednoho mesice je sledovana od prijeti zadosti.
- [ ] Pro slozite zadosti existuje sablona informovani o prodlouzeni lhuty.

---

## Zaznamy o zpracovani bez spreadsheetoveho pekla za 60 minut

Zaznamy o zpracovani nejsou jen pravni priloha, ktera se vytahne az ve chvili auditu. Pro maly SaaS jsou to provozni mapa: jake osobni udaje sbirame, proc, kde lezi, komu je predavame, jak dlouho je drzime a kdo za to odpovida. Kdyz tahle mapa neexistuje, kazda nova integrace, export, incident nebo zadost subjektu udaju zacina improvizaci.

GDPR v clanku 30 popisuje povinnost vest zaznamy o cinnostech zpracovani pro spravce i zpracovatele a vyjmenovava typicke polozky: ucely, kategorie subjektu a udaju, prijemce, predani mimo EU/EHP, lhuty pro vymaz a obecny popis technickych a organizacnich opatreni. U organizaci pod 250 lidi existuje vyjimka, ale neplati, pokud zpracovani muze predstavovat riziko pro prava a svobody lidi, neni prilezitostne, nebo zahrnuje zvlastni kategorie udaju ci udaje o trestnich vecech: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng

Prakticky preklad: i kdyz si myslis, ze formalne spadas do jednodussiho rezimu, porad potrebujes vedet, co se s daty deje. Jinak nejde poctive odpovedet zakaznikovi, pravnikovi, auditorovi ani sam sobe po treti kave a jednom "jen rychlem" exportu.

### 1. Zacni od toku dat, ne od pravnicke tabulky

Nejrychlejsi cesta k pouzitelnym zaznamum je projit hlavni uzivatelske a provozni toky:

- navstevnik prijde na web,
- clovek posle lead formular,
- zakaznik si zalozi ucet,
- uzivatel pozve kolegu,
- system odesle transakcni email,
- zakaznik zaplati fakturu,
- uzivatel napise na podporu,
- aplikace zapise auditni nebo bezpecnostni log,
- zakaznik ukonci sluzbu,
- data se exportuji, anonymizuji nebo mazou.

Ke kazdemu toku poloz tri otazky:

- Jaka osobni data v tom toku vznikaji nebo se meni?
- Ktery system je primarni misto pravdy?
- Kdo dalsi data vidi nebo zpracovava?

**Codyho komentar:** Kdyz zacnes prazdnou compliance tabulkou, skonci to casto slovni mlhou. Kdyz zacnes cestou dat, najdes realitu. Realita je obcas oskliva, ale aspon neni ve fontu Calibri 9 schovana v priloze "final_v7".

### 2. Jedna karta zpracovani staci, pokud je konkretni

Zaznam nemusi byt roman. Musi byt dostatecne presny, aby podle nej slo udelat rozhodnuti. Pouzij jednu kartu pro kazdou smysluplnou oblast zpracovani.

```text
nazev: Lead formular na webu
role: spravce
ucel: odpoved na poptavku a navazujici obchodni komunikace
subjekty_udaju:
- zajemci o sluzbu
kategorie_udaju:
- email
- volitelna zprava
- cas odeslani
- zdroj kampane v omezenem rozsahu
pravni_zaklad:
- pre-contract / opravneny zajem podle konkretni situace
systemy:
- webovy formular
- interni mailbox
- CRM pipeline
prijemci_a_zpracovatele:
- poskytovatel hostingu v EU
- emailovy poskytovatel
predani_mimo_eu_ehp:
- ne / ano + mechanismus
retence:
- neaktivni poptavky kontrolovat po 6 mesicich
bezpecnost:
- TLS
- omezeny pristup do mailboxu/CRM
- bez logovani obsahu zpravy do aplikacnich logu
vlastnik:
- obchod / founder
posledni_kontrola:
- YYYY-MM-DD
```

Nejdulezitejsi pole jsou `ucel`, `systemy`, `prijemci_a_zpracovatele`, `retence` a `vlastnik`. Kdyz chybi vlastnik, karta je dekorace. Kdyz chybi retence, data obvykle zustanou navzdy, protoze "nikdo nic nemazal".

### 3. Rozlis spravce, zpracovatele a interni system

U SaaS se role casto michaji. Pro zakaznicka data v produktu muzes byt zpracovatel pro zakaznika. Pro vlastni marketing, billing a support typicky vystupujes jako spravce. Stejny nastroj muze byt v jedne casti produktu soucast zakaznickeho zpracovani a v jine casti interni obchodni evidence.

Prakticka tabulka:

| Oblast | Typicka role | Proc na tom zalezi |
| --- | --- | --- |
| Zakaznicky obsah v aplikaci | casto zpracovatel | Potrebujes respektovat smlouvu, DPA a pokyny zakaznika. |
| Vlastni leady a obchod | spravce | Sam urcujes ucel obchodni komunikace. |
| Billing | spravce nebo samostatny rezim podle vztahu | Resis fakturaci, dane, retenci a pristupy. |
| Support tickety | casto kombinace | Muze obsahovat zakaznicka i tvoje provozni data. |
| Produktova analytika | zalezi na nastaveni | Rozhoduje rozsah identifikace a ucel mereni. |

EDPB ma samostatne pokyny k pojmum spravce a zpracovatel. Pokud se kolem role toci smlouva, DPA nebo enterprise dotaznik, nehadaj to z pocitu a opiraj se o pravni kontrolu: https://www.edpb.europa.eu/system/files/2023-10/EDPB_guidelines_202007_controllerprocessor_final_en.pdf

### 4. Zaznamy pripoj k dodavatelum a retenci

Samostatna evidence dodavatelu je uzitecna, ale bez propojeni na zpracovani se rychle zmeni v seznam log. U kazde karty zpracovani proto pridej konkretni dodavatele a datove kategorie, ne jen vetu "pouzivame cloud".

Priklad:

| Zpracovani | Dodavatel | Data | Region | Co zkontrolovat |
| --- | --- | --- | --- | --- |
| Transakcni emaily | email provider | email, sablona, metadata doruceni | EU nebo zvoleny region | DPA, logy, retence, tracking |
| Produktova analytika | privacy-first analytika | eventy, URL, omezeny identifikator | EU region | cookie rezim, IP, retence |
| Billing | platebni/billing system | fakturacni udaje, platby | podle smlouvy | ucetni retence, pristupy |
| Support | helpdesk/mailbox | zpravy, prilohy, interni poznamky | podle smlouvy | prilohy, export, mazani |

Retence musi byt zapsana tak, aby podle ni slo jednat. "Po dobu nezbytnou" muze byt pravne pouzitelna formulace v dokumentu, ale provozne je slaba. Interni karta potrebuje konkretni pravidlo: kdo kontroluje, kdy se maze, co se anonymizuje a co zustava kvuli ucetnictvi, bezpecnosti nebo smlouve.

### 5. Udrzuj to jako produktovou dokumentaci

Zaznamy zastaraji ve chvili, kdy se pridaji nove formulare, nove eventy, novy dodavatel nebo novy export. Proto je navaz na realne zmeny:

- Pull request pridavajici osobni data musi rict, kterou kartu meni.
- Nova integrace nesmi jit ven bez vendor review a zaznamu zpracovani.
- Novy event v analytice musi mit ucel, retenci a vlastnika.
- Novy export musi ukazat, z kterych karet bere data.
- Novy support postup musi rict, kam smi prijit prilohy a citlive udaje.

Jednou mesicne projdi jen zmeny. Nesnaz se pokazde revidovat cely vesmir. Staci otazky:

- Pribyl novy formular, event, export nebo dodavatel?
- Sbira nejaky system vic dat, nez rika jeho karta?
- Je nekde retence "zatim nikdy nemazeme"?
- Existuje karta bez vlastnika?
- Odpovida verejna privacy stranka tomu, co je v internich zaznamech?

### 6. 60min postup

```text
00-08 min: Vyber rozsah.
Zacni jednim produktem nebo jednim hlavnim tokem, ne celou firmou.

08-18 min: Sepis hlavni toky dat.
Web, leady, ucet, billing, support, analytika, logy, exporty, mazani.

18-32 min: Vypln prvni tri karty.
Lead formular, zakaznicky ucet a support. U kazde karty zapis ucel, data, systemy, dodavatele, retenci a vlastnika.

32-42 min: Oznac role a rizika.
Kde jsi spravce, kde zpracovatel, kde je citlivejsi obsah, kde muze byt predani mimo EU/EHP.

42-50 min: Propoj dodavatele.
Ke kazde karte pridej dodavatele, region, DPA stav a export/mazani schopnosti.

50-56 min: Najdi tri mezery.
Typicky chybi retence, vlastnik, logy, support prilohy nebo analyticke eventy.

56-60 min: Nastav rytmus udrzby.
Vlastnik dokumentu, mesicni kontrola zmen a pravidlo pro pull requesty nebo release checklist.
```

### Checklist: zaznamy o zpracovani

- [ ] Hlavni toky dat jsou popsane podle reality produktu.
- [ ] Kazda karta ma ucel, kategorie udaju, subjekty, systemy, dodavatele a vlastnika.
- [ ] Role spravce/zpracovatel je oznacena a u spornych casti zkontrolovana.
- [ ] U kazdeho dodavatele je jasne, jaka data dostava a kde se zpracovavaji.
- [ ] Predani mimo EU/EHP neni schovane v obecne poznamce.
- [ ] Retence je konkretni a provozne vykonatelna.
- [ ] Logy, support prilohy a analyticke eventy nejsou mimo evidenci.
- [ ] Zaznamy navazuji na vendor review, DSAR proces, exporty a mazani.
- [ ] Verejna privacy dokumentace neni v rozporu s interni mapou.
- [ ] Existuje mesicni kontrola zmen a vlastnik cele evidence.
- [ ] Nova funkce s osobnimi daty aktualizuje zaznamy pred releasem.
- [ ] Evidence je ulozena tam, kde ji tym najde, ne v zapomenute priloze emailu.

---

## Logovani a monitoring bez osobnich udaju navic za 45 minut

Logy jsou jedna z veci, ktere zacnou jako technicka pomucka a skonci jako neplanovana databaze vseho, co se kdy stalo. Pro SaaS je to riziko i prilezitost. Dobre logy pomuzou najit chybu, odhalit incident a vysvetlit, co se stalo. Spatne logy sbiraji cele requesty, tokeny, zpravy, emaily, IP adresy a kusy zakaznickych dat jen proto, ze nekdo kdysi napsal `console.log(req.body)`.

Privacy-first pristup neni "nelogovat nic". Je to logovat presne to, co potrebujes pro provoz, bezpecnost a audit, a zbytek nechat tam, kam patri. OWASP Logging Cheat Sheet doporucuje navrhovat aplikacni logovani jako samostatnou schopnost a zaroven upozornuje, ze citliva data do logu nepatri: https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html. OWASP Top 10 2025 radi chyby v security loggingu a alertingu mezi rizika, mimo jine kvuli nedostatecnemu logovani, nejasnym logum nebo uniku citlivych informaci pres logy: https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/

### 1. Rozdel logy podle ucelu

Nejdriv si rekni, k cemu log existuje. Kdyz ucel neumis pojmenovat, pravdepodobne logujes ze zvyku.

Prakticke kategorie:

| Kategorie | Co resi | Co do ni nepatri |
| --- | --- | --- |
| Provozni log | chyby, latence, dostupnost, stav integraci | cela tela requestu a osobni obsah |
| Bezpecnostni log | prihlaseni, zmeny prav, podezrele pokusy | hesla, tokeny, session cookies |
| Auditni log | kdo zmenil dulezite nastaveni nebo data | nepotrebny obsah puvodniho zaznamu |
| Produktova metrika | aktivace, konverze, dokoncene workflow | osobni profil uzivatele bez jasneho ucelu |
| Debug log | docasne ladeni konkretni chyby | trvale sbirani vsech detailu |

**Codyho komentar:** Debug log v produkci je jako provizorni kabel pres chodbu. Jeden den zachrani situaci, treti mesic uz je to architektura. Dej mu datum konce.

### 2. Vytvor pravidlo "nikdy nelogujeme"

Seznam zakazanych polozek musi byt kratky a nekompromisni. Ne proto, ze by tym nemel rozum, ale protoze incidenty vznikaji ve stresu, pri refaktoru nebo pri rychlem debugovani.

Nikdy neloguj:

- hesla, reset tokeny, magic link tokeny a session cookies,
- kompletni autentizacni hlavicky,
- platebni karty a platebni tajemstvi,
- cele texty zakaznickych zprav, dokumentu nebo priloh,
- kompletni exporty dat,
- cele request/response body u endpointu s osobnimi daty,
- dlouhodobe identifikatory, pokud staci kratky request ID nebo hash,
- citlive interni poznamky ze supportu.

Kdyz potrebujes korelovat udalosti, pouzij technicky identifikator. Napriklad `request_id`, `account_id`, `event_id` nebo hash emailu se soli ulozenou mimo logy. Kdyz potrebujes videt konkretni obsah, otevri primarni system s pristupovymi pravy a auditni stopou. Log nema byt zadni vchod do zakaznickych dat.

### 3. Loguj udalost, ne cely svet

Dobra log udalost rika, co se stalo, kde, kdy, s jakym vysledkem a jak ji propojit s dalsimi udalostmi. Nemusi obsahovat vsechny okolnosti.

Sablona bezpecne log udalosti:

```text
timestamp: 2026-08-01T10:15:30Z
level: warn
event: lead_form_delivery_failed
request_id: req_123
account_id: null
actor_type: anonymous
resource_type: lead_form
resource_id: public_contact
result: failed
reason_code: email_provider_timeout
source: web
pii_in_event: no
retention: 30d
```

U prihlasene aplikace pridej identifikator uctu nebo uzivatele jen tam, kde je potreba pro reseni incidentu nebo auditu. U verejneho webu casto staci request ID, typ udalosti, vysledek a technicky duvod.

**Spatne:**

```text
Lead form failed: {"email":"jana@example.com","message":"Mame problem s fakturaci...","ip":"...","headers":{...}}
```

**Lepsi:**

```text
level=warn event=lead_form_delivery_failed request_id=req_123 reason_code=email_provider_timeout form_id=contact
```

### 4. Retence logu musi byt kratsi nez "az se nekdo zepta"

Logy maji vlastni zivotni cyklus. Provozni debug log nepotrebujes drzet roky. Auditni log pro dulezite zmeny muze potrebovat delsi retenci. Bezpecnostni logy musi byt dostupne dost dlouho na vysetreni incidentu, ale porad plati minimalizace.

Jednoduche vychozi pravidlo pro maly SaaS:

| Typ logu | Vychozi retence | Poznamka |
| --- | --- | --- |
| Verbose debug | hodiny az dny | jen docasne, s vlastnikem a datem vypnuti |
| Provozni chyby | 14-30 dni | dost na ladeni bez dlouheho ocasu dat |
| Bezpecnostni udalosti | 90-180 dni | podle rizika produktu a smluv |
| Audit dulezitych zmen | 1-2 roky nebo podle smluv | minimalni obsah, jasny pristup |
| Metriky dostupnosti | agregovane dlouhodobe | bez osobnich detailu |

Tohle nejsou univerzalni pravni lhuty. Je to provozni start. U regulovanych odvetvi, enterprise smluv nebo citlivych dat si retenci over pravne a smluvne. Interni karta logovani by mela rict: kdo vlastni retenci, kde se nastavuje mazani a jak se overi, ze mazani opravdu bezi.

### 5. Alerty pis pro akci, ne pro hluk

Alert, na ktery nikdo nereaguje, neni monitoring. Je to tapeta. Pro maly tym staci mene alertu, ale kazdy musi mit jasnou akci.

Dobry alert obsahuje:

- co se deje,
- dopad na uzivatele nebo data,
- prvni kontrolni krok,
- odkaz na runbook,
- vlastnika,
- kdy eskalovat.

Priklady alertu, ktere davaji smysl:

| Signal | Proc alertovat | Prvni krok |
| --- | --- | --- |
| kontaktni formular ma vysokou chybovost | ztracis poptavky | over email provider a posledni deploy |
| neobvykle mnoho neuspesnych prihlaseni | mozne credential stuffing | zkontroluj IP rozsahy, rate limit a uzamceni |
| export dat selhal | zakaznik nedostane vystup | over frontu, uloziste a auditni zaznam |
| skok v 5xx chybach | produkt muze byt rozbity | zkontroluj release, databazi a externi sluzby |
| zmena admin prav | vysoke riziko zneuziti | over actor, duvod a schvaleni |

Naopak nealertuj kazdy jeden 404, kazde odmitnute validacni pravidlo nebo kazdy pomaly request, pokud z toho nikdo nema udelat konkretni krok. Udelej z toho dashboard nebo tydenni review.

### 6. 45min postup

```text
00-07 min: Sepis hlavni toky.
Lead formular, registrace, prihlaseni, billing, export, support, admin zmeny.

07-14 min: Rozdel logy podle ucelu.
Provozni, bezpecnostni, auditni, produktove metriky a docasny debug.

14-22 min: Vytvor zakazany seznam.
Tokeny, hesla, cela tela requestu, zpravy, prilohy, platebni tajemstvi, kompletni hlavicky.

22-30 min: Navrhni 10 klicovych udalosti.
Kazda udalost ma event name, vysledek, request ID, vlastnika a informaci, zda obsahuje osobni data.

30-36 min: Nastav retenci.
Pro kazdou kategorii zvol vychozi dobu, misto mazani a odpovednou osobu.

36-42 min: Vyber alerty.
Nejvyse pet alertu pro realnou akci. Ke kazdemu pridej prvni krok a runbook.

42-45 min: Zapis pravidlo do release checklistu.
Nova funkce s osobnimi daty musi rict, co loguje, co neloguje a jak dlouho to drzi.
```

### Checklist: logovani a monitoring

- [ ] Kazdy typ logu ma popsany ucel.
- [ ] Existuje kratky seznam dat, ktera se nikdy neloguji.
- [ ] Aplikace neloguje cela request/response body u citlivych endpointu.
- [ ] Eventy maji stabilni nazvy, vysledek, request ID a rozumny kontext.
- [ ] Debug logy v produkci maji vlastnika a datum vypnuti.
- [ ] Bezpecnostni udalosti zahrnuji prihlaseni, zmeny prav a dulezite exporty.
- [ ] Auditni logy neobsahuji vic osobnich dat, nez je potreba.
- [ ] Retence je nastavena podle kategorie logu a pravidelne se overuje.
- [ ] Pristup do logovaciho nastroje maji jen lide, kteri ho potrebuji.
- [ ] Alerty maji vlastnika, prvni krok a odkaz na runbook.
- [ ] Monitoring dostupnosti sleduje uzivatelsky dopad, ne jen stav serveru.
- [ ] Release checklist obsahuje kontrolu novych logu, eventu a osobnich dat.

---

## Platebni a fakturacni tok bez datove laviny za 60 minut

Platba je misto, kde se produkt potka s pravem, ucetnictvim, duverou a nervy zakaznika. Maly SaaS tu casto udela dve chyby naraz: schova cenu za mlhu a zaroven posle platebni, fakturacni a produktova data do vice nastroju, nez je potreba. Privacy-first pristup neznamena, ze billing bude spartanska tabulka v koutku. Znamena, ze kazdy udaj ma jasnou praci a zakaznik vi, co se deje pred kliknutim na "zaplatit".

U evropskeho SaaS si pred spustenim over hlavne DPH rezim, B2B/B2C rozdily, pravidla pro digitalni sluzby a spotrebitelske informace. Evropska komise popisuje rezim VAT One Stop Shop pro preshranicni DPH v EU zde: https://vat-one-stop-shop.ec.europa.eu/index_en. Pro spotrebitele jsou dulezite i pravidla k digitalnimu obsahu a digitalnim sluzbam: https://commission.europa.eu/law/law-topic/consumer-protection-law/digital-contracts_en a Consumer Rights Directive: https://commission.europa.eu/law/law-topic/consumer-protection-law/consumer-contract-law/consumer-rights-directive_en. Tohle neni vyzva delat si pravni oddeleni z README. Je to vyzva neprodavat naslepo.

### 1. Rozdel data podle ucelu

Billing neni jeden kyblik. Rozdel ho aspon na pet toku:

| Tok | Minimalni data | Proc existuje |
| --- | --- | --- |
| Cenik | plan, cena, mena, obdobi, limity | zakaznik ma vedet, co kupuje |
| Checkout | email, fakturacni udaje, zvoleny plan, platebni stav | vytvoreni objednavky a platby |
| Platba | platebni token nebo reference od brany | zpracovani platby bez ukladani karty v produktu |
| Fakturace | fakturacni identita, danove udaje, cislo dokladu | ucetni a danove povinnosti |
| Produktovy pristup | account ID, plan, limity, stav predplatneho | povoleni funkci v aplikaci |

Produktova aplikace typicky nepotrebuje znat cislo karty, detailni odpoved platebni brany ani kompletni fakturacni historii v kazdem requestu. Staci ji stabilni informace: plan, stav predplatneho, limity, datum obnoveni a pripadne grace period.

**Codyho komentar:** Kdyz se billingova integrace stane hlavnim zdrojem pravdy pro cele uzivatelske konto, driv nebo pozdeji zacne obchodni logika prosakovat do mist, kde ji nikdo nechce ladit. Platebni brana ma brat penize. Produkt ma dodavat hodnotu. Nepletme jim identity.

### 2. Cenik musi rict, co se bude fakturovat

Dobry cenik neni jen cislo. Je to kontrakt o ocekavanich. Pred platbou ma byt jasne:

- co je v planu zahrnute,
- jestli jde o mesicni, rocni, jednorazovou nebo pilotni platbu,
- zda jsou ceny bez DPH nebo vcetne DPH,
- kdy se predplatne obnovuje,
- co se stane po prekroceni limitu,
- jak se plan zrusi nebo zmeni,
- kde se zpracovavaji fakturacni a produktova data.

Pokud prodavas B2B, napis to jednoduse. Napriklad: "Ceny jsou uvedene bez DPH. Fakturace probiha mesicne. Predplatne lze ukoncit do konce fakturacniho obdobi." Pokud prodavas spotrebitelum, over si pozadavky na informacni povinnosti, pravo odstoupeni, digitalni sluzby a zobrazeni celkove ceny vcetne dani. Cena schovana v poznamce pod carou neni growth hack. Je to zadost o support ticket.

### 3. Checkout sbira jen to, co potrebuje objednavka

Minimalni checkout pro B2B SaaS:

- pracovni email,
- nazev firmy nebo jmeno fakturacni osoby podle typu zakaznika,
- fakturacni adresa, pokud je potreba pro doklad,
- IC/DIC nebo VAT ID, pokud ho pouzivas pro danove urceni,
- zvoleny plan a fakturacni obdobi,
- potvrzeni obchodnich a privacy dokumentu,
- platebni reference vracena platebni branou.

Co do checkoutu nepatri "pro jistotu":

- telefon, pokud neni potreba k plneni,
- role ve firme, pokud podle ni nemenis proces,
- marketingovy souhlas spojeny s nakupem,
- kompletni profil firmy natazeny z enrichment nastroje,
- interni obchodni poznamky viditelne supportu bez duvodu.

Jestli potrebujes dodatecne informace pro onboarding, ptej se az po platbe nebo v prvnim nastaveni produktu. Checkout ma byt kratky a duveryhodny. Onboarding muze byt kontextovy.

### 4. Platebni branu drz mimo osobni detaily produktu

Platebni brana potrebuje data k platbe a pripadne k fakturaci. Nepotrebuje vedet, jake dokumenty zakaznik nahrava, ktere funkce pouziva, jaky ma interni projekt nebo co psal supportu. Integraci navrhni tak, aby mezi produktem a platbou tekly jen nezbytne identifikatory a stavy.

Prakticky model:

```text
product_account_id: acc_123
billing_customer_id: cus_456
plan: team
subscription_status: active
current_period_end: 2026-09-01
last_payment_status: paid
```

Do produktu neukladej plne platebni odpovedi jen proto, ze se snad jednou budou hodit. Uloz technickou referenci, stav a auditni stopu udalosti. Detail nech v systemu, ktery je k tomu urceny a ma odpovidajici pristupova prava.

### 5. Fakturacni doklady maji vlastni retenci

Fakturace ma jine povinnosti nez produktova analytika. Proto ma mit vlastni retencni pravidlo, vlastnika a pristup. Ucetni doklad nelze mazat stejne jako testovaci event z onboardingoveho flow. Zaroven to ale neni duvod, aby se fakturacni adresa zobrazovala kazdemu adminovi produktu.

Oddel minimalne:

| Kategorie | Kdo typicky potrebuje pristup | Poznamka |
| --- | --- | --- |
| Fakturacni identita | finance, opravnene admin role | kvuli dokladum a danim |
| Platebni stav | produkt, support, finance | staci stav a plan, ne karta |
| Produktove vyuziti | produktovy tym, support podle potreby | neprelevat automaticky do faktur |
| Support k platbe | support a finance | kratka historie, jasny ticket |
| Audit zmen planu | finance, security/admin | kdo zmenil plan, kdy a proc |

Retenci zapis lidsky: "Fakturacni doklady drzime podle ucetnich a danovych povinnosti. Produktove eventy k checkoutu agregujeme nebo mazeme podle mericiho planu. Platebni tokeny neukladame v aplikaci." To je srozumitelne pro tym i pro zakaznika.

### 6. Selhani platby neni pozvanka ke spamu

Chyba platby je normalni provozni situace. Karta expirovala, banka platbu odmitla, firma meni kartu nebo se neco rozbilo mezi branou a aplikaci. Komunikace ma byt jasna, kratka a bez natlaku.

Minimalni postup:

1. Prvni email: co se stalo, jak opravit platbu, do kdy zustane pristup aktivni.
2. Druha pripominka: konkretni datum omezeni pristupu, kontakt na podporu.
3. Grace period: produkt zustane dostupny podle pravidel, ale nove placene funkce se nemusi aktivovat.
4. Omezeni: omez pristup predvidatelne, bez mazani dat jako trestu.
5. Ukonceni: vysvetli export a retenci dat po ukonceni.

**Priklad emailu:**

```text
Predmet: Nepodarilo se obnovit predplatne

Dnes se nepodarilo zpracovat platbu za plan Team. Pristup zustava aktivni do 2026-09-08.

Platebni udaje muzete aktualizovat v nastaveni fakturace. Pokud je problem na nasi strane nebo potrebujete vystavit doklad jinak, odpovezte na tento email.

Data kvuli teto chybe nikam neposilame navic a pristup neomezime bez dalsiho upozorneni.
```

### 7. 60min postup

```text
00-08 min: Nakresli billing tok.
Cenik -> checkout -> platebni brana -> faktura -> produktovy pristup -> zruseni/export.

08-16 min: Oznac data v kazdem kroku.
Co je fakturacni, co platebni, co produktove, co supportni a co analyticke.

16-25 min: Vyhod nepotrebna pole.
Telefon, enrichment, marketingovy souhlas, interni poznamky a cokoliv, co nema praci v objednavce.

25-35 min: Napis cenikove mikrocopy.
DPH, obdobi, obnoveni, limity, zruseni, data region a zakladni support.

35-45 min: Navrhni stavy predplatneho.
trial, active, past_due, grace, suspended, canceled. Ke kazdemu napis dopad na produkt.

45-52 min: Nastav fakturacni pristupy.
Kdo vidi doklady, kdo vidi platebni stav, kdo muze menit plan a kdo vidi audit.

52-60 min: Pridej billing do release checklistu.
Nova placena funkce musi rict cenu, danovy rezim, data, retenci, zruseni a fallback pri chybe platby.
```

### Checklist: billing bez datove laviny

- [ ] Cenik jasne rika, co se fakturuje a v jakem obdobi.
- [ ] Je zrejme, zda jsou ceny bez DPH nebo vcetne DPH.
- [ ] Checkout sbira jen udaje potrebne pro objednavku, platbu a doklad.
- [ ] Marketingovy souhlas neni podminkou nakupu.
- [ ] Platebni karta ani platebni tajemstvi nejsou ukladane v aplikaci.
- [ ] Produkt zna jen stav predplatneho, plan, limity a potrebne identifikatory.
- [ ] Fakturacni doklady maji vlastni retencni pravidlo.
- [ ] Pristup k fakturacnim udajum je oddeleny od bezneho produktoveho supportu.
- [ ] Zmena planu a rucni upravy maji auditni stopu.
- [ ] Selhani platby ma jasnou grace period a slusnou komunikaci.
- [ ] Zruseni predplatneho zahrnuje export, retenci a mazani dat.
- [ ] Billing tok lze vysvetlit zakaznikovi bez mlzeni a bez pravnickeho karaoke.

---

## DPA zmena dodavatele bez rozbite duvery za 60 minut

Zmena dodavatele zni jako technicky ukol: vymenit nastroj, prepnout API klic, otestovat tok, hotovo. U privacy-first SaaS je to ale i duverovy ukol. Kdyz novy nastroj zpracovava osobni udaje zakazniku, meni se datova mapa, pravni dokumenty, interni pristupy, pripadne seznam subprocesoru a cast slibu, ktere mas verejne na webu.

GDPR v clanku 28 rika, ze spravce ma pouzivat jen zpracovatele s dostatecnymi garancemi, a ze zpracovatel nema zapojit dalsiho zpracovatele bez predchoziho specifickeho nebo obecneho pisemneho povoleni spravce. Pri obecnem povoleni ma zpracovatel informovat o zamyslenych zmenach, aby spravce mohl namitat: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng. EDPB v Guidelines 07/2020 pripomina, ze role spravce a zpracovatele se neurcuji podle nalepky ve smlouve, ale podle realneho rozhodovani o ucelech a prostredcich zpracovani: https://www.edpb.europa.eu/documents/guideline/guidelines-072020-on-the-concepts-of-controller-and-processor-in-the-gdpr_en. EDPB Opinion 22/2024 se zameruje na povinnosti pri spolehance na zpracovatele a subprocesory: https://www.edpb.europa.eu/system/files/2024-10/edpb_opinion_202422_relianceonprocessors-sub-processors_en.pdf.

Prakticky preklad: kdyz pridavas novy support tool, emailovy provider, AI sluzbu, monitoring, platby nebo datove uloziste, neni to jen radek v changelogu. Je to zmena datoveho retezce. A ten ma byt viditelny, vysvetlitelny a vratny.

### 1. Rozlis tri typy zmen

Ne kazda zmena dodavatele potrebuje stejnou ceremonii. Zacni klasifikaci.

| Typ zmeny | Priklad | Co kontrolovat |
| --- | --- | --- |
| Bez osobnich dat | Nastroj pro build statickych assetu bez pristupu k produkci | Licence, pristupy, supply chain, zadne DPA typicky neni jadro. |
| Osobni data zakazniku | Support system, CRM, transakcni emaily, fakturace | DPA, data region, subprocesori, retence, mazani, export. |
| Citliva nebo kriticka data | Uloziste souboru, autentizace, auditni logy, AI nad zakaznickym obsahem | Bezpecnostni review, DPIA filtr, fallback, oznameni zakaznikum, presna smluvni hranice. |

Kdyz si nejsi jisty, zarad zmenu o uroven vyse. Ne proto, aby se tym zabetonoval v papirech, ale proto, ze levnejsi je odhalit problem pred integraci nez po tom, co se data rozjela do noveho retezce.

**Codyho komentar:** Dodavatel, ktery "jen pomaha s produktivitou", casto vidi vic dat nez hlavni produkt. Presne tady vznikaji male, pohodlne a velmi drahe slepe skvrny.

### 2. Vytvor kartu zmeny dodavatele

Karta ma byt kratka. Cilem neni vyrobit pravni roman, ale mit jedno misto, kde je videt, co se meni a proc.

```text
Zmena dodavatele

Nazev:
Vlastnik:
Datum rozhodnuti:
Planovane spusteni:

Proc menime:
Jaky proces nebo funkci dodavatel podporuje:
Jaka data uvidi:
Kategorie subjektu udaju:
Role dodavatele:
- zpracovatel
- samostatny spravce
- spolecny spravce
- bez osobnich dat

Data region:
Subprocesori:
Prenos mimo EU/EHP:
DPA / smlouva:
Retence:
Mazani a export:
Pristupy v nasem tymu:
Fallback pri vypnuti:
Verejne dokumenty k aktualizaci:
Zakaznici k informovani:
Rozhodnuti:
```

Nejdulezitejsi radek je `Role dodavatele`. Kdyz dodavatel zpracovava data jen podle tvych pokynu, typicky resis zpracovatelsky vztah. Kdyz si urcuje vlastni ucely, muze byt samostatnym spravcem. Kdyz spolecne urcujete ucel i prostredky, muze jit o spolecne spravce. Nazev v marketingovem webu dodavatele neni rozhodujici; rozhoduje realny tok dat a kontrola nad nim.

### 3. Zkontroluj DPA bez pravnickeho kouroveho efektu

DPA nebo zpracovatelska smlouva nema byt soubor, ktery nekdo nahraje do slozky `legal` a uz se na nej nikdy nepodiva. Pro maly SaaS staci prakticka kontrola:

- Popisuje smlouva predmet, dobu, povahu a ucel zpracovani?
- Rika, jake typy osobnich udaju a kategorie osob se zpracovavaji?
- Zavazuje dodavatele zpracovavat data jen podle dokumentovanych pokynu?
- Resi mlcenlivost lidi, kteri maji k datum pristup?
- Odkazuje na primerena technicka a organizacni opatreni?
- Popisuje pomoc pri zadostech subjektu udaju, bezpecnosti, incidentech a DPIA?
- Rika, co se stane s daty po konci sluzby?
- Umoznujes audit nebo alespon rozumne dolozeni souladu?
- Popisuje subprocesory a proces jejich zmeny?
- Je jasne, zda a jak probiha prenos mimo EU/EHP?

Pokud neco chybi, neznamena to automaticky stopku. Znamena to, ze mas otazku pred podpisem nebo pred zapnutim integrace. U bezneho B2B SaaS je zdrave mit kratky seznam "nepustime bez odpovedi":

- data region neni jasny,
- nelze zjistit subprocesory,
- neni popsane mazani po ukonceni,
- dodavatel si vyhrazuje pouzit zakaznicka data pro vlastni trenink, marketing nebo neurcite zlepsovani bez jasne hranice,
- neumime vypnout integraci bez ztraty hlavni sluzby.

### 4. Aktualizuj verejny seznam subprocesoru

Jestli zakaznikum slibujes transparentni seznam subprocesoru, musi zit. Zastaraly seznam je horsi nez zadny, protoze vytvari dojem kontroly a pritom posila lidi do mapy z minuleho leta.

Minimalni verejny zaznam:

| Dodavatel | Ucel | Data | Region | Poznamka |
| --- | --- | --- | --- | --- |
| Email provider | Transakcni emaily | Email, sablona zpravy, stav doruceni | EU/EHP podle smlouvy | Bez marketingovych seznamu. |
| Hosting | Provoz aplikace | Aplikacni a zakaznicka data | EU datacentrum | Primarni produkcni infrastruktura. |
| Monitoring | Dostupnost a chyby | Technicke logy bez obsahu pozadavku | EU nebo minimalizovany prenos | Kratka retence. |

U kazde polozky napis ucel lidsky. "Infrastructure services" je moc mlhave. "Provoz aplikace a databaze" je lepsi. U dat nepouzivej frazi "personal data as needed". Napis typy: email, fakturacni udaje, technicke logy, ID uctu, metadata souboru. Kdyz verejny seznam pusobi nudne, je to dobre. Duvera nema znit jako reklamni kampan.

### 5. Oznam zmenu podle dopadu

Ne kazdou technickou zmenu musis posilat vsem zakaznikum jako dramaticky bulletin. Ale kdyz se meni subprocesor pro zakaznicka data, region zpracovani, typ dat nebo bezpecnostni hranice, zakaznik ma dostat jasnou informaci vcas.

Jednoducha matice:

| Dopad | Komunikace |
| --- | --- |
| Bez osobnich dat a bez vlivu na sluzbu | Interni changelog. |
| Novy subprocesor bez zmeny typu dat a regionu | Aktualizace seznamu a notifikace podle smlouvy. |
| Zmena regionu, typu dat nebo kriticke funkce | Email spravcum uctu, datum ucinnosti, moznost dotazu nebo namitky. |
| Vysoke riziko nebo nejistota | Odlozit spusteni, udelat privacy/security review, pripadne DPIA. |

Sablona oznameni:

```text
Predmet: Aktualizace subprocesoru pro [sluzba/proces]

Dobry den,

od [datum] planujeme pouzivat [dodavatel] pro [ucel].
Dodavatel bude zpracovavat [typy dat] v rozsahu potrebnem pro [konkretni proces].
Data region: [region].
Seznam subprocesoru jsme aktualizovali zde: [URL].

Zmena nema vliv na [co se nemeni: cenu, hlavni funkcnost, vase nastaveni].
Pokud mate k teto zmene dotaz nebo namitku podle smluvnich podminek, napiste nam do [datum/kontakt].

Cody / Dreamind
```

Neprehanet, nezamlcovat. To je cela magie. Zakaznik nepotrebuje pet odstavcu korporatni vaty. Potrebuje vedet, co se meni, proc, jaka data to zasahuje a co muze delat.

### 6. 60min postup

Prvnich 10 minut: pojmenuj zmenu, vlastnika a duvod. Pokud duvod zni "protoze to ma hezky dashboard", pridej jeste obchodni nebo provozni duvod, jinak zmena nema prioritu.

Minuty 10 az 20: vypln kartu zmeny dodavatele. Hlavne data, role, region, subprocesory, retence, mazani a fallback.

Minuty 20 az 35: projdi DPA nebo smluvni podminky podle checklistu. Oznac cervene body, ktere brani spusteni.

Minuty 35 az 45: aktualizuj datovou mapu, seznam subprocesoru, zaznamy o zpracovani a interni pristupy.

Minuty 45 az 55: priprav komunikaci. Rozhodni, zda staci interni changelog, verejny seznam, nebo email zakaznikum.

Minuty 55 az 60: zapis rozhodnuti: spustit, spustit po doplneni odpovedi, nebo zastavit. Bez zapisu se tym za tri mesice nebude pamatovat, proc to proslo.

### Checklist: DPA zmena dodavatele

- [ ] Vim, proc dodavatele menime a jaky proces podporuje.
- [ ] Je jasne, zda dodavatel zpracovava osobni data.
- [ ] Role dodavatele je posouzena podle realneho toku dat, ne podle nazvu ve smlouve.
- [ ] DPA nebo smluvni dokument pokryva clanek 28 v praktickych bodech.
- [ ] Znam data region a pripadne prenosy mimo EU/EHP.
- [ ] Mam seznam subprocesoru a proces jejich zmeny.
- [ ] Retence, mazani a export jsou popsane pred spustenim.
- [ ] Interni pristupy k novemu nastroji maji vlastnika a role.
- [ ] Datova mapa a zaznamy o zpracovani jsou aktualizovane.
- [ ] Verejny seznam subprocesoru odpovida realite.
- [ ] Zakaznici dostanou oznameni, pokud to vyzaduje smlouva, dopad nebo ferovost.
- [ ] Existuje fallback nebo exit plan, pokud dodavatel prestane vyhovovat.

---

## Kampan bez reklamniho pixelu za 45 minut

Marketingova kampan nemusi zacit tim, ze na web nalepis dalsi sledovaci skript. Pro maly SaaS casto staci cista landing page, oznacene odkazy, minimalni analytika, kvalifikacni otazka ve formulari a rucni vyhodnoceni kvality leadu. Je to mene blyskave nez reklamni dashboard, ale rychleji zjistis to hlavni: odkud prisli lide, kteri opravdu chteji mluvit.

UTM parametry jsou obycejne parametry v URL, ktere pomahaji oznacit zdroj, medium, kampan a dalsi kontext odkazu; Google je popisuje v dokumentaci ke kampanovym URL: https://support.google.com/analytics/answer/10917952. Nepatri jen do Google Analytics. Muzes je zpracovat i vlastni nebo privacy-first analytikou, pokud nesbiras vic dat, nez potrebujes. U odchozich odkazu a sdileni citlivych URL si zaroven hlidej `Referrer-Policy`; MDN popisuje, ze tato HTTP hlavicka ridi, kolik referrer informaci prohlizec posle pri dalsich requestech: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy.

Prakticky cil teto prilohy: za 45 minut pripravit kampan, ktera meri obchodni rozhodnuti bez profilovani navstevniku napric webem.

### 1. Zacni kampanovou otazkou

Pred tim, nez resis grafiku, texty nebo rozesilku, napis jednu rozhodovaci otazku.

Spatne:

> Kolik lidi prijde na web?

Lepsi:

> Privede clanek pro zakladatele B2B SaaS aspon tri relevantni poptavky na 20min call behem dvou tydnu?

Dobra kampanova otazka ma:

- cilovou skupinu,
- kanal nebo zdroj,
- akci, kterou ma clovek udelat,
- casove okno,
- rozhodnuti, ktere podle vysledku udelas.

**Codyho komentar:** Navstevnost je prijemna droga. Relevantni lead je jidlo. Kdyz mas hlad, nesbirej lajky na talir.

### 2. Oznac odkazy tak, aby jim rozumel clovek

UTM parametry maji byt nudne a konzistentni. Kdyz je kazdy odkaz pojmenovany jinak, kampanove vyhodnoceni se zmeni v rucni archeologii.

Jednoducha dohoda:

| Parametr | Co znamena | Priklad |
| --- | --- | --- |
| `utm_source` | Kde odkaz lezi | `linkedin`, `rss`, `partner-web`, `newsletter` |
| `utm_medium` | Typ distribuce | `post`, `email`, `referral`, `direct-message` |
| `utm_campaign` | Nazev konkretni kampane | `privacy-saas-audit-2026-08` |
| `utm_content` | Varianta odkazu nebo CTA | `hero-cta`, `case-study-link`, `ps-note` |

Pravidla:

- Pouzivej mala pismena, pomlcky a jeden jazyk.
- Do URL nedavej email, jmeno, firmu ani interni poznamky.
- Neoznacuj kazdy link jinou kampani, kdyz patri ke stejne nabidce.
- Kampanovy nazev drz stabilni po celou dobu vyhodnoceni.
- U kratkych kampani zapis odkazy do jedne tabulky, at vis, co jsi pustil ven.

Priklad:

```text
https://example.cz/audit-saas?utm_source=rss&utm_medium=post&utm_campaign=privacy-saas-audit-2026-08&utm_content=main-cta
```

Tohle je dost presne pro rozhodovani a porad to neni osobni profil. Jen popisuje, odkud prisla navsteva.

### 3. Mer cestu k poptavce, ne celeho cloveka

Minimalni plan mereni pro jednu kampan:

| Signal | Proc ho meris |
| --- | --- |
| Navsteva landing page se zdrojem kampane | Vidis, zda distribuce vubec privedla lidi. |
| Klik na hlavni CTA | Poznas, zda nabidka vyvolava akci. |
| Zacaty formular | Odhalis treneni mezi zajmem a odeslanim. |
| Odeslany formular | Meris obchodni vystup. |
| Kvalifikace leadu po rucni kontrole | Oddelis relevantni poptavky od sumu. |

Co do kampane typicky nepatri:

- cross-site reklamni pixel pred souhlasem,
- session replay na kazdeho navstevnika,
- fingerprinting,
- automaticke obohacovani leadu z externich databazi,
- ukladani celeho referreru s citlivymi query parametry.

Kdyz potrebujes retargeting, pojmenuj si to jako samostatne rozhodnuti s pravnim a datovym dopadem. Neschovavej ho pod "bezna analytika". Privacy-first marketing muze byt ambiciozni, ale nesmi se tvarit, ze sledovani neni sledovani, jen protoze je hezky zabalene v dashboardu.

### 4. Landing page priprav jako kampanovy kontrakt

Kampanovy slib, landing page a formular musi mluvit stejnym jazykem. Pokud clanek slibuje "audit privacy-first analytiky", landing page nema najednou prodavat obecnou digitalni transformaci. Clovek prisel kvuli jednomu duvodu.

Minimum pro kampanovou landing page:

- jedna headline veta podle kampanove otazky,
- jeden konkretni vystup,
- kratky dukaz kompetence,
- jasna cena nebo dalsi krok,
- formular s minimalnim poctem poli,
- mikrotext k datovemu pouziti,
- odkaz na privacy dokumenty,
- RSS nebo primarni URL pro dalsi obsah misto socialnich widgetu.

Priklad mikrotextu:

> Odpovime k poptavce emailem. Zdroj kampane pouzijeme jen pro vyhodnoceni, odkud prisly relevantni dotazy. Nepouzivame reklamni pixel ani profilovani napric webem.

Tenhle text neni pravni magie. Je to srozumitelny slib. A kdyz ho napises, musi odpovidat realite v kodu i nastaveni analytiky.

### 5. Vyhodnot leady rucne a kratce

Po kampani nesleduj jen konverzni pomer. U maleho SaaS je dulezitejsi kvalita.

Jednoducha tabulka:

| Pole | Priklad |
| --- | --- |
| Datum | 2026-08-01 |
| Zdroj | `rss / post / privacy-saas-audit-2026-08` |
| Segment | B2B SaaS, 3 lide v tymu |
| Problem | Nejasna analytika a cookie lista |
| Relevance | A / B / C |
| Dalsi krok | 20min call / poslat sablonu / odmitnout |
| Poznamka k datovym obavam | Ptal se na EU hosting a DPA |

Relevance muze byt jednoducha:

- A: odpovida segmentu, ma akutni problem, existuje dalsi krok.
- B: zajimavy kontakt, ale problem neni urgentni.
- C: mimo segment nebo jen obecna zvedavost.

Kdyz kampan privede 300 navstev, 12 formularu a 0 relevantnich leadu, problem neni v analytice. Problem je ve slibu, distribuci nebo segmentu. Kdyz privede 40 navstev a 3 dobre cally, mozna mas kanal, ktery stoji za dalsi iteraci, i kdyz graf nevypada jako ohnostroj.

### 6. 45min postup

Prvnich 5 minut: napis kampanovou otazku a rozhodnuti, ktere podle vysledku udelas.

Minuty 5 az 12: priprav UTM konvenci a jeden seznam odkazu. Zkontroluj, ze v parametrech nejsou osobni ani interni data.

Minuty 12 az 22: projdi landing page. Srovnej headline, CTA, formular a mikrotext s kampanovym slibem.

Minuty 22 az 30: nastav minimalni eventy: navsteva kampane, CTA klik, odeslani formulare a chyba formulare. Nic navic bez duvodu.

Minuty 30 az 35: zkontroluj `Referrer-Policy`, odchozi odkazy a sdileni URL. U citlivych cest neposilej zbytecny query string dal.

Minuty 35 az 40: priprav rucni tabulku kvality leadu a pravidlo A/B/C.

Minuty 40 az 45: zapis, kdy kampan vyhodnotis, kdo se podiva na leady a co bude znamenat "pokracovat".

### Checklist: kampan bez reklamniho pixelu

- [ ] Kampan ma jednu rozhodovaci otazku.
- [ ] Vim, jaky segment oslovuji a jakou akci chci.
- [ ] UTM parametry jsou konzistentni a neobsahuji osobni udaje.
- [ ] Landing page odpovida presne kampanovemu slibu.
- [ ] Formular sbira jen data potrebna pro dalsi krok.
- [ ] Mikrotext rika, co se stane s poptavkou a zdrojem kampane.
- [ ] Merim navstevu, CTA, formular a kvalitu leadu, ne celeho cloveka.
- [ ] Nepoustim reklamni pixel, session replay ani obohacovani leadu bez samostatneho rozhodnuti a souhlasu, pokud je potreba.
- [ ] `Referrer-Policy` nepropousti zbytecne citlive URL dal.
- [ ] Vyhodnoceni obsahuje kvalitu leadu, nejen pocet navstev.
- [ ] Po kampani rozhodnu: zopakovat, upravit nabidku, zmenit kanal nebo zastavit.

---

## Referral a partnerska doporuceni bez sledovaciho cirkusu za 45 minut

Doporuceni od spokojeneho zakaznika, partnera nebo kamaradske firmy muze byt pro maly SaaS silnejsi nez kampan s dokonalym dashboardem. Jenze referral program se snadno zvrhne v dalsi vrstvu trackingu: unikatni odkazy pro kazdeho cloveka, cookie na pul roku, automaticke obohacovani kontaktu a reporty, ktere vypadaji chytre hlavne proto, ze sbiraji vsechno. Privacy-first varianta je nudnejsi, ale cistejsi: jasny partnersky slib, lidsky srozumitelny referral kod, minimalni evidence a rucni potvrzeni kvality leadu.

Prakticky cil teto prilohy: za 45 minut pripravit referral proces, ktery jde spustit s par partnery bez reklamniho pixelu, bez profilovani a bez toho, aby se z doporuceni stala mala datova burza.

### 1. Nejdriv rozhodni, co je ferove doporuceni

Referral neni jen "nekdo privede lead". Potrebujes vedet, jaka situace je pro vsechny strany ferova.

Tri typy doporuceni:

| Typ | Kdy dava smysl | Co hlidat |
| --- | --- | --- |
| Zakaznicke doporuceni | Zakaznik zna firmu se stejnym problemem | Netlac na sdileni interniho kontextu ani dat jine firmy. |
| Partnerske doporuceni | Partner prodava navazujici sluzbu | Oddel obchodni motivaci od produktoveho slibu. |
| Obsahove doporuceni | Nekdo sdili clanek, sablonu nebo audit | Mer zdroj obsahu, ne identitu ctenare. |

Spatny start:

> Dej nam kontakty na firmy, ktere by to mohlo zajimat.

Lepsi start:

> Pokud znas nekoho, kdo resi privacy-first analytiku v SaaS, posli mu primy odkaz na audit. Kdyz se ozve, muze uvest tvuj partnersky kod.

Rozdil je velky. V prvnim pripade tahas osobni data pres treti osobu. V druhem pripade nechavas cloveka, ktery ma zajem, aby sam udelal dalsi krok.

**Codyho komentar:** Dobre doporuceni je predstaveni, ne predani pytle kontaktu. Kdyz partner musi posilat spreadsheet s cizimi emaily, proces uz smrdi i pres VPN.

### 2. Pouzij kod, kteremu rozumi clovek

Nemusis hned stavet affiliate system. Pro prvnich pet az deset partneru staci stabilni referral kod nebo kampanovy odkaz podle stejne logiky jako UTM parametry. Dokumentace ke kampanovym URL od Googlu popisuje zakladni principy zdroju a kampani tady: https://support.google.com/analytics/answer/10917952. Ty principy muzes pouzit i bez Google Analytics.

Priklad odkazu:

```text
https://example.cz/privacy-audit?utm_source=partner-novak&utm_medium=referral&utm_campaign=privacy-audit-2026-08
```

Nebo jeste jednodussi varianta:

```text
https://example.cz/privacy-audit?ref=novak
```

Pravidla pro referral kod:

- Kod oznacuje partnera nebo kanal, ne konkretniho navstevnika.
- Do kodu nedavej email, telefon, ICO ani jmeno doporucene firmy.
- Kod nemeni cenu ani obsah nabidky skrytym zpusobem.
- Jeden partner ma jeden stabilni kod pro danou nabidku.
- Kody eviduj v male tabulce s vlastnikem, ucelem a datem kontroly.

Minimalni tabulka:

| Kod | Partner | Nabidka | Odmena | Stav | Poznamka |
| --- | --- | --- | --- | --- | --- |
| `novak` | Novak Consulting | Privacy audit | 10 % z prvni platby | aktivni | Domluveno pro B2B SaaS leady |
| `rss-hosting` | Hostingovy partner | EU provozni audit | bez odmeny | aktivni | Obsahove doporuceni z clanku |

Pokud potrebujes presne priradit provizi, udelej to po odeslani formulare a rucnim potvrzeni. Nesnaz se identifikovat kazdeho anonymniho navstevnika jen proto, aby tabulka vypadala presneji.

### 3. Formular ma chranit doporuceneho cloveka

Referral formular nema byt past na leady. Clovek musi pochopit, proc se ptas na partnera, co s informaci udelas a co se nestane.

Minimalni pole:

- pracovni email,
- firma nebo projekt,
- jedna veta k problemu,
- volitelne pole "kdo vas doporucil",
- souhlas s kontaktovanim kvuli teto poptavce, pokud ho v danem toku potrebujes,
- odkaz na privacy informace.

Priklad mikrotextu:

> Kod doporuceni pouzijeme jen pro vyhodnoceni partnerstvi a pripadnou provizi. Nepredavame partnerovi obsah poptavky bez vaseho souhlasu.

Tohle je dulezite. Partner ma vedet, ze doporuceni prislo a zda splnilo domluvena pravidla. Nemusi ale automaticky videt problem, rozpocet, interni kontext ani zpravu z formulare. Pokud ma partner dal spolupracovat na obchodu, rekni to predem a nech zakaznika vedet, kdo bude v komunikaci.

### 4. Odmenu navrhni tak, aby nekazila duveru

Referral program se rozbije ve chvili, kdy odmena motivuje ke spatnym leadum. Male SaaS nepotrebuje nejvetsi mozny objem. Potrebuje doporuceni, ktere dava smysl pro produkt, segment a hodnoty.

Jednoduche varianty:

| Varianta | Kdy ji pouzit | Riziko |
| --- | --- | --- |
| Podekovani bez penez | Komunitni nebo obsahove doporuceni | Muze byt malo motivujici pro aktivni partnery. |
| Fixni odmena za kvalifikovany call | Kdyz je call jasne definovany | Muze motivovat ke schuzkam bez realne potreby. |
| Procento z prvni platby | Kdyz jde o obchodni partnerstvi | Musis presne rict, co je prvni platba a kdy vznikne narok. |
| Reciprocal referral | Dve firmy si posilaji relevantni klienty | Snadno vznikne socialni tlak misto kvality. |

Prakticka pravidla:

- Odmenu vaz na kvalifikovany vysledek, ne na pouhy klik.
- Nepis "dozivotni provize", pokud nemas proces na dlouhodobe vyuctovani.
- Partnerovi nedavej pristup do CRM jen kvuli kontrole odmen.
- V nabidce priznej, pokud je doporuceni motivovane provizi.
- Jednou mesicne zkontroluj, zda partner neprinasi leady mimo segment.

Ferovy referral nesmi menit produktove rozhodovani. Kdyz lead neni vhodny, odmitni ho normalne. Neprodavej spatnou implementaci jen proto, ze nekdo cekal provizi.

### 5. Vyhodnocuj malo signalu, ale pravidelne

Minimalni vyhodnoceni referral programu:

| Signal | Proc ho sledovat |
| --- | --- |
| Pocet poptavek podle kodu | Vidis, zda partnerstvi vubec zije. |
| Pocet kvalifikovanych leadu | Oddelis zajem od relevantniho byznysu. |
| Pocet zakazek | Overis obchodni dopad. |
| Prumerna doba do prvni odpovedi | Referral lead by nemel spadnout do inboxoveho bahna. |
| Pocet nevhodnych leadu | Signal, ze partner spatne rozumi nabidce. |
| Privacy incidenty nebo stiznosti | Okamzity duvod proces zastavit a opravit. |

Jednou za mesic si projdi tri otazky:

- Kteri partneri privedli relevantni poptavky?
- Ktere poptavky byly mimo segment a proc?
- Musime upravit text, kod, odmenu nebo pravidla sdileni dat?

Kdyz program tri mesice neprinese nic relevantniho, nenech ho bezet jen proto, ze "uz je nastaveny". Vypni neaktivni kody, uklid landing page a rekni partnerum, co se meni.

### 6. 45min postup

Prvnich 5 minut: napis jednu vetu, pro koho referral program je a jaky problem ma doporuceni resit.

Minuty 5 az 12: vyber prvni 3 partnery nebo zdroje. U kazdeho napis, proc dava smysl a jake leady nechces.

Minuty 12 az 20: vytvor referral kody a tabulku evidence. Zkontroluj, ze kody neobsahuji osobni udaje ani interni informace.

Minuty 20 az 28: uprav landing page nebo formular. Pridej volitelne pole "kdo vas doporucil" a mikrotext k pouziti referral kodu.

Minuty 28 az 35: sepis kratkou partnerskou zpravu: co maji sdilet, komu to patri, co neslibovat a jak funguje odmena.

Minuty 35 az 40: priprav rucni vyhodnoceni leadu s poli kod, relevance, dalsi krok a odmena.

Minuty 40 az 45: nastav datum prvni kontroly. Referral program bez kontroly je jen dalsi zapomenuty formular s hezcim nazvem.

### Checklist: referral bez sledovaciho cirkusu

- [ ] Vim, jaky typ doporuceni chci: zakaznicke, partnerske nebo obsahove.
- [ ] Referral kod oznacuje kanal nebo partnera, ne konkretniho navstevnika.
- [ ] Odkazy neobsahuji emaily, jmena doporucenych firem ani interni poznamky.
- [ ] Formular sbira jen data potrebna pro odpoved na poptavku.
- [ ] Mikrotext vysvetluje, jak pouziju referral kod a co partner neuvidi.
- [ ] Partner nema automaticky pristup do CRM ani k obsahu poptavky.
- [ ] Odmena je navazana na kvalifikovany vysledek, ne na nahodne kliky.
- [ ] Partner vi, co nesmi slibovat za produkt, support, compliance ani roadmapu.
- [ ] Jednou mesicne kontroluji kvalitu leadu a nevhodne zdroje.
- [ ] Neaktivni nebo nekvalitni kody vypinam misto toho, abych je nechal hnit.

---

## Pripadova studie bez prozrazeni zakaznickych dat za 60 minut

Pripadova studie je silny marketingovy format, protoze ukazuje realny problem, cestu a vysledek. Jenze u B2B SaaS muze snadno sklouznout k tomu, ze verejne prozradis vic, nez je zdrave: interni proces zakaznika, strukturu tymu, pouzivane nastroje, bezpecnostni slabiny, konkretni objemy dat nebo osobni udaje lidi, kteri v pribehu ani nechteji byt.

Privacy-first pripadova studie ma jednoduchy cil: ukazat dost konkretni hodnotu pro podobne zakazniky, ale neudelat z referencniho zakaznika vystavni vitrinu jeho internich rizik. Dobra studie prodava duveru tim, ze je presna, ferova a schvalena.

EDPB rozlisuje anonymizaci a pseudonymizaci: pseudonymizace snizuje propojeni dat s konkretni osobou, ale neodstranuje ho automaticky; skutecne anonymizovana data uz nemaji byt spojitelna s jednotlivcem. Prehled EDPB k tematu je tady: https://www.edpb.europa.eu/topics/ai-and-technology/anonymisation-pseudonymisation_en. Prakticky preklad pro marketing: "prejmenovali jsme zakaznika na Firmu A" neni kouzelny plast neviditelnosti.

### 1. Nez zacnes psat, udelej datovy semafor

Rozdel informace do tri skupin:

| Typ informace | Priklad | Jak s ni pracovat |
| --- | --- | --- |
| Zelena | Verejny obor, obecny typ problemu, schvalena citace | Muze do textu, pokud sedi s kontextem. |
| Zluta | Velikost tymu, proces, metriky pred/po, pouzite integrace | Zobecni, agreguj nebo nech schvalit presne zneni. |
| Cervena | Osobni udaje, security slabiny, interni ceny, incidenty, citlive objemy dat | Nepublikuj bez jasneho duvodu, souhlasu a smluvni kontroly. |

Priklad:

> "Zakaznik mel v CRM 18 742 kontaktu vcetne poznamek obchodniku a exportoval je do nastroje X."

Lepsi verze:

> "B2B tym s tisici kontaktu potreboval omezit, ktere leady se posilaji do externich nastroju, a oddelit obchodni poznamky od marketingove analytiky."

Druha verze porad rika, pro koho je problem relevantni. Nevyzrazuje ale konkretni objemy, nastroje ani interni provozni detail.

**Codyho komentar:** Nejlepsi case study neni ta, ktera rekne vsechno. Je to ta, po ktere podobny zakaznik rekne "tohle je muj problem" a referencni zakaznik nemusi psat rozzureny email.

### 2. Vysledek popisuj pres rozhodnuti, ne pres sledovani

Marketing miluje cisla. Cisla jsou fajn, pokud jsou pravdiva, srozumitelna a nevznikla zbytecnym sledovanim lidi.

Bezpecnejsi typy vysledku:

- zkraceni konkretniho procesu,
- mene rucnich kroku,
- rychlejsi odpoved zakaznikovi,
- snizeni poctu nastroju v datove ceste,
- jasnejsi odpovednost v tymu,
- mensi rozsah sbiranych dat,
- lepsi auditovatelnost a export.

Slaba veta:

> "Zvedli jsme efektivitu o 37 % diky pokrocilemu sledovani chovani uzivatelu."

Lepsi veta:

> "Tym prestal rucne kontrolovat tri nastroje a zavedl jeden denni seznam follow-upu. Po mesici dokazal odpovidat na nove B2B poptavky do dalsiho pracovniho dne bez toho, aby posilal obsah mailboxu do dalsi analyticke sluzby."

Tohle je konkretni a pritom nepotrebuje invazivni detail. Ukazuje zmenu v praci, ne honbu za presnym procentem za kazdou cenu.

### 3. Citace musi byt schvalena, kontext taky

Citace bez kontextu umi byt neferova i tehdy, kdyz je doslovna. U B2B referenci proto pouzivej maly schvalovaci balicek:

- finalni text citace,
- jmeno a role, pokud maji byt verejne,
- nazev firmy a logo, pokud maji byt verejne,
- vecny kontext kolem citace,
- metriky nebo tvrzeni, ktere citace podporuje,
- datum schvaleni,
- clovek, ktery schvaleni dal.

Pokud zakaznik nechce byt jmenovany, respektuj to. Anonymni studie muze porad fungovat, kdyz je dobra:

> "Cesky B2B SaaS s peticlennym tymem podpory" je pro ctenare uzitecnejsi nez "nas klient".

Vyhni se formulacim, ktere anonymitu rozbiji kombinaci detailu. "Vyrobce specializovaneho softwaru pro veterinarni kliniky v Brne s 12 lidmi" muze byt v praxi skoro jmeno firmy.

### 4. Screenshoty cisti jako produktovy material, ne jako nahodne obrazky

Screenshot prodava rychle, ale take rychle vynasi data. Pred publikaci zkontroluj:

- jmena, emaily, telefony a avatary,
- nazvy zakazniku zakaznika,
- interni poznamky, castky a smluvni detaily,
- URL s tokeny nebo query parametry,
- casy, ID, cisla faktur a objednavek,
- chyby, ktere ukazuji infrastrukturu,
- nazvy internich workspace nebo projektu.

Nejspolehlivejsi je pouzit demo data vytvorena pro publikaci. Rozmazani obrazku neni idealni strategie: nekdy jde text obnovit, nekdy zustane poznatelny kontext a skoro vzdy to vypada jako rychla oprava misto profesionalni reference.

Prakticky postup:

1. Vytvor demo workspace se syntetickymi daty.
2. Nastav stejne stavy, ktere chces ukazat v pribehu.
3. Udelej screenshoty z demo prostredi.
4. Nech je projit privacy kontrolou stejne jako text.
5. Uloz zdroj screenshotu a datum, kdy vznikl.

### 5. Struktura studie, ktera neprodava mlhu

Pouzij sest casti:

| Cast | Otazka |
| --- | --- |
| Kontext | Pro koho byl problem relevantni? |
| Problem | Co se delo pred zmenou? |
| Riziko | Co by se stalo, kdyby se nic nezmenilo? |
| Reseni | Co se zavedlo a proc prave to? |
| Vysledek | Co se zlepsilo pozorovatelnym zpusobem? |
| Privacy pouceni | Ktera data se nesbirala, omezila nebo lepe ridila? |

Sablona:

```text
Zakaznik:
[segment, velikost nebo role bez zbytecne identifikace]

Problem:
[konkretni situace z provozu]

Pred zmenou:
[rucni kroky, ztraty, rizika]

Co jsme udelali:
[3 az 5 rozhodnuti nebo zasahu]

Vysledek:
[pozorovatelny posun, pripadne schvalena metrika]

Privacy-first detail:
[co jsme zamerne nesbirali, kam data nesla, co se zjednodusilo]

Schvaleno:
[kdo, kdy, rozsah publikace]
```

### 6. 60min postup

Prvnich 10 minut: vyber jednu referenci a napis, proc ma byt verejna. Pokud neumis rict, komu pomuze pri rozhodovani, neni to studie, ale dekorace.

Minuty 10 az 20: udelej datovy semafor. Oznac zelene, zlute a cervene informace. Cervene informace vyrad hned.

Minuty 20 az 35: napis prvni verzi podle struktury kontext, problem, riziko, reseni, vysledek a privacy pouceni.

Minuty 35 az 45: prepis metriky a screenshoty tak, aby neprozrazovaly zakaznicka nebo osobni data. Kde to nejde, pouzij demo data nebo textovy popis.

Minuty 45 az 55: priprav schvalovaci balicek pro zakaznika. Posli jen finalni text, citace, obrazky a seznam verejnych tvrzeni, ne interni poznamky z projektu.

Minuty 55 az 60: zapis vlastnika studie, datum kontroly a misto, kde bude ulozene schvaleni. Bez schvaleni nepublikuj.

### Checklist: pripadova studie bez vyzrazeni dat

- [ ] Vim, komu ma studie pomoct pri nakupnim rozhodnuti.
- [ ] Informace jsou rozdelene na zelene, zlute a cervene.
- [ ] Nepublikuji osobni udaje, interni ceny, security slabiny ani citlive objemy dat.
- [ ] Pseudonymizace neni zamena za anonymizaci.
- [ ] Metriky jsou schvalene, vysvetlene a nevyzaduji zbytecne sledovani lidi.
- [ ] Citace maji schvalene presne zneni i kontext.
- [ ] Screenshoty pouzivaji demo nebo dukladne vycistena data.
- [ ] Anonymni popis zakaznika nejde snadno zpetne spojit s jedinou firmou.
- [ ] Privacy-first detail je soucast pribehu, ne dodatecna poznamka.
- [ ] Mam ulozene datum schvaleni a rozsah toho, co smi byt verejne.
- [ ] Studie ma naplanovanou kontrolu, aby casem nelhala o produktu nebo zakaznikovi.

---

## Webinar a workshop bez registracni pasti za 60 minut

Webinar je dobry format pro B2B SaaS, kdyz chces vysvetlit slozitejsi problem, ukazat zpusob premysleni a otevrit konverzaci s lidmi, kteri jeste nejsou pripraveni na demo call. Spatny webinar je ale jen lead magnet s kamerou: dlouhy formular, povinne telefonni cislo, automaticke prihlaseni do newsletteru, nahravka rozeslana bez jasneho pravidla a po akci pet follow-upu, ze "mista se rychle plni", i kdyz sedis sam v kancelari.

Privacy-first webinar ma mensi ambici a lepsi vysledek: pozvat spravne lidi, predat praktickou hodnotu, sebrat jen data nutna pro organizaci a navazat lidsky tam, kde k tomu ucastnik dal rozumny signal.

GDPR princip minimalizace dat rika, ze osobni udaje maji byt primerene, relevantni a omezene na to, co je nezbytne pro dany ucel. Primarni text je v clanku 5 GDPR: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng. Prakticky preklad pro webinar: email pro poslani odkazu dava smysl, rodne cislo prekvapive stale ne.

### 1. Rozhodni, jestli registrace vubec musi existovat

Ne kazda vzdelavaci akce potrebuje gate. Pokud je cilem sireni povedomi, castejsi a privacy-first cesta je verejna stranka s terminem, primym odkazem do kalendare, RSS oznameni a nasledne publikovana nahravka nebo textovy recap. Registrace dava smysl, kdyz:

- potrebujes poslat pristupovy odkaz,
- je kapacita opravdu omezena,
- chces pripravit obsah podle otazek ucastniku,
- navazuje konkretni nabidka nebo konzultace,
- akce neni verejna kvuli zakaznickemu nebo oborovemu kontextu.

Slaby duvod pro registraci:

> "Chceme mit leady."

Lepsi duvod:

> "Posilame odkaz do mistnosti, predem sbirame jednu otazku a po akci posleme nahravku jen lidem, kteri o ni stoji."

Pokud registrace existuje jen proto, aby se z anonymniho ctenare stal radek v CRM, je to marketingova berlicka. Casto lip funguje otevreny obsah a jasna vyzva: "Chcete to projit na vasem produktu? Napiste nam."

**Codyho komentar:** Kdyz je obsah dobry, nemusi se schovavat za formular jako server pod stolem. Formular ma byt servisni prvek, ne past na emaily.

### 2. Registracni formular drz kratky a pravdivy

Minimalni formular pro vetsinu B2B webinaru:

| Pole | Povinne? | Proc |
| --- | --- | --- |
| Email | Ano | Poslani odkazu, pripomenuti a materialu po akci. |
| Jmeno | Volitelne | Osobnejsi komunikace, ale neni nutne pro pristup. |
| Firma | Volitelne | Pomaha prizpusobit priklady, ale neni nutna. |
| Otazka k tematu | Volitelne | Zlepsuje obsah a dava prirozeny signal zajmu. |
| Souhlas s navazujicim obsahem | Oddelene | Jen pokud chces posilat dalsi marketingove zpravy. |

Neptej se na telefon, rozpocet, pocet zamestnancu a rozhodovaci pravomoc, pokud nejde o uzavreny workshop pro kvalifikovane zajemce. U otevreneho vzdelavaciho webinaru to pusobi jako obchodni kontrola u vstupu.

Mikrotext pod formularem:

```text
Email pouzijeme pro poslani odkazu na webinar, pripomenuti a materialu k teto akci. Do newsletteru vas neprihlasime automaticky.
```

Pokud chces nabidnout newsletter nebo dalsi pozvanky, dej oddeleny checkbox:

```text
[ ] Chci dostavat dalsi prakticke pozvanky a materialy od Dreamindu.
```

Checkbox nema byt predvyplneny. Souhlas ma byt samostatne rozhodnuti, ne drobne pismo pod tlacitkem.

### 3. Nahravku res jako samostatny datovy objekt

Nahravka webinaru muze obsahovat osobni udaje: jmena ucastniku, hlas, chat, dotazy, sdilenou obrazovku, interni ukazky nebo nahodne notifikace. Proto pred akci rozhodni:

- jestli se bude nahravat,
- kdo nahravku dostane,
- jak dlouho bude ulozena,
- kde bude ulozena,
- kdo ji muze stahnout,
- jestli bude verejna, neverejna nebo jen interni,
- jak odstranis chat, seznam ucastniku a omylem zachycene detaily.

Prakticke pravidlo:

> Nahravka neni automaticky stejny obsah jako verejny clanek. Je to zaznam realne komunikace a podle toho s ni zachazej.

Pred zacatkem rekni jednu kratkou vetu:

```text
Webinar budeme nahravat pro registrovane ucastniky. Dotazy muzete posilat do chatu; pokud nechcete byt v nahravce, pouzijte anonymizovanou formulaci nebo nam napiste po akci emailem.
```

Pro verejne publikovani je casto lepsi udelat cistou verzi: kratke video bez chatu, prepsany clanek, checklist nebo slide deck. Zisk z obsahu zustane, datove riziko klesne.

### 4. Follow-up ma navazovat na signal, ne na hlad CRM

Po akci rozdel ucastniky podle chovani, ktere je ferove a minimalni:

| Signal | Vhodna reakce |
| --- | --- |
| Registroval se, neprisel | Posli material a jednu vetu, ze se muze ozvat. |
| Prislibil ucast a prisel | Posli material, recap a odkaz na souvisejici obsah. |
| Polozil konkretni otazku | Odpovez na otazku osobne a nabidni dalsi krok. |
| Pozadal o konzultaci | Predej do obchodniho toku s jasnym kontextem. |
| Souhlasil s dalsimi pozvankami | Zarad do vybraneho seznamu, ne do vsech kampani sveta. |

Nepotrebujes sledovat kazdou sekundu sledovani videa. U maleho SaaS je casto cennejsi rucne projit deset otazek nez automaticky skore na 500 tichych divaku.

Sablona follow-upu pro vsechny ucastniky:

```text
Ahoj,

diky za zajem o webinar [tema]. Tady je shrnuti a materialy:

- recap: [URL]
- checklist: [URL]
- nahravka: [URL, pokud existuje]

Pokud resite podobnou situaci u sebe, odpovezte jednou vetou, co je nejvetsi brzda. Podle toho poslu konkretni dalsi krok.

Cody / Dreamind
```

Sablona odpovedi na konkretni otazku:

```text
Ahoj,

na webinaru jste se ptali na [tema]. Kratka odpoved: [odpoved].

Pokud to chcete overit na vasem toku, staci poslat obecny popis procesu bez zakaznickych dat. Navrhnu, kde zacit.
```

### 5. Nastroje vybirej podle datove cesty

Pred vyberem webinar platformy si napis malou kartu:

```text
Nastroj:
[nazev]

Data:
registrace, emaily, chat, nahravky, IP/logy, analytics

Region:
[kde jsou data ulozena]

Pristupy:
[kdo z tymu a dodavatele vidi data]

Retence:
[kdy mazeme registrace, chat a nahravky]

Export:
[jak ziskame seznam ucastniku a jak ho smazeme]

Fallback:
[co pouzijeme, kdyz nastroj vypadne]
```

Preferuj reseni, kde dokazes oddelit:

- registracni stranku,
- samotne vysilani,
- nahravku,
- follow-up email,
- marketingovy seznam.

Kdyz jeden nastroj vlastni celou cestu a posila data do dalsich integraci automaticky, je pohodlny, ale hure se vysvetluje. U privacy-first provozu chces vedet, kam email a chat doputuje, ne jen doufat, ze v dashboardu existuje tlacitko "export".

### 6. 60min postup

Prvnich 10 minut: napis cil akce jednou vetou. Napriklad: "Pomoci zakladatelum B2B SaaS zkontrolovat, jestli jejich onboarding sbira zbytecna data." Pokud cil nezni jako uzitek pro ucastnika, prepis ho.

Minuty 10 az 20: rozhodni, jestli bude registrace otevrena, uzavrena nebo zadna. Pokud registrace existuje, nech jen email a volitelnou otazku.

Minuty 20 az 30: priprav landing text: komu je akce urcena, co si odnese, kdo vede obsah, jak se pracuje s daty a jestli bude nahravka.

Minuty 30 az 40: nastav datovou cestu. Kde se ulozi registrace, kdo je uvidi, kdy se smazou, kde bude nahravka a jak se oddeli newsletter souhlas.

Minuty 40 az 50: napis follow-up pro tri skupiny: neprisel, prisel, polozil otazku. Zamer se na uzitecny dalsi krok, ne na tlak.

Minuty 50 az 60: pridej do kalendare kontrolu po akci: smazani nepotrebnych dat, ulozeni anonymizovaneho recapu, rucni vyhodnoceni otazek a jedno rozhodnuti, co zlepsit priste.

### Checklist: webinar bez registracni pasti

- [ ] Cil akce je napsany jako uzitek pro ucastnika, ne jako interni lead target.
- [ ] Vim, jestli registrace opravdu musi existovat.
- [ ] Formular sbira jen email a pripadne volitelne pole, ktere zlepsuje obsah.
- [ ] Newsletter nebo dalsi pozvanky maji oddeleny, nepredvyplneny souhlas.
- [ ] Mikrotext jasne rika, k cemu email pouziju.
- [ ] Pred akci je jasne, jestli se nahrava a kdo nahravku dostane.
- [ ] Chat, seznam ucastniku a nahravka maji stanovene ulozeni a mazani.
- [ ] Follow-up je rozdeleny podle rozumneho signalu, ne podle invazivniho sledovani.
- [ ] Nastroj ma zmapovanou datovou cestu, region, pristupy, retenci a export.
- [ ] Po akci mazeme nepotrebna data a nechavame si jen to, co ma dalsi ucel.
- [ ] Verejny recap nebo checklist muze zit na vlastni URL a pres RSS, ne jen uvnitr platformy.

---

## Komunita bez platformniho zamku za 60 minut

Komunita kolem SaaS produktu nemusi zacit jako Slack workspace, Discord server nebo LinkedIn skupina, ktera vyzaduje dalsi login, dalsi profil a dalsi notifikacni peklo. Casto staci mnohem jednodussi vec: pravidelne misto, kde se lide muzou ptat, dostavat odpovedi, navrhovat temata a videt, ze produkt ma ziveho spravce.

Privacy-first komunita neni komunita bez kontaktu. Je to komunita, kde clovek vi, komu pise, co se s jeho zpravou stane a kde zustane historie. U evropskeho SaaS je to obchodni vyhoda: mene zavislosti na platformach, mensi datova stopa a vetsi sance, ze obsah bude dohledatelny i za rok.

### 1. Nejdriv vyber typ komunity

Ne kazdy produkt potrebuje real-time chat. Ten vypada zive, ale rychle vytvari zavazek odpovidat porad. Pro maly tym je lepsi vybrat format podle toho, co ma komunita delat.

| Cil | Vhodny format | Proc |
| --- | --- | --- |
| Sbirat caste dotazy | Verejne FAQ nebo diskusni vlakna u dokumentace | Odpovedi se daji znovu pouzit. |
| Pomahat zakaznikum s nastavenim | Email alias nebo helpdesk fronta | Mene verejneho sdileni dat, lepsi kontrola kontextu. |
| Budovat odborne publikum | Blog, RSS, komentare pres moderovany formular | Obsah zustava na vlastni domene. |
| Zapojit power users | Mala pozvankova skupina | Staci malo lidi s kvalitnim signalem. |
| Testovat roadmapu | Pravidelny office hours call | Rychlejsi rozhodnuti nez nekonecne vlakno. |

Pravidlo:

> Komunitni kanal vyber podle rozhodnuti, ktere chces delat, ne podle toho, kde zrovna vsichni krici nejhlasiteji.

**Priklad:**

Pokud potrebujes zjistit, proc se zakaznici zasekavaji pri importu dat, verejna socialni skupina je zbytecne siroka. Lepsi je kratky formular "Co vam branilo dokoncit import?" a navazujici email. Kdyz se stejna odpoved opakuje petkrat, udelej z ni clanek, checklist nebo opravu produktu.

### 2. Vytvor komunitni kontrakt

Pred spustenim kanalu napis jednu kratkou kartu. Neni to korporatni manifest. Je to dohoda, ktera chrani zakazniky i tym.

```text
Kanal:
[nazev a URL]

Ucel:
[proc existuje]

Kdo ho cte:
[role nebo tym]

Co sem patri:
[typy dotazu, napadu, problemu]

Co sem nepatri:
[osobni udaje, zakaznicka data, tajemstvi, incidenty]

Retence:
[jak dlouho uchovavame zpravy nebo exporty]

Verejnost:
[verejne / jen pro zakazniky / interni]

Fallback:
[kam psat, kdyz je vec urgentni nebo citliva]
```

Mikrotext pro formular nebo uvodni zpravu:

```text
Neposilejte sem prosim osobni udaje zakazniku, pristupy ani interni dokumenty. Pokud potrebujeme citlivy kontext, domluvime bezpecnejsi kanal.
```

Tohle neni paranoia. Je to servis pro uzivatele, kteri v rychlosti posilaji screenshoty, exporty a detaily problemu. Jasna hranice predem je levnejsi nez uklid po spatnem sdileni.

### 3. Vlastni domena ma byt misto pravdy

Platformy jsou dobre na dosah. Vlastni domena je dobra na pamet. Kdyz vznikne uzitecna odpoved, patri na URL, kterou kontrolujes: dokumentace, blog, changelog, FAQ nebo znalostni baze.

Minimalni tok:

1. Dotaz prijde emailem, formularem nebo v male skupine.
2. Odpovis konkretne cloveku.
3. Pokud je odpoved opakovatelna, anonymizuj ji.
4. Preved ji do verejneho clanku, FAQ nebo checklistu.
5. V dalsim follow-upu posilej primarni URL, ne screenshot z platformy.

Takto komunita nevyrabi jen notifikace. Vyrabi knihovnu odpovedi, ktera zlepsuje support, SEO i onboarding.

**Codyho komentar:** Socialni platforma je pronajaty megafon. Vlastni web je dilna. Megafon se hodi, kdyz chces zavolat lidi dovnitr. Ale znalosti bych si v nem neskladoval, protoze pronajem se umi tvarit jako vlastnictvi az do prvni zmeny pravidel.

### 4. Komentare moderuj jako produktovy vstup

Komentar neni jen text pod clankem. Je to signal. Nekdy supportni, nekdy produktovy, nekdy obchodni. Pokud vsechno skonci v jednom inboxu, tym rychle ztrati prehled.

Pouzij tri kose:

| Kos | Co tam patri | Dalsi krok |
| --- | --- | --- |
| Odpoved | Dotaz, na ktery existuje jasna odpoved | Odpovez, pripadne pridej do FAQ. |
| Signal | Opakovany problem, namitka nebo napad | Pridej do feedback loopu s odkazem na zdroj. |
| Riziko | Citliva data, incident, pravni dotaz, bezpecnost | Presun do kontrolovaneho interniho procesu. |

U verejnych komentaru nastav moderaci minimalne pro prvni zpravu cloveka. Ne kvuli cenzure, ale kvuli spamu, osobnim udajum a nahodnym screenshotum. Automaticke publikovani muze byt prijemne, dokud nekdo nevlozi token, email klienta nebo debug vypis.

### 5. Metriky komunity drz lidske

Komunita se da merit bez sledovani jednotlivcu napric webem. Zacni s metrikami, ktere vedou k rozhodnuti:

- pocet kvalitnich dotazu za tyden,
- opakovane tema dotazu,
- cas do prvni odpovedi,
- pocet odpovedi prevedenych do dokumentace,
- pocet produktovych zmen vzniklych z komunitniho signalu,
- pocet citlivych prispevku, ktere bylo potreba presunout jinam.

Vyhni se vanity metrikam typu "pocet clenu" bez aktivity. Tisic tichych lidi v uzavrene platforme muze mit mensi hodnotu nez dvacet zakazniku, kteri kazdy mesic polozi presny dotaz a pomuzou zlepsit produkt.

Maly tydenni zapis muze vypadat takto:

```text
Tyden:
[datum]

Nejcastejsi tema:
[tema]

Co jsme odpovedeli verejne:
[URL]

Co jde do produktu:
[issue / rozhodnuti]

Co mazeme nebo presouvame:
[citlive prispevky, exporty, screenshoty]

Jedna zmena na pristi tyden:
[konkretni krok]
```

### 6. 60min postup

Prvnich 10 minut: napis ucel komunity jednou vetou. Napriklad: "Pomahat zakaznikum rychle vyresit onboarding a premenovat opakovane dotazy na verejnou dokumentaci." Pokud veta zni jako "budovat engagement", prepis ji. To slovo casto znamena, ze nikdo nevi, co se ma stat.

Minuty 10 az 20: vyber kanal. Pro B2B SaaS casto staci email alias, formular u dokumentace a pravidelne office hours. Real-time chat pridej az ve chvili, kdy vis, kdo ho bude obsluhovat.

Minuty 20 az 30: napis komunitni kontrakt: ucel, kdo cte zpravy, co sem patri, co sem nepatri, retence a urgentni fallback.

Minuty 30 az 40: priprav tri sablony odpovedi: bezny dotaz, citliva data, produktovy napad. U citlivych dat vzdy presun konverzaci do bezpecnejsiho kanalu a nenech je ve verejnem vlakne.

Minuty 40 az 50: zaloz misto pravdy na vlastni domene. Muze to byt stranka "Komunita a podpora", FAQ nebo verejny index odpovedi. Pridej RSS nebo primy odkaz, pokud dava smysl.

Minuty 50 az 60: nastav tydenni review. Projdi dotazy, vyber jednu odpoved k publikovani, jednu vec do produktu a jednu vec k uklidu. Komunita bez udrzby je jen pomale rostouci archiv kompromisu.

### Checklist: komunita bez platformniho zamku

- [ ] Vim, proc komunita existuje a jake rozhodnuti ma zlepsovat.
- [ ] Zvoleny kanal odpovida velikosti tymu a rychlosti odpovedi.
- [ ] Komunitni kontrakt rika, co sem patri a co sem nepatri.
- [ ] Uvodni mikrotext zakazuje posilat osobni udaje, pristupy a interni dokumenty.
- [ ] Uzitecne odpovedi se prevadi na vlastni URL, ne zustavaji jen v platforme.
- [ ] Verejne komentare maji moderaci pro spam a nahodne citlive informace.
- [ ] Citlive prispevky se presouvaji do kontrolovaneho procesu.
- [ ] Metriky meri kvalitu signalu, ne jen pocet clenu.
- [ ] Tydenni review konci jednou publikovanou odpovedi, jednim produktovym signalem nebo jednim uklidem.
- [ ] Komunita ma fallback pro urgentni support, incidenty a bezpecnostni hlasky.

---

## Zakaznicky pruzkum bez zbytecneho profilovani za 45 minut

Zakaznicky pruzkum ma byt nastroj pro rozhodnuti, ne dalsi formular, ktery lidem sahne do kalendare, role, rozpoctu, lokace a nalady jen proto, ze to nastroj umi. U maleho SaaS vetsinou nechces vedet vsechno. Chces vedet, co zlepsit pristi tyden, co prestalo fungovat a proc nekdo porad jeste nedosel k hodnote.

Privacy-first pruzkum ma tri pravidla:

- pta se jen na otazky, ktere povedou k rozhodnuti,
- odpovedi drzi oddelene od zbytecneho profilu zakaznika,
- predem rika, kdo odpovedi cte a jak se pouziji.

Tohle neni akademicka cistota. Kdyz se zakaznik boji napsat pravdu, protoze ma pocit, ze se odpoved prilepi k jeho obchodnimu profilu na vecnost, dostanes uhlazenou mlhu. A mlha je spatny produktovy vstup.

### 1. Vyber jeden duvod pruzkumu

Nejdriv rozhodni, proc se ptas. Jeden pruzkum nema najednou merit spokojenost, sbirat produktove napady, kvalifikovat upsell, validovat cenik a testovat marketingovy slogan. To uz neni pruzkum, to je vyslech s hezkym tlacitkem.

Pouzij jeden z peti rezimu:

| Rezim | Kdy ho pouzit | Hlavni vystup |
| --- | --- | --- |
| Aktivace | Uzivatel prosel onboardingem. | Co mu pomohlo nebo brzdilo prvni hodnotu. |
| Retence | Zakaznik produkt pouziva opakovane. | Co drzi hodnotu a co se opakuje jako bolest. |
| Churn | Zakaznik odchazi nebo prestal pouzivat produkt. | Hlavni duvod odchodu a mozna oprava. |
| Funkce | Prave byla vydana zmena. | Jestli zmena resi realny use-case. |
| Duvera | Zakaznici se ptaji na data, hosting nebo bezpecnost. | Ktere informace chybi v produktu, dokumentaci nebo obchodu. |

**Priklad spatneho zadani:**

"Chceme zjistit, jak jsou zakaznici spokojeni a co by chteli."

**Lepsi zadani:**

"Chceme zjistit, proc nove tymy po registraci nedokonci import dat do 48 hodin."

Druhe zadani rika, koho oslovit, kdy se ptat, jake odpovedi hledat a co se mozna zmeni v produktu. Prvni zadani vyrobi barevny report a pak ticho.

### 2. Otazky pis tak, aby sly menit na praci

Kazda otazka musi mit vlastnika rozhodnuti. Pokud nikdo nevi, co s odpovedi udela, otazku smaz.

Minimalni sada pro aktivacni pruzkum:

```text
Predmet:
Pomohlo vam prvni nastaveni?

Otazky:
1. Co jste chteli v Codym udelat?
2. Kde jste se zasekli nebo zpomalili?
3. Co by melo byt jasnejsi pred prvnim pouzitim?
4. Muzeme se ozvat s jednim doplnujicim dotazem? [ano/ne]
```

Minimalni sada pro churn pruzkum:

```text
Predmet:
Co nam uteklo?

Otazky:
1. Jakou praci mel produkt puvodne resit?
2. Co byl hlavni duvod, proc nepokracujete?
3. Co pouzijete misto nej?
4. Je neco, co bychom meli smazat, exportovat nebo uzavrit?
```

U churnu je posledni otazka dulezita. Odchod zakaznika neni jen marketingovy signal. Je to provozni okamzik: data, pristupy, fakturace, exporty, otevrene integrace a sliby. Kdyz se na to nezeptas, cast uklidu zustane ve vzduchu.

**Codyho komentar:** NPS otazka muze byt uzitecna, ale sama o sobe nerekne, co opravit. Skore bez textoveho duvodu je jako budik bez ciferniku. Dela hluk, ale porad nevis, kolik je.

### 3. Nespojuj odpovedi s profilem, pokud nemusis

U maleho B2B SaaS casto staci vedet segment a stav v produktu, ne plnou identitu respondenta. Jinak vypada odpoved od trial uzivatele, jinak od platiciho admina a jinak od cloveka, ktery produkt pouziva kazdy den. Ale nepotrebujes kvuli tomu tahat cely CRM zaznam do survey nastroje.

Prakticke urovne identifikace:

| Uroven | Kdy staci | Co sbirat |
| --- | --- | --- |
| Anonymni | Obecna zpetna vazba k dokumentaci nebo obsahu. | Odpoved, cas, volitelny segment. |
| Pseudonymni | Produktovy pruzkum, kde potrebujes fazi uzivatele. | Interni ID nebo hash, plan, faze onboardingu. |
| Identifikovana | Follow-up k problemu, support nebo account management. | Kontakt jen se souhlasem nebo jasnym ucelem. |

Vyhni se automatickemu pribaleni vseho, co nastroj nabizi: IP adresy, user-agent, presna lokace, reklamni identifikatory, historie kampani, velikost firmy z obohacovaci databaze. Pokud to nepouzijes pro konkretni rozhodnuti, je to jen dalsi vec, kterou musis chranit a vysvetlovat.

Dobry mikrotext pod pruzkum:

```text
Odpovedi pouzijeme pro zlepseni onboardingu. Nepotrebujeme vase osobni udaje; kontakt na sebe nechte jen pokud chcete, abychom se ozvali s doplnujicim dotazem.
```

U identifikovaneho pruzkumu bud jeste konkretnejsi:

```text
Odpoved uvidi produktovy tym a clovek odpovedny za vas ucet. Pouzijeme ji pro opravu konkretniho onboardingoveho kroku, ne pro reklamni profilovani.
```

### 4. Vyhodnocuj rucne driv, nez automatizujes

Prvnich 20 az 50 odpovedi necti pres dashboard. Precti je. Rucne. Pomalu. S oznacenim temat.

Jednoducha taxonomie:

- `nejasny-start`: clovek nevi, co udelat po registraci,
- `chybi-data`: hodnota nevznikla, protoze chybi import nebo integrace,
- `duvera`: otazky na hosting, data, smlouvy, pristupy,
- `cena`: nejistota kolem planu, limitu nebo fakturace,
- `vykon`: pomalost, chyby, prerusene toky,
- `feature-gap`: chybejici schopnost, ktera blokuje hodnotu,
- `nice-to-have`: napad, ktery zni dobre, ale neblokuje vysledek.

Po vyhodnoceni si napis rozhodovaci zapis:

```text
Pruzkum:
[nazev / datum]

Koho jsme oslovili:
[segment + pocet]

Nejcastejsi tema:
[tema + priklad odpovedi bez osobnich udaju]

Co opravime:
[jedna konkretni vec]

Co zatim ignorujeme:
[duvod]

Co doplnime do dokumentace nebo landing page:
[URL / plan]

Kdy se k tomu vratime:
[datum]
```

Kdyz vysledek neskonci praci, dokumentaci nebo rozhodnutim, pruzkum byl jen ritual. Hezky ritual, ale porad ritual.

### 5. Pruzkum neposilej kazdemu porad

Survey fatigue existuje i bez slozite terminologie. Kdyz se ptas po kazdem kliknuti, lide prestanou odpovidat nebo zacnou klikat cokoli, aby meli klid. Pruzkum ma mit spravny moment.

Vhodne momenty:

- po dokonceni prvni hodnoty,
- po selhani duleziteho toku,
- po 30 dnech placeneho pouzivani,
- pri ukonceni trialu,
- po vyresenem support ticketu,
- po vydani zmeny, ktera se tyka konkretni skupiny.

Nevhodne momenty:

- hned po registraci, kdy clovek jeste nic nevi,
- uprostred kriticke prace,
- po kazdem drobnem eventu,
- v mailu, ktery se tvari jako osobni zprava, ale je to automat,
- s otazkami, na ktere uz odpoved znas z produktu.

Pravidlo frekvence:

```text
Jeden uzivatel nedostane vic nez jeden produktovy pruzkum za 30 dni, pokud sam neotevre support nebo nepozada o follow-up.
```

Tohle pravidlo chrani vztah i kvalitu dat. Mene odpovedi muze byt lepsi, kdyz jsou od lidi, kteri maji kontext a nejsou otraveny.

### 6. 45min postup

Prvnich 5 minut: napis jednu vetu, proc pruzkum existuje. Jestli veta neobsahuje rozhodnuti, ktere chces udelat, pruzkum neposilej.

Minuty 5 az 12: vyber spravny segment a moment. Napriklad "tymy, ktere zalozily ucet, ale do 48 hodin nedokoncily import".

Minuty 12 az 22: napis maximalne ctyri otazky. U kazde si poznamenej, co se podle odpovedi muze zmenit.

Minuty 22 az 30: pridej datovy mikrotext. Rekni, kdo odpovedi cte, k cemu slouzi, zda je kontakt volitelny a jak se resi follow-up.

Minuty 30 az 38: priprav jednoduchou tabulku pro vyhodnoceni: respondent nebo anonymni ID, segment, tema, citace bez citlivych dat, navrzeny krok.

Minuty 38 az 45: nastav rozhodovaci termin. Napriklad "ctvrtek 14:00, vybereme jednu opravu onboardingu a jednu zmenu dokumentace". Bez terminu se pruzkum snadno zmeni v slozku "nekdy".

### Checklist: pruzkum bez zbytecneho profilovani

- [ ] Pruzkum ma jeden duvod a jedno rozhodnuti, ktere ma zlepsit.
- [ ] Oslovuji jen segment, ktery muze dat relevantni odpoved.
- [ ] Otazky se ptaji na konkretni zkusenost, ne na obecne dojmy.
- [ ] Kazda otazka ma vlastnika rozhodnuti.
- [ ] Kontakt je volitelny, pokud neni nutny pro supportni follow-up.
- [ ] Odpovedi nejsou automaticky spojene s celym CRM profilem.
- [ ] Nesbiram IP, presnou lokaci, reklamni identifikatory ani historii kampani bez jasneho duvodu.
- [ ] Mikrotext rika, kdo odpovedi cte a jak se pouziji.
- [ ] Vyhodnoceni ma tematicke stitky a jednu konkretni dalsi akci.
- [ ] Jeden uzivatel nedostava produktovy pruzkum casteji, nez dava smysl.
- [ ] Po vyhodnoceni vznikne oprava, dokumentacni zmena, obchodni poznatek nebo vedome rozhodnuti nic nemenit.

---

## Win-loss rozhovory bez CRM vyslechu za 45 minut

Win-loss rozhovor je kratky rozhovor s clovekem, ktery nedavno koupil, nekoupil, odlozil rozhodnuti nebo odesel. Cilem neni dokazat, ze prodej udelal vsechno spravne. Cilem je zjistit, co se v realnem rozhodovani stalo: jaky problem zakaznik resil, s cim produkt porovnaval, kde vznikla duvera, kde se rozpadla a co bylo pro dalsi krok rozhodujici.

Privacy-first verze ma jedno pravidlo: sbirej jen poznatky, ktere meni produkt, nabidku nebo prodejni proces. Nepotrebujes nahravat kazdy povzdech, tahat osobni detaily do CRM ani delat z odmitnuteho leadu trvaly profil. Casto staci 20 minut, dobre otazky, anonymizovany zapis a jasna kategorie rozhodnuti.

### Kdy win-loss delat

Nedelej rozhovory nahodne. Vyber momenty, kde je cerstva pamet a jasny obchodni dopad:

- vyhrany zakaznik po prvnim tydnu pouzivani,
- ztraceny lead do 14 dni od rozhodnuti,
- pilot, ktery skoncil bez pokracovani,
- zakaznik, ktery zrusil ucet nebo neprodlouzil,
- prilezitost, ktera se zasekla bez odpovedi.

U maleho SaaS staci kazdy tyden 2 az 3 rozhovory. Pokud nemas objem, zapisuj aspon strukturovane duvody z emailu a callu. Dulezite je nemichat dohromady dojmy obchodnika, odpoved zakaznika a vlastni interpretaci. To jsou tri ruzne veci.

### Segmentace bez profilovani

Pred rozhovorem si nastav jen par pracovnich kategorii:

| Pole | Priklad | Proc staci |
| --- | --- | --- |
| Stav | win, loss, no decision, churn | Vis, jaky typ rozhodnuti analyzujes. |
| Segment | mala agentura, B2B SaaS, konzultant | Spojis vzory podle use-casu, ne podle osobniho profilu. |
| Hlavni use-case | follow-up leadu, reporting, onboarding | Pomaha zlepsit produkt a copy. |
| Velikost dopadu | nizky, stredni, vysoky | Oddeli kosmeticke namitky od obchodnich blokacu. |
| Duvod rozhodnuti | cena, duvera, cas, funkcni mezera, priorita | Vytvori prakticke kose pro dalsi praci. |

Co do zapisu nepatri, pokud to nema jasny ucel:

- osobni poznamky o cloveku,
- soukrome detaily z firmy,
- kompletni interni citace bez souhlasu,
- nahravka "pro jistotu",
- domnenky typu "nemel rozpocet" bez toho, aby to zaznelo.

**Codyho komentar:** Nejvetsi hodnota win-loss rozhovoru neni veta "byli jsme moc drazi". Hodnota je veta "nevedeli jsme, jestli nam to projde pres interni security kontrolu do konce kvartalu". Prvni zni jako sleva. Druha ukazuje chybejici trust page, DPA balicek nebo lepsi pilotni nabidku.

### Scenar na 20 minut

Drz rozhovor kratky a vecny. Neobhajuj produkt. Neopravuj cloveka uprostred odpovedi. Pokud neco boli, zapis to.

1. "Co se u vas delo ve chvili, kdy jste zacali resit tento problem?"
2. "Co jste zkouseli pred nami nebo vedle nas?"
3. "Ktery moment vas posunul bliz k rozhodnuti?"
4. "Kde jste mel nejvetsi nejistotu?"
5. "Co vam chybelo, abyste rozhodl rychleji?"
6. "Kdo dalsi do rozhodnuti vstupoval?"
7. "Kdybyste mel nasi nabidku vysvetlit kolegovi, jak byste ji popsal?"
8. "Co bychom meli zmenit, aby dalsi podobny zakaznik nemusel premyslet tak dlouho?"

U ztracenych obchodu pridej jednu citlivou otazku:

> "Vybrali jste jinou cestu, odlozili rozhodnuti, nebo problem prestal byt priorita?"

Tohle je dulezite. "Prohrali jsme s konkurenci" je jina lekce nez "zakaznik nerozhodl nic". U no-decision problemu casto nepomuze vic funkci. Pomuze mensi pilot, jasnejsi dalsi krok nebo lepsi dukaz hodnoty.

### Zapis, ktery jde pouzit

Po rozhovoru udelej zapis do jedne karty:

```text
Datum:
Stav: win / loss / no decision / churn
Segment:
Use-case:
Hlavni spoustec:
Porovnavane alternativy:
Nejvetsi nejistota:
Rozhodujici dukaz nebo blokace:
Presna veta zakaznika:
Codyho interpretace:
Dalsi akce:
Retence zapisu do:
```

Presnou vetu zakaznika pouzij interne pro zlepseni jazyka. Pokud ji chces zverejnit jako referenci, potrebujes samostatne potvrzeni presneho zneni. Anonymizovana lekce typu "tri firmy z peti se ptaly na EU hosting pred cenou" je obvykle uzitecnejsi nez honba za logem.

### Jak z toho udelat rozhodnuti

Kazdy patek projdi poslednich 5 az 10 karet a hledej opakujici se vzory. Nevyhodnocuj rozhovor po jednom jako referendum o cele firme.

| Vzor | Pravdepodobny zasah |
| --- | --- |
| Lide nerozumi prvni vete nabidky | Prepsat hero, demo intro a outbound email. |
| Casto se ptaji na data a hosting | Pridat trust page, DPA odpovedi a architektonicky prehled. |
| Vyhrava konkurence kvuli integraci | Overit, zda je integrace skutecny deal-breaker, ne jen pohodlna vymluva. |
| Obchody konci na "ted ne" | Zmensit pilot, zkratit time-to-value, pridat konkretni trigger k navratu. |
| Zakaznici odchazi po aktivaci | Projit onboarding a prvni hodnotovy moment, ne jen posilat slevu. |

Jedna iterace ma skoncit jednou zmenou: prepsany use-case, nova cast trust page, upraveny pilot, odstranene pole ve formulari, zjednodusene demo nebo novy onboardingovy krok. Pokud skonci jen "musime byt lepsi v komunikaci", je to krasne mlhave a prakticky k nicemu.

### 45min postup

- 0-5 min: Vyber jeden typ rozhodnuti, treba ztracene piloty z poslednich 30 dni.
- 5-10 min: Vytvor seznam 3 az 5 lidi a napis jim kratkou zadost o 20min rozhovor.
- 10-15 min: Priprav scenar a kartu zapisu.
- 15-35 min: Udelej prvni rozhovor nebo zpracuj existujici email/call poznamky.
- 35-42 min: Oznac hlavni duvod, nejistotu a dalsi akci.
- 42-45 min: Rozhodni jednu malou zmenu, kterou udelas tento tyden.

### Checklist: win-loss bez datoveho balastu

- [ ] Rozhovor ma jasny obchodni nebo produktovy ucel.
- [ ] Oslovuji jen lidi, u kterych je rozhodnuti cerstve.
- [ ] Nesbiram osobni detaily, ktere nepomahaji rozhodnuti.
- [ ] Oddeluji presna slova zakaznika od vlastni interpretace.
- [ ] Ztracene obchody rozlisuji na konkurenci, odklad a no-decision.
- [ ] Zapis ma retenci a vlastnika.
- [ ] Verejne citace pouzivam jen se samostatnym potvrzenim.
- [ ] Kazdy tyden hledam vzory napric vice rozhovory.
- [ ] Vysledek konci jednou konkretni zmenou v produktu, nabidce nebo procesu.
- [ ] Privacy-first namitky zapisuji jako obchodni signal, ne jako pravni otravu.

---

## SLA a support limity bez prehnanych slibu za 45 minut

SLA neni kouzelna veta "jsme tu pro vas 24/7". Je to smlouva o ocekavani: kdy reagujete, co povazujete za kriticky problem, jake kanaly supportu existuji, co je mimo rozsah a jak se komunikuje vypadek. Pro maly SaaS je nejvetsi chyba slibit enterprise provoz jen proto, aby obchodni email vypadal silneji. Zakaznik si nekupuje poeticky zavazek. Kupuje predvidatelnost.

Privacy-first SLA ma jeste jednu hranici: support nemuze pri kazdem problemu chtit kompletni export, admin pristup nebo screenshoty plne osobnich dat. Rychla pomoc nesmi znamenat, ze se z podpory stane nehlidany datovy sklad.

**Codyho komentar:** SLA je jako cenik pro provozni duveru. Kdyz je mlhave, kazdy si do nej promita vlastni prani. A prani maji v incidentu velmi spatnou dostupnost.

### 1. Rozdel problemy podle dopadu

Nezacinej casem reakce. Zacni dopadem na zakaznika. Jinak skoncis u situace, kdy kosmeticka chyba v nastaveni dostane stejnou prioritu jako nefunkcni prihlaseni.

| Priorita | Dopad | Priklad | Reakce |
| --- | --- | --- | --- |
| P1 | Zakaznik nemuze pouzivat hlavni produktovy tok nebo je podezreni na dopad na data. | Aplikace nejde, prihlaseni nejde, export ukazuje chybu u vice uctu. | Incident proces, rychly prvni update, jasny owner. |
| P2 | Dulezita funkce je degradovana, ale existuje workaround. | Emailove notifikace maji zpozdeni, import ceka ve fronte. | Prioritni support, dalsi update podle dopadu. |
| P3 | Problem omezuje cast pouziti, ale neblokuje hlavni praci. | Nejasna hlaska, chyba v jednom filtru, drobna nekonzistence. | Standardni support fronta. |
| P4 | Dotaz, navrh nebo kosmetika. | Prani noveho exportu, uprava textu, napad do roadmapy. | Zapis, odpoved, pripadne produktovy backlog. |

U kazde priority si napis i proti-priklady. Napriklad "neumim najit nastaveni" neni automaticky P1, pokud produkt bezi a problem je edukacni. Naopak "formular obcas neodesle lead" muze byt P1 nebo P2 podle toho, zda se ztraci obchodni data.

### 2. Cas reakce neni cas opravy

Zakaznici casto slysi "odpovime do 2 hodin" jako "opravime do 2 hodin". Pokud to tak nemyslis, napis to jasne.

Rozlis:

- prvni reakci: potvrzeni, ze problem vidis a kdo ho vlastni,
- dalsi update: kdy prijde nova informace,
- mitigaci: omezeni dopadu nebo workaround,
- opravu: skutecne odstraneni priciny,
- postmortem: pozdejsi vysvetleni a preventivni opatreni.

Priklad jednoducheho SLA textu:

```text
U P1 incidentu potvrzujeme prijem co nejrychleji v pracovni dobe nebo podle
dohodnute pohotovosti. Prvni reakce neznamena garantovanou opravu; znamena,
ze incident ma vlastnika, posuzujeme dopad a posleme dalsi update v urcenem case.
```

Tohle je mnohem poctivejsi nez slib "vyresime ihned". Nektere veci nejdou vyresit ihned. Jdou ale ihned vlastnit.

### 3. Definuj support kanaly

Kdyz ma zakaznik problem, nema hadat, jestli psat na osobni email, Telegram, obchodnikovi, supportu nebo do komentare pod changelog. Kanaly urcuji i datovou stopu.

| Kanal | Kdy ho pouzit | Datove pravidlo |
| --- | --- | --- |
| Support email nebo portal | Bezny support, P2-P4. | Neposilat hesla, tokeny ani zbytecne exporty. |
| Incident kontakt | P1 nebo podezreni na data/security dopad. | Minimalni fakta, citlive prilohy jen domluvenym kanalem. |
| Obchodni kontakt | Cena, smlouva, rozsireni pilotu. | Neprijimat technicke exporty mimo support tok. |
| Status page | Obecna dostupnost a provozni updates. | Bez osobnich dat a bez citlivych internich detailu. |

Do SLA pridej vetu:

```text
Pro rychle reseni prosim pouzijte support kanal a neposilejte produkcni exporty,
hesla, API klice ani citlive screenshoty, pokud si je vyzadane nedomluvime.
```

Zni to drobne. Ale prave tahle veta muze zabranit tomu, aby nekdo v panice poslal do supportu kompletni databazovy export.

### 4. Co je mimo rozsah

Mimo rozsah neni nepratelska cast dokumentu. Je to prevence spatnych ocekavani.

Typicky mimo standardni support:

- vyvoj zakazkovych funkci,
- opravy dat poskozenych mimo produkt,
- analyza cizich systemu bez dohodnuteho rozsahu,
- migrace historickych dat bez samostatne domluvy,
- pravni, danove nebo bezpecnostni poradenstvi mimo produktovy kontext,
- nonstop pohotovost, pokud neni soucasti planu nebo smlouvy.

Lepsi formulace nez suche "neni podporovano":

```text
Tyto pozadavky neresime ve standardnim supportu. Pokud jsou pro vas dulezite,
muzeme je vyhodnotit jako samostatny pilot, Business pozadavek nebo partnerskou
implementaci s vlastnim rozsahem a datovymi pravidly.
```

Takhle nezaviras dvere. Jen nedovolujes, aby se support zmenil v bezednou konzultacni sluzbu.

### 5. SLA podle planu bez privacy upsellu

Je normalni, ze vyssi plan ma rychlejsi podporu, dedikovane kanaly nebo lepsi provozni zavazky. Neni normalni, aby zakladni kontrola nad daty byla luxusni doplnek.

Ferove rozdeleni:

| Oblast | Start | Team | Business |
| --- | --- | --- | --- |
| Bezny support | email, standardni fronta | rychlejsi priorita | dedikovany kontakt nebo kanal |
| Incidenty | status page a support | cilene updates pro adminy | domluveny incident proces |
| Export dat | dostupny zakladni export | sirsi exporty a historie | individualni exportni proces |
| Security/DPA | zakladni trust page | DPA proces | rozsahlejsi dotazniky a review |
| Pohotovost | typicky ne | podle dohody | smluvne definovana |

Privacy-first zaklad jako export, mazani, vysvetleni zpracovani dat a rozumna incident komunikace patri do produktu. Vyssi plan muze platit za slozitejsi provozni obsluhu, ne za pravo nebyt uvaznen.

### 6. 45min postup

```text
00-07 min: Sepis hlavni support situace.
Vypadek, chyba, dotaz, security obava, billing, export, feature request.

07-15 min: Rozdel priority P1-P4.
Podle dopadu na hlavni tok, data, platby a praci zakaznika.

15-23 min: Napis rozdil mezi reakci, mitigaci a opravou.
Zakaznik musi vedet, co presne slibujete.

23-31 min: Definuj kanaly.
Support, incident, obchod, status page. Ke kazdemu datove pravidlo.

31-38 min: Sepis mimo rozsah.
Zakazkove prace, migrace, pravni poradenstvi, pohotovost mimo plan.

38-45 min: Zkontroluj cenik a trust page.
SLA sliby nesmi odporovat realnemu provozu, incident runbooku ani privacy dokumentum.
```

### Checklist: SLA a support limity

- [ ] Priority jsou definovane podle dopadu, ne podle hlasitosti pozadavku.
- [ ] P1/P2/P3/P4 maji priklady i proti-priklady.
- [ ] Je jasny rozdil mezi prvni reakci, mitigaci, opravou a postmortem.
- [ ] Support kanaly jsou popsane a zakaznik vi, kam psat.
- [ ] Support pravidla rikaji, jaka data neposilat.
- [ ] Citlive prilohy, exporty a pristupy maji samostatny domluveny tok.
- [ ] Mimo rozsah je napsany vecne a obchodne pouzitelne.
- [ ] Vyssi plan muze mit lepsi obsluhu, ale zakladni kontrola nad daty neni upsell.
- [ ] SLA odpovida realne kapacite tymu.
- [ ] SLA, status page, incident runbook, cenik a trust page si neodporuji.
- [ ] Po kazdem vetsim incidentu se zkontroluje, zda SLA odpovidalo realite.

---

## Churn a odchod zakaznika bez pomsty za 45 minut

Odchod zakaznika neni osobni urazka produktu. Je to signal. Nekdy produkt nedodal hodnotu, nekdy se zmenil rozpocet, nekdy zakaznik vyrostl jinam a nekdy byl spatne kvalifikovany uz na zacatku. Maly SaaS tym z toho potrebuje dostat pouceni, ale nesmi pri tom z odchodu udelat temny tunel, ve kterem se zakaznik musi proklikat pres tri emoce a jednu skrytou slevu.

Privacy-first odchod znamena tri veci:

- zakaznik vi, co se stane s pristupem, daty a fakturaci,
- zruseni je stejne srozumitelne jako aktivace,
- zpetna vazba se sbira dobrovolne a v minimalnim rozsahu.

**Codyho komentar:** Produkt, ktery umi slusne pustit zakaznika ven, pusobi dospeleji nez produkt, ktery se ho drzi za kotnik. A ano, nektere retention playbooky by si zaslouzily dat do sklepa vedle faxu.

### 1. Rozlis churn podle priciny, ne podle emoce

Prvni chyba je hazet vsechny odchody do jedne kolonky "churn". Tim ztratis informaci, ktera by mohla zmenit produkt, onboarding nebo prodej.

Pouzij jednoduchou mapu:

| Typ odchodu | Co to typicky znamena | Co z toho plyne |
| --- | --- | --- |
| Neaktivovany trial | Zakaznik nedosel k prvni hodnote. | Zlepsit onboarding, demo data, prvni ukol nebo kvalifikaci. |
| Aktivni, ale neplatici | Hodnota byla zajimava, ale ne dost jasna pro cenu. | Zkontrolovat pricing, balicky a komunikaci vysledku. |
| Platici bez pouzivani | Produkt koupil nekdo jiny nez uzivatel, nebo chybi navyk. | Zlepsit handoff, role, reminder a spravu tymu. |
| Platici s pouzivanim | Problem je v cene, podpore, chybejici funkci nebo interni zmene. | Udelat kratky rozhovor a zaznam dopadu. |
| Technicky nuceny odchod | Integrace, vykon, bezpecnost nebo compliance blokuje provoz. | Eskalovat jako produktove/provozni riziko. |

Cilem neni udelat z odchodu detektivni roman. Staci vedet, jestli problem vznikl pred hodnotou, po hodnote, pri platbe, pri provozu nebo mimo produkt.

### 2. Exit flow musi nejdriv rict dopad

Kdyz zakaznik klikne na zruseni, nepotrebuje prednasku o tom, jak moc ho budete postradat. Potrebuje vedet:

- kdy skonci pristup,
- co se stane s fakturaci,
- jak exportovat data,
- kdo v tymu bude zmenou ovlivnen,
- zda existuje grace period,
- jak lze ucet obnovit, pokud to vubec jde,
- kdy a jak se budou data mazat podle nastavene retence.

Priklad mikrotextu:

```text
Zrusenim planu zustane ucet aktivni do konce zaplaceneho obdobi. Pred koncem
muzete exportovat data v Nastaveni -> Export. Po ukonceni pristupu budeme data
drzet podle nasi retencni politiky a potom je smazeme nebo anonymizujeme podle
typu dat.
```

Tohle je lepsi nez tlacitko "Jste si jisti?" bez kontextu. Jasny dopad snizuje support dotazy a chrani duveru.

### 3. Zpetnou vazbu sbirej jako pozvanku, ne jako past

Exit dotaznik ma byt kratky a volitelny. Pokud uzivatel nechce odpovedet, musi byt schopny odejit bez pocitu, ze ho produkt drzi jako rukojmi.

Minimalni exit otazky:

```text
Co je hlavni duvod odchodu?
[ ] Produkt jsme nepouzivali
[ ] Nevidime dost hodnoty za cenu
[ ] Chybi nam konkretni funkce
[ ] Presli jsme na jine reseni
[ ] Interni zmena nebo rozpocet
[ ] Technicky/provozni problem
[ ] Jiny duvod

Chcete doplnit jednu vetu?
[volitelne textove pole]
```

Neptej se hned na deset detailu, roli, velikost firmy, obrat a konkurenci. Pokud mas validni duvod pozadat o rozhovor, udelej to az po zruseni a oddelene:

```text
Chcete nam dat 15 minut k pochopeni odchodu? Pomuze nam opravit produkt, ale
zruseni na tom nezavisi.
```

### 4. Retencni nabidka nesmi byt manipulace

Sleva muze byt legitimni, kdyz resi skutecny problem. Nema byt tajna cena pro lidi, kteri najdou zruseni. To uci zakazniky, ze cenik neni pravda.

Ferove retention moznosti:

| Signal | Rozumna reakce | Co nedelat |
| --- | --- | --- |
| Produkt se nepouziva | Nabidnout pauzu, onboarding nebo zmenseni planu. | Tvrdit, ze odchod znici data bez jasneho vysvetleni. |
| Cena je problem | Ukazat nizsi plan nebo rocni platbu, pokud dava smysl. | Schovat slevu az na posledni obrazovku jako tajny trik. |
| Chybi funkce | Nabidnout workaround nebo roadmap signal bez slibu. | Slibit termin, ktery tym nedokaze dodat. |
| Technicky problem | Otevrit support nebo incident follow-up. | Presmerovat cloveka do obecneho help centra bez kontextu. |
| Interni zmena | Nabidnout export, pauzu nebo ukonceni bez dramatu. | Posilat agresivni sekvenci emailu po zruseni. |

Retention neni boj se zakaznikem. Je to pokus najit spravedlivy dalsi krok. Kdyz spravedlivy dalsi krok neexistuje, nech ho odejit ciste.

### 5. Interni churn karta pro rozhodnuti

Kazdy odchod neni duvod k panice. Ale opakovany vzor je duvod k praci. Udrzuj jednoduchou churn kartu:

```text
Zakaznik / segment:
Plan:
Stav pred odchodem: trial / aktivni / neaktivni / past_due / enterprise
Hlavni duvod:
Posledni aktivacni milnik:
Posledni support kontakt:
Dotcene funkce:
Byl nabidnut export: ano/ne/nerelevantni
Byla nabidnuta rozumna alternativa: ano/ne
Produktovy signal:
Navrhovana akce:
Vlastnik:
```

Jednou tydne projdi karty za posledni obdobi a hledej vzory:

- odchody pred aktivaci,
- casty problem s jednou integraci,
- nejasna cena pro konkretni segment,
- chybny handoff z obchodu,
- support slib, ktery produkt realne neplni,
- opakovane dotazy na export nebo mazani dat.

Rozhodnuti ma byt konkretni. Ne "zlepsit retenci", ale "zkratit prvni onboardingovy ukol na 5 minut" nebo "pridat exportni vysvetleni do cancellation flow".

### 6. 45min postup

```text
00-06 min: Sepis typy odchodu.
Trial bez aktivace, aktivni trial, platici neaktivni, platici aktivni, technicky nuceny odchod.

06-14 min: Napis dopad zruseni.
Pristup, fakturace, export, tymovi clenove, grace period, mazani a obnova.

14-21 min: Navrhni exit dotaznik.
Jedna hlavni otazka, volitelna veta, zadne povinne profilovani.

21-29 min: Vytvor ferove retention reakce.
Pauza, nizsi plan, onboarding, support follow-up, export. Bez skrytych triku.

29-37 min: Zaloz churn kartu.
Segment, stav, duvod, posledni milnik, support kontakt, produktovy signal, vlastnik.

37-45 min: Projdi poslednich 5 odchodu nebo hypotetickych scenaru.
Ke kazdemu napis jednu produktovou akci, jednu support akci nebo "bez akce".
```

### Checklist: churn bez pomsty

- [ ] Zakaznik pred zrusenim vidi dopad na pristup, fakturaci a data.
- [ ] Export dat je dostupny nebo jasne vysvetleny pred ukoncenim pristupu.
- [ ] Exit dotaznik je volitelny a kratky.
- [ ] Zruseni nezavisi na vyplneni dotazniku ani rozhovoru.
- [ ] Retencni nabidka je ferova a odpovida skutecnemu problemu.
- [ ] Skryte slevy a falesna urgentnost nejsou soucast flow.
- [ ] Support dostane kontext bez zbytecnych osobnich dat.
- [ ] Churn karta rozlisuje stav zakaznika a posledni aktivacni milnik.
- [ ] Kazdy tyden se vyhodnocuji vzory, ne jen jednotlive emoce.
- [ ] Kazdy opakovany vzor konci rozhodnutim: produkt, onboarding, pricing, support nebo kvalifikace.
- [ ] Privacy dokumenty, retencni politika a exit flow si neodporuji.

---

## API klice a tajemstvi bez lepicich papiru za 45 minut

API klice, tokeny, webhook secrets, databazova hesla, signing keys a recovery kody jsou male textove retezce s velkym dopadem. U maleho SaaS tymu casto zacnou nevinne: jeden token v `.env`, jeden klic v CI, jeden webhook secret v dokumentaci, jeden sdileny login do podpory. Pak prijde prvni externi integrace, druhy prostredi, treti dodavatel a najednou nikdo nevi, ktery klic ma jaky ucel, kdo ho muze cist a co se stane pri jeho uniku.

Privacy-first provoz neznamena jen chranit osobni data v databazi. Znamena chranit i pristupove prostredky, ktere k tem datum vedou. OWASP Secrets Management Cheat Sheet doporucuje centralizovat a standardizovat spravu tajemstvi, resit pristupova prava, auditing, rotaci, revokaci a cely zivotni cyklus tajemstvi: https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html. OWASP API Security Top 10 zase pripomina, ze API rizika casto vznikaji kolem autentizace, autorizace a spatne chranenych endpointu: https://owasp.org/API-Security/editions/2023/en/0x11-t10/.

**Codyho komentar:** Tajemstvi v repozitari je jako klic pod rohozkou, jen s tim rozdilem, ze rohozku indexuji roboti a nekdo ma notifikace. Pohodlne? Ano. Moudre? Ani omylem.

### 1. Udelej inventar tajemstvi

Nez zacnes kupovat vault a kreslit architekturu, napis obycejnou tabulku. Cilem neni dokonalost. Cilem je prestat mit tajemstvi, o kterych nikdo nevi.

| Tajemstvi | Ucel | Prostredi | Kde je ulozene | Kdo ma pristup | Rotace | Plan pri uniku |
| --- | --- | --- | --- | --- | --- | --- |
| Databazove heslo | pripojeni aplikace k DB | production | secrets manager / hosting | aplikace, 2 admini | pri incidentu nebo periodicky | vytvorit nove, deploy, revokovat stare |
| Email API key | transakcni emaily | production | CI/runtime secret | aplikace, provoz | pri zmene dodavatele nebo incidentu | zrusit klic, vytvorit novy, overit odesilani |
| Webhook secret | overeni udalosti z plateb | production | runtime secret | aplikace | pri podezreni na unik | rotovat u dodavatele i v aplikaci |
| Admin recovery key | nouzovy pristup | break-glass | oddelene uloziste | 1-2 povereni lide | po pouziti | zapsat pouziti, vymenit |

Minimalni typy, ktere hledej:

- `.env` soubory,
- CI/CD secrets,
- hostingove promene,
- databazova hesla,
- API klice dodavatelu,
- webhook signing secrets,
- OAuth client secrets,
- SSH klice,
- TLS certifikaty a private keys,
- recovery kody pro admin ucty,
- sdilene login udaje k dodavatelum.

U kazde polozky si poloz dve neprijemne otazky:

- Kdyby unikla dnes, poznali bychom to?
- Umime ji vymenit bez paniky a bez celodenni odstavky?

Pokud odpoved zni ne, mas dobry prvni ukol.

### 2. Oddel prostredi a prava

Nejbezpecnejsi tajemstvi je to, ktere nepotrebuje lidske oko. Druhe nejlepsi je to, ktere vidi jen clovek s realnym duvodem. Nejhorsi je "vsichni vyvojari maji vsechno, protoze je nas malo". Presne male tymy potrebuji jednoducha pravidla, protoze u nich jeden omyl rychle zasahne cely produkt.

Zakladni pravidla:

- Production secrets nejsou v lokalnim vyvoji.
- Staging ma vlastni klice, ne kopii produkce.
- CI ma jen tajemstvi potrebna pro konkretni pipeline.
- Vyvojari nemaji trvaly pristup k produkcnim datum ani klicum bez duvodu.
- Sdilene osobni ucty u dodavatelu nahrazuje rolemi a individualnim pristupem.
- Break-glass pristup existuje, ale jeho pouziti se zapisuje a po pouziti kontroluje.

Priklad spatneho vzoru:

```text
Jeden `.env.production` soubor v tymovem chatu, protoze "jen rychle nasadime".
```

Lepsi vzor:

```text
Produkce bere secrets z hostingoveho nebo samostatneho secrets manageru.
Vyvojar vidi jen nazvy promennych a sandbox hodnoty. Pri incidentu existuje
kratky break-glass postup s vlastnikem a zapisem.
```

Tajemstvi nejsou jen technicka konfigurace. Jsou pristupova prava v komprimovane podobe. Chovej se k nim podle toho.

### 3. Rotace bez divadla

Rotace klicu se casto odklada, protoze zni jako velky provozni ukol. U maleho SaaS staci zacit jednoduse: vedet, co se musi vymenit, kde se to meni, jak se overi nova hodnota a kdy lze starou hodnotu zrusit.

Sablona rotace:

```text
Tajemstvi:

Proc rotujeme:
[periodicka rotace / odchod clena tymu / incident / zmena dodavatele]

Kde vytvorit novou hodnotu:

Kde ji nasadit:

Jak overit:

Kdy revokovat starou hodnotu:

Kdo potvrdi hotovo:

Co se zapise do logu:
```

Pro kriticke klice podporuj prekryv:

- vytvor novy klic,
- nasad aplikaci tak, aby ho pouzivala,
- over hlavni tok,
- teprve potom zrus stary klic.

U webhooku a podpisovych klicu si dej pozor na casove okno, kdy system musi prijmout starou i novou hodnotu. Kdyz to dodavatel podporuje, pouzij dual-secret nebo verzi podpisu. Kdyz ne, naplanuj kratke okno a smoke test.

### 4. Klice v kodu a logach: najdi, zrus, pouc se

Tajemstvi se nesmi dostat do repozitare, issue trackeru, chatu, screenshotu ani logu. Kdyz se to stane, nesmaz jen radek a netvar se, ze se cas vratil. Git historie, forky, cache, build logy a notifikace umi byt velmi vytrvale.

Postup pri nalezu:

1. Predpokladej, ze tajemstvi uniklo.
2. Vytvor novou hodnotu.
3. Nasad novou hodnotu.
4. Revokuj starou.
5. Zkontroluj logy pouziti, pokud existuji.
6. Odstran tajemstvi z viditelnych mist, ale nespolhej na to jako na hlavni opravu.
7. Pridej kontrolu, aby se stejny typ uniku neopakoval.

Uzitecne kontroly:

- secret scanning v repozitari,
- pre-commit kontrola pro bezne typy klicu,
- CI kontrola, ktera odmita znamy vzor tajemstvi,
- zakaz logovani celych requestu a hlavicek s tokeny,
- masking citlivych promennych v CI logach,
- kratka dokumentace, kam tajemstvi patri a kam ne.

**Priklad logovaciho pravidla:**

```text
Nikdy nelogujeme Authorization, Cookie, Set-Cookie, API klice, webhook payloady
s osobnimi daty ani cele request body. Pro ladeni pouzivame request ID, typ chyby,
systemovy stav a minimalni technicky kontext.
```

Tohle je maly text, ale muze zachranit hodne vysvetlovani po incidentu.

### 5. API klice pro zakazniky

Pokud SaaS vydava API klice zakaznikum, navrhni je jako produktovou funkci, ne jako radek v databazi. Zakaznik ma vedet, k cemu klic slouzi, kdo ho vytvoril, kdy byl naposledy pouzit a jak ho zrusit.

Minimalni pravidla:

- Klic zobraz jen jednou pri vytvoreni.
- Ukladej jen hash nebo jinou bezpecnou reprezentaci, pokud to architektura dovoluje.
- Klic ma nazev, vlastnika a rozsah prav.
- Podporuj expiraci nebo aspon rucni revokaci.
- Ukaz posledni pouziti bez detailu, ktere by zbytecne profilovaly uzivatele.
- Dovol vytvorit novy klic pred zrusenim stareho.
- Pri zruseni klice jasne rekni dopad na integrace.

Priklad UI mikrocopy:

```text
API klic ukazeme jen jednou. Ulozte ho do sveho secrets manageru.
Klic nepouzivejte v prohlizeci ani ve verejnem repozitari.
```

Zakaznicke API klice patri i do offboardingu. Kdyz zakaznik odchazi, musi byt jasne, zda se klice zrusi hned, po konci obdobi nebo pri smazani workspace. U firemnich uctu mysli i na odchod clena tymu: osobni token by nemel dal zit jako tichy produkcni pristup.

### 6. 45min postup

```text
00-08 min: Najdi tajemstvi.
.env, CI, hosting, dodavatele, webhooky, databaze, SSH, recovery kody.

08-16 min: Vypln inventarni tabulku.
Ucel, prostredi, ulozeni, pristupy, rotace, plan pri uniku.

16-24 min: Oddel produkci od vyvoje.
Oznac produkcni secrets, ktere se nesmi objevit lokalne nebo v chatu.

24-32 min: Vyber tri nejrizikovejsi polozky.
Typicky sdilene admin ucty, produkcni `.env`, neni jasna rotace, token v CI logu.

32-39 min: Napis rotacni postup pro jednu kritickou polozku.
Vytvoreni nove hodnoty, deploy, overeni, revokace stare.

39-45 min: Pridej ochrannou kontrolu.
Secret scanning, masking logu, pravidlo do PR nebo kratky README pro tym.
```

### Checklist: API klice a tajemstvi

- [ ] Existuje inventar hlavnich produkcnich tajemstvi.
- [ ] Kazde tajemstvi ma ucel, prostredi, vlastnika a misto ulozeni.
- [ ] Produkcni secrets nejsou v repozitari, chatu ani lokalnim sdilenem souboru.
- [ ] Staging a development nepouzivaji produkcni klice.
- [ ] CI/CD ma jen minimalni potrebna prava.
- [ ] Lidsky pristup k produkcnim secrets je omezeny a auditovatelny.
- [ ] Kriticke klice maji popsany postup rotace a revokace.
- [ ] Pri nalezu tajemstvi v kodu se klic rotuje, ne jen smaze z diffu.
- [ ] Logy maskuji tokeny, cookies, authorization hlavicky a webhook secrets.
- [ ] Zakaznicke API klice maji nazev, vlastnika, rozsah prav a revokaci.
- [ ] Zakaznik vidi dopad zruseni klice pred potvrzenim.
- [ ] Offboarding clena tymu a zakaznika resi i tokeny a integrace.
- [ ] Break-glass pristup existuje, ale jeho pouziti se zapisuje a po pouziti kontroluje.

---

## Webhooky a integrace bez datoveho prelivu za 60 minut

Webhook vypada jako mala technicka vec: jedna URL, jeden podpis, par JSON poli a hotovo. Ve skutecnosti je to hranice mezi dvema systemy. A hranice je misto, kde se privacy-first produkt bud chova dospele, nebo zacne posilat data do sveta stylem "ono se to nejak zpracuje".

Dobry webhook ma mit stejny respekt jako verejne API: jasny ucel, minimalni payload, autentizaci, ochranu proti opakovani, logovani bez citlivych dat, retry pravidla a vypnuti bez dramatu. OWASP API Security Top 10 2023 pripomina rizika kolem autorizace objektu, autentizace, nadmerneho cerpani zdroju, spatne inventarizace API a nebezpecneho pouzivani cizich API: https://owasp.org/API-Security/editions/2023/en/0x11-t10/. Pro REST rozhrani OWASP doporucuje HTTPS a access control na kazdem ne-verejnem endpointu: https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html.

**Codyho komentar:** Integrace je jako firemni dvere. To, ze se oteviraji automaticky, neznamena, ze maji byt bez zamku, bez cedulky a bez zaznamu, kdo prosvistel dovnitr.

### 1. Zacni kontraktem, ne endpointem

Pred implementaci webhooku vypln maly kontrakt. Pokud ho neumime vyplnit, endpoint jeste nema vzniknout.

```text
Webhook:
Smer: prijimame / posilame
Ucel:
Spousteci udalost:
Prijemce nebo odesilatel:
Data v payloadu:
Obsahuje osobni udaje:
Obsahuje zakaznicka data:
Autentizace a podpis:
Retry pravidla:
Retence logu:
Jak vypnout:
Vlastnik:
```

Rozdil mezi "posilame vse, co mame" a "posilame jen stav objednavky a ID" je rozdil mezi integraci a datovou povodni. Payload ma byt navrzeny podle prace prijemce, ne podle pohodli vyvojare.

Priklad spatneho payloadu:

```json
{
  "event": "lead.created",
  "lead": {
    "email": "zakaznik@example.com",
    "phone": "+420...",
    "message": "Cele zneni zpravy z formulare...",
    "utm": "...",
    "ip": "...",
    "userAgent": "...",
    "internalNotes": "..."
  }
}
```

Lepsi payload pro notifikaci do interniho workflow:

```json
{
  "event": "lead.created",
  "lead_id": "lead_123",
  "source_group": "partner-web",
  "created_at": "2026-08-02T09:15:00Z",
  "next_action": "review_in_crm"
}
```

Kdo potrebuje detail, at si ho nacte z primarniho systemu s vlastnimi pravy. Webhook nema byt tajny export cele databaze v malem kabate.

### 2. Podpis, cas a idempotence

Prijimany webhook musi umet poznat, ze zprava prisla od spravneho odesilatele, nebyla cestou zmenena a nejde o stare opakovane volani.

Prakticke minimum:

- HTTPS bez vyjimek.
- Sdileny secret nebo verejny klic podle schopnosti dodavatele.
- Podpis nad surovym telem requestu, ne nad pozdeji preformatovanym JSONem.
- Timestamp v hlavicce nebo payloadu.
- Kratke tolerancni okno pro replay, typicky minuty, ne dny.
- `event_id` pro idempotentni zpracovani.
- Odmitnuti duplicit bez vedlejsich efektu.

Priklad rozhodnuti:

```text
Webhook prijmeme jen pokud:
- podpis sedi,
- timestamp neni starsi nez 5 minut,
- event_id jsme jeste nezpracovali,
- event patri existujicimu accountu,
- account ma integraci porad zapnutou.
```

Idempotence je nudne slovo pro velmi praktickou vec: kdyz dodavatel posle stejnou udalost trikrat, nevystavis tri faktury, nevytvoris tri ucty a neposles tri emaily. To je mala vec, ktera vypada mala presne do prvniho incidentu.

### 3. Retry pravidla bez laviny

Webhooky selhavaji. Sit si odkasle, prijemce ma deploy, dodavatel posle spicku udalosti, DNS ma spatny den. Proto retry pravidla patri do navrhu, ne az do supportu.

Dobry retry plan:

| Situace | Reakce |
| --- | --- |
| `2xx` | Udalost povazuj za prijatou. |
| `4xx` kvuli validaci | Neopakuj donekonecna, zapis chybu a upozorni vlastnika integrace. |
| `401/403` | Pozastav integraci nebo vyzaduj rotaci secretu. |
| `429` | Respektuj rate limit a pouzij backoff. |
| `5xx` nebo timeout | Opakuj s exponencialnim backoffem a limitem pokusu. |

U odchozich webhooku pridej frontu a dead-letter stav. Kdyz se event nepodari dorucit, nemel by se ztratit potichu ani blokovat cely produkt. V adminu nebo internim nastroji ukaz stav: doruceno, ceka, selhalo, vypnuto.

Privacy-first doplnek: pri chybe neposilej do logu cele telo webhooku. Loguj `event_id`, typ udalosti, cil integrace, stav, cas a technicky duvod. Detail payloadu patri jen do kratkodobeho debug rezimu s omezenym pristupem.

### 4. Integrace musi jit vypnout a uklidit

Kazda integrace potrebuje vypinac. Ne takovy, ktery je schovany v databazi a umi ho pouzit jen clovek s magickou znalosti produkcni konzole. Normalni vypinac.

Pri vypnuti integrace rozhodni:

- Zastavi se jen nove udalosti, nebo i retry fronta?
- Co se stane s uz rozpracovanymi eventy?
- Mazou se tokeny hned, nebo po kratke ochranne lhute?
- Zustanou agregovane provozni statistiky?
- Dostane zakaznik potvrzeni?
- Je potreba informovat dodavatele?

Sablona offboardingu integrace:

```text
Integrace:
Vypnuto kdy:
Vypnul kdo:
Zastaveno:
Zbyvajici fronta:
Tokeny:
Data u dodavatele:
Export pred ukoncenim:
Potvrzeni zakaznikovi:
```

Vendor lock-in casto zacina nevinnym webhookem. Nejdriv posilas malo dat, pak vic, pak dodavatel zacne byt jedine misto, kde vidis historii stavu. Primarni pravda ma zustat u tebe, pokud nejde o vedome a smluvne pokryte rozhodnuti.

### 5. 60min postup

```text
00-08 min: Vyber jednu existujici nebo planovanou integraci.
Idealne takovou, ktera posila leady, platby, support, produktove eventy nebo notifikace.

08-18 min: Vypln webhook kontrakt.
Smer, ucel, data, osobni udaje, prijemce, podpis, retry, retence, vlastnik.

18-28 min: Zmensi payload.
Vyhod pole, ktera prijemce nepotrebuje pro dalsi akci. Nahrad obsah referencnim ID.

28-38 min: Zkontroluj zabezpeceni prijmu.
HTTPS, podpis, timestamp, event_id, idempotence, vazba na account a vypnuta integrace.

38-48 min: Navrhni retry a logovani.
Backoff, limity, dead-letter stav, alert vlastnikovi, log bez celeho payloadu.

48-55 min: Dopln vypnuti a offboarding.
Co se stane s tokeny, frontou, daty u dodavatele a potvrzenim zakaznikovi.

55-60 min: Zapis jednu opravu do fronty prace.
Vyber nejvetsi riziko: chybi podpis, moc dat v payloadu, zadna idempotence, zadny vypinac.
```

### Checklist: webhooky a integrace

- [ ] Kazdy webhook ma napsany ucel, smer, vlastnika a datovy kontrakt.
- [ ] Payload obsahuje jen data potrebna pro dalsi akci.
- [ ] Osobni udaje a obsah zakaznickych zprav se neposilaji, pokud nejsou nutne.
- [ ] Prijem webhooku overuje podpis nebo jinou silnou autentizaci.
- [ ] Timestamp a `event_id` chrani pred replay a duplicitami.
- [ ] Zpracovani webhooku je idempotentni.
- [ ] Endpoint overuje, ze udalost patri spravnemu accountu a zapnute integraci.
- [ ] Retry pravidla maji backoff, limit pokusu a dead-letter stav.
- [ ] Logy neukladaji cele payloady, tokeny ani volne texty.
- [ ] Integrace ma normalni vypinac a popsany offboarding.
- [ ] Tokeny a webhook secrety maji rotaci a revokaci.
- [ ] Primarni pravda zustava ve vlastnim systemu nebo je vyjimka vedome popsana.
- [ ] Dodavatel integrace je zahrnuty ve vendor review, pokud zpracovava osobni nebo zakaznicka data.

---

## Feature flags a postupny rollout bez chaosu za 60 minut

Feature flag je provozni vypinac pro chovani produktu. Spravne pouzity pomaha pustit zmenu male skupine lidi, vypnout problem bez celeho rollbacku a oddelit deploy od okamziku, kdy se funkce opravdu objevi zakaznikum. Spatne pouzity flag je skryta druha aplikace uvnitr aplikace: nikdo nevi, kdo co vidi, testy se mnozi a stary kod zustava v produktu jako technicky dluh s knirkem.

Martin Fowleruv text o feature toggles rozlisuje mimo jine release toggles, experiment toggles, ops toggles a permissioning toggles a zaroven upozornuje, ze ruzne typy prepinacu maji jinou zivotnost a jiny provozni rezim: https://martinfowler.com/articles/feature-toggles.html. Pro maly SaaS je pointa jednoducha: flag neni hracka pro tajne funkce. Je to rozhodnuti, ktere musi mit ucel, vlastnika, test a datum uklidu.

Privacy-first pohled pridava jeste jednu otazku: podle ceho vlastne rozhodujeme, kdo funkci uvidi? Pokud k tomu potrebujeme detailni profilovani, krizove sledovani nebo export uzivatelu do dalsiho nastroje, mozna rollout resi technicke riziko tak, ze vytvari datove riziko. To neni vyhra, to je jen presun problemu do jine kapsy.

**Codyho komentar:** Feature flag je dobry sluha a mizerny sklad. Kdyz pres nej ridis release, parada. Kdyz pres nej roky schovavas nerozhodnost, mas v kodu male muzeum strachu.

### 1. Rozlis typ flagu driv, nez ho pridas

Pred kazdym novym flagem vypln malou kartu:

```text
Flag:
Typ: release / ops / permissioning / experiment
Ucel:
Kdo ho muze prepnout:
Komu se zmena zobrazi:
Jake metriky sledujeme:
Jaky je fallback:
Kdy flag smazeme:
Vlastnik:
```

Rozdil mezi typy je prakticky:

| Typ flagu | Kdy dava smysl | Typicka zivotnost |
| --- | --- | --- |
| Release | Funkce je nasazena, ale jeste ne verejne zapnuta. | Dny az tydny. |
| Ops | Potrebujes rychle vypnout narocnou nebo rizikovou cast systemu. | Dlouhodobe, ale malo pocetne. |
| Permissioning | Funkce patri jen nekterym planum, rolim nebo zakaznikum. | Dlouhodobe jako soucast produktu. |
| Experiment | Overujes variantu sdeleni, toku nebo funkce. | Kratce, s predem danou metrikou. |

Nejvetsi neporadek vznikne, kdyz se release flag potichu zmeni na permissioning flag. Napriklad funkce "nova fakturace" mela byt do tydne pro vsechny, ale po trech mesicich ji ma zapnutych pet zakazniku, tri maji starou verzi a nikdo nevi proc. V tu chvili uz nemas rollout. Mas dve produktove reality.

### 2. Rollout plan pis jako maly runbook

Postupne zapinani ma mit kroky. Ne pocit.

Sablona rollout planu:

```text
Funkce:
Predpokladany dopad:
Rizika:
Skupina 0: interni test
Skupina 1: 1-3 pratelsti zakaznici
Skupina 2: 10-20 % vhodnych accountu
Skupina 3: vsichni vhodni zakaznici
Stop podminky:
Rollback nebo vypnuti:
Komunikace:
Uklid flagu:
```

Stop podminky jsou dulezitejsi nez optimisticky plan. Priklady:

- chybovost endpointu nad domluveny limit,
- narust support dotazu k dane funkci,
- nedoruceni transakcnich emailu,
- spatne namapovana prava,
- dotazy zakazniku na data, ktere jsme neumeli vysvetlit,
- zmena vytvari vic rucni prace, nez slibovala usetrit.

Kdyz se stop podminka naplni, nevymyslej filozofii. Vypni flag, zapis incident nebo regresi, rozhodni dalsi opravu. Feature flag ma snizit cas mezi "neco je spatne" a "zakaznik uz to neciti".

### 3. Segmentace bez zbytecneho profilovani

Rollout casto potrebuje vybrat skupinu uzivatelu. To ale neznamena, ze musis sbirat dalsi osobni data.

Privacy-first varianty vyberu:

- interni accounty,
- konkretni zakaznici, kteri souhlasili s pilotem,
- plan nebo role, ktere uz v produktu existuji,
- nahodny stabilni vyber podle account ID, ne podle osobniho profilu,
- technicka schopnost prostredi, napriklad zapnuta integrace,
- region nebo datovy rezim jen pokud je to produktove a pravne relevantni.

Co je podezrele:

- posilat seznam uzivatelu do externi feature flag sluzby bez kontroly datove cesty,
- rozhodovat podle reklamniho segmentu,
- michat produktove flagy s marketingovym trackingem,
- pouzivat email jako verejny identifikator ve fronte experimentu,
- nechavat podporu rucne prepinat funkce bez auditu.

Prakticky kompromis: pro vetsinu B2B SaaS staci rozhodovat na urovni accountu. Account ma plan, stav pilotu, zemi provozu, zapnute integrace a vlastnika. Jednotlivy clovek nemusi byt profilovany jen proto, aby videl novou tabulku o tyden pozdeji nez kolega.

### 4. Testuj kombinace, ktere muzou bolet

Kazdy flag pridava kombinace. Tri binarni flagy nejsou tri stavy, ale osm kombinaci. Kdyz se k tomu prida role, plan a integrace, mas maly labyrint. Proto netestuj vsechno naslepo. Testuj rizikove pruseciky.

Minimalni test matice:

| Oblast | Co overit |
| --- | --- |
| Vypnuto | Stary tok funguje a neukazuje nove UI napul. |
| Zapnuto | Novy tok funguje pro cilovou skupinu. |
| Prava | Uzivatel bez opravneni funkci nevidi ani pres primou URL. |
| Data | Nova funkce neuklada vic dat, nez bylo popsano. |
| Logy | Logy neobsahuji osobni udaje, tokeny ani cele payloady. |
| Rollback | Vypnuti flagu vrati produkt do pouzitelneho stavu. |

U permissioning flagu pridej test fakturace a planu. U ops flagu pridej test vykonu a degradovaneho rezimu. U experimentu pridej test, ze se varianta nezmeni pri kazdem refreshi, pokud to nema byt soucast navrhu.

### 5. Uklid flagu je soucast definice hotovo

Flag bez data uklidu je bud budouci incident, nebo budouci archeologie. Release flag ma zmizet, jakmile je funkce zapnuta pro vsechny vhodne zakazniky a stara cesta uz neni potreba. Experiment flag ma zmizet, jakmile existuje rozhodnuti. Ops flag muze zustat, ale musi byt popsany a viditelny v provoznim manualu.

Definice hotovo pro release flag:

- funkce je zapnuta pro cilovou skupinu,
- fallback byl pouzit nebo overen,
- support vi, co se zmenilo,
- dokumentace a changelog jsou aktualizovane,
- stara vetev kodu je odstranena,
- flag je smazany z konfigurace,
- metriky a logy neobsahuji docasne debug udaje.

Uklid nenechavej na "nekdy po launchi". Po launchi prijde dalsi launch, potom zakaznicky pozadavek, potom faktury a najednou je z docasneho flagu rodinne stribro. Bez lesku, zato s velkou sentimentalni hodnotou pro nikoho.

### 6. 60min postup

```text
00-08 min: Vyber jednu funkci, ktera je ted za flagem nebo ho bude potrebovat.
Zamer se na funkci s dopadem na data, prava, billing, onboarding nebo integrace.

08-18 min: Vypln kartu flagu.
Typ, ucel, vlastnik, cilova skupina, fallback, metriky a datum uklidu.

18-30 min: Napis rollout plan.
Interni test, prvni zakaznici, sirsi zapnuti, stop podminky, komunikace a vypnuti.

30-40 min: Zkontroluj segmentaci.
Odstran identifikatory, ktere nepotrebujes. Preferuj account-level rozhodnuti.

40-50 min: Navrhni test matici.
Vypnuto, zapnuto, prava, data, logy, rollback. Pridej billing nebo integrace podle funkce.

50-56 min: Naplanuj uklid.
Vytvor konkretni ukol na odstraneni flagu, stareho kodu a docasnych logu.

56-60 min: Zapis rozhodnuti.
Bud flag pridat s runbookem, upravit existujici rollout, nebo stary flag smazat.
```

### Checklist: feature flags a rollout

- [ ] Kazdy flag ma typ, ucel, vlastnika a datum dalsi kontroly.
- [ ] Release flag ma plan odstraneni uz pri vytvoreni.
- [ ] Rollout ma jasne skupiny a stop podminky.
- [ ] Vypnuti flagu je rychlejsi nez rollback cele aplikace.
- [ ] Segmentace nepouziva osobni profilovani, pokud neni nutne.
- [ ] Externi flag sluzba neni misto, kam potichu odteka seznam uzivatelu.
- [ ] Prava se kontroluji na backendu, ne jen skrytim UI.
- [ ] Testy pokryvaji vypnuty stav, zapnuty stav, prava, data a rollback.
- [ ] Logy neobsahuji docasne debug udaje po skonceni rollout faze.
- [ ] Support a obchod vi, kdo funkci vidi a co slibit nesmi.
- [ ] Changelog a dokumentace odpovidaji skutecne zapnutemu stavu.
- [ ] Stare release a experiment flagy se pravidelne mazou.

---

## Health score a QBR bez sledovani lidi za 60 minut

Customer success se v malem SaaS snadno zmeni na tabulku podezreni: kdo se prihlasil, kdo klikl, kdo neklikl, kdo "vypada rizikove". Jenze dobry health score nema byt osobni dohled nad jednotlivymi lidmi. Ma byt provozni signal, jestli zakaznicky ucet dostava hodnotu, kvuli ktere plati.

Privacy-first verze zacina na urovni accountu. Neptas se: "Co delal Jana vcera v 21:47?" Ptas se: "Pouziva firma hlavni hodnotovy tok, ma rozbite integrace, vyresi svoje ukoly a ozve se, kdyz neco drhne?"

QBR, tedy pravidelne zhodnoceni spoluprace, potom neni prezentace s deseti grafy a firemnim ohnostrojem. Je to kratka schuzka, kde zakaznik vidi, co se zlepsilo, co brzdi hodnotu a jake dalsi rozhodnuti dava smysl.

### 1. Definuj zdravi uctu podle vysledku

Nejdriv napis jednu vetu:

```text
Zakaznicky ucet je zdravy, kdyz [cilovy segment] pravidelne dosahuje [hlavni vysledek] bez [kriticky problem].
```

Priklady:

- U support nastroje: "Ucet je zdravy, kdyz tym vyresi vetsinu dotazu v domluvenem SLA a eskalace nejsou blokovane chybejicim kontextem."
- U analytickeho SaaS: "Ucet je zdravy, kdyz produktovy tym pravidelne vidi aktivaci, retenci a hlavni drop-off bez exportu osobnich dat do reklamni platformy."
- U B2B workflow nastroje: "Ucet je zdravy, kdyz kazdy tyden projdou hlavni schvalovaci tok bez rucniho dohledavani v emailech."

Az potom vybirej signaly. Kdyz zacnes tim, co umis snadno merit, skoncis u vanity health score: pocet prihlaseni, pocet kliknuti a barevny status, ktery vypada chytre, ale nikomu nepomuze rozhodnout.

### 2. Pouzij malo signalu, ale dobrych

Zakladni health score muze mit pet oblasti:

| Oblast | Signal | Privacy-first varianta |
| --- | --- | --- |
| Aktivace | Dokoncen hlavni setup | Account-level stav, ne osobni klikaci historie. |
| Pouzivani | Probehl hlavni hodnotovy tok | Souhrn za ucet a obdobi. |
| Kvalita | Chyby, selhani integraci, nedorucene emaily | Technicke eventy bez obsahu zprav. |
| Vztah | Otevrene blokery a support tikety | Kategorie problemu, ne kompletni prepis konverzaci. |
| Obchod | Plan, renewal datum, rozsah vyuziti | Minimalni fakturacni a smluvni udaje. |

Kazdy signal musi mit akci. Pokud nevis, co udelas, kdyz signal zcervena, nedavej ho do score.

Priklad:

- Aktivace nedokoncena 14 dni po startu -> poslat osobni email s jednou konkretni otazkou.
- Integrace pada treti den po sobe -> otevrit technicky incident nebo nabidnout call.
- Hlavni tok se nepouzil 30 dni -> zeptat se, jestli se zmenil proces, vlastnik nebo priorita.
- Support tiket ceka na nas vic nez tri pracovni dny -> eskalovat interne, ne poslat dalsi marketing.

**Codyho komentar:** Health score bez navazujici akce je teplomer prilepeny na zed. Mozna vypada profesionalne, ale nemoc podle nej nevylecis.

### 3. Barvy pomahaji, kdyz nejsou magie

Jednoduchost je vyhoda. Pro maly SaaS staci tri stavy:

- Zelena: ucet dosahuje hlavni hodnoty a nema otevrene blokery.
- Zluta: hodnota je castecna, existuje riziko nebo chybi dalsi krok.
- Cervena: zakaznik pravdepodobne nedostava hodnotu, nebo je blokovany technickym/procesnim problemem.

Ke kazde barve pridej duvod. Ne "health 61". Napis:

```text
Status: zluta
Duvod: hlavni integrace je zapnuta, ale posledni 2 tydny nemela zadny uspesny prenos.
Navrzeny krok: overit s vlastnikem, zda se zmenil zdrojovy system nebo proces.
Vlastnik: customer success
Kontrola: pristi patek
```

Vyhni se automatickemu skore, ktere micha technicke signaly, obchodni dojem a osobni aktivitu do jednoho cisla. Kdyz uz cislo pouzijes, musi byt vysvetlitelne. Zakaznik i interni tym maji rozumet, proc status vznikl.

### 4. QBR priprav jako rozhodovaci schuzku

QBR nema byt galerie vseho, co produkt umi. Cilem je dohodnout dalsi nejdulezitejsi krok.

Minimalni agenda:

```text
1. Co bylo cilem spoluprace?
2. Co se povedlo dolozit?
3. Kde je brzda hodnoty?
4. Co zmenime na procesu, nastaveni nebo rozsahu?
5. Kdo udela dalsi krok a do kdy?
```

Datovy balicek pro QBR:

- 3 hlavni vysledky za account,
- 1 az 3 otevrene blokery,
- technicky stav integraci,
- doporuceni dalsiho kroku,
- seznam slibu z minule schuzky a jejich stav.

Nepotrebujes seznam vsech uzivatelu, casy prihlaseni, klikaci mapy ani screenshoty internich dat. Pokud chces ukazat ukazku, pouzij agregovane vysledky, anonymizovany priklad nebo screenshot pripraveny primo pro prezentaci.

### 5. Zapis po QBR musi byt kratky a pouzitelny

Po schuzce neposilej roman. Posli zapis, podle ktereho se da pracovat:

```text
Predmet: Shrnuti QBR: [zakaznik] / [obdobi]

Diky za dnesni QBR. Domluvili jsme se na techto bodech:

1. Cil na dalsi obdobi:
2. Nase ukoly:
3. Ukoly na strane zakaznika:
4. Rizika nebo blokery:
5. Termin dalsi kontroly:

Datova poznamka:
Pracovali jsme se souhrnnymi account-level signaly a technickym stavem integraci.
Nepotrebujeme doplnovat osobni aktivitu jednotlivych uzivatelu.
```

Interni zapis muze byt o neco bohatsi, ale porad disciplinovany:

- rozhodnuti,
- vlastnik,
- datum kontroly,
- obchodni dopad,
- produktovy poznatek,
- datovy dopad,
- veci, ktere neslibovat.

Prave posledni bod je v B2B SaaS zlato. Na callu se snadno slibi export, integrace, SLA nebo "to urcite pujde". Zapis "neslibovat" chrani produkt, obchod i duveru.

### 6. 60min postup

```text
00-08 min: Vyber jeden typ zakaznika.
Napr. novy zakaznik po onboardingu, account pred renewalem nebo ucet s nizkym vyuzitim.

08-18 min: Napis definici zdraveho uctu.
Jedna veta, ktera popisuje vysledek, ne aktivitu v aplikaci.

18-30 min: Vyber 5 signalu.
Aktivace, hlavni hodnotovy tok, technicka kvalita, vztah/support a obchodni kontext.

30-40 min: Pridej akce ke stavum.
Co se stane pri zelene, zlute a cervene. Kdo je vlastnik a kdy se kontroluje.

40-50 min: Sestav QBR sablonu.
Agenda, datovy balicek, rozhodnuti, dalsi krok a hranice dat.

50-56 min: Zkontroluj privacy dopad.
Odstran osobni aktivitu, kterou nepotrebujes. Preferuj account-level souhrny.

56-60 min: Naplanuj prvni pouziti.
Vyber jeden account, priprav zapis a po QBR uprav sablonu podle reality.
```

### Checklist: health score a QBR

- [ ] Health score popisuje dosahovani hodnoty, ne jen frekvenci prihlaseni.
- [ ] Vetsina signalu je na urovni accountu, ne osoby.
- [ ] Kazdy signal ma jasnou navazujici akci.
- [ ] Barvy nebo cisla jsou vysvetlitelne bez interni magie.
- [ ] Technicke problemy se nemichaji s obchodnim dojmem bez popisu.
- [ ] QBR ma jeden hlavni cil a jeden dalsi krok.
- [ ] Prezentace nepouziva citlive screenshoty ani osobni aktivitu bez duvodu.
- [ ] Zapis po QBR oddeluje nase ukoly, ukoly zakaznika a otevrene blokery.
- [ ] Interni zapis obsahuje i veci, ktere neslibovat.
- [ ] Retence QBR poznamek je rozumna a odpovida jejich ucelu.
- [ ] Zakaznik vi, jake souhrnne signaly se pouzivaji pro zlepsovani spoluprace.
- [ ] Health score se pravidelne cisti od signalu, podle kterych se uz nerozhoduje.

---

## Expansion a upsell bez loveni v osobnich datech za 60 minut

Rostouci SaaS se casem dostane k otazce: jak poznat, ze zakaznik potrebuje vyssi plan, dalsi modul nebo vice mist? Spatna odpoved zni: sleduj kazde kliknuti kazde osoby a prodej ve chvili, kdy algoritmus vyciti sanci. Lepsi odpoved zni: hledej situace, kde zakaznik narazil na prirozeny limit hodnoty a dalsi krok mu opravdu pomuze.

Expansion neni trik, jak z uctu vytrepat dalsi fakturu. Je to rozsireni spoluprace, ktere ma byt obhajitelne i pred zakaznikem: "Tady uz zjevne delate vic prace, mate vic tymu, vice dat nebo vyssi naroky na provoz. Tohle nastaveni vam zmensi riziko nebo usetri rucni obchazeni."

### 1. Rozlis tri typy rozsireni

Ne kazdy upsell je stejny. Kdyz je smichas do jedne kolonky "prodat vic", zacnes tlacit spatnou nabidku ve spatnou chvili.

**Kapacitni expansion** znamena, ze zakaznik prirozene roste:

- vice uzivatelu,
- vice projektu,
- vice zaznamu,
- vice integraci,
- vyssi objem transakci,
- castejsi exporty nebo API volani.

Tady je ferovy signal spotreba sdilene kapacity na urovni accountu. Ne kolikrat se Jana z finance prihlasila v pondeli.

**Hodnotovy expansion** znamena, ze zakaznik chce dosahnout vyssiho vysledku:

- automatizace opakovane rucni prace,
- pokrocile reporty,
- schvalovaci workflow,
- role a prava pro vice tymu,
- auditni logy,
- SLA nebo prioritni podpora.

Tady signal hledej v rozhovorech, support ticketech, QBR a opakovanych workarounds. Kdyz se zakaznik pta potreti na export pro management, mozna nepotrebuje "enterprise plan". Mozna potrebuje lepsi souhrn vysledku.

**Rizikovy expansion** znamena, ze se zmenil provozni kontext:

- produkt pouziva vice oddeleni,
- v datech jsou citlivejsi informace,
- zakaznik potrebuje DPA prilohu nebo security review,
- zacinaji resit audit,
- slibuje se vyssi dostupnost.

Tady je upsell legitimni jen tehdy, kdyz vyssi plan opravdu obsahuje vyssi provozni zavazek, ne jen zamcenou privatnost. Soukromi a zakladni bezpecnost nemaji byt luxusni funkce.

### 2. Najdi expansion signaly, ktere bys dokazal vysvetlit

Dobry expansion signal jde rict zakaznikovi nahlas bez studu. Pokud by veta znela divne, signal nejspis patri do kose.

Pouzitelne signaly:

| Signal | Co muze znamenat | Ferova reakce |
| --- | --- | --- |
| Account dlouhodobe vyuziva 80 % limitu projektu | Tym narazi na kapacitu | Poslat prehled limitu a moznosti navyseni |
| Vice lidi z jedne firmy zada pristup | Produkt se siri do dalsiho tymu | Nabidnout tymovy plan a prava |
| Opakovane support dotazy na reporty | Zakaznik potrebuje lepsi vystup | Ukazat modul/reporting workflow |
| Rucni exporty pribyvaji | Data tecou mimo produkt | Navrhnout automatizaci nebo API |
| QBR ukaze novy cil | Puvodni rozsah uz nestaci | Navrhnout konkretni rozsireni podle cile |

Slabe signaly:

- nekdo otevrel pricing page,
- nekdo se dival na dokumentaci premium funkce,
- uzivatel se prihlasil vecer,
- clovek klikl na tlacitko, ale nic nedokoncil,
- support zprava obsahuje slovo "drahe".

Tyhle signaly mohou byt kontext, ale samy o sobe nejsou duvod ke kampani. Jsou moc blizko osobnimu sledovani a moc daleko od realne hodnoty.

### 3. Vytvor expansion kartu misto dalsiho CRM pole

Pro kazdy potencialni upsell si udelej kratkou kartu. Cilem neni zaznamenat vsechno. Cilem je oddelit realnou prilezitost od obchodniho prani.

```text
Account:
Soucasny plan:
Pozorovany signal:
Proc to muze byt problem:
Navrhovany dalsi krok:
Hodnota pro zakaznika:
Data, ktera jsme pouzili:
Data, ktera nepotrebujeme:
Kdo to overi:
Kdy se ozveme:
Kdy kartu smazeme nebo uzavreme:
```

Priklad:

```text
Account: Studio Nova
Soucasny plan: Team
Pozorovany signal: 9 z 10 aktivnich projektu, 3 zadosti o dalsi role za posledni mesic
Proc to muze byt problem: Projektovi manazeri sdileji jeden pristup a obchazeji prava
Navrhovany dalsi krok: 20min call o tymovem nastaveni a rolich
Hodnota pro zakaznika: Mene sdilenych pristupu, jasnejsi odpovednost, prostor pro dalsi projekty
Data, ktera jsme pouzili: Account-level limity a support pozadavky
Data, ktera nepotrebujeme: Aktivita jednotlivych lidi po strankach
Kdo to overi: Customer success
Kdy se ozveme: Po pondelnim check-inu
Kdy kartu smazeme nebo uzavreme: Do 30 dni bez reakce
```

### 4. Upsell zprava ma byt servisni, ne lovecky email

Dobra expansion zprava nezacina "Mam pro vas skvelou nabidku". Zacina pozorovanim, ktere zakaznik pozna. Pak nabidne volbu.

Sablona:

```text
Predmet: Narazite u [oblast] na limit?

Ahoj [jmeno],

vsimli jsme si na urovni vaseho uctu, ze [konkretni account-level signal].
Muze to byt v poradku, ale casto to znamena, ze tym zacina [konkretni dopad].

Pokud chcete, muzeme projit dve moznosti:

1. upravit stavajici nastaveni, aby vam soucasny plan jeste stacil,
2. nebo ukazat, kdy dava smysl [konkretni rozsireni].

Nepotrebujeme k tomu zadna osobni data navic. Staci 20 minut a priklad vaseho bezneho workflow.

Cody
```

Proc to funguje:

- Zakaznik vidi duvod kontaktu.
- Neni tlacen do vetsiho planu jako jedine spravne odpovedi.
- Prvni moznost je optimalizace soucasneho nastaveni.
- Datova hranice je recena primo.

**Codyho komentar:** Nejlepsi upsell je casto veta "Mozna vam staci jen lepe nastavit soucasny plan." Kratkodobe to muze snizit fakturu. Dlouhodobe to zvysi duveru. A duvera je v B2B SaaS velmi tvrdohlava mena.

### 5. Cenove limity pis jako produktove hranice

Limity v ceniku nemaji byt past. Maji pomoct zakaznikovi vybrat plan, ktery odpovida jeho provozu.

Spatne:

- "Pokrocila bezpecnost jen v Enterprise."
- "Export dat jen ve vyssim planu."
- "Zakladni auditni historie za priplatek."
- "Kontaktujte obchod" bez vysvetleni, proc cena neni verejna.

Lepe:

- "SAML/SSO pro tymy, ktere spravuji pristupy centralne."
- "Rozsirena auditni historie pro regulovane provozy."
- "Vyssi API limity pro automatizovane workflow."
- "Individualni SLA pro produkty, kde vypadek ovlivni zakaznickou podporu nebo prijmy."

Privacy-first pravidlo: zakladni export dat, smazani dat, transparentni sprava souhlasu a primerena bezpecnost nesmi byt rukojmi ceniku. Vyssi plan muze pridat pohodli, automatizaci, garance nebo rozsah. Nemel by pridat teprve zakladni respekt k datu zakaznika.

### 6. 60min postup

```text
00-08 min: Vyber jeden plan nebo segment.
Napr. tymy na hranici kapacity, accounty pred renewalem nebo zakaznici s castymi exporty.

08-18 min: Napis tri typy expansionu.
Kapacitni, hodnotovy a rizikovy. Ke kazdemu dej jeden realny priklad z produktu.

18-30 min: Vyber 5 vysvetlitelnych signalu.
Pouzij hlavne account-level data, support vzory, QBR poznamky a limity produktu.

30-40 min: Vytvor expansion kartu.
Pridej signal, hodnotu, dalsi krok, pouzita data a datum uzavreni.

40-50 min: Napis jednu servisni zpravu.
Zacni pozorovanim, nabidni optimalizaci soucasneho nastaveni i moznost rozsireni.

50-56 min: Zkontroluj cenove hranice.
Najdi, jestli neprodavas privacy nebo zakladni export jako luxusni funkci.

56-60 min: Vyber jeden account.
Nepoustej hromadnou kampan. Over jednu prilezitost lidsky a uprav pravidla podle odpovedi.
```

### Checklist: expansion bez loveni v datech

- [ ] Rozlisuji kapacitni, hodnotovy a rizikovy expansion.
- [ ] Expansion signal jde vysvetlit zakaznikovi nahlas.
- [ ] Nepouzivam osobni klikaci historii jako hlavni prodejni spoustec.
- [ ] Signal je primarne na urovni accountu nebo tymu.
- [ ] Ke kazde prilezitosti existuje konkretni hodnota pro zakaznika.
- [ ] Prvni navrh muze byt i optimalizace soucasneho planu.
- [ ] Zprava zakaznikovi jasne rika, proc se ozvame.
- [ ] Zakaznik neni tlacen do jedine odpovedi.
- [ ] Expansion karta obsahuje i data, ktera nepotrebujeme.
- [ ] Prilezitost ma datum uzavreni nebo smazani.
- [ ] Cenik neprodava zakladni soukromi jako premium funkci.
- [ ] Vyssi plan pridava rozsah, garanci, automatizaci nebo provozni zavazek.

---

## Renewal a prodlouzeni spoluprace bez automaticke pasti za 45 minut

Renewal je okamzik, kdy se ukaze, jestli SaaS opravdu dodava hodnotu. Neni to jen fakturacni udalost. Je to pravidelna kontrola vztahu: co zakaznik pouziva, co se zmenilo, kde vzniklo riziko, co uz nema smysl a jestli je dalsi obdobi ferove pro obe strany.

Spatny renewal se tvari jako ticha administrativa. Zakaznik si vsimne az nove faktury, obchodnik doufa, ze nikdo nic neotevre, a produktovy tym se tvari, ze absence stiznosti je dukaz spokojenosti. Privacy-first renewal dela opak: vcas pripomene kontext, ukaze hodnotu, zkontroluje data a da zakaznikovi jasnou volbu.

### 1. Renewal zacina driv nez posledni tyden

U maleho SaaS staci jednoduchy rytmus:

- 60 dni pred koncem obdobi: zkontroluj stav uctu, vyuziti, otevrene problemy a sliby z minula.
- 45 dni pred koncem: priprav interni renewal kartu.
- 30 dni pred koncem: ozvi se zakaznikovi s hodnotou, riziky a navrhem dalsiho kroku.
- 14 dni pred koncem: uzavri rozhodnuti, uprav rozsah nebo priprav offboarding.
- Po renewalu: zapis, co se zmenilo a co uz neslibovat.

Kdyz je produkt mesicni bez smluvniho cyklu, pouzij stejny princip kvartalne. Ne kazdy zakaznik potrebuje call. Kazdy dulezity zakaznik ale potrebuje, aby nekdo pravidelne vedel, proc zustava.

**Codyho komentar:** "Nikdo si nestezuje" neni signal zdravi. Je to jen ticho. Ticho muze znamenat spokojenost, ale taky to, ze produkt uz davno prestal byt dulezity a jenom prochazi kartou.

### 2. Renewal karta misto paniky v CRM

Pro kazdy vyznamny ucet si priprav jednu kartu. Ma byt kratka, citelna a pouzitelna pro obchod, support i produkt.

```text
Account:
Soucasny plan a obdobi:
Hlavni puvodni cil:
Co se podarilo:
Co se nepodarilo:
Otevrene problemy:
Vyuzite casti produktu:
Nevyuzite casti produktu:
Data a integrace v provozu:
Zmeny v tymu nebo procesu zakaznika:
Navrh dalsiho obdobi:
Co doporucujeme snizit, vypnout nebo uklidit:
Riziko churnu:
Kdo vlastni dalsi krok:
Datum dalsiho kontaktu:
```

Tahle karta neni sbirka osobnich poznamek o jednotlivych lidech. Drz ji na urovni accountu, cilu, workflow a provoznich zavazku. Pokud potrebujes zminit konkretni kontakt, napis jen roli a potrebny dalsi krok.

### 3. Ukaz hodnotu, ale nepocitej ji kouzelnou metrikou

Renewal zprava ma zakaznikovi pripomenout, proc produkt existuje. Neprehanet, nevymyslet ROI z mokreho ubrousku, nevytrhavat metriky z kontextu.

Pouzitelne hodnotove signaly:

| Signal | Jak ho formulovat |
| --- | --- |
| Dokoncene workflow | "Tento kvartal probehlo 48 schvaleni bez rucniho obihani emailu." |
| Snizeni support zateze | "Opakovane dotazy k onboarding dokumentum klesly po zverejneni portalu." |
| Lepsi provozni kontrola | "Mate nastavene role pro 3 tymy a auditni log pro kriticke zmeny." |
| Menci datova stopa | "Behem pilotu jsme nepouzili marketingove pixely a data zustala v dohodnutem provoznim rozsahu." |
| Rychlejsi reakce | "Incidentni kontakt, status page a exportni postup jsou pripravene pred dalsi sezonou." |

Slabe signaly:

- pocet prihlaseni bez vazby na vysledek,
- pocet kliknuti bez jasneho rozhodnuti,
- umele procento "engagementu",
- grafy, ktere vypadaji dobre, ale nikdo podle nich nic neudelal,
- osobni aktivita jednotlivcu jako argument pro fakturu.

Kdyz hodnotu neumime ukazat bez invazivniho sledovani, neni odpoved "sledovat vic". Odpoved je zpresnit, jakou praci ma produkt pro zakaznika delat.

### 4. Nabidni tri ferove varianty

Renewal nemusi vzdy znamenat "stejny plan nebo vyssi". Ferova nabidka casto obsahuje tri varianty:

```text
1. Pokracovat beze zmeny
   Dava smysl, pokud aktualni rozsah odpovida pouziti a nejsou otevrena rizika.

2. Upravit rozsah
   Snizit, rozsirit, vypnout nepouzivany modul, pridat provozni zavazek nebo zmenit pocet mist.

3. Ukoncit nebo prevest
   Pouzit exit plan, export dat, mazani, predani dokumentace a vypnuti integraci.
```

Treti varianta neni prohra. U zakaznika, kteremu produkt uz nesedi, je dustojny odchod lepsi nez dalsi rok nespokojenosti. Casto se vrati pozdeji, kdyz ma znovu spravny problem. A kdyz se nevrati, aspon po sobe nezanechas pachut.

### 5. Zkontroluj data pred dalsim obdobim

Renewal je idealni misto pro privacy uklid. Zeptej se:

- Sbira produkt porad jen data, ktera odpovidaji aktualnimu ucelu?
- Nezustala po pilotu zapnuta integrace, kterou uz nikdo nepouziva?
- Nelezi v supportu exporty, screenshoty nebo prilohy, ktere mely byt smazane?
- Odpovida seznam subprocesoru tomu, co je realne zapojene?
- Je stale spravne nastaveni retence logu, zaloh a auditni historie?
- Maji pristup jen lide, kteri ho porad potrebuji?
- Neprodavame zakaznikovi funkci, ktera zvysi datovou stopu bez jasne hodnoty?

Pokud se rozsah meni, zapis datovy dopad rovnou do renewal karty. Jedna veta casto staci:

```text
Datovy dopad: Pridavame integraci na fakturaci. Bude prenaset firemni identifikacni udaje, fakturacni email a stav platby. Neposilame obsah projektovych poznamek ani aktivitu jednotlivych uzivatelu.
```

### 6. Renewal email bez mlhy

Sablona pro zakaznika:

```text
Predmet: Navrh dalsiho obdobi pro [produkt/projekt]

Ahoj [jmeno],

blizi se konec soucasneho obdobi, tak jsem pripravil kratke shrnuti.

Puvodni cil byl [cil]. Za posledni obdobi se podarilo [konkretni vysledek].
Otevrene zustava [problem nebo riziko].

Navrhuji jednu ze tri cest:

1. pokracovat beze zmeny,
2. upravit rozsah na [konkretni zmena],
3. nebo pripravit ukonceni vcetne exportu/mazani dat a vypnuti integraci.

Z datoveho pohledu se pri variante [doporucena varianta] meni [nic / konkretni dopad].

Muzu poslat detailni navrh nebo to projit na 20min callu.

Cody
```

Tahle zprava neschovava fakturu za "jen pripominam". Dava zakaznikovi kontext, volbu a datovy dopad. Presne takhle ma B2B komunikace znit, kdyz nechces prodavat mlhou.

### 7. 45min postup

```text
00-05 min: Vyber jeden ucet pred renewalem.
Neber vsechny naraz. Zacni tam, kde je hodnota nebo riziko nejvetsi.

05-15 min: Vypln renewal kartu.
Puvodni cil, vysledky, otevrene problemy, vyuziti a navrh dalsiho obdobi.

15-25 min: Projdi datovou stopu.
Integrace, pristupy, support prilohy, logy, exporty, retence a subprocesori.

25-32 min: Vyber tri varianty.
Beze zmeny, uprava rozsahu, ukonceni nebo prevod.

32-40 min: Napis renewal email.
Jedna zprava, konkretni vysledky, jasny dalsi krok, zadne umele urgency.

40-45 min: Zapis follow-up.
Kdo odpovida, kdy se ozve, kdy se karta uzavre nebo smaze.
```

### Checklist: renewal bez automaticke pasti

- [ ] Renewal resim predem, ne az v den faktury.
- [ ] Mam jednu kratkou renewal kartu pro account.
- [ ] Hodnotu ukazuji pres vysledky, workflow a provozni dopad.
- [ ] Nepouzivam osobni klikaci historii jako hlavni argument.
- [ ] Zakaznik ma jasnou variantu pokracovat, upravit rozsah nebo odejit.
- [ ] U zmeny rozsahu znam datovy dopad.
- [ ] Nepouzivane integrace a pristupy se uklidi.
- [ ] Support prilohy, exporty a pilotni data maji jasnou retenci.
- [ ] Renewal email rika otevrene problemy, nejen uspechy.
- [ ] Dalsi krok ma vlastnika a datum.
- [ ] Pokud spoluprace konci, existuje exportni a mazaci postup.
- [ ] Z renewal poznatku vznikne aspon jedno produktove nebo provozni rozhodnuti.

---

## Zruseni uctu a mazani dat bez schovanych dveri za 60 minut

Zruseni uctu neni okrajova obrazovka pro lidi, ktere uz nechces videt. Je to posledni velky test duvery. Kdyz zakaznik odchazi a produkt zacne delat klikaci labyrint, schovavat export, nutit call nebo premlouvat pres umele slevy, rikas tim: "Vase data jsou nase paka." To je presny opak privacy-first provozu.

Evropsky kontext je dulezity, protoze GDPR obsahuje pravo na vymaz podle clanku 17 a pravo na prenositelnost podle clanku 20. Primarni text GDPR je tady: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng. EDPB v roce 2026 publikoval vysledky koordinovane akce k pravu na vymaz a upozornil mimo jine na problemy s internimi postupy, informovanim lidi a posuzovanim situaci, kdy pravo na vymaz neni absolutni: https://www.edpb.europa.eu/documents/coordinated-enforcement-framework/coordinated-enforcement-action-implementation-of-the-0_en.

Prakticky preklad pro maly SaaS: offboarding nesmi byt jen tlacitko "smazat". Musi umet rozlisit export, deaktivaci, retenci, zakonny duvod pro dalsi ulozeni, technicke zalohy, subprocesory a potvrzeni pro zakaznika. A musi to umet bez toho, aby kazdy pripad skoncil jako adrenalinovy sport pro support.

### 1. Rozdel odchod na pet stavu

Nejvetsi chaos vznikne, kdyz tym pouziva jedno slovo "smazani" pro pet ruznych veci. Zaved jasne stavy:

| Stav | Co znamena | Typicka akce |
| --- | --- | --- |
| Zruseni predplatneho | Zakaznik nechce dalsi fakturaci. | Ukoncit billing, zachovat pristup do konce obdobi podle podminek. |
| Deaktivace uctu | Ucet uz nejde bezne pouzivat. | Zastavit prihlaseni, API klice, webhooky a notifikace. |
| Export dat | Zakaznik chce kopii dat. | Vytvorit prenositelny export s omezenou platnosti odkazu. |
| Vymaz provoznich dat | Data uz nejsou potreba pro puvodni ucel. | Smazat nebo anonymizovat podle datove mapy a retence. |
| Retence z duvodu povinnosti | Cast dat musi zustat. | Oddelit je, omezit pristup, vysvetlit duvod a dobu ulozeni. |

Tahle tabulka ma byt videt v produktu, support manualu i interni dokumentaci. Kdyz zakaznik klikne "zrusit ucet", nema tim automaticky nastat pravni i technicka exploze. Produkt se ma zeptat, co presne chce udelat, a vysvetlit dopad.

**Codyho komentar:** Tlacitko "Delete everything" vypada statecne, ale casto je to jen maskovana neznalost vlastnich dat. Dobry produkt vi, co umi smazat hned, co potrebuje exportovat, co musi docasne podrzet a proc.

### 2. Navrhni odchodovou obrazovku jako rozhodnuti

Odchodovy tok ma byt kratky a pravdivy. Nechci tam videt pet obrazovek smutnych hlasek, odpocty, "opravdu opravdu opravdu?" a tlacitko pro zruseni v barve mokreho chodniku.

Minimalni tok:

1. Stranka ukaze, co se stane se sluzbou, fakturaci a daty.
2. Zakaznik muze stahnout export, pokud dava smysl.
3. Zakaznik vybere, jestli chce ukoncit predplatne, deaktivovat ucet nebo pozadat o vymaz.
4. Produkt ukaze dopad na tym, integrace, API klice a naplanovane ulohy.
5. Zakaznik potvrdi akci.
6. System posle potvrzeni s casem, stavem a dalsimi kroky.

Mikrocopy muze vypadat takhle:

```text
Zruseni predplatneho zastavi dalsi fakturaci. Do konce zaplaceneho obdobi zustane pristup aktivni.

Deaktivace uctu vypne prihlaseni, API klice, webhooky a naplanovane odesilky.

Vymaz dat spusti proces smazani dat, ktera uz nepotrebujeme pro poskytovani sluzby, pravni povinnosti nebo obranu pravnich naroku. Pred vymazem doporucujeme stahnout export.
```

Tohle neni pravnicka elegance. Je to obycejna slusnost. Zakaznik vidi rozdil mezi obchodnim ukoncenim a datovym vymazem, support dostane mene zmatenych dotazu a produktovy tym ma lepsi hranice.

### 3. Export pred smazanim ma byt pouzitelny

Export neni splneny jen tim, ze nekomu posles ZIP s nahodnymi JSON soubory a poprejes mu hodne stesti. Pro B2B SaaS ma byt export citelny pro cloveka a zpracovatelny pro system.

Pouzitelny export typicky obsahuje:

- `README.txt` s popisem obsahu a casem exportu,
- strukturovana data v CSV nebo JSON,
- prilohy v puvodnim formatu,
- vztahy mezi zaznamy pres stabilni ID,
- seznam toho, co export neobsahuje a proc,
- informaci o platnosti odkazu ke stazeni,
- kontakt pro problem s exportem.

Priklad `README.txt`:

```text
Export uctu: [nazev uctu]
Vytvoreno: [datum a cas]
Obsahuje: projekty, uzivatele, nastaveni workflow, prilohy, auditni udalosti k nastaveni
Neobsahuje: interni systemove logy, agregovane produktove metriky, data ponechana kvuli fakturacnim povinnostem
Format: CSV + JSON + prilohy
Odkaz je platny do: [datum]
```

Export neposilej jako bezny email attachment, pokud obsahuje citliva data. Lepsi je kratkodoby odkaz, pristup po prihlaseni, nebo rucni predani po overeni prijemce u vetsich zakazniku. Po stazeni nebo vyprseni odkazu exportni balicek smaz.

### 4. Mazaci job musi mit mapu, ne odvahu

Mazani dat v SaaS by nemelo byt rucni hledani v databazi. Potrebujes datovou mapu, ktera rika, kde data daneho uctu ziji.

Pro kazdou kategorii si zapis:

| Kategorie | Kde lezi | Akce pri odchodu | Retence | Vlastnik |
| --- | --- | --- | --- | --- |
| Profil uctu | hlavni DB | smazat nebo anonymizovat | podle smlouvy | produkt |
| Fakturacni doklady | billing system | ponechat podle ucetnich pravidel | definovana v internim policy | finance |
| Prilohy | object storage | smazat po exportu | kratka ochranna lhuta | engineering |
| Logy | monitoring | neobsahuji obsah, expirace dle log policy | kratka | platform |
| Support komunikace | helpdesk/mailbox | vycistit prilohy a zbytecne udaje | podle support policy | support |
| Zalohy | backup storage | neobnovovat aktivne, zmizet podle rotace zaloh | podle backup policy | platform |

Mazaci job ma byt idempotentni: kdyz spadne uprostred a pustis ho znovu, nema udelat skodu. Mel by zapisovat stav po krocich:

```text
deletion_requested
export_ready
account_deactivated
integrations_disabled
primary_data_deleted
external_processors_notified
backup_expiry_recorded
confirmation_sent
closed
```

U kazdeho kroku zapis jen technicky stav, cas a minimalni identifikator. Neni potreba logovat cele zpravy, seznam vsech souboru nebo osobni obsah. Mazaci log je provozni doklad, ne nove uloziste osobnich dat.

### 5. Subprocesori nesmi zustat mimo zaber

Kdyz data posilas do dalsich nastroju, zruseni uctu se netyka jen tvoji databaze. Musis vedet, kteri subprocesori maji data daneho zakaznika a jaka akce je potreba.

Jednoducha karta:

```text
Subprocesor:
Typ dat:
Ucel:
Mazani pres API / portal / support:
SLA nebo obvykla doba vymazu:
Doklad o pozadavku:
Vlastnik:
```

U nekritickych nastroju muze stacit vypnuti integrace a retence podle smlouvy. U kritickych nastroju chces jasny postup predem. Nejhorsi chvile na cteni DPA je ve chvili, kdy zakaznik prave pozadal o vymaz a support ma v kalendari dalsich osm veci.

Privacy-first pravidlo: pokud neumime u dodavatele rozumne smazat nebo exportovat data, nemame mu je posilat bez velmi dobreho duvodu.

### 6. Potvrzeni pro zakaznika ma byt konkretni

Po zruseni nebo vymazu neposilej mlhave "vase zadost byla zpracovana". Rekni, co se stalo a co jeste zustava.

Sablona:

```text
Predmet: Potvrzeni ukonceni uctu [nazev]

Ahoj [jmeno],

potvrzuji, ze jsme dne [datum] zpracovali pozadavek pro ucet [nazev].

Hotovo:
- predplatne bylo ukonceno k [datum],
- prihlaseni a API klice jsou vypnute,
- hlavni provozni data byla [smazana/anonymizovana],
- export byl pripraven do [datum] a odkaz vyprsi [datum].

Ponechavame pouze data, ktera musime drzet kvuli [fakturace / pravni povinnost / obrana naroku / technicka rotace zaloh]. Pristup k nim je omezeny a budou odstranena podle nasi retencni politiky.

Pokud neco nesedi, odpovezte na tento email.

Cody
```

Kdyz nejde vymaz provest uplne, rekni to vecne. Pravo na vymaz neni absolutni a v nekterych situacich existuji legitimni duvody pro dalsi ulozeni, ale zakaznik nemusi lustit, co se deje za oponou. Vysvetleni ma byt konkretni, kratke a overitelne.

### 7. 60min postup

```text
00-05 min: Vyber jeden odchodovy scenar.
Typicky zacni "zakaznik rusi ucet a chce export pred smazanim".

05-15 min: Sepis pet stavu odchodu.
Zruseni predplatneho, deaktivace, export, vymaz, retence.

15-25 min: Projdi datovou mapu.
Hlavni DB, billing, object storage, logy, support, zalohy, subprocesori.

25-35 min: Navrhni obrazovku a emaily.
Jedna rozhodovaci stranka, potvrzeni zadosti, potvrzeni hotove akce.

35-45 min: Navrhni mazaci job jako stavovy tok.
Kroky, idempotence, auditni zaznam, chyba a opakovani.

45-52 min: Zkontroluj support postup.
Kdo overuje prijemce, kdo resi vyjimky, kam se pise pravni nejistota.

52-60 min: Vyber jednu opravu pro tento tyden.
Napriklad pridat exportni README, vypnout API klice pri deaktivaci nebo dopsat subprocesorskou kartu.
```

### Checklist: zruseni uctu a mazani dat

- [ ] Rozlisuji zruseni predplatneho, deaktivaci, export, vymaz a retenci.
- [ ] Odchodovy tok neni navrzeny jako past.
- [ ] Zakaznik pred potvrzenim vidi dopad na pristup, fakturaci, integrace a data.
- [ ] Export je citelny, prenositelny a ma popis obsahu.
- [ ] Odkaz na export ma omezenou platnost a primerene overeni pristupu.
- [ ] Datova mapa rika, kde jsou data uctu ulozena.
- [ ] Mazaci job je idempotentni a zapisuje stav po krocich.
- [ ] Log mazani neuklada zbytecny osobni obsah.
- [ ] Subprocesori maji popsanou mazaci nebo vypinaci cestu.
- [ ] Fakturacni, pravni a backup retence jsou oddelene od aktivnich dat.
- [ ] Zakaznik dostane konkretni potvrzeni, co bylo smazano a co zustava.
- [ ] Support vi, kam predat nejasny pravni pripad.
- [ ] Po odchodu vznikne jedna produktova nebo provozni oprava, ne jen zavreny ticket.

---

## Import a migrace dat bez spinavych exportu za 60 minut

Migrace zakaznickych dat je okamzik pravdy. Zakaznik uz ti duveruje natolik, ze chce do produktu prinest kus sve reality: kontakty, projekty, faktury, historii komunikace, nastaveni nebo dokumenty. Kdyz import navrhnes spatne, dostanes do systemu datovy neporadek, bezpecnostni riziko a support vlakno delsi nez obchodni nabidka.

Privacy-first migrace ma jednoduchy cil: prijmout jen data, ktera jsou potreba pro domluveny ucel, zpracovat je predvidatelne, ukazat zakaznikovi vysledek a uklidit docasne soubory. Zadny "poslete nam export celeho CRM a nejak to nacpeme dovnitr". To je migrace ve stylu popelnice s API tokenem.

GDPR pravo na prenositelnost dat resi prijem osobnich udaju ve strukturovanem, bezne pouzivanem a strojove citelnem formatu za urcitych podminek; EDPB k nemu ma samostatne pokyny: https://www.edpb.europa.eu/documents/guideline/guidelines-on-the-right-to-data-portability-under-regulation-2016679-wp242_en. I kdyz zrovna nejde o formalni zadost subjektu udaju, produktove pravidlo je uzitecne: export a import maji byt citelne, predvidatelne a prenositelne, ne zamcene v ritualu jednoho dodavatele.

### 1. Nejdriv popis ciloveho stavu, potom soubor

Import nezacina tlacitkem "upload CSV". Zacina vetou, co ma po migraci fungovat.

Priklady dobrych cilu:

- "Zakaznik chce mit v Codym seznam aktivnich B2B leadu s poslednim kontaktem a odpovednym clovekem."
- "Tym chce prenest otevrene support tickety, aby neztratil rozpracovane pozadavky."
- "Firma chce nahrat katalog sluzeb a cen, aby sla postavit prvni nabidka."

Priklady spatnych cilu:

- "Importujeme vse z puvodniho systemu."
- "Nahrajeme historicka data, kdyby se hodila."
- "Dame to do databaze a pozdeji vymyslime, co s tim."

Pred importem si napis importni kartu:

```text
Nazev migrace:
Zakaznik:
Ucel:
Cilovy stav po migraci:
Zdrojovy system:
Typy dat:
Osobni udaje:
Citliva data:
Co neimportujeme:
Docasne uloziste:
Datum smazani zdrojovych souboru:
Vlastnik:
```

Radek "Co neimportujeme" je povinny. Kdyz zustane prazdny, tym se casto boji neco zahodit a skonci s archivem, ktery nikdo nepouzije, ale vsichni ho musi chranit.

### 2. Datovy kontrakt chrani produkt i zakaznika

Datovy kontrakt rika, jake sloupce nebo objekty import prijima, co je povinne, co je volitelne, jak se validuje hodnota a co se stane pri chybe.

Priklad pro import leadu:

| Pole | Povinne | Validace | Poznamka |
| --- | --- | --- | --- |
| `company_name` | ano | 1 az 160 znaku | Firma nebo organizace. |
| `contact_email` | ne | format emailu | Nepovinne, pokud existuje jen firma. |
| `owner_email` | ano | musi existovat v tymu | Komu lead patri. |
| `last_contact_at` | ne | ISO datum | Bez casu, pokud presnost neni potreba. |
| `status` | ano | `new`, `active`, `paused`, `won`, `lost` | Mapuje se na interni stav. |
| `note` | ne | max 1000 znaku | Nepatri sem cele emailove vlakno. |

Datovy kontrakt ma byt dostupny zakaznikovi pred importem. Idealne jako kratky popis, prikladovy soubor a seznam typickych chyb. Pokud import delate rucne jako concierge, stejny kontrakt pouzij interne. Rucni prace neni vyjimka z pravidel, jen mene automatizovana verze systemu.

Privacy-first pravidlo: kdyz pole nepotrebujes pro prvni hodnotu produktu, neimportuj ho. Kdyz ho mozna budes potrebovat pozdeji, vytvor pozdejsi importni krok s novym ucelem.

### 3. Upload je bezpecnostni hranice

Soubor od zakaznika je neduveryhodny vstup, i kdyz zakaznik neni utocnik. Muze byt spatne exportovany, prilis velky, v jinem kodovani, s rozbitymi radky, s makry, se vzorci nebo s daty, ktera do produktu nepatri. OWASP File Upload Cheat Sheet doporucuje mimo jine whitelist povolenych pripon a typu, kontrolu velikosti, prejmenovani souboru, ulozeni mimo webroot a dalsi validace: https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html

Minimalni pravidla:

- Povol jen formaty, ktere opravdu podporujes.
- Nastav limit velikosti a poctu radku.
- Soubor prejmenuj internim identifikatorem.
- Neukladej upload do verejne dostupne cesty.
- Nezpracovavej soubor se systemovymi opravnenimi, ktera nepotrebuje.
- Po importu soubor smaz podle importni karty.
- Chybu ukaz jako opravitelny problem, ne jako stack trace.

CSV ma jeste jednu past: tabulkove programy mohou hodnoty zacinajici znaky jako `=`, `+`, `-` nebo `@` interpretovat jako vzorce. OWASP popisuje CSV injection jako riziko pri vkladani neduveryhodneho vstupu do CSV exportu: https://owasp.org/www-community/attacks/CSV_Injection. Pri importu to znamena dve veci: neber spreadsheet jako bezpecny zdroj pravdy a pri pozdejsim exportu z produktu osetri hodnoty, ktere by se mohly otevrit jako vzorce.

### 4. Import musi mit nahled, ne jen tlacitko "hotovo"

Dobra migrace ma tri kroky:

1. Nahrat a zkontrolovat zdroj.
2. Ukazat nahled mapovani a problemu.
3. Potvrdit import a ulozit auditni zaznam.

Nahled by mel ukazat:

- kolik radku nebo objektu bude importovano,
- kolik radku ma chybu,
- ktera pole se mapuji na ktera produktova pole,
- jake hodnoty budou normalizovane,
- ktere sloupce ignorujeme,
- zda vzniknou duplicity.

Priklad hlaseni:

```text
Soubor obsahuje 842 radku.
Importovano bude 791 leadu.
31 radku ma chybejici vlastnika.
20 radku vypada jako duplicita podle domeny a nazvu firmy.
Sloupce "private_note", "phone_raw" a "linkedin_url" neimportujeme, protoze nejsou soucasti domluveneho ucelu.
```

Tohle je mnohem lepsi nez tiche "import probehl". Zakaznik i support vidi, co se stalo. A kdyz se ozve problem, nehleda se pravda v puvodnim souboru ulozenem nekde v download slozce.

### 5. Rollback a uklid priprav predem

Import bez rollbacku je odvazny sport. Nemusi jit vzdy udelat dokonaly undo, ale musi existovat plan.

Moznosti:

- Import zapis pod `import_batch_id`.
- Nove zaznamy oznac jako vytvorene migraci.
- Upravene zaznamy loguj s predchozi hodnotou, pokud je to primerene.
- Duplicity dej nejdriv do review, ne rovnou do slouceni.
- Pri chybe import zastav po validaci, ne az po pulce databaze.
- Docasne soubory smaz po potvrzeni vysledku nebo po kratke retenci.

Prakticky kompromis pro maly SaaS: prvni verze importu muze byt polorucni, ale musi mit opakovatelny postup. Jeden skript, jedna importni karta, jeden vzorek dat, jeden zapis vysledku. Kdyz migraci delas podruhe, nechces lovit prikazy z historie terminalu.

### 6. Potvrzeni migrace je soucast produktu

Po importu posli zakaznikovi kratke potvrzeni. Ne marketingovy roman, ale provozni pravdu.

```text
Predmet: Import dat pro [nazev] dokoncen

Ahoj [jmeno],

import pro [ucel] je hotovy.

Vysledek:
- importovano: [pocet] zaznamu,
- preskoceno kvuli chybe: [pocet],
- slouceno jako duplicita: [pocet],
- neimportovane sloupce: [seznam],
- docasny zdrojovy soubor bude smazan: [datum].

Pokud chcete zkontrolovat preskocene radky, poslu vam opraveny soubor nebo seznam chyb bez zbytecnych osobnich udaju.

Cody
```

Zakaznik tak vidi, ze migrace mela hranice. To buduje vic duvery nez slib "vsechno jsme preklopili". Vsechno je casto jen hezci nazev pro neporadek.

### 7. 60min postup

```text
00-05 min: Vyber jeden migracni scenar.
Napriklad import leadu z puvodniho CRM nebo import aktivnich ticketu.

05-15 min: Vypln importni kartu.
Ucel, cilovy stav, typy dat, co neimportujeme, docasne uloziste a datum smazani.

15-25 min: Sepis datovy kontrakt.
Povinna pole, validace, limity, mapovani stavu a pravidla pro duplicity.

25-35 min: Navrhni upload a validaci.
Povolene formaty, velikost, ulozeni, bezpecnostni kontroly a chybove hlasky.

35-45 min: Navrhni nahled importu.
Pocet zaznamu, chyby, ignorovane sloupce, duplicity a potvrzeni pred zapisem.

45-52 min: Doplni rollback a uklid.
Import batch ID, log vysledku, smazani zdrojovych souboru a odpovedny clovek.

52-60 min: Napis zakaznicke potvrzeni.
Jedna sablona pro hotovy import a jedna kratka odpoved pro import s chybami.
```

### Checklist: import a migrace dat

- [ ] Import ma jasny ucel a cilovy stav po migraci.
- [ ] Existuje radek "Co neimportujeme".
- [ ] Datovy kontrakt popisuje pole, validace, limity a duplicity.
- [ ] Zakaznik zna format a typicke chyby pred odeslanim dat.
- [ ] Upload povoluje jen podporovane formaty a ma limit velikosti.
- [ ] Zdrojovy soubor neni ulozeny verejne ani natrvalo.
- [ ] Import ukazuje nahled pred zapisem do produkcnich dat.
- [ ] Chybove radky lze opravit bez posilani celeho exportu znovu, pokud to dava smysl.
- [ ] Kazdy import ma batch ID nebo podobny auditni identifikator.
- [ ] Existuje rollback nebo aspon postup pro opravu spatne migrace.
- [ ] Docasne soubory maji datum smazani.
- [ ] Zakaznik dostane konkretni potvrzeni vysledku migrace.
- [ ] Exporty z produktu osetruji riziko CSV/formula injection.

---

## Auditni stopa v adminu bez vnitrniho slideni za 60 minut

Admin rozhrani je misto, kde se da SaaS produkt zachranit i znicit. Support opravi spatne nastaveny ucet, obchodnik doplni fakturacni kontakt, zakladatel rucne spusti migraci a technik proveri incident. To vsechno muze byt legitimni prace. Problem zacina ve chvili, kdy nikdo nevi, kdo se na co dival, proc to udelal a jestli k tomu mel opravneni.

Auditni stopa neni totalni kamera nad lidmi ve firme. Je to omezeny zaznam citlivych akci, ktery chrani zakaznika, produkt i tym. OWASP v Logging Cheat Sheet rozlisuje bezne provozni logy, bezpecnostni logy a auditni stopy a upozornuje, ze se ma logovat podle ucelu, ne pro radost z hromadeni dat: https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html. Pro pristupy plati princip nejmensich opravneni, deny-by-default a kontrola opravneni na kazdy request; shrnuje to OWASP Authorization Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html.

### 1. Oddel auditni stopu od aplikacnich logu

Aplikacni log odpovida na otazku: "Proc se system choval divne?" Auditni stopa odpovida na otazku: "Kdo udelal citlivou akci a na zaklade ceho?" Kdyz je smichas do jednoho proudu, vznikne bordel, ktery je moc podrobny pro support a moc nepresny pro incident.

Do auditni stopy patri hlavne:

- zobrazeni citlivych zakaznickych dat v adminu,
- export dat,
- zmena role nebo opravneni,
- reset hesla nebo MFA pro jineho uzivatele,
- zmena billing udaju,
- spusteni importu, migrace nebo mazani,
- zmena integrace nebo webhooku,
- impersonace zakaznika,
- rucni zmena stavu uctu, planu nebo limitu.

Do auditni stopy naopak vetsinou nepatri cele telo zpravy, cele CRM poznamky, kompletni export, obsah dokumentu ani citlive hodnoty pred zmenou a po zmene. Pro audit casto staci typ akce, objekt, cas, aktor, duvod, vysledek a technicky identifikator.

### 2. Navrhni auditni zaznam jako produktovy kontrakt

Nejdriv si napis jednu radku, kterou by pochopil i zakaznik:

```text
Kdyz nekdo z naseho tymu provede citlivou akci nad zakaznickym uctem, ulozime kdo, kdy, nad cim, jakou akci, proc a s jakym vysledkem.
```

Minimalni auditni zaznam:

| Pole | Priklad | Poznamka |
| --- | --- | --- |
| `event_id` | `aud_01K...` | Jedinecny identifikator. |
| `occurred_at` | `2026-08-02T14:20:00Z` | UTC cas, bez lokalni magie. |
| `actor_type` | `employee`, `system`, `customer` | Oddeli cloveka od jobu. |
| `actor_id` | `usr_123` | Bez emailu, pokud staci interni ID. |
| `account_id` | `acc_456` | Zakaznicky ucet nebo workspace. |
| `action` | `customer_export_created` | Stabilni slovnik akci. |
| `target_type` | `contact`, `invoice`, `api_key` | Nad cim se akce stala. |
| `target_id` | `cnt_789` | ID objektu, ne jeho obsah. |
| `reason` | `support_ticket_321` | Proc k akci doslo. |
| `result` | `success`, `denied`, `failed` | I odmitnute akce jsou dulezite. |
| `request_id` | `req_abc` | Vazba na technicke logy. |

Kdyz potrebujes zaznamenat zmenu hodnoty, uloz spis informaci typu `changed_fields: ["billing_email", "plan"]` nez stare a nove hodnoty. Pokud je zmena sama o sobe citliva, napr. zapnuti exportu nebo zmena role na admina, podrobnost patri do schvalovaciho zaznamu, ne do nekonecneho logu.

### 3. Impersonace musi byt viditelna a kratka

Impersonace, tedy prihlaseni clena tymu "jako zakaznik", je pohodlna a nebezpecna. Casto zacina dobrym umyslem: "Jen se podivam, proc mu to nejde." Bez pravidel z toho ale vznikne vnitrni sledovani, ktere se spatne vysvetluje i hure brani.

Pravidla pro privacy-first impersonaci:

- Povolit jen vybranym rolim, ne kazdemu v supportu automaticky.
- Vyzadat duvod pred startem, napriklad ticket ID.
- Zobrazit v UI jasny indikator, ze clovek jedna v cizim uctu.
- Zakazat citlive akce bez dalsiho potvrzeni.
- Automaticky ukoncit relaci po kratkem case.
- Zapsat start, konec a vsechny citlive akce do auditni stopy.
- Kde to dava smysl, preferovat read-only nahled pred plnym prevzetim uctu.

**Codyho komentar:** Impersonace bez duvodu je jako univerzalni klic od vsech bytu v dome. Mozna ho ma spravce, ale nechces, aby lezel na recepci vedle kavy.

### 4. Pristup k auditni stope neni pro kazdeho

Auditni stopa muze obsahovat citlive provozni informace. Proto neni rozumne ji ukazovat cele firme. Rozdel pristupy podle prace:

- Support vidi zaznamy vztazene ke svym ticketum a zakaznickemu uctu.
- Security nebo provoz vidi bezpecnostni eventy a podezrele vzory.
- Admin vidi zmeny roli, exporty, mazani a billing akce.
- Zakaznik muze dostat omezeny audit log sveho workspace, pokud je to soucast produktu.

Zakladni pravidlo: kdo muze auditni stopu cist, nesmi ji umet tise menit. Kdo muze resit incident, potrebuje dost kontextu, ale ne nutne osobni obsah zakaznickych dat. Kdo dela obchodni follow-up, nepotrebuje vedet, ze konkretni uzivatel otevrel citlivy dokument ve 22:14.

GDPR stoji na minimalizaci, omezeni ucelu a integrite a duvernosti zpracovani. Pro auditni stopu to znamena, ze "bezpecnost" neni volny prukaz k neomezenemu sbirani vseho: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng.

### 5. Retence a export auditni stopy maji mit hranice

Auditni stopa musi prezit dele nez debug log, ale nemusi zit vecne. Nastav retenci podle rizika, smluv a provozni potreby. U maleho B2B SaaS muze davat smysl:

- 30 az 90 dni pro bezne admin zobrazeni bez citlive zmeny,
- 12 az 24 mesicu pro zmeny opravneni, exporty, mazani, billing a integrace,
- delsi retence jen tam, kde ji obhajis smluvne, pravne nebo bezpecnostne.

Kdyz zakaznik pozada o vysvetleni incidentu, auditni stopa ti pomuze odpovedet konkretne: kdy akce probehla, kdo ji provedl, proc, jake objekty byly dotcene a jaky byl nasledujici krok. EDPB ma samostatne pokyny k oznamovani poruseni zabezpeceni osobnich udaju podle GDPR, ktere je dobre mit po ruce pri incidentovem runbooku: https://www.edpb.europa.eu/documents/guideline/guidelines-92022-on-personal-data-breach-notification-under-gdpr_en.

### 6. 60min postup

```text
00-08 min: Vyber deset nejcitlivejsich admin akci.
Exporty, mazani, zmeny roli, impersonace, billing, webhooky, importy a reset prihlaseni.

08-18 min: Sepis auditni kontrakt.
Kdo, kdy, co, nad cim, proc, vysledek a technicky request ID.

18-28 min: Oznac data, ktera do auditu nepatri.
Obsah zprav, cele exporty, hesla, tokeny, osobni poznamky a nepotrebne hodnoty pred/po.

28-38 min: Navrhni pravidla pristupu.
Kdo audit vidi, kdo ho muze filtrovat, kdo muze exportovat a kdo ho nesmi menit.

38-48 min: Doplni impersonaci.
Duvod pred startem, viditelny indikator, kratka relace, read-only rezim a log ukonceni.

48-55 min: Nastav retenci.
Kratsi pro bezne zobrazeni, delsi pro zmeny opravneni, exporty, mazani a billing.

55-60 min: Napis tri testy.
Citliva akce se zaloguje, odmitnuta akce se zaloguje, audit nezapisuje zakazane hodnoty.
```

### Checklist: auditni stopa v adminu

- [ ] Existuje seznam citlivych admin akci.
- [ ] Auditni stopa je oddelena od debug a aplikacnich logu.
- [ ] Kazdy zaznam ma aktora, cas, akci, cil, duvod, vysledek a request ID.
- [ ] Audit nezapisuje cele zpravy, exporty, hesla, tokeny ani zbytecne osobni udaje.
- [ ] Odmitnute pokusy o citlive akce se loguji.
- [ ] Impersonace vyzaduje duvod a je viditelna v rozhrani.
- [ ] Impersonace ma casovy limit a preferuje read-only rezim.
- [ ] Pristup k auditni stope je omezen podle role a ucelu.
- [ ] Auditni stopu nelze bezne upravovat nebo mazat z admin UI.
- [ ] Retence auditnich zaznamu je popsana podle typu akce.
- [ ] Existuji testy, ktere hlidaji, ze se citlive akce loguji.
- [ ] Zakaznikovi lze pri incidentu vysvetlit dotcene akce bez vyzrazeni zbytecnych dat.

---

## Schvalovani citlivych admin akci bez brzdici byrokracie za 45 minut

Auditni stopa rekne, co se stalo. Schvalovani citlivych admin akci ma zabranit tomu, aby se nebezpecna vec stala omylem, potichu nebo pod tlakem. Nejde o to udelat z maleho SaaS korporatni labyrint. Jde o to oddelit beznou support praci od akci, ktere mohou zmenit penize, prava, data nebo duveru zakaznika.

Privacy-first tym by mel mit jednoduchou odpoved na otazku: "Ktere akce muze jeden clovek udelat sam a ktere potrebuji druhy par oci?" OWASP Authorization Cheat Sheet pripomina princip nejmensich opravneni, deny-by-default a kontrolu opravneni na kazdy request: https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html. OWASP Logging Cheat Sheet zase pomaha oddelit auditni zaznam od beznych logu: https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html. Schvalovani je prakticky most mezi obojim.

### 1. Rozdel akce podle dopadu

Ne kazde kliknuti v adminu potrebuje schvaleni. Kdyz support upravi preklep v nazvu firmy nebo preposle odkaz na napovedu, druhy clovek by jen zdrzoval. Schvalovani patri tam, kde chyba vytvori skodu, ktera se spatne vraci zpatky.

Typicke citlive akce:

- zmena role na admina nebo ownera,
- vypnuti MFA pro jineho uzivatele,
- export zakaznickych dat,
- hromadne mazani dat,
- rucni zmena tarifu, limitu nebo fakturacniho stavu,
- spusteni migrace nebo importu nad produkcnim uctem,
- zmena webhooku nebo integrace, ktera posila data ven,
- impersonace s moznosti zapisovat,
- prodlouzeni trialu nebo sleva mimo bezna pravidla,
- vypnuti bezpecnostniho omezeni kvuli jednomu pripadu.

Jednoducha matice:

| Dopad | Priklad | Schvaleni |
| --- | --- | --- |
| Nizky | oprava nazvu workspace | Bez schvaleni, auditovat podle potreby. |
| Stredni | prodlouzeni trialu o 7 dni | Schvaleni podle role nebo pravidel. |
| Vysoky | export osobnich dat | Povinne schvaleni a duvod. |
| Kriticky | mazani uctu, vypnuti MFA, zmena ownera | Dva kroky, druhy schvalovatel, audit a notifikace. |

Pravidlo: kdyz bys akci musel zakaznikovi vysvetlovat v incidentu, nejspis patri aspon do auditu. Kdyz by mohla zmenit pristup, penize nebo data, nejspis patri i do schvalovani.

### 2. Schvalovaci karta misto volneho slibu v chatu

Nejvetsi chyba je schvalovat citlive akce stylem "mrkni na to, prosim" v nahodnem chatu. Po tydnu nikdo nevi, co bylo schvaleno, kdo to schvalil a jestli se provedla stejna vec. Schvaleni musi byt strukturovane, ale kratke.

Minimalni schvalovaci karta:

| Pole | Priklad |
| --- | --- |
| `request_id` | `admreq_01K...` |
| `requested_by` | interni ID clena tymu |
| `requested_at` | UTC cas |
| `account_id` | dotceny zakaznicky ucet |
| `action` | `billing_plan_override` |
| `reason` | `support_ticket_812`, `contract_addendum_44` |
| `expected_effect` | tarif bude zmenen z Pro na Business |
| `data_touched` | billing metadata, ne obsah dokumentu |
| `risk_level` | stredni, vysoky, kriticky |
| `approver_id` | druhy clovek nebo role |
| `expires_at` | kdy schvaleni prestava platit |
| `result` | approved, rejected, expired, executed |

Schvaleni by nemelo byt bianco sek. Kdyz nekdo schvali "opravit ucet klienta", je to malo. Kdyz schvali "zmenit billing email u `acc_456` na zaklade ticketu `812`", je to pouzitelne.

### 3. Dva typy schvaleni: pravidlo a clovek

Ne vsechno musi kontrolovat clovek. Cast schvalovani jde vyresit pravidly:

- Support lead muze prodlouzit trial nejvyse jednou a nejvyse o 14 dni.
- Fakturacni role muze opravit billing email, ale ne zmenit ownera.
- Export dat muze spustit jen owner zakaznickeho uctu nebo interni admin s overenym ticketem.
- Hromadne mazani musi mit druhy schvalovaci krok vzdy.
- Impersonace s write opravnenim musi expirovat po kratkem case.

Kde pravidlo nestaci, pouzij cloveka. Dulezite je, aby schvalovatel nebyl stejny clovek jako zadatel a aby mel dost kontextu. Schvalovatel nepotrebuje videt cely obsah zakaznickych dat, ale musi videt ucet, akci, duvod, dopad a riziko.

**Codyho komentar:** Dobre schvalovani neni "pockej, az se nekdo slitovne ozve". Je to mala brzda presne tam, kde by jinak jeden unaveny klik mohl vytvorit velky problem.

### 4. UI musi brzdit omyl, ne praci

Citliva admin akce ma mit jine rozhrani nez bezne ulozeni formulare. Ne kvuli dramatu, ale kvuli pozornosti. Clovek ma poznat, ze dela neco s dopadem.

Prakticke prvky:

- jasny nadpis akce: "Zmenit ownera workspace",
- shrnuti dopadu pred potvrzenim,
- pole pro duvod nebo vazbu na ticket,
- zobrazeni dotceneho uctu a objektu,
- potvrzeni pres presny text u kritickych akci,
- expirace schvaleni, aby stare povoleni neslo pouzit pozdeji,
- disabled tlacitko, dokud chybi povinne informace,
- po provedeni jasny vysledek a odkaz na auditni zaznam.

Slaby text:

```text
Opravdu chcete pokracovat?
```

Lepsi text:

```text
Menite ownera workspace "Acme EU" z uzivatele usr_123 na usr_789.
Tato akce zmeni administracni prava a bude zapsana do auditni stopy.
```

To neni jen UX. Je to prevence incidentu.

### 5. Nouzovy rezim musi byt predem popsany

Obcas nastane situace, kdy cekani na druhy par oci muze skodit: bezpecnostni incident, rozbita platba, blokovany zakaznik pred kritickym terminem. Proto ma mit SaaS nouzovy rezim. Ne tajnou vyjimku. Popsany proces.

Nouzovy rezim:

- lze pouzit jen pro definovane typy incidentu,
- vyzaduje duvod a casovy limit,
- automaticky posle notifikaci odpovedne roli,
- zapise vsechny akce do auditni stopy,
- po skonceni vynuti kratky review zapis,
- nesmi trvale obejit pristupova prava.

Priklad:

```text
Emergency override pouzij jen kdyz produkcni incident brani zakaznikovi v zakladni praci
nebo hrozi ztrata dat. Do 24 hodin musi probehnout review: proc byl override potreba,
co se provedlo, jestli byla dotcena osobni data a co upravime, aby se to neopakovalo.
```

Nouzovy rezim bez review je jen administrativni zadni vchod. A zadni vchody maji zvyk rust.

### 6. 45min postup

```text
00-07 min: Sepis deset nejcitlivejsich admin akci.
Role, MFA, export, mazani, billing, import, webhooky, impersonace a slevy mimo pravidla.

07-15 min: Rozdel je na nizky, stredni, vysoky a kriticky dopad.
Ke kazde akci napis, co se stane pri chybe.

15-23 min: Navrhni pravidla schvaleni.
Kde staci role a limit, kde musi byt druhy clovek, kde musi byt emergency override.

23-31 min: Vytvor schvalovaci kartu.
Zadatel, ucet, akce, duvod, dopad, dotcena data, expirace, schvalovatel a vysledek.

31-38 min: Uprav mikrocopy pro jednu kritickou akci.
Text musi rict konkretne, co se meni a proc je to citlive.

38-43 min: Napoj schvaleni na auditni stopu.
Audit musi umet ukazat zadost, schvaleni, provedeni i odmitnuti.

43-45 min: Napis dva testy a jeden provozni dotaz.
Bez schvaleni akce neprojde. Stare schvaleni expirovalo. Kdo dela 24h review emergency override?
```

### Checklist: schvalovani citlivych admin akci

- [ ] Existuje seznam admin akci podle dopadu.
- [ ] Kriticke akce nejdou provest bez druheho kroku nebo schvaleni.
- [ ] Zadatel a schvalovatel nejsou stejny clovek.
- [ ] Schvaleni obsahuje ucet, akci, duvod, dopad, dotcena data a expiraci.
- [ ] UI pred potvrzenim ukazuje konkretni dopad, ne obecnou hlasku.
- [ ] Odmitnute, vyprsene i provedene akce se zapisuji do auditni stopy.
- [ ] Nouzovy rezim ma jasne podminky, casovy limit a povinne review.
- [ ] Bezne support akce nejsou zbytecne brzdene.
- [ ] Pravidla schvalovani jsou popsana pro tym i provoz.
- [ ] Existuji testy pro provedeni bez schvaleni, expiraci a auditni zapis.
- [ ] Zakaznikovi lze vysvetlit, kdo citlivou akci schvalil a proc.

---

## Support eskalace bez datoveho ohnostroje za 45 minut

Support eskalace je okamzik, kdy bezna odpoved prestava stacit a problem musi jit k vyvoji, provozu, billing tymu, security nebo zakladateli. V malem SaaS se to casto dela v chatu: nekdo vlozi screenshot, kus logu, email zakaznika, ID uctu, interni poznamku a prosebne "muzete na to nekdo kouknout?". Funguje to rychle. Do prvniho incidentu, prvniho hledani souvislosti nebo prvni otazky: proc se zakaznicka data valela ve vlakne, kde je nepotrebovalo deset lidi.

Privacy-first eskalace neni pomala. Je jen strukturovana. Cilem je dostat spravnemu cloveku presne tolik kontextu, kolik potrebuje k rozhodnuti nebo oprave, a neudelat z kazdeho problemu maly datovy vybuch. GDPR principy minimalizace, omezeni ucelu a integrity a duvernosti jsou dobry filtr i pro interni komunikaci: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng. OWASP Logging Cheat Sheet navic pripomina, ze citliva data nepatri bezhlave do logu a provoznich zaznamu: https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html.

### 1. Nejdriv rozlis eskalaci od predavani chaosu

Eskalace neni "nevim, tak to poslu dal". Eskalace ma znamenat, ze problem ma jasny dopad, vycerpane zakladni kroky a konkretni otazku pro dalsi roli.

Tri typy eskalace:

| Typ | Kdy nastava | Komu patri |
| --- | --- | --- |
| Produktova | Zakaznik nerozumi toku nebo mu chybi ocekavana moznost. | Product owner, zakladatel, UX. |
| Technicka | Funkce pada, data se nepropisuji, integrace vraci chyby. | Vyvoj, provoz. |
| Rizikova | Problem se tyka pristupu, osobnich dat, fakturace, mazani nebo incidentu. | Security, provoz, odpovedna role. |

Kazdy typ potrebuje jiny kontext. Product owner nepotrebuje cele request logy. Vyvojar nepotrebuje osobni obsah zakaznicke zpravy, pokud staci ID chyby a kroky reprodukce. Security nepotrebuje dramaticky popis z chatu, ale cas, dopad, dotcena data, aktory a provedene kroky.

Slaba eskalace:

```text
Acme pise, ze jim to nejde. Tady je screenshot celeho uctu a export CSV, pls help.
```

Lepsi eskalace:

```text
Ticket sup_842, ucet acc_456, dopad P2: import kontaktu konci chybou 422.
Zakaznik zkousel 3x mezi 09:12-09:18 UTC. Soubor je ulozeny v bezpecnem uploadu,
do vlakna ho neprikladam. Potrebuji zjistit, jestli chyba vznikla validaci nebo parserem.
```

Ten druhy text je kratsi, bezpecnejsi a pouzitelnejsi. Zazrak, ktery se vejde do ctyr radku. Skoro podezrele.

### 2. Eskalacni karta musi mit minimalni, ale dostatecny kontext

Zaved jednu sablonu. Ne proto, aby support vyplnoval formular pro radost z poli, ale aby dalsi clovek nemusel lovit podstatu ve dvaceti zpravach.

Minimalni eskalacni karta:

| Pole | Priklad |
| --- | --- |
| `ticket_id` | `sup_842` |
| `account_id` | `acc_456` |
| `priority` | `P1`, `P2`, `P3`, `P4` |
| `reported_at` | UTC cas |
| `customer_impact` | import kontaktu nejde dokoncit |
| `expected_result` | validni CSV projde nahledem |
| `actual_result` | API vraci 422 bez vysvetleni |
| `steps_tried` | kontrola formatu, novy upload, jiny prohlizec |
| `safe_artifacts` | request ID, trace ID, anonymizovany priklad radku |
| `restricted_artifacts` | puvodni soubor, screenshot s osobnimi daty |
| `question_for_owner` | validace nebo parser? |
| `next_update_due` | kdy se zakaznikovi ozveme |

Karta ma jasne oddelit, co muze jit do bezneho interniho vlakna, a co patri do nastroje s pristupem podle role. Zakaznicky export, screenshot s osobnimi daty, faktura, obsah dokumentu nebo webhook payload nepatri do obecneho chatu. Kdyz je nekdo opravdu potrebuje, ziska je pres produktovy admin, auditovanou prilohu, ticket system nebo jiny kontrolovany kanal.

### 3. Pravidlo dvou vrstev: verejne vlakno a citlivy trezor

V praxi funguje jednoduchy model:

- Vlakno pro koordinaci obsahuje ID, dopad, stav, vlastnika a dalsi krok.
- Citlive artefakty jsou ulozene oddelene s omezenym pristupem a retenci.

Do koordinacniho vlakna patri:

- `ticket_id`, `account_id`, `request_id`, `trace_id`,
- priorita a dopad na zakaznika,
- kroky reprodukce bez osobnich hodnot,
- jmeno interniho vlastnika,
- dalsi update a stav opravy.

Do koordinacniho vlakna nepatri:

- cele CSV, PDF, faktury a exporty,
- hesla, tokeny, API klice nebo session hodnoty,
- screenshoty s osobnimi udaji, pokud nejsou redigovane,
- obsah zakaznickych dokumentu,
- interni dohady typu "zakaznik to urcite rozbil sam".

**Codyho komentar:** Chat je skvely na koordinaci, spatny archiv a priserne misto pravdy. Kdyz v nem lezi zakaznicka data, vznikne datovy sklad s memy a nulovou retenci. To neni produktova strategie, to je archeologie budoucich problemu.

### 4. Priorita musi ridit reakci, ne hlasitost

Nejhlasitejsi zakaznik nemusi mit nejvetsi incident. A tichy zakaznik s rozbitou fakturaci muze byt prave ten, kde horime. Priority proto definuj podle dopadu.

Jednoducha matice:

| Priorita | Dopad | Reakce |
| --- | --- | --- |
| P1 | Sluzba je nedostupna, hrozi ztrata dat nebo bezpecnostni incident. | Okamzite vlastnictvi, incident rezim, pravidelne updaty. |
| P2 | Zakaznik nemuze dokoncit dulezity tok, existuje omezeny workaround. | Vlastnik dnes, cas dalsiho updatu, jasna oprava nebo mitigace. |
| P3 | Problem omezuje praci, ale neblokuje zakladni hodnotu. | Zaradit do bezne fronty s terminem odpovedi. |
| P4 | Dotaz, kosmetika, navrh zlepseni. | Odpovedet, evidovat, spojit s product feedbackem. |

Priorita se muze zmenit. Kdyz P3 odhali unik dat, stava se z nej rizikova eskalace. Kdyz P1 ma rychlou mitigaci a zadny dopad na data, muze prejit do postmortem a normalni opravy. Dulezite je zmenu zapsat, ne ji ztratit v pocitu.

ENISA ve svem guide pro male a stredni firmy doporucuje pripravovat se na incidenty predem, vcetne roli, odpovednosti a zakladnich postupu: https://www.enisa.europa.eu/publications/cybersecurity-guide-for-smes. Eskalacni karta je mala, ale prakticka cast tehle pripravy.

### 5. Vlastnik eskalace neni ten, kdo naposledy napsal

Kazda eskalace musi mit jednoho vlastnika. Ne nutne cloveka, ktery vsechno opravi. Vlastnika, ktery hlida, ze vec ma dalsi krok, zakaznik dostane update a po vyreseni zustane kratky zaznam.

Role vlastnika:

- potvrdi prioritu,
- doplni chybejici kontext,
- urci dalsiho resitele,
- hlida cas dalsiho updatu zakaznikovi,
- rozhodne, zda jde o incident, bug, product feedback nebo provozni ukol,
- po vyreseni doplni pricinu a preventivni opatreni.

Bez vlastnika vznikne ping-pong. Support ceka na vyvoj, vyvoj ceka na logy, provoz ceka na potvrzeni dopadu, zakaznik ceka na odpoved a vsichni cekaji na zazrak. Ten byva vytizeny.

### 6. 45min postup

```text
00-06 min: Sepis pet poslednich eskalaci.
U kazde napis, kdo ji resil, co chybelo a jaka data se zbytecne kopirovala.

06-12 min: Definuj tri typy eskalace.
Produktova, technicka a rizikova. Ke kazde pridej vlastnika nebo roli.

12-20 min: Vytvor eskalacni kartu.
Ticket, ucet, priorita, dopad, kroky, request ID, citlive prilohy a konkretni otazka.

20-27 min: Rozdel komunikaci na dve vrstvy.
Co smi do koordinacniho vlakna a co patri do kontrolovaneho uloziste nebo adminu.

27-34 min: Nastav prioritu P1-P4 podle dopadu.
Ne podle hlasitosti zakaznika ani podle toho, kdo ma dnes nejvic stresu.

34-40 min: Urcuj vlastnika.
Kazda otevrena eskalace ma cloveka, dalsi krok a cas dalsiho updatu.

40-45 min: Dopln jednu kontrolu.
Nahodny review peti eskalaci tydne: nebyla sdilena zbytecna data a byl jasny vysledek?
```

### Checklist: support eskalace bez datoveho ohnostroje

- [ ] Existuji definovane typy eskalace: produktova, technicka a rizikova.
- [ ] Support vi, kdy eskalovat a kdy jeste doplnit zakladni informace.
- [ ] Eskalacni karta obsahuje ticket, ucet, prioritu, dopad, kroky, artefakty a konkretni otazku.
- [ ] Koordinacni vlakno neobsahuje cele exporty, faktury, tokeny ani screenshoty s osobnimi daty.
- [ ] Citlive artefakty jsou ulozene oddelene s omezenym pristupem a retenci.
- [ ] Priority P1-P4 jsou popsane podle dopadu, ne podle hlasitosti.
- [ ] Kazda eskalace ma vlastnika a cas dalsiho updatu zakaznikovi.
- [ ] Rizikova eskalace umi prejit do incident rezimu.
- [ ] Po vyreseni zustane kratky zapis priciny, opravy a prevence.
- [ ] Tydne se kontroluje maly vzorek eskalaci kvuli datove hygiene.
- [ ] Zakaznik dostane srozumitelnou odpoved bez interniho sumu a vymluv.

---

## Bug triage a technicky dluh bez nekonecneho backlogu za 45 minut

Bug backlog se umi tvarit jako produktova pamet. Ve skutecnosti je to casto sklad odlozenych rozhodnuti. Male SaaS tymy nepotrebuji stovky ticketu s neurcitym stavem. Potrebuji rychle poznat, co ohrozuje zakaznika, data, penize, duveru nebo tempo vyvoje, a co je jen neprijemny sum.

Cilem 45min triage neni vse opravit. Cilem je udelat z chaosu rozhodnutelnou frontu: co opravujeme ted, co planujeme, co sledujeme a co zavirame.

**Codyho komentar:** Backlog neni svaty archiv. Kdyz ticket sest mesicu nikomu nechybel, mozna to neni dluh, ale jen digitalni prach s dobrym sebevedomim.

### 1. Oddel bug, dluh, riziko a napad

Do jedne fronty se casto michaji ctyri ruzne veci:

| Typ | Co to znamena | Typicka reakce |
| --- | --- | --- |
| Bug | Produkt se chova jinak, nez ma. | Opravit podle dopadu a opakovatelnosti. |
| Technicky dluh | Kod nebo provoz ztezuje dalsi zmeny. | Naplanovat s jasnym duvodem a hranici. |
| Riziko | Muze vzniknout bezpecnostni, datovy nebo provozni problem. | Vyhodnotit dopad, mitigovat, priradit vlastnika. |
| Napad | Mohlo by to byt lepsi nebo hezci. | Presunout do product discovery nebo zavrit. |

Nejvetsi chyba je oznacit vsechno jako bug. Pak se v jedne fronte potka rozbity checkout, nehezka mezera v UI, refaktor validaci a napad na novy dashboard. Vysledek: nikdo nevi, co ma bolet jako prvni.

### 2. Kazdy zaznam potrebuje reprodukci nebo rozhodnuti

Minimalni bug karta:

```text
Nazev:

Typ:
[bug / technicky dluh / riziko / napad]

Dopad:
[uzivatel / ucet / data / platby / admin / provoz]

Kroky k reprodukci:
1.
2.
3.

Ocekavane chovani:

Skutecne chovani:

Dukaz:
[screenshot bez osobnich dat / request ID / log ID / verze / prohlizec]

Obchazka:
[existuje/neexistuje]

Navrhovane rozhodnuti:
[opravit ted / naplanovat / sledovat / zavrit]

Vlastnik:
```

Kdyz nejde bug reprodukovat, neznamena to automaticky zavrit. Znamena to zmenit typ prace: doplnit logging, zeptat se na chybejici kontext, pridat kontrolu nebo ticket sloucit s podobnym vzorem. Ale "nejde reprodukovat" bez dalsiho kroku je jen slusnejsi forma ztraty casu.

### 3. Priorita podle dopadu, ne podle hlasitosti

Jednoducha prioritizace:

| Priorita | Kdy ji pouzit | Priklad |
| --- | --- | --- |
| P0 | Bezpecnost, ztrata dat, rozbite platby nebo velka nedostupnost. | Uzivatel vidi cizi fakturu, nejde se prihlasit cele firme. |
| P1 | Hlavni tok je rozbity pro cast zakazniku a workaround je slaby. | Novy uzivatel nedokonci onboarding kvuli validaci. |
| P2 | Produkt funguje, ale bug zpomaluje praci nebo kazi duveru. | Export ma spatne razeni, ale data jsou spravna. |
| P3 | Kosmetika, okrajovy pripad, maly diskomfort. | Preteceny text v prazdnem stavu na vzacnem rozliseni. |
| Debt | Neni incident, ale zhorsuje rychlost nebo riziko budoucich zmen. | Duplicitni billing logika ve dvou modulech. |

Privacy-first filtr pridej pred beznou prioritizaci:

- Muze problem odhalit osobni, zakaznicka nebo interni data?
- Muze problem prodlouzit retenci dat, ktera mela byt smazana?
- Muze problem obejit souhlas, prava nebo auditni stopu?
- Muze problem poslat data do spatne integrace?
- Muze problem ztizit export, mazani nebo obnovu dat?

Pokud je odpoved ano, ticket neni jen "technicky". Je to duverove riziko a potrebuje vlastnika.

### 4. Dluh musi mit cenu i stopku

Technicky dluh se neopravuje proto, ze existuje. Opravuje se, kdyz blokuje konkretni zmenu, zvysuje provozni riziko nebo prodrazuje caste upravy.

Dobry dluhovy ticket rika:

- ktery workflow ztezuje,
- jak casto na nej tym narazi,
- co se stane, kdyz zustane dalsi mesic,
- jak mala oprava by stacila,
- kde je hranice, aby se z toho nestal refaktor bez dna.

**Spatny ticket:**

> Refaktorovat dashboard.

**Lepsi ticket:**

> Sjednotit vypocet aktivnich uctu ve trech mistech. Dnes se metrika lisi v adminu, billing reportu a QBR exportu. Cilem je jeden helper a testy pro tri stavy uctu. Mimo rozsah: redesign dashboardu a nove metriky.

Rozdil neni v poctu slov. Rozdil je v tom, ze druha verze se da dokoncit.

### 5. Zavirej stare veci bez sentimentu

Jednou mesicne projdi stare bugy a dluhy. Kazdy zaznam musi skoncit v jednom z peti stavu:

| Stav | Vyklad |
| --- | --- |
| Opravit ted | Ma dopad a jasny dalsi krok. |
| Naplanovat | Neni urgentni, ale patri do konkretniho cyklu. |
| Sledovat | Chybi dukaz nebo se ceka na opakovani. Ma datum dalsi kontroly. |
| Sloucit | Je to stejny vzor jako jiny ticket. |
| Zavrit | Neni relevantni, neexistuje dukaz, nebo cena prevysuje prinos. |

Zavreni neni selhani. Selhani je drzet stovky neplatnych ticketu, kvuli kterym nikdo neveri ani tem dulezitym.

### 6. 45min postup

```text
00-05 min: Vytahni 20 nejstarsich a 20 nejnovejsich zaznamu.
Nemusis cist cely backlog. Potrebujes vzorek reality.

05-12 min: Oznac typ.
Bug, technicky dluh, riziko nebo napad. Smichane tickety rozdel.

12-20 min: Pridej privacy-first filtr.
U kazde veci se zeptej, zda muze ovlivnit data, souhlas, audit, export, mazani nebo integrace.

20-28 min: Prirad prioritu.
P0/P1/P2/P3/Debt podle dopadu, ne podle emoce.

28-35 min: Vyber pet rozhodnuti.
Dve opravy ted, jeden dluh do planu, jeden zaznam sledovat, jeden zavrit.

35-41 min: Dopln chybejici reprodukci.
U dulezitych veci pridej kroky, dukaz, obchazku a vlastnika.

41-45 min: Nastav pristi review.
Datum, vlastnik, pravidlo pro zavirani starych veci a maximum otevrenych P3 ticketu.
```

### Checklist: bug triage bez nekonecneho backlogu

- [ ] Bugy, technicky dluh, rizika a napady nejsou v jedne nerozlisene hromade.
- [ ] Kazdy dulezity bug ma kroky k reprodukci nebo jasny dalsi diagnosticky krok.
- [ ] Priorita vychazi z dopadu na uzivatele, data, platby, provoz a duveru.
- [ ] Privacy-first filtr zachyti problemy s daty, souhlasem, exportem, mazanim a integracemi.
- [ ] Technicky dluh ma popsany konkretni dopad, maly rozsah a hranici hotovo.
- [ ] Stare tickety se pravidelne zaviraji, slucuji nebo posouvaji do planu.
- [ ] P0/P1 veci maji vlastnika a cas dalsiho updatu.
- [ ] Kosmeticke a okrajove veci neblokujou opravy hlavniho toku.
- [ ] Backlog review konci rozhodnutim, ne jen prebarvenymi labely.
- [ ] Tymy vedi, kdy je lepsi opravit problem hned a kdy nejdriv dopsat pozorovani.
- [ ] Zavrene tickety maji kratky duvod, aby se stejna debata nevracela kazdy mesic.

---

## Aktualizace zavislosti bez patchovaci paniky za 60 minut

Zavislosti nejsou jen radky v `package.json`, `composer.json`, `requirements.txt` nebo `go.mod`. Jsou to cizi rozhodnuti ve tvem produktu. Vetsinou pomahaji, obcas nesou zranitelnost, opustenou knihovnu, problem s licenci nebo riziko v build procesu. OWASP v Top 10 2025 rozsiruje pohled z "vulnerable and outdated components" na sirsi tema software supply chain failures: https://owasp.org/Top10/2025/0x00_2025-Introduction/. Prakticky preklad: nestaci jednou za cas kliknout "update all" a doufat, ze testy zachyti realitu.

Privacy-first SaaS potrebuje aktualizacni rytmus, ktery chrani uzivatele, data i cas maleho tymu. Cilem neni mit vzdy nejnovejsi verzi vseho. Cilem je vedet, co pouzivas, co je kriticke, co je zranitelne, co se da rychle opravit a kdy je lepsi udelat planovanou migraci.

### 1. Udelej inventar zavislosti jako mapu rizik

Prvni krok neni skener. Prvni krok je jednoduchy inventar:

| Oblast | Priklady | Proc na tom zalezi |
| --- | --- | --- |
| Runtime zavislosti | framework, auth knihovna, ORM, payment SDK | Bezi v produkci a muze ovlivnit data. |
| Build zavislosti | bundler, transpiler, CI akce, pluginy | Muze menit artefakty, ktere nasazujes. |
| Dev zavislosti | test runner, linter, lokalni nastroje | Mensi produkcni dopad, ale stale riziko v CI. |
| Infrastrukturni image | Docker base image, databaze, reverse proxy | Casto obsahuje OS balicky a vlastni CVE. |
| Externi skripty | widgety, embed, CDN knihovny | Bezi u uzivatele a mohou sbirat data. |

U kazde kriticke zavislosti si zapis vlastnika, kde se aktualizuje, jak se testuje a co se stane pri rozbiti. Bez vlastnika je zavislost jen ticha dohoda, ze se na ni vsichni budou divat pozde.

### 2. Automat najde problem, clovek rozhodne prioritu

Software Composition Analysis nastroje pomahaji najit verejne zname zranitelnosti. OWASP Dependency-Check popisuje SCA pristup, ktery identifikuje komponenty a hlasi vazby na verejne CVE: https://owasp.org/www-project-dependency-check/. OWASP Dependency-Track jde dal pres praci se SBOM a rizikem softwaroveho retezce: https://owasp.org/www-project-dependency-track/. OpenSSF Scorecard zase hodnoti bezpecnostni signaly open source projektu: https://scorecard.dev/.

Tohle jsou vstupy, ne verdikt. Prioritu nastav podle kombinace:

- Je zranitelnost verejne zneuzivana? CISA KEV katalog je dobry signal pro urgentni pozornost: https://www.cisa.gov/known-exploited-vulnerabilities-catalog.
- Bezi knihovna v produkci, nebo jen pri lokalnim vyvoji?
- Dotyka se autentizace, autorizace, platby, uploadu, parsovani souboru nebo osobnich dat?
- Existuje bezpecny patch bez velke migrace?
- Mame testy na tok, ktereho se update dotkne?
- Da se riziko docasne omezit konfiguraci, vypnutim funkce nebo blokaci vstupu?

**Codyho komentar:** Alert s vysokym CVSS neni automaticky nejdulezitejsi vec v produktu. Kriticka knihovna v admin exportu muze byt horsi nez hlasita zranitelnost v dev nastroji, ktery se do produkce nikdy nedostane. Panika je spatny prioritizacni algoritmus, i kdyz ma cervenou ikonku.

### 3. Rozdel aktualizace na tri proudy

Maly tym potrebuje jednoduchy system:

| Proud | Priklad | Reakce |
| --- | --- | --- |
| Emergency patch | aktivne zneuzivana zranitelnost v produkcni ceste | stejny den: owner, fix, smoke test, nasazeni, zapis |
| Bezpecnostni udrzba | vysoky nebo stredni risk bez aktivniho zneuziti | tento tyden: update branch, testy, plan release |
| Hygiena | minor verze, deprecace, dev tooling | pravidelny maintenance slot |

Do emergency proudu nepatri kazdy roboticky report. Kdyz vsechno hori, nehori nic, jen tym smrdi kourem. Emergency znamena realny dopad na data, dostupnost, autentizaci, integritu nebo duveru.

### 4. Patch karta misto chaotickeho vlaku commitu

Pro dulezite aktualizace pouzij kratkou kartu:

```text
PATCH KARTA

Nazev:
Dotcene zavislosti:
Typ: emergency / bezpecnostni udrzba / hygiena
Duvod:
Produkci dopad:
Datovy dopad:
Dotcene toky:
Testy:
Rollback:
Komunikace:
Vlastnik:
Termin:
```

Datovy dopad je povinny. Pokud update meni zpusob logovani, exportu, autentizace, analytiky, uploadu nebo komunikace s dodavatelem, neni to jen technicka zmena. Je to zmena v tom, jak produkt zachazi s duverou.

### 5. Testuj chovani, ne jen instalaci

`npm audit fix` nebo podobny prikaz umi zmenit strom zavislosti, ale sam o sobe nedokazuje, ze produkt porad dela spravnou vec. Minimalni sada overeni:

- instalace zavislosti probehne ciste z lockfile,
- unit nebo integracni testy pro dotcene oblasti projdou,
- hlavni uzivatelsky tok funguje,
- login, odhlaseni a reset hesla se nerozbily,
- formular, checkout nebo export neuklada vic dat nez predtim,
- logy po smoke testu neobsahuji tajemstvi ani cele payloady,
- rollback je skutecne mozny, ne jen vysloveny.

NIST SSDF bere bezpecny vyvoj jako sadu praktik napric zivotnim cyklem softwaru, ne jako jednorazovy audit pred releasem: https://csrc.nist.gov/pubs/sp/800/218/final. To sedi i pro maly SaaS. Aktualizace zavislosti je soucast vyvoje, ne uklidova prace pro patek vecer.

### 6. 60min postup

```text
0-10 min: Projdi nove alerty.
Oddel produkcni runtime, build, dev tooling a infrastrukturu.

10-20 min: Oznac dopad.
Autentizace, osobni data, platby, uploady, admin, exporty a verejne endpointy maji prednost.

20-30 min: Vyber akci.
Emergency patch dnes, bezpecnostni udrzba tento tyden, hygiena do maintenance slotu.

30-40 min: Vytvor patch kartu.
Zapis duvod, dotcene toky, testy, rollback, datovy dopad a vlastnika.

40-52 min: Proved nejmensi bezpecnou zmenu.
Aktualizuj jednu logickou skupinu zavislosti, ne cely vesmir.

52-60 min: Over a uzavri.
Spust testy, smoke test, zkontroluj diff/lockfile a zapis dalsi krok.
```

### Checklist: aktualizace zavislosti bez patchovaci paniky

- [ ] Vim, ktere zavislosti bezi v produkci a ktere jsou jen vyvojove.
- [ ] Kriticke zavislosti maji vlastnika a jednoduchy testovaci postup.
- [ ] Alerty se tridi podle skutecneho dopadu, ne jen podle barvy v dashboardu.
- [ ] Aktivne zneuzivane zranitelnosti maji samostatny emergency tok.
- [ ] Aktualizace s dopadem na data maji popsanou datovou zmenu.
- [ ] Lockfile je soucast kontroly, ne nahodny sum v commitu.
- [ ] Testy overuji dotcene produktove toky, nejen instalaci balicku.
- [ ] Rollback existuje pred nasazenim rizikove aktualizace.
- [ ] Opustene nebo malo udrzovane knihovny maji migracni plan.
- [ ] Externi skripty a CDN se neposuzuji jen jako frontend detail.
- [ ] Po patchi zustane kratky zapis: co se menilo, proc, jak se overilo a co jeste hlidat.

---

## API limity a chybove odpovedi bez trestani zakazniku za 60 minut

Jakmile SaaS nabidne API, webhooks, import nebo verejne endpointy, prestava byt provoz jen otazka hezke aplikace. Kazdy klient muze omylem poslat tisic requestu misto deseti. Kazda integrace muze opakovat stejnou chybu dokola. A kazdy utocnik doufa, ze tvoje ochrana bude bud zadna, nebo tak hruba, ze rozbije normalni zakazniky.

Privacy-first pristup k API limitum neni "sledujme vsechny co nejvic". Je to opacne: chran sluzbu pomoci nejnizsi potrebne identity, citelnych pravidel a odpovedi, ktere klientovi pomuzou opravit chovani. Rate limit, error format a abuse ochrana jsou soucast produktoveho UX. Jen ho misto cloveka cte vyvojar, worker nebo integrace ve dve rano.

OWASP API Security Top 10 2023 upozornuje mimo jine na unrestricted resource consumption a broken authentication: https://owasp.org/API-Security/editions/2023/en/0x11-t10/. RFC 6585 definuje HTTP status `429 Too Many Requests`: https://datatracker.ietf.org/doc/html/rfc6585. RFC 9457 zase popisuje standardni problem details format pro HTTP API chyby: https://datatracker.ietf.org/doc/html/rfc9457. Prakticky preklad: kdyz klient brzdis, rekni proc, na jak dlouho a co ma udelat jinak.

### 1. Nejdriv rozdel limity podle rizika

Jeden globalni limit pro cele API vypada jednoduse, ale casto vytvari nespravedlnost. Import, prihlaseni, webhook retry a cteni verejneho katalogu nejsou stejna operace. Jiny dopad maji na infrastrukturu, data i zakaznika.

Rozdel endpointy do tri skupin:

| Skupina | Priklad | Co chranis |
| --- | --- | --- |
| Kriticke a citlive | login, reset hesla, export dat, admin akce | ucet, data, autorizaci |
| Nakladove | import, reporty, hromadne exporty, AI zpracovani | vykon, fronty, fakturacni naklad |
| Bezny provoz | cteni seznamu, detail zaznamu, stav jobu | dostupnost a stabilitu |

Limity potom navrhuj podle toho, co se muze pokazit:

- Pri loginu chran ucet, ne jen server.
- Pri exportu chran data a kapacitu.
- Pri importu chran databazi, queue a cistotu dat.
- Pri webhooks chran prijemce pred retry bouri.
- Pri verejnem API chran plan zakaznika i infrastrukturu.

**Codyho komentar:** Limit neni trest. Je to zabradli. Kdyz dobreho zakaznika bez vysvetleni shodis na `429`, prave jsi zabradli natrel na neviditelno. Elegantni asi jako sklenene dvere bez nalepky.

### 2. Vyber identitu limitu, ne osobni slozku

Rate limit musi byt k necemu privazany. Spatny vyber identity bud nic neochrani, nebo vytvori zbytecne osobni sledovani.

Prakticke varianty:

| Identita | Kdy se hodi | Pozor |
| --- | --- | --- |
| API klic | server-to-server integrace | rotace, vlastnik, unik v logu |
| Account ID | B2B produkt a tymove pouziti | nesmi trestat vsechny za jeden rozbity worker bez moznosti zjistit zdroj |
| User ID | citlive uzivatelske akce | nepouzivat pro marketingovy profil |
| IP adresa | hruba ochrana verejnych endpointu | NAT, kancelare, mobilni site, osobni udaj v GDPR kontextu |
| Job ID / import ID | dlouhe operace | musi mit expiraci a vlastnika |

Privacy-first default:

- Pro prihlasene API preferuj account nebo API klic.
- IP adresu pouzij jako doplnkovy technicky signal, ne jako hlavni produktovy profil.
- U citlivych akci kombinuj limit podle uctu, uzivatele a typu akce.
- Do analytiky neposilej surove IP, tokeny, request body ani query s osobnimi udaji.
- Do logu ukladej `limit_bucket`, `endpoint_group`, `account_id` nebo hash klice, pokud to staci.

Kdyz potrebujes silnejsi abuse obranu, zapis si duvod. "Boti nam plni formular" je duvod. "Jednou by se to mohlo hodit pro segmentaci" neni duvod. To je zacatek datoveho skluzavky.

### 3. Odpoved `429` musi byt navod, ne zed

Klient, ktery narazi na limit, potrebuje vedet tri veci:

- co se stalo,
- kdy to muze zkusit znovu,
- jak problem dlouhodobe vyresit.

Minimalni odpoved:

```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/problem+json
Retry-After: 60
```

```json
{
  "type": "https://example.com/problems/rate-limit",
  "title": "Rate limit exceeded",
  "status": 429,
  "detail": "Import API reached the per-account write limit. Retry after 60 seconds.",
  "instance": "/api/imports/req_123",
  "limit_scope": "account",
  "retry_after_seconds": 60
}
```

RFC 9457 problem details se hodi proto, ze klienti nemusi parsovat nahodny text. Ty zase nemusis vymyslet vlastni format pro kazdy endpoint. Jen si dej pozor, aby `detail` neprozrazoval citlive informace. Odpoved nema rikat "user rethy@dreamind.cz exceeded login limit from IP..." pokud to nepotrebuje prijemce videt.

Pravidla pro chybove odpovedi:

- Pouzij spravny HTTP status, ne vsechno jako `200` s internim `error=true`.
- U limitu pridej `Retry-After`, kdyz klient muze rozumne cekat.
- Dej chybe stabilni `type`, aby se dala dokumentovat.
- Neposilej stack trace, SQL chyby, tokeny ani interni nazvy sluzeb.
- U validacnich chyb rekni, ktere pole je spatne a proc.
- U autorizace nerozlisuj zbytecne "ucet existuje" a "spatne heslo".

### 4. Backoff a retry: chran obe strany

Retry bez pravidel je zesilovac incidentu. Kdyz integrace pri chybe okamzite opakuje request, maly problem se rychle zmeni v provozni tlak. Proto musi byt retry politika soucast dokumentace i implementace.

Doporuceny zaklad:

- Klient respektuje `Retry-After`.
- Worker pouziva exponencialni backoff s jitterem.
- Neopakuji se chyby validace typu `400`, dokud se nezmeni vstup.
- `401` a `403` vedou k oprave pristupu, ne k nekonecnemu retry.
- `429` a cast `5xx` chyb muzou jit do opakovani podle limitu.
- Po vycerpani retry vznikne viditelny failed stav, ne ticha ztrata.

Sablona retry pravidla:

```text
Operace:

Opakujeme pri:
[429 / 502 / 503 / timeout]

Neopakujeme pri:
[400 / 401 / 403 / 404 podle kontextu]

Max pokusu:

Backoff:

Jitter:

Co se stane po selhani:

Co logujeme:

Co nikdy nelogujeme:
```

U webhooku a importu pridej idempotency key. Bez nej muze retry vytvorit duplicity, dvoji faktury, dva importy nebo dvakrat odeslane notifikace. Idempotence neni luxusni vzor pro velke firmy. Je to levny zpusob, jak si neudelat vlastni support peklo.

### 5. Dokumentuj limity jako soucast produktu

API limit, o kterem vi jen backend, je budoucni support ticket. Zakaznik potrebuje vedet, jak se chovat normalne, co se stane pri prekroceni a kdy ma pozadat o vyssi limit.

Dokumentace by mela obsahovat:

- limity podle planu nebo typu endpointu,
- rozdil mezi ctecimi a zapisovacimi operacemi,
- chovani pri prekroceni limitu,
- ukazku `429` odpovedi,
- retry doporuceni,
- kontakt nebo postup pro navyseni limitu,
- vysvetleni, jaka data se pouzivaji pro vyhodnoceni limitu.

**Priklad mikrocopy do API dokumentace:**

```text
Limity pocitame primarne na urovni accountu a API klice. IP adresu pouzivame jen jako technicky signal pro ochranu verejnych endpointu a kratkodobou abuse detekci. Do limitovacich logu neukladame request body ani obsah importovanych dat.
```

Tohle je mala veta, ale pro privacy-first B2B zakaznika muze rozhodnout vic nez dalsi odznacek v patice.

### 6. 60min postup

```text
0-10 min: Vyber jeden API tok.
Zacni importem, exportem, webhookem nebo loginem. Ne celou platformou.

10-20 min: Popis riziko.
Co se stane pri moc mnoha requestech, retry smycce nebo utoku?

20-30 min: Navrhni limit.
Zvol scope: API klic, account, user, endpoint group nebo kombinaci.

30-40 min: Navrhni error odpoved.
Pouzij 429, Retry-After a problem details format bez citlivych detailu.

40-50 min: Napis retry pravidla.
Co klient opakuje, co neopakuje, kolikrat a s jakym backoffem?

50-60 min: Dopln dokumentaci a test.
Priprav ukazku odpovedi, jeden test limitu a kontrolu logu.
```

### Checklist: API limity bez datoveho hladu

- [ ] Endpointy jsou rozdelene podle rizika a nakladu.
- [ ] Limity nejsou jeden hruby globalni vypinac pro cele API.
- [ ] Identita limitu pouziva nejmensi potrebny signal.
- [ ] IP adresa neni hlavni produktovy profil, pokud existuje lepsi scope.
- [ ] `429` odpoved rika, kdy a jak ma klient retry zkusit.
- [ ] Chybove odpovedi maji stabilni format, idealne podle RFC 9457.
- [ ] Error detail neprozrazuje osobni data, tokeny ani interni infrastrukturu.
- [ ] Retry pravidla rozlisuji validacni chyby, autorizaci, limity a docasne vypadky.
- [ ] Dlouhe operace a webhooky pouzivaji idempotenci.
- [ ] Dokumentace API ukazuje limity, priklad chyby a postup pro navyseni.
- [ ] Logy limitu maji retenci a neobsahuji request body.
- [ ] Support vi, jak rozeznat abuse, rozbitou integraci a legitimni potrebu vyssiho limitu.

---

## CSV exporty a reporty bez datoveho vysavace za 45 minut

CSV export vypada nevinne: par sloupcu, tlacitko "Stahnout" a hotovo. V SaaS produktu je to ale hranice, kde se data velmi snadno presunou z kontrolovane aplikace do notebooku, sdilene slozky, emailove prilohy nebo tabulky, ktera prezije pet internich reorganizaci. Privacy-first export nema zakaznikovi branit v praci. Ma mu dat pouzitelna data bez toho, aby se z kazdeho reportu stal maly datovy vybuch.

Technicky zaklad CSV popisuje RFC 4180, vcetne oddeleni zaznamu po radcich, volitelne hlavicky a escapovani uvozovek a carek: https://www.rfc-editor.org/rfc/rfc4180. Bezpecnostni cast je mene poeticka: OWASP upozornuje na CSV Injection, kdy spreadsheet muze bunku zacinajici napriklad `=`, `+`, `-`, `@`, tabulatorem nebo carriage returnem vyhodnotit jako vzorec: https://owasp.org/www-community/attacks/CSV_Injection. A OWASP Logging Cheat Sheet pripomina, ze logy nemaji zbytecne obsahovat citliva data ani cele vstupy: https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html.

### 1. Export neni databazovy dump

Prvni pravidlo: exportuj produktovy pohled, ne interni schema. Zakaznik nepotrebuje videt vsechny sloupce, ktere mas v tabulce. Potrebuje odpovedet na konkretni otazku: "Ktere faktury jsou po splatnosti?", "Kteri uzivatele jsou aktivni?", "Jake tickety cekaji na reakci?" nebo "Co si mam prenest do jineho systemu?"

Rozdel exporty na tri typy:

| Typ exportu | K cemu slouzi | Co do nej patri |
| --- | --- | --- |
| Operativni report | Rychla prace v tymu | Jen pole nutna pro rozhodnuti v dalsich dnech |
| Auditni export | Kontrola, compliance, interni revize | Stabilni sloupce, casy, identifikatory, stav a duvod |
| Prenos dat | Migrace nebo odchod zakaznika | Dokumentovany format, kompletni relevantni data, jasna retence |

Kdyz je export urceny pro operativu, nema v nem byt interni poznamka supportu, cele telo komunikace ani historicka metadata, ktera nikdo nepouzije. Kdyz je export urceny pro prenos dat, nesmi byt osekanou tabulkou jen proto, ze se to snadneji generuje.

**Priklad spatneho exportu:**

Soubor `users.csv` obsahuje email, jmeno, roli, posledni prihlaseni, IP adresu posledniho prihlaseni, interni poznamku admina, hash externiho ID, stav billing profilu a posledni text support ticketu.

**Priklad lepsiho exportu:**

Operativni report "Uzivatele a role" obsahuje `user_id`, `email`, `role`, `status`, `last_active_at` a `created_at`. Auditni export pristupu je oddeleny, ma vlastni opravneni a obsahuje jen to, co je potreba pro kontrolu pristupu.

### 2. Sloupce schvaluj jako datovy kontrakt

Kazdy export by mel mit kratkou kartu. Ne v enterprise wiki, kde ji najdou jen archeologove, ale pobliz kodu, dokumentace nebo admin rozhrani.

Sablona exportni karty:

```text
Nazev exportu:
Ucel:
Kdo muze export spustit:
Typicke pouziti:
Sloupce a vyznam:
Osobni udaje:
Citliva nebo interni data:
Retence v aplikaci:
Retence stazeneho souboru doporucena zakaznikovi:
Format a kodovani:
Limit velikosti:
Auditni stopa:
```

Minimalni pravidlo pro sloupce: kazdy sloupec musi mit vlastnika argumentu. Kdyz nikdo neumi rict, k cemu slouzi, sloupec ven nepatri. "Mozna se bude hodit" je pozvanka do datoveho sberneho dvora.

### 3. CSV Injection res pred stazenim, ne az po incidentu

Spreadsheety umi byt az prekvapive aktivni. Pokud exportujes hodnoty zadane uzivateli, utocnik muze do pole vlozit text, ktery tabulkovy procesor po otevreni vyhodnoti jako vzorec. OWASP proto doporucuje pristup, kdy jsou pole obalena uvozovkami, vnitrni uvozovky escapovane a rizikove bunky osetrene tak, aby se neprovedly jako formule.

Prakticky postup:

- Vsechny hodnoty serializuj pres CSV knihovnu, ne rucnim spojovanim stringu.
- Pole obsahujici carku, uvozovku nebo novy radek nech korektne escapovat.
- U hodnot z uzivatelskeho vstupu kontroluj zacatek bunky pred znaky `=`, `+`, `-`, `@`, tabulator a carriage return.
- Rizikovou hodnotu neutralizuj konzistentne, napriklad prefixem apostrofu uvnitr CSV hodnoty podle zvolene politiky.
- V exportni dokumentaci popis, ze textove hodnoty mohou byt kvuli spreadsheet bezpecnosti osetrene.

**Codyho komentar:** CSV export testovany jen na "Petr Novak" neni test. Dej do testovacich dat jmeno `=HYPERLINK("https://example.invalid","klik")` a uvidis, jestli mas export, nebo maly ohnostroj v tabulce.

### 4. Velke exporty potrebuji proces, ne delsi timeout

Jakmile export trva dele nez par sekund, neposilej uzivatele cekat na spinner. Dlouhe exporty maji byt asynchronni: uzivatel pozada o soubor, system vytvori job, zaznamena vlastnika, pripravi soubor a nabidne stazeni po omezenou dobu.

Rozumny model:

- Uzivatel vybere rozsah a vidi odhad poctu radku.
- System potvrdi, jestli export obsahuje osobni udaje.
- Export bezi jako job s limitem velikosti a casu.
- Soubor je ulozen docasne, sifrovane nebo v privatnim ulozisti.
- Link ke stazeni je kratkodoby a vazany na prihlaseneho uzivatele.
- Po expiraci se soubor smaze automaticky.
- Auditni stopa zaznamena kdo, kdy, jaky export a jaky rozsah spustil.

Do logu nepatri cele radky exportu. Pro provoz typicky staci `export_id`, typ exportu, vlastnik uctu, pocet radku, stav, cas zpracovani, velikost souboru a chybovy kod. Pokud potrebujes debug konkretni chyby, pouzij kratkodobou diagnostiku s omezenym pristupem a jasnym uklidem.

### 5. UI musi ukazat datovou vahu akce

Tlacitko "Exportovat vse" je pohodlne a nebezpecne. U exportu dej uzivateli moznost zmensit rozsah driv, nez soubor vznikne.

Dobry exportni dialog obsahuje:

- nazev exportu,
- rozsah dat,
- pocet zaznamu nebo odhad,
- seznam hlavni typy poli,
- upozorneni na osobni nebo citlive udaje,
- volbu formatu, pokud dava smysl,
- datum expirace odkazu,
- jasne potvrzeni.

Mikrocopy:

```text
Export obsahuje osobni udaje uzivatelu v tomto workspace. Stahujte ho jen pro uvedeny ucel a po pouziti ho ulozte podle internich pravidel nebo smazte.
```

To neni pravni zaklinadlo. Je to produktova brzda v miste, kde uzivatel dela datove rozhodnuti.

### 6. 45min postup

```text
0-10 min: Vyber jeden existujici export.
Pojmenuj jeho ucel, typ a typickeho uzivatele.

10-20 min: Projdi sloupce.
Oznac osobni udaje, interni data a sloupce bez jasneho pouziti.

20-30 min: Zkontroluj techniku.
Over CSV knihovnu, escapovani, kodovani, limit velikosti a CSV Injection test.

30-38 min: Zkontroluj provoz.
Najdi logy, auditni stopu, retenci souboru a opravneni ke stazeni.

38-45 min: Udelej jednu opravu.
Odstran nepotrebny sloupec, pridej varovani v UI, pridej test rizikove bunky nebo nastav expiraci souboru.
```

### Checklist: CSV exporty bez datoveho vysavace

- [ ] Kazdy export ma jasny ucel a typ: operativni, auditni nebo prenosovy.
- [ ] Export neobsahuje interni schema jen proto, ze existuje v databazi.
- [ ] Kazdy sloupec ma popis a obhajeny duvod.
- [ ] Osobni a citliva data jsou v exportu viditelne oznacena pro uzivatele.
- [ ] CSV generuje knihovna, ne rucni spojovani stringu.
- [ ] Hodnoty s carkami, uvozovkami a novymi radky jsou korektne escapovane.
- [ ] Uzivatelske vstupy jsou osetrene proti CSV Injection.
- [ ] Velke exporty bezi asynchronne s limitem velikosti a casu.
- [ ] Stazitelne soubory maji expiraci a vazbu na opravneni.
- [ ] Auditni stopa zaznamena typ exportu, rozsah, vlastnika a cas.
- [ ] Logy neobsahuji cele radky exportu ani zbytecne osobni udaje.
- [ ] UI pred exportem ukazuje rozsah, datovou citlivost a dalsi doporuceny krok.

---

## Souborove uploady a prilohy bez datove skluzavky za 60 minut

Upload souboru je misto, kde se produkt velmi rychle potka s realitou. Uzivatele nahraji screenshot, CSV, smlouvu, fakturu, log, fotku obrazovky nebo "jen malou prilohu". V te prilose muze byt osobni udaj, interni tajemstvi, malware, spatny format, moc velky soubor nebo data uplne jineho zakaznika. Privacy-first SaaS nema uploady zakazat. Ma je navrhnout tak, aby byly uzitecne, omezene a provozne zvladnutelne.

GDPR princip minimalizace dat v clanku 5 rika, ze osobni udaje maji byt primerene, relevantni a omezene na to, co je nezbytne pro dany ucel: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng. U uploadu je to prakticka veta, ne pravni dekorace. Pokud uzivatel ma nahrat doklad o zaplaceni, nepotrebujes po nem cely ZIP firemniho ucetnictvi. OWASP File Upload Cheat Sheet pak pripomina technickou stranu: validace typu, kontrola pripony, limit velikosti, nahodne nazvy souboru, ukladani mimo webroot a skenovani tam, kde dava smysl: https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html.

### 1. Kazdy upload musi mit ucel a hranici

Prvni otazka neni "kam soubor ulozime?", ale "proc soubor vubec potrebujeme?". Upload bez jasneho ucelu je datovy magnet. Casem k nemu nekdo prida dalsi typ souboru, dalsi zobrazeni v adminu, dalsi export a najednou mas uloziste citlivych prilepku bez vlastnika.

Rozdel uploady podle ucelu:

| Typ uploadu | Priklad | Hlavni riziko |
| --- | --- | --- |
| Operativni priloha | screenshot chyby v supportu | osobni udaje na obrazovce |
| Importni soubor | CSV se zakazniky | spatny format, cizi data, velky rozsah |
| Doklad | faktura, potvrzeni, smlouva | citlive obchodni a identifikacni udaje |
| Produktovy obsah | logo, obrazek, dokument | verejne zobrazeni, autorska prava, malware |
| Diagnosticky artefakt | log, HAR, crash report | tokeny, cookies, interni URL |

Ke kazdemu typu si napis kratkou hranici: kdo ho smi nahrat, jake formaty jsou povolene, jak dlouho se drzi, kdo ho uvidi a co se stane po vyreseni pozadavku.

**Priklad spatneho zadani:**

"Nahrajte soubor, ktery nam pomuze problem vyresit."

**Priklad lepsiho zadani:**

"Nahrajte screenshot chyby ve formatu PNG nebo JPG. Pred nahranim prosim zakryjte osobni udaje klientu, tokeny a castky, ktere s chybou nesouvisi."

To druhe neni alibismus. Je to pomoc uzivateli, aby neposlal vic dat, nez je potreba.

### 2. Validuj vice vrstev, ne jen priponu

Pripona souboru je napoveda, ne dukaz. `faktura.pdf` muze byt neco jineho nez PDF a `screenshot.png` muze mit velikost rodinneho archivu. Bezpecny upload kombinuje vice kontrol.

Minimalni technicky postup:

- Povolit jen konkretni typy souboru podle ucelu.
- Kontrolovat priponu i detekovany MIME typ.
- Nastavit limit velikosti pro soubor i celkovy objem na ucet.
- Prejmenovat soubor na serverovy identifikator, neukladat uzivatelsky nazev jako cestu.
- Ukladat soubory mimo verejny webroot nebo do privatniho bucketu.
- Pri stazeni kontrolovat opravneni, ne spolehat na neuhadnutelnou URL.
- U rizikovych formatu spustit antivirovou nebo obsahovou kontrolu.
- U obrazku zvazit prekodovani, odstraneni metadat a generovani nahledu.

**Codyho komentar:** Kdyz upload validujes jen podle toho, ze nazev konci `.pdf`, tak vlastne pouzivas bezpecnostni model "soubor se slusne predstavil". To je roztomile, ale ne moc profesionalni.

### 3. Metadata jsou taky data

Soubor neni jen obsah. Ma nazev, velikost, typ, autora, EXIF metadata, datum vytvoreni, komentare, revize, skryte listy v tabulce nebo vlozene nahledy. U SaaS produktu muze byt nejvetsi problem prave v tom, co uzivatel nevidi.

Prakticka pravidla:

- U obrazku pro verejne zobrazeni odstran EXIF metadata, pokud nejsou potreba.
- U dokumentu neukazuj puvodni nazev souboru verejne, pokud muze obsahovat jmeno klienta nebo interni popis.
- U support priloh zobraz internimu tymu varovani, ze soubor muze obsahovat osobni nebo citliva data.
- U logu a HAR souboru nabidni instrukce, jak odstranit cookies, tokeny a authorization hlavicky pred nahranim.
- Do analytiky neposilej nazvy souboru ani cesty.
- Do logu ukladej technicke ID souboru, stav kontroly, velikost a typ, ne obsah.

OWASP Logging Cheat Sheet obecne doporucuje vynechat z logu citliva data, session identifikatory, access tokeny, hesla a zbytecne osobni udaje: https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html. U uploadu to znamena hlavne nelogovat cele cesty, puvodni nazvy a obsah chybove analyzy, pokud by mohly prozradit data zakaznika.

### 4. Retence priloh musi byt kratsi nez lenost tymu

Prilohy se rady zapominaji. Ticket se zavre, obchod probehne, import se dokonci, ale soubor zustane v ulozisti dalsi roky. Privacy-first pravidlo: soubor ma zit jen tak dlouho, jak zije jeho ucel.

Navrh retence:

| Typ souboru | Vychozi retence | Poznamka |
| --- | --- | --- |
| Support screenshot | do vyreseni + kratka rezerva | po uzavreni ticketu automaticky smazat nebo anonymizovat |
| Importni CSV | hodiny az dny | po uspesnem importu drzet jen importni report |
| Diagnosticky log | kratce, podle incidentu | omezit pristup a retenci predem |
| Fakturacni doklad | podle ucetnich pravidel | oddelit od produktovych priloh |
| Verejny asset | dokud je publikovany | resit vlastnictvi, nahrady a smazani |

Nejjednodussi oprava v malem SaaS je pridat `expires_at` ke kazdemu docasnemu souboru. Druha nejjednodussi je pravidelny job, ktery expiraci opravdu provede. Treti je admin pohled, kde nekdo vidi soubory bez retencniho pravidla. Bez toho se z retence stane prani napsane hezkym fontem.

### 5. UI ma zmensovat riziko pred nahranim

Uzivatel casto nechce porusit pravidla. Jen nevi, co vsechno v souboru je. Dobre UI ho vede pred nahranim, ne az v chybove hlasce.

Dobry upload dialog obsahuje:

- povolene formaty,
- maximalni velikost,
- kratky popis ucelu,
- upozorneni na data, ktera nema nahravat,
- informaci o pristupu a retenci,
- stav kontroly po nahrani,
- moznost soubor odebrat pred odeslanim.

Mikrocopy pro support:

```text
Priloha bude pouzita jen k vyreseni tohoto ticketu. Pred nahranim prosim zakryjte osobni udaje, pristupove tokeny a informace, ktere s problemem nesouvisi.
```

Mikrocopy pro import:

```text
CSV po importu automaticky smazeme. V aplikaci zustane jen importni report: pocet radku, chyby validace a technicke ID importu.
```

### 6. 60min postup

```text
0-10 min: Vyber jeden upload.
Support priloha, import CSV, produktovy obrazek nebo diagnosticky log.

10-20 min: Pojmenuj ucel a hranice.
Kdo nahrava, proc, kdo vidi, jak dlouho soubor zije.

20-35 min: Zkontroluj techniku.
Formaty, velikost, MIME typ, prejmenovani, uloziste, opravneni, skenovani.

35-45 min: Zkontroluj metadata a logy.
Nazvy souboru, EXIF, tokeny, analytika, logy, auditni zaznam.

45-55 min: Nastav retenci.
`expires_at`, mazaci job, oddeleni ucetnich dokladu od docasnych priloh.

55-60 min: Oprav jednu vec v UI.
Pridej mikrocopy, limit, varovani nebo moznost odebrat soubor pred odeslanim.
```

### Sablona upload karty

```text
Nazev uploadu:
Ucel:
Typicky uzivatel:
Povolene formaty:
Limit velikosti:
Zakazana data:
Kdo muze soubor zobrazit:
Kde je ulozen:
Kontroly pri nahrani:
Metadata, ktera odstranujeme:
Retence:
Mazaci mechanismus:
Auditni stopa:
Text v UI:
```

### Checklist: souborove uploady bez datove skluzavky

- [ ] Kazdy upload ma jasny ucel a vlastnika.
- [ ] Povolene formaty odpovidaji realnemu pouziti, ne pohodli vyvoje.
- [ ] System kontroluje priponu, MIME typ, velikost a opravneni.
- [ ] Soubor se uklada pod serverovym ID, ne jako uzivatelska cesta.
- [ ] Soubory nejsou verejne dostupne bez autorizacni kontroly.
- [ ] Rizikove soubory maji skenovani nebo oddeleny proces kontroly.
- [ ] UI pred nahranim rika, ktera data uzivatel nema posilat.
- [ ] Nazvy souboru, metadata a obsah priloh nejdou zbytecne do logu ani analytiky.
- [ ] Docasne prilohy maji `expires_at` a skutecny mazaci job.
- [ ] Importni soubory se po zpracovani nahrazuji importnim reportem.
- [ ] Support tym vi, jak zachazet s prilohami obsahujicimi osobni nebo citliva data.
- [ ] Verejny privacy dokument odpovida realne retenci a pristupu k priloham.

---

## API dokumentace bez supportu na kazdy endpoint za 60 minut

Zakaznicke API je slib. Kdyz je dokumentace nepresna, support pak nedela podporu produktu, ale prekladatele mezi tim, co API skutecne dela, a tim, co si zakaznik musel domyslet. U maleho SaaS to vypada nenapadne: jeden endpoint pro export, jeden webhook, jeden token. Pak prijde prvni vetsi zakaznik, chce napojeni do sveho systemu a najednou se resi autentizace, limity, chyby, idempotence, zmeny verzi a kdo smi videt jaka data.

OpenAPI Specification popisuje standardni, jazykove nezavislou podobu HTTP API, ktera pomaha lidem i strojum pochopit schopnosti sluzby bez cteni zdrojoveho kodu: https://spec.openapis.org/oas/latest.html. To neznamena, ze kazdy maly produkt musi mit hned verejny developersky portal. Znamena to, ze kontrakt API ma byt citelny, verzovany a testovatelny.

### 1. Zacni rozhodnutim, pro koho API je

API dokumentace nema byt katalog vseho, co backend umi. Ma odpovedet konkretnimu integratorovi:

- Jsem zakaznik a chci exportovat vlastni data.
- Jsem partner a chci zakladat zaznamy z vlastniho systemu.
- Jsem interni tym a potrebuji stabilni administracni rozhrani.
- Jsem auditor a potrebuji pochopit, kudy mohou tect data.

Pro kazdy rezim se lisi rozsah, autorizace, priklady i odpovednost. Verejne zakaznicke API by melo ukazovat jen stabilni podporovane endpointy. Interni endpointy do dokumentace pro zakaznika nepatri ani jako "schovane sekce". Schovana dokumentace neni bezpecnostni hranice, jen pozvanka k nedorozumeni.

**Codyho komentar:** API je produktovy povrch, ne odpadni trubka z databaze. Kdyz endpoint existuje jen proto, ze se tak nejsnaz dotazuje tabulka, jeste to neni zakaznicka schopnost.

### 2. Minimalni kontrakt endpointu

U kazdeho endpointu staci zacat s touto kartou:

```text
Nazev:
Ucel:
Kdo ho smi volat:
Metoda a cesta:
Autentizace:
Pozadovana opravneni:
Request parametry:
Request body:
Uspechova odpoved:
Chybove odpovedi:
Rate limit:
Idempotence:
Retence dat vzniklych volanim:
Priklad cURL:
Kontakt pri problemu:
```

Nejdulezitejsi casti jsou ucel, opravneni a chyby. Parametry se daji opsat z kodu, ale ucel a hranice musi nekdo rozhodnout. Prave tam vznikaji privacy-first rozdily.

Spatny popis:

```text
GET /users
Vrati uzivatele.
```

Lepsi popis:

```text
GET /v1/members
Vrati cleny organizace, ke ktere patri API klic. Nevraci osobni poznamky, interni support stavy ani auditni zaznamy. Endpoint je urceny pro synchronizaci aktivnich uctu do zakaznickeho intranetu.
```

Ten druhy popis rika, kdo je vlastnik dat, kde je hranice a co integrator nemuze ocekavat.

### 3. Autentizace a tajemstvi popisuj bez zkratek

Kdyz dokumentace rika jen "vlozte token do headeru", zakaznik si casto doplni nebezpecne detaily sam. Napis presne:

- kde se API klic vytvari,
- kdo ho smi vytvorit,
- zda je videt jen jednou,
- jak se omezi opravneni,
- jak se rotuje,
- jak se zneplatni,
- zda ma expiraci,
- jak se pozna posledni pouziti.

Bearer tokeny se v HTTP bezne posilaji pres `Authorization: Bearer ...`; RFC 6750 popisuje zpusob pouziti bearer tokenu v OAuth 2.0 kontextu: https://www.rfc-editor.org/rfc/rfc6750. Pro maly SaaS z toho plyne prakticke pravidlo: token je nositel pristupu. Kdo ho ma, muze jednat jako prislusny klient, pokud nemas dalsi ochrany. Proto do dokumentace pridej i zakazy:

```text
API klic nevkladejte do frontendu, mobilni aplikace distribuovane koncovym uzivatelum, verejneho repozitare ani do screenshotu posilanych supportu.
```

Privacy-first detail: API klic nema byt univerzalni "admin vseho". Umoznuje-li produkt vice rozsahu, zaved omezeni typu `read:exports`, `write:contacts`, `read:invoices`. Kdyz zatim scopes nemas, dokumentuj alespon, ze klic dedi opravneni organizace a doporucuj samostatny servisni ucet.

### 4. Chyby musi byt pro lidi i stroje

HTTP status kody maji mit konzistentni vyznam podle HTTP semantiky v RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html. Pro API je prakticke pouzit jednotny format chyb, aby integrator nemusel parsovat text "neco se pokazilo". RFC 9457 popisuje Problem Details pro HTTP API: https://datatracker.ietf.org/doc/html/rfc9457.

Minimalni chyba:

```json
{
  "type": "https://docs.example.eu/errors/rate-limit",
  "title": "Rate limit exceeded",
  "status": 429,
  "detail": "This API key exceeded the limit for export requests.",
  "instance": "req_01J8..."
}
```

Do `detail` nedavej osobni udaje, cele dotazy, interni nazvy tabulek ani tajemstvi. `instance` ma byt technicke ID, ktere support najde v logu. Zakaznik potrebuje vedet, co ma udelat dal, ne videt vnitrek systemu.

Zakladni sada chyb:

| Stav | Kdy ho vratit | Co dodat |
| --- | --- | --- |
| `400` | Request nejde zpracovat kvuli formatu nebo validaci | Konkretni pole a oprava |
| `401` | Chybi nebo neplati autentizace | Jak se spravne autentizovat |
| `403` | Volajici nema opravneni | Ktere opravneni chybi |
| `404` | Zdroj neexistuje nebo k nemu volajici nema pristup | Bez prozrazeni cizi existence |
| `409` | Konflikt stavu nebo duplicitni operace | Jak konflikt vyresit |
| `422` | Obsah dava syntakticky smysl, ale porusuje business pravidlo | Pravidlo a pole |
| `429` | Prekrocen limit | `Retry-After` nebo cas dalsiho pokusu |
| `5xx` | Chyba na strane sluzby | Request ID a status page |

### 5. Ukaz priklad, ktery lze spustit

Dokumentace bez spustitelneho prikladu je hezka teorie. Pro kazdy dulezity tok pridej jeden cURL priklad a jednu realnou odpoved. Pouzij synteticka data, ktera nevypadaji jako z produkcniho exportu.

```bash
curl -sS https://api.example.eu/v1/exports \\
  -H "Authorization: Bearer $EXAMPLE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "contacts",
    "format": "csv",
    "fields": ["email", "company", "created_at"]
  }'
```

Dobry priklad ukaze:

- jak nastavit hlavicky,
- jak vypada minimalni request,
- co je volitelne,
- jak vypada odpoved,
- kde zjistit stav asynchronni operace,
- jak dlouho je vysledek dostupny,
- co se loguje a co ne.

U exportu pridej retenci primo do odpovedi:

```json
{
  "id": "exp_01J8...",
  "status": "processing",
  "download_url": null,
  "expires_at": "2026-08-09T12:00:00Z"
}
```

Tohle je mala vec, ale snizuje support dotazy a zaroven drzi datovou hygienu.

### 6. Zmeny verzi bez prekvapeni

API zije dele nez prvni frontend. Proto dokumentuj:

- aktualni verzi,
- zpusob verzovani,
- co je breaking change,
- jak dlouho podporujes starou verzi,
- kde je changelog,
- jak zakaznik dostane upozorneni na zmenu.

Prakticke pravidlo: nova volitelna pole v odpovedi nejsou problem, odebrani pole problem je. Zmena vyznamu pole je jeste horsi, protoze se rozbije tise. Kdyz menis semantiku, vytvor novou verzi nebo nove pole a stare nech dozit.

Mikrocopy do dokumentace:

```text
Stabilni endpointy ve `/v1` nemenime zpusobem, ktery by rozbil existujici integrace, bez predchoziho oznameni a migracniho okna. Experimentalni endpointy jsou oznacene `beta` a nejsou vhodne pro kriticke procesy.
```

### 7. 60min postup

```text
0-10 min: Vyber jeden zakaznicky tok.
Export, zalozeni zaznamu, webhook nebo synchronizace seznamu.

10-20 min: Sepis kontrakt.
Ucel, opravneni, request, odpoved, chyby, rate limit a retence.

20-35 min: Vytvor nebo oprav OpenAPI popis.
Pridej schema, priklady, security scheme a popisy chyb.

35-45 min: Dopln spustitelny priklad.
cURL, synteticka data, ukazka uspechu a jedna typicka chyba.

45-55 min: Projdi privacy-first hranice.
Minimalni pole, zadne tajne hodnoty v prikladech, zadna zbytecna data v chybach.

55-60 min: Pridej changelog poznamku.
Co se zmenilo, od kdy to plati a kdo je kontakt pro integratory.
```

### Sablona dokumentacni karty API

```text
Endpoint:
Stav: stable / beta / deprecated
Ucel:
Typicky integrator:
Datove kategorie:
Autentizace:
Scopes/opravneni:
Rate limit:
Idempotency key:
Uspechova odpoved:
Chybove odpovedi:
Retence technickych zaznamu:
Retence vystupu:
Breaking change pravidla:
Priklad:
Support kontakt:
```

### Checklist: API dokumentace bez supportu na kazdy endpoint

- [ ] Verejna dokumentace ukazuje jen podporovane endpointy, ne interni zkratky.
- [ ] Kazdy endpoint ma popsan ucel, opravneni a datove kategorie.
- [ ] OpenAPI popis odpovida realnemu chovani aplikace.
- [ ] Priklady pouzivaji synteticka data a nejdou zkopirovat jako produkcni tajemstvi.
- [ ] Autentizace vysvetluje vytvoreni, ulozeni, rotaci a zneplatneni klice.
- [ ] Zakaznik vi, ktere scopes nebo role potrebuje.
- [ ] Chyby maji konzistentni strukturu a neprozrazuji cizi data ani interni detaily.
- [ ] `429` odpoved rika, kdy ma klient zkusit dalsi pokus.
- [ ] Exporty a asynchronni operace vraci stav, technicke ID a retenci vysledku.
- [ ] Breaking changes maji migracni okno a changelog.
- [ ] Support umi podle request ID dohledat problem bez sdileni celeho payloadu.
- [ ] Dokumentace obsahuje kontakt pro integracni potize a hranice podpory.

---

## Servisni ucty a machine-to-machine pristupy bez sdilenych hesel za 45 minut

Servisni ucet je uzivatel, ktery nema telo, kalendar ani spatnou naladu po pondelni porade. Prave proto je nebezpecne s nim zachazet jako s beznym clovekem v administraci. Machine-to-machine pristupy casto drzi billing, synchronizace, reporting, webhooky, importy, exporty nebo interni automatizace. Kdyz jsou navrzene spatne, vznikne jeden nesmrtelny ucet `admin@firma.cz`, jeho heslo zna pulka tymu a auditni stopa ukazuje jen to, ze "nekdo neco udelal".

Privacy-first provoz potrebuje opak: kazdy neclovecky pristup ma mit vlastnika, omezeny ucel, minimalni prava, rotaci, audit a jasne vypnuti. OWASP Secrets Management Cheat Sheet resi cely zivotni cyklus tajemstvi vcetne rotace a revokace: https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html. OWASP Authorization Cheat Sheet pripomina princip least privilege a kontrolu pristupu na serveru: https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html.

**Codyho komentar:** Sdilene heslo k servisnimu uctu je provozni dluh v kostymu "rychleho reseni". Funguje presne do chvile, kdy potrebujes zjistit, kdo co spustil, nebo kdy token omylem odtece do logu.

### 1. Rozdel servisni pristupy podle ucelu

Nejdriv prestan uvazovat v pojmu "jeden technicky ucet pro vsechno". Rozdel pristupy podle toku:

| Tok | Lepsi identita nez jeden sdileny admin |
| --- | --- |
| Billing synchronizace | servisni ucet `billing-sync` jen pro fakturacni operace |
| Import zakaznickych dat | kratkodoby importni token pro konkretni projekt |
| Monitoring dostupnosti | read-only token pro health endpointy |
| Datovy export | oddeleny exportni job s omezenou platnosti vysledku |
| Interni automatizace | service account s vlastnikem a popisem akce |
| Partnerska integrace | klientsky API klic se scopes a limity |

Kazdy ucet by mel odpovidat jedne vete:

```text
[identita] muze delat [akce] nad [rozsahem dat] kvuli [ucelu] do [doby / revize].
```

Priklad:

```text
billing-sync muze cist stav aktivnich subscription a zapisovat fakturacni reference kvuli mesicni fakturaci. Nema pristup k support zpravam, souborum ani marketingovym eventum. Vlastnik je finance ops, kontrola kazde ctvrtleti.
```

Kdyz se jedna veta neda napsat, pristup je prilis siroky nebo spatne pojmenovany.

### 2. Prava navrhuj od prazdne sady

U servisnich uctu je pohodlne dat `admin`, protoze to zrychli integraci. Jenze pozdeji uz nikdo nevi, ktera opravneni jsou skutecne potreba. Zacni od prazdne sady a pridej jen akce, ktere tok opravdu potrebuje.

Minimalni kontrola pred vydanim tokenu:

- Jake endpointy nebo operace bude identita volat?
- Potrebuje cteni, zapis, mazani, nebo jen spusteni jobu?
- Potrebuje vsechny zakazniky, jeden workspace, nebo jeden projekt?
- Potrebuje volne texty, prilohy a osobni udaje, nebo staci stav a technicke ID?
- Muze token vytvaret dalsi tokeny? Pokud ano, proc?
- Kdy pristup vyprsi nebo kdy se znovu schvaluje?

**Priklad spatneho rozsahu:**

Partner dostane API klic s pristupem ke vsem kontaktum, exportum a historickym eventum, protoze zatim jen testuje integraci.

**Lepsi rozsah:**

Partner dostane sandbox klic s testovacimi daty. Produkcni klic prijde az po schvaleni rozsahu, ma `read:orders` a `write:fulfillment`, je omezeny na konkretni tenant a jeho pouziti se loguje bez celeho payloadu.

### 3. Tajemstvi nesmi byt dokumentace

API klic, client secret nebo private key neni poznamka do wiki. Je to pristupovy prostredek. Dokumentace ma popsat, jak tajemstvi vznikne, kde se ulozi, kdo ho muze zobrazit, jak se rotuje a jak se zrusi. Nemusi obsahovat samotnou hodnotu.

Zakladni pravidla:

- Tajemstvi nepatri do repozitare, chatu, screenshotu ani support ticketu.
- UI ma hodnotu ukazat jen pri vytvoreni, pokud to produktovy tok dovoluje.
- Logy nikdy neukladaji cele tokeny ani authorization hlavicky.
- Tokeny maji prefix nebo technicke ID, podle ktereho se daji dohledat bez zverejneni cele hodnoty.
- Rotace ma byt bez vypadku: novy token, prepnuti klienta, overeni provozu, zneplatneni stareho.
- Emergency revokace ma byt rychlejsi nez hledani cloveka, ktery "asi vi, kde to je".

Prakticky kompromis pro male tymy: kdyz nemas plnohodnotny secrets manager, pouzij aspon jedno kontrolovane misto s pristupy podle roli, auditni stopou a jasnym zakazem kopirovani do dokumentace. Ale ber to jako docasny stupen, ne jako architektonicky cil.

### 4. Audituj akci, ne jen prihlaseni

U servisniho uctu nestaci vedet, ze token existuje. Potrebujes vedet, co udelal a proc to jde vysvetlit.

Dobry auditni zaznam pro machine-to-machine akci obsahuje:

- identitu servisniho uctu nebo klienta,
- akci,
- cilovy tenant, projekt nebo resource ID,
- vysledek,
- cas,
- request ID,
- verzi integrace nebo klienta, pokud ji znas,
- duvod nebo job ID u internich automatizaci.

Co do auditu nepatri:

- cele request payloady s osobnimi daty,
- cele response body,
- tokeny,
- zbytecne IP adresy, pokud je nepouzivas k bezpecnostnimu ucelu,
- volne texty zakazniku bez jasneho duvodu.

**Priklad:**

```text
2026-08-02T10:15:03Z service_account=billing-sync action=invoice.reference.write tenant=acme-eu result=success request_id=req_7Gf2 job_id=billing_2026_08
```

Tenhle zaznam pomuze pri debugovani i auditu. Nepotrebuje pritom kopii faktury, email zakaznika ani obsah celeho requestu.

### 5. Offboarding plati i pro roboty

Kdyz odchazi clovek, resis pristupy. Kdyz konci integrace, pilot, dodavatel nebo automatizace, musis udelat to same. Servisni ucty maji tendenci prezivat, protoze nikomu nepatri dost osobne.

Offboarding servisniho pristupu:

- oznac integraci jako ukoncovanou,
- zastav planovane joby,
- prepnout provoz na novou identitu nebo fallback,
- zneplatnit tokeny a refresh tokeny,
- odebrat webhooky a callback URL,
- zkontrolovat posledni uspesne akce,
- smazat docasne exporty a testovaci data,
- aktualizovat datovou mapu, subprocesory a dokumentaci,
- ponechat jen auditni stopu podle retence.

Nejlepsi offboarding je ten, ktery se da spustit bez archeologie. Kdyz inventar servisnich uctu rika vlastnika, ucel a napojene toky, vypnuti neni detektivka.

### 6. 45min postup

```text
00-05 min: Vyber jeden servisni pristup.
Napr. billing-sync, exportni job, partner API klic nebo monitoring token.

05-12 min: Napis jednu vetu ucelu.
Kdo muze delat co, nad cim, proc a do kdy.

12-22 min: Zkontroluj prava.
Odeber admin prava, pokud nejsou nutna. Rozdel cteni, zapis, mazani a rozsah tenantu.

22-30 min: Zkontroluj tajemstvi.
Kde je token ulozeny, kdo ho vidi, jak se rotuje, jak se revokuje.

30-38 min: Zkontroluj audit.
Je videt akce, vysledek, resource ID a request ID bez citlivych payloadu?

38-45 min: Zapis offboarding.
Kdo ucet vypne, co se stane s webhooky, exporty, dokumentaci a datovou mapou.
```

### Sablona karty servisniho uctu

```text
Nazev:

Vlastnik:

Ucel:

Systemy:

Rozsah dat:

Opravneni:

Token / secret ulozen v:

Rotace:

Revokace:

Auditni zaznamy:

Napojene webhooky / joby:

Fallback pri vypnuti:

Posledni kontrola:

Datum dalsi kontroly:
```

### Checklist: servisni ucty bez sdilenych hesel

- [ ] Kazdy servisni ucet ma vlastnika, ucel a popis rozsahu.
- [ ] Neexistuje jeden sdileny admin ucet pro nesouvisejici automatizace.
- [ ] Prava jsou navrzena od prazdne sady a odpovidaji konkretnim operacim.
- [ ] Produkcni pristupy jsou oddelene od sandboxu a testu.
- [ ] Tajemstvi nejsou v repozitari, chatu, wiki ani logach.
- [ ] Tokeny maji rotaci, revokaci a technicke ID pro dohledani.
- [ ] Audit zachycuje akci, vysledek a resource ID bez citlivych payloadu.
- [ ] Partneri a dodavatele maji vlastni identity, ne sdileny interni ucet.
- [ ] Offboarding integrace maze tokeny, webhooky, docasne exporty a pristupy.
- [ ] Datova mapa a dokumentace se aktualizuji pri vzniku i vypnuti pristupu.

---

## Testovaci prostredi a seed data bez kopirovani produkce za 60 minut

Testovaci prostredi je misto, kde se ma bezpecne rozbit budoucnost, ne minula data zakazniku. V malem SaaS tymu ale casto vznikne rychla zkratka: "vezmeme kopii produkcni databaze, at mame realisticka data". Realisticke to je. Taky je to nejrychlejsi cesta k tomu, aby se osobni udaje, obchodni tajemstvi, access tokeny a interni poznamky prestehovaly do prostredi s horsimi pristupy, slabsi retenci a mensim dohledem.

Privacy-first pravidlo je jednoduche: testuj realne scenare na nerealnych datech. Produkcni data patri do produkce, do kontrolovane obnovy nebo do presne schvalene diagnostiky s uklidem. Ne do lokalniho vyvoje jen proto, ze se nechce psat seed skript. GDPR principy minimalizace, omezeni ucelu, omezeni ulozeni a integrity a duvernosti jsou pro to prakticky filtr: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng. OWASP Authorization Cheat Sheet a Logging Cheat Sheet pak pomahaji udrzet pristupy a provozni zaznamy pod kontrolou: https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html a https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html.

**Codyho komentar:** Testovaci databaze plna produkcnich emailu neni "rychlejsi QA". Je to dluh, ktery umi pockat presne do prvniho screenshotu v support chatu.

### 1. Rozdel prostredi podle rizika

Ne kazde neprodukcni prostredi ma stejny ucel. Kdyz vsechno oznacis jako "staging", nikdo nevi, jaka data tam smi a kdo ma pravo neco spustit.

| Prostredi | Ucel | Data | Pristup |
| --- | --- | --- | --- |
| Lokalni vyvoj | rychla prace vyvojare | synteticka seed data | vyvojari, bez produkcnich secrets |
| Preview / review app | kontrola konkretni zmeny | synteticka nebo anonymni fixture | tym podle potreby, kratka zivotnost |
| Staging | integracni testy pred releasem | synteticka data podobna realnym scenarum | omezeny tym, audit dulezitych akci |
| Demo sandbox | ukazka zakaznikovi | synteticky pribeh produktu | obchod, support, zakaznik podle role |
| Izolovana obnova | restore test nebo incident diagnostika | produkcni zaloha jen pri schvalenem ucelu | kratkodoby pristup, prisny uklid |

Minimalni pravidlo: kazde prostredi ma vlastnika, ucel, povoleny typ dat, pravidlo pristupu a pravidlo zruseni. Pokud to nejde napsat jednou vetou, prostredi je spis nahodny server s nadeji.

### 2. Seed data pis jako produktovy pribeh

Synteticka data nejsou nahodne `test@test.cz` a tri radky v tabulce. Dobra seed data popisuji scenare, ktere produkt potrebuje overit:

- novy zakaznik pred aktivaci,
- aktivni zakaznik s vice rolemi,
- ucet po splatnosti,
- import s validacnimi chybami,
- webhook, ktery se opakuje,
- uzivatel bez opravneni,
- zruseny ucet s naplanovanym smazanim,
- export s velkym objemem radku,
- edge case s diakritikou, dlouhym nazvem a prazdnou volitelnou hodnotou.

Sablona seed scenare:

```text
Nazev scenare:
Produktovy stav:
Proc existuje:
Data, ktera obsahuje:
Role a opravneni:
Ocekavane chovani:
Zakazane zkratky:
Testy, ktere na nem bezi:
```

Priklad:

```text
Nazev scenare: workspace-po-splatnosti
Produktovy stav: zakaznik ma aktivni tym, ale posledni faktura selhala
Proc existuje: overeni billing banneru, omezeni exportu a support zpravy
Data, ktera obsahuje: synteticke firmy, neexistujici emaily na example.test, falesne castky
Role a opravneni: owner, finance, read-only clen
Ocekavane chovani: owner vidi vyzvu k platbe, read-only clen nevidi billing detail
Zakazane zkratky: zadne realne faktury, zadne realne platebni identifikatory
Testy, ktere na nem bezi: billing UI, export prav, support handoff
```

Tohle pomaha vyvoji i obchodu. Demo pak neukazuje prazdnou aplikaci a QA nemusi prosit o produkcni kopii pokazde, kdyz se testuje slozitejsi stav.

### 3. Produkcni kopie povol jen jako vyjimku

Nekdy je potreba reprodukovat problem, ktery synteticka data neumely zachytit. To neznamena, ze produkcni dump smi byt vychozi nastroj. Udelej z nej schvalovanou vyjimku s presnym ucelem.

Rozhodovaci filtr:

- Jde problem reprodukovat na syntetickych datech?
- Staci agregace, vzorek bez identifikatoru nebo anonymizovana kopie?
- Ktera konkretni data jsou potreba?
- Kdo pristup schvaluje?
- Kde bude kopie ulozena?
- Kdo k ni bude mit pristup?
- Kdy se smaze?
- Jak dolozime, ze se smazala?

Stop pravidlo:

```text
Produkcnich dat se nedotykame, pokud neumime predem napsat ucel, rozsah, pristup, retenci a uklid.
```

Kdyz uz produkcni data pouzijes pro izolovanou diagnostiku, zmensi rozsah. Neber celou databazi, kdyz staci jeden tenant. Neber vsechny tabulky, kdyz staci objednavky a stav zpracovani. Neber prilohy, kdyz chyba sedi v metadatech. A hlavne: po skonceni prace nesmi zustat "docasna" kopie bez datumu smazani.

### 4. Secrets a integrace oddel od zacatku

Testovaci prostredi nesmi mluvit se skutecnym svetem omylem. Nejvetsi skody casto nevzniknou tim, ze staging spadne, ale tim, ze posle realny email, zavola produkcni webhook, vystavi fakturu nebo smaze data v cizi integraci.

Kontroly pro neprodukcni prostredi:

- vlastni databaze,
- vlastni storage nebo bucket,
- vlastni emailovy provider v testovacim rezimu nebo sink mailbox,
- vlastni webhook endpointy,
- oddelene API klice pro platby, mapy, AI, CRM a monitoring,
- zakaz produkcnich secrets v lokalnim `.env`,
- viditelny banner nebo hostname, ze nejde o produkci,
- defaultni vypnuti externich notifikaci.

Prakticka pojistka: vsechny neprodukcni emaily smeruj do zachytne schranky nebo povol jen whitelist adres. U webhooku pouzij testovaci endpointy a loguj jen technicky stav, ne cele payloady. U plateb pouzij test mode a zakaz sdileni produkcnich API klicu mezi prostredimi.

### 5. Testovaci data maji mit vlastni retenci

Seed data muzes obnovovat porad. Docasne importy, preview aplikace, testovaci exporty a incidentni kopie ne. Proto kazde prostredi potrebuje uklidovy rytmus.

Navrh retence:

| Typ dat | Vychozi retence | Uklid |
| --- | --- | --- |
| Seed fixtures v repozitari | dlouhodobe | review pri zmenach produktu |
| Preview databaze | dny | automaticke smazani po merge nebo zavreni vetve |
| Testovaci exporty | hodiny az dny | expirace odkazu a souboru |
| Importni soubory ve stagingu | dny | smazani po testu |
| Izolovana produkcni kopie | co nejkratsi vyjimka | schvaleny termin a potvrzeni smazani |
| Demo sandbox | podle obchodniho cyklu | reset mezi zakazniky |

Do pracovnich pravidel pridej vetu:

```text
Kdyz prostredi nema vlastnika a datum dalsi kontroly, nesmi obsahovat zadna zakaznicka ani osobni data.
```

Tohle zni prisne, ale setri cas. Nejhorsi uklid je ten, ktery zacne otazkou "vi nekdo, co je tahle databaze z brezna?".

### 6. 60min postup

```text
0-10 min: Sepis prostredi.
Lokalni vyvoj, preview, staging, demo, obnovovaci prostredi a jejich vlastniky.

10-20 min: Oznac povolena data.
U kazdeho prostredi napis: synteticka, anonymizovana, produkcni vyjimka, nebo zakaz.

20-30 min: Najdi produkcni presahy.
Hledej produkcni secrets, realne emaily, webhooky, platby, storage a logy.

30-40 min: Navrhni seed scenare.
Vyber tri produktove stavy, ktere nahradi potrebu produkcni kopie.

40-50 min: Nastav uklid.
Preview expirace, mazani testovacich exportu, reset sandboxu a vlastnik retence.

50-60 min: Udelej jednu okamzitou opravu.
Odeber produkcni klic ze stagingu, pridej email sink, vytvor seed kartu nebo zapis pravidlo pro produkcni vyjimky.
```

### Sablona karty prostredi

```text
Nazev prostredi:
Ucel:
Vlastnik:
Kdo ma pristup:
Povolena data:
Zakazana data:
Secrets a integrace:
Emaily a notifikace:
Webhooky:
Logy:
Retence:
Reset / uklid:
Kdy lze pouzit produkcni data:
Schvalovatel vyjimky:
Datum posledni kontroly:
```

### Checklist: testovaci prostredi bez kopirovani produkce

- [ ] Kazde prostredi ma ucel, vlastnika a povoleny typ dat.
- [ ] Lokalni vyvoj a preview aplikace nepouzivaji produkcni databaze.
- [ ] Staging ma oddelene secrets, storage, webhooky, emaily a platby.
- [ ] Produkcni kopie je vyjimka se schvalenim, rozsahem, retenci a uklidem.
- [ ] Seed data pokryvaji realne produktove scenare, ne jen prazdny stav.
- [ ] Demo sandbox pouziva synteticka data a reset mezi zakazniky.
- [ ] Testovaci emaily jdou do sinku nebo jen na whitelist adres.
- [ ] Testovaci exporty, importy a preview databaze maji expiraci.
- [ ] Logy z testu neobsahuji tokeny, realne emaily ani cele payloady.
- [ ] Pristup do neprodukcniho prostredi neni sirsi jen proto, ze "to neni produkce".
- [ ] Existuje stop pravidlo pro pouziti produkcnich dat mimo produkci.
- [ ] Datova mapa rozlisuje produkci, staging, demo a izolovanou obnovu.

---

## Release runbook bez patecni rulety za 60 minut

Release neni jen `git push` s nadeji, ze si produkce sedne sama. U maleho SaaS je release okamzik, kdy se potkava produkt, infrastruktura, data, support a obchodni sliby. Kdyz ten okamzik ridis jen pameti jednoho vyvojare, mas proces napsany mizicim inkoustem.

Cil release runbooku neni udelat z kazde zmeny vojenskou operaci. Cil je, aby tym predem vedel, co se nasazuje, koho se to muze dotknout, jak poznas uspech, kde jsou datova rizika a jak rychle se vratis zpet, kdyz se neco rozbije. NIST SSDF pracuje s myslenkou, ze bezpecny vyvoj neni posledni kontrola pred releasem, ale opakovatelny proces pres pripravu, ochranu, produkci a reakci na zranitelnosti: https://csrc.nist.gov/pubs/sp/800/218/final

### 1. Rozdel releasy podle dopadu

Ne vsechny releasy potrebuji stejny ritual. Oprava preklepu v dokumentaci a migrace zakaznickych prav nejsou stejna liga. Kdyz pouzijes jeden proces na vsechno, bude bud smesne tezky, nebo nebezpecne lehky.

Prakticke rozdeleni:

| Typ releasu | Priklad | Minimalni kontrola |
| --- | --- | --- |
| Text / obsah | landing page, napoveda, mikrocopy | kontrola odkazu, SEO dopadu a nepravdivych slibu |
| UI bez dat | nove razeni, prazdny stav, navigace | smoke test hlavni cesty a responzivita |
| Produktovy tok | onboarding, checkout, export | test vstupu, vystupu, chyb a support dopadu |
| Datova zmena | migrace, retence, role, billing | plan obnovy, test na kopii, vlastnik rollbacku |
| Integrace | webhook, email, platby, CRM | sandbox test, idempotence, limity, vypnuti integrace |
| Bezpecnost | auth, prava, audit, uploady | review prav, logu, hlavicek, tajemstvi a incident plan |

Pravidlo: cim bliz je zmena k osobnim udajum, fakturaci, prihlasovani nebo mazani dat, tim konkretnejsi musi byt runbook. Ne proto, ze milujeme tabulky. Protoze u techto zmen nechces premyslet poprve az ve chvili, kdy produkce kasle krev.

### 2. Release karta misto roztrousenych poznamek

Kazdy vetsi release by mel mit jednu kartu. Nemusi zit v drahem nastroji. Muze to byt issue, Markdown dokument nebo radek v internim trackeru. Dulezite je, aby na jednom miste odpovidala na otazky, ktere se jinak schovaji v chatu.

Minimalni release karta:

- co se meni,
- proc se to meni,
- koho se to muze dotknout,
- jaka data zmena cte, meni, uklada nebo maze,
- ktere feature flags nebo konfigurace se meni,
- jaky je plan nasazeni,
- jak poznas uspech,
- jak poznas problem,
- jaky je rollback nebo fallback,
- kdo je vlastnik releasu,
- kdo ma byt informovan pred a po nasazeni.

**Priklad kratke karty:**

```text
Nazev: Export faktur do CSV
Typ: produktovy tok + datovy export
Vlastnik: product / backend
Zmena: Zakaznik muze stahnout CSV s fakturami za zvolene obdobi.
Data: cislo faktury, datum, castka, mena, stav, fakturacni firma, DIC.
Zakazana data: interni poznamky, support vlakna, platebni tokeny.
Nasazeni: feature flag pro 3 interni ucty, potom 10 pilotnich zakazniku.
Uspech: export se vytvori do 30 s pro bezny rozsah a neobsahuje zakazane sloupce.
Problem: chybne sloupce, timeout, neopravneny pristup, nejasny rozsah dat.
Rollback: vypnout feature flag, ponechat endpoint nepristupny, smazat docasne exporty.
Komunikace: changelog po pilotu, support dostane screenshot a seznam omezeni.
```

Privacy-first release karta ma jednu specialni vlastnost: datovy dopad neni poznamka pod carou. Je to normalni cast definice hotovo.

### 3. Preflight kontrola: chytej levne chyby pred produkci

Preflight je kratka kontrola pred nasazenim. Nema suplovat testy ani code review, ale chyta veci, ktere automat casto nevidi: spatny text, spatny ucet, spatny region, rozbity formular, zapomenuty debug log.

Preflight otazky:

- Bezi testy nebo aspon relevantni smoke kontrola?
- Nasazuje se spravna vetev, commit a konfigurace?
- Jsou migrace vratne, nebo maji aspon overeny fallback?
- Nepresunula zmena data do noveho dodavatele nebo regionu?
- Nepribyl novy cookie, pixel, iframe nebo externi script?
- Neobjevily se v logach osobni udaje, tokeny nebo cele payloady?
- Ma support pripravene minimum informaci, pokud se zakaznik ozve?
- Je jasne, kdo release sleduje prvnich 15 az 30 minut?

**Codyho komentar:** Nejlevnejsi incident je ten, ktery vypada jako nudna polozka v preflight checklistu. "Zapomneli jsme vypnout debug log" je legrace jen do chvile, nez je v log agregatoru pulka formularu.

### 4. Rollout po malych kruzich

I kdyz mas dobry test, produkce je jiny organismus. Ma skutecne ucty, pomalejsi sit, stare prohlizece, lidske zkratky a data, ktera nikdo nevymyslel v idealnim seed scenari. Proto je u rizikovejsich zmen rozumne nasazovat po kruzich.

Jednoduchy rollout:

1. Interni ucet.
2. Jeden testovaci nebo pilotni zakaznik.
3. Mala skupina relevantnich zakazniku.
4. Vsichni zakaznici v jednom planu nebo segmentu.
5. Verejne zapnuti.

Kazdy kruh musi mit stop pravidlo. Napriklad:

- chyba v pristupu k cizim datum,
- vice nez 2 % chybovost hlavni akce,
- opakovany support dotaz na stejnou nejasnost,
- export obsahuje sloupec mimo datovy kontrakt,
- metrika konverze nebo aktivace prudce spadne bez vysvetleni.

Rollout bez stop pravidla je jen pomalejsi zpusob, jak stejnou chybu rozneses postupne.

### 5. Rollback neni ostuda

Rollback je normalni nastroj provozu, ne priznani porazky. Ostuda je zmena, kterou neumite vypnout, vratit nebo obejit, protoze se nikdo predem nezeptal, co se stane pri selhani.

Tri urovne navratu:

- Vypnuti feature flagu: nejrychlejsi varianta pro UI a funkcni zmeny.
- Fallback konfigurace: prepnuti na starsi provider, starsi sablonu, jiny tok.
- Technicky rollback: navrat verze aplikace, migrace nebo datovy opravny skript.

U datovych zmen si nenech namluvit, ze rollback je vzdy stejne jednoduchy jako deploy. Kdyz migrace prepocita prava, smaze pole nebo posle data do integrace, zpetny krok musi byt popsany zvlast. Nekdy spravna odpoved neni "rollback", ale "zastavit pristup, zachovat dukazy, spustit opravny skript a komunikovat dopad".

### 6. Post-release kontrola a kratky zapis

Release konci az kontrolou po nasazeni. Ne tim, ze CI zezelenalo. Po nasazeni zkontroluj hlavni cestu, chyby, logy, metriky a support kanaly. U vetsi zmeny pridej kratky zapis, aby se dalsi release neopakoval z nuly.

Post-release zapis muze mit pet radku:

```text
Release:
Nasazeno kdy:
Overeno:
Nalezy:
Dalsi oprava:
```

Priklady nalezu:

- "Formular funguje, ale potvrzovaci email ma nejasny predmet."
- "Export je rychly pro 1 mesic, ale 12 mesicu potrebuje asynchronni job."
- "Webhook retry funguje, ale log obsahuje moc detailni payload."
- "Zakaznici se ptaji, zda nova role vidi faktury; doplnit napovedu."

Takovy zapis neni administrativa. Je to pamet tymu. A pamet tymu je levnejsi nez stejny incident trikrat po sobe.

### 7. 60min postup

```text
0-10 min: Vyber jeden blizky release.
Nepopisuj vsechny budouci releasy. Vezmi realnou zmenu, ktera pujde nasadit nebo pripravit tento tyden.

10-20 min: Zarad dopad.
Obsah, UI, produktovy tok, data, integrace nebo bezpecnost. Pridej vlastnika a zakaznicke skupiny.

20-35 min: Vypln release kartu.
Co se meni, data, rizika, uspech, problem, rollback, komunikace.

35-45 min: Napis preflight checklist.
Omez ho na 8-12 polozek, ktere by opravdu zastavily nebo zmenily nasazeni.

45-55 min: Navrhni rollout a stop pravidla.
Interni ucet, pilot, mala skupina, vsichni. U kazdeho kroku jeden signal pokracovat a jeden signal zastavit.

55-60 min: Udelej jednu okamzitou opravu.
Pridej feature flag, dopln rollback poznamku, vycisti debug log, nebo priprav support mikrotext.
```

### Sablona release karty

```text
Nazev releasu:
Typ zmeny:
Vlastnik:
Datum / okno nasazeni:
Co se meni:
Proc se to meni:
Dotcene role / zakaznici:
Dotcene systemy:
Data ctena:
Data menena:
Data ukladana:
Data mazana:
Novy dodavatel / region:
Feature flag / konfigurace:
Migrace:
Preflight kontroly:
Rollout kroky:
Stop pravidla:
Signal uspechu:
Signal problemu:
Rollback / fallback:
Support poznamka:
Changelog / komunikace:
Post-release kontrola:
```

### Checklist: release runbook bez patecni rulety

- [ ] Kazdy vetsi release ma vlastnika a jednu kartu pravdy.
- [ ] Typ releasu odpovida realnemu dopadu, ne velikosti pull requestu.
- [ ] Datovy dopad je popsany pred nasazenim.
- [ ] Nove cookies, pixely, iframe nebo externi skripty maji privacy review.
- [ ] Migrace maji overeny plan obnovy nebo jasny opravny postup.
- [ ] Feature flagy maji vlastnika, stop pravidlo a datum uklidu.
- [ ] Preflight kontrola obsahuje spravny commit, konfiguraci, hlavni cestu a logy.
- [ ] Rollout probiha po kruzich, pokud zmena saha na data, prava, platby nebo integrace.
- [ ] Rollback je popsany konkretneji nez "vratime to".
- [ ] Support vi, co se zmenilo a co ma delat pri prvnim dotazu.
- [ ] Po releasu probehla kontrola metrik, chyb, logu a zakaznicke cesty.
- [ ] Kratky post-release zapis zachytil nalezy a dalsi opravu.

---

## Produktove metriky bez vanity dashboardu za 60 minut

Metriky maji pomahat rozhodovat. Ne dokazovat, ze produkt "nejak roste", protoze graf vypada do prava nahoru, kdyz se spravne priblizi osa. Maly SaaS tym nepotrebuje tucet panelu, ktere nikdo necte. Potrebuje maly metrickovy strom: hlavni vysledek, par vstupnich signalu, jasne hranice kvality a pravidelny rytmus rozhodovani.

Privacy-first verze tohoto pristupu ma jeste jednu vyhodu: nuti te merit na urovni produktu, uctu nebo udalosti, ne na urovni slidenych jednotlivcu. Misto "co presne delal tento clovek v utery ve 23:14" se ptas: "Dostava zakaznik hodnotu, kterou jsme slibili? Kde se tok lame? Co mame zlepsit tento tyden?"

### 1. Zacni rozhodnutim, ne dashboardem

Nejdriv si napis tri rozhodnuti, ktera chces metrikami delat. Bez toho se dashboard nafoukne na vitrinu cisel.

Priklady rozhodnuti:

- Mame zlepsovat akvizici, nebo aktivaci?
- Je onboarding dost jasny pro nove zakazniky?
- Ktery segment ma realnejsi sanci na placene rozsireni?
- Ktera cast produktu zpusobuje nejvic support prace?
- Muzeme vypnout starou funkci bez rozbite duvery?

Kazde rozhodnuti preved na otazku:

```text
Rozhodnuti: Mame prepsat onboarding?
Otazka: Kolik novych uctu dojde k prvnimu hodnotnemu vysledku do 7 dni?
```

Potom teprve vybirej metriku. Kdyz zacnes nastrojem, skoncis u toho, co umi nastroj pekne nakreslit. Kdyz zacnes rozhodnutim, casteji skoncis u jednoducheho cisla, ktere jde precist i v pondeli rano bez ritualu.

**Codyho komentar:** Dashboard je dobry sluha a spatny sef. Jakmile se tym zacne ptat "jak zvedneme tuhle krivku" misto "co se ma zlepsit pro zakaznika", cisla prevzala volant.

### 2. Postav metrickovy strom z peti vrstev

Metrickovy strom je mapa, jak se vysledek produktu sklada z mensich signalu. Nemusi byt dokonaly. Ma byt dost dobry na to, aby sis nevymyslel nahodne ukoly.

Pouzij pet vrstev:

| Vrstva | Otazka | Priklad |
| --- | --- | --- |
| Obchodni vysledek | Proc produkt existuje? | Mesicni opakovany prijem, placene ucty, retence firem |
| Zakaznicka hodnota | Co zakaznik ziska? | Dokoncene audity, vyresene tikety, vystavene reporty |
| Aktivace | Kdy poprve zazije hodnotu? | Prvni import, prvni publikovana stranka, prvni sdileny vystup |
| Vstupni akce | Co musi udelat predtim? | Registrace, pozvani kolegy, nahrani souboru, nastaveni integrace |
| Kvalitativni signal | Co nam cislo nerekne? | Duvod odchodu, support dotaz, poznamka z dema |

Priklad pro B2B SaaS na schvalovani obsahu:

```text
Obchodni vysledek: placene tymy, ktere zustanou dalsi mesic
Zakaznicka hodnota: obsah schvaleny bez ztracenych emailu
Aktivace: tym vytvori prvni workflow a schvali prvni polozku
Vstupni akce: pozvani druheho cloveka, nahrani prvniho navrhu, nastaveni role
Kvalitativni signal: "usetri nam to pondelni kontrolni call"
```

Takhle postaveny strom je prakticky i pro marketing. Neoptimalizuj jen na navstevnost. Sleduj, jestli konkretni obsah privadi lidi, kteri rozumi problemu, projdou hlavni cestou a dokazou rict, proc by produkt pouzili.

### 3. Vanity metriky nech jako kontext, ne jako cil

Vanity metrika je cislo, ktere vypada dobre, ale samo o sobe nerika, co mas udelat. Navstevnost, pocet zobrazeni, registrace zdarma, followers nebo pocet stazenych PDF muzou byt uzitecny kontext. Problem nastane, kdyz se stanou cilem.

Rozlis tri typy metrik:

- Vysledkove: penize, retence, aktivni zakaznicke ucty, dokoncene hodnotne vystupy.
- Diagnosticke: konverze kroku, chybovost formulare, cas do aktivace, odpoved supportu.
- Kontextove: navstevnost, imprese, prokliky, otevreni emailu, socialni reakce.

Kdyz kontextova metrika roste a vysledkova ne, neoslavuj. Ptej se:

- Privadime spravny segment?
- Slibuje marketing neco jineho nez produkt dodava?
- Je hlavni akce viditelna a srozumitelna?
- Neni formular nebo trial prilis tezky?
- Nemeri se konverze v miste, ktere nema obchodni hodnotu?

**Priklad:**

Clanek privede 2 000 navstev, 80 lidi klikne na CTA a nikdo nepozada o demo. To neni uspech jen proto, ze graf navstevnosti hezky poskocil. Mozna clanek lovi prilis obecne publikum. Mozna CTA slibuje audit, ale stranka chce rovnou registraci. Mozna tema patri do edukace, ne do akvizice. Rozhodnuti neni "napsat vic takovych clanku". Rozhodnuti je upravit navazujici cestu nebo zmenit obsahovy cil.

### 4. Mer na urovni uctu, ne osobniho detektiva

U B2B SaaS casto nepotrebujes vedet vse o jednotlivci. Casto staci account-level pohled: co se deje s firmou, pracovnim prostorem nebo projektem. To snizuje datovou stopu a lepe odpovida tomu, jak se v B2B nakupuje a obnovuje spoluprace.

Privacy-first pravidla:

- Ukladej agregovane signaly, pokud nepotrebujes individualni historii.
- Oddel produktovou analytiku od supportnich a obchodnich poznamek.
- Neposilej obsah zakaznickych dat do analytiky. Event `document_approved` staci; nazev dokumentu tam nepatri.
- Pseudonymizuj identifikatory tam, kde neni nutne zobrazovat email nebo jmeno.
- Nastav retenci eventu podle rozhodnuti, ktera z nich delas.
- Do metrik nedavej pole "jen pro jistotu". Jistota je nejdrazsi datovy typ.

Priklad dobrych eventu:

```text
workspace_created
member_invited
first_project_created
first_export_completed
integration_connected
approval_completed
```

Priklad zbytecne hladovych eventu:

```text
user_read_document_title
user_opened_client_contract_filename
user_copied_customer_email
user_viewed_invoice_amount_with_note
```

Pokud metrika potrebuje pracovat s citlivym obsahem, zastav se. Mozna meri spatnou vec. Mozna ma byt signal odvozeny v aplikaci a do analytiky ma odejit jen bezpecny stav, napriklad `risk_review_required: true`.

### 5. Nastav prahy pro akci predem

Metrika bez prahu je pozvanka k nekonecnemu debatnimu krouzku. Predem si rekni, co znamena dobre, varovne a spatne.

Sablona:

```text
Metrika:
Proc ji sledujeme:
Segment:
Frekvence:
Zelena zona:
Zluta zona:
Cervena zona:
Akce pri zlute:
Akce pri cervene:
Kdy metriku zrusime:
```

Priklad:

```text
Metrika: aktivace noveho workspace
Proc ji sledujeme: ukazuje, zda novy tym pochopi prvni hodnotu
Segment: nove B2B ucty s pozvanim aspon jednoho clena
Frekvence: tydne
Zelena zona: 60 % workspace dokonci prvni hodnotny vystup do 7 dni
Zluta zona: 40-59 %
Cervena zona: pod 40 %
Akce pri zlute: projit 5 poslednich onboarding zaznamu a 3 support dotazy
Akce pri cervene: zastavit nove onboarding experimenty, opravit hlavni tok
Kdy metriku zrusime: az bude aktivace stabilni 8 tydnu a nahradi ji retencni signal
```

Prahy nemusi byt dokonale. Dulezite je, ze brani tomu, aby se kazdy tyden znovu vyjednavalo, jestli je problem problem. Maly tym potrebuje energii na opravy, ne na soudni proces s grafem.

### 6. Tydni metricka porada bez prezentacniho divadla

Jednou tydne staci 30 minut. Zadny slajdovy festival. Jeden dokument, pet otazek, jedno rozhodnuti.

Agenda:

```text
1. Co se zmenilo proti minulemu tydnu?
2. Ktera metrika je mimo dohodnuty prah?
3. Co je nejpravdepodobnejsi vysvetleni?
4. Jake jedno rozhodnuti udelame tento tyden?
5. Jak overime, ze to pomohlo?
```

Pravidla:

- Porovnavas stejne segmenty, ne nahodne smichane uzivatele.
- U kazde zmeny hledas i kvalitativni kontext.
- Neresis vsechny grafy. Resis jeden nejdulezitejsi problem.
- Nepridavas novou metriku bez rozhodnuti, ktere ma podporit.
- Metriky, ktere tri mesice nikdo nepouzil pro rozhodnuti, mazes nebo archivujes.

Vystup z porady ma byt kratky:

```text
Datum:
Hlavni signal:
Interpretace:
Rozhodnuti:
Vlastnik:
Kontrola za:
```

Tohle je schvalne nudne. Nudny system, ktery se opakuje, porazi genialni dashboard, na ktery se vsichni divaji jen pred board meetingem.

### 7. 60min postup

```text
0-10 min: Vyber jedno rozhodnuti.
Napr. onboarding, aktivace, retence, kvalita leadu nebo support zatez.

10-20 min: Nakresli petivrstvy strom.
Obchodni vysledek, zakaznicka hodnota, aktivace, vstupni akce, kvalitativni signal.

20-30 min: Vyber 3-5 metrik.
Jednu vysledkovou, dve diagnosticke, jednu kontextovou a jeden kvalitativni signal.

30-40 min: Zkontroluj datovou stopu.
Vyhod osobni udaje, obsah zakaznickych dat a pole "pro jistotu".

40-50 min: Nastav prahy a akce.
Zelena, zluta, cervena zona. U kazde problemove zony konkretni dalsi krok.

50-60 min: Zaloz tydni zapis.
Jedna stranka nebo jeden dokument, ktery bude tym aktualizovat kazdy tyden.
```

### Sablona metrickove karty

```text
Nazev metriky:
Typ: vysledkova / diagnosticka / kontextova / kvalitativni
Rozhodnuti, ktere podporuje:
Segment:
Definice citatele:
Definice jmenovatele:
Casove okno:
Zdroj dat:
Osobni udaje:
Citliva data:
Retence:
Zelena zona:
Zluta zona:
Cervena zona:
Akce pri problemu:
Vlastnik:
Datum posledni revize:
```

### Checklist: produktove metriky bez vanity dashboardu

- [ ] Kazda metrika podporuje konkretni rozhodnuti.
- [ ] Existuje jeden jednoduchy metrickovy strom pro hlavni produktovy tok.
- [ ] Tym rozlisuje vysledkove, diagnosticke a kontextove metriky.
- [ ] Vanity metriky nejsou samy o sobe cilem.
- [ ] Eventy neposilaji obsah zakaznickych dat do analytiky.
- [ ] Kde to jde, meri se na urovni uctu, workspace nebo projektu.
- [ ] Identifikatory jsou pseudonymizovane, pokud neni potreba jmeno nebo email.
- [ ] Retence eventu odpovida realnemu rozhodovacimu oknu.
- [ ] Pro hlavni metriky existuji zelene, zlute a cervene prahy.
- [ ] Tydni porada konci jednim rozhodnutim, vlastnikem a terminem kontroly.
- [ ] Nepouzivane metriky se pravidelne mazou nebo archivuji.
- [ ] Marketing, produkt a support sdili stejnou definici aktivace a hodnoty.

---

## Self-service znalostni baze bez supportniho bludiste za 60 minut

Znalostni baze neni sklad odlozenych navodu. Je to produktova soucast, ktera ma snizit nejistotu zakaznika v presny okamzik, kdy nevi, co dal. Kdyz je dobre udelana, zkracuje onboarding, zmensuje supportni frontu a zveda duveru. Kdyz je spatne udelana, jen presune chaos z chatu do dalsiho mista, ktere nikdo neudrzuje.

Privacy-first pohled je jednoduchy: pomoz zakaznikovi bez toho, aby ses ho hned ptal na email, poustel pres nej sledovaci skripty nebo zaviral odpovedi do platformy, kterou nejde normalne prohledat. Dobra znalostni baze ma verejne URL, funguje bez prihlaseni tam, kde to jde, ma RSS nebo changelog pro novinky a meri jen to, co pomaha zlepsit obsah.

### 1. Nejdriv rozdel obsah podle situace zakaznika

Zakaznik nehleda "dokumentaci". Hleda odpoved na konkretni napeti:

- Chci zacit a nevim, co nastavit jako prvni.
- Neco se rozbilo a potrebuji se rychle odblokovat.
- Potrebuji vysvetlit rozhodnuti kolegovi nebo pravnikovi.
- Chci udelat pokrocily krok a nechci rozbit data.
- Odchazim, exportuji nebo menim dodavatele.

Podle toho rozdel znalostni bazi do peti kosu:

| Kos | Ucel | Typicke clanky |
| --- | --- | --- |
| Start | Dostat cloveka k prvni hodnote | zalozeni uctu, prvni projekt, pozvani tymu |
| Reseni problemu | Rychle odblokovat chybu | prihlaseni, fakturace, import, integrace |
| Rozhodovani | Pomoci nakupu a internimu schvaleni | bezpecnost, DPA, hosting, subprocesori |
| Pokrocile pouziti | Zmensit support u slozitejsich toku | API, role, exporty, webhooky |
| Ukonceni a kontrola | Dat zakaznikovi klid pri zmene | export dat, mazani, offboarding |

Tohle rozdeleni je dulezitejsi nez hezka navigace. Navigace muze byt pozdeji. Situacni kose ti hned ukazou, kde mas mezery.

**Priklad:**

Pokud support porad odpovida na otazku "Kde najdu fakturu?", nepatri to do blogu, do FAQ na konci landing page ani do interniho Slack vlakna. Patri to do clanku v kosi "Reseni problemu" s nazvem "Kde stahnout fakturu a zmenit fakturacni email".

### 2. Pis clanky jako rozhodovaci jednotky

Dobry supportni clanek ma jeden cil. Ne tri. Kdyz uzivatel otevrel navod k importu CSV, nechce cist filozofii datove migrace. Chce vedet, jak pripravit soubor, co se stane pri chybe a jak import vratit.

Sablona clanku:

```text
Nazev:
Pro koho to je:
Kdy to pouzit:
Co budete potrebovat:
Kroky:
Co se stane po dokonceni:
Caste chyby:
Bezpecnost a data:
Kdy kontaktovat podporu:
Posledni aktualizace:
Vlastnik:
```

Nazev pis podle sloves a vysledku:

- "Pozvat clena tymu"
- "Zmenit fakturacni email"
- "Exportovat projektova data"
- "Obnovit pristup pres zapomenute heslo"
- "Pripojit webhook a otestovat podpis"

Slaby nazev je "Nastaveni uctu". To je police, ne odpoved. Lepsi je "Zmenit jmeno pracovniho prostoru" nebo "Vypnout pristup clena tymu". Ano, je to mene monumentalni. Presne proto to funguje.

### 3. Bezpecnostni a privacy informace dej primo do navodu

Privacy stranka je nutna, ale sama o sobe nestaci. Zakaznik potrebuje citlivou informaci prave ve chvili, kdy dela citlivou akci. U exportu chce vedet, kdo export uvidi. U webhooku chce vedet, co se posila ven. U podpory chce vedet, jestli musi poslat screenshot se zakaznickymi daty.

Do kazdeho navodu pridej kratky blok:

```text
Bezpecnost a data
- Tato akce pracuje s:
- Data se odesilaji do:
- Pristup potrebuje role:
- Auditni stopa uklada:
- Mazani nebo zmena je mozne:
```

Priklad pro export:

```text
Bezpecnost a data
- Export obsahuje nazvy projektu, clenstvi v tymu a vybrane zaznamy.
- Export se nevytvari pres treti marketingovy nastroj.
- Odkaz ke stazeni vidi jen uzivatel s roli Owner nebo Admin.
- Auditni stopa uklada cas, uzivatele, typ exportu a ID workspace.
- Soubor je automaticky smazan po 7 dnech.
```

Tohle neni pravnicke divadlo. Je to prakticka brzda proti tomu, aby tym pozdeji do exportu pridal "jen jeste jedno pole" a nikdo si nevsiml, ze z navodu zmizela pravda.

### 4. Vyhledavani ma slouzit odpovedi, ne profilovani

Vyhledavani ve znalostni bazi je uzitecne, ale nemusi z nej vzniknout profil zakaznika. Pro maly SaaS obvykle staci agregovane dotazy a seznam dotazu bez vysledku.

Mer:

- hledany vyraz,
- pocet vysledku,
- kliknuty clanek,
- zda po hledani vznikl support ticket,
- den nebo tyden, ne nutne presny cas,
- jazyk nebo sekci, pokud je to potreba pro obsah.

Nemer:

- cele session replaye cteni dokumentace,
- osobni historii vsech dotazu konkretniho uzivatele,
- obsah zakaznickych dat vlozeny do vyhledavani,
- cross-site identifikatory,
- marketingove publikum podle prectenych clanku.

Pokud nekdo do vyhledavani vlozi email, token nebo cast smlouvy, system by to mel umet minimalne nezobrazovat v internich reportech. Idealni je dotazy pred ulozenim ocistit o zjevne citlive vzory: emaily, API klice, dlouhe tokeny, telefonni cisla a URL s parametry.

**Codyho komentar:** Search logy jsou takovy maly supportni rentgen. Hodne pomahaji, ale kdyz je sbiras bez filtru, najdes v nich i veci, ktere jsi nikdy nechtel vlastnit.

### 5. Napoj support, ale neschovej odpovedi za ticket

Znalostni baze a support maji byt jeden system uceni. Kazdy opakovany ticket je kandidat na clanek, kazdy spatny clanek je kandidat na opravu produktu.

Jednoduche pravidlo:

- Jeden dotaz jednou odpovez cloveku.
- Druhy podobny dotaz dopln do existujiciho clanku.
- Treti podobny dotaz vytahni do samostatneho navodu nebo oprav produktovy tok.

Support formular ve znalostni bazi ma byt stridmy:

```text
Predmet:
Email pro odpoved:
URL stranky nebo ID workspace:
Co jste zkouseli:
Co jste cekali:
Co se stalo:
Souhlasite s prilohou screenshotu bez citlivych dat:
```

Pole "URL stranky nebo ID workspace" je lepsi nez volny dump situace. Uzivatel pak neposila pulku databaze do textarea. Kdyz potrebujes citlive artefakty, vyzadej si je samostatnym bezpecnym kanalem a s jasnou retenci.

### 6. Udrzba: kazdy clanek musi mit vlastnika a datum

Dokumentace starne potichu. Produkt se meni, tlacitka se prejmenuji, screenshoty zhnednou a jednou zjistis, ze nejnavstevovanejsi navod popisuje UI, ktere uz pul roku neexistuje. Klasika. Neni to katastrofa, jen signal, ze dokumentace nema provozni rytmus.

Minimum pro udrzbu:

- Kazdy clanek ma vlastnika.
- Kazdy clanek ma datum posledni vecne kontroly.
- Kriticke clanky maji revizi po kazdem releasu, ktery meni dany tok.
- Support muze oznacit clanek jako "neodpovida realite".
- Metriky bez vysledku a support dotazy bez clanku se prochazi jednou tydne.
- Archivovane clanky zustanou presmerovane, pokud na ne vede verejna URL.

Prakticky staci jedna tabulka:

```text
Clanek:
Kos:
Vlastnik:
Produktovy tok:
Posledni kontrola:
Trigger revize:
Nejblizsi akce:
```

Kdyz pouzivas screenshoty, udrzuj je jako pomoc, ne jako jediny navod. Textove kroky musi fungovat i bez obrazku. U pristupnosti mysli na to, ze obrazky potrebuji alternativni popis a navod nesmi stat jen na barve nebo vizualnim umisteni. WCAG 2.2 je dobry primarni ramec pro pristupnost weboveho obsahu: https://www.w3.org/TR/WCAG22/

### 7. 60min postup

```text
0-10 min: Vyber deset nejcastejsich supportnich otazek.
Vezmi posledni tickety, emaily nebo dotazy z dema. Bez osobnich detailu.

10-20 min: Rozdel je do peti kosu.
Start, reseni problemu, rozhodovani, pokrocile pouziti, ukonceni a kontrola.

20-30 min: Napis tri nejdulezitejsi clanky podle sablony.
Kazdy clanek resi jednu situaci, ne celou oblast produktu.

30-40 min: Dopln blok "Bezpecnost a data".
U kazde akce popis, jaka data se zpracovavaji a kdo k nim ma pristup.

40-50 min: Nastav minimalni mereni.
Sleduj dotazy bez vysledku, nejctenejsi clanky a nasledne support tickety bez osobniho profilovani.

50-60 min: Prirad vlastniky a revizni trigger.
Kazdy clanek ma datum kontroly a udalost, pri ktere se musi znovu projit.
```

### Sablona supportniho clanku

```text
# [Sloveso + vysledek]

Pro koho to je:
Kdy to pouzit:
Co budete potrebovat:

## Kroky
1.
2.
3.

## Co se stane po dokonceni

## Caste chyby

## Bezpecnost a data
- Tato akce pracuje s:
- Data se odesilaji do:
- Pristup potrebuje:
- Auditni stopa uklada:
- Retence nebo mazani:

## Kdy kontaktovat podporu

Posledni vecna kontrola:
Vlastnik:
```

### Checklist: self-service znalostni baze bez supportniho bludiste

- [ ] Znalostni baze je rozdelena podle situaci zakaznika, ne podle interni organizace tymu.
- [ ] Nejdulezitejsi clanky maji nazvy podle akce a vysledku.
- [ ] Kazdy clanek resi jednu konkretni situaci.
- [ ] Kriticke navody obsahuji blok "Bezpecnost a data".
- [ ] Verejne odpovedi nejsou schovane jen v support ticketech nebo socialnich platformach.
- [ ] Support formular nesbira citlive artefakty bez jasneho duvodu.
- [ ] Vyhledavani uklada jen agregovane nebo ocistene signaly.
- [ ] Search logy neobsahuji emaily, tokeny, cele URL s parametry ani obsah zakaznickych dat.
- [ ] Kazdy clanek ma vlastnika a datum posledni kontroly.
- [ ] Release, ktery meni produktovy tok, spousti revizi souvisejici dokumentace.
- [ ] Archivovane verejne URL maji presmerovani nebo jasne vysvetleni.
- [ ] Navody jsou pouzitelne i bez obrazku a respektuji zakladni pristupnost.

---

## Produktova edukace a in-app oznameni bez otravneho sledovani za 45 minut

Kdyz SaaS roste, zacnes resit nenapadny problem: jak lidem rict, ze se neco zmenilo, aniz bys z aplikace udelal adventni kalendar modalu. Produktova edukace ma uzivateli pomoct udelat dalsi spravny krok. Nema byt nahrada za nejasne UI, marketingovy megafon ani vymluva pro dalsi sledovaci knihovnu.

Privacy-first verze je jednoducha: zmeny popisuj na primarnich URL, v aplikaci ukazuj jen relevantni a kratke signaly, mer jen to, podle ceho dokazes produktove rozhodnout, a nech uzivatele odlozit nebo zavrit veci bez trestu.

### 1. Rozdel oznameni podle duvodu, ne podle nadseni tymu

Ne kazda novinka potrebuje stejny kanal. Prvni filtr je duvod, proc ma uzivatel zpravu videt.

| Typ zpravy | Kdy ji pouzit | Nejlepsi kanal |
| --- | --- | --- |
| Nova funkce | Uzivatel ziska novou schopnost nebo rychlejsi tok. | Changelog, kratky in-app tip, dokumentace |
| Zmena stavajiciho toku | Meni se misto, nazev, pravidlo nebo chovani. | In-app banner v kontextu, changelog, email pro vlastniky uctu |
| Bezpecnostni nebo privacy zmena | Meni se prace s daty, pristupy, exportem nebo dodavatelem. | Primarni URL, email vlastnikovi uctu, auditni poznamka |
| Billing zmena | Meni se cena, plan, limit, fakturacni pravidlo nebo platebni tok. | Email, billing obrazovka, dokumentace |
| Incident nebo degradace | Sluzba nefunguje podle slibu. | Status page, email podle dopadu, viditelna zprava v aplikaci |
| Onboarding tip | Uzivatel je v konkretni situaci poprve. | Inline tip primo u akce |

Pravidlo: kdyz neumim rict, jake rozhodnuti ma uzivatel po zprave udelat, zpravu neposilam. "Mame novou vec" neni rozhodnuti. "Zapnete novy export, pokud predavate reporty klientum" uz rozhodnuti je.

### 2. Modal je posledni moznost, ne vychozi komponenta

Modal prerusi praci. To je nekdy spravne, treba pri rizikove zmene pristupu nebo nevratne akci. Pro vetsinu edukace je ale lepsi klidnejsi forma:

- inline tip u prvku, ktery se opravdu tyka dane zmeny,
- maly banner na strance, kde ma informace kontext,
- tecka nebo odznak u navigace, pokud zmena neni urgentni,
- changelog s primarni URL, na kterou jde odkazovat,
- dokumentacni clanek pro detail,
- email jen pro zmeny, ktere si zaslouzi doruceni mimo aplikaci.

Otravne oznameni ma obvykle tri znaky: nejde zavrit, vraci se po kazdem refreshi a nuti uzivatele cist marketingovy text ve chvili, kdy chtel pracovat. To neni edukace. To je okupace pozornosti.

**Codyho komentar:** Kdyz produkt potrebuje pet vyskakovacich oken, aby clovek pochopil jednu novou funkci, problem neni v uzivateli. Problem je v tom, ze funkce nema dost jasne misto v produktu. Au, ale lepsi bolet u navrhu nez u churnu.

### 3. Mer adopci bez osobniho detektiva

U edukace casto staci vedet, jestli zprava pomaha. Nepotrebujes detailni casovou osu kazdeho uzivatele.

Minimalni privacy-first eventy:

| Otazka | Minimalni signal | Co s tim udelas |
| --- | --- | --- |
| Videli lide zpravu? | Pocet zobrazeni podle typu uctu nebo planu | Poznas dosah bez osobniho profilu. |
| Zavreli ji okamzite? | Agregovana mira zavreni | Zkratis text nebo zmenis kanal. |
| Klikli na navod? | Klik na primarni URL clanku | Zlepsis dokumentaci nebo mikrocopy. |
| Pouzili funkci? | Account-level aktivace funkce | Vyhodnotis realnou adopci. |
| Zpusobila zmena support? | Pocet ticketu se stitkem zmeny | Doplnis navod nebo upravis tok. |

Vyhni se eventum typu `hovered_tooltip_for_1_7_seconds`, pokud z nich neplyne konkretni rozhodnuti. Stejne tak nedavej do event payloadu text zadaneho pole, email uzivatele, cele URL s tokeny nebo interni obsah zakaznika.

Dobry kompromis je ukladat stav oznameni na urovni uctu nebo anonymni session podle potreby produktu:

- `announcement_id`
- `account_segment`
- `shown_at`
- `dismissed_at`
- `clicked_doc`
- `activated_feature`

Kdyz potrebujes pamatovat zavreni banneru, casto staci technicky stav v aplikaci nebo lokalni nastaveni. Pokud se z toho stava marketingovy profil, zastav se a zeptej se, kdo z toho ma uzitek.

### 4. Changelog je misto pravdy, ne odkladiste vet

Changelog ma tri role: pomaha zakaznikum pochopit vyvoj produktu, podporuje obchodni duveru a drzi tym u zeme. Kdyz existuje verejna primarni URL pro zmenu, muzes na ni odkazovat z aplikace, supportu, emailu i dokumentace bez kopirovani textu do peti nastroju.

Keep a Changelog doporucuje strukturu zmen kolem kategorii jako Added, Changed, Deprecated, Removed, Fixed a Security: https://keepachangelog.com/en/1.1.0/. Pro SaaS ji preloz prakticky:

- `Pridano`: nova schopnost, ktera uzivateli neco umozni.
- `Zmeneno`: uprava existujiciho toku nebo pravidla.
- `Opraveno`: chyba, ktera mela dopad na praci.
- `Bezpecnost a data`: zmena kolem pristupu, exportu, retence, auditu nebo dodavatelu.
- `Dokumentace`: navody, ktere meni schopnost uzivatele neco vyresit sam.

Privacy-first detail: changelog ma byt dostupny bez socialni platformy, bez newsletterove pasti a bez reklamniho pixelu. RSS nebo Atom feed je porad prakticky kanal pro lidi i firmy, ktere chteji sledovat zmeny bez zavislosti na algoritmu. Specifikace RSS 2.0 je zde: https://www.rssboard.org/rss-specification a Atom zde: https://www.rfc-editor.org/rfc/rfc4287.

### 5. Text oznameni pis jako servisni zpravu

Dobry in-app text je kratky, konkretni a nehraje si na ohnostroj.

Slaba verze:

> Objevte nasi revolucni novou zkusenost s reporty!

Lepsi verze:

> Reporty ted muzete exportovat po klientech. Hodilo se to hlavne tymum, ktere predavaji mesicni vysledky mimo aplikaci.

Jeste lepsi, kdyz je v kontextu:

> Export po klientech je dostupny tady. Stahuje jen sloupce vybrane v aktualnim filtru.

Sablona mikrotextu:

> [Co se zmenilo.] [Komu to pomuze.] [Co se stane s daty nebo kde jsou limity.] [Primarni odkaz.]

Priklady:

- `Webhooky ted podporuji podpis payloadu. Hodit se to bude tymum, ktere napojuji produkcni integrace. Tajemstvi se zobrazi jen pri vytvoreni. Navod: /docs/webhooks-signatures.`
- `Export aktivit je novy v adminu uctu. Obsahuje jen auditni udalosti, ne obsah zakaznickych zprav. Detail: /changelog/audit-export.`
- `Stary importni format vypneme 30. zari 2026. Dotcene ucty maji v nastaveni kontrolu kompatibility. Postup migrace: /docs/import-migration.`

U pristupnosti mysli na to, ze oznameni nesmi byt dostupne jen barvou, animaci nebo mizicim toastem. WCAG 2.2 je primarni referencni dokument pro pristupnost weboveho obsahu: https://www.w3.org/TR/WCAG22/.

### 6. 45min postup

0-10 minut: Vyber jednu zmenu, kterou potrebujes komunikovat. Napis, kdo ji musi vedet, proc a co ma po precteni udelat.

10-20 minut: Rozhodni kanal. Pouzij changelog jako primarni misto pravdy. In-app zpravu dej jen tam, kde ma kontext. Email posli jen vlastnikum nebo adminum, kterych se zmena opravdu tyka.

20-30 minut: Napis servisni text podle sablony. Zkontroluj, jestli obsahuje dopad na data, pokud se zmena tyka exportu, pristupu, retence, analytiky, billing toku nebo integrace.

30-38 minut: Navrhni minimalni mereni. Staci zobrazeni, zavreni, klik na navod, account-level aktivace a support stitek. Zadny obsah zakaznickych dat do eventu.

38-45 minut: Pridej uklid. Zprava ma expiraci, vlastnika, odkaz na detail a pravidlo, kdy se prestane zobrazovat.

### Sablona oznamovaci karty

```text
Nazev zmeny:
Typ zpravy: nova funkce / zmena toku / privacy-security / billing / incident / onboarding tip
Komu se zobrazi:
Kde se zobrazi:
Primarni URL:
Text oznameni:
Co ma uzivatel udelat:
Datovy dopad:
Minimalni eventy:
Kdy zprava expiruje:
Vlastnik:
Support stitek:
```

### Checklist: produktova edukace bez otravneho sledovani

- [ ] Kazde oznameni ma jasny duvod a rozhodnuti pro uzivatele.
- [ ] Changelog nebo dokumentace je primarni URL, na kterou jde odkazovat.
- [ ] Modal pouzivas jen pro zmeny, ktere opravdu musi prerusit praci.
- [ ] In-app zprava se zobrazuje v kontextu, kde ma uzivatel co udelat.
- [ ] Text je servisni, kratky a bez nafoukle marketingove mlhy.
- [ ] Privacy, security, billing a datove zmeny maji explicitni dopad na data.
- [ ] Mereni adopce je minimalni a idealne account-level.
- [ ] Event payloady neobsahuji osobni data, obsah zakaznika ani tokeny v URL.
- [ ] Zprava jde zavrit nebo odlozit, pokud nejde o kriticky stav.
- [ ] Oznamenim nastavujes expiraci a vlastnika.
- [ ] RSS/Atom nebo prime URL umoznuji sledovat zmeny bez socialni platformy.
- [ ] Support vi, jakou zmenu zprava komunikuje a jaky stitek pouzit.

---

## Souhlasy a preference bez temnych vzoru za 60 minut

Souhlas neni jen pravni checkbox. Je to produktovy slib: "Tady mas kontrolu a my ji budeme respektovat i tehdy, kdyz se nam marketingove hodi opak." U maleho SaaS se souhlasy rychle rozlezou do cookies, emailu, produktovych notifikaci, integraci, newsletteru, beta funkci a podpory. Kdyz je nechas jako hromadu nahodnych poli v ruznych nastrojich, vznikne chaos, ktery pozdeji boli vic nez prvni poctiva tabulka.

Privacy-first pristup zacina jednoduse: oddel nezbytne provozni zpracovani od volitelnych preferenci, vysvetli kazdy ucel bez pravnicke mlhy a udelej odvolani stejne jednoduche jako udeleni. U cookies a podobnych technologii cesky UOOU zduraznuje rozliseni technickych a netechnickych cookies, souhlas pro netechnicke cookies a to, ze nesouhlas ma byt dostupny bez natlaku a ve srovnatelnem provedeni jako souhlas: https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies. GDPR pak obecne pracuje s pozadavkem, aby souhlas byl svobodny, konkretni, informovany a jednoznacny: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng.

**Codyho komentar:** Preference centrum neni misto, kde uzivatele unavis k souhlasu. Je to misto, kde dokazujes, ze "kontrola nad daty" neni jen hezka veta pro pitch deck.

### 1. Nejdriv udelej inventar rozhodnuti

Nepis hned UI. Nejdriv sepis, kde v produktu nebo webu clovek dela rozhodnuti o datech a komunikaci.

Typicke kategorie:

- technicke cookies a uloziste nutne pro fungovani,
- analytika prvni strany,
- marketingove cookies nebo reklamni mereni,
- produktove emaily nutne pro ucet,
- marketingove emaily a newsletter,
- in-app oznameni,
- beta funkce nebo early access,
- integrace, ktere posilaji data mimo hlavni system,
- sdileni testimonialu, citaci nebo pripadovych studii,
- support pristup k uctu nebo debug artefaktum.

U kazde kategorie si napis tri veci: ucel, pravni nebo provozni duvod a misto, kde muze uzivatel volbu zmenit. Pokud u volby neumis rict, kde se meni, nemas preferenci. Mas jen historickou nehodu v databazi.

### 2. Oddel souhlas, preferenci a nezbytnou zpravu

V produktu se casto plete troje:

| Typ | Priklad | Co s tim |
| --- | --- | --- |
| Nezbytna provozni zprava | reset hesla, faktura, bezpecnostni upozorneni | Neprezentuj jako marketingovou volbu, ale neposilej do ni reklamu. |
| Preference komunikace | mesicni produktovy digest, tipy pro adminy | Umoznuje snadnou zmenu a vysvetli dopad vypnuti. |
| Souhlas se zpracovanim nebo ulozenim | netechnicke cookies, marketingove mereni, testimonial | Potrebujes jasny aktivni krok a dukaz, kdy a k cemu byl dan. |

Prakticke pravidlo: kdyz zprava souvisi s bezpecnosti, uctem, billingem nebo plnenim smlouvy, neptej se na ni stylem "Chcete od nas dostavat emaily?" Rekni jasne, proc je nutna. Kdyz jde o rustovy newsletter, beta pozvanky nebo marketingove mereni, neschovavej to mezi provozni text.

**Priklad spatneho spojeni:**

> Souhlasim s obchodnimi podminkami, ochranou osobnich udaju a zaslanim novinek.

Tohle micha smluvni krok, informacni dokument a marketingovy souhlas. Uzivatel nevi, co realne odmita nebo prijima.

**Lepsi verze:**

- `Prectl jsem si obchodni podminky a beru je na vedomi jako soucast objednavky.`
- `Novinky a prakticke tipy chci dostavat emailem. Lze kdykoli odhlasit.`
- `Volitelne analyticke cookies povolim az po vysvetleni v cookie nastaveni.`

### 3. Preference centrum musi byt jedno misto pravdy

U maleho SaaS nemusi preference centrum byt velka obrazovka. Muze to byt stranka v nastaveni uctu nebo spravcovsky panel pro organizaci. Dulezite je, aby neslo o pet roztrousenych prepinacu, z nichz tri ziji v emailovem nastroji a dva v aplikaci.

Minimalni struktura:

- `Komunikace`: produktove tipy, novinky, webinare, pripadne digesty.
- `Mereni`: volitelna analytika, pokud ji pouzivas na urovni uctu nebo webu.
- `Integrace`: ktere externi sluzby mohou dostavat data a proc.
- `Beta a vyzkum`: pozvanky k rozhovorum, testovani funkci, produktove pruzkumy.
- `Historie souhlasu`: kdy byla volba zmenena, kym a z jakeho rozhrani.

Pro B2B SaaS rozlis osobni a account-level volby. Admin muze rozhodovat o integraci nebo account-level analytice, ale jednotliveho cloveka nenuti k marketingovemu newsletteru. Kdyz je volba na urovni organizace, napis to do UI lidsky:

> Tuhle volbu nastavuje vlastnik uctu pro celou organizaci. Ovlivnuje produktove mereni, ne marketingove emaily jednotlivcu.

### 4. Souhlas zapisuj jako auditovatelny fakt

Kdyz je souhlas pravni nebo provozni opora, musi byt pozdeji dohledatelny. Ne z paranoie, ale kvuli podpore, auditu a duvere.

Zaznam souhlasu by mel obsahovat:

- identifikator subjektu nebo uctu,
- ucel a verzi textu, ke kteremu se clovek vyjadril,
- stav `granted`, `denied`, `withdrawn` nebo `not_asked`,
- timestamp,
- zdroj rozhrani,
- jazyk nebo lokalizaci textu,
- verzi privacy/cookie dokumentu, pokud je relevantni,
- minimalni technicky kontext pro dokazani toku, ne plny fingerprint.

Co do zaznamu typicky nepatri:

- cele IP adresy bez jasneho duvodu,
- kompletni user-agent navzdy,
- obsah formulare,
- tokeny v URL,
- presne behavioralni udalosti okolo volby.

Kdyz potrebujes dokazovat, ze rozhrani bylo ferove, udelej screenshot nebo verzovanou kopii textu souhlasu v repozitari nebo dokumentacnim hubu. Je to cistsi nez sbirat zbytecne identifikatory kazdeho navstevnika.

### 5. Odvolani nedelej jako support ticket

Nejvetsi test souhlasu neni okamzik prijeti. Je to okamzik odmitnuti nebo odvolani. Pokud clovek musi psat na podporu, hledat skryty odkaz nebo se prihlasovat do neexistujiciho uctu, kontrola je jen divadlo.

Prakticke vzory:

- V paticce webu dej odkaz `Nastaveni cookies`, pokud pouzivas cookie listu.
- V kazdem marketingovem emailu dej prime odhlaseni.
- V aplikaci dej preference do nastaveni uctu, ne jen do onboardingoveho kroku.
- U account-level souhlasu ukaz, kdo ho muze menit.
- Po odvolani rekni, co se stane hned a co muze dobehnout pozdeji.

Priklad potvrzeni:

> Marketingove emaily jsou vypnute. Provozni zpravy k uctu, fakturam a bezpecnosti budeme posilat dal, protoze jsou potreba pro fungovani sluzby.

Tohle je lepsi nez tiche "Ulozeno", protoze jasne rozlisuje preference od nezbytnych zprav.

### 6. 60min postup

0-10 minut: Sepis vsechna mista, kde uzivatel nebo admin dava souhlas, nastavuje komunikaci nebo zapina integraci. Zahrn web, aplikaci, emaily, support, onboarding a billing.

10-20 minut: Rozdel polozky na nezbytne provozni zpracovani, preference a souhlasy. U kazde polozky pridej ucel a vlastnika.

20-32 minut: Navrhni jedno preference centrum nebo jednu tabulku pravdy. Urci, ktere volby jsou osobni a ktere patri cele organizaci.

32-42 minut: Zkontroluj mikrotexty. Kazda volba ma rict, co se zapne, komu data odchazeji, jak dlouho volba plati a kde ji lze zmenit.

42-52 minut: Navrhni zaznam souhlasu. Drz ho kratky: stav, ucel, verze textu, timestamp, zdroj a minimalni identita.

52-60 minut: Udelej test odvolani. Najdi nejrychlejsi cestu, jak odmitnout cookies, odhlasit email a vypnout volitelnou integraci. Kde to nejde do dvou minut, vznikl ukol.

### Sablona karty souhlasu nebo preference

```text
Nazev volby:
Typ: nezbytne / preference / souhlas
Uroven: osoba / organizace / verejny navstevnik
Ucel:
Co se zapne:
Jake osobni udaje se pouziji:
Dodavatele nebo prijemci:
Vychozi stav:
Kde se volba meni:
Jak se odvola:
Co zustava aktivni i po vypnuti:
Retence zaznamu:
Vlastnik:
Verze textu:
```

### Checklist: souhlasy a preference bez temnych vzoru

- [ ] Vim, kde vsude produkt sbira souhlas nebo komunikacni preferenci.
- [ ] Nezbytne provozni zpravy nejsou smichane s marketingem.
- [ ] Souhlas neni predzaskrtnuty ani schovany v hromadne vete.
- [ ] Odmitnuti je stejne jednoduche a viditelne jako prijeti.
- [ ] Preference centrum je jedno misto pravdy nebo ma jasnou synchronizaci.
- [ ] Rozlisuji osobni volby a volby cele organizace.
- [ ] Kazda volba ma ucel, vlastnika a srozumitelny mikrotext.
- [ ] Zaznam souhlasu uklada verzi textu, stav, cas a zdroj rozhrani.
- [ ] Zaznam souhlasu nesbira plny fingerprint ani obsah formulare bez duvodu.
- [ ] Marketingove emaily maji prime odhlaseni.
- [ ] Cookie nastaveni jde znovu otevrit z verejne stranky.
- [ ] Support vi, co odpovedet, kdyz se zakaznik pta "proc jste mi to poslali?".
- [ ] Jednou za kvartal projdu, jestli nove integrace nepridaly nove preference.

---

## Alerty a interni notifikace bez hluku za 45 minut

Alert je slib, ze nekdo udela akci. Notifikace je informace, ktera muze byt uzitecna. Report je prehled pro pozdejsi rozhodnuti. Kdyz se tyhle tri veci smichaji do jednoho kanalu, tym se behem mesice nauci vse ignorovat. Pak prijde skutecny incident a nejdulezitejsi zprava vypada stejne jako "novy lead z testovaci kampane". Skvele, postavili jsme pozarni alarm, ktery cinka i pri vareni caje.

Privacy-first pohled je tady jednoduchy: interni zpravy nesmi byt skryty export osobnich nebo zakaznickych dat. Chat, email, push notifikace a incident nastroj nejsou odpadkove potrubi pro cele requesty, tokeny, zpravy z formularu, fakturacni udaje nebo screenshoty s produkcnimi daty. Maji poslat minimum kontextu, spravnemu cloveku, se spravnou prioritou a odkazem do systemu, kde jsou data chranena.

OWASP Top 10 2025 uvadi Security Logging & Alerting Failures jako kategorii A09 a zduraznuje, ze logy bez alertingu maji malou hodnotu pro odhaleni incidentu: https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/. OWASP Logging Cheat Sheet zaroven doporucuje opatrne resit, co se do logu uklada a co se z nich ma vyloucit, hlavne u citlivych dat: https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html. Prakticky preklad: alerty maji byt akcni, ale datove hubene.

### 1. Nejdriv pojmenuj typ zpravy

Nez napojis novy webhook do chatu, rozdel zpravy do ctyr kosu:

| Typ | Kdy se posila | Reakce |
| --- | --- | --- |
| Emergency alert | Dopad na dostupnost, data, autentizaci, platby nebo bezpecnost | Nekdo okamzite vlastni reseni. |
| Operacni alert | Hrozi problem, ale sluzba jeste funguje | Vlastnik resi v pracovnim rytmu podle priority. |
| Obchodni notifikace | Prisla relevantni poptavka, platba, renewal nebo churn signal | Obchod nebo success udela dalsi krok. |
| Report | Souhrn za den, tyden nebo kampan | Nikdo nereaguje hned, pouziva se pro rozhodnuti. |

Jedno pravidlo: emergency kanal nesmi nest zpravy, ktere nevyzaduji rychlou lidskou reakci. Jakmile tam jednou zacne chodit "denni navstevnost blogu", kanal je mrtvy. Mozna jeste dycha, ale jen proto, ze ho nikdo nema odvahu archivovat.

### 2. Alert karta misto volne vety v chatu

Kazdy alert by mel mit stejnou strukturu. Ne proto, ze milujeme formularovou estetiku, ale protoze ve stresu je konzistence levna inteligence.

Minimalni alert karta:

```text
Nazev: [kratky problem]
Priorita: P1 / P2 / P3
Dopad: [koho se to tyka a co nefunguje]
Signal: [co presne alert spustilo]
Zacatek: [cas prvniho signalu]
Vlastnik: [tym nebo clovek]
Dalsi krok: [co udelat ted]
Odkaz: [runbook, dashboard nebo ticket]
Data: [jaka data alert obsahuje a proc]
```

Spatna zprava:

> Error 500!!! kouknete na to nekdo

Lepsi zprava:

> P2: Demo formular vraci 500 na `/demo` od 14:20 UTC. Dopad: nove poptavky nejdou odeslat. Signal: 12 selhani za 5 minut. Dalsi krok: overit delivery endpoint podle runbooku. Alert neobsahuje obsah formularu.

Rozdil neni kosmeticky. Druha zprava rika, proc to resit, kde zacit a co v ni zamerne neni.

### 3. Citliva data nech za odkazem

Interni notifikace maji svadet k pohodli: "Posleme do chatu rovnou vsechno, at nemusime klikat." Jenze chat byva sirsi kanal nez aplikace. Maji k nemu pristup lide, kteri nepotrebuji videt osobni data, historie se exportuje, zpravy se indexuji a integrace mohou mit vlastni retenci.

Do alertu typicky patri:

- anonymni nebo pseudonymni ID udalosti,
- account ID nebo zakaznicky slug, pokud je to internim procesem dovolene,
- typ problemu,
- agregovany pocet udalosti,
- cas, prostredi a verze,
- odkaz do interniho systemu s pristupovymi pravy.

Do alertu typicky nepatri:

- cele telo formularu,
- email, telefon nebo adresa zakaznika,
- session tokeny, API klice a reset odkazy,
- platebni udaje,
- screenshoty s produkcnimi daty,
- obsah soukrome komunikace,
- cele request/response payloady.

**Codyho komentar:** Kdyz notifikace obsahuje vic osobnich dat nez samotna obrazovka, kterou potrebuje clovek otevrit po prihlaseni, neurychlili jsme praci. Jen jsme vytvorili neoficialni kopii databaze s veselou ikonou u kanalu.

### 4. Priorita musi ridit kanal

Ne kazdy signal potrebuje stejny kanal. Dobry system pouziva kanal podle dopadu:

| Priorita | Priklad | Kanal | Ocekavana reakce |
| --- | --- | --- | --- |
| P1 | Vypadek prihlaseni, unik dat, nefunkcni platby | Incident kanal + on-call | Okamzite prevzeti. |
| P2 | Formular pro leady selhava, webhooky maji frontu, exporty stoji | Operacni kanal + ticket | Resit dnes. |
| P3 | Narust validacnich chyb, pomaly endpoint, problem u jednoho zakaznika | Ticket nebo denni ops kanal | Naplanovat podle dopadu. |
| Info | Novy lead, dokonceny export, tydenni souhrn | Obchodni kanal nebo report | Reakce podle workflow. |

Vyhni se dvema extremum. Prvni je vsechno posilat do jednoho kanalu. Druhy je mit tolik kanalu, ze nikdo nevi, kde je pravda. Pro maly tym casto staci:

- `incidents` pro P1 a potvrzene P2,
- `ops` pro provozni signaly,
- `sales` nebo CRM pro obchodni udalosti,
- tydenni report do dokumentu nebo emailu.

Kazdy kanal ma mit popis: co tam patri, kdo ho sleduje, kdy se pouzije a kdy se zprava maze nebo archivuje.

### 5. Udelej alerty testovatelne

Alert, ktery nikdo nikdy netestoval, je prani. Minimalni test je jednoducha otazka: kdyz se tento signal spusti v sobotu vecer, vi nekdo co delat?

Testuj tyhle veci:

- Signal se opravdu spusti pri simulovane chybe.
- Zprava ma spravnou prioritu a jde do spravneho kanalu.
- Neobsahuje zakazane osobni nebo tajne hodnoty.
- Odkaz vede na existujici runbook nebo dashboard.
- Vlastnik je clovek nebo tym, ne "nekdo".
- Alert ma potlaceni duplicit, aby nevytopil kanal stovkou kopii.
- Po vyreseni existuje zpusob, jak alert zavrit nebo ztisit.

Prakticky priklad:

Demo formular ma alert na 10 selhani za 5 minut. Test jednou mesicne posle validni testovaci request do stagingu, jeden zamerne rozbity request a overi, ze produkcni alert nezahrnuje obsah zpravy. Pokud alert mlci, opravis monitoring. Pokud krici prilis casto, upravis prahy. Oboje je lepsi nez zjistit po tydnu, ze leady padaji do kanalu, ktery nikdo necte.

### 6. 45min postup

1. 0-5 min: Vyber jeden kanal, ktery dnes nejvic sumi nebo naopak mlci pri dulezitych problemech.
2. 5-12 min: Rozdel poslednich 20 zprav na emergency alert, operacni alert, obchodni notifikaci a report.
3. 12-20 min: U kazdeho alertu dopln dopad, vlastnika, dalsi krok a odkaz na misto pravdy.
4. 20-28 min: Vyhazej z notifikaci osobni data, tajemstvi a cele payloady; nech jen ID a odkaz za opravnenim.
5. 28-35 min: Nastav nebo navrhni priority P1-P3 a kanal pro kazdou z nich.
6. 35-42 min: Vyber dva nejdulezitejsi alerty a proved test: spusteni, obsah, kanal, reakce.
7. 42-45 min: Zapis pravidlo do runbooku a pridej datum dalsi revize.

### Sablona alert pravidla

```text
Nazev alertu:
Proc existuje:
Priorita:
Signal:
Prah:
Kanal:
Vlastnik:
Runbook:
Co zprava obsahuje:
Co zprava nesmi obsahovat:
Jak se testuje:
Jak se zavira:
Datum dalsi revize:
```

### Checklist: alerty a notifikace bez hluku

- [ ] Kazda zprava je alert, notifikace nebo report.
- [ ] Emergency kanal obsahuje jen veci, ktere vyzaduji rychlou lidskou reakci.
- [ ] Alert ma dopad, signal, vlastnika, dalsi krok a odkaz.
- [ ] Notifikace neposilaji cele formulare, tokeny, platebni data ani soukrome zpravy.
- [ ] Citliva data zustavaji v systemu s pristupovymi pravy.
- [ ] Priority P1-P3 maji popsane kanaly a ocekavanou reakci.
- [ ] Alerty maji potlaceni duplicit a jasny zpusob zavreni.
- [ ] Dva nejdulezitejsi alerty jsou pravidelne testovane.
- [ ] Obchodni notifikace vedou do CRM nebo pipeline, ne do nekonecneho chatu.
- [ ] Reporty maji rytmus a rozhodovaci otazku, ne jen hezky graf.
- [ ] Jednou mesicne projdu, ktere alerty nikdo necte, a zrusim nebo prepisu je.

---

## Mesicni uklid dat a verejnych slibu za 60 minut

SaaS se nerozbije jen velkym spatnym rozhodnutim. Casto se rozpadne po malych "docasne" vyjimkach: jeden export do tabulky, jeden formular s polem navic, jeden stary pilotni dataset, jeden dodavatel po testu, jedna veta na webu, ktera kdysi platila a ted uz spis kreativne doufa. Mesicni uklid je kratky ritual, ktery tyhle drobnosti vytahne na svetlo driv, nez se z nich stane auditni, supportni nebo obchodni problem.

Privacy-first provoz neni jen o tom, co nepridas. Je i o tom, co pravidelne mazes, zpresnujes a zaviras. Data bez ucelu, metriky bez rozhodnuti, alerty bez reakce a sliby bez vlastnika jsou stejny druh neporadku. Jen kazdy smrdi v jinem nastroji.

**Codyho komentar:** Nejlevnejsi compliance je uklid vcas. Nejdrassi je archeologie po roce, kdy se nekdo zepta, proc mame v peti systemech tri ruzne odpovedi na stejnou otazku.

### 1. Projdi ctyri hromady

Za jednu hodinu neuklidis celou firmu. Vyber ctyri hromady, ktere maji nejvetsi dopad na duveru:

| Hromada | Co hledat | Typicka oprava |
| --- | --- | --- |
| Data | exporty, stare leady, pilotni datasety, logy, prilohy | smazat, anonymizovat, priradit retenci |
| Nastroje | trialy, integrace, webhooky, AI pomocnici, tabulky | vypnout, doplnit vendor review, urcit vlastnika |
| Verejne sliby | web, trust page, cenik, FAQ, privacy dokumenty | zpresnit vetu, odebrat nepravdivy slib, pridat odkaz |
| Provozni signal | alerty, reporty, metriky, support tagy | zrusit hluk, pridat rozhodovaci otazku, nastavit prah |

Pravidlo: kdyz vec nema ucel, vlastnika a datum dalsi kontroly, bud ji uklid, nebo ji oznac jako riziko. Nenech ji jen "zatim byt". To je nejkratsi cesta k tomu, aby za tri mesice nikdo nevedel, jestli se na ni muze sahnout.

### 2. Data: zacni od mist, kam se kopiruje rucne

Nejvetsi neporadek vetsinou nelezi v primarni databazi. Lezi tam, kde lide resili problem rychle: CSV exporty, sdilene disky, support prilohy, screenshoty, docasne tabulky, testovaci importy, nahravky callu a stare pilotni slozky.

Rychla kontrola:

- Existuji exporty starsi nez 30 dni bez vlastnika?
- Lezi nekde pilotni data po ukoncenem pilotu?
- Obsahuji support tickety prilohy, ktere uz nejsou potreba?
- Jsou v logach cele zpravy, emaily nebo request body?
- Ma nekdo lokalni kopii produkcnich dat pro debug?
- Existuje dataset, u ktereho nikdo nevi, odkud pochazi?

U kazdeho nalezu zvol jednu akci:

| Stav | Akce |
| --- | --- |
| Data uz nemaji ucel | Smazat a zapsat, ze bylo uklizeno. |
| Data maji ucel, ale chybi retence | Doplnit vlastnika a datum smazani. |
| Data jsou citliva a jsou ve spatnem miste | Presunout do kontrolovaneho systemu nebo odstranit. |
| Nevis, jestli se smi smazat | Oznacit riziko a dat termin overeni. |

**Priklad:**

Po pilotu zustal v tymove slozce soubor `pilot-leads-final.csv`. Obsahuje emaily a poznamky z obchodnich rozhovoru. Pilot skoncil pred dvema mesici. Rozumna akce: overit, zda existuje obchodni nebo smluvni duvod data dal drzet, prenest nutne minimum do CRM, zbytek smazat a do pilotni sablony pridat radek "datum uklidu dat".

### 3. Nastroje: vypni to, co uz neni soucast systemu

Docasny nastroj se umi tvarit jako trvaly proces. Proto projdi za posledni mesic:

- nove trialy,
- nove integrace,
- zapnute webhooky,
- AI nebo analyticke nastroje,
- sdilene dokumenty s daty,
- nastroje, ktere uz nikdo aktivne nepouziva.

U kazdeho nastroje si poloz pet otazek:

1. Jake data tam jdou?
2. Kdo ma pristup?
3. Je to porad potreba?
4. Jak se data exportuji nebo mazou?
5. Co se rozbije, kdyz to vypneme?

Pokud odpoved na ctvrty nebo paty bod neexistuje, nastroj neni jen nastroj. Je to zavislost bez mapy.

Minimalni rozhodnuti:

```text
Nastroj:
Stav: ponechat / vypnout / overit
Duvod:
Data:
Vlastnik:
Dalsi kontrola:
```

Kdyz nastroj vypinas, nezapomen na API klice, webhooky, exporty, pristupy, DNS nebo vlozene skripty. Vypnout fakturaci dodavatele a nechat jeho skript na webu je uklid jen napul. Takovy ten uklid, kdy je mistnost krasna, ale vsechen bordel je ve skrini a dvere drzi kolenem.

### 4. Verejne sliby: zkontroluj, jestli porad mluvi pravdu

Verejny slib ma delsi zivot nez interni rozhodnuti. Jedna veta na trust page muze prezit tri migrace, dva dodavatele a jeden refaktor onboardingu. Proto ji jednou mesicne projdi.

Kontroluj hlavne:

- "data jsou v EU",
- "nepouzivame trackery",
- "export je dostupny",
- "smazani probehne do X dni",
- "odpovidame do X hodin",
- "bez cookies",
- "zadne AI nad zakaznickymi daty",
- "DPA dostupna na vyzadani",
- cenikove limity a planove rozdily.

U kazde vety si napis:

| Otazka | Proc |
| --- | --- |
| Je to porad pravda? | Produkt a dodavatele se meni rychleji nez web. |
| Je to dost konkretni? | Mlhava veta zvysuje pocet dotazu. |
| Mame pro to interni dukaz? | Bez dukazu je slib jen hezky text. |
| Kdo ji vlastni? | Bez vlastnika zastara. |

Lepsi je zpresnit slib nez ho nafukovat. Misto "vsechna data zustavaji v EU" napis presneji: "Aplikacni data a primarni zalohy provozujeme v EU; podpurne dodavatele evidujeme v seznamu subprocesoru." Pokud to odpovida realite, je to silnejsi nez maximalisticka veta, ktera neprezije prvni security dotaznik.

### 5. Signaly: nech si jen ty, ktere meni praci

Metriky, alerty a reporty maji tendenci se mnozit. Kazdy novy dashboard vypada uzitecne v den vzniku. O mesic pozdeji uz se na nej nikdo nediva, ale porad zije a obcas nekoho znervozni.

Pro kazdy pravidelny signal se zeptej:

- Kdo ho cte?
- Jake rozhodnuti podle nej dela?
- Kdy naposledy vedl ke zmene?
- Obsahuje osobni nebo zakaznicka data?
- Lze ho nahradit agregaci nebo tydnim review?

Pokud signal nema odpoved, zrus ho nebo prepis. Pro maly tym je jeden dobry tydenni report lepsi nez pet kanalu, kde kazdy den neco blikne a nikdo nevi, jestli je to dulezite.

### 6. 60min postup

```text
00-10 min: Vyber rozsah.
Jeden produkt, jeden tym nebo jeden hlavni tok. Ne celou firmu.

10-25 min: Uklid data.
Najdi stare exporty, pilotni data, support prilohy a logy bez ucelu.

25-35 min: Uklid nastroje.
Projdi nove trialy, integrace, webhooky a pristupy. Oznac ponechat/vypnout/overit.

35-45 min: Uklid verejne sliby.
Zkontroluj trust page, cenik, privacy texty, FAQ a onboarding mikrocopy.

45-55 min: Uklid signaly.
Zrus nebo prepis alerty, reporty a metriky bez vlastnika nebo rozhodnuti.

55-60 min: Zapis tri vysledky.
Co bylo smazano, co bylo zpresneno, co zustava jako riziko s terminem.
```

### Checklist: mesicni uklid

- [ ] Uklid ma jasny rozsah a vlastnika.
- [ ] Stare exporty a pilotni datasety maji rozhodnuti: smazat, ponechat s retenci, nebo overit.
- [ ] Support prilohy a screenshoty se nedrzi bez ucelu.
- [ ] Docasne nastroje, webhooky a trialy maji stav ponechat/vypnout/overit.
- [ ] U aktivnich dodavatelu je jasne, jaka data vidi a kdo ma pristup.
- [ ] Verejne sliby na webu, trust page, ceniku a privacy textech odpovidaji realite.
- [ ] Maximalisticke vety jsou zpresnene na overitelne formulace.
- [ ] Alerty a reporty maji vlastnika a rozhodovaci otazku.
- [ ] Nepouzivane metriky se rusi nebo presouvaji do agregovaneho review.
- [ ] Vysledek uklidu obsahuje tri veci: smazano, zpresneno, riziko s terminem.

---

## Zdroje

- AI Act, Regulation (EU) 2024/1689, EUR-Lex: https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng
- European Commission, AI Act: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- AI Act Service Desk, Timeline for the Implementation of the EU AI Act: https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act
- GDPR, Regulation (EU) 2016/679, EUR-Lex: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng
- EDPB Guidelines 07/2020 on the concepts of controller and processor in the GDPR: https://www.edpb.europa.eu/system/files/2023-10/EDPB_guidelines_202007_controllerprocessor_final_en.pdf
- EDPB Opinion 22/2024 on certain obligations following from the reliance on processors and sub-processors: https://www.edpb.europa.eu/system/files/2024-10/edpb_opinion_202422_relianceonprocessors-sub-processors_en.pdf
- WP29/EDPB Guidelines on Data Protection Impact Assessment (DPIA): https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/data-protection-impact-assessment-dpia_en
- EDPB Guidelines 9/2022 on personal data breach notification under GDPR: https://www.edpb.europa.eu/documents/guideline/guidelines-92022-on-personal-data-breach-notification-under-gdpr_en
- EDPB, Anonymisation / pseudonymisation: https://www.edpb.europa.eu/topics/ai-and-technology/anonymisation-pseudonymisation_en
- Directive (EU) 2022/2555, NIS2 Directive, EUR-Lex: https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng
- ENISA, Cybersecurity guide for SMEs - 12 steps to securing your business: https://www.enisa.europa.eu/publications/cybersecurity-guide-for-smes
- EDPB Guidelines 05/2020 on consent under Regulation 2016/679: https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_en
- EDPB Guidelines 03/2022 on deceptive design patterns in social media platform interfaces: https://www.edpb.europa.eu/documents/guideline/guidelines-032022-on-deceptive-design-patterns-in-social-media-platform_en
- European Commission, Unfair commercial practices directive: https://commission.europa.eu/law/law-topic/consumer-protection-law/unfair-commercial-practices-and-price-indication/unfair-commercial-practices-directive_en
- European Commission, Price Indication Directive: https://commission.europa.eu/law/law-topic/consumer-protection-law/unfair-commercial-practices-and-price-indication/price-indication-directive_en
- European Commission, Consumer Rights Directive: https://commission.europa.eu/law/law-topic/consumer-protection-law/consumer-contract-law/consumer-rights-directive_en
- European Commission, Digital contracts: https://commission.europa.eu/law/law-topic/consumer-protection-law/digital-contracts_en
- European Commission, VAT One Stop Shop: https://vat-one-stop-shop.ec.europa.eu/index_en
- UOOU, Cookies - otazky a odpovedi: https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies
- OWASP Top 10 2025, A01 Broken Access Control: https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/
- OWASP HTTP Headers Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html
- OWASP Logging Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html
- OWASP Top 10 2025, A09 Security Logging and Alerting Failures: https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/
- OWASP Secrets Management Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html
- OWASP Authorization Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html
- OWASP File Upload Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html
- OWASP CSV Injection: https://owasp.org/www-community/attacks/CSV_Injection
- OWASP API Security Top 10 2023: https://owasp.org/API-Security/editions/2023/en/0x11-t10/
- OWASP REST Security Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html
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
- EDPB Guidelines 01/2022 on data subject rights - Right of access: https://www.edpb.europa.eu/system/files/2023-04/edpb_guidelines_202201_data_subject_rights_access_v2_en.pdf
- EDPB/WP29 Guidelines on the right to data portability under Regulation 2016/679: https://www.edpb.europa.eu/documents/guideline/guidelines-on-the-right-to-data-portability-under-regulation-2016679-wp242_en
- EDPB Coordinated Enforcement Action, implementation of the right to erasure by controllers: https://www.edpb.europa.eu/documents/coordinated-enforcement-framework/coordinated-enforcement-action-implementation-of-the-0_en
- W3C, Web Content Accessibility Guidelines 2.2: https://www.w3.org/TR/WCAG22/
- Google Search Central, SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central, How to specify a canonical URL: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Google Search Central, Build and submit a sitemap: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- Google Search Central, Introduction to structured data markup: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Google Analytics Help, URL builders: Collect campaign data with custom URLs: https://support.google.com/analytics/answer/10917952
- RFC 9309, Robots Exclusion Protocol: https://www.rfc-editor.org/rfc/rfc9309
- RSS Advisory Board, RSS 2.0 Specification: https://www.rssboard.org/rss-specification
- RFC 4287, The Atom Syndication Format: https://www.rfc-editor.org/rfc/rfc4287
- RFC 6585, Additional HTTP Status Codes: https://datatracker.ietf.org/doc/html/rfc6585
- RFC 9110, HTTP Semantics: https://www.rfc-editor.org/rfc/rfc9110.html
- RFC 9457, Problem Details for HTTP APIs: https://datatracker.ietf.org/doc/html/rfc9457
- RFC 6750, The OAuth 2.0 Authorization Framework: Bearer Token Usage: https://www.rfc-editor.org/rfc/rfc6750
- OpenAPI Specification, latest published version: https://spec.openapis.org/oas/latest.html
- Schema.org, BlogPosting: https://schema.org/BlogPosting
- CNIL, Use analytics on your websites and applications: https://www.cnil.fr/en/sheet-ndeg16-use-analytics-your-websites-and-applications
- Umami, FAQ: https://umami.is/docs/faq
- Plausible Analytics, Data Policy: https://plausible.io/data-policy
- Matomo, Use Matomo without consent or cookie banner: https://matomo.org/faq/new-to-piwik/how-do-i-use-matomo-analytics-without-consent-or-cookie-banner/
- RFC 7208, Sender Policy Framework (SPF): https://datatracker.ietf.org/doc/html/rfc7208
- RFC 6376, DomainKeys Identified Mail (DKIM): https://datatracker.ietf.org/doc/html/rfc6376
- RFC 7489, Domain-based Message Authentication, Reporting, and Conformance (DMARC): https://datatracker.ietf.org/doc/html/rfc7489
- RFC 8058, Signaling One-Click Functionality for List Email Headers: https://datatracker.ietf.org/doc/html/rfc8058
- RFC 4180, Common Format and MIME Type for CSV Files: https://www.rfc-editor.org/rfc/rfc4180
- Google Help, Email sender guidelines: https://support.google.com/mail/answer/81126
- MDN, Referrer-Policy header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy
- Keep a Changelog, Version 1.1.0: https://keepachangelog.com/en/1.1.0/
- Semantic Versioning 2.0.0: https://semver.org/
- Martin Fowler, Feature Toggles (aka Feature Flags): https://martinfowler.com/articles/feature-toggles.html
- OWASP Top 10 2025 Introduction: https://owasp.org/Top10/2025/0x00_2025-Introduction/
- OWASP Dependency-Check: https://owasp.org/www-project-dependency-check/
- OWASP Dependency-Track: https://owasp.org/www-project-dependency-track/
- OpenSSF Scorecard: https://scorecard.dev/
- CISA Known Exploited Vulnerabilities Catalog: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
- NIST SP 800-218, Secure Software Development Framework (SSDF) Version 1.1: https://csrc.nist.gov/pubs/sp/800/218/final

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
- 2026-08-01: Pridana prakticka priloha Pristupova prava a offboarding bez zapomenutych uctu za 45 minut vcetne inventare pristupu, roli, onboarding/offboarding karet, revizniho rytmu a checklistu.
- 2026-08-01: Pridana prakticka priloha Transakcni emaily bez datove pasti za 45 minut vcetne kategorizace sablon, minimalizace dat, SPF/DKIM/DMARC, odhlaseni a checklistu.
- 2026-08-01: Pridana prakticka priloha Export dat pro zakaznika bez improvizace za 60 minut vcetne typu exportu, formatu, overeni prijemce, retence a checklistu.
- 2026-08-01: Pridana prakticka priloha Zadosti subjektu udaju bez supportoveho chaosu za 60 minut vcetne triage, overeni identity, datove mapy, odpovedi, mazani a checklistu.
- 2026-08-01: Pridana prakticka priloha Zaznamy o zpracovani bez spreadsheetoveho pekla za 60 minut vcetne karet zpracovani, roli, dodavatelu, retence a checklistu udrzby.
- 2026-08-01: Pridana prakticka priloha Logovani a monitoring bez osobnich udaju navic za 45 minut vcetne typu logu, zakazanych dat, retence, alertu a release checklistu.
- 2026-08-01: Pridana prakticka priloha Platebni a fakturacni tok bez datove laviny za 60 minut vcetne ceniku, checkoutu, platebni brany, fakturacni retence, selhani plateb a checklistu.
- 2026-08-01: Pridana prakticka priloha DPA zmena dodavatele bez rozbite duvery za 60 minut vcetne karty zmeny, DPA kontroly, subprocesorske komunikace a checklistu.
- 2026-08-01: Pridana prakticka priloha Kampan bez reklamniho pixelu za 45 minut vcetne UTM konvence, minimalniho mereni, datoveho mikrotextu, vyhodnoceni leadu a checklistu.
- 2026-08-01: Pridana prakticka priloha Referral a partnerska doporuceni bez sledovaciho cirkusu za 45 minut vcetne referral kodu, formularoveho mikrotextu, odmen, vyhodnoceni kvality leadu a checklistu.
- 2026-08-01: Pridana prakticka priloha Pripadova studie bez prozrazeni zakaznickych dat za 60 minut vcetne datoveho semaforu, prace s citacemi, screenshoty, sablony a checklistu.
- 2026-08-01: Pridana prakticka priloha Webinar a workshop bez registracni pasti za 60 minut vcetne registrace, nahravek, follow-upu, datove cesty nastroju a checklistu.
- 2026-08-01: Pridana prakticka priloha Komunita bez platformniho zamku za 60 minut vcetne volby kanalu, komunitniho kontraktu, vlastni domeny, moderace, metrik a checklistu.
- 2026-08-01: Pridana prakticka priloha Zakaznicky pruzkum bez zbytecneho profilovani za 45 minut vcetne vyberu duvodu, otazek, urovni identifikace, vyhodnoceni a checklistu.
- 2026-08-02: Pridana prakticka priloha Win-loss rozhovory bez CRM vyslechu za 45 minut vcetne segmentace, scenare rozhovoru, zapisove karty, vyhodnoceni vzoru a checklistu.
- 2026-08-02: Pridana prakticka priloha SLA a support limity bez prehnanych slibu za 45 minut vcetne priorit P1-P4, support kanalu, hranic rozsahu, planu podpory a checklistu.
- 2026-08-02: Pridana prakticka priloha Churn a odchod zakaznika bez pomsty za 45 minut vcetne exit flow, dobrovolne zpetne vazby, ferovych retention reakci a churn karty.
- 2026-08-02: Pridana prakticka priloha API klice a tajemstvi bez lepicich papiru za 45 minut vcetne inventare secrets, pristupu, rotace, logovani, zakaznickych API klicu a checklistu.
- 2026-08-02: Pridana prakticka priloha Webhooky a integrace bez datoveho prelivu za 60 minut vcetne datoveho kontraktu, podpisu, idempotence, retry pravidel, vypnuti integrace a checklistu.
- 2026-08-02: Pridana prakticka priloha Feature flags a postupny rollout bez chaosu za 60 minut vcetne typu flagu, rollout runbooku, segmentace bez profilovani, test matice, uklidu a checklistu.
- 2026-08-02: Pridana prakticka priloha Health score a QBR bez sledovani lidi za 60 minut vcetne account-level signalu, akci podle stavu, QBR sablony, zapisu a checklistu.
- 2026-08-02: Pridana prakticka priloha Expansion a upsell bez loveni v osobnich datech za 60 minut vcetne typu rozsireni, vysvetlitelnych signalu, expansion karty, servisni zpravy a checklistu.
- 2026-08-02: Pridana prakticka priloha Renewal a prodlouzeni spoluprace bez automaticke pasti za 45 minut vcetne renewal karty, hodnotovych signalu, datove kontroly, emailove sablony a checklistu.
- 2026-08-02: Pridana prakticka priloha Zruseni uctu a mazani dat bez schovanych dveri za 60 minut vcetne odchodovych stavu, exportu, mazaciho jobu, subprocesoru, potvrzovacich sablon a checklistu.
- 2026-08-02: Pridana prakticka priloha Import a migrace dat bez spinavych exportu za 60 minut vcetne importni karty, datoveho kontraktu, bezpecneho uploadu, nahledu, rollbacku a checklistu.
- 2026-08-02: Pridana prakticka priloha Auditni stopa v adminu bez vnitrniho slideni za 60 minut vcetne auditniho kontraktu, impersonace, pristupu, retence a checklistu.
- 2026-08-02: Pridana prakticka priloha Schvalovani citlivych admin akci bez brzdici byrokracie za 45 minut vcetne matice dopadu, schvalovaci karty, emergency override a checklistu.
- 2026-08-02: Pridana prakticka priloha Support eskalace bez datoveho ohnostroje za 45 minut vcetne eskalacni karty, priority P1-P4, oddeleni citlivych artefaktu a checklistu.
- 2026-08-02: Pridana prakticka priloha Bug triage a technicky dluh bez nekonecneho backlogu za 45 minut vcetne prioritizace, privacy-first filtru, dluhovych ticketu, mesicniho uklidu a checklistu.
- 2026-08-02: Pridana prakticka priloha Aktualizace zavislosti bez patchovaci paniky za 60 minut vcetne inventare zavislosti, prioritizace alertu, patch karty, testovani a checklistu.
- 2026-08-02: Pridana prakticka priloha API limity a chybove odpovedi bez trestani zakazniku za 60 minut vcetne rate limitu, 429 odpovedi, retry pravidel, dokumentace a checklistu.
- 2026-08-02: Pridana prakticka priloha CSV exporty a reporty bez datoveho vysavace za 45 minut vcetne datoveho kontraktu, CSV Injection ochrany, asynchronnich exportu, UI varovani a checklistu.
- 2026-08-02: Pridana prakticka priloha Souborove uploady a prilohy bez datove skluzavky za 60 minut vcetne ucelu uploadu, validace, metadat, retence, UI mikrocopy a checklistu.
- 2026-08-02: Pridana prakticka priloha API dokumentace bez supportu na kazdy endpoint za 60 minut vcetne kontraktu endpointu, autentizace, chyb, prikladu, verzovani a checklistu.
- 2026-08-02: Pridana prakticka priloha Servisni ucty a machine-to-machine pristupy bez sdilenych hesel za 45 minut vcetne scoped opravneni, tajemstvi, auditu, offboardingu a checklistu.
- 2026-08-02: Pridana prakticka priloha Testovaci prostredi a seed data bez kopirovani produkce za 60 minut vcetne rizik prostredi, seed scenaru, produkcnich vyjimek, oddelenych secrets, retence a checklistu.
- 2026-08-02: Pridana prakticka priloha Release runbook bez patecni rulety za 60 minut vcetne release karty, preflight kontroly, postupneho rollout planu, rollbacku, post-release zapisu a checklistu.
- 2026-08-02: Pridana prakticka priloha Produktove metriky bez vanity dashboardu za 60 minut vcetne metrickoveho stromu, privacy-first eventu, prahu pro akci, tydniho rytmu a checklistu.
- 2026-08-03: Pridana prakticka priloha Self-service znalostni baze bez supportniho bludiste za 60 minut vcetne struktury clanku, privacy bloku, mereni vyhledavani, udrzby a checklistu.
- 2026-08-03: Pridana prakticka priloha Produktova edukace a in-app oznameni bez otravneho sledovani za 45 minut vcetne kanalu, minimalniho mereni, changelogu, sablony oznamovaci karty a checklistu.
- 2026-08-03: Pridana prakticka priloha Souhlasy a preference bez temnych vzoru za 60 minut vcetne inventare rozhodnuti, preference centra, auditovatelneho zaznamu souhlasu, odvolani a checklistu.
- 2026-08-03: Pridana prakticka priloha Alerty a interni notifikace bez hluku za 45 minut vcetne klasifikace zprav, alert karty, datove minimalizace, priorit, testovani a checklistu.
- 2026-08-03: Pridana prakticka priloha Mesicni uklid dat a verejnych slibu za 60 minut vcetne uklidu dat, nastroju, verejnych tvrzeni, signalu a checklistu.
