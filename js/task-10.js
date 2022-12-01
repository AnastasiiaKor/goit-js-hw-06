function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controlsEL = document.querySelector("#controls");
const inputEl = controlsEL.firstElementChild;
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxEl = document.querySelector("#boxes");

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0, j = 30; i < amount; i += 1, j += 10) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${j}px`;
    box.style.height = `${j}px`;
    boxes.push(box);
    boxEl.append(...boxes);
  }
}
inputEl.addEventListener("focus", destroyBoxes);
createBtn.addEventListener("click", () => createBoxes(inputEl.value));

function destroyBoxes() {
  boxEl.innerHTML = "";
  inputEl.value = "";
}
destroyBtn.addEventListener("click", destroyBoxes);
