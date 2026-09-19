(function () {
  const root = document.documentElement;
  const translations = window.SITE_TRANSLATIONS || {};
  const supportedLanguages = ["es", "en"];
  const motionPreference = window.matchMedia?.("(prefers-reduced-motion: reduce)");
  const revealedItems = new Set();
  const revealTargets = new Map();
  let revealObserver = null;

  function clearArticleReveals() {
    revealObserver?.disconnect();
    revealObserver = null;

    revealTargets.forEach((_key, element) => {
      element.classList.remove("scroll-reveal-pending", "scroll-reveal-enter");
      element.style.removeProperty("--reveal-delay");
    });
    revealTargets.clear();
  }

  function revealItem(element, animate = false, delay = 0) {
    const key = revealTargets.get(element);
    if (!key) {
      return;
    }

    revealedItems.add(key);
    revealObserver?.unobserve(element);
    element.classList.remove("scroll-reveal-pending");
    element.classList.toggle("scroll-reveal-enter", animate);

    if (animate) {
      element.style.setProperty("--reveal-delay", `${delay}ms`);
    } else {
      element.style.removeProperty("--reveal-delay");
    }
  }

  function observeArticleReveals() {
    const section = document.querySelector("[data-articles-section]");
    if (!section || section.hidden) {
      return;
    }

    // Animate the heading itself so its sticky parent keeps its normal position.
    const heading = section.querySelector(".articles-heading h2");
    if (heading) {
      revealTargets.set(heading, "heading:articles");
    }
    section.querySelectorAll(".article-row").forEach((row) => {
      revealTargets.set(row, row.querySelector(".article-link").href);
    });

    if (!motionPreference || motionPreference.matches || !("IntersectionObserver" in window)) {
      revealTargets.forEach((_key, element) => revealItem(element));
      return;
    }

    try {
      revealObserver = new IntersectionObserver((entries, observer) => {
        if (observer !== revealObserver) {
          return;
        }

        let articleIndex = 0;
        entries
          .filter((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.1)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)
          .forEach(({ target }) => {
            if (revealedItems.has(revealTargets.get(target))) {
              return;
            }
            const delay = target.matches(".article-row") ? Math.min(articleIndex++ * 70, 140) : 0;
            revealItem(target, true, delay);
          });
      }, { threshold: 0.1 });

      revealTargets.forEach((key, element) => {
        if (revealedItems.has(key) || element.contains(document.activeElement)) {
          revealItem(element);
          return;
        }
        revealObserver.observe(element);
        element.classList.add("scroll-reveal-pending");
      });
    } catch (_error) {
      // Enhancement failures must never leave the article list hidden.
      revealTargets.forEach((_key, element) => revealItem(element));
      clearArticleReveals();
    }
  }

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
    clearArticleReveals();
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
      date.dateTime = article.publishedAt;
      date.textContent = formatDate(article.publishedAt, language);
      title.textContent = article.title;
      summary.textContent = localizedSummary;
      summary.hidden = localizedSummary.length === 0;
      action.textContent = actionLabel;
      fragment.appendChild(row);
    });

    list.appendChild(fragment);
    observeArticleReveals();
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

  document.addEventListener("focusin", (event) => {
    const row = event.target.closest(".article-row");
    if (row) {
      revealItem(row);
    }
  });

  document.addEventListener("animationend", (event) => {
    if (event.animationName === "article-reveal") {
      event.target.classList.remove("scroll-reveal-enter");
      event.target.style.removeProperty("--reveal-delay");
    }
  });

  motionPreference?.addEventListener?.("change", () => {
    clearArticleReveals();
    observeArticleReveals();
  });

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  applyLanguage(readSavedLanguage());
})();
