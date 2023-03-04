const calc = () => {
  const calcInputs = document.querySelectorAll("input.calc-item");
  const messageInputs = document.querySelectorAll("input[placeholder='Ваше сообщение']");
  const textInputs = document.querySelectorAll("input[name=user_name]");
  const emailInputs = document.querySelectorAll("input[type=email]");
  const phoneInputs = document.querySelectorAll("input[type=tel]");

  // В калькуляторе разрешить ввод только цифр
  calcInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/g, "");
    });
  });

  // В поля ввода type=text и placeholder="Ваше сообщение" позволить ввод только кириллицы в любом регистре, дефиса и пробела.
  messageInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-я\s-]/gi, "");
    });
  });
  textInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-я\s-]/gi, "");
    });
  });
  // В поля ввода type=email позволить ввод только  латиницы в любом регистре, цифры и спецсимволы:  @  -  _  . ! ~ * '
  emailInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^a-z-@_\.!'0-9~*]/gi, "");
    });
  });
  // В поля ввода type=tel позволить ввод только цифр, круглых скобок и дефис
  phoneInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^0-9()-]/g, "");
    });
  });
};

export default calc;
