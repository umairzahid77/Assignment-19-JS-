const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

console.log(winPatterns[1])
let num = []
let id = 0
let play = []
let chan = []
let push
let check

function startgame() {
    num = []
    play = []
    chan = []
    id = 0
    let start = document.getElementById("game_body")
    start.innerHTML = `<div id="g-body" class="border border-5 game border-warning">
    </div>`
    let body = document.getElementById("g-body")
    body.innerHTML = ""
    for (var i = 0; i < 9; i++) {
        num.push(id)
        body.innerHTML += `
        <div class="border border-5 box border-warning" id="b${id}">
        <button onclick="push${id}()" id="btn${id}" class="push"></button>
        </div>`
        id++
    }
    body.innerHTML += `<button onclick="startgame()" class="btn btn-success">Reset Game</button>`
    console.log(num)
}

function splicenum(splice) {
    for (var i = 0; i < num.length; i++) {
        if (num[i] === splice) {
            num.splice(i, 1)
        }
    }
}

function splicecheck(temp) {
    for (var i = 0; i < num.length; i++) {
        if (temp === num[i]) {
            num.splice(i, 1)
        }
    }
}

function checkgame() {
    console.log(play)
    console.log(chan)
    if (play.length === 3) {
        for (var i = 0; i < winPatterns.length; i++) {
            if (winPatterns[i] === play) {
                alert("You win")
            } else if (winPatterns[i] === chan) {
                alert("Computer win")
            }
        }
    } else if (play.length > 3) {
        let match1 = play.slice(0, 2)
        let match2 = play.slice(1, 3)
        let catch1 = chan.slice(0, 2)
        let catch2 = chan.slice(1, 3)
        for (var i = 0; i < winPatterns.length; i++) {
            if (winPatterns[i] === match1 || winPatterns[i] === match2) {
                alert("You win")
            } else if (winPatterns[i] === catch1 || winPatterns[i] === catch2) {
                alert("Computer win")
            }
        }
    }
    // console.log(match1)
    // console.log(match2)
    // console.log(catch1)
    // console.log(catch2)
}

function push0() {
    push = 0
    splicenum(push)
    play.push(push)
    check = Math.floor(Math.random() * num.length)
    if (check === 0) {
        check++
    }
    check = num[check - 1]
    splicecheck(check)
    chan.push(check)
    play.sort()
    chan.sort()
    checkgame()
    let pic = document.getElementById("b" + push)
    pic.innerHTML = `<img src="../images/circle.png" class="pic" alt="">`
    let pic2 = document.getElementById("b" + check)
    pic2.innerHTML = `<img src="../images/cross.png" class="pic" alt="">`
}

function push1() {
    push = 1
    splicenum(push)
    play.push(push)
    let pic = document.getElementById("b" + push)
    pic.innerHTML = `<img src="../images/circle.png" class="pic" alt="">`
    check = Math.floor(Math.random() * num.length)
    if (check === 0) {
        check++
    }
    check = num[check - 1]
    splicecheck(check)
    chan.push(check)
    play.sort()
    chan.sort()
    let pic2 = document.getElementById("b" + check)
    pic2.innerHTML = `<img src="../images/cross.png" class="pic" alt="">`
    checkgame()
}

function push2() {
    push = 2
    splicenum(push)
    play.push(push)
    let pic = document.getElementById("b" + push)
    pic.innerHTML = `<img src="../images/circle.png" class="pic" alt="">`
    check = Math.floor(Math.random() * num.length)
    if (check === 0) {
        check++
    }
    check = num[check - 1]
    splicecheck(check)
    chan.push(check)
    play.sort()
    chan.sort()
    let pic2 = document.getElementById("b" + check)
    pic2.innerHTML = `<img src="../images/cross.png" class="pic" alt="">`
    checkgame()
}

function push3() {
    push = 3
    splicenum(push)
    play.push(push)
    let pic = document.getElementById("b" + push)
    pic.innerHTML = `<img src="../images/circle.png" class="pic" alt="">`
    check = Math.floor(Math.random() * num.length)
    if (check === 0) {
        check++
    }
    check = num[check - 1]
    splicecheck(check)
    chan.push(check)
    play.sort()
    chan.sort()
    let pic2 = document.getElementById("b" + check)
    pic2.innerHTML = `<img src="../images/cross.png" class="pic" alt="">`
    checkgame()
}

function push4() {
    push = 4
    splicenum(push)
    play.push(push)
    let pic = document.getElementById("b" + push)
    pic.innerHTML = `<img src="../images/circle.png" class="pic" alt="">`
    check = Math.floor(Math.random() * num.length)
    if (check === 0) {
        check++
    }
    check = num[check - 1]
    splicecheck(check)
    chan.push(check)
    play.sort()
    chan.sort()
    let pic2 = document.getElementById("b" + check)
    pic2.innerHTML = `<img src="../images/cross.png" class="pic" alt="">`
    checkgame()
}

function push5() {
    push = 5
    splicenum(push)
    play.push(push)
    let pic = document.getElementById("b" + push)
    pic.innerHTML = `<img src="../images/circle.png" class="pic" alt="">`
    check = Math.floor(Math.random() * num.length)
    if (check === 0) {
        check++
    }
    check = num[check - 1]
    splicecheck(check)
    chan.push(check)
    play.sort()
    chan.sort()
    let pic2 = document.getElementById("b" + check)
    pic2.innerHTML = `<img src="../images/cross.png" class="pic" alt="">`
    checkgame()
}

function push6() {
    push = 6
    splicenum(push)
    play.push(push)
    let pic = document.getElementById("b" + push)
    pic.innerHTML = `<img src="../images/circle.png" class="pic" alt="">`
    check = Math.floor(Math.random() * num.length)
    if (check === 0) {
        check++
    }
    check = num[check - 1]
    splicecheck(check)
    chan.push(check)
    play.sort()
    chan.sort()
    let pic2 = document.getElementById("b" + check)
    pic2.innerHTML = `<img src="../images/cross.png" class="pic" alt="">`
    checkgame()
}

function push7() {
    push = 7
    splicenum(push)
    play.push(push)
    let pic = document.getElementById("b" + push)
    pic.innerHTML = `<img src="../images/circle.png" class="pic" alt="">`
    check = Math.floor(Math.random() * num.length)
    if (check === 0) {
        check++
    }
    check = num[check - 1]
    splicecheck(check)
    chan.push(check)
    play.sort()
    chan.sort()
    let pic2 = document.getElementById("b" + check)
    pic2.innerHTML = `<img src="../images/cross.png" class="pic" alt="">`
    checkgame()
}

function push8() {
    push = 8
    splicenum(push)
    play.push(push)
    let pic = document.getElementById("b" + push)
    pic.innerHTML = `<img src="../images/circle.png" class="pic" alt="">`
    check = Math.floor(Math.random() * num.length)
    if (check === 0) {
        check++
    }
    check = num[check - 1]
    splicecheck(check)
    chan.push(check)
    play.sort()
    chan.sort()
    let pic2 = document.getElementById("b" + check)
    pic2.innerHTML = `<img src="../images/cross.png" class="pic" alt="">`
    checkgame()
}
