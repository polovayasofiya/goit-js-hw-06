const fontSize = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
console.log(fontSize.value);

fontSize.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  spanText.style.fontSize = fontSize.value + "px";
}
