var pass = []

var upper = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
var lower = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]
var num = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]
var sym = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126]

var uppercase = document.getElementById("uppercase")
var lowercase = document.getElementById("lowercase")
var number = document.getElementById("number")
var symbol = document.getElementById("symbol")

var pass2 = []

function letters() {
    pass = []
    if (uppercase.checked == true) {
        for (var i = 0; i < upper.length; i++) {
            pass.push(upper[i])
        }
    }
    if (lowercase.checked == true) {
        for (var i = 0; i < lower.length; i++) {
            pass.push(lower[i])
        }
    }
    if (number.checked == true) {
        for (var i = 0; i < num.length; i++) {
            pass.push(num[i])
        }
    }
    if (symbol.checked == true) {
        for (var i = 0; i < sym.length; i++) {
            pass.push(sym[i])
        }
    }
    pass2 = pass
}

var password = []
var password2 = []
var pass3 = []
var len = document.getElementById("length")
var range = document.getElementById("range")
var showpass = document.getElementById("showpass")
var copypass = showpass
var remarks = document.getElementById("remarks")

function sliderValue() {
    len.innerText = range.value;
}

function creatpass() {
    if (pass2.length < 1) {
        alert("Please select the Password Category")
        showpass.innerText = ""
        remarks.innerText = ""
    } else if (len.innerText === "") {
        alert("Please define the length of Password")
        showpass.innerText = ""
        remarks.innerText = ""
    } else {
    var values = range.value
    password = []
    password2 = []
    pass3 = []
    for (var i = 0; i < values; i++) {
        password.push(Math.floor(Math.random() * pass2.length))
    }
    for (var i = 0; i < password.length; i++) {
        var word = pass2[password[i]]
        password2.push(word)
    }
    for (var i = 0; i < password2.length; i++) {
        var word2 = String.fromCharCode(password2[i])
        pass3.push(word2)
    }
    if (password2.length < 6) {
        remarks.innerText = "Your Password is Weak  ❌";
    } else {
        remarks.innerText = "Your Password is Strong  ✅";
    }
    password = pass3.join("")
    showpass.innerText = password
    copypass = password;
    }
}

function restore() {
    uppercase.checked = false
    lowercase.checked = false
    number.checked = false
    symbol.checked = false
    len.innerText = ""
    range.value = len.innerText
    showpass.innerText = ""
    remarks.innerText = "";
}

function copy () {
    // copypass = document.getElementById()
    console.log(showpass.innerText)
    // showpass.select();
    // showpass.setSelectionRange(0,99999)
    navigator.clipboard.writeText(showpass.innerText);
    alert("Password Copied to Clipboard")
}