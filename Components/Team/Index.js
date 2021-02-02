// * Selectors
let box1 = document.getElementById("Box1");
let box2 = document.getElementById("Box2");
let member1 = document.getElementById("member1");
let member2 = document.getElementById("member2");

// * Eventlisteners
box1.addEventListener("click", changeBox);

// * Functions
function changeBox() {
  console.log("hello Danny");
  box2.classList.add("hide");
}
