const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClassName();
    panel.classList.add("active");
    console.log("object");
  });
});

const removeActiveClassName = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

const body = document.body;
const modeChanger = () => {
  body.classList.toggle("dark-mode");
};
