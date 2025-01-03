// ?Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input) підставляє його поточне значення в
// ?span#name - output як ім’я для привітання.Обов’язково очищай значення в інпуті по краях від пробілів.Якщо інпут порожній
// ?або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

const inputEl = document.querySelector("#name-input");
const OutputEl = document.querySelector("#name-output");

const trimmedEl = () => {
  const inputValue = inputEl.value.trim();
  if (inputValue === "") {
    OutputEl.textContent = "Anonymous";
  } else {
    OutputEl.textContent = inputValue;
  }
};
inputEl.addEventListener("input", trimmedEl);
