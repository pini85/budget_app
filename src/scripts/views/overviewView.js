import * as localStorage from '../data/localStorage.js';
import * as faker from '../data/random.js';

export const displayMonth = () => {
  const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const date = new Date();
  const month = date.getMonth();
  const value = months[month];
  document.querySelector('.js-month').innerHTML = value;
  }


const thisMonthData = (type, month) => {
  if(localStorage.read(type)){
    const result = [];
    const data = localStorage.read(type);
    data.map(el => {

      const d = new Date();

      const thisMonth = d.getMonth() + 1;
      const thisYear = d.getYear();


      const dataDate = new Date(el.date);
      const dataMonth = dataDate.getMonth() + 1;
      const dataYear = dataDate.getYear();

      if(month === dataMonth && thisYear === dataYear){
        result.push(el);
      }

    });
     return result
  }
}

const value = (obj) => {
  let totalSum = [];
  if(obj === undefined || obj.length === 0){
    totalSum = 0;
    return totalSum;

 } else if(obj) {

  const length = obj.length;
  for(let i = 0; i < length; i++){
    const value = obj[i].value.replace(/,/, '');
    const integer = parseInt(value).toFixed(2);
    totalSum+=integer;
  }
  return parseInt(totalSum);
 }
}


export const displayValue = () => {
  const date = new Date();
  const dateMonth = date.getMonth()+1;
  const values = (value(thisMonthData('income',dateMonth)) + value(thisMonthData('random-income',dateMonth))) -
  (value(thisMonthData('expense',dateMonth)) + value(thisMonthData('random-expense',dateMonth)));
  document.querySelector('.overview__overall').innerHTML = values + '$';
  if(values > 0) {
    document.querySelector('.overview__overall').classList.add('overview__overall--green')
  } else {
    document.querySelector('.overview__overall').classList.add('overview__overall--red')
  }
};

export const displayDoughnut = () => {
  const date = new Date();
  const dateMonth = date.getMonth()+1;
  const ctx = document.getElementById('myChart').getContext('2d');
  const income = localStorage.total('income');
  const expense = localStorage.total('expense');
  const randomIncome = localStorage.total('random-income');
  const randomExpense = localStorage.total('random-expense');
  if(income > 0 || expense > 0 || randomIncome > 0 || randomExpense > 0) {
  document.querySelector('.overview__options').style.display ='none';

  const myDoughnutChart = new Chart(ctx, {

    type: 'doughnut',
    data: {
      datasets: [{
        data: [(value(thisMonthData('income',dateMonth)) + value(thisMonthData('random-income',dateMonth))),
               (value(thisMonthData('expense',dateMonth)) + value(thisMonthData('ranodm-expense',dateMonth)))],

        backgroundColor: [
          'rgb(30,135,75)',
          '#FF0000',
        ],
        borderColor: [
          'black',
          'black',
        ],
        borderWidth: 0.5,
      }],
    },

  });
 } else {
  const markup = `
    <div class = "overview__no-value"> No incomes or expenses detected. Please add some!</div>

    `
    document.querySelector('.container__body').insertAdjacentHTML('afterbegin', markup);
    document.querySelector('.chart-container').style.display ='none';
    document.querySelector('.overview__percentage').style.display ='none';
    document.querySelector('.overview__overall').style.display ='none';
    document.querySelector('.overview__options').style.visibility ='visible';
    document.querySelector('.js-random').addEventListener('click',() => {
    faker.income();
    faker.expense();
    location.reload();// need to reload page so we can find the dom and then delete it.
  });


 }
}

export const percentageTotal = () => {
  const income = localStorage.total('income');
  const expense = localStorage.total('expense');
  const randomIncome = localStorage.total('random-income');
  const randomExpense = localStorage.total('random-expense');
  if(income > expense && expense > 0) {
   const result = Math.round((income + randomIncome) / (expense + randomExpense) * 100);
   const markup = `
   <div class="overview__percentage overview__percentage--green">+${result}%</div>
   `;
    document.querySelector('.overview__percentage').innerHTML = markup;
  } else if(income < expense && income > 0) {
     const result = Math.round(((expense + randomExpense) / (income + randomIncome)) * 100);
     const markup = `
     <div class="overview__percentage overview__percentage--red">-${result}%</div>
     `;
    document.querySelector('.overview__percentage').innerHTML = markup;

  } else {
    console.log('hi');
  }
}
