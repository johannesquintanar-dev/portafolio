(() => {
  "use strict";

  const root = document.documentElement;
  const body = document.body;
  const header = document.getElementById("site-header");
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileBackdrop = document.getElementById("mobile-menu-backdrop");
  const scrollProgress = document.getElementById("scroll-progress");
  const backToTop = document.getElementById("back-to-top");
  const currentYear = document.getElementById("current-year");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let currentLanguage = window.portfolioI18n.getStoredLanguage();
  let lastFocusedElement = null;
  let modalFallbackTimer = null;

  const setBodyLock = () => {
    const shouldLock = mobileMenu.classList.contains("is-open") ||
      document.getElementById("cv-modal").classList.contains("is-open");
    body.classList.toggle("is-locked", shouldLock);
  };

  /* Language */
  const updateLanguage = (language) => {
    currentLanguage = window.portfolioI18n.applyLanguage(language);
    updateCvLinks();
    if (menuButton.getAttribute("aria-expanded") === "true") {
      menuButton.setAttribute(
        "aria-label",
        window.portfolioI18n.translate(currentLanguage, "a11y.closeMenu")
      );
    }
  };

  document.querySelectorAll(".language-button").forEach((button) => {
    button.addEventListener("click", () => updateLanguage(button.dataset.lang));
  });

  /* Theme */
  const themeColorMeta = document.getElementById("theme-color-meta");
 const themeColors = {
  light: "#f8f5ef",
  dark: "#07141a",
  colorful: "#161220"
};
  const getInitialTheme = () => {
    const stored = window.portfolioI18n.storage.get("jonas-theme");
    if (["light", "dark", "colorful"].includes(stored)) return stored;
    // El sitio nace oscuro; el visitante puede cambiarlo y se recuerda su elección.
    return "dark";
  };

  const applyTheme = (theme) => {
    const safeTheme = ["light", "dark", "colorful"].includes(theme) ? theme : "dark";
    root.dataset.theme = safeTheme;
    window.portfolioI18n.storage.set("jonas-theme", safeTheme);
    themeColorMeta?.setAttribute("content", themeColors[safeTheme]);

    document.querySelectorAll(".theme-button").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.themeValue === safeTheme));
    });
  };

  document.querySelectorAll(".theme-button").forEach((button) => {
    button.addEventListener("click", () => applyTheme(button.dataset.themeValue));
  });

  /* Mobile navigation */
  const focusableSelector = [
    "a[href]",
    "button:not([disabled])",
    "[tabindex]:not([tabindex='-1'])"
  ].join(",");

  const openMenu = () => {
    mobileMenu.classList.add("is-open");
    mobileMenu.setAttribute("aria-hidden", "false");
    mobileBackdrop.hidden = false;
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute(
      "aria-label",
      window.portfolioI18n.translate(currentLanguage, "a11y.closeMenu")
    );
    setBodyLock();
    requestAnimationFrame(() => mobileMenu.querySelector(focusableSelector)?.focus());
  };

  const closeMenu = ({ restoreFocus = false } = {}) => {
    mobileMenu.classList.remove("is-open");
    mobileMenu.setAttribute("aria-hidden", "true");
    mobileBackdrop.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute(
      "aria-label",
      window.portfolioI18n.translate(currentLanguage, "a11y.openMenu")
    );
    setBodyLock();
    if (restoreFocus) menuButton.focus();
  };

  menuButton.addEventListener("click", () => {
    if (mobileMenu.classList.contains("is-open")) closeMenu();
    else openMenu();
  });

  mobileBackdrop.addEventListener("click", () => closeMenu({ restoreFocus: true }));

  mobileMenu.querySelectorAll("a[href^='#'], .cv-trigger").forEach((element) => {
    element.addEventListener("click", () => closeMenu());
  });

  mobileMenu.addEventListener("keydown", (event) => {
    if (event.key !== "Tab" || !mobileMenu.classList.contains("is-open")) return;
    const focusable = [...mobileMenu.querySelectorAll(focusableSelector)].filter(
      (element) => !element.hasAttribute("hidden") && element.offsetParent !== null
    );
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024 && mobileMenu.classList.contains("is-open")) closeMenu();
  });

  /* CV modal */
  const modalBackdrop = document.getElementById("cv-modal");
  const modal = modalBackdrop.querySelector(".cv-modal");
  const modalClose = document.getElementById("modal-close");
  const cvIframe = document.getElementById("cv-iframe");
  const cvLoading = document.getElementById("cv-loading");
  const cvOpenLink = document.getElementById("cv-open-link");
  const cvDownloadLink = document.getElementById("cv-download-link");

  const updateCvLinks = () => {
    const path = window.portfolioI18n.getCvPath(currentLanguage);
    cvOpenLink.href = path;
    cvDownloadLink.href = path;
    cvDownloadLink.setAttribute(
      "download",
      currentLanguage === "es" ? "Jonas_Castillo_CV_Spanish.pdf" : "Jonas_Castillo_CV_English.pdf"
    );

    if (modalBackdrop.classList.contains("is-open") && cvIframe.src) {
      loadIframe(path);
    }
  };

  const loadIframe = (path) => {
    clearTimeout(modalFallbackTimer);
    cvIframe.classList.remove("is-loaded");
    cvLoading.classList.add("is-visible");
    cvIframe.src = path;

    modalFallbackTimer = window.setTimeout(() => {
      cvLoading.classList.remove("is-visible");
      cvIframe.classList.add("is-loaded");
    }, 3500);
  };

  cvIframe.addEventListener("load", () => {
    clearTimeout(modalFallbackTimer);
    cvLoading.classList.remove("is-visible");
    cvIframe.classList.add("is-loaded");
  });

  const openModal = (trigger) => {
    closeMenu();
    lastFocusedElement = trigger || document.activeElement;
    const path = window.portfolioI18n.getCvPath(currentLanguage);
    cvOpenLink.href = path;
    cvDownloadLink.href = path;
    loadIframe(path);
    modalBackdrop.classList.add("is-open");
    modalBackdrop.setAttribute("aria-hidden", "false");
    setBodyLock();
    requestAnimationFrame(() => modalClose.focus());
  };

  const closeModal = () => {
    if (!modalBackdrop.classList.contains("is-open")) return;
    clearTimeout(modalFallbackTimer);
    modalBackdrop.classList.remove("is-open");
    modalBackdrop.setAttribute("aria-hidden", "true");
    cvLoading.classList.remove("is-visible");
    cvIframe.classList.remove("is-loaded");
    window.setTimeout(() => {
      cvIframe.src = "about:blank";
    }, 180);
    setBodyLock();
    lastFocusedElement?.focus?.();
  };

  document.querySelectorAll(".cv-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => openModal(trigger));
  });

  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("mousedown", (event) => {
    if (event.target === modalBackdrop) closeModal();
  });

  modal.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const focusable = [...modal.querySelectorAll(focusableSelector)].filter(
      (element) => element.offsetParent !== null
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (modalBackdrop.classList.contains("is-open")) closeModal();
    else if (mobileMenu.classList.contains("is-open")) closeMenu({ restoreFocus: true });
  });

  /* Scroll behavior */
  const updateScrollUi = () => {
    const scrollTop = window.scrollY;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = scrollable > 0 ? Math.min(100, (scrollTop / scrollable) * 100) : 0;
    scrollProgress.style.width = `${percentage}%`;
    header.classList.toggle("is-scrolled", scrollTop > 20);
    backToTop.classList.toggle("is-visible", scrollTop > 650);
  };

  window.addEventListener("scroll", updateScrollUi, { passive: true });
  updateScrollUi();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "auto" : "smooth" });
  });

  /* Active section */
  const navLinks = [...document.querySelectorAll(".desktop-navigation a, .mobile-menu a[href^='#']")];
  const sections = [...document.querySelectorAll("main section[id]")];

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;

        navLinks.forEach((link) => {
          const active = link.getAttribute("href") === `#${visible.target.id}`;
          if (active) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.15, 0.35] }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  /* Reveal animation */
  const revealElements = document.querySelectorAll(".reveal");
  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    revealElements.forEach((element) => revealObserver.observe(element));
  }

  /* Smooth internal links, while preserving accessibility and reduced motion */
  document.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", targetId);
    });
  });

  currentYear.textContent = String(new Date().getFullYear());
  applyTheme(getInitialTheme());
  updateLanguage(currentLanguage);
})();
