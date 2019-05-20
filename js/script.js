// declare variables

let userSeq = [];
let compSeq = [];
let strictMode = false;
let power = false;
let sound = true;
let winTheGame;
let userTurn = document.querySelector("#playerturn");
let intervalId;
let buttonFlash;
let goodPlay
let compTurn;


const countTurn = document.querySelector("#playerturn");
const powerOn = document.querySelector("#power");
const startButton = document.querySelector("#start");
const strictOn = document.querySelector("#strict")
const greenquadrant = document.querySelector("#greenquad");
const redquadrant = document.querySelector("#redquad");
const bluequadrant = document.querySelector("#bluequad");
const yellowquadrant = document.querySelector("#yellowquad");

// start the GAME

powerOn.addEventListener('click', (event) => {
  if (powerOn.click == true) {
    powerOn == true
    userTurn.innerHTML = "_";

  }else {
    powerOn == false
    userTurn.innerHTML = "";
  }
});
