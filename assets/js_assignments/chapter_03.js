// task 1


function task01() {
    var age = +prompt("Enter your age")
    alert("Your age is " + age + " years.")
}

function showtask01() {
    var show01 = document.getElementById("task01")
    show01.innerText = `var age = +prompt("Enter your age")
    alert("Your age is " + age + " years.")`
}

// task 2

function task02() {
    var visit = +prompt("How many times you visited this site?")
    alert("You have visited this site " + visit + " times.")
}

function showtask02() {
    var show02 = document.getElementById("task02")
    show02.innerText = `var visit = +prompt("How many times you visited this site?")
    alert("You have visited this site " + visit + " times.")`
}

// task 3

function task03() {
    var age = +prompt("Enter your age")
    var birthyearyear = 2025 - age
    var t3 = document.getElementById("t3")
    t3.innerText = `Your birth Year is ${birthyearyear}. Data type of birthyear is ${typeof (birthyearyear)}`
}

function showtask03() {
    var show03 = document.getElementById("task03")
    show03.innerText = `var age = +prompt("Enter your age")
    var birthyearyear = 2025 - age
    var t3 = document.getElementById("t3")
    t3.innerText = "Your birth Year is " + birthyearyear + ". Data type of birthyear is " + typeof (birthyearyear)`
}

// task 4

function task04() {
    var store = "XYZ Clothing Store."
    var name = prompt("Enter your name")
    var title = prompt("Enter product name")
    var qty = +prompt("Enter Quantity")
    var t4 = document.getElementById("t4")
    t4.innerText = `${name} ordered ${qty} ${title} on ${store}`
}

function showtask04() {
    var show04 = document.getElementById("task04")
    show04.innerText = `var store = "XYZ Clothing Store."
    var name = prompt("Enter your name")
    var title = prompt("Enter product name")
    var qty = +prompt("Enter Quantity")
    var t4 = document.getElementById("t4")
    t4.innerText = name + ", ordered " + qty + " " + title + " on " + store`
}

// clear all

function clearall() {
    let t03 = document.getElementById("t3")
    t03.innerText = ``
    t03.innerHTML = ``
    let t04 = document.getElementById("t4")
    t04.innerText = ``
    t04.innerHTML = ``
    let show01 = document.getElementById("task01")
    show01.innerText = ``
    let show02 = document.getElementById("task02")
    show02.innerText = ``
    let show03 = document.getElementById("task03")
    show03.innerText = ``
    let show04 = document.getElementById("task04")
    show04.innerText = ``
}

// the end