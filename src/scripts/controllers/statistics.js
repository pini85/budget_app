import * as stats from '../views/statisticsView';


if (document.querySelector('body').className === 'statistics') {
  stats.notice();
  document.querySelector('.js-random').addEventListener('click', stats.random);
  document.querySelector('.js-weekly').addEventListener('click', stats.weekly);
  document.querySelector('.js-monthly').addEventListener('click', stats.monthly);
  document.querySelector('.js-yearly').addEventListener('click', stats.yearly);
}

// const w = window,
// d = document,
// e = d.documentElement,
// body = d.getElementsByTagName('body')[0],
// header = d.querySelector('.header'),
// bodyHeight = w.innerHeight || e.clientHeight || body.clientHeight,
// headerHeight = header.clientHeight;

// console.log(bodyHeight,headerHeight)







const height = window.innerHeight;


const body = document.body.offsetHeight;
const body1 = document.body.clientHeight;



// const sum = window - 


// // const header = document.querySelector('.header').clientHeight;
// // console.log(clientHeight)
// // // console.log(header)
// // console.log(body)

// // /* clientHeight includes padding.
// // offsetHeight includes padding, scrollBar and borders. */

const header = document.querySelector('.header');
const test = header.offsetHeight
const googleNav = 56
const sum = (((height - 57) - googleNav) / 2 );
console.log(sum)
// //20 is perfect in my phone. Try 22 in samsung. 21 just and just. Maybe do a media query between them.
// console.log(sum)

document.querySelector('.income.add').style.height = `${sum}px`;
document.querySelector('.expense.add').style.height = `${sum}px`;
// const test = `${body - header}/2`;
// // console.log(test)

// // document.querySelector('.add').style.height = "1000px";
// // document.querySelector('.expense.income').style.height = sum;

