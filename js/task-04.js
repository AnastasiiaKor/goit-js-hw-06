const counterEl = document.querySelector("#counter");
const buttonDec = counterEl.querySelector('button[data-action="decrement"]');
const buttonInc = counterEl.querySelector('button[data-action="increment"]');
const valueEl = counterEl.querySelector("#value");

let counterValue = 0;

const onButtonDecClick = function () {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const onButtonIncClick = function () {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

buttonDec.addEventListener("click", onButtonDecClick);
buttonInc.addEventListener("click", onButtonIncClick);
