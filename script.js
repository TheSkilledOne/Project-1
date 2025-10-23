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
