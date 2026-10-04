const projectStore = window.PROJECTS || [];
const projectGroups = {
  gfpa: ["identity", "presentation", "art"],
  saydo: ["identity", "packaging", "art", "ai"],
  axonic: ["identity", "art"],
  assoro: ["identity", "art"],
  "koto-myoto": ["identity", "packaging", "art"],
  ecotek: ["identity", "art"],
  "iron-bolt": ["identity", "art"],
  bulat: ["identity", "art"],
  "wow-lan": ["identity", "art"]
};

const currentLanguage = "ru";
let currentFilter = "all";

const copy = {
  ru: {
    navAbout: "Обо мне", navWork: "Проекты", navServices: "Услуги", navProcess: "Процесс",
    navContact: "Обсудить проект", menu: "Меню", close: "Закрыть", viewCase: "Смотреть кейс",
    allWork: "Все проекты", project: "Проект", role: "Роль", year: "Год", next: "Следующий проект",
    context: "Контекст", challenge: "Задача", system: "Визуальная система",
    ai: "AI в процессе", applications: "Применение", result: "Результат",
    gallery: "Визуальная история", backWork: "Ко всем проектам", noMedia: "Кейс в разработке",
    footerLine: "Айдентика, арт-дирекшн и визуальные системы с ясной логикой.",
    footerNote: "Открыт к выборочным проектам и коллаборациям.",
    footerTop: "Наверх", footerContact: "Написать мне", filterCount: "проектов",
    aboutHeadline: "Я собираю сильные визуальные системы для брендов с характером.",
    aboutIntro: "Я — Илья Зубков, Senior Brand Designer / Art Director.\nРаботаю с айдентикой, типографикой, визуальными системами и AI-продакшеном.",
    aboutMethod: "Мой подход", aboutMethodText: "Сначала — контекст и идея. Затем — точная композиция, проверка на носителях и система, которая выдерживает рост.",
    aboutFocus: "Фокус", aboutFocusText: "Айдентика · Логосистемы · Арт-дирекшн · Визуальные системы · Презентации",
    aboutMore: "Подробнее обо мне", aboutStudio: "Обо мне", aboutStory2: "Создаю айдентику и дизайн-системы, которые остаются цельными от ключевой идеи до десятков носителей. Мне важны контекст, сильная визуальная логика и способность системы развиваться вместе с брендом.",
    aboutStory3: "AI — часть моего рабочего процесса. Использую его для исследования, поиска визуальных направлений, генерации и быстрых тестов, а финальные решения отбираю и дорабатываю вручную.",
    aboutSignature: "Илья Зубков / MAYBE PROJECT", aboutSince: "Независимая практика", aboutBased: "От идеи к форме", aboutDisciplines: "Направления", aboutExperience: "Опыт сотрудничества", aboutPrinciples: "Принципы",
    aboutDisciplineItems: ["Айдентика", "Логотипы и знаки", "Типографика", "Арт-дирекшн", "AI-продакшен"],
    aboutExperienceItems: ["Корпоративные продукты", "Бренд-студии и агентства", "In-house команды", "Независимые бренды", "Культурные и образовательные проекты"],
    aboutPrincipleItems: [["Taste /\nФорма следует за идеей", "Сначала разбираюсь в задаче, аудитории и характере бренда. Визуальный язык появляется из идеи, а не наоборот."], ["Curiosity /\nИсследование — часть работы", "Смотрю шире привычных референсов и инструментов. AI использую как способ быстрее исследовать, проверять и производить — но не как источник готового решения."], ["Ambition /\nИсследование — часть работы", "Мне интереснее не отдельный макет, а визуальное направление проекта: как идея становится системой и сохраняется на десятках точек контакта"], ["Independence /\nИсследование — часть работы", "Не собираю дизайн из знакомых приемов только потому, что они работают. Ищу язык, который имеет смысл именно для этой задачи."], ["Craft /\nИдея должна выдерживать реализацию", "Типографика, композиция, изображение, движение и производство доводятся до момента, когда система работает не только в презентации."]]
  },
  en: {
    navAbout: "About", navWork: "Projects", navServices: "Services", navProcess: "Process",
    navContact: "Start a project", menu: "Menu", close: "Close", viewCase: "View case",
    allWork: "All projects", project: "Project", role: "Role", year: "Year", next: "Next project",
    context: "Context", challenge: "Challenge", system: "Visual system",
    ai: "AI in the process", applications: "Applications", result: "Result",
    gallery: "Visual story", backWork: "All projects", noMedia: "Case in progress",
    footerLine: "Brand identities, art direction and visual systems with clear logic.",
    footerNote: "Open to selected projects and collaborations.",
    footerTop: "Back to top", footerContact: "Email me", filterCount: "projects",
    aboutHeadline: "I build distinct visual systems for brands with character.",
    aboutIntro: "I'm Ilya Zubkov, Senior Brand Designer / Art Director.\nI work with identity, typography, visual systems and AI production.",
    aboutMethod: "My approach", aboutMethodText: "Context and concept first. Then precise composition, application testing and a system designed to grow.",
    aboutFocus: "Focus", aboutFocusText: "Identity · Logo systems · Art direction · Visual systems · Presentations",
    aboutMore: "More about me", aboutStudio: "About me", aboutStory2: "I create identities and design systems that stay coherent from the core idea across dozens of applications. Context, strong visual logic and a system that can grow with the brand matter to me.",
    aboutStory3: "AI is part of my process. I use it for research, exploring visual directions, generation and rapid testing, while I select and refine the final solutions by hand.",
    aboutSignature: "Ilya Zubkov / MAYBE PROJECT", aboutSince: "Independent practice", aboutBased: "From idea to form", aboutDisciplines: "Disciplines", aboutExperience: "Collaboration experience", aboutPrinciples: "Principles",
    aboutDisciplineItems: ["Identity", "Logos and symbols", "Typography", "Art direction", "AI production"],
    aboutExperienceItems: ["Corporate products", "Brand studios and agencies", "In-house teams", "Independent brands", "Cultural and educational projects"],
    aboutPrincipleItems: [["Taste /\nForm follows the idea", "I start with the task, audience and brand character. The visual language grows from the idea, not the other way around."], ["Curiosity /\nResearch is part of the work", "I look beyond familiar references and tools. I use AI to research, test and produce faster, but never as a source of ready-made answers."], ["Ambition /\nResearch is part of the work", "I care more about the visual direction than a single layout: how an idea becomes a system and stays consistent across many touchpoints."], ["Independence /\nResearch is part of the work", "I do not assemble designs from familiar tricks just because they work. I look for a language that makes sense for this specific task."], ["Craft /\nThe idea must survive execution", "Typography, composition, imagery, motion and production are refined until the system works beyond the presentation."]]
  }
};

