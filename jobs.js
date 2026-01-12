
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
        company: "Netflix",
        role: "Backend Engineer",
        exp: "2-4 Years",
        salary: "₹10 – 15 LPA",
        type: ["Full Time", "Remote"],
        desc: "Design and implement scalable backend systems.",
        skills: "Python, Node.js, PostgreSQL, Redis, Docker",
        posted: "1 week ago",
        logo: "https://logos-world.net/wp-content/uploads/2020/08/Netflix-Logo.png"
    }
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

        <a href="#" class="apply-btn">Apply Now</a>
    </div>`;
});

