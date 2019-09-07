import Phone from '../../images/phone.png';

if (document.querySelector('.navigation__item.js-mobile') || document.querySelector('.navigation__item.js-desktop')) {
  document.querySelector('.navigation__item.js-mobile').addEventListener('click', () => {
    localStorage.setItem('mobile', true);
  });

  document.querySelector('.navigation__item.js-desktop').addEventListener('click', () => {
    localStorage.setItem('mobile', false);
  });
}


if (localStorage.getItem('mobile') === 'true' && !document.querySelector('body').classList.contains('index')) {
  const body = document.querySelector('body');

  // hidden div for navigation
  const hide = document.createElement('div');
  hide.classList.add('hide-div');
  body.appendChild(hide);


  // phone picture
  const img = document.createElement('img');
  img.alt = 'Phone frame';
  img.width = 300;
  img.src = Phone;
  img.classList.add('phone');
  body.appendChild(img);

  // html//
  document.querySelector('html').classList.add('html-mobile-view');

//modal//


  // container//
  if (document.querySelector('.container')) {
    document.querySelector('.container').classList.add('container-mobile-view');
  }

  // Heading primary
  if (document.querySelector('.heading-primary')) {
    document.querySelector('.heading-primary').style.fontSize = '4vh';
  }


  // inner container//
  if (document.querySelector('.container__body')) {
    document.querySelector('.container__body').classList.add('container__body-mobile-view');
  }
  if (document.querySelector('.add.income')) {
    document.querySelector('.add.income').classList.add('income-mobile-view');
    document.querySelector('.add.expense').classList.add('expense-mobile-view');
  }

  // header//
  if (document.querySelector('.header')) {
    document.querySelector('.header').style.height = '58px';
  }
  // navigation//
  if (document.querySelector('.navigation__item.js-mobile')) {
    document.querySelector('.navigation__item.js-mobile').style.display = 'none';
  }
  if (document.querySelector('.navigation')) {
    document.querySelector('.navigation').style.marginRight = '9rem';
    document.querySelector('.navigation__ul').classList.add('navigation__ul-mobile-view');
    document.querySelector('.navigation__container').classList.add('navigation__container-mobile-view');
    const node = Array.from(document.querySelector('.navigation__ul').children);
    node.forEach((node) => {
      if (node.lastElementChild) {
        '';
        console.log('i');
      }
      node.classList.add('navigation__item-mobile-view');
    });
    document.querySelector('.navigation__li').classList.add('navigation__li-mobile');
  }


  // Styles//
  const mqw = window.matchMedia( "(max-width: 1200px)" );
  const mqh = window.matchMedia("(max-height:610px)");
  if(mqw.matches && mqh.matches) {
    document.querySelector('html').style.fontSize = '28%';
    document.querySelector('.btn--expense').style.marginBottom = '2rem';

  } else {
    document.querySelector('html').style.fontSize = '38%';

  }
    

  // document.querySelector('html').style.fontSize = '43%';
  if (document.querySelector('.chart-container')) {
    document.querySelector('.chart-container').style.width = '49vh';
  }


  // add//
  if (document.querySelector('body').className === 'add') {
    document.querySelector('.js-income').style.display = 'flex';
    document.querySelector('.js-income').style.flexDirection = 'column';
    document.querySelector('.js-income-description').style.fontSize = '3rem';
    document.querySelector('.add__description').style.marginBottom = '3rem';
    document.querySelector('.js-income-value').style.fontSize = '3rem';
    document.querySelector('.js-expense').style.display = 'flex';
    document.querySelector('.js-expense').style.flexDirection = 'column';
    document.querySelector('.js-expense-description').style.fontSize = '3rem';
    document.querySelector('.js-expense-description').style.marginBottom = '3rem';
    document.querySelector('.js-expense-value').style.fontSize = '3rem';
    document.querySelector('.btn--income').style.height = '5rem';
    document.querySelector('.btn--income').style.width = '8rem';
    document.querySelector('.btn--income').style.fontSize = '2.8rem';
    document.querySelector('.btn--expense').style.height = '5rem';
    document.querySelector('.btn--expense').style.width = '8rem';
    document.querySelector('.btn--expense').style.fontSize = '2.8rem';
  }
  // income//
  if (document.querySelector('.item__container-description')) {
    console.log('hiiii');
    document.querySelector('.item__container-description').style.width = '90%';
    document.querySelector('.item__container').style.width = '90%';
  }


  // expense//

  if (document.querySelector('.item__container-description') && document.querySelector('.expense')) {
    // override .expense to get the color of the background different on mobile view
    document.querySelector('.expense').style.backgroundColor = '#edfbf3';
    document.querySelector('.item__container-description').style.width = '90%';
    document.querySelector('.item__container').style.width = '90%';

    // item__container {
    //     width: 100%;
    //     grid-row-gap: 2rem;
  }

  // /Statistics
  if (document.querySelector('.js-weekly') && document.querySelector('.statistics')) {
    document.querySelector('.container__body--statistics').style.width = '100%';
    document.querySelector('.statistics__options').style.width = '100%';
    document.querySelector('.statistics__notice').style.padding = '2rem   ';
  }
} else if (document.querySelector('.navigation__item.js-desktop')) {
  document.querySelector('.navigation__item.js-desktop').style.display = 'none';
}
