const books = document.querySelectorAll(".book");
const body = document.querySelector("body");
const thirdBooktitle = books[4].querySelector("a");
const add = document.querySelector(".adv");
const secondBookLi = books[0].querySelectorAll("li");
const fivesBookLi = books[5].querySelectorAll("li");
const sixBookLi = books[2].querySelectorAll("li");
const liElement = document.createElement("li");

books[0].before(books[1]);
books[3].before(books[4]);
books[5].after(books[2]);
body.style.setProperty("background-image", "url(./image/you-dont-know-js.jpg)");
thirdBooktitle.textContent = "Книга 3. this и Прототипы Объектов";
add.remove();
secondBookLi[9].after(secondBookLi[2]);
secondBookLi[3].after(secondBookLi[6]);
secondBookLi[6].after(secondBookLi[8]);
fivesBookLi[1].after(fivesBookLi[9]);
fivesBookLi[9].after(fivesBookLi[3]);
fivesBookLi[4].after(fivesBookLi[2]);
fivesBookLi[7].after(fivesBookLi[5]);
sixBookLi[9].insertAdjacentHTML("beforebegin", "<li>Глава 8: За пределами ES6</li>");

console.log(books);
console.log(sixBookLi);
