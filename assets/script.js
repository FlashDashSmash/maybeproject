const projectStore = window.PROJECTS || [];
const languageStorageKey = "ilya-zubkov-site-language";

const ui = {
  ru: {
    common: {
      brandEyebrow: "Портфолио",
      navWork: "Проекты",
      navAbout: "Обо мне",
      navContact: "Контакт",
      menu: "Меню",
      closeMenu: "Закрыть меню",
      footerRole: "Senior Brand Designer / Art Director / AI-assisted Production",
      footerFeatureKicker: "Открыт к диалогу",
      footerFeatureText: "Давайте обсудим айдентику, презентацию или AI-production задачу.",
      footerFeatureTop: "Наверх",
      footerFeatureContact: "Контакт"
    },
    home: {
      heroKicker: "Айдентика, арт-дирекшн и AI-assisted production",
      heroTitle: "AI-driven Brand Designer / Art Director",
      heroLead:
        "Создаю айдентику, визуальные системы и AI-assisted production-процессы для брендов, которым важны структура, выразительность и скорость.",
      meta1: "Москва / remote",
      meta2: "Системный бренд-дизайн",
      meta3: "Стратегия, визуальный крафт, production",
      workKicker: "Избранные проекты",
      workTitle:
        "Выборка проектов на стыке айдентики, визуальных систем, презентационного дизайна и AI-assisted art direction.",
      workLink: "Смотреть все проекты",
      servicesKicker: "Услуги",
      servicesTitle:
        "Для команд, которым нужен не просто красивый слой, а рабочая визуальная система.",
      service1Title: "Системы бренд-идентики",
      service1Text:
        "Архитектура айдентики, логосистемы, визуальные правила и масштабируемые бренд-структуры.",
      service2Title: "Арт-дирекшн",
      service2Text:
        "Визуальное направление для кампаний, запусков, product-коммуникации и презентационных нарративов.",
      service3Title: "AI workflows и production",
      service3Text:
        "Prompt-системы, генеративные пайплайны и production-процессы, встроенные в бренд-задачи.",
      service4Title: "Презентации и rollout",
      service4Text:
        "Презентации, бренд-гайдлайны и материалы внедрения, которые помогают системе работать в реальном бизнесе.",
      ctaKicker: "Открыт к проектам и коллаборациям",
      ctaTitle: "Давайте соберем айдентику, презентацию или AI-production pipeline для вашего проекта.",
      ctaText:
        "Работаю с брендингом, арт-дирекшном, презентационными системами и AI-assisted production для агентств, корпоративных команд и независимых брендов.",
      ctaButton: "Обсудить проект"
    },
    work: {
      heroKicker: "Работы",
      heroTitle: "Проекты в области айдентики, бренд-систем, презентационного дизайна и AI-assisted art direction.",
      heroLead:
        "Клиентские проекты, концепты и экспериментальные направления, в которых я работал с логотипами, типографикой, визуальными языками, презентациями, упаковкой и генеративными инструментами."
    },
    about: {
      portraitLabel: "Портрет Ильи Зубкова",
      heroKicker: "Обо мне",
      heroTitle:
        "Собираю айдентику, визуальные системы и AI-assisted процессы для брендов со сложной структурой.",
      heroLead:
        "Я — Илья Зубков, Senior Brand Designer / Art Director. Работаю с айдентикой, логотипами, типографикой, визуальными системами, презентациями и AI-assisted production.",
      heroText:
        "Мой фокус — задачи, где бренду нужна не только выразительность, но и система: понятная логика, масштабирование, работа на разных носителях, в разных командах и внутри реальных production-ограничений.",
      heroExtra:
        "AI использую как часть дизайн-процесса: для поиска визуальных гипотез, ресерча, image production, быстрых тестов и подготовки материалов. Финальные решения строятся на дизайнерской логике: композиции, типографике, контексте, отборе и ручной финализации.",
      selectedKicker: "Коллаборации",
      selected1: "Gazprom Neft",
      selected2: "Бренд-студии и агентские команды",
      selected3: "Корпоративные продукты",
      selected4: "Культурные и образовательные инициативы",
      selected5: "Коммерческие запуски и независимые бренды",
      focusAreasKicker: "Фокус",
      focusArea1: "Айдентика и логосистемы",
      focusArea2: "Визуальные системы",
      focusArea3: "Презентационный дизайн",
      focusArea4: "AI-assisted production",
      practiceKicker: "Компетенции и процесс",
      practiceNote: "система, внедрение и AI production",
      practice1: "Айдентика и логосистемы",
      practice2: "Визуальные системы",
      practice3: "Типографика",
      practice4: "Арт-дирекшн",
      practice5: "Презентационный дизайн",
      practice6: "Бренд-гайдлайны",
      practice7: "AI-assisted production",
      practice8: "Image generation",
      practice9: "Prompt engineering",
      practice10: "3D / motion direction",
      capabilitiesKicker: "Компетенции",
      capability1: "Айдентика и логосистемы",
      capability2: "Визуальные системы",
      capability3: "Типографика",
      capability4: "Арт-дирекшн",
      capability5: "Презентационный дизайн",
      capability6: "Бренд-гайдлайны",
      capability7: "AI-assisted production",
      capability8: "Image generation",
      capability9: "Prompt engineering",
      capability10: "3D / motion direction",
      collaborationsKicker: "Коллаборации",
      collaboration1: "Gazprom Neft",
      collaboration2: "Бренд-студии и агентские команды",
      collaboration3: "Корпоративные продукты",
      collaboration4: "Культурные и образовательные инициативы",
      collaboration5: "Коммерческие запуски и независимые бренды",
      focusKicker: "Фокус",
      focusText:
        "Бренд-системы, визуальное направление, презентации и AI-assisted workflows для команд, которым важны структура, качество и скорость без потери дизайнерского контроля.",
      ctaKicker: "Сотрудничество",
      ctaTitle: "Открыт к freelance-проектам, агентским коллаборациям, арт-дирекшну и задачам на стыке брендинга, презентаций и AI-production.",
      ctaButton: "Связаться"
    },
    contact: {
      heroKicker: "Контакт",
      heroTitle: "Для айдентики, визуальных систем, презентаций и AI-assisted design workflows.",
      heroLead:
        "Открыт к выборочным freelance-проектам, агентским коллаборациям и задачам на стыке айдентики, арт-дирекшна, презентационного дизайна и AI-assisted production.",
      emailKicker: "Написать",
      emailText:
        "Коротко опишите задачу, сроки и контекст. Особенно интересны brand systems, corporate design, presentation design и AI pipeline setup.",
      servicesKicker: "С чем могу помочь",
      service1: "Айдентика и логосистемы",
      service2: "Визуальные системы бренда",
      service3: "Презентации и корпоративные шаблоны",
      service4: "Арт-дирекшн запусков и кампаний",
      service5: "AI-assisted production",
      service6: "Визуальные гипотезы для новых продуктов и направлений",
      firstMessageKicker: "Что можно прислать в первом сообщении",
      firstMessage1: "Краткое описание задачи",
      firstMessage2: "Сроки",
      firstMessage3: "Формат сотрудничества",
      firstMessage4: "Примерный бюджетный диапазон",
      firstMessage5: "Ссылки на материалы, если они уже есть",
      footerFeatureText: "Если вам нужен дизайнер на стыке брендинга, арт-дирекшна и AI-production — напишите мне.",
      socialKicker: "Также здесь"
    },
    project: {
      caseStudy: "Кейс",
      explore: "Смотреть",
      replaceCardImage: "",
      replaceHero: "",
      client: "Клиент",
      year: "Год",
      role: "Роль",
      scope: "Объем",
      visualStory: "Визуальная лента",
      detailStrip: "Детали системы",
      darkSection: "Контрастные носители",
      descriptionKicker: "Коротко о проекте",
      textImageKicker: "Тезис",
      ctaTitle: "Давайте создадим, что-то красивое! Вместе.",
      ctaLink: "Написать",
      nextProject: "Следующий проект",
      sectionLabels: {
        context: "Контекст",
        challenge: "Задача",
        visualSystem: "Визуальная система",
        aiWorkflow: "AI-процесс",
        applications: "Применение",
        result: "Результат"
      }
    }
  },
  en: {
    common: {
      brandEyebrow: "Portfolio",
      navWork: "Work",
      navAbout: "About",
      navContact: "Contact",
      menu: "Menu",
      closeMenu: "Close menu",
      footerRole: "Senior Brand Designer / Art Director / AI-assisted Production",
      footerFeatureKicker: "Open for conversation",
      footerFeatureText: "Let's talk about what a brand could do next.",
      footerFeatureTop: "Back to top",
      footerFeatureContact: "Contact"
    },
    home: {
      heroKicker: "Brand systems, art direction, AI workflows",
      heroTitle: "AI-driven Brand Designer / Art Director",
      heroLead:
        "I create brand identities, visual systems and AI-powered design workflows for complex brands, corporate products and cultural projects.",
      meta1: "Moscow / remote",
      meta2: "System-led brand design",
      meta3: "Strategy, visual craft, production",
      workKicker: "Selected work",
      workTitle:
        "Identity systems, visual platforms and AI-powered production for brands with complex structures.",
      workLink: "View all projects",
      servicesKicker: "Services",
      servicesTitle:
        "Built for teams that need more than a polished surface: a visual system that can actually work.",
      service1Title: "Brand identity systems",
      service1Text:
        "Identity architecture, logo systems, visual rules and scalable brand structures.",
      service2Title: "Art direction",
      service2Text:
        "Visual direction for campaigns, launches, product communication and presentation narratives.",
      service3Title: "AI workflows",
      service3Text:
        "Prompt systems, generative pipelines and production workflows embedded into brand tasks.",
      service4Title: "Presentations and rollout",
      service4Text:
        "Presentations, brand guidelines and rollout materials that help the system perform in real business contexts.",
      ctaKicker: "Open for selected collaborations",
      ctaTitle: "Let's build a visual system that truly works.",
      ctaText:
        "Branding, art direction, presentations and AI-driven production for corporate products, agencies and cultural projects.",
      ctaButton: "Discuss a project"
    },
    work: {
      heroKicker: "Work",
      heroTitle: "Projects across brand identity, visual systems and AI-assisted design direction.",
      heroLead:
        "A selection of case studies for corporate brands, cultural initiatives, digital products and agency collaborations."
    },
    about: {
      portraitLabel: "Ilya Zubkov portrait",
      heroKicker: "About",
      heroTitle:
        "I create design systems where form follows meaning and simplicity becomes the main instrument of beauty.",
      heroLead:
        "Ilya Zubkov is a senior brand designer and art director focused on identity systems, logo design, visual language, presentations and AI-assisted creative workflows.",
      heroText:
        "I am most interested in projects where a brand must be more than expressive: it has to endure scale, multiple teams, corporate context and real production constraints.",
      selectedKicker: "Selected collaborations",
      selected1: "Gazprom Neft",
      selected2: "Corporate product teams",
      selected3: "Agency partnerships",
      selected4: "Cultural initiatives",
      focusAreasKicker: "Primary focus",
      focusArea1: "Brand systems",
      focusArea2: "Visual systems",
      focusArea3: "Presentation design",
      focusArea4: "AI-assisted workflows",
      practiceKicker: "Capabilities & workflow",
      practiceNote: "identity, rollout and AI production",
      practice1: "Art direction",
      practice2: "Logo systems",
      practice3: "Typography",
      practice4: "AI image generation",
      practice5: "Prompt engineering",
      practice6: "3D / motion direction",
      practice7: "Brand guidelines",
      capabilitiesKicker: "Capabilities",
      capability1: "Brand identity",
      capability2: "Art direction",
      capability3: "Logo systems",
      capability4: "Typography",
      capability5: "Visual systems",
      capability6: "Presentations",
      capability7: "AI image generation",
      capability8: "Prompt engineering",
      capability9: "3D / motion direction",
      capability10: "Brand guidelines",
      collaborationsKicker: "Collaborations",
      collaboration1: "Gazprom Neft",
      collaboration2: "Agency teams",
      collaboration3: "Corporate products",
      collaboration4: "Cultural projects",
      collaboration5: "Commercial launches",
      focusKicker: "Focus",
      focusText:
        "Brand systems, visual direction, presentations, AI image pipelines and workflows for teams that care about structure, quality and speed without losing authorial control.",
      ctaKicker: "Collaboration",
      ctaTitle: "Strategy, identity and visual systems for complex brands and product teams.",
      ctaButton: "Get in touch"
    },
    contact: {
      heroKicker: "Contact",
      heroTitle: "For brand identities, visual systems, presentations and AI-assisted design workflows.",
      heroLead:
        "Available for selected freelance projects, long-term art direction and collaborations with agencies and product teams.",
      emailKicker: "Email",
      emailText:
        "Share a short brief, timeline and context. I am especially interested in brand systems, corporate design, presentation design and AI pipeline setup.",
      servicesKicker: "Also available for",
      service1: "Agency collaborations",
      service2: "Corporate brand refresh",
      service3: "Presentation systems",
      service4: "AI image workflow design",
      service5: "Visual direction for launches",
      socialKicker: "Elsewhere"
    },
    project: {
      caseStudy: "Case study",
      explore: "Explore",
      replaceCardImage: "",
      replaceHero: "",
      client: "Client",
      year: "Year",
      role: "Role",
      scope: "Scope",
      visualStory: "Visual story",
      detailStrip: "System details",
      darkSection: "Contrast section",
      descriptionKicker: "Project summary",
      textImageKicker: "Thesis",
      ctaTitle: "Let's create something beautiful. Together.",
      ctaLink: "Get in touch",
      nextProject: "Next project",
      sectionLabels: {
        context: "Context",
        challenge: "Challenge",
        visualSystem: "Visual System",
        aiWorkflow: "AI Workflow / Process",
        applications: "Applications",
        result: "Result"
      }
    }
  }
};

