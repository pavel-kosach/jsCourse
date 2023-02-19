"use-srict";

const title = document.getElementsByTagName("h1")[0];
const buttoPlus = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");

const inputRange = document.querySelector(".rollback input");
const inputRangeValue = document.querySelector(".rollback .range-value");

const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  screenCount: 0,
  adaptive: true,
  rollback: 10,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  init: function () {
    this.addTitle();
    startBtn.addEventListener("click", this.start.bind(appData));
    buttoPlus.addEventListener("click", this.addScreenBlock.bind(appData));
    inputRange.addEventListener("input", this.addRollback.bind(appData));
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    this.blockInputs();
    this.addScreens();
    this.addServices();
    this.addPrices();
    this.logger();
    this.showResult();
  },
  showResult: function () {
    total.value = this.screenPrice;
    totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCount.value = this.screenCount;
    totalCountRollback.value = this.servicePercentPrice;
  },
  addScreens: function () {
    screens = document.querySelectorAll(".screen");
    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      input.addEventListener("click", () => {
        if (screens.name != "" && screens.count != "") {
          startBtn.disabled = false;
          startBtn.style.border = "1px solid black";
        }
      });

      if (
        (selectName == "Тип экранов" && +input.value >= 0) ||
        input.value === "Количество экранов"
      ) {
        this.init();
      } else {
        this.screens.push({
          id: index,
          name: selectName,
          price: +select.value * +input.value,
          count: +input.value,
        });
      }
    });
  },
  addServices: function () {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });
    otherItemsNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },
  addPrices: function () {
    this.rollback = +inputRange.value;

    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
      this.screenCount += screen.count;
    }

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }

    for (let key in this.servicesPercent) {
      this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
    }

    this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

    this.servicePercentPrice = this.fullPrice - this.fullPrice * (this.rollback / 100);
  },
  addRollback: function (event) {
    inputRangeValue.textContent = event.target.value + "%";
  },
  blockInputs: function () {
    document.querySelectorAll("input[type=text]").forEach((input) => {
      input.disabled = true;
    });
    document.querySelectorAll("select").forEach((select) => {
      select.disabled = true;
    });
    startBtn.style.display = "none";
    resetBtn.style.display = "flex";
    resetBtn.addEventListener("click", this.reset);
  },
  reset: function () {
    startBtn.style.display = "flex";
    resetBtn.style.display = "none";
    document.querySelectorAll("input[type=text]").forEach((input) => {
      input.disabled = false;
    });
    document.querySelectorAll("select").forEach((select) => {
      select.disabled = false;
    });
  },
  logger: function () {
    // console.log("this");
  },
};

appData.init();
