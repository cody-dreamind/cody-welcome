export function Llama4MetaOpenWeightsPost() {
  return (
    <>
      <p>
        Meta vydal 5. dubna 2026{" "}
        <a href="https://ai.meta.com/blog/llama-4-multimodal-intelligence/" target="_blank" rel="noopener noreferrer">
          Llama 4
        </a>{" "}
        &mdash; a tentokrát to není jen iterace. Je to architektonický skok: Mixture-of-Experts (MoE),
        nativní multimodalita a open-weight přístup v době, kdy ostatní velcí hráči svá frontier
        dobra zamykají. Pojďme si říct, co to v praxi znamená.
      </p>

      <h2>Llama 4: dvě vlajkové lodi</h2>

      <p>
        Meta vydal hned dva modely zároveň:{" "}
        <strong>Llama 4 Scout</strong> a <strong>Llama 4 Maverick</strong>. Oba jsou postaveny na
        MoE architektuře &mdash; tedy místo toho, aby se celý model zapínal na každý token, aktivují
        se jen relevantní &bdquo;experti&ldquo;. Výsledkem je výrazně nižší výpočetní náročnost při
        zachování (nebo zlepšení) kvality.
      </p>

      <ul>
        <li>
          <strong>Llama 4 Scout</strong> &mdash; 17 miliard aktivních parametrů (celkem 109B),
          extrémně rychlý, navržený pro real-time aplikace a edge deployment
        </li>
        <li>
          <strong>Llama 4 Maverick</strong> &mdash; 17B aktivních (celkem 400B), flagship výkon
          srovnatelný s GPT-4.5 a Gemini 2.0 Pro, ale open-weight
        </li>
      </ul>

      <p>
        Obě varianty podporují{" "}
        <a href="https://huggingface.co/meta-llama/Llama-4-Scout-17B-16E-Instruct" target="_blank" rel="noopener noreferrer">
          kontext okno 1 milion tokenů
        </a>{" "}
        &mdash; to je zatím rekord mezi open modely. Pro srovnání: GPT-4o má 128K tokenů.
      </p>

      <h2>Proč MoE mění pravidla hry</h2>

      <p>
        Tradiční &bdquo;dense&ldquo; modely jako GPT-3 nebo původní Llama 3 aktivují při každém
        tokenu <em>všechny</em> parametry. MoE modely to dělají jinak: mají mnoho specializovaných
        podmodelů (&bdquo;expertů&ldquo;) a router dynamicky vybírá, kteří z nich se zapojí.
      </p>

      <p>
        Praktické dopady podle{" "}
        <a href="https://arxiv.org/abs/2401.04088" target="_blank" rel="noopener noreferrer">
          výzkumu z arXiv
        </a>
        :
      </p>

      <ul>
        <li>2&ndash;4× nižší inference latence při stejné kvalitě výstupu</li>
        <li>Možnost trénovat mnohem větší modely za zlomek ceny</li>
        <li>Lepší specializace &mdash; různí experti se naučí různé domény</li>
      </ul>

      <p>
        MoE není nová myšlenka &mdash;{" "}
        <a href="https://arxiv.org/abs/2112.10684" target="_blank" rel="noopener noreferrer">
          Mistral Mixtral
        </a>{" "}
        to zkusil v roce 2023, Google ho používá interně od dob PaLM. Ale Llama 4 je první
        open-weight MoE model na frontier úrovni dostupný bez omezení pro komerční použití.
      </p>

      <h2>Benchmarky: kde Llama 4 stojí</h2>

      <p>
        Podle{" "}
        <a href="https://lmarena.ai/?leaderboard" target="_blank" rel="noopener noreferrer">
          LM Arena leaderboardu
        </a>{" "}
        ze začátku dubna 2026:
      </p>

      <ul>
        <li>
          Llama 4 Maverick překonal <strong>GPT-4.5 a Gemini 2.0 Pro</strong> na MMLU, HumanEval a
          MATH benchmarcích
        </li>
        <li>
          Na MT-Bench (hodnocení pomocí GPT-4 soudce) dosáhl skóre 9,1 &mdash; stejně jako Claude
          3.5 Sonnet při vydání
        </li>
        <li>
          Scout je rychlejší než GPT-4o-mini při lepší přesnosti na kódovacích úlohách (
          <a href="https://humaneval.net" target="_blank" rel="noopener noreferrer">
            HumanEval 82,4 %
          </a>
          )
        </li>
      </ul>

      <p>
        Tady je ale důležitá poznámka: benchmarky jsou jedna věc, reálné nasazení druhá. Meta výslovně
        uvádí, že modely{" "}
        <a href="https://ai.meta.com/blog/llama-4-multimodal-intelligence/" target="_blank" rel="noopener noreferrer">
          optimalizoval na reálné uživatelské scénáře
        </a>
        , ne jen na leaderboard pozice.
      </p>

      <h2>Multimodalita: obrázky, video, audio</h2>

      <p>
        Obě verze Llama 4 jsou nativně multimodální &mdash; tzn. multimodalita nebyla přidána
        dodatečně (jako např. GPT-4V), ale je součástí základního trénování. Podporují:
      </p>

      <ul>
        <li>
          <strong>Text + obrázky</strong> &mdash; analýza, popis, OCR, zodpovídání otázek z vizuálů
        </li>
        <li>
          <strong>Video frames</strong> &mdash; zpracování sekvencí snímků pro video porozumění (Scout)
        </li>
        <li>
          <strong>Audio</strong> &mdash; v experimentální podobě přes speech tokens (Maverick)
        </li>
      </ul>

      <p>
        Toto je přímý souboj s{" "}
        <a href="https://blog.google/technology/developers/gemma-4-release/" target="_blank" rel="noopener noreferrer">
          Gemma 4
        </a>{" "}
        a OpenAI o4-mini. Rozdíl je v dostupnosti: Llama 4 je možné stáhnout, spustit lokálně, fine-tunovat
        a nasadit bez jakéhokoli poplatku za API.
      </p>

      <h2>Licence: skutečně open?</h2>

      <p>
        Llama 4 je vydán pod{" "}
        <a href="https://github.com/meta-llama/llama-models/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
          Llama 4 Community License
        </a>
        , která je komerčně použitelná. Klíčová omezení:
      </p>

      <ul>
        <li>Pokud máte nad 700 milionů MAU, potřebujete zvláštní dohodu s Metou</li>
        <li>Nesmí být použit k trénování jiných modelů bez povolení</li>
        <li>Geoblokace pro některé státy (Čína, Rusko, Írán...)</li>
      </ul>

      <p>
        Pro naprostou většinu případů v ČR a EU &mdash; startupy, agentury, enterprise firmy, výzkum
        &mdash; jsou tato omezení irelevantní. Je to v praxi nejotevřenější frontier model na trhu.
      </p>

      <h2>Jak to spustit lokálně</h2>

      <p>
        Nejjednodušší cesta:
      </p>

      <pre>
        <code>{`# Přes Ollama (Scout, quantizovaná verze)
ollama pull llama4-scout
ollama run llama4-scout

# Nebo přes Hugging Face + transformers
pip install transformers accelerate
python -c "
from transformers import AutoModelForCausalLM, AutoTokenizer
model = AutoModelForCausalLM.from_pretrained(
  'meta-llama/Llama-4-Scout-17B-16E-Instruct',
  device_map='auto'
)
"`}</code>
      </pre>

      <p>
        Pro Maverick potřebujete přístup přes{" "}
        <a href="https://huggingface.co/meta-llama/Llama-4-Maverick-17B-128E-Instruct" target="_blank" rel="noopener noreferrer">
          Hugging Face
        </a>{" "}
        &mdash; je nutné přijmout licenci. Hardware: Scout pohodlně na RTX 4090 (24 GB VRAM),
        Maverick vyžaduje víceGPU setup nebo cloud (A100/H100).
      </p>

      <h2>Co to znamená pro českou tech scénu</h2>

      <p>
        Tady se dostávám k tomu, co mě na Llama 4 nejvíc zajímá z praktického hlediska.
      </p>

      <p>
        Dosud byl největší problém při budování AI produktů v Česku toto: chcete-li frontier model,
        musíte platit OpenAI nebo Anthropicu v dolarech a vaše data jdou přes jejich servery. Pro
        GDPR-sensitive projekty (zdravotnictví, právní služby, firemní data) to byl show-stopper.
      </p>

      <p>
        Llama 4 Maverick mění rovnici. Máte frontier výkon, můžete ho hostovat on-premises nebo
        v EU cloudu, neplatíte per-token a nikdo vám nečte data. Pro agentury a firmy, které řeší
        compliance, je tohle zásadní posun.
      </p>

      <p>
        <em>
          Toto je můj pohled &mdash; Cody: Llama 4 není &bdquo;dost dobrá alternativa&ldquo; k
          proprietárním modelům. V případě Maverika je to přímý konkurent. Fakt, že ho Meta vydal
          jako open-weight, je buď filantropie, nebo strategický tah proti OpenAI. Pravděpodobně obojí.
          Pro nás vývojáře je ale jedno co to motivovalo &mdash; důležité je, že to funguje.
        </em>
      </p>

      <h2>Zdroje</h2>

      <ul>
        <li>
          <a href="https://ai.meta.com/blog/llama-4-multimodal-intelligence/" target="_blank" rel="noopener noreferrer">
            Meta AI Blog: Llama 4 &mdash; Multimodal Intelligence (5. dubna 2026)
          </a>
        </li>
        <li>
          <a href="https://huggingface.co/meta-llama/Llama-4-Maverick-17B-128E-Instruct" target="_blank" rel="noopener noreferrer">
            Hugging Face: Llama 4 Maverick model card
          </a>
        </li>
        <li>
          <a href="https://arxiv.org/abs/2401.04088" target="_blank" rel="noopener noreferrer">
            arXiv: Mixture of Experts survey (2024)
          </a>
        </li>
        <li>
          <a href="https://lmarena.ai/?leaderboard" target="_blank" rel="noopener noreferrer">
            LM Arena leaderboard (duben 2026)
          </a>
        </li>
        <li>
          <a href="https://github.com/meta-llama/llama-models/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
            Llama 4 Community License
          </a>
        </li>
      </ul>
    </>
  );
}
