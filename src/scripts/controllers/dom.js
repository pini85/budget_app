const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;

disableBodyScroll(document.getElementsByTagName("BODY")[0]);
disableBodyScroll(document.getElementsByTagName("HTML")[0]);
 

// Chrome mobile nav bar fix//

// const chrome = () => {
// const isChromium = !!window.chrome;
//   if (isChromium &&  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && document.querySelector('.container')) {
//   // document.querySelector('.container').style.maxHeight="calc(100vh - 104px)";
//     // document.querySelector('.container').style.maxHeight = 'calc(100vh - 60px)';
//     // document.body.style.position = 'fixed';
//   }
// };
// chrome();
// Navigation animation//
if (document.querySelector('.navigation__container')) {
  const nav = () => {
    if (!document.querySelector('.js-show-container')) {
      const element = document.querySelector('.navigation__icons');
      element.classList.toggle('js-x');
      document.querySelector('.navigation__container').classList.remove('js-hide-container');
      document.querySelector('.navigation__container').classList.add('js-show-container');
      document.querySelector('.container__body').style.filter = 'blur(15px)';
    } else if (document.querySelector('.js-show-container')) {
      const element = document.querySelector('.navigation__icons');
      element.classList.toggle('js-x');
      document.querySelector('.navigation__container').classList.remove('js-show-container');
      document.querySelector('.navigation__container').classList.add('js-hide-container');
      document.querySelector('.container__body').style.filter = 'none';
    }
  };

  document.querySelector('.navigation').addEventListener('click', (nav));

  // Clicked outside the nav collpases the nav as well functionality.
  document.querySelector('.container__body').addEventListener('click', () => {
    if (document.querySelector('.js-show-container')) {
      console.log('hi');
      const element = document.querySelector('.navigation__icons');
      element.classList.toggle('js-x');
      document.querySelector('.navigation__container').classList.remove('js-show-container');
      document.querySelector('.navigation__container').classList.add('js-hide-container');
      document.querySelector('.container__body').style.filter = 'none';
    }
  });
}


// Fixes the Chrome mobile nav problem//
// Identifies how tall is the window and makes the body height that size
  document.onreadystatechange = function () {
    if (document.readyState == 'complete') {
      const w = window;
      const d = document;
      const e = d.documentElement;
      const body = d.getElementsByTagName('body')[0];
      const bodyHeight = w.innerHeight || e.clientHeight || body.clientHeight;
      document.body.style.height = `${bodyHeight}px`;
      const mq = window.matchMedia( "(max-width: 600px)" );
      if (!!window.chrome && mq.matches) {
        console.log('hi')
        document.querySelector('.container__body').style.height=`calc(${bodyHeight}px - 58px)`;
      
      console.log(bodyHeight);
    }
  };
}
 

  // height: calc(100vh - 94px);
// Add the Web Share API

if (document.querySelector('.share-button')) {
  const shareButton = document.querySelector('.share-button');
  const shareDialog = document.querySelector('.share-dialog');
  const closeButton = document.querySelector('.close-button');

  shareButton.addEventListener('click', (event) => {
    if (navigator.share) {
      navigator.share({
        title: 'Amazing budget app',
        url: 'https://my-amazing-budget-app.netlify.com/',
      }).then(() => {
        console.log('Thanks for sharing!');
      })
        .catch(console.error);
    } else {
      shareDialog.classList.add('is-open');
    }
  });

  closeButton.addEventListener('click', (event) => {
    shareDialog.classList.remove('is-open');
  });
}
