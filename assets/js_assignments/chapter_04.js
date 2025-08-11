// task 1

function task01() {
    var num1 = +prompt("Enter first number for addition:")
    var num2 = +prompt("Enter second number for addition:")
    var num3 = num1 + num2
    var t1 = document.getElementById("t1")
    t1.innerText = `Sum of ${num1} and ${num2} is ${num3}`
}

function showtask01() {
    var show01 = document.getElementById("task01")
    show01.innerText = `var num1 = +prompt("Enter first number for addition:")
    var num2 = +prompt("Enter second number for addition:")
    var num3 = num1 + num2
    var t1 = document.getElementById("t1")
    t1.innerText = "Sum of " + num1 + " and " + num2 + " is " + num3 + "."`
}

// task 2

function task02() {
    var t2 = document.getElementById("t2")
    t2.innerText = `Legal variable names:
    num1, name, pass, e_mail, amount$
    
    Illegal variable names
    1num, .name, -pass, my e_mail, =amount`
}

function showtask02() {
    var show02 = document.getElementById("task02")
    show02.innerText = `var t2 = document.getElementById("t2")
    t2.innerText = 'Legal variable names:
    num1, name, pass, e_mail, amount$
    
    Illegal variable names
    1num, .name, -pass, my e_mail, =amount'`
}

// task 3

function task03() {
    var t3 = document.getElementById("t3")
    t3.innerText = `Rules for naming JS variables
    Variable names can only contain letters, numbers, dollarsign and underscore. For example $my_1stVariable
    Variable must begin with a letter, dollarsign or underscore. For example $name, _name or name
    Variable names are case sensitive. For example myVariable and myvariable, both are different variables
    Variable names should not be JS keywords. For example var, let, const, function, etc.`
}

function showtask03() {
    var show03 = document.getElementById("task03")
    show03.innerText = `var t3 = document.getElementById("t3")
    t3.innerText = "Rules for naming JS variables
    Variable names can only contain letters, numbers, dollarsign and underscore. For example $my_1stVariable
    Variable must begin with a letter, dollarsign or underscore. For example $name, _name or name
    Variable names are case sensitive. For example myVariable and myvariable, both are different variables
    Variable names should not be JS keywords. For example var, let, const, function, etc."`
}

// clear all

function clearall() {
    let t01 = document.getElementById("t1")
    t01.innerText = ``
    t01.innerHTML = ``
    let t02 = document.getElementById("t2")
    t02.innerText = ``
    t02.innerHTML = ``
    let t03 = document.getElementById("t3")
    t03.innerText = ``
    t03.innerHTML = ``
    let show01 = document.getElementById("task01")
    show01.innerText = ``
    let show02 = document.getElementById("task02")
    show02.innerText = ``
    let show03 = document.getElementById("task03")
    show03.innerText = ``
}

// the end