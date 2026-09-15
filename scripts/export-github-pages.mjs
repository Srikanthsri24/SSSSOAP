import { mkdir, cp, writeFile } from "node:fs/promises";
import path from "node:path";

const origin = process.env.EXPORT_ORIGIN || "http://127.0.0.1:8787";
const base = process.env.GITHUB_PAGES_BASE || "/SSSSOAP";
const out = path.resolve("docs");
const routes = ["/", "/about", "/wings", "/initiatives", "/districts", "/resources", "/get-involved", "/contact"];

await mkdir(out, { recursive: true });
for (const route of routes) {
  const response = await fetch(`${origin}${route}`);
  if (!response.ok) throw new Error(`${route}: ${response.status}`);
  let html = await response.text();
  html = html.replaceAll('href="/', `href="${base}/`).replaceAll('src="/', `src="${base}/`);
  const dir = route === "/" ? out : path.join(out, route.slice(1));
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), html);
}
await cp(path.resolve("dist/client/_next"), path.join(out, "_next"), { recursive: true });
for (const asset of ["ssssoap_logo.jpeg", "om-emblem.svg", "andhra-pradesh-map.svg", "lamp-emblem.svg", "favicon.svg"]) {
  try { await cp(path.resolve("dist/client", asset), path.join(out, asset)); } catch {}
}
await writeFile(path.join(out, ".nojekyll"), "");
console.log(`Exported ${routes.length} routes to ${out}`);
