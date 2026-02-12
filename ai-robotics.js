// Toggle AI Technology List
const toggleBtn = document.getElementById("toggleTech");
const techList = document.getElementById("techList");

toggleBtn.addEventListener("click", () => {
    techList.style.display =
        techList.style.display === "none" ? "block" : "none";
});


// Quiz Logic
const quizOptions = document.querySelectorAll(".quiz-option");
const quizResult = document.getElementById("quizResult");

quizOptions.forEach(option => {
    option.addEventListener("click", () => {
        if (option.textContent === "Machine Learning") {
            quizResult.textContent = "✅ Correct! Well done.";
            quizResult.style.color = "lightgreen";
        } else {
            quizResult.textContent = "❌ Incorrect. Try again!";
            quizResult.style.color = "red";
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