let currentLanguage = "ru";
const pageFadeInStorageKey = "ilya-zubkov-page-fade-in";
const pageTransitionDuration = 700;
const projectPresentationMap = {
  gfpa: {
    client: {
      ru: "Global Finance Professionals Alliance",
      en: "Global Finance Professionals Alliance"
    },
    scope: {
      ru: "Стратегия, логотип, типографика, цвет, гайдлайны",
      en: "Strategy, logo, typography, color, guidelines"
    }
  },
  veld: {
    client: {
      ru: "Veld",
      en: "Veld"
    },
    scope: {
      ru: "Арт-дирекшн, editorial system, digital, presentations",
      en: "Art direction, editorial system, digital, presentations"
    }
  },
  axonic: {
    client: {
      ru: "AXONIC Neurotechnology",
      en: "AXONIC Neurotechnology"
    },
    scope: {
      ru: "Платформа бренда, логотип, графика, decks, AI workflow",
      en: "Brand platform, logo, graphics, decks, AI workflow"
    }
  },
  assoro: {
    client: {
      ru: "ASSORO",
      en: "ASSORO"
    },
    scope: {
      ru: "Identity, product storytelling, campaign direction, rollout",
      en: "Identity, product storytelling, campaign direction, rollout"
    }
  },
  "gpn-custom-type-test": {
    client: {
      ru: "KOTO MYOTO",
      en: "KOTO MYOTO"
    },
    scope: {
      ru: "Стратегия, логотип, цвет, упаковка, меню, постеры, digital",
      en: "Strategy, logo, color, packaging, menus, posters, digital"
    }
  },
  ecotek: {
    client: {
      ru: "ECOTEK",
      en: "ECOTEK"
    },
    scope: {
      ru: "Архитектура бренда, логотип, цвет, схемы, guidelines",
      en: "Brand architecture, logo, color, diagrams, guidelines"
    }
  },
  "iron-bolt": {
    client: {
      ru: "Iron Bolt",
      en: "Iron Bolt"
    },
    scope: {
      ru: "Identity system, industrial graphics, applications",
      en: "Identity system, industrial graphics, applications"
    }
  },
  bulat: {
    client: {
      ru: "Bulat",
      en: "Bulat"
    },
    scope: {
      ru: "Brand refresh, product communication, retail assets",
      en: "Brand refresh, product communication, retail assets"
    }
  },
  "wow-lan": {
    client: {
      ru: "WOW-LAN",
      en: "WOW-LAN"
    },
    scope: {
      ru: "Digital identity, portal system, UI fragments, rollout",
      en: "Digital identity, portal system, UI fragments, rollout"
    }
  }
};

