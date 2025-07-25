// task 1

function task01() {
    var num1 = +prompt("Enter first number:")
    var num2 = +prompt("Enter second number:")
    var num3 = num1 + num2
    var t1 = document.getElementById("t1")
    t1.innerText = `Addition of ${num1} and ${num2} is ${(num1 + num2)}`
}

// task 2

function task02() {
    var num1 = +prompt("Enter first number:")
    var num2 = +prompt("Enter second number:")
    var t2 = document.getElementById("t2")
    t2.innerText = `Subtraction of ${num1} and ${num2} is ${(num1 - num2)}
    Multiplication of ${num1} and ${num2} is ${(num1 * num2)}
    Division of ${num1} and ${num2} is ${(num1 / num2)}`
}

// task 3

function task03() {
    var num1 
    var t3 = document.getElementById("t3")
    t3.innerText = `Value after variable declaration is: ${num1}`
    num1 = +prompt("Enter Value for variable:")
    t3.innerText = t3.innerText + `
    Initialized Value: ${num1}
    Value after increment is: ${num1++}
    Value after addition of 7 is: ${(num1 + 7)}
    Value after decrement is: ${num1--}
    The remainder is: ${num1 % 3}`
}

// task 4

function task04() {
    var ticket = 600
    var t4 = document.getElementById("t4")
    t4.innerText = `Cost of Movie Ticket is: ${ticket}PKR
    Number of Movie Ticket is: 5 
    Total cost to buy 5 tickets to a movie is: ${(ticket * 5)}PKR`
}

// task 5

function task05() {
    var num1 = +prompt("Enter a number for multiplication table")
    var num7 = 1
    var t5 = document.getElementById("t5")
    t5.innerText = `Multiplication Table of ${num1}
    ${num1} x ${num7} = ${(num1 * num7)}
    ${num1} x ${num7++} = ${(num1 * num7)}
    ${num1} x ${num7++} = ${(num1 * num7)}
    ${num1} x ${num7++} = ${(num1 * num7)}
    ${num1} x ${num7++} = ${(num1 * num7)}
    ${num1} x ${num7++} = ${(num1 * num7)}
    ${num1} x ${num7++} = ${(num1 * num7)}
    ${num1} x ${num7++} = ${(num1 * num7)}
    ${num1} x ${num7++} = ${(num1 * num7)}
    ${num1} x ${num7++} = ${(num1 * num7)}`
}

// task 6

function task06() {
    var temp = +prompt("Enter temprature in °C")
    var tempf = (temp - 32) * 5/9
    var t6 = document.getElementById("t6")
    var tempc = (tempf * 9/5) + 32
    t6.innerText = `${temp}°C is ${tempf}°F
    ${tempf}°F is ${tempc}°C`
}

// task 7

function task07() {
    var item1 = "Pent"
    var item2 = "Shirt"
    var price1 = 700
    var price2 = 500
    var qty1 = +prompt("Enter Quantity of " + item1)
    var qty2 = +prompt("Enter Quantity of " + item2)
    var dc = 300
    var total = (price1 * qty1) +  (price2 * qty2) + dc
    var t7 = document.getElementById("t7")
    t7.innerText = `Shopping Cart
    Price of ${item1} is ${price1}
    Quantity of ${item1} is ${qty1}
    Price of ${item2} is ${price2}
    Quantity of ${item2} is ${qty2}
    Shipping charges is ${dc}
    Total cost of your order is ${total}PKR`
}

// task 8

function task08() {
    var total = +prompt("Enter total marks")
    var obtain = +prompt("Enter obtain marks")
    var percent = (obtain / total) * 100
    var t8 = document.getElementById("t8")
    t8.innerText = `Mark Sheet
    Total Marks: ${total}
    Marks Obtain: ${obtain}
    Percentage: ${percent}`
}

// task 9

function task09() {
    var qdollar = 10
    var qriyal = 25
    var dollar = 104.80
    var riyal = 28
    var pkr = (qdollar * dollar) + (qriyal * riyal)
    var t9 = document.getElementById("t9")
    t9.innerText = `Rate of Dollar is ${dollar}PKR
    Quantity of Dollar is ${qdollar}
    Rate of Saudi Riyal is ${riyal}PKR
    Quantity of Saudi Riyal is ${qriyal}
    Currency in PKR is ${pkr}`
}

// task 10

