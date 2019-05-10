import * as localStorage from '../data/localStorage.js';
import * as faker from '../data/random.js';


  const dom = (type) => {
    const data = localStorage.read(type);
    console.log(data);

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

        <div class= ${type === 'expense' ? '" item__delete item__delete-user"' : '"item__delete item__delete-random"'}>
          <div class="item__delete--btn"><i class="far fa-trash-alt"></i>
          </div>
        </div>
     </div>
    `;
    document.querySelector('.item__container').insertAdjacentHTML('beforeend', markup);

    });
  }

export const displayExpense = () => {
  //user data
  if(localStorage.exsist('expense')){
    dom('expense')
  }
  //random data
   if(localStorage.exsist('random-expense')){
   dom('random-expense');
  }
   document.querySelector('.js-random').addEventListener('click',() => {
    faker.expense();
    dom('random-expense');
    location.reload();// need to reload page so we can find the dom and then delete it.

  });
}
export const deleteItem = (type) => {

  const nodes = document.querySelectorAll(`${type === 'expense' ? '.item__delete-user' : '.item__delete-random' }`);
  nodes.forEach(el => {
    const id = parseInt(el.parentNode.id);
    el.addEventListener('click',() => {
      console.log('in')
      if(type === 'expense'){
        console.log('expense')
        const btn = document.querySelector('.item__delete-user');
        el.parentNode.parentNode.removeChild(el.parentNode);
        localStorage.deleteItem(type,id);
      }else if(type === 'random-expense') {
        console.log('random-expense')
        const btn = document.querySelector('item__delete-random')
        el.parentNode.parentNode.removeChild(el.parentNode);
        localStorage.deleteItem(type,id);
      }

    });
  });
}

