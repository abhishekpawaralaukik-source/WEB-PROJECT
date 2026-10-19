
 // ===============================
 // 1. SELECT HTML ELEMENTS
 // ===============================

const addTaskButton = document.querySelector("#add-task-btn");
const taskModal = document.querySelector(".task-modal");
const cancelButton = document.querySelector(".cancel-btn");
const saveButton = document.querySelector(".save-btn");
const taskList = document.querySelector(".task-list");

const titleInput = document.querySelector("#task-title");
const descriptionInput = document.querySelector("#task-description");


// ===============================
// 2. LOAD SAVED TASKS
// ===============================

let tasks = [];

const savedTasks = localStorage.getItem("tasks");

if (savedTasks !== null) {
    tasks = JSON.parse(savedTasks);
}


// ===============================
// 3. SAVE TASKS IN LOCALSTORAGE
// ===============================

function saveTasks() {
    const tasksJSON = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasksJSON);
}


// ===============================
// 4. OPEN MODAL
// ===============================

addTaskButton.addEventListener("click", function () {
    taskModal.style.display = "flex";
});


// ===============================
// 5. CLOSE MODAL
// ===============================

cancelButton.addEventListener("click", function () {
    taskModal.style.display = "none";
});


// ===============================
// 6. ADD NEW TASK
// ===============================

saveButton.addEventListener("click", function () {

    const taskTitle = titleInput.value.trim();
    const taskDescription = descriptionInput.value.trim();

    if (taskTitle === "" || taskDescription === "") {
        alert("Please enter title and description.");
        return;
    }

    const task = {
        title: taskTitle,
        description: taskDescription
    };

    tasks.push(task);

    saveTasks();
    renderTasks();

    titleInput.value = "";
    descriptionInput.value = "";

    taskModal.style.display = "none";
});


// ===============================
// 7. DISPLAY TASKS
// ===============================

function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {

        const taskCard = document.createElement("article");
        taskCard.classList.add("task-card");

        const titleElement = document.createElement("h2");
        titleElement.textContent = task.title;
        taskCard.appendChild(titleElement);

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = task.description;
        taskCard.appendChild(descriptionElement);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.type = "button";
        deleteButton.classList.add("delete-btn");

        deleteButton.addEventListener("click", function () {

            tasks.splice(index, 1);

            saveTasks();
            renderTasks();
        });

        taskCard.appendChild(deleteButton);
        taskList.appendChild(taskCard);
    });
}


// ===============================
// 8. DISPLAY TASKS WHEN PAGE OPENS
// ===============================

renderTasks();
