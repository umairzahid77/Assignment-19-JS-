// task 1

var num1 = +prompt("Enter your number: ")
document.write("<h2>Result:</h2>")
console.log ("Result:")
document.write("<table><tr><td>The Value of a is: </td><td> " + num1 + "</td></tr>")
console.log ("The Value of a is: " + num1)
document.write("<tr><td>....................................</td></tr>")
console.log ("The Value of ++a is: " + ++num1)
document.write("<tr><td>The Value of ++a is: </td><td> " + ++num1 + "</td></tr>")
console.log ("Now the Value of a is: " + num1)
document.write("<tr><td>Now the Value of a is: </td><td> " + num1 + "</td></tr>")
console.log ("The Value of a++ is: " + num1++)
document.write("<tr><td>The Value of a++ is: </td><td> " + num1++ + "</td></tr>")
console.log ("Now the Value of a is: " + num1)
document.write("<tr><td>Now the Value of a is: </td><td> " + num1 + "</td></tr>")
console.log ("The Value of --a is: " + --num1)
document.write("<tr><td>The Value of --a is: </td><td> " + --num1 + "</td></tr>")
console.log ("Now the Value of a is: " + num1)
document.write("<tr><td>Now the Value of a is: </td><td> " + num1 + "</td></tr>")
console.log ("The Value of a-- is: " + num1--)
document.write("<tr><td>The Value of a-- is: </td><td> " + num1-- + "</td></tr>")
console.log ("Now the Value of a is: " + num1)
document.write("<tr><td>Now the Value of a is: </td><td> " + num1 + "</td></tr></table>")

// task 2

var a = num1
var b = +prompt("Enter your second number:")
console.log ("The Value of a is: " + a)
document.write("<br><br>The Value of a is: " + a)
console.log ("The Value of b is: " + b)
document.write("<br>The Value of b is: " + b)
console.log ("Result:")
document.write("<h2>Result:</h2>")
console.log ("--a = " + --a)
document.write("<table><tr><td>--a </td><td> = " + --a + "</td></tr>")
console.log ("--b = " + --b)
document.write("<tr><td>--b </td><td> = " + --b + "</td></tr>")
console.log ("--a - --b = " + (--a - --b))
document.write("<tr><td>--a - --b </td><td> = " + (--a - --b) + "</td></tr>")
console.log ("--a - --b + ++b = " + ((--a - --b) + ++b))
document.write("<tr><td>--a - --b + ++b </td><td> = " + ((--a - --b) + ++b) + "</td></tr>")
console.log ("--a - --b + ++b + b-- = " + (((--a - --b) + ++b) + b--))
document.write("<tr><td>--a - --b + ++b + b-- </td><td> = " + (((--a - --b) + ++b) + b--) + "</td></tr></table>")

// task 3

var name = prompt("Enter your name:")
console.log ("Welcome " + name + "! Have a nice day!");
document.write("<h2>Welcome " + name + "! Have a nice day!</h2>");

// task 5

var num7 = 1
var num8
if (num1 === 0) {
    num8 = 5
} else {
    num8 = num1
}
console.log ("Table of " + num1 + "")
document.write("<h2>Table of " + num1 + "</h2>")
console.log (num8 + " x " + num7 + " = " + num8 * num7)
document.write("<table><tr><td>" + num8 + " x " + num7 + " </td><td> = " + num8 * num7 + "</td></tr>")
num7++
console.log (num8 + " x " + num7 + " = " + num8 * num7)
document.write("<tr><td>" + num8 + " x " + num7 + " </td><td> = " + num8 * num7 + "</td></tr>")
num7++
console.log (num8 + " x " + num7 + " = " + num8 * num7)
document.write("<tr><td>" + num8 + " x " + num7 + " </td><td> = " + num8 * num7 + "</td></tr>")
num7++
console.log (num8 + " x " + num7 + " = " + num8 * num7)
document.write("<tr><td>" + num8 + " x " + num7 + " </td><td> = " + num8 * num7 + "</td></tr>")
num7++
console.log (num8 + " x " + num7 + " = " + num8 * num7)
document.write("<tr><td>" + num8 + " x " + num7 + " </td><td> = " + num8 * num7 + "</td></tr>")
num7++
console.log (num8 + " x " + num7 + " = " + num8 * num7)
document.write("<tr><td>" + num8 + " x " + num7 + " </td><td> = " + num8 * num7 + "</td></tr>")
num7++
console.log (num8 + " x " + num7 + " = " + num8 * num7)
document.write("<tr><td>" + num8 + " x " + num7 + " </td><td> = " + num8 * num7 + "</td></tr>")
num7++
console.log (num8 + " x " + num7 + " = " + num8 * num7)
document.write("<tr><td>" + num8 + " x " + num7 + " </td><td> = " + num8 * num7 + "</td></tr>")
num7++
console.log (num8 + " x " + num7 + " = " + num8 * num7)
document.write("<tr><td>" + num8 + " x " + num7 + " </td><td> = " + num8 * num7 + "</td></tr>")
num7++
console.log (num8 + " x " + num7 + " = " + num8 * num7)
document.write("<tr><td>" + num8 + " x " + num7 + " </td><td> = " + num8 * num7 + "</td></tr></table>")

// task 6

console.log ("Mark Sheet");
var totalMarks = 100
var subject1 = prompt("Enter your first subject name:")
var marks1   = +prompt("Enter marks of " + subject1)
var percentage1 = marks1 / totalMarks * 100
console.log ("subject: " + subject1 + " obtained marks: " + marks1 + " total marks: " + totalMarks + " percentage: " + percentage1)
var subject2 = prompt("Enter your second subject name:")
var marks2   = +prompt("Enter marks of " + subject2)
var percentage2 = marks2 / totalMarks * 100
console.log ("subject: " + subject2 + " obtained marks: " + marks2 + " total marks: " + totalMarks + " percentage: " + percentage2)
var subject3 = prompt("Enter your third subject name:")
var marks3   = +prompt("Enter marks of " + subject3)
var percentage3 = marks3 / totalMarks * 100
console.log ("subject: " + subject3 + " obtained marks: " + marks3 + " total marks: " + totalMarks + " percentage: " + percentage3)
console.log ("Total Obtained: " + (marks1 + marks2 + marks3) + " Total marks: " + (totalMarks * 3 ) + " Total percentage: " + (percentage1 + percentage2 + percentage3))
document.write("<h3>Mark Sheet</h3>");
document.write("<table><tr><td> Subjects </td><th> " + subject1 + " </th><th> " + subject2 + " </th><th> " + subject3 + " </th><th> Total </th></tr>")
document.write("<tr><td> Total Marks </td><td> " + totalMarks + " </td><td> " + totalMarks + " </td><td> " + totalMarks + " </td><td> " + (totalMarks * 3) + " </td></tr>")
document.write("<tr><td> Obtained Marks </td><td> " + marks1 + " </td><td> " + marks2 + " </td><td> " + marks3 + " </td><td> " + (marks1 + marks2 + marks3) + " </td></tr>")
document.write("<tr><td> Percentage </td><td> " + percentage1 + " </td><td> " + percentage2 + " </td><td> " + percentage3 + " </td><td> " + (percentage1 + percentage2 + percentage3) + " </td></tr></table>");

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