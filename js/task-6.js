// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.
// Є input, у який користувач вводить бажану кількість елементів.Після натискання на кнопку Create має рендеритися
// (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті.При повторному натисканні на кнопку
// Create поверх старої колекції має рендеритись нова.Після натискання на кнопку Destroy колекція елементів має очищатися.
// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно.
// Тільки якщо воно задоволяє умову, мають додаватися нові < div > елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість
// елементів для рендеру.
// Функція має створювати стільки < div > елементів, скільки вказано в параметрі amount.Усі ці < div > мають додаватися за одну
// операцію у DOM дочірніми елементами для div#boxes.
// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання
// випадкового кольору.

const inputEl = document.querySelector("div input");
const createEl = document.querySelectorAll("button");
const divEl = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let size = 30;
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    const randomColor = getRandomHexColor();
    div.style.backgroundColor = randomColor;
    elements.push(div);
    size += 10;
  }
  divEl.append(...elements);
}

createEl[0].addEventListener("click", () => {
  if (inputEl.value < 1 || inputEl.value > 100) {
    console.log("Enter valid number");
    return;
  }
  createBoxes(inputEl.value);
  inputEl.value = "";
});
