import { readFileSync, writeFileSync } from "node:fs";

const pkg = JSON.parse(readFileSync("package.json", "utf8"));
const version = pkg.version;

function update(file, transform) {
  const before = readFileSync(file, "utf8");
  const after = transform(before);

  if (after !== before) {
    writeFileSync(file, after);
    console.log(`Updated ${file} to ${version}`);
    return;
  }

  console.log(`No change in ${file}`);
}

update("skills/markdown-guide/SKILL.md", (text) =>
  text.replace(/^  version: "[^"]+"$/m, `  version: "${version}"`)
);

update("README.md", (text) =>
  text.replace(
    /^Current version: .*\. See `CHANGELOG\.md`\.$/m,
    "Current version: " + version + ". See `CHANGELOG.md`."
  )
);
