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
var len
var showpass
var copypass

function creatpass() {
    len = document.getElementById("length").value
    password = []
    password2 = []
    pass3 = []
    for (var i = 0; i < len; i++) {
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
    password = pass3.join("")
    showpass = document.getElementById("showpass")
    showpass.innerHTML = password
    copypass = password;
}

function copy () {
    console.log(copypass)
    copypass.select();
    // copypass.setSelectionRange(0,99999)
    navigator.clipboard.writeText(copypass.value);
    alert(copypass)
}