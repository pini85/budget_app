import * as localStorage from '../data/localStorage.js';
import * as faker from '../data/random.js';


const dom = (type) => {
    const data = localStorage.read(type);

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

        <div class= ${type === 'income' ? '" item__delete item__delete-user"' : '"item__delete item__delete-random"'}>
          <div class="item__delete--btn"><i class="far fa-trash-alt"></i>
          </div>
        </div>
     </div>
    `;
    document.querySelector('.item__container').insertAdjacentHTML('beforeend', markup);

    });
  }

export const displayIncome = () => {
  //user data
  if(localStorage.exsist('income')){
    dom('income')
  }
  //random data
   if(localStorage.exsist('random-income')){
   dom('random-income');
  }
   document.querySelector('.js-random').addEventListener('click',() => {
    faker.income();
    dom('random-income');
    location.reload();// need to reload page so we can find the dom and then delete it.

  });
}
export const deleteItem = (type) => {

  const nodes = document.querySelectorAll(`${type === 'income' ? '.item__delete-user' : '.item__delete-random' }`);
  nodes.forEach(el => {
    const id = parseInt(el.parentNode.id);
    el.addEventListener('click',() => {
      if(type === 'income'){
        const btn = document.querySelector('.item__delete-user');
        el.parentNode.parentNode.removeChild(el.parentNode);
        localStorage.deleteItem(type,id);
      }else if(type === 'random-income') {
        const btn = document.querySelector('item__delete-random')
        el.parentNode.parentNode.removeChild(el.parentNode);
        localStorage.deleteItem(type,id);
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
