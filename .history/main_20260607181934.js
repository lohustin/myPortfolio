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

function onEntry(entry) {
    entry.forEach(change => {
            if (change.isIntersecting) {

                change.target.classList.add('element-
                    show ');
                }
            });
    }


    let options = {
        threshold: [0.5]
    };
    let observer = new
    IntersectionObserver(onEntry, options);