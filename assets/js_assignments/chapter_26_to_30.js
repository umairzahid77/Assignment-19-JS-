// task 01

function task01() {
    let t01 = document.getElementById("t01")
    let posnum = +prompt("Enter a positive integer in decimal:");
    let round = Math.round(posnum)
    let floor = Math.floor(posnum);
    let ceil = Math.ceil(posnum);
    t01.innerText = `You entered: ${posnum}
    Roundoff value: ${round}
    Floor value: ${floor}
    Ceil value: ${ceil}`
}

function showtask01() {
    let show01 = document.getElementById("task01")
    show01.innerText = `let t01 = document.getElementById("t01")
    let posnum = +prompt("Enter a positive integer in decimal:");
    let round = Math.round(posnum)
    let floor = Math.floor(posnum);
    let ceil = Math.ceil(posnum);
    t01.innerText = You entered: $ {posnum}
    Roundoff value: $ {round}
    Floor value: $ {floor}
    Ceil value: $ {ceil}`
}

// task 02

function task02() {
    let t02 = document.getElementById("t02")
    let negnum = +prompt("Enter a negative integer in decimal:");
    let round = Math.round(negnum)
    let floor = Math.floor(negnum);
    let ceil = Math.ceil(negnum);
    t02.innerText = `You entered: ${negnum}
    Roundoff value: ${round}
    floor value: ${floor}
    ceil value: ${ceil}`
}

function showtask02() {
    let show02 = document.getElementById("task02")
    show02.innerText = `let t02 = document.getElementById("t02")
    let negnum = +prompt("Enter a negative integer in decimal:");
    let round = Math.round(negnum)
    let floor = Math.floor(negnum);
    let ceil = Math.ceil(negnum);
    t02.innerText = You entered: $ {negnum}
    Roundoff value: $ {round}
    floor value: $ {floor}
    ceil value: $ {ceil}`
}

// task 03

function task03() {
    let num = +prompt("Enter a number")
    let absolute = Math.abs(num);
    let t03 = document.getElementById("t03")
    t03.innerText = `Absolute value of ${num} is: ${absolute}`
}

function showtask03() {
    let show03 = document.getElementById("task03")
    show03.innerText = `let num = +prompt("Enter a number")
    let absolute = Math.abs(num);
    let t03 = document.getElementById("t03")
    t03.innerText = Absolute value of $ {num} is: $ {absolute}`
}

// task 04

function task04() {
    let random = Math.floor((Math.random() * 6) + 1)
    let t04 = document.getElementById("t04")
    t04.innerText = `Random dise value: ${random}`
}

function showtask04() {
    let show04 = document.getElementById("task04")
    show04.innerText = `let random = Math.floor((Math.random() * 6) + 1)
    let t04 = document.getElementById("t04")
    t04.innerText = Random dise value: $ {random}`
}

// task 05

function task05() {
    let t05 = document.getElementById("t05")
    let random = Math.floor((Math.random() * 2) + 1)
    if (random === 2) {
        t05.innerText = `Ramdom Coin value: Heads`
    } else if (random === 1) {
        t05.innerText = `Ramdom Coin value: Tails`
    }
}

function showtask05() {
    let show05 = document.getElementById("task05")
    show05.innerText = `let t05 = document.getElementById("t05")
    let random = Math.floor((Math.random() * 2) + 1)
    if (random === 2) {
        t05.innerText = Ramdom Coin value: Heads
    } else if (random === 1) {
        t05.innerText = Ramdom Coin value: Tails
    }`
}

// task 06

function task06() {
    let t06 = document.getElementById("t06")
    let random = Math.floor((Math.random() * 100) + 1)
    t06.innerText = `Random number between 1 to 100: ${random}`
}

function showtask06() {
    let show06 = document.getElementById("task06")
    show06.innerText = `let t06 = document.getElementById("t06")
    let random = Math.floor((Math.random() * 100) + 1)
    t06.innerText = Random number between 1 to 100: $ {random}`
}

// task 07

function task07() {
    let t07 = document.getElementById("t07")
    let weight = prompt("Enter your weight in kilograms");
    let weight2 = []
    for (let i = 0; i < weight.length; i++) {
        if (weight[i].charCodeAt() === 46 || (weight[i].charCodeAt() >= 48 && weight[i].charCodeAt() <= 57)) {
            weight2.push(weight[i])
        }
    }
    weight2 = weight2.join("");
    t07.innerText = `Your weight is: ${weight2} kg`
}

function showtask07() {
    let show07 = document.getElementById("task07")
    show07.innerText = `let t07 = document.getElementById("t07")
    let weight = prompt("Enter your weight in kilograms");
    let weight2 = []
    for (let i = 0; i < weight.length; i++) {
        if (weight[i].charCodeAt() === 46 || (weight[i].charCodeAt() >= 48 && weight[i].charCodeAt() <= 57)) {
            weight2.push(weight[i])
        }
    }
    weight2 = weight2.join("");
    t07.innerText = Your weight is: $ {weight2} kg`
}

// task 08

random = Math.floor((Math.random() * 10) + 1)
let userInput = +prompt("Enter a number between 1 to 10");
if (userInput === random) {
    console.log("Congratulations! You guessed the number: " + random);
} else {
    console.log("Try again! The number was: " + random);
}

function task08() {
    let t08 = document.getElementById("t08")
    t08.innerText = ``
    t08.innerHTML = ``
}

function showtask08() {
    let show08 = document.getElementById("task08")
    show08.innerText = ``
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
}

// the end