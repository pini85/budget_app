// const uniqid = require('uniqid');


export default class Budget {
  constructor(description, value, date, id) {
    this.description = description,
    this.value = value,
    this.date = new Date();
    this.id = id;
    // this.state = [];
  }

  idIncome() {
    // get last element of the local storage array and get the id value and incremeent it by 1.
    if (typeof localStorage.income === 'undefined') {
      this.id = 0;
    } else {
      this.id = JSON.parse(localStorage.income).slice(-1)[0].id + 1;
      // slice(-1) gives you last array
      // [0] selects the array.
    }
  }

  idExpense() {
    // get last element of the local storage array and get the id value and incremeent it by 1.
    if (typeof localStorage.expense === 'undefined') {
      this.id = 0;
    } else {
      this.id = JSON.parse(localStorage.expense).slice(-1)[0].id + 1;
      // slice(-1) gives you last array
      // [0] selects the array.
    }
  }


  calculateDate() {
    let date; let monthIndex; let day; let year; let monthName; let
      month;
    date = this.date;
    monthIndex = date.getMonth();
    day = date.getDate();
    year = date.getFullYear();
    monthName = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    month = monthName[monthIndex];
    this.date = `${day < 10 ? `0${day}` : `${day}`} ${month} ${year}`;
  }

  modifyValue() {
    console.log(this.value);
    const thisValue = this.value.toFixed(2);
    console.log(thisValue);

    // value.00
    const numSplit = thisValue.split('.');
    //   //["value", "00"]

    const integer = numSplit[0];
    // console.log(integer);
    // console.log(numSplit[1]);

    if (integer.length > 6) {
      this.value = `${integer.substr(0, integer.length - 6)},${integer.substr(integer.length - 6, 3)},${integer.substr(integer.length - 3, 3)}.${numSplit[1]}`;
      console.log(this.value);
    } else if (integer.length > 3) {
      this.value = `${integer.substr(0, integer.length - 3)},${integer.substr(integer.length - 3, 3)}.${numSplit[1]}`;
      console.log(this.value);
    } else if (integer.length > 1) {
      this.value = `${integer.substr(0, integer.length - 2) + integer.substr(integer.length - 2, 2)}.${numSplit[1]}`;
      console.log(this.value);
    } else if (integer.length > 0) {
      this.value = `${integer.substr(0, integer.length - 1) + integer.substr(integer.length - 1, 1)}.${numSplit[1]}`;
      console.log(this.value);
    }
  }
}
