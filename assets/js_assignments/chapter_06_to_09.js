// task 01

function task01() {
    let num1 = +prompt("Enter your number: ")
    let t1 = document.getElementById("t1")
    t1.innerText = `Result:
    The Value of "a" is: ${num1}
    ............................
    The Value of "++a" is: ${++num1}
    Now the Value of "a" is: ${num1}
    The Value of "a++" is: ${num1++}
    Now the Value of "a" is: ${num1}
    The Value of "--a" is: ${--num1}
    Now the Value of "a" is: ${num1}
    The Value of "a--" is: ${num1--}
    Now the Value of "a" is: ${num1}`
}

// task 02

function task02() {
    let a = 2
    let b = 1
    let t2 = document.getElementById("t2")
    t2.innerText = `
    The Value of "a" is: ${a}
    The Value of "b" is: ${b}
    Result:
    "--a" = ${--a}
    "--b" = ${--b}
    "++b" = ${++b}
    "b--" = ${b--}
    "--a" - "--b"  = ${(--a) - (--b)}
    "--a" - "--b" + "++b"  = ${(((--a) - (--b)) + (++b))}
    "--a" - "--b" + "++b" + "b--"  = ${(((--a) - (--b)) + ((++b) + (b--)))}`
}

// task 03

function task03() {
    let name = prompt("Enter your name:")
    let t3 = document.getElementById("t3")
    t3.innerText = `Welcome ${name}! Have a nice day!`
}

// task 04

function task04() {
    let num2 = +prompt("Enter a number for multiplication table:")
    if (num2 === 0 || num2 === "") {
        num2 = 5
    }
    let num3 = 1
    let t4 = document.getElementById("t4")
    t4.innerText = `Multiplication Table of ${num2}
    ${num2} x ${num3++} = ${(num2 * num3)}
    ${num2} x ${num3++} = ${(num2 * num3)}
    ${num2} x ${num3++} = ${(num2 * num3)}
    ${num2} x ${num3++} = ${(num2 * num3)}
    ${num2} x ${num3++} = ${(num2 * num3)}
    ${num2} x ${num3++} = ${(num2 * num3)}
    ${num2} x ${num3++} = ${(num2 * num3)}
    ${num2} x ${num3++} = ${(num2 * num3)}
    ${num2} x ${num3++} = ${(num2 * num3)}
    ${num2} x ${num3} = ${(num2 * num3)}`
}

// task 05

function task05() {
    let totalMarks = 100
    let subject1 = prompt("Enter your first subject name:")
    let marks1 = +prompt("Enter marks of " + subject1)
    let subject2 = prompt("Enter your second subject name:")
    let marks2 = +prompt("Enter marks of " + subject2)
    let subject3 = prompt("Enter your third subject name:")
    let marks3 = +prompt("Enter marks of " + subject3)
    let percentage1 = marks1 / totalMarks * 100
    let percentage2 = marks2 / totalMarks * 100
    let percentage3 = marks3 / totalMarks * 100
    let obtaintotal = marks1 + marks2 + marks3
    let subtotal = totalMarks * 3
    let persenttotal = (percentage1 + percentage2 + percentage3) / 3
    let t5 = document.getElementById("t5")
    t5.innerHTML = `Mark Sheet:
    <table><tr><td>Subjects:</td><td>Total Marks</td><td>Obtained Marks</td><td>Percentage</td></tr>
    <tr><td>${subject1}</td><td>${totalMarks}</td><td>${marks1}</td><td>${percentage1}</td></tr>
    <tr><td>${subject2}</td><td>${totalMarks}</td><td>${marks2}</td><td>${percentage2}</td></tr>
    <tr><td>${subject3}</td><td>${totalMarks}</td><td>${marks3}</td><td>${percentage3}</td></tr>
    <tr><td><b>Total</b></td><td><b>${subtotal}</b></td><td><b>${obtaintotal}</b></td><td><b>${persenttotal}</b></td></tr></table>
`}


// task 06

function task06() {
    let subtotal = +prompt("Enter Total Marks")
    let obtaintotal = +prompt("Enter Obtained Marks")
    let percentage = obtaintotal / subtotal * 100
    let t6 = document.getElementById("t6")
    t6.innerText = `Total Marsk: ${subtotal}
    Obtained Marks: ${obtaintotal}
    Your Percentage is: ${percentage}`
    if (percentage > 90) {
        t6.innerText += `\nYour Grade is A+`
    } else if (percentage > 80) {
        t6.innerText += `\nYour Grade is A.`
    } else if (percentage > 70) {
        t6.innerText += `\nYour Grade is B+.`
    } else if (percentage > 60) {
        t6.innerText += `\nYour Grade is B.`
    } else if (percentage > 50) {
        t6.innerText += `\nYour Grade is C.`
    } else {
        t6.innerText += `\nYou are Fail`
    }
    t6.innerText += `\n\nGrade Reference:
    90% to 99% = A+ Grade
    80% to 89% = A Grade
    70% to 79% = B+ Grade
    60% to 69% = B Grade
    50% to 59% = C Grade
    49% or less = Fail`
}

// show code

