let boxes = document.querySelectorAll(".box");
let active = false;
let newBox;

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    if (!active) {
      console.log("if");
      newBox = boxes[i + 1];
      newBox.classList.add("opacityZero");
      active = true;
    } else {
      console.log("else");
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("opacityZero");
      }
      setTimeout(function () {
        boxes[i + 1].classList.add("opacityZero");
        active = true;
      }, 500);
    }
  });
}
