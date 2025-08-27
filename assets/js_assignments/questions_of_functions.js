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
    let show02 = document.getElementById("task02");
    show02.innerText = `let str = prompt("Enter your string");
    let t02 = document.getElementById("t02");
    t02.innerText = "";
    for (let i = (str.length - 1); i >= 0; i--) {
    t02.innerText += $ {str[i]};
    }`;
}

// task 03

function task03() {
    let array = []
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
    t03.innerText = `Array entered: [${array}]
    Largest in array: ${big}`
}

function showtask03() {
    let show03 = document.getElementById("task03")
    show03.innerText = `let array
    let big = 0
    for (let i = 0; i < 5; i++) {
        array.push(+prompt(Enter number $ {i + 1}))
    }
    for (let i = 0; i < array.length; i++) {
        if (big < array[i]) {
            big = array[i]
        }
    }
    let t03 = document.getElementById("t03")
    t03.innerText = Array entered: [$ {array}]
    Largest in array: $ {big}`
}

// task 04

function task04() {
    let str = prompt("Enter your string for vowels counts")
    str = str.toLowerCase()
    let count = 0
    let vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < str.length; i++) {
        let check = str[i]
        for (let j = 0; j < vowels.length; j++) {
            if (check === vowels[j]) {
                count++
            }
        }
    }
    let t04 = document.getElementById("t04")
    t04.innerText = `String entered: ${str}
    Number of vowels: ${count}`
}

function showtask04() {
    let show04 = document.getElementById("task04")
    show04.innerText = `let str = prompt("Enter your string for vowels counts")
    str = str.toLowerCase()
    let count = 0
    let vowels = ["a","e","i","o","u"]
    for (let i = 0; i < str.length; i++) {
        let check = str[i]
        for (let j = 0; j < vowels.length; j++) {
            if (check === vowels[j]) {
                count++
            }
        }
    }
    let t04 = document.getElementById("t04")
    t04.innerText = String entered: $ {str}
    Number of vowels: $ {count}`
}

// task 05

function task05() {
    let array = []
    let array2 = [];
    for (let i = 0; i < 5; i++) {
        array.push(+prompt(`Enter number ${i + 1}`))
    }
    for (let j = 0; j < array.length; j++) {
        let check = array[j];
        let dup = false;
        for (let k = 0; k < array2.length; k++) {
            if (array2[k] === check) {
                dup = true;
                break;
            }
        }
        if (!dup) {
            array2.push(check);
        }
    }
    let t05 = document.getElementById("t05");
    t05.innerText = `Array entered: [${array}]
    After duplicate removal: [${array2}]`;
}

function showtask05() {
    let show05 = document.getElementById("task05")
    show05.innerText = `let array = [1, 2, 50, 20, 2];
    let array2 = [];
    for (let j = 0; j < array.length; j++) {
        let check = array[j];
        let dup = false;
        for (let k = 0; k < array2.length; k++) {
            if (array2[k] === check) {
                dup = true;
                break;
            }
        }
        if (!dup) {
            array2.push(check);
        }
    }
    let t05 = document.getElementById("t05");
    t05.innerText = Array entered: [$ {array}]
    After duplicate removal: [$ {array2}]`
}

// task 06

function task06() {
    let str = prompt("Enter your string")
    str = str.split(" ")
    let done = []
    for (let i = 0; i < str.length; i++) {
        let check = str[i]
        check = check.toLowerCase()
        check = check.charAt(0).toUpperCase() + check.slice(1)
        done.push(check)
    }
    str = str.join(" ");
    done = done.join(" ");
    let t06 = document.getElementById("t06")
    t06.innerText = `String Entered: ${str}
    after capitalization: ${done}`
}

function showtask06() {
    let show06 = document.getElementById("task06")
    show06.innerText = `let str = prompt("Enter your string")
    str = str.split(" ")
    let done = []
    for (let i = 0; i < str.length; i++) {
        let check = str[i]
        check = check.toLowerCase()
        check = check.charAt(0).toUpperCase() + check.slice(1)
        done.push(check)
    }
    str = str.join(" ");
    done = done.join(" ");
    let t06 = document.getElementById("t06")
    t06.innerText = String Entered: $ {str}
    after capitalization: $ {done}`
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