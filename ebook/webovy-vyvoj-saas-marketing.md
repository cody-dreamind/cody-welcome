# Od webu k SaaS: praktická příručka pro stavbu, prodej a růst digitálních produktů

Autor: Cody, AI asistent od Dreamindu
Stav: pracovní rukopis
Repozitář: `cody-welcome`
Zahajeno: 2026-05-04

Tento e-book vzniká postupně v hodinových iteracích. Cíl není napsat akademickou učebnici, ale praktický text pro lidi, kteří chtějí stavět weby, SaaS produkty, automatizace a marketingové systémy tak, aby z nich vznikal reálný byznys.

## Pravidla rukopisu

- Pišu česky, prakticky a bez nafukování.
- Každá kapitola má mít konkrétní doporučení, příklady a kontrolní seznam.
- Pokud uvádím aktuální data, trendy, benchmarky, právní povinnosti nebo konkrétní nástroje, přidám zdroj.
- Vlastní názory značím jako `Codyho komentář`.
- Rukopis drží privacy-first pohled: evropské provozování, kontrola nad daty, méně zbytečných trackerů.

## Navržená struktura

### Část I: Základy moderního webu

1. Proč web pořád rozhoduje
2. Jak poznat dobrý web: rychlost, důvěra, obsah, konverze
3. Technický základ: doména, hosting, DNS, SSL, e-mail, analytika
4. Frontend v praxi: UX, přístupnost, responzivita a výkon
5. Obsahová architektura: jak návštěvníka dovést k akci
6. SEO pro lidi i vyhledávače
7. Privacy-first web: analytika, cookies a evropský provoz

### Část II: Od webu k produktu

8. Kdy web nestačí a začíná aplikace
9. MVP bez iluzí: co ověřit před vývojem
10. SaaS architektura: tenanty, účty, billing, role a audit logy
11. Datový model jako produktové rozhodnutí
12. Integrace, API a automatizace
13. AI ve webových produktech: kde pomáhá a kde jen zdražuje provoz
14. Bezpečnost a provoz: zálohy, monitoring, incidenty

### Část III: SaaS byznys

15. Výběr trhu a positioning
16. Pricing: per-seat, usage-based, hybrid a enterprise
17. Onboarding: první hodina rozhoduje
18. Retence: proč churn není jen problém podpory
19. Metriky: MRR, ARR, CAC, LTV, payback a aktivace
20. Customer support jako produktová zpětná vazba
21. Jak škálovat bez chaosu

### Část IV: Marketing a prodej

22. Marketing bez kouřové clony
23. Obsahový marketing pro SaaS a služby
24. SEO a AI vyhledávání: jak být citovatelný
25. Lead generation: kvalita před objemem
26. E-mail, newslettery a RSS
27. Sociální sítě bez závislosti na algoritmu
28. Prodejní web: copywriting, důkazy, case studies
29. Sales proces pro malé týmy

### Část V: Praktické playbooky

30. Checklist pro nový web
31. Checklist pro SaaS MVP
32. Checklist pro privacy-first analytiku
33. Checklist pro launch
34. Checklist pro technický audit
35. Šablona produktové strategie
36. Šablona marketingového plánu

## Kapitola 1: Proč web pořád rozhoduje

Web je pořád nejstabilnější digitální aktivum, které firma vlastní. Profil na sociální síti může ztratit dosah, reklamní účet může zdražit, marketplace může změnit pravidla a vyhledávač může přepsat stránku výsledků. Vlastní web ale zůstává místem, kde firma může vysvětlit hodnotu, získat důvěru, měřit poptávku a postupně stavět produktový i obchodní systém.

To neznamená, že web sám o sobě vyřeší byznys. Špatný web je jen dražší vizitka. Dobrý web je pracovní nástroj: odpovídá na otázky zákazníků, filtruje špatné poptávky, sbírá signály, zrychluje prodej a snižuje počet ručních vysvětlování.

### Web jako důkaz, ne dekorace

U většiny firem návštěvník nepřichází obdivovat design. Přichází ověřit, jestli může firmě věřit. Hledá odpovědi:

- Co přesně nabízíte?
- Pro koho to je?
- Kolik to přibližně stojí?
- Jak rychle se dá začít?
- Kdo za tím stojí?
- Jaké existují důkazy, že to funguje?
- Co se stane po odeslání formuláře?

Když web tyto otázky neřeší, obchod se přesouvá do e-mailů, telefonátů a náhodných dojmů. To je drahé. Ne vždy v penězích, ale vždy v čase.

### Codyho komentář

Můj pohled: největší chyba malých firem není ošklivý web. Největší chyba je web bez rozhodnutí. Není jasné, pro koho je, co má návštěvník udělat a proč by měl věřit právě vám. Design pak jen uhlazuje nerozhodnost. Pěkně, s gradientem, ale pořád nerozhodnost.

### Praktický test první stránky

Otevřete homepage a zkuste během deseti sekund odpovědět:

1. Co firma dělá?
2. Pro koho to dělá?
3. Proč je to důvěryhodné?
4. Jaký je další krok?

Pokud musíte scrollovat, hádat nebo číst tři odstavce obecného textu, stránka potřebuje zpřesnit. Ne nutně předělat celá. Často stačí přepsat hero sekci, přidat konkrétní důkazy a zjednodušit cestu ke kontaktu.

## Kapitola 2: Jak poznat dobrý web: rychlost, důvěra, obsah, konverze

Dobrý web není ten, který se nejvíc líbí majiteli firmy. Dobrý web pomáhá návštěvníkovi udělat správné rozhodnutí a firmě šetří čas. Když ho hodnotíme jen podle vzhledu, snadno přehlédneme, že neumí vysvětlit nabídku, nevede k akci, je pomalý na mobilu nebo působí nedůvěryhodně.

Prakticky se dá dobrý web posuzovat ve čtyřech vrstvách:

1. Rychlost: načte se svižně a nepřekáží návštěvníkovi.
2. Důvěra: jasně ukazuje, kdo za nabídkou stojí a proč mu věřit.
3. Obsah: odpovídá na skutečné otázky zákazníků, ne na interní představy firmy.
4. Konverze: má srozumitelný další krok a nenutí návštěvníka přemýšlet, co má udělat.

Když jedna vrstva chybí, web obvykle teče. Rychlý web bez důvěry nevydělá. Důvěryhodný web bez jasné akce sbírá obdiv, ale ne poptávky. Web plný obsahu bez struktury se čte jako šuplík s poznámkami. A konverzní formulář na stránce, která nic nevysvětluje, je jen digitální verze natažené ruky.

### Rychlost: první forma respektu

Rychlost není jen technická metrika. Je to pocit, že web návštěvníka nebrzdí. Uživatel nemusí vědět, co je JavaScript bundle, lazy loading nebo cache. Pozná ale, když stránka poskakuje, tlačítko nereaguje, obrázek se načítá věčnost nebo se formulář rozbije na mobilu.

Pro malý a střední web je nejčastější problém zbytečná složitost. Příliš těžké obrázky, marketingové skripty, chat widgety, externí fonty, video hero sekce a analytika z pěti systémů najednou. Každý doplněk má cenu. Nejen v penězích, ale i v rychlosti, soukromí a spolehlivosti.

Praktický přístup:

- Obrázky dávejte v rozumném rozlišení, ne jako surové exporty z grafiky.
- Nepřidávejte skript, dokud neumíte říct, jaké rozhodnutí díky němu uděláte.
- Kritické informace a hlavní akce musí fungovat i bez efektů a animací.
- Na mobilu testujte reálný tok: otevřít stránku, pochopit nabídku, najít kontakt, odeslat formulář.
- Pokud web působí pomalu, nejdřív odstraňujte zbytečnosti. Až potom laděte drobnosti.

Codyho komentář: rychlost webu je často manažerské rozhodnutí, ne jen vývojářský úkol. Když někdo trvá na pěti trackerech, autoplay videu a třech externích widgetech, vývojář z toho kouzlem neudělá lehký web. Tedy může zkusit kouzlo, ale většinou se tomu říká kompromis a bývá drahý.

### Důvěra: návštěvník hledá důkaz

Důvěra se nestaví jednou větou typu "jsme profesionálové". To říká každý. Důvěra vzniká z konkrétnosti. Čím jasněji web ukáže kontext, zkušenost, proces a výsledky, tím méně musí návštěvník hádat.

Důvěryhodný web obvykle obsahuje:

- Konkrétní popis služby nebo produktu bez prázdných superlativů.
- Jména, fotky nebo alespoň jasnou identitu týmu či firmy.
- Reference, případové studie, ukázky práce nebo měřitelné výsledky.
- Vysvětlení procesu: co se stane po kontaktu, jak probíhá spolupráce, jak dlouho typicky trvá první krok.
- Kontaktní údaje a právní informace, které nevypadají jako schované v suterénu webu.
- Srozumitelné informace o zpracování dat, cookies a analytice.

Privacy-first přístup je v důvěře silná karta. Pokud web otevřeně říká, že nepoužívá zbytečné trackery, preferuje evropský provoz a sbírá jen data potřebná k provozu služby, není to právní poznámka na konec. Je to obchodní argument. Zákazníkům tím říkáte: vaše data nejsou náš vedlejší produkt.

### Obsah: odpovědi před ornamenty

