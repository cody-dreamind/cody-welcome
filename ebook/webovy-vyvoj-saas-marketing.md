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

## 6. Produktivita zakladatele a týmu

### 6.1 Produktivita není víc práce, ale méně rozpracovaného chaosu

Malý tým často neprohrává proto, že by pracoval málo. Prohrává proto, že má najednou otevřených třicet směrů: redesign webu, nový pricing, dvě integrace, tři marketingové nápady, refaktor databáze a „rychlou“ automatizaci, která rychlá nebyla ani v první větě zadání.

Produktivita v SaaS a webovém vývoji začíná omezením rozpracované práce. Každý aktivní projekt stojí pozornost, koordinaci, testování a návrat do kontextu. Když je rozpracovaného moc, tým sice vypadá vytíženě, ale hodnota se k zákazníkovi dostává pomalu.

Praktické pravidlo pro malý tým:

- jeden hlavní produktový cíl na týden,
- jedna hlavní marketingová aktivita na týden,
- jeden provozní dluh, který se vědomě opraví,
- všechno ostatní jde do backlogu, ne do hlavy.

> **Codyho komentář:** Backlog není hřbitov nápadů. Je to parkoviště. Jen tam občas musíš odtáhnout auta, která už nikdy nepojedou.

### 6.2 Týdenní rytmus: rozhodnutí, práce, reflexe

Zakladatel nepotřebuje jen seznam úkolů. Potřebuje rytmus, který brání tomu, aby každý den začínal od nuly. Jednoduchý týdenní systém může vypadat takhle:

- **Pondělí:** vybrat cíle týdne, ověřit kapacitu, zrušit nejasné úkoly.
- **Úterý až čtvrtek:** dělat hlubokou práci, vývoj, obsah, prodejní follow-upy a rozhodnutí, která posouvají produkt.
- **Pátek:** zkontrolovat výsledky, poznatky od zákazníků, metriky, incidenty a dluhy.
- **Průběžně:** urgentní věci řešit, ale nepřepisovat kvůli nim celý týden bez důvodu.

Tento rytmus funguje i pro jednočlenný tým. Jen místo meetingu s kolegy vedeš meeting sám se sebou — což zní divně, ale pořád je to levnější než tři hodiny scrollování issue trackeru a pocit, že „něco určitě dělám“.

### 6.3 Rozhodovací systém: zapisuj proč, ne jen co

U webu i SaaS se spousta rozhodnutí vrací jako bumerang: proč jsme zvolili tento hosting, proč nemáme Facebook Pixel, proč jsme pricing nastavili takhle, proč zákazníkovi nenabídneme custom funkci hned?

Proto se vyplatí jednoduchý rozhodovací log. Nemusí to být formální architektonický dokument. Stačí krátký zápis:

- **Kontext:** jaký problém řešíme.
- **Možnosti:** které varianty jsme zvažovali.
- **Rozhodnutí:** co děláme teď.
- **Důvod:** proč je to nejlepší volba pro současnou fázi.
- **Kdy přehodnotit:** při jakém signálu se k tomu vrátíme.

Příklad:

> **Rozhodnutí:** Nepřidáváme reklamní remarketingový pixel.  
> **Důvod:** V aktuální fázi nám víc pomůže kvalitní obsah, přímé poptávky a agregovaná analytika. Nechceme zvyšovat právní ani technickou složitost kvůli kampaním, které zatím nemají jasnou návratnost.  
> **Přehodnotit:** Pokud budeme mít stabilní placenou akvizici, jasné souhlasy a konkrétní obchodní důvod.

Takový zápis šetří čas při onboardingu, auditu i ve chvíli, kdy se po třech měsících někdo zeptá: „A proč jsme to vlastně neudělali jako všichni ostatní?“ Odpověď „protože Cody brblal o soukromí“ je sice poetická, ale log je lepší.

### 6.4 AI asistenti jako druhý mozek, ne autopilot

AI asistent může výrazně zrychlit práci, ale jen pokud má jasné mantinely. V produktivitě se hodí hlavně na:

- rozpad velkého cíle na kroky,
- návrh osnovy článku nebo landing page,
- kontrolu konzistence textu,
- shrnutí zpětné vazby od zákazníků,
- přípravu checklistu pro launch,
- návrh testovacích scénářů před releasem.

Naopak špatný nápad je posílat do nástroje bez rozmyslu citlivé zákaznické údaje, obchodní tajemství nebo exporty produkční databáze. Privacy-first produktivita znamená, že i interní automatizace má datovou dietu: pošli minimum kontextu, anonymizuj příklady a u nástrojů řeš, kde data končí.

Praktický prompt pro bezpečnější práci:

> „Zde je anonymizovaný popis problému bez osobních údajů. Navrhni tři možné postupy, rizika každého z nich a checklist před implementací.“

AI není právník, CTO ani obchodní ředitel. Je to velmi rychlý kolega, který občas sebevědomě přinese šroubovák na hasičský zásah. Používej ho, ale kontroluj výstupy.

### 6.5 Automatizuj opakování, ne přemýšlení

Automatizace má největší smysl tam, kde je postup jasný, opakovaný a dobře ověřitelný. Typické dobré kandidáty:

- kontrola dostupnosti webu,
- připomenutí expiring domén, certifikátů a faktur,
- pravidelný export nebo test obnovy záloh,
- vytvoření draftu reportu z agregovaných metrik,
- kontrola rozbitých odkazů,
- příprava release checklistu.

Naopak neautomatizuj rozhodnutí, u kterých chybí kvalitní vstupy nebo odpovědnost. Pokud neumíš popsat, jak poznáš dobrý výsledek, automatizace jen rychleji vyrábí zmatek.

Privacy-first otázky před automatizací:

- Jaká data automatizace čte?
- Kam data posílá?
- Jak dlouho je drží?
- Kdo má přístup k logům?
- Co se stane, když automatizace udělá chybu?

### Checklist pro produktivitu malého SaaS týmu

- [ ] Tým má jeden hlavní týdenní produktový cíl a jeden hlavní marketingový cíl.
- [ ] Rozpracovaná práce je omezená; nové nápady nejdřív jdou do backlogu.
- [ ] Důležitá rozhodnutí mají krátký log s kontextem, důvodem a bodem přehodnocení.
- [ ] Každý týden končí krátkou reflexí: co se dodalo, co se naučilo, co blokuje růst.
- [ ] AI asistenti pracují s anonymizovaným nebo minimálním kontextem.
- [ ] Automatizace řeší opakovatelné úkoly, ne nejasná strategická rozhodnutí.
- [ ] Interní nástroje respektují stejnou privacy-first laťku jako produkt pro zákazníky.
- [ ] Backlog se pravidelně čistí, aby nebyl skladem starého optimismu.

---

## 7. Provoz v Evropě

### 7.1 Evropský provoz není jen region v dropdownu

Když dodavatel napíše „EU region“, je to dobrý začátek, ne hotová odpověď. Provoz v Evropě znamená kombinaci techniky, smluv, procesů a schopnosti odejít, když se podmínky změní. Pokud stavíš web nebo SaaS pro evropské zákazníky, ptej se na čtyři vrstvy:

1. **Kde fyzicky běží data?** Datacentrum, region, zálohy, logy, monitoring.
2. **Kdo k nim má přístup?** Zaměstnanci dodavatele, subdodavatelé, support, externí procesory.
3. **Podle jakých pravidel se data zpracovávají?** Smlouva, DPA, seznam subdodavatelů, účel zpracování.
4. **Jak rychle dokážeš odejít?** Export dat, dokumentovaná migrace, obnovitelné zálohy, žádný proprietární chaos.

Privacy-first provoz není romantická představa o serveru pod stolem. Je to schopnost vysvětlit zákazníkovi, auditorovi i sobě v pátek večer: „Víme, kde data jsou, proč tam jsou a jak je dostaneme pryč.“

### 7.2 Dodavatelský checklist před podpisem

U malého týmu je lákavé vybrat nástroj podle toho, co má hezký landing page a integraci na tři kliknutí. To je v pořádku pro poznámky z brainstormingu, ale ne pro produkční data zákazníků.

Před podpisem nebo nasazením si u každého důležitého dodavatele napiš krátkou kartu:

- **Účel:** co přesně pro nás dělá a jestli to nejde jednodušeji.
- **Data:** jaké osobní, obchodní a technické údaje zpracovává.
- **Region:** kde běží primární data, zálohy a logy.
- **Role:** jestli je dodavatel zpracovatel, samostatný správce nebo kombinace podle konkrétní funkce.
- **Smlouvy:** DPA, bezpečnostní přílohy, seznam subdodavatelů, pravidla pro incidenty.
- **Exit:** formát exportu, retenční lhůty po ukončení a plán migrace.

GDPR u zpracovatelů vyžaduje smluvní ujednání podle článku 28; EDPB k rolím správce a zpracovatele vydal samostatné pokyny, které se hodí číst hlavně ve chvíli, kdy dodavatel tvrdí „my nic nezpracováváme“, zatímco drží kompletní databázi zákazníků ([EDPB: Guidelines 07/2020 on controller and processor concepts](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-072020-concepts-controller-and-processor-gdpr_en)).

**Codyho komentář:** Pokud dodavatel neumí jednoduše vysvětlit, kde jsou data a jak se mažou, není to automaticky zlý dodavatel. Ale je to signál, že ho nemáš pustit k nejcitlivější části produktu jako prvního hosta na afterparty.

### 7.3 Bezpečnostní minimum: nudné věci, které zachraňují víkend

Bezpečnost malého SaaS týmu nemusí začít nákupem drahého enterprise nástroje. Často stačí důsledně dělat nudné věci:

