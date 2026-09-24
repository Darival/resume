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

  function localImagePath(value) {
    if (typeof value !== "string" || !value.trim()) return "";
    try {
      const url = new URL(value, window.location.href);
      return url.origin === window.location.origin && url.pathname.startsWith("/assets/articles/")
        ? url.pathname : "";
    } catch (_error) {
      return "";
    }
  }

  function getArticleImage(image) {
    if (!image || typeof image !== "object") return null;
    const src = localImagePath(image.src);
    if (!src) return null;
    const srcset = typeof image.srcset === "string"
      ? image.srcset.split(",").map((entry) => {
        const [path, width, extra] = entry.trim().split(/\s+/);
        const safePath = localImagePath(path);
        return safePath && /^[1-9]\d*w$/.test(width) && !extra ? `${safePath} ${width}` : "";
      }).filter(Boolean).join(", ") : "";
    const hasDimensions = Number.isSafeInteger(image.width) && image.width > 0
      && Number.isSafeInteger(image.height) && image.height > 0;
    return {
      src, srcset,
      width: hasDimensions ? image.width : 1280,
      height: hasDimensions ? image.height : 960,
      alt: image.alt && typeof image.alt === "object" ? image.alt : {}
    };
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
        const publishedAt = typeof article.publishedAt === "string" ? article.publishedAt : "";
        const dateValue = /^\d{4}-\d{2}-\d{2}$/.test(publishedAt)
          ? Date.parse(`${publishedAt}T12:00:00Z`)
          : NaN;

        // Reject impossible dates that Date.parse would normalize, such as February 30.
        if (Number.isNaN(dateValue) || new Date(dateValue).toISOString().slice(0, 10) !== publishedAt) {
          return null;
        }

        let parsedUrl;

        try {
          parsedUrl = new URL(url);
        } catch (_error) {
          return null;
        }

        if (!title || !source || !["http:", "https:"].includes(parsedUrl.protocol)) {
          return null;
        }

        return {
          url: parsedUrl.href,
          title,
          source,
          publishedAt,
          dateValue,
          image: getArticleImage(article.image),
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
    window.SITE_MOTION?.unmount();
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
      const visual = row.querySelector("[data-article-visual]");
      const localizedSummary = article.summaries[language] || article.summaries.es || article.summaries.en || "";

      link.href = article.url;
      row.querySelector(".article-row").dataset.articleKey = article.url;
      link.setAttribute("aria-label", `${article.title}. ${actionLabel}`);
      source.textContent = article.source;
      date.dateTime = article.publishedAt;
      date.textContent = formatDate(article.publishedAt, language);
      title.textContent = article.title;
      summary.textContent = localizedSummary;
      summary.hidden = localizedSummary.length === 0;
      action.textContent = actionLabel;
      if (article.image) {
        const image = visual.querySelector("img");
        image.width = article.image.width;
        image.height = article.image.height;
        visual.style.aspectRatio = `${article.image.width} / ${article.image.height}`;
        image.alt = article.image.alt[language] || article.image.alt.es || article.image.alt.en || "";
        image.sizes = "(max-width: 639px) clamp(72px, 22vw, 88px), (max-width: 1023px) 144px, 160px";
        image.addEventListener("error", () => {
          visual.hidden = true;
          window.SITE_MOTION?.refresh();
        }, { once: true });
        if (article.image.srcset) image.srcset = article.image.srcset;
        image.src = article.image.src;
        visual.hidden = false;
      }
      fragment.appendChild(row);
    });

    list.appendChild(fragment);
    window.SITE_MOTION?.mount();
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
