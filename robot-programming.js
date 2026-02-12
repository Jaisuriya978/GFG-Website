// Toggle Language List
const toggleBtn = document.getElementById("toggleLang");
const languageList = document.getElementById("languageList");

toggleBtn.addEventListener("click", () => {
    languageList.style.display =
        languageList.style.display === "none" ? "block" : "none";
});


// Language Information Selector
const languageSelect = document.getElementById("languageSelect");
const languageInfo = document.getElementById("languageInfo");

languageSelect.addEventListener("change", () => {
    const value = languageSelect.value;

    if (value === "python") {
        languageInfo.textContent = "Python is beginner-friendly and widely used in AI and robotics.";
    } 
    else if (value === "cpp") {
        languageInfo.textContent = "C++ is powerful and commonly used with ROS for high-performance robotics.";
    } 
    else if (value === "java") {
        languageInfo.textContent = "Java is used in Android robotics and cross-platform systems.";
    } 
    else if (value === "matlab") {
        languageInfo.textContent = "MATLAB is used for simulation, modeling, and control systems.";
    } 
    else {
        languageInfo.textContent = "";
    }
});


// Quiz Logic
const quizOptions = document.querySelectorAll(".quiz-option");
const quizResult = document.getElementById("quizResult");

quizOptions.forEach(option => {
    option.addEventListener("click", () => {
        if (option.textContent === "C++") {
            quizResult.textContent = "✅ Correct! C++ is widely used in ROS.";
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
