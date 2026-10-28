#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const script = fileURLToPath(
  new URL("../skills/markdown-guide/scripts/list-presets.mjs", import.meta.url)
);

const result = spawnSync(process.execPath, [script, ...process.argv.slice(2)], {
  stdio: "inherit",
});

process.exit(result.status ?? 1);
