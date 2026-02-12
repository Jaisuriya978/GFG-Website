// Join Community Button
const joinBtn = document.getElementById("joinBtn");
const joinMsg = document.getElementById("joinMsg");

joinBtn.addEventListener("click", () => {
    joinMsg.textContent = "🎉 Welcome! You are now part of the Robotics Community.";
    joinMsg.style.color = "lightgreen";
});


// Toggle Discussion Topics
const toggleDiscussion = document.getElementById("toggleDiscussion");
const discussionList = document.getElementById("discussionList");

toggleDiscussion.addEventListener("click", () => {
    discussionList.style.display =
        discussionList.style.display === "none" ? "block" : "none";
});


// Event Registration Button
const eventBtn = document.getElementById("eventBtn");

eventBtn.addEventListener("click", () => {
    alert("✅ You have successfully registered for the event!");
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
