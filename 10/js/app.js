const left = document.querySelector(".fa-caret-square-o-left");
const right = document.querySelector(".fa-caret-square-o-right");
const imgContainer = document.querySelector(".container");

const images = ["image-0", "image-1", "image-2", "image-3", "image-4"];

let count = 0;

left.addEventListener("click", () => {
  if (count === 4) {
    count = 0;
  } else {
    count++;
  }
  imgContainer.style.backgroundImage = `url('./images/image-0.jpg')`;
  //   console.log(url("../images/image-0.jpg"));
});