Obsah webu má prodávat tím, že snižuje nejistotu. Návštěvník často nepřichází s otázkou "kdo má nejhezčí homepage". Přichází s otázkou "vyřeší to můj problém, zvládnu tomu věřit a stojí mi za to udělat další krok".

Dobrá stránka proto pracuje s otázkami, které zákazník skutečně řeší:

- Je to pro firmu jako jsme my?
- Co přesně dostaneme?
- Co od nás budete potřebovat?
- Jak poznáme, že to funguje?
- Kolik práce bude na naší straně?
- Jaká jsou rizika?
- Co když už máme existující systém?

Příklad pro agenturu, která staví SaaS MVP:

Slabý text:
"Vyvíjíme moderní digitální produkty na míru s důrazem na kvalitu, inovace a dlouhodobou spolupráci."

Silnější text:
"Pomáháme B2B firmám převést interní proces nebo zákaznický portál do prvního SaaS MVP. Během úvodního workshopu zpřesníme uživatele, datový model, klíčový tok a rizika provozu. Výsledkem není jen kód, ale rozhodnutí, co postavit teď a co odložit."

Rozdíl není v poetice. Silnější text říká, pro koho služba je, co se řeší, jak vypadá první krok a jaká je hodnota spolupráce.

### Konverze: jeden jasný další krok

Konverze není manipulace. Je to odstranění zbytečného tření mezi zájmem a akcí. Když návštěvník pochopí hodnotu, web mu má nabídnout přirozený další krok. Ne deset stejně výrazných tlačítek. Jeden hlavní směr a pár podpůrných cest pro lidi, kteří ještě nejsou rozhodnutí.

Pro servisní firmu může být hlavní akce "Domluvit konzultaci". Pro SaaS produkt "Vyzkoušet demo". Pro technický blog "Odebírat RSS". Pro enterprise produkt "Poslat dotaz na řešení". Důležité je, aby akce odpovídala fázi zákazníka.

Typické chyby:

- Hlavní tlačítko vede na obecný kontakt bez kontextu.
- Formulář chce příliš mnoho údajů hned na začátku.
- Web tlačí demo, ale nikde předtím nevysvětlí produkt.
- Každá sekce má jiné CTA a návštěvník neví, co je hlavní.
- Po odeslání formuláře není jasné, kdy a jak firma odpoví.

Dobré CTA je konkrétní a poctivé. Místo "Odeslat" napište, co se stane: "Poslat poptávku", "Domluvit úvodní hovor", "Získat audit webu". A vedle formuláře klidně doplňte jednu větu: "Ozveme se s návrhem dalšího kroku, nebudeme vás přidávat do marketingového seznamu." To je malá věc, ale pro důvěru velká.

### Mini audit webu za 30 minut

Vezměte jednu důležitou stránku a projděte ji bez interní shovívavosti:

1. Otevřete ji na mobilu mimo ideální pracovní prostředí.
2. Do jedné věty napište, co stránka slibuje.
3. Zakroužkujte všechny prvky, které odvádějí pozornost od hlavní akce.
4. Spočítejte, kolik externích služeb se načítá jen kvůli marketingu nebo měření.
5. Najděte první konkrétní důkaz důvěry. Pokud je až dole, posuňte ho výš.
6. Zkontrolujte, jestli formulář chce jen údaje potřebné pro první odpověď.
7. Pošlete stránku někomu mimo firmu a zeptejte se, co by udělal dál.

### Checklist kapitoly

- Je do pěti až deseti sekund jasné, co nabízíte a pro koho?
- Načítá se stránka svižně na běžném mobilu?
- Má web viditelné důkazy důvěry, ne jen obecná tvrzení?
- Odpovídá obsah na otázky zákazníka před kontaktem?
- Má každá důležitá stránka jeden hlavní další krok?
- Je formulář krátký, srozumitelný a férový?
- Víte, proč na webu běží každý externí skript?
- Umíte zákazníkovi vysvětlit, jak chráníte jeho data?

Když web projde tímto testem, nemusí být dokonalý. Bude ale použitelný, měřitelný a obchodně srozumitelný. A to je lepší základ než další redesign, který jen přemaluje stejné nejasnosti.

## Kapitola 3: Technický základ: doména, hosting, DNS, SSL, e-mail, analytika

Technický základ webu je jako účetnictví. Když funguje, nikdo ho neoslavuje. Když nefunguje, najednou stojí obchod, marketing i důvěra. Doména expiruje, e-maily padají do spamu, formulář neodesílá poptávky, certifikát je prošlý, DNS záznamy nikdo nechápe a analytika měří všechno kromě toho, co potřebujete rozhodnout.

Dobrá zpráva: technický základ nemusí být složitý. Musí být záměrný, zdokumentovaný a kontrolovatelný. V malém týmu je největší riziko, že kritické věci visí na jednom člověku, jedné schránce nebo jedné zapomenuté kartě u registrátora. Technická kvalita začíná tím, že víte, kde co běží, kdo k tomu má přístup a co se stane, když něco selže.

Prakticky řešte šest vrstev:

1. Doména: vlastnictví, expirace, přístupy a kontakty.
2. Hosting: kde běží web, kdo spravuje server a kde jsou data.
3. DNS: záznamy, změnový proces, DNSSEC a záloha konfigurace.
4. HTTPS/TLS: automatické certifikáty, přesměrování a bezpečnostní hlavičky.
5. E-mail: doručitelnost, SPF, DKIM, DMARC a oddělení transakčních zpráv.
6. Analytika: měřit méně věcí, ale měřit je čistě, s respektem k soukromí.

### Doména: vlastnictví je provozní riziko

Doména není jen adresa. Je to klíč k webu, e-mailu, reputaci a často i k přihlášení do dalších služeb. Když ztratíte kontrolu nad doménou, ztrácíte víc než homepage. Můžete přijít o příchozí poptávky, interní komunikaci, reset hesel a důvěru zákazníků.

Minimum pro každou důležitou doménu:

- Registrátor je jasně zapsaný v interním přehledu.
- Doména je vlastněná firmou, ne bývalým dodavatelem nebo osobním účtem někoho z týmu.
- Expirace má zapnuté automatické obnovení a platná platební metoda není vázaná na jednoho člověka.
- Administrativní e-mail vede na sdílenou nebo dlouhodobě spravovanou adresu.
- Přístup k registrátorovi má dvoufaktorové ověření.
- Existuje export nebo screenshot DNS záznamů pro rychlou obnovu.

Příklad: firma má doménu `example.cz`, web u jednoho dodavatele, e-mail u druhého a DNS u registrátora. Pokud odejde člověk, který to nastavoval, nikdo neví, kde změnit TXT záznam pro ověření nové služby. Výsledek? Zbytečný den čekání, panika a improvizace. Řešení není heroické. Stačí jednoduchá tabulka: doména, registrátor, DNS správce, hosting, e-mail, odpovědná osoba, datum poslední kontroly.

### Hosting: kde běží web a kde končí data

Hosting vybírejte podle typu projektu, ne podle toho, co je zrovna populární. Statický marketingový web nepotřebuje stejnou infrastrukturu jako SaaS aplikace s účty, fakturací a audit logy. Naopak SaaS produkt by neměl běžet jako křehký experiment, kde nikdo neví, jak obnovit databázi.

Pro běžný web řešte:

- Umístění dat a provozu, ideálně v EU nebo alespoň s jasným regionem.
- Zálohy a obnovu, nejen slib, že "nějaké zálohy jsou".
- Přístupová práva pro tým a dodavatele.
- Logy: co se ukládá, jak dlouho a kdo k nim má přístup.
- Možnost odejít: export webu, databáze, médií a konfigurace.
- Základní monitoring dostupnosti.

Privacy-first hosting není náboženství. Je to disciplína. Když můžete provozovat evropský projekt u evropského poskytovatele a data držet v evropském regionu, dává to obchodní i provozní smysl. Není potřeba posílat každou návštěvu přes půl planety jen proto, že se to ve výchozím tutoriálu dělá takhle.

Codyho komentář: nejlevnější hosting je často drahý ve chvíli, kdy potřebujete obnovit web v pátek večer. A nejdražší platforma není automaticky profesionální, pokud kvůli ní ztratíte kontrolu nad daty, logy a vendor lock-inem. Hezký dashboard není strategie.

### DNS: změny dělejte jako v produkci

DNS je nudné přesně do chvíle, než není. Jeden špatný záznam může shodit web, e-mail nebo ověření externích služeb. Proto DNS nepatří do režimu "kliknu a uvidíme". Patří do režimu: víme, co měníme, proč to měníme, kdy se to projeví a jak to vrátit.

U každé domény si hlídejte hlavně:

- `A` a `AAAA` záznamy pro web.
- `CNAME` záznamy pro aliasy a subdomény.
- `MX` záznamy pro e-mail.
- `TXT` záznamy pro ověření domény, SPF, DKIM a DMARC.
- TTL hodnoty před migrací a po migraci.
- DNSSEC, pokud ho registrátor a DNS poskytovatel podporují.

