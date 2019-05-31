//Chrome mobile nav bar fix//

const chrome = () => {
    console.log('hi')
const isChromium = !!window.chrome;
  if (isChromium &&  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && document.querySelector('.container')) {
  // document.querySelector('.container').style.maxHeight="calc(100vh - 104px)";
    // document.querySelector('.container').style.maxHeight = 'calc(100vh - 60px)';
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



const w = window,
d = document,
e = d.documentElement,
body = d.getElementsByTagName('body')[0],
// header = d.querySelector('.header'),
bodyHeight = w.innerHeight || e.clientHeight || body.clientHeight;
// headerHeight = header.clientHeight;

console.log(bodyHeight)
const chromeHeight = 0

document.body.style.height= `${bodyHeight - chromeHeight}px`;





// const height = window.innerHeight;


// const body = document.body.offsetHeight;
// const body1 = document.body.clientHeight;



// const sum = window - 


// // const header = document.querySelector('.header').clientHeight;
// // console.log(clientHeight)
// // // console.log(header)
// // console.log(body)

// // /* clientHeight includes padding.
// // offsetHeight includes padding, scrollBar and borders. */






// ///////////////////////////////////////
// const header = document.querySelector('.header');
// const test = header.offsetHeight
// const googleNav = 56
// const sum = ((height - googleNav) / 2 );
// console.log(sum)
// //STILL HAVE 1 PX MORE IN SAMSUNG S5
// document.querySelector('.income.add').style.height = `${sum}px`;
// document.querySelector('.expense.add').style.height = `${sum}px`;
// ////////////////////////////////////////////////////////////











// const test = `${body - header}/2`;
// // console.log(test)

// // document.querySelector('.add').style.height = "1000px";
// // document.querySelector('.expense.income').style.height = sum;

