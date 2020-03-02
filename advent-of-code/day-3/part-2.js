const { lines } = require('./input');
const { line1, line2 } = lines;

const findCoordinate = function(str, currentPosition) {
    debugger
    let direction = str.slice(0, 1);
    let position = parseInt(str.slice(1));
    let coordinate = {x: currentPosition.x, y: currentPosition.y, distance: currentPosition.distance + position};
    switch(direction) {
        case 'R':
            coordinate.x += position;
            break;
        case 'D':
            coordinate.y -= position;
            break;
        case 'L':
            coordinate.x -= position;
            break;
        case 'U':
            coordinate.y += position;
            break;
    }
    return coordinate;
};

const constructPoints = function(line) {
    let drawingPoints = [];
    let currentPosition = {
        x: 0,
        y: 0,
        distance: 0
    };
    for(let i = 0; i<line.length;i++) {
        let nextCoordinate = findCoordinate(line[i], currentPosition);
        drawingPoints.push({from: currentPosition, to: nextCoordinate});
        currentPosition= nextCoordinate;
    }
    return drawingPoints;
};

const isBetween = function(intersectionPt, lineFrom, lineTo) {
    return (intersectionPt < lineFrom && intersectionPt > lineTo) || (intersectionPt > lineFrom && intersectionPt < lineTo);
};

const intercepts = function(lines, newLine) {
    const intersections = []
    lines.forEach(currentLine => {
        if(newLine.from.x === newLine.to.x){
            if(currentLine.from.x !== currentLine.to.x) {
                if(isBetween(newLine.from.x, currentLine.from.x, currentLine.to.x)) {
                    if(isBetween(currentLine.from.y, newLine.from.y, newLine.to.y)) {
                        intersections.push(currentLine.from.distance + newLine.from.distance + Math.abs(currentLine.from.x - newLine.from.x) + Math.abs(newLine.from.y - currentLine.from.y)) 
                    }
                }
            }
        } else {
            if(currentLine.from.y !== currentLine.to.y) {
                if (isBetween(newLine.from.y, currentLine.from.y, currentLine.to.y)) {
                    if (isBetween(currentLine.from.x, newLine.from.x, newLine.to.x)) {
                        intersections.push(currentLine.from.distance + newLine.from.distance + Math.abs(currentLine.from.x - newLine.from.x) + Math.abs(newLine.from.y - currentLine.from.y));
                    }
                }
            }
        }
    });
    return intersections;
};

const line1Points = constructPoints(line1);
// const line2Points = constructPoints(line2);
let currentPositionLine = {
    x: 0,
    y: 0,
    distance: 0
};
let intersectionLines =  []
line2.forEach(line => {
    let nextCoordinate = findCoordinate(line, currentPositionLine);
    next = {from: currentPositionLine, to: nextCoordinate};
    intersectionLines.push(...intercepts(line1Points, next));
    currentPositionLine = nextCoordinate;
});
console.log(intersectionLines);

let MHDist = 0;
intersectionLines.forEach(intersection => {
    if(MHDist === 0 || intersection < MHDist) 
        MHDist = intersection;
});
console.log('Distance', MHDist);