// let , const - declaring variables

let people = 10;
console.log(`Current number of people: ${people}`);

people = 20;
console.log(`Current number of people: ${people}`);

const pi = 3.142;
console.log(`value of pi: ${pi}`);

// cannot change the value of pi since it uses the variable keyword 'const'
// pi = 3.14158;
// console.log(`value of pi: ${pi}`);

let name = "Jane";
let age = 22;
let course = "Bsc Finance"

// Manasse is 25 and studies Bsc Computer Scince
console.log(`${name} is ${age} and studies ${course}`)


// data types - strings, numbers, boolean, null, undefined, objects, arrays

// 1.strings - words/text

let location = "Jkuat Towers";
let city = 'Nairobi';

const country = 'Kenya';

console.log(`${location} is found in ${city} city which is in ${country}`);

// string methods - these are in built functions to manipulate the strings

let destination = "  DiAni BeAcH  "
console.log(destination);

let trimedDestination = destination.trim();
console.log(trimedDestination);

// All captial letters - uppercase
let UpperCaseDestination = destination.toUpperCase();
console.log(UpperCaseDestination);


// all small letters - lowercase
let lowerCaseDestination = destination.toLowerCase();
console.log(lowerCaseDestination);


// checking whether a word exists in string - includes
let beachCheck = destination.includes('BeAcH'); // true or false
console.log(beachCheck);


// replace one word with another  Diani -> watamu
let replacedWord = destination.replace("DiAni", "Watamu");
console.log(replacedWord);

console.log(destination.length)

console.log(typeof beachCheck);
console.log(typeof people);
console.log(typeof name);

// Number - integers (whole numbers) 24 and floats (decimal-point numbers) 3.1415

const price = 4500;
const discount = 0.15;

let discountedAmount = price * discount
let finalCoast = price - discountedAmount;
console.log(`Final Price: ${finalCoast}`);

let a = 3.7
let b = 3.05
console.log(Math.ceil(b));
console.log(Math.round(b));
console.log(Math.floor(3.7));
console.log(Math.abs(-43));

console.log(Math.max(23, 54, 26));
console.log(Math.min(23, 54, 26));

let shs = "42"
let size = "54 px"

let convertedShs = Number(shs);
let convertedShs2 = parseInt(shs)

console.log(typeof shs);
console.log(typeof convertedShs);
console.log(convertedShs);
console.log(typeof convertedShs2);
console.log(convertedShs2);

let convertedSize = Number(size);
console.log(typeof convertedSize);
console.log(convertedSize);

let convertedSize2 = parseInt(size);
console.log(typeof convertedSize2);
console.log(convertedSize2);

console.log(5 == 5);
console.log(5 == '5');

console.log(5 === '5');

console.log(5 !== 6);
console.log(5 !== 5);

console.log(3 < 5);
console.log(5 > 10);

console.log(3 <= 3);
console.log(7 >= 7);

// 1 - true, 0 - false
console.log(1 == true);
console.log(0 == false);

// AND, OR

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

