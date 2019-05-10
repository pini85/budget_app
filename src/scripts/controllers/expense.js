import * as expenseView from '../views/expenseView.js';

if (document.querySelector('body').className === 'expense') {
  expenseView.displayExpense('expense');
  expenseView.deleteItem('expense');
  expenseView.deleteItem('random-expense');

}

