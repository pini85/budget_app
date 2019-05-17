import * as stats from '../views/statisticsView.js';
import * as localStorage from '../data/localStorage.js';

if (document.querySelector('body').className === 'statistics') {

  document.querySelector('.js-weekly').addEventListener('click', stats.weekly);
  document.querySelector('.js-monthly').addEventListener('click', stats.monthly);
  document.querySelector('.js-yearly').addEventListener('click', stats.yearly);
}

// const value = (obj) => {
//    let totalSum = 0
//   const length = obj.length;
//   for(let i = 0; i < length; i++){
//     const value = obj[i].value.replace(/,/, '');
//     const integer = parseInt(value);
//     totalSum+=integer;
//   }
//   return totalSum;

// }

// const yearly = (type,year) => {
//   const result = [];
//   const data = localStorage.read(type);
//   data.map(el => {

//     const d = new Date();

//     const thisYear = d.getYear() - year;



//     const dataDate = new Date(el.date);
//     const dataYear = dataDate.getYear();


//     if(thisYear === dataYear){
//       result.push(el);
//     }
//   });
//   return result
// }
// const year2019 = yearly('random-income',0)
// const year2018 = yearly('random-income',1)
// const year2017 = yearly('random-income',2)
// const year2016 = yearly('random-income',3)


// const monthly = (type, month) => {
//   const result = [];
//   const data = localStorage.read(type);
//   data.map(el => {

//     const d = new Date();

//     const thisMonth = d.getMonth() + 1;
//     const thisYear = d.getYear();


//     const dataDate = new Date(el.date);
//     const dataMonth = dataDate.getMonth() + 1;
//     const dataYear = dataDate.getYear();

//     if(month === dataMonth && thisYear === dataYear){
//       result.push(el);
//     }
//   });
//   return result
// }

// const january = monthly('random-income', 1);
// const febuary = monthly('random-income', 2);
// const march = monthly('random-income', 3);
// const april = monthly('random-income', 4);
// const may = monthly('random-income', 5);
// const june = monthly('random-income', 6);
// const july = monthly('random-income', 7);
// const august = monthly('random-income', 8);
// const september = monthly('random-income', 9);
// const october = monthly('random-income', 10);
// const november = monthly('random-income', 11);
// const december = monthly('random-income', 12)



// const day = (type, day) => {
//   const data = localStorage.read(type);
//   const pastSevenDays = [];
//   const result = [];

//   const d = new Date();
//   const thisMonth = d.getMonth() + 1;

//   const month = monthly(type, thisMonth)
//   for(let i = 0; i < 6; i++){
//       const d = new Date();
//       const date= d.getDate() -i;

//       month.forEach(el => {
//       const dData = new Date(el.date);
//       const dataDate = dData.getDate();
//       // console.log(dataDate);

//       if(date === dataDate){
//         pastSevenDays.push(el);
//       }
//     });
//   }
//    pastSevenDays.map(el => {
//     const d = new Date();
//     const date = d.getDay();
//     console.log(date)
//     const dData = new Date(el.date);
//     const dateData = dData.getDay();

//     if(dateData === day && dateData <= date){

//       //want to evaluate the day of the week and also not push objects that are the week before.
//       //So we have the date variable as the value for the stopper.
//       //So now when displayed if we are on thursday it will show only past days not friday and saturday.
//       result.push(el);
//     }
//   });
//   return result;
// };

// const sunday = day('random-income',0);
// const monday = day('random-income',1);
// const tuesday = day('random-income',2);
// const wednesday = day('random-income',3);
// const thursday = day('random-income',4);
// const friday = day('random-income',5);
// const saturday = day('random-income',6);

// console.log(wednesday);
