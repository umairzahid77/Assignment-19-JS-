// task 01

function task01() {
    let birthYear = +prompt("Enter your birth year:");
    let d = new Date();
    let currentYear = d.getFullYear();
    let age = currentYear - birthYear;
    alert(`Your age is: ${age} years.`)
}

function showtask01() {
    let show01 = document.getElementById("task01")
    show01.innerText = `let birthYear = +prompt("Enter your birth year:");
    let d = new Date();
    let currentYear = d.getFullYear();
    let age = currentYear - birthYear;
    alert(Your age is: $ {age} years.)`
}

// task 02

function task02() {
    let num = []
    let average = 0;
    for (let i = 0; i < 5; i++) {
        num[i] = +prompt(`Enter number ${(i + 1)}:`)
        average += num[i]
    }
    average /= num.length
    let t02 = document.getElementById("t02")
    t02.innerText = `Numbers entered: ${num}
    Average of the numbers: ${average}`
}

function showtask02() {
    let show02 = document.getElementById("task02")
    show02.innerText = `let num = []
    let average = 0;
    for (let i = 0; i < 5; i++) {
        num[i] = +prompt(Enter number $ {(i + 1)}:)
        average += num[i]
    }
    average /= num.length
    let t02 = document.getElementById("t02")
    t02.innerText = Numbers entered: $ {num}
    Average of the numbers: $ {average}`
}

// task 03

function task03() {
    let num = []
    let divisibleBy3 = []
    for (let i = 0; i < 10; i++) {
        num[i] = +prompt(`Enter number ${(i + 1)}:`)
        if (num[i] % 3 === 0) {
            divisibleBy3.push(num[i]);
        }
    }
    let t03 = document.getElementById("t03")
    t03.innerText = `Numbers entered: ${num}
    Numbers divisible by 3: ${divisibleBy3}`
}

function showtask03() {
    let show03 = document.getElementById("task03")
    show03.innerText = `let num = []
    let divisibleBy3 = [] 
    for (let i = 0; i < 10; i++) {
        num[i] = +prompt(Enter number $ {(i + 1)}:)
        if (num[i] % 3 === 0) {
            divisibleBy3.push(num[i]);
        }
    }
    let t03 = document.getElementById("t03")
    t03.innerText = Numbers entered: $ {num}
    Numbers divisible by 3: $ {divisibleBy3}`
}

// task 04

function task04() {
    let num1 = +prompt("Enter a number for factorial:")
    let num2 = num1
    for (let i = num2 - 1; i > 0; i--) {
        num2 *= i;
    }
    let t04 = document.getElementById("t04")
    t04.innerText = `The factorial of ${num1} is: ${num2}`
}

function showtask04() {
    let show04 = document.getElementById("task04")
    show04.innerText = `let num1 = +prompt("Enter a number for factorial:")
    let num2 = num1
    for (let i = num2 - 1; i > 0; i--) {
        num2 *= i;
    }
    let t04 = document.getElementById("t04")
    t04.innerText = The factorial of $ {num1} is: $ {num2}`
}

// task 05

function task05() {
    let str = prompt("Enter a sentence");
    let t05 = document.getElementById("t05")
    let reversed = ""
    t05.innerText = `String entered: ${str}`
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    t05.innerText += `\nReversed string: ${reversed}`
}

function showtask05() {
    let show05 = document.getElementById("task05")
    show05.innerText = `let str = prompt("Enter a sentence");
    let t05 = document.getElementById("t05")
    let reversed = ""
    t05.innerText = String entered: $ {str}
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    t05.innerText += Reversed string: $ {reversed}`
}

// task 06

function task06() {
    let str = prompt("Enter a sentence")
    let specific_letter = prompt("Enter a specific letter to count its occurrences in the sentence");
    let flag = 0;
    let t06 = document.getElementById("t06")
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        if (str[i] === specific_letter) {
            flag++
        }
    }
    t06.innerText = `String entered: ${str}
    ${specific_letter} has occured ${flag} times`
}

function showtask06() {
    let show06 = document.getElementById("task06")
    show06.innerText = `let str = prompt("Enter a sentence")
    let specific_letter = prompt("Enter a specific letter to count its occurrences in the sentence");
    let flag = 0;
    let t06 = document.getElementById("t06")
    str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        if (str[i] === specific_letter) {
            flag++
        }
    }
    t06.innerText = String entered: $ {str}
    $ {specific_letter} has occured $ {flag} times`
}

// task 07


function task07() {
    let names = []
    for (let i = 0; i < 5; i++) {
        names[i] = prompt("Enter name " + (i + 1) + ":");
    }
    console.log(`names entered ${names}`)
    names.sort()
    console.log(`After sorting: ${names}`)
    let t07 = document.getElementById("t07")
    t07.innerText = `Check console for results`
}

function showtask07() {
    let show07 = document.getElementById("task07")
    show07.innerText = `let names = []
    for (let i = 0; i < 5; i++) {
        names[i] = prompt("Enter name " + (i + 1) + ":");
    }
    console.log(names entered $ {names})
    names.sort()
    console.log(After sorting: $ {names})
    let t07 = document.getElementById("t07")
    t07.innerText = Check console for results`
}

