function displayDeleteTask() {
    const editTaskPage = document.getElementById("editTaskPage")

    const deleteTaskPrompt = document.createElement("div")
    deleteTaskPrompt.id = "deleteTaskPrompt"
    editTaskPage.appendChild(deleteTaskPrompt)

    const label = document.createElement("label")
    label.innerHTML = "Delete this task?"
    deleteTaskPrompt.appendChild(label)

    const button = document.createElement("button")
    button.innerHTML = "Confirm deletion"
    button.className = "confirmDelete"
    button.id = "confirmDeleteTask"
    deleteTaskPrompt.appendChild(button)

    const cancel = document.createElement("button")
    cancel.className = "cancel"
    cancel.id = "confirmDeleteTaskCancel"
    cancel.innerHTML = "Cancel"
    deleteTaskPrompt.appendChild(cancel)
}

export { displayDeleteTask }