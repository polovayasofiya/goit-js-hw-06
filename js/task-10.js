const inputNum = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

btnCreate.addEventListener("click", function () {
  const amount = parseInt(inputNum.value);
  createBoxes(amount);
});

btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let newArray = [];
  let width = 30;
  let heigth = 30;

  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = `${width}px`;
    newDiv.style.height = `${heigth}px`;
    width += 10;
    heigth += 10;
    newArray.push(newDiv);
  }
  boxesEl.append(...newArray);
}

function destroyBoxes() {
  inputNum.value = "";
  boxesEl.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
