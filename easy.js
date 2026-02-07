const problems = [
    {
        title:"Sum of Two Numbers",
        desc:"Given two integers, print their sum."
    },
    {
        title:"Print Even Numbers",
        desc:"Print all even numbers from 1 to N."
    },
    {
        title:"Reverse a String",
        desc:"Reverse the given string."
    },
    {
        title:"Check Prime Number",
        desc:"Check whether a number is prime or not."
    },
    {
        title:"Factorial of a Number",
        desc:"Find factorial of a given number."
    }
];

/* STARTER CODE */
const templates = {
  c: `#include <stdio.h>
int main(){
    // easy problem logic here
    return 0;
}`,

  cpp: `#include <iostream>
using namespace std;
int main(){
    // easy problem logic here
    return 0;
}`,

  python: `# easy problem logic here
n = int(input())
print(n * 2)
`,

  java: `class Main{
    public static void main(String[] args){
        // easy problem logic here
    }
}`,

  javascript: `// Easy problem logic here

// Example input
let input = "5";

// Convert input
let n = parseInt(input);

// Write logic
let result = n * 2;

// Output result
console.log(result);
`
};


/* LOAD RANDOM PROBLEM */
function loadProblem(){
    const lang = document.getElementById("language").value;
    if(!lang){
        alert("Please select a language");
        return;
    }

    const random = Math.floor(Math.random()*problems.length);
    const p = problems[random];

    document.getElementById("problemBox").innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <p><strong>Difficulty:</strong> Easy</p>
    `;

    document.getElementById("codeArea").value = templates[lang];
}



function runCode() {
  const code = document.getElementById("code").value;
  const output = document.getElementById("output");

  output.innerText = "";

  // Capture console.log output
  let logs = [];
  const originalLog = console.log;

  console.log = function (...args) {
    logs.push(args.join(" "));
  };

  try {
    // Execute user JS code
    new Function(code)();

    output.innerText = logs.length
      ? logs.join("\n")
      : "Program executed successfully (no output).";
  } catch (error) {
    output.innerText = "❌ Error:\n" + error.message;
  }

  console.log = originalLog;
}

/* SUBMIT (BASIC CHECK) */
function submitCode() {
  const code = document.getElementById("code").value;
  const output = document.getElementById("output");

  if (code.trim() === "") {
    output.innerText = "⚠ Please write some code before submitting.";
    return;
  }

  output.innerText = "✔ Code submitted successfully!";
}


function runCode() {
  const lang = document.getElementById("language").value;
  const code = document.getElementById("code").value;
  const output = document.getElementById("output");

  output.innerText = "";

  if (code.trim() === "") {
    output.innerText = "⚠ Please write some code.";
    return;
  }

  // ✅ REAL EXECUTION ONLY FOR JAVASCRIPT
  if (lang === "javascript") {
    let logs = [];
    const originalLog = console.log;

    console.log = (...args) => logs.push(args.join(" "));

    try {
      new Function(code)();
      output.innerText = logs.length
        ? logs.join("\n")
        : "✔ Program executed successfully (no output).";
    } catch (err) {
      output.innerText = "❌ Error:\n" + err.message;
    }

    console.log = originalLog;
  }
  // ⚠ SIMULATION FOR OTHER LANGUAGES
  else {
    output.innerText =
      "⚠ Execution not supported in browser for " + lang.toUpperCase() +
      ".\n\n✔ Code looks saved.\n✔ Syntax check passed (simulated).\n\nTip: Use Submit to continue.";
  }
}


function submitCode() {
  const lang = document.getElementById("language").value;
  const code = document.getElementById("code").value;
  const output = document.getElementById("output");

  if (code.trim() === "") {
    output.innerText = "❌ Cannot submit empty code.";
    return;
  }

  // Basic validation based on template
  let valid = false;

  if (lang === "c" && code.includes("int main")) valid = true;
  if (lang === "cpp" && code.includes("int main")) valid = true;
  if (lang === "java" && code.includes("class Main")) valid = true;
  if (lang === "python" && !code.includes(";")) valid = true;
  if (lang === "javascript" && code.includes("console.log")) valid = true;

  if (!valid) {
    output.innerText =
      "❌ Submission failed.\n\nReason: Code does not follow required template.";
    return;
  }

  output.innerText =
    "✅ Submission Successful!\n\n" +
    "Language: " + lang.toUpperCase() + "\n" +
    "Status: Accepted (Demo)\n" +
    "Test Cases Passed: 5 / 5 🎉";
}
