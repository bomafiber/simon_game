// declare variables

let userSeq = [];
let compSeq = [];
let strictMode = false;
let powerSelection = false;
let sound = false;
let winTheGame;
let loseTheGame;
let round = 1;
let intervalId;
let quadFlash;
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
  if (powerOn.checked == true) {
    powerSelection = true
    countTurn.innerHTML = "--";
    startButton.disabled = false;
    strictOn.disabled = false

  }else {
    powerSelection = false
    startButton.disabled = true;
    strictOn.disabled = true;
    countTurn.innerHTML = "";
    // clearFlash();
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
  if(strictOn.checked == true){
    strictMode = true;
    strictPlay();
  }
});


// Function to play the game
function playNewGame () {
// reset variables
  winTheGame = false;
  userSeq = [];
  sound = true;
  intervalId = 0;
  quadFlash = 0;
  playTurn = 1;
  countTurn.innerHTML = 1;
  goodPlay = true;
  startGame = true;
  compPlay();
  //intervalId = setInterval(flashColors,800);

};


function compPlay() {
  powerSelection = true;
  winTheGame = false;
  strictOn = false;
  compSeq = [];

  // Generate a set of random button presses
    for (var i = 0; i < 20; i++) {
      compSeq.push(Math.floor(Math.random() * 4) + 1);
    }
};


// sound created with each quad pad press
var audio1 = new Audio();
audio1.src = "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
greenquad.addEventListener('click', (event) => {
  if (startGame && powerSelection){
    clickGreen();
    userplay(1)
  }
});

var audio2 = new Audio();
audio2.src = "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
redquad.addEventListener('click', (event) => {
  if(startGame && powerSelection){
    clickRed();
    userplay(2);
  }
});

var audio3 = new Audio();
audio3.src = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
bluequad.addEventListener('click', (event) => {
  if (startGame && powerSelection){
    clickBlue();
    userplay(3);
  }
});

var audio4 = new Audio();
audio4.src = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
yellowquad.addEventListener('click', (event) => {
  if (startGame && powerSelection) {
    clickYellow();
    userplay(4);
  }
});



//Play the sounds and flash colors.

function clickGreen(){
  if(sound){
    audio1.play()
  }
  greenquadrant.classList.add("greenlite")
  setTimeout(function ()){
    greenquadrant.classList.remove("greenlite")
  },500);
}

function clickRed(){
  if(sound){
    audio2.play()
  }
  redquadrant.classList.add("redlite")
  setTimeout(function ()){
    redquadrant.classList.remove("redlite")
  },500);
}

function clickBlue(){
  if(sound){
    audio3.play()
  }
  bluequadrant.classList.add("bluelite")
  setTimeout(function ()){
    bluequadrant.classList.remove("bluelite")
  },500);
}

function clickYellow(){
  if(sound){
    audio4.play()
  }
  yellowquadrant.classList.add("yellowlite")
  setTimeout(function ()){
    yellowquadrant.classList.remove("yellowlite")
  },500);
}
