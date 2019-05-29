import * as stats from '../views/statisticsView';


if (document.querySelector('body').className === 'statistics') {
  stats.notice();
  document.querySelector('.js-random').addEventListener('click', stats.random);
  document.querySelector('.js-weekly').addEventListener('click', stats.weekly);
  document.querySelector('.js-monthly').addEventListener('click', stats.monthly);
  document.querySelector('.js-yearly').addEventListener('click', stats.yearly);
}
// const body = document.body.offsetHeight;
const body = document.body.clientHeight;
const body1 = document.body.offsetHeight;

// const header = document.querySelector('.header').clientHeight;
// console.log(clientHeight)
// // console.log(header)
// console.log(body)

// /* clientHeight includes padding.
// offsetHeight includes padding, scrollBar and borders. */

const header = document.querySelector('.header').clientHeight;
const sum = (body- header) + (header/2);
console.log(sum)

document.querySelector('.income.add').style.height = `${sum}px`;
document.querySelector('.expense.add').style.height = `${sum}px`;

// document.querySelector('.add').style.height = "1000px";
// document.querySelector('.expense.income').style.height = sum;

const test = `${body - header}/2`;
console.log(test)