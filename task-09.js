function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonElement = document.querySelector(".change-color");

buttonElement.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e);

  const spanColor = document.querySelector(".color");

  spanColor.textContent = getRandomHexColor();

  spanColor.style.backgroundColor = spanColor.textContent;
  spanColor.style.fontSize = "65px";
  spanColor.style.color = "#ffffff";
  buttonElement.style.backgroundColor = spanColor.textContent;

  console.log(spanColor.textContent);
});
