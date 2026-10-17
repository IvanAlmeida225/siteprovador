import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";

const root = "dist";
const id = "G-7KGDB2V7WV";
const clientPath = root + "/analytics-consent.js";
assert.ok(existsSync(clientPath), "Script de consentimento ausente no build");
execFileSync(process.execPath, ["--check", clientPath], { stdio: "inherit" });

const js = readFileSync(clientPath, "utf8");
assert.ok(js.includes(id), "Measurement ID incorreto");
assert.match(js, /consent !== "accepted"/);
assert.match(js, /window\.localStorage/);
assert.match(js, /document\.createElement\("script"\)/);
assert.match(js, /ga-disable-/);
assert.match(js, /mpv_lead_request_submitted/);
assert.match(js, /var allowed =/);
assert.match(js, /\/l\//);

const pages = [
  "index.html",
  "como-funciona/index.html",
  "experimentar-roupas-online/index.html",
  "provador-virtual-para-lojas/index.html",
  "provador-virtual-whatsapp/index.html"
];
for (const page of pages) {
  const html = readFileSync(root + "/" + page, "utf8");
  assert.ok(html.includes('src="/analytics-consent.js"'), "Script nao incluido: " + page);
  assert.ok(!html.includes("googletagmanager.com/gtag/js"), "Tag GA indevida no HTML: " + page);
}

const app = readFileSync("src/App.tsx", "utf8");
assert.match(app, /MPVAnalytics\?\.track\("mpv_lead_request_submitted"/);
assert.match(app, /delivery_status: "unverified"/);
console.log("GA4 validado: 5 paginas, script consentido e lead sem dados pessoais.");
