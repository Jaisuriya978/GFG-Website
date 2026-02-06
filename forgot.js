function resetPassword() {
      const email = document.getElementById("email").value;
      const message = document.getElementById("message");

      if (email === "") {
        message.textContent = "Please enter your email address";
        message.className = "message error";
        return;
      }
      message.textContent = "Password reset link sent to your email!";
      message.className = "message success";
    }