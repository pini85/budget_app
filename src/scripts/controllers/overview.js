
const total = (type) => {
  if (localStorage.getItem(type)) {
    const parsed = JSON.parse(localStorage.getItem(type));
    const { length } = parsed;
    let sum = 0;
    for (let i = 0; i < length; i++) {
      sum += parseInt(parsed[i].value);
    }
    return sum;
  }
};
const incomeTotal = total('income');
const expenseTotal = total('expense');
console.log(incomeTotal);

const yalla = type => `total${type}is`;
yalla('income');

const ctx = document.getElementById('myChart').getContext('2d');

if (incomeTotal > 0 || expenseTotal > 0) {
  var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Income', 'Expense'],
      datasets: [{
        data: [incomeTotal, expenseTotal],

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
  var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [],

        backgroundColor: [
          'rgb(250, 255, 252)',
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
}


// const test = newBudget.total('expense');
// console.log(tes);

document.querySelector('.navigation__overview').classList.add('active');

document.querySelector('.navigation__addItem').addEventListener('mouseover', () => {
  document.querySelector('.navigation__overview').classList.toggle('active');
});
document.querySelector('.navigation__addItem').addEventListener('mouseout', () => {
  document.querySelector('.navigation__overview').classList.add('active');
});

document.querySelector('.navigation__statistics').addEventListener('mouseover', () => {
  document.querySelector('.navigation__overview').classList.remove('active');
});
document.querySelector('.navigation__statistics').addEventListener('mouseout', () => {
  document.querySelector('.navigation__overview').classList.add('active');
});

// document.querySelectorAll('.navigation__addItem' + ',' + '.navigation__statistics').addEventListener('mouseover',function() {


// });


//  fields = document.querySelectorAll(domStrings.inputDescription + ',' + domStrings.inputValue);

// document.querySelectorAll('navigation__')


//  <canvas id="myChart" width="400" height="400"></canvas>
// <script>
// var ctx = document.getElementById("myChart");
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3  , 5, 2, 3],
//             backgroundColor: [
//                 'black',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'red',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 10
//         }]
//     },

//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });
// </script>
