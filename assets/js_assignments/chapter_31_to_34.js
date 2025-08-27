// task 01

function task01() {
    let t01 = document.getElementById("t01")
    let date = new Date();
    t01.innerText = `${date}`
}

function showtask01() {
    let show01 = document.getElementById("task01")
    show01.innerText = `let t01 = document.getElementById("t01")
    let date = new Date();
    t01.innerText = $ {date}`
}

// task 02

function task02() {
    let date = new Date();
    let today
    today = date.getMonth();
    if (today === 0) {
        alert("Current Month : January")
    } else if (today === 1) {
        alert("Current Month : February")
    } else if (today === 2) {
        alert("Current Month : March")
    } else if (today === 3) {
        alert("Current Month : April")
    } else if (today === 4) {
        alert("Current Month : May");
    } else if (today === 5) {
        alert("Current Month : June")
    } else if (today === 6) {
        alert("Current Month : July")
    } else if (today === 7) {
        alert("Current Month : August")
    } else if (today === 8) {
        alert("Current Month : September")
    } else if (today === 9) {
        alert("Current Month : October")
    } else if (today === 10) {
        alert("Current Month : November")
    } else if (today === 11) {
        alert("Current Month : December")
    }
}

function showtask02() {
    let show02 = document.getElementById("task02")
    show02.innerText = `let date = new Date();
    let today
    today = date.getMonth();
    if (today === 0) {
        alert("Current Month : January")
    } else if (today === 1) {
        alert("Current Month : February")
    } else if (today === 2) {
        alert("Current Month : March")
    } else if (today === 3) {
        alert("Current Month : April")
    } else if (today === 4) {
        alert("Current Month : May");
    } else if (today === 5) {
        alert("Current Month : June")
    } else if (today === 6) {
        alert("Current Month : July")
    } else if (today === 7) {
        alert("Current Month : August")
    } else if (today === 8) {
        alert("Current Month : September")
    } else if (today === 9) {
        alert("Current Month : October")
    } else if (today === 10) {
        alert("Current Month : November")
    } else if (today === 11) {
        alert("Current Month : December")
    }`
}

// task 03

function task03() {
    let date = new Date();
    let today
    today = date.getDay();
    if (today === 0) {
        alert("Current Day : Sun");
    } else if (today === 1) {
        alert("Current Day : Mon");
    } else if (today === 2) {
        alert("Current Day : Tue");
    } else if (today === 3) {
        alert("Current Day : Wed");
    } else if (today === 4) {
        alert("Current Day : Thu");
    } else if (today === 5) {
        alert("Current Day : Fri");
    } else if (today === 6) {
        alert("Current Day : Sat");
    }
}

function showtask03() {
    let show03 = document.getElementById("task03")
    show03.innerText = `let date = new Date();
    let today
    today = date.getDay();
    if (today === 0) {
        alert("Current Day : Sun");
    } else if (today === 1) {
        alert("Current Day : Mon");
    } else if (today === 2) {
        alert("Current Day : Tue");
    } else if (today === 3) {
        alert("Current Day : Wed");
    } else if (today === 4) {
        alert("Current Day : Thu");
    } else if (today === 5) {
        alert("Current Day : Fri");
    } else if (today === 6) {
        alert("Current Day : Sat");
    }`
}

// task 04

function task04() {
    let date = new Date();
    let today = date.getDay();
    if (today === 0 || today === 6) {
        alert("It's Funday");
    } else {
        alert("It's Weekday");
    }
}

function showtask04() {
    let show04 = document.getElementById("task04")
    show04.innerText = `let date = new Date();
    let today = date.getDay();
    if (today === 0 || today === 6) {
        alert("It's Funday");
    } else {
        alert("It's Weekday");
    }`
}

// task 05

function task05() {
    let date = new Date();
    let today
    today = date.getDate();
    if (today < 16) {
        alert("First fifteen days of the month");
    } else {
        alert("Last days of the month");
    }
}

function showtask05() {
    let show05 = document.getElementById("task05")
    show05.innerText = `let date = new Date();
    let today
    today = date.getDate();
    if (today < 16) {
        alert("First fifteen days of the month");
    } else {
        alert("Last days of the month");
    }`
}

// task 06

function task06() {
    let t06 = document.getElementById("t06")
    let date = new Date()
    let today
    today = date.getTime();
    t06.innerText = `Eplased milliseconds since midnight, January 1, 1970: ${today}`
    today /= 1000
    today = today.toFixed(2)
    t06.innerText += `\nEplased seconds since midnight, January 1, 1970: ${today}`
    today /= 60
    today = today.toFixed(2)
    t06.innerText += `\nEplased minutes since midnight, January 1, 1970: ${today}`
}

