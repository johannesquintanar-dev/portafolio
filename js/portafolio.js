/* Portafolio — piezas propias del rediseño: el escaparate con pestañas del proyecto destacado
   y los contadores que suben al entrar en pantalla. El resto (menú, idioma, modal, aparición)
   vive en script.js. */
(() => {
  "use strict";

  /* Escaparate: cada pestaña enseña una captura y su explicación */
  const escaparate = document.querySelector("[data-escaparate]");
  if (escaparate) {
    const pestanas = [...escaparate.querySelectorAll(".showcase-tab")];
    const imagenes = [...escaparate.querySelectorAll(".browser-body img")];
    const leyenda = escaparate.querySelector(".showcase-caption span");
    const url = escaparate.querySelector(".browser-url");
    const t = (clave) => window.portfolioI18n.translate(window.portfolioI18n.getStoredLanguage(), clave);

    const activar = (pestana, enfocar) => {
      const id = pestana.dataset.captura;
      pestanas.forEach((p) => {
        const activa = p === pestana;
        p.setAttribute("aria-selected", String(activa));
        p.tabIndex = activa ? 0 : -1;
      });
      imagenes.forEach((img) => {
        const activa = img.dataset.captura === id;
        img.classList.toggle("is-active", activa);
        if (activa && img.dataset.src) { img.src = img.dataset.src; if (img.dataset.srcset) img.srcset = img.dataset.srcset; delete img.dataset.src; }
      });
      if (leyenda) { leyenda.dataset.i18n = "thelsa.cap." + id; leyenda.textContent = t("thelsa.cap." + id); }
      if (url) url.textContent = pestana.dataset.url || "";
      if (enfocar) pestana.focus();
    };

    pestanas.forEach((pestana, i) => {
      pestana.addEventListener("click", () => activar(pestana, false));
      pestana.addEventListener("keydown", (e) => {
        const paso = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!paso) return;
        e.preventDefault();
        activar(pestanas[(i + paso + pestanas.length) % pestanas.length], true);
      });
    });
    // Precarga las demás capturas cuando el escaparate entra en pantalla
    const precargar = () => imagenes.forEach((img) => { if (img.dataset.src) { img.src = img.dataset.src; if (img.dataset.srcset) img.srcset = img.dataset.srcset; delete img.dataset.src; } });
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { precargar(); io.disconnect(); } }, { rootMargin: "300px" });
      io.observe(escaparate);
    } else precargar();
    document.addEventListener("portfolio:language", () => { const activa = pestanas.find((p) => p.getAttribute("aria-selected") === "true"); if (activa) activar(activa, false); });
  }

  /* Contadores: suben de 0 al valor una sola vez */
  const contadores = [...document.querySelectorAll("[data-contar]")];
  const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const animar = (el) => {
    const fin = Number(el.dataset.contar);
    const sufijo = el.dataset.sufijo || "";
    if (reducido || !Number.isFinite(fin)) { el.textContent = fin + sufijo; return; }
    const inicio = performance.now(), dur = 1100;
    const paso = (ahora) => {
      const p = Math.min(1, (ahora - inicio) / dur);
      const suave = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(fin * suave) + sufijo;
      if (p < 1) requestAnimationFrame(paso);
    };
    requestAnimationFrame(paso);
  };
  if (contadores.length) {
    if (!("IntersectionObserver" in window)) contadores.forEach(animar);
    else {
      const io = new IntersectionObserver((es) => { es.forEach((e) => { if (e.isIntersecting) { animar(e.target); io.unobserve(e.target); } }); }, { threshold: 0.4 });
      contadores.forEach((c) => { c.textContent = "0" + (c.dataset.sufijo || ""); io.observe(c); });
    }
  }
})();
