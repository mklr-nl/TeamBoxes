// * Selectors
let boxOne = document.getElementById("boxOne");
let boxTwo = document.getElementById("boxTwo");
let boxThree = document.getElementById("boxThree");
let boxFour = document.getElementById("boxFour");
let boxFive = document.getElementById("boxFive");

let popupBoxOne = document.getElementById("boxOne__popup");
let popupBoxTwo = document.getElementById("boxTwo__popup");
let popupBoxThree = document.getElementById("boxThree__popup");
let popupBoxFour = document.getElementById("boxFour__popup");
let popupBoxFive = document.getElementById("boxFive__popup");

// * Eventlisteners
// ! Box One click event
boxOne.addEventListener("click", boxOnePopup);
// ! Box Two click event
boxTwo.addEventListener("click", boxTwoPopup);
// ! Box Three click event
boxThree.addEventListener("click", boxThreePopup);
// ! Box Four click event
boxFour.addEventListener("click", boxFourPopup);
// ! Box Five click event
boxFive.addEventListener("click", boxFivePopup);

// * Functions
// ! Box One Popup
function boxOnePopup() {
  boxTwo.classList.toggle("oppasseMinus");
  popupBoxOne.classList.toggle("oppasse");
}
// ! Box Two Popup
function boxTwoPopup() {
  boxThree.classList.toggle("oppasseMinus");
  popupBoxTwo.classList.toggle("oppasse");
}
// ! Box Three Popup
function boxThreePopup() {
  boxFour.classList.toggle("oppasseMinus");
  popupBoxThree.classList.toggle("oppasse");
}
// ! Box Four Popup
function boxFourPopup() {
  boxFive.classList.toggle("oppasseMinus");
  popupBoxFour.classList.toggle("oppasse");
}
// ! Box Five Popup
function boxFivePopup() {
  boxOne.classList.toggle("oppasseMinus");
  popupBoxFive.classList.toggle("oppasse");
}
