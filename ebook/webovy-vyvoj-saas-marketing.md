# Webový vývoj, SaaS a marketing privacy-first v Evropě

Praktický český e-book od Codyho z Dreamindu pro malé firmy, zakladatele SaaS produktů, marketéry a vývojáře, kteří chtějí stavět moderní weby bez zbytečného šmírování lidí.

> **Codyho komentář:** Privacy-first není brzda růstu. Je to filtr na špatné nápady, zbytečné trackery a vendor lock-in. Když víš, proč sbíráš data, často zjistíš, že jich potřebuješ míň — a produkt je díky tomu čistší.

## Jak e-book používat

- Čti kapitoly postupně, pokud začínáš nový web nebo SaaS od nuly.
- Vracej se ke checklistům při redesignu, migraci analytiky nebo přípravě marketingové kampaně.
- Odkazy ber jako výchozí body pro ověření; právní část vždy konzultuj podle konkrétní situace.
- Kde píšu názor, označuji ho jako **Codyho komentář**.

## Osnova

1. **Strategie webu a produktu** — pro koho stavíme, jak měřit hodnotu a kde nezačít technologií.
2. **Privacy-first základy** — data minimization, evropský provoz, cookies, consent a dokumentace.
3. **Technický stack pro malé týmy** — frontend, backend, hosting, databáze, monitoring a zálohy.
4. **SaaS produkt od nápadu po první platící zákazníky** — pricing, onboarding, aktivace, retence.
5. **Marketing bez invazivního trackingu** — SEO, obsah, RSS, newslettery, UTM disciplína a analytika.
6. **Produktivita zakladatele a týmu** — rozhodovací systémy, automatizace, AI asistenti a provozní rytmus.
7. **Provoz v Evropě** — dodavatelé, smlouvy, incidenty, bezpečnost a exit plán.
8. **Checklisty a šablony** — audit webu, launch checklist, privacy review, marketingový plán.

---

## 1. Strategie webu a produktu

### 1.1 Nezačínej designem. Začni slibem.

Většina webů nezačíná špatně proto, že mají špatnou barvu tlačítka. Začínají špatně proto, že nikdo přesně neví, jaký slib návštěvníkovi dávají. Web má během pár vteřin odpovědět na tři otázky:

1. **Co pro mě řešíš?**
2. **Proč bych měl věřit zrovna tobě?**
3. **Co mám udělat dál?**

Pokud odpovědi nejsou jasné, nepomůže ani nový hero obrázek, animace nebo „AI-powered“ nálepka nalepená na produkt jako cenovka v hobbymarketu.

#### Praktický příklad

Slabý slib:

> „Pomáháme firmám s digitální transformací.“

Lepší slib:

> „Do 30 dnů vám postavíme evropský B2B web, který sbírá poptávky bez Google Analytics, reklamních pixelů a zbytečných cookie bannerů.“

Ten druhý slib je konkrétní. Říká výsledek, časový rámec, cílovku i hodnotu. Zároveň nenutí firmu slibovat něco, co nemůže splnit — třeba „navýšíme tržby o 300 %“, což zní krásně, ale často patří spíš do oddělení pohádek s tabulkou CAC/LTV.

### 1.2 Jedna stránka, jeden primární cíl

Každá důležitá stránka má mít jeden hlavní úkol. Ne pět. Ne „ať si každý vybere“. Jeden.

Příklady:

- Homepage má vysvětlit pozici firmy a poslat návštěvníka na kontakt, demo nebo klíčovou službu.
- Landing page kampaně má převést konkrétní návštěvnost na jednu akci.
- Pricing page má snížit nejistotu a pomoct vybrat tarif.
- Blogový článek má odpovědět na konkrétní otázku a nabídnout další krok.

Sekundární akce jsou v pořádku, ale nesmí soupeřit s hlavní akcí. Pokud má stránka tři stejně výrazná tlačítka, obvykle to znamená, že tým neudělal rozhodnutí a delegoval ho na uživatele. To není personalizace, to je chaos s kulatými rohy.

### 1.3 Metriky: měř méně věcí, ale měř je poctivě

Privacy-first přístup neznamená „neměřit nic“. Znamená měřit tak, aby sběr dat odpovídal účelu, byl vysvětlitelný a nelezl lidem do kapsy.

Pro malý firemní web často stačí:

- počet návštěv a unikátních návštěvníků,
- nejnavštěvovanější stránky,
- zdroje návštěvnosti na agregované úrovni,
- konverze kontaktního formuláře nebo kliknutí na e-mail/telefon,
- výkon obsahu: které články dlouhodobě přivádějí relevantní návštěvy.

U SaaS produktu přidej produktové metriky, ale pořád s rozumem:

- aktivace: kolik lidí udělá první hodnotnou akci,
- retence: kolik se vrací po týdnu, měsíci a po konci trialu,
- revenue: MRR, churn a expanze,
- support signály: opakované dotazy, blokující chyby, místa odpadnutí v onboardingu.

### 1.4 Privacy-first jako součást strategie

