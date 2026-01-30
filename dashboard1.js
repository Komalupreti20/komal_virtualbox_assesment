

document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const addBtn = document.getElementById("addBtn");
    const logoutBtn = document.getElementById("logoutBtn");
  
    // Load tasks from sessionStorage
    let tasks = JSON.parse(sessionStorage.getItem("tasks")) || [];
  
    function renderTasks() {
      taskList.innerHTML = "";
      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <span>${task}</span>
          <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
      });
    }
  
    // Add Task
    addBtn.addEventListener("click", () => {
      const text = taskInput.value.trim();
      if (!text) return;
  
      tasks.push(text);
      sessionStorage.setItem("tasks", JSON.stringify(tasks));
      taskInput.value = "";
      renderTasks();
    });
  
    // Delete Task
    window.deleteTask = (index) => {
      tasks.splice(index, 1);
      sessionStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    };
  
    // Logout (JS only)
    logoutBtn.addEventListener("click", () => {
      sessionStorage.removeItem("tasks");
      window.location.href = "index.html";
    });
  
    renderTasks();
  });