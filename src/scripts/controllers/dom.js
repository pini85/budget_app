//Chrome mobile nav bar fix//

const chrome = () => {
    console.log('hi')
const isChromium = !!window.chrome;
  if (isChromium &&  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && document.querySelector('.container')) {
  // document.querySelector('.container').style.maxHeight="calc(100vh - 104px)";
    document.querySelector('.container').style.maxHeight = 'calc(100vh - 60px)';
    // document.body.style.position = 'fixed';
  }
};
chrome();

//Navigation animation//

const navContainer = () => {
  if (!document.querySelector('.js-show-container')) {
    const element = document.querySelector('.navigation__icons');
    element.classList.toggle('js-x');
    document.querySelector('.navigation__container').classList.remove('js-hide-container')
    document.querySelector('.navigation__container').classList.add('js-show-container')
    document.querySelector('.container__body').style.filter='blur(15px)';
    document.querySelector('.container__body').style.pointerEvents = 'none';
    document.querySelector('.container__body').style.userSelect = 'none';
  } else {
    const element = document.querySelector('.navigation__icons');
    element.classList.toggle('js-x');
    document.querySelector('.navigation__container').classList.remove('js-show-container')
    document.querySelector('.navigation__container').classList.add('js-hide-container')
    document.querySelector('.container__body').style.filter = 'none';
    document.querySelector('.container__body').style.pointerEvents = 'auto';
    document.querySelector('.container__body').style.userSelect = 'auto';
  }
};

if ( document.querySelector('.navigation__container')) {
  document.querySelector('.navigation').addEventListener('click', (navContainer));
}
//Disabling scroll to all pages//
const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const target = document.body;
disableBodyScroll(target);

