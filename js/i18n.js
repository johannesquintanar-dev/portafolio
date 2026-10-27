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
      "controls.language": "Idioma",

      "nav.projects": "Proyectos",
      "nav.about": "Sobre mí",
      "nav.experience": "Experiencia",
      "nav.skills": "Tecnologías",
      "nav.certifications": "Certificaciones",
      "nav.contact": "Contacto",
      "nav.cv": "CV",
      "mobile.cv": "Ver currículum",

      "hero.available": "Responsable de Sistemas en Thelsa · Abierto a nuevos retos Full Stack",
      "hero.headline": "Full Stack Developer que convierte procesos reales en sistemas",
      "hero.description": "Construyo el software interno con el que una empresa trabaja todos los días: lo que antes vivía en hojas de Excel, correos y papel. Trabajo con PostgreSQL, JavaScript, Java y Python, y traigo más de siete años de experiencia coordinando operaciones críticas.",
      "hero.location": "Monterrey, Nuevo León · Disponible para trabajo remoto y reubicación",
      "hero.projectsButton": "Ver proyectos",
      "hero.cvButton": "Descargar CV",
      "hero.contactButton": "Contactarme",
      "hero.photoAlt": "Jonas Castillo con traje negro",
      "hero.photoCaption": "Desarrollo técnico con criterio operativo",
      "hero.metricsLabel": "Resultados profesionales",

      "metrics.branches": "sucursales operando sobre un sistema que construí",
      "metrics.modules": "módulos de negocio sobre una sola base de datos",
      "metrics.operationsYears": "años en operaciones críticas",
      "metrics.peopleLed": "colaboradores liderados",

      "thelsa.tab.menu": "Menú de módulos",
      "thelsa.tab.agenda": "Agenda del mes",
      "thelsa.tab.capacidad": "Capacidad operativa",
      "thelsa.tab.plan-viajes": "Plan de Viajes",
      "thelsa.tab.seguridad": "Seguridad",
      "thelsa.tab.guia": "Guía del ejecutivo",
      "thelsa.cap.menu": "Un solo acceso para todos los módulos: cada persona entra únicamente a lo que le corresponde según su rol.",
      "thelsa.cap.agenda": "La agenda del mes de una sucursal: servicios, gente y unidades por día, con el color que indica cuántas cuadrillas quedan libres.",
      "thelsa.cap.capacidad": "Capacidad operativa de las 13 sucursales, día por día: lo que el motor calcula para decidir si un servicio cabe o no.",
      "thelsa.cap.plan-viajes": "Plan de Viajes de la flota foránea: cada viaje se asigna a una unidad con un optimizador de rutas sobre el mapa.",
      "thelsa.cap.seguridad": "Capital Humano: formatos de seguridad por sucursal, con vigencia y avisos cuando toca renovarlos.",
      "thelsa.cap.guia": "La guía del ejecutivo explica cada proceso y cada pantalla paso a paso, con buscador en lenguaje natural.",
      "thelsa.capturesNote": "Capturas reales tomadas en una copia de prueba del sistema; no muestran datos de clientes ni cifras del negocio.",
      "stats.branches": "sucursales en operación",
      "stats.modules": "módulos de negocio",
      "stats.database": "sola base de datos",
      "stats.year": "en producción desde",
      "hero.stackLabel": "Con qué trabajo",
      "theme.light": "Tema claro",
      "theme.dark": "Tema oscuro",
      "theme.colorful": "Tema colorido",
      "controls.theme": "Tema",

      "puente.label": "INTEGRACIÓN · 2026 · DENTRO DEL SISTEMA DE THELSA",
      "puente.title": "Puente de facturación con CONTPAQi Comercial (SDK)",
      "puente.roleTitle": "Diseño, desarrollo y pruebas · C# / .NET Framework 4.8 · SDK de CONTPAQi",
      "puente.status": "Timbrado probado",
      "puente.summary": "El sistema deja cada factura y cada carta porte como una tarea en la base de datos; un servicio de Windows escrito en C# la toma y la ejecuta dentro de CONTPAQi Comercial con su SDK oficial, sin capturas manuales ni archivos de importación. Es la pieza que conecta la operación con la contabilidad y el timbrado ante el SAT.",
      "puente.b1": "<b>Servicio de Windows en .NET Framework 4.8 (x86)</b>, porque el SDK de CONTPAQi es de 32 bits. Entra a Supabase con un usuario técnico propio (nunca la llave de servicio), con latido cada minuto y cola de tareas con reintentos y espera exponencial.",
      "puente.b2": "<b>Idempotencia por referencia:</b> si ya existe un documento con el folio de la solicitud, el puente continúa con ese; un reintento nunca crea dos facturas. El cliente se busca por RFC y, si no existe, se da de alta por SDK.",
      "puente.b3": "<b>Validación antes de timbrar:</b> compara el total calculado por CONTPAQi contra el de la solicitud y se detiene si no cuadra. Emite CFDI 4.0 y cartas porte con el complemento Carta Porte 3.1 (incluido dentro de la factura o como documento de traslado).",
      "puente.b4": "<b>Resultado de vuelta al sistema:</b> UUID, XML y PDF suben a un almacenamiento privado y quedan en el expediente del cliente; el ejecutivo recibe el aviso en el sistema. Los catálogos (clientes, productos, series) se leen con un usuario de SQL de solo lectura.",
      "puente.note": "Toda la integración se desarrolló y probó contra una empresa de prueba de CONTPAQi; aquí no se muestran datos fiscales.",
      "puente.flowTitle": "Cómo viaja una factura",
      "puente.f1t": "El sistema crea la tarea",
      "puente.f1": "Comercial pide la factura desde el expediente; Facturación la revisa y la base la encola con su folio.",
      "puente.f2t": "El puente la toma",
      "puente.f2": "El servicio de Windows reclama la tarea, carga la empresa en CONTPAQi y busca el documento por referencia.",
      "puente.f3t": "Cliente, documento y movimientos",
      "puente.f3": "Alta del cliente por RFC si hace falta, documento con sus renglones, forma de pago y observaciones por SDK.",
      "puente.f4t": "Validación y timbrado",
      "puente.f4": "Total comparado contra la solicitud; si cuadra, se emite el CFDI 4.0 (con complemento Carta Porte 3.1 cuando aplica).",
      "puente.f5t": "XML y PDF de regreso",
      "puente.f5": "El UUID, el XML y el PDF suben al almacenamiento privado y aparecen en el expediente; el ejecutivo recibe el aviso.",

      "groundsight.summary": "Sitio para la empresa de estudios geofísicos de Brenda Pamela, una geofísica que empieza por su cuenta. El reto técnico: que un cliente sin formación geofísica entienda cuál de los 18 estudios necesita y pida cotización, sin servidor, sin base de datos y con costo cero de operación.",
      "groundsight.b1": "<b>Rockie, asistente conversacional sin IA:</b> conversa con botones y texto libre; normaliza el texto (NFD, sin acentos), detecta palabras clave por objetivo y responde con las preguntas frecuentes de la especialista. Lo que no sabe lo deriva a WhatsApp con el mensaje del cliente ya escrito; nunca inventa datos.",
      "groundsight.b2": "<b>Asistente \"¿Qué estudio necesito?\" y comparador de profundidades:</b> a partir del objetivo y la profundidad propone el método, su alcance, los días de campo y el entregable; el comparador dibuja los 18 estudios en escala logarítmica, de centímetros a kilómetros.",
      "groundsight.b3": "<b>Generación estática desde un catálogo:</b> un script en Node.js lee el mismo archivo de datos que usa el navegador y produce las 18 fichas, las tarjetas, el sitemap y el robots; cambiar un estudio es editar un objeto.",
      "groundsight.b4": "<b>Rendimiento y entrega:</b> fotografías en WebP en cinco anchos con srcset (pipeline con sharp), animaciones que respetan prefers-reduced-motion, formulario sin servidor (FormSubmit por AJAX con honeypot), SEO con Open Graph y datos estructurados, y publicación en Cloudflare Pages.",
      "groundsight.imageAlt2": "Rockie, el asistente conversacional del sitio, contestando una pregunta",
      "projects.visitRepo": "Ver repositorio",
      "projects.eyebrow": "SOLUCIONES Y PROYECTOS",
      "projects.title": "Software creado para resolver problemas reales",
      "projects.intro": "No presento solamente tecnologías: explico el problema, mi responsabilidad y el resultado de cada solución.",
      "projects.repository": "Ver repositorio",
      "projects.visit": "Ver sitio en línea",
      "case.problem": "Problema",
      "case.solution": "Solución",
      "case.role": "Mi responsabilidad",
      "case.result": "Resultado",
      "case.contribution": "Contribución",
      "case.functions": "Funcionalidades",
      "case.technologies": "Tecnologías utilizadas",

      "thelsa.label": "PROYECTO DESTACADO · 2026 · USO INTERNO",
      "thelsa.title": "Sistema interno de operaciones para una empresa de mudanzas",
      "thelsa.roleTitle": "Responsable de Sistemas · Thelsa Mobility Solutions · 13 sucursales en México",
      "thelsa.status": "En producción",
      "thelsa.summary": "Sistema web que sustituye el sistema anterior, las hojas de Excel que viajaban por correo y los formatos en papel con los que operaba la empresa. Lo usan todos los días las áreas de operaciones, ventas, logística, personal, administración y atención de garantías.",
      "thelsa.problem": "La información de cada área vivía en herramientas distintas que no se hablaban entre sí. Programar un servicio, cotizarlo o saber cuánta gente y cuántas unidades quedaban libres un día dependía de capturas manuales y de la memoria de cada plaza.",
      "thelsa.solution": "Un sistema por módulos sobre una sola base de datos: programación de servicios contra la capacidad real, cotizaciones y expediente del cliente, plan de viajes y rutas, plantilla de personal e incidencias, facturación conectada al sistema contable, garantías y una guía de uso para cada pantalla.",
      "thelsa.role": "Construí la mayoría de los módulos de negocio y la integración con el sistema contable; participé en operaciones y logística; y llevo la calidad y la puesta en producción: cada cambio se ensaya en una copia de la base real, con pruebas automatizadas de navegador, antes de publicarse.",
      "thelsa.result": "Las 13 sucursales operan sobre el sistema. La lógica de negocio vive en la base de datos, cada módulo tiene su propio espacio y los permisos se aplican por rol desde la base, no desde la pantalla.",
      "thelsa.confidentiality": "El sistema es privado y de uso interno. La representación visual es conceptual y utiliza únicamente datos ficticios.",
      "thelsa.demoLabel": "Representación conceptual del sistema",
      "thelsa.demoTitle": "Panorama del día · datos ficticios",
      "thelsa.demoBranches": "Sucursales",
      "thelsa.demoServices": "Servicios de hoy",
      "thelsa.demoCapacity": "Capacidad libre",
      "thelsa.demoModule1": "Operaciones · programación contra capacidad",
      "thelsa.demoModule2": "Comercial · cotizaciones y expediente",
      "thelsa.demoModule3": "Logística · plan de viajes y rutas",
      "thelsa.demoModule4": "Personal · plantilla e incidencias",
      "thelsa.demoModule5": "Administración · facturación",
      "thelsa.demoOk": "Al día",
      "thelsa.demoPending": "3 por revisar",
      "thelsa.demoTotal": "Avisos pendientes",
      "thelsa.architectureLabel": "Flujo técnico de la solución",
      "thelsa.archScreens": "Pantallas web",
      "thelsa.archRules": "Reglas en PostgreSQL",
      "thelsa.archIntegrations": "Integraciones",
      "thelsa.archAlerts": "Avisos y reportes",

      "groundsight.label": "SITIO PARA UN CLIENTE · 2026",
      "groundsight.roleTitle": "Diseño · Contenido técnico · Desarrollo · Publicación",
      "groundsight.status": "Publicado",
      "groundsight.contribution": "Hice el sitio completo: 26 páginas generadas desde un catálogo, el asistente \"¿Qué estudio necesito?\", un comparador interactivo de profundidades, un asistente guiado por botones, cotización por correo y WhatsApp, SEO e imágenes optimizadas.",
      "groundsight.functions": "Catálogo de 18 estudios en 5 categorías con ficha propia, preguntas frecuentes, reseñas, aviso de privacidad, formulario sin servidor y publicación gratuita. Todo lo que cambia se edita en dos archivos, sin programador.",
      "groundsight.imageAlt": "Página de inicio del sitio de Groundsight Geoservicios",

      "calculator.label": "HERRAMIENTA INTERNA · 2025",
      "calculator.title": "Calculadora de Servicios Aeroportuarios",
      "calculator.roleTitle": "Análisis del proceso · Base de datos · Automatización de reportes",
      "calculator.status": "Sigue en uso",
      "calculator.summary": "Aplicación desarrollada para reemplazar cálculos manuales en Excel, centralizar reglas de cobro y automatizar los reportes de la administración de servicios aeroportuarios.",
      "calculator.solution": "Procesa la información de vuelos, consulta parámetros almacenados en SQL, aplica las reglas de cobro y genera reportes estructurados en Excel con los indicadores del turno.",
      "calculator.result": "Construida en tres meses, continúa utilizándose sin mí y apoya el trabajo de dos personas por turno. El código y los datos no son públicos por confidencialidad.",
      "calculator.demoLabel": "Representación visual de la calculadora",
      "calculator.demoTitle": "Cálculo de operación",
      "calculator.demoFlight": "Vuelo",
      "calculator.demoArrival": "Llegada",
      "calculator.demoType": "Tipo",
      "calculator.demoService1": "Aterrizaje",
      "calculator.demoService2": "Plataforma",
      "calculator.demoService3": "Servicios adicionales",
      "calculator.demoTotal": "Total estimado",

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
      "about.lead": "Soy desarrollador Full Stack. Hoy soy responsable de Sistemas en una empresa de mudanzas con 13 sucursales, donde construyo el sistema interno con el que operan, venden, planean rutas y administran a su gente.",
      "about.body": "Llegué al software desde la operación: durante más de siete años coordiné procesos críticos, equipos de trabajo, información financiera y KPIs en operaciones aeroportuarias. Por eso construyo pensando en la persona que usará el sistema a las seis de la mañana, y no doy por hecho que algo funciona hasta verlo en el navegador o en la base de datos.",
      "about.value1Title": "Análisis de procesos",
      "about.value1Text": "Identifico cuellos de botella, reglas de negocio y oportunidades de automatización, y las escribo en lenguaje llano para que quien decide pueda leerlas.",
      "about.value2Title": "Lógica en la base, no en la pantalla",
      "about.value2Text": "Las reglas viven en la base de datos y los permisos se aplican por rol desde ahí; cada cambio se ensaya en una copia de producción antes de publicarse.",
      "about.value3Title": "Ejecución bajo presión",
      "about.value3Text": "Estoy acostumbrado a priorizar, comunicar y resolver incidencias en operaciones donde un dato a destiempo cuesta.",

      "experience.eyebrow": "EXPERIENCIA PROFESIONAL",
      "experience.title": "De coordinar operaciones a construir los sistemas que las sostienen",
      "experience.intro": "Siete años en operaciones críticas y, desde 2026, el desarrollo de un sistema interno completo para una empresa con presencia nacional.",
      "experience.job0Date": "2026 — Actualidad",
      "experience.job0Title": "Responsable de Sistemas · Full Stack Developer",
      "experience.job0Focus": "PostgreSQL · JavaScript · Integraciones · QA",
      "experience.job0Text": "Construyo y mantengo el sistema interno de la empresa: módulos de operaciones, comercial, logística, personal, administración y garantías sobre una sola base de datos. Integración con el sistema contable, pruebas automatizadas de navegador, publicación continua y soporte a las 13 sucursales.",
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
      "skills.intro": "Las habilidades se presentan por área, con el proyecto donde están probadas, sin porcentajes arbitrarios.",
      "skills.backend": "Backend e integraciones",
      "skills.databases": "Bases de datos",
      "skills.automation": "Datos y automatización",
      "skills.tools": "Calidad, entrega y metodología",

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

      "contact.eyebrow": "¿TRABAJAMOS JUNTOS?",
      "contact.title": "Llevemos un proceso real a un sistema que funcione",
      "contact.text": "Si tienes un proceso que hoy vive en Excel, en correos o en papel, o buscas un desarrollador Full Stack que entienda la operación además del código, escríbeme. Contesto el mismo día.",
      "contact.remote": "Disponible para trabajo remoto en México",
      "contact.relocation": "Disponible para cambio de residencia",
      "contact.roles": "Full Stack · Backend · Automatización de procesos",
      "contact.email": "Correo",
      "contact.phone": "Teléfono y WhatsApp",
      "contact.cv": "Ver CV completo",

      "footer.rights": "Todos los derechos reservados.",

      "modal.eyebrow": "CURRÍCULUM",
      "modal.title": "Jonas Castillo — Full Stack Developer",
      "modal.description": "Selecciona ver o descargar la versión correspondiente al idioma del sitio.",
      "modal.loading": "Cargando currículum…",
      "modal.mobileText": "En pantallas pequeñas es más cómodo abrir el PDF en una pestaña nueva.",
      "modal.open": "Abrir PDF",
      "modal.download": "Descargar PDF",
      "modal.iframeTitle": "Currículum de Jonas Castillo",

      "meta.title": "Jonas Castillo | Full Stack Developer",
      "meta.description": "Full Stack Developer en Monterrey. Construyo sistemas internos que convierten procesos en Excel y papel en software que una empresa usa todos los días: PostgreSQL, JavaScript, Java y Python.",
      "meta.socialDescription": "Sistemas internos que una empresa usa todos los días: del Excel al sistema. PostgreSQL, JavaScript, Java y Python.",
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
      "controls.language": "Language",

      "nav.projects": "Projects",
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.skills": "Technologies",
      "nav.certifications": "Certifications",
      "nav.contact": "Contact",
      "nav.cv": "Resume",
      "mobile.cv": "View resume",

      "hero.available": "Head of Systems at Thelsa · Open to new Full Stack challenges",
      "hero.headline": "Full Stack Developer who turns real processes into systems",
      "hero.description": "I build the internal software a company runs on every day: what used to live in Excel sheets, emails and paper. I work with PostgreSQL, JavaScript, Java and Python, and bring more than seven years of experience coordinating critical operations.",
      "hero.location": "Monterrey, Nuevo León · Available for remote work and relocation",
      "hero.projectsButton": "View projects",
      "hero.cvButton": "Download resume",
      "hero.contactButton": "Contact me",
      "hero.photoAlt": "Jonas Castillo wearing a black suit",
      "hero.photoCaption": "Technical development with operational judgment",
      "hero.metricsLabel": "Professional results",

      "metrics.branches": "branches running on a system I built",
      "metrics.modules": "business modules on a single database",
      "metrics.operationsYears": "years in critical operations",
      "metrics.peopleLed": "team members led",

      "thelsa.tab.menu": "Module menu",
      "thelsa.tab.agenda": "Monthly agenda",
      "thelsa.tab.capacidad": "Operational capacity",
      "thelsa.tab.plan-viajes": "Trip plan",
      "thelsa.tab.seguridad": "Safety",
      "thelsa.tab.guia": "User guide",
      "thelsa.cap.menu": "A single entry point for every module: each person only sees what their role allows.",
      "thelsa.cap.agenda": "A branch's monthly agenda: services, crews and trucks per day, colour-coded by how many crews are still free.",
      "thelsa.cap.capacidad": "Operational capacity of all 13 branches, day by day: what the engine computes to decide whether a service fits.",
      "thelsa.cap.plan-viajes": "Trip plan for the long-haul fleet: every trip is assigned to a truck by a route optimizer over the map.",
      "thelsa.cap.seguridad": "Human resources: safety forms per branch, with expiry dates and alerts when it is time to renew them.",
      "thelsa.cap.guia": "The user guide explains every process and every screen step by step, with a natural-language search.",
      "thelsa.capturesNote": "Real screenshots taken on a test copy of the system; they show no customer data or business figures.",
      "stats.branches": "branches in operation",
      "stats.modules": "business modules",
      "stats.database": "single database",
      "stats.year": "in production since",
      "hero.stackLabel": "What I work with",
      "theme.light": "Light theme",
      "theme.dark": "Dark theme",
      "theme.colorful": "Colorful theme",
      "controls.theme": "Theme",

      "puente.label": "INTEGRATION · 2026 · INSIDE THE THELSA SYSTEM",
      "puente.title": "Invoicing bridge to CONTPAQi Comercial (SDK)",
      "puente.roleTitle": "Design, development and testing · C# / .NET Framework 4.8 · CONTPAQi SDK",
      "puente.status": "Stamping tested",
      "puente.summary": "The system leaves every invoice and bill of lading as a job in the database; a Windows service written in C# picks it up and executes it inside CONTPAQi Comercial through its official SDK, with no manual data entry or import files. It is the piece that connects operations with accounting and tax stamping (SAT).",
      "puente.b1": "<b>Windows service on .NET Framework 4.8 (x86)</b>, because the CONTPAQi SDK is 32-bit. It signs into Supabase with its own technical user (never the service key), with a heartbeat every minute and a job queue with retries and exponential backoff.",
      "puente.b2": "<b>Idempotency by reference:</b> if a document with the request's folio already exists, the bridge continues with it; a retry never creates two invoices. The customer is looked up by tax ID and created through the SDK if missing.",
      "puente.b3": "<b>Validation before stamping:</b> it compares the total computed by CONTPAQi against the request and stops if they differ. It issues CFDI 4.0 invoices and bills of lading with the Carta Porte 3.1 complement (inside the invoice or as a transfer document).",
      "puente.b4": "<b>Results back into the system:</b> UUID, XML and PDF are uploaded to private storage and attached to the customer file; the sales executive gets an in-app notification. Catalogues (customers, products, series) are read with a read-only SQL user.",
      "puente.note": "The whole integration was built and tested against a CONTPAQi test company; no tax data is shown here.",
      "puente.flowTitle": "How an invoice travels",
      "puente.f1t": "The system creates the job",
      "puente.f1": "Sales requests the invoice from the customer file; Billing reviews it and the database queues it with its folio.",
      "puente.f2t": "The bridge picks it up",
      "puente.f2": "The Windows service claims the job, opens the company in CONTPAQi and looks the document up by reference.",
      "puente.f3t": "Customer, document and lines",
      "puente.f3": "Customer created by tax ID if needed, document with its lines, payment method and notes, all through the SDK.",
      "puente.f4t": "Validation and stamping",
      "puente.f4": "Total compared against the request; if it matches, the CFDI 4.0 is issued (with the Carta Porte 3.1 complement when required).",
      "puente.f5t": "XML and PDF back",
      "puente.f5": "UUID, XML and PDF go to private storage and show up in the customer file; the executive is notified.",

      "groundsight.summary": "Website for the geophysical survey company of Brenda Pamela, a geophysicist starting on her own. The technical challenge: a client with no geophysics background must understand which of the 18 surveys they need and request a quote, with no server, no database and zero running cost.",
      "groundsight.b1": "<b>Rockie, a conversational assistant without AI:</b> it chats through buttons and free text; it normalizes input (NFD, accents stripped), detects keywords per goal and answers with the specialist's FAQ. Anything it does not know is handed to WhatsApp with the client's message pre-written; it never makes data up.",
      "groundsight.b2": "<b>\"Which survey do I need?\" assistant and depth comparison:</b> from the goal and the depth it proposes the method, its reach, field days and deliverable; the comparison tool plots the 18 surveys on a logarithmic scale, from centimetres to kilometres.",
      "groundsight.b3": "<b>Static generation from a catalogue:</b> a Node.js script reads the same data file the browser uses and produces the 18 survey pages, the cards, the sitemap and robots; changing a survey means editing one object.",
      "groundsight.b4": "<b>Performance and delivery:</b> photographs in WebP at five widths with srcset (sharp pipeline), animations that honour prefers-reduced-motion, a serverless form (FormSubmit via AJAX with a honeypot), SEO with Open Graph and structured data, and hosting on Cloudflare Pages.",
      "groundsight.imageAlt2": "Rockie, the site's conversational assistant, answering a question",
      "projects.visitRepo": "View repository",
      "projects.eyebrow": "SOLUTIONS AND PROJECTS",
      "projects.title": "Software built to solve real problems",
      "projects.intro": "I do not only list technologies: I explain the problem, my responsibility and the outcome of each solution.",
      "projects.repository": "View repository",
      "projects.visit": "Visit the live site",
      "case.problem": "Problem",
      "case.solution": "Solution",
      "case.role": "My responsibility",
      "case.result": "Outcome",
      "case.contribution": "Contribution",
      "case.functions": "Features",
      "case.technologies": "Technologies used",

      "thelsa.label": "FEATURED PROJECT · 2026 · INTERNAL USE",
      "thelsa.title": "Internal operations system for a moving company",
      "thelsa.roleTitle": "Head of Systems · Thelsa Mobility Solutions · 13 branches across Mexico",
      "thelsa.status": "In production",
      "thelsa.summary": "A web system that replaces the previous system, the Excel sheets that travelled by email and the paper forms the company ran on. It is used every day by operations, sales, logistics, human resources, administration and claims.",
      "thelsa.problem": "Each area kept its information in tools that did not talk to each other. Scheduling a service, quoting it or knowing how many crews and trucks were free on a given day depended on manual data entry and on each branch's memory.",
      "thelsa.solution": "A modular system on a single database: service scheduling against real capacity, quotes and a customer file, trip planning and routes, staff roster and incidents, invoicing connected to the accounting system, claims handling and a step-by-step guide for every screen.",
      "thelsa.role": "I built most of the business modules and the integration with the accounting system; contributed to operations and logistics; and I own quality and releases: every change is rehearsed on a copy of the real database, with automated browser tests, before it ships.",
      "thelsa.result": "All 13 branches run on the system. Business logic lives in the database, each module has its own space and permissions are enforced by role from the database, not from the screen.",
      "thelsa.confidentiality": "The system is private and for internal use. The visual representation is conceptual and uses fictional data only.",
      "thelsa.demoLabel": "Conceptual representation of the system",
      "thelsa.demoTitle": "Daily overview · fictional data",
      "thelsa.demoBranches": "Branches",
      "thelsa.demoServices": "Services today",
      "thelsa.demoCapacity": "Free capacity",
      "thelsa.demoModule1": "Operations · scheduling against capacity",
      "thelsa.demoModule2": "Sales · quotes and customer file",
      "thelsa.demoModule3": "Logistics · trip plan and routes",
      "thelsa.demoModule4": "Staff · roster and incidents",
      "thelsa.demoModule5": "Administration · invoicing",
      "thelsa.demoOk": "Up to date",
      "thelsa.demoPending": "3 to review",
      "thelsa.demoTotal": "Pending alerts",
      "thelsa.architectureLabel": "Technical solution flow",
      "thelsa.archScreens": "Web screens",
      "thelsa.archRules": "Rules in PostgreSQL",
      "thelsa.archIntegrations": "Integrations",
      "thelsa.archAlerts": "Alerts and reports",

      "groundsight.label": "CLIENT WEBSITE · 2026",
      "groundsight.roleTitle": "Design · Technical content · Development · Deployment",
      "groundsight.status": "Live",
      "groundsight.contribution": "I built the whole site: 26 pages generated from a catalogue, the \"Which survey do I need?\" assistant, an interactive depth comparison tool, a button-guided assistant, quote requests by email and WhatsApp, SEO and optimized images.",
      "groundsight.functions": "A catalogue of 18 surveys in 5 categories with their own pages, FAQ, reviews, privacy notice, a serverless form and free hosting. Everything that changes is edited in two files, with no developer needed.",
      "groundsight.imageAlt": "Home page of the Groundsight Geoservicios website",

      "calculator.label": "INTERNAL TOOL · 2025",
      "calculator.title": "Airport Services Calculator",
      "calculator.roleTitle": "Process analysis · Database · Report automation",
      "calculator.status": "Still in use",
      "calculator.summary": "An application developed to replace manual Excel calculations, centralize billing rules and automate the reports used in airport services administration.",
      "calculator.solution": "It processes flight information, queries parameters stored in SQL, applies the billing rules and creates structured Excel reports with the shift's indicators.",
      "calculator.result": "Built in three months, it remains in use without me and supports two people per shift. The code and data are not public due to confidentiality.",
      "calculator.demoLabel": "Visual representation of the calculator",
      "calculator.demoTitle": "Operation calculation",
      "calculator.demoFlight": "Flight",
      "calculator.demoArrival": "Arrival",
      "calculator.demoType": "Type",
      "calculator.demoService1": "Landing",
      "calculator.demoService2": "Ramp position",
      "calculator.demoService3": "Additional services",
      "calculator.demoTotal": "Estimated total",

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
      "about.lead": "I am a Full Stack Developer. Today I am Head of Systems at a moving company with 13 branches, where I build the internal system they use to operate, sell, plan routes and manage their people.",
      "about.body": "I came to software from operations: for more than seven years I coordinated critical processes, teams, financial information and KPIs in airport operations. That is why I build with the person who will use the system at six in the morning in mind, and I never assume something works until I see it in the browser or in the database.",
      "about.value1Title": "Process analysis",
      "about.value1Text": "I identify bottlenecks, business rules and automation opportunities, and write them in plain language so decision makers can read them.",
      "about.value2Title": "Logic in the database, not the screen",
      "about.value2Text": "Rules live in the database and permissions are enforced by role from there; every change is rehearsed on a copy of production before it ships.",
      "about.value3Title": "Execution under pressure",
      "about.value3Text": "I am used to prioritizing, communicating and resolving incidents in operations where a late data point has a cost.",

      "experience.eyebrow": "PROFESSIONAL EXPERIENCE",
      "experience.title": "From coordinating operations to building the systems that run them",
      "experience.intro": "Seven years in critical operations and, since 2026, the development of a complete internal system for a company with nationwide presence.",
      "experience.job0Date": "2026 — Present",
      "experience.job0Title": "Head of Systems · Full Stack Developer",
      "experience.job0Focus": "PostgreSQL · JavaScript · Integrations · QA",
      "experience.job0Text": "I build and maintain the company's internal system: operations, sales, logistics, staff, administration and claims modules on a single database. Integration with the accounting system, automated browser tests, continuous deployment and support for the 13 branches.",
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
      "skills.intro": "Skills are organized by area, with the project where each one is proven, without arbitrary percentages.",
      "skills.backend": "Backend and integrations",
      "skills.databases": "Databases",
      "skills.automation": "Data and automation",
      "skills.tools": "Quality, delivery and methodology",

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

      "contact.eyebrow": "SHALL WE WORK TOGETHER?",
      "contact.title": "Let us turn a real process into a system that works",
      "contact.text": "If you have a process that lives in Excel, emails or paper today, or you are looking for a Full Stack developer who understands operations as well as code, write to me. I reply the same day.",
      "contact.remote": "Available for remote work in Mexico",
      "contact.relocation": "Available to relocate",
      "contact.roles": "Full Stack · Backend · Process automation",
      "contact.email": "Email",
      "contact.phone": "Phone and WhatsApp",
      "contact.cv": "View full resume",

      "footer.rights": "All rights reserved.",

      "modal.eyebrow": "RESUME",
      "modal.title": "Jonas Castillo — Full Stack Developer",
      "modal.description": "View or download the version that matches the website language.",
      "modal.loading": "Loading resume…",
      "modal.mobileText": "On small screens, opening the PDF in a new tab provides a better experience.",
      "modal.open": "Open PDF",
      "modal.download": "Download PDF",
      "modal.iframeTitle": "Jonas Castillo resume",

      "meta.title": "Jonas Castillo | Full Stack Developer",
      "meta.description": "Full Stack Developer in Monterrey. I build internal systems that turn Excel and paper processes into software a company runs on every day: PostgreSQL, JavaScript, Java and Python.",
      "meta.socialDescription": "Internal systems a company runs on every day: from Excel to a real system. PostgreSQL, JavaScript, Java and Python.",
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

    // Textos con negritas propias (solo cadenas escritas en este archivo, nunca de usuarios)
    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      element.innerHTML = translate(safeLanguage, element.dataset.i18nHtml);
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
