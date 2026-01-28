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
    c:`#include <stdio.h>
int main(){
    // Medium problem logic here
    return 0;
}`,
    cpp:`#include <iostream>
using namespace std;
int main(){
    // Medium problem logic here
    return 0;
}`,
    python:`# Medium problem logic here`,
    java:`class Main{
    public static void main(String[] args){
        // Medium problem logic here
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