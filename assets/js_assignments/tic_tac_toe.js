let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let id = 0
let num = []
let play = []
let chan = []

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
        <button onclick="press${id}()" id="btn${id}" class="push"></button>
        </div>`
        id++
    }
    body.innerHTML += `<button onclick="startgame()" class="btn btn-success">Reset Game</button>`
}

let pres

function press0() {
    pres = 0
    splicenum(pres)
    splicecheck()
    checkgame()
}

function press1() {
    pres = 1
    splicenum(pres)
    splicecheck()
    checkgame()
}

function press2() {
    pres = 2
    splicenum(pres)
    splicecheck()
    checkgame()
}

function press3() {
    pres = 3
    splicenum(pres)
    splicecheck()
    checkgame()
}

function press4() {
    pres = 4
    splicenum(pres)
    splicecheck()
    checkgame()
}

function press5() {
    pres = 5
    splicenum(pres)
    splicecheck()
    checkgame()
}

function press6() {
    pres = 6
    splicenum(pres)
    splicecheck()
    checkgame()
}

function press7() {
    pres = 7
    splicenum(pres)
    splicecheck()
    checkgame()
}

function press8() {
    pres = 8
    splicenum(pres)
    splicecheck()
    checkgame()
}

function splicenum(press) {
    play.push(press)
    for (var i = 0; i < num.length; i++) {
        if (press === num[i]) {
            num.splice(i, 1)
        }
    }
    play.sort()
    let pic = document.getElementById("b" + press)
    pic.innerHTML = `<img src="../images/circle.png" class="pic" alt="">`
}

function splicecheck() {
    let temp = Math.floor(Math.random() * num.length)
    if (temp === 0) {
        temp++
    }
    temp = num[temp - 1]
    for (var i = 0; i < num.length; i++) {
        if (temp === num[i]) {
            num.splice(i, 1)
            chan.push(temp)
        }
    }
    chan.sort()
    let pic2 = document.getElementById("b" + temp)
    pic2.innerHTML = `<img src="../images/cross.png" class="pic" alt="">`
}

function checkgame() {
    let test
    let test3 = play.join()
    let test4 = chan.join()
    let count1 = 0
    let count2 = 0
    let count4 = 0
    let test2
    for (var i = 0; i < winPatterns.length; i++) {
        test = winPatterns[i]
        test.sort()
        test2 = test.join()
        if ((play.length === 3) && (test2 === test3)) {
            count1++
        } else if ((play.length === 3) && (test2 === test4)) {
            count2++
        } else if (play.length > 3) {
            for (let j = 0; j < play.length; j++) {
                let test5 = play.join()
                // let test5 = play.slice(j, j + 1)
                for (let k = 0; k < test.length; k++) {
                    if (test5 == test[k]) {
                        console.log(test5)
                    }
                }

                // for (let k = 0; k < play.length; k++) {
                //     if (test[j] === play[k]) {
                //         count3++
                //     } else if (test[j] === chan[k]) {
                //         count4++
                //     }
                // }

            }
        }
    }
    if ((count1 === 1)) {
        let end = document.getElementById("game_body")
        end.innerHTML = `<div class="welcome">
            <h1>You Win</h1>
            <button onclick="startgame()" class="start btn btn-success"><b>Play Again</b></button>
        </div>`
    } else if ((count2 === 1)) {
        let end = document.getElementById("game_body")
        end.innerHTML = `<div class="welcome">
    <h1>You Lose</h1>
    <button onclick="startgame()" class="start btn btn-success"><b>Play Again</b></button>
    </div>`
    }
}

// let qq
// let rr
// let pp = [0,1,2,3,4]
// for (let i = 0; i < pp.length; i++) {
//     rr = pp
//     qq = rr.slice(i, i + 1)
//     console.log(qq)
//     // rr - qq
//     // console.log(rr)
// }