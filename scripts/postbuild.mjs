/**
 * Post-build script:
 * 1. Copies the _next folder into each sub-page directory
 * 2. Rewrites absolute image/asset paths to relative ones in all HTML files
 *    so they work when opened directly via file:// (no server needed)
 */

import { cpSync, existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "fs";
import { join } from "path";

const outDir = join(process.cwd(), "out");
const nextDir = join(outDir, "_next");

if (!existsSync(nextDir)) {
  console.error("ERROR: out/_next not found. Run `npm run build` first.");
  process.exit(1);
}

/**
 * Rewrite absolute paths in an HTML file to relative ones.
 * @param {string} filePath - path to the HTML file
 * @param {string} prefix   - e.g. "." for root, ".." for one level deep
 */
function rewritePaths(filePath, prefix) {
  let html = readFileSync(filePath, "utf-8");

  // Fix <img src="/..."> and <source src="/..."> and <video src="/...">
  html = html.replace(/(<(?:img|source|video)[^>]+src=")\/(?!\/)/g, `$1${prefix}/`);

  // Fix <link rel="preload" as="image" href="/..."> in <head>
  html = html.replace(/(rel="preload"[^>]+href=")\/(?!\/)/g, `$1${prefix}/`);
  html = html.replace(/(href="preload"[^>]+href=")\/(?!\/)/g, `$1${prefix}/`);

  // Fix background-image:url('/...') in inline styles
  html = html.replace(/background-image:url\('\/(?!\/)/g, `background-image:url('${prefix}/`);

  // Fix style="background-image:url('/...') in style attributes
  html = html.replace(/(style="[^"]*background-image:url\()'\//g, `$1'${prefix}/`);

  // Fix style="background-image:url(&amp;#x27;/...&amp;#x27;)" (HTML-encoded in Next.js RSC)
  html = html.replace(/(url\(&amp;#x27;)\//g, `$1${prefix}/`);

  // Fix src="..." inside Next.js RSC payload JSON strings - e.g. \"src\":\"/Brand.gif\"
  // These are in <script> tags and contain the serialized React tree
  html = html.replace(/(\\\"src\\\":\\\")\//g, `$1${prefix}/`);
  html = html.replace(/(\\\"href\\\":\\\")\/(assets|Brand|Samsung|How)/g, `$1${prefix}/$2`);

  // Fix bg-[url('/assets/...')] inside Tailwind class strings in RSC JSON
  html = html.replace(/(bg-\[url\(')\//g, `$1${prefix}/`);

  writeFileSync(filePath, html, "utf-8");
}

// --- Root index.html (prefix = ".") ---
const rootHtml = join(outDir, "index.html");
if (existsSync(rootHtml)) {
  console.log("Rewriting paths in index.html ...");
  rewritePaths(rootHtml, ".");
  console.log("  ✅ Done");
}

// --- Sub-page index.html files (prefix = "..") ---
const entries = readdirSync(outDir);
for (const entry of entries) {
  const entryPath = join(outDir, entry);
  if (
    statSync(entryPath).isDirectory() &&
    entry !== "_next" &&
    !entry.startsWith("__next") &&
    !entry.startsWith("404") &&
    !entry.startsWith("_not-found") &&
    existsSync(join(entryPath, "index.html"))
  ) {
    // Copy _next into sub-page dir
    const destNextDir = join(entryPath, "_next");
    console.log(`Copying _next → ${entry}/_next ...`);
    cpSync(nextDir, destNextDir, { recursive: true });

    // Rewrite paths
    console.log(`Rewriting paths in ${entry}/index.html ...`);
    rewritePaths(join(entryPath, "index.html"), "..");
    console.log("  ✅ Done");
  }
}

console.log("\n✅ Post-build complete. All pages have relative assets and images.");
