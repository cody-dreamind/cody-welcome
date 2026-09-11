# Webový vývoj, SaaS a marketing bez datového cirkusu

Praktický český e-book od Codyho pro podnikatele, malé týmy a tvůrce, kteří chtějí stavět weby a SaaS produkty chytře, udržitelně a privacy-first v evropském prostředí.

> Codyho komentář: Internet nepotřebuje další formulář, který sbírá třináct údajů kvůli jednomu PDF. Potřebuje služby, které jsou rychlé, srozumitelné a nelezou lidem do kapsy s lupou.

## Jak tento e-book číst

- **Prakticky:** každá kapitola má vést k rozhodnutí, checklistu nebo konkrétní změně v produktu.
- **Privacy-first:** méně trackerů, více důvěry; evropský hosting a zpracování dat tam, kde to dává smysl.
- **Podnikatelsky:** technologie je nástroj, ne oltář. Cílem je produkt, který vydělává a nepálí tým.
- **Iterativně:** lepší je spustit malou ověřenou verzi než půl roku leštit vzdušný zámek.

## Osnova

1. **Produkt před kódem** — problém, zákazník, nabídka a první validace.
2. **Web jako obchodní systém** — struktura stránek, rychlost, konverze, obsah a důvěra.
3. **SaaS bez přepálené architektury** — MVP, modulární vývoj, účty, billing, onboarding.
4. **Marketing, který nesmrdí spamem** — positioning, obsah, newsletter, komunitní kanály, RSS a přímé odkazy.
5. **Privacy-first provoz v Evropě** — data minimization, analytika bez šmírování, evropský hosting, dokumentace zpracování.
6. **Produktivita malého týmu** — rozhodování, automatizace, backlog, měření dopadu.
7. **Provoz a růst** — monitoring, podpora, incidenty, roadmapa, expanze.
8. **Checklisty a šablony** — launch checklist, audit webu, privacy checklist, obsahový plán.

---

## 1. Produkt před kódem

Nejčastější chyba webových a SaaS projektů není špatný framework. Je to špatně pojmenovaný problém. Když tým začne databází, logem a výběrem UI knihovny dřív než pochopením zákazníka, vznikne krásná aplikace, kterou nikdo naléhavě nepotřebuje.

Dobrá první verze produktu odpovídá na tři otázky:

1. **Komu přesně pomáháme?**
2. **Jaký drahý, častý nebo bolestivý problém řešíme?**
3. **Proč by měl zákazník jednat teď, ne někdy “až bude čas”?**

### Začni konkrétním zákazníkem

„Malé firmy“ nejsou cílovka. To je počasí. Konkrétnější je: „majitelé českých servisních firem s 5–30 lidmi, kteří pořád plánují práci v Excelu a ztrácí přehled o zakázkách“. Takový popis už napovídá, kde je najdeš, jak mluví, co je štve a kolik je může stát neřešený problém.

První pracovní definice zákazníka může vypadat takto:

- **Segment:** B2B servisní firmy v Česku a na Slovensku.
- **Role:** majitel nebo provozní manažer.
- **Situace:** zakázky běží přes telefon, e-mail a tabulky.
- **Bolest:** lidé nevědí, co má prioritu; vznikají zpoždění a zbytečné telefonáty.
- **Dopad:** ztracené hodiny týdně, horší zákaznická zkušenost, menší kapacita na růst.

Tohle není akademické cvičení. Je to filtr na funkce. Pokud funkce nepomáhá tomuto člověku v této situaci, pravděpodobně nepatří do první verze.

### Problém musí být měřitelný

Když nejde popsat dopad problému, těžko se prodává řešení. Dopad nemusí být vždy finanční, ale měl by být konkrétní:

- kolik času se ztrácí týdně,
- kolikrát měsíčně vznikne chyba,
- kolik leadů odpadne kvůli pomalé reakci,
- kolik ruční práce opakuje tým pořád dokola,
- jaký reputační nebo compliance risk firma nese.

Příklad slabého problému: „Firmy chtějí lepší dashboard.“

Příklad silnějšího problému: „Obchodník každý pátek ručně skládá report z pěti zdrojů, trvá mu to tři hodiny a management stejně rozhoduje podle neaktuálních dat.“

Silnější formulace má tři výhody: víš, co automatizovat, víš, komu to ukázat, a umíš odhadnout cenu.

### Validace bez velkého vývoje

Validace neznamená zeptat se kamaráda, jestli je nápad „zajímavý“. Lidé jsou milí. Trh není. Validace znamená získat signál chování: odpověď, schůzku, předobjednávku, pilot, čekací listinu nebo aspoň detailní rozhovor s člověkem, který problém opravdu má.

První validaci zvládneš bez aplikace:

- **Landing page:** jedna stránka s jasným problémem, slibem, pro koho to je a výzvou k akci.
- **Concierge MVP:** službu doručíš ručně, než ji automatizuješ.
- **Klikací prototyp:** Figma, statický HTML prototyp nebo krátké video.
- **Pilotní nabídka:** omezená spolupráce pro první 3–5 zákazníků výměnou za feedback.
- **Obsahový test:** článek nebo checklist, který ověří, jestli téma přitahuje správné lidi.

U B2B SaaS často funguje jednoduchý postup: napiš deseti lidem z cílovky, popiš problém jejich jazykem a nabídni dvacetiminutový rozhovor. Neslibuj revoluci, ptej se na realitu. Kolik času tím tráví? Jak to řeší dnes? Co už zkoušeli? Kdo rozhoduje o nákupu? Co by muselo být pravda, aby za řešení zaplatili?

### Nabídka musí být ostřejší než seznam funkcí

Funkce nejsou nabídka. „Máme dashboard, exporty a notifikace“ zní jako katalog kancelářských židlí. Nabídka říká, jaký výsledek zákazník dostane.

Lepší struktura nabídky:

- **Pro koho:** „Pro malé servisní týmy, které plánují zakázky v tabulkách.“
- **Výsledek:** „Každý technik ví, kam jede a co má udělat.“
- **Důkaz:** „První plán směn nastavíte během jednoho odpoledne.“
- **Riziko:** „Pilot bez migrace dat, stačí CSV export.“
- **Další krok:** „Pošlete nám ukázku současné tabulky a navrhneme první workflow.“

> Codyho komentář: Pokud se tvoje nabídka nedá vysvětlit v jedné větě člověku, který právě drží kafe a řeší tři požáry, není ještě hotová. Produktový positioning není poezie. Je to hasicí přístroj.

### Privacy-first už od první verze

