/**
 * Comprime JPEG/PNG y genera WebP para hero y pagos.
 * Uso: node scripts/optimize-images.mjs
 */
import { readdir, rename, stat, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public");
const TARGETS = ["hero", "pagos"];

const MAX_WIDTH = {
  hero: 1024,
  pagos: 256,
};

/** Miniaturas WebP para tarjetas de servicios (~176px × 2). */
const SERVICE_WEBP_WIDTH = 384;

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
  const maxWidth = MAX_WIDTH[folder] ?? 1024;
  const before = (await stat(filePath)).size;

  const pipeline = sharp(filePath).rotate().resize({
    width: maxWidth,
    height: maxWidth,
    fit: "inside",
    withoutEnlargement: true,
  });

  const tmp = `${filePath}.tmp`;
  if (ext === ".png") {
    await pipeline.png({ quality: 80, compressionLevel: 9 }).toFile(tmp);
  } else {
    await pipeline.jpeg({ quality: 72, mozjpeg: true }).toFile(tmp);
  }

  await unlink(filePath);
  await rename(tmp, filePath);

  const after = (await stat(filePath)).size;
  const saved = Math.round(((before - after) / before) * 100);
  console.log(
    `${path.relative(ROOT, filePath)}: ${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB (-${saved}%)`,
  );

  if (folder === "hero" && /\.(jpe?g)$/i.test(filePath)) {
    const webpPath = filePath.replace(/\.(jpe?g)$/i, ".webp");
    await sharp(filePath)
      .resize({
        width: SERVICE_WEBP_WIDTH,
        height: SERVICE_WEBP_WIDTH,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 68, effort: 6 })
      .toFile(webpPath);
    const webpSize = (await stat(webpPath)).size;
    console.log(
      `  → ${path.relative(ROOT, webpPath)}: ${Math.round(webpSize / 1024)}KB`,
    );
  }
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
