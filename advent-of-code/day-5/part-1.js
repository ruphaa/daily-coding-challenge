const intcodes = require('../filereader.js').readFile(',');

let input = 1;
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
    }
}

const tictacChecker = function(board, i, j, arr) {
    let cond1 = arr[j] === arr[(j+1)%3] && arr[j] === arr[(j+2)%3];
    let cond2 = arr[j] === board[(i+1)%3][j] && arr[j] === board[(i+2)%3][j];
    let cond3 = (i + j) % 2 === 0;
    if(cond1 || cond2) {
        return arr[j];
    } 
    else if(cond3) {
        if(j === board[i].length - 1 && i < board.length - 1) {
            if(arr[j] === board[i+1][j-1] && arr[j] === board[i+2][j-2])
                return arr[j];
            else 
                continue;
        }
        else if(i === board.length - 1 && j !== board[i].length -1) {
            if(arr[j] === board[i-1][j+1] && arr[j] === board[i-2][j+2])
                return arr[j];
            else 
                continue;
        }
        else if((arr[j] === board[(i+1)%3][(j+1)%3]) && (arr[j] === board[(i+2)%3][(j+2)%3]))
            return arr[j];

    }
}