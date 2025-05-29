// task 1

var num1 = +prompt("Enter first number:")
var num2 = +prompt("Enter second number:")
var num3 = num1 + num2
console.log ("Addition of " + num1 + " and " + num2 + " is " + num3 + ".")
document.write ("<table><tr><td>Addition </td><td> of " + num1 + " and " + num2 + " is " + num3 + ".</td></tr>")

// task 2

var num4 = num1 - num2
console.log ("Subtraction of " + num1 + " and " + num2 + " is " + num4 + ".")
document.write ("<tr><td>Subtraction </td><td> of " + num1 + " and " + num2 + " is " + num4 + ".</td></tr>")
var num5 = num1 * num2
console.log ("Multiplication of " + num1 + " and " + num2 + " is " + num5 + ".")
document.write ("<tr><td>Multiplication </td><td> of " + num1 + " and " + num2 + " is " + num5 + ".</td></tr>")
var num6 = num1 / num2
console.log ("Division of " + num1 + " and " + num2 + " is " + num6 + ".")
document.write ("<tr><td>Division </td><td> of " + num1 + " and " + num2 + " is " + num6 + ".</td></tr></table>")

// task 3

var num7
console.log ("Value after variable declaration is: " + num7)
document.write ("<br><table><tr><td>Value after variable declaration is: </td><td>" + num7 + "</td></tr>")
num7 = num5
console.log ("Initial Value: " + num7)
document.write ("<tr><td>Initial Value: </td><td> " + num7 + "</td></tr>")
num7++
console.log ("Value after increment is: " + num7)
document.write ("<tr><td>Value after increment is: </td><td> " + num7 + "</td></tr>")
num7 = num7 + num2
console.log ("Value after addition of " + num2 + " is: " + num7)
document.write ("<tr><td>Value after addition of " + num2 + " is: </td><td> " + num7 + "</td></tr>")
num7--
console.log ("Value after decrement is: " + num7)
document.write ("<tr><td>Value after decrement is: </td><td> " + num7 + "</td></tr>")
num7 = num7 % num1
console.log ("The remainder is: " + num7)
document.write ("<tr><td>The remainder is: </td><td> " + num7 + "</td></tr></table>")

// task 4

num7 = num5 * num3
console.log ("Cost of Movie Ticket is: " + num5 + "PKR")
document.write ("<br><table><tr><td>Cost of Movie Ticket is: </td><td> " + num5 + "PKR</td></tr>")
console.log ("Number of Movie Ticket is: " + num3)
document.write ("<tr><td>Number of Movie Ticket is: </td><td> " + num3 + "</td></tr>")
console.log ("Total cost to buy " + num3 + " tickets to a movie is: " + num7 + "PKR")
document.write ("<tr><td>Total cost to buy " + num3 + " tickets to a movie is: </td><td> " + num7 + "PKR.</td></tr></table>")

// task 5

var num7 = 1
console.log ("Table of " + num1)
document.write ("<br><table><b>Table of " + num1 + "</b>")
console.log (num1 + " x " + num7 + " = " + num1 * num7)
document.write ("<tr><td>" + num1 + " x " + num7 + " </td><td> = " + num1 * num7 + "</td></tr>")
num7++
console.log (num1 + " x " + num7 + " = " + num1 * num7)
document.write ("<tr><td>" + num1 + " x " + num7 + " </td><td> = " + num1 * num7 + "</td></tr>")
num7++
console.log (num1 + " x " + num7 + " = " + num1 * num7)
document.write ("<tr><td>" + num1 + " x " + num7 + " </td><td> = " + num1 * num7 + "</td></tr>")
num7++
console.log (num1 + " x " + num7 + " = " + num1 * num7)
document.write ("<tr><td>" + num1 + " x " + num7 + " </td><td> = " + num1 * num7 + "</td></tr>")
num7++
console.log (num1 + " x " + num7 + " = " + num1 * num7)
document.write ("<tr><td>" + num1 + " x " + num7 + " </td><td> = " + num1 * num7 + "</td></tr>")
num7++
console.log (num1 + " x " + num7 + " = " + num1 * num7)
document.write ("<tr><td>" + num1 + " x " + num7 + " </td><td> = " + num1 * num7 + "</td></tr>")
num7++
console.log (num1 + " x " + num7 + " = " + num1 * num7)
document.write ("<tr><td>" + num1 + " x " + num7 + " </td><td> = " + num1 * num7 + "</td></tr>")
num7++
console.log (num1 + " x " + num7 + " = " + num1 * num7)
document.write ("<tr><td>" + num1 + " x " + num7 + " </td><td> = " + num1 * num7 + "</td></tr>")
num7++
console.log (num1 + " x " + num7 + " = " + num1 * num7)
document.write ("<tr><td>" + num1 + " x " + num7 + " </td><td> = " + num1 * num7 + "</td></tr>")
num7++
console.log (num1 + " x " + num7 + " = " + num1 * num7)
document.write ("<tr><td>" + num1 + " x " + num7 + " </td><td> = " + num1 * num7 + "</td></tr></table>")