function showtask01() {
    var show01 = document.getElementById("task01")
    show01.innerText = `var num1 = +prompt("Enter your number: ")
    var t1 = document.getElementById("t1")
    t1.innerText = Result:
    The Value of "a" is: $ {num1}
    ............................
    The Value of "++a" is: $ {++num1}
    Now the Value of "a" is: $ {num1}
    The Value of "a++" is: $ {num1++}
    Now the Value of "a" is: $ {num1}
    The Value of "--a" is: $ {--num1}
    Now the Value of "a" is: $ {num1}
    The Value of "a--" is: $ {num1--}
    Now the Value of "a" is: $ {num1}`
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
}

function showtask02() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = `var a = 2
    var b = 1
    var t1 = document.getElementById("t2")
    t1.innerText = 
    The Value of "a" is: $ {a}
    The Value of "b" is: $ {b}
    Result:
    "--a" = $ {--a}
    "--b" = $ {--b}
    "++b" = $ {++b}
    "b--" = $ {b--}
    "--a" - "--b"  = $ {(--a) - (--b)}
    "--a" - "--b" + "++b"  = $ {(((--a) - (--b)) + (++b))}
    "--a" - "--b" + "++b" + "b--"  = $ {(((--a) - (--b)) + ((++b) + (b--)))}`
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
}

function showtask03() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = `var name = prompt("Enter your name:")
    var t1 = document.getElementById("t3")
    t1.innerText = Welcome $ {name}! Have a nice day!`
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
}

function showtask04() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = `let num2 = +prompt("Enter a number for multiplication table:")
    if (num2 === 0 || num2 === "") {
        num2 = 5
    }
    let num3 = 1
    let t4 = document.getElementById("t4")
    t4.innerText = Multiplication Table of $ {num2}
    $ {num2} x $ {num3++} = $ {(num2 * num3)}
    $ {num2} x $ {num3++} = $ {(num2 * num3)}
    $ {num2} x $ {num3++} = $ {(num2 * num3)}
    $ {num2} x $ {num3++} = $ {(num2 * num3)}
    $ {num2} x $ {num3++} = $ {(num2 * num3)}
    $ {num2} x $ {num3++} = $ {(num2 * num3)}
    $ {num2} x $ {num3++} = $ {(num2 * num3)}
    $ {num2} x $ {num3++} = $ {(num2 * num3)}
    $ {num2} x $ {num3++} = $ {(num2 * num3)}
    $ {num2} x $ {num3} = $ {(num2 * num3)}`
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
}

function showtask05() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = `let totalMarks = 100
    let subject1 = prompt("Enter your first subject name:")
    let marks1 = +prompt("Enter marks of " + subject1)
    let subject2 = prompt("Enter your second subject name:")
    let marks2 = +prompt("Enter marks of " + subject2)
    let subject3 = prompt("Enter your third subject name:")
    let marks3 = +prompt("Enter marks of " + subject3)
    let percentage1 = marks1 / totalMarks * 100
    let percentage2 = marks2 / totalMarks * 100
    let percentage3 = marks3 / totalMarks * 100
    let obtaintotal = marks1 + marks2 + marks3
    let subtotal = totalMarks * 3
    let persenttotal =  (percentage1 + percentage2 + percentage3) / 3
    let t5 = document.getElementById("t5")
    t5.innerHTML = Mark Sheet:
    <table><tr><td>Subjects:</td><td>Total Marks</td><td>Obtained Marks</td><td>Percentage</td></tr>
    <tr><td>$ {subject1}</td><td>$ {totalMarks}</td><td>$ {marks1}</td><td>$ {percentage1}</td></tr>
    <tr><td>$ {subject2}</td><td>$ {totalMarks}</td><td>$ {marks2}</td><td>$ {percentage2}</td></tr>
    <tr><td>$ {subject3}</td><td>$ {totalMarks}</td><td>$ {marks3}</td><td>$ {percentage3}</td></tr>
    <tr><td><b>Total</b></td><td><b>$ {subtotal}</b></td><td><b>$ {obtaintotal}</b></td><td><b>$ {persenttotal}</b></td></tr></table>`
    var show06 = document.getElementById("task06")
    show06.innerText = ``
}

function showtask06() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = `let subtotal = +prompt("Enter Total Marks")
    let obtaintotal = +prompt("Enter Obtained Marks")
    let percentage = obtaintotal / subtotal * 100
    let t6 = document.getElementById("t6")
    t6.innerText = Total Marsk: $ {subtotal}
    Obtained Marks: $ {obtaintotal}
    Your Percentage is: $ {percentage}
    if (percentage > 90) {
        t6.innerText += \nYour Grade is A+
    } else if (percentage > 80) {
        t6.innerText += \nYour Grade is A.
    } else if (percentage > 70) {
        t6.innerText += \nYour Grade is B+.
    } else if (percentage > 60) {
        t6.innerText += \nYour Grade is B.
    } else if (percentage > 50) {
        t6.innerText += \nYour Grade is C.
    } else {
        t6.innerText += \nYou are Fail
    }
    t6.innerText += \n\nGrade Reference:
    90% to 99% = A+ Grade
    80% to 89% = A Grade
    70% to 79% = B+ Grade
    60% to 69% = B Grade
    50% to 59% = C Grade
    49% or less = Fail`
}

// the end