function getText(path, language = currentLanguage) {
  return path.split(".").reduce((value, segment) => value?.[segment], ui[language]) ?? "";
}

function localize(value, language = currentLanguage) {
  if (value && typeof value === "object" && "ru" in value && "en" in value) {
    return value[language];
  }

  return value;
}

function updateMetaFromBody() {
  const body = document.body;
  const description = document.querySelector('meta[name="description"]');
  const title = currentLanguage === "ru" ? body.dataset.titleRu : body.dataset.titleEn;
  const metaDescription =
    currentLanguage === "ru" ? body.dataset.descriptionRu : body.dataset.descriptionEn;

  if (title && document.body.dataset.page !== "project") {
    document.title = title;
  }

  if (description && metaDescription && document.body.dataset.page !== "project") {
    description.setAttribute("content", metaDescription);
  }
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = getText(key);

    if (value) {
      element.textContent = value;
    }
  });

  const menuToggle = document.querySelector(".nav-toggle");

  if (menuToggle) {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-label", getText(isOpen ? "common.closeMenu" : "common.menu"));
  }

  updateMetaFromBody();
}

function updateLanguageButtons() {
  document.querySelectorAll(".lang-switch__button").forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setActiveNavigation() {
  const currentPage = document.body.dataset.page;

  document.querySelectorAll(".site-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    const isActive =
      (currentPage === "work" && href === "work.html") ||
      (currentPage === "about" && href === "about.html") ||
      (currentPage === "contact" && href === "contact.html");

    link.classList.toggle("is-active", isActive);
  });
}

function setupMobileNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const mobileQuery = window.matchMedia("(max-width: 820px)");

  if (!header || !toggle || !nav) {
    return;
  }

  const setMenuState = (isOpen) => {
    header.classList.toggle("is-expanded", isOpen);
    header.classList.toggle("is-pinned", isOpen);
    nav.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("is-menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", getText(isOpen ? "common.closeMenu" : "common.menu"));
  };

  toggle.setAttribute("aria-label", getText("common.menu"));

  toggle.addEventListener("click", () => {
    if (!mobileQuery.matches) {
      return;
    }

    const isOpen = toggle.getAttribute("aria-expanded") !== "true";
    setMenuState(isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (!mobileQuery.matches) {
        return;
      }

      setMenuState(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (
      mobileQuery.matches &&
      event.key === "Escape" &&
      toggle.getAttribute("aria-expanded") === "true"
    ) {
      setMenuState(false);
      toggle.focus();
    }
  });
}

function setupDynamicHeader() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const mobileQuery = window.matchMedia("(max-width: 820px)");

  if (!header || !toggle || !nav) {
    return;
  }

  const closeHeader = () => {
    header.classList.remove("is-expanded", "is-pinned");
    nav.classList.remove("is-open");
    document.body.classList.remove("is-menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", getText("common.menu"));
  };

  const updateHeaderState = () => {
    const shouldCompact = mobileQuery.matches || window.scrollY > 48;
    header.classList.toggle("is-compact", shouldCompact);

    if (!mobileQuery.matches) {
      header.classList.remove("is-pinned");
      nav.classList.remove("is-open");
      document.body.classList.remove("is-menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", getText("common.menu"));
    }

    if (!shouldCompact) {
      closeHeader();
    }
  };

  header.addEventListener("mouseenter", () => {
    if (header.classList.contains("is-compact") && !mobileQuery.matches) {
      header.classList.add("is-expanded");
    }
  });

  header.addEventListener("mouseleave", () => {
    if (!mobileQuery.matches && !header.classList.contains("is-pinned")) {
      closeHeader();
    }
  });

  header.addEventListener("focusin", () => {
    if (header.classList.contains("is-compact")) {
      header.classList.add("is-expanded");
    }
  });

  header.addEventListener("focusout", () => {
    window.setTimeout(() => {
      if (
        !header.contains(document.activeElement) &&
        !mobileQuery.matches &&
        !header.classList.contains("is-pinned")
      ) {
        closeHeader();
      }
    }, 0);
  });

  window.addEventListener("scroll", updateHeaderState, { passive: true });
  mobileQuery.addEventListener("change", updateHeaderState);
  updateHeaderState();
}

function bindLanguageSwitch() {
  document.querySelectorAll(".lang-switch__button").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.lang;

      if (!nextLanguage || nextLanguage === currentLanguage) {
        return;
      }

      const header = document.querySelector(".site-header");
      const nav = document.querySelector(".site-nav");
      const toggle = document.querySelector(".nav-toggle");
      const mobileQuery = window.matchMedia("(max-width: 820px)");
      const shouldRestoreMobileMenu =
        mobileQuery.matches && header?.classList.contains("is-expanded");

      currentLanguage = nextLanguage;
      localStorage.setItem(languageStorageKey, currentLanguage);
      renderPage();

      if (toggle) {
        toggle.setAttribute("aria-label", getText(shouldRestoreMobileMenu ? "common.closeMenu" : "common.menu"));
      }

      if (header && nav && toggle) {
        if (shouldRestoreMobileMenu) {
          header.classList.add("is-expanded", "is-pinned");
          nav.classList.add("is-open");
          document.body.classList.add("is-menu-open");
          toggle.setAttribute("aria-expanded", "true");
        } else {
          header.classList.remove("is-expanded", "is-pinned");
          nav.classList.remove("is-open");
          document.body.classList.remove("is-menu-open");
          toggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  });
}

