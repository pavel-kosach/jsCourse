"use strict";

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

// проверка на число
const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num) && num !== "0";
};

// функция, которая задает вопросы пользователю
const asking = function () {
  title = prompt("Как называется ваш проект?", "Мой проект");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

  do {
    screenPrice = +prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

// Добавить проверку что введённые данные являются числом, которые мы получаем на вопрос "Сколько это будет стоить" в функции getAllServicePrices
const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?", "service1");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?", "service2");
    }
    sum += +prompt("Сколько это будет стоить?", "500");
    while (!isNumber(sum)) {
      sum += +prompt("Сколько это будет стоить?", "500");
    }
  }

  return sum;
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

function getServicePercentPrices() {
  return Math.ceil(fullPrice - fullPrice * (rollback / 100));
}

function getTitle() {
  return (
    title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase() // более простой вариант решения
  );
  // let str = title.toLowerCase().trim(); // приводим строку к нижнему регистру и убираем пробелы по краям
  // return str[0].toUpperCase() + str.slice(1); // 1 символ строки делаем заглавным, убираем символы в строке до первого, т. е. нулевой символ
}

const getRollBackMessage = function (price) {
  if (price > 30000 || price == 30000) {
    return "Даем скидку в 10%";
  } else if (price > 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if ((price < 15000 && price > 0) || price == 15000) {
    return "Скидка не предусмотрена";
  } else if (price < 0 || price == 0) {
    return "Что то пошло не так";
  }
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(adaptive);
showTypeOf(fullPrice);

console.log("allServicePrices", allServicePrices);

console.log(getRollBackMessage(fullPrice));
console.log(screens.toLowerCase().split());
console.log(servicePercentPrice);
console.log(
  "Стоимость верстки экранов " +
    screenPrice +
    " руб. и Стоимость разработки сайта " +
    fullPrice +
    " руб."
);
