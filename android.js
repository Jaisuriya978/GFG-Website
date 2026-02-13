// android.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("Android Intro page loaded");

    const cards = document.querySelectorAll(".content-card");


    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.borderLeft = "4px solid #3ddc84";
            card.style.transform = "translateY(-5px)";
            card.style.transition = "0.3s ease";
            card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.borderLeft = "none";
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "none";
        });
    });

    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    };

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "all 0.6s ease";
    });

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    
    const backToTop = document.createElement("button");
    backToTop.innerText = "↑";
    backToTop.style.position = "fixed";
    backToTop.style.bottom = "20px";
    backToTop.style.right = "20px";
    backToTop.style.padding = "10px 15px";
    backToTop.style.border = "none";
    backToTop.style.borderRadius = "50%";
    backToTop.style.backgroundColor = "#3ddc84";
    backToTop.style.color = "#fff";
    backToTop.style.fontSize = "18px";
    backToTop.style.cursor = "pointer";
    backToTop.style.display = "none";
    backToTop.style.zIndex = "1000";

    document.body.appendChild(backToTop);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    
    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "🌙";
    toggleBtn.style.position = "fixed";
    toggleBtn.style.top = "20px";
    toggleBtn.style.right = "20px";
    toggleBtn.style.padding = "8px 12px";
    toggleBtn.style.border = "none";
    toggleBtn.style.borderRadius = "20px";
    toggleBtn.style.backgroundColor = "#222";
    toggleBtn.style.color = "#fff";
    toggleBtn.style.cursor = "pointer";
    toggleBtn.style.zIndex = "1000";

    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            document.body.style.backgroundColor = "#121212";
            document.body.style.color = "#ffffff";
            toggleBtn.innerText = "☀";
        } else {
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#000000";
            toggleBtn.innerText = "🌙";
        }
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        });
    });

    
    const searchInput = document.createElement("input");
    searchInput.placeholder = "Search topic...";
    searchInput.className = "form-control mb-4";
    document.querySelector(".container.my-5").prepend(searchInput);

    searchInput.addEventListener("keyup", () => {
        const value = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const text = card.innerText.toLowerCase();
            card.style.display = text.includes(value) ? "block" : "none";
        });
    });

});
