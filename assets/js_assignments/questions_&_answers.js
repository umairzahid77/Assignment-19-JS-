// Question 01:

var birthYear = +prompt("Enter your birth year:");
var d = new Date();
var currentYear = d.getFullYear();
var age = currentYear - birthYear;
console.log("Your age is: " + age + " years.");
document.write("Your age is: " + age + " years.");

// Question 02:

var num = []
var average = 0;
for (var i = 0; i < 10; i++) {
    num[i] = +prompt("Enter number " + (i + 1) + ":");
    // average = average + num[i]
    average += num[i]
}
num.sort()
// average = average / num.length
average /= num.length
console.log("Numbers entered: " + num);
console.log("Average of the numbers: " + average);
document.write("<br><br>Numbers entered: " + num);
document.write("<br>Average of the numbers: " + average);

// Question 03:

var divisibleBy3 = [] 
for (var i = 0; i < 10; i++) {
    if (num[i] % 3 === 0) {
        divisibleBy3.push(num[i]);
    }
}
divisibleBy3.sort()
console.log("Numbers divisible by 3: " + divisibleBy3);
document.write("<br>Numbers divisible by 3: " + divisibleBy3);

// Question 04:

var num2 = num[0]
for (var i = num2 - 1; i > 0; i--) {
    // num2 = num2 * i;
    num2 *= i;
}
console.log("The factorial of " + num[0] + " is: " + num2);
document.write("<br>The factorial of " + num[0] + " is: " + num2);

// Question 11:

console.log("Temperature in Celsius: " + num[2] + "°C");
document.write("<br>Temperature in Celsius: " + num[2] + "°C");
var temperature = (num[2] * 9/5) + 32;
console.log("Temperature in Fahrenheit: " + temperature + "°F");
document.write("<br>Temperature in Fahrenheit: " + temperature + "°F");

// Question 13:

var flag = false;
for(var i = 2; i < num[3]; i++) {
    var remainder = num[3] % i;
    if (remainder === 0) {
        flag = true
        break
    }
}
if(!flag) {
    console.log(num[3] + " is a prime number");
    document.write("<br>" + num[3] + " is a prime number");
} else {
    console.log(num[3] + " is not a prime number");
    document.write("<br>" + num[3] + " is not a prime number");
}

// Question 14:

console.log("The Largest Number is: " + num[num.length-1])
document.write("<br>The Largest Number is: " + num[num.length-1])

// Question 15:

var operator = prompt("Enter an operator (+, -, *, /):");
var operators = ["/", "*", "+", "-"]
for (var i = 0; i < operators.length; i++) {
    if (operator === operators[i]) {
        if (operators[i] === "+") {
            console.log("You have selected addition.");
            document.write("<br>You have selected addition.");
            console.log(num[4] + " " + operators[i] + " " + num[5] + " = " + (num[4] + num[5]));
            document.write("<br>" + num[4] + " " + operators[i] + " " + num[5] + " = " + (num[4] + num[5]));
        } else if (operators[i] === "-") {
            console.log("You have selected subtraction.");
            document.write("<br>You have selected subtraction.");
            console.log(num[4] + " " + operators[i] + " " + num[5] + " = " + (num[4] - num[5]));
            document.write("<br>" + num[4] + " " + operators[i] + " " + num[5] + " = " + (num[4] - num[5]));
        } else if (operators[i] === "*") {
            console.log("You have selected multiplication.");
            document.write("<br>You have selected multiplication.");
            console.log(num[4] + " " + operators[i] + " " + num[5] + " = " + (num[4] * num[5]));
            document.write("<br>" + num[4] + " " + operators[i] + " " + num[5] + " = " + (num[4] * num[5]));
        } else if (operators[i] === "/") {
            console.log("You have selected division.");
            document.write("<br>You have selected division.");
            console.log(num[4] + " " + operators[i] + " " + num[5] + " = " + (num[4] / num[5]));
            document.write("<br>" + num[4] + " " + operators[i] + " " + num[5] + " = " + (num[4] / num[5]));
        } else {
            console.log("Invalid operator.");
            document.write("<br>Invalid operator.");
        }
    }
}

// Question 16:

var above50 = [];
for (var i = 0; i < num.length; i++) {
    if (num[i] > 50) {
        above50.push(num[i]);
    }
}
above50.sort()
if (above50.length > 0) {
    console.log("Numbers above 50: " + above50);
    document.write("<br>Numbers above 50: " + above50);
} else {
    console.log("All values are under 50.");
    document.write("<br>All values are under 50.");
}

// Question 17:

var even=[]
var odd=[]
for (var i=0 ; i < 10 ; i++){
    if (num[i] % 2 === 0 ) {
        even.push(num[i])
    }
    else if (num[i] % 2 !== 0 ) {
        odd.push(num[i])
    }
    else{
        alert("Invalid Number")
    }    
}
even.sort();
odd.sort();
console.log("Even Numbers: " + even)
console.log("Odd Numbers: " + odd)
document.write("<br>Even Numbers: " + even);
document.write("<br>Odd Numbers: " + odd + "<br><br>");

// Question 08:

for (var i = 1; i <= 10; i++) {
    console.log(num[1] + " x " + i + " = " + (num[1] * i));
    document.write(num[1] + " x " + i + " = " + (num[1] * i) + "<br>");
}    

// Question 10:

document.write("<br><br>Products with Prices:<br>");
var products = ["apple", "banana", "orange", "mango", "grape"]
var prices = [1.2, 0.5, 0.8, 1.5, 2.0]
for (var i = 0; i < products.length ; i++) {
    console.log("Product: " + products[i] + ", Price: $" + prices[i]);
    document.write("Product: " + products[i] + ", Price: $" + prices[i] + "<br>");
}    

// Question 05:

var str = prompt("Enter a sentence");
console.log("String entered: " + str);
document.write("<br>String entered: " + str);
var reversed = "";
for(var i = str.length - 1; i >= 0; i--){
    reversed += str[i]
}
console.log("Reversed string: " + reversed);
document.write("<br>Reversed string: " + reversed);

// Question 06:

var specific_letter = prompt("Enter a specific letter to count its occurrences in the sentence");
var flag = 0;
for (var i = 0; i < str.length; i++) {
    if(str[i].toLowerCase() === specific_letter) {
        flag++
    }
}
console.log(specific_letter + " has occured " + flag + " times")
document.write("<br> '" + specific_letter + "' has occured " + flag + " times")

// Question 07:

var names = str.split(" ");
// for (var i = 0; i < 5; i++) {
//     names[i] = prompt("Enter name " + (i + 1) + ":");
// }
console.log("words in sentence: " + names);
document.write("<br>words in sentence: " + names);
names.sort()
console.log("After sorting: " + names);
document.write("<br>After sorting: " + names);

// Question 09:

var count = 0 ;
var vowels = ["a", "e", "i", "o", "u"]
for(var i=0 ; i<=str.length ; i++){
    var new_sentence = str.toLowerCase();
    for (var j = 0; j < vowels.length; j++) {
        if(new_sentence[i] === vowels[j]) {
            count++
        }
    }
}
console.log("Number of vowels :" + count);
document.write("<br>Number of vowels :" + count);

// Question 12:

var words = str.split(" ");
var palindrome = reversed.split(" ");
if(words[words.length - 1] === palindrome[0]) {
    console.log("Word " + words[words.length - 1] + " is palindrome")
    document.write("<br>Word " + words[words.length - 1] + " is palindrome")
} else {
    console.log("Word " + words[words.length - 1] + " is not palindrome")
    document.write("<br>Word " + words[words.length - 1] + " is not palindrome")
}

//The End