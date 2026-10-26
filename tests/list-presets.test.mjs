import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  copyFileSync,
  mkdirSync,
  mkdtempSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const script = fileURLToPath(
  new URL("../skills/markdown-guide/scripts/list-presets.mjs", import.meta.url)
);

function run(...args) {
  return spawnSync(process.execPath, [script, ...args], { encoding: "utf8" });
}

test("lists all presets", () => {
  const result = run();

  assert.equal(result.status, 0);
  assert.match(result.stdout, /\| ID \| Status \| Applies to \| Purpose \|/);
  assert.match(result.stdout, /\| project \| active \|/);
  assert.match(result.stdout, /\| stitch-design \| active \|/);
  assert.match(result.stdout, /\| adr \| active \|/);
  assert.match(result.stdout, /\| todo-list \| active \|/);
  assert.match(result.stdout, /\| glossary \| active \|/);
});

test("searches by id", () => {
  const result = run("adr");

  assert.equal(result.status, 0);
  assert.match(result.stdout, /\| adr \| active \|/);
  assert.doesNotMatch(result.stdout, /stitch-design/);
});

test("searches by applies-to and purpose", () => {
  const result = run("ui");

  assert.equal(result.status, 0);
  assert.match(result.stdout, /\| stitch-design \| active \|/);
});

test("searches cases where the query matches multiple presets", () => {
  const result = run("incident");

  assert.equal(result.status, 0);
  assert.match(result.stdout, /\| incident \| active \|/);
  assert.match(result.stdout, /\| post-mortem \| active \|/);
});

test("returns a non-zero exit code when nothing matches", () => {
  const result = run("definitely-not-a-preset");

  assert.equal(result.status, 1);
  assert.match(result.stderr, /No presets match/);
});

test("supports plain text output", () => {
  const result = run("--plain", "adr");

  assert.equal(result.status, 0);
  assert.match(result.stdout, /ID\s+STATUS\s+APPLIES TO\s+PURPOSE/);
  assert.match(result.stdout, /adr\s+active/);
  assert.doesNotMatch(result.stdout, /^\| ID/m);
});

test("parses CRLF and BOM line endings", () => {
  const root = mkdtempSync(join(tmpdir(), "markdown-guide-crlf-"));
  const copiedScript = join(root, "scripts", "list-presets.mjs");

  try {
    mkdirSync(join(root, "scripts"));
    mkdirSync(join(root, "presets"));
    copyFileSync(script, copiedScript);

    const fixture = [
      "\uFEFF---",
      "id: crlf",
      "status: active",
      "applies-to: [ui, test]",
      "---",
      "",
      "## Purpose",
      "",
      "CRLF fixture.",
      "",
    ].join("\r\n");

    writeFileSync(join(root, "presets", "crlf.md"), fixture);

    const result = spawnSync(process.execPath, [copiedScript], {
      encoding: "utf8",
    });

    assert.equal(result.status, 0);
    assert.match(result.stdout, /\| crlf \| active \| ui, test \| CRLF fixture\. \|/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