function task10() {
    var num = +prompt("Enter a number")
    var t10 = document.getElementById("t10")
    t10.innerText = `Your Numnber is : ${num}
    ${num} + 5 = ${num = (num + 5)}
    Now the number is ${num}
    ${num} * 10 = ${num = (num * 10)}
    Now the number is ${num}
    ${num} / 2 = ${num = (num / 2)}`
}
    
// task 11

function task11() {
    var d = new Date()
    var currentyear = d.getFullYear()
    var byear = +prompt("Enter Your Birth Year")
    var age = currentyear - byear
    var t11 = document.getElementById("t11")
    t11.innerText = `Age Calculator
    Current Year: ${currentyear}
    Your Birth-year: ${byear}
    Your age: ${age}`
}

// task 12

function task12() {
    var rad = +prompt("Enter radious of a circle")
    var pie = 3.142
    var circum = (2 * pie) * rad
    var area =  pie * (rad * rad)
    var t12 = document.getElementById("t12")
    t12.innerText = `The Geometrizer
    Radious of a circle: ${rad}
    Circumference of a circle: ${circum}
    Area of a circle: ${area}`
}

// task 13

function task13() {
    var snack = prompt("Enter your favroite snack name")
    var age = +prompt("Enter your age")
    var maxage = +prompt("Enter your max age")
    var amount = +prompt("Enter estimated amount per day")
    var totalSnacks = (maxage - age) * (amount * 365)
    var t13 = document.getElementById("t13")
    t13.innerText = `The Lifetime Supply Calculator
    Favrite Snack: ${snack}
    Current Age: ${age}
    Estimated max age: ${maxage}
    Snacks per day: ${amount}
    You will need ${totalSnacks} ${snack} to last you until the ripe old age of ${maxage}.`    
}

// show code

function showtask01() {
    var show01 = document.getElementById("task01")
    show01.innerText = `var num1 = +prompt("Enter first number:")
    var num2 = +prompt("Enter second number:")
    var num3 = num1 + num2
    var t1 = document.getElementById("t1")
    t1.innerText = Addition of $ {num1} and $ {num2} is $ {(num1 + num2)}`
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
}

function showtask02() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = `var num1 = +prompt("Enter first number:")
    var num2 = +prompt("Enter second number:")
    var t2 = document.getElementById("t2")
    t2.innerText = Subtraction of $ {num1} and $ {num2} is $ {(num1 - num2)}
    Multiplication of $ {num1} and $ {num2} is $ {(num1 * num2)}
    Division of $ {num1} and $ {num2} is $ {(num1 / num2)}`
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
}

function showtask03() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = `var num1 
    var t3 = document.getElementById("t3")
    t3.innerText = 'Value after variable declaration is: $ {num1}'
    num1 = +prompt("Enter Value for variable:")
    t3.innerText = t3.innerText + '
    Initialized Value: $ {num1}
    Value after increment is: $ {num1++}
    Value after addition of 7 is: $ {(num1 + 7)}
    Value after decrement is: $ {num1--}
    The remainder is: $ {num1 % 3}'`
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
}

