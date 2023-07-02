const inputName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");

inputName.addEventListener("input", nameInput);
const noName = "Anonymous";

function nameInput(event) {
  if (inputName.value !== "") {
    spanName.textContent = inputName.value;
  } else {
    spanName.textContent = noName;
  }
}
