// const decreaseBtn = document.getElementsByClassName("decrease-btn");
// const increaseBtn = document.getElementsByClassName("increase-btn");

// const counterMachine = document.querySelector(".counter-machine");

// let counter = 0;

// const handelDecrease = () => {
//   counter--;
//   counterMachine.textContent = counter;
// };
// const handelIncrease = () => {
//   counter++;
//   counterMachine.textContent = counter;
// };

(function () {
  const buttons = document.querySelectorAll(".btn-counter");
  const counterMachine = document.querySelector(".counter-machine");

  let counter = 0;

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (button.classList.contains("decrease-btn")) {
        counter--;
      } else {
        counter++;
      }

      counterMachine.textContent = counter;

      if (counter > 0) {
        counterMachine.style.color = "green";
      } else if (counter < 0) {
        counterMachine.style.color = "#f0ad4e";
      } else {
        counterMachine.style.color = "#fff";
      }
    });
  });
})();
