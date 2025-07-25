// task 1

function task01() {
    var num1 = +prompt("Enter first number for addition:")
    var num2 = +prompt("Enter second number for addition:")
    var num3 = num1 + num2
    var t1 = document.getElementById("t1")
    t1.innerText = `Sum of ${num1} and ${num2} is ${num3}`
}

// task 2

function task02() {
    var t2 = document.getElementById("t2")
    t2.innerText = `Legal variable names:
    num1, name, pass, e_mail, amount$
    
    Illegal variable names
    1num, .name, -pass, my e_mail, =amount`
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

// show code

function showtask01() {
    var show01 = document.getElementById("task01")
    show01.innerText = `var num1 = +prompt("Enter first number for addition:")
    var num2 = +prompt("Enter second number for addition:")
    var num3 = num1 + num2
    var t1 = document.getElementById("t1")
    t1.innerText = "Sum of " + num1 + " and " + num2 + " is " + num3 + "."`
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
}

function showtask02() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = `var t2 = document.getElementById("t2")
    t2.innerText = 'Legal variable names:
    num1, name, pass, e_mail, amount$
    
    Illegal variable names
    1num, .name, -pass, my e_mail, =amount'`
    var show03 = document.getElementById("task03")
    show03.innerText = ``
}

function showtask03() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = `var t3 = document.getElementById("t3")
    t3.innerText = "Rules for naming JS variables
    Variable names can only contain letters, numbers, dollarsign and underscore. For example $my_1stVariable
    Variable must begin with a letter, dollarsign or underscore. For example $name, _name or name
    Variable names are case sensitive. For example myVariable and myvariable, both are different variables
    Variable names should not be JS keywords. For example var, let, const, function, etc."`
}

// the end