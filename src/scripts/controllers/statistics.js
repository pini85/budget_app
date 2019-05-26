import * as stats from '../views/statisticsView.js';


if (document.querySelector('body').className === 'statistics') {
  stats.notice();
  document.querySelector('.js-random').addEventListener('click', stats.random);
  document.querySelector('.js-weekly').addEventListener('click', stats.weekly);
  document.querySelector('.js-monthly').addEventListener('click', stats.monthly);
  document.querySelector('.js-yearly').addEventListener('click', stats.yearly);
}

const isChromium = !!window.chrome;
if(isChromium &&  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent &&  document.querySelector('.container') )){
    console.log('hellooooo')
  // document.querySelector('.container').style.maxHeight="calc(100vh - 65px)";

}


console.log(window.innerHeight)


// function calcVH() {
//   var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
//   document.getElementById("selector").setAttribute("style", "height:" + vH + "px;");
// }
// calcVH();
// window.addEventListener('onorientationchange', calcVH, true);


// PROBLEMS WITH CHROME FULL SCREEN NAV BAR!
