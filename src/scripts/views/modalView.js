import * as local from '../data/localStorage.js';

if (document.querySelector('.index')) {
  document.querySelector('.js-mobile').addEventListener('click', () => {
    localStorage.setItem('mobile', true);
  });
  document.querySelector('.js-desktop').addEventListener('click', () => {
    localStorage.setItem('mobile', false);
  });
};