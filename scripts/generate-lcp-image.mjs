/**
 * Genera variantes estáticas AVIF/WebP del hero LCP (móvil).
 * Uso: node scripts/generate-lcp-image.mjs
 */
import { writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCE = path.resolve("public/hero/perfil.jpg");
const OUT_DIR = path.resolve("public/hero");
const WIDTH = 640;

async function main() {
  const pipeline = sharp(SOURCE).rotate().resize({
    width: WIDTH,
    fit: "inside",
    withoutEnlargement: true,
  });

  const webp = await pipeline
    .clone()
    .webp({ quality: 72, effort: 6 })
    .toFile(path.join(OUT_DIR, "perfil-lcp.webp"));

  const avif = await pipeline
    .clone()
    .avif({ quality: 52, effort: 6 })
    .toFile(path.join(OUT_DIR, "perfil-lcp.avif"));

  const meta = {
    width: webp.width,
    height: webp.height,
    webpKb: Math.round(webp.size / 1024),
    avifKb: Math.round(avif.size / 1024),
  };

  await writeFile(
    path.join(OUT_DIR, "perfil-lcp.meta.json"),
    `${JSON.stringify(meta, null, 2)}\n`,
  );

  console.log("LCP images generated:", meta);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
