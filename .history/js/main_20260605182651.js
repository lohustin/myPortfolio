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

document.addEventListener("DOMContentLoaded", () => {
    const burgerBtn = document.getElementById("burger-btn");
    const mobileSidebar = document.getElementById("mobile-sidebar");
    const closeBtnX = document.getElementById("close-sidebar-x");
    const closeBtnBack = document.getElementById("close-sidebar-back");
    const sidebarLinks = document.querySelectorAll(".sidebar-link");

    const openMenu = () => {
        mobileSidebar.classList.remove("hidden");
        // Забороняємо прокрутку сторінки, коли меню відкрите
        document.body.classList.add("overflow-hidden");
    };

    const closeMenu = () => {
        mobileSidebar.classList.add("hidden");
        // Повертаємо прокрутку сторінки
        document.body.classList.remove("overflow-hidden");
    };

    if (burgerBtn) burgerBtn.addEventListener("click", openMenu);
    if (closeBtnX) closeBtnX.addEventListener("click", closeMenu);
    if (closeBtnBack) closeBtnBack.addEventListener("click", closeMenu);

    if (mobileSidebar) {
        mobileSidebar.addEventListener("click", (e) => {
            if (e.target === mobileSidebar) {
                closeMenu();
            }
        });
    }

    sidebarLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });
});