function showtask06() {
    let show06 = document.getElementById("task06")
    show06.innerText = `let t06 = document.getElementById("t06")
    let date = new Date();
    let today
    today = date.getTime();
    t06.innerText = Eplased milliseconds since midnight, January 1, 1970: $ {today}
    today /= 1000
    today = today.toFixed(2)
    t06.innerText += Eplased seconds since midnight, January 1, 1970: $ {today}
    today /= 60
    today = today.toFixed(2)
    t06.innerText += Eplased minutes since midnight, January 1, 1970: $ {today}`
}

// task 07

function task07() {
    let date = new Date()
    let today
    today = date.getHours();
    if (today < 12) {
        alert("It's AM");
    } else {
        alert("It's PM");
    }
}

function showtask07() {
    let show07 = document.getElementById("task07")
    show07.innerText = `let date = new Date()
    let today
    today = date.getHours();
    if (today < 12) {
        alert("It's AM");
    } else {
        alert("It's PM");
    }`
}

// task 08

function task08() {
    //                       yyyy, mm, dd, hh, mm, ss, ms
    let laterDate = new Date(2020, 11, 31, 22, 54, 25);
    let t08 = document.getElementById("t08")
    t08.innerText = `Later Date: ${laterDate}`
}

function showtask08() {
    let show08 = document.getElementById("task08")
    show08.innerText = `let laterDate = new Date(2020, 11, 31, 22, 54, 25);
    let t08 = document.getElementById("t08")
    t08.innerText = Later Date: $ {laterDate}`
}

// task 09

function task09() {
    let ramadanStart = new Date(2015, 5, 18);
    let today
    today = ramadanStart.getTime(2015, 5, 18)
    today  /= (1000 * 60 * 60 * 24)
    today = Math.floor(today);
    alert(today + " days have passed since 1st Ramadan (June 18, 2015)");
}

function showtask09() {
    let show09 = document.getElementById("task09")
    show09.innerText = `let ramadanStart = new Date(2015, 5, 18);
    let today
    today = ramadanStart.getTime(2015, 5, 18)
    today  /= (1000 * 60 * 60 * 24)
    today = Math.floor(today);
    alert(today + " days have passed since 1st Ramadan (June 18, 2015)")`
}

// task 10

function task10() {
    let date = new Date()
    let start = new Date(2015, 0, 1);
    start = start.getTime(2015);
    start /= 1000;
    start = Math.floor(start);
    let today = date.getTime();
    today /= 1000;
    today = Math.floor(today);
    today -= start;
    let t10 = document.getElementById("t10")
    t10.innerText = `On reference date ${date}, ${today} seconds had passed since beginning of 2015`
}

function showtask10() {
    let show10 = document.getElementById("task10")
    show10.innerText = `let start = new Date(2015, 0, 1);
    start = start.getTime(2015);
    start /= 1000;
    start = Math.floor(start);
    let today
    today = new Date();
    today = today.getTime();
    today /= 1000;
    today = Math.floor(today);
    today -= start;
    let t10 = document.getElementById("t10")
    t10.innerText = On reference date $ {date}, $ {today} seconds had passed since beginning of 2015`
}

// task 11


function task11() {
    let date = new Date()
    let t11 = document.getElementById("t11")
    t11.innerText = `Current date: ${date}`
    let year = date.getFullYear();
    let month = date.getMonth()
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    hour--
    let today = new Date(year, month, day, hour, minute, second); 
    t11.innerText += `\n 1 hour ago, it was: ${today}`
}

function showtask11() {
    let show11 = document.getElementById("task11")
    show11.innerText = `let date = new Date()
    let t11 = document.getElementById("t11")
    t11.innerText = Current date: $ {date}
    let year = date.getFullYear();
    let month = date.getMonth()
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    hour--
    let today = new Date(year, month, day, hour, minute, second); 
    t11.innerText += 1 hour ago, it was: $ {today}`
}

// task 12

function task12() {
    let date = new Date()
    let year = date.getFullYear();
    let month = date.getMonth()
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    year = year - 100;
    let today = new Date(year, month, day, minute, minute, second); 
    alert("100 years back, it was: " + today);
}

function showtask12() {
    let show12 = document.getElementById("task12")
    show12.innerText = `let date = new Date()
    let year = date.getFullYear();
    let month = date.getMonth()
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    year = year - 100;
    let today = new Date(year, month, day, minute, minute, second); 
    alert("100 years back, it was: " + today);`
}

// task 13

function task13() {
    let date = new Date()
    let userAge = +prompt("Enter your age:");
    let today = date.getFullYear() - userAge;
    let t13 = document.getElementById("t13")
    t13.innerText = `Your birth year is: ${today}`
}

