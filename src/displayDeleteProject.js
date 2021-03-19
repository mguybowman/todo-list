function displayDeleteProject() {
    const editProjectPage = document.getElementById("editProjectPage")

    const deleteProjectPrompt = document.createElement("div")
    deleteProjectPrompt.id = "deleteProjectPrompt"
    editProjectPage.appendChild(deleteProjectPrompt)

    const label = document.createElement("label")
    label.innerHTML = "Delete this Project?"
    deleteProjectPrompt.appendChild(label)

    const button = document.createElement("button")
    button.innerHTML = "Confirm deletion"
    button.className = "confirmDelete"
    button.id = "confirmDeleteProject"
    deleteProjectPrompt.appendChild(button)

    const cancel = document.createElement("button")
    cancel.className = "cancel"
    cancel.id = "confirmDeleteProjectCancel"
    cancel.innerHTML = "Cancel"
    deleteProjectPrompt.appendChild(cancel)
}

export { displayDeleteProject }