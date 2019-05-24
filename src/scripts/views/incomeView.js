import * as local from '../data/localStorage.js';
import * as faker from '../data/random.js';


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

const modifyDescription = (title, limit = 18) => {
  if (title.length > limit) {
    const newDescription = [];
    title.split('').reduce((accumulator, currentWord) => {
      if (accumulator < limit) {
        newDescription.push(currentWord);
      }

      return accumulator + currentWord.length;
      // we need to update the accumulator by returning a value.
    }, 0);
    return `${newDescription.join('')}...`;
  }
  return title;
};


const dom = (type) => {
  const data = local.read(type);
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
};

export const displayIncome = () => {
  // user data
  if (local.read('income')) {
    dom('income');
  }
  // random data
  if (local.read('random-income')) {
    dom('random-income');
  }

  if (local.read('income') || local.read('random-income')) {
    document.querySelector('.js-random').addEventListener('click', () => {
      // const getData = new Promise((resolve, reject) => {
      //   const data = faker.income('2016-01-01');
      //   resolve(data);
      //   reject('error!');
      // });

      // const data = async () => {
      //   const data = await getData();
      //   return data;
      // };
      // data().then(result => console.log(result));


      faker.income('2016-01-01');
      dom('random-income');
      location.reload();// need to reload page so we can find the dom and then delete it.
    });
  } else {
    document.querySelector('.js-random').addEventListener('click', () => {
      // const getData = () => new Promise((resolve, reject) => {
      //   const data = faker.income('2016-01-01');
      //   resolve(data);
      //   reject('error!');
      // });

      // const data = async () => {
      //   const data = await getData();
      //   return data;
      // };

      // data().then(result => console.log(result));

      // It is still taking blocking the gui because i am async

      faker.income('2016-01-01');
      dom('random-income');
      location.reload();// need to reload page so we can find the dom and then delete it.
    });
    document.querySelector('.item__container-description').style.display = 'none';
    document.querySelector('.item__container').style.display = 'none';
    document.querySelector('.item__delete-all').style.display = 'none';
    // document.querySelector('.item__options').style.display = 'none';


    const markup = `
    <div class = "overview__no-value"> No incomes detected. Please add some!</div>
     `;

    document.querySelector('.container__body').insertAdjacentHTML('afterbegin', markup);
  }
};


export const deleteItem = (type) => {
  const nodes = document.querySelectorAll(`${type === 'income' ? '.item__delete-user' : '.item__delete-random'}`);
  nodes.forEach((el) => {
    const id = parseInt(el.parentNode.id);
    el.addEventListener('click', () => {
      if (type === 'income') {
        const btn = document.querySelector('.item__delete-user');
        el.parentNode.parentNode.removeChild(el.parentNode);
        local.deleteItem(type, id);
      } else if (type === 'random-income') {
        const btn = document.querySelector('item__delete-random');
        el.parentNode.parentNode.removeChild(el.parentNode);
        local.deleteItem(type, id);
      }
    });
  });
};

export const deleteAll = () => {
  const target = document.querySelector('.item__container');
  target.parentNode.removeChild(target);
  local.deleteAll('income');
  local.deleteAll('random-income');
  location.reload();
};


// const x = () => {
//   return new Promise((resolve, reject) => {
//         const data = faker.income('2016-01-01')
//         resolve(data);
//   });
// }

//   const data =  async() => {
//   const data = await x();
//         return data
//       }


// data().then(result => console.log(result));
