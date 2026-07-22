import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("exports a complete GitHub Pages artifact", async () => {
  await Promise.all([
    access(new URL("out/index.html", root)),
    access(new URL("out/og.png", root)),
  ]);
  await assert.rejects(access(new URL("out/media/hebrus-mark.png", root)));

  const html = await readFile(new URL("out/index.html", root), "utf8");
  assert.match(html, /\/hebrus-site\/_next\//);
  assert.match(html, /class="brandMark"[^>]*>H</);
  assert.match(html, /class="visualWordmark"/);
  assert.doesNotMatch(html, /\/hebrus-site\/media\/0[123]-/);
  assert.doesNotMatch(html, /\/hebrus-site\/media\/hebrus-mark\.png/);
  assert.match(html, /github\.com\/andreaborio\/hebrus-studio\/releases\/download\/hebrus-studio-v0\.4\.0-dev\.1/);
  assert.match(html, /https:\/\/andreaborio\.github\.io\/hebrus-site\/og\.png/);
  assert.doesNotMatch(html, /dmg\.segment-/);
});
