const modifyValue = el => {

    const thisValue = el.toFixed(2);


    //value.00
    const numSplit = thisValue.split('.');
  //   //["value", "00"]

    const integer = numSplit[0];



    if(integer.length > 6 ) {
      el = integer.substr(0, integer.length - 6) + ',' + integer.substr(integer.length - 6, 3) + ',' + integer.substr(integer.length -3,3) + '.' + numSplit[1];

    } else if(integer.length > 3) {
      el  = integer.substr(0, integer.length - 3) + ',' + integer.substr(integer.length - 3,3) + '.' + numSplit[1];

    } else if(integer.length > 1) {
      el  = integer.substr(0, integer.length - 2)  + integer.substr(integer.length - 2,2) + '.' + numSplit[1];
    } else if(integer.length > 0) {
      el  = integer.substr(0, integer.length - 1)  + integer.substr(integer.length - 1,1) + '.' + numSplit[1];
    }

    return parseFloat(el);


  }

const modifyMonth = el => {
  //uncomment selections to change the numbers into string months.
  // const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const string = JSON.stringify(el);
  const split = string.split('-')
  const year = split[0][1] + split[0][2] + split[0][3] + split[0][4];
  // const month = monthName[parseInt(split[1]) - 1];
  const month = split[1];
  const day = split[2][0] + split[2][1];
  const date = `${day} ${month} ${year}`;
  return date;

}


const dom = (type) => {
  const data = local.read(type);
  data.sort(function compare(a, b) {
    const dateA = new Date(b.date);
    const dateB = new Date(a.date);
    return dateA - dateB;
  });

    data.forEach(el => {

      const date = modifyMonth(el.date);

      const value = modifyValue(el.value);
      console.log(value)




     const markup = `
     <div class = "item" id= "${el.id}">
      <div class="item__time">
          ${date}
        </div>
        <div class="item__description">
           ${el.description}
        </div>
        <div class="item__value">
         +${value}
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
  if(local.read('income')){
    dom('income')
  }
  // random data
   if(local.read('random-income')){
   dom('random-income');
  }

  if(local.read('income') || local.read('random-income')){
    document.querySelector('.js-random').addEventListener('click',() => {
    faker.income();
    dom('random-income');
    location.reload();// need to reload page so we can find the dom and then delete it.

  });

  } else {
     document.querySelector('.js-random').addEventListener('click',() => {

    faker.income();
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
        local.deleteItem(type,id);
      }else if(type === 'random-income') {
        const btn = document.querySelector('item__delete-random')
        el.parentNode.parentNode.removeChild(el.parentNode);
        local.deleteItem(type,id);
      }

    });
  });
}

export const deleteAll = () => {
  const target = document.querySelector('.item__container');
  target.parentNode.  removeChild(target);
   local.deleteAll('income');
   local.deleteAll('random-income');
   location.reload();
}



