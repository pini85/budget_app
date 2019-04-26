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

  persistData(budget, type) {
    const getItem = JSON.parse(localStorage.getItem(type)) || [];
    getItem.push(budget);
    localStorage.setItem(type, JSON.stringify(getItem));
  }
  /*
    In localStorage data is saved in key value pairs of strings. Each time you call setItem() it will add or overwrite existing
    value. And getItem() just fetches the value stored in localStorage which is a string value. To solve this you have to use an
    array, stringify it and then store it.
    First we need to get the key from local storage and push the vlaue both to the getItem and the empty array. Then we set
    the value with the getItem variable.
    */


  readData(type) {
    return JSON.parse(localStorage.getItem(type));
  }

  total(type) {
    const parsed = JSON.parse(localStorage.getItem(type));
    const { length } = parsed;
    let sum = 0;
    for (let i = 0; i < length; i++) {
      sum += parseInt(parsed[i].value);
    }
    this.total = sum;
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
    this.date = `${day} ${month} ${year}`;
  }
}