function showtask13() {
    let show13 = document.getElementById("task13")
    show13.innerText = `let date = new Date()
    let userAge = +prompt("Enter your age:");
    let today = date.getFullYear() - userAge;
    let t13 = document.getElementById("t13")
    t13.innerText = Your birth year is: $ {today}`
}

// task 14

function task14() {
    let date = new Date()
    let t14 = document.getElementById("t14")
    t14.innerText = `K-Electric Bill
    Customer Name: ABC Customer`
    let month = date.getMonth()
    let year = date.getFullYear()
    let currentmonth
    if (month === 0) {
        currentmonth = "January"
        t14.innerText += `\nBilling Month : January ${year}`
    } else if (month === 1) {
        currentmonth = "February"
        t14.innerText += `\nBilling Month : February ${year}`
    } else if (month === 2) {
        currentmonth = "March"
        t14.innerText += `\nBilling Month : March ${year}`
    } else if (month === 3) {
        currentmonth = "April"
        t14.innerText += `\nBilling Month : April ${year}`
    } else if (month === 4) {
        currentmonth = "May"
        t14.innerText += `\nBilling Month : May ${year}`
    } else if (month === 5) {
        currentmonth = "June"
        t14.innerText += `\nBilling Month : June ${year}`
    } else if (month === 6) {
        currentmonth = "July"
        t14.innerText += `\nBilling Month : July ${year}`
    } else if (month === 7) {
        currentmonth = "August"
        t14.innerText += `\nBilling Month : August ${year}`
    } else if (month === 8) {
        currentmonth = "September"
        t14.innerText += `\nBilling Month : September ${year}`
    } else if (month === 9) {
        currentmonth = "October"
        t14.innerText += `\nBilling Month : October ${year}`
    } else if (month === 10) {
        currentmonth = "November"
        t14.innerText += `\nBilling Month : November ${year}`
    } else if (month === 11) {
        currentmonth = "December"
        t14.innerText += `\nBilling Month : December ${year}`
    }
    let unit = +prompt(`Enter number of units for the month of ${currentmonth} ${year}:`)
    t14.innerText += `\nNumber of Units: ${unit}`
    let chargesPerUnit = 16
    t14.innerText += `\nCharges per Unit: ${chargesPerUnit}
    Net Amount Payable (within due date): ${unit * chargesPerUnit}`
    let today = date.getDate()
    let duedate = today + 10
    let month31 = [0, 2, 4, 6, 7, 9, 11]
    let month30 = [3, 5, 8, 10]
    let found31 = false
    let found30 = false
    for (let i = 0 ; i < month31.length ; i++) {
        if (month === month31[i]) {
            found31 = true
        }
    }
    for (let i = 0 ; i < month30.length ; i++) {
        if (month === month30[i]) {
            found30 = true
        }
    }
    if (found31 === true && duedate > 31) {
        month++
        duedate -= 31
    } else if (found30 === true && duedate > 30) {
        month++
        duedate -= 30
    } else if (month === 1 && duedate > 28) {
        month++
        duedate -= 28
    }
    if (month > 11) {
        month = month31[0]
        year++
    }
    if (month === 0) {
        t14.innerText += `\nDue Date: ${duedate} January ${year}`
    } else if (month === 1) {
        t14.innerText += `\nDue Date: ${duedate} February ${year}`
    } else if (month === 2) {
        t14.innerText += `\nDue Date: ${duedate} March ${year}`
    } else if (month === 3) {
        t14.innerText += `\nDue Date: ${duedate} April ${year}`
    } else if (month === 4) {
        t14.innerText += `\nDue Date: ${duedate} May ${year}`
    } else if (month === 5) {
        t14.innerText += `\nDue Date: ${duedate} June ${year}`
    } else if (month === 6) {
        t14.innerText += `\nDue Date: ${duedate} July ${year}`
    } else if (month === 7) {
        t14.innerText += `\nDue Date: ${duedate} August ${year}`
    } else if (month === 8) {
        t14.innerText += `\nDue Date: ${duedate} September ${year}`
    } else if (month === 9) {
        t14.innerText += `\nDue Date: ${duedate} October ${year}`
    } else if (month === 10) {
        t14.innerText += `\nDue Date: ${duedate} November ${year}`
    } else if (month === 11) {
        t14.innerText += `\nDue Date: ${duedate} December ${year}`
    }
    let latePayment = (unit * chargesPerUnit) / 100 * 10
    latePayment = Math.round(latePayment)
    t14.innerText += `\nAmount Payable (after due date): ${(latePayment + (unit * chargesPerUnit))}`
}

