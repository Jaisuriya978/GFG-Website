function showPi(type, element) {

  const infoBox = document.getElementById("infoBox");
  const cards = document.querySelectorAll(".pi-card");

  cards.forEach(card => card.classList.remove("active-card"));
  element.classList.add("active-card");

  let content = "";

  switch(type) {

    case "pi4":
      content = "<h5>Raspberry Pi 4</h5><p>Raspberry Pi 4 is a mini-computer capable of running Linux OS. Used for AI robots, automation, and IoT systems.</p>";
content += "<p>It features a quad-core ARM Cortex-A72 CPU, up to 8GB of RAM, USB 3.0 ports, and Gigabit Ethernet, making it powerful enough for complex robotics applications.</p>";
content += "<p>Raspberry Pi 4 supports a wide range of programming languages and libraries, including Python, C++, and AI frameworks like TensorFlow, making it ideal for developing smart robots with advanced capabilities.</p>";
content += "<p>With its versatility and extensive community support, Raspberry Pi 4 is a popular choice for robotics enthusiasts, educators, and professionals looking to create innovative robotic systems.</p>";
content += "<p>Whether you're building a simple robot or a sophisticated autonomous system, Raspberry Pi 4 provides the processing power and flexibility needed to bring your robotics projects to life.</p>";
content += "<p>Overall, Raspberry Pi 4 is a powerful and accessible platform for robotics development, enabling developers to create intelligent and capable robots that can interact with their environment and perform a wide range of tasks.</p>";
content += "<p>From educational projects to professional applications, Raspberry Pi 4 continues to be a driving force in the robotics community, empowering developers to innovate and push the boundaries of what's possible with robotics technology.</p>";
break;
      

    case "zero":
      content = "<h5>Raspberry Pi Zero</h5><p>Small and low-cost board suitable for compact robotics projects.</p>";
      content += "<p>Raspberry Pi Zero is a smaller and more affordable version of the Raspberry Pi, making it ideal for robotics projects with space constraints or limited budgets.</p>";
content += "<p>Despite its smaller size, Raspberry Pi Zero still offers a powerful platform for robotics development, providing ample processing power and connectivity options for a wide range of applications.</p>";
content += "<p>Raspberry Pi Zero can be used in various robotics projects, including drones, wearable robotics, and small autonomous vehicles, where its compact form factor allows for easy integration into tight spaces.</p>";
content += "<p>Overall, Raspberry Pi Zero is an excellent choice for robotics projects that require a compact and cost-effective solution, enabling developers to create innovative and efficient robotic systems without breaking the bank.</p>";
content += "<p>Whether you're building a small robot, a wearable device, or an embedded system, Raspberry Pi Zero provides the functionality and flexibility needed to bring your robotics projects to life in a smaller form factor.</p>";
content += "<p>In summary, Raspberry Pi Zero is a powerful and accessible platform for robotics development, allowing developers to create intelligent and capable robots that can perform a wide range of tasks while fitting into compact spaces.</p>";
      break;

    case "pi5":
content = "<h5>Raspberry Pi 5</h5><p>Latest model with improved performance, ideal for advanced robotics and AI applications.</p>";
content += "<p>Raspberry Pi 5 features a more powerful CPU, increased RAM options, and enhanced connectivity, making it suitable for demanding robotics applications that require high processing power and real-time performance.</p>";
content += "<p>With its support for advanced AI frameworks and libraries, Raspberry Pi 5 enables developers to create sophisticated robots with capabilities such as computer vision, natural language processing, and autonomous decision-making.</p>";
content += "<p>Raspberry Pi 5 is an excellent choice for robotics projects that require cutting-edge performance and advanced features, allowing developers to push the boundaries of what's possible with robotics technology.</p>";
content += "<p>Whether you're building a complex autonomous system or a smart robot with advanced AI capabilities, Raspberry Pi 5 provides the processing power and flexibility needed to bring your robotics projects to life.</p>";
content += "<p>Overall, Raspberry Pi 5 is a powerful and versatile platform for robotics development, enabling developers to create intelligent and capable robots that can interact with their environment and perform a wide range of tasks with enhanced performance.</p>";
content += "<p>From educational projects to professional applications, Raspberry Pi 5 continues to be a driving force in the robotics community, empowering developers to innovate and create impactful robotic systems that can change the world.</p>";
break;

    case "pi3":
content = "<h5>Raspberry Pi 3</h5><p>Raspberry Pi 3 is a versatile board used for robotics, AI, and automation projects.</p>";
content += "<p>It features a quad-core ARM Cortex-A53 CPU, 1GB of RAM, and built-in Wi-Fi and Bluetooth, making it suitable for a wide range of robotics applications.</p>";
content += "<p>Raspberry Pi 3 supports various programming languages and libraries, including Python, C++, and AI frameworks, allowing developers to create smart robots with advanced capabilities.</p>";
content += "<p>With its balance of performance and affordability, Raspberry Pi 3 is a popular choice for robotics enthusiasts, educators, and professionals looking to develop innovative robotic systems.</p>";
content += "<p>Whether you're building a simple robot or a complex autonomous system, Raspberry Pi 3 provides the processing power and connectivity needed to bring your robotics projects to life.</p>";
content += "<p>Overall, Raspberry Pi 3 is a powerful and accessible platform for robotics development, enabling developers to create intelligent and capable robots that can interact with their environment and perform a wide range of tasks.</p>";
content += "<p>From educational projects to professional applications, Raspberry Pi 3 continues to be a driving force in the robotics community, empowering developers to innovate and push the boundaries of what's possible with robotics technology.</p>";
break;

    case "camera":
      content = "<h5>Pi Camera Module</h5><p>Used for image processing, face recognition, and AI-based robotics applications.</p>";
content += "<p>The Pi Camera Module is a high-quality camera designed for use with Raspberry Pi boards, providing excellent image and video capabilities for robotics applications.</p>";
content += "<p>With support for high-resolution images and video recording, the Pi Camera Module is ideal for robotics projects that require vision capabilities, such as object recognition, facial recognition, and navigation.</p>";
content += "<p>By integrating the Pi Camera Module with Raspberry Pi, developers can create smart robots that can perceive and interact with their environment, enabling a wide range of applications from surveillance to autonomous navigation.</p>";
content += "<p>Overall, the Pi Camera Module is a powerful tool for robotics development, allowing developers to enhance their robots with advanced vision capabilities and create intelligent systems that can understand and respond to their surroundings.</p>";
content += "<p>Whether you're building a simple robot or a sophisticated autonomous system, the Pi Camera Module provides the visual input needed to enable your robot to see and interact with the world around it.</p>";
content += "<p>In summary, the Pi Camera Module is an essential component for robotics projects that require vision capabilities, empowering developers to create intelligent and capable robots that can perceive and navigate their environment effectively.</p>";
      break;

    case "why":
      content = "<h5>Why Raspberry Pi?</h5><p>Supports Python, AI libraries, OpenCV, and machine learning — making it perfect for smart robots.</p>";
content += "<p>Raspberry Pi's support for Python and AI libraries like TensorFlow and OpenCV makes it an ideal platform for developing smart robots with advanced capabilities such as computer vision, machine learning, and autonomous decision-making.</p>";
content += "<p>With its powerful processing capabilities and extensive community support, Raspberry Pi enables developers to create intelligent robots that can perceive their environment, learn from data, and make informed decisions based on real-time information.</p>";
content += "<p>Whether you're building a simple robot or a complex autonomous system, Raspberry Pi provides the tools and resources needed to succeed in your robotics journey, making it an excellent choice for both beginners and experienced developers.</p>";
content += "<p>Overall, Raspberry Pi is a powerful and versatile platform that has revolutionized the world of robotics, making it accessible to everyone and fostering innovation in the field.</p>";
content += "<p>From educational projects to professional applications, Raspberry Pi continues to be a driving force in the robotics community, empowering developers to create innovative and impactful robotic systems that can change the world.</p>";
content += "<p>In summary, Raspberry Pi is an essential platform for robotics development, providing the processing power, flexibility, and community support needed to create intelligent and capable robots that can perform a wide range of tasks and applications.</p>";
      break;
  }

  infoBox.innerHTML = content;
  infoBox.style.display = "block";
}

function simulatePython() {
  alert("import RPi.GPIO as GPIO\n\nGPIO.setup(18, GPIO.OUT)\nGPIO.output(18, True)\n# Motor ON");
alert("This code will turn on a motor connected to GPIO pin 18 on a Raspberry Pi, demonstrating a simple robotics application.");
alert("You can modify the code to control multiple motors, read sensors, and create more complex robotic behaviors using Python and Raspberry Pi!");

}
