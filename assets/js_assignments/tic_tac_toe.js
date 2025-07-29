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

// console.log(winPatterns)
let num = []
let id = 0
function startgame() {
    let start = document.getElementById("game_body")
    start.innerHTML = `<div id="g-body" class="border border-5 game border-warning">
    </div>`
    let body = document.getElementById("g-body")
    body.innerHTML = ""
    for (var i = 0; i < 9; i++) {
        num.push({id : id})
        body.innerHTML += `
        <div class="border border-5 box border-warning" id="b${id}">
        <button onclick="push()" class="push"></button>
        </div>`
        id++
    }
    body.innerHTML += `<button onclick="startgame()" class="btn btn-success">Reset Game</button>`
}
console.log(num)

function push() {
    // for (var i = 0; i < num.length; i++) {
        // if ( ===)
    }
    // let press = document.getElementsByClassName("push").id

    // console.log(press)
    // for ()
    // box.push(press[])
    // // press.innerHTML = ""
    // press.innerHTML = `<img class="pic" src="../images/circle.png">`
