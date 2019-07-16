import * as expenseView from '../views/expenseView.js';

if (document.querySelector('body').className === 'expenses') {
  expenseView.displayExpense();
  expenseView.deleteItem('expense');
  expenseView.deleteItem('random-expense');
  document.querySelector('.js-delete-all').addEventListener('click', (expenseView.deleteAll));
}
