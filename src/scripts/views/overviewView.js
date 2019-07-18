import * as local from '../data/localStorage.js';
import * as faker from '../data/random.js';
export const displayMonth = () => {
  const date = new Date();
  const dateMonth = date.getMonth() + 1;
  if (value(thisMonthData('expense', dateMonth)) > 0 || value(thisMonthData('random-expense', dateMonth)) > 0
    || value(thisMonthData('income', dateMonth)) > 0 || value(thisMonthData('random-income', dateMonth)) > 0) {
    const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date();
    const month = date.getMonth();
    const value = months[month];
    document.querySelector('.js-month').innerHTML = value;
  }
};


const thisMonthData = (type, month) => {
  if (local.read(type)) {
    const result = [];
    const data = local.read(type);
    data.map((el) => {
      const d = new Date();

      const thisMonth = d.getMonth() + 1;
      const thisYear = d.getYear();


      const dataDate = new Date(el.date);
      const dataMonth = dataDate.getMonth() + 1;
      const dataYear = dataDate.getYear();

      if (month === dataMonth && thisYear === dataYear) {
        result.push(el);
      }
    });
    return result;
  }
};

const value = (obj) => {
  let totalSum = [];
  if (obj === undefined || obj.length === 0) {
    totalSum = 0;
    return totalSum;
  } if (obj) {
    let totalSum = 0;
    obj.forEach((el) => {
      totalSum += (parseFloat(el.value));
    });
    return totalSum;
  }
};


export const displayValue = () => {
  const date = new Date();
  const dateMonth = date.getMonth() + 1;
  const values = (value(thisMonthData('income', dateMonth)) + value(thisMonthData('random-income', dateMonth)))
  - (value(thisMonthData('expense', dateMonth)) + value(thisMonthData('random-expense', dateMonth)));
  document.querySelector('.overview__overall').innerHTML = `${values}$`;
  if (values > 0) {
    document.querySelector('.overview__overall').classList.add('overview__overall--green');
  } else {
    document.querySelector('.overview__overall').classList.add('overview__overall--red');
  }
};
const datess = new Date();
const dateMonth = datess.getMonth() + 1;
const test = value(thisMonthData('random-income', dateMonth));
console.log(test);

export const displayDoughnut = () => {
  const date = new Date();
  const dateMonth = date.getMonth() + 1;
  const ctx = document.getElementById('myChart').getContext('2d');
  const income = local.total('income');
  const expense = local.total('expense');
  const randomIncome = local.total('random-income');
  const randomExpense = local.total('random-expense');
  if (value(thisMonthData('expense', dateMonth)) > 0 || value(thisMonthData('random-expense', dateMonth)) > 0
  || value(thisMonthData('income', dateMonth)) > 0 || value(thisMonthData('random-income', dateMonth)) > 0) {
    document.querySelector('.js-with-no-chart').style.display = 'none';

    const myDoughnutChart = new Chart(ctx, {

      type: 'doughnut',
      data: {
        labels: ['Income', 'Expense'],
        datasets: [{
          data: [(value(thisMonthData('income', dateMonth)) + value(thisMonthData('random-income', dateMonth))),
            (value(thisMonthData('expense', dateMonth)) + value(thisMonthData('random-expense', dateMonth)))],

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
      options: {
        cutoutPercentage: 70,
        tooltips: {
          titleFontFamily: "'Lato', sans-serif",
          bodyFontSize: 20,
          bodyFontColor: '#edfbf3',

        },
      },
    });
  } else {
    const displayMonth = () => {
      const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const date = new Date();
      const month = date.getMonth();
      const value = months[month];
      return value;
    };
    const markup = `
    <div class = "overview__no-value"> No incomes or expenses detected for this month (${displayMonth()}). Please add some!</div>

    `;
    document.querySelector('.container__body').insertAdjacentHTML('afterbegin', markup);
    document.querySelector('.chart-container').style.display = 'none';
    document.querySelector('.overview__percentage').style.display = 'none';
    document.querySelector('.overview__overall').style.display = 'none';
  }
};

export const randomData = () => {
  const nodes = document.querySelectorAll('.js-random');
  console.log(nodes);
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const fakerMonth = '2016-01-01';
  const displayMonth = `${year}-0${month}-01`;
  nodes.forEach((el) => {
    el.addEventListener('click', () => {
      faker.income(displayMonth);
      faker.expense(displayMonth);
      location.reload();// need to reload page so we can find the dom and then delete it.
    });
  });
};


export const percentageTotal = () => {
  const income = local.total('income');
  const expense = local.total('expense');
  const randomIncome = local.total('random-income');
  const randomExpense = local.total('random-expense');
  if (income + randomIncome > expense + randomExpense) {
    const result = Math.round((income + randomIncome) / (expense + randomExpense) * 100);
    const markup = `
   <div class="overview__percentage overview__percentage--green">+${result}%</div>
   `;
    document.querySelector('.overview__percentage').innerHTML = markup;
  } else if (income + randomIncome > 0 && income + randomIncome < expense + randomExpense) {
    const result = Math.round(((expense + randomExpense) / (income + randomIncome)) * 100);
    const markup = `
     <div class="overview__percentage overview__percentage--red">-${result}%</div>
     `;
    document.querySelector('.overview__percentage').innerHTML = markup;
  } else {
    console.log('shiiit');
  }
};

const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const fakerMonth = '2016-01-01';
const x = `${year}-0${month}-01`;
