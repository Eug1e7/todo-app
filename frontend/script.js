// script.js

async function fetchTasks() {
  const response = await fetch('http://localhost:3000/api/todos');
  const data = await response.json();
  return data;
}

async function addTask(task) {
  const response = await fetch('http://localhost:3000/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ task })
  });
  const data = await response.json();
  return data;
}

async function renderTasks() {
  const tasks = await fetchTasks();
  const list = document.getElementById('todoList');
  list.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    const item = document.createElement('div');
    item.className = 'todoItem';
    item.innerText = tasks[i];
    list.appendChild(item);
  }
}

async function handleAddTask() {
  const newTaskInput = document.getElementById('newTask');
  const newTask = newTaskInput.value;
  if (newTask) {
    await addTask(newTask);
    newTaskInput.value = '';
    await renderTasks();
  }
}

// Initial rendering
renderTasks();
