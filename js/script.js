// declare variables

let userSeq = [];
let compSeq = [];
let strictMode = false;
let power = false;
let sound = true;
let winTheGame;
let loseTheGame;
let playerTurn;
let intervalId;
let quadFlash;
let goodPlay
let compTurn;
// let clearFlash;



const countTurn = document.querySelector("#playerturn");
const powerOn = document.querySelector("#power");
const startButton = document.querySelector("#start");
const strictOn = document.querySelector("#strict")
const greenquadrant = document.querySelector("#greenquad");
const redquadrant = document.querySelector("#redquad");
const bluequadrant = document.querySelector("#bluequad");
const yellowquadrant = document.querySelector("#yellowquad");


// Click the power button to activate the game

powerOn.addEventListener('click', (event) => {
  if (powerOn.checked == true) {
    power = true
    countTurn.innerHTML = "--";

  }else {
    power = false
    countTurn.innerHTML = "";
    // clearFlash();
    clearInterval(intervalId);
  }
});

// Click the start button to start the game
startButton.addEventListener('click', (event) => {
  if (powerOn || winTheGame) {
    playGame();
  }
});


// Function to play the game
function playGame () {
// reset variables
  winTheGame = false;
  compSeq = [];
  userSeq = [];
  sound = true;
  intervalId = 0;
  quadFlash = 0;
  playTurn = 1;
  countTurn.innerHTML = 1;
  goodPlay = true;

// Generate a set of random button presses
  for (var i = 0; i < 20; i++) {
    compSeq.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;
  intervalId = setInterval(flashColors, 800);
};



function flashColors() {
  power = false;

  if (quadFlash == countTurn) {
    clearInterval(intervalId);
    compSeq = false;
    // clearFlash();
    powerOn = true;
  }

  if (compTurn) {
    // clearFlash();

  }
};


// sound created with each quad pad press
var audio1 = new Audio();
audio1.src = "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
greenquad.addEventListener('click', (event) => {
  audio1.play()
});

var audio2 = new Audio();
audio2.src = "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
redquad.addEventListener('click', (event) => {
  audio2.play();
});

var audio3 = new Audio();
audio3.src = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
bluequad.addEventListener('click', (event) => {
  audio3.play()
});

var audio4 = new Audio();
audio4.src = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
yellowquad.addEventListener('click', (event) => {
  audio4.play()
});
