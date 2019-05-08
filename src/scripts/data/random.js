var faker = require('faker');
faker.commerce.product();

export const random = () => {
  const date = new Date();


const data = {

    income:[
            {"description":`Sold ${faker.commerce.product()}`,"value":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2019-01-01', '2019-01-01')) ,"id":0},
            {"description":`Sold ${faker.commerce.product()}`,"value":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2019-01-01', '2019-01-01')),"id":1},
            {"description":`${faker.name.jobType()} salary`,"value":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2019-01-01', '2019-01-01')),"id":2},
            {"description":`Sold ${faker.commerce.product()}`,"value":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2019-01-01', '2019-01-01')),"id":3},
            {"description":`Sold ${faker.commerce.product()}`,"value":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2019-01-01', '2019-01-01')),"id":4},
            {"description":`${faker.name.jobType()} salary`,"value":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2019-01-01', '2019-01-01')),"id":5},
            {"description":`Sold ${faker.commerce.product()}`,"value":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2019-01-01', '2019-01-01')),"id":6},
            {"description":`Sold ${faker.commerce.product()}`,"value":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2019-01-01', '2019-01-01')),"id":7},
            {"description":`${faker.name.jobType()} salary`,"value":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2019-01-01', '2019-01-01')),"id":8},
            {"description":`${faker.name.jobType()} salary`,"value":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2019-01-01', '2019-01-01')),"id":9},
            {"description":`Sold ${faker.commerce.product()}`,"value":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2019-01-01', '2019-01-01')),"id":10},
            {"description":`Sold ${faker.commerce.product()}`,"value":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2019-01-01', '2019-01-01')),"id":11},
            {"description":`Sold ${faker.commerce.product()}`,"value":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2019-01-01', '2019-01-01')),"id":12},
            {"description":`${faker.name.jobType()} salary`,"value":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2019-01-01', '2019-01-01')),"id":13},
            {"description":`Sold ${faker.commerce.product()}`,"value":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2019-01-01', '2019-01-01')),"id":14},
            {"description":`${faker.name.jobType()} salary`,"value":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2019-01-01', '2019-01-01')),"id":15},
            {"description":`Sold ${faker.commerce.product()}`,"value":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2019-01-01', '2019-01-01')),"id":16}
            ],

  expense:[
            {"description":`Bought ${faker.commerce.product()}`,"value":faker.commerce.price(),"date":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2016-01-01', new Date())),"id":1},
            {"description":`${faker.name.jobType()} fee`,"value":faker.commerce.price(),"date":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2016-01-01', new Date())),"id":2},
            {"description":`Bought ${faker.commerce.product()}`,"value":faker.commerce.price(),"date":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2016-01-01', new Date())),"id":3},
            {"description":`${faker.name.jobType()} fee`,"value":faker.commerce.price(),"date":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2016-01-01', new Date())),"id":4},
            {"description":`Bought ${faker.commerce.product()}`,"value":faker.commerce.price(),"date":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2016-01-01', new Date())),"id":5},
            {"description":`Bought ${faker.commerce.product()}`,"value":faker.commerce.price(),"date":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2016-01-01', new Date())),"id":6},
            {"description":`Bought ${faker.commerce.product()}`,"value":faker.commerce.price(),"date":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2016-01-01', new Date())),"id":7},
            {"description":`${faker.name.jobType()} fee`,"value":faker.commerce.price(),"date":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2016-01-01', new Date())),"id":8},
            {"description":`${faker.name.jobType()} fee`,"value":faker.commerce.price(),"date":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2016-01-01', new Date())),"id":9},
            {"description":`Bought ${faker.commerce.product()}`,"value":faker.commerce.price(),"date":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2016-01-01', new Date())),"id":10},
            {"description":`Bought ${faker.commerce.product()}`,"value":faker.commerce.price(),"date":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2016-01-01', new Date())),"id":11},
            {"description":`${faker.name.jobType()} fee`,"value":faker.commerce.price(),"date":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2016-01-01', new Date())),"id":12},
            {"description":`Bought ${faker.commerce.product()}`,"value":faker.commerce.price(),"date":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2016-01-01', new Date())),"id":13},
            {"description":`Bought ${faker.commerce.product()}`,"value":faker.commerce.price(),"date":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2016-01-01', new Date())),"id":14},
            {"description":`${faker.name.jobType()} fee`,"value":faker.commerce.price(),"date":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2016-01-01', new Date())),"id":15},
            {"description":`Bought ${faker.commerce.product()}`,"value":faker.commerce.price(),"date":faker.commerce.price(),"date":createAndModifyDate(faker.date.between('2016-01-01', new Date())),"id":16}
          ]
      }
      return data;
  }

const createAndModifyDate = (obj) => {
   const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const string = JSON.stringify(obj);
  const split = string.split('-')
  const year = split[0][1] + split[0][2] + split[0][3] + split[0][4];
  const month = monthName[parseInt(split[1]) - 1];
  const day = split[2][0] + split[2][1];
  return `${day} ${month} ${year}`;
}

