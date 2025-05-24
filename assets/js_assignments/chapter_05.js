// task 1

var num1 = +prompt("Enter first number:")
var num2 = +prompt("Enter second number:")
var num3 = num1 + num2
document.write ("Addition of " + num1 + " and " + num2 + " is " + num3 + ".")

// task 2

var num4 = num1 - num2
document.write ("<br>Subtraction of " + num1 + " and " + num2 + " is " + num4 + ".")
var num5 = num1 * num2
document.write ("<br>Multiplication of " + num1 + " and " + num2 + " is " + num5 + ".")
var num6 = num1 / num2
document.write ("<br>Division of " + num1 + " and " + num2 + " is " + num6 + ".")

// task 3

var num7
document.write ("<br><br>Value after variable declaration is: " + num7)
num7 = num5
document.write ("<br>Initial Value: " + num7)
num7++
document.write ("<br>Value after increment is: " + num7)
num7 = num7 + num2
document.write ("<br>Value after addition of " + num2 + " is: " + num7)
num7--
document.write ("<br>Value after decrement is: " + num7)
num7 = num7 % num1
document.write ("<br>The remainder is: " + num7)

// task 4

num7 = num5 * num3
document.write ("<br><br>Cost of Movie Ticket is: " + num5)
document.write ("<br>Number of Movie Ticket is: " + num3)
document.write ("<br>Total cost to buy " + num3 + " tickets to a movie is: " + num7 + "PKR.")

// task 5

var num7 = 1
document.write ("<br><br><b>Table of </b>" + num1)
document.write ("<br>" + num1 + " x " + num7 + " = " + num1 * num7)
num7++
document.write ("<br>" + num1 + " x " + num7 + " = " + num1 * num7)
num7++
document.write ("<br>" + num1 + " x " + num7 + " = " + num1 * num7)
num7++
document.write ("<br>" + num1 + " x " + num7 + " = " + num1 * num7)
num7++
document.write ("<br>" + num1 + " x " + num7 + " = " + num1 * num7)
num7++
document.write ("<br>" + num1 + " x " + num7 + " = " + num1 * num7)
num7++
document.write ("<br>" + num1 + " x " + num7 + " = " + num1 * num7)
num7++
document.write ("<br>" + num1 + " x " + num7 + " = " + num1 * num7)
num7++
document.write ("<br>" + num1 + " x " + num7 + " = " + num1 * num7)
num7++
document.write ("<br>" + num1 + " x " + num7 + " = " + num1 * num7)

// task 6

num7 = (num1 - 32) * 5/9
document.write ("<br><br>" + num1 + "°C is " + num7 + "°F")
num7 = (num2 * 9/5) + 32
document.write ("<br>" + num2 + "°F is " + num7 + "°C")

// task 7

document.write ("<h3>Shopping Cart</h3>")
document.write ("Price of item 1 is " + num7)
document.write ("<br>Quantity of item 1 is " + num1)
document.write ("<br>Price of item 2 is " + num6)
document.write ("<br>Quantity of item 2 is " + num5)
var num8 = 50
document.write ("<br>Shipping charges is " + num8)
num8 = (num1 * num7) + (num2 * num6) + num8
document.write ("<br><br>Total cost of your order is " + num8)

// task 8

document.write ("<h3>Mark Sheet</h3>")
document.write ("Total Marks: " + num2)
document.write ("<br>Marks Obtain: " + num1)
num7 = (num1 / num2) * 100
document.write ("<br>Marks Obtain: " + num7 + "%")

// task 9

document.write ("<h3>Currency in PKR</h3>")
num3 = num1 * 104.80
num4 = num2 * 28
num5 = num3 + num4
document.write ("Total Currency in PKR: " + num5)

// task 10

num1 = ((num1 + 5) * 10 ) / 2
document.write ("<br><br>Numnber 1 is now: " + num1)

// task 11

document.write ("<h3>Age Calculator</h3>")
var birthyear = +prompt("Enter your birth year:")
var year = 2025
document.write ("Current Year: " + year)
document.write ("<br>Your Birth-year: " + birthyear)
var age = year - birthyear
document.write ("<br>Your age: " + age)

// task 12

document.write ("<h3>The Geometrizer</h3>")
var radious = num2
document.write ("Radious of a circle: " + radious)
var pie = 3.14
var circum = 2 * pie * radious
document.write ("<br>Circumference of a circle: " + circum)
var area = pie * radious * radious
document.write ("<br>Area of a circle: " + area)

// task 13

document.write ("<h3>The Lifetime Supply Calculator</h3>")
var snack = "Chocolate Chips"
document.write ("<br>Favrite Snack: " + snack)
document.write ("<br>Current Age: " + age)
var maxAge = 65
document.write ("<br>Estimated max age: " + maxAge)
document.write ("<br>Snacks per day: " + num2)
var totalSnacks = (maxAge - age) * num2 * 365
document.write ("<br>You will need " + totalSnacks + " " + snack + " to last you until the ripe old age of " + maxAge + ".")

// the end