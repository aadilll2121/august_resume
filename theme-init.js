/* Apply a saved theme before the page paints. Light mode is the default. */
(() => {
  try {
    if (localStorage.getItem('aadil-portfolio-theme') === 'dark') {
      document.documentElement.dataset.theme = 'dark';
    }
  } catch (_) { /* The page still works when browser storage is unavailable. */ }
})();
