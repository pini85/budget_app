import * as localStorage from './localStorage.js';
var faker = require('faker');


export const income = () => {
var element = document.querySelector(".random-dropdown").value;

//income data faker
  for(let i= 0; i< element; i++) {
    localStorage.persistData({
      "description": `${i < (element/2) ? `Sold ${faker.commerce.product()}` : `${faker.name.jobType()} salary`}` ,
      "value": faker.commerce.price(),
      "date": createAndModifyDate(faker.date.between('2016-01-01', '2020-01-01')),
      "id": faker.random.number()},"random-income");
  }
}
export const expense = () => {
  var element = document.querySelector(".random-dropdown").value;
  for(let i= 0; i< element; i++) {
  localStorage.persistData({
    "description": `${i < (element/2) ? `Bought ${faker.commerce.product()}` : `${faker.name.jobType()} fee`}` ,
    "value": faker.commerce.price(),
    "date": createAndModifyDate(faker.date.between('2016-01-01', '2020-01-01')),
    "id": faker.random.number()}, "random-expense");
  }
}

const createAndModifyDate = (obj) => {
  //uncomment selections to change the numbers into string months.
  // const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const string = JSON.stringify(obj);
  const split = string.split('-')
  const year = split[0][1] + split[0][2] + split[0][3] + split[0][4];
  // const month = monthName[parseInt(split[1]) - 1];
  const month = split[1];
  const day = split[2][0] + split[2][1];
  return `${day} ${month} ${year}`;
}
