import * as localStorage from '../data/localStorage.js';
import * as faker from '../data/random.js';

const modifyDescription = (title, limit = 16) => {
  if (title.length > limit) {
    const newDescription = [];
    title.split('').reduce((accumulator, currentWord) => {
      if (accumulator < limit) {
        newDescription.push(currentWord);
      }

      return accumulator + currentWord.length;
      // we need to update the accumulator by returning a value.
    }, 0);
    return `${newDescription.join('')}..`;
  }
  return title;
};

const modifyDate = (el) => {
  // uncomment selections to change the numbers into string months.
  // const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const string = JSON.stringify(el);
  const split = string.split('-');
  const year = split[0][1] + split[0][2] + split[0][3] + split[0][4];
  // const month = monthName[parseInt(split[1]) - 1];
  const month = split[1];
  const day = split[2][0] + split[2][1];
  const date = `${day} ${month} ${year}`;
  return date;
};


const dom = (type) => {
  const data = localStorage.read(type);
  data.sort((a, b) => {
    const dateA = new Date(b.date);
    const dateB = new Date(a.date);
    return dateA - dateB;
  });

  data.forEach((el) => {
    const date = modifyDate(el.date);
    const description = modifyDescription(el.description);
    const markup = `
     <div class = "item" id= "${el.id}">
      <div class="item__time">
          ${date}
        </div>
        <div class="item__description">
           ${description}
        </div>
        <div class="item__value item__value--red">
         -${el.value}
        </div>

        <div class= ${type === 'expense' ? '" item__delete item__delete-user"' : '"item__delete item__delete-random"'}>
          <div class="item__delete-btn"><i class="far fa-trash-alt"></i>
          </div>
        </div>
     </div>
    `;
    document.querySelector('.item__container').insertAdjacentHTML('beforeend', markup);
  });
};

export const displayExpense = () => {
  // user data
  if (localStorage.read('expense')) {
    dom('expense');
  }
  // random data
  if (localStorage.read('random-expense')) {
    dom('random-expense');
  }

  if (localStorage.read('expense') || localStorage.read('random-expense')) {
    document.querySelector('.js-random').addEventListener('click', () => {
      console.log('hi');
      faker.expense('2016-01-01');
      dom('random-expense');
      location.reload();// need to reload page so we can find the dom and then delete it.
    });
  } else {
    document.querySelector('.js-random').addEventListener('click', () => {
      console.log('hi');
      faker.expense('2016-01-01');
      dom('random-expense');
      location.reload();// need to reload page so we can find the dom and then delete it.
    });
    document.querySelector('.item__container-description').style.display = 'none';
    document.querySelector('.item__container').style.display = 'none';
    document.querySelector('.item__delete-all').style.display = 'none';
    // document.querySelector('.item__options').style.display = 'none';


    const markup = `
    <div class = "overview__no-value"> No expenses detected. Please add some!</div>
     `;

    document.querySelector('.container__body').insertAdjacentHTML('afterbegin', markup);
  }
};


export const deleteItem = (type) => {
  const nodes = document.querySelectorAll(`${type === 'expense' ? '.item__delete-user' : '.item__delete-random'}`);
  nodes.forEach((el) => {
    const id = parseInt(el.parentNode.id);
    el.addEventListener('click', () => {
      if (type === 'expense') {
        const btn = document.querySelector('.item__delete-user');
        el.parentNode.parentNode.removeChild(el.parentNode);
        localStorage.deleteItem(type, id);
      } else if (type === 'random-expense') {
        const btn = document.querySelector('item__delete-random');
        el.parentNode.parentNode.removeChild(el.parentNode);
        localStorage.deleteItem(type, id);
      }
    });
  });
};

export const deleteAll = () => {
  const target = document.querySelector('.item__container');
  target.parentNode.removeChild(target);
  localStorage.deleteAll('expense');
  localStorage.deleteAll('random-expense');
  location.reload();
};
