(function () {
  const root = document.documentElement;
  const savedLanguage = localStorage.getItem("site-language");
  const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
  const initialLanguage = savedLanguage || browserLanguage;

  function applyLanguage(language) {
    root.setAttribute("lang", language);
    document.querySelectorAll("[data-language-toggle]").forEach((toggle) => {
      toggle.querySelectorAll("button").forEach((button) => {
        const isSelected = button.dataset.lang === language;
        button.setAttribute("aria-pressed", String(isSelected));
      });
    });

    document.querySelectorAll(".lang-only").forEach((node) => {
      node.hidden = node.dataset.lang !== language;
    });

    localStorage.setItem("site-language", language);
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lang]");
    if (!button) {
      return;
    }

    applyLanguage(button.dataset.lang);
  });

  applyLanguage(initialLanguage);
})();