"use-srict";

// Получить заголовок "Калькулятор верстки" через метод getElementsByTagName. (тэг h1, получить именно элемент, а не коллекцию)
const title = document.getElementsByTagName("h1")[0];
console.log(title);

// Получить кнопки "Рассчитать" и "Сброс" через метод getElementsByClassName. (класс handler_btn)
const buttons = document.getElementsByClassName("handler_btn");
console.log(buttons);

// Получить кнопку "+" под выпадающим списком через метод querySelector. (класс screen-btn)
const plusButton = document.querySelector(".screen-btn");
console.log(plusButton);

// Получить все элементы с классом other-items в две разные переменные. В первую элементы у которых так же присутствует класс percent, во вторую элементы у которых так же присутствует класс number через метод querySelectorAll.
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");
console.log(otherItemsPercent);
console.log(otherItemsNumber);

// Получить input type=range через его родителя с классом rollback одним запросом через метод querySelector.
const inputRange = document.querySelector(".rollback").querySelector("input[type=range]");
console.log(inputRange);

// Получить span с классом range-value через его родителя с классом rollback одним запросом через метод querySelector.
const spanValue = document.querySelector(".rollback").querySelector(".range-value");
console.log(spanValue);

// Получить все инпуты с классом total-input справа через метод getElementsByClassName. (класс total-input, получить именно элементы, а не коллекции)
const totalInputs = Array.from(document.getElementsByClassName("total-input"));
for (let i = 0; i < 5; i++) {
  console.log(totalInputs[i]);
}

// Получить все блоки с классом screen в изменяемую переменную ( let ) через метод querySelectorAll (далее мы будем переопределять ее значение)
let allScreens = document.querySelectorAll(".screen");
console.log(allScreens);
