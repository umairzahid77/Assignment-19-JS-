// task 1

function task01() {
    var welcome = "Welcome to Assignment # 01 of Java Script"
    alert(welcome);
}

// task 2

function task02() {
    var pass = prompt("Please enter your Password")
    var error = "Error! Please enter a valid password"
    alert(error)
}

// task 3

function task03() {
    var happy = "Welcome to JS Land..."
    var line_break = "\n"
    var code = " Happy Coding!"
    alert(happy + line_break + code)
}

// task 4

function task04() {
    var happy = "Welcome to JS Land..."
    var code = " Happy Coding!"
    alert(happy)
    alert(code)
}

// task 5

function task05() {
    var hello = "Hello... I Can run JS through my web brower's console"
    console.log(alert(hello))
}

// show code

function showtask01() {
    var show01 = document.getElementById("task01")
    show01.innerText = `var welcome = 'Welcome to Assignment # 01 of Java Script'
    alert(welcome)`
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
}

function showtask02() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = `var pass = prompt("Please enter your Password")
    var error = "Error! Please enter a valid password"
    alert(error)`
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
}

function showtask03() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = `var happy = "Welcome to JS Land..."
    var line_break = "\ n"
    var code = " Happy Coding!"
    alert(happy + line_break + code)`
    var show04 = document.getElementById("task04")
    show04.innerText = ``
    var show05 = document.getElementById("task05")
    show05.innerText = ``
}

function showtask04() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = `var happy = "Welcome to JS Land..."
    var code = "Happy Coding!"
    alert(happy)
    alert(code)`
    var show05 = document.getElementById("task05")
    show05.innerText = ``
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
    show05.innerText = `alert("Hello... I Can run JS through my web brower's console")
    (Hint: paste the above text in console)`
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
    show06.innerText = `<script>
        function task06() {
            var msg = "Alert from Inner HTML file";
            alert(msg);
        }
    </script>
    (Hint: paste the above text in HTML)`
}

// the end