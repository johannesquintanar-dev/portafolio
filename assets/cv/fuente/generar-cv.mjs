// Genera los PDF del CV a partir de cv-es.html y cv-en.html con el Chrome/Edge instalado (sin dependencias).
// Uso: node assets/cv/fuente/generar-cv.mjs   (desde la raíz del repositorio)
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const aqui = dirname(fileURLToPath(import.meta.url));
const salida = resolve(aqui, "..");
const CDP = process.env.CDP_LIB || "C:/Users/Programador/.claude/skills/taste-skill/scripts/lib/cdp.mjs";
const { Browser, sleep } = await import(pathToFileURL(CDP).href);

const browser = await Browser.launch();
try {
  for (const [html, pdf] of [["cv-es.html", "Jonas_Castillo_CV_Spanish.pdf"], ["cv-en.html", "Jonas_Castillo_CV_English.pdf"]]) {
    const page = await browser.newPage({ width: 1000, height: 1300 });
    await page.goto(pathToFileURL(resolve(aqui, html)).href, { timeoutMs: 30000, settleMs: 300 });
    await sleep(400);
    const { data } = await page.send("Page.printToPDF", {
      paperWidth: 8.5, paperHeight: 11, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0,
      printBackground: true, preferCSSPageSize: true, displayHeaderFooter: false,
    });
    writeFileSync(resolve(salida, pdf), Buffer.from(data, "base64"));
    console.log("listo", pdf, Math.round(Buffer.from(data, "base64").length / 1024) + " KB");
  }
} finally {
  await browser.close();
}
