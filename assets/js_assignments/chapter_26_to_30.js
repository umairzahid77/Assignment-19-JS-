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

// task 01

function task01() {
    let t01 = document.getElementById("t01")
    t01.innerText = ``
    t01.innerHTML = ``
}

function showtask01() {
    let show01 = document.getElementById("task01")
    show01.innerText = ``
}

// task 02

function task02() {
    let t02 = document.getElementById("t02")
    t02.innerText = ``
    t02.innerHTML = ``
}

function showtask02() {
    let show02 = document.getElementById("task02")
    show02.innerText = ``
}

// task 03

function task03() {
    let t03 = document.getElementById("t03")
    t03.innerText = ``
    t03.innerHTML = ``
}

function showtask03() {
    let show03 = document.getElementById("task03")
    show03.innerText = ``
}

// task 04

function task04() {
    let t04 = document.getElementById("t04")
    t04.innerText = ``
    t04.innerHTML = ``
}

function showtask04() {
    let show04 = document.getElementById("task04")
    show04.innerText = ``
}

// task 05

function task05() {
    let t05 = document.getElementById("t05")
    t05.innerText = ``
    t05.innerHTML = ``
}

function showtask05() {
    let show05 = document.getElementById("task05")
    show05.innerText = ``
}

// task 06

function task06() {
    let t06 = document.getElementById("t06")
    t06.innerText = ``
    t06.innerHTML = ``
}

function showtask06() {
    let show06 = document.getElementById("task06")
    show06.innerText = ``
}

// task 07

function task07() {
    let t07 = document.getElementById("t07")
    t07.innerText = ``
    t07.innerHTML = ``
}

function showtask07() {
    let show07 = document.getElementById("task07")
    show07.innerText = ``
}

// task 08

function task08() {
    let t08 = document.getElementById("t08")
    t08.innerText = ``
    t08.innerHTML = ``
}

function showtask08() {
    let show08 = document.getElementById("task08")
    show08.innerText = ``
}

// clear all

function clearall() {
    let t01 = document.getElementById("t01")
    t01.innerText = ``
    t01.innerHTML = ``
    let t02 = document.getElementById("t02")
    t02.innerText = ``
    t02.innerHTML = ``
    let t03 = document.getElementById("t03")
    t03.innerText = ``
    t03.innerHTML = ``
    let t04 = document.getElementById("t04")
    t04.innerText = ``
    t04.innerHTML = ``
    let t05 = document.getElementById("t05")
    t05.innerText = ``
    t05.innerHTML = ``
    let t06 = document.getElementById("t06")
    t06.innerText = ``
    t06.innerHTML = ``
    let t07 = document.getElementById("t07")
    t07.innerText = ``
    t07.innerHTML = ``
    let t08 = document.getElementById("t08")
    t08.innerText = ``
    t08.innerHTML = ``
    let show01 = document.getElementById("task01")
    show01.innerText = ``
    let show02 = document.getElementById("task02")
    show02.innerText = ``
    let show03 = document.getElementById("task03")
    show03.innerText = ``
    let show04 = document.getElementById("task04")
    show04.innerText = ``
    let show05 = document.getElementById("task05")
    show05.innerText = ``
    let show06 = document.getElementById("task06")
    show06.innerText = ``
    let show07 = document.getElementById("task07")
    show07.innerText = ``
    let show08 = document.getElementById("task08")
    show08.innerText = ``
}

// the end