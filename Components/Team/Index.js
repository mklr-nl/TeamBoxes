// * Selectors
let box1 = document.getElementById("boxOne");
let box2 = document.getElementById("boxTwo");
let member1 = document.querySelector(".Team__member__info");
let memberCover = document.querySelector(".boxPopup");

// * Eventlisteners
box1.addEventListener("click", changeBox);

// * Functions
function changeBox() {
  console.log("hello Danny");
  box2.classList.toggle("hide");
  memberCover.classList.toggle("hide");
}
