const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector("#value");

btnDecrement.addEventListener("click", decrementValue);
btnIncrement.addEventListener("click", incrementValue);

let counterValue = 0;

function decrementValue() {
  counterValue -= 1;
  spanValue.textContent = counterValue;
}
function incrementValue() {
  counterValue += 1;
  spanValue.textContent = counterValue;
}
