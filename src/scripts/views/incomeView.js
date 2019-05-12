import * as localStorage from '../data/localStorage.js';
import * as faker from '../data/random.js';


const dom = (type) => {
  const data = localStorage.read(type);
  data.sort(function compare(a, b) {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });

    data.forEach(el => {
  //uncomment selections to change the numbers into string months.
  // const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const string = JSON.stringify(el.date);
  const split = string.split('-')
  const year = split[0][1] + split[0][2] + split[0][3] + split[0][4];
  // const month = monthName[parseInt(split[1]) - 1];
  const month = split[1];
  const day = split[2][0] + split[2][1];
  const date = `${day} ${month} ${year}`;

     const markup = `
     <div class = "item" id= "${el.id}">
      <div class="item__time">
          ${date}
        </div>
        <div class="item__description">
           ${el.description}
        </div>
        <div class="item__value">
         +${el.value}
        </div>

        <div class= ${type === 'income' ? '" item__delete item__delete-user"' : '"item__delete item__delete-random"'}>
          <div class="item__delete-btn"><i class="far fa-trash-alt"></i>
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

  if(localStorage.exsist('income') || localStorage.exsist('random-income')){
    document.querySelector('.js-random').addEventListener('click',() => {
    console.log('hi');
    faker.income();
    dom('random-income');
    location.reload();// need to reload page so we can find the dom and then delete it.

  });

  } else {
     document.querySelector('.js-random').addEventListener('click',() => {
    console.log('hi');
    faker.income();
    dom('random-income');
    location.reload();// need to reload page so we can find the dom and then delete it.

  });
    document.querySelector('.item__container-description').style.display = 'none';
    document.querySelector('.item__container').style.display = 'none';
    document.querySelector('.item__delete-all').style.display = 'none';
    // document.querySelector('.item__options').style.display = 'none';


    const markup = `
    <div class = "overview__no-value"> No incomes or expenses detected. Please add some!</div>
     `;

     document.querySelector('.container__body').insertAdjacentHTML('afterbegin', markup)

  }

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

export const deleteAll = () => {
  const target = document.querySelector('.item__container');
  target.parentNode.  removeChild(target);
   localStorage.deleteAll('income');
   localStorage.deleteAll('random-income');
   location.reload();
}



