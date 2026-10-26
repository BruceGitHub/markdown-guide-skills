import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const script = fileURLToPath(new URL("../scripts/sync-skill-version.mjs", import.meta.url));

function createFixture() {
  const root = mkdtempSync(join(tmpdir(), "markdown-guide-"));

  writeFileSync(
    join(root, "package.json"),
    JSON.stringify({ name: "fixture", version: "9.9.9", private: true }, null, 2)
  );

  const skillDir = join(root, "skills", "markdown-guide");
  mkdirSync(skillDir, { recursive: true });
  writeFileSync(
    join(skillDir, "SKILL.md"),
    [
      "---",
      "name: Fixture",
      "metadata:",
      '  version: "1.0.0"',
      "---",
      "",
      "# Fixture",
      "",
    ].join("\n")
  );

  writeFileSync(
    join(root, "README.md"),
    "Current version: 1.0.0. See `CHANGELOG.md`.\n"
  );

  return root;
}

test("syncs the package version into SKILL.md and README.md", () => {
  const root = createFixture();

  try {
    const result = spawnSync(process.execPath, [script], {
      cwd: root,
      encoding: "utf8",
    });

    assert.equal(result.status, 0);
    assert.match(result.stdout, /Updated skills\/markdown-guide\/SKILL\.md to 9\.9\.9/);
    assert.match(readFileSync(join(root, "skills", "markdown-guide", "SKILL.md"), "utf8"), /version: "9\.9\.9"/);
    assert.match(readFileSync(join(root, "README.md"), "utf8"), /Current version: 9\.9\.9\./);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("handles CRLF line endings", () => {
  const root = createFixture();

  try {
    writeFileSync(
      join(root, "skills", "markdown-guide", "SKILL.md"),
      [
        "---",
        "name: Fixture",
        "metadata:",
        '  version: "1.0.0"',
        "---",
        "",
      ].join("\r\n")
    );
    writeFileSync(
      join(root, "README.md"),
      "Current version: 1.0.0. See `CHANGELOG.md`.\r\n"
    );

    const result = spawnSync(process.execPath, [script], {
      cwd: root,
      encoding: "utf8",
    });

    assert.equal(result.status, 0);
    assert.match(
      readFileSync(join(root, "skills", "markdown-guide", "SKILL.md"), "utf8"),
      /version: "9\.9\.9"/
    );
    assert.match(
      readFileSync(join(root, "README.md"), "utf8"),
      /Current version: 9\.9\.9\./
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("is idempotent when the version is already aligned", () => {
  const root = createFixture();
  writeFileSync(
    join(root, "skills", "markdown-guide", "SKILL.md"),
    "---\nname: Fixture\nmetadata:\n  version: \"9.9.9\"\n---\n"
  );
  writeFileSync(
    join(root, "README.md"),
    "Current version: 9.9.9. See `CHANGELOG.md`.\n"
  );

  try {
    const result = spawnSync(process.execPath, [script], {
      cwd: root,
      encoding: "utf8",
    });

    assert.equal(result.status, 0);
    assert.match(result.stdout, /No change in skills\/markdown-guide\/SKILL\.md/);
    assert.match(result.stdout, /No change in README\.md/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
