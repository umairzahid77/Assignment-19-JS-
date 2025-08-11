// task 01

let students = []

function showtask01() {
    let show01 = document.getElementById("task01")
    show01.innerText = `let students = []`
}

// task 02

let studentsnames = {
    stdname: "",
    stdid: ""
}

function showtask02() {
    let show02 = document.getElementById("task02")
    show02.innerText = `let studentsnames = {
    stdname: "",
    stdid: ""
}`
}

// task 03

let strings = String["apple", "banana", "cherry", "date", "mango"];

function showtask03() {
    let show03 = document.getElementById("task03")
    show03.innerText = `let strings = String["apple", "banana", "cherry", "date", "mango"];`
}

// task 04

let numbers = Number[21, 41, 111, 313, 786];

function showtask04() {
    let show04 = document.getElementById("task04")
    show04.innerText = `let numbers = Number[21, 41, 111, 313, 786];`
}

// task 05

let booleans = Boolean[true, false];

function showtask05() {
    let show05 = document.getElementById("task05")
    show05.innerText = `let booleans = Boolean[true, false];`
}

// task 06

let mixedArray = ["apple", "banana", "cherry", "date", "mango", 21, 41, 111, 313, 786, true, false];

function showtask06() {
    let show06 = document.getElementById("task06")
    show06.innerText = `let mixedArray = ["apple", "banana", "cherry", "date", "mango", 21, 41, 111, 313, 786, true, false];`
}

// task 07

