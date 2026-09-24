(function () {
  const revealed = new Set();
  let media = null;

  function unmount() {
    media?.revert();
    media = null;
  }

  function mount() {
    unmount();
    const { gsap, ScrollTrigger } = window;
    // The document's default layout is complete, with inline images and visible text.
    if (!gsap || !ScrollTrigger) return;

    try {
      gsap.registerPlugin(ScrollTrigger);
      media = gsap.matchMedia();
      media.add({
        desktop: "(min-width: 1024px) and (min-height: 600px)",
        reduced: "(prefers-reduced-motion: reduce)",
        all: "(min-width: 0px)"
      }, (context) => {
        if (context.conditions.reduced) return;
        const { desktop } = context.conditions;
        const hero = document.querySelector(".hero");
        const list = document.querySelector("[data-articles-list]");
        const rows = Array.from(list?.querySelectorAll(".article-row") || []);
        const animations = new Map();

        if (hero) {
          gsap.timeline({ scrollTrigger: {
            trigger: hero, start: "top top", end: "bottom top", scrub: 0.6,
            invalidateOnRefresh: true
          } })
            .to(".hero-media picture", { y: desktop ? 72 : 20, scale: 1.045, ease: "none" }, 0)
            .to(".hero-copy h1 span:first-child", { x: desktop ? -24 : -8, y: -12, ease: "none" }, 0)
            .to(".hero-copy h1 span:last-child", { x: desktop ? 24 : 8, y: -6, ease: "none" }, 0);
        }

        function reveal(element, key, trigger = element) {
          if (!element || revealed.has(key) || element.contains(document.activeElement)) return;
          // Restored scroll positions and locale changes must not re-hide visible content.
          if (trigger.getBoundingClientRect().top < window.innerHeight * 0.9) {
            revealed.add(key);
            return;
          }
          const animation = gsap.fromTo(element, { y: 26, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
            scrollTrigger: { trigger, start: "top 90%", once: true },
            onComplete: () => {
              revealed.add(key);
              gsap.set(element, { clearProps: "opacity,transform" });
            }
          });
          animations.set(trigger, animation);
        }
        reveal(document.querySelector(".articles-heading h2"), "articles-heading");
        rows.forEach((row) => reveal(row.querySelector(".article-link"), row.dataset.articleKey, row));

        function onFocus(event) {
          const row = event.target.closest(".article-row");
          if (!row) return;
          animations.get(row)?.progress(1);
        }
        document.addEventListener("focusin", onFocus);
        return () => {
          document.removeEventListener("focusin", onFocus);
        };
      });
    } catch (_error) {
      // Revert any partially initialized animation and keep the full static layout.
      unmount();
    }
  }

  window.SITE_MOTION = {
    mount,
    unmount,
    refresh() { if (media) window.ScrollTrigger?.refresh(true); }
  };
  document.fonts?.ready.then(() => window.SITE_MOTION.refresh());
})();
