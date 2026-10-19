
// ===============================
// DOM ELEMENTS
// ===============================

const addTaskButton = document.querySelector("#add-task-btn");
const taskModal = document.querySelector(".task-modal");
const cancelButton = document.querySelector(".cancel-btn");
const saveButton = document.querySelector(".save-btn");
const taskList = document.querySelector(".task-list");


// ===============================
// TASK STATE
// ===============================

const tasks = [];


// ===============================
// OPEN TASK MODAL
// ===============================

addTaskButton.addEventListener("click", function () {
    taskModal.style.display = "flex";
});


// ===============================
// CLOSE TASK MODAL
// ===============================

cancelButton.addEventListener("click", function () {
    taskModal.style.display = "none";
});


// ===============================
// SAVE NEW TASK
// ===============================

saveButton.addEventListener("click", function () {
    const titleInput = document.querySelector("#task-title");
    const descriptionInput = document.querySelector("#task-description");

    if (!titleInput.checkValidity() || !descriptionInput.checkValidity()) {
        titleInput.reportValidity();
        descriptionInput.reportValidity();
        return;
    }

    const taskTitle = titleInput.value.trim();
    const taskDescription = descriptionInput.value.trim();

    const task = {
        title: taskTitle,
        description: taskDescription
    };

    tasks.push(task);

    renderTasks();

    titleInput.value = "";
    descriptionInput.value = "";

    taskModal.style.display = "none";
});


// ===============================
// RENDER TASKS
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
            renderTasks();
        });

        taskCard.appendChild(deleteButton);
        taskList.appendChild(taskCard);
    });
}
