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

// let teamMember = document.getElementById("teamMember");
let teamMember = document.querySelector(".Section");
let checkIfOpen = false;

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
  if (checkIfOpen) {
    checkIfOpen = teamMember.classList.remove("active");
    boxOne.classList.remove("oppasseMinus");
    boxTwo.classList.remove("oppasseMinus");
    boxThree.classList.remove("oppasseMinus");
    boxFour.classList.remove("oppasseMinus");
    boxFive.classList.remove("oppasseMinus");
    popupBoxOne.classList.remove("oppasse");
    popupBoxTwo.classList.remove("oppasse");
    popupBoxThree.classList.remove("oppasse");
    popupBoxFour.classList.remove("oppasse");
    popupBoxFive.classList.remove("oppasse");
    boxTwo.classList.toggle("oppasseMinus");
    popupBoxTwo.classList.toggle("oppasse");
    checkIfOpen = teamMember.classList.toggle("active");
  } else {
    boxTwo.classList.toggle("oppasseMinus");
    popupBoxTwo.classList.toggle("oppasse");
    checkIfOpen = teamMember.classList.toggle("active");
  }
}
// ! Box Two Popup
function boxTwoPopup() {
  if (checkIfOpen) {
    checkIfOpen = teamMember.classList.remove("active");
    boxOne.classList.remove("oppasseMinus");
    boxTwo.classList.remove("oppasseMinus");
    boxThree.classList.remove("oppasseMinus");
    boxFour.classList.remove("oppasseMinus");
    boxFive.classList.remove("oppasseMinus");
    popupBoxOne.classList.remove("oppasse");
    popupBoxTwo.classList.remove("oppasse");
    popupBoxThree.classList.remove("oppasse");
    popupBoxFour.classList.remove("oppasse");
    popupBoxFive.classList.remove("oppasse");
    boxThree.classList.toggle("oppasseMinus");
    popupBoxThree.classList.toggle("oppasse");
    checkIfOpen = teamMember.classList.toggle("active");
  } else {
    boxThree.classList.toggle("oppasseMinus");
    popupBoxThree.classList.toggle("oppasse");
    checkIfOpen = teamMember.classList.toggle("active");
  }
}
// ! Box Three Popup
function boxThreePopup() {
  if (checkIfOpen) {
    checkIfOpen = teamMember.classList.remove("active");
    boxOne.classList.remove("oppasseMinus");
    boxTwo.classList.remove("oppasseMinus");
    boxThree.classList.remove("oppasseMinus");
    boxFour.classList.remove("oppasseMinus");
    boxFive.classList.remove("oppasseMinus");
    popupBoxOne.classList.remove("oppasse");
    popupBoxTwo.classList.remove("oppasse");
    popupBoxThree.classList.remove("oppasse");
    popupBoxFour.classList.remove("oppasse");
    popupBoxFive.classList.remove("oppasse");
    boxFour.classList.toggle("oppasseMinus");
    popupBoxFour.classList.toggle("oppasse");
    checkIfOpen = teamMember.classList.toggle("active");
  } else {
    boxFour.classList.toggle("oppasseMinus");
    popupBoxFour.classList.toggle("oppasse");
    checkIfOpen = teamMember.classList.toggle("active");
  }
}
// ! Box Four Popup
function boxFourPopup() {
  if (checkIfOpen) {
    checkIfOpen = teamMember.classList.remove("active");
    boxOne.classList.remove("oppasseMinus");
    boxTwo.classList.remove("oppasseMinus");
    boxThree.classList.remove("oppasseMinus");
    boxFour.classList.remove("oppasseMinus");
    boxFive.classList.remove("oppasseMinus");
    popupBoxOne.classList.remove("oppasse");
    popupBoxTwo.classList.remove("oppasse");
    popupBoxThree.classList.remove("oppasse");
    popupBoxFour.classList.remove("oppasse");
    popupBoxFive.classList.remove("oppasse");
    boxFive.classList.toggle("oppasseMinus");
    popupBoxFive.classList.toggle("oppasse");
    checkIfOpen = teamMember.classList.toggle("active");
  } else {
    boxFive.classList.toggle("oppasseMinus");
    popupBoxFive.classList.toggle("oppasse");
    checkIfOpen = teamMember.classList.toggle("active");
  }
}
// ! Box Five Popup
function boxFivePopup() {
  if (checkIfOpen) {
    checkIfOpen = teamMember.classList.remove("active");
    boxOne.classList.remove("oppasseMinus");
    boxTwo.classList.remove("oppasseMinus");
    boxThree.classList.remove("oppasseMinus");
    boxFour.classList.remove("oppasseMinus");
    boxFive.classList.remove("oppasseMinus");
    popupBoxOne.classList.remove("oppasse");
    popupBoxTwo.classList.remove("oppasse");
    popupBoxThree.classList.remove("oppasse");
    popupBoxFour.classList.remove("oppasse");
    popupBoxFive.classList.remove("oppasse");
    boxOne.classList.toggle("oppasseMinus");
    popupBoxOne.classList.toggle("oppasse");
    checkIfOpen = teamMember.classList.toggle("active");
  } else {
    boxOne.classList.toggle("oppasseMinus");
    popupBoxOne.classList.toggle("oppasse");
    checkIfOpen = teamMember.classList.toggle("active");
  }
}
