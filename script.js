let inputTask = document.getElementById('taskInput');
let taskCategoryInput = document.getElementById('taskCategory');
let addBtn = document.getElementById('addTaskBtn');
let tasksList = document.getElementById('task-List');
let deadLineInput = document.getElementById('deadLineDate');
let taskStatus = document.getElementById('taskStatus');

let filterStatus = document.getElementById('filterStatus');

let tasks = [];

if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
}
renderList();

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
  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task has been added!');
  renderList();
  inputTask.value = '';
  taskCategoryInput.value = '';
  deadLineInput.value = '';
  taskStatus.value = 'In Progress';
});

function renderList() {
  tasksList.innerHTML = '';

  tasks.forEach((task, index) => {
    let listItem = document.createElement('li');

    let spanName = document.createElement('span');
    spanName.className = ' nameSpan';
    spanName.textContent = `Name: ${task.name}`;

    let categorySpan = document.createElement('span');
    categorySpan.className = ' taskCat';
    categorySpan.textContent = `Category: ${task.category}`;

    let deadLineSpan = document.createElement('span');
    deadLineSpan.className = ' taskDue';
    deadLineSpan.textContent = `Due: ${task.deadline}`;

    if (task.status === 'Overdue') {
      deadLineSpan.classList.add('overdue');
    }

    let statusTask = document.createElement('select');
    statusTask.className = ' statusTask';

    let statuses = ['In Progress', 'Completed', 'Overdue'];
    statusTask.innerHTML = statuses
      .map(
        (statusOption) =>
          `<option value="${statusOption}" ${task.status === statusOption ? 'selected' : ''}>${statusOption}</option>`,
      )
      .join('');

    let btn = document.createElement('button');
    btn.className = ' list-btn';
    btn.textContent = 'Delete';

    listItem.appendChild(spanName);
    listItem.appendChild(categorySpan);
    listItem.appendChild(deadLineSpan);
    listItem.appendChild(statusTask);
    listItem.appendChild(btn);
    tasksList.appendChild(listItem);

    btn.addEventListener('click', () => {
      listItem.remove();
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderList();
    });
  });
}
