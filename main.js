const task = document.getElementById("user-input");
const addBtn = document.querySelector(".add-task");
const tasks = document.querySelector(".tasks");
const taskList = [];

// Add task to list
addBtn.addEventListener("click", () => {
  taskList.push(task.value);
  console.log(`Add task button ${taskList}`);
  tasks.innerHTML = ""; // Clear the existing content

  // Display tasks
  taskList.forEach((taskItem) => {
    const listItem = document.createElement("li");
    listItem.textContent = taskItem;
    tasks.appendChild(listItem);
  });

  task.value = "";
});

// Mark task completed
tasks.addEventListener("click", (event) => {
  const clicked = event.target;
  const index = taskList.indexOf(clicked.textContent);
  clicked.classList.toggle("completed");
});

// Edit task

