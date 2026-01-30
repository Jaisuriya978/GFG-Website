const jobs = [
    "Frontend Developer", "Backend Developer", "Full Stack Developer", "UI/UX Designer", "Web Developer", "Software Engineer", "React Developer",
    "Angular Developer", "Node.js Developer", "Python Developer", "Java Developer", "DevOps Engineer", "Data Analyst", "Data Scientist", "System Engineer"
  ];

  function showSuggestions(value) {
    const list = document.getElementById("suggestions");
    list.innerHTML = "";

    if (value.trim() === "") {
      list.style.display = "none";
      return;
    }

    const filtered = jobs.filter(job =>
      job.toLowerCase().includes(value.toLowerCase())
    );

    filtered.forEach(job => {
      const li = document.createElement("li");
      li.textContent = job;
      li.style.padding = "8px";
      li.style.cursor = "pointer";

      li.onmousedown = function () {
        document.getElementById("jobSearch").value = job;
        list.style.display = "block";
      };

      li.onmouseover = () => li.style.background = "#008000";
      li.onmouseout = () => li.style.background = "#2c2e50";

      list.appendChild(li);
    });

    list.style.display = filtered.length ? "block" : "none";
  }

  function hideSuggestions() {
    setTimeout(() => {
      document.getElementById("suggestions").style.display = "none";
    }, 200);
  }