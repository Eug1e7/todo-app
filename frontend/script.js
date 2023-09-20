let tasks = [];

function renderTasks() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const item = document.createElement("div");
    item.className = "todoItem";
    item.innerText = tasks[i];
    list.appendChild(item);
  }
}

function addTask() {
  const newTaskInput = document.getElementById("newTask");
  const newTask = newTaskInput.value;
  if (newTask) {
    tasks.push(newTask);
    newTaskInput.value = "";
    renderTasks();
  }
}

// Initial rendering
renderTasks();
