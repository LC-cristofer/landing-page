// Troque apenas esta URL quando seu portfólio estiver publicado na Vercel.
const PORTFOLIO_URL = "https://portfolio-lucas-liart.vercel.app/";

document.querySelectorAll(".portfolio-link").forEach((link) => {
  link.href = PORTFOLIO_URL;
});

document.getElementById("year").textContent = new Date().getFullYear();
