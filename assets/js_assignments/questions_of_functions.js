// task 01

function task01() {
    let array = []
    let sum = 0
    for (let i = 0; i < 5; i++) {
        array.push(+prompt(`Enter number ${i + 1}`))
    }
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    let t01 = document.getElementById("t01")
    t01.innerText = `Array entered: [${array}]
    Sum of array: ${sum}`
}

function showtask01() {
    let show01 = document.getElementById("task01")
    show01.innerText = `let array = []
    let sum = 0
    for (let i = 0; i < 5; i++) {
        array.push(+prompt(Enter number $ {i + 1}))
    }
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    let t01 = document.getElementById("t01")
    t01.innerText = Array entered: [$ {array}]
    Sum of array: $ {sum}`
}

// task 02

function task02() {
    let str = prompt("Enter your string")
    let t02 = document.getElementById("t02")
    t02.innerText = ``
    for (let i = (str.length - 1); i >= 0; i--) {
        t02.innerText += `${str[i]}`
    }
}

function showtask02() {
    let show02 = document.getElementById("task02")
    show02.innerText = `let str = prompt("Enter your string")
    let t02 = document.getElementById("t02")
    t02.innerText = ``
    for (let i = (str.length - 1); i >= 0; i--) {
        t02.innerText += $ {str[i]}
    }`
}

// task 03

function task03() {
    let array
    let big = 0
    for (let i = 0; i < 5; i++) {
        array.push(+prompt(`Enter number ${i + 1}`))
    }
    for (let i = 0; i < array.length; i++) {
        if (big < array[i]) {
            big = array[i]
        }
    }
    let t03 = document.getElementById("t03")
    t03.innerText = `Array entered: [${array}
    Largest in array: ${big}`
}

function showtask03() {
    let show03 = document.getElementById("task03")
    show03.innerText = ``
}

// task 04

function task04() {
    let t04 = document.getElementById("t04")
    t04.innerText = ``
    t04.innerHTML = ``
}

function showtask04() {
    let show04 = document.getElementById("task04")
    show04.innerText = ``
}

// task 05

function task05() {
    let t05 = document.getElementById("t05")
    t05.innerText = ``
    t05.innerHTML = ``
}

function showtask05() {
    let show05 = document.getElementById("task05")
    show05.innerText = ``
}

// task 06

function task06() {
    let t06 = document.getElementById("t06")
    t06.innerText = ``
    t06.innerHTML = ``
}

function showtask06() {
    let show06 = document.getElementById("task06")
    show06.innerText = ``
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
}

// the end