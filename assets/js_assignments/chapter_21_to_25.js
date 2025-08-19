// task # 07

// let city = prompt("Enter your city name which includes 'abad' (like hyderabad)")
let city = city.toUpperCase();
let city2 = "";
for (let i = 1; i < (city.length); i++) {
    city2 += city[i].toLowerCase();
}
city2 = city[0] + city2;
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

let message = "Ali and Sami are best friends. They play cricket and football together."
console.log("Original message: " + message)
document.write("<br><br>Original message: " + message)
message = message.replace("and", "&");
console.log("After only 1st replacement: " + message)
document.write("<br>After only 1st replacement: " + message)
message = message.replace(/and/g, "&");
console.log("After all replacements: " + message)
document.write("<br>After all replacements: " + message)

// task # 09

let str = "472"
console.log("Value: " + str)
document.write("<br><br>Value: " + str)
console.log("type: " + typeof str)
document.write("<br>type: " + typeof str)
let num = parseInt(str)
console.log("Value: " + num)
document.write("<br>Value: " + num)
console.log("type: " + typeof num)
document.write("<br>type: " + typeof num)

// task # 10

firstname = firstname.toUpperCase();
console.log("firstname in uppercase: " + firstname)
document.write("<br><br>firstname in uppercase: " + firstname)

// task # 11

let firstname2 = "";
for (let i = 1; i < (firstname.length); i++) {
    firstname2 += firstname[i].toLowerCase();
}
firstname2 = firstname[0] + firstname2;
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

