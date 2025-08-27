// task 01

function task01() {
    let d = new Date();
    let t01 = document.getElementById("t01")
    t01.innerText = `${d}`
}

function showtask01() {
    let show01 = document.getElementById("task01")
    show01.innerText = `et d = new Date();
    let t01 = document.getElementById("t01")
    t01.innerText = $ {d}`
}

// task 02

function task02() {
    let firstname = prompt("Enter your First name:")
    let lastname = prompt("Enter your Last name:")
    let t02 = document.getElementById("t02")
    t02.innerText = `Hello ${firstname} ${lastname}, Welcome to Assignments of JavaScript`
}

function showtask02() {
    let show02 = document.getElementById("task02")
    show02.innerText = `let firstname = prompt("Enter your First name:")
    let lastname = prompt("Enter your Last name:")
    let t02 = document.getElementById("t02")
    t02.innerText = Hello $ {firstname} $ {lastname}, Welcome to Assignments of JavaScript`
}

// task 03

function task03() {
    let firstnum = +prompt("Enter your First number:")
    let lastnum = +prompt("Enter your second number:")
    let t03 = document.getElementById("t03")
    t03.innerText = `The sum of ${firstnum} & ${lastnum} is: ${firstnum + lastnum}`
}

function showtask03() {
    let show03 = document.getElementById("task03")
    show03.innerText = `let firstnum = +prompt("Enter your First number:")
    let lastnum = +prompt("Enter your second number:")
    let t03 = document.getElementById("t03")
    t03.innerText = The sum of $ {firstnum} & $ {lastnum} is: $ {firstnum + lastnum}`
}

// task 04

function task04() {
    let t04 = document.getElementById("t04")
    let in1 = +prompt("Enter first number:");
    let operator = prompt("Enter an operator (+, -, *, /, %):");
    let in2 = +prompt("Enter second number:");
    t04.innerText = `First number: ${in1}
    Operator: ${operator}
    Second number: ${in2}`
    if (operator === "+") {
        t04.innerText += `\nResult: ${(in1 + in2)}`
    } else if (operator === "-") {
        t04.innerText += `\nResult: ${(in1 - in2)}`
    } else if (operator === "*") {
        t04.innerText += `\nResult: ${(in1 * in2)}`
    } else if (operator === "/") {
        t04.innerText += `\nResult: ${(in1 / in2)}`
    } else if (operator === "%") {
        t04.innerText += `\nResult: ${(in1 % in2)}`
    } else {
        t04.innerText += `\nResult: Invalid operator`
    }
}

function showtask04() {
    let show04 = document.getElementById("task04")
    show04.innerText = `let t04 = document.getElementById("t04")
    let in1 = +prompt("Enter first number:");
    let operator = prompt("Enter an operator (+, -, *, /, %):");
    let in2 = +prompt("Enter second number:");
    t04.innerText = First number: $ {in1}
    Operator: $ {operator}
    Second number: $ {in2}
    if (operator === "+") {
        t04.innerText += Result: $ {(in1 + in2)}
    } else if (operator === "-") {
        t04.innerText += Result: $ {(in1 - in2)}
    } else if (operator === "*") {
        t04.innerText += Result: $ {(in1 * in2)}
    } else if (operator === "/") {
        t04.innerText += Result: $ {(in1 / in2)}
    } else if (operator === "%") {
        t04.innerText += Result: $ {(in1 % in2)}
    } else {
        t04.innerText += Result: Invalid operator
    }`
}

// task 05

function task05() {
    let in1 = +prompt("Enter a number for its square root:");
    let square = in1 * in1
    let t05 = document.getElementById("t05")
    t05.innerText = `The Square root of ${in1} is: ${square}`
}

function showtask05() {
    let show05 = document.getElementById("task05")
    show05.innerText = `let in1 = +prompt("Enter a number for its square root:");
    let square = in1 * in1
    let t05 = document.getElementById("t05")
    t05.innerText = The Square root of $ {in1} is: $ {square}`
}

// task 06

function task06() {
    let in1 = +prompt("Enter a number for its factorial:");
    let count = in1 - 1
    for (let i = in1; i > 1; i--) {
        in1 = in1 * count
        count--
    }
    let t06 = document.getElementById("t06")
    t06.innerText = `${in1}`
}

function showtask06() {
    let show06 = document.getElementById("task06")
    show06.innerText = `let in1 = +prompt("Enter a number for its factorial:");
    let count = in1 - 1
    for (let i = in1; i > 1; i--) {
        in1 = in1 * count
        count--
    }
    let t06 = document.getElementById("t06")
    t06.innerText = $ {in1}`
}

