import * as incomeView from '../views/incomeView.js';



if (document.querySelector('body').className === 'income') {
  incomeView.displayIncome('income');
  incomeView.randomData();
  incomeView.deleteItem();
}