function shouldAnimateNavigation(link) {
  if (!link) {
    return false;
  }

  const href = link.getAttribute("href");

  if (
    !href ||
    href.startsWith("#") ||
    link.hasAttribute("download") ||
    link.target === "_blank" ||
    link.dataset.noTransition !== undefined
  ) {
    return false;
  }

  if (/^(mailto:|tel:|javascript:)/i.test(href)) {
    return false;
  }

  const url = new URL(href, window.location.href);
  const isSameOrigin = url.origin === window.location.origin;
  const isSamePage =
    url.pathname === window.location.pathname &&
    url.search === window.location.search &&
    url.hash === window.location.hash;

  return isSameOrigin && !isSamePage;
}

function setupPageTransitions() {
  document.body.classList.add("is-page-transition-ready");
  window.scrollTo(0, 0);

  if (document.documentElement.classList.contains("is-page-fading-in")) {
    sessionStorage.removeItem(pageFadeInStorageKey);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.classList.remove("is-page-fading-in");
      });
    });
  }

  document.addEventListener("click", (event) => {
    const link = event.target instanceof Element ? event.target.closest("a") : null;

    if (
      !shouldAnimateNavigation(link) ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    document.body.classList.add("is-transitioning", "is-page-leaving");
    sessionStorage.setItem(pageFadeInStorageKey, "1");

    window.setTimeout(() => {
      window.location.href = link.href;
    }, pageTransitionDuration - 20);
  });

  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      document.body.classList.remove("is-transitioning", "is-page-leaving");
    }
  });
}

function renderProjectListCover(project, imageClass) {
  if (!project.cover) {
    return "";
  }

  const animatedAttrs = project.coverAnimated
    ? ` data-static-src="${project.cover}" data-animated-src="${project.coverAnimated}"`
    : "";

  return `<img class="${imageClass}" src="${project.cover}" alt="" loading="lazy"${animatedAttrs} />`;
}

function createProjectCard(project) {
  const cardMedia = renderProjectListCover(project, "project-card__image");

  return `
    <a class="project-card reveal" href="project.html?slug=${project.slug}">
      <div class="project-card__media" style="--project-accent: ${project.accent};">
        ${cardMedia}
        <span class="project-card__stamp">${localize(project.category)}</span>
        ${project.cover ? "" : `<span class="project-card__placeholder">${getText("project.replaceCardImage")}</span>`}
      </div>
      <div class="project-card__content">
        <div class="project-card__meta">
          <span>${localize(project.category)}</span>
          <span>${project.year}</span>
        </div>
        <div class="project-card__title-row">
          <h3>${project.title}</h3>
          <span class="project-card__arrow">${getText("project.explore")}</span>
        </div>
      </div>
    </a>
  `;
}

function createSelectedProjectRow(project, index) {
  const coverMarkup = project.cover
    ? renderProjectListCover(project, "selected-project__cover-image")
    : `<span>${getText("project.replaceCardImage")}</span>`;

  return `
    <a
      class="selected-project reveal"
      href="project.html?slug=${project.slug}"
      style="--project-accent: ${project.accent};"
      aria-label="${project.title}: ${localize(project.category)}"
    >
      <div class="selected-project__summary">
        <span class="selected-project__year">${project.year}</span>
        <h3 class="selected-project__title">${project.title}</h3>
        <span class="selected-project__category">${localize(project.category)}</span>
        <span class="selected-project__index">${String(index + 1).padStart(2, "0")}</span>
      </div>

      <div class="selected-project__reveal">
        <div class="selected-project__reveal-inner">
          <div class="selected-project__cover">
            ${coverMarkup}
          </div>
          <div class="selected-project__description">
            <p>${localize(project.summary)}</p>
            <dl class="selected-project__meta">
              <div>
                <dt>${getText("project.role")}</dt>
                <dd>${localize(project.role)}</dd>
              </div>
              <div>
                <dt>${getText("project.year")}</dt>
                <dd>${project.year}</dd>
              </div>
            </dl>
            <span class="selected-project__link-label">${getText("project.explore")} &nearr;</span>
          </div>
        </div>
      </div>
    </a>
  `;
}

function setupAnimatedProjectCovers() {
  document.querySelectorAll("[data-static-src][data-animated-src]").forEach((image) => {
    const staticSrc = image.getAttribute("data-static-src");
    const animatedSrc = image.getAttribute("data-animated-src");
    const hoverTarget = image.closest(".project-card, .selected-project");

    if (!staticSrc || !animatedSrc || !hoverTarget) {
      return;
    }

    const playAnimatedCover = () => {
      if (image.getAttribute("src") !== animatedSrc) {
        image.setAttribute("src", animatedSrc);
      }
    };

    const showStaticCover = () => {
      if (image.getAttribute("src") !== staticSrc) {
        image.setAttribute("src", staticSrc);
      }
    };

    hoverTarget.addEventListener("mouseenter", playAnimatedCover);
    hoverTarget.addEventListener("mouseleave", showStaticCover);
    hoverTarget.addEventListener("focusin", playAnimatedCover);
    hoverTarget.addEventListener("focusout", showStaticCover);
  });
}

