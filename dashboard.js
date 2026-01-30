// dashboard.js
import { db, auth } from "./firebase.js";
import { collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";
import { signOut } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const addBtn = document.getElementById("addBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  const taskRef = collection(db, "tasks");

  // ➕ Add Task
  addBtn.onclick = async () => {
    const text = taskInput.value.trim();
    if (!text) return;

    try {
      await addDoc(taskRef, { text });
      taskInput.value = "";
      loadTasks();
    } catch (err) {
      console.error(err);
      alert("Failed to add task!");
    }
  };

  // 📥 Load Tasks
  async function loadTasks() {
    taskList.innerHTML = "";
    try {
      const snapshot = await getDocs(taskRef);
      snapshot.forEach(d => {
        const li = document.createElement("li");
        li.innerHTML = `
          <span>${d.data().text}</span>
          <button onclick="deleteTask('${d.id}')">X</button>
        `;
        taskList.appendChild(li);
      });
    } catch (err) {
      console.error(err);
    }
  }

  // ❌ Delete Task
  window.deleteTask = async (id) => {
    try {
      await deleteDoc(doc(db, "tasks", id));
      loadTasks();
    } catch (err) {
      console.error(err);
      alert("Failed to delete task!");
    }
  };

  // 🚪 Logout
  logoutBtn.onclick = async () => {
    try {
      await signOut(auth);
      window.location.href = "index.html";
    } catch (err) {
      console.error(err);
      alert("Logout failed!");
    }
  };

  loadTasks();
});
