const inputNumber = document.querySelector("#validation-input");

inputNumber.addEventListener("blur", checkNumber);
const dataLength = Number(inputNumber.getAttribute("data-length"));
function checkNumber(event) {
  if (inputNumber.value.length === dataLength) {
    console.log("ok");
    inputNumber.classList.remove("invalid");
    inputNumber.classList.add("valid");
  } else {
    console.log("not ok");
    inputNumber.classList.remove("valid");
    inputNumber.classList.add("invalid");
  }
}
