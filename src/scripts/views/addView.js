// export const getInput = () => {
//  const x = document.querySelector('.add__description').value;
//   const y = document.querySelector('.add__value').value;
//   return x,y;
// }

export const getDescriptionIncome = () => document.querySelector('.js-income-description').value;

export const getValueIncome = () => document.querySelector('.js-income-value').value;

export const getDescriptionExpense = () => document.querySelector('.js-expense-description').value;

export const getValueExpense = () => document.querySelector('.js-expense-value').value;

export const animationIncome = () => {
//   const inputs = Array.from(document.querySelector('.js-income').children);
// console.log(length(getDescription));
// const y = getValue();
// console.log(y);
// const x = document.querySelector('.add__description').value.length;
//   console.log(x);
//   console.log(inputs[0].value);
// let count1 = inputs[0].value;
// const counts1 = count1.length;
// let count2 = inputs[1].value;
// const counts2 = count2.length;
// console.log(counts1,counts2);


  // const inputs = Array.from(document.querySelector('.js-income').children);
  // console.log(inputs[0].value);
  // let value1 = inputs[0].value;
  // console.log(value1)
  // let counts1 = value1.length;
  // let value2 = inputs[1].value;
  // let counts2 = value2.length;
  // // console.log(value1,value2);
  // // console.log(counts1,counts2);

  // if(counts1 > 1 && counts2 > 1) {
  document.querySelector('.message-income').classList.add('add__message');

  setTimeout(() => {
    document.querySelector('.message-income').classList.remove('add__message');
  }, 1000);
};
// };

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
// export const clearFieldsValue = () => document.querySelector('.add__value').value = '';


// export const removeAnimation = () => {
//   const input =  document.querySelector('.add__description').value;
//   let length = input.length;
//   console.log(length);
//   if(length > 0 ) {
//    document.querySelector('.message-income').classList.remove('add__message');
//   }
// }


// $('button').click(function() {
//     $(".fademe").addClass('animated');
//     setTimeout(function() {
//           $(".fademe").removeClass('animated');
//     }, 1500);
// });

// const second = () => {
//           setTimeout(() => { // Set setTimeOut is a function that you can set a callback function and also the time
//             console.log('Async hey there!');
//           }, 2000);
//         };
