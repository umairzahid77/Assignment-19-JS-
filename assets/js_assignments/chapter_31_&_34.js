// tast 01

var date = new Date();
var today
document.write(date);
console.log(date);

// task 02

today = date.getMonth();
if (today === 0) {
    document.write("<br><br>Current Month : January");
    console.log("Current Month : January");
} else if (today === 1) {
    document.write("<br><br>Current Month : February");
    console.log("Current Month : February");
} else if (today === 2) {
    document.write("<br><br>Current Month : March");
    console.log("Current Month : March");
} else if (today === 3) {
    document.write("<br><br>Current Month : April");
    console.log("Current Month : April");
} else if (today === 4) {
    document.write("<br><br>Current Month : May");
    console.log("Current Month : May");
} else if (today === 5) {
    document.write("<br><br>Current Month : June");
    console.log("Current Month : June");
} else if (today === 6) {
    document.write("<br><br>Current Month : July");
    console.log("Current Month : July");
} else if (today === 7) {
    document.write("<br><br>Current Month : August");
    console.log("Current Month : August");
} else if (today === 8) {
    document.write("<br><br>Current Month : September");
    console.log("Current Month : September");
} else if (today === 9) {
    document.write("<br><br>Current Month : October");
    console.log("Current Month : October");
} else if (today === 10) {
    document.write("<br><br>Current Month : November");
    console.log("Current Month : November");
} else if (today === 11) {
    document.write("<br><br>Current Month : December");
    console.log("Current Month : December");
}

// task 03

today = date.getDay();
if (today === 0) {
    document.write("<br><br>Current Day : Sun");
    console.log("Current Day : Sun");
} else if (today === 1) {
    document.write("<br><br>Current Day : Mon");
    console.log("Current Day : Mon");
} else if (today === 2) {
    document.write("<br><br>Current Day : Tue");
    console.log("Current Day : Tue");
} else if (today === 3) {
    document.write("<br><br>Current Day : Wed");
    console.log("Current Day : Wed");
} else if (today === 4) {
    document.write("<br><br>Current Day : Thu");
    console.log("Current Day : Thu");
} else if (today === 5) {
    document.write("<br><br>Current Day : Fri");
    console.log("Current Day : Fri");
} else if (today === 6) {
    document.write("<br><br>Current Day : Sat");
    console.log("Current Day : Sat");
}

// task 04

if (today === 0 || today === 6) {
    document.write("<br><br>It's Funday");
    console.log("It's Funday");
} else {
    document.write("<br><br>It's Weekday");
    console.log("It's Weekday");
}

// task 05

today = date.getDate();
if (today < 16) {
    document.write("<br><br>First fifteen days of the month");
    console.log("First fifteen days of the month");
} else {
    document.write("<br><br>Last days of the month");
    console.log("Last days of the month");
}

// task 06

today = date.getTime();
document.write("<br><br>Eplased milliseconds since January 1, 1970: " + today);
console.log("Eplased milliseconds since January 1, 1970: " + today);
today /= 1000
document.write("<br><br>Eplased seconds since January 1, 1970: " + today);
console.log("Eplased seconds since January 1, 1970: " + today);
today /= 60
document.write("<br><br>Eplased minutes since January 1, 1970: " + today);
console.log("Eplased minutes since January 1, 1970: " + today);

// task 07

today = date.getHours();
if (today < 12) {
    document.write("<br><br>It's AM");
    console.log("It's AM");
} else {
    document.write("<br><br>It's PM");
    console.log("It's PM");
}

// task 08

//                       yyyy, mm, dd, hh, mm, ss, ms
var laterDate = new Date(2020, 11, 31, 22, 54, 25);
document.write("<br><br>Later Date:", laterDate);
console.log("Later Date:", laterDate);

// task 09

var ramadanStart = new Date(2015, 5, 18);
today = ramadanStart.getTime(2015, 5, 18)
today  /= (1000 * 60 * 60 * 24)
today = Math.floor(today);
document.write("<br><br>" + today + " days have passed since 1st Ramadan (June 18, 2015)");
console.log(today + " days have passed since 1st Ramadan (June 18, 2015)");

// task 10

var start = new Date(2015, 0, 1);
start = start.getTime(2015);
start /= 1000;
start = Math.floor(start);
today = new Date();
today = today.getTime();
today /= 1000;
today = Math.floor(today);
today -= start;
document.write("<br><br>on reference date " + date + ", " + today + " seconds had passed since beginning of 2015");
console.log("on reference date " + date + ", " + today + " seconds had passed since beginning of 2015");

// task 11

document.write("<br><br>Current date:" + date);
console.log("Current date:" + date);
today = new Date()
var year = today.getFullYear();
var month = today.getMonth()
var day = today.getDate();
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
today = today.getHours();
today--
today = new Date(year, month, day, today, minute, second); 
document.write("<br><br>1 hour ago, it was: " + today);
console.log("1 hour ago, it was: " + today);

// task 12

today = year - 100;
today = new Date(today, month, day, minute, minute, second); 
document.write("<br><br>100 years back, it was: " + today);
console.log("100 years back, it was: " + today);

// task 13

var userAge = +prompt("Enter your age:");
today = date.getFullYear() - userAge;
document.write("<br><br>Your birth year is: " + today);
console.log("Your birth year is: " + today);

// task 14

