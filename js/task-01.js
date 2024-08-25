const liQuantity = document.querySelectorAll("li.item");

console.log(`Number of categories: ${liQuantity.length}`);

liQuantity.forEach((liQuantityItem) => {
  const liTitles = liQuantityItem.querySelector("h2");
  const liItemsNumber = liQuantityItem.querySelectorAll("li");
  console.log(`Category: ${liTitles.textContent}`);
  console.log(`Elements: ${liItemsNumber.length}`);
});