// task 08

function task08() {
    let num = +prompt("Enter a number for multiplication table")
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${(num * i)}`)
    }
    let t08 = document.getElementById("t08")
    t08.innerText = `Please check console for multiplication table of ${num}`
}

function showtask08() {
    let show08 = document.getElementById("task08")
    show08.innerText = `let num = +prompt("Enter a number for multiplication table")
    for (let i = 1; i <= 10; i++) {
        console.log($ {num} x $ {i} = $ {(num * i)})
    }
    let t08 = document.getElementById("t08")
    t08.innerText = Please check console for multiplication table of $ {num}`
}

// task 09

function task09() {
    let str = prompt("enter a string:")
    str = str.toLowerCase()
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i <= str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                count++
            }
        }
    }
    console.log(`string entered: ${str}`)
    console.log(`Number of vowels: ${count}`)
    let t09 = document.getElementById("t09")
    t09.innerText = `Check console for results`
}

function showtask09() {
    let show09 = document.getElementById("task09")
    show09.innerText = `let str = prompt("enter a string:")
    str = str.toLowerCase()
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i <= str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                count++
            }
        }
    }
    console.log(string entered: $ {str})
    console.log(Number of vowels: $ {count})
    let t09 = document.getElementById("t09")
    t09.innerText = Check console for results`
}

// task 10


function task10() {
    let products = ["apple", "banana", "orange", "mango", "grape"]
    let prices = [1.2, 0.5, 0.8, 1.5, 2.0]
    let t10 = document.getElementById("t10")
    t10.innerText = `Products with Prices:`
    for (let i = 0; i < products.length; i++) {
        t10.innerText += `\nProduct: ${products[i]}, Price: $${prices[i]}`
    }
}

function showtask10() {
    let show10 = document.getElementById("task10")
    show10.innerText = `let products = ["apple", "banana", "orange", "mango", "grape"]
    let prices = [1.2, 0.5, 0.8, 1.5, 2.0]
    let t10 = document.getElementById("t10")
    t10.innerText = Products with Prices:
    for (let i = 0; i < products.length; i++) {
        t10.innerText += Product: $ {products[i]}, Price: $$ {prices[i]}
    }`
}

// task 11

function task11() {
    let c = +prompt("Enter temprature in Celsius:")
    let f = (c * (9 / 5)) + 32
    alert(`Temperature in Fahrenheit: ${f}°F`)
}

function showtask11() {
    let show11 = document.getElementById("task11")
    show11.innerText = `let c = +prompt("Enter temprature in Celsius:")
    let f = (c * (9 / 5)) + 32
    alert(Temperature in Fahrenheit: $ {f}°F)`
}

// task 12

function task12() {
    let words = prompt("enter a word:")
    let palindrome = []
    let t12 = document.getElementById("t12")
    t12.innerText = `word entered: ${words}\n`
    for (let i = (words.length - 1); i >= 0; i--) {
        palindrome += words[i]
    }
    if (words === palindrome) {
        t12.innerText = `Word ${words} is palindrome`
    } else {
        t12.innerText = `Word ${words} is not palindrome`
    }
}

function showtask12() {
    let show12 = document.getElementById("task12")
    show12.innerText = `let words = prompt("enter a word:")
    let palindrome = []
    let t12 = document.getElementById("t12")
    t12.innerText = word entered: $ {words}
    for (let i = (words.length - 1); i >= 0; i--) {
        palindrome += words[i]
    }
    if (words === palindrome) {
        t12.innerText = Word $ {words} is palindrome
    } else {
        t12.innerText = Word $ {words} is not palindrome
    }`
}

// task 13

function task13() {
    let num = +prompt("Enter a number:")
    let flag = false;
    for (let i = 2; i < num; i++) {
        let remainder = num % i
        if (remainder === 0) {
            flag = true
            break
        }
    }
    let t13 = document.getElementById("t13")
    if (!flag) {
        alert(`${num} is a prime number`)
    } else {
        alert(`${num} is not a prime number`)
    }
}

function showtask13() {
    let show13 = document.getElementById("task13")
    show13.innerText = `let num = +prompt("Enter a number:")
    let flag = false;
    for(let i = 2; i < num; i++) {
        let remainder = num % i
        if (remainder === 0) {
            flag = true
            break
        }
    }
    let t13 = document.getElementById("t13")
    if(!flag) {
        alert($ {num} is a prime number)
    } else {
        alert($ {num} is not a prime number)
    }`
}

// task 14

function task14() {
    let num = []
    for (let i = 0; i < 10; i++) {
        num[i] = +prompt(`Enter number ${i + 1} (between 1 to 100):`)
        if (num[i] > 101) {
            alert(`Please enter number between 1 to 100`)
            i--
        }
    }
    let t14 = document.getElementById("t14")
    t14.innerText = `Number entered: ${num}`
    num.sort()
    t14.innerText += `\nThe Largest Number is: ${num[num.length - 1]}`
}

function showtask14() {
    let show14 = document.getElementById("task14")
    show14.innerText = `let num = []
    for (let i = 0; i < 10; i++) {
        num[i] = +prompt(Enter number $ {i + 1} (between 1 to 100):)
        if (num[i] > 101) {
            alert(Please enter number between 1 to 100)
            i--
        }
    }
    let t14 = document.getElementById("t14")
    t14.innerText = Number entered: $ {num}
    num.sort()
    t14.innerText += The Largest Number is: $ {num[num.length-1]}`
}

// task 15

function task15() {
    let flag = false
    let num1 = +prompt("Enter 1st number:");
    let operator = prompt("Enter an operator (+, -, *, /):");
    let num2 = +prompt("Enter 2nd number:");
    let operators = ["/", "*", "+", "-"]
    for (let i = 0; i < operators.length; i++) {
        if (operator === operators[i]) {
            flag = true
        }
    }
    if (flag === false) {
        alert("Invalid operator.")
    }
    let t15 = document.getElementById("t15")
    if (flag === true) {
        for (let i = 0; i < operators.length; i++) {
            if (operator === "+") {
                t15.innerText = `You have selected addition.
                    ${num1} ${operator} ${num2} = ${(num1 + num2)}`
            } else if (operator === "-") {
                t15.innerText = `You have selected subtraction.
                    ${num1} ${operator} ${num2} = ${(num1 - num2)}`
            } else if (operator === "*") {
                t15.innerText = `You have selected multiplication.
                    ${num1} ${operator} ${num2} = ${(num1 * num2)}`
            } else if (operator === "/") {
                t15.innerText = `You have selected division.
                    ${num1} ${operator} ${num2} = ${(num1 / num2)}`
            }
        }
    }
}

function showtask15() {
    let show15 = document.getElementById("task15")
    show15.innerText = `let flag = false
    let num1 = +prompt("Enter 1st number:");
    let operator = prompt("Enter an operator (+, -, *, /):");
    let num2 = +prompt("Enter 2nd number:");
    let operators = ["/", "*", "+", "-"]
    for (let i = 0; i < operators.length; i++) {
        if (operator === operators[i]) {
            flag = true
        }
    }
    if (flag === false) {
        alert("Invalid operator.")
    }
    let t15 = document.getElementById("t15")
    if (flag === true) {
        for (let i = 0; i < operators.length; i++) {
            if (operator === "+") {
                t15.innerText = You have selected addition.
                    $ {num1} $ {operator} $ {num2} = $ {(num1 + num2)}
            } else if (operator === "-") {
                t15.innerText = You have selected subtraction.
                    $ {num1} $ {operator} $ {num2} = $ {(num1 - num2)}
            } else if (operator === "*") {
                t15.innerText = You have selected multiplication.
                    $ {num1} $ {operator} $ {num2} = $ {(num1 * num2)}
            } else if (operator === "/") {
                t15.innerText = You have selected division.
                    $ {num1} $ {operator} $ {num2} = $ {(num1 / num2)}
            }
        }
    }`
}

// task 16

function task16() {
    let num = []
    let above50 = [];
    let t16 = document.getElementById("t16")
    for (let i = 0; i < 10; i++) {
        num[i] = +prompt(`Enter number ${i + 1}`)
        if (num[i] > 50) {
            above50.push(num[i]);
        }
    }
    t16.innerText = `Numbers enterd: ${num}\n`
    if (above50.length > 0) {
        t16.innerText += `Numbers above 50: ${above50}`
    } else {
        t16.innerText += `All values are under 50.`
    }
}

function showtask16() {
    let show16 = document.getElementById("task16")
    show16.innerText = `let num = []
    let above50 = [];
    let t16 = document.getElementById("t16")
    for (let i = 0; i < 10; i++) {
        num[i] = +prompt(Enter number $ {i + 1})
        if (num[i] > 50) {
            above50.push(num[i]);
        }
    }
    t16.innerText = Numbers enterd: $ {num}
    if (above50.length > 0) {
        t16.innerText += Numbers above 50: $ {above50}
    } else {
        t16.innerText += All values are under 50.
    }`
}

// task 17

function task17() {
    let num = []
    let even = []
    let odd = []
    for (let i = 0;  i < 10; i++) {
        num[i] = +prompt(`Enter number ${i + 1}`)
    }
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            even.push(num[i])
        } else if (num[i] % 2 !== 0) {
            odd.push(num[i])
        }
    }
    let t17 = document.getElementById("t17")
    t17.innerText = `Number entered: ${num}
    Even Numbers: ${even}
    Odd Numbers: ${odd}`
}

function showtask17() {
    let show17 = document.getElementById("task17")
    show17.innerText = ``
}

// clear all

function clearall() {
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
    let t12 = document.getElementById("t12")
    t12.innerText = ``
    t12.innerHTML = ``
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
}

// the end