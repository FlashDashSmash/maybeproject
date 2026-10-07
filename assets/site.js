const projectStore = window.PROJECTS || [];
const projectGroups = {
  gfpa: ["branding", "communications"],
  veld: ["branding", "communications"],
  saydo: ["branding", "communications", "packaging", "ai"],
  axonic: ["branding", "communications", "packaging", "digital", "ai"],
  assoro: ["branding", "communications"],
  "gpn-custom-type-test": ["branding", "communications"],
  "koto-myoto": ["branding", "communications", "packaging"],
  ecotek: ["branding", "communications"],
  "iron-bolt": ["branding", "communications"],
  bulat: ["branding", "communications"],
  "wow-lan": ["branding", "communications", "digital"]
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
    filterCount: "проектов",
    aboutHeadline: "Я собираю сильные визуальные системы для брендов с характером.",
    aboutIntro: "Я — Илья Зубков, Brand Designer / Art Director.\nРаботаю с брендами от стратегии и позиционирования до фирменного стиля, коммуникаций и реализации.",
    aboutMethod: "Мой подход", aboutMethodText: "Сначала — контекст и идея. Затем — точная композиция, проверка на носителях и система, которая выдерживает рост.",
    aboutFocus: "Фокус", aboutFocusText: "Айдентика · Логосистемы · Арт-дирекшн · Визуальные системы · Презентации",
    aboutMore: "Подробнее обо мне", aboutStudio: "Обо мне", aboutStory2: "Мне важно не просто найти сильную идею, а понять, как она будет жить дальше. Выстраиваю системы, которые остаются цельными на разных носителях, выдерживают новые задачи и могут развиваться вместе с брендом.",
    aboutStory3: "AI — часть моего рабочего процесса. Использую его для исследования и производства, собираю генеративные пайплайны, автоматизирую процессы и создаю инструменты под конкретные задачи, а финальные решения отбираю и дорабатываю вручную.",
    aboutSignature: "Илья Зубков / MAYBE PROJECT", aboutSince: "Независимая практика", aboutBased: "От идеи к форме", aboutDisciplines: "Направления", aboutExperience: "Опыт сотрудничества", aboutPrinciples: "Принципы",
    aboutDisciplineItems: ["Стратегия и позиционирование", "Фирменный стиль", "Коммуникационный дизайн", "Дизайн упаковки", "Руководства и гайдлайны", "AI-продакшен"],
    aboutExperienceItems: ["Корпоративные продукты", "Бренд-студии и агентства", "In-house команды", "Независимые бренды", "Культурные и образовательные проекты"],
    aboutPrincipleItems: [["Taste /\nФорма следует за идеей", "Хорошая форма не украшает идею — она делает ее яснее, точнее и заметнее."], ["Curiosity /\nИсследование — часть работы", "Исследование расширяет поле возможностей и помогает найти решение, которого не было видно в начале."], ["Ambition /\nДумать шире одного макета", "Хорошая идея должна выдерживать масштаб бренда — от одного решения до целой системы."], ["Independence /\nНе идти по готовому пути", "Знакомые приемы дают знакомый результат. Ищу решения, которые имеют смысл для конкретных задач."], ["Craft /\nИдея должна выдерживать реализацию", "Сильная концепция ничего не стоит без реализации. Внимание к деталям превращает идею в работающую систему."]]
  },
  en: {
    navAbout: "About", navWork: "Projects", navServices: "Services", navProcess: "Process",
    navContact: "Start a project", menu: "Menu", close: "Close", viewCase: "View case",
    allWork: "All projects", project: "Project", role: "Role", year: "Year", next: "Next project",
    context: "Context", challenge: "Challenge", system: "Visual system",
    ai: "AI in the process", applications: "Applications", result: "Result",
    gallery: "Visual story", backWork: "All projects", noMedia: "Case in progress",
    filterCount: "projects",
    aboutHeadline: "I build distinct visual systems for brands with character.",
    aboutIntro: "I'm Ilya Zubkov, Brand Designer / Art Director.\nI work with brands from strategy and positioning to identity, communications and execution.",
    aboutMethod: "My approach", aboutMethodText: "Context and concept first. Then precise composition, application testing and a system designed to grow.",
    aboutFocus: "Focus", aboutFocusText: "Identity · Logo systems · Art direction · Visual systems · Presentations",
    aboutMore: "More about me", aboutStudio: "About me", aboutStory2: "I care about finding a strong idea and understanding how it will live on. I build systems that stay coherent across different applications, handle new challenges and can grow with the brand.",
    aboutStory3: "AI is part of my process. I use it for research and production, build generative pipelines, automate processes and create tools for specific tasks, while I select and refine the final solutions by hand.",
    aboutSignature: "Ilya Zubkov / MAYBE PROJECT", aboutSince: "Independent practice", aboutBased: "From idea to form", aboutDisciplines: "Disciplines", aboutExperience: "Collaboration experience", aboutPrinciples: "Principles",
    aboutDisciplineItems: ["Strategy and positioning", "Brand identity", "Communication design", "Packaging design", "Manuals and guidelines", "AI production"],
    aboutExperienceItems: ["Corporate products", "Brand studios and agencies", "In-house teams", "Independent brands", "Cultural and educational projects"],
    aboutPrincipleItems: [["Taste /\nForm follows the idea", "Good form makes an idea clearer, more precise and more visible."], ["Curiosity /\nResearch is part of the work", "Research expands the range of possibilities and helps uncover a solution that was not visible at the start."], ["Ambition /\nThink beyond a single layout", "A good idea must work at the scale of a brand — from a single solution to an entire system."], ["Independence /\nAvoid the ready-made path", "Familiar techniques produce familiar results. I look for solutions that make sense for specific tasks."], ["Craft /\nThe idea must survive execution", "A strong concept is worth nothing without execution. Attention to detail turns an idea into a working system."]]
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
          <a href="index.html#services">${phrase("navServices")}</a>
          <a href="work.html">${phrase("navWork")}</a>
        </nav>
        <div class="header-actions"><a class="header-cta" href="contact.html">${phrase("navContact")} ${arrowIcon()}</a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu">${phrase("menu")}</button></div>
      </div>
      <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation" hidden>
        <div class="mobile-menu-primary">
        <button type="button" data-open-about><span class="menu-item-reveal">${phrase("navAbout")} ${arrowIcon()}</span></button>
        <a href="index.html#services"><span class="menu-item-reveal">${phrase("navServices")} ${arrowIcon()}</span></a>
        <a href="work.html"><span class="menu-item-reveal">${phrase("navWork")} ${arrowIcon()}</span></a>
        <a href="contact.html"><span class="menu-item-reveal">${phrase("navContact")} ${arrowIcon()}</span></a>
        </div>
        <div class="mobile-menu-socials" aria-label="Социальные сети">
          <a href="https://t.me/maybe_project" target="_blank" rel="noreferrer">Telegram ${arrowIcon()}</a>
          <a href="https://dprofile.ru/maybeproject" target="_blank" rel="noreferrer">Dprofile ${arrowIcon()}</a>
          <a href="https://www.behance.net/maybe_project" target="_blank" rel="noreferrer">Behance ${arrowIcon()}</a>
          <a href="https://www.instagram.com/maybe__project/" target="_blank" rel="noreferrer">Instagram ${arrowIcon()}</a>
        </div>
      </nav>`;
  }
  if (footer) {
    footer.innerHTML = `
      <div class="footer-inner wrap">
        <p class="footer-copyright">© Ilya Zubkov / Maybe Project ${new Date().getFullYear()}</p>
        <nav class="footer-links" aria-label="${currentLanguage === "ru" ? "Контакты и социальные сети" : "Contact and social links"}">
          <a href="https://dprofile.ru/maybeproject" target="_blank" rel="noreferrer">Dprofile ${arrowIcon()}</a>
          <a href="https://www.behance.net/maybe_project" target="_blank" rel="noreferrer">Behance ${arrowIcon()}</a>
          <a href="https://t.me/maybe_project" target="_blank" rel="noreferrer">Telegram ${arrowIcon()}</a>
          <a href="https://www.instagram.com/maybe__project/" target="_blank" rel="noreferrer">Instagram ${arrowIcon()}</a>
        </nav>
      </div>`;
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
      if (location.hash === "#about") history.replaceState(null, "", location.pathname + location.search);
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
  const dark = surface.classList.contains("case-opening-cover--video") || (channels && (.2126 * channels[0] + .7152 * channels[1] + .0722 * channels[2] < 150));
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
  const selected = ["axonic", "saydo", "koto-myoto", "gfpa", "assoro"]
    .map((slug) => projectStore.find((project) => project.slug === slug)).filter(Boolean);
  if (!selected.length) return;
  heroSlideIndex %= selected.length;
  target.setAttribute("aria-label", currentLanguage === "ru" ? "Избранные проекты" : "Selected projects");
  target.innerHTML = `<div class="hero-slides">${selected.map((project, index) => `
    <div class="hero-slide ${index === heroSlideIndex ? "is-active" : ""}" role="group" aria-roledescription="slide" aria-label="${index + 1} / ${selected.length}: ${escapeHtml(project.title)}" aria-hidden="${index !== heroSlideIndex}">
      <a href="project.html?slug=${encodeURIComponent(project.slug)}" tabindex="${index === heroSlideIndex ? "0" : "-1"}" style="--project-accent:${escapeHtml(project.accent)}" aria-label="${escapeHtml(project.title)} — ${phrase("viewCase")}">
        ${project.coverEmbed ? `<iframe data-hero-video="${escapeHtml(project.coverEmbed)}" ${index === heroSlideIndex ? `src="${escapeHtml(project.coverEmbed)}"` : ""} title="${escapeHtml(project.title)}" tabindex="-1" aria-hidden="true" allow="autoplay; fullscreen; picture-in-picture; encrypted-media" loading="lazy"></iframe>` : project.cover ? `<img src="${escapeHtml(project.cover)}" alt="${escapeHtml(project.title)}" ${index === 0 ? 'fetchpriority="high"' : 'decoding="async"'} />` : `<strong>${escapeHtml(project.title)}</strong>`}
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
    slides.forEach((slide) => {
      const video = slide.querySelector("[data-hero-video]");
      if (!video) return;
      const visible = inView && !document.hidden && (slide.classList.contains("is-active") || slide.classList.contains("is-previous"));
      if (visible && !video.hasAttribute("src")) video.src = video.dataset.heroVideo;
      if (!visible && video.hasAttribute("src")) video.removeAttribute("src");
    });
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
    { title: "50+", numeric: true, ru: "реализованных проектов", en: "completed projects" },
    { title: "Direct / Agency / In-house", ru: "работаю напрямую и в составе команд", en: "working directly and as part of teams" },
    { title: "From zero → Beyond launch", ru: "от поиска идеи до развития системы после внедрения", en: "from finding the idea to evolving the system after implementation" },
    { title: "Available", ru: "открыт к новым проектам", en: "open to new projects" }
  ];
  const duration = 7000;
  const content = target.querySelector(".approach-stat-content");
  const progress = target.querySelector(".approach-stat-progress span");
  let elapsed = 0, frame = 0, last = 0, inView = false, focused = false, hovered = false;
  let contentAnimation;
  const update = (animate = false, manual = false) => {
    const stat = stats[approachStatIndex];
    content.setAttribute("aria-live", manual ? "polite" : "off");
    const title = target.querySelector(".approach-stat-number");
    title.classList.toggle("approach-stat-number--text", !stat.numeric);
    title.setAttribute("aria-label", stat.title);
    title.innerHTML = stat.title.split(" → ").map(escapeHtml).join(` ${arrowIcon("right")} `);
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
  const matches = projectStore.filter((project) => !project.pending && (currentFilter === "all" || projectGroups[project.slug]?.includes(currentFilter)));
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

function renderProjectChapters(project, next) {
  const blocks = [...project.caseBlocks];
  const placeholder = (index, title) => `<figure class="case-chapter-media" role="img" aria-label="${escapeHtml(localize(title))} — ${currentLanguage === "ru" ? "заглушка изображения" : "image placeholder"} 16:9">
    <span class="case-placeholder-ratio" aria-hidden="true">16:9</span><figcaption aria-hidden="true">${escapeHtml(project.title)} / ${String(index).padStart(2, "0")}</figcaption>
  </figure>`;
  const mediaList = (block) => Array.isArray(block.media) ? block.media : [block.media];
  const renderVideo = (src, title) => `<iframe src="${escapeHtml(src)}" title="${escapeHtml(title)}" tabindex="-1" allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock" allowfullscreen loading="lazy"></iframe>`;
  const renderMedia = (media, index, title) => media?.embed ? `<figure class="case-chapter-media case-chapter-media--video">${renderVideo(media.embed, localize(media.alt || title))}</figure>` : media?.src ? `<figure class="case-chapter-media case-chapter-media--image"><img${media.width && media.height ? ` width="${Number(media.width)}" height="${Number(media.height)}"` : ""} src="${escapeHtml(media.src)}" alt="${escapeHtml(localize(media.alt || title))}" loading="lazy" decoding="async" /></figure>` : placeholder(index, title);
  return `<section class="case-opening wrap" id="case-intro">
    <a class="back-link" href="work.html">${arrowIcon("left")} ${phrase("backWork")}</a>
    <div class="case-opening-heading">
      <p class="eyebrow">${phrase("project")} / ${escapeHtml(project.year)}</p>
      <h1>${escapeHtml(project.title)}</h1>
      <p class="case-opening-subtitle">${escapeHtml(localize(project.category))}</p>
      ${project.type ? `<p class="case-kind">${escapeHtml(localize(project.type))}</p>` : ""}
    </div>
    <div class="case-opening-details">
      ${project.caseIntro ? `<div class="case-opening-description"><h2>${escapeHtml(localize(project.caseIntro.title))}</h2>${project.caseIntro.paragraphs.map(paragraph => `<p>${escapeHtml(localize(paragraph))}</p>`).join("")}</div>` : `<p>${escapeHtml(localize(project.summary))}</p>`}
      <dl class="case-meta"><div><dt>${phrase("role")}</dt><dd>${escapeHtml(localize(project.role))}</dd></div><div><dt>${phrase("year")}</dt><dd>${escapeHtml(project.year)}</dd></div></dl>
    </div>
  </section>
  <section class="case-opening-cover${project.coverEmbed ? " case-opening-cover--video" : ""}" id="case-cover">
    ${project.coverEmbed ? renderVideo(project.coverEmbed, `${project.title} — ${localize(project.category)}`) : project.cover ? `<img src="${escapeHtml(project.cover)}" alt="${escapeHtml(localize(project.category))}" />` : placeholder(0, project.category)}
  </section>
  ${blocks.map((block, index) => `<section class="case-chapter wrap${block.items?.length ? " case-chapter--pipeline" : ""}${mediaList(block).length > 1 ? " case-chapter--sequence" : ""}" id="case-chapter-${index + 1}" aria-labelledby="case-chapter-title-${index + 1}">
    <div class="case-chapter-copy">
      <p class="eyebrow case-chapter-label">${String(index + 1).padStart(2, "0")} / ${escapeHtml(project.title)}</p>
      <h2 id="case-chapter-title-${index + 1}">${escapeHtml(localize(block.title))}</h2>
      ${block.paragraphs.map((paragraph) => `<p class="case-chapter-text">${escapeHtml(localize(paragraph))}</p>`).join("")}
      ${block.items?.length ? `<div class="case-chapter-pipeline">${block.items.map((item) => `<div><h3>${escapeHtml(localize(item.title))}</h3><p class="case-pipeline-tool">${escapeHtml(item.tool)}</p><p>${escapeHtml(localize(item.text))}</p></div>`).join("")}</div>` : ""}
    </div>${mediaList(block).length > 1 ? `<div class="case-chapter-visuals">${mediaList(block).map((media, slideIndex) => `<div class="case-chapter-slide" data-case-slide>${renderMedia(media, `${index + 1}.${slideIndex + 1}`, block.title)}</div>`).join("")}</div>` : renderMedia(mediaList(block)[0], index + 1, block.title)}
  </section>`).join("")}
  <section class="case-next-screen"><a class="next-project" href="project.html?slug=${encodeURIComponent(next.slug)}"><span class="eyebrow">${phrase("next")}</span><strong>${escapeHtml(next.title)}</strong><span class="round-arrow">${arrowIcon()}</span></a></section>`;
}

function renderProject() {
  const target = document.getElementById("project-content");
  if (!target || !projectStore.length) return;
  const slug = new URLSearchParams(location.search).get("slug");
  const project = projectStore.find((item) => item.slug === slug || item.aliases?.includes(slug)) || projectStore[0];
  const publishedProjects = projectStore.filter(item => !item.pending);
  const next = projectStore.find(item => item.slug === project.nextProject)
    || publishedProjects[(publishedProjects.indexOf(project) + 1) % publishedProjects.length];
  const captureParams = new URLSearchParams(location.search);
  const figmaOffset = Number(captureParams.get("figma-offset") || 0);
  const caseMedia = captureParams.has("figma-summary") ? project.media?.slice(figmaOffset, figmaOffset + 3) : project.media;
  const sections = ["context", "challenge", "visualSystem", "aiWorkflow", "applications", "result"];
  const names = { context: "context", challenge: "challenge", visualSystem: "system", aiWorkflow: "ai", applications: "applications", result: "result" };
  const storyBlocks = project.caseBlocks || sections.map((key) => ({
    title: phrase(names[key]), paragraphs: [project.sections?.[key]]
  }));
  document.title = `${project.title} — Ilya Zubkov`;
  const description = document.querySelector('meta[name="description"]');
  description?.setAttribute("content", localize(project.summary));
  const chapters = project.layout === "chapters";
  document.body.classList.toggle("has-case-chapters", chapters);
  target.classList.toggle("case-chapters--text-right", chapters && project.textSide === "right");
  if (project.pending) {
    target.innerHTML = `<section class="case-opening wrap" id="case-intro">
      <a class="back-link" href="work.html">${arrowIcon("left")} ${phrase("backWork")}</a>
      <div class="case-opening-heading"><p class="eyebrow">${phrase("project")}</p><h1>${escapeHtml(project.title)}</h1><p class="case-opening-subtitle">${escapeHtml(localize(project.summary))}</p></div>
    </section>`;
    return;
  }
  if (chapters) {
    target.innerHTML = renderProjectChapters(project, next);
    return;
  }
  target.innerHTML = `
    <section class="case-hero wrap">
      <aside class="case-aside"><a class="back-link" href="work.html">${arrowIcon("left")} ${phrase("backWork")}</a>
        ${project.caseIntro ? `<div class="case-aside-story"><h2>${escapeHtml(localize(project.caseIntro.title))}</h2>${project.caseIntro.paragraphs.map((paragraph) => `<p>${escapeHtml(localize(paragraph))}</p>`).join("")}</div>` : `<p class="case-intro-text">${escapeHtml(localize(project.intro))}</p>`}
      </aside>
      <div class="case-heading"><p class="hero-label">${phrase("project")} / ${escapeHtml(project.year)}</p><h1>${escapeHtml(project.title)}</h1>
      <p class="case-subtitle">${escapeHtml(localize(project.category))}</p>
      ${project.type ? `<p class="case-kind">${escapeHtml(localize(project.type))}</p>` : ""}
      <dl class="case-meta"><div><dt>${phrase("role")}</dt><dd>${escapeHtml(localize(project.role))}</dd></div><div><dt>${phrase("year")}</dt><dd>${escapeHtml(project.year)}</dd></div></dl></div>
    </section>
    ${project.cover || !project.caseBlocks ? `<div class="case-cover ${project.cover ? "has-cover" : "is-type"}" style="--project-accent:${escapeHtml(project.accent)}">
      ${project.cover ? `<img src="${escapeHtml(project.cover)}" alt="${escapeHtml(project.title)}" />` : `<strong>${escapeHtml(project.title)}</strong>`}
    </div>` : ""}
    <section class="case-story wrap${project.caseBlocks ? " case-story--editorial" : ""}"><p class="eyebrow">${phrase("project")} / ${escapeHtml(project.title)}</p><div>
      ${storyBlocks.map((block, index) => `<article class="case-story-row"><span class="case-step">${String(index + 1).padStart(2, "0")}</span><div><h2>${escapeHtml(localize(block.title))}</h2>
        ${block.paragraphs.map((paragraph) => `<p>${escapeHtml(localize(paragraph))}</p>`).join("")}
        ${block.items?.length ? `<div class="case-pipeline">${block.items.map((item) => `<div><h3>${escapeHtml(localize(item.title))}</h3><p class="case-pipeline-tool">${escapeHtml(item.tool)}</p><p>${escapeHtml(localize(item.text))}</p></div>`).join("")}</div>` : ""}
      </div></article>`).join("")}
    </div></section>
    ${caseMedia?.length ? `<section class="case-gallery wrap"><div class="section-title"><p class="eyebrow">${phrase("gallery")}</p><h2>${escapeHtml(project.title)}<span> / ${String(caseMedia.length).padStart(2, "0")}</span></h2></div><div class="gallery-grid">${caseMedia.map((media, index) => `<figure class="gallery-item ${index % 5 === 0 ? "gallery-item--wide" : ""}"><img src="${escapeHtml(media.src)}" alt="${escapeHtml(localize(media.alt))}" loading="lazy" /><figcaption>${String(index + 1).padStart(2, "0")} / ${escapeHtml(localize(media.alt))}</figcaption></figure>`).join("")}</div></section>` : ""}
    <a class="next-project" href="project.html?slug=${encodeURIComponent(next.slug)}"><span class="eyebrow">${phrase("next")}</span><strong>${escapeHtml(next.title)}</strong><span class="round-arrow">${arrowIcon()}</span></a>`;
}

let motionTargets = [];
let motionFillStates = new WeakMap();
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
  const scrollTop = window.scrollY;
  const maxScroll = Math.max(0, document.documentElement.scrollHeight - height);
  const smoothFill = document.documentElement.classList.contains("home-smooth-scroll") && motionEnabled();
  const now = performance.now();
  let filling = false;
  motionTargets.forEach(({ element, letters }) => {
    const anchor = element.closest(".approach-copy") || element;
    const anchorBox = anchor.getBoundingClientRect();
    const box = element.getBoundingClientRect();
    if (box.top > height * 1.1 || box.bottom < -height * .2) {
      if (anchorBox.top > height * 1.1) motionFillStates.delete(anchor);
      return;
    }
    // Lines share one progress, including the two Approach paragraphs.
    // The last heading must finish within the page's available scroll distance.
    const fillStart = anchorBox.top + scrollTop - height;
    const fillEnd = Math.min(fillStart + height * .5, maxScroll);
    const goal = Math.max(0, Math.min(1, (scrollTop - fillStart) / Math.max(1, fillEnd - fillStart)));
    let progress = goal;
    if (smoothFill) {
      let state = motionFillStates.get(anchor);
      if (!state) { state = { progress: 0, updatedAt: now }; motionFillStates.set(anchor, state); }
      const step = Math.min(64, now - state.updatedAt) / 1450;
      state.progress += Math.max(-step, Math.min(step, goal - state.progress));
      state.updatedAt = now;
      progress = state.progress;
      filling ||= Math.abs(goal - progress) > .0001;
    }
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
  // Keep the fill moving after the chapter scroll has settled.
  if (filling && !document.hidden) queueMotionUpdate();
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
  motionFillStates = new WeakMap();
  const fillSelector = ".statement h2, .approach-body, .section-title h2, .about-slice h2, .process-display, .brief-heading h2, .big-cta h2";
  document.querySelectorAll(fillSelector).forEach((element) => {
    const target = splitMotionLetters(element, segmenter);
    if (target) motionTargets.push(target);
  });
  const revealSelector = "main h1:not(:has(a)), .hero-aside>p:not(.eyebrow), .page-lead, .feature-info h3, .feature-info p, .work-card-info h2, .work-card-info p, .about-slice-copy>p:not(.eyebrow), .service-list h3, .process-list h3, .process-list p, .case-intro-text, .case-story-row h2, .case-story-row p, .contact-aside>p:not(.eyebrow), .contact-details li";
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
  document.addEventListener("visibilitychange", () => { if (!document.hidden) queueMotionUpdate(); });
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

function setupChapterScroll() {
  const isHome = document.body.dataset.page === "home";
  const isCase = document.body.classList.contains("has-case-chapters");
  if (!isHome && !isCase) return;
  const desktop = matchMedia("(min-width:821px) and (hover:hover) and (pointer:fine)");
  const reduced = matchMedia("(prefers-reduced-motion:reduce)");
  const root = document.documentElement;
  let frame = 0;
  let destination = null;
  let wheelTotal = 0;
  let lastWheel = 0;
  let lastDirection = 0;
  let wheelLocked = false;
  const enabled = () => desktop.matches && !reduced.matches;
  const cancel = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    destination = null;
    wheelTotal = 0;
  };
  const sync = () => { cancel(); root.classList.toggle(isHome ? "home-smooth-scroll" : "case-smooth-scroll", enabled()); };
  const stops = () => {
    const max = Math.max(0, root.scrollHeight - innerHeight);
    const points = [0, max];
    document.querySelectorAll("main>section, .site-footer").forEach((section) => {
      const box = section.getBoundingClientRect();
      const start = box.top + scrollY;
      points.push(Math.max(0, Math.min(max, start)));
      // Only content below the viewport needs another stop; bottom padding does not.
      const contentEnd = isHome
        ? Math.max(start, ...Array.from(section.children, (child) => child.getBoundingClientRect().bottom + scrollY))
        : start + box.height;
      const minOverflow = section.classList.contains("case-opening-cover") ? 64 : 2;
      if (!section.classList.contains("case-chapter--sequence") && contentEnd > start + innerHeight + minOverflow) {
        points.push(Math.max(0, Math.min(max, contentEnd - innerHeight)));
      }
    });
    document.querySelectorAll("[data-case-slide]").forEach((slide) => {
      points.push(Math.max(0, Math.min(max, slide.getBoundingClientRect().top + scrollY)));
    });
    return points.sort((a, b) => a - b).filter((point, index, all) => !index || point - all[index - 1] > 2);
  };
  const moveTo = (target) => {
    cancel();
    const from = scrollY;
    const distance = target - from;
    if (Math.abs(distance) < 2) return;
    destination = target;
    const began = performance.now();
    const duration = Math.min(1100, Math.max(650, 900 * Math.sqrt(Math.abs(distance) / innerHeight)));
    const tick = (now) => {
      const progress = Math.min(1, (now - began) / duration);
      const ease = .5 - Math.cos(Math.PI * progress) / 2;
      window.scrollTo({ top: from + distance * ease, behavior: "instant" });
      if (progress < 1) frame = requestAnimationFrame(tick);
      else { frame = 0; destination = null; }
    };
    frame = requestAnimationFrame(tick);
  };
  const step = (direction) => {
    const position = destination ?? scrollY;
    const points = stops();
    const target = direction > 0 ? points.find((point) => point > position + 2) : points.findLast((point) => point < position - 2);
    if (target !== undefined) moveTo(target);
  };
  const insideScroller = (target) => {
    for (let element = target instanceof Element ? target : null; element && element !== document.body; element = element.parentElement) {
      if (element.matches("dialog[open]")) return true;
      if (element.scrollHeight > element.clientHeight + 1 && /auto|scroll/.test(getComputedStyle(element).overflowY)) return true;
    }
    return false;
  };
  window.addEventListener("wheel", (event) => {
    if (!enabled() || event.defaultPrevented || event.ctrlKey || event.metaKey || Math.abs(event.deltaX) > Math.abs(event.deltaY) || insideScroller(event.target)) return;
    if (!event.deltaY) return;
    const now = performance.now();
    const gap = now - lastWheel;
    const direction = Math.sign(event.deltaY);
    lastWheel = now;
    event.preventDefault();
    // Discard the remainder of a trackpad gesture rather than queueing more chapters.
    if (frame || (wheelLocked && gap < 180)) { wheelTotal = 0; return; }
    wheelLocked = false;
    if (gap > 180 || direction !== lastDirection) wheelTotal = 0;
    lastDirection = direction;
    wheelTotal += event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? innerHeight : 1);
    if (Math.abs(wheelTotal) >= 24) { wheelTotal = 0; step(direction); wheelLocked = true; }
  }, { passive: false });
  document.addEventListener("keydown", (event) => {
    if (!enabled() || event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey || insideScroller(event.target)) return;
    if (event.target instanceof Element && event.target.closest("a,button,input,textarea,select,summary,[contenteditable]")) return;
    const direction = ["ArrowDown", "PageDown"].includes(event.key) || (event.key === " " && !event.shiftKey) ? 1 : ["ArrowUp", "PageUp"].includes(event.key) || (event.key === " " && event.shiftKey) ? -1 : 0;
    if (direction || event.key === "Home" || event.key === "End") {
      event.preventDefault();
      if (event.repeat || frame) return;
      if (direction) step(direction);
      else moveTo(event.key === "Home" ? 0 : Math.max(0, root.scrollHeight - innerHeight));
    }
  });
  document.addEventListener("click", (event) => {
    if (!enabled() || event.defaultPrevented || event.button || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
    if (!link || link.target || link.hasAttribute("download")) return;
    const url = new URL(link.href);
    if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search || !url.hash) return;
    let id;
    try { id = decodeURIComponent(url.hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    if (url.hash !== location.hash) history.pushState(null, "", url.hash);
    moveTo(Math.max(0, Math.min(root.scrollHeight - innerHeight, target.getBoundingClientRect().top + scrollY)));
  });
  window.addEventListener("pointerdown", cancel, { passive: true });
  window.addEventListener("resize", sync);
  window.addEventListener("pagehide", cancel);
  window.addEventListener("popstate", cancel);
  window.addEventListener("hashchange", cancel);
  document.addEventListener("page-entry", cancel);
  document.addEventListener("visibilitychange", () => { if (document.hidden) cancel(); });
  desktop.addEventListener("change", sync);
  reduced.addEventListener("change", sync);
  sync();
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
  const catalog = document.querySelector(".service-catalog");
  if (!catalog || catalog.dataset.ready) return;
  catalog.dataset.ready = "true";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const entries = [...catalog.querySelectorAll(".service-item")].map((item) => ({
    item, content: item.querySelector(".service-content"), animation: null, expanded: item.open
  }));
  const setExpanded = (entry, expanded) => {
    if (entry.expanded === expanded) return;
    const { item, content } = entry;
    const height = item.open ? content.getBoundingClientRect().height : 0;
    entry.animation?.cancel();
    entry.animation = null;
    entry.expanded = expanded;
    if (reducedMotion.matches || typeof content.animate !== "function") {
      item.open = expanded;
      queueHeaderContrast();
      queueMotionUpdate();
      return;
    }
    if (expanded) item.open = true;
    const next = content.animate(
      [{ height: `${height}px`, opacity: expanded ? .3 : 1 }, { height: `${expanded ? content.scrollHeight : 0}px`, opacity: expanded ? 1 : 0 }],
      { duration: 320, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }
    );
    entry.animation = next;
    next.finished.then(() => {
      if (entry.animation !== next) return;
      item.open = entry.expanded;
      next.cancel();
      entry.animation = null;
      queueHeaderContrast();
      queueMotionUpdate();
    }).catch(() => {});
  };
  entries.forEach((entry) => {
    entry.item.querySelector("summary").addEventListener("click", (event) => {
      event.preventDefault();
      const expanded = !entry.expanded;
      if (expanded) entries.forEach((other) => { if (other !== entry) setExpanded(other, false); });
      setExpanded(entry, expanded);
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
  setupChapterScroll();
  setupPageTransitions();
  if (document.fonts?.status !== "loaded") document.fonts?.ready.then(() => setupMotion());
  if (location.hash === "#about" || new URLSearchParams(location.search).get("figma-capture") === "about-panel") document.querySelector("[data-open-about]")?.click();
});
