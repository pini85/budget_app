import * as stats from '../views/statisticsView';


if (document.querySelector('body').className === 'statistics') {
  stats.notice();
  document.querySelector('.js-random').addEventListener('click', stats.random);
  document.querySelector('.js-weekly').addEventListener('click', stats.weekly);
  document.querySelector('.js-monthly').addEventListener('click', stats.monthly);
  document.querySelector('.js-yearly').addEventListener('click', stats.yearly);
}
