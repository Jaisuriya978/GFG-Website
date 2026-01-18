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



    const Modal = document.getElementById("applyModal");
const CloseModal = document.getElementById("closeModal");
const jobTitleInput = document.getElementById("jobTitle");

// OPEN MODAL & SET JOB TITLE
document.addEventListener("click", e => {
  if (e.target.classList.contains("apply-btn")) {
    const jobCard = e.target.closest(".job-card");
    const title = jobCard.querySelector("h3").innerText;

    jobTitleInput.value = title;
    modal.style.display = "flex";
  }
});

// CLOSE MODAL
closeModal.onclick = () => modal.style.display = "none";

window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

// FORM SUBMIT
document.getElementById("applyForm").addEventListener("submit", e => {
  e.preventDefault();

  alert("✅ Application Submitted Successfully!");
  modal.style.display = "none";
  e.target.reset();
});


});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("applyForm");
  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page refresh

    // show success message
    successMsg.style.display = "block";

    // disable submit button
    const btn = form.querySelector("button");
    btn.innerText = "Applied";
    btn.disabled = true;
    btn.classList.remove("btn-success");
    btn.classList.add("btn-secondary");
  });
});
