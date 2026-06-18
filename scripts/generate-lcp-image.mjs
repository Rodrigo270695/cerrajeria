/**
 * Genera variantes estáticas AVIF/WebP del hero LCP (móvil).
 * Uso: node scripts/generate-lcp-image.mjs
 *
 * En VPS con CPU antigua sharp puede fallar — si ya existen perfil-lcp.*
 * en public/hero/, el build continúa sin error (se generan en local).
 */
import { access, writeFile } from "node:fs/promises";
import path from "node:path";

const SOURCE = path.resolve("public/hero/perfil.jpg");
const OUT_DIR = path.resolve("public/hero");
const AVIF_OUT = path.join(OUT_DIR, "perfil-lcp.avif");
const WIDTH = 640;

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  if (!(await fileExists(SOURCE))) {
    console.warn(`[lcp] Fuente no encontrada: ${SOURCE}`);
    if (await fileExists(AVIF_OUT)) {
      console.warn("[lcp] Se usan perfil-lcp.avif/webp ya presentes en public/hero.");
      return;
    }
    throw new Error("Falta perfil.jpg y no hay perfil-lcp.avif generado.");
  }

  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch (error) {
    if (await fileExists(AVIF_OUT)) {
      console.warn(
        "[lcp] sharp no disponible en este servidor (CPU antigua). " +
          "Usando perfil-lcp.avif/webp del repositorio.",
      );
      return;
    }
    throw error;
  }

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
    .toFile(AVIF_OUT);

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

  console.log("[lcp] Imágenes generadas:", meta);
}

main().catch((error) => {
  console.error("[lcp]", error.message || error);
  process.exit(1);
});
