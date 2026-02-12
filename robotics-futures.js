// Toggle Trends
const toggleTrends = document.getElementById("toggleTrends");
const trendList = document.getElementById("trendList");

toggleTrends.addEventListener("click", () => {
    trendList.style.display =
        trendList.style.display === "none" ? "block" : "none";
});


// Timeline Interaction
const years = document.querySelectorAll(".timeline-year");
const timelineInfo = document.getElementById("timelineInfo");

years.forEach(year => {
    year.addEventListener("click", () => {
        const selectedYear = year.getAttribute("data-year");

        if (selectedYear === "2030") {
            timelineInfo.textContent = "By 2030, AI-powered service robots will become common in homes.";
        } 
        else if (selectedYear === "2040") {
            timelineInfo.textContent = "By 2040, humanoid robots may assist in workplaces and healthcare.";
        } 
        else if (selectedYear === "2050") {
            timelineInfo.textContent = "By 2050, advanced autonomous robots could explore other planets.";
        }
    });
});


// Voting System
const voteButtons = document.querySelectorAll(".vote-btn");
const voteResult = document.getElementById("voteResult");

voteButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        voteResult.textContent = "✅ You voted for: " + btn.textContent;
        voteResult.style.color = "lightgreen";
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
