import Phone from '../../images/phone.png';

    document.querySelector('.navigation__item.js-mobile').addEventListener('click',() => {
       localStorage.setItem('mobile',true)
     
    });


    document.querySelector('.navigation__item.js-desktop').addEventListener('click',() => {
       localStorage.setItem('mobile',false)
     
    });

if (localStorage.getItem('mobile') === 'true') {
    document.querySelector('.navigation__item.js-mobile').style.display="none";
    //html//
    document.querySelector('html').classList.add('html-mobile-view');
    //container//
    document.querySelector('.container').classList.add('container-mobile-view');
    //inner container//
    document.querySelector('.container__body').classList.add('container__body-mobile-view');
    document.querySelector('.add.income').classList.add('income-mobile-view');
    document.querySelector('.add.expense').classList.add('expense-mobile-view');
    //navigation//
    document.querySelector('.navigation__ul').classList.add('navigation__ul-mobile-view');
    document.querySelector('.navigation__container').classList.add('navigation__container-mobile-view');
    const node =  Array.from(document.querySelector('.navigation__ul').children);
    node.forEach(node =>{
        if(node.lastElementChild) {
            console.log('i')
        }
        node.classList.add('navigation__item-mobile-view');
    });


        const img = document.createElement('img');
        img.alt = 'Phone frame';
        img.width = 300;
        img.src = Phone;
        img.classList.add("phone");
        const body = document.querySelector('body');
        body.appendChild(img);
    
    
} else {
    document.querySelector('.navigation__item.js-desktop').style.display="none";
}
