function showSensor(sensor, element) {

  const infoBox = document.getElementById("infoBox");
  const cards = document.querySelectorAll(".sensor-card");

  cards.forEach(card => card.classList.remove("active-card"));
  element.classList.add("active-card");

  let content = "";

  switch(sensor) {

    case "motion":
      content = "<h5>Motion Sensor</h5><p>Detects movement in the environment. Commonly used in security systems and automated lighting.</p>";
      content += "<p>Motion sensors use various technologies such as infrared, ultrasonic, or microwave detection to sense movement.</p>";
      content += "<p>They are widely used in robotics for applications such as security monitoring, human-robot interaction, and environmental awareness.</p>";
      content += "<p>Motion sensors are relatively inexpensive and easy to integrate into robotic systems, making them a popular choice for hobbyist and educational robotics projects.</p>";
        content += "<p>However, motion sensors can be affected by environmental factors such as temperature changes, direct sunlight, and the presence of multiple moving objects, which can impact their accuracy.</p>";
        content += "<p>Despite these limitations, motion sensors remain a valuable tool in the field of robotics for providing movement detection and enabling robots to interact with their surroundings.</p>";
        content += "<p>In addition to movement detection, motion sensors can also be used for applications such as gesture recognition, object tracking, and even autonomous navigation in some advanced systems.</p>";
      break;

    case "ultrasonic":
        content = "<h5>Ultrasonic Sensor</h5><p>Measures distance using sound waves. Commonly used for obstacle detection and navigation.</p>";
        content += "<p>Ultrasonic sensors emit high-frequency sound waves and measure the time it takes for the waves to bounce back after hitting an object, allowing them to calculate distance.</p>";
        content += "<p>They are widely used in robotics for applications such as obstacle avoidance, distance measurement, and mapping the environment.</p>";
        content += "<p>Ultrasonic sensors are relatively affordable and easy to use, making them a popular choice for both hobbyist and professional robotics projects.</p>";
        content += "<p>However, ultrasonic sensors can be affected by factors such as temperature, humidity, and the shape of the object being detected, which can impact their accuracy.</p>";
        content += "<p>Despite these limitations, ultrasonic sensors remain a valuable tool in robotics for providing distance measurement and enabling robots to navigate their environment effectively.</p>";
        content += "<p>In addition to distance measurement, ultrasonic sensors can also be used for applications such as level sensing, object detection in low-light conditions, and even gesture recognition in some advanced systems.</p>";
    break;

    case "proximity":
        content = "<h5>Proximity Sensor</h5><p>Detects the presence of nearby objects without physical contact. Used in touchless interfaces and obstacle detection.</p>";
        content += "<p>Proximity sensors use various technologies such as capacitive, inductive, or photoelectric detection to sense the presence of objects within a certain range.</p>";
        content += "<p>They are commonly used in robotics for applications such as obstacle avoidance, human-robot interaction, and automated systems that require touchless operation.</p>";
        content += "<p>Proximity sensors are typically compact and easy to integrate into robotic systems, making them a popular choice for a wide range of applications.</p>";
        content += "<p>However, proximity sensors can be affected by environmental factors such as dust, moisture, and electromagnetic interference, which can impact their performance.</p>";
        content += "<p>Despite these challenges, proximity sensors remain an essential component in robotics for enabling robots to detect and interact with their surroundings without physical contact.</p>";
        content += "<p>In addition to object detection, proximity sensors can also be used for applications such as gesture recognition, presence detection in security systems, and even automated lighting control in some advanced systems.</p>";
    break;

    case "infrared":
      content = "<h5>Infrared Sensor</h5><p>Detects objects and motion using infrared radiation. Frequently used in line-following robots.</p>";
        content += "<p>Infrared sensors emit infrared light and measure the reflection to detect objects or motion. They are commonly used in robotics for applications such as obstacle detection, line following, and remote control.</p>";
        content += "<p>Infrared sensors are often used in combination with other sensors to provide more comprehensive data about the robot's environment, enhancing its ability to navigate and interact effectively.</p>";
        content += "<p>While infrared sensors are effective for certain applications, they can be limited by factors such as ambient light interference and the reflective properties of surfaces, which can affect their performance.</p>";
        content += "<p>Despite these challenges, infrared sensors remain a popular choice in robotics due to their simplicity, low cost, and versatility in various applications.</p>";
        content += "<p>In addition to their use in robotics, infrared sensors are also commonly found in consumer electronics, security systems, and industrial automation for tasks such as motion detection and object recognition.</p>";
        content += "<p>Overall, infrared sensors play a crucial role in enabling robots to perceive and interact with their environment, contributing to the advancement of robotics technology.</p>";
      break;

    case "temperature":
      content = "<h5>Temperature Sensor</h5><p>Measures heat levels in the environment. Used in industrial and medical robotics.</p>";
        content += "<p>Temperature sensors are essential in robotics for monitoring and controlling the operating conditions of robotic systems. They help ensure that components do not overheat and that the robot functions within safe temperature ranges.</p>";
        content += "<p>In industrial applications, temperature sensors are used in manufacturing processes to monitor equipment temperatures and maintain optimal performance. In medical robotics, they are crucial for ensuring patient safety and proper operation of medical devices.</p>";
        content += "<p>Temperature sensors can be contact or non-contact types, depending on the application requirements. They are often integrated into robotic systems to provide real-time feedback on thermal conditions.</p>";
        content += "<p>Proper use of temperature sensors can enhance the reliability and longevity of robotic systems by preventing overheating and ensuring that components operate within their specified temperature ranges.</p>";
        content += "<p>As robotics technology continues to evolve, the role of temperature sensors will become increasingly important in ensuring the safe and efficient operation of robots across various industries.</p>";
        content += "<p>In addition to their use in robotics, temperature sensors are also widely used in other fields such as environmental monitoring, automotive systems, and consumer electronics for applications like climate control and thermal management.</p>";
      break;

    case "camera":
      content = "<h5>Camera Sensor</h5><p>Provides vision capability. Used in AI-based robots, facial recognition, and surveillance systems.</p>";
        content += "<p>Camera sensors are a critical component in robotics for enabling vision-based applications. They allow robots to perceive their environment, recognize objects, and make informed decisions based on visual data.</p>";
        content += "<p>In AI-based robots, camera sensors are used for tasks such as facial recognition, object detection, and navigation. They provide the visual input necessary for machine learning algorithms to analyze and interpret the surroundings.</p>";
        content += "<p>Camera sensors can be used in various types of robots, including autonomous vehicles, drones, and humanoid robots, to enhance their capabilities and enable them to interact more effectively with their environment.</p>";
        content += "<p>While camera sensors offer powerful vision capabilities, they can also present challenges such as processing large amounts of data and dealing with varying lighting conditions, which can affect their performance.</p>";
        content += "<p>Despite these challenges, camera sensors remain a fundamental technology in robotics, driving advancements in areas such as computer vision and artificial intelligence.</p>";
        content += "<p>As robotics continues to evolve, the integration of advanced camera sensors will play a crucial role in enabling robots to perform complex tasks and operate autonomously in dynamic environments.</p>";
      break;
  }

  infoBox.innerHTML = content;
  infoBox.style.display = "block";
}

function hideInfo() {   
    const infoBox = document.getElementById("infoBox");
    infoBox.style.display = "none";
    const cards = document.querySelectorAll(".sensor-card");
    cards.forEach(card => card.classList.remove("active-card"));
}
