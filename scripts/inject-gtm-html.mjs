/**
 * Optimiza el HTML estático tras `next build`:
 * - CSS crítico + GTM diferido justo después del preload LCP
 * - CSS principal sin bloqueo de renderizado
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { CRITICAL_CSS_TAG } from "../lib/critical-css.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.join(__dirname, "..", ".next", "server", "app");

const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim() || "GTM-TD47QX9S";

const gtmLoader = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`;

const headSnippet = `<!-- Google Tag Manager --><script>window.dataLayer=window.dataLayer||[];function gtmLoad(){${gtmLoader}}if("requestIdleCallback"in window){requestIdleCallback(gtmLoad,{timeout:3500})}else{window.addEventListener("load",gtmLoad)}</script><!-- End Google Tag Manager -->`;

const bodySnippet = `<!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) -->`;

const preloadNeedle = 'href="/hero/perfil-lcp.avif"';

function stripExistingGtm(html) {
  return html
    .replace(
      /<!-- Google Tag Manager -->[\s\S]*?<!-- End Google Tag Manager -->/g,
      "",
    )
    .replace(
      /<!-- Google Tag Manager \(noscript\) -->[\s\S]*?<!-- End Google Tag Manager \(noscript\) -->/g,
      "",
    )
    .replace(
      /<script>window\.dataLayer=window\.dataLayer\|\|\[\];function gtmLoad\(\)[\s\S]*?<\/script>/g,
      "",
    )
    .replace(
      /<noscript><iframe src="https:\/\/www\.googletagmanager\.com\/ns\.html\?id=[^"]+"[^>]*><\/iframe><\/noscript>/g,
      "",
    )
    .replace(/<style>\s*#hero-lcp-bg[\s\S]*?<\/style>/g, "");
}

/** Evita que el bundle CSS de Next bloquee el LCP. */
function asyncStylesheets(html) {
  return html.replace(
    /<link rel="stylesheet" href="(\/_next\/static\/[^"]+\.css)"([^>]*)\/>/g,
    '<link rel="preload" href="$1" as="style"$2 onload="this.onload=null;this.rel=\'stylesheet\'"/><noscript><link rel="stylesheet" href="$1"$2/></noscript>',
  );
}

function patchFile(filePath) {
  let html = fs.readFileSync(filePath, "utf8");
  html = stripExistingGtm(html);

  const preloadMatch = html.match(
    new RegExp(`<link[^>]*${preloadNeedle}[^>]*/>`, "i"),
  );

  if (preloadMatch) {
    html = html.replace(
      preloadMatch[0],
      `${preloadMatch[0]}${CRITICAL_CSS_TAG}${headSnippet}`,
    );
  } else if (html.includes("<head")) {
    html = html.replace(
      /<head([^>]*)>/,
      `<head$1>${CRITICAL_CSS_TAG}${headSnippet}`,
    );
  } else {
    console.warn(`[gtm] Sin preload ni <head>: ${filePath}`);
    return false;
  }

  html = html.replace(/<body([^>]*)>/, `<body$1>${bodySnippet}`);
  html = asyncStylesheets(html);

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
console.log(`[gtm] HTML optimizado en ${count} archivo(s) (${gtmId}).`);
