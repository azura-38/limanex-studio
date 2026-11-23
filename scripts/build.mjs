import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const distDir = path.join(root, "dist");

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });

const htmlPages = [
  "index.html",
  "404.html",
  "apps.html",
  "games.html",
  "ai.html",
  "contact.html",
  "delete-account.html",
  "apps/vitacase.html",
  "apps/meowoirs.html",
  "privacy/index.html",
  "privacy/vitacase.html",
  "privacy/meowoirs.html",
  "terms/vitacase.html",
  "terms/meowoirs.html",
  "disclaimer/vitacase.html",
  "disclaimer/meowoirs.html"
];

let copiedCount = 0;

for (const rel of [...htmlPages, "styles.css", "main.js"]) {
  const src = path.join(root, ...rel.split("/"));
  const dest = path.join(distDir, ...rel.split("/"));
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  copiedCount += 1;
}

const copyDirFiles = (srcDir, destDir) => {
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyDirFiles(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      copiedCount += 1;
    }
  }
};

const assetsSrc = path.join(root, "assets");
const assetsDest = path.join(distDir, "assets");
fs.mkdirSync(assetsDest, { recursive: true });
copyDirFiles(assetsSrc, assetsDest);

const publicSrc = path.join(root, "public");
copyDirFiles(publicSrc, distDir);

console.log(`Built dist/ with ${copiedCount} files.`);
