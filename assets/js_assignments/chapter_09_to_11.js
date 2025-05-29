// // task 1

var city = prompt("Enter the name of a city:");
if (city === "Karachi" || city === "karachi") {
    document.write("Welcome to City of Lights.");
} else {
    document.write("Welcome to " + city + ".");
}

// // task 2

var gender = prompt("Enter your Gender:")
if (gender === "male" || gender === "Male") {
    document.write("<br><br>Good Morning Sir.");
} else if (gender === "female" || gender === "Female") {
    document.write("<br><br>Good Morning Ma'am.");
} else {
    document.write("<br><br>Good Morning.");
}

// // task 3

var light = prompt("Enter your traffic light color (red, yellow, green):");
if (light === "red" || light === "Red") {
    document.write("<br><br>Must Stop");
} else if (light === "yellow" || light === "Yellow") {
    document.write("<br><br>Ready to move");
} else if (light === "green" || light === "Green") {
    document.write("<br><br>Move now");
} else {
    document.write("<br><br>Invalid color");
}

// // task 4

var fuel = prompt("Enter the remaining fuel in liters:");
if (fuel < 0.25) {
    document.write("<br><br>Please refill the fuel in your car.");
} else {
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
document.write ("<h2>Mark Sheet</h2>")
document.write("<table><tr><td>Total Marsk: </td><td> " + tmarks + ".</td></tr>")
document.write("<tr><td>Obtained Marks </td><td> " + omarks + ".</td></tr>")
document.write("<tr><td>Your Percentage is </td><td> " + percentage + ".</td></tr>")
if (percentage > 80) {
    document.write ("<tr><td>Your Grade is: </td><td> A+. </td></tr>")
    document.write ("<tr><td>Remark: </td><td> Excellent </td></tr></table>")
} else if (percentage > 70) {
    document.write ("<tr><td>Your Grade is: </td><td> A. </td></tr>")
    document.write ("<tr><td>Remark: </td><td> Good </td></tr></table>")
} else if (percentage > 60) {
    document.write ("<tr><td>Your Grade is: </td><td> B. </td></tr>")
    document.write ("<tr><td>Remark: </td><td> You need to improve </td></tr></table>")
} else {
    document.write ("<tr><td>Grade:</td><td>You are Fail. </td></tr>")
    document.write ("<tr><td>Remark: </td><td> Sorry </td></tr></table>")
}

// // task 7

var game = +prompt("Enter a number between 1 and 10 to guess the secret number:");
var secretNumber = 7;
if (game === secretNumber) {
    document.write("<br><br>Bingo! Correct answer.");
} else if (game === secretNumber + 1) {
    document.write("<br><br>Close enough to the correct answer.");
} else if (game === secretNumber - 1) {
    document.write("<br><br>Close enough to the correct answer.");
} else {
    document.write("<br><br>Sorry, that's not the correct answer.");
}

// // task 8

var num1 = +prompt("Enter a number to check if it is divisible by 3:");
num2 = num1 % 3
if (num3 === 0) {
    document.write("<br><br>The number " + num1 + " is divisible by 3.");
} else {
    document.write("<br><br>The number " + num1 + " is not divisible by 3.");
}

// // task 9

var num3 = +prompt("Enter a number to check if it is even or odd:");
num4 = num3 % 2
if (num4 === 0) {
    document.write("<br><br>The number " + num3 + " is even.");
} else {
    document.write("<br><br>The number " + num3 + " is odd.");
}

// // task 10

var temp = +prompt("Enter the temperature:");
if (temp > 40) {
    document.write("<br><br>It is too hot outside.");
} else if (temp > 30) {
    document.write("<br><br>The weather today is normal.");
} else if (temp > 20) {
    document.write("<br><br>Today's weather is cool.");
} else {
    document.write("<br><br>OMG! Today's weather is so cool.");
}

// task 11

var in1 = +prompt("Enter first number:");
var operator = prompt("Enter an operator (+, -, *, /, %):");
var in2 = +prompt("Enter second number:");
document.write("<table><tr><td><br> First number: </td><td><br> " + in1 + "</td></tr>");
document.write("<tr><td> Operator: </td><td> " + operator + "</td></tr>");
document.write("<tr><td> Second number: </td><td> " + in2 + "</td></tr>");
if (operator === "+") {
    document.write("<tr><td><h2>Result: </td><td> " + (in1 + in2) + "</h2></td></tr></table>");
} else if (operator === "-") {
    document.write("<tr><td><h2>Result: </td><td> " + (in1 - in2) + "</h2></td></tr></table>");
} else if (operator === "*") {
    document.write("<tr><td><h2>Result: </td><td> " + (in1 * in2) + "</h2></td></tr></table>");
} else if (operator === "/") {
    document.write("<tr><td><h2>Result: </td><td> " + (in1 / in2) + "</h2></td></tr></table>");
} else if (operator === "%") {
    document.write("<tr><td><h2>Result: </td><td> " + (in1 % in2) + "</h2></td></tr></table>");
} else {
    document.write("<tr><td><h2>Result: </td><td>Invalid operator</h2></td></tr></table>");
}

// the end