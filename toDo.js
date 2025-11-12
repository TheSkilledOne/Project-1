let txtBox = document.querySelector(".inPut");
let inBtn = document.querySelector(".addItem");
let realList = document.querySelector(".needTo");

inBtn.addEventListener("click", addThing);

function addThing() {
  const inputValue = txtBox.value.trim();
  if (inputValue !== "") {
    const lineContainer = document.createElement("li");
    const newButton = document.createElement("button");

    lineContainer.textContent = inputValue;

    newButton.textContent = "Finish Task";

    newButton.addEventListener("click", finishTask);

    lineContainer.appendChild(newButton);

    realList.appendChild(lineContainer);

    txtBox.value = "";
  } else {
    alert("Please fill out the form");
  }
}

function finishTask(event) {
  /*alert("Task Done");*/
  const listItem = event.target.closest("li");
  if (listItem) {
    listItem.remove();
  }
}
