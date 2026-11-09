// const age = -121;

// if (age > 0 && age < 3){
//     console.log(`Your ticket is free`);
// } else if(age >= 3 && age <= 17){
//     console.log(`You are a child and the ticket will be KES 500`);
// } else if (age >= 18 && age <= 59){
//     console.log('You are an adult. The ticket will be KES 1500');
// }else if (age > 60){
//     console.log(` you are a senior citizen. The ticket will be KES 750`)
// }else {
//     console.log(`Invalid Age!`)
// }



// const region = "coast";

// switch (region) {
//     case "coast":
//         console.log('Snorkelling in Watamu');
//         // break;
//     case "nairobi":
//         console.log('Visit the Giraffe Centre');
//         break;
//     case "rift-valley":
//         console.log('Flamingo watching at Lake Nakuru');
//         break;
//     case "western":
//         console.log('Kakamega Forest walk');
//         break;
//     default:
//         console.log('Choose a region to see activities');
//         break;
// }


const prices = [4500, 6200, 3800, 9100, 5400];
let totalPrice = 0;
let maxPrice = 0

for (let i = 0; i < prices.length; i++){
    console.log(`KES ${prices[i]}`);
    totalPrice += prices[i];

    if (prices[i] > maxPrice){
        maxPrice = prices[i];
    }
}

console.log(`Total Price: KES ${totalPrice}`);

let averagePrice = totalPrice / prices.length;
console.log(averagePrice);
console.log(`The average price is KES ${Math.round(averagePrice)}`);
console.log(`The highest Price is KES ${maxPrice}`);


