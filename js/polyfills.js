// Implementation of Array filter function
const isEven = function(item) {
  return item % 2 === 0;
};

Array.prototype.filter = function(func) {
  let arr = [];
  for (let i = 0; i <= this.length - 1; i++) {
    if (func(this[i])) arr.push(this[i]);
  }
  return arr;
};

console.log([1, 2, 3, 4].filter(isEven));

// Implementation of Array map function
const double = function(item) {
  return item * 2;
};

Array.prototype.map = function(func) {
  let arr = [];
  for (let i = 0; i <= this.length - 1; i++) {
    arr.push(func(this[i]));
  }
  return arr;
};

console.log([1, 2, 3, 4].map(double));

// Implementation of Array Reduce function [Revisit]

const sum = function(acc, item) {
  return (acc += item);
};

Array.prototype.reduce = function(func, init) {
  let final = init;
  for (let i = 0; i <= this.length - 1; i++) {
    final = func(final, this[i]);
  }
  return final;
};

console.log([1, 2, 3, 4].reduce((acc, item) => acc + item, 0));

let initialValue = 0;
let sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function(
  accumulator,
  currentValue
) {
  return accumulator + currentValue.x;
},
initialValue);

console.log(sum);