document.write("<br><br><h2>K-Electric Bill</h2>");
console.log("K-Electric Bill");
document.write("<br><br>Customer Name: <b>ABC Customer</b>");
console.log("Customer Name: ABC Customer");
today = date.getMonth()
year = date.getFullYear()
if (today === 0) {
    document.write("<br><br>Billing Month : <b>January " + year + "</b>");
    console.log("Billing Month : January " + year);
} else if (today === 1) {
    document.write("<br><br>Billing Month : <b>February " + year + "</b>");
    console.log("Billing Month : February " + year);
} else if (today === 2) {
    document.write("<br><br>Billing Month : <b>March " + year + "</b>");
    console.log("Billing Month : March " + year);
} else if (today === 3) {
    document.write("<br><br>Billing Month : <b>April " + year + "</b>");
    console.log("Billing Month : April " + year);
} else if (today === 4) {
    document.write("<br><br>Billing Month : <b>May " + year + "</b>");
    console.log("Billing Month : May " + year);
} else if (today === 5) {
    document.write("<br><br>Billing Month : <b>June " + year + "</b>");
    console.log("Billing Month : June " + year);
} else if (today === 6) {
    document.write("<br><br>Billing Month : <b>July " + year + "</b>");
    console.log("Billing Month : July " + year);
} else if (today === 7) {
    document.write("<br><br>Billing Month : <b>August " + year + "</b>");
    console.log("Billing Month : August " + year);
} else if (today === 8) {
    document.write("<br><br>Billing Month : <b>September " + year + "</b>");
    console.log("Billing Month : September " + year);
} else if (today === 9) {
    document.write("<br><br>Billing Month : <b>October " + year + "</b>");
    console.log("Billing Month : October " + year);
} else if (today === 10) {
    document.write("<br><br>Billing Month : <b>November " + year + "</b>");
    console.log("Billing Month : November " + year);
} else if (today === 11) {
    document.write("<br><br>Billing Month : <b>December " + year + "</b>");
    console.log("Billing Month : December " + year);
}
var unit = 410
document.write("<br><br>Number of Units : <b>" + unit + "</b>");
console.log("Number of Units : " + unit)
var chargesPerUnit = 16
document.write("<br><br>Charges per Unit : <b>" + chargesPerUnit + "</b>");
console.log("Charges per Unit : " + chargesPerUnit)
document.write("<br><br>Net Amount Payable (within due date): <b>" + (unit * chargesPerUnit) + "</b>");
console.log("Net Amount Payable (within due date): " + (unit * chargesPerUnit));
today = date.getDate()
month = date.getMonth()
var duedate = today + 10
var month31 = [0, 2, 4, 6, 7, 9, 11]
var month30 = [3, 5, 8, 10]
var found31 = false
var found30 = false
for (var i = 0 ; i < month31.length ; i++) {
    if (month === month31[i]) {
        found31 = true
    }
}
for (var i = 0 ; i < month30.length ; i++) {
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
    document.write("<br><br>Due Date: <b>" + duedate + " January " + year + "</b>");
    console.log("Due Date: " + duedate + " January " + year);
} else if (month === 1) {
    document.write("<br><br>Due Date: <b>" + duedate + " February " + year + "</b>");
    console.log("Due Date: " + duedate + " February " + year);
} else if (month === 2) {
    document.write("<br><br>Due Date: <b>" + duedate + " March " + year + "</b>");
    console.log("Due Date: " + duedate + " March " + year);
} else if (month === 3) {
    document.write("<br><br>Due Date: <b>" + duedate + " April " + year + "</b>");
    console.log("Due Date: " + duedate + " April " + year);
} else if (month === 4) {
    document.write("<br><br>Due Date: <b>" + duedate + " May " + year + "</b>");
    console.log("Due Date: " + duedate + " May " + year);
} else if (month === 5) {
    document.write("<br><br>Due Date: <b>" + duedate + " June " + year + "</b>");
    console.log("Due Date: " + duedate + " June " + year);
} else if (month === 6) {
    document.write("<br><br>Due Date: <b>" + duedate + " July " + year + "</b>");
    console.log("Due Date: " + duedate + " July " + year);
} else if (month === 7) {
    document.write("<br><br>Due Date: <b>" + duedate + " August " + year + "</b>");
    console.log("Due Date: " + duedate + " August " + year);
} else if (month === 8) {
    document.write("<br><br>Due Date: <b>" + duedate + " September " + year + "</b>");
    console.log("Due Date: " + duedate + " September " + year);
} else if (month === 9) {
    document.write("<br><br>Due Date: <b>" + duedate + " October " + year + "</b>");
    console.log("Due Date: " + duedate + " October " + year);
} else if (month === 10) {
    document.write("<br><br>Due Date: <b>" + duedate + " November " + year + "</b>");
    console.log("Due Date: " + duedate + " November " + year);
} else if (month === 11) {
    document.write("<br><br>Due Date: <b>" + duedate + " December " + year + "</b>");
    console.log("Due Date: " + duedate + " December " + year);
}
var latePayment = (unit * chargesPerUnit) / 100 * 10
latePayment = Math.round(latePayment)
document.write("<br><br>Amount Payable (after due date): <b>" + (latePayment + (unit * chargesPerUnit)) + "</b>");
console.log("Amount Payable (after due date): " + (latePayment + (unit * chargesPerUnit)));

// the end
