import "./style/style.css";

const cards = document.querySelectorAll(".skill-card");
const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu");
const call = document.getElementById("call");
const LinkedIn = document.getElementById("LinkedIn");
const Telegram = document.getElementById("Telegram");
const GitHub = document.getElementById("GitHub");
const email = document.getElementById("email");
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
);

document.querySelectorAll(".animate, .animatexx, .animatex").forEach((el) => {
  observer.observe(el);
});

call.addEventListener("click", () => {
  alert("hello");
});

email.addEventListener("click", () => {
  alert("hello");
});

LinkedIn.addEventListener("click", () => {
  alert("hello");
});

Telegram.addEventListener("click", () => {
  alert("hello");
});

GitHub.addEventListener("click", () => {
  alert("hello");
});
