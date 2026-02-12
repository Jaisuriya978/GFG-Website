function showInfo(component, element) {

  const infoBox = document.getElementById("infoBox");
  const cards = document.querySelectorAll(".component-card");

  cards.forEach(card => card.classList.remove("active-card"));
  element.classList.add("active-card");

  let content = "";

  switch(component) {

    case "controller":
      content = "<h5>Controller</h5><p>The controller acts as the brain of the robot. It processes input from sensors and sends commands to actuators. Examples: Arduino, Raspberry Pi, Microcontrollers.</p>";
      content += "<p>Controllers can be programmed using languages like C++, Python, or specialized robotics software. They enable the robot to perform tasks autonomously or semi-autonomously.</p>";
      content += "<p>Advanced controllers may include AI capabilities for decision-making and learning from the environment.</p>";
      content += "<p>Controllers are essential for coordinating the robot's actions and ensuring it operates efficiently and effectively.</p>";
      content += "<p>Choosing the right controller depends on the complexity of the robot, the required processing power, and the specific application.</p>";
      content += "<p>Controllers can also communicate with other devices and systems, allowing for integration into larger networks or IoT ecosystems.</p>";
      content += "<p>Some controllers support real-time operating systems (RTOS) for time-critical applications, ensuring precise control and responsiveness.</p>";
      break;

    case "sensors":
      content = "<h5>Sensors</h5><p>Sensors help robots understand their environment. Examples include ultrasonic sensors, infrared sensors, temperature sensors, and cameras.</p>";
      content += "<p>Sensors provide data that the controller uses to make decisions. For example, a proximity sensor can help a robot avoid obstacles.</p>";
      content += "<p>Advanced sensors like LIDAR and computer vision enable robots to navigate complex environments and perform tasks like object recognition.</p>";
      content += "<p>Sensors can be used for feedback control, allowing the robot to adjust its actions based on real-time data.</p>";
      content += "<p>Choosing the right sensors is crucial for the robot's performance and functionality, depending on the intended application.</p>";
      content += "<p>Sensor fusion techniques can combine data from multiple sensors to improve accuracy and reliability.</p>";
      content += "<p>Proper calibration and maintenance of sensors are essential for ensuring accurate data and optimal robot performance.</p>";
      break;

    case "actuators":
      content = "<h5>Actuators</h5><p>Actuators convert electrical signals into physical movement. Examples: DC motors, Servo motors, Hydraulic actuators.</p>";
        content += "<p>Actuators are responsible for the robot's movement and interaction with the environment. They can control wheels, arms, grippers, and more.</p>";    
        content += "<p>Different types of actuators are suited for different applications. For example, servo motors are ideal for precise control, while hydraulic actuators are used for heavy lifting.</p>"; 
        content += "<p>Actuators can be controlled using various methods, including PWM signals, voltage control, or digital commands from the controller.</p>";    
        content += "<p>Choosing the right actuators is essential for achieving the desired performance and functionality of the robot.</p>";    
        content += "<p>Advanced actuators may include features like feedback sensors for closed-loop control, allowing for more precise and responsive movements.</p>";
        content += "<p>Proper maintenance and calibration of actuators are crucial for ensuring reliable performance and longevity of the robot.</p>";
      break;

    case "power":
      content = "<h5>Power Supply</h5><p>Provides energy required for robot operation. Common sources include batteries, rechargeable lithium packs, and power adapters.</p>";
        content += "<p>Power supply must be chosen based on the robot's energy requirements, size, and intended use. For example, a mobile robot may require a lightweight battery, while an industrial robot may need a more robust power source.</p>";    
        content += "<p>Proper power management is crucial for ensuring the robot operates efficiently and has a sufficient runtime. This may include features like power-saving modes or energy harvesting techniques.</p>";    
        content += "<p>Advanced power systems may include smart battery management, allowing for real-time monitoring of battery health and performance.</p>";  
        content += "<p>Ensuring a stable and reliable power supply is essential for the robot's performance and longevity, as power issues can lead to malfunctions or damage.</p>";    
        content += "<p>In some cases, robots may also utilize renewable energy sources, such as solar panels, to supplement their power supply and reduce reliance on traditional batteries.</p>";
        content += "<p>Proper safety measures should be taken when handling power supplies, especially high-capacity batteries, to prevent accidents and ensure safe operation of the robot.</p>";  
      break;

    case "communication":
        content = "<h5>Communication</h5><p>Enables data exchange between the robot and external devices. Common methods include Wi-Fi, Bluetooth, Zigbee, and cellular networks.</p>";
        content += "<p>Communication allows the robot to receive commands, send data, and interact with other systems. For example, a robot can be controlled remotely via a smartphone app or communicate with other robots in a swarm.</p>";
        content += "<p>Choosing the right communication method depends on factors like range, data rate, power consumption, and the specific application of the robot.</p>";
        content += "<p>Advanced communication systems may include features like encryption for secure data transmission, or support for multiple communication protocols to enhance compatibility and flexibility.</p>";
        content += "<p>Ensuring reliable communication is crucial for the robot's performance, especially in applications where real-time data exchange is required, such as in autonomous vehicles or industrial automation.</p>";
        content += "<p>In some cases, robots may also utilize edge computing or cloud-based services to process data and enhance their capabilities, which requires robust communication infrastructure.</p>";
        content += "<p>Proper management of communication channels is essential for preventing interference and ensuring efficient data transmission, especially in environments with multiple robots or devices.</p>";
    break;

    case "chassis":
        content = "<h5>Chassis</h5><p>The chassis is the structural framework of the robot. It provides support and houses all the components. Common materials include metal, plastic, and composite materials.</p>";
        content += "<p>The design of the chassis can vary greatly depending on the type of robot and its intended application. For example, a mobile robot may have a wheeled or tracked chassis, while a humanoid robot may have a more complex structure to mimic human anatomy.</p>";
        content += "<p>Choosing the right chassis design is crucial for the robot's stability, mobility, and overall performance. Factors to consider include weight distribution, center of gravity, and the ability to withstand environmental conditions.</p>";
        content += "<p>Advanced chassis designs may include features like modularity for easy maintenance and upgrades, or the use of lightweight materials to enhance mobility and energy efficiency.</p>";
        content += "<p>Ensuring the chassis is robust and well-designed is essential for the robot's durability and ability to perform its intended tasks effectively.</p>";
        content += "<p>In some cases, the chassis may also incorporate shock absorption or vibration damping features to protect sensitive components and enhance the robot's performance in rough or uneven terrain.</p>";
        content += "<p>Proper maintenance of the chassis is important for ensuring the longevity and reliability of the robot, especially in applications where it may be exposed to harsh conditions or heavy use.</p>";
    break;

  }

  infoBox.innerHTML = content;
  infoBox.style.display = "block";
}