Evropský web nebo SaaS by měl privacy řešit už při návrhu, ne až ve chvíli, kdy se někdo zeptá „máme vlastně cookie lištu?“. GDPR pracuje s principem ochrany osobních údajů už od návrhu a ve výchozím nastavení; EDPB to shrnuje jako zabudování ochrany do systémů a procesů od začátku, ne jako kosmetickou úpravu na konci ([EDPB: Privacy by design and by default](https://www.edpb.europa.eu/topics/ai-and-technology/privacy-by-design-and-by-default_en)). Evropská komise podobně zdůrazňuje, že výchozí nastavení má zpracovávat jen data nezbytná pro daný účel a držet je jen po potřebnou dobu ([European Commission: Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en)).

Pro praxi to znamená:

- Nejdřív napiš, jaká data potřebuješ a proč.
- Pak vyber nástroje, které ten účel zvládnou s nejmenším zásahem do soukromí.
- Až potom řeš implementaci, bannery a texty v zásadách ochrany osobních údajů.

Když provozuješ web v Evropě, dává smysl preferovat evropský hosting, evropskou analytiku, přímé odkazy místo social-share skriptů a RSS místo závislosti na algoritmických feedů. Ne proto, že „EU je magická ochranná bublina“, ale proto, že menší datová stopa a kratší dodavatelský řetězec se líp vysvětlují zákazníkům i sobě samému ve dvě ráno po incidentu.

### 1.5 Mini framework: Slib → Důkaz → Akce

Použij ho pro každou důležitou stránku.

#### Slib

Jednou větou řekni výsledek pro konkrétní skupinu.

Příklad:

> „Pomáháme českým B2B firmám spouštět rychlé weby a interní SaaS nástroje provozované v Evropě.“

#### Důkaz

Vyber 2–4 důkazy, které podporují slib:

- reference nebo případová studie,
- screenshot produktu,
- veřejná dokumentace,
- technické parametry,
- auditní checklist,
- ukázka procesu.

#### Akce

Návštěvník musí vědět, co dál:

- objednat konzultaci,
- vyzkoušet demo,
- stáhnout checklist,
- napsat e-mail,
- přečíst navazující článek.

Akce má být konkrétní. „Zjistit více“ je často líné tlačítko. „Domluvit 30min konzultaci“ je jasnější. „Poslat technický audit webu“ je ještě lepší, pokud to odpovídá nabídce.

### Checklist pro první strategický audit webu

- [ ] Umím jednou větou říct, komu web pomáhá a s čím.
- [ ] Homepage má jeden primární cíl a jedno hlavní CTA.
- [ ] Každá hlavní stránka odpovídá na otázky: co, proč věřit, co dál.
- [ ] Měřím jen metriky, které vedou k rozhodnutí.
- [ ] Vím, kde se ukládají data z formulářů, analytiky a podpory.
- [ ] Nepoužívám třetí strany jen proto, že „to tak dělají všichni“.
- [ ] Privacy-first hodnota je vidět v textu, architektuře i výběru nástrojů.

---


## 2. Privacy-first základy

### 2.1 Začni mapou dat, ne cookie lištou

Cookie lišta je až viditelný vršek ledovce. Skutečná práce začíná tím, že si sepíšeš, jaká data web nebo SaaS sbírá, kde vznikají, kam tečou a kdy mizí. Bez téhle mapy se z privacy-first přístupu rychle stane divadlo: hezké tlačítko „Odmítnout vše“, ale za ním integrace, o kterých nikdo neví.

Pro malý web nebo SaaS stačí jednoduchá tabulka:

| Oblast | Příklad dat | Účel | Kde se ukládá | Jak dlouho | Kdo má přístup |
| --- | --- | --- | --- | --- | --- |
| Kontaktní formulář | jméno, e-mail, zpráva | odpověď na poptávku | e-mail / CRM | do vyřízení + rozumná evidence | obchod, podpora |
| Analytika | agregované návštěvy, stránky, referrery | zlepšení webu | EU analytika | podle nastavení retence | marketing, produkt |
| SaaS účet | e-mail, role, organizace | poskytování služby | aplikační databáze | po dobu účtu + zákonné lhůty | podpora, admin |
| Fakturace | fakturační údaje, objednávky | účetnictví | fakturační systém | podle právních povinností | finance |
| Support | dotazy, technické logy | řešení incidentů | helpdesk / logy | krátce a účelově | support, vývoj |

Evropská komise shrnuje principy GDPR tak, že osobní údaje mají být omezené na to, co je pro účel nezbytné, a uchovávané jen po potřebnou dobu ([European Commission: Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en)). EDPB k tomu připomíná základní principy jako zákonnost, férovost, transparentnost, účelové omezení, minimalizaci, přesnost, omezení uložení, důvěrnost a odpovědnost ([EDPB: Basic principles](https://www.edpb.europa.eu/topics/key-gdpr-concepts/basic-principles_en)).

Prakticky: pokud nedokážeš u jednoho pole ve formuláři říct, proč ho potřebuješ, smaž ho. Pokud ho potřebuje jen „možná někdy“, smaž ho taky. „Možná někdy“ je nejdražší právní základ na světě, protože ho obvykle platíš složitostí.

### 2.2 Technické cookies nejsou marketingové cookies

Ne každá cookie je problém. Web může potřebovat technické cookies pro přihlášení, bezpečnost, košík, jazykové nastavení nebo ochranu proti zneužití. Pro cookies nezbytně nutné k provozu služby ÚOOÚ uvádí, že není nutné získat souhlas uživatele; jiné typy, typicky analytické nebo marketingové, už souhlas vyžadovat mohou ([ÚOOÚ: Informace pro e-shopy](https://uoou.gov.cz/profesional/qa-otazky-a-odpovedi/informace-pro-e-shopy)).

Rozdíl je dobré mít napsaný lidsky:

- **Technické cookies:** „Bez nich nejde služba bezpečně provozovat.“
- **Analytické cookies:** „Pomáhají nám měřit používání webu.“
- **Marketingové cookies:** „Používají se pro reklamu, remarketing nebo profilování.“

Privacy-first varianta pro firemní web je jednoduchá: nepoužívej marketingové cookies vůbec, analytiku drž agregovanou a ideálně bez osobních profilů. Pokud se obejdeš bez cookie lišty, protože nemáš netechnické cookies ani invazivní tracking, je to často lepší UX i lepší důkaz disciplíny. Není potřeba návštěvníka vítat právním adventním kalendářem.

### 2.3 Souhlas musí být skutečná volba

Když už souhlas potřebuješ, nesmí být schovaný v temném UX sklepení. ÚOOÚ ve svých odpovědích ke cookies uvádí jako dobrou praxi dát odmítnutí netechnických cookies do první vrstvy lišty, na stejnou úroveň jako souhlas a ve srovnatelném vizuálním provedení. Zároveň upozorňuje, že cookie lišta nemá bránit interakci s webem, když uživatel ještě nevybral možnost ([ÚOOÚ: Cookies — otázky a odpovědi](https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies)).

ÚOOÚ také připomíná, že tvrzení typu „setrváním na webu souhlasíte s cookies“ nelze považovat za souhlas podle GDPR ([ÚOOÚ: Cookies od začátku roku 2022 pouze se souhlasem](https://uoou.gov.cz/novinky/vse/cookies-od-zacatku-roku-2022-pouze-se-souhlasem)). EDPB v pokynech k souhlasu řeší mimo jiné to, že cookie walls a pouhé scrollování nejsou férová zkratka ke svobodnému a jednoznačnému souhlasu ([EDPB: Guidelines 05/2020 on consent](https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_de)).

Dobrá cookie lišta proto vypadá nudně — a to je kompliment:

- jasně říká, kdo data zpracovává a proč,
- nabízí „Přijmout“ i „Odmítnout“ stejně snadno,
- umožňuje podrobné nastavení podle účelů,
- neobsahuje předem zaškrtnuté volby,
- umožňuje souhlas později změnit nebo odvolat,
- neblokuje celý web jen proto, že návštěvník nechce marketingové cookies.

### 2.4 Privacy-first architektura pro malý SaaS

U SaaS produktu se privacy nedá vyřešit jedním dokumentem v patičce. Musí být součástí architektury.

Minimální návrh pro evropský malý tým:

1. **EU hosting a databáze:** primární data drž v evropském regionu a měj to ověřené u dodavatele.
2. **Oddělené role:** zákaznická data nevidí každý admin „protože je to pohodlné“.
3. **Auditní stopa:** důležité administrátorské akce loguj, ale bez přehnaného ukládání obsahu.
4. **Krátká retence logů:** technické logy drž tak dlouho, aby pomohly řešit incidenty, ne aby se z nich stal druhý produktový profil.
5. **Export a smazání:** už při návrhu účtu mysli na export dat a ukončení spolupráce.
6. **Dodavatelský seznam:** u každé služby víš, co zpracovává, kde a proč.

Příklad: pokud SaaS posílá transakční e-maily, nemusí e-mailová služba dostávat celý zákaznický profil. Často jí stačí adresa, šablona a minimální kontext. Pokud support nástroj potřebuje historii konverzací, neznamená to automaticky, že má dostat fakturační data, produktovou analytiku a poznámky obchodníka z prvního callu. Data nejsou konfety. Když je rozházíš všude, úklid bude bolet.

### 2.5 Dokumentace, kterou opravdu používej

Privacy dokumentace nemá být PDF mumie, která se otevře jednou při auditu. Pro malý tým stačí čtyři živé dokumenty:

- **Mapa dat:** co sbíráme, proč, kde, jak dlouho a kdo k tomu má přístup.
- **Seznam dodavatelů:** nástroj, účel, region, typ dat, smlouva/DPA, vlastník v týmu.
- **Retenční pravidla:** kdy se mažou poptávky, logy, trial účty, support exporty a analytická data.
- **Incident runbook:** co dělat při úniku, chybě integrace, špatně poslaném e-mailu nebo kompromitaci účtu.

**Codyho komentář:** Nejlepší privacy dokumentace je ta, která donutí tým udělat produkt jednodušší. Když kvůli jednomu checkboxu musíš přidat tři řádky do mapy dat, dvě retenční pravidla a dalšího dodavatele, možná ten checkbox vůbec nepotřebuješ. Brutální? Trochu. Užitečné? Velmi.

### Checklist pro privacy-first základ webu a SaaS

- [ ] Máme aktuální mapu dat pro formuláře, analytiku, účty, fakturaci, support a logy.
- [ ] Každé osobní pole má jasný účel a vlastníka.
- [ ] Technické cookies jsou oddělené od analytických a marketingových.
- [ ] Pokud používáme souhlas, odmítnutí je stejně snadné jako přijetí.
- [ ] Nepoužíváme cookie wall ani souhlas odvozený ze scrollování nebo setrvání na webu.
- [ ] Dodavatelé jsou vybraní podle účelu, regionu, datového rozsahu a možnosti odchodu.
- [ ] Logy, trial účty a support data mají retenční pravidla.
- [ ] Umíme zákazníkovi srozumitelně vysvětlit, kde jeho data jsou a proč.

---

## 3. Technický stack pro malé týmy

### 3.1 Stack není sbírka hraček, ale provozní závazek

Technický stack se často vybírá podle toho, co je zrovna populární, co používá oblíbený startup na konferenci, nebo co má nejhezčí dokumentaci. To je pochopitelné. Zároveň je to past s neonovým nápisem „tady utratíš příštích šest měsíců“.

Pro malý tým je dobrý stack ten, který umí odpovědět na praktické otázky:

- zvládneme ho provozovat ve dvou lidech i v pátek večer,
- víme, kde běží produkce, databáze, logy a zálohy,
- umíme bezpečně nasadit změnu bez rituálního tance kolem terminálu,
- umíme odejít k jinému dodavateli bez archeologické expedice,
- máme jasné hranice mezi marketingovým webem, aplikací a interními nástroji.

Technologie má podporovat obchodní model, ne naopak. Pokud prodáváš jednoduchý B2B SaaS, nepotřebuješ architekturu vhodnou pro streamovací platformu s miliardou uživatelů. Potřebuješ spolehlivé přihlášení, fakturaci, správu organizací, auditní stopu, zálohy, monitoring a web, který říká, proč by někdo měl platit.

**Codyho komentář:** Nejlepší stack pro první verzi je často trochu nudný. Nuda v infrastruktuře je luxus. Adrenalin si nech na marketingovou kampaň, ne na obnovu databáze ve dvě ráno.

### 3.2 Rozděl systém na tři vrstvy

Malý evropský SaaS nebo firemní web může začít se třemi jasnými vrstvami:

1. **Prezentační vrstva:** marketingový web, dokumentace, blog, landing pages, formuláře.
2. **Aplikační vrstva:** přihlášení, účty, produktová logika, API, administrace.
3. **Datová a provozní vrstva:** databáze, úložiště souborů, logy, monitoring, zálohy, analytika.

Tahle jednoduchá mapa pomůže při rozhodování. Marketingový web má být rychlý, indexovatelný, snadno editovatelný a pokud možno bez invazivních skriptů třetích stran. Aplikace má být bezpečná, testovatelná a dobře nasaditelná. Datová vrstva má být konzervativní, zálohovaná a s jasnou odpovědností.

Praktický příklad rozhodnutí:

- Blog a dokumentace mohou být staticky generované, aby byly rychlé a snadno kešovatelné.
- SaaS aplikace může běžet odděleně, protože má přihlášení, role a citlivější data.
- Analytika webu může být agregovaná a privacy-friendly, zatímco produktové metriky se ukládají v aplikaci s vazbou na účet a jasným účelem.

Tím se vyhneš situaci, kdy kvůli úpravě nadpisu na homepage musí vývojář sahat do stejného deploy pipeline jako pro změnu oprávnění administrátorů. Oddělení vrstev není enterprise fetiš. Je to pojistka proti tomu, aby se jednoduchá marketingová změna nestala produkčním incidentem.

### 3.3 Hosting a region: ptej se „kde jsou data?“

Privacy-first stack začíná u fyzické a právní reality: kde data běží, kdo je zpracovává a za jakých podmínek. Evropský provoz neznamená jen vlaječku EU na landing page dodavatele. Potřebuješ vědět, v jakém regionu běží aplikace, databáze, objektové úložiště, zálohy, logy a support exporty.

Minimální otázky pro každého dodavatele:

- Umí garantovat EU region pro produkční data?
- Platí to i pro zálohy, logy a diagnostiku?
- Kdo má administrátorský přístup a jak je auditovaný?
- Existuje DPA nebo jiná zpracovatelská smlouva?
- Jak rychle dokážeme exportovat data a odejít?
- Co se stane při výpadku regionu nebo ukončení služby?

ENISA ve svých materiálech pro malé a střední firmy zdůrazňuje, že cloud a online služby mají být vybírány s ohledem na bezpečnostní rizika, kontinuitu provozu a ochranu dat, ne jen podle pohodlí nebo ceny ([ENISA: Cybersecurity guide for SMEs](https://www.enisa.europa.eu/publications/cybersecurity-guide-for-smes), [ENISA: Cloud Security Guide for SMEs](https://www.enisa.europa.eu/publications/cloud-security-guide-for-smes)). Pro malý tým to není akademická poznámka. Jeden špatně zvolený dodavatel může znamenat, že data, logy i zálohy skončí mimo kontrolu týmu.

Privacy-first preference v praxi:

- evropský hosting pro aplikaci a databázi,
- oddělený projekt nebo účet pro produkci,
- minimální počet služeb, které vidí osobní údaje,
- žádné marketingové pixely na produktových obrazovkách,
- přímé odkazy a RSS tam, kde jiní dávají social-share skripty,
- dokumentovaný exit plán pro klíčové dodavatele.

### 3.4 Databáze, soubory a zálohy: dokud neobnovíš, nezálohuješ

Záloha není hotová ve chvíli, kdy existuje soubor s hezkým názvem. Záloha je hotová až ve chvíli, kdy ji umíš obnovit a víš, kolik dat můžeš ztratit.

U malého SaaS si napiš dvě čísla:

- **RPO:** kolik dat maximálně ztratíme, když se něco pokazí?
- **RTO:** za jak dlouho musíme službu obnovit?

Pro interní nástroj může být přijatelné obnovit do druhého dne. Pro placený SaaS s denní prací zákazníků může být hodina moc. Neexistuje univerzální odpověď, ale musí existovat odpověď.

ENISA v technickém doporučení ke kybernetickému risk managementu uvádí i klasické pravidlo 3-2-1: mít tři kopie dat, na dvou typech úložiště a jednu kopii mimo hlavní lokalitu; zároveň připomíná šifrování, integritu a ochranu záloh proti smazání nebo ransomware zásahu ([ENISA: Technical implementation guidance on cybersecurity risk management measures](https://www.enisa.europa.eu/publications/technical-implementation-guidance-on-cybersecurity-risk-management-measures)).

Praktický minimální režim:

1. **Denní databázová záloha:** automatická, šifrovaná, s retencí podle rizika.
2. **Oddělený přístup:** aplikace nesmí mít právo mazat zálohy.
3. **Obnova nanečisto:** pravidelně obnov zálohu do testovacího prostředí.
4. **Dokumentovaný postup:** kdo obnovuje, odkud, jak dlouho to trvá a koho informuje.
5. **Zálohy souborů:** faktury, uploady a exporty nejsou „někde v bucketu“, ale součást obnovy.

Příklad: pokud uživatelé nahrávají přílohy, nestačí zálohovat jen SQL databázi. Databáze může obsahovat metadata, ale skutečné soubory jsou v objektovém úložišti. Po obnově bez souborů máš sice tabulky, ale produkt se tváří jako knihovna po povodni. Papírově existuje, prakticky je mokrá.

### 3.5 Monitoring a logy bez datového smogu

Monitoring má odpovědět na otázku: „Funguje služba a dokážeme rychle zjistit proč ne?“ Nemá se stát neomezeným skladem osobních údajů.

OWASP připomíná, že aplikační logy jsou důležité pro bezpečnost i provoz, ale mají mít jasný účel, chráněný přístup a nemají zbytečně ukládat citlivé informace ([OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)). OWASP ASVS zároveň používá požadavky na autentizaci, řízení přístupu, chybové stavy a logování jako součást ověřování bezpečnosti webových aplikací ([OWASP ASVS](https://owasp.org/projects/asvs)).

Co logovat:

- přihlášení, odhlášení a neúspěšné pokusy,
- změny rolí a oprávnění,
- administrátorské zásahy,
- bezpečnostně relevantní chyby,
- volání důležitých integračních endpointů,
- ID požadavku, čas, prostředí a technický kontext.

Co nelogovat, pokud k tomu není opravdu dobrý důvod:

- hesla, tokeny, session identifikátory,
- celé obsahy formulářů a zpráv,
- platební údaje,
- citlivé osobní údaje,
- celé hlavičky požadavků bez filtrování.

Dobrý pattern je logovat technický identifikátor a kontext, ne obsah. Místo „uživatel poslal celý text zprávy“ stačí „formulář contact odeslán, request_id, account_id nebo anonymní session, výsledek validace“. Když je potřeba řešit incident, máš stopu. Když někdo získá logy, nemá rovnou druhou databázi zákaznických příběhů.

### 3.6 Deploy pipeline: malý tým potřebuje opakovatelnost

Nasazení má být nudný proces, ne hrdinský výkon. Pokud produkci umí nasadit jen jeden člověk z konkrétního notebooku, nemáš deploy pipeline. Máš rituál.

Minimální pipeline pro malý tým:

- změna jde přes Git,
- před nasazením proběhnou testy nebo aspoň build,
- produkční tajemství nejsou v repozitáři,
- migrace databáze mají rollback nebo jasný plán obnovy,
- po deployi se ověří klíčová URL a základní akce,
- existuje rychlý postup návratu na předchozí verzi.

Pro marketingový web může stačit statický build a kontrola hlavních stránek. Pro SaaS aplikaci přidej smoke test přihlášení, vytvoření klíčového objektu a kontrolu napojení na e-mail, fakturaci nebo jinou kritickou integraci. Cílem není otestovat celý vesmír. Cílem je chytit chybu, která by zákazníkovi okamžitě rozbila práci.

### Checklist pro technický stack malého SaaS

- [ ] Umíme jednou větou vysvětlit, proč používáme hlavní technologie stacku.
- [ ] Marketingový web, aplikace a datová vrstva mají jasné hranice.
- [ ] Víme, kde běží aplikace, databáze, soubory, logy, zálohy a analytika.
- [ ] Produkční data a zálohy jsou v EU regionu nebo máme zdokumentovaný důvod, proč ne.
- [ ] Každý klíčový dodavatel má vlastníka, účel, DPA/smlouvu a exit plán.
- [ ] Zálohy se pravidelně testují obnovou, nejen vytvářením.
- [ ] Logy neobsahují hesla, tokeny ani celé citlivé formuláře.
- [ ] Deploy běží opakovatelně přes Git a má minimální smoke test.
- [ ] Tajemství jsou mimo repozitář a přístup k produkci je omezený.
- [ ] Máme jednoduchý runbook pro výpadek, obnovu a rollback.

---


## 4. SaaS produkt od nápadu po první platící zákazníky

### 4.1 Nevaliduj nápad komplimenty

Nejrychlejší cesta k falešnému sebevědomí je zeptat se lidí: „Líbí se ti můj nápad?“ Většina slušných lidí odpoví mile, protože nechce rozšlapat tvé nadšení jako kelímek na festivalu. Jenže kompliment není signál trhu.

Lepší validace se ptá na chování, bolest a ochotu něco změnit:

- Kdy se ti ten problém stal naposledy?
- Jak ho řešíš dnes?
- Kolik času, peněz nebo nervů tě to stojí?
- Co už jsi zkusil a proč to nefungovalo?
- Kdo by musel schválit nákup?
- Co by se muselo stát, aby sis řešení zaplatil tento měsíc?

Pokud člověk problém neumí popsat konkrétně, pravděpodobně ho netrápí dost. Pokud ho řeší ručně v tabulce, interním skriptem nebo přes pět nástrojů slepených izolepou, zbystři. Tam často začíná dobrý B2B SaaS: ne jako „platforma pro všechno“, ale jako elegantní odstranění jedné drahé otravy.

Praktický příklad:

> „Chceme nástroj pro lepší týmovou produktivitu“ je mlha.
>
> „Každý pátek ručně skládáme report z fakturace, supportu a CRM, trvá to tři hodiny a stejně v něm bývají chyby“ je problém.

### 4.2 První verze má prodávat výsledek, ne roadmapu

MVP není nedodělek s omluvou. MVP je nejmenší verze produktu, která někomu doručí měřitelnou hodnotu a umožní ti zjistit, jestli za ni zaplatí.

U SaaS pro malé týmy se vyplatí začít jedním úzkým use casem:

1. vyber konkrétní cílovku,
2. popiš jednu bolest,
3. dodej jeden opakovatelný výsledek,
4. ručně nebo poloautomaticky obsluž zbytek,
5. automatizuj až to, co se opakuje a někdo za to platí.

Příklad: místo „kompletní AI platforma pro obchodní týmy“ začni službou „každé ráno pošleme obchodníkovi tři nejdůležitější follow-upy z CRM a e-mailů“. Je to menší, srozumitelnější a lépe měřitelné. Když to funguje, můžeš přidat reporting, šablony, týmové workflow a integrace. Když to nefunguje, nezahodil jsi půl roku stavbou paláce bez obyvatel.

**Codyho komentář:** Roadmapa je hypotéza, ne svatá tabulka. Pokud zákazníci opakovaně platí za něco jiného, než sis vysnil, není to zrada vize. Je to trh, který ti konečně přestal mumlat.

### 4.3 Pricing: začni jednoduše a drž vazbu na hodnotu

První pricing nemusí být dokonalý. Musí být pochopitelný, obhajitelný a dostatečně blízko hodnotě, kterou zákazník dostává.

Časté modely:

- **Za uživatele:** jednoduché pro týmové nástroje, ale může brzdit adopci, pokud zákazník platí za každého pasivního člena.
- **Za organizaci nebo tým:** dobré pro menší B2B SaaS, kde se hodnota netočí jen kolem počtu sedadel.
- **Podle objemu:** vhodné tam, kde náklady i hodnota rostou s počtem událostí, dokumentů, objednávek nebo zákazníků.
- **Podle balíčků:** praktické pro marketing a prodej, pokud jsou rozdíly mezi tarify jasné.

Začni raději se třemi jednoduchými tarify než s excelovým labyrintem. Každý tarif má mít jasný důvod existence:

- **Start:** pro jednotlivce nebo malý tým, který chce problém vyřešit hned.
- **Pro:** pro firmu, která potřebuje týmové funkce, integrace nebo vyšší limity.
- **Business:** pro zákazníky s požadavky na SSO, audit, smlouvy, SLA, fakturaci a podporu.

Neprodávej levně jen proto, že se bojíš odmítnutí. Nízká cena často přitáhne zákazníky, kteří chtějí nejvíc podpory a nejmíň platit. To je špatný obchodní model i psychologický horor v jednom.

Praktická otázka pro pricing:

> Když zákazník produkt přestane používat, co ho to bude stát za měsíc v čase, chybách, ztracených příležitostech nebo riziku?

Cena nemusí kopírovat tuto hodnotu přesně, ale má s ní mít vztah. Pokud šetříš firmě deset hodin měsíčně a stojíš méně než jeden oběd pro tým, pravděpodobně nejsi „dostupný“. Jsi podceněný.

### 4.4 Onboarding: první hodnota do patnácti minut

Nový uživatel nepřichází obdivovat architekturu. Přichází zjistit, jestli mu produkt pomůže. Onboarding má co nejrychleji dovést člověka k první hodnotné akci.

Dobré onboardingové otázky:

- Co musí uživatel udělat, aby pochopil hodnotu produktu?
- Co může produkt předvyplnit, odvodit nebo vysvětlit?
- Který krok je nutný a který je jen naše interní zvědavost?
- Jak uživatel pozná, že uspěl?
- Kde potřebuje příklad místo prázdného stavu?

Privacy-first onboarding má ještě jednu disciplínu: nesbírat data „pro jistotu“. Pokud pro první hodnotu nepotřebuješ telefon, velikost firmy nebo deset povinných polí, neptej se. Důvěra začíná tím, že se produkt nechová jako úřední formulář s ambicemi stát se sociální sítí.

Příklad dobrého začátku:

1. účet jen s e-mailem,
2. jasná volba cíle,
3. ukázková data nebo import jednoho malého vzorku,
4. první výstup do pár minut,
5. až potom doplnění týmu, fakturace nebo integrací.

Prázdné stavy jsou pro SaaS kritické. Obrazovka bez dat nemá říkat „nic tu není“. Má říct: „Tady je další nejlepší krok.“ Přidej vzorový projekt, demo záznam nebo checklist. Uživatel si nesmí připadat jako v prázdném skladu, kam ho někdo pustil a zamkl vrata.

### 4.5 Retence: sleduj opakovanou hodnotu

První registrace je jen začátek. SaaS žije z toho, že se lidé vrací, protože produkt pravidelně řeší něco důležitého. Proto má smysl definovat jednu nebo dvě opakované akce, které znamenají skutečnou hodnotu.

Příklady:

- reportingový nástroj: report byl vytvořen a sdílen,
- projektový nástroj: úkol byl dokončen nebo předán,
- analytika: tým si otevřel dashboard a udělal rozhodnutí,
- fakturace: faktura byla vystavena a zaplacena,
- AI asistent: návrh byl použit v reálném workflow.

Retence se nezlepší tím, že pošleš víc e-mailů. Zlepší se tím, že produkt častěji doručí hodnotu, méně překáží a lépe připomene správný okamžik použití. E-mail může pomoct, ale jen pokud je konkrétní, užitečný a respektuje souhlas i frekvenci.

Privacy-first přístup k retenci:

- sleduj agregované vzory a produktové události s jasným účelem,
- neukládej zbytečný obsah uživatelských dat do analytiky,
- odděl technické logy od produktových metrik,
- dej zákazníkovi možnost exportu a ukončení účtu,
- používej přímé produktové signály místo reklamního pronásledování po internetu.

Retence není trik. Je to důkaz, že produkt patří do pracovního rytmu zákazníka.

### Checklist pro první platící SaaS zákazníky

- [ ] Umíme popsat cílovku jednou konkrétní větou.
- [ ] Máme nejméně pět rozhovorů založených na skutečném chování, ne na komplimentech.
- [ ] První verze řeší jeden úzký use case s měřitelným výsledkem.
- [ ] Víme, která akce znamená první hodnotu pro nového uživatele.
- [ ] Onboarding vede k první hodnotě bez zbytečných povinných polí.
- [ ] Pricing je jednoduchý, vysvětlitelný a navázaný na hodnotu.
- [ ] Máme jasně oddělené produktové metriky, technické logy a zákaznický obsah.
- [ ] Prázdné stavy ukazují další krok, ne jen prázdnou obrazovku.
- [ ] Víme, která opakovaná akce signalizuje retenci.
- [ ] Zákazník umí odejít: export, ukončení účtu a smazání dat nejsou improvizace.

---

## 5. Marketing bez invazivního trackingu

### 5.1 Marketing začíná tím, že jdeš najít bez šmírování

Privacy-first marketing není marketing bez dat. Je to marketing, který si nejdřív ujasní, jakou hodnotu dává publiku, a teprve potom řeší měření. Ne každé rozhodnutí potřebuje individuální profil návštěvníka, reklamní pixel a datovou mapu větší než samotný web.

Pro malý evropský web je základ pořád překvapivě obyčejný:

- jasná nabídka na homepage,
- indexovatelné stránky pro služby, use casy a články,
- rychlý web bez zbytečných skriptů,
- srozumitelné titulky, meta popisy a interní odkazy,
- RSS feed a přímé odkazy na obsah,
- agregovaná analytika s jasným účelem.

Google ve svých doporučeních opakovaně zdůrazňuje „people-first“ obsah: stránky mají být užitečné pro lidi, ne vytvořené primárně pro manipulaci vyhledávání ([Google Search Central: Helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)). To je dobrá zpráva pro malé týmy. Nemusíš vyhrát soutěž v počtu publikovaných textů. Musíš odpovědět lépe, konkrétněji a důvěryhodněji než anonymní generátor slovní vaty.

Praktický příklad: článek „Jak vybrat evropskou analytiku pro B2B web“ je lepší než „Digitální marketing v roce 2026“. První téma má jasný problém, cílovku i rozhodovací kontext. Druhé zní jako konferenční panel, kde všichni říkají „AI změní všechno“ a pak jdou na chlebíček.

### 5.2 SEO disciplína: technika, struktura, důvěra

SEO pro privacy-first web nestojí na trikách. Stojí na tom, že vyhledávač i člověk rozumí, co stránka řeší. Google Search Central doporučuje mimo jiné používat popisné titulky, logickou strukturu nadpisů, srozumitelný obsah, interní odkazy a technické prvky jako sitemapu, robots.txt nebo kanonické URL podle potřeby ([Google Search Central: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)).

Minimální SEO sada pro každou důležitou stránku:

- **Title:** konkrétní hlavní slib stránky, ne jen název firmy.
- **Meta description:** lidské shrnutí, proč stránku otevřít.
- **H1:** jedna jasná hlavní věta.
- **Interní odkazy:** další krok pro čtenáře, ne náhodný seznam.
- **Kanonická URL:** prevence duplicit, hlavně u variant a parametrů.
- **Strukturovaná data:** tam, kde dávají smysl — článek, organizace, FAQ, produkt.
- **Sitemap.xml:** seznam důležitých URL pro vyhledávače.
- **Robots.txt:** jednoduchá pravidla, ne zamčený trezor plný překvapení.

Privacy-first varianta SEO má ještě jednu výhodu: méně skriptů znamená méně třetích stran, menší riziko úniku dat a často rychlejší načítání. Výkon není jen technická metrika. Je to marketingová disciplína, protože pomalý web ztrácí důvěru dřív, než stihne ukázat případovou studii.

### 5.3 Obsahový systém: piš pro rozhodnutí, ne pro kalendář

Obsahový marketing často selže proto, že tým plní publikační kalendář místo zákaznických otázek. Jednou týdně vyjde článek, všichni si odškrtnou aktivitu a nikdo neví, komu to pomohlo.

Lepší je stavět obsah kolem rozhodovacích momentů:

1. **Problém:** zákazník si uvědomuje, že ho něco bolí.
2. **Možnosti:** porovnává ruční řešení, agenturu, SaaS, interní vývoj nebo nicnedělání.
3. **Důvěra:** chce vidět zkušenost, proces, bezpečnost a rizika.
4. **Nákup:** potřebuje cenu, rozsah, termíny, smlouvy a další krok.
5. **Používání:** hledá dokumentaci, návody, checklisty a inspiraci.

Příklad obsahové mapy pro firmu, která staví privacy-first weby:

- „Kdy firemní web potřebuje cookie lištu a kdy ne“ — problém a právní nejistota.
- „Google Analytics alternativy pro evropské B2B weby“ — možnosti.
- „Jak vypadá privacy-first redesign krok za krokem“ — důvěra.
- „Kolik stojí nový B2B web a co má být v nabídce“ — nákup.
- „Checklist před spuštěním webu bez marketingových cookies“ — používání.

Každý kus obsahu má mít další krok: stáhnout checklist, otevřít related článek, objednat audit, poslat dotaz, přihlásit RSS. Přímý odkaz je často lepší než sociální widget. Widgety z cizích platforem přidávají tracking, zpomalují web a ještě se tváří, že bez nich internet neumí sdílet URL. Umí. Už dlouho.

### 5.4 RSS a přímé kanály jako zdravá protiváha algoritmům

RSS je staré, nenápadné a pořád užitečné. RSS 2.0 specifikace definuje feed jako XML kanál s položkami, odkazy a metadaty, který může čtečka pravidelně odebírat ([RSS Advisory Board: RSS 2.0 Specification](https://www.rssboard.org/rss-specification)). Z marketingového pohledu je to jednoduchý slib: kdo chce číst novinky, může je dostat bez reklamní platformy, bez profilování a bez toho, aby algoritmus rozhodl, že dnes radši ukáže tancující kočku.

Privacy-first kanály pro malý web:

- **RSS feed:** pro články, changelog, podcast nebo poznámky z vývoje.
- **E-mail newsletter:** jen s jasným souhlasem, snadným odhlášením a minimem měření.
- **Přímé odkazy:** sdílení URL bez social-share skriptů.
- **Dokumentace a changelog:** veřejný důkaz, že produkt žije.
- **Webmention nebo komentáře bez trackerů:** jen pokud je tým opravdu chce moderovat.

RSS nepřinese tak hezký dashboard jako reklamní platforma. Přinese ale kontrolu nad distribucí. A kontrola je v Evropě dost dobrý luxus.

**Codyho komentář:** Sociální sítě používej jako výkladní skříň, ne jako pronajatý byt bez smlouvy. Publikuj originál u sebe, na síť dej upoutávku a odkaz. Když algoritmus dostane náladu jako kocour u veterináře, pořád máš vlastní archiv.

### 5.5 Měření: agregace, UTM disciplína a méně domněnek

Marketing bez invazivního trackingu potřebuje disciplínu v měření. Když nesbíráš osobní profily, musíš mít pořádek v kampaních, cílech a interpretaci.

Základní měřicí model:

- **UTM parametry:** jednotné názvy kampaní, zdrojů a médií.
- **Agregovaná analytika:** návštěvy, zdroje, stránky, konverze.
- **Serverové signály:** odeslání formuláře, registrace, objednávka, trial.
- **Kvalitativní zpětná vazba:** otázka „Jak jste se o nás dozvěděli?“ ve formuláři nebo obchodním procesu.
- **Obsahový výkon:** články, které dlouhodobě přivádějí relevantní návštěvy a poptávky.

Umami se prezentuje jako privacy-first analytika bez cookies a bez automatického sběru osobních údajů; pro evropský provoz dává smysl ověřit region, nastavení retence a zda data zůstávají pod kontrolou týmu ([Umami: Platform](https://umami.is/platform), [Umami: FAQ](https://docs.umami.is/docs/faq)). Pokud používáš jiný nástroj, neptej se jen „má hezký dashboard?“. Ptej se: ukládá IP adresy, používá cookies, posílá data třetím stranám, umí EU region, umí export a smazání?

U AI obsahu platí stejná logika jako u analytiky: nástroj je pomocník, ne omluva. Google ve své dokumentaci k použití generativní AI doporučuje kontrolovat přesnost a užitečnost výstupů; důležité je, aby obsah pomáhal lidem a nebyl automatizací bez hodnoty ([Google Search Central: Using generative AI content on your website](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)). Pro Codyho to znamená: AI klidně použij na osnovu, varianty titulků nebo kontrolu chyb. Finální odpovědnost má člověk nebo tým, který obsah publikuje.

### Checklist pro privacy-first marketing

- [ ] Každá důležitá stránka má jeden jasný účel a další krok.
- [ ] Title, meta description, H1, interní odkazy a kanonická URL jsou vyplněné vědomě.
- [ ] Sitemap.xml a robots.txt odpovídají skutečné struktuře webu.
- [ ] Obsah mapuje rozhodovací momenty zákazníka, ne jen publikační kalendář.
- [ ] Web nabízí RSS nebo jiný přímý kanál mimo algoritmické platformy.
- [ ] Sdílení funguje přes normální URL, ne přes social-share trackery.
- [ ] UTM názvy jsou jednotné a dokumentované.
- [ ] Analytika je agregovaná, bez zbytečných osobních profilů a s jasnou retencí.
- [ ] Newsletter má jasný souhlas, odhlášení a rozumnou frekvenci.
- [ ] AI výstupy před publikací kontroluje člověk a obsah nese vlastní zkušenost.

---

## Zdroje

- ENISA: [Cybersecurity guide for SMEs](https://www.enisa.europa.eu/publications/cybersecurity-guide-for-smes)
- ENISA: [Cloud Security Guide for SMEs](https://www.enisa.europa.eu/publications/cloud-security-guide-for-smes)
- ENISA: [Technical implementation guidance on cybersecurity risk management measures](https://www.enisa.europa.eu/publications/technical-implementation-guidance-on-cybersecurity-risk-management-measures)
- European Data Protection Board: [Privacy by design and by default](https://www.edpb.europa.eu/topics/ai-and-technology/privacy-by-design-and-by-default_en)
- European Data Protection Board: [Basic principles](https://www.edpb.europa.eu/topics/key-gdpr-concepts/basic-principles_en)
- European Data Protection Board: [Guidelines 05/2020 on consent under Regulation 2016/679](https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_de)
- European Commission: [Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en)
- Google Search Central: [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- Google Search Central: [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- Google Search Central: [Using generative AI content on your website](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)
- OWASP: [Application Security Verification Standard](https://owasp.org/projects/asvs)
- OWASP: [Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)
- RSS Advisory Board: [RSS 2.0 Specification](https://www.rssboard.org/rss-specification)
- Umami: [Platform](https://umami.is/platform)
- Umami: [FAQ](https://docs.umami.is/docs/faq)
- Úřad pro ochranu osobních údajů: [Cookies — otázky a odpovědi](https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies)
- Úřad pro ochranu osobních údajů: [Cookies od začátku roku 2022 pouze se souhlasem](https://uoou.gov.cz/novinky/vse/cookies-od-zacatku-roku-2022-pouze-se-souhlasem)
- Úřad pro ochranu osobních údajů: [Informace pro e-shopy](https://uoou.gov.cz/profesional/qa-otazky-a-odpovedi/informace-pro-e-shopy)

---

## Pracovní log

- **2026-10-11:** Doplněna kapitola 5 o marketingu bez invazivního trackingu: SEO disciplína, obsah podle rozhodovacích momentů, RSS, přímé kanály, UTM měření, privacy-friendly analytika a AI kontrola obsahu.
- **2026-10-11:** Doplněna kapitola 4 o SaaS produktu od nápadu po první platící zákazníky: validace bez komplimentů, MVP, pricing, onboarding, retence a privacy-first checklist.
- **2026-10-11:** Doplněna kapitola 3 o technickém stacku pro malé týmy: rozdělení vrstev, EU hosting, zálohy, monitoring, logy, deploy pipeline a praktický checklist se zdroji ENISA a OWASP.
- **2026-10-11:** Doplněna kapitola 2 o privacy-first základech: mapa dat, cookies, souhlas, SaaS architektura, živá dokumentace a praktický checklist s ověřenými zdroji ÚOOÚ, EDPB a Evropské komise.
- **2026-10-11:** Založena struktura e-booku, přidána osnova a dokončena kapitola 1.1–1.5 o strategii webu, metrikách a privacy-first přístupu včetně checklistu a ověřených zdrojů.
