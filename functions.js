// const city = "Nairobi";
// {
//     console.log(city);    // "Nairobi"
// }

// console.log(city);        // ReferenceError: city is not defined




// totalPrice = numberOfNights * PricePerNight;

// const numberOfNights = 5;
// const pricePerNight = 4000;

// let subtotal  = numberOfNights * pricePerNight;
// let taxCharged = subtotal * 0.16;
// let totalPrice = subtotal + taxCharged;
// console.log(totalPrice);

// 100 - 5, 4000, 2, 1000, 7 ,10000, ...

const taxRate = 0.16; //global variable
function totalPriceChargedWithTax(numberOfNights = 1, pricePerNight = 1000) {
    let subtotal  = numberOfNights * pricePerNight;
    let taxCharged = subtotal * taxRate;
    let totalPrice = subtotal + taxCharged;

    console.log(totalPrice);
}

// totalPriceChargedWithTax(5, 4000);
// totalPriceChargedWithTax(2, 1000);
// totalPriceChargedWithTax(7, 10000);
totalPriceChargedWithTax();


function greet(name = "guest"){
    console.log(`Karibu ${name}`);
}

// greet("John");
// greet("James");
// greet("Lilian");
// greet("Jane");
// greet();
const prices = [4500, 6200, 3800, 9100, 5400];

// function findHighest(listOfItems){
//     let max = 0
//     for (let i = 0; i < listOfItems.length; i++){
//         if (listOfItems[i] > max){
//             max =listOfItems[i];
//         }
//     }
//     return max;
// }


// arrow function (a)
// const findHighest = function(listOfItems){
//      let max = 0
//     for (let i = 0; i < listOfItems.length; i++){
//         if (listOfItems[i] > max){
//             max =listOfItems[i];
//         }
//     }
//     return max;
// }

// arrow function (b) - commonly used version
const findHighest = (listOfItems) => {
    let max = 0
    for (let i = 0; i < listOfItems.length; i++){
        if (listOfItems[i] > max){
            max =listOfItems[i];
        }
    }
    return max;
}

let highestPrice = findHighest(prices);
console.log(highestPrice);

const power = (num, superscript) => {
    return num ** superscript;
}

console.log(power(2, 3));

let answer = power(5, 5);
console.log(answer);

const square = (num) => {
    return num * num;
}

let squareOfTwo = square(7);
console.log(squareOfTwo);
console.log(square(100))

const runTwice = (namedFunction) => {
    namedFunction();
    namedFunction();
}

runTwice(greet);