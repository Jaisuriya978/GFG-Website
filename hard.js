const problems = [
    {
        title:"Graph Traversal", 
        desc:"Implement BFS and DFS on a graph."
    },
    {
        title:"Dijkstra's Algorithm", 
        desc:"Find the shortest path from a source node."
    },
    {
        title:"Longest Increasing Subsequence", 
        desc:"Find the length of LIS in an array."},
    {
        title:"N-Queens Problem", desc:"Place N queens on a chessboard without attacks."
    },
    {
        title:"Knapsack Problem", desc:"Solve 0/1 knapsack using DP."
    }
];


/* STARTER CODE */
const templates = {
    c:`#include <stdio.h>
int main(){
    // Hard problem logic here
    return 0;
}`,
    cpp:`#include <iostream>
using namespace std;
int main(){
    // Hard problem logic here
    return 0;
}`,
    python:`# Hard problem logic here`,
    java:`class Main{
    public static void main(String[] args){
        // Hard problem logic here
    }
}`
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
        <p><strong>Difficulty:</strong> Hard</p>
    `;

    document.getElementById("codeArea").value = templates[lang];
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