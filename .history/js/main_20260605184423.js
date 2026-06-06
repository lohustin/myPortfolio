// ====== ВИТЯГУВАННЯ КАРТОК SKILLS ======
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

// ====== ЛОГІКА МОБІЛЬНОГО МЕНЮ ======
const mobileSidebar = document.getElementById("mobile-sidebar");
const closeBtnX = document.getElementById("close-sidebar-x");
const sidebarLinks = document.querySelectorAll(".sidebar-link");

// Функція для ЗАКРИТТЯ меню
function closeMenu() {
    mobileSidebar.style.display = "none";
    document.body.classList.remove("overflow-hidden");
}

// Функція для ВІДКРИТТЯ меню (викликай її там, де у тебе кнопка-бургер)
function openMenu() {
    mobileSidebar.style.display = "block";
    document.body.classList.add("overflow-hidden");
}

// 1. Закриття по кліку на хрестик
if (closeBtnX) {
    closeBtnX.addEventListener("click", closeMenu);
}

// 2. Закриття по кліку на будь-яке посилання в меню
sidebarLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

// 3. Закриття по кліку на сіре тло (overlay) поза білим меню
if (mobileSidebar) {
    mobileSidebar.addEventListener("click", (event) => {
        if (event.target === mobileSidebar) {
            closeMenu();
        }
    });
}

// Тимчасово для перевірки в консолі (можна видалити потім)
console.log("Скрипт успішно запущений, меню готове до роботи!");