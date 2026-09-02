(function () {
  const root = document.documentElement;
  const translations = window.SITE_TRANSLATIONS || {};
  const supportedLanguages = ["es", "en"];

  function readSavedLanguage() {
    try {
      const savedLanguage = localStorage.getItem("site-language");
      return supportedLanguages.includes(savedLanguage) ? savedLanguage : "es";
    } catch (_error) {
      return "es";
    }
  }

  function saveLanguage(language) {
    try {
      localStorage.setItem("site-language", language);
    } catch (_error) {
      // The selected language still applies when storage is unavailable.
    }
  }

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
        const attributeValue = attribute && key ? resolveTranslation(language, key) : undefined;

        if (typeof attributeValue === "string") {
          element.setAttribute(attribute, attributeValue);
        }
      });
    }
  }

  function getArticles() {
    const articles = Array.isArray(window.SITE_ARTICLES) ? window.SITE_ARTICLES : [];

    return articles
      .map((article, index) => {
        if (!article || typeof article !== "object") {
          return null;
        }

        const url = typeof article.url === "string" ? article.url.trim() : "";
        const title = typeof article.title === "string" ? article.title.trim() : "";
        const source = typeof article.source === "string" ? article.source.trim() : "";
        const sharedAt = typeof article.sharedAt === "string" ? article.sharedAt : "";
        const dateValue = Date.parse(`${sharedAt}T12:00:00Z`);
        let parsedUrl;

        try {
          parsedUrl = new URL(url);
        } catch (_error) {
          return null;
        }

        if (!title || !source || Number.isNaN(dateValue) || !["http:", "https:"].includes(parsedUrl.protocol)) {
          return null;
        }

        return {
          url: parsedUrl.href,
          title,
          source,
          sharedAt,
          dateValue,
          summaries: article.summaries && typeof article.summaries === "object" ? article.summaries : {},
          index
        };
      })
      .filter(Boolean)
      .sort((first, second) => second.dateValue - first.dateValue || first.index - second.index);
  }

  function formatDate(date, language) {
    return new Intl.DateTimeFormat(language, {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC"
    }).format(new Date(`${date}T12:00:00Z`));
  }

  function renderArticles(language) {
    const section = document.querySelector("[data-articles-section]");
    const list = document.querySelector("[data-articles-list]");
    const template = document.querySelector("#article-template");

    if (!section || !list || !template) {
      return;
    }

    const articles = getArticles();
    list.replaceChildren();
    section.hidden = articles.length === 0;

    if (articles.length === 0) {
      return;
    }

    const fragment = document.createDocumentFragment();
    const actionLabel = resolveTranslation(language, "articles.open") || "Open article";

    articles.forEach((article) => {
      const row = template.content.cloneNode(true);
      const link = row.querySelector(".article-link");
      const source = row.querySelector("[data-article-source]");
      const date = row.querySelector("[data-article-date]");
      const title = row.querySelector("[data-article-title]");
      const summary = row.querySelector("[data-article-summary]");
      const action = row.querySelector("[data-article-action]");
      const localizedSummary = article.summaries[language] || article.summaries.es || article.summaries.en || "";

      link.href = article.url;
      link.setAttribute("aria-label", `${article.title}. ${actionLabel}`);
      source.textContent = article.source;
      date.dateTime = article.sharedAt;
      date.textContent = formatDate(article.sharedAt, language);
      title.textContent = article.title;
      summary.textContent = localizedSummary;
      summary.hidden = localizedSummary.length === 0;
      action.textContent = actionLabel;
      fragment.appendChild(row);
    });

    list.appendChild(fragment);
  }

  function applyLanguage(language) {
    const nextLanguage = supportedLanguages.includes(language) ? language : "es";
    root.setAttribute("lang", nextLanguage);

    document.querySelectorAll("[data-language-toggle] button").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === nextLanguage));
    });

    document.querySelectorAll("[data-i18n], [data-i18n-attr]").forEach((element) => {
      translateElement(element, nextLanguage);
    });

    renderArticles(nextLanguage);
    saveLanguage(nextLanguage);
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lang]");

    if (button) {
      applyLanguage(button.dataset.lang);
    }
  });

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  applyLanguage(readSavedLanguage());
})();
