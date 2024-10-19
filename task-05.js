const inputElem = document.querySelector("#name-input");
const spanElem = document.querySelector("#name-output");

inputElem.addEventListener("input", (event) => {
  console.log(spanElem.textContent);
  console.log(event.currentTarget.value);

  if (event.currentTarget.value === null || event.currentTarget.value === "") {
    spanElem.textContent = "Anonymous";
  } else {
    spanElem.textContent = event.currentTarget.value;
  }
});
