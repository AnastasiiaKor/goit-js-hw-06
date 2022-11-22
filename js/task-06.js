const inputEl = document.querySelector("#validation-input");

const dataLenght = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", () => {
  if (inputEl.value.length === dataLenght) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
});
