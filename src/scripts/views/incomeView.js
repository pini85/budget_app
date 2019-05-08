
import {deleteItemLocalStorage} from '../data/localStorage.js';
import * as faker from '../data/random.js';

export const randomData = () => {
  const data = faker.random();
  const income = data.income;

  document.querySelector('.js-random').addEventListener('click',() => {

    income.forEach(el => {

     const markup = `
     <div class = "item" id= "${el.id}">
     <div class="item__time">
          ${el.date}
        </div>
        <div class="item__description">
           ${el.description}
        </div>
        <div class="item__value">
         +${el.value}
        </div>
        <div class= "item__delete">
          <div class="item__delete--btn"><i class="far fa-trash-alt"></i>
          </div>
        </div>
      </div>
    `;
      document.querySelector('.item__container').insertAdjacentHTML('beforeend', markup);

    });
    const nodes = document.querySelectorAll('.item__delete');
  nodes.forEach(el => {
    el.addEventListener('click',() => {
      const id = parseInt(el.parentNode.id);
      const btn = document.querySelector('.item__delete');
      if (btn) {
        //remove from UI
       el.parentNode.parentNode.removeChild(el.parentNode);

      }

    });
  });

    });



}


export const displayIncome = (type) => {
  if(localStorage.getItem(type)){
    const data = JSON.parse(localStorage.getItem(type));


    data.forEach(el => {

         const markup = `
         <div class = "item" id= "${el.id}">
        <div class="item__time">
              ${el.date}
            </div>
            <div class="item__description">
               ${el.description}
            </div>
            <div class="item__value">
             +${el.value}
            </div>
            <div class= "item__delete">
              <div class="item__delete--btn"><i class="far fa-trash-alt"></i>
              </div>
            </div>
          </div>
        `;
    document.querySelector('.item__container').insertAdjacentHTML('beforeend', markup);


    });
  }
}
export const deleteItem = () => {
  const nodes = document.querySelectorAll('.item__delete');
  nodes.forEach(el => {
    el.addEventListener('click',() => {
      const id = parseInt(el.parentNode.id);
      const btn = document.querySelector('.item__delete');
      if (btn) {
        //remove from UI
       el.parentNode.parentNode.removeChild(el.parentNode);
       //Remove from Local storage
        deleteItemLocalStorage('income',id);
      }

    });
  });
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];

    }
    return a;
}
