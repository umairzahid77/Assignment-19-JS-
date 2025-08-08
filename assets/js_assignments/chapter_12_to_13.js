// task 01

function task01() {
    let input = prompt("Enter a Number or Alphabet:");
    let asciiValue = input.charCodeAt(0);
    let t1 = document.getElementById("t1")
    t1.innerText = ``
    t1.innerText = `The ASCII value of "${input}" is: ${asciiValue}`
    if (asciiValue >= 65 && asciiValue <= 90) {
        t1.innerText += `\nThe character is an uppercase letter.`
    } else if (asciiValue >= 97 && asciiValue <= 122) {
        t1.innerText += `\nThe character is a lowercase letter.`
    } else if (asciiValue >= 48 && asciiValue <= 57) {
        t1.innerText += `\nThe character is a number.`
    } else {
        t1.innerText += `\nThe character is a special character.`
    }
}

// task 02

function task02() {
    let num1 = +prompt("Enter the first integer:")
    let num2 = +prompt("Enter the second integer:")
    let t2 = document.getElementById("t2")
    t2.innerText = ``
    if (num1 > num2) {
        t2.innerText = `The larger integer is: ${num1}`
    } else if (num2 > num1) {
        t2.innerText = `The larger integer is: ${num2}`
    } else {
        t2.innerText = `Both integers are equal`
    }
}

// task 03

function task03() {
    let num1 = +prompt("Enter a number")
    let t3 = document.getElementById("t3")
    if (num1 > 0) {
        t3.innerText = `The number ${num1} is positive.`
    } else if (num1 < 0) {
        t3.innerText = `The number ${num1} is negative.`
    } else {
        t3.innerText = `The number ${num1} is equal to zero.`
    }
}

// task 04

function task04() {
    let vowel = prompt("Enter a single letter:")
    let t4 = document.getElementById("t4")
    if (vowel.length === 1) {
        if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u" ||
            vowel === "A" || vowel === "E" || vowel === "I" || vowel === "O" || vowel === "U") {
            t4.innerText = `The letter '${vowel}' is a vowel.`
        } else {
            t4.innerText = `The letter '${vowel}' is not a vowel.`
        }
    } else {
        alert("Please enter a single letter only.");
    }
}

// task 05

function task05() {
    alert("Password Hint: where we learn JavaScript.");
    let password1 = "SMIT"
    let password2 = "smit"
    let userInput = prompt("Enter your password:");
    let t5 = document.getElementById("t5")
    t5.innerText = ``
    if (userInput === "") {
        alert("Please enter your password.");
    } else if (userInput === password1 || userInput === password2) {
        t5.innerText = `Correct! The password you entered matches the original password.`
    } else {
        t5.innerText = `Incorrect password. Please try again.`
    }
}

// task 06

