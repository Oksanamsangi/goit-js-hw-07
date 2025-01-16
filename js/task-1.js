// ??? З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// ?Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// ?Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента
// ?(тегу < h2 >) і кількість елементів у категорії(усіх < li >, вкладених у нього).

const categoriesList = document.querySelector("#categories");

const categoriesItems = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("ul li");

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
});
