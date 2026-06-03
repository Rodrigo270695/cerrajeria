/**
 * Comprime JPEG/PNG en public/hero y public/pagos.
 * Uso: node scripts/optimize-images.mjs
 */
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public");
const TARGETS = ["hero", "pagos"];

const MAX_WIDTH = {
  hero: 1280,
  pagos: 256,
};

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) return;

  const folder = path.basename(path.dirname(filePath));
  const maxWidth = MAX_WIDTH[folder] ?? 1280;
  const before = (await stat(filePath)).size;

  const pipeline = sharp(filePath).rotate().resize({
    width: maxWidth,
    height: maxWidth,
    fit: "inside",
    withoutEnlargement: true,
  });

  if (ext === ".png") {
    await pipeline.png({ quality: 80, compressionLevel: 9 }).toFile(`${filePath}.tmp`);
  } else {
    await pipeline.jpeg({ quality: 78, mozjpeg: true }).toFile(`${filePath}.tmp`);
  }

  const { rename, unlink } = await import("node:fs/promises");
  await unlink(filePath);
  await rename(`${filePath}.tmp`, filePath);

  const after = (await stat(filePath)).size;
  const saved = Math.round(((before - after) / before) * 100);
  console.log(
    `${path.relative(ROOT, filePath)}: ${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB (-${saved}%)`,
  );
}

async function main() {
  for (const target of TARGETS) {
    const dir = path.join(ROOT, target);
    const files = await walk(dir);
    for (const file of files) {
      await optimizeFile(file);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
