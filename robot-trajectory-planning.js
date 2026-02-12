function calculatePosition() {
  let start = parseFloat(document.getElementById("startPos").value);
  let end = parseFloat(document.getElementById("endPos").value);
  let total = parseFloat(document.getElementById("totalTime").value);
  let current = parseFloat(document.getElementById("currentTime").value);

  if (isNaN(start) || isNaN(end) || isNaN(total) || isNaN(current)) {
    alert("Please enter all values");
    return;
  }

  let position = start + (end - start) * (current / total);
  document.getElementById("positionResult").innerText = position.toFixed(2);
}

function startAnimation() {
  let robot = document.getElementById("robot");
  let position = 0;

  robot.style.left = "0px";

  let interval = setInterval(function() {
    position += 2;
    robot.style.left = position + "px";

    if (position >= 400) {
      clearInterval(interval);
    }
  }, 30);
}


function calculatelogesticPosition() {
    let start = parseFloat(document.getElementById("logStartPos").value);
    let end = parseFloat(document.getElementById("logEndPos").value);
    let total = parseFloat(document.getElementById("logTotalTime").value);
    let current = parseFloat(document.getElementById("logCurrentTime").value); 
    if (isNaN(start) || isNaN(end) || isNaN(total) || isNaN(current)) {
        alert("Please enter all values");
        return;
    }   
    let logisticPosition = start + (end - start) / (1 + Math.exp(-10 * (current / total - 0.5)));
    document.getElementById("logPositionResult").innerText = logisticPosition.toFixed(2);  
}

function startLogisticAnimation() {
    let robot = document.getElementById("logisticRobot");
    let position = 0;
    robot.style.left = "0px";
    let interval = setInterval(function() { 
        position += 2;
        robot.style.left = position + "px"; 
        if (position >= 400) {
            clearInterval(interval);
        }
    }, 30);
}   

function calculateCubicPosition() {
    let start = parseFloat(document.getElementById("cubicStartPos").value);
    let end = parseFloat(document.getElementById("cubicEndPos").value);
    let total = parseFloat(document.getElementById("cubicTotalTime").value);
    let current = parseFloat(document.getElementById("cubicCurrentTime").value);    
    if (isNaN(start) || isNaN(end) || isNaN(total) || isNaN(current)) {
        alert("Please enter all values");
        return;
    }   
    let t = current / total;    
    let cubicPosition = start + (end - start) * (3 * t * t - 2 * t * t * t);
    document.getElementById("cubicPositionResult").innerText = cubicPosition.toFixed(2);  
}   

function startCubicAnimation() {
    let robot = document.getElementById("cubicRobot");
    let position = 0;
    robot.style.left = "0px";   
    let interval = setInterval(function() { 
        position += 2;
        robot.style.left = position + "px"; 
        if (position >= 400) {
            clearInterval(interval);
        }
    }, 30);
}
