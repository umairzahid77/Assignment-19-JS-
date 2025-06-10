// task 01

var students = []

// task 02

var studentsnames = []

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
console.log("Qualification");
document.write("<h3>Qualification</h3>");
console.log(edu[0]);
document.write(edu[0]);
console.log(edu[1]);
document.write("<br>" + edu[1]);
console.log(edu[2]);
document.write("<br>" + edu[2]);
console.log(edu[3]);
document.write("<br>" + edu[3]);
console.log(edu[4]);
document.write("<br>" + edu[4]);
console.log(edu[5]);
document.write("<br>" + edu[5]);
console.log(edu[6]);
document.write("<br>" + edu[6]);
console.log(edu[7]);
document.write("<br>" + edu[7]);
console.log(edu[8]);
document.write("<br>" + edu[8]);

// task 08

students.push("Michael", "John", "Tony")
var scores = [320, 230, 480];
var percent = 100;
console.log("Score of " + students[0] + " is " + scores[0] + ". Percentage: " + (scores[0] / percent * 100));
document.write("<br><br><table><tr><td>Score of " + students[0] + " </td><td> is " + scores[0] + ". </td><td> Percentage: " + (scores[0] / percent * 100) + "%</td></tr>");
console.log("Score of " + students[1] + " is " + scores[1] + ". Percentage: " + (scores[1] / percent * 100));
document.write("<tr><td>Score of " + students[1] + " </td><td> is " + scores[1] + ". </td><td> Percentage: " + (scores[1] / percent * 100) + "%</td></tr>");
console.log("Score of " + students[2] + " is " + scores[2] + ". Percentage: " + (scores[2] / percent * 100));
document.write("<tr><td>Score of " + students[2] + " </td><td> is " + scores[2] + ". </td><td> Percentage: " + (scores[2] / percent * 100) + "%</td></tr></table>");

// task 09

var colorNames = [" Red ", " Green", " Blue"];
console.log(colorNames);
document.write("<br>" + colorNames);
// a
colorNames.unshift(prompt("Enter a color to add at the beginning:"));
console.log(colorNames);
document.write("<br>" + colorNames);
// b
colorNames.push(prompt("Enter a color to add at the end:"));
console.log(colorNames);
document.write("<br>" + colorNames);
// c
colorNames.unshift(" Pink", " Yellow");
console.log(colorNames);
document.write("<br>" + colorNames);
// d
colorNames.shift();
console.log(colorNames);
document.write("<br>" + colorNames);
// e
colorNames.pop();
console.log(colorNames);
document.write("<br>" + colorNames);
// f
var index = +prompt("Enter the index at which you want to add a color:")
colorNames.splice(index, 0, prompt("Enter a color to add at index " + index + ":"));
console.log(colorNames);
document.write("<br>" + colorNames);
// g
var indexdel = +prompt("Enter the index at which you want to delete color:")
colorNames.splice(index, +prompt("Enter a amount to delete colors at index " + indexdel + ":"));
console.log(colorNames);
document.write("<br>" + colorNames);

// task 10

console.log("Array before sorting: ");
document.write("<h3>Array before sorting:</h3>");
console.log(edu);
document.write(edu);
console.log(mixedArray);
document.write("<br>" + mixedArray);
edu.sort();
mixedArray.sort();
console.log("Array after sorting: ");
document.write("<h3>Array after sorting:</h3>");
console.log(edu);
document.write(edu);
console.log(mixedArray);
document.write("<br>" + mixedArray);

// task 11

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
console.log(cities);
document.write("<br><br>" + cities);
var selectedCities = cities.slice(1, 4);
console.log(selectedCities);
document.write("<br>" + selectedCities);

// task 12

var arr = ["This", "is", "my", "cat"];
console.log(arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3]);
document.write("<br><br>" + arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3]);
var str = arr.join(" ");
console.log(str);
document.write("<br>" + str + "<br>");

// task 13

var devices = [];
for (var i = 0; i < 5; i++) {
    devices[i] = prompt("Enter device name to store in array at index " + i);
    console.log(devices[i]);
    document.write("<br>" + devices[i]);
}

// task 14

devices.reverse();
console.log("Devices in reverse order:");
document.write("<br><br>Devices in reverse order:<br>");
console.log(devices)
document.write(devices)

// task 15

console.log("Please help for task no 15");
document.write("<br><br>Please help for task no 15");

// the end