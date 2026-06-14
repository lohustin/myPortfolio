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
menuBtn.addEventListener("click", () => {
  menu.classList.remove("menu--open");
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
  alert("my phone +(380) 95 878 69 39");
});

email.addEventListener("click", () => {
  alert("mailto:oowled35335@gmail.com");
});

LinkedIn.addEventListener("click", () => {
  alert("www.linkedin.com/in/домашенко-олексій-7b310b388");
});

Telegram.addEventListener("click", () => {
  alert("@lohustin");
});

GitHub.addEventListener("click", () => {
  alert("@lohustin");
});
