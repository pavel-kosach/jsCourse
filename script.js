"use strict";

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Мой проект");

    for (let i = 0; i < 2; i++) {
      let name = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
      let price = 0;

      do {
        price = +prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price));

      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name = prompt("Какой дополнительный тип услуги нужен?", "service1");
      let price = 0;

      do {
        price = prompt("Сколько это будет стоить?", "500");
      } while (!appData.isNumber(price));
      appData.services[name] = +price;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  addPrices: function () {
    // метод высчитывает стоимость услуг, экранов
    for (let screen of appData.screens) {
      // перебираем типы экранов
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num !== "0";
  },
  getFullPrice: function () {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice = Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    );
  },
  getTitle: function () {
    appData.title =
      appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase();
    // let str = title.toLowerCase().trim(); // приводим строку к нижнему регистру и убираем пробелы по краям
    // return str[0].toUpperCase() + str.slice(1); // 1 символ строки делаем заглавным, убираем символы в строке до первого, т. е. нулевой символ
  },
  getRollBackMessage: function (price) {
    if (price > 30000 || price == 30000) {
      return "Даем скидку в 10%";
    } else if (price > 15000 && price < 30000) {
      return "Даем скидку в 5%";
    } else if ((price < 15000 && price > 0) || price == 15000) {
      return "Скидка не предусмотрена";
    } else if (price < 0 || price == 0) {
      return "Что то пошло не так";
    }
  },
  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    // for (let key in appData) {
    //   console.log("Ключ:" + key + " " + "Значение: " + appData[key]);
    // }
  },
};

appData.start();
