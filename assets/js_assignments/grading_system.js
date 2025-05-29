console.log ("Grading System")
document.write ("<h2>Grading System</h2>")
var tmarks = +prompt("Enter Total Marks")
var omarks = +prompt("Enter Obtained Marks")
var percentage = omarks / tmarks * 100
console.log ("Total Marsk: " + tmarks)
document.write("<table><tr><td>Total Marsk: </td><td> " + tmarks + ".</td></tr>")
console.log ("Obtained Marks: " + omarks)
document.write("<tr><td>Obtained Marks: </td><td> " + omarks + ".</td></tr>")
console.log ("Your Percentage is " + percentage)
document.write("<tr><td>Your Percentage is </td><td> " + percentage + ".</td></tr>")

if (percentage > 90) {
    console.log ("Your Grade is A+")
    document.write ("<tr><td>Your Grade is </td><td> A+.</td></tr></table>")
} else if (percentage > 80) {
    console.log ("Your Grade is A")
    document.write ("<tr><td>Your Grade is </td><td> A.</td></tr></table>")
} else if (percentage > 70) {
    console.log ("Your Grade is B+")
    document.write ("<tr><td>Your Grade is </td><td> B+.</td></tr></table>")
} else if (percentage > 60) {
    console.log ("Your Grade is B")
    document.write ("<tr><td>Your Grade is </td><td> B.</td></tr></table>")
} else if (percentage > 50) {
    console.log ("Your Grade is C")
    document.write ("<tr><td>Your Grade is </td><td> C.</td></tr></table>")
} else {
    console.log ("You are Fail")
    document.write ("<tr><td>You are Fail.</td></tr></table>")
}

console.log ("Grade Reference")
document.write ("<h2>Grade Reference</h2>")
console.log ("90% to 99% = A+ Grade")
document.write ("<table><tr><td>90% to 99% </td><td> = A+ Grade</td></tr>")
console.log ("80% to 89% = A Grade")
document.write ("<tr><td>80% to 89% </td><td> = A Grade</td></tr>")
console.log ("70% to 79% = B+ Grade")
document.write ("<tr><td>70% to 79% </td><td> = B+ Grade</td></tr>")
console.log ("60% to 69% = B Grade")
document.write ("<tr><td>60% to 69% </td><td> = B Grade</td></tr>")
console.log ("50% to 59% = C Grade")
document.write ("<tr><td>50% to 59% </td><td> = C Grade</td></tr>")
console.log ("49% or less = Fail")
document.write ("<tr><td>49% or less </td><td> = Fail</td></tr></table>")