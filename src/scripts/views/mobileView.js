import Phone from '../../images/phone.png';
if(document.querySelector('.navigation__item.js-mobile') || document.querySelector('.navigation__item.js-desktop')) {
    document.querySelector('.navigation__item.js-mobile').addEventListener('click',() => {
       localStorage.setItem('mobile',true)
    });

    document.querySelector('.navigation__item.js-desktop').addEventListener('click',() => {
        localStorage.setItem('mobile',false)
      
     });
}


    

if (localStorage.getItem('mobile') === 'true') {
    const body = document.querySelector('body');

    //hidden div for navigation
    const hide = document.createElement('div');
    hide.classList.add("hide-div");
    body.appendChild(hide);
   

//phone picture
    const img = document.createElement('img');
    img.alt = 'Phone frame';
    img.width = 300;
    img.src = Phone;
    img.classList.add("phone");
    body.appendChild(img);

//html//
    document.querySelector('html').classList.add('html-mobile-view');

   

//container//
    document.querySelector('.container').classList.add('container-mobile-view');

//Heading primary

document.querySelector('.heading-primary').style.fontSize="5.5rem";


 //inner container//
 document.querySelector('.container__body').classList.add('container__body-mobile-view');
 if( document.querySelector('.add.income')) {
    document.querySelector('.add.income').classList.add('income-mobile-view');
    document.querySelector('.add.expense').classList.add('expense-mobile-view');
 }

//navigation//
if( document.querySelector('.navigation__item.js-mobile')) {
    document.querySelector('.navigation__item.js-mobile').style.display="none";
}
    document.querySelector('.navigation__ul').classList.add('navigation__ul-mobile-view');
    document.querySelector('.navigation__container').classList.add('navigation__container-mobile-view');
    const node =  Array.from(document.querySelector('.navigation__ul').children);
    node.forEach(node =>{
        if(node.lastElementChild) {``
            console.log('i')
        }
        node.classList.add('navigation__item-mobile-view');
    });
    document.querySelector('.navigation__li').classList.add('navigation__li-mobile');


    //Styles//

document.querySelector('html').style.fontSize="43%";
if(document.querySelector('.chart-container')) {
document.querySelector('.chart-container').style.width="55vh";
}

//income//
if(document.querySelector('.item__container-description') &&  document.querySelector('.income') ) {
     document.querySelector('.item__container').style.width = "100%";

}



//expense//

if(document.querySelector('.item__container-description') &&  document.querySelector('.expense') ) {
    //override .expense to get the color of the background different on mobile view 
    document.querySelector('.expense').style.backgroundColor="#edfbf3";
    // document.querySelector('.item__container').style.width = "100%";

    // item__container {
    //     width: 100%;
    //     grid-row-gap: 2rem;
}

///Statistics
if( document.querySelector('.js-weekly') &&  document.querySelector('.statistics')  ) {
    document.querySelector('.container__body--statistics').style.width="100%";
    document.querySelector('.statistics__options').style.width="100%";
    document.querySelector('.statistics__notice').style.padding="2rem   ";
}
} else {
    document.querySelector('.navigation__item.js-desktop').style.display="none";
}