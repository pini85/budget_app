import * as faker from './random.js';
//  const asyncLocalStorage = {
//     setItem: function (key, value) {
//         return Promise.resolve().then(function () {
//             localStorage.setItem(key, value);
//         });
//     },
//     getItem: function (key) {
//         return Promise.resolve().then(function () {
//             return localStorage.getItem(key);
//         });
//     }
// };

// Demo
// const data = Date.now() % 1000;
// asyncLocalStorage.setItem('mykey', data).then(function () {
//     return asyncLocalStorage.getItem('mykey');
// }).then(function (value) {
//     console.log('Value has been set to:', value);
// });
// console.log('waiting for value to become ' + data +
//             '. Current value: ', localStorage.getItem('mykey'));

export const persistData = (budget, type) => {
  const getItem = JSON.parse(localStorage.getItem(type)) || [];
  getItem.push(budget);
  localStorage.setItem(type, JSON.stringify(getItem));
};

persistData();
//   (budget,type) => {
//   const getItem = JSON.parse(localStorage.getItem(type)) || [];
//   getItem.push(budget);
//   return localStorage.setItem(type, JSON.stringify(getItem));
//   }
//     )

// });

//   // const getItem = JSON.parse(localStorage.getItem(type)) || [];
//   // getItem.push(budget);
//   // localStorage.setItem(type, JSON.stringify(getItem));
// }
/*
    In localStorage data is saved in key value pairs of strings. Each time you call setItem() it will add or overwrite existing
    value. And getItem() just fetches the value stored in localStorage which is a string value. To solve this you have to use an
    array, stringify it and then store it.
    First we need to get the key from local storage and push the vlaue both to the getItem and the empty array. Then we set
    the value with the getItem variable.
    */

// const datas = faker.income('2016-01-01');
// persistData().then(result => result({
//       "description": faker.commerce.product(),
//       "value": faker.commerce.price(),
//       "date": faker.date.between(new Date(), new Date()),
//       "id": faker.random.number()},"random-income"))


export const read = (type) => {
  const data = JSON.parse(localStorage.getItem(type));
  return data;
};

export const length = (type) => {
  if (JSON.parse(localStorage.getItem(type))) {
    const data = JSON.parse(localStorage.getItem(type)).length;
    return data;
  }
  return 0;
};


export const total = (type) => {
  const data = JSON.parse(localStorage.getItem(type));
  let totalSum = 0;
  if (data === null) {
    totalSum = 0;
  } else {
    const { length } = data;
    for (let i = 0; i < length; i++) {
      const test = data[i].value;
      const value = data[i].value.replace(/,/, '');
      const integer = parseInt(value);
      totalSum += integer;
    }
  }
  return totalSum;
};

export const totalValue = () => {
  const income = total('income');
  const expense = total('expense');
  const randomIncome = total('random-income');
  const randomExpense = total('random-expense');
  const totalValue = `${randomIncome > 0 || randomExpense > 0 ? (income + randomIncome) - (expense + randomExpense) : income - expense}`;
  console.log(totalValue);
  // `${randomIncome > 0 ? income + randomIncome : income}`, `${randomExpense > 0 ? expense + randomExpense : expense}`
  return totalValue;
};

export const deleteItem = (type, id) => {
  if (localStorage.getItem(type)) {
    const data = JSON.parse(localStorage.getItem(type));
    data.forEach((el) => {
      if (el.id === id) {
        data.splice(el, 1);
        localStorage.setItem(type, JSON.stringify(data));
      }
      if (data.length < 1) {
        localStorage.removeItem(type);
      }
    });
  }
};

export const deleteAll = (type) => {
  localStorage.removeItem(type);
};
