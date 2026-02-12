

document.addEventListener("DOMContentLoaded", () => {
    console.log("Microservices page loaded");

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


function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}   

function toggleFontSize() {
    document.body.classList.toggle("large-font");
}   

