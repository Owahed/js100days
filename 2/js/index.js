// Selecting query
const button = document.querySelector("button");
const body = document.querySelector("body");
// Adding colors, you can add your desired colors
const colors = [
  "blue",
  "green",
  "pink",
  "yellow",
  "red",
  "brown",
  "purple",
  "orange",
  "gold",
  "aqua",
  "white",
  "gray",
  "azure",
];

const handelClick = (e) => {
  const selected = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[selected];
};
button.addEventListener("click", handelClick);
