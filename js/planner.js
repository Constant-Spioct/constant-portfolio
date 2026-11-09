// Academic task planner: tasks persist in this browser, not on a server.
const STORAGE_KEY = "studentPortfolio.academicTasks";
const taskForm = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list");
const emptyState = document.querySelector("#empty-state");
const plannerMessage = document.querySelector("#planner-message");
const clearCompletedButton = document.querySelector("#clear-completed");
const filterButtons = document.querySelectorAll("[data-filter]");

let tasks = loadTasks();
let activeFilter = "all";

function loadTasks() {
  try {
    const savedTasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(savedTasks)) {
      plannerMessage.textContent = "Saved planner data was invalid and could not be restored.";
      return [];
    }
    const validTasks = savedTasks.filter((task) =>
      task &&
      typeof task.id === "string" &&
      typeof task.title === "string" &&
      typeof task.description === "string" &&
      typeof task.dueDate === "string" &&
      typeof task.completed === "boolean"
    );
    if (validTasks.length !== savedTasks.length) {
      plannerMessage.textContent = "Some saved planner data was invalid and has been ignored.";
    }
    return validTasks;
  } catch (error) {
    console.error("Could not read saved planner tasks.", error);
    plannerMessage.textContent = "Saved tasks could not be read. Check your browser storage settings.";
    return [];
  }
}

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    plannerMessage.textContent = "";
    return true;
  } catch (error) {
    console.error("Could not save planner tasks.", error);
    plannerMessage.textContent = "Your browser could not save this change. Check your storage settings.";
    return false;
  }
}

function formatDueDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeZone: "UTC" })
    .format(new Date(Date.UTC(year, month - 1, day)));
}

function updateStatistics() {
  const completed = tasks.filter((task) => task.completed).length;
  const pending = tasks.length - completed;
  document.querySelector("#stat-total").textContent = String(tasks.length);
  document.querySelector("#stat-pending").textContent = String(pending);
  document.querySelector("#stat-completed").textContent = String(completed);
  document.querySelector("#filter-count-all").textContent = String(tasks.length);
  document.querySelector("#filter-count-pending").textContent = String(pending);
  document.querySelector("#filter-count-completed").textContent = String(completed);
}

function renderTasks() {
  taskList.replaceChildren();
  const visibleTasks = tasks.filter((task) => {
    if (activeFilter === "pending") return !task.completed;
    if (activeFilter === "completed") return task.completed;
    return true;
  });

  emptyState.hidden = visibleTasks.length !== 0;
  if (tasks.length === 0) {
    emptyState.querySelector("h3").textContent = "Your list is clear.";
    emptyState.querySelector("p").textContent = "Add a task when you’re ready to plan your next study session.";
  } else if (visibleTasks.length === 0) {
    emptyState.querySelector("h3").textContent = `No ${activeFilter} tasks.`;
    emptyState.querySelector("p").textContent = "Choose another filter or add a new task.";
  }

  visibleTasks.forEach((task) => {
    const item = document.createElement("li");
    item.className = `task-item${task.completed ? " is-complete" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.className = "task-checkbox";
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.id = `task-${task.id}`;
    checkbox.setAttribute("aria-label", `${task.completed ? "Mark as pending" : "Mark as completed"}: ${task.title}`);
    checkbox.addEventListener("change", () => toggleTask(task.id));

    const content = document.createElement("div");
    content.className = "task-content";
    const title = document.createElement("label");
    title.className = "task-title";
    title.htmlFor = checkbox.id;
    title.textContent = task.title;
    const due = document.createElement("p");
    due.className = "task-due";
    due.textContent = `Due ${formatDueDate(task.dueDate)}`;
    content.append(title, due);
    if (task.description) {
      const description = document.createElement("p");
      description.className = "task-description";
      description.textContent = task.description;
      content.append(description);
    }

    const deleteButton = document.createElement("button");
    deleteButton.className = "task-delete";
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", `Delete task: ${task.title}`);
    deleteButton.addEventListener("click", () => deleteTask(task.id));

    item.append(checkbox, content, deleteButton);
    taskList.append(item);
  });
  updateStatistics();
}

function toggleTask(taskId) {
  tasks = tasks.map((task) => task.id === taskId ? { ...task, completed: !task.completed } : task);
  saveTasks();
  renderTasks();
}

function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
  saveTasks();
  renderTasks();
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleInput = document.querySelector("#task-title");
  const dateInput = document.querySelector("#task-due-date");
  const titleError = document.querySelector("#title-error");
  const dateError = document.querySelector("#date-error");
  const title = titleInput.value.trim();
  const dueDate = dateInput.value;
  titleError.textContent = "";
  dateError.textContent = "";
  titleInput.removeAttribute("aria-invalid");
  dateInput.removeAttribute("aria-invalid");

  if (!title) {
    titleError.textContent = "Enter a task title.";
    titleInput.setAttribute("aria-invalid", "true");
    titleInput.focus();
    return;
  }
  if (!dueDate) {
    dateError.textContent = "Choose a due date.";
    dateInput.setAttribute("aria-invalid", "true");
    dateInput.focus();
    return;
  }

  const description = document.querySelector("#task-description").value.trim();
  tasks.unshift({ id: crypto.randomUUID(), title, description, dueDate, completed: false });
  const saved = saveTasks();
  taskForm.reset();
  activeFilter = "all";
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === activeFilter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  renderTasks();
  if (saved) plannerMessage.textContent = "Task added to your planner.";
  titleInput.focus();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    renderTasks();
  });
});

clearCompletedButton.addEventListener("click", () => {
  const remainingTasks = tasks.filter((task) => !task.completed);
  if (remainingTasks.length === tasks.length) {
    plannerMessage.textContent = "There are no completed tasks to clear.";
    return;
  }
  tasks = remainingTasks;
  const saved = saveTasks();
  renderTasks();
  if (saved) plannerMessage.textContent = "Completed tasks cleared.";
});

renderTasks();
