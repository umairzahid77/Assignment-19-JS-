// task # 01

var firstname = prompt("Enter your first name: ")
var secondname = prompt("Enter your second name: ")
var name = firstname + " " + secondname
console.log("Welcome " + name);
document.write("Welcome " + name)

// task # 02

console.log("length of name is: " + name.length)
document.write("<br>length of name is: " + name.length)

// task # 03

var letter = prompt("Enter a letter to find its index in your name: ")
var letter = "a"
for (var i = 0 ; i < name.length ; i++) {
    if (name[i] === letter) {
        console.log("index of " + letter + " in " + name + " is " + i)
        document.write("<br>index of " + letter + " in " + name + " is " + i)
    }
}

// task # 04

var index = []
for (var i = 0 ; i < name.length ; i++) {
    if (name[i] === letter) {
        index.push(i)        
    }
}
console.log("The last index of " + letter + " is " + index[index.length - 1])
document.write("<br>The last index of " + letter + " is " + index[index.length - 1])

// task # 05

console.log("Character at 3rd index in " + name + " is " + name[3])
document.write("<br>Character at 3rd index in " + name + " is " + name[3])

// task # 06

console.log("Concat() of " + firstname + " & " + secondname + " is: " + (firstname + secondname))
document.write("<br>Concat() of " + firstname + " & " + secondname + " is: " + (firstname + secondname))

// task # 07

var city = prompt("Enter your city name which includes 'abad' (like hyderabad)")
var city = city.toUpperCase();
var city2 = "";
for (var i = 1 ; i < (city.length) ; i++) {
    city2 += city[i].toLowerCase();
}
city2  = city[0] + city2;
console.log("City entered: " + city2)
document.write("<br><br>City entered: " + city2)
city = city.toLowerCase();
if (city === "islamabad") {
    city = "Faisalabad"
} else {
    city = "Islamabad"
}
console.log("After replacement " + city)
document.write("<br>After replacement " + city)

// task # 08

var message = "Ali and Sami are best friends. They play cricket and football together."
console.log("Original message: " + message)
document.write("<br><br>Original message: " + message)
message = message.replace("and", "&");
console.log("After only 1st replacement: " + message)
document.write("<br>After only 1st replacement: " + message)
message = message.replace(/and/g, "&");
console.log("After all replacements: " + message)
document.write("<br>After all replacements: " + message)

// task # 09

var str = "472"
console.log("Value: " + str)
document.write("<br><br>Value: " + str)
console.log("type: " + typeof str)
document.write("<br>type: " + typeof str)
var num = parseInt(str)
console.log("Value: " + num)
document.write("<br>Value: " + num)
console.log("type: " + typeof num)
document.write("<br>type: " + typeof num)

// task # 10

firstname = firstname.toUpperCase();
console.log("firstname in uppercase: " + firstname)
document.write("<br><br>firstname in uppercase: " + firstname)

// task # 11

var firstname2 = "";
for (var i = 1 ; i < (firstname.length) ; i++) {
    firstname2 += firstname[i].toLowerCase();
}
firstname2  = firstname[0] + firstname2;
console.log("firstname in titlecase: " + firstname2)
document.write("<br>firstname in titlecase: " + firstname2)

// task # 12

num = 35.36;
console.log("Number: " + num)
document.write("<br><br>Number: " + num)
num = num.toString();
num = num.replace(".", "");
console.log("String: " + num)
document.write("<br>String: " + num)

// task # 13

var char = [",", ".", "@", "!"]
var found = false
var check = "";
for (var i = 0 ; i < (name.length - 1); i++) {
    check = name[i]
    for (var j = 0 ; j < char.length ; j++) {
        if (check === char[j]) {
            found = true;
            break;
        }
    }
}
if (found === true) {
    console.log("Please enter a valid username.")
    document.write("<br><br>Please enter a valid username.")
} else {
    console.log(name + " is a valid username.")
    document.write("<br><br>" + name + " is a valid username.")
}

// task # 14

var search = prompt("Enter an item to search in the bakery items: ")
var items = ["cake", "apple pie", "cookie", "chips", "patties"]
search = search.toLowerCase();
if (search.length === 0) {
    console.log("Please enter an item to search.")
    document.write("<br><br>Please enter an item to search.")
} else {for (var i = 0 ; i < items.length ; i++) {
    if (search === items[i]) {
        found = true;
        break;
    }
}
if (found === true) {
    console.log(search + " is available at index " + i + " in our bakery.")
    document.write("<br><br>" + search + " is available at index " + i + " in our bakery.")
} else {
    console.log("We are sorry. " + search + " is not available in our bakery.")
    document.write("<br><br>We are sorry. " + search + " is not available in our bakery.")
}
}

// task # 15

var password = prompt("Enter your password: ")
var capLetter = false;
var smallLetter = false;
var number = false;
var charCode
for (var i = 0; i < password.length; i++) {
    charCode = password[i].charCodeAt(0);
    if (charCode >= 48 && charCode <= 57) {
        number = true;
    }
    if (charCode >= 65 && charCode <= 90) {
        capLetter = true;
    }
    if (charCode >= 97 && charCode <= 122) {
        smallLetter = true;
    }            
}
if (password.length < 6) {
    console.log("Password must be at least 6 characters long.")
    document.write("<br><br>Password must be at least 6 characters long.<br>")
} else if (password[0].charCodeAt(0) >= 48 && password[0].charCodeAt(0) <= 57) {
    console.log("Password cannot start with a number.")
    document.write("<br><br>Password cannot start with a number.<br>")
} else if (capLetter === true && smallLetter === true && number === true) {
    console.log("Password is valid.")
    document.write("<br><br>Password is valid.<br>")
} else {
    console.log("Password must contain at least one uppercase letter, one lowercase letter, and one number.")
    document.write("<br><br>Password must contain at least one uppercase letter, one lowercase letter, and one number.<br>")
}

// task # 16

for (var i = 0 ; i < name.length ; i++) {
    console.log(name[i])
    document.write("<br>" + name[i])
}

// task # 17

console.log("Last character of name: " + name[name.length - 1])
document.write("<br><br>Last character of " + name + ": " + name[name.length - 1])

// task # 18

var text = "The quick brown fox jumps over the lazy dog."
console.log("Text: " + text);
document.write("<br><br>Text: " + text);
var count = 0;
text = text.toLowerCase();
text = text.split(" ");
var word = "the";
for (var i = 0 ; i < text.length ; i++) {
    if (text[i] === word) {
        count++;
    }
}
console.log("There are " + count + " occurrences of the word '" + word + "' in the text.");
document.write("<br>There are " + count + " occurrences of the word '" + word + "' in the text.");

// the end