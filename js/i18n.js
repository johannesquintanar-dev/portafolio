(() => {
  "use strict";

  const translations = {
    es: {
      "a11y.skip": "Saltar al contenido principal",
      "a11y.mainNav": "Navegación principal",
      "a11y.language": "Idioma",
      "a11y.theme": "Tema visual",
      "a11y.openMenu": "Abrir menú",
      "a11y.closeMenu": "Cerrar menú",
      "a11y.backToTop": "Volver al inicio",
      "a11y.closeModal": "Cerrar currículum",
      "theme.light": "Tema claro",
      "theme.dark": "Tema oscuro",
      "theme.colorful": "Tema colorido",
      "controls.language": "Idioma",
      "controls.theme": "Tema",

      "nav.projects": "Proyectos",
      "nav.about": "Sobre mí",
      "nav.experience": "Experiencia",
      "nav.skills": "Tecnologías",
      "nav.certifications": "Certificaciones",
      "nav.contact": "Contacto",
      "nav.cv": "CV",
      "mobile.cv": "Ver currículum",

      "hero.available": "Disponible para posiciones Java Backend / Full Stack Jr.",
      "hero.headline": "Java Full Stack Developer enfocado en soluciones reales de negocio",
      "hero.description": "Desarrollo aplicaciones web y automatizaciones que convierten procesos manuales en soluciones digitales confiables. Trabajo con Java 21, Spring Boot, APIs REST, SQL, JavaScript y Python, combinando desarrollo técnico con más de siete años de experiencia en operaciones críticas.",
      "hero.location": "Monterrey, Nuevo León · Disponible para trabajo remoto y reubicación",
      "hero.projectsButton": "Ver proyectos",
      "hero.cvButton": "Descargar CV",
      "hero.contactButton": "Contactarme",
      "hero.photoAlt": "Jonas Castillo con traje negro",
      "hero.photoCaption": "Desarrollo técnico con criterio operativo",
      "hero.metricsLabel": "Resultados profesionales",

      "metrics.operationsYears": "años en operaciones críticas",
      "metrics.realSolutions": "soluciones para usuarios reales",
      "metrics.peopleLed": "colaboradores liderados",
      "metrics.dailyOperations": "operaciones coordinadas en días de alta demanda",

      "projects.eyebrow": "SOLUCIONES Y PROYECTOS",
      "projects.title": "Software creado para resolver problemas reales",
      "projects.intro": "No presento solamente tecnologías: explico el problema, mi responsabilidad y el resultado de cada solución.",
      "projects.repository": "Ver repositorio",
      "case.problem": "Problema",
      "case.solution": "Solución",
      "case.role": "Mi responsabilidad",
      "case.result": "Resultado",
      "case.contribution": "Contribución",
      "case.functions": "Funcionalidades",
      "case.technologies": "Tecnologías utilizadas",

      "calculator.label": "PROYECTO PRINCIPAL · USO INTERNO",
      "calculator.title": "Calculadora de Servicios Aeroportuarios",
      "calculator.status": "Solución utilizada en operación",
      "calculator.summary": "Aplicación desarrollada para reemplazar cálculos manuales en Excel, centralizar reglas de negocio y automatizar reportes utilizados en la administración de servicios aeroportuarios.",
      "calculator.problem": "El cálculo de servicios requería consultas separadas y registros manuales, aumentando el tiempo de operación y el riesgo de errores.",
      "calculator.solution": "Diseñé una aplicación que procesa información de vuelos, consulta parámetros almacenados en SQL, aplica reglas de cobro y genera reportes estructurados en Excel.",
      "calculator.role": "Analicé el proceso, diseñé la base de datos, programé la lógica, integré fuentes de información, validé resultados con usuarios y preparé la solución para su uso interno.",
      "calculator.result": "La solución fue desarrollada en aproximadamente tres meses, continúa utilizándose y apoya el trabajo de dos personas por turno con reportes para seguimiento de KPIs.",
      "calculator.confidentiality": "El código y los datos no son públicos por confidencialidad. La representación visual utiliza información ficticia.",
      "calculator.demoLabel": "Representación visual de la calculadora",
      "calculator.demoTitle": "Cálculo de operación",
      "calculator.demoFlight": "Vuelo",
      "calculator.demoArrival": "Llegada",
      "calculator.demoType": "Tipo",
      "calculator.demoService1": "Aterrizaje",
      "calculator.demoService2": "Plataforma",
      "calculator.demoService3": "Servicios adicionales",
      "calculator.demoTotal": "Total estimado",
      "calculator.architectureLabel": "Flujo técnico de la solución",
      "architecture.flightData": "Datos de vuelo",
      "architecture.report": "Reporte y KPIs",

      "syntax.label": "PROYECTO COLABORATIVO · 2026",
      "syntax.title": "Syntax Logistics",
      "syntax.roleTitle": "Full Stack Developer · UI · Integración · Pruebas funcionales",
      "syntax.summary": "Plataforma web para administrar cotizaciones, usuarios, envíos y seguimiento de paquetes. Participé en funcionalidades backend, operaciones CRUD, integración con MySQL, construcción de interfaz y validación de flujos funcionales.",
      "syntax.contribution": "Trabajé en formularios, diseño responsivo, integración frontend-backend, estructura de datos y pruebas de los flujos principales del proyecto.",
      "syntax.functions": "Registro de usuarios, cotización, gestión de destinos y direcciones, seguimiento mediante guía y consumo de servicios REST.",
      "syntax.imageAlt": "Vista responsiva de la plataforma Syntax Logistics",

      "otherProjects.title": "Otros proyectos",
      "otherProjects.intro": "Proyectos que complementan mi experiencia en frontend y trabajo colaborativo.",
      "mundo.label": "PROYECTO FRONTEND",
      "mundo.summary": "Sitio temático de fútbol con catálogo, artículos retro, modales interactivos y adaptación responsive desarrollada con HTML, CSS y JavaScript.",
      "mundo.imageAlt": "Modal de producto del proyecto Mundo Fifas",

      "about.eyebrow": "SOBRE MÍ",
      "about.title": "Desarrollo técnico con entendimiento del negocio",
      "about.lead": "Soy desarrollador Java Full Stack con experiencia práctica construyendo backend, interfaces web, bases de datos y automatizaciones orientadas a resolver necesidades reales.",
      "about.body": "Antes de dedicarme al desarrollo trabajé durante más de siete años en operaciones aeroportuarias, coordinando procesos críticos, equipos de trabajo, información financiera, KPIs y reglas de negocio. Esa experiencia me permite comprender no solamente cómo programar una solución, sino también cómo debe funcionar dentro de una operación real.",
      "about.value1Title": "Análisis de procesos",
      "about.value1Text": "Identifico cuellos de botella, reglas de negocio y oportunidades de automatización.",
      "about.value2Title": "Ejecución bajo presión",
      "about.value2Text": "Estoy acostumbrado a priorizar, comunicar y resolver incidencias en operaciones críticas.",
      "about.value3Title": "Visión de usuario",
      "about.value3Text": "Construyo pensando en la persona que utilizará la solución y en el proceso que debe mejorar.",

      "experience.eyebrow": "EXPERIENCIA PROFESIONAL",
      "experience.title": "Más de siete años resolviendo operaciones complejas",
      "experience.intro": "Esta experiencia fortalece mis habilidades para entender requerimientos, priorizar riesgos y entregar soluciones útiles.",
      "experience.job1Date": "Ene 2025 — Abr 2026",
      "experience.job1Title": "Administrador de Servicios Aeroportuarios",
      "experience.job1Focus": "Procesos · KPIs · Automatización",
      "experience.job1Text": "Administré cobros, facturación, ingresos y reportes de servicios aeroportuarios. Analicé procesos administrativos y financieros y desarrollé una herramienta en Python y SQL para automatizar cálculos y reportes operativos.",
      "experience.job2Date": "May 2024 — Ene 2025",
      "experience.job2Title": "Oficial de Operaciones",
      "experience.job2Focus": "Monitoreo · Seguridad · Coordinación",
      "experience.job2Text": "Monitoreé operaciones aeroportuarias, elaboré reportes operativos, coordiné áreas de plataforma, mantenimiento, fauna y proveedores, y participé en capacitaciones de seguridad operacional.",
      "experience.job3Date": "Jul 2018 — Ene 2024",
      "experience.job3Title": "Encargado de Operaciones",
      "experience.job3Focus": "Liderazgo · Continuidad · Clientes",
      "experience.job3Text": "Coordiné operaciones de vuelo, atención a clientes, combustible, rampa, mantenimiento y planes de vuelo. Supervisé hasta 23 colaboradores, gestioné KPIs y tomé decisiones en escenarios de alta presión.",

      "skills.eyebrow": "STACK TÉCNICO",
      "skills.title": "Tecnologías respaldadas por proyectos",
      "skills.intro": "Las habilidades se presentan por área, sin porcentajes arbitrarios.",
      "skills.backend": "Backend",
      "skills.databases": "Bases de datos",
      "skills.automation": "Datos y automatización",
      "skills.tools": "Herramientas y metodología",

      "certifications.eyebrow": "FORMACIÓN Y CERTIFICACIONES",
      "certifications.title": "Preparación técnica y conocimiento operativo",
      "certifications.completed": "Completado",
      "certifications.generationTitle": "Bootcamp Desarrollador Java Full Stack Jr.",
      "certifications.kpiTitle": "Análisis y seguimiento de KPIs operativos",
      "certifications.corporateTraining": "Capacitación corporativa",
      "certifications.operationsTitle": "Gestión de Operaciones Aeroportuarias",
      "certifications.language": "Idioma",
      "certifications.englishTitle": "Inglés — B2 Intermedio",
      "certifications.englishText": "Comunicación profesional intermedia",

      "contact.eyebrow": "ABIERTO A OPORTUNIDADES",
      "contact.title": "Llevemos una necesidad real a una solución funcional",
      "contact.text": "Busco mi primera posición dedicada completamente al desarrollo de software como Java Backend o Full Stack Developer. Aporto experiencia desarrollando soluciones aplicadas a procesos reales, conocimiento de negocio y más de siete años trabajando en operaciones críticas.",
      "contact.remote": "Disponible para trabajo remoto en México",
      "contact.relocation": "Disponible para cambio de residencia",
      "contact.roles": "Java Backend · Full Stack Jr. · Automatización",
      "contact.email": "Correo",
      "contact.phone": "Teléfono",
      "contact.cv": "Ver CV completo",

      "footer.rights": "Todos los derechos reservados.",

      "modal.eyebrow": "CURRÍCULUM",
      "modal.title": "Jonas Castillo — Java Full Stack Developer",
      "modal.description": "Selecciona ver o descargar la versión correspondiente al idioma del sitio.",
      "modal.loading": "Cargando currículum…",
      "modal.mobileText": "En pantallas pequeñas es más cómodo abrir el PDF en una pestaña nueva.",
      "modal.open": "Abrir PDF",
      "modal.download": "Descargar PDF",
      "modal.iframeTitle": "Currículum de Jonas Castillo",

      "meta.title": "Jonas Castillo | Java Full Stack Developer",
      "meta.description": "Java Full Stack Developer en Monterrey con experiencia en Java 21, Spring Boot, APIs REST, SQL, JavaScript y Python. Proyectos aplicados a logística y operaciones aeroportuarias.",
      "meta.socialDescription": "Java Full Stack Developer con experiencia en backend, APIs REST, bases de datos y automatización de procesos reales.",
      "cv.path": "assets/cv/Jonas_Castillo_CV_Spanish.pdf"
    },

    en: {
      "a11y.skip": "Skip to main content",
      "a11y.mainNav": "Main navigation",
      "a11y.language": "Language",
      "a11y.theme": "Visual theme",
      "a11y.openMenu": "Open menu",
      "a11y.closeMenu": "Close menu",
      "a11y.backToTop": "Back to top",
      "a11y.closeModal": "Close resume",
      "theme.light": "Light theme",
      "theme.dark": "Dark theme",
      "theme.colorful": "Colorful theme",
      "controls.language": "Language",
      "controls.theme": "Theme",

      "nav.projects": "Projects",
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.skills": "Technologies",
      "nav.certifications": "Certifications",
      "nav.contact": "Contact",
      "nav.cv": "Resume",
      "mobile.cv": "View resume",

      "hero.available": "Available for Java Backend / Junior Full Stack roles",
      "hero.headline": "Java Full Stack Developer focused on real business solutions",
      "hero.description": "I build web applications and automations that turn manual processes into reliable digital solutions. I work with Java 21, Spring Boot, REST APIs, SQL, JavaScript and Python, combining technical development with more than seven years of experience in critical operations.",
      "hero.location": "Monterrey, Nuevo León · Available for remote work and relocation",
      "hero.projectsButton": "View projects",
      "hero.cvButton": "Download resume",
      "hero.contactButton": "Contact me",
      "hero.photoAlt": "Jonas Castillo wearing a black suit",
      "hero.photoCaption": "Technical development with operational judgment",
      "hero.metricsLabel": "Professional results",

      "metrics.operationsYears": "years in critical operations",
      "metrics.realSolutions": "solutions for real users",
      "metrics.peopleLed": "team members led",
      "metrics.dailyOperations": "operations coordinated on high-demand days",

      "projects.eyebrow": "SOLUTIONS AND PROJECTS",
      "projects.title": "Software built to solve real problems",
      "projects.intro": "I do not only list technologies: I explain the problem, my responsibility and the outcome of each solution.",
      "projects.repository": "View repository",
      "case.problem": "Problem",
      "case.solution": "Solution",
      "case.role": "My responsibility",
      "case.result": "Outcome",
      "case.contribution": "Contribution",
      "case.functions": "Features",
      "case.technologies": "Technologies used",

      "calculator.label": "MAIN PROJECT · INTERNAL USE",
      "calculator.title": "Airport Services Calculator",
      "calculator.status": "Solution used in operations",
      "calculator.summary": "An application developed to replace manual Excel calculations, centralize business rules and automate reports used in airport services administration.",
      "calculator.problem": "Service calculations required separate queries and manual records, increasing processing time and the risk of errors.",
      "calculator.solution": "I designed an application that processes flight information, queries parameters stored in SQL, applies billing rules and creates structured Excel reports.",
      "calculator.role": "I analyzed the process, designed the database, programmed the logic, integrated information sources, validated results with users and prepared the solution for internal use.",
      "calculator.result": "The solution was developed in approximately three months, remains in use and supports two people per shift with reports used for KPI tracking.",
      "calculator.confidentiality": "The code and data are not public due to confidentiality. The visual representation uses fictional information.",
      "calculator.demoLabel": "Visual representation of the calculator",
      "calculator.demoTitle": "Operation calculation",
      "calculator.demoFlight": "Flight",
      "calculator.demoArrival": "Arrival",
      "calculator.demoType": "Type",
      "calculator.demoService1": "Landing",
      "calculator.demoService2": "Ramp position",
      "calculator.demoService3": "Additional services",
      "calculator.demoTotal": "Estimated total",
      "calculator.architectureLabel": "Technical solution flow",
      "architecture.flightData": "Flight data",
      "architecture.report": "Report and KPIs",

      "syntax.label": "TEAM PROJECT · 2026",
      "syntax.title": "Syntax Logistics",
      "syntax.roleTitle": "Full Stack Developer · UI · Integration · Functional Testing",
      "syntax.summary": "A web platform for managing quotes, users, shipments and package tracking. I contributed to backend features, CRUD operations, MySQL integration, interface development and validation of functional flows.",
      "syntax.contribution": "I worked on forms, responsive design, frontend-backend integration, data structure and testing of the project's main flows.",
      "syntax.functions": "User registration, quoting, destination and address management, tracking number lookup and REST service consumption.",
      "syntax.imageAlt": "Responsive view of the Syntax Logistics platform",

      "otherProjects.title": "Other projects",
      "otherProjects.intro": "Projects that complement my frontend and team-development experience.",
      "mundo.label": "FRONTEND PROJECT",
      "mundo.summary": "A football-themed site with a catalog, retro articles, interactive modals and responsive behavior built with HTML, CSS and JavaScript.",
      "mundo.imageAlt": "Product modal from the Mundo Fifas project",

      "about.eyebrow": "ABOUT ME",
      "about.title": "Technical development with business understanding",
      "about.lead": "I am a Java Full Stack Developer with practical experience building backend services, web interfaces, databases and automations focused on real needs.",
      "about.body": "Before focusing on software development, I spent more than seven years in airport operations, coordinating critical processes, teams, financial information, KPIs and business rules. That background helps me understand not only how to program a solution, but also how it must work inside a real operation.",
      "about.value1Title": "Process analysis",
      "about.value1Text": "I identify bottlenecks, business rules and opportunities for automation.",
      "about.value2Title": "Execution under pressure",
      "about.value2Text": "I am used to prioritizing, communicating and resolving incidents in critical operations.",
      "about.value3Title": "User perspective",
      "about.value3Text": "I build with the end user and the process that needs improvement in mind.",

      "experience.eyebrow": "PROFESSIONAL EXPERIENCE",
      "experience.title": "More than seven years solving complex operational challenges",
      "experience.intro": "This experience strengthens my ability to understand requirements, prioritize risks and deliver useful solutions.",
      "experience.job1Date": "Jan 2025 — Apr 2026",
      "experience.job1Title": "Airport Services Administrator",
      "experience.job1Focus": "Processes · KPIs · Automation",
      "experience.job1Text": "I managed airport service billing, invoicing, revenue and reports. I analyzed administrative and financial processes and developed a Python and SQL tool to automate calculations and operational reports.",
      "experience.job2Date": "May 2024 — Jan 2025",
      "experience.job2Title": "Airport Operations Officer",
      "experience.job2Focus": "Monitoring · Safety · Coordination",
      "experience.job2Text": "I monitored airport operations, prepared operational reports, coordinated ramp, maintenance, wildlife and supplier activities, and participated in operational safety training.",
      "experience.job3Date": "Jul 2018 — Jan 2024",
      "experience.job3Title": "Operations Supervisor",
      "experience.job3Focus": "Leadership · Continuity · Clients",
      "experience.job3Text": "I coordinated flight operations, customer service, fueling, ramp, maintenance and flight plans. I supervised up to 23 team members, managed KPIs and made decisions in high-pressure scenarios.",

      "skills.eyebrow": "TECH STACK",
      "skills.title": "Technologies supported by projects",
      "skills.intro": "Skills are organized by area without arbitrary percentages.",
      "skills.backend": "Backend",
      "skills.databases": "Databases",
      "skills.automation": "Data and automation",
      "skills.tools": "Tools and methodology",

      "certifications.eyebrow": "EDUCATION AND CERTIFICATIONS",
      "certifications.title": "Technical preparation and operational knowledge",
      "certifications.completed": "Completed",
      "certifications.generationTitle": "Junior Java Full Stack Developer Bootcamp",
      "certifications.kpiTitle": "Operational KPI Analysis and Monitoring",
      "certifications.corporateTraining": "Corporate training",
      "certifications.operationsTitle": "Airport Operations Management",
      "certifications.language": "Language",
      "certifications.englishTitle": "English — B2 Intermediate",
      "certifications.englishText": "Intermediate professional communication",

      "contact.eyebrow": "OPEN TO OPPORTUNITIES",
      "contact.title": "Let us turn a real need into a working solution",
      "contact.text": "I am seeking my first position fully dedicated to software development as a Java Backend or Full Stack Developer. I bring experience building solutions for real processes, business knowledge and more than seven years working in critical operations.",
      "contact.remote": "Available for remote work in Mexico",
      "contact.relocation": "Available to relocate",
      "contact.roles": "Java Backend · Junior Full Stack · Automation",
      "contact.email": "Email",
      "contact.phone": "Phone",
      "contact.cv": "View full resume",

      "footer.rights": "All rights reserved.",

      "modal.eyebrow": "RESUME",
      "modal.title": "Jonas Castillo — Java Full Stack Developer",
      "modal.description": "View or download the version that matches the website language.",
      "modal.loading": "Loading resume…",
      "modal.mobileText": "On small screens, opening the PDF in a new tab provides a better experience.",
      "modal.open": "Open PDF",
      "modal.download": "Download PDF",
      "modal.iframeTitle": "Jonas Castillo resume",

      "meta.title": "Jonas Castillo | Java Full Stack Developer",
      "meta.description": "Java Full Stack Developer in Monterrey with experience in Java 21, Spring Boot, REST APIs, SQL, JavaScript and Python. Projects applied to logistics and airport operations.",
      "meta.socialDescription": "Java Full Stack Developer with experience in backend, REST APIs, databases and automation for real processes.",
      "cv.path": "assets/cv/Jonas_Castillo_CV_English.pdf"
    }
  };

  const storage = {
    get(key) {
      try {
        return window.localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    set(key, value) {
      try {
        window.localStorage.setItem(key, value);
      } catch {
        // Storage may be blocked in private or embedded contexts.
      }
    }
  };

  const getStoredLanguage = () => {
    const stored = storage.get("jonas-language");
    if (stored === "es" || stored === "en") return stored;
    return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
  };

  const translate = (language, key) =>
    translations[language]?.[key] ?? translations.es[key] ?? key;

  const applyLanguage = (language) => {
    const safeLanguage = language === "en" ? "en" : "es";
    document.documentElement.lang = safeLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      element.textContent = translate(safeLanguage, key);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const key = element.dataset.i18nAria;
      element.setAttribute("aria-label", translate(safeLanguage, key));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const key = element.dataset.i18nAlt;
      element.setAttribute("alt", translate(safeLanguage, key));
    });

    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
      const key = element.dataset.i18nTitle;
      element.setAttribute("title", translate(safeLanguage, key));
    });

    document.title = translate(safeLanguage, "meta.title");
    document.getElementById("meta-description")?.setAttribute(
      "content",
      translate(safeLanguage, "meta.description")
    );
    document.getElementById("og-title")?.setAttribute("content", translate(safeLanguage, "meta.title"));
    document.getElementById("twitter-title")?.setAttribute("content", translate(safeLanguage, "meta.title"));
    document.getElementById("og-description")?.setAttribute(
      "content",
      translate(safeLanguage, "meta.socialDescription")
    );
    document.getElementById("twitter-description")?.setAttribute(
      "content",
      translate(safeLanguage, "meta.socialDescription")
    );
    document.getElementById("og-locale")?.setAttribute("content", safeLanguage === "es" ? "es_MX" : "en_US");

    document.querySelectorAll(".language-button").forEach((button) => {
      const isActive = button.dataset.lang === safeLanguage;
      button.setAttribute("aria-pressed", String(isActive));
    });

    storage.set("jonas-language", safeLanguage);
    document.dispatchEvent(new CustomEvent("portfolio:language", { detail: { language: safeLanguage } }));
    return safeLanguage;
  };

  window.portfolioI18n = {
    translations,
    translate,
    applyLanguage,
    getStoredLanguage,
    storage,
    getCvPath(language) {
      return translate(language, "cv.path");
    }
  };
})();
