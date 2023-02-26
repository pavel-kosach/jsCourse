const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const h4 = document.querySelector("h4");
const week = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

const date = new Date();
const newYearDate = new Date("1 january 2024");
let beforeNY = Math.floor((newYearDate - date) / 1000 / 60 / 60 / 24);
let weekDay = week[date.getDay()];
let time = date.toLocaleTimeString("en");
let hours = date.getHours();

if (hours > 5 && hours < 11) {
  h1.textContent = "Доброе утро";
} else if (hours > 10 && hours < 17) {
  h1.textContent = "Добрый день";
} else if (hours > 17 && hours < 21) {
  h1.textContent = "Добрый вечер";
} else {
  h1.textContent = "Доброй ночи";
}
h2.textContent = "Сегодня " + weekDay;
h3.textContent = "Текущее время: " + time;
h4.textContent = "До Нового года осталось " + beforeNY + " дней";
