// ??? З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// ?Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// ?Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента
// ?(тегу < h2 >) і кількість елементів у категорії(усіх < li >, вкладених у нього).

const categoryEl = document.querySelector("#categories");
const itemEl = categoryEl.querySelectorAll(".item");
console.log(itemEl.length);
itemEl.forEach((el) => {
  const title = el.querySelector("h2").textContent;
  const li = el.querySelectorAll("ul li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${liCount}`);
});
