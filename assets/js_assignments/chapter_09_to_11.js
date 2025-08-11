// task 01

function task01() {
    let city = prompt("Enter the name of a city:");
    let t1 = document.getElementById("t1")
    if (city === "Karachi" || city === "karachi") {
        t1.innerText = `Welcome to City of Lights.`
    } else {
        t1.innerText = `Welcome to ${city}.`
    }
}

function showtask01() {
    let show01 = document.getElementById("task01")
    show01.innerText = `let city = prompt("Enter the name of a city:");
    let t1 = document.getElementById("t1")
    if (city === "Karachi" || city === "karachi") {
        t1.innerText = Welcome to City of Lights.
    } else {
        t1.innerText = Welcome to $ {city}.
    }`
}

// task 02

function task02() {
    let t2 = document.getElementById("t2")
    let gender = prompt("Enter your Gender:")
    if (gender === "male" || gender === "Male") {
        t2.innerText = `Good Morning Sir.`
    } else if (gender === "female" || gender === "Female") {
        t2.innerText = `Good Morning Ma'am.`
    } else {
        t2.innerText = `Good Morning.`
    }
}

function showtask02() {
    let show02 = document.getElementById("task02")
    show02.innerText = `let t2 = document.getElementById("t2")
    let gender = prompt("Enter your Gender:")
    if (gender === "male" || gender === "Male") {
        t2.innerText = Good Morning Sir.
    } else if (gender === "female" || gender === "Female") {
        t2.innerText = Good Morning Ma'am.
    } else {
        t2.innerText = Good Morning.
    }`
}

// task 03

function task03() {
    let light = prompt("Enter your traffic light color (red, yellow, green):");
    let t3 = document.getElementById("t3")
    if (light === "red" || light === "Red") {
        t3.innerText = `Must Stop`
    } else if (light === "yellow" || light === "Yellow") {
        t3.innerText = `Ready to move`
    } else if (light === "green" || light === "Green") {
        t3.innerText = `Move now`
    } else {
        t3.innerText = `Invalid color`
    }
}

function showtask03() {
    let show03 = document.getElementById("task03")
    show03.innerText = `let light = prompt("Enter your traffic light color (red, yellow, green):");
    let t3 = document.getElementById("t3")
    if (light === "red" || light === "Red") {
        t3.innerText = Must Stop
    } else if (light === "yellow" || light === "Yellow") {
        t3.innerText = Ready to move
    } else if (light === "green" || light === "Green") {
        t3.innerText = Move now
    } else {
        t3.innerText = Invalid color
    }`
}

// task 04

function task04() {
    let fuel = prompt("Enter the remaining fuel in liters:");
    let t4 = document.getElementById("t4")
    if (fuel < 0.25) {
        t4.innerText = `Please refill the fuel in your car.`
    } else {
        t4.innerText = `You have enough fuel in your car.`
    }
}

function showtask04() {
    let show04 = document.getElementById("task04")
    show04.innerText = `let fuel = prompt("Enter the remaining fuel in liters:");
    let t4 = document.getElementById("t4")
    if (fuel < 0.25) {
        t4.innerText = Please refill the fuel in your car.
    } else {
        t4.innerText = You have enough fuel in your car.
    }`
}

// task 05

function task05() {
    let a = 4;
    if (++a === 5) {
        alert("given condition for letiable a is true");
    }
    let b = 82;
    if (b++ === 83) {
        alert("given condition for letiable b is true");
    }
    let c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
    }
    if (c === 13) {
        alert("condition 2 is true");
    }
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }
    let materialCost = 20000;
    let laborCost = 2000;
    let totalCost = materialCost + laborCost;
    if (totalCost === (laborCost + materialCost)) {
        alert("The cost equals");
    }
    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }
    if ("car" < "cat") {
        alert("car is smaller than cat");
    }
}

