import type { Metadata } from "next";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;
const studioDownloadUrl = "https://github.com/andreaborio/dsbox/releases/download/hebrus-studio-v0.4.0-dev.1/Hebrus-Studio-0.4.0-macOS-arm64.dmg";

const screenshots = [
  {
    index: "01",
    eyebrow: "Models",
    title: "Your library, understood.",
    body: "Hebrus Studio finds local GGUF models, qualifies supported architectures, and keeps configuration close to the model instead of buried in shell scripts.",
    image: assetPath("/media/02-models.png"),
    alt: "Local model library in Hebrus Studio",
  },
  {
    index: "02",
    eyebrow: "Runtime",
    title: "One switch. Real control.",
    body: "Start the engine, choose resident or SSD-backed execution, and see the active endpoint, memory mode, and runtime state without pretending complexity disappeared.",
    image: assetPath("/media/03-server.png"),
    alt: "Hebrus Studio local inference server controls",
  },
];

export const metadata: Metadata = {
  title: "Hebrus Studio — Local AI for Apple Silicon",
  description:
    "A native home for Hebrus: Metal-first local inference with adaptive SSD streaming on Apple Silicon.",
};

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Hebrus Studio home">
          <Image src={assetPath("/media/hebrus-mark.png")} alt="" width={1254} height={1254} priority />
          <span>Hebrus Studio</span>
        </a>
        <div className="navLinks">
          <a href="#studio">Studio</a>
          <a href="#engine">Engine</a>
          <a href="#open-source">Open source</a>
        </div>
        <a className="navCta" href="#download">Download</a>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="kicker">Local inference for Apple Silicon</p>
          <h1>
            Metal first.<br />SSD when <span>memory ends.</span>
          </h1>
          <p className="lede">
            Hebrus is a focused inference engine for large Mixture-of-Experts
            models. Hebrus Studio makes it feel at home on your Mac.
          </p>
          <div className="heroActions">
            <a className="button buttonDark" href="#download">
              Download for macOS
              <span aria-hidden="true">↓</span>
            </a>
            <a className="textLink" href="https://github.com/andreaborio/ds4">
              View the source <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="heroMark" aria-hidden="true">
          <Image src={assetPath("/media/hebrus-mark.png")} alt="" width={1254} height={1254} priority />
        </div>
      </section>

      <section className="productShot shell" aria-label="Hebrus Studio preview">
        <div className="windowBar">
          <span />
          <p>Hebrus Studio / Local session</p>
          <span>0.4</span>
        </div>
        <Image src={assetPath("/media/01-chat.png")} alt="Hebrus Studio running a private local chat" width={1280} height={720} priority />
      </section>

      <section className="statement shell" id="studio">
        <p className="sectionLabel">Hebrus Studio</p>
        <h2>A private place for <em>local intelligence.</em></h2>
        <p>
          One composed native surface for models, conversations and runtime.
          Nothing leaves your Mac; nothing important is hidden from you.
        </p>
      </section>

      <section className="features shell">
        {screenshots.map((item) => (
          <article className="feature" key={item.index}>
            <div className="featureText">
              <p className="featureIndex">{item.index}</p>
              <div>
                <p className="eyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </div>
            <div className="screenFrame">
              <Image src={item.image} alt={item.alt} width={1280} height={720} sizes="(max-width: 900px) 100vw, 1440px" />
            </div>
          </article>
        ))}
      </section>

      <section className="engine" id="engine">
        <div className="shell engineGrid">
          <div className="engineIntro">
            <p className="sectionLabel light">Hebrus Engine</p>
            <h2>Memory is a tier,<br /><em>not a wall.</em></h2>
            <p>
              Hebrus combines Metal execution, mmap-backed GGUF weights and an
              adaptive SSD path built specifically for supported large MoE models.
            </p>
          </div>
          <div className="engineFacts">
            <article>
              <p>01 / Execute</p>
              <h3>Metal-first</h3>
              <span>Apple Silicon is the primary architecture, not an afterthought.</span>
            </article>
            <article>
              <p>02 / Stream</p>
              <h3>Adaptive SSD</h3>
              <span>AUTO chooses resident or streamed experts around the machine you have.</span>
            </article>
            <article>
              <p>03 / Inspect</p>
              <h3>Honest telemetry</h3>
              <span>See runtime state, activity and memory mode instead of a decorative spinner.</span>
            </article>
            <article>
              <p>04 / Qualify</p>
              <h3>Focused support</h3>
              <span>A small explicit model matrix that fails closed when a model is not qualified.</span>
            </article>
          </div>
        </div>
      </section>

      <section className="download shell" id="download">
        <div className="downloadLead">
          <p className="sectionLabel">Development preview</p>
          <h2>Meet your<br /><em>local model.</em></h2>
          <p>
            Hebrus Studio 0.4.0 for Apple Silicon. This preview is ad-hoc signed
            for local evaluation while the Developer ID and notarized public
            release are being prepared.
          </p>
          <a
            className="button buttonBlue"
            href={studioDownloadUrl}
          >
            Download development DMG
            <span aria-hidden="true">↓</span>
          </a>
          <p className="downloadMeta">macOS 13+ · Apple Silicon · 126 MB · v0.4.0</p>
        </div>
        <div className="installCard">
          <p className="eyebrow">Install the preview</p>
          <ol>
            <li><span>01</span>Open the DMG and drag Hebrus Studio to Applications.</li>
            <li><span>02</span>Open Applications, Control-click Hebrus Studio, then choose Open.</li>
            <li><span>03</span>Confirm Open once. Future launches work normally.</li>
          </ol>
          <p className="installNote">
            The Control-click step is required only because this development build
            is not yet notarized. The public release will use Developer ID signing.
          </p>
        </div>
      </section>

      <section className="openSource" id="open-source">
        <div className="shell openGrid">
          <div>
            <p className="sectionLabel">Open by design</p>
            <h2>Built in public.<br /><em>Grounded in history.</em></h2>
          </div>
          <div className="openCopy">
            <p>
              Hebrus began as a fork of Salvatore Sanfilippo&apos;s <a href="https://github.com/antirez/ds4">DS4</a>.
              That initial work and substantial parts of the project&apos;s design history remain explicitly credited.
            </p>
            <p>
              <a href="https://github.com/ggerganov/llama.cpp">llama.cpp / GGML</a> and
              <a href="https://github.com/ml-explore/mlx"> MLX</a> are essential technical references.
              Attribution describes lineage and influence; it does not imply endorsement.
            </p>
            <div className="sourceLinks">
              <a href="https://github.com/andreaborio/ds4">Engine source ↗</a>
              <a href="https://github.com/andreaborio/dsbox">Studio source ↗</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top">
          <Image src={assetPath("/media/hebrus-mark.png")} alt="" width={1254} height={1254} />
          <span>Hebrus Studio</span>
        </a>
        <p>Local inference. Metal first. Open source.</p>
        <p>© 2026 Hebrus contributors</p>
      </footer>
    </main>
  );
}
