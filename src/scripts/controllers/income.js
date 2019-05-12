import * as incomeView from '../views/incomeView.js';



if (document.querySelector('body').className === 'income') {
  incomeView.displayIncome();
  incomeView.deleteItem('income');
  incomeView.deleteItem('random-income');
  document.querySelector('.js-delete-all').addEventListener('click',(incomeView.deleteAll));

}
