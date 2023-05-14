const addTaskForm = document.getElementById('add-task-form');
const newTaskInput = document.getElementById('new-task-input');
const taskList = document.getElementById('task-list');

addTaskForm.addEventListener('submit', event => {
  event.preventDefault();
  const newTaskText = newTaskInput.value;
  if (!newTaskText) return; // if input is empty, do nothing
  addTask(newTaskText);
  newTaskInput.value = ''; // clear the input field
});

function addTask(taskText) {
  const taskListItem = document.createElement('li');
  taskListItem.textContent = taskText;
  taskList.appendChild(taskListItem);
}

function addTask(taskText) {
  const taskListItem = document.createElement('li');
  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  const taskTextSpan = document.createElement('span');
  taskTextSpan.textContent = taskText;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  taskListItem.appendChild(taskCheckbox);
  taskListItem.appendChild(taskTextSpan);
  taskListItem.appendChild(deleteButton);
  taskList.appendChild(taskListItem);

  taskCheckbox.addEventListener('change', () => {
    if (taskCheckbox.checked) {
      taskTextSpan.style.textDecoration = 'line-through';
    } else {
      taskTextSpan.style.textDecoration = 'none';
    }
  });

  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskListItem);
  });
}
