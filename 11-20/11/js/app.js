const form = document.querySelector("form");
const convertedWeight = document.getElementById("convertedWeight");

form.addEventListener("submit", (e) => {
  const input = document.querySelector("input");
  e.preventDefault();
  if (isNaN(input.value) || input.value < 0) {
    convertedWeight.classList.add("error");
    convertedWeight.innerHTML = `<p>Please enter a valid number!</p>`;

    setTimeout(() => {
      convertedWeight.innerHTML = "";
      convertedWeight.classList.remove("error");
    }, 2500);
  } else {
    const value = Number(input.value) * 2.20462;
    convertedWeight.classList.add("successfull");
    convertedWeight.innerHTML = `${value.toFixed(2)}`;

    setTimeout(() => {
      convertedWeight.innerHTML = "";
      input.value = "";
      convertedWeight.classList.remove("successfull");
    }, 20000);
  }
});
// console.log(input);
