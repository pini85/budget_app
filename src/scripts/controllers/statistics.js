import * as stats from '../views/statisticsView.js';
import * as localStorage from '../data/localStorage.js';

if (document.querySelector('body').className === 'statistics') {

  document.querySelector('.js-weekly').addEventListener('click', stats.weekly);
  document.querySelector('.js-monthly').addEventListener('click', stats.monthly);
  document.querySelector('.js-yearly').addEventListener('click', stats.yearly);
}



const x = localStorage.read('random-income');


const y = new Date();


const yy =  y.getDay();




const yalla = () => {
  const array = [];
  const data = localStorage.read('random-income');
  data.map(el => {

    var d = new Date();
      console.log(d.setMonth(0));
    console.log(month);
    console.log(d);
    const thisMonth = d.getMonth() + 1;
    const thisYear = d.getYear();


    const test = new Date(el.date);
    const dataMonth = test.getMonth() + 1;
    const dataYear = test.getYear();

    if(thisMonth === dataMonth && thisYear === dataYear){
      array.push(el);

    }


  });
  return array


}


  console.log(yalla());


const sevenDays = () => {
   const data = localStorage.read('income');
   const result = [];
   data.map(el => {
    for (let i=0; i<7; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        result.push( formatDate(d) )
    }

    return(result.join(','));

   })


}

