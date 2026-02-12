function showArduino(type, element) {

  const infoBox = document.getElementById("infoBox");
  const cards = document.querySelectorAll(".arduino-card");

  cards.forEach(card => card.classList.remove("active-card"));
  element.classList.add("active-card");

  let content = "";

  switch(type) {

    case "uno":
      content = "<h5>Arduino UNO</h5><p>Arduino UNO uses ATmega328P microcontroller and is widely used in robotics, IoT, and automation projects.</p>";
      content += "<p>It has 14 digital I/O pins, 6 analog inputs, and supports USB communication for programming and data transfer.</p>";
      content += "<p>Arduino UNO is ideal for beginners due to its simplicity, extensive documentation, and large community support.</p>";
      content += "<p>It can be programmed using the Arduino IDE, which provides a user-friendly interface and a vast library of code examples for various applications.</p>";
      content += "<p>Arduino UNO is commonly used in robotics projects for controlling motors, reading sensor data, and implementing basic automation tasks.</p>";
      content += "<p>Despite its limitations in processing power and memory compared to more advanced microcontrollers, Arduino UNO remains a popular choice for educational and hobbyist robotics projects due to its ease of use and versatility.</p>";
      content += "<p>Overall, Arduino UNO is a powerful and accessible platform for learning and experimenting with robotics, making it an excellent choice for anyone interested in exploring the world of robotics and embedded systems.</p>";
      break;

    case "nano":
      content = "<h5>Arduino Nano</h5><p>Arduino Nano is small, lightweight, and ideal for embedded robotics projects.</p>";
     content += "<p>It has similar functionality to the UNO but in a compact form factor, making it suitable for projects with space constraints.</p>";
     content += "<p>Arduino Nano can be programmed using the same Arduino IDE and supports a wide range of libraries and shields for robotics applications.</p>";
     content += "<p>Its small size allows it to be easily integrated into robotic systems, making it a popular choice for projects such as drones, wearable robotics, and small autonomous vehicles.</p>";
     content += "<p>Despite its smaller size, Arduino Nano still offers a powerful platform for robotics development, providing ample processing power and I/O capabilities for a wide range of applications.</p>";
     content += "<p>Overall, Arduino Nano is an excellent choice for robotics projects that require a compact and versatile microcontroller, allowing developers to create innovative and efficient robotic systems in a smaller form factor.</p>";
     content += "<p>Whether you're building a small robot, a wearable device, or an embedded system, Arduino Nano provides the functionality and flexibility needed to bring your robotics projects to life.</p>";
      break;

    case "mega":
      content = "<h5>Arduino Mega</h5><p>Arduino Mega has more I/O pins and memory, suitable for complex robotic systems.</p>";
     content += "<p>It features 54 digital I/O pins, 16 analog inputs, and a larger memory capacity compared to the UNO and Nano, making it ideal for projects that require multiple sensors, actuators, or complex algorithms.</p>";
    content += "<p>Arduino Mega is commonly used in advanced robotics projects such as humanoid robots, robotic arms, and autonomous vehicles that require extensive I/O capabilities and processing power.</p>";
    content += "<p>While Arduino Mega offers enhanced capabilities, it may be more complex to use for beginners compared to the UNO and Nano, so it's recommended for those with some experience in robotics and microcontroller programming.</p>";
    content += "<p>Overall, Arduino Mega is a powerful platform for robotics development, providing the necessary resources for building complex and sophisticated robotic systems that can handle a wide range of tasks and applications.</p>";
    content += "<p>Whether you're working on a large-scale robotics project or need additional I/O capabilities, Arduino Mega offers the performance and flexibility needed to bring your robotic vision to life.</p>";
    content += "<p>In summary, Arduino Mega is an excellent choice for robotics projects that require extensive I/O capabilities and processing power, allowing developers to create advanced and feature-rich robotic systems with ease.</p>";
      break;

    case "why":
      content = "<h5>Why Arduino?</h5><p>Arduino is easy to learn, low-cost, open-source, and supported by a huge community.</p>";
content += "<p>It provides a simple and accessible platform for learning robotics and embedded systems, making it ideal for beginners and hobbyists.</p>";
content += "<p>Arduino's open-source nature allows for extensive customization and flexibility, enabling developers to create a wide range of robotic projects with ease.</p>";
content += "<p>With a vast library of code examples and a supportive community, Arduino makes it easy to get started with robotics and quickly bring your ideas to life.</p>";
content += "<p>Whether you're building a simple robot or a complex autonomous system, Arduino provides the tools and resources needed to succeed in your robotics journey.</p>";
content += "<p>Overall, Arduino is a powerful and versatile platform that has revolutionized the world of robotics, making it accessible to everyone and fostering innovation in the field.</p>";
content += "<p>From educational projects to professional applications, Arduino continues to be a driving force in the robotics community, empowering developers to create innovative and impactful robotic systems that can change the world.</p>";
break;
  }

  infoBox.innerHTML = content;
  infoBox.style.display = "block";
}

function simulateArduino() {
  alert("void loop() {\n  digitalWrite(LED_BUILTIN, HIGH);\n  delay(1000);\n  digitalWrite(LED_BUILTIN, LOW);\n  delay(1000);\n}");
  alert("This code will blink the built-in LED on an Arduino board, demonstrating a simple robotics application.");
alert("You can modify the code to control motors, read sensors, and create more complex robotic behaviors!");
}
