var rn = require("./romanNumerals");

console.log(rn.toRoman(1) === 'I');
console.log(rn.toRoman(3) === 'III');
console.log(rn.toRoman(4) === 'IV');

console.log(rn.toRoman(23))
console.log(rn.toRoman(3001))

console.log(rn.toRoman(0))
console.log(rn.toRoman(-10))