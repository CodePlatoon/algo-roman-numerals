var rn = require("./romanNumerals");

console.log(rn.toRoman(1) === 'I');
console.log(rn.toRoman(3) === 'III');
console.log(rn.toRoman(4) === 'IV');
console.log(rn.toRoman(9) === 'IX');
console.log(rn.toRoman(10) === 'X');
console.log(rn.toRoman(40) === 'XL');
console.log(rn.toRoman(50) === 'L');
console.log(rn.toRoman(90) === 'XC');
console.log(rn.toRoman(100) === 'C');
console.log(rn.toRoman(400) === 'CD');
console.log(rn.toRoman(500) === 'D');
console.log(rn.toRoman(900) === 'CM');
console.log(rn.toRoman(1000) === 'M');
console.log(rn.toRoman(959) === 'CMLIX');