function renderSelectedWork() {
  const selectedGrid = document.getElementById("selected-work-grid");

  if (!selectedGrid) {
    return;
  }

  const featuredProjects = projectStore.filter((project) => project.featured);
  const kotoMyotoFeatured = featuredProjects.find(
    (project) => project.slug === "gpn-custom-type-test"
  );
  const orderedFeaturedProjects = featuredProjects.filter(
    (project) => project.slug !== "gpn-custom-type-test"
  );

  if (kotoMyotoFeatured) {
    orderedFeaturedProjects.push(kotoMyotoFeatured);
  }

  selectedGrid.className = "selected-projects";
  selectedGrid.innerHTML = orderedFeaturedProjects.slice(0, 7).map(createSelectedProjectRow).join("");
}

function renderWorkGrid() {
  const workGrid = document.getElementById("work-grid");

  if (!workGrid) {
    return;
  }

  const kotoMyotoProject = projectStore.find(
    (project) => project.slug === "gpn-custom-type-test"
  );
  const orderedProjects = projectStore.filter(
    (project) => project.slug !== "gpn-custom-type-test"
  );

  if (kotoMyotoProject) {
    orderedProjects.push(kotoMyotoProject);
  }

  workGrid.innerHTML = orderedProjects.map(createProjectCard).join("");
}

function getProjectFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || projectStore[0]?.slug;
  return projectStore.find(
    (project) => project.slug === slug || project.aliases?.includes(slug)
  ) || projectStore[0];
}

function getProjectPresentation(project) {
  const extra = projectPresentationMap[project.slug] || {};

  return {
    subtitle: localize(project.category),
    client: localize(extra.client || { ru: project.title, en: project.title }),
    role: localize(project.role),
    scope: localize(extra.scope || project.role)
  };
}

function renderStoryMedia(project, label, className = "") {
  return `
    <figure class="story-media ${className}" style="--project-accent: ${project.accent};">
      <div class="story-media__surface"></div>
      <figcaption class="story-media__label">${label}</figcaption>
    </figure>
  `;
}

function renderProjectImage(media, className = "") {
  return `
    <figure class="story-image ${className}" style="${[
      media.aspectRatio ? `aspect-ratio: ${media.aspectRatio}` : "",
      media.zoom ? `--story-image-zoom: ${media.zoom}` : "",
      media.position ? `--story-image-position: ${media.position}` : ""
    ].filter(Boolean).join("; ")}">
      <img src="${media.src}" alt="${localize(media.alt)}" loading="lazy" />
    </figure>
  `;
}

function renderProjectCoverMedia(project, presentation) {
  const coverMedia = project.coverMedia;

  if (coverMedia?.type === "vimeo") {
    return `
      <div class="project-cover__embed-wrap" style="${[
        coverMedia.aspectRatio ? `--cover-aspect-ratio: ${coverMedia.aspectRatio}` : "",
        coverMedia.zoom ? `--cover-zoom: ${coverMedia.zoom}` : ""
      ].filter(Boolean).join("; ")}">
        <iframe
          class="project-cover__embed"
          src="${coverMedia.src}"
          title="${coverMedia.title || `${project.title}: ${presentation.subtitle}`}"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowfullscreen
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    `;
  }

  if (coverMedia?.type === "image" && coverMedia.src) {
    return `<img class="project-cover__image" src="${coverMedia.src}" alt="${coverMedia.alt ? localize(coverMedia.alt) : `${project.title}: ${presentation.subtitle}`}" />`;
  }

  if (project.cover) {
    return `<img class="project-cover__image" src="${project.cover}" alt="${project.title}: ${presentation.subtitle}" />`;
  }

  return "";
}

function renderStoryCopyBlock(copy) {
  if (!copy) {
    return "";
  }

  return `
    <div class="container story-copy-block">
      <div class="story-copy-block__inner">
        <p class="story-copy-block__text">${localize(copy)}</p>
      </div>
    </div>
  `;
}

function renderProjectStoryPlaceholder(project, label, className = "") {
  return `
    <figure class="story-media ${className}" style="--project-accent: ${project.accent};">
      <div class="story-media__surface"></div>
      <figcaption class="story-media__label">${label}</figcaption>
    </figure>
  `;
}

