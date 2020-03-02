const initVal = 138307;
const rangeVal = 654504;

// const isPasswordValid = function() {
//     let validPwdCount = 0;
//     for(let i = initVal; i <= rangeVal; i++) {
//         let isValid = false;
//         let digArr = i.toString().split('');
//         let sorted = parseInt(digArr.sort().join(''));
//         if(i == sorted) {
//             for(let j = 0; j < digArr.length; j++) {
//                 if(digArr[j] == digArr[j+1]) {
//                     if(j==5 || digArr[j] != digArr[j+2]) {
//                         isValid = true;
//                     }
//                 }
//             }
//             if(isValid) validPwdCount++;
//         }
//     }
//     return validPwdCount;
// }

function checkPassword(password) {
    let matched = false;
    for (var i = 1; i < 6; i++) {
      if (password[i] === password[i - 1]) {
        if (i === 1 || password[i - 2] != password[i]) {
          if (i === 6 || password[i + 1] != password[i]) {
            matched = true;
          }
        }
      }
      if (password[i - 1] > password[i]) {
        return false;
      }
    }
    return matched;
  }
  
  let total = 0;
  for (let password = initVal; password <= rangeVal; password++) {
    total += checkPassword(password.toString());
  }

console.log(total);