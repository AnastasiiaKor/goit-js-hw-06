const range = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

range.addEventListener("input", () => {
  textEl.style.fontSize = `${range.value}px`;
});
