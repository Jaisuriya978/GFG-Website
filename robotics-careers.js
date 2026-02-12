// Career Level Filter
const careerFilter = document.getElementById("careerFilter");
const careerCards = document.querySelectorAll(".career-card");

careerFilter.addEventListener("change", () => {
    const level = careerFilter.value;

    careerCards.forEach(card => {
        const cardLevel = card.getAttribute("data-level");

        if (level === "all" || level === cardLevel) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});


// Toggle Career Details
const toggleButtons = document.querySelectorAll(".toggle-details");

toggleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const details = btn.nextElementSibling;

        if (details.style.display === "none") {
            details.style.display = "block";
            btn.textContent = "Hide Details";
        } else {
            details.style.display = "none";
            btn.textContent = "Show Details";
        }
    });
});


// Apply Button
const applyButtons = document.querySelectorAll(".apply-btn");

applyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("🚀 Redirecting to career learning resources!");
    });
});


// Scroll To Top
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    scrollTopBtn.style.display =
        document.documentElement.scrollTop > 200 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
