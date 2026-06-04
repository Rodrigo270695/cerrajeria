/**
 * Inserta el snippet GTM en el HTML estático generado por `next build`.
 * Así aparece en "Ver código fuente" y lo detecta el verificador de Google.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const appDir = path.join(root, ".next", "server", "app");

const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim() || "GTM-TD47QX9S";

const headSnippet = `<!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');</script><!-- End Google Tag Manager -->`;

const bodySnippet = `<!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) -->`;

const marker = `<!-- Google Tag Manager -->`;

function patchFile(filePath) {
  let html = fs.readFileSync(filePath, "utf8");
  if (html.includes(marker)) return false;

  if (!html.includes("<head")) {
    console.warn(`[gtm] Sin <head>: ${filePath}`);
    return false;
  }

  html = html.replace(/<head([^>]*)>/, `<head$1>${headSnippet}`);
  html = html.replace(/<body([^>]*)>/, `<body$1>${bodySnippet}`);

  fs.writeFileSync(filePath, html, "utf8");
  return true;
}

function walk(dir) {
  if (!fs.existsSync(dir)) {
    console.error("[gtm] No existe .next/server/app — ejecuta npm run build antes.");
    process.exit(1);
  }

  let patched = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      patched += walk(full);
      continue;
    }
    if (entry.name.endsWith(".html")) {
      if (patchFile(full)) patched += 1;
    }
  }
  return patched;
}

const count = walk(appDir);
console.log(`[gtm] Snippet insertado en ${count} archivo(s) HTML (${gtmId}).`);
