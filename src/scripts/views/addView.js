
export const getDescriptionIncome = () => document.querySelector('.js-income-description').value;

export const getValueIncome = () => document.querySelector('.js-income-value').value;

export const getDescriptionExpense = () => document.querySelector('.js-expense-description').value;

export const getValueExpense = () => document.querySelector('.js-expense-value').value;

export const animationIncome = () => {

document.querySelector('.message-income').classList.add('add__message');

  setTimeout(() => {
    document.querySelector('.message-income').classList.remove('add__message');
  }, 1000);
};


export const animationExpense = () => {
  document.querySelector('.message-expense').classList.add('add__message');
  setTimeout(() => {
    document.querySelector('.message-expense').classList.remove('add__message');
  }, 1000);
};

export const clearFieldsIncome = () => {
  const inputs = Array.from(document.querySelector('.js-income').children);
  inputs.forEach(el => el.value = '');
  document.querySelector('.add__description').focus();
};

export const clearFieldsExpense = () => {
  const inputs = Array.from(document.querySelector('.js-expense').children);
  inputs.forEach(el => el.value = '');
  document.querySelector('.js-expense-description').focus();
};


// Add data to view//
// const data = JSON.parse(localStorage.getItem('income'));
// data.every
// console.log(data);
// console.log(data[0].id);

// let length = data.length;

// const x = data.every(el => {
//   const values = [];
//   if(data[0].includes(values)) {
//     console.log('value is included')
//   }
//   return values;
// });

// // }
// // const x = data.forEach(el => console.log(el.id))

// console.log(x);

// const test = [1,2,3,4,5];
const test2 =[5,1,0];

// // const result = test2[0].includes(1);
// // console.log(result);

// const result = test2.filter(el => el == test[0] );
// console.log(result);

const data = JSON.parse(localStorage.getItem('income'));
// console.log(data);
// console.log(data);
// const compare = (array1,array2) => {
//   const finalArray = [];
//   array1.forEach(e1 => array2.forEach(e2 =>
//     {if(e1.id !== e2) {
//       finalArray.push(e1.id)
//     }
//   }
// ));
//   return finalArray;

// }



// const compare = (arr1,arr2) => {

//   const objMap={};

// arr1.forEach((e1)=>arr2.forEach((e2)=> {if(e1 !== e2){
//        objMap[e1]=objMap[e1]+1||1 ;
//     }
//   }
// ));
// console.log(Object.keys(objMap).map(e=>Number(e)));
// }

// console.log(compare(data,test2));
// const x = data.map(el => {
//   const finalArray = [1];
//   for(let i = 0; i < finalArray.length; i++ ) {

//     if(el.id !== finalArray[i]){
//       finalArray.push(el.id);
//     }
//   }
//   return finalArray
// });

// console.log(x);

