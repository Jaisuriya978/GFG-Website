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

  document.getElementById("jobSearch").addEventListener("input", function () {
    showSuggestions(this.value);
  });

  document.getElementById("jobSearch").addEventListener("blur", hideSuggestions);

  document.getElementById("jobSearch").addEventListener("focus", function () {
    if (this.value.trim() !== "") {
      showSuggestions(this.value);
    } else {
      document.getElementById("suggestions").style.display = "none";
    } });

  document.getElementById("jobSearch").addEventListener("keydown", function (e) {
    const list = document.getElementById("suggestions");
    const items = list.getElementsByTagName("li");
    let index = -1; 
    
    for (let i = 0; i < items.length; i++) {
      if (items[i].style.background === "rgb(0, 128, 0)") {
        index = i;
        break;
      }
    }

    switch(e.key) {
      case "ArrowDown":
        index = (index + 1) % items.length;
        break;
      case "ArrowUp":
        index = (index - 1 + items.length) % items.length;
        break;
      case "Enter":
        if (index >= 0 && items[index]) {
          document.getElementById("jobSearch").value = items[index].textContent;
          list.style.display = "none";
        }
        return;
      default:
        return;
    }

    for (let i = 0; i < items.length; i++) {
      items[i].style.background = "#2c2e50";
    }

    if (index >= 0 && items[index]) {
      items[index].style.background = "#008000";
    }
  });
  