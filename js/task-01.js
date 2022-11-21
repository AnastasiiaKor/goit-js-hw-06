const categoriesEl = document.querySelector("#categories");
const itemsEl = document.querySelectorAll(".item");

const countCategories = function () {
  console.log("Number of categories: ", categoriesEl.children.length);
};
countCategories();

const showTitleAndElements = function () {
  const itemsArray = [...itemsEl];
  itemsArray.map((item) => {
    console.log(
      `Category: ${item.firstElementChild.textContent}\nElements: ${item.lastElementChild.children.length}
      `
    );
  });
};

showTitleAndElements();
