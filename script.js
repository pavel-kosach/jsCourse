let title = "Название проекта";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 10;
let rollback = 10;
let fullPrice = 1000000;
let adaptive = true;

// Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

// Вывести в консоль длину строки из переменной screens
console.log(screens.length);

// Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” и “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”
console.log(
  "Стоимость верстки экранов " + screenPrice + " рублей/долларов/гривен/юани"
);
console.log(
  "Стоимость разработки сайта " + fullPrice + " рублей/долларов/гривен/юани"
);

// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
screens = screens.toLowerCase();
screens = screens.split();
console.log(screens);

// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
console.log(
  "Процент отката посреднику за работу " + fullPrice * (rollback / 100)
);
