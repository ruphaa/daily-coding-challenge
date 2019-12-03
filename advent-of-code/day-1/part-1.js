const { massList } = require('./input');

const sumOfFuel = massList.reduce((sum, mass) => {
     return sum + (Math.floor(mass/3) - 2);
},0);

console.log('Sum of fuel requirements -> ', sumOfFuel);