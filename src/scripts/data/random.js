var faker = require('faker');
faker.commerce.product();

export const random = () => {
  const date = new Date();
  const income = [];
  const expense =[]
  const data = {income,expense}

//income data faker
  for(let i= 0; i< 50; i++) {
    income.push({
      "description": `${i < 25 ? `Sold ${faker.commerce.product()}` : `${faker.name.jobType()} salary`}` ,
      "value": faker.commerce.price(),
      "date": createAndModifyDate(faker.date.between('2016-01-01', '2020-01-01')),
      "id": faker.random.number()});
  }
//expense data faker
  for(let i= 0; i< 50; i++) {
  expense.push({
    "description": `${i < 25 ? `Bought ${faker.commerce.product()}` : `${faker.name.jobType()} fee`}` ,
    "value": faker.commerce.price(),
    "date": createAndModifyDate(faker.date.between('2016-01-01', '2020-01-01')),
    "id": faker.random.number()});
  }
  return data;
}

const createAndModifyDate = (obj) => {
   const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const string = JSON.stringify(obj);
  const split = string.split('-')
  const year = split[0][1] + split[0][2] + split[0][3] + split[0][4];
  // const month = monthName[parseInt(split[1]) - 1];
  const month = split[1];
  const day = split[2][0] + split[2][1];
  return `${day} ${month} ${year}`;
}

const total = (type) => {
  const data = random();
  const x = data.income;
  return x
}

console.log(total('income'));