function showtask04() {
    var show01 = document.getElementById("task01")
    show01.innerText = ``
    var show02 = document.getElementById("task02")
    show02.innerText = ``
    var show03 = document.getElementById("task03")
    show03.innerText = ``
    var show04 = document.getElementById("task04")
    show04.innerText = `var ticket = 600
    var t4 = document.getElementById("t4")
    t4.innerText = "Cost of Movie Ticket is: $ {ticket}PKR
    Number of Movie Ticket is: 5 
    Total cost to buy 5 tickets to a movie is: $ {(ticket * 5)}PKR"`
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
    show05.innerText = `var num1 = +prompt("Enter a number for multiplication table")
    var num7 = 1
    var t5 = document.getElementById("t5")
    t5.innerText = 'Multiplication Table of $ {num1}
    $ {num1} x $ {num7} = $ {(num1 * num7)}
    $ {num1} x $ {num7++} = $ {(num1 * num7)}
    $ {num1} x $ {num7++} = $ {(num1 * num7)}
    $ {num1} x $ {num7++} = $ {(num1 * num7)}
    $ {num1} x $ {num7++} = $ {(num1 * num7)}
    $ {num1} x $ {num7++} = $ {(num1 * num7)}
    $ {num1} x $ {num7++} = $ {(num1 * num7)}
    $ {num1} x $ {num7++} = $ {(num1 * num7)}
    $ {num1} x $ {num7++} = $ {(num1 * num7)}
    $ {num1} x $ {num7++} = $ {(num1 * num7)}'`
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
    show06.innerText = `var temp = +prompt("Enter temprature in °C")
    var tempf = (temp - 32) * 5/9
    var t6 = document.getElementById("t6")
    var tempc = (tempf * 9/5) + 32
    t6.innerText = '$ {temp}°C is $ {tempf}°F
    $ {tempf}°F is $ {tempc}°C'`
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
    show07.innerText = `var item1 = "Pent"
    var item2 = "Shirt"
    var price1 = 700
    var price2 = 500
    var qty1 = +prompt("Enter Quantity of " + item1)
    var qty2 = +prompt("Enter Quantity of " + item2)
    var dc = 300
    var total = (price1 * qty1) +  (price2 * qty2) + dc
    var t7 = document.getElementById("t7")
    t7.innerText = 'Shopping Cart
    Price of $ {item1} is $ {price1}
    Quantity of $ {item1} is $ {qty1}
    Price of $ {item2} is $ {price2}
    Quantity of $ {item2} is $ {qty2}
    Shipping charges is $ {dc}
    Total cost of your order is $ {total}PKR'`
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
    show08.innerText = `var total = +prompt("Enter total marks")
    var obtain = +prompt("Enter obtain marks")
    var percent = (obtain / total) * 100
    var t8 = document.getElementById("t8")
    t8.innerText = 'Mark Sheet
    Total Marks: $ {total}
    Marks Obtain: $ {obtain}
    Percentage: $ {percent}'`
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
    show09.innerText = `var qdollar = 10
    var qriyal = 25
    var dollar = 104.80
    var riyal = 28
    var pkr = (qdollar * dollar) + (qriyal * riyal)
    var t9 = document.getElementById("t9")
    t9.innerText = 'Rate of Dollar is $ {dollar}PKR
    Quantity of Dollar is $ {qdollar}
    Rate of Saudi Riyal is $ {riyal}PKR
    Quantity of Saudi Riyal is $ {qriyal}
    Currency in PKR is $ {pkr}'`
    var show10 = document.getElementById("task10")
    show10.innerText = ``
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
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
    show10.innerText = `var num = +prompt("Enter a number")
    var t10 = document.getElementById("t10")
    t10.innerText = "Your Numnber is : $ {num}
    $ {num} + 5 = $ {num = (num + 5)}
    Now the number is $ {num}
    $ {num} * 10 = $ {num = (num * 10)}
    Now the number is $ {num}
    $ {num} / 2 = $ {num = (num / 2)}"`
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
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
    show10.innerText = `var d = new Date()
    var currentyear = d.getFullYear()
    var byear = +prompt("Enter Your Birth Year")
    var age = currentyear - byear
    var t11 = document.getElementById("t11")
    t11.innerText = "Age Calculator
    Current Year: $ {currentyear}
    Your Birth-year: $ {byear}
    Your age: $ {age}"`
    var show11 = document.getElementById("task11")
    show11.innerText = ``
    var show12 = document.getElementById("task12")
    show12.innerText = ``
    var show13 = document.getElementById("task13")
    show13.innerText = ``
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
    show12.innerText = `var rad = +prompt("Enter radious of a circle")
    var pie = 3.142
    var circum = (2 * pie) * rad
    var area =  pie * (rad * rad)
    var t12 = document.getElementById("t12")
    t12.innerText = "The Geometrizer
    Radious of a circle: $ {rad}
    Circumference of a circle: $ {circum}
    Area of a circle: $ {area}"`
    var show13 = document.getElementById("task13")
    show13.innerText = ``
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
    show13.innerText = `var snack = prompt("Enter your favroite snack name")
    var age = +prompt("Enter your age")
    var maxage = +prompt("Enter your max age")
    var amount = +prompt("Enter estimated amount per day")
    var totalSnacks = (maxage - age) * (amount * 365)
    var t13 = document.getElementById("t13")
    t13.innerText = "The Lifetime Supply Calculator
    Favrite Snack: $ {snack}
    Current Age: $ {age}
    Estimated max age: $ {maxage}
    Snacks per day: $ {amount}
    You will need $ {totalSnacks} $ {snack} to last you until the ripe old age of $ {maxage}."`
}

// the end