import "./style/style.css";

const cards = document.querySelectorAll(".skill-card");

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

// Знаходимо елементи в DOM
const mobileSidebar = document.getElementById("mobile-sidebar");
const closeBtnX = document.getElementById("close-sidebar-x");
const sidebarLinks = document.querySelectorAll(".sidebar-link");

// Функція для закриття меню
function closeMenu() {
    mobileSidebar.classList.add("hidden");
    document.body.classList.remove("overflow-hidden"); // Повертаємо прокрутку сторінки
}

// 1. Закриття по кліку на хрестик
closeBtnX.addEventListener("click", closeMenu);

// 2. Закриття по кліку на будь-яке посилання в меню
sidebarLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

// 3. Закриття по кліку на сіре тло (overlay) поза білим меню
mobileSidebar.addEventListener("click", (event) => {
    // Якщо клікнули саме на темне тло, а не на білу панель всередині
    if (event.target === mobileSidebar) {
        closeMenu();
    }
});