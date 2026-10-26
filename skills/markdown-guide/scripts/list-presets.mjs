import { readFileSync, readdirSync } from "node:fs";

const presetsDir = new URL("../presets/", import.meta.url);
const args = process.argv.slice(2);
const query = (args[0] === "--search" ? args.slice(1) : args).join(" ").trim().toLowerCase();

function normalizeText(text) {
  return text.replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n");
}

function parseFrontmatter(text) {
  if (!text.startsWith("---\n")) return {};

  const end = text.indexOf("\n---", 4);
  if (end === -1) return {};

  const data = {};
  for (const line of text.slice(4, end).split("\n")) {
    const match = line.match(/^([a-z-]+):\s*(.*)$/);
    if (!match) continue;

    const [, key, raw] = match;
    if (key === "applies-to") {
      data[key] = raw
        .replace(/^\[|\]$/g, "")
        .split(",")
        .map((value) => value.trim().replace(/^"|"$/g, ""))
        .filter(Boolean);
      continue;
    }

    data[key] = raw.trim().replace(/^"|"$/g, "");
  }

  return data;
}

function getPurpose(text) {
  const match = text.match(/## Purpose\n\n([\s\S]*?)(?=\n\n|\n## |$)/);
  return match ? match[1].replace(/\s+/g, " ").trim() : "";
}

const presets = readdirSync(presetsDir)
  .filter((file) => file.endsWith(".md") && file !== "index.md")
  .sort()
  .map((file) => {
    const text = normalizeText(readFileSync(new URL(file, presetsDir), "utf8"));
    const data = parseFrontmatter(text);
    return {
      id: data.id ?? file.replace(/\.md$/, ""),
      status: data.status ?? "unknown",
      appliesTo: data["applies-to"] ?? [],
      purpose: getPurpose(text),
    };
  });

const matches = query
  ? presets.filter((preset) =>
      [preset.id, preset.status, ...preset.appliesTo, preset.purpose]
        .join(" ")
        .toLowerCase()
        .includes(query)
    )
  : presets;

if (matches.length === 0) {
  console.error(`No presets match "${query}".`);
  process.exit(1);
}

const rows = [
  ["ID", "STATUS", "APPLIES TO", "PURPOSE"],
  ...matches.map((preset) => [
    preset.id,
    preset.status,
    preset.appliesTo.join(", "),
    preset.purpose,
  ]),
];

const widths = rows[0].map((_, column) =>
  Math.max(...rows.map((row) => row[column].length))
);

for (const row of rows) {
  console.log(row.map((value, column) => value.padEnd(widths[column])).join("  "));
}
