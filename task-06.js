const inputElem = document.querySelector("#validation-input");

inputElem.addEventListener("blur", () => {
  if (Number(inputElem.dataset.length) === Number(inputElem.value.length)) {
    inputElem.classList.add("valid");
    inputElem.style.border = "11px solid #4caf50";
  } else if (
    Number(inputElem.dataset.length) !== Number(inputElem.value.length)
  ) {
    inputElem.classList.add("invalid");
    inputElem.style.border = "11px dashed #f44336";
  }
});
