// サーバーから全てのタスクを取得する関数
async function fetchTasks() {
  const response = await fetch("http://localhost:3000/api/todos");
  const data = await response.json();
  return data;
}

// 新しいタスクをサーバーに追加する関数
async function addTask(task) {
  const response = await fetch("http://localhost:3000/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task }),
  });
  const data = await response.json();
  return data;
}

// タスクを画面に表示する関数
async function renderTasks() {
  const tasks = await fetchTasks();
  const list = document.getElementById("todoList");
  list.innerHTML = ""; // 既存のタスクをクリア
  for (const task of tasks) {
    const item = document.createElement("div");
    item.className = "todoItem";
    item.innerText = task.task; // taskオブジェクトの中のtaskプロパティを使用
    list.appendChild(item);
  }
}

// タスク追加ボタンがクリックされたときの処理
async function handleAddTask() {
  const newTaskInput = document.getElementById("newTask");
  const newTask = newTaskInput.value;
  if (newTask) {
    await addTask(newTask);
    newTaskInput.value = "";
    await renderTasks();
  }
}

// 初期表示時にタスクを画面に表示
renderTasks();
