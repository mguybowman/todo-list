import setAddTaskBorder from './setAddTaskBorder';

function displayAddTask(parent) {
  const addTask = document.createElement('div');
  addTask.id = 'addTask';
  parent.appendChild(addTask);

  const addTaskInner = document.createElement('div');
  addTaskInner.id = 'addTaskInner';
  addTask.appendChild(addTaskInner);

  setAddTaskBorder();

  const plus = document.createElement('div');
  plus.className = 'plus';
  plus.innerHTML = '+';
  addTaskInner.appendChild(plus);

  const text = document.createElement('div');
  text.innerHTML = 'Add task';
  text.className = 'text';
  addTaskInner.appendChild(text);
}

export default displayAddTask;
