function showApp(type, element) {

  const infoBox = document.getElementById("infoBox");
  const cards = document.querySelectorAll(".app-card");

  cards.forEach(card => card.classList.remove("active-card"));
  element.classList.add("active-card");

  let content = "";

  switch(type) {

    case "manufacturing":
      content = "<h5>Manufacturing Robotics</h5><p>Robots perform welding, painting, assembly, and packaging with high precision and efficiency.</p>";
      content += "<p>Manufacturing robots are widely used in industries such as automotive, electronics, and consumer goods to improve productivity and reduce labor costs.</p>";
content += "<p>These robots can operate 24/7 without fatigue, ensuring consistent quality and faster production cycles, which is essential for meeting market demands.</p>";
content += "<p>Advanced manufacturing robots may include features like machine learning and AI capabilities, allowing them to adapt to changing production requirements and optimize their performance over time.</p>";
content += "<p>Overall, manufacturing robotics has revolutionized the way products are made, enabling companies to achieve higher efficiency, better quality, and greater flexibility in their production processes.</p>";
content += "<p>From small-scale operations to large industrial facilities, manufacturing robots continue to play a crucial role in driving innovation and competitiveness in the global market.</p>";
      break;

    case "medical":
      content = "<h5>Medical Robotics</h5><p>Surgical robots assist doctors in complex operations, improving accuracy and reducing recovery time.</p>";
      content += "<p>Medical robots are used in various applications, including surgery, rehabilitation, diagnostics, and patient care, enhancing the capabilities of healthcare professionals and improving patient outcomes.</p>";
content += "<p>These robots can perform minimally invasive procedures with high precision, reducing the risk of complications and promoting faster recovery for patients.</p>";
content += "<p>Advanced medical robots may include features like AI-driven diagnostics, remote operation capabilities, and integration with electronic health records, enabling more personalized and efficient healthcare delivery.</p>";
content += "<p>Overall, medical robotics is transforming the healthcare industry by providing innovative solutions that enhance the quality of care, improve patient outcomes, and expand access to medical services around the world.</p>";
content += "<p>From robotic-assisted surgeries to telemedicine applications, medical robots continue to play a vital role in advancing healthcare technology and improving the lives of patients worldwide.</p>";
      break;

    case "space":
      content = "<h5>Space Robotics</h5><p>Robots explore planets, collect samples, and perform tasks in environments unsafe for humans.</p>";
content += "<p>Space robots are essential for exploring the cosmos, conducting scientific research, and supporting human space missions by performing tasks that are too dangerous or impractical for astronauts.</p>";
content += "<p>These robots can operate in extreme conditions, such as high radiation, low gravity, and extreme temperatures, making them invaluable tools for space exploration and research.</p>";
content += "<p>Advanced space robots may include features like autonomous navigation, AI-driven decision-making, and the ability to repair themselves or other equipment, enhancing their capabilities and longevity in space missions.</p>";
content += "<p>Overall, space robotics is a critical component of our efforts to explore and understand the universe, enabling us to reach new frontiers and expand our knowledge of the cosmos.</p>";
content += "<p>From robotic rovers on Mars to autonomous spacecraft exploring distant planets, space robots continue to play a vital role in advancing our understanding of the universe and paving the way for future human exploration.</p>";
      break;

    case "defense":
      content = "<h5>Defense Robotics</h5><p>Used for surveillance, bomb disposal, and battlefield support.</p>";
content += "<p>Defense robots are designed to enhance the capabilities of military and security forces by performing tasks such as surveillance, reconnaissance, bomb disposal, and combat support.</p>";
content += "<p>These robots can operate in hazardous environments, providing valuable intelligence and support while minimizing risks to human personnel.</p>";
content += "<p>Advanced defense robots may include features like AI-driven target recognition, autonomous navigation, and the ability to operate in swarms for coordinated missions, enhancing their effectiveness in complex scenarios.</p>";
content += "<p>Overall, defense robotics is transforming the landscape of modern warfare and security operations, providing innovative solutions that enhance the capabilities of military and security forces while reducing risks to human personnel.</p>";
content += "<p>From unmanned aerial vehicles (UAVs) to ground-based robots, defense robotics continues to play a crucial role in advancing military technology and ensuring the safety and security of nations around the world.</p>";
      break;

    case "agriculture":
      content = "<h5>Agricultural Robotics</h5><p>Robots help in planting, harvesting, irrigation, and crop monitoring.</p>";
content += "<p>Agricultural robots are revolutionizing farming practices by automating tasks such as planting, harvesting, irrigation, and crop monitoring, improving efficiency and sustainability in agriculture.</p>";
content += "<p>These robots can operate in various conditions, providing farmers with valuable data and support to optimize crop yields and reduce labor costs.</p>";
content += "<p>Advanced agricultural robots may include features like AI-driven crop analysis, autonomous navigation, and the ability to perform precision farming techniques, enhancing their capabilities and impact on modern agriculture.</p>";
content += "<p>Overall, agricultural robotics is transforming the way we grow food, enabling farmers to produce more with less resources while promoting sustainable farming practices that benefit both the environment and society.</p>";
content += "<p>From autonomous tractors to drone-based crop monitoring, agricultural robots continue to play a vital role in advancing farming technology and ensuring food security for a growing global population.</p>";
      break;

    case "home":
      content = "<h5>Home & Service Robots</h5><p>Robots like vacuum cleaners and assistants help with daily household tasks.</p>";
content += "<p>Home and service robots are designed to assist with daily household tasks, providing convenience and improving the quality of life for users by performing functions such as cleaning, cooking, and personal assistance.</p>";
content += "<p>These robots can operate in domestic environments, offering support for tasks that may be time-consuming or physically demanding, allowing users to focus on other activities.</p>";
content += "<p>Advanced home and service robots may include features like voice recognition, AI-driven personalization, and the ability to learn user preferences, enhancing their functionality and user experience.</p>";
content += "<p>Overall, home and service robots are transforming the way we live, providing innovative solutions that enhance convenience, improve efficiency, and promote independence for users of all ages.</p>";
content += "<p>From robotic vacuum cleaners to personal assistants, home and service robots continue to play a crucial role in advancing domestic technology and improving the lives of people around the world.</p>";
      break;
  }

  infoBox.innerHTML = content;
  infoBox.style.display = "block";
}