function phrase(key) { return copy[currentLanguage][key]; }
function localize(value) { return typeof value === "object" && value !== null ? (value[currentLanguage] || value.ru || "") : (value || ""); }
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function bindTextWords(text) {
  if (currentLanguage !== "ru") return text;
  // Repeat for adjacent short words, so combinations like "и на сайте" stay together.
  let previous;
  do {
    previous = text;
    text = text.replace(/(^|[^\p{L}\p{N}_])(из-за|из-под|в|во|на|к|ко|с|со|у|о|об|обо|от|до|из|за|по|без|для|при|про|под|над|перед|через|между|около|и|а|но|или|это|который|которая|которое|которые|которых|которым|которой|которую|которыми)[ \t]+(?=[\p{L}\p{N}])/giu, "$1$2\u00a0");
  } while (text !== previous);
  return text;
}

function applyTypography(root = document.body) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!node.parentElement || node.parentElement.closest("script, style, code, pre, svg, [data-typography-skip]")) continue;
    node.nodeValue = bindTextWords(node.nodeValue);
  }
}

function arrowIcon(direction = "up-right") {
  return `<span class="ui-arrow ui-arrow--${direction}" aria-hidden="true"></span>`;
}

function setMobileMenu(open, restoreFocus = false) {
  const menu = document.getElementById("mobile-menu");
  const toggle = document.querySelector(".menu-toggle");
  if (!menu || !toggle) return;
  menu.hidden = !open;
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = phrase(open ? "close" : "menu");
  document.body.classList.toggle("menu-open", open);
  document.querySelectorAll("main, .site-footer").forEach((element) => { element.inert = open; });
  if (open) menu.scrollTop = 0;
  if (!open && restoreFocus) toggle.focus({ preventScroll: true });
}

