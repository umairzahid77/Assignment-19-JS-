// task 01

var students = []

// task 02

var studentsnames = []

// task 03

var strings = String["apple", "banana", "cherry", "date", "mango"];

// task 04

var numbers = Number[21, 41, 111, 313, 786];

// task 05

var booleans = Boolean[true, false];

// task 06

var mixedArray = ["apple", "banana", "cherry", "date", "mango", 21, 41, 111, 313, 786, true, false];

// task 07

var edu = ["Middle", "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
console.log("Qualification");
document.write("<h3>Qualification</h3>");
console.log(edu[0]);
document.write(edu[0]);
console.log(edu[1]);
document.write("<br>" + edu[1]);
console.log(edu[2]);
document.write("<br>" + edu[2]);
console.log(edu[3]);
document.write("<br>" + edu[3]);
console.log(edu[4]);
document.write("<br>" + edu[4]);
console.log(edu[5]);
document.write("<br>" + edu[5]);
console.log(edu[6]);
document.write("<br>" + edu[6]);
console.log(edu[7]);
document.write("<br>" + edu[7]);
console.log(edu[8]);
document.write("<br>" + edu[8]);

// task 08

students.push("Michael", "John", "Tony")
var scores = [320, 230, 480];
var percent = 100;
console.log("Score of " + students[0] + " is " + scores[0] + ". Percentage: " + (scores[0] / percent * 100));
document.write("<br><br><table><tr><td>Score of " + students[0] + " </td><td> is " + scores[0] + ". </td><td> Percentage: " + (scores[0] / percent * 100) + "%</td></tr>");
console.log("Score of " + students[1] + " is " + scores[1] + ". Percentage: " + (scores[1] / percent * 100));
document.write("<tr><td>Score of " + students[1] + " </td><td> is " + scores[1] + ". </td><td> Percentage: " + (scores[1] / percent * 100) + "%</td></tr>");
console.log("Score of " + students[2] + " is " + scores[2] + ". Percentage: " + (scores[2] / percent * 100));
document.write("<tr><td>Score of " + students[2] + " </td><td> is " + scores[2] + ". </td><td> Percentage: " + (scores[2] / percent * 100) + "%</td></tr></table>");

// task 09

var colorNames = [" Red ", " Green", " Blue"];
console.log(colorNames);
document.write("<br>" + colorNames);
// a
colorNames.unshift(prompt("Enter a color to add at the beginning:"));
console.log(colorNames);
document.write("<br>" + colorNames);
// b
colorNames.push(prompt("Enter a color to add at the end:"));
console.log(colorNames);
document.write("<br>" + colorNames);
// c
colorNames.unshift(" Pink", " Yellow");
console.log(colorNames);
document.write("<br>" + colorNames);
// d
colorNames.shift();
console.log(colorNames);
document.write("<br>" + colorNames);
// e
colorNames.pop();
console.log(colorNames);
document.write("<br>" + colorNames);
// f
var index = +prompt("Enter the index at which you want to add a color:")
colorNames.splice(index, 0, prompt("Enter a color to add at index " + index + ":"));
console.log(colorNames);
document.write("<br>" + colorNames);
// g
var indexdel = +prompt("Enter the index at which you want to delete color:")
colorNames.splice(index, +prompt("Enter a amount to delete colors at index " + indexdel + ":"));
console.log(colorNames);
document.write("<br>" + colorNames);

// task 10

console.log("Array before sorting: ");
document.write("<h3>Array before sorting:</h3>");
console.log(edu);
document.write(edu);
console.log(mixedArray);
document.write("<br>" + mixedArray);
edu.sort();
mixedArray.sort();
console.log("Array after sorting: ");
document.write("<h3>Array after sorting:</h3>");
console.log(edu);
document.write(edu);
console.log(mixedArray);
document.write("<br>" + mixedArray);

// task 11

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
console.log(cities);
document.write("<br><br>" + cities);
var selectedCities = cities.slice(1, 4);
console.log(selectedCities);
document.write("<br>" + selectedCities);

// task 12

var arr = ["This", "is", "my", "cat"];
console.log(arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3]);
document.write("<br><br>" + arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3]);
var str = arr.join(" ");
console.log(str);
document.write("<br>" + str + "<br>");

// task 13

var devices = [];
for (var i = 0; i < 5; i++) {
    devices[i] = prompt("Enter device name to store in array at index " + i);
    console.log(devices[i]);
    document.write("<br>" + devices[i]);
}

// task 14

devices.reverse();
console.log("Devices in reverse order:");
document.write("<br><br>Devices in reverse order:<br>");
console.log(devices)
document.write(devices)

// task 15

console.log("Please help for task no 15");
document.write("<br><br>Please help for task no 15");

// task 01

function task01() {
}

// task 02

function task02() {
}

// task 03

function task03() {
}

// task 04

function task04() {
}

// task 05

function task05() {
}

// task 06

function task06() {
}

// task 07

function task07() {
}

// task 08

function task08() {
}

// task 09

function task09() {
}

// task 10

function task10() {
}

// task 11

function task11() {
}

// task 12

function task12() {
}

// task 13

function task13() {
}

// task 14

function task14() {
}

// task 15

function task15() {
}

// task 16

function task16() {
}

// task 17

function task17() {
}

// task 18

function task18() {
}

// task 19

function task19() {
}

// task 20

function task20() {
}

// show code

function showtask01() {
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
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask02() {
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
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask03() {
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
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask04() {
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
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
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
    show05.innerText = ``
    var show06 = document.getElementById("task06")
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
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
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask07() {
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
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask08() {
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
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask09() {
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
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask10() {
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
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask11() {
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
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask12() {
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
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask13() {
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
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask14() {
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
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask15() {
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
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask16() {
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
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask17() {
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
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask18() {
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
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask19() {
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
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

function showtask20() {
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
    show06.innerText = ``
    var show07 = document.getElementById("task07")
    show07.innerText = ``
    var show08 = document.getElementById("task08")
    show08.innerText = ``
    var show09 = document.getElementById("task09")
    show09.innerText = ``
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
    var show14 = document.getElementById("task14")
    show14.innerText = ``
    var show15 = document.getElementById("task15")
    show15.innerText = ``
    var show16 = document.getElementById("task16")
    show16.innerText = ``
    var show17 = document.getElementById("task17")
    show17.innerText = ``
    var show18 = document.getElementById("task18")
    show18.innerText = ``
    var show19 = document.getElementById("task19")
    show19.innerText = ``
    var show20 = document.getElementById("task20")
    show20.innerText = ``
}

// the end