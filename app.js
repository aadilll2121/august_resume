/* Aadil Vahora · Buildless portfolio.
   Content and native disclosure panels work without JavaScript. */
(() => {
  'use strict';
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const themeColor = document.querySelector('meta[name="theme-color"]');

  function setTheme(theme, persist = false) {
    const dark = theme === 'dark';
    root.dataset.theme = dark ? 'dark' : 'light';
    toggle.setAttribute('aria-checked', String(dark));
    toggle.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
    themeColor.setAttribute('content', dark ? '#121212' : '#f8f9fa');
    if (persist) {
      try { localStorage.setItem('aadil-portfolio-theme', root.dataset.theme); }
      catch (_) { /* Theme changes remain usable in private/restricted browsers. */ }
    }
  }

  setTheme(root.dataset.theme);
  toggle.hidden = false;
  toggle.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true));
  window.addEventListener('storage', event => {
    if (event.key === 'aadil-portfolio-theme' || event.key === null) setTheme(event.newValue === 'dark' ? 'dark' : 'light');
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
