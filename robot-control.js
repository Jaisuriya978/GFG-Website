function calculatePID() {
  let kp = parseFloat(document.getElementById("kp").value);
  let ki = parseFloat(document.getElementById("ki").value);
  let kd = parseFloat(document.getElementById("kd").value);
  let error = parseFloat(document.getElementById("error").value);

  if (isNaN(kp) || isNaN(ki) || isNaN(kd) || isNaN(error)) {
    alert("Please enter all PID values");
    prompt("Enter Kp value:", "0");
    prompt("Enter Ki value:", "0");
    prompt("Enter Kd value:", "0");
    prompt("Enter Error value:", "0");
    return;
  }

  // Simple PID (no time-based integration for demo)
  let proportional = kp * error;
  let integral = ki * error;
  let derivative = kd * error;

  let output = proportional + integral + derivative;

  document.getElementById("pidResult").innerText = output.toFixed(2);
}
