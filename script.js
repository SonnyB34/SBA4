let inputTask = document.getElementById('taskInput');
let taskCategoryInput = document.getElementById('taskCategory');
let addBtn = document.getElementById('addTaskBtn');
let tasksList = document.getElementById('task-List');
let deadLineInput = document.getElementById('deadLineDate');
let taskStatus = document.getElementById('taskStatus');
let tasks = [];
addBtn.addEventListener('click', function () {
  

  let name = inputTask.value;
  let category = taskCategoryInput.value;
  let deadline = deadLineInput.value;
  let status = taskStatus.value;

  let newTask = {
    name: name,
    category: category,
    deadline: deadline,
    status: status,
  };

  console.log(tasks);
  tasks.push(newTask);
  alert('Tasks have been added!');
  renderList();
  inputTask.value = '';
  taskCategoryInput.value = '';
  deadLineInput.value = '';
  taskStatus.value = 'In Progress';
});

function renderList() {
  tasksList.innerHTML = '';
  console.log(tasks);
  tasks.forEach((task) => {
    let listItem = document.createElement('li');

    let spanName = document.createElement('span');
    spanName.className = 'nameSpan';
    spanName.textContent = `Name: ${task.name}`;

    let categorySpan = document.createElement('span');
    categorySpan.className = 'taskCat';
    categorySpan.textContent = `Category: ${task.category}`;

    let deadLineSpan = document.createElement('span');
    deadLineSpan.className = 'taskDue';
    deadLineSpan.textContent = `Due: ${task.deadline}`;

    if (task.status === 'Overdue') {
      deadLineSpan.classList.add('overdue');
    }

    let statusTask = document.createElement('span');
    statusTask.id = 'statusTask';
    statusTask.textContent = `Status: ${task.status}`;

    listItem.appendChild(spanName);
    listItem.appendChild(categorySpan);
    listItem.appendChild(deadLineSpan);
    listItem.appendChild(statusTask);

    tasksList.appendChild(listItem);
  });
}
