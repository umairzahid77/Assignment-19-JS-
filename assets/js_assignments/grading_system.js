document.write ("<h2>Grading System</h2>")

var tmarks = +prompt("Enter Total Marks")

var omarks = +prompt("Enter Obtained Marks")

var percentage = omarks / tmarks * 100

document.write("<table><tr><td>Total Marsk: </td><td> " + tmarks + ".</td></tr>")
document.write("<tr><td>Obtained Marks: </td><td> " + omarks + ".</td></tr>")
document.write("<tr><td>Your Percentage is </td><td> " + percentage + ".</td></tr>")

if (percentage > 90) {
document.write ("<tr><td>Your Grade is </td><td> A+.</td></tr></table>")
} else if (percentage > 80) {
document.write ("<tr><td>Your Grade is </td><td> A.</td></tr></table>")
} else if (percentage > 70) {
document.write ("<tr><td>Your Grade is </td><td> B+.</td></tr></table>")
} else if (percentage > 60) {
document.write ("<tr><td>Your Grade is </td><td> B.</td></tr></table>")
} else if (percentage > 50) {
document.write ("<tr><td>Your Grade is </td><td> C.</td></tr></table>")
} else {
document.write ("<tr><td>You are Fail.</td></tr></table>")
}

document.write ("<h2>Grade Reference</h2>")
document.write ("<table><tr><td>90% to 99% </td><td> = A+ Grade</td></tr>")
document.write ("<tr><td>80% to 89% </td><td> = A Grade</td></tr>")
document.write ("<tr><td>70% to 79% </td><td> = B+ Grade</td></tr>")
document.write ("<tr><td>60% to 69% </td><td> = B Grade</td></tr>")
document.write ("<tr><td>50% to 59% </td><td> = C Grade</td></tr>")
document.write ("<tr><td>49% or less </td><td> = Fail</td></tr></table>")