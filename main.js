"use strict";
// Напишите расширения метода прототипа:
// 1) Два класса, First и Second, Second наследует от First .
class First {
  // 2) В First есть метод hello - он печатает в консоль "Привет я метод родителя!".
  hello() {
    console.log(`Привет я метод родителя!`);
  }
}

// 3) Нужно написать в Second метод hello, чтоб он сначала вызывал метод hello из First, а потом сразу печатал в консоль "А я наследуемый метод!"
class Second extends First {
  hello() {
    super.hello();
    console.log(`А я наследуемый метод!`);
  }
}

const start = new Second();
start.hello();
