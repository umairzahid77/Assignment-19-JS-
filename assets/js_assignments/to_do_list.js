// function addTask() {
//     var newTask = document.createElement('li');
//     taskList.appendChild(newTask)
//     newTask.textContent = inputTask.value;
//     inputTask.value = "";
//     var deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.classList.add('btn-danger');
//     newTask.appendChild(deleteBtn);
//     deleteBtn.onclick = function () {
//         newTask.remove();
//}
//}

var taskList = document.getElementById('task-list');
var inputTask = document.getElementById("inputTask");

var todos = [];
var row = 0;

function addTask() {
    event.preventDefault();
    if (inputTask.value == "") alert("Please write at least 1 todo.");

    var todo = {
        id: Date.now(),
        row_id: row,
        todo: inputTask.value
    }
    todos[row] = todo;
    row = row + 1;
    // var newTask = document.createElement(`li`);
    console.log(todos);
    // var deleteBtn = document.createElement("button");
    // deleteBtn.innerHTML = `<span class="material-symbols-outlined">delete</span>`;
    // var editBtn = document.createElement("button");
    // editBtn.innerHTML = `<span class="material-symbols-outlined">edit</span>`;
    // editBtn.onclick = editTask(todo.row_id);
    // var editBtn = "<li>"+inputTask.value+"<button onclick='editTask(" + todo.row_id + ")'><span class='material-symbols-outlined'>edit</span></button></li>";
    // newTask.innerHTML = newTask.innerHTML + (editBtn);
    inputTask.value = "";
    taskList.innerHTML = "";
    // for (let i = 0; i < todos.length; i++) {
    // console.log(todos[i], i);
    // newTask.textContent = todos[i].todo
    // newTask.id = todos[i].row_id;
    todos.forEach(element => {
        var editBtn = "<li id='li_" + element.row_id + "'><label>" + element.todo + "</label>" +
            "<button onclick='editTask(" + element.row_id + ")'><span class='material-symbols-outlined'>edit</span></button>" +
            "<button onclick='deleteTask(" + element.row_id + ")'><span class='material-symbols-outlined'>delete</span></button></li>";
        taskList.innerHTML = taskList.innerHTML + editBtn;
    });

    // }
    // newTask.appendChild(deleteBtn);
    // deleteBtn.onclick = deleteTask()
}

function updateTask(btn) {
    let id = btn.attributes['data_id'].value;
    document.getElementById('li_' + id).children[0].textContent = inputTask.value;
    document.getElementById('btn_update').classList.add('hidden');
    document.getElementById('btn_add').classList.remove('hidden');
    inputTask.value = "";
}

function deleteTask(todo) {
    var newtodos = [];

    todos.forEach(newtodo => {
        if (newtodo.row_id == todo) {
            return;
        }
        newtodos[newtodo.row_id] = newtodo;
    });
    todos = newtodos;
    document.getElementById('li_' + todo).remove();
}

function editTask(row) {
    inputTask.value = todos[row].todo;
    document.getElementById('btn_add').classList.add('hidden');
    document.getElementById('btn_update').classList.remove('hidden');
    document.getElementById('btn_update').attributes['data_id'].value = row;
}


// var studentArray = ["Aatir", "0300000", "12", "10"];

// var obj1 = {
//     name: "Aatir",
//     age: 12,
//     class: 10,
//     subjects: ["Maths", "Physics", "Chemistry"]
// }
// var obj2 = {
//     name: "Aatir",
//     age: 12,
//     class: 10,
//     subjects: ["Maths", "Physics", "Chemistry"]
// }
// var obj3 = {
//     name: "Aatir",
//     age: 12,
//     class: 10,
//     subjects: ["Maths", "Physics", "Chemistry"],
//     test: {
//         name: "Aatir",
//         age: 12,
//         class: 10,
//     }
// }
// console.log(obj1.age)
// console.log(obj1.name)
// var row1 = document.getElementById("row1")
// row1.innerHTML = `
//     <td>${obj1.name}</td>
//     <td>${obj1.age}</td>
//     <td>${obj1.subjects}</td>
//     <td>${obj3.test.name}, ${obj3.test.age}, ${obj3.test.class}</td>
// `;

// var arr = [{
//     name: "test1",
//     number: 123,
// }, {
//     name: "test2",
//     number: 123,
// }, {
//     name: "test3",
//     number: 123,
// }]
// for(var i = 0; i<3; i++) {
//     console.log(arr[i].name)
// }

// var obj = {
//     name: "test",
//     number: 1234
// }
// // obj.name = "";
// delete obj.name
// console.log(obj)