function showtask05() {
    let show05 = document.getElementById("task05")
    show05.innerText = `let a = 4;
    if (++a === 5) {
        alert("given condition for letiable a is true");
    }
    let b = 82;
    if (b++ === 83) {
        alert("given condition for letiable b is true");
    }
    let c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
    }
    if (c === 13) {
        alert("condition 2 is true");
    }
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }
    let materialCost = 20000;
    let laborCost = 2000;
    let totalCost = materialCost + laborCost;
    if (totalCost === (laborCost + materialCost)) {
        alert("The cost equals");
    }
    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }
    if ("car" < "cat") {
        alert("car is smaller than cat");
    }`
}

// task 06

function task06() {
    let tmarks = +prompt("Enter Total Marks")
    let omarks = +prompt("Enter Obtained Marks")
    let percentage = omarks / tmarks * 100
    let t6 = document.getElementById("t6")
    t6.innerText = `Mark Sheet
    Total Marsk: ${tmarks}
    Obtained Marks: ${omarks}
    Your Percentage is: ${percentage}`
    if (percentage > 80) {
        t6.innerText += `\nYour Grade is: A+.
        Remark: Excellent`
    } else if (percentage > 70) {
        t6.innerText += `\nYour Grade is: A.
        Remark: Good`
    } else if (percentage > 60) {
        t6.innerText += `\nYour Grade is: B.
        Remark: You need to improve`
    } else {
        t6.innerText += `\nGrade: You are Fail.
        Remark: Sorry`
    }
}

function showtask06() {
    let show06 = document.getElementById("task06")
    show06.innerText = `let tmarks = +prompt("Enter Total Marks")
    let omarks = +prompt("Enter Obtained Marks")
    let percentage = omarks / tmarks * 100
    let t6 = document.getElementById("t6")
    t6.innerText = Mark Sheet
    Total Marsk: $ {tmarks}
    Obtained Marks: $ {omarks}
    Your Percentage is: $ {percentage}
    if (percentage > 80) {
        t6.innerText += \nYour Grade is: A+.
        Remark: Excellent
    } else if (percentage > 70) {
        t6.innerText += \nYour Grade is: A.
        Remark: Good
    } else if (percentage > 60) {
        t6.innerText += \nYour Grade is: B.
        Remark: You need to improve
    } else {
        t6.innerText += \nGrade: You are Fail.
        Remark: Sorry
    }`
}

// task 07

function task07() {
    let game = +prompt("Enter a number between 1 and 10 to guess the secret number:");
    let secretNumber = 7;
    let t7 = document.getElementById("t7")
    if (game === secretNumber) {
        t7.innerText = `Bingo! Correct answer.`
    } else if ((game === secretNumber++) || (game === secretNumber--)) {
        t7.innerText = `Close enough to the correct answer.`
    } else {
        t7.innerText = `Sorry, try next time`
    }
}

function showtask07() {
    let show07 = document.getElementById("task07")
    show07.innerText = `let game = +prompt("Enter a number between 1 and 10 to guess the secret number:");
    let secretNumber = 7;
    let t7 = document.getElementById("t7")
    if (game === secretNumber) {
        t7.innerText = Bingo! Correct answer.
    } else if ((game === secretNumber++) || (game === secretNumber--)) {
        t7.innerText = Close enough to the correct answer.
    } else {
        t7.innerText = Sorry, try next time
    }`
}

// task 08

function task08() {
    let t8 = document.getElementById("t8")
    let num1 = +prompt("Enter a number to check if it is divisible by 3:");
    let num2 = num1 % 3
    if (num2 === 0) {
        t8.innerText = `The number ${num1} is divisible by 3.`
    } else {
        t8.innerText = `The number ${num1} is not divisible by 3.`
    }
}

function showtask08() {
    let show08 = document.getElementById("task08")
    show08.innerText = `let t8 = document.getElementById("t8")
    let num1 = +prompt("Enter a number to check if it is divisible by 3:");
    let num2 = num1 % 3
    if (num2 === 0) {
        t8.innerText = The number $ {num1} is divisible by 3.
    } else {
        t8.innerText = The number $ {num1} is not divisible by 3.
    }`
}

// task 09

function task09() {
    let t9 = document.getElementById("t9")
    let num3 = +prompt("Enter a number to check if it is even or odd:");
    let num4 = num3 % 2
    if (num4 === 0) {
        t9.innerText = `The number ${num3} is even.`
    } else {
        t9.innerText = `The number ${num3} is odd.`
    }
}

