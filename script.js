let tasks = [];

function addTask() {
  const input = document.getElementById("input-task");
  const task = input.value;
  if (task.trim() === "") {
    return;
  }
  tasks.push({ text: task, completed: false });
  input.value = "";
  displayTasks();
}

function displayTasks() {
  const pendingTasksList = document.getElementById("pending-tasks-list");
  const completedTasksList = document.getElementById("completed-tasks-list");
  pendingTasksList.innerHTML = "";
  completedTasksList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task.text}</span>
      <button onclick="completeTask(${index})">Complete</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    if (task.completed) {
      li.classList.add("completed");
      completedTasksList.appendChild(li);
    } else {
      pendingTasksList.appendChild(li);
    }
  });
}

function completeTask(index) {
  tasks[index].completed = true;
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

displayTasks();
