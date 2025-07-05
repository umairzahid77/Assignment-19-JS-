// task 01

var posnum = +prompt("Enter a positive integer in decimal:");
document.write("You entered:", posnum);
console.log("You entered:", posnum);
var round = Math.round(posnum)
document.write("<br>Roundoff value: " + round);
console.log("Roundoff value: " + round);
var floor = Math.floor(posnum);
document.write("<br>floor value: " +  floor);
console.log("floor value: " +  floor);
var ceil = Math.ceil(posnum);
document.write("<br>ceil value: " + ceil);
console.log("ceil value: " + ceil);

// task 02

var negnum = +prompt("Enter a negative integer in decimal:");
document.write("<br><br>You entered:", negnum);
console.log("You entered:", negnum);
round = Math.round(negnum)
document.write("<br>Roundoff value: " + round);
console.log("Roundoff value: " + round);
floor = Math.floor(negnum);
document.write("<br>floor value: " +  floor);
console.log("floor value: " +  floor);
ceil = Math.ceil(negnum);
document.write("<br>ceil value: " + ceil);
console.log("ceil value: " + ceil);

// task 03

var absolute = Math.abs(negnum);
document.write("<br>Absolute value of " + negnum + " is: " + absolute);
console.log("Absolute value of " + negnum + " is: " + absolute);

// task 04

var random = Math.floor((Math.random() * 6) + 1)
document.write("<br><br>Random value: " + random);
console.log("Random value: " + random);

// task 05

random = Math.floor((Math.random() * 2) + 1)
if (random === 1) {
    document.write("<br>Ramdom Coin value: Heads");
    console.log("Ramdom Coin value: Heads");
} else if (random === 2) {
    document.write("<br>Ramdom Coin value: Tails");
    console.log("Ramdom Coin value: Tails");
}

// task 06

random = Math.floor((Math.random() * 100) + 1)
document.write("<br>Random number between 1 to 100: " + random);
console.log("Random number between 1 to 100: " + random);

// task 07

var weight = prompt("Enter your weight in kilograms");
var weight2 = []
for (var i = 0; i < weight.length; i++) {
    if (weight[i].charCodeAt() === 46 || (weight[i].charCodeAt() >= 48 && weight[i].charCodeAt() <= 57)) {
        weight2.push(weight[i])
    }
}
weight2 = weight2.join("");
document.write("<br><br>Your weight is: " + weight2 + " kg");
console.log("Your weight is: " + weight2 + " kg");

// task 08

random = Math.floor((Math.random() * 10) + 1)
var userInput = +prompt("Enter a number between 1 to 10");
if (userInput === random) {
    document.write("<br><br>Congratulations! You guessed the number: " + random);
    console.log("Congratulations! You guessed the number: " + random);
} else {
    document.write("<br><br>Try again! The number was: " + random);
    console.log("Try again! The number was: " + random);
}

// the end

// console.log("Rounded value:", posnum);
// posnum = posnum.toString(2);
// console.log("Binary representation:", posnum);
// posnum = parseInt(posnum, 2);
// console.log("Converted back to decimal:", posnum);
// posnum = posnum.toString(8);
// console.log("Octal representation:", posnum);
// posnum = parseInt(posnum, 8);
// console.log("Converted back to decimal:", posnum);
// posnum = posnum.toString(16);
// console.log("Hexadecimal representation:", posnum);
// posnum = parseInt(posnum, 16);
// console.log("Converted back to decimal:", posnum);