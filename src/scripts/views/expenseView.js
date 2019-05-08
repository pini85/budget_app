import * as faker from '../data/random.js';
import {deleteItemLocalStorage} from '../data/localStorage.js';

export const displayExpense = (type) => {
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
            <div class="item__value item__value--red">
             -${el.value}
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
        deleteItemLocalStorage('expense',id);
      }

    });
  });
}

export const randomData = () => {
  const data = faker.random();
  const expense = data.expense;
  const y = expense[1].date
  for(let i = 0; i < expense.length; i++) {
  const year = parseInt(expense[i].date[7] + expense[i].date[8] + expense[i].date[9] + expense[i].date[10]);
  const year2 = parseInt(expense[i++].date[7] + expense[i].date[8] + expense[i].date[9] + expense[i].date[10]);
  console.log(year, year2);
  if(year > year2) {
    year[i--], year2[i++]
  }

    // if(expense[i].date)
//     console.log(expense[i].date);
//      const x = expense[i].date.sort(function(a,b) {
//     return new Date(a.start).getTime() - new Date(b.start).getTime()


// });
  }

  console.log(y);



  document.querySelector('.js-random').addEventListener('click',() => {



    expense.forEach(el => {

      console.log(el.date);

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

