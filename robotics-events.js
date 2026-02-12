// Event Category Filter
const eventFilter = document.getElementById("eventFilter");
const eventCards = document.querySelectorAll(".event-card");

eventFilter.addEventListener("change", () => {
    const selected = eventFilter.value;

    eventCards.forEach(card => {
        const category = card.getAttribute("data-category");

        if (selected === "all" || category === selected) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});


// Register Button Interaction
const registerButtons = document.querySelectorAll(".register-btn");

registerButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("✅ You have successfully registered for this event!");
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
