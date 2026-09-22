let inputTask = document.getElementById('taskInput');
let taskCategoryInput = document.getElementById('taskCategory');
let addBtn = document.getElementById('addTaskBtn');
let tasksList = document.getElementById('taskList');
let deadLineInput = document.getElementById('deadLineDate');
let taskStatus = document.getElementById('taskStatus');

addBtn.addEventListener('click', function () {
  let tasks = [];

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
  renderList();
  alert('Tasks have been added!');
  inputTask.value = '';
  taskCategoryInput.value = '';
  deadLineInput.value = '';
  taskStatus.value = 'In Progress';

  function renderList() {
    tasksList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
      let listItem = document.createElement('li');
      let spanName = document.createElement('span');
      let spanTaskName = document.createElement('span');
      spanTaskName.id = 'nameSpan';
      spanTaskName.innerText = `${tasks[i].name}`;
      spanName.className = 'taskLabel';
      spanName.innerText = 'Name: '; 
      spanName.appendChild(spanTaskName);
      listItem.appendChild(spanName);

     let categorySpan = document.createElement('span');
     let spanCategory = document.createElement('span');
     spanCategory.id = 'category-Span';
     spanCategory.innerText = `${tasks[i].category}`;
      categorySpan.className = 'taskCat';
      categorySpan.innerText = 'Category: ';
      categorySpan.appendChild(spanCategory);
      listItem.appendChild(categorySpan);

      let deadLineSpan = document.createElement('span');
      let spanDeadLine = document.createElement('span');
      spanDeadLine.id = 'span-Deadline';
      spanDeadLine.innerText = `${tasks[i].deadline}`;
      deadLineSpan.className = 'taskDue';
      deadLineSpan.innerText = 'Due: ';
      deadLineSpan.appendChild(spanDeadLine);
      listItem.appendChild(deadLineSpan);

      let statusSpan = document.createElement('span');
      let spanStatus = document.createElement('span');
      spanStatus.id = 'span-Status';
      spanStatus.innerText = `${tasks[i].status}`;
      statusSpan.id = 'statusTask';
      statusSpan.innerText = 'Status: ';
      statusSpan.appendChild(spanStatus);
      listItem.appendChild(statusSpan);


      tasksList.appendChild(listItem);
    
      
    }
    
  }
});
