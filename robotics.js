function showMessage() {
  alert("Robotics combines hardware + software + AI to build the future 🚀");
  alert("Robotics is the science of designing, building, and programming robots 🤖");
  alert("Robots have sensors, actuators, and a control system to interact with the world 🌍");
  alert("Robotics is used in manufacturing, healthcare, space exploration, and more 🌐");
  alert("The future of robotics is exciting with advancements in AI, machine learning, and automation 🌟");
  alert("Robotics is a multidisciplinary field that requires knowledge of engineering, computer science, and mathematics 📚");
  alert("Robotics is transforming industries and improving our daily lives in countless ways 🌈");
  alert("Robotics is not just about machines, it's about creating intelligent systems that can learn and adapt 🤖💡");

}

function highlightCard(id) {
    const cards = document.querySelectorAll(".content-card");
    cards.forEach(card => card.classList.remove("highlight"));
    document.getElementById(id).classList.add("highlight");
    setTimeout(() => {
      document.getElementById(id).classList.remove("highlight");
    }, 2000);
    console.log(`Card ${id} highlighted!`);
    console.log(`Current highlighted card: ${id}`);
    console.log(`Total cards: ${cards.length}`);
    console.log(`Card ${id} content: ${document.getElementById(id).innerText}`);
    console.log(`Card ${id} classes: ${document.getElementById(id).className}`);
    console.log(`Card ${id} highlighted at: ${new Date().toLocaleTimeString()}`);
    console.log(`Card ${id} highlight duration: 2 seconds`);
    console.log(`Card ${id} highlight color: yellow`);
}  