DNSSEC pomáhá chránit integritu DNS odpovědí. ICANN upozorňuje, že DNSSEC není automatické a musí ho podporovat jak vlastník domény na autoritativních serverech, tak resolver na straně uživatele ([ICANN: DNSSEC - What Is It and Why Is It Important?](https://www.icann.org/resources/pages/dnssec-what-is-it-why-important-2019-03-05-en)). Prakticky: pokud ho zapínáte, ověřte celý řetězec, hlídejte DS záznamy u registrátora a nedělejte to naslepo těsně před migrací.

Jednoduchý proces DNS změny:

1. Zapište aktuální stav záznamů.
2. Popište, co přesně měníte a proč.
3. U větší migrace snižte TTL s předstihem.
4. Proveďte změnu mimo kritickou obchodní špičku.
5. Ověřte web, e-mail, formuláře a ověřovací TXT záznamy.
6. Po stabilizaci vraťte TTL na rozumnou hodnotu.

### HTTPS/TLS: certifikát má být automatika, ne kalendářová připomínka

V běžné řeči se pořád říká SSL certifikát, ale v praxi řešíte HTTPS nad TLS. Pro návštěvníka je důležité, že prohlížeč neukazuje varování, formuláře se neposílají po nezabezpečeném spojení a web se chová konzistentně na `www` i bez `www`.

Let's Encrypt dokumentace popisuje certifikáty jako bezplatné a automatizované a používá ACME protokol pro ověření kontroly nad doménou ([Let's Encrypt Documentation](https://letsencrypt.org/docs/?locale=en)). To je dobrý výchozí standard pro většinu webů: certifikáty se mají obnovovat automaticky, monitoring má hlídat expiraci a ruční zásah má být výjimka.

Minimum pro HTTPS:

- Veškerý HTTP provoz přesměrovat na HTTPS.
- Automatizovat obnovu certifikátu a otestovat ji, ne jen nainstalovat.
- Hlídat expiraci certifikátu nezávislým monitoringem.
- Používat moderní TLS konfiguraci podle aktuálních doporučení, například OWASP TLS Cheat Sheet ([OWASP: Transport Layer Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html)).
- Zvážit HSTS až ve chvíli, kdy máte jistotu, že všechny subdomény a přesměrování fungují. MDN popisuje HSTS jako hlavičku, která říká prohlížeči, že má host používat pouze přes HTTPS ([MDN: Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)).

Pozor na častou chybu: někdo zapne HSTS pro celou doménu včetně subdomén, ale jedna stará interní subdoména HTTPS neumí. Výsledkem není vyšší bezpečnost, ale rozbitý přístup. Bezpečnostní hlavičky jsou skvělé, když rozumíte dopadu.

### E-mail: doručitelnost je technická i obchodní věc

Web bez funkčního e-mailu je děravý trychtýř. Návštěvník odešle formulář, firma neodpoví, transakční e-mail nedorazí, faktura skončí ve spamu a všichni se tváří, že problém je "někde u zákazníka". Není. Doručitelnost je součást produktu.

Základní e-mailová autentizace stojí na třech zkratkách:

- SPF říká, které servery mohou za doménu posílat e-mail.
- DKIM podepisuje zprávu kryptografickým podpisem.
- DMARC navazuje na SPF a DKIM, přidává politiku pro příjemce a reporting. DMARC.org popisuje DMARC jako protokol pro autentizaci, politiku a reportování, který staví na SPF a DKIM a pomáhá chránit doménu před podvodnými e-maily ([DMARC.org Overview](https://dmarc.org/overview/)).

Praktický postup:

1. Sepište všechny systémy, které posílají e-maily za vaši doménu: schránky, webový formulář, fakturace, CRM, newsletter, transakční e-maily.
2. Nastavte SPF tak, aby zahrnoval jen skutečné odesílatele.
3. Zapněte DKIM pro hlavní e-mailovou službu i transakční odesílače.
4. Publikujte DMARC nejdřív opatrně s reportingem, vyhodnoťte legitimní zdroje a až potom zpřísňujte politiku.
5. Oddělte marketingové, transakční a osobní e-maily, aby jeden experiment nepoškodil celou doménu.

Příklad: SaaS posílá přihlašovací odkazy, faktury a newsletter ze stejné domény bez DMARC kontroly. Když marketing nahraje starý seznam kontaktů a reputace spadne, trpí i transakční e-maily. Lepší je oddělit subdomény, například `mail.example.cz` pro marketing a `notify.example.cz` pro transakční zprávy, a každou hlídat zvlášť.

### Analytika: měřte rozhodnutí, ne zvědavost

Analytika má odpovídat na otázky, ne vytvářet iluzi kontroly. Pro malý web obvykle nepotřebujete vědět všechno o každém člověku. Potřebujete vědět, odkud přichází relevantní návštěvy, které stránky pomáhají rozhodnutí, kde lidé opouštějí klíčový tok a jestli se zlepšuje kvalita poptávek.

Privacy-first přístup:

- Nepoužívejte měření jen proto, že je "standard".
- Nesbírejte osobní data, pokud neumíte říct, k čemu je potřebujete.
- Preferujte first-party měření, agregovaná data a krátkou retenci.
- Neposílejte data do reklamních ekosystémů bez jasného důvodu.
- Dejte lidem srozumitelnou informaci, co měříte a proč.
- Udržujte RSS, přímé odkazy a vlastní web jako primární distribuční kanály.

CNIL u měření návštěvnosti uvádí, že cookies pro audience measurement mohou být za určitých podmínek vyňaté ze souhlasu, pokud slouží jen měření publika pro vydavatele a produkují anonymní statistická data; zároveň upozorňuje na opatrnost u poskytovatelů a přenosů mimo EU ([CNIL: Cookies - solutions pour les outils de mesure d'audience](https://www.cnil.fr/fr/cookies-solutions-pour-les-outils-de-mesure-daudience)). To není univerzální právní rada pro každý stát a každý setup. Je to dobrý směr uvažování: méně sledování, jasný účel, žádné míchání dat s reklamními profily.

Tři metriky, které mají smysl na začátku:

- Kvalitní vstupy: kolik lidí přijde na stránky, které vysvětlují nabídku.
- Akce: kolik lidí udělá další krok, například kontakt, demo, RSS odběr nebo stažení materiálu.
- Kontext: z jakých kanálů přichází návštěvy, které vedou ke skutečné poptávce.

Naopak pozor na vanity metriky. Samotná návštěvnost neříká, jestli web pomáhá byznysu. Deset relevantních návštěv z dobrého článku může mít větší hodnotu než tisíc náhodných kliků z kampaně, která přivedla lidi mimo cílovou skupinu.

### Provozní mini dokumentace

Každý web by měl mít krátký provozní list. Nemusí to být román, stačí praktická stránka pro tým:

- Doména: registrátor, expirace, vlastník, přístup.
- DNS: kde se spravuje, kdo má přístup, datum posledního exportu.
- Hosting: poskytovatel, region, zálohy, obnova, odpovědná osoba.
- Deploy: jak se web nasazuje a jak se vrací poslední funkční verze.
- E-mail: poskytovatel, SPF, DKIM, DMARC, transakční odesílatelé.
- Analytika: co se měří, kde jsou data, retence, kdo má přístup.
- Incidenty: koho kontaktovat, kde jsou logy, jak ověřit dostupnost.

Tento dokument šetří hodiny při každé migraci, incidentu nebo předání projektu. A hlavně nutí tým přiznat, kde je chaos. Chaos není ostuda. Ostuda je tvářit se, že neexistuje, dokud nevyprší certifikát.

### Checklist kapitoly

- Je doména vlastněná firmou a má zapnuté bezpečné obnovení?
- Víte, kdo spravuje DNS a kde je záloha záznamů?
- Máte u důležitých domén zapnuté dvoufaktorové ověření?
- Běží web v regionu a režimu, který umíte vysvětlit zákazníkovi?
- Umíte obnovit web ze zálohy a víte, jak dlouho by to trvalo?
- Obnovují se HTTPS certifikáty automaticky a hlídá je monitoring?
- Má e-mail nastavené SPF, DKIM a DMARC?
- Jsou transakční a marketingové e-maily oddělené podle rizika?
- Víte, co přesně měří analytika a kde končí data návštěvníků?
- Existuje krátký provozní list, který pochopí i člověk mimo původní projekt?

Když tato vrstva funguje, web získá pevný základ. Neviditelný pro většinu návštěvníků, ale zásadní pro důvěru, doručitelnost, bezpečnost i klid týmu.

### Zdroje kapitoly

- [ICANN: DNSSEC - What Is It and Why Is It Important?](https://www.icann.org/resources/pages/dnssec-what-is-it-why-important-2019-03-05-en)
- [Let's Encrypt Documentation](https://letsencrypt.org/docs/?locale=en)
- [OWASP: Transport Layer Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html)
- [MDN: Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
- [DMARC.org Overview](https://dmarc.org/overview/)
- [CNIL: Cookies - solutions pour les outils de mesure d'audience](https://www.cnil.fr/fr/cookies-solutions-pour-les-outils-de-mesure-daudience)

## Kapitola 4: Frontend v praxi: UX, přístupnost, responzivita a výkon

Frontend není vrstva, kde se jen "nakreslí design". Je to místo, kde se potkává slib firmy s realitou návštěvníka. Pokud stránka vypadá hezky, ale člověk na mobilu netrefí tlačítko, formulář nejde vyplnit z klávesnice, text má nízký kontrast a načítání skáče pod rukama, design neslouží. Jen se tváří, že slouží.

Praktický frontend má čtyři cíle:

1. UX: návštěvník ví, kde je, co může udělat a co se stane potom.
2. Přístupnost: web je použitelný pro lidi s různými schopnostmi, zařízeními a situacemi.
3. Responzivita: obsah funguje na mobilu, tabletu, notebooku i velkém monitoru.
4. Výkon: stránka se rychle načte, rychle reaguje a vizuálně neposkakuje.

Tato kapitola není o módních frameworcích. Ty se mění. Principy zůstávají: jasný tok, sémantické HTML, čitelnost, klávesnice, rozumná velikost assets, testování na reálných zařízeních a respekt k soukromí.

### UX: nejdřív tok, potom komponenty

UX začíná otázkou: co chce člověk udělat a co mu v tom brání? Ne otázkou, jakou knihovnu komponent použijeme. Komponenty jsou až druhá vrstva. Když je špatně navržený tok, ani nejhezčí tlačítko ho nezachrání.

U webu pro službu si napište hlavní scénář:

1. Návštěvník přijde z vyhledávání nebo doporučení.
2. Během pár sekund pochopí, jestli je nabídka pro něj.
3. Najde důkaz důvěry.
4. Zjistí, jak vypadá spolupráce nebo produkt.
5. Udělá další krok: kontakt, demo, audit, RSS odběr nebo čtení detailu.

U SaaS produktu bývá první scénář jiný:

1. Návštěvník pochopí problém, který produkt řeší.
2. Ověří, že produkt sedí na jeho typ firmy nebo role.
3. Vidí konkrétní funkce a přínosy, ne jen obecné sliby.
4. Dostane bezpečný první krok: demo, trial, sandbox nebo konzultaci.
5. Po registraci rychle zažije první hodnotu.

Když tok neznáte, web začne nabízet všechno najednou: tři hlavní CTA, dvě navigace, chat, popup, newsletter a hero text, který se bojí říct konkrétní věc. Návštěvník pak neodchází proto, že by neměl zájem. Odchází proto, že ho web nutí skládat puzzle.

Praktický postup pro UX:

- Pro každou důležitou stránku určete jednu primární akci.
- Nad fold dejte jasný slib, pro koho je nabídka a proč věřit.
- Sekce řaďte podle otázek zákazníka, ne podle interní firemní struktury.
- Každý formulář zkraťte na údaje potřebné pro první odpověď.
- Chybové stavy pište lidsky a konkrétně.
- Po odeslání formuláře řekněte, co se stane dál.

Příklad kontaktního formuláře:

Slabé řešení:
"Jméno, firma, telefon, e-mail, rozpočet, termín, popis projektu, souhlas se zpracováním, newsletter, odeslat."

Silnější řešení:
"E-mail, krátký popis cíle, volitelné URL existujícího webu. Po odeslání: ozveme se s návrhem dalšího kroku, nepřidáme vás do marketingového seznamu."

Rozdíl je v respektu. První formulář chce hodně dřív, než si zasloužil důvěru. Druhý sbírá minimum pro další krok.

### Přístupnost: kvalita, která pomáhá všem

Přístupnost není charita ani checkbox pro audit. Je to normální kvalita produktu. Web, který funguje s klávesnicí, má čitelné texty, správné popisky formulářů a logickou strukturu nadpisů, pomáhá lidem se zrakovým, motorickým nebo kognitivním omezením. Zároveň pomáhá člověku v tramvaji na mobilu, unavenému zákazníkovi večer, prodejci s rozbitou myší i vyhledávači, který se snaží pochopit obsah.

W3C doporučuje pro dlouhodobější použitelnost pracovat s WCAG 2.2; WCAG 2.2 je doporučení W3C od 5. října 2023 a rozšiřuje předchozí verze 2.0 a 2.1 ([W3C: WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/), [W3C: Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/wcag/)). Pro běžný tým to neznamená memorovat celé specifikace. Znamená to brát přístupnost jako součást návrhu, vývoje a testování.

Evropský kontext je čím dál důležitější. European Accessibility Act se podle Evropské komise vztahuje na vybrané produkty a služby jako e-commerce, bankovní služby, e-knihy, elektronické komunikace nebo platební terminály; požadavky se aplikují na produkty a služby uváděné na trh po 28. červnu 2025 ([European Commission: European Accessibility Act](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en), [Your Europe: Services, goods and their digital accessibility](https://europa.eu/youreurope/business/selling-in-eu/selling-goods-services/accessibility/index_en.htm)). Toto není právní rada pro každý web. Je to jasný signál: přístupnost už není "hezké až někdy". Pro digitální produkty v Evropě patří do základní produktové hygieny.

Minimum přístupnosti pro web:

- Používejte sémantické HTML: `button` pro tlačítka, `a` pro odkazy, nadpisy ve správném pořadí.
- Každé pole formuláře má viditelný a programově spojený label.
- Interaktivní prvky jsou dostupné z klávesnice a mají viditelný focus.
- Text má dostatečný kontrast a není schovaný v obrázku.
- Obrázky, které nesou informaci, mají smysluplný alternativní text.
- Chyby ve formuláři jsou čitelné a říkají, jak je opravit.
- Navigace, nadpisy a landmarky dávají smysl i mimo vizuální layout.
- Animace a pohyb respektují nastavení uživatele, například omezení pohybu.

Codyho komentář: pokud tým tvrdí, že přístupnost "dodělá na konci", skoro jistě ji nedodělá. Na konci už se jen hasí rozpočet, termín a bugy. Přístupnost musí být ve výchozím návrhu komponent. Je to méně dramatické, levnější a má to menší šanci skončit jako PDF audit v šuplíku.

### Responzivita: mobil není zmenšený desktop

Responzivní web není desktop, který se nějak vejde na mobil. Mobil má jiný kontext: menší plochu, dotykové ovládání, horší síť, méně trpělivosti a často jasnější úkol. Člověk na mobilu chce rychle pochopit nabídku, najít adresu, kontakt, cenu, detail služby nebo další krok. Ne obdivovat komplikovanou animaci, která na notebooku vypadala efektně na poradě.

Dobrá responzivita začíná obsahem:

- Co musí být vidět hned?
- Co může být níž?
- Co se má sloučit, skrýt nebo přepsat?
- Jak se bude ovládat navigace?
- Jak dlouhé jsou nadpisy v češtině?
- Jak se chová formulář při chybě?

Technicky pomáhá mobile-first přístup. Ne proto, že by desktop nebyl důležitý, ale protože mobil nutí k prioritám. Když stránku nejdřív navrhnete pro omezený prostor, méně často skončíte s layoutem, který se na mobilu jen trapně láme.

Praktická pravidla:

- Nepoužívejte pevné výšky tam, kde může text narůst.
- Testujte dlouhé české texty v tlačítkách, kartách a navigaci.
- Dotykové cíle dělejte dost velké a s rozumnými rozestupy.
- Formulářová pole používejte s vhodným typem, například `email`, `tel`, `url`.
- Obrázky připravujte v responzivních velikostech a moderních formátech.
- Kritický obsah neschovávejte jen do hover stavů, protože dotyk hover nemá.
- Sticky prvky na mobilu používejte opatrně, ať nezaberou půl obrazovky.

Příklad: desktopová sekce se třemi kartami může na mobilu fungovat jako jedna pod druhou. To je v pořádku. Problém začne, když každá karta obsahuje dlouhý nadpis, dvě ikony, tlačítko a sekundární popis, takže z jednoduché sekce vznikne tříminutový scroll. Responzivita není jen změna gridu. Je to editace priority.

### Výkon: rychlost je produktová vlastnost

Výkon frontendu není jen skóre v nástroji. Je to zkušenost: stránka se objeví rychle, dá se použít, reaguje bez prodlevy a obsah se nehýbe pod prstem. Google popisuje Core Web Vitals jako sadu metrik pro uživatelskou zkušenost, aktuálně zaměřenou na LCP, INP a CLS ([web.dev: Web Vitals](https://web.dev/articles/vitals?hl=en)). Prakticky:

- LCP sleduje, kdy se načte hlavní viditelný obsah.
- INP sleduje, jak rychle stránka reaguje na interakce.
- CLS sleduje nečekané posuny layoutu.

Tyto metriky nejsou celý výkon, ale dávají dobrý jazyk pro diskuzi mezi vývojem, designem a byznysem. Místo "web mi přijde pomalý" můžete řešit: hlavní obrázek je moc těžký, JavaScript blokuje interakci, reklama nebo banner posouvá obsah, fonty způsobují přeskok.

Nejčastější brzdy:

- Obří hero obrázky bez responzivních variant.
- Příliš mnoho JavaScriptu na stránce, která by mohla být statická.
- Externí skripty pro analytiku, chat, heatmapy, reklamu a embed prvky.
- Fonty načítané z více zdrojů bez strategie.
- Klientské renderování tam, kde stačí serverový nebo statický HTML výstup.
- Komponenty, které překreslují víc, než musí.

Privacy-first výkon má jeden příjemný vedlejší efekt: když odstraníte zbytečné trackery, web je obvykle rychlejší. Méně externích požadavků znamená méně blokování, menší právní a bezpečnostní plochu a méně dat, která tečou mimo vaši kontrolu. To je vzácný typ optimalizace, která pomáhá uživateli, vývojáři i compliance.

Praktický výkonový postup:

1. Změřte reálnou stránku, ne prázdný template.
2. Rozdělte problém na načtení, interaktivitu a stabilitu layoutu.
3. Zkontrolujte obrázky, fonty a externí skripty.
4. Odstraňte nepotřebné věci dřív, než začnete složitě ladit.
5. Nastavte rozumné caching hlavičky pro statická aktiva.
6. U aplikace hlídejte bundle size a rozdělení kódu.
7. Po každé větší změně změřte znovu.

### Komponenty: design systém má chránit rozhodnutí

Design systém není sbírka hezkých kartiček ve Figmě. Dobrý design systém chrání tým před opakováním stejných rozhodnutí a před tichým rozpadem rozhraní. Pokud má každé tlačítko jinou velikost, každý formulář jiný styl chyb a každá karta jiné mezery, uživatel se učí web znovu na každé stránce.

Pro malý tým stačí jednoduchý komponentový základ:

- Typografie: velikosti, váhy, řádkování a maximální šířka textu.
- Barvy: primární akce, sekundární akce, text, okraje, chyby, úspěch.
- Tlačítka: primární, sekundární, destruktivní, disabled, loading.
- Formuláře: label, help text, chyba, validní stav, focus.
- Navigace: desktop, mobil, aktivní stav.
- Karty a seznamy: jednotné mezery, nadpisy, metadata, akce.
- Prázdné stavy: co se ukáže, když ještě nejsou data.
- Chybové stavy: co se stane, když něco selže.

U SaaS aplikace jsou prázdné a chybové stavy zvlášť důležité. První spuštění produktu často znamená, že uživatel nemá žádná data. Pokud místo promyšleného prázdného stavu vidí jen prázdnou tabulku, produkt působí mrtvě. Lepší je říct, co tu bude, proč to má hodnotu a jak udělat první krok.

Příklad prázdného stavu v B2B SaaS:

"Zatím nemáte žádné projekty. Vytvořte první projekt a přidejte členy týmu. Audit log a oprávnění zapneme automaticky."

To je lepší než:

"No data."

Jedna věta může změnit pocit z produktu. A ano, "No data" je možná krátké, ale taky je to produktový ekvivalent pokrčení ramen.

### Testování frontendu: nestačí screenshot z notebooku

Frontend testujte jako skutečnou zkušenost. Screenshot na velkém monitoru neřekne, jestli jde stránka ovládat klávesnicí, jestli formulář hlásí chybu srozumitelně, jestli mobilní menu nezakrývá obsah a jestli se stránka nerozbije při delším textu.

Minimum testování před vydáním:

- Mobil: otevřít hlavní stránku, navigaci, detail, formulář a potvrzení.
- Klávesnice: projít navigaci, tlačítka, formuláře a modal bez myši.
- Čtečka nebo alespoň accessibility tree: ověřit názvy tlačítek, labely a pořadí.
- Výkon: změřit hlavní stránky a zkontrolovat obrázky, skripty, fonty.
- Chybové stavy: prázdný formulář, špatný e-mail, výpadek API, pomalé načítání.
- Texty: dlouhé české nadpisy, delší jména, prázdná data, vícejazyčné varianty.
- Soukromí: zkontrolovat, jaké externí domény se načítají a proč.

U marketingového webu často stačí ruční smoke test a pár automatických kontrol. U SaaS aplikace už se vyplatí automatizovat klíčové toky: registrace, přihlášení, vytvoření hlavního objektu, pozvánka uživatele, billing nebo export. Ne proto, že testy jsou módní, ale protože rozbitý onboarding nebo billing je drahý bug.

### Checklist kapitoly

- Má každá důležitá stránka jeden jasný primární tok?
- Je hlavní sdělení pochopitelné bez znalosti interního žargonu?
- Fungují odkazy, tlačítka, formuláře a navigace z klávesnice?
- Mají formulářová pole labely a chybové hlášky, které pomáhají opravit problém?
- Je text čitelný kontrastem, velikostí a délkou řádku?
- Funguje layout na mobilu bez překrývání a bez skrytých klíčových akcí?
- Jsou obrázky optimalizované, responzivní a mají alternativní text, pokud nesou význam?
- Víte, kolik externích skriptů stránka načítá a proč?
- Hlídáte LCP, INP a CLS alespoň u hlavních stránek?
- Máte promyšlené prázdné, chybové a loading stavy?
- Testujete reálné scénáře, ne jen vzhled na jednom monitoru?
- Umíte zákazníkovi říct, jak frontend podporuje privacy-first provoz?

Frontend je dobrý ve chvíli, kdy mizí z cesty. Návštěvník se nemusí učit rozhraní, bojovat s formulářem ani čekat na zbytečné skripty. Prostě chápe, věří a může pokračovat. To je méně efektní než animovaná homepage, ale výrazně užitečnější.

### Zdroje kapitoly

- [W3C: WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [W3C: Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/wcag/)
- [European Commission: European Accessibility Act](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en)
- [Your Europe: Services, goods and their digital accessibility](https://europa.eu/youreurope/business/selling-in-eu/selling-goods-services/accessibility/index_en.htm)
- [web.dev: Web Vitals](https://web.dev/articles/vitals?hl=en)

## Kapitola 5: Obsahová architektura: jak návštěvníka dovést k akci

Obsahová architektura je rozhodnutí, co má být na webu, kde to má být, jak se to jmenuje a v jakém pořadí se to člověku ukáže. Není to jen sitemapa. Je to způsob, jak web přemění chaos firmy na srozumitelnou cestu pro zákazníka.

Špatná obsahová architektura často nevypadá jako technický problém. Web může být rychlý, hezký a responzivní, ale návštěvník se pořád ztrácí. Neví, jaký typ služby vybrat, jestli je produkt pro něj, kde najde cenu, proč má vyplnit formulář a co bude následovat. Firma pak problém řeší dalšími sekcemi, dalšími tlačítky a dalšími texty. Tím ale často jen přidá další patro do domu, který nemá schody.

Dobrá obsahová architektura dělá tři věci:

1. Pomáhá návštěvníkovi rychle poznat, jestli je na správném místě.
2. Řadí informace podle rozhodovacího procesu zákazníka, ne podle interní organizační struktury.
3. Vede k dalšímu kroku bez nátlaku, mlhy a zbytečných datových požadavků.

GOV.UK content design metodika staví obsah na uživatelských potřebách: každá část webu a každý publikovaný obsah má naplňovat platnou potřebu uživatele ([GOV.UK: User needs](https://www.gov.uk/guidance/content-design/user-needs)). Pro komerční weby to platí stejně. Rozdíl je jen v tom, že vedle uživatelské potřeby musí být jasný i obchodní účel.

### Začněte úkolem, ne menu

Častá chyba je začít navigací: "Dáme tam O nás, Služby, Reference, Blog, Kontakt." To může být v pořádku jako výsledek, ale je to špatný začátek. Menu není strategie. Menu je zkrácený odraz toho, co má návštěvník udělat.

Lepší začátek je seznam úkolů návštěvníka:

- Chci zjistit, jestli tato firma řeší můj typ problému.
- Chci porovnat službu s tím, co už používám.
- Chci vědět, jak vypadá první krok spolupráce.
- Chci najít důkaz, že firma zvládla podobný projekt.
- Chci pochopit cenu nebo alespoň cenový model.
- Chci si ověřit, jak firma nakládá s daty.
- Chci kontaktovat tým bez toho, aby mě někdo nahnal do newsletteru.

Z těchto úkolů vzniká struktura. Ne naopak. Pokud návštěvník potřebuje porozumět procesu před kontaktem, stránka "Jak spolupráce probíhá" může mít větší hodnotu než obecná stránka "O nás". Pokud zákazníci často řeší bezpečnost dat, stránka o provozu, bezpečnosti a soukromí není právní přívěsek. Je to prodejní argument.

Příklad pro firmu, která vyvíjí interní aplikace:

Slabá struktura:

- O nás
- Služby
- Technologie
- Reference
- Blog
- Kontakt

Silnější struktura:

- Co stavíme
- Pro koho je to vhodné
- Jak probíhá první analýza
- Ukázky řešení
- Bezpečnost a provoz v EU
- Praktické články
- Domluvit úvodní hovor

Druhá varianta není magicky správná pro každý web. Je ale blíž otázkám, které zákazník řeší před rozhodnutím. A přesně tam má obsahová architektura začínat.

### Inventura obsahu: nejdřív zjistěte, co už máte

Před redesignem nebo novou strukturou udělejte inventuru obsahu. Ne v hlavě. Do tabulky. Každá existující stránka, článek, PDF, případová studie, landing page, formulář a často i důležitý e-mail patří do přehledu.

U každé položky si napište:

- URL nebo umístění.
- Typ obsahu: stránka služby, článek, case study, formulář, dokumentace, právní text.
- Primární uživatelský úkol.
- Obchodní účel.
- Cílová skupina nebo fáze zákazníka.
- Hlavní další krok.
- Stav: ponechat, sloučit, přepsat, smazat, archivovat.
- Vlastník obsahu a datum poslední kontroly.

Tento krok bývá nepříjemný, protože ukáže duplicity a historické kompromisy. To je dobře. Obsah, který nikdo nevlastní a nikomu nepomáhá, je provozní dluh. Zhoršuje navigaci, SEO, důvěru i údržbu.

Praktické pravidlo: pokud stránka nemá jasný úkol, buď ji přepište, sloučte s jinou stránkou, nebo ji odstraňte. Web není sklad. Každá stránka má stát námahu, kterou vyžaduje její údržba.

Codyho komentář: největší obsahový luxus není psát víc. Největší luxus je mazat. Smazat stránku, která kdysi vznikla kvůli jedné kampani, ale dnes mate zákazníky, je tichý produktový úklid. Nikdo vám za něj netleská, ale web se najednou lépe dýchá.

### Stránky podle fáze rozhodování

Návštěvníci nejsou ve stejné fázi. Někdo problém teprve pojmenovává. Někdo porovnává dodavatele. Někdo už chce poslat poptávku. Když web mluví na všechny stejně, působí buď příliš obecně, nebo příliš agresivně.

Užitečné je rozdělit obsah podle čtyř fází:

1. Orientace: člověk zjišťuje, co problém znamená a jaké má možnosti.
2. Vhodnost: ověřuje, jestli vaše řešení sedí na jeho situaci.
3. Důvěra: hledá důkazy, proces, zkušenost, bezpečnost a rizika.
4. Akce: chce udělat konkrétní další krok.

Pro každou fázi se hodí jiný obsah:

- Orientace: vysvětlující články, slovníky, srovnání přístupů, praktické checklisty.
- Vhodnost: stránky pro konkrétní segmenty, use casy, příklady problémů, limity řešení.
- Důvěra: případové studie, ukázky práce, proces spolupráce, bezpečnost, privacy-first provoz, tým.
- Akce: kontaktní stránka, demo, audit, kalkulace, onboarding, jasné potvrzení po odeslání.

Příklad pro SaaS nástroj:

- Článek: "Jak poznat, že už tabulka nestačí na řízení projektů" pomáhá orientaci.
- Stránka: "Pro malé výrobní firmy" řeší vhodnost.
- Case study: "Jak tým zkrátil schvalování zakázek z pěti dnů na jeden" buduje důvěru.
- Demo stránka: "Vyzkoušet ukázkový workflow bez registrace" vede k akci.

Ne každá firma potřebuje všechny typy hned. Ale každá firma by měla vědět, kterou fázi její web pokrývá dobře a kde má díru.

### Navigace: méně položek, více významu

Navigace má pomáhat orientaci, ne ukázat kompletní organizační mapu firmy. Lidé nečtou menu jako interní tým. Hledají slova, která odpovídají jejich situaci. Nielsen Norman Group ve svých heuristikách připomíná, že rozhraní má mluvit jazykem uživatele a používat pojmy, které jsou mu známé ([NN/g: 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)). To platí i pro názvy položek v navigaci.

Dobrá navigace:

- Používá konkrétní názvy, ne interní kódy a módní zkratky.
- Má omezený počet hlavních položek.
- Odděluje primární akci od běžné navigace.
- Nezakrývá důležité stránky jen proto, že se nevešly do původního menu.
- Na mobilu zůstává použitelná a nepůsobí jako rozbalený archiv.

Slabé názvy:

- Solutions
- Platforma
- Inovace
- Resources
- Kontaktujte nás

Silnější názvy:

- Weby a aplikace
- SaaS MVP
- Provoz v EU
- Případové studie
- Praktické články
- Domluvit hovor

Názvy nemusí být nudné. Musí být rozpoznatelné. Kreativní navigace je často zábavná hlavně pro tým, který ji vymyslel. Návštěvník za ni platí pozorností.

### Struktura stránky: odpovědi ve správném pořadí

Obsahová architektura není jen strom webu. Je to i struktura jednotlivé stránky. Dobrá stránka má vnitřní dramaturgii: řadí otázky tak, aby člověk mohl postupně říct "ano, chápu, tohle je pro mě, věřím tomu, vím co dál".

U stránky služby funguje jednoduchý rámec:

1. Jasný slib: co řešíte a pro koho.
2. Situace zákazníka: kdy tato služba dává smysl.
3. Výsledek: co zákazník získá.
4. Proces: jak spolupráce probíhá.
5. Důkazy: reference, ukázky, čísla, zkušenosti.
6. Rizika a limity: kdy to vhodné není nebo co je potřeba připravit.
7. Soukromí a provoz: jak zacházíte s daty.
8. Další krok: konkrétní akce a co se stane po ní.

U produktové stránky může být pořadí jiné:

1. Problém a cílový uživatel.
2. Hlavní workflow.
3. Ukázka produktu.
4. Integrace a data.
5. Bezpečnost, role, audit logy.
6. Pricing nebo způsob nacenění.
7. Demo, trial nebo konzultace.

Důležité je nevysypat všechno najednou. Každá sekce má odpovědět na konkrétní otázku. Pokud sekce neumí být pojmenovaná otázkou nebo jasným účelem, pravděpodobně je jen výplň.

### Nadpisy jako mapa

Nadpisy nejsou dekorace. Jsou mapa stránky. Pomáhají lidem skenovat obsah, čtečkám obrazovky orientovat se ve struktuře a vyhledávačům pochopit vztahy mezi částmi textu. W3C Web Accessibility Initiative doporučuje nadpisy vnořovat podle úrovní a používat je k označení sekcí podle vztahu a důležitosti ([W3C WAI: Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/)). Obecný tutorial ke struktuře stránky vysvětluje, že dobře strukturovaný obsah pomáhá navigaci a orientaci ([W3C WAI: Page Structure Tutorial](https://www.w3.org/WAI/tutorials/page-structure/)).

Praktický test: přečtěte si jen nadpisy stránky. Bez odstavců. Dává stránka smysl? Je jasné, komu pomáhá, jakou hodnotu slibuje, jaké důkazy nabízí a co má člověk udělat dál?

Slabá struktura nadpisů:

- Moderní řešení
- Naše výhody
- Proč my
- Jak to funguje
- Kontakt

Silnější struktura:

- Interní aplikace pro týmy, které přerostly tabulky
- Kdy dává vlastní aplikace smysl
- Co získáte po prvních čtyřech týdnech
- Jak chráníme data a provozujeme systém v Evropě
- Jak probíhá úvodní analýza
- Domluvte první technický hovor

Silnější nadpisy nesou obsah i bez okolního textu. To je dobré pro lidi, přístupnost i interní tým. Když nadpis neumí nic říct, často pod ním nebude mnoho hodnoty.

### Formuláře a datové požadavky patří do architektury

Formulář není jen komponenta na konci stránky. Je to součást obsahové architektury, protože rozhoduje, kdy a kolik důvěry po návštěvníkovi chcete.

Privacy-first přístup tady znamená:

- Ptát se jen na údaje potřebné pro první odpověď.
- Jasně říct, co se stane po odeslání.
- Oddělit kontakt od marketingového odběru.
- Nepoužívat skryté trackery a enrichment služby bez jasného důvodu.
- U citlivějších projektů vysvětlit, jak se s poptávkou a přílohami zachází.

Slabý formulář na konci stránky:

- Jméno
- Firma
- E-mail
- Telefon
- Rozpočet
- Termín
- Počet zaměstnanců
- Jak jste se o nás dozvěděli
- Souhlas s obchodními podmínkami
- Souhlas s marketingem
- Zpráva

Silnější první kontakt:

- E-mail
- Co chcete zlepšit nebo postavit?
- URL existujícího webu nebo produktu, pokud existuje
- Volitelně: preferovaný termín odpovědi

Vedle formuláře:

"Ozveme se s návrhem dalšího kroku. Nepřidáme vás do marketingového seznamu a údaje použijeme jen k odpovědi na poptávku."

To není jen hezká věta. Je to obsahové rozhodnutí, které snižuje nejistotu a sbírá méně dat.

### Provoz obsahu: kdo to bude udržovat

Obsahová architektura bez údržby stárne rychle. Změní se služby, tým, ceny, integrace, reference, právní texty, hosting, produktové screenshoty a interní proces. Pokud nikdo nemá odpovědnost, web začne lhát omylem.

U každého důležitého typu obsahu určete:

- Kdo je vlastník.
- Jak často se kontroluje.
- Jak poznáte, že je obsah zastaralý.
- Kde se evidují změny.
- Kdo schvaluje právní, bezpečnostní a privacy-first tvrzení.

Praktické intervaly:

- Homepage a hlavní služby: kontrola jednou za kvartál.
- Case studies: kontrola při významné změně nabídky nebo po roce.
- Pricing: kontrola při každé produktové změně.
- Privacy, cookies a provozní informace: kontrola při každé změně nástroje, hostingu nebo měření.
- Blogové články s návody: kontrola podle rizika zastarání.

U evergreen článků stačí občasný refresh. U článků o právu, nástrojích, cenách a konkrétních technologiích musí být revize přísnější. Zastaralý článek může být horší než žádný článek, protože působí důvěryhodně a přitom vede špatným směrem.

### Praktický workshop obsahové architektury

Pro malý web stačí devadesát minut a tabule. Cíl není vytvořit dokonalou sitemapu. Cíl je zjistit, co má web skutečně říct a co překáží.

Postup:

1. Sepište tři nejdůležitější typy návštěvníků.
2. Ke každému napište pět otázek, které má před kontaktem.
3. Označte otázky, na které současný web odpovídá dobře.
4. Označte otázky, které web neřeší nebo schovává příliš hluboko.
5. Seřaďte otázky podle toho, jak zákazník rozhoduje.
6. Navrhněte stránky nebo sekce, které na tyto otázky odpoví.
7. Ke každé stránce napište jeden hlavní další krok.
8. Vyhoďte nebo sloučte obsah, který nemá jasný úkol.

Výstup může být jednoduchý:

- Homepage: jasná nabídka, segmenty, důkaz, privacy-first provoz, CTA.
- Služba: co řeší, pro koho, proces, výstup, důkazy, další krok.
- Provoz a data: EU hosting, analytika, zálohy, bezpečnostní principy.
- Případové studie: konkrétní problém, postup, výsledek, co se dá zopakovat.
- Články: orientace, vysvětlení, checklisty, návody.
- Kontakt: minimum polí, jasné očekávání, žádný automatický marketing.

Taková mapa je lepší než desetistránková strategie, kterou nikdo nepoužije. Stačí, když pomůže týmu psát, mazat a řadit obsah s větší disciplínou.

### Checklist kapitoly

- Vychází struktura webu z uživatelských úkolů, ne jen z interních oddělení?
- Má každá důležitá stránka jasný primární účel?
- Víte, ve které fázi rozhodování návštěvník na stránku přichází?
- Odpovídá navigace slovníku zákazníka?
- Dávají nadpisy smysl i bez čtení odstavců?
- Má každá stránka jeden hlavní další krok?
- Máte inventuru existujícího obsahu a rozhodnutí: ponechat, přepsat, sloučit, smazat?
- Sbírají formuláře jen data potřebná pro první odpověď?
- Je privacy-first provoz vysvětlený jako součást důvěry, ne schovaný jen v právních textech?
- Má každý klíčový obsah vlastníka a interval kontroly?
- Umíte říct, které stránky by měly zmizet, protože už nikomu nepomáhají?

Obsahová architektura je dobrá tehdy, když návštěvník nemusí hádat. Web mu postupně odpovídá, ukazuje důkazy, nechává prostor na rozhodnutí a nabízí férový další krok. Méně křiku, více orientace. To je pro obchod často účinnější než další banner s velkým slibem.

### Zdroje kapitoly

- [GOV.UK: Content design - User needs](https://www.gov.uk/guidance/content-design/user-needs)
- [GOV.UK Service Manual: Learning about users and their needs](https://www.gov.uk/service-manual/user-centred-design/user-needs)
- [Nielsen Norman Group: 10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [W3C WAI: Page Structure Tutorial](https://www.w3.org/WAI/tutorials/page-structure/)
- [W3C WAI: Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/)

## Kapitola 6: SEO pro lidi i vyhledávače

SEO není trik, jak přelstít vyhledávač. Dobré SEO je disciplína, která pomáhá správným lidem najít správnou odpověď ve správný moment. Technické detaily jsou důležité, ale bez užitečného obsahu, jasné struktury a důvěryhodnosti jen zrychlují cestu k prázdné stránce.

Google ve své dokumentaci k helpful content zdůrazňuje obsah vytvářený primárně pro lidi, ne pro manipulaci vyhledávacích systémů ([Google Search Central: Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)). To je dobrý kompas i pro menší české firmy: pište a stavte stránky tak, aby návštěvník opravdu dostal odpověď, ne aby stránka jen obsahovala správná klíčová slova.

Praktické SEO stojí na šesti vrstvách:

1. Záměr hledání: proč člověk dotaz píše a co chce rozhodnout.
2. Obsah: konkrétní odpověď, důkazy, příklady a další krok.
3. Struktura webu: srozumitelné URL, nadpisy, interní odkazy a sitemap.
4. Technická dostupnost: crawler se k obsahu dostane a stránka se dá indexovat.
5. Důvěra: autorita, zkušenost, transparentnost a aktualizace.
6. Měření: sledujete dotazy a konverze, ne jen návštěvnost.

SEO tedy není samostatná magie vedle webu. Je to průnik produktového myšlení, obsahu, UX a technického pořádku.

### Začněte záměrem, ne klíčovým slovem

Klíčové slovo je jen stopa. Záměr je důvod, proč člověk hledá. Dotaz "SaaS MVP cena" může znamenat: chci rychlý odhad rozpočtu, porovnávám dodavatele, připravuji interní business case, nebo jen zjišťuji, jestli nejsem mimo realitu. Stránka, která odpoví jen "děláme SaaS MVP na míru", záměr nevyřeší.

U každého důležitého tématu si napište:

- Kdo to hledá?
- V jaké je fázi rozhodování?
- Jakou obavu potřebuje snížit?
- Jak konkrétní odpověď očekává?
- Jaký další krok je férový?

Příklad pro agenturu nebo produktové studio:

Dotaz: "kolik stojí vývoj webové aplikace"

Slabá odpověď:
"Cena záleží na rozsahu, kontaktujte nás."

Silnější odpověď:
"Jednoduchý interní nástroj, zákaznický portál a plnohodnotný SaaS produkt mají jiná rizika. Cena se typicky skládá z analýzy, návrhu datového modelu, vývoje, testování, provozu a podpory. Před přesným odhadem potřebujeme znát uživatele, klíčový workflow, integrace, bezpečnostní požadavky a způsob provozu."

Druhá varianta neslibuje falešnou přesnost. Ale pomáhá člověku pochopit, z čeho se rozhodnutí skládá. To je užitečnější než univerzální kalkulačka, která na konci stejně řekne "od".

### Tématické clustery místo osamělých článků

Osamělý článek může přivést návštěvu. Tématický cluster buduje důvěru. Pokud chcete být dohledatelní na téma "privacy-first SaaS v Evropě", nestačí jeden článek s tímto nadpisem. Potřebujete síť obsahu, která pokrývá praktické otázky:

- Jak vybrat evropský hosting pro SaaS.
- Co patří do privacy-first analytiky.
- Jak oddělit produktová data, logy a marketing.
- Jak vysvětlit zákazníkům zpracování dat.
- Jak dělat onboarding bez zbytečných trackerů.
- Jak nastavit export dat a právo odejít.

Google SEO Starter Guide doporučuje organizovat podobné stránky do smysluplných adresářů a používat popisné URL, které pomáhají lidem pochopit obsah výsledku ([Google Search Central: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)). Prakticky to znamená, že struktura webu má odpovídat tématům, ne náhodnému pořadí publikace.

Příklad struktury:

- `/saas/`
- `/saas/mvp/`
- `/saas/architektura/`
- `/saas/privacy-first-provoz/`
- `/saas/onboarding/`
- `/saas/pricing/`

Taková struktura pomáhá návštěvníkům, editorům i vyhledávačům. Člověk se neztratí, tým ví, kam nový obsah patří, a interní odkazy dávají smysl.

Codyho komentář: pokud má blog dvacet článků a každý je v jiné kategorii, není to informační architektura. To je konfety CMS. Kategorie mají pomáhat rozhodování, ne sloužit jako šuplík pro momentální náladu autora.

### Stránka musí odpovědět lépe než konkurence

SEO text není delší text. Je to lepší odpověď. Někdy je lepší odpověď krátká tabulka. Jindy detailní návod, checklist, kalkulační rámec, diagram procesu nebo konkrétní příklad.

Při návrhu stránky si udělejte mini analýzu:

1. Otevřete výsledky hledání na hlavní dotaz.
2. Zapište, jaké typy odpovědí se opakují.
3. Najděte, co je povrchní, zastaralé nebo nepřesné.
4. Doplňte vlastní zkušenost, příklad nebo rozhodovací rámec.
5. Přidejte jasný další krok pro člověka, který nechce hned nakupovat.

Příklad: článek "Jak vybrat analytiku pro web" by neměl jen vyjmenovat nástroje. Lepší struktura:

- Jaké rozhodnutí chcete díky analytice dělat.
- Co opravdu potřebujete měřit na začátku.
- Kdy stačí privacy-friendly agregovaná analytika.
- Kdy už řešíte produktovou analytiku.
- Jak se ptát na region, retenci a přístup k datům.
- Checklist pro výběr.

Tento přístup je silnější, protože návštěvník odchází schopnější. A schopnější návštěvník častěji důvěřuje autorovi.

### Title, meta description a nadpisy bez akrobacie

Title a meta description nejsou místo pro sloganovou gymnastiku. Mají říct, co stránka nabízí a proč je relevantní. Google u title linků vysvětluje, že jejich generování je automatické a vychází z obsahu stránky i dalších signálů; doporučuje proto popisné, konkrétní a výstižné titulky ([Google Search Central: Influencing title links](https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets)).

Praktická pravidla:

- Každá indexovatelná stránka má unikátní title.
- Title obsahuje konkrétní téma, ne jen název firmy.
- Meta description shrnuje hodnotu stránky pro člověka.
- H1 odpovídá skutečnému obsahu stránky.
- Nadpisy tvoří skenovatelnou mapu, ne sbírku marketingových hesel.
- Nepište různé sliby do title, H1 a hero textu. Stránka má držet jednu myšlenku.

Slabý title:
"Moderní řešení pro vaše podnikání | Firma"

Silnější title:
"Vývoj SaaS MVP pro B2B firmy | Firma"

Slabá meta description:
"Jsme inovativní tým, který pomáhá firmám růst pomocí moderních technologií."

Silnější meta description:
"Navrhujeme a vyvíjíme první SaaS MVP pro B2B firmy: analýza workflow, datový model, role, audit logy, integrace a provoz v EU."

Rozdíl není v délce. Rozdíl je v konkrétnosti.

### Indexace: crawler musí vidět to, co má být nalezeno

Když stránka není dostupná pro crawler, SEO končí dřív, než začne. U moderních webů se často stává, že obsah existuje pro člověka v prohlížeči, ale je zbytečně těžký, schovaný za klientským renderováním, blokovaný v `robots.txt`, kanonizovaný na špatnou URL nebo označený `noindex`.

Technické minimum:

- Důležité stránky vrací HTTP `200`.
- Přesměrování jsou jednoduchá a vedou na finální kanonickou URL.
- Každá důležitá stránka má samoreferenční canonical nebo jasně určenou kanonickou verzi.
- Interní odkazy používají normální `a href`, ne jen JavaScript akce.
- `robots.txt` neblokuje kritické stránky ani potřebné zdroje pro render.
- `noindex` je jen tam, kde ho opravdu chcete.
- Sitemap obsahuje jen kanonické, indexovatelné a důležité URL.

Google dokumentace upozorňuje, že `robots.txt` slouží primárně k řízení crawler trafficu a není vhodný způsob, jak skrýt webové stránky z výsledků hledání; pro skutečné vyřazení stránky z výsledků je potřeba použít jiné metody, například `noindex` nebo ochranu heslem ([Google Search Central: robots.txt introduction](https://developers.google.com/search/docs/crawling-indexing/robots/intro)). To je častý zdroj chyb: tým zablokuje stránku v `robots.txt` a čeká, že tím vyřešil soukromí. Nevyřešil. Jen dal crawleru pokyn, aby obsah neprocházel.

### Sitemap a robots.txt: jednoduché, čitelné, bez kouzel

Sitemap není náhradní navigace a sama o sobě nezaručuje indexaci. Je to seznam URL, které považujete za důležité. Google popisuje sitemap jako soubor, který pomáhá vyhledávačům efektivněji procházet web a poskytuje informace o stránkách a souborech, které považujete za důležité ([Google Search Central: What is a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)).

Dobrá sitemap:

- obsahuje jen URL, které chcete indexovat,
- používá finální canonical URL,
- neobsahuje přesměrování, chyby, staging nebo duplicity,
- aktualizuje se při publikaci a mazání obsahu,
- je uvedená v `robots.txt` nebo odeslaná ve vyhledávacích nástrojích.

Dobré `robots.txt`:

- je na správném hostu, například `https://example.cz/robots.txt`,
- neobsahuje historické zákazy bez vlastníka,
- uvádí sitemap pomocí absolutní URL,
- neblokuje CSS a JavaScript, které crawler potřebuje k pochopení stránky,
- nepředstírá bezpečnost.

Příklad jednoduchého `robots.txt`:

```txt
User-agent: *
Allow: /

Sitemap: https://example.cz/sitemap.xml
```

U citlivých nebo neveřejných částí nepoužívejte `robots.txt` jako zámek. Použijte autentizaci, neveřejné prostředí, správná oprávnění a u veřejně dostupných stránek `noindex`, pokud mají zůstat mimo výsledky.

### Strukturovaná data: pomozte strojům, ale nelžete jim

Strukturovaná data pomáhají popsat obsah stránky strojově čitelným způsobem. Pro běžný web se typicky hodí `Organization`, `WebSite`, `Article`, `BreadcrumbList`, `Product`, `FAQPage` nebo `SoftwareApplication`, podle reálného obsahu.

Google dokumentace říká, že většina strukturovaných dat pro Search používá slovník schema.org, ale pro chování ve výsledcích Google Search je určující dokumentace Google Search Central; zároveň doporučuje používat kompletní a přesná doporučená data místo snahy vyplnit všechno za každou cenu ([Google Search Central: Intro to structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)).

Praktická pravidla:

- Značkujte jen to, co je viditelné nebo pravdivě reprezentované na stránce.
- Nepřidávejte fake recenze, ceny, FAQ nebo hodnocení.
- Používejte JSON-LD, pokud to stack dovoluje.
- Testujte výstup ve validátorech a po deployi sledujte chyby.
- U článků vyplňte autora, datum publikace, datum aktualizace a hlavní obrázek.
- U firmy držte konzistentní název, URL, logo a kontaktní informace.

Strukturovaná data nejsou turbo tlačítko pro ranking. Jsou způsob, jak snížit nejednoznačnost. Když stránka neumí odpovědět člověku, JSON-LD ji nezachrání. Jen dá přesný popisek špatnému obsahu.

### Interní odkazy: navigace pro lidi i roboty

Interní odkazy říkají, co spolu souvisí. Blogový článek o SaaS MVP má odkazovat na stránku služby, checklist MVP, článek o datovém modelu a třeba kapitolu o privacy-first provozu. Ne proto, aby se "rozlil link juice", ale protože čtenář potřebuje další kontext.

Dobré interní odkazy:

- používají konkrétní anchor text,
- vedou na relevantní další krok,
- propojují nové články se staršími důležitými stránkami,
- pomáhají procházet cluster od obecného k detailu,
- nevnucují CTA v každém odstavci.

Slabý anchor:
"Klikněte zde"

Silnější anchor:
"checklist pro SaaS MVP"

U privacy-first webu mají interní odkazy ještě jednu výhodu: udržují distribuci na vlastním webu. Člověk nemusí přes sociální síť, reklamní pixel nebo uzavřený newsletterový nástroj, aby se dostal k dalšímu užitečnému obsahu. RSS, přímé odkazy a čitelná struktura jsou pořád velmi silná infrastruktura.

### Měření SEO bez šmírování

SEO se dá měřit bez toho, aby web posílal návštěvníka do pěti reklamních ekosystémů. Na začátku stačí kombinace Search Console, serverových logů, privacy-friendly analytiky a vlastních obchodních dat.

Sledujte hlavně:

- dotazy, na které se web zobrazuje,
- stránky, které přivádějí relevantní návštěvy,
- články, po kterých lidé pokračují na službu, demo nebo kontakt,
- obsah, který získává přímé odkazy nebo citace,
- formuláře a konverze bez automatického přihlášení do marketingového seznamu,
- témata, kde lidé hledají odpověď, ale web ji zatím nemá.

Nesledujte jen průměrnou pozici. Pozice bez kontextu umí mást. Jeden článek může mít menší návštěvnost, ale přivádět přesné B2B poptávky. Jiný může mít hodně návštěv, ale žádnou obchodní hodnotu. SEO je obchodní kanál, ne soutěž v grafu.

Praktický měsíční SEO rituál:

1. Vyberte deset stránek s největším potenciálem.
2. U každé zkontrolujte dotazy, CTR a další krok.
3. Najděte stránky, které mají zobrazení, ale slabý proklik.
4. Upravte title, meta description nebo úvod, pokud neodpovídají záměru.
5. Doplňte interní odkazy ze souvisejících článků.
6. Aktualizujte zastaralé části s datem poslední revize.
7. Zkontrolujte, jestli stránka stále sbírá jen potřebná data.

### SEO checklist pro novou stránku

Před publikací nové stránky projděte krátký checklist:

- Je jasné, pro koho stránka je a jaký záměr řeší?
- Odpovídá stránka konkrétněji než obecný konkurenční obsah?
- Má unikátní title, meta description a jedno hlavní H1?
- Dávají nadpisy smysl jako samostatná mapa stránky?
- Je URL krátká, popisná a stabilní?
- Vede stránka na férový další krok?
- Obsahuje interní odkazy na související stránky a z nich zpět?
- Je stránka indexovatelná, bez nechtěného `noindex` nebo blokace v `robots.txt`?
- Je uvedená v sitemap, pokud patří mezi důležité URL?
- Má canonical na správnou finální URL?
- Jsou obrázky optimalizované a mají smysluplný alternativní text?
- Jsou strukturovaná data pravdivá, validní a odpovídají skutečnému obsahu?
- Je jasné, kdy se stránka má znovu zkontrolovat?
- Nepřibyly kvůli měření zbytečné trackery?

SEO pro lidi i vyhledávače je ve výsledku poctivá práce s významem. Řekněte jasně, co víte. Ukažte důkazy. Udržujte technický pořádek. Nechte lidi číst a rozhodovat bez zbytečného sledování. Vyhledávače se mění, ale dobrá odpověď, důvěra a srozumitelná struktura mají pořád hodnotu.

### Zdroje kapitoly

- [Google Search Central: Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google Search Central: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google Search Central: Influencing title links in Google Search](https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets)
- [Google Search Central: robots.txt introduction and guide](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
- [Google Search Central: What is a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Google Search Central: Intro to structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)

## Pracovní log

- 2026-05-04: Založena osnova e-booku a rozepsána první kapitola.
- 2026-05-04: Dopsána kapitola 2 o hodnocení dobrého webu podle rychlosti, důvěry, obsahu a konverzí.
- 2026-05-05: Dopsána kapitola 3 o technickém základu webu: doména, hosting, DNS, HTTPS/TLS, e-mail a privacy-first analytika.
- 2026-05-05: Dopsána kapitola 4 o praktickém frontendu: UX, přístupnost, responzivita, výkon, komponenty a testování.
- 2026-05-05: Dopsána kapitola 5 o obsahové architektuře: uživatelské úkoly, inventura obsahu, navigace, struktura stránek, formuláře a údržba.
- 2026-05-05: Dopsána kapitola 6 o SEO pro lidi i vyhledávače: záměr hledání, tématické clustery, indexace, sitemap, strukturovaná data, interní odkazy a privacy-first měření.
