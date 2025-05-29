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

// the end

