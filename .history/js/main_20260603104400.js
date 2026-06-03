const cards = document.querySelectorAll(".skill-card");

const colors = [
  "#f59e0b", // жовтий
  "#8b5cf6", // фіолетовий
  "#3b82f6", // синій
  "#10b981", // зелений
  "#ef4444", // червоний
  "#f97316", // помаранчевий
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
