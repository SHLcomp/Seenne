const addBtn = document.querySelector(".add-task");
const tasks = document.querySelector(".tasks");
const wrapper = document.querySelector("#taskInput");
const errorMsg = document.querySelector(".no-tasks-msg");

const addTask = () => {
  const taskName = wrapper.value.trim();

  if (taskName) {
    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `
      <h3>${taskName}</h3>
      <div class="task-info-cont">
        <span><i class="fa-solid fa-trash delete-icon"></i></span>
      </div>
    `;
    tasks.appendChild(newTask);
    wrapper.value = ""; // Clear input field after adding task

    // Add event listener to the delete button in the new task
    const deleteBtn = newTask.querySelector(".delete-icon");
    deleteBtn.addEventListener("click", () => {
      newTask.remove();
      toggleErrorMessage(); // Update error message visibility
      saveTasksToLocalStorage();
    });

    toggleErrorMessage(); // Update error message visibility
    saveTasksToLocalStorage();
  }
};

// Function to toggle error message based on tasks presence
const toggleErrorMessage = () => {
  const tasksCount = document.querySelectorAll(".task").length;
  errorMsg.style.display = tasksCount === 0 ? "block" : "none";
};

// Function to save tasks to local storage
const saveTasksToLocalStorage = () => {
  const taskElements = document.querySelectorAll(".task h3");
  const tasksArray = Array.from(taskElements).map(task => task.textContent);
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
};

// Function to load tasks from local storage
const loadTasksFromLocalStorage = () => {
  const tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];
  tasksArray.forEach(taskName => {
    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `
      <h3>${taskName}</h3>
      <div class="task-info-cont container">
        <span><i class="fa-solid fa-trash delete-icon"></i></span>
      </div>
    `;
    tasks.appendChild(newTask);
  });

  toggleErrorMessage(); // Update error message visibility after loading tasks
};

// Load tasks from local storage when the page is loaded
document.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);

// Add event listener to the input field for Enter key
wrapper.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

// Add event listener to the add button
addBtn.addEventListener("click", addTask);

// Add event listener to the delete button in the tasks container
tasks.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-icon")) {
    const taskToRemove = event.target.closest(".task");
    taskToRemove.remove();
    toggleErrorMessage(); // Update error message visibility
    saveTasksToLocalStorage(); // Update local storage after removing task
  }
});
