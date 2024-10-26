// User notice
alert("Note: This website is intended for students of Jordan University of Science and Technology.");

// Using strict mode
"use strict";

// Variable declarations
var myInput = document.getElementById("in");
var myCho = document.getElementById("ch");
var myDiv = document.getElementById("di");

var myIn = document.getElementById("input");
var myChos = document.getElementById("cho");
var myDi = document.getElementById("div");

var myInput3 = document.getElementById("input3");
var myChose3 = document.getElementById("chose3");
var myDiv3 = document.getElementById("div3");

var myInput4 = document.getElementById("input4");
var myChose4 = document.getElementById("chose4");
var myDiv4 = document.getElementById("div4");

var myInput5 = document.getElementById("input5");
var myChose5 = document.getElementById("chose5");
var myDiv5 = document.getElementById("div5");

var myInput6 = document.getElementById("input6");
var myChose6 = document.getElementById("chose6");
var myDiv6 = document.getElementById("div6");

var myInput7 = document.getElementById("input7");
var myChose7 = document.getElementById("chose7");
var myDiv7 = document.getElementById("div7");

var numper = document.getElementById("Numper");
var myAv = document.getElementById("av");

// Calculation functions
function calculate() {
    myDiv.innerHTML = myInput.value * myCho.value;
    return myDiv;
}

function cal() {
    myDi.innerHTML = myIn.value * myChos.value;
    return myDi;
}

function three() {
    myDiv3.innerHTML = myInput3.value * myChose3.value;
    return myDiv3;
}

function four() {
    myDiv4.innerHTML = myInput4.value * myChose4.value;
    return myDiv4;
}

function five() {
    myDiv5.innerHTML = myInput5.value * myChose5.value;
    return myDiv5;
}

function six() {
    myDiv6.innerHTML = myInput6.value * myChose6.value;
    return myDiv6;
}

function saven() {
    myDiv7.innerHTML = myInput7.value * myChose7.value;
    return myDiv7;
}

// Average calculation function
function avg() {
    myAv.innerHTML = (
        myInput.value * myCho.value +
        myIn.value * myChos.value +
        myInput3.value * myChose3.value +
        myInput4.value * myChose4.value +
        myInput5.value * myChose5.value +
        myInput6.value * myChose6.value
    ) / numper.value;

    console.log(myAv);
}
