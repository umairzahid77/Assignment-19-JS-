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
var week = document.getElementById("week")
var good = document.getElementById("good")
var strong = document.getElementById("strong")

function sliderValue() {
    len.value = range.value
    len.addEventListener('input', function () {
        range.value = this.value;
    })
    range.addEventListener('input', function () {
        len.value = this.value;
    })
    console.log(range.value)
    console.log(len.value)
}

// Explanation:
// document.getElementById(): This method retrieves the HTML element by its id.
// addEventListener('input', ...): This attaches an event listener to the element. The 'input' event fires whenever the value of an 
// <input> or <textarea> element is changed.
// this.value: Inside the event listener function, this refers to the element that triggered the event (either myRange or myNumber).
// this.value accesses its current value.
// myNumber.value = this.value;: This line updates the value of the number input to match the range input's value.
// myRange.value = this.value;: This line updates the value of the range input to match the number input's value.

function creatpass() {
    if (pass2.length < 1) {
        alert("Please select the Password Category")
        showpass.innerText = ""
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
        remarks()
        password = pass3.join("")
        showpass.innerText = password
        copypass = password;
    }
}

function restore() {
    pass2 = ""
    uppercase.checked = false
    lowercase.checked = false
    number.checked = false
    symbol.checked = false
    len.value = 4
    range.value = 4
    showpass.innerText = ""
    remarks.innerHTML = "";
}

function copy() {
    // copypass = document.getElementById()
    console.log(showpass.innerText)
    // showpass.select();
    // showpass.setSelectionRange(0,99999)
    navigator.clipboard.writeText(showpass.innerText);
    alert("Password Copied to Clipboard")
}

function remarks() {
    var remarks = document.getElementById("remarks")
    remarks.innerHTML = ``
    if (password2.length < 5 && uppercase.checked == true && lowercase.checked == true && number.checked == true && symbol.checked == true) {
        remarks.innerHTML = `<div class="remarks week"></div>
        <div class="remarks"></div>
        <div class="remarks"></div>
        <div class="remarks"></div>
        <div class="remarks-text">Week</div>`
    } else if (password2.length < 7 && uppercase.checked == true && lowercase.checked == true && number.checked == true && symbol.checked == true) {
        remarks.innerHTML = `<div class="remarks good1"></div>
        <div class="remarks good1"></div>
        <div class="remarks"></div>
        <div class="remarks"></div>
        <div class="remarks-text">Normal</div>`
    } else if (password2.length < 9 && uppercase.checked == true && lowercase.checked == true && number.checked == true && symbol.checked == true) {
        remarks.innerHTML = `<div class="remarks good2"></div>
        <div class="remarks good2"></div>
        <div class="remarks good2"></div>
        <div class="remarks"></div>
        <div class="remarks-text">Good</div>`
    } else if (password2.length >= 10 && uppercase.checked == true && lowercase.checked == true && number.checked == true && symbol.checked == true) {
        remarks.innerHTML = `<div class="remarks strong"></div>
        <div class="remarks strong"></div>
        <div class="remarks strong"></div>
        <div class="remarks strong"></div>
        <div class="remarks-text">Strong</div>`
    } else if (password2.length < 6 && (uppercase.checked == true || lowercase.checked == true) && number.checked == true && symbol.checked == true) {
        remarks.innerHTML = `<div class="remarks week"></div>
        <div class="remarks"></div>
        <div class="remarks"></div>
        <div class="remarks"></div>
        <div class="remarks-text">Week</div>`
    } else if (password2.length < 9 && (uppercase.checked == true || lowercase.checked == true) && number.checked == true && symbol.checked == true) {
        remarks.innerHTML = `<div class="remarks good1"></div>
        <div class="remarks good1"></div>
        <div class="remarks"></div>
        <div class="remarks"></div>
        <div class="remarks-text">Normal</div>`
    } else if (password2.length < 11 && (uppercase.checked == true || lowercase.checked == true) && number.checked == true && symbol.checked == true) {
        remarks.innerHTML = `<div class="remarks good2"></div>
        <div class="remarks good2"></div>
        <div class="remarks good2"></div>
        <div class="remarks"></div>
        <div class="remarks-text">Good</div>`
    } else if (password2.length >= 15 && (uppercase.checked == true || lowercase.checked == true) && number.checked == true && symbol.checked == true) {
        remarks.innerHTML = `<div class="remarks strong"></div>
        <div class="remarks strong"></div>
        <div class="remarks strong"></div>
        <div class="remarks strong"></div>
        <div class="remarks-text">Strong</div>`
    } else if (password2.length < 6 && (uppercase.checked == true || lowercase.checked == true) && (number.checked == true || symbol.checked == true)) {
        remarks.innerHTML = `<div class="remarks week"></div>
        <div class="remarks"></div>
        <div class="remarks"></div>
        <div class="remarks"></div>
        <div class="remarks-text">Week</div>`
    } else if (password2.length < 11 && (uppercase.checked == true || lowercase.checked == true) && (number.checked == true || symbol.checked == true)) {
        remarks.innerHTML = `<div class="remarks good1"></div>
        <div class="remarks good1"></div>
        <div class="remarks"></div>
        <div class="remarks"></div>
        <div class="remarks-text">Normal</div>`
    } else if (password2.length < 16 && (uppercase.checked == true || lowercase.checked == true) && (number.checked == true || symbol.checked == true)) {
        remarks.innerHTML = `<div class="remarks good2"></div>
        <div class="remarks good2"></div>
        <div class="remarks good2"></div>
        <div class="remarks"></div>
        <div class="remarks-text">Good</div>`
    } else if (password2.length >= 20 && (uppercase.checked == true || lowercase.checked == true) && (number.checked == true || symbol.checked == true)) {
        remarks.innerHTML = `<div class="remarks strong"></div>
        <div class="remarks strong"></div>
        <div class="remarks strong"></div>
        <div class="remarks strong"></div>
        <div class="remarks-text">Strong</div>`
    } else if (password2.length < 9 && (uppercase.checked == true || lowercase.checked == true || number.checked == true || symbol.checked == true)) {
        remarks.innerHTML = `<div class="remarks week"></div>
        <div class="remarks"></div>
        <div class="remarks"></div>
        <div class="remarks"></div>
        <div class="remarks-text">Week</div>`
    } else if (password2.length < 13 && (uppercase.checked == true || lowercase.checked == true || number.checked == true || symbol.checked == true)) {
        remarks.innerHTML = `<div class="remarks good1"></div>
        <div class="remarks good1"></div>
        <div class="remarks"></div>
        <div class="remarks"></div>
        <div class="remarks-text">Normal</div>`
    } else if (password2.length < 20 && (uppercase.checked == true || lowercase.checked == true || number.checked == true || symbol.checked == true)) {
        remarks.innerHTML = `<div class="remarks good2"></div>
        <div class="remarks good2"></div>
        <div class="remarks good2"></div>
        <div class="remarks"></div>
        <div class="remarks-text">Good</div>`
    } else if (password2.length >= 20 && (uppercase.checked == true || lowercase.checked == true || number.checked == true || symbol.checked == true)) {
        remarks.innerHTML = `<div class="remarks strong"></div>
        <div class="remarks strong"></div>
        <div class="remarks strong"></div>
        <div class="remarks strong"></div>
        <div class="remarks-text">Strong</div>`
    }
}
