/* Isolated presentation of the same Axonic content. Does not mutate PROJECTS. */
(() => {
  const target = document.getElementById("axonic-test-content");
  const project = window.PROJECTS?.find((item) => item.slug === "axonic");
  if (!target || !project) return;
  const text = (value) => typeof value === "string" ? value : value?.ru || value?.en || "";
  const safe = (value) => text(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  const arrow = (direction = "") => `<span class="ui-arrow ${direction ? `ui-arrow--${direction}` : ""}" aria-hidden="true"></span>`;
  const mediaList = (block) => Array.isArray(block.media) ? block.media : [block.media].filter(Boolean);
  const figure = (media, hero = false) => {
    const name = safe(media.alt || project.title);
    return `<figure class="ax-test-media${media.embed ? " ax-test-media--video" : ""}">
      ${media.embed ? `<iframe src="${safe(media.embed)}" title="${name}" loading="${hero ? "eager" : "lazy"}" allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowfullscreen></iframe>`
        : `<img src="${safe(media.src)}" alt="${name}"${media.width && media.height ? ` width="${media.width}" height="${media.height}"` : ""} loading="lazy" decoding="async" />`}
    </figure>`;
  };
  const row = (media) => `<div class="ax-test-media-row${media.length === 2 ? " ax-test-media-row--pair" : ""}">${media.map((item) => figure(item)).join("")}</div>`;
  const blocks = project.caseBlocks;
  const impulse = mediaList(blocks[0]);
  const system = mediaList(blocks[1]);
  const applications = mediaList(blocks[3]);
  const gallery = [
    row([impulse[0]]), row(impulse.slice(1)), row(system),
    row(mediaList(blocks[2])),
    row([applications[0]]), row(applications.slice(1, 3)), row([applications[3]]),
    row([applications[4]]), row(applications.slice(5, 7)), row([applications[7]]),
    row(applications.slice(8, 10)), row([applications[10]]), row(mediaList(blocks[4]))
  ].join("");
  target.innerHTML = `
    <section class="ax-test-hero" aria-label="Визуальная система Axonic">
      ${figure({ embed: project.coverEmbed, alt: "Axonic — визуальная система бренда" }, true)}
    </section>
    <section class="ax-test-intro" aria-labelledby="ax-test-title">
      <div class="ax-test-facts">
        <h1 id="ax-test-title">${safe(project.title)}</h1>
        <dl class="ax-test-meta">
          <div><dt>Сфера</dt><dd>Нейротехнологии</dd></div>
          <div><dt>Что сделано</dt><dd>${safe(project.role)}</dd></div>
          <div><dt>Год</dt><dd>${safe(project.year)}</dd></div>
        </dl>
        <a class="ax-test-original" href="project.html?slug=axonic">Исходная версия кейса ${arrow()}</a>
      </div>
      <div class="ax-test-story">
        <h2>Ощущение жизни,<br /> которое ты помнишь.</h2>
        <p class="ax-test-lead">${safe(project.caseIntro.paragraphs[0])}</p>
        <details class="ax-test-details" id="axonic-story">
          <summary><span class="ax-test-more">Подробнее</span><span class="ax-test-less">Свернуть описание</span>${arrow("down")}</summary>
          <div class="ax-test-details-content">
            ${project.caseIntro.paragraphs.slice(1).map((paragraph) => `<p>${safe(paragraph)}</p>`).join("")}
            ${blocks.map((block) => `<section><h3>${safe(block.title)}</h3>${block.paragraphs.map((paragraph) => `<p>${safe(paragraph)}</p>`).join("")}</section>`).join("")}
          </div>
        </details>
      </div>
    </section>
    <section class="ax-test-gallery" aria-label="Знак, визуальная система и коммуникации Axonic">${gallery}</section>
    <section class="ax-test-closing">
      <p>От нейронного сигнала —<br /> к контакту, движению и ощущению.</p>
      <a class="ax-test-contact" href="contact.html">Обсудить проект ${arrow()}</a>
    </section>
    <nav class="ax-test-navigation" aria-label="Навигация по кейсам">
      <a href="project.html?slug=axonic"><span>Исходный кейс</span><strong>${arrow("left")} Axonic</strong></a>
      <a href="project.html?slug=redsoft"><span>Следующий проект</span><strong>Redsoft ${arrow("right")}</strong></a>
    </nav>`;
})();
