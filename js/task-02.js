const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector("#ingredients");

const items = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredients[i];
  items.push(item);
}
ingredientsEl.append(...items);
