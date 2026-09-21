let inputTask = document.getElementById('taskInput');
let taskCategoryInput = document.getElementById('taskCategory');
let addBtn = document.getElementById('addTaskBtn');
let tasksList = document.getElementById('taskList');
let deadLineInput = document.getElementById('deadLineDate');

addBtn.addEventListener('click', addTask);

let tasks = [];

function addTask() {
    
    let name = inputTask.value;
    let category = taskCategoryInput.value;
    let deadline = deadLineInput.value;


    let newTask = {
        name: name,
        category: category,
        deadline: deadline,
        status: 'In progress'
    };

console.log(tasks);
    tasks.push(newTask);
    renderList();
    alert('Tasks have been added!');
    inputTask.value = '';
   
}



function renderList() {
  tasksList.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerText = `NAME: ${tasks[i].name}  CATEGORY: ${tasks[i].category}   DUE: ${tasks[i].deadline}  STATUS: ${tasks[i].status}`;
    tasksList.appendChild(listItem);
  }
}
