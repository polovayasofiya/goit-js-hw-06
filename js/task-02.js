const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const navEl = document.querySelector("#ingredients");
const ingredientLiEl = ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = `${ingredient}`;

  return liEl;
});
// console.log(...ingredientLiEl);
navEl.append(...ingredientLiEl);
