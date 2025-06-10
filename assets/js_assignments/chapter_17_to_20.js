// task 01

var array

// task 02

var  array1 = [0, 1, 2, 3];
var  array2 = [1, 0, 1, 2];
var  array3 = [2, 1, 0, 1];
array = [array1, array2, array3];
console.log(array);
document.write("[" + array[0] + "]<br>");
document.write("[" + array[1] + "]<br>");
document.write("[" + array[2] + "]<br><br>");

// task 03

var count = 1;
for (var i = 0; i < 10; i++) {
    document.write(count + "<br>");
    console.log(count++)
}

// task 04

var table = Number(prompt("Enter a number to show its multiplication table"))
var length = Number(prompt("Enter length of multiplication table"))
console.log("Multiplication table of " + table + " till " + length);
document.write("<br>Multiplication table of " + table + " till " + length + "<br>");
for (var i = 1; i <= length; i++) {
    document.write(table + " x " + i + " = " + (table * i) + "<br>");
    console.log(table + " x " + i + " = " + (table * i));
}

// task 05

document.write("<br>");
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (var i = 0; i < 5; i++) {
    document.write(fruits[i] + "<br>");
    console.log(fruits[i]);
}
document.write("<br>");
for (var i = 0; i < 5; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
    console.log("Element at index " + i + " is " + fruits[i]);
}

// task 06

document.write("<br>Counting:<br>");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
var a = 1;
console.log("Counting:");
console.log(a + ", " + ++a + ", " + ++a + ", " + ++a + ", " + ++a + ", " + ++a + ", " + ++a + ", " + ++a + ", " + ++a + ", " + ++a + ", " + ++a + ", " + ++a + ", " + ++a + ", " + ++a + ", " + ++a + ",");

document.write("<br>Reverse Counting:<br>");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
a = 10;
console.log("Reverse Counting:");
console.log(a + ", " + --a + ", " + --a + ", " + --a + ", " + --a + ", " + --a + ", " + --a + ", " + --a + ", " + --a + ", " + --a + ",");

document.write("<br>Even:<br>");
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}
a = 0;
console.log("Even:");
console.log(a + ", " + (a=a+2) + ", " + (a=a+2) + ", " + (a=a+2) + ", " + (a=a+2) + ", " + (a=a+2) + ", " + (a=a+2) + ", " + (a=a+2) + ", " + (a=a+2) + ", " + (a=a+2) + ", " + (a=a+2) + ",");

document.write("<br>Odd:<br>");
for (var i = 1; i <= 20; i += 2) {
    document.write(i + ", ");
}
a = 1;
console.log("odd:");
console.log(a + ", " + (a=a+2) + ", " + (a=a+2) + ", " + (a=a+2) + ", " + (a=a+2) + ", " + (a=a+2) + ", " + (a=a+2) + ", " + (a=a+2) + ", " + (a=a+2) + ", " + (a=a+2) + ",");

document.write("<br>K Series:<br>");
for (var i = 2; i <= 20; i += 2) {
    document.write(i + "K, ");
}
a = 2;
console.log("K Series:");
console.log(a + "K, " + (a=a+2) + "K, " + (a=a+2) + "K, " + (a=a+2) + "K, " + (a=a+2) + "K, " + (a=a+2) + "K, " + (a=a+2) + "K, " + (a=a+2) + "K, " + (a=a+2) + "K, " + (a=a+2) + "K, ");

// task 07

var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
userInput = userInput.toLowerCase();
if (items.indexOf(userInput) !== -1) {
    console.log(userInput + " is available at index " + items.indexOf(userInput) + " in our bakery");
    document.write(userInput + " is available at index " + items.indexOf(userInput) + " in our bakery<br>");
} else {
    console.log("We are sorry. " + userInput + " is not available in our bakery");
    document.write("<br><br>We are sorry. " + userInput + " is not available in our bakery");
}

// // task 08

var array = [24, 53, 78, 91, 12];
console.log("Array items: " + array);
document.write("<br><br>Array items: " + array + "<br>");
array.sort()
console.log("The largest number is " + array[array.length - 1]);
document.write("The largest number is " + array[array.length - 1] + "<br>");

// task 09

console.log("The smallest number is " + array[0]);
document.write("The smallest number is " + array[0] + "<br><br>");

// task 10

for (var i = 1; i <= 20; i++) {
    document.write(i * 5 + ", ");
}
a = 5;
console.log(a + ", " + (a=a+5) + ", " + (a=a+5) + ", " + (a=a+5) + ", " + (a=a+5) + ", " + (a=a+5) + ", " + (a=a+5) + ", " + (a=a+5) + ", " + (a=a+5) + ", " + (a=a+5) + ", " + (a=a+5) + ", " + (a=a+5) + ", " + (a=a+5) + ", " + (a=a+5) + ", " + (a=a+5) + ", " + (a=a+5) + ", " + (a=a+5) + ", " + (a=a+5) + ", " + (a=a+5) + ", " + (a=a+5) + ",");

// the end