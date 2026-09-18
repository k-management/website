(() => {
  function initialize() {
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();
