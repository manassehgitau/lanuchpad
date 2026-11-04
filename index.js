// Data Types - string, Number, Boolean, null, undefined

let numberOfPeople = 10; // Number (integer)
const pi = 3.142;

let name = "Manasseh"; // string
console.log(name);
console.log(typeof name);

let isStudent = true; // false - boolean
console.log(isStudent);
console.log(typeof isStudent);

// Number methods /operations - floor, ceil, round, abs, max, min, ... etc (w3schools)

//string methods - toLowerCase, toUpperCase, includes, replace,.... w3schools

let age; // if a value is not declared in a variable it becomes undefined.
console.log(age);
console.log(typeof age);

let height = null; // null - no value is expected here
console.log(height);
console.log(typeof height);

// student - name, age, reg no, class, grades
// to put all this together we use an object
let student = {
  name: "Manasseh Gitau",
  age: 25,
  registrationNumber: "NX-26-03870",
  class: "Bsc Computer Science",
  isActive: true,
  grades: {
    mathematics: "A",
    IntroductionToComputerScience: "A+",
    //...
  },
};
console.log(student.name);
console.log(`${student.name} is ${student.age} and is doing ${student.class} and has the admission number ${student.registrationNumber}`)


// arrays - list a list things put together
let fruits = ["banana", "apples", "mangoes"]

// arithmetic operations
let a = 23;
let b = 40;
let c = -32;
let d = 65;

let add = a + b;
console.log(a + b);

let sub = a - b;
console.log(sub);

// BODMAS - brackets, OF,division, multiplication, addition, subtraction (order of precedence)
let subNeg = a - c; // 23 - (-32) = 23 + 32 = 55
console.log(subNeg)

let total = (a * b) / d + c - a; // (23 * 40) / 65 + (-32) - 23 = 920 /65 = 14.1528 - 32 -23
console.log(total);

// modulo - remainder
let reminder = d % b;
console.log(reminder); // 65/40 = 1 (65-40=25)

// power 
let power = 2 ** 7; // 2 x 2 x 2 x 2 x 2 x 2 x 2  
console.log(power);

// addition shortform a +10
console.log(a+=10); // a = a + 10

b += 43;
console.log(b);

c -= 67
console.log(c);

d *= 5
console.log(d);

console.log(a);
a /= 2;
console.log(a);


// comparison
console.log(a == 16);
console.log(a == 16.5);

console.log(a == "16.5");
console.log(a === "16.5");

console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log( a > b);
console.log(a < b);

console.log(a > 16.5);
console.log(a >= 16.5);


console.log(b < 83);
console.log(a <= 83);


console.log(a !== 16);
console.log(a !== 16.5);
console.log(a !== "16.5");


// AND, OR
// AND - both must be true (&&)
// OR - one can be true

console.log(true && true);
console.log(true && false);
console.log(false && false);


console.log(true || true);
console.log(true || false);
console.log(false || false);
