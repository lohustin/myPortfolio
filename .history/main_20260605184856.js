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

// ====== ЛОГІКА МОБІЛЬНОГО МЕНЮ ======
const mobileSidebar = document.getElementById("mobile-sidebar");
const openMenuBtn = document.getElementById("mobile-menu-btn"); // Нова кнопка-бургер
const closeBtnX = document.getElementById("close-sidebar-x");
const sidebarLinks = document.querySelectorAll(".sidebar-link");

// Функція для ВІДКРИТТЯ меню
function openMenu() {
    if (mobileSidebar) {
        mobileSidebar.style.display = "block";
        document.body.classList.add("overflow-hidden"); // Блокуємо скрол сайту на фоні
    }
}

// Функція для ЗАКРИТТЯ меню
function closeMenu() {
    if (mobileSidebar) {
        mobileSidebar.style.display = "none";
        document.body.classList.remove("overflow-hidden"); // Повертаємо скрол
    }
}

// 1. СЛУХАЧ: Відкриття по кліку на 3 смужки (бургер)
if (openMenuBtn) {
    openMenuBtn.addEventListener("click", openMenu);
}

// 2. СЛУХАЧ: Закриття по кліку на хрестик
if (closeBtnX) {
    closeBtnX.addEventListener("click", closeMenu);
}

// 3. СЛУХАЧ: Закриття по кліку на будь-яке посилання в меню
sidebarLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

// 4. СЛУХАЧ: Закриття по кліку на сіре тло поза білим меню
if (mobileSidebar) {
    mobileSidebar.addEventListener("click", (event) => {
        if (event.target === mobileSidebar) {
            closeMenu();
        }
    });
}