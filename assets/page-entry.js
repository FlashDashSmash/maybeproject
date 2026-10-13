// Keep legacy homepage links on the short URL, preserving fragments and queries.
if (/^https?:$/.test(location.protocol) && location.pathname.endsWith("/index.html")) {
  history.replaceState(history.state, "", location.pathname.slice(0, -10) + location.search + location.hash);
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