function task07() {
    let edu = ["Middle", "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
    let t07 = document.getElementById("t07")
    t07.innerText = `Qualification:
    ${edu[0]}
    ${edu[1]}
    ${edu[2]}
    ${edu[3]}
    ${edu[4]}
    ${edu[5]}
    ${edu[6]}
    ${edu[7]}
    ${edu[8]}`
}

function showtask07() {
    let show07 = document.getElementById("task07")
    show07.innerText = `let edu = ["Middle", "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
    let t07 = document.getElementById("t07")
    t07.innerText = Qualification:
    $ {edu[0]}
    $ {edu[1]}
    $ {edu[2]}
    $ {edu[3]}
    $ {edu[4]}
    $ {edu[5]}
    $ {edu[6]}
    $ {edu[7]}
    $ {edu[8]}`
}

// task 08

function task08() {
    students.push("Michael", "John", "Tony")
    let scores = [320, 230, 480];
    let percent = 100;
    let t08 = document.getElementById("t08")
    t08.innerText = `Score of ${students[0]} is ${scores[0]}. Percentage: ${(scores[0] / (percent * 100))}
    Score of ${students[1]} is ${scores[1]}. Percentage: ${(scores[1] / (percent * 100))}
    Score of ${students[2]} is ${scores[2]}. Percentage: ${(scores[2] / (percent * 100))}`
}

function showtask08() {
    let show08 = document.getElementById("task08")
    show08.innerText = `students.push("Michael", "John", "Tony")
    let scores = [320, 230, 480];
    let percent = 100;
    let t08 = document.getElementById("t08")
    t08.innerText = Score of $ {students[0]} is $ {scores[0]}. Percentage: $ {(scores[0] / (percent * 100))}
    Score of $ {students[1]} is $ {scores[1]}. Percentage: $ {(scores[1] / (percent * 100))}
    Score of $ {students[2]} is $ {scores[2]}. Percentage: $ {(scores[2] / (percent * 100))}`
}

// task 09

let colorNames = ["Red", "Green", "Blue"];
let t09 = document.getElementById("t09")
function task09() {
    t09.innerHTML = `<div class="divnext">${colorNames}<button type="button" class="next" onclick="task09_1()">Next</button></div>`
}
function task09_1() {
    colorNames.unshift(prompt("Enter a color to add at the beginning:"));
    t09.innerHTML += `<div class="divnext">${colorNames}<button type="button" class="next" onclick="task09_2()">Next</button></div>`
}
function task09_2() {
    colorNames.push(prompt("Enter a color to add at the end:"));
    t09.innerHTML += `<div class="divnext">${colorNames}<button type="button" class="next" onclick="task09_3()">Next</button></div>`
}
function task09_3() {
    colorNames.unshift(" Pink", " Yellow");
    t09.innerHTML += `<div class="divnext">${colorNames}<button type="button" class="next" onclick="task09_4()">Next</button></div>`
}
function task09_4() {
    colorNames.shift();
    t09.innerHTML += `<div class="divnext">${colorNames}<button type="button" class="next" onclick="task09_5()">Next</button></div>`
}
function task09_5() {
    colorNames.pop();
    t09.innerHTML += `<div class="divnext">${colorNames}<button type="button" class="next" onclick="task09_6()">Next</button></div>`
}
function task09_6() {
    let index = +prompt("Enter the index at which you want to add a color:")
    colorNames.splice(index, 0, prompt("Enter a color to add at index " + index + ":"));
    t09.innerHTML += `<div class="divnext">${colorNames}</div>`
}
function task09_7() {
    let indexdel = +prompt("Enter the index at which you want to delete color:")
    colorNames.splice(index, +prompt("Enter a amount to delete colors at index " + indexdel + ":"));
    t09.innerHTML += `<div class="divnext">${colorNames}<button type="button" class="next" onclick="task09_2()">Next</button></div>`
}

function showtask09() {
    let show09 = document.getElementById("task09")
    show09.innerText = `let colorNames = ["Red", "Green", "Blue"];
    let t09 = document.getElementById("t09")
    t09.innerHTML = <div class="divnext">$ {colorNames}<button type="button" class="next" onclick="task09_1()">Next</button></div>
    colorNames.unshift(prompt("Enter a color to add at the beginning:"));
    t09.innerHTML += <div class="divnext">$ {colorNames}<button type="button" class="next" onclick="task09_2()">Next</button></div>
    colorNames.push(prompt("Enter a color to add at the end:"));
    t09.innerHTML += <div class="divnext">$ {colorNames}<button type="button" class="next" onclick="task09_3()">Next</button></div>
    colorNames.unshift(" Pink", " Yellow");
    t09.innerHTML += <div class="divnext">$ {colorNames}<button type="button" class="next" onclick="task09_4()">Next</button></div>
    colorNames.shift();
    t09.innerHTML += <div class="divnext">$ {colorNames}<button type="button" class="next" onclick="task09_5()">Next</button></div>
    colorNames.pop();
    t09.innerHTML += <div class="divnext">$ {colorNames}<button type="button" class="next" onclick="task09_6()">Next</button></div>
    let index = +prompt("Enter the index at which you want to add a color:")
    colorNames.splice(index, 0, prompt("Enter a color to add at index " + index + ":"));
    t09.innerHTML += <div class="divnext">$ {colorNames}</div>
    let indexdel = +prompt("Enter the index at which you want to delete color:")
    colorNames.splice(index, +prompt("Enter a amount to delete colors at index " + indexdel + ":"));
    t09.innerHTML += <div class="divnext">$ {colorNames}<button type="button" class="next" onclick="task09_2()">Next</button></div>`
}

// task 10

function task10() {
    let edu = ["Middle", "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
    let t10 = document.getElementById("t10")
    t10.innerText = `Array before sorting:
    ${edu}
    `
    edu.sort();
    t10.innerText += `Array after sorting:
    ${edu}`
}

function showtask10() {
    let show10 = document.getElementById("task10")
    show10.innerText = ` let edu = ["Middle", "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
    let t10 = document.getElementById("t10")
    t10.innerText = Array before sorting:
    $ {edu}
    edu.sort();
    t10.innerText += Array after sorting:
    $ {edu}`
}

// task 11

function task11() {
    let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    let t11 = document.getElementById("t11")
    t11.innerText = `${cities}`
    let selectedCities = cities.slice(1, 4);
    t11.innerText += `${selectedCities}`
}

function showtask11() {
    let show11 = document.getElementById("task11")
    show11.innerText = `let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    let t11 = document.getElementById("t11")
    t11.innerText = $ {cities}
    let selectedCities = cities.slice(1, 4);
    t11.innerText += $ {selectedCities}`
}

// task 12

function task12() {
    let arr = ["This", "is", "my", "cat"];
    let t12 = document.getElementById("t12")
    t12.innerText = `${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]}`
    let str = arr.join(" ");
    t12.innerText += `${str}`
}

function showtask12() {
    let show12 = document.getElementById("task12")
    show12.innerText = `let arr = ["This", "is", "my", "cat"];
    let t12 = document.getElementById("t12")
    t12.innerText = $ {arr[0]} $ {arr[1]} $ {arr[2]} $ {arr[3]}
    let str = arr.join(" ");
    t12.innerText += $ {str}`
}

// task 13

function task13() {
    let devices = [];
    let t13 = document.getElementById("t13")
    for (let i = 0; i < 5; i++) {
        devices[i] = prompt("Enter device name to store in array at index " + i);
        t13.innerText += `${devices[i]}`
    }
}

function showtask13() {
    let show13 = document.getElementById("task13")
    show13.innerText = `let devices = [];
    let t13 = document.getElementById("t13")
    for (let i = 0; i < 5; i++) {
        devices[i] = prompt("Enter device name to store in array at index " + i);
        t13.innerText += $ {devices[i]}
    }`
}

// task 14

function task14() {
    let devices = [];
    let t14 = document.getElementById("t14")
    for (let i = 0; i < 5; i++) {
        devices[i] = prompt("Enter device name to store in array");
    }
    for (let i = (devices.length - 1); i >= 0; i--) {
        t14.innerText += `${devices[i]}\n`
    }
}

function showtask14() {
    let show14 = document.getElementById("task14")
    show14.innerText = `let devices = [];
    let t14 = document.getElementById("t14")
    for (let i = 0; i < 5; i++) {
        devices[i] = prompt("Enter device name to store in array");
    }
    for (let i = (devices.length - 1); i >= 0; i--) {
        t14.innerText += $ {devices[i]}
    }`
}

// task 15

function task15() {
    let menufacturer = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
    let t15 = document.getElementById("t15")
    t15.innerHTML = `<select id="select" class="form-select" aria-label="Default select example">
    <option selected>Select Menufacturers</option></select>`
    let select = document.getElementById("select")
    for (let i = 0; i < menufacturer.length; i++) {
        select.innerHTML += `<option value = "${i + 1}" >${menufacturer[i]}</option>`
    }
}

function showtask15() {
    let show15 = document.getElementById("task15")
    show15.innerText = `let menufacturer = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
    let t15 = document.getElementById("t15")
    t15.innerHTML = <select id="select" class="form-select" aria-label="Default select example">
    <option selected>Select Menufacturers</option></select>
    let select = document.getElementById("select")
    for (let i = 0; i < menufacturer.length; i++) {
        select.innerHTML += <option value = "$ {i + 1}" >$ {menufacturer[i]}</option>
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
    let t15 = document.getElementById("t15")
    t15.innerText = ``
    t15.innerHTML = ``
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
}

// the end