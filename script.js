const inBox = document.getElementById("txtField");
const btnSubmit = document.getElementById("btnSubmit");
const paraGraph = document.getElementById("outPut");

btnSubmit.addEventListener("click", displayText);

function displayText() {
  var infoIn = inBox.value;
  console.log(infoIn);
  paraGraph.innerHTML = infoIn;
  paraGraph.style.color = "red";
  paraGraph.style.fontWeight = "bold";
}

let name = prompt("What's your name?");
if (name !== "Tyrone" || name !== "tyrone") {
  alert("Oh, I thought you wer're someone else...");
}
if (name != "") {
  alert(`Hi ${name}!`);
}

let color = prompt("What's your favorite color?");

if (name === "Tyrone" && color === "green") {
  window.location.href = "adminConsole.html";
}

if (color === "green") {
  alert("You're on to something...");
} else if (color != "") {
  alert("That's a nice color");
}

const numberInp = document.querySelector("inputBx");
const guessBtn = document.querySelector("guessBtn");
const attemptCnt = document.querySelector("numTry");
let randomNumber = Math.floor(Math.random() * 10);

guessBtn.addEventListener("click", displayText);

function onGuess() {
  attemptCnt++;
  const inpValue = Number(numberInp.value);
  if (inpValue === randomNumber) {
    numberInp.disabled = true;
  }
}
