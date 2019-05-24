import * as incomeView from '../views/incomeView.js';


if (document.querySelector('body').className === 'income') {
  incomeView.displayIncome();
  incomeView.deleteItem('income');
  incomeView.deleteItem('random-income');
  document.querySelector('.js-delete-all').addEventListener('click', (incomeView.deleteAll));
}

// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//      document.querySelector('.item__container').insertAdjacentHTML('beforeend', this.responseText);
//      // document.getElementById("demo").innerHTML = this.responseText;
//     }
//   };
//   xhttp.open("GET", "test.html", true);
//   xhttp.send();
// }
