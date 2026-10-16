import { existsSync, readFileSync } from "node:fs";
import assert from "node:assert/strict";

const domain = "https://meuprovadorvirtual.com";
const slugs = [
  "provador-virtual-whatsapp",
  "provador-virtual-para-lojas",
  "experimentar-roupas-online",
  "como-funciona",
];

function getText(path) {
  assert.ok(existsSync(path), "Arquivo ausente: " + path);
  return readFileSync(path, "utf8");
}

const homepage = getText("dist/index.html");
const homeScript = homepage.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
assert.ok(homeScript, "JSON-LD ausente na home");
const homeData = JSON.parse(homeScript[1]);
for (const type of ["Organization", "SoftwareApplication", "Service", "WebSite"]) {
  assert.ok(homeData["@graph"].some((node) => node["@type"] === type), "Schema ausente: " + type);
}

const sitemap = getText("dist/sitemap.xml");
const robots = getText("dist/robots.txt");
assert.match(robots, /User-agent:\s*OAI-SearchBot/i);
assert.match(robots, /Disallow:\s*\/l\//);
for (const slug of slugs) {
  const canonical = domain + "/" + slug + "/";
  const page = getText("dist/" + slug + "/index.html");
  assert.ok(page.includes('<link rel="canonical" href="' + canonical + '">'), "Canonical incorreta: " + slug);
  assert.match(page, /<h1>[^<]+<\/h1>/);
  assert.ok(page.includes("/criar-link"), "CTA ausente: " + slug);
  assert.ok(sitemap.includes("<loc>" + canonical + "</loc>"), "Sitemap ausente: " + slug);
  const match = page.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(match, "JSON-LD ausente: " + slug);
  JSON.parse(match[1]);
}

console.log("GEO/SEO validado: home + " + slugs.length + " paginas comerciais.");
