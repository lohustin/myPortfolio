import "./style/style.css";

const cards = document.querySelectorAll(".skill-card");
const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu");

const colors = [
  "#f59e0b",
  "#8b5cf6",
  "#3b82f6",
  "#10b981",
  "#ef4444",
  "#f97316",
];

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    card.style.borderColor = randomColor;
  });

  card.addEventListener("mouseleave", () => {
    card.style.borderColor = "transparent";
  });
});

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu--open");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 },
); // 0.2 = блок появляється коли 20% видно

document.querySelectorAll(".animate").forEach((el) => {
  observer.observe(el);
});
