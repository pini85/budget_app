export const persistData = (budget, type) => {
    const getItem = JSON.parse(localStorage.getItem(type)) || [];
    getItem.push(budget);
    localStorage.setItem(type, JSON.stringify(getItem));
  }
   /*
    In localStorage data is saved in key value pairs of strings. Each time you call setItem() it will add or overwrite existing
    value. And getItem() just fetches the value stored in localStorage which is a string value. To solve this you have to use an
    array, stringify it and then store it.
    First we need to get the key from local storage and push the vlaue both to the getItem and the empty array. Then we set
    the value with the getItem variable.
    */

export const total = (type) => {
    const data = JSON.parse(localStorage.getItem(type))
    let totalSum = 0
    if(data === null) {
      totalSum = 0;
    } else {
      const length = data.length;
      for (let i = 0; i < length; i++) {
        const test = data[i].value;
      const value = data[i].value.replace(/,/, '');
      const integer = parseInt(value);
      totalSum+= integer;


    }


  }
  return totalSum;

}

export const totalValue = () => {
   const income = total('income');
   const expense = total('expense');
   const totalValue = income - expense;
   return totalValue;

}

export const deleteItemLocalStorage = (type,id) => {
  if(localStorage.getItem(type)) {
    let data = JSON.parse(localStorage.getItem(type));
    data.forEach( el => {
      if(el.id === id) {
        data.splice(el, 1);
        localStorage.setItem(type, JSON.stringify(data));
      }
       if (data.length < 1) {
        localStorage.removeItem(type)
      }
    });
  }
};
