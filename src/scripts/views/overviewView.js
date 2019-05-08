import * as localStorage from '../data/localStorage.js'

export const displayValue = () => {
  const value = localStorage.totalValue();
  document.querySelector('.overview__overall').innerHTML = value + '$';
  if(value > 0) {
    document.querySelector('.overview__overall').classList.add('overview__overall--green')
  } else {
    document.querySelector('.overview__overall').classList.add('overview__overall--red')
  }
};

export const displayDoughnut = () => {
  const ctx = document.getElementById('myChart').getContext('2d');
  const income = localStorage.total('income');
  const expense = localStorage.total('expense');
  if(income > 0 || expense > 0) {
  const myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [income, expense],

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

     <div class="btn btn--dark-green ul-margin-top-big js-random">Random data</div>

    `
    document.querySelector('.container__body').insertAdjacentHTML('beforeend', markup);
    document.querySelector('.chart-container').style.display ='none';
    document.querySelector('.overview__percentage').style.display ='none';
    document.querySelector('.overview__overall').style.display ='none';


 }
}
export const percentageTotal = () => {
  const income = localStorage.total('income');
  const expense = localStorage.total('expense');
  if(income > expense && expense > 0) {
   const result = Math.round((income / expense) * 100);
   const markup = `
   <div class="overview__percentage overview__percentage--green">+${result}%</div>
   `;
    document.querySelector('.overview__percentage').innerHTML = markup;
  } else if(income < expense && income > 0) {
     const result = Math.round((expense / income) * 100);
     const markup = `
     <div class="overview__percentage overview__percentage--red">-${result}%</div>
     `;
    document.querySelector('.overview__percentage').innerHTML = markup;

  } else {
    console.log('hi');
  }
}
