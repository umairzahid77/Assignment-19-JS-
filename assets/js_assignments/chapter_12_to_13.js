// task 01
var input = prompt("Enter a Number or Alphabet:");
var asciiValue = input.charCodeAt(0);
console.log ("The ASCII value of '" + input + "' is: " + asciiValue);
document.write("The ASCII value of '" + input + "' is: " + asciiValue);
if (asciiValue >= 65 && asciiValue <= 90) {
    console.log ("The character is an uppercase letter.");
    document.write("<br>The character is an uppercase letter.");
} else if (asciiValue >= 97 && asciiValue <= 122) {
    console.log ("The character is a lowercase letter.");
    document.write("<br>The character is a lowercase letter.");
} else if (asciiValue >= 48 && asciiValue <= 57) {
    console.log ("The character is a digit.");
    document.write("<br>The character is a digit.");
} else {
    console.log ("The character is a special character.");
    document.write("<br>The character is a special character.");
}

// task 02

var num1 = +prompt("Enter the first integer:")
var num2 = +prompt("Enter the second integer:")
if (num1 > num2) {
    console.log ("The larger integer is: " + num1);
    document.write("<br><br>The larger integer is: " + num1);
} else if (num2 > num1) {
    console.log ("The larger integer is: " + num2);
    document.write("<br><br>The larger integer is: " + num2);
} else {
    console.log ("Both integers are equal");
    document.write("<br><br>Both integers are equal");
}

// task 03

if (num1 > 0) {
    console.log ("The number " + num1 + " is positive.")
    document.write("<br><br>The number " + num1 + " is positive.")
} else if (num1 < 0) {
    console.log ("The number " + num1 + " is negative.")
    document.write("<br><br>The number " + num1 + " is negative.")
} else {
    console.log ("The number " + num1 + " is equal to zero.");
    document.write("<br><br>The number " + num1 + " is equal to zero.");
}

// task 04

var vowel = prompt("Enter a single letter:")
if (vowel.length === 1) {
    if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u" ||
        vowel === "A" || vowel === "E" || vowel === "I" || vowel === "O" || vowel === "U") {
        console.log ("The letter '" + vowel + "' is a vowel.");
        document.write("<br><br>The letter '" + vowel + "' is a vowel.");
    } else {
        console.log ("The letter '" + vowel + "' is not a vowel.");
        document.write("<br><br>The letter '" + vowel + "' is not a vowel.");
    }
} else {
    alert("Please enter a single letter only.");
}

// task 05

alert("Password Hint: where we learn JavaScript.");
var password1 = "SMIT"
var password2 = "smit"
var userInput = prompt("Enter your password:");
if (userInput === "") {
    console.log ("Please enter your password.");
    document.write("<br><br>Please enter your password.");
} else if (userInput === password1 || userInput === password2) {
    console.log ("Correct! The password you entered matches the original password.");
    document.write("<br><br>Correct! The password you entered matches the original password.");
} else {
    console.log ("Incorrect password. Please try again.");
    document.write("<br><br>Incorrect password. Please try again.");
}

// task 06

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
} else {
greeting = "Good evening";
}
console.log (greeting);
document.write("<br><br>" + greeting);

// task 07

var time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");
if (time >= 0 && time < 1200) {
    console.log ("Good morning!");
    document.write("<br><br>Good morning!");
} else if (time >= 1200 && time < 1700) {
    console.log ("Good afternoon!");
    document.write("<br><br>Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    console.log ("Good evening!");
    document.write("<br><br>Good evening!");
} else if (time >= 2100 && time < 2400) {
    console.log ("Good night!");
    document.write("<br><br>Good night!");
} else {
    console.log ("Invalid time. Please enter a valid time in 24-hour format.");
    document.write("<br><br>Invalid time. Please enter a valid time in 24-hour format.");
}

// the end