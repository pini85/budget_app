import Budget from '../models/Budget.js';
import * as addView from '../views/addView.js';
import * as dom from './dom';
import * as localStorage from '../data/localStorage.js';

import imgPhone from '../../images/phone.js';

const controlBudgetIncome = () => {
  // Get params from UI
  const description = addView.getDescriptionIncome();
  const value = addView.getValueIncome();


  // Make new Budget object
  if (description.length > 0 && value > 0) {
    const newBudget = new Budget(description, value);
   
    newBudget.idIncome();

    // newBudget.calculateDate();
    // We need to modify the date only after we sorted the data.

    parseInt(newBudget.modifyValue());

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
  // imgPhone();
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
