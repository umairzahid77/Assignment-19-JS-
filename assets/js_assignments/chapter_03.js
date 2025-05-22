var input = +prompt("Enter a number");

var age = input;

alert("Your age is " + age + " years.");

alert("You have visited this site " + age + " times.");

var year = 2025 - age;

document.body.innerHTML = "Your birth Year is " + year + "." + "\n Data type of year is " + typeof(year);

var store = "XYZ Clothing Store.";

var name = prompt("Enter your name");

var title = prompt("Enter product name");

var qty = +prompt("Enter Quantity");

document.body.innerHTML = name + ", ordered " + qty + " " + title + "on " + store;
