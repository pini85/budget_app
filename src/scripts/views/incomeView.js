export const displayIncome = (id, date, description, value) => {
  const markup = `
           <div class="item" href="#${id}">
            <div class="<it></it>em__time">
              ${date}
            </div>
            <div class="item__description" id="inc-0">
              ${description}
            </div>
            <div class="item__value">
              ${value}
              <div class="item__delete">
                <div class="item__delete--btn"><i class="far fa-trash-alt"></i>
                </div>
              </div>
            </div>
        `;
  document.querySelector('.btn').insertAdjacentHTML('afterend', markup);
};
