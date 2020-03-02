const intcodes = require('../filereader.js').readFile(',');

let input = 5;
let i = 0;
while(i < intcodes.length && intcodes[i] !== 99) {
    let opcode = intcodes[i] % 100;
    let mode1 = Math.floor(intcodes[i]/100) % 10;
    let mode2 = Math.floor(intcodes[i]/1000) % 10;
    let param1 = (!mode1) ? intcodes[intcodes[i+1]] : intcodes[i+1];
    let param2 = (!mode2) ? intcodes[intcodes[i+2]] : intcodes[i+2];
    switch (opcode) {
        case 1: 
            intcodes[intcodes[i+3]] = param1 + param2;
            i += 4;
            break;
        case 2:
            intcodes[intcodes[i+3]] = param1 * param2;
            i += 4;
            break;
        case 3:
            intcodes[intcodes[i+1]] = input;
            i +=2;
            break;
        case 4:
            console.log(intcodes[intcodes[i+1]]);
            i +=2;
            break;
        case 5:

            break;
        case 6:
            break; 
        case 7:
            break;
        case 8:
            break;
    }
}

