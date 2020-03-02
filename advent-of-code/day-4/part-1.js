const initVal = 138307;
const rangeVal = 654504;

const isPasswordValid = function() {
    let validPwdCount = 0;
    for(let i = initVal; i <= rangeVal; i++) {
        let isValid = false;
        let digArr = i.toString().split('');
        let sorted = parseInt(digArr.sort().join(''));
        if(i == sorted) {
            for(let j = 0; j < digArr.length-1; j++) {
                if(digArr[j] == digArr[j+1]) {
                    isValid = true;
                    break;
                }
            }
            if(isValid) validPwdCount++;
        }
    }
    return validPwdCount;
}

console.log(isPasswordValid());