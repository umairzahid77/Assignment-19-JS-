// // task 1

var city = prompt("Enter the name of a city:");
if (city === "Karachi" || city === "karachi") {
    console.log ("Welcome to City of Lights.");
    document.write("Welcome to City of Lights.");
} else {
    console.log ("Welcome to " + city + ".");
    document.write("Welcome to " + city + ".");
}

// // task 2

var gender = prompt("Enter your Gender:")
if (gender === "male" || gender === "Male") {
    console.log ("Good Morning Sir.");
    document.write("<br><br>Good Morning Sir.");
} else if (gender === "female" || gender === "Female") {
    console.log ("Good Morning Ma'am.");
    document.write("<br><br>Good Morning Ma'am.");
} else {
    console.log ("Good Morning.");
    document.write("<br><br>Good Morning.");
}

// // task 3

var light = prompt("Enter your traffic light color (red, yellow, green):");
if (light === "red" || light === "Red") {
    console.log ("Must Stop");
    document.write("<br><br>Must Stop");
} else if (light === "yellow" || light === "Yellow") {
    console.log ("Ready to move");
    document.write("<br><br>Ready to move");
} else if (light === "green" || light === "Green") {
    console.log ("Move now");
    document.write("<br><br>Move now");
} else {
    console.log ("Invalid color");
    document.write("<br><br>Invalid color");
}

// // task 4

var fuel = prompt("Enter the remaining fuel in liters:");
if (fuel < 0.25) {
    console.log ("Please refill the fuel in your car.");
    document.write("<br><br>Please refill the fuel in your car.");
} else {
    console.log ("You have enough fuel in your car.");
    document.write("<br><br>You have enough fuel in your car.");
}

// // task 5

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}

// // task 6

var tmarks = +prompt("Enter Total Marks")
var omarks = +prompt("Enter Obtained Marks")
var percentage = omarks / tmarks * 100
console.log ("Mark Sheet")
document.write ("<h2>Mark Sheet</h2>")
console.log ("Total Marsk: " + tmarks + ".")
document.write("<table><tr><td>Total Marsk: </td><td> " + tmarks + ".</td></tr>")
console.log ("Obtained Marks " + omarks + ".")
document.write("<tr><td>Obtained Marks </td><td> " + omarks + ".</td></tr>")
console.log ("Your Percentage is " + percentage + ".")
document.write("<tr><td>Your Percentage is </td><td> " + percentage + ".</td></tr>")
if (percentage > 80) {
    console.log ("Your Grade is: A+.")
    document.write ("<tr><td>Your Grade is: </td><td> A+. </td></tr>")
    console.log ("Remark: Excellent")
    document.write ("<tr><td>Remark: </td><td> Excellent </td></tr></table>")
} else if (percentage > 70) {
    console.log ("Your Grade is: A.")
    document.write ("<tr><td>Your Grade is: </td><td> A. </td></tr>")
    console.log ("Remark: Good")
    document.write ("<tr><td>Remark: </td><td> Good </td></tr></table>")
} else if (percentage > 60) {
    console.log ("Your Grade is: B.")
    document.write ("<tr><td>Your Grade is: </td><td> B. </td></tr>")
    console.log ("Remark: You need to improve")
    document.write ("<tr><td>Remark: </td><td> You need to improve </td></tr></table>")
} else {
    console.log ("Grade: You are Fail.")
    document.write ("<tr><td>Grade:</td><td>You are Fail. </td></tr>")
    console.log ("Remark: Sorry")
    document.write ("<tr><td>Remark: </td><td> Sorry </td></tr></table>")
}

// // task 7

var game = +prompt("Enter a number between 1 and 10 to guess the secret number:");
var secretNumber = 7;
if (game === secretNumber) {
    console.log ("Bingo! Correct answer.");
    document.write("<br><br>Bingo! Correct answer.");
} else if (game === secretNumber + 1) {
    console.log ("Close enough to the correct answer.");
    document.write("<br><br>Close enough to the correct answer.");
} else if (game === secretNumber - 1) {
    console.log ("Close enough to the correct answer.");
    document.write("<br><br>Close enough to the correct answer.");
} else {
    console.log ("Sorry, that's not the correct answer.");
    document.write("<br><br>Sorry, that's not the correct answer.");
}

// // task 8

var num1 = +prompt("Enter a number to check if it is divisible by 3:");
num2 = num1 % 3
if (num3 === 0) {
    console.log ("The number " + num1 + " is divisible by 3.");
    document.write("<br><br>The number " + num1 + " is divisible by 3.");
} else {
    console.log ("The number " + num1 + " is not divisible by 3.");
    document.write("<br><br>The number " + num1 + " is not divisible by 3.");
}

// // task 9

var num3 = +prompt("Enter a number to check if it is even or odd:");
num4 = num3 % 2
if (num4 === 0) {
    console.log ("The number " + num3 + " is even.");
    document.write("<br><br>The number " + num3 + " is even.");
} else {
    console.log ("The number " + num3 + " is odd.");
    document.write("<br><br>The number " + num3 + " is odd.");
}

// // task 10

var temp = +prompt("Enter the temperature:");
if (temp > 40) {
    console.log ("It is too hot outside.");
    document.write("<br><br>It is too hot outside.");
} else if (temp > 30) {
    console.log ("The weather today is normal.");
    document.write("<br><br>The weather today is normal.");
} else if (temp > 20) {
    console.log ("Today's weather is cool.");
    document.write("<br><br>Today's weather is cool.");
} else {
    console.log ("OMG! Today's weather is so cool.");
    document.write("<br><br>OMG! Today's weather is so cool.");
}

// task 11

var in1 = +prompt("Enter first number:");
var operator = prompt("Enter an operator (+, -, *, /, %):");
var in2 = +prompt("Enter second number:");
console.log ("First number: " + in1);
document.write("<table><tr><td><br> First number: </td><td><br> " + in1 + "</td></tr>");
console.log ("Operator: " + operator);
document.write("<tr><td> Operator: </td><td> " + operator + "</td></tr>");
console.log ("Second number: " + in2);
document.write("<tr><td> Second number: </td><td> " + in2 + "</td></tr>");
if (operator === "+") {
    console.log ("Result: " + (in1 + in2));
    document.write("<tr><td><h2>Result: </td><td> " + (in1 + in2) + "</h2></td></tr></table>");
} else if (operator === "-") {
    console.log ("Result: " + (in1 - in2));
    document.write("<tr><td><h2>Result: </td><td> " + (in1 - in2) + "</h2></td></tr></table>");
} else if (operator === "*") {
    console.log ("Result: " + (in1 * in2));
    document.write("<tr><td><h2>Result: </td><td> " + (in1 * in2) + "</h2></td></tr></table>");
} else if (operator === "/") {
    console.log ("Result: " + (in1 / in2));
    document.write("<tr><td><h2>Result: </td><td> " + (in1 / in2) + "</h2></td></tr></table>");
} else if (operator === "%") {
    console.log ("Result: " + (in1 % in2));
    document.write("<tr><td><h2>Result: </td><td> " + (in1 % in2) + "</h2></td></tr></table>");
} else {
    console.log ("Result: Invalid operator");
    document.write("<tr><td><h2>Result: </td><td>Invalid operator</h2></td></tr></table>");
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