function buildImageProjectStory(project, presentation) {
  if (project.slug === "saydo") {
    const media = project.media;
    const notes = project.storyNotes || {};

    return `
      <section class="project-story project-story--images">
        ${renderStoryCopyBlock(notes.manifest)}

        <div class="container">
          ${renderProjectImage(media[0], "story-image--hero")}
        </div>

        <div class="container story-image-grid story-image-grid--two story-image-grid--saydo-natural">
          ${renderProjectImage(media[1], "story-image--natural")}
          ${renderProjectImage(media[2], "story-image--natural")}
        </div>

        ${renderStoryCopyBlock(notes.logoResult)}

        <div class="container">
          ${renderProjectImage(media[4], "story-image--wide")}
        </div>

        ${renderStoryCopyBlock(notes.arrowManifest)}

        <div class="container">
          ${renderProjectImage(media[8], "story-image--wide")}
        </div>

        ${renderStoryCopyBlock(notes.palette)}

        <div class="container">
          ${renderProjectImage(media[9], "story-image--wide")}
        </div>

        ${renderStoryCopyBlock(notes.typeface)}

        <div class="container">
          ${renderProjectImage(media[3], "story-image--wide")}
        </div>

        <div class="container story-image-grid story-image-grid--two story-image-grid--saydo-natural">
          ${renderProjectImage(media[10], "story-image--natural")}
          ${renderProjectImage(media[13], "story-image--natural")}
        </div>

        ${renderStoryCopyBlock(notes.packaging)}

        <div class="container">
          ${renderProjectImage(media[7], "story-image--wide")}
        </div>

        <div class="container story-image-grid story-image-grid--two story-image-grid--saydo-natural">
          ${renderProjectImage(media[5], "story-image--natural")}
          ${renderProjectImage(media[14], "story-image--natural")}
        </div>

        <div class="container story-image-grid story-image-grid--two story-image-grid--saydo-natural">
          ${renderProjectImage(media[11], "story-image--natural")}
          ${renderProjectImage(media[6], "story-image--natural")}
        </div>

        <div class="container">
          ${renderProjectImage(media[12], "story-image--wide")}
        </div>
      </section>
    `;
  }

  const media = Array.isArray(project.storyMediaOrder)
    ? project.storyMediaOrder.map((index) => project.media[index]).filter(Boolean)
    : project.media;

  return `
    <section class="project-story project-story--images">
      <div class="container">
        ${renderProjectImage(media[0], "story-image--hero")}
      </div>

      <div class="container story-image-grid story-image-grid--two">
        ${renderProjectImage(media[1])}
        ${renderProjectImage(media[2])}
      </div>

      <div class="container">
        ${renderProjectImage(media[3], "story-image--wide")}
      </div>

      <div class="container story-image-grid story-image-grid--portraits">
        ${renderProjectImage(media[9], "story-image--portrait")}
        ${renderProjectImage(media[10], "story-image--portrait")}
      </div>

      <div class="container">
        ${renderProjectImage(media[4], "story-image--wide")}
      </div>

      <div class="container">
        ${renderProjectImage(media[5], "story-image--wide")}
      </div>

      <div class="container">
        ${renderProjectImage(media[6], "story-image--wide")}
      </div>

      <div class="container story-image-grid story-image-grid--two">
        ${renderProjectImage(media[7])}
        ${renderProjectImage(media[8])}
      </div>
    </section>
  `;
}

function buildProjectStory(project, presentation) {
  if (project.media?.length) {
    return buildImageProjectStory(project, presentation);
  }

  const gallery = project.gallery.map((item) => localize(item));
  const labels = getText("project.sectionLabels");

  return `
    <section class="project-story project-story--images">
      <div class="container">
        ${renderProjectStoryPlaceholder(
          project,
          gallery[0] || getText("project.visualStory"),
          "story-media--frame story-media--wide"
        )}
      </div>

      <div class="container story-image-grid story-image-grid--two">
        ${renderProjectStoryPlaceholder(
          project,
          gallery[1] || gallery[0] || project.title,
          "story-media--frame"
        )}
        ${renderProjectStoryPlaceholder(
          project,
          gallery[2] || localize(project.summary),
          "story-media--frame"
        )}
      </div>

      <div class="container">
        ${renderProjectStoryPlaceholder(
          project,
          gallery[3] || labels.visualSystem,
          "story-media--frame story-media--wide"
        )}
      </div>

      <div class="container story-image-grid story-image-grid--portraits">
        ${renderProjectStoryPlaceholder(
          project,
          labels.challenge,
          "story-media--frame story-media--portrait-frame"
        )}
        ${renderProjectStoryPlaceholder(
          project,
          labels.aiWorkflow,
          "story-media--frame story-media--portrait-frame"
        )}
      </div>

      <div class="container">
        ${renderProjectStoryPlaceholder(
          project,
          labels.visualSystem,
          "story-media--frame story-media--wide"
        )}
      </div>

      <div class="container">
        ${renderProjectStoryPlaceholder(
          project,
          labels.applications,
          "story-media--frame story-media--wide"
        )}
      </div>

      <div class="container">
        ${renderProjectStoryPlaceholder(
          project,
          labels.result,
          "story-media--frame story-media--wide"
        )}
      </div>

      <div class="container story-image-grid story-image-grid--two">
        ${renderProjectStoryPlaceholder(
          project,
          presentation.client,
          "story-media--frame"
        )}
        ${renderProjectStoryPlaceholder(
          project,
          presentation.scope,
          "story-media--frame"
        )}
      </div>
    </section>
  `;
}

