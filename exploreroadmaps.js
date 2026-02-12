function initRoadmaps() {
    const roadmapCards = document.querySelectorAll('.roadmap-card');
    roadmapCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

document.addEventListener('DOMContentLoaded', initRoadmaps);

function filterRoadmaps() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const roadmapCards = document.querySelectorAll('.roadmap-card');    
    roadmapCards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(searchInput)) {
            card.style.display = '';
        }
        else {
            card.style.display = 'none';
        }
    });
}

function toggleCategory(category) {
    const roadmapCards = document.querySelectorAll('.roadmap-card');    
    roadmapCards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = '';
        }
        else {
            card.style.display = 'none';
        }
    });
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}


function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}   