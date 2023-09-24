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

// サーバーから指定されたIDのタスクを削除する関数
async function deleteTask(id) {
  const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
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

    // 削除ボタンを作成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = async () => {
      await deleteTask(task.id); // タスクを削除
      await renderTasks(); // タスクリストを再描画
    };

    item.appendChild(deleteButton); // 削除ボタンをタスクアイテムに追加
    list.appendChild(item);
  }
}

// タスク追加ボタンがクリックされたときの処理
async function handleAddTask() {
  const newTaskInput = document.getElementById("newTask");
  const newTask = newTaskInput.value;
  if (newTask) {
    await addTask(newTask);
    await renderTasks();
  }
  newTaskInput.value = ""; // タスクの追加が完了したら、入力欄をクリア
}

// 初期表示時にタスクを画面に表示
renderTasks();