function buildProjectDescription(project, presentation) {
  const labels = getText("project.sectionLabels");

  return `
    <section class="project-description">
      <div class="container">
        <div class="project-description__inner">
          <p class="section-kicker">${getText("project.descriptionKicker")}</p>
          <div class="project-description__body">
            <p><span>${labels.context}.</span> ${project.title} — ${presentation.subtitle}. ${localize(project.sections.context)}</p>
            <p><span>${labels.challenge}.</span> ${localize(project.sections.challenge)}</p>
            <p><span>${labels.visualSystem}.</span> ${localize(project.sections.visualSystem)} ${localize(project.sections.aiWorkflow)}</p>
            <p><span>${labels.result}.</span> ${localize(project.sections.applications)} ${localize(project.sections.result)}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderProjectPage() {
  const projectPage = document.getElementById("project-page");
  const description = document.querySelector('meta[name="description"]');

  if (!projectPage || !projectStore.length) {
    return;
  }

  const project = getProjectFromQuery();
  const currentIndex = projectStore.findIndex((item) => item.slug === project.slug);
  const previousProject = projectStore[(currentIndex - 1 + projectStore.length) % projectStore.length];
  const nextProject = projectStore[(currentIndex + 1) % projectStore.length];
  const presentation = getProjectPresentation(project);
  const heroMedia = renderProjectCoverMedia(project, presentation);

  document.title = `${project.title} - Ilya Zubkov`;

  if (description) {
    description.setAttribute("content", localize(project.summary));
  }

  projectPage.innerHTML = `
    <section class="project-hero">
      <div class="container project-hero__layout">
        <div class="project-hero__copy reveal">
          <p class="section-kicker">${getText("project.caseStudy")}</p>
          <h1>${project.title}</h1>
          <p class="project-subtitle">${presentation.subtitle}</p>
          <p class="project-intro">${localize(project.intro)}</p>
        </div>

        <dl class="project-meta reveal">
          <div class="project-meta__item">
            <dt>${getText("project.client")}</dt>
            <dd>${presentation.client}</dd>
          </div>
          <div class="project-meta__item">
            <dt>${getText("project.year")}</dt>
            <dd>${project.year}</dd>
          </div>
          <div class="project-meta__item">
            <dt>${getText("project.role")}</dt>
            <dd>${presentation.role}</dd>
          </div>
          <div class="project-meta__item">
            <dt>${getText("project.scope")}</dt>
            <dd>${presentation.scope}</dd>
          </div>
        </dl>
      </div>
      <div class="container reveal">
        <div class="project-cover project-cover--editorial" style="--project-accent: ${project.accent};">
          ${heroMedia}
          ${
            heroMedia
              ? ""
              : `<div class="project-cover__label">
                  <span>${presentation.subtitle}</span>
                  <span>${getText("project.replaceHero")}</span>
                </div>`
          }
        </div>
      </div>
    </section>

    ${buildProjectStory(project, presentation)}

    ${buildProjectDescription(project, presentation)}

    <section class="project-cta">
      <div class="container">
        <a class="project-cta__link" href="contact.html">
          <span>${getText("project.ctaTitle")}</span>
          <span class="project-cta__eyebrow">${getText("project.ctaLink")}</span>
        </a>
      </div>
    </section>

    <section class="section">
      <div class="container project-pagination">
        <div class="project-pagination__grid">
          <a class="project-pagination__item project-pagination__item--prev" href="project.html?slug=${previousProject.slug}">
            <span class="project-pagination__label">PREV</span>
            <span class="project-pagination__main">
              <span class="project-pagination__arrow" aria-hidden="true">‹</span>
              <span class="project-pagination__title">${previousProject.title}</span>
            </span>
          </a>

          <a class="project-pagination__item project-pagination__item--next" href="project.html?slug=${nextProject.slug}">
            <span class="project-pagination__label">NEXT</span>
            <span class="project-pagination__main">
              <span class="project-pagination__title">${nextProject.title}</span>
              <span class="project-pagination__arrow" aria-hidden="true">›</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  `;
}

function renderHomeProjectCta() {
  if (document.body.dataset.page !== "home") {
    return;
  }

  const legacySection = document.querySelector(".section--cta, .project-cta[data-home-cta='true']");

  if (!legacySection) {
    return;
  }

  legacySection.className = "project-cta";
  legacySection.dataset.homeCta = "true";
  legacySection.innerHTML = `
    <div class="container">
      <a class="project-cta__link reveal" href="contact.html">
        <span>${getText("project.ctaTitle")}</span>
      </a>
    </div>
  `;
}

function renderAboutProjectCta() {
  if (document.body.dataset.page !== "about") {
    return;
  }

  const legacySection = document.querySelector("[data-about-cta='true']");

  if (!legacySection) {
    return;
  }

  legacySection.className = "project-cta";
  legacySection.innerHTML = `
    <div class="container">
      <a class="project-cta__link reveal" href="contact.html">
        <span>${getText("project.ctaTitle")}</span>
      </a>
    </div>
  `;
}

function renderWorkProjectCta() {
  if (document.body.dataset.page !== "work") {
    return;
  }

  let section = document.querySelector("[data-work-cta='true']");

  if (!section) {
    section = document.createElement("section");
    section.dataset.workCta = "true";

    const main = document.querySelector("main");

    if (!main) {
      return;
    }

    main.appendChild(section);
  }

  section.className = "project-cta";
  section.innerHTML = `
    <div class="container">
      <a class="project-cta__link reveal" href="contact.html">
        <span>${getText("project.ctaTitle")}</span>
      </a>
    </div>
  `;
}

function resetVisibility(elements) {
  elements.forEach((element) => element.classList.remove("is-visible"));
}

function revealOnScroll() {
  const elements = document.querySelectorAll(".project-card, .reveal");

  if (!elements.length) {
    return;
  }

  resetVisibility(elements);

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14
    }
  );

  elements.forEach((element) => observer.observe(element));
}

function renderPage() {
  applyTranslations();
  updateLanguageButtons();
  renderSelectedWork();
  renderWorkGrid();
  renderProjectPage();
  renderHomeProjectCta();
  renderAboutProjectCta();
  renderWorkProjectCta();
  setupAnimatedProjectCovers();
  revealOnScroll();
}

document.addEventListener("DOMContentLoaded", () => {
  currentLanguage = localStorage.getItem(languageStorageKey) || "ru";
  setupPageTransitions();
  setActiveNavigation();
  setupDynamicHeader();
  setupMobileNavigation();
  bindLanguageSwitch();
  renderPage();
});
