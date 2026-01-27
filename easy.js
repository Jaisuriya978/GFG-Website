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
    c:`#include <stdio.h>
int main(){
    // easy problem logic here
    return 0;
}`,
    cpp:`#include <iostream>
using namespace std;
int main(){
    // easy problem logic here
    return 0;
}`,
    python:`# easy problem logic here`,
    java:`class Main{
    public static void main(String[] args){
        // easy problem logic here
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
        <p><strong>Difficulty:</strong> Easy</p>
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
        "Easy problem submitted successfully ✔";
}