
const jobs = [
    {
        company: "Google",
        role: "Java Software Developer",
        exp: "2-4 Years",
        salary: "₹10 – 14 LPA",
        type: ["Full Time", "Remote"],
        desc: "Build high-quality applications for millions of users.",
        skills: "Core Java, Spring Boot, SQL, Git, JUnit",
        posted: "5 days ago",
        logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
    },
    {
        company: "Amazon",
        role: "AWS Cloud Engineer",
        exp: "2-4 Years",
        salary: "₹10 – 16 LPA",
        type: ["Remote", "Full Time"],
        desc: "Work on scalable cloud-based systems.",
        skills: "AWS, Linux, Networking, CI/CD",
        posted: "1 week ago",
        logo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
    },
    {
        company: "Facebook",
        role: "Data Scientist",
        exp: "3-5 Years",
        salary: "₹12 – 18 LPA",
        type: ["Full Time", "Remote"],
        desc: "Analyze large datasets to drive business decisions.",
        skills: "Python, R, SQL, Machine Learning",
        posted: "2 weeks ago",
        logo: "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
    },
    {
        company: "infosys",
        role: "System Engineer",
        exp: "1-3 Years",
        salary: "₹8 – 12 LPA",
        type: ["Full Time", "Remote"],
        desc: "Support and maintain enterprise systems.",
        skills: "Java, Python, SQL, Networking",
        posted: "3 days ago",
        logo: " https://static.vecteezy.com/system/resources/previews/020/336/451/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg"
    },
];

const jobList = document.getElementById("jobList");

jobs.forEach(job => {
    jobList.innerHTML += `
    <div class="job-card featured">
        <div class="company-logo">
            <img src="${job.logo}">
        </div>
        <p class="company">${job.company}</p>
        <h3>${job.role}</h3>

        <div class="job-info">
            <span>💼 ${job.exp}</span>
            <span>💰 ${job.salary}</span>
        </div>

        ${job.type.map(t => 
            `<span class="tag ${t.toLowerCase().replace(" ", "")}">${t}</span>`
        ).join("")}

        <p class="desc">${job.desc}</p>

        <p class="skills"><strong>Skills:</strong> ${job.skills}</p>
        <p class="posted">Posted ${job.posted}</p>

        <button class="apply-btn">Apply Now</button>
    </div>`;

    jobList.appendChild(card);
    const applyButtons = document.querySelectorAll('.apply-btn');
    applyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Application process started!');
            this.disabled = true;
            this.innerText = 'Applied';
            this.style.backgroundColor = '#4CAF50';
            this.style.cursor = 'not-allowed';
        });
    });

    const modal = document.getElementById("jobModal");
    const modalContent = document.querySelector(".modal-content");
    const closeModal = document.querySelector(".close");

    card.addEventListener("click", () => {
        modal.style.display = "block";
        modalContent.innerHTML = `
            <span class="close">&times;</span>
            <h2>${job.role}</h2>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Experience:</strong> ${job.exp}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
            <p><strong>Type:</strong> ${job.type.join(", ")}</p>
            <p><strong>Description:</strong> ${job.desc}</p>
            <p><strong>Skills:</strong> ${job.skills}</p>
        `;
    }); 
    closeModal.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        };

        applyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Application submitted successfully!');
            selectedJob.button.textContent = 'Applied';
            selectedJob.button.disabled = true;
            selectedJob.button.style.backgroundColor = '#4CAF50';
            selectedJob.button.style.cursor = 'not-allowed';        
            applyForm.reset();
            modal.style.display = "none";
        });
    }

    const applyBtn = card.querySelector('.apply-btn');
    applyBtn.addEventListener('click', (e) => {
        e.stopPropagation();    
        selectedJob = { job, button: applyBtn };
        modal.style.display = "block";
        modalContent.innerHTML = `
            <span class="close">&times;</span>
            <h2>${job.role}</h2>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Experience:</strong> ${job.exp}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
            <p><strong>Type:</strong> ${job.type.join(", ")}</p>
            <p><strong>Description:</strong> ${job.desc}</p>
            <p><strong>Skills:</strong> ${job.skills}</p>
        `;
    });

});