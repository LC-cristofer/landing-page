// URL pública do portfólio.
const PORTFOLIO_URL = "https://portfolio-lucas-liart.vercel.app/";

document.querySelectorAll(".portfolio-link").forEach((link) => {
  link.href = PORTFOLIO_URL;
});

document.getElementById("year").textContent = new Date().getFullYear();

// Entrada em cascata conforme os grupos de cards entram na viewport.
const cascadeGroups = [
  { selector: ".path-grid .path-card", step: 120 },
  { selector: ".social-list .social-link", step: 90 },
];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

cascadeGroups.forEach(({ selector, step }) => {
  const items = [...document.querySelectorAll(selector)];

  items.forEach((item, index) => {
    item.classList.add("cascade-item");
    item.style.setProperty("--cascade-delay", `${index * step}ms`);
  });

  if (prefersReducedMotion) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  items.forEach((item) => observer.observe(item));
});
