// Search Filter
const searchInput = document.getElementById("searchInput");
const resourceCards = document.querySelectorAll(".resource-card");

searchInput.addEventListener("keyup", function () {
    const searchValue = searchInput.value.toLowerCase();

    resourceCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchValue) ? "block" : "none";
    });
});


// Category Filter
const categoryFilter = document.getElementById("categoryFilter");

categoryFilter.addEventListener("change", function () {
    const selectedCategory = categoryFilter.value;

    resourceCards.forEach(card => {
        const category = card.getAttribute("data-category");

        if (selectedCategory === "all" || category === selectedCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});


// Scroll To Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
