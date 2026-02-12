function showActuator(type, element) {

  const infoBox = document.getElementById("infoBox");
  const cards = document.querySelectorAll(".actuator-card");

  cards.forEach(card => card.classList.remove("active-card"));
  element.classList.add("active-card");

  let content = "";

  switch(type) {

    case "dc":
      content = "<h5>DC Motor</h5><p>DC motors provide continuous rotation and are widely used in mobile robots and robotic wheels.</p>";
        content += "<p>They operate on direct current and can be controlled using voltage or PWM signals to adjust speed and direction.</p>";
        content += "<p>DC motors are relatively simple and cost-effective, making them a popular choice for a wide range of robotic applications, from small hobby projects to larger industrial robots.</p>";
        content += "<p>However, DC motors can be less precise than other types of actuators, such as servo or stepper motors, and may require additional components like encoders for feedback control.</p>";
        content += "<p>Despite these limitations, DC motors remain a fundamental component in robotics for providing reliable and efficient motion control.</p>";
        content += "<p>In addition to their use in robotics, DC motors are also commonly found in various applications such as electric vehicles, household appliances, and industrial machinery for tasks that require continuous rotational motion.</p>";
        content += "<p>Overall, DC motors play a crucial role in enabling robots to move and interact with their environment, contributing to the advancement of robotics technology across various industries.</p>";
      break;

    case "servo":
      content = "<h5>Servo Motor</h5><p>Servo motors provide precise control of angular position. Used in robotic arms and control systems.</p>";
        content += "<p>Servo motors consist of a motor, a feedback sensor, and a control circuit that allows for precise positioning and speed control. They are commonly used in applications that require accurate movement, such as robotic arms, grippers, and pan-tilt mechanisms.</p>";
        content += "<p>Servo motors can be controlled using PWM signals, which allow for precise adjustments to the motor's position and speed. This makes them ideal for tasks that require fine control, such as picking and placing objects or controlling the movement of a robotic arm.</p>";
        content += "<p>While servo motors are more expensive than DC motors, their precision and versatility make them a popular choice for a wide range of robotic applications, from hobbyist projects to advanced industrial robots.</p>";
        content += "<p>In addition to their use in robotics, servo motors are also commonly found in applications such as radio-controlled vehicles, camera gimbals, and automated manufacturing systems for tasks that require precise control of movement.</p>";
        content += "<p>Overall, servo motors play a critical role in enabling robots to perform complex tasks with precision and accuracy, contributing to the advancement of robotics technology across various industries.</p>";
        content += "<p>As robotics technology continues to evolve, the capabilities of servo motors are also advancing, with features such as increased torque, improved feedback systems, and enhanced durability, further expanding their applications in the field of robotics.</p>";
      break;

    case "stepper":
      content = "<h5>Stepper Motor</h5><p>Stepper motors move in fixed steps and are ideal for 3D printers and CNC machines.</p>";
        content += "<p>Stepper motors operate by dividing a full rotation into a number of equal steps, allowing for precise control of position and speed without the need for feedback systems. This makes them ideal for applications such as 3D printers, CNC machines, and robotic arms where accurate positioning is crucial.</p>";
        content += "<p>Stepper motors can be controlled using digital pulses, with each pulse corresponding to a specific step. This allows for precise control of the motor's movement, making them suitable for tasks that require repeatable and accurate positioning.</p>";
        content += "<p>While stepper motors can be more expensive than DC motors, their precision and reliability make them a popular choice for a wide range of robotic applications, from hobbyist projects to advanced industrial robots.</p>";
        content += "<p>In addition to their use in robotics, stepper motors are also commonly found in applications such as automated manufacturing systems, medical devices, and aerospace technology for tasks that require precise control of movement.</p>";
        content += "<p>Overall, stepper motors play a vital role in enabling robots to perform complex tasks with precision and accuracy, contributing to the advancement of robotics technology across various industries.</p>";
        content += "<p>As robotics technology continues to evolve, the capabilities of stepper motors are also advancing, with features such as increased torque, improved efficiency, and enhanced durability, further expanding their applications in the field of robotics.</p>";
      break;

    case "hydraulic":
      content = "<h5>Hydraulic Actuator</h5><p>Hydraulic actuators use pressurized fluid to generate large forces. Used in heavy industrial robots.</p>";
        content += "<p>Hydraulic actuators operate by using pressurized fluid to generate force and movement. They are commonly used in heavy industrial robots, construction equipment, and aerospace applications where high force and power are required.</p>";
        content += "<p>Hydraulic actuators can provide significantly more force than electric motors, making them ideal for tasks such as lifting heavy loads, operating large robotic arms, and performing heavy-duty tasks in manufacturing and construction.</p>";
        content += "<p>While hydraulic actuators can be more complex and expensive than electric motors, their power and reliability make them a popular choice for a wide range of robotic applications, particularly in industries that require heavy lifting and high force.</p>";
        content += "<p>In addition to their use in robotics, hydraulic actuators are also commonly found in applications such as automotive systems, aerospace technology, and industrial machinery for tasks that require high force and power.</p>";
        content += "<p>Overall, hydraulic actuators play a critical role in enabling robots to perform heavy-duty tasks with power and precision, contributing to the advancement of robotics technology across various industries.</p>";
        content += "<p>As robotics technology continues to evolve, the capabilities of hydraulic actuators are also advancing, with features such as improved efficiency, enhanced control systems, and increased durability, further expanding their applications in the field of robotics.</p>";

      break;

    case "pneumatic":
        content = "<h5>Pneumatic Actuator</h5><p>Pneumatic actuators use compressed air to create movement. Used in pick-and-place robots.</p>";
        content += "<p>Pneumatic actuators operate by using compressed air to generate force and movement. They are commonly used in pick-and-place robots, packaging machinery, and automation systems where fast and repetitive motion is required.</p>";
        content += "<p>Pneumatic actuators can provide rapid movement and are often used in applications that require quick response times, such as sorting and assembly lines. They are also relatively simple and cost-effective compared to hydraulic actuators.</p>";
        content += "<p>While pneumatic actuators may not provide the same level of force as hydraulic actuators, their speed and efficiency make them a popular choice for a wide range of robotic applications, particularly in industries that require fast and repetitive motion.</p>";
        content += "<p>In addition to their use in robotics, pneumatic actuators are also commonly found in applications such as automotive systems, industrial automation, and consumer products for tasks that require fast and efficient movement.</p>";
        content += "<p>Overall, pneumatic actuators play a vital role in enabling robots to perform tasks with speed and efficiency, contributing to the advancement of robotics technology across various industries.</p>";
        content += "<p>As robotics technology continues to evolve, the capabilities of pneumatic actuators are also advancing, with features such as improved efficiency, enhanced control systems, and increased durability, further expanding their applications in the field of robotics.</p>";
        break;
    
    case "Thermal":
        content = "<h5>Thermal Actuator</h5><p>Thermal actuators use temperature changes to create movement. Used in micro-robots and precision applications.</p>";
        content += "<p>Thermal actuators operate by using temperature changes to generate movement. They are commonly used in micro-robots, precision applications, and medical devices where small and precise movements are required.</p>";
        content += "<p>Thermal actuators can provide precise control and are often used in applications that require small and delicate movements, such as in micro-robotics and medical devices. They are also relatively simple and cost-effective compared to other types of actuators.</p>";
        content += "<p>While thermal actuators may not provide the same level of force as other types of actuators, their precision and efficiency make them a popular choice for a wide range of robotic applications, particularly in industries that require small and precise movements.</p>";
        content += "<p>In addition to their use in robotics, thermal actuators are also commonly found in applications such as consumer electronics, medical devices, and aerospace technology for tasks that require small and precise movements.</p>";
        content += "<p>Overall, thermal actuators play a crucial role in enabling robots to perform tasks with precision and efficiency, contributing to the advancement of robotics technology across various industries.</p>";
        content += "<p>As robotics technology continues to evolve, the capabilities of thermal actuators are also advancing, with features such as improved efficiency, enhanced control systems, and increased durability, further expanding their applications in the field of robotics.</p>";
        break;

    }
infoBox.innerHTML = content;
infoBox.style.display = "block";

}

function hideInfo() { 
    document.getElementById("infoBox").style.display = "none"; 
} 


function simulateMotor() {
  const speed = Math.floor(Math.random() * 5000) + 1000;
  alert("DC Motor Speed: " + speed + " RPM");
}
