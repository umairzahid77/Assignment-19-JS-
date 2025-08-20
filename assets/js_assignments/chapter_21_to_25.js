// task 01

function task01() {
    let firstname = prompt("Enter your first name: ")
    let secondname = prompt("Enter your second name: ")
    let name = firstname + " " + secondname
    let t01 = document.getElementById("t01")
    t01.innerText = `Welcome ${name}`
}

function showtask01() {
    let show01 = document.getElementById("task01")
    show01.innerText = `let firstname = prompt("Enter your first name: ")
    let secondname = prompt("Enter your second name: ")
    let name = firstname + " " + secondname
    let t01 = document.getElementById("t01")
    t01.innerText = Welcome $ {name}`
}

// task 02

function task02() {
    let mobile = prompt("Enter your favroit mobile phone:")
    let t02 = document.getElementById("t02")
    t02.innerText = `length of ${mobile} is ${mobile.length}`
}

function showtask02() {
    let show02 = document.getElementById("task02")
    show02.innerText = `let mobile = prompt("Enter your favroit mobile phone:")
    let t02 = document.getElementById("t02")
    t02.innerText = length of $ {mobile} is $ {mobile.length}`
}

// task 03

function task03() {
    let country = "Pakistani"
    let t03 = document.getElementById("t03")
    let letter = "n"
    for (let i = 0; i < country.length; i++) {
        if (country[i] === letter) {
            t03.innerText = `index of ${letter} in ${country} is ${i}`
        }
    }
}

function showtask03() {
    let show03 = document.getElementById("task03")
    show03.innerText = `let t03 = document.getElementById("t03")
    let country = "Pakistani"
    let letter = "n"
    for (let i = 0; i < name.length; i++) {
        if (country[i] === letter) {
            t03.innerHTML = index of $ {letter} in $ {country} is $ {i}
        }
    }`
}

// task 04

function task04() {
    let t04 = document.getElementById("t04")
    let word = "Hello World"
    let letter = "l"
    let index = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            index.push(i)
        }
    }
    t04.innerText = `The last index of ${letter} is ${index[index.length - 1]}`
}

function showtask04() {
    let show04 = document.getElementById("task04")
    show04.innerText = `let t04 = document.getElementById("t04")
    let word = "Hello World"
    let letter = "l"
    let index = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            index.push(i)
        }
    }
    t04.innerText = The last index of $ {letter} is $ {index[index.length - 1]}`
}

// task 05

function task05() {
    let country = "Pakistani"
    let t05 = document.getElementById("t05")
    t05.innerText = `Character at 3rd index in ${country} is ${country[3]}`
}

function showtask05() {
    let show05 = document.getElementById("task05")
    show05.innerText = `let country = "Pakistani"
    let t05 = document.getElementById("t05")
    t05.innerText = Character at 3rd index in $ {country} is $ {country[3]}`
}

// task 06

function task06() {
    let city = prompt("Enter your city name which includes 'abad' (like hyderabad)")
    let city2 = city[0]
    city2 = city2.toUpperCase()
    let city3 = city2 + city.slice(1, city.length - 4)
    city2 += city.slice(1, city.length)
    let t06 = document.getElementById("t06")
    city = city.toLowerCase();
    city = city.slice(city.length - 4, city.length)
    if (city3 === "Islam") {
        city3 = "Faisal"
        t06.innerText = `City Entered: ${city2}
        After replacement ${city3 + city}`
    } else if (city === "abad") {
        city = "Islam" + city
        t06.innerText = `City Entered: ${city2}
        After replacement ${city}`
    } else {
        alert("Invalid City")
    }
}

function showtask06() {
    let show06 = document.getElementById("task06")
    show06.innerText = `let city = prompt("Enter your city name which includes 'abad' (like hyderabad)")
    let city2 = city[0]
    city2 = city2.toUpperCase()
    let city3 = city2 + city.slice(1, city.length - 4)
    city2 += city.slice(1, city.length)
    let t06 = document.getElementById("t06")
    city = city.toLowerCase();
    city = city.slice(city.length - 4, city.length)
    if (city3 === "Islam") {
        city3 = "Faisal"
        t06.innerText = City Entered: $ {city2}
        After replacement $ {city3 + city}
    } else if (city === "abad") {
        city = "Islam" + city
        t06.innerText = City Entered: $ {city2}
        After replacement $ {city}
    } else {
        alert("Invalid City")
    }`
}

// task 07

function task07() {
    let message = "Ali and Sami are best friends. They play cricket and football together."
    let t07 = document.getElementById("t07")
    t07.innerText = `Original message: ${message}\n`
    message = message.replace("and", "&");
    t07.innerText += `After only 1st replacement: ${message}\n`
    message = message.replace(/and/g, "&");
    t07.innerText += `After all replacements: ${message}`
}

