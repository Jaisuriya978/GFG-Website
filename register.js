function handleRegister(event) {
    event.preventDefault(); 

    const name = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const password = document.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;
    const termsChecked = document.getElementById("terms").checked;

    
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("All fields are required ❗");
        return;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Enter a valid email address ❌");
        return;
    }

    
    if (password.length < 6) {
        alert("Password must be at least 6 characters long 🔐");
        return;
    }

    
    if (password !== confirmPassword) {
        alert("Passwords do not match ❌");
        return;
    }

    
    if (!termsChecked) {
        alert("You must agree to the Terms & Conditions 📜");
        return;
    }

    
    const user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("registeredUser", JSON.stringify(user));

    alert("Account created successfully 🎉");
    window.location.href = "login.html";
}