function showtask14() {
    let show14 = document.getElementById("task14")
    show14.innerText = `let date = new Date()
    let t14 = document.getElementById("t14")
    t14.innerText = K-Electric Bill
    Customer Name: ABC Customer
    let month = date.getMonth()
    let year = date.getFullYear()
    let currentmonth
    if (month === 0) {
        currentmonth = "January"
        t14.innerText += Billing Month : January $ {year}
    } else if (month === 1) {
        currentmonth = "February"
        t14.innerText += Billing Month : February $ {year}
    } else if (month === 2) {
        currentmonth = "March"
        t14.innerText += Billing Month : March $ {year}
    } else if (month === 3) {
        currentmonth = "April"
        t14.innerText += Billing Month : April $ {year}
    } else if (month === 4) {
        currentmonth = "May"
        t14.innerText += Billing Month : May $ {year}
    } else if (month === 5) {
        currentmonth = "June"
        t14.innerText += Billing Month : June $ {year}
    } else if (month === 6) {
        currentmonth = "July"
        t14.innerText += Billing Month : July $ {year}
    } else if (month === 7) {
        currentmonth = "August"
        t14.innerText += Billing Month : August $ {year}
    } else if (month === 8) {
        currentmonth = "September"
        t14.innerText += Billing Month : September $ {year}
    } else if (month === 9) {
        currentmonth = "October"
        t14.innerText += Billing Month : October $ {year}
    } else if (month === 10) {
        currentmonth = "November"
        t14.innerText += Billing Month : November $ {year}
    } else if (month === 11) {
        currentmonth = "December"
        t14.innerText += Billing Month : December $ {year}
    }
    let unit = +prompt(Enter number of units for the month of $ {currentmonth} $ {year}:)
    t14.innerText += Number of Units: $ {unit}
    let chargesPerUnit = 16
    t14.innerText += Charges per Unit: $ {chargesPerUnit}
    Net Amount Payable (within due date): $ {unit * chargesPerUnit}
    let today = date.getDate()
    let duedate = today + 10
    let month31 = [0, 2, 4, 6, 7, 9, 11]
    let month30 = [3, 5, 8, 10]
    let found31 = false
    let found30 = false
    for (let i = 0 ; i < month31.length ; i++) {
        if (month === month31[i]) {
            found31 = true
        }
    }
    for (let i = 0 ; i < month30.length ; i++) {
        if (month === month30[i]) {
            found30 = true
        }
    }
    if (found31 === true && duedate > 31) {
        month++
        duedate -= 31
    } else if (found30 === true && duedate > 30) {
        month++
        duedate -= 30
    } else if (month === 1 && duedate > 28) {
        month++
        duedate -= 28
    }
    if (month > 11) {
        month = month31[0]
        year++
    }
    if (month === 0) {
        t14.innerText += Due Date: $ {duedate} January $ {year}
    } else if (month === 1) {
        t14.innerText += Due Date: $ {duedate} February $ {year}
    } else if (month === 2) {
        t14.innerText += Due Date: $ {duedate} March $ {year}
    } else if (month === 3) {
        t14.innerText += Due Date: $ {duedate} April $ {year}
    } else if (month === 4) {
        t14.innerText += Due Date: $ {duedate} May $ {year}
    } else if (month === 5) {
        t14.innerText += Due Date: $ {duedate} June $ {year}
    } else if (month === 6) {
        t14.innerText += Due Date: $ {duedate} July $ {year}
    } else if (month === 7) {
        t14.innerText += Due Date: $ {duedate} August $ {year}
    } else if (month === 8) {
        t14.innerText += Due Date: $ {duedate} September $ {year}
    } else if (month === 9) {
        t14.innerText += Due Date: $ {duedate} October $ {year}
    } else if (month === 10) {
        t14.innerText += Due Date: $ {duedate} November $ {year}
    } else if (month === 11) {
        t14.innerText += Due Date: $ {duedate} December $ {year}
    }
    let latePayment = (unit * chargesPerUnit) / 100 * 10
    latePayment = Math.round(latePayment)
    t14.innerText += Amount Payable (after due date): $ {(latePayment + (unit * chargesPerUnit))}`
}

// clear all

function clearall() {
    let t01 = document.getElementById("t01")
    t01.innerText = ``
    t01.innerHTML = ``
    let t06 = document.getElementById("t06")
    t06.innerText = ``
    t06.innerHTML = ``
    let t08 = document.getElementById("t08")
    t08.innerText = ``
    t08.innerHTML = ``
    let t10 = document.getElementById("t10")
    t10.innerText = ``
    t10.innerHTML = ``
    let t11 = document.getElementById("t11")
    t11.innerText = ``
    t11.innerHTML = ``
    let t13 = document.getElementById("t13")
    t13.innerText = ``
    t13.innerHTML = ``
    let t14 = document.getElementById("t14")
    t14.innerText = ``
    t14.innerHTML = ``
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
}

// the end