import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { runInNewContext } from "node:vm";

const root = fileURLToPath(new URL("../", import.meta.url));
const scope = { window: {} };
runInNewContext(readFileSync(resolve(root, "assets/projects.js"), "utf8"), scope);
const projects = scope.window.PROJECTS;
const write = (route, html) => {
  const directory = resolve(root, `.${route}`);
  mkdirSync(directory, { recursive: true });
  writeFileSync(resolve(directory, "index.html"), html);
};
const canonical = (html, route) => html.replace(/<link rel="canonical"[^>]*\/>/g, "")
  .replace("</head>", `<link rel="canonical" href="http://maybeproject.ru${route}" /></head>`);
for (const [route, source] of [["/projects/", "work.html"], ["/contact/", "contact.html"], ["/axonic-test/", "axonic-test.html"], ["/about/", "about.html"]]) {
  write(route, canonical(readFileSync(resolve(root, source), "utf8"), route));
}
const template = readFileSync(resolve(root, "project.html"), "utf8");
for (const project of projects) {
  if (!/^[a-z0-9-]+$/.test(project.slug)) throw new Error(`Invalid project slug: ${project.slug}`);
  const route = `/projects/${project.slug}/`;
  write(route, canonical(template.replace("<title>Проект — Илья Зубков</title>", `<title>${project.title} — Илья Зубков</title>`), route));
  for (const alias of project.aliases || []) {
    if (!/^[a-z0-9-]+$/.test(alias)) throw new Error(`Invalid project alias: ${alias}`);
    write(`/projects/${alias}/`, `<!doctype html><html lang="ru"><head><meta charset="utf-8" /><meta http-equiv="refresh" content="0;url=${route}" /><link rel="canonical" href="http://maybeproject.ru${route}" /><title>${project.title}</title><script>location.replace(${JSON.stringify(route)} + location.search + location.hash);</script></head><body><a href="${route}">${project.title}</a></body></html>`);
  }
}
console.log(`Generated clean routes for ${projects.length} projects and four pages.`);
