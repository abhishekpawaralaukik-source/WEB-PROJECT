const addTaskButton = document.querySelector("#add-task-btn");
const taskModal = document.querySelector(".task-modal");

addTaskButton.addEventListener("click", function () {

    taskModal.style.display = "flex";

});

const cancelButton = document.querySelector(".cancel-btn");

cancelButton.addEventListener("click", function () {

    taskModal.style.display = "none";

});

const saveButton = document.querySelector(".save-btn");

saveButton.addEventListener("click", function () {

     taskModal.style.display = "none";

});

