// systemdesign-components.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("System Design Components page loaded");

    const cards = document.querySelectorAll(".content-card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.borderLeft = "4px solid #6db33f";
        });

        card.addEventListener("mouseleave", () => {
            card.style.borderLeft = "none";
        });
    });
});