function showtask07() {
    let show07 = document.getElementById("task07")
    show07.innerText = `let message = "Ali and Sami are best friends. They play cricket and football together."
    let t07 = document.getElementById("t07")
    t07.innerText = Original message: $ {message}
    message = message.replace("and", "&");
    t07.innerText += After only 1st replacement: $ {message}
    message = message.replace(/and/g, "&");
    t07.innerText += After all replacements: $ {message}`
}

// task 08

function task08() {
    let t08 = document.getElementById("t08")
    let str = "472"
    t08.innerText = `Value: ${str}
    type: ${typeof str}`
    str = parseInt(str)
    t08.innerText += `\nValue: ${str}
    type: ${typeof str}`
}

function showtask08() {
    let show08 = document.getElementById("task08")
    show08.innerText = `let t08 = document.getElementById("t08")
    let str = "472"
    t08.innerText = Value: $ {str}
    type: $ {typeof str}
    str = parseInt(str)
    t08.innerText += Value: $ {str}
    type: $ {typeof str}`
}

// task 09

function task09() {
    let input = prompt("Enter a string")
    let input2 = input
    input = input.toUpperCase();
    let t09 = document.getElementById("t09")
    t09.innerText = `Input entered: ${input2}
    Input in uppercase: ${input}`
}

function showtask09() {
    let show09 = document.getElementById("task09")
    show09.innerText = `let input = prompt("Enter a string")
    let input2 = input
    input = input.toUpperCase();
    let t09 = document.getElementById("t09")
    t09.innerText = Input entered: $ {input2}
    Input in uppercase: $ {input}`
}

// task 10

function task10() {
    let t10 = document.getElementById("t10")
    let str = prompt("Enter your input")
    str = str.toLowerCase()
    let str2 = str[0]
    str2 = str2.toUpperCase()
    str2 += str.slice(1, str.length)
    t10.innerText = `Input Entered: ${str}
    Input in titlecase: ${str2}`
}

function showtask10() {
    let show10 = document.getElementById("task10")
    show10.innerText = `let t10 = document.getElementById("t10")
    let str = prompt("Enter your input")
    str = str.toLowerCase()
    let str2 = str[0]
    str2 = str2.toUpperCase()
    str2 += str.slice(1, str.length)
    t10.innerText = Input Entered: $ {str}
    Input in titlecase: $ {str2}`
}

// task 11

function task11() {
    let t11 = document.getElementById("t11")
    let num = 35.36;
    t11.innerText = `Number: ${num}`
    num = num.toString();
    num = num.replace(".", "");
    t11.innerText += `\nString: ${num}`
}

function showtask11() {
    let show11 = document.getElementById("task11")
    show11.innerText = `let t11 = document.getElementById("t11")
    let num = 35.36;
    t11.innerText = Number: $ {num}
    num = num.toString();
    num = num.replace(".", "");
    t11.innerText += String: $ {num}`
}

// task 12

function task12() {
    let user = prompt("Enter username:")
    let char = [",", ".", "@", "!"]
    let found = false
    let check = "";
    for (let i = 0; i < user.length; i++) {
        check = user[i]
        for (let j = 0; j < char.length; j++) {
            if (check === char[j]) {
                found = true;
                break;
            }
        }
    }
    let t12 = document.getElementById("t12")
    if (found === true) {
        t12.innerText = `Please enter a valid username.`
    } else {
        t12.innerText = `${user} is a valid username`
    }
}

function showtask12() {
    let show12 = document.getElementById("task12")
    show12.innerText = `let user = prompt("Enter username:")
    let char = [",", ".", "@", "!"]
    let found = false
    let check = "";
    for (let i = 0; i < user.length; i++) {
        check = user[i]
        for (let j = 0; j < char.length; j++) {
            if (check === char[j]) {
                found = true;
                break;
            }
        }
    }
    let t12 = document.getElementById("t12")
    if (found === true) {
        t12.innerText = Please enter a valid username.
    } else {
        t12.innerText = $ {user} is a valid username
    }`
}

// task 13

function task13() {
    let search = prompt("Enter an item to search in the bakery items: ")
    let items = ["cake", "apple pie", "cookie", "chips", "patties"]
    search = search.toLowerCase();
    let found = false
    let i2
    let t13 = document.getElementById("t13")
    if (search.length === 0) {
        t13.innerText = `Please re-enter your item to search.`
    } else {
        for (let i = 0; i < items.length; i++) {
            if (search === items[i]) {
                found = true;
                i2 = i
                break;
            }
        }
        if (found === true) {
            t13.innerText = `${search} is available at index ${i2} in our bakery.`
        } else {
            t13.innerText = `We are sorry, ${search} is not available in our bakery.`
        }
    }
}

