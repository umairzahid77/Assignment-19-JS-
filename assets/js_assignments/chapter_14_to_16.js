// task 01

document.write("Task 01: need to understand.")

// task 02

document.write("<br><br>Task 02: need to understand.")

// task 03

var strings = String["apple", "banana", "cherry", "date", "mango"];

// task 04

var numbers = Number[21, 41, 111, 313, 786];

// task 05

var booleans = Boolean[true, false];

// task 06

var mixedArray = ["apple", "banana", "cherry", "date", "mango", 21, 41, 111, 313, 786, true, false];

// task 07

var edu = ["Middle", "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
console.log(edu);
document.write("<h3>Qualification</h3>");
document.write(edu[0]);
document.write("<br>" + edu[1]);
document.write("<br>" + edu[2]);
document.write("<br>" + edu[3]);
document.write("<br>" + edu[4]);
document.write("<br>" + edu[5]);
document.write("<br>" + edu[6]);
document.write("<br>" + edu[7]);
document.write("<br>" + edu[8]);

// task 08

var students = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var percent = 100;
document.write("<br><br><table><tr><td>Score of " + students[0] + " </td><td> is " + scores[0] + ". </td><td> Percentage: " + (scores[0] / percent * 100) + "%</td></tr>");
document.write("<tr><td>Score of " + students[1] + " </td><td> is " + scores[1] + ". </td><td> Percentage: " + (scores[1] / percent * 100) + "%</td></tr>");
document.write("<tr><td>Score of " + students[2] + " </td><td> is " + scores[2] + ". </td><td> Percentage: " + (scores[2] / percent * 100) + "%</td></tr></table>");

// task 09

var colorNames = ["Red", "Green", "Blue"];
console.log(colorNames);
document.write(colorNames);
// a
colorNames.unshift(prompt("Enter a color to add at the beginning:"));
console.log(colorNames);
document.write(colorNames);
// b
colorNames.push(prompt("Enter a color to add at the end:"));
console.log(colorNames);
document.write(colorNames);
// c
colorNames.unshift("Pink", "Yellow");
console.log(colorNames);
document.write(colorNames);
// d
colorNames.shift();
console.log(colorNames);
document.write(colorNames);
// e
colorNames.pop();
console.log(colorNames);
document.write(colorNames);
// f
var index = +prompt("Enter the index at which you want to add a color:")
colorNames.splice(index, 0, prompt("Enter a color to add at index " + index + ":"));
console.log(colorNames);
// task 10

// task 11

// task 12

// task 13

// task 14

// task 15

// the end