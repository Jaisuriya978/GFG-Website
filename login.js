function handleLogin() {
    const email = document.querySelector('input[type="email"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();
    const remember = document.getElementById("remember").checked;

    if (email === "" || password === "") {
        alert("Please fill in all fields");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

    
    if (email === "jaisuriya978@gmail.com" && password === "Jjai@0007") {
        if (remember) {
            localStorage.setItem("userEmail", email);
        }
        alert("Login successful 🎉");
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password ❌");
    }
}


window.onload = function () {
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
        document.querySelector('input[type="email"]').value = savedEmail;
        document.getElementById("remember").checked = true;
    }
};
