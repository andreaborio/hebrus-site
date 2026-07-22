<p align="center">
  <img src="public/og.png" width="900" alt="Hebrus Studio — Metal first. SSD when memory ends.">
</p>

# Hebrus Studio website

The open-source editorial landing page for [Hebrus](https://github.com/andreaborio/hebrus)
and [Hebrus Studio](https://github.com/andreaborio/hebrus-studio): local inference built
first for Apple Metal and adaptive SSD streaming.

**Live site:** [andreaborio.github.io/hebrus-site](https://andreaborio.github.io/hebrus-site/)

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The development server uses
root-relative paths; the production export is generated under `/hebrus-site`.

## Quality checks

```bash
npm run lint
npm test
npm audit
```

`npm test` creates the GitHub Pages export and verifies its base paths, metadata,
screenshots, and GitHub Release download URL.

## Deployment

Every push to `main` runs `.github/workflows/pages.yml`. The workflow performs
the quality checks, exports the static site to `out/`, and deploys that artifact
to GitHub Pages. Downloadable builds live in GitHub Releases rather than in the
Pages repository.

The current development DMG is intentionally labelled as ad-hoc signed; it is
not the future Developer ID–signed and notarized public release.

## Content and release policy

- Keep `public/og.png` as the canonical typographic Hebrus Studio banner used by
  the site and ecosystem documentation.
- Update screenshots from the Hebrus Studio repository before a release.
- Publish a replacement DMG only after recording its version, size and SHA-256.
- Do not describe an ad-hoc build as a notarized or official public release.
- Preserve the project lineage and technical references in the open-source
  section, including DS4 by Salvatore Sanfilippo, llama.cpp/GGML and MLX.

## Main files

- `app/page.tsx` — page structure and copy
- `app/globals.css` — editorial layout and responsive design
- `public/media/` — product screenshots
- `public/og.png` — social sharing card
- `.github/workflows/pages.yml` — tested GitHub Pages deployment

## License and attribution

Website code is released under the [MIT License](LICENSE). Product and upstream
attribution on the page is part of the release content and must not be removed
during redesigns.