// task 07

function task07() {
    let in1 = +prompt("Enter start number for counting:")
    let in2 = +prompt("Enter end number for counting:")
    let t07 = document.getElementById("t07")
    t07.innerText = `Counting till ${in1} to ${in2}:\n`
    for (let i = in1; i <= in2; i++) {
        t07.innerText += `${i},`
    }
}

function showtask07() {
    let show07 = document.getElementById("task07")
    show07.innerText = `let in1 = +prompt("Enter start number for counting:")
    let in2 = +prompt("Enter end number for counting:")
    let t07 = document.getElementById("t07")
    t07.innerText = Counting till $ {in1} to $ {in2}:
    for (let i = in1; i <= in2; i++) {
        t07.innerText += $ {i},
    }`
}

// task 08

function task08() {
    let in1 = +prompt("Enter the base of triangle:")
    let in2 = +prompt("Enter the perpendicular of triangle:")
    function root(square) {
        return square * square
    }
    let in3 = root(in1);
    let in4 = root(in2);
    let hypo = in3 + in4
    let hypo2 = Math.sqrt(hypo)
    let t08 = document.getElementById("t08")
    t08.innerText = `Base is ${in1}
    Perpendicular is ${in2}
    So, hypotenuse is ${hypo2}`
}

function showtask08() {
    let show08 = document.getElementById("task08")
    show08.innerText = `let in1 = +prompt("Enter the base of triangle:")
    let in2 = +prompt("Enter the perpendicular of triangle:")
    function root(square) {
        return square * square
    }
    let in3 = root(in1);
    let in4 = root(in2);
    let hypo = in3 + in4
    let hypo2 =  Math.sqrt(hypo)
    let t08 = document.getElementById("t08")
    t08.innerText = Base is $ {in1}
    Perpendicular is $ {in2}
    So, hypotenuse is $ {hypo2}`
}

// task 09

function task09() {
    let width = +prompt("Enter Width of rectangular")
    let height = +prompt("Enter height of rectangular")
    function area(w, h) {
        return w * h
    }
    let area2 = area(width, height)
    let t09 = document.getElementById("t09")
    t09.innerText = `Width of rectangular: ${width}
    Height of rectangular: ${height}
    So, the area of rectangular: ${area2}`
}

function showtask09() {
    let show09 = document.getElementById("task09")
    show09.innerText = `let width = +prompt("Enter Width of rectangular") 
    let height = +prompt("Enter height of rectangular") 
    function area(w, h) {
        return w * h
    }
    let area2 = area(width, height)
    let t09 = document.getElementById("t09")
    t09.innerText = Width of rectangular: $ {width}
    Height of rectangular: $ {height}
    So, the area of rectangular: $ {area2}`
}

// task 10

function task10() {
    let t10 = document.getElementById("t10")
    let words = prompt("enter a word:")
    let palindrome = []
    t10.innerText = `word entered: ${words}\n`
    for (let i = (words.length - 1); i >= 0; i--) {
        palindrome += words[i]
    }
    if (words === palindrome) {
        t10.innerText = `Word ${words} is palindrome`
    } else {
        t10.innerText = `Word ${words} is not palindrome`
    }
}

function showtask10() {
    let show10 = document.getElementById("task10")
    show10.innerText = `let t10 = document.getElementById("t10")
    let words = prompt("enter a word:")
    let palindrome = []
    t10.innerText = word entered: $ {words}
    for (let i = (words.length - 1); i >= 0; i--) {
        palindrome += words[i]
    }
    if (words === palindrome) {
        t10.innerText = Word $ {words} is palindrome
    } else {
        t10.innerText = Word $ {words} is not palindrome
    }`
}

// task 11

function task11() {
    let t11 = document.getElementById("t11")
    let str = prompt("Enter your string:")
    t11.innerText = `String entered: ${str}\n`
    let array = str.split(" ")
    for (let i = 0; i < array.length; i++) {
        let word = array[i]
        word = word.toLowerCase()
        let letter = word[0]
        letter = letter.toUpperCase()
        word = letter + word.slice(1, word.length)
        array[i] = word
    }
    str = array.join(" ")
    t11.innerText += `Capitalized String: ${str}`
}

function showtask11() {
    let show11 = document.getElementById("task11")
    show11.innerText = `let t11 = document.getElementById("t11")
    let str = prompt("Enter your string:")
    t11.innerText = String entered: $ {str}
    let array = str.split(" ")
    for (let i = 0; i < array.length; i++) {
        let word = array[i]
        word = word.toLowerCase()
        let letter = word[0]
        letter = letter.toUpperCase()
        word = letter + word.slice(1, word.length)
        array[i] = word
    }
    str = array.join(" ")
    t11.innerText += Capitalized String: $ {str}`
}

