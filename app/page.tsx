import type { Metadata } from "next";
const studioDownloadUrl = "https://github.com/andreaborio/hebrus-studio/releases/download/hebrus-studio-v0.4.0-dev.1/Hebrus-Studio-0.4.0-macOS-arm64.dmg";

const proofPoints = [
  {
    title: "Private by default",
    body: "Chats, prompts and model files stay on your Mac.",
  },
  {
    title: "Built for Metal",
    body: "Apple Silicon is the primary target, not a fallback.",
  },
  {
    title: "SSD assisted",
    body: "Large MoE models can keep moving when memory gets tight.",
  },
];

const productCards = [
  {
    eyebrow: "Model library",
    title: "Models, without the guesswork.",
    body: "Bring your local GGUFs. Hebrus identifies compatible models and keeps every source and revision visible before the engine starts.",
    statement: "GGUF in. Certainty out.",
  },
  {
    eyebrow: "Runtime",
    title: "One switch. No hidden state.",
    body: "Start the local engine and see the active model, Metal execution, and resolved memory mode in one calm surface.",
    statement: "Engine on. State visible.",
  },
];

function BrandMark() {
  return <span className="brandMark" aria-hidden="true">H</span>;
}

export const metadata: Metadata = {
  title: "Hebrus Studio — Local AI for Mac",
  description:
    "A polished Mac app for private local AI with Hebrus, Metal-first execution and SSD-assisted large models.",
};

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Hebrus Studio home">
          <BrandMark />
          <span className="brandName">Hebrus Studio</span>
        </a>
        <div className="navLinks">
          <a href="#product">Product</a>
          <a href="#engine">Engine</a>
          <a href="#open-source">Source</a>
        </div>
        <a className="navCta" href={studioDownloadUrl}>Download</a>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="kicker">Local AI for Apple Silicon</p>
          <h1>Local AI, built for <em>your Mac.</em></h1>
          <p className="lede">
            A native studio for running compatible local models with private chat,
            clear setup, and a Metal-first engine that can stream from SSD.
          </p>
          <div className="heroActions">
            <a className="button buttonDark" href={studioDownloadUrl}>
              <span>Download for macOS</span>
              <span aria-hidden="true">&darr;</span>
            </a>
            <a className="textLink" href="https://github.com/andreaborio/hebrus-studio">
              View source <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <p className="releaseMeta">macOS 13+ / Apple Silicon / v0.4.0 development preview</p>
        </div>
        <div className="heroVisual" aria-label="Hebrus Studio identity and runtime principles">
          <div className="visualHeader">
            <span>Hebrus Studio</span>
            <span>Local / private</span>
          </div>
          <div className="visualCanvas">
            <p className="visualWordmark">Hebrus<br /><em>Studio</em></p>
            <div className="visualMonogram" aria-hidden="true">H</div>
          </div>
          <div className="visualFooter">
            <span>Metal first.</span>
            <span>SSD when memory ends.</span>
          </div>
        </div>
      </section>

      <section className="proofStrip shell" aria-label="Hebrus Studio highlights">
        {proofPoints.map((item) => (
          <article key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </section>

      <section className="product shell" id="product">
        <div className="sectionIntro">
          <p className="sectionLabel">The Studio</p>
          <h2>Less setup. More running.</h2>
          <p>
            A clear Mac interface between your models and the Hebrus engine.
            Choose what runs, understand how it runs, then chat locally.
          </p>
        </div>
        <div className="productGrid">
          {productCards.map((item) => (
            <article className="productCard" key={item.title}>
              <div className="productText">
                <p className="eyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
              <p className="productStatement">{item.statement}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="engine" id="engine">
        <div className="shell engineGrid">
          <div className="engineIntro">
            <p className="sectionLabel light">Hebrus Engine</p>
            <h2>Metal first. SSD assisted.</h2>
            <p>
              A focused inference path for supported large MoE models on Apple
              Silicon, with telemetry that says what is actually happening.
            </p>
          </div>
          <div className="engineFacts" aria-label="Engine capabilities">
            <article>
              <span>01</span>
              <div>
                <h3>Metal execution</h3>
                <p>Fast local inference for the hardware in your Mac.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Adaptive SSD</h3>
                <p>Resident or streamed experts, selected around your machine.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Honest status</h3>
                <p>Endpoint, model, privacy and memory mode remain visible.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="download shell" id="download">
        <div className="downloadLead">
          <p className="sectionLabel">Development preview</p>
          <h2>Download Hebrus Studio.</h2>
          <p>
            Try the Apple Silicon preview today. The current build is ad-hoc
            signed while the Developer ID notarized release is being prepared.
          </p>
        </div>
        <div className="downloadPanel">
          <a className="button buttonBlue" href={studioDownloadUrl}>
            <span>Download development DMG</span>
            <span aria-hidden="true">&darr;</span>
          </a>
          <p className="downloadMeta">macOS 13+ / Apple Silicon / 126 MB / v0.4.0</p>
          <p className="installNote">
            Drag to Applications, then Control-click Open once for this preview.
          </p>
        </div>
      </section>

      <section className="openSource shell" id="open-source">
        <div>
          <p className="sectionLabel">Open source</p>
          <h2>Public work, credited lineage.</h2>
        </div>
        <div className="openCopy">
          <p>
            Hebrus began as a fork of Salvatore Sanfilippo&apos;s <a href="https://github.com/antirez/ds4">DS4</a>.
            The project also credits <a href="https://github.com/ggerganov/llama.cpp">llama.cpp / GGML</a>{" "}
            and <a href="https://github.com/ml-explore/mlx">MLX</a> as technical references.
          </p>
          <div className="sourceLinks">
            <a href="https://github.com/andreaborio/hebrus">Engine source <span aria-hidden="true">&rarr;</span></a>
            <a href="https://github.com/andreaborio/hebrus-studio">Studio source <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top">
          <BrandMark />
          <span className="brandName">Hebrus Studio</span>
        </a>
        <p>Local inference for Apple Silicon.</p>
        <p>&copy; 2026 Hebrus contributors</p>
      </footer>
    </main>
  );
}
