// Day 1
// https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/src/questions/coding-questions.md

// Question 1: What is the value of foo?
var foo = 10 + "20";
console.log(foo); // 1020

// Question 2: What will be the output of the code below?
console.log(0.1 + 0.2 == 0.3);

// false because 0.1 + 0.2 won't be accurately 0.3 it will be 0.3333333...

// Question 3: How would you make this work?
add(2, 5); // 7
add(2)(5); // 7

const add = (a, b) => a + b;
const add = a => b => a + b;

// Question 4: What value is returned from the following statement?
"i'm a lasagna hog"
  .split("") // => ["i", "'", "m", " ", "a", " ", "l", "a", "s", "a", "g", "n", "a", " ", "h", "o", "g"]
  .reverse() // => ["g", "o", "h", " ", "a", "n", "g", "a", "s", "a", "l", " ", "a", " ", "m", "'", "i"]
  .join(""); // => "goh angasal a m'i"

// It will reverse the sentence => hog lasagna a I'm =>  Wrong

// Question 5: What is the value of window.foo?
window.foo || (window.foo = "bar");

// "bar"

// Question 6: What is the outcome of the two alerts below?
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);

// Alert inside the function => Hello World
// Alert outside => NaN => Wrong => Correct answer it throws an error saying bar is not defined

// Question 7: What is the value of foo.length?
var foo = [];
foo.push(1);
foo.push(2);

// Length 2

// Question 8: What is the value of foo.x?
var foo = { n: 1 };
var bar = foo;
foo.x = foo = { n: 2 };

// {n: 2} => Wrong
// Because the second foo assignment replaces the foo values totally thereby erasing the foo.x assignments
// If the question was like, foo.x = y = {n: 2}, then both foo.x and y will be assignment the rightmost value

// Question 9: What does the following code print?
console.log("one");
setTimeout(function() {
  console.log("two");
}, 0);
Promise.resolve().then(function() {
  console.log("three");
});
console.log("four");

// one, four, two, three => Wrong
// one, four, three, two => Correct
// https://www.youtube.com/watch?v=8aGhZQkoFbQ, https://www.youtube.com/watch?v=cCOL7MC4Pl0
// Interestingly, promise gets resolved before the setTimeout
// Promise.resolve will schedule a microtask while setTimeout schedule a macrotask.
// And the microtasks will run before running the next macrotask.

// Question 10: What is the difference between these four promises?

doSomething().then(function() {
  return doSomethingElse();
});

doSomething().then(function() {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);

// https://gist.github.com/nolanlawson/940d1a390b2d9cf9483c
// Usuallly, then takes a function => Work in progress

// Question 11: What will the code below output to the console and why ?

(function() {
  var a = (b = 3);
})();

console.log("a defined? " + (typeof a !== "undefined"));
console.log("b defined? " + (typeof b !== "undefined"));

// a - true, b - false
// a - throws an error not defined - since we're trying to use it outside of its scope whereas b is in global scope

// Question 12: Consider the two functions below.Will they both return the same thing ? Why or why not ?

function foo1() {
  return {
    bar: "hello"
  };
}

// return the object

function foo2() {
  return;
  {
    bar: "hello";
  }
}

// returns undefined - automatic semicolon insertion in js

// Day 2
// What will be the output?

var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);

// "1undefined" - Because

//  Implementation of duplicate function

const duplicate = function(arr) {
  return [...arr, ...arr];
};

const duplicateWithSlice = arr => {
  return arr.concat(arr.slice(0));
};

console.log(duplicate([1, 2, 3, 4, 5]));

console.log(duplicateWithSlice([1, 2, 3, 4, 5, 6]));

// What will be returned by each of these?

console.log("hello" || "world"); // hello

console.log("foo" && "bar"); // bar
