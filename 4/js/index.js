const decreaseBtn = document.getElementsByClassName("decrease-btn");
const increaseBtn = document.getElementsByClassName("increase-btn");

const counterMachine = document.querySelector(".counter-machine");

let counter = 0;

const handelDecrease = () => {
  counter--;
  counterMachine.textContent = counter;
};
const handelIncrease = () => {
  counter++;
  counterMachine.textContent = counter;
};
