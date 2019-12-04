const gravityAssistProgram =  function(noun, verb) {
    const intcodes = require('../filereader.js').readFile(',');

    intcodes[1] = noun;
    intcodes[2] = verb;
    let step = 0;
    while(step < intcodes.length && intcodes[step] !== 99) {
        if(intcodes[step] === 1) {
            let first = intcodes[step+1], second = intcodes[step+2], third = intcodes[step+3];
            intcodes[third] = intcodes[first] + intcodes[second];
            step = step + 4;
        } else if(intcodes[step] === 2) {
            let first = intcodes[step+1], second = intcodes[step+2], third = intcodes[step+3];
            intcodes[third] = intcodes[first] * intcodes[second];
            step = step + 4;
        }
    }
    return intcodes[0];
}

const memoryAddressProgram = () => {
    for(var noun = 0; noun <= 99; noun++) {
        for(var verb = 0; verb <= 99; verb++) {
            result = gravityAssistProgram(noun, verb);
            if(result === 19690720) {
                 return 100 * noun + verb;
            }
        } 
    }
    return null;
}


console.log(memoryAddressProgram());