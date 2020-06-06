// Date - 6-1-2020
/*
Given an array of integers, return a new array such that each element at index `i` of the new array is the product of all the numbers in the original array except the one at `i`.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
*/

const generateProductArray = function (items) {
  const productArr = [];
  let counter = 0;
  for (let i = 0; i <= items.length - 1; i++) {
    productArr.push(
      items.reduce((acc, item, index) => {
        return counter !== index ? (acc *= item) : acc;
      }, 1)
    );
    counter++;
  }
  return productArr;
};

// Date - 7-1-2020
/*
Here’s one more.
Given a JSON as a String, Do these two things
1. Check if it’s a valid JSON
2. if(1) then: for every value that contains with a placeholder, replace the placeholder with the value as “replaced”

A placeholder will be like “{{contact_placeholder}}”

Sample I/O : 
{
  "payload": {
    "rr": "{{contact_placeholder}}",
    "rrvv": "{{contact_placeholder}}",
    "name" :"hello"
  }
}

Expected O/P :
{
  "payload": {
    "rr": "replaced",
    "rrvv": "replaced"
    "name" :"hello"
  }
}
*/

const isJSONValid = function (data) {
  try {
    JSON.parse(data);
    return true;
  } catch (e) {
    return false;
  }
};

const replaceJSONPlaceholders = function (json) {
  if (isJSONValid(json)) {
  }
};

// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

function calcs(arr, index) {
  debugger;
  if (index >= arr.length) return 0;
  else return arr[index] + calcs(arr, index + 2);
}
var arr = [2, 4, 6, 2, 5];
var list = [];
for (let i = 0; i <= arr.length; i++) {
  let sum = calcs(arr, i);
  list.push(sum);
}
console.log(list);
Math.max(...arr);

// The edit distance between two strings refers to the minimum number of character insertions,
// deletions, and substitutions required to change one string to the other.For example,
// the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”,
// substitute the “e” for “i”, and append a “g”.
