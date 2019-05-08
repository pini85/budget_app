import * as expenseView from '../views/expenseView.js';

if (document.querySelector('body').className === 'expense') {
  expenseView.displayExpense('expense');
  expenseView.randomData();
  expenseView.deleteItem();

}

