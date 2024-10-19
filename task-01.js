const categories = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${categories.length}`);

// const headerNames = document.querySelectorAll("ul#categories li.item");

categories.forEach((categ) => {
  const h2Elements = categ.querySelector("h2");
  const liElements = categ.querySelectorAll("ul li");

  console.log(`Category: ${h2Elements.textContent}`);
  console.log(`Elements: ${liElements.length}`);
});

console.log("");

// sau

const elements = document.querySelectorAll("ul li.item");
console.log(`Number of categories: ${elements.length}`);

const category1 = document.querySelector("ul li:nth-child(1) h2");
const elements1 = document.querySelectorAll("ul li:nth-child(1) ul li");
console.log(`Elements: ${category1.textContent}`);
console.log(`Elements: ${elements1.length}`);

const category2 = document.querySelector("ul li:nth-child(2) h2");
const elements2 = document.querySelectorAll("ul li:nth-child(2) ul li");
console.log(`Elements: ${category2.textContent}`);
console.log(`Elements: ${elements2.length}`);

const category3 = document.querySelector("ul li:nth-child(3) h2");
const elements3 = document.querySelectorAll("ul li:nth-child(3) ul li");
console.log(`Elements: ${category3.textContent}`);
console.log(`Elements: ${elements3.length}`);
