import * as localStorage from './localStorage.js';
var faker = require('faker');
const date = new Date();


export const income = () => {
var element = document.querySelector(".random-dropdown").value;

//income data faker
  for(let i= 0; i< element; i++) {
    localStorage.persistData({
      "description": `${i < (element/2) ? `Sold ${faker.commerce.product()}` : `${faker.name.jobType()} salary`}` ,
      "value": faker.commerce.price(),
      "date": faker.date.between('2016-01-01', new Date()),
      "id": faker.random.number()},"random-income");
  }
}
export const expense = () => {
  var element = document.querySelector(".random-dropdown").value;
  for(let i= 0; i< element; i++) {
  localStorage.persistData({
    "description": `${i < (element/2) ? `Bought ${faker.commerce.product()}` : `${faker.name.jobType()} fee`}` ,
    "value": faker.commerce.price(),
    "date": faker.date.between('2016-01-01',  new Date()),
    "id": faker.random.number()}, "random-expense");
  }
}



