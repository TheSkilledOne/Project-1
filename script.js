const inputField = document.getElementById("input1");
const input = document.getElementById("input1");
const button = document.getElementById("button1");
const showcase = document.getElementById("img1");
button.addEventListener("click", hide);
button.addEventListener("click", buttonPush);

function buttonPush() {
  if (input.value === "password") {
    alert("You found me!");
    button.innerHTML = "This happened!";
  } else {
    alert("Try again!");
    button.innerHTML = "Try again!";
  }
}

function hide() {
  // alert("Test")
  if (showcase.style.display === "none") {
    showcase.style.display = "block";
  } else {
    showcase.style.display = "none";
  }
}
