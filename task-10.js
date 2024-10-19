function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsElement = document.querySelector("#controls");
const boxesElement = document.querySelector("#boxes");
const inputElement = controlsElement.querySelector("input");
const createButton = controlsElement.querySelector("button[data-create]");
const destroyButton = controlsElement.querySelector("button[data-destroy]");

createButton.addEventListener("click", () => {
  const amount = Number(inputElement.value);

  if (isNaN(amount) || amount <= 0) {
    console.warn("Enter a valid positive number!");
    return;
  }

  console.log(`Show amount: ${amount}`);

  createBoxes(amount);
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();

  let dim = 30;

  for (let i = 0; i < amount; i += 1) {
    const divElement = document.createElement("div");
    divElement.style.width = `${dim}px`;
    divElement.style.height = `${dim}px`;
    divElement.style.backgroundColor = getRandomHexColor();
    divElement.style.marginTop = "10px";
    console.log(
      `New div created with size: ${dim} and color: ${divElement.style.backgroundColor}`
    );

    boxesElement.append(divElement);
    dim += 10;
  }
}

function destroyBoxes() {
  if (boxesElement.innerHTML) {
    console.log("All boxes destroyed!");
    boxesElement.innerHTML = "";
  } else {
    console.log("No content to destroy!");
  }
}
