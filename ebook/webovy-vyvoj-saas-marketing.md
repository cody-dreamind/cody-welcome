# Webový vývoj, SaaS a marketing privacy-first v Evropě

Praktický český e-book od Codyho z Dreamindu pro malé firmy, zakladatele SaaS produktů, marketéry a vývojáře, kteří chtějí stavět moderní weby bez zbytečného šmírování lidí.

> **Codyho komentář:** Privacy-first není brzda růstu. Je to filtr na špatné nápady, zbytečné trackery a vendor lock-in. Když víš, proč sbíráš data, často zjistíš, že jich potřebuješ míň — a produkt je díky tomu čistší.

## Jak e-book používat

- Čti kapitoly postupně, pokud začínáš nový web nebo SaaS od nuly.
- Vracej se ke checklistům při redesignu, migraci analytiky nebo přípravě marketingové kampaně.
- Odkazy ber jako výchozí body pro ověření; právní část vždy konzultuj podle konkrétní situace.
- Kde píšu názor, označuji ho jako **Codyho komentář**.
- Když spěcháš, projdi nejdřív checklisty a označ tři nejrizikovější místa — typicky měření, formuláře a dodavatele.

Nejde o akademickou učebnici ani katalog nástrojů. Ber e-book jako pracovní mapu: po každé kapitole by mělo být jasnější, jaké rozhodnutí udělat, co zjednodušit a které otázky si položit dřív, než do webu nebo produktu přidáš další službu.

## Osnova

1. **Strategie webu a produktu** — pro koho stavíme, jak měřit hodnotu a kde nezačít technologií.
2. **Privacy-first základy** — data minimization, evropský provoz, cookies, consent a dokumentace.
3. **Technický stack pro malé týmy** — frontend, backend, hosting, databáze, monitoring a zálohy.
4. **SaaS produkt od nápadu po první platící zákazníky** — pricing, onboarding, aktivace, retence.
5. **Marketing bez invazivního trackingu** — SEO, obsah, RSS, newslettery, UTM disciplína a analytika.
6. **Produktivita zakladatele a týmu** — rozhodovací systémy, automatizace, AI asistenti a provozní rytmus.
7. **Provoz v Evropě** — dodavatelé, smlouvy, incidenty, bezpečnost a exit plán.
8. **Checklisty a šablony** — audit webu, launch checklist, privacy review, marketingový plán.
9. **Přílohy** — praktické šablony pro kampaně, onboarding, dodavatele, AI, changelog, obsahový systém, RSS distribuci a event taxonomy.

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

## Příloha G: Changelog, release notes a komunikace změn bez zbytečného humbuku

Malý SaaS často komunikuje změny dvěma extrémy: buď mlčí, nebo z každé drobnosti udělá ohňostroj s pěti vykřičníky. Ani jedno není ideální. Changelog a release notes mají být provozní nástroj důvěry: zákazník vidí, že produkt žije, tým má historii rozhodnutí a obchod má materiál pro konkrétní follow-up.

Privacy-first varianta je jednoduchá: zveřejňuj změny na vlastním webu, přidej RSS feed, posílej jen nutné e-maily a nepoužívej sledovací pixely jen proto, aby se dashboard cítil důležitě. RSS 2.0 specifikace počítá s položkami, které mohou obsahovat `title`, `link`, `description`, `guid` a `pubDate`, takže se hodí i pro jednoduchý feed produktových novinek ([RSS Advisory Board: RSS 2.0 Specification](https://www.rssboard.org/rss-specification)). Pro strukturu changelogu se vyplatí inspirovat formátem Keep a Changelog, který rozlišuje typy změn jako přidané, změněné, opravené nebo odstraněné věci ([Keep a Changelog](https://keepachangelog.com/en/)). Pokud používáš veřejné API nebo balíčky, pomůže i verzování podle dopadu změn; Semantic Versioning definuje význam `MAJOR.MINOR.PATCH` pro nekompatibilní změny, nové kompatibilní funkce a kompatibilní opravy ([Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html)).

### 1) Rozlišuj interní changelog a zákaznické release notes

Interní changelog je pracovní paměť týmu. Může být technický, stručný a přesný. Zákaznické release notes jsou překlad do uživatelského dopadu.

Příklad interního zápisu:

> `Fixed`: Validace DIČ už nerozbije fakturační formulář při vložení mezery za prefix.

Příklad zákaznického zápisu:

> Opravili jsme fakturační formulář: DIČ nyní projde i tehdy, když ho zákazník vloží s mezerou navíc.

To druhé je lepší pro klienta, protože říká, co se změnilo v jeho práci. Neříká „refaktorovali jsme parser“, protože klient obvykle nechce parser, chce vystavit fakturu bez malého rituálu vzteku.

### 2) Každá položka má říct dopad, ne jen aktivitu

Špatná release note:

> Vylepšili jsme onboarding.

Lepší release note:

> V onboardingu jsme zkrátili první nastavení projektu ze šesti kroků na tři. Nový uživatel teď zadává jen název projektu, typ webu a preferovaný jazyk; zbytek může doplnit později.

Použij jednoduchý vzorec:

1. **Co se změnilo:** konkrétní funkce, oprava nebo úprava.
2. **Pro koho:** všichni uživatelé, administrátoři, vývojáři, účetní, agenturní tým.
3. **Jaký je dopad:** rychlejší práce, méně chyb, jasnější nastavení, bezpečnější provoz.
4. **Co má uživatel udělat:** nic, zkontrolovat nastavení, aktualizovat integraci, přečíst migraci.

### 3) Komunikační kanály drž pod kontrolou

Pro malý evropský SaaS dává smysl mít jednu kanonickou stránku `/changelog` nebo `/novinky`. Z ní můžeš automaticky generovat RSS feed, odkazovat na konkrétní verze z aplikace a jednou měsíčně poslat souhrn zákazníkům, kteří o něj stojí.

Praktický model:

- **Web:** veřejný archiv změn s trvalými URL.
- **RSS:** přímý odběr bez algoritmů, účtů a sledovacích skriptů.
- **In-app oznámení:** jen pro změny, které uživatel opravdu potřebuje vidět v kontextu.
- **E-mail:** bezpečnostní změny, fakturace, zásadní migrace a volitelný měsíční souhrn.
- **Sociální sítě:** pouze jako distribuce odkazu, ne jako jediné místo, kde změna existuje.

> **Codyho komentář:** Když jediná historie produktu žije v LinkedIn postech, není to komunikace produktu. Je to archeologie s komentářovou sekcí.

### 4) Šablona jedné položky changelogu

```markdown
### 2026-10-11 — Rychlejší nastavení projektu

**Typ:** Changed
**Pro koho:** noví uživatelé a administrátoři
**Dopad:** první projekt lze založit bez vyplňování nepovinných polí

Zkrátili jsme první nastavení projektu ze šesti kroků na tři. Název projektu,
typ webu a jazyk stačí pro první spuštění; fakturační údaje, týmové role
a pokročilé integrace lze doplnit později.

**Co udělat:** nic. Změna platí automaticky pro nové projekty.
```

Když jde o bezpečnostní opravu, nepřidávej zbytečné detaily, které by pomohly útoku. Řekni dopad, rozsah, stav opravy a doporučenou akci. Technické detaily zveřejni až tehdy, když je to bezpečné a uživatelům to pomůže.

### 5) Release rytmus pro malý tým

Nemusíš mít perfektní proces jako velká firma. Stačí rytmus, který se dá udržet.

- Každý merge nebo nasazení označ interně jednou větou dopadu.
- Jednou týdně projdi změny a vyber ty, které patří do veřejného changelogu.
- Jednou měsíčně udělej souhrn pro zákazníky, obchod a support.
- U breaking changes piš samostatný migrační návod a termín, do kdy je potřeba reagovat.
- U privacy nebo bezpečnostních změn přidej informaci, zda se mění zpracování dat, dodavatel, region nebo retenční doba.

### Checklist pro changelog a release komunikaci

- [ ] Produkt má jednu veřejnou kanonickou stránku pro novinky nebo changelog.
- [ ] Každá položka popisuje dopad na uživatele, ne jen interní aktivitu týmu.
- [ ] Důležité změny mají trvalý odkaz, který lze poslat zákazníkovi nebo dát do dokumentace.
- [ ] RSS feed obsahuje stabilní `guid`, `link` a `pubDate` pro každou položku.
- [ ] Bezpečnostní a privacy změny jasně říkají, zda uživatel musí něco udělat.
- [ ] E-mail se používá střídmě: jen pro zásadní změny, povinné informace nebo dobrovolný souhrn.
- [ ] Sociální sítě pouze odkazují na vlastní zdroj, nejsou jediným archivem produktových změn.

---

## Příloha H: Redakční systém obsahu, který nevyhoří po třech týdnech

Obsahový marketing často selže ne proto, že tým neumí psát, ale proto, že si vytvoří publikační fabriku bez jasného účelu. Malý SaaS tým nepotřebuje třicet článků měsíčně. Potřebuje pravidelně odpovídat na otázky, které zákazníci opravdu řeší před nákupem, během onboardingu a při rozhodování, jestli zůstat.

Google ve svých doporučeních zdůrazňuje užitečný, spolehlivý obsah psaný pro lidi, ne primárně pro vyhledávač. To je dobrá zpráva pro privacy-first týmy: nemusíš budovat agresivní trackingový cirkus, abys psal obsah, který pomáhá rozhodování. Potřebuješ znalost zákazníků, čistou strukturu, přímé odkazy, RSS a měření na úrovni agregovaných trendů.

### 1) Udělej obsahové pilíře podle rozhodnutí zákazníka

Místo kategorií typu „Novinky“, „Tipy“ a „Blog“ si napiš rozhodovací situace. Každý pilíř má odpovídat na jednu obchodně důležitou otázku.

Praktický příklad pro B2B SaaS:

- **Pochopení problému:** „Proč nám ruční evidence zakázek přestává stačit?“
- **Výběr řešení:** „Kdy stačí tabulka a kdy už dává smysl SaaS?“
- **Důvěra a provoz:** „Kde běží data, kdo k nim má přístup a jak je zálohujeme?“
- **Onboarding:** „Jak nastavit první proces za 30 minut?“
- **Retence:** „Jak poznat, že nám nástroj reálně šetří čas?“

Každý pilíř by měl mít jeden hlavní evergreen článek, několik praktických návodů a jednu stránku s odpověďmi na námitky. Evergreen není článek, který nikdy nezestárne. Je to článek, u kterého máš proces aktualizace.

**Codyho komentář:** Když nevíš, kam článek patří v rozhodování zákazníka, pravděpodobně píšeš obsahovou vatu. Vata patří do polštáře, ne do marketingu.

### 2) Zaveď redakční kartu před psaním

Než někdo začne psát, vyplň jednu krátkou kartu. Ušetří to revize, hádky i články, které sice zní chytře, ale nikomu nepomůžou.

Šablona redakční karty:

```markdown
## Název pracovně

## Pro koho to je
- Segment:
- Úroveň znalostí:
- Situace, ve které článek čte:

## Rozhodnutí, ke kterému má pomoct

## Primární dotaz nebo problém

## Co musí čtenář po přečtení umět
-
-
-

## Důkaz a zdroje
- Interní zkušenost:
- Externí zdroje:
- Co je názor a musí být označeno:

## Privacy-first kontrola
- Nepoužíváme osobní údaje v URL ani příkladech.
- Nevkládáme externí embed, pokud stačí přímý odkaz.
- Měření úspěchu je agregované.
```

Tahle karta je malá brzda. A přesně proto funguje. Nutí tým říct, komu pomáhá, jaký je důkaz a kde končí fakt a začíná názor.

### 3) Publikační rytmus: méně frekvence, víc údržby

Malý tým si často nastaví rytmus „každý týden článek“ a po měsíci zjistí, že publikuje pod tlakem. Lepší je jednoduchý cyklus:

1. **Týden 1:** jeden nový praktický článek.
2. **Týden 2:** aktualizace staršího článku podle nových dotazů, změn produktu nebo zdrojů.
3. **Týden 3:** případová studie, checklist nebo šablona.
4. **Týden 4:** redakční review: co přivedlo užitečnou návštěvnost, co zodpovědělo support dotazy a co je potřeba sloučit.

Tím nevzniká jen blog. Vzniká znalostní báze, kterou může používat marketing, sales, support i produkt. Každý článek by měl mít vlastní kanonickou URL, aktualizované datum a jasný další krok: stáhnout checklist, přečíst související návod, otevřít dokumentaci nebo kontaktovat tým.

### 4) Distribuce bez závislosti na algoritmech

Privacy-first obsah by měl být snadno dostupný bez povinného přihlášení, sledovacích pixelů a sociálních skriptů. To neznamená ignorovat sociální sítě. Znamená to, že sociální sítě nejsou archiv ani primární infrastruktura.

Doporučený distribuční mix:

- **RSS feed:** stabilní kanál pro čtenáře, partnery i interní automatizace.
- **Přímý newsletter:** pouze pro lidi, kteří ho chtějí; bez skrytých trackingových parametrů v každém odkazu.
- **LinkedIn nebo Mastodon post:** krátký komentář a odkaz na vlastní kanonickou stránku.
- **Produktová dokumentace:** odkazy na relevantní články v místech, kde zákazník řeší konkrétní problém.
- **Sales a support šablony:** jeden interní seznam článků podle typických otázek.

Když publikuješ jen na cizí platformě, půjčuješ si pozornost. Když publikuješ u sebe a cizí platformy používáš jako rozcestník, buduješ aktivum.

### 5) Měření obsahu bez sledování lidí

Obsah nepotřebuje znát identitu každého čtenáře. Ve většině malých týmů stačí odpovědět na pět otázek:

- Které stránky získávají organickou návštěvnost?
- Které články lidé čtou před konverzí?
- Které články snižují opakované support dotazy?
- Které články se pravidelně posílají zákazníkům ručně?
- Které články jsou zastaralé a škodí důvěře?

Měř agregovaně. Kombinuj privacy-friendly analytiku, Search Console data, interní poznámky ze sales/supportu a jednoduchý měsíční review dokument. UTM parametry používej pro kampaně, ne jako skládku osobních údajů. Do URL nikdy nedávej e-mail, jméno, firmu, telefon ani interní identifikátor zákazníka.

### 6) Aktualizační protokol pro evergreen články

Každý důležitý evergreen článek by měl mít malý provozní protokol:

- **Vlastník:** kdo ručí za věcnou správnost.
- **Interval review:** měsíčně, kvartálně nebo při změně produktu/regulace.
- **Seznam zdrojů:** odkazy na dokumentaci, zákony, metodiky nebo interní rozhodnutí.
- **Poslední kontrola:** datum a stručný popis změny.
- **Rizikové části:** ceny, právní povinnosti, nástrojové funkce, benchmarky a integrace.

Když článek obsahuje právní, cenové nebo technické tvrzení, neber ho jako hotový text. Ber ho jako závazek k údržbě. Zastaralý článek někdy škodí víc než žádný článek, protože působí důvěryhodně právě ve chvíli, kdy už pravdu nemá.

### Checklist pro redakční systém malého SaaS týmu

- [ ] Máme 3–5 obsahových pilířů podle rozhodnutí zákazníka, ne podle interních kategorií.
- [ ] Každý nový článek má redakční kartu s cílovým čtenářem, rozhodnutím, zdroji a privacy kontrolou.
- [ ] Evergreen články mají vlastníka, interval revize a datum poslední aktualizace.
- [ ] RSS feed je dostupný a odkazovaný z webu.
- [ ] Sociální sítě používáme jako distribuci, ne jako jediný archiv obsahu.
- [ ] Úspěch měříme agregovaně: organická návštěvnost, konverzní asistence, support dopad a ruční sdílení.
- [ ] Do URL, UTM parametrů ani příkladů v článcích nedáváme osobní údaje.
- [ ] Každý článek má jasný další krok, ale nenutí člověka do zbytečného formuláře.

---

## Příloha I: Poptávkový formulář, který kvalifikuje leady bez datového bufetu

Formulář je malé rozhraní s velkým dopadem. Umí přinést obchodní příležitost, ale taky umí člověka odradit, nasbírat zbytečná data a vytvořit týmovou iluzi, že víc polí znamená lepší kvalifikaci. Neznamená. Často to znamená jen delší frontu nevyřízených kontaktů a víc osobních údajů, které musíš chránit.

Privacy-first formulář má jednoduchý cíl: získat dost informací pro první užitečnou odpověď, ale ne víc. Všechno ostatní patří do následné komunikace, nabídky nebo onboardingu.

### 1) Nejdřív rozhodni, co má následovat po odeslání

Než začneš přidávat pole, napiš si, co se stane po odeslání formuláře. Jiný formulář potřebuješ pro rychlý dotaz, jiný pro demo SaaS a jiný pro poptávku vývoje.

Praktické varianty:

- **Obecný kontakt:** cílem je odpovědět správnému člověku; stačí jméno, e-mail a zpráva.
- **Poptávka služby:** cílem je odhadnout fit a další krok; přidej typ projektu, časový rámec a orientační prioritu.
- **Demo SaaS:** cílem je připravit relevantní ukázku; přidej roli člověka, problém a velikost týmu v rozmezí.
- **Support:** cílem je vyřešit problém; potřebuješ popis situace, dotčenou část produktu a možnost navázat komunikaci.

Když nevíš, co s odpovědí uděláš, neptej se. Pole bez jasného použití je jen malý compliance dluh s placeholderem.

### 2) Rozděl pole na nutná, užitečná a líná

U každého pole si napiš jednu větu: „Toto pole potřebujeme, protože…“. Pokud věta nejde dokončit, pole smaž nebo ho nech volitelné.

Příklad pro B2B poptávku:

| Pole | Stav | Proč |
| --- | --- | --- |
| Jméno | Povinné | Aby odpověď nepůsobila jako automat z bankomatu. |
| E-mail | Povinné | Bez něj nejde navázat komunikace. |
| Firma | Volitelné | Pomůže s kontextem, ale první odpověď bez ní pořád jde. |
| Web firmy | Volitelné | Hodí se pro přípravu, nesmí být bariéra. |
| Rozpočet | Volitelné nebo rozsah | Pomáhá kvalifikaci, ale přesné číslo může odradit. |
| Telefon | Volitelné | Ne každý chce hovor jako první krok. |
| Počet zaměstnanců | Smazat nebo rozsah | Přesná hodnota je většinou zbytečná. |

**Codyho komentář:** Povinný telefon na B2B formuláři je často obchodní verze cedule „budeme ti volat v nejhorší možnou chvíli“. Pokud hovor fakt potřebuješ, vysvětli proč a nech člověka vybrat čas.

### 3) Kvalifikuj problém, ne člověka

Formulář má pomoci pochopit situaci, ne vytvořit dossier. Ptej se na problém, očekávaný výsledek a naléhavost. Vyhýbej se otázkám, které jen uspokojují zvědavost týmu.

Dobré otázky:

- „Co se má po spolupráci změnit?“
- „Kde dnes proces nejvíc drhne?“
- „Kdy potřebujete mít první použitelný výsledek?“
- „Jak poznáte, že se projekt povedl?“

Slabé otázky:

- „Jak jste se o nás dozvěděli?“ jako povinné pole s dvaceti možnostmi.
- „Jaký je váš přesný roční obrat?“ u prvního kontaktu.
- „Souhlasíte se zasíláním marketingových sdělení?“ předtím, než člověk vůbec ví, jestli umíš odpovědět.

Marketingový souhlas nepatří do každého formuláře jako bonusové tlačítko. Pokud ho opravdu chceš, odděl ho od hlavního účelu a vysvětli, co člověk dostane.

### 4) Děkuj konkrétně a nastav očekávání

Stránka po odeslání není jen „Děkujeme“. Je to první miniaturní onboarding. Má říct, co se stane dál, kdy a kdo odpoví.

Vzor potvrzení:

> Díky, zpráva dorazila. Ozveme se nejpozději do dvou pracovních dnů. Pokud jde o výpadek nebo urgentní problém, napiš prosím přímo na support@example.cz s předmětem „Urgentní“. Údaje z formuláře používáme jen k vyřízení poptávky a neposíláme je do reklamních systémů.

Tohle je krátké, lidské a snižuje nejistotu. Zároveň říká privacy hodnotu bez toho, aby stránka zněla jako právnický sklep.

### 5) Napojení do týmu: méně kopií, jasný vlastník

Nejhorší formulář není ten s málo poli. Nejhorší formulář je ten, který po odeslání pošle osobní údaje do pěti inboxů, dvou tabulek, CRM, Slacku a ještě do nástroje, který nikdo neumí smazat. Gratuluju, vyrobil sis datové konfety.

Minimální workflow:

1. Formulář uloží zprávu do jednoho určeného systému.
2. Tým dostane notifikaci bez citlivého obsahu, ideálně jen s odkazem do systému.
3. Jeden člověk nebo role má odpovědnost za první reakci.
4. Po vyřízení se lead označí stavem: odpovězeno, čeká na klienta, kvalifikováno, nevhodný fit, archivovat.
5. Staré poptávky se mažou nebo anonymizují podle retenčního pravidla.

Retence nemusí být věda. Stačí jednoduché pravidlo: co nepotřebujeme pro smlouvu, podporu nebo oprávněný provozní důvod, to nemá v systému ležet navždy.

### 6) Šablona jednoduchého privacy-first formuláře

```markdown
## Chci probrat projekt

Pomůžeme ti zorientovat se v dalším kroku. Nechceme po tobě román ani rodný list.

Povinné:
- Jméno
- E-mail
- Co chceš vyřešit?

Volitelné:
- Web nebo produkt
- Kdy to potřebuješ řešit?
- Jaký typ pomoci hledáš? [Audit / nový web / SaaS vývoj / konzultace / nevím]
- Orientační rozpočet jako rozsah

Krátká poznámka k soukromí:
Údaje použijeme jen k odpovědi na poptávku. Neposíláme je do reklamních systémů a neprodáváme je třetím stranám.

Po odeslání:
- Potvrzení na stránce
- E-mail s kopií zprávy, pokud to dává smysl
- Interní notifikace bez plného obsahu poptávky
```

### Checklist pro poptávkový formulář

- [ ] Každé povinné pole má jasný účel pro první odpověď.
- [ ] Telefon, firma, web a rozpočet jsou volitelné, pokud nejsou nezbytné.
- [ ] Formulář se ptá hlavně na problém, výsledek a časový rámec.
- [ ] Marketingový souhlas je oddělený od hlavního účelu formuláře.
- [ ] Potvrzovací stránka říká, kdy a jak tým odpoví.
- [ ] Interní notifikace neposílají plný obsah poptávky do zbytečných kanálů.
- [ ] Existuje vlastník odpovědi a jednoduché stavy zpracování.
- [ ] Staré poptávky mají retenční pravidlo: smazat, anonymizovat nebo ponechat s důvodem.


---

## Příloha J: Knowledge base a support, který pomáhá bez budování sledovacího bunkru

Support není jen místo, kam padají problémy. Je to zpětná vazba v surovém stavu: zákazníci přesně říkají, kde nerozumí produktu, kde je onboarding slabý, kde text na webu slibuje víc než aplikace umí a kde tým opakuje stejnou odpověď podesáté. Malý SaaS tým by proto neměl support brát jako oddělený svět. Je to zdroj pro produkt, marketing i dokumentaci.

Privacy-first support má ale jednu důležitou hranici: pomáhá rychle, aniž by z každého ticketu dělal profil člověka. Ne každý dotaz musí skončit ve třech nástrojích, v AI sumarizaci a v doživotním archivu. Někdy je ticket prostě ticket. Ne rodinná sága v CRM.

### 1) Rozděl support na tři vrstvy

Začni jednoduchou architekturou supportu:

1. **Veřejná znalostní báze:** články, návody, časté otázky, troubleshooting a vysvětlení limitů produktu.
2. **Soukromá komunikace:** e-mail, formulář nebo ticket systém pro konkrétní zákaznické situace.
3. **Interní poznámky:** rozhodnutí týmu, workaroundy, incidenty, refundy a produktové signály.

Tyto vrstvy se nemají míchat. Veřejná znalostní báze nemá obsahovat zákaznická jména, screenshoty z produkce ani interní komentáře. Soukromý ticket nemá automaticky vytvářet marketingový profil. Interní poznámky mají být přístupné jen lidem, kteří je potřebují pro práci.

Praktické pravidlo: pokud se odpověď opakuje třikrát, napiš článek. Pokud článek potřebuje konkrétní zákaznická data, napiš ho znovu jako obecný scénář. Pokud problém nejde vysvětlit bez screenshotu účtu, anonymizuj ho nebo vytvoř demo data.

### 2) Knowledge base piš podle úkolů, ne podle organizační struktury

Zákazník nehledá „modul integrací“. Hledá „jak propojit fakturaci“, „proč mi nepřišel e-mail“, „jak pozvat kolegu“ nebo „jak zrušit účet“. Kategorie znalostní báze by měly vycházet z úkolů, které člověk řeší.

Dobrá struktura pro malý SaaS:

- **Začínáme:** první nastavení, pozvání týmu, základní pojmy.
- **Účet a fakturace:** tarify, faktury, zrušení, export dat.
- **Práce s produktem:** hlavní funkce podle úkolů uživatele.
- **Integrace a importy:** co lze propojit, limity, běžné chyby.
- **Bezpečnost a data:** kde data běží, kdo k nim má přístup, export a smazání.
- **Řešení problémů:** známé chyby, stav systému, kontaktní cesta.

Každý článek má mít jeden praktický výsledek. Ne „Vše o nastavení účtu“. Raději „Jak pozvat nového člena týmu“ nebo „Jak změnit fakturační e-mail“. Kratší články se lépe aktualizují a lépe odkazují ze support odpovědí.

### 3) Šablona support článku

Používej jednotnou šablonu, ať znalostní báze nepůsobí jako garáž plná náhodných krabic.

```markdown
# Jak [udělat konkrétní věc]

Krátké shrnutí:
Jednou větou řekni, kdy se tento návod hodí.

## Než začneš
- Potřebná role nebo oprávnění
- Co musí být už nastavené
- Na co si dát pozor

## Postup
1. Krok
2. Krok
3. Krok

## Když to nefunguje
- Nejčastější příčina
- Jak ji ověřit
- Co poslat supportu bez zbytečných osobních údajů

## Související články
- Odkaz na další krok
```

Do článků nedávej reálné osobní údaje ani zákaznické screenshoty. Používej demo e-maily typu `firma@example.cz`, fiktivní firmy a testovací projekt. Pokud článek popisuje bezpečnost, export nebo mazání dat, přidej datum poslední kontroly a vlastníka.

### 4) Ticket systém: minimum polí, jasná odpovědnost

Support formulář má sbírat méně dat než obchodní poptávka. Cílem není poznat zákazníka „do hloubky“, ale vyřešit problém.

Minimum polí:

| Pole | Povinné? | Poznámka |
| --- | --- | --- |
| E-mail | Ano | Nutný pro odpověď. |
| Předmět | Ano | Pomáhá směrovat dotaz. |
| Popis problému | Ano | Hlavní obsah ticketu. |
| Část produktu | Volitelné | Pomůže kategorizaci, ale nesmí blokovat odeslání. |
| Priorita | Volitelné | Uživatelé často nadhodnocují; ber jako signál, ne pravdu z kamene. |
| Příloha | Volitelné | Upozorni, ať neposílají hesla, tokeny ani celé exporty dat. |

Interně si hlídej tři odpovědnosti:

- **Vlastník ticketu:** kdo odpovídá zákazníkovi.
- **Vlastník tématu:** kdo opraví dokumentaci nebo produktovou chybu.
- **Retence:** kdy se ticket smaže, anonymizuje nebo přesune do interní znalosti bez osobních údajů.

### 5) Support metriky bez mikroskopu na člověka

Support se dá zlepšovat i bez invazivního sledování jednotlivců. U malého týmu stačí agregované signály:

- počet ticketů podle tématu,
- první reakční čas,
- čas do vyřešení,
- počet opakovaných dotazů k jedné funkci,
- články, které se nejčastěji posílají jako odpověď,
- témata, která by měla skončit v onboarding checklistu nebo produktu.

Není potřeba sledovat, kolikrát konkrétní člověk otevřel článek, jak dlouho na něm seděl a zda si při tom udělal kafe. Pro rozhodování stačí vědět, že článek řeší častý problém, nebo že ho naopak nikdo nepoužívá.

Pokud zapojíš AI asistenta na shrnutí ticketů, drž se stejných zásad jako v příloze F: minimalizuj vstup, anonymizuj citlivá data, neposílej tajemství a výstup používej jako návrh, ne jako rozhodnutí. U supportu je riziko úniku vyšší, protože lidé do zpráv často vloží věci, které by vložit neměli.

### 6) Měsíční support review na 45 minut

Jednou měsíčně udělej krátké review. Ne proto, aby vznikla další tabulka, ale aby support opravdu zlepšoval produkt.

Agenda:

1. Vyber 5 nejčastějších témat za měsíc.
2. U každého rozhodni: dokumentace, produkt, onboarding, nebo komunikace na webu?
3. Najdi jeden článek, který chybí nebo je zastaralý.
4. Najdi jednu produktovou úpravu, která sníží opakované dotazy.
5. Zkontroluj, jestli staré tickety dodržují retenční pravidla.
6. Zapiš dvě rozhodnutí do rozhodovacího logu.

**Codyho komentář:** Nejlevnější support ticket je ten, který vůbec nevznikne, protože produkt, onboarding nebo článek odpověděl včas. Ale pozor: cílem není schovat kontakt na support jako poklad v adventuře. Cílem je dát lidem jasnou odpověď dřív, než musí psát.

### Checklist pro privacy-first support a knowledge base

- [ ] Znalostní báze je strukturovaná podle úkolů zákazníka, ne podle interních modulů.
- [ ] Každý opakovaný dotaz má kandidáta na článek nebo produktové zlepšení.
- [ ] Veřejné články neobsahují reálné osobní údaje, produkční screenshoty ani interní poznámky.
- [ ] Support formulář sbírá jen data nutná k vyřešení problému.
- [ ] Přílohy mají jasné varování: neposílat hesla, tokeny, tajné klíče ani celé exporty.
- [ ] Ticket notifikace neposílají citlivý obsah do zbytečných kanálů.
- [ ] Support metriky jsou agregované a používají se k rozhodování o dokumentaci, produktu a onboardingu.
- [ ] Staré tickety mají retenční pravidlo a tým ho pravidelně kontroluje.


## Příloha K: Pricing stránka, která prodává bez nátlakového cirkusu

Cenová stránka je místo, kde se marketing potká s realitou. Do té chvíle můžeš vyprávět krásný příběh o hodnotě, rychlosti a úsporách. Jakmile návštěvník otevře pricing, ptá se mnohem tvrději: „Kolik mě to bude stát, co přesně dostanu a co se stane, když to nebude fungovat?“

Privacy-first pricing má ještě jeden úkol navíc: nesmí se opírat o manipulaci, skryté podmínky ani agresivní sledování nerozhodnutých lidí. Místo toho má dát zákazníkovi klid na rozumné rozhodnutí. Ano, je to méně „growth hack“. Taky je to méně „proč mám pocit, že mě sleduje kalkulačka s doktorátem z psychologie“.

### 1) Nejdřív pojmenuj nákupní situaci

Než začneš kreslit tři karty s tarify, napiš si, v jaké situaci zákazník pricing čte.

Příklady:

- Zakladatel malého SaaS řeší, jestli si může nástroj dovolit první měsíc.
- Provozní manažer potřebuje vědět, zda tarif pokryje tým a základní workflow.
- Technický člověk kontroluje limity, export dat, integrace a bezpečnost.
- Majitel firmy nechce číst detailní specifikaci, chce pochopit, kdy se investice vrátí.

Každá situace potřebuje trochu jiný důkaz. Zakladatel chce nízké riziko startu. Provozní člověk chce jistotu, že nenarazí po třech dnech. Technický člověk chce vědět, kde jsou data, jak funguje export a co se stane při ukončení služby.

Praktická otázka před psaním pricingu:

> „Jaké rozhodnutí má člověk udělat po přečtení této stránky?“

Možné odpovědi:

- začít trial,
- objednat demo,
- vybrat tarif,
- poslat stránku kolegovi,
- stáhnout bezpečnostní nebo privacy podklady,
- napsat dotaz k limitům.

Pokud pricing míří na všechny tyto akce najednou, pravděpodobně bude působit jako palubní deska vesmírné lodi. Zábavné na pohled, horší na rozhodování.

### 2) Tarify stav podle hodnoty, ne podle interní tabulky funkcí

Častá chyba je pricing, který vypadá jako export z produktového backlogu: 47 řádků, zelené fajfky, šedé pomlčky a jedna funkce schovaná v nejdražším tarifu, protože „nějak musíme tlačit upgrade“.

Lepší přístup: každý tarif pojmenuj podle fáze zákazníka.

Příklad pro B2B SaaS:

- **Start** — pro první tým, který chce ověřit proces a spustit základní workflow.
- **Growth** — pro firmu, která už má pravidelný provoz, více rolí a potřebuje reporting.
- **Scale** — pro větší tým s požadavky na audit, pokročilá oprávnění a individuální podporu.

Funkce pak nejsou nahodilý seznam, ale důvod, proč daný tarif existuje. U každé položky se ptej:

> „Pomáhá tato funkce zákazníkovi v dané fázi, nebo ji sem dávám jen proto, že ji máme?“

Když funkce neříká jasnou hodnotu, přepiš ji do výsledku.

Slabě:

> „Custom fields“

Lépe:

> „Vlastní pole pro procesy, které se nevejdou do výchozí šablony.“

Slabě:

> „Advanced permissions“

Lépe:

> „Odděl přístup obchodníků, supportu a administrátorů bez ruční kontroly každého záznamu.“

### 3) Limity ukaž dřív, než se z nich stane support ticket

Každý SaaS má limity. Počet uživatelů, projektů, integrací, exportů, úložiště, automatizací nebo support reakce. Schovávat limity je krátkodobě pohodlné a dlouhodobě drahé.

U každého tarifu ukaž:

- co je zahrnuté,
- co je omezené,
- co se stane při překročení limitu,
- zda existuje upozornění před navýšením nákladů,
- jak zákazník může data exportovat nebo tarif snížit.

Privacy-first provoz přidává ještě jednu důležitou vrstvu: vysvětli, jak se liší data a přístupy mezi tarify. Ne stylem „Enterprise má bezpečnost, ostatní mají štěstí“. Základní ochrana dat musí být základní hygienou, ne prémiovou dekorací.

Dobré rozdělení:

- všechny tarify mají šifrovaný přenos, základní zálohy a export dat,
- vyšší tarify mají detailnější auditní logy, pokročilé role, individuální retenční pravidla nebo smluvní podporu,
- enterprise úroveň řeší specifické bezpečnostní a právní požadavky, ne elementární důvěru.

**Codyho komentář:** Bezpečnost jako upsell je nebezpečná zkratka. Pokročilé řízení rizik může být v dražším tarifu, ale základní ochrana zákaznických dat má být samozřejmost. Jinak neprodáváš SaaS, ale loterii s administrátorským heslem.

### 4) CTA rozděl podle připravenosti zákazníka

Ne každý návštěvník pricingu je připraven platit hned. Někteří chtějí začít trial. Někteří potřebují demo. Někteří jen sbírají podklady pro tým.

Pricing proto může mít tři vrstvy akcí:

1. **Primární akce:** začít trial, objednat demo nebo koupit tarif.
2. **Sekundární akce:** porovnat tarify, zeptat se na limit, stáhnout jednostránkové shrnutí.
3. **Důvěrová akce:** otevřít privacy informace, bezpečnostní přehled, vzor DPA nebo exportní pravidla.

Nedělej z každé akce stejně velké tlačítko. Primární CTA má být jasné. Sekundární odkazy mají pomáhat, ne křičet.

Příklad textu pod tlačítkem:

> „Trial bez platební karty. Po 14 dnech se účet automaticky nepřeklopí do placeného tarifu.“

Nebo:

> „Demo trvá 25 minut. Ukážeme konkrétní workflow, ne obecnou prezentaci se 78 slidy.“

Tohle snižuje nejistotu. A nejistota je na pricingu často větší problém než samotná cena.

### 5) Měř pricing bez sledovacího honu na jednotlivce

Pricing stránka se dá zlepšovat i bez invazivního trackingu. Nepotřebuješ znát kompletní osobní historii každého návštěvníka. Potřebuješ vědět, kde se rozhodování zasekává.

Sleduj agregovaně:

- návštěvy pricingu podle zdroje kampaně,
- kliknutí na primární CTA,
- kliknutí na otázky k limitům nebo bezpečnosti,
- počet odeslaných poptávek z pricingu,
- nejčastější dotazy po návštěvě pricingu,
- konverzi z trialu nebo dema na platící zákazníky.

Kombinuj kvantitativní signály s kvalitativními:

- proč lidé váhají,
- které limity nechápou,
- co jim chybí pro interní schválení,
- zda cena neodpovídá tomu, jak popisuješ hodnotu.

Jednou měsíčně projdi support, sales poznámky a agregovanou analytiku. Nehledej „trik“, který zvýší kliky o půl procenta. Hledej jednu věc, která sníží nejistotu pro správného zákazníka.

### 6) Šablona pricing stránky

Použij tuto strukturu jako jednoduchý start:

```markdown
# Vyber tarif podle fáze vašeho týmu

Krátké vysvětlení, pro koho je produkt a jak se cena váže na hodnotu.

## Start
Pro malé týmy, které chtějí spustit první workflow.
- Hlavní výsledek
- Klíčové limity
- Co je zahrnuté
- Co není zahrnuté
- CTA: Začít trial

## Growth
Pro týmy s pravidelným provozem a více rolemi.
- Hlavní výsledek
- Klíčové limity
- Co je navíc proti Startu
- CTA: Vyzkoušet Growth

## Scale
Pro firmy s auditními, bezpečnostními nebo integračními požadavky.
- Hlavní výsledek
- Co řeší individuálně
- CTA: Domluvit demo

## Časté otázky
- Co se stane po trialu?
- Dá se exportovat data?
- Kde jsou data provozovaná?
- Jak funguje zrušení účtu?
- Jak řešíte role, přístupy a support?
```

### Checklist pro pricing stránku

- [ ] Každý tarif má jasně popsanou fázi zákazníka, ne jen jiný počet funkcí.
- [ ] Cena, limity a důležité podmínky nejsou schované za obchodní formulář bez důvodu.
- [ ] Základní bezpečnost a export dat nejsou prezentované jako luxusní doplněk.
- [ ] CTA odpovídá připravenosti zákazníka: trial, demo, dotaz nebo podklady pro tým.
- [ ] FAQ řeší skutečné nákupní nejistoty: trial, zrušení, data, limity, fakturace a support.
- [ ] Měření pricingu je agregované a nevyžaduje reklamní pixel ani osobní profilování.
- [ ] Jednou měsíčně tým vybere jednu konkrétní úpravu pricingu podle dotazů a dat.


## Příloha L: Důvěryhodnost webu bez logostěny z kartonu

Důvěra na webu nevzniká tím, že do patičky nasypeš osm ikon, tři generické věty a logo klienta, se kterým jsi jednou měl společný call. Vzniká tím, že návštěvník vidí konkrétní důkazy: komu pomáháš, jaký problém řešíš, co se změnilo a proč tomu může věřit.

Privacy-first web má v tomhle výhodu. Může říct: „Nepotřebujeme vás sledovat přes půl internetu, abychom vám ukázali relevantní důkaz.“ Místo behaviorálního cirkusu stačí dobrá informační architektura, poctivý obsah a důkazy umístěné přesně tam, kde lidé váhají.

### 1) Rozlišuj typy důkazů podle míry rizika

Ne každý návštěvník potřebuje stejný důkaz. Čím větší riziko rozhodnutí, tím konkrétnější důkaz musí web dodat.

Pro jednoduchý firemní web často stačí:

- jasné vysvětlení služby,
- ukázky práce,
- krátké reference,
- fotka nebo jméno člověka, se kterým bude zákazník mluvit,
- srozumitelný proces spolupráce.

Pro B2B SaaS už je potřeba víc:

- případová studie s výchozí situací a výsledkem,
- bezpečnostní a privacy stránka,
- vysvětlení exportu dat a ukončení účtu,
- informace o hostingu, subdodavatelích a přístupech,
- dokumentace pro interní schválení nákupu.

Pro enterprise zákazníky se důvěra posouvá ještě dál:

- vzor DPA nebo jasný postup k právním dokumentům,
- role a oprávnění,
- auditní logy,
- incident proces,
- kontaktní bod pro bezpečnostní dotazy,
- možnost dodat technické podklady bez marketingové mlhy.

**Codyho komentář:** Pokud prodáváš za pár stovek měsíčně, nepotřebuješ bezpečnostní portál jako banka. Pokud ale tvrdíš, že řešíš firemní data, nestačí „data bereme vážně“ napsané šedým textem pod formulářem. To je spíš modlitba než důkaz.

### 2) Case study piš jako rozhodovací dokument

Dobrá případová studie není oslavný článek o tom, jak jste „společně dosáhli skvělých výsledků“. To je firemní karaoke. Dobrá case study pomáhá podobnému zákazníkovi rozhodnout, jestli jste vhodná volba.

Použij jednoduchou strukturu:

1. **Kontext:** kdo je zákazník, v jaké fázi byl a co řešil.
2. **Problém:** co nefungovalo, proč to bolelo a jaké byly praktické dopady.
3. **Rozhodnutí:** proč se zvolilo konkrétní řešení a jaké alternativy byly na stole.
4. **Implementace:** co se udělalo, v jakém pořadí a co bylo nejtěžší.
5. **Výsledek:** co se změnilo, ideálně konkrétně a bez přehánění.
6. **Poučení:** co by tým udělal příště stejně a co jinak.
7. **Privacy-first poznámka:** jak se pracovalo s daty, souhlasy, dodavateli nebo měřením.

Praktický příklad titulku:

> „Jak B2B tým zkrátil ruční zpracování poptávek z 2 hodin na 20 minut bez předávání dat reklamním platformám“

Tohle je konkrétní. Říká cílovku, změnu, provozní výsledek i privacy hodnotu. Není nutné přidávat ohňostroj superlativů.

### 3) Reference sbírej tak, aby šly použít

Špatná reference zní takhle:

> „Spolupráce byla skvělá, doporučujeme.“

To potěší ego, ale webu moc nepomůže. Lepší reference odpovídá na jednu z nákupních obav.

Ptej se zákazníků konkrétně:

- Co jste řešili před spoluprací?
- Čeho jste se při rozhodování báli?
- Co vám nejvíc pomohlo během implementace?
- Jaký konkrétní výsledek dnes vidíte?
- Co byste řekli firmě, která řeší podobný problém?
- Můžeme uvést jméno, roli, firmu a kontext?

Pokud zákazník nechce být jmenovaný, dá se použít anonymizovaná reference, ale označ ji férově:

> „Marketingový ředitel, česká B2B firma do 50 lidí“

Nepředstírej, že anonymní citace má stejnou váhu jako ověřitelná reference. Má menší důkazní sílu, ale pořád může pomoct, pokud je konkrétní.

### 4) Důvěru rozmísti podle míst, kde lidé váhají

Nejčastější chyba: všechny důkazy jsou na jedné stránce „Reference“ a zbytek webu vypadá, jako by vznikl v izolaci. Důkaz má být blízko rozhodnutí.

Rozmístění podle stránek:

- **Homepage:** krátký sociální důkaz, pro koho pracuješ, jeden silný výsledek, jasný proces.
- **Služba nebo produkt:** konkrétní ukázka problému, podobný případ, vysvětlení postupu.
- **Pricing:** reference k hodnotě, férovosti ceny, supportu, zrušení nebo přechodu mezi tarify.
- **Formulář:** krátká věta o tom, co se stane po odeslání a jak dlouho data držíš.
- **Privacy stránka:** provozní fakta, regiony, dodavatelé, retence, export a kontaktní bod.
- **Blog:** odkazy na související zkušenosti, checklisty a praktické šablony.

Příklad u formuláře:

> „Ozveme se do dvou pracovních dnů. Údaje použijeme jen pro odpověď na poptávku a nepošleme je do reklamních systémů.“

Tohle je malá věta, ale dělá velkou práci. Snižuje nejistotu a zároveň ukazuje hodnoty firmy.

### 5) Privacy a bezpečnost vysvětli lidsky

Stránka „Bezpečnost“ nebo „Soukromí“ často skončí jako skládka právních slov. Jenže kupující často není právník. Potřebuje rychle pochopit, zda produkt projde interním schválením a jestli tým nepřidává zbytečné riziko.

Dobrá privacy-first stránka má odpovědět na otázky:

- Kde běží aplikace a databáze?
- Jaké kategorie dat zpracováváme?
- Které subdodavatele používáme a proč?
- Jak dlouho držíme účty, logy, poptávky a support komunikaci?
- Jak funguje export dat?
- Jak funguje smazání nebo ukončení účtu?
- Kdo má v týmu přístup k zákaznickým datům?
- Jak se hlásí bezpečnostní problém?

Nemusí to být román. Stačí přehledná stránka, která odkazuje na právní dokumenty a technické detaily. Důležité je, aby nebyla jen marketingová. Když něco nevíš, napiš, kdo odpověď dodá. Když něco zatím neumíš, nebal to do mlhy.

### 6) Šablona důkazní vrstvy webu

Použij tuto šablonu při auditu důvěryhodnosti:

```markdown
# Důvěryhodnost webu

## Primární nákupní obavy
- Cena a návratnost
- Čas implementace
- Bezpečnost a data
- Kvalita podpory
- Možnost odejít

## Důkazy k obavám
- Cena: příklad hodnoty, pricing FAQ, case study
- Implementace: proces spolupráce, timeline, ukázka onboarding plánu
- Data: privacy stránka, dodavatelé, export, retence
- Podpora: SLA nebo očekávání odpovědi, knowledge base, support reference
- Odchod: exportní pravidla, zrušení účtu, exit plán

## Umístění důkazů
- Homepage
- Produktová stránka
- Pricing
- Formulář
- Privacy/security stránka
- Dokumentace nebo knowledge base

## Chybějící důkazy
- Co dnes tvrdíme bez podpory?
- Kde návštěvník musí věřit naslepo?
- Který důkaz umíme doplnit tento měsíc?
```

### Checklist pro důvěryhodnost privacy-first webu

- [ ] Hlavní stránky obsahují konkrétní důkazy, ne jen obecné sliby.
- [ ] Case studies popisují kontext, problém, rozhodnutí, implementaci, výsledek a poučení.
- [ ] Reference odpovídají na skutečné nákupní obavy.
- [ ] Důkazy jsou umístěné u míst rozhodnutí: pricing, formulář, produkt, homepage a privacy stránka.
- [ ] Privacy a bezpečnost jsou vysvětlené lidsky, ne jen právním dokumentem v patičce.
- [ ] Web říká, co se stane po odeslání formuláře a jak se naloží s daty.
- [ ] Anonymní reference jsou označené férově a nepředstírají vyšší váhu.
- [ ] Jednou za kvartál tým zkontroluje, které sliby na webu už neodpovídají realitě.


## Příloha M: E-mailing a onboarding bez sledovacího lunaparku

E-mail je pořád jeden z nejpraktičtějších kanálů pro SaaS, obsah i zákaznickou péči. Problém není e-mail samotný. Problém je, když se z něj stane sledovací kombajn: pixel na otevření, profilování každého kliknutí, automatizace bez kontextu a databáze kontaktů, u které nikdo neví, odkud se vzala.

Privacy-first e-mailing stojí na jednoduché větě: posílej lidem zprávy, které očekávají, a měř jen tolik, kolik potřebuješ pro lepší rozhodnutí. Ano, zní to podezřele normálně. To je přesně pointa.

### 1) Rozděl e-maily podle účelu

Nejdřív si pojmenuj, jaký typ e-mailu posíláš. Každý typ má jiný účel, jinou míru očekávání a jiný rytmus.

Základní rozdělení:

- **Transakční e-maily:** potvrzení účtu, reset hesla, faktura, bezpečnostní upozornění, změna nastavení.
- **Produktový onboarding:** série e-mailů, která pomáhá uživateli dokončit první hodnotnou akci.
- **Obsahový newsletter:** novinky, návody, komentáře, checklisty a vzdělávací obsah.
- **Obchodní sdělení:** nabídky, promo akce, upsell, cross-sell nebo návrat do placeného tarifu.
- **Servisní komunikace:** změny podmínek, incidenty, výpadky, ukončení funkce nebo důležité provozní změny.

Pro každý typ si napiš:

- proč zpráva existuje,
- komu se posílá,
- co má čtenář po přečtení udělat,
- jaký je právní a produktový důvod odeslání,
- jak se člověk dostane z daného seznamu pryč.

Tahle tabulka zní byrokraticky, ale ušetří hodně bolesti. Když nevíš, proč e-mail existuje, nepomůže mu ani lepší předmět, ani emoji v prvním odstavci. Jen bude otravnější s větší kreativitou.

### 2) Sbírej méně kontaktů, ale s čistým kontextem

Nejcennější e-mailová databáze není ta největší. Je to ta, u které víš, odkud kontakt přišel, co očekává a proč mu píšeš.

U každého kontaktu drž minimum praktických informací:

- e-mailovou adresu,
- zdroj přihlášení nebo vztah k produktu,
- čas přihlášení nebo vzniku vztahu,
- očekávaný typ komunikace,
- stav odhlášení,
- interní poznámku k účelu, pokud je potřeba.

Naopak se vyhni sběru věcí „pro jistotu“: telefon, role, velikost firmy, rozpočet, obor, osobní preference, sociální profily. Pokud je nepotřebuješ pro konkrétní další krok, do newsletter formuláře nepatří. Každé pole navíc je malý úvěr na budoucí chaos.

Praktický formulář pro newsletter může mít jen:

```markdown
# Odebírat Codyho poznámky o webu, SaaS a privacy-first marketingu

E-mail: [__________]

[ ] Souhlasím se zasíláním praktických e-mailů od Dreamindu. Odběr můžu kdykoliv zrušit jedním kliknutím.

[Odebírat]
```

Pokud chceš segmentaci, raději ji udělej podle zájmu, ne podle šmírování:

- „Chci hlavně webový vývoj.“
- „Chci hlavně SaaS a produkt.“
- „Chci hlavně marketing a obsah.“
- „Chci hlavně privacy-first provoz.“

Člověk tak sám řekne, co chce. Není potřeba hádat z deseti návštěv blogu a jednoho podezřelého kliknutí v úterý večer.

### 3) Odhlášení nesmí být úniková místnost

ÚOOÚ u obchodních sdělení popisuje jako problém mimo jiné situace, kdy chybí možnost jednoduchého odmítnutí nebo odhlášení další komunikace. Evropská pravidla ePrivacy také pracují s principem, že nevyžádaná obchodní komunikace elektronickou poštou stojí na souhlasu, případně na úzké výjimce pro podobné produkty a služby u existujících zákazníků, pokud mají možnost takové použití odmítnout ([ÚOOÚ: obchodní sdělení](https://uoou.gov.cz/profesional/obchodni-sdeleni), [EUR-Lex: ePrivacy Directive 2002/58/EC](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02002L0058-20091219)).

Prakticky to znamená:

- odhlašovací odkaz dej do každého marketingového nebo newsletterového e-mailu,
- nevyžaduj přihlášení do účtu jen kvůli odhlášení,
- nebal odhlášení do tří kroků a potvrzovacích her,
- nepiš „odhlášení může trvat 14 dní“, pokud to technicky umíš hned,
- respektuj odhlášení napříč nástroji, ne jen v jedné kampani.

Dobrý odhlašovací text:

> „Nechcete další Codyho e-maily? Odběr zrušíte jedním kliknutím tady.“

Špatný text:

> „Kliknutím zde upravíte svoje komunikační preference v zákaznickém portálu po ověření heslem a bezpečnostním kódem.“

Jestli je jednodušší zrušit bankovní účet než newsletter, někde se produktový tým ztratil v lese.

### 4) Měř e-mail podle rozhodnutí, ne podle voyeurismu

Open-rate zní lákavě, ale v praxi je čím dál méně spolehlivý a často vede k divným rozhodnutím. Některé e-mailové klienty načítají obrázky automaticky, jiné je blokují, některé chrání soukromí příjemce. Výsledek: číslo v dashboardu vypadá přesně, ale chová se jako horoskop v obleku.

Privacy-first měření e-mailu proto stav na agregovaných signálech:

- počet odeslaných e-mailů,
- počet doručených nebo odmítnutých zpráv,
- počet odhlášení,
- počet odpovědí,
- počet kliknutí na hlavní odkaz na agregované úrovni,
- konverze na cílové stránce bez předávání osobních údajů v URL,
- kvalitativní odpovědi od čtenářů.

U UTM parametrů drž disciplínu z přílohy C: do URL nikdy nedávej e-mail, jméno, firmu ani jiné osobní údaje. Stačí zdroj, médium, kampaň a případně varianta obsahu. Pokud potřebuješ měřit konkrétní onboarding krok, měř událost v produktu tam, kde se stane, ne přes sledovací detektivku v e-mailu.

**Codyho komentář:** Nejlepší metrika newsletteru je často odpověď od reálného člověka. „Tohle jsme podle vás upravili“ má větší hodnotu než graf, který se tváří vědecky, ale ve skutečnosti měří, kdo má zapnuté načítání obrázků.

### 5) Onboarding e-maily piš jako doprovod, ne jako nátlak

SaaS onboarding e-mail nemá uživatele zatlačit do produktu. Má mu pomoct udělat další smysluplný krok. Pokud e-mail začíná „Všimli jsme si, že jste ještě...“, zvaž, jestli to nezní jako produktový stalker s kalendářem.

Lepší struktura onboarding série:

1. **Den 0 — potvrzení a první krok:** „Tady je účet, začněte jednou konkrétní akcí.“
2. **Den 1 — vysvětlení hodnoty:** „Jak poznáte, že produkt funguje.“
3. **Den 3 — odstranění překážky:** „Tři nejčastější problémy při nastavení a jak je vyřešit.“
4. **Den 7 — příklad použití:** „Jak podobný tým nastavil workflow.“
5. **Den 14 — rozhodnutí:** „Co zkontrolovat před koncem trialu.“

Každý e-mail by měl mít:

- jeden hlavní úkol,
- jednu primární výzvu k akci,
- jasný důvod, proč příjemce zprávu dostal,
- možnost změnit preference nebo se odhlásit, pokud nejde o čistě transakční zprávu,
- žádné citlivé informace v předmětu ani náhledu.

Příklad dobrého onboarding e-mailu:

```markdown
Předmět: První workflow nastavíte za 10 minut

Ahoj,

nejrychlejší cesta k hodnotě je nastavit první workflow pro jeden konkrétní případ.

Doporučený postup:
1. Vyber jeden týmový proces.
2. Přidej pouze povinná pole.
3. Pozvi jednoho kolegu na kontrolu.

Návod: /docs/prvni-workflow

Pokud řešíte citlivá data, začněte tady: /docs/privacy-nastaveni

— Cody
```

### 6) Udělej měsíční hygienu seznamu

E-mailing není „nastav a zapomeň“. Jednou měsíčně projdi seznamy a zkontroluj:

- odhlášení a stížnosti,
- nedoručitelné adresy,
- segmenty, které už nikdo nepoužívá,
- automatizace bez vlastníka,
- staré lead magnety a formuláře,
- texty souhlasů a očekávání,
- odkazy na privacy informace.

Pokud někdo rok nereaguje a nemá aktivní zákaznický vztah, zeptej se, jestli ho opravdu potřebuješ držet v marketingové databázi. Možná ne. Databáze, která je menší, čistší a očekávaná, často funguje líp než hromada kontaktů z dávné kampaně, kterou už nikdo nechce přiznat.

### Checklist pro privacy-first e-mailing

- [ ] Každý typ e-mailu má jasný účel, cílovou skupinu a vlastníka.
- [ ] Newsletter formulář sbírá jen e-mail a nezbytné preference.
- [ ] U kontaktů víme, odkud přišly a jaký typ komunikace očekávají.
- [ ] Marketingové a newsletterové e-maily mají jednoduché odhlášení jedním kliknutím.
- [ ] Do URL a UTM parametrů nedáváme osobní údaje.
- [ ] Nepotřebujeme individuální sledovací profil pro rozhodnutí o obsahu.
- [ ] Onboarding e-maily pomáhají dokončit konkrétní krok, nevyvolávají pocit sledování.
- [ ] Jednou měsíčně čistíme seznamy, staré automatizace a nepoužívané segmenty.


## Příloha N: B2B demo a obchodní follow-up bez CRM detektivky

B2B demo není divadelní představení, kde zakladatel ukáže všechny obrazovky, tři skryté funkce a ještě roadmapu do roku 2031. Dobré demo je řízený rozhovor: zjistíš, jestli má zákazník problém, ukážeš jen relevantní cestu k řešení a domluvíš další konkrétní krok.

Privacy-first obchod neznamená, že si nesmíš dělat poznámky. Znamená, že poznámky mají jasný účel, nejsou sbírkou osobních detailů „kdyby se hodily“ a nezůstávají v CRM navždy jako fosilie z doby, kdy někdo jednou klikl na pricing.

> **Codyho komentář:** Nejlepší obchodní systém pro malý SaaS často není „víc automatizace“. Je to méně polí, jasnější další krok a odvaha říct: tenhle lead se k nám nehodí. Ano, CRM pak vypadá méně jako vánoční stromeček. Přežijeme.

### 1) Před demem si napiš hypotézu, ne scénář na autopilota

Než začneš hovor, napiš si tři věci:

- proč se člověk pravděpodobně ozval,
- jaký problém chce vyřešit,
- co musí po hovoru vědět, aby udělal další rozhodnutí.

Tohle není profilování. Je to pracovní hypotéza. Rozdíl je v tom, že ji během hovoru ověřuješ a opravuješ, ne že ji používáš jako pravdu vytesanou do dashboardu.

Praktická příprava na 10 minut:

```markdown
## Demo: [firma / projekt]

Pravděpodobný problém:
- ...

Rozhodnutí, ke kterému má hovor pomoct:
- ...

Co ukázat:
- ...

Co neukazovat:
- ...

Otázky, které musíme položit:
- ...

Další krok po hovoru:
- ...
```

Sekce „Co neukazovat“ je důležitější, než vypadá. Demo se často rozbije tím, že tým ukáže příliš mnoho funkcí. Zákazník pak neodchází s pocitem „tohle řeší můj problém“, ale „tohle je velké a někde tam možná je to, co potřebuji“.

### 2) Ptej se na práci, ne na firemní drby

Discovery část hovoru má zjistit kontext rozhodnutí. Ne sbírat biografii účastníků. Ptej se na proces, riziko, dopad a omezení.

Dobré otázky:

- „Co dnes děláte ručně a kolik času to bere týdně?“
- „Kde se proces nejčastěji zasekne?“
- „Co se stane, když se to další tři měsíce nezmění?“
- „Kdo bude výsledek používat a kdo ho bude schvalovat?“
- „Jak poznáte, že se investice vyplatila?“
- „Jaká data do systému nesmí nebo nemají odcházet?“

Slabé otázky:

- „Jaký máte rozpočet?“ jako první věta po pozdravu.
- „Kdo všechno rozhoduje?“ bez vysvětlení, proč to potřebuješ.
- „Jaký nástroj používáte?“ bez navázání na problém.
- „Co vás zaujalo na našem webu?“ když už máš formulář a analytiku.

U privacy-first produktu se vyplatí přidat jednu přímou otázku:

> „Máte interní pravidla, kde musí být data provozovaná, kdo k nim smí mít přístup a jak dlouho je můžeme držet?“

Tahle otázka šetří čas oběma stranám. Pokud zákazník musí mít evropský provoz, datové zpracování pod kontrolou a export bez vendor lock-inu, chceš to vědět před návrhem řešení, ne po třetím kole nabídky.

### 3) Demo stav jako cestu k výsledku

Ukazuj produkt v pořadí, ve kterém zákazník řeší práci. Ne podle menu v aplikaci.

Jednoduchý model:

1. **Situace:** „Říkal jste, že dnes trávíte hodně času ručním vyhodnocením poptávek.“
2. **Akce:** „Tady vidíte, jak se poptávka dostane do systému s minimem polí.“
3. **Kontrola:** „Tady tým vidí stav, vlastníka a další krok.“
4. **Výstup:** „Tady je report, který jednou týdně ukáže objem, kvalitu a důvody odmítnutí.“
5. **Privacy:** „Tady nastavíte retenci, export a přístupová práva.“

Tím se demo drží hodnoty. Pokud někdo chce detail, ukážeš ho. Pokud ne, nepřidáváš funkční ohňostroj jen proto, že ho máš připravený.

Pravidlo pro malé týmy: jedna ukázka má mít maximálně tři hlavní obrazovky. Všechno ostatní patří do follow-upu, dokumentace nebo druhého technického hovoru.

### 4) Poznámky z hovoru piš jako rozhodovací dokument

CRM poznámka má pomoct týmu rozhodnout, co dál. Nemá být deníček obchodníka, ani skladiště osobních detailů.

Do CRM patří:

- problém a jeho dopad,
- kdo je uživatel a kdo rozhoduje na úrovni role, ne zbytečných osobních detailů,
- požadavky na data, bezpečnost a provoz,
- námitky a nejasnosti,
- domluvený další krok,
- datum kontroly nebo uzavření příležitosti.

Do CRM nepatří:

- osobní poznámky nesouvisející s obchodem,
- citlivé informace, které nepotřebuješ pro další krok,
- kopie interních dokumentů zákazníka bez jasného důvodu,
- přepisy hovoru uložené navždy jen proto, že to nástroj umí.

Šablona poznámky:

```markdown
## Kontext
- Firma řeší:
- Dopad problému:
- Současné řešení:

## Kritéria rozhodnutí
- Funkční:
- Provozní a datová:
- Ekonomická:

## Ukázáno v demu
- ...

## Námitky a rizika
- ...

## Další krok
- Co:
- Kdo:
- Do kdy:

## Retence poznámky
- Zkontrolovat / smazat / archivovat po:
```

Retence poznámky je drobný detail, který dělá velký rozdíl. Lead, který se po šesti měsících neozval a nedal souhlas k další komunikaci, nemusí navždy sedět v obchodním pipeline jako digitální duch.

### 5) Follow-up má shrnout rozhodnutí, ne lovit odpověď za každou cenu

Dobré follow-up e-maily jsou krátké, konkrétní a navazují na domluvený krok. Špatné follow-upy předstírají naléhavost, posílají „jen se připomínám“ v pěti variantách a po třech týdnech připomínají komára s LinkedIn účtem.

Struktura follow-upu:

- poděkování za čas,
- shrnutí problému vlastními slovy,
- připomenutí ukázaného řešení,
- otevřené otázky nebo rizika,
- jeden konkrétní další krok,
- jasná možnost říct „teď ne“.

Příklad:

```markdown
Předmět: Shrnutí dema k privacy-first poptávkám

Dobrý den,

díky za dnešní hovor. Zapsal jsem si, že hlavní problém je ruční třídění poptávek a nejasný přehled, kdo má další krok. Zároveň je pro vás důležité, aby data zůstávala v evropském provozu a šla jednoduše exportovat.

V demu jsme prošli:
- jednoduchý formulář bez zbytečných polí,
- přiřazení vlastníka a stavu poptávky,
- týdenní agregovaný report,
- nastavení retence a přístupů.

Navržený další krok: pošlu krátký návrh pilotu na 30 dní se dvěma variantami rozsahu. Pokud se vám změnily priority, napište mi klidně „teď ne“ a nebudu vás honit sérií robotických připomínek.

Cody / Dreamind
```

### 6) Zaveď konec pipeline jako normální stav

Každý lead nemusí skončit obchodem. A už vůbec nemusí zůstat v pipeline, aby se nikdo necítil provinile. Malý tým potřebuje čistý pohled na reálné příležitosti.

Rozlišuj stavy:

- **Aktivní:** existuje domluvený další krok s datem.
- **Čekáme:** zákazník má jasně říct něco konkrétního do určitého data.
- **Nurture:** člověk chce obsah, ale nechce obchodní tlak.
- **Ne teď:** problém existuje, ale není priorita.
- **Nevhodné:** nesedí rozpočet, provozní požadavky, velikost nebo očekávání.
- **Uzavřeno:** vyhráno, prohráno nebo smazáno podle retenčních pravidel.

U každého stavu si napiš, jak dlouho v něm může záznam zůstat a co se pak stane. Například:

- „Čekáme“ po 30 dnech bez odpovědi přepnout na „Ne teď“.
- „Ne teď“ po 90 dnech zkontrolovat, jestli existuje legitimní důvod kontakt držet.
- „Nevhodné“ po vyhodnocení uzavřít a ponechat jen agregovaný důvod pro produktové učení.

Tým se pak učí z trhu, ale nestaví si databázi lidí, kteří kdysi možná projevili zájem. To je rozdíl mezi obchodem a archeologií.

### Checklist pro privacy-first B2B demo

- [ ] Před hovorem existuje pracovní hypotéza problému, rozhodnutí a dalšího kroku.
- [ ] Demo ukazuje cestu k výsledku, ne kompletní produktové menu.
- [ ] Otázky míří na proces, dopad, riziko a datové požadavky.
- [ ] CRM poznámky obsahují jen informace potřebné pro obchodní rozhodnutí.
- [ ] Citlivé nebo osobní detaily se nezapisují „pro jistotu“.
- [ ] Follow-up shrnuje problém, domluvu a jeden další krok.
- [ ] Každý pipeline stav má pravidlo, kdy se záznam uzavře, smaže nebo archivuje.
- [ ] U leadů bez dalšího kroku se nepouští nekonečná automatizace připomínek.


## Příloha O: Produktová roadmapa bez sledování každého kliknutí

Roadmapa malého SaaS týmu nemá být galerie přání, politická mapa interních tlaků ani hřbitov nápadů, které zněly dobře po druhé kávě. Má být praktický nástroj pro rozhodování: co uděláme teď, proč to dává smysl a podle čeho poznáme, že to pomohlo.

Privacy-first roadmapa navíc respektuje jednu důležitou hranici: nemusíš vědět všechno o každém uživateli, abys mohl stavět lepší produkt. Často stačí kombinovat agregovaná produktová data, support signály, obchodní rozhovory, dobrovolnou zpětnou vazbu a technické riziko.

> **Codyho komentář:** Když tým tvrdí „potřebujeme session replay, jinak nevíme, co zlepšit“, většinou ve skutečnosti potřebuje lépe psát hypotézy, mluvit se zákazníky a uklidit support inbox. Session replay je někdy užitečný, ale není náhradou za přemýšlení. Bohužel, přemýšlení zatím nemá hezký dashboard.

### 1) Roadmapa začíná produktovými tématy, ne seznamem funkcí

Funkce je konkrétní řešení. Téma je problém nebo směr hodnoty. Malý tým by měl plánovat hlavně v tématech, protože konkrétní řešení se po rozhovorech často změní.

Slabá roadmapa:

- „Přidat export do PDF.“
- „Přidat integraci s účetnictvím.“
- „Předělat dashboard.“

Lepší roadmapa:

- „Zjednodušit předání výstupu klientovi.“
- „Snížit ruční práci při fakturaci.“
- „Zkrátit čas k prvnímu pochopení stavu projektu.“

Téma nechává prostor pro lepší řešení. Export do PDF může být správná odpověď, ale může se ukázat, že zákazník ve skutečnosti potřebuje veřejný read-only odkaz, pravidelný e-mailový souhrn nebo jednodušší sdílení tabulky.

### 2) Každý nápad zapiš jako hypotézu

Nápad bez hypotézy je jen poznámka s ambicemi. Před zařazením do roadmapy ho přepiš do jednoduché struktury:

```text
Věříme, že [typ zákazníka]
má problém s [situace / úkol],
protože [signál, který jsme viděli].

Když uděláme [změna / experiment],
očekáváme [měřitelný nebo pozorovatelný výsledek].

Poznáme to podle [metrika / rozhovor / support signál]
bez toho, abychom museli sledovat jednotlivce napříč webem.
```

Příklad:

```text
Věříme, že menší agentury
mají problém rychle vysvětlit klientovi stav projektu,
protože se v supportu opakuje dotaz „kde to teď stojí?“.

Když přidáme sdílený projektový přehled s jasným stavem,
očekáváme méně ručních status e-mailů a rychlejší schvalování.

Poznáme to podle počtu status dotazů v supportu,
počtu vytvořených sdílených přehledů a kvalitativní zpětné vazby z pěti rozhovorů.
```

Všimni si, že k tomu nepotřebuješ sledovat konkrétní pohyb myši, osobní profil uživatele ani reklamní identifikátor. Potřebuješ rozumný signál, ne digitální mikroskop přilepený na čelo.

### 3) Prioritizuj podle hodnoty, rizika a důvěry

Klasické prioritizační frameworky se často zvrhnou v tabulku, kde vyhraje ten, kdo nejlépe odhadne čísla, která nikdo neověřil. Pro malý tým stačí jednodušší skóre od 1 do 5:

| Kritérium | Otázka | Poznámka |
| --- | --- | --- |
| Hodnota pro zákazníka | Pomůže to řešit častý nebo drahý problém? | Dej vyšší skóre tomu, co zákazník aktivně pozná. |
| Obchodní dopad | Pomůže to aktivaci, retenci, prodeji nebo snížení supportu? | Ne každá dobrá funkce je dobrý další krok. |
| Důvěra v signál | Máme data, rozhovory nebo opakovaný support signál? | Nízká důvěra znamená experiment, ne velký projekt. |
| Náročnost | Kolik práce, koordinace a rizika to přidá? | Tady nižší náročnost znamená vyšší prioritu. |
| Privacy dopad | Přidává to sběr dat, integraci nebo nového dodavatele? | Vysoký dopad vyžaduje review před vývojem. |

Praktické pravidlo: pokud má položka vysokou hodnotu, ale nízkou důvěru, nedávej ji rovnou do vývoje. Udělej nejdřív menší test: prototyp, rozhovor, ruční concierge řešení, landing page pro existující zákazníky nebo krátké vysvětlení v dokumentaci.

### 4) Odděl discovery, delivery a údržbu

Roadmapa se rozpadá, když všechno vypadá jako „feature“. Ve skutečnosti má produktová práce tři různé režimy:

1. **Discovery** — ověřujeme problém, řešení a ochotu používat nebo platit.
2. **Delivery** — stavíme ověřenou změnu do produktu.
3. **Údržba** — zlepšujeme stabilitu, bezpečnost, dokumentaci, výkon a provozní dluh.

Malý SaaS tým by měl mít v roadmapě všechny tři. Pokud děláš jen delivery, rychle stavíš věci, které možná nikdo nechce. Pokud děláš jen discovery, máš krásné poznámky a produkt stojí. Pokud ignoruješ údržbu, jednoho dne tě technický dluh pozdraví jako účtenka z restaurace, kde sis objednával poslepu.

Jednoduchý měsíční poměr pro malý tým:

- 50–60 % kapacity na delivery,
- 20–30 % na discovery,
- 15–25 % na údržbu a bezpečnost.

Ber to jako výchozí rytmus, ne zákon vytesaný do backlogu. Pokud máš incident, údržba vyhrává. Pokud nemáš jasný problém, discovery vyhrává. Pokud máš ověřenou poptávku a zákazníci čekají, delivery vyhrává.

### 5) Měř dopad roadmapy bez osobního profilování

Každá větší položka by měla mít předem daný „definition of impact“ — co se má změnit po vydání. Nemusí jít vždy o tvrdou konverzi. Užitečné jsou i kombinované signály:

- méně support dotazů na konkrétní téma,
- kratší čas k první hodnotné akci,
- více dokončených projektů nebo exportů na agregované úrovni,
- více aktivních týmů v účtu, ne více sledovaných lidí,
- lepší odpovědi v krátkém dobrovolném dotazníku,
- méně manuální práce v interním procesu.

Před vydáním si napiš:

```text
Po 30 dnech zkontrolujeme:
- agregovanou metriku A,
- support signál B,
- zpětnou vazbu od zákazníků C,
- technické dopady D.

Pokud se nic nezmění, rozhodneme:
- upravit,
- stáhnout,
- ponechat bez další investice,
- nebo pokračovat druhou iterací.
```

Tím se vyhneš nekonečnému „ještě tomu dáme čas“. Čas je dobrý sluha, ale mizerný produktový manažer.

### 6) Šablona roadmapové karty

Používej jednu kartu pro větší změny. Krátkou, ale dost konkrétní na to, aby se k ní tým mohl vrátit za měsíc a neptal se: „Co tím básník chtěl říct?“

```text
## Název tématu

### Pro koho to je
[segment zákazníků / role / typ účtu]

### Problém
[konkrétní situace, která bolí]

### Signály
- [support dotaz / rozhovor / agregovaná metrika]
- [obchodní nebo retenční signál]

### Hypotéza
Věříme, že když [změna], tak [výsledek], protože [důvod].

### Možná řešení
- Nejmenší test: [ruční řešení / prototyp / copy změna]
- Produktová verze: [funkce nebo workflow]
- Co teď neděláme: [hranice rozsahu]

### Privacy review
- Jaká nová data sbíráme?
- Potřebujeme nového dodavatele?
- Dá se dopad změřit agregovaně?
- Jak dlouho data držíme?

### Definition of impact
- Primární signál: [metrika nebo kvalitativní výsledek]
- Kontrola po: [14 / 30 / 60 dnech]
- Rozhodnutí po kontrole: [pokračovat / upravit / ukončit]
```

### Checklist pro privacy-first roadmapu

- [ ] Plánuješ podle problémových témat, ne jen podle seznamu funkcí?
- [ ] Má každá větší položka hypotézu, signál a očekávaný dopad?
- [ ] Rozlišuješ discovery, delivery a údržbu?
- [ ] Ověřuješ nejisté věci malým testem před velkou implementací?
- [ ] Má každá položka privacy review před vývojem, ne až před releasem?
- [ ] Umíš dopad vyhodnotit agregovaně nebo dobrovolnou zpětnou vazbou?
- [ ] Mažeš nebo archivuješ staré roadmapové nápady, které už nemají vlastníka ani důvod?


## Příloha P: Měsíční report, který vede k rozhodnutí místo dashboardové mlhy

Měsíční report pro malý web nebo SaaS nemá být výstava grafů. Má být krátký dokument, který pomůže zakladateli, týmu nebo klientovi rozhodnout, co udělat dál. Pokud po přečtení reportu nikdo neví, jestli zlepšit onboarding, přepsat landing page, opravit formulář nebo nechat věci být, report selhal. Ale aspoň měl pěkné barvičky, takže marketingová galerie přežila.

Privacy-first report pracuje hlavně s agregovanými daty, konkrétními pozorováními a jasným kontextem. Nepotřebuje sledovat jednotlivce napříč webem, nahrávat session replay každého návštěvníka ani spojovat marketingové kliknutí s osobním profilem. Potřebuje ukázat, kde vznikla hodnota, kde se ztratila pozornost a jaké rozhodnutí z toho plyne.

> **Codyho komentář:** Dashboard je lednička. Je užitečný, když víš, co hledáš. Měsíční report je večeře: někdo z dostupných surovin udělá smysluplný závěr. Nepleť si ty dvě věci, jinak budeš každý měsíc jen otevírat ledničku a říkat „hm, zajímavé“.

### 1) Začni otázkami, ne grafy

Než otevřeš analytiku, napiš tři až pět otázek, na které má report odpovědět. Ušetříš tím spoustu času a omezíš pokušení hledat „něco zajímavého“ jen proto, že nástroj umí třicet filtrů.

Dobré otázky pro firemní web:

- Přivádí obsah relevantní návštěvy na stránky služeb?
- Které stránky pomáhají lidem udělat další krok?
- Kde návštěvník pravděpodobně nedostane dost informací?
- Který kanál přinesl kvalitní poptávky, ne jen provoz?
- Co se vyplatí příští měsíc upravit, rozšířit nebo ukončit?

Dobré otázky pro SaaS:

- Kolik nových účtů došlo k první hodnotné akci?
- Kde v onboardingu vzniká tření?
- Která změna z posledního měsíce měla pozorovatelný dopad?
- Který typ zákazníků se vrací a který mizí?
- Co brání retenci: produkt, očekávání, cena, support nebo špatná aktivace?

Špatná otázka zní: „Co se stalo v datech?“ To je pozvánka do bažiny. Lepší otázka zní: „Jaké rozhodnutí potřebujeme udělat a která data nám s ním pomohou?“

### 2) Použij jednu stránku pro vedení a přílohu pro detail

Zakladatel nebo klient často nepotřebuje dvacet screenshotů. Potřebuje vědět, co se změnilo, proč to pravděpodobně nastalo a co doporučuješ. Měsíční report proto rozděl na dvě vrstvy:

1. **Jednostránkové shrnutí** — závěry, doporučení a rizika.
2. **Detailní příloha** — tabulky, grafy, poznámky, odkazy na kampaně a technické detaily.

Jednostránkové shrnutí může mít tuto strukturu:

```text
## Měsíční report: [měsíc / projekt]

### 1. Hlavní závěr
[Jedna až tři věty: co se stalo a proč na tom záleží.]

### 2. Co fungovalo
- [signál + interpretace]
- [signál + interpretace]

### 3. Co brzdilo růst nebo důvěru
- [problém + dopad]
- [problém + dopad]

### 4. Doporučené rozhodnutí
[co udělat příští měsíc, vlastník, rozsah]

### 5. Co neměříme a proč
[hranice dat, privacy poznámka, nejistoty]
```

Sekce „Co neměříme a proč“ je malý detail s velkým dopadem. Ukazuje, že privacy-first přístup není lenost, ale záměr. Když zákazník ví, že nesleduješ jednotlivce napříč webem, ale přesto umíš dělat dobrá rozhodnutí, buduješ důvěru.

### 3) Odděl signál, interpretaci a rozhodnutí

Nejčastější chyba reportů je míchání tří věcí dohromady: dat, domněnek a doporučení. Pak vznikají věty typu „návštěvnost spadla, takže musíme víc postovat na LinkedIn“. Možná. Nebo skončila kampaň, vypadl tracking, změnila se sezóna, publikoval se slabší obsah, nebo se lidé konečně rozhodli dělat něco zdravějšího než číst B2B blogy v neděli večer.

Piš report v této logice:

```text
Signál:
Organická návštěvnost článků o onboarding checklistu meziměsíčně vzrostla.

Interpretace:
Téma pravděpodobně odpovídá reálné fázi rozhodování malých SaaS týmů.

Doporučení:
Přidat navazující článek o onboarding e-mailech a propojit ho s šablonou poptávky.

Jistota:
Střední — máme agregovaná data z webu a dvě podobné otázky v supportu.
```

Tím chráníš tým před falešnou přesností. Data sama nemluví. Maximálně tak šustí v exportu. Interpretaci dělá člověk a měl by u ní přiznat míru jistoty.

### 4) Sleduj rozhodovací metriky, ne marnivost

Metrika je užitečná, pokud mění rozhodnutí. Pokud ji jen sleduješ, protože vypadá dobře v grafu, je to dekorace.

Pro web dává smysl sledovat:

- návštěvy a unikátní návštěvníky na agregované úrovni,
- top stránky podle role v cestě zákazníka,
- zdroje návštěvnosti podle kanálů,
- kliknutí na hlavní CTA, formuláře nebo přímé kontakty,
- výkon evergreen obsahu v čase,
- technické signály: rychlost, chyby, dostupnost, indexace.

Pro SaaS přidej:

- nové účty, aktivované účty a první hodnotnou akci,
- trial-to-paid nebo demo-to-customer konverzi,
- churn a důvody odchodu v agregované podobě,
- support témata podle četnosti a dopadu,
- využití klíčových funkcí bez osobního profilování,
- dopad posledních releasů podle předem dané definice.

Marnivé metriky nejsou zakázané, ale nesmí řídit tým. Počet impresí může být užitečný pro dosah značky. Sám o sobě ale neříká, jestli produkt někomu pomohl, jestli web prodává nebo jestli onboarding funguje.

### 5) Každé doporučení musí mít vlastníka a limit

Report bez následné akce je archivní sport. Každé doporučení proto přepiš do malé provozní karty:

```text
## Doporučení
Přepsat hero sekci stránky /sluzby tak, aby jasněji slibovala výsledek pro B2B SaaS týmy.

### Proč
Stránka má návštěvnost z relevantních článků, ale nízké kliknutí na kontakt.

### Rozsah
Copy hero sekce, CTA, dvě důkazní věty, žádný redesign.

### Vlastník
[jméno / role]

### Termín
Do [datum]

### Kontrola dopadu
Po 30 dnech: kliknutí na CTA, kvalita poptávek, interní feedback obchodu.
```

Limit rozsahu je důležitý. Bez něj se z doporučení „přepsat hero“ stane redesign webu, výměna fontu, debata o logu a tři hodiny hledání ikonky, která „působí víc enterprise“. Tudy ne, přátelé.

### 6) Vzor měsíčního privacy-first reportu

```text
## Měsíční privacy-first report

Projekt: [název]
Období: [měsíc]
Připravil: [jméno]

### Hlavní rozhodnutí pro tento měsíc
[jedna věta]

### Shrnutí
- Co se zlepšilo: [signál]
- Co se zhoršilo nebo stagnuje: [signál]
- Největší příležitost: [oblast]
- Největší riziko: [oblast]

### Web / marketing
- Top obsah: [stránky + interpretace]
- Kanály: [agregované zdroje]
- Konverze: [CTA / formuláře / kontakt]
- Doporučení: [jedna až tři akce]

### Produkt / SaaS
- Aktivace: [první hodnotná akce]
- Retence: [agregovaný signál]
- Support: [nejčastější témata]
- Doporučení: [jedna až tři akce]

### Privacy poznámky
- Nová data sbíraná tento měsíc: [ano/ne + co]
- Noví dodavatelé nebo integrace: [ano/ne]
- Data k odstranění nebo archivaci: [co a kdy]
- Co záměrně neměříme: [hranice]

### Rozhodnutí a follow-up
- [akce] — vlastník: [role] — kontrola: [datum]
- [akce] — vlastník: [role] — kontrola: [datum]
```

### Checklist pro měsíční report

- [ ] Začíná report otázkami, na které má odpovědět?
- [ ] Je hlavní shrnutí čitelné bez otevření analytiky?
- [ ] Odděluješ signál, interpretaci, doporučení a míru jistoty?
- [ ] Každá metrika pomáhá rozhodnutí, ne jen dekoraci grafu?
- [ ] Obsahuje report privacy poznámku: nová data, dodavatelé, retence a hranice měření?
- [ ] Má každé doporučení vlastníka, rozsah a datum kontroly?
- [ ] Archivuješ reporty tak, aby šlo za čtvrtletí zkontrolovat, která rozhodnutí opravdu pomohla?


## Příloha Q: Retence a mazání dat bez digitálního syslení

Data retention zní jako něco, co se řeší až ve chvíli, kdy firma dospěje, má právní oddělení a někdo vlastní tabulku s názvem `final_final_v7.xlsx`. Jenže malý SaaS nebo firemní web si tím umí ušetřit hodně stresu už od prvního měsíce. Když víš, jak dlouho držíš poptávky, logy, analytiku, support tickety a exporty, nemusíš později uklízet datové skladiště lopatou.

Princip je jednoduchý: osobní údaje se mají zpracovávat jen pro konkrétní účel, v přiměřeném rozsahu a ne déle, než je potřeba. Evropská komise to popisuje v principech GDPR jako omezení účelu, minimalizaci dat a omezení uložení ([European Commission: Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en)). Prakticky to neznamená mazat všechno hned. Znamená to umět vysvětlit, proč data držíš, kdo je používá a kdy zmizí.

> **Codyho komentář:** Nejhorší retenční politika je „mažeme, až dojde místo“. To není strategie, to je datový ekvivalent nevynešeného sklepa.

### 1) Začni seznamem datových zásuvek

Nezačínej právním dokumentem. Začni obyčejným seznamem míst, kde se data hromadí. U malého projektu to často není databáze, ale směs formulářů, e-mailu, CRM, analytiky, logů, supportu, fakturace a exportů ve sdílené složce.

První inventura může vypadat takto:

| Místo | Typ dat | Účel | Vlastník | Retence | Mazání |
|---|---|---|---|---|---|
| Kontaktní formulář | jméno, e-mail, zpráva | vyřízení poptávky | obchod | 12 měsíců od poslední komunikace | ručně při měsíční kontrole |
| Produktová databáze | účet, role, nastavení | provoz služby | produkt | po dobu účtu + 30 dní | automaticky po zrušení |
| Aplikační logy | technické události, IP podle nastavení | bezpečnost a debugging | vývoj | 30–90 dní | automatická rotace |
| Analytika webu | agregované návštěvy | měření výkonu obsahu | marketing | 24 měsíců agregovaně | nastavení v analytice |
| Support | zprávy, přílohy | řešení požadavků | support | 24 měsíců od uzavření | periodická anonymizace |

Tabulka nemusí být dokonalá. Musí být živá. Pokud tým přidá nový formulář, integraci nebo automatizaci, doplní řádek. Když se tabulka neaktualizuje, stane se z ní dekorace pro audit. Hezká, ale k ničemu.

### 2) Rozliš provozní, obchodní a právní důvody

Ne všechna data mají stejný rytmus mazání. Některá potřebuješ pro provoz služby, jiná pro obchodní návaznost a některá kvůli zákonným povinnostem. Problém vzniká, když se všechno hodí do jedné hromady „radši to necháme“.

Rozděl si data do tří skupin:

- **Provozní data:** účty, nastavení, oprávnění, technické logy a bezpečnostní události. Drž je tak dlouho, jak jsou potřeba pro službu a bezpečný provoz.
- **Obchodní data:** poptávky, demo poznámky, follow-upy, kvalifikace leadů a preference zákazníka. Drž je jen po dobu, kdy existuje rozumný obchodní kontext.
- **Právní a účetní data:** faktury, smlouvy, objednávky a povinné záznamy. U nich retenci neurčuje marketingový optimismus, ale právní a účetní požadavky.

Když si nejsi jistý, napiš k řádku „ověřit s účetní / právníkem“ místo toho, aby sis vymyslel univerzální pravidlo. E-book má být praktický, ne věštecká koule s Markdownem.

### 3) Mazání musí být proces, ne heroická ruční akce

Ruční mazání funguje první měsíc. Pak někdo odjede na dovolenou, přijde launch, rozbije se formulář a najednou máš tři roky staré leady, které už nikdo nechce ani omylem pozdravit.

U každé datové zásuvky určete jeden ze tří režimů:

- **Automatická expirace:** nejlepší pro logy, session data, dočasné tokeny, exporty a technické cache.
- **Periodická kontrola:** vhodná pro obchodní leady, support tickety a rozpracované poptávky, kde je potřeba lidský kontext.
- **Událostní mazání:** spouští se při zrušení účtu, ukončení smlouvy, vyřízení žádosti nebo uzavření projektu.

Praktický rytmus pro malý tým:

- každý týden zkontroluj nové zdroje dat, které přibyly během vývoje nebo marketingu,
- každý měsíc projdi leady, support a exporty,
- každé čtvrtletí ověř, že automatická expirace opravdu běží,
- jednou za půl roku udělej mini audit dodavatelů a retenčních nastavení.

### 4) Exporty jsou tichý zabiják pořádku

Největší nepořádek často nevzniká v aplikaci, ale kolem ní: CSV export z analytiky, spreadsheet s leady, stažené přílohy ze supportu, kopie databáze pro debugging, screenshoty s osobními údaji v issue trackeru.

Zaveď jednoduché pravidlo: každý export má mít účel, vlastníka a datum smazání. Pokud to nejde napsat do názvu nebo poznámky, export pravděpodobně neměl vzniknout.

Dobré názvy:

```text
2026-10-leads-konference-vyhodnoceni-smazat-2026-11-15.csv
2026-10-support-anonymizovany-vzorky-pro-kb.md
2026-10-incident-log-export-bez-osobnich-udaju.txt
```

Špatné názvy:

```text
export.csv
ondrej_data_final.xlsx
users_backup_new_new_REAL.csv
```

Jasně, druhá sada působí lidsky. Právě proto je nebezpečná.

### 5) Žádosti uživatelů neřeš z paměti

I malý SaaS by měl mít jednoduchý postup pro žádosti typu „smažte můj účet“, „pošlete mi moje data“ nebo „opravte e-mail“. Nemusíš hned stavět portál s deseti obrazovkami. Stačí interní checklist, který zabrání tomu, že každý požadavek vyřeší jinak.

Minimální postup:

1. Ověř identitu žadatele přiměřeně k riziku.
2. Zapiš datum přijetí, typ žádosti a odpovědnou osobu.
3. Najdi relevantní datové zásuvky podle inventury.
4. Proveď akci: export, oprava, omezení zpracování, anonymizace nebo smazání.
5. Zapiš, co bylo provedeno a kdy.
6. Odpověz člověku lidsky, bez právničtiny na tři obrazovky.

Interně si nech stopu o vyřízení žádosti, ale neukládej víc detailů, než potřebuješ. Cílem je prokazatelnost, ne muzeum osobních údajů.

### 6) Šablona retenční politiky pro malý SaaS

Použij ji jako pracovní dokument v repozitáři nebo interní wiki. Důležité je, aby ji někdo vlastnil a aktualizoval při změnách produktu.

```markdown
## Retenční politika: [produkt / web]

### Vlastník dokumentu
- Role: [např. produkt / CTO / operations]
- Kontrola: [měsíčně / čtvrtletně]
- Poslední aktualizace: [datum]

### Datové zásuvky
| Místo | Typ dat | Účel | Právní / provozní důvod | Retence | Mazání | Vlastník |
|---|---|---|---|---|---|---|
| [systém] | [data] | [účel] | [důvod] | [doba] | [automaticky / ručně] | [role] |

### Exporty
- Kde exporty vznikají: [místa]
- Kdo je smí vytvářet: [role]
- Maximální doba uložení: [doba]
- Výjimky: [kdy a kdo je schvaluje]

### Žádosti uživatelů
- Kontaktní místo: [e-mail / formulář]
- Odpovědná role: [role]
- Evidujeme: datum, typ žádosti, stav, datum vyřízení
- Neevidujeme: zbytečné kopie dokladů, citlivý obsah bez důvodu

### Měsíční kontrola
- [ ] Přibyly nové formuláře, integrace nebo exporty?
- [ ] Proběhlo mazání podle plánu?
- [ ] Zůstaly někde dočasné soubory nebo ruční exporty?
- [ ] Jsou support a obchodní data stále relevantní?
- [ ] Je potřeba upravit texty v privacy policy?
```

### Checklist pro retenci a mazání dat

- [ ] Máš seznam hlavních míst, kde vznikají osobní nebo provozně citlivá data?
- [ ] Je u každého místa jasný účel, vlastník a retenční doba?
- [ ] Rozlišuješ provozní, obchodní a právní důvody uložení?
- [ ] Mají logy, exporty a dočasné soubory automatickou expiraci nebo měsíční kontrolu?
- [ ] Ví tým, jak postupovat při žádosti o smazání, export nebo opravu dat?
- [ ] Jsou ruční exporty pojmenované tak, aby bylo jasné, kdy je smazat?
- [ ] Kontroluješ retenční politiku při každé nové integraci, kampani nebo změně onboardingu?


## Příloha R: Incidentová komunikace a status page bez paniky a kouřové clony

Incidenty nejsou otázka „jestli“, ale „kdy a jak moc to bude bolet“. U malého webu to může být výpadek formuláře, rozbitý deploy, chyba v DNS, nedoručené e-maily nebo zmatek v platbách. U SaaS produktu přibývá autentizace, role, integrace, data zákazníků, importy, exporty a všechno ostatní, co má talent rozbít se přesně v pátek odpoledne.

ENISA v materiálech pro malé a střední firmy opakovaně zdůrazňuje připravenost na incidenty, řízení rizik, zálohy, kontrolu přístupů a kontinuitu provozu jako praktický základ kyberbezpečnosti ([ENISA: Cybersecurity guide for SMEs](https://www.enisa.europa.eu/publications/cybersecurity-guide-for-smes), [ENISA: Cybersecurity for SMEs — Challenges and Recommendations](https://www.enisa.europa.eu/publications/enisa-report-cybersecurity-for-smes)). Přeloženo do řeči malého týmu: nestačí mít monitoring. Musíš vědět, kdo vstává od kafe, kdo rozhoduje a kdo zákazníkům řekne pravdu bez mlžení.

> **Codyho komentář:** Incidentová komunikace není PR divadlo. Je to provozní hygiena. Zákazník obvykle odpustí chybu. Hůř odpouští ticho, mlžení a e-mail ve stylu „u některých uživatelů mohlo dojít k částečné degradaci zážitku“.

### 1) Nejdřív rozliš výpadek, degradaci a bezpečnostní podezření

Ne každý problém potřebuje stejný režim. Když všechno nazveš incidentem, tým otupí. Když naopak všechno shodíš jako „jen menší glitch“, jednou přehlédneš průšvih.

Praktické rozdělení:

- **Výpadek:** služba nebo klíčová část nefunguje. Například nejde přihlášení, formulář neodesílá poptávky nebo API vrací chyby.
- **Degradace:** služba běží, ale pomalu, nespolehlivě nebo s omezenou funkcí. Například se zpožďují e-maily, exporty čekají ve frontě nebo admin rozhraní padá u části účtů.
- **Datová chyba:** systém zobrazuje, ukládá nebo posílá nesprávná data. Sem patří i špatně spárované faktury, chybné role a importy, které přepíšou uživatelská nastavení.
- **Bezpečnostní podezření:** neobvyklý přístup, uniklý token, podezřelý export, kompromitovaný účet nebo chyba, která mohla zpřístupnit data.

Každá kategorie má mít jiný práh komunikace. Výpadek veřejné služby patří na status page rychle. Datová chyba může nejdřív potřebovat izolaci dopadu. Bezpečnostní podezření vyžaduje opatrnost: neslibuj víc, než víš, a právní posouzení řeš s člověkem, který má k tématu kompetenci.

### 2) Před incidentem si rozděl role

V incidentu není čas zakládat komisi pro výběr komise. Stačí čtyři role. V malém týmu může jeden člověk držet víc rolí, ale role musí být pojmenované.

| Role | Odpovědnost | Typická otázka |
|---|---|---|
| Velitel incidentu | drží prioritu, rozhoduje o dalším kroku | Co je teď nejdůležitější? |
| Technický vlastník | diagnostikuje, opravuje, ověřuje | Kde je příčina a jak ji izolujeme? |
| Komunikátor | píše status, odpovědi a interní shrnutí | Co ví zákazník a kdy dostane update? |
| Evidence keeper | zapisuje časy, rozhodnutí, dopad a odkazy | Co se stalo a jak to později vyhodnotíme? |

Pokud jste dva, nevadí. Jeden řeší techniku, druhý drží komunikaci a zápis. Pokud jste jeden, napiš si role jako checklist. Ano, mluvíš sám se sebou. Ne, není to divné. Divné je hledat po incidentu v historii chatu, kdy přesně se co stalo.

### 3) Status page piš jako navigaci, ne jako sebeobranu

Status page má zákazníkovi odpovědět na čtyři otázky:

1. Co je rozbité?
2. Koho se to týká?
3. Co má zákazník dělat nebo nedělat?
4. Kdy bude další update?

Dobrá první zpráva:

```text
Vyšetřujeme problém s odesíláním kontaktních formulářů.

Dopad: nové poptávky se mohou zpozdit nebo nemusí dorazit do e-mailu.
Co dělat: pokud jde o urgentní zprávu, napište přímo na podpora@example.cz.
Další update: do 30 minut nebo dříve, pokud budeme mít potvrzenou příčinu.
```

Slabá první zpráva:

```text
Někteří uživatelé mohou zaznamenat dočasné potíže.
```

Ta druhá věta neříká nic. Je to kouřová clona v kapesním balení. Uživatel pořád neví, jestli má čekat, opakovat akci, poslat e-mail, nebo si uvařit čaj a doufat.

### 4) Komunikuj v rytmu, který snižuje support zátěž

Ticho vyrábí support tickety. Když lidé nevidí update, ptají se individuálně. Tím týmu přidávají práci přesně ve chvíli, kdy potřebuje opravovat problém.

Nastav si rytmus podle závažnosti:

- **Kritický výpadek:** první status do 15 minut od potvrzení, další update každých 30 minut.
- **Degradace:** první status po ověření dopadu, další update každých 60 minut nebo při změně stavu.
- **Menší chyba bez širokého dopadu:** status jen pokud se týká viditelné části služby nebo opakovaně zasahuje zákazníky.
- **Bezpečnostní podezření:** komunikuj potvrzená fakta, ne domněnky; interně drž podrobný časový záznam.

U každého updatu napiš, jestli se něco změnilo. I věta „příčinu stále ověřujeme, další update v 15:30“ je lepší než prázdno. Prázdno má v B2B komunikaci zvuk padající důvěry.

### 5) Interní zápis je stejně důležitý jako veřejná zpráva

Veřejný status má být stručný. Interní zápis má být přesný. Po incidentu z něj vznikne postmortem, úkoly a zlepšení monitoringu. Pokud zápis neexistuje, tým se učí z pocitů. Pocity jsou fajn na playlist, horší na provoz SaaS.

Minimální interní incident log:

```text
Incident: [název]
Začátek dopadu: [čas]
Detekce: [čas a zdroj]
Kategorie: výpadek / degradace / datová chyba / bezpečnostní podezření
Dopad: [koho a čeho se týká]
Aktuální hypotéza: [co si myslíme]
Ověřená fakta: [co víme]
Rozhodnutí: [čas + kdo + co]
Komunikace: [status page / e-mail / support makro]
Oprava: [odkaz na commit, deploy, konfiguraci]
Ověření: [jak víme, že je opraveno]
Follow-up úkoly: [vlastník + termín]
```

U privacy-first provozu si hlídej, aby incident log sám nevytvářel další problém. Nevkládej do něj celé osobní údaje, tokeny, tajné klíče, surové exporty ani screenshoty s citlivými daty. Odkazuj na bezpečné úložiště a používej anonymizované příklady.

### 6) Po incidentu udělej krátké postmortem bez hledání viníka

Postmortem není soudní síň. Cílem není najít člověka, který „to rozbil“. Cílem je najít systémové zlepšení: lepší alert, test, fallback, dokumentaci, proces schvalování nebo omezení přístupu.

Struktura na 30 minut:

- **5 minut:** co se stalo a jaký byl dopad,
- **10 minut:** časová osa od první příčiny po opravu,
- **10 minut:** co pomohlo a co brzdilo,
- **5 minut:** maximálně tři follow-up úkoly s vlastníkem a termínem.

Dobré follow-up úkoly jsou konkrétní:

- přidat alert na nárůst chyb formuláře,
- doplnit integrační test pro odeslání poptávky,
- zavést expiraci starých API tokenů,
- přepsat support makro pro výpadek plateb,
- aktualizovat runbook pro DNS změny.

Špatné follow-up úkoly jsou mlha:

- zlepšit monitoring,
- být opatrnější,
- dávat větší pozor,
- lépe komunikovat.

Ano, všechno zní hezky. Ne, nic z toho nejde zkontrolovat.

### Šablona incidentové komunikace

```text
Název: [stručný popis problému]
Stav: vyšetřujeme / identifikováno / opravujeme / monitorujeme / vyřešeno

Co se děje:
[Jedna až tři věty bez technického balastu.]

Dopad:
[Koho se problém týká, jak se projevuje a co nevíme.]

Co děláme:
[Aktuální krok týmu.]

Co má udělat zákazník:
[Nic / náhradní postup / kontakt / neopakovat akci.]

Další update:
[konkrétní čas nebo podmínka]
```

### Checklist pro incidentovou komunikaci

- [ ] Máš pojmenované kategorie incidentů: výpadek, degradace, datová chyba, bezpečnostní podezření?
- [ ] Existují role pro incident: velitel, technický vlastník, komunikátor a evidence keeper?
- [ ] Umíš vydat první status bez hledání šablony v panice?
- [ ] Obsahuje status dopad, doporučený krok pro zákazníka a čas dalšího updatu?
- [ ] Vedeš interní časovou osu bez citlivých údajů, tokenů a zbytečných osobních dat?
- [ ] Máš support makro pro nejčastější incidenty: formulář, platby, přihlášení, e-maily, importy?
- [ ] Děláš po incidentu krátké postmortem s maximálně třemi konkrétními úkoly?
- [ ] Kontroluješ po opravě nejen technický stav, ale i zákaznickou komunikaci a případné follow-upy?


## Příloha S: Experimenty a A/B testy bez stalkovací laboratoře

A/B testování má špatnou pověst hlavně proto, že se často zvrhne v nekonečné sledování lidí, mikrosegmenty, heatmapy s osobními záznamy a dashboardy, které vypadají chytřeji než rozhodnutí, která z nich vylezou. Přitom malý tým většinou nepotřebuje vědět, jak konkrétní člověk pohnul myší. Potřebuje zjistit, jestli nová formulace, struktura stránky nebo onboardingový krok pomáhá zákazníkovi udělat lepší rozhodnutí.

Privacy-first experiment není zákaz experimentovat. Je to zákaz tvářit se, že každý klik je psychologický román, který musíme archivovat pro budoucí generace.

> **Codyho komentář:** Nejlepší experiment je ten, který jde vysvětlit zákazníkovi jednou větou bez toho, aby ses u toho začal potit jako router v racku bez klimatizace.

### 1) Začni hypotézou, ne nástrojem

Špatný začátek:

> „Nasadíme A/B testing nástroj a uvidíme, co se stane.“

Lepší začátek:

> „Myslíme si, že návštěvníci pricing stránky váhají, protože nerozumí rozdílu mezi tarify. Pokud přidáme srovnávací tabulku podle typických situací, zvýší se počet kliknutí na domluvení dema a sníží se počet support dotazů na výběr tarifu.“

Hypotéza má mít čtyři části:

- **Pro koho:** segment nebo situace, ne osobní profil.
- **Problém:** co lidem brání v rozhodnutí.
- **Změna:** co konkrétně upravíš.
- **Signál:** jak poznáš, že to pomohlo.

Místo „chceme víc konverzí“ napiš „chceme, aby návštěvník pricingu pochopil, který tarif odpovídá jeho fázi, a proto častěji zvolil relevantní další krok“. Je to delší, ale taky to není kouzelnická mlha.

### 2) Vybírej experimenty podle rizika a vratnosti

Ne každý experiment potřebuje stejný režim. Malý web nebo SaaS si vystačí se třemi úrovněmi:

| Úroveň | Příklad | Jak testovat | Co neměřit |
|---|---|---|---|
| Nízké riziko | text CTA, pořadí bloků, FAQ | publikuj změnu a sleduj agregovaný trend | individuální záznamy návštěv |
| Střední riziko | nový onboarding krok, jiný pricing layout | rozdělení návštěvnosti podle anonymní varianty | dlouhodobé profily uživatelů |
| Vyšší riziko | změna trialu, paywall, povinná kvalifikace leadu | omezený rollout, ruční review, jasný rollback | skryté scoringy bez vysvětlení |

Pokud je změna snadno vratná a nezasahuje do citlivých dat, často nepotřebuješ robustní A/B infrastrukturu. Stačí udělat změnu, označit datum, sledovat agregované metriky a po týdnu nebo měsíci vyhodnotit dopad. Ano, není to laboratorně dokonalé. Ale malý tým obvykle neumře na nedostatek statistické elegance. Umře na překomplikovaný proces, který nikdo nepoužívá.

### 3) Měř variantu, ne člověka

Privacy-first experiment může ukládat informaci o variantě bez toho, aby budoval osobní marketingový profil. Cílem je odpovědět na otázku „fungovala varianta B lépe než A?“, ne „co všechno víme o Frantovi z účetní firmy?“

Praktické možnosti:

- **Server-side přiřazení varianty:** server rozhodne, zda zobrazí variantu A nebo B, a do agregované analytiky pošle jen název varianty.
- **Krátkodobá technická cookie:** pokud je potřeba konzistence mezi stránkami, drž variantu jen po dobu testu a nepoužívej ji pro marketingové spojování.
- **UTM disciplína:** u kampaní testuj sdělení přes jasně pojmenované odkazy, ale do URL nikdy nedávej e-mail, jméno, firmu ani osobní identifikátor.
- **Agregované eventy:** sleduj dokončení formuláře, kliknutí na demo nebo aktivaci funkce, ne osobní cestu každého návštěvníka.

Princip minimalizace dat v GDPR říká, že osobní údaje mají být přiměřené, relevantní a omezené na to, co je nezbytné pro daný účel ([European Commission: Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en)). V experimentování to znamená jednoduchou otázku: jde rozhodnutí udělat z agregovaných dat? Pokud ano, nesbírej víc jen proto, že nástroj umí rozsvítit další graf.

### 4) Guardrail metriky chrání důvěru

Experiment může zvednout jednu metriku a současně poškodit produkt. Například agresivnější formulář může zvýšit počet vyplněných leadů, ale snížit kvalitu poptávek, zvýšit počet odhlášení nebo vyrobit víc supportu. Proto potřebuješ guardrail metriky — hranice, které nesmíš překročit.

Příklady guardrailů:

- počet support dotazů k dané změně se nesmí zvýšit o víc než domluvený limit,
- odhlášení z onboardingových e-mailů nesmí růst rychleji než aktivace,
- konverzní formulář nesmí přidat nové osobní pole bez privacy review,
- page speed se nesmí zhoršit kvůli měřicím skriptům,
- odmítnutí cookies nesmí rozbít základní funkčnost webu.

Guardrail je užitečný hlavně proto, že brání lokálnímu vítězství a globální ostudě. Pokud experiment zvýší kliknutí na demo tím, že tlačítko nazve „získat audit zdarma“, ale reálně žádný audit zdarma neposkytuješ, není to výhra. Je to růst na dluh důvěry.

### 5) Vyhodnocuj rozhodnutí, ne jen graf

Každý experiment má skončit jedním z pěti výsledků:

1. **Nasadit:** varianta pomohla a guardraily jsou v pořádku.
2. **Vrátit:** varianta nepomohla nebo poškodila důvěru.
3. **Upravit:** signál je slibný, ale provedení má problém.
4. **Prodlužujeme:** dat je málo a změna stojí za další měření.
5. **Zahazujeme otázku:** zjistili jsme, že hypotéza nebyla důležitá.

Vyhodnocení napiš krátce. Ne jako závěrečnou práci z oboru „dashboardologie“, ale jako rozhodovací záznam:

```text
Experiment: Pricing FAQ podle nákupní situace
Hypotéza: Návštěvníci nerozumí rozdílu mezi tarify.
Varianta: Přidali jsme FAQ a příklady výběru tarifu.
Období: 14 dní
Primární signál: kliknutí na domluvení dema z pricing stránky
Guardrail: počet dotazů „jaký tarif vybrat“ v supportu
Výsledek: demo kliknutí mírně vzrostla, support dotazy klesly
Rozhodnutí: ponechat změnu a za měsíc doplnit příklady pro agentury
Co nemažeme z hlavy: žádná osobní data z testu neukládáme mimo agregované metriky
```

### 6) Kdy A/B test raději nedělat

Experiment není kladivo na každou nejistotu. Někdy je lepší mluvit se zákazníky, projít support dotazy, zjednodušit text nebo opravit zjevnou chybu.

A/B test přeskoč, když:

- stránka má nízkou návštěvnost a výsledek by byl jen numerologie v hezkém kabátku,
- změna je zjevné zlepšení s minimálním rizikem, například oprava nejasného textu,
- potřebuješ pochopit motivaci, ne spočítat kliknutí,
- experiment by vyžadoval invazivnější tracking než hodnota rozhodnutí,
- nemáš kapacitu výsledek vyhodnotit a zavést.

**Codyho komentář:** Testovat každou drobnost je často způsob, jak se vyhnout odpovědnosti za rozhodnutí. Data mají rozhodnutí zlepšit, ne nahradit odvahu říct „tohle je pro naše zákazníky jasnější“.

### Šablona privacy-first experimentu

```text
Název experimentu:
[krátký popis]

Rozhodnutí, které chceme udělat:
[nasadit / vrátit / upravit konkrétní změnu]

Hypotéza:
Věříme, že [pro koho] má problém [problém].
Když uděláme [změna], očekáváme [měřitelný signál].

Rozsah:
Stránka / funkce:
Začátek:
Konec nebo kontrolní datum:
Vlastník:

Měření:
Primární signál:
Guardrail metriky:
Co záměrně neměříme:

Privacy poznámka:
Sbíraná data:
Retence:
Dodavatelé:
Rollback:

Výsledek:
Co se změnilo:
Rozhodnutí:
Follow-up:
```

### Checklist pro privacy-first experimenty

- [ ] Má experiment jednu konkrétní hypotézu a jedno rozhodnutí, které má pomoct udělat?
- [ ] Umíš výsledek vyhodnotit z agregovaných dat bez dlouhodobého profilování lidí?
- [ ] Neobsahují URL parametry e-mail, jméno, firmu ani jiné osobní identifikátory?
- [ ] Máš guardrail metriky pro důvěru, support, výkon stránky a privacy dopad?
- [ ] Víš, jak variantu vypnout nebo vrátit bez nouzového deploy panikaření?
- [ ] Je jasné, kdo experiment vyhodnotí a do kdy?
- [ ] Zapíšeš výsledek jako rozhodnutí, ne jen screenshot grafu?
- [ ] Smažeš nebo anonymizuješ pracovní exporty po vyhodnocení?


## Příloha T: RSS distribuce bez algoritmického vydírání

RSS je jeden z nejvíc podceňovaných marketingových kanálů pro malé weby a SaaS produkty. Není sexy jako nový growth hack, nemá konferenční název a nikdo ti za něj neprodá „revoluční dashboard“. Právě proto je užitečný. RSS feed dává lidem možnost odebírat obsah přímo, bez platformy mezi vámi, bez reklamního pixelu a bez toho, aby se každý nový článek musel modlit k algoritmu.

Specifikace RSS 2.0 popisuje feed jako kanál s položkami, které mohou obsahovat název, odkaz, popis a další metadata ([RSS Advisory Board: RSS 2.0 Specification](https://www.rssboard.org/rss-specification)). Pro privacy-first web je důležité hlavně to, že RSS může fungovat jako obyčejný veřejný soubor. Návštěvník si ho přidá do čtečky a web nemusí znát jeho e-mail, jméno, zařízení ani marketingovou historii.

**Codyho komentář:** RSS je tak trochu internetový toastový chleba. Není módní, ale když ho máš, zachrání hlad. A na rozdíl od algoritmického feedu po tobě nechce krevní skupinu, telefonní číslo a souhlas s personalizovanou reklamou.

### 1) Proč RSS patří do privacy-first marketingu

Newsletter je užitečný, ale vždycky pracuje s osobním údajem: e-mailem. Sociální sítě zase přidávají závislost na platformě, doporučovacím algoritmu a často i měření, které neřídíš. RSS stojí mezi tím: je přímé jako newsletter, ale datově lehčí než mailing list.

Praktické výhody:

- **Žádný odběratelský seznam:** pokud feed jen vystavuješ, nemusíš ukládat kontakty odběratelů.
- **Přímá distribuce:** nový článek se objeví ve čtečce bez placené propagace a bez social algoritmu.
- **Snadná archivace:** feed může pokrýt blog, changelog, release notes i nové šablony.
- **Lepší kontrola nad kanálem:** URL feedu patří k tvému webu, ne k platformě třetí strany.
- **Nízká technická složitost:** pro statický web je to generovaný XML soubor, pro CMS běžná funkce.

RSS nenahrazuje SEO, newsletter ani přímý prodej. Je to stabilní vrstva distribuce pro lidi, kteří chtějí obsah sledovat po svém. Přesně ten typ publika často ocení i privacy-first přístup.

### 2) Co všechno může mít vlastní feed

Nemusíš mít jeden univerzální feed na celý web. Pro menší projekt obvykle stačí jeden, ale jak web roste, dává smysl rozdělit odběry podle typu rozhodnutí, které čtenář řeší.

Dobré kandidáty na feed:

- **Blog:** nové články, návody, komentáře a případové studie.
- **Changelog:** změny produktu, opravy, nové integrace a bezpečnostní úpravy.
- **Release notes pro vývojáře:** techničtější popis verzí, migrací a breaking changes.
- **Status page:** incidenty, plánovaná údržba a následné postmortem shrnutí.
- **Nové šablony a checklisty:** užitečné pro agentury, konzultanty a zákazníky, kteří si ukládají praktické materiály.

Pro začátek bych zvolil dva feedy: `/feed.xml` pro obsah a `/changelog.xml` pro produktové změny. Větší členění přidej až ve chvíli, kdy máš pravidelný rytmus publikování. Jinak jen vyrábíš další prázdnou poličku v knihovně.

### 3) Minimální technická implementace

RSS feed musí být nudně spolehlivý. Žádné magické přesměrování přes marketingový nástroj, žádné tokeny, žádné trackovací parametry v odkazech. Uživatel má dostat kanonickou URL položky a čtečka má pochopit, co je nové.

Minimální položka by měla obsahovat:

- `title`: jasný název článku nebo změny,
- `link`: kanonickou URL bez zbytečných UTM parametrů,
- `guid`: stabilní identifikátor položky,
- `pubDate`: datum publikace,
- `description`: krátké shrnutí bez marketingové vaty.

Ukázka jednoduché položky:

```xml
<item>
  <title>Jak měřit kampaň bez osobních údajů v URL</title>
  <link>https://example.cz/blog/mereni-kampane-bez-osobnich-udaju</link>
  <guid>https://example.cz/blog/mereni-kampane-bez-osobnich-udaju</guid>
  <pubDate>Mon, 12 Oct 2026 08:00:00 GMT</pubDate>
  <description>Praktický postup pro UTM disciplínu, agregované metriky a kontrolu odkazů před spuštěním kampaně.</description>
</item>
```

Nejčastější chyby jsou překvapivě obyčejné: feed se negeneruje při buildu, obsahuje neplatné datum, `guid` se mění s každým deployem, položky nemají absolutní URL nebo feed není nikde odkázaný v HTML. RSS je stará technologie, ale pořád nesnáší odfláknuté detaily. Jako většina internetu, upřímně.

### 4) Jak RSS ukázat lidem, ne jen validátoru

Nestačí feed technicky vystavit. Musíš ho udělat objevitelný.

Na web přidej:

- odkaz „RSS“ do patičky nebo vedle seznamu článků,
- `link rel="alternate"` v HTML hlavičce,
- krátké vysvětlení na stránce blogu: „Nové články můžeš sledovat přes RSS bez newsletteru a bez trackingu“,
- samostatný odkaz na changelog feed, pokud publikuješ produktové změny,
- zmínku v privacy nebo marketingové dokumentaci, že RSS je preferovaný přímý kanál.

Příklad HTML odkazu v hlavičce:

```html
<link rel="alternate" type="application/rss+xml" title="Blog" href="https://example.cz/feed.xml">
```

Pro čtenáře je důležitá obyčejná věta, ne technický manifest. Napiš, co se stane po kliknutí: „Zkopíruj odkaz do své RSS čtečky.“ To je celé. Nemusíš budovat onboarding wizard, který má víc kroků než hypotéka.

### 5) Měření RSS bez sledování odběratelů

RSS se dá měřit špatně velmi snadno: unikátní trackovací URL pro každého odběratele, redirect přes analytický nástroj, přidané parametry do každé položky. To všechno jde proti hodnotě kanálu.

Privacy-first varianta:

- sleduj počet požadavků na feed jen agregovaně v serverových statistikách,
- neodlišuj jednotlivé čtečky pomocí identifikátorů,
- nelep do RSS odkazů osobní nebo segmentační parametry,
- vyhodnocuj hlavně následné návštěvy obsahu a kvalitu zpětné vazby,
- pokud používáš UTM, používej jeden obecný parametr typu `utm_source=rss`, ne unikátní ID odběratele.

Princip minimalizace dat v GDPR říká, že zpracování má být omezené na údaje nezbytné pro daný účel ([European Commission: Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en)). U RSS je účel jednoduchý: doručit veřejný obsah. K tomu nepotřebuješ vědět, kdo přesně si feed čte při snídani.

### 6) RSS jako součást obsahového workflow

RSS má nejlepší výsledky, když není dodatečný export, ale součást publikačního procesu. Každý nový článek, changelog nebo checklist by měl automaticky projít otázkou: patří do feedu?

Praktický workflow:

1. Autor dopíše článek a připraví titulek, meta description a krátké RSS shrnutí.
2. Reviewer zkontroluje, že odkaz je kanonický a neobsahuje osobní ani kampaňové parametry.
3. Build vygeneruje `feed.xml` a případně `changelog.xml`.
4. Kontrola ověří, že poslední položka má správné datum, URL a popis.
5. Po publikaci se feed odkáže z článku, blog indexu a případně changelogu.
6. Měsíční review se ptá, jestli RSS pomohlo distribuci bez přidání nových trackerů.

Tím se RSS stane součástí obsahu, ne zapomenutou ikonou v patičce z roku 2009.

### Šablona RSS distribuční karty

```text
Název feedu:
[Blog / Changelog / Status / Šablony]

URL feedu:
[https://example.cz/feed.xml]

Co do feedu patří:
[typy obsahu]

Co do feedu nepatří:
[interní poznámky, neveřejné incidenty, duplicitní promo]

Metadata každé položky:
title:
link:
guid:
pubDate:
description:

Privacy pravidla:
- žádné osobní údaje v URL
- žádné unikátní tracking ID odběratele
- agregované měření požadavků na feed
- kanonické odkazy bez přesměrovacího cirkusu

Kontrola před publikací:
- feed se vygeneroval při buildu
- poslední položka je správně seřazená
- odkaz vede na publikovanou stránku
- HTML obsahuje rel="alternate"
- feed je odkazovaný z blogu nebo patičky
```

### Checklist pro RSS distribuci

- [ ] Má web veřejný RSS feed na stabilní URL?
- [ ] Obsahuje HTML hlavička `rel="alternate"` odkaz na feed?
- [ ] Jsou odkazy v položkách kanonické a bez osobních nebo unikátních tracking parametrů?
- [ ] Má každá položka stabilní `guid`, datum publikace a srozumitelný popis?
- [ ] Je RSS odkaz viditelný pro lidi, ne jen schovaný pro roboty?
- [ ] Existuje samostatný feed pro changelog, pokud produkt pravidelně publikuje změny?
- [ ] Měříš feed jen agregovaně a umíš vysvětlit, proč data sbíráš?
- [ ] Je kontrola feedu součástí publikačního checklistu?


## Příloha U: Event taxonomy bez PII a analytického bordelu

Analytika se v malých týmech často rozbije ne proto, že chybí nástroj, ale proto, že každý měří jinou věc jiným jménem. Jeden člověk pošle event `signup`, druhý `Sign Up`, třetí `trial_started`, čtvrtý klik na stejné tlačítko uloží jako `button_click`. Za měsíc pak tým sedí nad dashboardem, hádá se, co znamená „konverze“, a někde v rohu tiše pláče CSV export.

Event taxonomy je jednoduchá dohoda: **jaké události měříme, proč je měříme, jak se jmenují a co u nich nikdy nesbíráme**. Privacy-first verze této dohody má navíc jednu zásadu: event nesmí být záminka pro sběr osobních údajů, které nepotřebujeme k rozhodnutí. GDPR princip minimalizace dat říká, že zpracování má být přiměřené, relevantní a omezené na nezbytný rozsah pro daný účel ([European Commission: Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en)). To je přesně filozofie dobré event taxonomy.

**Codyho komentář:** Dobrý tracking plán je jako uklizená dílna. Nemusíš vlastnit každé nářadí na světě. Stačí vědět, kde je šroubovák, proč ho bereš do ruky a že s ním nebudeš otevírat jogurt.

### 1) Začni rozhodnutím, ne eventem

Před každým novým eventem napiš, jaké rozhodnutí má pomoct udělat. Pokud žádné rozhodnutí neexistuje, event je nejspíš jen digitální suvenýr. A suvenýry v databázi stárnou hůř než magnetky z dovolené.

Dobré otázky před přidáním měření:

- **Jaké rozhodnutí uděláme, když číslo poroste?** Například posílíme onboarding krok, který vede k aktivaci.
- **Jaké rozhodnutí uděláme, když číslo klesne?** Například zjednodušíme formulář nebo upravíme nápovědu.
- **Kdo event vyhodnocuje?** Pokud nikdo, event nemá vlastníka.
- **Jak dlouho data potřebujeme?** Ne všechno musí žít věčně.
- **Umíme odpovědět agregovaně?** Pokud ano, nesbírej identifikátor člověka.

Slabé zadání:

> „Chceme měřit všechno, ať něco máme.“

Lepší zadání:

> „Chceme vědět, kolik návštěvníků pricing stránky klikne na demo a kolik z nich dokončí poptávkový formulář, abychom rozhodli, jestli pricing lépe vysvětluje hodnotu tarifů.“

To druhé zadání říká stránku, akci, výsledek i důvod. Nepotřebuje znát jméno návštěvníka, jeho e-mail, přesnou IP adresu ani to, co dělal minulý čtvrtek ve 22:14.

### 2) Pojmenuj eventy jako produktový jazyk

Eventy mají být čitelné i pro člověka, který nebyl u implementace. Doporučuji používat malá písmena, snake_case a názvy podle akce, ne podle CSS selektoru nebo interní komponenty.

Praktický vzor:

```text
[objekt]_[akce]
pricing_demo_clicked
contact_form_submitted
onboarding_step_completed
rss_link_copied
changelog_item_opened
```

Vyhni se názvům jako:

```text
click
button_7
cta_final_final
homepageHeroBlueButtonPressed
user_interaction
```

Název eventu má odpovědět na otázku „co se stalo?“ bez nutnosti otevírat kód. Detail patří do povolených vlastností, ne do nekonečně kreativního názvu.

Dobrá vlastnost eventu:

- `plan`: `start`, `growth`, `scale`,
- `source_section`: `hero`, `pricing_faq`, `case_study`,
- `step`: `workspace_created`, `first_project_created`, `invite_sent`,
- `content_type`: `blog`, `changelog`, `template`.

Špatná vlastnost eventu:

- `email`: konkrétní e-mail návštěvníka,
- `name`: jméno osoby,
- `company`: firma z formuláře,
- `phone`: telefon,
- `message`: obsah poptávky,
- `full_url`: URL včetně tokenů, e-mailů nebo interních parametrů.

Nástroje jako Umami podporují vlastní eventy a vlastnosti eventů ([Umami: Track events](https://docs.umami.is/docs/track-events)). To je užitečné, ale právě proto potřebuješ pravidla. Technická možnost poslat vlastnost neznamená, že ji máš poslat. Lednička taky technicky pojme notebook, ale nedělejme z toho proces.

### 3) Rozděl eventy podle rizika

Ne každý event je stejně citlivý. Klik na veřejný RSS odkaz je jiné riziko než odeslání formuláře s obchodním problémem. Tracking plán by měl mít jednoduchou klasifikaci, aby tým věděl, kde stačí agregované měření a kde je potřeba privacy review.

Praktické rozdělení:

- **Nízké riziko:** anonymní interakce s veřejným obsahem, například klik na RSS, otevření changelogu, klik na veřejnou case study.
- **Střední riziko:** produktové kroky bez osobních hodnot, například dokončení onboarding kroku nebo použití filtru v aplikaci.
- **Vysoké riziko:** formuláře, support, billing, bezpečnostní akce, importy dat a všechno, co se může dotknout identit, smluv nebo citlivého obsahu.

U nízkého rizika obvykle stačí: jasný účel, agregace, žádné identifikátory a kontrola URL. U středního rizika přidej vlastníka, retenční dobu a test, že vlastnosti neobsahují osobní údaje. U vysokého rizika měř raději stav procesu než obsah. Například `contact_form_submitted` ano, ale neukládej text zprávy jako event property.

CNIL u analytiky zdůrazňuje, že měření návštěvnosti může být za určitých podmínek vyňaté ze souhlasu, ale typicky jen při omezeném účelu, omezené době uchování, bez křížového sledování a bez použití dat k jiným účelům ([CNIL: Use analytics on your websites and applications](https://www.cnil.fr/en/sheet-ndeg16-use-analytics-your-websites-and-applications)). Neber to jako univerzální právní zkratku pro celou EU. Ber to jako dobrý návrhový kompas: čím víc tracking připomíná sledování konkrétních lidí napříč kontexty, tím víc opouštíš privacy-first území.

### 4) Vlastnosti eventů drž jako uzavřený slovník

Největší chaos nevzniká v názvech eventů, ale ve vlastnostech. Jednou je tarif `Start`, podruhé `start`, potřetí `basic`, počtvrté `tier_1`. Dashboard pak ukazuje čtyři produkty, přestože prodáváš jeden. Gratuluji, právě jsi vyrobil analytickou hydru.

Pro každou vlastnost si napiš:

- název,
- povolené hodnoty,
- příklad,
- zakázané hodnoty,
- důvod sběru,
- retenční dobu,
- vlastníka.

Příklad:

```text
Vlastnost: plan
Povolené hodnoty: start, growth, scale
Zakázané hodnoty: název firmy, e-mail, vlastní text uživatele
Použití: porovnání zájmu o tarify na pricing stránce
Retence: agregované reporty měsíčně, raw eventy podle nastavení analytiky
Vlastník: product / marketing
```

Pokud potřebuješ měřit textové pole, zastav se. Většinou nechceš měřit text, ale kategorii. Místo konkrétního obsahu poptávky stačí `project_type`: `website`, `saas`, `automation`, `consultation`. Místo názvu firmy stačí `company_size`: `solo`, `2_10`, `11_50`, `51_plus`. Když se ti hodnota nevejde do předem schváleného slovníku, nejspíš nepatří do analytiky.

### 5) Udělej kontrolu URL a logů

I když event sám osobní údaje neposílá, můžou se schovat v URL, referreru nebo serverových lozích. To je nudná, ale důležitá vrstva. Matomo ve své dokumentaci uvádí, že webová analytika může pracovat s údaji jako IP adresa, URL stránky, referrer nebo informace o zařízení, a doporučuje privacy nastavení typu anonymizace IP a omezení sběru identifikátorů ([Matomo: Configure Privacy Settings](https://matomo.org/faq/general/configure-privacy-settings-in-matomo/), [Matomo: What data does Matomo track?](https://matomo.org/faq/general/faq_18254/)). I když používáš jiný nástroj, princip platí pořád: data se často sbírají bokem, ne jen v eventu, který vidíš v kódu.

Minimální kontrola před spuštěním měření:

- formuláře nepřidávají e-mail, telefon ani jméno do query parametrů,
- UTM parametry neobsahují osobní údaje ani názvy konkrétních zákazníků,
- interní odkazy s tokeny se neposílají do analytiky jako plná URL,
- referrer z citlivých částí aplikace se omezuje přes vhodnou `Referrer-Policy`,
- serverové logy mají vlastní retenční pravidla a nejsou volně přístupné celému týmu,
- debug logy z analytiky se po testu vypnou.

OWASP Logging Cheat Sheet doporučuje u logování dávat pozor na citlivá data a nelogovat věci jako přístupové tokeny, hesla, citlivé osobní údaje nebo zbytečný obsah požadavků ([OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)). Analytika není výjimka jen proto, že má hezčí grafy.

### 6) Zaveď review před každým novým eventem

Event taxonomy není dokument, který jednou napíšeš a pak ho pohřbíš v Notionu vedle „Q2 Growth Ideas FINAL v3“. Potřebuje lehký proces.

Před přidáním eventu projdi pětiminutové review:

1. Má event jasné rozhodnutí?
2. Má vlastníka?
3. Neposílá osobní údaje v názvu, vlastnostech, URL ani referreru?
4. Má povolené hodnoty vlastností?
5. Víme, kde se zobrazí v reportu?
6. Víme, kdy ho smažeme nebo přestaneme používat?

Jednou měsíčně pak udělej úklid:

- slouč duplicitní eventy,
- označ nepoužívané eventy jako deprecated,
- zkontroluj, že nové kampaně nepřinesly osobní údaje v UTM parametrech,
- porovnej eventy s rozhodnutími v roadmapě,
- smaž pracovní exporty, které už nikdo nepotřebuje.

Nejde o byrokracii. Jde o to, aby analytika zůstala malá, čitelná a obhajitelná. Malý tým nepotřebuje datový sklad velikosti menšího knížectví. Potřebuje pár čistých signálů, podle kterých umí jednat.

### Šablona privacy-first event taxonomy

```text
Event:
[např. pricing_demo_clicked]

Účel:
[jaké rozhodnutí event podporuje]

Vlastník:
[produkt / marketing / support / sales]

Riziko:
[nízké / střední / vysoké]

Kde vzniká:
[stránka, komponenta nebo produktový krok]

Kdy se posílá:
[konkrétní uživatelská akce nebo systémová událost]

Povolené vlastnosti:
- název:
  povolené hodnoty:
  zakázané hodnoty:
  důvod:

Zakázaná data:
- e-mail
- telefon
- jméno
- název firmy, pokud není nezbytný a právně ošetřený
- volný text od uživatele
- tokeny, session ID, interní identifikátory v URL

Retence:
[jak dlouho držíme raw eventy a jak dlouho agregace]

Report:
[kde se event vyhodnocuje a jak často]

Kontrola před nasazením:
- event má schválený název
- vlastnosti odpovídají slovníku
- testovací payload neobsahuje PII
- URL neobsahuje osobní údaje ani tokeny
- event je popsán v dokumentaci
```

### Checklist pro event taxonomy

- [ ] Má každý event jasný účel a rozhodnutí, které podporuje?
- [ ] Používáš jednotný formát názvů, například `object_action` ve `snake_case`?
- [ ] Jsou vlastnosti eventů omezené na schválený slovník hodnot?
- [ ] Je výslovně zakázané posílat e-mail, telefon, jméno, volný text a tokeny?
- [ ] Kontroluješ URL, referrery a serverové logy, ne jen payload eventu?
- [ ] Má každý středně a vysoce rizikový event vlastníka a retenční pravidlo?
- [ ] Umí tým vysvětlit, proč daný event sbírá a kde se používá?
- [ ] Probíhá měsíční úklid duplicitních, nepoužívaných nebo špatně pojmenovaných eventů?


## Příloha V: Přístupnost a výkon bez sledovacího balastu

Přístupnost, výkon a privacy-first provoz se často řeší jako tři oddělené disciplíny. Ve skutečnosti se krásně potkávají v jedné jednoduché otázce: dokáže člověk web rychle pochopit a použít bez toho, aby mu stránka naložila půl internetu do prohlížeče?

W3C doporučuje používat aktuální WCAG 2.2 a popisuje čtyři hlavní principy přístupnosti: obsah má být vnímatelný, ovladatelný, srozumitelný a robustní ([W3C: WCAG 2.2](https://www.w3.org/TR/WCAG22/)). To není jen téma pro státní správu nebo velké korporace. Pro malý SaaS je přístupnost obchodní výhoda: méně ztracených lidí, méně support dotazů, lepší použitelnost na mobilu a čistší front-end.

Evropský kontext navíc sílí. Evropská komise u European Accessibility Act uvádí, že cílem je zlepšit fungování vnitřního trhu pro přístupné produkty a služby a pravidla se dotýkají například e-commerce, bankovních služeb, počítačů, telefonů nebo e-knih ([European Commission: European Accessibility Act](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en)). Ber to jako signál: přístupnost už není „až jednou“. Je to součást profesionálního produktu.

**Codyho komentář:** Přístupný web není web bez emocí. Je to web, který nedělá z návštěvníka testovacího jezevčíka v bludišti. Když něco nejde ovládat klávesnicí, přečíst čtečkou nebo pochopit na pomalém mobilu, není to „prémiová interakce“. Je to bug v obleku.

### 1) Začni základním HTML, ne knihovnou na všechno

Nejlevnější přístupnost vzniká ještě před design systémem: správné nadpisy, odkazy, tlačítka, formulářové labely a čitelný text. Pokud používáš `div` s `onClick` jako tlačítko, právě sis koupil práci navíc. Pokud používáš nativní `button`, prohlížeč už řeší klávesnici, focus a část semantiky za tebe.

Praktická pravidla:

- jedna stránka má jeden jasný `h1`,
- nadpisy tvoří logickou osnovu, ne vizuální dekoraci,
- odkazy vedou na jinou adresu nebo část stránky,
- tlačítka spouští akci,
- formulářové pole má viditelný label,
- chyba u formuláře říká, co opravit a kde,
- focus stav je viditelný a nezmizí kvůli designové křehkosti.

Příklad špatně:

```html
<div class="btn" onclick="submitForm()">Odeslat</div>
```

Příklad lépe:

```html
<button type="submit">Odeslat poptávku</button>
```

Tohle není purismus. Je to provozní úspora. Čím víc respektuješ platformu, tím méně vlastních hacků musíš udržovat.

### 2) Výkon řeš jako součást důvěry

Pomalý web neříká jen „máme hodně JavaScriptu“. Říká také „nezajímá nás čas návštěvníka“. Web Vitals popisují metriky pro uživatelskou zkušenost, mimo jiné rychlost načtení hlavního obsahu, odezvu na interakce a vizuální stabilitu stránky ([web.dev: Web Vitals](https://web.dev/articles/vitals)). Není nutné z toho udělat kult tabulek, ale je užitečné mít společný jazyk pro výkon.

Pro privacy-first tým je výkon příjemně nemilosrdný filtr. Každý externí skript musí projít otázkou:

- co přesně přináší,
- kolik dat posílá mimo náš systém,
- jestli běží před souhlasem,
- jestli zpomaluje první načtení,
- jestli existuje serverová nebo statická alternativa,
- jestli ho umíme odstranit bez rozbití webu.

Často zjistíš, že nejrychlejší skript je ten, který tam vůbec není. Ano, hluboká technologie, říká se tomu „smazat řádek“.

### 3) Obrázky a média optimalizuj bez magie

Obrázky jsou častý viník pomalých webů. MDN popisuje lazy loading jako postup, kdy se nekritické zdroje načítají až ve chvíli, kdy jsou potřeba ([MDN: Lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Lazy_loading)). Použij ho, ale ne jako výmluvu pro nahrávání obřích obrázků.

Praktické minimum:

- hero obrázek optimalizuj ručně a nepoužívej ho jako 6MB výkladní skříň zoufalství,
- pod foldem používej `loading="lazy"`,
- obrázkům nastav `width` a `height`, aby stránka neskákala,
- dekorativní obrázky mají prázdné `alt=""`,
- informační obrázky mají popis, který nahrazuje jejich význam,
- video nespouštěj automaticky se zvukem,
- animace a video nedávej jako jediný způsob vysvětlení produktu.

U SaaS dashboardu si hlídej i exporty, grafy a náhledy souborů. Pokud se v obrázku objeví zákaznická data, nesmí skončit v marketingové knihovně, CDN cache nebo analytickém náhledu jen proto, že „to někdo potřeboval do prezentace“.

### 4) Respektuj omezení pohybu a pozornosti

Animace může pomoct orientaci. Taky může člověka otrávit, zpomalit, nebo fyzicky rozhodit. MDN dokumentuje `prefers-reduced-motion`, tedy uživatelskou preferenci omezení animací a pohybu ([MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)).

Jednoduchý vzor:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

Tohle není zákaz animací. Je to respekt k lidem, kteří si v systému řekli, že méně pohybu je pro ně lepší. Stejně tak respektuj pozornost: neotvírej chat widget po třech vteřinách, neschovávej obsah za agresivní pop-up a nepoužívej blikající CTA jako diskotéku v účetním softwaru.

### 5) Testuj ručně, ne jen zelenou ikonou v auditu

Automatický audit je užitečný začátek, ale nechytí všechno. Neřekne ti, jestli text dává smysl člověku ve stresu, jestli pořadí focusu odpovídá layoutu, nebo jestli formulářová chyba skutečně pomáhá.

Pětiminutový ruční test před vydáním stránky:

1. Projdi stránku jen klávesnicí: `Tab`, `Shift+Tab`, `Enter`, `Space`, `Esc`.
2. Zvětši stránku na 200 % a zkontroluj, že obsah neuteče.
3. Vypni obrázky a ověř, že stránka pořád dává smysl.
4. Pusť čtečku nebo alespoň strom přístupnosti v prohlížeči.
5. Otevři stránku na pomalém mobilním připojení nebo v throttling režimu.
6. Zkus odeslat formulář s chybou a přečti si hlášku nahlas.

Pokud se u toho cítíš trapně, je to dobré znamení. Trapnost při interním testu je levnější než zákazník, který odejde a už ti nikdy neřekne proč.

### 6) Udělej z přístupnosti a výkonu release bránu

Malý tým nepotřebuje obří proces. Potřebuje pár pravidel, která nejdou obejít jen proto, že je pátek.

Release brána pro marketingovou stránku:

- stránka má unikátní title a meta description,
- obsah má logickou strukturu nadpisů,
- hlavní akce je dostupná klávesnicí,
- formuláře mají labely, chybové stavy a potvrzení,
- obrázky mají správné `alt`, rozměry a optimalizovanou velikost,
- externí skripty jsou zdokumentované a mají vlastníka,
- stránka funguje bez marketingových trackerů,
- měření je agregované a neposílá osobní údaje v URL ani eventech.

Release brána pro SaaS obrazovku:

- kritické akce mají jasné názvy a potvrzení,
- chyba vysvětluje další krok,
- klávesnice se nezasekne v modalu,
- tabulka má čitelné hlavičky a prázdné stavy,
- loading stav neblokuje zbytečně celé rozhraní,
- logy neobsahují osobní obsah formulářů,
- screenshoty pro support neobsahují tajné hodnoty bez maskování.

### Šablona accessibility-performance review

```text
Stránka / obrazovka:
Vlastník:
Datum:

Primární úkol uživatele:

Přístupnost:
- Nadpisová struktura:
- Klávesnice a focus:
- Formuláře a chyby:
- Obrázky a média:
- Pohyb / animace:

Výkon:
- Největší riziko načtení:
- Externí skripty:
- Obrázky a fonty:
- Mobilní stav:

Privacy:
- Co se měří:
- Jaká data odcházejí mimo náš systém:
- Co lze smazat nebo zjednodušit:

Rozhodnutí:
- Spustit / nespustit:
- Co opravit před spuštěním:
- Co zkontrolovat po týdnu:
```

### Checklist pro přístupnost, výkon a privacy-first web

- [ ] Stránka má správnou semantiku: nadpisy, odkazy, tlačítka a formulářové labely.
- [ ] Všechny důležité akce jdou dokončit klávesnicí.
- [ ] Focus stav je viditelný a pořadí focusu odpovídá rozhraní.
- [ ] Obrázky mají smysluplné `alt`, nebo prázdné `alt`, pokud jsou čistě dekorativní.
- [ ] Média nejsou jediným nositelem informace a neobtěžují automatickým zvukem.
- [ ] Web respektuje `prefers-reduced-motion`.
- [ ] Obrázky, fonty a skripty jsou optimalizované pro první načtení.
- [ ] Každý externí skript má účel, vlastníka a privacy review.
- [ ] Analytika neposílá osobní údaje v URL, eventech, referreru ani logu.
- [ ] Release checklist obsahuje přístupnost a výkon jako povinnou bránu.




## Příloha W: Lead scoring bez šmírovacího křišťálu

Lead scoring je užitečný, když pomáhá obchodníkovi vybrat další rozumný krok. Je toxický, když se z něj stane tajné bodování lidí podle každého pohybu myši, otevřeného e-mailu a návštěvy pricingu ve 23:47. Privacy-first přístup neříká „nevyhodnocuj zájem“. Říká: vyhodnocuj ho podle signálů, které umíš vysvětlit zákazníkovi i sám sobě bez červenání.

Cíl není vědět o člověku všechno. Cíl je poznat, jestli mu dokážeš pomoct, jestli má problém dostatečnou prioritu a jaký další krok dává smysl.

### 1) Skóruj situaci firmy, ne osobnost návštěvníka

Dobré skóre stojí na kontextu, který zákazník buď sám sdělil, nebo vyplývá z obchodního procesu. Špatné skóre stojí na detektivce: kolikrát někdo otevřel newsletter, jestli se vrátil z mobilu a jak dlouho koukal na hero sekci. Sherlock by možná zatleskal. ÚOOÚ méně nadšeně.

Privacy-first signály:

- zákazník popsal konkrétní problém,
- uvedl časový rámec rozhodnutí,
- má jasného vlastníka projektu,
- zná dopad problému na tým nebo tržby,
- rozumí rozpočtovému řádu,
- souhlasí s dalším krokem.

Slabé nebo rizikové signály:

- počet pageview jednoho člověka,
- otevření e-mailu jako důkaz zájmu,
- návštěva stránky bez kontextu,
- osobní profilování podle pracovní role z externích databází,
- automatické obohacování kontaktu bez jasného účelu,
- přenos dat do reklamních publik.

**Codyho komentář:** Když lead potřebuje 87 bodů z 12 nástrojů, aby obchodník poznal, že se má ozvat, problém možná není v datech. Problém je v nabídce, kvalifikaci nebo odvaze napsat normální e-mail.

### 2) Použij jednoduché stupně připravenosti

Místo magického čísla používej několik jasných stavů. Tým pak ví, co dělat, a nemusí se hádat, jestli je lead s 63 body „skoro horký“ nebo jen analyticky opálený.

| Stav | Co znamená | Typický signál | Další krok |
|---|---|---|---|
| Nízká shoda | Problém není jasný nebo nesedí cílovka | obecný dotaz, student, dodavatel | poslat veřejný zdroj nebo slušně uzavřít |
| Průzkum | Firma mapuje možnosti | ptá se na přístup, proces, inspiraci | poslat článek, checklist nebo nabídnout krátkou konzultaci |
| Aktivní problém | Existuje bolest a vlastník | konkrétní popis situace, termín, dopad | domluvit discovery call |
| Nákupní záměr | Řeší se rozsah, cena, rizika | otázky na implementaci, migraci, smlouvu | připravit návrh nebo demo |
| Zákazník nevhodný teď | Potřeba existuje, ale nesedí timing nebo rozsah | nízká priorita, chybí rozpočet, čeká na interní rozhodnutí | nastavit férový follow-up nebo předat zdroj |

Důležité: stav má být viditelný a vysvětlitelný. Když se obchodník zeptá „proč je to nákupní záměr?“, odpověď nemá znít „protože algoritmus“. Má znít třeba: „Mají vlastníka, termín do konce kvartálu, migrují z konkrétního nástroje a ptali se na smluvní zpracování dat.“

### 3) Definuj kvalifikační otázky, které nejsou výslech

Kvalifikace má pomoct oběma stranám. Není to policejní protokol ani pokus vytáhnout rozpočet na první větě. Stačí pár otázek, které odhalí, jestli má smysl pokračovat.

Dobré otázky pro B2B web nebo SaaS:

1. „Co se má změnit, aby pro vás projekt dával smysl?“
2. „Kdo bude výsledek používat nebo schvalovat?“
3. „Co se stane, když to nevyřešíte v příštích třech měsících?“
4. „Máte už existující řešení, které nahrazujeme nebo doplňujeme?“
5. „Jsou u vás citlivá data, evropský provoz nebo interní bezpečnostní pravidla zásadní podmínka?“
6. „Jaký další krok by vám reálně pomohl rozhodnout?“

Odpovědi zapisuj jako rozhodovací poznámky, ne jako román o člověku. Nepiš „Petr je nejistý a asi nemá autoritu“. Napiš „není potvrzený rozhodovatel; domluveno ověřit schvalovací proces do pátku“. Malý rozdíl v textu, velký rozdíl v kultuře.

### 4) Nech skóre stárnout a mazej mrtvé signály

Lead scoring bez retence je jen CRM sklep. Signály mají expiraci, protože situace firmy se mění. To, že někdo před půl rokem stáhl checklist, dnes nemusí znamenat vůbec nic. Možná problém vyřešil. Možná odešel z firmy. Možná jen klikl omylem při svačině. Tragédie moderní analytiky, díl 42.

Praktická pravidla:

- explicitní poptávka je aktivní typicky týdny, ne roky,
- discovery poznámky reviduj po každém zásadním hovoru,
- neaktivní leady přesouvej do stavu „uzavřeno / později“,
- newsletter odběr neznamená obchodní souhlas,
- staré exporty z CRM maž podle retenční politiky,
- důvod uzavření zapisuj stručně a bez osobních soudů.

Pokud používáš automatizaci, nastav ji konzervativně: připomenout follow-up ano, tajně navyšovat skóre za každou návštěvu webu spíš ne. Automat má být připomínač práce, ne robotický věštec v obleku.

### 5) Odděl marketingový zájem od obchodního oprávnění

To, že člověk čte blog, neznamená, že chce obchodní kontakt. To, že si stáhl šablonu, neznamená, že souhlasí s nekonečným nurturingem. A to, že zadal e-mail do formuláře, neznamená automaticky, že ho můžeš obohatit v pěti nástrojích a poslat do reklamního publika.

Rozumné rozdělení:

- **Obsahový zájem:** odběr RSS, newsletter, stažení veřejné šablony.
- **Produktový zájem:** registrace trialu, žádost o demo, dotaz na funkcionalitu.
- **Obchodní záměr:** poptávka, schůzka, požadavek na nabídku, řešení smlouvy.
- **Zákaznický vztah:** aktivní služba, support, fakturace, provozní komunikace.

Každá vrstva má jiný účel, jinou komunikaci a jiné minimum dat. Neslévej je do jednoho pytle „lead“. Pytle jsou dobré na brambory, ne na osobní údaje.

### 6) Šablona privacy-first lead scoringu

```text
Název segmentu / služby:
Vlastník procesu:
Datum kontroly:

Stavy leadu:
- Nízká shoda:
- Průzkum:
- Aktivní problém:
- Nákupní záměr:
- Nevhodný teď:

Povolené signály:
- Signál:
  Účel:
  Zdroj:
  Retence:
  Kdo vidí:

Zakázané nebo rizikové signály:
- Signál:
  Proč ne:
  Alternativa:

Kvalifikační otázky:
1.
2.
3.

Follow-up pravidla:
- Kdy se ozvat:
- Kdy lead uzavřít:
- Co nikdy neposílat automaticky:

Privacy kontrola:
- Posíláme data mimo EU nebo mimo hlavní systém?
- Používáme obohacování kontaktů?
- Umíme vysvětlit skóre člověku?
- Má každý signál vlastníka a expiraci?
```

### Checklist pro lead scoring bez invazivního profilování

- [ ] Skóre nebo stav vychází z obchodního kontextu, ne z tajného sledování jednotlivce.
- [ ] Každý signál má jasný účel, zdroj, vlastníka a dobu platnosti.
- [ ] Marketingový odběr, produktový zájem a obchodní poptávka jsou oddělené.
- [ ] CRM poznámky popisují fakta a další kroky, ne osobní dojmy.
- [ ] Automatizace připomíná práci, ale nerozesílá agresivní sekvence bez kontextu.
- [ ] Staré leady, exporty a dočasné seznamy se pravidelně mažou.
- [ ] Tým umí zákazníkovi lidsky vysvětlit, proč a jak ho kontaktuje.


## Příloha X: Integrace a API bez datového průvanu

Každý SaaS dřív nebo později narazí na větu: „To jen napojíme přes API.“ Zní to nevinně. Ve skutečnosti tím často vznikne nový tok dat, nový dodavatel, nový bezpečnostní povrch, nový proces mazání a nový bod, kde se může pokazit důvěra zákazníka. Integrace nejsou kabely za monitorem. Jsou to smlouvy mezi systémy, týmy a daty.

Privacy-first integrace má jednoduchý cíl: předat jen to, co druhá strana opravdu potřebuje, na dobu, po kterou to potřebuje, způsobem, který umíš vysvětlit technicky i obchodně. Pokud to neumíš říct jednou větou, integrace ještě není připravená.

### 1) Každou integraci popiš jako datovou smlouvu

Nezačínej otázkou „jaký endpoint použijeme?“. Začni otázkou „jaký obchodní výsledek má napojení přinést a jaká data jsou k tomu nezbytná?“ Technické API dokumentace bývají štědré. To neznamená, že máš použít všechno, co se nabízí.

Datová smlouva pro integraci má obsahovat:

- účel integrace,
- vlastníka v týmu,
- směr toku dat,
- seznam polí,
- právní nebo smluvní důvod,
- retenci a způsob mazání,
- chování při chybě,
- postup pro vypnutí integrace.

Příklad špatného zadání:

> „Pošli CRM všechno z formuláře, ať to tam máme.“

Lepší zadání:

> „Po odeslání poptávky vytvoř v CRM kontakt a obchodní příležitost. Posílej pouze e-mail, firmu, volitelný telefon, typ problému, preferovaný další krok a zdroj kampaně bez osobních údajů v URL. Poznámku z formuláře nemaž, ale nastav retenci 12 měsíců pro neuzavřené poptávky.“

To druhé je méně sexy, ale dá se provozovat. První je jen rychlá cesta k tomu, aby se z CRM stala datová půda s pavouky.

### 2) Omez rozsah oprávnění, ne jen počet polí

Minimalizace dat není jen o tom, že neposíláš zbytečný sloupec. Je i o tom, jaké oprávnění integrace dostane. API token s plným administrátorským přístupem je jako klíč od kanceláře přilepený na dveřích. Praktické? Ano. Rozumné? Ani trochu.

U každé integrace nastav:

- samostatný účet nebo token pro konkrétní účel,
- nejnižší potřebná oprávnění,
- oddělené testovací a produkční přístupy,
- expiraci nebo pravidelnou rotaci tajemství,
- auditní stopu pro důležité změny,
- jasného vlastníka, který ví, proč token existuje.

Pokud služba neumí jemná oprávnění, zapiš to jako riziko. Někdy to neznamená integraci zakázat, ale znamená to přidat kompenzační opatření: méně dat, kratší retenci, ruční schvalování exportů nebo monitoring neobvyklých operací.

**Codyho komentář:** „Máme jen jeden master token, ale nikdo ho nepoužívá špatně“ je bezpečnostní verze „u nás se nikdy nic nerozbije“. Hezká věta do pohádky. Do produkce méně.

### 3) Navrhni integraci tak, aby šla vypnout

Dobrá integrace má exit plán už při spuštění. Ne proto, že čekáš katastrofu, ale proto, že dobrý provoz počítá se změnou. Dodavatel zdraží, produkt změní strategii, API se rozbije, zákazník požádá o výmaz, nebo zjistíš, že integrace nepřináší hodnotu.

U každého napojení si odpověz:

- Co se stane, když dodavatel hodinu neodpovídá?
- Co se stane, když neodpovídá den?
- Umíme frontu zpráv znovu odeslat bez duplicit?
- Umíme zákaznická data exportovat a smazat?
- Máme přehled, která data už byla předána ven?
- Umíme integraci vypnout bez pádu hlavní aplikace?

Praktické pravidlo: kritické procesy navrhuj jako odolné vůči výpadku integrace. Pokud CRM spadne, webový formulář má poptávku bezpečně uložit a upozornit tým. Nemá návštěvníkovi říct „zkuste to zítra, náš vendor si dal espresso pauzu“.

### 4) Neposílej osobní údaje v identifikátorech a URL

API integrace často selžou na detailech, které vypadají nevinně. E-mail v URL parametru. Jméno zákazníka v názvu souboru. Interní poznámka v eventu. Token v logu. Chyba, která se odešle do monitoringu včetně celého payloadu. A najednou máš osobní údaje na místech, kde je nikdo nehledal.

Bezpečnější návyky:

- používej interní náhodné ID místo e-mailu v URL,
- neposílej celé payloady do error monitoringu,
- maskuj tokeny, e-maily a telefony v logu,
- nepoužívej osobní údaje v názvech webhooků, souborů a segmentů,
- ukládej mapping mezi systémy jen tam, kde je opravdu potřeba,
- u testů používej syntetická data, ne export reálných zákazníků.

Zvlášť pozor na webhooky. Jsou skvělé, protože umožňují rychlou automatizaci. Jsou nebezpečné, když bez filtru přeposílají všechno všude. Webhook není datový odpadní kanál. Je to dveřní zvonek mezi systémy — a i ten má mít kukátko.

### 5) Rozliš synchronizaci, kopii a odvozený záznam

Jedna z nejčastějších provozních bolestí: tým neví, který systém je zdroj pravdy. CRM má jiný e-mail než fakturace. Produkt má jiný stav účtu než support. Marketingová databáze si pamatuje člověka, kterého aplikace už smazala. A pak přijde žádost uživatele nebo zákazníka a všichni začnou hledat, co je vlastně realita.

Před integrací určete typ vztahu:

| Typ | Co znamená | Riziko | Dobré pravidlo |
|---|---|---|---|
| Synchronizace | dvě strany si pravidelně předávají změny | konflikty a nejasný zdroj pravdy | jeden systém je autoritativní pro každé pole |
| Kopie | data se předají do dalšího systému | zapomenuté mazání a staré exporty | kopie má vlastní retenci a vlastníka |
| Odvozený záznam | vzniká agregace, skóre nebo stav | neprůhledné rozhodování | ulož vysvětlení, ne tajnou magii |
| Jednorázový export | data opustí běžný systém | ztráta kontroly | nastav expiraci, úložiště a mazání exportu |

Pokud systém není zdroj pravdy, nemá svévolně přepisovat hodnoty. Pokud je zdroj pravdy, musí mít proces změny, audit a obnovu. Jinak se z integrace stane multiplayerový Excel s API.

### 6) Šablona integrační karty

Použij ji před spuštěním každého nového API napojení, webhooku, automatizace nebo pravidelného exportu.

```markdown
## Integrační karta: [název integrace]

### Účel
- Jaké rozhodnutí nebo proces integrace podporuje:
- Co se stane, pokud integrace nebude existovat:

### Vlastnictví
- Business vlastník:
- Technický vlastník:
- Dodavatel / systém:
- Prostředí: produkce / test / obojí

### Data
- Směr toku dat:
- Předávaná pole:
- Pole výslovně zakázaná:
- Obsahuje osobní údaje: ano / ne
- Obsahuje citlivá nebo zákaznická provozní data: ano / ne

### Oprávnění a bezpečnost
- Typ přístupu:
- Rozsah oprávnění:
- Kde je uložený token:
- Rotace / expirace:
- Auditní log:

### Retence a vypnutí
- Kde vzniká kopie:
- Jak dlouho se drží:
- Jak se maže:
- Jak se integrace vypne:
- Co se stane při výpadku:

### Review
- Datum poslední kontroly:
- Rozhodnutí: spustit / upravit / nespouštět
- Otevřená rizika:
```

### Checklist pro privacy-first integrace

- [ ] Integrace má jasný obchodní účel a vlastníka.
- [ ] Je popsaný směr toku dat a seznam předávaných polí.
- [ ] Nepředáváme osobní údaje v URL, názvech souborů, logu ani analytických eventech.
- [ ] Token nebo účet má nejnižší potřebná oprávnění.
- [ ] Produkční a testovací prostředí nepoužívají stejná tajemství.
- [ ] Víme, který systém je zdroj pravdy pro každé synchronizované pole.
- [ ] Kopie dat má vlastní retenci a proces mazání.
- [ ] Výpadek integrace neshodí hlavní produktový nebo obchodní proces.
- [ ] Existuje postup pro vypnutí, export a úklid dat.
- [ ] Integrace prošla technickým i privacy review před spuštěním.


## Příloha Y: Zálohy a obnova bez falešného pocitu bezpečí

Záloha není soubor, který někde existuje. Záloha je schopnost obnovit službu v čase, který firma přežije, s daty, kterým může věřit. V malém SaaS týmu je tohle nepříjemně praktické téma: dokud všechno běží, zálohy vypadají jako nudný provozní detail. Když se rozbije databáze, smaže tabulka, selže migrace nebo přijde ransomware, stane se z nich rozdíl mezi „máme incident“ a „máme existenční problém“.

Privacy-first přístup k zálohám znamená dvě věci najednou: data chránit proti ztrátě a zároveň z nich nedělat nekonečný archiv osobních údajů. Jinými slovy: záloha má být použitelná, šifrovaná, testovaná a omezená retencí. Ne digitální sklep, kam se hází všechno, protože „co kdyby“.

### 1) Nejdřív urči, co se musí obnovit

Začni seznamem systémů, ne nákupem další backup služby. U každé části produktu napiš, co by znamenal její výpadek, jak rychle ji potřebuješ obnovit a kolik dat si můžeš dovolit ztratit. Tím vzniknou dvě praktické hodnoty:

- **RTO** — za jak dlouho má být služba znovu použitelná,
- **RPO** — kolik posledních změn můžeš realisticky ztratit.

Příklad pro malý B2B SaaS:

| Oblast | Příklad | RTO | RPO | Poznámka |
|---|---|---:|---:|---|
| Produkční databáze | účty, projekty, nastavení | 4 hodiny | 15 minut | kritická data zákazníků |
| Nahrané soubory | přílohy, exporty | 24 hodin | 1 hodina | záleží na zákaznickém procesu |
| Konfigurace infrastruktury | IaC, env proměnné, DNS poznámky | 8 hodin | 1 den | bez tajemství v repozitáři |
| Analytika | agregované návštěvy, eventy | 72 hodin | 1 den | nesmí blokovat hlavní produkt |
| Marketingový web | statický build, CMS obsah | 24 hodin | 1 den | lze často obnovit z Gitu |

Tahle tabulka je důležitější než hezký dashboard poskytovatele. Když nemáš RTO/RPO, nevíš, jestli je záloha dost častá, jestli restore trvá moc dlouho a jestli platíš za špatnou úroveň ochrany.

### 2) Drž zálohy oddělené od produkčního účtu

Záloha uložená ve stejném účtu, se stejným adminem a stejným heslem jako produkce je spíš optimistická kopie než ochrana. Pokud útočník nebo chybná automatizace získá dostatečný přístup, smaže produkt i zálohy jedním švihem. Britské NCSC ve své praktické příručce k offline zálohám zdůrazňuje, že zálohy mají být oddělené od běžně dostupného prostředí a pravidelně testované ([NCSC: Offline backups in an online world](https://www.ncsc.gov.uk/guidance/offline-backups-in-an-online-world)).

Praktické minimum:

- samostatný účet nebo projekt pro zálohy,
- oddělené přístupové údaje,
- šifrování na straně úložiště i při přenosu,
- omezené oprávnění pro zápis záloh,
- ochrana proti okamžitému smazání nebo přepsání,
- pravidelné obnovení do izolovaného prostředí.

U cloudových služeb hledej funkce typu objektový lock, versioning, retention policy nebo immutable backups. Názvy se liší, princip je stejný: produkční aplikace může zálohu vytvořit, ale nemá mít jednoduchou možnost smazat celou historii.

**Codyho komentář:** Záloha, kterou umí smazat stejný token jako produkční data, je jako náhradní klíč schovaný pod rohožkou s cedulí „náhradní klíč“. Technicky existuje. Strategicky je to komedie.

### 3) Test obnovy je součást zálohy, ne luxus

Neotestovaná záloha je přání. Testovaná záloha je provozní schopnost. Jednou za měsíc vyber jednu kritickou datovou zásuvku a proveď obnovu do izolovaného prostředí. Ne do produkce, ne do sdíleného vývojového serveru, ne někam, kde se reálná zákaznická data začnou motat s testy.

Restore test má ověřit:

- zda jde záloha stáhnout,
- zda je čitelná a nepoškozená,
- zda tým zná dešifrovací postup,
- zda aplikace nad obnovenými daty nastartuje,
- zda obnova splní RTO a RPO,
- zda se po testu data bezpečně smažou.

Výsledek zapiš. Stačí krátce: datum, kdo test provedl, jaká záloha se obnovovala, kolik to trvalo, co selhalo, co se zlepší. Bez zápisu se z testu stane historka typu „myslím, že jsme to někdy zkoušeli“. To je věta, po které provozní realita obvykle vytáhne baseballku.

### 4) Zálohy mají vlastní privacy riziko

Záloha často obsahuje víc citlivých dat než běžný export, protože ukládá celý stav systému. Pokud v produkci smažeš zákazníka, ale v zálohách ho držíš navždy, retence je jen dekorace. Zálohy proto musí být součástí retenční politiky, ne výjimka napsaná malým písmem.

U každého typu zálohy rozhodni:

- jak dlouho se drží,
- kdo k ní má přístup,
- jestli obsahuje osobní údaje,
- jak se šifruje,
- kde fyzicky nebo smluvně leží,
- jak se řeší žádosti o výmaz,
- kdy se záloha definitivně odstraní.

V praxi často dává smysl kombinovat krátkou detailní historii a delší agregovanou nebo méně častou historii. Například databázové point-in-time recovery držet kratší dobu, denní snapshoty několik týdnů a měsíční archiv jen pro zákonné nebo smluvně nutné případy. Konkrétní doby závisí na produktu, zákaznících a právním kontextu — nepiš je podle pocitu, ale podle účelu.

### 5) Obnova musí mít runbook pro člověka ve stresu

Když se něco rozbije, tým nebude mít náladu luštit poznámky v chatu z minulého kvartálu. Runbook má být tak jednoduchý, aby podle něj postupoval člověk ve stresu, v noci a s kávou, která už ztratila víru v lidstvo.

Runbook pro obnovu má obsahovat:

- kde jsou zálohy,
- kdo může schválit obnovu,
- jak ověřit správnou verzi zálohy,
- jak připravit izolované prostředí,
- jak obnovit databázi nebo soubory,
- jak ověřit integritu dat,
- kdy a jak přepnout provoz,
- koho informovat po obnově,
- jak uklidit dočasné kopie.

Runbook neukládej jen do systému, který bude při incidentu nedostupný. Měj kopii v interním repozitáři, v dokumentaci provozu a u kritických týmů klidně i offline export. Samozřejmě bez tajemství. Postup ano, hesla ne.

### 6) Zálohovací monitoring nesmí být jen zelená ikonka

Monitoring záloh má hlídat víc než „job doběhl“. Úspěšný backup job může vytvořit prázdnou, nekompletní nebo nepoužitelnou zálohu. Sleduj proto aspoň:

- čas poslední úspěšné zálohy,
- velikost zálohy a výrazné odchylky,
- chyby při uploadu nebo šifrování,
- dostupnost úložiště,
- výsledek posledního restore testu,
- blížící se expiraci přístupových údajů,
- počet dní od poslední kontroly runbooku.

Alerty posílej tam, kde je někdo opravdu řeší. Pokud záloha tři dny neběží a jediný signál je e-mail ve schránce „noreply“, nemáš monitoring. Máš digitální papírování.

### Šablona restore testu

```md
## Restore test: [systém / datová zásuvka]

### Kontext
- Datum testu:
- Vlastník testu:
- Testovaná záloha:
- Cílové izolované prostředí:

### Cíl
- Ověřované RTO:
- Ověřované RPO:
- Co musí po obnově fungovat:

### Postup
1. Najít správnou zálohu.
2. Ověřit přístup a dešifrování.
3. Obnovit do izolovaného prostředí.
4. Spustit základní aplikační kontroly.
5. Ověřit vzorek dat.
6. Zapsat výsledek.
7. Smazat dočasné kopie.

### Výsledek
- Skutečný čas obnovy:
- Splněno RTO: ano / ne
- Splněno RPO: ano / ne
- Nalezené problémy:
- Opravy do příště:
- Datum dalšího testu:
```

### Checklist pro zálohy a obnovu

- [ ] Kritické systémy mají definované RTO a RPO.
- [ ] Produkční databáze, soubory, konfigurace a obsah mají jasný plán zálohování.
- [ ] Zálohy jsou uložené odděleně od produkčního účtu a chráněné proti rychlému smazání.
- [ ] Přístup k zálohám má vlastní oprávnění, vlastníka a auditní stopu.
- [ ] Zálohy jsou šifrované a dešifrovací postup je bezpečně dokumentovaný.
- [ ] Retence záloh odpovídá účelu a není „navždy, protože místo je levné“.
- [ ] Restore test probíhá pravidelně do izolovaného prostředí.
- [ ] Výsledek restore testu se zapisuje včetně skutečného času obnovy.
- [ ] Dočasné kopie z testů se po ověření mažou.
- [ ] Existuje lidsky čitelný runbook pro obnovu při incidentu.


## Příloha Z: Registr zpracování a subdodavatelé bez právního divadla

Registr zpracování osobních údajů zní jako dokument, který vzniká v tmavé místnosti mezi právníkem, tabulkou a konvicí studené kávy. Ve skutečnosti je to jeden z nejlepších provozních nástrojů pro malý SaaS tým: říká, jaká data máš, proč je máš, kdo se jich dotýká a co se s nimi stane, když vypneš dodavatele.

GDPR v článku 30 řeší záznamy o činnostech zpracování a článek 28 vztah mezi správcem a zpracovatelem; oficiální text najdeš v [EUR-Lexu](https://eur-lex.europa.eu/legal-content/ENG/ALL/?uri=celex%3A32016R0679). EDPB pro malé firmy vysvětluje roli správce a zpracovatele prakticky: pokud dodavatel zpracovává osobní údaje podle tvých instrukcí, vztah má být upravený smlouvou a má být jasné, co přesně dělá ([EDPB: Data controller or data processor](https://www.edpb.europa.eu/sme/learn-the-basics/data-controller-or-data-processor_en)).

> **Codyho komentář:** Registr není šanon pro kontrolu. Je to mapa úniku tepla. Když nevíš, kudy ti data proudí, nemůžeš poctivě tvrdit, že máš privacy-first provoz. To je jako říct „máme bezpečný sklad“ a nevědět, kolik má dveří.

### 1) Začni činností, ne názvem nástroje

Špatný registr začíná sloupcem „nástroj“ a končí katalogem služeb. Lepší registr začíná činností:

- zpracování poptávek z webu,
- registrace a přihlášení do SaaS,
- fakturace a účetnictví,
- zákaznická podpora,
- produktová analytika,
- posílání servisních e-mailů,
- bezpečnostní logování,
- marketingový obsah a RSS distribuce.

Teprve potom doplň nástroje, které se na činnosti podílejí. Jeden nástroj může sloužit více účelům a jedna činnost může procházet více systémy. Když začneš nástrojem, často přehlédneš ruční exporty, interní tabulky a „dočasné“ kopie, které přežijí tři redesigny a dvě účetní období.

Praktický příklad:

| Činnost | Účel | Kategorie dat | Systémy | Vlastník |
|---|---|---|---|---|
| Poptávky z webu | Odpovědět na obchodní dotaz | jméno, e-mail, firma, zpráva | web, e-mail, CRM | obchod |
| Produktová analytika | Zlepšit onboarding | agregované eventy, technické údaje | aplikace, analytika | produkt |
| Fakturace | Vystavit a archivovat doklady | fakturační údaje, objednávky | billing, účetnictví | finance |

### 2) U každé činnosti napiš minimální rozhodnutí

Registr nemusí být román. Musí ale obsahovat rozhodnutí, která se dají zkontrolovat:

- **účel:** proč data zpracováváme,
- **rozsah:** jaké kategorie dat sbíráme,
- **zdroj:** odkud data přicházejí,
- **právní základ:** proč je smíme zpracovávat,
- **příjemci:** komu data předáváme,
- **retence:** jak dlouho data držíme,
- **bezpečnost:** jak data chráníme,
- **odpovědnost:** kdo činnost vlastní.

U malého SaaS je největší chyba psát obecně: „data zákazníků zpracováváme za účelem poskytování služby“. To je sice hezká věta do dokumentu, ale špatná provozní pomůcka. Lepší je rozdělit službu na konkrétní proudy: účet, platby, support, logy, e-maily, analytika, zálohy.

### 3) Subdodavatel není jen logo v patičce privacy policy

Subdodavatel je každý, kdo se dostane k osobním údajům v rámci zpracování. Může to být hosting, e-mailová služba, helpdesk, monitoring, billing, CRM, cloudové úložiště nebo AI nástroj, do kterého tým kopíruje zákaznické texty.

U každého dodavatele si veď jednoduchou kartu:

- jakou činnost podporuje,
- jaké kategorie dat vidí,
- zda je správce, zpracovatel nebo samostatný správce,
- kde data technicky běží,
- jaké má subprocesory,
- jaké exporty a mazání nabízí,
- jak probíhá incidentová komunikace,
- kdo v týmu schválil použití.

Privacy-first pravidlo Dreamindu: evropský provoz preferuj jako výchozí volbu, ale neber „EU region“ jako kouzelné zaklínadlo. Ptej se dál: kdo provozuje mateřskou firmu, jaké má subprocesory, jak řeší support přístup, kam tečou logy a jestli jde udělat čistý export při odchodu.

### 4) Změny dodavatelů dělej přes review, ne přes Slack nadšení

Nový nástroj často přichází nevinně: „Jen to vyzkouším na pár zákaznických datech.“ Tady vzniká datový průvan. Zaveď pravidlo, že nový nástroj s osobními údaji potřebuje krátké review před použitím.

Minimum review:

1. Jaký problém řešíme a proč nestačí existující nástroj?
2. Jaká data do nástroje půjdou?
3. Je možné použít anonymizovaná nebo testovací data?
4. Kde budou data uložená a kdo k nim má přístup?
5. Jak data smažeme po testu?
6. Kdo review schválil a kdy se znovu zkontroluje?

Tohle není byrokracie. Je to pojistka proti tomu, aby se z týdenního experimentu stal tichý produkční systém bez vlastníka.

### 5) Udělej registr užitečný pro incident i exit

Registr má největší hodnotu ve chvíli, kdy se něco pokazí. Když dodavatel nahlásí incident, potřebuješ rychle vědět:

- kterých činností se dotýká,
- jaké kategorie dat mohly být zasažené,
- kdo je interní vlastník,
- zda existuje náhradní postup,
- kde jsou exporty a zálohy,
- jaké zákazníky nebo uživatele může být potřeba informovat.

Stejně pomáhá při exit plánu. Pokud chceš odejít z nástroje, registr ti ukáže, jestli jde jen o export kontaktů, nebo o složitý řetězec web → formulář → e-mail → CRM → billing → support. Bez mapy je migrace loterie. A loterie je skvělá jen v případě, že nechceš řídit firmu.

### 6) Šablona karty zpracování

```markdown
## Karta zpracování: [název činnosti]

### Účel
- Proč data zpracováváme:
- Co by nešlo dělat bez této činnosti:
- Co výslovně neděláme:

### Data
- Kategorie osobních údajů:
- Zdroj dat:
- Citlivé nebo vysoce rizikové prvky:
- Data, která záměrně nesbíráme:

### Systémy a dodavatelé
- Interní systémy:
- Externí dodavatelé:
- Role dodavatelů: správce / zpracovatel / samostatný správce
- Umístění provozu:
- Známí subprocesoři:

### Retence a mazání
- Aktivní doba uložení:
- Archivace:
- Mazání nebo anonymizace:
- Exporty a dočasné kopie:

### Bezpečnost a provoz
- Přístupová práva:
- Logování přístupu:
- Zálohy:
- Incident kontakt:
- Náhradní postup při výpadku:

### Review
- Vlastník:
- Poslední kontrola:
- Další kontrola:
- Otevřené otázky:
```

### Checklist pro registr a subdodavatele

- [ ] Každá hlavní činnost má vlastní kartu zpracování.
- [ ] Registr začíná účelem a datovým tokem, ne seznamem nástrojů.
- [ ] U každé činnosti je jasný vlastník v týmu.
- [ ] Dodavatelé jsou rozdělení podle role: správce, zpracovatel, samostatný správce.
- [ ] U zpracovatelů je jasné, jaká data zpracovávají a podle jakých instrukcí.
- [ ] Nový nástroj s osobními údaji prochází krátkým privacy review před použitím.
- [ ] Experimentální nástroje mají datum ukončení a plán smazání dat.
- [ ] Registr obsahuje retenci, exporty, zálohy a dočasné kopie.
- [ ] U klíčových dodavatelů znáš subprocesory a provozní regiony.
- [ ] Registr pomáhá při incidentu, migraci i měsíčním privacy-first reportu.


## Příloha AA: Přístupy, MFA a obnova účtu bez bezpečnostního divadla

Přihlašování je jeden z těch nudných detailů, které nikoho nezajímají — dokud se někdo cizí nepřihlásí za zákazníka, admina nebo účetní. U malého SaaS nejde o to mít nejexotičtější identity architekturu na světě. Jde o to, aby běžné účty, administrace, reset hesla a ztracené MFA neotevíraly zadní dveře dokořán.

OWASP v doporučeních k autentizaci, MFA a správě session zdůrazňuje kombinaci silné autentizace, ochrany proti útokům na přihlašovací formuláře, bezpečného resetu a správného zacházení se session tokeny ([OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html), [OWASP Multifactor Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Multifactor_Authentication_Cheat_Sheet.html), [OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)). NCSC zase u správy hesel pro vlastníky systémů doporučuje modernější přístup než nekonečné rotace a pravidla typu „jedno velké písmeno, jeden hieroglyf a slza administrátora“ ([NCSC: Password administration for system owners](https://www.ncsc.gov.uk/collection/passwords)).

### 1) Rozliš běžný účet, citlivou akci a administraci

Ne každý krok v produktu potřebuje stejnou úroveň kontroly. Když uživatel otevře dashboard, chce rychlost. Když mění fakturační e-mail, exportuje data nebo přidává administrátora, chceš jistotu.

Praktické rozdělení:

- **Běžné přihlášení:** e-mail + heslo, passkey nebo SSO podle cílovky.
- **Citlivé akce:** re-authentication, potvrzení přes MFA nebo potvrzovací e-mail.
- **Administrace produktu:** povinné MFA, oddělené role a auditní stopa.
- **Interní provozní účty:** žádné sdílené heslo v chatu, přístup přes jmenované účty a správce hesel.
- **Break-glass účet:** existuje jen pro nouzi, má omezený počet lidí, silné MFA a pravidelný test.

Příklad: pokud zákazník mění název workspace, nepotřebuješ z toho dělat checkpoint jako na letišti. Pokud mění vlastníka účtu, fakturační údaje nebo exportuje seznam uživatelů, už to checkpoint být má. Bezpečnost nemá otravovat všude; má stát přesně tam, kde špatné rozhodnutí bolí.

### 2) MFA má pomáhat, ne trestat uživatele

MFA je výborná ochrana proti převzetí účtu, ale špatně navržené MFA umí z produktu udělat únikovou hru. Malý SaaS by měl nabídnout jednoduché možnosti, jasné recovery a rozumné vynucení podle rizika.

Doporučený postup:

1. **Začni administrátory:** MFA povinně pro vlastníky workspace, týmové adminy a interní správce.
2. **Nabídni MFA všem:** běžní uživatelé ho mohou zapnout dobrovolně, hlavně u účtů s citlivými daty.
3. **Ulož recovery kódy:** po zapnutí MFA je ukaž jednou, umožni regeneraci po ověření a nikdy je neposílej v plaintext e-mailu.
4. **Loguj změny MFA:** přidání, odebrání, regenerace recovery kódů a změna primární metody patří do auditní stopy.
5. **Měj proces ztráty MFA:** support nesmí vypínat MFA jen proto, že někdo napsal „ahoj, jsem majitel“.

Passkeys jsou dobrá cesta pro jednodušší a phishing-resistant přihlášení; FIDO Alliance je popisuje jako přihlašovací údaje založené na FIDO standardech, které umožňují přihlášení podobně jako odemčení zařízení ([FIDO Alliance: Passkeys](https://fidoalliance.org/passkeys/)). Pro B2B SaaS je ale důležité myslet i na správu zařízení, sdílené firemní procesy a recovery. Passkey není kouzelná pilulka. Je to dobrý zámek, ale pořád potřebuješ plán, kdo má klíče a co se stane při ztrátě telefonu.

**Codyho komentář:** Nejhorší bezpečnostní nastavení je takové, které tým slavnostně zapne, ale nikdo mu nerozumí. Raději jednoduché MFA s dobrým recovery procesem než „enterprise-grade identity platformu“, kterou všichni obcházejí screenshotem QR kódu v interním vlákně. Ano, přesně takhle vznikají horory.

### 3) Reset hesla je bezpečnostní tok, ne jen e-mail s odkazem

Reset hesla bývá nejslabší místo přihlašování. Když útočník nemusí znát heslo, protože mu stačí zneužít recovery proces, celé heslo se stává dekorací.

Bezpečný reset pro malý SaaS:

- odpověď formuláře je stejná, ať e-mail existuje nebo ne,
- reset token je náhodný, jednorázový a krátkodobý,
- token se ukládá jen jako hash,
- po resetu se uživatel nepřihlašuje automaticky, pokud to nedává jasný bezpečnostní smysl,
- po změně hesla se nabídne nebo vynutí odhlášení ostatních sessions,
- změna hesla i reset se zapíšou do auditní stopy,
- uživatel dostane upozornění, že heslo bylo změněno.

OWASP má k resetu hesla samostatný checklist a upozorňuje mimo jiné na jednotné odpovědi, bezpečné tokeny, časové omezení a další kroky po resetu ([OWASP Forgot Password Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html)).

Praktický text do UI:

> Pokud účet s tímto e-mailem existuje, poslali jsme instrukce pro obnovení přístupu. Odkaz má omezenou platnost.

Tohle je nudné, přesné a bezpečnější než „E-mail jsme našli, gratulujeme, právě jsme útočníkovi potvrdili polovinu hádanky.“

### 4) Session není jen cookie, ale dočasný klíč od účtu

Po přihlášení už většinu práce nedělá heslo, ale session. Proto session token neber jako technický detail někde v frameworku. Je to dočasný klíč od účtu.

Minimum pro session politiku:

- používej secure, httpOnly a SameSite cookies podle typu aplikace,
- po přihlášení a zvýšení oprávnění rotuj session identifikátor,
- nastav rozumnou idle expiraci a absolutní expiraci,
- citlivé akce ověřuj znovu,
- umožni uživateli zobrazit a ukončit aktivní sessions,
- při resetu hesla nebo podezřelé změně MFA zvaž odhlášení ostatních zařízení,
- do logů nikdy nepiš session tokeny, reset odkazy ani celé Authorization headery.

Privacy-first pohled: seznam aktivních sessions má být užitečný, ale ne slídivý. Uživatel obvykle potřebuje vědět „prohlížeč, přibližná lokalita, poslední aktivita“. Nepotřebuješ skladovat detailní geolokační historii, fingerprint zařízení a sbírku IP adres navždy. Bezpečnost není výmluva pro datové syslení.

### 5) Role a oprávnění navrhuj podle práce, ne podle ega

U malého SaaS se často začíná jednou rolí: admin. Pak přibude superadmin. Pak owner. Pak „admin, ale ne úplně“. A najednou máš oprávnění jako šuplík s kabely: něco tam určitě funguje, ale nikdo neví co.

Lepší start:

- **Owner:** správa fakturace, členů, kritických nastavení a zrušení účtu.
- **Admin:** správa běžných nastavení a uživatelů bez destruktivních akcí.
- **Member:** práce s produktem bez správy přístupů.
- **Read-only:** audit, reporting, externí konzultant nebo účetní přístup.
- **Support/internal:** časově omezený přístup se souhlasem nebo jasným provozním důvodem.

Každá role má mít popis v produktu i v interní dokumentaci. Pokud roli neumíš vysvětlit jednou větou, pravděpodobně není role, ale historická nehoda.

### 6) Šablona access review pro malý SaaS

```markdown
## Access review: [produkt / workspace / interní systém]

### Kontext
- Datum kontroly:
- Vlastník kontroly:
- Systém nebo workspace:
- Důvod kontroly: měsíční / incident / změna týmu / audit

### Role a účty
| Účet | Role | Důvod přístupu | MFA | Poslední aktivita | Akce |
|---|---|---|---|---|---|
| | | | ano/ne | | ponechat / snížit / odebrat |

### Citlivé přístupy
- Owner účty:
- Admin účty:
- Interní support přístupy:
- API tokeny a integrační účty:
- Break-glass účet:

### Nálezy
- Přístupy k odebrání:
- Role ke snížení:
- Účty bez MFA:
- Nejasné vlastnictví:
- Tokeny k rotaci:

### Rozhodnutí
- Co měníme hned:
- Co plánujeme:
- Kdo je odpovědný:
- Termín další kontroly:
```

### Checklist pro přihlašování a přístupy

- [ ] Admini, owneři a interní správci mají povinné MFA.
- [ ] Reset hesla používá jednorázové krátkodobé tokeny a neprozrazuje existenci účtu.
- [ ] Po resetu hesla a změně MFA řešíme aktivní sessions.
- [ ] Recovery MFA má jasný support postup a auditní stopu.
- [ ] Citlivé akce vyžadují re-authentication nebo silnější potvrzení.
- [ ] Session tokeny, reset odkazy a Authorization headery se nikdy neukládají do logů.
- [ ] Role jsou popsané podle práce, ne podle historické náhody.
- [ ] Sdílené účty jsou výjimka s vlastníkem, datem ukončení a dodatečnou kontrolou.
- [ ] API tokeny mají vlastníka, rozsah oprávnění, expiraci nebo pravidelnou rotaci.
- [ ] Access review probíhá pravidelně a končí konkrétní změnou, ne jen pocitem bezpečí.


## Příloha AB: Logování a auditní stopa bez datového vysavače

Logy jsou provozní černá skříňka. Když se něco rozbije, chceš vědět co, kdy, kde a proč. Zároveň jsou logy jedno z nejčastějších míst, kam nepozorovaně natečou osobní údaje, tokeny, celé URL s parametry, interní poznámky a občas i heslo, protože někdo „dočasně“ zalogoval celý request. Dočasně, samozřejmě. Jako lešení, které zůstane na domě tři roky.

Privacy-first logování neznamená logovat málo naslepo. Znamená logovat záměrně: tak, aby tým dokázal řešit chyby, incidenty a auditní otázky, ale aby z logů nevznikla druhá databáze zákazníků bez pravidel. OWASP u logování doporučuje mimo jiné rozhodnout, které události logovat, chránit logy před manipulací, neukládat citlivá data jako hesla a tokeny a myslet na bezpečné zacházení s logy po celém životním cyklu ([OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)). EDPB zase u privacy-by-design připomíná, že ochrana dat má být zabudovaná do návrhu systémů a výchozích nastavení, ne přilepená až po incidentu ([EDPB: Privacy by design and by default](https://www.edpb.europa.eu/topics/ai-and-technology/privacy-by-design-and-by-default_en)).

### 1) Nejdřív si napiš účel logů

Každý typ logu by měl mít jasný důvod. Pokud ho neumíš vysvětlit jednou větou, pravděpodobně sbíráš šum nebo si vytváříš budoucí problém.

Praktické typy logů:

- **Aplikační logy:** chyby, varování, důležité provozní události.
- **Auditní logy:** kdo změnil citlivé nastavení, přidal uživatele, exportoval data nebo změnil oprávnění.
- **Bezpečnostní logy:** pokusy o přihlášení, blokované požadavky, změny MFA, podezřelé tokeny.
- **Infrastrukturní logy:** deploye, restart služeb, stav databáze, fronty, zálohy.
- **Analytické eventy:** agregované produktové signály, které nepatří do debug logů.

Špatný logovací plán zní: „logujme všechno, ono se to někdy hodí.“ Dobrý plán zní: „pro incident potřebujeme čas, typ události, interní ID, stav a korelační ID; nepotřebujeme jméno zákazníka, e-mail ani celý obsah formuláře.“

**Codyho komentář:** Logy nejsou odpadkový koš na data, která se nevešla do modelu. Jsou nástroj pro rozhodování pod tlakem. A pod tlakem fakt nechceš řešit, jestli můžeš otevřít soubor, ve kterém jsou cizí přístupové tokeny.

### 2) PII do logů nepatří jako výchozí stav

Osobní údaje se do logů někdy dostanou oprávněně, ale výchozí politika má být opačná: nejdřív minimalizace, potom výjimky. V malém SaaS obvykle stačí interní identifikátory a korelační ID.

Co raději nelogovat:

- hesla, reset tokeny, session tokeny, API klíče a Authorization headery,
- celé request/response body u formulářů, onboardingu, fakturace a supportu,
- celé URL, pokud mohou obsahovat e-mail, token, UTM s osobními údaji nebo vyhledávací dotaz,
- IP adresy bez jasného účelu, retence a maskování,
- obsah nahraných souborů, chatů, poznámek a e-mailů,
- raw webhook payloady z cizích služeb bez filtru.

Bezpečnější vzor:

```text
event=invoice_exported
workspace_id=ws_12345
actor_id=user_67890
request_id=req_abc123
result=success
```

Rizikový vzor:

```text
User ondrej@example.com exported invoice for Firma s.r.o. from /export?email=ondrej@example.com&token=...
```

První zápis pomůže při auditu. Druhý zápis je datová skládka s mašlí.

### 3) Zaveď sanitizaci na vstupu i před uložením

Nespoléhej na to, že si každý vývojář vzpomene a nebude logovat citlivé hodnoty. Sanitizace má být součást platformy: loggeru, middleware, error handleru a webhook přijímačů.

Praktická pravidla:

1. **Maskuj známé klíče:** `password`, `token`, `secret`, `authorization`, `cookie`, `api_key`, `reset_token`.
2. **Zkracuj dlouhé hodnoty:** log nepotřebuje celý payload ani megabajtový stack s uživatelským obsahem.
3. **Normalizuj URL:** ukládej cestu bez query stringu, nebo explicitně povolené parametry.
4. **Odděl chybu a data:** stack trace ano, obsah formuláře jen výjimečně a po redakci.
5. **Testuj sanitizaci:** přidej test, který ověří, že citlivé klíče v logu končí jako `[redacted]`.

Příklad povoleného seznamu pro URL parametry:

```text
allowed_query_params = ["utm_source", "utm_medium", "utm_campaign", "page"]
blocked_query_params = ["email", "token", "code", "session", "invite"]
```

U privacy-first provozu je lepší mít pár užitečných parametrů povolených explicitně než doufat, že se do URL nikdy nedostane nic citlivého. Dostane. Murphy byl pravděpodobně backend developer.

### 4) Auditní stopu odděl od debug hluku

Auditní log není stejný jako běžný aplikační log. Debug log můžeš zkracovat, filtrovat a po pár dnech zahodit. Auditní stopa má být konzistentní, čitelná a odolnější proti manipulaci.

Auditní loguj hlavně:

- změnu vlastníka účtu nebo workspace,
- přidání, odebrání a změnu role uživatele,
- zapnutí nebo vypnutí MFA,
- změnu fakturačních údajů,
- export dat,
- změnu integračního tokenu nebo webhooku,
- mazání dat a změnu retenčních pravidel,
- zásah administrátora do zákaznického účtu.

Každá auditní událost by měla mít:

- čas v jednotném formátu,
- typ události,
- interní ID aktéra,
- interní ID objektu,
- výsledek,
- korelační ID požadavku,
- stručný důvod u interních zásahů.

Neznamená to logovat víc osobních údajů. Znamená to lépe popsat změnu. Když zákazník za měsíc řekne „kdo přidal dalšího admina?“, odpověď nemá být archeologická expedice přes debug soubory.

### 5) Retence logů musí být kratší než firemní paměť

Logy mají vlastní životnost. Bez retence se z nich stane archiv všeho, co se kdy pokazilo — a někdy i všeho, co se nikdy nemělo uložit.

Praktický start pro malý SaaS:

- **Debug logy:** 7–14 dní podle provozní potřeby.
- **Aplikační chyby:** 30–90 dní, pokud slouží k trendům a stabilitě.
- **Bezpečnostní logy:** delší retence podle rizika a povinností, ale s přísnějším přístupem.
- **Auditní logy:** podle smluv, právních důvodů a očekávání zákazníků.
- **Raw webhook payloady:** ideálně neukládat vůbec, nebo krátkodobě a redigovaně.

Retence není jen číslo v konfiguraci. Musíš vědět, kde logy leží: aplikační log store, infrastruktura, zálohy, exporty do monitoringu, lokální soubory z incidentu. Pokud smažeš log v hlavním nástroji, ale kopie zůstane v exportu na notebooku, privacy-first konfety se nekonají.

### 6) Přístup k logům dej jen lidem, kteří ho opravdu potřebují

Logy často obsahují provozní tajemství, interní identifikátory, bezpečnostní signály a občas i chyby sanitizace. Přístup k nim proto nemá být automatická výbava každého v týmu.

Minimum pravidel:

- produkční logy čtou jen lidé s provozní nebo bezpečnostní odpovědností,
- support dostane raději auditní pohled v produktu než přímý přístup do log store,
- přístup do logů má MFA a je součástí access review,
- export logů má vlastní důvod, expiraci a místo uložení,
- incidentové kopie se po uzavření incidentu smažou nebo přesunou do kontrolovaného úložiště,
- interní tooling ukazuje jen nezbytné údaje pro konkrétní roli.

Když logy používáš i pro support, postav raději bezpečný interní panel: ukáže stav požadavku, poslední chybu, korelační ID a auditní události. Ne celý payload. Support pak pomůže zákazníkovi a zároveň se nestane nechtěným správcem citlivých dat.

### Šablona logovací politiky

```markdown
## Logovací politika: [produkt / služba]

### Účel
- Provozní diagnostika:
- Bezpečnostní monitoring:
- Auditní stopa:
- Produktová analytika:

### Co logujeme
- Aplikační události:
- Auditní události:
- Bezpečnostní události:
- Infrastrukturní události:

### Co nelogujeme
- Tajné hodnoty:
- Osobní údaje:
- Obsah zákaznických dat:
- URL/query parametry:

### Sanitizace
- Maskované klíče:
- Povolené query parametry:
- Test sanitizace:
- Odpovědný vlastník:

### Přístup a retence
- Kdo má přístup:
- Retence podle typu logu:
- Exporty a incidentové kopie:
- Review interval:
```

### Checklist pro logování a auditní stopu

- [ ] Každý typ logu má popsaný účel a vlastníka.
- [ ] Logger automaticky maskuje tokeny, hesla, cookies a Authorization headery.
- [ ] URL se ukládají bez citlivých query parametrů.
- [ ] Request a response body se nelogují plošně.
- [ ] Auditní události jsou oddělené od debug logů.
- [ ] Citlivé akce mají auditní stopu s aktérem, objektem, výsledkem a časem.
- [ ] Logy mají definovanou retenci podle typu.
- [ ] Produkční logy nejsou dostupné celému týmu.
- [ ] Exporty logů mají expiraci a místo uložení.
- [ ] Incidentové kopie se po uzavření incidentu řeší v postmortem.
- [ ] Sanitizace logů má automatický test.
- [ ] Jednou měsíčně kontrolujeme, jestli se v logách neobjevují PII nebo tajné hodnoty.


## Příloha AC: Dokumentace a knowledge base bez firemní archeologie

Dokumentace není odkladiště textů, které nikdo nechce říkat nahlas. Je to provozní vrstva produktu. U malého webu nebo SaaS rozhoduje o tom, jestli zákazník zvládne první kroky bez podpory, jestli tým opakuje stejné vysvětlování pořád dokola a jestli nová funkce přežije déle než paměť člověka, který ji napsal.

Privacy-first dokumentace má ještě jeden úkol: říkat pravdu bez zbytečného sběru dat. Nemá nahrazovat produkt, ale má snižovat nejistotu. Nemá nutit uživatele poslat ticket kvůli každé drobnosti. A hlavně nemá fungovat jen jako hezká fasáda, za kterou tým interně pořád hledá odpovědi v chatu, starých e-mailech a v hlavě kolegy, který je zrovna na dovolené.

Diátaxis popisuje čtyři základní typy dokumentace: tutorials, how-to guides, reference a explanation ([Diátaxis](https://www.diataxis.fr/), [Diátaxis: Start here](https://www.diataxis.fr/start-here/)). The Good Docs Project nabízí praktické šablony pro typy dokumentů jako README, how-to, reference, troubleshooting nebo release notes ([The Good Docs Project: Templates](https://www.thegooddocsproject.dev/template)). Pro malý tým z toho plyne jednoduché pravidlo: nepiš jednu obří stránku „Nápověda“. Piš různé typy textu podle toho, co člověk právě potřebuje udělat.

### 1) Rozděl dokumentaci podle situace uživatele

Uživatelé nechodí do dokumentace proto, že milují dokumentaci. Chodí tam, protože se chtějí pohnout dál. Proto se ptej, v jaké situaci jsou:

- **Začátečník:** chce první úspěch a potřebuje vedení krok za krokem.
- **Praktik:** ví, co chce udělat, a hledá přesný postup.
- **Operátor:** potřebuje jistotu v nastavení, limitech, parametrech a chybových stavech.
- **Rozhodovatel:** chce pochopit důvody, rizika, privacy dopady a architekturu.
- **Support nebo interní tým:** potřebuje rychle ověřit stav, historii a doporučený postup.

Z toho vznikne mapa dokumentace:

| Potřeba | Typ dokumentu | Příklad |
|---|---|---|
| Naučit se první použití | Tutorial | „Vytvoř první projekt za 10 minut“ |
| Dokončit úkol | How-to | „Jak pozvat kolegu do workspace“ |
| Ověřit přesné hodnoty | Reference | „Role a oprávnění“ |
| Pochopit kontext | Explanation | „Proč nepoužíváme marketingové pixely“ |
| Vyřešit problém | Troubleshooting | „E-mail s resetem hesla nepřišel“ |

Když tyto typy smícháš, vznikne dokumentační guláš. Tutorial začne vysvětlovat historii autentizace, reference začne radit marketingovou strategii a troubleshooting skončí větou „zkuste to znovu“, což je dokumentační ekvivalent pokrčení ramen.

### 2) Piš podle úkolu, ne podle obrazovky

Špatná dokumentace kopíruje navigaci produktu: „Menu Nastavení“, „Sekce Uživatelé“, „Tlačítko Upravit“. Dobrá dokumentace kopíruje cíl člověka: „Jak přidat účetní do fakturace“, „Jak změnit vlastníka workspace“, „Jak exportovat data před ukončením služby“.

Praktický vzor pro how-to článek:

```markdown
# Jak [udělat konkrétní úkol]

## Kdy se to hodí
[Jedna až dvě věty situace.]

## Než začneš
- Přístup nebo role:
- Potřebná data:
- Riziko / dopad:

## Postup
1. ...
2. ...
3. ...

## Jak poznáš, že je hotovo
- ...

## Co dělat, když se to nepovede
- ...

## Privacy poznámka
- Jaká data se při kroku používají:
- Kde se projeví změna:
```

Privacy poznámka nemusí být v každém článku dlouhá. Často stačí jedna věta: „Export obsahuje e-maily členů týmu a fakturační historii, proto ho ukládej jen do kontrolovaného úložiště.“ To je mnohem užitečnější než obecné „dbáme na vaše soukromí“, které uživatel četl tolikrát, že mu z toho usnula myš.

### 3) Knowledge base má snižovat support, ne schovávat support

Knowledge base není náhrada za pomoc. Je to první vrstva pomoci. Pokud článek nevyřeší problém, má uživateli ukázat další bezpečný krok: kontakt, formulář, status page, diagnostické ID nebo přesný seznam informací, které má poslat.

Dobrá struktura troubleshooting článku:

1. **Symptom:** co člověk vidí.
2. **Pravděpodobné příčiny:** bez obviňování uživatele.
3. **Rychlá kontrola:** nejjednodušší kroky bez rizika.
4. **Bezpečný postup:** co udělat dál.
5. **Kdy kontaktovat podporu:** jasný práh.
6. **Co neposílat:** hesla, tokeny, celé exporty, osobní údaje třetích osob.

Příklad:

```markdown
# Reset hesla nepřišel

## Co zkontrolovat
1. Ověř, že zadáváš e-mail ke správnému účtu.
2. Zkontroluj složku spam nebo firemní karanténu.
3. Počkej 5 minut; některé firemní brány doručují bezpečnostní e-maily pomaleji.

## Kdy napsat podpoře
Napiš nám, pokud e-mail nepřijde ani po 10 minutách.

## Co nám pošli
- e-mail účtu,
- přibližný čas pokusu,
- název organizace nebo workspace.

## Co neposílej
- heslo,
- reset token,
- screenshot s citlivými údaji dalších lidí.
```

Tím chráníš uživatele i support. Support dostane kontext, ale ne neřízený balík dat. Uživatel ví, co je bezpečné poslat. Všichni vyhrávají a nikdo nemusí lovit token ze screenshotu, což je sport, který by měl zůstat neexistující.

### 4) Dokumentace musí mít vlastníka a životní cyklus

Neaktuální dokumentace je horší než žádná dokumentace, protože vytváří falešnou jistotu. Proto každý důležitý článek potřebuje minimální metadata:

- vlastník,
- datum poslední kontroly,
- související funkce nebo repozitář,
- úroveň rizika,
- datum další revize,
- vazba na support dotazy nebo incidenty.

Praktický režim:

- **Nová funkce:** release nejde ven bez minimální dokumentace nebo vědomého rozhodnutí, proč není potřeba.
- **Změna chování:** update dokumentace je součást ticketu, ne dobrovolný bonus.
- **Incident:** po postmortem zkontroluj, jestli dokumentace mohla incident zkrátit.
- **Support trend:** když se stejný dotaz opakuje třikrát, vzniká článek nebo úprava produktu.
- **Měsíční review:** projdi nejčtenější a nejčastěji eskalované články.

**Codyho komentář:** „Dokumentaci dopíšeme později“ je věta, která zní rozumně přesně do chvíle, než později přijde s fakturou, incidentem a novým kolegou, který se ptá na totéž potřetí.

### 5) Měř dokumentaci privacy-first způsobem

Dokumentaci můžeš zlepšovat bez nahrávání chování jednotlivých lidí. Stačí kombinovat agregovaná data a support signály.

Užitečné metriky:

- počet zobrazení článků,
- hledané výrazy v dokumentaci bez ukládání identit,
- články, po kterých lidé často otevírají support,
- opakované support otázky,
- hodnocení „pomohlo / nepomohlo“ bez volného textu jako výchozího sběru,
- čas od vydání funkce k prvnímu support dotazu.

Pozor na falešné závěry. Článek s vysokou návštěvností může být skvělý, nebo naopak znamená, že produkt je matoucí. Článek s nízkou návštěvností může být zbytečný, nebo jen řeší vzácný, ale kritický problém. Proto vždy spoj čísla s kontextem.

Privacy-first otázky před měřením dokumentace:

- Potřebujeme znát konkrétního člověka, nebo stačí agregace?
- Ukládáme vyhledávací dotazy, které mohou obsahovat osobní údaje?
- Máme retenci pro feedback a interní poznámky?
- Posíláme data z dokumentace do externích nástrojů?
- Umíme vysvětlit, proč danou metriku sbíráme?

### 6) Dokumentuj privacy a bezpečnost lidsky

Privacy policy je právní dokument. Knowledge base je místo, kde můžeš vysvětlit dopady lidsky. Evropský privacy-first SaaS by měl mít kromě právních textů i praktické články typu:

- kde běží data,
- jak fungují role a oprávnění,
- jak exportovat data,
- jak požádat o smazání,
- jak fungují zálohy a retence,
- co se loguje a co se neloguje,
- jak bezpečně pozvat externistu,
- jak vypnout integraci.

WCAG klade důraz mimo jiné na vnímatelnost, ovladatelnost, srozumitelnost a robustnost webového obsahu ([W3C: WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/), [W3C: WCAG 2.2](https://www.w3.org/TR/WCAG22/)). Pro dokumentaci to prakticky znamená: krátké odstavce, jasné nadpisy, popsané odkazy, textové alternativy u obrázků, žádné vysvětlování jen barvou a žádné screenshoty jako jediný zdroj pravdy.

Dokumentace o soukromí nemá znít jako právní kouřová clona. Lepší je konkrétní věta:

> Produkční data běží v EU regionu. Support vidí jen údaje potřebné k řešení ticketu. Exporty mažeme podle retenční politiky a přístupy kontrolujeme každý měsíc.

Tohle je čitelné. A když to není pravda, dokumentace splnila další funkci: odhalila provozní dluh.

### Šablona dokumentační karty

```markdown
## Dokumentační karta: [název článku / sekce]

### Účel
- Jaký problém článek řeší:
- Pro koho je určený:
- Jak poznáme, že pomohl:

### Typ obsahu
- Tutorial / how-to / reference / explanation / troubleshooting:
- Související produktová oblast:

### Vlastnictví
- Vlastník článku:
- Technický reviewer:
- Privacy/security reviewer, pokud je potřeba:
- Poslední kontrola:
- Další revize:

### Data a privacy
- Zmiňuje osobní údaje nebo bezpečnostní postupy:
- Co uživatel nemá posílat do supportu:
- Retence feedbacku nebo vyhledávacích dotazů:

### Vazby
- Související články:
- Související support tagy:
- Související release nebo changelog:
```

### Checklist pro dokumentaci a knowledge base

- [ ] Dokumentace je rozdělená na tutorialy, how-to návody, reference, vysvětlení a troubleshooting.
- [ ] Každý důležitý článek řeší konkrétní situaci uživatele, ne jen obrazovku produktu.
- [ ] How-to návody mají předpoklady, postup, kontrolu výsledku a bezpečný další krok.
- [ ] Troubleshooting říká, co poslat podpoře a co neposílat nikdy.
- [ ] Články mají vlastníka, datum kontroly a vazbu na produktovou oblast.
- [ ] Změna funkce zahrnuje i aktualizaci dokumentace.
- [ ] Měření dokumentace je agregované a má retenci.
- [ ] Vyhledávací dotazy a feedback neukládají zbytečné osobní údaje.
- [ ] Privacy a bezpečnost jsou vysvětlené lidsky, nejen právním dokumentem.
- [ ] Dokumentace je přístupná: jasné nadpisy, popsané odkazy, textové alternativy a čitelný jazyk.
- [ ] Opakované support dotazy se mění na článek, úpravu produktu nebo lepší onboarding.
- [ ] Jednou měsíčně proběhne kontrola nejčtenějších a nejvíc eskalovaných článků.


## Příloha AD: Interní admin bez superuživatelského adrenalinu

Interní administrace je často nejnebezpečnější část malého SaaS. Ne proto, že by vypadala dramaticky. Právě naopak: bývá to nenápadná stránka s tabulkou zákazníků, pár filtry a tlačítkem „upravit“. Jenže když se tam nahází všechno, vznikne z ní dálkové ovládání celé firmy.

Privacy-first admin má jednoduchý princip: člověk vidí a mění jen to, co potřebuje pro konkrétní práci. OWASP ASVS pracuje mimo jiné s ověřováním přístupových pravidel a bezpečnostních kontrol v aplikacích ([OWASP: Application Security Verification Standard](https://owasp.org/projects/asvs)). EDPB připomíná privacy by design a by default jako způsob, jak ochranu dat zabudovat do návrhu systému, ne lepit na konec projektu ([EDPB: Privacy by design and by default](https://www.edpb.europa.eu/topics/ai-and-technology/privacy-by-design-and-by-default_en)). Admin je přesně místo, kde se to pozná.

**Codyho komentář:** Pokud má každý v týmu roli „admin“, není to role. Je to společná modlitba, že se nikdo nepřeklikne.

### 1) Admin není jedna obrazovka, ale sada pracovních situací

Nezačínej otázkou „co všechno dáme do administrace“. Začni otázkou „jaké práce se v adminu opravdu dělají“.

Typické situace:

- support řeší konkrétní ticket,
- účetní kontroluje fakturační stav,
- obchodník doplňuje stav příležitosti,
- produktový tým sleduje agregované signály,
- technik řeší incident,
- vlastník účtu žádá export nebo smazání dat.

Každá situace má jiný rozsah dat, jinou dobu platnosti a jiné riziko. Support často nepotřebuje vidět fakturační historii. Obchodník nepotřebuje auditní log bezpečnostních akcí. Produktový tým často nepotřebuje osobní údaje vůbec, stačí agregace.

Praktický postup:

1. Sepiš hlavní pracovní situace v adminu.
2. Ke každé napiš, kdo ji řeší a proč.
3. Vyjmenuj minimální data potřebná pro dokončení práce.
4. Označ citlivé akce, které vyžadují potvrzení, schválení nebo dodatečný audit.
5. Všechno ostatní schovej, dokud neexistuje jasný důvod.

### 2) Role navrhuj podle práce, ne podle firemní hierarchie

Role typu „owner“, „admin“ a „user“ nestačí, pokud v adminu běží support, obchod, fakturace i technická správa. Pro malý SaaS je lepší kombinovat jednoduché role s konkrétními oprávněními.

Příklad rozumného rozdělení:

- **Support:** vidí základní profil účtu, stav produktu, poslední bezpečné události a historii ticketů.
- **Billing:** vidí fakturační údaje, tarif, platby, dobropisy a daňové údaje.
- **Product:** vidí agregované používání funkcí bez identifikace konkrétních lidí, pokud ji nepotřebuje.
- **Security/ops:** vidí auditní události, session informace, integrace a bezpečnostní nastavení.
- **Owner:** schvaluje citlivé změny, exporty, mazání a přidělení vyšších oprávnění.

U každé role si polož tři otázky:

- Co musí vidět každý den?
- Co smí vidět jen při konkrétním ticketu nebo incidentu?
- Co nemá vidět nikdy?

Třetí otázka je nejdůležitější. Bez ní se role časem nafukují jako batoh na víkend, do kterého někdo přibalil tiskárnu.

### 3) Citlivé akce odděl od běžného prohlížení

Zobrazit informaci není totéž jako změnit stav účtu. Admin by měl rozlišovat minimálně tři úrovně akcí:

1. **Čtení:** zobrazení minimálních dat potřebných pro práci.
2. **Běžná změna:** úprava poznámky, stavu ticketu, interního štítku nebo nepodstatného nastavení.
3. **Citlivá změna:** reset MFA, změna vlastníka účtu, export dat, smazání účtu, ruční úprava fakturace, impersonace uživatele, vypnutí bezpečnostního pravidla.

Citlivé akce potřebují lepší UX než „jsi si jistý?“. Dobrá ochrana obsahuje:

- vysvětlení dopadu před akcí,
- opakované ověření identity u vysoce rizikové akce,
- povinný důvod změny,
- auditní záznam,
- upozornění vlastníkovi účtu, pokud je to vhodné,
- možnost rychlého rollbacku, pokud existuje bezpečný návrat.

OWASP má samostatné doporučení pro logování bezpečnostně relevantních událostí ([OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)). V adminu to neznamená logovat všechno navždy. Znamená to logovat správné události, bez citlivého obsahu navíc a s jasnou retencí.

### 4) Impersonace je skalpel, ne pohodlný režim práce

Možnost „přihlásit se jako uživatel“ je lákavá, protože support rychle vidí problém. Zároveň je to jedna z nejrizikovějších funkcí adminu. Pokud ji opravdu potřebuješ, udělej z ní řízený proces.

Bezpečnější pravidla:

- impersonace je vypnutá jako výchozí stav,
- používá se jen pro konkrétní ticket nebo incident,
- vyžaduje důvod a časové omezení,
- nezobrazuje tajné údaje, tokeny, hesla ani celé osobní profily,
- každá akce je jasně označená jako akce administrátora,
- uživatel může dostat informaci, že k účtu proběhl support přístup, pokud to neohrozí řešení incidentu.

Alternativa je často lepší: vytvoř „support snapshot“, který ukáže technický stav relevantní k problému bez plného vstupu do účtu. Například stav integrace, poslední chybový kód, čas poslední synchronizace, tarif, aktivní feature flags a anonymizované ID události.

### 5) Admin musí mít vlastní datovou minimalizaci

Častá chyba: aplikace minimalizuje data pro zákazníka, ale interní admin ukazuje všechno „pro jistotu“. Jenže interní zobrazení je také zpracování dat. Proto admin potřebuje vlastní pravidla.

Praktické vzory:

- e-mail zobrazuj celý jen tam, kde je potřeba; jinde stačí maskovaná verze,
- telefon ukaž jen rolím, které opravdu volají zákazníkům,
- adresu drž ve fakturační části, ne v support detailu,
- poznámky v CRM odděl od produktových dat,
- exporty generuj dočasně a maž je podle retenčního pravidla,
- vyhledávání omez tak, aby nepodporovalo náhodné procházení lidí.

Admin má také chránit před zvědavostí. Ne každé riziko je hacker v mikině. Někdy je to unavený člověk, který si otevře „jen tak“ účet známé firmy. Proto pomáhají access review, auditní logy a obrazovky navržené podle práce, ne podle maximalistické zvědavosti.

### 6) Měř používání adminu, ale bez interního panoptika

Je užitečné vědět, které části adminu se používají, kde vznikají chyby a jaké citlivé akce přibývají. Není nutné z toho dělat sledování zaměstnanců po minutách.

Dobré metriky:

- počet citlivých akcí podle typu,
- počet zamítnutých nebo neúspěšných pokusů,
- role s nejširším oprávněním,
- účty bez MFA,
- exporty vytvořené a smazané včas,
- opakované support situace, které by měl řešit produkt.

Tyhle metriky slouží k bezpečnosti a zlepšování produktu, ne k mikromanagementu. Pokud z nich děláš interní bič, tým si najde obchvaty. A obchvaty jsou přesně to, co privacy-first provoz nechce.

### Šablona admin access review

```markdown
## Admin access review: [produkt / interní systém]

### Kontext
- Datum kontroly:
- Vlastník systému:
- Reviewer:
- Důvod kontroly:

### Role
- Role v systému:
- Účel role:
- Počet lidí s rolí:
- Je role stále potřeba:

### Citlivé akce
- Jaké citlivé akce role smí:
- Které akce vyžadují důvod:
- Které akce vyžadují dodatečné ověření:
- Které akce posílají upozornění:

### Data
- Jaká osobní data role vidí:
- Co je maskované:
- Co role nemá vidět:
- Retence exportů a snapshotů:

### Nálezy
- Příliš široká oprávnění:
- Neaktivní účty:
- Chybějící MFA:
- Nejasný vlastník role:
- Doporučené změny:
```

### Checklist pro interní admin a backoffice

- [ ] Admin je rozdělený podle pracovních situací, ne podle jedné univerzální obrazovky.
- [ ] Každá role má popsaný účel, minimální data a zakázané oblasti.
- [ ] Citlivé akce mají vysvětlení dopadu, důvod, auditní záznam a podle rizika další ověření.
- [ ] Impersonace je časově omezená, auditovaná a navázaná na konkrétní důvod.
- [ ] Support má bezpečný snapshot místo plného přístupu, kde to stačí.
- [ ] Osobní údaje jsou v adminu maskované všude, kde není potřeba plné zobrazení.
- [ ] Exporty jsou dočasné, chráněné a mají retenční pravidlo.
- [ ] Přístupy do adminu se pravidelně revidují.
- [ ] Auditní logy neobsahují zbytečné PII ani tajné hodnoty.
- [ ] Metriky používání adminu slouží k bezpečnosti a zlepšení produktu, ne k internímu šmírování.


## Příloha AE: Billing, fakturace a platby bez zbytečného úniku dat

Fakturace v malém SaaS často začne jako „pošleme fakturu z účetního systému a hotovo“. Pak přibude platební brána, trial, kupony, dobropisy, ruční slevy, DPH režimy, export pro účetní a najednou je z billing vrstvy jedna z nejcitlivějších částí produktu. Ne proto, že by byla sexy. Spíš proto, že spojuje identitu zákazníka, smluvní vztah, peníze, daňové údaje a historii používání služby.

Evropská komise připomíná, že fakturační pravidla pro DPH řeší mimo jiné náležitosti faktur a elektronickou fakturaci ([European Commission: VAT invoicing rules](https://taxation-customs.ec.europa.eu/taxation/vat/businesses/vat-invoicing-rules_en)). Česká finanční správa má samostatné informace k DPH a kontrolnímu hlášení, což je dobrý start pro ověření praktických povinností podle konkrétní situace ([Finanční správa: Daň z přidané hodnoty](https://financnisprava.gov.cz/cs/dane/dane/dan-z-pridane-hodnoty)). Privacy-first pointa je jednoduchá: daňové povinnosti plň přesně, ale nepoužívej je jako výmluvu pro sběr všeho, co se zrovna hodí.

**Codyho komentář:** Billing je místo, kde se z „jen interní poznámky“ rychle stane právní dokument, export pro účetní a citlivý záznam v supportu. Jinými slovy: piš tam tak, jako by to jednou četl někdo s lupou a špatnou náladou.

### 1) Odděl produktový účet od fakturační identity

Produktový účet a fakturační identita nejsou totéž. Uživatel může být vývojář, který produkt nastavuje. Plátce může být firma. Fakturační kontakt může být účetní. Právní odběratel může být jiná entita ve skupině. Když to sliješ do jedné tabulky „user“, začne bolet každá změna e-mailu, vlastnictví nebo firmy.

Lepší model pro B2B SaaS:

- **Workspace / tenant:** prostor, kde se používá produkt.
- **Uživatel:** člověk s rolí v produktu.
- **Fakturační profil:** právní název, IČO/DIČ, adresa, země, režim DPH, fakturační e-mail.
- **Předplatné:** tarif, období, stav, limity, sleva, datum obnovy.
- **Platební metoda:** token nebo reference u platebního poskytovatele, ne číslo karty v tvé databázi.
- **Daňový doklad:** neměnný záznam s číslem, položkami, částkami a zákonnou retencí.

Praktické pravidlo: produkt může znát stav předplatného, ale nemusí znát všechny fakturační detaily. Support může vidět, že účet má problém s platbou, ale nemusí vidět celé daňové údaje, pokud je neřeší. Produktové metriky mohou vědět, že tarif je „Pro“, ale nepotřebují fakturační adresu ani DIČ.

### 2) Platební data drž u specializovaného poskytovatele

Pokud nejsi platební instituce, nesnaž se být platební instituce v přestrojení za startup. Čísla karet, ověřovací kódy a citlivá platební data patří k poskytovateli, který má na bezpečnost a compliance procesy. Tvoje aplikace má pracovat s referencí, stavem platby a webhookem.

Privacy-first minimální návrh:

1. Uživatel zadává kartu v bezpečném prvku poskytovatele, ne do tvého formuláře.
2. Aplikace ukládá jen ID zákazníka, ID platební metody a stav předplatného.
3. Webhooky validuješ podpisem a zpracováváš idempotentně.
4. Do logů nikdy neposíláš celé payloady s osobními nebo platebními údaji.
5. Do supportu posíláš jen bezpečný souhrn: stav, datum, částku, chybový typ, další krok.

Příklad bezpečného support textu:

> Platba za workspace „Acme“ ve výši 49 EUR selhala 2026-10-12 kvůli odmítnutí bankou. Uživatel má aktualizovat platební metodu v billing portálu.

Špatný text:

> Tady je celý webhook payload, poslední čtyři čísla karty, e-mail, adresa a interní poznámka obchodníka.

První varianta řeší práci. Druhá vyrábí budoucí incident s příchutí „kdo to sakra poslal do Slacku“.

### 3) Faktura má být neměnný doklad, ne živý dokument

U faktur potřebuješ disciplínu. Jakmile je daňový doklad vystavený, nemá se potichu přepisovat, protože někdo našel překlep nebo změnil adresu. Opravy řeš dobropisem, opravným dokladem nebo postupem, který odpovídá účetní a daňové realitě. Konkrétní právní režim ověř s účetní nebo daňovým poradcem; e-book není účetní kancelář v klobouku.

Technicky to znamená:

- faktura má vlastní číselnou řadu,
- vystavený doklad má uložený snapshot údajů v době vystavení,
- změna fakturačního profilu ovlivní budoucí doklady, ne historické doklady,
- storno nebo oprava má vlastní auditní stopu,
- PDF faktury je generované z uložených dat, ne ručně upravované mimo systém,
- export pro účetní má verzi, datum a rozsah.

Užitečný detail: ukládej i důvod ruční slevy, dobropisu nebo prodloužení trialu. Ne kvůli mikromanagementu, ale kvůli tomu, aby za tři měsíce někdo pochopil, proč má zákazník jinou cenu než ceník. Důvod má být věcný, ne osobní román.

### 4) Billing portál navrhni jako self-service, ale bezpečně

Self-service billing šetří support a zvyšuje důvěru. Zákazník by měl umět najít faktury, změnit fakturační e-mail, aktualizovat platební metodu, stáhnout doklady a pochopit, kdy se obnoví předplatné. Zároveň nejde o veřejné hřiště: billing akce mění peníze a právní vztah.

Rozumná pravidla:

- přístup k billing portálu má role owner nebo billing admin,
- citlivé změny vyžadují čerstvé přihlášení nebo MFA podle rizika,
- změna fakturačního e-mailu pošle potvrzení starému i novému kontaktu,
- změna tarifu jasně ukáže dopad na cenu, limity a datum účinnosti,
- zrušení předplatného nevyžaduje prosbu na support, ale obsahuje jasné důsledky,
- stažení faktur se loguje, ale bez ukládání obsahu faktury do analytiky.

Privacy-first bonus: billing portál nemá být reklamní plocha s trackery. Člověk tam řeší peníze, smlouvu a doklady. Nepotřebuje remarketingový pixel, heatmapu ani „growth hack“ popup, který se snaží zachránit churn jako prodavač deštníků v poušti.

### 5) Webhooky, exporty a účetní integrace jsou datové hranice

Billing málokdy žije sám. Posílá data do účetnictví, CRM, e-mailingu, banky, platební brány nebo interního reportingu. Každé propojení je datová hranice a má mít vlastní kartu.

U každé integrace napiš:

- jaký systém data posílá,
- jaký systém data přijímá,
- jaký je účel,
- jaké konkrétní pole se přenáší,
- kdo má přístup na druhé straně,
- jak dlouho se data drží,
- jak integraci vypneš nebo nahradíš.

Webhooky navrhuj jako provozní infrastrukturu, ne jako skládku JSONu. Ukládej minimální payload potřebný pro zpracování a diagnostiku. Citlivé části maskuj nebo neukládej vůbec. Pokud potřebuješ raw payload kvůli řešení incidentů, dej mu krátkou retenci, omezený přístup a jasný důvod.

### 6) Revenue report není důvod znát všechno o každém

Zakladatel potřebuje vědět, jestli SaaS roste. Nepotřebuje kvůli tomu exportovat osobní údaje všech zákazníků do pěti tabulek. Revenue reporting může být praktický a privacy-first zároveň.

Stačí sledovat:

- MRR podle tarifu a segmentu,
- nové, rozšířené, zmenšené a zrušené předplatné,
- churn podle důvodu odchodu,
- neúspěšné platby podle typu chyby,
- počet účtů v grace period,
- agregovaný dopad slev a kuponů.

Pozor na volné texty u důvodů odchodu. „Nemáme budget“ je užitečný signál. „Pan Novák psal, že šéf je naštvaný a firma propouští“ je zbytečné osobní drama v databázi. Pro reporting používej kategorie a volný text drž odděleně, s retencí a omezeným přístupem.

### Šablona billing review

```markdown
## Billing review: [produkt / workspace]

### Kontext
- Kontrolované období:
- Vlastník billing procesu:
- Zapojené systémy:

### Datový model
- Fakturační profil oddělený od uživatele: ano/ne
- Platební data uložená jen jako token/reference: ano/ne
- Historické faktury neměnné: ano/ne

### Přístupy
- Role s přístupem k billing údajům:
- Role s právem měnit tarif nebo rušit předplatné:
- Poslední access review:

### Integrace
- Platební poskytovatel:
- Účetnictví:
- CRM/reporting:
- Webhook retence:

### Rizika a nálezy
- Zbytečná osobní data:
- Nejasné exporty:
- Chybějící auditní stopa:
- Doporučené změny:
```

### Checklist pro billing a fakturaci

- [ ] Produktový účet, uživatel, fakturační profil, předplatné a doklad jsou oddělené entity.
- [ ] Aplikace neukládá čísla karet ani citlivá platební data.
- [ ] Webhooky se validují, zpracovávají idempotentně a nelogují zbytečné payloady.
- [ ] Vystavené faktury jsou neměnné; opravy mají řízený účetní postup.
- [ ] Billing portál je dostupný jen oprávněným rolím a citlivé změny mají auditní stopu.
- [ ] Změny tarifu, slevy, dobropisy a ruční zásahy mají věcný důvod.
- [ ] Exporty pro účetní a reporting mají jasný rozsah, vlastníka a retenci.
- [ ] Revenue reporty používají agregace a kategorie místo osobních detailů.
- [ ] Integrace plateb, účetnictví a CRM mají datovou kartu a exit postup.
- [ ] Support vidí bezpečný billing souhrn, ne kompletní fakturační a platební historii bez důvodu.


## Příloha AF: Produktové e-maily a notifikace bez spamového kombajnu

E-mail je pořád jeden z nejdůležitějších kanálů SaaS produktu. Posílá potvrzení registrace, reset hesla, faktury, upozornění na změny, pozvánky do workspace, onboardingové tipy i marketingové kampaně. Právě proto se z něj snadno stane provozní chaos: jeden nástroj pro transakční zprávy, druhý pro newsletter, třetí pro support, čtvrtý pro sales a pátý pro „rychle to pošleme ručně“. Gratuluju, právě vznikla distribuovaná databáze osobních údajů s poetickým názvem mailing.

Privacy-first přístup neříká, že máš posílat méně užitečných zpráv. Říká, že máš posílat zprávy s jasným účelem, správným souhlasem nebo jiným právním důvodem, dobrou doručitelností a bez zbytečného sledování jednotlivců. Technicky k tomu patří autentizace odesílající domény: SPF, DKIM a DMARC. Aktuální DMARC specifikace RFC 9989 popisuje DMARC jako protokol, kterým vlastník domény publikuje politiku pro ověřování e-mailů přes DNS a může žádat reporty o používání domény ([RFC 9989: DMARC](https://www.rfc-editor.org/rfc/rfc9989)). SPF a DKIM jsou samostatné stavební kameny popsané v RFC 7208 a RFC 6376 ([RFC 7208: SPF](https://www.rfc-editor.org/rfc/rfc7208), [RFC 6376: DKIM](https://www.rfc-editor.org/rfc/rfc6376)).

Gmail od února 2024 vyžaduje u odesílatelů nad 5 000 zpráv denně na Gmail účty mimo jiné SPF, DKIM, DMARC, TLS, nízkou míru spamu a u marketingových/subscribed zpráv one-click unsubscribe ([Gmail Help: Email sender guidelines](https://support.google.com/mail/answer/81126)). Yahoo ve svých doporučeních také uvádí autentizaci, nízké complaint rates, validní forward/reverse DNS a pro bulk sendery SPF + DKIM, DMARC a jednoduché odhlášení ([Yahoo Sender Hub: Sender Best Practices](https://senders.yahooinc.com/best-practices/)). I když jsi malý tým hluboko pod těmito limity, ber to jako baseline. Doručitelnost není místo, kde chceš být kreativní jako básník na hackathonu.

**Codyho komentář:** Nejlepší e-mailová strategie je ta, kde uživatel nikdy nepřemýšlí „proč mi tohle chodí?“. Druhá nejlepší je ta, kde se může jedním klikem odhlásit, místo aby tě označil za spam a poslal reputaci domény na ozdravný pobyt do pekla.

### 1) Rozděl transakční, produktové a marketingové zprávy

Nejdřív si udělej mapu typů zpráv. Každý typ má jiný účel, jinou toleranci k chybě a jiný režim odhlášení.

Praktické rozdělení:

- **Transakční zprávy:** reset hesla, potvrzení e-mailu, bezpečnostní upozornění, faktura, pozvánka do účtu, změna tarifu.
- **Produktové provozní zprávy:** upozornění na dokončený import, limit workspace, selhání integrace, plánovaná odstávka.
- **Lifecycle zprávy:** onboardingové tipy, připomenutí nedokončeného nastavení, edukace po aktivaci.
- **Marketingové zprávy:** newsletter, promo akce, novinky bez přímé vazby na konkrétní používání produktu.
- **Obchodní follow-up:** domluvené shrnutí dema, nabídka, připomenutí dalšího kroku.

Pro každý typ si napiš:

1. proč zpráva existuje,
2. kdo ji dostane,
3. jaký je spouštěč,
4. jaké osobní údaje se do ní vkládají,
5. jestli má odhlášení nebo preference,
6. jak dlouho držíš log o odeslání,
7. kdo smí šablonu měnit.

Častá chyba: firma označí všechno jako „transakční“, protože se bojí odhlášení. To je krátkodobě pohodlné a dlouhodobě hloupé. Když produktový tip, sleva nebo obsahový digest schováš jako transakční zprávu, neušetříš si compliance. Jen zhoršíš důvěru a reputaci domény.

### 2) Autentizace domény je provozní základ, ne SEO magie

SPF říká, které servery mohou posílat e-mail za doménu. DKIM podepisuje zprávu kryptograficky. DMARC dává příjemcům politiku, co dělat, když SPF/DKIM neprojdou a nejsou sladěné s viditelnou From doménou. DMARC agregované reporty podle RFC 9990 pak pomáhají najít legitimní zdroje, které nejsou správně nastavené, i pokusy o zneužití domény ([RFC 9990: DMARC Aggregate Reporting](https://www.rfc-editor.org/rfc/rfc9990)).

Minimální postup pro malý SaaS:

- používej vlastní odesílací doménu nebo subdoménu, například `mail.example.com`,
- nastav SPF pro reálné odesílací služby a vyhni se nekonečnému řetězení include záznamů,
- zapni DKIM pro každou službu, která posílá za tvou doménu,
- začni s DMARC politikou `p=none`, sleduj reporty a oprav legitimní zdroje,
- postupně přejdi na přísnější politiku, až víš, že si nestřelíš do vlastního mailboxu,
- odděl marketingové a transakční posílání, aby jedna kampaň nespálila reputaci resetu hesla.

Příklad rozumného rozdělení:

- `app.example.com` — produkt,
- `mail.example.com` — transakční e-maily,
- `news.example.com` — newsletter a obsahové kampaně,
- `support.example.com` — support komunikace.

Není nutné mít pět dodavatelů. Je nutné vědět, kdo co posílá, z jaké domény, s jakým účelem a jak to vypneš při incidentu.

### 3) Minimalizuj obsah zprávy i tracking

Produktový e-mail má být užitečný, ne datově rozežraný. Pokud posíláš fakturu, nepotřebuješ do textu vkládat celý profil zákazníka. Pokud posíláš upozornění na dokončený import, nepotřebuješ vypisovat názvy všech importovaných kontaktů. Pokud posíláš bezpečnostní upozornění, nepotřebuješ přidávat reklamní blok na nový tarif.

Privacy-first pravidla pro obsah:

- Do předmětu nedávej citlivé údaje: jména klientů, částky, diagnózy problému, interní ID nebo tokeny.
- Do URL nedávej e-mail, jméno, firmu ani osobní identifikátor.
- Akční odkazy drž krátkodobé, jednorázové a s jasným účelem.
- Tracking pixel vypni, pokud ho nepotřebuješ pro konkrétní rozhodnutí.
- Kliknutí měř agregovaně přes vlastní redirect jen tam, kde máš jasný důvod a transparentní popis.
- Logy o odeslání drž jen po dobu, kdy pomáhají řešit doručitelnost, podporu nebo audit.

Místo „vidíme, že Jana otevřela e-mail třikrát v 8:12, 8:14 a 9:03“ si polož praktičtější otázku: „Pomáhá tahle onboardingová zpráva dokončit nastavení?“ To jde často měřit agregovaně přes produktovou aktivaci, bez mikroskopu na jednoho člověka.

### 4) Preference centrum je lepší než magické odhlášení ze všeho

Uživatel nemá řešit interní taxonomii tvého marketingového týmu. Má vědět, co může vypnout a co je nutné pro provoz účtu. Preference centrum nemusí být velký portál. Stačí jednoduchá stránka, kde člověk vidí typy zpráv a jejich význam.

Příklad kategorií:

- **Bezpečnost a účet:** nelze vypnout, protože chrání účet.
- **Billing a smluvní zprávy:** nelze vypnout pro oprávněné fakturační kontakty.
- **Produktové provozní notifikace:** lze omezit podle workspace nebo role.
- **Onboardingové tipy:** lze vypnout.
- **Newsletter a marketing:** lze vypnout jedním klikem.

One-click unsubscribe podle RFC 8058 řeší automatizované odhlášení přes hlavičku `List-Unsubscribe-Post` a používají ho mailbox provideri jako součást požadavků na bulk odesílatele ([RFC 8058: One-Click Unsubscribe](https://www.rfc-editor.org/rfc/rfc8058)). I když ho implementuje tvůj e-mailingový nástroj, ověř, že je zapnutý pro správné typy zpráv a že odhlášení opravdu propíšeš do systému, který rozhoduje o budoucím posílání.

Špatný pattern: odhlášení se zapíše jen do newsletter nástroje, ale obchodní automatizace posílá dál z CRM. To není omnichannel. To je multiplikátor otravy.

### 5) Doručitelnost sleduj jako hygienu, ne jako růstový trik

Doručitelnost není jen open rate. Otevření je čím dál méně spolehlivý signál, protože e-mailoví klienti mohou načítat obrázky automaticky, blokovat tracking nebo chránit soukromí uživatelů. Lepší je sledovat kombinaci provozních signálů.

Praktický dashboard:

- počet odeslaných zpráv podle typu,
- bounce rate podle domény a provideru,
- spam complaints u providerů, kde je máš k dispozici,
- počet odhlášení podle kampaně,
- selhání SPF/DKIM/DMARC podle reportů,
- čas doručení transakčních zpráv,
- support tickety typu „nepřišel e-mail“.

U každého problému hledej provozní příčinu, ne jen kosmetiku šablony. Když lidé označují zprávu za spam, možná není problém barva tlačítka. Možná jsi jim slíbil produktový tip a poslal prodejní leták v převleku.

### 6) Šablony e-mailů verzuj jako produkt

E-mailová šablona je součást produktu. Měla by mít review, vlastníka a historii změn. Jinak se jednoho dne probudíš a zjistíš, že reset hesla obsahuje staré logo, neplatnou adresu podpory, tracking pixel z nástroje, který už nepoužíváš, a větu „klikněte zde“, která by měla jít do důchodu.

U každé důležité šablony eviduj:

- název a typ zprávy,
- účel a spouštěč,
- cílovou roli,
- povinná data v šabloně,
- zakázaná data,
- odkaz na preference nebo odhlášení,
- jazykové varianty,
- poslední review,
- vlastníka.

Příklad review otázky:

> Kdyby se tento e-mail dostal omylem k nesprávnému příjemci, jaké škody by způsobil?

Pokud odpověď zní „ukázal by citlivé obchodní údaje, interní poznámky nebo osobní data třetích osob“, šablona potřebuje úpravu. E-mail není bezpečný archiv. Je to zpráva, která putuje přes infrastrukturu, kterou plně nekontroluješ.

### Šablona e-mailové mapy

## E-mailová mapa: [produkt / workspace]

### Typy zpráv

- Transakční:
- Produktové provozní:
- Lifecycle:
- Marketingové:
- Obchodní follow-up:

### Domény a dodavatelé

- Odesílací domény:
- Dodavatelé:
- SPF/DKIM/DMARC stav:
- Vlastník DNS:

### Data a tracking

- Povolená data v šablonách:
- Zakázaná data:
- Tracking:
- Retence logů:

### Preference a odhlášení

- Preference centrum:
- One-click unsubscribe:
- Propis odhlášení do systémů:
- Výjimky:

### Review

- Vlastník:
- Poslední kontrola:
- Nálezy:
- Další krok:

### Checklist pro produktové e-maily

- [ ] Každý typ e-mailu má účel, vlastníka a spouštěč.
- [ ] Transakční, lifecycle a marketingové zprávy jsou oddělené.
- [ ] SPF, DKIM a DMARC jsou nastavené pro všechny odesílací domény.
- [ ] DMARC reporty někdo čte a převádí na opravy.
- [ ] Marketingové a subscribed zprávy mají funkční odhlášení.
- [ ] Preference centrum vysvětluje, co lze vypnout a co je provozně nutné.
- [ ] Předměty, URL a šablony neobsahují zbytečné osobní nebo citlivé údaje.
- [ ] Tracking pixel a klikací tracking jsou vypnuté, pokud nemají jasný účel.
- [ ] Bounce, complaints a autentizační selhání se sledují pravidelně.
- [ ] Šablony jsou verzované a procházejí review při změně produktu nebo dodavatele.


---

## Příloha AG: Customer success bez sledovacího panoptika

Customer success se dá dělat dvěma způsoby. První je datový vysavač: měřit každý pohyb myší, ukládat každé kliknutí, počítat „health score“ z desítek signálů a doufat, že tabulka nahradí rozhovor. Druhý je užitečnější: vybrat několik signálů, které opravdu ukazují, jestli zákazník dostává hodnotu, a spojit je s lidskou péčí.

Privacy-first zákaznický úspěch neznamená slepotu. Znamená disciplínu. Nepotřebuješ vědět, kdo si v pondělí v 10:37 třikrát otevřel nastavení profilu. Potřebuješ vědět, jestli tým zvládl udělat práci, kvůli které si produkt platí.

### 1) Začni definicí úspěchu, ne skóre

Než vymyslíš jakýkoliv dashboard, napiš jednu větu:

> Zákazník je úspěšný, když [konkrétní role] dokáže [konkrétní výsledek] bez [hlavní překážka].

Příklady:

- Marketingový tým je úspěšný, když dokáže každý měsíc vyhodnotit kampaně bez exportu osobních údajů do reklamních nástrojů.
- Provozní manažer je úspěšný, když vidí stav objednávek a výjimek bez ručního přepisování tabulek.
- Zakladatel SaaS je úspěšný, když během týdne pozná, proč trial uživatel nedošel k první hodnotné akci.

Teprve potom vybírej signály. Pokud definice úspěchu neexistuje, health score bude jen numerologie v lepším kabátě. A ano, grafy budou vypadat profesionálně. To je na nich nebezpečné.

### 2) Měř týmovou hodnotu, ne osobní špehování

U B2B SaaS často nepotřebuješ hodnotit jednotlivce. Zajímá tě stav workspace, firmy nebo projektu. Týmová agregace bývá praktičtější a bezpečnější než detailní profilování konkrétních uživatelů.

Dobré signály:

- workspace dokončil onboardingový checklist,
- v posledních 30 dnech proběhla alespoň jedna klíčová akce,
- zákazník přidal druhého relevantního člena týmu,
- opakovaně používá funkci, která souvisí s jeho zakoupeným plánem,
- support tickety se týkají pokročilého použití, ne základního zmatení.

Rizikové signály:

- detailní čas strávený konkrétní osobou na stránce,
- individuální „produktivita“ zaměstnanců zákazníka,
- nahrávání obrazovky bez jasného důvodu a souhlasu,
- spojování produktového chování s marketingovým profilem,
- ukládání obsahu, který zákazník zadává do produktu, jen proto, že se může hodit.

**Codyho komentář:** Pokud health score vypadá jako nástroj pro manažerské dohlížení nad lidmi zákazníka, zastav se. Neprodáváš dalekohled do cizí kanceláře. Prodáváš produkt, který má pomoct.

### 3) Udělej health score vysvětlitelné

Skóre typu „73 ze 100“ je bez kontextu k ničemu. Customer success tým má vědět, proč skóre vzniklo a co má udělat dál.

Lepší je používat jednoduché stavy:

- **Nový:** zákazník je v onboardingu a čeká na první hodnotnou akci.
- **Aktivovaný:** zákazník udělal klíčovou akci a má důvod se vracet.
- **Stabilní:** produkt používá opakovaně a bez blokujících potíží.
- **Ohrožený:** chybí klíčová akce, přibyly blokující tickety nebo se blíží obnova bez známky hodnoty.
- **Rozvojový:** zákazník používá produkt zdravě a má jasný prostor pro rozšíření.

Ke každému stavu přidej vysvětlení a doporučenou akci. Například:

| Stav | Signál | Doporučená akce |
| --- | --- | --- |
| Nový | Onboarding nedokončen 7 dní | Poslat praktický návod podle role, ne obecný newsletter |
| Ohrožený | 2 blokující tickety za měsíc | Nabídnout krátký technický hovor a shrnout překážky |
| Rozvojový | Aktivní tým + opakované použití limitované funkce | Ukázat konkrétní upgrade scénář bez nátlaku |

Takový systém je nudnější než magické AI skóre. Což je dobře. Nuda je v provozu často jen jiné slovo pro spolehlivost.

### 4) Odděl péči, podporu a prodej

Customer success často trpí tím, že má v jednom batohu tři různé práce: pomáhat zákazníkům, řešit problémy a prodávat rozšíření. To je v pořádku, pokud jsou pravidla jasná.

Rozděl signály podle účelu:

- **Péče:** onboarding, aktivace, pravidelná hodnota, vzdělávání.
- **Podpora:** incidenty, bugy, blokující nejasnosti, reakční doba.
- **Obchod:** obnova, rozšíření, změna tarifu, fakturační kontakt.

Nepoužívej support frustraci jako automatický prodejní trigger. Když zákazník řeší problém, nechce slyšet „skvělá zpráva, vyšší tarif vám dá prioritní podporu“. To není sales, to je požár s ceníkem.

Praktické pravidlo: obchodní doporučení smí vzniknout jen tam, kde je zřejmá hodnota pro zákazníka. Ne tam, kde produkt selhal.

### 5) CRM poznámky piš jako budoucí důkaz, ne jako chat

Poznámky v CRM nebo zákaznickém systému musí být stručné, věcné a bezpečné. Nejsou to osobní deníčky obchodníka.

Piš:

- rozhodnutí zákazníka,
- dohodnuté další kroky,
- technické překážky,
- role účastníků bez zbytečných osobních detailů,
- termíny obnovy a závazky.

Nepiš:

- subjektivní soudy o konkrétních lidech,
- osobní informace nesouvisející s obchodním vztahem,
- citlivé údaje z hovorů,
- interní spekulace typu „asi nemají rozpočet, CFO vypadá nervózně“,
- tajné poznámky, které bys zákazníkovi neuměl ukázat bez studu.

Jednoduchý test: kdyby zákazník požádal o export nebo vysvětlení zpracování, obhájíš tu poznámku? Pokud ne, nepatří tam.

### 6) Customer success playbook pro malé týmy

Malý tým nepotřebuje enterprise proces se třiceti poli. Potřebuje rytmus.

Týdenní rytmus:

- projdi nové zákazníky bez první hodnotné akce,
- projdi ohrožené zákazníky podle jasných signálů,
- vyber maximálně tři zákazníky pro osobní kontakt,
- zapiš překážky, které se opakují,
- pošli produktu jeden konkrétní návrh z reálných problémů.

Měsíční rytmus:

- zkontroluj, jestli health signály pořád odpovídají realitě,
- smaž nebo agreguj staré provozní poznámky bez dalšího účelu,
- projdi zákazníky před obnovou,
- vyhodnoť onboardingové materiály,
- aktualizuj jednu šablonu e-mailu nebo knowledge base článek.

### Šablona customer success karty

```markdown
## Customer success karta: [zákazník / workspace]

### Kontext
- Segment:
- Zakoupený plán:
- Hlavní role zákazníka:
- Domluvený cíl:

### Definice úspěchu
- První hodnotná akce:
- Opakovaná hodnota:
- Signál stabilního používání:

### Stav
- Aktuální stav: Nový / Aktivovaný / Stabilní / Ohrožený / Rozvojový
- Proč:
- Doporučená další akce:

### Překážky
- Produktové:
- Technické:
- Procesní:
- Edukační:

### Privacy poznámka
- Jaké signály používáme:
- Jaké signály nepoužíváme:
- Retence poznámek:
```

### Checklist pro customer success bez panoptika

- [ ] Máme napsanou definici úspěchu zákazníka pro hlavní segmenty.
- [ ] Health signály jsou vysvětlitelné a navázané na konkrétní další akci.
- [ ] Primárně hodnotíme workspace, projekt nebo firmu, ne produktivitu jednotlivců.
- [ ] Nepoužíváme session replay, detailní profilování ani obsah zákazníka bez jasného účelu.
- [ ] CRM poznámky jsou věcné, obhajitelné a bez zbytečných osobních detailů.
- [ ] Péče, support a obchod mají oddělené účely i pravidla.
- [ ] Staré poznámky a provozní signály mají retenční pravidla.
- [ ] Opakované customer success poznatky se vrací do produktu, dokumentace a onboardingu.


## Příloha AH: Dashboardy a rozhodování bez metrikového divadla

Dashboard je skvělý sluha a příšerný šéf. Když je navržený dobře, pomáhá týmu rychle poznat, jestli web, SaaS nebo marketingová aktivita plní svůj účel. Když je navržený špatně, stane se z něj barevná tapeta plná čísel, která vypadají důležitě, ale nikdo podle nich nic nedělá.

Privacy-first dashboard má dvě pravidla: ukazuje jen metriky, které vedou k rozhodnutí, a nepotřebuje k tomu detailní profilování lidí. Pokud dashboard vyžaduje víc dat, než tým reálně používá, není to analytika. Je to sběratelství s grafy.

### 1) Každý dashboard musí mít jedno rozhodnutí

Nejdřív si napiš, k jakému rozhodnutí dashboard slouží. Ne „sledovat výkon“. To je mlha. Konkrétně:

- Máme posílit obsahové téma, nebo ho ukončit?
- Máme opravit onboarding, nebo přidat další akviziční kanál?
- Máme spustit kampaň, nebo nejdřív vylepšit landing page?
- Máme řešit technický problém, nebo jde jen o běžný provozní šum?
- Máme kontaktovat zákazníka, nebo počkat na další signál?

Když rozhodnutí neexistuje, dashboard nejspíš není potřeba. Maximálně má být reportem pro archiv, ne každodenním operačním panelem.

Praktický test: otevři dashboard a zeptej se „co uděláme jinak, když číslo stoupne nebo klesne?“. Pokud odpověď zní „uvidíme“, dashboard ještě není hotový.

### 2) Rozděl metriky podle rytmu práce

Jedna obrazovka nemá sloužit všem rytmům najednou. Denní provoz, týdenní marketing a měsíční strategie potřebují jiné metriky i jiný detail.

Příklad rozdělení:

| Rytmus | Otázka | Metriky | Akce |
| --- | --- | --- | --- |
| Denně | Funguje web a produkt? | dostupnost, chyby, formuláře, objednávky | opravit incident nebo blokaci |
| Týdně | Přichází správná poptávka? | návštěvy klíčových stránek, konverze, zdroje, kvalita leadů | upravit obsah, landing page nebo kampaně |
| Měsíčně | Roste produkt zdravě? | aktivace, retence, MRR, churn, support témata | rozhodnout roadmapu a priority |
| Kvartálně | Dává strategie smysl? | segmenty, kanály, náklady, dlouhodobé trendy | změnit positioning, pricing nebo investice |

Denní dashboard má být krátký a nudný. Pokud v něm každý den dramaticky pulzuje dvacet grafů, tým se buď zblázní, nebo si na alarmy zvykne a začne je ignorovat. Obě varianty jsou drahé.

### 3) Odděl provozní signál od marketingové interpretace

Číslo samo o sobě není závěr. Když klesnou návštěvy, nemusí to znamenat špatný obsah. Může jít o sezónnost, technický problém, změnu kampaně, výpadek měření, méně botů nebo prostě konec jedné virální vlnky.

Do dashboardu proto přidej tři vrstvy:

1. **Metrika:** co se stalo.
2. **Kontext:** proč to mohlo nastat.
3. **Rozhodnutí:** co s tím uděláme.

Příklad zápisu:

> Organická návštěvnost článků o SaaS klesla o 18 %. Současně nebyl publikován nový obsah a dvě starší stránky mají horší pozice. Tento týden upravíme interní prolinkování a doplníme dva příklady do nejvýkonnějšího článku. Nezapínáme remarketing, protože problém není v chybějícím sledování lidí.

Tím se z dashboardu stává pracovní nástroj, ne generátor paniky.

### 4) Používej agregace jako výchozí stav

Pro většinu rozhodnutí stačí agregovaná data. Firemní web nepotřebuje vědět, že konkrétní člověk z konkrétní firmy třikrát navštívil pricing. Potřebuje vědět, jestli pricing stránka plní roli: vysvětluje hodnotu, snižuje nejistotu a vede k dalšímu kroku.

Privacy-first dashboard proto preferuje:

- agregované návštěvy a konverze,
- anonymizované nebo pseudonymizované produktové signály,
- workspace nebo účet jako jednotku tam, kde je to nutné,
- krátkou retenci detailních provozních dat,
- ruční poznámky u významných rozhodnutí místo nekonečného sběru eventů.

Detailní data si nech jen tam, kde mají jasný účel: bezpečnostní incident, technická chyba, zákaznická žádost nebo konkrétní debugging. A i tam nastav retenci. Debug data nejsou rodinné stříbro, i když se k nim vývojář umí citově připoutat.

### 5) Dashboard musí ukazovat i kvalitu, ne jen objem

Marketingové dashboardy často přeceňují objem: návštěvy, imprese, kliknutí, otevření. Jenže malý SaaS tým může mít lepší měsíc s menší návštěvností, pokud přišlo víc relevantních poptávek a méně šumu.

Přidej proto kvalitativní signály:

- kolik poptávek odpovídá ideálnímu zákaznickému profilu,
- které otázky se opakují před nákupem,
- jaké námitky blokují demo nebo trial,
- které články přivádějí lidi s jasným problémem,
- které support tickety ukazují na chybějící dokumentaci.

Tyto signály nemusí být invazivní. Často stačí krátká klasifikace leadu, tag u support dotazu nebo měsíční poznámka z obchodních hovorů. Kvalita není výmluva pro šmírování; je to důvod, proč nesledovat zbytečnosti.

### 6) Nastav prahy a vlastníky předem

Dashboard bez prahů vytváří nekonečné dohady. Dashboard bez vlastníka vytváří hezké screenshoty ve Slacku a žádnou změnu.

U každé hlavní metriky napiš:

- **zelený stav:** všechno je v očekávaném rozmezí,
- **žlutý stav:** stojí za kontrolu nebo drobnou úpravu,
- **červený stav:** vyžaduje konkrétní akci,
- **vlastník:** kdo rozhoduje, co se udělá,
- **cadence:** kdy se metrika kontroluje,
- **poznámka:** co se nesmí vyvozovat bez dalšího kontextu.

Příklad:

| Metrika | Žlutý stav | Červený stav | Vlastník | Akce |
| --- | --- | --- | --- | --- |
| Konverze kontaktní stránky | pokles 20 % týden/týden | pokles 40 % nebo technická chyba | marketing + vývoj | zkontrolovat formulář, CTA, zdroje návštěv |
| Aktivace trialu | méně než plánovaný rozsah | dvě období po sobě pod prahem | produkt | projít onboarding a první hodnotnou akci |
| Chybové odpovědi API | opakované výkyvy | dopad na zákazníky | vývoj | incident runbook a status update |

Bez prahů bude každý graf interpretovat ten, kdo má zrovna nejsilnější názor. A to je horší než žádný dashboard, protože to vypadá datově.

### Šablona dashboard karty

```markdown
## Dashboard karta: [název dashboardu]

### Účel
- Jaké rozhodnutí podporuje:
- Kdo ho používá:
- Jak často:

### Metriky
- Hlavní metrika:
- Podpůrné metriky:
- Guardrail metriky:
- Co záměrně neměříme:

### Data a privacy
- Zdroj dat:
- Úroveň detailu: agregace / workspace / uživatel / technický log
- Retence:
- Kdo má přístup:

### Prahy a akce
- Zelený stav:
- Žlutý stav:
- Červený stav:
- Vlastník rozhodnutí:
- Další krok při červeném stavu:

### Review
- Poslední revize:
- Co se podle dashboardu změnilo:
- Co odstranit, protože se nepoužívá:
```

### Checklist pro dashboardy bez metrikového divadla

- [ ] Každý dashboard má jasné rozhodnutí, které podporuje.
- [ ] Denní, týdenní, měsíční a kvartální metriky nejsou smíchané do jedné obrazovky.
- [ ] U hlavních metrik máme prahy, vlastníka a očekávanou akci.
- [ ] Dashboard obsahuje kontext a poznámky k interpretaci, ne jen čísla.
- [ ] Agregovaná data jsou výchozí stav; detail používáme jen pro jasný účel.
- [ ] Neměříme osobní produktivitu uživatelů zákazníka ani zbytečné behaviorální profily.
- [ ] Kvalitativní signály z obchodu, supportu a onboardingu doplňují objemové metriky.
- [ ] Jednou měsíčně mažeme nebo upravujeme metriky, podle kterých nikdo nerozhoduje.


## Příloha AI: Webhooky a API rozhraní bez integračního chaosu

API a webhooky jsou skvělé, dokud se z nich nestane potrubní systém bez mapy. Malý SaaS tým často začne jednoduše: platební brána pošle webhook, CRM si stáhne leady, účetnictví dostane fakturu a interní automatizace pošle notifikaci do chatu. Pak se přidá druhý pricing model, nový zákaznický segment, pár výjimek pro enterprise klienta — a najednou nikdo přesně neví, který systém je zdroj pravdy.

Privacy-first přístup tady neznamená brzdit integrace. Znamená dělat je tak, aby každé propojení mělo jasný účel, minimální rozsah dat, bezpečné ověření a plán na vypnutí. OWASP API Security Top 10 mezi riziky API uvádí mimo jiné rozbitou objektovou autorizaci, rozbitou autentizaci, neomezenou spotřebu zdrojů, špatnou inventuru API a nebezpečné používání cizích API ([OWASP API Security Top 10 2023](https://api-security.owasp.org/editions/2023/en/0x11-t10/)). To je hezký bezpečnostní způsob, jak říct: „integrace nejsou jen URL a token v env proměnné“.

**Codyho komentář:** Webhook, který „rychle jen něco přepošle“, je budoucí incident v kapuci. Ne proto, že by byl webhook zlý. Ale protože rychlé integrace mají tendenci přežít autora, původní kontext i první tři pricing experimenty.

### 1) Každé rozhraní musí mít smlouvu

Než API endpoint nebo webhook pustíš do světa, napiš integrační smlouvu. Nemusí to být právní novela o dvanácti přílohách. Stačí dokument, který odpoví na praktické otázky:

- kdo rozhraní volá a kdo ho vlastní,
- jaký obchodní nebo produktový účel plní,
- jaká data tečou tam a zpět,
- co je zdroj pravdy,
- jak se ověřuje požadavek,
- jak se řeší chyby, retry a duplicity,
- jak dlouho se drží logy a payloady,
- jak se integrace vypne bez rozbití zákazníka.

Příklad: platební webhook nemá „aktualizovat zákazníka“. Má zpracovat konkrétní událost typu `invoice.paid`, ověřit podpis, uložit idempotentní záznam o zpracování, změnit stav předplatného a případně zařadit transakční e-mail do fronty. To je rozdíl mezi procesem a kouzelnou dírou ve zdi.

### 2) Endpoint není důkaz oprávnění

Tajná URL není bezpečnostní model. Pokud webhook endpoint umí změnit stav objednávky, účtu nebo fakturace, musí ověřit, že požadavek opravdu pochází od správného odesílatele a nebyl změněn po cestě. OWASP Webhook Security Cheat Sheet doporučuje mimo jiné HTTPS, ověřování podpisu, správu podpisových tajemství, ochranu proti replay útokům, idempotenci a limity proti zahlcení ([OWASP Webhook Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Webhook_Security_Cheat_Sheet.html)).

Praktické minimum pro příjem webhooků:

- přijímej jen `POST` a jen očekávaný `Content-Type`,
- ověř podpis nad raw tělem požadavku podle dokumentace poskytovatele,
- kontroluj timestamp nebo nonce, pokud je protokol podporuje,
- ukládej ID události a nedělej stejný vedlejší efekt dvakrát,
- odpovídej rychle a zpracování pošli do fronty,
- neloguj celé payloady, pokud obsahují osobní nebo obchodně citlivá data,
- měj oddělené tajemství pro každou integraci a postup rotace.

Pokud poskytovatel podpisy nepodporuje, zvaž další vrstvu: statický bearer token, mTLS, allowlist IP adres jako doplněk, nebo aspoň oddělený endpoint s nízkými oprávněními. IP allowlist sám o sobě není identita. Je to spíš dveřní kukátko: užitečné, ale zloděje nezastaví, pokud má klíč.

### 3) Idempotence je levnější než omluvný e-mail

Webhooky se opakují. Síť vypadne, poskytovatel zkusí doručení znovu, tvoje služba vrátí chybu po úspěšném zápisu, nebo někdo omylem klikne na „resend“. Pokud handler není idempotentní, můžeš zákazníkovi poslat dvě faktury, dvakrát prodloužit trial, dvakrát vytvořit účet nebo dvakrát odeslat e-mail.

Základní pravidlo: každá událost musí mít jednoznačný identifikátor a tabulku zpracování.

Příklad pracovního postupu:

1. Přijmi webhook a ověř podpis.
2. Z validovaného payloadu přečti `event_id`.
3. V transakci zkontroluj, jestli už `event_id` existuje.
4. Pokud ano, vrať úspěch bez opakování vedlejších efektů.
5. Pokud ne, ulož `event_id`, zpracuj změnu a zapiš výsledek.
6. Pro složitější operace pošli úkol do fronty s deduplikačním klíčem.

Idempotence není jen technická elegance. Je to zákaznická důvěra. Lidé odpustí výpadek snáz než chaos v penězích, účtech nebo datech.

### 4) API klíče musí mít rozsah a životnost

API klíč bez rozsahu je generální klíč od domu. API klíč bez expirace je generální klíč zakopaný pod rohožkou od roku 2019. Pro malé týmy je lákavé vytvořit jeden dlouhodobý token a používat ho všude, protože „zatím to stačí“. Zatím skoro vždycky končí v logu, starém skriptu, bývalém notebooku nebo zapomenuté CI proměnné.

Dobrá praxe pro API klíče:

- vytvářej samostatný klíč pro každou integraci,
- přiřaď mu minimální oprávnění,
- pojmenuj ho podle účelu a vlastníka,
- nastav expiraci nebo pravidelnou rotaci,
- ukládej ho v secrets manageru, ne v repozitáři,
- zobrazuj ho uživateli jen jednou,
- loguj vytvoření, rotaci a zrušení, ale ne hodnotu klíče,
- umožni rychlé odvolání bez zásahu do databáze ručně v pátek v 22:41.

OWASP REST Security Cheat Sheet u REST API zdůrazňuje mimo jiné HTTPS, přístupovou kontrolu na endpointech, validaci tokenů, omezení HTTP metod, validaci vstupů a opatrnost u citlivých informací v požadavcích ([OWASP REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html)). Pro privacy-first SaaS je důležité přidat ještě jednu otázku: „Musí tento klíč vidět právě tato data?“

### 5) Chyby a retry musí být navržené, ne vymodlené

Integrace se kazí normálně. Dodavatel má výpadek, payload změní strukturu, zákazník smaže propojení, token expiruje, endpoint vrátí `500`, DNS si vezme volno a fronta se naplní jako kavárna v dešti. Rozdíl mezi stabilním produktem a nervózním produktem je v tom, jestli se s chybami počítá.

Pro každou integraci si napiš:

- které chyby se mají retryovat,
- kolikrát a s jakým backoffem,
- kdy se integrace označí jako degradovaná,
- kdo dostane alert,
- co uvidí zákazník,
- jestli se dá akce spustit ručně znovu,
- co se stane, když událost dorazí pozdě nebo mimo pořadí.

Nespoléhej na pořadí webhooků, pokud ho poskytovatel výslovně negarantuje. U důležitých stavů raději po přijetí události dotáhni aktuální stav z API poskytovatele. Událost je signál, ne vždy kompletní realita.

### 6) Integrační inventura je součást provozu

API a webhooky potřebují inventuru stejně jako dodavatelé, databáze a domény. Bez ní se časem objeví endpointy, které nikdo nezná, ale všichni se bojí je vypnout. To je technický ekvivalent tajemného vypínače ve sklepě.

Minimální inventura:

| Položka | Co zapsat |
| --- | --- |
| Název integrace | Například „Stripe billing webhook“ nebo „CRM lead export“ |
| Vlastník | Člověk nebo tým odpovědný za provoz |
| Účel | Jaké rozhodnutí nebo proces integrace podporuje |
| Směr dat | Příjem, odesílání, obousměrně |
| Kategorie dat | technická, zákaznická, fakturační, support, marketing |
| Oprávnění | scope, role, endpointy, limity |
| Tajemství | kde je uložené, kdo ho může rotovat |
| Retence | jak dlouho držíme payloady, chyby a auditní záznamy |
| Vypnutí | dopad, fallback, postup, test |

Jednou měsíčně projdi nové integrace a jednou kvartálně staré. Hledej hlavně nepoužívané klíče, endpointy bez vlastníka, payloady s nadbytečnými daty a automatizace, které dělají víc, než bylo původně domluveno.

### Šablona integrační karty

```markdown
## Integrační karta: [název integrace]

### Účel
- Jaký proces integrace podporuje:
- Co se stane, když integrace nefunguje:
- Vlastník:

### Datový tok
- Směr dat:
- Typy událostí / endpointy:
- Kategorie dat:
- Co výslovně neposíláme:

### Bezpečnost
- Autentizace / podpis:
- Oprávnění / scope:
- Rotace tajemství:
- Idempotence:
- Rate limit / retry:

### Privacy a provoz
- Retence payloadů a logů:
- Místo zpracování / dodavatel:
- Zákaznické vysvětlení:
- Postup vypnutí:
```

### Checklist pro webhooky a API rozhraní

- [ ] Každé API nebo webhook má vlastníka, účel a integrační kartu.
- [ ] Příchozí webhooky ověřují podpis nebo jiný silný důkaz původu.
- [ ] Handler je idempotentní a umí bezpečně zpracovat duplicity.
- [ ] API klíče jsou oddělené podle integrace, mají minimální oprávnění a plán rotace.
- [ ] Payloady a URL neobsahují zbytečné osobní údaje ani tajemství.
- [ ] Chyby, retry, backoff a ruční znovuspuštění jsou popsané předem.
- [ ] Logy ukládají stav zpracování, ne celé citlivé payloady jako výchozí stav.
- [ ] Nepoužívané endpointy, klíče a webhooks se pravidelně ruší.


## Příloha AJ: Přístupné formuláře bez konverzního mučení

Formulář je místo, kde se potkává obchod, UX, technika, přístupnost, bezpečnost a privacy. Proto se na něm tak často pokazí úplně všechno najednou. Marketing chce víc polí, obchod chce kvalifikaci, produkt chce registraci, právník chce souhlas, vývojář chce validaci a uživatel chce hlavně odejít bez toho, aby mu web řekl „neplatný vstup“ jako rozbitý úředník.

Privacy-first formulář není jen kratší formulář. Je to formulář, který sbírá jen potřebná data, vysvětluje proč, funguje s klávesnicí a asistivními technologiemi, neukládá citlivé údaje do URL, nepoužívá trackery v každém kroku a po chybě člověku pomůže, ne ho potrestá. W3C WAI u formulářů zdůrazňuje jasné popisky, instrukce a srozumitelné chybové zprávy, protože právě ty rozhodují, jestli lidé formulář vůbec dokážou dokončit ([W3C WAI: Forms](https://www.w3.org/WAI/curricula/content-author-modules/forms/), [W3C WAI: Labeling Controls](https://www.w3.org/WAI/tutorials/forms/labels/)).

Od 28. června 2025 se v EU začal uplatňovat European Accessibility Act pro vybrané produkty a služby včetně e-commerce; Evropská komise mezi pokryté oblasti uvádí mimo jiné e-commerce a digitální služby ([European Commission: European Accessibility Act](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en), [Your Europe: Digital accessibility](https://europa.eu/youreurope/business/selling-in-eu/selling-goods-services/accessibility/index_en.htm)). Tohle není výzva k panice. Je to připomenutí, že přístupnost už není „až bude čas“, protože čas se mezitím odstěhoval.

**Codyho komentář:** Přístupnost a privacy mají společný kořen: respekt k člověku. Když formulář nejde vyplnit bez myši, nutí opisovat zbytečnosti, schovává chyby a ještě posílá data pěti skriptům, není to růstový hack. Je to digitální překážková dráha s firemním logem.

### 1) Každé pole musí obhájit existenci

Než řešíš layout, napiš inventuru polí. U každého pole odpověz na čtyři otázky:

- proč ho potřebujeme právě teď,
- kdo s datem pracuje,
- jak dlouho ho držíme,
- co se stane, když ho nevyplníme.

Pokud odpověď zní „hodí se obchodníkům“, pole ještě neprošlo. Hodit se může i vysavač na střechu auta, ale neznamená to, že ho tam namontuješ.

Praktický příklad u poptávkového formuláře:

- **E-mail:** nutný pro odpověď, retence podle obchodního workflow.
- **Popis problému:** nutný pro kvalifikaci, může obsahovat citlivé údaje, proto u něj zobraz pokyn, co neposílat.
- **Telefon:** volitelný; sbírej jen pokud nabízíš telefonický follow-up.
- **Rozpočet:** volitelný nebo rozsahový; nevyžaduj přesnou částku, pokud ji nepotřebuješ pro první odpověď.
- **Počet zaměstnanců:** často zbytečné u prvního kontaktu; pokud segmentuješ, použij širší kategorii.

U registrace do SaaS je dobré začít ještě úžeji: e-mail, heslo nebo magic link, název workspace a souhlas s podmínkami jen tam, kde opravdu patří. Všechno ostatní může přijít později v onboardingu, až má uživatel důvod odpovídat.

### 2) Label není placeholder v kostýmu

Placeholder mizí, jakmile člověk začne psát. Proto nemá suplovat label. W3C WAI doporučuje u formulářových prvků jasně přiřazené popisky; label pomáhá lidem pochopit účel pole a zároveň asistivním technologiím správně oznámit, co se má vyplnit ([W3C WAI: Labeling Controls](https://www.w3.org/WAI/tutorials/forms/labels/)).

Dobré pravidlo:

- label vždy viditelný nebo programově dostupný,
- `for` v labelu odpovídá `id` inputu,
- povinné pole je označené textem, ne jen barvou nebo hvězdičkou,
- nápověda je vedle pole a je propojená přes `aria-describedby`,
- placeholder používáš maximálně jako příklad formátu, ne jako název pole.

Slabý formulář:

```html
<input placeholder="E-mail">
```

Lepší formulář:

```html
<label for="email">Pracovní e-mail</label>
<p id="email-help">Pošleme na něj potvrzení a další kroky. Nepoužijeme ho pro newsletter bez souhlasu.</p>
<input id="email" name="email" type="email" autocomplete="email" aria-describedby="email-help" required>
```

Tady zároveň pomáhá `autocomplete`. WCAG 2.2 u kritéria 1.3.5 řeší programově zjistitelný účel běžných polí, aby prohlížeče a asistivní technologie mohly uživatelům vyplňování zjednodušit ([W3C: Understanding SC 1.3.5 Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html)).

### 3) Validace má být navigace, ne facka

Chybová hláška „neplatný vstup“ je informační hodnota přibližně jako „něco se stalo“. Uživatel potřebuje vědět:

- které pole je špatně,
- co je špatně,
- jak to opravit,
- jestli se ostatní vyplněná data zachovala,
- kam se má vrátit.

W3C WAI u notifikací doporučuje, aby chybové zprávy byly srozumitelné, odkazovaly na příslušné pole a nabízely jednoduché instrukce k opravě ([W3C WAI: User Notification](https://www.w3.org/WAI/tutorials/forms/notifications/)). V praxi to znamená:

- zobraz souhrn chyb nad formulářem,
- každou chybu ukaž i u konkrétního pole,
- po odeslání s chybou přesuň fokus na souhrn nebo první chybu,
- používej text, ikonu i stav pole, ne jen červenou barvu,
- nikdy nemaž už vyplněná pole bez bezpečnostního důvodu,
- u citlivých polí vysvětli bezpečně, ne příliš konkrétně.

Slabá hláška:

> Chyba formuláře.

Lepší hláška:

> E-mail nemá platný formát. Zkontroluj, že obsahuje `@` a doménu, například `jmeno@firma.cz`.

U hesel pozor: nápověda má pomoct, ale nemá vyzrazovat příliš detailní bezpečnostní logiku. Místo „chybí velké písmeno, číslice a speciální znak“ je často lepší ukázat pravidla předem a po chybě říct, které veřejné pravidlo není splněné.

### 4) Vícekrokový formulář potřebuje mapu

Vícekrokové formuláře jsou užitečné, když snižují kognitivní zátěž. Jsou peklo, když jen rozsekají jeden nepřehledný formulář na šest nepřehledných kroků.

U každého vícekrokového toku ukaž:

- název aktuálního kroku,
- počet kroků nebo přibližnou délku,
- možnost vrátit se zpět bez ztráty dat,
- co se uloží při přerušení,
- kdy dojde k odeslání a kdo data uvidí.

Příklad onboardingového toku:

1. **Účet:** e-mail, heslo nebo magic link.
2. **Workspace:** název týmu a region provozu.
3. **První úkol:** import, ruční založení nebo prázdný start.
4. **Pozvánky:** volitelné, s jasným vysvětlením, že pozvaným lidem přijde e-mail.

Privacy-first detail: neukládej průběžně citlivé odpovědi, pokud to není nutné. Pokud autosave používáš, řekni to. Uživatel má vědět, jestli rozepsaný formulář existuje jen v prohlížeči, nebo už sedí na serveru jako malý duch compliance budoucnosti.

### 5) Anti-spam nesmí trestat lidi

CAPTCHA, která brání robotům i zákazníkům, je zvláštní forma sebeobrany. U privacy-first webu je navíc problém, když kvůli jednomu formuláři přidáš invazivní cizí skript, který sleduje návštěvníky napříč webem.

Preferuj vrstvy, které jsou méně rušivé:

- honeypot pole skryté pro lidi, ale viditelné pro jednoduché boty,
- rate limiting podle IP nebo anonymizovaného klíče,
- serverovou validaci a blokování známých spam vzorů,
- jednorázové tokeny formuláře,
- potvrzovací e-mail jen tam, kde dává smysl,
- ruční review u drahých nebo citlivých akcí.

Pokud musíš použít CAPTCHA nebo externí ochranu, udělej privacy review: jaká data odcházejí, kam, na jak dlouho, pod jakým právním základem a co se stane s lidmi, kteří nástroj nedokážou použít. „Všichni to tak dělají“ není architektonický argument. Je to kolektivní výmluva s logem.

### 6) Měř dokončení formuláře agregovaně

Formuláře je potřeba zlepšovat, ale ne za cenu sledování každého pohybu myši. Pro většinu malých týmů stačí agregované metriky:

- zobrazení formuláře,
- zahájení vyplňování,
- úspěšné odeslání,
- technická chyba odeslání,
- anonymizovaný typ validační chyby,
- zdroj návštěvy na úrovni UTM kampaně bez osobních údajů.

Neměř obsah polí, přesné sekvence kláves, heatmapy citlivých stránek ani session replay na formulářích s osobními údaji. Pokud chceš zjistit, proč lidé odpadají, často je bezpečnější udělat pět krátkých uživatelských rozhovorů než nasadit další šmírovací mikroskop.

### Šablona review formuláře

```markdown
## Review formuláře: [název / URL]

### Účel
- Primární akce:
- Kdo formulář vyplňuje:
- Kdo zpracovává výsledek:

### Pole
- Povinná pole:
- Volitelná pole:
- Pole k odstranění nebo přesunutí do pozdějšího kroku:

### Přístupnost
- Všechna pole mají label:
- Instrukce jsou viditelné a propojené s polem:
- Chyby jsou čitelné, konkrétní a dostupné klávesnicí:
- Tok funguje bez myši:

### Privacy
- Data v URL:
- Data v logu:
- Retence:
- Externí skripty:

### Měření
- Agregované eventy:
- Chybové metriky:
- Zakázaná měření:

### Rozhodnutí
- Spouštíme:
- Upravujeme před spuštěním:
- Vlastník dalšího review:
```

### Checklist pro přístupné privacy-first formuláře

- [ ] Každé pole má jasný účel, vlastníka a retenční pravidlo.
- [ ] Povinná pole jsou opravdu nezbytná pro daný krok.
- [ ] Každý input má label; placeholder není jediný popisek.
- [ ] Instrukce a nápovědy jsou viditelné a programově propojené s polem.
- [ ] Chybové zprávy říkají, co opravit, a zachovávají vyplněná data.
- [ ] Formulář jde dokončit klávesnicí a bez invazivních anti-spam prvků.
- [ ] Citlivé hodnoty nejdou do URL, analytiky, logů ani session replay nástrojů.
- [ ] Vícekrokový tok ukazuje postup, ukládání a okamžik finálního odeslání.
- [ ] Měření je agregované a neobsahuje hodnoty polí.

## Příloha AK: Interní vyhledávání bez profilování návštěvníků

Interní vyhledávání na webu vypadá jako malá funkce: políčko, lupa, výsledky. Ve skutečnosti je to diagnostický nástroj. Lidé do něj píšou přesně to, co neuměli najít v navigaci, co jim chybí v dokumentaci, nebo jak vlastními slovy pojmenovávají problém. To je zlatý signál — a zároveň potenciálně citlivý vstup. Když někdo hledá „smazat účet“, „export dat“, „fakturační údaje“ nebo název konkrétního zákazníka, není to jen metrika. Je to kontext.

Privacy-first vyhledávání proto nesmí být jen napojený externí widget, který posílá každý dotaz někam do reklamního ekosystému. Má pomáhat lidem najít obsah, produktu najít slepá místa a týmu zlepšit navigaci — bez toho, aby z dotazů vznikal profil jednotlivého návštěvníka.

Sémanticky je dobré použít správný typ pole. MDN popisuje `input type="search"` jako specializované textové pole pro vyhledávací dotazy; samo o sobě nevyřeší UX, ale pomáhá prohlížeči i asistivním technologiím pochopit účel vstupu ([MDN: input type search](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/search)). Pro indexaci veřejného obsahu zase pořád platí základ: dobré interní odkazy, sitemap a kanonické URL; Google Search Central popisuje sitemapy jako způsob, jak vyhledávačům sdělit důležité stránky a související metadata ([Google Search Central: Sitemaps overview](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)).

**Codyho komentář:** Když uživatel použije interní vyhledávání, často tím říká: „Vaše informační architektura mě zradila, ale dávám vám ještě jednu šanci.“ To je milé. Nezaslouží si za to sledovací náramek.

### 1) Rozhodni, co má vyhledávání skutečně řešit

Ne každé vyhledávání má stejný účel. Firemní web, dokumentace a SaaS aplikace potřebují jiné chování.

Praktické typy:

- **Marketingový web:** najít služby, články, case studies, kontakt a právní dokumenty.
- **Knowledge base:** najít návod podle problému, chybové hlášky nebo integračního názvu.
- **SaaS aplikace:** najít vlastní záznamy, nastavení, faktury, uživatele nebo projektové objekty.
- **Interní admin:** najít zákazníka, workspace, incident nebo auditní záznam.

U každého typu si napiš:

- kdo hledá,
- co smí najít,
- co nikdy nesmí najít,
- jak rychlé to musí být,
- jaké dotazy se nesmí ukládat v plném znění.

Příklad pro veřejný web:

- Hledají anonymní návštěvníci.
- Najít smějí jen veřejný obsah.
- Nesmí najít drafty, neveřejné soubory, interní dokumenty ani skryté přílohy.
- Fulltext může být statický index generovaný při buildu.
- Logují se jen agregované dotazy po očištění a až od minimálního počtu výskytů.

Příklad pro SaaS aplikaci:

- Hledají přihlášení uživatelé v rámci workspace.
- Výsledky musí respektovat role a oprávnění.
- Dotaz nesmí obejít tenant izolaci.
- Logování dotazů je rizikové, protože mohou obsahovat jména, e-maily, smlouvy nebo interní názvy projektů.

### 2) Indexuj veřejný obsah jinak než zákaznická data

Veřejný web si může dovolit jednoduchý statický index. Vygeneruješ ho při buildu z publikovaných stránek a nasadíš spolu s webem. Výhoda: žádný externí dotazovací server, žádné posílání hledaných frází třetí straně, jednoduchý exit plán.

U zákaznických dat je situace jiná. Tam řeš:

- tenant izolaci,
- oprávnění na úrovni výsledků,
- mazání po ukončení účtu,
- audit přístupů,
- šifrování a zálohy,
- retenci indexu při smazání zdrojového záznamu.

Nedělej jeden univerzální index „všeho“. Je to pohodlné do první chvíle, kdy někdo najde interní poznámku v zákaznickém vyhledávání. Pak už to není pohodlí, ale incident s lupou.

Rozumné rozdělení:

- veřejný obsah: statický index nebo samostatná veřejná služba,
- dokumentace pro zákazníky: index jen publikovaných článků s verzí,
- aplikační data: vyhledávání uvnitř databázové vrstvy nebo dedikované služby s oprávněními,
- interní admin: oddělený index s auditní stopou a rolemi.

### 3) Dotazy neukládej automaticky v plném znění

Vyhledávací dotaz je volný text. Volný text je místo, kam lidé napíšou cokoliv. Třeba e-mail, telefon, token, název smlouvy, diagnózu, rodné číslo nebo „prosím vás, kde zruším účet“. Proto je plné logování dotazů špatný výchozí stav.

Lepší režim:

- v aplikaci zpracuj dotaz pro aktuální odpověď,
- do analytiky neposílej celý dotaz automaticky,
- pro zlepšování obsahu ukládej jen normalizované a očištěné fráze,
- zaveď minimální práh, například reportovat až fráze s více výskyty,
- citlivé vzory maskuj před uložením,
- nulové výsledky vyhodnocuj agregovaně.

Příklad sanitizace:

- `jan.novak@example.com faktura` → `[email] faktura`
- `reset hesla pro klienta acme` → `reset hesla pro [text]`
- `api key sk_live_...` → `[secret]`

Nejde o dokonalost. Jde o to, aby výchozí systém nesbíral tajemství jen proto, že někdo chtěl vědět, co lidé hledají.

### 4) Autocomplete je užitečný sluha a nebezpečný drbna

Našeptávač umí snížit tření. Taky umí prozradit, že v systému existuje zákazník, projekt nebo dokument, který uživatel nemá znát. Proto autocomplete navrhuj podle kontextu.

Na veřejném webu může našeptávač nabízet:

- veřejné kategorie,
- publikované články,
- populární témata,
- statické odkazy jako „Kontakt“, „Ceník“, „Export dat“.

V aplikaci buď opatrnější:

- našeptávej jen z objektů, které uživatel smí vidět,
- neukazuj e-maily nebo interní identifikátory zbytečně,
- nezačínej našeptávat po jednom znaku,
- nastav rate limit,
- nevracej rozdílné chování pro existující a neexistující citlivé hodnoty, pokud by to umožnilo enumeraci.

Špatný autocomplete:

> Uživatel napíše „a“ a systém ukáže všechny zákazníky začínající na A včetně e-mailů a interních ID.

Lepší autocomplete:

> Uživatel napíše aspoň tři znaky, systém vrátí jen objekty v jeho workspace, bez citlivých polí, se stejným prázdným stavem pro neexistující i nepřístupné výsledky.

### 5) Nulové výsledky jsou redakční backlog

Dotazy bez výsledků jsou nejlepší seznam věcí, které lidé hledali a nenašli. Neznamená to vždy, že máš přidat nový článek. Někdy stačí přejmenovat nadpis, přidat synonymum, zlepšit interní odkaz nebo ukázat lepší prázdný stav.

Měsíční review nulových výsledků:

- seřaď agregované dotazy podle četnosti,
- odstraň citlivé nebo jednorázové dotazy,
- spoj synonyma,
- označ, jestli jde o chybějící obsah, špatný název, navigační problém nebo produktovou poptávku,
- vyber maximálně pět oprav na další měsíc.

Příklad rozhodnutí:

- Lidé hledají „smazání účtu“, ale článek se jmenuje „Ukončení workspace“. Přidej synonymum, interní odkaz a jasnější titulek.
- Lidé hledají „DPH faktura“, ale billing stránka mluví jen o „daňovém dokladu“. Přidej běžný jazyk zákazníka.
- Lidé hledají „API limit“, ale limit není nikde popsán. Doplň dokumentaci nebo přiznej, že limit zatím není veřejně garantovaný.

### 6) Výsledky musí být vysvětlitelné

Vyhledávání není kouzelná skříňka. Uživatel má poznat, proč vidí konkrétní výsledek a co může udělat dál.

Dobrý výsledek obsahuje:

- název,
- krátký úryvek,
- typ obsahu,
- datum aktualizace u dokumentace,
- štítek produktu nebo kategorie,
- jasnou URL,
- informaci, pokud je obsah zastaralý.

U knowledge base je užitečné ukázat i „doporučené další kroky“:

- článek,
- kontakt na podporu,
- odkaz do nastavení,
- formulář pro zpětnou vazbu bez povinného účtu.

Prázdný stav nemá říkat jen „nic nenalezeno“. Má pomoct:

> Nic jsme nenašli. Zkus kratší dotaz, zkontroluj překlep, nebo napiš podpoře. Do zprávy neposílej hesla, API klíče ani citlivá zákaznická data.

### Šablona review interního vyhledávání

```markdown
## Review vyhledávání: [web / produkt / dokumentace]

### Účel
- Kdo hledá:
- Co má najít:
- Co nesmí najít:
- Primární rozhodnutí po hledání:

### Index
- Zdroj obsahu:
- Veřejný / neveřejný obsah:
- Oprávnění:
- Frekvence aktualizace:
- Mazání z indexu:

### Dotazy a logování
- Ukládáme plné dotazy: ano/ne
- Sanitizace:
- Minimální práh pro report:
- Retence:
- Kdo má přístup k reportu:

### UX
- Search input má label:
- Klávesnicová navigace:
- Autocomplete pravidla:
- Prázdný stav:
- Nulové výsledky v backlogu:

### Rizika
- Možná PII v dotazech:
- Možná enumerace:
- Externí dodavatel:
- Exit plán:
```

### Checklist pro privacy-first vyhledávání

- [ ] Veřejný obsah, zákaznická data a interní admin nejsou v jednom univerzálním indexu.
- [ ] Výsledky respektují role, workspace a oprávnění uživatele.
- [ ] Vyhledávací pole má jasný label, správný typ a funguje klávesnicí.
- [ ] Plné dotazy se neukládají automaticky jako výchozí stav.
- [ ] Reporty používají očištěné a agregované fráze s minimálním prahem výskytu.
- [ ] Autocomplete neprozrazuje objekty, které uživatel nesmí znát.
- [ ] Nulové výsledky mají měsíční review a vedou k opravám obsahu nebo navigace.
- [ ] Prázdný stav pomáhá pokračovat a připomíná, co neposílat do podpory.
- [ ] Index má popsanou retenci, mazání a exit plán od dodavatele.

## Příloha AL: Uploady, přílohy a exporty bez datových pastí

Souborový upload vypadá jako obyčejné tlačítko „Přiložit“. Ve skutečnosti je to brána, kterou do systému pouštíš cizí obsah, cizí metadata, cizí názvy souborů a někdy i cizí malware. Export zase vypadá jako pohodlná funkce pro zákazníka. Ve skutečnosti může jedním kliknutím vytvořit balík osobních údajů, který pak žije mimo produkt, mimo audit a mimo retenční pravidla.

Privacy-first přístup proto neznamená zakázat přílohy a exporty. Znamená navrhnout je jako kontrolované datové toky: kdo může nahrát, co může nahrát, kam se soubor uloží, kdo ho uvidí, jak dlouho tam bude a co se stane, když zákazník odejde.

OWASP File Upload Cheat Sheet u uploadů doporučuje mimo jiné povolený seznam typů souborů, validaci přípony i obsahu, bezpečné názvy, omezení velikosti, ukládání mimo webroot, antivirovou kontrolu nebo sandbox podle rizika a ochranu před přepsáním souborů ([OWASP File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html)). Pro malý SaaS je to praktický návod, jak z tlačítka „nahrát PDF“ neudělat bezpečnostní adventní kalendář, kde je za každým okénkem incident.

### 1) Každý upload musí mít účel a hranici

Nejdřív si napiš, proč soubor potřebuješ. Bez toho se z uploadu rychle stane odkladiště všeho: smlouvy, screenshoty, logy, exporty z účetnictví, fotky občanek, interní poznámky a „ještě něco pro jistotu“.

Dobré otázky před implementací:

- Jaký problém soubor řeší?
- Kdo ho nahrává a kdo ho čte?
- Je soubor nutný, nebo stačí strukturované pole?
- Jaké typy souborů jsou povolené?
- Obsahuje soubor osobní, obchodní nebo bezpečnostně citlivá data?
- Jak dlouho ho potřebujeme držet?
- Má být soubor dostupný i po ukončení účtu?

Příklad: u support ticketu často stačí screenshot chyby a krátký popis. Není potřeba motivovat zákazníka, aby posílal databázový dump, export uživatelů nebo celou fakturu, pokud řeší jen špatně zobrazené tlačítko.

**Codyho komentář:** Upload je jako otevřené okno v kanceláři. Někdy je potřeba vyvětrat. Ale nechceš, aby ti tudy někdo hodil dovnitř cihlu, leták a tři šanony s osobními údaji.

### 2) Validuj obsah, ne jen příponu

Přípona souboru je uživatelský slib. A uživatelé — včetně těch hodných — občas slibují nesmysly, protože operační systém, prohlížeč nebo integrace něco přejmenuje.

Minimální pravidla:

- používej povolený seznam typů místo zakazování „nebezpečných“ přípon,
- kontroluj MIME typ i skutečný obsah souboru,
- omez velikost souboru a počet souborů na akci,
- normalizuj názvy a nepoužívej původní jméno jako cestu v úložišti,
- generuj vlastní interní identifikátor souboru,
- odstraň nebo ignoruj metadata, která nepotřebuješ,
- u rizikových typů zvaž antivirovou kontrolu, převod do bezpečnějšího formátu nebo manuální schválení.

Příklad: pokud zákazník nahrává logo firmy, můžeš přijmout PNG, JPEG, WebP nebo SVG podle potřeby. SVG ale není „jen obrázek“ — může obsahovat aktivní prvky a odkazy. Pokud SVG nepotřebuješ jako editovatelný vektor, bezpečnější může být převod na rasterizovaný náhled.

### 3) Úložiště odděl od aplikace

Nahrané soubory nemají ležet vedle aplikačního kódu jako zapomenutá svačina v batohu. Odděl je do objektového úložiště nebo dedikovaného adresáře s jasnými pravidly přístupu.

Praktický návrh:

- soubory ukládej pod interním ID, ne pod původním názvem,
- veřejné soubory a soukromé přílohy měj oddělené,
- neveřejné soubory vydávej přes krátkodobé podepsané odkazy nebo aplikační autorizaci,
- bucket/adresář nemá být globálně veřejný jen proto, že jeden typ souboru je veřejný,
- loguj bezpečnostní události typu stažení citlivého exportu, smazání přílohy nebo změna oprávnění,
- zálohuj metadata i soubory tak, aby šlo obnovit vazby.

U B2B SaaS mysli i na workspace hranice. Uživatel z organizace A nesmí stáhnout přílohu z organizace B jen proto, že zná URL. Neveřejný odkaz není oprávnění. Je to jen adresa.

### 4) Export je produktová funkce i bezpečnostní událost

Export dat je důležitý pro důvěru a exit plán. Zákazník má mít rozumnou možnost odejít a vzít si svoje data. Zároveň export často obsahuje víc informací než běžná obrazovka produktu.

Navrhni export podle rizika:

- malý běžný export může být dostupný hned,
- export celého workspace může vyžadovat potvrzení, MFA nebo administrátorskou roli,
- citlivý export může běžet asynchronně a poslat jen oznámení, ne soubor e-mailem,
- odkaz na export má mít krátkou životnost,
- export má mít auditní stopu: kdo, kdy, co a proč,
- staré exporty se mažou automaticky podle retenčního pravidla.

Co neposílat e-mailem:

- kompletní CSV zákazníků,
- fakturační historii s osobními údaji,
- API klíče nebo tokeny,
- bezpečnostní logy,
- export support konverzací.

E-mail je skvělý na oznámení „export je připravený“. Není skvělý jako trezor s přílohou `all_customers_final_v7_REAL.csv`.

### 5) Metadata jsou data taky

Soubor není jen obsah. Má název, velikost, typ, autora, čas nahrání, náhled, EXIF metadata, interní cestu, vazbu na účet a někdy i historii verzí.

U každého typu souboru rozhodni:

- která metadata ukládáš,
- která metadata ukazuješ uživatelům,
- která metadata odstraňuješ,
- která metadata loguješ,
- jak metadata mažou nebo anonymizují retenční pravidla.

Příklad: fotka z mobilu může obsahovat GPS polohu. Pokud produkt nepotřebuje lokalitu, nemá ji držet jen proto, že byla v EXIF datech. Stejně tak název souboru `smlouva_novak_rodne_cislo.pdf` může obsahovat osobní údaj, i když samotný dokument zůstane uložený bezpečně.

### 6) Retence souborů musí být viditelná v produktu

Retence není jen interní tabulka. Uživatel by měl chápat, co se se soubory stane.

Dobré produktové texty:

> Přílohy k ticketům mažeme po 180 dnech od uzavření ticketu. Pokud potřebuješ něco uložit dlouhodobě, stáhni si vlastní kopii.

> Export bude dostupný 48 hodin. Potom ho automaticky smažeme a můžeš vytvořit nový.

> Do příloh neposílej hesla, API klíče ani celé databázové exporty. Pro citlivý přenos použij bezpečný kanál domluvený s podporou.

Tahle věta není právní dekorace. Snižuje riziko, že zákazník pošle něco, co produkt nemá umět bezpečně zpracovat.

### Šablona karty pro upload nebo export

```markdown
## Karta souborového toku: [upload / export]

### Účel
- Proč soubor potřebujeme:
- Kdo ho vytváří:
- Kdo ho čte:
- Primární rozhodnutí nebo práce po nahrání/exportu:

### Povolený obsah
- Povolené typy:
- Maximální velikost:
- Zakázaný obsah:
- Sanitizace/metadatová pravidla:

### Přístup
- Role s právem nahrát:
- Role s právem stáhnout:
- Workspace hranice:
- Veřejný/neveřejný režim:

### Bezpečnost
- Validace obsahu:
- Skenování/sandbox:
- Ukládání:
- Podepsané odkazy:
- Auditní události:

### Retence
- Doba uložení:
- Automatické mazání:
- Chování po zrušení účtu:
- Obnova ze záloh:
```

### Checklist pro uploady, přílohy a exporty

- [ ] Každý upload a export má popsaný účel, vlastníka a retenční pravidlo.
- [ ] Povolené typy souborů jsou řešené allowlistem, ne nekonečným blacklistem.
- [ ] Aplikace validuje skutečný obsah souboru, velikost a počet souborů.
- [ ] Původní název souboru se nepoužívá jako interní cesta ani oprávnění.
- [ ] Neveřejné soubory nejdou stáhnout jen znalostí URL.
- [ ] Veřejné a soukromé soubory jsou oddělené na úrovni úložiště nebo oprávnění.
- [ ] Exporty celého workspace mají odpovídající roli, potvrzení a auditní stopu.
- [ ] Odkazy na exporty mají krátkou životnost a staré exporty se automaticky mažou.
- [ ] Metadata souborů jsou součástí mapy dat a nepoužívaná metadata se odstraňují.
- [ ] Produkt jasně říká, co do příloh neposílat a kdy budou soubory smazané.

## Příloha AM: Staging, preview deploye a testovací data bez produkčního průvanu

Staging prostředí bývá největší paradox malého týmu. Produkce má hesla, role, monitoring, backupy a trochu posvátný respekt. Staging má často `staging.example.com`, jednoduché heslo, kopii databáze z pátku a pocit, že „to přece nikdo nenajde“. Spoiler: internet najde všechno, co má DNS záznam a trochu smůly.

Privacy-first provoz neznamená testovat naslepo. Znamená testovat tak, aby vývoj, QA, obchodní demo ani preview pull requestu nepotřebovaly zbytečně tahat živá osobní data z produkce. Evropský malý SaaS tím získá dvě věci najednou: menší riziko incidentu a rychlejší vývoj, protože testovací prostředí není radioaktivní skládka reálných zákaznických údajů.

EDPB mezi základními principy ochrany osobních údajů zdůrazňuje účelové omezení, minimalizaci dat, přesnost, omezení uložení, integritu a důvěrnost ([EDPB: Basic principles](https://www.edpb.europa.eu/topics/key-gdpr-concepts/basic-principles_en)). OWASP ASVS zase bere oddělení prostředí, správu tajemství, logování a kontrolu přístupů jako běžnou součást bezpečné aplikace ([OWASP ASVS](https://owasp.org/projects/asvs)). Přeloženo do lidské češtiny: staging není právně ani technicky magická zóna, kde pravidla přestanou platit, protože má v názvu „test“.

### 1) Prostředí pojmenuj podle rizika, ne podle nálady

V malém týmu často vzniknou tři až pět prostředí: lokální vývoj, preview pro každou větev, sdílený staging, demo prostředí a produkce. Každé má jiný účel a jiné riziko. Když je všechny bereš jako „něco mimo produkci“, skončíš s tím, že v preview deployi běží produkční analytics klíč, staging posílá opravdové e-maily a demo ukazuje reálné zákazníky.

Praktické rozdělení:

- `local`: osobní vývojářské prostředí bez veřejného přístupu,
- `preview`: krátkodobý deploy konkrétní větve nebo pull requestu,
- `staging`: sdílené prostředí pro ověření release kandidáta,
- `demo`: řízené prostředí pro obchodní ukázky a školení,
- `production`: skutečná služba pro zákazníky.

Ke každému prostředí napiš jednoduchou kartu: účel, kdo má přístup, jaká data smí obsahovat, jak dlouho žije, jaké integrace smí volat a kdo ho uklízí. Ano, zní to trochu byrokraticky. Ale je to levnější než vysvětlovat zákazníkovi, proč se jeho e-mail objevil v screenshotu z interního dema.

**Codyho komentář:** Pokud neumíš jednou větou říct, k čemu prostředí slouží, pravděpodobně slouží ke všemu. A „všechno“ je technický název pro budoucí incident s konfety.

### 2) Testovací data tvoř jako produktovou součást

Nejlepší staging data nejsou kopie produkce. Nejlepší staging data jsou záměrně navržená sada scénářů, která pokrývá běžné i hraniční případy: nový účet, účet po trialu, tým s více rolemi, fakturační problém, chybějící nastavení, prázdný stav, velký workspace, import s chybou.

Dobrá testovací sada obsahuje:

- několik realistických firem bez skutečných lidí,
- uživatele s jasnými rolemi a falešnými kontakty,
- příklady objednávek, faktur, ticketů nebo projektů podle produktu,
- hraniční stavy jako expirovaný trial, pozastavený účet nebo nedokončený onboarding,
- ukázková data pro marketingové weby, dashboardy a e-maily,
- skript pro obnovu dat do známého stavu.

Příklad: místo importu produkčních zákazníků vytvoř fiktivní firmy „Knihovna Borůvka“, „Studio Sever“ a „SaaS Kovárna“. Každá má jiný tarif, jinou roli uživatelů a jiný typ problému. Vývojář i obchodník pak vidí produkt v realistickém kontextu, ale nikdo nepracuje s reálným zákazníkem.

Když už musíš použít produkční vzorek, ber to jako výjimku s vlastní kartou: proč je nutný, kdo ho schválil, jak byl anonymizován nebo pseudonymizován, kde leží, kdy se smaže a kdo ověřil, že se nepropíše do logů, screenshotů nebo e-mailů.

### 3) Preview deploy není veřejná výloha

Preview deploye jsou skvělý nástroj. Každý pull request dostane URL, designer i zakladatel si vše proklikají a merge není loterie. Jenže preview deploy je také veřejný web, pokud ho nijak nechráníš.

Základní pravidla:

- preview URL nemá indexovat vyhledávač,
- preview má být chráněné přihlášením, allowlistem nebo krátkodobým přístupem,
- preview nepoužívá produkční databázi,
- preview nepoužívá produkční platební, e-mailové ani analytické klíče,
- preview má viditelný banner s názvem větve a prostředí,
- preview se automaticky maže po mergi nebo uzavření větve.

Pro marketingový web přidej ještě jednu pojistku: canonical URL a sitemap patří produkci, ne každému preview. Jinak si vyrobíš SEO multivesmír, kde vyhledávač najde pět verzí stejné landing page a tvůj budoucí já bude nad Search Console dělat archeologii.

### 4) Integrace v testu musí být tupé, nebo bezpečně oddělené

Nejvíc škody ve stagingu často neudělá databáze, ale vedlejší efekt. Testovací objednávka odešle reálný e-mail. Preview formulář vytvoří lead v ostrém CRM. Cron ve stagingu spustí reálnou synchronizaci. Webhook z platební brány dorazí dvakrát a účetnictví začne zpívat smutnou píseň.

Pro každou integraci nastav režim:

- `off`: integrace je vypnutá,
- `fake`: používá lokální stub nebo sandbox,
- `sandbox`: volá oficiální testovací režim dodavatele,
- `read-only`: čte, ale nemění vzdálený systém,
- `production`: povoleno jen v produkci a výjimečně v řízeném demo režimu.

E-maily ve stagingu neposílej skutečným adresátům. Použij odchytávací mailbox, interní testovací doménu nebo sandbox poskytovatele. Platební bránu nech v testovacím režimu. Webhooky podepisuj i v testu, ale odděl tajemství podle prostředí. Crony a plánované úlohy měj ve stagingu vypnuté, pokud zrovna netestuješ konkrétní scénář.

### 5) Tajemství nesmí cestovat s databází

Když někdo udělá kopii produkce do stagingu, často se nekopírují jen tabulky. Kopírují se tokeny, API klíče, refresh tokeny, session zbytky, webhook secrets a někdy i konfigurační hodnoty uložené v databázi. To je přesně ten moment, kdy „test“ začne mít produkční následky.

Minimální obrana:

- produkční secrets nikdy nepatří do repozitáře ani do exportu databáze,
- prostředí má vlastní klíče s vlastním rozsahem,
- testovací klíče mají nižší oprávnění a krátkou životnost,
- při refreshi staging dat se citlivé tokeny mažou nebo nahrazují bezpečnými hodnotami,
- session a reset tokeny se do testovacích prostředí nepřenášejí,
- změna secrets se zapisuje jako auditovatelná provozní akce.

Pokud produkt umožňuje zákaznické integrace, dej si pozor i na jejich klíče. Zákazník nedal souhlas, aby jeho produkční token do účetnictví nebo CRM skončil ve staging databázi jen proto, že vývojář potřeboval otestovat nový filtr.

### 6) Staging uklízej stejně poctivě jako produkci

Staging prostředí mívá jednu romantickou vlastnost: nikdo ho nevlastní, dokud něco neshoří. Pak ho vlastní všichni a nikdo zároveň. Dej mu proto běžný provozní rytmus.

Doporučený rytmus:

- denně: automatické mazání starých preview prostředí,
- týdně: kontrola aktivních preview URL a testovacích účtů,
- měsíčně: refresh testovací datové sady a review přístupů,
- kvartálně: kontrola secrets, sandbox integrací a veřejné dostupnosti,
- před releasem: ověření, že staging odpovídá produkční konfiguraci tam, kde má.

Do monitoringu stagingu nedávej stejné alerty jako do produkce. Staging může padat během testování. Ale sleduj bezpečnostní signály: veřejně dostupný admin, chybějící autentizace, pokus o použití produkčního klíče, nečekané odchozí e-maily nebo dlouho žijící preview.

### Šablona karty prostředí

```markdown
## Karta prostředí: [local / preview / staging / demo / production]

### Účel
- K čemu prostředí slouží:
- Kdo ho používá:
- Jak dlouho má žít:
- Kdo je vlastník:

### Data
- Povolený typ dat:
- Zakázaný typ dat:
- Zdroj testovacích dat:
- Retence a mazání:

### Přístup
- Kdo má přístup:
- Jak je chráněné:
- Veřejná URL:
- Indexace vyhledávači:

### Integrace
- E-mail:
- Platby:
- Analytics:
- CRM/support:
- Crony a webhooky:

### Bezpečnost
- Secrets:
- Logy:
- Auditní události:
- Automatický úklid:
```

### Checklist pro staging a testovací data

- [ ] Každé prostředí má jasný účel, vlastníka a pravidlo životnosti.
- [ ] Preview deploye nejsou indexované a nejsou volně dostupnou kopií produktu.
- [ ] Staging nepoužívá produkční databázi jako výchozí stav.
- [ ] Testovací data pokrývají reálné scénáře bez reálných osobních údajů.
- [ ] Produkční vzorek dat je výjimka se schválením, anonymizací a datem smazání.
- [ ] E-maily, platby, CRM, analytika a webhooky mají oddělený testovací režim.
- [ ] Produkční secrets se nepřenášejí do stagingu, exportů ani seed skriptů.
- [ ] Testovací účty a preview prostředí se pravidelně mažou.
- [ ] Staging má viditelný banner, aby se nepletl s produkcí.
- [ ] Tým ví, co se do stagingu nesmí nahrávat, kopírovat ani screenshotovat.

## Příloha AN: Zálohy a obnova bez falešného pocitu bezpečí

Záloha není soubor někde v cloudu. Záloha je schopnost obnovit službu v rozumném čase, s přijatelnou ztrátou dat a bez toho, aby tým improvizoval podle starého Slack vlákna. Dokud obnovu nikdo nevyzkoušel, nemáš zálohu. Máš optimistickou víru v budoucnost, což je hezké v poezii, horší v produkci.

NCSC ve svém doporučení k offline zálohám upozorňuje, že zálohy mají být chráněné i proti situaci, kdy je primární prostředí kompromitované; proto dává smysl držet kopie odděleně a pravidelně testovat obnovu ([NCSC: Offline backups in an online world](https://www.ncsc.gov.uk/guidance/offline-backups-in-an-online-world)). Pro privacy-first SaaS je to zároveň otázka důvěry: zákazník nepotřebuje slyšet „máme snapshoty“, ale „víme, co obnovíme, kdo to smí udělat a jak dlouho to potrvá“.

### 1) Začni požadavkem na obnovu, ne typem zálohy

Nejdřív si napiš dvě hodnoty:

- **RPO:** kolik dat smíš maximálně ztratit,
- **RTO:** jak dlouho smí trvat návrat služby.

Pro marketingový web může být přijatelné obnovit v řádu hodin, pokud obsah existuje v repozitáři. Pro SaaS s placenými zákazníky může být ztráta několika hodin dat nepřijatelná. Pro faktury, auditní logy nebo zákaznické exporty budeš mít jiné požadavky než pro dočasné cache.

Praktický příklad:

- databáze aplikace: RPO 15 minut, RTO 2 hodiny,
- soubory nahrané zákazníky: RPO 1 hodina, RTO 4 hodiny,
- marketingový web: RPO 24 hodin, RTO 1 hodina,
- analytika: RPO 24 hodin, RTO 1 pracovní den,
- cache a build artefakty: bez zálohy, znovu se vytvoří.

Tím se z abstraktní debaty „jak často backupovat“ stane produktové rozhodnutí. Když někdo požaduje kratší RPO, musí být jasné, kolik to stojí technicky, finančně i provozně.

### 2) Zálohuj podle datových tříd

Jedna globální politika záloh pro celý systém je jednoduchá na papíře a špatná v praxi. Rozděl data podle účelu a citlivosti.

Typické třídy:

- **konfigurační zdroj:** kód, infrastruktura, migrační skripty, šablony,
- **produkční databáze:** účty, workspace, nastavení, produktová data,
- **souborové úložiště:** uploady, exporty, přílohy, importní balíky,
- **auditní a bezpečnostní záznamy:** přihlášení, administrátorské zásahy, změny práv,
- **provozní logy:** chyby, requesty, metriky, technické události,
- **externí systémy:** billing, e-mail, support, CRM, účetnictví.

Každá třída má mít vlastní pravidlo: zálohovat/ne, frekvence, retence, šifrování, kdo smí obnovovat a kam se obnova smí provést. Zákaznický upload například nepotřebuje být ve stejném exportu jako aplikační secrets. Auditní log zase nechceš přepsat jen proto, že obnovuješ účet zákazníka po omylu.

### 3) Obnova musí mít bezpečné místo přistání

Nejhorší restore plán je „nahrajeme to do produkce a uvidíme“. Obnova potřebuje bezpečné místo, kde lze zkontrolovat integritu dat, migrace a vedlejší efekty.

Doporučený tok:

1. obnov zálohu do izolovaného restore prostředí,
2. zakaž odchozí integrace, cron úlohy a webhooky,
3. ověř verzi schématu databáze a migrace,
4. zkontroluj počet klíčových záznamů a integritu vazeb,
5. spusť aplikační smoke testy,
6. rozhodni, jestli se obnovuje celý systém, tenant, tabulka nebo konkrétní záznam,
7. proveď produkční zásah s auditním zápisem.

Tohle zní pomalu, ale ve stresu šetří čas. Bez restore prostředí riskuješ, že dobrá záloha poškodí živý systém jen proto, že byla obnovena do špatného kontextu.

### 4) Test obnovy je běžná údržba, ne sváteční rituál

Zálohy se kazí potichu. Změní se bucket politika. Expirovaný klíč přestane číst archiv. Nová tabulka není v exportu. Šifrovací klíč zná jen člověk, který je zrovna na dovolené a pravděpodobně zaslouženě ignoruje telefon.

Minimální rytmus pro malý tým:

- měsíčně: obnov poslední databázovou zálohu do izolovaného prostředí,
- kvartálně: proveď end-to-end restore cvičení pro kritický scénář,
- po větší změně datového modelu: ověř, že se zálohuje nová část systému,
- po změně dodavatele: zkontroluj export, retenci a přístupová práva,
- po incidentu: doplň runbook o to, co chybělo.

Test obnovy nemusí vždy znamenat celodenní požární cvičení. Stačí malý, opakovatelný scénář: vybrat zálohu, obnovit ji, ověřit integritu, zapsat čas a nálezy. Pokud to trvá moc dlouho, je to signál. Ne výmluva.

### 5) Zálohy jsou osobní data také

Privacy-first provoz často zapomíná, že záloha může obsahovat stejná osobní data jako produkce, jen v horším obalu. Bývá hůř prohledatelná, hůř mazatelná a déle žijící.

Pravidla:

- zálohy šifruj a odděl klíče od samotných archivů,
- přístup k zálohám dej jen rolím, které obnovu skutečně řeší,
- dokumentuj retenci podle datové třídy,
- při žádosti o smazání vysvětli, jak se řeší data v zálohách,
- zálohy nepoužívej jako pohodlný zdroj dat pro analytiku nebo vývoj,
- restore do neprodukčního prostředí vždy anonymizuj nebo drž izolovaný.

Pokud máš retenční politiku pro produkční data na 90 dní, ale zálohy držíš tři roky bez důvodu, máš neviditelný dluh. A ne, „možná se to někdy bude hodit“ není důvod. To je nostalgie se storage účtem.

### 6) Připrav scénáře, ne jen technologii

Dobrá obnova je scénář podle typu problému. Každý vyžaduje jiný postup.

Příklady scénářů:

- **omylem smazaný zákaznický workspace:** obnov konkrétní tenant nebo záznamy,
- **špatná migrace:** zastav zápisy, vrať schéma nebo spusť opravnou migraci,
- **kompromitovaný admin účet:** rotuj klíče, obnov bezpečný stav práv, zachovej auditní důkazy,
- **poškozené souborové úložiště:** ověř checksumy, obnov konkrétní prefix, zákazníkům vysvětli dopad,
- **výpadek regionu:** přepni na připravený fallback nebo obnov do náhradní lokality,
- **ransomware nebo smazané prostředí:** použij oddělené offline/immutable kopie a obnov minimální provoz.

Každý scénář má mít vlastníka, rozhodovací práh a komunikační poznámku. Technická obnova bez komunikace je poloviční incident response.

### Šablona restore runbooku

```markdown
## Restore runbook: [systém / datová třída / scénář]

### Cíl obnovy
- Co obnovujeme:
- Proč obnovujeme:
- RPO:
- RTO:
- Kdo rozhoduje:

### Zdroje záloh
- Databáze:
- Soubory:
- Konfigurace:
- Externí systémy:
- Šifrovací klíče:

### Bezpečné prostředí
- Restore prostředí:
- Zakázané integrace:
- Smoke testy:
- Kontrola integrity:

### Produkční zásah
- Typ zásahu:
- Dopad na zákazníky:
- Auditní zápis:
- Komunikace:

### Poučení
- Co fungovalo:
- Co chybělo:
- Co automatizovat:
- Datum dalšího testu:
```

### Checklist pro zálohy a obnovu

- [ ] Každá datová třída má RPO, RTO, frekvenci záloh a retenci.
- [ ] Zálohy jsou šifrované a klíče nejsou uložené vedle archivů.
- [ ] Produkční databáze, soubory, auditní logy a konfigurace mají oddělené restore postupy.
- [ ] Existuje izolované restore prostředí bez odchozích integrací.
- [ ] Obnova se testuje pravidelně a výsledek se zapisuje.
- [ ] Zálohy nejsou používány jako náhodný zdroj dat pro vývoj nebo reporting.
- [ ] Přístup k zálohám je omezený, auditovaný a pravidelně revidovaný.
- [ ] Retence záloh odpovídá účelu, právním povinnostem a zákaznickým slibům.
- [ ] Runbook řeší i komunikaci se zákazníky a interní odpovědnosti.
- [ ] Tým umí říct, kdy byla poslední úspěšná obnova, ne jen poslední záloha.


## Příloha AO: Monitoring a alerting bez sledovacího velína

Monitoring má malému SaaS týmu pomoct zjistit, že produkt nefunguje, dřív než to zjistí zákazník ve tři ráno a napíše e-mail s předmětem „URGENT“. Nemá z produktu udělat sledovací velín, kde se sbírá každý pohyb uživatele jen proto, že by se jednou mohl hodit do grafu.

Privacy-first monitoring stojí na jednoduché větě: sleduj zdraví systému, ne lidi. Potřebuješ vědět, jestli služba odpovídá, jestli roste chybovost, jestli fronta zpráv nezůstala viset a jestli platební webhooky nepadaly posledních dvacet minut. Nepotřebuješ kvůli tomu ukládat celé request body, e-mail zákazníka do každého logu a session replay z administrace. OWASP u logování doporučuje rozlišovat bezpečnostně a provozně relevantní události, chránit logy před manipulací a nelogovat citlivá data jako hesla, tokeny nebo zbytečný osobní obsah ([OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)). ENISA u malých firem opakovaně zdůrazňuje připravenost, kontinuitu provozu a řízení rizik jako praktickou disciplínu, ne jako dekoraci na audit ([ENISA: Cybersecurity guide for SMEs](https://www.enisa.europa.eu/publications/cybersecurity-guide-for-smes)).

### 1) Začni uživatelskou zkušeností, ne grafem CPU

CPU, RAM a disk jsou důležité, ale samy o sobě neříkají, jestli produkt plní slib. Uživatel neříká „dnes jsem měl špatnou p95 latenci databázového poolu“. Říká „nejde mi vytvořit faktura“, „nepřišel e-mail“, „dashboard se nenačetl“ nebo „nejde zaplatit“.

Proto monitoring rozděl na vrstvy:

- **dostupnost:** web, aplikace, API, status page, DNS, certifikát,
- **kritické toky:** registrace, přihlášení, vytvoření projektu, platba, export, odeslání e-mailu,
- **technické zdraví:** chybovost, latence, fronty, databáze, storage, cron úlohy,
- **bezpečnostní signály:** opakované neúspěšné přihlášení, změny rolí, neobvyklé admin akce,
- **business provoz:** počet dokončených objednávek, doručené onboarding e-maily, nevyřízené support tickety.

Pro každý kritický tok napiš jednu větu: „Když toto nefunguje, zákazník nemůže udělat X.“ Tím oddělíš monitoring, který chrání hodnotu produktu, od monitoringu, který jen krmí dashboard.

**Codyho komentář:** Graf, na který se nikdo nedívá a podle kterého se nikdy nerozhoduje, není observabilita. Je to digitální akvárium. Hezky bublá, ale ryby ti stejně umřou.

### 2) Alert není notifikace. Alert je závazek někoho probudit.

Nejčastější chyba malých týmů je udělat alert ze všeho. Výsledek? Slack kanál s 800 zprávami týdně, všichni ho ztlumí a jediný skutečný incident tiše projde kolem jako zloděj v ponožkách.

Alert má vzniknout jen tehdy, když splňuje tři podmínky:

1. problém má dopad na zákazníka, bezpečnost, peníze nebo data,
2. někdo ví, co má udělat,
3. reakce teď je lepší než reakce zítra.

Praktické úrovně:

- **P0:** produkt je nedostupný, běží únik dat, platby masově padají, zásadní bezpečnostní problém,
- **P1:** kritický tok je rozbitý pro část zákazníků, fronta roste, e-maily nebo webhooky selhávají,
- **P2:** degradace výkonu, zvýšená chybovost, problém má workaround,
- **P3:** trend k vyšetření v pracovní době, technický dluh, pomalý růst nákladů.

P0 a P1 patří do alertingu. P2 možná. P3 patří do reportu, issue trackeru nebo týdenního review. Pokud každá drobnost pípá stejně jako produkční výpadek, tým se naučí ignorovat všechno. Mozek je skvělý spam filtr, jen ho nechceš trénovat na incidenty.

### 3) Alert payload drž krátký a bezpečný

Alert má odpovědět na otázky: co se stalo, jaký je dopad, odkdy to trvá, kde se podívat a kdo je vlastník. Nemá posílat celé requesty, osobní údaje zákazníků nebo tokeny do chatovacího nástroje.

Dobrá alert zpráva obsahuje:

- název služby a prostředí,
- prioritu a typ problému,
- čas začátku a délku trvání,
- agregovaný dopad: počet chyb, procento selhání, počet tenantů nebo dotčených požadavků,
- odkaz na dashboard nebo runbook,
- poslední deploy nebo změnu konfigurace,
- vlastníka služby nebo rotaci.

Špatná alert zpráva obsahuje:

- e-mail konkrétního zákazníka bez nutnosti,
- obsah formuláře, zprávy, souboru nebo faktury,
- plný access token, API klíč nebo session ID,
- celé URL s osobními parametry,
- stack trace s citlivými hodnotami,
- screenshot z adminu se zákaznickými daty.

Když potřebuješ pro řešení incidentu konkrétní identifikátor, používej interní ID a přístup přes oprávněný admin nástroj. Chat není databáze incidentů. A rozhodně není trezor.

### 4) SLO pomáhá říct, co je opravdu důležité

Service Level Objective nemusí být korporátní magie. Pro malý SaaS stačí pár praktických cílů, které pomáhají rozhodnout, kdy opravovat, kdy investovat do infrastruktury a kdy přestat honit nuly za desetinnou čárkou.

Příklad jednoduchých SLO:

- veřejný web odpoví úspěšně v 99,5 % kontrol za měsíc,
- přihlášení má p95 latenci pod 1,5 sekundy,
- transakční e-mail je předán poskytovateli do 60 sekund,
- platební webhook je zpracován do 2 minut,
- export dat se dokončí do 10 minut nebo zobrazí srozumitelný stav.

Ke každému SLO přidej error budget: kolik selhání je ještě přijatelné, než se tým zastaví a řeší spolehlivost. Když se budget pálí rychle, není čas přidávat další efektní feature s konfety. Je čas opravit základ.

SLO zároveň chrání tým před perfekcionismem. Ne každá interní stránka potřebuje stejnou dostupnost jako přihlášení nebo platby. Privacy-first provoz je i o tom, že neinstaluješ tři další nástroje jen proto, abys měřil mikroskopem něco, co zákazník nikdy neuvidí.

### 5) Syntetické kontroly jsou často čistší než sledování lidí

Když chceš vědět, jestli registrační tok funguje, nemusíš čekat, až skutečný uživatel selže a jeho data skončí v logu. Můžeš pravidelně spustit syntetický test s technickým účtem a falešnými daty.

Typické syntetické kontroly:

- homepage vrací 200 a obsahuje klíčový text,
- přihlašovací stránka se načte a certifikát je platný,
- API health endpoint ověří databázi a frontu,
- testovací registrace projde v sandbox prostředí,
- transakční e-mail se odešle na interní testovací schránku,
- cron úloha zapíše heartbeat po dokončení.

Syntetické testy mají jednu velkou výhodu: kontroluješ funkčnost bez profilování návštěvníků. Měříš systém kontrolovaným vstupem. U produktových toků je jen potřeba pečlivě oddělit testovací účty, aby se nedostaly do reportingu, fakturace nebo obchodního follow-upu. Robot zákazníkem není. I když někdy vyplní formulář slušněji než člověk.

### 6) Monitoring nákladů je také privacy-first disciplína

Náklady nejsou jen finance. Náhlý růst účtu za logy, storage, e-maily nebo AI volání často znamená technický problém: nekonečný retry loop, rozbitý import, špatnou cache, spam útok nebo příliš upovídané logování.

Sleduj minimálně:

- objem logů podle služby a prostředí,
- počet odeslaných e-mailů a bounce rate,
- růst databáze a souborového úložiště,
- počet API volání na drahé externí služby,
- neúspěšné retry pokusy,
- počet vytvořených exportů a jejich velikost.

Privacy-first otázka zní: „Roste objem dat proto, že produkt vytváří hodnotu, nebo proto, že sbíráme bordel?“ Pokud logy vyrostou desetkrát po release, nemusí to být známka úspěchu. Může to být debug výpis, který omylem zapisuje každý payload. Gratuluji, vyrobil sis drahou časovanou bombu se search boxem.

### 7) Každý alert musí mít runbook

Alert bez runbooku je jen úzkost s timestampem. Runbook nemusí být dlouhý, ale musí říct, jak ověřit dopad, jaké první kroky udělat, kdy eskalovat a co nezkoušet.

Minimální runbook:

```markdown
## Alert karta: [název alertu]

### Co znamená
- Služba / tok:
- Priorita:
- Dopad na zákazníka:
- Typický falešný poplach:

### První kontrola
- Dashboard:
- Log query bez PII:
- Poslední deploy / změna:
- Syntetický test:

### První kroky
- Krok 1:
- Krok 2:
- Krok 3:

### Eskalace
- Kdy volat vlastníka:
- Kdy otevřít incident:
- Kdy informovat zákazníky:

### Privacy pravidla
- Co se nesmí kopírovat do chatu:
- Jaký identifikátor použít místo osobních údajů:
- Retence souvisejících logů:
```

Runbook pravidelně upravuj podle skutečných incidentů. Pokud člověk při incidentu musel improvizovat, zapiš to. Pokud alert pětkrát za měsíc planě křičel, změň práh nebo ho zruš. Monitoring není posvátný chrám. Je to pracovní nástroj, a pracovní nástroje mají být ostré, ne hlučné.

### Checklist pro privacy-first monitoring a alerting

- [ ] Každý monitoring signál má jasný účel: dostupnost, kritický tok, bezpečnost, výkon, náklady nebo business provoz.
- [ ] Kritické toky mají syntetické kontroly nebo jiné měření bez profilování reálných uživatelů.
- [ ] Alert vzniká jen tehdy, když má dopad, vlastníka a očekávanou reakci.
- [ ] Alert payload neobsahuje hesla, tokeny, celé request body, osobní údaje ani citlivé URL parametry.
- [ ] P0/P1 alerty mají runbook, eskalační pravidla a vlastníka služby.
- [ ] P2/P3 signály končí v review nebo issue trackeru, ne v nočním budíku.
- [ ] SLO existují pro klíčové uživatelské toky, ne jen pro infrastrukturu.
- [ ] Monitoring nákladů sleduje logy, e-maily, storage, externí API a retry smyčky.
- [ ] Testovací účty a syntetické kontroly jsou oddělené od obchodních reportů.
- [ ] Každý incident nebo falešný poplach vede k úpravě alertu, runbooku nebo prahu.

## Příloha AP: Bezpečnostní hlavičky a CSP bez rozbitého webu

Bezpečnostní hlavičky jsou malá věc s velkým dopadem. Nevyřeší špatnou autorizaci, děravé API ani admin heslo `Pondeli123`, ale nastavují prohlížeči hranice: odkud se smí načítat skripty, jestli stránka může běžet v iframe, kolik informací odejde v referreru a zda se má web používat jen přes HTTPS.

Pro privacy-first web jsou hlavičky zajímavé ještě z jednoho důvodu: nutí tým vyjmenovat, komu stránka skutečně důvěřuje. Když nastavuješ Content Security Policy a najednou zjistíš, že web tahá skripty z osmi domén, tří CDN, dvou widgetů a jednoho historického experimentu z roku „to byl jen test“, dostal jsi zdarma audit dodavatelů. Gratuluji, jen trochu bolí.

OWASP Secure Headers Project udržuje praktický přehled hlaviček, které pomáhají snižovat běžná webová rizika, včetně Content-Security-Policy, Strict-Transport-Security, X-Content-Type-Options nebo Referrer-Policy ([OWASP Secure Headers Project](https://owasp.org/www-project-secure-headers/)). MDN popisuje Content-Security-Policy jako mechanismus, kterým server omezuje zdroje, ze kterých se může načítat obsah stránky, a tím pomáhá mimo jiné snižovat dopad XSS útoků ([MDN: Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)).

### 1) Začni inventurou zdrojů

CSP se nepíše od stolu. Nejdřív si sepiš, co stránka opravdu načítá:

- vlastní doménu a statické assety,
- fonty,
- obrázky a média,
- API endpointy,
- analytiku,
- formulářové a captcha služby,
- platební nebo mapové widgety,
- embed obsah, pokud ho fakt potřebuješ.

U každého zdroje si polož tři otázky: proč ho používáme, co o návštěvníkovi vidí a co se stane, když ho vypneme. Pokud zdroj neumíš vysvětlit, nepatří do policy ani do webu. CSP není jen bezpečnostní konfigurace. Je to seznam důvěry. A seznam důvěry má být krátký, protože dlouhé seznamy jsou v bezpečnosti skoro vždycky začátek grotesky.

Praktický postup pro malý web:

1. Otevři produkční stránku v čistém profilu prohlížeče.
2. V DevTools zkontroluj síťové požadavky podle domén.
3. Vyhoď staré widgety, nepoužívané fonty a duplicitní knihovny.
4. Sepiš povolené domény do review karty.
5. Teprve potom navrhni CSP.

### 2) Nezačínej nejpřísnější policy v produkci

Content Security Policy umí web krásně ochránit i nádherně rozbít. Proto ji zaváděj postupně. Začni v preview nebo staging prostředí, pak použij režim reportování a až potom enforcement.

Bezpečnější pořadí:

- nejdřív odstraň inline skripty, staré externí skripty a zbytečné CDN,
- nastav základní `default-src 'self'`, ale testuj, co se rozbije,
- přidej konkrétní pravidla pro `script-src`, `style-src`, `img-src`, `font-src`, `connect-src` a `frame-src`,
- dočasně použij report-only režim, pokud máš kam reporty bezpečně posílat,
- po opravě skutečných porušení policy zapni enforcement,
- každou novou třetí stranu přidávej přes review, ne přes rychlý commit v pátek v 16:57.

Ukázka startovní policy pro jednoduchý statický web může vypadat takto:

```text
Content-Security-Policy: default-src 'self'; img-src 'self' data:; font-src 'self'; style-src 'self'; script-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'
```

Tohle není univerzální recept. Pokud používáš externí fonty, analytiku, formuláře nebo platby, budeš potřebovat konkrétní povolené zdroje. Ale právě konkrétnost je pointa: žádné `*`, žádné „povolíme všechno a někdy to uklidíme“. Někdy je v technických projektech kouzelné slovo, které znamená „nikdy, ale s lepším PR“.

### 3) HTTPS vynucuj hlavičkou, ne přáním

Pokud web běží přes HTTPS, nastav Strict-Transport-Security. MDN popisuje HSTS jako hlavičku, která prohlížeči říká, že má web v budoucnu načítat pouze přes HTTPS ([MDN: Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)). Pro privacy-first provoz je to základ: nechceš, aby návštěvník omylem skončil na nešifrované variantě jen proto, že někde existoval starý odkaz.

Rozumný postup:

- ověř, že všechny subdomény opravdu podporují HTTPS,
- začni s kratším `max-age`, třeba několik dní,
- po ověření prodluž na měsíce,
- `includeSubDomains` zapínej až ve chvíli, kdy víš, že nerozbiješ starou subdoménu,
- `preload` používej až po pečlivé kontrole pravidel a návratového plánu.

Příklad:

```text
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

HSTS je dobrý sluha a špatný experiment. Když ho nastavíš špatně na doméně s divokými subdoménami, můžeš si vyrobit problém, který se neodklikne jedním refresh tlačítkem.

### 4) Referrer drž krátký

Referrer umí omylem posílat víc kontextu, než chceš. Pokud má URL parametry s kampaní, filtrem, interním tokenem nebo osobním údajem, může se část informace dostat k dalšímu webu při kliknutí na odchozí odkaz. Ano, správná odpověď je hlavně nedávat citlivé informace do URL. Referrer-Policy je druhá bezpečnostní síť.

MDN uvádí, že Referrer-Policy řídí, kolik informací se posílá v hlavičce `Referer` při navigaci a požadavcích ([MDN: Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy)). Pro běžný marketingový web často dává smysl:

```text
Referrer-Policy: strict-origin-when-cross-origin
```

To znamená: uvnitř stejné domény se může poslat plnější referrer, ale cizím doménám se neposílá celá cesta s parametry, jen původ podle pravidel prohlížeče. Pokud máš citlivější aplikaci, zvaž ještě přísnější režim, například `no-referrer`. Jen si pohlídej, co to udělá s legitimním měřením partnerů a vlastním debuggingem.

### 5) MIME sniffing vypni nudně a hned

Hlavička `X-Content-Type-Options: nosniff` říká prohlížeči, aby se držel deklarovaného typu obsahu a nehádal, co soubor asi je. MDN ji popisuje jako způsob, jak blokovat MIME sniffing u skriptů a stylů, pokud typ neodpovídá očekávání ([MDN: X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options)).

Pro malý tým je to jednoduchá výhra:

```text
X-Content-Type-Options: nosniff
```

Není to sexy. Nikdo kvůli tomu neudělá keynote. Ale přesně takové věci tvoří spolehlivý provoz: malé konzervativní brzdy, které sníží šanci, že se z chybně naservírovaného souboru stane bezpečnostní překvapení.

### 6) Iframe pravidla patří do produktu i marketingu

Pokud nemáš důvod, aby někdo vkládal tvůj web do iframe, zakaž to přes CSP direktivu `frame-ancestors`. U starších konfigurací se ještě potkáš s `X-Frame-Options`, ale pro nové návrhy řeš primárně CSP.

Příklad pro zákaz vložení:

```text
Content-Security-Policy: frame-ancestors 'none'
```

Příklad pro povolení jen vlastní domény:

```text
Content-Security-Policy: frame-ancestors 'self'
```

U SaaS aplikace si dej pozor na administraci, billing portál, interní dashboardy a preview stránky. Clickjacking není jen teoretická chyba ze starých prezentací. Pokud uživatel může kliknutím potvrdit akci, změnit nastavení nebo zobrazit citlivá data, iframe politika je součást bezpečnostního návrhu.

### 7) Hlavičky testuj jako release bránu

Bezpečnostní hlavičky nejsou jednorázový „hardening sprint“. Dej je do pravidelné kontroly:

- při každém větším redesignu,
- při přidání nového dodavatele,
- při změně hostingu nebo CDN,
- při zavedení nové analytiky,
- při přidání embedu, mapy, videa nebo platebního widgetu,
- při bezpečnostním incidentu nebo podezření na XSS.

Do CI můžeš přidat jednoduchý smoke test, který ověří, že produkční nebo preview URL vrací očekávané hlavičky. Není nutné hned stavět kosmickou loď. Stačí test, který selže, když někdo omylem odstraní CSP, HSTS nebo Referrer-Policy.

**Codyho komentář:** Bezpečnostní hlavičky jsou jako pás v autě. Neznamenají, že můžeš jezdit zavázanýma očima, ale když přijde náraz, budeš rád, že tam jsou. A když ti zavedení CSP rozbije půl webu, není to důkaz, že CSP je špatně. Je to důkaz, že půl webu žilo v divočině.

### Šablona security headers review

```markdown
## Security headers review: [web / aplikace]

### Kontext
- URL:
- Prostředí:
- Vlastník:
- Poslední změna stacku:

### Povolené zdroje
- Skripty:
- Styly:
- Obrázky:
- Fonty:
- API / connect:
- Frame / embed:

### Nastavené hlavičky
- Content-Security-Policy:
- Strict-Transport-Security:
- Referrer-Policy:
- X-Content-Type-Options:
- Permissions-Policy:

### Výjimky
- Výjimka:
- Důvod:
- Riziko:
- Datum review:
- Vlastník odstranění:

### Test
- Preview prošlo:
- Produkce prošla:
- Známá porušení CSP:
- Rozhodnutí:
```

### Checklist pro bezpečnostní hlavičky

- [ ] Máme sepsaný seznam externích domén, které web nebo aplikace načítá.
- [ ] Každý externí zdroj má účel, vlastníka a privacy zdůvodnění.
- [ ] CSP začíná restriktivně a nepoužívá zbytečné wildcard výjimky.
- [ ] Inline skripty a styly jsou odstraněné nebo zdůvodněné jako dočasná výjimka.
- [ ] HSTS je zapnuté až po ověření HTTPS na doméně a relevantních subdoménách.
- [ ] Referrer-Policy nepropouští zbytečně celé URL s parametry na cizí domény.
- [ ] `X-Content-Type-Options: nosniff` je nastavené pro běžné webové odpovědi.
- [ ] Iframe pravidla chrání administraci, billing, dashboardy a citlivé akce.
- [ ] Nový widget nebo dodavatel vyžaduje aktualizaci review karty, ne jen úpravu CSP.
- [ ] Release kontrola umí odhalit chybějící nebo oslabené bezpečnostní hlavičky.

## Příloha AQ: Feature flagy a rollout bez datového cirkusu

Feature flag je krásná věc: umožní zapnout novou funkci malé skupině lidí, rychle ji vypnout při problému a oddělit nasazení kódu od uvedení funkce. Jenže když se flagy dělají bez disciplíny, vznikne z nich druhý produkt uvnitř produktu. Nikdo neví, co je zapnuté, proč je to zapnuté, kdo to vlastní a jestli stará větev kódu ještě někdy zmizí. To není agilita. To je skříň plná kabátů, které už nikdo nenosí, ale všechny mají produkční dopad.

Privacy-first rollout má jednoduchý cíl: bezpečně omezit riziko změny, aniž by tým začal profilovat uživatele víc, než je nutné. Ne každá funkce potřebuje experiment po jednotlivých lidech. Často stačí interní zapnutí, testovací organizace, ručně vybraný pilotní zákazník, procentuální rollout bez ukládání detailních profilů nebo obyčejný kill switch.

### 1) Rozlišuj typy flagů

Ne každý flag má stejný účel. Když je házíš do jedné hromady, skončíš s názvy typu `new_new_dashboard_final_2`, což je digitální archeologie a lehké volání o pomoc.

Praktické typy:

- **Release flag:** odděluje deploy od veřejného spuštění funkce.
- **Experiment flag:** porovnává varianty, ale musí mít hypotézu a konec.
- **Permission flag:** zpřístupňuje funkci podle tarifu, role nebo smlouvy.
- **Ops flag:** vypíná náročnou nebo rizikovou část systému při incidentu.
- **Migration flag:** pomáhá přechodu mezi starou a novou implementací.

Každý typ má jiné retenční pravidlo. Release a migration flagy mají zmizet rychle. Permission flagy mohou zůstat dlouhodobě, ale patří do produktového modelu, ne do zapomenutého konfiguračního kouta. Ops flagy musí být jednoduché, zdokumentované a dostupné i ve stresu.

### 2) Flag musí mít vlastníka a datum smrti

Každý flag potřebuje minimálně:

- název,
- účel,
- vlastníka,
- výchozí stav,
- koho ovlivňuje,
- jak se pozná úspěch,
- jak se pozná problém,
- datum kontroly nebo odstranění.

Bez data kontroly se z flagu stává permanentní výjimka. A permanentní výjimky jsou v malém SaaS skoro vždycky horší než jedna dobře naplánovaná migrace. Když flag přežije déle než funkce, kterou měl bezpečně zavést, něco je špatně.

Dobré názvy jsou nudné a čitelné:

- `billing_invoice_pdf_v2`
- `onboarding_checklist_v1`
- `support_export_rate_limit`
- `dashboard_new_chart_renderer`

Špatné názvy jsou tajenka:

- `test_flag`
- `new_ui`
- `ondra_fix`
- `temporary_please_do_not_delete`

Poslední název je mimochodem technický ekvivalent cedule „tady straší“.

### 3) Rollout dělej po riziku, ne podle ega

Novou funkci nemusíš pustit všem jen proto, že už je hotová. Hotová znamená „připravená ke kontrolovanému nasazení“, ne „hoďme ji přes plot a uvidíme v supportu“.

Rozumné pořadí:

1. **Lokálně:** vývojář ověří hlavní scénář a chybové stavy.
2. **Interně:** tým funkci používá na testovacích datech.
3. **Pilot:** jeden nebo několik zákazníků s jasným očekáváním.
4. **Postupné rozšíření:** procento účtů, organizací nebo tarifů.
5. **Plné zapnutí:** až po splnění kritérií.
6. **Úklid:** odstranění staré větve a dočasných měření.

Privacy-first pravidlo: pokud nepotřebuješ rozhodovat na úrovni člověka, nerozhoduj na úrovni člověka. U B2B SaaS často stačí zapnutí podle organizace, workspace, tarifu nebo ručně zvoleného pilotního zákazníka. Je to čitelnější, lépe vysvětlitelné a méně invazivní než tiché profilování jednotlivých uživatelů.

### 4) Měření rolloutů drž agregované a účelové

Rollout bez měření je hazard. Rollout s přehnaným měřením je datový hlad. Cílem je vědět, jestli změna funguje a neškodí, ne vytvořit detailní deník každého kliknutí.

Pro většinu funkcí stačí:

- aktivace funkce na úrovni účtu nebo organizace,
- počet dokončených klíčových akcí,
- chybovost a latence relevantních endpointů,
- počet support dotazů k dané funkci,
- odchod z klíčového kroku v agregované podobě,
- ruční zpětná vazba od pilotních zákazníků.

Neukládej do eventů volný text, e-maily, názvy zákaznických projektů, tokeny ani celé URL s citlivými parametry. Pokud funkce pracuje s citlivými daty, měř raději stav procesu než obsah. Například „export dokončen“, „export selhal“ a „export zrušen“ stačí. Není potřeba posílat do analytiky názvy exportovaných souborů, názvy zákazníků nebo obsah filtrů.

### 5) Kill switch musí být nudný a ověřený

Kill switch je flag, který vypne rizikovou část systému rychleji než deploy rollback. Aby fungoval, musí být jednoduchý a předem vyzkoušený.

Dobré použití:

- vypnout nový editor, když ukládání začne selhávat,
- vypnout náročné generování reportů při přetížení,
- vrátit starou platební obrazovku při problému s checkoutem,
- zastavit automatické e-maily, když integrace posílá špatný obsah.

Kill switch nesmí být schovaný jen v hlavě jednoho člověka. V runbooku napiš:

- kde se přepíná,
- kdo ho smí přepnout,
- jak rychle se projeví,
- jaké části produktu ovlivní,
- jak se ověří návrat do bezpečného stavu,
- koho informovat po přepnutí.

Jednou za čas kill switch vyzkoušej v bezpečném prostředí. Flag, který nikdo nikdy netestoval, je spíš amulet než provozní nástroj.

### 6) Staré flagy maž bez nostalgie

Největší problém feature flagů není jejich zavedení. Je to úklid. Starý flag znamená starý kód, staré větvení, staré testovací scénáře a staré otázky při každém refaktoru.

Měsíční úklid:

- vypiš flagy bez nedávné změny,
- zkontroluj flagy po datu kontroly,
- odstraň release flagy po plném zapnutí,
- smaž staré větve kódu,
- aktualizuj dokumentaci a testy,
- ověř, že monitoring už nečeká na staré eventy.

**Codyho komentář:** Feature flag je jako lešení. Skvělé, když stavíš. Nebezpečně trapné, když ho necháš stát dva roky u hotového domu a začneš tvrdit, že je to architektonický prvek.

### Šablona feature flag karty

```markdown
## Feature flag: [název]

### Účel
- Typ flagu: release / experiment / permission / ops / migration
- Jakou změnu řídí:
- Proč není zapnutá všem najednou:
- Vlastník:

### Rollout
- Výchozí stav:
- Interní test:
- Pilotní zákazníci / organizace:
- Kritéria pro rozšíření:
- Kritéria pro zastavení:

### Měření
- Primární signál:
- Guardrail metriky:
- Jaká data se nesmí ukládat:
- Retence rollout dat:

### Provoz
- Kill switch:
- Runbook:
- Komu hlásit problém:
- Datum review:
- Plán odstranění flagu:
```

### Checklist pro feature flagy a rollout

- [ ] Každý flag má typ, vlastníka, účel a datum review.
- [ ] Release a migration flagy mají plán odstranění.
- [ ] Rollout začíná interně nebo pilotem, ne automaticky všem.
- [ ] Segmentace používá nejméně invazivní úroveň, typicky organizaci nebo tarif místo osoby.
- [ ] Měření rolloutů je agregované a neobsahuje volný text, e-maily, tokeny ani citlivé URL.
- [ ] Kritéria úspěchu i zastavení jsou napsaná před zapnutím.
- [ ] Kill switch je zdokumentovaný, dostupný a otestovaný.
- [ ] Support ví, kdo funkci vidí a jak poznat související problém.
- [ ] Po plném zapnutí se odstraní stará větev kódu i dočasné eventy.
- [ ] Měsíční úklid flagů je součástí provozního review.

## Příloha AR: Přihlášení a správa účtů bez bezpečnostního divadla

Přihlášení je jedna z těch částí SaaS produktu, která vypadá jednoduše, dokud ji nezačneš provozovat. Pak přijdou zapomenutá hesla, sdílené účty, pozvánky do organizací, změny rolí, odchody zaměstnanců, fakturační kontakty, auditní stopa a otázka, kdo vlastně smí smazat produkční data. Romantika jako z pohlednice, jen místo západu slunce koukáš na support ticket „nejde mi login“.

Privacy-first přístup k účtům není o tom, že uživatelům přidáš co nejvíc překážek. Je o tom, že přístupová pravidla jsou srozumitelná, minimální, ověřitelná a dají se vysvětlit zákazníkovi. OWASP v autentizačních a session doporučeních opakovaně zdůrazňuje bezpečnou správu hesel, ochranu session a omezení útoků na účty; FIDO Alliance u passkeys ukazuje cestu k přihlašování bez klasických hesel; NCSC doporučuje mimo jiné nepřehánět pravidla, která lidi nutí k horšímu chování, třeba k recyklaci hesel ([OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html), [OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html), [FIDO Alliance: Passkeys](https://fidoalliance.org/passkeys/), [NCSC Password administration for system owners](https://www.ncsc.gov.uk/collection/passwords)).

### 1) Účet není jen e-mail a heslo

U B2B SaaS je účet obvykle kombinace několika vrstev:

- **Uživatel:** konkrétní člověk s identitou, e-mailem a bezpečnostními nastaveními.
- **Organizace nebo workspace:** firma, tým, škola, obec nebo projekt, kde uživatel pracuje.
- **Role:** co smí dělat v daném kontextu.
- **Billing vztah:** kdo platí, kdo vidí faktury a kdo může změnit tarif.
- **Auditní stopa:** kdo udělal citlivou změnu a kdy.

Když tyhle vrstvy smícháš, vznikají nepříjemné zkratky. Typický problém: první registrovaný člověk je navždy superadmin, protože „tak to bylo nejrychlejší“. Pak odejde z firmy, e-mail už neexistuje a zákazník potřebuje změnit fakturační údaje. Pokud produkt nemá proces převzetí organizace, support začne improvizovat. A improvizace u přístupů je pěkný způsob, jak si vyrobit incident s lidskou tváří.

Praktické pravidlo: už při návrhu účtu napiš, co se stane, když:

- zakladatel organizace odejde,
- zákazník změní doménu,
- uživatel ztratí přístup k e-mailu,
- firma chce převést vlastnictví,
- admin omylem odebere sám sobě práva,
- někdo žádá export nebo smazání dat.

### 2) Role dělej podle práce, ne podle titulů

Role mají popisovat odpovědnost v produktu, ne firemní hierarchii zákazníka. „CEO“ není role v aplikaci. „Vlastník organizace“, „billing správce“, „editor obsahu“ nebo „čtenář reportů“ už ano.

Začni malým modelem:

- **Owner:** spravuje organizaci, role, kritická nastavení a ukončení účtu.
- **Admin:** spravuje běžné nastavení a uživatele, ale ne vždy billing nebo mazání organizace.
- **Member:** pracuje s hlavní produktovou funkcí.
- **Viewer:** vidí výstupy, ale nemění data.
- **Billing:** vidí faktury, platby a tarif, ale nemusí vidět produktový obsah.

Ne každá aplikace potřebuje všechny role. Menší produkt může začít se třemi. Důležité je, aby citlivé akce nebyly schované pod neurčitým „admin může všechno“. U každé role napiš povolené akce a zakázané akce. Pokud se u role objeví dvacet výjimek, role je pravděpodobně moc široká nebo produkt nemá jasný model vlastnictví.

**Codyho komentář:** Role jsou jako klíče. Když dáš každému univerzální klíč „protože je to jednodušší“, opravdu je to jednodušší — hlavně pro útočníka, omyl a pondělní chaos.

### 3) Pozvánky jsou bezpečnostní tok, ne jen e-mail

Pozvánka do SaaS produktu je změna přístupu. Měla by mít pravidla:

- kdo smí pozvat nového člověka,
- na jakou roli ho smí pozvat,
- jak dlouho pozvánka platí,
- jestli je vázaná na konkrétní e-mail,
- co se stane po vypršení,
- jak se pozvánka zruší,
- jak se změna objeví v auditní stopě.

Privacy-first detail: do pozvánkového e-mailu nepatří interní data organizace, seznam uživatelů, tokeny v čitelném textu ani zbytečné sledovací pixely. Stačí jasně říct, kdo zve, do jaké organizace, jaká role čeká a kam bezpečně pokračovat. Pokud e-mail unikne přeposláním, neměl by sám o sobě prozradit víc, než je nutné.

U B2B produktů zvaž jednoduchou doménovou ochranu: pokud organizace používá firemní doménu, můžeš varovat před pozváním na soukromý e-mail. Nezakazuj to slepě — konzultanti, externisté a malé týmy existují — ale udělej riziko viditelné.

### 4) Hesla, passkeys a MFA: bezpečnost bez trestání lidí

Pokud používáš hesla, dělej je moderně a bez starých rituálů:

- povol dlouhé fráze,
- nevyžaduj pravidelné nucené změny bez důvodu,
- kontroluj slabá a kompromitovaná hesla,
- ukládej hesla jen bezpečně hashovaná,
- rate-limituj pokusy o přihlášení,
- u resetu hesla neprozrazuj, jestli e-mail existuje.

Passkeys jsou pro mnoho produktů lepší směr než nekonečné ladění heslových pravidel. Ne každý zákazník je bude umět používat hned, ale můžeš je nabídnout jako pohodlnější a bezpečnější možnost. U citlivých rolí přidej MFA, ale nedělej z něj trest. Vysvětli, proč ho vyžaduješ, nabídni obnovovací kódy a popiš proces ztraceného druhého faktoru.

Pro evropský privacy-first provoz je důležité i to, jaké autentizační služby používáš. U externí identity řeš region, smlouvy, logy, metadata, export a fallback. Přihlášení není jen technická brána. Je to místo, kde se často potkávají osobní údaje, bezpečnostní logy a provozní závislost na dodavateli.

### 5) Session spravuj jako živý přístup

Session není dekorace v cookies. Je to dočasný klíč. Proto potřebuje pravidla:

- bezpečné cookies s `HttpOnly`, `Secure` a rozumným `SameSite`,
- oddělení session pro administraci a běžnou práci, pokud produkt dělá citlivé akce,
- možnost odhlásit ostatní zařízení,
- zneplatnění session po změně hesla nebo MFA,
- omezení životnosti podle rizika,
- jasné chování při neaktivitě.

Uživatel má rozumět tomu, kde je přihlášený. Nemusíš mu ukazovat detailní fingerprint zařízení, který sám sbíráš jako malou špionážní laboratoř. Stačí město nebo země přibližně, typ zařízení, čas poslední aktivity a tlačítko „odhlásit“. Přesnost má sloužit bezpečnosti, ne zvědavosti.

### 6) Audit log má chránit, ne šmírovat

Audit log u účtů je užitečný, protože pomáhá vysvětlit citlivé změny. Nemá ale být tajný produktový deník každého pohybu myší.

Loguj hlavně:

- přihlášení a neúspěšné pokusy v bezpečnostně rozumné podobě,
- změnu role,
- pozvání a odebrání uživatele,
- změnu billing údajů,
- změnu MFA nebo passkey nastavení,
- export, smazání nebo převod vlastnictví,
- změny integračních klíčů a webhooků.

Neloguji zbytečně:

- obsah polí, která uživatel upravoval,
- celé URL s tokeny nebo osobními parametry,
- hesla, reset tokeny, MFA kódy,
- interní poznámky supportu bez účelu,
- citlivý zákaznický obsah jen proto, že „se to může hodit“.

Audit log má mít retenční pravidlo. U některých bezpečnostních událostí bude retence delší než u běžných aplikačních logů, ale pořád musí být vysvětlitelná. A pokud audit log ukazuje zákazníkovi jeho vlastní administrátorské akce, piš je lidsky: „Petra změnila roli Jana z Editor na Admin“ je lepší než `ACL_ROLE_MUTATION_SUCCESS`.

### Šablona access review karty

```markdown
## Access review: [organizace / produkt / modul]

### Kontext
- Kdo produkt používá:
- Jaká data jsou dostupná:
- Nejcitlivější akce:
- Vlastník přístupového modelu:

### Role
- Role a jejich účel:
- Citlivé akce podle role:
- Kdo může měnit role:
- Kdo může převést vlastnictví:

### Přihlášení
- Podporované metody:
- MFA / passkeys:
- Reset hesla:
- Obnova ztraceného faktoru:

### Session a audit
- Doba platnosti session:
- Odhlášení ostatních zařízení:
- Auditované události:
- Retence audit logu:

### Rizika
- Sdílené účty:
- Odchod admina:
- Pozvánky mimo doménu:
- Nouzový support zásah:
```

### Checklist pro přihlášení a správu účtů

- [ ] Produkt rozlišuje uživatele, organizaci, roli, billing vztah a vlastnictví.
- [ ] Existuje proces pro odchod vlastníka organizace a převod účtu.
- [ ] Role jsou popsané podle produktových akcí, ne podle pracovních titulů.
- [ ] Citlivé akce nejsou automaticky dostupné každému adminovi.
- [ ] Pozvánky mají expiraci, konkrétní roli, zrušení a auditní stopu.
- [ ] Heslová pravidla podporují dlouhé fráze a netrestají uživatele starými rituály.
- [ ] Passkeys nebo MFA jsou připravené hlavně pro citlivé role.
- [ ] Reset hesla neprozrazuje existenci účtu a zneplatní rizikové session.
- [ ] Session cookies používají bezpečné atributy a lze odhlásit ostatní zařízení.
- [ ] Audit log zachycuje citlivé změny, ale neukládá obsah, tokeny ani zbytečné osobní údaje.
- [ ] Retence bezpečnostních logů je popsaná v mapě dat.
- [ ] Externí identity a auth služby mají ověřený region, smlouvy, export a fallback.

## Příloha AS: Dodavatelé, DPA a subprocesory bez právnické mlhy

Malý SaaS tým často řeší dodavatele pozdě: nejdřív se připojí analytika, e-mailing, CRM, chat widget, platební brána a monitoring, a až pak někdo otevře otázku „kdo vlastně zpracovává data našich zákazníků?“. To je drahý způsob, jak zjistit, že technický stack není architektura, ale archeologické naleziště.

Privacy-first přístup dělá z výběru dodavatelů běžnou produktovou disciplínu. Ne proto, aby každá integrace trvala tři měsíce, ale aby tým věděl, kde data končí, kdo k nim má přístup, jak se dají exportovat a co se stane při incidentu nebo ukončení služby.

EDPB pro malé firmy jasně rozlišuje roli správce, který určuje účely a prostředky zpracování, a zpracovatele, který jedná podle pokynů správce; vztah správce–zpracovatel má být upraven smlouvou, která popisuje zpracování a povinnosti stran ([EDPB: Data controller or data processor](https://www.edpb.europa.eu/sme/learn-the-basics/data-controller-or-data-processor_en)). Stejný praktický průvodce připomíná, že organizace má umět doložit soulad, vést záznamy o zpracování a uvažovat privacy by design už při návrhu ([EDPB: Be compliant](https://www.edpb.europa.eu/sme/be-compliant/be-compliant_en)).

> **Codyho komentář:** DPA není magická imunita. Je to provozní smlouva. Pokud tým neví, jaká data dodavateli posílá, právník může dodat krásný dokument, ale realita pořád smrdí jako tracker po dešti.

### 1) Nejprve urči roli, až potom řeš smlouvu

U každého dodavatele si napiš, v jaké roli vystupuje. Bez toho bude DPA jen PDF v šuplíku.

Typické situace:

- **Hosting aplikace:** dodavatel obvykle zpracovává data podle tvých pokynů, protože provozuje infrastrukturu pro tvou službu.
- **E-mailing transakčních zpráv:** dodavatel doručuje zprávy podle tvých pokynů, ale může mít vlastní bezpečnostní a doručovací logy.
- **Platební brána:** často má vlastní právní povinnosti a část zpracování může dělat jako samostatný správce.
- **Externí support nástroj:** zpracovává obsah ticketů a metadata zákaznické komunikace; riziko roste s tím, co do ticketů uživatelé píšou.
- **Marketingová analytika:** pozor na to, zda dodavatel jen zpracovává agregované měření, nebo vytváří profily napříč weby.

Praktické pravidlo: pokud dodavatel rozhoduje, proč a jak data použije pro vlastní účely, není to jen „technická krabička“. Zapiš to do vendor karty a neschovávej se za marketingovou větu „GDPR compliant“.

### 2) Vendor karta patří před nákup, ne po něm

Než tým zaplatí nový nástroj, vyplň krátkou kartu. Nemusí to být právní román. Stačí odpovědět na otázky, které rozhodují o riziku.

Minimum vendor karty:

- jaký problém nástroj řeší,
- jaká data do něj potečou,
- zda jde o osobní údaje, citlivý obsah, metadata nebo anonymní agregaci,
- v jakém regionu se data ukládají a zpracovávají,
- kdo má přístup na straně dodavatele,
- zda existuje DPA nebo jiné smluvní ujednání,
- jaké subprocesory dodavatel používá,
- jak funguje export a smazání dat,
- co se stane při ukončení služby,
- kdo v týmu je vlastník dodavatele.

Tahle karta pomáhá hlavně malým týmům. Když za půl roku někdo otevře otázku „proč platíme tři nástroje na formuláře?“, odpověď nebude v paměti jednoho zakladatele, který je zrovna na dovolené a mentálně v režimu airplane.

### 3) DPA kontroluj podle provozních scénářů

U DPA se nenech ukolébat tím, že dokument existuje. Ptej se, zda odpovídá tomu, jak službu opravdu používáš.

Kontrolní otázky:

- Jsou popsané kategorie dat, které do služby skutečně posíláme?
- Jsou popsané účely zpracování dost konkrétně?
- Má dodavatel povinnost zpracovávat data jen podle našich pokynů?
- Je jasné, jak dodavatel hlásí bezpečnostní incident?
- Umíme získat seznam subprocesorů a změny v něm?
- Máme možnost vznést námitku proti novému subprocesoru?
- Je popsané vrácení nebo smazání dat po ukončení služby?
- Jsou jasná pravidla pro mezinárodní přenosy dat?
- Dává smlouva smysl pro naši velikost a riziko, nebo jen přeposílá odpovědnost do mlhy?

Pokud dodavatel tvrdí, že „smlouvy řeší enterprise tým až od vyššího tarifu“, je to signál. Ne vždy konečný stop sign, ale minimálně důvod zvednout obočí tak vysoko, že začne fungovat jako monitoring.

### 4) Subprocesory nejsou poznámka pod čarou

Subprocesor je další článek řetězu. U privacy-first provozu musíš vědět, jestli dodavatel data posílá dál — například na hosting, podporu, e-mailovou infrastrukturu, monitoring nebo AI službu.

U každého kritického dodavatele sleduj:

- veřejný seznam subprocesorů,
- možnost odběru změn e-mailem nebo RSS, pokud existuje,
- regiony subprocesorů,
- typ služby, kterou subprocesor poskytuje,
- dopad na data zákazníků,
- termín, do kdy můžeš změnu připomínkovat nebo odmítnout.

Praktický postup: jednou měsíčně projdi změny u kritických dodavatelů. Nemusíš dělat audit všech faviconů internetu. Stačí top služby, které drží zákaznická data, autentizaci, billing, support, produkční logy nebo zálohy.

### 5) Evropský provoz preferuj jako výchozí stav

Privacy-first hodnota Dreamindu není „všechno musí být lokální za každou cenu“. Je to rozumná preference: když existuje kvalitní evropská varianta s jasným zpracováním dat, dej jí přednost.

Při výběru porovnávej:

- zda dodavatel nabízí EU region,
- zda má podporu evropských smluvních požadavků bez enterprise tanečků,
- zda umí export dat bez prosby na support,
- zda se obejde bez invazivního klientského trackingu,
- zda má transparentní bezpečnostní dokumentaci,
- zda lze službu nahradit bez přepisu půlky produktu.

Evropský provoz neznamená automaticky bezpečí. Znamená lepší startovní pozici pro kontrolu nad daty, smlouvy, incidenty a komunikaci se zákazníky. Pořád platí: ověřuj konkrétní službu, ne vlaječku v patičce.

### 6) Vendor review dělej podle rizika

Ne každý nástroj potřebuje stejnou kontrolu. Ikonková knihovna a billing systém nejsou stejný svět, i když oba mají pěkné landing page.

Rozděl dodavatele na tři úrovně:

- **Nízké riziko:** žádná osobní data, žádný přístup do produkce, snadná náhrada.
- **Střední riziko:** omezená osobní data, provozní metadata, integrace s produktem, ale bez citlivého obsahu.
- **Vysoké riziko:** zákaznická data, autentizace, billing, support obsah, produkční logy, zálohy, administrátorský přístup nebo AI zpracování uživatelského obsahu.

Pro nízké riziko stačí krátký záznam. Pro střední riziko přidej DPA a export. Pro vysoké riziko udělej plné review: datový tok, bezpečnost, subprocesory, incidenty, retenci, exit plán a vlastníka v týmu.

### 7) Exit plán je součást smlouvy

Dodavatel není jen otázka zavedení. Je to i otázka odchodu. Pokud neumíš data získat ven, nejsi zákazník, jsi nájemník bez kliky zevnitř.

Před nasazením si ověř:

- jak stáhnout všechna data,
- v jakém formátu export přijde,
- zda export obsahuje i metadata, přílohy a historii změn,
- jak dlouho dodavatel drží data po ukončení,
- jak potvrzuje smazání,
- co se stane s účty bývalých zaměstnanců,
- zda existuje API pro průběžnou zálohu nebo migraci.

U kritických služeb si exit plán otestuj na malém vzorku. Nečekej na den, kdy se služba zdraží, spadne nebo ji koupí firma s apetitem na data větším než firemní lednice po sprint review.

### Šablona vendor review karty

```markdown
## Vendor review: [název dodavatele]

### Účel
- Problém, který řeší:
- Alternativy:
- Vlastník v týmu:

### Role a data
- Role dodavatele: správce / zpracovatel / společný správce / nejasné
- Kategorie dat:
- Osobní údaje:
- Citlivý obsah:
- Datové toky:

### Smlouvy a subprocesory
- DPA / smluvní dokument:
- Seznam subprocesorů:
- Změny subprocesorů:
- Regiony zpracování:
- Přenosy mimo EHP:

### Provoz
- Přístupy:
- Incident notification:
- Export:
- Smazání:
- Retence:
- Exit plán:

### Rozhodnutí
- Riziko: nízké / střední / vysoké
- Schváleno k použití: ano / ne / podmíněně
- Podmínky:
- Datum dalšího review:
```

### Checklist pro dodavatele a DPA

- [ ] Každý aktivní dodavatel má vlastníka v týmu.
- [ ] U každého dodavatele je určená role: správce, zpracovatel, společný správce nebo nejasné.
- [ ] Nejasné role jsou vyřešené před produkčním nasazením.
- [ ] Vendor karta popisuje účel, datové kategorie, region, přístupy, export a retenci.
- [ ] Kritičtí dodavatelé mají uložené DPA nebo odpovídající smluvní dokumenty.
- [ ] Subprocesory jsou dohledatelné a změny se pravidelně kontrolují.
- [ ] U vysokého rizika existuje exit plán a alespoň základní test exportu.
- [ ] Dodavatelé s klientskými skripty jsou posouzení i z pohledu webového výkonu a trackingu.
- [ ] EU region nebo evropská alternativa je preferovaná, pokud dává technický a provozní smysl.
- [ ] Přístupy zaměstnanců k dodavatelským účtům jsou součástí access review.
- [ ] Nepoužívaní dodavatelé se ruší, data se exportují nebo mažou podle retenční politiky.
- [ ] Nový nástroj nesmí obejít privacy review jen proto, že „je to jen na zkoušku“.


## Příloha AT: Webhooky, API klíče a integrace bez neřízeného úniku dat

Integrace jsou krásné, dokud se nechovají jako otevřené okno v přízemí. Malý SaaS tým často začne nevinně: pošli webhook do CRM, přidej platební event, napoj helpdesk, přidej automatizaci do chatu, vyrob export pro účetní. Za měsíc data tečou pěti směry a nikdo přesně neví, kdo co posílá, proč a jak dlouho to někde leží.

Privacy-first integrace nejsou pomalejší. Jsou jen popsané. Každý webhook, API token a automatizace má mít vlastníka, účel, minimální payload, pravidla retence a způsob bezpečného vypnutí. OWASP u API bezpečnosti opakovaně zdůrazňuje řízení autorizace, omezení přístupu a ochranu citlivých dat; u webhooků je praktické řešit podpisy, opakování požadavků, idempotenci a omezení obsahu payloadu ([OWASP API Security Top 10](https://api-security.owasp.org/editions/2023/en/0x11-t10/), [OWASP Webhook Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Webhook_Security_Cheat_Sheet.html)).

> **Codyho komentář:** Webhook je jako firemní kurýr. Když mu dáš celé CRM místo jedné zásilky, problém není v kurýrovi. Problém je v tom, že někdo v týmu zaměnil pohodlí za architekturu.

### 1) Každá integrace musí mít obchodní důvod

Nejdřív napiš, proč integrace existuje. Ne technicky, ale lidsky.

Slabý důvod:

> „Posíláme eventy do nástroje X, protože to umí automatizace.“

Lepší důvod:

> „Po úspěšné platbě vytvoříme v účetním systému podklad pro fakturaci, aby zákazník dostal doklad bez ruční práce.“

Rozdíl je zásadní. První věta obhajuje nástroj. Druhá věta popisuje proces, hodnotu a hranici. Z takové věty jde odvodit, jaká data jsou potřeba: identifikátor zákazníka, částka, měna, tarif, daňové údaje, stav platby. Ne kompletní profil, historie kliknutí a poznámky ze supportu.

U každé integrace si polož tři otázky:

- Co se stane, když integrace neexistuje?
- Jaký minimální údaj stačí k dokončení procesu?
- Kdo pozná, že integrace posílá moc dat?

Pokud na třetí otázku není odpověď, integrace nemá vlastníka. A integrace bez vlastníka je budoucí incident s hezkým logem.

### 2) Payload navrhuj jako veřejnou pohlednici

Webhook payload by měl být co nejmenší. Představ si ho jako pohlednici, ne trezor. Nemusí obsahovat všechno, co cílový systém možná jednou použije. Má obsahovat jen to, co konkrétní příjemce potřebuje pro konkrétní úkol.

Praktické pravidlo pro payload:

- posílej stabilní interní ID místo e-mailu, pokud cílový systém umí data dohledat bezpečně jinak,
- neposílej poznámky ze supportu, pokud cílem je jen změna stavu objednávky,
- neposílej celé objekty, když stačí změněné pole,
- neposílej URL s osobními údaji v query parametrech,
- neposílej tokeny, hesla, session ID ani jednorázové odkazy do běžných logů,
- u událostí používej verzi schématu, aby změna payloadu nerozbila příjemce.

Příklad rozumného eventu:

```json
{
  "event": "subscription.activated",
  "version": 1,
  "event_id": "evt_123",
  "occurred_at": "2026-10-13T10:30:00Z",
  "customer_id": "cus_456",
  "plan": "team",
  "billing_country": "CZ"
}
```

Příklad payloadu, který si říká o malér:

```json
{
  "event": "subscription.activated",
  "customer": {
    "email": "jana@example.com",
    "phone": "+420...",
    "support_notes": "...",
    "last_login_ip": "...",
    "all_sessions": []
  },
  "debug": "full request dump"
}
```

Technicky je druhý payload pohodlný. Provozně je to datový bufet. Privacy-first tým si pohodlí kupuje jen tam, kde ho umí vysvětlit.

### 3) API klíče nejsou konfigurace, ale přístupová práva

API klíč je účet bez obličeje. Chovej se k němu jako k přístupu do systému, ne jako k textu v `.env` souboru.

Minimum pro API klíče:

- každý klíč má název podle účelu, ne `test-key-final2`,
- každý klíč má vlastníka,
- klíč má nejnižší potřebná práva,
- produkční a testovací klíče jsou oddělené,
- klíče nejsou v repozitáři, dokumentaci, screenshotu ani ticketu,
- rotace má postup, ne jen paniku,
- staré klíče se ruší po migraci,
- přístup ke klíčům je součástí access review.

Když služba neumí omezit klíč podle scope, prostředí nebo IP rozsahu, napiš si to do vendor karty. Není to automatický zákaz, ale je to riziko. Hlavně u integrací, které umí číst zákaznická data nebo spouštět akce jménem uživatele.

### 4) Příchozí webhook ověřuj dřív, než mu uvěříš

Webhook zvenku není pravda. Je to tvrzení. A tvrzení se ověřuje.

Příchozí webhook by měl mít:

- podpis nebo jiný mechanismus ověření zdroje,
- ochranu proti opakovanému přehrání starého požadavku,
- idempotentní zpracování přes `event_id`,
- rozumný timeout,
- frontu nebo retry strategii pro pomalé následné kroky,
- limit velikosti payloadu,
- validaci schématu,
- bezpečné logování bez celého obsahu požadavku.

Důležité je pořadí. Nejdřív ověř podpis, čas a formát. Až potom měň stav v databázi. Pokud se změna stavu stane před ověřením, systém se nechová jako aplikace, ale jako velmi důvěřivý recepční.

### 5) Odchozí integrace loguj tak, aby šly ladit bez šmírování

Logy musí pomoct vyřešit problém, ale nemají být druhá databáze osobních údajů. OWASP u logování připomíná, že logy mají chránit před únikem citlivých dat a že je potřeba promyslet, co se loguje, kdo má přístup a jak dlouho se logy drží ([OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)).

U každého volání integrace loguj hlavně provozní metadata:

- název integrace,
- typ eventu,
- interní `event_id`,
- stav doručení,
- HTTP status,
- počet pokusů,
- čas zpracování,
- bezpečný identifikátor zákazníka, pokud je opravdu potřeba,
- odkaz na interní audit záznam, ne celý payload.

Neloggovat bez dobrého důvodu:

- celé requesty a response,
- autorizační hlavičky,
- e-maily, telefony a adresy,
- obsah formulářů,
- poznámky ze supportu,
- platební údaje,
- jednorázové odkazy a reset tokeny.

Když potřebuješ dočasně zvýšit detail logování, dej tomu expiraci. Debug režim bez expirace je jako rozsvícené světlo ve sklepě: jednou se tam určitě najde něco, co tam nemělo být.

### 6) Automatizace musí mít vypínač

Každá integrace by měla jít bezpečně zastavit. Ne „smazat půlku kódu a modlit se“, ale vypnout jasným přepínačem nebo konfigurací.

Vypínač potřebuješ pro situace:

- cílová služba posílá chyby,
- payload obsahuje špatná data,
- dodavatel řeší incident,
- integrace začala posílat duplicity,
- došlo ke změně právního nebo smluvního stavu,
- tým potřebuje krátkodobě zastavit export dat.

Dobrý vypínač nedělá ticho po pěšině. Uloží stav, přestane posílat data, zapíše důvod a ukáže týmu, co čeká na zpracování. Po opětovném zapnutí musí být jasné, jestli se fronta dopošle, zahodí nebo ručně zkontroluje.

### 7) Integrace reviduj jako živou mapu dat

Jednou za měsíc projdi aktivní integrace. Ne kvůli byrokracii. Kvůli tomu, že integrace mají tendenci zůstat běžet dlouho poté, co přestaly dávat smysl.

Měsíční review:

- které integrace jsou aktivní,
- které neposlaly žádný užitečný event za poslední období,
- které často chybují,
- které posílají moc velký payload,
- které mají starý API klíč,
- které nemají vlastníka,
- které nemají popsaný exit nebo vypínač,
- které může nahradit přímý export nebo RSS.

Privacy-first provoz není proti automatizaci. Je proti automatizaci, která tajně vytváří datové potrubí do míst, o kterých tým přestal přemýšlet.

### Šablona integrační karty

```markdown
## Integrace: [název]

### Účel
- Proces, který integrace řeší:
- Vlastník:
- Kritičnost: nízká / střední / vysoká

### Datový tok
- Směr: příchozí / odchozí / obousměrný
- Zdroj:
- Cíl:
- Eventy nebo endpointy:
- Kategorie dat:
- Osobní údaje:
- Minimální payload:

### Bezpečnost
- Autentizace:
- Podpis webhooku:
- Scope API klíče:
- Oddělení test/production:
- Rotace klíče:
- Přístup k tajemstvím:

### Provoz
- Retry pravidla:
- Idempotence:
- Monitoring:
- Logování:
- Vypínač:
- Fronta nebo backlog:

### Retence a review
- Jak dlouho držíme eventy:
- Jak dlouho držíme logy:
- Datum posledního review:
- Datum dalšího review:
- Exit postup:
```

### Checklist pro webhooky, API klíče a integrace

- [ ] Každá integrace má jasný obchodní účel a vlastníka.
- [ ] Payload obsahuje jen data potřebná pro konkrétní proces.
- [ ] Eventy mají stabilní `event_id`, čas vzniku a verzi schématu.
- [ ] Příchozí webhooky se ověřují před změnou stavu v databázi.
- [ ] Zpracování webhooků je idempotentní a odolné proti duplicitám.
- [ ] API klíče mají nejnižší potřebná práva a oddělené testovací a produkční hodnoty.
- [ ] Tajemství nejsou v repozitáři, ticketech, dokumentaci ani běžných logách.
- [ ] Logy obsahují provozní metadata, ne celé payloady nebo autorizační hlavičky.
- [ ] Debug logování má expiraci a jasný důvod.
- [ ] Každá kritická integrace má bezpečný vypínač.
- [ ] Retry strategie nemůže nekonečně spamovat cílovou službu ani zákazníka.
- [ ] Měsíční review odhaluje mrtvé integrace, staré klíče a příliš široké payloady.
- [ ] Nová automatizace neobchází vendor review, privacy review ani retenční pravidla.

## Příloha AU: Export a smazání účtu bez paniky v databázi

Export dat a smazání účtu často vypadají jako malá položka v backlogu. Ve skutečnosti jsou to zkoušky dospělosti SaaS produktu. Ukážou, jestli tým ví, kde data má, jak spolu souvisí, co musí uchovat kvůli zákonu a co může bezpečně odstranit. Pokud se při žádosti o smazání účtu rozjede ruční lov přes databázi, billing, support, analytiku a tři zapomenuté integrace, produkt není privacy-first. Je jen privacy-optimistický. Což je hezké slovo pro „snad to nepraskne“.

GDPR dává lidem mimo jiné právo na výmaz a právo na přenositelnost údajů. EDPB ve svém průvodci pro malé podniky připomíná, že správce má být připravený na žádosti subjektů údajů a že zpracovatel má správci pomáhat. U přenositelnosti jde o strukturovaný, běžně používaný a strojově čitelný formát, pokud jsou splněné podmínky práva na portabilitu ([EDPB: Respect individuals’ rights](https://www.edpb.europa.eu/sme/be-compliant/respect-individuals-rights_en)). Evropská komise zároveň uvádí, že organizace má odpovědět bez zbytečného odkladu a zpravidla do jednoho měsíce od obdržení žádosti; při odmítnutí musí vysvětlit důvody a poučit člověka o možnosti stížnosti nebo právní obrany ([European Commission: Dealing with requests from individuals](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/dealing-requests-individuals_en)).

Praktický závěr pro malý SaaS: export a smazání nesmí být „až bude enterprise zákazník“. Patří do návrhu účtu od začátku.

### 1. Rozděl data podle toho, co se s nimi má stát

Ne všechna data se při odchodu zákazníka chovají stejně. Nejčastější chyba je udělat jedno velké tlačítko „smazat vše“ a pak zjistit, že tím rozbiješ fakturaci, auditní stopu nebo oprávněné právní nároky. Druhá nejčastější chyba je nesmazat skoro nic, protože „co kdyby“. Obě varianty jsou špatně, jen každá jinak.

Rozděl data minimálně do pěti skupin:

1. **Účet a identita:** e-mail, jméno, role, organizace, přihlašovací metody, MFA.
2. **Produktový obsah:** projekty, dokumenty, záznamy, soubory, konfigurace, zákaznická data.
3. **Billing a smluvní data:** faktury, platby, DIČ, objednávky, tarif, účetní doklady.
4. **Support a komunikace:** tickety, e-maily, poznámky, nahrávky, diagnostické exporty.
5. **Provozní metadata:** logy, auditní stopa, bezpečnostní události, agregovaná analytika.

U každé skupiny si napiš:

- kdo je vlastník,
- kde data fyzicky jsou,
- zda se exportují,
- zda se mažou okamžitě,
- zda se anonymizují,
- zda se drží kvůli právní povinnosti nebo bezpečnosti,
- jak dlouho po ukončení účtu zůstávají.

Tohle není právní poezie. Je to provozní mapa. Když nevíš, kam datová skupina patří, nebudeš vědět, co udělat při odchodu zákazníka.

### 2. Export má být čitelný pro člověka i použitelný pro stroj

Export není screenshot z administrace ani ZIP plný náhodných JSON souborů bez kontextu. Dobrý export pomáhá zákazníkovi odejít, archivovat si práci nebo přejít jinam. Ano, i to je součást důvěry. Když zákazník ví, že není zamčený, paradoxně má menší potřebu utíkat.

Minimální exportní balíček:

- `README.md` s vysvětlením struktury,
- `account.json` se základními údaji účtu a organizace,
- `projects/` nebo podobná složka s hlavním produktovým obsahem,
- `files/` pro přílohy a uploady,
- `metadata.json` s časem exportu, verzí schématu a kontaktem na podporu,
- `checksums.txt` pro kontrolu integrity větších exportů.

Formáty drž obyčejné: JSON, CSV, Markdown, PDF pro lidské dokumenty, původní formáty souborů pro uploady. Nevymýšlej vlastní binární formát, pokud k tomu nemáš velmi dobrý důvod. Export nemá dokazovat, že tým umí serializaci jako fantasy žánr.

Příklad `metadata.json`:

```json
{
  "export_version": "1.0",
  "created_at": "2026-10-13T12:00:00Z",
  "workspace_id": "ws_123",
  "included_sections": ["account", "projects", "files"],
  "excluded_sections": ["billing_documents", "security_logs"],
  "support_contact": "support@example.eu"
}
```

U vyloučených částí vysvětli proč. Například faktury mohou být dostupné zvlášť v billing portálu a bezpečnostní logy nemusí být součástí uživatelského exportu, protože obsahují interní provozní metadata.

### 3. Smazání účtu navrhni jako workflow, ne jako SQL kouzlo

Smazání účtu má mít stavový model. Jinak bude někdo jednou spouštět ruční skript, který fungoval naposledy na stagingu v roce, kdy všichni říkali „metaverse“ bez ironie.

Praktické stavy:

1. **Žádost přijata:** zaznamená se čas, identita žadatele a rozsah žádosti.
2. **Ověření identity:** u citlivých účtů se ověří, že žádost podává oprávněná osoba.
3. **Předběžná kontrola:** zjistí se právní povinnosti, aktivní fakturace, otevřené incidenty a vlastnictví workspace.
4. **Export nabídnut:** pokud to dává smysl, uživatel dostane možnost stáhnout data před smazáním.
5. **Deaktivace:** účet se uzamkne nebo označí k ukončení, aby nevznikala nová data.
6. **Mazání/anonymizace:** produktový obsah se smaže nebo anonymizuje podle mapy dat.
7. **Propagace do dodavatelů:** support, e-mailing, CRM, analytika a úložiště dostanou vlastní akce.
8. **Potvrzení:** uživatel dostane stručnou zprávu, co bylo provedeno a co zůstává kvůli zákonným nebo bezpečnostním důvodům.

Mazání musí být idempotentní. Když se job spustí dvakrát, nesmí podruhé poškodit související účet, billing záznam nebo auditní stopu. Pokud mazání selže v půlce, musí jít bezpečně pokračovat.

### 4. Anonymizace není přejmenování na „smazaný uživatel“

Anonymizace znamená, že osobu už nelze rozumně znovu identifikovat. Nestačí změnit e-mail na `deleted@example.com`, když ve vedlejší tabulce zůstává jméno, IP adresa, unikátní slug, URL s osobním údajem nebo export v support ticketu.

U anonymizace kontroluj hlavně:

- textová pole, kde lidé mohli napsat osobní údaje,
- názvy projektů, workspace a souborů,
- URL parametry a referrery,
- interní poznámky obchodníků a supportu,
- logy s e-mailem, IP adresou nebo user ID,
- metadata uploadů,
- cache, search index a background job queue.

Někdy je lepší data smazat než anonymizovat. Anonymizace se hodí pro agregované statistiky, auditní vazby nebo historické reporty, kde produkt nepotřebuje původní identitu. Produktový obsah zákazníka ale často nemá proč zůstávat.

**Codyho komentář:** Pokud anonymizace vyžaduje víc speciálních pravidel než samotná funkce, je to signál, že produkt ukládá moc identity na moc místech. Data architecture bingo, gratuluji, vyhráli jste migraci.

### 5. Dodavatelé musí být součást procesu

Žádost nekončí ve vlastní databázi. Pokud zákaznická data posíláš do e-mailingu, supportu, CRM, monitoringu nebo platební služby, potřebuješ vědět, co se tam má stát. EDPB připomíná, že pokud byly údaje předané dalším organizacím, správce má informovat příjemce o žádosti o výmaz, pokud to není nemožné nebo nepřiměřené ([EDPB: Respect individuals’ rights](https://www.edpb.europa.eu/sme/be-compliant/respect-individuals-rights_en)).

Praktický vendor seznam pro offboarding:

- název dodavatele,
- typ dat,
- zda má API pro výmaz/export,
- zda výmaz dělá automaticky nebo ručně,
- jak se potvrzuje dokončení,
- kdo je interní vlastník,
- jak dlouho dodavatel drží zálohy,
- odkaz na DPA nebo dokumentaci.

Pokud dodavatel neumí výmaz řešit rozumně, je to riziko při výběru nástroje. Ne až při incidentu. Při vendor review se ptej: „Jak smažeme zákazníka, když odejde?“ Pokud odpověď zní „napište nám na support a uvidíme“, zapiš riziko a připrav alternativu.

### 6. Uživatelská komunikace má být klidná a konkrétní

Smazání účtu není místo pro manipulativní texty typu „opravdu nás chcete opustit?“ ani pro deset tmavých vzorů. Můžeš nabídnout export, pauzu nebo kontakt na podporu. Ale nesmíš z toho udělat únikovou místnost.

Dobrá potvrzovací obrazovka obsahuje:

- co přesně se smaže,
- co zůstane a proč,
- kdy bude proces dokončen,
- zda bude možné obnovit účet,
- jak stáhnout export,
- kontakt pro dotazy.

Příklad textu:

> Po potvrzení deaktivujeme váš účet a zahájíme mazání produktových dat. Fakturační doklady ponecháme po dobu vyžadovanou právními předpisy. Technické bezpečnostní logy držíme omezenou dobu podle retenční politiky. Před smazáním si můžete stáhnout export dat.

Tohle je nudné. Výborně. U práv a dat má být nudné všechno kromě toho, jak rychle tým najde chybu.

### Šablona offboarding runbooku

```markdown
## Offboarding: [produkt / workspace]

### Kontext žádosti
- Datum přijetí:
- Kanál:
- Žadatel:
- Ověřená identita: ano / ne
- Rozsah: export / smazání / omezení / oprava / jiné

### Datové skupiny
- Účet a identita:
- Produktový obsah:
- Uploady a exporty:
- Billing a smluvní data:
- Support a komunikace:
- Logy a auditní stopa:
- Analytika:

### Akce
- Export připraven:
- Účet deaktivován:
- Produktová data smazána:
- Data anonymizována:
- Dodavatelé informováni:
- Výjimky a důvody:

### Komunikace
- Potvrzení přijetí odesláno:
- Export odkaz odeslán:
- Dokončení potvrzeno:
- Interní poznámka:

### Kontrola
- Job doběhl bez chyby:
- Search index/cache vyčištěny:
- Fronty bez zbytkových jobů:
- Support exporty odstraněny:
- Další review datum:
```

### Checklist pro export a smazání účtu

- [ ] Máme mapu dat podle účtu, produktového obsahu, billing dat, supportu, logů a analytiky.
- [ ] Víme, která data se exportují, mažou, anonymizují nebo zůstávají kvůli zákonné povinnosti.
- [ ] Export má čitelný popis, běžné formáty, verzi schématu a kontrolu integrity.
- [ ] Smazání účtu má stavový workflow, ne ruční SQL improvizaci.
- [ ] Mazací job je idempotentní a umí bezpečně pokračovat po chybě.
- [ ] Před smazáním se kontroluje vlastnictví workspace, aktivní fakturace a otevřené incidenty.
- [ ] Dodavatelé jsou součástí procesu výmazu nebo anonymizace.
- [ ] Uživateli jasně říkáme, co se smaže, co zůstane a proč.
- [ ] Search indexy, cache, fronty, support exporty a logy mají vlastní pravidla.
- [ ] Offboarding proces se testuje na syntetickém účtu aspoň při větší změně datového modelu.
- [ ] Retenční politika odpovídá tomu, co systém opravdu dělá.

## Zdroje

- CNIL: [Use analytics on your websites and applications](https://www.cnil.fr/en/sheet-ndeg16-use-analytics-your-websites-and-applications)
- Diátaxis: [A systematic approach to technical documentation authoring](https://www.diataxis.fr/)
- Diátaxis: [Start here — Diátaxis in five minutes](https://www.diataxis.fr/start-here/)
- ENISA: [Cybersecurity guide for SMEs](https://www.enisa.europa.eu/publications/cybersecurity-guide-for-smes)
- ENISA: [Cybersecurity for SMEs — Challenges and Recommendations](https://www.enisa.europa.eu/publications/enisa-report-cybersecurity-for-smes)
- ENISA: [Cloud Security Guide for SMEs](https://www.enisa.europa.eu/publications/cloud-security-guide-for-smes)
- ENISA: [Technical implementation guidance on cybersecurity risk management measures](https://www.enisa.europa.eu/publications/technical-implementation-guidance-on-cybersecurity-risk-management-measures)
- European Commission: [European Accessibility Act](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en)
- European Commission: [Dealing with requests from individuals](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/dealing-requests-individuals_en)
- European Commission: [VAT invoicing rules](https://taxation-customs.ec.europa.eu/taxation/vat/businesses/vat-invoicing-rules_en)
- European Data Protection Board: [Be compliant — Data protection guide for small business](https://www.edpb.europa.eu/sme/be-compliant/be-compliant_en)
- European Data Protection Board: [Data controller or data processor](https://www.edpb.europa.eu/sme/learn-the-basics/data-controller-or-data-processor_en)
- European Data Protection Board: [Data protection impact assessment](https://www.edpb.europa.eu/topics/accountability-and-compliance-tools/data-protection-impact-assessment_en)
- European Data Protection Board: [Template for Data Protection Impact Assessment](https://www.edpb.europa.eu/our-work-tools/documents/public-consultations/2026/edpb-dpia-template_en)
- European Data Protection Board: [Privacy by design and by default](https://www.edpb.europa.eu/topics/ai-and-technology/privacy-by-design-and-by-default_en)
- European Data Protection Board: [Respect individuals’ rights](https://www.edpb.europa.eu/sme/be-compliant/respect-individuals-rights_en)
- European Data Protection Board: [Basic principles](https://www.edpb.europa.eu/topics/key-gdpr-concepts/basic-principles_en)
- European Data Protection Board: [Guidelines 05/2020 on consent under Regulation 2016/679](https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_de)
- European Data Protection Board: [Guidelines 07/2020 on the concepts of controller and processor in the GDPR](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-072020-concepts-controller-and-processor-gdpr_en)
- European Commission: [Data Act](https://digital-strategy.ec.europa.eu/en/policies/data-act)
- European Commission: [AI Act](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)
- European Commission: [NIS2 Directive](https://digital-strategy.ec.europa.eu/en/policies/nis2-directive)
- European Commission: [Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en)
- European Union / Your Europe: [Digital accessibility](https://europa.eu/youreurope/business/selling-in-eu/selling-goods-services/accessibility/index_en.htm)
- EUR-Lex: [Regulation (EU) 2016/679 — General Data Protection Regulation](https://eur-lex.europa.eu/legal-content/ENG/ALL/?uri=celex%3A32016R0679)
- EUR-Lex: [Directive 2002/58/EC on privacy and electronic communications](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02002L0058-20091219)
- FIDO Alliance: [Passkeys](https://fidoalliance.org/passkeys/)
- Finanční správa: [Daň z přidané hodnoty](https://financnisprava.gov.cz/cs/dane/dane/dan-z-pridane-hodnoty)
- NCSC: [Password administration for system owners](https://www.ncsc.gov.uk/collection/passwords)
- Google Analytics Help: [URL builders — Collect campaign data with custom URLs](https://support.google.com/analytics/answer/10917952?hl=en-uk)
- Gmail Help: [Email sender guidelines](https://support.google.com/mail/answer/81126)
- Google Search Central: [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- Google Search Console Help: [Performance report](https://support.google.com/webmasters/answer/7576553)
- Google Search Central: [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- Google Search Central: [Sitemaps overview](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- Google Search Central: [Using generative AI content on your website](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)
- Keep a Changelog: [Keep a Changelog](https://keepachangelog.com/en/)
- Matomo: [Configure Privacy Settings](https://matomo.org/faq/general/configure-privacy-settings-in-matomo/)
- Matomo: [What data does Matomo track?](https://matomo.org/faq/general/faq_18254/)
- MDN: [Lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Lazy_loading)
- MDN: [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)
- MDN: [Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
- MDN: [Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy)
- MDN: [X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options)
- MDN: [input type search](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/search)
- MDN: [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- NCSC: [Offline backups in an online world](https://www.ncsc.gov.uk/guidance/offline-backups-in-an-online-world)
- OWASP: [API Security Top 10 2023](https://api-security.owasp.org/editions/2023/en/0x11-t10/)
- OWASP: [Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- OWASP: [File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html)
- OWASP: [Forgot Password Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html)
- OWASP: [Multifactor Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Multifactor_Authentication_Cheat_Sheet.html)
- OWASP: [Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
- OWASP: [Application Security Verification Standard](https://owasp.org/projects/asvs)
- OWASP: [Secure Headers Project](https://owasp.org/www-project-secure-headers/)
- OWASP: [Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)
- OWASP: [REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html)
- OWASP: [Webhook Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Webhook_Security_Cheat_Sheet.html)
- RFC Editor: [RFC 6376 — DomainKeys Identified Mail (DKIM) Signatures](https://www.rfc-editor.org/rfc/rfc6376)
- RFC Editor: [RFC 7208 — Sender Policy Framework (SPF)](https://www.rfc-editor.org/rfc/rfc7208)
- RFC Editor: [RFC 8058 — Signaling One-Click Functionality for List Email Headers](https://www.rfc-editor.org/rfc/rfc8058)
- RFC Editor: [RFC 9989 — Domain-Based Message Authentication, Reporting, and Conformance (DMARC)](https://www.rfc-editor.org/rfc/rfc9989)
- RFC Editor: [RFC 9990 — DMARC Aggregate Reporting](https://www.rfc-editor.org/rfc/rfc9990)
- RSS Advisory Board: [RSS 2.0 Specification](https://www.rssboard.org/rss-specification)
- Semantic Versioning: [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html)
- The Good Docs Project: [Templates](https://www.thegooddocsproject.dev/template)
- Umami: [Track events](https://docs.umami.is/docs/track-events)
- Umami: [Metric definitions](https://docs.umami.is/docs/metric-definitions)
- Umami: [Platform](https://umami.is/platform)
- Umami: [FAQ](https://docs.umami.is/docs/faq)
- W3C: [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)
- W3C WAI: [Forms](https://www.w3.org/WAI/curricula/content-author-modules/forms/)
- W3C WAI: [Labeling Controls](https://www.w3.org/WAI/tutorials/forms/labels/)
- W3C WAI: [Understanding SC 1.3.5 Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html)
- W3C WAI: [User Notification](https://www.w3.org/WAI/tutorials/forms/notifications/)
- web.dev: [Web Vitals](https://web.dev/articles/vitals)
- Yahoo Sender Hub: [Sender Best Practices](https://senders.yahooinc.com/best-practices/)
- Úřad pro ochranu osobních údajů: [Cookies — otázky a odpovědi](https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies)
- Úřad pro ochranu osobních údajů: [Cookies od začátku roku 2022 pouze se souhlasem](https://uoou.gov.cz/novinky/vse/cookies-od-zacatku-roku-2022-pouze-se-souhlasem)
- Úřad pro ochranu osobních údajů: [Obchodní sdělení](https://uoou.gov.cz/profesional/obchodni-sdeleni)
- Úřad pro ochranu osobních údajů: [Informace pro e-shopy](https://uoou.gov.cz/profesional/qa-otazky-a-odpovedi/informace-pro-e-shopy)

---

## Pracovní log

- **2026-10-13:** Přidána příloha AU o exportu a smazání účtu: datové skupiny, strojově čitelný export, workflow výmazu, anonymizace, dodavatelé, komunikace se zákazníkem, offboarding runbook a checklist s ověřenými zdroji EDPB a Evropské komise.

- **2026-10-13:** Přidána příloha AT o webhook integracích, API klíčích a datových tocích: obchodní účel integrací, minimální payload, bezpečná práce s klíči, ověřování webhooků, logování bez úniku dat, vypínače, měsíční review, šablona a checklist.

- **2026-10-13:** Přidána příloha AS o dodavatelích, DPA a subprocesorech: role správce/zpracovatele, vendor karta, kontrola DPA, subprocesory, evropský provoz, rizikové review, exit plán, šablona a checklist.

- **2026-10-13:** Přidána příloha AR o přihlášení a správě účtů: vrstvy účtu, role podle práce, bezpečné pozvánky, hesla/passkeys/MFA, session pravidla, audit log, šablona access review a checklist.

- **2026-10-13:** Přidána příloha AQ o feature flazích a privacy-first rolloutu: typy flagů, vlastnictví, postupné zapínání podle rizika, agregované měření, kill switch, úklid starých flagů, šablona a checklist.

- **2026-10-13:** Přidána příloha AP o bezpečnostních hlavičkách a CSP: inventura zdrojů, postupné zavedení policy, HSTS, Referrer-Policy, MIME sniffing, iframe ochrana, release kontrola, review šablona a checklist.
- **2026-10-13:** Přidána příloha AO o privacy-first monitoringu a alertingu: kritické toky, alert priority, bezpečný payload, SLO, syntetické kontroly, monitoring nákladů, alert runbook a checklist.
- **2026-10-13:** Přidána příloha AN o zálohách a obnově: RPO/RTO, datové třídy, bezpečné restore prostředí, pravidelné testy obnovy, privacy pravidla pro zálohy, scénáře incidentů, runbook a checklist.
- **2026-10-13:** Přidána příloha AM o stagingu, preview deployích a testovacích datech: rozdělení prostředí, syntetická data, ochrana preview URL, sandbox integrace, oddělené secrets, provozní úklid a checklist.
- **2026-10-13:** Přidána příloha AL o uploadu, přílohách a exportech: účel souborových toků, validace obsahu, oddělené úložiště, bezpečné exporty, metadata, retence, šablona karty a checklist.
- **2026-10-13:** Přidána příloha AK o interním privacy-first vyhledávání: účel vyhledávání, oddělení indexů, bezpečné zpracování dotazů, autocomplete bez úniku dat, nulové výsledky jako backlog, šablona review a checklist.
- **2026-10-13:** Přidána příloha AJ o přístupných privacy-first formulářích: minimalizace polí, labely, validační chyby, vícekrokové toky, anti-spam bez invazivních skriptů, agregované měření, šablona review a checklist.
- **2026-10-13:** Přidána příloha AI o webhookových a API rozhraních: integrační smlouva, ověřování podpisů, idempotence, správa API klíčů, retry scénáře, inventura, šablona integrační karty a checklist.
- **2026-10-12:** Přidána příloha AH o dashboardech a rozhodování bez metrikového divadla: rozhodovací účel, rytmus metrik, interpretace, agregace, kvalita signálů, prahy, vlastníci, šablona dashboard karty a checklist.
- **2026-10-12:** Přidána příloha AG o customer success bez sledovacího panoptika: definice zákaznického úspěchu, týmové health signály, vysvětlitelné stavy, oddělení péče/supportu/prodeje, bezpečné CRM poznámky, playbook a checklist.
- **2026-10-12:** Přidána příloha AF o produktových e-mailech a notifikacích: rozdělení typů zpráv, autentizace SPF/DKIM/DMARC, minimalizace obsahu a trackingu, preference centrum, doručitelnost, verzování šablon, e-mailová mapa a checklist.
- **2026-10-12:** Přidána příloha AE o billing vrstvě, fakturaci a platbách: oddělení fakturační identity od účtu, bezpečné platební tokeny, neměnné doklady, billing portál, webhooky, exporty, revenue reporting, šablona review a checklist.
- **2026-10-12:** Přidána příloha AD o interním adminu a backoffice: pracovní situace, role podle účelu, citlivé akce, impersonace, minimalizace dat, metriky používání, šablona access review a checklist.
- **2026-10-12:** Přidána příloha AC o dokumentaci a knowledge base: rozdělení typů dokumentace, task-first návody, troubleshooting bez sběru citlivých dat, vlastnictví článků, privacy-first měření, lidské vysvětlení bezpečnosti a checklist.
- **2026-10-12:** Přidána příloha AB o logování a auditní stopě: účel logů, minimalizace PII, sanitizace, auditní události, retence, přístupy, šablona logovací politiky a checklist.
- **2026-10-12:** Přidána příloha AA o přihlašování, MFA a obnově účtů: rozdělení rizikových akcí, reset hesla, session politika, role, access review a checklist pro malé privacy-first SaaS týmy.

- **2026-10-12:** Přidána příloha Z o registru zpracování a subdodavatelích: karty zpracování, role správců a zpracovatelů, review nových nástrojů, incident/exit využití a praktický checklist.
- **2026-10-12:** Přidána příloha Y o zálohách a obnově: RTO/RPO, oddělené a šifrované zálohy, restore testy, retenční rizika, runbook, monitoring, šablona testu a checklist.
- **2026-10-12:** Přidána příloha X o privacy-first integracích a API: datová smlouva, minimální oprávnění, vypínatelnost, ochrana URL/logů, zdroj pravdy, integrační karta a checklist.
- **2026-10-12:** Přidána příloha W o privacy-first lead scoringu: stavy připravenosti, kvalifikační otázky, expirace signálů, oddělení marketingového zájmu od obchodního oprávnění, šablona a checklist.
- **2026-10-12:** Přidána příloha V o přístupnosti a výkonu bez sledovacího balastu: semantické HTML, Web Vitals, optimalizace médií, respekt k omezení pohybu, ruční testování, release brány a review šablona.
- **2026-10-12:** Přidána příloha U o privacy-first event taxonomy: pojmenování eventů, slovník vlastností, klasifikace rizika, kontrola URL/logů, review proces, šablona a checklist bez PII.
- **2026-10-12:** Obnovena kompletní verze e-booku po poškozeném placeholderu a přidána příloha T o RSS distribuci: typy feedů, technická implementace, objevitelný odkaz, privacy-first měření, workflow, šablona a checklist.
- **2026-10-12:** Přidána příloha S o privacy-first experimentech a A/B testování: hypotézy, úrovně rizika, měření variant bez profilování lidí, guardrail metriky, vyhodnocení, situace kdy netestovat a šablona experimentu.
- **2026-10-12:** Přidána příloha R o incidentové komunikaci a status page: kategorie incidentů, role týmu, první status, rytmus updatů, interní zápis, postmortem a checklist bez zbytečného sběru citlivých dat.
- **2026-10-12:** Přidána příloha Q o retenci a mazání dat: inventura datových zásuvek, rozdělení důvodů uložení, režimy mazání, pravidla pro exporty, postup pro žádosti uživatelů a šablona retenční politiky.
- **2026-10-12:** Přidána příloha P o měsíčním privacy-first reportu: otázky před grafy, jednostránkové shrnutí, oddělení signálu a interpretace, rozhodovací metriky, vlastník doporučení a šablona reportu.
- **2026-10-12:** Přidána příloha O o privacy-first produktové roadmapě: témata místo seznamu funkcí, hypotézy, prioritizace podle hodnoty a důvěry, oddělení discovery/delivery/údržby, vyhodnocení dopadu a roadmapová karta.
- **2026-10-12:** Přidána příloha N o privacy-first B2B demo hovorech a obchodním follow-upu: příprava dema, discovery otázky, CRM poznámky, follow-up e-mail, pipeline stavy a retenční checklist.
- **2026-10-12:** Přidána příloha M o privacy-first e-mailingu a onboardingových e-mailech: typy zpráv, minimální sběr kontaktů, jednoduché odhlášení, agregované měření, onboarding série a měsíční hygiena seznamu.
- **2026-10-12:** Přidána příloha L o důvěryhodnosti privacy-first webu: typy důkazů, case studies, reference, rozmístění důkazů, lidské vysvětlení bezpečnosti a checklist.
- **2026-10-11:** Přidána příloha K o privacy-first pricing stránce: nákupní situace, hodnotové tarify, limity, CTA podle připravenosti zákazníka, agregované měření a praktická šablona.
- **2026-10-11:** Přidána příloha J o privacy-first supportu a knowledge base: vrstvy podpory, struktura článků, šablona návodu, minimální ticket formulář, agregované metriky a měsíční review.
- **2026-10-11:** Přidána příloha I o privacy-first poptávkových formulářích: minimální pole, kvalifikace problému, potvrzení po odeslání, interní workflow, retenční pravidla a praktická šablona.
- **2026-10-11:** Přidána příloha H o redakčním systému obsahu: obsahové pilíře podle rozhodnutí zákazníka, redakční karta, publikační rytmus, distribuce přes vlastní kanály a privacy-first měření.
- **2026-10-11:** Přidána příloha G o changelogu a release notes: rozdíl mezi interním a zákaznickým zápisem, kanonická stránka, RSS, šablona položky, release rytmus a checklist pro privacy-first komunikaci změn.
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
