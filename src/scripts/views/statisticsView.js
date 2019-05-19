import * as local from '../data/localStorage.js';


export const notice = () => {
  const income = local.length('income');
  const randomIncome = local.length('random-income');
  const expense = local.length('expense');
  const randomExpense = local.length('random-expense');
  if(income < 100 || randomIncome < 100 || expense < 100 || randomExpense < 100){
    document.querySelector('.js-notice').innerHTML = `You have only ${income + randomIncome}
    income items and ${expense + randomExpense} expense items. I recommend at least 100 items of each to get a better feel of the statistics!`;
  } else {
    document.querySelector('.js-notice').innerHTML = 'The more data the happier I am!'

  }

}

const removeNotice = () => {
   if(document.querySelector('.statistics__notice')){
      document.querySelector('.container__body--statistics').removeChild(document.querySelector(".statistics__notice"))
  }
}

const removeCharts = (el1, el2) => {
   if(document.getElementById(el1)) {
    document.querySelector('.chart-container').removeChild(document.getElementById(el1))
   } else if(document.getElementById(el2)){
    document.querySelector('.chart-container').removeChild(document.getElementById(el2))
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
//FIX THE ELSE STATMENT IF OBJ DOES NOT EXSIST IT WONT GIVE IT 0 FOR YEARLY AT LEAST
const yearlyData = (type,year) => {
  if(local.read(type)){
  const result = [];
  const data = local.read(type);
  data.map(el => {
    const d = new Date();
    const thisYear = d.getYear() - year;
    const dataDate = new Date(el.date);
    const dataYear = dataDate.getYear();
    if(thisYear === dataYear){
      result.push(el);
    }
  });
  return result
  }
}


export const yearly = () => {
   removeNotice();
   removeCharts("myChart-weekly","myChart-monthly")

    if(!document.getElementById('myChart-yearly')) {
    const markup = `
     <canvas id="myChart-yearly" width="400" height="350"></canvas>
    `;

    document.querySelector('.chart-container').insertAdjacentHTML('beforeend', markup);
}
    var ctx = document.getElementById("myChart-yearly");

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2019", "2018", "2017", "2016"],
        datasets: [{
            label: ' Yearly income',
            //0 = 2019, 1 = 2018, 2 = 2017, 3 = 2016
            data: [(value(yearlyData('income',0)) + value(yearlyData('random-income',0))) - (value(yearlyData('expense',0)) + value(yearlyData('random-expense',0))),
                   (value(yearlyData('income',1)) + value(yearlyData('random-income',1))) - (value(yearlyData('expense',1)) + value(yearlyData('random-expense',1))),
                   (value(yearlyData('income',2)) + value(yearlyData('random-income',2))) - (value(yearlyData('expense',2)) + value(yearlyData('random-expense',2))),
                   (value(yearlyData('income',3)) + value(yearlyData('random-income',3))) - (value(yearlyData('expense',3)) + value(yearlyData('random-expense',3))),
            ],
            backgroundColor: [
                'black',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'red',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 10
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}





const monthlyData = (type, month) => {
  if(local.read(type)){
    const result = [];
    const data = local.read(type);
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



export const  monthly = () => {
   removeNotice();
   removeCharts("myChart-weekly","myChart-yearly")


   if(!document.getElementById('myChart-monthly')) {
    const markup = `
     <canvas id="myChart-monthly" width="400" height="350"></canvas>
    `;

    document.querySelector('.chart-container').insertAdjacentHTML('beforeend', markup);
}
    var ctx = document.getElementById("myChart-monthly");

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: ' Monthly income',
            //1 = january
            data: [(value(monthlyData('income',1)) + value(monthlyData('random-income',1))) - (value(monthlyData('expense',1)) + value(monthlyData('random-expense',1))),
                   (value(monthlyData('income',2)) + value(monthlyData('random-income',2))) - (value(monthlyData('expense',2)) + value(monthlyData('random-expense',2))),
                   (value(monthlyData('income',3)) + value(monthlyData('random-income',3))) - (value(monthlyData('expense',3)) + value(monthlyData('random-expense',3))),
                   (value(monthlyData('income',4)) + value(monthlyData('random-income',4))) - (value(monthlyData('expense',4)) + value(monthlyData('random-expense',4))),
                   (value(monthlyData('income',5)) + value(monthlyData('random-income',5))) - (value(monthlyData('expense',5)) + value(monthlyData('random-expense',5))),
                   (value(monthlyData('income',6)) + value(monthlyData('random-income',6))) - (value(monthlyData('expense',6)) + value(monthlyData('random-expense',6))),
                   (value(monthlyData('income',7)) + value(monthlyData('random-income',7))) - (value(monthlyData('expense',7)) + value(monthlyData('random-expense',7))),
                   (value(monthlyData('income',8)) + value(monthlyData('random-income',8))) - (value(monthlyData('expense',8)) + value(monthlyData('random-expense',8))),
                   (value(monthlyData('income',9)) + value(monthlyData('random-income',9))) - (value(monthlyData('expense',9)) + value(monthlyData('random-expense',9))),
                   (value(monthlyData('income',10)) + value(monthlyData('random-income',10))) - (value(monthlyData('expense',10)) + value(monthlyData('random-expense',10))),
                   (value(monthlyData('income',11)) + value(monthlyData('random-income',11))) - (value(monthlyData('expense',11)) + value(monthlyData('random-expense',11))),
                  (value(monthlyData('income',12)) + value(monthlyData('random-income',12))) - (value(monthlyData('expense',12)) + value(monthlyData('random-expense',12))),
                  ],
            backgroundColor: [
                'black',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'red',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 10
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}


const day = (type, day) => {
  if(local.read(type)){
  const data = local.read(type);
  const pastSevenDays = [];
  const result = [];

  const d = new Date();
  const thisMonth = d.getMonth() + 1;

  const month = monthlyData(type, thisMonth)
  for(let i = 0; i < 6; i++){
      const d = new Date();
      const date= d.getDate() -i;

      month.forEach(el => {
      const dData = new Date(el.date);
      const dataDate = dData.getDate();

      if(date === dataDate){
        pastSevenDays.push(el);
      }
    });
  }
   pastSevenDays.map(el => {
    const d = new Date();
    const date = d.getDay();
    const dData = new Date(el.date);
    const dateData = dData.getDay();

    if(dateData === day && dateData <= date){
      //want to evaluate the day of the week and also not push objects that are the week before.
      //So we have the date variable as the value for the stopper.
      //So now when displayed if we are on thursday it will show only past days not friday and saturday.
      result.push(el);
    }
  });
  return result;
}
};

const sunday = day('random-income',0);
const monday = day('random-income',1);
const tuesday = day('random-income',2);
const wednesday = day('random-income',3);
const thursday = day('random-income',4);
const friday = day('random-income',5);
const saturday = day('random-income',6);


  export const weekly = () => {
    removeNotice();
    removeCharts("myChart-monthly","myChart-yearly")
    if(!document.getElementById('myChart-weekly')) {
    const markup = `
     <canvas id="myChart-weekly" width="400" height="350"></canvas>
    `;

    document.querySelector('.chart-container').insertAdjacentHTML('beforeend', markup);


}


var ctx = document.getElementById("myChart-weekly");

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"],
        datasets: [{
          //0 = sunday. We start the beginnnig of the week on sunday.
            label: '# of Votes',
            data: [(value(day('income',0)) + value(day('random-income',0))) - (value(day('expense',0)) + value(day('random-expense',0))),
                   (value(day('income',1)) + value(day('random-income',1))) - (value(day('expense',1)) + value(day('random-expense',1))),
                   (value(day('income',2)) + value(day('random-income',2))) - (value(day('expense',2)) + value(day('random-expense',2))),
                   (value(day('income',3)) + value(day('random-income',3))) - (value(day('expense',3)) + value(day('random-expense',3))),
                   (value(day('income',4)) + value(day('random-income',4))) - (value(day('expense',4)) + value(day('random-expense',4))),
                   (value(day('income',5)) + value(day('random-income',5))) - (value(day('expense',5)) + value(day('random-expense',5))),
                   (value(day('income',6)) + value(day('random-income',6))) - (value(day('expense',6)) + value(day('random-expense',6 ))),
                  ],
            backgroundColor: [
                'black',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'red',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 10
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}
