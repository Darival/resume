(function () {
  const root = document.documentElement;
  const translations = window.SITE_TRANSLATIONS || {};
  const savedLanguage = localStorage.getItem("site-language");
  const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
  const initialLanguage = savedLanguage || browserLanguage;

  function resolveTranslation(language, key) {
    return key.split(".").reduce((value, segment) => {
      if (value && typeof value === "object") {
        return value[segment];
      }

      return undefined;
    }, translations[language]);
  }

  function translateElement(element, language) {
    const textKey = element.dataset.i18n;
    const attrMap = element.dataset.i18nAttr;

    if (textKey) {
      const textValue = resolveTranslation(language, textKey);
      if (typeof textValue === "string") {
        element.textContent = textValue;
      }
    }

    if (attrMap) {
      attrMap.split(",").forEach((entry) => {
        const [attribute, key] = entry.split(":").map((part) => part && part.trim());
        if (!attribute || !key) {
          return;
        }

        const attributeValue = resolveTranslation(language, key);
        if (typeof attributeValue === "string") {
          element.setAttribute(attribute, attributeValue);
        }
      });
    }
  }

  function applyLanguage(language) {
    root.setAttribute("lang", language);

    document.querySelectorAll("[data-language-toggle]").forEach((toggle) => {
      toggle.querySelectorAll("button").forEach((button) => {
        const isSelected = button.dataset.lang === language;
        button.setAttribute("aria-pressed", String(isSelected));
      });
    });

    document.querySelectorAll("[data-i18n], [data-i18n-attr]").forEach((element) => {
      translateElement(element, language);
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