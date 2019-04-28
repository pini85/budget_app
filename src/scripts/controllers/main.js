import Budget from '../models/Budget.js';
import * as addView from '../views/addView.js';
import { displayIncome } from '../views/incomeView.js';
import * as overView from '../controllers/overview.js'
require ('../../styles/sass/main.scss')



// localStorage.setItem('x', document.querySelector('.item__container').innerHTML);

// var data = {
//     allItems: {
//       exp: [],
//       inc: []
//     },
//     totals: {
//       exp: 0,
//       inc: 0
//     },
//     budget: 0,
//     percentage: -1


const state = {
  inc: [],
  exp: [],
};

const controllerOverview = () => {


}
// Add Controller//
const controlBudgetIncome = () => {
  // Get params from UI
  const description = addView.getDescriptionIncome();
  const value = addView.getValueIncome();

  // Make new Budget object
  if (description.length > 0 && value.length > 0) {
    const newBudget = new Budget(description, value);
    // state.inc.push(newBudget);
    // const x = state.inc;
    // Function to save to localhost from module.
    newBudget.idIncome();
    newBudget.calculateDate();


    newBudget.persistData(newBudget, 'income');

    // Function to give to state
    // const data = newBudget.readDataIncome();
    // const unique = [...new Set(data)];
    // state.inc.push(unique);
    // console.log(state);
    // let unique = [...new Set(myArray)];
    // state.inc.push([...new Set(data)]);



   displayIncome(newBudget.id, newBudget.date, newBudget.description, newBudget.value);


    // Get all values
    const test = newBudget.total('income');
    console.log(test);


    // // Update UI. Clear fields and insert animation
    addView.clearFieldsIncome();
    addView.animationIncome();
  }
};

const controlBudgetExpense = () => {
  // Get params from UI
  const description = addView.getDescriptionExpense();
  const value = addView.getValueExpense();

  // Make new Budget

  if (description.length > 0 && value.length > 0) {
    const newBudget = new Budget(description, value);

    // Save to local storage

    newBudget.persistData(newBudget, 'expense');

    const data = newBudget.readData('expense');

    // Get all values
    const test = newBudget.total('expense');


    // Update UI. Clear fields and insert animation
    addView.clearFieldsIncome();
    addView.animationIncome();
  }
};

// add.html//

if (document.querySelector('body').className === 'add') {
  document.querySelector('.btn--income').addEventListener('click', (e) => {
    const btn = e.target.closest('.btn--income');
    if (btn) {
      controlBudgetIncome();
    }
  });
  if (document.querySelector('body').className === 'add') {
    document.querySelector('.btn--expense').addEventListener('click', (e) => {
      const btn = e.target.closest('.btn--expense');
      if (btn) {
        controlBudgetExpense();
      }
    });
  }
}



// const test = JSON.parse(localStorage.income);

// const x = test.findIndex => (element,index) {
//   console.log(element);
//   console.log(index);


// }
// console.log(x);
//

// const x = test.slice(-1)[0].id;
// console.log(x);


// var x = document.querySelectorAll('.item');
// console.log(x);
// const y = Array.from(x);
// console.log(y);
// const z = y.forEach(el => console.log(parseInt(el.getAttribute("href").split('-')[1])));
//   const yy = y.forEach(el => console.log(parseInt(el.getAttribute("href").split('#')[1])));

// console.log(yy);


// var x = document.querySelectorAll(".item[href]"). ;
// const x = document.querySelectorAll('.item');
// document.getElementById("aaa").getAttribute("href");
// const query = document.querySelectorAll('.item');
// const queryToArray = Array.from(query);
// const iterate = queryToArray.forEach(el => parseInt(el.getAttribute("href")));
// queryToArray.forEach(el => console.log(el.getAttribute("href")))
// queryToArray.forEach(el => console.log(parseInt(el.getAttribute("href").split('#')[1])))


// const query = document.querySelectorAll('.item');
// const queryToArray = Array.from(query);
// // const iterate = queryToArray.forEach(el => parseInt(el.getAttribute("href")));

// queryToArray.filter(el => el.getAttribute("href").split('#')[1] != income[i].id)


// if(queryToArray.map(el => console.log(parseInt(el.getAttribute("href").split('#')[1])) != console.log(income[i].id)))

// const x = JSON.parse(localStorage.getItem('income'))[0].id;
// console.log(x);

//    const test = document.querySelectorAll('.item');
// const queryToArray = Array.from(test);
// const x = parseInt(queryToArray[0].getAttribute('href'));
// console.log(x);
// console.log(JSON.parse(localStorage.getItem('income'))[0].id)
