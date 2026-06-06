const cards = document.querySelectorAll(".skill-card");
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobile-menu");

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

burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// Закрити меню при кліку на посилання
mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});