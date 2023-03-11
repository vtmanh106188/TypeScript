"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = parseFloat(input1) + parseFloat(input2); //<string> ep kieu
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combineNumber = combine(30, 26, 'as-number');
console.log(combineNumber);
const combineStringNumber = combine(30, 26, 'as-number');
console.log(combineStringNumber);
const combineText = combine('Typescript Vs', 'Javascript', 'as-text');
console.log(combineText);
