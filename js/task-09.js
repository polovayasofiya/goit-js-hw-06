const btnChangeColor = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");
const textColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", changeColor);

function changeColor(event) {
  const newColor = getRandomHexColor();
  bodyColor.style.backgroundColor = newColor;
  textColor.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
