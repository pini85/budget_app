export const total = (type) => {
    const data = JSON.parse(localStorage.getItem(type));
    let totalSum = 0
    if(data === null) {
      totalSum = 0;
    } else {
      const length = data.length;
      for (let i = 0; i < length; i++) {
      totalSum+= parseInt(data[i].value);
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

