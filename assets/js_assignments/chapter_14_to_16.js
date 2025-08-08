// task 01

let students = []

// task 02


let studentsnames = {
    stdname: "",
    stdid: ""
}

// task 03

let strings = String["apple", "banana", "cherry", "date", "mango"];

// task 04

let numbers = Number[21, 41, 111, 313, 786];

// task 05

let booleans = Boolean[true, false];

// task 06

let mixedArray = ["apple", "banana", "cherry", "date", "mango", 21, 41, 111, 313, 786, true, false];

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

// task 09

let t09 = document.getElementById("t09")
t09.innerText = ``
function task09() {
    let colorNames = [" Red ", " Green", " Blue"];
    console.log(colorNames);
    // a
    colorNames.unshift(prompt("Enter a color to add at the beginning:"));
    console.log(colorNames);
    // b
    colorNames.push(prompt("Enter a color to add at the end:"));
    console.log(colorNames);
    // c
    colorNames.unshift(" Pink", " Yellow");
    console.log(colorNames);
    // d
    colorNames.shift();
    console.log(colorNames);
    // e
    colorNames.pop();
    console.log(colorNames);
    // f
    let index = +prompt("Enter the index at which you want to add a color:")
    colorNames.splice(index, 0, prompt("Enter a color to add at index " + index + ":"));
    console.log(colorNames);
    // g
    let indexdel = +prompt("Enter the index at which you want to delete color:")
    colorNames.splice(index, +prompt("Enter a amount to delete colors at index " + indexdel + ":"));
    console.log(colorNames);
}

// task 10


let t10 = document.getElementById("t10")
t10.innerText = ``
function task10() {
    console.log("Array before sorting: ");
    console.log(edu);
    console.log(mixedArray);
    edu.sort();
    mixedArray.sort();
    console.log("Array after sorting: ");
    console.log(edu);
    console.log(mixedArray);
}


// task 11

let t11 = document.getElementById("t11")
t11.innerText = ``
function task11() {
    let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    console.log(cities);
    let selectedCities = cities.slice(1, 4);
    console.log(selectedCities);
}

// task 12


let t12 = document.getElementById("t12")
t12.innerText = ``
function task12() {
    let arr = ["This", "is", "my", "cat"];
    console.log(arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3]);
    let str = arr.join(" ");
    console.log(str);
}

// task 13


let t13 = document.getElementById("t13")
t13.innerText = ``
function task13() {
    let devices = [];
    for (let i = 0; i < 5; i++) {
        devices[i] = prompt("Enter device name to store in array at index " + i);
        console.log(devices[i]);
    }
}

// task 14

let t14 = document.getElementById("t14")
t14.innerText = ``
function task14() {

    devices.reverse();
    console.log("Devices in reverse order:");
    console.log(devices)
}

// task 15


let t15 = document.getElementById("t15")
t15.innerText = ``
function task15() {
    console.log("Please help for task no 15");

}

// show code

function showtask01() {
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

function showtask02() {
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

function showtask03() {
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

function showtask04() {
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

function showtask08() {
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

function showtask09() {
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

function showtask10() {
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

function showtask11() {
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

function showtask12() {
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

function showtask13() {
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

function showtask14() {
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

function showtask15() {
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