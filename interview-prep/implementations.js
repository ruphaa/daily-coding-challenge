// Memoize a function
var memoizeFun = function(func) {
  var cache = {};

  return function() {
    var key = JSON.stringify(arguments);
    debugger;
    console.log(key);
    if (cache[key]) {
      console.log("Cached");
      return cache[key];
    } else {
      console.log("calculated");
      var val = func.apply(null, arguments);
      cache[key] = val;
      return val;
    }
  };
};

var add10 = function(n) {
  return n + 10;
};

var memoizeAdd10 = memoizeFun(add10);

console.log(memoizeAdd10(3));
console.log(memoizeAdd10(3));
console.log(memoizeAdd10(3));

console.log(memoizeAdd10(10));
console.log(memoizeAdd10(10));

// Debounce implementation

const debounce = function(func, delay) {
  let inDebounce;
  return function() {
    const self = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(self, args), delay);
  };
};

document.querySelector(".btn").addEventListener(
  "click",
  debounce(function() {
    console.log("hello");
  }, 3000)
);

// Throttle Implementation

const throttle = function(func, delay) {
  let timer;
  return function() {
    if (timer) return;
    const context = this;
    const args = arguments;
    timer = setTimeout(() => {
      func.apply(context, args);
      timer = undefined;
    }, delay);
  };
};

document.querySelector(".btn").addEventListener(
  "click",
  throttle(function() {
    console.log("hello");
  }, 1000)
);
