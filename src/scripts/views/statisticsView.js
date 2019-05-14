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
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"],
        datasets: [{
            label: '# of Votes',
            data: [-12, 19, 3  , 5, 2, 3, 1],
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
            label: '# of Votes',
            data: [-12, 19, 3, 5, 2, 3, 1, 5, 6, 5, 6, 32, 12],
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
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
        datasets: [{
            label: '# of Votes',
            data: [-12, 19, 3  , 5, 2, 3, 1],
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


