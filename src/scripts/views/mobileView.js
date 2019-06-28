import * as local from '../data/localStorage';

    document.querySelector('.js-mobile').addEventListener('click',() => {
       localStorage.setItem('mobile',true)
     
    });


    document.querySelector('.js-desktop').addEventListener('click',() => {
       localStorage.setItem('mobile',false)
     
    });



if (localStorage.getItem('mobile') === 'true') {
    document.querySelector('.container').classList.add('container-mobile-view');
}