- MFA pro repozitáře, hosting, e-mail, domény a platební nástroje.
- Oddělené produkční a vývojové přístupy.
- Nejméně práv: člověk i služba má jen ta oprávnění, která opravdu potřebuje.
- Správa tajemství mimo repozitář; žádné `.env` v Gitu a žádné klíče v chatu.
- Pravidelné aktualizace závislostí a rychlé řešení kritických zranitelností.
- Zálohy ověřené obnovou, ne jen zelenou ikonou v administraci.
- Incident kontakty: kdo rozhoduje, kdo komunikuje, kdo vypíná problémovou integraci.

ENISA ve svých doporučeních pro malé a střední podniky opakovaně zdůrazňuje řízení rizik, zálohy, kontrolu přístupů, školení lidí a připravenost na incidenty jako praktický základ kyberbezpečnosti ([ENISA: Cybersecurity guide for SMEs](https://www.enisa.europa.eu/publications/cybersecurity-guide-for-smes)). Smysl není mít bezpečnostní divadlo. Smysl je zmenšit počet situací, kdy jeden zapomenutý token položí firmu na lopatky.

### 7.4 NIS2, Data Act a proč sledovat regulaci bez paniky

Evropské regulace se mění a není fér tvářit se, že malý tým má každý týden číst úřední věstník místo vývoje produktu. Zároveň ale platí: pokud prodáváš B2B SaaS, provozuješ kritickou část workflow zákazníků nebo pracuješ s citlivějšími daty, regulace se tě může dotknout nepřímo přes požadavky zákazníků.

NIS2 rozšiřuje evropský rámec kyberbezpečnosti a klade důraz mimo jiné na řízení rizik, zvládání incidentů, bezpečnost dodavatelského řetězce a odpovědnost vedení; česká i evropská implementace se může projevit v dotaznících, smlouvách a požadavcích větších zákazníků ([European Commission: NIS2 Directive](https://digital-strategy.ec.europa.eu/en/policies/nis2-directive)).

Data Act je další praktický příklad: jeho pravidla míří mimo jiné na přístup k datům a snazší změnu poskytovatele cloudových služeb, přičemž Evropská komise uvádí použitelnost hlavních pravidel od 12. září 2025 ([European Commission: Data Act](https://digital-strategy.ec.europa.eu/en/policies/data-act)). Pro SaaS zakladatele z toho plyne jednoduchá provozní lekce: stav produkt tak, aby data šla exportovat a vysvětlitelně přenést. I když tě konkrétní paragraf mine, zákazník tu schopnost ocení.

Praktický rytmus bez paniky:

- Jednou za čtvrtletí projdi regulatorní změny relevantní pro tvůj typ zákazníků.
- Udržuj seznam dodavatelů a datových toků aktuální, ne jako archeologickou památku z launch weeku.
- Připrav odpovědi na bezpečnostní dotazník dřív, než ho pošle první enterprise zákazník.
- U větších kontraktů počítej s tím, že privacy a security jsou součást prodeje, ne brzdný padák.

### 7.5 Incident není ostuda. Nepřipravený incident je ostuda.

Incident nemusí být hned katastrofa s titulkem v novinách. Může to být uniklý API token, špatně nastavený bucket, rozbitá autentizace, omylem odeslaný export, výpadek plateb nebo chyba, která zákazníkům ukazuje cizí data. Rozdíl mezi profesionálním týmem a improvizačním kroužkem je v tom, jestli existuje postup.

Minimální incident playbook:

1. **Zastav škodu:** vypni klíč, rollbackni release, odpoj integraci, zablokuj přístup.
2. **Zachovej stopy:** logy, časová osa, dotčené účty, verze aplikace, kdo co udělal.
3. **Urči dopad:** jaká data, kolik uživatelů, jak dlouho, jestli šlo o osobní údaje.
4. **Komunikuj:** interně hned, zákazníkům věcně, bez mlžení a bez právnického kouře.
5. **Oprav příčinu:** nejen symptom, ale i proces, test nebo kontrolu, která měla problém zachytit.
6. **Napiš postmortem:** co se stalo, proč, co měníme, kdo vlastní follow-up.

Pro GDPR incidenty si hlídej zejména vyhodnocení, jestli jde o porušení zabezpečení osobních údajů a jaké oznamovací povinnosti vznikají. Tady už nehraje Cody na advokáta v mikině: konkrétní incident řeš s právníkem nebo pověřencem podle dopadu.

### Checklist pro evropský privacy-first provoz

- [ ] Každý klíčový dodavatel má kartu: účel, data, region, role, smlouvy, exit.
- [ ] Produkční data, zálohy, logy a support přístupy mají popsané umístění a retenční lhůty.
- [ ] Přístupy jsou chráněné MFA a funguje princip nejmenších oprávnění.
- [ ] Tajemství nejsou v repozitáři, chatu ani dokumentaci; rotace klíčů má jasný postup.
- [ ] Zálohy se pravidelně obnovují testem, ne jen vytvářejí.
- [ ] Existuje jednoduchý incident playbook s rolemi, kontakty a komunikačním postupem.
- [ ] Produkt umí exportovat zákaznická data ve srozumitelném formátu.
- [ ] Tým čtvrtletně kontroluje relevantní regulatorní změny a požadavky zákazníků.
- [ ] Pro enterprise prodej existuje připravený privacy/security balíček: DPA, subdodavatelé, hosting, bezpečnostní minimum.

---

## 8. Checklisty a šablony

Checklist není dekorace do Notionu. Je to způsob, jak snížit počet věcí, které musí tým držet v hlavě, když hoří deadline, klient čeká na odpověď a produkce se tváří jako kočka, která právě shodila vázu a nechápe, proč se všichni dívají na ni.

V privacy-first provozu checklist pomáhá hlavně ve třech situacích:

- **před spuštěním** — abys nevypustil web se slepou analytikou, chybějícími texty nebo zbytečnými trackery,
- **před změnou** — abys věděl, co nová integrace sbírá, kam data tečou a kdo za ni ručí,
- **po incidentu** — abys neimprovizoval komunikaci, důkazy a opravu příčiny až ve chvíli, kdy už tikají hodiny.

Níže jsou praktické šablony. Nejsou právní dokument na kopírování naslepo. Ber je jako provozní start, který si malý tým upraví podle produktu, zákazníků a rizika. GDPR stojí mimo jiné na odpovědnosti, minimalizaci dat a schopnosti doložit, co a proč děláš; Evropská komise tyto principy shrnuje v přehledu [Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en) a EDPB má praktickou sekci [Data protection guide for small business](https://www.edpb.europa.eu/sme/be-compliant/be-compliant_en) včetně [DPIA témat](https://www.edpb.europa.eu/topics/accountability-and-compliance-tools/data-protection-impact-assessment_en).

### 8.1 Audit webu před spuštěním

Použij pro nový web, redesign, landing page nebo zásadní změnu homepage. Nejdřív projdi ručně stránku jako návštěvník. Až potom pouštěj nástroje. Automatický audit ti neřekne, že věta v hero sekci zní jako generátor firemních klišé po třetím espressu.

#### Strategická jasnost

- [ ] Nad ohybem stránky je jasné, co firma dělá, pro koho a jaký výsledek slibuje.
- [ ] Primární CTA je jednoznačné a vede na další logický krok: kontakt, demo, objednávku, stažení nebo detail služby.
- [ ] Každá důležitá stránka má jeden hlavní cíl a neschovává ho mezi pět stejně výrazných tlačítek.
- [ ] Důkazy jsou konkrétní: reference, ukázky práce, čísla, proces, certifikace nebo veřejné case studies.
- [ ] Text odpovídá reálné nabídce, ne roadmapě, která zatím existuje jen v optimismu zakladatele.

#### Technika a dostupnost

- [ ] Stránka má správný `<title>`, meta description, kanonickou URL a Open Graph metadata.
- [ ] Navigace funguje bez JavaScriptových triků, které z obyčejného odkazu dělají tajnou stezku pro pavouky.
- [ ] Obrázky mají rozumnou velikost, `alt` text tam, kde nese význam, a nejsou načítané z náhodných cizích CDN.
- [ ] Formuláře mají popisky, validaci, srozumitelné chybové hlášky a potvrzení po odeslání.
- [ ] Web jde používat na mobilu, klávesnici a při horším připojení.
- [ ] `robots.txt`, `sitemap.xml` a interní odkazy podporují indexaci důležitých stránek.

#### Privacy-first kontrola

- [ ] Na stránce neběží marketingové pixely, fingerprinting ani cizí skripty bez jasného účelu.
- [ ] Analytika měří agregovaně a sbírá jen data, která tým skutečně používá pro rozhodování.
- [ ] Cookie lišta se zobrazuje jen tehdy, když je opravdu potřeba; technické cookies nejsou maskované jako marketing.
- [ ] U každého formuláře je jasné, proč data sbíráš, kdo je dostane a jak dlouho je držíš.
- [ ] Privacy policy odpovídá realitě implementace, ne přání z právní šablony.
- [ ] Externí služby mají zkontrolovaný region zpracování, roli správce/zpracovatele a smluvní základ.

**Codyho komentář:** Nejlepší cookie banner je ten, který nemusíš mít, protože web nedělá z návštěvníka datový vánoční stromeček. Pokud banner potřebuješ, aspoň ať je poctivý: žádné temné vzory, žádné „přijmout vše“ zeleně a „odmítnout“ jako lov na šedý pixel.

### 8.2 Launch checklist pro SaaS

Launch není jeden moment. Je to série kontrol, které rozhodnou, jestli první zákazníci narazí na produkt, nebo na sbírku omluv. Tenhle checklist drž malý tým u země.

#### Produkt a onboarding

- [ ] Nový uživatel chápe první hodnotnou akci do pěti minut od registrace.
- [ ] Trial, demo nebo objednávka mají jasný další krok a potvrzení e-mailem.
- [ ] Prázdné stavy vysvětlují, co udělat dál, ne jen oznamují „No data“.
- [ ] Kritické cesty jsou ručně otestované: registrace, přihlášení, reset hesla, platba, faktura, export, zrušení.
- [ ] Support kontakt je viditelný a někdo ho opravdu čte.
- [ ] Roadmapa nepřehlušuje současnou hodnotu produktu.

#### Provoz a bezpečnost

- [ ] Produkční prostředí používá oddělené přístupy, tajemství a databáze od vývoje.
- [ ] Backupy existují, mají retenci a minimálně jeden obnovovací test. ENISA pro malé firmy doporučuje praktickou zálohovací strategii včetně off-site kopie v reportu [Cybersecurity for SMEs — Challenges and Recommendations](https://www.enisa.europa.eu/publications/enisa-report-cybersecurity-for-smes).
- [ ] Logy neobsahují hesla, tokeny, celé platební údaje ani zbytečné osobní údaje.
- [ ] Monitoring hlídá dostupnost, chyby aplikace a základní byznys signály, ne jen CPU graf, který vypadá důležitě na dashboardu.
- [ ] Incident playbook má vlastníka, kontakty, rozhodovací práh a postup pro komunikaci.
- [ ] Změny jdou nasadit opakovatelně a jde se vrátit k poslední funkční verzi.

#### Obchod a komunikace

- [ ] Pricing je srozumitelný a vysvětluje rozdíly mezi tarify podle hodnoty, ne podle interních názvů funkcí.
- [ ] Fakturace, DPH, storno a obchodní podmínky odpovídají cílovému trhu.
- [ ] E-mailové šablony mají lidský tón, jasný předmět a žádné agresivní tracking pixely.
- [ ] Launch zpráva říká, komu produkt pomáhá, jaký problém řeší a co má člověk udělat dál.
- [ ] Máš připravený seznam prvních lidí, kterým napíšeš přímo, místo spoléhání na algoritmickou loterii.

### 8.3 Privacy review šablona pro novou funkci nebo nástroj

Vyplň před přidáním nové integrace, analytiky, AI funkce, CRM, support nástroje nebo platební vrstvy. Cílem není všechno zakázat. Cílem je vědět, co se mění.

```text
Název změny:
Vlastník:
Datum review:

1) Účel
- Jaký problém řešíme?
- Jak poznáme, že změna funguje?
- Dá se účel splnit s menším množstvím dat?

2) Data
- Jaké osobní údaje se sbírají nebo posílají?
- Jsou v datech citlivé údaje, obsah komunikace, platební údaje nebo identifikátory zařízení?
- Jak dlouho data potřebujeme?

3) Role a tok dat
- Jsme správce, zpracovatel, společný správce nebo pouze používáme zpracovatele?
- Kam data fyzicky a právně tečou?
- Je zapojená země mimo EU/EHP?

4) Právní základ a transparentnost
- Jaký je právní základ zpracování?
- Je potřeba souhlas, oprávněný zájem, smlouva nebo jiný základ?
- Musíme upravit privacy policy, cookie informaci, DPA nebo seznam subdodavatelů?

5) Rizika a opatření
- Co se stane, když služba unikne, selže nebo změní podmínky?
- Máme šifrování, omezení přístupů, audit log a mazání?
- Je potřeba DPIA?

Rozhodnutí:
- Schválit / upravit / zamítnout
- Podmínky schválení:
- Datum další revize:
```

DPIA neboli posouzení vlivu na ochranu osobních údajů řeš zejména u zpracování, které pravděpodobně vytváří vysoké riziko pro práva a svobody lidí. EDPB k tomu poskytuje obecné vodítko k [Data protection impact assessment](https://www.edpb.europa.eu/topics/accountability-and-compliance-tools/data-protection-impact-assessment_en) a zveřejnil také [template for Data Protection Impact Assessment](https://www.edpb.europa.eu/our-work-tools/documents/public-consultations/2026/edpb-dpia-template_en); pro český projekt si navíc ověř seznamy a výklad u ÚOOÚ nebo právníka podle konkrétního případu.

### 8.4 Marketingový plán bez šmírovacího autopilota

Marketingový plán nemusí být třicetistránkový dokument. U malého týmu stačí jedna tabulka, pokud nutí k rozhodnutí.

```text
Cíl kampaně:
Primární publikum:
Nabídka/slib:
Hlavní kanál:
Sekundární kanály:
Měřená konverze:
Jaká data sbíráme:
Jaká data nesbíráme:
Retence dat:
Kdo vlastní vyhodnocení:
Datum vyhodnocení:
```

#### Praktický příklad

- **Cíl kampaně:** 15 kvalifikovaných poptávek na redesign B2B webu.
- **Publikum:** české a slovenské SaaS firmy 10–80 lidí, které řeší expanzi v EU.
- **Nabídka:** bezplatný 30min audit homepage a privacy měření.
- **Kanály:** odborný článek, RSS, LinkedIn příspěvek bez pixelu, přímý e-mail existujícím kontaktům, partnerský newsletter.
- **Konverze:** odeslání formuláře nebo přímý e-mail.
- **Měření:** agregované návštěvy, zdroj podle UTM, počet poptávek, kvalita poptávek po ručním ohodnocení.
- **Co nesbíráme:** cross-site identifikátory, fingerprinting, reklamní publika, heatmapy se záznamem chování jednotlivců.

### 8.5 Měsíční provozní review

Jednou měsíčně si dej 45 minut. Ne víc, protože pak se z review stane interní divadlo s krásnými grafy a nulovou změnou.

- [ ] Projdi 3 nejnavštěvovanější stránky a ověř, jestli pořád vedou k jasnému dalšímu kroku.
- [ ] Zkontroluj 3 nejčastější support dotazy a rozhodni, jestli patří do produktu, dokumentace nebo onboardingu.
- [ ] Projdi nové skripty, integrace a subdodavatele od posledního review.
- [ ] Ověř, že backup a restore test nejsou jen historická legenda v README.
- [ ] Zkontroluj neaktivní účty, přístupy bývalých spolupracovníků a API klíče.
- [ ] Vyber jednu věc, kterou příští měsíc odstraníš: tracker, formulářové pole, ruční krok, mrtvou stránku nebo zbytečnou metriku.
- [ ] Zapiš rozhodnutí do logu: co měníme, proč, kdo to vlastní a do kdy.

### 8.6 Jednostránkový operační manuál

Každý malý SaaS by měl mít dokument, který přežije dovolenou zakladatele. Nemusí být krásný. Musí být použitelný.

```text
Produkt:
Produkční URL:
Repozitář:
Hosting:
Databáze:
Analytika:
Monitoring:
Platební brána:
E-mailing:
Support:

Kdo má produkční přístup:
Kde jsou uložené tajné hodnoty:
Jak se nasazuje:
Jak se vrací rollback:
Jak se obnovuje backup:
Jak se vypíná problematická integrace:

Incident kontakty:
Právní/privacy kontakt:
Zákaznická komunikace:
Poslední test obnovy:
Poslední privacy review:
```

**Codyho komentář:** Pokud operační manuál existuje jen v hlavě jednoho člověka, není to znalost. Je to single point of failure s kalendářem.

### Finální checklist e-booku pro praxi

- [ ] Umíš jednou větou říct, komu produkt pomáhá a jaký výsledek slibuje.
- [ ] Víš, které metriky opravdu používáš pro rozhodování, a zbytek neměříš jen proto, že to nástroj umí.
- [ ] Máš mapu dat, seznam subdodavatelů a jasné retenční lhůty.
- [ ] Každá nová integrace projde privacy review před nasazením, ne po prvním dotazu zákazníka.
- [ ] Web funguje bez invazivního trackingu a obsah jde sledovat přes RSS nebo přímé odkazy.
- [ ] SaaS má otestované kritické cesty, zálohy, rollback a incident playbook.
- [ ] Marketing má konkrétní nabídku, kanál, měření a datum vyhodnocení.
- [ ] Tým každý měsíc jednu věc zjednoduší, odstraní nebo zpřesní.

Tím se e-book uzavírá prakticky: méně kouzel, víc systému. Webový vývoj, SaaS a marketing nejsou oddělené disciplíny. Jsou to části jednoho provozního slibu: pomáhat zákazníkům, růst rozumně a zacházet s daty tak, aby se za to tým nemusel stydět ani před zákazníkem, ani před regulátorem, ani před vlastním budoucím já.

---

## Příloha A: 30denní akční plán pro malý web nebo SaaS

Tenhle plán je pro tým, který nechce jen číst a souhlasně kývat hlavou nad privacy-first principy, ale něco reálně změnit. Nepředpokládá velký rozpočet, právní oddělení ani produktový tým o dvanácti lidech. Stačí vlastník, kalendář a ochota přestat si lhát do backlogu.

### Týden 1: Ujasni slib, cíle a datovou stopu

První týden není o redesignu. Je o inventuře reality. Vezmi homepage, pricing, kontaktní formulář, onboarding a analytiku a napiš, co se opravdu děje.

- **Den 1:** Napiš jednu větu: komu pomáháme, s čím a jaký výsledek slibujeme.
- **Den 2:** Vyber jeden primární cíl webu nebo produktu pro příštích 30 dní: poptávky, demo hovory, aktivace trialu, platící zákazníci nebo snížení support zmatků.
- **Den 3:** Projdi všechny formuláře a odstraň pole, u kterých neumíš říct, proč je potřebuješ.
- **Den 4:** Sepiš mapu dat pro analytiku, formuláře, účty, fakturaci, support a logy.
- **Den 5:** Zkontroluj všechny externí skripty na webu a rozděl je na technické, analytické, marketingové a „nikdo už neví“.

Výstup týdne: jedna věta slibu, jeden měřitelný cíl, první mapa dat a seznam skriptů. Pokud tým objeví starý pixel, který nikdo nepoužívá, gratuluju — právě jste našli digitální prachový chuchvalec.

### Týden 2: Zjednoduš web a měření

Druhý týden se zaměř na věci, které návštěvník skutečně vidí a které ovlivňují rozhodnutí. Nehoníš dokonalost. Honíš srozumitelnost.

- **Den 6:** Přepiš hero sekci tak, aby obsahovala výsledek, cílovku a další krok.
- **Den 7:** Uprav hlavní CTA na klíčových stránkách, aby nekonkurovala třem dalším stejně hlasitým tlačítkům.
- **Den 8:** Ověř, že důležité stránky mají title, meta description, kanonickou URL a rozumný interní odkaz.
- **Den 9:** Nastav nebo zkontroluj agregovanou analytiku bez reklamních identifikátorů a fingerprintingu.
- **Den 10:** Přidej UTM pravidla pro kampaně: zdroj, médium, kampaň, obsah jen tam, kde to bude tým opravdu vyhodnocovat.

Výstup týdne: jasnější homepage nebo landing page, čistší měření a méně datového šumu. Privacy-first marketing není tma. Je to baterka namířená jen tam, kde potřebuješ vidět.

### Týden 3: Zpevni produkt a provoz

Třetí týden patří věcem, které nejsou sexy na screenshotu, ale rozhodují o důvěře zákazníka. Přihlášení, e-maily, backupy, přístupy, support. Tedy přesně ty části, které bolí, když se rozbijí.

- **Den 11:** Ručně projdi kritickou cestu: registrace, přihlášení, reset hesla, první hodnotná akce, platba nebo poptávka.
- **Den 12:** Zkontroluj transakční e-maily: předmět, jasný další krok, žádné zbytečné tracking pixely.
- **Den 13:** Ověř, že produkční přístupy mají jen lidé, kteří je potřebují, a že API klíče neleží v poznámkách jako konfety.
- **Den 14:** Proveď malý restore test nebo aspoň zdokumentuj přesný postup obnovy databáze a souborů.
- **Den 15:** Napiš incident mini-runbook: kdo rozhoduje, koho kontaktovat, co vypnout, co logovat a jak komunikovat se zákazníky.

Výstup týdne: otestovaná kritická cesta, uklizené přístupy, funkční zálohovací příběh a první verze incident postupu.

### Týden 4: Připrav rytmus, obsah a rozhodování

Čtvrtý týden udělá z jednorázového úklidu provozní návyk. Bez rytmu se privacy-first přístup po měsíci rozpustí v naléhavých úkolech a dobrých výmluvách.

- **Den 16:** Vyber tři obsahová témata podle reálných otázek zákazníků, ne podle toho, co zní chytře v kalendáři.
- **Den 17:** Napiš jeden praktický článek, návod nebo landing page s jasným dalším krokem.
- **Den 18:** Přidej nebo zviditelni RSS, changelog nebo jiný přímý kanál, který nezávisí na algoritmickém feedu.
- **Den 19:** Zaveď rozhodovací log: co jsme rozhodli, proč, jaká data jsme použili a kdy to zkontrolujeme.
- **Den 20:** Naplánuj měsíční provozní review a přidej do něj kontrolu dodavatelů, skriptů, přístupů a metrik.

Výstup týdne: obsahový krok, přímý distribuční kanál, rozhodovací log a opakovatelný review rytmus.

### Posledních 10 dní: Dotáhni jednu viditelnou změnu

Zbývajících deset dní nepoužívej na vymýšlení nových iniciativ. Vyber jednu změnu, která má největší dopad na důvěru nebo konverzi, a dokonči ji.

Dobré kandidáty:

- přepsat hlavní landing page podle frameworku Slib → Důkaz → Akce,
- odstranit nepotřebné marketingové skripty a zjednodušit cookie režim,
- zlepšit onboarding tak, aby první hodnota přišla rychleji,
- doplnit privacy policy podle skutečné mapy dat,
- připravit veřejnou stránku „jak pracujeme s daty“ lidským jazykem,
- sjednotit pricing, FAQ a obchodní komunikaci kolem jedné hodnotové nabídky.

Na konci 30 dní si polož tři otázky:

1. **Co je pro zákazníka jasnější než před měsícem?**
2. **Jaká data jsme přestali sbírat, posílat nebo držet zbytečně?**
3. **Který provozní návyk budeme opakovat každý měsíc?**

**Codyho komentář:** Pokud po 30 dnech nemáš hotovo všechno, je to normální. Pokud nemáš hotovo nic, plán nebyl plán, ale motivační plakát s Markdown syntaxí. Vyber jednu další konkrétní věc a pokračuj.

---

## Příloha B: Šablona privacy-first landing page

Landing page je místo, kde se strategie, marketing, design a privacy potkají v jedné obrazovce. Dobrá stránka nemá návštěvníka ohromit počtem sekcí. Má mu pomoct rychle pochopit, jestli je na správném místě, proč má věřit nabídce a co se stane po odeslání formuláře.

Privacy-first varianta má ještě jeden úkol navíc: nesmí potichu sbírat víc dat, než potřebuje. To neznamená sterilní stránku bez emocí. Znamená to férový obchod: člověk dostane jasnou hodnotu a tým sbírá jen data nutná pro domluvený další krok.

### Struktura stránky

Použij tuhle kostru pro službu, SaaS trial, audit, konzultaci nebo obsahovou nabídku typu e-book či checklist.

```text
1) Hero
- Pro koho je nabídka
- Jaký konkrétní výsledek slibuje
- Hlavní CTA
- Krátké ujištění o datech

2) Problém
- Jaká situace zákazníka bolí
- Jak pozná, že se ho to týká
- Co ho stojí odkládání

3) Řešení
- Co přesně dostane
- Jak proces probíhá
- Co se po něm bude chtít

4) Důkazy
- Reference, ukázka, mini case study, screenshot, číslo z vlastních dat nebo vysvětlení metodiky
- Bez falešných log partnerů a metrik, které nejdou ověřit

5) Privacy a důvěra
- Jaká data formulář sbírá
- Proč je potřebuješ
- Kdo je zpracuje
- Jak dlouho je držíš

6) FAQ
- Cena nebo další krok
- Časová náročnost
- Pro koho to není
- Co se stane po odeslání

7) Finální CTA
- Jedna akce
- Krátké zopakování hodnoty
- Odkaz na privacy policy nebo stručnou datovou poznámku
```

### Příklad textu pro hero sekci

Slabá verze:

> Získejte moderní řešení pro růst vašeho byznysu.

Lepší verze:

> Do 30 minut vám ukážeme, kde váš B2B web ztrácí poptávky — bez reklamních pixelů, nahrávání návštěv a zbytečného sběru osobních dat.

CTA:

> Chci privacy-first audit homepage

Mikrotext pod formulářem:

> Pošleme vám návrh termínu a použijeme vaše údaje jen pro domluvu auditu. Žádný newsletter bez souhlasu, žádný remarketingový pixel, žádná kouzla z oddělení „tohle určitě nikdo nečte“.

Tenhle mikrotext není právní dokument. Je to lidské vysvětlení přímo v místě rozhodnutí. Právní text má být dostupný v detailu, ale stránka nemá nutit návštěvníka číst právničtinu jen proto, aby pochopil, co se stane po kliknutí.

### Formulář: minimum polí, maximum jasnosti

U landing page bývá formulář největší pokušení. Marketing chce segmentaci, sales chce kvalifikaci, produkt chce kontext a někdo v rohu navrhne povinné telefonní číslo „pro jistotu“. Výsledek? Návštěvník uteče a tým má o jedno prázdné CRM pole víc.

Začni minimem:

- **E-mail:** kam odpovědět.
- **Jméno:** jak člověka oslovit, pokud to dává smysl.
- **Web nebo firma:** kontext pro audit, demo nebo nabídku.
- **Krátká zpráva:** dobrovolné pole pro situaci zákazníka.

Co často nepotřebuješ v prvním kroku:

- telefon jako povinné pole,
- velikost firmy v pěti segmentech,
- rozpočet v přesném rozsahu,
- obor, role, počet zaměstnanců a CRM klasifikaci,
- souhlas s newsletterem schovaný pod odesláním poptávky.

Pokud některé pole opravdu potřebuješ, napiš k němu důvod. Například: „Web používáme jen k přípravě auditu.“ Tím získáš lepší data než povinným polem bez kontextu. Lidé nejsou proti sdílení informací. Jsou proti pocitu, že je někdo vytěžuje jako formulářový důl.

### Důvěra bez invazivních skriptů

Důkaz důvěry nemusí být tracker. Nemusíš nasazovat heatmapu, session recording a pět reklamních pixelů, aby ses dozvěděl, jestli stránka funguje. Pro první verzi často stačí kombinace:

- agregovaná návštěvnost stránky,
- počet odeslaných formulářů,
- zdroj kampaně podle rozumných UTM parametrů,
- ruční vyhodnocení kvality poptávek,
- 3–5 krátkých rozhovorů s lidmi, kteří stránku viděli.

Když stránka nekonvertuje, nejdřív zkontroluj základní otázky: je slib jasný, je nabídka konkrétní, odpovídá CTA záměru návštěvníka, je formulář přiměřený a je zřejmé, co se stane potom? Teprve pak řeš jemné ladění designu.

### Checklist před spuštěním landing page

- [ ] Hero říká cílovku, výsledek a další krok bez prázdných frází.
- [ ] Stránka má jednu primární akci a sekundární odkazy ji neruší.
- [ ] Každé pole ve formuláři má jasný účel.
- [ ] Návštěvník ví, co se stane po odeslání formuláře.
- [ ] Mikrotext u formuláře vysvětluje použití dat lidským jazykem.
- [ ] Newsletter, obchodní kontakt a hlavní poptávka nejsou smíchané do jednoho neurčitého souhlasu.
- [ ] Měření funguje agregovaně a bez cross-site identifikátorů.
- [ ] Stránka má title, meta description, kanonickou URL a rozumný interní odkaz.
- [ ] Existuje plán vyhodnocení: kdy stránku zkontrolujeme, podle čeho a kdo rozhodne o úpravách.

**Codyho komentář:** Landing page není past na leady. Je to slib v kompaktní podobě. Když slib potřebuje deset trackerů, pět modalů a formulář delší než daňové přiznání, problém není v konverzním poměru. Problém je v respektu k člověku na druhé straně.

---

## Příloha C: Měřicí plán pro privacy-first kampaň

Měřicí plán je malý dokument, který říká, co budeš sledovat, proč to sleduješ, jak se budou značit odkazy a kdy se podle výsledků opravdu rozhodne. Bez něj se z analytiky rychle stane šuplík plný čísel, která vypadají důležitě, ale nikdo podle nich nic nemění.

Privacy-first varianta má jednoduché pravidlo: měř rozhodnutí, ne zvědavost. Nepotřebuješ znát každé zaváhání myši, každé opakované načtení a každou minulou životní volbu návštěvníka. Potřebuješ vědět, jestli správní lidé přicházejí na správnou stránku, chápou nabídku a dělají další krok.

### 1) Začni rozhodnutím, které chceš udělat

Nejdřív napiš otázku, na kterou má kampaň odpovědět. Třeba:

- Má audit homepage dostatečně jasnou nabídku pro B2B firmy?
- Přivádí článek relevantní návštěvníky na konzultaci?
- Funguje lépe přímý e-mail, partnerský odkaz nebo organické vyhledávání?
- Má smysl pokračovat v tématu jako sérii, webinář nebo placenou nabídku?

Teprve potom vyber metriky. Když začneš dashboardem, skončíš debatou o grafech. Když začneš rozhodnutím, skončíš akcí.

Praktické minimum pro jednu kampaň:

| Otázka | Metrika | Zdroj | Rozhodnutí |
|---|---|---|---|
| Přicházejí správní lidé? | návštěvy podle zdroje a kampaně | agregovaná analytika | ponechat, upravit nebo vypnout kanál |
| Chápe stránka nabídku? | poměr návštěv a odeslání formuláře | analytika + formulář | upravit slib, CTA nebo formulář |
| Jsou poptávky kvalitní? | ruční hodnocení 1–5 | CRM nebo tabulka | změnit targeting nebo kvalifikaci |
| Vrací se téma v dotazech? | opakované otázky | sales/support poznámky | napsat FAQ, článek nebo šablonu |

### 2) UTM disciplína: méně kreativity, víc konzistence

UTM parametry jsou užitečné, protože umožní rozlišit zdroj, médium a kampaň bez toho, aby ses musel opírat o invazivní sledování napříč weby. Google ve své dokumentaci ke campaign URL builderu doporučuje při značkování používat zejména `utm_source`, `utm_medium` a `utm_campaign`; upozorňuje také, že hodnoty jsou citlivé na velikost písmen, takže `Newsletter` a `newsletter` se v reportingu mohou rozpadnout do dvou hodnot ([Google Analytics Help: URL builders](https://support.google.com/analytics/answer/10917952?hl=en-uk)). Umami ve svých metrikách mapuje běžné UTM parametry jako `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` a `utm_term`, takže se stejná disciplína hodí i pro jednodušší privacy-friendly analytiku ([Umami: Metric definitions](https://docs.umami.is/docs/metric-definitions)).

Zaveď jeden slovník a drž ho. Ne proto, že tabulky milují pořádek, ale protože špatné značení rozbije vyhodnocení rychleji než malá návštěvnost.

Příklad jednoduchého slovníku:

```text
utm_source:
- newsletter
- linkedin
- partner-dreamind
- rss
- direct-email

utm_medium:
- email
- organic-social
- referral
- rss
- cpc

utm_campaign:
- 2026-privacy-audit
- 2026-saas-launch-checklist
- 2026-webinar-eu-hosting

utm_content:
- hero-cta
- text-link
- footer-link
- version-a
- version-b
```

Dobrá URL:

```text
https://example.cz/privacy-audit?utm_source=newsletter&utm_medium=email&utm_campaign=2026-privacy-audit&utm_content=hero-cta
```

Horší URL:

```text
https://example.cz/privacy-audit?utm_source=Newsletter&utm_medium=mail&utm_campaign=Audit&utm_content=super-tlacitko-vpravo-final-final
```

Ta druhá možná funguje technicky, ale za měsíc nikdo neví, jestli `mail`, `email`, `newsletter` a `Newsletter` znamenají totéž. Gratuluji, právě sis vyrobil datový guláš s vlastní URL adresou.

### 3) Nikdy nedávej osobní údaje do URL

Do UTM parametrů nepatří e-mail, jméno, firma, telefon, ID zákazníka ani nic, co by člověka přímo nebo snadno nepřímo identifikovalo. URL se ukládají v historii prohlížeče, serverových lozích, analytice, refererech a někdy i ve sdílených náhledech. Co jednou strčíš do odkazu, cestuje dál s batohem a bez dozoru.

Bezpečnější varianta:

- `utm_campaign=2026-privacy-audit`
- `utm_source=partner-dreamind`
- `utm_content=case-study-link`

Špatná varianta:

- `utm_email=jana@example.cz`
- `utm_company=konkretni-firma-s-r-o`
- `utm_customer_id=12345`

Pokud potřebuješ propojit poptávku s kampaní, ulož si k formuláři jen běžné kampaňové hodnoty a jasně je popiš v mapě dat. U individuální atribuce buď velmi opatrný: zeptej se, jestli ji opravdu potřebuješ, jak dlouho ji budeš držet a kdo ji uvidí.

### 4) Vzor měřicího plánu na jednu stránku

Použij tuhle šablonu před každou kampaní, landing page nebo větším obsahem:

```text
Název kampaně:
Primární rozhodnutí:
Hlavní stránka:
Primární CTA:

Cílová skupina:
Slib kampaně:
Co po návštěvníkovi chceme:

UTM pravidla:
- source:
- medium:
- campaign:
- content:

Metriky:
- návštěvy stránky:
- odeslání formuláře / kliknutí:
- kvalita poptávky:
- nejčastější otázky:

Privacy poznámka:
- jaká data sbíráme:
- proč:
- kde jsou uložená:
- kdy mažeme nebo agregujeme:

Vyhodnocení:
- datum kontroly:
- kdo rozhoduje:
- možné akce: ponechat / upravit / vypnout / rozšířit
```

### 5) Vyhodnocuj rytmem, ne nervozitou

Malá kampaň nepotřebuje kontrolu každých deset minut. Potřebuje předem domluvený rytmus. U landing page nech data chvíli dýchat, pak spoj čísla s kvalitou poptávek a teprve potom upravuj.

Praktický rytmus:

1. **Den spuštění:** zkontroluj, že se stránka načítá, formulář funguje, UTM se ukládají a e-mail po odeslání dorazí.
2. **Po 3–7 dnech:** ověř zdroje návštěvnosti, první konverze a zjevné chyby ve slibu nebo formuláři.
3. **Po 14 dnech:** porovnej kanály, kvalitu poptávek a nejčastější otázky.
4. **Po 30 dnech:** rozhodni, jestli kampaň vypnout, zlepšit nebo proměnit v dlouhodobý kanál.

Nesnaž se optimalizovat všechno najednou. Když změníš nadpis, CTA, cílovku, formulář i kanál, nebudeš vědět, co pomohlo. A pokud nic nepomůže, budeš mít aspoň pět podezřelých. To je detektivka, ne marketing.

### Checklist pro privacy-first měření kampaně

- [ ] Kampaň má jednu hlavní otázku a jedno hlavní rozhodnutí.
- [ ] Používáme konzistentní UTM slovník s malými písmeny.
- [ ] Do URL nedáváme osobní údaje ani interní zákaznická ID.
- [ ] Měříme agregované návštěvy, zdroje a konverze bez cross-site profilování.
- [ ] Kvalitu poptávek hodnotíme ručně nebo v CRM bez zbytečného obohacování dat.
- [ ] Formulář ukládá jen pole, která mají jasný účel.
- [ ] Vyhodnocení má datum, vlastníka a předem domluvené možné akce.
- [ ] Po kampani mažeme nebo agregujeme data, která už nepotřebujeme.

**Codyho komentář:** Dobré měření není šmírovací aparát. Je to kompas. Kompas taky nepotřebuje znát rodné číslo turisty, aby ukázal sever.

---

## Příloha D: Onboarding audit pro první týden v SaaS

Onboarding je první opravdový test produktu. Marketing může slíbit hodnotu, sales ji může vysvětlit a landing page ji může hezky zabalit. Ale první týden ukáže, jestli uživatel skutečně pochopí, co má udělat, proč se mu to vyplatí a jestli se chce vrátit.

Privacy-first onboarding má navíc jednu výhodu: nutí tě vysvětlit hodnotu dřív, než začneš sbírat data. Pokud nevíš, proč se ptáš na firmu, telefon, velikost týmu, fakturační údaje nebo integrace, pravděpodobně se ptáš moc brzy.

### 1) Definuj první hodnotnou akci

První hodnotná akce není „uživatel dokončil registraci“. Registrace je vstupenka, ne výsledek. První hodnotná akce je moment, kdy uživatel poprvé pocítí, že produkt řeší jeho problém.

Příklady:

- účetní SaaS: uživatel vystaví první testovací fakturu,
- rezervační nástroj: uživatel vytvoří první službu a získá veřejný rezervační odkaz,
- analytický produkt: uživatel vloží měřicí kód a uvidí první návštěvu,
- interní AI nástroj: uživatel nahraje dokument a dostane použitelnou odpověď,
- CRM: uživatel importuje první kontakt a naplánuje další krok.

Jakmile tuhle akci pojmenuješ, onboarding se přestane tvářit jako prohlídka všech funkcí. Stane se z něj nejkratší férová cesta k výsledku.

**Codyho komentář:** Pokud onboarding ukazuje deset funkcí před první hodnotou, není to onboarding. Je to komentovaná prohlídka skladu. Sklad může být krásný, ale zákazník přišel pro hotový stůl.

### 2) Odstraň pole, která nejsou potřeba teď

Každé pole v registraci nebo prvním nastavení má svoji cenu. Nejen psychologickou, ale i provozní: musíš ho vysvětlit, zabezpečit, mazat, exportovat a udržovat v mapě dat.

Praktické pravidlo:

- **Nutné pro účet:** e-mail, heslo nebo bezpečný login, souhlas s podmínkami, případně název organizace.
- **Nutné pro hodnotu:** jen data, bez kterých nejde dokončit první hodnotnou akci.
- **Nutné později:** fakturační údaje, integrace, role, tým, detailní profil, marketingové preference.
- **Podezřelé:** telefon, velikost firmy, rozpočet, pozice, zdroj návštěvy jako povinné pole, pokud nejsou nutné pro slíbený výsledek.

Příklad: Pokud produkt pomáhá vytvořit veřejný rezervační odkaz, nepotřebuje hned fakturační adresu. Tu potřebuje až ve chvíli, kdy uživatel vybírá placený tarif. Pokud produkt potřebuje název firmy pro vytvoření pracovního prostoru, vysvětli to přímo u pole: „Použijeme jen pro název pracovního prostoru, později ho můžeš změnit.“

### 3) Udělej onboarding jako sekvenci rozhodnutí

Dobrý onboarding není dlouhý formulář. Je to sled malých kroků, kde každý krok má jasný důvod.

Šablona sekvence:

1. **Vítej a potvrď slib:** „Za 5 minut vytvoříš první rezervační stránku.“
2. **Vyber minimální kontext:** typ podnikání, jazyk, měna nebo šablona — jen pokud to urychlí výsledek.
3. **Doplň první obsah:** název služby, cena, délka, popis, první dokument nebo první kontakt.
4. **Ukaž náhled výsledku:** veřejný odkaz, náhled faktury, odpověď AI, dashboard.
5. **Nabídni další krok:** pozvat kolegu, propojit doménu, nastavit platby, přidat integraci.

Každý krok by měl mít jednu hlavní akci a jednu únikovou cestu. Úniková cesta může být „přeskočit“, „vyplnit později“ nebo „ukázat demo data“. Pokud uživatel nemá data po ruce, nemá kvůli tomu skončit.

### 4) Měř onboarding bez šmírování

Onboarding se dá měřit i bez nahrávání obrazovky, heatmap třetích stran a osobních profilů plných detailů. Pro začátek stačí agregované události a jasná definice funnelu.

Minimální události:

- `signup_started`
- `signup_completed`
- `workspace_created`
- `first_value_action_completed`
- `invite_sent`
- `trial_payment_step_started`
- `support_requested`

U každé události si napiš:

- proč ji měříš,
- jaké rozhodnutí podle ní uděláš,
- zda je navázaná na účet nebo stačí agregace,
- jak dlouho ji držíš,
- kdo k ní má přístup.

Příklad rozhodnutí: „Pokud méně než polovina nových účtů dokončí první hodnotnou akci do 24 hodin, zjednodušíme krok s importem dat nebo přidáme demo data.“ To je lepší než obecné „budeme sledovat engagement“, což zní sofistikovaně, ale často znamená „budeme sbírat všechno a doufat, že tabulka promluví“.

### 5) Připrav první e-maily bez nátlaku

E-mail v onboardingu má pomáhat, ne tlačit uživatele do paniky. Pokud uživatel nedokončil nastavení, neposílej mu „poslední šance!!!“ po dvou hodinách. Pošli mu konkrétní pomoc.

Jednoduchá sekvence:

1. **Ihned po registraci:** potvrzení účtu, odkaz zpět do produktu, jeden hlavní další krok.
2. **Po 24 hodinách bez první hodnotné akce:** krátká pomoc s nejčastější překážkou a možnost odpovědět na e-mail.
3. **Po dokončení první hodnotné akce:** gratulace, vysvětlení dalšího kroku a odkaz na krátký návod.
4. **Před koncem trialu:** férové shrnutí hodnoty, co zůstane po přechodu na placený tarif a jak exportovat data, pokud uživatel nechce pokračovat.

Privacy-first detail: do e-mailů nedávej citlivé údaje, interní ID, tokeny ani zbytečné tracking pixely. Pokud měříš proklik, vysvětli si proč. U transakčních zpráv často stačí vědět, že byly doručené, ne sledovat každé otevření jako detektiv v kabátu.

### 6) Onboarding audit na 45 minut

Vezmi nový testovací účet a projdi produkt jako člověk, který o něm ví jen to, co je na landing page. Ne jako zakladatel. Zakladatel zná všechny skryté chodby. Nový uživatel vidí jen dveře a nápisy.

Postup:

1. Otevři landing page a napiš jednou větou, jaký výsledek čekáš.
2. Spusť registraci a stopuj čas do první hodnotné akce.
3. Zapiš každé pole, které neumíš obhájit jednou větou.
4. Zapiš každý moment, kdy nevíš, co bude dál.
5. Zkontroluj první tři e-maily: jsou užitečné, krátké a bez nátlaku?
6. Zkontroluj, jestli lze účet ukončit nebo data exportovat bez hledání pokladu.
7. Vyber jednu překážku a oprav ji tento týden.

Výstup auditu by neměl být pětistránkový dokument. Stačí tabulka:

| Krok | Problém | Dopad | Oprava | Vlastník | Termín |
|---|---|---:|---|---|---|
| Registrace | Povinný telefon bez vysvětlení | vysoký | přesunout do volitelného kroku po aktivaci | produkt | pátek |
| Import dat | Chybí demo data | střední | přidat ukázkový dataset | vývoj | příští sprint |
| E-mail 2 | Příliš prodejní tón | nízký | přepsat na pomocný návod | marketing | středa |

### Checklist pro onboarding prvního týdne

- [ ] Máme jasně pojmenovanou první hodnotnou akci.
- [ ] Registrace obsahuje jen pole nutná pro účet a první hodnotu.
- [ ] Každý krok onboardingu má jeden hlavní úkol a jasný důvod.
- [ ] Uživatel může přeskočit data, která nemá po ruce.
- [ ] Měříme agregované události, které vedou ke konkrétním rozhodnutím.
- [ ] E-maily pomáhají dokončit hodnotu, ne jen tlačí na upgrade.
- [ ] Trial končí férově: uživatel ví, co se stane s účtem a daty.
- [ ] Existuje jednoduchá cesta k exportu nebo ukončení účtu.
- [ ] Každý měsíc opravíme aspoň jednu překážku z onboarding auditu.

**Codyho komentář:** Onboarding je produkt v miniatuře. Když je zmatený, invazivní a netrpělivý, produkt bude působit stejně. Když je klidný, jasný a férový, uživatel má pocit, že někdo konečně přemýšlel i za něj. Luxusní pocit. Doporučuju prodávat.

---

## Příloha E: Exit plán od dodavatele bez dramatu

Privacy-first provoz není jen o tom, kde data běží dnes. Je také o tom, jestli dokážeš zítra odejít bez toho, aby ti produkt klekl na kolena a tým strávil tři týdny kopírováním CSV souborů do tabulky s názvem `final-final-opravdu-posledni.xlsx`.

Exit plán je jednoduchý dokument pro každou službu, která je důležitá pro web, SaaS nebo marketing. Nepíše se proto, že dodavatel je špatný. Píše se proto, že dobrý provoz počítá se změnou: cen, podmínek, regionu, kvality podpory, vlastnictví firmy nebo tvých potřeb.

### 1) Rozděl dodavatele podle kritičnosti

Ne každý nástroj potřebuje stejnou úroveň přípravy. Ikonky na webu a interní nástroj pro kreslení diagramů nejsou stejný problém jako databáze, e-mailová služba nebo fakturační systém.

Praktické rozdělení:

- **Kritický provoz:** hosting, databáze, úložiště souborů, DNS, transakční e-mail, platby.
- **Důležitý produkt:** helpdesk, produktová analytika, monitoring, error tracking, feature flags.
- **Marketing a obsah:** CMS, newsletter, SEO nástroje, formuláře, plánovač příspěvků.
- **Interní produktivita:** dokumentace, úkoly, chat, automatizace, AI nástroje.

U kritického provozu chceš znát náhradní řešení předem. U marketingových nástrojů často stačí mít exporty, přístupová práva a jasný postup. U interních nástrojů je důležité hlavně to, aby know-how nezůstalo zamčené v jednom účtu bývalého kolegy. Ano, i tohle je architektura. Jen má méně Kubernetes a víc zdravého rozumu.

### 2) U každého dodavatele si napiš pět odpovědí

Exit plán nemusí být román. Pro většinu malých týmů stačí tabulka s pěti sloupci:

1. **Co u dodavatele běží:** data, proces, integrace nebo zákaznický kontakt.
2. **Jak data exportujeme:** formát, kdo to umí, kde je postup, jak často testujeme.
3. **Kam bychom šli:** konkrétní alternativa nebo dočasný fallback.
4. **Co se rozbije při odchodu:** web, login, e-maily, billing, reporting, onboarding.
5. **Kolik času potřebujeme:** realistický odhad pro klidnou migraci i krizový režim.

Příklad:

| Dodavatel | Co drží | Export | Alternativa | Riziko | Čas odchodu |
| --- | --- | --- | --- | --- | --- |
| Newsletter nástroj | kontakty, segmenty, šablony | CSV kontaktů, HTML šablony | EU newsletter nebo vlastní RSS-first řešení | ztráta segmentů a historie kampaní | 1–3 dny |
| Monitoring | incidenty, uptime, alerty | konfigurace alertů, seznam endpointů | jiný EU monitoring + interní runbook | slepota při výpadku | 0,5–1 den |
| Databáze | zákaznická produktová data | dump, restore test, šifrovaná záloha | jiný EU region/provider | výpadek aplikace, integrita dat | 1–2 týdny |

Tabulka není dokonalá pravda. Je to mapa stresu. Když víš, kde by odchod bolel, můžeš bolest zmenšit dřív, než se z ní stane páteční večerní sport.

### 3) Testuj export, ne jen tlačítko „Exportovat“

Tlačítko exportu je slib. Použitelný import je realita. Mezi nimi bývá propast, do které padají české znaky, časové zóny, přílohy, segmenty, ID zákazníků a nervy.

Jednou za čtvrtletí si u kritických služeb ověř:

- export jde spustit bez podpory dodavatele,
- soubor obsahuje data, která opravdu potřebuješ,
- formát je čitelný mimo původní nástroj,
- export neobsahuje zbytečné osobní údaje navíc,
- existuje bezpečné místo, kam export uložit při migraci,
- někdo v týmu umí z exportu obnovit nebo znovu sestavit provoz.

U databáze platí staré dobré pravidlo: záloha, kterou jsi nikdy neobnovil, je spíš uklidňující pohádka než záloha. U marketingových dat platí podobná verze: export kontaktů, který nejde spárovat se souhlasy a zdrojem, je spíš kreativní skládanka než použitelný asset.

### 4) Sniž vendor lock-in už při návrhu

Nejlepší exit plán je ten, který nepotřebuje hrdinský výkon. Když novou integraci navrhuješ, přidej pár jednoduchých pravidel:

- Interně používej vlastní stabilní ID, ne ID dodavatele jako hlavní pravdu.
- Důležité události posílej přes vlastní vrstvu nebo frontu, ne přímo z deseti míst v aplikaci.
- Obsah drž v přenositelném formátu, pokud to dává smysl: Markdown, HTML, CSV, JSON.
- Smluvní a provozní informace ukládej mimo nástroj, kterého se týkají.
- Automatizace dokumentuj tak, aby je šlo znovu vytvořit i bez původního UI.
- U kritických služeb měj jasně oddělený účet vlastníka a osobní účty členů týmu.

Privacy-first detail: čím méně dat dodavateli posíláš, tím snazší je odejít. Minimalizace dat není jen právní nebo etická disciplína. Je to taky praktická migrační strategie. Menší datová stopa znamená méně exportů, méně mapování polí, méně rizik při přesunu a méně nepříjemných překvapení.

### 5) Udělej si krizový scénář na jednu stránku

Pro kritické dodavatele si napiš krátký scénář „co kdyby zítra přestal fungovat“. Ne kvůli katastrofickému myšlení, ale kvůli rychlosti rozhodování.

Šablona:

- **Signál problému:** jak poznáme, že dodavatel selhává?
- **První rozhodnutí:** kdy čekáme, kdy přepínáme, kdy komunikujeme zákazníkům?
- **Technický krok:** kdo mění DNS, deploy, konfiguraci, API klíče nebo frontu?
- **Datový krok:** odkud bereme poslední bezpečnou kopii dat?
- **Komunikační krok:** co řekneme zákazníkům, supportu a obchodníkům?
- **Návrat k normálu:** kdy uděláme post-mortem a co zlepšíme?

**Codyho komentář:** Exit plán je jako deštník. Když ho máš, většinou neprší. Když ho nemáš, prší přesně ve chvíli, kdy máš notebook na baterce, zákazník čeká demo a někdo v supportu se ptá, jestli „to nejde prostě restartovat“.

### Checklist pro exit plán dodavatelů

- [ ] Máme seznam kritických dodavatelů pro provoz, produkt, marketing a interní práci.
- [ ] U každého kritického dodavatele víme, jaká data drží a proč.
- [ ] Existuje popsaný exportní postup a vlastník, který ho umí spustit.
- [ ] Export nebo záloha byly aspoň jednou otestované v praxi.
- [ ] Máme předem vybranou alternativu nebo dočasný fallback.
- [ ] Integrace používají vlastní stabilní ID tam, kde to snižuje lock-in.
- [ ] Přístup vlastníka není navázaný jen na osobní účet jednoho člověka.
- [ ] Krizový scénář obsahuje technický, datový i komunikační krok.

---

## Příloha F: AI asistent v malém týmu bez úniku dat

AI asistent v malém týmu je lákavý jako kávovar, který umí psát SQL, návrhy e-mailů a ještě se tváří, že ho baví meeting notes. Problém není v tom, že by AI byla špatně. Problém je, když do ní tým začne házet zákaznické exporty, obchodní smlouvy, interní incidenty a osobní údaje jen proto, že prompt box vypadá nevinně.

Privacy-first přístup k AI znamená jednoduchou věc: nejdřív rozhodni, co asistent smí vědět, a teprve potom řeš, co všechno by mohl umět. Evropská komise u AI Actu zdůrazňuje risk-based přístup, transparentnost a odpovědné používání AI systémů. EDPB zároveň drží dlouhodobou linku privacy by design a by default. Přeloženo do provozu malého SaaS: AI workflow má mít hranice, auditovatelnost a lidské rozhodnutí tam, kde výstup ovlivňuje zákazníka, peníze nebo práva lidí.

### 1) Rozděl AI použití podle citlivosti

Ne každá AI úloha má stejné riziko. Překlad veřejného článku je něco jiného než analýza zákaznických tiketů s osobními údaji.

Praktické rozdělení:

- **Nízké riziko:** brainstorming veřejného obsahu, přepis vlastních poznámek bez osobních údajů, návrhy struktury článků, kontrola tónu textu.
- **Střední riziko:** interní dokumentace, produktové specifikace, anonymizované zákaznické vzory, návrhy odpovědí supportu bez přímého odeslání.
- **Vysoké riziko:** osobní údaje, zdravotní nebo finanční data, pracovní hodnocení, bezpečnostní incidenty, neveřejné smlouvy, přístupové údaje, produkční databáze.

U nízkého rizika často stačí rozumná pravidla. U středního rizika už chceš schválené nástroje, jasné logování a anonymizaci. U vysokého rizika se ptej tvrdě: opravdu potřebujeme poslat tato data externímu modelu, nebo jde úlohu vyřešit lokálně, syntetickými daty, agregací, ruční revizí nebo menším nástrojem?

### 2) Napiš AI pravidla na jednu stránku

Dokument nemusí být právní beton. Má být srozumitelný člověku, který ve středu v 16:47 potřebuje vědět, jestli může vložit zákaznický ticket do asistenta.

Šablona:

| Oblast | Pravidlo | Příklad |
| --- | --- | --- |
| Veřejný obsah | Povoleno bez osobních údajů | Osnova článku, SEO titulky, kontrola čitelnosti |
| Zákaznická komunikace | Jen anonymizovaně a s lidskou kontrolou | „Uživatel A se ptá na fakturaci“, ne celé jméno a e-mail |
| Kód | Povoleno bez tajemství | Funkce, test, refaktor; nikdy `.env`, tokeny ani produkční dump |
| Interní strategie | Jen schválené nástroje | Roadmapa, pricing, obchodní poznámky |
| Citlivá data | Zakázáno bez výslovného posouzení | Osobní údaje, smlouvy, incidenty, přístupy |

Důležité je, aby pravidla řešila i výstup. AI může navrhnout odpověď zákazníkovi, ale nemá ji automaticky odeslat bez kontroly. AI může shrnout incident, ale nemá rozhodnout, komu se má právně hlásit. AI může pomoct s pricingem, ale nemá sama měnit ceník. Ano, roboti zase nedostali klíče od produkce. Smutný den pro Skynet, dobrý den pro zákazníky.

### 3) Minimalizuj vstup: prompt jako datový export

Každý prompt ber jako malý datový export. Neřeš jen, co chceš dostat zpět. Řeš, co odchází ven.

Před vložením dat do AI se zeptej:

- Obsahuje prompt jméno, e-mail, telefon, IP adresu, adresu nebo zákaznické ID?
- Obsahuje prompt smlouvu, fakturu, interní strategii nebo neveřejné obchodní podmínky?
- Obsahuje prompt token, API klíč, cookie, privátní URL nebo konfiguraci produkce?
- Stačí místo reálných dat syntetický příklad?
- Stačí agregace: „12 zákazníků zmínilo problém s exportem“, ne celé tickety?
- Je výstup určený pro člověka ke kontrole, nebo se má použít automaticky?

Praktický vzor anonymizace:

```text
Špatně: Jan Novák z novak@example.cz má problém s fakturou 2026-1045 a píše: „...“
Lépe: Zákazník z malého B2B účtu má problém s duplicitní fakturou. Kontext: platba proběhla, systém ukazuje nezaplaceno. Navrhni empatickou odpověď a interní checklist ověření.
```

### 4) Zaveď lidskou kontrolu podle dopadu

Čím větší dopad na zákazníka, tím víc lidské kontroly. Ne kvůli nedůvěře k AI, ale kvůli odpovědnosti. Malý tým si nemůže dovolit reputační požár jen proto, že model sebevědomě vymyslel slevu, právní závazek nebo technickou nepravdu.

Jednoduché pravidlo:

- **Interní návrh:** AI může generovat, člověk čte podle potřeby.
- **Zákaznická odpověď:** AI může navrhnout, člověk schvaluje.
- **Automatizovaná akce:** AI pouze v omezeném sandboxu a s logem rozhodnutí.
- **Bezpečnost, právo, finance:** AI pomáhá připravit podklady, finální rozhodnutí dělá odpovědný člověk.

Do logu si ukládej aspoň: účel, typ dat, použitý nástroj, kdo výstup schválil a jestli se výstup použil navenek. Ne kvůli byrokracii. Kvůli tomu, že až se někdo zeptá „proč jsme to udělali?“, nechceš odpovídat „protože chatbot působil přesvědčivě“. To je argumentační úroveň mokrého ubrousku.

### 5) Vyber nástroj podle provozu, ne podle hype

Při výběru AI nástroje pro evropský privacy-first provoz neptej se jen „jak dobrý je model“. Ptej se:

- Kde se zpracovávají data a jaký právní rámec dodavatel nabízí?
- Používá dodavatel vstupy pro trénink, ladění nebo evaluaci?
- Dá se vypnout ukládání historie nebo nastavit retence?
- Má tým admin kontrolu, audit logy a možnost odebrat přístup?
- Existuje export nebo smazání dat?
- Umí nástroj pracovat s oddělenými pracovními prostory pro klienty nebo projekty?
- Má dodavatel jasné podmínky pro subdodavatele?

Privacy-first volba nemusí vždy znamenat nejméně pohodlný nástroj. Znamená ale, že pohodlí není omluva pro datový chaos. Nejlepší AI stack pro malý tým je takový, který lidé opravdu používají, ale který zároveň nedělá z každého promptu malý výlet osobních údajů po internetu.

### Checklist pro AI asistenta v malém týmu

- [ ] Máme jednu stránku pravidel: co se do AI smí a nesmí vkládat.
- [ ] Tým rozlišuje nízké, střední a vysoké riziko použití.
- [ ] Do promptů nedáváme tajemství, přístupy, produkční dumpy ani zbytečné osobní údaje.
- [ ] Pro zákaznické tickety používáme anonymizaci nebo agregaci.
- [ ] Výstupy směrem k zákazníkům kontroluje člověk.
- [ ] Kritické oblasti jako právo, finance, bezpečnost a HR mají přísnější schvalování.
- [ ] U schválených AI nástrojů známe region, retenci, tréninkové použití dat a subdodavatele.
- [ ] Máme postup, jak odebrat přístup členovi týmu a exportovat nebo smazat data.
- [ ] Každé čtvrtletí projdeme, jestli pravidla odpovídají reálnému používání.

**Codyho komentář:** AI v malém týmu je nejlepší jako chytrý praktikant s turbo módem: umí hodně pomoct, ale nemá sedět sám u smluv, databáze a tlačítka „odeslat všem“. Dej mu jasné mantinely a bude z něj násobič výkonu. Nedávej mu mantinely a bude z něj generátor velmi rychlých problémů.

---

## Zdroje

- ENISA: [Cybersecurity guide for SMEs](https://www.enisa.europa.eu/publications/cybersecurity-guide-for-smes)
- ENISA: [Cybersecurity for SMEs — Challenges and Recommendations](https://www.enisa.europa.eu/publications/enisa-report-cybersecurity-for-smes)
- ENISA: [Cloud Security Guide for SMEs](https://www.enisa.europa.eu/publications/cloud-security-guide-for-smes)
- ENISA: [Technical implementation guidance on cybersecurity risk management measures](https://www.enisa.europa.eu/publications/technical-implementation-guidance-on-cybersecurity-risk-management-measures)
- European Data Protection Board: [Be compliant — Data protection guide for small business](https://www.edpb.europa.eu/sme/be-compliant/be-compliant_en)
- European Data Protection Board: [Data protection impact assessment](https://www.edpb.europa.eu/topics/accountability-and-compliance-tools/data-protection-impact-assessment_en)
- European Data Protection Board: [Template for Data Protection Impact Assessment](https://www.edpb.europa.eu/our-work-tools/documents/public-consultations/2026/edpb-dpia-template_en)
- European Data Protection Board: [Privacy by design and by default](https://www.edpb.europa.eu/topics/ai-and-technology/privacy-by-design-and-by-default_en)
- European Data Protection Board: [Basic principles](https://www.edpb.europa.eu/topics/key-gdpr-concepts/basic-principles_en)
- European Data Protection Board: [Guidelines 05/2020 on consent under Regulation 2016/679](https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_de)
- European Data Protection Board: [Guidelines 07/2020 on the concepts of controller and processor in the GDPR](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-072020-concepts-controller-and-processor-gdpr_en)
- European Commission: [Data Act](https://digital-strategy.ec.europa.eu/en/policies/data-act)
- European Commission: [AI Act](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)
- European Commission: [NIS2 Directive](https://digital-strategy.ec.europa.eu/en/policies/nis2-directive)
- European Commission: [Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en)
- Google Analytics Help: [URL builders — Collect campaign data with custom URLs](https://support.google.com/analytics/answer/10917952?hl=en-uk)
- Google Search Central: [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- Google Search Central: [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- Google Search Central: [Using generative AI content on your website](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)
- OWASP: [Application Security Verification Standard](https://owasp.org/projects/asvs)
- OWASP: [Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)
- RSS Advisory Board: [RSS 2.0 Specification](https://www.rssboard.org/rss-specification)
- Umami: [Metric definitions](https://docs.umami.is/docs/metric-definitions)
- Umami: [Platform](https://umami.is/platform)
- Umami: [FAQ](https://docs.umami.is/docs/faq)
- Úřad pro ochranu osobních údajů: [Cookies — otázky a odpovědi](https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies)
- Úřad pro ochranu osobních údajů: [Cookies od začátku roku 2022 pouze se souhlasem](https://uoou.gov.cz/novinky/vse/cookies-od-zacatku-roku-2022-pouze-se-souhlasem)
- Úřad pro ochranu osobních údajů: [Informace pro e-shopy](https://uoou.gov.cz/profesional/qa-otazky-a-odpovedi/informace-pro-e-shopy)

---

## Pracovní log

- **2026-10-11:** Přidána příloha F o bezpečném používání AI asistenta v malém týmu: klasifikace rizik, pravidla pro prompty, anonymizace, lidská kontrola a výběr nástroje podle privacy-first provozu.
- **2026-10-11:** Přidána příloha E s exit plánem od dodavatelů: kritičnost služeb, exporty, fallbacky, omezení vendor lock-inu, krizový scénář a checklist.
- **2026-10-11:** Přidána příloha D s onboarding auditem pro první týden v SaaS: první hodnotná akce, minimalizace polí, privacy-first měření, e-mailová sekvence a praktický checklist.
- **2026-10-11:** Přidána příloha C s měřicím plánem pro privacy-first kampaně, UTM slovníkem, šablonou vyhodnocení a checklistem bez osobních údajů v URL.
- **2026-10-11:** Přidána příloha B se šablonou privacy-first landing page, vzorem hero sekce, formulářovými pravidly a checklistem před spuštěním.
- **2026-10-11:** Přidána příloha A s 30denním akčním plánem pro zavedení privacy-first webu nebo SaaS v malém týmu.
- **2026-10-11:** Doplněna kapitola 8 s praktickými checklisty a šablonami pro audit webu, SaaS launch, privacy review, marketingový plán, měsíční provozní review a operační manuál.
- **2026-10-11:** Doplněna kapitola 7 o evropském privacy-first provozu: výběr dodavatelů, provozní bezpečnost, NIS2, Data Act, incident playbook, exit plán a checklist pro malé SaaS týmy.
- **2026-10-11:** Doplněna kapitola 6 o produktivitě zakladatele a malého SaaS týmu: omezení rozpracované práce, týdenní rytmus, rozhodovací log, bezpečné používání AI asistentů, automatizace a privacy-first checklist.
- **2026-10-11:** Doplněna kapitola 5 o marketingu bez invazivního trackingu: SEO disciplína, obsah podle rozhodovacích momentů, RSS, přímé kanály, UTM měření, privacy-friendly analytika a AI kontrola obsahu.
- **2026-10-11:** Doplněna kapitola 4 o SaaS produktu od nápadu po první platící zákazníky: validace bez komplimentů, MVP, pricing, onboarding, retence a privacy-first checklist.
- **2026-10-11:** Doplněna kapitola 3 o technickém stacku pro malé týmy: rozdělení vrstev, EU hosting, zálohy, monitoring, logy, deploy pipeline a praktický checklist se zdroji ENISA a OWASP.
- **2026-10-11:** Doplněna kapitola 2 o privacy-first základech: mapa dat, cookies, souhlas, SaaS architektura, živá dokumentace a praktický checklist s ověřenými zdroji ÚOOÚ, EDPB a Evropské komise.
- **2026-10-11:** Založena struktura e-booku, přidána osnova a dokončena kapitola 1.1–1.5 o strategii webu, metrikách a privacy-first přístupu včetně checklistu a ověřených zdrojů.
