// These short URLs have real directory entry points, so refresh and direct links work.
if (/^https?:$/.test(location.protocol)) {
  const routes = { "/work.html": "/projects/", "/contact.html": "/contact/", "/axonic-test.html": "/axonic-test/" };
  const params = new URLSearchParams(location.search);
  let path = routes[location.pathname];
  if (location.pathname === "/project.html") {
    path = `/projects/${encodeURIComponent(params.get("slug") || "axonic")}/`;
    params.delete("slug");
  } else if (location.pathname.endsWith("/index.html")) {
    path = location.pathname.slice(0, -10);
  }
  if (path) {
    const query = params.toString();
    history.replaceState(history.state, "", path + (query ? `?${query}` : "") + location.hash);
  }
}

// Register before the first paint, including when a page returns from BFCache.
document.documentElement.classList.add("page-entering");
let entryLoaded = document.readyState === "complete";
let entryFinished = false;
const finishPageEntry = () => {
  if (entryLoaded && entryFinished) document.documentElement.classList.remove("page-entering");
};
window.addEventListener("load", () => {
  entryLoaded = true;
  if (!("onpagereveal" in window)) entryFinished = true;
  finishPageEntry();
});
window.addEventListener("pagereveal", (event) => {
  document.documentElement.classList.add("page-entering");
  entryFinished = false;
  document.dispatchEvent(new Event("page-entry"));
  (event.viewTransition?.finished || Promise.resolve()).then(() => {
    entryFinished = true;
    finishPageEntry();
  });
});