// task 6

num7 = (num1 - 32) * 5/9
console.log (num1 + "°C is " + num7 + "°F")
document.write ("<br><table><tr><td>" + num1 + "°C </td><td> is " + num7 + "°F.</td></tr>")
num7 = (num2 * 9/5) + 32
console.log (num2 + "°F is " + num7 + "°C")
document.write ("<tr><td>" + num2 + "°F </td><td> is " + num7 + "°C.</td></tr></table>")

// task 7

console.log ("Shopping Cart")
document.write ("<table><h3>Shopping Cart</h3>")
console.log ("Price of item 1 is " + num7)
document.write ("<tr><td>Price of item 1 is </td><td> " + num7 + "</td></tr>")
console.log ("Quantity of item 1 is " + num1)
document.write ("<tr><td>Quantity of item 1 is </td><td> " + num1 + "</td></tr>")
console.log ("Price of item 2 is " + num6)
document.write ("<tr><td>Price of item 2 is </td><td> " + num6 + "</td></tr>")
console.log ("Quantity of item 2 is " + num5)
document.write ("<tr><td>Quantity of item 2 is </td><td> " + num5 + "</td></tr>")
var num8 = 50
console.log ("Shipping charges is " + num8)
document.write ("<tr><td>Shipping charges is </td><td> " + num8 + "</td></tr>")
num8 = (num1 * num7) + (num2 * num6) + num8
console.log ("Total cost of your order is " + num8)
document.write ("<tr><td><br><b>Total cost of your order is </b></td><td><br><b> " + num8 + "</b></td></tr></table>")

// task 8

console.log ("Mark Sheet")
document.write ("<h3>Mark Sheet</h3>")
console.log ("Total Marks: " + num2)
document.write ("<table><tr><td>Total Marks: </td><td> " + num2 + "</td></tr>")
console.log ("Marks Obtain: " + num1)
document.write ("<tr><td>Marks Obtain: </td><td> " + num1 + "</td></tr>")
num7 = (num1 / num2) * 100
console.log ("Marks Obtain: " + num7 + "%")
document.write ("<tr><td>Marks Obtain: </td><td> " + num7 + "%</td></tr></table>")

// task 9

console.log ("Currency in PKR")
document.write ("<h3>Currency in PKR</h3>")
num3 = num1 * 104.80
num4 = num2 * 28
num5 = num3 + num4
console.log ("Total Currency in PKR: " + num5)
document.write ("Total Currency in PKR: " + num5)

// task 10

num1 = ((num1 + 5) * 10 ) / 2
console.log ("Numnber 1 is now: " + num1)
document.write ("<br><br>Numnber 1 is now: " + num1)

// task 11

console.log ("Age Calculator")
document.write ("<h3>Age Calculator</h3>")
var birthyear = +prompt("Enter your birth year:")
var year = 2025
console.log ("Current Year: " + year)
document.write ("<table><tr><td>Current Year: </td><td> " + year + "</td></tr>")
console.log ("Your Birth-year: " + birthyear)
document.write ("<tr><td>Your Birth-year: </td><td> " + birthyear + "</td></tr>")
var age = year - birthyear
console.log ("Your age: " + age)
document.write ("<tr><td>Your age: </td><td> " + age + "</td></tr></table>")

// task 12

console.log ("The Geometrizer")
document.write ("<h3>The Geometrizer</h3>")
var radious = num2
console.log ("Radious of a circle: " + radious)
document.write ("<table><tr><td>Radious of a circle: </td><td> " + radious + "</td></tr>")
var pie = 3.14
var circum = 2 * pie * radious
console.log ("Circumference of a circle: " + circum)
document.write ("<tr><td>Circumference of a circle: </td><td> " + circum + "</td></tr>")
var area = pie * radious * radious
console.log ("Area of a circle: " + area)
document.write ("<tr><td>Area of a circle: </td><td> " + area + "</td></tr></table>")

// task 13

console.log ("The Lifetime Supply Calculator")
document.write ("<h3>The Lifetime Supply Calculator</h3>")
var snack = "Chocolate Chips"
console.log ("Favrite Snack: " + snack)
document.write ("<table><tr><td>Favrite Snack: </td><td> " + snack + "</td></tr>")
console.log ("Current Age: " + age)
document.write ("<tr><td>Current Age: </td><td> " + age + "</td></tr>")
var maxAge = 65
console.log ("Estimated max age: " + maxAge)
document.write ("<tr><td>Estimated max age: </td><td> " + maxAge + "</td></tr>")
console.log ("Snacks per day: " + num2 + "")
document.write ("<tr><td>Snacks per day: </td><td> " + num2 + "</td></tr></table>")
var totalSnacks = (maxAge - age) * num2 * 365
console.log ("You will need " + totalSnacks + " " + snack + " to last you until the ripe old age of " + maxAge + ".")
document.write ("You will need " + totalSnacks + " " + snack + " to last you until the ripe old age of " + maxAge + ".")

// the end