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

const showTypeOf = function(variable) {
  console.log(variable, typeof variable);
}

const getRollBackMessage = function(price) {
  if (price > 30000 || price == 30000) {
    return "Даем скидку в 10%";
  } else if (price > 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price < 15000 && price > 0 || price == 15000) {
    return "Скидка не предусмотрена";
  } else if  (price < 0 || price == 0) {
    return "Что то пошло не так";
  }
}

const getAllServicePrices = function() {
  return servicePrice1 + servicePrice2;
}
let allServicePrices = getAllServicePrices();

function getFullPrice() {
  return screenPrice + allServicePrices;
} 
let fullPrice = getFullPrice();

function getTitle() {
  let str = ((title.toLowerCase()).trim()); // приводим строку к нижнему регистру и убираем пробелы по краям
  return str[0].toUpperCase() + str.slice(1); // 1 символ строки делаем заглавным, убираем символы в строке до первого, т. е. нулевой символ
}

function getServicePercentPrices() {
  return Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
}
let servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(adaptive);
showTypeOf(fullPrice);

console.log(screens.toLowerCase().split());
console.log(getRollBackMessage(fullPrice));
console.log(getServicePercentPrices());
