// task 01

let array1 = [];
let array2 = [];
let array3 = [];
let array = [array1, array2, array3]

function showtask01() {
    let show01 = document.getElementById("task01")
    show01.innerText = `let array1 = [];
    let array2 = [];
    let array3 = [];
    let array = [array1, array2, array3]`
}

// task 02

array1 = [0, 1, 2, 3];
array2 = [1, 0, 1, 2];
array3 = [2, 1, 0, 1];
array = [array1, array2, array3]

function showtask02() {
    let show02 = document.getElementById("task02")
    show02.innerText = `array1 = [0, 1, 2, 3];
    array2 = [1, 0, 1, 2];
    array3 = [2, 1, 0, 1];
    array = [array1, array2, array3]`
}

// task 03

function task03() {
    let t03 = document.getElementById("t03")
    let count = 1;
    for (let i = 0; i < 10; i++) {
        t03.innerText += `${count}\n`
        count++
    }
}

function showtask03() {
    let show03 = document.getElementById("task03")
    show03.innerText = `let t03 = document.getElementById("t03")
    let count = 1;
    for (let i = 0; i < 10; i++) {
        t03.inneText += $ {count}\ n
        count++
    }`
}

// task 04


function task04() {
    let t04 = document.getElementById("t04")
    let table = Number(prompt("Enter a number to show its multiplication table"))
    let length = Number(prompt("Enter length of multiplication table"))
    t04.innerText = `Multiplication table of ${table} till ${length}:`
    for (let i = 1; i <= length; i++) {
        t04.innerText += `\n${table} x ${i} = ${(table * i)}`
    }
}

function showtask04() {
    let show04 = document.getElementById("task04")
    show04.innerText = `    let t04 = document.getElementById("t04")
    let table = Number(prompt("Enter a number to show its multiplication table"))
    let length = Number(prompt("Enter length of multiplication table"))
    t04.innerText = Multiplication table of $ {table} till $ {length}:
    for (let i = 1; i <= length; i++) {
        t04.innerText += \ n$ {table} x $ {i} = $ {(table * i)}
    }`
}

// task 05

function task05() {
    let t05 = document.getElementById("t05")
    let fruits = ["apple", "banana", "mango", "orange", "strawberry"]
    for (let i = 0; i < fruits.length; i++) {
        t05.innerText += `${fruits[i]}\n`
    }
    for (let i = 0; i < 5; i++) {
        t05.innerText += `Element at index ${i} is ${fruits[i]}\n`
    }    
}

function showtask05() {
    let show05 = document.getElementById("task05")
    show05.innerText = `let t05 = document.getElementById("t05")
    let fruits = ["apple", "banana", "mango", "orange", "strawberry"]
    for (let i = 0; i < fruits.length; i++) {
        t05.innerText += $ {fruits[i]}\ n
    }
    for (let i = 0; i < 5; i++) {
        t05.innerText += Element at index $ {i} is $ {fruits[i]}\ n
    }`
}

// task 06

function task06() {
    let t06 = document.getElementById("t06")
    t06.innerText = `Counting:\n`
    for (let i = 1; i <= 15; i++) {
        t06.innerText += ` ${i}, `
    }   
    t06.innerText += `\nReverse Counting:\n`
    for (let i = 10; i >= 1; i--) {
        t06.innerText += ` ${i}, `
    }
    t06.innerText += `\nEven Numbers:\n`
    for (let i = 0; i <= 20; i += 2) {
        t06.innerText += ` ${i}, `
    }
    t06.innerText += `\nOdd Numbers:\n`
    for (let i = 1; i <= 20; i += 2) {
        t06.innerText += ` ${i}, `
    }
    t06.innerText += `\nK Series:\n`
    for (let i = 2; i <= 20; i += 2) {
        t06.innerText += ` ${i}K, `
    }
}

function showtask06() {
    let show06 = document.getElementById("task06")
    show06.innerText = `let t06 = document.getElementById("t06")
    t06.innerText = Counting:\ n
    for (let i = 1; i <= 15; i++) {
        t06.innerText +=  $ {i}, 
    }   
    t06.innerText += \ nReverse Counting:\ n
    for (let i = 10; i >= 1; i--) {
        t06.innerText +=  $ {i}, 
    }
    t06.innerText += \ nEven Numbers:\ n
    for (let i = 0; i <= 20; i += 2) {
        t06.innerText +=  $ {i}, 
    }
    t06.innerText += \ nOdd Numbers:\ n
    for (let i = 1; i <= 20; i += 2) {
        t06.innerText +=  $ {i}, 
    }
    t06.innerText += \ nK Series:\ n
    for (let i = 2; i <= 20; i += 2) {
        t06.innerText +=  $ {i}K, 
    }`
}

// task 07

function task07() {
    let t07 = document.getElementById("t07")
    t07.innerText = ``
    let items = ["cake", "apple pie", "cookie", "chips", "patties"];
    let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
    userInput = userInput.toLowerCase();
    if (items.indexOf(userInput) !== -1) {
        t07.innerText = `${userInput} is available at index ${items.indexOf(userInput)} in our bakery`
    } else {
        t07.innerText = `We are sorry. ${userInput} is not available in our bakery`
    }
}

function showtask07() {
    let show07 = document.getElementById("task07")
    show07.innerText = `let t07 = document.getElementById("t07")
    t07.innerText = ``
    let items = ["cake", "apple pie", "cookie", "chips", "patties"];
    let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
    userInput = userInput.toLowerCase();
    if (items.indexOf(userInput) !== -1) {
        t07.innerText = $ {userInput} is available at index $ {items.indexOf(userInput)} in our bakery
    } else {
        t07.innerText = We are sorry. $ {userInput} is not available in our bakery
    }`
}

// task 08


function task08() {
    let array8 = [24, 53, 78, 91, 12];
    let t08 = document.getElementById("t08")
    t08.innerText = `Array items: ${array8}`
    array8.sort()
    t08.innerText += `\nThe largest number is ${array8[array8.length - 1]}`
}

function showtask08() {
    let show08 = document.getElementById("task08")
    show08.innerText = `let array8 = [24, 53, 78, 91, 12];
    let t08 = document.getElementById("t08")
    t08.innerText = Array items: $ {array8}
    array8.sort()
    t08.innerText += \ nThe largest number is $ {array8[array8.length - 1]}`
}

// task 09

function task09() {
    let array8 = [24, 53, 78, 91, 12];
    let t09 = document.getElementById("t09")
    t09.innerText = `Array items: ${array8}`
    array8.sort()
    t09.innerText += `\nThe Smallest number is ${array8[0]}`
}

function showtask09() {
    let show09 = document.getElementById("task09")
    show09.innerText = `let array8 = [24, 53, 78, 91, 12];
    let t09 = document.getElementById("t09")
    t09.innerText = Array items: $ {array8}
    array8.sort()
    t09.innerText += \ nThe Smallest number is $ {array8[0]}`
}

// task 10

function task10() {
    let t10 = document.getElementById("t10")
    t10.innerText = `Numbers Divisible by 5 from 1 to 100\n`
    for (let i = 1; i <= 20; i++) {
        t10.innerText += ` ${i * 5}, `
    }
}

function showtask10() {
    let show10 = document.getElementById("task10")
    show10.innerText = `let t10 = document.getElementById("t10")
    t10.innerText = Numbers Divisible by 5 from 1 to 100\ n
    for (let i = 1; i <= 20; i++) {
        t10.innerText +=  $ {i * 5}, 
    }`
}

// clear all

function clearall() {
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
}

// the end