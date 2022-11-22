const inputEl = document.querySelector("#validation-input");

const dataLenght = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", () => {
  if (inputEl.value.length === dataLenght) {
    console.log(inputEl.value.length);
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
    console.log(inputEl.value.length);
  }
});