function task06() {
    let greeting;
    let hour = +prompt("Enter your time")
    let t6 = document.getElementById("t6")
    if (hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    t6.innerText = greeting
}

// task 07

function task07() {
    let time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");
    let t7 = document.getElementById("t7")
    if (time >= 0 && time < 1200) {
        t7.innerText = `Good morning!`
    } else if (time >= 1200 && time < 1700) {
        t7.innerText = `Good afternoon!`
    } else if (time >= 1700 && time < 2100) {
        t7.innerText = `Good evening!`
    } else if (time >= 2100 && time < 2400) {
        t7.innerText = `Good night!`
    } else {
        t7.innerText = `Invalid time. Please enter a valid time in 24-hour format.`
    }
}

// show code

function showtask01() {
    let show01 = document.getElementById("task01")
    show01.innerText = `let input = prompt("Enter a Number or Alphabet:");
    let asciiValue = input.charCodeAt(0);
    let t1 = document.getElementById("t1")
    t1.innerText = The ASCII value of "$ {input}" is: $ {asciiValue}
    if (asciiValue >= 65 && asciiValue <= 90) {
        t1.innerText += The character is an uppercase letter.
    } else if (asciiValue >= 97 && asciiValue <= 122) {
        t1.innerText += The character is a lowercase letter.
    } else if (asciiValue >= 48 && asciiValue <= 57) {
        t1.innerText += The character is a number.
    } else {
        t1.innerText += The character is a special character.
    }`
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
}

function showtask02() {
    let show01 = document.getElementById("task01")
    show01.innerText = ``
    let show02 = document.getElementById("task02")
    show02.innerText = `let num1 = +prompt("Enter the first integer:")
    let num2 = +prompt("Enter the second integer:")
    let t2 = document.getElementById("t2")
    t2.innerText = ``
    if (num1 > num2) {
        t2.innerText = The larger integer is: $ {num1}
    } else if (num2 > num1) {
        t2.innerText = The larger integer is: $ {num2}
    } else {
        t2.innerText = Both integers are equal
    }`
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
}

function showtask03() {
    let show01 = document.getElementById("task01")
    show01.innerText = ``
    let show02 = document.getElementById("task02")
    show02.innerText = ``
    let show03 = document.getElementById("task03")
    show03.innerText = `let num1 = +prompt("Enter a number")
    let t3 = document.getElementById("t3")
    if (num1 > 0) {
        t3.innerText = The number $ {num1} is positive.
    } else if (num1 < 0) {
        t3.innerText = The number $ {num1} is negative.
    } else {
        t3.innerText = The number $ {num1} is equal to zero.
    }`
    let show04 = document.getElementById("task04")
    show04.innerText = ``
    let show05 = document.getElementById("task05")
    show05.innerText = ``
    let show06 = document.getElementById("task06")
    show06.innerText = ``
    let show07 = document.getElementById("task07")
    show07.innerText = ``
}

function showtask04() {
    let show01 = document.getElementById("task01")
    show01.innerText = ``
    let show02 = document.getElementById("task02")
    show02.innerText = ``
    let show03 = document.getElementById("task03")
    show03.innerText = ``
    let show04 = document.getElementById("task04")
    show04.innerText = `let vowel = prompt("Enter a single letter:")
    let t4 = document.getElementById("t4")
    if (vowel.length === 1) {
        if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u" ||
            vowel === "A" || vowel === "E" || vowel === "I" || vowel === "O" || vowel === "U") {
            t4.innerText = The letter '$ {vowel}' is a vowel.
        } else {
            t4.innerText = The letter '$ {vowel}' is not a vowel.
        }
    } else {
        alert("Please enter a single letter only.");
    }`
    let show05 = document.getElementById("task05")
    show05.innerText = ``
    let show06 = document.getElementById("task06")
    show06.innerText = ``
    let show07 = document.getElementById("task07")
    show07.innerText = ``
}

function showtask05() {
    let show01 = document.getElementById("task01")
    show01.innerText = ``
    let show02 = document.getElementById("task02")
    show02.innerText = ``
    let show03 = document.getElementById("task03")
    show03.innerText = ``
    let show04 = document.getElementById("task04")
    show04.innerText = ``
    let show05 = document.getElementById("task05")
    show05.innerText = `alert("Password Hint: where we learn JavaScript.");
    let password1 = "SMIT"
    let password2 = "smit"
    let userInput = prompt("Enter your password:");
    let t5 = document.getElementById("t5")
    t5.innerText = ``
    if (userInput === "") {
        alert("Please enter your password.");
    } else if (userInput === password1 || userInput === password2) {
        t5.innerText = Correct! The password you entered matches the original password.
    } else {
        t5.innerText = Incorrect password. Please try again.
    }`
    let show06 = document.getElementById("task06")
    show06.innerText = ``
    let show07 = document.getElementById("task07")
    show07.innerText = ``
}

function showtask06() {
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
    show06.innerText = `let greeting;
    let hour = +prompt("Enter your time")
    let t6 = document.getElementById("t6")
    if (hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    t6.innerText = greeting`
    let show07 = document.getElementById("task07")
    show07.innerText = ``
}

function showtask07() {
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
    show07.innerText = `let time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");
    let t7 = document.getElementById("t7")
    if (time >= 0 && time < 1200) {
        t7.innerText = Good morning!
    } else if (time >= 1200 && time < 1700) {
        t7.innerText = Good afternoon!
    } else if (time >= 1700 && time < 2100) {
        t7.innerText = Good evening!
    } else if (time >= 2100 && time < 2400) {
        t7.innerText = Good night!
    } else {
        t7.innerText = Invalid time. Please enter a valid time in 24-hour format.
    }`
}

// the end