function showtask09() {
    let show09 = document.getElementById("task09")
    show09.innerText = `let t9 = document.getElementById("t9")
    let num3 = +prompt("Enter a number to check if it is even or odd:");
    let num4 = num3 % 2
    if (num4 === 0) {
        t9.innerText = The number $ {num3} is even.
    } else {
        t9.innerText = The number $ {num3} is odd.
    }`
}

// task 10

function task10() {
    let t10 = document.getElementById("t10")
    let temp = +prompt("Enter the temperature:");
    t10.innerText = ``
    if (temp > 40) {
        t10.innerText = `It is too hot outside.`
    } else if (temp > 30) {
        t10.innerText = `The weather today is normal.`
    } else if (temp > 20) {
        t10.innerText = `Today's weather is cool.`
    } else {
        t10.innerText = `OMG! Today's weather is so cool.`
    }
}

function showtask10() {
    let show10 = document.getElementById("task10")
    show10.innerText = `let t10 = document.getElementById("t10")
    let temp = +prompt("Enter the temperature:");
    t10.innerText = ``
    if (temp > 40) {
        t10.innerText = It is too hot outside.
    } else if (temp > 30) {
        t10.innerText = The weather today is normal.
    } else if (temp > 20) {
        t10.innerText = Today's weather is cool.
    } else {
        t10.innerText = OMG! Today's weather is so cool.
    }`
}

// task 11

function task11() {
    let t11 = document.getElementById("t11")
    let in1 = +prompt("Enter first number:");
    let operator = prompt("Enter an operator (+, -, *, /, %):");
    let in2 = +prompt("Enter second number:");
    t11.innerText = `First number: ${in1}
    Operator: ${operator}
    Second number: ${in2}`
    if (operator === "+") {
        t11.innerText += `\nResult: ${(in1 + in2)}`
    } else if (operator === "-") {
        t11.innerText += `\nResult: ${(in1 - in2)}`
    } else if (operator === "*") {
        t11.innerText += `\nResult: ${(in1 * in2)}`
    } else if (operator === "/") {
        t11.innerText += `\nResult: ${(in1 / in2)}`
    } else if (operator === "%") {
        t11.innerText += `\nResult: ${(in1 % in2)}`
    } else {
        t11.innerText += `\nResult: Invalid operator`
    }
}

function showtask11() {
    let show11 = document.getElementById("task11")
    show11.innerText = `let t11 = document.getElementById("t11")
    let in1 = +prompt("Enter first number:");
    let operator = prompt("Enter an operator (+, -, *, /, %):");
    let in2 = +prompt("Enter second number:");
    t11.innerText = First number: $ {in1}
    Operator: $ {operator}
    Second number: $ {in2}
    if (operator === "+") {
        t11.innerText += \nResult: $ {(in1 + in2)}
    } else if (operator === "-") {
        t11.innerText += \nResult: $ {(in1 - in2)}
    } else if (operator === "*") {
        t11.innerText += \nResult: $ {(in1 * in2)}
    } else if (operator === "/") {
        t11.innerText += \nResult: $ {(in1 / in2)}
    } else if (operator === "%") {
        t11.innerText += \nResult: $ {(in1 % in2)}
    } else {
        t11.innerText += \nResult: Invalid operator
    }`
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
    let t04 = document.getElementById("t4")
    t04.innerText = ``
    t04.innerHTML = ``
    let t06 = document.getElementById("t6")
    t06.innerText = ``
    t06.innerHTML = ``
    let t07 = document.getElementById("t7")
    t07.innerText = ``
    t07.innerHTML = ``
    let t08 = document.getElementById("t8")
    t08.innerText = ``
    t08.innerHTML = ``
    let t09 = document.getElementById("t9")
    t09.innerText = ``
    t09.innerHTML = ``
    let t10 = document.getElementById("t10")
    t10.innerText = ``
    t10.innerHTML = ``
    let t11 = document.getElementById("t11")
    t11.innerText = ``
    t11.innerHTML = ``
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
}

// the end