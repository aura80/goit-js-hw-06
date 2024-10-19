const firstButton = document.querySelector("button[data-action='decrement']");
const secondButton = document.querySelector("button[data-action='increment']");
const spanValueItterator = document.querySelector("#value");

let counterValue = 0;

const handleClickMinus = (e) => {
  e.preventDefault;

  if (firstButton.dataset.action === "decrement") {
    counterValue -= 1;
  }

  spanValueItterator.textContent = counterValue;
};

firstButton.addEventListener("click", handleClickMinus);

const handleClickPlus = (e) => {
  e.preventDefault;

  if (secondButton.dataset.action === "increment") {
    counterValue += 1;
  }

  spanValueItterator.textContent = counterValue;
};

secondButton.addEventListener("click", handleClickPlus);
