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

/* RUN (DEMO) */
function runCode(){
    document.getElementById("output").innerText =
        "Code executed successfully (demo output).";
}

/* SUBMIT (DEMO) */
function submitCode(){
    document.getElementById("output").innerText =
        "Hard problem submitted successfully ✔";
}