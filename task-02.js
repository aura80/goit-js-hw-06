const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const lista = document.querySelector("ul#ingredients");

ingredients.forEach((ing) => {
  const li = document.createElement("li");
  li.innerText = ing;
  li.classList.add("item");
  lista.append(li);
});

console.log(lista);
