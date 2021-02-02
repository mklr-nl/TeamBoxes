// * Selectors
let boxOne = document.getElementById("boxOne");
let boxTwo = document.getElementById("boxTwo");
let popupBoxOne = document.getElementById("BoxOne__popup");

// * Eventlisteners
boxOne.addEventListener("click", BoxOnePopup);

// * Functions
function BoxOnePopup() {
  boxTwo.classList.toggle("hide");
  popupBoxOne.classList.toggle("hide");
}
