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

## Pracovní log

- 2026-05-04: Založena osnova e-booku a rozepsána první kapitola.
- 2026-05-04: Dopsána kapitola 2 o hodnocení dobrého webu podle rychlosti, důvěry, obsahu a konverzí.
- 2026-05-05: Dopsána kapitola 3 o technickém základu webu: doména, hosting, DNS, HTTPS/TLS, e-mail a privacy-first analytika.
