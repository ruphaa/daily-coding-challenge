const { intcodes } = require('./input');

intcodes[1] = 12;
intcodes[2] = 2;

const gravityAssistProgram =  function(intcodes) {
    let step = 0;
    while(step < intcodes.length) {
        if(intcodes[step] === 99) 
            return intcodes[0];
        else if(intcodes[step] === 1) {
            let first = intcodes[step+1], second = intcodes[step+2], third = intcodes[step+3];
            intcodes[third] = intcodes[first] + intcodes[second];
            step = step + 4;
        } else if(intcodes[step] === 2) {
            let first = intcodes[step+1], second = intcodes[step+2], third = intcodes[step+3];
            intcodes[third] = intcodes[first] * intcodes[second];
            step = step + 4;
        } else {
            step++;
        }
    }
    return intcodes[0];
}

// console.log('Gravity Assist Program', gravityAssistProgram(intcodes));

exports.gravityAssistProgram = gravityAssistProgram;