var todos = [];
var count = 1;
function add() {
    let input = document.getElementById("myInput").value;
    if (input.trim() !== "") {
        todos.push({ title: input, id: count });
        displayTodos();
        document.getElementById("myInput").value = "";
        count++
    } else {
        alert("Task is empty")
    }
}

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
    console.log(todos)
}

function edit(id) {
    var text = document.getElementById("t" + id).innerText
    var task = document.getElementById(id)
    task.innerHTML = `<div class="taskid">${id}</div>
    <input type="text" id="i${id}" class="tasksin">
    <div><button type="button" class="x2 btn btn-primary" onclick="update(${id})">Update</button></div>`
    var input = document.getElementById("i" + id)
    input.value = text
    console.log(todos)
}

function update(id) {
  var input = document.getElementById("i" + id).value
  var text = input
  todos.splice(id - 1, 1, {title: text, id: id})
  var task = document.getElementById(id)
    task.innerHTML = `<div class="taskid">${id}</div>
    <div class="tasks" id="t${id}">${todos[id-1].title}</div>
    <div><button type="button" class="btn btn-primary" onclick="edit(${id})">Edit</button></div>
    <div><button type="button" class="btn btn-danger" onclick="del(${id})">Delete</button></div>`
    console.log(todos)
}

function del(id) {
    // var del = document.getElementById(id)
    // if (todos[i].id === id) {
        //   console.log(i)
        // }
        // }
        for (var i = 0; i < todos.length; i++) {
if (todos[id-1].id === id) {
    todos.splice(id-1, 1)
    todos[i].id = id - i
}
        }
  displayTodos()
}

// var obj = {
//   name: "aatir"
// }
// var container = document.getElementById("container")
// console.log(container.childNodes)
// console.log(container.childNodes[3])
// var todoList = [];
// var todoCount = 0;
// function add() {
//   var inputValue = document.getElementById("todoInput")

//   if (inputValue.value.trim() !== "") {
//     todoList.push({ task: inputValue.value, id: todoCount });
//     todoCount++;
//     inputValue.value = ""
//   }
//   displayList();
//   console.log(todoList)
// }

// function displayList() {
//   var list = document.getElementById("todoList")
//   list.innerHTML = ""
//   for (var i = 0; i < todoList.length; i++) {
//     list.innerHTML += `
//     <li>${todoList[i].task}
//       <button onclick="editTodo(${todoList[i].id})">edit</button>
//       <button onclick="deleteTodo(${todoList[i].id})">delete</button>
//       <div id="edit_${todoList[i].id}"></div>
//     </li>
//     `
//   }
// }

// function deleteTodo(id) {
//   for (var i = 0; i < todoList.length; i++) {
//     if (todoList[i].id === id) {
//       todoList.splice(i, 1)
//     }
//   }
//   displayList()
// }
// var edit_enabled = 0
// function editTodo(id) {
//   if (edit_enabled === 0) {
//     edit_enabled = 1;
//     var edit_div = document.getElementById("edit_" + id)

//     edit_div.innerHTML = `
//     <input type="text" id="todoUpdate${id}">
//     <button onclick="updateTask(${id})">Update</button>
//     `
//   }
// }

// function updateTask(id) {
//   var edit_div = document.getElementById("edit_" + id)
//   var edit_input = document.getElementById("todoUpdate" + id)
//   console.log(edit_input.value)
//   for (var i = 0; i < todoList.length; i++) {
//     if (todoList[i].id === id) {
//       todoList.splice(i, 1, {task: edit_input.value, id: id})
//     }
//   }
//   edit_div.innerHTML = ""
//   displayList()
//   edit_enabled = 0
// }

// console.log()
// var img = document.createElement("img")
// img.setAttribute("src", "./download.jpeg")
// var container = document.getElementById("container").appendChild(img)

// var arr = [
//   {
//     name: "test",
//     class: "ttest",
//     number: 1
//   },
//   {
//     class: "ttest",
//     number: 2
//   },
//   {
//     class: "ttest",
//     number: 3
//   },
//   {
//     name: "test",
//     number: 4
//   },
// ]

// var field = prompt("Enter missing field")
// for (var i =0; i<arr.length; i++){

//   if(!(field in arr[i])){
//     console.log(`${field} is missing in number ${arr[i].number}`)
//     // console.log(`name is missing in number ${arr[i].number}`)
//   }
// }
// console.log("test" in obj)



// try catch


// try{
// console.log("object")
// console.log("object")
// console.log("object")
//   // document.getElementById("container").createElement("p")
// } catch {
//   console.error("element is not working")
// }finally {
//   alert("code executed  ")
// }
// console.log("object")
// console.log("object")
// console.log("object")
