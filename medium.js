const problems = [
    {
        title:"Second Largest Element",
        desc:"Given an array of integers, find the second largest element."
    },
    {
        title:"Check Anagram",
        desc:"Given two strings, check whether they are anagrams of each other."
    },
    {
        title:"Kadane’s Algorithm",
        desc:"Find the maximum subarray sum using Kadane’s Algorithm."
    },
    {
        title:"Rotate Array",
        desc:"Rotate an array to the right by K positions."
    },
    {
        title:"Count Frequency of Characters",
        desc:"Count the frequency of each character in a string."
    },
    {
        title:"Two Sum Problem",
        desc:"Find two numbers in an array that add up to a given target."
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
        <p><strong>Difficulty:</strong> Medium</p>
    `;

    document.getElementById("codeArea").value = templates[lang];
}

/* RUN (DEMO) */
function runCode(){
    document.getElementById("output").innerText =
        "Code executed successfully (demo output).";
}

/* SUBMIT (DEMO) */
function submitCode(){
    document.getElementById("output").innerText =
        "Medium problem submitted successfully ✔";
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
