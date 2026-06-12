/* =============================================
   JOHANNES.DEV — main script.js
   Features:
   - Theme switcher (dark / light / colorful)
   - CV Modal with language-based CV detection
   - Language toggle (EN / ES)
   - Scroll progress bar
   - Scroll reveal animations
   - Skill bars animation
   - Back to top button
   - Mobile hamburger menu
   - Navbar sticky on scroll
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ===== THEME ===== */
  const themeButtons = document.querySelectorAll('.theme-btn');
  const savedTheme = localStorage.getItem('jq-theme') || 'colorful';
  applyTheme(savedTheme);

  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      applyTheme(theme);
      localStorage.setItem('jq-theme', theme);
    });
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeButtons.forEach(b => b.classList.toggle('active', b.dataset.theme === theme));
  }

  /* ===== LANGUAGE ===== */
  const langToggle = document.getElementById('lang-toggle');
  const langToggleMobile = document.getElementById('lang-toggle-mobile');
  const langOptions = document.querySelectorAll('.lang-option');
  let currentLang = localStorage.getItem('jq-lang') || 'en';

  setLanguage(currentLang);

  function toggleLang() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    setLanguage(currentLang);
    localStorage.setItem('jq-lang', currentLang);
  }

  langToggle.addEventListener('click', toggleLang);
  if (langToggleMobile) langToggleMobile.addEventListener('click', toggleLang);

  function setLanguage(lang) {
    currentLang = lang;
    i18n.setLang(lang);
    langOptions.forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });
    // Update CV modal texts if open
    updateModalTexts();
  }

  /* ===== CV MODAL ===== */
  const cvModal = document.getElementById('cv-modal');
  const cvIframe = document.getElementById('cv-iframe');
  const modalClose = document.getElementById('modal-close');
  const modalLoading = document.getElementById('modal-loading');
  const cvDownloadBtn = document.getElementById('cv-download-btn');
  const cvOpenBtn = document.getElementById('cv-open-btn');

  // All CV trigger buttons
  const cvButtons = [
    document.getElementById('cv-btn'),
    document.getElementById('hero-cv-btn'),
    document.getElementById('contact-cv-btn')
  ].filter(Boolean);

  cvButtons.forEach(btn => {
    btn.addEventListener('click', openCVModal);
  });

  modalClose.addEventListener('click', closeCVModal);
  cvModal.addEventListener('click', (e) => {
    if (e.target === cvModal) closeCVModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCVModal();
  });

  function openCVModal() {
    const cvPath = i18n.getCVPath();
    cvModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Show loading, hide iframe
    modalLoading.classList.remove('hidden');
    cvIframe.style.opacity = '0';

    // Set CV source based on current language
    cvIframe.src = cvPath;
    cvDownloadBtn.href = cvPath;
    cvOpenBtn.href = cvPath;

    cvIframe.onload = () => {
      modalLoading.classList.add('hidden');
      cvIframe.style.opacity = '1';
      cvIframe.style.transition = 'opacity .3s ease';
    };

    // Fallback in case iframe fails
    setTimeout(() => {
      if (modalLoading && !modalLoading.classList.contains('hidden')) {
        modalLoading.classList.add('hidden');
        cvIframe.style.opacity = '1';
      }
    }, 3000);

    updateModalTexts();
  }

  function closeCVModal() {
    cvModal.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => {
      cvIframe.src = '';
    }, 300);
  }

  function updateModalTexts() {
    const titleEl = document.getElementById('modal-title');
    const subtitleEl = document.getElementById('modal-subtitle');
    const loadingText = document.getElementById('modal-loading-text');
    const downloadText = document.getElementById('modal-download-text');
    const openText = document.getElementById('modal-open-text');

    if (titleEl) titleEl.textContent = i18n.t('modal-title');
    if (subtitleEl) subtitleEl.textContent = i18n.t('modal-subtitle');
    if (loadingText) loadingText.textContent = i18n.t('modal-loading');
    if (downloadText) downloadText.textContent = i18n.t('modal-download');
    if (openText) openText.textContent = i18n.t('modal-open');
  }

  /* ===== SCROLL PROGRESS ===== */
  const scrollBar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / total) * 100;
    scrollBar.style.width = progress + '%';
  }, { passive: true });

  /* ===== BACK TO TOP ===== */
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ===== NAVBAR SCROLL ===== */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  /* ===== HAMBURGER ===== */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu on nav link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ===== SCROLL REVEAL ===== */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Trigger skill bars when skills section is visible
        if (entry.target.classList.contains('skills')) {
          animateSkillBars();
        }
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.section-hidden').forEach(el => {
    revealObserver.observe(el);
  });

  /* ===== SKILL BARS ===== */
  function animateSkillBars() {
    document.querySelectorAll('.skill-fill').forEach(bar => {
      const target = bar.style.getPropertyValue('--w');
      bar.style.width = target;
    });
  }

  /* ===== ACTIVE NAV LINK ===== */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => {
          a.style.color = '';
          if (a.getAttribute('href') === '#' + entry.target.id) {
            a.style.color = 'var(--accent)';
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => navObserver.observe(s));

  /* ===== SMOOTH SCROLL FIX ===== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ===== INIT ===== */
  updateModalTexts();
  // Initial hero animation
  document.querySelector('.hero-left')?.classList.add('visible');
  document.querySelector('.hero-right')?.classList.add('visible');

});