import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const main = readFileSync(new URL("../src/main.tsx", import.meta.url), "utf8");
const seo = readFileSync(new URL("../src/seoAudit.ts", import.meta.url), "utf8");
const sitemap = readFileSync(new URL("../public/sitemap.xml", import.meta.url), "utf8");

test("SEO module is loaded by the app entrypoint", () => {
  assert.match(main, /from "\.\/seoAudit"/);
});

test("both public secondary routes have distinct SEO titles", () => {
  assert.match(seo, /'\/criar-link': 'Criar Link Grátis/);
  assert.match(seo, /'\/politicas': 'Termos de Uso/);
});

test("canonical is derived only from the current public route", () => {
  assert.match(seo, /if \(title\)/);
  assert.match(seo, /link\[rel="canonical"\]/);
  assert.match(seo, /meuprovadorvirtual\.com/);
});

test("sitemap lists exactly the three public pages", () => {
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(urls, [
    "https://meuprovadorvirtual.com/",
    "https://meuprovadorvirtual.com/criar-link",
    "https://meuprovadorvirtual.com/politicas",
  ]);
});
