const projectStore = window.PROJECTS || [];
const languageStorageKey = "ilya-zubkov-site-language";

const ui = {
  ru: {
    common: {
      brandEyebrow: "Портфолио",
      navWork: "Работы",
      navAbout: "Обо мне",
      navContact: "Контакт",
      menu: "Меню",
      closeMenu: "Закрыть меню",
      footerRole: "Brand Designer / Art Director / AI Workflow Design",
      footerFeatureKicker: "Открыт к диалогу",
      footerFeatureText: "Давайте обсудим, что бренд может сделать дальше.",
      footerFeatureTop: "Наверх"
    },
    home: {
      heroKicker: "Бренд-системы, арт-дирекшн, AI workflows",
      heroTitle: "AI-driven Brand Designer / Art Director",
      heroLead:
        "Я создаю бренд-идентику, визуальные системы и AI-powered дизайн-процессы для сложных брендов, корпоративных продуктов и культурных проектов.",
      meta1: "Москва / remote",
      meta2: "Системный бренд-дизайн",
      meta3: "Стратегия, визуальный крафт, production",
      workKicker: "Избранные проекты",
      workTitle:
        "Айдентика, визуальные платформы и AI-производство для брендов со сложной структурой.",
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
      ctaKicker: "Открыт к выборочным коллаборациям",
      ctaTitle: "Давайте создадим визуальную систему, которая действительно работает.",
      ctaText:
        "Брендинг, арт-дирекшн, презентации и AI-driven production для корпоративных продуктов, агентств и культурных проектов.",
      ctaButton: "Обсудить проект"
    },
    work: {
      heroKicker: "Работы",
      heroTitle: "Проекты в области айдентики, визуальных систем и AI-assisted design direction.",
      heroLead:
        "Подборка кейсов для корпоративных брендов, культурных инициатив, digital-продуктов и агентских задач."
    },
    about: {
      portraitLabel: "Портрет Ильи Зубкова",
      heroKicker: "Обо мне",
      heroTitle:
        "Я работаю на пересечении бренд-систем, визуального направления и AI-powered production.",
      heroLead:
        "Илья Зубков — senior brand designer и art director, сфокусированный на identity systems, logo design, visual language, presentations и AI-assisted creative workflows.",
      heroText:
        "Мне интересны проекты, где бренд должен быть не просто выразительным, а структурным: выдерживать масштаб, разные команды, корпоративный контекст и реальные production-ограничения.",
      selectedKicker: "Избранные коллаборации",
      selected1: "Gazprom Neft",
      selected2: "Корпоративные product teams",
      selected3: "Агентские партнерства",
      selected4: "Культурные инициативы",
      focusAreasKicker: "Основные направления",
      focusArea1: "Бренд-системы",
      focusArea2: "Визуальные системы",
      focusArea3: "Presentation design",
      focusArea4: "AI-assisted workflows",
      practiceKicker: "Практика и инструменты",
      practiceNote: "identity, rollout and AI production",
      practice1: "Арт-дирекшн",
      practice2: "Логосистемы",
      practice3: "Типографика",
      practice4: "AI image generation",
      practice5: "Prompt engineering",
      practice6: "3D / motion direction",
      practice7: "Бренд-гайдлайны",
      capabilitiesKicker: "Компетенции",
      capability1: "Бренд-идентика",
      capability2: "Арт-дирекшн",
      capability3: "Логосистемы",
      capability4: "Типографика",
      capability5: "Визуальные системы",
      capability6: "Презентации",
      capability7: "AI image generation",
      capability8: "Prompt engineering",
      capability9: "3D / motion direction",
      capability10: "Бренд-гайдлайны",
      collaborationsKicker: "Коллаборации",
      collaboration1: "Gazprom Neft",
      collaboration2: "Агентские команды",
      collaboration3: "Корпоративные продукты",
      collaboration4: "Культурные проекты",
      collaboration5: "Коммерческие запуски",
      focusKicker: "Фокус",
      focusText:
        "Brand systems, visual direction, presentations, AI image pipelines and workflows for teams, которым важны структура, качество и скорость без потери авторского контроля.",
      ctaKicker: "Сотрудничество",
      ctaTitle: "Стратегия, айдентика и визуальные решения для сложных брендов и продуктовых команд.",
      ctaButton: "Связаться"
    },
    contact: {
      heroKicker: "Контакт",
      heroTitle: "Для айдентики, визуальных систем, презентаций и AI-assisted design workflows.",
      heroLead:
        "Открыт к выборочным freelance-проектам, системному арт-дирекшну и долгим коллаборациям с агентствами и продуктовыми командами.",
      emailKicker: "Написать",
      emailText:
        "Коротко опишите задачу, сроки и контекст. Особенно интересны brand systems, corporate design, presentation design и AI pipeline setup.",
      servicesKicker: "Также могу помочь с",
      service1: "Агентские коллаборации",
      service2: "Корпоративный brand refresh",
      service3: "Системы презентаций",
      service4: "AI image workflow design",
      service5: "Визуальное направление для запусков",
      socialKicker: "Также здесь"
    },
    project: {
      caseStudy: "Кейс",
      explore: "Смотреть",
      replaceCardImage: "Замените на изображение проекта",
      replaceHero: "Замените на обложку проекта или видео",
      client: "Клиент",
      year: "Год",
      role: "Роль",
      scope: "Scope",
      visualStory: "Визуальная лента",
      detailStrip: "Детали системы",
      darkSection: "Контрастные носители",
      descriptionKicker: "Коротко о проекте",
      textImageKicker: "Тезис",
      ctaTitle: "Интересно поработать вместе? Свяжитесь.",
      ctaLink: "Написать",
      nextProject: "Следующий проект",
      sectionLabels: {
        context: "Контекст",
        challenge: "Задача",
        visualSystem: "Визуальная система",
        aiWorkflow: "AI workflow / process",
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
      footerRole: "Brand Designer / Art Director / AI Workflow Design",
      footerFeatureKicker: "Open for conversation",
      footerFeatureText: "Let's talk about what a brand could do next.",
      footerFeatureTop: "Back to top"
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
        "I work at the intersection of brand systems, visual direction and AI-powered production.",
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
      replaceCardImage: "Replace with project image",
      replaceHero: "Replace with hero image or video",
      client: "Client",
      year: "Year",
      role: "Role",
      scope: "Scope",
      visualStory: "Visual story",
      detailStrip: "System details",
      darkSection: "Contrast section",
      descriptionKicker: "Project summary",
      textImageKicker: "Thesis",
      ctaTitle: "Interested in working together? Get in touch.",
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
    const isOpen = toggle.getAttribute("aria-expanded") !== "true";
    setMenuState(isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setMenuState(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
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

      currentLanguage = nextLanguage;
      localStorage.setItem(languageStorageKey, currentLanguage);
      renderPage();
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

function createProjectCard(project) {
  const cardMedia = project.cover
    ? `<img class="project-card__image" src="${project.cover}" alt="" loading="lazy" />`
    : "";

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
    ? `<img class="selected-project__cover-image" src="${project.cover}" alt="" loading="lazy" />`
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

function renderSelectedWork() {
  const selectedGrid = document.getElementById("selected-work-grid");

  if (!selectedGrid) {
    return;
  }

  const featuredProjects = projectStore.filter((project) => project.featured).slice(0, 7);
  selectedGrid.className = "selected-projects";
  selectedGrid.innerHTML = featuredProjects.map(createSelectedProjectRow).join("");
}

function renderWorkGrid() {
  const workGrid = document.getElementById("work-grid");

  if (!workGrid) {
    return;
  }

  workGrid.innerHTML = projectStore.map(createProjectCard).join("");
}

function getProjectFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || projectStore[0]?.slug;
  return projectStore.find((project) => project.slug === slug) || projectStore[0];
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
    <figure class="story-image ${className}">
      <img src="${media.src}" alt="${localize(media.alt)}" loading="lazy" />
    </figure>
  `;
}

function buildImageProjectStory(project, presentation) {
  const media = project.media;
  const detailItems = [
    localize(project.category),
    presentation.client,
    project.year,
    presentation.scope
  ];

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

      <div class="container">
        <section class="detail-strip">
          <p class="section-kicker">${getText("project.detailStrip")}</p>
          <div class="detail-strip__grid">
            ${detailItems
              .map(
                (item, index) => `
                  <div class="detail-chip">
                    <span class="detail-chip__index">0${index + 1}</span>
                    <span class="detail-chip__text">${item}</span>
                  </div>
                `
              )
              .join("")}
          </div>
        </section>
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
  const detailItems = [
    localize(project.category),
    presentation.client,
    project.year,
    presentation.scope
  ];

  return `
    <section class="project-story">
      <div class="container">
        <div class="story-block story-block--full">
          ${renderStoryMedia(project, gallery[0] || getText("project.visualStory"), "story-media--hero")}
        </div>
      </div>

      <div class="container">
        <div class="story-grid story-grid--two">
          ${renderStoryMedia(project, gallery[1] || gallery[0] || project.title)}
          ${renderStoryMedia(project, gallery[2] || localize(project.summary))}
        </div>
      </div>

      <div class="container">
        <div class="story-grid story-grid--asymmetric">
          ${renderStoryMedia(project, gallery[3] || labels.visualSystem, "story-media--large")}
          <div class="story-grid__stack">
            ${renderStoryMedia(project, labels.visualSystem, "story-media--compact")}
            ${renderStoryMedia(project, labels.aiWorkflow, "story-media--compact")}
          </div>
        </div>
      </div>

      <div class="container">
        <section class="detail-strip">
          <p class="section-kicker">${getText("project.detailStrip")}</p>
          <div class="detail-strip__grid">
            ${detailItems
              .map(
                (item, index) => `
                  <div class="detail-chip" style="--detail-index:'0${index + 1}'">
                    <span class="detail-chip__index">0${index + 1}</span>
                    <span class="detail-chip__text">${item}</span>
                  </div>
                `
              )
              .join("")}
          </div>
        </section>
      </div>

      <section class="story-dark">
        <div class="container">
          <p class="section-kicker">${getText("project.darkSection")}</p>
          <div class="story-dark__grid">
            ${renderStoryMedia(project, labels.challenge, "story-media--dark")}
            ${renderStoryMedia(project, labels.applications, "story-media--dark")}
            ${renderStoryMedia(project, labels.result, "story-media--dark")}
          </div>
        </div>
      </section>

      <div class="container">
        <section class="story-text-image">
          <div class="story-text-image__copy">
            <p class="section-kicker">${getText("project.textImageKicker")}</p>
            <p>${localize(project.summary)}</p>
          </div>
          <div class="story-text-image__media">
            ${renderStoryMedia(project, gallery[1] || localize(project.summary), "story-media--inline")}
          </div>
        </section>
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
  const nextProject = projectStore[(currentIndex + 1) % projectStore.length];
  const presentation = getProjectPresentation(project);
  const heroImage = project.cover
    ? `<img class="project-cover__image" src="${project.cover}" alt="${project.title}: ${presentation.subtitle}" />`
    : "";

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
          ${heroImage}
          ${
            project.cover
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
      <div class="container next-project next-project--editorial">
        <p class="section-kicker">${getText("project.nextProject")}</p>
        <a class="next-project__link" href="project.html?slug=${nextProject.slug}">
          <span class="next-project__title">${nextProject.title}</span>
          <span class="next-project__eyebrow">${localize(nextProject.category)}</span>
        </a>
      </div>
    </section>
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
