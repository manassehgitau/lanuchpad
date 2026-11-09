// programmers need to branch off logic
// if it rains carry an umbrella, if not then wear lightly

let isRaining = true;

// if (isRaining){
//     console.log("Please carry an umbrella!");
// } else{
//     console.log("Wear light clothes");
// }

// (condition) ? "if true" :"else block"

isRaining ? console.log("Please Carry an umbrella") : console.log(" Wear light clothes");


// if/else, if/else if/else
let hour = 18; // hour check

if (hour < 12){ // not yet 12pm
    console.log("Good Morning");
} else if (hour < 16){ // not yet 4pm
    console.log("Good Afternoon");
} else if (hour < 19){ // not yet 7pm
    console.log("Good Evening");
}else{ // anything else
    console.log('Good Night');
}

// if value is coast implement this

let destination = "nakuru";

switch (destination){
    case "coast":
        console.log('Visit fort Jesus, and the beach');
        break;
    case 'nyeri':
        console.log("visit Mt Kenya and aberdare ranges");
        break;
    case 'kisumu':
        console.log('visit lake victoria');
        break;
    default:
        console.log("Kindly visit our website to learn more on this");
        break;
}

// for loop

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

let sum = 0
for (let i = 1; i <= 10; i++){
    console.log(`current number: ${i}`);
    sum += i
    console.log(`current sum: ${sum}`);
} 
// console.log(sum);

// infinite loop
// while (true){
//     console.log("Manasseh");
// } 

sum = 0;
let i = 0;
while(i <= 10){
    console.log(`current number: ${i}`);
    sum += i;
    console.log(`current sum: ${sum}`);
    i++;
}