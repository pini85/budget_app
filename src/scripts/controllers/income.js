import * as incomeView from '../views/incomeView.js';



if (document.querySelector('body').className === 'income') {
  incomeView.displayIncome();
  // incomeView.randomData('random-income');
  incomeView.deleteItem('income');
  incomeView.deleteItem('random-income');
}



 // const date = income[0].date.split(' ');
  // const test = date[2];
  // console.log(test);

  //Compare year
  //Compare month
  //Compare day
  //Put in front the most recent date in a new array
  // iterate over the new array
