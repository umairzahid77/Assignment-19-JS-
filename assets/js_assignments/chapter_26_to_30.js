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
}

// task 02

function task02() {
}

// task 03

function task03() {
}

// task 04

function task04() {
}

// task 05

function task05() {
}

// task 06

function task06() {
}

// task 07

function task07() {
}

// task 08

function task08() {
}

// task 09

function task09() {
}

// task 10

function task10() {
}

// task 11

function task11() {
}

// task 12

function task12() {
}

// task 13

function task13() {
}

// task 14

function task14() {
}

// task 15

function task15() {
}

// task 16

function task16() {
}

// task 17

function task17() {
}

// task 18

function task18() {
}

// task 19

function task19() {
}

// task 20

function task20() {
}

// show code

function showtask01() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask02() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask03() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask04() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask05() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask06() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask07() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask08() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask09() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask10() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask11() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask12() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask13() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask14() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask15() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask16() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask17() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask18() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask19() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask20() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
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