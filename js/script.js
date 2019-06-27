// Global variables

let userSeq = [];
let compSeq = [];
let strictMode = false;
let powerSelection = false;
let sound = false;
let winTheGame;
let loseTheGame;
let round = 1;
let intervalId;
let goodPlay
let compTurn;
let startGame = false;


const countTurn = document.querySelector("#playerturn");
const powerOn = document.querySelector("#power");
const startButton = document.querySelector("#start");
const strictOn = document.querySelector("#strict")
const greenquadrant = document.querySelector("#greenquad");
const redquadrant = document.querySelector("#redquad");
const bluequadrant = document.querySelector("#bluequad");
const yellowquadrant = document.querySelector("#yellowquad");
const maxRound = 20;

// Click the power button to activate the game

powerOn.addEventListener('click', (event) => {
  if (powerOn.checked === true) {
    powerSelection = true
    countTurn.innerHTML = "--";
    startButton.disabled = false;
    strictOn.disabled = false

  }else {
    powerSelection = false
    startButton.disabled = true;
    strictOn.disabled = true;
    countTurn.innerHTML = "";
    clearInterval(intervalId);
    strictOn.checked = false;
  }
});

// Click the start button to start the game
startButton.addEventListener('click', (event) => {
  if (powerSelection == true) {
    playNewGame();
    }
});


// Enable strict button to start strict mode.
strictOn.addEventListener('click',(event) => {
  if(strictOn.disabled = false){
    strictPlay();
  }
});

// Strict play button enabled feature
function strictPlay(){
  round = 1
  compSeq.length = 0;
  setTimeout(function() { compPlay();}, 1800);
}



// Function to play the game
function playNewGame () {
// reset variables

  winTheGame = false;
  userSeq = [];
  sound = true;
  intervalId = 0;
  playTurn = 1;
  countTurn.innerHTML = 1;
  goodPlay = true;
  startGame = true;
  compPlay();

};

function click(num){
  const [audio, quad, lite] = getAttributes(num)
  if(sound){
    audio.play()
  }
  quad.classList.add(lite)
  setTimeout(function(){
    quad.classList.remove(lite)
  }, 800)
}

function getAttributes(num){
  switch (num) {
    case 1:
      return [audio1, greenquadrant, "greenlite"]
    case 2:
      return [audio2, redquadrant, "redlite"]
    case 3:
      return [audio3, bluequadrant, "bluelite"]
    case 4:
      return [audio4, yellowquadrant, "yellowlite"]
  }
}

function randomNumber(){
  return Math.floor(Math.random() * 4) + 1
}

// Computer play function when to start game.
function compPlay() {
  startButton.disabled = true;
  countTurn.innerHTML = round;
  powerSelection = true;
  winTheGame = false;

  if(compSeq.length < round) {
    compSeq.push(randomNumber());
  }

// Generate a set of random button presses
  for (let i = 0; i < compSeq.length; i++) {
    setTimeout(function(){
      let currentPlay = compSeq[i]
      click(currentPlay)
    }, i * 1200)
  }
}


// User play function
function userPlay(quads) {
  var userTurn = userSeq.length

  if (userTurn < round) {

    if (compSeq[userTurn] == quads && round == 20) {
      countTurn.innerHTML == "WIN"

    }
    userSeq.push(quads);
  }
   var userResult = true;
   if(userSeq.length == round) {
     for (var i = 0; i < round ; i++) {
       if (userSeq[i] != compSeq[i]){
         userResult = false;
         failedAttempt();
       }
     }

     if (userResult){
       userSeq = [];
       round ++

       setTimeout(function() { compPlay();}, 1000);
     }
   }
}


// Function to notify user when wrong sequence entered
function failedAttempt() {
  countTurn.innerHTML = "FAIL"
  errorSound.play();
  userSeq = [];

// Failed playerturn with Strict play button enabled
  if (strictOn.checked == true) {
      strictPlay();
      } else {
    setTimeout(function() { compPlay();}, 1500);
  }
}


// sound created with each quad pad press
var errorSound = new Audio();
errorSound.src = "http://www.pacdv.com/sounds/interface_sound_effects/sound8.mp3";

var audio1 = new Audio();
audio1.src = "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
greenquad.addEventListener('click', (event) => {
  if (startGame && powerSelection){
    click(1);
    userPlay(1)
  }
});

var audio2 = new Audio();
audio2.src = "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
redquad.addEventListener('click', (event) => {
  if(startGame && powerSelection){
    click(2);
    userPlay(2);
  }
});

var audio3 = new Audio();
audio3.src = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
bluequad.addEventListener('click', (event) => {
  if (startGame && powerSelection){
    click(3);
    userPlay(3);
  }
});

var audio4 = new Audio();
audio4.src = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
yellowquad.addEventListener('click', (event) => {
  if (startGame && powerSelection) {
    click(4);
    userPlay(4);
  }
});
