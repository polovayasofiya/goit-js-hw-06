const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulEl = document.querySelector("#ingredients");
const newEl = ingredients.map((ingredient) => {
  const newLi = `<li class = "item">${ingredient}</li>`;
  return newLi;
});
// console.log(newEl.join(""));
ulEl.insertAdjacentHTML("afterbegin", newEl.join(""));
