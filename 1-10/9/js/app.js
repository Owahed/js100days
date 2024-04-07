const textarea = document.getElementById("textarea");

const countingCharacter = () => {
  document.querySelector(".counter").textContent = textarea.value.length;
};
