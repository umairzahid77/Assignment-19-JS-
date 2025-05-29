// task 1

var num1 = +prompt("Enter first number for addition:")
var num2 = +prompt("Enter second number for addition:")
var num3 = num1 + num2
console.log ("Sum of " + num1 + " and " + num2 + " is " + num3 + ".")
document.write ("Sum of " + num1 + " and " + num2 + " is " + num3 + ".")

// task 2

console.log ("Legal variable names:")
document.write ("<h3>Legal variable names:</h3>")
console.log ("num1, name, pass, e_mail, amount$")
document.write ("<br>num1<br>name<br>pass<br>e_mail<br>amount$")
console.log ("Illegal variable names")
document.write ("<h3>Illegal variable names</h3>")
console.log ("1num, .name, -pass, my e_mail, =amount")
document.write ("<br>1num<br>.name<br>-pass<br>my e_mail<br>=amount")

// task 3

console.log ("Rules for naming JS variables")
document.write ("<h3>Rules for naming JS variables</h3>")
console.log ("Variable names can only contain letters, numbers, dollarsigns and underscores.")
console.log ("For example $my_1stVariable.")
document.write ("<br>Variable names can only contain letters, numbers, dollarsigns and underscores. <b>For example</b> $my_1stVariable.")
console.log ("Variable must begin with a letter, dollarsign or underscore.")
console.log ("For example $name, _name or name.")
document.write ("<br>Variable must begin with a letter, dollarsign or underscore. <b>For example</b> $name, _name or name.")
console.log ("Variable names are case sensitive.")
console.log ("For example myVariable and myvariable are different variables.")
document.write ("<br>Variable names are case sensitive. <b>For example</b> myVariable and myvariable are different variables.")
console.log ("Variable names should not be JS keywords.")
console.log ("For example var, let, const, function, etc.")
document.write ("<br>Variable names should not be JS keywords. <b>For example</b> var, let, const, function, etc.")

// the end