function showtask13() {
    let show13 = document.getElementById("task13")
    show13.innerText = `let search = prompt("Enter an item to search in the bakery items: ")
    let items = ["cake", "apple pie", "cookie", "chips", "patties"]
    search = search.toLowerCase();
    let found = false
    let i2
    let t13 = document.getElementById("t13")
    if (search.length === 0) {
        t13.innerText = Please re-enter your item to search.
    } else {
        for (let i = 0; i < items.length; i++) {
            if (search === items[i]) {
                found = true;
                i2 = i
                break;
            }
        }
        if (found === true) {
            t13.innerText = $ {search} is available at index $ {i2} in our bakery.
        } else {
            t13.innerText = We are sorry, $ {search} is not available in our bakery.
        }
    }`
}

// task 14

function task14() {
    let password = prompt("Enter your password: ")
    let capLetter = false;
    let smallLetter = false;
    let number = false;
    let charCode
    let t14 = document.getElementById("t14")
    for (let i = 0; i < password.length; i++) {
        charCode = password[i].charCodeAt(0);
        if (charCode >= 48 && charCode <= 57) {
            number = true;
        } else if (charCode >= 65 && charCode <= 90) {
            capLetter = true;
        } else if (charCode >= 97 && charCode <= 122) {
            smallLetter = true;
        }
    }
    if (password.length < 6) {
        t14.innerText = `Password must be at least 6 characters long.`
    } else if (password[0].charCodeAt(0) >= 48 && password[0].charCodeAt(0) <= 57) {
        t14.innerText = `Password cannot start with a number.`
    } else if (capLetter === true && smallLetter === true && number === true) {
        t14.innerText = `Password is valid.`
    } else {
        t14.innerText = `Invalid Password, Password must contain at least one uppercase letter, one lowercase letter, and one number.`
    }
}

function showtask14() {
    let show14 = document.getElementById("task14")
    show14.innerText = `let password = prompt("Enter your password: ")
    let capLetter = false;
    let smallLetter = false;
    let number = false;
    let charCode
    let t14 = document.getElementById("t14")
    for (let i = 0; i < password.length; i++) {
        charCode = password[i].charCodeAt(0);
        if (charCode >= 48 && charCode <= 57) {
            number = true;
        } else if (charCode >= 65 && charCode <= 90) {
            capLetter = true;
        } else if (charCode >= 97 && charCode <= 122) {
            smallLetter = true;
        }
    }
    if (password.length < 6) {
        t14.innerText = Password must be at least 6 characters long.
    } else if (password[0].charCodeAt(0) >= 48 && password[0].charCodeAt(0) <= 57) {
        t14.innerText = Password cannot start with a number.
    } else if (capLetter === true && smallLetter === true && number === true) {
        t14.innerText = Password is valid.
    } else {
        t14.innerText = Invalid Password, Password must contain at least one uppercase letter, one lowercase letter, and one number.
    }`
}

// task 15

function task15() {
    let str = "University Of Karachi"
    let t15 = document.getElementById("t15")
    for (let i = 0; i < str.length; i++) {
        t15.innerText += `${str[i]}\n`
    }
}

function showtask15() {
    let show15 = document.getElementById("task15")
    show15.innerText = `let str = "University Of Karachi"
    let t15 = document.getElementById("t15")
    for (let i = 0; i < str.length; i++) {
        t15.innerText += $ {str[i]}
    }`
}

// task 16

function task16() {
    let t16 = document.getElementById("t16")
    let input = prompt("Enter a string")
    t16.innerText = `String entered: ${input}
    Last character of string: ${input[input.length - 1]}`
}

function showtask16() {
    let show16 = document.getElementById("task16")
    show16.innerText = `let t16 = document.getElementById("t16")
    let input = prompt("Enter a string")
    t16.innerText = String entered: $ {input}
    Last character of string: $ {input[input.length - 1]}`
}

// task 17

function task17() {
    let text = "The quick brown fox jumps over the lazy dog."
    let count = 0;
    text = text.toLowerCase();
    text = text.split(" ");
    let word = "the";
    for (let i = 0; i < text.length; i++) {
        if (text[i] === word) {
            count++;
        }
    }
    let t17 = document.getElementById("t17")
    t17.innerText = `There are ${count} occurrences of the word '${word}' in the text.`
}

function showtask17() {
    let show17 = document.getElementById("task17")
    show17.innerText = `let text = "The quick brown fox jumps over the lazy dog."
    let count = 0;
    text = text.toLowerCase();
    text = text.split(" ");
    let word = "the";
    for (let i = 0; i < text.length; i++) {
        if (text[i] === word) {
            count++;
        }
    }
    let t17 = document.getElementById("t17")
    t17.innerText = There are $ {count} occurrences of the word '$ {word}' in the text.`
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