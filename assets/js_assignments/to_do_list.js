var todos = [];
var count = 1;

function add() {
    let input = document.getElementById("myInput").value;
    if (input.trim() !== "") {
        todos.push({ title: input, id: (todos.length + 1) });
        displayTodos();
        document.getElementById("myInput").value = "";
        count++
    } else {
        alert("Task is empty")
    }
    document.getElementById("myInput").focus();
}

const addtask = document.getElementById("myInput");

addtask.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        add();
    }
})

function displayTodos() {
        let list = document.getElementById("tasks");
        let html = "";
        for (let i = 0; i < todos.length; i++) {
            html += `
        <div class="taskdisplay" id="${todos[i].id}">
                <div class="taskid">${todos[i].id}</div>
                <div class="tasks" id="t${todos[i].id}">${todos[i].title}</div>
                <div><button type="button" class="btn btn-primary" onclick="edit(${todos[i].id})">Edit</button></div>
                <div><button type="button" class="btn btn-danger" onclick="del(${todos[i].id})">Delete</button></div>
        </div>`
        }
        list.innerHTML = html;
    }

function edit(id) {
        var text = document.getElementById("t" + id).innerText
        var task = document.getElementById(id)
        task.innerHTML = `<div class="taskid">${id}</div>
    <input type="text" id="i${id}" class="tasksin" autofocus>
    <div><button type="button" class="x2 btn btn-primary" onclick="update(${id})">Update</button></div>`
        var input = document.getElementById("i" + id)
        input.value = text
        document.getElementById("i" + id).focus();
    }

function update(id) {
        var input = document.getElementById("i" + id).value
        var text = input
        todos.splice(id - 1, 1, { title: text, id: id })
        var task = document.getElementById(id)
        task.innerHTML = `<div class="taskid">${id}</div>
    <div class="tasks" id="t${id}">${todos[id - 1].title}</div>
    <div><button type="button" class="btn btn-primary" onclick="edit(${id})">Edit</button></div>
    <div><button type="button" class="btn btn-danger" onclick="del(${id})">Delete</button></div>`
    }

function del(id) {
        todos.splice(id - 1, 1)
        for (var i = 0; i < todos.length; i++) {
            if (todos[id - 1] !== (todos[i].id + 1)) {
                todos[i].id = i + 1
            }
        }
        displayTodos()
    }
