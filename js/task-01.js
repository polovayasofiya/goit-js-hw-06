const allLiEl = document.querySelector("#categories");
// console.log(allLiEl);
const liEl = allLiEl.children;
console.log("Number of categories:", liEl.length);

// console.log(liEl);

const categEl = document.querySelectorAll(".item");
// console.log(categEl);
categEl.forEach((item) => {
  const titleEl = item.querySelector("h2").textContent;
  console.log("Category:", titleEl);
  const numEl = item.querySelectorAll("li").length;
  console.log("Elements:", numEl);
});