// task 12

function task12() {
    let t12 = document.getElementById("t12")
    let str = prompt("Enter your string:")
    t12.innerText = `String entered: ${str}\n`
    let array = str.split(" ")
    let lenghti = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > lenghti) {
            lenghti = array[i].length
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i].length === lenghti) {
            t12.innerText += `The largest word in string: ${array[i]}`
        }
    }
}

function showtask12() {
    let show12 = document.getElementById("task12")
    show12.innerText = `let t12 = document.getElementById("t12")
    let str = prompt("Enter your string:")
    t12.innerText = String entered: $ {str}
    let array = str.split(" ")
    let lenghti = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > lenghti) {
            lenghti = array[i].length
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i].length === lenghti) {
            t12.innerText += The largest word in string: $ {array[i]}
        }
    }`
}

// task 13

function task13() {
    let t13 = document.getElementById("t13")
    let str = prompt("Enter your string:")
    let letter = prompt("Enter a letter you want to find:")
    str = str.toLowerCase()
    letter = letter.toLowerCase()
    let count = 0
    t13.innerText = `String entered: ${str}\n`
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++
        }
    }
    t13.innerText += `The occurrance of ${letter} in above string is ${count}`
}

function showtask13() {
    let show13 = document.getElementById("task13")
    show13.innerText = `let t13 = document.getElementById("t13")
    let str = prompt("Enter your string:")
    let letter = prompt("Enter a letter you want to find:")
    str = str.toLowerCase()
    letter = letter.toLowerCase()
    let count = 0
    t13.innerText = String entered: $ {str}
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++
        }
    }
    t13.innerText += The occurrance of $ {letter} in above string is $ {count}`
}

// task 14

let radius

function task14() {
    radius = +prompt("Enter the radious of circle")
    let t14 = document.getElementById("t14")
    let pie = 3.14
    let circlearea
    t14.innerHTML = `Radius of circle is: ${radius}
    <br>Pie is = 3.14
    <br><button type="button" class="btn btn-success" onclick="cirarea()"><b>Calculate area of circle</b></button>
    <button type="button" class="btn btn-success" onclick="circum()"><b>Calculate circumference of circle</b></button>
    <div id="task014"></div>`
    console.log(circlearea)
}

function cirarea() {
    let task014 = document.getElementById("task014")
    let cirar = Math.PI * (radius * radius)
    cirar = cirar.toFixed(2)
    task014.innerText = `The Area of a circle is ${cirar}` 
}

function circum() {
    let task014 = document.getElementById("task014")
    let cirar = 2 * Math.PI * radius
    cirar = cirar.toFixed(2)
    task014.innerText = `The Area of a circle is ${cirar}` 
}

function showtask14() {
    let show14 = document.getElementById("task14")
    show14.innerText = `function task14() {
    radius = +prompt("Enter the radious of circle")
    let t14 = document.getElementById("t14")
    let pie = 3.14
    let circlearea
    t14.innerHTML = Radius of circle is: $ {radius}
    <br>Pie is = 3.14
    <br><button type="button" class="btn btn-success" onclick="cirarea()"><b>Calculate area of circle</b></button>
    <button type="button" class="btn btn-success" onclick="circum()"><b>Calculate circumference of circle</b></button>
    <div id="task014"></div>
    console.log(circlearea)
}

function cirarea() {
    let task014 = document.getElementById("task014")
    let cirar = Math.PI * (radius * radius)
    cirar = cirar.toFixed(2)
    task014.innerText = The Area of a circle is $ {cirar}
}

function circum() {
    let task014 = document.getElementById("task014")
    let cirar = 2 * Math.PI * radius
    cirar = cirar.toFixed(2)
    task014.innerText = The Area of a circle is $ {cirar}
}`
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
    let t09 = document.getElementById("t09")
    t09.innerText = ``
    t09.innerHTML = ``
    let t10 = document.getElementById("t10")
    t10.innerText = ``
    t10.innerHTML = ``
    let t11 = document.getElementById("t11")
    t11.innerText = ``
    t11.innerHTML = ``
    let t12 = document.getElementById("t12")
    t12.innerText = ``
    t12.innerHTML = ``
    let t13 = document.getElementById("t13")
    t13.innerText = ``
    t13.innerHTML = ``
    let t14 = document.getElementById("t14")
    t14.innerText = ``
    t14.innerHTML = ``
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
}

// the end