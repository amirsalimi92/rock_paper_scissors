//first bydefault for player
let player = 9;

//give doms
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let opponent = document.querySelector("#oppo");
let result = document.querySelector("#result");
let opScorePlace = document.querySelector("#cpu");
let plScorePlace = document.querySelector("#user");

//get data from local storage
let opScore = localStorage.getItem("opScore");
let plScore = localStorage.getItem("plScore");

//Scores for the first time
if (opScore == null) {
  opScore = 0;
  opScorePlace.innerHTML = "0";
}
if (plScore == null) {
  plScore = 0;
  plScorePlace.innerHTML = "0";
}

//set the last scores in the place
opScorePlace.innerHTML = opScore;
plScorePlace.innerHTML = plScore;

//change to number the scores from local storage
let opScoreNum = Number(opScore);
let plScoreNum = Number(plScore);

//choose the random select from cpu
let cpu = Math.random() * 3;
cpu = Math.floor(cpu);
console.log(cpu);

//make an array with options
let selectors = [rock, paper, scissors];
//select one of options with click
for (let input = 0; input < selectors.length; input++) {
  selectors[input].addEventListener("click", () => {
    opShow();
    calculate(input, cpu);
    ending();
  });
}

//show the cpu game in page
function opShow() {
  if (cpu == 0) {
    opponent.src = "media/rock.png";
  } else if (cpu == 1) {
    opponent.src = "media/paper.png";
  } else if (cpu == 2) {
    opponent.src = "media/scissors.png";
  }
}

//calculate the winner
function calculate(pl, op) {
  if (pl == op) {
    draw();
  } else if (pl == 0 && op == 2) {
    win();
  } else if (pl == 2 && op == 0) {
    lost();
  } else if (pl > op) {
    win();
  } else if (pl < op) {
    lost();
  }
}

// refresh teh page after every round
function ending() {
  setTimeout(function () {
    window.location.reload();
  }, 1500);
}

// result functions
function win() {
  localStorage.setItem("plScore", plScoreNum + 1);
  result.classList.add("result2");
  result.style.color = "green";
  result.innerHTML = "WIN";
}

function lost() {
  localStorage.setItem("opScore", opScoreNum + 1);
  result.classList.add("result2");
  result.style.color = "red";
  result.innerHTML = "LOST";
}

function draw() {
  result.classList.add("result2");
  result.style.color = "orange";
  result.innerHTML = "DRAW";
}
