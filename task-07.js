let fontSizeControl = document.querySelector("#font-size-control");
let textElement = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  let newFontSize = fontSizeControl.value;

  console.log(newFontSize);

  textElement.style.fontSize = newFontSize + "px";
});
