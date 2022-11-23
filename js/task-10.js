function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controlsEL = document.querySelector("#controls");
const inputEl = controlsEL.firstElementChild;
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxEl = document.querySelector("#boxes");
let amount = 0;

inputEl.addEventListener("input", () => (amount = Number(inputEl.value)));

function createBoxes() {
  destroyBoxes();
  const array = [];
  array.length = amount;
  const boxes = [];

  if (array.length === 1) {
    const box = document.createElement("div");

    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.width = "30px";
    box.style.height = "30px";
    boxEl.append(box);
  } else {
    for (let i = 0, j = 30; i < array.length; i += 1, j += 10) {
      const box = document.createElement("div");
      box.style.backgroundColor = `${getRandomHexColor()}`;
      box.style.width = `${j}px`;
      box.style.height = `${j}px`;
      boxes.push(box);
      boxEl.append(...boxes);
    }
  }
}

createBtn.addEventListener("click", createBoxes);

function destroyBoxes() {
  boxEl.innerHTML = "";
  inputEl.value = "";
}
destroyBtn.addEventListener("click", destroyBoxes);