let char = [",", ".", "@", "!"]
let found = false
let check = "";
for (let i = 0; i < (name.length - 1); i++) {
    check = name[i]
    for (let j = 0; j < char.length; j++) {
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

let search = prompt("Enter an item to search in the bakery items: ")
let items = ["cake", "apple pie", "cookie", "chips", "patties"]
search = search.toLowerCase();
if (search.length === 0) {
    console.log("Please enter an item to search.")
    document.write("<br><br>Please enter an item to search.")
} else {
    for (let i = 0; i < items.length; i++) {
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

let password = prompt("Enter your password: ")
let capLetter = false;
let smallLetter = false;
let number = false;
let charCode
for (let i = 0; i < password.length; i++) {
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

for (let i = 0; i < name.length; i++) {
    console.log(name[i])
    document.write("<br>" + name[i])
}

// task # 17

console.log("Last character of name: " + name[name.length - 1])
document.write("<br><br>Last character of " + name + ": " + name[name.length - 1])

// task # 18

let text = "The quick brown fox jumps over the lazy dog."
console.log("Text: " + text);
document.write("<br><br>Text: " + text);
let count = 0;
text = text.toLowerCase();
text = text.split(" ");
let word = "the";
for (let i = 0; i < text.length; i++) {
    if (text[i] === word) {
        count++;
    }
}
console.log("There are " + count + " occurrences of the word '" + word + "' in the text.");
document.write("<br>There are " + count + " occurrences of the word '" + word + "' in the text.");

// task 01

function task01() {
    let firstname = prompt("Enter your first name: ")
    let secondname = prompt("Enter your second name: ")
    let name = firstname + " " + secondname
    let t01 = document.getElementById("t01")
    t01.innerText = `Welcome ${name}`
}

function showtask01() {
    let show01 = document.getElementById("task01")
    show01.innerText = `let firstname = prompt("Enter your first name: ")
    let secondname = prompt("Enter your second name: ")
    let name = firstname + " " + secondname
    let t01 = document.getElementById("t01")
    t01.innerText = Welcome $ {name}`
}

// task 02

function task02() {
    let mobile = prompt("Enter your favroit mobile phone:")
    let t02 = document.getElementById("t02")
    t02.innerText = `length of ${mobile} is ${mobile.length}`
}

function showtask02() {
    let show02 = document.getElementById("task02")
    show02.innerText = `let mobile = prompt("Enter your favroit mobile phone:")
    let t02 = document.getElementById("t02")
    t02.innerText = length of $ {mobile} is $ {mobile.length}`
}

// task 03

function task03() {
    let country = "Pakistani"
    let t03 = document.getElementById("t03")
    let letter = "n"
    for (let i = 0; i < country.length; i++) {
        if (country[i] === letter) {
            t03.innerText = `index of ${letter} in ${country} is ${i}`
        }
    }
}

function showtask03() {
    let show03 = document.getElementById("task03")
    show03.innerText = `let t03 = document.getElementById("t03")
    let country = "Pakistani"
    let letter = "n"
    for (let i = 0; i < name.length; i++) {
        if (country[i] === letter) {
            t03.innerHTML = index of $ {letter} in $ {country} is $ {i}
        }
    }`
}

// task 04

function task04() {
    let t04 = document.getElementById("t04")
    let word = "Hello World"
    let letter = "l"
    let index = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            index.push(i)
        }
    }
    t04.innerText = `The last index of ${letter} is ${index[index.length - 1]}`
}

function showtask04() {
    let show04 = document.getElementById("task04")
    show04.innerText = `let t04 = document.getElementById("t04")
    let word = "Hello World"
    let letter = "l"
    let index = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            index.push(i)
        }
    }
    t04.innerText = The last index of $ {letter} is $ {index[index.length - 1]}`
}

// task 05

function task05() {
    let country = "Pakistani"
    let t05 = document.getElementById("t05")
    t05.innerText = `Character at 3rd index in ${country} is ${country[3]}`
}

function showtask05() {
    let show05 = document.getElementById("task05")
    show05.innerText = `let country = "Pakistani"
    let t05 = document.getElementById("t05")
    t05.innerText = Character at 3rd index in $ {country} is $ {country[3]}`
}

// task 06

console.log("Concat() of " + firstname + " & " + secondname + " is: " + (firstname + secondname))
document.write("<br>Concat() of " + firstname + " & " + secondname + " is: " + (firstname + secondname))

function task06() {
    let t06 = document.getElementById("t06")
    t06.innerHTML = ``
}

function showtask06() {
    let show06 = document.getElementById("task06")
    show06.innerText = ``
}

// task 07

function task07() {
    let t07 = document.getElementById("t07")
    t07.innerHTML = ``
}

function showtask07() {
    let show07 = document.getElementById("task07")
    show07.innerText = ``
}

// task 08

function task08() {
    let t08 = document.getElementById("t08")
    t08.innerHTML = ``
}

function showtask08() {
    let show08 = document.getElementById("task08")
    show08.innerText = ``
}

// task 09

function task09() {
    let t09 = document.getElementById("t09")
    t09.innerHTML = ``
}

function showtask09() {
    let show09 = document.getElementById("task09")
    show09.innerText = ``
}

// task 10

function task10() {
    let t10 = document.getElementById("t10")
    t10.innerHTML = ``
}

function showtask10() {
    let show10 = document.getElementById("task10")
    show10.innerText = ``
}

// task 11

function task11() {
    let t11 = document.getElementById("t11")
    t11.innerHTML = ``
}

function showtask11() {
    let show11 = document.getElementById("task11")
    show11.innerText = ``
}

// task 12

function task12() {
    let t12 = document.getElementById("t12")
    t12.innerHTML = ``
}

function showtask12() {
    let show12 = document.getElementById("task12")
    show12.innerText = ``
}

// task 13

function task13() {
    let t13 = document.getElementById("t13")
    t13.innerHTML = ``
}

function showtask13() {
    let show13 = document.getElementById("task13")
    show13.innerText = ``
}

// task 14

function task14() {
    let t14 = document.getElementById("t14")
    t14.innerHTML = ``
}

function showtask14() {
    let show14 = document.getElementById("task14")
    show14.innerText = ``
}

// task 15

function task15() {
    let t15 = document.getElementById("t15")
    t15.innerHTML = ``
}

function showtask15() {
    let show15 = document.getElementById("task15")
    show15.innerText = ``
}

// task 16

function task16() {
    let t16 = document.getElementById("t16")
    t16.innerHTML = ``
}

function showtask16() {
    let show16 = document.getElementById("task16")
    show16.innerText = ``
}

// task 17

function task17() {
    let t17 = document.getElementById("t17")
    t17.innerHTML = ``
}

function showtask17() {
    let show17 = document.getElementById("task17")
    show17.innerText = ``
}

// task 18

function task18() {
    let t18 = document.getElementById("t18")
    t18.innerHTML = ``
}

function showtask18() {
    let show18 = document.getElementById("task18")
    show18.innerText = ``
}

// task 19

function task19() {
    let t19 = document.getElementById("t19")
    t19.innerHTML = ``
}

function showtask19() {
    let show19 = document.getElementById("task19")
    show19.innerText = ``
}

// task 20

function task20() {
    let t20 = document.getElementById("t20")
    t20.innerHTML = ``
}

function showtask20() {
    let show20 = document.getElementById("task20")
    show20.innerText = ``
}

// clear all

function clearall() {
    let t01 = document.getElementById("t01")
    t01.innerText = ``
    t01.innerHTML = ``
    let t02 = document.getElementById("t02")
    t02.innerText = ``
    t02.innerHTML = ``
    let t03 = document.getElementById("t03")
    t03.innerText = ``
    t03.innerHTML = ``
    let t04 = document.getElementById("t04")
    t04.innerText = ``
    t04.innerHTML = ``
    let t05 = document.getElementById("t05")
    t05.innerText = ``
    t05.innerHTML = ``
    let t06 = document.getElementById("t06")
    t06.innerText = ``
    t06.innerHTML = ``
    let t07 = document.getElementById("t07")
    t07.innerText = ``
    t07.innerHTML = ``
    let t08 = document.getElementById("t08")
    t08.innerText = ``
    t08.innerHTML = ``
    let t09 = document.getElementById("t09")
    t09.innerText = ``
    t09.innerHTML = ``
    let t10 = document.getElementById("t10")
    t10.innerText = ``
    t10.innerHTML = ``
    let t11 = document.getElementById("t11")
    t11.innerText = ``
    t11.innerHTML = ``
    let t12 = document.getElementById("t12")
    t12.innerText = ``
    t12.innerHTML = ``
    let t13 = document.getElementById("t13")
    t13.innerText = ``
    t13.innerHTML = ``
    let t14 = document.getElementById("t14")
    t14.innerText = ``
    t14.innerHTML = ``
    let t15 = document.getElementById("t15")
    t15.innerText = ``
    t15.innerHTML = ``
    let t16 = document.getElementById("t16")
    t16.innerText = ``
    t16.innerHTML = ``
    let t17 = document.getElementById("t17")
    t17.innerText = ``
    t17.innerHTML = ``
    let t18 = document.getElementById("t18")
    t18.innerText = ``
    t18.innerHTML = ``
    let show01 = document.getElementById("task01")
    show01.innerText = ``
    let show02 = document.getElementById("task02")
    show02.innerText = ``
    let show03 = document.getElementById("task03")
    show03.innerText = ``
    let show04 = document.getElementById("task04")
    show04.innerText = ``
    let show05 = document.getElementById("task05")
    show05.innerText = ``
    let show06 = document.getElementById("task06")
    show06.innerText = ``
    let show07 = document.getElementById("task07")
    show07.innerText = ``
    let show08 = document.getElementById("task08")
    show08.innerText = ``
    let show09 = document.getElementById("task09")
    show09.innerText = ``
    let show10 = document.getElementById("task10")
    show10.innerText = ``
    let show11 = document.getElementById("task11")
    show11.innerText = ``
    let show12 = document.getElementById("task12")
    show12.innerText = ``
    let show13 = document.getElementById("task13")
    show13.innerText = ``
    let show14 = document.getElementById("task14")
    show14.innerText = ``
    let show15 = document.getElementById("task15")
    show15.innerText = ``
    let show16 = document.getElementById("task16")
    show16.innerText = ``
    let show17 = document.getElementById("task17")
    show17.innerText = ``
    let show18 = document.getElementById("task18")
    show18.innerText = ``
}

// the end