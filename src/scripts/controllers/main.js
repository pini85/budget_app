import Budget from '../models/Budget.js';
import * as addView from '../views/addView.js';
import * as localStorage from '../data/localStorage.js'
import * as overView from '../controllers/overview.js'
import * as income from '../controllers/income.js'
import * as expense from '../controllers/expense.js'
import * as stats from '../controllers/statistics.js'

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


// Add Controller//
const controlBudgetIncome = () => {
  // Get params from UI
  const description = addView.getDescriptionIncome();
  const value = addView.getValueIncome();


  // Make new Budget object
  if (description.length > 0 && value > 0) {
    const newBudget = new Budget(description, value);

    newBudget.idIncome();

    // newBudget.calculateDate();
    //We need to modify the date only after we sorted the data.

    newBudget.modifyValue();

    localStorage.persistData(newBudget, 'income');

    addView.clearFieldsIncome();

    addView.animationIncome();
  }
};

const controlBudgetExpense = () => {
  // Get params from UI
  const description = addView.getDescriptionExpense();
  const value = addView.getValueExpense();

  // Make new Budget

  if (description.length > 0 && value > 0) {
    const newBudget = new Budget(description, value);

    newBudget.idExpense();

    // newBudget.calculateDate();

    newBudget.modifyValue();

    localStorage.persistData(newBudget, 'expense');

    addView.clearFieldsExpense();

    addView.animationExpense();
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