Privacy-first přístup není luxus až pro enterprise. Je levnější začít s minimem dat než později vysvětlovat, proč máš v CRM narozeniny, IP adresy, otisky zařízení a tři analytické skripty, které nikdo neumí vypnout.

Pro evropský produkt si hned na začátku nastav jednoduché zásady:

- **Sbírej jen data, která potřebuješ pro jasný účel.** Evropská komise popisuje principy GDPR jako účelové omezení, minimalizaci dat, omezení uložení, zabezpečení a odpovědnost správce: [Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en).
- **Ke každému údaji napiš důvod.** E-mail kvůli účtu dává smysl. Datum narození u B2B checklistu většinou ne.
- **Odděl produktovou analytiku od marketingového retargetingu.** Měř, co pomáhá zlepšit službu; nesbírej vše jen proto, že nástroj má hezký graf.
- **Preferuj evropské provozní varianty.** Hosting, e-mailing, analytika i support tooling by měly mít jasné zpracovatelské podmínky a rozumné datové toky.
- **Consent neber jako designový souboj.** U cookies a podobných technologií sleduj nejen UX, ale i pravidla ePrivacy; EDPB upozorňuje, že pouhé pokračování v prohlížení není souhlas: [EDPB feedback on cookie pledge principles](https://www.edpb.europa.eu/system/files/2023-12/edpb_letter_out20230098_feedback_on_cookie_pledge_draft_principles_en.pdf).

Tohle neznamená, že se máš bát dat. Znamená to, že každé pole ve formuláři a každý skript na webu musí obhájit svou existenci. Když ji neobhájí, pryč s ním. Digitální hygiena, jen bez mentolové příchuti.

### Praktický postup na první týden

Den 1: napiš pracovní hypotézu zákazníka a problému. Jedna stránka, žádný román.

Den 2: připrav deset kontaktů z cílovky. Ideálně směs známých, druhého stupně kontaktů a studených leadů.

Den 3: pošli stručnou žádost o rozhovor. Neptej se, jestli by používali tvůj produkt. Ptej se, jak dnes řeší problém.

Den 4: vytvoř landing page nebo jednostránkový popis nabídky. Bez falešných log klientů a bez korporátní mlhy.

Den 5: vyhodnoť signály. Kolik lidí odpovědělo? Kolik popsalo stejnou bolest? Kolik chtělo další krok?

Den 6: uprav nabídku podle slov zákazníků. Jejich formulace jsou často lepší copywriting než brainstorming u bílé tabule.

Den 7: rozhodni, jestli pokračovat, zúžit segment, nebo problém zahodit. Zahodit slabý nápad po týdnu je výhra, ne prohra.

### Checklist: máme problém vhodný pro MVP?

- [ ] Umíme popsat konkrétní segment a roli zákazníka.
- [ ] Problém se děje opakovaně, ne jednou za rok.
- [ ] Zákazník dnes používá náhradní řešení, i kdyby bylo ošklivé.
- [ ] Dopad problému jde vyjádřit časem, penězi, rizikem nebo ztracenou příležitostí.
- [ ] Víme, kdo rozhoduje o nákupu nebo pilotu.
- [ ] První verzi umíme otestovat bez kompletního produktu.
- [ ] Víme, jaká data opravdu potřebujeme a proč.
- [ ] Umíme vysvětlit nabídku jednou větou.

Pokud většina odpovědí není jasné „ano“, nepiš ještě kód. Piš otázky, volej zákazníkům a řež rozsah. Kód je drahý způsob, jak zjistit, že jsme se měli zeptat dřív.

---


## 2. Web jako obchodní systém

Web není digitální vizitka, kterou jednou za tři roky oprášíš a pak se divíš, že nic neprodává. Dobrý web je obchodní systém: přivádí správné lidi, rychle jim vysvětlí hodnotu, odstraní nejistotu a nabídne jasný další krok. Design je důležitý, ale jen jako služebník srozumitelnosti. Když návštěvník nepochopí během pár vteřin, pro koho web je a co má udělat, krásný gradient ho nezachrání.

Web malého SaaS nebo B2B služby má typicky tři úkoly:

1. **Vysvětlit nabídku** jednodušeji než obchodník na prvním hovoru.
2. **Vybudovat důvěru** dřív, než člověk vytáhne kalendář nebo kartu.
3. **Změřit zájem** bez datového cirkusu a invazivních trackerů.

### Domovská stránka jako filtr, ne nástěnka

Homepage nemá říct všechno. Má správného člověka poslat dál a nesprávnému ušetřit čas. To je dobrá věc. Když se snažíš mluvit ke všem, vznikne text typu „inovativní řešení pro moderní firmy“. To neprodává, to uspává i kávovar.

První obrazovka by měla odpovědět na čtyři otázky:

- **Co to je?** Jedna věta bez žargonu.
- **Pro koho to je?** Segment, role nebo situace.
- **Jaký výsledek slibujeme?** Ne funkce, ale změna v realitě zákazníka.
- **Co mám udělat teď?** Demo, konzultace, trial, checklist, přímý kontakt.

Příklad slabého hero textu:

> „Komplexní platforma pro optimalizaci firemních procesů.“

Příklad silnějšího textu:

> „Plánování zakázek pro servisní týmy, které už nechtějí řídit práci v tabulkách.“

Druhá varianta není literární ohňostroj. Ale návštěvník ví, jestli je doma. To je cíl.

### Struktura, která vede k rozhodnutí

U menšího SaaS webu často stačí jednoduchá informační architektura:

- **Homepage:** problém, výsledek, důkaz, hlavní CTA.
- **Produkt:** jak to funguje, hlavní scénáře použití, screenshoty nebo krátké video.
- **Pro koho:** konkrétní segmenty a situace, ne obecné persony ze šuplíku.
- **Ceník nebo pilot:** transparentní další krok, i když cena začíná konzultací.
- **Obsah:** články, návody, checklisty, případové studie, RSS feed.
- **Kontakt:** přímý způsob domluvy bez schovaného formuláře na sedm povinných polí.
- **Privacy a podmínky:** stručně, lidsky a dohledatelně.

Každá stránka by měla mít jeden primární účel. Produktová stránka nemá být zároveň blog, kariéra, tisková zpráva a powerpoint pro investora. Když chceš více cílů, rozděl stránku na jasné sekce nebo vytvoř samostatné vstupní stránky pro konkrétní kampaně.

### Důvěra se staví konkrétností

Důvěra nevznikne tím, že napíšeš „jsme spolehliví“. To je jako kdyby restaurace měla na dveřích ceduli „jídlo pravděpodobně neotráví“. Důvěru budují konkrétní signály:

- **Ukázky produktu:** reálné screenshoty, krátké demo, popis workflow krok za krokem.
- **Důkazy výsledků:** případová studie, citace zákazníka, měřitelná změna, srovnání před a po.
- **Transparentní provoz:** kdo za produktem stojí, kde běží data, jak funguje podpora.
- **Jasné limity:** pro koho produkt není, co zatím neumí, kdy je lepší jiné řešení.
- **Rychlá cesta ke člověku:** e-mail, kalendář nebo přímý kontakt bez bludiště.

U privacy-first produktů je dobrý důkaz i to, že se nechlubíš tisícem integrací jen proto, že můžeš. Napiš, které služby používáš pro hosting, e-mail, analytiku a podporu, jaký je účel zpracování a jak dlouho data držíš. Nemusí z toho být právnická opera. Stačí srozumitelný provozní popis a odkaz na plné dokumenty.

### Konverze bez manipulace

Konverzní optimalizace neznamená temné vzory. Znamená odstranit tření mezi zájmem a akcí. Když člověk chce demo, nemá vyplňovat velikost firmy, počet zaměstnanců, krevní skupinu a oblíbený typ housky. Ptej se jen na to, co potřebuješ pro další krok.

Praktická pravidla:

- **Jedno hlavní CTA na stránku.** Sekundární akce může existovat, ale nesmí soupeřit s hlavním rozhodnutím.
- **Formuláře zkracuj na minimum.** U prvního kontaktu často stačí jméno, e-mail a krátká zpráva.
- **Mikrocopy vysvětluje obavy.** „Ozveme se do jednoho pracovního dne“ je lepší než anonymní „Odeslat“.
- **Cenu neskrývej zbytečně.** Pokud nejde dát přesný ceník, popiš aspoň rozpětí, model nebo podmínky pilotu.
- **Nenuť účet před hodnotou.** Ukaž příklad, demo nebo checklist dřív, než žádáš registraci.

> Codyho komentář: Nejlepší konverzní trik je často ten nejméně sexy: napiš jasnější větu, zkrať formulář a přestaň návštěvníka honit vyskakovacím oknem jako prodavač parfémů v obchodním centru.

### Měření privacy-first

Web potřebuje zpětnou vazbu. Bez měření nevíš, jestli lidé čtou správné stránky, kde odchází a co je zajímá. Privacy-first měření ale nezačíná otázkou „kolik dat umíme nasbírat“. Začíná otázkou „jaké rozhodnutí tím chceme zlepšit“.

Pro většinu menších webů stačí měřit:

- návštěvnost klíčových stránek,
- zdroje návštěv v hrubé podobě,
- kliknutí na hlavní CTA,
- odeslání formuláře nebo rezervaci hovoru,
- zájem o obsah podle témat,
- technické chyby a pomalé stránky.

Naopak často nepotřebuješ individuální profily návštěvníků, agresivní retargeting, session replay na každého člověka ani desítky marketingových pixelů. Pokud nástroj nejde rozumně vysvětlit v privacy dokumentaci, možná na web nepatří.

Dobrá praxe je oddělit **produktová rozhodnutí** od **reklamního sledování**. Produktová analytika pomáhá zlepšit web a službu. Reklamní sledování má vyšší riziko pro důvěru, souhlas i datové toky, takže musí mít opravdu jasný důvod.

### Obsah jako dlouhodobé aktivum

Blog nebo znalostní báze nejsou jen SEO krmivo. Jsou způsob, jak ukázat přemýšlení firmy před prvním hovorem. V evropském privacy-first kontextu má obsah ještě jednu výhodu: funguje bez toho, aby musel návštěvníka pronásledovat po internetu.

Dobrý obsah pro SaaS web:

- řeší konkrétní problém zákazníka,
- používá jazyk cílové skupiny,
- obsahuje postup, šablonu, checklist nebo příklad,
- přirozeně vede k produktu, ale není převlečená reklama,
- má přímý odkaz, RSS a sdílitelný nadpis,
- dá se aktualizovat, když se změní realita.

Místo „5 důvodů, proč digitalizovat procesy“ napiš raději „Jak servisní firma předá zakázku technikovi bez tří telefonátů“. První nadpis je mlha. Druhý má scénu, bolest a slib.

### Rychlost a přístupnost jako obchodní disciplína

Rychlý a přístupný web není technická paráda pro Lighthouse screenshot. Je to respekt k návštěvníkovi. Každá zbytečná knihovna, obří obrázek a blikající widget zvyšuje šanci, že člověk odejde dřív, než pochopí nabídku.

Praktický základ:

- komprimuj a správně velikostně připrav obrázky,
- nepřidávej skripty „pro jistotu“,
- používej sémantické HTML a čitelné nadpisy,
- hlídej kontrast textu a ovladatelnost klávesnicí,
- piš popisky odkazů tak, aby dávaly smysl i mimo kontext,
- testuj web na mobilu a pomalejším připojení,
- udržuj formuláře jednoduché a chybové hlášky lidské.

Přístupnost není jen pro „někoho jiného“. Je to lepší UX pro všechny: člověka na mobilu na slunci, unaveného manažera v pátek večer i zákazníka, který nechce luštit světle šedý text na ještě světlejším pozadí.

### Checklist: web připravený na obchod

- [ ] První obrazovka jasně říká, co nabízíme, komu a proč.
- [ ] Každá klíčová stránka má jeden primární další krok.
- [ ] Nabídka popisuje výsledek, ne jen seznam funkcí.
- [ ] Formuláře sbírají jen data nutná pro daný účel.
- [ ] Web obsahuje konkrétní důkazy: ukázky, reference, případové studie nebo transparentní limity.
- [ ] Privacy informace jsou dohledatelné, lidské a konzistentní s reálnými nástroji.
- [ ] Analytika měří rozhodnutí, ne všechno, co technicky jde.
- [ ] Obsah má přímé odkazy, ideálně RSS, a není závislý jen na sociálních sítích.
- [ ] Stránky jsou rychlé, čitelné na mobilu a použitelné klávesnicí.
- [ ] Víme, jak poznáme úspěch webu: leady, demo hovory, trialy, stažení checklistu nebo jiné konkrétní signály.

Web nemusí být velký. Musí být ostrý. Když každá stránka pomáhá návštěvníkovi udělat lepší rozhodnutí a týmu přináší čistý signál zájmu, web přestává být náklad a začíná být obchodní infrastruktura.

---

## 3. SaaS bez přepálené architektury

SaaS produkt se dá zničit dvěma opačnými způsoby. První je slepit všechno narychlo tak, že se tým za tři měsíce bojí změnit tlačítko. Druhý je navrhnout distribuovanou kosmickou stanici pro produkt, který má zatím pět pilotních uživatelů a jednu fakturu. Obě cesty bolí. Jedna hned, druhá později — a obě často zbytečně.

Dobrá SaaS architektura v začátku není ta největší. Je to taková, která umožní rychle ověřit hodnotu, bezpečně obsloužit první zákazníky a nezavřít si dveře pro další růst. Tedy žádné „všechno bude mikroservisa“, ale ani „hesla uložíme do tabulky `users_final_final2`“. Prosím, internet už trpěl dost.

První verze SaaS má odpovědět hlavně na tyto otázky:

1. **Umíme doručit slíbený výsledek opakovaně?**
2. **Umíme bezpečně spravovat účty, data a přístupy?**
3. **Umíme zjistit, kde uživatelé naráží?**
4. **Umíme účtovat nebo alespoň řídit piloty bez ručního chaosu?**
5. **Umíme produkt provozovat bez toho, aby každý incident byl detektivka?**

### MVP není polotovar bez odpovědnosti

MVP znamená minimum, které ověří hodnotu. Ne minimum, za které se pak musíš omlouvat. U SaaS produktu je rozdíl mezi funkcí, která ještě chybí, a základem, který nesmí selhat. Export do PDF může počkat. Přihlášení, práva, zálohy a srozumitelné chybové stavy obvykle ne.

Rozumné MVP by mělo mít tři vrstvy:

- **Jádro hodnoty:** hlavní workflow, kvůli kterému si produkt někdo pořídí.
- **Provozní minimum:** účty, pozvánky, práva, základní administrace, logy, zálohy.
- **Učící smyčka:** měření klíčových akcí, sběr feedbacku, jednoduchý způsob prioritizace.

Příklad: pokud stavíš nástroj pro plánování práce techniků, MVP není „dashboard, chat, AI doporučení a mobilní aplikace“. MVP může být: import zakázek, kalendář techniků, přiřazení práce, notifikace změny a přehled splnění. K tomu administrace týmu, audit základních změn a možnost exportu dat. To už řeší reálný problém a zároveň se to dá provozovat bez kouzelné tabulky v zákulisí.

### Monolit není sprosté slovo

Pro malý tým je dobře navržený modulární monolit často nejlepší start. Jedna aplikace, jedna databáze, jasné doménové moduly a jednoduchý deployment. Méně pohyblivých částí znamená méně míst, kde se dá rozbít páteční odpoledne.

Modulární monolit neznamená kouli bahna. Znamená, že v kódu držíš hranice:

- **Accounts:** uživatelé, organizace, role, pozvánky.
- **Billing:** plány, fakturační stav, limity, trialy.
- **Product core:** hlavní doména produktu, například projekty, zakázky nebo dokumenty.
- **Notifications:** e-maily, systémové zprávy, webhooky.
- **Audit a compliance:** důležité události, exporty, mazání, retenční pravidla.
- **Admin:** interní nástroje pro podporu a řešení problémů.

Každý modul by měl mít jasnou odpovědnost. Nemusí běžet jako samostatná služba. Důležité je, aby změna v onboardingu nerozbila billing a aby produktová logika nebyla rozházená mezi třiceti controllery jako konfety po firemním večírku.

> Codyho komentář: Mikroservisy jsou skvělé, když máš organizační problém ve velkém týmu. Když máš tři lidi a osm zákazníků, mikroservisy jsou často jen dražší způsob, jak si pořídit více logů k proklínání.

### Multi-tenant data: jednoduše, ale vědomě

SaaS typicky obsluhuje více zákazníků v jedné aplikaci. To znamená, že musíš vědět, jak odděluješ data jednotlivých organizací. Tady se nevyplácí improvizace.

Nejběžnější start pro menší B2B SaaS je jedna databáze a u většiny tabulek sloupec typu `organization_id` nebo `tenant_id`. Je to jednoduché na provoz, zálohování i vývoj. Ale musí být důsledné:

- každý dotaz na zákaznická data filtruje organizaci,
- přístupová práva se kontrolují na serveru, ne jen v UI,
- interní administrace má audit a omezený přístup,
- testy ověřují, že uživatel nevidí cizí data,
- export a mazání dat pracují po hranici organizace,
- logy neukládají zbytečně citlivý obsah.

Později může dávat smysl databáze na zákazníka nebo oddělené prostředí pro větší klienty. Do první verze to ale patří jen tehdy, když to vyžaduje obchodní realita, regulace nebo bezpečnostní požadavek konkrétního segmentu. Jinak je to často složitost zaplacená předem, bez jistoty návratnosti.

### Onboarding rozhoduje o aktivaci

U SaaS produktu nestačí, že se uživatel zaregistruje. Musí dojít k prvnímu momentu hodnoty. Aktivace není „vytvořil účet“. Aktivace je „udělal první užitečnou věc“.

Před stavbou onboardingového průvodce si napiš jednu větu:

> Uživatel je aktivovaný, když __________.

Pro plánování zakázek to může být: „když importuje první zakázku a přiřadí ji konkrétnímu technikovi“. Pro analytický nástroj: „když připojí první zdroj dat a uvidí první report“. Pro CRM: „když přidá první obchodní příležitost a nastaví další krok“.

Onboarding potom navrhuj kolem této akce:

- neptej se na zbytečné údaje před první hodnotou,
- ukaž příkladová data, pokud prázdná obrazovka nedává smysl,
- vysvětli jeden další krok, ne celý vesmír,
- nabídni import tam, kde ruční zadávání bolí,
- pošli užitečný e-mail jen tehdy, když pomáhá pokračovat,
- umožni návrat k průvodci bez podpory.

Privacy-first onboarding sbírá minimum. Když nepotřebuješ telefon, velikost firmy nebo pozici uživatele pro první hodnotu, nech to na později. Lepší profil se dá doplnit postupně, až existuje důvěra a důvod.

### Billing a limity bez zbytečného dramatu

Billing je produktová funkce, ne účetní přílepek. Ovlivňuje trial, upgrade, podporu, limity, faktury i očekávání zákazníka. Proto je dobré ho navrhnout jednoduše a čitelně už v první obchodní verzi.

Na začátku často stačí:

- jeden nebo dva placené plány,
- jasný trial nebo pilotní období,
- ruční schválení enterprise výjimek,
- interní přehled stavu zákazníka,
- jednoduché limity podle hodnoty produktu,
- upozornění před tvrdým zablokováním.

Limity mají být pochopitelné. Když účtuješ podle počtu uživatelů, projektů nebo zpracovaných položek, zákazník musí vědět, proč je to spravedlivé. Špatný limit trestá úspěch špatným způsobem. Dobrý limit roste s hodnotou, kterou zákazník získává.

Pokud billing v první fázi řešíš ručně, napiš si to jako vědomé rozhodnutí. Ruční fakturace pro pět pilotních zákazníků může být v pořádku. Ruční úpravy databáze při každém upgradu už v pořádku nejsou. Tam má vzniknout aspoň interní administrace.

### Admin a podpora nejsou ostuda

Zakladatelé někdy podceňují interní nástroje, protože „to přece zákazník nevidí“. Jenže zákazník velmi rychle uvidí, když podpora nic neví, neumí obnovit přístup a každý problém končí větou „pošleme to vývojářům“.

První interní admin může být jednoduchý, ale měl by umět:

- najít organizaci a uživatele,
- zobrazit stav plánu, trialu a limitů,
- zkontrolovat poslední důležité události,
- znovu poslat pozvánku nebo ověřovací e-mail,
- bezpečně vypnout problematickou integraci,
- exportovat základní diagnostiku bez citlivého obsahu.

Interní nástroje musí mít silnější bezpečnost než běžné UI. Omezený přístup, audit akcí a žádné zbytečné čtení zákaznického obsahu. Podpora má řešit problém, ne listovat cizím byznysem jako bulvárem.

### Technický dluh si zapisuj jako obchodní riziko

Technický dluh není morální selhání. Je to půjčka. Problém začíná, když nikdo neví, kolik se dluží a kdy se to začne splácet. U SaaS produktu je dobré rozlišovat tři typy dluhu:

- **Vědomý dluh:** víme, proč jsme zvolili jednodušší řešení, a máme spouštěč pro návrat.
- **Nevědomý dluh:** vznikl chaosem, nikdo ho nepřiznal a teď překvapuje při každé změně.
- **Nebezpečný dluh:** ohrožuje data, bezpečnost, fakturaci nebo dostupnost.

Vědomý dluh může být dobrý obchod. Například ruční import dat pro první piloty, dokud nevíš, jaké formáty zákazníci opravdu používají. Nebezpečný dluh nepatří do „někdy“. Pokud systém nemá zálohy, přístupová práva nebo způsob obnovy, není to rychlost. Je to hazard v mikině startupu.

Praktická pomůcka: ke každému většímu kompromisu napiš do backlogu položku ve formátu:

- **Co jsme zjednodušili:** například ruční schvalování trialů.
- **Proč:** rychlejší validace pilotů.
- **Riziko:** chyba při nastavení plánu, pomalá reakce podpory.
- **Spouštěč řešení:** více než 10 aktivních pilotů nebo první placený self-service plán.
- **Cílový stav:** admin akce s audit logem.

### Checklist: SaaS první verze bez kosmické lodi

- [ ] Hlavní workflow doručuje konkrétní hodnotu bez ruční magie za oponou.
- [ ] Účty, organizace, role a pozvánky mají jasný model.
- [ ] Každý přístup k zákaznickým datům respektuje hranici organizace.
- [ ] Onboarding vede k jedné definované aktivační akci.
- [ ] Trial, pilot nebo billing stav je vidět v interní administraci.
- [ ] Limity jsou srozumitelné a navázané na hodnotu produktu.
- [ ] Existuje základní audit důležitých akcí.
- [ ] Zálohy, obnova a chybové logy nejsou „doděláme potom“.
- [ ] Interní admin neukazuje víc zákaznických dat, než je nutné.
- [ ] Technický dluh má popsané riziko a spouštěč návratu.

SaaS nemusí začínat jako enterprise platforma. Má začínat jako spolehlivý stroj na doručení jedné hodnoty pro jeden segment. Když se první zákazníci vrací, platí a říkají, co jim chybí dál, teprve pak má smysl přidávat další patra. Nejdřív základová deska. Až potom bazén na střeše.

---


## 4. Marketing, který nesmrdí spamem

Marketing není disciplína, kde vyhraje ten, kdo nejhlasitěji křičí na LinkedInu a nejrychleji přidá pop-up přes půl obrazovky. Dobrý marketing pomáhá správným lidem pochopit, že existuje řešení jejich konkrétního problému. Nehoní všechny. Vybírá.

U malého týmu je marketing často zaměňovaný za „musíme být víc vidět“. To je málo. Viditelnost bez jasné nabídky je drahý ohňostroj. Chvíli svítí, všichni řeknou „hezké“, a pak zůstane tma. Cílem je vytvořit systém, který dlouhodobě přivádí relevantní lidi, vysvětluje hodnotu produktu a sbírá důvěru bez datového cirkusu.

### Positioning: komu pomáháš a proč právě teď

Než začneš psát články, točit videa nebo ladit kampaně, napiš positioning jednou obyčejnou větou:

> Pomáháme **[konkrétní skupině]** vyřešit **[konkrétní problém]** pomocí **[způsob řešení]**, aby dosáhla **[měřitelný výsledek]**.

Příklad:

> Pomáháme menším evropským e-shopům zpřehlednit reklamace a vratky v jednom jednoduchém portálu, aby zkrátily reakční dobu podpory a neměly citlivá zákaznická data rozházená po tabulkách.

Tohle není slogan na billboard. Je to interní kompas. Když je věta vágní, bude vágní i web, obsah, sales call a onboarding. „Moderní platforma pro digitalizaci procesů“ neříká nic. „Portál pro reklamace bez e-mailového chaosu“ už něco slibuje.

Prakticky si positioning otestuj na pěti otázkách:

- Pozná se v tom konkrétní typ zákazníka?
- Je jasné, jaký problém řešíme?
- Je výsledek měřitelný časem, penězi, rizikem nebo klidem?
- Je z věty patrné, proč nestačí běžné náhradní řešení?
- Dá se z ní napsat domovská stránka bez dalšího brainstormingu?

Pokud ne, vrať se k zákazníkovi. Ne k fontům. Fonty za tebe positioning neodmakají, i kdyby se tvářily velmi prémiově.

### Obsah má odpovídat na nákupní otázky

Obsahový marketing není závod v počtu článků. Je to knihovna odpovědí na otázky, které si zákazník klade před rozhodnutím. Malý tým nepotřebuje publikovat denně. Potřebuje pokrýt témata, která pomáhají zákazníkovi posunout se od „mám problém“ k „tohle chci vyzkoušet“.

Rozděl obsah do čtyř vrstev:

- **Problém:** články, které pojmenují bolest a ukážou její dopad.
- **Řešení:** návody, postupy, checklisty a rozhodovací kritéria.
- **Důvěra:** případové studie, ukázky workflow, srovnání přístupů, technické vysvětlení.
- **Aktivace:** landing pages, demo scénáře, šablony, kalkulačky a e-maily po registraci.

Příklad pro SaaS na správu reklamací:

- „Proč se reklamace ztrácí v e-mailu a kolik času to stojí podporu“.
- „Checklist pro zavedení reklamačního portálu v malém e-shopu“.
- „Jak oddělit zákaznická data od interních poznámek podpory“.
- „Vyzkoušejte vzorový tok reklamace: zákazník, sklad, účetní“.

Každý kus obsahu by měl mít další krok. Někdy je to kontakt, jindy stažení šablony, registrace k newsletteru nebo odkaz na související článek. Bez dalšího kroku je obsah jen hezká lavička v parku. Příjemná, ale zákazník na ní může sedět roky.

### Newsletter jako vztah, ne past na e-mail

Newsletter funguje, když má jasný slib. „Přihlaste se k odběru novinek“ není slib. To je administrativní věta, která zní, jako by ji napsala tiskárna v bance.

Lepší sliby:

- Jednou měsíčně praktický checklist pro zlepšení SaaS provozu.
- Krátké poznámky o privacy-first marketingu pro evropské firmy.
- Nové šablony pro web, onboarding a zákaznickou podporu.

U privacy-first přístupu je důležité sbírat jen to, co opravdu potřebuješ. Pro běžný newsletter většinou stačí e-mail. Jméno, firma, telefon, obrat a oblíbená barva kancelářské židle jsou marketingový cosplay, ne nutnost.

Dobrá uvítací sekvence může mít tři jednoduché zprávy:

1. **Doručení slibu:** šablona, odkaz nebo první konkrétní rada.
2. **Kontext:** proč téma řešíš a komu nejvíc pomáhá.
3. **Další krok:** odpověď na e-mail, krátká konzultace, demo nebo doporučený článek.

Nepotřebuješ manipulativní odpočty a falešnou urgenci. Když je problém skutečný a nabídka jasná, stačí poctivě vysvětlit, pro koho to je, co člověk získá a co má udělat dál.

### Distribuce: jeden článek nestačí napsat

Největší plýtvání v marketingu je vytvořit dobrý obsah a pak ho jednou hodit na sociální síť s větou „nový článek venku“. Distribuce není trapné opakování. Je to překlad stejné hodnoty do různých kontextů.

Z jednoho kvalitního článku může vzniknout:

- krátký e-mail do newsletteru,
- checklist ke stažení,
- tři příspěvky na LinkedIn,
- interní sales podklad,
- odpověď do komunitní diskuze,
- sekce na landing page,
- skript pro krátké video nebo demo.

Privacy-first distribuce stojí na kanálech, které můžeš rozumně kontrolovat: vlastní web, RSS, newsletter, přímé odkazy, partnerské weby, oborové komunity a osobní doporučení. Sociální sítě mohou být užitečné, ale nemají být jediným bodem selhání. Algoritmus není strategie. Je to počasí s tlačítkem „boostovat“.

Praktický rytmus pro malý tým:

- jednou týdně zapiš tři nejčastější otázky zákazníků,
- jednou za dva týdny z jedné otázky udělej článek nebo návod,
- po publikaci vytvoř pět menších výstupů pro distribuci,
- jednou měsíčně zkontroluj, které téma přivedlo relevantní konverzace,
- jednou za kvartál aktualizuj nejlepší starší obsah.

### Komunitní marketing bez parazitování

Komunity nejsou reklamní plochy zdarma. Jsou to místa, kde lidé řeší problémy, sdílí zkušenosti a velmi rychle poznají, kdo přišel pomoct a kdo přišel nalepit leták na ledničku.

Dobré komunitní zapojení vypadá takto:

- odpovídáš konkrétně na otázku,
- přiznáš limit svého řešení,
- dáš užitečný postup i bez nutnosti registrace,
- odkazuješ na vlastní obsah jen tehdy, když opravdu doplňuje odpověď,
- dlouhodobě se vracíš a nejsi vidět jen při launchi.

Příklad odpovědi, která nepůsobí jako spam:

> Řešili jsme podobný problém u menšího e-shopu. Pomohlo oddělit veřejný stav reklamace od interních poznámek podpory a nastavit tři pevné stavy místo deseti. Tady je stručný checklist, podle kterého jsme postupovali. Pokud chceš, pošlu i ukázku struktury portálu.

Tohle je marketing, protože ukazuje kompetenci. Zároveň to není spam, protože nejdřív pomáhá. Když se z každé odpovědi stane „máme přesně takový produkt, napiš DM“, komunita tě právem vyhodí mentálně, někdy i administrátorsky. A bude mít pravdu.

### Měření bez šmírování

Marketing potřebuje zpětnou vazbu, ne kompletní životopis návštěvníka. U malého B2B SaaS často stačí vědět:

- odkud přišla relevantní návštěva,
- které stránky vedly ke kontaktu nebo registraci,
- které články přivádí kvalitní konverzace,
- jaké CTA lidé používají,
- kde onboarding ztrácí pozornost.

Místo sběru osobních profilů pracuj s agregovanými daty, UTM parametry, anonymizovanou analytikou a přímou otázkou „Jak jste se o nás dozvěděli?“. U B2B je tahle otázka překvapivě užitečná. Člověk často napíše „doporučil nás účetní“, což ti žádný pixel neřekne, protože účetní nemá UTM duši.

U každého měření si polož tři otázky:

- Pomůže nám tato informace udělat lepší produkt nebo marketingové rozhodnutí?
- Umíme ji získat méně invazivně?
- Ví zákazník srozumitelně, co měříme a proč?

Pokud odpověď není jasná, neměř to. Méně dat často znamená méně právního rizika, méně technické údržby a více důvěry. Marketing, který respektuje soukromí, není slabší. Je přesnější, protože nutí tým přemýšlet nad skutečnými signály místo hromadění dashboardů.

### Checklist: marketing bez spamu a závislosti

- [ ] Máme jednu jasnou positioning větu pro konkrétní segment.
- [ ] Domovská stránka používá stejný jazyk jako zákazník, ne interní buzzwordy.
- [ ] Obsah pokrývá problém, řešení, důvěru i aktivační kroky.
- [ ] Každý větší článek má jasný další krok.
- [ ] Newsletter má konkrétní slib a sbírá jen nezbytné údaje.
- [ ] Distribuce stojí i na vlastním webu, RSS, newsletteru a přímých odkazech.
- [ ] Komunitní zapojení nejdřív pomáhá a teprve potom odkazuje.
- [ ] Měříme agregované signály, ne zbytečné osobní profily.
- [ ] U každého kanálu víme, jak poznáme kvalitní konverzaci.
- [ ] Nejlepší obsah pravidelně aktualizujeme místo nekonečného vyrábění nového šumu.

Marketing malého SaaS týmu nemá být hlučný stroj na leady za každou cenu. Má být důvěryhodný systém, který dlouhodobě vysvětluje hodnotu, učí trh a otevírá správné konverzace. Když se zákazník cítí informovaně, ne uloveně, jsi na dobré cestě.

---

## 5. Privacy-first provoz v Evropě

Privacy-first není právnická dekorace do patičky webu. Je to provozní disciplína: rozhodování o tom, jaká data opravdu potřebuješ, kde leží, kdo k nim má přístup, jak dlouho je držíš a jak rychle umíš reagovat, když se něco pokazí. U evropského SaaS je to zároveň obchodní výhoda. Zákazník nemusí luštit, jestli jeho data mizí v deseti reklamních sítích a třech „growth“ nástrojích, které nikdo neumí vysvětlit.

Evropská komise shrnuje GDPR principy jako zákonnost, férovost a transparentnost, účelové omezení, minimalizaci dat, omezení uložení, přesnost, integritu a důvěrnost a odpovědnost správce. EDPB k tomu pro malé firmy prakticky zdůrazňuje ochranu údajů už při návrhu a ve výchozím nastavení. Přeloženo z úředštiny: nejdřív navrhni rozumný provoz, potom teprve přidávej nástroje. Ne opačně.

> Codyho komentář: Když tým říká „tohle vyřešíme privacy policy“, většinou tím myslí „udělali jsme bordel a teď ho zabalíme do PDF“. Privacy-first začíná v architektuře, ne v dokumentu.

### Datová mapa dřív než další integrace

Každý SaaS by měl mít jednoduchou datovou mapu. Nemusí to být enterprise diagram přes tři zdi. Stačí tabulka, která u každého typu dat říká: proč je sbíráme, kde vzniká, kde se ukládá, kdo k němu má přístup, komu ho předáváme a kdy ho mažeme.

Začni těmito kategoriemi:

- **Účetní data:** e-mail, jméno, organizace, role, přihlášení, bezpečnostní logy.
- **Produktová data:** obsah, který zákazník do aplikace vloží, soubory, komentáře, nastavení.
- **Platební data:** tarif, fakturační údaje, stav předplatného, transakční identifikátory.
- **Podpůrná data:** zprávy na support, diagnostika, chybové výpisy, metadata incidentů.
- **Marketingová data:** newsletter, zdroj leadu, souhlas, preference komunikace.
- **Analytická data:** agregované návštěvy, události v produktu, technický výkon.

U každé položky se ptej: „Kdybychom tato data zítra neměli, jaké rozhodnutí nebo funkce se rozbije?“ Pokud odpověď zní „možná se to někdy bude hodit“, je to slabý důvod. Data nejsou suvenýry. Každý záznam zvyšuje odpovědnost, náklady a dopad případného incidentu.

### Minimalizace není asketismus

Minimalizace dat neznamená, že produkt nesmí nic vědět. Znamená, že sbírá jen to, co potřebuje pro jasný účel. U registračního formuláře často nepotřebuješ telefon, velikost firmy, adresu ani obor. U newsletteru nepotřebuješ datum narození. U supportu nepotřebuješ automaticky kopírovat celé zákaznické databáze do externího ticket systému.

Praktické příklady:

- **Registrace:** začni e-mailem a heslem nebo magic linkem; profil doplň až ve chvíli, kdy to pomůže onboardingu.
- **Demo poptávka:** chtěj jméno, e-mail a stručný kontext; zbytek vyřeší člověk v odpovědi.
- **Logování:** ukládej technické informace potřebné k řešení chyby, ne plné payloady s osobními údaji.
- **Analytika:** měř události typu `trial_started` nebo `invoice_exported`, ne detailní obsah zákaznických záznamů.
- **Newsletter:** odděl souhlas s obchodní komunikací od souhlasu s produktovými podmínkami.

Minimalizace má i produktovou výhodu: jednodušší formuláře zvyšují šanci, že je lidé dokončí. A jednodušší datový model se lépe zabezpečuje. Není to morální sebetrýznění, je to dobrý design.

### Evropský provoz jako výchozí volba

Pokud stavíš pro evropské zákazníky, nastav evropský provoz jako default. Hosting, databáze, zálohy, e-mail, support, analytika a monitoring by měly mít jasně popsané místo zpracování a smluvní vztah. Ne každý americký nástroj je automaticky špatně, ale každý mimoevropský tok dat musí mít důvod, právní základ a provozní kontrolu. Když existuje kvalitní evropská alternativa, začni tam.

Rozumná provozní pravidla:

- Preferuj EU datová centra a dodavatele, kteří umí jasně popsat subprocesory.
- U každého nástroje eviduj účel, kategorii dat, region, retenční dobu a vlastníka v týmu.
- Nepřidávej marketingové pixely jen proto, že „to tak dělají všichni“.
- Zvaž self-hosted nebo EU-hosted analytiku pro web i produktové události.
- U externích integrací nastav nejnižší nutná oprávnění a pravidelně je reviduj.
- Zálohy šifruj a testuj obnovu, ne jen existenci záložního souboru.

Kritická je i přenositelnost. Pokud dodavatel zítra zdraží, změní podmínky nebo přestane sedět tvému privacy modelu, umíš odejít? Export dat, dokumentované API a jednoduché mazání účtu jsou součást provozní svobody. Vendor lock-in není jen finanční problém. Je to i datové riziko.

### Cookies, souhlas a férové měření

EDPB ve FAQ připomíná, že ukládání cookies nebo přístup k informacím v zařízení uživatele typicky vyžaduje informování a souhlas, pokud nejde o výjimku podle ePrivacy pravidel. Souhlas podle EDPB musí být skutečná volba, ne předem zaškrtnuté políčko nebo nátlakový banner. Pro malý SaaS z toho plyne jednoduché pravidlo: čím méně nepotřebných cookies a trackerů, tím méně právního i UX bahna.

V praxi rozděl měření na tři vrstvy:

- **Technicky nezbytné:** session, zabezpečení, košík, jazyk, základní nastavení aplikace.
- **Produktově užitečné:** agregované události, výkon, chyby, dokončení onboardingu.
- **Marketingově invazivní:** reklamní pixely, retargeting, cross-site identifikátory, profilování.

První vrstva má být minimální a vysvětlená. Druhá vrstva má být navržená tak, aby pokud možno nepotřebovala identifikovat člověka napříč webem. Třetí vrstva má projít tvrdým testem: opravdu bez ní nejde dosáhnout obchodního cíle? A pokud ano, umíš ji vysvětlit lidsky a získat platný souhlas bez manipulace?

Cookie lišta nemá být hra „najdi odmítnutí“. Dobré rozhraní nabízí stejně snadné odmítnutí jako přijetí, jasné účely a možnost volbu změnit. Je to méně agresivní. A ano, možná nasbíráš méně dat. Zato data, která máš, nejsou výsledkem digitálního vydírání.

### Dokumentace, která pomáhá provozu

Privacy dokumentace nemá žít jen jako odkaz v patičce. Má pomáhat týmu rozhodovat. U malého SaaS doporučuji držet čtyři praktické dokumenty:

- **Záznam datových toků:** přehled kategorií dat, účelů, úložišť, dodavatelů a retenčních dob.
- **Seznam subprocesorů:** kdo zpracovává data za tebe, pro jaký účel, v jakém regionu.
- **Retenční pravidla:** kdy mažeš trial účty, logy, support zprávy, fakturační data a zálohy.
- **Incident runbook:** kdo rozhoduje, kde jsou logy, jak se izoluje problém, kdy a koho informovat.

Tyto dokumenty nemusí být krásné. Musí být aktuální. Ideální je mít je v repozitáři nebo interní znalostní bázi, kde změna nástroje znamená i změnu dokumentace. Když přidáš nový support chat, aktualizuj datovou mapu. Když změníš analytiku, aktualizuj privacy stránku. Když nastavíš novou retenční dobu logů, napiš to do runbooku.

### Bezpečnost bez divadla

Bezpečnost často sklouzne do nákupu loga „enterprise security“ místo nudné každodenní disciplíny. Malý tým ale získá nejvíc z jednoduchých základů:

- vícefaktorové ověření pro administraci, hosting, Git a billing,
- oddělené produkční, testovací a vývojové prostředí,
- žádná reálná zákaznická data v lokálním vývoji, pokud to není nezbytné,
- rotace klíčů a tajemství po odchodu člověka z týmu,
- audit přístupů aspoň jednou za kvartál,
- šifrované zálohy a pravidelný test obnovy,
- jasný postup pro mazání účtu a export zákaznických dat.

Zvláštní pozornost věnuj interním adminům. Jsou pohodlné, ale nebezpečné. Admin má ukazovat jen data potřebná pro podporu a provoz, ideálně s auditním záznamem. Pokud support člověk nepotřebuje vidět obsah zákaznického dokumentu, nemá ho vidět. Role „admin vidí všechno“ je rychlá cesta k malé katastrofě s velkým titulkem.

### Checklist: privacy-first provoz v Evropě

- [ ] Máme datovou mapu pro účetní, produktová, platební, podpůrná, marketingová a analytická data.
- [ ] U každého typu dat známe účel, právní základ, úložiště, přístup a retenční dobu.
- [ ] Formuláře sbírají jen údaje potřebné pro konkrétní další krok.
- [ ] Hosting, databáze, zálohy, analytika a support mají popsaný region zpracování.
- [ ] Každý externí nástroj má vlastníka, účel a záznam v seznamu subprocesorů.
- [ ] Marketingové cookies a pixely nejsou zapnuté bez jasného důvodu a platného souhlasu.
- [ ] Odmítnutí cookies je stejně snadné jako přijetí.
- [ ] Logy neobsahují zbytečné osobní údaje nebo celé zákaznické payloady.
- [ ] Existuje incident runbook a tým ví, kde ho najde.
- [ ] Admin rozhraní používá role, minimální přístup a audit důležitých akcí.
- [ ] Zálohy jsou šifrované a obnova je prakticky otestovaná.
- [ ] Retence dat je napsaná, automatizovaná a pravidelně kontrolovaná.

Privacy-first SaaS není produkt, který nikdy nic neměří a bojí se vlastního stínu. Je to produkt, který ví, proč data zpracovává, umí to vysvětlit, drží kontrolu v Evropě, minimalizuje zbytečné riziko a nechová se k uživateli jako ke zdroji suroviny. Důvěra se nevykliká v banneru. Důvěra se provozuje.

---

## Zdroje

- Evropská komise: [Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en)
- Evropská komise: [Information for business and organisations](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations_en)
- EDPB: [Data protection guide for small business](https://www.edpb.europa.eu/sme_en)
- EDPB: [Be compliant](https://www.edpb.europa.eu/sme/be-compliant/be-compliant_en)
- EDPB: [Frequently Asked Questions](https://www.edpb.europa.eu/contact/frequently-asked-questions_en)
- EDPB: [Consent under GDPR — summary](https://www.edpb.europa.eu/system/files/2026-04/edpb-summary-consent_en.pdf)
- EDPB: [Feedback on the cookie pledge draft principles](https://www.edpb.europa.eu/system/files/2023-12/edpb_letter_out20230098_feedback_on_cookie_pledge_draft_principles_en.pdf)

---

## Pracovní log

- **2026-09-11:** Založena struktura e-booku, osnova a dokončená kapitola 1 o validaci produktu před vývojem, včetně privacy-first doporučení a zdrojů ke GDPR/ePrivacy.
- **2026-09-11:** Dopsána kapitola 2 o webu jako obchodním systému: struktura stránek, důvěra, konverze bez manipulace, privacy-first měření, obsah, rychlost a checklist.
- **2026-09-11:** Dopsána kapitola 3 o SaaS bez přepálené architektury: MVP, modulární monolit, multi-tenant data, onboarding, billing, admin a technický dluh.
- **2026-09-11:** Dopsána kapitola 4 o marketingu bez spamu: positioning, obsah, newsletter, distribuce, komunitní zapojení, privacy-first měření a checklist.
- **2026-09-11:** Dopsána kapitola 5 o privacy-first provozu v Evropě: datová mapa, minimalizace, evropský hosting, cookies, dokumentace, bezpečnost a provozní checklist.
