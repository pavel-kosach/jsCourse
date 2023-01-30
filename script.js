"use strict";

let title = prompt("Как называется ваш проект?", "Мой проект");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные"); 
let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
let rollback = 5;
let adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?", "service1"); 
let servicePrice1 = +prompt("Сколько это будет стоить?", "500");
let service2 = prompt("Какой дополнительный тип услуги нужен?", "service2");
let servicePrice2 = +prompt("Сколько это будет стоить?", "1000");

// Вычислить итоговую стоимость работы учитывая стоимость верстки экранов и дополнительных услуг (screenPrice + servicePrice1 + servicePrice2)
// и результат занести в переменную fullPrice
let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
console.log(servicePercentPrice);

// Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

// Вывести в консоль длину строки из переменной screens
console.log(screens.length);

// Вывести в консоль Стоимость верстки экранов (screenPrice) рублей и Стоимость разработки сайта
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");

// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(screens.toLowerCase().split());

// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
console.log("Процент отката посреднику за работу " + fullPrice * (rollback / 100));

// Первый вариант решения через if else
// fullPrice = 15000;
// if (fullPrice > 30000 || fullPrice == 30000) {
//   alert("Даем скидку в 10%");
// } else if (fullPrice > 15000 && fullPrice < 30000) {
//   alert("Даем скидку в 5%");
// } else if (fullPrice < 15000 && fullPrice > 0 || fullPrice == 15000) {
//   alert("Скидка не предусмотрена");
// } else if  (fullPrice < 0 || fullPrice == 0) {
//   alert("Что то пошло не так");
// }

// Второй вариант решения через switch
switch (true) {
  case fullPrice > 30000 || fullPrice == 30000:
    alert("Даем скидку в 10%");
    break;
    case fullPrice > 15000 && fullPrice < 30000:
      alert("Даем скидку в 5%");
      break;
    case fullPrice < 15000 && fullPrice > 0 || fullPrice == 15000:
      alert("Скидка не предусмотрена");
      break;
    case fullPrice < 0 || fullPrice == 0:
      alert("Что то пошло не так");
      break;
    default:
      alert("Что-то пошло не так");
}