const button = document.getElementById("calculate-btn");
const bill = document.getElementById("bill");
const service = document.getElementById("service");
const numOfPeople = document.getElementById("numOfPeople");
const tip = document.getElementById("tip");

button.addEventListener("click", function (e) {
  let calculated = (bill.value * service.value) / numOfPeople.value;

  calculated = Math.round(calculated * 100) / 100;
  console.log("calculated", calculated);
  calculated = calculated.toFixed(2);
  console.log(bill.value);
  console.log(service.value);
  console.log(numOfPeople.value);
  tip.innerText = calculated;
});
