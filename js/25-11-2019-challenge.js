// Challenge #1
/* create a function that removes the first and last letters of a string. 
Strings with two characters or less are considered invalid. 
You can choose to have your function return null or simply ignore. */

var stripFirstAndLastString = (str) => str.length > 2 ? str.slice(1,-1) : undefined;

console.log(stripFirstAndLastString('Hello'));      // 'ell'
console.log(stripFirstAndLastString('Hy'));         // undefined
console.log(stripFirstAndLastString(''))            // undefined


/* Challenge #2
Your task is to return a string that displays a diamond shape on the screen using asterisk (“*”) characters. For n = 5
  *  
 *** 
*****
 *** 
  *  
*/ 
var printSpaceAndAsterisk = function(space, str, i) {
  for(let j=1;j<=space/2;j++) {
      str  = str + ' ';
    }
    for(let j=1; j<=i; j++) {
      str  = str + '*';
    }
    for(let j=1;j<=space/2;j++) {
      str  = str + ' ';
    }
  return str;
};

var diamond = function(n) {
  if(n <= 0 || n % 2 === 0) return null;
  let space = n-1;
  for(let i=1; i<=n; i+=2) {
    let str = '';
    console.log(printSpaceAndAsterisk(space, str, i));
    space = space - 2;
  }
  space = 2;
  for(let i=n-2; i>=1; i-=2) {
    let str = '';
    console.log(printSpaceAndAsterisk(space, str, i));
    space = space + 2;
  }
};

console.log(diamond(4));
console.log(diamond(-3));
console.log(diamond(5));
console.log(diamond(11));


// Challenge #3
/* Write a function that returns the number (count) of vowels in a given string. 
Letters considered as vowels are: a, i, e, o, and u. 
The function should be able to take all types of characters as input, including lower case letters, 
upper case letters, symbols, and numbers. */

const vowelCount = function(str) {
  let regex = /[aeiou]/i;
  let vowelArr = str.split('').filter((letter) => letter.match(regex));
  return vowelArr.length;
};

console.log(vowelCount('apple'));        // 2
console.log(vowelCount('css'));          // 0
console.log(vowelCount('4$eiaa'));       // 4

// Challenge #4 - In Progress
/* You are given a small checkbook to balance that is given to you as a string. Sometimes, this checkbook will be cluttered by non-alphanumeric characters.

The first line shows the original balance. Each other (not blank) line gives information: check number, category, and check amount.

You need to clean the lines first, keeping only letters, digits, dots, and spaces. Next, return the report as a string. On each line of the report, you have to add the new balance. In the last two lines, return the total expenses and average expense. Round your results to two decimal places.

Example Checkbook
1000.00
125 Market 125.45
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10

Example Solution
Original_Balance: 1000.00
125 Market 125.45 Balance 874.55
126 Hardware 34.95 Balance 839.60
127 Video 7.45 Balance 832.15
128 Book 14.32 Balance 817.83
129 Gasoline 16.10 Balance 801.73
Total expense 198.27
Average expense 39.65

Challenge Checkbook
1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tires;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?; */


const round = num => Math.round(num*100)/100;

const removeExtraChars = (str) => {
  let regex = /[^A-Za-z0-9\s\.\\]/gmi;
  return str.replace(regex,'');
};

const balanceCheckBook = function(str) {
  let filteredStr = removeExtraChars(str);
  let cbEntries = filteredStr.split('\\');
  let avgLength = cbEntries.length;
  let total = 0;
  for(entry in cbEntries) {
     let entryArr = entry.split(' ');
  }
};

let checkbook = `1233.00 
125 Hardware;! 24.8?; 
123 Flowers 93.5 
127 Meat 120.90 
120 Picture 34.00 
124 Gasoline 11.00 
123 Photos;! 71.4?; 
122 Picture 93.5 
132 Tires;! 19.00,?; 
129 Stamps 13.6 
129 Fruits{} 17.6 
129 Market;! 128.00?; 
121 Gasoline;! 13.6?;`

balanceCheckBook(checkbook);


// Challenge #5 
// https://dev.to/coderbyte/a-common-coding-interview-question-461f
/*
Write a function, FindIntersection, that reads an array of strings which will contain two elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a string of numbers that occur in both elements of the input array in sorted order. If there is no intersection, return the string "false"
if the input array is ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"] the output string should be "1, 4, 13" because those numbers appear in both strings.
*/
const extractCommonChar = function(inpArr) {
  let arr1 = inpArr.slice(0,1)[0].split(/[ ,]+/);
  let arr2 = inpArr.slice(1,2)[0].split(/[ ,]+/);
  let concated = arr1.concat(arr2);
  let commonStrings = concated.filter((item, index) => concated.indexOf(item) !== index);
  return commonStrings.length > 0 ? commonStrings.join(',') : false;
}

extractCommonChar(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])  // Output -> "1, 4, 13"

// Challenge #6