function renderShell() {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  if (header) {
    header.innerHTML = `
      <div class="header-inner">
        <a class="brand-link" href="index.html" aria-label="Maybe — Ilya Zubkov"><img src="assets/maybe-logo.svg" alt="Maybe" /></a>
        <nav class="desktop-nav" aria-label="Primary navigation">
          <button type="button" data-open-about>${phrase("navAbout")}</button>
          <a href="index.html#services">${phrase("navServices")}</a><a href="index.html#process">${phrase("navProcess")}</a>
          <a href="work.html">${phrase("navWork")}</a>
        </nav>
        <div class="header-actions"><a class="header-cta" href="contact.html">${phrase("navContact")} ${arrowIcon()}</a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu">${phrase("menu")}</button></div>
      </div>
      <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation" hidden>
        <div class="mobile-menu-primary">
        <button type="button" data-open-about>${phrase("navAbout")} ${arrowIcon()}</button>
        <a href="index.html#services">${phrase("navServices")} ${arrowIcon()}</a><a href="index.html#process">${phrase("navProcess")} ${arrowIcon()}</a>
        <a href="work.html">${phrase("navWork")} ${arrowIcon()}</a>
        <a href="contact.html">${phrase("navContact")} ${arrowIcon()}</a>
        </div>
        <div class="mobile-menu-socials" aria-label="Социальные сети">
          <a href="https://t.me/maybe_project" target="_blank" rel="noreferrer">Telegram ${arrowIcon()}</a>
          <a href="https://www.behance.net/maybe_project" target="_blank" rel="noreferrer">Behance ${arrowIcon()}</a>
          <a href="https://www.instagram.com/maybe__project/" target="_blank" rel="noreferrer">Instagram ${arrowIcon()}</a>
        </div>
      </nav>`;
  }
  if (footer) {
    footer.innerHTML = `
      <div class="footer-top wrap"><p class="eyebrow">MAYBE / ILYA ZUBKOV</p><a href="contact.html">${phrase("footerContact")} ${arrowIcon()}</a></div>
      <div class="footer-main wrap"><p>${phrase("footerLine")}</p><a class="footer-mail" href="mailto:maybe.dezign@gmail.com">maybe.dezign@gmail.com</a></div>
      <div class="footer-bottom wrap"><span>© ${new Date().getFullYear()} Ilya Zubkov</span><span>${phrase("footerNote")}</span>
        <div><a href="https://www.behance.net/maybe_project" target="_blank" rel="noreferrer">Behance ${arrowIcon()}</a>
        <a href="https://dprofile.ru/maybeproject" target="_blank" rel="noreferrer">Dprofile ${arrowIcon()}</a>
        <a href="https://t.me/maybe_project" target="_blank" rel="noreferrer">Telegram ${arrowIcon()}</a>
        <a href="https://www.instagram.com/maybe__project/" target="_blank" rel="noreferrer">Instagram ${arrowIcon()}</a>
        <a href="#top">${phrase("footerTop")} ${arrowIcon("up")}</a></div></div>`;
  }
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("mobile-menu");
  toggle?.addEventListener("click", () => {
    setMobileMenu(toggle.getAttribute("aria-expanded") !== "true");
  });
  menu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMobileMenu(false, true)));
  header?.querySelectorAll(".brand-link, .header-cta").forEach((link) => link.addEventListener("click", () => setMobileMenu(false)));
  let aboutDialog = document.getElementById("about-dialog");
  if (!aboutDialog) {
    aboutDialog = document.createElement("dialog");
    aboutDialog.id = "about-dialog";
    aboutDialog.className = "about-dialog";
    aboutDialog.addEventListener("close", () => {
      document.body.classList.remove("about-open");
      aboutDialog.classList.remove("is-closing");
    });
    aboutDialog.addEventListener("cancel", (event) => { event.preventDefault(); closeAboutDialog(aboutDialog); });
    aboutDialog.addEventListener("pointerdown", (event) => {
      if (event.target === aboutDialog && event.clientX < aboutDialog.getBoundingClientRect().left) closeAboutDialog(aboutDialog);
    });
    document.body.appendChild(aboutDialog);
  }
  const listItems = (items) => items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  aboutDialog.innerHTML = `<div class="about-dialog-inner">
    <button type="button" class="about-dialog-close">${phrase("close")} <kbd>esc.</kbd></button>
    <div class="about-dialog-heading"><span class="about-dot" aria-hidden="true"></span><span id="about-dialog-title">${phrase("aboutStudio")}</span></div>
    <div class="about-dialog-intro"><p>${escapeHtml(phrase("aboutIntro"))}</p><p>${escapeHtml(phrase("aboutStory2"))}</p><p>${escapeHtml(phrase("aboutStory3"))}</p></div>
    <div class="about-dialog-meta"><span>${escapeHtml(phrase("aboutSignature"))}</span><span>${escapeHtml(phrase("aboutSince"))}</span><span>${escapeHtml(phrase("aboutBased"))}</span></div>
    <figure class="about-dialog-photo"><img src="assets/about-photo.png" alt="${currentLanguage === "ru" ? "Портрет Ильи Зубкова" : "Portrait of Ilya Zubkov"}" /></figure>
    <section class="about-dialog-row" aria-labelledby="about-disciplines"><h2 id="about-disciplines"><span class="about-dot" aria-hidden="true"></span>${phrase("aboutDisciplines")}</h2><ul>${listItems(copy[currentLanguage].aboutDisciplineItems)}</ul></section>
    <section class="about-dialog-row about-dialog-experience" aria-labelledby="about-experience"><h2 id="about-experience"><span class="about-dot" aria-hidden="true"></span>${phrase("aboutExperience")}</h2><ul>${listItems(copy[currentLanguage].aboutExperienceItems)}</ul></section>
    <section class="about-dialog-row about-dialog-principles" aria-labelledby="about-principles"><h2 id="about-principles"><span class="about-dot" aria-hidden="true"></span>${phrase("aboutPrinciples")}</h2><div>${copy[currentLanguage].aboutPrincipleItems.map(([title, body]) => `<article><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join("")}</div></section>
    <a class="about-dialog-contact" href="contact.html">${phrase("navContact")} ${arrowIcon()}</a>
  </div>`;
  aboutDialog.setAttribute("aria-labelledby", "about-dialog-title");
  aboutDialog.querySelector(".about-dialog-close")?.addEventListener("click", () => closeAboutDialog(aboutDialog));
  document.querySelectorAll("[data-open-about]").forEach((button) => button.addEventListener("click", () => {
    setMobileMenu(false);
    aboutDialog.showModal();
    aboutDialog.scrollTop = 0;
    document.body.classList.add("about-open");
    setupAboutMotion(aboutDialog);
  }));
}

let headerContrastStarted = false;
let headerContrastFrame = 0;
let headerSurfaces = [];

function queueHeaderContrast() {
  if (headerContrastFrame) return;
  headerContrastFrame = requestAnimationFrame(() => {
    headerContrastFrame = 0;
    updateHeaderContrast();
  });
}

function updateHeaderContrast() {
  const header = document.getElementById("site-header");
  if (!header) return;
  const sampleY = header.getBoundingClientRect().height / 2;
  const surface = headerSurfaces.find((element) => {
    const box = element.getBoundingClientRect();
    return box.top <= sampleY && box.bottom > sampleY;
  }) || document.body;
  // Use the section's surface rather than individual images or letters.
  let background = surface;
  let channels;
  while (background) {
    channels = getComputedStyle(background).backgroundColor.match(/[\d.]+/g)?.map(Number);
    if (channels && (channels.length === 3 || channels[3] > 0)) break;
    background = background.parentElement;
  }
  const dark = channels && (.2126 * channels[0] + .7152 * channels[1] + .0722 * channels[2] < 150);
  header.classList.toggle("header--light", Boolean(dark));
}

function setupHeaderContrast() {
  headerSurfaces = [...document.querySelectorAll("main > *, .site-footer")];
  queueHeaderContrast();
  if (headerContrastStarted) return;
  headerContrastStarted = true;
  window.addEventListener("scroll", queueHeaderContrast, { passive: true });
  window.addEventListener("resize", queueHeaderContrast, { passive: true });
  window.addEventListener("pageshow", queueHeaderContrast);
  window.addEventListener("load", queueHeaderContrast);
  const main = document.querySelector("main");
  if (main) new ResizeObserver(queueHeaderContrast).observe(main);
}

function closeAboutDialog(dialog) {
  if (!dialog.open || dialog.classList.contains("is-closing")) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { dialog.close(); return; }
  dialog.classList.add("is-closing");
  window.setTimeout(() => { if (dialog.open) dialog.close(); }, 300);
}

const heroSlideDuration = 7000;
let heroSlideIndex = 0;
let heroSlideshowPaused = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let destroyHeroSlideshow;

function renderHeroSlideshow() {
  const target = document.getElementById("hero-slideshow");
  if (!target) return;
  destroyHeroSlideshow?.();
  const selected = ["saydo", "koto-myoto", "gfpa", "axonic", "assoro"]
    .map((slug) => projectStore.find((project) => project.slug === slug)).filter(Boolean);
  if (!selected.length) return;
  heroSlideIndex %= selected.length;
  target.setAttribute("aria-label", currentLanguage === "ru" ? "Избранные проекты" : "Selected projects");
  target.innerHTML = `<div class="hero-slides">${selected.map((project, index) => `
    <div class="hero-slide ${index === heroSlideIndex ? "is-active" : ""}" role="group" aria-roledescription="slide" aria-label="${index + 1} / ${selected.length}: ${escapeHtml(project.title)}" aria-hidden="${index !== heroSlideIndex}">
      <a href="project.html?slug=${encodeURIComponent(project.slug)}" tabindex="${index === heroSlideIndex ? "0" : "-1"}" style="--project-accent:${escapeHtml(project.accent)}" aria-label="${escapeHtml(project.title)} — ${phrase("viewCase")}">
        ${project.cover ? `<img src="${escapeHtml(project.cover)}" alt="${escapeHtml(project.title)}" ${index === 0 ? 'fetchpriority="high"' : 'decoding="async"'} />` : `<strong>${escapeHtml(project.title)}</strong>`}
      </a>
    </div>`).join("")}</div>
    <div class="hero-slide-progress" role="progressbar" aria-label="${currentLanguage === "ru" ? "Время до следующего проекта" : "Time until the next project"}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><div class="hero-slide-progress-fill"></div></div>
    <div class="hero-slide-controls"><a class="hero-slide-caption" href="project.html?slug=${encodeURIComponent(selected[heroSlideIndex].slug)}"><span>${escapeHtml(selected[heroSlideIndex].title)}</span>${arrowIcon()}</a>
      <div class="hero-slide-pagination">${selected.map((project, index) => `<button type="button" data-hero-slide="${index}" aria-label="${escapeHtml(project.title)}" aria-pressed="${index === heroSlideIndex}">${String(index + 1).padStart(2, "0")}</button>`).join("")}
      <button class="hero-slide-pause" type="button"></button></div>
    </div>`;
  const slides = [...target.querySelectorAll(".hero-slide")];
  const buttons = [...target.querySelectorAll("[data-hero-slide]")];
  const caption = target.querySelector(".hero-slide-caption");
  const pause = target.querySelector(".hero-slide-pause");
  const progress = target.querySelector(".hero-slide-progress");
  const progressFill = target.querySelector(".hero-slide-progress-fill");
  let frame = 0;
  let elapsed = 0;
  let lastTime = null;
  let transitionAnimation;
  let previousSlide;
  let inView = false;
  let focused = false;
  const updateProgress = () => {
    const amount = Math.min(1, elapsed / heroSlideDuration);
    progressFill.style.transform = `scaleX(${amount})`;
    const percentage = String(Math.round(amount * 100));
    if (progress.getAttribute("aria-valuenow") !== percentage) progress.setAttribute("aria-valuenow", percentage);
  };
  const stop = () => { cancelAnimationFrame(frame); frame = 0; lastTime = null; };
  const tick = (now) => {
    frame = 0;
    if (lastTime !== null) elapsed += now - lastTime;
    lastTime = now;
    updateProgress();
    if (elapsed >= heroSlideDuration) { show((heroSlideIndex + 1) % slides.length); return; }
    frame = requestAnimationFrame(tick);
  };
  const schedule = () => {
    stop();
    if (!heroSlideshowPaused && inView && !focused && !document.hidden && !transitionAnimation) {
      frame = requestAnimationFrame(tick);
    }
  };
  const show = (index) => {
    if (index === heroSlideIndex) return;
    stop();
    if (transitionAnimation) { transitionAnimation.onfinish = null; transitionAnimation.cancel(); transitionAnimation = null; }
    previousSlide?.classList.remove("is-previous");
    previousSlide = slides[heroSlideIndex];
    heroSlideIndex = index;
    elapsed = 0;
    updateProgress();
    slides.forEach((slide, position) => {
      const active = position === index;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
      slide.querySelector("a").tabIndex = active ? 0 : -1;
      buttons[position].setAttribute("aria-pressed", String(active));
    });
    previousSlide.classList.add("is-previous");
    caption.href = `project.html?slug=${encodeURIComponent(selected[index].slug)}`;
    caption.querySelector("span").textContent = selected[index].title;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      transitionAnimation = slides[index].animate(
        [{ transform: "translateY(100%)" }, { transform: "translateY(0)" }],
        { duration: 800, easing: "cubic-bezier(.22,1,.36,1)" }
      );
      transitionAnimation.onfinish = () => {
        previousSlide.classList.remove("is-previous");
        previousSlide = null;
        transitionAnimation = null;
        schedule();
      };
    } else {
      previousSlide.classList.remove("is-previous");
      previousSlide = null;
    }
    schedule();
  };
  const updatePause = () => {
    pause.textContent = heroSlideshowPaused ? "▶" : "Ⅱ";
    pause.setAttribute("aria-label", currentLanguage === "ru" ? (heroSlideshowPaused ? "Продолжить слайдшоу" : "Приостановить слайдшоу") : (heroSlideshowPaused ? "Play slideshow" : "Pause slideshow"));
    pause.setAttribute("aria-pressed", String(heroSlideshowPaused));
  };
  buttons.forEach((button) => button.addEventListener("click", () => show(Number(button.dataset.heroSlide))));
  pause.addEventListener("click", () => { heroSlideshowPaused = !heroSlideshowPaused; updatePause(); schedule(); });
  const focus = () => { focused = true; stop(); };
  const blur = (event) => { focused = target.contains(event.relatedTarget); schedule(); };
  target.addEventListener("focusin", focus);
  target.addEventListener("focusout", blur);
  document.addEventListener("visibilitychange", schedule);
  const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; schedule(); }, { threshold: .15 });
  observer.observe(target);
  destroyHeroSlideshow = () => {
    stop(); observer.disconnect();
    if (transitionAnimation) { transitionAnimation.onfinish = null; transitionAnimation.cancel(); }
    target.removeEventListener("focusin", focus);
    target.removeEventListener("focusout", blur);
    document.removeEventListener("visibilitychange", schedule);
  };
  updatePause();
}

let approachStatIndex = 0;
let destroyApproachStats;

function renderApproachStats() {
  destroyApproachStats?.();
  const target = document.getElementById("approach-stats");
  if (!target) return;
  const stats = [
    { number: projectStore.length, ru: "Проектов в портфолио", en: "Projects in the portfolio" },
    { number: document.querySelectorAll(".service-item").length, ru: "Направлений дизайна", en: "Design disciplines" }
  ];
  const duration = 7000;
  const content = target.querySelector(".approach-stat-content");
  const progress = target.querySelector(".approach-stat-progress span");
  let elapsed = 0, frame = 0, last = 0, inView = false, focused = false, hovered = false;
  let contentAnimation;
  const update = (animate = false, manual = false) => {
    const stat = stats[approachStatIndex];
    content.setAttribute("aria-live", manual ? "polite" : "off");
    target.querySelector(".approach-stat-number").textContent = String(stat.number).padStart(2, "0");
    target.querySelector(".approach-stat-label").textContent = bindTextWords(stat[currentLanguage]);
    target.querySelector(".approach-stat-count").textContent = `${String(approachStatIndex + 1).padStart(2, "0")}/${String(stats.length).padStart(2, "0")}`;
    contentAnimation?.cancel();
    if (animate && motionEnabled()) contentAnimation = content.animate([{ opacity: 0, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 280, easing: "ease-out" });
  };
  const paint = () => { progress.style.transform = `scaleX(${elapsed / duration})`; };
  const stop = () => { cancelAnimationFrame(frame); frame = 0; last = 0; };
  const tick = (now) => {
    elapsed += now - last;
    last = now;
    if (elapsed >= duration) {
      elapsed %= duration;
      approachStatIndex = (approachStatIndex + 1) % stats.length;
      update(true);
    }
    paint();
    frame = requestAnimationFrame(tick);
  };
  const schedule = () => {
    if (!inView || document.hidden || focused || hovered) { stop(); return; }
    if (!frame) { last = performance.now(); frame = requestAnimationFrame(tick); }
  };
  target.querySelectorAll("[data-stat-step]").forEach((button) => {
    button.setAttribute("aria-label", currentLanguage === "ru" ? (button.dataset.statStep === "1" ? "Следующий факт" : "Предыдущий факт") : (button.dataset.statStep === "1" ? "Next fact" : "Previous fact"));
    button.onclick = () => {
      stop();
      elapsed = 0;
      approachStatIndex = (approachStatIndex + Number(button.dataset.statStep) + stats.length) % stats.length;
      update(true, true); paint(); schedule();
    };
  });
  const enter = () => { hovered = true; schedule(); };
  const leave = () => { hovered = false; schedule(); };
  const focus = () => { focused = true; schedule(); };
  const blur = (event) => { focused = target.contains(event.relatedTarget); schedule(); };
  target.addEventListener("pointerenter", enter);
  target.addEventListener("pointerleave", leave);
  target.addEventListener("focusin", focus);
  target.addEventListener("focusout", blur);
  document.addEventListener("visibilitychange", schedule);
  window.addEventListener("pagehide", stop);
  window.addEventListener("pageshow", schedule);
  const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; schedule(); }, { threshold: .2 });
  observer.observe(target);
  destroyApproachStats = () => {
    stop(); observer.disconnect(); contentAnimation?.cancel();
    target.removeEventListener("pointerenter", enter);
    target.removeEventListener("pointerleave", leave);
    target.removeEventListener("focusin", focus);
    target.removeEventListener("focusout", blur);
    document.removeEventListener("visibilitychange", schedule);
    window.removeEventListener("pagehide", stop);
    window.removeEventListener("pageshow", schedule);
  };
  update(); paint();
}

function renderWork() {
  const target = document.getElementById("work-grid");
  if (!target) return;
  const matches = projectStore.filter((project) => currentFilter === "all" || projectGroups[project.slug]?.includes(currentFilter));
  target.innerHTML = matches.map((project, index) => `
    <a class="work-card" href="project.html?slug=${encodeURIComponent(project.slug)}">
      <div class="work-media ${project.cover ? "has-cover" : "is-type"}" style="--project-accent:${escapeHtml(project.accent)}">
        ${project.cover ? `<img src="${escapeHtml(project.cover)}" alt="${escapeHtml(project.title)}" loading="lazy" />` : `<strong>${escapeHtml(project.title)}</strong>`}
        <span class="work-number">${String(index + 1).padStart(2, "0")}</span>
      </div>
      <div class="work-card-info"><div><span class="eyebrow">${escapeHtml(localize(project.category))} / ${escapeHtml(project.year)}</span><h2>${escapeHtml(project.title)}</h2><p>${escapeHtml(localize(project.summary))}</p></div><span class="round-arrow">${arrowIcon()}</span></div>
    </a>`).join("");
  document.querySelectorAll("[data-filter]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.filter === currentFilter)));
}

function renderProject() {
  const target = document.getElementById("project-content");
  if (!target || !projectStore.length) return;
  const slug = new URLSearchParams(location.search).get("slug");
  const project = projectStore.find((item) => item.slug === slug || item.aliases?.includes(slug)) || projectStore[0];
  const next = projectStore[(projectStore.indexOf(project) + 1) % projectStore.length];
  const captureParams = new URLSearchParams(location.search);
  const figmaOffset = Number(captureParams.get("figma-offset") || 0);
  const caseMedia = captureParams.has("figma-summary") ? project.media?.slice(figmaOffset, figmaOffset + 3) : project.media;
  const sections = ["context", "challenge", "visualSystem", "aiWorkflow", "applications", "result"];
  const names = { context: "context", challenge: "challenge", visualSystem: "system", aiWorkflow: "ai", applications: "applications", result: "result" };
  document.title = `${project.title} — Ilya Zubkov`;
  const description = document.querySelector('meta[name="description"]');
  description?.setAttribute("content", localize(project.summary));
  target.innerHTML = `
    <section class="case-hero wrap">
      <aside class="case-aside"><a class="back-link" href="work.html">${arrowIcon("left")} ${phrase("backWork")}</a><p class="case-intro-text">${escapeHtml(localize(project.intro))}</p></aside>
      <div class="case-heading"><p class="hero-label">${phrase("project")} / ${escapeHtml(project.year)}</p><h1>${escapeHtml(project.title)}</h1>
      <p class="case-subtitle">${escapeHtml(localize(project.category))}</p>
      <dl class="case-meta"><div><dt>${phrase("role")}</dt><dd>${escapeHtml(localize(project.role))}</dd></div><div><dt>${phrase("year")}</dt><dd>${escapeHtml(project.year)}</dd></div></dl></div>
    </section>
    <div class="case-cover ${project.cover ? "has-cover" : "is-type"}" style="--project-accent:${escapeHtml(project.accent)}">
      ${project.cover ? `<img src="${escapeHtml(project.cover)}" alt="${escapeHtml(project.title)}" />` : `<strong>${escapeHtml(project.title)}</strong>`}
    </div>
    <section class="case-story wrap"><p class="eyebrow">${phrase("project")} / ${escapeHtml(project.title)}</p><div>
      ${sections.map((key, index) => `<article class="case-story-row"><span class="case-step">0${index + 1}</span><div><h2>${phrase(names[key])}</h2><p>${escapeHtml(localize(project.sections?.[key]))}</p></div></article>`).join("")}
    </div></section>
    ${caseMedia?.length ? `<section class="case-gallery wrap"><div class="section-title"><p class="eyebrow">${phrase("gallery")}</p><h2>${escapeHtml(project.title)}<span> / ${String(caseMedia.length).padStart(2, "0")}</span></h2></div><div class="gallery-grid">${caseMedia.map((media, index) => `<figure class="gallery-item ${index % 5 === 0 ? "gallery-item--wide" : ""}"><img src="${escapeHtml(media.src)}" alt="${escapeHtml(localize(media.alt))}" loading="lazy" /><figcaption>${String(index + 1).padStart(2, "0")} / ${escapeHtml(localize(media.alt))}</figcaption></figure>`).join("")}</div></section>` : ""}
    <a class="next-project" href="project.html?slug=${encodeURIComponent(next.slug)}"><span class="eyebrow">${phrase("next")}</span><strong>${escapeHtml(next.title)}</strong><span class="round-arrow">${arrowIcon()}</span></a>`;
}

let motionTargets = [];
let motionFrame = 0;
let motionStarted = false;
let lineObserver;
let dialogObserver;
let motionResizeTimer;

function motionEnabled() {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches && !new URLSearchParams(location.search).has("figma-capture");
}

function splitMotionLines(element) {
  const source = bindTextWords(element.hasAttribute("data-ru") ? element.dataset[currentLanguage] : (element.dataset.motionSource || element.textContent));
  if (!source.trim()) return;
  const wasVisible = element.classList.contains("is-visible");
  element.dataset.motionSource = source;
  element.setAttribute("aria-label", source.replace(/\s+/gu, " ").trim());
  element.replaceChildren();
  const lines = [];
  if (element.hasAttribute("data-motion-lines")) {
    lines.push(...source.split(/\n+/u).map((line) => line.trim()).filter(Boolean));
  } else {
    const measured = [];
    let space = "";
    (source.match(/(?:\S|\u00a0)+|[^\S\u00a0]+/gu) || []).forEach((part) => {
      if (/^[^\S\u00a0]+$/u.test(part)) { element.append(document.createTextNode(part)); space += part; return; }
      const word = document.createElement("span");
      word.textContent = part;
      word.style.whiteSpace = "nowrap";
      element.append(word);
      measured.push({ word, before: space, text: part });
      space = "";
    });
    let previousTop = null;
    measured.forEach(({ word, before, text }) => {
      const top = word.getBoundingClientRect().top;
      if (previousTop === null || Math.abs(top - previousTop) > 2) {
        lines.push(text);
        previousTop = top;
      } else {
        lines[lines.length - 1] += before + text;
      }
    });
  }
  element.replaceChildren();
  lines.forEach((line, index) => {
    const mask = document.createElement("span");
    mask.className = "motion-line-mask";
    mask.setAttribute("aria-hidden", "true");
    const inner = document.createElement("span");
    inner.className = "motion-line";
    inner.style.setProperty("--line-delay", `${index * 65}ms`);
    inner.textContent = line;
    mask.append(inner);
    element.append(mask);
  });
  element.classList.add("motion-lines");
  if (wasVisible) element.classList.add("is-visible");
}

function splitMotionLetters(element, segmenter) {
  if (element.children.length && !element.classList.contains("motion-fill")) return null;
  const source = bindTextWords(element.hasAttribute("data-ru") ? element.dataset[currentLanguage] : (element.dataset.motionSource || element.textContent));
  if (!source.trim()) return null;
  element.dataset.motionSource = source;
  element.setAttribute("aria-label", source.replace(/\s+/gu, " ").trim());
  element.replaceChildren();
  const letters = [];
  source.split(/([^\S\u00a0]+)/u).forEach((piece) => {
    if (!piece) return;
    if (/^[^\S\u00a0]+$/u.test(piece)) { element.append(document.createTextNode(piece)); return; }
    const word = document.createElement("span");
    word.className = "motion-word";
    word.setAttribute("aria-hidden", "true");
    const graphemes = segmenter ? Array.from(segmenter.segment(piece), (part) => part.segment) : Array.from(piece);
    graphemes.forEach((grapheme) => {
      const letter = document.createElement("span");
      letter.className = "motion-char";
      letter.textContent = grapheme;
      word.append(letter);
      letters.push(letter);
    });
    element.append(word);
  });
  element.classList.add("motion-fill");
  return { element, letters };
}

function queueMotionUpdate() {
  if (motionFrame) return;
  motionFrame = requestAnimationFrame(() => {
    motionFrame = 0;
    updateMotion();
  });
}

function updateMotion() {
  const height = window.innerHeight || 1;
  motionTargets.forEach(({ element, letters }) => {
    const box = element.getBoundingClientRect();
    if (box.top > height * 1.1 || box.bottom < -height * .2) return;
    // Fill every line together so the whole block is readable near the middle of the screen.
    const anchor = element.closest(".approach-copy") || element;
    const progress = Math.max(0, Math.min(1, (height - anchor.getBoundingClientRect().top) / (height * .5)));
    const lines = new Map();
    letters.forEach((letter) => {
      const top = Math.round(letter.getBoundingClientRect().top / 3) * 3;
      if (!lines.has(top)) lines.set(top, []);
      lines.get(top).push(letter);
    });
    lines.forEach((line) => {
      const filled = progress * (line.length + 4);
      line.forEach((letter, index) => {
        const amount = Math.max(0, Math.min(1, (filled - index) / 4));
        letter.style.opacity = String(.2 + .8 * amount);
      });
    });
  });
}

function setupAboutMotion(dialog) {
  if (!motionEnabled()) return;
  dialogObserver?.disconnect();
  dialog.classList.remove("motion-open");
  dialog.querySelectorAll(".about-dialog-intro p, .about-dialog-row li, .about-dialog-principles h3, .about-dialog-principles p").forEach((element) => {
    element.classList.remove("is-visible");
    splitMotionLines(element);
  });
  dialogObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      dialogObserver.unobserve(entry.target);
    });
  }, { root: dialog, rootMargin: "0px 0px -5% 0px", threshold: .01 });
  dialog.querySelectorAll(".about-dialog-row .motion-lines").forEach((element) => dialogObserver.observe(element));
  dialog.querySelectorAll(".about-dialog-intro p").forEach((element, index) => element.style.setProperty("--block-delay", `${index * 120}ms`));
  requestAnimationFrame(() => requestAnimationFrame(() => {
    dialog.classList.add("motion-open");
    dialog.querySelectorAll(".about-dialog-intro p").forEach((element) => element.classList.add("is-visible"));
  }));
}

function setupMotion() {
  if (!motionEnabled()) return;
  lineObserver?.disconnect();
  const segmenter = typeof Intl.Segmenter === "function" ? new Intl.Segmenter(document.documentElement.lang, { granularity: "grapheme" }) : null;
  motionTargets = [];
  const fillSelector = ".statement h2, .approach-body, .section-title h2, .about-slice h2, .process-display, .brief-heading h2, .big-cta h2, .about-page-copy h2";
  document.querySelectorAll(fillSelector).forEach((element) => {
    const target = splitMotionLetters(element, segmenter);
    if (target) motionTargets.push(target);
  });
  const revealSelector = "main h1, .hero-aside>p:not(.eyebrow), .page-lead, .feature-info h3, .feature-info p, .work-card-info h2, .work-card-info p, .about-slice-copy>p:not(.eyebrow), .service-list h3, .process-list h3, .process-list p, .about-page-copy>p:not(.eyebrow), .about-board-grid li, .case-intro-text, .case-story-row h2, .case-story-row p, .contact-aside>p:not(.eyebrow), .contact-details li";
  const reveals = [...document.querySelectorAll(revealSelector)];
  reveals.forEach(splitMotionLines);
  lineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      lineObserver.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -7% 0px", threshold: .01 });
  reveals.filter((element) => !element.classList.contains("is-visible")).forEach((element) => lineObserver.observe(element));
  queueMotionUpdate();
  if (motionStarted) return;
  motionStarted = true;
  window.addEventListener("scroll", queueMotionUpdate, { passive: true });
  window.addEventListener("resize", () => {
    clearTimeout(motionResizeTimer);
    motionResizeTimer = window.setTimeout(() => { setupMotion(); queueMotionUpdate(); }, 180);
  }, { passive: true });
}

function preparePageEntry() {
  let target;
  const traversal = window.navigation?.activation?.navigationType === "traverse"
    || performance.getEntriesByType("navigation")[0]?.type === "back_forward";
  // Arrive at the fragment before capturing the incoming page, preserving history scroll positions.
  if (location.hash && !traversal) {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { id = location.hash.slice(1); }
    target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "instant", block: "start" });
  }
  updateHeaderContrast();
  updateMotion();
  target?.querySelectorAll(".motion-lines").forEach((element) => {
    const box = element.getBoundingClientRect();
    if (box.top < innerHeight && box.bottom > 0) element.classList.add("is-visible");
  });
}

function setupPageTransitions() {
  document.addEventListener("page-entry", preparePageEntry);
  preparePageEntry();
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  // Native cross-document transitions also cover browser back/forward navigation.
  if (location.protocol !== "file:" && typeof window.CSSViewTransitionRule !== "undefined") return;

  let leaving = false;
  let animations = [];
  const surfaces = () => [...document.querySelectorAll("main, .site-footer")];
  const reset = () => {
    animations.forEach((animation) => animation.cancel());
    animations = [];
    leaving = false;
    document.body.classList.remove("page-leaving");
  };
  const enter = () => {
    reset();
    if (reducedMotion.matches || new URLSearchParams(location.search).has("figma-capture")) return;
    animations = surfaces().map((element) => element.animate(
      [{ opacity: 0, transform: "translateY(36px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 500, easing: "cubic-bezier(.2,.8,.2,1)" }
    ));
  };
  enter();
  window.addEventListener("pageshow", (event) => { if (event.persisted) enter(); });
  reducedMotion.addEventListener("change", reset);

  document.addEventListener("click", async (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || reducedMotion.matches) return;
    const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
    if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
    const destination = new URL(link.href, location.href);
    const current = new URL(location.href);
    if (!["http:", "https:", "file:"].includes(destination.protocol) || destination.origin !== current.origin) return;
    // Keep anchors, email, external links and opening a new tab native.
    if (destination.pathname === current.pathname && destination.search === current.search) return;
    if (!destination.pathname.endsWith(".html") && !destination.pathname.endsWith("/")) return;
    event.preventDefault();
    if (leaving) return;
    reset();
    leaving = true;
    document.body.classList.add("page-leaving");
    animations = surfaces().map((element) => element.animate(
      [{ opacity: 1, transform: "translateY(0)" }, { opacity: 0, transform: "translateY(-36px)" }],
      { duration: 240, easing: "cubic-bezier(.4,0,1,1)", fill: "forwards" }
    ));
    await Promise.allSettled(animations.map((animation) => animation.finished));
    location.assign(destination.href);
  });
}

function setupServices() {
  const catalog = document.querySelector(".service-layout");
  if (!catalog || catalog.dataset.ready) return;
  catalog.dataset.ready = "true";
  const tabs = [...catalog.querySelectorAll('[role="tab"]')];
  const panels = [...catalog.querySelectorAll(".service-panel")];
  const select = (tab, focus = false) => {
    tabs.forEach((item) => {
      const active = item === tab;
      item.setAttribute("aria-selected", String(active));
      item.tabIndex = active ? 0 : -1;
    });
    panels.forEach((panel) => { panel.hidden = panel.id !== tab.getAttribute("aria-controls"); });
    if (focus) tab.focus({ preventScroll: true });
    queueHeaderContrast();
    queueMotionUpdate();
  };
  const tabList = catalog.querySelector(".service-tabs");
  tabList.hidden = false;
  const verticalTabs = window.matchMedia("(min-width: 561px)");
  const setOrientation = () => tabList.setAttribute("aria-orientation", verticalTabs.matches ? "vertical" : "horizontal");
  setOrientation();
  verticalTabs.addEventListener("change", setOrientation);
  select(tabs[0]);
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => select(tab));
    tab.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index + tabs.length - 1) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); select(tabs[next], true); }
    });
  });
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  catalog.querySelectorAll(".service-item").forEach((item) => {
    const content = item.querySelector(".service-content");
    let animation = null;
    let expanded = item.open;
    item.querySelector("summary").addEventListener("click", (event) => {
      if (reducedMotion.matches || typeof content.animate !== "function") {
        animation?.cancel();
        animation = null;
        expanded = !item.open;
        return;
      }
      event.preventDefault();
      const height = item.open ? content.getBoundingClientRect().height : 0;
      animation?.cancel();
      expanded = !expanded;
      if (expanded) item.open = true;
      const next = content.animate(
        [{ height: `${height}px`, opacity: expanded ? .3 : 1 }, { height: `${expanded ? content.scrollHeight : 0}px`, opacity: expanded ? 1 : 0 }],
        { duration: 320, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }
      );
      animation = next;
      next.finished.then(() => {
        if (animation !== next) return;
        item.open = expanded;
        next.cancel();
        animation = null;
      }).catch(() => {});
    });
  });
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-ru][data-en]").forEach((element) => { element.textContent = element.dataset[currentLanguage]; });
  const languageSuffix = currentLanguage === "ru" ? "Ru" : "En";
  if (document.body.dataset.page !== "project") document.title = document.body.dataset[`title${languageSuffix}`] || document.title;
  const description = document.querySelector('meta[name="description"]');
  if (description && document.body.dataset.page !== "project") description.content = document.body.dataset[`description${languageSuffix}`] || description.content;
  renderShell(); renderHeroSlideshow(); setupServices(); renderApproachStats(); renderWork(); renderProject();
  applyTypography();
  setupHeaderContrast();
  setupMotion();
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => { currentFilter = button.dataset.filter; renderWork(); applyTypography(document.getElementById("work-grid")); setupMotion(); }));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const menu = document.getElementById("mobile-menu");
      if (menu && !menu.hidden) setMobileMenu(false, true);
    }
    if (event.key === "Tab" && document.body.classList.contains("menu-open")) {
      const controls = [...document.querySelectorAll(".site-header a, .site-header button")].filter((element) => element.getClientRects().length);
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  window.matchMedia("(min-width: 821px)").addEventListener("change", (event) => { if (event.matches) setMobileMenu(false); });
  applyLanguage();
  setupPageTransitions();
  if (document.fonts?.status !== "loaded") document.fonts?.ready.then(() => setupMotion());
  if (new URLSearchParams(location.search).get("figma-capture") === "about-panel") document.querySelector(".desktop-nav [data-open-about]")?.click();
});
